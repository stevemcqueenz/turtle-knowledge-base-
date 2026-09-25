# Turtle WoW class guides (site)

A static site over this repository's class guides for Turtle WoW's final patch, 1.18.1: how the community played every class, distilled from a full read of the archived Discord (1.18.1 era) plus the forum and wiki, with every claim linked to the verbatim message it came from. Pick a class or a goal, get the short answer and the ratings first, then the full guide, the leveling path, the dungeon and raid pages, and a machine-readable playbook per spec for bot developers.

Vite + React 18 + TypeScript + Tailwind CSS, with shadcn/ui-style components (Radix primitives, `class-variance-authority`, `tailwind-merge`, `cmdk`, `lucide-react`) and the Inter variable font bundled from `@fontsource-variable/inter`. No backend, no runtime network calls, no external fonts or CDN scripts, The only game artwork is extracted from the Turtle WoW client and bundled locally: the instance maps (minimap textures) and the class, talent-tree, talent and spell icons (see **Icons** below). All prose comes from the generated JSON in `src/data/`; the only hand-written strings are UI labels.

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

The single-file build inlines the JS, CSS, font and JSON into one HTML file (~13 MB) that opens from `file://` with zero network requests — useful for previews, archives and offline reading. It leaves out the instance maps (separate image files under `public/maps/`, ~7.6 MB): its instance pages show a one-line note instead (`VITE_SINGLE_FILE`, `publicDir: false` in `vite.config.single.ts`). The icon sprite sheets (`public/icons/`, ~1 MB) are inlined as `data:` URIs by `gameIcons({ inline: true })`, so the single file keeps every icon with no requests; if a sheet were missing, the slots fall back to initials and lucide glyphs.

## Design (v2, 2026-09)

A WoW-native docs/data app rather than a landing page: think Wowhead or Warcraft Logs. The v1 "field manual" (serif display type, parchment and brass, tracked-caps eyebrows, stat counters) is gone.

- **App shell.** A top bar (the turtle logo, the site name, the ⌘K / Ctrl K / `/` search palette, theme toggle, repository link), a collapsible left sidebar (site pages; dungeons and raids grouped Raids / Dungeons; a **General** group with every general guide: Professions, PvP, Client setup, Server mechanics; every class with its specs, leveling, PvP, professions and sources, the current class opened), the content column, and an "On this page" list on the right from `xl` up (a sticky dropdown under the top bar below that). Phones get the sidebar as a Sheet. The sidebar state is kept in `localStorage` (`twow-sidebar`). The top bar's bottom edge is an experience bar: reading progress in the game's XP purple with its twenty segment ticks.
- **Tokens.** shadcn-style HSL variables in `src/index.css`: dark by default (a deep neutral slate), a crisp cool light theme. Sentence-case headings in Inter, tabular numbers wherever numbers line up, 6 px radii, flat bordered panels, subtle motion only (all disabled under `prefers-reduced-motion`).
- **Class colors** are the official palette (`tailwind.config.js`); on a class's pages they become `--cc` (tuned for text contrast per theme in `lib/theme.ts`), `--cc-raw` (the game color) and `--cc-ink` (text on a class-color fill). Class emblems are the in-game class icons in an action-button frame rimmed in the class color (`components/ui/ClassMark.tsx`; a lucide glyph when the icon is missing); spec pages add the talent tree's icon as a corner badge, spec rows and sidebar spec links show it too.
- **Ratings are item-quality badges** (`components/ui/Grade.tsx`): S legendary #ff8000, A epic #a335ee, B rare #0070dd, C uncommon #1eff00, D/none poor #9d9d9d, as text on a faint fill of the same color, with darker per-theme text values for AA contrast in light mode (`--q-*`). `*` marks a contested rating.
- **In-game tooltips.** Citations, glossary terms, ratings (Radix HoverCard) and talents (Radix Tooltip) open a navy panel with a thin light border, gold title, white body and grey meta line (`.wow-tt`), identical in both themes.
- **The talent frame** (`components/talents/TalentGrid.tsx`): square slots on the 4 × 7 grid showing the talent's in-game icon (greyed at 0 points as in game, initials when an icon is missing), the tree icon in each header, the rank in the bottom-right corner (green while partly spent, gold when maxed, grey at 0), gold arrows for met prerequisites, locked tiers dimmed, tree totals in the headers (tabs on phones), and the game's talent tooltip (rank, tier and prerequisite lines, red when unmet) on hover or focus.
- **Ability names** written as `code` in the guides render like chat spell links (`#71d5ff`, `code.spell`, set in `lib/markdown.ts`); real links are underlined.
- **Citations are quiet.** A run of adjacent citation chips becomes one small marker (a diamond, or a count). Hover or focus shows the in-game tooltip with each message's author, channel, date and verbatim text and a link to its evidence line; click/tap unfolds the chips inline (`lib/markdown.ts` `groupCitations`, `lib/cite-popover.ts`, `components/CitedText.tsx`).
- **Loading** states are a cast bar; unknown routes print the game's red error line.

