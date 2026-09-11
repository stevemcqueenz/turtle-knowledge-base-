import { renderToString } from 'react-dom/server';
import App from './App';
import { siteData } from './data';

const routes = ['#/', '#/matrix', '#/about', '#/nope'];
for (const c of siteData.classes) {
  routes.push(`#/class/${c.slug}`);
  if (c.leveling) routes.push(`#/class/${c.slug}/leveling`);
  if (c.gear) routes.push(`#/class/${c.slug}/gear`);
  for (const p of c.playbooks) routes.push(`#/class/${c.slug}/${p.id}`);
}

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
        console.error(`UNEXPECTED "${needle}"  ${route}`);
        failures += 1;
      }
    };
    expect('<main');
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
    if (route === '#/class/warrior/protection-tank') expect('Leveling path');
    if (/#\/class\/[a-z]+\/[a-z-]+$/.test(route) && !route.endsWith('/gear') && !route.endsWith('/leveling'))
      expect('Sources');
  } catch (err) {
    failures += 1;
    console.error(`ERROR  ${route}: ${(err as Error).message}`);
  }
}
console.log(`smoke: ${routes.length} routes rendered, ${failures} failure(s)`);
if (failures) (globalThis as { process?: { exit: (code: number) => void } }).process?.exit(1);
