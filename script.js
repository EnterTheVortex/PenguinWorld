// --- DOM references ---
const grid = document.getElementById('penguinGrid');
const search = document.getElementById('search');
const filterRegion = document.getElementById('filterRegion');
const sortBy = document.getElementById('sortBy');
const drawer = document.getElementById('detailDrawer');
const closeDrawer = document.getElementById('closeDrawer');
const tabs = document.querySelectorAll('.tab');
const overviewPaneEl = document.getElementById('overviewPane');
const biologyPaneEl = document.getElementById('biologyPane');
const conservationPaneEl = document.getElementById('conservationPane');
const climatePaneEl = document.getElementById('climatePane');

let currentSpecies = null;

// --- Render cards ---
function renderCards(list) {
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = '<p class="muted">No penguins found matching your criteria.</p>';
    return;
  }

  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="thumb"><img src="${p.overviewPane.image}" alt="${p.overviewPane.name}"></div>
      <h3>${p.overviewPane.name}</h3>
      <p>${p.overviewPane.scientific}</p>
    `;
    card.onclick = () => openDrawer(p);
    card.onkeypress = e => { if (e.key === 'Enter') openDrawer(p); };
    grid.appendChild(card);
  });
}

// --- Render climate tab ---
function renderClimate(p) {
  climatePaneEl.innerHTML = '';
  if (!p.climatePane || !p.climatePane.climate || p.climatePane.climate.length === 0) {
    climatePaneEl.innerHTML = '<p class="muted">No climate info available.</p>';
    return;
  }

  p.climatePane.climate.forEach(c => {
    const block = document.createElement('details');
    block.className = 'climate-block';
    block.innerHTML = `<summary>${c.title}</summary><div class="climate-content">${c.description}</div>`;
    climatePaneEl.appendChild(block);
  });
}

// --- Open / Populate drawer ---
function openDrawer(p) {
  drawer.setAttribute('aria-hidden', 'false');
  tabs.forEach(t => t.classList.remove('active'));
  tabs[0].classList.add('active');

  // Show overview by default
  overviewPaneEl.style.display = 'block';
  biologyPaneEl.style.display = 'none';
  climatePaneEl.style.display = 'none';
  conservationPaneEl.style.display = 'none';

  const o = p.overviewPane;
  overviewPaneEl.innerHTML = `
    <h2>${o.name} <small style="font-weight:400;color:var(--muted);">${o.scientific}</small></h2>
    <img class="detail-img" src="${o.image}" alt="${o.name}">
    <div class="spec-meta">
      <div class="meta-pill">Length: ${o.length_cm} cm</div>
      <div class="meta-pill">Weight: ${o.weight_kg} kg</div>
      <div class="meta-pill">Region: ${o.region}</div>
      <div class="meta-pill">Status: ${o.status}</div>
    </div>
    <p>${o.summary}</p>
    <h4>Diet & Habitat</h4>
    <p class="muted">${o.diet} · ${o.habitat}</p>
    <h4>Notable facts</h4>
    <ul class="fact-list">${o.facts.map(f => `<li>${f}</li>`).join('')}</ul>
  `;

  biologyPaneEl.innerHTML = `
    <h3>Biology & Behaviour</h3>
    <p class="muted">${p.biologyPane.biology}</p>
  `;

  conservationPaneEl.innerHTML = `
    <h3>Conservation & Ecology</h3>
    <p class="muted">${p.conservationPane.conservation}</p>
  `;

  // Render climate tab
  renderClimate(p);

  currentSpecies = p;
  tabs[0].focus();
}

// --- Close drawer ---
closeDrawer.onclick = () => drawer.setAttribute('aria-hidden', 'true');

// --- Tab handling ---
tabs.forEach(t => {
  t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');

    const tab = t.dataset.tab;
    overviewPaneEl.style.display = (tab === 'overview') ? 'block' : 'none';
    biologyPaneEl.style.display = (tab === 'biology') ? 'block' : 'none';
    climatePaneEl.style.display = (tab === 'climate') ? 'block' : 'none';
    conservationPaneEl.style.display = (tab === 'conservation') ? 'block' : 'none';
  });
});

// --- Search & Filter ---
function applyFilters() {
  const q = search.value.trim().toLowerCase();
  const region = filterRegion.value;
  let list = penguins.filter(p => region === 'all' || p.overviewPane.region === region);

  if (q) {
    list = list.filter(p =>
      p.overviewPane.name.toLowerCase().includes(q) ||
      p.overviewPane.scientific.toLowerCase().includes(q) ||
      p.overviewPane.summary.toLowerCase().includes(q) ||
      (p.overviewPane.facts && p.overviewPane.facts.join(' ').toLowerCase().includes(q)) ||
      (p.biologyPane.biology && p.biologyPane.biology.toLowerCase().includes(q))
    );
  }

  switch (sortBy.value) {
    case 'size_desc':
      list.sort((a, b) => b.overviewPane.length_cm - a.overviewPane.length_cm);
      break;
    case 'size_asc':
      list.sort((a, b) => a.overviewPane.length_cm - b.overviewPane.length_cm);
      break;
    default:
      list.sort((a, b) => a.overviewPane.name.localeCompare(b.overviewPane.name));
  }

  renderCards(list);
}

search.addEventListener('input', applyFilters);
filterRegion.addEventListener('change', applyFilters);
sortBy.addEventListener('change', applyFilters);

// --- Close drawer with ESC ---
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') drawer.setAttribute('aria-hidden', 'true');
});

// --- Initialize ---
renderCards(penguins);