### Components

`src/components/ui/` holds the shadcn-style primitives, copied in and styled with the tokens: `button`, `badge`, `tabs` (underline and segmented variants), `accordion`, `hover-card`, `tooltip`, `scroll-area`, `toggle`, `toggle-group`, `table`, `separator`, `breadcrumb`, `select`, `dropdown-menu`, `dialog`, `sheet`, `command` (cmdk), `collapsible`, `kbd`, `panel`, plus the site's own `Grade` (quality badge), `ClassMark` and `CopyButton`. Domain components: `layout/` (Topbar with the XP bar, Sidebar, Page / PageHeader / Section, Toc and MobileToc), `class/` (ViabilityMatrix with rating tooltips, ClassNav, RoleIcon), `talents/TalentGrid`, `playbook/` (BuildCard with the build switcher, StatsCard, PriorityCard, ConsumablesCard, HowToPlay, BotPanel), `leveling/` (GameplayByLevel, LevelingTimeline), `InstanceMap`, `SearchDialog`, `GlossaryPanel`, `DocLayout`.

### Pages

| Route | Page |
|---|---|
| `#/` | class picker (a tile per class: emblem, best raid and leveling spec as quality badges, its spec pages), "By goal" (Level, Raid DPS, Tank, Heal, PvP, Farm as a segmented control over a ranked list, plus quick links to Dungeons & raids, the general guides that exist (Professions, PvP, Client setup, Mechanics) and the Viability board), leveling guides and raids on the side, one provenance line |
| `#/class/<slug>` | header with the class's page strip (overview, specs, leveling, PvP, professions, sources), the recommendation, **ratings by activity** (specs × raid/dungeon/PvP/leveling/open world as quality badges; hover for the reason as an in-game tooltip, select for the full reasoning with citations; one row per spec on phones), specs and guides (with leveling and the class professions page), then every other section of `index.md` (1.18.1 changes, races, professions … with a link to the professions page) |
| `#/class/<slug>/<spec>-<role>` | header (role, build split, the spec's ratings), the recommendation, **At a glance** (fact table and the **recommended build in the talent frame** with "Open in talent calculator" and a switcher over every build the guide links), **How to play** (the guide's `## How to play` loop as a numbered track: each step's bold lead-in as its title, "Back to step n" at the end), priorities and stats (single-target priority, stat priority and caps, consumables), then the rest of the guide in its own order, **For bots** (tabs: the playbook's keys, `play_loop`, `leveling_gameplay`, `talents`, the full JSON; download, copy, YAML source). PvP pages have the same layout. |
| `#/class/<slug>/leveling` | **Gameplay by level** first: a segmented control over the `### Levels 1–9 … 50–60` brackets, each bracket as blocks (new abilities split into a level list, single target, multi-target, tanking, healing, pet …, from the bullets' bold lead-ins), extra H3s (AoE farming, other paths) after it; then the **talent path** (a tab per path, 10→60 timeline with rank bars and respec markers, the talent frame with a level slider that replays the order, the guide's table one click away), then every other section |
| `#/class/<slug>/professions` | the class professions page (`guide/classes/<class>/professions.md`) with a link to the overview; the old `#/class/<slug>/guide/professions` still works |
| `#/professions` | the professions overview (`guide/professions.md`), a general guide: its recommendation, links to every class professions page, then its sections (who wants what, primary and secondary professions, races, gold, gaps) |
| `#/pvp`, `#/client-setup`, `#/mechanics`, `#/<name>` | the other general guides: every top-level `guide/<name>.md` (`pvp.md`, `client-setup.md`, `server-mechanics.md` → `#/mechanics`, any new one → `#/<name>`), each its recommendation as the lead, its sections with the "On this page" list, Discord chips and citation tooltips. A route exists only when its file does; an unknown one-segment path shows "Nothing at this address" |
| `#/class/<slug>/sources`, `#/class/<slug>/guide/<page>` | standalone guide pages |
| `#/class/<slug>/gear` | forum-era gear lists (research archive) |
| `#/instances` | dungeon and raid index as tiles (map thumbnail, level, size, patch, zone, opening line), filter by kind |
| `#/instances/<slug>` | the **map** first (floor tabs, numbered boss markers linking to the boss notes, click to enlarge with zoom and drag-to-pan, provenance line), then the sections; bosses are anchored blocks (`boss-<name>`) headed by their map number, with a sticky "Highlight: Everyone / Tanks / Healers / DPS" control that dims lines not mentioning the role |
| `#/matrix` (`?by=raid|dungeon|pvp|leveling|farming`) | **viability board**: a tier list per activity (S/A/B/C rows, hover a spec for its reason), then every rating in one table |
| `#/glossary` | every glossary term, filterable by text and category (the glossary sheet opens from search results) |
| `#/archive` | the forum-era spec × role matrix and coverage notes (superseded, kept) |
| `#/about` | what this is, how it was made, reading a citation, for bot developers, the 1.18.1 timeline, sources |

