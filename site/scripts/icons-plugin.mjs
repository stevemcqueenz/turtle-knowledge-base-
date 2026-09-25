/**
 * Vite plugin: `virtual:game-icons`, the in-game icon index for the app.
 *
 * Reads public/icons/manifest.json (written by tools/icons/extract_icons.py) and
 * exports {size, sheets: {key: {url, cols, rows}}, classes, tabs, trees,
 * talents, spells}: sprite-sheet cells by class slug, TalentTab id, tree name,
 * Talent id and spell name. The sheets themselves stay separate files the
 * browser fetches only when a component on screen needs them (one ~100 KB
 * sheet per class, plus a 50 KB sheet of the class and talent-tree icons).
 *
 *   inline: false  url = "icons/<file>", relative to index.html (base './')
 *   inline: true   url = a data: URI, for the single-file build (publicDir off),
 *                  so the self-contained HTML keeps its icons with no requests.
 *
 * Without a manifest the module exports empty maps and every slot falls back to
 * its initials.
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ID = 'virtual:game-icons';
const DIR = join(root, 'public/icons');

export function gameIcons({ inline = false } = {}) {
  return {
    name: 'game-icons',
    resolveId(id) {
      return id === ID ? `\0${ID}` : null;
    },
    load(id) {
      if (id !== `\0${ID}`) return null;
      const path = join(DIR, 'manifest.json');
      const empty = { size: 56, sheets: {}, classes: {}, tabs: {}, trees: {}, talents: {}, spells: {} };
      if (!existsSync(path)) return `export default ${JSON.stringify(empty)};`;
      this.addWatchFile(path);
      const m = JSON.parse(readFileSync(path, 'utf8'));
      const sheets = {};
      for (const [key, s] of Object.entries(m.sheets ?? {})) {
        const file = join(DIR, s.file);
        if (!existsSync(file)) continue;
        const url = inline ? `data:image/webp;base64,${readFileSync(file).toString('base64')}` : `icons/${s.file}`;
        sheets[key] = { url, cols: s.cols, rows: s.rows };
      }
      const out = {
        size: m.size ?? 56,
        sheets,
        classes: m.classes ?? {},
        tabs: m.tabs ?? {},
        trees: m.trees ?? {},
        talents: m.talents ?? {},
        spells: m.spells ?? {},
      };
      return `export default ${JSON.stringify(out)};`;
    },
  };
}
