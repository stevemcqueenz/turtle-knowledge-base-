# Hunter playbooks — index

Written from the Hunter forum (f=45), the staff class-change thread [t15157 "Patch 1.17.2 & Beyond — Class & Gameplay Changes"](../../../extracted/forum/f63-patch-notes-changelog/t15157-patch-1-17-2-beyond-class-gameplay-changes.md) (Jamey, p=166071, 2026-01-23, revision blocks dated 2026-01-26 and 2026-03-19), `synthesis/1.18.1-master-changelog.md` (Classes section), cross-forum "Hunter" mentions in General/Raids/Hardcore/PvP/Help & Support, and the community wiki. Conventions: `synthesis/CONVENTIONS.md`.

Hunter has no tank or healer role; every viable role is ranged or melee DPS, plus a dedicated PvP file. Pet management is common to every spec and lives in its own supporting document (`pets.md`) rather than being duplicated in each playbook.

## Files

| File | Content | Source quality |
|---|---|---|
| `pets.md` | Pet rules by patch (CC2/CC3/1.18.1), pet choice by spec and content, training/Claw vs Bite, feeding/happiness/loyalty, positioning/threat/Avoidance, reported bugs | **strong**: staff kit-timeline posts plus a detailed 2026-03 four-hunter guide (Skurridizo) and dozens of corroborating/contesting player posts |
| `beast-mastery-ranged-dps.md` / `structured/classes/hunter/beast-mastery-ranged-dps.yaml` | Pet-focused ranged DPS across three kit rewrites (CC2, CC3/1.18.0, 1.18.1: Baited Shot removed, Bestial Wrath returned, Kill Command reworked) | **medium-strong** pre-1.18.1 (detailed CC3 rotation and raid-standing debate); **weak** post-1.18.1 (staff tooltips + early player fragments only, no raid log) |
| `marksmanship-ranged-dps.md` / `marksmanship-ranged-dps.yaml` | The "traditional" ranged spec; deep-MM and BM/MM hybrid raid builds | **strong** pre-1.18.1 (swing-timer rotation is consensus, stat math from a named theorycrafter); **weak** post-1.18.1 (Steady Shot/Trueshot Aura baseline, Aimed Shot keystone, Experimental Ammunition, Lock and Load — no validated build or DPS numbers exist because the server closed 8 weeks after release) |
| `survival-melee-dps.md` / `survival-melee-dps.yaml` | Turtle's melee hunter kit; fire traps usable in combat via Untamed Trapper | **strong**: consensus rotation and talent core, contested-but-detailed raid-standing debate (Apr 2025 – shutdown); 1.18.1 changes (Alone Against the World, Vicious Strikes restore) are staff-sourced but not re-validated by players |
| `marksmanship-pvp.md` / `marksmanship-pvp.yaml` | Ranged PvP: obsolete 0/21/30 trapper, the 30/21/0 BM/MM "stun+Scatter" meta build, deep BM after 1.18.1; short Survival-melee-PvP section | **medium**: one named Rank-13 PvP author for the meta build, many corroborating/contesting standing claims; deep BM post-1.18.1 is **weak** (no build link, contested) |
| `leveling.md` | Spec choice, BM talent order 10→60 across three kits, Survival melee order, pet choice while leveling, skill training, playstyle, stats/gear, route/professions/farming, race, hardcore differences | **strong** on BM order (single detailed 2025-01 guide with a correcting thread) and playstyle consensus; **weak/gap** on a zone-by-zone route and on melee-hunter hardcore |

## Spec × role coverage

| Spec | Ranged DPS | Melee DPS | PvP | Leveling |
|---|---|---|---|---|
| Beast Mastery | **medium** (playbook; strong pre-1.18.1, weak post) | — | folded into `marksmanship-pvp.md` (30/21/0 hybrid + deep BM) | **strong** (the consensus leveling spec) |
| Marksmanship | **medium** (playbook; strong pre-1.18.1, weak post) | — | **medium** (playbook; strong pre-1.18.1 build, weak post) | weak (no one recommends it over BM) |
| Survival | — | **strong** (playbook) | weak (short section only, no build link, "gap" flagged in-file) | medium (consensus: weak before 40, strong after) |

Tank and Healer: not applicable — no source treats Hunter as viable in either role on Turtle.

## Official 1.18.1 Hunter changes used (Jamey p=166071, 2026-01-23; revision blocks 2026-01-26 and 2026-03-19; hotfix Torta p=172139, 2026-03-24)

