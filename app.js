/**
 * Industrial Metaverse Tech Stack Audit — Pure 100% JSON-Driven Engine
 * GitHub Pages Compatible & Zero-CORS Fallback Protocol
 * 5-Schichten Industrial Metaverse Tech-Stack Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  let categories = [];
  let dbItems = [];
  let usecases = [];
  let filteredUseCases = [];
  let profilesCache = {};

  let filteredItems = [];
  let selectedCategoryCode = null;
  let selectedLayer = 'ALL';
  let selectedCompareRefs = new Set();
  let currentViewMode = 'grid'; // 'grid' | 'list'

  const layerCategoryMap = {
    '1': ['6.1', '6.2', '6.3', '6.4', '6.5', '6.1-AI', '7.0', '8.1'],
    '2': ['1.1', '1.2', '2.0', '10.0'],
    '3': ['8.2', '8.3', '9.0'],
    '4': ['4.1', '4.2', '4.3', '5.0'],
    '5': ['3.0', '11.0']
  };

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

  const matrixModal = document.getElementById('matrixModal');
  const btnOverview = document.getElementById('btnOverview');
  const btnOverviewHero = document.getElementById('btnOverviewHero');
  const btnCloseMatrixModal = document.getElementById('btnCloseMatrixModal');
  const matrixTableBody = document.getElementById('matrixTableBody');

  async function init() {
    await loadIndexData();
    handleInitialHash();
    renderSidebarCategories();
    filterAndRender();
    setupEventListeners();
    window.appOpenProfileModal = openProfileModal;
  }

  // Load index manifest dynamically via fetch or static fallback
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

  // Fetch individual JSON profile on demand
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
      // Fallback object from index manifest item
      const item = dbItems.find(i => i.refCode === refCode);
      return item || null;
    }
  }

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
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFF; border: 1px solid var(--border-subtle); border-radius: 8px;">
          <i class="fa-solid fa-triangle-exclamation" style="font-size: 44px; color: var(--accent-orange); margin-bottom: 16px;"></i>
          <h2 style="font-family: var(--font-heading); font-size: 20px; font-weight: 900;">Keine Technologie-Profile gefunden</h2>
          <p style="color: var(--text-muted); margin-top: 8px;">Bitte Suchbegriff anpassen oder Filter zurücksetzen.</p>
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
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFF; border: 1px solid var(--border-subtle); border-radius: 8px;">
          <i class="fa-solid fa-triangle-exclamation" style="font-size: 44px; color: var(--accent-orange); margin-bottom: 16px;"></i>
          <h2 style="font-family: var(--font-heading); font-size: 20px; font-weight: 900;">Keine Use Cases gefunden</h2>
          <p style="color: var(--text-muted); margin-top: 8px;">Bitte Suchbegriff anpassen oder Kostengruppen-Filter zurücksetzen.</p>
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
        <div class="usecase-section">
          <div class="usecase-header">
            <div class="usecase-title-area">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <span class="usecase-number-badge">${uc.id}</span>
                <span class="tier-badge ${tierBadgeClass}">${uc.tierLabel || uc.tier}</span>
              </div>
              <h2 class="usecase-title">${uc.title}</h2>
              <p class="usecase-desc">${uc.shortDesc}</p>
              <div class="usecase-goal-box">
                🎯 <strong>Ziel & Nutzen:</strong> ${uc.goal}
              </div>
            </div>
          </div>

          <div class="flow-diagram-container">
            <div class="flow-columns-wrapper">
              ${flowColumnsHtml}
            </div>
          </div>
        </div>
      `;
    });

    useCasesContainer.innerHTML = html;
  }

  function renderGridView() {
    itemsContainerEl.classList.remove('list-view-mode');
    itemsContainerEl.classList.add('grid-view-mode');

    let html = '';
    filteredItems.forEach(item => {
      const tierClass = item.tier === 'Tier 1' ? 'tier-1' : item.tier === 'Tier 2' ? 'tier-2' : 'tier-3';
      const bridgeTags = (item.bridges || []).slice(0, 2).map(b => `<span class="tag tag-bridge">${b}</span>`).join('');
      const inputTags = (item.inputs || []).slice(0, 2).map(i => `<span class="tag">${i}</span>`).join('');
      const isChecked = selectedCompareRefs.has(item.refCode);

      html += `
        <div class="tech-card ${isChecked ? 'selected-compare' : ''}">
          <div>
            <div class="card-top-row">
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
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" class="chk-compare" data-ref="${item.refCode}" ${isChecked ? 'checked' : ''} style="cursor: pointer;" title="Für Vergleich auswählen">
              <span class="card-vendor"><i class="fa-solid fa-building" style="margin-right: 4px; color: var(--text-muted);"></i> ${item.vendor}</span>
            </div>
            <button class="btn btn-primary btn-inspect" data-ref="${item.refCode}" style="font-size: 11px; padding: 4px 10px;">
              Details →
            </button>
          </div>
        </div>
      `;
    });

    itemsContainerEl.innerHTML = html;

    // Attach inspect click handlers
    itemsContainerEl.querySelectorAll('.btn-inspect').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const ref = btn.getAttribute('data-ref');
        openProfileModal(ref);
      });
    });

    // Attach compare checkbox handlers
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

  function updateCompareCounter() {
    if (compareCountEl) compareCountEl.textContent = selectedCompareRefs.size;
    if (btnCompare) {
      btnCompare.style.display = selectedCompareRefs.size > 0 ? 'inline-flex' : 'none';
    }
  }

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

  async function renderCompareModal() {
    if (!compareModalBody) return;

    const refs = Array.from(selectedCompareRefs);
    if (refs.length === 0) {
      compareModalBody.innerHTML = `
        <div style="text-align: center; padding: 50px 20px;">
          <i class="fa-solid fa-code-compare" style="font-size: 36px; color: var(--text-muted); margin-bottom: 12px;"></i>
          <h3>Keine Technologien für den Vergleich ausgewählt</h3>
          <p style="color: var(--text-muted); margin-top: 6px;">Wählen Sie bis zu 4 Technologien im Karten-Browser aus.</p>
        </div>
      `;
      return;
    }

    const selectedProfiles = await Promise.all(refs.map(r => getProfileData(r)));

    let html = `
      <table class="table table-hover align-middle small" style="font-size: 11.5px;">
        <thead>
          <tr>
            <th style="width: 180px;">Parameter</th>
            ${selectedProfiles.map(item => `
              <th>
                <div class="fw-bold text-dark">${item.name}</div>
                <div class="text-muted font-monospace small">${item.refCode}</div>
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
  }

  // Run Initialization
  init();
});
