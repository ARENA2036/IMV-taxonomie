# Industrial Metaverse Technology Taxonomy (`IMV-taxonomie`)

> **Enterprise Research Taxonomy & Interactive Web Engine**  
> Activity of the **Reallabor 2.0** project at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.

---

## 📌 1. Executive Summary

This repository contains the open research taxonomy, interactive web browser, and Baukasten Use Case specifications for **91 audited Industrial Metaverse technologies, standards, and protocols** structured strictly into the **ARENA2036 5-Schichten Industrial Metaverse Tech-Stack**:

```
[ SCHICHT 1: Erfassung & OT ] ──► [ SCHICHT 2: Geometrie & CAD ] ──► [ SCHICHT 3: Middleware & AAS ] ──► [ SCHICHT 4: Simulation & VIBn ] ──► [ SCHICHT 5: Spatial Immersion ]
```

---

## 🛠️ 2. Technology Stack & Design System

- **UI Framework**: HTML5, Vanilla JavaScript (ES6+), **Bootstrap 5.3**.
- **Typography Standard**:
  - Headings & Brand Titles: **`Arial Black`** (`'Arial Black'`, sans-serif).
  - Body Copy & Lead Text: **`Montserrat`** (Google Font `Montserrat:wght@300..900`).
  - Technical Badges & RefCodes: **`JetBrains Mono`** (`'JetBrains Mono'`, monospace).
- **Icons & Diagrams**: FontAwesome 6, Mermaid.js.
- **Zero CORS Policy**: All 5 pages (`index.html`, `browser.html`, `examples.html`, `architecture.html`, `impressum.html`) run without CORS issues on HTTP servers and directly via local `file://` protocol execution.

---

## 💾 3. Data Architecture & Pipeline

The application is **100% JSON-driven** without external database overhead:

```
profiles/*.json     <- Canonical JSON profile specifications (91 JSON files)
usecases/*.json     <- Canonical Baukasten Use Case specifications (6 JSON files)
       │
       ▼ [Run node scripts/generate_profiles.js]
data/
   ├── index.json   <- Compiled JSON index manifest for GitHub Pages fetch()
   └── index_data.js <- Static window wrapper (window.INDEX_DATA & window.PROFILES_DATA)
                        for zero-CORS local file:// protocol execution
```

---

## ⚙️ 4. Local Development & Setup

### Prerequisites
- Node.js (v18+) installed locally.

### Local Setup & Server Launch
```bash
# 1. Clone the repository
git clone https://github.com/ARENA2036/IMV-taxonomie.git
cd IMV-taxonomie

# 2. Rebuild index manifest deliverables
node scripts/generate_profiles.js

# 3. Launch local dev web server
npx http-server -p 8080
```
Then open `http://localhost:8080` in your web browser.

---

## 📁 5. Directory Mapping

```
├── index.html               # Full-Canvas Greeter Landing Page
├── browser.html             # Interactive Taxonomy Browser (Grid & List View)
├── examples.html            # Baukasten Use Cases Browser & Flow Diagrams
├── architecture.html        # 5-Layer Left-to-Right System Architecture Specification
├── impressum.html           # ARENA2036 Legal Impressum & Disclaimers
├── index.css                # Minimal Design System & ARENA2036 Orange Accents
├── app.js                   # Pure JSON Client Engine & Full-Canvas Modal Inspector
├── profiles/*.json          # 91 Canonical Technology JSON Specifications
├── usecases/*.json          # 6 Canonical Baukasten Use Case JSON Specifications
├── scripts/
│   └── generate_profiles.js # Node Data Pipeline Indexer
├── docs/
│   ├── ARCHITECTURE.md      # 5-Layer Stack Technical Specs (Left-to-Right Flow)
│   └── USECASES.md          # Use Case Model & PR Contribution Guide
├── .agents/
│   └── AGENTS.md            # AI Agent Guidelines & Schema Rules
├── .gitignore               # Production-Grade Git Ignore Rules
├── AUDIT_LOG.md             # Itemized End-to-End Audit Log
└── README.md                # Root Enterprise Documentation
```

---

## ⚖️ Legal & Non-Financial Advice Disclaimer

> **📌 RECHTLICHER HINWEIS:** Alle Angaben zu Kostengruppen (Tier 1–3), Nutzenpotenzialen und Technologie-Evaluierungen dienen der akademischen und strategischen Orientierung (Research Benchmarks) und stellen **KEINE direkte Finanz-, Anlage- oder Rechtsberatung** dar. Diese Zusammenstellung stellt ausdrücklich KEINE kommerzielle Produktwerbung oder herstellerseitige Vorzugsempfehlung dar.
