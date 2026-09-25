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

`npm run check` is offline and needs no browser: `scripts/check-data.mjs` validates `src/data/*.json` against the contract in `PLAN.md` §2 (shapes, enums, section keys, cross-references, and `meta.counts` against the real counts) and exits non-zero on any violation. `npm run smoke` builds an SSR bundle and renders home, matrix, about, every class, leveling, gear, playbook and guide page, the dungeon and raid index and every instance page, plus unknown routes, asserting that each produces content (instance pages: every section anchor, no raw `[[d:`, no `.md` hrefs; the index links every page). `scripts/test_data.py` and `check-data.mjs` also check `instances.json`: pages match `guide/instances/*.md`, every index link resolves, no raw citations or dangling relative `.md` links, and no class guide links to an instance page on GitHub.

## Hosting

- **GitHub Pages (project path)** — build in `site/` and publish `site/dist`. `public/.nojekyll` is copied into the build so paths starting with an underscore are served. Nothing else is needed; relative asset URLs and hash routing handle the sub-path.
- **Forgejo Pages / nginx / Apache / S3** — copy `dist/` anywhere and serve it as plain files. No rewrite rules, no SPA fallback, no MIME surprises beyond `.js`, `.css`, `.html`.
- **Offline / a single file** — hand someone `dist-single/index.html`.

## Regenerating the data

`src/data/*.json` is generated from the repository and committed, so the site builds without Python:

```sh
python3 site/scripts/build-data.py   # rewrites site/src/data/{classes,matrix,glossary,meta,instances}.json
python3 site/scripts/test_data.py    # the generator's own count/shape assertions
cd site && npm run check             # re-validates the contract from the app side
```

Sources: `guide/classes/<class>/*.md` (the player-facing class guides), `guide/instances/*.md` (dungeon and raid pages), `synthesis/classes/**` (Markdown playbooks, class READMEs, leveling guides, gear), `structured/classes/**` (per-spec YAML and the spec-role matrix), `structured/discord/evidence-<channel>.jsonl` (the verbatim Discord messages behind citations), `structured/glossary.jsonl`. The generator strips the H1, keeps H3 content inside its H2 section, and never rewrites prose.

### Guide pages

A class that has `guide/classes/<class>/index.md` is built from its guide; every other class falls back to `synthesis/classes/<class>/`, so the site builds at every stage of the guide work:

| Site data | Guide source | Fallback |
|---|---|---|
| class summary / overview / sections | `index.md` (opening, then its H2 sections; a "Pages" section is dropped) | synthesis `README.md` |
| "What 1.18.1 changed" panel | the `index.md` H2 with "1.18.1" and "changed" | README section with "1.18.1" |
| Gaps panel | an `index.md` H2 with "gap", else the `sources.md` "Gaps" section | README "Gaps" |
| each playbook `<spec>-<role>` | the page named by `structured/classes/<class>/<spec>-<role>.yaml` → `guide:` (PvP playbooks share `pvp.md`) | `synthesis/classes/<class>/<spec>-<role>.md` |
| leveling | `leveling.md` (talent-order tables parsed as before) | synthesis `leveling.md` |
| Sources page `#/class/<slug>/sources` | `sources.md` | — |
| extra pages `#/class/<slug>/guide/<page>` | any other page no YAML points at (e.g. `warlock-tank.md`) | — |

Guide headings are slotted with their own keyword list (`GUIDE_SECTION_KEYWORDS` in `build-data.py`: "Talent build"/"Builds" → talents, "Stat priority and caps" → stats, "Single-target rotation"/"Burst and control sequences" → single target, "AoE …" → AoE, "Enchants" and "Consumables" → their own `enchants` / `consumables` slots, "Raid notes"/"Matchups"/"Role duties" → role strategy, "Common mistakes" → mistakes); the opening before the first H2 becomes `overview`. Everything else lands in `extraSections` ("More from this guide"), so nothing is dropped. Relative links between guide pages become site routes; links to files that exist elsewhere in the repository go to GitHub; links to pages not in the repository yet keep only their text.

Discord citations `[[d:<channel>#<id>]]` (in guide pages, synthesis Markdown and YAML) become chips showing `author · date`, with the first 300 characters of the message as the hover title, linking to `https://github.com/stevemcqueenz/turtle-knowledge-base-/blob/main/structured/discord/evidence-<channel>.jsonl#L<line>`. An id that is not in the evidence file renders as a neutral dashed `#channel` chip and is counted in the build output. `talents.turtlecraft.gg` is offline: its codes stay code, never links.

