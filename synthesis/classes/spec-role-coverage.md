# Spec × role coverage and merged gaps (Turtle WoW class playbooks)

Companion to [`spec-role-matrix.md`](spec-role-matrix.md). Two things live here:

1. a **class × role coverage table** giving the source quality of each playbook, taken from the nine class `README.md` files (not re-judged here);
2. a **merged gaps list** across all nine classes — the things a future pass has to fill from local game data rather than the forum.

Source quality is the READMEs' own vocabulary: **strong** (multiple detailed, independent, corroborating sources), **medium** (one detailed source plus agreeing fragments, or good mechanics but thin standing), **weak** (opinion fragments, a single stale build link, or a section rather than a playbook), **none** (no source treats the class as filling that role). Where a README splits its judgement by topic or era, the table keeps the split.

## 1. Coverage table (class × role)

| Class | Tank | Healer | Melee DPS | Ranged DPS | PvP | Leveling |
|---|---|---|---|---|---|---|
| **Druid** | **strong** on stats/mechanics, **medium** on the current build (link-only), **weak-medium single-source** on post-1.18.1 standing (`feral-tank.md`) | **medium** (`restoration-healer.md`); two build philosophies, no decoded point lists | **strong** on rotation and the powershift-vs-bleed evolution, **medium** on gear, **weak single-source** on post-1.18.1 items (`feral-melee-dps.md`) | **strong** on mechanics (two long write-ups + dozens of replies), **medium** on the post-1.18.1 numbers (`balance-ranged-dps.md`) | Feral **weak** (only build link is pre-CC2 and superseded); Balance **medium**; Resto **strong on the Rogue matchup, weak elsewhere** | **medium**: strong on spec framing and talent-order anchors, weak-to-none on route/rank-skips |
| **Hunter** | **none** | **none** | **strong** (`survival-melee-dps.md`): consensus rotation and talent core, contested-but-detailed raid standing | MM **strong pre-1.18.1 / weak post**; BM **medium-strong pre-1.18.1 / weak post** | **medium** (`marksmanship-pvp.md`); deep BM post-1.18.1 **weak**; Survival PvP **none** (flagged in-file) | **strong** on the BM order and playstyle; **weak** on route and melee-hunter hardcore |
| **Mage** | **none** (one kiting anecdote) | **none** | **none** (battlemage experiment, abandoned at 29-32 — **weak**) | Arcane **strong**; Fire **medium**; Frost **medium** | Frost **weak-medium**; Arcane **weak**; Fire **none** (only burst mentions inside the other two files) | **medium**: four wiki level-by-level tables (single source) + forum consensus |
| **Paladin** | **strong** on rotation/pulling/mana, **medium** on stats, **weak** on gear (`protection-tank.md`); Ret off-tank **weak** | **strong** on the 2026 melee-healing method and boss lists, **medium** on stats, **weak** on gear (`holy-healer.md`) | **medium** (`retribution-melee-dps.md`): rotation consensus, gearing and viability contested | **none** (Shockadin removed 1.17.2; no rotation source) | Holy **weak-medium** (one expert source for the loop, no build); Ret **weak** | **medium**: full Prot and Ret talent orders from one 2024-12 guide; route is a gap |
| **Priest** | **weak/niche** — two anecdotes, no build/gear/threat rotation | **strong** for rotation/gear/consumables, **medium** for talents (`holy-healer.md`) | **none** ("monk"/melee Disc is a suggestion thread only) | Shadow **medium**; Discipline/Smite **medium** (single enumerated build) | Shadow **medium** (opinion-heavy); Disc/Smite **medium**, healer variant **weak** (2 posts) | **strong** for the Disc order and wand rules; **medium** for Shadow; **weak** for route/rank-skips |
| **Rogue** | **medium-weak** (`combat-tank.md`): staff history well documented, one long-time practitioner, **no build after CC2** | **none** (class has no heals) | Combat **strong** on rotation/kit, **medium** on the full build, **weak** on current BiS; Assassination **strong** on mechanics, **contested/thin** post-1.18.1; Subtlety **medium** | **none** | Subtlety **medium-strong** on BG roles/matchups/races, **weak** on numeric stats; Assassination **medium** | **medium-strong** on the Ambush/Backstab build and Hardcore; **weak** on route and rank training |
| **Shaman** | **strong** on mechanics/threat/rotation, **medium** on stats (single-source numbers), **weak** on post-1.18.1 viability (`enhancement-tank.md`) | **strong** (`restoration-healer.md`); gear/BiS-by-phase is the weakest part | **medium** (`enhancement-melee-dps.md`): rotation consensus, standing contested, no full text build | **medium-strong** (`elemental-ranged-dps.md`): one near-BiS theorycrafter + staff notes; Earthquake post-1.18.1 contested | Elemental **weak-medium** (one detailed playstyle post, nothing after 2026-03-20); Enhancement **weak**; Resto **weak** (one contested claim) | **medium-strong**: a compiled Discord guide + a full leveling diary agree; route and hardcore are gaps |
| **Warlock** | **none** (explicitly assessed as unsupported) | **none** | **none** | Affliction **strong**; Destruction Shadow **strong**; Destruction Fire **strong**; Demonology **strong** on kit history and the viability debate, **medium** on a concrete point list | Destruction **strong** on the CC2-era meta and bugs, **weak** on 1.18.1 dampening; Demonology **medium** | **medium**: one full talent-order source + consensus on spec choice; **weak** on route/gear/respec timing |
| **Warrior** | Protection **strong** on mechanics, **contested** on standing; Fury/Prot **medium** (pre-CC2 consensus, one post-CC2 build hint, no post-1.18.1 evaluation) | **none** | Fury **strong** on kit/rotation, **medium** on talents, **weak** on stat weights/enchants; Arms **medium** | **none** | Arms **medium** (many posts, mostly rants; consistent only on gearing/support/consumables); Fury **weak**; Prot **weak** | **medium**: one ordered talent route + many principles; no level-by-level skill list |

