# `site/src/data/`

Generated JSON that the React app imports directly. **Do not hand-edit these
files** — regenerate them with the build script below. They are committed so
the site builds without Python.

## Files

- **`classes.json`** — array of 9 `ClassEntry` objects (order: warrior,
  paladin, hunter, rogue, priest, shaman, mage, warlock, druid), each with the
  class's README sections, its slice of the spec/role matrix, all of its
  playbooks (talents/stats/rotation/etc., with the matching structured YAML
  attached), its leveling guide (`leveling.sections`, whose `items` arrays
  hold each section's top-level bullets alongside its complete Markdown, plus
  `leveling.talentOrders`: the guide's talent-order tables parsed into
  level → talent steps), and its gear guide (`gear` / `gearMarkdown`,
  PLAN.md §7).
- **`matrix.json`** — the full 106-row spec×role matrix
  (`structured/classes/spec-role-matrix.yaml`), plus the coverage table
  (`synthesis/classes/spec-role-coverage.md`) and the matrix document
  (`synthesis/classes/spec-role-matrix.md`) as Markdown with their H1 removed.
- **`glossary.json`** — 323 `{term, meaning, category, scope, citation_url}`
  entries from `structured/glossary.jsonl` (other fields dropped).
- **`instances.json`** — the dungeon and raid pages from `guide/instances/`
  (written only when `guide/instances/index.md` exists): the index's intro
  and its two groups (Dungeons, Raids) as Markdown with the page slugs each
  lists, and each page's title, kind, index group, intro and H2 sections.
  Pages with a map also carry `map` (floors rendered from the client minimap
  textures by `tools/maps/`, images in `public/maps/`, boss markers matched
  to the page text by `build-data.py`; see `site/README.md`, "Maps").
- **`meta.json`** — generation timestamp, repo commit, the acceptance
  counts, the forum/patch timeline (`structured/forum/timeline.json`), and a
  short note on source tiers and forum-link rot.

