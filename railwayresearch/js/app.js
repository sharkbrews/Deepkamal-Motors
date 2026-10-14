// Indian Railways Market Research Dashboard Logic
// Built strictly using data from RAILWAY_DATA (no invented numbers/officers)

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHeroStats();
  initMapModule();
  initExplorerModule();
  initOrgChartModule();
  initHydraulicsModule();
  initProcurementModule();
  initRoleLookupModule();
  initRoadmapModule();
  initGlossaryModule();
  initNavigation();
});

/* ==========================================================================
   Theme Management
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('railway_dashboard_theme') || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('railway_dashboard_theme', next);
      updateThemeIcon(next);
      if (window.railwayLeafletMap) {
        window.railwayLeafletMap.invalidateSize();
      }
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  icon.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
}

/* ==========================================================================
   1. Hero Stats
   ========================================================================== */
function renderHeroStats() {
  const container = document.getElementById('hero-stats-grid');
  if (!container) return;

  const stats = window.RAILWAY_DATA.stats;
  container.innerHTML = stats.map(st => `
    <div class="stat-card" data-stat="${st.id}">
      <div class="stat-card-header">
        <span class="stat-card-icon">🚂</span>
        <span class="badge-tag src" title="${window.RAILWAY_DATA.meta.tagsInfo.src}">[${st.tag}] Verified</span>
      </div>
      <div class="stat-number">
        ${st.value}
        ${st.unit ? `<span class="stat-unit">${st.unit}</span>` : ''}
      </div>
      <div class="stat-label">${st.label}</div>
      <div class="stat-subtext">${st.subtext}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   2. Interactive Map Module (Leaflet)
   ========================================================================== */
let mapInstance = null;
let mapMarkers = [];

function initMapModule() {
  const mapElement = document.getElementById('railway-map');
  if (!mapElement) return;

  // Fallback check if Leaflet is loaded
  if (typeof L === 'undefined') {
    mapElement.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
        <p>Interactive Map is loading or offline.</p>
        <p>Use the Zone Explorer below to view all 18 zones and divisions.</p>
      </div>`;
    renderZoneSidebar(window.RAILWAY_DATA.zones[0]);
    renderQuickZonesList(window.RAILWAY_DATA.zones);
    return;
  }

  // Init Leaflet map centered on India
  mapInstance = L.map('railway-map', {
    center: [22.2, 79.8],
    zoom: 5,
    minZoom: 4,
    maxZoom: 12,
    scrollWheelZoom: false
  });
  window.railwayLeafletMap = mapInstance;

  // OpenStreetMap tile layer: free, reliable, no API key required
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
  }).addTo(mapInstance);

  plotZoneMarkers(window.RAILWAY_DATA.zones);
  renderZoneSidebar(window.RAILWAY_DATA.zones[0]);
  renderQuickZonesList(window.RAILWAY_DATA.zones);
  setupMapFilters();
  setupConfusionsModule();

  setTimeout(() => {
    if (mapInstance) {
      mapInstance.invalidateSize();
    }
  }, 250);
}

function plotZoneMarkers(zonesToRender) {
  // Clear existing markers
  mapMarkers.forEach(m => mapInstance.removeLayer(m));
  mapMarkers = [];

  zonesToRender.forEach(zone => {
    // Custom DivIcon for railway theme
    const iconHtml = `
      <div style="
        background: #0b2545;
        border: 2px solid #fbbf24;
        color: #ffffff;
        font-size: 10px;
        font-weight: 800;
        border-radius: 999px;
        padding: 4px 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px rgba(0,0,0,0.35);
        white-space: nowrap;
        cursor: pointer;
        transition: transform 0.15s ease;
      ">
        <span style="color:#fbbf24; margin-right:3px;">●</span>${zone.code}
      </div>
    `;

    const customIcon = L.divIcon({
      html: iconHtml,
      className: 'rail-zone-marker',
      iconSize: [52, 26],
      iconAnchor: [26, 13]
    });

    const marker = L.marker([zone.lat, zone.lng], { icon: customIcon }).addTo(mapInstance);

    marker.bindPopup(`
      <div style="font-family: inherit; font-size: 13px; line-height: 1.4;">
        <strong style="color: #0b2545; font-size: 14px;">${zone.name} (${zone.code})</strong><br>
        <strong>HQ:</strong> ${zone.hq}<br>
        <strong>Formed:</strong> ${zone.formed}<br>
        <strong>Divisions:</strong> ${zone.divCount}
      </div>
    `);

    marker.on('click', () => {
      selectZone(zone);
    });

    marker.zoneData = zone;
    mapMarkers.push(marker);
  });
}

