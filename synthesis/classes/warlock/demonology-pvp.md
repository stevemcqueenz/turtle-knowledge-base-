# Warlock — Demonology — PvP (Soul Link builds: SL/Nightfall, SL/Shadowburn, SL with greater demons)

The durable PvP build: 31+ Demonology points for Soul Link and Master Demonologist, the rest in Affliction (Nightfall, Curse of Exhaustion) or Destruction (Shadowburn). Since CC2 it is also the only build that can safely use Infernal/Felguard/Doomguard in PvP. Burst Destruction is in `destruction-pvp.md`, which also holds the class-wide PvP notes (match-ups, races, bugs).

All dates UTC. Eras: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). Soul Link's transfer went 30% (vanilla) → 20% (CC2, +5% damage, passive) → 25% (2024-12-20) → 20% (1.18.1).

## Overview

- **Role**: tanky control caster; kills slowly with DoTs, Nightfall bolts or Shadowburn, or lets a greater demon kill.
- **Strengths (sources)**: "SL nightfall best spec for BR tanky spec ... i used to solo 3 ppl with this spec, and 2 of them were paladins" [Majestik51 (player), 2024-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=94776#p94776); "soul link - shadowburn for BR" [Ataika (player), 2024-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=94746#p94746); "Only SL warlock can use greater demons. Using 20/31/0 talent, you can slow down enemies with buffed exhaustion and then easily slay them with greater demons ... the only weakness about them is an ANOTHER LOCKS" [Deer12w (player), 2025-03-06](https://forum.turtlecraft.gg/viewtopic.php?p=121838#p121838); "respeccing demo which is ABSURDLY LAUGHABLY stronger than destro with coex ... 1.5k-2.7k pet autos as he solos them while im on the opposite side of the map" [Forumdweller (player), 2025-06-15](https://forum.turtlecraft.gg/viewtopic.php?p=135863#p135863); "In large battles ... Soul Link/Sacrifice warlock has a big advantage over everyone" (Hunter forum, [player, 2024](https://forum.turtlecraft.gg/viewtopic.php?t=14775)); "Soul Link can't be dispelled" [Dannyp92 (player), 2025-03-05](https://forum.turtlecraft.gg/viewtopic.php?p=121777#p121777).
- **Weaknesses (sources)**: "SL spec has always been mid. You are harder to kill, but you also kill quite hard. And being 31 points in demo means you can only get either Nightfall or Shadowburn, not both" [Zulnam (player), 2025-03-05](https://forum.turtlecraft.gg/viewtopic.php?p=121753#p121753); "Demo warlocks are terrible in the CC2 meta. If almost anything opens on you(rogue,warrior,feral druid) you are going to die before your greater demon kills them ... Casting a 1.5 voidwalker summon with fel domination is near impossible in this burst heavy meta ... voidwalker Sacrifice is such a negligible shield now" [pillowed (player), 2025-06-29](https://forum.turtlecraft.gg/viewtopic.php?p=137375#p137375); "demo lock now is a support class with 50% slow thats it" [Ataika (player), 2024-11-19](https://forum.turtlecraft.gg/viewtopic.php?p=108635#p108635); greater demons need setup time and turn hostile; "soul link is boring as hell and lacks all of the utility and damage features" [Forumdweller (player), 2025-05-06](https://forum.turtlecraft.gg/viewtopic.php?p=129896#p129896).
- **Community standing**: **alternative** — the safe/learning PvP build ("It was always good to get accustomed to warlock in pvp, but weaker than 30/0/21 or deep destruction" — Zulnam; "pvp if you are new to the class and want to be a bit more defensive (20/31/0)" [Zulnam (player), 2024-10-09](https://forum.turtlecraft.gg/viewtopic.php?p=102810#p102810)); **contested** whether it is "incredibly strong" (Deer12w, Forumdweller) or "mid" (Zulnam, pillowed). 1.18.1 explicitly targeted its durability: "because the recently introduced PvP dampening has been more beneficial for classes focusing on survivability, we're balancing out demonology warlock's durability" [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071).

## Official kit — PvP-relevant (see `demonology-ranged-dps.md` for the full Demonology list)

- CC2: Soul Link passive, 20% transfer, +5% damage, applies to greater and enslaved demons; Master Demonologist per-demon bonuses (Voidwalker −10% physical taken); Fel Domination 5 min; Master Summoner −60% mana; **greater demons controlled on summon** (1 min, then 3 min from 2024-12-20). Demonic Sacrifice moved up (Voidwalker sacrifice = 3% health / 4 s).
- 2024-12-20: Soul Link 25%; Master Demonologist Voidwalker +healing taken 4–20%; Succubus Soothing Kiss threat rework; Felhunter 1.4-s attacks and Tainted Blood on attack ("plus tainted blood for 5 perma debuffs now so he wastes gcds on dispelling ur dots" — Forumdweller 2025-05-07).
- CC3: Power Overwhelming removes CC from the demon and costs 40% base health; Demonic Precision baseline hit/crit; Master Demonologist simplified (greater demons +spell crit, −healing taken); Curse of Exhaustion 10% base (Improved at Affliction row 5) — a 20/31/0 build keeps 10% only; Sinister Pursuit (row 1 Affliction at the time).
- 1.18.1: **Soul Link 20%**; healing reduction moved from the Warlock (Master Demonologist) to the enslaved/greater demon (Enslave Demon −50% healing) — a buff to the Warlock's own healing; **Felguard Axe Toss 4 → 2 s** ("Stun of such duration often means a guaranteed kill in combination with Felguard's raw power"), Legion Strike healing reduction 25%; **Felhunter and Infernal armor −30%** ("Felhunter is a bit too well-rounded"); **Sinister Pursuit** 2-pt Demonology talent +5/10% pet speed incl. greater demons; Ritual of Doom solo-castable (3 s + 2 s); Demon Gate 4-s spawn; Curse of Exhaustion 190 mana, Curse of Tongues changes; Unleashed Potential on any direct damage.
- The Jan-2026 pet-pathing change made pets "lag behind you ... If you ride, he might be 100yd away" [Sharmaine (player), 2026-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=165906#p165906) — "rendered them wayyyy less useful" [dioaffo1 (player), 2026-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=165911#p165911). Unresolved in the extract.

## Talent build

- **SL/Shadowburn** (wiki): `https://talents.turtlecraft.gg/warlock?points=AoAAAAAAAAAAAAArAQBpCDBYFYBAFAFABAAAAAAAAAA=` — "Focused on damage and survivability; nerfed tankiness, so play cautiously".
- **SL/NF** (wiki): `...?points=AoSQIYSAAAAAAAAoQYBoCbBAFIBAAAAAAAAAAAAAAAA=` — "High burst potential with Nightfall procs; riskier but rewarding".
- Tbcb's SL/Shadowburn link for Blood Ring: `https://talents.turtlecraft.gg/warlock/H0C-CUIJIH1V-5U01` (old link format), with the open question "demonic aegis instead of bonus health? Or no imp suc?" [Tbcb (player), 2024-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=94748#p94748) — unanswered.
- Deer12w's greater-demon build: "20/31/0" with "buffed exhaustion" (pre-CC3: Curse of Exhaustion + Improved Debilitating Curses at row 2; after CC3 the improved slow needs row 5, so 20/31/0 has only 10%).
- A 2020 15/31/5 "all-minion" Soul Link build with Improved Shadow Bolt 5/5 and no Demonic Embrace [Roxanneflowers (player), 2020-07-21](https://forum.turtlecraft.gg/viewtopic.php?p=7010#p7010) — **obsolete** (pre-CC2 talents: Improved Imp/Voidwalker/Succubus, Improved Drain Soul, Improved Healthstone, 5-pt Unholy Power).
- Named talents from the PvP threads: Soul Link, Master Demonologist 5/5 (Voidwalker −10% physical), Demonic Embrace 5/5 ("15% more hp" — Vrankz), Fel Domination + Master Summoner ("talents that allow to quickly resummon demons" — Vrankz; macros in [Ulukay (player), 2024-11-06](https://forum.turtlecraft.gg/viewtopic.php?p=106706#p106706)), Demonic Aegis (Demon Armor +; "hilariously negligble" [Forumdweller (player), 2025-04-19](https://forum.turtlecraft.gg/viewtopic.php?p=127471#p127471)), Fel Stamina, Sinister Pursuit 2/2 (1.18.1) for pet uptime, Nightfall 2/2 or Shadowburn, Grim Reach, Curse of Exhaustion (10%).
- Patch validity: wiki links are undated (CC2-era at best); Deer12w and pillowed argue on the CC2 tree; nothing after 2026-03-20 gives a Soul Link build. The 1.18.1 durability nerf (20% transfer) and the healing-reduction move are the only structural changes since.

## Stat priority

- Stamina and Demonic Embrace first (SL splits damage with a pet whose health scales from Fel Stamina); "Warlock has ... 2 massive shields, soul link, master demonologist and ton of cc" (1.18.1 notes thread, [player, 2025-12](https://forum.turtlecraft.gg/viewtopic.php?t=22214)). Shadow spell damage next (Xudo's greens). Pet stamina matters: "demons always should have 30%+- of WL stamina" [Akarui (player), 2025-07-30](https://forum.turtlecraft.gg/viewtopic.php?p=142148#p142148) — Fel Stamina 10–50% of yours.
- The PvP epic set "lost 10% Soul Link, low armor" per a 2026 player report cited in the 1.18.1 changelog ([Moomoobro (player), 2026-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=172842#p172842)); single source.

## Rotation / priority

Sources: Deer12w, pillowed, Twospooky, Vrankz, Forumdweller, the SL/NF wiki note.

**Setup**: Voidwalker out (Sacrifice available) unless you are hunting casters (Felhunter) or need a charm (Succubus); Demon Armor; Soul Link is passive on any controlled demon; Curse of Exhaustion rank on the bar; Healthstone; Spellstone (on-use magic cleanse + absorb, shares Healthstone CD — decide which you carry).

**Priority**:
1. Someone opens on you → Curse of Exhaustion (10% base; 40% only with 20+ Affliction) → Corruption / Curse of Agony → Death Coil when they connect ("Death coil if they deal 2000 damage").
2. Greater demon ready and the fight will last > 30 s → Inferno (1.5-s cast) on the target ("dropping inferno on them as non demo and ran around a pillar while it solod them" [Forumdweller (player), 2025-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=131469#p131469) — worked even without Demonology); Felguard via Demon Gate (4-s cast + 4-s spawn since 1.18.1, "interrupted when taking damage" per Jumadforum — pre-cast it out of combat); Doomguard only from Ritual of Doom (solo since 1.18.1, 3 + 2 s) — "Rend and Rain of Fire and trash but war stomp and cripple are mad" [Forumdweller (player), 2025-05-30](https://forum.turtlecraft.gg/viewtopic.php?p=133696#p133696).
3. Power Overwhelming when the demon is CC'd or when you want 10 s of burst (costs 40% base health).
4. Nightfall proc → Shadow Bolt (SL/NF) or Shadowburn on a low target (SL/SB).
5. DoTs: Corruption, Curse of Agony (or Curse of Exhaustion / Tongues as needed — one curse per target), Siphon Life if reached; Immolate only if you do not need Seduction.
6. Drain Life when you need health and are not being trained (Fel Concentration 2/2 helps); Health Funnel the pet between engagements; Voidwalker Sacrifice when the pet is about to die or you need a shield to re-summon under (Fel Domination).
7. Fear/Howl only on targets without WotF/Fear Ward/Tremor; Seduce the second attacker.

## Role strategy (BG)

- Flag carrier escort / "warsong gulch stick delivery peeling bot" (Ataika 2024-11-19, dismissively) — the slow + Death Coil + Soul Link package is peeling utility.
- Greater demons need a pillar or a distracted enemy: "you are a killing machine if you happen to be able to summon a greater demon while everyone else is fighting and nobody turns to target the warlock controlling the greater demon but it just doesn't work that way" (pillowed).
- Enslaved demons cannot be brought into BGs (Springboards, 2025-05-16, requesting it); greater demons summoned inside are fine.
- Pet uptime: Sinister Pursuit 2/2 after 1.18.1; before that "Try it yourself get a player to constantly run and sic a succubus on him, maybe first 2 of 3 hits will hit" (Springboards 2025-10-18).
- Demonic Sacrifice + greater demon: "Demonic Sac is removed when you summon a greater demon" (pillowed, edit 2), confirming the 2025-03-30 staff change ("removed when you enslave a demon").

## Common mistakes

- Trying to hard-cast a Voidwalker under pressure without Fel Domination up (pillowed).
- Using Curse of Exhaustion as if it were still 50% after CC3; running out of mana on it after 1.18.1.
- Summoning a Felguard/Infernal in the open and then being the only target ("nobody turns to target the warlock" is the fantasy, not the reality — pillowed).
- Forgetting Soul Link's damage transfer kills a low-health pet; Health Funnel between fights.
- Expecting Voidwalker Sacrifice to absorb a burst opener ("it only adds maybe 1 or 2 more hits" — pillowed).
- Playing SL on Alliance and relying on Fear against Undead.

## Sources

| Recommendation | Sources | Agreement | 1.18.1 note |
|---|---|---|---|
| SL is the safe/tanky PvP build | Majestik51 2024-05-13, Ataika 2024-05-13, Zulnam 2025-03-05, Dannyp92 2025-03-05 | consensus that it is durable; contested that it is strong (Deer12w, Forumdweller 2025-06-15 vs pillowed, Ataika 2024-11-19) | Soul Link 20%; healing reduction moved off the Warlock |
| Greater demons as SL win condition | Deer12w 2025-03-06, Forumdweller 2025-05-16/2025-06-15 | contested (pillowed 2025-06-29) | Felguard nerfs; Ritual of Doom solo |
| Builds (SL/NF, SL/SB) | wiki, Tbcb 2024-05-13 | single-source links, undated | — |
| Curse of Exhaustion value for SL | Deer12w, Halfgeek9 2025-08-04, Mitzter 2025-06-16 | consensus pre-CC3; weaker after | 190 mana |
