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
 */
export function buildUseCasePages(usecases) {
  if (!usecases || usecases.length === 0) return;

  console.log('Generiere vertikale 5-Schichten-Stack HTML-Seiten für Use Cases in usecases/*/index.html...');

  // 1. Generate individual block-based page for each Use Case inside its folder
  usecases.forEach(uc => {
    const slug = uc.slug || uc.id.toLowerCase();
    const ucFolder = path.join(usecasesDir, slug);

    if (!fs.existsSync(ucFolder)) {
      fs.mkdirSync(ucFolder, { recursive: true });
    }

    const htmlContent = renderSingleUseCasePage(uc);
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
 * Renders a single Use Case standalone HTML page using a 7-Block UI layout with modular CSS components.
 * @param {Object} uc - The Use Case object.
 * @returns {string} The complete HTML document string.
 */
function renderSingleUseCasePage(uc) {
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

  // BLOCK 3: Extended Description, Highlights & Prerequisites HTML
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
    <!-- BLOCK 3: Overview & Extended Description Block -->
    <section class="card border-0 shadow-sm p-4 mb-4 bg-white">
      <h2 class="h6 fw-bold text-dark mb-3">
        <i class="fa-solid fa-align-left text-primary me-2"></i>2. Szenario-Beschreibung &amp; Systemkontext
      </h2>
      ${ext.overview ? `<p class="text-secondary small leading-relaxed mb-4">${escapeHtml(ext.overview)}</p>` : ''}
      
      <div class="row g-4">
        ${highlightsListHtml ? `
          <div class="col-md-6">
            <div class="p-3 bg-light rounded border h-100">
              <h3 class="h6 fw-bold text-dark mb-3"><i class="fa-solid fa-star text-primary me-2"></i>Kern-Vorteile &amp; Nutzen</h3>
              <ul class="list-unstyled small text-secondary m-0 ps-0">
                ${highlightsListHtml}
              </ul>
            </div>
          </div>
        ` : ''}
        
        ${prereqsListHtml ? `
          <div class="col-md-6">
            <div class="p-3 bg-light rounded border h-100">
              <h3 class="h6 fw-bold text-dark mb-3"><i class="fa-solid fa-list-check text-primary me-2"></i>Voraussetzungen &amp; Tools</h3>
              <ul class="list-unstyled small text-secondary m-0 ps-0">
                ${prereqsListHtml}
              </ul>
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;

  // BLOCK 4: Media & Rich Content Block (YouTube & Image Gallery)
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
    <!-- BLOCK 4: Media & Rich Content Block -->
    <section class="card border-0 shadow-sm p-4 mb-4 bg-white">
      <h2 class="h6 fw-bold text-dark mb-3">
        <i class="fa-solid fa-photo-film text-primary me-2"></i>3. Demonstration &amp; Medien-Dokumentation
      </h2>
      ${ytHtml}
      ${galleryHtml}
    </section>
  ` : '';

  // BLOCK 5: Technical Specifications & 5-Layer Vertical Dual-Column Stack
  const flowRowsHtml = flow.map(step => `
    <div class="usecase-stack-row">
      <div class="row g-3 align-items-center">
        
        <!-- Left Column: Tool/Product Name, RefCode & Detail Inspector Trigger -->
        <div class="col-md-5">
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="badge bg-primary text-white font-monospace px-2 py-1">SCHICHT ${step.layer}</span>
            <span class="fw-bold text-muted uppercase font-monospace small">${escapeHtml(step.layerTitle)}</span>
          </div>

          <h3 class="h6 fw-black text-dark mb-2">${escapeHtml(step.nodeName)}</h3>

          <div class="d-flex align-items-center gap-2 flex-wrap">
            ${step.refCode ? `
              <span class="badge bg-light text-dark border font-monospace">${escapeHtml(step.refCode)}</span>
              <button type="button" class="btn btn-outline-primary btn-sm py-1 px-2 btn-inspect" data-ref="${escapeHtml(step.refCode)}" onclick="if(window.appOpenProfileModal){window.appOpenProfileModal('${escapeHtml(step.refCode)}');}">
                <i class="fa-solid fa-eye me-1"></i> Details anzeigen →
              </button>
            ` : `
              <span class="badge bg-light text-muted border font-monospace">EXTERN / IT SYSTEM</span>
            `}
          </div>
        </div>

        <!-- Right Column: Parallel Layer Function & Task Description -->
        <div class="col-md-7">
          <div class="usecase-stack-right">
            <div class="usecase-stack-label"><i class="fa-solid fa-gear text-primary me-1"></i> Aufgabe &amp; Funktion auf Schicht ${step.layer}:</div>
            <p class="text-secondary small m-0 leading-relaxed">${escapeHtml(step.role)}</p>
          </div>
        </div>

      </div>
    </div>
  `).join('');

  const techBlockHtml = `
    <!-- BLOCK 5: Technical Specifications & 5-Layer Vertical Dual-Column Stack Block -->
    <section class="card border-0 shadow-sm p-4 mb-4 bg-white">
      <h2 class="h6 fw-bold text-dark mb-2">
        <i class="fa-solid fa-layer-group text-primary me-2"></i>4. Vertikaler 5-Schichten Architekturbauplan
      </h2>
      <p class="text-muted small mb-4">
        Parallele Übersicht der eingesetzten Werkzeuge (links) und ihrer konkreten Funktion auf der jeweiligen Ebene (rechts). Klicken Sie auf <strong>"Details anzeigen →"</strong>, um den vollständigen Technologie-Inspector im Browser zu öffnen:
      </p>
      
      <div class="vertical-architecture-stack">
        ${flowRowsHtml}
      </div>
    </section>
  `;

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
      
      <div class="d-flex align-items-center" style="min-width: 180px;">
        <a class="navbar-brand d-flex align-items-center gap-2 m-0" href="../../index.html">
          <img src="../../assets/Metaverse Logo bunt.svg" alt="Industrial Metaverse Logo" class="logo-img" title="Industrial Metaverse">
          <div class="logo-divider"></div>
          <img src="../../assets/BaWue_WM_Absenderlogo_rgb_pos_Gefoerdert.svg" alt="Gefördert durch Baden-Württemberg" class="logo-img" title="Ministerium BW">
        </a>
      </div>

      <div class="text-center flex-grow-1 px-2">
        <span class="fw-black text-dark fs-6 d-none d-md-inline-block text-truncate" style="max-width: 90%;">
          Use Case: ${escapeHtml(title)}
        </span>
      </div>

      <div class="d-flex align-items-center justify-content-end gap-2" style="min-width: 180px;">
        <a href="../index.html" class="btn btn-outline-secondary btn-sm">
          <i class="fa-solid fa-arrow-left me-1"></i> Use Cases Hub
        </a>

        <div class="dropdown">
          <button class="btn btn-light btn-sm border dropdown-toggle" id="hamburgerBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Menü">
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

  <!-- Main Block-Based Container -->
  <main class="container app-page-container py-4 flex-grow-1">
    
    <!-- BLOCK 1: Hero Header Block -->
    <header class="card border-0 shadow-sm p-4 p-md-5 mb-4 bg-white">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <div class="d-flex align-items-center gap-2">
          <span class="badge bg-primary text-white font-monospace px-2 py-1">${escapeHtml(uc.id)}</span>
          <span class="badge bg-light text-dark border font-monospace px-2 py-1">${escapeHtml(tierLabel)}</span>
        </div>
        ${ext.timeframe ? `<span class="small text-muted font-monospace"><i class="fa-solid fa-clock me-1"></i>${escapeHtml(ext.timeframe)}</span>` : ''}
      </div>

      <h1 class="h3 fw-black text-dark mb-2">${escapeHtml(title)}</h1>
      ${subtitle ? `<h2 class="h6 fw-bold text-primary mb-3">${escapeHtml(subtitle)}</h2>` : ''}
      
      <p class="text-secondary lead fs-6 m-0">${escapeHtml(shortDesc)}</p>
    </header>

    ${kpisBlockHtml}
    ${techBlockHtml}
    ${overviewBlockHtml}
    ${mediaBlockHtml}
    ${benefitBlockHtml}

    <!-- BLOCK 7: Action Footer Navigation Block -->
    <footer class="card border-0 shadow-sm p-3 bg-white mb-4">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
        <a href="../index.html" class="btn btn-outline-secondary btn-sm">
          <i class="fa-solid fa-arrow-left me-1"></i> Zurück zum Use Cases Hub
        </a>
        <a href="./usecase.json" target="_blank" class="btn btn-outline-primary btn-sm">
          <i class="fa-solid fa-code me-1"></i> JSON Quelltext
        </a>
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
 * Renders the single-page consolidated Use Cases hub page at usecases/index.html.
 * @param {Array<Object>} usecases - Array of all Use Case objects.
 * @returns {string} The HTML string for the central hub page.
 */
function renderUseCaseHubPage(usecases) {
  const cardsHtml = usecases.map(uc => {
    const slug = uc.slug || uc.id.toLowerCase();
    const title = uc.title || uc.id;
    const tier = uc.tier || 'Tier 1';
    const shortDesc = uc.shortDesc || '';
    const goal = uc.goal || '';
    const kpis = uc.kpis || [];
    const flow = uc.flow || [];

    const flowSequenceHtml = flow.map(step => `
      <div class="col-6 col-md">
        <div class="p-2 rounded bg-light border text-center h-100">
          <div class="badge bg-primary text-white font-monospace mb-1" style="font-size: 9px;">S${step.layer}</div>
          <div class="fw-bold text-dark text-truncate small" title="${escapeHtml(step.nodeName)}">${escapeHtml(step.nodeName)}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="col-12 mb-4 usecase-card-item" data-tier="${escapeHtml(tier)}" data-text="${escapeHtml((title + ' ' + shortDesc + ' ' + goal).toLowerCase())}">
        <div class="card border-0 shadow-sm p-4 bg-white hover-shadow transition">
          
          <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <div class="d-flex align-items-center gap-2">
              <span class="badge bg-primary text-white font-monospace">${escapeHtml(uc.id)}</span>
              <span class="badge bg-light text-dark border font-monospace">${escapeHtml(tier)}</span>
            </div>
            <a href="./${escapeHtml(slug)}/index.html" class="btn btn-primary btn-sm fw-bold">
              Use Case öffnen <i class="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>

          <h2 class="h5 fw-bold text-dark mb-2">${escapeHtml(title)}</h2>
          <p class="text-secondary small mb-3">${escapeHtml(shortDesc)}</p>

          <!-- 5-Layer Sequence Preview -->
          <div class="mb-3">
            <div class="fw-bold text-muted uppercase mb-2 small"><i class="fa-solid fa-sitemap text-primary me-1"></i>5-Schichten Ablauf-Sequenz:</div>
            <div class="row g-2">
              ${flowSequenceHtml}
            </div>
          </div>

          ${kpis.length > 0 ? `
            <div class="d-flex gap-2 mb-3 flex-wrap">
              ${kpis.map(k => `<span class="badge bg-primary-subtle text-primary border border-primary-subtle font-monospace">${escapeHtml(k.label)}: ${escapeHtml(k.value)}</span>`).join('')}
            </div>
          ` : ''}

          <div class="p-2 rounded bg-light border-start border-3 border-primary small text-secondary">
            <strong class="text-primary me-1"><i class="fa-solid fa-bullseye"></i> Betrieblicher Nutzen:</strong> ${escapeHtml(goal)}
          </div>

        </div>
      </div>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Use Cases Hub | Industrial Metaverse Taxonomie</title>
  <meta name="description" content="Konsolidierter Baukasten Use Cases Hub der Industrial Metaverse Technologie-Taxonomie im Projekt Reallabor 2.0 am Forschungscampus ARENA2036.">
  
  <!-- OpenGraph & Social Media -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Use Cases Hub | Industrial Metaverse Taxonomie">
  <meta property="og:description" content="Konsolidierter Baukasten Use Cases Hub der Industrial Metaverse Technologie-Taxonomie im Projekt Reallabor 2.0 am Forschungscampus ARENA2036.">
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

  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-3 flex-shrink-0">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center" style="min-width: 180px;">
        <a class="navbar-brand d-flex align-items-center gap-2 m-0" href="../index.html">
          <img src="../assets/Metaverse Logo bunt.svg" alt="Industrial Metaverse Logo" class="logo-img" title="Industrial Metaverse">
          <div class="logo-divider"></div>
          <img src="../assets/BaWue_WM_Absenderlogo_rgb_pos_Gefoerdert.svg" alt="Gefördert durch Baden-Württemberg" class="logo-img" title="Ministerium BW">
        </a>
      </div>

      <div class="text-center flex-grow-1 px-2">
        <span class="fw-black text-dark fs-6 d-none d-md-inline-block">
          Use Cases Hub: Baukasten Architekturen
        </span>
      </div>

      <div class="d-flex align-items-center justify-content-end gap-2" style="min-width: 180px;">
        <a href="../index.html" class="btn btn-outline-secondary btn-sm">
          <i class="fa-solid fa-house me-1"></i> Startseite
        </a>
        <div class="dropdown">
          <button class="btn btn-light btn-sm border dropdown-toggle" id="hamburgerBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Menü">
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

  <main class="container app-page-container py-4 flex-grow-1">
    
    <div class="card border-0 shadow-sm p-4 p-md-5 mb-4 bg-white">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
        <div>
          <h1 class="h3 fw-black text-dark m-0 mb-2">Baukasten-Use-Cases: Umsetzung, Kosten &amp; Nutzen</h1>
          <p class="text-secondary small m-0" style="max-width: 850px;">
            Konsolidierter Hub für alle ${usecases.length} auditierte Baukasten-Use-Cases. Jeder Use Case beantwortet konkret: <strong>Wie erfolgt die Umsetzung über die 5 Schichten? Welcher Investitionsrahmen (Tier 1 bis 3) ist zu erwarten? Und welche betrieblichen Nutzenpotenziale entstehen?</strong>
          </p>
        </div>
        <a href="https://github.com/ARENA2036/IMV-taxonomie/pulls" target="_blank" class="btn btn-primary btn-sm px-3">
          <i class="fa-brands fa-github me-1"></i> Use Case via PR beitragen
        </a>
      </div>
    </div>

    <!-- Search & Tier Filter Toolbar -->
    <div class="card border-0 shadow-sm p-3 mb-4 bg-white">
      <div class="row g-2 align-items-center">
        <div class="col-md-7">
          <div class="input-group input-group-sm">
            <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-magnifying-glass text-muted"></i></span>
            <input type="text" id="hubSearchInput" class="form-control border-start-0" placeholder="Use Case, Technologie oder Nutzen suchen..." autocomplete="off">
            <button class="btn btn-outline-secondary" type="button" id="hubSearchClearBtn" title="Zurücksetzen"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>

        <div class="col-md-3">
          <select id="hubFilterTier" class="form-select form-select-sm">
            <option value="ALL">Alle Kostengruppen</option>
            <option value="Tier 1">Tier 1 (≤ €30k / Starter &amp; Open Source)</option>
            <option value="Tier 2">Tier 2 (≤ €100k / Skalierbar &amp; Modular)</option>
            <option value="Tier 3">Tier 3 (> €100k / Enterprise OEM)</option>
          </select>
        </div>

        <div class="col-md-2 text-md-end small fw-bold text-secondary">
          Zeige <span id="hubCountBadge" class="text-primary fw-black">${usecases.length}</span> Use Cases
        </div>
      </div>
    </div>

    <div class="row" id="useCaseCardsContainer">
      ${cardsHtml}
    </div>

  </main>

  <!-- Site Footer -->
  <footer class="py-3 text-center small text-muted border-top bg-white">
    ARENA2036 Industrial Metaverse Taxonomy | 
    <a href="./index.html" class="text-muted text-decoration-none font-weight-bold">Use Cases Hub</a> | 
    <a href="../browser.html" class="text-muted text-decoration-none font-weight-bold">Browser</a> | 
    <a href="../architecture.html" class="text-muted text-decoration-none font-weight-bold">Architektur</a> | 
    <a href="../impressum.html" class="text-muted text-decoration-none font-weight-bold">Impressum</a>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

  <!-- Hub Live Search & Filter Script -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('hubSearchInput');
      const searchClear = document.getElementById('hubSearchClearBtn');
      const filterTier = document.getElementById('hubFilterTier');
      const countBadge = document.getElementById('hubCountBadge');
      const cards = document.querySelectorAll('.usecase-card-item');

      function filterHubCards() {
        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const tier = filterTier ? filterTier.value : 'ALL';
        let visibleCount = 0;

        cards.forEach(card => {
          const cardTier = card.getAttribute('data-tier') || '';
          const cardText = card.getAttribute('data-text') || '';

          const matchesTier = (tier === 'ALL' || cardTier === tier);
          const matchesQuery = (query === '' || cardText.includes(query));

          if (matchesTier && matchesQuery) {
            card.style.display = 'block';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (countBadge) countBadge.textContent = visibleCount;
      }

      if (searchInput) searchInput.addEventListener('input', filterHubCards);
      if (filterTier) filterTier.addEventListener('change', filterHubCards);
      if (searchClear && searchInput) {
        searchClear.addEventListener('click', () => {
          searchInput.value = '';
          filterHubCards();
        });
      }
    });
  </script>
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
