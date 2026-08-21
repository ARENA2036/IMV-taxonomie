/**
 * Use Case Static HTML Generator & Page Builder
 * ARENA2036 Reallabor 2.0 Project
 * 
 * Generates:
 * 1. Individual block-based HTML pages inside each use case directory (`usecases/[slug]/index.html`)
 *    using modular design system components from index.css.
 * 2. Consolidated single-page Use Cases hub page (`usecases/index.html`).
 * 
 * @module generate_usecase_pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const usecasesDir = path.join(rootDir, 'usecases');

/**
 * Builds individual Use Case HTML pages and the consolidated central hub page.
 * @param {Array<Object>} usecases - Array of parsed Use Case objects.
 * @param {Object} profilesMap - Map of canonical profile objects keyed by refCode.
 */
export function buildUseCasePages(usecases, profilesMap = {}) {
  if (!usecases || usecases.length === 0) return;

  console.log('Generiere vertikale 5-Schichten-Stack HTML-Seiten für Use Cases in usecases/*/index.html...');

  // 1. Generate individual block-based page for each Use Case inside its folder
  usecases.forEach(uc => {
    const slug = uc.slug || uc.id.toLowerCase();
    const ucFolder = path.join(usecasesDir, slug);

    if (!fs.existsSync(ucFolder)) {
      fs.mkdirSync(ucFolder, { recursive: true });
    }

    const htmlContent = renderSingleUseCasePage(uc, profilesMap);
    const htmlPath = path.join(ucFolder, 'index.html');
    fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
  });

  // 2. Generate consolidated central Use Cases hub page at usecases/index.html
  const hubHtmlContent = renderUseCaseHubPage(usecases);
  const hubPath = path.join(usecasesDir, 'index.html');
  fs.writeFileSync(hubPath, hubHtmlContent, 'utf-8');

  console.log(`Erfolgreich ${usecases.length} vertikale Use-Case-Einzelseiten und 'usecases/index.html' Hub generiert.`);
}

/**
 * Maps format/protocol string to semantic CSS class.
 * @param {string} tag
 * @returns {string}
 */
function getTagClass(tag) {
  const t = (tag || '').toLowerCase();
  if (t.includes('usd')) return 'tag-usd';
  if (t.includes('gltf') || t.includes('glb')) return 'tag-gltf';
  if (t.includes('step') || t.includes('iges') || t.includes('jt')) return 'tag-step';
  if (t.includes('aas') || t.includes('aasx')) return 'tag-aas';
  if (t.includes('opc') || t.includes('mqtt') || t.includes('profinet')) return 'tag-opcua';
  if (t.includes('edc') || t.includes('dataspace')) return 'tag-edc';
  if (t.includes('ros')) return 'tag-ros';
  return '';
}

/**
 * Returns tier CSS class for badges.
 * @param {string} tier
 * @returns {string}
 */
function getTierClass(tier) {
  if (tier === 'Tier 1') return 'tier-1';
  if (tier === 'Tier 2') return 'tier-2';
  return 'tier-3';
}

/**
 * Renders the exact Browser .card-item component for a flow node in the Use Case graph.
 * @param {Object} step - Flow step object.
 * @param {Object} profilesMap - Canonical profile lookup map.
 * @returns {string} HTML for the technology card.
 */
