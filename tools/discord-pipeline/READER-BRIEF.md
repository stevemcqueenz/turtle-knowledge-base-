# Reader brief: mine one Discord chunk into cited class-knowledge notes

## Context
We are building a player-facing (and bot-facing) **per-class playbook** for Turtle WoW patch
**1.18.1 "Nightmares of Ursol"** (preliminary notes 2025-10-03, released 2026-03-20, servers
closed 2026-05-15). Source: the archived Turtle WoW Europe Discord. The final guide covers, per
class: which specs are viable (PvE/PvP/leveling), leveling specs + talent order by level, endgame
builds, single-target and AoE rotations, stat priorities/caps, gear/BiS, enchants, weapon
imbues/oils/poisons/stones, consumables, cooldown/resource/threat play, tank/healer specifics,
dungeon and raid tactics, PvP, macros/addons, races/professions.

You read **one chunk** (a compact transcript of one channel over a date range) end to end and
write dense, cited notes. Other readers cover other chunks; a writer agent later merges all notes
per class. Your notes are the ONLY way what is in your chunk reaches the guide, so be thorough on
substance and ruthless on chatter.

## Input
The chunk path is given in your task. Line format under `## <date>` headers:
`[message_id] author [↩reply_to_id] [📎N attachments] [+reactions] [📌PINNED]: text` (` ⏎ ` = newline).
Read the WHOLE file, in pieces (e.g. `sed -n '1,400p'`, then next ranges; lines can be long, so
prefer Bash `sed -n` over the Read tool, which truncates long lines). Do not skip ranges.
`full-*` chunks = every substantive message from 2025-10-03 on. `hl-*` chunks = highlights
(pinned, reacted, or long messages) from 2024-11-01..2025-10-02 plus all-time pinned.

Images: a 📎 message with reactions, pinned, or clearly a build/guide/talent/BiS/spreadsheet
screenshot may be worth viewing. Extract with
`/home/agent/work/turtle-discord/pipeline2/img.sh <channel> <message_id> <your_scratch_dir>`
(prints image paths; then view with the Read tool). Budget: at most ~8 images per chunk, only
where the text says the image carries a build, guide, rotation, BiS list or numbers. Transcribe
what the image shows (e.g. talent points per talent) into the notes, cited to that message.
View images one at a time and skip files larger than 2 MB (`ls -la` first).

**Write incrementally:** write a first version of your output file once you are about half
way through the chunk, then extend it, so progress is never lost if you are interrupted.

## Output
Write exactly one file: the output path given in your task (Markdown). Use these H2 headings in
this order (omit a heading only if the chunk has nothing for it):

```
# Notes: #<channel> <chunk name> (<date range>)
## Experts observed        (who gives repeated, accurate, well-received answers; why; spec)
## 1.18.1 changes & their effect
## Spec viability / tier opinions
## Talent builds (endgame)
## Leveling
## Rotation: single target
## Rotation: AoE / multi-target
## Stats, caps, weights
## Gear, BiS, pre-raid, set bonuses
## Enchants, imbues, oils, poisons, stones
## Consumables & world buffs
## Cooldowns, resources, threat, utility
## Tanking specifics
## Healing specifics
## Dungeons & raids (tactics by instance / boss)
## PvP
## Macros, addons, UI
## Races, professions, gold
## Bugs & quirks
## Contested / open questions
```

Each bullet: `- **[spec/role]** claim, concrete (numbers, ranks, talent names + points, levels,
item/spell names, conditions) — [[d:<channel>#<message_id>]] (author, YYYY-MM-DD; signal)`
where *signal* is e.g. `+7 reactions`, `confirmed by X [[d:...]]`, `disputed by Y [[d:...]]`,
`single source`, `question unanswered`. Group related bullets; merge repeats of the same point
into one bullet with several citations (keep up to ~4 best citations).

For talent builds and leveling orders, be exact: list talents with points (e.g.
`Improved Frostbolt 5, Elemental Precision 3, ...`), the point split (e.g. 31/20/0), and any
talent-calculator link or code verbatim. For leveling, capture level → talent/spec/ability/zone
/dungeon advice, respec points, and weapon choices.

For dungeon/raid tactics capture the instance, boss, role (tank/heal/dps), and the concrete
action (e.g. "Kara40 Anomalus: arcane-immune, mages go Fire").

## Rules
- **Cite only message IDs that appear in your chunk, copied exactly** (19-digit snowflakes).
  Every citation is machine-checked; a wrong ID is a defect.
- Never invent. Do not add your own vanilla-WoW knowledge. If a claim is a question with no
  answer, you may record it under Contested / open questions.
- Preserve disagreement: if people disagree, record both sides with citations.
- Note era implications: if someone says "since patch X" or "this was changed", record it.
- Skip memes, jokes, drama, off-topic chat, LFG, gold selling.
- Turtle WoW differs a lot from vanilla (custom talents, reworked specs such as Survival hunter,
  Feral tank changes, custom dungeons/raids like Karazhan Crypt, Lower/Upper Karazhan (Kara10 /
  Kara40 "Tower of Karazhan"), Emerald Sanctum, Gilneas City, Stormwind Vault, Crescent Grove,
  Hateforge Quarry, Dragonmaw Retreat, Black Morass, etc.). Record Turtle specifics precisely.
- Scratch files: use your own `mktemp -d` dir; do not write anywhere except your output file
  and your scratch dir.
- Size: as long as the substance requires (typically 8–30 KB). No filler.

## Final reply
Reply with 3 lines only: output path, number of bullets, and the 3 most important findings.
