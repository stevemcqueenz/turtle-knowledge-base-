# Rogue playbooks — index

Written 2026-09-10 from the Rogue forum (f=47, 149 threads / 995 posts, extraction ends 2026-04-14), the Hardcore Lounge forum (f=37, rogue-relevant threads only), the staff class-change thread `t15157` ("Patch 1.17.2 & Beyond — Class & Gameplay Changes", read for its original 2024-10-12 Rogue post and its 2026-01-23 "1.18.1" post with the 26 Jan and 19 Mar 2026 revision blocks), `synthesis/1.18.1-master-changelog.md`, `synthesis/turtle-vs-vanilla-timeline.md`, and the community wiki (Rogue, Rogue Poison Macros — both flagged `is_turtle_content: false`, i.e. mirrors of the same staff posts, not independent sources). Conventions: `synthesis/CONVENTIONS.md`.

## Files

| File | Content | Source quality |
|---|---|---|
| `combat-melee-dps.md` / `structured/classes/rogue/combat-melee-dps.yaml` | Combat as the geared raid-DPS spec: Combat Daggers/Backstab (the "20/31/0" 2025 meta) and Combat Swords/Axes/Maces | **strong** on rotation and the 1.18.0/1.18.1 official kit (multiple detailed posters, staff patch text); **medium** on the full 51-point build (only partial allocations); **weak** on current-tier BiS (Naxx list is vanilla-baseline, cited as such) |
| `assassination-melee-dps.md` / `assassination-melee-dps.yaml` | Assassination as the "Noxious Assault / poison rogue" raid-DPS spec, with the pre-1.18.0 Envenom+Backstab hybrid and the BoED proc build as documented variants | **strong** on poison mechanics, rotation and the full 1.18.1 nerf chain (staff-verified); **medium** on the build (opaque talent-calculator links, partial verbal lists); the post-1.18.1 raid viability ranking is **contested** and thinly sourced (one active thread, no logs) |
| `subtlety-melee-dps.md` / `subtlety-melee-dps.yaml` | Subtlety as Turtle's custom "support" PvE spec (Hemorrhage/Tricks of the Trade/Mark for Death) | **medium**: the mechanics and staff kit are well documented, but only one player (self-declared as inexperienced with the spec) supplies a build; community standing is **contested** between "niche/disliked" and "raid leaders demand it" |
| `combat-tank.md` / `combat-tank.yaml` | The custom, staff-curbed avoidance "rogue tank" (Flourish + Agitating Poison) | **medium–weak**: staff history is well documented (2021–2026 posts on why it was nerfed), one long-time practitioner (Trismegistos, 2023) gives real mechanics, but no build or numbers exist from after Class Changes 2 (2024-10-12); current (2026) status is a small, contested niche |
| `assassination-pvp.md` / `assassination-pvp.yaml` | The "Noxious/poison zug" PvP burst build | **medium**: detailed energy-accounting theorycraft from one player (Crake) plus a large, loud "rogues are broken" reaction thread; no numbers survive the 1.18.1 nerf and dampening changes untested |
| `subtlety-pvp.md` / `subtlety-pvp.yaml` | The classic Hemo/Preparation control build and the Ambush/Backstab dagger PvP build, plus BG roles, matchups, races and PvP gear | **medium–strong** on BG roles/matchups/races (many independent posters agree); **weak** on numeric stat priorities; PvP BiS list is a single, unchallenged player list from Dec 2024 |
| `leveling.md` | Spec choice 10–60, talent orders, respec points, skill training, playstyle (including Turtle's stealth-detection mechanics), stats/gear, route fragments, profession pairings, Hardcore-mode differences | **medium–strong** on the Ambush/Backstab build (repeated, consistent, cross-referenced) and Hardcore differences (f37, consensus); **weak** on zone-by-zone route and skill-rank training (both largely gaps) |

## Spec × role coverage

| Spec | Melee DPS (PvE) | Tank | PvP | Leveling |
|---|---|---|---|---|
| Combat | **strong** (playbook) — favored at high gear per sources | n/a (tank build spans Combat+custom abilities, not spec-specific — see `combat-tank.md`) | weak ("nobody uses combat rogue in pvp" — single source; folded into `assassination-pvp.md`/`subtlety-pvp.md`'s Ambush/Backstab dagger build) | **strong** (Combat Swords is the traditional default; contested post-1.18.0 as "weakest option") |
| Assassination | **medium, contested** (playbook) — favored for fresh/mid gear, contested at the top end, post-1.18.1 status disputed | none (Agitating Poison, the tank's threat tool, is a level-60 baseline poison usable by any spec, not Assassination-specific) | **medium** (playbook) — "zug"/burst build, loudly contested reputation | **strong from level 40** (Noxious Assault path; not a 10–40 build) |
| Subtlety | **medium, niche** (playbook) — support role, contested value | none | **medium** (playbook) — the classic Hemo/Prep control build and PvP identity of the spec | not recommended solo (consensus); its early talents (Camouflage, Improved Ambush) are borrowed by the Ambush/Backstab leveling hybrid, which is **not** a "Subtlety build" in the endgame-spec sense |
| Cross-spec | — | **weak–medium, niche** (`combat-tank.md`) — staff-curbed since 2023, still practiced by a handful of players in 2026, explicitly contested (staff: rogues "are not going to be true tanks") | — | — |

Healer and ranged-DPS roles do not exist for Rogue in any source; not written up (no gap — the class has no such abilities).

## Official 1.18.1 Rogue changes used (Jamey p=166071, 2026-01-23; revision blocks dated 2026-01-26 [no Rogue entries] and 2026-03-19)

Framing (staff): "We're generally happy with the recent changes to Rogue, and community feedback shows that the class is largely performing as intended... we've identified that Rogue is currently a bit overperformant in certain areas... making a few targeted numerical adjustments aimed at bringing performance back in line without changing how the class fundamentally plays."

- **Poisons** (all specs): Deadly Poison ranks 1–3 lose their 2%/tick (8% total) AP scaling entirely, rank 4 drops to 1%/tick (4% total); Instant Poison rank 1 loses its 5% AP scaling, ranks 2–3 drop to 1%, ranks 4–5 to 2%; Corrosive Poison rank 1 drops from 1.9%/tick (7.6% total) to 1%/tick (4% total); Dissolvent Poison rank 1 drops from 4.75% to 2%. Dev comment: "Early access to higher poison scaling was resulting in stronger-than-intended performance during leveling and early gearing... preserving endgame effectiveness."
- **Blade Flurry** (all specs): energy-regeneration penalty 30% → 20%.
- **Assassination**: Taste for Blood physical-damage bonus 1/2/3% → 1/1.5/2% and **no longer affects Corrosive/Dissolvent Poison damage**; Noxious Assault Attack-Power scaling 35% → 30%. Revision 2026-03-19 (same post): Taste for Blood becomes a **2-point** talent (+4/6 s duration, +1/2% damage — a partial reversal, still weaker than pre-1.18.1); **Corrosive and Dissolvent Poison now only apply to Elementals, Mechanicals, Giants and Undead** — first announced 2025-10-03 preliminary notes, confirmed here.
- **Combat**: Opportunity damage bonus 4/8/12/16/20% → 3/6/9/12/15%. Dev comment names the target directly: "Combat dagger rogues are performing tad better than with any other weapons, this nerf will bring them more in line."
- **Subtlety**: no changes in the 1.18.1 patch or either revision block.
- Post-release hotfix: "Fixed damage calculations for stackable spells (e.g., Scorpid Poison, Deadly Poison, etc.)" [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139).

Player reaction is contested and split by role: several PvE poison-rogue players call the poison/Taste for Blood changes "the biggest nerf" to their spec and ask for the Physical-poison restriction to exempt low-content players (`assassination-melee-dps.md`); several non-rogue PvPers had spent the preceding months (2025-09/10) saying poison rogues were "melting thru Tanks like butter" in battlegrounds, which plausibly (but not explicitly, per any staff post in this corpus) motivated the numbers — see `assassination-pvp.md`'s Community standing section for both sides.

## Gaps (not covered by any source — do not guess)

1. **Post-1.18.1 raid-parse data**: no forum post gives DPS numbers, logs, or a settled spec ranking after 2026-03-20; the one active post-patch thread (`t24364`) is players arguing, not measuring.
2. **Full 51-point talent builds**: every endgame build in the corpus is a `talents.turtlecraft.gg` opaque link plus a partial verbal list; no source enumerates all points for any spec. The exact split of the last 2–3 points in the Combat "20/31/0" Assassination sub-tree is unresolved.
3. **Talent-tree naming instability**: the Subtlety capstone is called "Exploit Vulnerability" in the original Class Changes 2 post and "Mark for Death" in the 1.18.0 post; unclear whether this is a rename or a replacement (`../../turtle-vs-vanilla-timeline.md` §Unclear, item 4).
4. **Rogue class weapon** (Timbermaw Hold questline, announced 2026-02-15, quest starter found 2026-04-06): item stats are not in the corpus.
5. **Zone-by-zone leveling route**: only fragments (Deadmines/Shadowfang Keep daggers, Hinterlands for a fresh-40 Assassination rogue); no dungeon-per-bracket table like some other class guides in this corpus have.
6. **Ability/spell-rank training priority**: which ranks of Sinister Strike, Eviscerate, Rupture etc. to train or skip is not discussed anywhere; only the weapon-skill book quest and the level-20 poison quest chain are documented.
7. **Leatherworking (and most non-Engineering/Alchemy professions) for Rogue**: asked once, never answered.
8. **Naxx-undead weapon buff**: whether Corrosive/Deadly poisons or Consecrated Sharpening Stone beat each other on undead-heavy Naxx trash — asked, never answered; made more urgent by the 1.18.1 restriction of Corrosive/Dissolvent to Undead (among others).
9. **Poison damage formula**: a direct "how is poison damage calculated, what stats affect it" question went unanswered; bots should rely on the piecemeal staff scaling numbers in `assassination-melee-dps.md` rather than a formula.
10. **Whether poison critical strikes exist**: players assert poisons cannot crit ("crit only works for white and yellow hits"); no staff confirmation either way is in the corpus.
11. **Post-Class-Changes-2 rogue-tank build**: every build/gear list for `combat-tank.md` predates 2024-10-12, which reshuffled the talent trees the old builds rely on (removed Setup from Subtlety, removed Sleight of Hand, removed Endurance); no post-CC2 practitioner has posted an updated build.
12. **Current PvP BiS**: the only PvP gear list is from 2024-12-16, pre-1.18.0; new "reducing dot and crit dmg" PvP items are mentioned once (2026-04-11) with no itemization.
13. **Numeric stat weights**: no source gives crit/haste/hit/agility weights as numbers for Subtlety (any role) or for either PvP build; Combat and Assassination PvE have qualitative priorities only ("hit first, then...") backed by one or two player measurements each, not simulation output.
14. **Whether the 1.18.1 poison/Taste for Blood nerfs were a direct response to the PvP "poison rogues melt tanks" complaints**: plausible from the timeline but never stated by staff; treat the causal link as the orchestrator's/synthesis's inference, not a sourced fact.

## Top open questions for the orchestrator

- Decode the `talents.turtlecraft.gg/rogue?points=...` links cited throughout (e.g. the "20/31/0" Combat build, the Noxious Assault build, the Hemo/Prep PvP build) into point-by-point allocations — the calculator encodes points in the query string and none of the forum posts spell out the full tree.
- Any post-1.18.1 (after 2026-03-20) raid logs, parses, or a settled "which spec for Naxx/AQ40" consensus — the forum extraction ends 2026-04-14 and still shows the argument unresolved.
- A Turtle database dump for current spell/talent IDs (Noxious Assault, Envenom, poison ranks, Flourish, Agitating Poison, Mark for Death/Exploit Vulnerability) — every `spell_id` field in the structured YAML is `null` because no forum source gives one.
- The Rogue class-weapon (Timbermaw Hold) questline and item stats, released after this extraction's window closed for most threads but announced within it.
