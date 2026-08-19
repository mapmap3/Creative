import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.REPO_OWNER || 'mapmap3';
const REPO_NAME = process.env.REPO_NAME || 'Creative';
const CSV_PATH = 'data/attendees.csv';
const LYLA_CSV_PATH = 'data/lyla-calendar.csv';
const BRANCH = process.env.REPO_BRANCH || 'main';

app.use(express.json());
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

app.get('/lyla', (_req, res) => {
  res.sendFile(join(__dirname, 'public', 'lyla', 'index.html'));
});

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
