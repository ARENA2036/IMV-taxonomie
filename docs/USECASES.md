# Industrial Metaverse Use Cases & Composite Architecture

> **Activity of the Reallabor 2.0 Project** at the **ARENA2036 Research Campus**.

---

## 🗺️ 1. Baukasten Use Case Concept (Composite Principle)

Because no single "one-size-fits-all" software monolith exists for industrial digital twins, specific architectures are **composed** across the 5 ARENA2036 layers. Each Use Case specification maps concrete technology `refCode`s to the 5 layers:

- **UC-01**: Digitales Shopfloor-Incident-Management (*Tier 1*)
- **UC-02**: Virtuelle Fabrikbegehung & Asset-Tagging via WebXR (*Tier 1*)
- **UC-03**: AR-gestützte Werkerassistenz mit IoT-Echtzeitdaten (*Tier 2*)
- **UC-04**: Punktwolken-Vergleich für die Fabrik-Layoutplanung (*Tier 2*)
- **UC-05**: Synthetische Datengenerierung & Roboter-KI-Training (*Tier 3*)
- **UC-06**: Bi-direktionaler Echtzeit-Digitaler-Zwilling einer Produktionslinie (*Tier 3*)

---

## 💶 2. Cost Tier Classifications

1. **Tier 1 (≤ €30k / Starter & Open Source)**: Low entry barrier, open-source software, standard mobile scanning hardware, or existing hardware reuse.
2. **Tier 2 (≤ €100k / Skalierbar & Modular)**: Industrial-grade middleware (Eclipse BaSyx AAS, Visual Components), high-accuracy LiDAR hardware, and AR worker assistance.
3. **Tier 3 (> €100k / Enterprise OEM)**: Full-scale enterprise digital twins, hardware-in-the-loop VIBn (ISG-virtuos), NVIDIA Omniverse Nucleus, and real-time feldbus TSN synchronization.

> [!NOTE]
> **Open Standards Foundation**: All Use Cases are composed strictly using international open standards (AAS IEC 63278, OpenUSD, glTF 2.0, OPC UA, STEP AP242, EDC) to protect against vendor lock-in.

---

## 🤝 3. Contributing New Use Cases via GitHub PR

Every Use Case lives in its own dedicated directory in `usecases/[slug]/`:

```
usecases/
  ├── uc-07-new-scenario/
  │     ├── usecase.json        <- Canonical JSON specification
  │     ├── index.html          <- Auto-generated static page
  │     └── assets/             <- Local images, diagrams & media assets
```

New Use Cases can be contributed by creating a new directory in `usecases/[slug]/` with a `usecase.json` file adhering to the extended schema:

```json
{
  "id": "UC-07-NEW-USECASE",
  "slug": "uc-07-new-usecase",
  "title": "Use Case Title",
  "subtitle": "Short German Subtitle",
  "tier": "Tier 1 | Tier 2 | Tier 3",
  "tierLabel": "Tier Description",
  "shortDesc": "Implementation summary...",
  "goal": "Qualitative operational benefit indicator...",
  "extendedDoc": {
    "overview": "Detailed German overview...",
    "keyHighlights": ["Highlight 1"],
    "prerequisites": ["Prerequisite 1"],
    "timeframe": "1–2 Weeks"
  },
  "kpis": [
    { "label": "Metric Name", "value": "-50%" }
  ],
  "media": {
    "youtube": {
      "id": "YOUTUBE_ID",
      "title": "Video Title",
      "caption": "Video Caption"
    },
    "gallery": [
      {
        "url": "./assets/image.jpg",
        "caption": "Image Caption",
        "alt": "Alt text"
      }
    ]
  },
  "flow": [
    {
      "layer": "1",
      "layerTitle": "Schicht 1: Erfassung",
      "refCode": "IND-META-2026-TOOL-REF",
      "nodeName": "Tool Name",
      "role": "Role description"
    }
  ]
}
```

After adding a Use Case directory, run `npm run build` (`node scripts/generate_profiles.js`) to automatically compile the static `usecases/[slug]/index.html` page and update `usecases/index.html`. Then open a Pull Request.
