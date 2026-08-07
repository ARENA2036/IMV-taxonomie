# Industrial Metaverse Technology Taxonomy (`IMV-taxonomie`)

> **Activity of the Reallabor 2.0 Project** at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.

---

## 📌 Overview

This repository contains the open research taxonomy and interactive web browser for **91 Industrial Metaverse technologies, standards, and protocols** across the **ARENA2036 5-Schichten Industrial Metaverse Tech-Stack**:

1. **Schicht 1: Erfassung & OT-Datenerfassung** *(Categories 6.1–6.5, 6.1-AI, 7.0, 8.1)*
2. **Schicht 2: Geometrie & CAD-Pre-Processing** *(Categories 1.1, 1.2, 2.0, 10.0)*
3. **Schicht 3: Semantische Middleware & Datenräume** *(Categories 8.2, 8.3, 9.0)*
4. **Schicht 4: Simulation & Virtuelle Inbetriebnahme** *(Categories 4.1, 4.2, 4.3, 5.0)*
5. **Schicht 5: Räumliche Immersion & Rendering** *(Categories 3.0, 11.0)*

---

## 💾 Data Architecture & Pipeline

The data architecture is **100% JSON-driven** without external databases:

```
profiles/*.json     <- Canonical JSON profile specifications (91 JSON files)
usecases/*.json     <- Canonical Baukasten Use Case specifications (6 JSON files)
       │
       ▼ [Run node scripts/generate_profiles.js]
data/
   ├── index.json   <- Compiled JSON index manifest for GitHub Pages fetch()
   └── index_data.js <- Static window wrapper (window.INDEX_DATA & window.PROFILES_DATA)
                        for zero-CORS local file:// execution protocol
```

### Build Indexer:
```bash
# Rebuild index manifest and static data fallback
node scripts/generate_profiles.js
```

---

## 🛠️ Technology Stack & Component Library

- **UI Framework**: HTML5, Vanilla JavaScript (ES6+), **Bootstrap 5.3 (via CDN)**.
- **Typography**: `Arial Black` (Headings & Titles), `Montserrat` (Body & Lead Copy), `JetBrains Mono` (RefCodes & Badges).
- **Icons**: FontAwesome 6.
- **Diagrams**: Mermaid.js.
- **Zero CORS**: All views (`index.html`, `browser.html`, `examples.html`, `architecture.html`, `impressum.html`) work seamlessly on HTTP web servers and directly via local `file://` execution.

---

## 📂 Project Structure

```
├── index.html               # Full-Canvas Greeter Landing Page
├── browser.html             # Interactive Taxonomy Browser (Grid & List View)
├── examples.html            # Baukasten Use Cases Browser & Flow Diagrams
├── architecture.html        # 5-Layer System Architecture Specification
├── impressum.html           # ARENA2036 Legal Impressum & Disclaimers
├── index.css                # Minimal Bootstrap 5 Design System & Accent Overrides
├── app.js                   # Pure JSON Client Engine & Modal Inspector
├── profiles/*.json          # 91 Canonical Technology JSON Specifications
├── usecases/*.json          # 6 Canonical Baukasten Use Case JSON Specifications
├── scripts/
│   └── generate_profiles.js # Node Data Pipeline Indexer
├── docs/
│   ├── ARCHITECTURE.md      # 5-Layer Stack Technical Specs
│   └── USECASES.md          # Use Case Model & PR Contribution Guide
├── AUDIT_LOG.md             # End-to-End Audit & Bug Fix Report
└── README.md                # Main Repository Documentation
```

---

## ⚖️ Legal & Non-Financial Advice Disclaimer

> **📌 RECHTLICHER HINWEIS:** Alle Angaben zu Kostengruppen (Tier 1–3), Nutzenpotenzialen und Technologie-Evaluierungen dienen der akademischen und strategischen Orientierung (Research Benchmarks) und stellen **KEINE direkte Finanz-, Anlage- oder Rechtsberatung** dar. Diese Zusammenstellung stellt ausdrücklich KEINE kommerzielle Produktwerbung oder herstellerseitige Vorzugsempfehlung dar.