### Reading the table

- Every "strong" rating in this repo is strong **relative to a forum corpus**, never relative to logs or a database: no class has published stat weights, and only three classes have any numeric parse claim at all (Warrior, Rogue, Mage — all quoted second-hand from turtlogs).
- The **post-1.18.1 column is weak for all nine classes**. The patch went live 2026-03-20; the forum extractions end 2026-04-06 .. 2026-04-18 and the servers closed 2026-05-15. Any statement in these playbooks about how a spec performs *after* the patch rests on days-to-weeks of impressions.
- Roles marked **none** split into two kinds: *no such role for this class* (Warrior healer, Warlock tank, Rogue ranged DPS — not gaps) and *the role exists but nobody documented it* (Paladin ranged DPS/Shockadin, Hunter Survival PvP — real gaps, listed below).

## 2. Merged gaps across all nine classes

Grouped by what would fix them. Items marked **(all nine)** appear in every class README.

### A. Talent-link decoding — the single highest-value follow-up **(all nine)**

Every class README names this first. Essentially every endgame build in the repo is an opaque calculator link (`https://talents.turtlecraft.gg/<class>?points=…`, plus `talent-builder.haaxor1689.dev` and `classicdb` links for Priest and Warlock) that could not be decoded offline, so **no complete point-by-point 51/60-point build exists for any spec of any class**. Only these partial exceptions were enumerable from prose: Priest Discipline 31/13/7 (Langorn), Priest Holy 17/34/0 and Shadow 36/15/0 (reconstructed), Warlock's primary Affliction levelling order, Mage Arcane's 50-point wiki allocation and Fire's 46-point path, Shaman's tank and levelling orders, Paladin's Prot and Ret levelling orders, Warrior's armsgirl levelling route (order only, no levels), Druid's levelling anchors. Named undecoded builds include Warrior (armsgirl p=157920 ×4, Inovatu p=118692, Ademar p=103539, Czasku p=106723 ×2, Yasara p=108095), Rogue's "20/31/0" Combat meta build and Noxious Assault build, the Shaman Enhancement and Elemental raid builds, the Warlock Demonology/Destruction builds, and ~10 Mage builds (Kibuum, Xudo, Redmagejoe, Forumdweller, Atolius).

