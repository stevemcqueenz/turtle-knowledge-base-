# Turtle WoW class guide site: plan and contract

Goal: a modern, fast website where you pick a class and see the community-favored specs per role, full playbooks (talents, stats, rotations, cooldowns, role strategy, gear, common mistakes), leveling guides, and the evidence behind every claim. Content comes only from this repository (`synthesis/classes/**`, `structured/classes/**`, `structured/glossary.jsonl`); nothing is invented at build time.

## 1. Architecture

- **Static site, no backend.** Vite + React 18 + TypeScript + Tailwind CSS. Client-side hash routing (`#/`, `#/class/warrior`, `#/class/warrior/protection-tank`, `#/class/warrior/leveling`, `#/matrix`, `#/about`) so it works from any static host and from a single HTML file.
- **Data is generated, not hand-written.** `site/scripts/build-data.py` reads the repo and writes `site/src/data/*.json`. The React app imports those JSON files; Markdown sections are rendered client-side with `marked` (sanitized with DOMPurify) inside styled containers.
- **Two build outputs.** `npm run build` writes `site/dist/` (multi-file, for Forgejo/GitHub Pages or any static server). `npm run build:single` uses `vite-plugin-singlefile` to write `site/dist-single/index.html`, a self-contained file (all JS/CSS/JSON inlined, no external requests) under 16 MB for previews.
- **No external assets at runtime.** System font stack (Inter if installed, else system UI), inline SVG icons, no Blizzard artwork. Class colors are the standard class colors (see §4).
- **Repo location**: everything under `site/`. `site/src/data/` is generated and committed so the site builds without Python.

## 2. Data contract (`site/src/data/`)

All JSON is UTF-8. Markdown strings are GitHub-flavored Markdown exactly as in the repo (links, tables, bold), with the one H1 removed; citations remain inline as `[author (authority), date](url)`.

### `classes.json`: array of `ClassEntry`, one per class, ordered as in §4

```
ClassEntry {
  slug: "warrior" | "paladin" | "hunter" | "rogue" | "priest" | "shaman" | "mage" | "warlock" | "druid",
  name: string,                       // "Warrior"
  color: string,                      // hex, see §4
  summary: string,                    // first paragraph of synthesis/classes/<class>/README.md after the H1 (Markdown)
  readme: Section[],                  // all H2 sections of README.md in order (coverage table, 1.18.1 changes, gaps, open questions ...)
  matrix: MatrixRow[],                // rows for this class from structured/classes/spec-role-matrix.yaml
  playbooks: Playbook[],              // one per synthesis/classes/<class>/<spec>-<role>.md, ordered: tank, healer, melee-dps, ranged-dps, pvp; then by spec name
  leveling: { sections: Section[], sourceFile: string } | null,
  gaps: string | null,                // Markdown of the README section whose heading contains "Gap" (also present in readme[])
  patchChanges: string | null         // Markdown of the README section whose heading contains "1.18.1" (also present in readme[])
}

Section { id: string (slug of heading), heading: string (text without #), level: 2|3, markdown: string }

MatrixRow { spec, role, standing: "favored"|"alternative"|"niche"|"not-viable", agreement: string|null,
            source_quality: string|null, playbook_path: string|null, yaml_path: string|null, notes: string|null }

Playbook {
  id: string,                         // "<spec>-<role>" from the filename, e.g. "protection-tank", "feral-melee-dps"
  spec: string,                       // "Protection" (title-cased from filename; use YAML `spec` when present)
  role: "tank"|"healer"|"melee-dps"|"ranged-dps"|"pvp",
  roleLabel: string,                  // "Tank", "Healer", "Melee DPS", "Ranged DPS", "PvP"
  title: string,                      // the file's H1 text
  intro: string,                      // Markdown between the H1 and the first H2 (may be "")
  sections: {                         // matched by keyword on the H2 heading text, case-insensitive; null when absent
    overview, talents, stats, rotationSingle, rotationAoe, cooldowns, roleStrategy, gear, mistakes, sources: Section | null
  },
  extraSections: Section[],           // H2 sections that matched none of the keywords (e.g. "Official kit (staff)"), in document order
  standing: MatrixRow | null,         // the matrix row with the same spec+role, if any
  yaml: PlaybookYaml | null           // parsed structured/classes/<class>/<id>.yaml, passed through as-is (see AGENTS.md §2 for its shape)
}
```
Heading keyword rules (first match wins, applied to the lowercase heading): `overview` → overview; `talent` → talents; `stat` → stats; `single-target` or `single target` → rotationSingle; `multi-target`, `multi target`, `aoe` → rotationAoe; `cooldown` or `resource` → cooldowns; `role strategy`, `strategy`, `triage`, `threat`, `tactics` → roleStrategy; `gear`, `enchant`, `consumable`, `best-in-slot`, `bis` → gear; `mistake` → mistakes; `source` → sources. Sections of level 3 stay inside their parent level-2 section's Markdown (do not split them out).