function renderBrowserCardForNode(step, profilesMap = {}) {
  const profile = step.refCode && profilesMap[step.refCode] ? profilesMap[step.refCode] : null;

  if (profile) {
    const tierClass = getTierClass(profile.tier);
    const inputs = (profile.inputs || []).slice(0, 2);
    const bridges = (profile.bridges || []).slice(0, 2);
    const inputTags = inputs.map(t => `<span class="tag ${getTagClass(t)}">${escapeHtml(t)}</span>`).join('');
    const bridgeTags = bridges.map(t => `<span class="tag tag-bridge ${getTagClass(t)}">${escapeHtml(t)}</span>`).join('');

    return `
      <div class="card-item" onclick="if(window.appOpenProfileModal){window.appOpenProfileModal('${escapeHtml(profile.refCode)}');}" style="cursor: pointer;">
        <div>
          <div class="card-header-bar">
            <span class="card-category">KAT ${escapeHtml(profile.categoryCode)}: ${escapeHtml(profile.categoryName)}</span>
            <span class="tier-badge ${tierClass}">${escapeHtml(profile.tier)}</span>
          </div>
          <h3 class="card-title">${escapeHtml(profile.name)}</h3>
          <div class="card-subtitle">${escapeHtml(profile.subtitle || '')}</div>
          <p class="card-overview">${escapeHtml(profile.overview || '')}</p>
          <div class="card-tags">
            ${inputTags}
            ${bridgeTags}
          </div>
        </div>

        <div class="card-footer">
          <div class="d-flex align-items-center gap-2">
            <span class="card-vendor"><i class="fa-solid fa-building me-1 text-muted"></i> ${escapeHtml(profile.vendor || 'Industrie-Standard')}</span>
          </div>
          <button type="button" class="btn btn-outline-primary btn-sm btn-inspect py-1 px-2" data-ref="${escapeHtml(profile.refCode)}" style="font-size: 11px;">
            Details →
          </button>
        </div>
      </div>
    `;
  }

  // Fallback for external systems (e.g. Jira, SAP PM) with identical Browser card component layout
  return `
    <div class="card-item" style="cursor: default;">
      <div>
        <div class="card-header-bar">
          <span class="card-category">SCHICHT ${step.layer}: IT &amp; ENTERPRISE</span>
          <span class="badge bg-secondary font-monospace" style="font-size: 10px;">EXTERN</span>
        </div>
        <h3 class="card-title">${escapeHtml(step.nodeName)}</h3>
        <div class="card-subtitle">Enterprise IT / Bestandsinfrastruktur</div>
        <p class="card-overview">Nahtlos über Standard-Schnittstellen (REST API, Webhook, OPC UA) angebundenes Subsystem zur Abbildung operativer Geschäftsprozesse.</p>
        <div class="card-tags">
          <span class="tag tag-opcua">REST API</span>
          <span class="tag tag-bridge">Webhook</span>
        </div>
      </div>

      <div class="card-footer">
        <div class="d-flex align-items-center gap-2">
          <span class="card-vendor"><i class="fa-solid fa-server me-1 text-muted"></i> Enterprise IT</span>
        </div>
        <span class="badge bg-light text-muted border font-monospace" style="font-size: 10px;">
          Bestandssystem
        </span>
      </div>
    </div>
  `;
}

/**
 * Renders a single Use Case standalone HTML page using a 7-Block UI layout with modular CSS components.
 * @param {Object} uc - The Use Case object.
 * @param {Object} profilesMap - Canonical profile lookup map.
 * @returns {string} The complete HTML document string.
 */