function selectZone(zone) {
  renderZoneSidebar(zone);

  // Pan smoothly
  if (mapInstance) {
    mapInstance.flyTo([zone.lat, zone.lng], 6, { duration: 0.8 });
  }

  // Highlight quick list item
  const quickItems = document.querySelectorAll('.zone-quick-item');
  quickItems.forEach(el => {
    if (el.getAttribute('data-code') === zone.code) {
      el.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      el.classList.remove('active');
    }
  });
}

function renderZoneSidebar(zone) {
  const panel = document.getElementById('map-selected-zone-display');
  if (!panel) return;

  panel.innerHTML = `
    <div class="selected-zone-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.4rem;">
        <div>
          <h3>${zone.name}</h3>
          <span style="font-weight:700; color:var(--navy-600); font-size:0.88rem;">Code: ${zone.code}</span>
        </div>
        <span class="badge-tag src" title="${window.RAILWAY_DATA.meta.tagsInfo.src}">[SRC]</span>
      </div>

      <div class="zone-meta-grid">
        <div class="zone-meta-item">
          <div class="meta-label">Headquarters</div>
          <div class="meta-val">${zone.hq}</div>
        </div>
        <div class="zone-meta-item">
          <div class="meta-label">Established</div>
          <div class="meta-val">${zone.formed}</div>
        </div>
        <div class="zone-meta-item">
          <div class="meta-label">Divisions Count</div>
          <div class="meta-val" style="color:var(--yellow-600);">${zone.divCount} Divisions</div>
        </div>
        <div class="zone-meta-item">
          <div class="meta-label">Map Coords [KNOW]</div>
          <div class="meta-val">${zone.lat.toFixed(2)}°N, ${zone.lng.toFixed(2)}°E</div>
        </div>
      </div>

      <div style="margin-top:0.75rem;">
        <div style="font-size:0.78rem; text-transform:uppercase; font-weight:700; color:var(--text-muted); margin-bottom:0.35rem;">
          Operating Divisions (${zone.divCount})
        </div>
        <div class="divisions-chip-list">
          ${zone.divisions.map(d => `<span class="div-chip">${d}</span>`).join('')}
        </div>
      </div>

      ${zone.workshops ? `
        <div style="margin-top:0.85rem; font-size:0.82rem; background:var(--bg-surface); padding:0.5rem 0.65rem; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
          <strong>Major Workshops [KNOW]:</strong> ${zone.workshops}
        </div>
      ` : ''}

      ${zone.notes ? `
        <div style="margin-top:0.6rem; font-size:0.82rem; background:var(--yellow-50); border-left:3px solid var(--yellow-500); padding:0.5rem 0.65rem; border-radius:0 var(--radius-sm) var(--radius-sm) 0; color:var(--amber-800);">
          <strong>Research Note [SRC]:</strong> ${zone.notes}
        </div>
      ` : ''}

      <div style="margin-top:1rem; padding-top:0.75rem; border-top:1px solid var(--border-light); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.78rem; color:var(--text-muted);">Official Portal:</span>
        <a href="https://${zone.website}" target="_blank" rel="noopener" style="font-size:0.82rem; font-weight:600; display:inline-flex; align-items:center; gap:0.25rem;">
          ${zone.website} ↗
        </a>
      </div>
    </div>
  `;
}

function renderQuickZonesList(zones) {
  const container = document.getElementById('map-quick-zones-list');
  if (!container) return;

  container.innerHTML = zones.map(z => `
    <div class="zone-quick-item" data-code="${z.code}" onclick="handleZoneQuickClick('${z.code}')">
      <div>
        <strong>${z.name}</strong> <span style="color:var(--text-muted); font-size:0.75rem;">(${z.code})</span>
      </div>
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <span style="font-size:0.75rem; color:var(--text-muted);">${z.hq}</span>
        <span class="badge-tag src" style="font-size:0.65rem;">${z.divCount} Divs</span>
      </div>
    </div>
  `).join('');
}

window.handleZoneQuickClick = function(code) {
  const zone = window.RAILWAY_DATA.zones.find(z => z.code === code);
  if (zone) {
    selectZone(zone);
  }
};

