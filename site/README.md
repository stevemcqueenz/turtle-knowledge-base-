# Turtle WoW Field Manual (class guide site)

A static site over this repository's class guides for Turtle WoW's final patch, 1.18.1: how the community played every class, distilled from a full read of the archived Discord (1.18.1 era) plus the forum and wiki, with every claim linked to the verbatim message it came from. Pick a class or a goal, get the short answer and the ratings first, then the full guide, the leveling path, the dungeon and raid pages, and a machine-readable playbook per spec for bot developers.

Vite + React 18 + TypeScript + Tailwind CSS. No backend, no runtime network calls, no external fonts or CDN scripts, and no game artwork apart from the instance maps (rendered from the client's own minimap textures, see below). All prose comes from the generated JSON in `src/data/`; the only hand-written strings are UI labels.

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

The single-file build inlines the JS, CSS and JSON into one HTML file (~10.7 MB) that opens from `file://` with zero network requests — useful for previews, archives and offline reading. It leaves out the instance maps (separate image files under `public/maps/`, ~7.6 MB): its instance pages show a one-line note instead (`VITE_SINGLE_FILE`, `publicDir: false` in `vite.config.single.ts`).

## Design

"Field manual of an archived server": warm ink on parchment (light) or lamplit leather (dark, the default), a brass accent for the archive, each class's own color on its pages, a book face (system serif stack: Iowan Old Style / Palatino / Charter / Georgia / Noto Serif, nothing downloaded) for headings and the system sans for reading. No game artwork: classes are monograms in their color, talents are typography. The one exception is the dungeon and raid maps, which are the client's minimap textures on a fixed dark backdrop (`--c-map-bg`) in both themes.

- **Fast answers first.** Every class, spec and leveling page opens with "The short answer" (the guide's own **Recommendation:** paragraph) and its ratings; the full guide follows with a sticky table of contents (sidebar on desktop, a sticky chip bar on phones) that tracks the section being read.
- **Ratings** are the guide's S/A/B/C letters on a one-hue brass scale (letter always visible, `*` = contested, dashed `—` = not a role).
- **Citations are quiet.** A run of adjacent citation chips becomes one small superscript marker (a dot, plus a count when several). Hover or keyboard focus shows a popover with each message's author, channel, date and verbatim text and a link to its evidence line; click/tap unfolds the original chips inline. (`lib/markdown.ts` `groupCitations`, `lib/cite-popover.ts`, `components/CitedText.tsx`.)
- Tokens live in `src/index.css` (`--c-*`, `--g-*` grade scale); every text color clears 4.5:1 in both themes.

### Pages

| Route | Page |
|---|---|
| `#/` | purpose and provenance, search, the nine classes (best raid and leveling spec each, from the guide), "Best picks by goal" (level, raid DPS, tank, heal, PvP, farm; dungeons & raids), how to read citations, the bot playbooks |
| `#/class/<slug>` | short answer, "Go to" list, **viability matrix** (specs × raid/dungeon/PvP/leveling/open world; select a rating to read the guide's reasoning with its citations; cards on phones), spec guide cards, then every other section of `index.md` (1.18.1 changes, races, professions …) |
| `#/class/<slug>/<spec>-<role>` | short answer + the spec's ratings; **At a glance**: fact table (role, difficulty, strengths, weaknesses), **recommended build as a native talent grid** with "Open in talent calculator" and a switcher over every build the guide links, stat priority + caps, the numbered single-target priority (copyable), consumables and enchants; then the full guide in its own section order; **For bots** (the YAML playbook as JSON: copy, download, link to the YAML) |
| `#/class/<slug>/leveling` | short answer and leveling ratings, then the guide's sections with the talent-order tables replaced by the **talent path**: one tab per path, a 10→60 timeline in ten-level bands with rank bars and respec markers, and a talent grid with a level slider that replays the order (the guide's tables stay one click away) |
| `#/class/<slug>/sources`, `#/class/<slug>/guide/<page>` | standalone guide pages with a table of contents |
| `#/class/<slug>/gear` | forum-era gear lists (research archive) |
| `#/instances` | dungeon and raid index as cards (map thumbnail, level, size, patch, zone, opening line), filter by kind |
| `#/instances/<slug>` | instance page; the **map** first (floor tabs, numbered boss markers linking to the boss cards, click to enlarge with zoom and drag-to-pan, provenance line), then boss sections become one card per boss (anchors `boss-<name>`, listed under "Bosses" in the TOC) with a sticky "highlight lines for Tanks / Healers / DPS" filter that dims boss notes not mentioning the role |
| `#/matrix` (`?by=raid|dungeon|pvp|leveling|farming`) | **viability board**: all classes' specs as a tier list per activity, plus the full ratings table |
| `#/archive` | the forum-era spec × role matrix and coverage notes (superseded, kept) |
| `#/about` | provenance, method, how to read citations, bots, the 1.18.1 timeline |

Any route accepts `?s=<section id>`: the page scrolls to that section once loaded (search uses it for section and boss results).

Search (`/`, Ctrl K / ⌘K) covers classes, spec guides and every section heading, leveling guides and their sections, class-page sections, instance pages and every boss, the glossary, and the site's pages, all from the core module.

### Loading

`scripts/data-plugin.mjs` (a Vite plugin) serves the generated JSON as virtual modules: a small **core** (per-class summaries: recommendation, viability table, spec list with section headings; the instance index with boss names; glossary; meta) bundled with the app, and one lazily loaded chunk per class, one for the instance pages and one for the archive matrix. First load is ~650 kB of JS (~180 kB gzipped) instead of the whole 10 MB of data; hovering a class link prefetches its chunk. `src/data/*.json` stays the single, tested contract; the plugin only projects and splits it. The single-file build inlines every chunk.

## Checks

```sh
npm run check            # tsc --noEmit + eslint + the data-contract validator
npm run smoke            # server-renders every route and fails on any error
npm run smoke -- --fixtures
node scripts/check-data.mjs --fixtures
```

`npm run check` is offline and needs no browser: `scripts/check-data.mjs` validates `src/data/*.json` against the contract in `PLAN.md` §2 and §10 (shapes, enums, section keys, cross-references, viability cells, decoded builds against the talent trees, leveling paths, and `meta.counts` against the real counts) and exits non-zero on any violation. `npm run smoke` builds an SSR bundle, preloads every data chunk and renders home, the viability board, archive, about, every class, leveling, gear, playbook and guide page, the dungeon and raid index and every instance page, plus unknown routes, asserting that each produces content: class pages carry the viability matrix and every section, spec pages the at-a-glance block, the calculator link of their build, every guide section and the bot playbook; leveling pages the talent path and every section; instance pages every section and boss anchor; no page shows a raw `[[d:…]]` citation or a `.md` href. `scripts/test_data.py` and `check-data.mjs` also check `instances.json`: pages match `guide/instances/*.md`, every index link resolves, no raw citations or dangling relative `.md` links, and no class guide links to an instance page on GitHub.

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

Sources: `guide/classes/<class>/*.md` (the player-facing class guides; the primary source of everything summarised on the site), `structured/talents/talent-trees.json` (the 1.18.1 talent trees), `guide/instances/*.md` (dungeon and raid pages), `synthesis/classes/**` (Markdown playbooks, class READMEs, leveling guides, gear), `structured/classes/**` (per-spec YAML and the spec-role matrix), `structured/discord/evidence-<channel>.jsonl` (the verbatim Discord messages behind citations), `structured/glossary.jsonl`. The generator strips the H1, keeps H3 content inside its H2 section, and never rewrites prose.

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

### Guide summaries (the at-a-glance data)

All summary UI is driven by the guide pages, not the forum-era synthesis. `build-data.py` ("Guide summaries" block) adds:

| Field | From |
|---|---|
| `ClassEntry.recommendation` | the `index.md` opening's **Recommendation:** paragraph and the list right after it (else its first paragraph and list) |
| `ClassEntry.viability` `{heading, columns, rows[{spec, detail, route, playbookId, role, cells[{key, grade, label, note, contested}]}], legend, notes}` | the `index.md` table whose header has Raid and Leveling. The first letter grade in a cell (`S`, `A-`, `B–C` → `B`) is `grade`, the rest of the cell (Markdown, citations as chips) is `note`; `—`, `n/a`, "Niche", "Not a PvP spec" have no grade. A row links to its spec page by its own link or by the guide page named like the spec; rows that rate nothing ("Healer — — —") are dropped. |
| `ClassEntry.talentTree` `{tabs[{name, talents[{name,row,col,max,req}]}]}` | `structured/talents/talent-trees.json`, in the calculator's talent order |
| `Playbook.builds[]` `{label, tag, recommended, source, url, ranks[][], totals, split}` | the playbook YAML's working calculator link (`talents.build_link_tortoise`, else `calculator` / `build_link`) first, then every other `xian55.github.io/tortoise-db-viewer` link in the guide page's talent/build sections, labelled by its H3, table row or bullet, deduplicated. Each link's `t=` digits are decoded against the talent tree (one digit per talent, per tree) and rejected if a rank exceeds its maximum or the total is not 1–51. |
| `Playbook.glance` `{recommendation, facts[{label, markdown}], rest}` | the guide page's opening: its **Recommendation:** paragraph and its `\| \| \|` fact table |
| `Playbook.sectionOrder` | the guide page's H2 order as section keys and `extra:<id>` |
| `Playbook.yamlPath` | `structured/classes/<class>/<id>.yaml` |
| `LevelingGuide.recommendation`, `LevelingGuide.paths[]` `{title, subtitle, respecAt, noRespec, steps[{from,to,talent,tree,max,rankFrom,rankTo,markdown,note,respec}], end}` | the leveling page's talent-order tables (the `talentOrders` whose rows mostly name real talents), each row resolved to its tree; `end` is the section's calculator link decoded, or the final state computed from the steps |

`structured/classes/spec-role-matrix.yaml` and `synthesis/**` are no longer used for any summary; they feed only the research archive (`#/archive`, the gear lists) and the fallback for a class without a guide.

### Dungeon and raid pages

`guide/instances/index.md` and the pages it links become `src/data/instances.json`: `{title, intro, sourceFile, groups, pages}`. `groups` are the index's H2 sections (Dungeons, Raids) as Markdown plus the page slugs each links to; each page is `{slug, title, kind: "dungeon"|"raid"|null, group (the index H3 it is listed under), intro, sections, sourceFile}`, with section ids made unique per page. Kind and group come from where the index links the page. Citations and links go through the same transform as the class guides: `[[d:…]]` become chips, links between instance pages, from instance pages to class pages and from class pages (`../../instances/<slug>.md`) to instances become site routes. `meta.json` gains `instanceCounts` and `unwrappedLinks` (relative links whose target is missing, kept as text). The file is optional: without `guide/instances/index.md` it is not written and the app shows no instance pages (the fixtures have none).

**Maps.** `tools/maps/extract_maps.py` (see `tools/maps/README.md`; needs the Turtle WoW client and the server data, so it is run locally and its output committed) renders every instance's floors from the client minimap textures into `public/maps/<slug>/<floor>.webp` (plus `thumb.webp`) and writes `scripts/maps-source.json`: per floor its label, kind (`minimap`, or `floorplan` for a navmesh-only plan), size and the unique named elites/bosses the server spawns on it. `build-data.py` (`attach_maps`) turns that into `pages[].map` = `{provenance, thumb{file,width,height}, floors[{floor, label, file, width, height, kind, markers[{n, boss, x, y, anchor}]}]}`: a boss the page names (an H3 of a boss section, a "Boss" table's first cell, a **bold** name) that matches a spawned creature becomes a numbered marker at its spawn (x, y are 0..1 fractions of the image) linking to its boss card or section. The core module carries each page's `mapThumb` for the index cards. `test_data.py` and `check-data.mjs` check that every map file exists with the stated WebP size, sizes are sane, marker numbers run 1..n, markers sit on the image and link to anchors the page renders; the smoke test checks that instance pages render the map, its floor tabs and markers.

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
  scripts/data-plugin.mjs    Vite plugin: core module + one lazy chunk per class
  scripts/test_data.py       generator tests
  scripts/check-data.mjs     contract validator used by `npm run check`
  scripts/smoke.mjs          offline route crawl (SSR)
  src/types.ts               TypeScript view of the data contract
  src/data/                  generated JSON + fixtures + loader
  src/lib/                   router, theme, markdown, search, leveling,
                             glossary tooltips, site helpers
  src/lib/                   + grades (ratings, goals), cite-popover, search
  src/components/layout/     PageHero, WithToc (sticky TOC + scrollspy), Section
  src/components/talents/    TalentGrid (3 trees × 7 × 4, pips, totals, prerequisites)
  src/components/playbook/   Glance (build card + switcher, stats, priority, consumables), BotPanel
  src/components/leveling/   LevelingTimeline (10→60 timeline, level slider)
  src/components/class/      ViabilityMatrix, RoleIcon
  src/components/ui/         ClassMark, Grade, CopyButton
  src/pages/                 Home, ClassPage, PlaybookPage, LevelingPage,
                             GearPage, GuideDocPage, InstancesPage, InstancePage,
                             MatrixPage (viability board), ArchivePage, AboutPage, NotFound
```

## Conventions

- Dark theme by default, light toggle persisted in `localStorage`; class colors are darkened or lightened per theme so text keeps a 4.5:1 contrast ratio.
- Responsive to 360 px — below `lg` the header keeps brand, search and a menu button; the menu holds the class grid, the other pages, the glossary and the theme. Keyboard accessible (skip link, focus-trapped dialogs, visible focus, citation popovers on focus, `aria-pressed`/`aria-selected` on every toggle), `prefers-reduced-motion` respected.
- Markdown is rendered with `marked` and sanitized with DOMPurify; inline `[author (tier), date](url)` links become citation chips that keep their link, and the Discord chips emitted by `build-data.py` (`<a class="cite cite-discord">`) pass the sanitizer unchanged. YAML text shown in widgets renders its `[[d:…]]` citations through `CitedText` using each class's `citations` map.
- Archive jargon (the Class Changes passes, the era labels, standing / contested / player claim, opaque build links) gets a glossary tooltip on its first mention in a guide's block prose, opened by click, tap or keyboard focus. The rules live in `src/lib/glossary-inline.ts`; the wording comes from `structured/glossary.jsonl` like the rest of the prose.
- YAML from `structured/classes/**` is passed through as-is; unknown shapes fall back to a compact key/value list rather than being dropped.
