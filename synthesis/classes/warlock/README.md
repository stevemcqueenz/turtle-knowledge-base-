# Warlock playbooks — index

Written 2026-09-10 from the Warlock forum (f=46, 155 threads / 1,084 posts, extraction spans 2020-07-21 .. 2026-04-10), the staff class-change thread (`t15157`, "Patch 1.17.2 & Beyond — Class & Gameplay Changes", including the 1.18.1 post p=166071 by Jamey, 2026-01-23, with revision blocks dated 2026-01-26 and 2026-03-19), `synthesis/1.18.1-master-changelog.md` (Classes → Warlock), `synthesis/turtle-vs-vanilla-timeline.md`, `structured/patches/1.18.1-changes.yaml`, cross-forum threads (Hardcore Lounge `t4856`, General `t11525`), and the community wiki (`Patch_1.18.1`, Warlock talent-calculator links quoted by players). Conventions: `synthesis/CONVENTIONS.md`.

Turtle rewrote the Warlock kit repeatedly during the extraction window: **CC2** ("Class Changes 2", 1.17.2, announced 2024-10-12 by Dragunovi p=102973, live 2024-11-01) with further revisions 2024-11-20 and 2024-12-20 (Jamey p=113460) and 2025-03-30 (Torta p=124504); **CC3** ("Class Changes 3", 1.18.0, announced 2025-07-25 by Jamey p=141159, live 2025-08-15); and **1.18.1** (Jamey p=166071, 2026-01-23, revised 2026-01-26 and 2026-03-19; live 2026-03-20). Every playbook below tags each recommendation with the era it was written for using the same three labels: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20).

## Files

| File | Content | Source quality |
|---|---|---|
| `affliction-ranged-dps.md` / `structured/.../affliction-ranged-dps.yaml` | post-CC2/CC3 "Affliction Drain" build (Dark Harvest, Malediction, Soul Siphon, Rapid Deterioration) for raids/dungeons; a short PvP note | **strong**: dummy-test DPS comparisons, staff developer comments on Affliction's trash weakness, explicit CC2→CC3→1.18.1 progression per spell |
| `demonology-ranged-dps.md` / `demonology-ranged-dps.yaml` | pet-focused "Imp spec" / Unleashed-Potential PvE build; greater-demon usage; Warlock-tanking assessment | **strong** on official kit history (four dated staff posts) and on the contested viability debate; **medium** on a concrete point-by-point talent list (only calculator links, no decoded order) |
| `demonology-pvp.md` / `demonology-pvp.yaml` | Soul Link (SL/Nightfall, SL/Shadowburn, SL + greater demons) durable PvP build | **medium**: strong quote density on viability (contested strong/mid), only calculator links for the build, Soul Link's transfer-% history fully dated |
| `destruction-fire-ranged-dps.md` / `destruction-fire-ranged-dps.yaml` | "Firelock": Soul Fire/Immolate/Conflagrate + Searing Pain/Hellfire AoE, a Turtle-original spec | **strong**: dummy/log-quoted DPS claims, explicit spell-coefficient numbers pre- and post-1.18.1, named fire-immune raid exclusions |
| `destruction-shadow-ranged-dps.md` / `destruction-shadow-ranged-dps.yaml` | SM/Ruin and DS/Ruin Shadow Bolt builds (the historical raid default) | **strong**: multi-year continuity (2024–2026 posts), a 15,000-cast damage-sample quote, explicit hit/gear tradeoffs |
| `destruction-pvp.md` / `destruction-pvp.yaml` | Conflagrate / NF-Conflagrate burst PvP build; also holds class-wide PvP notes (fear/CC toolkit, races, long-running bugs, battlegrounds) | **strong** on the CC2-era burst-PvP meta and bugs (Spell Lock silence, Dampen Magic); **weak** on 1.18.1's new per-spec PvP dampening values (not published in the sources) and on Dwarf Warlock |
| `leveling.md` | Spec choice 1–60, a full Affliction talent order (with two alternative builds and a Demonology self-heal niche build), skill training priority, playstyle, stats, professions, race, Hardcore notes | **medium**: one detailed full talent-order source (cross-posted Reddit guide) plus consistent consensus on spec choice and rotation basics; **weak/gap** on route, gear list, and respec timing |

No `<spec>-tank.md`, `<spec>-healer.md`, or `<spec>-melee-dps.md` files exist: the sources do not support Warlock in those roles (see Warlock tanking below and the coverage table).

## Spec × role coverage