function setupMapFilters() {
  const searchInput = document.getElementById('map-search-input');
  const divFilter = document.getElementById('map-div-filter');
  const resetBtn = document.getElementById('map-reset-btn');

  function filterZones() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const divValue = divFilter ? divFilter.value : 'all';

    const filtered = window.RAILWAY_DATA.zones.filter(z => {
      const matchesDiv = divValue === 'all' || z.divCount.toString() === divValue;
      const matchesQuery = !query || 
        z.name.toLowerCase().includes(query) ||
        z.code.toLowerCase().includes(query) ||
        z.hq.toLowerCase().includes(query) ||
        z.divisions.some(d => d.toLowerCase().includes(query));
      return matchesDiv && matchesQuery;
    });

    plotZoneMarkers(filtered);
    renderQuickZonesList(filtered);

    if (filtered.length > 0) {
      selectZone(filtered[0]);
    }
  }

  if (searchInput) searchInput.addEventListener('input', filterZones);
  if (divFilter) divFilter.addEventListener('change', filterZones);
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (divFilter) divFilter.value = 'all';
      plotZoneMarkers(window.RAILWAY_DATA.zones);
      renderQuickZonesList(window.RAILWAY_DATA.zones);
      if (mapInstance) {
        mapInstance.flyTo([22.2, 79.8], 5);
      }
      selectZone(window.RAILWAY_DATA.zones[0]);
    });
  }
}

