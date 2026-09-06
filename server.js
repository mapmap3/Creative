import express from 'express';
import Stripe from 'stripe';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

const STRIPE_SECRET_KEY = (process.env.STRIPE_SECRET_KEY || '').trim();
const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;
const APP_URL = (process.env.APP_URL || `http://localhost:${PORT}`).replace(/\/+$/, '');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.REPO_OWNER || 'mapmap3';
const REPO_NAME = process.env.REPO_NAME || 'Creative';
const CSV_PATH = 'data/attendees.csv';
const LYLA_CSV_PATH = 'data/lyla-calendar.csv';
const BRANCH = process.env.REPO_BRANCH || 'main';

const APP_MODE = process.env.APP_MODE || 'bach';

app.use(express.json());

app.get('/', (_req, res) => {
  if (APP_MODE === 'calendar') {
    return res.sendFile(join(__dirname, 'public', 'calendar', 'index.html'));
  }
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.use(express.static(join(__dirname, 'public')));

async function githubRequest(endpoint, options = {}) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${res.status}: ${body}`);
  }
  return res.json();
}

function csvToAttendees(csv) {
  const lines = csv.trim().split('\n');
  return lines.slice(1).filter(l => l.trim()).map((line, i) => {
    const [name, role, status] = line.split(',').map(s => s.trim());
    return { id: i + 1, name, role, status };
  });
}

function attendeesToCsv(attendees) {
  const header = 'name,role,status';
  const rows = attendees.map(a => `${a.name},${a.role},${a.status}`);
  return header + '\n' + rows.join('\n') + '\n';
}

app.get('/api/attendees', async (_req, res) => {
  try {
    const data = await githubRequest(`/contents/${CSV_PATH}?ref=${BRANCH}`);
    const csv = Buffer.from(data.content, 'base64').toString('utf-8');
    const attendees = csvToAttendees(csv);
    res.json({ attendees, sha: data.sha });
  } catch (err) {
    console.error('GET /api/attendees error:', err.message);
    res.status(500).json({ error: 'Failed to load attendees' });
  }
});

app.put('/api/attendees', async (req, res) => {
  try {
    const { attendees, sha } = req.body;
    if (!attendees || !sha) {
      return res.status(400).json({ error: 'attendees and sha required' });
    }
    const csv = attendeesToCsv(attendees);
    const content = Buffer.from(csv).toString('base64');
    const data = await githubRequest(`/contents/${CSV_PATH}`, {
      method: 'PUT',
      body: JSON.stringify({
        message: 'Update attendees',
        content,
        sha,
        branch: BRANCH,
      }),
    });
    res.json({ sha: data.content.sha });
  } catch (err) {
    console.error('PUT /api/attendees error:', err.message);
    if (err.message.includes('409')) {
      return res.status(409).json({ error: 'Conflict — someone else updated. Please refresh.' });
    }
    res.status(500).json({ error: 'Failed to save attendees' });
  }
});

// Lyla calendar API
function csvToBookings(csv) {
  const lines = csv.trim().split('\n');
  return lines.slice(1).filter(l => l.trim()).map(line => {
    const [sitter, date] = line.split(',').map(s => s.trim());
    return { sitter, date };
  });
}

function bookingsToCsv(bookings) {
  const header = 'sitter,date';
  const rows = bookings.map(b => `${b.sitter},${b.date}`);
  return header + '\n' + rows.join('\n') + '\n';
}

app.get('/api/lyla-calendar', async (_req, res) => {
  try {
    const data = await githubRequest(`/contents/${LYLA_CSV_PATH}?ref=${BRANCH}`);
    const csv = Buffer.from(data.content, 'base64').toString('utf-8');
    const bookings = csvToBookings(csv);
    res.json({ bookings, sha: data.sha });
  } catch (err) {
    console.error('GET /api/lyla-calendar error:', err.message);
    res.status(500).json({ error: 'Failed to load calendar' });
  }
});

app.put('/api/lyla-calendar', async (req, res) => {
  try {
    const { bookings, sha } = req.body;
    if (!bookings || !sha) {
      return res.status(400).json({ error: 'bookings and sha required' });
    }
    const csv = bookingsToCsv(bookings);
    const content = Buffer.from(csv).toString('base64');
    const data = await githubRequest(`/contents/${LYLA_CSV_PATH}`, {
      method: 'PUT',
      body: JSON.stringify({
        message: 'Update Lyla calendar',
        content,
        sha,
        branch: BRANCH,
      }),
    });
    res.json({ sha: data.content.sha });
  } catch (err) {
    console.error('PUT /api/lyla-calendar error:', err.message);
    if (err.message.includes('409')) {
      return res.status(409).json({ error: 'Conflict — someone else updated. Please refresh.' });
    }
    res.status(500).json({ error: 'Failed to save calendar' });
  }
});

app.get('/calendar', (_req, res) => {
  res.sendFile(join(__dirname, 'public', 'calendar', 'index.html'));
});

app.get('/mike', (_req, res) => {
  res.sendFile(join(__dirname, 'mike', 'index.html'));
});

app.use('/mike', express.static(join(__dirname, 'mike')));

app.use('/teach', express.static(join(__dirname, 'teach')));

app.use('/vitamins', express.static(join(__dirname, 'vitamins')));

// Donate checkout session
app.post('/api/donate', async (req, res) => {
  if (!stripe) {
    return res.status(503).json({ error: 'Stripe is not configured.' });
  }
  const amount = Number(req.body.amount);
  if (!Number.isFinite(amount) || amount < 5 || amount > 100) {
    return res.status(400).json({ error: 'Amount must be between $5 and $100.' });
  }
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: Math.round(amount * 100),
          product_data: {
            name: 'Donation to GiveAndDo Inc.',
            description: 'Help end senior loneliness. 100% goes to GiveAndDo Inc., a 501(c)(3) nonprofit.',
          },
        },
      }],
      metadata: { type: 'donation', source: 'mikepanicci.com' },
      success_url: `${APP_URL}/mike?donated=success`,
      cancel_url: `${APP_URL}/mike?donated=cancelled`,
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error('POST /api/donate error:', err.message);
    res.status(500).json({ error: 'Failed to create checkout session.' });
  }
});

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
