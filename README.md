# Industrial Metaverse Technology Taxonomy (`IMV-taxonomie`)

> **Enterprise Research Taxonomy & Interactive Web Engine**  
> Activity of the **Reallabor 2.0** project at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.  
> **🌐 Live Interactive Browser**: [https://arena2036.github.io/IMV-taxonomie/](https://arena2036.github.io/IMV-taxonomie/)

---

## 📌 1. Executive Summary

This repository contains the open research taxonomy, interactive web browser, and Baukasten Use Case specifications for **numerous audited Industrial Metaverse technologies, standards, and protocols** structured strictly into the **ARENA2036 5-Schichten Industrial Metaverse Tech-Stack** and **1:1 Layer-to-Category Decimal System (Categories 1.1–5.2)**:

```
[ SCHICHT 1: Erfassung (1.1–1.8) ] ──► [ SCHICHT 2: Geometrie (2.1–2.4) ] ──► [ SCHICHT 3: Middleware (3.1–3.3) ] ──► [ SCHICHT 4: Simulation (4.1–4.4) ] ──► [ SCHICHT 5: Immersion (5.1–5.2) ]
```

---

## 📚 2. Centralized Documentation & Governance Index

All technical, product, governance, and agent documentation files are standardized and centralized:

| Document | Description / Purpose | Location |
| :--- | :--- | :--- |
| **System Architecture** | 5-Layer Stack Technical Specs (Left-to-Right Flow & 1:1 Decimal Codes) | [`docs/ARCHITECTURE.md`](file:///Users/michael/dev/IMV_Taxo/docs/ARCHITECTURE.md) |
| **Baukasten Use Cases** | Multi-Stage Workflow Model & PR Contribution Guide | [`docs/USECASES.md`](file:///Users/michael/dev/IMV_Taxo/docs/USECASES.md) |
| **Product Requirements** | PRD Specifications, Target Personas & Cost Tier Models | [`docs/PRD.md`](file:///Users/michael/dev/IMV_Taxo/docs/PRD.md) |
| **Contribution Guide** | Guidelines for adding new tools, PR workflow & Tier justification | [`CONTRIBUTING.md`](file:///Users/michael/dev/IMV_Taxo/CONTRIBUTING.md) |
| **Open Source License** | Dual MIT (Code) & CC-BY-4.0 (Taxonomy Data) | [`LICENSE`](file:///Users/michael/dev/IMV_Taxo/LICENSE) |
| **JSON Schema Standard** | Canonical 19-field validation schema for profile JSONs | [`.github/schema/tool-taxonomy.schema.json`](file:///Users/michael/dev/IMV_Taxo/.github/schema/tool-taxonomy.schema.json) |
| **AI Agent Guidelines** | LLM Developer Instructions, Prompt Rules & Schema Specifications | [`.agents/AGENTS.md`](file:///Users/michael/dev/IMV_Taxo/.agents/AGENTS.md) |
| **Audit & Changelog** | Itemized Quality Audit Report & Deliverables Log | [`AUDIT_LOG.md`](file:///Users/michael/dev/IMV_Taxo/AUDIT_LOG.md) |

---

## 🛠️ 3. Technology Stack & Open Standards

Rather than reinventing proprietary wheels, this project is built 100% on established international industrial open standards and browser-native web primitives:

- **Industrial & 3D Open Standards**:
  - **Asset Administration Shell (AAS / IEC 63278)**: International standard for industrial Digital Twins & Digital Product Passports.
  - **OPC UA (IEC 62541)** & **MQTT Sparkplug B**: Universal open OT communication standards.
  - **OpenUSD (Pixar/NVIDIA AOUSD)** & **glTF 2.0 (Khronos Group)**: Open 3D geometry exchange standards.
  - **STEP AP242 (ISO 10303)** & **JT (ISO 14306)**: Mechanical CAD exchange standards.
  - **Eclipse Dataspace Connector (EDC)**: Sovereign data space connector standard (Catena-X / Manufacturing-X).
- **Browser-Native Web Primitives**:
  - **UI & Grid**: HTML5, Vanilla JavaScript (ES6+), **Bootstrap 5.3**.
  - **Immersive Spatial Web**: **WebXR Device API** (W3C standard for browser-native 3D/AR/VR without plugins).
  - **Diagramming & Icons**: Mermaid.js, FontAwesome 6.
  - **Typography Standard**: `Arial Black` (Headings), `Montserrat` (Body), `JetBrains Mono` (RefCodes).
- **Zero-CORS Data Pipeline**: 100% JSON-driven single source of truth (`profiles/*.json` & `usecases/*/usecase.json`) with zero external database dependencies and instant `file://` local execution.

---

## 💾 4. Data Architecture & Pipeline

The application is **100% JSON-driven** without external database overhead:

```
profiles/*.json               <- Canonical JSON profile specifications (91 profiles)
usecases/[slug]/usecase.json  <- Canonical Baukasten Use Case specifications & media assets
       │
       ▼ [Run node scripts/generate_profiles.js or npm run build]
data/
   ├── index.json             <- Compiled JSON index manifest for HTTP fetch()
   └── index_data.js          <- Static window wrapper (window.INDEX_DATA & window.PROFILES_DATA)
usecases/
   ├── index.html             <- Auto-generated Use Cases hub page
   └── [slug]/index.html      <- Auto-generated standalone HTML page per Use Case
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
├── guide.html               # Orientierung & Praxis Leitfaden
├── browser.html             # Interactive Taxonomy Browser (Grid & List View)
├── architecture.html        # 5-Layer Left-to-Right System Architecture Specification
├── impressum.html           # ARENA2036 Legal Impressum & Disclaimers
├── index.css                # Minimal Design System & ARENA2036 Orange Accents
├── app.js                   # Pure JSON Client Engine & Full-Canvas Modal Inspector
├── profiles/*.json          # 91 Canonical Technology JSON Specifications
├── usecases/                # Self-Contained Use Case Directories & Generated Pages
│   ├── index.html           # Auto-generated Use Cases Hub Page
│   └── [slug]/              # Per-Use-Case Folder (usecase.json, index.html, assets/)
├── scripts/
│   ├── generate_profiles.js     # Node Data Pipeline Indexer & SSG Trigger
│   └── generate_usecase_pages.js # Static HTML SSG Generator for Use Case Pages
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
