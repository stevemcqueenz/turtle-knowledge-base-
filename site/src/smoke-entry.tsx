import { renderToString } from 'react-dom/server';
import App from './App';
import { cachedClass, cachedGuide, cachedInstances, coreData, preloadAll } from './data';
import { generalGuides, quickLabel } from './lib/guides';
import { bossAnchor } from './lib/instances';
import { classIcon } from './lib/icons';

/** public/icons/manifest.json is present (tools/icons/extract_icons.py). */
const hasIcons = classIcon('mage') !== null;

/** React's text escaping, to find a title in the rendered HTML. */
const escapeText = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

async function main() {
// Server rendering runs no effects, so every lazily loaded chunk is loaded first.
await preloadAll();

const classes = coreData.classes.map((c) => cachedClass(c.slug)!);
const routes = ['#/', '#/matrix', '#/matrix?by=pvp', '#/archive', '#/about', '#/glossary', '#/nope'];
// every general guide (guide/*.md) at its own route: only the ones the data has
const guides = generalGuides.map((g) => ({ meta: g, doc: cachedGuide(g.slug)! }));
const professions = guides.find((g) => g.meta.slug === 'professions')?.doc ?? null;
for (const g of guides) routes.push(g.meta.route);
for (const c of classes) {
  routes.push(`#/class/${c.slug}`);
  if (c.leveling) routes.push(`#/class/${c.slug}/leveling`);
  if (c.gear) routes.push(`#/class/${c.slug}/gear`);
  for (const p of c.playbooks) routes.push(`#/class/${c.slug}/${p.id}`);
  if (c.sources) routes.push(`#/class/${c.slug}/sources`);
  for (const d of c.guidePages ?? []) routes.push(`#/class/${c.slug}/guide/${d.slug}`);
  if ((c.guidePages ?? []).some((d) => d.slug === 'professions')) routes.push(`#/class/${c.slug}/professions`);
}
routes.push('#/class/mage/guide/no-such-page', '#/class/mage/no-such-page', '#/class/nope');
const instances = cachedInstances();
const instancePages = instances?.pages ?? [];
if (instances) routes.push('#/instances');
for (const p of instancePages) routes.push(`#/instances/${p.slug}`);
routes.push('#/instances/no-such-page');
const guideRoutes = new Set(
  classes.flatMap((c) => c.playbooks.filter((p) => p.guidePath).map((p) => `#/class/${c.slug}/${p.id}`)),
);

let failures = 0;
for (const route of routes) {
  (globalThis as any).window.location.hash = route;
  try {
    const html = renderToString(<App />);
    const expect = (needle: string) => {
      if (!html.includes(needle)) {
        console.error(`MISSING "${needle}"  ${route}`);
        failures += 1;
      }
    };
    const expectNot = (needle: string) => {
      if (html.includes(needle)) {
        console.error(`UNEXPECTED "${needle}"  ${route}  …${html.slice(Math.max(0, html.indexOf(needle) - 160), html.indexOf(needle) + 40)}`);
        failures += 1;
      }
    };
    // a raw `[[d:channel#id]]` citation (the bot panel's "[[d:channel#id]]" example is fine)
    const raw = /\[\[d:[a-z0-9_-]+#\d+\]\]/.exec(html);
    if (raw) {
      console.error(`RAW CITATION ${raw[0]}  ${route}`);
      failures += 1;
    }
    expect('<main');
    expect('href="#/instances"'); // the "Dungeons & Raids" header entry
    expectNot('Loading…'); // every chunk was preloaded
    expectNot('role="status"');
    const path = route.split('?')[0];
    if (route === '#/') {
      expect('Turtle WoW class guides');
      expect('By goal');
      expect('Every claim links to its source.');
      for (const c of classes) expect(`href="#/class/${c.slug}"`);
      if (!coreData.isFixture) expect('href="#/class/mage/leveling"'); // the leveling intent links the leveling guide
      if (professions) expect('href="#/professions"');
      // the "By goal" quick links and the sidebar's General group
      for (const g of guides) expect(`href="${g.meta.route}"`);
      for (const g of guides) if (g.meta.quick) expect(`${escapeText(quickLabel(g.meta))}</a>`);
      if (guides.length) expect('>General</p>');
    }
    if (route === '#/glossary') {
      expect('>Glossary</h1>');
      for (const g of coreData.glossary.slice(0, 20)) expect(escapeText(g.term));
    }
    const general = guides.find((g) => route === g.meta.route);
    if (general) {
      expect(`>${escapeText(general.meta.label)}</h1>`);
      for (const s of general.doc.sections) expect(`id="${s.id}"`);
      if (general.doc.sections.length > 1) expect('aria-label="On this page"'); // the TOC
      expect(`aria-current="page"`); // its sidebar entry
      if (/cite-discord/.test(general.doc.sections.map((s) => s.markdown).join('') + general.doc.intro)) expect('cite-discord');
      expectNot('.md"');
    }
    if (route === '#/professions' && professions) {
      expect('>Professions</h1>');
      for (const c of classes) if ((c.guidePages ?? []).some((d) => d.slug === 'professions')) expect(`href="#/class/${c.slug}/professions"`);
    }
    const profCls = classes.find((c) => route === `#/class/${c.slug}/professions` || route === `#/class/${c.slug}/guide/professions`);
    if (profCls) {
      const doc = profCls.guidePages!.find((d) => d.slug === 'professions')!;
      expect('professions</h1>');
      expect('href="#/professions"'); // back to the overview
      for (const s of doc.sections) expect(`id="${s.id}"`);
      expect(`aria-label="${escapeText(profCls.name)} pages"`); // the class page strip
    }
    if (path === '#/matrix' && !coreData.isFixture) {
      expect('Viability board');
      expect('Every rating');
    }
    if (route === '#/archive') expect('Forum-era research archive');
    if (route.endsWith('/gear')) expect('Slot');
    const cls = classes.find((c) => route === `#/class/${c.slug}`);
    if (cls) {
      expect(`>${escapeText(cls.name)}</h1>`);
      expect('id="guides"');
      if (cls.viability) {
        expect('id="viability"');
        for (const r of cls.viability.rows) expect(escapeText(r.spec));
      }
      for (const s of cls.readme) if (s.heading !== cls.viability?.heading && s.heading.toLowerCase() !== 'pages') expect(`id="${s.id}"`);
      if ((cls.guidePages ?? []).some((d) => d.slug === 'professions')) expect(`href="#/class/${cls.slug}/professions"`);
      if (cls.viability) expect('data-q="S"'); // ratings drawn as item-quality badges
      if (hasIcons) expect('class="game-icon'); // class emblem and spec tree icons
    }
    if (route.endsWith('/leveling')) {
      const c = classes.find((x) => route === `#/class/${x.slug}/leveling`)!;
      expect('Leveling a');
      if (c.leveling?.paths?.length && c.talentTree) {
        expect('id="talent-path"');
        expect('Talent path 10–60');
      }
      // every leveling section is reachable
      for (const s of c.leveling?.sections ?? []) if (s.heading !== 'Introduction') expect(`id="${s.id}"`);
      expectNot('Source file:');
      // Gameplay by level: one tab per "### Levels X–Y" bracket, every bracket's panel rendered
      const gameplay = c.leveling?.sections.find((s) => /^gameplay by level/i.test(s.heading));
      if (gameplay) {
        expect('aria-label="Level bracket"');
        for (const m of gameplay.markdown.matchAll(/^###\s+(Levels?\s+(\d+)\s*[–-]\s*(\d+).*)$/gm)) {
          expect(`>${m[2]}–${m[3]}</button>`);
          expect(`>${escapeText(m[1].trim())}</h3>`);
        }
        if (/\*\*New now:?\*\*/.test(gameplay.markdown)) expect('data-kind="new"');
        if (/\*\*Single target/.test(gameplay.markdown)) expect('data-kind="single"');
      }
    }
    if (route.endsWith('/no-such-page') || route === '#/class/nope' || route === '#/nope') expect('Nothing at this address');
    if (route === '#/instances') {
      expect('Dungeons &amp; Raids');
      for (const g of instances?.groups ?? []) expect(`id="${g.id}"`);
      // index cards carry the map thumbnails
      for (const p of instancePages) if (p.map) expect(`src="${escapeText(p.map.thumb.file)}"`);
      // every index row links to its page
      for (const p of instancePages) expect(`href="#/instances/${p.slug}"`);
      expectNot('.md"');
    }
    const inst = instancePages.find((p) => route === `#/instances/${p.slug}`);
    if (inst) {
      expect(`>${escapeText(inst.title)}</h1>`);
      for (const s of inst.sections) expect(`id="${s.id}"`);
      for (const s of inst.sections)
        if (/boss|encounter|wing|floor|event/i.test(s.heading))
          for (const m of s.markdown.matchAll(/^###\s+(.+)$/gm)) expect(`id="${bossAnchor(m[1].trim())}"`);
      if (inst.map) {
        // the map: first floor's image, a tab per floor, its markers, the provenance line
        expect('id="instance-map"');
        expect(`src="${escapeText(inst.map.floors[0].file)}"`);
        if (inst.map.floors.length > 1) for (const f of inst.map.floors) expect(`>${escapeText(f.label)}`);
        for (const m of inst.map.floors[0].markers) expect(`?s=${encodeURIComponent(m.anchor)}`);
        expect(inst.map.provenance.minimap ? 'client minimap textures' : 'server navmesh');
      }
      expectNot('.md"');
    }
    if (guideRoutes.has(route)) {
      const [, , slug, id] = route.split('/');
      const pb = classes.find((c) => c.slug === slug)!.playbooks.find((p) => p.id === id)!;
      // the at-a-glance block, every guide section, the Discord chips, the bot playbook
      expect('id="overview"');
      expect('At a glance');
      expect('cite-discord');
      for (const s of [...Object.values(pb.sections), ...pb.extraSections])
        if (s && !(s.id === 'overview' && s.heading === 'Overview')) expect(`id="${s.id}"`);
      if (pb.builds?.length) {
        expect('Open in talent calculator');
        expect(escapeText(pb.builds[0].url).replace(/&amp;/g, '&amp;'));
        expect('role="group"'); // the talent grid
        if (hasIcons) expect('game-icon talent-icon'); // talent slots draw their in-game icons
      }
      if (pb.yaml) expect('id="for-bots"');
      const how = pb.extraSections.find((x) => /^how to play/i.test(x.heading));
      if (how) {
        expect('How to play');
        if (/^\d+\.\s/m.test(how.markdown)) expect('Back to step');
      }
      if (pb.yaml?.play_loop) expect('>play_loop</button>');
      if (pb.yaml?.leveling_gameplay) expect('>leveling_gameplay</button>');
      if (Array.isArray(pb.yaml?.rotation_single) && pb.yaml!.rotation_single!.length) expect('Single-target priority');
    }
    if (route.endsWith('/sources')) {
      const doc = classes.find((c) => route === `#/class/${c.slug}/sources`)?.sources;
      if (doc?.sections[0]) expect(`id="${doc.sections[0].id}"`);
    }
  } catch (err) {
    failures += 1;
    console.error(`ERROR  ${route}: ${(err as Error).message}`);
  }
}
console.log(`smoke: ${routes.length} routes rendered, ${failures} failure(s)`);
if (failures) (globalThis as { process?: { exit: (code: number) => void } }).process?.exit(1);
}

void main();
