/**
 * Vite plugin: serves the generated site data (src/data/*.json) as virtual
 * modules so the app can code-split it.
 *
 *   virtual:twow-core       small, loaded with the first page: per-class summaries
 *                           (the guide's viability matrix, recommendations, the list
 *                           of spec pages and their section headings), the instance
 *                           index, glossary, meta. Enough for home, search, the
 *                           viability board and every header.
 *   virtual:twow-loaders    `classLoaders`, `guideLoaders`, `loadInstances()`, `loadMatrix()`:
 *                           dynamic imports of the heavy per-class / instance /
 *                           archive modules below, each its own chunk.
 *   virtual:twow-class/<slug>, virtual:twow-instances, virtual:twow-matrix,
 *   virtual:twow-guide/<slug> (one general guide, guide/<name>.md: professions,
 *                           PvP, client setup, server mechanics, ...)
 *
 * The JSON files stay the single, tested data contract (build-data.py,
 * test_data.py and check-data.mjs read them unchanged); this plugin only
 * projects and splits them at build time. The single-file build inlines the
 * dynamic imports, so it still has zero network requests.
 *
 * Falls back to src/data/fixtures/ when the generated files are missing, or when
 * VITE_USE_FIXTURES=1.
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PREFIX = 'virtual:twow-';
const REQUIRED = ['classes', 'matrix', 'glossary', 'meta'];

function chooseDir() {
  const real = join(root, 'src/data');
  const fixtures = join(root, 'src/data/fixtures');
  const force = process.env.VITE_USE_FIXTURES === '1';
  if (!force && REQUIRED.every((n) => existsSync(join(real, `${n}.json`)))) return { dir: real, isFixture: false };
  if (REQUIRED.every((n) => existsSync(join(fixtures, `${n}.json`)))) return { dir: fixtures, isFixture: true };
  throw new Error('No site data: run scripts/build-data.py (or keep src/data/fixtures/ in place).');
}

const H3 = /^### (.+)$/gm;
const stripTags = (s) =>
  String(s ?? '')
    .replace(/<(a|span) class="cite[^"]*"[^>]*>[^<]*<\/\1>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

function headingsOf(markdown, re) {
  return [...String(markdown ?? '').matchAll(re)].map((m) => stripTags(m[1]));
}

/** The per-class summary the first page needs. */
function summarize(c) {
  return {
    slug: c.slug,
    name: c.name,
    color: c.color,
    summary: c.summary,
    recommendation: c.recommendation ?? null,
    viability: c.viability ?? null,
    guidePath: c.guidePath ?? null,
    playbooks: (c.playbooks ?? []).map((p) => ({
      id: p.id,
      spec: p.spec,
      role: p.role,
      roleLabel: p.roleLabel,
      title: p.title,
      recommended: p.builds?.[0]?.split ?? null,
      // section headings, for search ("Arcane Mage › Stat priority and caps")
      headings: [
        ...Object.values(p.sections ?? {}),
        ...(p.extraSections ?? []),
      ]
        .filter(Boolean)
        .map((s) => ({ id: s.id, heading: stripTags(s.heading) })),
    })),
    leveling: c.leveling
      ? {
          recommendation: c.leveling.recommendation ?? null,
          headings: (c.leveling.sections ?? []).map((s) => ({ id: s.id, heading: stripTags(s.heading) })),
        }
      : null,
    sources: c.sources ? { title: c.sources.title } : null,
    guidePages: (c.guidePages ?? []).map((d) => ({ slug: d.slug, title: d.title })),
    hasGear: (Array.isArray(c.gear?.specs) && c.gear.specs.length > 0) || (c.gearMarkdown?.length ?? 0) > 0,
    readmeHeadings: (c.readme ?? []).map((s) => ({ id: s.id, heading: stripTags(s.heading) })),
  };
}

