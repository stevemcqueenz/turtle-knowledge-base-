# Warrior — class playbooks (Turtle WoW, forum f40 + staff changelogs)

Index of the Warrior synthesis. Built only from files in this repo: `extracted/forum/f40-warrior/` (191 threads, 2020-10 .. 2026-04), the staff class-change posts in `extracted/forum/f63-patch-notes-changelog/t15157-*.md` and `t22214-*.md`, the itemization changelogs in f70, and `extracted/wiki/articles/Warrior.md` / `Warrior_Macros.md`. No network, no git. Machine-readable copies are in `structured/classes/warrior/`.

Authority levels: **staff** (Dragunovi, Jamey, Torta and other `[STAFF]` posts) and **player**. No "guide writer" tier was assignable: `structured/forum/posts/f40.jsonl` has empty `thanked_by` for every post, so there is no thanks-based ranking; the forum's rank titles ("Grandmaster of Forum PvP" etc.) are post-count badges, not competence marks. Frequently-correct, math-showing posters (Xudo, Ellifta, Eyeburn, Atreidon, armsgirl, Syrathegreat) are still labelled **player**.

Kit timeline used everywhere (all dates UTC): Class Changes 2 = patch 1.17.2, staff post 2024-10-12, live 2024-11-01; revisions 2024-11-01 and 2024-12-20; Class Changes 3 = 1.18.0, staff post 2025-07-25, live 2025-08-15; 1.18.1 class notes 2026-01-23, live 2026-03-20; hotfix 2026-03-21; servers offline 2026-05-15. Eras: pre-1.18.1 (before 2025-10-03), 1.18.1-announced-pre-release (2025-10-03 .. 2026-03-19), post-1.18.1 (from 2026-03-20).

## Files