- **Aspect of the Viper** (level 56): 5% max mana / 5 s, replaces Hawk on the bar.
- **Trueshot Aura baseline** at level 40 (3% AP + 30, no longer a talent capstone); **Steady Shot baseline** at level 20.
- **Aimed Shot** reworked into the MM row-3 keystone (2 s cast, 26 s cd, faster/resets with Lock and Load); **Experimental Ammunition** (row 5): Aimed Shot grants a cycling Fire → Arcane → Nature buff that empowers the next Multi-Shot/Arcane Shot/Serpent Sting; **Lock and Load** capstone resets Aimed Shot and speeds it on a Steady/Aimed/Arcane crit.
- **Bestial Wrath returns** (BM row 5: 18 s pet enrage, "cannot be stopped unless killed", 1.5 min cd, no GCD); **Kill Command reworked** to a TBC-style capstone (usable only after the hunter lands a crit; revised 2026-03-19 to 80% of pet AP, up from the announced 50%); **Baited Shot removed** ("the barbeque is over"); **Scent of Blood** added (row 5, chance on your attacks to enrage the pet).
- Survival: **Alone Against the World** (+3/6% damage with no pet out); **Surefooted** gains dual-wield hit; **Vicious Strikes** restored to also buff Raptor Strike/Mongoose Bite damage (2026-03-19 revision, undoing the CC3 nerf); **Lacerate** +5% AP and +15% from the side.
- Pets: Endurance Training and Thick Hide raised again ("Pets have been too fragile in open world content").
- Rationale (staff, quoted): "Steady Shot has been a must-have ability for all ranged Hunters, while Aimed Shot was rendered almost useless by its existence"; "Trueshot Aura was a design-limiting ability and an uninteresting capstone"; Lock and Load "intended to make the rotation more interactive through procs, improve endgame scaling, and reduce the impact of slight auto-shot delays."
- Hotfix 2026-03-24: Scorpid Poison stacking damage calculation fixed (a BM player reports a 300–400 DPS loss relative to the pre-hotfix bug).

Full kit timelines for CC2 (2024-10-12, live 2024-11-01) and CC3/1.18.0 (2025-07-25, live 2025-08-15) are in each playbook's "Official kit timeline" table, since Hunter's talent tree was rewritten three times.

## Gaps (not covered by any source — do not guess)

1. **Post-1.18.1 PvE numbers for every spec**: no forum post benchmarks BM, MM, or Survival DPS after the 2026-03-20 release; the server closed 2026-05-15, leaving ~8 weeks for players to react. Rotations and talent builds for that era in every playbook are marked "derived" or "staff-tooltip-derived," not sourced.
2. **A validated post-1.18.1 51-point talent build for any spec** — only draft/asked-but-unanswered talent-calculator links exist (`t=22214`-adjacent threads such as p=171462).
3. **Survival PvP build and rotation** — no link exists; the section in `marksmanship-pvp.md` is two sentences and explicitly flagged as a gap in-file.
4. **Zone-by-zone leveling route** (dungeons/zones per level bracket) — only fragments of Turtle-custom zones with special pets (Thalassian Highlands, Gillijim's/Lapidis Isle, Tel'Abim, Gilneas) from the community wiki, no forum-sourced route.
5. **Melee-hunter hardcore mode** — asked in 2022 with no forum answer beyond a link to a 2020 guide (t=4098).
6. **Turtle's exact linearized weapon-skill/hit-cap table** — every hit percentage cited (9%/6%/5%) traces to vanilla-baseline math or single hedged posts, not a staff-published formula.
7. **Exact 2H vs dual-wield melee hit caps for Survival** — only a 2021 vanilla-era guide gives a number (12% DW), not re-verified on the CC2+ Survival kit.
8. **Pre-raid BiS lists** for any spec on current (post-CC2/CC3) itemization — players are repeatedly told "no one gives a shit about pre-bis here" and pointed to AtlasLoot instead of a maintained list.
9. **Whether the Experimental Ammunition cycle is deterministic (Fire→Arcane→Nature per the staff tooltip) or effectively random** — two players in the same thread describe it differently; unresolved.
10. **Current T1–T3.5 set-bonus text post-1.18.1** — only isolated deltas are quoted (e.g. T3 4-set +50 AP to hunter and pet); no full tier list was re-posted after the item changes.
11. **Kill Command's exact 1.18.1 numbers before vs after the 2026-03-19 revision in practice** (50% vs 80% of pet AP) — no post-revision parse confirms the live value.
12. **Whether pets truly skip PvP dampening as a permanent design choice or an unpatched bug** — only player observation, no staff confirmation, in the sources.

## Top open questions for the orchestrator

- Any post-1.18.1 raid logs, Discord class-channel guides, or database dumps (spell/talent IDs) for Hunter — every `spell_id` field in the YAML is null because no forum source gives them.
- Decoding the many opaque `talents.turtlecraft.gg/hunter?points=...` build links quoted across the playbooks into point-by-point allocations.
- Whether any player posted a Survival PvP guide or a deep-BM PvP build link outside the extracted threads (only summary opinions exist in the sources used here).
