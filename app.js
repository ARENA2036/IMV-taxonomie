/**
 * Industrial Metaverse Taxonomy Engine: High-Performance Pure JSON Client Engine
 * ARENA2036 Reallabor 2.0 Project
 * 
 * Zero-Dependency ES6+ Architecture.
 * Compatible with GitHub Pages HTTP(S) and Zero-CORS local file:// execution.
 * 
 * Architectural Modules:
 * - DataStore: Dual-mode JSON loader (HTTP fetch / window.INDEX_DATA fallback) & profile cache
 * - FilterEngine: Pure functional multi-attribute filtering & search pipeline
 * - ViewRenderer: Declarative HTML renderers for Grid, List, Sidebar, Comparison & Modals
 * - ModalManager: Keyboard-accessible modal lifecycle controller (Bootstrap 5 / Vanilla DOM)
 * - ExportManager: Enterprise ADR Markdown & CSV matrix generation and clipboard copy
 * - AppController: Initialization, URL hash synchronization, and event orchestration
 * 
 * @module app
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================
  // 1. DOM SELECTORS & REGISTRY
  // ==========================================
  const DOM = {
    categoryTree: document.getElementById('categoryTree'),
    itemsContainer: document.getElementById('itemsContainer'),
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    filterTier: document.getElementById('filterTier'),
    filterStatus: document.getElementById('filterStatus'),
    totalCountBadge: document.getElementById('totalCountBadge'),
    statusBar: document.getElementById('statusBar'),
    btnGridMode: document.getElementById('btnGridMode'),
    btnListMode: document.getElementById('btnListMode'),
    btnCompare: document.getElementById('btnCompare'),
    compareCount: document.getElementById('compareCount'),
    profileModal: document.getElementById('profileModal'),
    compareModal: document.getElementById('compareModal'),
    modalProfileTitle: document.getElementById('modalProfileTitle'),
    modalProfileBody: document.getElementById('modalProfileBody'),
    modalDirectJsonLink: document.getElementById('modalDirectJsonLink'),
    compareModalBody: document.getElementById('compareModalBody'),
    btnCloseProfileModal: document.getElementById('btnCloseProfileModal'),
    btnCloseCompareModal: document.getElementById('btnCloseCompareModal'),
    btnExportMd: document.getElementById('btnExportMd'),
    btnExportCsv: document.getElementById('btnExportCsv'),
    useCasesContainer: document.getElementById('useCasesContainer'),
    totalUseCaseCount: document.getElementById('totalUseCaseCount'),
    kpiTotalTools: document.getElementById('kpiTotalTools'),
    kpiTotalUseCases: document.getElementById('kpiTotalUseCases'),
    kpiTotalCategories: document.getElementById('kpiTotalCategories'),
    layerChipsBar: document.getElementById('layerChipsBar')
  };

  // ==========================================
  // 2. CANONICAL LAYER DEFINITIONS & CONSTANTS
  // ==========================================
  const LAYER_NAMES = Object.freeze({
    '1': 'Schicht 1: Erfassung & Sensorik',
    '2': 'Schicht 2: Geometrie & CAD/BIM',
    '3': 'Schicht 3: Middleware & Integration',
    '4': 'Schicht 4: Simulation & Verhalten',
    '5': 'Schicht 5: Immersion & Interaktion'
  });

  const LAYER_CATEGORY_MAP = Object.freeze({
    '1': ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8'],
    '2': ['2.1', '2.2', '2.3', '2.4'],
    '3': ['3.1', '3.2', '3.3'],
    '4': ['4.1', '4.2', '4.3', '4.4'],
    '5': ['5.1', '5.2']
  });

  // ==========================================
  // 3. REACTIVE STATE STORE
  // ==========================================
  const StateStore = {
    categories: [],
    dbItems: [],
    usecases: [],
    profilesCache: new Map(),
    selectedCategoryCode: null,
    selectedLayer: 'ALL',
    selectedTier: 'ALL',
    selectedStatus: 'ALL',
    searchTerm: '',
    currentViewMode: 'grid',
    selectedCompareRefs: new Set(),
    subscribers: [],

    subscribe(callback) {
      this.subscribers.push(callback);
    },

    notify() {
      this.subscribers.forEach(cb => cb(this));
    },

    setCategory(code) {
      if (code === 'ALL') {
        this.selectedCategoryCode = null;
        this.selectedLayer = 'ALL';
      } else {
        this.selectedCategoryCode = code;
        this.selectedLayer = 'ALL';
      }
      this.notify();
    },

    setLayer(layerKey) {
      this.selectedLayer = layerKey;
      this.selectedCategoryCode = null;
      this.notify();
    },

    setFilters(tier, status, search) {
      this.selectedTier = tier;
      this.selectedStatus = status;
      this.searchTerm = search.trim().toLowerCase();
      this.notify();
    },

    setViewMode(mode) {
      if (this.currentViewMode !== mode) {
        this.currentViewMode = mode;
        this.notify();
      }
    },

    toggleCompareRef(ref) {
      if (this.selectedCompareRefs.has(ref)) {
        this.selectedCompareRefs.delete(ref);
      } else {
        if (this.selectedCompareRefs.size >= 4) {
          alert('Sie können maximal 4 Technologien gleichzeitig vergleichen.');
          return false;
        }
        this.selectedCompareRefs.add(ref);
      }
      this.notify();
      return true;
    }
  };

  // ==========================================
  // 4. DATA MANAGER (DUAL-MODE HYDRATION)
  // ==========================================
  const DataManager = {
    async loadIndex() {
      try {
        const res = await fetch('./data/index.json');
        if (!res.ok) throw new Error(`HTTP status ${res.status}`);
        const data = await res.json();
        StateStore.categories = data.categories || [];
        StateStore.dbItems = data.items || [];
        StateStore.usecases = data.usecases || [];
      } catch (err) {
        console.warn('Fallback auf window.INDEX_DATA (file:// Protokoll):', err.message);
        if (window.INDEX_DATA) {
          StateStore.categories = window.INDEX_DATA.categories || [];
          StateStore.dbItems = window.INDEX_DATA.items || [];
          StateStore.usecases = window.INDEX_DATA.usecases || [];
        }
      }
    },

    async getProfile(refCode) {
      if (StateStore.profilesCache.has(refCode)) {
        return StateStore.profilesCache.get(refCode);
      }

      try {
        const res = await fetch(`./profiles/${refCode}.json`);
        if (!res.ok) throw new Error('Profile fetch failed');
        const profile = await res.json();
        StateStore.profilesCache.set(refCode, profile);
        return profile;
      } catch (err) {
        if (window.PROFILES_DATA && window.PROFILES_DATA[refCode]) {
          const profile = window.PROFILES_DATA[refCode];
          StateStore.profilesCache.set(refCode, profile);
          return profile;
        }
        const fallback = StateStore.dbItems.find(i => i.refCode === refCode);
        return fallback || null;
      }
    }
  };

  // ==========================================
  // 5. PURE FILTER ENGINE
  // ==========================================
  const FilterEngine = {
    filterItems(items, state) {
      const { selectedCategoryCode, selectedLayer, selectedTier, selectedStatus, searchTerm } = state;

      return items.filter(item => {
        // Category check
        if (selectedCategoryCode !== null && item.categoryCode !== selectedCategoryCode) {
          return false;
        }

        // Layer check
        if (selectedLayer !== 'ALL') {
          const allowedCats = LAYER_CATEGORY_MAP[selectedLayer] || [];
          if (!allowedCats.includes(item.categoryCode)) return false;
        }

        // Tier check
        if (selectedTier !== 'ALL' && item.tier !== selectedTier) {
          return false;
        }

        // Status check
        if (selectedStatus !== 'ALL' && item.status !== selectedStatus) {
          return false;
        }

        // Multi-token keyword search
        if (searchTerm !== '') {
          const term = searchTerm;
          const match =
            item.name.toLowerCase().includes(term) ||
            item.refCode.toLowerCase().includes(term) ||
            item.vendor.toLowerCase().includes(term) ||
            item.categoryName.toLowerCase().includes(term) ||
            (item.overview && item.overview.toLowerCase().includes(term)) ||
            (item.subtitle && item.subtitle.toLowerCase().includes(term));
          if (!match) return false;
        }

        return true;
      });
    },

    filterUseCases(usecases, state) {
      const { selectedTier, searchTerm } = state;

      return usecases.filter(uc => {
        if (selectedTier !== 'ALL' && uc.tier !== selectedTier) return false;

        if (searchTerm !== '') {
          const term = searchTerm;
          const match =
            uc.title.toLowerCase().includes(term) ||
            uc.shortDesc.toLowerCase().includes(term) ||
            uc.goal.toLowerCase().includes(term) ||
            (uc.flow && uc.flow.some(f => f.nodeName.toLowerCase().includes(term) || (f.refCode && f.refCode.toLowerCase().includes(term))));
          if (!match) return false;
        }

        return true;
      });
    }
  };

  // ==========================================
  // 6. DECLARATIVE VIEW RENDERER
  // ==========================================
  const ViewRenderer = {
    escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },

    getTagClass(tag) {
      const t = (tag || '').toLowerCase();
      if (t.includes('usd')) return 'tag-usd';
      if (t.includes('gltf') || t.includes('glb')) return 'tag-gltf';
      if (t.includes('step') || t.includes('iges') || t.includes('jt')) return 'tag-step';
      if (t.includes('aas') || t.includes('aasx')) return 'tag-aas';
      if (t.includes('opc') || t.includes('mqtt') || t.includes('profinet')) return 'tag-opcua';
      if (t.includes('edc') || t.includes('dataspace')) return 'tag-edc';
      if (t.includes('ros')) return 'tag-ros';
      return '';
    },

    getStatusBadge(status) {
      const s = (status || 'INDEXIERT').toUpperCase();
      switch (s) {
        case 'INDEXIERT':
          return `<span class="badge bg-secondary text-white font-monospace"><i class="fa-solid fa-list-check me-1"></i>INDEXIERT</span>`;
        case 'GEPRÜFT':
          return `<span class="badge bg-info text-dark font-monospace"><i class="fa-solid fa-square-check me-1"></i>GEPRÜFT</span>`;
        case 'USE CASE IMPLEMENTIERT':
          return `<span class="badge bg-primary text-white font-monospace"><i class="fa-solid fa-diagram-project me-1"></i>USE CASE IMPLEMENTIERT</span>`;
        case 'EXTERN VALIDIERT':
          return `<span class="badge bg-success text-white font-monospace"><i class="fa-solid fa-circle-check me-1"></i>EXTERN VALIDIERT</span>`;
        case 'COMMUNITY BEITRAG':
          return `<span class="badge bg-warning text-dark font-monospace"><i class="fa-solid fa-users me-1"></i>COMMUNITY BEITRAG</span>`;
        default:
          return `<span class="badge bg-secondary font-monospace">${this.escapeHtml(s)}</span>`;
      }
    },

    getTierClass(tier) {
      if (tier === 'Tier 1') return 'tier-1';
      if (tier === 'Tier 2') return 'tier-2';
      return 'tier-3';
    },

    renderSidebar(container, state) {
      if (!container) return;

      let html = `
        <div class="category-item ${state.selectedCategoryCode === null && state.selectedLayer === 'ALL' ? 'active' : ''}" data-cat-code="ALL">
          <div class="category-header-row">
            <span class="cat-code-badge">ALLE</span>
            <span class="category-title">Gesamter Stack</span>
            <span class="cat-count-badge">${state.dbItems.length}</span>
          </div>
        </div>
      `;

      ['1', '2', '3', '4', '5'].forEach(layerKey => {
        const catCodes = LAYER_CATEGORY_MAP[layerKey] || [];
        const layerCats = state.categories.filter(c => catCodes.includes(c.code));
        layerCats.sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }));

        html += `
          <div class="sidebar-layer-group">
            <div class="sidebar-layer-title">${LAYER_NAMES[layerKey]}</div>
        `;

        layerCats.forEach(cat => {
          const count = state.dbItems.filter(item => item.categoryCode === cat.code).length;
          const isActive = state.selectedCategoryCode === cat.code;
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

      container.innerHTML = html;

      container.querySelectorAll('.category-item').forEach(el => {
        el.addEventListener('click', () => {
          const code = el.getAttribute('data-cat-code');
          StateStore.setCategory(code);
        });
      });
    },

    renderLayerChips(container, state) {
      if (!container) return;
      const chips = container.querySelectorAll('.layer-chip');
      chips.forEach(chip => {
        const layer = chip.getAttribute('data-layer');
        if (state.selectedCategoryCode === null && state.selectedLayer === layer) {
          chip.classList.add('active');
        } else {
          chip.classList.remove('active');
        }
      });
    },

    renderGrid(items, container, state) {
      container.classList.remove('list-view-mode');
      container.classList.add('grid-view-mode');

      let html = '';
      items.forEach(item => {
        const tierClass = this.getTierClass(item.tier);
        const isChecked = state.selectedCompareRefs.has(item.refCode);
        const inputs = (item.inputs || []).slice(0, 2);
        const bridges = (item.bridges || []).slice(0, 2);

        const inputTags = inputs.map(t => `<span class="tag ${this.getTagClass(t)}">${this.escapeHtml(t)}</span>`).join('');
        const bridgeTags = bridges.map(t => `<span class="tag tag-bridge ${this.getTagClass(t)}">${this.escapeHtml(t)}</span>`).join('');

        html += `
          <div class="card-item" onclick="window.appOpenProfileModal('${item.refCode}')">
            <div>
              <div class="card-header-bar">
                <span class="card-category">KAT ${item.categoryCode}: ${this.escapeHtml(item.categoryName)}</span>
                <span class="tier-badge ${tierClass}">${item.tier}</span>
              </div>
              <h3 class="card-title">${this.escapeHtml(item.name)}</h3>
              <div class="card-subtitle">${this.escapeHtml(item.subtitle)}</div>
              <p class="card-overview">${this.escapeHtml(item.overview || '')}</p>
              <div class="card-tags">
                ${inputTags}
                ${bridgeTags}
              </div>
            </div>

            <div class="card-footer">
              <div class="d-flex align-items-center gap-2">
                <input type="checkbox" class="chk-compare form-check-input" data-ref="${item.refCode}" ${isChecked ? 'checked' : ''} style="cursor: pointer;" title="Für Vergleich auswählen">
                <span class="card-vendor"><i class="fa-solid fa-building me-1 text-muted"></i> ${this.escapeHtml(item.vendor)}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm btn-inspect py-1 px-2" data-ref="${item.refCode}" style="font-size: 11px;">
                Details →
              </button>
            </div>
          </div>
        `;
      });

      container.innerHTML = html;
      this.bindCardEvents(container);
    },

    renderList(items, container, state) {
      container.classList.remove('grid-view-mode');
      container.classList.add('list-view-mode');

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
                <th style="width: 130px;">Status</th>
                <th style="width: 110px;" class="text-end">Aktion</th>
              </tr>
            </thead>
            <tbody>
      `;

      items.forEach(item => {
        const tierClass = this.getTierClass(item.tier);
        const isChecked = state.selectedCompareRefs.has(item.refCode);

        html += `
          <tr>
            <td class="text-center"><input type="checkbox" class="chk-compare form-check-input" data-ref="${item.refCode}" ${isChecked ? 'checked' : ''}></td>
            <td><code class="text-muted font-monospace fw-bold">${item.refCode}</code></td>
            <td><span class="badge bg-secondary font-monospace">${item.categoryCode}</span></td>
            <td><strong class="text-dark">${this.escapeHtml(item.name)}</strong> <small class="text-muted">(${this.escapeHtml(item.subtitle)})</small></td>
            <td>${this.escapeHtml(item.vendor)}</td>
            <td><span class="tier-badge ${tierClass}">${item.tier}</span></td>
            <td>${this.getStatusBadge(item.status)}</td>
            <td class="text-end">
              <button class="btn btn-outline-primary btn-sm btn-inspect py-1 px-2" data-ref="${item.refCode}" style="font-size: 11px;">
                Details →
              </button>
            </td>
          </tr>
        `;
      });

      html += `</tbody></table></div>`;
      container.innerHTML = html;
      this.bindCardEvents(container);
    },

    bindCardEvents(container) {
      container.querySelectorAll('.btn-inspect').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const ref = btn.getAttribute('data-ref');
          ModalManager.openProfile(ref);
        });
      });

      container.querySelectorAll('.chk-compare').forEach(chk => {
        chk.addEventListener('click', (e) => {
          e.stopPropagation();
          const ref = chk.getAttribute('data-ref');
          const success = StateStore.toggleCompareRef(ref);
          if (!success) chk.checked = false;
        });
      });
    },

    renderProfileSlide(item) {
      const tierClass = this.getTierClass(item.tier);
      const inputs = item.inputs || [];
      const outputs = item.outputs || [];
      const bridges = item.bridges || [];
      const features = item.features || [];
      const evaluations = item.evaluations || [];
      const compliance = item.compliance || {};
      const deployment = item.deployment || {};

      const inputTagsHtml = inputs.map(t => `<span class="badge bg-light text-dark border me-1 mb-1 font-monospace ${this.getTagClass(t)}">${this.escapeHtml(t)}</span>`).join('');
      const outputTagsHtml = outputs.map(t => `<span class="badge bg-light text-dark border me-1 mb-1 font-monospace ${this.getTagClass(t)}">${this.escapeHtml(t)}</span>`).join('');
      const bridgeTagsHtml = bridges.map(t => `<span class="badge bg-primary-subtle text-primary border border-primary-subtle me-1 mb-1 font-monospace ${this.getTagClass(t)}">${this.escapeHtml(t)}</span>`).join('');

      const featuresHtml = features.map(f => `
        <div class="col-md-6 mb-2">
          <div class="p-2 border rounded bg-light h-100">
            <div class="fw-bold small text-dark">${this.escapeHtml(f.title)}</div>
            <div class="text-muted" style="font-size: 11px; line-height: 1.3;">${this.escapeHtml(f.desc)}</div>
          </div>
        </div>
      `).join('');

      const evalHtml = evaluations.map(e => `
        <li class="mb-2"><strong>${this.escapeHtml(e.title)}:</strong> ${this.escapeHtml(e.text)}</li>
      `).join('');

      return `
        <div class="container-fluid p-0">
          <div class="d-flex justify-content-between align-items-start border-bottom pb-3 mb-3 flex-wrap gap-2">
            <div>
              <span class="badge bg-secondary font-monospace mb-1">KAT. ${item.categoryCode}: ${this.escapeHtml(item.categoryName)}</span>
              <h3 class="h4 fw-black text-dark m-0">${this.escapeHtml(item.name)} <span class="text-muted fs-6 fw-normal">(${this.escapeHtml(item.subtitle)})</span></h3>
            </div>
            <div>
              <span class="tier-badge ${tierClass} fs-6">${item.tier}</span>
              <div class="small text-muted text-end font-monospace">${this.escapeHtml(item.costLabel || '')}</div>
            </div>
          </div>

          <div class="row g-2 mb-3 small">
            <div class="col-md-3 col-6"><div class="p-2 bg-light rounded border"><strong>Vendor:</strong> ${this.escapeHtml(item.vendor)}</div></div>
            <div class="col-md-3 col-6"><div class="p-2 bg-light rounded border"><strong>HQ:</strong> ${this.escapeHtml(item.hq || 'Global')}</div></div>
            <div class="col-md-3 col-6"><div class="p-2 bg-light rounded border"><strong>Lizenz:</strong> ${this.escapeHtml(item.businessModel)}</div></div>
            <div class="col-md-3 col-6"><div class="p-2 bg-light rounded border text-truncate"><strong>Web:</strong> <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="text-primary">${this.escapeHtml((item.url || '').replace('https://', ''))}</a></div></div>
          </div>

          <div class="row g-3">
            <div class="col-lg-7">
              <div class="card border mb-3">
                <div class="card-header bg-light fw-bold small"><i class="fa-solid fa-cube text-primary me-2"></i>Systemübersicht</div>
                <div class="card-body small text-secondary">${this.escapeHtml(item.overview || '')}</div>
              </div>

              <div class="card border mb-3">
                <div class="card-header bg-light fw-bold small"><i class="fa-solid fa-gears text-primary me-2"></i>Kernfunktionen</div>
                <div class="card-body p-2">
                  <div class="row g-2">${featuresHtml}</div>
                </div>
              </div>

              <div class="card border">
                <div class="card-header bg-light fw-bold small"><i class="fa-solid fa-diagram-project text-primary me-2"></i>Datenformate & Schnittstellen</div>
                <div class="card-body small">
                  <div class="mb-2"><strong>Eingabeformate:</strong><div class="mt-1">${inputTagsHtml}</div></div>
                  <div class="mb-2"><strong>Ausgabeformate:</strong><div class="mt-1">${outputTagsHtml}</div></div>
                  <div><strong>Ökosystem-Bridges:</strong><div class="mt-1">${bridgeTagsHtml}</div></div>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="card border mb-3">
                <div class="card-header bg-light fw-bold small"><i class="fa-solid fa-vial-circle-check text-primary me-2"></i>Praxis-Bewertung</div>
                <div class="card-body small">
                  <ul class="ps-3 mb-3 text-secondary">${evalHtml}</ul>
                  <div class="border-top pt-2 mt-2">
                    <div class="fw-bold text-muted mb-1" style="font-size: 10px;">COMPLIANCE & STANDARDS</div>
                    <div class="d-flex justify-content-between text-center gap-1 small">
                      <div class="p-1 bg-light rounded border flex-grow-1"><div class="fw-bold">${this.escapeHtml(compliance.omniverse || 'Supported')}</div><div class="text-muted" style="font-size: 10px;">Omniverse</div></div>
                      <div class="p-1 bg-light rounded border flex-grow-1"><div class="fw-bold">${this.escapeHtml(compliance.sovereignty || 'DSGVO')}</div><div class="text-muted" style="font-size: 10px;">Souveränität</div></div>
                      <div class="p-1 bg-light rounded border flex-grow-1"><div class="fw-bold">${this.escapeHtml(compliance.openStandard || 'Open')}</div><div class="text-muted" style="font-size: 10px;">Standard</div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card border">
                <div class="card-header bg-light fw-bold small"><i class="fa-solid fa-sliders text-primary me-2"></i>Bereitstellungsparameter</div>
                <div class="card-body small text-secondary">
                  <div class="mb-1"><strong>Einarbeitungsaufwand:</strong> ${this.escapeHtml(deployment.effort || 'Mittel')}</div>
                  <div class="mb-1"><strong>Bereitstellung:</strong> ${this.escapeHtml(deployment.mode || 'Cloud / Hybrid')}</div>
                  <div class="mb-1"><strong>Reifegrad:</strong> ${this.escapeHtml(deployment.maturity || 'Produktiv')}</div>
                  <div class="mb-2"><strong>Einsatzbereich:</strong> ${this.escapeHtml(deployment.area || 'Werksbetrieb')}</div>
                  <div class="p-2 bg-light rounded border">
                    <strong>Personalbedarf:</strong> ${this.escapeHtml(item.staffing || '1x Spezialist')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center border-top mt-3 pt-2 small text-muted font-monospace">
            <div>Ref: <strong>${item.refCode}</strong></div>
            <div>Status: <span class="badge bg-light text-dark border">${item.status}</span></div>
          </div>
        </div>
      `;
    }
  };

  // ==========================================
  // 7. ACCESSIBLE MODAL MANAGER
  // ==========================================
  const ModalManager = {
    show(el) {
      if (!el) return;
      document.body.classList.add('modal-open');
      if (window.bootstrap && window.bootstrap.Modal) {
        const bsModal = window.bootstrap.Modal.getOrCreateInstance(el);
        bsModal.show();
      } else {
        el.classList.add('show');
        el.style.display = 'block';
      }

      let backdrop = document.querySelector('.modal-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show';
        document.body.appendChild(backdrop);
      } else {
        backdrop.classList.add('show');
      }
    },

    hide(el) {
      if (!el) return;
      document.body.classList.remove('modal-open');
      if (window.bootstrap && window.bootstrap.Modal) {
        const bsModal = window.bootstrap.Modal.getOrCreateInstance(el);
        bsModal.hide();
      } else {
        el.classList.remove('show');
        el.style.display = 'none';
      }

      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) backdrop.remove();
    },

    async openProfile(refCode) {
      if (!DOM.profileModal) return;
      const profile = await DataManager.getProfile(refCode);
      if (!profile) return;

      if (DOM.modalProfileTitle) DOM.modalProfileTitle.textContent = `${profile.name} (${profile.refCode})`;
      if (DOM.modalProfileBody) DOM.modalProfileBody.innerHTML = ViewRenderer.renderProfileSlide(profile);
      if (DOM.modalDirectJsonLink) DOM.modalDirectJsonLink.href = `profiles/${profile.refCode}.json`;

      this.show(DOM.profileModal);
      window.location.hash = `profile/${profile.refCode}`;
    },

    async openCompare() {
      if (!DOM.compareModal || !DOM.compareModalBody) return;

      const refs = Array.from(StateStore.selectedCompareRefs);
      if (refs.length === 0) {
        DOM.compareModalBody.innerHTML = `
          <div class="text-center p-5">
            <i class="fa-solid fa-code-compare display-4 text-muted mb-3"></i>
            <h3 class="h5 fw-bold">Keine Technologien für den Vergleich ausgewählt</h3>
            <p class="text-muted small m-0">Wählen Sie bis zu 4 Technologien im Karten-Browser aus.</p>
          </div>
        `;
        this.show(DOM.compareModal);
        return;
      }

      const selectedProfiles = await Promise.all(refs.map(r => DataManager.getProfile(r)));

      let html = `
        <table class="table table-bordered table-striped align-middle small mb-0" style="font-size: 12.5px;">
          <thead class="table-dark">
            <tr>
              <th style="width: 180px;">Parameter</th>
              ${selectedProfiles.map(item => `
                <th>
                  <div class="fw-bold text-white">${ViewRenderer.escapeHtml(item.name)}</div>
                  <div class="text-muted font-monospace small" style="font-size: 11px;">${item.refCode}</div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Kategorie</strong></td>
              ${selectedProfiles.map(item => `<td>${item.categoryCode} ${ViewRenderer.escapeHtml(item.categoryName)}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Vendor / HQ</strong></td>
              ${selectedProfiles.map(item => `<td>${ViewRenderer.escapeHtml(item.vendor)} (${ViewRenderer.escapeHtml(item.hq || 'Global')})</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Investitionsklasse</strong></td>
              ${selectedProfiles.map(item => `<td><span class="tier-badge ${ViewRenderer.getTierClass(item.tier)}">${item.tier}</span></td>`).join('')}
            </tr>
            <tr>
              <td><strong>Status</strong></td>
              ${selectedProfiles.map(item => `<td>${ViewRenderer.getStatusBadge(item.status)}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Eingabeformate</strong></td>
              ${selectedProfiles.map(item => `<td>${(item.inputs || []).map(i => ViewRenderer.escapeHtml(i)).join(', ') || 'Standard'}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Ausgabeformate</strong></td>
              ${selectedProfiles.map(item => `<td>${(item.outputs || []).map(o => ViewRenderer.escapeHtml(o)).join(', ') || 'Standard'}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Omniverse-Status</strong></td>
              ${selectedProfiles.map(item => `<td>${ViewRenderer.escapeHtml((item.compliance && item.compliance.omniverse) || 'Supported')}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Personalbedarf</strong></td>
              ${selectedProfiles.map(item => `<td>${ViewRenderer.escapeHtml(item.staffing || '1x Spezialist')}</td>`).join('')}
            </tr>
          </tbody>
        </table>
      `;

      DOM.compareModalBody.innerHTML = html;
      this.show(DOM.compareModal);
    }
  };

  // ==========================================
  // 8. ENTERPRISE EXPORT ENGINE
  // ==========================================
  const ExportManager = {
    async getSelectedProfiles() {
      const refs = Array.from(StateStore.selectedCompareRefs);
      return Promise.all(refs.map(r => DataManager.getProfile(r)));
    },

    async exportMarkdown() {
      const profiles = await this.getSelectedProfiles();
      if (!profiles || profiles.length === 0) return '';

      let md = `# Industrial Metaverse Technologie-Vergleich\n\n`;
      md += `> Erstellt via [ARENA2036 Industrial Metaverse Taxonomie](https://arena2036.github.io/IMV-taxonomie/)\n\n`;
      md += `| Parameter | ${profiles.map(p => `**${p.name}** (\`${p.refCode}\`)`).join(' | ')} |\n`;
      md += `| :--- | ${profiles.map(() => ':---').join(' | ')} |\n`;
      md += `| **Kategorie** | ${profiles.map(p => `${p.categoryCode} ${p.categoryName}`).join(' | ')} |\n`;
      md += `| **Vendor / HQ** | ${profiles.map(p => `${p.vendor} (${p.hq || 'Global'})`).join(' | ')} |\n`;
      md += `| **Investitionsklasse** | ${profiles.map(p => `${p.tier} (${p.costLabel || ''})`).join(' | ')} |\n`;
      md += `| **Status** | ${profiles.map(p => p.status).join(' | ')} |\n`;
      md += `| **Eingabeformate** | ${profiles.map(p => (p.inputs || []).join(', ') || 'Standard').join(' | ')} |\n`;
      md += `| **Ausgabeformate** | ${profiles.map(p => (p.outputs || []).join(', ') || 'Standard').join(' | ')} |\n`;
      md += `| **Bridges & Ökosystem** | ${profiles.map(p => (p.bridges || []).join(', ') || 'Keine').join(' | ')} |\n`;
      md += `| **Omniverse-Status** | ${profiles.map(p => (p.compliance && p.compliance.omniverse) || 'Supported').join(' | ')} |\n`;
      md += `| **Standard** | ${profiles.map(p => (p.compliance && p.compliance.openStandard) || 'Open').join(' | ')} |\n`;
      md += `| **Personalbedarf** | ${profiles.map(p => p.staffing || '1x Spezialist').join(' | ')} |\n`;

      return md;
    },

    async exportCsv() {
      const profiles = await this.getSelectedProfiles();
      if (!profiles || profiles.length === 0) return '';

      const headers = ['Parameter', ...profiles.map(p => `"${p.name} (${p.refCode})"` )];
      const rows = [
        ['Kategorie', ...profiles.map(p => `"${p.categoryCode} ${p.categoryName}"`)],
        ['Vendor', ...profiles.map(p => `"${p.vendor}"`)],
        ['HQ', ...profiles.map(p => `"${p.hq || 'Global'}"`)],
        ['Investitionsklasse', ...profiles.map(p => `"${p.tier}"`)],
        ['Kostenrahmen', ...profiles.map(p => `"${p.costLabel || ''}"`)],
        ['Status', ...profiles.map(p => `"${p.status}"`)],
        ['Eingabeformate', ...profiles.map(p => `"${(p.inputs || []).join('; ')}"`)],
        ['Ausgabeformate', ...profiles.map(p => `"${(p.outputs || []).join('; ')}"`)],
        ['Omniverse', ...profiles.map(p => `"${(p.compliance && p.compliance.omniverse) || ''}"`)],
        ['Personalbedarf', ...profiles.map(p => `"${p.staffing || ''}"`)]
      ];

      return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    },

    async copyText(text, btnEl, successLabel = 'Kopiert!') {
      try {
        await navigator.clipboard.writeText(text);
        if (btnEl) {
          const originalHtml = btnEl.innerHTML;
          btnEl.classList.add('copied');
          btnEl.innerHTML = `<i class="fa-solid fa-check me-1"></i> ${successLabel}`;
          setTimeout(() => {
            btnEl.classList.remove('copied');
            btnEl.innerHTML = originalHtml;
          }, 2000);
        }
      } catch (err) {
        console.warn('Clipboard API fehlgeschlagen, Fallback:', err);
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
    },

    downloadFile(content, filename, type = 'text/csv;charset=utf-8;') {
      const blob = new Blob([content], { type });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Expose global modal opener for inline click triggers
  window.appOpenProfileModal = (refCode) => ModalManager.openProfile(refCode);

  // ==========================================
  // 9. APPLICATION CONTROLLER & VELOCITY SHORTCUTS
  // ==========================================
  const AppController = {
    async init() {
      await DataManager.loadIndex();
      this.handleInitialHash();
      this.bindEvents();
      this.initUseCaseHub();
      this.initUseCaseCarousel();

      // Subscribe view re-renders to state updates
      StateStore.subscribe(() => this.render());

      // Initial Render
      this.render();
    },

    handleInitialHash() {
      const hash = window.location.hash;
      if (hash.startsWith('#layer-')) {
        StateStore.setLayer(hash.replace('#layer-', ''));
      } else if (hash.startsWith('#cat-')) {
        StateStore.setCategory(hash.replace('#cat-', ''));
      } else if (hash.startsWith('#profile/')) {
        const ref = hash.replace('#profile/', '');
        ModalManager.openProfile(ref);
      }
    },

    bindEvents() {
      // Search Input
      if (DOM.searchInput) {
        DOM.searchInput.addEventListener('input', () => {
          StateStore.setFilters(
            DOM.filterTier ? DOM.filterTier.value : 'ALL',
            DOM.filterStatus ? DOM.filterStatus.value : 'ALL',
            DOM.searchInput.value
          );
        });
      }

      // Search Clear Button
      if (DOM.searchClearBtn && DOM.searchInput) {
        DOM.searchClearBtn.addEventListener('click', () => {
          DOM.searchInput.value = '';
          StateStore.setFilters(
            DOM.filterTier ? DOM.filterTier.value : 'ALL',
            DOM.filterStatus ? DOM.filterStatus.value : 'ALL',
            ''
          );
          DOM.searchInput.focus();
        });
      }

      // Layer Chips Bar Buttons
      if (DOM.layerChipsBar) {
        DOM.layerChipsBar.querySelectorAll('.layer-chip').forEach(chip => {
          chip.addEventListener('click', () => {
            const layer = chip.getAttribute('data-layer');
            if (layer === 'ALL') {
              StateStore.setCategory('ALL');
            } else {
              StateStore.setLayer(layer);
            }
          });
        });
      }

      // Filter Dropdowns
      if (DOM.filterTier) {
        DOM.filterTier.addEventListener('change', () => {
          StateStore.setFilters(
            DOM.filterTier.value,
            DOM.filterStatus ? DOM.filterStatus.value : 'ALL',
            DOM.searchInput ? DOM.searchInput.value : ''
          );
        });
      }

      if (DOM.filterStatus) {
        DOM.filterStatus.addEventListener('change', () => {
          StateStore.setFilters(
            DOM.filterTier ? DOM.filterTier.value : 'ALL',
            DOM.filterStatus.value,
            DOM.searchInput ? DOM.searchInput.value : ''
          );
        });
      }

      // View Mode Toggles
      if (DOM.btnGridMode && DOM.btnListMode) {
        DOM.btnGridMode.addEventListener('click', () => {
          StateStore.setViewMode('grid');
          DOM.btnGridMode.classList.add('active');
          DOM.btnListMode.classList.remove('active');
        });

        DOM.btnListMode.addEventListener('click', () => {
          StateStore.setViewMode('list');
          DOM.btnListMode.classList.add('active');
          DOM.btnGridMode.classList.remove('active');
        });
      }

      // Comparison Modal Trigger
      if (DOM.btnCompare) {
        DOM.btnCompare.addEventListener('click', () => ModalManager.openCompare());
      }

      // Shortcuts Help Trigger Button
      if (DOM.btnHelpShortcuts) {
        DOM.btnHelpShortcuts.addEventListener('click', () => ModalManager.openShortcuts());
      }

      // Export Buttons in Comparison Modal
      if (DOM.btnExportMd) {
        DOM.btnExportMd.addEventListener('click', async () => {
          const md = await ExportManager.exportMarkdown();
          if (md) {
            await ExportManager.copyText(md, DOM.btnExportMd, 'Markdown kopiert!');
          }
        });
      }

      if (DOM.btnExportCsv) {
        DOM.btnExportCsv.addEventListener('click', async () => {
          const csv = await ExportManager.exportCsv();
          if (csv) {
            ExportManager.downloadFile(csv, `IMV-Technologie-Vergleich-${new Date().toISOString().split('T')[0]}.csv`);
          }
        });
      }

      // Standalone Use Case Stack Markdown Export Button
      document.querySelectorAll('.btn-export-stack').forEach(btn => {
        btn.addEventListener('click', async () => {
          const slug = btn.getAttribute('data-uc-slug');
          const uc = StateStore.usecases.find(u => (u.slug || u.id.toLowerCase()) === slug);
          if (uc) {
            let md = `# Use Case Architektur-Stack: ${uc.title}\n\n`;
            md += `> **ID:** \`${uc.id}\` | **Investitionsklasse:** ${uc.tier} (${uc.costLabel || ''})\n\n`;
            md += `### Betrieblicher Nutzen:\n${uc.goal}\n\n`;
            md += `### 5-Schichten Architektur-Graph & Schnittstellen:\n\n`;
            md += `| Schicht | Modul / Technologie | RefCode | Aufgabe & Rolle im Ablauf | Schnittstelle / Datenübergang |\n`;
            md += `| :--- | :--- | :--- | :--- | :--- |\n`;
            (uc.flow || []).forEach(step => {
              const link = step.linkAnnotation ? `**${step.linkAnnotation.protocol}** (${step.linkAnnotation.description})` : 'Ziel-Endpunkt (Interaktion)';
              md += `| **Schicht ${step.layer}** | **${step.nodeName}** | \`${step.refCode || 'EXTERN'}\` | ${step.role} | ${link} |\n`;
            });
            md += `\n*Exportiert aus der ARENA2036 Industrial Metaverse Taxonomie.*\n`;
            await ExportManager.copyText(md, btn, 'Stack kopiert!');
          }
        });
      });

      // Modal Close Buttons
      if (DOM.btnCloseProfileModal && DOM.profileModal) {
        DOM.btnCloseProfileModal.addEventListener('click', () => {
          ModalManager.hide(DOM.profileModal);
          window.location.hash = '';
        });
      }

      if (DOM.btnCloseCompareModal && DOM.compareModal) {
        DOM.btnCloseCompareModal.addEventListener('click', () => ModalManager.hide(DOM.compareModal));
      }

      document.querySelectorAll('.btn-close, [data-bs-dismiss="modal"]').forEach(btn => {
        btn.addEventListener('click', () => {
          const modalEl = btn.closest('.modal');
          if (modalEl) {
            ModalManager.hide(modalEl);
            if (modalEl.id === 'profileModal') window.location.hash = '';
          }
        });
      });

      // Bulletproof Hamburger Dropdown Toggle
      document.querySelectorAll('#hamburgerBtn').forEach(btn => {
        btn.removeAttribute('data-bs-toggle'); // prevent duplicate toggles with Bootstrap
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const dropdownParent = btn.closest('.dropdown');
          const menu = dropdownParent ? dropdownParent.querySelector('.dropdown-menu') : btn.nextElementSibling;
          if (menu) {
            const isShown = menu.classList.contains('show');
            document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
            if (!isShown) {
              menu.classList.add('show');
            }
          }
        });
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
          document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
        }
      });
    },

    initUseCaseHub() {
      const ucSearchInput = document.getElementById('ucSearchInput');
      const ucSearchClearBtn = document.getElementById('ucSearchClearBtn');
      const ucFilterTier = document.getElementById('ucFilterTier');
      const btnUcGridMode = document.getElementById('btnUcGridMode');
      const btnUcListMode = document.getElementById('btnUcListMode');
      const ucGridView = document.getElementById('ucGridView');
      const ucListView = document.getElementById('ucListView');
      const ucStatusBar = document.getElementById('ucStatusBar');
      const ucCards = document.querySelectorAll('.uc-card-item');
      const ucRows = document.querySelectorAll('.uc-table-row');
      const ucChips = document.querySelectorAll('#ucChipsBar .layer-chip');

      if (!ucCards.length && !ucRows.length) return;

      let currentTier = 'ALL';
      let currentQuery = '';

      const filterUseCases = () => {
        let visibleCount = 0;
        const q = currentQuery.trim().toLowerCase();

        ucCards.forEach(card => {
          const tier = card.getAttribute('data-tier') || '';
          const text = card.getAttribute('data-text') || '';
          const matchesTier = (currentTier === 'ALL' || tier === currentTier);
          const matchesQuery = (q === '' || text.includes(q));

          if (matchesTier && matchesQuery) {
            card.style.display = 'block';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        ucRows.forEach(row => {
          const tier = row.getAttribute('data-tier') || '';
          const text = row.getAttribute('data-text') || '';
          const matchesTier = (currentTier === 'ALL' || tier === currentTier);
          const matchesQuery = (q === '' || text.includes(q));

          if (matchesTier && matchesQuery) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });

        // Update status indicators
        if (ucStatusBar) {
          ucStatusBar.innerHTML = `Zeige <strong>${visibleCount}</strong> Use Cases`;
        }

        // Sync dropdown
        if (ucFilterTier && ucFilterTier.value !== currentTier) {
          ucFilterTier.value = currentTier;
        }

        // Sync chips
        ucChips.forEach(chip => {
          const chipTier = chip.getAttribute('data-tier');
          if (chipTier === currentTier) {
            chip.classList.add('active');
          } else {
            chip.classList.remove('active');
          }
        });
      };

      // Search input handler
      if (ucSearchInput) {
        ucSearchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value;
          filterUseCases();
        });
      }

      if (ucSearchClearBtn && ucSearchInput) {
        ucSearchClearBtn.addEventListener('click', () => {
          ucSearchInput.value = '';
          currentQuery = '';
          filterUseCases();
          ucSearchInput.focus();
        });
      }

      // Tier select dropdown
      if (ucFilterTier) {
        ucFilterTier.addEventListener('change', (e) => {
          currentTier = e.target.value;
          filterUseCases();
        });
      }

      // Quick-filter chips
      ucChips.forEach(chip => {
        chip.addEventListener('click', () => {
          currentTier = chip.getAttribute('data-tier') || 'ALL';
          filterUseCases();
        });
      });

      // View mode toggles
      if (btnUcGridMode && btnUcListMode && ucGridView && ucListView) {
        btnUcGridMode.addEventListener('click', () => {
          btnUcGridMode.classList.add('active');
          btnUcListMode.classList.remove('active');
          ucGridView.classList.remove('d-none');
          ucListView.classList.add('d-none');
        });

        btnUcListMode.addEventListener('click', () => {
          btnUcListMode.classList.add('active');
          btnUcGridMode.classList.remove('active');
          ucListView.classList.remove('d-none');
          ucGridView.classList.add('d-none');
        });
      }
    },

    initUseCaseCarousel() {
      const container = document.getElementById('usecaseFlowContainer');
      if (!container) return;

      const stages = container.querySelectorAll('.graph-col-stage');
      if (!stages.length) return;

      const pills = document.querySelectorAll('#carouselLayerPills .usecase-layer-pill');
      const btnPrev = document.getElementById('btnCarouselPrev');
      const btnNext = document.getElementById('btnCarouselNext');
      const btnPlayPause = document.getElementById('btnCarouselPlayPause');

      let currentIndex = 0;
      let isPlaying = true;
      let autoTimer = null;
      let resumeTimer = null;
      const AUTO_INTERVAL_MS = 4000;
      const RESUME_DELAY_MS = 4500;

      const updateActiveStage = (index, smoothScroll = true) => {
        currentIndex = (index + stages.length) % stages.length;

        // Update active classes on stages
        stages.forEach((stage, idx) => {
          if (idx === currentIndex) {
            stage.classList.add('is-active-layer');
          } else {
            stage.classList.remove('is-active-layer');
          }
        });

        // Update layer pills
        pills.forEach((pill, idx) => {
          if (idx === currentIndex) {
            pill.classList.add('active');
          } else {
            pill.classList.remove('active');
          }
        });

        // Center the active stage inside the horizontal flow container
        if (smoothScroll) {
          const activeStage = stages[currentIndex];
          if (activeStage) {
            const containerWidth = container.clientWidth;
            const stageLeft = activeStage.offsetLeft;
            const stageWidth = activeStage.offsetWidth;
            const targetScrollLeft = stageLeft - (containerWidth / 2) + (stageWidth / 2);

            container.scrollTo({
              left: Math.max(0, targetScrollLeft),
              behavior: 'smooth'
            });
          }
        }
      };

      const startAutoPlay = () => {
        stopAutoPlay();
        if (!isPlaying) return;
        autoTimer = setInterval(() => {
          updateActiveStage(currentIndex + 1, true);
        }, AUTO_INTERVAL_MS);
      };

      const stopAutoPlay = () => {
        if (autoTimer) {
          clearInterval(autoTimer);
          autoTimer = null;
        }
      };

      const scheduleResume = () => {
        if (resumeTimer) clearTimeout(resumeTimer);
        if (!isPlaying) return;
        resumeTimer = setTimeout(() => {
          startAutoPlay();
        }, RESUME_DELAY_MS);
      };

      const pauseTemporarily = () => {
        stopAutoPlay();
        scheduleResume();
      };

      // Play/Pause button manual toggle
      if (btnPlayPause) {
        btnPlayPause.addEventListener('click', () => {
          isPlaying = !isPlaying;
          if (isPlaying) {
            btnPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i> Auto-Play';
            btnPlayPause.classList.add('is-playing');
            startAutoPlay();
          } else {
            btnPlayPause.innerHTML = '<i class="fa-solid fa-play"></i> Auto-Play';
            btnPlayPause.classList.remove('is-playing');
            stopAutoPlay();
            if (resumeTimer) clearTimeout(resumeTimer);
          }
        });
      }

      // Prev / Next arrow buttons
      if (btnPrev) {
        btnPrev.addEventListener('click', () => {
          pauseTemporarily();
          updateActiveStage(currentIndex - 1, true);
        });
      }

      if (btnNext) {
        btnNext.addEventListener('click', () => {
          pauseTemporarily();
          updateActiveStage(currentIndex + 1, true);
        });
      }

      // Layer pills click handlers
      pills.forEach((pill, idx) => {
        pill.addEventListener('click', () => {
          pauseTemporarily();
          updateActiveStage(idx, true);
        });
      });

      // Hover detection: pause when mouse enters container, resume on mouse leave
      container.addEventListener('mouseenter', () => {
        stopAutoPlay();
      });

      container.addEventListener('mouseleave', () => {
        scheduleResume();
      });

      // Touch detection: pause on touch start, resume after touch end
      container.addEventListener('touchstart', () => {
        stopAutoPlay();
      }, { passive: true });

      container.addEventListener('touchend', () => {
        scheduleResume();
      }, { passive: true });

      // Manual scroll detection: pause when user interacts via wheel
      container.addEventListener('wheel', () => {
        pauseTemporarily();
      }, { passive: true });

      // Synchronize active layer pill on manual user scroll
      let scrollSyncTimer = null;
      container.addEventListener('scroll', () => {
        if (!autoTimer) {
          if (scrollSyncTimer) clearTimeout(scrollSyncTimer);
          scrollSyncTimer = setTimeout(() => {
            const containerCenter = container.scrollLeft + (container.clientWidth / 2);
            let closestIndex = 0;
            let minDistance = Infinity;

            stages.forEach((stage, idx) => {
              const stageCenter = stage.offsetLeft + (stage.offsetWidth / 2);
              const distance = Math.abs(containerCenter - stageCenter);
              if (distance < minDistance) {
                minDistance = distance;
                closestIndex = idx;
              }
            });

            if (closestIndex !== currentIndex) {
              updateActiveStage(closestIndex, false);
            }
          }, 150);
        }
      }, { passive: true });

      // Initialize first active stage and start auto-play
      updateActiveStage(0, false);
      startAutoPlay();
    },

    render() {
      // Update KPIs
      if (DOM.kpiTotalTools) DOM.kpiTotalTools.textContent = StateStore.dbItems.length;
      if (DOM.kpiTotalUseCases) DOM.kpiTotalUseCases.textContent = StateStore.usecases.length;
      if (DOM.kpiTotalCategories) DOM.kpiTotalCategories.textContent = StateStore.categories.length;

      // Filter Data
      const filteredItems = FilterEngine.filterItems(StateStore.dbItems, StateStore);

      // Update Counts & Status Bar
      if (DOM.totalCountBadge) DOM.totalCountBadge.textContent = `${StateStore.dbItems.length} Elemente`;
      if (DOM.statusBar) DOM.statusBar.innerHTML = `Zeige <strong>${filteredItems.length}</strong> von ${StateStore.dbItems.length} auditierte Technologien im Index`;

      // Update Comparison Count
      if (DOM.compareCount) DOM.compareCount.textContent = StateStore.selectedCompareRefs.size;
      if (DOM.btnCompare) {
        DOM.btnCompare.style.display = StateStore.selectedCompareRefs.size > 0 ? 'inline-flex' : 'none';
      }

      // Render Sidebar
      if (DOM.categoryTree) {
        ViewRenderer.renderSidebar(DOM.categoryTree, StateStore);
      }

      // Render Layer Chips Active State
      if (DOM.layerChipsBar) {
        ViewRenderer.renderLayerChips(DOM.layerChipsBar, StateStore);
      }

      // Render Main Content
      if (DOM.itemsContainer) {
        if (filteredItems.length === 0) {
          DOM.itemsContainer.innerHTML = `
            <div class="text-center p-5 bg-white border rounded shadow-sm">
              <i class="fa-solid fa-triangle-exclamation text-primary display-4 mb-3"></i>
              <h2 class="h5 fw-bold text-dark">Keine Technologie-Profile gefunden</h2>
              <p class="text-muted small m-0">Bitte Suchbegriff anpassen oder Filter zurücksetzen (Taste <kbd class="search-kbd">0</kbd> drücken).</p>
            </div>
          `;
        } else if (StateStore.currentViewMode === 'grid') {
          ViewRenderer.renderGrid(filteredItems, DOM.itemsContainer, StateStore);
        } else {
          ViewRenderer.renderList(filteredItems, DOM.itemsContainer, StateStore);
        }
      }
    }
  };

  // Launch Application
  AppController.init();
});
