# AI Agent & LLM Developer Guidelines (`IMV-taxonomie`)

> **Industrial Metaverse Technology Taxonomy**  
> Activity of the **Reallabor 2.0** project at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.  
> *Developed and maintained partially using Agentic AI Workflows.*

---

## 📌 1. Project Purpose & Architecture

This repository contains the open research taxonomy and interactive web browser for **91 Industrial Metaverse technologies, standards, and protocols** across the **ARENA2036 5-Schichten Industrial Metaverse Tech-Stack**:

1. **Schicht 1: Erfassung & OT-Datenerfassung** *(Categories 1.1–1.8)*
2. **Schicht 2: Geometrie & CAD-Pre-Processing** *(Categories 2.1–2.4)*
3. **Schicht 3: Semantische Middleware & Datenräume** *(Categories 3.1–3.3)*
4. **Schicht 4: Simulation & Virtuelle Inbetriebnahme** *(Categories 4.1–4.4)*
5. **Schicht 5: Räumliche Immersion & Rendering** *(Categories 5.1–5.2)*

---

## 💾 2. Single Source of Truth & Data Pipeline

The data architecture is **100% JSON-driven** without external database requirements:

```
profiles/*.json               <- Canonical JSON profile specifications (91 JSON files)
usecases/*.json               <- Canonical Baukasten Use Case specifications (6 JSON files)
       │
       ▼ [Run node scripts/generate_profiles.js]
data/
   ├── index.json             <- Compiled JSON index manifest for GitHub Pages fetch()
   └── index_data.js          <- Static window wrapper (window.INDEX_DATA & window.PROFILES_DATA)
                                 for zero-CORS local file:// protocol execution
```

### Accessing & Modifying Data:
- **To add or update a technology profile**: Modify or create the corresponding `.json` file inside `profiles/`.
- **To add or update a Use Case**: Modify or create a `.json` file inside `usecases/`.
- **To rebuild the index manifest**: Run `node scripts/generate_profiles.js`.
- Do **NOT** manually edit `data/index.json` or `data/index_data.js` — they are auto-generated build deliverables.

---

## ⚙️ 3. JSON Profile Schema Standard (19 Canonical Fields)

Every profile JSON in `profiles/` must strictly adhere to the 19 canonical schema fields:

```json
{
  "refCode": "IND-META-2026-TOOL-NAME",
  "categoryCode": "1.1",
  "categoryName": "Mechanisches CAD (MCAD)",
  "name": "Tool Name",
  "subtitle": "Short German Subtitle",
  "vendor": "Vendor / Company Name",
  "hq": "Country / Location",
  "businessModel": "Commercial / Subscription / Open Source",
  "url": "https://example.com",
  "tier": "Tier 1 | Tier 2 | Tier 3",
  "costLabel": "≤ €30k | ≤ €100k | > €100k",
  "status": "INDEXIERT | GEPRÜFT | USE CASE IMPLEMENTIERT | EXTERN VALIDIERT | COMMUNITY BEITRAG",
  "overview": "Detailed German overview text...",
  "features": [
    { "title": "Kernfunktion 1", "desc": "Funktionsbeschreibung..." }
  ],
  "inputs": ["STEP", "JT", "OpenUSD"],
  "outputs": ["OpenUSD", "glTF 2.0"],
  "bridges": ["NVIDIA Omniverse", "Siemens Industrial Operations X"],
  "evaluations": [
    { "title": "Praxiseinsatz", "text": "Feld-Evaluierungsbewertung..." }
  ],
  "compliance": {
    "omniverse": "Native Connector | Supported | Extension Pending",
    "sovereignty": "100% EU Souverän | DSGVO Konform",
    "openStandard": "OpenUSD / STEP AP242"
  },
  "deployment": {
    "effort": "Gering | Mittel | Hoch",
    "mode": "Cloud | On-Premise | Hybrid",
    "maturity": "Produktiv | Pilot",
    "area": "Maschinenbau | Werksbetrieb"
  },
  "staffing": "1x Spezialist Engineer"
}
```

---

## 🎨 4. UI & Design System Guidelines

- **Typography Standard**:
  - Headings & Brand Titles: **`Arial Black`** (`'Arial Black', 'Arial Bold', sans-serif`).
  - Body Text & Lead Paragraphs: **`Montserrat`** (Google Font `Montserrat:wght@300..900`).
  - Technical Badges & RefCodes: **`JetBrains Mono`** (`'JetBrains Mono'`, monospace).
- **Color Palette**:
  - Primary Accent: `#FF5000` (ARENA2036 Orange)
  - Borders: `#E5E7EB` (Subtle) & `rgba(255, 80, 0, 0.3)` (Accent thin frames)
  - Canvas Fill: `#FFFFFF` & `#FAFAFA`
- **Zero CORS Policy**: All pages (`index.html`, `browser.html`, `examples.html`, `architecture.html`, `impressum.html`) must work both on HTTP web servers and directly via local `file://` execution using `data/index_data.js`.

---

## 🧪 5. Verification Checklist Before Commit

Before pushing any changes:
1. Run `node scripts/generate_profiles.js` to ensure the manifest is synced.
2. Run `node -c app.js` to verify zero JavaScript syntax errors.
3. Confirm zero console errors across all 5 HTML pages.
