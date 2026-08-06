# Product Requirements Document (`PRD.md`)

> **Industrial Metaverse Technology Taxonomy 2026 (`industrial-metaverse-taxonomy`)**  
> Product Specifications, Target Personas, Cost Tier Models, and Functional Requirements.

---

## 1. Executive Vision & Objectives

The **Industrial Metaverse Technology Taxonomy 2026** provides an open, vendor-neutral research taxonomy and interactive browser platform for industrial digital twin technologies.

### Key Product Goals:
1. **Single Source of Truth in Pure JSON**: Maintain a growing collection of technology profiles stored strictly as JSON files (`profiles/*.json`), eliminating data duplication.
2. **Transparent Cost Tiering for SMEs & OEMs**: Provide clear financial classification across three distinct investment tiers (Tier 1: ≤ €30k / Open Source, Tier 2: ≤ €100k / Midmarket, Tier 3: > €100k / Enterprise OEM).
3. **5-Schichten Architecture (ARENA2036 Standard)**: Structure technologies from Shopfloor Sensing (Schicht 1) to Spatial XR Immersion (Schicht 5).
4. **100% German Language Localization**: Deliver professional, accurate German documentation across all categories, overviews, features, evaluations, and staffing guidelines.
5. **Static GitHub Pages Deployment**: Support instant static deployment to GitHub Pages (`github.io`) with zero server overhead and zero-CORS local file execution.

---

## 2. Target Personas

```
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│ CTO / VP ENGINEERING      │ FACTORY AUTOMATION ENG.   │ BIM / AEC MANAGER         │
│ Needs: High-level stack   │ Needs: Interoperability,  │ Needs: BIM-to-USD         │
│ overview, cost tiering,   │ ROS 2 bridges, PhysX      │ pipeline, point cloud     │
│ EU data sovereignty.      │ physics, OT protocols.    │ SLAM scanning interop.    │
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

---

## 3. Functional Requirements (F-01 to F-08)

### F-01: Minimalist Greeter Landing Page (2-Panel Split Layout)
* **Description**: Simplified landing page (`index.html`) featuring a clean 2-panel split card:
  - **Left Panel**: Title, project introduction, dynamic KPIs (calculated automatically from JSON data), and partner logos.
  - **Right Panel**: Stacked action buttons (`Taxonomie Browser Öffnen`, `Matrix Index`, `Architektur Spezifikation`, `Impressum & Rechtliches`, `GitHub PR`).
* **Acceptance Criteria**: Zero navbar clutter; centered minimalist card layout with crisp borders (`#E5E7EB`).

### F-02: Dedicated Technical Architecture Page
* **Description**: Standalone specification page (`architecture.html`) detailing the 5-layer architecture.
* **Acceptance Criteria**: Embedded interactive Mermaid.js diagram illustrating the bottom-up data flow from Schicht 1 (Erfassung & OT) to Schicht 5 (Räumliche Immersion & Rendering).

### F-03: Impressum & Non-Commercial KMU Disclaimer Page
* **Description**: German legal notice page (`impressum.html`) providing ARENA2036 e.V. contact info and funding attribution.
* **Acceptance Criteria**: Features an explicit disclaimer clarifying that the taxonomy is an academic research audit for KMU guidance and **NOT** a commercial vendor recommendation or product advertisement.

### F-04: Interactive Category Browser with Single-Row Item Design
* **Description**: Main browser interface (`browser.html`) with left sidebar navigation displaying all 11 categories grouped into 5 architecture layers.
* **Acceptance Criteria**: Single-row item layout for each category displaying category code (e.g. `1.1`), concise name, and item count tag. Header title displays `Index (11 Kat.)`.

### F-05: Real-Time Search & Multi-Layer Filtering
* **Description**: Instant keyword search box in control toolbar filtering technologies across names, vendors, categories, ref codes, and overview text. Filter dropdowns for Cost Tiers (Tier 1..3) and Status.
* **Acceptance Criteria**: Zero lag filtering; dynamically updates item counter tags in toolbar and sidebar.

### F-06: Dynamic Profile Inspector from JSON Specifications
* **Description**: Clicking "Details →" or a profile hash link (`#profile/[refCode]`) opens a full-screen modal inspect view rendered dynamically on the fly from `profiles/[refCode].json`.
* **Acceptance Criteria**: Renders 2-column layout, metadata strip, technical features, evaluation bullet points, compliance cards, deployment parameters, and staffing notes.

### F-07: Side-by-Side Multi-Item Comparison Matrix
* **Description**: Ability to select up to 4 technologies via checkboxes and open a side-by-side comparison modal (`#compareModal`).
* **Acceptance Criteria**: Renders parameter comparison rows with individual column removal buttons (`X`).

### F-08: Full Taxonomy Matrix Modal
* **Description**: Button opens a modal table displaying all 91 technologies in a structured matrix with direct "Details →" inspector links.

---

## 4. Non-Functional Requirements (NFR-01 to NFR-05)

* **NFR-01: Zero External Server Dependencies**: Static HTML5/CSS3/JS execution via standard browser engines.
* **NFR-02: Zero-CORS Protocol Compatibility**: Full local file execution (`file://`) via static window fallback (`data/index_data.js`).
* **NFR-03: 100% German Language Localization**: Every user-facing string, category description, tool overview, and evaluation point is in professional German.
* **NFR-04: High Accessibility & Fluid Scaling**: Fully responsive down to 768px with touch support.
* **NFR-05: 100% AI Agent-Readable**: Structured JSON profiles under `profiles/` and explicit agent instructions in [`.agents/AGENTS.md`](.agents/AGENTS.md).
