# Writer brief: build the player-facing class playbook for one class

## Goal
Write the definitive **Turtle WoW 1.18.1 playbook** for ONE class: readable by a new player
top to bottom, precise enough that a bot can execute it (numbered priority lists, exact talent
points, explicit conditions). It is published as a GitHub Pages site (MkDocs Material) from
`kb/guide/`. You also bring the class's machine-readable bot playbooks
(`kb/structured/classes/<class>/*.yaml`) in line with what you write.

Paths: BASE=`/home/agent/work/turtle-discord`, KB=`$BASE/kb` (git repo; do NOT commit).

## Inputs (read in this order)
1. `$BASE/notes/<channel>/*.md`: fresh cited notes from a full read of the class channel,
   1.18.1 era (`full-*`, 2025-10-03 .. 2026-05) and highlights of 2024-11 .. 2025-10 (`hl-*`).
   These are your primary source. Also `$BASE/notes/pvp-general/*.md` for this class's PvP.
2. The existing KB for this class (forum + wiki + earlier Discord pass; keep what is right,
   correct what is stale):
   `$KB/synthesis/classes/<class>/*.md`, `$KB/structured/classes/<class>/*.yaml`,
   `$KB/synthesis/classes/spec-role-matrix.md`.
3. The previous Discord pass's dossiers: `$BASE/staging/<class>*/dossier.md`, `delta.md`,
   `talents.md` (decoded builds with context).
4. Talent data: `$KB/structured/talents/<class>.yaml` (1.18.1 trees: tabs, talents, row/col,
   max_rank, req) and `$KB/structured/talents/builds-<class>.yaml` (decoded, validated 51-point
   builds; `occurrences`/`n_posts`/`eras` = popularity; `citations`; `builds_with_tree_drift`
   are NOT valid in 1.18.1).
5. Patch data when you need to confirm a change: `$KB/structured/patches/1.18.1-changes.yaml`
   (filter `system: classes`), `$KB/synthesis/1.18.1-master-changelog.md`.
6. Raw search when notes are thin or conflicting: `$BASE/norm/<channel>/messages.jsonl`
   (fields id, ts, author, content, reactions, reply_to, pinned) and the topical extracts
   `$BASE/filt/<channel>/{talents,rotation,gear,stats,aoe,leveling,dungeons,consumables,pvp}.md`
   (pre-1.18.1 material; check the date before trusting it: Turtle reworked most classes in
   1.17.x (2024-11 onward) and again in 1.18.1). grep, never load whole files.

## Tools
- Talent validation: `python3 $BASE/pipeline2/talent_tool.py` (run with `--help`). It checks a
  51-point build or a level-by-level leveling order against the 1.18.1 tree rules (tier gating,
  prerequisites, max ranks, 1 point per level from 10) and prints the talent calculator code.
  **Every build and every leveling order you publish must pass it.** Publish the `calculator` URL it prints (a working talent calculator, xian55.github.io/tortoise-db-viewer) as a Markdown link, e.g. `[Open in talent calculator](<url>)`; you may add the `tree_b64` code in backticks as a secondary reference. talents.turtlecraft.gg is offline, so never present it as a link.
- Citation check: `python3 $BASE/pipeline2/check_notes.py <files>` resolves `[[d:..]]`
  citations against the raw archive (use it on your guide pages before finishing).

## Outputs
Write under `$KB/guide/classes/<class>/` (create it):

| file | content |
|---|---|
| `index.md` | Class overview: roles; a **spec viability table** (raid, dungeon, PvP, leveling, open-world/farming: rate S/A/B/C or favored/viable/niche/not viable, one-line why); what changed for the class in 1.18.1 (short, the gameplay impact); races (Turtle races incl. High Elf/Goblin where applicable) and racials that matter; professions; links to every page |
| `leveling.md` | Recommended leveling spec(s) and why; **talent order table level 10→60** (level, talent, new rank) validated by the tool, plus respec points; abilities/ranks to train or skip by level; the pull/kill loop (bot-ready priority list); resource management and downtime; weapons and gear by bracket; dungeons worth running by bracket; group role while leveling (e.g. tanking dungeons); common mistakes |
| `<spec>.md` per endgame spec/role worth playing (e.g. `fury.md`, `protection.md`, `arms.md`; hybrid classes may split by role, e.g. `feral-cat.md`, `feral-bear.md`) | Summary (role, viability, difficulty, strengths, weaknesses); **talent build** (table tree/talent/points, split, calculator code) + named variants and what changes; stat priority and caps (hit/crit/defense etc., Turtle numbers); **single-target rotation** as a numbered priority list with conditions + opener; **AoE rotation** with target-count thresholds; cooldown usage; resource and threat management; tank/healer specifics (for those roles); gear: pre-raid BiS and raid BiS by tier, notable Turtle-custom items and set bonuses; **enchants per slot**; **weapon imbues / oils / poisons / stones / totems**; consumables and world buffs (raid kit); macros and addons; dungeon & raid notes specific to this spec; common mistakes |
| `pvp.md` | PvP specs and builds (validated), stats, burst/control sequences, matchups vs each class, BG role, gear/enchants for PvP, macros |
| `sources.md` | Short: which channels/eras/sources informed the pages, experts relied on and why, and a **Gaps** section (what the sources do not settle) |

