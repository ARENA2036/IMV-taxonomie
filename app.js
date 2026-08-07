/**
 * Industrial Metaverse Tech Stack Engine — Pure JSON-Driven Client Engine
 * ARENA2036 Reallabor 2.0 Project
 * 
 * GitHub Pages Compatible & Zero-CORS Fallback Protocol for file:// execution.
 * Manages rendering for Technology Profiles, Use Cases, Filters, and Modals.
 * 
 * @module app
 */

document.addEventListener('DOMContentLoaded', () => {
  /** @type {Array<{code: string, name: string}>} */
  let categories = [];
  
  /** @type {Array<Object>} */
  let dbItems = [];
  
  /** @type {Array<Object>} */
  let usecases = [];
  
  /** @type {Array<Object>} */
  let filteredUseCases = [];
  
  /** @type {Object<string, Object>} */
  let profilesCache = {};

  /** @type {Array<Object>} */
  let filteredItems = [];
  
  /** @type {string|null} */
  let selectedCategoryCode = null;
  
  /** @type {string} */
  let selectedLayer = 'ALL';
  
  /** @type {Set<string>} */
  let selectedCompareRefs = new Set();
  
  /** @type {'grid'|'list'} */
  let currentViewMode = 'grid';

  /** @type {Object<string, Array<string>>} */
  const layerCategoryMap = {
    '1': ['6.1', '6.2', '6.3', '6.4', '6.5', '6.1-AI', '7.0', '8.1'],
    '2': ['1.1', '1.2', '2.0', '10.0'],
    '3': ['8.2', '8.3', '9.0'],
    '4': ['4.1', '4.2', '4.3', '5.0'],
    '5': ['3.0', '11.0']
  };

  /** @type {Object<string, string>} */
  const layerNames = {
    '1': 'SCHICHT 1: Erfassung & OT-Datenerfassung',
    '2': 'SCHICHT 2: Geometrie & CAD-Pre-Processing',
    '3': 'SCHICHT 3: Semantische Middleware & Datenräume',
    '4': 'SCHICHT 4: Simulation & Virtuelle Inbetriebnahme',
    '5': 'SCHICHT 5: Räumliche Immersion & Rendering'
  };

  // DOM Elements (Queried with Fallbacks for Both index.html and browser.html)
  const categoryTreeEl = document.getElementById('categoryTree') || document.getElementById('categoryList');
  const itemsContainerEl = document.getElementById('itemsContainer') || document.getElementById('gridBrowserContainer');
  const totalCountBadgeEl = document.getElementById('totalCountBadge') || document.getElementById('totalTechCount');
  const statusBarEl = document.getElementById('statusBar');

  const searchInputEl = document.getElementById('searchInput');
  const searchClearBtnEl = document.getElementById('searchClearBtn');
  const filterTierEl = document.getElementById('filterTier');
  const filterStatusEl = document.getElementById('filterStatus');

  const btnGridMode = document.getElementById('btnGridMode');
  const btnListMode = document.getElementById('btnListMode');

  const btnCompare = document.getElementById('btnCompare');
  const compareCountEl = document.getElementById('compareCount');

  const profileModal = document.getElementById('profileModal');
  const modalProfileTitle = document.getElementById('modalProfileTitle');
  const modalProfileBody = document.getElementById('modalProfileBody');
  const modalDirectJsonLink = document.getElementById('modalDirectJsonLink');
  const btnCloseProfileModal = document.getElementById('btnCloseProfileModal');

  const compareModal = document.getElementById('compareModal');
  const compareModalBody = document.getElementById('compareModalBody');
  const btnCloseCompareModal = document.getElementById('btnCloseCompareModal');

  /**
   * Initializes application state, loads manifest data, renders initial UI, and sets event listeners.
   * @async
   * @returns {Promise<void>}
   */
  async function init() {
    await loadIndexData();
    handleInitialHash();
    renderSidebarCategories();
    filterAndRender();
    setupEventListeners();
    window.appOpenProfileModal = openProfileModal;
  }

  /**
   * Loads index manifest dynamically via fetch() or falls back to static window.INDEX_DATA for file:// protocol.
   * @async
   * @returns {Promise<void>}
   */
  async function loadIndexData() {
    try {
      const response = await fetch('./data/index.json');
      if (!response.ok) throw new Error('Fetch status not OK');
      const data = await response.json();
      categories = data.categories || [];
      dbItems = data.items || [];
      usecases = data.usecases || [];
    } catch (err) {
      console.warn('Fallback auf window.INDEX_DATA (file:// Protokoll):', err.message);
      if (window.INDEX_DATA) {
        categories = window.INDEX_DATA.categories || [];
        dbItems = window.INDEX_DATA.items || [];
        usecases = window.INDEX_DATA.usecases || [];
      }
    }
    filteredItems = [...dbItems];
    filteredUseCases = [...usecases];
  }

  /**
   * Fetches an individual technology profile JSON on demand with fallback caching.
   * @async
   * @param {string} refCode - The canonical technology reference code (e.g. IND-META-2026-NVIDIA-OMNIVERSE).
   * @returns {Promise<Object|null>} The canonical profile object or null.
   */
  async function getProfileData(refCode) {
    if (profilesCache[refCode]) return profilesCache[refCode];

    try {
      const response = await fetch(`./profiles/${refCode}.json`);
      if (!response.ok) throw new Error('Profile fetch failed');
      const profile = await response.json();
      profilesCache[refCode] = profile;
      return profile;
    } catch (err) {
      if (window.PROFILES_DATA && window.PROFILES_DATA[refCode]) {
        profilesCache[refCode] = window.PROFILES_DATA[refCode];
        return window.PROFILES_DATA[refCode];
      }
      const item = dbItems.find(i => i.refCode === refCode);
      return item || null;
    }
  }

  /**
   * Parses URL hash parameters for deep links to layers, categories, or specific technology profiles.
   */
  function handleInitialHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#layer-')) {
      selectedLayer = hash.replace('#layer-', '');
      selectedCategoryCode = null;
    } else if (hash.startsWith('#cat-')) {
      selectedCategoryCode = hash.replace('#cat-', '');
      selectedLayer = 'ALL';
    } else if (hash.startsWith('#profile/')) {
      const ref = hash.replace('#profile/', '');
      openProfileModal(ref);
    }
  }

  /**
   * Renders sidebar categories grouped by the 5 ARENA2036 Industrial Metaverse layers.
   */
  function renderSidebarCategories() {
    if (!categoryTreeEl) return;

    let html = `
      <div class="category-item ${selectedCategoryCode === null && selectedLayer === 'ALL' ? 'active' : ''}" data-cat-code="ALL" data-layer="ALL">
        <div class="category-header-row">
          <span class="cat-code-badge">ALLE</span>
          <span class="category-title">Gesamter Stack</span>
          <span class="cat-count-badge">${dbItems.length}</span>
        </div>
      </div>
    `;

    ['1', '2', '3', '4', '5'].forEach(layerKey => {
      const catCodes = layerCategoryMap[layerKey];
      const layerCats = categories.filter(c => catCodes.includes(c.code));
      
      html += `
        <div class="sidebar-layer-group">
          <div class="sidebar-layer-title">${layerNames[layerKey]}</div>
      `;

      layerCats.forEach(cat => {
        const count = dbItems.filter(item => item.categoryCode === cat.code).length;
        const isActive = selectedCategoryCode === cat.code;
        html += `
          <div class="category-item ${isActive ? 'active' : ''}" data-cat-code="${cat.code}">
            <div class="category-header-row">
              <span class="cat-code-badge">${cat.code}</span>
              <span class="category-title">${cat.name}</span>
              <span class="cat-count-badge">${count}</span>
            </div>
          </div>
        `;
      });

      html += `</div>`;
    });

    categoryTreeEl.innerHTML = html;

    categoryTreeEl.querySelectorAll('.category-item').forEach(el => {
      el.addEventListener('click', () => {
        const code = el.getAttribute('data-cat-code');
        if (code === 'ALL') {
          selectedCategoryCode = null;
          selectedLayer = 'ALL';
        } else {
          selectedCategoryCode = code;
          selectedLayer = 'ALL';
        }
        filterAndRender();
        renderSidebarCategories();
      });
    });
  }

  /**
   * Filters index items based on active search string, selected Tier, Status, and Category/Layer.
   */
  function filterAndRender() {
    const searchTerm = searchInputEl ? searchInputEl.value.trim().toLowerCase() : '';
    const selectedTier = filterTierEl ? filterTierEl.value : 'ALL';
    const selectedStatus = filterStatusEl ? filterStatusEl.value : 'ALL';

    filteredItems = dbItems.filter(item => {
      const matchesCategory = selectedCategoryCode === null || item.categoryCode === selectedCategoryCode;
      
      let matchesLayer = true;
      if (selectedLayer !== 'ALL') {
        const allowedCats = layerCategoryMap[selectedLayer] || [];
        matchesLayer = allowedCats.includes(item.categoryCode);
      }

      const matchesTier = selectedTier === 'ALL' || item.tier === selectedTier;
      const matchesStatus = selectedStatus === 'ALL' || item.status === selectedStatus;

      const matchesSearch = searchTerm === '' ||
        item.name.toLowerCase().includes(searchTerm) ||
        item.refCode.toLowerCase().includes(searchTerm) ||
        item.vendor.toLowerCase().includes(searchTerm) ||
        item.categoryName.toLowerCase().includes(searchTerm) ||
        (item.overview && item.overview.toLowerCase().includes(searchTerm));

      return matchesCategory && matchesLayer && matchesTier && matchesStatus && matchesSearch;
    });

    renderMainView();
  }

  /**
   * Triggers rendering of main view components, KPI counters, Use Case flow views, and card/list views.
   */
  function renderMainView() {
    const kpiTotalToolsEl = document.getElementById('kpiTotalTools');
    const kpiTotalUseCasesEl = document.getElementById('kpiTotalUseCases');
    const kpiTotalCategoriesEl = document.getElementById('kpiTotalCategories');
    if (kpiTotalToolsEl) kpiTotalToolsEl.textContent = dbItems.length;
    if (kpiTotalUseCasesEl) kpiTotalUseCasesEl.textContent = usecases.length;
    if (kpiTotalCategoriesEl) kpiTotalCategoriesEl.textContent = categories.length;

    if (totalCountBadgeEl) totalCountBadgeEl.textContent = `${dbItems.length} Elemente`;
    if (statusBarEl) statusBarEl.innerHTML = `Zeige <strong>${filteredItems.length}</strong> von ${dbItems.length} auditierte Technologien im Index`;

    renderUseCasesView();

    if (!itemsContainerEl) return;

    if (filteredItems.length === 0) {
      itemsContainerEl.innerHTML = `
        <div class="text-center p-5 bg-white border rounded shadow-sm">
          <i class="fa-solid fa-triangle-exclamation text-primary display-4 mb-3"></i>
          <h2 class="h5 fw-bold text-dark">Keine Technologie-Profile gefunden</h2>
          <p class="text-muted small m-0">Bitte Suchbegriff anpassen oder Filter zurücksetzen.</p>
        </div>
      `;
      return;
    }

    if (currentViewMode === 'grid') {
      renderGridView();
    } else {
      renderListView();
    }
  }

  /**
   * Renders the Use Cases flow browser on examples.html.
   */
  function renderUseCasesView() {
    const useCasesContainer = document.getElementById('useCasesContainer');
    if (!useCasesContainer) return;

    const searchTerm = searchInputEl ? searchInputEl.value.trim().toLowerCase() : '';
    const selectedTier = filterTierEl ? filterTierEl.value : 'ALL';

    filteredUseCases = usecases.filter(uc => {
      const matchesTier = selectedTier === 'ALL' || uc.tier === selectedTier;
      const matchesSearch = searchTerm === '' ||
        uc.title.toLowerCase().includes(searchTerm) ||
        uc.shortDesc.toLowerCase().includes(searchTerm) ||
        uc.goal.toLowerCase().includes(searchTerm) ||
        (uc.flow && uc.flow.some(f => f.nodeName.toLowerCase().includes(searchTerm) || (f.refCode && f.refCode.toLowerCase().includes(searchTerm))));

      return matchesTier && matchesSearch;
    });

    const ucCountEl = document.getElementById('totalUseCaseCount');
    if (ucCountEl) ucCountEl.textContent = filteredUseCases.length;

    if (filteredUseCases.length === 0) {
      useCasesContainer.innerHTML = `
        <div class="text-center p-5 bg-white border rounded shadow-sm">
          <i class="fa-solid fa-triangle-exclamation text-primary display-4 mb-3"></i>
          <h2 class="h5 fw-bold text-dark">Keine Use Cases gefunden</h2>
          <p class="text-muted small m-0">Bitte Suchbegriff anpassen oder Kostengruppen-Filter zurücksetzen.</p>
        </div>
      `;
      return;
    }

    let html = '';
    filteredUseCases.forEach(uc => {
      const tierBadgeClass = uc.tier === 'Tier 1' ? 'tier-1' : uc.tier === 'Tier 2' ? 'tier-2' : 'tier-3';
      
      let flowColumnsHtml = '';
      (uc.flow || []).forEach(step => {
        const colClass = `col-s${step.layer}`;
        const hasProfile = step.refCode ? `onclick="window.appOpenProfileModal('${step.refCode}')"` : '';
        const cursorStyle = step.refCode ? 'cursor: pointer;' : 'cursor: default; background: #FFF; border: 1px dashed var(--border-subtle);';
        
        flowColumnsHtml += `
          <div class="flow-column">
            <div class="flow-column-header ${colClass}">${step.layerTitle || `Schicht ${step.layer}`}</div>
            <div class="flow-node-card" style="${cursorStyle}" ${hasProfile}>
              <span class="node-code">${step.refCode ? step.refCode : 'EXTERN / IT'}</span>
              <span class="node-name">${step.nodeName}</span>
              <span class="node-role">${step.role}</span>
            </div>
          </div>
        `;
      });

      html += `
        <div class="card border shadow-sm mb-4">
          <div class="card-header bg-white border-bottom p-3">
            <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <h2 class="h5 fw-bold text-dark m-0">${uc.title}</h2>
              <span class="tier-badge ${tierBadgeClass}">${uc.tierLabel || uc.tier}</span>
            </div>
            <p class="text-secondary small mt-2 mb-0">${uc.shortDesc}</p>
          </div>
          <div class="card-body p-3">
            <div class="flow-columns-wrapper">
              ${flowColumnsHtml}
            </div>
            <div class="mt-3 p-3 bg-light rounded border border-start border-3 border-success small">
              <strong class="text-success me-1"><i class="fa-solid fa-bullseye"></i> ${uc.goal}</strong>
            </div>
          </div>
        </div>
      `;
    });

    useCasesContainer.innerHTML = html;
  }

  /**
   * Renders the Grid view mode of technologies in browser.html.
   */
  function renderGridView() {
    itemsContainerEl.classList.remove('list-view-mode');
    itemsContainerEl.classList.add('grid-view-mode');

    let html = '';
    filteredItems.forEach(item => {
      const tierClass = item.tier === 'Tier 1' ? 'tier-1' : item.tier === 'Tier 2' ? 'tier-2' : 'tier-3';
      const isChecked = selectedCompareRefs.has(item.refCode);

      const inputs = (item.inputs || []).slice(0, 2);
      const bridges = (item.bridges || []).slice(0, 2);

      const inputTags = inputs.map(t => `<span class="tag">${t}</span>`).join('');
      const bridgeTags = bridges.map(t => `<span class="tag tag-bridge">${t}</span>`).join('');

      html += `
        <div class="card-item" onclick="window.appOpenProfileModal('${item.refCode}')">
          <div>
            <div class="card-header-bar">
              <span class="card-category">KAT ${item.categoryCode} — ${item.categoryName}</span>
              <span class="tier-badge ${tierClass}">${item.tier}</span>
            </div>
            <h3 class="card-title">${item.name}</h3>
            <div class="card-subtitle">${item.subtitle}</div>
            <p class="card-overview">${item.overview || ''}</p>
            <div class="card-tags">
              ${inputTags}
              ${bridgeTags}
            </div>
          </div>

          <div class="card-footer">
            <div class="d-flex align-items-center gap-2">
              <input type="checkbox" class="chk-compare form-check-input" data-ref="${item.refCode}" ${isChecked ? 'checked' : ''} style="cursor: pointer;" title="Für Vergleich auswählen">
              <span class="card-vendor"><i class="fa-solid fa-building me-1 text-muted"></i> ${item.vendor}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm btn-inspect py-1 px-2" data-ref="${item.refCode}" style="font-size: 11px;">
              Details →
            </button>
          </div>
        </div>
      `;
    });

    itemsContainerEl.innerHTML = html;

    itemsContainerEl.querySelectorAll('.btn-inspect').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const ref = btn.getAttribute('data-ref');
        openProfileModal(ref);
      });
    });

    itemsContainerEl.querySelectorAll('.chk-compare').forEach(chk => {
      chk.addEventListener('click', (e) => {
        e.stopPropagation();
        const ref = chk.getAttribute('data-ref');
        if (chk.checked) {
          if (selectedCompareRefs.size >= 4) {
            alert('Sie können maximal 4 Technologien gleichzeitig vergleichen.');
            chk.checked = false;
            return;
          }
          selectedCompareRefs.add(ref);
        } else {
          selectedCompareRefs.delete(ref);
        }
        updateCompareCounter();
      });
    });
  }

  /**
   * Renders the List view mode of technologies in browser.html using a Bootstrap 5 table grid.
   */
  function renderListView() {
    itemsContainerEl.classList.remove('grid-view-mode');
    itemsContainerEl.classList.add('list-view-mode');

    let html = `
      <div class="table-responsive border rounded bg-white shadow-sm">
        <table class="table table-bordered table-striped table-hover align-middle mb-0" style="width: 100%; font-size: 13.5px;">
          <thead class="table-dark font-monospace">
            <tr>
              <th style="width: 40px;" class="text-center">#</th>
              <th style="width: 170px;">Ref Code</th>
              <th style="width: 80px;">Kat.</th>
              <th>Technologie Name</th>
              <th>Entwickler / Vendor</th>
              <th style="width: 140px;">Kostengruppe</th>
              <th style="width: 120px;">Status</th>
              <th style="width: 110px;" class="text-end">Aktion</th>
            </tr>
          </thead>
          <tbody>
    `;

    filteredItems.forEach(item => {
      const tierClass = item.tier === 'Tier 1' ? 'tier-1' : item.tier === 'Tier 2' ? 'tier-2' : 'tier-3';
      const isChecked = selectedCompareRefs.has(item.refCode);

      html += `
        <tr>
          <td class="text-center"><input type="checkbox" class="chk-compare form-check-input" data-ref="${item.refCode}" ${isChecked ? 'checked' : ''}></td>
          <td><code class="text-muted font-monospace fw-bold">${item.refCode}</code></td>
          <td><span class="badge bg-secondary font-monospace">${item.categoryCode}</span></td>
          <td><strong class="text-dark">${item.name}</strong> <small class="text-muted">(${item.subtitle})</small></td>
          <td>${item.vendor}</td>
          <td><span class="tier-badge ${tierClass}">${item.tier}</span></td>
          <td><span class="badge bg-light text-dark border">${item.status}</span></td>
          <td class="text-end">
            <button class="btn btn-outline-primary btn-sm btn-inspect py-1 px-2" data-ref="${item.refCode}" style="font-size: 11px;">
              Details →
            </button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table></div>`;
    itemsContainerEl.innerHTML = html;

    itemsContainerEl.querySelectorAll('.btn-inspect').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const ref = btn.getAttribute('data-ref');
        openProfileModal(ref);
      });
    });

    itemsContainerEl.querySelectorAll('.chk-compare').forEach(chk => {
      chk.addEventListener('click', (e) => {
        e.stopPropagation();
        const ref = chk.getAttribute('data-ref');
        if (chk.checked) {
          if (selectedCompareRefs.size >= 4) {
            alert('Sie können maximal 4 Technologien gleichzeitig vergleichen.');
            chk.checked = false;
            return;
          }
          selectedCompareRefs.add(ref);
        } else {
          selectedCompareRefs.delete(ref);
        }
        updateCompareCounter();
      });
    });
  }

  /**
   * Updates compare count badge and toggle button visibility.
   */
  function updateCompareCounter() {
    if (compareCountEl) compareCountEl.textContent = selectedCompareRefs.size;
    if (btnCompare) {
      btnCompare.style.display = selectedCompareRefs.size > 0 ? 'inline-flex' : 'none';
    }
  }

  /**
   * Generates Bootstrap 5 card and grid markup for the Profile Inspector Modal.
   * @param {Object} item - Canonical profile object.
   * @returns {string} Clean HTML markup for modal body.
   */
  function generateSlideHtml(item) {
    const tierClass = item.tier === 'Tier 1' ? 'tier-1' : item.tier === 'Tier 2' ? 'tier-2' : 'tier-3';
    const inputs = item.inputs || [];
    const outputs = item.outputs || [];
    const bridges = item.bridges || [];
    const features = item.features || [];
    const evaluations = item.evaluations || [];
    const compliance = item.compliance || {};
    const deployment = item.deployment || {};

    const inputTagsHtml = inputs.map(t => `<span class="badge bg-light text-dark border me-1 mb-1 font-monospace">${t}</span>`).join('');
    const outputTagsHtml = outputs.map(t => `<span class="badge bg-light text-dark border me-1 mb-1 font-monospace">${t}</span>`).join('');
    const bridgeTagsHtml = bridges.map(t => `<span class="badge bg-primary-subtle text-primary border border-primary-subtle me-1 mb-1 font-monospace">${t}</span>`).join('');

    const featuresHtml = features.map(f => `
      <div class="col-md-6 mb-2">
        <div class="p-2 border rounded bg-light h-100">
          <div class="fw-bold small text-dark">${f.title}</div>
          <div class="text-muted" style="font-size: 11px; line-height: 1.3;">${f.desc}</div>
        </div>
      </div>
    `).join('');

    const evalHtml = evaluations.map(e => `
      <li class="mb-2"><strong>${e.title}:</strong> ${e.text}</li>
    `).join('');

    return `
      <div class="container-fluid p-0">
        
        <!-- Header Banner -->
        <div class="d-flex justify-content-between align-items-start border-bottom pb-3 mb-3 flex-wrap gap-2">
          <div>
            <span class="badge bg-secondary font-monospace mb-1">KAT. ${item.categoryCode} — ${item.categoryName}</span>
            <h3 class="h4 fw-black text-dark m-0">${item.name} <span class="text-muted fs-6 fw-normal">(${item.subtitle})</span></h3>
          </div>
          <div>
            <span class="tier-badge ${tierClass} fs-6">${item.tier}</span>
            <div class="small text-muted text-end font-monospace">${item.costLabel || ''}</div>
          </div>
        </div>

        <!-- Metadata Strip -->
        <div class="row g-2 mb-3 small">
          <div class="col-md-3 col-6"><div class="p-2 bg-light rounded border"><strong>Vendor:</strong> ${item.vendor}</div></div>
          <div class="col-md-3 col-6"><div class="p-2 bg-light rounded border"><strong>HQ:</strong> ${item.hq || 'Global'}</div></div>
          <div class="col-md-3 col-6"><div class="p-2 bg-light rounded border"><strong>Lizenz:</strong> ${item.businessModel}</div></div>
          <div class="col-md-3 col-6"><div class="p-2 bg-light rounded border text-truncate"><strong>Web:</strong> <a href="${item.url}" target="_blank" class="text-primary">${(item.url || '').replace('https://', '')}</a></div></div>
        </div>

        <!-- Main Body Grid -->
        <div class="row g-3">
          <!-- Left Column -->
          <div class="col-lg-7">
            <!-- Overview -->
            <div class="card border mb-3">
              <div class="card-header bg-light fw-bold small"><i class="fa-solid fa-cube text-primary me-2"></i>Systemübersicht</div>
              <div class="card-body small text-secondary">${item.overview || ''}</div>
            </div>

            <!-- Features -->
            <div class="card border mb-3">
              <div class="card-header bg-light fw-bold small"><i class="fa-solid fa-gears text-primary me-2"></i>Kernfunktionen</div>
              <div class="card-body p-2">
                <div class="row g-2">${featuresHtml}</div>
              </div>
            </div>

            <!-- Formats & Interfaces -->
            <div class="card border">
              <div class="card-header bg-light fw-bold small"><i class="fa-solid fa-diagram-project text-primary me-2"></i>Datenformate & Schnittstellen</div>
              <div class="card-body small">
                <div class="mb-2"><strong>Eingabeformate:</strong><div class="mt-1">${inputTagsHtml}</div></div>
                <div class="mb-2"><strong>Ausgabeformate:</strong><div class="mt-1">${outputTagsHtml}</div></div>
                <div><strong>Ökosystem-Bridges:</strong><div class="mt-1">${bridgeTagsHtml}</div></div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="col-lg-5">
            <!-- Evaluations -->
            <div class="card border mb-3">
              <div class="card-header bg-light fw-bold small"><i class="fa-solid fa-vial-circle-check text-primary me-2"></i>Praxis-Bewertung</div>
              <div class="card-body small">
                <ul class="ps-3 mb-3 text-secondary">${evalHtml}</ul>
                <div class="border-top pt-2 mt-2">
                  <div class="fw-bold text-muted mb-1" style="font-size: 10px;">COMPLIANCE & STANDARDS</div>
                  <div class="d-flex justify-content-between text-center gap-1 small">
                    <div class="p-1 bg-light rounded border flex-grow-1"><div class="fw-bold">${compliance.omniverse || 'Supported'}</div><div class="text-muted" style="font-size: 10px;">Omniverse</div></div>
                    <div class="p-1 bg-light rounded border flex-grow-1"><div class="fw-bold">${compliance.sovereignty || 'DSGVO'}</div><div class="text-muted" style="font-size: 10px;">Souveränität</div></div>
                    <div class="p-1 bg-light rounded border flex-grow-1"><div class="fw-bold">${compliance.openStandard || 'Open'}</div><div class="text-muted" style="font-size: 10px;">Standard</div></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Deployment -->
            <div class="card border">
              <div class="card-header bg-light fw-bold small"><i class="fa-solid fa-sliders text-primary me-2"></i>Bereitstellungsparameter</div>
              <div class="card-body small text-secondary">
                <div class="mb-1"><strong>Einarbeitungsaufwand:</strong> ${deployment.effort || 'Mittel'}</div>
                <div class="mb-1"><strong>Bereitstellung:</strong> ${deployment.mode || 'Cloud / Hybrid'}</div>
                <div class="mb-1"><strong>Reifegrad:</strong> ${deployment.maturity || 'Produktiv'}</div>
                <div class="mb-2"><strong>Einsatzbereich:</strong> ${deployment.area || 'Werksbetrieb'}</div>
                <div class="p-2 bg-light rounded border">
                  <strong>Personalbedarf:</strong> ${item.staffing || '1x Spezialist'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Strip -->
        <div class="d-flex justify-content-between align-items-center border-top mt-3 pt-2 small text-muted font-monospace">
          <div>Ref: <strong>${item.refCode}</strong></div>
          <div>Status: <span class="badge bg-light text-dark border">${item.status}</span></div>
        </div>

      </div>
    `;
  }

  /**
   * Helper function to show a Bootstrap 5 modal with fallback for vanilla DOM execution.
   * @param {HTMLElement} el - Modal element.
   */
  function showBsModal(el) {
    if (!el) return;
    if (window.bootstrap && window.bootstrap.Modal) {
      const bsModal = window.bootstrap.Modal.getOrCreateInstance(el);
      bsModal.show();
    } else {
      el.classList.add('show');
      el.style.display = 'block';
    }
  }

  /**
   * Helper function to hide a Bootstrap 5 modal with fallback for vanilla DOM execution.
   * @param {HTMLElement} el - Modal element.
   */
  function hideBsModal(el) {
    if (!el) return;
    if (window.bootstrap && window.bootstrap.Modal) {
      const bsModal = window.bootstrap.Modal.getOrCreateInstance(el);
      bsModal.hide();
    } else {
      el.classList.remove('show');
      el.style.display = 'none';
    }
  }

  /**
   * Opens the profile detail modal inspector for a given reference code.
   * @async
   * @param {string} refCode - Technology reference code.
   * @returns {Promise<void>}
   */
  async function openProfileModal(refCode) {
    if (!profileModal) return;
    const profile = await getProfileData(refCode);
    if (!profile) return;

    if (modalProfileTitle) modalProfileTitle.textContent = `${profile.name} (${profile.refCode})`;
    if (modalProfileBody) modalProfileBody.innerHTML = generateSlideHtml(profile);

    if (modalDirectJsonLink) modalDirectJsonLink.href = `profiles/${profile.refCode}.json`;

    showBsModal(profileModal);
    window.location.hash = `profile/${profile.refCode}`;
  }

  /**
   * Renders the comparison modal side-by-side comparison table for up to 4 selected technologies.
   * @async
   * @returns {Promise<void>}
   */
  async function renderCompareModal() {
    if (!compareModalBody) return;

    const refs = Array.from(selectedCompareRefs);
    if (refs.length === 0) {
      compareModalBody.innerHTML = `
        <div class="text-center p-5">
          <i class="fa-solid fa-code-compare display-4 text-muted mb-3"></i>
          <h3 class="h5 fw-bold">Keine Technologien für den Vergleich ausgewählt</h3>
          <p class="text-muted small m-0">Wählen Sie bis zu 4 Technologien im Karten-Browser aus.</p>
        </div>
      `;
      return;
    }

    const selectedProfiles = await Promise.all(refs.map(r => getProfileData(r)));

    let html = `
      <table class="table table-bordered table-striped align-middle small mb-0" style="font-size: 12.5px;">
        <thead class="table-dark">
          <tr>
            <th style="width: 180px;">Parameter</th>
            ${selectedProfiles.map(item => `
              <th>
                <div class="fw-bold text-white">${item.name}</div>
                <div class="text-muted font-monospace small" style="font-size: 11px;">${item.refCode}</div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Kategorie</strong></td>
            ${selectedProfiles.map(item => `<td>${item.categoryCode} ${item.categoryName}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Vendor / HQ</strong></td>
            ${selectedProfiles.map(item => `<td>${item.vendor} (${item.hq || 'Global'})</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Investitionsklasse</strong></td>
            ${selectedProfiles.map(item => `<td><span class="badge bg-secondary">${item.tier}</span></td>`).join('')}
          </tr>
          <tr>
            <td><strong>Status</strong></td>
            ${selectedProfiles.map(item => `<td><span class="badge bg-light text-dark border">${item.status}</span></td>`).join('')}
          </tr>
          <tr>
            <td><strong>Eingabeformate</strong></td>
            ${selectedProfiles.map(item => `<td>${(item.inputs || []).join(', ') || 'Standard'}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Ausgabeformate</strong></td>
            ${selectedProfiles.map(item => `<td>${(item.outputs || []).join(', ') || 'Standard'}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Omniverse-Status</strong></td>
            ${selectedProfiles.map(item => `<td>${(item.compliance && item.compliance.omniverse) || 'Supported'}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Personalbedarf</strong></td>
            ${selectedProfiles.map(item => `<td>${item.staffing || '1x Spezialist'}</td>`).join('')}
          </tr>
        </tbody>
      </table>
    `;

    compareModalBody.innerHTML = html;
  }

  /**
   * Binds user event listeners for inputs, filters, view switches, and modal controls.
   */
  function setupEventListeners() {
    if (searchInputEl) {
      searchInputEl.addEventListener('input', filterAndRender);
    }

    if (searchClearBtnEl && searchInputEl) {
      searchClearBtnEl.addEventListener('click', () => {
        searchInputEl.value = '';
        filterAndRender();
      });
    }

    if (filterTierEl) {
      filterTierEl.addEventListener('change', filterAndRender);
    }

    if (filterStatusEl) {
      filterStatusEl.addEventListener('change', filterAndRender);
    }

    if (btnGridMode && btnListMode) {
      btnGridMode.addEventListener('click', () => {
        currentViewMode = 'grid';
        btnGridMode.classList.add('active');
        btnListMode.classList.remove('active');
        renderMainView();
      });

      btnListMode.addEventListener('click', () => {
        currentViewMode = 'list';
        btnListMode.classList.add('active');
        btnGridMode.classList.remove('active');
        renderMainView();
      });
    }

    if (btnCompare && compareModal) {
      btnCompare.addEventListener('click', () => {
        renderCompareModal();
        showBsModal(compareModal);
      });
    }

    if (btnCloseCompareModal && compareModal) {
      btnCloseCompareModal.addEventListener('click', () => {
        hideBsModal(compareModal);
      });
    }

    if (btnCloseProfileModal && profileModal) {
      btnCloseProfileModal.addEventListener('click', () => {
        hideBsModal(profileModal);
        window.location.hash = '';
      });
    }

    // Robust Hamburger Menu Toggle Handler (Works with Bootstrap 5 and direct click)
    const hamburgerBtns = document.querySelectorAll('#hamburgerBtn, .dropdown-toggle');
    hamburgerBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dropdownMenu = btn.nextElementSibling;
        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
          if (window.bootstrap && window.bootstrap.Dropdown) {
            const bsDropdown = window.bootstrap.Dropdown.getOrCreateInstance(btn);
            bsDropdown.toggle();
          } else {
            dropdownMenu.classList.toggle('show');
          }
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => menu.classList.remove('show'));
      }
    });
  }

  // Run Initialization
  init();
});