function summarizeInstances(inst) {
  if (!inst) return null;
  return {
    title: inst.title,
    intro: inst.intro,
    sourceFile: inst.sourceFile,
    groups: inst.groups,
    pages: inst.pages.map((p) => ({
      slug: p.slug,
      title: p.title,
      kind: p.kind,
      group: p.group,
      blurb: stripTags(String(p.intro ?? '').split(/\n\s*\n/)[0]).replace(/^Summary:\s*/i, '').slice(0, 260),
      sections: p.sections.map((s) => ({ id: s.id, heading: stripTags(s.heading) })),
      bosses: p.sections.flatMap((s) => headingsOf(s.markdown, H3)),
      mapThumb: p.map?.thumb ?? null,
    })),
  };
}

/** A general guide as the core module lists it: enough for the sidebar, home and search. */
function summarizeGuide(g) {
  return {
    slug: g.slug,
    route: g.route,
    title: g.title,
    headings: (g.sections ?? []).map((s) => ({ id: s.id, heading: stripTags(s.heading) })),
  };
}

export function twowData() {
  let cache = null;
  const data = () => {
    if (cache) return cache;
    const { dir, isFixture } = chooseDir();
    const read = (name) => {
      const path = join(dir, `${name}.json`);
      return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : null;
    };
    cache = {
      dir,
      isFixture,
      classes: read('classes'),
      matrix: read('matrix'),
      glossary: read('glossary'),
      meta: read('meta'),
      instances: read('instances'),
      guides: read('guides')?.guides ?? [],
    };
    return cache;
  };

  return {
    name: 'twow-data',
    resolveId(id) {
      if (id.startsWith(PREFIX)) return `\0${id}`;
      return null;
    },
    load(id) {
      if (!id.startsWith(`\0${PREFIX}`)) return null;
      const name = id.slice(PREFIX.length + 1);
      const d = data();
      for (const n of [...REQUIRED, 'instances', 'guides']) {
        const path = join(d.dir, `${n}.json`);
        if (existsSync(path)) this.addWatchFile(path);
      }
      const json = (value) => `export default ${JSON.stringify(value)};`;
      if (name === 'core') {
        return json({
          classes: d.classes.map(summarize),
          glossary: d.glossary,
          meta: d.meta,
          instances: summarizeInstances(d.instances),
          guides: d.guides.map(summarizeGuide),
          isFixture: d.isFixture,
        });
      }
      if (name === 'loaders') {
        const lines = d.classes.map((c) => `  ${JSON.stringify(c.slug)}: () => import(${JSON.stringify(`${PREFIX}class/${c.slug}`)}),`);
        const guideLines = d.guides.map((g) => `  ${JSON.stringify(g.slug)}: () => import(${JSON.stringify(`${PREFIX}guide/${g.slug}`)}),`);
        return [
          'export const classLoaders = {',
          ...lines,
          '};',
          'export const guideLoaders = {',
          ...guideLines,
          '};',
          `export const loadInstances = ${d.instances ? `() => import('${PREFIX}instances')` : 'null'};`,
          `export const loadMatrix = () => import('${PREFIX}matrix');`,
        ].join('\n');
      }
      if (name.startsWith('class/')) {
        const slug = name.slice('class/'.length);
        const entry = d.classes.find((c) => c.slug === slug);
        if (!entry) throw new Error(`twow-data: no class ${slug}`);
        return json(entry);
      }
      if (name === 'instances') return json(d.instances);
      if (name === 'matrix') return json(d.matrix);
      if (name.startsWith('guide/')) {
        const slug = name.slice('guide/'.length);
        const entry = d.guides.find((g) => g.slug === slug);
        if (!entry) throw new Error(`twow-data: no guide ${slug}`);
        return json(entry);
      }
      throw new Error(`twow-data: unknown module ${id}`);
    },
    handleHotUpdate(ctx) {
      if (ctx.file.startsWith(join(root, 'src/data'))) cache = null;
    },
  };
}

// Exposed for the smoke test and the data checks.
export { summarize, summarizeInstances, summarizeGuide };