| Spec | Tank | Healer | Melee DPS | Ranged DPS | PvP | Leveling |
|---|---|---|---|---|---|---|
| Affliction | n/a (class has no tank kit) | n/a (no heals) | n/a | **strong** (playbook) | weak (folded into the Affliction and Destruction-PvP files; "not very good" per one 2025-02 source, contested) | **medium** (primary leveling build) |
| Demonology | **not viable** — "only wished for"; Voidwalker "doesn't really hold aggro as you get stronger" even at level 34 (2026-03-29); documented as a gap, not a playbook | n/a | n/a | **strong** (playbook, contested raid viability) | **medium** (playbook — Soul Link durable build) | medium (survivability/Hardcore pick, self-heal niche build) |
| Destruction (Fire) | n/a | n/a | n/a | **strong** (playbook) | folded into `destruction-pvp.md` (Fire is not the PvP build; Conflagrate is) | weak ("Destro is the worst" for leveling — single but uncontested source) |
| Destruction (Shadow: SM/Ruin, DS/Ruin) | n/a | n/a | n/a | **strong** (playbook) | **strong** (playbook — Conflagrate/NF-Conflagrate) | weak (same as Fire) |

Class-wide: Warlock has no tanking or healing role anywhere in the sources; see "Warlock tanking" below. Melee DPS does not exist for Warlock (no sources treat it as a role — the class is a caster/pet class throughout).

## Warlock tanking

Explicitly assessed as **not a supported role** by the sources, so no tank playbook was written (per the task instructions: only cover it as a role if sources treat it as viable). Evidence, all in `demonology-ranged-dps.md`:

