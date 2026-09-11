# Industrial Metaverse System Architecture & 5-Layer Stack

> **Activity of the Reallabor 2.0 Project** at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.

---

## 🏛️ 1. The ARENA2036 5-Layer Industrial Metaverse Stack

The architecture categorizes numerous audited technologies, standards, and protocols into 5 distinct layers structured in a **1:1 decimal category system (Categories 1.1 to 5.2)** and a **linear horizontal left-to-right data progression flow**:

```
[ SCHICHT 1: Erfassung & OT (1.1–1.8) ] ──► [ SCHICHT 2: Geometrie & CAD (2.1–2.4) ] ──► [ SCHICHT 3: Middleware & AAS (3.1–3.3) ] ──► [ SCHICHT 4: Simulation & VIBn (4.1–4.4) ] ──► [ SCHICHT 5: Spatial Immersion (5.1–5.2) ]
  ├── 3D LiDAR & SLAM Scanners (1.1–1.5)      ├── Master CAD & BIM (2.1–2.2)               ├── Verwaltungsschale AAS (3.1)             ├── Multiphysik & CAE (4.1)                  ├── Spatial Computing & XR (5.2)
  └── OT Telemetry & IoT (1.7–1.8)            └── OpenUSD & STEP AP242 (2.4)              └── Sovereign Dataspaces EDC (3.2–3.3)      └── Virtuelle Inbetriebnahme (4.2–4.4)      └── Realtime Engines (5.1)
```

---

## 🔄 2. Sequential Left-to-Right Data Progression Logic

1. **Schicht 1: Erfassung & Sensorik** *(Categories 1.1–1.8)*: Erfassung der physischen Fabrikrealität via Sensorik, Terrestrik-, SLAM-Scans und direkte OT-Signalabgriffe (OPC UA, MQTT Sparkplug B).
2. **Schicht 2: Geometrie & CAD/BIM** *(Categories 2.1–2.4)*: Aufbereitung und Konvertierung von CAD/BIM-Konstruktionsdaten und Punktwolken in universelle 3D-Formate (OpenUSD, STEP AP242, glTF 2.0).
3. **Schicht 3: Middleware & Integration** *(Categories 3.1–3.3)*: Verknüpfung von 3D-Geometrie und Live-OT-Signalen in der Verwaltungsschale (Asset Administration Shell AAS) und souveränen Datenräumen (Eclipse EDC).
4. **Schicht 4: Simulation & Verhalten** *(Categories 4.1–4.4)*: Physikalische, kinematische Echtzeitsimulation (VIBn) zur Vorab-Absicherung von SPS-Steuerungscodes und KI-Roboterfähigkeiten.
5. **Schicht 5: Immersion & Interaktion** *(Categories 5.1–5.2)*: High-End-Rendering und kollaborative Interaktion in WebXR- und XR/Spatial Computing-Umgebungen.

---

## 💾 3. Single Source of Truth & Data Pipeline Architecture

The application is 100% JSON-driven without external database dependencies:

```
taxonomy.config.json            (canonical 5-layer / 21-category taxonomy — SINGLE SOURCE)
profiles/*.json                 (91 canonical technology profile JSON specifications)
usecases/[slug]/usecase.json    (6 canonical Baukasten Use Case specifications & media assets)
       │
       ▼ [node scripts/generate_profiles.js & scripts/generate_usecase_pages.js]
data/
   ├── index.json             (JSON manifest for HTTP fetch execution on web servers)
   └── index_data.js          (Window wrapper fallback for zero-CORS local file:// protocol)
usecases/
   ├── index.html             (Auto-generated Use Cases hub page)
   └── [slug]/index.html      (Auto-generated standalone HTML page per Use Case)
```

---

## ⚙️ 4. Deployment & Zero-CORS Compatibility

All web views (`index.html`, `guide.html`, `browser.html`, `usecases/index.html`, `architecture.html`, `impressum.html`) feature dual-mode data loading:
1. **HTTP/HTTPS Mode**: Dynamically fetches `data/index.json` and individual `profiles/*.json`.
2. **Local `file://` Mode**: Automatically falls back to `window.INDEX_DATA` and `window.PROFILES_DATA` serialized in `data/index_data.js`, ensuring zero CORS errors when opened directly from disk.

---

## 🏛️ 5. Open Standards Foundation

The architecture deliberately avoids custom proprietary protocols or lock-in frameworks, relying 100% on established international industrial open standards:

- **AAS (IEC 63278 / Verwaltungsschale)**: Digital Twin & Digital Product Passport standard.
- **OPC UA (IEC 62541) & MQTT Sparkplug B**: Universal OT data communication.
- **OpenUSD (Pixar/NVIDIA AOUSD) & glTF 2.0 (Khronos Group)**: Universal 3D scene description.
- **STEP AP242 (ISO 10303) & JT (ISO 14306)**: Mechanical CAD exchange standards.
- **Eclipse Dataspace Connector (EDC)**: Sovereign data space interoperability (Catena-X / Manufacturing-X).
- **WebXR Device API**: W3C browser-native spatial computing standard.
