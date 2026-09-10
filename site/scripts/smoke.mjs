#!/usr/bin/env node
/**
 * Offline route crawl: server-renders every route (home, matrix, about, each
 * class, leveling, gear and playbook page, plus an unknown path) and fails on
 * the first render error. No browser and no network needed.
 *
 * Usage: node scripts/smoke.mjs [--fixtures]
 */
import { spawnSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const useFixtures = process.argv.includes('--fixtures');

const build = spawnSync(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['vite', 'build', '--ssr', 'src/smoke-entry.tsx', '--outDir', '.smoke', '--emptyOutDir', '--logLevel', 'warn'],
  { cwd: root, stdio: 'inherit', env: { ...process.env, VITE_USE_FIXTURES: useFixtures ? '1' : '' } },
);
if (build.status !== 0) process.exit(build.status ?? 1);

// Minimal browser stubs: the app only touches these at module scope.
globalThis.window = {
  location: { hash: '#/' },
  addEventListener: () => {},
  removeEventListener: () => {},
  setTimeout: (fn, ms) => setTimeout(fn, ms),
  scrollTo: () => {},
  matchMedia: () => ({ matches: false, addEventListener: () => {}, removeEventListener: () => {} }),
};
globalThis.document = {
  documentElement: { setAttribute: () => {}, getAttribute: () => 'dark' },
  getElementById: () => null,
  createElement: () => ({ classList: { add: () => {} }, setAttribute: () => {}, appendChild: () => {} }),
  querySelectorAll: () => [],
  addEventListener: () => {},
  removeEventListener: () => {},
};
globalThis.localStorage = { getItem: () => null, setItem: () => {} };

// React's SSR renderer warns about useLayoutEffect; that is expected here.
const realError = console.error;
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('useLayoutEffect does nothing on the server')) return;
  realError(...args);
};

await import(pathToFileURL(join(root, '.smoke/smoke-entry.js')).href);
