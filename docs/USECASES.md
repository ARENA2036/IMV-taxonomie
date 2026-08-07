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
2. **Tier 2 (≤ €100k / Industrieller Mittelstand)**: Industrial-grade middleware (Eclipse BaSyx AAS, Visual Components), high-accuracy LiDAR hardware, and AR worker assistance.
3. **Tier 3 (> €100k / Enterprise OEM)**: Full-scale enterprise digital twins, hardware-in-the-loop VIBn (ISG-virtuos), NVIDIA Omniverse Nucleus, and real-time feldbus TSN synchronization.

---

## 🤝 3. Contributing New Use Cases via GitHub PR

New Use Cases can be contributed by adding a JSON file in `usecases/` adhering to the standard schema:

```json
{
  "id": "UC-07-NEW-USECASE",
  "title": "Use Case Title",
  "tier": "Tier 1 | Tier 2 | Tier 3",
  "tierLabel": "Tier Description",
  "shortDesc": "Implementation summary...",
  "goal": "Qualitative operational benefit indicator...",
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

After adding a JSON file, run `node scripts/generate_profiles.js` and open a Pull Request.
