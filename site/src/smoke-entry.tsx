import { renderToString } from 'react-dom/server';
import App from './App';
import { siteData } from './data';

const routes = ['#/', '#/matrix', '#/about', '#/nope'];
for (const c of siteData.classes) {
  routes.push(`#/class/${c.slug}`);
  if (c.leveling) routes.push(`#/class/${c.slug}/leveling`);
  if (c.gear) routes.push(`#/class/${c.slug}/gear`);
  for (const p of c.playbooks) routes.push(`#/class/${c.slug}/${p.id}`);
  if (c.sources) routes.push(`#/class/${c.slug}/sources`);
  for (const d of c.guidePages ?? []) routes.push(`#/class/${c.slug}/guide/${d.slug}`);
}
routes.push('#/class/mage/guide/no-such-page');
const instancePages = siteData.instances?.pages ?? [];
if (siteData.instances) routes.push('#/instances');
for (const p of instancePages) routes.push(`#/instances/${p.slug}`);
routes.push('#/instances/no-such-page');
const guideRoutes = new Set(
  siteData.classes.flatMap((c) =>
    c.playbooks.filter((p) => p.guidePath).map((p) => `#/class/${c.slug}/${p.id}`),
  ),
);

/** React's text escaping, to find a title in the rendered HTML. */
const escapeText = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

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
    expect('<main');
    expect('href="#/instances"'); // the "Dungeons & Raids" header entry
    if (route === '#/') {
      expect('Turtle WoW 1.18.1 class guides');
      // The home card's leveling verdict links to the leveling guide.
      expect('href="#/class/warrior/leveling"');
    }
    if (route === '#/matrix') expect('Spec');
    if (route.endsWith('/gear')) expect('Slot');
    if (route.endsWith('/leveling')) {
      expect('Leveling 1–60');
      expect('Which spec');
      expect('What to press');
      expectNot('Source file:');
    }
    // A guide with no leveling order of its own shows the class guide's.
    if (!siteData.isFixture && route === '#/class/warrior/protection-tank') expect('Leveling path');
    if (/#\/class\/[a-z]+\/[a-z-]+$/.test(route) && !route.endsWith('/gear') && !route.endsWith('/leveling'))
      expect('Sources');
    if (route.endsWith('/no-such-page')) expect('Nothing at this address');
    if (route === '#/instances') {
      expect('Dungeons &amp; Raids');
      for (const g of siteData.instances?.groups ?? []) expect(`id="${g.id}"`);
      // every index row links to its page
      for (const p of instancePages) expect(`href="#/instances/${p.slug}"`);
      expectNot('[[d:');
      expectNot('.md"');
    }
    const inst = instancePages.find((p) => route === `#/instances/${p.slug}`);
    if (inst) {
      expect(`>${escapeText(inst.title)}</h1>`);
      for (const s of inst.sections) expect(`id="${s.id}"`);
      if (inst.sections.length > 1) expect('aria-label="Sections of this page"');
      expectNot('[[d:');
      expectNot('.md"');
    }
    if (guideRoutes.has(route)) {
      // guide playbooks open with their overview and carry Discord chips
      expect('id="overview"');
      expect('cite-discord');
      expectNot('[[d:');
    }
    if (route.endsWith('/sources')) {
      const doc = siteData.classes.find((c) => route === `#/class/${c.slug}/sources`)?.sources;
      if (doc?.sections[0]) expect(`id="${doc.sections[0].id}"`);
    }
  } catch (err) {
    failures += 1;
    console.error(`ERROR  ${route}: ${(err as Error).message}`);
  }
}
console.log(`smoke: ${routes.length} routes rendered, ${failures} failure(s)`);
if (failures) (globalThis as { process?: { exit: (code: number) => void } }).process?.exit(1);
