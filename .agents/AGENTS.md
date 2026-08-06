# AI Agent & Developer Guidelines (`IMV_Taxo`)

> **Industrial Metaverse Technology Taxonomy 2026**
> Activity of the **Reallabor 2.0** project at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.

---

## 📌 1. Project Purpose & Architecture

This repository contains the open research taxonomy and interactive web browser for **91 Industrial Metaverse technologies, standards, and protocols**.

The project strictly follows the **ARENA2036 5-Schichten Industrial Metaverse Tech-Stack**:
1. **Schicht 1: Erfassung & OT-Datenerfassung** *(Categories 6.1–6.5, 6.1-AI, 7.0, 8.1)*
2. **Schicht 2: Geometrie & CAD-Pre-Processing** *(Categories 1.1, 1.2, 2.0, 10.0)*
3. **Schicht 3: Semantische Middleware & Datenräume** *(Categories 8.2, 8.3, 9.0)*
4. **Schicht 4: Simulation & Virtuelle Inbetriebnahme** *(Categories 4.1, 4.2, 4.3, 5.0)*
5. **Schicht 5: Räumliche Immersion & Rendering** *(Categories 3.0, 11.0)*

---

## 💾 2. Single Source of Truth & Data Pipeline

The data architecture is **100% JSON-driven** without external databases:

```
profiles/                     <- Canonical JSON profile specifications (Single Source of Truth)
   ├── IND-META-2026-SIEMENS-NX.json
   ├── IND-META-2026-NVIDIA-OMNIVERSE.json
   └── ... (91 JSON files)
       │
       ▼ [Run node scripts/generate_profiles.js]
data/
   ├── index.json             <- Compiled JSON index manifest for GitHub Pages fetch()
   └── index_data.js          <- Static window wrapper (window.INDEX_DATA & window.PROFILES_DATA)
                                 for zero-CORS local file:// protocol execution
```

### Accessing & Modifying Data:
- **To add or update a technology profile**: Modify or create the corresponding `.json` file inside `profiles/`.
- **To rebuild the index manifest**: Run `node scripts/generate_profiles.js`.
- Do **NOT** manually edit `data/index.json` or `data/index_data.js` — they are auto-generated.

---

## ⚙️ 3. JSON Profile Schema Standard

Every profile JSON in `profiles/` must follow this schema:

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
  "status": "ETABLIERT | STANDARDIZIERT | OPEN SOURCE | EMERGING",
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

- **Design Aesthetic**: Minimalist, clean Vercel/Linear style.
- **Typography**: Inter (Body), JetBrains Mono (Codes & Badges).
- **Color Palette**:
  - Primary Accent: `#FF5000` (ARENA2036 Orange)
  - Borders: `#E5E7EB` (Subtle) & `#111827` (Dark contrast)
  - Backgrounds: `#FFFFFF` (Canvas) & `#FAFAFA` (Subtle container fill)
- **Zero CORS Policy**: All pages (`index.html`, `browser.html`, `architecture.html`, `impressum.html`) must work both on HTTP web servers and directly via local `file://` execution using `data/index_data.js`.

---

## 🧪 5. Verification Checklist Before Commit

Before pushing any changes to git:
1. Run `node scripts/generate_profiles.js` to ensure the manifest is synced.
2. Confirm zero console errors on `index.html` and `browser.html`.
3. Ensure no hardcoded profile counts or dead asset references remain.

---

## 🤖 6. AI Agent-Assisted Development & Agent-Readability

> **AI Agent-Assisted Development Disclaimer**:  
> Parts of the codebase, taxonomy profile JSON files, indexer scripts, and technical documentation were developed with the assistance of autonomous AI coding agents (Google DeepMind Antigravity / Gemini Agentic Workflow).

### Agent-Readable Repository Standards:
- **Zero SQL / DB Requirement**: All profile data is serialized in deterministic JSON under `profiles/*.json`.
- **Schema Conformity**: Subagents and LLM tools MUST preserve the 19 canonical fields defined in Section 3.
- **Build Synchronization**: Always invoke `node scripts/generate_profiles.js` after creating or editing `.json` profile files.