function renderSingleUseCasePage(uc, profilesMap = {}) {
  const slug = uc.slug || uc.id.toLowerCase();
  const title = uc.title || uc.id;
  const subtitle = uc.subtitle || '';
  const tier = uc.tier || 'Tier 1';
  const tierLabel = uc.tierLabel || tier;
  const shortDesc = uc.shortDesc || '';
  const goal = uc.goal || '';
  const ext = uc.extendedDoc || {};
  const kpis = uc.kpis || [];
  const media = uc.media || {};
  const flow = uc.flow || [];

  const yt = media.youtube || null;
  const gallery = media.gallery || [];

  // BLOCK 2: Key Metrics & KPIs Grid HTML
  const kpisBlockHtml = kpis.length > 0 ? `
    <!-- BLOCK 2: Key Metrics & KPIs Block -->
    <section class="card border-0 shadow-sm p-4 mb-4 bg-white">
      <h2 class="h6 fw-bold text-dark mb-3">
        <i class="fa-solid fa-chart-pie text-primary me-2"></i>1. Leistungsindikatoren &amp; Messwerte (KPIs)
      </h2>
      <div class="row g-3">
        ${kpis.map(kpi => `
          <div class="col-md-4">
            <div class="usecase-kpi-card">
              <div class="usecase-kpi-val">${escapeHtml(kpi.value)}</div>
              <div class="usecase-kpi-lbl">${escapeHtml(kpi.label)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  // BLOCK 3: Horizontal 5-Layer Architecture Flow Carousel (Layer 1 left -> Layer 5 right)
  const flowColumnsHtml = flow.map((step, idx) => {
    const cardHtml = renderBrowserCardForNode(step, profilesMap);
    const isLast = idx === flow.length - 1;
    const isActive = idx === 0;

    const arrowHtml = !isLast ? `
      <div class="graph-flow-arrow" title="Datenfluss zu Schicht ${parseInt(step.layer, 10) + 1}">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    ` : '';

    return `
      <div class="graph-col-stage ${isActive ? 'is-active-layer' : ''}" data-layer="${step.layer}" data-index="${idx}" style="border-top: 3px solid var(--color-layer-${step.layer});">
        <div class="graph-col-header">
          <span class="graph-col-badge" style="background-color: var(--color-layer-${step.layer});">
            SCHICHT ${step.layer}
          </span>
          <span class="graph-col-title" title="${escapeHtml(step.layerTitle)}">
            ${escapeHtml(step.layerTitle.replace(/^Schicht\s*\d+\s*:\s*/i, ''))}
          </span>
        </div>

        <div class="graph-col-role">
          <div>
            <div class="graph-col-role-label">
              <i class="fa-solid fa-crosshairs me-1"></i> Rolle &amp; Systemaufgabe:
            </div>
            <div>${escapeHtml(step.role)}</div>
          </div>
        </div>

        <div class="graph-col-component">
          ${cardHtml}
        </div>
      </div>
      ${arrowHtml}
    `;
  }).join('');

  const techBlockHtml = `
    <!-- BLOCK 3: Horizontal 5-Layer Architecture Flow Carousel -->
    <section class="card border-0 shadow-sm p-4 mb-4 bg-white" id="useCaseArchitectureSection">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <div>
          <h2 class="h6 fw-bold text-dark m-0">
            <i class="fa-solid fa-diagram-project text-primary me-2"></i>2. 5-Schichten Architektur-Ablauf &amp; Integration
          </h2>
          <p class="text-muted small m-0 mt-1">
            Strukturierter Daten- und Komponentenfluss von der Erfassung &amp; Sensorik (links) bis zur Immersion (rechts). In jeder Schicht sind die konkrete Rolle (oben) und die eingesetzte Technologie-Komponente (unten) zugeordnet.
          </p>
        </div>
        
        <div class="usecase-carousel-toolbar">
          <div class="usecase-carousel-nav" id="usecaseCarouselNav">
            <button type="button" class="btn btn-outline-secondary btn-sm" id="btnCarouselPrev" title="Vorherige Schicht">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="d-flex align-items-center gap-1" id="carouselLayerPills">
              ${flow.map((step, idx) => `
                <button type="button" class="usecase-layer-pill ${idx === 0 ? 'active' : ''}" data-layer="${step.layer}" data-index="${idx}" title="${escapeHtml(step.layerTitle)}">
                  S${step.layer}
                </button>
              `).join('')}
            </div>
            <button type="button" class="btn btn-outline-secondary btn-sm" id="btnCarouselNext" title="Nächste Schicht">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <button type="button" class="btn btn-outline-secondary btn-sm btn-carousel-control is-playing" id="btnCarouselPlayPause" title="Auto-Play pausieren / starten">
            <i class="fa-solid fa-pause"></i> Auto-Play
          </button>

          <button type="button" class="btn btn-outline-secondary btn-sm btn-export-stack" data-uc-slug="${escapeHtml(slug)}">
            <i class="fa-solid fa-file-lines me-1"></i> Stack als Markdown kopieren
          </button>
        </div>
      </div>
      
      <div class="usecase-horizontal-flow has-active-focus" id="usecaseFlowContainer">
        ${flowColumnsHtml}
      </div>
    </section>
  `;

  // BLOCK 4: Extended Description, Highlights & Prerequisites HTML
  const highlightsListHtml = (ext.keyHighlights || []).map(item => `
    <li class="mb-2">
      <i class="fa-solid fa-circle-check text-primary me-2"></i>${escapeHtml(item)}
    </li>
  `).join('');

  const prereqsListHtml = (ext.prerequisites || []).map(item => `
    <li class="mb-2">
      <i class="fa-solid fa-screwdriver-wrench text-secondary me-2"></i>${escapeHtml(item)}
    </li>
  `).join('');

  const overviewBlockHtml = `
    <!-- BLOCK 4: Overview & Extended Description Block -->
    <section class="card border-0 shadow-sm p-4 mb-4 bg-white">
      <h2 class="h6 fw-bold text-dark mb-3">
        <i class="fa-solid fa-align-left text-primary me-2"></i>3. Szenario-Beschreibung &amp; Systemkontext
      </h2>
      <p class="text-secondary leading-relaxed mb-4">${escapeHtml(ext.overview || shortDesc)}</p>
      
      <div class="row g-3">
        ${highlightsListHtml ? `
          <div class="col-md-6">
            <div class="p-3 rounded bg-light border h-100">
              <div class="fw-bold small text-dark mb-2 uppercase font-monospace">Kernvorteile im Betrieb:</div>
              <ul class="list-unstyled mb-0 small text-secondary">${highlightsListHtml}</ul>
            </div>
          </div>
        ` : ''}

        ${prereqsListHtml ? `
          <div class="col-md-6">
            <div class="p-3 rounded bg-light border h-100">
              <div class="fw-bold small text-dark mb-2 uppercase font-monospace">Erforderliche Infrastruktur:</div>
              <ul class="list-unstyled mb-0 small text-secondary">${prereqsListHtml}</ul>
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;

  // BLOCK 5: Media & Rich Content Block (YouTube & Image Gallery)
  const ytHtml = yt && yt.id ? `
    <div class="mb-4">
      <h3 class="h6 fw-bold text-dark mb-3"><i class="fa-brands fa-youtube text-danger me-2"></i>${escapeHtml(yt.title || 'Video-Demonstration')}</h3>
      <div class="ratio ratio-16x9 rounded shadow-sm overflow-hidden mb-2">
        <iframe src="https://www.youtube-nocookie.com/embed/${escapeHtml(yt.id)}" title="${escapeHtml(yt.title || 'YouTube Video')}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      ${yt.caption ? `<p class="text-muted small italic m-0"><i class="fa-solid fa-circle-info me-1"></i>${escapeHtml(yt.caption)}</p>` : ''}
    </div>
  ` : '';

  const galleryHtml = gallery.length > 0 ? `
    <div>
      <h3 class="h6 fw-bold text-dark mb-3"><i class="fa-solid fa-images text-primary me-2"></i>Bildergalerie &amp; Visualisierung</h3>
      <div class="row g-3">
        ${gallery.map(img => `
          <div class="col-md-6">
            <div class="card border-0 shadow-sm overflow-hidden h-100">
              <img src="${escapeHtml(img.url)}" alt="${escapeHtml(img.alt || img.caption)}" class="card-img-top" style="max-height: 260px; object-fit: cover;">
              ${img.caption ? `<div class="card-body p-2 bg-light"><p class="card-text small text-secondary m-0">${escapeHtml(img.caption)}</p></div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const mediaBlockHtml = (ytHtml || galleryHtml) ? `
    <!-- BLOCK 5: Media & Rich Content Block -->
    <section class="card border-0 shadow-sm p-4 mb-4 bg-white">
      <h2 class="h6 fw-bold text-dark mb-3">
        <i class="fa-solid fa-photo-film text-primary me-2"></i>4. Demonstration &amp; Medien-Dokumentation
      </h2>
      ${ytHtml}
      ${galleryHtml}
    </section>
  ` : '';

  // BLOCK 6: Operational Benefit Callout Block
  const benefitBlockHtml = `
    <!-- BLOCK 6: Operational Benefit Callout Block -->
    <section class="app-highlight-box mb-4">
      <h2 class="h6 fw-bold text-dark mb-2">
        <i class="fa-solid fa-chart-line text-primary me-2"></i>5. Betriebliches Nutzenpotenzial &amp; ROI
      </h2>
      <p class="small text-secondary m-0">${escapeHtml(goal)}</p>
    </section>
  `;

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- OpenGraph & Social Media -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(title)} | Industrial Metaverse Taxonomie">
  <meta property="og:description" content="${escapeHtml(shortDesc)}">
  <meta property="og:image" content="https://arena2036.github.io/IMV-taxonomie/assets/ARENA2036_combinationmark_orange_black.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)} | Industrial Metaverse Taxonomie">
  <meta name="twitter:description" content="${escapeHtml(shortDesc)}">
  <meta name="twitter:image" content="https://arena2036.github.io/IMV-taxonomie/assets/ARENA2036_combinationmark_orange_black.png">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "${escapeHtml(title)}",
    "description": "${escapeHtml(shortDesc)}",
    "author": {
      "@type": "Organization",
      "name": "ARENA2036 Reallabor 2.0"
    }
  }
  </script>

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="../../assets/favicon-icon.svg">
  <link rel="alternate icon" type="image/png" href="../../assets/ARENA2036_combinationmark_orange_black.png">
  
  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../../index.css">
</head>
<body class="bg-light text-dark min-vh-100 d-flex flex-column">

  <!-- Header Navigation Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-3 flex-shrink-0">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      
      <!-- Brand Logo -->
      <div class="d-flex align-items-center">
        <a class="navbar-brand d-flex align-items-center gap-2 m-0" href="../../index.html">
          <img src="../../assets/Metaverse Logo bunt.svg" alt="Industrial Metaverse Logo" class="logo-img" title="Industrial Metaverse">
        </a>
      </div>

      <!-- Center Title -->
      <div class="text-center flex-grow-1 px-2">
        <span class="fw-black text-dark fs-6 d-none d-md-inline-block text-truncate" style="max-width: 90%;">
          Use Case: ${escapeHtml(title)}
        </span>
      </div>

      <!-- Hamburger Menu -->
      <div class="d-flex align-items-center justify-content-end">
        <div class="dropdown">
          <button class="btn btn-light btn-sm border" id="hamburgerBtn" type="button" aria-expanded="false" title="Menü">
            <i class="fa-solid fa-bars"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm">
            <li><a class="dropdown-item" href="../../index.html"><i class="fa-solid fa-house text-muted me-2"></i>Startseite</a></li>
            <li><a class="dropdown-item" href="../../guide.html"><i class="fa-solid fa-compass text-muted me-2"></i>Einstiegsleitfaden</a></li>
            <li><a class="dropdown-item" href="../../browser.html"><i class="fa-solid fa-layer-group text-muted me-2"></i>Taxonomie Browser</a></li>
            <li><a class="dropdown-item active bg-primary" href="../index.html"><i class="fa-solid fa-sitemap me-2"></i>Use Cases Hub</a></li>
            <li><a class="dropdown-item" href="../../architecture.html"><i class="fa-solid fa-diagram-project text-muted me-2"></i>Architektur Spezifikation</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="../../impressum.html"><i class="fa-solid fa-scale-balanced text-muted me-2"></i>Impressum &amp; Rechtliches</a></li>
          </ul>
        </div>
      </div>

    </div>
  </nav>

  <!-- Main Content Container -->
  <main class="container py-4 flex-grow-1" style="max-width: 1300px;">
    
    <!-- BLOCK 1: Hero & Strategic Header Block -->
    <header class="app-hero-card mb-4">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <div class="d-flex align-items-center gap-2">
          <span class="badge bg-primary text-white font-monospace fs-6 px-3 py-1">${escapeHtml(uc.id)}</span>
          <span class="badge bg-light text-dark border font-monospace fs-6 px-3 py-1">${escapeHtml(tierLabel)}</span>
        </div>
        <a href="../index.html" class="btn btn-outline-secondary btn-sm">
          <i class="fa-solid fa-arrow-left me-1"></i> Zurück zum Use Cases Hub
        </a>
      </div>

      <h1 class="h3 fw-black text-dark mb-2">${escapeHtml(title)}</h1>
      ${subtitle ? `<p class="lead text-primary fw-bold fs-6 mb-3">${escapeHtml(subtitle)}</p>` : ''}
      <p class="text-secondary m-0">${escapeHtml(shortDesc)}</p>
    </header>

    ${kpisBlockHtml}
    ${techBlockHtml}
    ${overviewBlockHtml}
    ${mediaBlockHtml}
    ${benefitBlockHtml}

    <!-- BLOCK 7: Action & Navigation Footer Block -->
    <footer class="card border-0 shadow-sm p-4 bg-white">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
        <a href="../index.html" class="btn btn-outline-secondary btn-sm">
          <i class="fa-solid fa-arrow-left me-1"></i> Zurück zur Übersicht aller Use Cases
        </a>
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-outline-secondary btn-sm btn-export-stack" data-uc-slug="${escapeHtml(slug)}">
            <i class="fa-solid fa-file-lines me-1"></i> Stack als Markdown kopieren
          </button>
          <a href="./usecase.json" target="_blank" class="btn btn-outline-primary btn-sm">
            <i class="fa-solid fa-code me-1"></i> JSON Quelltext
          </a>
        </div>
      </div>
    </footer>

  </main>

  <!-- Profile Detail Inspector Modal -->
  <div class="modal fade" id="profileModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold" id="modalProfileTitle"><i class="fa-solid fa-cube text-primary me-2"></i>Technologie-Profil Details</h5>
          <button type="button" class="btn-close" id="btnCloseProfileModal" data-bs-dismiss="modal" aria-label="Schließen"></button>
        </div>
        <div class="modal-body" id="modalProfileBody">
          <!-- Dynamisch gerendert via app.js -->
        </div>
        <div class="modal-footer justify-content-between">
          <span class="small text-muted">ARENA2036 Industrial Metaverse Taxonomy</span>
          <a id="modalDirectJsonLink" href="#" target="_blank" class="btn btn-outline-secondary btn-sm">
            <i class="fa-solid fa-code me-1"></i> JSON Quelltext
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Site Footer -->
  <footer class="py-3 text-center small text-muted border-top bg-white">
    ARENA2036 Industrial Metaverse Taxonomy | 
    <a href="../index.html" class="text-muted text-decoration-none font-weight-bold">Use Cases Hub</a> | 
    <a href="../../browser.html" class="text-muted text-decoration-none font-weight-bold">Browser</a> | 
    <a href="../../architecture.html" class="text-muted text-decoration-none font-weight-bold">Architektur</a> | 
    <a href="../../impressum.html" class="text-muted text-decoration-none font-weight-bold">Impressum</a>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../../data/index_data.js"></script>
  <script src="../../app.js"></script>
</body>
</html>`;
}

/**
 * Renders the dedicated Use Cases Hub page at usecases/index.html.
 * @param {Array<Object>} usecases - Array of all Use Case objects.
 * @returns {string} The complete HTML document string.
 */
function renderUseCaseHubPage(usecases) {
  const cardsHtml = usecases.map(uc => {
    const slug = uc.slug || uc.id.toLowerCase();
    const title = uc.title || uc.id;
    const tier = uc.tier || 'Tier 1';
    const tierLabel = uc.tierLabel || tier;
    const shortDesc = uc.shortDesc || '';
    const goal = uc.goal || '';
    const kpis = uc.kpis || [];
    const flow = uc.flow || [];

    const miniSequenceChips = flow.map(step => `
      <span class="usecase-mini-chip" title="Schicht ${step.layer}: ${escapeHtml(step.nodeName)}">
        <span class="badge" style="background-color: var(--color-layer-${step.layer}); color: white; font-size: 8px; padding: 2px 4px;">S${step.layer}</span>
        ${escapeHtml(step.nodeName)}
      </span>
    `).join('');

    const kpiChips = kpis.map(k => `
      <span class="badge bg-primary-subtle text-primary border border-primary-subtle font-monospace" style="font-size: 10px;">
        ${escapeHtml(k.label)}: ${escapeHtml(k.value)}
      </span>
    `).join('');

    return `
      <div class="col-lg-6 col-12 mb-3 uc-card-item" data-tier="${escapeHtml(tier)}" data-text="${escapeHtml((title + ' ' + shortDesc + ' ' + goal + ' ' + (uc.flow || []).map(f => f.nodeName).join(' ')).toLowerCase())}">
        <div class="usecase-card-item">
          <div>
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
              <div class="d-flex align-items-center gap-2">
                <span class="badge bg-primary text-white font-monospace">${escapeHtml(uc.id)}</span>
                <span class="badge bg-light text-dark border font-monospace">${escapeHtml(tierLabel)}</span>
              </div>
              <a href="./${escapeHtml(slug)}/index.html" class="btn btn-outline-primary btn-sm py-1 px-2 fw-bold" style="font-size: 11px;">
                Architektur &amp; Ablauf →
              </a>
            </div>

            <h3 class="h6 fw-bold text-dark mb-1">${escapeHtml(title)}</h3>
            <p class="text-secondary small mb-2">${escapeHtml(shortDesc)}</p>

            <div class="usecase-mini-sequence">
              ${miniSequenceChips}
            </div>

            ${kpiChips ? `<div class="d-flex gap-1 flex-wrap mb-2">${kpiChips}</div>` : ''}
          </div>

          <div class="p-2 rounded bg-light border-start border-3 border-primary small text-secondary mt-2">
            <strong class="text-primary me-1"><i class="fa-solid fa-bullseye"></i> Ziel:</strong> ${escapeHtml(goal)}
          </div>
        </div>
      </div>
    `;
  }).join('');

  const listRowsHtml = usecases.map(uc => {
    const slug = uc.slug || uc.id.toLowerCase();
    const title = uc.title || uc.id;
    const tier = uc.tier || 'Tier 1';
    const flow = uc.flow || [];

    const flowSummary = flow.map(f => `S${f.layer}: ${f.nodeName}`).join(' ➔ ');

    return `
      <tr class="uc-table-row" data-tier="${escapeHtml(tier)}" data-text="${escapeHtml((title + ' ' + uc.shortDesc + ' ' + uc.goal).toLowerCase())}">
        <td class="font-monospace fw-bold text-primary">${escapeHtml(uc.id)}</td>
        <td>
          <a href="./${escapeHtml(slug)}/index.html" class="fw-bold text-dark text-decoration-none">
            ${escapeHtml(title)}
          </a>
          <div class="text-muted small">${escapeHtml(uc.shortDesc)}</div>
        </td>
        <td><span class="badge bg-light text-dark border font-monospace">${escapeHtml(tier)}</span></td>
        <td class="small text-secondary font-monospace" style="max-width: 320px; white-space: normal;">
          ${escapeHtml(flowSummary)}
        </td>
        <td class="text-end">
          <a href="./${escapeHtml(slug)}/index.html" class="btn btn-outline-primary btn-sm py-1 px-2" style="font-size: 11px;">
            Öffnen →
          </a>
        </td>
      </tr>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Use Cases Hub | Industrial Metaverse Taxonomie</title>
  <meta name="description" content="Konsolidierter Use Cases Hub der Industrial Metaverse Technologie-Taxonomie.">
  
  <!-- OpenGraph & Social Media -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Use Cases Hub | Industrial Metaverse Taxonomie">
  <meta property="og:description" content="Konsolidierter Use Cases Hub der Industrial Metaverse Technologie-Taxonomie.">
  <meta property="og:image" content="https://arena2036.github.io/IMV-taxonomie/assets/ARENA2036_combinationmark_orange_black.png">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Use Cases Hub | Industrial Metaverse Taxonomie",
    "url": "https://arena2036.github.io/IMV-taxonomie/usecases/"
  }
  </script>

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="../assets/favicon-icon.svg">
  <link rel="alternate icon" type="image/png" href="../assets/ARENA2036_combinationmark_orange_black.png">
  
  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../index.css">
</head>
<body class="bg-light text-dark min-vh-100 d-flex flex-column">

  <!-- Top Navigation Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-3 flex-shrink-0">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      
      <!-- Brand Logo -->
      <div class="d-flex align-items-center">
        <a class="navbar-brand d-flex align-items-center gap-2 m-0" href="../index.html">
          <img src="../assets/Metaverse Logo bunt.svg" alt="Industrial Metaverse Logo" class="logo-img" title="Industrial Metaverse">
        </a>
      </div>

      <!-- Center Title -->
      <div class="text-center flex-grow-1 px-2">
        <span class="fw-black text-dark fs-6 d-none d-md-inline-block">
          Use Cases Hub
        </span>
      </div>

      <!-- Hamburger Menu -->
      <div class="d-flex align-items-center justify-content-end">
        <div class="dropdown">
          <button class="btn btn-light btn-sm border" id="hamburgerBtn" type="button" aria-expanded="false" title="Menü">
            <i class="fa-solid fa-bars"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm">
            <li><a class="dropdown-item" href="../index.html"><i class="fa-solid fa-house text-muted me-2"></i>Startseite</a></li>
            <li><a class="dropdown-item" href="../guide.html"><i class="fa-solid fa-compass text-muted me-2"></i>Einstiegsleitfaden</a></li>
            <li><a class="dropdown-item" href="../browser.html"><i class="fa-solid fa-layer-group text-muted me-2"></i>Taxonomie Browser</a></li>
            <li><a class="dropdown-item active bg-primary" href="./index.html"><i class="fa-solid fa-sitemap me-2"></i>Use Cases Hub</a></li>
            <li><a class="dropdown-item" href="../architecture.html"><i class="fa-solid fa-diagram-project text-muted me-2"></i>Architektur Spezifikation</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="../impressum.html"><i class="fa-solid fa-scale-balanced text-muted me-2"></i>Impressum &amp; Rechtliches</a></li>
          </ul>
        </div>
      </div>

    </div>
  </nav>

  <!-- Main Content Container -->
  <main class="container py-4 flex-grow-1" style="max-width: 1200px;">
    
    <!-- Hero Canvas Header -->
    <div class="card shadow-sm border-0 mb-4 bg-white p-4 p-md-5">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div>
          <span class="badge bg-primary text-white font-monospace mb-2">USE CASES HUB</span>
          <h1 class="h3 fw-black text-dark m-0 mb-2">Use Cases Hub</h1>
          <p class="text-secondary small m-0" style="max-width: 850px;">
            Konsolidierter Hub für alle ${usecases.length} auditierte Industrial Metaverse Referenz-Architekturen. Erforschen Sie das Zusammenspiel aller 5 Schichten von der Erfassung bis zur Immersion, unterteilt in transparente Investitionsklassen.
          </p>
        </div>
        <a href="https://github.com/ARENA2036/IMV-taxonomie/pulls" target="_blank" class="btn btn-outline-dark btn-sm px-3">
          <i class="fa-brands fa-github me-1"></i> Use Case einreichen
        </a>
      </div>
    </div>

    <!-- Filter & Toolbar Card -->
    <div class="card shadow-sm border-0 mb-4 bg-white p-3">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
        <!-- Live Search Input -->
        <div class="input-group input-group-sm flex-grow-1" style="max-width: 450px;">
          <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-magnifying-glass text-muted"></i></span>
          <input type="text" id="ucSearchInput" class="form-control border-start-0 border-end-0" placeholder="Use Case, Technologie oder Ziel suchen..." autocomplete="off">
          <button class="btn btn-outline-secondary" type="button" id="ucSearchClearBtn" title="Zurücksetzen"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <!-- View Mode Toggle -->
        <div class="d-flex align-items-center gap-2">
          <div class="btn-group btn-group-sm" role="group">
            <button type="button" class="btn btn-outline-secondary active" id="btnUcGridMode" title="Rasteransicht"><i class="fa-solid fa-border-all"></i> Raster</button>
            <button type="button" class="btn btn-outline-secondary" id="btnUcListMode" title="Listenansicht"><i class="fa-solid fa-list"></i> Liste</button>
          </div>
        </div>
      </div>

      <!-- Horizontal Tier Category Chips Bar -->
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 pt-2 border-top">
        <div class="layer-chips-container" id="ucChipsBar">
          <button class="layer-chip active" data-tier="ALL"><i class="fa-solid fa-layer-group me-1"></i> Alle Use Cases (${usecases.length})</button>
          <button class="layer-chip" data-tier="Tier 1"><i class="fa-solid fa-seedling text-success me-1"></i> Tier 1: Starter (≤ €30k)</button>
          <button class="layer-chip" data-tier="Tier 2"><i class="fa-solid fa-cubes text-primary me-1"></i> Tier 2: Modular (≤ €100k)</button>
          <button class="layer-chip" data-tier="Tier 3"><i class="fa-solid fa-building text-warning me-1"></i> Tier 3: OEM (> €100k)</button>
        </div>
        <div class="small text-muted" id="ucStatusBar">
          Zeige <strong>${usecases.length}</strong> Use Cases
        </div>
      </div>
    </div>

    <!-- Main Content Container: Grid & List -->
    <div id="ucGridView" class="row">
      ${cardsHtml}
    </div>

    <div id="ucListView" class="bg-white rounded border shadow-sm d-none mb-4">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="table-light small text-uppercase">
            <tr>
              <th style="width: 100px;">ID</th>
              <th>Use Case Titel &amp; Kurzbeschreibung</th>
              <th style="width: 120px;">Tier</th>
              <th>5-Schichten Ablauf-Stack</th>
              <th style="width: 110px;" class="text-end">Aktion</th>
            </tr>
          </thead>
          <tbody>
            ${listRowsHtml}
          </tbody>
        </table>
      </div>
    </div>

  </main>

  <!-- Site Footer -->
  <footer class="py-3 text-center small text-muted border-top bg-white">
    ARENA2036 Industrial Metaverse Taxonomy | 
    <a href="../index.html" class="text-muted text-decoration-none font-weight-bold">Startseite</a> | 
    <a href="./index.html" class="text-muted text-decoration-none font-weight-bold">Use Cases Hub</a> | 
    <a href="../browser.html" class="text-muted text-decoration-none font-weight-bold">Browser</a> | 
    <a href="../architecture.html" class="text-muted text-decoration-none font-weight-bold">Architektur</a> | 
    <a href="../impressum.html" class="text-muted text-decoration-none font-weight-bold">Impressum</a>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../data/index_data.js"></script>
  <script src="../app.js"></script>
</body>
</html>`;
}

/**
 * Escapes HTML characters for security.
 * @param {string} str 
 * @returns {string}
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
