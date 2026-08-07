# Industrial Metaverse System Architecture & 5-Layer Stack

> **Activity of the Reallabor 2.0 Project** at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.

---

## 🏛️ 1. The ARENA2036 5-Layer Industrial Metaverse Stack

The architecture categorizes 91 audited technologies, standards, and protocols into 5 distinct layers structured in a **linear horizontal left-to-right data progression flow**:

```
[ SCHICHT 1: Erfassung & OT ] ──► [ SCHICHT 2: Geometrie & CAD ] ──► [ SCHICHT 3: Middleware & AAS ] ──► [ SCHICHT 4: Simulation & VIBn ] ──► [ SCHICHT 5: Spatial Immersion ]
  ├── 3D LiDAR & SLAM Scanners     ├── Master CAD & BIM (NX, Creo)      ├── Verwaltungsschale (Eclipse AAS)   ├── Multiphysik & CAE (Ansys)           ├── Spatial Computing & XR (Vision Pro)
  └── OT Telemetry (OPC UA, MQTT)  └── OpenUSD, STEP AP242, JT ISO      └── Sovereign Dataspaces (EDC)        └── Virtuelle Inbetriebnahme (virtuos)  └── Realtime Engines (Unreal 5, RTX)
```

---

## 🔄 2. Sequential Left-to-Right Data Progression Logic

1. **Schicht 1 (Erfassung & OT-Datenerfassung)**: Erfassung der physischen Fabrikrealität via Sensorik, Terrestrik-, SLAM-Scans und direkte OT-Signalabgriffe (OPC UA, MQTT Sparkplug B).
2. **Schicht 2 (Geometrie & CAD-Pre-Processing)**: Aufbereitung und Konvertierung von CAD/BIM-Konstruktionsdaten und Punktwolken in universelle 3D-Formate (OpenUSD, STEP AP242, glTF 2.0).
3. **Schicht 3 (Semantische Middleware & Datenräume)**: Verknüpfung von 3D-Geometrie und Live-OT-Signalen in der Verwaltungsschale (Asset Administration Shell AAS) und souveränen Datenräumen (Eclipse EDC).
4. **Schicht 4 (Simulation & Virtuelle Inbetriebnahme)**: Physikalische, kinematische Echtzeitsimulation (VIBn) zur Vorab-Absicherung von SPS-Steuerungscodes und KI-Roboterfähigkeiten.
5. **Schicht 5 (Räumliche Immersion & Rendering)**: High-End-Rendering und kollaborative Interaktion in WebXR- und XR/Spatial Computing-Umgebungen.

---

## 💾 3. Single Source of Truth & Data Pipeline Architecture

The application is 100% JSON-driven without external database dependencies:

```
profiles/*.json   (91 canonical technology profile JSON specifications)
usecases/*.json   (6 canonical Baukasten Use Case specifications)
       │
       ▼ [node scripts/generate_profiles.js]
data/
   ├── index.json       (JSON manifest for HTTP fetch execution on web servers)
   └── index_data.js    (Window wrapper fallback for zero-CORS local file:// protocol)
```

---

## ⚙️ 4. Deployment & Zero-CORS Compatibility

All web views (`index.html`, `browser.html`, `examples.html`, `architecture.html`, `impressum.html`) feature dual-mode data loading:
1. **HTTP/HTTPS Mode**: Dynamically fetches `data/index.json` and individual `profiles/*.json`.
2. **Local `file://` Mode**: Automatically falls back to `window.INDEX_DATA` and `window.PROFILES_DATA` serialized in `data/index_data.js`, ensuring zero CORS errors when opened directly from disk.
