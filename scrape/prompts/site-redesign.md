# Site redesign brief — "our own Icy Veins for Turtle 1.18.1"

Read `scrape/prompts/_handling.md` first (never invent data, cite, mark contested).

## Why
The live site (`site/`, Vite + React 18 + TypeScript + Tailwind, hash routing, no runtime
network) is correct but far too text-heavy. The owner wants an easily digestible guide site:
see the classes, the roles, the recommended builds, the progression towards them, the stat
priorities, hard caps, rotations (single target and multi target) at a glance. No bot-related
content on the pages, no raw YAML dumps, no repo file paths in the main reading path.

## The visual spec
The approved design boards are in `site/design/` (plain HTML with inline styles; read them):

- `Home.dc.html` — home: headline + search, 3-column class cards (class name in class colour,
  one row per real spec with role chips coloured by standing, "Level as …" footer), legend.
- `ClassPage.dc.html` — class page: gradient hero band in the class colour, name + one-line
  summary, role tabs (Tank / Melee DPS / PvP / Leveling / Gear …), "Pick a role" columns with
  one card per spec (name, standing badge, one-line note, chips such as "Standing contested",
  "1.18.1"), then two cards: "What 1.18.1 changed for <class>" (staff items) and
  "How solid is this?" (source quality per playbook).
- `Main.dc.html` — spec guide (Protection Warrior as the example): hero with verdict chips and
  three fact tiles, sticky section tabs, then Talents (tree point split bars, one row per talent
  with rank pips and a short note, skip list as struck-through chips, 1.18.1 callout, talent
  calculator links), Leveling path (timeline of level → talent), Stats & caps (numbered
  priority list + caps as big numbers), Rotation (opener as an arrow chain, numbered
  single-target priority, AoE cards by target count, contested note), Cooldowns grid,
  "Don't" list, collapsed Sources row. Prose lives one click away (collapsed), never on the
  main path.

Use the existing site tokens exactly: `site/src/index.css` (bg #0f1115, surfaces, text,
muted, hairline), `site/tailwind.config.js` (class colours, standing colours favored #3ddc84 /
alternative #4ea1ff / niche #f5b942 / not-viable #8a8f98, staff #8dc63f), 12 px radii,
existing `card`, `hairline`, `chip` utilities. Light theme must keep working (tokens already
swap; use `readableColor()` from `src/lib/theme.ts` for class colours on text).

## Data (already generated, do not change the generator)
`site/src/data/classes.json` (see `site/src/types.ts` and `site/PLAN.md` §2). Per playbook the
`yaml` object has everything the boards show:

- `talents.points[] {tree, talent, rank, note}` → point split per tree (sum of ranks), per-talent
  rows; `talents.skip[]`, `talents.build_link` / `talents.links_opaque[]`, `talents.build_name`,
  `talents.leveling_order[] {level, tree, talent}` (present for some specs; the leveling path
  timeline only exists when it is non-empty — never invent levels).
- `patch_validity {written_for, valid_for_1181, notes}` → 1.18.1 chip and callout.
- `stat_priority[]` (37 specs) or, where it is absent, `stat_weights {stat: "text"}` (keep the key order, show
  the value text as the row note) → numbered priority list. `caps {key: number|string}` → big
  number tiles (numbers with `pct` in the key get a % sign; long strings render as text).
- `rotation_single[] {priority, action, condition}` → the entry with priority 0 or condition
  "opener" is the opener chain (split the action on `->`); the rest is the numbered list.
  `rotation_aoe[] {targets_min, priority, action, condition}` grouped by `targets_min`
  ("2 – 3 targets", "4 or more"); `aoe_threshold`; `resource_rules[]`.
- `cooldowns[] {name, use_when}`; `mistakes_to_avoid[]`; `consumables[]`;
  `sources[] {url, author, authority, date}` → "N cited posts · YYYY-MM to YYYY-MM · staff: …".
- `playbook.standing` is the matrix row (standing, agreement, source_quality, notes);
  `playbook.sections.*` are the prose sections (markdown) for the collapsed "full text".
- Class level: `entry.matrix[]` rows (spec, role, standing, agreement, notes), `entry.patchChanges`
  (string, `;`-separated staff items; null for warrior), `entry.summary`, `entry.leveling`,
  `entry.gear`.

Everything shown must come from these fields. Empty or missing data renders a short honest
line ("No hard caps are published for this spec."), never a placeholder value.

## Rules
- Keep the routes, data loading (`src/lib/site.ts`, `src/data/index.ts`), search, glossary,
  header, footer, theme toggle, gear pages and the smoke test working. `npm run check` and
  `npm run build` and `npm run smoke` must pass.
- Do not edit `site/src/index.css`, `site/tailwind.config.js` or `site/scripts/*` unless the
  brief for your part says so; use Tailwind utilities and inline styles in your components.
- Responsive: phone width (~400 px) must work; wide tables scroll inside their own container.
- Accessibility: real headings, `aria-current` on the active tab, focus states, no colour-only
  meaning (standing dots always come with the word).
- Copy: short, specific, player-facing. Mark contested items inline in amber. No "bot", no
  "YAML", no "repo", no file paths on the pages (the About page may keep them).
- Commit nothing; the orchestrator validates, commits and pushes.
