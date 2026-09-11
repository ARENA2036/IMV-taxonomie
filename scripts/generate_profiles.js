/**
 * Industrial Metaverse Taxonomy Indexer & Data Pipeline Builder
 * ARENA2036 Reallabor 2.0 Project
 * 
 * Scans canonical profile JSON files from profiles/ and usecase JSON files from usecases/.
 * Loads the canonical taxonomy from taxonomy.config.json and validates profiles against
 * .github/schema/tool-taxonomy.schema.json (the single sources of truth for both), then compiles:
 * 1. data/index.json  (JSON manifest for HTTP fetch requests)
 * 2. data/index_data.js (Window wrapper for zero-CORS file:// protocol execution)
 * 3. usecases/index.html & usecases/[slug]/index.html (Static Use Case pages)
 * 
 * @module generate_profiles
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildUseCasePages } from './generate_usecase_pages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const profilesDir = path.join(rootDir, 'profiles');
const usecasesDir = path.join(rootDir, 'usecases');
const dataDir = path.join(rootDir, 'data');

/**
 * Canonical 5-layer / 21-category taxonomy, loaded from the single source of
 * truth at taxonomy.config.json. Do not hardcode layer/category data here or
 * anywhere else — edit taxonomy.config.json and rebuild.
 */
const taxonomyPath = path.join(rootDir, 'taxonomy.config.json');
const taxonomy = JSON.parse(fs.readFileSync(taxonomyPath, 'utf-8'));
const LAYERS = taxonomy.layers;
const CATEGORIES = taxonomy.categories;

CATEGORIES.sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }));

/**
 * Required fields and enum constraints, loaded from the canonical JSON Schema
 * so validation can never drift from the schema contributors are told to follow.
 */
const schemaPath = path.join(rootDir, '.github', 'schema', 'tool-taxonomy.schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

if (!fs.existsSync(profilesDir)) fs.mkdirSync(profilesDir, { recursive: true });
if (!fs.existsSync(usecasesDir)) fs.mkdirSync(usecasesDir, { recursive: true });

console.log('Scanne und validiere kanonische JSON-Profil-Dateien in profiles/ und usecases/...');

const REQUIRED_PROFILE_FIELDS = schema.required;
const VALID_TIERS = new Set(schema.properties.tier.enum);
const VALID_STATUSES = new Set(schema.properties.status.enum);

const files = fs.readdirSync(profilesDir).filter(f => f.endsWith('.json'));

const items = [];
const profilesMap = {};
let validationErrors = 0;

files.forEach(file => {
  const filePath = path.join(profilesDir, file);
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const profile = JSON.parse(raw);

    // Schema Validation Check
    REQUIRED_PROFILE_FIELDS.forEach(field => {
      if (profile[field] === undefined) {
        console.error(`[SCHEMA ERROR] ${file}: Fehlendes Pflichtfeld '${field}'`);
        validationErrors++;
      }
    });

    if (profile.tier && !VALID_TIERS.has(profile.tier)) {
      console.error(`[SCHEMA ERROR] ${file}: Ungültiger Tier-Wert '${profile.tier}'`);
      validationErrors++;
    }

    if (profile.status && !VALID_STATUSES.has(profile.status)) {
      console.error(`[SCHEMA ERROR] ${file}: Ungültiger Status-Wert '${profile.status}'`);
      validationErrors++;
    }

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
    console.error(`[PARSE ERROR] Fehler beim Lesen von Profile ${file}:`, err.message);
    validationErrors++;
  }
});

if (validationErrors > 0) {
  console.error(`❌ Build abgebrochen: ${validationErrors} Schema-Fehler in profiles/ gefunden.`);
  process.exit(1);
}

items.sort((a, b) => a.categoryCode.localeCompare(b.categoryCode, undefined, { numeric: true }) || a.name.localeCompare(b.name));

const usecases = [];

if (fs.existsSync(usecasesDir)) {
  const ucEntries = fs.readdirSync(usecasesDir, { withFileTypes: true });

  ucEntries.forEach(entry => {
    let jsonPath = null;

    if (entry.isDirectory()) {
      const dirPath = path.join(usecasesDir, entry.name);
      const subFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.json'));
      if (subFiles.includes('usecase.json')) {
        jsonPath = path.join(dirPath, 'usecase.json');
      } else if (subFiles.length > 0) {
        jsonPath = path.join(dirPath, subFiles[0]);
      }
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      jsonPath = path.join(usecasesDir, entry.name);
    }

    if (jsonPath) {
      try {
        const raw = fs.readFileSync(jsonPath, 'utf-8');
        const uc = JSON.parse(raw);
        if (uc.id) {
          usecases.push(uc);
        }
      } catch (err) {
        console.error(`Fehler beim Lesen von UseCase ${jsonPath}:`, err.message);
      }
    }
  });
}

usecases.sort((a, b) => a.id.localeCompare(b.id));

const indexData = {
  layers: LAYERS,
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

console.log(`Erfolgreich ${items.length} JSON-Profile (100% schema-validiert) und ${usecases.length} Use Cases indiziert.`);

// Build individual static HTML pages for each Use Case and the hub index page
buildUseCasePages(usecases, profilesMap);
