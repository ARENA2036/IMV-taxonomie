/** Auto-generated static dataset for zero-CORS local execution */
window.INDEX_DATA = {
  "categories": [
    {
      "code": "1.1",
      "name": "Mobile & Wearable SLAM-Scanner",
      "desc": "Tragbare Mobile-Mapping-Systeme mit Echtzeit-SLAM.",
      "layer": "1"
    },
    {
      "code": "1.2",
      "name": "Terrestrisches Laserscanning (TLS)",
      "desc": "Hochpräzise stationäre 3D-Laserscanner.",
      "layer": "1"
    },
    {
      "code": "1.3",
      "name": "Autonome Drohnen & AMR-Roboter",
      "desc": "Autonome Erfassung per Drohnen und Roboterplattformen.",
      "layer": "1"
    },
    {
      "code": "1.4",
      "name": "Handheld 3DGS & Photogrammetrie",
      "desc": "Handgeführte 3D-Gaussian-Splatting Scanner.",
      "layer": "1"
    },
    {
      "code": "1.5",
      "name": "360°-Erfassung & GIS-Kartierung",
      "desc": "Panorama-Bilddokumentation und Geoinformationssysteme.",
      "layer": "1"
    },
    {
      "code": "1.6",
      "name": "Spatial Perzeption & KI-Erkennung",
      "desc": "KI-gestützte Objekt- und Raumsegmentierung.",
      "layer": "1"
    },
    {
      "code": "1.7",
      "name": "OT & Sensorik-Feldbusse",
      "desc": "Operative Feldbus-Systeme und SPS-Kommunikation.",
      "layer": "1"
    },
    {
      "code": "1.8",
      "name": "Industrial IoT-Protokolle",
      "desc": "Nachrichtenprotokolle für industrielle IoT-Netzwerke.",
      "layer": "1"
    },
    {
      "code": "2.1",
      "name": "Mechanisches CAD (MCAD)",
      "desc": "Parametrische 3D-CAD-Systeme für den Maschinen- und Fahrzeugbau.",
      "layer": "2"
    },
    {
      "code": "2.2",
      "name": "BIM, Bauwesen & Infrastruktur (AEC)",
      "desc": "Bauwerksdatenmodellierung für Fabrik- und Gebäudestrukturen.",
      "layer": "2"
    },
    {
      "code": "2.3",
      "name": "DCC & Generatives 3D-Design",
      "desc": "Digital Content Creation und prozedurale 3D-Modellierung.",
      "layer": "2"
    },
    {
      "code": "2.4",
      "name": "Datenformate & OpenUSD-Standards",
      "desc": "Offene Datenformate und Szenen-Spezifikationen.",
      "layer": "2"
    },
    {
      "code": "3.1",
      "name": "Verwaltungsschale & Zwillings-Standards",
      "desc": "Asset Administration Shell (AAS) und Interoperabilitäts-Standards.",
      "layer": "3"
    },
    {
      "code": "3.2",
      "name": "KI-Datenmotoren & Pipeline-Bridges",
      "desc": "KI-Trainings-Pipelines und Datenbrücken.",
      "layer": "3"
    },
    {
      "code": "3.3",
      "name": "Enterprise Cloud-Zwillinge",
      "desc": "Skalierbare Cloud-Plattformen für digitale Zwillinge.",
      "layer": "3"
    },
    {
      "code": "4.1",
      "name": "CAE & Multiphysik-Simulation",
      "desc": "Numerische Berechnungen, FEM und Strömungsmechanik.",
      "layer": "4"
    },
    {
      "code": "4.2",
      "name": "Echtzeit Physik-Engines",
      "desc": "Physikalische Echtzeitsimulation für Kollision und Dynamik.",
      "layer": "4"
    },
    {
      "code": "4.3",
      "name": "Umwelt- & Strömungssimulation",
      "desc": "Klima-, Lüftungs- und Umweltbedingungssimulation.",
      "layer": "4"
    },
    {
      "code": "4.4",
      "name": "Robotik & Fabriksimulation",
      "desc": "Kinematik-, Roboter- und Materialfluss-Simulation.",
      "layer": "4"
    },
    {
      "code": "5.1",
      "name": "Echtzeit-3D & Spatial Engines",
      "desc": "Echtzeit-Rendering und 3D-Visualisierungs-Engines.",
      "layer": "5"
    },
    {
      "code": "5.2",
      "name": "Spatial XR & VR/AR Headsets",
      "desc": "Immersive Headsets und Spatial-Computing-Hardware.",
      "layer": "5"
    }
  ],
  "items": [
    {
      "refCode": "IND-META-2026-FARO-ORBIS",
      "categoryCode": "1.1",
      "categoryName": "Mobile & Wearable SLAM-Scanner",
      "name": "FARO Orbis Hybrid Mobile Scanner",
      "subtitle": "Hybrid-Mobile SLAM & Flash TLS Scanner",
      "vendor": "FARO Technologies Inc.",
      "hq": "Lake Mary, FL, USA / Stuttgart, DE (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://faro.com/orbis",
      "overview": "Hybrider mobiler SLAM- und statischer Laserscanner. Wechselt fliegend zwischen Gehen und hochdichtem Stativscannen.",
      "inputs": [
        "SLAM Telemetrie",
        "Static LiDAR Rays",
        "GCP"
      ],
      "outputs": [
        "E57",
        "LAS",
        "FARO Project File",
        "OpenUSD"
      ],
      "bridges": [
        "FARO Sphere XG",
        "Autodesk ReCap",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Extension Bridge",
        "sovereignty": "SOC2 / ISO Compliant",
        "openStandard": "E57 / LAS"
      }
    },
    {
      "refCode": "IND-META-2026-LEICA-BLK2GO",
      "categoryCode": "1.1",
      "categoryName": "Mobile & Wearable SLAM-Scanner",
      "name": "Leica BLK2GO Handheld SLAM Scanner",
      "subtitle": "Kompakter Handheld SLAM-Laserscanner",
      "vendor": "Leica Geosystems AG / Hexagon",
      "hq": "Heerbrugg, Schweiz (EU/EFTA)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://leica-geosystems.com/blk2go",
      "overview": "Kompakter handgeführter Mobile-SLAM-Scanner mit 2-Achs-LiDAR und Mehrkamera-System zur schnellen Raumdokumentation.",
      "inputs": [
        "GrandSLAM Raw Stream"
      ],
      "outputs": [
        "E57",
        "LGS (Leica Format)",
        "LAS",
        "OpenUSD"
      ],
      "bridges": [
        "Leica Cyclone REGISTER 360",
        "Hexagon HxDR",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "LGS/E57 Importer",
        "sovereignty": "Schweizer Datensicherheit",
        "openStandard": "E57"
      }
    },
    {
      "refCode": "IND-META-2026-NAVVIS-VLX3",
      "categoryCode": "1.1",
      "categoryName": "Mobile & Wearable SLAM-Scanner",
      "name": "NavVis VLX 3 / NavVis IVION",
      "subtitle": "Wearable Mobile Mapping System mit Echtzeit-SLAM",
      "vendor": "NavVis GmbH",
      "hq": "München, Deutschland (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EMPFOHLENES MAPPING HARDWARE",
      "url": "https://navvis.com/vlx-3",
      "overview": "Wearables Mobile-SLAM-System mit zwei Multi-Layer-LiDAR-Sensoren und 4 HD-Kameras. Erfasst Bestandskonstruktionen (Brownfield) in Schrittgeschwindigkeit mit hoher Genauigkeit.",
      "inputs": [
        "Passpunkte (GCP)",
        "Raw SLAM Telemetrie"
      ],
      "outputs": [
        "E57 Punktwolke",
        "LAS/LAZ",
        "NavVis IVION Webformat",
        "OpenUSD (.usd)"
      ],
      "bridges": [
        "NavVis IVION",
        "Autodesk Revit",
        "NVIDIA Omniverse Point Cloud Extension"
      ],
      "compliance": {
        "omniverse": "Point Cloud Extension",
        "sovereignty": "100% EU DSGVO (München)",
        "openStandard": "E57 / LAS"
      }
    },
    {
      "refCode": "IND-META-2026-FARO-FOCUS",
      "categoryCode": "1.2",
      "categoryName": "Terrestrisches Laserscanning (TLS)",
      "name": "FARO Focus Series (Focus Premium / Core)",
      "subtitle": "Millimetergenauer terrestrischer 3D-Laserscanner",
      "vendor": "FARO Technologies Inc.",
      "hq": "Lake Mary, FL, USA / Stuttgart, DE (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "STANDARDIZIERT",
      "url": "https://faro.com/focus",
      "overview": "Branchenstandard unter den terrestrischen Stativ-Laserscannern. Liefert millimetergenaue 3D-Punktwolken für präzise Umbaumaßnahmen.",
      "inputs": [
        "Laser Phase Measurements",
        "GCP Target Points"
      ],
      "outputs": [
        "E57",
        "LAS",
        "FARO FLS",
        "OpenUSD"
      ],
      "bridges": [
        "FARO Sphere XG",
        "Autodesk Revit",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "E57 Bridge",
        "sovereignty": "SOC2 / ISO Compliant",
        "openStandard": "E57 / ASTM E2807"
      }
    },
    {
      "refCode": "IND-META-2026-LEICA-RTC360",
      "categoryCode": "1.2",
      "categoryName": "Terrestrisches Laserscanning (TLS)",
      "name": "Leica RTC360 / BLK360 / Cyclone",
      "subtitle": "High-Speed TLS mit VIS-Echtzeitregistrierung",
      "vendor": "Leica Geosystems AG / Hexagon",
      "hq": "Heerbrugg, Schweiz (EU/EFTA)",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "STANDARDIZIERT",
      "url": "https://leica-geosystems.com/rtc360",
      "overview": "Hochpräziser terrestrischer 3D-Laserscanner (RTC360). Erfasst 3D-Punktwolken und HDR-Panoramen in unter 45 Sekunden mit automatischer VIS-Echtzeitregistrierung.",
      "inputs": [
        "Raw RTC Laser Stream",
        "Passpunkt-Koordinaten"
      ],
      "outputs": [
        "E57",
        "LGS",
        "PTX",
        "LAS",
        "OpenUSD Stage"
      ],
      "bridges": [
        "Leica Cyclone",
        "Hexagon HxDR",
        "Autodesk Revit",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "LGS Bridge",
        "sovereignty": "Schweizer Datensicherheit",
        "openStandard": "E57 / ASTM E2807"
      }
    },
    {
      "refCode": "IND-META-2026-DEEPROBOTICS-M20",
      "categoryCode": "1.3",
      "categoryName": "Autonome Drohnen & AMR-Roboter",
      "name": "DEEP Robotics M20 Pro (IP66 Quadruped Robot)",
      "subtitle": "Autonomer 4-beiniger Inspektions-Laufroboter",
      "vendor": "DEEP Robotics Inc.",
      "hq": "Hangzhou, China",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "TESTBED",
      "url": "https://deeprobotics.cn",
      "overview": "Industrieller Laufroboter (IP66) für autonome Inspektionsläufe über Treppen, Gitterroste und unwegsames Werksgelände.",
      "inputs": [
        "ROS 2 Control Topics",
        "Navigation Waypoints"
      ],
      "outputs": [
        "ROS 2 Telemetrie",
        "RTSP Video",
        "3D SLAM Mesh"
      ],
      "bridges": [
        "ROS 2 DDS",
        "NVIDIA Isaac Sim",
        "Collectu Data Engine"
      ],
      "compliance": {
        "omniverse": "ROS 2 Native Bridge",
        "sovereignty": "IP66 Zertifiziert",
        "openStandard": "ROS 2 DDS"
      }
    },
    {
      "refCode": "IND-META-2026-FLYABILITY-ELIOS3",
      "categoryCode": "1.3",
      "categoryName": "Autonome Drohnen & AMR-Roboter",
      "name": "Flyability Elios 3 (Indoor Inspection Drone)",
      "subtitle": "Kollisionstolerante Hallen- & Tankdrohne",
      "vendor": "Flyability SA",
      "hq": "Lausanne, Schweiz (EU/EFTA)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EMPFOHLEN",
      "url": "https://flyability.com/elios-3",
      "overview": "Kollisionstolerante Hallendrohne im Käfig für Inspektionen in engen Behältern, Kaminen und unter Hallendächern ohne GPS.",
      "inputs": [
        "Indoor SLAM Telemetry",
        "Thermal Stream"
      ],
      "outputs": [
        "E57 Point Cloud",
        "LAS",
        "Flyability 3D Model"
      ],
      "bridges": [
        "FARO Sphere XG",
        "Bentley iTwin",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "E57 Bridge",
        "sovereignty": "Schweizer Sicherheitsstandard",
        "openStandard": "E57"
      }
    },
    {
      "refCode": "IND-META-2026-LEICA-BLK2FLY",
      "categoryCode": "1.3",
      "categoryName": "Autonome Drohnen & AMR-Roboter",
      "name": "Leica BLK2FLY Autonomous Flying LiDAR",
      "subtitle": "Autonome Flugdrohne mit 3D-LiDAR-Scanner",
      "vendor": "Leica Geosystems AG / Hexagon",
      "hq": "Heerbrugg, Schweiz (EU/EFTA)",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "EVALUIERT",
      "url": "https://leica-geosystems.com/blk2fly",
      "overview": "Autonome Flugdrohne mit LiDAR-Scanner. Erfasst Dächer, Fassaden und hochgelegene Rohrbrücken vollautomatisch ohne Gerüstbau.",
      "inputs": [
        "GNSS Telemetrie",
        "LiDAR Stream"
      ],
      "outputs": [
        "E57",
        "LGS",
        "LAS",
        "OpenUSD"
      ],
      "bridges": [
        "Hexagon HxDR",
        "Leica Cyclone",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Extension Bridge",
        "sovereignty": "EASA zertifiziert",
        "openStandard": "E57"
      }
    },
    {
      "refCode": "IND-META-2026-ARTEC3D-STUDIO",
      "categoryCode": "1.4",
      "categoryName": "Handheld 3DGS & Photogrammetrie",
      "name": "Artec 3D Cloud / Studio (Leo & Eva)",
      "subtitle": "Messtechnischer 3D-Handscanner für Reverse Engineering",
      "vendor": "Artec 3D",
      "hq": "Luxemburg (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "STANDARDIZIERT",
      "url": "https://artec3d.com",
      "overview": "Hochpräzise Handscanner (Artec Leo/Eva) für Reverse Engineering und Qualitätskontrolle mit Sub-Millimeter-Genauigkeit.",
      "inputs": [
        "Structured Light Rays",
        "Blue Laser Lines"
      ],
      "outputs": [
        "STEP",
        "IGES",
        "OBJ",
        "STL",
        "OpenUSD (.usd)"
      ],
      "bridges": [
        "SolidWorks",
        "Geomagic Design X",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "USD Exporter",
        "sovereignty": "100% EU Souverän (Luxemburg)",
        "openStandard": "STEP / STL"
      }
    },
    {
      "refCode": "IND-META-2026-NIANTIC-SCANIVERSE",
      "categoryCode": "1.4",
      "categoryName": "Handheld 3DGS & Photogrammetrie",
      "name": "Scaniverse (Niantic Spatial 3DGS)",
      "subtitle": "Mobile 3D Gaussian Splatting App",
      "vendor": "Niantic Inc.",
      "hq": "San Francisco, CA, USA",
      "tier": "Tier 1",
      "costLabel": "Kostenfrei / €0",
      "status": "EMPFOHLEN",
      "url": "https://scaniverse.com",
      "overview": "Kostenlose mobile 3D-Erfassungs-App auf Basis von 3D Gaussian Splatting. Nutzt Smartphones mit LiDAR für schnelles Requisiten-Scannen.",
      "inputs": [
        "Mobile LiDAR Rays",
        "Video Camera Stream"
      ],
      "outputs": [
        "SPZ",
        "PLY",
        "glTF 2.0",
        "USDZ"
      ],
      "bridges": [
        "Blender 3D",
        "WebXR Viewers",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "USDZ Native",
        "sovereignty": "Mobile App Standard",
        "openStandard": "glTF / USDZ / PLY"
      }
    },
    {
      "refCode": "IND-META-2026-XGRIDS-PORTALCAM",
      "categoryCode": "1.4",
      "categoryName": "Handheld 3DGS & Photogrammetrie",
      "name": "XGRIDS Portalcam & Studio (LiDAR + 3DGS)",
      "subtitle": "Handgeführter LiDAR + 3D Gaussian Splatting Scanner",
      "vendor": "XGRIDS Technology Inc.",
      "hq": "Shenzhen, China",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "TOP FOTOREALISMUS",
      "url": "https://xgrids.com",
      "overview": "Handgeführter 3D-Scanner, der LiDAR, Kameras und 3D Gaussian Splatting (3DGS) verbindet, um fotorealistische 3D-Abbilder spiegelnder Objekte zu erstellen.",
      "inputs": [
        "LiDAR Stream",
        "4K Video",
        "GCP Passpunkte"
      ],
      "outputs": [
        "PLY (3DGS / Mesh)",
        "OpenUSD (.usd)",
        "E57",
        "LAS"
      ],
      "bridges": [
        "NVIDIA Omniverse 3DGS Extension",
        "Unreal Engine 5",
        "Blender 3D"
      ],
      "compliance": {
        "omniverse": "USD & PLY Export",
        "sovereignty": "Lokale Desktop-Verarbeitung",
        "openStandard": "OpenUSD / PLY"
      }
    },
    {
      "refCode": "IND-META-2026-AUTODESK-RECAP",
      "categoryCode": "1.5",
      "categoryName": "360°-Erfassung & GIS-Kartierung",
      "name": "Autodesk ReCap Pro",
      "subtitle": "Punktwolken-Aufbereitung & Photogrammetrie",
      "vendor": "Autodesk Inc.",
      "hq": "San Francisco, CA, USA",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EVALUIERT",
      "url": "https://autodesk.com/recap",
      "overview": "Punktwolken-Software zum Bereinigen, Beschneiden und Umwandeln roher Scans in das Autodesk RCS/RCP-Format.",
      "inputs": [
        "E57",
        "LAS",
        "PTX",
        "Drone Photos"
      ],
      "outputs": [
        "RCS",
        "RCP",
        "OBJ",
        "OpenUSD"
      ],
      "bridges": [
        "Autodesk Revit",
        "Inventor",
        "AutoCAD",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "USD Exporter",
        "sovereignty": "SOC2 Compliant",
        "openStandard": "E57 / OBJ"
      }
    },
    {
      "refCode": "IND-META-2026-CESIUM-3DTILES",
      "categoryCode": "1.5",
      "categoryName": "360°-Erfassung & GIS-Kartierung",
      "name": "Cesium (3D Tiles Streaming Platform)",
      "subtitle": "OGC 3D Tiles Streaming für Geodaten",
      "vendor": "Cesium GS Inc. / Bentley",
      "hq": "Philadelphia, PA, USA",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "STANDARDIZIERT",
      "url": "https://cesium.com",
      "overview": "Offene Plattform zum Streaming riesiger 3D-Geodaten und 3D-Tiles-Datensätze in Webbrowser und Echtzeit-Engines.",
      "inputs": [
        "LAS",
        "E57",
        "KML",
        "GeoTIFF",
        "CityGML",
        "OpenUSD"
      ],
      "outputs": [
        "3D Tiles (B3DM/PNTS)",
        "Quantized Mesh",
        "WebGL"
      ],
      "bridges": [
        "NVIDIA Omniverse",
        "Unreal Engine 5",
        "ESRI ArcGIS"
      ],
      "compliance": {
        "omniverse": "3D Tiles Plugin Native",
        "sovereignty": "OGC Open Standard",
        "openStandard": "3D Tiles / glTF"
      }
    },
    {
      "refCode": "IND-META-2026-ESRI-ARCGIS",
      "categoryCode": "1.5",
      "categoryName": "360°-Erfassung & GIS-Kartierung",
      "name": "ESRI ArcGIS Spatial Platform",
      "subtitle": "Enterprise GIS & Geoinformationssystem",
      "vendor": "ESRI Inc.",
      "hq": "Redlands, CA, USA / EU Support",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "STANDARDIZIERT",
      "url": "https://esri.com/arcgis",
      "overview": "Marktführendes Geoinformationssystem (GIS) zur Verwaltung von Standortdaten, Werksnetzen und regionaler Infrastruktur.",
      "inputs": [
        "Shapefiles",
        "Geodatabase",
        "IFC",
        "DWG",
        "Satellite Data"
      ],
      "outputs": [
        "I3S (Indexed 3D Scene Layers)",
        "GeoJSON",
        "Web Maps"
      ],
      "bridges": [
        "Autodesk Construction Cloud",
        "NVIDIA Omniverse",
        "SAP HANA GIS"
      ],
      "compliance": {
        "omniverse": "ArcGIS Extension",
        "sovereignty": "ISO 19100 Series",
        "openStandard": "I3S / OGC"
      }
    },
    {
      "refCode": "IND-META-2026-FARO-SPHERE",
      "categoryCode": "1.5",
      "categoryName": "360°-Erfassung & GIS-Kartierung",
      "name": "FARO Sphere XG (Cloud Spatial Ecosystem)",
      "subtitle": "Zentrale Reality-Capture Cloud-Plattform",
      "vendor": "FARO Technologies Inc.",
      "hq": "Lake Mary, FL, USA / Stuttgart, DE (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://faro.com/sphere",
      "overview": "Zentrale Cloud-Plattform, die statische Laserscans, Mobile-SLAM-Daten und 360°-Fotos in einer gemeinsamen Umgebung zusammenführt.",
      "inputs": [
        "FLS",
        "E57",
        "360 Photos",
        "CAD STEP"
      ],
      "outputs": [
        "E57",
        "Web 3D Stream",
        "Deviation Heatmaps"
      ],
      "bridges": [
        "Autodesk Revit",
        "Navisworks",
        "NVIDIA Omniverse Cloud"
      ],
      "compliance": {
        "omniverse": "Cloud Stream Extension",
        "sovereignty": "SOC2 / ISO Compliant",
        "openStandard": "E57 / STEP"
      }
    },
    {
      "refCode": "IND-META-2026-MATTERPORT-PRO3",
      "categoryCode": "1.5",
      "categoryName": "360°-Erfassung & GIS-Kartierung",
      "name": "Matterport Pro3 & 360 Spatial Platform",
      "subtitle": "360° LiDAR-Kamera & Virtuelle Rundgänge",
      "vendor": "Matterport Inc.",
      "hq": "Sunnyvale, CA, USA",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "STANDARD WALKTHROUGH",
      "url": "https://matterport.com",
      "overview": "Führende Plattform für virtuelle 360°-Begehungen. Nutzt die Pro3 LiDAR-Kamera für schnelle Rundgänge in Innen- und Außenbereichen.",
      "inputs": [
        "Pro3 LiDAR Scan",
        "Sphärische 360° Fotos"
      ],
      "outputs": [
        "E57 Point Cloud",
        "RVT (Revit BIM)",
        "DWG",
        "OBJ"
      ],
      "bridges": [
        "Autodesk Construction Cloud",
        "AWS IoT TwinMaker",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Connector Bridge",
        "sovereignty": "SOC2 / ISO 27001",
        "openStandard": "E57 / RVT"
      }
    },
    {
      "refCode": "IND-META-2026-ORB360",
      "categoryCode": "1.5",
      "categoryName": "360°-Erfassung & GIS-Kartierung",
      "name": "Orb360 Turntable System",
      "subtitle": "Automatisierte 360° Bauteil-Fotografie",
      "vendor": "Orb360 Technologies",
      "hq": "Deutschland (EU)",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EVALUIERT",
      "url": "https://orb360.tech",
      "overview": "Automatisierter Drehteller zur Erfassung kleiner Industrieteile für Ersatzteilkataloge und 3D-Web-Viewer.",
      "inputs": [
        "High-Res Kamera Fotos"
      ],
      "outputs": [
        "glTF 2.0",
        "OBJ",
        "Interactive Web HTML"
      ],
      "bridges": [
        "WooCommerce",
        "SAP Commerce Cloud",
        "Blender"
      ],
      "compliance": {
        "omniverse": "Web Standard Export",
        "sovereignty": "100% EU Souverän",
        "openStandard": "glTF 2.0"
      }
    },
    {
      "refCode": "IND-META-2026-EPIC-REALITYSCAN",
      "categoryCode": "1.5",
      "categoryName": "360°-Erfassung & GIS-Kartierung",
      "name": "RealityScan (Epic Games / Mobile)",
      "subtitle": "Kostenlose Mobile Photogrammetrie App",
      "vendor": "Epic Games Inc. / Capturing Reality",
      "hq": "Bratislava, Slowakei (EU)",
      "tier": "Tier 1",
      "costLabel": "Kostenfrei / €0",
      "status": "EVALUIERT",
      "url": "https://capturingreality.com/realityscan",
      "overview": "Mobile Photogrammetrie-App, die Fotoserie auf dem Smartphone in 3D-Modelle umwandelt.",
      "inputs": [
        "Smartphone Kamera Fotos"
      ],
      "outputs": [
        "glTF 2.0",
        "USDZ",
        "OBJ",
        "FBX"
      ],
      "bridges": [
        "Unreal Engine 5",
        "Sketchfab",
        "Blender"
      ],
      "compliance": {
        "omniverse": "USDZ Export",
        "sovereignty": "100% EU Entwicklung",
        "openStandard": "glTF / USDZ"
      }
    },
    {
      "refCode": "IND-META-2026-META-SAM3D",
      "categoryCode": "1.6",
      "categoryName": "Spatial Perzeption & KI-Erkennung",
      "name": "Meta Segment Anything 3D (SAM 3D)",
      "subtitle": "Zero-Shot KI-Segmentierung für 3D-Punktwolken",
      "vendor": "Meta AI Research",
      "hq": "Menlo Park, CA, USA",
      "tier": "Tier 1",
      "costLabel": "Open Source / €0",
      "status": "EMPFOHLEN",
      "url": "https://github.com/facebookresearch/segment-anything-3d",
      "overview": "KI-Modell zur automatischen Segmentierung roher Punktwolken und Meshes in einzelne Objekte (Rohre, Wände, Roboter).",
      "inputs": [
        "Point Clouds (E57/LAS)",
        "OpenUSD Stage",
        "RGB-D Frames"
      ],
      "outputs": [
        "Segmented USD Prims",
        "Bounding Boxes"
      ],
      "bridges": [
        "NVIDIA Omniverse Nucleus",
        "Blender",
        "PyTorch"
      ],
      "compliance": {
        "omniverse": "Semantic Schema Native",
        "sovereignty": "Apache 2.0 Open Source",
        "openStandard": "OpenUSD Semantic Schema"
      }
    },
    {
      "refCode": "IND-META-2026-RIIICO-AI",
      "categoryCode": "1.6",
      "categoryName": "Spatial Perzeption & KI-Erkennung",
      "name": "RIIICO (Factory AI Automated Layout)",
      "subtitle": "KI-Punktwolken-Segmentierung in 3D-CAD",
      "vendor": "RIIICO GmbH",
      "hq": "Düsseldorf, Deutschland (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EMPFOHLEN",
      "url": "https://riiico.com",
      "overview": "KI-Software, die rohe 3D-Punktwolken von Bestandsfabriken automatisch in parametrische CAD/BIM-Layouts und einzelne 3D-Objekte umwandelt.",
      "inputs": [
        "E57 Point Cloud",
        "NavVis Data",
        "Leica Scans"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "IFC",
        "STEP",
        "Autodesk Revit (.RVT)"
      ],
      "bridges": [
        "NVIDIA Omniverse",
        "Autodesk Revit",
        "Siemens NX"
      ],
      "compliance": {
        "omniverse": "USD Native Export",
        "sovereignty": "100% EU DSGVO (Deutschland)",
        "openStandard": "OpenUSD / IFC"
      }
    },
    {
      "refCode": "IND-META-2026-WAVEYE-RADAR",
      "categoryCode": "1.6",
      "categoryName": "Spatial Perzeption & KI-Erkennung",
      "name": "Waveye 4D Imaging Radar (Argus mmWave)",
      "subtitle": "Hochauflösende 4D-Radar Perzeption für AMRs",
      "vendor": "Waveye Inc.",
      "hq": "Palo Alto, USA / Stuttgart, Deutschland (EU)",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EMPFOHLENER 4D SENSOR",
      "url": "https://waveye.com",
      "overview": "Ultra-hochauflösender 4D-Imaging-Radarsensor (Argus) für die Roboterwahrnehmung. Generiert dichte 4D-Punktwolken inklusive Doppler-Geschwindigkeitsvektoren für autonome Systeme.",
      "inputs": [
        "Raw mmWave RF Signals",
        "Doppler Telemetrie"
      ],
      "outputs": [
        "4D Point Cloud (X, Y, Z, Velocity)",
        "ROS 2 PointCloud2 Topics"
      ],
      "bridges": [
        "ROS 2 DDS",
        "NVIDIA Isaac Sim / Lab",
        "DeepHub Flowcate"
      ],
      "compliance": {
        "omniverse": "ROS 2 Bridge",
        "sovereignty": "100% EU DSGVO-Konform",
        "openStandard": "ROS 2 DDS"
      }
    },
    {
      "refCode": "IND-META-2026-YOLO26-EDGE",
      "categoryCode": "1.6",
      "categoryName": "Spatial Perzeption & KI-Erkennung",
      "name": "YOLO26 Edge Vision & Object Tracking",
      "subtitle": "Echtzeit-KI-Objekterkennung für Shopfloor-Kameras",
      "vendor": "Ultralytics / Open Source",
      "hq": "Global Community",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "STANDARDIZIERT",
      "url": "https://ultralytics.com",
      "overview": "Echtzeit-Computer-Vision-Modell optimiert für 3D-Bounding-Boxen, Personen-Tracking und Sicherheitszonenüberwachung auf Edge-Geräten.",
      "inputs": [
        "RTSP Video Feeds",
        "USB Camera Streams"
      ],
      "outputs": [
        "JSON Bounding Box Data",
        "MQTT Telemetry",
        "ROS 2 Topics"
      ],
      "bridges": [
        "DeepStream SDK",
        "NVIDIA Omniverse",
        "Collectu Data Engine"
      ],
      "compliance": {
        "omniverse": "DeepStream Bridge",
        "sovereignty": "On-Premise Execution",
        "openStandard": "MQTT / ROS 2"
      }
    },
    {
      "refCode": "IND-META-2026-MODBUS-TCP",
      "categoryCode": "1.7",
      "categoryName": "OT & Sensorik-Feldbusse",
      "name": "Modbus TCP/RTU Protocol",
      "subtitle": "Legacy-Sensor- & Energiezähler-Protokoll",
      "vendor": "Modbus Organization",
      "hq": "Hopkinton, MA, USA / Global",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "LEGACY SUPPORT",
      "url": "https://modbus.org",
      "overview": "Industrie-Kommunikationsprotokoll aus dem Jahr 1979 zum Auslesen von Energiezählern, Temperaturmessern und Alt-SPSen.",
      "inputs": [
        "RS-485 Serial Signals",
        "TCP Packets"
      ],
      "outputs": [
        "Raw Register Values (Integer/Float)"
      ],
      "bridges": [
        "Collectu Engine",
        "Node-RED",
        "OPC UA Gateways"
      ],
      "compliance": {
        "omniverse": "IoT Edge Gateway",
        "sovereignty": "Royalty-Free Standard",
        "openStandard": "Modbus TCP"
      }
    },
    {
      "refCode": "IND-META-2026-MTCONNECT",
      "categoryCode": "1.7",
      "categoryName": "OT & Sensorik-Feldbusse",
      "name": "MTConnect Machine Standard",
      "subtitle": "Offener Standard für CNC-Werkzeugmaschinen",
      "vendor": "MTConnect Institute",
      "hq": "McLean, VA, USA",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "EVALUIERT",
      "url": "https://mtconnect.org",
      "overview": "Offenes Protokoll zum Extrahieren struktureller Daten aus CNC-Werkzeugmaschinen und Fräszentren in XML/REST-Formate.",
      "inputs": [
        "CNC Controller Memory",
        "Machine Sensors"
      ],
      "outputs": [
        "MTConnect XML Streams",
        "HTTP REST Responses"
      ],
      "bridges": [
        "Collectu Data Engine",
        "MES Systems",
        "Azure IoT"
      ],
      "compliance": {
        "omniverse": "Gateway to USD / AAS",
        "sovereignty": "ANSI Recognized Standard",
        "openStandard": "MTConnect XML"
      }
    },
    {
      "refCode": "IND-META-2026-OPC-UA",
      "categoryCode": "1.7",
      "categoryName": "OT & Sensorik-Feldbusse",
      "name": "OPC UA (IEC 62541 - Client/Server & PubSub)",
      "subtitle": "Herstellerunabhängiger OT-Kommunikationsstandard",
      "vendor": "OPC Foundation",
      "hq": "Scottsdale, AZ, USA / EU Office",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "CORE OT BACKBONE",
      "url": "https://opcfoundation.org",
      "overview": "Herstellerunabhängiges Protokoll für Industrie 4.0. Verbindet SPSen, CNCs und Roboter direkt mit dem 3D-Zwilling im Industrial Metaverse über semantische Companion Specifications.",
      "inputs": [
        "SPS-Variablen",
        "Sensor-Register",
        "Feldbus-Streams"
      ],
      "outputs": [
        "OPC UA XML NodeSets",
        "JSON PubSub Streams",
        "Binary Encoded Streams"
      ],
      "bridges": [
        "NVIDIA Omniverse Live Connect",
        "Siemens S7-1500",
        "Collectu Data Engine",
        "Azure IoT"
      ],
      "compliance": {
        "omniverse": "Native Telemetry Bridge",
        "sovereignty": "100% EU Industrie 4.0 Standard",
        "openStandard": "IEC 62541"
      }
    },
    {
      "refCode": "IND-META-2026-PROFINET-TSN",
      "categoryCode": "1.7",
      "categoryName": "OT & Sensorik-Feldbusse",
      "name": "PROFINET / TSN (Time-Sensitive Networking)",
      "subtitle": "Industrieller Echtzeit-Ethernet-Standard",
      "vendor": "PI (PROFIBUS & PROFINET International)",
      "hq": "Karlsruhe, Deutschland (EU)",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "STANDARDIZIERT",
      "url": "https://profibus.com",
      "overview": "Führender europäischer Echtzeit-Industrial-Ethernet-Standard. Garantiert in Kombination mit TSN deterministische Taktraten im Mikrosekundenbereich für die Fabrikautomatisierung.",
      "inputs": [
        "Ethernet Frames",
        "Sensorsignale"
      ],
      "outputs": [
        "PROFINET IO Telemetrie",
        "TSN Deterministische Streams"
      ],
      "bridges": [
        "Siemens S7 SPS",
        "ISG-Virtuos",
        "OPC UA PubSub over TSN"
      ],
      "compliance": {
        "omniverse": "Fieldbus Integration",
        "sovereignty": "100% EU Standard (IEC 61158)",
        "openStandard": "PROFINET / IEEE 802.1 TSN"
      }
    },
    {
      "refCode": "IND-META-2026-ROS2-DDS",
      "categoryCode": "1.7",
      "categoryName": "OT & Sensorik-Feldbusse",
      "name": "ROS / ROS 2 (DDS Inter-Robot Middleware)",
      "subtitle": "Open-Source Roboter-Betriebssystem & Middleware",
      "vendor": "Open Robotics (OSRF)",
      "hq": "Mountain View, CA, USA / Global Community",
      "tier": "Tier 1",
      "costLabel": "Open Source / €0",
      "status": "CORE ROBOTICS BACKBONE",
      "url": "https://ros.org",
      "overview": "Open-Source Roboter-Middleware auf Basis von Data Distribution Service (DDS) für die Zero-Copy-Kommunikation in autonomen Robotern und AMRs.",
      "inputs": [
        "Sensor Topics (LaserScan, Image, IMU)",
        "Action Goals"
      ],
      "outputs": [
        "Motor Velocity Commands (Twist)",
        "Joint Trajectories",
        "TF Transform Trees"
      ],
      "bridges": [
        "NVIDIA Isaac Sim/Lab",
        "Hugging Face LeRobot",
        "Gazebo",
        "Waveye Radar"
      ],
      "compliance": {
        "omniverse": "Native Isaac Sim Bridge",
        "sovereignty": "Open Source Standard",
        "openStandard": "OMG DDS Standard"
      }
    },
    {
      "refCode": "IND-META-2026-AMQP-PROTOCOL",
      "categoryCode": "1.8",
      "categoryName": "Industrial IoT-Protokolle",
      "name": "AMQP Enterprise Messaging",
      "subtitle": "Zuverlässiges Enterprise-Messaging für Cloud",
      "vendor": "OASIS Consortium",
      "hq": "Boston, MA, USA / Global",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "EVALUIERT",
      "url": "https://amqp.org",
      "overview": "Unternehmensgerechtes Messaging-Protokoll für transaktionssicheres Queuing, Routing und Punkt-zu-Punkt-Zustellung von Nachrichten.",
      "inputs": [
        "Telemetrie-Payloads",
        "ERP Events",
        "Alerts"
      ],
      "outputs": [
        "AMQP Packets",
        "Event Triggers"
      ],
      "bridges": [
        "Azure Digital Twins",
        "RabbitMQ",
        "ERP Systeme"
      ],
      "compliance": {
        "omniverse": "Cloud Bridge",
        "sovereignty": "ISO/IEC 19464",
        "openStandard": "AMQP 1.0"
      }
    },
    {
      "refCode": "IND-META-2026-MQTT-SPARKPLUG",
      "categoryCode": "1.8",
      "categoryName": "Industrial IoT-Protokolle",
      "name": "MQTT / Sparkplug B",
      "subtitle": "Leichtgewichtige IIoT Pub/Sub Serialisierung",
      "vendor": "Eclipse Foundation / OASIS",
      "hq": "Brüssel, Belgien (EU)",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "STANDARDIZIERT",
      "url": "https://sparkplug.eclipse.org",
      "overview": "Leichtgewichtiges Publish/Subscribe-Protokoll. Sparkplug B bietet Zustandskontrolle, Auto-Discovery von Datentags und strukturierte Protobuf-Payloads für IIoT-Netzwerke.",
      "inputs": [
        "Sensorsignale",
        "Edge Gateways",
        "SPS Tags"
      ],
      "outputs": [
        "Sparkplug B Protobuf Payloads",
        "JSON MQTT Topics"
      ],
      "bridges": [
        "Collectu Engine",
        "AWS IoT",
        "Azure Digital Twins",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Native IoT Connector",
        "sovereignty": "100% EU Governance (Eclipse)",
        "openStandard": "ISO/IEC 20922"
      }
    },
    {
      "refCode": "IND-META-2026-AUTODESK-FUSION",
      "categoryCode": "2.1",
      "categoryName": "Mechanisches CAD (MCAD)",
      "name": "Autodesk Fusion 360",
      "subtitle": "Cloud-CAD/CAM & Prototyping für Entwicklungsteams",
      "vendor": "Autodesk Inc.",
      "hq": "San Francisco, CA, USA",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EVALUIERT",
      "url": "https://autodesk.com/fusion-360",
      "overview": "Integrierte Cloud-Plattform für 3D-CAD, CAM, CAE und Leiterplatten-Design. Beliebt bei Fertigungsbetrieben, Hardware-Startups und Entwicklungsteams für schnelles Prototyping.",
      "inputs": [
        "F3D",
        "STEP",
        "IGES",
        "SolidWorks",
        "SAT"
      ],
      "outputs": [
        "OpenUSD (.usdz/.usd)",
        "glTF 2.0",
        "STEP",
        "STL"
      ],
      "bridges": [
        "Autodesk Fusion Team",
        "Autodesk Construction Cloud",
        "Blender"
      ],
      "compliance": {
        "omniverse": "Native Export",
        "sovereignty": "SOC2 / US Cloud PaaS",
        "openStandard": "glTF 2.0 / STEP"
      }
    },
    {
      "refCode": "IND-META-2026-CATIA-3DS",
      "categoryCode": "2.1",
      "categoryName": "Mechanisches CAD (MCAD)",
      "name": "Dassault CATIA V5 / 3DEXPERIENCE",
      "subtitle": "OEM High-End Class-A Surface Master Engine",
      "vendor": "Dassault Systèmes",
      "hq": "Vélizy-Villacoublay, Frankreich (EU)",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "EVALUIERT",
      "url": "https://3ds.com/catia",
      "overview": "Der weltweite De-facto-Branchenstandard der Luft-, Raumfahrt- und Automobilindustrie für hochkomplexe Class-A-Flächenmodellierung und Gesamtfahrzeugarchitektur.",
      "inputs": [
        "CATPart",
        "CATProduct",
        "STEP AP242",
        "IGES"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "STEP AP242",
        "3DXML"
      ],
      "bridges": [
        "3DEXPERIENCE Platform",
        "DELMIA",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Extension Bridge",
        "sovereignty": "100% EU Souverän (Frankreich)",
        "openStandard": "STEP AP242 / ISO 10303"
      }
    },
    {
      "refCode": "IND-META-2026-SOLIDWORKS",
      "categoryCode": "2.1",
      "categoryName": "Mechanisches CAD (MCAD)",
      "name": "Dassault SolidWorks",
      "subtitle": "Parametrisches 3D-CAD für den Mittelstand",
      "vendor": "Dassault Systèmes",
      "hq": "Vélizy-Villacoublay, Frankreich (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://solidworks.com",
      "overview": "Globale 3D-CAD-Standardsoftware für die parametrische Konstruktion im Maschinen- und Werkzeugbau. Weit verbreitet in der Zulieferindustrie und auf Shopfloors zur Anbindung an digitale Zwillinge.",
      "inputs": [
        "SLDPRT",
        "SLDASM",
        "STEP",
        "IGES",
        "Parasolid"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "STEP AP242",
        "glTF 2.0",
        "IGES"
      ],
      "bridges": [
        "3DEXPERIENCE Cloud",
        "NVIDIA Omniverse",
        "DELMIA"
      ],
      "compliance": {
        "omniverse": "Connector Plugin",
        "sovereignty": "EU Cloud (3DEXPERIENCE EU)",
        "openStandard": "STEP AP242 / glTF 2.0"
      }
    },
    {
      "refCode": "IND-META-2026-PTC-CREO",
      "categoryCode": "2.1",
      "categoryName": "Mechanisches CAD (MCAD)",
      "name": "PTC Creo Parametric",
      "subtitle": "High-Precision MCAD & Generative AI",
      "vendor": "PTC Inc.",
      "hq": "Boston, MA, USA",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "EVALUIERT",
      "url": "https://ptc.com/creo",
      "overview": "Hochpräzise parametrische MCAD-Suite für Schwermaschinenbau, Verteidigung und Fahrzeugtechnik mit tiefen KI-Generativfunktionen und Model-Based Definition (MBD).",
      "inputs": [
        "PRT",
        "ASM",
        "STEP AP242",
        "JT",
        "Inventor"
      ],
      "outputs": [
        "OpenUSD (.usda/.usdc)",
        "STEP AP242",
        "JT",
        "3MF"
      ],
      "bridges": [
        "PTC Windchill PLM",
        "PTC ThingWorx",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Connector Plugin",
        "sovereignty": "SOC2 / ISO 27001",
        "openStandard": "STEP AP242 / JT ISO"
      }
    },
    {
      "refCode": "IND-META-2026-PTC-ONSHAPE",
      "categoryCode": "2.1",
      "categoryName": "Mechanisches CAD (MCAD)",
      "name": "PTC Onshape",
      "subtitle": "Pure Cloud-Native Multi-User CAD",
      "vendor": "PTC Inc.",
      "hq": "Boston, MA, USA",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EVALUIERT",
      "url": "https://onshape.com",
      "overview": "Rein browserbasierte Cloud-CAD- und PDM-Plattform für die synchrone Multi-User-Bearbeitung von 3D-Modellen in Echtzeit.",
      "inputs": [
        "STEP",
        "IGES",
        "Parasolid",
        "SolidWorks",
        "STL"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "glTF 2.0",
        "STEP AP242",
        "OBJ"
      ],
      "bridges": [
        "PTC Arena PLM",
        "NVIDIA Omniverse Cloud",
        "WebXR"
      ],
      "compliance": {
        "omniverse": "Web Bridge / API Export",
        "sovereignty": "SOC2 / US Cloud",
        "openStandard": "STEP AP242 / glTF 2.0"
      }
    },
    {
      "refCode": "IND-META-2026-SIEMENS-NX",
      "categoryCode": "2.1",
      "categoryName": "Mechanisches CAD (MCAD)",
      "name": "Siemens NX CAD",
      "subtitle": "High-End OEM MCAD & OpenUSD Live-Kopplung",
      "vendor": "Siemens DISW",
      "hq": "Plano, USA / Deutschland (EU)",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "STANDARDIZIERT",
      "url": "https://plm.automation.siemens.com",
      "overview": "High-End MCAD-Plattform für hochkomplexe Baugruppen im Maschinen- und Fahrzeugbau. Dient als primärer Geometrie-Kernel für Automotive-, Luft- und Raumfahrt-OEMs mit nativer Live-Streaming-Anbindung an NVIDIA Omniverse.",
      "inputs": [
        "Parasolid (.x_t)",
        "JT ISO 14306",
        "STEP AP242",
        "CATPart"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "JT ISO 14306",
        "STEP AP242"
      ],
      "bridges": [
        "Siemens Teamcenter PLM",
        "NVIDIA Omniverse",
        "Tecnomatix Process Simulate"
      ],
      "compliance": {
        "omniverse": "Native Extension",
        "sovereignty": "100% EU DSGVO (GAIA-X)",
        "openStandard": "JT ISO / STEP AP242 / OpenUSD"
      }
    },
    {
      "refCode": "IND-META-2026-AUTODESK-CIVIL3D",
      "categoryCode": "2.2",
      "categoryName": "BIM, Bauwesen & Infrastruktur (AEC)",
      "name": "Autodesk Civil 3D",
      "subtitle": "Gelände- & Infrastruktur-BIM für Fabrikareale",
      "vendor": "Autodesk Inc.",
      "hq": "San Francisco, CA, USA",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://autodesk.com/civil-3d",
      "overview": "Infrastruktur- und Tiefbau-Software für die Erschließungsplanung, digitale Geländemodellierung und Trassierung von Fabrikarealen.",
      "inputs": [
        "DWG",
        "LandXML",
        "DEM",
        "Point Cloud (E57/LAS)"
      ],
      "outputs": [
        "IFC4 Civil",
        "LandXML",
        "DWG",
        "OpenUSD (.usd)"
      ],
      "bridges": [
        "ESRI ArcGIS",
        "Autodesk InfraWorks",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Extension Bridge",
        "sovereignty": "SOC2 / ISO Compliant",
        "openStandard": "LandXML / IFC Civil"
      }
    },
    {
      "refCode": "IND-META-2026-AUTODESK-REVIT",
      "categoryCode": "2.2",
      "categoryName": "BIM, Bauwesen & Infrastruktur (AEC)",
      "name": "Autodesk Revit",
      "subtitle": "BIM Master-System für digitale Fabrikgebäude",
      "vendor": "Autodesk Inc.",
      "hq": "San Francisco, CA, USA",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "STANDARDIZIERT",
      "url": "https://autodesk.com/revit",
      "overview": "Der globale Standard für Building Information Modeling (BIM). Generiert intelligente 3D-Gebäudemodelle mit architektonischen, strukturellen und TGA-Informationen.",
      "inputs": [
        "RVT",
        "IFC",
        "DWG",
        "Point Cloud (.RCS/.RCP)"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "IFC4 ISO 16739",
        "DWG",
        "FBX"
      ],
      "bridges": [
        "Autodesk Construction Cloud (ACC)",
        "NVIDIA Omniverse",
        "NavVis IVION"
      ],
      "compliance": {
        "omniverse": "Connector Plugin",
        "sovereignty": "ISO 19650 BIM Standard",
        "openStandard": "IFC4 / OpenUSD"
      }
    },
    {
      "refCode": "IND-META-2026-NEMETSCHEK-ALLPLAN",
      "categoryCode": "2.2",
      "categoryName": "BIM, Bauwesen & Infrastruktur (AEC)",
      "name": "Nemetschek Allplan / Vectorworks",
      "subtitle": "Europäisches OpenBIM-System für Fertigteilbau",
      "vendor": "Nemetschek Group",
      "hq": "München, Deutschland (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://allplan.com",
      "overview": "Europäische BIM-Plattform spezialisiert auf konstruktiven Ingenieurbau, Betonfertigteilplanung und hochpräzise Industriegebäude.",
      "inputs": [
        "IFC4",
        "DWG",
        "DGN",
        "Point Cloud (E57)"
      ],
      "outputs": [
        "IFC4 ISO 16739",
        "OpenUSD (.usd)",
        "PDF/DXF"
      ],
      "bridges": [
        "Bimplus Cloud",
        "Solibri Model Checker",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "OpenBIM Bridge",
        "sovereignty": "100% EU DSGVO (Deutschland)",
        "openStandard": "IFC4 / buildingSMART"
      }
    },
    {
      "refCode": "IND-META-2026-RHINO-GRASSHOPPER",
      "categoryCode": "2.2",
      "categoryName": "BIM, Bauwesen & Infrastruktur (AEC)",
      "name": "Rhino 3D + Grasshopper (Parametric AEC)",
      "subtitle": "Algorithmatisches 3D-Design & Prozedurale Geometrie",
      "vendor": "Robert McNeel & Associates",
      "hq": "Seattle, WA, USA",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EMPFOHLEN",
      "url": "https://rhino3d.com",
      "overview": "Fortgeschrittenes NURBS-Flächenmodellierungssystem gekoppelt mit Grasshopper für die visuelle Programmierung komplexer parametrischer Fabrikarchitekturen.",
      "inputs": [
        "3DM",
        "STEP",
        "IGES",
        "OBJ",
        "IFC",
        "Point Clouds"
      ],
      "outputs": [
        "OpenUSD (.usd/.usda)",
        "glTF 2.0",
        "STEP",
        "OBJ",
        "FBX"
      ],
      "bridges": [
        "NVIDIA Omniverse Connector",
        "Revit via Rhino.Inside",
        "Blender"
      ],
      "compliance": {
        "omniverse": "Native Extension",
        "sovereignty": "SOC2 Compliant",
        "openStandard": "STEP AP242 / glTF / OpenUSD"
      }
    },
    {
      "refCode": "IND-META-2026-TRIMBLE-SKETCHUP",
      "categoryCode": "2.2",
      "categoryName": "BIM, Bauwesen & Infrastruktur (AEC)",
      "name": "Trimble SketchUp",
      "subtitle": "Schnelle 3D-Konzeptplanung & Fabrik-Layouting",
      "vendor": "Trimble Inc.",
      "hq": "Westminster, CO, USA",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EVALUIERT",
      "url": "https://sketchup.com",
      "overview": "Intuitives 3D-Modellierungswerkzeug für die schnelle konzeptionelle Fabrikplanung, Raumvolumen-Studien und frühe Entwurfsphasen.",
      "inputs": [
        "SKP",
        "DWG",
        "DXF",
        "PNG/JPG"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "glTF 2.0",
        "OBJ",
        "FBX",
        "IFC"
      ],
      "bridges": [
        "Trimble Connect",
        "NVIDIA Omniverse",
        "Unity Industry"
      ],
      "compliance": {
        "omniverse": "Connector Plugin",
        "sovereignty": "SOC2 / US Cloud",
        "openStandard": "glTF 2.0 / IFC"
      }
    },
    {
      "refCode": "IND-META-2026-AUTODESK-3DSMAX",
      "categoryCode": "2.3",
      "categoryName": "DCC & Generatives 3D-Design",
      "name": "Autodesk 3ds Max",
      "subtitle": "Industrial DCC & Mesh-Optimierung",
      "vendor": "Autodesk Inc.",
      "hq": "San Francisco, CA, USA",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://autodesk.com/3ds-max",
      "overview": "Industrielle DCC-Software für Architektur-Visualisierung, CAD-Geometriebereinigung und Echtzeit-Asset-Vorbereitung für Spatial Engines.",
      "inputs": [
        "MAX",
        "FBX",
        "OBJ",
        "Inventor (.IPT)",
        "STEP",
        "Revit (.RVT)"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "glTF 2.0",
        "FBX",
        "OBJ"
      ],
      "bridges": [
        "NVIDIA Omniverse",
        "Unreal Engine Datasmith",
        "Unity"
      ],
      "compliance": {
        "omniverse": "USD Extension",
        "sovereignty": "SOC2 Compliant",
        "openStandard": "OpenUSD / glTF 2.0"
      }
    },
    {
      "refCode": "IND-META-2026-AUTODESK-MAYA",
      "categoryCode": "2.3",
      "categoryName": "DCC & Generatives 3D-Design",
      "name": "Autodesk Maya",
      "subtitle": "Kinematik-Rigging & Worker-Animation",
      "vendor": "Autodesk Inc.",
      "hq": "San Francisco, CA, USA",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://autodesk.com/maya",
      "overview": "Animations- und Rigging-Software für Ergonomie- und Arbeiter-Animationen sowie komplexe Roboterkinematik im digitalen Zwilling.",
      "inputs": [
        "MA",
        "MB",
        "FBX",
        "OBJ",
        "USD",
        "Alembic"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "FBX",
        "glTF 2.0",
        "Alembic"
      ],
      "bridges": [
        "NVIDIA Omniverse",
        "Unreal Engine 5",
        "OptiTrack Mocap"
      ],
      "compliance": {
        "omniverse": "Native USD Viewport",
        "sovereignty": "SOC2 Compliant",
        "openStandard": "OpenUSD / Alembic"
      }
    },
    {
      "refCode": "IND-META-2026-BLENDER-3D",
      "categoryCode": "2.3",
      "categoryName": "DCC & Generatives 3D-Design",
      "name": "Blender 3D Suite",
      "subtitle": "Open-Source DCC & OpenUSD Pipeline Workhorse",
      "vendor": "Blender Foundation",
      "hq": "Amsterdam, Niederlande (EU)",
      "tier": "Tier 1",
      "costLabel": "Open Source / €0",
      "status": "ESSENTIAL DCC",
      "url": "https://blender.org",
      "overview": "Open-Source 3D-Creation Suite für Modellierung, UV-Unwrapping, Texture-Baking und prozedurale Asset-Aufbereitung. Dient als primäres Bereinigungswerkzeug für digitale Zwillinge.",
      "inputs": [
        "FBX",
        "OBJ",
        "glTF 2.0",
        "STL",
        "USD",
        "Alembic"
      ],
      "outputs": [
        "OpenUSD (.usda/.usdc/.usdz)",
        "glTF 2.0",
        "FBX",
        "OBJ"
      ],
      "bridges": [
        "NVIDIA Omniverse USD Composer",
        "Unreal Engine 5",
        "Unity"
      ],
      "compliance": {
        "omniverse": "Native OpenUSD Core",
        "sovereignty": "100% EU Souverän (FOSS)",
        "openStandard": "OpenUSD / glTF 2.0"
      }
    },
    {
      "refCode": "IND-META-2026-HI3D-AI-ENGINE",
      "categoryCode": "2.3",
      "categoryName": "DCC & Generatives 3D-Design",
      "name": "Hi3D AI Engine (Generative 3D to Additive)",
      "subtitle": "KI-3D-Generierung aus Text & 2D-Bildern",
      "vendor": "Hi3D AI Inc.",
      "hq": "European Tech Hub (EU)",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "TESTBED",
      "url": "https://hi3d.ai",
      "overview": "Generative KI-Engine, die aus Text-Prompts oder 2D-Fotos strukturierte 3D-Meshes erzeugt und wasserdichte Geometrien für den 3D-Druck und das Scene Staging ausgibt.",
      "inputs": [
        "PNG",
        "JPG",
        "Text Prompts",
        "CAD Skizzen"
      ],
      "outputs": [
        "OpenUSD (.usdz)",
        "glTF 2.0",
        "STL",
        "OBJ"
      ],
      "bridges": [
        "NVIDIA Omniverse AI Extensions",
        "Blender",
        "WebXR"
      ],
      "compliance": {
        "omniverse": "Native USD Export",
        "sovereignty": "DSGVO EU Cloud",
        "openStandard": "OpenUSD / glTF 2.0"
      }
    },
    {
      "refCode": "IND-META-2026-SIDEFX-HOUDINI",
      "categoryCode": "2.3",
      "categoryName": "DCC & Generatives 3D-Design",
      "name": "SideFX Houdini (Procedural Pipelines)",
      "subtitle": "Prozeduraler USD-Pipeline-Generator & VFX",
      "vendor": "SideFX",
      "hq": "Toronto, Kanada",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "STANDARDIZIERT",
      "url": "https://sidefx.com",
      "overview": "Knotenbasierte prozedurale Generierungs- und VFX-Suite. Fungiert als prozedurale Pipeline-Engine für die automatisierte Aufbereitung gewaltiger OpenUSD-Fabrikszenen.",
      "inputs": [
        "HIP",
        "USD",
        "BGEO",
        "STEP",
        "FBX",
        "OBJ"
      ],
      "outputs": [
        "OpenUSD (.usd/.usdc)",
        "glTF 2.0",
        "FBX",
        "Alembic"
      ],
      "bridges": [
        "NVIDIA Omniverse Hydra",
        "Unreal Engine 5 (Houdini Engine)",
        "Unity"
      ],
      "compliance": {
        "omniverse": "Native Solaris USD Engine",
        "sovereignty": "ISO Compliant",
        "openStandard": "OpenUSD / Hydra"
      }
    },
    {
      "refCode": "IND-META-2026-AASX-PACKAGE",
      "categoryCode": "2.4",
      "categoryName": "Datenformate & OpenUSD-Standards",
      "name": "AASX Packages (IDTA / IEC 63278 Container)",
      "subtitle": "Standardisierter Zwillings-Datencontainer",
      "vendor": "IDTA / Plattform Industrie 4.0",
      "hq": "Frankfurt, Deutschland (EU)",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "PFLICHTSTANDARD CONTAINER",
      "url": "https://industrialdigitaltwin.org",
      "overview": "Zip-Containerformat zur Verpackung vollständiger Verwaltungsschalen-Metadaten, XML/JSON-Teilmodelle, PDF-Handbücher und 3D-CAD-Modelle.",
      "inputs": [
        "XML",
        "JSON",
        "PDF Dokumente",
        "STEP CAD Datein"
      ],
      "outputs": [
        ".aasx (IDTA Package File)"
      ],
      "bridges": [
        "Collectu Engine",
        "Siemens Operations X",
        "AASX Package Explorer",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "AAS Bridge",
        "sovereignty": "100% EU Standard (IEC 63278)",
        "openStandard": "IEC 63278"
      }
    },
    {
      "refCode": "IND-META-2026-E57-POINTCLOUD",
      "categoryCode": "2.4",
      "categoryName": "Datenformate & OpenUSD-Standards",
      "name": "E57 (ASTM E2807 - Punktwolken-Standard)",
      "subtitle": "Herstellerneutraler Punktwolken-Standard",
      "vendor": "ASTM International",
      "hq": "West Conshohocken, PA, USA / Global",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "PFLICHTSTANDARD SCAN",
      "url": "https://astm.org/e2807-11.html",
      "overview": "Herstellerneutrales Binärdateiformat zur Speicherung dichter 3D-Punktwolkendaten, 2D-Panoramabilder und Sensormetadaten von Laserscannern.",
      "inputs": [
        "Raw Laserscanner Telemetrie",
        "SLAM-Systeme"
      ],
      "outputs": [
        ".e57 (ASTM E2807 Container)"
      ],
      "bridges": [
        "NavVis IVION",
        "Leica Cyclone",
        "FARO Sphere",
        "Autodesk ReCap",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Point Cloud Importer",
        "sovereignty": "ASTM International Standard",
        "openStandard": "ASTM E2807"
      }
    },
    {
      "refCode": "IND-META-2026-GLTF-20",
      "categoryCode": "2.4",
      "categoryName": "Datenformate & OpenUSD-Standards",
      "name": "glTF 2.0 (Khronos Group - Runtime 3D Asset)",
      "subtitle": "Das \"JPEG für 3D\" im Web & Mobile",
      "vendor": "Khronos Group",
      "hq": "Beaverton, OR, USA / Global Consortium",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "STANDARDIZIERT WEB3D",
      "url": "https://khronos.org/gltf",
      "overview": "Lizenzfreie Spezifikation für die effiziente Übertragung und das schnelle Laden von 3D-Szenen und PBR-Modellen im Webbrowser und auf Mobilgeräten.",
      "inputs": [
        "Blender",
        "3ds Max",
        "Maya",
        "Revit",
        "CAD Exporte"
      ],
      "outputs": [
        ".gltf (JSON + Bin)",
        ".glb (Self-Contained Binary)"
      ],
      "bridges": [
        "WebXR",
        "Godot Engine",
        "Unity",
        "Unreal Engine 5",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "glTF Extension",
        "sovereignty": "Khronos Open Standard",
        "openStandard": "ISO/IEC 12113"
      }
    },
    {
      "refCode": "IND-META-2026-JT-ISO14306",
      "categoryCode": "2.4",
      "categoryName": "Datenformate & OpenUSD-Standards",
      "name": "JT ISO 14306 (Lightweight CAD Tessellation)",
      "subtitle": "Leichtgewichtiges 3D-CAD-Visualisierungsformat",
      "vendor": "ISO / Siemens DISW",
      "hq": "Genf, Schweiz (EU/EFTA)",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "STANDARDIZIERT",
      "url": "https://iso.org/standard/62271.html",
      "overview": "Leichtgewichtiges 3D-Format für visuelle Produktprüfung, Digital Mockup (DMU) und schnelle Ladezeiten riesiger Maschinenbaugruppen.",
      "inputs": [
        "Siemens NX",
        "CATIA",
        "Creo",
        "SolidWorks"
      ],
      "outputs": [
        ".jt (ISO 14306)"
      ],
      "bridges": [
        "Siemens Teamcenter",
        "Tecnomatix",
        "NVIDIA Omniverse JT Connector"
      ],
      "compliance": {
        "omniverse": "JT Connector",
        "sovereignty": "100% ISO Standard",
        "openStandard": "ISO 14306"
      }
    },
    {
      "refCode": "IND-META-2026-OPENUSD",
      "categoryCode": "2.4",
      "categoryName": "Datenformate & OpenUSD-Standards",
      "name": "OpenUSD (Universal Scene Description - ISO)",
      "subtitle": "Der universelle 3D-Szenenbeschreibungs-Standard",
      "vendor": "Alliance for OpenUSD (AOUSD)",
      "hq": "San Francisco, CA, USA / Global Consortium",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "PFLICHTSTANDARD 3D VISUAL",
      "url": "https://aousd.org",
      "overview": "Der universelle offene Standard für 3D-Szenengraphen im Industrial Metaverse. Ermöglicht die Darstellung riesiger Fabrikszenen mit zerstörungsfreier Schichtenbearbeitung (Layering).",
      "inputs": [
        "STEP",
        "JT",
        "FBX",
        "glTF",
        "E57",
        "Point Clouds"
      ],
      "outputs": [
        ".usd (Binary)",
        ".usda (ASCII Text)",
        ".usdc (Binary)",
        ".usdz (Zip Package)"
      ],
      "bridges": [
        "NVIDIA Omniverse Engine",
        "Blender",
        "Unreal Engine 5",
        "Apple Vision Pro"
      ],
      "compliance": {
        "omniverse": "NATIVE CORE FORMAT",
        "sovereignty": "ISO Standardisierung (AOUSD)",
        "openStandard": "Apache 2.0"
      }
    },
    {
      "refCode": "IND-META-2026-PLY-3DGS",
      "categoryCode": "2.4",
      "categoryName": "Datenformate & OpenUSD-Standards",
      "name": "PLY / Splat Files (3D Gaussian Splatting)",
      "subtitle": "Fotorealistisches 3D-Gaussian-Splatting Format",
      "vendor": "Open Research Community / Graphics Standards",
      "hq": "Global Open Community",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "EMPFOHLEN",
      "url": "https://github.com/graphdeco-inria/gaussian-splatting",
      "overview": "Spezifikation zur Speicherung von 3D Gaussian Splatting Parametern (3D-Position, Transparenz, Skalierung, Rotation und Farbdarstellung).",
      "inputs": [
        "XGRIDS Studio",
        "Scaniverse",
        "COLMAP Photogrammetrie"
      ],
      "outputs": [
        ".ply (3DGS Binary Container)",
        ".splat (Web Compressed)"
      ],
      "bridges": [
        "NVIDIA Omniverse 3DGS Extension",
        "Unreal Engine 5",
        "WebGL Splat Viewers"
      ],
      "compliance": {
        "omniverse": "3DGS Extension",
        "sovereignty": "Open Graphics Format",
        "openStandard": "Open PLY Schema"
      }
    },
    {
      "refCode": "IND-META-2026-STEP-AP242",
      "categoryCode": "2.4",
      "categoryName": "Datenformate & OpenUSD-Standards",
      "name": "STEP AP242 (ISO 10303 - Parametrisches CAD)",
      "subtitle": "ISO-Standard für CAD-Geometrie & PMI",
      "vendor": "ISO (International Organization for Standardization)",
      "hq": "Genf, Schweiz (EU/EFTA)",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "PFLICHTSTANDARD CAD",
      "url": "https://step-smsc.org",
      "overview": "Der offizielle ISO-Standard für den parametrischen CAD-Geometrieaustausch und die Einbettung von Product Manufacturing Information (PMI) sowie Fertigungstoleranzen.",
      "inputs": [
        "Native MCAD Dateiformate (NX, CATIA, Creo, SolidWorks)"
      ],
      "outputs": [
        ".stp",
        ".step (ISO 10303-242)"
      ],
      "bridges": [
        "Alle führenden CAD-Systeme",
        "Siemens NX",
        "CATIA",
        "OpenUSD Converters"
      ],
      "compliance": {
        "omniverse": "Native Conversion to USD",
        "sovereignty": "100% ISO International Standard",
        "openStandard": "ISO 10303-242"
      }
    },
    {
      "refCode": "IND-META-2026-AAS-IEC63278",
      "categoryCode": "3.1",
      "categoryName": "Verwaltungsschale & Zwillings-Standards",
      "name": "Asset Administration Shell / AAS (IEC 63278)",
      "subtitle": "RAMI 4.0 Standard für digitale Verwaltungsschalen",
      "vendor": "IDTA / Plattform Industrie 4.0",
      "hq": "Frankfurt, Deutschland (EU)",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "PFLICHTSTANDARD INTEROP",
      "url": "https://industrialdigitaltwin.org",
      "overview": "Der offizielle RAMI 4.0 Standard für digitale Zwillings-Metadaten. Kapselt technische Dokumentationen, Zertifikate, CAD-Modelle, CO2-Fußabdrücke und Sensorpunkte eines Industrie-Assets.",
      "inputs": [
        "XML",
        "JSON",
        "AASX Packages",
        "OPC UA NodeSets",
        "PDF"
      ],
      "outputs": [
        "AASX Package",
        "REST API JSON",
        "RDF Knowledge Graphs"
      ],
      "bridges": [
        "Siemens Operations X",
        "Collectu Engine",
        "NVIDIA Omniverse USD Metadata"
      ],
      "compliance": {
        "omniverse": "Metadata Bridge",
        "sovereignty": "100% EU RAMI 4.0 Standard",
        "openStandard": "IEC 63278 / IDTA"
      }
    },
    {
      "refCode": "IND-META-2026-MICROSOFT-DTDL",
      "categoryCode": "3.1",
      "categoryName": "Verwaltungsschale & Zwillings-Standards",
      "name": "Digital Twins Definition Language (DTDL)",
      "subtitle": "JSON-LD basiertes Modellierungsformat für IIoT",
      "vendor": "Microsoft / Digital Twin Consortium",
      "hq": "Redmond, WA, USA",
      "tier": "Tier 1",
      "costLabel": "Open Standard / €0",
      "status": "EVALUIERT",
      "url": "https://github.com/Azure/opendigitaltwins-dtdl",
      "overview": "JSON-LD-basierte Modellierungssprache zur Definition digitaler Zwillingseinheiten, Raumgraphen und Telemetriesignale in Azure Digital Twins.",
      "inputs": [
        "JSON-LD Schemas",
        "DTDL Models"
      ],
      "outputs": [
        "Spatial Knowledge Graphs",
        "Azure Synapse Tables"
      ],
      "bridges": [
        "Azure Digital Twins",
        "Bentley iTwin",
        "Power BI"
      ],
      "compliance": {
        "omniverse": "Azure Bridge",
        "sovereignty": "W3C Draft",
        "openStandard": "W3C JSON-LD"
      }
    },
    {
      "refCode": "IND-META-2026-COLLECTU",
      "categoryCode": "3.2",
      "categoryName": "KI-Datenmotoren & Pipeline-Bridges",
      "name": "Collectu (No-Code AI Industrial Data Engine)",
      "subtitle": "No-Code KI-Verknüpfung von Maschinen an 3D-OpenUSD",
      "vendor": "Collectu / Futuromundo Cyberländ",
      "hq": "Baden-Württemberg, Deutschland (EU)",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EMPFOHLENE DATA ENGINE",
      "url": "https://futuromundo.com/cyberlaend",
      "overview": "KI-gestützte No-Code-Datenengine zur nahtlosen Bindung von Maschinen, Sensoren und SPSen an 3D OpenUSD digitale Zwillinge für geschlossene Regelkreise.",
      "inputs": [
        "OPC UA",
        "MQTT",
        "Modbus",
        "REST API",
        "Siemens S7",
        "ROS 2 Topics"
      ],
      "outputs": [
        "OpenUSD Live Data Stream",
        "AASX Twin Packages",
        "WebSockets JSON"
      ],
      "bridges": [
        "NVIDIA Omniverse Nucleus",
        "Siemens S7 SPS",
        "Asset Administration Shell (AAS)"
      ],
      "compliance": {
        "omniverse": "Native Live Connector",
        "sovereignty": "100% EU Souverän (Baden-Württemberg)",
        "openStandard": "OPC UA / AAS / OpenUSD"
      }
    },
    {
      "refCode": "IND-META-2026-AWS-TWINMAKER",
      "categoryCode": "3.3",
      "categoryName": "Enterprise Cloud-Zwillinge",
      "name": "AWS IoT TwinMaker",
      "subtitle": "Cloud-Plattform für 3D-Digital-Twins",
      "vendor": "Amazon Web Services Inc.",
      "hq": "Seattle, WA, USA",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://aws.amazon.com/iot-twinmaker",
      "overview": "Cloud-Plattform, die Entwicklern das Erstellen digitaler Zwillinge ermöglicht durch Aggregation bestehender AWS-Datenspeicher.",
      "inputs": [
        "AWS SiteWise Data",
        "Kinesis Streams",
        "OpenUSD (.usd)",
        "glTF 2.0"
      ],
      "outputs": [
        "Grafana 3D Visualisations",
        "AWS IoT Events"
      ],
      "bridges": [
        "NVIDIA Omniverse Cloud",
        "Matterport",
        "Amazon Grafana"
      ],
      "compliance": {
        "omniverse": "Cloud Stream Connector",
        "sovereignty": "SOC2 / ISO 27001",
        "openStandard": "OpenUSD / glTF 2.0"
      }
    },
    {
      "refCode": "IND-META-2026-BENTLEY-ITWIN",
      "categoryCode": "3.3",
      "categoryName": "Enterprise Cloud-Zwillinge",
      "name": "Bentley iTwin Platform",
      "subtitle": "Infrastruktur- & Prozessanlagen-Zwilling",
      "vendor": "Bentley Systems Inc.",
      "hq": "Exton, PA, USA",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "STANDARDIZIERT",
      "url": "https://bentley.com/itwin",
      "overview": "Offene digital Zwillingsplattform für Großinfrastruktur, Prozessanlagen, Versorgungsnetze und Fabrikareale.",
      "inputs": [
        "DGN",
        "RVT",
        "IFC",
        "Point Clouds",
        "OpenUSD"
      ],
      "outputs": [
        "iModel",
        "3D Tiles",
        "WebGL Stream",
        "OpenUSD Stage"
      ],
      "bridges": [
        "NVIDIA Omniverse",
        "Cesium GS",
        "Microsoft Azure Digital Twins"
      ],
      "compliance": {
        "omniverse": "iTwin Connector",
        "sovereignty": "ISO 19650 Compliant",
        "openStandard": "iModel / 3D Tiles"
      }
    },
    {
      "refCode": "IND-META-2026-AZURE-TWINS",
      "categoryCode": "3.3",
      "categoryName": "Enterprise Cloud-Zwillinge",
      "name": "Microsoft Azure Digital Twins",
      "subtitle": "Cloud-Graphendienst für Fabriken",
      "vendor": "Microsoft Corporation",
      "hq": "Redmond, WA, USA",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://azure.microsoft.com/services/digital-twins",
      "overview": "PaaS-Plattform zum Erstellen graphbasierter digitaler Modelle kompletter Fertigungsnetzwerke und Lieferketten.",
      "inputs": [
        "DTDL v3 Schemas",
        "MQTT",
        "AMQP",
        "REST JSON"
      ],
      "outputs": [
        "Azure Synapse Events",
        "Event Grid Notifications",
        "3D Web Overlay"
      ],
      "bridges": [
        "NVIDIA Omniverse Cloud",
        "Power BI",
        "Bentley iTwin"
      ],
      "compliance": {
        "omniverse": "Cloud Streaming Extension",
        "sovereignty": "DSGVO Cloud (Frankfurt)",
        "openStandard": "DTDL / JSON-LD"
      }
    },
    {
      "refCode": "IND-META-2026-PTC-THINGWORX",
      "categoryCode": "3.3",
      "categoryName": "Enterprise Cloud-Zwillinge",
      "name": "PTC ThingWorx IIoT Platform",
      "subtitle": "Smart Factory Application Engine & AR Service",
      "vendor": "PTC Inc.",
      "hq": "Boston, MA, USA",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "EVALUIERT",
      "url": "https://ptc.com/thingworx",
      "overview": "Etablierte Enterprise-IIoT-Plattform für schnelle Industrieanwendungen, Maschinenüberwachung und AR-Außendienst-Bereitstellung.",
      "inputs": [
        "OPC UA (Kepware)",
        "MQTT",
        "REST API",
        "Modbus"
      ],
      "outputs": [
        "ThingWorx REST Services",
        "Vuforia AR Streams"
      ],
      "bridges": [
        "PTC Windchill",
        "PTC Creo",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Telemetry Bridge",
        "sovereignty": "SOC2 Compliant",
        "openStandard": "OPC UA / REST"
      }
    },
    {
      "refCode": "IND-META-2026-SIEMENS-OPERATIONS-X",
      "categoryCode": "3.3",
      "categoryName": "Enterprise Cloud-Zwillinge",
      "name": "Siemens Industrial Operations X",
      "subtitle": "Industrial IoT Edge-to-Cloud Plattform",
      "vendor": "Siemens AG",
      "hq": "München / Nürnberg, Deutschland (EU)",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "STANDARDIZIERT",
      "url": "https://siemens.com/operations-x",
      "overview": "Offenes, interoperables Industrial-IoT-Portfolio zur Automatisierung, Analyse und Optimierung des Shopfloor-Betriebs von der Edge bis zur Cloud.",
      "inputs": [
        "OPC UA",
        "S7 Protocol",
        "MQTT",
        "Industrial Edge Data"
      ],
      "outputs": [
        "OpenUSD Attributes",
        "AASX Packages",
        "Cloud Analytics Dashboards"
      ],
      "bridges": [
        "Siemens Teamcenter",
        "NVIDIA Omniverse",
        "AWS / Azure Cloud"
      ],
      "compliance": {
        "omniverse": "Live Cloud Bridge",
        "sovereignty": "100% EU Souverän (GAIA-X)",
        "openStandard": "OPC UA / AAS"
      }
    },
    {
      "refCode": "IND-META-2026-ALTAIR-HYPERWORKS",
      "categoryCode": "4.1",
      "categoryName": "CAE & Multiphysik-Simulation",
      "name": "Altair (HyperWorks / EDEM)",
      "subtitle": "Struktur- & Partikelsimulation (DEM)",
      "vendor": "Altair Engineering Inc.",
      "hq": "Troy, MI, USA / EU Support",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "EVALUIERT",
      "url": "https://altair.com",
      "overview": "Enterprise-Simulationssuite bekannt für HyperMesh-Pre-Processing und EDEM (Discrete Element Method) zur Schüttgut- und Partikelsimulation.",
      "inputs": [
        "STEP",
        "IGES",
        "Parasolid",
        "CATIA",
        "SolidWorks"
      ],
      "outputs": [
        "Altair H3D",
        "VTK",
        "OpenUSD (via EDEM Extension)"
      ],
      "bridges": [
        "NVIDIA Omniverse EDEM Extension",
        "Siemens Teamcenter",
        "Ansys"
      ],
      "compliance": {
        "omniverse": "EDEM Connector",
        "sovereignty": "SOC2 Compliant",
        "openStandard": "STEP AP242 / H3D"
      }
    },
    {
      "refCode": "IND-META-2026-ANSYS-CAE",
      "categoryCode": "4.1",
      "categoryName": "CAE & Multiphysik-Simulation",
      "name": "Ansys (Discovery, Fluent, Mechanical)",
      "subtitle": "High-End Multiphysik & Strömungsmechanik",
      "vendor": "Ansys Inc.",
      "hq": "Canonsburg, PA, USA / EU Support",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "STANDARDIZIERT",
      "url": "https://ansys.com",
      "overview": "Umfassende Simulationssuite für Strömungsmechanik (CFD), FEM-Strukturanalyse und Elektromagnetik. Überträgt Berechnungsfelder direkt in den 3D-Zwilling.",
      "inputs": [
        "STEP",
        "Parasolid",
        "IGES",
        "Ansys Geometry"
      ],
      "outputs": [
        "CGNS",
        "OpenUSD (Volumetric Color Attributes)",
        "VTK",
        "FEA Mesh"
      ],
      "bridges": [
        "Siemens PLM",
        "PTC Windchill",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Physics Extension",
        "sovereignty": "SOC2 / Enterprise Standard",
        "openStandard": "CGNS / STEP AP242"
      }
    },
    {
      "refCode": "IND-META-2026-COMSOL-MULTIPHYSICS",
      "categoryCode": "4.1",
      "categoryName": "CAE & Multiphysik-Simulation",
      "name": "COMSOL Multiphysics",
      "subtitle": "Gekoppelte Feld- & Thermosimulation",
      "vendor": "COMSOL AB",
      "hq": "Stockholm, Schweden (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://comsol.com",
      "overview": "Multiphysik-Simulationssoftware zur Modellierung gekoppelter physikalischer Phänomene (elektrisch, mechanisch, fluidisch, akustisch).",
      "inputs": [
        "STEP",
        "IGES",
        "Parasolid",
        "DXF",
        "COMSOL MPH"
      ],
      "outputs": [
        "VTK",
        "OpenUSD (via Mesh Export)",
        "STL",
        "Data Matrices"
      ],
      "bridges": [
        "Matlab Simulink",
        "CAD LiveLinks",
        "Web Apps"
      ],
      "compliance": {
        "omniverse": "Export Bridge",
        "sovereignty": "100% EU Souverän (Schweden)",
        "openStandard": "STEP / VTK"
      }
    },
    {
      "refCode": "IND-META-2026-MATLAB-SIMULINK",
      "categoryCode": "4.1",
      "categoryName": "CAE & Multiphysik-Simulation",
      "name": "Matlab / Simulink",
      "subtitle": "Mechatronik-Regelung & Modellbasierte Entwicklung",
      "vendor": "The MathWorks Inc.",
      "hq": "Natick, MA, USA / EU Support",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "STANDARDIZIERT",
      "url": "https://mathworks.com",
      "overview": "Weltweiter Standard für Blockdiagramm-Simulation, Regelungstechnik und modellbasierte Entwicklung mechatronischer Systeme.",
      "inputs": [
        "SLX",
        "MAT",
        "C/C++ Code",
        "OPC UA Nodes",
        "CAD Assemblies"
      ],
      "outputs": [
        "C/C++ Code",
        "FMU 2.0/3.0",
        "OPC UA Data",
        "CSV/MAT"
      ],
      "bridges": [
        "ISG-Virtuos",
        "NVIDIA Isaac Sim (via ROS 2 / FMU)",
        "Siemens S7 SPS"
      ],
      "compliance": {
        "omniverse": "FMI/FMU Co-Simulation",
        "sovereignty": "ISO 26262 ASIL Certified",
        "openStandard": "FMI 3.0 / OPC UA"
      }
    },
    {
      "refCode": "IND-META-2026-OPENFOAM",
      "categoryCode": "4.1",
      "categoryName": "CAE & Multiphysik-Simulation",
      "name": "OpenFOAM Foundation Engine",
      "subtitle": "Open-Source CFD-Berechnungsumgebung",
      "vendor": "OpenFOAM Foundation / ESI Group",
      "hq": "UK / Global Open Source",
      "tier": "Tier 1",
      "costLabel": "Open Source / €0",
      "status": "STANDARDIZIERT",
      "url": "https://openfoam.org",
      "overview": "Leistungsstarkes Open-Source-CFD-Solver-Framework für numerische Strömungsmechanik in Aerodynamik und Thermodynamik.",
      "inputs": [
        "STL",
        "OBJ",
        "STEP (via Gmsh/salome)",
        "OpenFOAM dictionary"
      ],
      "outputs": [
        "VTK",
        "OpenFOAM Format",
        "OpenUSD (via ParaView)"
      ],
      "bridges": [
        "ParaView",
        "Blender",
        "Linux HPC Cluster"
      ],
      "compliance": {
        "omniverse": "Open Source (GPL)",
        "sovereignty": "100% EU Souverän / Self-Hosted",
        "openStandard": "VTK / STL"
      }
    },
    {
      "refCode": "IND-META-2026-SIMSCALE-CFD",
      "categoryCode": "4.1",
      "categoryName": "CAE & Multiphysik-Simulation",
      "name": "SimScale Cloud CFD & FEA",
      "subtitle": "Cloud-basierte Strömungs- & Thermalsimulation",
      "vendor": "SimScale GmbH",
      "hq": "München, Deutschland (EU)",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EMPFOHLEN",
      "url": "https://simscale.com",
      "overview": "100% cloudnative FEA-, CFD- und Thermalsimulationsplattform, die parallelisierte Solver direkt im Webbrowser ausführt.",
      "inputs": [
        "STEP",
        "IGES",
        "Parasolid",
        "SolidWorks",
        "STL"
      ],
      "outputs": [
        "WebGL 3D VTK Datasets",
        "CSV Telemetry",
        "Downloadable Mesh"
      ],
      "bridges": [
        "Autodesk Fusion",
        "Onshape",
        "Web Dashboards"
      ],
      "compliance": {
        "omniverse": "Web Cloud Native",
        "sovereignty": "100% EU DSGVO (München)",
        "openStandard": "STEP AP242 / VTK"
      }
    },
    {
      "refCode": "IND-META-2026-NEWTON-PHYSICS-WARP",
      "categoryCode": "4.2",
      "categoryName": "Echtzeit Physik-Engines",
      "name": "Newton Physics Engine (GPU Warp / OpenUSD)",
      "subtitle": "Differenzierbare GPU-Physik für Roboter-RL",
      "vendor": "NVIDIA / Open Source Robotics Research",
      "hq": "Global / USA",
      "tier": "Tier 1",
      "costLabel": "Open Source / €0",
      "status": "EMPFOHLEN",
      "url": "https://github.com/nvidia/warp",
      "overview": "Differenzierbares GPU-beschleunigtes Physik-Simulationsframework auf NVIDIA Warp-Basis. Speziell entwickelt für Starrkörperdynamik und Roboter-KI-Training in OpenUSD.",
      "inputs": [
        "OpenUSD Stage (UsdPhysics)",
        "Python via PyTorch/Warp"
      ],
      "outputs": [
        "USD Trajectories",
        "Tensor Arrays",
        "ROS 2 Joint States"
      ],
      "bridges": [
        "NVIDIA Isaac Lab",
        "PyTorch",
        "Omniverse PhysX 5"
      ],
      "compliance": {
        "omniverse": "Native USD Physics Schema",
        "sovereignty": "Apache 2.0 Open Source",
        "openStandard": "OpenUSD UsdPhysics"
      }
    },
    {
      "refCode": "IND-META-2026-ENERGYPLUS-OPENSTUDIO",
      "categoryCode": "4.3",
      "categoryName": "Umwelt- & Strömungssimulation",
      "name": "EnergyPlus / OpenStudio",
      "subtitle": "Gebäudeenergie & Thermische Hallensimulation",
      "vendor": "US Dept. of Energy / NREL",
      "hq": "Washington D.C., USA",
      "tier": "Tier 1",
      "costLabel": "Open Source / €0",
      "status": "EMPFOHLEN",
      "url": "https://energyplus.net",
      "overview": "Gebäudeenergiesimulations-Engine zur Berechnung von Heiz- und Kühllasten, Lüftungsströmen, HVAC-Dimensionierung und CO2-Emissionen von Fabrikhallen.",
      "inputs": [
        "IDF",
        "OSM",
        "gbXML",
        "IFC",
        "EPW Weather"
      ],
      "outputs": [
        "CSV Telemetry",
        "SQL Databases",
        "HTML Reports"
      ],
      "bridges": [
        "Autodesk Revit",
        "Rhino Honeybee",
        "Azure Digital Twins"
      ],
      "compliance": {
        "omniverse": "Open Source (BSD)",
        "sovereignty": "ASHRAE / EU EPBD Compliant",
        "openStandard": "gbXML / IFC"
      }
    },
    {
      "refCode": "IND-META-2026-RADIANCE-HONEYBEE",
      "categoryCode": "4.3",
      "categoryName": "Umwelt- & Strömungssimulation",
      "name": "Radiance / Honeybee / DIVA",
      "subtitle": "Tageslicht- & Blendungs-Simulation",
      "vendor": "Lawrence Berkeley National Lab / Ladybug Tools",
      "hq": "Berkeley, CA, USA",
      "tier": "Tier 1",
      "costLabel": "Open Source / €0",
      "status": "EVALUIERT",
      "url": "https://ladybug.tools",
      "overview": "Präzise Raytracing-Engine zur Berechnung von Tageslichtquotienten, solaren Wärmeeintrags- und Blendungsvorhersagen in Fertigungshallen.",
      "inputs": [
        "RAD Files",
        "OBJ",
        "Rhino 3D Geometry",
        "EPW Weather"
      ],
      "outputs": [
        "HDR False-Color Maps",
        "Lux Matrix Files",
        "OpenUSD Overlay"
      ],
      "bridges": [
        "Rhino 3D + Grasshopper",
        "Revit",
        "EnergyPlus"
      ],
      "compliance": {
        "omniverse": "Open Source",
        "sovereignty": "EN 17037 Daylight Standard",
        "openStandard": "RAD / OBJ"
      }
    },
    {
      "refCode": "IND-META-2026-DASSAULT-DELMIA",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "Dassault Systèmes DELMIA",
      "subtitle": "Roboterzellen-Offline-Programmierung",
      "vendor": "Dassault Systèmes",
      "hq": "Vélizy-Villacoublay, Frankreich (EU)",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "EVALUIERT",
      "url": "https://3ds.com/delmia",
      "overview": "Fertigungs- und Robotiksimulationssoftware eingebettet in die 3DEXPERIENCE-Plattform für Montageabläufe und Fertigungssteuerung.",
      "inputs": [
        "CATPart",
        "STEP",
        "JT",
        "3DXML"
      ],
      "outputs": [
        "OpenUSD (via Connector)",
        "NC Code",
        "Robot Language"
      ],
      "bridges": [
        "3DEXPERIENCE Platform",
        "CATIA",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Connector Bridge",
        "sovereignty": "100% EU Souverän (Frankreich)",
        "openStandard": "STEP AP242 / ISO 10303"
      }
    },
    {
      "refCode": "IND-META-2026-FLEXSIM",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "FlexSim (Discrete Event Simulation)",
      "subtitle": "3D-Ablauf- & Materialflusssimulation",
      "vendor": "FlexSim Software / Autodesk",
      "hq": "Orem, UT, USA",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://flexsim.com",
      "overview": "3D-Ablaufsimulationssoftware zur Modellierung, Vorhersage und Visualisierung von Logistik-, Materialfluss- und Fertigungssystemen.",
      "inputs": [
        "DWG",
        "STEP",
        "STL",
        "OPC UA Tags",
        "SQL Databases"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "Web 3D HTML",
        "Statistical Dashboards"
      ],
      "bridges": [
        "Autodesk Construction Cloud",
        "OPC UA",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "USD Connector",
        "sovereignty": "SOC2 Compliant",
        "openStandard": "OPC UA / OpenUSD"
      }
    },
    {
      "refCode": "IND-META-2026-HALOCLINE",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "Halocline (VR Shopfloor Layouting)",
      "subtitle": "Interaktive VR-Montage- & Cardboard-Planung",
      "vendor": "Halocline GmbH",
      "hq": "Magdeburg, Deutschland (EU)",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EMPFOHLEN",
      "url": "https://halocline.io",
      "overview": "Virtual-Reality-Software zur interaktiven Montageplanung in 1:1 Maßstab. Ersetzt Physisches Cardboard Engineering durch VR-Erlebnisse.",
      "inputs": [
        "STEP",
        "OBJ",
        "FBX",
        "VR Headset Input"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "CAD Modifikationen",
        "Ergonomic Reports"
      ],
      "bridges": [
        "Meta Quest 3",
        "HTC Vive",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "OpenXR Integration",
        "sovereignty": "100% EU Souverän (Deutschland)",
        "openStandard": "OpenXR / STEP"
      }
    },
    {
      "refCode": "IND-META-2026-HUGGINGFACE-LEROBOT",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "Hugging Face LeRobot (Physical AI & Open Imitation)",
      "subtitle": "Open-Source Physical AI & Roboter-Imitationslernen",
      "vendor": "Hugging Face Inc.",
      "hq": "New York, USA / Paris, Frankreich (EU)",
      "tier": "Tier 1",
      "costLabel": "Open Source / €0",
      "status": "EMPFOHLEN",
      "url": "https://github.com/huggingface/lerobot",
      "overview": "Open-Source KI-Robotik-Framework für KI-Policy-Training, Imitationslernen und Teleoperation für kostengünstige Industrie-Greifarme.",
      "inputs": [
        "HDF5 Datasets",
        "Joint Telemetrie",
        "ROS 2 Messages"
      ],
      "outputs": [
        "PyTorch Model Weights (.pt)",
        "Action Vector Commands"
      ],
      "bridges": [
        "NVIDIA Isaac Lab",
        "PyTorch",
        "ROS 2",
        "OpenUSD"
      ],
      "compliance": {
        "omniverse": "Open Source (Apache 2.0)",
        "sovereignty": "100% EU Rechtssicher (Paris HQ)",
        "openStandard": "Safetensors / ROS 2"
      }
    },
    {
      "refCode": "IND-META-2026-IPOLOG",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "ipolog (Material Flow & Ergonomics)",
      "subtitle": "Montagelinien-Ergonomie & Behälter-Staging",
      "vendor": "ipolog GmbH",
      "hq": "Stuttgart, Deutschland (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://ipolog.ai",
      "overview": "Spezialsoftware für die Ergonomieplanung an Montagelinien, Logistikrouten und Materialregaloptimierung in Fertigungszellen.",
      "inputs": [
        "MicroStation",
        "DWG",
        "STEP",
        "Excel BOMs",
        "MTM Data"
      ],
      "outputs": [
        "3D Animated Mesh",
        "OpenUSD (.usd)",
        "Ergonomic Reports (PDF)"
      ],
      "bridges": [
        "Siemens Teamcenter",
        "NVIDIA Omniverse",
        "SAP ERP"
      ],
      "compliance": {
        "omniverse": "USD Exporter",
        "sovereignty": "100% EU Souverän (Deutschland)",
        "openStandard": "EAWS / MTM"
      }
    },
    {
      "refCode": "IND-META-2026-ISG-VIRTUOS",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "ISG-Virtuos (Hard Real-Time VIBn / HiL)",
      "subtitle": "Echtzeit-Hardware-in-the-Loop Simulationsengine",
      "vendor": "ISG Industrielle Steuerungstechnik GmbH",
      "hq": "Stuttgart, Deutschland (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "STANDARDIZIERT",
      "url": "https://isg-stuttgart.de",
      "overview": "Deterministische Harte-Echtzeit-Simulationsengine für Taktraten unter 1 Millisekunde zur Hardware-in-the-Loop-Inbetriebnahme von Werkzeugmaschinen.",
      "inputs": [
        "STEP",
        "CAD",
        "Feldbus XML",
        "Matlab Simulink FMUs"
      ],
      "outputs": [
        "Echtzeit Feldbus-Streams (EtherCAT/PROFINET)",
        "OpenUSD Telemetrie"
      ],
      "bridges": [
        "Siemens Sinumerik",
        "Beckhoff TwinCAT",
        "Bosch Rexroth",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Live Telemetry Sync",
        "sovereignty": "100% EU Souverän (Stuttgart)",
        "openStandard": "EtherCAT / FMI"
      }
    },
    {
      "refCode": "IND-META-2026-MOTIONA",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "MotionA Kinematic Optimization",
      "subtitle": "Roboter-Geschwindigkeits- & Energieoptimierung",
      "vendor": "Industrial Motion Analytics",
      "hq": "DACH Region (EU)",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "TESTBED",
      "url": "https://motiona.io",
      "overview": "Software zur Analyse von Roboter-Bewegungskurven. Berechnet energieoptimierte Bahnkurven für mehrachsige Industrieroboter.",
      "inputs": [
        "G-Code",
        "SPS Trajektorienlogs",
        "CAD Kinematic Joints"
      ],
      "outputs": [
        "OpenUSD Kinematic Attributes",
        "Smooth G-Code",
        "CSV Telemetrie"
      ],
      "bridges": [
        "NVIDIA Isaac Sim",
        "Siemens S7 SPS",
        "KUKA Sim"
      ],
      "compliance": {
        "omniverse": "OpenUSD Kinematic Schema",
        "sovereignty": "100% EU Souverän",
        "openStandard": "G-Code / OpenUSD"
      }
    },
    {
      "refCode": "IND-META-2026-NVIDIA-ISAAC",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "NVIDIA Isaac Sim / Isaac Lab (Physical AI)",
      "subtitle": "Physikbasierte Roboter-Simulation & KI-Training",
      "vendor": "NVIDIA Corporation",
      "hq": "Santa Clara, CA, USA / EU Support",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "CORE SIM STANDARD",
      "url": "https://developer.nvidia.com/isaac-sim",
      "overview": "Roboter-Simulationsanwendung und Physical-AI-Framework auf Omniverse-Basis. Ermöglicht synthetische Datengenerierung (SDG) und Reinforcement Learning für AMRs und Roboterarme.",
      "inputs": [
        "URDF",
        "USD Robot Stage",
        "ROS 2 Topics (/cmd_vel, /joint_states)"
      ],
      "outputs": [
        "Native OpenUSD Stage",
        "Sensor Streams (RTSP, ROS 2)",
        "Tensor Arrays"
      ],
      "bridges": [
        "ROS 2 DDS",
        "PyTorch",
        "Hugging Face LeRobot",
        "Omniverse Kit"
      ],
      "compliance": {
        "omniverse": "NATIVE OMNIVERSE CORE",
        "sovereignty": "GAIA-X / SOC2",
        "openStandard": "OpenUSD / ROS 2 DDS"
      }
    },
    {
      "refCode": "IND-META-2026-SIEMENS-TECNOMATIX",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "Siemens Tecnomatix (Process Simulate / Plant Sim)",
      "subtitle": "Virtuelle Inbetriebnahme & Kinematik-Validierung",
      "vendor": "Siemens DISW",
      "hq": "Plano, USA / Nürnberg, Deutschland (EU)",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "STANDARDIZIERT",
      "url": "https://plm.automation.siemens.com/tecnomatix",
      "overview": "Branchenführende Plattform für Roboter-Kinematik, virtuelle Inbetriebnahme (VRC) und Materialfluss-Simulation in der Automobil- und Fertigungsindustrie.",
      "inputs": [
        "JT",
        "STEP",
        "CAD",
        "OPC UA Nodes",
        "Robcad format"
      ],
      "outputs": [
        "JT ISO",
        "OpenUSD (via Siemens Connector)",
        "PLC XML",
        "Telemetry"
      ],
      "bridges": [
        "Siemens Teamcenter PLM",
        "Siemens NX",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Live Bridge",
        "sovereignty": "100% EU DSGVO (Deutschland)",
        "openStandard": "OPC UA / JT ISO 14306"
      }
    },
    {
      "refCode": "IND-META-2026-VISUAL-COMPONENTS",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "Visual Components 4.9",
      "subtitle": "3D-Fabriksimulation & Materialfluss-Planung",
      "vendor": "Visual Components Oy",
      "hq": "Espoo, Finnland (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EMPFOHLEN",
      "url": "https://visualcomponents.com",
      "overview": "3D-Fabriksimulationssoftware für Maschinenbauer und Systemintegratoren zur schnellen Layouterstellung, Robotersimulation und Durchsatzüberprüfung.",
      "inputs": [
        "STEP",
        "IGES",
        "SolidWorks",
        "IFC",
        "Point Cloud"
      ],
      "outputs": [
        "OpenUSD (.usd)",
        "3D PDF",
        "MP4 Video",
        "OPC UA Messages"
      ],
      "bridges": [
        "NVIDIA Omniverse Connector",
        "KUKA Sim",
        "Siemens S7 SPS"
      ],
      "compliance": {
        "omniverse": "USD Exporter",
        "sovereignty": "100% EU Souverän (Finnland)",
        "openStandard": "OPC UA / OpenUSD"
      }
    },
    {
      "refCode": "IND-META-2026-VISUPAL",
      "categoryCode": "4.4",
      "categoryName": "Robotik & Fabriksimulation",
      "name": "VisuPal Palletizing Simulation",
      "subtitle": "Automatisierte 3D-Palettier-Simulation",
      "vendor": "VisuPal Systems",
      "hq": "Deutschland (EU)",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EVALUIERT",
      "url": "https://visupal.de",
      "overview": "Automatisierte 3D-Palettiersimulations-Software für Verpackungszellen und End-of-Line-Roboter.",
      "inputs": [
        "Kistenmaße",
        "Palettengrundmaß",
        "STEP Roboter CAD"
      ],
      "outputs": [
        "OpenUSD Scene",
        "PLC Trajectory Blocks",
        "3D PDF"
      ],
      "bridges": [
        "Siemens TIA Portal",
        "Beckhoff TwinCAT",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "USD Export",
        "sovereignty": "100% EU Souverän",
        "openStandard": "OPC UA / STEP"
      }
    },
    {
      "refCode": "IND-META-2026-GODOT-WEBXR",
      "categoryCode": "5.1",
      "categoryName": "Echtzeit-3D & Spatial Engines",
      "name": "Godot Engine / WebXR",
      "subtitle": "Leichtgewichtige Open-Source 3D/Web Engine",
      "vendor": "Godot Foundation",
      "hq": "EU / Global Community",
      "tier": "Tier 1",
      "costLabel": "Open Source / €0",
      "status": "EMPFOHLEN",
      "url": "https://godotengine.org",
      "overview": "Schlanke, lizenzfreie Open-Source 3D-Engine. Ideal für Web-eingebettete 3D-Dashboards, WebXR-Brillen und leichte Shopfloor-Displays.",
      "inputs": [
        "glTF 2.0 (Native)",
        "OBJ",
        "FBX",
        "OpenUSD (via Extension)"
      ],
      "outputs": [
        "WebGL / WebXR HTML5",
        "Linux/Windows Binaries"
      ],
      "bridges": [
        "MQTT WebSockets",
        "OPC UA REST Gateways",
        "WebXR"
      ],
      "compliance": {
        "omniverse": "WebXR / glTF Bridge",
        "sovereignty": "100% EU Souverän (MIT FOSS)",
        "openStandard": "glTF 2.0 / WebXR / OpenXR"
      }
    },
    {
      "refCode": "IND-META-2026-NVIDIA-OMNIVERSE",
      "categoryCode": "5.1",
      "categoryName": "Echtzeit-3D & Spatial Engines",
      "name": "NVIDIA Omniverse Enterprise",
      "subtitle": "Zentrales Betriebssystem für Digital Twins",
      "vendor": "NVIDIA Corporation",
      "hq": "Santa Clara, CA, USA / EU Office",
      "tier": "Tier 3",
      "costLabel": "> €100k",
      "status": "TARGET CORE ARCHITECTURE",
      "url": "https://developer.nvidia.com/omniverse",
      "overview": "Zentrale Simulations- und Aggregationsplattform, die nativ auf OpenUSD und RTX-Raytracing basiert. Dient als primäres Herzstück der Zielarchitektur für den industriellen digitalen Zwilling.",
      "inputs": [
        "Native OpenUSD (.usd/.usda/.usdc)",
        "Connectors für Siemens NX, Revit, Blender, SolidWorks"
      ],
      "outputs": [
        "Native OpenUSD Stage",
        "WebRTC Cloud Stream",
        "RTX Render Passes"
      ],
      "bridges": [
        "Isaac Sim",
        "Siemens Teamcenter",
        "Azure Digital Twins",
        "Collectu Engine",
        "ROS 2"
      ],
      "compliance": {
        "omniverse": "NATIVE CORE PLATFORM",
        "sovereignty": "GAIA-X / On-Premise Execution",
        "openStandard": "OpenUSD / Hydra / MaterialX"
      }
    },
    {
      "refCode": "IND-META-2026-TWINMOTION",
      "categoryCode": "5.1",
      "categoryName": "Echtzeit-3D & Spatial Engines",
      "name": "Twinmotion (Real-Time Architecture)",
      "subtitle": "Schnelle 3D-Visualisierung für AEC & Fabriken",
      "vendor": "Epic Games Inc.",
      "hq": "Cary, NC, USA",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EVALUIERT",
      "url": "https://twinmotion.com",
      "overview": "Schnelles 3D-Echtzeit-Visualisierungswerkzeug powered by Unreal Engine. Speziell für AEC-Planer entwickelt, um Fabrikgebäude in Minuten zu begehen.",
      "inputs": [
        "RVT",
        "SKP",
        "FBX",
        "OBJ",
        "glTF",
        "Datasmith"
      ],
      "outputs": [
        "Executable Presentations",
        "Panoramas",
        "MP4 Video",
        "USD Export"
      ],
      "bridges": [
        "Unreal Engine 5",
        "Autodesk Revit",
        "Trimble SketchUp"
      ],
      "compliance": {
        "omniverse": "Datasmith Bridge",
        "sovereignty": "SOC2 Compliant",
        "openStandard": "glTF 2.0 / OpenUSD"
      }
    },
    {
      "refCode": "IND-META-2026-UNITY-INDUSTRY",
      "categoryCode": "5.1",
      "categoryName": "Echtzeit-3D & Spatial Engines",
      "name": "Unity Industry Suite",
      "subtitle": "Cross-Platform 3D-Laufzeitumgebung & AR/VR HMI",
      "vendor": "Unity Technologies",
      "hq": "San Francisco, CA, USA / EU Support",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://unity.com/industry",
      "overview": "Multi-Plattform Echtzeit-3D-Plattform für plattformübergreifende Industrie-Apps, AR/VR-Headsets, Mobilgeräte und WebGL.",
      "inputs": [
        "Pixyz Supported (STEP, JT, RVT, SolidWorks)",
        "OpenUSD",
        "glTF",
        "FBX"
      ],
      "outputs": [
        "WebGL",
        "OpenXR Executables",
        "Android/iOS App Packages",
        "USD Stage"
      ],
      "bridges": [
        "PTC Vuforia",
        "Microsoft Azure Digital Twins",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "OpenUSD Import Package",
        "sovereignty": "SOC2 Compliant",
        "openStandard": "OpenXR / glTF / OpenUSD"
      }
    },
    {
      "refCode": "IND-META-2026-UNREAL-ENGINE-5",
      "categoryCode": "5.1",
      "categoryName": "Echtzeit-3D & Spatial Engines",
      "name": "Unreal Engine 5 Enterprise",
      "subtitle": "Fotorealistisches Rendering & High-End Visualisierung",
      "vendor": "Epic Games Inc.",
      "hq": "Cary, NC, USA / EU Support",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EMPFOHLEN",
      "url": "https://unrealengine.com/enterprise",
      "overview": "High-End 3D-Echtzeit-Engine für fotorealistische Visualisierungen, virtuelle Begehungen und immersives VR-Training von Werksanlagen.",
      "inputs": [
        "OpenUSD",
        "Datasmith (Revit/SolidWorks/Rhino)",
        "FBX",
        "glTF",
        "Point Clouds"
      ],
      "outputs": [
        "Executable Binaries (Win/Linux)",
        "Pixel Streaming (WebRTC)",
        "OpenUSD Stage"
      ],
      "bridges": [
        "NVIDIA Omniverse Connector",
        "AWS TwinMaker",
        "ROS 2 DDS"
      ],
      "compliance": {
        "omniverse": "OpenUSD Importer / Stage",
        "sovereignty": "SOC2 / Enterprise SLA",
        "openStandard": "OpenUSD / glTF / WebRTC"
      }
    },
    {
      "refCode": "IND-META-2026-APPLE-VISION-PRO",
      "categoryCode": "5.2",
      "categoryName": "Spatial XR & VR/AR Headsets",
      "name": "Apple Vision Pro Enterprise",
      "subtitle": "High-End Spatial Computing Hardware",
      "vendor": "Apple Inc.",
      "hq": "Cupertino, CA, USA",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "PREMIUM SPATIAL DEVICE",
      "url": "https://apple.com/apple-vision-pro",
      "overview": "Spatial Computer mit extrem hochauflösenden Micro-OLED-Displays (23 Millionen Pixel) für gestochen scharfe CAD-Prüfungen und Cloud-Streaming.",
      "inputs": [
        "USDZ",
        "WebXR",
        "NVIDIA Omniverse Cloud WebRTC Stream"
      ],
      "outputs": [
        "ARKit Spatial Mesh",
        "Eye/Hand Pose Telemetry"
      ],
      "bridges": [
        "NVIDIA Omniverse Cloud Streaming App",
        "PTC Vuforia",
        "Siemens NX VR"
      ],
      "compliance": {
        "omniverse": "WebRTC Streaming Native",
        "sovereignty": "SOC2 / Apple Enterprise",
        "openStandard": "USDZ / WebXR / OpenXR"
      }
    },
    {
      "refCode": "IND-META-2026-HTC-VIVE-FOCUS3",
      "categoryCode": "5.2",
      "categoryName": "Spatial XR & VR/AR Headsets",
      "name": "HTC VIVE Focus 3 Business",
      "subtitle": "Robustes Standalone VR/AR Headset für Training",
      "vendor": "HTC Corporation",
      "hq": "Taoyuan, Taiwan / EU Support",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EVALUIERT",
      "url": "https://business.vive.com/focus3",
      "overview": "Robustes Standalone-Enterprise-VR-Headset für industrielles Sicherheitstraining, ergonomische VR-Montagesimulation und Trainingszentren.",
      "inputs": [
        "OpenXR Apps",
        "PC VR Streaming",
        "Android APK"
      ],
      "outputs": [
        "6DOF Controller Tracking",
        "Optional Eye/Face Tracking"
      ],
      "bridges": [
        "Halocline",
        "Unity Industry",
        "Unreal Engine 5",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "OpenXR Native",
        "sovereignty": "ISO 27001 Enterprise",
        "openStandard": "OpenXR"
      }
    },
    {
      "refCode": "IND-META-2026-MAGIC-LEAP-2",
      "categoryCode": "5.2",
      "categoryName": "Spatial XR & VR/AR Headsets",
      "name": "Magic Leap 2 Enterprise AR Glasses",
      "subtitle": "Ergonomische See-Through AR-Brille für Werksmonteure",
      "vendor": "Magic Leap Inc.",
      "hq": "Plantation, FL, USA / EU Support",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "EVALUIERT",
      "url": "https://magicleap.com",
      "overview": "Leichtgewichtige optische See-Through AR-Brille für Werksmonteure mit dynamischer Abdunkelung für helle Fabrikhallen.",
      "inputs": [
        "OpenXR C++ Apps",
        "Android Native Packages",
        "WebXR"
      ],
      "outputs": [
        "Spatial Mesh",
        "Eye Tracking Data",
        "6DOF Controller Pose"
      ],
      "bridges": [
        "PTC Vuforia Engine",
        "Siemens Manifest",
        "Unity Industry",
        "OpenXR"
      ],
      "compliance": {
        "omniverse": "OpenXR Compliant",
        "sovereignty": "Enterprise Safety Certified",
        "openStandard": "OpenXR / Android Native"
      }
    },
    {
      "refCode": "IND-META-2026-META-QUEST3",
      "categoryCode": "5.2",
      "categoryName": "Spatial XR & VR/AR Headsets",
      "name": "Meta Quest 3 / Quest Pro (SME Spatial Review)",
      "subtitle": "Kabelloses Mixed-Reality Headset für den Mittelstand",
      "vendor": "Meta Platforms Inc.",
      "hq": "Menlo Park, CA, USA",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "EMPFOHLEN SME",
      "url": "https://meta.com/quest",
      "overview": "Vielseitiges kabelloses Standalone MR/VR-Headset. Weit verbreitet im Mittelstand für kostengünstige Werksbegehungen, VR-Training und Remote-Kollaboration.",
      "inputs": [
        "OpenXR Executables",
        "WebXR Browser",
        "PC VR Streaming"
      ],
      "outputs": [
        "Hand Tracking Telemetrie",
        "Head Pose Telemetrie"
      ],
      "bridges": [
        "Halocline",
        "Unity",
        "Unreal Engine 5",
        "NVIDIA Omniverse WebRTC"
      ],
      "compliance": {
        "omniverse": "WebRTC Stream",
        "sovereignty": "SOC2 Enterprise",
        "openStandard": "OpenXR / WebXR"
      }
    },
    {
      "refCode": "IND-META-2026-REALWEAR-NAV520",
      "categoryCode": "5.2",
      "categoryName": "Spatial XR & VR/AR Headsets",
      "name": "RealWear Navigator 520 (Assisted Reality Wearable)",
      "subtitle": "Freihand-Mikrodisplay für Instandhaltung & Service",
      "vendor": "RealWear Inc.",
      "hq": "Vancouver, WA, USA",
      "tier": "Tier 1",
      "costLabel": "≤ €30k",
      "status": "STANDARDIZIERT FIELD WORKER",
      "url": "https://realwear.com/navigator-520",
      "overview": "Robustes Freihand-Mikrodisplay-Headset zur Montage an Schutzhelmen. Entwickelt für Service-Techniker bei der Fernwartung und Inspektion in rauen Industrieumgebungen.",
      "inputs": [
        "Android APK Pakete",
        "Sprachbefehle",
        "Remote Video Calls"
      ],
      "outputs": [
        "48MP Kamerastream",
        "Audio Telemetrie",
        "PDF Anmerkungen"
      ],
      "bridges": [
        "Microsoft Teams",
        "Zoom 1Form",
        "PTC Vuforia",
        "Siemens Manifest"
      ],
      "compliance": {
        "omniverse": "Remote Video Bridge",
        "sovereignty": "IP66 / ATEX Zone 2 Option",
        "openStandard": "Android Native"
      }
    },
    {
      "refCode": "IND-META-2026-VARJO-XR4",
      "categoryCode": "5.2",
      "categoryName": "Spatial XR & VR/AR Headsets",
      "name": "Varjo XR-4 Series (Human-Eye Resolution MR)",
      "subtitle": "Industrielles Mixed-Reality Headset mit 51 PPD",
      "vendor": "Varjo Technologies Oy",
      "hq": "Helsinki, Finnland (EU)",
      "tier": "Tier 2",
      "costLabel": "≤ €100k",
      "status": "STANDARDIZIERT HIGH-END",
      "url": "https://varjo.com/products/xr-4",
      "overview": "Kabelgebundenes Mixed-Reality-Headset für Industrieanwendungen mit Auflösung auf menschlichem Augenniveau (51 PPD) und fotorealistischem Video-Pass-Through.",
      "inputs": [
        "OpenXR Stream",
        "NVIDIA RTX Workstation GPU Output"
      ],
      "outputs": [
        "Varjo Eye Tracking Data (120Hz)",
        "LiDAR Depth Map"
      ],
      "bridges": [
        "Autodesk VRED",
        "Unreal Engine 5",
        "Unity Industry",
        "NVIDIA Omniverse"
      ],
      "compliance": {
        "omniverse": "Native OpenXR Extension",
        "sovereignty": "100% EU Souverän (Finnland)",
        "openStandard": "OpenXR"
      }
    }
  ],
  "usecases": [
    {
      "id": "UC-01-SHOPFLOOR-INCIDENT-MANAGEMENT",
      "title": "Digitales Shopfloor-Incident-Management",
      "tier": "Tier 1",
      "tierLabel": "Tier 1 (≤ €30k / Starter & Open Source)",
      "shortDesc": "Wie umsetzen? Schnelle optische 360°-Bestandserfassung im Shopfloor ohne Maschinenstillstand. Die Aufnahmen werden in FARO Sphere XG verortet und lösen automatisiert Instandhaltungstickets im Enterprise-System (Jira / SAP) aus.",
      "goal": "Betrieblicher Nutzen: Schnelle 3D-Fehlerortung im Werk ohne manuelle Wegezeiten zur Beschleunigung des Instandhaltungsprozesses. (Indikativer Forschungs-Benchmark, keine Finanzberatung).",
      "flow": [
        {
          "layer": "1",
          "layerTitle": "Schicht 1: Erfassung",
          "refCode": "IND-META-2026-FARO-ORBIS",
          "nodeName": "FARO Orbis / Matterport",
          "role": "Mobile 360° LiDAR-Erfassung im Werk"
        },
        {
          "layer": "2",
          "layerTitle": "Schicht 2: Geometrie",
          "refCode": "IND-META-2026-E57-POINTCLOUD",
          "nodeName": "E57 / Panorama Scan",
          "role": "Punktwolken & 360°-Bilddaten-Export"
        },
        {
          "layer": "3",
          "layerTitle": "Schicht 3: Middleware",
          "refCode": "IND-META-2026-FARO-SPHERE",
          "nodeName": "FARO Sphere XG",
          "role": "Zentrale Cloud/On-Prem 3D-Plattform"
        },
        {
          "layer": "4",
          "layerTitle": "Schicht 4: Integration",
          "refCode": null,
          "nodeName": "Jira / SAP PM",
          "role": "Automatische Ticket- & Auftragserstellung"
        },
        {
          "layer": "5",
          "layerTitle": "Schicht 5: Immersion",
          "refCode": "IND-META-2026-GLTF-20",
          "nodeName": "WebXR / Web Inspection",
          "role": "Interaktive 3D-Befundung am Tablet/PC"
        }
      ]
    },
    {
      "id": "UC-02-VIRTUAL-FACTORY-WALKTHROUGH",
      "title": "Virtuelle Fabrikbegehung & Asset-Tagging via WebXR",
      "tier": "Tier 1",
      "tierLabel": "Tier 1 (≤ €30k / Starter & Open Source)",
      "shortDesc": "Wie umsetzen? Mobiles SLAM-Scanning bestehender Werksbereiche im Gehen. Überführung der Geometrie in OpenUSD/glTF und Verknüpfung mit Maschinendaten in einer Eclipse BaSyx Verwaltungsschale (AAS).",
      "goal": "Betrieblicher Nutzen: Deutliche Reduzierung von Reisekosten und Reisezeiten bei Standort-Audits und Zulieferer-Reviews. Nutzung auf vorhandenen PCs/Tablets ohne teure Spezialhardware.",
      "flow": [
        {
          "layer": "1",
          "layerTitle": "Schicht 1: Erfassung",
          "refCode": "IND-META-2026-NAVVIS-VLX3",
          "nodeName": "NavVis VLX 3",
          "role": "Mobiles SLAM-Laserscanning im Gehen"
        },
        {
          "layer": "2",
          "layerTitle": "Schicht 2: Geometrie",
          "refCode": "IND-META-2026-OPENUSD",
          "nodeName": "OpenUSD & glTF 2.0",
          "role": "Tessellierte 3D-Szenengraph-Struktur"
        },
        {
          "layer": "3",
          "layerTitle": "Schicht 3: Middleware",
          "refCode": "IND-META-2026-AAS-IEC63278",
          "nodeName": "Eclipse BaSyx AAS",
          "role": "Verwaltungsschale für Asset-Metadaten"
        },
        {
          "layer": "4",
          "layerTitle": "Schicht 4: Simulation",
          "refCode": "IND-META-2026-GODOT-WEBXR",
          "nodeName": "Godot Engine / Web-Sim",
          "role": "Leichtgewichtige Interaktionslogik"
        },
        {
          "layer": "5",
          "layerTitle": "Schicht 5: Immersion",
          "refCode": "IND-META-2026-META-QUEST3",
          "nodeName": "WebXR / Tablet Viewing",
          "role": "Browserbasierte 3D-Werkbegehung"
        }
      ]
    },
    {
      "id": "UC-03-AR-WORKER-ASSISTANCE",
      "title": "AR-gestützte Werkerassistenz mit IoT-Echtzeitdaten",
      "tier": "Tier 2",
      "tierLabel": "Tier 2 (≤ €100k / Mittelstand)",
      "shortDesc": "Wie umsetzen? Anbindung bestehender SPS-Steuerungen über OPC UA an eine Eclipse BaSyx Verwaltungsschale. Visualisierung von Live-Sensorwerten und Reparaturanweisungen in Unity Industry für AR-Brillen.",
      "goal": "Betrieblicher Nutzen: Effizientere Einarbeitung von Fachkräften und Vermeidung von Bedienerfehlern im Wartungsprozess durch freihändige AR-Werkerführung im räumlichen Kontext.",
      "flow": [
        {
          "layer": "1",
          "layerTitle": "Schicht 1: Erfassung",
          "refCode": "IND-META-2026-OPC-UA",
          "nodeName": "OPC UA / MQTT",
          "role": "SPS Telemetrie- & Zustandserfassung"
        },
        {
          "layer": "2",
          "layerTitle": "Schicht 2: Geometrie",
          "refCode": "IND-META-2026-PTC-CREO",
          "nodeName": "PTC Creo CAD Data",
          "role": "Leichtbau 3D-Baugruppenmodelle"
        },
        {
          "layer": "3",
          "layerTitle": "Schicht 3: Middleware",
          "refCode": "IND-META-2026-AAS-IEC63278",
          "nodeName": "Eclipse BaSyx AAS",
          "role": "Submodell Instandhaltung & Live-IoT"
        },
        {
          "layer": "4",
          "layerTitle": "Schicht 4: Engine",
          "refCode": "IND-META-2026-UNITY-INDUSTRY",
          "nodeName": "Unity Industry",
          "role": "AR-Szenenkomposition & Tracking"
        },
        {
          "layer": "5",
          "layerTitle": "Schicht 5: Immersion",
          "refCode": "IND-META-2026-REALWEAR-NAV520",
          "nodeName": "RealWear NAV-520 / Quest 3",
          "role": "Freihändige AR-Werkerassistenz"
        }
      ]
    },
    {
      "id": "UC-04-POINTCLOUD-LAYOUT-PLANNING",
      "title": "Punktwolken-Vergleich für die Fabrik-Layoutplanung",
      "tier": "Tier 2",
      "tierLabel": "Tier 2 (≤ €100k / Mittelstand)",
      "shortDesc": "Wie umsetzen? Hochpräziser 3D-Laserscan der Hallenstruktur (Leica RTC360). Überlagerung der Ist-Punktwolke mit neuen CAD-BIM-Planungsdaten (Revit/Creo) in Visual Components zur Kollisionsprüfung.",
      "goal": "Betrieblicher Nutzen: Vorab-Kollisionsprüfung bei der Neumontage von Fördertechnik zur Vermeidung ungeplanter Produktionsunterbrechungen und Nachbearbeitungen vor Ort.",
      "flow": [
        {
          "layer": "1",
          "layerTitle": "Schicht 1: Erfassung",
          "refCode": "IND-META-2026-LEICA-RTC360",
          "nodeName": "Leica RTC360",
          "role": "High-End Terrestrik Laserscanning"
        },
        {
          "layer": "2",
          "layerTitle": "Schicht 2: Geometrie",
          "refCode": "IND-META-2026-AUTODESK-REVIT",
          "nodeName": "Autodesk Revit / STEP",
          "role": "BIM-Gebäude- & Layoutmodellierung"
        },
        {
          "layer": "3",
          "layerTitle": "Schicht 3: Middleware",
          "refCode": "IND-META-2026-CESIUM-3DTILES",
          "nodeName": "Cesium 3D Tiles",
          "role": "Räumlicher Streaming-Server"
        },
        {
          "layer": "4",
          "layerTitle": "Schicht 4: Simulation",
          "refCode": "IND-META-2026-VISUAL-COMPONENTS",
          "nodeName": "Visual Components",
          "role": "Materialfluss- & Layoutsimulation"
        },
        {
          "layer": "5",
          "layerTitle": "Schicht 5: Immersion",
          "refCode": "IND-META-2026-TWINMOTION",
          "nodeName": "Twinmotion / Unreal",
          "role": "Fotorealistischer Soll-Ist-Abgleich"
        }
      ]
    },
    {
      "id": "UC-05-SYNTHETIC-DATA-ROBOTIC-TRAINING",
      "title": "Synthetische Datengenerierung & Roboter-KI-Training",
      "tier": "Tier 3",
      "tierLabel": "Tier 3 (> €100k / Enterprise OEM)",
      "shortDesc": "Wie umsetzen? Automatisierte Überführung von OEM-CAD-Baugruppen (Siemens NX / CATIA) via OpenUSD in NVIDIA Omniverse. Simulation physikalisch exakter Greifprozesse in Isaac Sim zum KI-Training vor dem physischen Aufbau.",
      "goal": "Betrieblicher Nutzen: Signifikante Verkürzung der Roboter-Inbetriebnahmezeit durch virtuelles KI-Training ohne Belegungszeiten der physischen Zelle.",
      "flow": [
        {
          "layer": "1",
          "layerTitle": "Schicht 1: Erfassung",
          "refCode": "IND-META-2026-SIEMENS-NX",
          "nodeName": "Siemens NX MCAD",
          "role": "OEM CAD Kinematik & Masterdaten"
        },
        {
          "layer": "2",
          "layerTitle": "Schicht 2: Geometrie",
          "refCode": "IND-META-2026-OPENUSD",
          "nodeName": "OpenUSD Pipeline",
          "role": "Physik- & Material-Zuordnung"
        },
        {
          "layer": "3",
          "layerTitle": "Schicht 3: Middleware",
          "refCode": "IND-META-2026-NVIDIA-OMNIVERSE",
          "nodeName": "NVIDIA Omniverse Nucleus",
          "role": "Zentraler USD Szenengraph-Server"
        },
        {
          "layer": "4",
          "layerTitle": "Schicht 4: Simulation",
          "refCode": "IND-META-2026-NVIDIA-ISAAC",
          "nodeName": "Isaac Sim & Isaac Lab",
          "role": "PhysX 5 & RL KI-Robotik-Training"
        },
        {
          "layer": "5",
          "layerTitle": "Schicht 5: Immersion",
          "refCode": "IND-META-2026-VARJO-XR4",
          "nodeName": "Varjo XR-4 / RTX Stream",
          "role": "Photorealistischer Digital Twin Review"
        }
      ]
    },
    {
      "id": "UC-06-BIDIRECTIONAL-REALTIME-TWIN",
      "title": "Bi-direktionaler Echtzeit-Digitaler-Zwilling einer Produktionslinie",
      "tier": "Tier 3",
      "tierLabel": "Tier 3 (> €100k / Enterprise OEM)",
      "shortDesc": "Wie umsetzen? Harte Feldbus-Kopplung (PROFINET TSN / OPC UA) über MQTT Sparkplug B und Eclipse Dataspace Components (EDC) in ISG-virtuos HiL. Echtzeit-Rendering in Unreal Engine 5 zur bi-direktionalen Steuerung.",
      "goal": "Betrieblicher Nutzen: Virtuelle Schatten-Inbetriebnahme kompletter Fertigungsstraßen und Fernsteuerung in Echtzeit zur Risikominimierung bei Serienanläufen.",
      "flow": [
        {
          "layer": "1",
          "layerTitle": "Schicht 1: Erfassung",
          "refCode": "IND-META-2026-PROFINET-TSN",
          "nodeName": "PROFINET TSN & OPC UA",
          "role": "Harte Echtzeit-Feldbus-Kopplung"
        },
        {
          "layer": "2",
          "layerTitle": "Schicht 2: Geometrie",
          "refCode": "IND-META-2026-JT-ISO14306",
          "nodeName": "JT ISO 14306 & STEP",
          "role": "Industrieller Kinematik-Master"
        },
        {
          "layer": "3",
          "layerTitle": "Schicht 3: Middleware",
          "refCode": "IND-META-2026-MQTT-SPARKPLUG",
          "nodeName": "MQTT Sparkplug & EDC",
          "role": "Souveräner Datenraum-Austausch"
        },
        {
          "layer": "4",
          "layerTitle": "Schicht 4: Simulation",
          "refCode": "IND-META-2026-ISG-VIRTUOS",
          "nodeName": "ISG-virtuos",
          "role": "Hardware-in-the-Loop VIBn Server"
        },
        {
          "layer": "5",
          "layerTitle": "Schicht 5: Immersion",
          "refCode": "IND-META-2026-UNREAL-ENGINE-5",
          "nodeName": "Unreal Engine 5",
          "role": "RTX Dashboard & Teleoperation"
        }
      ]
    }
  ]
};
window.PROFILES_DATA = {
  "IND-META-2026-AAS-IEC63278": {
    "refCode": "IND-META-2026-AAS-IEC63278",
    "categoryCode": "3.1",
    "categoryName": "Verwaltungsschale & Zwillings-Standards",
    "name": "Asset Administration Shell / AAS (IEC 63278)",
    "subtitle": "RAMI 4.0 Standard für digitale Verwaltungsschalen",
    "vendor": "IDTA / Plattform Industrie 4.0",
    "hq": "Frankfurt, Deutschland (EU)",
    "businessModel": "Open International Standard (IEC 63278)",
    "url": "https://industrialdigitaltwin.org",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "PFLICHTSTANDARD INTEROP",
    "overview": "Der offizielle RAMI 4.0 Standard für digitale Zwillings-Metadaten. Kapselt technische Dokumentationen, Zertifikate, CAD-Modelle, CO2-Fußabdrücke und Sensorpunkte eines Industrie-Assets.",
    "features": [
      {
        "title": "Standard-Teilmodelle",
        "desc": "Vordefinierte Teilmodelle für Digital Product Passport (DPP), CO2-Fußabdruck und CAD."
      },
      {
        "title": "REST API & OPC UA Mapping",
        "desc": "Standardisierte Abfrage-Endpunkte für die IT/OT-Kommunikation."
      },
      {
        "title": "Herstellerneutraler Container",
        "desc": "Gekapselt in AASX-Dateipaketen mit XML/JSON-Schema."
      }
    ],
    "inputs": [
      "XML",
      "JSON",
      "AASX Packages",
      "OPC UA NodeSets",
      "PDF"
    ],
    "outputs": [
      "AASX Package",
      "REST API JSON",
      "RDF Knowledge Graphs"
    ],
    "bridges": [
      "Siemens Operations X",
      "Collectu Engine",
      "NVIDIA Omniverse USD Metadata"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Strategische Voraussetzung für EU-Hersteller zur Erfüllung des digitalen Produktpasses."
      },
      {
        "title": "Vorteile",
        "text": "Eliminiert herstellerspezifische Daten-Silos für Zwillings-Metadaten vollständig."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert die Zuordnung von CAD-Attributen zu AAS-Teilmodellen."
      }
    ],
    "compliance": {
      "omniverse": "Metadata Bridge",
      "sovereignty": "100% EU RAMI 4.0 Standard",
      "openStandard": "IEC 63278 / IDTA"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Server Container / Edge Service",
      "maturity": "Produktiv",
      "area": "Interoperable Zwillings-Struktur"
    },
    "staffing": "1x Digital Twin Architect (50% FTE)"
  },
  "IND-META-2026-AASX-PACKAGE": {
    "refCode": "IND-META-2026-AASX-PACKAGE",
    "categoryCode": "2.4",
    "categoryName": "Datenformate & OpenUSD-Standards",
    "name": "AASX Packages (IDTA / IEC 63278 Container)",
    "subtitle": "Standardisierter Zwillings-Datencontainer",
    "vendor": "IDTA / Plattform Industrie 4.0",
    "hq": "Frankfurt, Deutschland (EU)",
    "businessModel": "Open International Standard Container (IEC 63278)",
    "url": "https://industrialdigitaltwin.org",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "PFLICHTSTANDARD CONTAINER",
    "overview": "Zip-Containerformat zur Verpackung vollständiger Verwaltungsschalen-Metadaten, XML/JSON-Teilmodelle, PDF-Handbücher und 3D-CAD-Modelle.",
    "features": [
      {
        "title": "Vollständiger digitaler Zwilling",
        "desc": "Bündelt Zertifikate, Handbücher und CAD-Daten in einer Datei."
      },
      {
        "title": "Standard-OPC-Verpackung",
        "desc": "Kompatibel mit Standard-ZIP-Tools und AASX Package Explorer."
      },
      {
        "title": "Digital Product Passport Ready",
        "desc": "Konformes Paketformat für den EU-Produktpass."
      }
    ],
    "inputs": [
      "XML",
      "JSON",
      "PDF Dokumente",
      "STEP CAD Datein"
    ],
    "outputs": [
      ".aasx (IDTA Package File)"
    ],
    "bridges": [
      "Collectu Engine",
      "Siemens Operations X",
      "AASX Package Explorer",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "International vorgeschriebenes Paketformat zum Austausch digitaler Zwillinge."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-souveräner Standard zur Gewährleistung der Interoperabilität."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert die Umsetzung von IDTA-Teilmodellen in Entwicklerteams."
      }
    ],
    "compliance": {
      "omniverse": "AAS Bridge",
      "sovereignty": "100% EU Standard (IEC 63278)",
      "openStandard": "IEC 63278"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Digital Twin Container File",
      "maturity": "Produktiv",
      "area": "Verwaltungsschalen-Paketierung"
    },
    "staffing": "1x Standards Engineer (10% FTE)"
  },
  "IND-META-2026-ALTAIR-HYPERWORKS": {
    "refCode": "IND-META-2026-ALTAIR-HYPERWORKS",
    "categoryCode": "4.1",
    "categoryName": "CAE & Multiphysik-Simulation",
    "name": "Altair (HyperWorks / EDEM)",
    "subtitle": "Struktur- & Partikelsimulation (DEM)",
    "vendor": "Altair Engineering Inc.",
    "hq": "Troy, MI, USA / EU Support",
    "businessModel": "Units-Based Licensing Subscription",
    "url": "https://altair.com",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "EVALUIERT",
    "overview": "Enterprise-Simulationssuite bekannt für HyperMesh-Pre-Processing und EDEM (Discrete Element Method) zur Schüttgut- und Partikelsimulation.",
    "features": [
      {
        "title": "Altair EDEM",
        "desc": "Diskrete-Elemente-Physikmodellierung für Kies, Pulver und Schüttgüter."
      },
      {
        "title": "HyperMesh",
        "desc": "Branchenführende FEM-Vernetzungs-Engine für hochdynamische Crashtests."
      },
      {
        "title": "Units-Lizenzmodell",
        "desc": "Einheiten-Pool schaltet flexible Solver nach Bedarf frei."
      }
    ],
    "inputs": [
      "STEP",
      "IGES",
      "Parasolid",
      "CATIA",
      "SolidWorks"
    ],
    "outputs": [
      "Altair H3D",
      "VTK",
      "OpenUSD (via EDEM Extension)"
    ],
    "bridges": [
      "NVIDIA Omniverse EDEM Extension",
      "Siemens Teamcenter",
      "Ansys"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unerlässlich für Schwermaschinen, Bergbau und Pharma-Verpackungsanlagen."
      },
      {
        "title": "Vorteile",
        "text": "Direkte EDEM-zu-Omniverse-Brücke visualisiert Partikeldynamik live auf USD-Bühnen."
      },
      {
        "title": "Engpässe",
        "text": "Hohe Einstiegskosten für kleinere Ingenieurbüros."
      }
    ],
    "compliance": {
      "omniverse": "EDEM Connector",
      "sovereignty": "SOC2 Compliant",
      "openStandard": "STEP AP242 / H3D"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "Workstation / Compute Server",
      "maturity": "Produktiv",
      "area": "Schüttgut- & Partikelsimulation"
    },
    "staffing": "1x Partikelsimulations-Ingenieur (50% FTE)"
  },
  "IND-META-2026-AMQP-PROTOCOL": {
    "refCode": "IND-META-2026-AMQP-PROTOCOL",
    "categoryCode": "1.8",
    "categoryName": "Industrial IoT-Protokolle",
    "name": "AMQP Enterprise Messaging",
    "subtitle": "Zuverlässiges Enterprise-Messaging für Cloud",
    "vendor": "OASIS Consortium",
    "hq": "Boston, MA, USA / Global",
    "businessModel": "Open International Standard (ISO/IEC 19464)",
    "url": "https://amqp.org",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "EVALUIERT",
    "overview": "Unternehmensgerechtes Messaging-Protokoll für transaktionssicheres Queuing, Routing und Punkt-zu-Punkt-Zustellung von Nachrichten.",
    "features": [
      {
        "title": "Garantierte Zustellung",
        "desc": "Transaktionssichere Warteschlangen garantieren Schutz vor Datenverlust."
      },
      {
        "title": "Komplexes Routing",
        "desc": "Multi-Tenant-Börsen zur gezielten Nachrichtenverteilung."
      },
      {
        "title": "Cloud-Native",
        "desc": "Kernprotokoll für Azure Service Bus und RabbitMQ."
      }
    ],
    "inputs": [
      "Telemetrie-Payloads",
      "ERP Events",
      "Alerts"
    ],
    "outputs": [
      "AMQP Packets",
      "Event Triggers"
    ],
    "bridges": [
      "Azure Digital Twins",
      "RabbitMQ",
      "ERP Systeme"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Ideal für IT-Event-Queues auf Unternehmensebene."
      },
      {
        "title": "Vorteile",
        "text": "Hohe Unternehmenssicherheit und Transaktionssicherheit."
      },
      {
        "title": "Engpässe",
        "text": "Höherer Header-Overhead als leichtes MQTT."
      }
    ],
    "compliance": {
      "omniverse": "Cloud Bridge",
      "sovereignty": "ISO/IEC 19464",
      "openStandard": "AMQP 1.0"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Enterprise Message Broker",
      "maturity": "Produktiv",
      "area": "Enterprise Event Queues"
    },
    "staffing": "1x Integration Architect (25% FTE)"
  },
  "IND-META-2026-ANSYS-CAE": {
    "refCode": "IND-META-2026-ANSYS-CAE",
    "categoryCode": "4.1",
    "categoryName": "CAE & Multiphysik-Simulation",
    "name": "Ansys (Discovery, Fluent, Mechanical)",
    "subtitle": "High-End Multiphysik & Strömungsmechanik",
    "vendor": "Ansys Inc.",
    "hq": "Canonsburg, PA, USA / EU Support",
    "businessModel": "Enterprise Licensing / Named Seat",
    "url": "https://ansys.com",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "STANDARDIZIERT",
    "overview": "Umfassende Simulationssuite für Strömungsmechanik (CFD), FEM-Strukturanalyse und Elektromagnetik. Überträgt Berechnungsfelder direkt in den 3D-Zwilling.",
    "features": [
      {
        "title": "Ansys Discovery Real-Time",
        "desc": "GPU-beschleunigte interaktive Physikberechnung während der CAD-Konstruktion."
      },
      {
        "title": "Ansys Fluent CFD",
        "desc": "Hochpräzise Strömungssimulation für Reinräume und HVAC-Hallenbelüftung."
      },
      {
        "title": "Omniverse Modeler Bridge",
        "desc": "Export von Simulationsfeldern als kolorierte volumetrische USD-Attribute."
      }
    ],
    "inputs": [
      "STEP",
      "Parasolid",
      "IGES",
      "Ansys Geometry"
    ],
    "outputs": [
      "CGNS",
      "OpenUSD (Volumetric Color Attributes)",
      "VTK",
      "FEA Mesh"
    ],
    "bridges": [
      "Siemens PLM",
      "PTC Windchill",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Weltweiter Maßstab für physikalische Exaktheit bei kritischen Maschinenbauteilen."
      },
      {
        "title": "Vorteile",
        "text": "Direkte Omniverse-Brücke visualisiert Thermo- und Strömungsvektoren live auf der USD-Bühne."
      },
      {
        "title": "Engpässe",
        "text": "Sehr hohe Lizenzkosten; erfordert spezialisierte Berechnungsingenieure."
      }
    ],
    "compliance": {
      "omniverse": "Physics Extension",
      "sovereignty": "SOC2 / Enterprise Standard",
      "openStandard": "CGNS / STEP AP242"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "HPC Compute Cluster",
      "maturity": "Produktiv",
      "area": "Thermodynamik & Strukturanalyse"
    },
    "staffing": "1x Simulation Specialist / CAE Engineer (100% FTE)"
  },
  "IND-META-2026-APPLE-VISION-PRO": {
    "refCode": "IND-META-2026-APPLE-VISION-PRO",
    "categoryCode": "5.2",
    "categoryName": "Spatial XR & VR/AR Headsets",
    "name": "Apple Vision Pro Enterprise",
    "subtitle": "High-End Spatial Computing Hardware",
    "vendor": "Apple Inc.",
    "hq": "Cupertino, CA, USA",
    "businessModel": "Hardware Purchase (~€3,999/unit) + visionOS",
    "url": "https://apple.com/apple-vision-pro",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "PREMIUM SPATIAL DEVICE",
    "overview": "Spatial Computer mit extrem hochauflösenden Micro-OLED-Displays (23 Millionen Pixel) für gestochen scharfe CAD-Prüfungen und Cloud-Streaming.",
    "features": [
      {
        "title": "Micro-OLED 4K Displays",
        "desc": "Gestochen scharfe Lesbarkeit komplexer Schaltpläne und CAD-Zeichnungen."
      },
      {
        "title": "Augen- & Handtracking",
        "desc": "Controller-freie Navigation durch Blick und Geste."
      },
      {
        "title": "Natives USDZ & WebXR",
        "desc": "Direktes Rendering von OpenUSD-Modellen ohne Konverter."
      }
    ],
    "inputs": [
      "USDZ",
      "WebXR",
      "NVIDIA Omniverse Cloud WebRTC Stream"
    ],
    "outputs": [
      "ARKit Spatial Mesh",
      "Eye/Hand Pose Telemetry"
    ],
    "bridges": [
      "NVIDIA Omniverse Cloud Streaming App",
      "PTC Vuforia",
      "Siemens NX VR"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Beste Visualisierungsqualität für Design-Reviews auf Führungsebene."
      },
      {
        "title": "Vorteile",
        "text": "WebRTC-Streaming überträgt riesige Omniverse USD-Bühnen direkt auf die Brille."
      },
      {
        "title": "Engpässe",
        "text": "Hohes Gewicht; externe Batterie auf ca. 2 Stunden Nutzungsdauer begrenzt."
      }
    ],
    "compliance": {
      "omniverse": "WebRTC Streaming Native",
      "sovereignty": "SOC2 / Apple Enterprise",
      "openStandard": "USDZ / WebXR / OpenXR"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Wearable Spatial Computer",
      "maturity": "Produktiv",
      "area": "High-End CAD Review & Streaming"
    },
    "staffing": "1x Spatial App Specialist (25% FTE)"
  },
  "IND-META-2026-ARTEC3D-STUDIO": {
    "refCode": "IND-META-2026-ARTEC3D-STUDIO",
    "categoryCode": "1.4",
    "categoryName": "Handheld 3DGS & Photogrammetrie",
    "name": "Artec 3D Cloud / Studio (Leo & Eva)",
    "subtitle": "Messtechnischer 3D-Handscanner für Reverse Engineering",
    "vendor": "Artec 3D",
    "hq": "Luxemburg (EU)",
    "businessModel": "Hardware Purchase + Annual License",
    "url": "https://artec3d.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "STANDARDIZIERT",
    "overview": "Hochpräzise Handscanner (Artec Leo/Eva) für Reverse Engineering und Qualitätskontrolle mit Sub-Millimeter-Genauigkeit.",
    "features": [
      {
        "title": "Sub-Millimeter Genauigkeit",
        "desc": "Bis zu 0,05mm 3D-Punktgenauigkeit für Qualitätsprüfungen."
      },
      {
        "title": "Kabelloser Artec Leo Scanner",
        "desc": "Kabelloser Betrieb mit integriertem HD-Touch-Display."
      },
      {
        "title": "Artec Studio CAD Tools",
        "desc": "Wandelt dichte Meshes in parametrische CAD-Flächen (NURBS)."
      }
    ],
    "inputs": [
      "Structured Light Rays",
      "Blue Laser Lines"
    ],
    "outputs": [
      "STEP",
      "IGES",
      "OBJ",
      "STL",
      "OpenUSD (.usd)"
    ],
    "bridges": [
      "SolidWorks",
      "Geomagic Design X",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unerlässlich für Reverse Engineering, wenn keine CAD-Modelle alter Maschinen existieren."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Fertigung (Luxemburg) mit zertifizierter Messgenauigkeit."
      },
      {
        "title": "Engpässe",
        "text": "Hoher Preis für rein lokales Komponenten-Scannen."
      }
    ],
    "compliance": {
      "omniverse": "USD Exporter",
      "sovereignty": "100% EU Souverän (Luxemburg)",
      "openStandard": "STEP / STL"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Handheld Scanner + PC",
      "maturity": "Produktiv",
      "area": "Reverse Engineering & Qualitätsprüfung"
    },
    "staffing": "1x Messtechniker (50% FTE)"
  },
  "IND-META-2026-AUTODESK-3DSMAX": {
    "refCode": "IND-META-2026-AUTODESK-3DSMAX",
    "categoryCode": "2.3",
    "categoryName": "DCC & Generatives 3D-Design",
    "name": "Autodesk 3ds Max",
    "subtitle": "Industrial DCC & Mesh-Optimierung",
    "vendor": "Autodesk Inc.",
    "hq": "San Francisco, CA, USA",
    "businessModel": "Enterprise Subscription / Token Flex",
    "url": "https://autodesk.com/3ds-max",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Industrielle DCC-Software für Architektur-Visualisierung, CAD-Geometriebereinigung und Echtzeit-Asset-Vorbereitung für Spatial Engines.",
    "features": [
      {
        "title": "Retopology Tools",
        "desc": "Automatisierte Polygon-Optimierung für hochdichte CAD-Meshes."
      },
      {
        "title": "USD for 3ds Max",
        "desc": "Zerstörungsfreie OpenUSD-Bühnenbearbeitung und Material-Mapping."
      },
      {
        "title": "Arnold Renderer",
        "desc": "High-End Photorealistic Raytracing Engine."
      }
    ],
    "inputs": [
      "MAX",
      "FBX",
      "OBJ",
      "Inventor (.IPT)",
      "STEP",
      "Revit (.RVT)"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "glTF 2.0",
      "FBX",
      "OBJ"
    ],
    "bridges": [
      "NVIDIA Omniverse",
      "Unreal Engine Datasmith",
      "Unity"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Standardwerkzeug zur Wandlung schwerer CAD-Architektur in Echtzeit-Assets."
      },
      {
        "title": "Vorteile",
        "text": "Nativer Import von Autodesk Inventor- und Revit-Formaten unter Beibehaltung der Hierarchie."
      },
      {
        "title": "Engpässe",
        "text": "Hohe Lizenzkosten pro Arbeitsplatz; nur für Windows verfügbar."
      }
    ],
    "compliance": {
      "omniverse": "USD Extension",
      "sovereignty": "SOC2 Compliant",
      "openStandard": "OpenUSD / glTF 2.0"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Windows Desktop",
      "maturity": "Produktiv",
      "area": "High-End Visualisierung"
    },
    "staffing": "1x 3D Visualization Specialist (50% FTE)"
  },
  "IND-META-2026-AUTODESK-CIVIL3D": {
    "refCode": "IND-META-2026-AUTODESK-CIVIL3D",
    "categoryCode": "2.2",
    "categoryName": "BIM, Bauwesen & Infrastruktur (AEC)",
    "name": "Autodesk Civil 3D",
    "subtitle": "Gelände- & Infrastruktur-BIM für Fabrikareale",
    "vendor": "Autodesk Inc.",
    "hq": "San Francisco, CA, USA",
    "businessModel": "Annual Subscription",
    "url": "https://autodesk.com/civil-3d",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Infrastruktur- und Tiefbau-Software für die Erschließungsplanung, digitale Geländemodellierung und Trassierung von Fabrikarealen.",
    "features": [
      {
        "title": "Dynamische Geländemodelle",
        "desc": "Hochpräzise DTM-Erzeugung für Erdmassenberechnung und Entwässerung."
      },
      {
        "title": "Kanal- & Rohrnetze",
        "desc": "Unterirdische Versorgungsnetze und Erdkabeltrassen."
      },
      {
        "title": "GIS-Datenintegration",
        "desc": "Direkte Anbindung von ESRI ArcGIS-Kartenebenen."
      }
    ],
    "inputs": [
      "DWG",
      "LandXML",
      "DEM",
      "Point Cloud (E57/LAS)"
    ],
    "outputs": [
      "IFC4 Civil",
      "LandXML",
      "DWG",
      "OpenUSD (.usd)"
    ],
    "bridges": [
      "ESRI ArcGIS",
      "Autodesk InfraWorks",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unverzichtbar für großflächige Werksgelände und Logistikanbindungen."
      },
      {
        "title": "Vorteile",
        "text": "Nahtlose Verbindung von georeferenzierte Geländedaten mit Hochbau-BIM."
      },
      {
        "title": "Engpässe",
        "text": "Export in 3D-Echtzeit-Engines erfordert Netzvereinfachung."
      }
    ],
    "compliance": {
      "omniverse": "Extension Bridge",
      "sovereignty": "SOC2 / ISO Compliant",
      "openStandard": "LandXML / IFC Civil"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop App",
      "maturity": "Produktiv",
      "area": "Werksinfrastruktur & Erschließung"
    },
    "staffing": "1x Infrastrukturingenieur (25% FTE)"
  },
  "IND-META-2026-AUTODESK-FUSION": {
    "refCode": "IND-META-2026-AUTODESK-FUSION",
    "categoryCode": "2.1",
    "categoryName": "Mechanisches CAD (MCAD)",
    "name": "Autodesk Fusion 360",
    "subtitle": "Cloud-CAD/CAM & Prototyping für Entwicklungsteams",
    "vendor": "Autodesk Inc.",
    "hq": "San Francisco, CA, USA",
    "businessModel": "Low-Cost SaaS Cloud Subscription",
    "url": "https://autodesk.com/fusion-360",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EVALUIERT",
    "overview": "Integrierte Cloud-Plattform für 3D-CAD, CAM, CAE und Leiterplatten-Design. Beliebt bei Fertigungsbetrieben, Hardware-Startups und Entwicklungsteams für schnelles Prototyping.",
    "features": [
      {
        "title": "Integrierte 5-Achs-CAM",
        "desc": "Direkte Erzeugung von CNC-Werkzeugpfaden aus dem CAD-Modell."
      },
      {
        "title": "Cloud Generative Design",
        "desc": "KI-gestützte Bauteil-Leichtbauoptimierung in der Cloud."
      },
      {
        "title": "Direkter OpenUSD Export",
        "desc": "Integrierte OpenUSD- und glTF-Exportmodule."
      }
    ],
    "inputs": [
      "F3D",
      "STEP",
      "IGES",
      "SolidWorks",
      "SAT"
    ],
    "outputs": [
      "OpenUSD (.usdz/.usd)",
      "glTF 2.0",
      "STEP",
      "STL"
    ],
    "bridges": [
      "Autodesk Fusion Team",
      "Autodesk Construction Cloud",
      "Blender"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Hervorragend für Werkzeugbau und Roboter-Greifer; begrenzt bei Werkslayouts im Gigabyte-Bereich."
      },
      {
        "title": "Vorteile",
        "text": "Extrem niedrige Einstiegshürde und schnelle Bereitstellung im Team."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert ständige Internetverbindung für fortgeschrittene Solver-Funktionen."
      }
    ],
    "compliance": {
      "omniverse": "Native Export",
      "sovereignty": "SOC2 / US Cloud PaaS",
      "openStandard": "glTF 2.0 / STEP"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Cloud Desktop App",
      "maturity": "Produktiv",
      "area": "Werkzeugbau & Rapid Prototyping"
    },
    "staffing": "1x CAD/CAM Techniker (25% FTE)"
  },
  "IND-META-2026-AUTODESK-MAYA": {
    "refCode": "IND-META-2026-AUTODESK-MAYA",
    "categoryCode": "2.3",
    "categoryName": "DCC & Generatives 3D-Design",
    "name": "Autodesk Maya",
    "subtitle": "Kinematik-Rigging & Worker-Animation",
    "vendor": "Autodesk Inc.",
    "hq": "San Francisco, CA, USA",
    "businessModel": "Enterprise Subscription",
    "url": "https://autodesk.com/maya",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Animations- und Rigging-Software für Ergonomie- und Arbeiter-Animationen sowie komplexe Roboterkinematik im digitalen Zwilling.",
    "features": [
      {
        "title": "Maya USD Integration",
        "desc": "Tief integrierte Pixar OpenUSD Viewport-Engine."
      },
      {
        "title": "Human Kinematic Rigging",
        "desc": "Inverse Kinematik (IK) für Werksarbeiter-Ergonomiestudien."
      },
      {
        "title": "Bifrost Procedural Engine",
        "desc": "Visuelles Programmieren für Partikel und Physik."
      }
    ],
    "inputs": [
      "MA",
      "MB",
      "FBX",
      "OBJ",
      "USD",
      "Alembic"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "FBX",
      "glTF 2.0",
      "Alembic"
    ],
    "bridges": [
      "NVIDIA Omniverse",
      "Unreal Engine 5",
      "OptiTrack Mocap"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unangefochtener Standard für das Rigging von Humanoiden und Roboter-Kinematiken."
      },
      {
        "title": "Vorteile",
        "text": "Arbeiten direkt in USD-Attributen im Viewport."
      },
      {
        "title": "Engpässe",
        "text": "Überkomplex für reine mechanische CAD-Modellierung."
      }
    ],
    "compliance": {
      "omniverse": "Native USD Viewport",
      "sovereignty": "SOC2 Compliant",
      "openStandard": "OpenUSD / Alembic"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "Linux / Windows Desktop",
      "maturity": "Produktiv",
      "area": "Kinematik-Rigging & Mocap"
    },
    "staffing": "1x Rigging Specialist (50% FTE)"
  },
  "IND-META-2026-AUTODESK-RECAP": {
    "refCode": "IND-META-2026-AUTODESK-RECAP",
    "categoryCode": "1.5",
    "categoryName": "360°-Erfassung & GIS-Kartierung",
    "name": "Autodesk ReCap Pro",
    "subtitle": "Punktwolken-Aufbereitung & Photogrammetrie",
    "vendor": "Autodesk Inc.",
    "hq": "San Francisco, CA, USA",
    "businessModel": "Enthalten in AEC Collection / Subscription",
    "url": "https://autodesk.com/recap",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EVALUIERT",
    "overview": "Punktwolken-Software zum Bereinigen, Beschneiden und Umwandeln roher Scans in das Autodesk RCS/RCP-Format.",
    "features": [
      {
        "title": "Punktwolken-Bereinigung",
        "desc": "Entfernt Rauschen, Personen und störende Objekte aus Scans."
      },
      {
        "title": "Photo-to-3D Mesh",
        "desc": "Wandelt Drohnenfotos in 3D-Meshes um."
      },
      {
        "title": "RCS-Indexierung",
        "desc": "Kompression von E57-Dateien für Autodesk Revit."
      }
    ],
    "inputs": [
      "E57",
      "LAS",
      "PTX",
      "Drone Photos"
    ],
    "outputs": [
      "RCS",
      "RCP",
      "OBJ",
      "OpenUSD"
    ],
    "bridges": [
      "Autodesk Revit",
      "Inventor",
      "AutoCAD",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "De-facto Zwischenschritt vor dem Verknüpfen von Scans in Revit."
      },
      {
        "title": "Vorteile",
        "text": "Bestandteil fast jeder Autodesk AEC Lizenz."
      },
      {
        "title": "Engpässe",
        "text": "Einfacher Funktionsumfang verglichen mit Profi-Vermessungssuites."
      }
    ],
    "compliance": {
      "omniverse": "USD Exporter",
      "sovereignty": "SOC2 Compliant",
      "openStandard": "E57 / OBJ"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Desktop Windows App",
      "maturity": "Produktiv",
      "area": "Punktwolken-Vorverarbeitung"
    },
    "staffing": "1x CAD Drafter (25% FTE)"
  },
  "IND-META-2026-AUTODESK-REVIT": {
    "refCode": "IND-META-2026-AUTODESK-REVIT",
    "categoryCode": "2.2",
    "categoryName": "BIM, Bauwesen & Infrastruktur (AEC)",
    "name": "Autodesk Revit",
    "subtitle": "BIM Master-System für digitale Fabrikgebäude",
    "vendor": "Autodesk Inc.",
    "hq": "San Francisco, CA, USA",
    "businessModel": "Annual Subscription / Enterprise Flex",
    "url": "https://autodesk.com/revit",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "STANDARDIZIERT",
    "overview": "Der globale Standard für Building Information Modeling (BIM). Generiert intelligente 3D-Gebäudemodelle mit architektonischen, strukturellen und TGA-Informationen.",
    "features": [
      {
        "title": "BIM Metadaten (COBie)",
        "desc": "Umfassende semantische Bauteileigenschaften für das Facility Management."
      },
      {
        "title": "TGA/MEP Trassenplanung",
        "desc": "Detaillierte Modellierung von Lüftungs-, Elektro- und Rohrleitungssystemen."
      },
      {
        "title": "Omniverse Connector Plugin",
        "desc": "Bi-direktionaler Live-Sync zu NVIDIA Omniverse OpenUSD-Bühnen."
      }
    ],
    "inputs": [
      "RVT",
      "IFC",
      "DWG",
      "Point Cloud (.RCS/.RCP)"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "IFC4 ISO 16739",
      "DWG",
      "FBX"
    ],
    "bridges": [
      "Autodesk Construction Cloud (ACC)",
      "NVIDIA Omniverse",
      "NavVis IVION"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "De-facto-Standard für Fabrikhüllen und TGA-Infrastruktur."
      },
      {
        "title": "Vorteile",
        "text": "Direktes USD-Plugin wandelt BIM-Parameter ohne Datenverlust in OpenUSD Prim-Attribute um."
      },
      {
        "title": "Engpässe",
        "text": "Hoher RAM-Bedarf; erfordert Geometrie-Vereinfachung für Echtzeit-VR."
      }
    ],
    "compliance": {
      "omniverse": "Connector Plugin",
      "sovereignty": "ISO 19650 BIM Standard",
      "openStandard": "IFC4 / OpenUSD"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop / Cloud ACC",
      "maturity": "Produktiv",
      "area": "Fabrikgebäude & TGA-Planung"
    },
    "staffing": "1x BIM-Koordinator / Spatial Engineer (50% FTE)"
  },
  "IND-META-2026-AWS-TWINMAKER": {
    "refCode": "IND-META-2026-AWS-TWINMAKER",
    "categoryCode": "3.3",
    "categoryName": "Enterprise Cloud-Zwillinge",
    "name": "AWS IoT TwinMaker",
    "subtitle": "Cloud-Plattform für 3D-Digital-Twins",
    "vendor": "Amazon Web Services Inc.",
    "hq": "Seattle, WA, USA",
    "businessModel": "Pay-Per-Use Cloud SaaS PaaS",
    "url": "https://aws.amazon.com/iot-twinmaker",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Cloud-Plattform, die Entwicklern das Erstellen digitaler Zwillinge ermöglicht durch Aggregation bestehender AWS-Datenspeicher.",
    "features": [
      {
        "title": "Unified Connectors",
        "desc": "Verbindet AWS SiteWise, Kinesis Streams und S3-Buckets."
      },
      {
        "title": "Grafana 3D Plugin",
        "desc": "Rendert 3D-Modelle direkt in Grafana-Dashboards."
      },
      {
        "title": "OpenUSD Import",
        "desc": "Importiert OpenUSD- und glTF-Geometrie automatisch."
      }
    ],
    "inputs": [
      "AWS SiteWise Data",
      "Kinesis Streams",
      "OpenUSD (.usd)",
      "glTF 2.0"
    ],
    "outputs": [
      "Grafana 3D Visualisations",
      "AWS IoT Events"
    ],
    "bridges": [
      "NVIDIA Omniverse Cloud",
      "Matterport",
      "Amazon Grafana"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Bevorzugte Plattform für Unternehmenskunden mit AWS-Fokus."
      },
      {
        "title": "Vorteile",
        "text": "Direktes 3D-Plugin für verbreitete Grafana-Dashboards."
      },
      {
        "title": "Engpässe",
        "text": "Starke Abhängigkeit vom AWS-Cloud-Ökosystem."
      }
    ],
    "compliance": {
      "omniverse": "Cloud Stream Connector",
      "sovereignty": "SOC2 / ISO 27001",
      "openStandard": "OpenUSD / glTF 2.0"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "AWS Cloud Infrastructure",
      "maturity": "Produktiv",
      "area": "Cloud 3D Twin & Grafana Dashboards"
    },
    "staffing": "1x AWS IIoT Engineer (50% FTE)"
  },
  "IND-META-2026-AZURE-TWINS": {
    "refCode": "IND-META-2026-AZURE-TWINS",
    "categoryCode": "3.3",
    "categoryName": "Enterprise Cloud-Zwillinge",
    "name": "Microsoft Azure Digital Twins",
    "subtitle": "Cloud-Graphendienst für Fabriken",
    "vendor": "Microsoft Corporation",
    "hq": "Redmond, WA, USA",
    "businessModel": "Cloud Consumption PaaS",
    "url": "https://azure.microsoft.com/services/digital-twins",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "PaaS-Plattform zum Erstellen graphbasierter digitaler Modelle kompletter Fertigungsnetzwerke und Lieferketten.",
    "features": [
      {
        "title": "DTDL Spatial Graph",
        "desc": "Modelliert räumliche Hierarchien (Konzern -> Werk -> Linie -> Roboter)."
      },
      {
        "title": "Azure IoT Hub Ingestion",
        "desc": "Massen-Ingestion von Millionen MQTT/AMQP-Sensornachrichten."
      },
      {
        "title": "3D Scene Studio",
        "desc": "Web-Visualisierer überlagert Telemetrie auf glTF/USD-Assets."
      }
    ],
    "inputs": [
      "DTDL v3 Schemas",
      "MQTT",
      "AMQP",
      "REST JSON"
    ],
    "outputs": [
      "Azure Synapse Events",
      "Event Grid Notifications",
      "3D Web Overlay"
    ],
    "bridges": [
      "NVIDIA Omniverse Cloud",
      "Power BI",
      "Bentley iTwin"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Ausgezeichnet für internationale Fertigungsstandorte."
      },
      {
        "title": "Vorteile",
        "text": "Nahtlose Integration in Microsoft Enterprise Cloud und Power BI."
      },
      {
        "title": "Engpässe",
        "text": "Rein cloudbasiert; begrenzte lokale On-Premise Ausführungsoptionen."
      }
    ],
    "compliance": {
      "omniverse": "Cloud Streaming Extension",
      "sovereignty": "DSGVO Cloud (Frankfurt)",
      "openStandard": "DTDL / JSON-LD"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Azure Cloud PaaS",
      "maturity": "Produktiv",
      "area": "Werksübergreifende Zwillingsgraphen"
    },
    "staffing": "1x Azure Cloud Architect (50% FTE)"
  },
  "IND-META-2026-BENTLEY-ITWIN": {
    "refCode": "IND-META-2026-BENTLEY-ITWIN",
    "categoryCode": "3.3",
    "categoryName": "Enterprise Cloud-Zwillinge",
    "name": "Bentley iTwin Platform",
    "subtitle": "Infrastruktur- & Prozessanlagen-Zwilling",
    "vendor": "Bentley Systems Inc.",
    "hq": "Exton, PA, USA",
    "businessModel": "Enterprise SaaS / Developer Platform Units",
    "url": "https://bentley.com/itwin",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "STANDARDIZIERT",
    "overview": "Offene digital Zwillingsplattform für Großinfrastruktur, Prozessanlagen, Versorgungsnetze und Fabrikareale.",
    "features": [
      {
        "title": "iModel Open Schema",
        "desc": "Datenbankschema zur Verfolgung von 3D-Änderungshistorien über Jahrzehnte."
      },
      {
        "title": "Cesium 3D Tiles Streaming",
        "desc": "Massen-Streaming von Geländedaten und Anlageninfrastruktur."
      },
      {
        "title": "Sync Engine",
        "desc": "Kontinuierliche Synchronisation mit MicroStation, Revit und OpenUSD."
      }
    ],
    "inputs": [
      "DGN",
      "RVT",
      "IFC",
      "Point Clouds",
      "OpenUSD"
    ],
    "outputs": [
      "iModel",
      "3D Tiles",
      "WebGL Stream",
      "OpenUSD Stage"
    ],
    "bridges": [
      "NVIDIA Omniverse",
      "Cesium GS",
      "Microsoft Azure Digital Twins"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unangefochtener Marktführer für Chemieanlagen und Großinfrastruktur."
      },
      {
        "title": "Vorteile",
        "text": "Verfolgt winzigste 3D-Änderungen über Jahrzehnte."
      },
      {
        "title": "Engpässe",
        "text": "Ausgerichtet auf Infrastruktur statt Roboterkinematik."
      }
    ],
    "compliance": {
      "omniverse": "iTwin Connector",
      "sovereignty": "ISO 19650 Compliant",
      "openStandard": "iModel / 3D Tiles"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "Enterprise Cloud",
      "maturity": "Produktiv",
      "area": "Prozessanlagen & Infrastruktur"
    },
    "staffing": "1x Infrastructure Specialist (100% FTE)"
  },
  "IND-META-2026-BLENDER-3D": {
    "refCode": "IND-META-2026-BLENDER-3D",
    "categoryCode": "2.3",
    "categoryName": "DCC & Generatives 3D-Design",
    "name": "Blender 3D Suite",
    "subtitle": "Open-Source DCC & OpenUSD Pipeline Workhorse",
    "vendor": "Blender Foundation",
    "hq": "Amsterdam, Niederlande (EU)",
    "businessModel": "Free & Open Source (GPL v3)",
    "url": "https://blender.org",
    "tier": "Tier 1",
    "costLabel": "Open Source / €0",
    "status": "ESSENTIAL DCC",
    "overview": "Open-Source 3D-Creation Suite für Modellierung, UV-Unwrapping, Texture-Baking und prozedurale Asset-Aufbereitung. Dient als primäres Bereinigungswerkzeug für digitale Zwillinge.",
    "features": [
      {
        "title": "Geometry Nodes",
        "desc": "Prozedurale Erzeugung von Schutzzäunen, Rohrleitungen und Fabrik-Requisiten."
      },
      {
        "title": "Cycles & EEVEE Engines",
        "desc": "Physikalisch basiertes PBR-Material-Preview und Textur-Baking."
      },
      {
        "title": "Nativer OpenUSD I/O",
        "desc": "Direkter C++ OpenUSD-Export und -Import von Szenengraphen."
      }
    ],
    "inputs": [
      "FBX",
      "OBJ",
      "glTF 2.0",
      "STL",
      "USD",
      "Alembic"
    ],
    "outputs": [
      "OpenUSD (.usda/.usdc/.usdz)",
      "glTF 2.0",
      "FBX",
      "OBJ"
    ],
    "bridges": [
      "NVIDIA Omniverse USD Composer",
      "Unreal Engine 5",
      "Unity"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Hohe Skalierbarkeit; per Python-Skripting für automatisiertes Batch-Processing erweiterbar."
      },
      {
        "title": "Vorteile",
        "text": "Zero-Lizenzkosten mit hervorragender OpenUSD-Kompatibilität und 100% EU-Rechtssicherheit."
      },
      {
        "title": "Engpässe",
        "text": "Direkter Import nativer CAD-NURBS-Dateien erfordert Add-ons."
      }
    ],
    "compliance": {
      "omniverse": "Native OpenUSD Core",
      "sovereignty": "100% EU Souverän (FOSS)",
      "openStandard": "OpenUSD / glTF 2.0"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Cross-Platform Desktop",
      "maturity": "Produktiv",
      "area": "3D Asset Aufbereitung & Staging"
    },
    "staffing": "1x 3D Pipeline Artist (50% FTE)"
  },
  "IND-META-2026-CATIA-3DS": {
    "refCode": "IND-META-2026-CATIA-3DS",
    "categoryCode": "2.1",
    "categoryName": "Mechanisches CAD (MCAD)",
    "name": "Dassault CATIA V5 / 3DEXPERIENCE",
    "subtitle": "OEM High-End Class-A Surface Master Engine",
    "vendor": "Dassault Systèmes",
    "hq": "Vélizy-Villacoublay, Frankreich (EU)",
    "businessModel": "Enterprise Named License / 3DEXPERIENCE Subscription",
    "url": "https://3ds.com/catia",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "EVALUIERT",
    "overview": "Der weltweite De-facto-Branchenstandard der Luft-, Raumfahrt- und Automobilindustrie für hochkomplexe Class-A-Flächenmodellierung und Gesamtfahrzeugarchitektur.",
    "features": [
      {
        "title": "ICEM Surf Integration",
        "desc": "High-End Class-A Flächenkonstruktion und ästhetische Lichtreflexions-Validierung."
      },
      {
        "title": "Systems Engineering (SysML)",
        "desc": "Integrierte mechatronische Systemmodellierung verknüpft mit 3D-CAD."
      },
      {
        "title": "3DEXPERIENCE Twin Pipeline",
        "desc": "Echtzeit-Fabrikinbetriebnahme in der virtuellen Cloud."
      }
    ],
    "inputs": [
      "CATPart",
      "CATProduct",
      "STEP AP242",
      "IGES"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "STEP AP242",
      "3DXML"
    ],
    "bridges": [
      "3DEXPERIENCE Platform",
      "DELMIA",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Weltweite Referenz für Multi-Millionen-Teile-Projekte in der Luftfahrt und Automobilindustrie."
      },
      {
        "title": "Vorteile",
        "text": "Unerreichte Flächenpräzision und regelbasierte Konstruktionsautomatisierung."
      },
      {
        "title": "Engpässe",
        "text": "Proprietäre Datenstruktur erfordert dedizierte Konvertierungspipelines für Echtzeit-Engines."
      }
    ],
    "compliance": {
      "omniverse": "Extension Bridge",
      "sovereignty": "100% EU Souverän (Frankreich)",
      "openStandard": "STEP AP242 / ISO 10303"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "Enterprise Client / Cloud",
      "maturity": "Produktiv",
      "area": "Automotive & Aerospace OEM"
    },
    "staffing": "1x Enterprise CATIA Systems Engineer (100% FTE)"
  },
  "IND-META-2026-CESIUM-3DTILES": {
    "refCode": "IND-META-2026-CESIUM-3DTILES",
    "categoryCode": "1.5",
    "categoryName": "360°-Erfassung & GIS-Kartierung",
    "name": "Cesium (3D Tiles Streaming Platform)",
    "subtitle": "OGC 3D Tiles Streaming für Geodaten",
    "vendor": "Cesium GS Inc. / Bentley",
    "hq": "Philadelphia, PA, USA",
    "businessModel": "Open Source Library / Cesium ion Cloud",
    "url": "https://cesium.com",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "STANDARDIZIERT",
    "overview": "Offene Plattform zum Streaming riesiger 3D-Geodaten und 3D-Tiles-Datensätze in Webbrowser und Echtzeit-Engines.",
    "features": [
      {
        "title": "3D Tiles Open Standard",
        "desc": "OGC-Standard zum Streaming von Gigabyte-Geländemodellen."
      },
      {
        "title": "Unreal & Omniverse Plugins",
        "desc": "NATIVE Plugins zum Streamen von Geodaten in 3D-Bühnen."
      },
      {
        "title": "Globale Satellitendaten",
        "desc": "Hochauflösende weltweite Geländedaten."
      }
    ],
    "inputs": [
      "LAS",
      "E57",
      "KML",
      "GeoTIFF",
      "CityGML",
      "OpenUSD"
    ],
    "outputs": [
      "3D Tiles (B3DM/PNTS)",
      "Quantized Mesh",
      "WebGL"
    ],
    "bridges": [
      "NVIDIA Omniverse",
      "Unreal Engine 5",
      "ESRI ArcGIS"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unangefochtener Maßstab zur Darstellung globaler Lieferketten-Zwillinge."
      },
      {
        "title": "Vorteile",
        "text": "Erfinder des offenen OGC 3D Tiles Standards."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert Einrichtung räumlicher KoordinatentTransformationen."
      }
    ],
    "compliance": {
      "omniverse": "3D Tiles Plugin Native",
      "sovereignty": "OGC Open Standard",
      "openStandard": "3D Tiles / glTF"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Web Server / Engine Plugin",
      "maturity": "Produktiv",
      "area": "Globale GIS & Geländedaten"
    },
    "staffing": "1x GIS Developer (50% FTE)"
  },
  "IND-META-2026-COLLECTU": {
    "refCode": "IND-META-2026-COLLECTU",
    "categoryCode": "3.2",
    "categoryName": "KI-Datenmotoren & Pipeline-Bridges",
    "name": "Collectu (No-Code AI Industrial Data Engine)",
    "subtitle": "No-Code KI-Verknüpfung von Maschinen an 3D-OpenUSD",
    "vendor": "Collectu / Futuromundo Cyberländ",
    "hq": "Baden-Württemberg, Deutschland (EU)",
    "businessModel": "No-Code SaaS / Edge Container License",
    "url": "https://futuromundo.com/cyberlaend",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EMPFOHLENE DATA ENGINE",
    "overview": "KI-gestützte No-Code-Datenengine zur nahtlosen Bindung von Maschinen, Sensoren und SPSen an 3D OpenUSD digitale Zwillinge für geschlossene Regelkreise.",
    "features": [
      {
        "title": "No-Code OPC UA/MQTT Binding",
        "desc": "Verbindet Feldsignale in Minuten per Drag-and-Drop mit 3D-USD-Attributen."
      },
      {
        "title": "Spatial Context Engine",
        "desc": "KI-Kontextualisierung ordnet 1D-Sensordaten 3D-Raumkoordinaten zu."
      },
      {
        "title": "Closed-Loop Feedback",
        "desc": "Sendet Steuerbefehle aus 3D-Metaverse-Interaktionen zurück an physische SPSen."
      }
    ],
    "inputs": [
      "OPC UA",
      "MQTT",
      "Modbus",
      "REST API",
      "Siemens S7",
      "ROS 2 Topics"
    ],
    "outputs": [
      "OpenUSD Live Data Stream",
      "AASX Twin Packages",
      "WebSockets JSON"
    ],
    "bridges": [
      "NVIDIA Omniverse Nucleus",
      "Siemens S7 SPS",
      "Asset Administration Shell (AAS)"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Extrem schnelle Bereitstellung; reduziert die Anbindungszeit von Datenkonnektoren von Wochen auf Minuten."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Entwicklung aus Baden-Württemberg unter strikten DSGVO-Standards."
      },
      {
        "title": "Engpässe",
        "text": "Laufender Ausbau der Bibliothek für proprietäre Alt-Protokolle."
      }
    ],
    "compliance": {
      "omniverse": "Native Live Connector",
      "sovereignty": "100% EU Souverän (Baden-Württemberg)",
      "openStandard": "OPC UA / AAS / OpenUSD"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Edge Container / Cloud",
      "maturity": "Produktiv",
      "area": "IT/OT Live-Datenbindung an 3D-Zwilling"
    },
    "staffing": "1x IT/OT Systemadministrator (25% FTE)"
  },
  "IND-META-2026-COMSOL-MULTIPHYSICS": {
    "refCode": "IND-META-2026-COMSOL-MULTIPHYSICS",
    "categoryCode": "4.1",
    "categoryName": "CAE & Multiphysik-Simulation",
    "name": "COMSOL Multiphysics",
    "subtitle": "Gekoppelte Feld- & Thermosimulation",
    "vendor": "COMSOL AB",
    "hq": "Stockholm, Schweden (EU)",
    "businessModel": "Floating Network License / Single User",
    "url": "https://comsol.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Multiphysik-Simulationssoftware zur Modellierung gekoppelter physikalischer Phänomene (elektrisch, mechanisch, fluidisch, akustisch).",
    "features": [
      {
        "title": "Gekoppelte Multiphysik",
        "desc": "Simultane Berechnung von thermischen, elektrischen und mechanischen Spannungen."
      },
      {
        "title": "Application Builder",
        "desc": "Wandelt komplexe Simulationsmodelle in eigenständige Apps um."
      },
      {
        "title": "CAD Import Module",
        "desc": "Direkter parametrischer Import von Industrie-CAD-Teilen."
      }
    ],
    "inputs": [
      "STEP",
      "IGES",
      "Parasolid",
      "DXF",
      "COMSOL MPH"
    ],
    "outputs": [
      "VTK",
      "OpenUSD (via Mesh Export)",
      "STL",
      "Data Matrices"
    ],
    "bridges": [
      "Matlab Simulink",
      "CAD LiveLinks",
      "Web Apps"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Außergewöhnlich für Sensordesign, Batteriezellensimulation und Akustik."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Entwicklung mit flexiblen gekoppelten Differentialgleichungen."
      },
      {
        "title": "Engpässe",
        "text": "Rechenintensiv; erfordert Skalierung auf HPC-Cluster-Knoten."
      }
    ],
    "compliance": {
      "omniverse": "Export Bridge",
      "sovereignty": "100% EU Souverän (Schweden)",
      "openStandard": "STEP / VTK"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "Desktop / HPC Cluster",
      "maturity": "Produktiv",
      "area": "Gekoppelte Multiphysik-Simulation"
    },
    "staffing": "1x Multiphysik-Forscher (50% FTE)"
  },
  "IND-META-2026-DASSAULT-DELMIA": {
    "refCode": "IND-META-2026-DASSAULT-DELMIA",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "Dassault Systèmes DELMIA",
    "subtitle": "Roboterzellen-Offline-Programmierung",
    "vendor": "Dassault Systèmes",
    "hq": "Vélizy-Villacoublay, Frankreich (EU)",
    "businessModel": "3DEXPERIENCE Enterprise Subscription",
    "url": "https://3ds.com/delmia",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "EVALUIERT",
    "overview": "Fertigungs- und Robotiksimulationssoftware eingebettet in die 3DEXPERIENCE-Plattform für Montageabläufe und Fertigungssteuerung.",
    "features": [
      {
        "title": "Robotics Workcell Layout",
        "desc": "Hochpräzise Offline-Roboterprogrammierung (OLP)."
      },
      {
        "title": "Ergonomiespezialist",
        "desc": "Körperhaltungsmodellierung und RULA-Ergonomiebewertung."
      },
      {
        "title": "Prozessplan-Generierung",
        "desc": "Verknüpft die Konstruktions-BOM direkt mit der Fertigungs-BOM (MBOM)."
      }
    ],
    "inputs": [
      "CATPart",
      "STEP",
      "JT",
      "3DXML"
    ],
    "outputs": [
      "OpenUSD (via Connector)",
      "NC Code",
      "Robot Language"
    ],
    "bridges": [
      "3DEXPERIENCE Platform",
      "CATIA",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unerlässlich für Luftfahrt- und Automobilwerke, die auf Dassault-Tools standardisiert sind."
      },
      {
        "title": "Vorteile",
        "text": "Direkte Verknüpfung zwischen Konstruktions-CAD und Werkstatt-Ausführung."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert die vollständige Nutzung des 3DEXPERIENCE-Ökosystems."
      }
    ],
    "compliance": {
      "omniverse": "Connector Bridge",
      "sovereignty": "100% EU Souverän (Frankreich)",
      "openStandard": "STEP AP242 / ISO 10303"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "Cloud / Enterprise Client",
      "maturity": "Produktiv",
      "area": "Roboter-Offline-Programmierung"
    },
    "staffing": "1x DELMIA Specialist (100% FTE)"
  },
  "IND-META-2026-DEEPROBOTICS-M20": {
    "refCode": "IND-META-2026-DEEPROBOTICS-M20",
    "categoryCode": "1.3",
    "categoryName": "Autonome Drohnen & AMR-Roboter",
    "name": "DEEP Robotics M20 Pro (IP66 Quadruped Robot)",
    "subtitle": "Autonomer 4-beiniger Inspektions-Laufroboter",
    "vendor": "DEEP Robotics Inc.",
    "hq": "Hangzhou, China",
    "businessModel": "Hardware Robot Platform + SDK",
    "url": "https://deeprobotics.cn",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "TESTBED",
    "overview": "Industrieller Laufroboter (IP66) für autonome Inspektionsläufe über Treppen, Gitterroste und unwegsames Werksgelände.",
    "features": [
      {
        "title": "IP66 Wasser- & Staubschutz",
        "desc": "Zuverlässiger Einsatz bei Regen und starkem Staub."
      },
      {
        "title": "20kg Nutzlast",
        "desc": "Trägt schwere Laserscanner, Gassensoren und Wärmebildkameras."
      },
      {
        "title": "Autonome Ladestation",
        "desc": "Lädt sich selbstständig auf und lädt Messdaten hoch."
      }
    ],
    "inputs": [
      "ROS 2 Control Topics",
      "Navigation Waypoints"
    ],
    "outputs": [
      "ROS 2 Telemetrie",
      "RTSP Video",
      "3D SLAM Mesh"
    ],
    "bridges": [
      "ROS 2 DDS",
      "NVIDIA Isaac Sim",
      "Collectu Data Engine"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Ersetzt Kontrollgänge in gefährlichen Umspannwerken und Chemiearealen."
      },
      {
        "title": "Vorteile",
        "text": "Hohe Geländegängigkeit über Treppen im Vergleich zu Räder-AMRs."
      },
      {
        "title": "Engpässe",
        "text": "Mechanischer Verschleiß an Bein-Aktuatoren erfordert Wartung."
      }
    ],
    "compliance": {
      "omniverse": "ROS 2 Native Bridge",
      "sovereignty": "IP66 Zertifiziert",
      "openStandard": "ROS 2 DDS"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "Autonomer Roboter",
      "maturity": "Evaluation",
      "area": "Autonome Werksinspektion"
    },
    "staffing": "1x Robotics Operator (50% FTE)"
  },
  "IND-META-2026-E57-POINTCLOUD": {
    "refCode": "IND-META-2026-E57-POINTCLOUD",
    "categoryCode": "2.4",
    "categoryName": "Datenformate & OpenUSD-Standards",
    "name": "E57 (ASTM E2807 - Punktwolken-Standard)",
    "subtitle": "Herstellerneutraler Punktwolken-Standard",
    "vendor": "ASTM International",
    "hq": "West Conshohocken, PA, USA / Global",
    "businessModel": "Open International Standard (ASTM E2807)",
    "url": "https://astm.org/e2807-11.html",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "PFLICHTSTANDARD SCAN",
    "overview": "Herstellerneutrales Binärdateiformat zur Speicherung dichter 3D-Punktwolkendaten, 2D-Panoramabilder und Sensormetadaten von Laserscannern.",
    "features": [
      {
        "title": "Herstellerneutrale Speicherung",
        "desc": "Standardisiert Punktwolken von Leica, FARO, NavVis und Trimble."
      },
      {
        "title": "Integrierte 360° Panoramen",
        "desc": "Speichert sphärische Panoramen direkt verknüpft mit den 3D-Punkten."
      },
      {
        "title": "Hohe Koordinatenpräzision",
        "desc": "Bewahrt geodätische Sub-Millimeter-Koordinaten ohne Rundungsfehler."
      }
    ],
    "inputs": [
      "Raw Laserscanner Telemetrie",
      "SLAM-Systeme"
    ],
    "outputs": [
      ".e57 (ASTM E2807 Container)"
    ],
    "bridges": [
      "NavVis IVION",
      "Leica Cyclone",
      "FARO Sphere",
      "Autodesk ReCap",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Absoluter Universalstandard zum Austausch von Reality-Capture-Daten."
      },
      {
        "title": "Vorteile",
        "text": "Bewahrt exakte Scanner-Standorte und kalibrierte Fotos."
      },
      {
        "title": "Engpässe",
        "text": "Große unkomprimierte Dateigrößen erfordern schnelle SSD-Speicher."
      }
    ],
    "compliance": {
      "omniverse": "Point Cloud Importer",
      "sovereignty": "ASTM International Standard",
      "openStandard": "ASTM E2807"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Point Cloud Interchange",
      "maturity": "Produktiv",
      "area": "Punktwolken-Austausch"
    },
    "staffing": "1x Erfassungs-Techniker (10% FTE)"
  },
  "IND-META-2026-ENERGYPLUS-OPENSTUDIO": {
    "refCode": "IND-META-2026-ENERGYPLUS-OPENSTUDIO",
    "categoryCode": "4.3",
    "categoryName": "Umwelt- & Strömungssimulation",
    "name": "EnergyPlus / OpenStudio",
    "subtitle": "Gebäudeenergie & Thermische Hallensimulation",
    "vendor": "US Dept. of Energy / NREL",
    "hq": "Washington D.C., USA",
    "businessModel": "Free & Open Source (BSD License)",
    "url": "https://energyplus.net",
    "tier": "Tier 1",
    "costLabel": "Open Source / €0",
    "status": "EMPFOHLEN",
    "overview": "Gebäudeenergiesimulations-Engine zur Berechnung von Heiz- und Kühllasten, Lüftungsströmen, HVAC-Dimensionierung und CO2-Emissionen von Fabrikhallen.",
    "features": [
      {
        "title": "Sub-Hourly Energy Solvers",
        "desc": "Berechnet Wärmetransport, Beleuchtungslasten und HVAC-Energieverbrauch."
      },
      {
        "title": "OpenStudio SDK",
        "desc": "Framework zur Verknüpfung von Energiemodellen mit BIM-Geometrie."
      },
      {
        "title": "CO2-Fußabdruck-Analyse",
        "desc": "Verfolgt den operativen CO2-Ausstoß für ESG-Zertifizierungen."
      }
    ],
    "inputs": [
      "IDF",
      "OSM",
      "gbXML",
      "IFC",
      "EPW Weather"
    ],
    "outputs": [
      "CSV Telemetry",
      "SQL Databases",
      "HTML Reports"
    ],
    "bridges": [
      "Autodesk Revit",
      "Rhino Honeybee",
      "Azure Digital Twins"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Industriestandard zur Zertifizierung klimaneutraler Fabrikgebäude."
      },
      {
        "title": "Vorteile",
        "text": "Vollkommen quellenoffener Solver gestützt durch jahrzehntelange Validierung."
      },
      {
        "title": "Engpässe",
        "text": "Textbasierte Eingabedateien erfordern grafische Frontend-Tools."
      }
    ],
    "compliance": {
      "omniverse": "Open Source (BSD)",
      "sovereignty": "ASHRAE / EU EPBD Compliant",
      "openStandard": "gbXML / IFC"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop / Server Execution",
      "maturity": "Produktiv",
      "area": "Fabrikenergie & CO2-Bilanzierung"
    },
    "staffing": "1x Gebäudeenergie-Ingenieur (25% FTE)"
  },
  "IND-META-2026-EPIC-REALITYSCAN": {
    "refCode": "IND-META-2026-EPIC-REALITYSCAN",
    "categoryCode": "1.5",
    "categoryName": "360°-Erfassung & GIS-Kartierung",
    "name": "RealityScan (Epic Games / Mobile)",
    "subtitle": "Kostenlose Mobile Photogrammetrie App",
    "vendor": "Epic Games Inc. / Capturing Reality",
    "hq": "Bratislava, Slowakei (EU)",
    "businessModel": "Free Mobile App + Unreal Engine",
    "url": "https://capturingreality.com/realityscan",
    "tier": "Tier 1",
    "costLabel": "Kostenfrei / €0",
    "status": "EVALUIERT",
    "overview": "Mobile Photogrammetrie-App, die Fotoserie auf dem Smartphone in 3D-Modelle umwandelt.",
    "features": [
      {
        "title": "Cloud Photogrammetrie",
        "desc": "Kostenlose Verarbeitung in der Cloud."
      },
      {
        "title": "AR-Qualitätsfeedback",
        "desc": "Live-AR-Anzeige zeigt Fotolücken am Objekt an."
      },
      {
        "title": "Sketchfab Export",
        "desc": "Direkter Upload zu Sketchfab und Unreal Engine."
      }
    ],
    "inputs": [
      "Smartphone Kamera Fotos"
    ],
    "outputs": [
      "glTF 2.0",
      "USDZ",
      "OBJ",
      "FBX"
    ],
    "bridges": [
      "Unreal Engine 5",
      "Sketchfab",
      "Blender"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Super für die schnelle Erfassung kleiner Requisiten und Werkzeuge."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Entwicklungsursprung (Slowakei); kostenlos."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert gute Beleuchtung und mattierte Oberflächen."
      }
    ],
    "compliance": {
      "omniverse": "USDZ Export",
      "sovereignty": "100% EU Entwicklung",
      "openStandard": "glTF / USDZ"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Smartphone App",
      "maturity": "Produktiv",
      "area": "Schnelles Werkzeug-Scannen"
    },
    "staffing": "1x Mitarbeiter (5% FTE)"
  },
  "IND-META-2026-ESRI-ARCGIS": {
    "refCode": "IND-META-2026-ESRI-ARCGIS",
    "categoryCode": "1.5",
    "categoryName": "360°-Erfassung & GIS-Kartierung",
    "name": "ESRI ArcGIS Spatial Platform",
    "subtitle": "Enterprise GIS & Geoinformationssystem",
    "vendor": "ESRI Inc.",
    "hq": "Redlands, CA, USA / EU Support",
    "businessModel": "Enterprise GIS Licensing / Named User",
    "url": "https://esri.com/arcgis",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "STANDARDIZIERT",
    "overview": "Marktführendes Geoinformationssystem (GIS) zur Verwaltung von Standortdaten, Werksnetzen und regionaler Infrastruktur.",
    "features": [
      {
        "title": "ArcGIS Maps SDK",
        "desc": "Bettet GIS-Kartenebenen direkt in Unreal Engine und Omniverse ein."
      },
      {
        "title": "BIM-GIS Integration",
        "desc": "Direkte Verknüpfung mit Autodesk Revit- und Civil 3D-Modellen."
      },
      {
        "title": "Räumliche Analysen",
        "desc": "Umwelt- und Logistikroutenanalysen für Standorte."
      }
    ],
    "inputs": [
      "Shapefiles",
      "Geodatabase",
      "IFC",
      "DWG",
      "Satellite Data"
    ],
    "outputs": [
      "I3S (Indexed 3D Scene Layers)",
      "GeoJSON",
      "Web Maps"
    ],
    "bridges": [
      "Autodesk Construction Cloud",
      "NVIDIA Omniverse",
      "SAP HANA GIS"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Zwingende Enterprise-Infrastruktur für Konzerne mit vielen Fabrikstandorten."
      },
      {
        "title": "Vorteile",
        "text": "Verbindet globale Makro-Logistik mit mikroskopischen 3D-Shopfloors."
      },
      {
        "title": "Engpässe",
        "text": "Hohe Software-Lizenzkosten."
      }
    ],
    "compliance": {
      "omniverse": "ArcGIS Extension",
      "sovereignty": "ISO 19100 Series",
      "openStandard": "I3S / OGC"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "Enterprise GIS Server",
      "maturity": "Produktiv",
      "area": "Werksnetzwerke & GIS"
    },
    "staffing": "1x GIS Architect (100% FTE)"
  },
  "IND-META-2026-FARO-FOCUS": {
    "refCode": "IND-META-2026-FARO-FOCUS",
    "categoryCode": "1.2",
    "categoryName": "Terrestrisches Laserscanning (TLS)",
    "name": "FARO Focus Series (Focus Premium / Core)",
    "subtitle": "Millimetergenauer terrestrischer 3D-Laserscanner",
    "vendor": "FARO Technologies Inc.",
    "hq": "Lake Mary, FL, USA / Stuttgart, DE (EU)",
    "businessModel": "Hardware Purchase + Maintenance",
    "url": "https://faro.com/focus",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "STANDARDIZIERT",
    "overview": "Branchenstandard unter den terrestrischen Stativ-Laserscannern. Liefert millimetergenaue 3D-Punktwolken für präzise Umbaumaßnahmen.",
    "features": [
      {
        "title": "Millimeter-Genauigkeit",
        "desc": "Abweichung unter 1mm auf 10 Metern Entfernung."
      },
      {
        "title": "HDR-Farbüberlagerung",
        "desc": "Farbechte Einfärbung der Punktwolkenoberflächen."
      },
      {
        "title": "FARO Stream App",
        "desc": "Vor-Ort-Registrierung per Tablet im Feld."
      }
    ],
    "inputs": [
      "Laser Phase Measurements",
      "GCP Target Points"
    ],
    "outputs": [
      "E57",
      "LAS",
      "FARO FLS",
      "OpenUSD"
    ],
    "bridges": [
      "FARO Sphere XG",
      "Autodesk Revit",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unverzichtbar zur Prüfung von Maschinenausrichtungen und Fundamenten."
      },
      {
        "title": "Vorteile",
        "text": "Unerreichte Punktpräzision und geometrische Treue."
      },
      {
        "title": "Engpässe",
        "text": "Versetzen des Stativs auf 50.000 qm ist arbeitsintensiv."
      }
    ],
    "compliance": {
      "omniverse": "E57 Bridge",
      "sovereignty": "SOC2 / ISO Compliant",
      "openStandard": "E57 / ASTM E2807"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Stativ-Hardware",
      "maturity": "Produktiv",
      "area": "Hochpräzise Vermessung"
    },
    "staffing": "1x Vermessungstechniker (50% FTE)"
  },
  "IND-META-2026-FARO-ORBIS": {
    "refCode": "IND-META-2026-FARO-ORBIS",
    "categoryCode": "1.1",
    "categoryName": "Mobile & Wearable SLAM-Scanner",
    "name": "FARO Orbis Hybrid Mobile Scanner",
    "subtitle": "Hybrid-Mobile SLAM & Flash TLS Scanner",
    "vendor": "FARO Technologies Inc.",
    "hq": "Lake Mary, FL, USA / Stuttgart, DE (EU)",
    "businessModel": "Hardware Kit + FARO Sphere Cloud",
    "url": "https://faro.com/orbis",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Hybrider mobiler SLAM- und statischer Laserscanner. Wechselt fliegend zwischen Gehen und hochdichtem Stativscannen.",
    "features": [
      {
        "title": "Flash Technology",
        "desc": "Erstellt hochdichte Scans in nur 15 Sekunden während des Gehens."
      },
      {
        "title": "GeoSLAM Algorithmus",
        "desc": "Robuste SLAM-Verfolgung in engen Rohrgängen und Unterverteilungen."
      },
      {
        "title": "FARO Sphere Sync",
        "desc": "Direkter Cloud-Upload der Punktwolken fürs Team."
      }
    ],
    "inputs": [
      "SLAM Telemetrie",
      "Static LiDAR Rays",
      "GCP"
    ],
    "outputs": [
      "E57",
      "LAS",
      "FARO Project File",
      "OpenUSD"
    ],
    "bridges": [
      "FARO Sphere XG",
      "Autodesk ReCap",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Sehr vielseitig für komplexe Anlagen mit Breiten- und Engebereichen."
      },
      {
        "title": "Vorteile",
        "text": "Kombiniert mobile Geschwindigkeit mit statischer Punktdichte."
      },
      {
        "title": "Engpässe",
        "text": "Akkuwechsel bei ganztägigen Dauererfassungen erforderlich."
      }
    ],
    "compliance": {
      "omniverse": "Extension Bridge",
      "sovereignty": "SOC2 / ISO Compliant",
      "openStandard": "E57 / LAS"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Handheld / Mobile Unit",
      "maturity": "Produktiv",
      "area": "Hybride Bestandsaufnahme"
    },
    "staffing": "1x Reality Capture Technician (25% FTE)"
  },
  "IND-META-2026-FARO-SPHERE": {
    "refCode": "IND-META-2026-FARO-SPHERE",
    "categoryCode": "1.5",
    "categoryName": "360°-Erfassung & GIS-Kartierung",
    "name": "FARO Sphere XG (Cloud Spatial Ecosystem)",
    "subtitle": "Zentrale Reality-Capture Cloud-Plattform",
    "vendor": "FARO Technologies Inc.",
    "hq": "Lake Mary, FL, USA / Stuttgart, DE (EU)",
    "businessModel": "Cloud SaaS Subscription per Project",
    "url": "https://faro.com/sphere",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Zentrale Cloud-Plattform, die statische Laserscans, Mobile-SLAM-Daten und 360°-Fotos in einer gemeinsamen Umgebung zusammenführt.",
    "features": [
      {
        "title": "Zentrale Reality Cloud",
        "desc": "Vereint Daten von FARO Focus, Orbis und 360-Kameras."
      },
      {
        "title": "Cloud-Registrierung",
        "desc": "Ausrichtung von Punktwolken in der Cloud ohne PC-Überlastung."
      },
      {
        "title": "BIM-CAD-Vergleich",
        "desc": "Direkte Überlagerung von 3D-CAD-Modellen mit Scans."
      }
    ],
    "inputs": [
      "FLS",
      "E57",
      "360 Photos",
      "CAD STEP"
    ],
    "outputs": [
      "E57",
      "Web 3D Stream",
      "Deviation Heatmaps"
    ],
    "bridges": [
      "Autodesk Revit",
      "Navisworks",
      "NVIDIA Omniverse Cloud"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Sehr gut zur Kollaboration globaler Teams bei Umbaumaßnahmen."
      },
      {
        "title": "Vorteile",
        "text": "Zentralisiert verschiedene Scanner-Hardwareanbieter in einem Dashboard."
      },
      {
        "title": "Engpässe",
        "text": "Setzt gute Internet-Uploadbandbreite voraus."
      }
    ],
    "compliance": {
      "omniverse": "Cloud Stream Extension",
      "sovereignty": "SOC2 / ISO Compliant",
      "openStandard": "E57 / STEP"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Web SaaS Console",
      "maturity": "Produktiv",
      "area": "Zentrales Punktwolken-Management"
    },
    "staffing": "1x Data Manager (25% FTE)"
  },
  "IND-META-2026-FLEXSIM": {
    "refCode": "IND-META-2026-FLEXSIM",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "FlexSim (Discrete Event Simulation)",
    "subtitle": "3D-Ablauf- & Materialflusssimulation",
    "vendor": "FlexSim Software / Autodesk",
    "hq": "Orem, UT, USA",
    "businessModel": "Enterprise License Subscription",
    "url": "https://flexsim.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "3D-Ablaufsimulationssoftware zur Modellierung, Vorhersage und Visualisierung von Logistik-, Materialfluss- und Fertigungssystemen.",
    "features": [
      {
        "title": "3D-Objektbibliothek",
        "desc": "Vorgefertigte AGVs, Bediener, Förderbänder und Regale."
      },
      {
        "title": "Statistischer Experimenter",
        "desc": "Führt Monte-Carlo-Simulationsreihen zur Engpasssuche durch."
      },
      {
        "title": "Emulationsmodul",
        "desc": "Verbindet virtuelle 3D-Objekte via OPC UA mit physischen SPSen."
      }
    ],
    "inputs": [
      "DWG",
      "STEP",
      "STL",
      "OPC UA Tags",
      "SQL Databases"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "Web 3D HTML",
      "Statistical Dashboards"
    ],
    "bridges": [
      "Autodesk Construction Cloud",
      "OPC UA",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Hervorragende visuelle 3D-Simulation für Intralogistik und Lagerhäuser."
      },
      {
        "title": "Vorteile",
        "text": "Kombiniert hohe Visuelität mit fundierter statistischer Kennzahlenanalyse."
      },
      {
        "title": "Engpässe",
        "text": "Keine Roboterkinematik im Sub-Millisekundenbereich."
      }
    ],
    "compliance": {
      "omniverse": "USD Connector",
      "sovereignty": "SOC2 Compliant",
      "openStandard": "OPC UA / OpenUSD"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop App",
      "maturity": "Produktiv",
      "area": "Materialfluss & Logistik"
    },
    "staffing": "1x Materialflussingenieur (50% FTE)"
  },
  "IND-META-2026-FLYABILITY-ELIOS3": {
    "refCode": "IND-META-2026-FLYABILITY-ELIOS3",
    "categoryCode": "1.3",
    "categoryName": "Autonome Drohnen & AMR-Roboter",
    "name": "Flyability Elios 3 (Indoor Inspection Drone)",
    "subtitle": "Kollisionstolerante Hallen- & Tankdrohne",
    "vendor": "Flyability SA",
    "hq": "Lausanne, Schweiz (EU/EFTA)",
    "businessModel": "Hardware Kit + Inspector Software",
    "url": "https://flyability.com/elios-3",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EMPFOHLEN",
    "overview": "Kollisionstolerante Hallendrohne im Käfig für Inspektionen in engen Behältern, Kaminen und unter Hallendächern ohne GPS.",
    "features": [
      {
        "title": "Schutzkäfig",
        "desc": "Prallt gefahrlos an Hindernissen in engsten Räumen ab."
      },
      {
        "title": "Ouster 3D-LiDAR",
        "desc": "Echtzeit-Indoor-SLAM-Kartierung ohne GPS-Empfang."
      },
      {
        "title": "Thermal- & 4K-Kamera",
        "desc": "Gleichzeitige optische und thermische Defekterkennung."
      }
    ],
    "inputs": [
      "Indoor SLAM Telemetry",
      "Thermal Stream"
    ],
    "outputs": [
      "E57 Point Cloud",
      "LAS",
      "Flyability 3D Model"
    ],
    "bridges": [
      "FARO Sphere XG",
      "Bentley iTwin",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unschlagbar für Inspektionen in gefährlichen Behältern und Schächten."
      },
      {
        "title": "Vorteile",
        "text": "Schützt Personal vor dem Betreten gefährlicher Engen."
      },
      {
        "title": "Engpässe",
        "text": "Flugzeit pro Akku auf ca. 12 Minuten begrenzt."
      }
    ],
    "compliance": {
      "omniverse": "E57 Bridge",
      "sovereignty": "Schweizer Sicherheitsstandard",
      "openStandard": "E57"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Hand-Launched Drone",
      "maturity": "Produktiv",
      "area": "Enge Industriebehälter & Kamine"
    },
    "staffing": "1x Inspektionstechniker (25% FTE)"
  },
  "IND-META-2026-GLTF-20": {
    "refCode": "IND-META-2026-GLTF-20",
    "categoryCode": "2.4",
    "categoryName": "Datenformate & OpenUSD-Standards",
    "name": "glTF 2.0 (Khronos Group - Runtime 3D Asset)",
    "subtitle": "Das \"JPEG für 3D\" im Web & Mobile",
    "vendor": "Khronos Group",
    "hq": "Beaverton, OR, USA / Global Consortium",
    "businessModel": "Open Royalty-Free Standard",
    "url": "https://khronos.org/gltf",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "STANDARDIZIERT WEB3D",
    "overview": "Lizenzfreie Spezifikation für die effiziente Übertragung und das schnelle Laden von 3D-Szenen und PBR-Modellen im Webbrowser und auf Mobilgeräten.",
    "features": [
      {
        "title": "PBR Material Standard",
        "desc": "Standardisierter Metallic-Roughness PBR-Shading-Workflow."
      },
      {
        "title": "Kompaktes JSON/Binär-Format",
        "desc": "Ultra-schnelles Laden direkt in GPU-Speicherpuffer."
      },
      {
        "title": "Draco Geometrie-Kompression",
        "desc": "Reduziert Dateigrößen von 3D-Meshes um bis zu 90%."
      }
    ],
    "inputs": [
      "Blender",
      "3ds Max",
      "Maya",
      "Revit",
      "CAD Exporte"
    ],
    "outputs": [
      ".gltf (JSON + Bin)",
      ".glb (Self-Contained Binary)"
    ],
    "bridges": [
      "WebXR",
      "Godot Engine",
      "Unity",
      "Unreal Engine 5",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Universelles Laufzeitformat für 3D-Objekte in Webbrowsern und mobilen Tablets."
      },
      {
        "title": "Vorteile",
        "text": "Wird nativ von allen modernen Webbrowsern ohne Plugins unterstützt."
      },
      {
        "title": "Engpässe",
        "text": "Ungeeignet für zerstörungsfreies Layer-Editing oder CAD-Historien."
      }
    ],
    "compliance": {
      "omniverse": "glTF Extension",
      "sovereignty": "Khronos Open Standard",
      "openStandard": "ISO/IEC 12113"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Web Delivery Standard",
      "maturity": "Produktiv",
      "area": "Web3D Asset-Ausgabe"
    },
    "staffing": "1x Web3D Developer (10% FTE)"
  },
  "IND-META-2026-GODOT-WEBXR": {
    "refCode": "IND-META-2026-GODOT-WEBXR",
    "categoryCode": "5.1",
    "categoryName": "Echtzeit-3D & Spatial Engines",
    "name": "Godot Engine / WebXR",
    "subtitle": "Leichtgewichtige Open-Source 3D/Web Engine",
    "vendor": "Godot Foundation",
    "hq": "EU / Global Community",
    "businessModel": "100% Free & Open Source (MIT License)",
    "url": "https://godotengine.org",
    "tier": "Tier 1",
    "costLabel": "Open Source / €0",
    "status": "EMPFOHLEN",
    "overview": "Schlanke, lizenzfreie Open-Source 3D-Engine. Ideal für Web-eingebettete 3D-Dashboards, WebXR-Brillen und leichte Shopfloor-Displays.",
    "features": [
      {
        "title": "Leichtgewichtiger Footprint",
        "desc": "Editor-Dateigröße unter 100MB; extrem schnelle Ladezeiten."
      },
      {
        "title": "WebXR Native Export",
        "desc": "Direkte Browser-Darstellung ohne serverseitiges Streaming."
      },
      {
        "title": "GDScript / C# Support",
        "desc": "Hocheffiziente Skriptsprache für leichtgewichtige IIoT-Hooks."
      }
    ],
    "inputs": [
      "glTF 2.0 (Native)",
      "OBJ",
      "FBX",
      "OpenUSD (via Extension)"
    ],
    "outputs": [
      "WebGL / WebXR HTML5",
      "Linux/Windows Binaries"
    ],
    "bridges": [
      "MQTT WebSockets",
      "OPC UA REST Gateways",
      "WebXR"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Ideal für leichtgewichtige Shopfloor-Touchscreens und Browser-Dashboards."
      },
      {
        "title": "Vorteile",
        "text": "Vollkommen frei von Lizenzgebühren, Telemetrie oder Vendor-Lock-in."
      },
      {
        "title": "Engpässe",
        "text": "Ungeeignet für die direkte Darstellung roher Multi-Gigabyte-CAD-Szenen ohne Vorbearbeitung."
      }
    ],
    "compliance": {
      "omniverse": "WebXR / glTF Bridge",
      "sovereignty": "100% EU Souverän (MIT FOSS)",
      "openStandard": "glTF 2.0 / WebXR / OpenXR"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Web Server / Lightweight Client",
      "maturity": "Produktiv",
      "area": "Web-Dashboards & Leichtgewicht-VR"
    },
    "staffing": "1x WebXR Developer (50% FTE)"
  },
  "IND-META-2026-HALOCLINE": {
    "refCode": "IND-META-2026-HALOCLINE",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "Halocline (VR Shopfloor Layouting)",
    "subtitle": "Interaktive VR-Montage- & Cardboard-Planung",
    "vendor": "Halocline GmbH",
    "hq": "Magdeburg, Deutschland (EU)",
    "businessModel": "Annual Subscription per VR Station",
    "url": "https://halocline.io",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EMPFOHLEN",
    "overview": "Virtual-Reality-Software zur interaktiven Montageplanung in 1:1 Maßstab. Ersetzt Physisches Cardboard Engineering durch VR-Erlebnisse.",
    "features": [
      {
        "title": "1:1 Maßstab Immersiv",
        "desc": "Direktes Anordnen von Kisten und Regalen im virtuellen Raum."
      },
      {
        "title": "Ergonomische Reichweiten",
        "desc": "Visuelle Einblendung von Greifräumen und Biegehaltungen."
      },
      {
        "title": "CAD/BIM Ingestion",
        "desc": "Importiert Gebäudewände und Maschinenmodelle nach VR."
      }
    ],
    "inputs": [
      "STEP",
      "OBJ",
      "FBX",
      "VR Headset Input"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "CAD Modifikationen",
      "Ergonomic Reports"
    ],
    "bridges": [
      "Meta Quest 3",
      "HTC Vive",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Ersetzt physischen Kartonmodellbau und spart Wochen im Planungsprozess."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Software mit intuitiver Bedienbarkeit für Werker ohne Programmierkenntnisse."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert VR-Brillen für alle beteiligten Planer."
      }
    ],
    "compliance": {
      "omniverse": "OpenXR Integration",
      "sovereignty": "100% EU Souverän (Deutschland)",
      "openStandard": "OpenXR / STEP"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "VR Workstation / Quest",
      "maturity": "Produktiv",
      "area": "Immersive Montageplanung"
    },
    "staffing": "1x Ergonom / Shopfloor Planer (25% FTE)"
  },
  "IND-META-2026-HI3D-AI-ENGINE": {
    "refCode": "IND-META-2026-HI3D-AI-ENGINE",
    "categoryCode": "2.3",
    "categoryName": "DCC & Generatives 3D-Design",
    "name": "Hi3D AI Engine (Generative 3D to Additive)",
    "subtitle": "KI-3D-Generierung aus Text & 2D-Bildern",
    "vendor": "Hi3D AI Inc.",
    "hq": "European Tech Hub (EU)",
    "businessModel": "Enterprise SaaS / API Usage Model",
    "url": "https://hi3d.ai",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "TESTBED",
    "overview": "Generative KI-Engine, die aus Text-Prompts oder 2D-Fotos strukturierte 3D-Meshes erzeugt und wasserdichte Geometrien für den 3D-Druck und das Scene Staging ausgibt.",
    "features": [
      {
        "title": "Image-to-3D Synthesis",
        "desc": "Sofortige 3D-Asset-Generierung aus einzelnen Werkstatt-Fotos."
      },
      {
        "title": "Wasserdichte Meshes",
        "desc": "Erzeugt druckbare, manigfaltige 3D-Geometrie."
      },
      {
        "title": "Automatisches USD-Texturing",
        "desc": "Generiert PBR-Textur-Karten verknüpft mit USD-Modellen."
      }
    ],
    "inputs": [
      "PNG",
      "JPG",
      "Text Prompts",
      "CAD Skizzen"
    ],
    "outputs": [
      "OpenUSD (.usdz)",
      "glTF 2.0",
      "STL",
      "OBJ"
    ],
    "bridges": [
      "NVIDIA Omniverse AI Extensions",
      "Blender",
      "WebXR"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Beschleunigt die Erstellung von Hintergrundelementen (Paletten, Kisten, Handwerkzeug) um 90%."
      },
      {
        "title": "Vorteile",
        "text": "Reduziert den Arbeitsaufwand von 3D-Artisten drastisch."
      },
      {
        "title": "Engpässe",
        "text": "Ungeeignet für maßkritische Sub-Millimeter-Maschinenteile."
      }
    ],
    "compliance": {
      "omniverse": "Native USD Export",
      "sovereignty": "DSGVO EU Cloud",
      "openStandard": "OpenUSD / glTF 2.0"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Cloud API / Web Service",
      "maturity": "Evaluation",
      "area": "Schnelles 3D-Prop Staging"
    },
    "staffing": "1x AI Operator (25% FTE)"
  },
  "IND-META-2026-HTC-VIVE-FOCUS3": {
    "refCode": "IND-META-2026-HTC-VIVE-FOCUS3",
    "categoryCode": "5.2",
    "categoryName": "Spatial XR & VR/AR Headsets",
    "name": "HTC VIVE Focus 3 Business",
    "subtitle": "Robustes Standalone VR/AR Headset für Training",
    "vendor": "HTC Corporation",
    "hq": "Taoyuan, Taiwan / EU Support",
    "businessModel": "Hardware Purchase + Vive Business Warranty",
    "url": "https://business.vive.com/focus3",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EVALUIERT",
    "overview": "Robustes Standalone-Enterprise-VR-Headset für industrielles Sicherheitstraining, ergonomische VR-Montagesimulation und Trainingszentren.",
    "features": [
      {
        "title": "5K Display Auflösung",
        "desc": "Duale 2.88K LCD-Displays mit 4896 x 2448 Gesamtauflösung."
      },
      {
        "title": "Wechselakku am Hinterkopf",
        "desc": "Schnellwechselakku für den unterbrechungsfreien Schichtbetrieb."
      },
      {
        "title": "Enterprise MDM Management",
        "desc": "Fernwartung und App-Verteilung über ISO-zertifiziertes MDM."
      }
    ],
    "inputs": [
      "OpenXR Apps",
      "PC VR Streaming",
      "Android APK"
    ],
    "outputs": [
      "6DOF Controller Tracking",
      "Optional Eye/Face Tracking"
    ],
    "bridges": [
      "Halocline",
      "Unity Industry",
      "Unreal Engine 5",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Etabliertes Enterprise-VR-Headset in Trainingszentren der Automobilindustrie."
      },
      {
        "title": "Vorteile",
        "text": "Leicht zu reinigende Polster und Wechselakkus für den Ganzjahresbetrieb."
      },
      {
        "title": "Engpässe",
        "text": "Monochromes Pass-Through begrenzt Mixed-Reality-Anwendungen."
      }
    ],
    "compliance": {
      "omniverse": "OpenXR Native",
      "sovereignty": "ISO 27001 Enterprise",
      "openStandard": "OpenXR"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Standalone Enterprise VR",
      "maturity": "Produktiv",
      "area": "Sicherheitstraining & VR-Schulungen"
    },
    "staffing": "1x VR Coordinator (25% FTE)"
  },
  "IND-META-2026-HUGGINGFACE-LEROBOT": {
    "refCode": "IND-META-2026-HUGGINGFACE-LEROBOT",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "Hugging Face LeRobot (Physical AI & Open Imitation)",
    "subtitle": "Open-Source Physical AI & Roboter-Imitationslernen",
    "vendor": "Hugging Face Inc.",
    "hq": "New York, USA / Paris, Frankreich (EU)",
    "businessModel": "Free & Open Source (Apache 2.0)",
    "url": "https://github.com/huggingface/lerobot",
    "tier": "Tier 1",
    "costLabel": "Open Source / €0",
    "status": "EMPFOHLEN",
    "overview": "Open-Source KI-Robotik-Framework für KI-Policy-Training, Imitationslernen und Teleoperation für kostengünstige Industrie-Greifarme.",
    "features": [
      {
        "title": "Open Policy Zoo",
        "desc": "Vorgefertigte PyTorch-Modelle für Roboter-Greif- und Montageaufgaben."
      },
      {
        "title": "Teleoperation",
        "desc": "Verbindet Leader-Follower-Arme zur schnellen Erzeugung von Trainingsdatensätzen."
      },
      {
        "title": "Isaac Sim Integration",
        "desc": "Direkte Brücke zum Laden von KI-Gewichten in OpenUSD-Simulationsarme."
      }
    ],
    "inputs": [
      "HDF5 Datasets",
      "Joint Telemetrie",
      "ROS 2 Messages"
    ],
    "outputs": [
      "PyTorch Model Weights (.pt)",
      "Action Vector Commands"
    ],
    "bridges": [
      "NVIDIA Isaac Lab",
      "PyTorch",
      "ROS 2",
      "OpenUSD"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Demokratisiert Physical AI für kleine Fertigungszellen."
      },
      {
        "title": "Vorteile",
        "text": "100% offenes Framework gestützt durch das Hugging Face Ökosystem."
      },
      {
        "title": "Engpässe",
        "text": "Junges Framework; erfordert Python-KI-Entwicklung."
      }
    ],
    "compliance": {
      "omniverse": "Open Source (Apache 2.0)",
      "sovereignty": "100% EU Rechtssicher (Paris HQ)",
      "openStandard": "Safetensors / ROS 2"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Linux AI Workstation",
      "maturity": "Produktiv",
      "area": "KI-Greifrobotik & Teleoperation"
    },
    "staffing": "1x AI Robotics Developer (50% FTE)"
  },
  "IND-META-2026-IPOLOG": {
    "refCode": "IND-META-2026-IPOLOG",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "ipolog (Material Flow & Ergonomics)",
    "subtitle": "Montagelinien-Ergonomie & Behälter-Staging",
    "vendor": "ipolog GmbH",
    "hq": "Stuttgart, Deutschland (EU)",
    "businessModel": "Subscription / Project Seats",
    "url": "https://ipolog.ai",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Spezialsoftware für die Ergonomieplanung an Montagelinien, Logistikrouten und Materialregaloptimierung in Fertigungszellen.",
    "features": [
      {
        "title": "Automatisches Regal-Staging",
        "desc": "Berechnet die optimale Platzierung von Bauteilen an Montagebändern."
      },
      {
        "title": "Ergonomiebewertung (EAWS)",
        "desc": "MTM/EAWS-Ergonomiebewertung von Bewegungsabläufen."
      },
      {
        "title": "Arbeiter-Wegeplanung",
        "desc": "Verhindert räumliche Kollisionen von Werksarbeitern in engen Zellen."
      }
    ],
    "inputs": [
      "MicroStation",
      "DWG",
      "STEP",
      "Excel BOMs",
      "MTM Data"
    ],
    "outputs": [
      "3D Animated Mesh",
      "OpenUSD (.usd)",
      "Ergonomic Reports (PDF)"
    ],
    "bridges": [
      "Siemens Teamcenter",
      "NVIDIA Omniverse",
      "SAP ERP"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Weit verbreitet bei europäischen Automobilherstellern zur Manufakturplanung."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Software, die körperliche Belastungen von Arbeitern reduziert."
      },
      {
        "title": "Engpässe",
        "text": "Fokussiert speziell auf Montage- und Logistikabläufe."
      }
    ],
    "compliance": {
      "omniverse": "USD Exporter",
      "sovereignty": "100% EU Souverän (Deutschland)",
      "openStandard": "EAWS / MTM"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop Windows App",
      "maturity": "Produktiv",
      "area": "Montage-Ergonomie & Logistik"
    },
    "staffing": "1x Ergonomist / Fabrikplaner (50% FTE)"
  },
  "IND-META-2026-ISG-VIRTUOS": {
    "refCode": "IND-META-2026-ISG-VIRTUOS",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "ISG-Virtuos (Hard Real-Time VIBn / HiL)",
    "subtitle": "Echtzeit-Hardware-in-the-Loop Simulationsengine",
    "vendor": "ISG Industrielle Steuerungstechnik GmbH",
    "hq": "Stuttgart, Deutschland (EU)",
    "businessModel": "Enterprise Software License + Real-Time Target",
    "url": "https://isg-stuttgart.de",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "STANDARDIZIERT",
    "overview": "Deterministische Harte-Echtzeit-Simulationsengine für Taktraten unter 1 Millisekunde zur Hardware-in-the-Loop-Inbetriebnahme von Werkzeugmaschinen.",
    "features": [
      {
        "title": "Harte Echtzeit",
        "desc": "Garantierte mikrosekundengenaue Ausführung gekoppelt an Feldbusse."
      },
      {
        "title": "Feldbus-Emulation",
        "desc": "Emuliert PROFINET-, EtherCAT- und CANopen-Teilnehmer direkt auf der Hardware."
      },
      {
        "title": "Spanabtragssimulation",
        "desc": "Simuliert 3D-CNC-Spanabtrag und Laserschneiden in Echtzeit."
      }
    ],
    "inputs": [
      "STEP",
      "CAD",
      "Feldbus XML",
      "Matlab Simulink FMUs"
    ],
    "outputs": [
      "Echtzeit Feldbus-Streams (EtherCAT/PROFINET)",
      "OpenUSD Telemetrie"
    ],
    "bridges": [
      "Siemens Sinumerik",
      "Beckhoff TwinCAT",
      "Bosch Rexroth",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Absoluter Standard im DACH-Raum für HiL-Tests hochdynamischer CNC-Maschinen."
      },
      {
        "title": "Vorteile",
        "text": "Garantierte Harte Echtzeit, die normale 3D-Game-Engines nicht erreichen."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert Spezialwissen in der Steuerungstechnik und Feldbushardware."
      }
    ],
    "compliance": {
      "omniverse": "Live Telemetry Sync",
      "sovereignty": "100% EU Souverän (Stuttgart)",
      "openStandard": "EtherCAT / FMI"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "Real-Time Industrial PC Target",
      "maturity": "Produktiv",
      "area": "Werkzeugmaschinen & HiL-Testing"
    },
    "staffing": "1x Echtzeit-Steuerungstechniker (50% FTE)"
  },
  "IND-META-2026-JT-ISO14306": {
    "refCode": "IND-META-2026-JT-ISO14306",
    "categoryCode": "2.4",
    "categoryName": "Datenformate & OpenUSD-Standards",
    "name": "JT ISO 14306 (Lightweight CAD Tessellation)",
    "subtitle": "Leichtgewichtiges 3D-CAD-Visualisierungsformat",
    "vendor": "ISO / Siemens DISW",
    "hq": "Genf, Schweiz (EU/EFTA)",
    "businessModel": "Open International Standard (ISO 14306)",
    "url": "https://iso.org/standard/62271.html",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "STANDARDIZIERT",
    "overview": "Leichtgewichtiges 3D-Format für visuelle Produktprüfung, Digital Mockup (DMU) und schnelle Ladezeiten riesiger Maschinenbaugruppen.",
    "features": [
      {
        "title": "Multi-LOD Tessellierung",
        "desc": "Bettet mehrere Detailstufen (LODs) in einer Datei ein."
      },
      {
        "title": "B-Rep + Mesh Payload",
        "desc": "Speichert sowohl Leichtbau-Meshes als auch exakte B-Rep Körper."
      },
      {
        "title": "Enterprise PLM",
        "desc": "Natives Format in Siemens Teamcenter PLM-Umgebungen."
      }
    ],
    "inputs": [
      "Siemens NX",
      "CATIA",
      "Creo",
      "SolidWorks"
    ],
    "outputs": [
      ".jt (ISO 14306)"
    ],
    "bridges": [
      "Siemens Teamcenter",
      "Tecnomatix",
      "NVIDIA Omniverse JT Connector"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Bevorzugtes Format zum Laden kompletter Fahrzeug-Montagelinien."
      },
      {
        "title": "Vorteile",
        "text": "Extrem kompakte Dateigrößen im Vergleich zu rohem CAD."
      },
      {
        "title": "Engpässe",
        "text": "Stark an das Siemens DISW Ökosystem gebunden."
      }
    ],
    "compliance": {
      "omniverse": "JT Connector",
      "sovereignty": "100% ISO Standard",
      "openStandard": "ISO 14306"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Neutral Tessellation File",
      "maturity": "Produktiv",
      "area": "CAD-Tessellierung & DMU"
    },
    "staffing": "1x Konvertierungsspezialist (10% FTE)"
  },
  "IND-META-2026-LEICA-BLK2FLY": {
    "refCode": "IND-META-2026-LEICA-BLK2FLY",
    "categoryCode": "1.3",
    "categoryName": "Autonome Drohnen & AMR-Roboter",
    "name": "Leica BLK2FLY Autonomous Flying LiDAR",
    "subtitle": "Autonome Flugdrohne mit 3D-LiDAR-Scanner",
    "vendor": "Leica Geosystems AG / Hexagon",
    "hq": "Heerbrugg, Schweiz (EU/EFTA)",
    "businessModel": "Hardware Purchase + Flying Subscription",
    "url": "https://leica-geosystems.com/blk2fly",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "EVALUIERT",
    "overview": "Autonome Flugdrohne mit LiDAR-Scanner. Erfasst Dächer, Fassaden und hochgelegene Rohrbrücken vollautomatisch ohne Gerüstbau.",
    "features": [
      {
        "title": "5-Kamera-Hindernisvermeidung",
        "desc": "Sensoren verhindern Kollisionen mit Masten und Kabeln."
      },
      {
        "title": "Autonome Pfadplanung",
        "desc": "Berechnet Flugrouten basierend auf dem 3D-Zielvolumen."
      },
      {
        "title": "Dual-Axis Dome LiDAR",
        "desc": "Erfasst 420.000 Punkte pro Sekunde rundum."
      }
    ],
    "inputs": [
      "GNSS Telemetrie",
      "LiDAR Stream"
    ],
    "outputs": [
      "E57",
      "LGS",
      "LAS",
      "OpenUSD"
    ],
    "bridges": [
      "Hexagon HxDR",
      "Leica Cyclone",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Scannt Fabrikdächer und Außenanlagen ohne Hebebühnen."
      },
      {
        "title": "Vorteile",
        "text": "Eliminiert Risiken für Personal bei Arbeiten in großer Höhe."
      },
      {
        "title": "Engpässe",
        "text": "Unterliegt Drohnen-Fluggesetzen (EASA in EU); wetterabhängig."
      }
    ],
    "compliance": {
      "omniverse": "Extension Bridge",
      "sovereignty": "EASA zertifiziert",
      "openStandard": "E57"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Autonome Flugdrohne",
      "maturity": "Produktiv",
      "area": "Außenanlagen & Dächer"
    },
    "staffing": "1x EASA Drohnenpilot (25% FTE)"
  },
  "IND-META-2026-LEICA-BLK2GO": {
    "refCode": "IND-META-2026-LEICA-BLK2GO",
    "categoryCode": "1.1",
    "categoryName": "Mobile & Wearable SLAM-Scanner",
    "name": "Leica BLK2GO Handheld SLAM Scanner",
    "subtitle": "Kompakter Handheld SLAM-Laserscanner",
    "vendor": "Leica Geosystems AG / Hexagon",
    "hq": "Heerbrugg, Schweiz (EU/EFTA)",
    "businessModel": "Hardware Purchase + Cyclone Subscription",
    "url": "https://leica-geosystems.com/blk2go",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Kompakter handgeführter Mobile-SLAM-Scanner mit 2-Achs-LiDAR und Mehrkamera-System zur schnellen Raumdokumentation.",
    "features": [
      {
        "title": "GrandSLAM Technology",
        "desc": "Kombiniert LiDAR, visuelle Kameras und IMU-Sensorik."
      },
      {
        "title": "Leichtgewicht (770g)",
        "desc": "Mühelose Ein-Hand-Bedienung beim Gehen."
      },
      {
        "title": "Live iPhone View",
        "desc": "Echtzeit-3D-Punktwolkenanzeige im Smartphone-Display."
      }
    ],
    "inputs": [
      "GrandSLAM Raw Stream"
    ],
    "outputs": [
      "E57",
      "LGS (Leica Format)",
      "LAS",
      "OpenUSD"
    ],
    "bridges": [
      "Leica Cyclone REGISTER 360",
      "Hexagon HxDR",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Perfekt für schnelle Begehungen enger Gebäudestrukturen."
      },
      {
        "title": "Vorteile",
        "text": "Schweizer Präzisionstechnik mit Ein-Knopf-Bedienung."
      },
      {
        "title": "Engpässe",
        "text": "Geringere Punktdichte als große Rucksack-Systeme."
      }
    ],
    "compliance": {
      "omniverse": "LGS/E57 Importer",
      "sovereignty": "Schweizer Datensicherheit",
      "openStandard": "E57"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Handheld Hardware",
      "maturity": "Produktiv",
      "area": "Schnellbegehungen & Architektur"
    },
    "staffing": "1x Operator (25% FTE)"
  },
  "IND-META-2026-LEICA-RTC360": {
    "refCode": "IND-META-2026-LEICA-RTC360",
    "categoryCode": "1.2",
    "categoryName": "Terrestrisches Laserscanning (TLS)",
    "name": "Leica RTC360 / BLK360 / Cyclone",
    "subtitle": "High-Speed TLS mit VIS-Echtzeitregistrierung",
    "vendor": "Leica Geosystems AG / Hexagon",
    "hq": "Heerbrugg, Schweiz (EU/EFTA)",
    "businessModel": "Hardware Purchase + Cyclone Subscription",
    "url": "https://leica-geosystems.com/rtc360",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "STANDARDIZIERT",
    "overview": "Hochpräziser terrestrischer 3D-Laserscanner (RTC360). Erfasst 3D-Punktwolken und HDR-Panoramen in unter 45 Sekunden mit automatischer VIS-Echtzeitregistrierung.",
    "features": [
      {
        "title": "VIS Vor-Registrierung",
        "desc": "Verfolgt den Scannerstandort zwischen Stativaufstellungen automatisch."
      },
      {
        "title": "2 Millionen Pkt/Sek",
        "desc": "Ultra-hohe Messrate für extrem dichte Punktwolken."
      },
      {
        "title": "Leica Cyclone Suite",
        "desc": "Enterprise-Software zur Registrierung und Auswertung von Geodaten."
      }
    ],
    "inputs": [
      "Raw RTC Laser Stream",
      "Passpunkt-Koordinaten"
    ],
    "outputs": [
      "E57",
      "LGS",
      "PTX",
      "LAS",
      "OpenUSD Stage"
    ],
    "bridges": [
      "Leica Cyclone",
      "Hexagon HxDR",
      "Autodesk Revit",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Enterprise-Standard für anspruchsvolle Industrieanlagen und Großprojekte."
      },
      {
        "title": "Vorteile",
        "text": "VIS-Technologie reduziert die manuelle Ausrichtungsarbeit um 80%."
      },
      {
        "title": "Engpässe",
        "text": "Hohe Investitions- und Software-Subskriptionskosten."
      }
    ],
    "compliance": {
      "omniverse": "LGS Bridge",
      "sovereignty": "Schweizer Datensicherheit",
      "openStandard": "E57 / ASTM E2807"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Stativ-Hardware + Cyclone",
      "maturity": "Produktiv",
      "area": "Hochpräzise Vermessung"
    },
    "staffing": "1x Vermessungsingenieur (100% FTE)"
  },
  "IND-META-2026-MAGIC-LEAP-2": {
    "refCode": "IND-META-2026-MAGIC-LEAP-2",
    "categoryCode": "5.2",
    "categoryName": "Spatial XR & VR/AR Headsets",
    "name": "Magic Leap 2 Enterprise AR Glasses",
    "subtitle": "Ergonomische See-Through AR-Brille für Werksmonteure",
    "vendor": "Magic Leap Inc.",
    "hq": "Plantation, FL, USA / EU Support",
    "businessModel": "Enterprise Hardware Purchase (~€3,500/unit)",
    "url": "https://magicleap.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Leichtgewichtige optische See-Through AR-Brille für Werksmonteure mit dynamischer Abdunkelung für helle Fabrikhallen.",
    "features": [
      {
        "title": "Dynamic Segmented Dimming",
        "desc": "Dunkelt helles Fabriklicht lokal ab, um 3D-Hologramme kontrastreich anzuzeigen."
      },
      {
        "title": "Optical See-Through Safety",
        "desc": "Bewahrt die direkte optische Sicht auf die reale Umgebung für Arbeitssicherheit."
      },
      {
        "title": "Breites 70° FOV",
        "desc": "Großes Sichtfeld für optische AR-Brillen."
      }
    ],
    "inputs": [
      "OpenXR C++ Apps",
      "Android Native Packages",
      "WebXR"
    ],
    "outputs": [
      "Spatial Mesh",
      "Eye Tracking Data",
      "6DOF Controller Pose"
    ],
    "bridges": [
      "PTC Vuforia Engine",
      "Siemens Manifest",
      "Unity Industry",
      "OpenXR"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Hervorragende Wahl für Schritt-für-Schritt-Montageanleitungen an aktiven Fertigungsstraßen."
      },
      {
        "title": "Vorteile",
        "text": "Optisches See-Through schützt die Arbeitssicherheit besser als Videodurchsicht."
      },
      {
        "title": "Engpässe",
        "text": "Rechneinheit wird per Kabel am Gürtel getragen."
      }
    ],
    "compliance": {
      "omniverse": "OpenXR Compliant",
      "sovereignty": "Enterprise Safety Certified",
      "openStandard": "OpenXR / Android Native"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Enterprise AR Deployment",
      "maturity": "Produktiv",
      "area": "Montageanleitung & AR-Unterstützung"
    },
    "staffing": "1x AR Developer (50% FTE)"
  },
  "IND-META-2026-MATLAB-SIMULINK": {
    "refCode": "IND-META-2026-MATLAB-SIMULINK",
    "categoryCode": "4.1",
    "categoryName": "CAE & Multiphysik-Simulation",
    "name": "Matlab / Simulink",
    "subtitle": "Mechatronik-Regelung & Modellbasierte Entwicklung",
    "vendor": "The MathWorks Inc.",
    "hq": "Natick, MA, USA / EU Support",
    "businessModel": "Commercial License + Toolbox Add-ons",
    "url": "https://mathworks.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "STANDARDIZIERT",
    "overview": "Weltweiter Standard für Blockdiagramm-Simulation, Regelungstechnik und modellbasierte Entwicklung mechatronischer Systeme.",
    "features": [
      {
        "title": "Simscape Physical Modeling",
        "desc": "Modellierung mechanischer, elektrischer und hydraulischer Netzwerke."
      },
      {
        "title": "Automatischer C/C++ Code",
        "desc": "Generiert SPS-Code (IEC 61131-3) direkt aus Modellschaltplänen."
      },
      {
        "title": "FMI/FMU Co-Simulation",
        "desc": "Standardisierte Co-Simulationsschnittstelle für digitale Zwillinge."
      }
    ],
    "inputs": [
      "SLX",
      "MAT",
      "C/C++ Code",
      "OPC UA Nodes",
      "CAD Assemblies"
    ],
    "outputs": [
      "C/C++ Code",
      "FMU 2.0/3.0",
      "OPC UA Data",
      "CSV/MAT"
    ],
    "bridges": [
      "ISG-Virtuos",
      "NVIDIA Isaac Sim (via ROS 2 / FMU)",
      "Siemens S7 SPS"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Rückgrat der Regelungstechnik und mathematischen Systemmodellierung."
      },
      {
        "title": "Vorteile",
        "text": "Fehlerfreie automatische Codegenerierung für Industriesteuerungen."
      },
      {
        "title": "Engpässe",
        "text": "Modulares Lizenzmodell macht umfangreiche Toolboxes kostspielig."
      }
    ],
    "compliance": {
      "omniverse": "FMI/FMU Co-Simulation",
      "sovereignty": "ISO 26262 ASIL Certified",
      "openStandard": "FMI 3.0 / OPC UA"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "Desktop / Embedded Deploy",
      "maturity": "Produktiv",
      "area": "System-Regelungstechnik & Co-Simulation"
    },
    "staffing": "1x Regelungstechniker (100% FTE)"
  },
  "IND-META-2026-MATTERPORT-PRO3": {
    "refCode": "IND-META-2026-MATTERPORT-PRO3",
    "categoryCode": "1.5",
    "categoryName": "360°-Erfassung & GIS-Kartierung",
    "name": "Matterport Pro3 & 360 Spatial Platform",
    "subtitle": "360° LiDAR-Kamera & Virtuelle Rundgänge",
    "vendor": "Matterport Inc.",
    "hq": "Sunnyvale, CA, USA",
    "businessModel": "Hardware Purchase + Cloud SaaS Subscription",
    "url": "https://matterport.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "STANDARD WALKTHROUGH",
    "overview": "Führende Plattform für virtuelle 360°-Begehungen. Nutzt die Pro3 LiDAR-Kamera für schnelle Rundgänge in Innen- und Außenbereichen.",
    "features": [
      {
        "title": "Pro3 High-Density LiDAR",
        "desc": "100m Reichweite auch unter direktem Sonnenlicht."
      },
      {
        "title": "Automatisches Puppenhaus",
        "desc": "KI-Generierung interaktiver 3D-Grundrisse."
      },
      {
        "title": "Matterport BIM File",
        "desc": "Direkte automatische Erzeugung von Revit (.RVT) Dateien."
      }
    ],
    "inputs": [
      "Pro3 LiDAR Scan",
      "Sphärische 360° Fotos"
    ],
    "outputs": [
      "E57 Point Cloud",
      "RVT (Revit BIM)",
      "DWG",
      "OBJ"
    ],
    "bridges": [
      "Autodesk Construction Cloud",
      "AWS IoT TwinMaker",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Demokratisiert die Erfassung; auch Nicht-Spezialisten können Werke erfassen."
      },
      {
        "title": "Vorteile",
        "text": "Sehr ansprechender Web-Viewer auf jedem Tablet ohne Installation."
      },
      {
        "title": "Engpässe",
        "text": "Zwingendes Cloud-Hosting; keine reine Offline-Desktop-Verarbeitung."
      }
    ],
    "compliance": {
      "omniverse": "Connector Bridge",
      "sovereignty": "SOC2 / ISO 27001",
      "openStandard": "E57 / RVT"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Stativ Hardware + Cloud",
      "maturity": "Produktiv",
      "area": "Virtuelle Fabrik-Rundgänge"
    },
    "staffing": "1x Facility Techniker (25% FTE)"
  },
  "IND-META-2026-META-QUEST3": {
    "refCode": "IND-META-2026-META-QUEST3",
    "categoryCode": "5.2",
    "categoryName": "Spatial XR & VR/AR Headsets",
    "name": "Meta Quest 3 / Quest Pro (SME Spatial Review)",
    "subtitle": "Kabelloses Mixed-Reality Headset für den Mittelstand",
    "vendor": "Meta Platforms Inc.",
    "hq": "Menlo Park, CA, USA",
    "businessModel": "Low-Cost Hardware Purchase (~€549/unit)",
    "url": "https://meta.com/quest",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EMPFOHLEN SME",
    "overview": "Vielseitiges kabelloses Standalone MR/VR-Headset. Weit verbreitet im Mittelstand für kostengünstige Werksbegehungen, VR-Training und Remote-Kollaboration.",
    "features": [
      {
        "title": "Pancake-Optik & Color Pass-Through",
        "desc": "Klares Bild mit Vollfarb-Mixed-Reality-Pass-Through."
      },
      {
        "title": "Wireless Wi-Fi 6E AirLink",
        "desc": "Drahtloses PC-VR-Streaming vom lokalen Grafikrechner."
      },
      {
        "title": "OpenXR Standard SDK",
        "desc": "Breite Kompatibilität mit Enterprise-Spatial-Apps."
      }
    ],
    "inputs": [
      "OpenXR Executables",
      "WebXR Browser",
      "PC VR Streaming"
    ],
    "outputs": [
      "Hand Tracking Telemetrie",
      "Head Pose Telemetrie"
    ],
    "bridges": [
      "Halocline",
      "Unity",
      "Unreal Engine 5",
      "NVIDIA Omniverse WebRTC"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Günstigster Einstieg zur Skalierung räumlicher 3D-Prüfungen über mehrere Standorte."
      },
      {
        "title": "Vorteile",
        "text": "Kabelloses Design mit sehr schneller Einsatzbereitschaft."
      },
      {
        "title": "Engpässe",
        "text": "Mobilprozessor begrenzt das lokale Rendering ungeprüfter riesiger CAD-Szenen."
      }
    ],
    "compliance": {
      "omniverse": "WebRTC Stream",
      "sovereignty": "SOC2 Enterprise",
      "openStandard": "OpenXR / WebXR"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Standalone Wireless Headset",
      "maturity": "Produktiv",
      "area": "3D-Werkbegehung & VR-Training"
    },
    "staffing": "1x IT / XR Support Specialist (15% FTE)"
  },
  "IND-META-2026-META-SAM3D": {
    "refCode": "IND-META-2026-META-SAM3D",
    "categoryCode": "1.6",
    "categoryName": "Spatial Perzeption & KI-Erkennung",
    "name": "Meta Segment Anything 3D (SAM 3D)",
    "subtitle": "Zero-Shot KI-Segmentierung für 3D-Punktwolken",
    "vendor": "Meta AI Research",
    "hq": "Menlo Park, CA, USA",
    "businessModel": "Free & Open Source AI Weights (Apache 2.0)",
    "url": "https://github.com/facebookresearch/segment-anything-3d",
    "tier": "Tier 1",
    "costLabel": "Open Source / €0",
    "status": "EMPFOHLEN",
    "overview": "KI-Modell zur automatischen Segmentierung roher Punktwolken und Meshes in einzelne Objekte (Rohre, Wände, Roboter).",
    "features": [
      {
        "title": "Zero-Shot 3D Segmentierung",
        "desc": "Erkennt unbeschriftete Objekte ohne vorheriges Training."
      },
      {
        "title": "Point Cloud & Mesh Native",
        "desc": "Arbeitet direkt auf E57-Punktwolken und OpenUSD-Bühnen."
      },
      {
        "title": "Semantisches Tagging",
        "desc": "Schreibt Objektbezeichnungen direkt in USD-Metadaten."
      }
    ],
    "inputs": [
      "Point Clouds (E57/LAS)",
      "OpenUSD Stage",
      "RGB-D Frames"
    ],
    "outputs": [
      "Segmented USD Prims",
      "Bounding Boxes"
    ],
    "bridges": [
      "NVIDIA Omniverse Nucleus",
      "Blender",
      "PyTorch"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Reduziert die manuelle Segmentierungszeit von Fabrik-Scans um 85%."
      },
      {
        "title": "Vorteile",
        "text": "Quelloffen und vollständig auf lokalen GPU-Servern ausführbar."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert viel VRAM auf Grafikkarten."
      }
    ],
    "compliance": {
      "omniverse": "Semantic Schema Native",
      "sovereignty": "Apache 2.0 Open Source",
      "openStandard": "OpenUSD Semantic Schema"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "GPU Server Execution",
      "maturity": "Produktiv",
      "area": "KI-Punktwolken-Segmentierung"
    },
    "staffing": "1x Computer Vision Engineer (50% FTE)"
  },
  "IND-META-2026-MICROSOFT-DTDL": {
    "refCode": "IND-META-2026-MICROSOFT-DTDL",
    "categoryCode": "3.1",
    "categoryName": "Verwaltungsschale & Zwillings-Standards",
    "name": "Digital Twins Definition Language (DTDL)",
    "subtitle": "JSON-LD basiertes Modellierungsformat für IIoT",
    "vendor": "Microsoft / Digital Twin Consortium",
    "hq": "Redmond, WA, USA",
    "businessModel": "Open W3C Standard Draft / Open License",
    "url": "https://github.com/Azure/opendigitaltwins-dtdl",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "EVALUIERT",
    "overview": "JSON-LD-basierte Modellierungssprache zur Definition digitaler Zwillingseinheiten, Raumgraphen und Telemetriesignale in Azure Digital Twins.",
    "features": [
      {
        "title": "JSON-LD Graph",
        "desc": "Definiert Beziehungs-Knoten (z.B. Halle 1 -> enthält -> Roboter A)."
      },
      {
        "title": "Interface-Vererbung",
        "desc": "Vererbung von Eigenschaften wie in objektorientierter Programmierung."
      },
      {
        "title": "W3C Web of Things",
        "desc": "Kompatibel mit offenen W3C-Web-Schemas."
      }
    ],
    "inputs": [
      "JSON-LD Schemas",
      "DTDL Models"
    ],
    "outputs": [
      "Spatial Knowledge Graphs",
      "Azure Synapse Tables"
    ],
    "bridges": [
      "Azure Digital Twins",
      "Bentley iTwin",
      "Power BI"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Sehr gut zur Erstellung räumlicher Graphnetzwerke in der Cloud."
      },
      {
        "title": "Vorteile",
        "text": "Lesbare JSON-LD-Syntax unterstützt durch Entwickler-Werkzeuge."
      },
      {
        "title": "Engpässe",
        "text": "Steht in Konkurrenz zum europäischen AAS-Standard; erfordert Mapping."
      }
    ],
    "compliance": {
      "omniverse": "Azure Bridge",
      "sovereignty": "W3C Draft",
      "openStandard": "W3C JSON-LD"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Cloud PaaS Deploy",
      "maturity": "Produktiv",
      "area": "Graph-basierte Zwillingsmodellierung"
    },
    "staffing": "1x Cloud Data Engineer (25% FTE)"
  },
  "IND-META-2026-MODBUS-TCP": {
    "refCode": "IND-META-2026-MODBUS-TCP",
    "categoryCode": "1.7",
    "categoryName": "OT & Sensorik-Feldbusse",
    "name": "Modbus TCP/RTU Protocol",
    "subtitle": "Legacy-Sensor- & Energiezähler-Protokoll",
    "vendor": "Modbus Organization",
    "hq": "Hopkinton, MA, USA / Global",
    "businessModel": "Open Royalty-Free Protocol",
    "url": "https://modbus.org",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "LEGACY SUPPORT",
    "overview": "Industrie-Kommunikationsprotokoll aus dem Jahr 1979 zum Auslesen von Energiezählern, Temperaturmessern und Alt-SPSen.",
    "features": [
      {
        "title": "Einfaches Register-Mapping",
        "desc": "Auslesen von Holding-Registern und diskreten Eingängen."
      },
      {
        "title": "Minimalste Hardwareanforderungen",
        "desc": "Läuft auf einfachen Seriell-Schnittstellen (RS-485)."
      },
      {
        "title": "Modbus TCP Gatewaying",
        "desc": "Konvertiert serielle RS-485-Daten in Ethernet-TCP/IP-Pakete."
      }
    ],
    "inputs": [
      "RS-485 Serial Signals",
      "TCP Packets"
    ],
    "outputs": [
      "Raw Register Values (Integer/Float)"
    ],
    "bridges": [
      "Collectu Engine",
      "Node-RED",
      "OPC UA Gateways"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unverzichtbar zum Anbinden von Altgeräten und Energiemessern in moderne Zwillinge."
      },
      {
        "title": "Vorteile",
        "text": "Wird von fast jedem Sensorgerät der letzten 40 Jahre unterstützt."
      },
      {
        "title": "Engpässe",
        "text": "Keine eingebaute Sicherheit, keine Metadaten."
      }
    ],
    "compliance": {
      "omniverse": "IoT Edge Gateway",
      "sovereignty": "Royalty-Free Standard",
      "openStandard": "Modbus TCP"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Industrial Gateway",
      "maturity": "Produktiv",
      "area": "Energiezähler & Altgeräte-Anbindung"
    },
    "staffing": "1x Betriebselektriker (10% FTE)"
  },
  "IND-META-2026-MOTIONA": {
    "refCode": "IND-META-2026-MOTIONA",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "MotionA Kinematic Optimization",
    "subtitle": "Roboter-Geschwindigkeits- & Energieoptimierung",
    "vendor": "Industrial Motion Analytics",
    "hq": "DACH Region (EU)",
    "businessModel": "SaaS / License Fee",
    "url": "https://motiona.io",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "TESTBED",
    "overview": "Software zur Analyse von Roboter-Bewegungskurven. Berechnet energieoptimierte Bahnkurven für mehrachsige Industrieroboter.",
    "features": [
      {
        "title": "Energieoptimierte Bahnkurve",
        "desc": "Reduziert den Stromverbrauch durch Glättung von Beschleunigungsspitzen."
      },
      {
        "title": "Schwingungsdämpfung",
        "desc": "Algorithmatische Filterung verhindert mechanisches Schwingen der Roboterarme."
      },
      {
        "title": "USD Kinematik-Export",
        "desc": "Gibt geschmeidige Kinematikprofile an OpenUSD-Bühnen aus."
      }
    ],
    "inputs": [
      "G-Code",
      "SPS Trajektorienlogs",
      "CAD Kinematic Joints"
    ],
    "outputs": [
      "OpenUSD Kinematic Attributes",
      "Smooth G-Code",
      "CSV Telemetrie"
    ],
    "bridges": [
      "NVIDIA Isaac Sim",
      "Siemens S7 SPS",
      "KUKA Sim"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Senkt den Energieverbrauch in Karosseriebaulinien direkt."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Entwicklung mit betrieblichem Nutzenpotenzial durch Energieeinsparung."
      },
      {
        "title": "Engpässe",
        "text": "Spezialisiert auf dynamische Roboterbahnplanung."
      }
    ],
    "compliance": {
      "omniverse": "OpenUSD Kinematic Schema",
      "sovereignty": "100% EU Souverän",
      "openStandard": "G-Code / OpenUSD"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Industrial PC / Cloud",
      "maturity": "Evaluation",
      "area": "Roboter-Energieoptimierung"
    },
    "staffing": "1x Motion Control Specialist (25% FTE)"
  },
  "IND-META-2026-MQTT-SPARKPLUG": {
    "refCode": "IND-META-2026-MQTT-SPARKPLUG",
    "categoryCode": "1.8",
    "categoryName": "Industrial IoT-Protokolle",
    "name": "MQTT / Sparkplug B",
    "subtitle": "Leichtgewichtige IIoT Pub/Sub Serialisierung",
    "vendor": "Eclipse Foundation / OASIS",
    "hq": "Brüssel, Belgien (EU)",
    "businessModel": "Open International Standard (ISO/IEC 20922)",
    "url": "https://sparkplug.eclipse.org",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "STANDARDIZIERT",
    "overview": "Leichtgewichtiges Publish/Subscribe-Protokoll. Sparkplug B bietet Zustandskontrolle, Auto-Discovery von Datentags und strukturierte Protobuf-Payloads für IIoT-Netzwerke.",
    "features": [
      {
        "title": "State Management (BIRTH/DEATH)",
        "desc": "Erkennt neu verbundene Sensoren im Netzwerk sofort automatisch."
      },
      {
        "title": "Minimaler Overhead",
        "desc": "Sehr geringer Bandbreitenverbrauch für das Streaming über Mobilfunk."
      },
      {
        "title": "Google Protobuf",
        "desc": "Hocheffiziente binäre Datenkodierung."
      }
    ],
    "inputs": [
      "Sensorsignale",
      "Edge Gateways",
      "SPS Tags"
    ],
    "outputs": [
      "Sparkplug B Protobuf Payloads",
      "JSON MQTT Topics"
    ],
    "bridges": [
      "Collectu Engine",
      "AWS IoT",
      "Azure Digital Twins",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "De-facto-Messaging-Standard für leichtgewichtige Sensornetzwerke und Cloud-Ingestion."
      },
      {
        "title": "Vorteile",
        "text": "Verwaltet unter der europäischen Eclipse Foundation (Brüssel); lizenzkostenfrei."
      },
      {
        "title": "Engpässe",
        "text": "Bietet ohne Aufsatz weniger semantische Objektbeziehungen als OPC UA."
      }
    ],
    "compliance": {
      "omniverse": "Native IoT Connector",
      "sovereignty": "100% EU Governance (Eclipse)",
      "openStandard": "ISO/IEC 20922"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Edge Broker (EMQX/Mosquitto)",
      "maturity": "Produktiv",
      "area": "IIoT-Sensor-Streaming"
    },
    "staffing": "1x IIoT Integration Developer (25% FTE)"
  },
  "IND-META-2026-MTCONNECT": {
    "refCode": "IND-META-2026-MTCONNECT",
    "categoryCode": "1.7",
    "categoryName": "OT & Sensorik-Feldbusse",
    "name": "MTConnect Machine Standard",
    "subtitle": "Offener Standard für CNC-Werkzeugmaschinen",
    "vendor": "MTConnect Institute",
    "hq": "McLean, VA, USA",
    "businessModel": "Open Royalty-Free Standard",
    "url": "https://mtconnect.org",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "EVALUIERT",
    "overview": "Offenes Protokoll zum Extrahieren struktureller Daten aus CNC-Werkzeugmaschinen und Fräszentren in XML/REST-Formate.",
    "features": [
      {
        "title": "CNC-Datenmodell",
        "desc": "Vordefinierte Tags für Spindeldrehzahl, Vorschub und Betriebsstatus."
      },
      {
        "title": "RESTful HTTP Architecture",
        "desc": "Einfache webbasierte Abfragerstruktur für Dashboards."
      },
      {
        "title": "Adapter-Unterstützung",
        "desc": "Auf CNCs von Mazak, DMG Mori und Haas vorinstalliert."
      }
    ],
    "inputs": [
      "CNC Controller Memory",
      "Machine Sensors"
    ],
    "outputs": [
      "MTConnect XML Streams",
      "HTTP REST Responses"
    ],
    "bridges": [
      "Collectu Data Engine",
      "MES Systems",
      "Azure IoT"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Standard in der Fertigung zur OEE-Erfassung."
      },
      {
        "title": "Vorteile",
        "text": "Standardisiert Zerspanungskennzahlen ohne eigene Treiberentwicklung."
      },
      {
        "title": "Engpässe",
        "text": "Hauptsächlich für Read-Only Telemetrie gedacht."
      }
    ],
    "compliance": {
      "omniverse": "Gateway to USD / AAS",
      "sovereignty": "ANSI Recognized Standard",
      "openStandard": "MTConnect XML"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "CNC Edge PC",
      "maturity": "Produktiv",
      "area": "CNC-Werkzeugmaschinen OEE"
    },
    "staffing": "1x Zerspanungsingenieur (25% FTE)"
  },
  "IND-META-2026-NAVVIS-VLX3": {
    "refCode": "IND-META-2026-NAVVIS-VLX3",
    "categoryCode": "1.1",
    "categoryName": "Mobile & Wearable SLAM-Scanner",
    "name": "NavVis VLX 3 / NavVis IVION",
    "subtitle": "Wearable Mobile Mapping System mit Echtzeit-SLAM",
    "vendor": "NavVis GmbH",
    "hq": "München, Deutschland (EU)",
    "businessModel": "Hardware Purchase + IVION SaaS Subscription",
    "url": "https://navvis.com/vlx-3",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EMPFOHLENES MAPPING HARDWARE",
    "overview": "Wearables Mobile-SLAM-System mit zwei Multi-Layer-LiDAR-Sensoren und 4 HD-Kameras. Erfasst Bestandskonstruktionen (Brownfield) in Schrittgeschwindigkeit mit hoher Genauigkeit.",
    "features": [
      {
        "title": "Präzisions-Mobile-SLAM",
        "desc": "Zentimetergenaue Punktwolken auch in dynamischen Hallen mit beweglichen Objekten."
      },
      {
        "title": "HD 360° Panoramen",
        "desc": "Gestochen scharfe Panoramafotos ohne Bewegungsunschärfe."
      },
      {
        "title": "NavVis IVION Web Twin",
        "desc": "Webbasierte 3D-Streaming-Plattform für die räumliche Fabriknavigation."
      }
    ],
    "inputs": [
      "Passpunkte (GCP)",
      "Raw SLAM Telemetrie"
    ],
    "outputs": [
      "E57 Punktwolke",
      "LAS/LAZ",
      "NavVis IVION Webformat",
      "OpenUSD (.usd)"
    ],
    "bridges": [
      "NavVis IVION",
      "Autodesk Revit",
      "NVIDIA Omniverse Point Cloud Extension"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Erfasst bis zu 50.000 qm pro Tag; ca. 10x schneller als statische Stativscanner."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Hardware aus München; Integration geodätischer Passpunkte."
      },
      {
        "title": "Engpässe",
        "text": "Setzt IVION-Prozessierungslizenz für die vollständige Registrierung voraus."
      }
    ],
    "compliance": {
      "omniverse": "Point Cloud Extension",
      "sovereignty": "100% EU DSGVO (München)",
      "openStandard": "E57 / LAS"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Wearable Hardware",
      "maturity": "Produktiv",
      "area": "Brownfield Fabrik-Erfassung"
    },
    "staffing": "1x Erfassungs-Techniker (Projektbasiert)"
  },
  "IND-META-2026-NEMETSCHEK-ALLPLAN": {
    "refCode": "IND-META-2026-NEMETSCHEK-ALLPLAN",
    "categoryCode": "2.2",
    "categoryName": "BIM, Bauwesen & Infrastruktur (AEC)",
    "name": "Nemetschek Allplan / Vectorworks",
    "subtitle": "Europäisches OpenBIM-System für Fertigteilbau",
    "vendor": "Nemetschek Group",
    "hq": "München, Deutschland (EU)",
    "businessModel": "Subscription / Perpetual License",
    "url": "https://allplan.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Europäische BIM-Plattform spezialisiert auf konstruktiven Ingenieurbau, Betonfertigteilplanung und hochpräzise Industriegebäude.",
    "features": [
      {
        "title": "Betonfertigteil-Engineering",
        "desc": "Automatisierte Bewehrungsplanung und Fertigungselement-Detaillierung."
      },
      {
        "title": "OpenBIM Native Architecture",
        "desc": "Tiefe Integration von IFC- und buildingSMART-Standards."
      },
      {
        "title": "Parasolid Geometrie-Engine",
        "desc": "Hochpräzise Solid-Modellierung für Tragwerke."
      }
    ],
    "inputs": [
      "IFC4",
      "DWG",
      "DGN",
      "Point Cloud (E57)"
    ],
    "outputs": [
      "IFC4 ISO 16739",
      "OpenUSD (.usd)",
      "PDF/DXF"
    ],
    "bridges": [
      "Bimplus Cloud",
      "Solibri Model Checker",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Bevorzugter Standard im DACH-Raum für konstruktiven Ingenieurbau."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-souveräne Compliance mit strikter OpenBIM-Treue."
      },
      {
        "title": "Engpässe",
        "text": "Kleineres globales Plugin-Ökosystem im Vergleich zu Autodesk."
      }
    ],
    "compliance": {
      "omniverse": "OpenBIM Bridge",
      "sovereignty": "100% EU DSGVO (Deutschland)",
      "openStandard": "IFC4 / buildingSMART"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop / Bimplus Cloud",
      "maturity": "Produktiv",
      "area": "Tragwerks- & Fertigteilplanung"
    },
    "staffing": "1x Tragwerksplaner (50% FTE)"
  },
  "IND-META-2026-NEWTON-PHYSICS-WARP": {
    "refCode": "IND-META-2026-NEWTON-PHYSICS-WARP",
    "categoryCode": "4.2",
    "categoryName": "Echtzeit Physik-Engines",
    "name": "Newton Physics Engine (GPU Warp / OpenUSD)",
    "subtitle": "Differenzierbare GPU-Physik für Roboter-RL",
    "vendor": "NVIDIA / Open Source Robotics Research",
    "hq": "Global / USA",
    "businessModel": "Open Source Framework (Apache 2.0)",
    "url": "https://github.com/nvidia/warp",
    "tier": "Tier 1",
    "costLabel": "Open Source / €0",
    "status": "EMPFOHLEN",
    "overview": "Differenzierbares GPU-beschleunigtes Physik-Simulationsframework auf NVIDIA Warp-Basis. Speziell entwickelt für Starrkörperdynamik und Roboter-KI-Training in OpenUSD.",
    "features": [
      {
        "title": "Differentiable Physics",
        "desc": "Berechnet analytische Gradienten für das KI-Training von Robotersteuerungspolicies."
      },
      {
        "title": "Massiv Parallele GPU-Execution",
        "desc": "Simuliert 10.000+ Physik-Umgebungen simultan auf einer GPU."
      },
      {
        "title": "Natives USD-Physics Binding",
        "desc": "Arbeitet direkt auf OpenUSD UsdPhysics-Schemas."
      }
    ],
    "inputs": [
      "OpenUSD Stage (UsdPhysics)",
      "Python via PyTorch/Warp"
    ],
    "outputs": [
      "USD Trajectories",
      "Tensor Arrays",
      "ROS 2 Joint States"
    ],
    "bridges": [
      "NVIDIA Isaac Lab",
      "PyTorch",
      "Omniverse PhysX 5"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unerreichte Geschwindigkeit für das KI-Roboter-Training (100 Jahre Robotererfahrung in 1 Stunde)."
      },
      {
        "title": "Vorteile",
        "text": "Nutzt CUDA-Kerne direkt für Kollisionsschritte im Sub-Millisekundenbereich."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert fortgeschrittene Python-CUDA-Entwicklungskenntnisse."
      }
    ],
    "compliance": {
      "omniverse": "Native USD Physics Schema",
      "sovereignty": "Apache 2.0 Open Source",
      "openStandard": "OpenUSD UsdPhysics"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "NVIDIA GPU Server",
      "maturity": "Produktiv",
      "area": "KI-Robotik Training & GPU-Physik"
    },
    "staffing": "1x Physical AI Engineer (100% FTE)"
  },
  "IND-META-2026-NIANTIC-SCANIVERSE": {
    "refCode": "IND-META-2026-NIANTIC-SCANIVERSE",
    "categoryCode": "1.4",
    "categoryName": "Handheld 3DGS & Photogrammetrie",
    "name": "Scaniverse (Niantic Spatial 3DGS)",
    "subtitle": "Mobile 3D Gaussian Splatting App",
    "vendor": "Niantic Inc.",
    "hq": "San Francisco, CA, USA",
    "businessModel": "Free Mobile App",
    "url": "https://scaniverse.com",
    "tier": "Tier 1",
    "costLabel": "Kostenfrei / €0",
    "status": "EMPFOHLEN",
    "overview": "Kostenlose mobile 3D-Erfassungs-App auf Basis von 3D Gaussian Splatting. Nutzt Smartphones mit LiDAR für schnelles Requisiten-Scannen.",
    "features": [
      {
        "title": "On-Device 3DGS Processing",
        "desc": "Erzeugt Gaussian Splats lokal auf dem Smartphone."
      },
      {
        "title": "LiDAR Mesh Mode",
        "desc": "Generiert texturierte OBJ- und glTF-Modelle direkt."
      },
      {
        "title": "Web-Share",
        "desc": "Exportiert interaktive 3D-Web-Viewer per Link."
      }
    ],
    "inputs": [
      "Mobile LiDAR Rays",
      "Video Camera Stream"
    ],
    "outputs": [
      "SPZ",
      "PLY",
      "glTF 2.0",
      "USDZ"
    ],
    "bridges": [
      "Blender 3D",
      "WebXR Viewers",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Perfektes Werkzeug für Servicetechniker zum schnellen Erfassen defekter Ersatzteile."
      },
      {
        "title": "Vorteile",
        "text": "Keine Hardwarekosten bei vorhandenem Smartphone; sofortige Erfassung."
      },
      {
        "title": "Engpässe",
        "text": "Ungeeignet für komplette Fabrikhallen."
      }
    ],
    "compliance": {
      "omniverse": "USDZ Native",
      "sovereignty": "Mobile App Standard",
      "openStandard": "glTF / USDZ / PLY"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Smartphone App",
      "maturity": "Produktiv",
      "area": "Schnelles Bauteil-Scannen"
    },
    "staffing": "1x Service-Techniker (5% FTE)"
  },
  "IND-META-2026-NVIDIA-ISAAC": {
    "refCode": "IND-META-2026-NVIDIA-ISAAC",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "NVIDIA Isaac Sim / Isaac Lab (Physical AI)",
    "subtitle": "Physikbasierte Roboter-Simulation & KI-Training",
    "vendor": "NVIDIA Corporation",
    "hq": "Santa Clara, CA, USA / EU Support",
    "businessModel": "Omniverse Enterprise License + Hardware",
    "url": "https://developer.nvidia.com/isaac-sim",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "CORE SIM STANDARD",
    "overview": "Roboter-Simulationsanwendung und Physical-AI-Framework auf Omniverse-Basis. Ermöglicht synthetische Datengenerierung (SDG) und Reinforcement Learning für AMRs und Roboterarme.",
    "features": [
      {
        "title": "PhysX 5 GPU Acceleration",
        "desc": "Sub-Millisekunden-Dynamik für Hunderte Roboter gleichzeitig auf der Shopfloor-Bühne."
      },
      {
        "title": "ROS 2 Native DDS Bridge",
        "desc": "Latenzfreie Kommunikationsbrücke zu physischen Robotersteuerungen."
      },
      {
        "title": "Omniverse Replicator",
        "desc": "Generierung synthetischer Kamerabilder mit perfekter semantischer Segmentierung."
      }
    ],
    "inputs": [
      "URDF",
      "USD Robot Stage",
      "ROS 2 Topics (/cmd_vel, /joint_states)"
    ],
    "outputs": [
      "Native OpenUSD Stage",
      "Sensor Streams (RTSP, ROS 2)",
      "Tensor Arrays"
    ],
    "bridges": [
      "ROS 2 DDS",
      "PyTorch",
      "Hugging Face LeRobot",
      "Omniverse Kit"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Absoluter Maßstab für den Sim-to-Real-Transfer von KI-Greif- und Navigationsalgorithmen."
      },
      {
        "title": "Vorteile",
        "text": "Reduziert KI-Kameratrainingszeiten durch synthetische Daten um bis zu 70%."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert NVIDIA RTX GPU Workstations oder Cloud-Instanzen."
      }
    ],
    "compliance": {
      "omniverse": "NATIVE OMNIVERSE CORE",
      "sovereignty": "GAIA-X / SOC2",
      "openStandard": "OpenUSD / ROS 2 DDS"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "Workstation / Enterprise Cloud",
      "maturity": "Produktiv",
      "area": "Autonome Roboter & AMR-Flotten"
    },
    "staffing": "1x Robotics Simulation Specialist (100% FTE)"
  },
  "IND-META-2026-NVIDIA-OMNIVERSE": {
    "refCode": "IND-META-2026-NVIDIA-OMNIVERSE",
    "categoryCode": "5.1",
    "categoryName": "Echtzeit-3D & Spatial Engines",
    "name": "NVIDIA Omniverse Enterprise",
    "subtitle": "Zentrales Betriebssystem für Digital Twins",
    "vendor": "NVIDIA Corporation",
    "hq": "Santa Clara, CA, USA / EU Office",
    "businessModel": "Enterprise Omniverse Licensing per GPU/User",
    "url": "https://developer.nvidia.com/omniverse",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "TARGET CORE ARCHITECTURE",
    "overview": "Zentrale Simulations- und Aggregationsplattform, die nativ auf OpenUSD und RTX-Raytracing basiert. Dient als primäres Herzstück der Zielarchitektur für den industriellen digitalen Zwilling.",
    "features": [
      {
        "title": "Nativer OpenUSD Kernel",
        "desc": "Szenengraphen, Materialien und Physik werden durchgängig im OpenUSD-Standard gespeichert."
      },
      {
        "title": "Nucleus Live Collaboration",
        "desc": "Multi-User-Kollaboration auf gemeinsamen USD-Bühnen in Echtzeit."
      },
      {
        "title": "RTX Real-Time Raytracing",
        "desc": "Physikalisch exaktes Pfadtracing powered by NVIDIA GPU Hardware."
      }
    ],
    "inputs": [
      "Native OpenUSD (.usd/.usda/.usdc)",
      "Connectors für Siemens NX, Revit, Blender, SolidWorks"
    ],
    "outputs": [
      "Native OpenUSD Stage",
      "WebRTC Cloud Stream",
      "RTX Render Passes"
    ],
    "bridges": [
      "Isaac Sim",
      "Siemens Teamcenter",
      "Azure Digital Twins",
      "Collectu Engine",
      "ROS 2"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Absolute Kern-Engine für physikalisch exakte Fabriksimulationen im Gigabyte-Bereich."
      },
      {
        "title": "Vorteile",
        "text": "Kein Datenverlust bei der Datenzusammenführung dank nativer OpenUSD-Architektur."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert performante NVIDIA RTX GPU-Infrastruktur (On-Premise oder Cloud)."
      }
    ],
    "compliance": {
      "omniverse": "NATIVE CORE PLATFORM",
      "sovereignty": "GAIA-X / On-Premise Execution",
      "openStandard": "OpenUSD / Hydra / MaterialX"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "RTX Workstations / Enterprise Cloud",
      "maturity": "Produktiv",
      "area": "Gesamtfabrik Digital Twin Aggregation"
    },
    "staffing": "1x Lead Metaverse Solutions Architect (100% FTE)"
  },
  "IND-META-2026-OPC-UA": {
    "refCode": "IND-META-2026-OPC-UA",
    "categoryCode": "1.7",
    "categoryName": "OT & Sensorik-Feldbusse",
    "name": "OPC UA (IEC 62541 - Client/Server & PubSub)",
    "subtitle": "Herstellerunabhängiger OT-Kommunikationsstandard",
    "vendor": "OPC Foundation",
    "hq": "Scottsdale, AZ, USA / EU Office",
    "businessModel": "Open International Standard (IEC 62541)",
    "url": "https://opcfoundation.org",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "CORE OT BACKBONE",
    "overview": "Herstellerunabhängiges Protokoll für Industrie 4.0. Verbindet SPSen, CNCs und Roboter direkt mit dem 3D-Zwilling im Industrial Metaverse über semantische Companion Specifications.",
    "features": [
      {
        "title": "Companion Specifications",
        "desc": "Standardisierte Datenmodelle für Robotik (OPC UA for Robotics), Werkzeugmaschinen und Spritzguss."
      },
      {
        "title": "OPC UA PubSub",
        "desc": "Echtzeitfähiges Publish/Subscribe-Messaging über UDP/TSN-Netzwerke."
      },
      {
        "title": "Integrierte X.509 Sicherheit",
        "desc": "Durchgängige AES-256 Verschlüsselung und Zertifikats-Authentifizierung."
      }
    ],
    "inputs": [
      "SPS-Variablen",
      "Sensor-Register",
      "Feldbus-Streams"
    ],
    "outputs": [
      "OPC UA XML NodeSets",
      "JSON PubSub Streams",
      "Binary Encoded Streams"
    ],
    "bridges": [
      "NVIDIA Omniverse Live Connect",
      "Siemens S7-1500",
      "Collectu Data Engine",
      "Azure IoT"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unumstrittener weltweiter OT-Protokollstandard für dynamische Telemetrie im digitalen Zwilling."
      },
      {
        "title": "Vorteile",
        "text": "Eliminiert herstellerspezifische Treiber-Lock-ins vollständig."
      },
      {
        "title": "Engpässe",
        "text": "Hochfrequente Telemetrie (<1ms) erfordert optimiertes PubSub über TSN-Hardware."
      }
    ],
    "compliance": {
      "omniverse": "Native Telemetry Bridge",
      "sovereignty": "100% EU Industrie 4.0 Standard",
      "openStandard": "IEC 62541"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Embedded PLC / Edge Container",
      "maturity": "Produktiv",
      "area": "Fabrikweite OT-Kommunikation"
    },
    "staffing": "1x OT-Automatisierer (25% FTE)"
  },
  "IND-META-2026-OPENFOAM": {
    "refCode": "IND-META-2026-OPENFOAM",
    "categoryCode": "4.1",
    "categoryName": "CAE & Multiphysik-Simulation",
    "name": "OpenFOAM Foundation Engine",
    "subtitle": "Open-Source CFD-Berechnungsumgebung",
    "vendor": "OpenFOAM Foundation / ESI Group",
    "hq": "UK / Global Open Source",
    "businessModel": "Free & Open Source (GPL v3)",
    "url": "https://openfoam.org",
    "tier": "Tier 1",
    "costLabel": "Open Source / €0",
    "status": "STANDARDIZIERT",
    "overview": "Leistungsstarkes Open-Source-CFD-Solver-Framework für numerische Strömungsmechanik in Aerodynamik und Thermodynamik.",
    "features": [
      {
        "title": "Massiv Parallele Solver",
        "desc": "Unbegrenzte Skalierung auf Linux-HPC-Knoten ohne Lizenzgebühren."
      },
      {
        "title": "Quelloffene Kontinuumsphysik",
        "desc": "C++ Quellcode-Zugriff zur Anpassung der Navier-Stokes-Gleichungen."
      },
      {
        "title": "ParaView Integration",
        "desc": "Fortgeschrittenes 3D-Postprocessing und Vektorvisualisierung."
      }
    ],
    "inputs": [
      "STL",
      "OBJ",
      "STEP (via Gmsh/salome)",
      "OpenFOAM dictionary"
    ],
    "outputs": [
      "VTK",
      "OpenFOAM Format",
      "OpenUSD (via ParaView)"
    ],
    "bridges": [
      "ParaView",
      "Blender",
      "Linux HPC Cluster"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unbegrenzte Rechenskalierung; von großen Automotive-OEMs genutzt."
      },
      {
        "title": "Vorteile",
        "text": "Zero Lizenzkosten unabhängig von der Anzahl genutzter Rechenkerne."
      },
      {
        "title": "Engpässe",
        "text": "Keine grafische Benutzeroberfläche out-of-the-box; erfordert Terminal-Skripting."
      }
    ],
    "compliance": {
      "omniverse": "Open Source (GPL)",
      "sovereignty": "100% EU Souverän / Self-Hosted",
      "openStandard": "VTK / STL"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "Linux HPC Cluster",
      "maturity": "Produktiv",
      "area": "Numerische Strömungsmechanik"
    },
    "staffing": "1x CFD Specialist (100% FTE)"
  },
  "IND-META-2026-OPENUSD": {
    "refCode": "IND-META-2026-OPENUSD",
    "categoryCode": "2.4",
    "categoryName": "Datenformate & OpenUSD-Standards",
    "name": "OpenUSD (Universal Scene Description - ISO)",
    "subtitle": "Der universelle 3D-Szenenbeschreibungs-Standard",
    "vendor": "Alliance for OpenUSD (AOUSD)",
    "hq": "San Francisco, CA, USA / Global Consortium",
    "businessModel": "Open Source Standard (Apache 2.0) / Pending ISO",
    "url": "https://aousd.org",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "PFLICHTSTANDARD 3D VISUAL",
    "overview": "Der universelle offene Standard für 3D-Szenengraphen im Industrial Metaverse. Ermöglicht die Darstellung riesiger Fabrikszenen mit zerstörungsfreier Schichtenbearbeitung (Layering).",
    "features": [
      {
        "title": "Zerstörungsfreies Layering",
        "desc": "Ermöglicht mehreren Ingenieuren das zeitgleiche Bearbeiten derselben Szene."
      },
      {
        "title": "Erweiterbare Schemas",
        "desc": "Spezifische Schemas für Physik (UsdPhysics), Kinematik und IoT-Metadaten."
      },
      {
        "title": "Hydra Render Framework",
        "desc": "Flexible Rendering-Architektur (RTX, Storm, Cycles) auf einer einzigen Bühne."
      }
    ],
    "inputs": [
      "STEP",
      "JT",
      "FBX",
      "glTF",
      "E57",
      "Point Clouds"
    ],
    "outputs": [
      ".usd (Binary)",
      ".usda (ASCII Text)",
      ".usdc (Binary)",
      ".usdz (Zip Package)"
    ],
    "bridges": [
      "NVIDIA Omniverse Engine",
      "Blender",
      "Unreal Engine 5",
      "Apple Vision Pro"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Absoluter Grundpfeiler-Standard für alle modernen 3D-Industrial-Metaverse-Architekturen."
      },
      {
        "title": "Vorteile",
        "text": "Verarbeitet Multi-Millionen-Teile-Baugruppen ohne Speicherduplizierung."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert Einarbeitung in Kompositionsebenen (References, Payloads, Inherits)."
      }
    ],
    "compliance": {
      "omniverse": "NATIVE CORE FORMAT",
      "sovereignty": "ISO Standardisierung (AOUSD)",
      "openStandard": "Apache 2.0"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Core Data Standard",
      "maturity": "Produktiv",
      "area": "Zentrales 3D-Szenenformat"
    },
    "staffing": "1x 3D Pipeline Architect (25% FTE)"
  },
  "IND-META-2026-ORB360": {
    "refCode": "IND-META-2026-ORB360",
    "categoryCode": "1.5",
    "categoryName": "360°-Erfassung & GIS-Kartierung",
    "name": "Orb360 Turntable System",
    "subtitle": "Automatisierte 360° Bauteil-Fotografie",
    "vendor": "Orb360 Technologies",
    "hq": "Deutschland (EU)",
    "businessModel": "Hardware Kit + Cloud Hosting",
    "url": "https://orb360.tech",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EVALUIERT",
    "overview": "Automatisierter Drehteller zur Erfassung kleiner Industrieteile für Ersatzteilkataloge und 3D-Web-Viewer.",
    "features": [
      {
        "title": "Drehteller-Sync",
        "desc": "Synchronisiert Auslöser mit der Drehtellerrotation."
      },
      {
        "title": "Freistellung",
        "desc": "Erzeugt saubere Alpha-Masken zur schnellen 3D-Mesh-Verarbeitung."
      },
      {
        "title": "Web3D Export",
        "desc": "Erzeugt interaktive 360°-Produktansichten."
      }
    ],
    "inputs": [
      "High-Res Kamera Fotos"
    ],
    "outputs": [
      "glTF 2.0",
      "OBJ",
      "Interactive Web HTML"
    ],
    "bridges": [
      "WooCommerce",
      "SAP Commerce Cloud",
      "Blender"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Ideal zum Digitalisieren von Tausenden Kleinteilen im Ersatzteillager."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Hardware; automatisiert die Produktfotografie."
      },
      {
        "title": "Engpässe",
        "text": "Größe auf Objekte beschränkt, die auf den Drehteller passen."
      }
    ],
    "compliance": {
      "omniverse": "Web Standard Export",
      "sovereignty": "100% EU Souverän",
      "openStandard": "glTF 2.0"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Hardware Studio Table",
      "maturity": "Produktiv",
      "area": "Ersatzteil-Cataloging"
    },
    "staffing": "1x Inventory Clerk (25% FTE)"
  },
  "IND-META-2026-PLY-3DGS": {
    "refCode": "IND-META-2026-PLY-3DGS",
    "categoryCode": "2.4",
    "categoryName": "Datenformate & OpenUSD-Standards",
    "name": "PLY / Splat Files (3D Gaussian Splatting)",
    "subtitle": "Fotorealistisches 3D-Gaussian-Splatting Format",
    "vendor": "Open Research Community / Graphics Standards",
    "hq": "Global Open Community",
    "businessModel": "Open Standard Format",
    "url": "https://github.com/graphdeco-inria/gaussian-splatting",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "EMPFOHLEN",
    "overview": "Spezifikation zur Speicherung von 3D Gaussian Splatting Parametern (3D-Position, Transparenz, Skalierung, Rotation und Farbdarstellung).",
    "features": [
      {
        "title": "Spherical Harmonics Storage",
        "desc": "Speichert blickwinkelabhängige Lichtreflexionen und Glanz."
      },
      {
        "title": "Fotorealismus",
        "desc": "Rendert transparente und spiegelnde Oberflächen fotorealistisch."
      },
      {
        "title": "GPU Rasterization Friendly",
        "desc": "Wird direkt in CUDA- oder Vulkan-Puffer geladen."
      }
    ],
    "inputs": [
      "XGRIDS Studio",
      "Scaniverse",
      "COLMAP Photogrammetrie"
    ],
    "outputs": [
      ".ply (3DGS Binary Container)",
      ".splat (Web Compressed)"
    ],
    "bridges": [
      "NVIDIA Omniverse 3DGS Extension",
      "Unreal Engine 5",
      "WebGL Splat Viewers"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Revolutioniert die fotorealistische Visualisierung komplexer Maschinen."
      },
      {
        "title": "Vorteile",
        "text": "Erfasst spiegelnde Flächen, an denen klassische Photogrammetrie scheitert."
      },
      {
        "title": "Engpässe",
        "text": "Enthält keine parametrische CAD-Geometrie; erfordert Splat-Renderer."
      }
    ],
    "compliance": {
      "omniverse": "3DGS Extension",
      "sovereignty": "Open Graphics Format",
      "openStandard": "Open PLY Schema"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Spatial Splat File",
      "maturity": "Produktiv",
      "area": "Fotorealistisches 3D-Gaussian-Splatting"
    },
    "staffing": "1x Graphics Engineer (10% FTE)"
  },
  "IND-META-2026-PROFINET-TSN": {
    "refCode": "IND-META-2026-PROFINET-TSN",
    "categoryCode": "1.7",
    "categoryName": "OT & Sensorik-Feldbusse",
    "name": "PROFINET / TSN (Time-Sensitive Networking)",
    "subtitle": "Industrieller Echtzeit-Ethernet-Standard",
    "vendor": "PI (PROFIBUS & PROFINET International)",
    "hq": "Karlsruhe, Deutschland (EU)",
    "businessModel": "Open Industrial Ethernet Standard (IEC 61158 / IEC 61784)",
    "url": "https://profibus.com",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "STANDARDIZIERT",
    "overview": "Führender europäischer Echtzeit-Industrial-Ethernet-Standard. Garantiert in Kombination mit TSN deterministische Taktraten im Mikrosekundenbereich für die Fabrikautomatisierung.",
    "features": [
      {
        "title": "Deterministische Echtzeit",
        "desc": "Jitterfreie Antriebsregelungstakte bis unter 31.25 Mikrosekunden."
      },
      {
        "title": "TSN Konvergenz",
        "desc": "Erlaubt harte Echtzeit-I/O und hochbandbreitiges 3D-Streaming auf demselben Kabel."
      },
      {
        "title": "PROFIsafe Integrated",
        "desc": "TÜV-zertifizierte Sicherheitskommunikation bis SIL3 / PL e."
      }
    ],
    "inputs": [
      "Ethernet Frames",
      "Sensorsignale"
    ],
    "outputs": [
      "PROFINET IO Telemetrie",
      "TSN Deterministische Streams"
    ],
    "bridges": [
      "Siemens S7 SPS",
      "ISG-Virtuos",
      "OPC UA PubSub over TSN"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Absolute Rückgrat-Infrastruktur für europäische automatisierte Fertigungslinien."
      },
      {
        "title": "Vorteile",
        "text": "100% europäischer Industriestandard entwickelt in Karlsruhe."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert verwaltete TSN-Ethernet-Switches für konvergenten Datenverkehr."
      }
    ],
    "compliance": {
      "omniverse": "Fieldbus Integration",
      "sovereignty": "100% EU Standard (IEC 61158)",
      "openStandard": "PROFINET / IEEE 802.1 TSN"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "Industrial Ethernet Hardware",
      "maturity": "Produktiv",
      "area": "Feldbus- & Antriebssteuerung"
    },
    "staffing": "1x Netzwerkspezialist (50% FTE)"
  },
  "IND-META-2026-PTC-CREO": {
    "refCode": "IND-META-2026-PTC-CREO",
    "categoryCode": "2.1",
    "categoryName": "Mechanisches CAD (MCAD)",
    "name": "PTC Creo Parametric",
    "subtitle": "High-Precision MCAD & Generative AI",
    "vendor": "PTC Inc.",
    "hq": "Boston, MA, USA",
    "businessModel": "Enterprise SaaS / Subscription",
    "url": "https://ptc.com/creo",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "EVALUIERT",
    "overview": "Hochpräzise parametrische MCAD-Suite für Schwermaschinenbau, Verteidigung und Fahrzeugtechnik mit tiefen KI-Generativfunktionen und Model-Based Definition (MBD).",
    "features": [
      {
        "title": "Generative Design AI",
        "desc": "Topologieoptimierung unter Berücksichtigung additiver und fertigungstechnischer Randbedingungen."
      },
      {
        "title": "Model-Based Definition (MBD)",
        "desc": "Direkte 3D-Annotierung von PMI-Fertigungsinformationen am CAD-Modell."
      },
      {
        "title": "Ansys Powered Simulation",
        "desc": "Echtzeit-Struktur- und Thermosimulation direkt in der Konstruktionsumgebung."
      }
    ],
    "inputs": [
      "PRT",
      "ASM",
      "STEP AP242",
      "JT",
      "Inventor"
    ],
    "outputs": [
      "OpenUSD (.usda/.usdc)",
      "STEP AP242",
      "JT",
      "3MF"
    ],
    "bridges": [
      "PTC Windchill PLM",
      "PTC ThingWorx",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Meistert komplexe Enterprise-Baugruppen mit robuster Flächenkonstruktion."
      },
      {
        "title": "Vorteile",
        "text": "Starke MBD-Unterstützung überträgt Fertigungsmetadaten direkt in OpenUSD-Schemas."
      },
      {
        "title": "Engpässe",
        "text": "Steile Lernkurve; komplexe Lizenzierungsstrukturen."
      }
    ],
    "compliance": {
      "omniverse": "Connector Plugin",
      "sovereignty": "SOC2 / ISO 27001",
      "openStandard": "STEP AP242 / JT ISO"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "On-Premise / Cloud PLM",
      "maturity": "Produktiv",
      "area": "Schwermaschinenbau & Automotive"
    },
    "staffing": "1x Senior Creo CAD Architect (100% FTE)"
  },
  "IND-META-2026-PTC-ONSHAPE": {
    "refCode": "IND-META-2026-PTC-ONSHAPE",
    "categoryCode": "2.1",
    "categoryName": "Mechanisches CAD (MCAD)",
    "name": "PTC Onshape",
    "subtitle": "Pure Cloud-Native Multi-User CAD",
    "vendor": "PTC Inc.",
    "hq": "Boston, MA, USA",
    "businessModel": "100% Pure Cloud SaaS Subscription",
    "url": "https://onshape.com",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EVALUIERT",
    "overview": "Rein browserbasierte Cloud-CAD- und PDM-Plattform für die synchrone Multi-User-Bearbeitung von 3D-Modellen in Echtzeit.",
    "features": [
      {
        "title": "Multi-User Live Editing",
        "desc": "Gleichzeitiges kollaboratives Konstruieren im Browser wie in Google Docs."
      },
      {
        "title": "FeatureScript",
        "desc": "Eigene parametrische Konstruktionsfunktionen mittels offener Skriptsprache."
      },
      {
        "title": "Cloud PDM",
        "desc": "Revisionsverwaltung ohne Auschecken direkt in der Datenbank."
      }
    ],
    "inputs": [
      "STEP",
      "IGES",
      "Parasolid",
      "SolidWorks",
      "STL"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "glTF 2.0",
      "STEP AP242",
      "OBJ"
    ],
    "bridges": [
      "PTC Arena PLM",
      "NVIDIA Omniverse Cloud",
      "WebXR"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Läuft flüssig im Browser; komplexe Berechnungen erfolgen serverseitig."
      },
      {
        "title": "Vorteile",
        "text": "Zero-Installation-Aufwand und sofortiger API-Zugriff für automatisierte USD-Pipelines."
      },
      {
        "title": "Engpässe",
        "text": "Setzt dauerhafte Bandbreite und Akzeptanz von Cloud-Hosting voraus."
      }
    ],
    "compliance": {
      "omniverse": "Web Bridge / API Export",
      "sovereignty": "SOC2 / US Cloud",
      "openStandard": "STEP AP242 / glTF 2.0"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Web Browser Native",
      "maturity": "Produktiv",
      "area": "Kollaborative Produktentwicklung"
    },
    "staffing": "1x Cloud CAD Engineer (25% FTE)"
  },
  "IND-META-2026-PTC-THINGWORX": {
    "refCode": "IND-META-2026-PTC-THINGWORX",
    "categoryCode": "3.3",
    "categoryName": "Enterprise Cloud-Zwillinge",
    "name": "PTC ThingWorx IIoT Platform",
    "subtitle": "Smart Factory Application Engine & AR Service",
    "vendor": "PTC Inc.",
    "hq": "Boston, MA, USA",
    "businessModel": "Enterprise License / SaaS Subscription",
    "url": "https://ptc.com/thingworx",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "EVALUIERT",
    "overview": "Etablierte Enterprise-IIoT-Plattform für schnelle Industrieanwendungen, Maschinenüberwachung und AR-Außendienst-Bereitstellung.",
    "features": [
      {
        "title": "Kepware OPC Integration",
        "desc": "Nativer Hochleistungs-Treiber für Industriesteuerungen."
      },
      {
        "title": "Vuforia AR Integration",
        "desc": "Direkte Bereitstellung von Live-IIoT-Daten in AR-Servicebrillen."
      },
      {
        "title": "Mashup Builder",
        "desc": "Drag-and-Drop Dashboard-Erstellung für Werkstatt-OEE."
      }
    ],
    "inputs": [
      "OPC UA (Kepware)",
      "MQTT",
      "REST API",
      "Modbus"
    ],
    "outputs": [
      "ThingWorx REST Services",
      "Vuforia AR Streams"
    ],
    "bridges": [
      "PTC Windchill",
      "PTC Creo",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Reife Enterprise-Plattform installiert in Tausenden Werken weltweit."
      },
      {
        "title": "Vorteile",
        "text": "Bündelt Kepware-Konnektivität mit Vuforia AR out-of-the-box."
      },
      {
        "title": "Engpässe",
        "text": "Hoher Lizenzkostenfußabdruck."
      }
    ],
    "compliance": {
      "omniverse": "Telemetry Bridge",
      "sovereignty": "SOC2 Compliant",
      "openStandard": "OPC UA / REST"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "On-Prem Server / Cloud",
      "maturity": "Produktiv",
      "area": "IIoT Dashboards & AR Service"
    },
    "staffing": "1x ThingWorx Developer (50% FTE)"
  },
  "IND-META-2026-RADIANCE-HONEYBEE": {
    "refCode": "IND-META-2026-RADIANCE-HONEYBEE",
    "categoryCode": "4.3",
    "categoryName": "Umwelt- & Strömungssimulation",
    "name": "Radiance / Honeybee / DIVA",
    "subtitle": "Tageslicht- & Blendungs-Simulation",
    "vendor": "Lawrence Berkeley National Lab / Ladybug Tools",
    "hq": "Berkeley, CA, USA",
    "businessModel": "Free & Open Source Framework",
    "url": "https://ladybug.tools",
    "tier": "Tier 1",
    "costLabel": "Open Source / €0",
    "status": "EVALUIERT",
    "overview": "Präzise Raytracing-Engine zur Berechnung von Tageslichtquotienten, solaren Wärmeeintrags- und Blendungsvorhersagen in Fertigungshallen.",
    "features": [
      {
        "title": "Backward Raytracing",
        "desc": "Berechnet exakte Lux-Werte und Tageslicht-Autonomie-Prozentsätze."
      },
      {
        "title": "Honeybee Grasshopper Plugin",
        "desc": "Algorithmatische Tageslichtoptimierung gekoppelt mit Rhino 3D."
      },
      {
        "title": "Blendungsanalyse (DGP)",
        "desc": "Schützt die Ergonomie durch Blendungsvorhersagen an Arbeitsplätzen."
      }
    ],
    "inputs": [
      "RAD Files",
      "OBJ",
      "Rhino 3D Geometry",
      "EPW Weather"
    ],
    "outputs": [
      "HDR False-Color Maps",
      "Lux Matrix Files",
      "OpenUSD Overlay"
    ],
    "bridges": [
      "Rhino 3D + Grasshopper",
      "Revit",
      "EnergyPlus"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Wichtig für die ergonomische Ausleuchtung von Montagebändern mit natürlichem Skylight."
      },
      {
        "title": "Vorteile",
        "text": "Wissenschaftlich validierte Beleuchtungs-Engine."
      },
      {
        "title": "Engpässe",
        "text": "Raytracing-Berechnungen für große Fabrikdächer erfordern Rechenzeit."
      }
    ],
    "compliance": {
      "omniverse": "Open Source",
      "sovereignty": "EN 17037 Daylight Standard",
      "openStandard": "RAD / OBJ"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop / Scripting",
      "maturity": "Produktiv",
      "area": "Lichtplanung & Hallenergonomie"
    },
    "staffing": "1x Lichtplaner (25% FTE)"
  },
  "IND-META-2026-REALWEAR-NAV520": {
    "refCode": "IND-META-2026-REALWEAR-NAV520",
    "categoryCode": "5.2",
    "categoryName": "Spatial XR & VR/AR Headsets",
    "name": "RealWear Navigator 520 (Assisted Reality Wearable)",
    "subtitle": "Freihand-Mikrodisplay für Instandhaltung & Service",
    "vendor": "RealWear Inc.",
    "hq": "Vancouver, WA, USA",
    "businessModel": "Hardware Purchase + Foresight Cloud MDM",
    "url": "https://realwear.com/navigator-520",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "STANDARDIZIERT FIELD WORKER",
    "overview": "Robustes Freihand-Mikrodisplay-Headset zur Montage an Schutzhelmen. Entwickelt für Service-Techniker bei der Fernwartung und Inspektion in rauen Industrieumgebungen.",
    "features": [
      {
        "title": "100% Freihand-Sprachsteuerung",
        "desc": "Zulässiger Betrieb bei bis zu 100dB Lärm über geräuschunterdrückende Mikrofone."
      },
      {
        "title": "Helm- & PSA-Integration",
        "desc": "Wird direkt an Standard-Industrieschutzhelmen befestigt."
      },
      {
        "title": "HyperDisplay Optics",
        "desc": "Mikrodisplay wirkt wie ein 7-Zoll-Tablet auf Armlänge."
      }
    ],
    "inputs": [
      "Android APK Pakete",
      "Sprachbefehle",
      "Remote Video Calls"
    ],
    "outputs": [
      "48MP Kamerastream",
      "Audio Telemetrie",
      "PDF Anmerkungen"
    ],
    "bridges": [
      "Microsoft Teams",
      "Zoom 1Form",
      "PTC Vuforia",
      "Siemens Manifest"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Marktführend für freihändige Remote-Unterstützung in Chemieanlagen und Raffinerien."
      },
      {
        "title": "Vorteile",
        "text": "IP66 wasser/staubgeschützt und aus 2 Metern Sturzhöhe getestet; volle Sicht auf die Umgebung."
      },
      {
        "title": "Engpässe",
        "text": "2D-Assisted-Reality Display; rendert keine stereoskopische 3D-Grafik im Raum."
      }
    ],
    "compliance": {
      "omniverse": "Remote Video Bridge",
      "sovereignty": "IP66 / ATEX Zone 2 Option",
      "openStandard": "Android Native"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Wearable Micro-Display",
      "maturity": "Produktiv",
      "area": "Fernwartung & Instandhaltung"
    },
    "staffing": "1x Servicetechniker (10% FTE)"
  },
  "IND-META-2026-RHINO-GRASSHOPPER": {
    "refCode": "IND-META-2026-RHINO-GRASSHOPPER",
    "categoryCode": "2.2",
    "categoryName": "BIM, Bauwesen & Infrastruktur (AEC)",
    "name": "Rhino 3D + Grasshopper (Parametric AEC)",
    "subtitle": "Algorithmatisches 3D-Design & Prozedurale Geometrie",
    "vendor": "Robert McNeel & Associates",
    "hq": "Seattle, WA, USA",
    "businessModel": "Perpetual License (Keine Abo-Pflicht)",
    "url": "https://rhino3d.com",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EMPFOHLEN",
    "overview": "Fortgeschrittenes NURBS-Flächenmodellierungssystem gekoppelt mit Grasshopper für die visuelle Programmierung komplexer parametrischer Fabrikarchitekturen.",
    "features": [
      {
        "title": "Grasshopper Skripting",
        "desc": "Prozedurale Generierung von Dachstrukturen, Förderbändern und Fassaden."
      },
      {
        "title": "NURBS-zu-Mesh Wandlung",
        "desc": "Feingliedrige Kontrolle über Polygonanzahl und UV-Mapping."
      },
      {
        "title": "Rhino.Inside Engine",
        "desc": "Bettet die Rhino-Engine direkt in Revit, AutoCAD oder USD-Pipelines ein."
      }
    ],
    "inputs": [
      "3DM",
      "STEP",
      "IGES",
      "OBJ",
      "IFC",
      "Point Clouds"
    ],
    "outputs": [
      "OpenUSD (.usd/.usda)",
      "glTF 2.0",
      "STEP",
      "OBJ",
      "FBX"
    ],
    "bridges": [
      "NVIDIA Omniverse Connector",
      "Revit via Rhino.Inside",
      "Blender"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unverzichtbar für komplexe Freiform-Dachtragwerke und Förderband-Pfadoptimierung."
      },
      {
        "title": "Vorteile",
        "text": "Einmalkauf-Modell mit unerreichter mathematischer Flächenpräzision."
      },
      {
        "title": "Engpässe",
        "text": "Setzt Kenntnisse in der visuellen Programmierung voraus."
      }
    ],
    "compliance": {
      "omniverse": "Native Extension",
      "sovereignty": "SOC2 Compliant",
      "openStandard": "STEP AP242 / glTF / OpenUSD"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop Application",
      "maturity": "Produktiv",
      "area": "Prozedurales & Algorithmisches Design"
    },
    "staffing": "1x Computational Design Specialist (50% FTE)"
  },
  "IND-META-2026-RIIICO-AI": {
    "refCode": "IND-META-2026-RIIICO-AI",
    "categoryCode": "1.6",
    "categoryName": "Spatial Perzeption & KI-Erkennung",
    "name": "RIIICO (Factory AI Automated Layout)",
    "subtitle": "KI-Punktwolken-Segmentierung in 3D-CAD",
    "vendor": "RIIICO GmbH",
    "hq": "Düsseldorf, Deutschland (EU)",
    "businessModel": "SaaS Cloud / On-Premise Enterprise Subscription",
    "url": "https://riiico.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EMPFOHLEN",
    "overview": "KI-Software, die rohe 3D-Punktwolken von Bestandsfabriken automatisch in parametrische CAD/BIM-Layouts und einzelne 3D-Objekte umwandelt.",
    "features": [
      {
        "title": "KI-Objekterkennung",
        "desc": "Erkennt und separiert Maschinen, Förderbänder und Stützen automatisch aus Scans."
      },
      {
        "title": "CAD-Mesh-Generierung",
        "desc": "Ersetzt dichte Punktwolken durch leichtgewichtige 3D-CAD-Objekte."
      },
      {
        "title": "Revit & Omniverse Sync",
        "desc": "Direkter Export in Gebäudesoftware und OpenUSD-Bühnen."
      }
    ],
    "inputs": [
      "E57 Point Cloud",
      "NavVis Data",
      "Leica Scans"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "IFC",
      "STEP",
      "Autodesk Revit (.RVT)"
    ],
    "bridges": [
      "NVIDIA Omniverse",
      "Autodesk Revit",
      "Siemens NX"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Löst den wesentlichen Engpass bei der Konvertierung von Scans in nutzbare CAD-Zwillinge."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Unternehmen mit deutscher DSGVO-Datenhaltung."
      },
      {
        "title": "Engpässe",
        "text": "Sehr spezielle Sondermaschinen erfordern kurze manuelle Prüfung."
      }
    ],
    "compliance": {
      "omniverse": "USD Native Export",
      "sovereignty": "100% EU DSGVO (Deutschland)",
      "openStandard": "OpenUSD / IFC"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Web SaaS / On-Prem",
      "maturity": "Produktiv",
      "area": "Brownfield Layout-Konvertierung"
    },
    "staffing": "1x Fabrikplaner (25% FTE)"
  },
  "IND-META-2026-ROS2-DDS": {
    "refCode": "IND-META-2026-ROS2-DDS",
    "categoryCode": "1.7",
    "categoryName": "OT & Sensorik-Feldbusse",
    "name": "ROS / ROS 2 (DDS Inter-Robot Middleware)",
    "subtitle": "Open-Source Roboter-Betriebssystem & Middleware",
    "vendor": "Open Robotics (OSRF)",
    "hq": "Mountain View, CA, USA / Global Community",
    "businessModel": "Free & Open Source (Apache 2.0 / BSD)",
    "url": "https://ros.org",
    "tier": "Tier 1",
    "costLabel": "Open Source / €0",
    "status": "CORE ROBOTICS BACKBONE",
    "overview": "Open-Source Roboter-Middleware auf Basis von Data Distribution Service (DDS) für die Zero-Copy-Kommunikation in autonomen Robotern und AMRs.",
    "features": [
      {
        "title": "DDS Middleware Engine",
        "desc": "Echtzeitfähige Peer-to-Peer-Kommunikation zwischen Mikrocontrollern und GPUs."
      },
      {
        "title": "Nav2 & MoveIt 2",
        "desc": "Produktionsbereite Pakete für Pfadplanung, Hindernisvermeidung und Armkinematik."
      },
      {
        "title": "Isaac Sim Extension",
        "desc": "Direkte Sub-Millisekunden-Brücke zwischen ROS 2 Nodes und OpenUSD-Simulationsumgebungen."
      }
    ],
    "inputs": [
      "Sensor Topics (LaserScan, Image, IMU)",
      "Action Goals"
    ],
    "outputs": [
      "Motor Velocity Commands (Twist)",
      "Joint Trajectories",
      "TF Transform Trees"
    ],
    "bridges": [
      "NVIDIA Isaac Sim/Lab",
      "Hugging Face LeRobot",
      "Gazebo",
      "Waveye Radar"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Globale Software-Basis für Physical-AI-Robotik und autonome Transportfahrzeuge."
      },
      {
        "title": "Vorteile",
        "text": "Riesiges weltweites Open-Source-Ökosystem vorgefertigter Sensortreiber."
      },
      {
        "title": "Engpässe",
        "text": "Echtzeit-DDS-Tuning erfordert tiefes Robotik-Softwarewissen."
      }
    ],
    "compliance": {
      "omniverse": "Native Isaac Sim Bridge",
      "sovereignty": "Open Source Standard",
      "openStandard": "OMG DDS Standard"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "Embedded Robot Controller / Linux",
      "maturity": "Produktiv",
      "area": "Autonome Transport- & Greifroboter"
    },
    "staffing": "1x Robotics Software Engineer (100% FTE)"
  },
  "IND-META-2026-SIDEFX-HOUDINI": {
    "refCode": "IND-META-2026-SIDEFX-HOUDINI",
    "categoryCode": "2.3",
    "categoryName": "DCC & Generatives 3D-Design",
    "name": "SideFX Houdini (Procedural Pipelines)",
    "subtitle": "Prozeduraler USD-Pipeline-Generator & VFX",
    "vendor": "SideFX",
    "hq": "Toronto, Kanada",
    "businessModel": "Tiered Subscription (Indie / Core / FX)",
    "url": "https://sidefx.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "STANDARDIZIERT",
    "overview": "Knotenbasierte prozedurale Generierungs- und VFX-Suite. Fungiert als prozedurale Pipeline-Engine für die automatisierte Aufbereitung gewaltiger OpenUSD-Fabrikszenen.",
    "features": [
      {
        "title": "Solaris USD Suite",
        "desc": "Natives OpenUSD Layout-, Beleuchtungs- und Composition-System."
      },
      {
        "title": "PDG Parallel Processing",
        "desc": "Massiv parallele Batch-Verarbeitung von CAD-Assets."
      },
      {
        "title": "Prozedurale LODs",
        "desc": "Automatisierte Erzeugung von Detailstufen (LOD) und Kollisions-Meshes."
      }
    ],
    "inputs": [
      "HIP",
      "USD",
      "BGEO",
      "STEP",
      "FBX",
      "OBJ"
    ],
    "outputs": [
      "OpenUSD (.usd/.usdc)",
      "glTF 2.0",
      "FBX",
      "Alembic"
    ],
    "bridges": [
      "NVIDIA Omniverse Hydra",
      "Unreal Engine 5 (Houdini Engine)",
      "Unity"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Branchen-Goldstandard für die Verarbeitung riesiger Punktwolken und CAD-Daten."
      },
      {
        "title": "Vorteile",
        "text": "Solaris nutzt OpenUSD nativ als interne Datenstruktur."
      },
      {
        "title": "Engpässe",
        "text": "Steile Lernkurve; erfordert spezialisierte Technical Directors."
      }
    ],
    "compliance": {
      "omniverse": "Native Solaris USD Engine",
      "sovereignty": "ISO Compliant",
      "openStandard": "OpenUSD / Hydra"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "Linux / Windows Workstation",
      "maturity": "Produktiv",
      "area": "Automatisierte Pipeline-Generierung"
    },
    "staffing": "1x Technical Director (100% FTE)"
  },
  "IND-META-2026-SIEMENS-NX": {
    "refCode": "IND-META-2026-SIEMENS-NX",
    "categoryCode": "2.1",
    "categoryName": "Mechanisches CAD (MCAD)",
    "name": "Siemens NX CAD",
    "subtitle": "High-End OEM MCAD & OpenUSD Live-Kopplung",
    "vendor": "Siemens DISW",
    "hq": "Plano, USA / Deutschland (EU)",
    "businessModel": "Enterprise Subscription / Named User",
    "url": "https://plm.automation.siemens.com",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "STANDARDIZIERT",
    "overview": "High-End MCAD-Plattform für hochkomplexe Baugruppen im Maschinen- und Fahrzeugbau. Dient als primärer Geometrie-Kernel für Automotive-, Luft- und Raumfahrt-OEMs mit nativer Live-Streaming-Anbindung an NVIDIA Omniverse.",
    "features": [
      {
        "title": "Synchronous Technology",
        "desc": "Direkte Modellierung ohne störende Abhängigkeiten des parametrischen Feature-Baums."
      },
      {
        "title": "JT ISO Format Native",
        "desc": "Hochleistungs-Tessellierung für gigantische Baugruppen mit über 100.000 Bauteilen."
      },
      {
        "title": "USD Live Sync",
        "desc": "Bi-direktionales Echtzeit-Streaming von parametrischer Geometrie und Kinematik-Gelenken."
      }
    ],
    "inputs": [
      "Parasolid (.x_t)",
      "JT ISO 14306",
      "STEP AP242",
      "CATPart"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "JT ISO 14306",
      "STEP AP242"
    ],
    "bridges": [
      "Siemens Teamcenter PLM",
      "NVIDIA Omniverse",
      "Tecnomatix Process Simulate"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Weltweiter Industriestandard für Großbaugruppen (>100k Komponenten) ohne Bildrateneinbrüche."
      },
      {
        "title": "Vorteile",
        "text": "Nativer OpenUSD Live-Connector macht zeitaufwendige Offline-Exporte überflüssig."
      },
      {
        "title": "Engpässe",
        "text": "Sehr hohe Enterprise-Lizenzkosten; erfordert eine strukturierte PLM-Einbindung."
      }
    ],
    "compliance": {
      "omniverse": "Native Extension",
      "sovereignty": "100% EU DSGVO (GAIA-X)",
      "openStandard": "JT ISO / STEP AP242 / OpenUSD"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "On-Premise / Hybrid PLM",
      "maturity": "Produktiv",
      "area": "OEM Fahrzeug- & Maschinenbau"
    },
    "staffing": "1x Senior CAD/PLM Ingenieur (100% FTE) | Setup: 4-6 Wochen Schulung"
  },
  "IND-META-2026-SIEMENS-OPERATIONS-X": {
    "refCode": "IND-META-2026-SIEMENS-OPERATIONS-X",
    "categoryCode": "3.3",
    "categoryName": "Enterprise Cloud-Zwillinge",
    "name": "Siemens Industrial Operations X",
    "subtitle": "Industrial IoT Edge-to-Cloud Plattform",
    "vendor": "Siemens AG",
    "hq": "München / Nürnberg, Deutschland (EU)",
    "businessModel": "Enterprise Cloud / SaaS Consumption",
    "url": "https://siemens.com/operations-x",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "STANDARDIZIERT",
    "overview": "Offenes, interoperables Industrial-IoT-Portfolio zur Automatisierung, Analyse und Optimierung des Shopfloor-Betriebs von der Edge bis zur Cloud.",
    "features": [
      {
        "title": "Industrial Edge Management",
        "desc": "Zentrales Verteilnetzwerk für Docker-App-Container auf Shopfloor-SPSen."
      },
      {
        "title": "MindSphere IIoT Analytics",
        "desc": "Cloud-Module für vorausschauende Instandhaltung und Energieanalysen."
      },
      {
        "title": "Omniverse Integration",
        "desc": "Überträgt Shopfloor-Telemetrie live in NVIDIA Omniverse USD-Bühnen."
      }
    ],
    "inputs": [
      "OPC UA",
      "S7 Protocol",
      "MQTT",
      "Industrial Edge Data"
    ],
    "outputs": [
      "OpenUSD Attributes",
      "AASX Packages",
      "Cloud Analytics Dashboards"
    ],
    "bridges": [
      "Siemens Teamcenter",
      "NVIDIA Omniverse",
      "AWS / Azure Cloud"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Führende Enterprise-PaaS für große Fertigungsstandorte mit Siemens-Hardware."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-souveräne Industrieplattform mit tiefer SPS-Hardware-Integration."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert eine langfristige Bindung an das Siemens-Ökosystem."
      }
    ],
    "compliance": {
      "omniverse": "Live Cloud Bridge",
      "sovereignty": "100% EU Souverän (GAIA-X)",
      "openStandard": "OPC UA / AAS"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "Enterprise Edge / Cloud",
      "maturity": "Produktiv",
      "area": "Werkweites IIoT & Cloud-Flottenmanagement"
    },
    "staffing": "1x Enterprise IIoT Architect (100% FTE)"
  },
  "IND-META-2026-SIEMENS-TECNOMATIX": {
    "refCode": "IND-META-2026-SIEMENS-TECNOMATIX",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "Siemens Tecnomatix (Process Simulate / Plant Sim)",
    "subtitle": "Virtuelle Inbetriebnahme & Kinematik-Validierung",
    "vendor": "Siemens DISW",
    "hq": "Plano, USA / Nürnberg, Deutschland (EU)",
    "businessModel": "Enterprise License / Named Seat",
    "url": "https://plm.automation.siemens.com/tecnomatix",
    "tier": "Tier 3",
    "costLabel": "> €100k",
    "status": "STANDARDIZIERT",
    "overview": "Branchenführende Plattform für Roboter-Kinematik, virtuelle Inbetriebnahme (VRC) und Materialfluss-Simulation in der Automobil- und Fertigungsindustrie.",
    "features": [
      {
        "title": "Virtuelle Inbetriebnahme (VRC)",
        "desc": "Direkte Kopplung mit echten Siemens S7-1500 SPS-Steuerungen via OPC UA."
      },
      {
        "title": "Plant Simulation",
        "desc": "Ablaufsimulation zur Engpassanalyse und Durchsatzoptimierung ganzer Fabriken."
      },
      {
        "title": "Ergonomieanalyse (Jack)",
        "desc": "Bewertung menschlicher Ergonomie nach EAWS-Standards."
      }
    ],
    "inputs": [
      "JT",
      "STEP",
      "CAD",
      "OPC UA Nodes",
      "Robcad format"
    ],
    "outputs": [
      "JT ISO",
      "OpenUSD (via Siemens Connector)",
      "PLC XML",
      "Telemetry"
    ],
    "bridges": [
      "Siemens Teamcenter PLM",
      "Siemens NX",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unangefochtener Industrie-Goldstandard für die Inbetriebnahme komplexer Karosseriebaulinien."
      },
      {
        "title": "Vorteile",
        "text": "Hardware-in-the-Loop-Test verhindert echte Roboter-Kollisionen bei der Linieninbetriebnahme."
      },
      {
        "title": "Engpässe",
        "text": "Hoher Lizenzpreis und erhebliche Einarbeitungszeit."
      }
    ],
    "compliance": {
      "omniverse": "Live Bridge",
      "sovereignty": "100% EU DSGVO (Deutschland)",
      "openStandard": "OPC UA / JT ISO 14306"
    },
    "deployment": {
      "effort": "Sehr Hoch (> 1 Monat)",
      "mode": "Enterprise Workstations",
      "maturity": "Produktiv",
      "area": "Virtuelle Inbetriebnahme & Roboterzellen"
    },
    "staffing": "1x Senior Virtual Commissioning Engineer (100% FTE)"
  },
  "IND-META-2026-SIMSCALE-CFD": {
    "refCode": "IND-META-2026-SIMSCALE-CFD",
    "categoryCode": "4.1",
    "categoryName": "CAE & Multiphysik-Simulation",
    "name": "SimScale Cloud CFD & FEA",
    "subtitle": "Cloud-basierte Strömungs- & Thermalsimulation",
    "vendor": "SimScale GmbH",
    "hq": "München, Deutschland (EU)",
    "businessModel": "SaaS Cloud Subscription",
    "url": "https://simscale.com",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EMPFOHLEN",
    "overview": "100% cloudnative FEA-, CFD- und Thermalsimulationsplattform, die parallelisierte Solver direkt im Webbrowser ausführt.",
    "features": [
      {
        "title": "Browser CFD & FEA",
        "desc": "Sofortiger Zugriff auf parallele Cloud-Solver ohne lokale Hardware-Investition."
      },
      {
        "title": "Reinraum- & HVAC-Sim",
        "desc": "Spezialisierte Strömungs-Solver für Hallenbelüftung und Thermik."
      },
      {
        "title": "CAD-Neutraler Ingestion",
        "desc": "Unterstützt alle gängigen neutralen und nativen CAD-Formate."
      }
    ],
    "inputs": [
      "STEP",
      "IGES",
      "Parasolid",
      "SolidWorks",
      "STL"
    ],
    "outputs": [
      "WebGL 3D VTK Datasets",
      "CSV Telemetry",
      "Downloadable Mesh"
    ],
    "bridges": [
      "Autodesk Fusion",
      "Onshape",
      "Web Dashboards"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Eliminiert teure lokale HPC-Hardware-Investitionen für Ingenieurteams."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-Unternehmen mit deutscher DSGVO-Datenhaltung."
      },
      {
        "title": "Engpässe",
        "text": "Setzt gute Internet-Uploadbandbreite für CAD-Modelle voraus."
      }
    ],
    "compliance": {
      "omniverse": "Web Cloud Native",
      "sovereignty": "100% EU DSGVO (München)",
      "openStandard": "STEP AP242 / VTK"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Web Browser Access",
      "maturity": "Produktiv",
      "area": "Cloud CFD & Belüftungssimulation"
    },
    "staffing": "1x Strömungsanalyst (25% FTE)"
  },
  "IND-META-2026-SOLIDWORKS": {
    "refCode": "IND-META-2026-SOLIDWORKS",
    "categoryCode": "2.1",
    "categoryName": "Mechanisches CAD (MCAD)",
    "name": "Dassault SolidWorks",
    "subtitle": "Parametrisches 3D-CAD für den Mittelstand",
    "vendor": "Dassault Systèmes",
    "hq": "Vélizy-Villacoublay, Frankreich (EU)",
    "businessModel": "Perpetual + Maintenance / 3DEXPERIENCE Cloud Subscription",
    "url": "https://solidworks.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Globale 3D-CAD-Standardsoftware für die parametrische Konstruktion im Maschinen- und Werkzeugbau. Weit verbreitet in der Zulieferindustrie und auf Shopfloors zur Anbindung an digitale Zwillinge.",
    "features": [
      {
        "title": "Parametrischer Feature-Baum",
        "desc": "Historienbasierte Modellierung für Blechbiegeteile und Maschinenkomponenten."
      },
      {
        "title": "Visualize Raytracing",
        "desc": "PBR-Rendering-Engine für technische Dokumentationen und Montageanleitungen."
      },
      {
        "title": "Omniverse Connector",
        "desc": "Export- und Live-Sync-Brücke zu OpenUSD-Bühnen."
      }
    ],
    "inputs": [
      "SLDPRT",
      "SLDASM",
      "STEP",
      "IGES",
      "Parasolid"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "STEP AP242",
      "glTF 2.0",
      "IGES"
    ],
    "bridges": [
      "3DEXPERIENCE Cloud",
      "NVIDIA Omniverse",
      "DELMIA"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Hervorragend für Komponenten- und Subsystemdesign; stößt bei Werkslayouts (>50k Teile) an Leistungsgrenzen."
      },
      {
        "title": "Vorteile",
        "text": "Riesiger Fachkräfte-Pool; nativer CAD-Standard bei Tausenden mittelständischen Zulieferern."
      },
      {
        "title": "Engpässe",
        "text": "Tessellierung vor OpenUSD-Inlining erforderlich; große Baugruppen benötigen Bereinigung."
      }
    ],
    "compliance": {
      "omniverse": "Connector Plugin",
      "sovereignty": "EU Cloud (3DEXPERIENCE EU)",
      "openStandard": "STEP AP242 / glTF 2.0"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop / Cloud Bridge",
      "maturity": "Produktiv",
      "area": "Maschinen- & Werkzeugbau"
    },
    "staffing": "1x Konstruktionsingenieur (100% FTE)"
  },
  "IND-META-2026-STEP-AP242": {
    "refCode": "IND-META-2026-STEP-AP242",
    "categoryCode": "2.4",
    "categoryName": "Datenformate & OpenUSD-Standards",
    "name": "STEP AP242 (ISO 10303 - Parametrisches CAD)",
    "subtitle": "ISO-Standard für CAD-Geometrie & PMI",
    "vendor": "ISO (International Organization for Standardization)",
    "hq": "Genf, Schweiz (EU/EFTA)",
    "businessModel": "Open International Standard (ISO 10303-242)",
    "url": "https://step-smsc.org",
    "tier": "Tier 1",
    "costLabel": "Open Standard / €0",
    "status": "PFLICHTSTANDARD CAD",
    "overview": "Der offizielle ISO-Standard für den parametrischen CAD-Geometrieaustausch und die Einbettung von Product Manufacturing Information (PMI) sowie Fertigungstoleranzen.",
    "features": [
      {
        "title": "Exakte NURBS-Geometrie",
        "desc": "Bewahrt exakte mathematische Flächen ohne Tessellierungsverlust."
      },
      {
        "title": "PMI / GD&T Integration",
        "desc": "Bettet Fertigungstoleranzen direkt in die 3D-Geometriedatei ein."
      },
      {
        "title": "Langzeitarchivierung (LOTAR)",
        "desc": "Zertifiziert für rechtssichere 30+ Jahre Archivierung in der Luftfahrt."
      }
    ],
    "inputs": [
      "Native MCAD Dateiformate (NX, CATIA, Creo, SolidWorks)"
    ],
    "outputs": [
      ".stp",
      ".step (ISO 10303-242)"
    ],
    "bridges": [
      "Alle führenden CAD-Systeme",
      "Siemens NX",
      "CATIA",
      "OpenUSD Converters"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Universelles Austauschformat für den verlustfreien CAD-Datenaustausch in der Lieferkette."
      },
      {
        "title": "Vorteile",
        "text": "Rechtssicherer Langzeitstandard zertifiziert durch internationale ISO-Gremien."
      },
      {
        "title": "Engpässe",
        "text": "Dateien sind groß; erfordert Wandlung in Meshes vor dem Rendering in Echtzeit-Engines."
      }
    ],
    "compliance": {
      "omniverse": "Native Conversion to USD",
      "sovereignty": "100% ISO International Standard",
      "openStandard": "ISO 10303-242"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Neutral Interchange File",
      "maturity": "Produktiv",
      "area": "CAD-Datenaustausch & Langzeitarchivierung"
    },
    "staffing": "1x CAD / Archivierungsingenieur (10% FTE)"
  },
  "IND-META-2026-TRIMBLE-SKETCHUP": {
    "refCode": "IND-META-2026-TRIMBLE-SKETCHUP",
    "categoryCode": "2.2",
    "categoryName": "BIM, Bauwesen & Infrastruktur (AEC)",
    "name": "Trimble SketchUp",
    "subtitle": "Schnelle 3D-Konzeptplanung & Fabrik-Layouting",
    "vendor": "Trimble Inc.",
    "hq": "Westminster, CO, USA",
    "businessModel": "Annual Subscription (Pro/Studio)",
    "url": "https://sketchup.com",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EVALUIERT",
    "overview": "Intuitives 3D-Modellierungswerkzeug für die schnelle konzeptionelle Fabrikplanung, Raumvolumen-Studien und frühe Entwurfsphasen.",
    "features": [
      {
        "title": "Push/Pull Modellierung",
        "desc": "Schnelle erzeugung flächenbasierter 3D-Geometrie."
      },
      {
        "title": "3D Warehouse",
        "desc": "Riesige Bibliothek vorgefertigter Maschinen- und Ausrüstungsmodelle."
      },
      {
        "title": "USD & glTF Exporter",
        "desc": "Integrierte Exportmodule für Echtzeit-Bühnen."
      }
    ],
    "inputs": [
      "SKP",
      "DWG",
      "DXF",
      "PNG/JPG"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "glTF 2.0",
      "OBJ",
      "FBX",
      "IFC"
    ],
    "bridges": [
      "Trimble Connect",
      "NVIDIA Omniverse",
      "Unity Industry"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Ideal für schnelles Prototyping; ungeeignet für millimetergenauen Maschinenbau."
      },
      {
        "title": "Vorteile",
        "text": "Extrem kurze Einarbeitungszeit (1-2 Tage); schnelles Erfassen von Räumen."
      },
      {
        "title": "Engpässe",
        "text": "Erzeugt bei unachtsamer Nutzung nicht-wasserdichte Mesh-Geometrien."
      }
    ],
    "compliance": {
      "omniverse": "Connector Plugin",
      "sovereignty": "SOC2 / US Cloud",
      "openStandard": "glTF 2.0 / IFC"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Desktop App",
      "maturity": "Produktiv",
      "area": "Konzeptionelles Fabrik-Blocking"
    },
    "staffing": "1x Layout Planer (25% FTE)"
  },
  "IND-META-2026-TWINMOTION": {
    "refCode": "IND-META-2026-TWINMOTION",
    "categoryCode": "5.1",
    "categoryName": "Echtzeit-3D & Spatial Engines",
    "name": "Twinmotion (Real-Time Architecture)",
    "subtitle": "Schnelle 3D-Visualisierung für AEC & Fabriken",
    "vendor": "Epic Games Inc.",
    "hq": "Cary, NC, USA",
    "businessModel": "Enthalten in Unreal Engine / Enterprise Seat",
    "url": "https://twinmotion.com",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EVALUIERT",
    "overview": "Schnelles 3D-Echtzeit-Visualisierungswerkzeug powered by Unreal Engine. Speziell für AEC-Planer entwickelt, um Fabrikgebäude in Minuten zu begehen.",
    "features": [
      {
        "title": "Direct Revit & Archicad Sync",
        "desc": "Ein-Klick-Live-Verbindung mit führender BIM-Software."
      },
      {
        "title": "PBR Drag-and-Drop Bibliothek",
        "desc": "Riesige Bibliothek realistischer Materialien, Pflanzen und Personen."
      },
      {
        "title": "Auto-VR Mode",
        "desc": "Sofortige One-Click VR-Präsentations-Einrichtung."
      }
    ],
    "inputs": [
      "RVT",
      "SKP",
      "FBX",
      "OBJ",
      "glTF",
      "Datasmith"
    ],
    "outputs": [
      "Executable Presentations",
      "Panoramas",
      "MP4 Video",
      "USD Export"
    ],
    "bridges": [
      "Unreal Engine 5",
      "Autodesk Revit",
      "Trimble SketchUp"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Hervorragend für Architekten ohne Programmierkenntnisse zur schnellen Präsentation."
      },
      {
        "title": "Vorteile",
        "text": "Zero Einarbeitungszeit; erzeugt eindrucksvolle Begehungen."
      },
      {
        "title": "Engpässe",
        "text": "Keine Skriptfähigkeit und keine Anbindung von OT/SPS-Telemetriedaten."
      }
    ],
    "compliance": {
      "omniverse": "Datasmith Bridge",
      "sovereignty": "SOC2 Compliant",
      "openStandard": "glTF 2.0 / OpenUSD"
    },
    "deployment": {
      "effort": "Sehr Gering (< 1 Tag)",
      "mode": "Desktop App",
      "maturity": "Produktiv",
      "area": "Schnelle Fabrik-Visualisierung"
    },
    "staffing": "1x Bauzeichner / Visualisierer (25% FTE)"
  },
  "IND-META-2026-UNITY-INDUSTRY": {
    "refCode": "IND-META-2026-UNITY-INDUSTRY",
    "categoryCode": "5.1",
    "categoryName": "Echtzeit-3D & Spatial Engines",
    "name": "Unity Industry Suite",
    "subtitle": "Cross-Platform 3D-Laufzeitumgebung & AR/VR HMI",
    "vendor": "Unity Technologies",
    "hq": "San Francisco, CA, USA / EU Support",
    "businessModel": "Enterprise Subscription (Unity Industry Tier)",
    "url": "https://unity.com/industry",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EVALUIERT",
    "overview": "Multi-Plattform Echtzeit-3D-Plattform für plattformübergreifende Industrie-Apps, AR/VR-Headsets, Mobilgeräte und WebGL.",
    "features": [
      {
        "title": "Pixyz CAD Ingestion",
        "desc": "Automatisierte CAD-Übersetzung, Tessellierung und LOD-Erstellung."
      },
      {
        "title": "Cross-Platform Runtime",
        "desc": "Einzige Codebasis für Quest 3, Apple Vision Pro, iOS und PC."
      },
      {
        "title": "Unity Industry Templates",
        "desc": "Vorgefertigte Vorlagen für AR-Montagetraining und interaktive HMI."
      }
    ],
    "inputs": [
      "Pixyz Supported (STEP, JT, RVT, SolidWorks)",
      "OpenUSD",
      "glTF",
      "FBX"
    ],
    "outputs": [
      "WebGL",
      "OpenXR Executables",
      "Android/iOS App Packages",
      "USD Stage"
    ],
    "bridges": [
      "PTC Vuforia",
      "Microsoft Azure Digital Twins",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Erstklassige Wahl für interaktive Anwendungen auf Mobilgeräten und autonomen XR-Brillen."
      },
      {
        "title": "Vorteile",
        "text": "Hochflexible C#-Skripting-API und geringer Speicherverbrauch."
      },
      {
        "title": "Engpässe",
        "text": "Komplexere Lizenzierungsmodelle bei Enterprise-Kunden."
      }
    ],
    "compliance": {
      "omniverse": "OpenUSD Import Package",
      "sovereignty": "SOC2 Compliant",
      "openStandard": "OpenXR / glTF / OpenUSD"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop / Mobile Deployment",
      "maturity": "Produktiv",
      "area": "Cross-Platform AR/VR & HMI"
    },
    "staffing": "1x Unity C# Developer (100% FTE)"
  },
  "IND-META-2026-UNREAL-ENGINE-5": {
    "refCode": "IND-META-2026-UNREAL-ENGINE-5",
    "categoryCode": "5.1",
    "categoryName": "Echtzeit-3D & Spatial Engines",
    "name": "Unreal Engine 5 Enterprise",
    "subtitle": "Fotorealistisches Rendering & High-End Visualisierung",
    "vendor": "Epic Games Inc.",
    "hq": "Cary, NC, USA / EU Support",
    "businessModel": "Free Core / Enterprise Seats ($1,500/seat/yr)",
    "url": "https://unrealengine.com/enterprise",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EMPFOHLEN",
    "overview": "High-End 3D-Echtzeit-Engine für fotorealistische Visualisierungen, virtuelle Begehungen und immersives VR-Training von Werksanlagen.",
    "features": [
      {
        "title": "Nanite Virtualized Geometry",
        "desc": "Direktes Rendering von Millionen-Polygon-CAD-Dateien ohne manuelles Retopologisieren."
      },
      {
        "title": "Lumen Global Illumination",
        "desc": "Dynamische Global Illumination und Reflexionen in Echtzeit."
      },
      {
        "title": "Datasmith & OpenUSD Import",
        "desc": "Automatisierte Ingestion von CAD- und BIM-Daten."
      }
    ],
    "inputs": [
      "OpenUSD",
      "Datasmith (Revit/SolidWorks/Rhino)",
      "FBX",
      "glTF",
      "Point Clouds"
    ],
    "outputs": [
      "Executable Binaries (Win/Linux)",
      "Pixel Streaming (WebRTC)",
      "OpenUSD Stage"
    ],
    "bridges": [
      "NVIDIA Omniverse Connector",
      "AWS TwinMaker",
      "ROS 2 DDS"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Unübertroffene visuelle Qualität für Führungskräfte-Reviews und VR."
      },
      {
        "title": "Vorteile",
        "text": "Nanite bewältigt riesige Punktwolken und rohe CAD-Geometrien flüssig."
      },
      {
        "title": "Engpässe",
        "text": "Hohe Speichergröße der Anwendungs-Binaries; C++ erforderlich für Tiefenlogik."
      }
    ],
    "compliance": {
      "omniverse": "OpenUSD Importer / Stage",
      "sovereignty": "SOC2 / Enterprise SLA",
      "openStandard": "OpenUSD / glTF / WebRTC"
    },
    "deployment": {
      "effort": "Hoch (3-4 Wochen)",
      "mode": "Desktop / Pixel Streaming Server",
      "maturity": "Produktiv",
      "area": "Fotorealistische Fabrikbegehungen"
    },
    "staffing": "1x Technical Artist / Real-Time Developer (100% FTE)"
  },
  "IND-META-2026-VARJO-XR4": {
    "refCode": "IND-META-2026-VARJO-XR4",
    "categoryCode": "5.2",
    "categoryName": "Spatial XR & VR/AR Headsets",
    "name": "Varjo XR-4 Series (Human-Eye Resolution MR)",
    "subtitle": "Industrielles Mixed-Reality Headset mit 51 PPD",
    "vendor": "Varjo Technologies Oy",
    "hq": "Helsinki, Finnland (EU)",
    "businessModel": "Hardware Purchase + Varjo Subscription / Support",
    "url": "https://varjo.com/products/xr-4",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "STANDARDIZIERT HIGH-END",
    "overview": "Kabelgebundenes Mixed-Reality-Headset für Industrieanwendungen mit Auflösung auf menschlichem Augenniveau (51 PPD) und fotorealistischem Video-Pass-Through.",
    "features": [
      {
        "title": "Human-Eye Resolution (51 PPD)",
        "desc": "Duale Micro-OLED-Displays eliminieren Fliegengittereffekte vollständig."
      },
      {
        "title": "Video Pass-Through",
        "desc": "Duale 20MP-Kameras für nahtlose Überlagerungen von physischer und digitaler Welt."
      },
      {
        "title": "Integrierter LiDAR",
        "desc": "Echtzeit-Tiefenkartierung physikalischer Räume."
      }
    ],
    "inputs": [
      "OpenXR Stream",
      "NVIDIA RTX Workstation GPU Output"
    ],
    "outputs": [
      "Varjo Eye Tracking Data (120Hz)",
      "LiDAR Depth Map"
    ],
    "bridges": [
      "Autodesk VRED",
      "Unreal Engine 5",
      "Unity Industry",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Absoluter Goldstandard für Automobil-Designreviews und Flugsimulatoren."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-souveräne Hardware hergestellt in Helsinki, Finnland."
      },
      {
        "title": "Engpässe",
        "text": "Erfordert kabelgebundenen Hochleistungs-Desktop-PC mit RTX 4090."
      }
    ],
    "compliance": {
      "omniverse": "Native OpenXR Extension",
      "sovereignty": "100% EU Souverän (Finnland)",
      "openStandard": "OpenXR"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Tethered RTX Workstation Setup",
      "maturity": "Produktiv",
      "area": "Automotive Design & High-End Simulation"
    },
    "staffing": "1x XR Simulation Engineer (50% FTE)"
  },
  "IND-META-2026-VISUAL-COMPONENTS": {
    "refCode": "IND-META-2026-VISUAL-COMPONENTS",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "Visual Components 4.9",
    "subtitle": "3D-Fabriksimulation & Materialfluss-Planung",
    "vendor": "Visual Components Oy",
    "hq": "Espoo, Finnland (EU)",
    "businessModel": "Annual License (Essentials / Professional / Premium)",
    "url": "https://visualcomponents.com",
    "tier": "Tier 2",
    "costLabel": "≤ €100k",
    "status": "EMPFOHLEN",
    "overview": "3D-Fabriksimulationssoftware für Maschinenbauer und Systemintegratoren zur schnellen Layouterstellung, Robotersimulation und Durchsatzüberprüfung.",
    "features": [
      {
        "title": "Modulbarer eCatalog",
        "desc": "Über 2.500+ vorgefertigte Roboter und Förderbänder per Drag-and-Drop bereit."
      },
      {
        "title": "OPC UA Anbindung",
        "desc": "Echtzeit-Hardware-in-the-Loop-Verbindung zu virtuellen SPSen."
      },
      {
        "title": "VRC Anbindung",
        "desc": "Verbindet Robotersteuerungen (KUKA, ABB, Fanuc) zur Offline-Programmierung."
      }
    ],
    "inputs": [
      "STEP",
      "IGES",
      "SolidWorks",
      "IFC",
      "Point Cloud"
    ],
    "outputs": [
      "OpenUSD (.usd)",
      "3D PDF",
      "MP4 Video",
      "OPC UA Messages"
    ],
    "bridges": [
      "NVIDIA Omniverse Connector",
      "KUKA Sim",
      "Siemens S7 SPS"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Beliebte Wahl im Mittelstand wegen extrem schneller Layouterstellung."
      },
      {
        "title": "Vorteile",
        "text": "100% EU-souveräne Software mit sehr schneller Einarbeitungszeit."
      },
      {
        "title": "Engpässe",
        "text": "Physik-Engine auf Schnelligkeit statt FEA-Höchstpräzision optimiert."
      }
    ],
    "compliance": {
      "omniverse": "USD Exporter",
      "sovereignty": "100% EU Souverän (Finnland)",
      "openStandard": "OPC UA / OpenUSD"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Desktop Windows App",
      "maturity": "Produktiv",
      "area": "Fabrik-Layout & Roboterzellen"
    },
    "staffing": "1x Simulation Engineer (50% FTE)"
  },
  "IND-META-2026-VISUPAL": {
    "refCode": "IND-META-2026-VISUPAL",
    "categoryCode": "4.4",
    "categoryName": "Robotik & Fabriksimulation",
    "name": "VisuPal Palletizing Simulation",
    "subtitle": "Automatisierte 3D-Palettier-Simulation",
    "vendor": "VisuPal Systems",
    "hq": "Deutschland (EU)",
    "businessModel": "License Fee per Cell",
    "url": "https://visupal.de",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EVALUIERT",
    "overview": "Automatisierte 3D-Palettiersimulations-Software für Verpackungszellen und End-of-Line-Roboter.",
    "features": [
      {
        "title": "Musterberechnung",
        "desc": "Berechnet stabile Packmuster für Kisten und Packstücke automatisch."
      },
      {
        "title": "Erreichbarkeitsprüfung",
        "desc": "Überprüft Roboterarm-Arbeitsräume und Drehmomente."
      },
      {
        "title": "SPS-Code-Export",
        "desc": "Erzeugt komplette Palettier-Logikbausteine für Siemens-SPSen."
      }
    ],
    "inputs": [
      "Kistenmaße",
      "Palettengrundmaß",
      "STEP Roboter CAD"
    ],
    "outputs": [
      "OpenUSD Scene",
      "PLC Trajectory Blocks",
      "3D PDF"
    ],
    "bridges": [
      "Siemens TIA Portal",
      "Beckhoff TwinCAT",
      "NVIDIA Omniverse"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Verkürzt die Einrichtung von Verpackungszellen von Tagen auf Minuten."
      },
      {
        "title": "Vorteile",
        "text": "Einfache Benutzeroberfläche speziell für Verpackungsplaner."
      },
      {
        "title": "Engpässe",
        "text": "Spezifischer Fokus auf Palettieraufgaben."
      }
    ],
    "compliance": {
      "omniverse": "USD Export",
      "sovereignty": "100% EU Souverän",
      "openStandard": "OPC UA / STEP"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Desktop Windows App",
      "maturity": "Produktiv",
      "area": "Palettier- & Verpackungszellen"
    },
    "staffing": "1x Verpackungstechniker (25% FTE)"
  },
  "IND-META-2026-WAVEYE-RADAR": {
    "refCode": "IND-META-2026-WAVEYE-RADAR",
    "categoryCode": "1.6",
    "categoryName": "Spatial Perzeption & KI-Erkennung",
    "name": "Waveye 4D Imaging Radar (Argus mmWave)",
    "subtitle": "Hochauflösende 4D-Radar Perzeption für AMRs",
    "vendor": "Waveye Inc.",
    "hq": "Palo Alto, USA / Stuttgart, Deutschland (EU)",
    "businessModel": "Hardware Radar Sensor + Embedded AI SDK",
    "url": "https://waveye.com",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "EMPFOHLENER 4D SENSOR",
    "overview": "Ultra-hochauflösender 4D-Imaging-Radarsensor (Argus) für die Roboterwahrnehmung. Generiert dichte 4D-Punktwolken inklusive Doppler-Geschwindigkeitsvektoren für autonome Systeme.",
    "features": [
      {
        "title": "Argus 4D Resolution",
        "desc": "Hohe Winkelauflösung mit breitem Sichtfeld (FOV)."
      },
      {
        "title": "All-Wetter Robustheit",
        "desc": "Unbeeinflusst von Staub, Dampf, Ölnebel oder Dunkelheit im Werk."
      },
      {
        "title": "Embedded Radar AI",
        "desc": "Berechnet Geschwindigkeitsvektoren direkt auf dem Sensor-Chip."
      }
    ],
    "inputs": [
      "Raw mmWave RF Signals",
      "Doppler Telemetrie"
    ],
    "outputs": [
      "4D Point Cloud (X, Y, Z, Velocity)",
      "ROS 2 PointCloud2 Topics"
    ],
    "bridges": [
      "ROS 2 DDS",
      "NVIDIA Isaac Sim / Lab",
      "DeepHub Flowcate"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Erfasst AGVs und Arbeiter zuverlässig in rauen Gießereiumgebungen, wo optische Scanner versagen."
      },
      {
        "title": "Vorteile",
        "text": "Entwicklung in Stuttgart; 100% DSGVO-konform (keine identifizierbaren Personenbilder)."
      },
      {
        "title": "Engpässe",
        "text": "Geringere Punktwolkendichte als optisches LiDAR; erfordert Radar-SDK."
      }
    ],
    "compliance": {
      "omniverse": "ROS 2 Bridge",
      "sovereignty": "100% EU DSGVO-Konform",
      "openStandard": "ROS 2 DDS"
    },
    "deployment": {
      "effort": "Mittel (2-3 Wochen)",
      "mode": "Edge Sensor Hardware",
      "maturity": "Produktiv",
      "area": "Autonome Transportroboter (AMR)"
    },
    "staffing": "1x Robotics Hardware Engineer (50% FTE)"
  },
  "IND-META-2026-XGRIDS-PORTALCAM": {
    "refCode": "IND-META-2026-XGRIDS-PORTALCAM",
    "categoryCode": "1.4",
    "categoryName": "Handheld 3DGS & Photogrammetrie",
    "name": "XGRIDS Portalcam & Studio (LiDAR + 3DGS)",
    "subtitle": "Handgeführter LiDAR + 3D Gaussian Splatting Scanner",
    "vendor": "XGRIDS Technology Inc.",
    "hq": "Shenzhen, China",
    "businessModel": "Hardware Kit + Desktop Studio Suite",
    "url": "https://xgrids.com",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "TOP FOTOREALISMUS",
    "overview": "Handgeführter 3D-Scanner, der LiDAR, Kameras und 3D Gaussian Splatting (3DGS) verbindet, um fotorealistische 3D-Abbilder spiegelnder Objekte zu erstellen.",
    "features": [
      {
        "title": "LiDAR + 3DGS Fusion",
        "desc": "Verbindet metrische LiDAR-Messung mit fotorealistischen Gaussian Splats."
      },
      {
        "title": "Echtzeit-Display Preview",
        "desc": "Direktes Punktwolken-Feedback auf dem Handheld-Bildschirm."
      },
      {
        "title": "GPU Reconstruction Studio",
        "desc": "Automatisierte Rekonstruktion auf lokalen RTX-Grafikkarten."
      }
    ],
    "inputs": [
      "LiDAR Stream",
      "4K Video",
      "GCP Passpunkte"
    ],
    "outputs": [
      "PLY (3DGS / Mesh)",
      "OpenUSD (.usd)",
      "E57",
      "LAS"
    ],
    "bridges": [
      "NVIDIA Omniverse 3DGS Extension",
      "Unreal Engine 5",
      "Blender 3D"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Erfasst komplexe, glänzende Maschinen deutlich besser als klassische Photogrammetrie."
      },
      {
        "title": "Vorteile",
        "text": "Digitalisiert ganze Maschinenräume im Vorbeigehen in 5-10 Minuten."
      },
      {
        "title": "Engpässe",
        "text": "Riesige Splat-Dateien erfordern starke Grafikkarten (RTX 4090)."
      }
    ],
    "compliance": {
      "omniverse": "USD & PLY Export",
      "sovereignty": "Lokale Desktop-Verarbeitung",
      "openStandard": "OpenUSD / PLY"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Handheld Unit + RTX PC",
      "maturity": "Produktiv",
      "area": "Fotorealistische Maschinenerfassung"
    },
    "staffing": "1x 3D Capture Operator (25% FTE)"
  },
  "IND-META-2026-YOLO26-EDGE": {
    "refCode": "IND-META-2026-YOLO26-EDGE",
    "categoryCode": "1.6",
    "categoryName": "Spatial Perzeption & KI-Erkennung",
    "name": "YOLO26 Edge Vision & Object Tracking",
    "subtitle": "Echtzeit-KI-Objekterkennung für Shopfloor-Kameras",
    "vendor": "Ultralytics / Open Source",
    "hq": "Global Community",
    "businessModel": "AGPL v3 Open Source / Enterprise License",
    "url": "https://ultralytics.com",
    "tier": "Tier 1",
    "costLabel": "≤ €30k",
    "status": "STANDARDIZIERT",
    "overview": "Echtzeit-Computer-Vision-Modell optimiert für 3D-Bounding-Boxen, Personen-Tracking und Sicherheitszonenüberwachung auf Edge-Geräten.",
    "features": [
      {
        "title": "Sub-Millisekunden Inference",
        "desc": "Läuft mit 100+ FPS auf eingebetteten NVIDIA Jetson Orin Modulen."
      },
      {
        "title": "3D Bounding Boxes",
        "desc": "Schätzt die 3D-Position von Staplern und Arbeitern aus 2D-Kamerabildern."
      },
      {
        "title": "Objekt-Tracking",
        "desc": "Verfolgt Asset-IDs über mehrere Kameras hinweg."
      }
    ],
    "inputs": [
      "RTSP Video Feeds",
      "USB Camera Streams"
    ],
    "outputs": [
      "JSON Bounding Box Data",
      "MQTT Telemetry",
      "ROS 2 Topics"
    ],
    "bridges": [
      "DeepStream SDK",
      "NVIDIA Omniverse",
      "Collectu Data Engine"
    ],
    "evaluations": [
      {
        "title": "Skalierbarkeit",
        "text": "Auf Tausenden Kameras zur Sicherheitsüberwachung einsetzbar."
      },
      {
        "title": "Vorteile",
        "text": "Extrem schnelle Ausführung auf günstiger Edge-Hardware."
      },
      {
        "title": "Engpässe",
        "text": "Leistung hängt von Ausleuchtung und Blickwinkel ab."
      }
    ],
    "compliance": {
      "omniverse": "DeepStream Bridge",
      "sovereignty": "On-Premise Execution",
      "openStandard": "MQTT / ROS 2"
    },
    "deployment": {
      "effort": "Gering (1-2 Tage)",
      "mode": "Edge Container (Jetson/Docker)",
      "maturity": "Produktiv",
      "area": "Kamera-Sicherheitsüberwachung"
    },
    "staffing": "1x Computer Vision Engineer (25% FTE)"
  }
};