| File | Spec × role | Source quality | Notes |
|---|---|---|---|
| `fury-melee-dps.md` | Fury — melee DPS (DW raid build; 2H Fury/Slam variant) | **strong** on official kit and rotation; **medium** on talents (no full 51-point list); **weak** on stat weights/enchants | Arms-vs-Fury raid DPS is contested since CC3; 2H Fury's existence is contested (Atreidon vs Xudo/Eyeburn) |
| `arms-melee-dps.md` | Arms — melee DPS (2H, PvE) | **medium**: one dedicated rotation thread (t=18005, 2025-03) plus scattered posts; execute-phase mechanics changed three times | Post-1.18.1 has one confirmation post (Berettadin 2026-03-22) |
| `protection-tank.md` | Protection — tank (deep prot, Defensive Tactics variants) | **strong** on mechanics (CC2 notes, Shield Slam/Defiance numbers, Ellifta's threat math); **contested** on standing (worst tank vs "meta now") | Most-discussed Warrior topic 2024-11 .. 2026-03 |
| `fury-tank.md` | Fury/Protection hybrid — tank | **medium**: pre-CC2 consensus meta; post-CC2 only one build suggestion (Death Wish + Improved Shield Slam) and contested viability | No post-1.18.1 evaluation |
| `arms-pvp.md` | Arms — PvP (with Fury and Protection PvP notes) | **medium**: many posts but mostly rants; consistent advice only on stamina gearing, support play and consumables | Hamstring cooldown era (2024-11 .. 2026-03-19) advice is obsolete |
| `leveling.md` | Leveling 1–60, all specs, hardcore | **medium**: one ordered talent route (armsgirl, 2025-10-31) plus many principles; no level-by-level skill list | Arms vs DW Fury contested; prot leveling contested |

## Spec × role coverage

| Spec | Role | Viable per sources | Playbook | Source quality |
|---|---|---|---|---|
| Fury | melee DPS | yes (raid default) | `fury-melee-dps.md` | strong |
| Arms | melee DPS | yes (contested vs Fury) | `arms-melee-dps.md` | medium |
| Protection | tank | yes (contested standing) | `protection-tank.md` | strong |
| Fury/Prot | tank | pre-CC2 yes; post-CC2 contested | `fury-tank.md` | medium |
| Arms | PvP | yes, with support | `arms-pvp.md` | medium |
| Fury | PvP | niche (Blood Drinker DW) | in `arms-pvp.md` | weak |
| Protection | PvP | meme (two tools) | in `arms-pvp.md` | weak |
| Arms | leveling | yes (majority) | `leveling.md` | medium |
| Fury | leveling | yes (DW, gear-gated) | `leveling.md` | medium |
| Protection | leveling | contested | `leveling.md` | medium |
| any | healer | not a warrior role | — | none |
| any | ranged DPS | not a warrior role | — | none |

## Reading order for a bot

1. Official kit sections (staff, verbatim numbers) in the spec file — these are the only "true" values.
2. Rotation/priority lists — each step carries the kit version it was written for.
3. Contested markers — do not resolve them; present both sides.
4. Gaps below — answer "the forum does not say" rather than inventing.

## Gaps (known unknowns — never guess these)

Talents and builds
- No source lists a complete 51-point build for any spec talent by talent. All builds are opaque `talents.turtlecraft.gg/warrior?points=...` strings (armsgirl p=157920 ×4, Inovatu p=118692, Ademar p=103539, Czasku p=106723 ×2, Yasara p=108095) that cannot be decoded from the repo. Unassigned points are marked in each playbook.
- Fury-prot post-CC2 allocation: only "Death Wish + Improved Shield Slam" (Xudo p=114018).
- Exact level at which each talent is taken: armsgirl's route gives order only; levels in `leveling.md` are the reader's arithmetic.
- Blood Craze in raids (Atreidon "3 points down the drain" vs Abiozan "must take"), Unbridled Wrath for 2H, Defensive Tactics — contested, unresolved.

Numbers
- Stat weights: none published for any spec. WarriorSim (Ugoboom p=35760 / wiki link) and the rentry guide (Muck5955 p=156287) are named but not in the repo.
- Hit cap on Turtle's smoothed weapon-skill formula: 9% boss / 5% dungeon is repeated by players (Reploidrocsa, Tomberry) with "8% max" for 2H (Cheruscan p=156442) — no staff confirmation.
- Defense/crit-immunity and crush numbers: Ellifta's 370 Defense observation only.
- Flurry's current attack-speed value (Bigsmerf "15%") — no staff line.
- Rage formula constants after CC2 ("90% gear / 10% weapon speed") — staff description without formula.
- PvP dampening per-class numbers for 1.18.1 — staff said "at a later date"; not in the repo.
- Respec gold cost — "cheap" only.
- Deep Wounds bug (Cromius p=149915: ticks ~35% instead of 60%) — unresolved in the extracted posts.

Rotation/mechanics
- AoE thresholds (when Whirlwind/Cleave beats single-target) — not stated for any spec.
- Whether post-CC2 fury-prot tanks in Defensive or Berserker Stance.
- Whirlwind with a shield equipped (asked, not answered).
- Whether absorb shields still give zero rage post-1.18.1 (Snoof complaint, pre-1.18.1).
- Rank-5 Shield Slam scaling details beyond "20% AP, 75% threat" (1.18.1 notes).
- Slam/Flurry post-hotfix behaviour (2026-03-21 "Flurry will now properly be consumed") — no player follow-up.

Gear/consumables
- No enchant list beyond "stamina enchants" (PvP) and no consumable list beyond FAP/tea/sugar/reflectors; raid consumables are vanilla baseline, not from turtlecraft.gg.
- Pre-BiS/BiS lists: named threads (Bigsmerf p=134748, Noephix p=135325) point to Atlas Loot / external sheets, not itemized in the forum.
- The "Lionheart Helmet" stamina change in the 1.18.0 itemization post (p=137624) is the Paladin T3.5 set, not the warrior helm — do not conflate.

Era coverage
- Post-1.18.1 (2026-03-20 .. shutdown): Warrior forum has only leveling chatter, one PvP complaint thread, Berettadin's execute note, SvenS2's Unbridled Wrath suggestion and the Flurry hotfix. No post-1.18.1 raid parses, no re-evaluated tank ranking, no re-evaluated PvP after the Hamstring cooldown removal.
- Roles without sources: healer, ranged (not warrior roles); 2H Fury leveling after CC3 (one HC anecdote).

Unresolved citations
- None remaining: the two previously unresolved quotes in `protection-tank.md` are now attributed (Lavrute p=113482 for "thunder clap by default usable in defensive stance"; Ademar p=103539 for the CC2-launch prot build link).

## Conventions honoured

One H1 per file; every claim links `[author (authority), YYYY-MM-DD](https://forum.turtlecraft.gg/viewtopic.php?p=<id>#p<id>)`; consensus / single source / contested marks in Sources tables; pre-1.18.1 advice flagged; vanilla knowledge labelled "(vanilla baseline, not from turtlecraft.gg)"; no pseudonymisation; nothing committed.
