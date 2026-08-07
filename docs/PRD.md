# Product Requirements Document (`PRD.md`)

> **Industrial Metaverse Technology Taxonomy (`IMV-taxonomie`)**  
> Activity of the **Reallabor 2.0** project at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.

---

## 1. Executive Vision & Objectives

The **Industrial Metaverse Technology Taxonomy** provides an open, vendor-neutral research taxonomy and interactive browser platform for numerous audited industrial metaverse technologies, standards, and protocols.

### Key Product Goals:
1. **Single Source of Truth in Pure JSON**: Maintain a growing collection of technology profiles stored strictly as JSON files (`profiles/*.json`), compiled dynamically via `node scripts/generate_profiles.js`.
2. **Transparent Cost Tiering for SMEs & OEMs**: Provide clear financial classification across three distinct investment tiers (Tier 1: ≤ €30k / Open Source, Tier 2: ≤ €100k / Midmarket, Tier 3: > €100k / Enterprise OEM).
3. **5-Schichten Architecture (1:1 Decimal Standard)**: Structure technologies from Shopfloor Sensing (Schicht 1, 1.1–1.8) to Spatial XR Immersion (Schicht 5, 5.1–5.2).
4. **100% German Language Localization**: Deliver professional, accurate German documentation across all categories, overviews, features, evaluations, and staffing guidelines.
5. **Static GitHub Pages & Zero-CORS Local Execution**: Support instant static deployment to GitHub Pages (`github.io`) and zero-CORS local `file://` protocol execution via `data/index_data.js`.

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

### F-01: Full-Canvas Greeter Landing Page
* **Description**: Landing page (`index.html`) featuring a 3-card navigation grid (`col-md-4`) and ARENA2036 partner branding.
* **Acceptance Criteria**: Centered minimalist layout with crisp borders (`#E5E7EB`) and ARENA2036 orange accents (`#FF5000`).

### F-02: Dedicated Technical Architecture Specification Page
* **Description**: Standalone specification page (`architecture.html`) detailing the 5-layer architecture.
* **Acceptance Criteria**: Embedded interactive Mermaid.js diagram (`graph LR`) illustrating the linear left-to-right data flow from Schicht 1 to Schicht 5, accompanied by a 5-column horizontal sequence grid (`col-lg-2-4`).

### F-03: Impressum & Non-Commercial KMU Disclaimer Page
* **Description**: German legal notice page (`impressum.html`) providing ARENA2036 e.V. contact info and funding attribution.
* **Acceptance Criteria**: Features a clean white background with a thin orange border, explicitly clarifying that the taxonomy is an academic research audit for KMU guidance and **NOT** a commercial vendor recommendation.

### F-04: Interactive Category Browser (Grid & Table List View)
* **Description**: Main browser interface (`browser.html`) with left sidebar navigation displaying all 21 categories grouped into the 5 architecture layers.
* **Acceptance Criteria**: Supports single-click toggle between 270px uniform card grid view (`#btnGridMode`) and Bootstrap 5 bordered table list view (`#btnListMode`).

### F-05: Real-Time Search & Multi-Layer Filtering
* **Description**: Instant keyword search box in control toolbar filtering technologies across names, vendors, categories, ref codes, and overview text. Filter dropdowns for Cost Tiers (Tier 1..3) and Status.
* **Acceptance Criteria**: Zero lag filtering; dynamically updates item counter tags in toolbar and sidebar.

### F-06: Full-Canvas Profile Inspector with Glassmorphism Backdrop Blur
* **Description**: Clicking any profile opens a full-width modal inspect view (`#profileModal`) rendered dynamically on the fly from `profiles/[refCode].json`.
* **Acceptance Criteria**: 94% viewport width (`max-width: 94vw`) with `backdrop-filter: blur(16px)` overlay and `opacity: 1` background blending.

### F-07: Baukasten Use Case Flow Browser
* **Description**: Dedicated Use Case browser page (`examples.html`) displaying multi-stage industrial workflow flows across the 5 layers.
* **Acceptance Criteria**: Interactive nodes linked directly to technology profile specs; vertically centered GitHub PR button.

### F-08: Dual-Mode Data Hydration (Zero CORS)
* **Description**: Pure JSON client engine (`app.js`) attempting dynamic HTTP `fetch()` first, with static fallback to `window.INDEX_DATA` in `data/index_data.js`.
* **Acceptance Criteria**: Zero CORS errors when executed over local `file://` protocol or hosted on GitHub Pages.

---

## 4. AI & Agentic Workflows Specification

This project leverages **Agentic AI Workflows** for agile development, automated quality assurance, and taxonomy maintenance:
- **Agentic Code & Schema Auditing**: Autonomous verification of canonical JSON profile specifications against 19-field schemas.
- **Continuous Documentation Sync**: Automated alignment of user-facing HTML views, technical architecture docs (`docs/ARCHITECTURE.md`), and AI agent guidelines (`.agents/AGENTS.md`).
- **Refactoring & Optimization**: Automated refactoring of data structures, CSS design system tokens, and responsive UI layouts.
