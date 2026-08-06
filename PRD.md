# Product Requirements Document (`PRD.md`)

> **Industrial Metaverse Technology Taxonomy 2026 (`IMV_Taxo`)**  
> Product Specifications, Target Personas, Cost Tier Models, and Functional Requirements.

---

## 1. Executive Vision & Objectives

The **Industrial Metaverse Technology Taxonomy 2026** provides an open, vendor-neutral research taxonomy and interactive browser platform for industrial digital twin technologies.

### Key Product Goals:
1. **Single Source of Truth in Pure JSON**: Maintain a growing collection of technology profiles stored strictly as JSON files (`profiles/*.json`), eliminating data duplication.
2. **Transparent Cost Tiering for SMEs & OEMs**: Provide clear financial classification across three distinct investment tiers (Tier 1: ≤ €30k / Open Source, Tier 2: ≤ €100k / Midmarket, Tier 3: > €100k / Enterprise OEM).
3. **100% German Language Localization**: Deliver professional, accurate German documentation across all categories, overviews, features, evaluations, and staffing guidelines.
4. **Static GitHub Pages Deployment**: Support instant static deployment to GitHub Pages (`github.io`) with zero server overhead.

---

## 2. Target Personas

```
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│ CTO / VP ENGINEERING      │ FACTORY AUTOMATION ENG.   │ BIM / AEC MANAGER         │
├───────────────────────────┼───────────────────────────┼───────────────────────────┤
│ Needs: High-level stack   │ Needs: Interoperability,  │ Needs: BIM-to-USD         │
│ overview, cost tiering,   │ ROS 2 bridges, PhysX 5    │ pipeline, point cloud     │
│ EU data sovereignty.      │ physics, OT protocols.    │ SLAM scanning interop.    │
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

---

## 3. Functional Requirements (F-01 to F-08)

### F-01: Greeter Landing Page & Hero KPI Dashboard
* **Description**: Dedicated landing page (`index.html`) providing high-level context, funding notice, KPI metrics (180+ tools, 11 categories, 4 layers, 3 tiers), cost tier explanation cards, and 4-layer architecture cards.
* **Acceptance Criteria**: Hidden vertical scrollbar with smooth scrolling; Living Document disclaimer banner positioned directly beneath the main Hero Card block.

### F-02: Interactive Category Browser with Single-Row Item Design
* **Description**: Main browser interface (`browser.html`) with left sidebar navigation displaying all 11 categories.
* **Acceptance Criteria**: Single-row item layout for each category displaying category code (e.g. `1.1`), concise name, and item count tag with generous vertical spacing (`padding: 9px 12px; margin-bottom: 6px;`). Header title displays `Index (11 Kat.)`.

### F-03: Real-Time Search & Multi-Layer Filtering
* **Description**: Instant keyword search box in navbar filtering technologies across names, vendors, categories, ref codes, and overview text.
* **Acceptance Criteria**: Zero lag filtering; dynamically updates item counter tags in toolbar and sidebar.

### F-04: Dynamic Profile Inspector from JSON Specifications
* **Description**: Clicking "Details →" or a profile hash link (`#profile/[refCode]`) opens a full-screen modal inspect view rendered dynamically on the fly from `profiles/[refCode].json`.
* **Acceptance Criteria**: Renders 2-column layout, metadata strip, technical features, evaluation bullet points, compliance cards (Omniverse, DSGVO, Open Standards), deployment parameters, and staffing notes with full color frame styling (`tier-1` green, `tier-2` blue, `tier-3` orange).

### F-05: Side-by-Side Multi-Item Comparison Matrix
* **Description**: Ability to select up to 4 technologies via checkboxes and open a side-by-side comparison modal (`#compareModal`).
* **Acceptance Criteria**: Renders parameter comparison rows (Ref Code, Vendor, Tier, Business Model, Omniverse Status, EU Sovereignty, Inputs, Outputs, Bridges, Staffing) with individual column removal buttons (`X`).

### F-06: Full Taxonomy Matrix Modal
* **Description**: Button `#btnOverview` opens a modal table displaying all 180+ technologies in a structured matrix with direct "Details →" inspector links.
* **Acceptance Criteria**: Opens on both `index.html` and `browser.html` without JavaScript errors.

### F-07: Public Community Submission Form
* **Description**: Button `#btnSubmitTech` opens a public submission dialog (`#submitModal`) where vendors can submit new profile entries.
* **Acceptance Criteria**: Provides 1-click **"JSON Kopieren"**, **"JSON Herunterladen"**, and **"Auf GitHub Einreichen"** (opens a pre-filled GitHub Issue with structured JSON payload).

### F-08: High-Resolution Print & PDF Export
* **Description**: Button `#btnExportPDF` triggers `window.print()`.
* **Acceptance Criteria**: Applies `@media print` CSS rules hiding navbars, sidebars, and UI buttons while outputting clean documentation reports.

---

## 4. Non-Functional Requirements (NFR-01 to NFR-04)

* **NFR-01: Zero External Server Dependencies**: Static HTML5/CSS3/JS execution via standard browser engines.
* **NFR-02: Zero-CORS Protocol Compatibility**: Full local file execution (`file://`) via static window fallback (`data/index_data.js`).
* **NFR-03: 100% German Language Localization**: Every user-facing string, category description, tool overview, and evaluation point is in professional German.
* **NFR-04: High Accessibility & Fluid Scaling**: Fully responsive down to 768px with touch support.
