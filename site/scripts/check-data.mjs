#!/usr/bin/env node
/**
 * Validates the site data against the contract in site/PLAN.md §2.
 * Runs offline, reads only local JSON, and is part of `npm run check`.
 *
 * Uses src/data/*.json when the generator has produced them, and falls back to
 * src/data/fixtures/*.json (development sample) otherwise.
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const FILES = ['classes', 'matrix', 'glossary', 'meta'];
const ROLES = new Set(['tank', 'healer', 'melee-dps', 'ranged-dps', 'pvp']);
const STANDINGS = new Set(['favored', 'alternative', 'niche', 'not-viable']);
const SECTION_KEYS = [
  'overview',
  'talents',
  'stats',
  'rotationSingle',
  'rotationAoe',
  'cooldowns',
  'roleStrategy',
  'gear',
  'mistakes',
  'sources',
];

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

const onlyFixtures = process.argv.includes('--fixtures');

function pickDir() {
  const fixturesDir = join(root, 'src/data/fixtures');
  if (onlyFixtures) {
    return FILES.every((f) => existsSync(join(fixturesDir, `${f}.json`)))
      ? { dir: fixturesDir, kind: 'fixtures' }
      : null;
  }
  const real = join(root, 'src/data');
  if (FILES.every((f) => existsSync(join(real, `${f}.json`)))) return { dir: real, kind: 'generated' };
  if (FILES.every((f) => existsSync(join(fixturesDir, `${f}.json`)))) return { dir: fixturesDir, kind: 'fixtures' };
  return null;
}

const chosen = pickDir();
if (!chosen) {
  console.error('check-data: no data found in src/data/ or src/data/fixtures/. Run scripts/build-data.py.');
  process.exit(1);
}

const data = {};
for (const name of FILES) {
  const path = join(chosen.dir, `${name}.json`);
  try {
    data[name] = JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    fail(`${name}.json does not parse: ${err.message}`);
  }
}
if (errors.length) {
  errors.forEach((e) => console.error(`  ✗ ${e}`));
  process.exit(1);
}

const isString = (v) => typeof v === 'string';
const isNullableString = (v) => v === null || typeof v === 'string';
const isArray = Array.isArray;
const isObject = (v) => typeof v === 'object' && v !== null && !Array.isArray(v);

function checkSection(s, where) {
  if (!isObject(s)) return fail(`${where}: section is not an object`);
  if (!isString(s.id)) fail(`${where}: section.id must be a string`);
  if (!isString(s.heading)) fail(`${where}: section.heading must be a string`);
  if (s.level !== 2 && s.level !== 3) fail(`${where}: section.level must be 2 or 3 (got ${s.level})`);
  if (!isString(s.markdown)) fail(`${where}: section.markdown must be a string`);
}

function checkGuideDoc(d, where) {
  if (!isObject(d)) return fail(`${where}: guide page is not an object`);
  for (const k of ['slug', 'title', 'intro', 'sourceFile']) if (!isString(d[k])) fail(`${where}: ${k} must be a string`);
  if (!isArray(d.sections)) return fail(`${where}: sections must be an array`);
  d.sections.forEach((s, i) => checkSection(s, `${where}.sections[${i}]`));
}

/** Guide Markdown: no raw [[d:…]] left, and every Discord chip in the shape the sanitizer keeps. */
const DISCORD_CHIP =
  /<a class="cite cite-discord" href="https:\/\/github\.com\/[^"]+\/structured\/discord\/evidence-[a-z0-9_-]+\.jsonl#L\d+" title="[^"<>|]*">[^<|]*<\/a>|<span class="cite cite-discord cite-unknown" title="[^"<>|]*">[^<|]*<\/span>/g;
function checkGuideMarkdown(md, where) {
  if (!isString(md)) return;
  if (md.includes('[[d:')) fail(`${where}: unrendered [[d:…]] citation`);
  if (md.replace(DISCORD_CHIP, '').includes('cite-discord')) fail(`${where}: malformed Discord citation chip`);
}

function checkLevelingSection(s, where) {
  checkSection(s, where);
  if (s.items === undefined) {
    if (chosen.kind === 'generated') fail(`${where}: leveling sections must include an items array`);
    return;
  }
  if (!isArray(s.items)) return fail(`${where}: items must be an array`);
  s.items.forEach((item, i) => {
    if (!isString(item) || !item.trim()) fail(`${where}.items[${i}]: item must be a non-empty Markdown string`);
  });
}