Any route accepts `?s=<section id>`: the page scrolls to that section once loaded (search uses it for section and boss results).

Search (⌘K / Ctrl K / `/`) is a cmdk palette over classes, spec guides and every section heading, leveling guides and their sections, class-page sections, every general guide (professions, PvP, client setup, server mechanics) and its section headings, instance pages and every boss, the glossary and the site's pages, grouped by kind, all from the core module.

### Loading

`scripts/data-plugin.mjs` (a Vite plugin) serves the generated JSON as virtual modules: a small **core** (per-class summaries: recommendation, viability table, spec list with section headings; the instance index with boss names; each general guide's route, title and headings; glossary; meta) bundled with the app, and one lazily loaded chunk per class, one per general guide (`virtual:twow-guide/<slug>`), one for the instance pages and one for the archive matrix. First load is ~900 kB of JS (~260 kB gzipped, the UI primitives included) plus 58 kB of CSS and the Latin subset of Inter (48 kB) instead of the whole 13 MB of data; hovering a class link prefetches its chunk. `src/data/*.json` stays the single, tested contract; the plugin only projects and splits it. The single-file build inlines every chunk and the font.

## Checks

```sh
npm run check            # tsc --noEmit + eslint + the data-contract validator
npm run smoke            # server-renders every route (157) and fails on any error
npm run smoke -- --fixtures
node scripts/check-data.mjs --fixtures
```

`npm run check` is offline and needs no browser: `scripts/check-data.mjs` validates `src/data/*.json` against the contract in `PLAN.md` §2 and §10 (shapes, enums, section keys, cross-references, viability cells, decoded builds against the talent trees, leveling paths, and `meta.counts` against the real counts) and exits non-zero on any violation. `npm run smoke` builds an SSR bundle, preloads every data chunk and renders home, the viability board, archive, about, every class, leveling, gear, playbook and guide page, the dungeon and raid index and every instance page, plus unknown routes, asserting that each produces content: class pages carry the viability matrix and every section, spec pages the at-a-glance block, the calculator link of their build, every guide section and the bot playbook; leveling pages the talent path and every section; instance pages every section and boss anchor; leveling pages a tab and a panel per "Levels X–Y" bracket of Gameplay by level with its New now and Single target blocks; spec pages "How to play" (with its loop) and the `play_loop` / `leveling_gameplay` bot tabs; every general guide (`#/professions`, `#/pvp`, `#/client-setup`, `#/mechanics`, only those in the data) its heading, sections, TOC, sidebar entry and chips, home its quick links and the General group, `#/professions` and every `#/class/<slug>/professions` page their cross-links; class pages the quality badges and the professions link; `#/glossary` its terms; no page shows a raw `[[d:…]]` citation or a `.md` href. `scripts/test_data.py` and `check-data.mjs` also check `instances.json`: pages match `guide/instances/*.md`, every index link resolves, no raw citations or dangling relative `.md` links, and no class guide links to an instance page on GitHub.

## Hosting

- **GitHub Pages (project path)** — build in `site/` and publish `site/dist`. `public/.nojekyll` is copied into the build so paths starting with an underscore are served. Nothing else is needed; relative asset URLs and hash routing handle the sub-path.
- **Forgejo Pages / nginx / Apache / S3** — copy `dist/` anywhere and serve it as plain files. No rewrite rules, no SPA fallback, no MIME surprises beyond `.js`, `.css`, `.html`.
- **Offline / a single file** — hand someone `dist-single/index.html`.

## Regenerating the data

`src/data/*.json` is generated from the repository and committed, so the site builds without Python:

```sh
python3 site/scripts/build-data.py   # rewrites site/src/data/{classes,matrix,glossary,meta,instances,guides}.json
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
| class professions `#/class/<slug>/professions` | `professions.md` (a guide page like the extra pages, with its own route) | — |
| general guides `#/<slug>` | every top-level `guide/<name>.md` → `src/data/guides.json` (`{guides: [GuideDoc + route + recommendation]}` in reading order professions, pvp, client-setup, server-mechanics, then alphabetical; optional, like `instances.json`). The route slug is the file name except `server-mechanics` → `mechanics` (`GENERAL_GUIDE_ROUTE_SLUGS`); `index.md`/`README.md` and names that collide with a site route are skipped. Links to and from class and instance pages become routes | — |

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

**Icons.** `tools/icons/extract_icons.py` (run locally against the client, output committed; `python3 -m venv /tmp/iconvenv && /tmp/iconvenv/bin/pip install Pillow && /tmp/iconvenv/bin/python tools/icons/extract_icons.py`, ~5 s) reads the client archives with `tools/maps/mpq.py` (patches win) and resolves Talent.dbc → rank-1 spell → Spell.dbc SpellIconID → SpellIcon.dbc → `Interface\Icons\*.blp`, TalentTab.dbc SpellIconID for the tree icons, the character-create class atlas for the class icons, and every non-passive spell the class skill lines teach (SkillLineAbility × SkillRaceClassInfo, plus warlock/hunter pets and the talents) for spell names; names whose ranks use different icons (Slam, Heal, Lightning Shield ...) are left out as ambiguous. Each icon is the 64 px texture minus its 4 px frame (56 px, not resampled), packed into `public/icons/<class>.webp` (the talents and spells of one class, ~100 KB each, fetched on that class's pages) and `common.webp` (the 9 class and 27 talent-tree icons, 50 KB), with `public/icons/manifest.json` mapping class slug / TalentTab id / tree name / Talent id / spell name to a sheet cell; ~1 MB in total. `scripts/icons-plugin.mjs` serves the manifest as `virtual:game-icons` (sheet URLs relative, or `data:` URIs in the single-file build); `lib/icons.ts` looks icons up and `components/ui/GameIcon.tsx` draws one cell in a fixed box (no layout shift; the sheet is fetched only when an icon from it is on screen, and on a load error the caller's fallback renders). `build-data.py` adds the client `id` to every talent and tab of `talentTree`. Spell icons appear in front of ability names written as `code` on spec pages and in Gameplay by level (exact name, or a name followed by lower-case words), and in the single-target priority list (spell names in the step text, case-sensitive, longest first). `test_data.py` fails unless every talent, tree and class has an icon and the folder stays under 3 MB, and prints the talent and rotation spell-name coverage.

Icons are Blizzard Entertainment assets extracted from the World of Warcraft (Turtle WoW 1.18.1) game client, used for a non-commercial fan guide.

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
  tailwind.config.js         shadcn tokens, class colors, item-quality colors
  scripts/build-data.py      data generator (repo -> src/data/*.json)
  scripts/data-plugin.mjs    Vite plugin: core module + lazy chunks
  scripts/test_data.py       generator tests
  scripts/check-data.mjs     contract validator used by `npm run check`
  scripts/smoke.mjs          offline route crawl (SSR)
  src/index.css              tokens, prose, citation / tooltip / talent-frame / map styles
  src/types.ts               TypeScript view of the data contract
  src/data/                  generated JSON + fixtures + loader
  src/lib/                   router, theme, markdown, search, grades, leveling,
                             instances, citations, cite-popover, glossary tooltips, utils (cn)
  src/components/ui/         shadcn-style primitives + Grade, ClassMark, CopyButton, panel
  src/components/layout/     Topbar (XP bar), Sidebar, Page/PageHeader/Section, Toc
  src/components/class/      ViabilityMatrix, ClassNav, RoleIcon
  src/components/talents/    TalentGrid (the talent frame)
  src/components/playbook/   Glance (build card, stats, priority, consumables), HowToPlay, BotPanel
  src/components/leveling/   GameplayByLevel, LevelingTimeline
  src/pages/                 Home, ClassPage, PlaybookPage, LevelingPage, GuideDocPage,
                             GeneralGuidePage (#/professions, #/pvp, ...), GearPage, InstancesPage, InstancePage,
                             MatrixPage (viability board), GlossaryPage, ArchivePage, AboutPage, NotFound
```

## Conventions

- Dark theme by default, light toggle persisted in `localStorage`; class and quality colors are tuned per theme so text keeps a 4.5:1 contrast ratio. The in-game tooltip, the talent frame and the maps stay dark in both themes.
- Responsive to 360 px: below `lg` the sidebar becomes a Sheet behind the menu button, below `xl` the "On this page" list becomes a sticky dropdown. Keyboard accessible (skip link, Radix focus management in every dialog, sheet, menu, tab list and toggle group, visible focus rings, tooltips on focus), `prefers-reduced-motion` respected.
- Markdown is rendered with `marked` and sanitized with DOMPurify; inline `[author (tier), date](url)` links become citation chips that keep their link, and the Discord chips emitted by `build-data.py` (`<a class="cite cite-discord">`) pass the sanitizer unchanged. YAML text shown in widgets renders its `[[d:…]]` citations through `CitedText` using each class's `citations` map.
- Archive jargon (the Class Changes passes, the era labels, standing / contested / player claim, opaque build links) gets a glossary tooltip on its first mention in a guide's block prose, opened by click, tap or keyboard focus. The rules live in `src/lib/glossary-inline.ts`; the wording comes from `structured/glossary.jsonl` like the rest of the prose.
- YAML from `structured/classes/**` is passed through as-is; unknown shapes fall back to a compact key/value list rather than being dropped.
- Screenshots of the v2 design (1440 and 390 px, dark and light) are in `staging/redesign-v2-screens/` of the workspace; `qa/screenshots/` holds the v1 ones.
