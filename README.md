# Industrial Metaverse Technology Taxonomy (`IMV-taxonomie`)

> **Enterprise Research Taxonomy & Interactive Web Engine**  
> Activity of the **Reallabor 2.0** project at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.

---

## 📌 1. Executive Summary

This repository contains the open research taxonomy, interactive web browser, and Baukasten Use Case specifications for **numerous audited Industrial Metaverse technologies, standards, and protocols** structured strictly into the **ARENA2036 5-Schichten Industrial Metaverse Tech-Stack** and **1:1 Layer-to-Category Decimal System (Categories 1.1–5.2)**:

```
[ SCHICHT 1: Erfassung (1.1–1.8) ] ──► [ SCHICHT 2: Geometrie (2.1–2.4) ] ──► [ SCHICHT 3: Middleware (3.1–3.3) ] ──► [ SCHICHT 4: Simulation (4.1–4.4) ] ──► [ SCHICHT 5: Immersion (5.1–5.2) ]
```

---

## 📚 2. Centralized Documentation Index

All technical, product, and agent documentation files are standardized and centralized:

| Document | Description / Purpose | Location |
| :--- | :--- | :--- |
| **System Architecture** | 5-Layer Stack Technical Specs (Left-to-Right Flow & 1:1 Decimal Codes) | [`docs/ARCHITECTURE.md`](file:///Users/michael/dev/IMV_Taxo/docs/ARCHITECTURE.md) |
| **Baukasten Use Cases** | Multi-Stage Workflow Model & PR Contribution Guide | [`docs/USECASES.md`](file:///Users/michael/dev/IMV_Taxo/docs/USECASES.md) |
| **Product Requirements** | PRD Specifications, Target Personas & Cost Tier Models | [`docs/PRD.md`](file:///Users/michael/dev/IMV_Taxo/docs/PRD.md) |
| **AI Agent Guidelines** | LLM Developer Instructions, Prompt Rules & Schema Specifications | [`.agents/AGENTS.md`](file:///Users/michael/dev/IMV_Taxo/.agents/AGENTS.md) |
| **Audit & Changelog** | Itemized Quality Audit Report & Deliverables Log | [`AUDIT_LOG.md`](file:///Users/michael/dev/IMV_Taxo/AUDIT_LOG.md) |

---

## 🛠️ 3. Technology Stack & Design System

- **UI Framework**: HTML5, Vanilla JavaScript (ES6+), **Bootstrap 5.3**.
- **Typography Standard**:
  - Headings & Brand Titles: **`Arial Black`** (`'Arial Black'`, sans-serif).
  - Body Copy & Lead Text: **`Montserrat`** (Google Font `Montserrat:wght@300..900`).
  - Technical Badges & RefCodes: **`JetBrains Mono`** (`'JetBrains Mono'`, monospace).
- **Icons & Diagrams**: FontAwesome 6, Mermaid.js.
- **Zero CORS Policy**: All 5 pages (`index.html`, `browser.html`, `examples.html`, `architecture.html`, `impressum.html`) run without CORS issues on HTTP servers and directly via local `file://` protocol execution.

---

## 💾 4. Data Architecture & Pipeline

The application is **100% JSON-driven** without external database overhead:

```
profiles/*.json     <- Canonical JSON profile specifications
usecases/*.json     <- Canonical Baukasten Use Case specifications (6 JSON files)
       │
       ▼ [Run node scripts/generate_profiles.js]
data/
   ├── index.json   <- Compiled JSON index manifest for GitHub Pages fetch()
   └── index_data.js <- Static window wrapper (window.INDEX_DATA & window.PROFILES_DATA)
                        for zero-CORS local file:// protocol execution
```

---

## ⚙️ 5. Local Development & Setup

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

## 📁 6. Directory Structure

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
│   ├── USECASES.md          # Use Case Model & PR Contribution Guide
│   └── PRD.md               # Product Requirements Document & Target Personas
├── .agents/
│   └── AGENTS.md            # AI Agent Developer Guidelines & Schema Rules
├── .gitignore               # Production-Grade Git Ignore Rules
├── AUDIT_LOG.md             # Itemized End-to-End Audit Log
└── README.md                # Root Enterprise Documentation Index
```

---

## 🤖 7. AI & Agentic Workflows

This project is co-developed and maintained partially using **Agentic AI Workflows**. Autonomous agentic workflows assist with:
- **Canonical Data Pipeline & Profile Indexing**: Automated compilation and schema validation across canonical JSON technology profiles and 6 Baukasten Use Cases.
- **Architectural & Design Consistency**: Automated visual auditing, responsive UI alignment, and 1:1 Layer-to-Category decimal system restructuring.
- **Documentation & Repository Hygiene**: Automated synchronization of technical documentation (`docs/`), agent guidelines (`.agents/AGENTS.md`), and production git rules (`.gitignore`).

---

## ⚖️ Legal & Non-Financial Advice Disclaimer

> **📌 RECHTLICHER HINWEIS:** Alle Angaben zu Kostengruppen (Tier 1–3), Nutzenpotenzialen und Technologie-Evaluierungen dienen der akademischen und strategischen Orientierung (Research Benchmarks) und stellen **KEINE direkte Finanz-, Anlage- oder Rechtsberatung** dar. Diese Zusammenstellung stellt ausdrücklich KEINE kommerzielle Produktwerbung oder herstellerseitige Vorzugsempfehlung dar.