function checkTalentOrder(o, where) {
  if (!isObject(o)) return fail(`${where}: not an object`);
  for (const k of ['id', 'title']) if (!isString(o[k])) fail(`${where}: ${k} must be a string`);
  if (!isNullableString(o.subtitle)) fail(`${where}: subtitle must be a string or null`);
  if (typeof o.approximate !== 'boolean') fail(`${where}: approximate must be a boolean`);
  if (!isArray(o.steps) || o.steps.length === 0) return fail(`${where}: steps must be a non-empty array`);
  o.steps.forEach((s, i) => {
    const sw = `${where}.steps[${i}]`;
    if (!isObject(s)) return fail(`${sw}: not an object`);
    if (!isString(s.talent) || !s.talent.trim()) fail(`${sw}: talent must be a non-empty string`);
    for (const k of ['level', 'tree', 'points', 'note']) {
      if (!isNullableString(s[k])) fail(`${sw}: ${k} must be a string or null`);
    }
  });
}

function checkMatrixRow(r, where, { requireClass = false } = {}) {
  if (!isObject(r)) return fail(`${where}: matrix row is not an object`);
  // spec is null on "this class does not fill this role" rows
  if (!isNullableString(r.spec)) fail(`${where}: spec must be a string or null`);
  if (!isString(r.role)) fail(`${where}: role must be a string`);
  if (!STANDINGS.has(r.standing)) fail(`${where}: standing "${r.standing}" is not one of ${[...STANDINGS].join('|')}`);
  for (const k of ['agreement', 'source_quality', 'playbook_path', 'yaml_path', 'notes']) {
    if (!isNullableString(r[k])) fail(`${where}: ${k} must be a string or null`);
  }
  if (requireClass && !isString(r.class)) fail(`${where}: matrix.json rows need a class slug`);
}