function setupConfusionsModule() {
  const container = document.getElementById('confusions-grid-container');
  if (!container) return;

  container.innerHTML = window.RAILWAY_DATA.confusingFacts.map(c => `
    <div class="confusion-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <h4>${c.title}</h4>
        <span class="badge-tag src">[SRC]</span>
      </div>
      <p style="color:var(--text-secondary); margin-top:0.25rem;">${c.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   3. Zone-to-Division Explorer (Tree & Sunburst)
   ========================================================================== */
function initExplorerModule() {
  renderTreeExplorer();
  setupExplorerControls();
  initSunburstCanvas();
}

function renderTreeExplorer() {
  const container = document.getElementById('tree-zones-container');
  if (!container) return;

  const zones = window.RAILWAY_DATA.zones;

  container.innerHTML = zones.map(z => `
    <div class="zone-tree-node" id="tree-node-${z.code}" data-code="${z.code}">
      <div class="zone-tree-header" onclick="toggleTreeNode('${z.code}')">
        <div class="zone-name-title">
          <span class="tree-toggle-arrow" id="arrow-${z.code}">▶</span>
          <span>${z.name}</span>
          <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">(${z.code})</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.4rem;">
          <span style="font-size:0.75rem; color:var(--text-muted);">${z.hq}</span>
          <span class="badge-tag src">${z.divCount} Divs</span>
        </div>
      </div>
      <div class="zone-tree-body" id="tree-body-${z.code}">
        <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">
          Operating Divisions (${z.divCount}):
        </div>
        <div class="divisions-chip-list">
          ${z.divisions.map(d => `<span class="div-chip">${d}</span>`).join('')}
        </div>
        <div style="margin-top:0.6rem; font-size:0.75rem; color:var(--text-muted); display:flex; justify-content:space-between;">
          <span>Formed: ${z.formed}</span>
          <a href="https://${z.website}" target="_blank" rel="noopener">Zone Portal ↗</a>
        </div>
      </div>
    </div>
  `).join('');
}

window.toggleTreeNode = function(code) {
  const node = document.getElementById(`tree-node-${code}`);
  const arrow = document.getElementById(`arrow-${code}`);
  if (!node) return;

  const isExpanded = node.classList.contains('expanded');
  if (isExpanded) {
    node.classList.remove('expanded');
    if (arrow) arrow.textContent = '▶';
  } else {
    node.classList.add('expanded');
    if (arrow) arrow.textContent = '▼';
  }
};

function setupExplorerControls() {
  const expandAllBtn = document.getElementById('tree-expand-all');
  const collapseAllBtn = document.getElementById('tree-collapse-all');
  const searchInput = document.getElementById('tree-search-input');
  const treeViewBtn = document.getElementById('btn-view-tree');
  const sunburstViewBtn = document.getElementById('btn-view-sunburst');
  const treeContainer = document.getElementById('tree-view-container');
  const sunburstContainer = document.getElementById('sunburst-view-container');

  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.zone-tree-node').forEach(n => {
        n.classList.add('expanded');
        const arrow = n.querySelector('.tree-toggle-arrow');
        if (arrow) arrow.textContent = '▼';
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.zone-tree-node').forEach(n => {
        n.classList.remove('expanded');
        const arrow = n.querySelector('.tree-toggle-arrow');
        if (arrow) arrow.textContent = '▶';
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      document.querySelectorAll('.zone-tree-node').forEach(n => {
        const code = n.getAttribute('data-code');
        const zone = window.RAILWAY_DATA.zones.find(z => z.code === code);
        if (!zone) return;

        const matches = !q ||
          zone.name.toLowerCase().includes(q) ||
          zone.code.toLowerCase().includes(q) ||
          zone.hq.toLowerCase().includes(q) ||
          zone.divisions.some(d => d.toLowerCase().includes(q));

        n.style.display = matches ? 'block' : 'none';
        if (q && matches) {
          n.classList.add('expanded');
          const arrow = n.querySelector('.tree-toggle-arrow');
          if (arrow) arrow.textContent = '▼';
        }
      });
    });
  }

  if (treeViewBtn && sunburstViewBtn && treeContainer && sunburstContainer) {
    treeViewBtn.addEventListener('click', () => {
      treeViewBtn.classList.add('active');
      sunburstViewBtn.classList.remove('active');
      treeContainer.style.display = 'block';
      sunburstContainer.style.display = 'none';
    });

    sunburstViewBtn.addEventListener('click', () => {
      sunburstViewBtn.classList.add('active');
      treeViewBtn.classList.remove('active');
      treeContainer.style.display = 'none';
      sunburstContainer.style.display = 'block';
      drawSunburst();
    });
  }
}

/* Sunburst Canvas Visualization (Interactive Radial Hierarchy) */
function initSunburstCanvas() {
  // Will be drawn upon tab activation or resized
  window.addEventListener('resize', () => {
    const sunburstContainer = document.getElementById('sunburst-view-container');
    if (sunburstContainer && sunburstContainer.style.display === 'block') {
      drawSunburst();
    }
  });
}

function drawSunburst() {
  const canvas = document.getElementById('sunburst-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  const size = Math.min(canvas.parentElement.clientWidth - 40, 560);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;
  ctx.scale(dpr, dpr);

  const centerX = size / 2;
  const centerY = size / 2;
  const zones = window.RAILWAY_DATA.zones;
  const totalDivisions = 70;

  ctx.clearRect(0, 0, size, size);

  // Center Circle: Indian Railways
  ctx.beginPath();
  ctx.arc(centerX, centerY, 55, 0, 2 * Math.PI);
  ctx.fillStyle = '#0b2545';
  ctx.fill();
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 11px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Indian Railways', centerX, centerY - 8);
  ctx.fillStyle = '#fbbf24';
  ctx.font = '9px Inter, sans-serif';
  ctx.fillText('18 Zones / 70 Divs', centerX, centerY + 10);

  // Inner Ring: 18 Zones
  const rInner = 65;
  const rMiddle = 135;
  const rOuter = 215;

  let currentAngle = 0;
  const zoneColors = [
    '#1e3a8a', '#1e40af', '#1d4ed8', '#2563eb', '#3b82f6', '#0284c7',
    '#0369a1', '#075985', '#0f766e', '#115e59', '#15803d', '#166534',
    '#854d0e', '#9a3412', '#b91c1c', '#6d28d9', '#581c87', '#3730a3'
  ];

  zones.forEach((zone, idx) => {
    // Angular width proportional to division count (minimum weight for 0 divs)
    const weight = Math.max(zone.divCount, 1.2);
    const sliceAngle = (weight / 72.2) * (2 * Math.PI);
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;

    // Draw Zone Slice
    ctx.beginPath();
    ctx.arc(centerX, centerY, rMiddle, startAngle, endAngle);
    ctx.arc(centerX, centerY, rInner, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = zoneColors[idx % zoneColors.length];
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Zone Code Text
    const midAngle = startAngle + sliceAngle / 2;
    const textRadius = (rInner + rMiddle) / 2;
    const tx = centerX + textRadius * Math.cos(midAngle);
    const ty = centerY + textRadius * Math.sin(midAngle);

    ctx.save();
    ctx.translate(tx, ty);
    ctx.rotate(midAngle + Math.PI / 2);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(zone.code, 0, 0);
    ctx.restore();

    // Outer Ring: Divisions
    if (zone.divCount > 0) {
      const divAngleStep = sliceAngle / zone.divCount;
      zone.divisions.forEach((divName, dIdx) => {
        const dStart = startAngle + dIdx * divAngleStep;
        const dEnd = dStart + divAngleStep;

        ctx.beginPath();
        ctx.arc(centerX, centerY, rOuter, dStart, dEnd);
        ctx.arc(centerX, centerY, rMiddle, dEnd, dStart, true);
        ctx.closePath();
        ctx.fillStyle = dIdx % 2 === 0 ? 'rgba(15, 48, 87, 0.85)' : 'rgba(11, 37, 69, 0.7)';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    }

    currentAngle = endAngle;
  });

  // Instruction caption
  const caption = document.getElementById('sunburst-caption');
  if (caption) {
    caption.textContent = `Sunburst view: Inner ring shows 18 Zonal HQs; Outer ring shows each of the ~70 operating divisions.`;
  }
}

/* ==========================================================================
   4. Org Chart Module
   ========================================================================== */
function initOrgChartModule() {
  const container = document.getElementById('org-hierarchy-container');
  if (!container) return;

  const data = window.RAILWAY_DATA.orgHierarchy;

  container.innerHTML = data.map((lvl, idx) => `
    <div class="org-level-card" id="org-card-${lvl.id}">
      <span class="org-level-badge">${lvl.level}</span>
      <div class="org-level-header">
        <div>
          <h3 class="org-level-title">${lvl.title}</h3>
          <div class="org-level-role">${lvl.roleHeader}</div>
        </div>
        <span class="badge-tag src" title="${window.RAILWAY_DATA.meta.tagsInfo.src}">[SRC]</span>
      </div>

      <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.5rem;">
        <strong>Strategic Scope:</strong> ${lvl.scope}
      </div>

      <div class="org-who-buys-box">
        <strong style="color:var(--navy-900); display:block; margin-bottom:0.25rem;">
          🛒 Who Buys What & Relevance to Hydraulic Suppliers:
        </strong>
        ${lvl.buyerRole}
      </div>

      ${lvl.subEntities ? `
        <div class="org-sub-entities-grid">
          ${lvl.subEntities.map(sub => `<div class="org-sub-badge">📌 ${sub}</div>`).join('')}
        </div>
      ` : ''}

      ${lvl.phods ? `
        <div style="margin-top:0.75rem;">
          <div style="font-size:0.78rem; text-transform:uppercase; font-weight:700; color:var(--text-muted); margin-bottom:0.35rem;">
            Principal Heads of Departments (PHODs):
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:0.5rem;">
            ${lvl.phods.map(p => `
              <div style="background:var(--bg-subtle); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); border:1px solid var(--border-light); font-size:0.8rem;">
                <strong style="color:var(--navy-600);">${p.code}</strong> - ${p.name}
                <div style="font-size:0.74rem; color:var(--text-muted);">${p.function}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${lvl.officers ? `
        <div style="margin-top:0.75rem;">
          <div style="font-size:0.78rem; text-transform:uppercase; font-weight:700; color:var(--text-muted); margin-bottom:0.35rem;">
            Key Divisional Officers for Maintenance & Spares:
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:0.5rem;">
            ${lvl.officers.map(o => `
              <div style="background:var(--bg-subtle); padding:0.45rem 0.65rem; border-radius:var(--radius-sm); border:1px solid var(--border-light); font-size:0.8rem;">
                <strong style="color:var(--navy-600);">${o.code}</strong> (${o.name})
                <div style="font-size:0.74rem; color:var(--text-muted);">${o.function}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `).join('');

  renderProductionUnits();
}

function renderProductionUnits() {
  const container = document.getElementById('org-pu-container');
  if (!container) return;

  const pus = window.RAILWAY_DATA.productionUnits;
  container.innerHTML = `
    <div style="margin-top:1.5rem; background:var(--bg-card); border:1px solid var(--border-light); border-radius:var(--radius-md); padding:1.25rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
        <div>
          <h3 style="font-size:1.1rem; color:var(--navy-900);">Production Units (Report Directly to Railway Board)</h3>
          <p style="font-size:0.82rem; color:var(--text-muted);">Independent manufacturing factories issuing their own tenders on GeM & IREPS</p>
        </div>
        <span class="badge-tag know">[KNOW]</span>
      </div>
      <div class="pu-grid">
        ${pus.map(pu => `
          <div class="pu-card">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <h4>${pu.name}</h4>
              <span class="badge-tag ${pu.tag === 'SRC' ? 'src' : 'know'}">[${pu.tag}]</span>
            </div>
            <div style="color:var(--navy-600); font-weight:600; margin:0.25rem 0;">📍 ${pu.location}</div>
            <div style="color:var(--text-primary);"><strong>Makes:</strong> ${pu.makes}</div>
            ${pu.note ? `<div style="font-size:0.75rem; color:var(--amber-800); margin-top:0.35rem; background:var(--yellow-50); padding:0.25rem 0.4rem; border-radius:3px;">${pu.note}</div>` : ''}
            <div style="margin-top:0.5rem; font-size:0.76rem;">
              <a href="https://${pu.website}" target="_blank" rel="noopener">Portal: ${pu.website} ↗</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ==========================================================================
   5. Where Hydraulics Are Used Module
   ========================================================================== */
function initHydraulicsModule() {
  renderHydraulicsCards('all');
  renderTenderShowcase();
  setupHydraulicsFilters();
}

function renderHydraulicsCards(filter) {
  const container = document.getElementById('hydraulic-cards-grid');
  if (!container) return;

  const searchInput = document.getElementById('hydraulic-search-input');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  let apps = window.RAILWAY_DATA.hydraulicApplications;

  if (filter === 'top') {
    apps = apps.filter(a => a.productFit.toLowerCase().includes('very high'));
  } else if (filter === 'workshop') {
    apps = apps.filter(a => a.category.includes('Maintenance') || a.category.includes('Rolling Stock'));
  } else if (filter === 'track') {
    apps = apps.filter(a => a.category.includes('Track') || a.category.includes('Permanent'));
  } else if (filter === 'pu') {
    apps = apps.filter(a => a.category.includes('Manufacturing') || a.category.includes('Heavy Machines'));
  }

  if (query) {
    apps = apps.filter(a =>
      a.name.toLowerCase().includes(query) ||
      a.category.toLowerCase().includes(query) ||
      a.typicalItems.toLowerCase().includes(query) ||
      a.endUsers.toLowerCase().includes(query) ||
      a.fitRationale.toLowerCase().includes(query)
    );
  }

  container.innerHTML = apps.map(app => `
    <div class="hydraulic-card">
      <div>
        <div class="hydraulic-card-header">
          <div>
            <div style="font-size:0.75rem; text-transform:uppercase; font-weight:700; color:var(--text-muted);">${app.category}</div>
            <h3 class="hydraulic-card-title">${app.name}</h3>
          </div>
          <span class="badge-tag ${app.confidence.includes('SRC') ? 'src' : 'know'}">
            [${app.confidence.includes('SRC') ? 'SRC' : 'KNOW'}]
          </span>
        </div>

        <div style="display:flex; align-items:center; justify-content:space-between; margin-top:0.4rem;">
          <span style="font-size:0.8rem; font-weight:700; color:var(--text-secondary);">Supplier Opportunity Fit:</span>
          <span class="fit-badge ${app.fitColor}">★ ${app.productFit}</span>
        </div>
        <div class="meter-bar-wrap">
          <div class="meter-bar-fill ${app.fitColor}" style="width: ${app.fitScore}%;"></div>
        </div>

        <div class="hydraulic-items-list">
          <strong style="color:var(--navy-900); display:block; font-size:0.8rem; margin-bottom:0.15rem;">Typical Hydraulic Items:</strong>
          ${app.typicalItems}
        </div>

        <div class="hydraulic-users-box">
          <strong>Typical End User:</strong> ${app.endUsers}
        </div>
      </div>

      <div class="fit-rationale-box">
        <strong>Business Rationale (Seal Kits & Spares):</strong><br>
        ${app.fitRationale}
      </div>
    </div>
  `).join('');
}

function renderTenderShowcase() {
  const container = document.getElementById('tender-showcase-container');
  if (!container) return;

  const tenders = window.RAILWAY_DATA.realTenderExamples;
  container.innerHTML = `
    <div class="tenders-showcase-box">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; margin-bottom:0.75rem;">
        <h3>Verified Live Tender Case Studies (from Research)</h3>
        <span class="badge-tag src" style="background:rgba(255,255,255,0.2); color:#ffffff; border-color:var(--yellow-400);">[SRC] Verified Evidence</span>
      </div>
      <p style="font-size:0.84rem; color:#cbd5e1; margin-bottom:1rem;">
        These real tenders prove active railway procurement for heavy hydraulic jacks, warranty benchmarks, and multi-cylinder systems.
      </p>
      <div class="tender-cards-grid">
        ${tenders.map(t => `
          <div class="tender-item-card">
            <h4>${t.title}</h4>
            <div style="color:var(--yellow-400); font-weight:600; font-size:0.78rem; margin-bottom:0.4rem;">${t.railway} | ${t.type}</div>
            <p style="margin-bottom:0.4rem; color:#f1f5f9;">${t.details}</p>
            <div style="font-size:0.75rem; color:#cbd5e1; border-top:1px solid rgba(255,255,255,0.1); padding-top:0.4rem;">
              <strong>Strategic Takeaway:</strong> ${t.significance}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function setupHydraulicsFilters() {
  const pills = document.querySelectorAll('.filter-pill-btn');
  const searchInput = document.getElementById('hydraulic-search-input');

  let currentFilter = 'all';

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-filter');
      renderHydraulicsCards(currentFilter);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderHydraulicsCards(currentFilter);
    });
  }
}

/* ==========================================================================
   6. How to Sell (Procurement Flow) Module
   ========================================================================== */
function initProcurementModule() {
  renderProcurementSteps();
  renderDocumentsChecklist();
}

function renderProcurementSteps() {
  const container = document.getElementById('procurement-flow-container');
  if (!container) return;

  const steps = window.RAILWAY_DATA.procurementFlow;
  container.innerHTML = steps.map(s => `
    <div class="flow-step-card">
      <div class="flow-step-badge">${s.step}</div>
      <div class="flow-step-content">
        <h3>
          <span>${s.title}</span>
          <span class="flow-timeframe">${s.timeframe}</span>
        </h3>
        <ul class="flow-actions-list">
          ${s.actionItems.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <div class="flow-insight-box">
          💡 <strong>Key Procurement Rule:</strong> ${s.insight}
        </div>
      </div>
    </div>
  `).join('');
}

function renderDocumentsChecklist() {
  const container = document.getElementById('docs-checklist-container');
  if (!container) return;

  const docs = window.RAILWAY_DATA.documentsChecklist;
  const savedState = JSON.parse(localStorage.getItem('railway_checked_docs') || '{}');

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; margin-bottom:0.75rem;">
      <div>
        <h3 style="font-size:1.15rem; color:var(--navy-900);">Mandatory Vendor Documents Readiness Checklist</h3>
        <p style="font-size:0.82rem; color:var(--text-muted);">Check off documents as you prepare them for GeM, IREPS, and Zonal vendor registration</p>
      </div>
      <span class="badge-tag know">[KNOW] Standard Practice</span>
    </div>
    <div class="checklist-grid">
      ${docs.map((doc, idx) => `
        <label class="checklist-item" for="chk-doc-${idx}">
          <input type="checkbox" id="chk-doc-${idx}" data-idx="${idx}" ${savedState[idx] ? 'checked' : ''} onchange="handleDocCheck(${idx})">
          <div class="checklist-item-text">
            <strong>${doc.name}</strong>
            <span>${doc.desc}</span>
          </div>
        </label>
      `).join('')}
    </div>
  `;
}

window.handleDocCheck = function(idx) {
  const savedState = JSON.parse(localStorage.getItem('railway_checked_docs') || '{}');
  const checkbox = document.getElementById(`chk-doc-${idx}`);
  if (checkbox) {
    savedState[idx] = checkbox.checked;
    localStorage.setItem('railway_checked_docs', JSON.stringify(savedState));
  }
};

/* ==========================================================================
   7. Who to Contact (Role-Based Lookup) Module
   ========================================================================== */
function initRoleLookupModule() {
  const select = document.getElementById('role-goal-select');
  const display = document.getElementById('role-result-display');
  if (!select || !display) return;

  const roles = window.RAILWAY_DATA.roleContacts;

  // Populate options
  select.innerHTML = roles.map(r => `
    <option value="${r.id}">${r.goal}</option>
  `).join('');

  function renderSelectedRole(roleId) {
    const role = roles.find(r => r.id === roleId) || roles[0];
    display.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
        <div>
          <span style="font-size:0.78rem; text-transform:uppercase; font-weight:700; color:var(--navy-600);">${role.level}</span>
          <h3 style="font-size:1.25rem; color:var(--navy-900);">${role.goal}</h3>
        </div>
        <span class="badge-tag src" title="${window.RAILWAY_DATA.meta.tagsInfo.src}">[SRC] Designation</span>
      </div>

      <div class="role-result-grid">
        <div class="role-box" style="border-left: 4px solid var(--navy-600);">
          <div class="role-box-label">Primary Contact Designation</div>
          <div class="role-box-val">${role.primaryRole}</div>
          <div class="role-box-sub">This is the direct office to approach for tenders and registrations.</div>
        </div>

        <div class="role-box">
          <div class="role-box-label">Secondary / Escalation Authority</div>
          <div class="role-box-val">${role.secondaryRole}</div>
          <div class="role-box-sub">Approving or technical oversight body.</div>
        </div>
      </div>

      <div style="margin-top:1.25rem; background:var(--bg-surface); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
        <strong style="color:var(--navy-900); display:block; margin-bottom:0.25rem;">Action Recommendation:</strong>
        <p style="font-size:0.85rem; color:var(--text-secondary);">${role.actionHint}</p>
        <div style="margin-top:0.5rem; font-size:0.8rem; color:var(--text-muted);">
          <strong>Directory Search Pattern:</strong> <code>${role.portalPattern}</code>
        </div>
      </div>

      <div class="officer-rotation-warning">
        <span>⚠️</span>
        <div>
          <strong>Important Rule:</strong> Indian Railways officers rotate periodically across zones. Never rely on personal names or phone numbers. Always look up current officer postings under the designation directory on the zone website.
        </div>
      </div>
    `;
  }

  select.addEventListener('change', () => {
    renderSelectedRole(select.value);
  });

  renderSelectedRole(roles[0].id);
}

/* ==========================================================================
   8. Roadmap Module
   ========================================================================== */
function initRoadmapModule() {
  const container = document.getElementById('roadmap-timeline-grid');
  if (!container) return;

  const phases = window.RAILWAY_DATA.roadmap;
  const savedState = JSON.parse(localStorage.getItem('railway_checked_roadmap') || '{}');

  container.innerHTML = phases.map((p, pIdx) => `
    <div class="roadmap-phase-card">
      <div>
        <div class="roadmap-phase-header">
          <span class="roadmap-phase-badge">${p.phase}</span>
          <h3 class="roadmap-phase-title">${p.title}</h3>
          <div class="roadmap-timeframe">⏱ ${p.timeframe}</div>
        </div>
        <p style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:0.5rem;">${p.summary}</p>
        <ul class="roadmap-actions-list">
          ${p.actions.map((act, aIdx) => {
            const key = `p${pIdx}_a${aIdx}`;
            const isChecked = savedState[key] ? 'checked' : '';
            return `
              <li style="display:flex; align-items:flex-start; gap:0.4rem;">
                <input type="checkbox" id="${key}" ${isChecked} onchange="handleRoadmapCheck('${key}')" style="margin-top:2px;">
                <label for="${key}" style="cursor:pointer; font-size:0.8rem;">${act}</label>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
      <div style="margin-top:1rem; border-top:1px solid var(--border-light); padding-top:0.5rem; font-size:0.75rem; color:var(--text-muted); display:flex; justify-content:space-between;">
        <span>Progress Checklist</span>
        <span class="badge-tag src">[SRC]</span>
      </div>
    </div>
  `).join('');
}

window.handleRoadmapCheck = function(key) {
  const savedState = JSON.parse(localStorage.getItem('railway_checked_roadmap') || '{}');
  const checkbox = document.getElementById(key);
  if (checkbox) {
    savedState[key] = checkbox.checked;
    localStorage.setItem('railway_checked_roadmap', JSON.stringify(savedState));
  }
};

/* ==========================================================================
   9. Glossary Module & Hover Tooltips
   ========================================================================== */
function initGlossaryModule() {
  renderGlossaryGrid();
  setupGlossaryModal();
}

function renderGlossaryGrid() {
  const container = document.getElementById('glossary-grid-container');
  if (!container) return;

  const searchInput = document.getElementById('glossary-search-input');
  const q = (searchInput ? searchInput.value : '').toLowerCase().trim();

  let terms = window.RAILWAY_DATA.glossary;
  if (q) {
    terms = terms.filter(t =>
      t.term.toLowerCase().includes(q) ||
      t.full.toLowerCase().includes(q) ||
      t.meaning.toLowerCase().includes(q)
    );
  }

  container.innerHTML = terms.map(item => `
    <div class="glossary-card">
      <div class="glossary-term">
        <span>${item.term}</span>
        <span class="badge-tag src">[SRC]</span>
      </div>
      <div class="glossary-full">${item.full}</div>
      <div class="glossary-meaning">${item.meaning}</div>
    </div>
  `).join('');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderGlossaryGrid();
    });
  }
}

function setupGlossaryModal() {
  const modalOverlay = document.getElementById('glossary-modal-overlay');
  const openBtn = document.getElementById('btn-open-glossary-modal');
  const closeBtn = document.getElementById('btn-close-glossary-modal');
  const modalContent = document.getElementById('modal-glossary-content');

  if (modalContent) {
    modalContent.innerHTML = window.RAILWAY_DATA.glossary.map(g => `
      <div style="background:var(--bg-subtle); padding:0.6rem 0.8rem; border-radius:6px; border:1px solid var(--border-light);">
        <strong style="color:var(--navy-600);">${g.term}</strong>: <strong>${g.full}</strong> — <span style="font-size:0.8rem; color:var(--text-secondary);">${g.meaning}</span>
      </div>
    `).join('');
  }

  if (openBtn && modalOverlay) {
    openBtn.addEventListener('click', () => {
      modalOverlay.classList.add('open');
    });
  }

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
      }
    });
  }
}

/* ==========================================================================
   Navigation & Scroll Spy
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;

    // Show/hide back to top
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active link highlighting
    navLinks.forEach(link => {
      const sectionId = link.getAttribute('href');
      if (sectionId && sectionId.startsWith('#')) {
        const section = document.querySelector(sectionId);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
