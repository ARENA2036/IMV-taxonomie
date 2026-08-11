# Contributing to the Industrial Metaverse Technology Taxonomy (`IMV-taxonomie`)

Thank you for your interest in contributing to the **Industrial Metaverse Technology Taxonomy**! This open enterprise taxonomy is developed under the **Reallabor 2.0** project at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.

---

## 📌 1. How to Add or Update a Technology Profile

All technology profiles are **100% JSON-driven** and stored individually as canonical JSON files under `profiles/`.

### Steps to Submit a Profile via Pull Request:

1. **Fork & Clone**: Fork the repository on GitHub and clone it locally.
2. **Create a Profile JSON**: Create a new file `profiles/IND-META-2026-YOUR-TOOL-NAME.json`.
3. **Fill Canonical Schema Fields (19 Fields)**: Ensure your JSON strictly adheres to the 19 required schema fields:

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
  "tier": "Tier 1",
  "costLabel": "≤ €30k",
  "status": "COMMUNITY BEITRAG",
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
    "omniverse": "Supported",
    "sovereignty": "100% EU Souverän",
    "openStandard": "OpenUSD / STEP AP242"
  },
  "deployment": {
    "effort": "Gering",
    "mode": "Cloud / On-Premise",
    "maturity": "Produktiv",
    "area": "Maschinenbau"
  },
  "staffing": "1x Specialist Engineer"
}
```

---

## 💶 2. Cost Tier Justification Guidelines

Cost tier estimates (`tier` and `costLabel`) provide financial guidance for industrial implementation:

- **Tier 1 (≤ €30k / Starter & Open Source)**: Low entry barrier, open-source software, mobile scanning hardware, or existing hardware reuse.
- **Tier 2 (≤ €100k / Skalierbar & Modular)**: Industrial-grade middleware (Eclipse BaSyx AAS, Visual Components), high-accuracy LiDAR hardware.
- **Tier 3 (> €100k / Enterprise OEM)**: Full-scale enterprise digital twins, hardware-in-the-loop VIBn (ISG-virtuos), NVIDIA Omniverse Nucleus, and real-time feldbus TSN synchronization.

---

## 🧪 3. Local Verification Before Submitting PR

Before pushing your branch and opening a Pull Request:

1. **Rebuild Manifest Deliverables**:
   ```bash
   npm test
   # or node scripts/generate_profiles.js
   ```
2. **Verify Zero JavaScript Syntax Errors**:
   ```bash
   node -c app.js && node -c scripts/generate_profiles.js && node -c scripts/generate_usecase_pages.js
   ```
3. **Open Browser and Check for 0 Console Errors**:
   Open `index.html`, `browser.html`, `usecases/index.html`, `architecture.html` in your web browser.

---

## ⚖️ License & Attribution

By contributing to this repository, you agree that your code contributions are licensed under the **MIT License** and documentation/data specs are licensed under **Creative Commons Attribution 4.0 International (CC-BY-4.0)**.
