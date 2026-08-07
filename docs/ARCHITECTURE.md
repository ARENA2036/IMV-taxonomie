# Industrial Metaverse System Architecture & 5-Layer Stack

> **Activity of the Reallabor 2.0 Project** at the **ARENA2036 Research Campus**, funded by the **Ministry of Economic Affairs, Labour and Tourism Baden-Württemberg**.

---

## 🏛️ 1. The ARENA2036 5-Layer Industrial Metaverse Stack

The architecture categorizes 91 audited technologies, standards, and protocols into 5 distinct layers:

```
[ SCHICHT 5: Räumliche Immersion & Rendering ]
  ├── Realtime 3D Engines (Unreal Engine 5, Unity, Godot)
  └── Spatial Computing & XR Hardware (Vision Pro, Meta Quest 3, Varjo XR-4)
       ▲
[ SCHICHT 4: Simulation & Virtuelle Inbetriebnahme ]
  ├── Multiphysics & CAE (Ansys, Siemens Simcenter)
  └── Virtual Commissioning & Robotics (ISG-virtuos, Visual Components, Isaac Sim)
       ▲
[ SCHICHT 3: Semantische Middleware & Datenräume ]
  ├── Asset Administration Shell (Eclipse BaSyx AAS)
  └── Sovereign Dataspaces (Eclipse Dataspace Components EDC)
       ▲
[ SCHICHT 2: Geometrie & CAD-Pre-Processing ]
  ├── Master CAD / BIM (Siemens NX, PTC Creo, Autodesk Revit)
  └── Open 3D Interchange Formats (OpenUSD, STEP AP242, JT ISO 14306, glTF 2.0)
       ▲
[ SCHICHT 1: Erfassung & OT-Datenerfassung ]
  ├── 3D LiDAR & SLAM Scanners (FARO Orbis, Leica RTC360, NavVis VLX 3)
  └── Industrial Telemetry & Fieldbuses (OPC UA, MQTT Sparkplug B, PROFINET TSN)
```

---

## 💾 2. Single Source of Truth & Data Pipeline Architecture

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

## ⚙️ 3. Deployment & Zero-CORS Compatibility

All web views (`index.html`, `browser.html`, `examples.html`, `architecture.html`, `impressum.html`) feature dual-mode data loading:
1. **HTTP/HTTPS Mode**: Dynamically fetches `data/index.json` and individual `profiles/*.json`.
2. **Local `file://` Mode**: Automatically falls back to `window.INDEX_DATA` and `window.PROFILES_DATA` serialized in `data/index_data.js`, ensuring zero CORS errors when opened directly from disk.