`PlaybookYaml` fields the UI relies on (all optional, render only when present): `agreement` ("consensus"|"single"|"contested"), `patch_validity {written_for, valid_for_1181 (true|false|"unknown"|null), notes}`, `sources [{url, author, authority, date}]`, `talents {build_name, points [{tree, talent, rank, spell_id}], skip [], leveling_order [{level, tree, talent}], links_opaque []}`, `stat_weights` (object stat→weight or priority string), `caps` (object), `rotation_single [{priority, action, condition}]`, `rotation_aoe [{targets_min, priority, action, condition}]`, `aoe_threshold`, `cooldowns [{name, use_when}]`, `resource_rules []`, `consumables []`, `mistakes_to_avoid []`. Values may be strings, lists or nested objects; the UI must tolerate any shape (render unknown shapes as a compact key/value list).

### `matrix.json`
`{ roles: string[], standings: string[], rows: MatrixRow & {class: slug}[] , coverageMarkdown: string }` where `coverageMarkdown` is `synthesis/classes/spec-role-coverage.md` without its H1, and `matrixMarkdown` (add it) is `synthesis/classes/spec-role-matrix.md` without its H1.

### `glossary.json`
Array of `{term, meaning, category, scope, citation_url}` from `structured/glossary.jsonl` (drop other fields).

### `meta.json`
`{ generatedAt, repoCommit, counts: {classes, playbooks, matrixRows, glossaryTerms}, timeline: contents of structured/forum/timeline.json, notes: string }` where notes explains the source tiers and that forum links stop working after 2026-10-16 (the archived post ids remain valid in the repo).

## 3. Pages and UX

- **Home `#/`**: hero line ("Turtle WoW 1.18.1 class guides, built from the archived forums"), a 3×3 grid of class cards (class color accent, name, one-line summary, chips for the favored spec per role), a compact spec-role matrix teaser, search box (fuzzy over class names, spec names, playbook titles, glossary terms; keyboard navigable).
- **Class page `#/class/<slug>`**: header in class color with name and summary; **role tabs** (Tank, Healer, Melee DPS, Ranged DPS, PvP, Leveling) showing only roles that have a playbook or a matrix row; under each role, one card per spec with a **standing badge** (favored/alternative/niche/not-viable in distinct colors), agreement badge (consensus/single source/contested) and patch-validity badge (valid for 1.18.1 / pre-1.18.1 advice / unknown); clicking opens the playbook. A "What 1.18.1 changed" panel and a "Gaps" panel from the README, collapsed by default. Coverage table from README rendered as a real table.
- **Playbook page `#/class/<slug>/<id>`**: sticky in-page nav for the sections in template order (Overview, Talents, Stats, Single-target, AoE, Cooldowns, Role strategy, Gear, Mistakes, Sources, then extras). Each section is a card with the Markdown rendered. **Structured widgets on top of the prose when YAML data exists**: rotation as a numbered priority list with condition text in a muted column; AoE threshold callout; stat weights as horizontal bars (numeric) or an ordered chip list (priority strings); cooldowns as a two-column list; mistakes as warning callouts; talent points grouped by tree with rank pips; opaque build links listed with a "calculator offline; undecoded" note. Citations render as small superscript-style chips `[author · tier · date]` that link out; hovering shows the full text. Prev/next playbook links.
- **Leveling `#/class/<slug>/leveling`**: sections as cards; talent-order tables rendered as tables; a "hardcore" section flagged with an icon if present.
- **Matrix `#/matrix`**: the full 9×6 grid, cells colored by standing, click-through to playbooks; below it the coverage table and the matrix document.
- **About `#/about`**: what the data is, source tiers, eras, counts from `meta.json`, link to the repo, the forum-closure note, and "nothing here is invented; gaps are stated".
- **Glossary**: a side panel opened from the header; search; also used by an optional inline tooltip on glossary terms inside rendered Markdown (implement only if it is cheap and does not break links).
- Dark theme by default with a light toggle (persist in localStorage); responsive down to 360 px; keyboard accessible; visible focus; `prefers-reduced-motion` respected; Lighthouse-style basics (semantic headings, alt text, contrast ≥ 4.5:1 for text).

