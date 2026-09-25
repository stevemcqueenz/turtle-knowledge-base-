import { renderToString } from 'react-dom/server';
import App from './App';
import { cachedClass, cachedInstances, coreData, preloadAll } from './data';
import { bossAnchor } from './lib/instances';

/** React's text escaping, to find a title in the rendered HTML. */
const escapeText = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

async function main() {
// Server rendering runs no effects, so every lazily loaded chunk is loaded first.
await preloadAll();

const classes = coreData.classes.map((c) => cachedClass(c.slug)!);
const routes = ['#/', '#/matrix', '#/matrix?by=pvp', '#/archive', '#/about', '#/nope'];
for (const c of classes) {
  routes.push(`#/class/${c.slug}`);
  if (c.leveling) routes.push(`#/class/${c.slug}/leveling`);
  if (c.gear) routes.push(`#/class/${c.slug}/gear`);
  for (const p of c.playbooks) routes.push(`#/class/${c.slug}/${p.id}`);
  if (c.sources) routes.push(`#/class/${c.slug}/sources`);
  for (const d of c.guidePages ?? []) routes.push(`#/class/${c.slug}/guide/${d.slug}`);
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
      expect('How the community played every class');
      expect('Best picks by goal');
      for (const c of classes) expect(`href="#/class/${c.slug}"`);
      if (!coreData.isFixture) expect('href="#/class/mage/leveling"'); // the leveling intent links the leveling guide
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
      }
      if (pb.yaml) expect('id="for-bots"');
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