Also update, for this class only:
- `$KB/structured/classes/<class>/*.yaml` (bot playbooks): make `talents.points` match your
  published build (with `spell_id`s from the tree), fill `talents.leveling_order` from your
  validated leveling table, and refresh `rotation_single`, `rotation_aoe`, `aoe_threshold`,
  `cooldowns`, `resource_rules`, `stat_weights`, `caps`, `consumables`, `mistakes_to_avoid`.
  Keep existing keys/schema; add `guide: guide/classes/<class>/<page>.md`. Keep YAML valid.
  Keep existing forum `sources` entries; you may add Discord sources as `{cite, author,
  authority, date, era, agreement}`.
- Do NOT edit `synthesis/` (it stays as the research archive), `contradictions.yaml`,
  `issues.yaml`, or anything outside this class.

## Writing rules
- **Audience first.** Lead with the recommendation; put the nuance after it. Use tables and
  numbered lists. Short paragraphs. One H1 per page; H2/H3 sections. No "Discord additions"
  appendices: integrate everything into the right section.
- **Current = 1.18.1.** Present what works in 1.18.1 (post-release evidence beats pre-release
  beats older). When advice changed, state the current advice and briefly note the old one
  ("before 1.18.1 ...") only when it helps (players will meet outdated guides).
- **Cite every non-obvious claim** inline at the end of the sentence/bullet: Discord
  `[[d:<channel>#<id>]]` (must be a real message; copy IDs from notes), forum
  `[author, YYYY-MM-DD](https://forum.turtlecraft.gg/viewtopic.php?p=<id>#p<id>)` (copy from the
  existing KB), wiki page links. One to three citations per claim is enough; do not stack ten.
- **Confidence marks**, short: where the sources disagree write "**Contested:**" and give both
  sides with citations; where only one person says it write "(single source)". Consensus needs
  no mark.
- **Never invent.** No numbers, talents, items, or tactics without a source. Where the sources
  are silent and the mechanic is unchanged vanilla behaviour that a player needs (e.g. basic
  ability usage), you may state it labelled `(vanilla baseline)`. Prefer a stated gap over a guess.
- Turtle specifics matter: custom talents/abilities, reworked specs, custom items, custom
  dungeons/raids (Karazhan Crypt, Lower Karazhan Halls (Kara10), Tower of Karazhan (Kara40),
  Emerald Sanctum, Gilneas City, Stormwind Vault, Crescent Grove, Hateforge Quarry, Dragonmaw
  Retreat, Black Morass, Timbermaw Hold, Windhorn Canyon, Frostmane Hollow, Stormwrought Ruins...).
- Link to instance pages as `../../instances/<slug>.md` (slugs as in
  `$KB/synthesis/content/instances/`, e.g. `tower-of-karazhan`, `emerald-sanctum`,
  `molten-core`); another agent writes those pages.

## Citation accuracy
Reader notes occasionally attach a claim to a neighbouring message ID (the ID exists but the
words belong to the message before/after). For every build, number, and key recommendation,
check the cited message's text in the raw archive:
`grep -m1 '"id": "<id>"' $BASE/norm/<channel>/messages.jsonl` (or `python3 $BASE/pipeline2/show.py <channel> <id>...`)
and fix the ID (usually an adjacent message by the same author) when it does not match.

## Verify before finishing
1. Every build/leveling order passes `talent_tool.py`.
2. `python3 $BASE/pipeline2/check_notes.py $KB/guide/classes/<class>/*.md` → bad=0.
3. `cd $KB && python3 scrape/validate.py structured/classes/<class>` → YAML parses (Discord
   citations may show as unresolved there until the orchestrator refreshes the evidence files;
   that is expected, but forum citations must resolve).

## Final reply
Five lines max: pages written, builds published (name + split + code), yaml files updated,
top gaps.
