# Gameplay brief: "what do I press, at what level" for one class

Paths: BASE=/home/agent/work/turtle-discord, KB=$BASE/kb-integrate (the live repo checkout; do NOT
commit). Your class pages: $KB/guide/classes/<class>/*.md; bot playbooks:
$KB/structured/classes/<class>/*.yaml.

## Goal
New players AND bots must be able to play the class from level 1 to 60 and at max level by
reading one clear, level-aware set of instructions: what to press on a single target, on a pull
of several mobs, and (where the class can) how to tank for maximum threat and how to heal,
with priorities that change as abilities unlock.

## Inputs
1. **The class kit, from the 1.18.1 game data:** `$BASE/topics/_kits/<class>.txt` lists every
   active ability rank as `L<level> <source> <spell id> <name> Rank N <power> <cost> cd=…
   cast=… range=… dur=…`, where source is trainer, talent or quest. Learn levels, costs,
   cooldowns and cast times MUST come from this file (it is the Turtle 1.18.1 client/server
   data, including Turtle-only abilities); never from memory. `<class>-talents.txt` gives
   talent abilities and the earliest level per rank. Note: an ability that is a talent is only
   available if the leveling talent order takes it by that level — check the guide's validated
   talent order in leveling.md.
2. **The existing guide:** leveling.md (recommended leveling spec(s), talent order, pull loop,
   gear), each spec page (rotations, cooldowns, tank/healer sections), index.md.
3. **Community evidence:** `$BASE/topics/<channel>/` (05-leveling, 06-rotation-single-target,
   07-rotation-aoe, 12-cooldowns-resources, 13-tanking-specifics, 14-healing-specifics) — cited
   notes. Verify every citation you use: `python3 $BASE/pipeline2/show.py <channel> <id>`.
   Also `$KB/structured/classes/<class>/leveling.yaml` if it exists (GitHub's older leveling
   kill loops: spec_verdict/opener/priority/mob_selection — reuse what is still right).

## Output 1: `## Gameplay by level` in leveling.md
Insert it after the talent order section (keep everything else). For the recommended leveling
spec (and a second spec only if the page recommends two paths), one H3 per bracket:
`### Levels 1–9`, `### Levels 10–19`, `### 20–29`, `### 30–39`, `### 40–49`, `### 50–60`.
Each bracket contains, compactly:
- **New now:** the abilities/ranks/talents that change play in this bracket (with learn level),
  e.g. "L20 Arcane Rupture (talent), L28 Rank 2".
- **Single target:** numbered priority list (opener first), with conditions ("if target >50%
  HP", "when Clearcasting procs"), resource rules (mana/rage/energy thresholds, drink/eat).
- **Multi-target (2–4 mobs / big pulls):** numbered list; when to pull more, when not to.
- **Tanking (dungeons)** — for every class that can tank while leveling (warrior, paladin,
  druid, shaman; and pet/demon tanking notes for hunter/warlock where relevant): pull,
  opening threat, single-target threat priority, AoE threat on packs, taunt/emergency tools,
  defensive cooldowns, what gear/stance/form/aura/seal.
- **Healing (dungeons)** — for every class that can heal while leveling (priest, paladin,
  shaman, druid): which spell/rank for which situation, HoTs vs direct, triage order, mana
  management (5-second rule, drinking), dispels.
- Only brackets where something meaningful changes need full lists; otherwise "Same as above,
  plus …". Keep it scannable (tables or short numbered lists).

## Output 2: `## How to play` on every spec page (level 60)
Insert as the first section after the page's opening/overview. A compact decision loop, the
thing a player keeps in their head or a bot executes:
- DPS: opener → single-target loop → cooldown usage → AoE switch rule (target count) →
  resource rule → movement/situational.
- Tank: pull → first 3–5 GCDs → steady threat loop → multi-mob threat → taunt/threat recovery →
  defensive cooldown rules → what to avoid.
- Healer: default heal per damage pattern (spot, tank, raid-wide), triage order, what to keep
  up, mana plan, cooldowns, dispels/utility.
Link to the detailed sections of the same page instead of repeating them. Keep it to what the
guide and the evidence support; mark anything else `(vanilla baseline)`.

## Output 3: bot data (YAML)
- In the leveling-spec playbook YAML(s) (the one(s) whose `guide:` is the recommended leveling
  path, e.g. the spec YAML named in leveling.md; if unclear, the class's primary DPS YAML) add
  `leveling_gameplay:` = list of `{levels: "10-19", spec, new_abilities: [{level, name, spell_id}],
  single_target: [{priority, action, condition}], multi_target: [...], tank: [...], heal: [...]}`
  (omit keys that don't apply). spell_ids from the kit file.
- In every spec YAML add `play_loop: {opener: [...], single_target: [...], aoe: {targets_min, loop:
  [...]}, cooldowns: [...], tank: [...], heal: [...]}` consistent with "How to play".
- Keep YAML valid (`python3 -c "import yaml,sys; yaml.safe_load(open(sys.argv[1]))" f`) and
  keep all existing keys.

## Rules
- Citations as in the rest of the guide: `[[d:<channel>#<id>]]` for Discord (verified with
  show.py), existing forum/wiki links; ability facts from the kit need no citation but must
  match the kit exactly; label genuine general-WoW knowledge `(vanilla baseline)`.
- Never invent a Turtle mechanic. If sources disagree, say "**Contested:**" briefly.
- Do not restructure existing sections; add yours. Keep the page's heading contract (one H1).
- Before finishing: `python3 $BASE/pipeline2/check_notes.py $KB/guide/classes/<class>/*.md` → bad=0.

## Final reply
Five lines: sections added (pages), brackets covered and specs, tank/heal coverage, YAML keys
added, gaps.