### B. Spell, talent and item IDs **(all nine)**

`spell_id` is `null` in every YAML in `structured/classes/` because no forum post or changelog in this corpus gives a numeric ID. A Turtle database dump (`database.turtlecraft.gg`) would fill: Druid Feral/Balance/Resto spell values, idol/trinket effects and tier-set bonuses; Hunter's full ability set; Paladin's Holy Strike / Crusader Strike / Consecration current values; Rogue's Noxious Assault, Envenom, poison ranks, Flourish, Agitating Poison, Mark for Death / Exploit Vulnerability; Shaman's Earthen Bulwark / Flurry / Earthquake numbers; Warlock's full pet-ability list and level-by-level unlocks; Priest's Tauren racials Light of An'she and Spiritwalk; Mage's talent values.

### C. Numbers no source publishes

- **Stat weights**: none published for any Warrior spec; qualitative only for Rogue (Combat, Assassination) and absent for Subtlety and both PvP builds; Druid Restoration's Healing Power/Intellect weights are inferred, not confirmed; Shaman Enhancement has no BiS list at all.
- **Hit caps and Turtle's linearised weapon-skill formula**: repeated by players as 9% boss / 5% dungeon (Warrior), "8% max" for 2H, 9%/6%/5% (Hunter), 12% dual-wield from a 2021 vanilla-era guide, 10% spell hit for Smite Priest, ~3% for Shadow PvP — **no staff-published formula or table exists**.
- **Crit-immunity / crush-immunity Defense values on Turtle**: only a hedged vanilla-baseline 440 (420 with Anticipation) for shield tanks, Ellifta's 370 Defense observation for Warriors, Dezhan's "around 425 in bis" for Shaman tanks, and an explicit statement that no Druid-specific number exists.
- **PvP dampening per class/spec for 1.18.1** **(all nine)**: staff said it became "dynamic … based on your class/spec instead of a flat number" and that numbers would come "at a later date". They never appeared in any source in this repo.
- **Rage formula constants after CC2** ("90% gear / 10% weapon speed" — staff description without a formula); **Flurry's current attack-speed value**; **Accelerated Arcana** 6% (staff tooltip) vs 5% (wiki measurement); **Improved Seal of Righteousness** 10% (tooltip) vs 4.6% (2025-09 dummy test); **Arcane Missiles haste cap**; **post-1.18.1 Eclipse bonus magnitude** (only the proc *chance* change is official).

### D. Gear, consumables and tier sets

