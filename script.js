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

// NEW mobile filter elements
const mobileFilterBtn = document.getElementById('mobileFilterToggle');
const filterPanel = document.getElementById('filterPanel');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');

let currentSpecies = null;

// -------------------------------------------
// Render Cards
// -------------------------------------------
function renderCards(list) {
  grid.innerHTML = '';
  if (!list.length) {
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

// -------------------------------------------
// Climate Tab Renderer
// -------------------------------------------
function renderClimate(p) {
  climatePaneEl.innerHTML = '';
  const data = window.climateData?.[p.id];
  if (!data) {
    climatePaneEl.innerHTML = '<p class="muted">No climate info available.</p>';
    return;
  }

  const sections = [
    { title: 'Habitat', content: data.habitat },
    { title: 'Zoos & Captivity Notes', content: data.zoos },
    { title: 'Favorite Food', content: data.food },
    { title: 'Breeding Cycle & Phenology', content: data.breeding },
    { title: 'Major Dangers & Predators', content: data.dangers },
    { title: 'Interactions with Humans', content: data.human },
    { title: 'Preservation & Conservation Actions', content: data.preservation },
  ];

  sections.forEach(s => {
    const block = document.createElement('details');
    block.className = 'climate-block';
    block.innerHTML = `
      <summary>${s.title}</summary>
      <div class="climate-content">${s.content}</div>
    `;
    climatePaneEl.appendChild(block);
  });
}

// -------------------------------------------
// Drawer Logic
// -------------------------------------------
function openDrawer(p) {
  drawer.setAttribute('aria-hidden', 'false');
  currentSpecies = p;

  // Reset tabs
  tabs.forEach(t => t.classList.remove('active'));
  tabs[0].classList.add('active');

  overviewPaneEl.style.display = 'block';
  biologyPaneEl.style.display = 'none';
  climatePaneEl.style.display = 'none';
  conservationPaneEl.style.display = 'none';

  // Overview
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
    <ul class="fact-list">
      ${o.facts.map(f => `<li>${f}</li>`).join('')}
    </ul>
  `;

  // Biology
  biologyPaneEl.innerHTML = `
    <h3>Biology & Behaviour</h3>
    <p class="muted">${p.biologyPane.biology}</p>
  `;

  // Conservation
  conservationPaneEl.innerHTML = `
    <h3>Conservation & Ecology</h3>
    <p class="muted">${p.conservationPane.conservation}</p>
  `;

  // Climate
  renderClimate(p);

  tabs[0].focus();
}

closeDrawer.onclick = () => drawer.setAttribute('aria-hidden', 'true');

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') drawer.setAttribute('aria-hidden', 'true');
});

// -------------------------------------------
// Tab Switching
// -------------------------------------------
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const tabName = tab.dataset.tab;

    overviewPaneEl.style.display = tabName === 'overview' ? 'block' : 'none';
    biologyPaneEl.style.display = tabName === 'biology' ? 'block' : 'none';
    climatePaneEl.style.display = tabName === 'climate' ? 'block' : 'none';
    conservationPaneEl.style.display = tabName === 'conservation' ? 'block' : 'none';
  });
});

// -------------------------------------------
// Search / Filter / Sort
// -------------------------------------------
function applyFilters() {
  const q = search.value.trim().toLowerCase();
  const region = filterRegion.value;

  let list = penguins.filter(p =>
    region === 'all' ||
    p.overviewPane.region.toLowerCase() === region.toLowerCase()
  );

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
      list.sort((a, b) =>
        a.overviewPane.name.localeCompare(b.overviewPane.name)
      );
  }

  renderCards(list);
}

// Desktop filter events
search.addEventListener('input', applyFilters);
filterRegion.addEventListener('change', applyFilters);
sortBy.addEventListener('change', applyFilters);

// -------------------------------------------
// Mobile Filter Toggle
// -------------------------------------------
if (mobileFilterBtn) {
  mobileFilterBtn.addEventListener('click', () => {
    const isOpen = filterPanel.style.display === 'block';
    filterPanel.style.display = isOpen ? 'none' : 'block';
    mobileFilterBtn.textContent = isOpen ? 'Show Filters' : 'Hide Filters';
  });
}

// -------------------------------------------
// Clear Filters Button (Mobile)
// -------------------------------------------
if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener('click', () => {
    search.value = '';
    filterRegion.value = 'all';
    sortBy.value = 'name';

    applyFilters();
  });
}

// -------------------------------------------
// Init
// -------------------------------------------
renderCards(penguins);
 