## 4. Design system

- Palette: background `#0f1115` (dark) / `#f7f7f5` (light); surfaces one step lighter/darker; text `#e6e6e6` / `#1a1a1a`; accent per class. Class colors: warrior `#C69B6D`, paladin `#F48CBA`, hunter `#AAD372`, rogue `#FFF468`, priest `#FFFFFF` (use `#E8E8E8` on dark, `#5c5c5c` text on light), shaman `#0070DD`, mage `#3FC7EB`, warlock `#8788EE`, druid `#FF7C0A`. Standing colors: favored green `#3ddc84`, alternative blue `#4ea1ff`, niche amber `#f5b942`, not-viable gray `#8a8f98`. Agreement: consensus green, single-source gray, contested orange. Tiers: staff green `#8dc63f` (the forum's staff color), player neutral, wiki purple.
- Type: system UI stack, 16 px base, 1.6 line height in prose, headings tight; monospace only for build codes.
- Components: Card, Badge, Tabs, Table (horizontal scroll on narrow screens), Callout (info/warning), PriorityList, StatBars, CitationChip, SearchDialog, ThemeToggle. Rounded 12 px, 1 px borders at 10% alpha, no heavy shadows, subtle hover.
- Markdown container: constrain width to ~72ch, tables scroll horizontally, links in accent color with underline on hover, blockquotes as muted callouts.

## 5. Build, run, verify

```
cd site
npm install
python3 scripts/build-data.py     # regenerates src/data/*.json from the repo
npm run dev                       # local dev server
npm run build                     # dist/
npm run build:single              # dist-single/index.html (self-contained)
npm run check                     # tsc --noEmit + eslint + a data-contract test
```
Acceptance:
1. `build-data.py` produces 9 classes, 47 playbooks (matches `ls synthesis/classes/*/*-{tank,healer,melee-dps,ranged-dps,pvp}.md`), 9 leveling guides, 106 matrix rows, 313 glossary terms; every playbook has `sections.overview` and `sections.sources` non-null; a test asserts these counts.
2. Every route renders without console errors; deep links work on reload; the single-file build opens from disk (`file://`) with no network requests.
3. Playwright screenshots at 1440, 1024 and 390 px width of home, a class page, a playbook, the matrix, in dark and light, saved to `site/qa/screenshots/`.
4. No text is generated by the model: all prose on the site comes from the JSON; UI labels are the only hand-written strings.

## 6. Agent split

- **Agent A (Sonnet), data pipeline**: `site/scripts/build-data.py` (Python 3.11, only PyYAML), `site/src/data/*.json`, `site/scripts/test_data.py` asserting the acceptance counts and contract shapes, and `site/src/data/README.md` describing the files. Must handle heading variants by the keyword rules, keep H3 content inside H2 sections, strip the H1, and never alter prose.
- **Agent B (Opus), frontend**: the Vite/React/TS/Tailwind app under `site/` against the contract above, with a small `src/data/fixtures/` sample so it can be developed before A finishes; all pages, components, theme, search, single-file build config, `npm run check`. When A's JSON lands, switch the import to the real data.
- **Agent C (Sonnet), integration and QA** (after A and B): run the full build with real data, fix contract mismatches on either side, run Playwright screenshots and an automated route crawl for console errors and broken internal links, check contrast and keyboard navigation, write `site/README.md` (how to build, host on Forgejo Pages or any static server, regenerate data), and report remaining issues.

Rules for all agents: read `AGENTS.md` and this plan first; do not run git; do not modify anything outside `site/`; no network calls at runtime; no external CDN scripts; keep `npm` dependencies minimal (react, react-dom, marked, dompurify, vite, typescript, tailwindcss, vite-plugin-singlefile, eslint, @types/*; Playwright only for QA via the preinstalled browser at `/opt/pw-browsers`, `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`).

## 7. Addendum: gear guide (added after the first build started)

`ClassEntry` gains two optional fields, populated by `build-data.py` when the files exist: `gear` (parsed `structured/classes/<class>/gear.yaml`; shape in `scrape/prompts/gear.md`) and `gearMarkdown` (sections of `synthesis/classes/<class>/gear*.md`). The class page shows a Gear tab (route `#/class/<slug>/gear`) with spec-role and bracket selectors, a slot table with rank, source type/place/detail, custom-item flag and citations, enchants, consumables and stat notes. Playbook pages link to the matching gear bracket. Gear data comes from the forum's BiS/pre-raid/gearing threads and the playbooks' gear sections; where no repo source states an item's origin the value is `unknown-in-sources`, to be filled from the local server database later.