- A player wished for a demon-tanking playstyle but described it as aspirational, not current: [Spriggit (player), 2023-10-29](https://forum.turtlecraft.gg/viewtopic.php?p=74657#p74657).
- Voidwalker threat "doesn't really hold aggro as you get stronger" — Jumadforum (quoted in `demonology-ranged-dps.md`), and still true late in 1.18.1: "still my voidwalker is losing aggro" at character level 34 — [Milordas (player), 2026-03-29](https://forum.turtlecraft.gg/viewtopic.php?p=173046#p173046).
- No source anywhere in the Warlock forum, the master changelog, or the 1.18.1 staff post describes the Warlock (or its pet) tanking a dungeon or raid boss; the class's own demons are themselves described as squishy DPS/CC/utility tools ("As for Demonology, it's just three words: they don't survive" — LastyK, `demonology-ranged-dps.md`).

Do not build Warlock-tank bot behavior; if a future patch changes this, re-check the sources before adding a playbook.

## Official 1.18.1 Warlock changes used (Jamey p=166071, 2026-01-23; revisions 2026-01-26 and 2026-03-19; hotfixes Torta p=172139/p=173490, Dragunovi itemization p=168272)

**Base post (2026-01-23):** Curse of Exhaustion mana 8%→14% base (110→190 at 60); Curse of Tongues R1 cast-speed reduction 50%→30%, R2 mana 110→240; Enslave Demon now −50% healing taken by the enslaved demon (shifted off Master Demonologist); Ritual of Doom initial cast 5→7 s, channel 5→3 s; Felhunter/Infernal armor −30% (≈5% less physical mitigation); Felguard Legion Strike healing reduction 10%→25%, Axe Toss stun 4 s→2 s; Searing Pain GCD 1.5 s→1 s; Hellfire SP scaling 2.2%→4.125%/tick, mana changed to a lower up-front cost + per-second channel cost (R1 645→160+30/s, R2 975→240+50/s, R3 1300→325+65/s); Ritual of Souls shard cost 1→3; Soulwell new model; Curse of Recklessness GCD 1.5 s→1 s; **Affliction** — Sinister Pursuit moved to Demonology as a 2-point pet-speed talent, Master Conjuror removed; **Demonology** — Master Summoner also cuts Ritual of Doom cooldown 25/50%, Master Demonologist loses the Greater-Demon healing reduction, Unleashed Potential gets a tracking buff, Soul Link transfer 25%→20%; **Tier bonuses** — Affliction T3 (4-set) Curse of Agony +100% first 4 ticks, Affliction T3.5 (3-set) Siphon Life mana/health return 50%→25%.

**Revision, 26 January 2026:** Ritual of Doom cast 3 s / channel 2 s / 1 summoner (final); Demon Gate Felguard spawn delay 6→4 s; Hellfire SP scaling raised to 6.66% (final); Searing Pain base cast 1.5→2.0 s, SP scaling to 57%; Bane also cuts Searing Pain cast time 0.1–0.5 s; Unleashed Potential procs on any direct damage, not only crits; Avoidance's AoE reduction also covers cleave damage; Curse of Shadow / Curse of the Elements GCD 1.5→1 s.

**Revision, 19 March 2026:** Searing Pain base damage for all ranks +~20%.

**Hotfixes (post-1.18.1):** Abolish Poison/Disease castable on demon pets (Torta, p=172139); Soul Entrapment no longer boosts damage while controlling a Greater Demon (Torta, p=173490); Demonic Sacrifice usable on Hardcore again (Torta, p=176101). **Unresolved player report:** Affliction mana-cost increases (Curse of Exhaustion, Curse of Tongues R2) prompted a post-release revert request (daleking0518, 2026-03-22) with no staff reply in the extract.

**New race/class combination:** **Dwarf Warlock** — "Bronzebeard dwarves practicing demonology in a secret coven within Ironforge"; announced 2025-10-03 (Torta p=154168), added to the first post 2025-10-23 (Torta p=156748). No mechanical racial difference is stated anywhere in the sources beyond the standard Dwarf racials (vanilla baseline, not from turtlecraft.gg) — see Gaps.

## Gaps (not covered by any source — do not guess)

1. **Dwarf Warlock evaluation**: no forum post, wiki page, or staff note gives PvE/PvP viability, stat-racial synergy, or any Warlock-specific commentary on the Dwarf race — flagged in every file's Races section as an open gap rather than guessed.
2. **1.18.1 PvP dampening's per-spec values**: staff said dampening became "dynamic ... based on your class/spec instead of a flat number" (Torta, 2025-10-03) but no source publishes the Warlock-specific numbers.
3. **Full point-by-point 60 talent builds for Demonology and Destruction (Shadow/Fire) and for Demonology PvP**: every endgame build in those files is a `talents.turtlecraft.gg` or `talent-builder.haaxor1689.dev` link, not a decoded point list (only the primary Affliction leveling build in `leveling.md` is fully enumerated).
4. **Pre-raid BiS and current itemization lists**: no gear-guide thread got an answer (`t15091` "Gear guide for new 60?" has zero replies); gear notes throughout are piecemeal (named trinkets/effects), not full lists.
5. **Consumables**: beyond a few named trinkets/potions, no systematic flask/elixir/food list for any spec or for leveling.
6. **Leveling route**: no zone-by-zone path, dungeon-per-bracket list, or profession-pairing consensus beyond one Hardcore-Lounge Alchemy recommendation (contested on one number).
7. **Respec timing while leveling**: no source names a specific level to respec at (contrast e.g. the Paladin guide's "respec at 30 for Holy Shield").
8. **Post-1.18.1 re-evaluation of spec viability**: most "which spec is best" quotes predate 2026-03-20; only a handful of April 2026 posts (Momohomo, Sharmaine) speak to the live patch.
9. **Full pet-ability list and level-by-level unlocks** (Voidwalker/Imp/Succubus/Felhunter ability ranks) — only Torment (VW) and the 10-level threat-rank cadence are sourced.
10. **Spell/talent IDs**: no source in this forum or the changelog gives numeric spell IDs for Warlock abilities, so every `spell_id` field in the structured YAMLs is `null`.
11. **Warlock healing/off-healing, Warlock melee DPS**: not discussed anywhere — not roles the sources or the class kit support; omitted rather than invented.
12. **Demonic Sacrifice leveling build's current talent-tree position**: the single source for it (2025-03-05) predates CC3's rework of Demonic Sacrifice's row/prerequisite; its point link cannot be verified against the live tree from the extract.

## Top open questions for the orchestrator

- Decode the `talents.turtlecraft.gg` and `talent-builder.haaxor1689.dev` `points=` strings for the Demonology, Destruction (Fire/Shadow), and Demonology-PvP endgame builds into explicit point lists.
- Find or fetch the Warlock Discord class-channel pins referenced twice in the sources ("check the pins in the warlock channel on the discord server" — Zulnam, 2025-04-11) — outside this repo's scope but flagged as the community's likely source of truth for current numbers.
- Any post-1.18.1 (after 2026-03-20) raid-log or dummy-test thread re-ranking the three specs, since the bulk of the DPS-comparison quotes used here are from January–February 2026, before the patch went live.
- The published 1.18.1 per-spec PvP dampening table, if one exists outside the extracted forum.