/* ---- classes.json -------------------------------------------------------- */
let playbookCount = 0;
let levelingCount = 0;
if (!isArray(data.classes)) {
  fail('classes.json must be an array of ClassEntry');
} else {
  data.classes.forEach((c, ci) => {
    const where = `classes[${ci}] (${c?.slug ?? '?'})`;
    if (!isObject(c)) return fail(`${where}: not an object`);
    for (const k of ['slug', 'name', 'color', 'summary']) {
      if (!isString(c[k])) fail(`${where}: ${k} must be a string`);
    }
    if (!/^#[0-9a-f]{6}$/i.test(c.color ?? '')) fail(`${where}: color must be a #rrggbb hex string`);
    if (!isArray(c.readme)) fail(`${where}: readme must be an array of Section`);
    else c.readme.forEach((s, i) => checkSection(s, `${where}.readme[${i}]`));
    if (!isArray(c.matrix)) fail(`${where}: matrix must be an array`);
    else c.matrix.forEach((r, i) => checkMatrixRow(r, `${where}.matrix[${i}]`));
    if (!isNullableString(c.gaps)) fail(`${where}: gaps must be a string or null`);
    if (!isNullableString(c.patchChanges)) fail(`${where}: patchChanges must be a string or null`);
    if (c.guidePath !== undefined && !isNullableString(c.guidePath)) fail(`${where}: guidePath must be a string or null`);
    if (c.overview !== undefined && !isNullableString(c.overview)) fail(`${where}: overview must be a string or null`);
    if (c.sources !== undefined && c.sources !== null) checkGuideDoc(c.sources, `${where}.sources`);
    if (c.guidePages !== undefined) {
      if (!isArray(c.guidePages)) fail(`${where}: guidePages must be an array`);
      else c.guidePages.forEach((d, i) => checkGuideDoc(d, `${where}.guidePages[${i}]`));
    }
    if (chosen.kind === 'generated') {
      for (const k of ['guidePath', 'overview', 'sources', 'guidePages'])
        if (!(k in c)) fail(`${where}: missing key "${k}" (use null / [] when absent)`);
    }
    if (c.guidePath) {
      if (!c.sources) warn(`${where}: guide class without a sources page`);
      checkGuideMarkdown(c.overview, `${where}.overview`);
      checkGuideMarkdown(c.patchChanges, `${where}.patchChanges`);
      (c.readme ?? []).forEach((s, i) => checkGuideMarkdown(s?.markdown, `${where}.readme[${i}]`));
      [c.sources, ...(c.guidePages ?? [])].filter(Boolean).forEach((d) =>
        (d.sections ?? []).forEach((s, i) => checkGuideMarkdown(s?.markdown, `${where}.${d.slug}[${i}]`)),
      );
    }

    if (c.leveling !== null && c.leveling !== undefined) {
      levelingCount += 1;
      if (!isObject(c.leveling)) fail(`${where}: leveling must be an object or null`);
      else {
        if (!isArray(c.leveling.sections)) fail(`${where}.leveling: sections must be an array`);
        else c.leveling.sections.forEach((s, i) => checkLevelingSection(s, `${where}.leveling.sections[${i}]`));
        if (!isString(c.leveling.sourceFile)) fail(`${where}.leveling: sourceFile must be a string`);
        if (c.leveling.talentOrders !== undefined) {
          if (!isArray(c.leveling.talentOrders)) fail(`${where}.leveling: talentOrders must be an array`);
          else c.leveling.talentOrders.forEach((o, i) => checkTalentOrder(o, `${where}.leveling.talentOrders[${i}]`));
        }
      }
    }

    if (!isArray(c.playbooks)) return fail(`${where}: playbooks must be an array`);
    c.playbooks.forEach((p, pi) => {
      playbookCount += 1;
      const pw = `${where}.playbooks[${pi}] (${p?.id ?? '?'})`;
      if (!isObject(p)) return fail(`${pw}: not an object`);
      for (const k of ['id', 'spec', 'roleLabel', 'title', 'intro']) {
        if (!isString(p[k])) fail(`${pw}: ${k} must be a string`);
      }
      if (!ROLES.has(p.role)) fail(`${pw}: role "${p.role}" is not one of ${[...ROLES].join('|')}`);
      if (!isObject(p.sections)) fail(`${pw}: sections must be an object`);
      else {
        for (const key of SECTION_KEYS) {
          if (!(key in p.sections)) fail(`${pw}.sections: missing key "${key}" (use null when absent)`);
          else if (p.sections[key] !== null) checkSection(p.sections[key], `${pw}.sections.${key}`);
        }
        for (const key of ['enchants', 'consumables']) {
          if (key in p.sections && p.sections[key] !== null) checkSection(p.sections[key], `${pw}.sections.${key}`);
        }
        if (p.sections.overview === null) warn(`${pw}: sections.overview is null`);
        // guide pages cite inline and share the class sources page
        if (p.sections.sources === null && !p.guidePath) warn(`${pw}: sections.sources is null`);
        if (p.guidePath) {
          Object.entries(p.sections).forEach(([k, s]) => checkGuideMarkdown(s?.markdown, `${pw}.sections.${k}`));
          (p.extraSections ?? []).forEach((s, i) => checkGuideMarkdown(s?.markdown, `${pw}.extraSections[${i}]`));
        }
      }
      if (!isArray(p.extraSections)) fail(`${pw}: extraSections must be an array`);
      else p.extraSections.forEach((s, i) => checkSection(s, `${pw}.extraSections[${i}]`));
      if (p.standing !== null && p.standing !== undefined) checkMatrixRow(p.standing, `${pw}.standing`);
      if (p.yaml !== null && p.yaml !== undefined && !isObject(p.yaml)) fail(`${pw}: yaml must be an object or null`);
      if (p.guidePath !== undefined && !isNullableString(p.guidePath)) fail(`${pw}: guidePath must be a string or null`);
      if (p.guidePath && !c.guidePath) fail(`${pw}: guide playbook in a class that is not built from its guide`);
    });

    /* optional gear data (rendered only when present) */
    if (c.gear !== null && c.gear !== undefined) {
      if (!isObject(c.gear)) fail(`${where}.gear: must be an object or null`);
      else if (c.gear.specs !== null && c.gear.specs !== undefined) {
        if (!isArray(c.gear.specs)) fail(`${where}.gear.specs: must be an array`);
        else
          c.gear.specs.forEach((s, si) => {
            const sw = `${where}.gear.specs[${si}]`;
            if (!isObject(s)) return fail(`${sw}: not an object`);
            if (s.role !== null && s.role !== undefined && !ROLES.has(s.role)) warn(`${sw}: unknown role "${s.role}"`);
            if (s.brackets !== null && s.brackets !== undefined && !isArray(s.brackets))
              fail(`${sw}.brackets: must be an array`);
          });
      }
    }
    if (c.gearMarkdown !== null && c.gearMarkdown !== undefined) {
      if (!isArray(c.gearMarkdown)) fail(`${where}.gearMarkdown: must be an array of Section or null`);
      else c.gearMarkdown.forEach((s, i) => checkSection(s, `${where}.gearMarkdown[${i}]`));
    }
  });
}

/* ---- matrix.json --------------------------------------------------------- */
if (!isObject(data.matrix)) {
  fail('matrix.json must be an object');
} else {
  if (!isArray(data.matrix.roles)) fail('matrix.roles must be an array of strings');
  if (!isArray(data.matrix.standings)) fail('matrix.standings must be an array of strings');
  if (!isString(data.matrix.coverageMarkdown)) fail('matrix.coverageMarkdown must be a string');
  if (data.matrix.matrixMarkdown !== undefined && !isString(data.matrix.matrixMarkdown))
    fail('matrix.matrixMarkdown must be a string when present');
  if (!isArray(data.matrix.rows)) fail('matrix.rows must be an array');
  else data.matrix.rows.forEach((r, i) => checkMatrixRow(r, `matrix.rows[${i}]`, { requireClass: true }));
}

/* ---- glossary.json ------------------------------------------------------- */
if (!isArray(data.glossary)) {
  fail('glossary.json must be an array');
} else {
  data.glossary.forEach((g, i) => {
    if (!isObject(g)) return fail(`glossary[${i}]: not an object`);
    if (!isString(g.term)) fail(`glossary[${i}]: term must be a string`);
    if (!isString(g.meaning)) fail(`glossary[${i}]: meaning must be a string`);
    for (const k of ['category', 'scope', 'citation_url']) {
      if (!isNullableString(g[k])) fail(`glossary[${i}]: ${k} must be a string or null`);
    }
  });
}

/* ---- meta.json ----------------------------------------------------------- */
if (!isObject(data.meta)) {
  fail('meta.json must be an object');
} else {
  if (!isString(data.meta.generatedAt)) fail('meta.generatedAt must be a string');
  if (!isNullableString(data.meta.repoCommit)) fail('meta.repoCommit must be a string or null');
  if (!isString(data.meta.notes)) fail('meta.notes must be a string');
  if (!isObject(data.meta.counts)) fail('meta.counts must be an object');
  else {
    const actual = {
      classes: isArray(data.classes) ? data.classes.length : 0,
      playbooks: playbookCount,
      matrixRows: isArray(data.matrix?.rows) ? data.matrix.rows.length : 0,
      glossaryTerms: isArray(data.glossary) ? data.glossary.length : 0,
    };
    for (const [k, v] of Object.entries(actual)) {
      if (typeof data.meta.counts[k] !== 'number') fail(`meta.counts.${k} must be a number`);
      else if (data.meta.counts[k] !== v) fail(`meta.counts.${k} is ${data.meta.counts[k]} but the data holds ${v}`);
    }
  }
}

/* ---- instances.json (optional: dungeon and raid pages) ------------------- */
let instanceCount = 0;
const instancesPath = join(chosen.dir, 'instances.json');
if (existsSync(instancesPath)) {
  let inst = null;
  try {
    inst = JSON.parse(readFileSync(instancesPath, 'utf8'));
  } catch (err) {
    fail(`instances.json does not parse: ${err.message}`);
  }
  if (inst !== null && !isObject(inst)) fail('instances.json must be an object');
  else if (inst) {
    for (const k of ['title', 'intro', 'sourceFile']) if (!isString(inst[k])) fail(`instances.${k} must be a string`);
    const KINDS = new Set(['dungeon', 'raid']);
    const pages = isArray(inst.pages) ? inst.pages : (fail('instances.pages must be an array'), []);
    const groups = isArray(inst.groups) ? inst.groups : (fail('instances.groups must be an array'), []);
    instanceCount = pages.length;
    const slugs = new Set();
    const classSlugs = new Set(isArray(data.classes) ? data.classes.map((c) => c.slug) : []);
    /** Relative .md links must have become routes; routes must resolve. */
    const checkLinks = (md, where) => {
      if (!isString(md)) return;
      checkGuideMarkdown(md, where);
      const rel = md.match(/\]\((?!https?:|#\/|mailto:)[^)]*\.md(?:#[^)]*)?\)/g);
      if (rel) fail(`${where}: unrewritten relative links ${rel.slice(0, 3).join(' ')}`);
      if (md.includes('/guide/instances/')) fail(`${where}: instance link left as a repository URL`);
      for (const m of md.matchAll(/\]\(#\/instances\/([^)\s#]+)\)/g))
        if (!pageSlugs.has(m[1])) fail(`${where}: link to unknown instance page "${m[1]}"`);
      for (const m of md.matchAll(/\]\(#\/class\/([a-z]+)/g))
        if (!classSlugs.has(m[1])) fail(`${where}: link to unknown class "${m[1]}"`);
    };
    const pageSlugs = new Set(pages.map((p) => p?.slug));
    pages.forEach((p, i) => {
      const where = `instances.pages[${i}] (${p?.slug ?? '?'})`;
      if (!isObject(p)) return fail(`${where}: not an object`);
      for (const k of ['slug', 'title', 'intro', 'sourceFile']) if (!isString(p[k])) fail(`${where}: ${k} must be a string`);
      if (slugs.has(p.slug)) fail(`${where}: duplicate slug`);
      slugs.add(p.slug);
      if (p.kind !== null && !KINDS.has(p.kind)) fail(`${where}: kind "${p.kind}" is not dungeon|raid|null`);
      if (p.kind === null) warn(`${where}: not listed in the instance index`);
      if (!isNullableString(p.group)) fail(`${where}: group must be a string or null`);
      if (!isArray(p.sections)) return fail(`${where}: sections must be an array`);
      const ids = new Set();
      p.sections.forEach((s, j) => {
        checkSection(s, `${where}.sections[${j}]`);
        if (ids.has(s?.id)) fail(`${where}.sections[${j}]: duplicate section id "${s?.id}"`);
        ids.add(s?.id);
        checkLinks(s?.markdown, `${where}.sections[${j}]`);
      });
      checkLinks(p.intro, `${where}.intro`);
    });
    checkLinks(inst.intro, 'instances.intro');
    const listed = new Set();
    groups.forEach((g, i) => {
      const where = `instances.groups[${i}] (${g?.id ?? '?'})`;
      if (!isObject(g)) return fail(`${where}: not an object`);
      for (const k of ['id', 'heading', 'markdown']) if (!isString(g[k])) fail(`${where}: ${k} must be a string`);
      if (g.kind !== null && !KINDS.has(g.kind)) fail(`${where}: kind "${g.kind}" is not dungeon|raid|null`);
      if (!isArray(g.slugs)) return fail(`${where}: slugs must be an array`);
      for (const slug of g.slugs) {
        listed.add(slug);
        if (!pageSlugs.has(slug)) fail(`${where}: index links to unknown page "${slug}"`);
        else if (!g.markdown.includes(`](#/instances/${slug})`)) fail(`${where}: "${slug}" has no route link`);
      }
      checkLinks(g.markdown, where);
    });
    for (const slug of pageSlugs) if (!listed.has(slug)) warn(`instances: page "${slug}" is not linked from the index`);
    const counts = data.meta?.instanceCounts;
    if (chosen.kind === 'generated') {
      if (!isObject(counts)) fail('meta.instanceCounts must be an object when instances.json exists');
      else {
        const actual = {
          pages: pages.length,
          dungeons: pages.filter((p) => p.kind === 'dungeon').length,
          raids: pages.filter((p) => p.kind === 'raid').length,
        };
        for (const [k, v] of Object.entries(actual))
          if (counts[k] !== v) fail(`meta.instanceCounts.${k} is ${counts[k]} but instances.json holds ${v}`);
      }
    }
    // class guide pages link to instances as routes that resolve
    for (const c of isArray(data.classes) ? data.classes : []) {
      const text = JSON.stringify(c);
      if (text.includes('/guide/instances/')) fail(`classes (${c.slug}): links to guide/instances/ on GitHub`);
      for (const m of text.matchAll(/\]\(#\/instances\/([^)\s#]+)\)/g))
        if (!pageSlugs.has(m[1])) fail(`classes (${c.slug}): link to unknown instance page "${m[1]}"`);
    }
  }
} else if (chosen.kind === 'generated' && data.meta?.instanceCounts?.pages) {
  fail('meta.instanceCounts.pages is set but instances.json is missing');
}

/* ---- cross-references ---------------------------------------------------- */
if (isArray(data.classes) && isObject(data.matrix) && isArray(data.matrix.rows)) {
  const slugs = new Set(data.classes.map((c) => String(c.slug).toLowerCase()));
  for (const row of data.matrix.rows) {
    // the generator writes the display name ("Warrior"); match it case-insensitively
    if (isString(row.class) && !slugs.has(row.class.toLowerCase())) warn(`matrix row for unknown class "${row.class}"`);
  }
  for (const c of data.classes) {
    for (const p of c.playbooks ?? []) {
      if (p.standing && isString(p.standing.spec) && p.standing.role !== p.role)
        warn(`${c.slug}/${p.id}: standing row role "${p.standing.role}" differs from the playbook role "${p.role}"`);
    }
  }
}

// ---- Guide summaries (optional fields; the fixtures have none) -------------
// viability (the class guide's spec table), talentTree, playbook builds/glance
// and leveling paths drive the at-a-glance UI; see PLAN.md §10.
for (const c of isArray(data.classes) ? data.classes : []) {
  const v = c.viability;
  if (v !== undefined && v !== null) {
    if (!isArray(v.columns) || !isArray(v.rows)) fail(`${c.slug}: viability needs columns[] and rows[]`);
    for (const row of v.rows ?? []) {
      if (!isString(row.spec)) fail(`${c.slug}: viability row without a spec`);
      if (!isArray(row.cells) || row.cells.length !== (v.columns ?? []).length)
        fail(`${c.slug}/${row.spec}: viability cells do not match the columns`);
      for (const cell of row.cells ?? [])
        if (!(cell.grade === null || /^[SABCDF][+-]?$/.test(cell.grade)) || !isString(cell.note))
          fail(`${c.slug}/${row.spec}: bad viability cell ${JSON.stringify(cell).slice(0, 80)}`);
      if (row.playbookId && !(c.playbooks ?? []).some((p) => p.id === row.playbookId))
        fail(`${c.slug}/${row.spec}: viability row points at missing playbook ${row.playbookId}`);
    }
  }
  const tabs = c.talentTree?.tabs;
  if (c.talentTree && (!isArray(tabs) || tabs.length !== 3)) fail(`${c.slug}: talentTree must have 3 tabs`);
  const checkBuild = (b, where) => {
    if (!isString(b.url) || !isArray(b.ranks) || !isArray(b.totals)) return fail(`${where}: build needs url, ranks, totals`);
    if (tabs)
      b.ranks.forEach((ranks, ti) => {
        if (!tabs[ti] || ranks.length !== tabs[ti].talents.length) fail(`${where}: ranks do not match tree ${ti}`);
      });
  };
  for (const p of c.playbooks ?? []) {
    for (const b of p.builds ?? []) checkBuild(b, `${c.slug}/${p.id}`);
    if (p.sectionOrder !== undefined && !isArray(p.sectionOrder)) fail(`${c.slug}/${p.id}: sectionOrder must be an array`);
  }
  for (const path of c.leveling?.paths ?? []) {
    if (!isArray(path.steps) || path.steps.length === 0) fail(`${c.slug}/${path.id}: leveling path without steps`);
    if (path.end) checkBuild(path.end, `${c.slug}/${path.id}`);
  }
}

const label = chosen.kind === 'generated' ? 'src/data' : 'src/data/fixtures (development sample)';
console.log(`check-data: ${label}`);
console.log(
  `  ${isArray(data.classes) ? data.classes.length : 0} classes, ${playbookCount} playbooks, ${levelingCount} leveling guides, ` +
    `${isArray(data.matrix?.rows) ? data.matrix.rows.length : 0} matrix rows, ${isArray(data.glossary) ? data.glossary.length : 0} glossary terms, ${instanceCount} instance pages`,
);
warnings.slice(0, 20).forEach((w) => console.log(`  ! ${w}`));
if (warnings.length > 20) console.log(`  ! …and ${warnings.length - 20} more warnings`);
if (chosen.kind === 'fixtures' && !onlyFixtures)
  console.log('  ! generated data is missing; validated the fixtures instead');

if (errors.length) {
  console.error(`check-data: ${errors.length} contract error(s)`);
  errors.slice(0, 40).forEach((e) => console.error(`  ✗ ${e}`));
  process.exit(1);
}
console.log('check-data: contract OK');
