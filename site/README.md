# Turtle WoW class guide site

A static site over this repository's class synthesis: pick a class, see the community-favored specs per role, read the full playbooks (talents, stats, rotations, cooldowns, role strategy, gear, mistakes), the leveling guides, the spec × role matrix, and the forum evidence behind every claim.

Vite + React 18 + TypeScript + Tailwind CSS. No backend, no runtime network calls, no external fonts or CDN scripts, no game artwork. All prose comes from the generated JSON in `src/data/`; the only hand-written strings are UI labels.

## Requirements

- Node 22 and npm (the build itself needs nothing else)
- Python 3.11 + PyYAML only if you want to regenerate `src/data/*.json`

## Install and run

```sh
cd site
npm install          # or: npm ci  (uses package-lock.json)
npm run dev          # local dev server on http://localhost:5173
```

## Build

```sh
npm run build         # -> dist/            multi-file build for any static host
npm run build:single  # -> dist-single/index.html   one self-contained file
```

`base` is `./`, so `dist/` works unchanged at a domain root, inside a sub-path (GitHub Pages project sites), in any sub-folder of a static server, and straight from disk. Routing is hash-based (`#/class/warrior/protection-tank`), so deep links survive a reload with no server rewrites.

The single-file build inlines the JS, CSS and JSON into one HTML file (~2.5 MB) that opens from `file://` with zero network requests — useful for previews, archives and offline reading.

## Checks

```sh
npm run check            # tsc --noEmit + eslint + the data-contract validator
npm run smoke            # server-renders every route and fails on any error
npm run smoke -- --fixtures
node scripts/check-data.mjs --fixtures
```

`npm run check` is offline and needs no browser: `scripts/check-data.mjs` validates `src/data/*.json` against the contract in `PLAN.md` §2 (shapes, enums, section keys, cross-references, and `meta.counts` against the real counts) and exits non-zero on any violation. `npm run smoke` builds an SSR bundle and renders home, matrix, about, every class, leveling, gear and playbook page plus an unknown route, asserting that each produces content.

## Hosting

- **GitHub Pages (project path)** — build in `site/` and publish `site/dist`. `public/.nojekyll` is copied into the build so paths starting with an underscore are served. Nothing else is needed; relative asset URLs and hash routing handle the sub-path.
- **Forgejo Pages / nginx / Apache / S3** — copy `dist/` anywhere and serve it as plain files. No rewrite rules, no SPA fallback, no MIME surprises beyond `.js`, `.css`, `.html`.
- **Offline / a single file** — hand someone `dist-single/index.html`.

## Regenerating the data

`src/data/*.json` is generated from the repository and committed, so the site builds without Python:

```sh
cd site
python3 scripts/build-data.py     # rewrites src/data/{classes,matrix,glossary,meta}.json
python3 scripts/test_data.py      # the generator's own count/shape assertions
npm run check                     # re-validates the contract from the app side
```

Sources: `synthesis/classes/**` (Markdown playbooks, class READMEs, leveling guides), `structured/classes/**` (per-spec YAML and the spec-role matrix), `structured/glossary.jsonl`. The generator strips the H1, keeps H3 content inside its H2 section, and never rewrites prose.

### Fixtures

`src/data/fixtures/` holds a small development sample (2 classes, 3 playbooks, 1 leveling guide, a gear sample, 12 glossary terms) so the UI can be worked on before the generator runs. The app uses `src/data/*.json` whenever those files exist; the fixtures are used only when they are missing, or when `VITE_USE_FIXTURES=1` is set:

```sh
VITE_USE_FIXTURES=1 npm run dev
```

A normal production build tree-shakes the fixtures out of the bundle entirely. A build that falls back to fixtures shows a banner under the header and warns in the console.

## Layout

```
site/
  index.html                 app shell (theme bootstrap, inline SVG favicon)
  vite.config.ts             dist/ build (base './')
  vite.config.single.ts      dist-single/ build (vite-plugin-singlefile)
  scripts/build-data.py      data generator (repo -> src/data/*.json)
  scripts/test_data.py       generator tests
  scripts/check-data.mjs     contract validator used by `npm run check`
  scripts/smoke.mjs          offline route crawl (SSR)
  src/types.ts               TypeScript view of the data contract
  src/data/                  generated JSON + fixtures + loader
  src/lib/                   router, theme, markdown, search, leveling,
                             glossary tooltips, site helpers
  src/components/            Card, Badge, Tabs, Callout, PriorityList, StatBars,
                             CitationChip, SearchDialog, GlossaryPanel, MatrixGrid,
                             TalentPoints, CooldownList, MistakeList, GearTable, …
  src/pages/                 Home, ClassPage, PlaybookPage, LevelingPage,
                             GearPage, MatrixPage, AboutPage, NotFound
```

## Routes

| Route | Page |
|---|---|
| `#/` | class grid, search, matrix teaser |
| `#/class/<slug>` | role tabs, spec cards with standing / agreement / patch-validity badges, coverage table, 1.18.1 changes, gaps |
| `#/class/<slug>/<spec>-<role>` | full playbook with structured widgets and citations |
| `#/class/<slug>/leveling` | leveling guide: spec verdicts, talent-order timeline, what to press, stats, route, hardcore |
| `#/class/<slug>/gear` | gear by spec and bracket (only when gear data exists) |
| `#/matrix` | full spec × role matrix (one card per class on a phone), coverage and matrix documents in collapsibles |
| `#/about` | data provenance, source tiers, counts, timeline |

## Conventions

- Dark theme by default, light toggle persisted in `localStorage`; class and status colors are darkened or lightened per theme so text keeps a 4.5:1 contrast ratio.
- Responsive to 360 px — below `sm` the header collapses Matrix, About, Glossary and the theme toggle into a "More" menu so it stays one row. Keyboard accessible (skip link, roving tab strips, focus-trapped dialogs, visible focus), `prefers-reduced-motion` respected.
- Markdown is rendered with `marked` and sanitized with DOMPurify; inline `[author (tier), date](url)` links become citation chips that keep their link.
- Archive jargon (the Class Changes passes, the era labels, standing / contested / player claim, opaque build links) gets a glossary tooltip on its first mention in a guide body, opened by click, tap or keyboard focus. The rules live in `src/lib/glossary-inline.ts`; the wording comes from `structured/glossary.jsonl` like the rest of the prose.
- YAML from `structured/classes/**` is passed through as-is; unknown shapes fall back to a compact key/value list rather than being dropped.