### Dungeon and raid pages

`guide/instances/index.md` and the pages it links become `src/data/instances.json`: `{title, intro, sourceFile, groups, pages}`. `groups` are the index's H2 sections (Dungeons, Raids) as Markdown plus the page slugs each links to; each page is `{slug, title, kind: "dungeon"|"raid"|null, group (the index H3 it is listed under), intro, sections, sourceFile}`, with section ids made unique per page. Kind and group come from where the index links the page. Citations and links go through the same transform as the class guides: `[[d:…]]` become chips, links between instance pages, from instance pages to class pages and from class pages (`../../instances/<slug>.md`) to instances become site routes. `meta.json` gains `instanceCounts` and `unwrappedLinks` (relative links whose target is missing, kept as text). The file is optional: without `guide/instances/index.md` it is not written and the app shows no instance pages (the fixtures have none).

During development, before the guide pages are copied into this checkout, point the generator at another checkout:

```sh
python3 site/scripts/build-data.py \
  --guide-dir ../kb/guide --structured-dir ../kb/structured
# or: TKB_GUIDE_DIR=../kb/guide TKB_STRUCTURED_DIR=../kb/structured python3 site/scripts/build-data.py
```

`--structured-dir` overrides only `structured/classes/**` and `structured/discord/**`, file by file (anything it lacks, e.g. `gear.yaml`, comes from this repository). Rerun the plain command once `guide/` and the final evidence files are committed: the evidence line numbers in the chip links must match the committed files. YAML with unresolved merge-conflict markers stops the build with a message naming the file.

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
                             GearPage, GuideDocPage, InstancesPage, InstancePage,
                             MatrixPage, AboutPage, NotFound
```

## Routes

| Route | Page |
|---|---|
| `#/` | class grid, search, matrix teaser |
| `#/class/<slug>` | role tabs, spec cards with standing / agreement / patch-validity badges, coverage table, 1.18.1 changes, gaps |
| `#/class/<slug>/<spec>-<role>` | full playbook with structured widgets and citations |
| `#/class/<slug>/leveling` | leveling guide: spec verdicts, talent-order timeline, what to press, stats, route, hardcore |
| `#/class/<slug>/gear` | gear by spec and bracket (only when gear data exists) |
| `#/class/<slug>/sources` | the class guide's sources page (guide classes only) |
| `#/class/<slug>/guide/<page>` | a guide page no spec playbook claims (e.g. warlock tanking) |
| `#/instances` | Dungeons & Raids: the instance index, one card per group (Dungeons, Raids) with its tables |
| `#/instances/<slug>` | one dungeon or raid page, with sticky section tabs and previous/next within its kind |
| `#/matrix` | full spec × role matrix (one card per class on a phone), coverage and matrix documents in collapsibles |
| `#/about` | data provenance, source tiers, counts, timeline |

## Conventions

- Dark theme by default, light toggle persisted in `localStorage`; class and status colors are darkened or lightened per theme so text keeps a 4.5:1 contrast ratio.
- Responsive to 360 px — below `sm` the header collapses Dungeons & Raids, Matrix, About, Glossary and the theme toggle into a "More" menu so it stays one row. Keyboard accessible (skip link, roving tab strips, focus-trapped dialogs, visible focus), `prefers-reduced-motion` respected.
- Markdown is rendered with `marked` and sanitized with DOMPurify; inline `[author (tier), date](url)` links become citation chips that keep their link, and the Discord chips emitted by `build-data.py` (`<a class="cite cite-discord">`) pass the sanitizer unchanged. YAML text shown in widgets renders its `[[d:…]]` citations through `CitedText` using each class's `citations` map.
- Archive jargon (the Class Changes passes, the era labels, standing / contested / player claim, opaque build links) gets a glossary tooltip on its first mention in a guide's block prose, opened by click, tap or keyboard focus. The rules live in `src/lib/glossary-inline.ts`; the wording comes from `structured/glossary.jsonl` like the rest of the prose.
- YAML from `structured/classes/**` is passed through as-is; unknown shapes fall back to a compact key/value list rather than being dropped.
