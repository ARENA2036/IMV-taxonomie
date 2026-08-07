/**
 * Industrial Metaverse Taxonomy Indexer & Data Pipeline Builder
 * ARENA2036 Reallabor 2.0 Project
 * 
 * Scans canonical profile JSON files from profiles/ and usecase JSON files from usecases/.
 * Compiles and outputs:
 * 1. data/index.json  (JSON manifest for HTTP fetch requests)
 * 2. data/index_data.js (Window wrapper for zero-CORS file:// protocol execution)
 * 
 * @module generate_profiles
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const profilesDir = path.join(rootDir, 'profiles');
const usecasesDir = path.join(rootDir, 'usecases');
const dataDir = path.join(rootDir, 'data');

/**
 * Canonical 21 technology category taxonomy across the 5 ARENA2036 layers.
 * @type {Array<{code: string, name: string, desc: string, layer: string}>}
 */
const CATEGORIES = [
  { code: '1.1', name: 'Mechanisches CAD (MCAD)', desc: 'Parametrische 3D-CAD-Systeme für den Maschinen- und Fahrzeugbau.', layer: '2' },
  { code: '1.2', name: 'BIM, Bauwesen & Infrastruktur (AEC)', desc: 'Bauwerksdatenmodellierung für Fabrik- und Gebäudestrukturen.', layer: '2' },
  { code: '2.0', name: 'DCC & Generatives 3D-Design', desc: 'Digital Content Creation und prozedurale 3D-Modellierung.', layer: '2' },
  { code: '3.0', name: 'Echtzeit-3D & Spatial Engines', desc: 'Echtzeit-Rendering und 3D-Visualisierungs-Engines.', layer: '5' },
  { code: '4.1', name: 'CAE & Multiphysik-Simulation', desc: 'Numerische Berechnungen, FEM und Strömungsmechanik.', layer: '4' },
  { code: '4.2', name: 'Echtzeit Physik-Engines', desc: 'Physikalische Echtzeitsimulation für Kollision und Dynamik.', layer: '4' },
  { code: '4.3', name: 'Umwelt- & Strömungssimulation', desc: 'Klima-, Lüftungs- und Umweltbedingungssimulation.', layer: '4' },
  { code: '5.0', name: 'Robotik & Fabriksimulation', desc: 'Kinematik-, Roboter- und Materialfluss-Simulation.', layer: '4' },
  { code: '6.1', name: 'Mobile & Wearable SLAM-Scanner', desc: 'Tragbare Mobile-Mapping-Systeme mit Echtzeit-SLAM.', layer: '1' },
  { code: '6.2', name: 'Terrestrisches Laserscanning (TLS)', desc: 'Hochpräzise stationäre 3D-Laserscanner.', layer: '1' },
  { code: '6.3', name: 'Autonome Drohnen & AMR-Roboter', desc: 'Autonome Erfassung per Drohnen und Roboterplattformen.', layer: '1' },
  { code: '6.4', name: 'Handheld 3DGS & Photogrammetrie', desc: 'Handgeführte 3D-Gaussian-Splatting Scanner.', layer: '1' },
  { code: '6.5', name: '360°-Erfassung & GIS-Kartierung', desc: 'Panorama-Bilddokumentation und Geoinformationssysteme.', layer: '1' },
  { code: '6.1-AI', name: 'Spatial Perzeption & KI-Erkennung', desc: 'KI-gestützte Objekt- und Raumsegmentierung.', layer: '1' },
  { code: '7.0', name: 'OT & Sensorik-Feldbusse', desc: 'Operative Feldbus-Systeme und SPS-Kommunikation.', layer: '1' },
  { code: '8.1', name: 'Industrial IoT-Protokolle', desc: 'Nachrichtenprotokolle für industrielle IoT-Netzwerke.', layer: '1' },
  { code: '8.2', name: 'Verwaltungsschale & Zwillings-Standards', desc: 'Asset Administration Shell (AAS) und Interoperabilitäts-Standards.', layer: '3' },
  { code: '8.3', name: 'KI-Datenmotoren & Pipeline-Bridges', desc: 'KI-Trainings-Pipelines und Datenbrücken.', layer: '3' },
  { code: '9.0', name: 'Enterprise Cloud-Zwillinge', desc: 'Skalierbare Cloud-Plattformen für digitale Zwillinge.', layer: '3' },
  { code: '10.0', name: 'Datenformate & OpenUSD-Standards', desc: 'Offene Datenformate und Szenen-Spezifikationen.', layer: '2' },
  { code: '11.0', name: 'Spatial XR & VR/AR Headsets', desc: 'Immersive Headsets und Spatial-Computing-Hardware.', layer: '5' }
];

if (!fs.existsSync(profilesDir)) fs.mkdirSync(profilesDir, { recursive: true });
if (!fs.existsSync(usecasesDir)) fs.mkdirSync(usecasesDir, { recursive: true });

console.log('Scanne und indiziere kanonische JSON-Profil-Dateien im Ordner profiles/ und usecases/...');

const files = fs.readdirSync(profilesDir).filter(f => f.endsWith('.json'));

const items = [];
const profilesMap = {};

files.forEach(file => {
  const filePath = path.join(profilesDir, file);
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const profile = JSON.parse(raw);

    if (profile.refCode) {
      items.push({
        refCode: profile.refCode,
        categoryCode: profile.categoryCode,
        categoryName: profile.categoryName,
        name: profile.name,
        subtitle: profile.subtitle,
        vendor: profile.vendor,
        hq: profile.hq,
        tier: profile.tier,
        costLabel: profile.costLabel,
        status: profile.status,
        url: profile.url,
        overview: profile.overview,
        inputs: profile.inputs || [],
        outputs: profile.outputs || [],
        bridges: profile.bridges || [],
        compliance: profile.compliance || {}
      });
      profilesMap[profile.refCode] = profile;
    }
  } catch (err) {
    console.error(`Fehler beim Lesen von Profile ${file}:`, err.message);
  }
});

items.sort((a, b) => a.categoryCode.localeCompare(b.categoryCode) || a.name.localeCompare(b.name));

const usecases = [];
const ucFiles = fs.readdirSync(usecasesDir).filter(f => f.endsWith('.json'));

ucFiles.forEach(file => {
  try {
    const raw = fs.readFileSync(path.join(usecasesDir, file), 'utf-8');
    const uc = JSON.parse(raw);
    if (uc.id) {
      usecases.push(uc);
    }
  } catch (err) {
    console.error(`Fehler beim Lesen von UseCase ${file}:`, err.message);
  }
});

usecases.sort((a, b) => a.id.localeCompare(b.id));

const indexData = {
  categories: CATEGORIES,
  items: items,
  usecases: usecases
};

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

// Write HTTP fetch JSON manifest
const jsonPath = path.join(dataDir, 'index.json');
fs.writeFileSync(jsonPath, JSON.stringify(indexData, null, 2), 'utf-8');

// Write zero-CORS window wrapper for file:// execution protocol
const jsPath = path.join(dataDir, 'index_data.js');
const jsContent = `/** Auto-generated static dataset for zero-CORS local execution */\nwindow.INDEX_DATA = ${JSON.stringify(indexData, null, 2)};\nwindow.PROFILES_DATA = ${JSON.stringify(profilesMap, null, 2)};\n`;
fs.writeFileSync(jsPath, jsContent, 'utf-8');

console.log(`Erfolgreich ${items.length} JSON-Profile und ${usecases.length} Use Cases indiziert und 'data/index.json' sowie 'data/index_data.js' generiert.`);
