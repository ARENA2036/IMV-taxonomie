/**
 * Industrial Metaverse Tech Stack Audit — Pure 100% JSON-Driven Engine
 * GitHub Pages Compatible & Zero-CORS Fallback Protocol
 * 5-Schichten Industrial Metaverse Tech-Stack Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  let categories = [];
  let dbItems = [];
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
    renderMatrixTable();
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
      <table class="table-view" style="width: 100%;">
        <thead>
          <tr>
            <th style="width: 30px;"></th>
            <th>Ref Code</th>
            <th>Kat. Code</th>
            <th>Technologie Name</th>
            <th>Entwickler / Vendor</th>
            <th>Kostengruppe</th>
            <th>Status</th>
            <th style="text-align: right;">Aktion</th>
          </tr>
        </thead>
        <tbody>
    `;

    filteredItems.forEach(item => {
      const tierClass = item.tier === 'Tier 1' ? 'tier-1' : item.tier === 'Tier 2' ? 'tier-2' : 'tier-3';
      const isChecked = selectedCompareRefs.has(item.refCode);

      html += `
        <tr>
          <td><input type="checkbox" class="chk-compare" data-ref="${item.refCode}" ${isChecked ? 'checked' : ''}></td>
          <td><code style="font-family: var(--font-mono); font-size: 10px;">${item.refCode}</code></td>
          <td><strong>${item.categoryCode}</strong></td>
          <td><strong>${item.name}</strong> <span style="font-size: 11px; color: var(--text-muted);">(${item.subtitle})</span></td>
          <td>${item.vendor}</td>
          <td><span class="tier-badge ${tierClass}">${item.tier}</span></td>
          <td><span class="status-pill">${item.status}</span></td>
          <td style="text-align: right;">
            <button class="btn btn-primary btn-inspect" data-ref="${item.refCode}" style="padding: 3px 8px; font-size: 10px;">
              Details →
            </button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
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

    const inputTagsHtml = inputs.map(t => `<span class="tag">${t}</span>`).join('');
    const outputTagsHtml = outputs.map(t => `<span class="tag">${t}</span>`).join('');
    const bridgeTagsHtml = bridges.map(t => `<span class="tag tag-bridge">${t}</span>`).join('');

    const featuresHtml = features.map(f => `
      <div class="feature-box">
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>
    `).join('');

    const evalHtml = evaluations.map(e => `
      <li><strong>${e.title}:</strong> ${e.text}</li>
    `).join('');

    return `
      <div class="slide-container" id="slide-${item.refCode}">
        <div class="header-bar">
          <div class="header-title-group">
            <span class="header-category">KAT. ${item.categoryCode} — ${item.categoryName}</span>
            <h1 class="slide-title">${item.name} — ${item.subtitle}</h1>
          </div>
          <div class="tier-badge ${tierClass}">${item.tier} (${item.costLabel || ''})</div>
        </div>
        
        <div class="metadata-strip">
          <div class="meta-card"><div class="meta-label">Entwickler / Vendor</div><div class="meta-value">${item.vendor}</div></div>
          <div class="meta-card"><div class="meta-label">Hauptsitz / Land</div><div class="meta-value">${item.hq}</div></div>
          <div class="meta-card"><div class="meta-label">Geschäftsmodell</div><div class="meta-value">${item.businessModel}</div></div>
          <div class="meta-card"><div class="meta-label">Plattform-URL</div><div class="meta-value"><a href="${item.url}" target="_blank">${(item.url || '').replace('https://', '')}</a></div></div>
        </div>
        
        <div class="content-grid">
          <div class="left-column">
            <div class="panel">
              <div class="panel-header"><i class="fa-solid fa-cube"></i><h2 class="panel-title">Systemübersicht & Architektur</h2></div>
              <p class="body-text">${item.overview || ''}</p>
            </div>
            
            <div class="panel">
              <div class="panel-header"><i class="fa-solid fa-gears"></i><h2 class="panel-title">Technische Kernfunktionen</h2></div>
              <div class="feature-tiles">
                ${featuresHtml}
              </div>
            </div>
            
            <div class="panel">
              <div class="panel-header"><i class="fa-solid fa-diagram-project"></i><h2 class="panel-title">Datenformate & Schnittstellen</h2></div>
              <div class="pipeline-grid">
                <div class="pipeline-box"><div class="pipeline-title">Eingabeformate</div><div class="tag-list">${inputTagsHtml}</div></div>
                <div class="pipeline-box"><div class="pipeline-title">Ausgabeformate</div><div class="tag-list">${outputTagsHtml}</div></div>
              </div>
              <div style="margin-top: 4px;"><span class="pipeline-title">Ökosystem-Bridges</span><div class="tag-list">${bridgeTagsHtml}</div></div>
            </div>
          </div>
          
          <div class="right-column">
            <div class="panel eval-panel" style="flex-grow: 1;">
              <div class="panel-header"><i class="fa-solid fa-vial-circle-check"></i><h2 class="panel-title">In-House Feld-Bewertung</h2></div>
              <ul class="bullet-list">
                ${evalHtml}
              </ul>
              <div style="border-top: 1px dashed var(--border-subtle); padding-top: 6px; margin-top: auto;">
                <span class="panel-title" style="font-size: 9px;">Compliance & Standards</span>
                <div class="compliance-grid">
                  <div class="compliance-card"><div class="comp-val">${compliance.omniverse || 'Supported'}</div><div class="comp-lbl">Omniverse</div></div>
                  <div class="compliance-card"><div class="comp-val">${compliance.sovereignty || 'EU Compliant'}</div><div class="comp-lbl">DSGVO / EU</div></div>
                  <div class="compliance-card"><div class="comp-val">${compliance.openStandard || 'Open Standard'}</div><div class="comp-lbl">Offener Std.</div></div>
                </div>
              </div>
            </div>
            
            <div class="panel">
              <div class="panel-header"><i class="fa-solid fa-sliders"></i><h2 class="panel-title">Bereitstellungsparameter</h2></div>
              <div class="deployment-grid">
                <div><strong>Einarbeitung:</strong> <span>${deployment.effort || 'Mittel'}</span></div>
                <div><strong>Bereitstellung:</strong> ${deployment.mode || 'Cloud / On-Premise'}</div>
                <div><strong>Reifegrad:</strong> ${deployment.maturity || 'Produktiv'}</div>
                <div><strong>Einsatz:</strong> ${deployment.area || 'Industrieller Werksbetrieb'}</div>
                <div class="personnel-box">
                  <div class="personnel-title">Personalbedarf & Zeitintensität:</div>
                  <strong>${item.staffing || '1x Spezialist'}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bar">
          <div>Ref: <strong>${item.refCode}</strong></div>
          <div>Omniverse: <strong>${compliance.omniverse || 'Ready'}</strong></div>
          <div>Status: <span class="status-pill">${item.status}</span></div>
        </div>
      </div>
    `;
  }

  async function openProfileModal(refCode) {
    if (!profileModal) return;
    const profile = await getProfileData(refCode);
    if (!profile) return;

    if (modalProfileTitle) modalProfileTitle.textContent = `${profile.name} (${profile.refCode})`;
    if (modalProfileBody) modalProfileBody.innerHTML = generateSlideHtml(profile);

    if (modalDirectJsonLink) modalDirectJsonLink.href = `profiles/${profile.refCode}.json`;

    profileModal.classList.add('active');
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
      <table class="table-view" style="font-size: 11.5px;">
        <thead>
          <tr>
            <th style="width: 180px;">Parameter</th>
            ${selectedProfiles.map(item => `
              <th>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <strong>${item.name}</strong>
                  <button class="btn btn-remove-compare" data-ref="${item.refCode}" style="padding: 2px 6px; font-size: 10px;"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div style="font-size: 10px; color: var(--text-muted); font-weight: 500;">${item.vendor}</div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Ref Code</strong></td>${selectedProfiles.map(i => `<td><code>${i.refCode}</code></td>`).join('')}</tr>
          <tr><td><strong>Kategorie</strong></td>${selectedProfiles.map(i => `<td>Kat. ${i.categoryCode} — ${i.categoryName}</td>`).join('')}</tr>
          <tr><td><strong>Kostengruppe (Tier)</strong></td>${selectedProfiles.map(i => `<td><span class="tier-badge ${i.tier === 'Tier 1' ? 'tier-1' : i.tier === 'Tier 2' ? 'tier-2' : 'tier-3'}">${i.tier} (${i.costLabel || ''})</span></td>`).join('')}</tr>
          <tr><td><strong>Geschäftsmodell</strong></td>${selectedProfiles.map(i => `<td>${i.businessModel}</td>`).join('')}</tr>
          <tr><td><strong>Hauptsitz / Land</strong></td>${selectedProfiles.map(i => `<td>${i.hq}</td>`).join('')}</tr>
          <tr><td><strong>Omniverse Status</strong></td>${selectedProfiles.map(i => `<td><strong>${(i.compliance || {}).omniverse || 'Ready'}</strong></td>`).join('')}</tr>
          <tr><td><strong>EU Souveränität</strong></td>${selectedProfiles.map(i => `<td>${(i.compliance || {}).sovereignty || 'EU Safe'}</td>`).join('')}</tr>
          <tr><td><strong>Eingabeformate</strong></td>${selectedProfiles.map(i => `<td>${(i.inputs || []).join(', ')}</td>`).join('')}</tr>
          <tr><td><strong>Ausgabeformate</strong></td>${selectedProfiles.map(i => `<td>${(i.outputs || []).join(', ')}</td>`).join('')}</tr>
          <tr><td><strong>Ökosystem-Bridges</strong></td>${selectedProfiles.map(i => `<td>${(i.bridges || []).join(', ')}</td>`).join('')}</tr>
          <tr><td><strong>Bereitstellung</strong></td>${selectedProfiles.map(i => `<td>${(i.deployment || {}).mode || 'Cloud / On-Prem'}</td>`).join('')}</tr>
          <tr><td><strong>Einarbeitungsaufwand</strong></td>${selectedProfiles.map(i => `<td>${(i.deployment || {}).effort || 'Mittel'}</td>`).join('')}</tr>
          <tr><td><strong>Personalbedarf</strong></td>${selectedProfiles.map(i => `<td>${i.staffing || '1x Spezialist'}</td>`).join('')}</tr>
        </tbody>
      </table>
    `;

    compareModalBody.innerHTML = html;

    compareModalBody.querySelectorAll('.btn-remove-compare').forEach(btn => {
      btn.addEventListener('click', () => {
        const ref = btn.getAttribute('data-ref');
        selectedCompareRefs.delete(ref);
        updateCompareCounter();
        renderCompareModal();
        renderMainView();
      });
    });
  }

  function renderMatrixTable() {
    if (!matrixTableBody) return;

    let html = '';
    dbItems.forEach(item => {
      const tierClass = item.tier === 'Tier 1' ? 'tier-1' : item.tier === 'Tier 2' ? 'tier-2' : 'tier-3';
      html += `
        <tr>
          <td><code style="font-family: var(--font-mono); font-size: 10px;">${item.refCode}</code></td>
          <td><strong>${item.categoryCode}</strong></td>
          <td>${item.categoryName}</td>
          <td><strong>${item.name}</strong></td>
          <td>${item.vendor}</td>
          <td><span class="tier-badge ${tierClass}">${item.tier}</span></td>
          <td><span class="status-pill">${item.status}</span></td>
          <td>
            <button class="btn btn-matrix-inspect" data-ref="${item.refCode}" style="padding: 3px 8px; font-size: 10px;">
              Details →
            </button>
          </td>
        </tr>
      `;
    });

    matrixTableBody.innerHTML = html;

    matrixTableBody.querySelectorAll('.btn-matrix-inspect').forEach(btn => {
      btn.addEventListener('click', () => {
        const ref = btn.getAttribute('data-ref');
        if (matrixModal) matrixModal.classList.remove('active');
        openProfileModal(ref);
      });
    });
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
        compareModal.classList.add('active');
      });
    }

    if (btnCloseCompareModal && compareModal) {
      btnCloseCompareModal.addEventListener('click', () => {
        compareModal.classList.remove('active');
      });
    }

    if (btnOverview && matrixModal) {
      btnOverview.addEventListener('click', () => {
        matrixModal.classList.add('active');
      });
    }

    if (btnOverviewHero && matrixModal) {
      btnOverviewHero.addEventListener('click', () => {
        matrixModal.classList.add('active');
      });
    }

    if (btnCloseMatrixModal && matrixModal) {
      btnCloseMatrixModal.addEventListener('click', () => {
        matrixModal.classList.remove('active');
      });
    }

    if (btnCloseProfileModal && profileModal) {
      btnCloseProfileModal.addEventListener('click', () => {
        profileModal.classList.remove('active');
        window.location.hash = '';
      });
    }

    // Hamburger Menu Toggle Handler
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const hamburgerDropdown = document.getElementById('hamburgerDropdown');
    
    if (hamburgerBtn && hamburgerDropdown) {
      hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburgerDropdown.classList.toggle('active');
      });

      document.addEventListener('click', (e) => {
        if (!hamburgerDropdown.contains(e.target) && e.target !== hamburgerBtn) {
          hamburgerDropdown.classList.remove('active');
        }
      });
    }

    // Matrix Menu Link in Hamburger
    const btnMatrixMenu = document.getElementById('btnMatrixMenu');
    if (btnMatrixMenu && matrixModal) {
      btnMatrixMenu.addEventListener('click', (e) => {
        e.preventDefault();
        if (hamburgerDropdown) hamburgerDropdown.classList.remove('active');
        matrixModal.classList.add('active');
      });
    }
  }

  // Run Initialization
  init();
});