The exact shape of every field is specified in `site/PLAN.md` §2 ("Data
contract") — that document is the source of truth if this file and the plan
ever disagree.

Nothing here is generated text: every Markdown string is copied verbatim from
`synthesis/classes/**` (only the single leading `# H1` is stripped from each
document; headings are split but prose is never altered). Fields that don't
exist in the source data are `null`, never invented.

### Gear (`ClassEntry.gear` / `ClassEntry.gearMarkdown`, PLAN.md §7)

Two more optional fields on each `ClassEntry`:

- **`gear`** — `structured/classes/<class>/gear.yaml` parsed and passed
  through as-is (its shape: `about, class, generated_from, caveats, specs[{
  spec, role, brackets[{bracket, agreement, patch_validity, slots[{slot,
  items[{name, item_id, rank, source_type, source_place, source_detail,
  custom_turtle_item, notes, citations}]}], enchants, consumables,
  stat_notes}]}], gaps` — see `scrape/prompts/gear.md` for the authoritative
  field list), or `null` if the class has no `gear.yaml`.
- **`gearMarkdown`** — `Section[]` (H2 sections, H1 stripped, same rules as
  every other document) read from `synthesis/classes/<class>/gear.md`; if the
  guide is split into `gear-<part>.md` files, `gear.md` (the index, if
  present) is read first and the `gear-*.md` files are appended after it in
  filename order, each with its own H1 stripped before splitting — so the
  result is one flat, ordered list of sections regardless of how many files
  the guide is split across. `null` if no `gear*.md` file exists for the
  class. As of this writing every class has a single `gear.md` (no splitting
  in use yet).

Both are currently non-null for all 9 classes.

### Guide pages (`guide/classes/**`)

Classes with a `guide/classes/<class>/index.md` are built from their guide
(see `site/README.md`, "Guide pages"). New `ClassEntry` keys: `guidePath`
(the index path or `null`), `overview` (the index opening), `sources` (a
`GuideDoc` `{slug, title, intro, sections, sourceFile}` from `sources.md`),
`guidePages` (`GuideDoc[]` for pages no playbook claims) and `citations`
(`"channel#id" -> {label, title, url|null}` for the Discord citations inside
the class's YAML). Playbooks gain `sourceFile`, `guidePath` and the section
slots `enchants` / `consumables`; a guide playbook's `overview` is the page's
opening and its `sources` slot is `null` (citations are inline; the class
sources page lists what informed it). `meta.guideClasses` lists the guide
classes and `meta.discordCitations` counts resolved / unresolved citations.
In all Markdown, `[[d:channel#id]]` is replaced by an inline HTML chip.

## How sections are split

Each source Markdown file is split on its `## ` (H2) headings; any `### `
(H3) or deeper heading found stays inside the Markdown of its parent H2
section rather than becoming its own entry. Playbook H2 headings are matched
to the template's fixed slots (`overview`, `talents`, `stats`,
`rotationSingle`, `rotationAoe`, `cooldowns`, `roleStrategy`, `gear`,
`mistakes`, `sources`) by keyword, case-insensitively, first match wins; once
a slot is filled, a later heading that would also match it instead falls
through to `extraSections` in document order (this happens in practice — a
few playbooks have two "Sources"-shaped headings, for example). README
sections are not slotted — `readme` is just every H2 section in order, and
`gaps` / `patchChanges` are copies of whichever of those sections has "gap"
/ "1.18.1" in its heading (`null` if none does, e.g. the Warrior README has
no 1.18.1-specific section).

Leveling sections add an `items` array: the Markdown inside each unindented
bullet, in source order and with only the list marker removed. The complete
section remains in `markdown` unchanged, including those bullets. An empty
array means that section has no top-level bullets; development fixtures omit
the field, so the UI must safely render `markdown` in either case.

## Regenerating

```
cd site
python3 scripts/build-data.py     # reads the repo, (re)writes classes.json, matrix.json, glossary.json, meta.json
python3 scripts/test_data.py      # asserts the acceptance counts and contract shapes; exits non-zero on failure
```

`build-data.py` only depends on PyYAML (already installed) and the standard
library. It reads:

- `synthesis/classes/<class>/README.md`, `<spec>-<role>.md`, `leveling.md`
- `structured/classes/spec-role-matrix.yaml`
- `structured/classes/<class>/<spec>-<role>.yaml` (attached verbatim as
  `Playbook.yaml`, or `null` if the file doesn't exist)
- `structured/glossary.jsonl`
- `structured/forum/timeline.json`
- `synthesis/classes/spec-role-coverage.md`, `spec-role-matrix.md`
- `structured/classes/<class>/gear.yaml`, `synthesis/classes/<class>/gear.md`
  (or `gear-*.md`)

and shells out to `git rev-parse --short HEAD` (read-only) for
`meta.json.repoCommit`.

`test_data.py` checks: 9 classes; 47 playbooks (matching
`ls synthesis/classes/*/*-{tank,healer,melee-dps,ranged-dps,pvp}.md`); 9
leveling guides; 106 matrix rows; 323 glossary terms; every playbook has
non-null `sections.overview` and `sections.sources`; every playbook that has
a `structured/classes/<class>/<id>.yaml` file has non-null `yaml`; all 9
classes have non-null `gear` and `gearMarkdown`, and every `gear.yaml`
parses (it also prints, per class, the number of spec entries, brackets and
items in `gear`); the spec+role+class `standing` lookup succeeds for at
least 90% of playbooks (currently 47/47 — the source data changing is the
only thing that would regress this); and all four JSON files parse.

`src/data/fixtures/` is a separate, hand-sized sample used by the frontend
during development before real data exists — it is not written or read by
`build-data.py`.

## professions.json (optional)

`guide/professions.md`, the professions overview for every class, as a GuideDoc (`{slug: "professions", title, intro, sections[], sourceFile}`) plus `recommendation` (its **Recommendation:** paragraph, label removed). Written only when the page exists. Links to the class pages are `#/class/<slug>/professions` routes; the class professions pages themselves stay in `classes.json` under `guidePages` (slug `professions`). Shape in `src/types.ts` `ProfessionsData`.