- **Pre-raid BiS / current-itemization gear lists are missing for every class.** Askers are routinely redirected to Discord, AtlasLoot or community spreadsheets; the Warlock's "Gear guide for new 60?" thread has zero replies, the Paladin 2019 tank list is declared outdated, and one Hunter thread answers "no one gives a shit about pre-bis here".
- **Tier-set text**: only 1.18.1 *deltas* are quoted for Paladin (Ret/Prot/Holy T3.5), Priest (Discipline sets and Shadow T2.5 announced but never itemised; T3.5 "Vestments of Pestilence"), Hunter (T1-T3.5 never re-posted post-patch), Shaman (Resto and Enhancement T3.5 text, unlike Elemental's), and Warrior.
- **Enchants and consumables**: no enchant list for Warrior beyond "stamina enchants"; no consumable list for Paladin Prot/Holy beyond mana oil; no flask/elixir list for any Warlock spec; Mage enchants only as "2 haste vs Saph"; Rogue's Leatherworking question was never answered.
- **Unnamed items**: the armor-ignoring trinket nerfed for Feral in 1.18.1 is discussed but never named; the Rogue class weapon (Timbermaw Hold questline, announced 2026-02-15) has no stats in the corpus; Shaman's Totem of Distant Tremors is named once and never described.

### E. Levelling detail

- **A zone-by-zone route and a dungeon-per-bracket table are missing for all nine classes** — only fragments exist (Paladin: RFC at 38, Gilneas City ~48, Hateforge 54-55, ZF for Jang'thraze; Rogue: Deadmines/Shadowfang daggers, Hinterlands at 40; Hunter: Turtle-custom zones with special pets; Shaman: dungeon-per-bracket and gear waypoints only).
- **Which spell/ability ranks to skip training** is undocumented for every class (Mage documents only rank-1 keepers; Druid, Priest, Rogue, Warrior all flag it explicitly).
- **Respec timing** is given only for Paladin ("respec at 30 for Holy Shield") and Hunter ("around lv50"); Warlock, Rogue and Warrior have no named respec level.
- **Hardcore-specific play** is thin everywhere: Shaman has two fragments and no HC thread; Hunter's melee-hunter HC question (2022) was never answered; Priest HC advice comes from three posts because the Hardcore forum is not in the extracted set.

### F. Roles that exist but were never documented

- **Paladin ranged DPS ("Shockadin")** — removed in 1.17.2, Holy Shock damage restored weaker in 1.18.0; no rotation, build or standing source exists for the restored version.
- **Hunter Survival PvP** — no build link anywhere; the section in `marksmanship-pvp.md` is two sentences.
- **Priest caster-tank** and **Rogue post-CC2 tank build** — practised but undocumented since the talent trees were reshuffled (Rogue's CC2 removed Setup, Sleight of Hand and Endurance, invalidating every posted rogue-tank build).
- **Restoration Shaman PvP** and **Warrior Fury/Prot post-1.18.1** — one contested claim and zero sources respectively.
- **Arena guidance** generally: only Druid Restoration's Rogue matchup and Paladin Holy's arena notes have any depth.
- **Dwarf Warlock** (new in 1.18.1) — no viability, racial-synergy or playstyle commentary of any kind.

### G. Open mechanical questions the forum never resolved

Bots should answer "the sources do not say" for these: whether Crusader/Holy Strike proc Seal of Righteousness (contested); whether poisons can critically strike (players assert no, no staff line); the poison damage formula; whether Corrosive/Deadly poisons or a Consecrated Sharpening Stone win on Naxx undead trash; whether the Hunter Experimental Ammunition cycle is deterministic or random (two players describe it differently in the same thread); whether Hunter pets skipping PvP dampening is design or a bug; whether Mental Agility affects Starshards; whether Power Word: Shield scales with healing or spell power; the true post-1.18.1 behaviour of Shaman Earthquake, Earthen Bulwark and Flurry (open bug reports on 2026-04-07, never resolved before shutdown); whether Warrior absorb shields still give zero rage; the Deep Wounds tick bug (~35% vs 60%); the Mage Fire T3.5 5-set bonus bug (report id 18568); whether the Subtlety capstone rename "Exploit Vulnerability" → "Mark for Death" is a rename or a replacement; whether Pollen Burst and Elune Infusion are Druid or Hunter-pet abilities.

### H. Corpus-level caveats

- **No `thanked_by` data**: the field is empty for every post in `f40.jsonl`, `f43.jsonl` and `f44.jsonl` (and is not usable elsewhere), so the "guide writer" authority tier could only be assigned where a thread is explicitly and repeatedly referenced. Forum rank titles are post-count badges, not competence marks.
- **No staff post exists in the Mage forum at all**; every Mage staff citation comes from the cross-forum changelog threads.
- **Community wiki pages are marked `is_turtle_content: false` and are anonymous** — treat their sims and rankings as single-source.
- **Complaint-thread bias**: several class standings (notably Druid's) rest on a small recurring set of authors posting in complaint threads, with no independent parse aggregation to cross-check them against.
