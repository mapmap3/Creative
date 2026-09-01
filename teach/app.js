const FUTURE_DECADES = [
  { decade: "2030s", subtitle: "AI revolution, quantum computing breakthroughs, Mars missions, and the rise of autonomous systems reshape daily life." },
  { decade: "2040s", subtitle: "Fusion energy goes commercial, neural interfaces mature, and climate engineering projects scale globally." },
  { decade: "2050s", subtitle: "Human settlements on Mars, brain-computer interfaces go mainstream, and longevity medicine extends lifespans." },
  { decade: "2060s", subtitle: "Space mining begins, global population stabilizes, and AI governance frameworks reshape international relations." },
  { decade: "2070s", subtitle: "Interplanetary trade routes established, ocean cities emerge, and synthetic biology transforms agriculture." },
  { decade: "2080s", subtitle: "First missions beyond Mars, global carbon neutrality achieved, and telepresence replaces most physical travel." },
  { decade: "2090s", subtitle: "Asteroid mining at scale, quantum internet connects the solar system, and digital consciousness debates intensify." },
  { decade: "2100s", subtitle: "The dawn of the 22nd century brings interstellar probes, post-scarcity economics, and a truly spacefaring civilization." },
  { decade: "2110s", subtitle: "Terraforming projects advance, humanity surpasses 10 billion across planets, and new forms of governance emerge." },
  { decade: "2120s", subtitle: "A century from now, the descendants of today chart courses to distant stars and redefine what it means to be human." }
];

let allData = [];
let activeFilter = 'all';

function init() {
  allData = [
    ...(typeof HISTORY_DATA !== 'undefined' ? HISTORY_DATA : []),
    ...(typeof SCIENCE_DATA !== 'undefined' ? SCIENCE_DATA : []),
    ...(typeof MATH_DATA !== 'undefined' ? MATH_DATA : []),
    ...(typeof LITERATURE_DATA !== 'undefined' ? LITERATURE_DATA : [])
  ].sort((a, b) => a.sortYear - b.sortYear);

  setupFilters();
  renderTimeline();
  renderFutureTiles();
  setupModal();
  setupScrollAnimation();
}

function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      filterTimeline();
    });
  });
}

function getEraLabel(sortYear) {
  if (sortYear < -1000000000) return 'COSMIC ERA';
  if (sortYear < -10000) return 'PREHISTORIC';
  if (sortYear < -500) return 'ANCIENT WORLD';
  if (sortYear < 500) return 'CLASSICAL ERA';
  if (sortYear < 1400) return 'MEDIEVAL PERIOD';
  if (sortYear < 1600) return 'AGE OF EXPLORATION';
  if (sortYear < 1776) return 'COLONIAL ERA';
  if (sortYear < 1800) return 'AMERICAN REVOLUTION';
  if (sortYear < 1861) return 'EARLY REPUBLIC';
  if (sortYear < 1877) return 'CIVIL WAR ERA';
  if (sortYear < 1914) return 'GILDED AGE';
  if (sortYear < 1920) return 'WORLD WAR I';
  if (sortYear < 1940) return 'INTERWAR YEARS';
  if (sortYear < 1946) return 'WORLD WAR II';
  if (sortYear < 1970) return 'COLD WAR & CIVIL RIGHTS';
  if (sortYear < 1990) return 'LATE 20TH CENTURY';
  if (sortYear < 2000) return 'THE 1990s';
  if (sortYear < 2010) return 'THE 2000s';
  if (sortYear < 2020) return 'THE 2010s';
  return 'THE 2020s';
}

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';
  let lastEra = '';

  allData.forEach(item => {
    const era = getEraLabel(item.sortYear);
    if (era !== lastEra) {
      const marker = document.createElement('div');
      marker.className = 'era-marker';
      marker.innerHTML = `<span>${era}</span>`;
      marker.dataset.era = era;
      timeline.appendChild(marker);
      lastEra = era;
    }

    const el = document.createElement('div');
    el.className = `timeline-item category-${item.category}`;
    el.dataset.category = item.category;
    el.dataset.id = item.id;
    el.innerHTML = `
      <div class="timeline-card" data-id="${item.id}">
        <div class="card-header">
          <span class="card-year">${item.year}</span>
          <span class="card-category-tag tag-${item.category}">${item.category}</span>
        </div>
        <div class="card-title">${item.title}</div>
        <div class="card-summary">${item.summary}</div>
      </div>
    `;
    timeline.appendChild(el);
  });

  updateCount();
}

function filterTimeline() {
  const items = document.querySelectorAll('.timeline-item');
  const markers = document.querySelectorAll('.era-marker');
  const visibleEras = new Set();

  items.forEach(item => {
    const category = item.dataset.category;
    const show = activeFilter === 'all' || category === activeFilter;
    item.classList.toggle('hidden', !show);
    if (show) {
      let prev = item.previousElementSibling;
      while (prev && prev.classList.contains('timeline-item') && prev.classList.contains('hidden')) {
        prev = prev.previousElementSibling;
      }
      if (prev && prev.classList.contains('era-marker')) {
        visibleEras.add(prev.dataset.era);
      }
    }
  });

  markers.forEach(marker => {
    let next = marker.nextElementSibling;
    let hasVisible = false;
    while (next && !next.classList.contains('era-marker')) {
      if (next.classList.contains('timeline-item') && !next.classList.contains('hidden')) {
        hasVisible = true;
        break;
      }
      next = next.nextElementSibling;
    }
    marker.style.display = hasVisible ? '' : 'none';
  });

  const futureSection = document.getElementById('futureSection');
  futureSection.style.display = (activeFilter === 'all' || activeFilter === 'history') ? '' : 'none';

  updateCount();
  setupScrollAnimation();
}

function updateCount() {
  const visible = document.querySelectorAll('.timeline-item:not(.hidden)').length;
  const total = allData.length;
  document.getElementById('cardCount').textContent = activeFilter === 'all'
    ? `${total} events`
    : `${visible} of ${total}`;
}

function renderFutureTiles() {
  const grid = document.getElementById('futureGrid');
  grid.innerHTML = '';
  FUTURE_DECADES.forEach(d => {
    const tile = document.createElement('div');
    tile.className = 'future-tile';
    tile.innerHTML = `
      <div class="future-decade">${d.decade}</div>
      <div class="future-subtitle">${d.subtitle}</div>
    `;
    tile.addEventListener('click', () => {
      openModal({
        title: `The ${d.decade}`,
        year: `${d.decade.slice(0, 3)}0 – ${d.decade.slice(0, 3)}9`,
        detail: d.subtitle,
        category: 'future'
      });
    });
    grid.appendChild(tile);
  });
}

function setupModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  document.getElementById('timeline').addEventListener('click', (e) => {
    const card = e.target.closest('.timeline-card');
    if (!card) return;
    const id = parseInt(card.dataset.id);
    const item = allData.find(d => d.id === id);
    if (item) openModal(item);
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(item) {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalCategory').textContent = item.category;
  document.getElementById('modalCategory').className = `modal-category tag-${item.category}`;
  document.getElementById('modalYear').textContent = item.year;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalDetail').textContent = item.detail;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function setupScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.timeline-item:not(.hidden)').forEach(item => {
    if (!item.classList.contains('visible')) {
      observer.observe(item);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
