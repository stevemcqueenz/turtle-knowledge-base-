# Warlock — Demonology (deep Demonology / "Imp spec" / SL-Demo) — Ranged DPS (raid / dungeon)

The pet-focused PvE build Turtle created in CC2: Unleashed Potential stacks, Power Overwhelming, Demonic Precision, Master Demonologist, Soul Link, and the 3-minute Greater Demons (Infernal, Felguard, Doomguard). Demonic Sacrifice hybrids (DS/Ruin) belong to `destruction-shadow-ranged-dps.md`; PvP Soul Link builds are in `demonology-pvp.md`.

All dates UTC. Eras: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). Kit revisions within pre-1.18.1: CC2 (live 2024-11-01), 2024-11-20, 2024-12-20, 2025-03-30, CC3 (live 2025-08-15).

## Overview

- **Role**: ranged DPS where a large share of damage comes from the demon; the Warlock feeds it with Unleashed Potential (direct-damage procs, refreshed by Health/Mana Funnel ticks), Power Overwhelming and funnels.
- **Strengths (sources)**: "Best DPS raid build for warlock in any pre-Kara raid on bosses where pet aren't dies for certain damage spells like marks on 4Knights, polarity on Thaddius, etc. Constant damage like fire pulses from Vael or other AoE aren't that scary and pet could survive even Fel floor tick on Heigan" [Erhog (player), 2025-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=126753#p126753) (link `https://talents.turtlecraft.gg/warlock?points=AAAAAAAAAAAAAACrAYBQCDBYFYBAFAFABoBAAAAAAAA=`, no Affliction points); "the imp spec exists - it's 0/30/21 or 0/28/23, all about stacking unleashed potential" [Sharmaine (player), 2025-07-20](https://forum.turtlecraft.gg/viewtopic.php?p=140572#p140572); trash AoE with Infernal + Hellfire (Momohomo, `destruction-fire-ranged-dps.md`); Felguard "can do like 6k single target damage with a single felstorm ... it does SHADOW DAMAGE not physical" [Forumdweller (player), 2025-05-30](https://forum.turtlecraft.gg/viewtopic.php?p=133696#p133696); in Nov 2024 "only Imp is good" of the common demons when funnelled to 100% Unleashed Potential [Krotux (player), 2024-11-02](https://forum.turtlecraft.gg/viewtopic.php?p=105882#p105882).
- **Weaknesses (sources)**: pets die — "As for Demonology, it's just three words: they don't survive" [LastyK (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107778#p107778); "I started with a succubbus, she died within 2 seconds ... used my felguard, he died within 6 seconds to AoE and then used my infernal and it also died within 5 seconds" [Yggd (player), 2025-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=115748#p115748); management load ("watch pet buffs, watch your buffs, avoid fire, position for damage, position to heal pet, watch pet health, move pet ...") and no tracking of Unleashed Potential in the default UI [Jumadforum (player), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141432#p141432) (1.18.1 added a tracking buff); Greater Demons turn hostile after 3 minutes and cannot be re-enslaved ("10-20 sec under control and cant Enslave. just wtf" [Akarui (player), 2025-06-28](https://forum.turtlecraft.gg/viewtopic.php?p=137289#p137289) — a bug report, see below); pet pathing regressed in Jan 2026 ("They now lag behind you as you go ... UP stacks drop" [Sharmaine (player), 2026-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=165906#p165906)); greater demons cannot path through Gluth's tunnel, Thaddius platforms or Thaurissan's room [Sharmaine (player), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174389#p174389).
- **Content**: raids pre-Karazhan on pet-safe bosses (Erhog); dungeons/trash (Momohomo, Sharmaine on Felguard in DM East); soloing elites and Hardcore leveling (see `leveling.md`); PvP (separate file).
- **Community standing**: **niche / contested**. "i would't go deep demo for anything" [Zulnam (player), 2025-04-11](https://forum.turtlecraft.gg/viewtopic.php?p=126473#p126473); "demonology is currently a trash tree u pick entirely for the last 2 rows soul link and master demonologist" [Forumdweller (player), 2025-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=131469#p131469) vs Erhog's "best DPS raid build" and Sharmaine's Imp spec. Staff said in March 2025 that "deep Demonology talents funneled too much power into the Warlock, so the focus is being shifted more towards the demons" [Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504). Bots: run Demonology in raids only when the guild explicitly accepts pets; default to Affliction otherwise.

## Official kit (staff)

- CC2 (2024-10-12), [Dragunovi (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=102973#p102973): demons no longer take player buffs/consumables ("compensated by the Demonology tree buffs"); Greater Demons under direct control on summon, set duration, then hostile, not enslavable; **Demon Gate** (ex Demon Portal: 30-min CD, 4-s cast, gate spawns Felguard), **Inferno** 10-min CD / 1.5-s cast, **Ritual of Doom** 2 players; **Avoidance 80%** incl. greater/enslaved demons; new talents **Soul Entrapment**, **Nether Studies** (+15/30/45% Seduction/Torment/Blood Pact/Tainted Blood), **Unholy Power** 3 pts 5/10/15% all demons, **Unleashed Potential**, **Power Overwhelming** (capstone: demon +20% damage 10 s, costs 40% of its health, 14-s CD, 80 mana after 2024-11-01), **Demonic Precision**, **Master Demonologist** per-demon bonuses, **Improved Stones**, Fel Intellect / Fel Stamina % scaling, Fel Domination 5 min / 4 s (also −2.5/5 min Inferno, −7.5/15 min Demon Gate), Master Summoner 40/60% and −25/50% greater-demon cooldowns, Soul Funnel scales with missing HP/mana, **Soul Link passive on any controlled demon, 20% transfer, +5% damage**.
- 2024-12-20, [Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460): "Demonology needed the most help"; Fel Domination 4.5 s; Fel Intellect 3 pts 10/20/30% and 5/10/15% regen; Fel Stamina 10–50%; **Unleashed Potential**: "Your direct damage spell critical strikes grant your demon a stack ... for 20 sec. Your funnel spell ticks refresh its duration ... benefit from 5/10/15% of your bonus spell damage. Stacks up to 3 times"; **Demonic Precision** transfers 33/66/100% of your hit and crit; Master Demonologist: Voidwalker +healing taken, Infernal −75% healing, Felguard +30% mana cost; **Greater Demons 3 minutes**; **Soul Link 25% transfer, prevents enslaved demons breaking early**; Succubus **Soothing Kiss** reworked to reduce Succubus and Warlock threat 15–30% (3-min CD); Felhunter 1.4-s attacks, Tainted Blood on attack; demon spells gained SP scaling; Infernal 4032 HP.
- 2025-03-30, [Torta (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504): Soul Funnel costs the Warlock 30% of what is transferred; **Demonic Sacrifice removed when you enslave**; Master Demonologist Infernal healing −50%, Felguard damage +10% (from 20%); Imp Firebolt SP 10–40%; **Felguard Legion Strike 50% WD, 4-s CD, Felguard can crit**; The Black Book buff removed on unequip.
- CC3 (2025-07-25), [Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159): **Take Position** pet command; Health/Mana Funnel 30 yd; **Doomguard loses Rend, gains Infernal Blade**; **Power Overwhelming removes all CC from the demon and costs 40% base health**; **Demonic Precision 30/60/90% + 1/2/3% baseline**; **Master Demonologist** simplified: Imp −3..15% spell cost, Voidwalker −2..10% physical, Succubus +2..10% damage, Felhunter resistances, **Greater Demons +2..10% spell crit and −8..40% healing taken**; Soul Entrapment 2/4/6%; demon AP scaling: Voidwalker 20%, Succubus 40%, Felhunter 30%, Infernal 60%, Felguard 60%, Doomguard 30% (revision); Spellstone at 36; Voidstone; Ritual of Doom 5+5 s; Sinister Pursuit row 1.
- 1.18.1 ([Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) + revisions): **Enslave Demon −50% healing on the enslaved demon** (shifted from Master Demonologist, which loses its greater-demon healing reduction); **Ritual of Doom: 3-s cast, 2-s summoner channel, 1 summoner** (final); **Demon Gate Felguard delay 6 → 4 s**; **Felhunter and Infernal armor −30%**; **Felguard Legion Strike healing reduction 25%, Axe Toss stun 2 s**; **Master Summoner also −25/50% Ritual of Doom cooldown**; **Unleashed Potential procs on any direct damage (not only crits) and gives the Warlock a tracking buff**; **Soul Link 20% transfer**; **Sinister Pursuit** now a 2-point Demonology talent (+5/10% pet speed incl. greater demons); Master Conjuror removed; Avoidance also reduces cleave damage. Hotfixes: Abolish Poison/Disease castable on demons [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139); Soul Entrapment no longer boosts damage while controlling a Greater Demon [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490).

## Talent build

- **Imp spec 0/30/21 or 0/28/23** (Sharmaine 2025-07-20) — no talent list given; the 21/23 Destruction points are presumably Shadow Vulnerability/Ruin-side but this is not stated. Gap.
- **Erhog's pre-Kara raid build** (2025-04-14; link above) — opaque, Demonology + Destruction (string begins with 14 `A`s = empty Affliction). His screenshot is not in the extract.
- **Wiki "SL Demo"** `https://talents.turtlecraft.gg/warlock?points=-CoAYBoCDBYFYB-FAFABgC` — "Stat Priority: Hit and Crit. Rotation: Curse, Corruption, Immolate, Shadowbolt; use Power Overwhelming and health funnel as needed" (community wiki Warlock page).
- **Named must-haves** from the discussion: Unleashed Potential 3/3, Demonic Precision 3/3 ("allows Demonology to mesh better with critical strike equipment" — Jamey 2024-12-20), Master Demonologist 5/5, Power Overwhelming, Fel Domination + Master Summoner 2/2 (pet swapping, −50% greater-demon cooldowns), Fel Stamina (Power Overwhelming "will now reward giving demons more stamina" — Jamey CC3), Soul Link ("You already need Soul Link to safely use them" [Krotux (player), 2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107192#p107192)), Nether Studies only if you use Voidwalker/Imp buffs ("if you use only Imp or Succubus, move points out of Nether Studies" — wiki SailorVEVO note), Sinister Pursuit 2/2 for PvP pets ("warlock pets cannot keep time on target at max level pvp and it is a must-have" [Springboards (player), 2025-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=156059#p156059)).
- Patch validity: Nov-2024 tests (Krotux) predate the Dec-2024 rework of Unleashed Potential and the 3-minute duration; Erhog's build predates CC3's Master Demonologist rewrite and Demonic Precision baseline; nothing after 2026-03-20 gives a build.

## Stat priority

- Hit and crit: Demonic Precision passes 90% of your spell hit and crit to the demon (CC3), so Demonology "share[s] the same gear" as Destruction ([Krotux (player), 2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107192#p107192) asked for exactly this; granted 2024-12-20). Wiki: "Hit and Crit".
- Spell power: Unleashed Potential converts 15% of your bonus spell damage per stack (up to 3) to the demon's AP/SP; Fel Intellect/Stamina scale with your Int/Sta.
- Stamina for Power Overwhelming (costs 40% of the demon's base health, CC3) and Soul Link.
- Pet-buff items: The Black Book (BWL) "will likely make the Felguard/Infernal OP since they do all their damage in a short time" (Krotux 2024-10-20) — buff removed when unequipped (2025-03-30). "Orc passive and 3pc aq20 don't work with greater demons" (Jumadforum).

## Single-target rotation

Sources: wiki SL Demo, Jumadforum's problem list, Sharmaine (funnels), the Dec-2024/1.18.1 Unleashed Potential text, Momohomo.

**Opener**: 1) Curse (raid assignment). 2) Corruption / Immolate (instant DoTs give direct-damage procs only through Immolate's initial hit — Corruption is a DoT and does not proc UP). 3) Direct damage (Shadow Bolt, Searing Pain, Immolate) until Unleashed Potential is at 3 stacks ("searing pain good for fast gaining the unleashed potential" — Akarui 2025-09-05); since 1.18.1 any direct-damage hit procs it.
4) Power Overwhelming when the demon is at 3 stacks and above ~60% health (it costs 40% of base health; healers often cannot see pets — "many healers' raid UI doesn't display pets" [Sleeplust (player), 2026-02-01](https://forum.turtlecraft.gg/viewtopic.php?p=167109#p167109)).

**Priority**:
1. Unleashed Potential about to expire (20 s) → one Health Funnel tick (funnel ticks refresh; 30-yd range since CC3; "The talent makes Funnels refill 20% of missing hp/mp per tick" [Weiro7 (player), 2025-07-19](https://forum.turtlecraft.gg/viewtopic.php?p=140508#p140508)) or any direct-damage spell (1.18.1). Use the tracking buff (1.18.1) or the UnleashedTracker addon (needs SuperWoW) [Szalord (player), 2025-12-01](https://forum.turtlecraft.gg/viewtopic.php?p=161274#p161274).
2. Power Overwhelming off cooldown (14 s) and demon health allows → Power Overwhelming (also breaks CC on the demon).
3. Curse / Corruption / Immolate missing → reapply (wiki).
4. Felguard out and below 1560 mana for Felstorm → Mana Funnel ("Mana funnel is a must have to make your felguard use felstorm more than once per fight ... Felguard stays under control for about 185 seconds ... It's 3 felstorms at the very least provided it has mana" — Sharmaine 2025-07-19/20); contested by Akarui ("Demons are consumables").
5. Otherwise → Shadow Bolt (wiki) or Searing Pain (Fire hybrid).
6. Life Tap as needed; Health Funnel when the demon is below ~50% and no AoE is imminent (Soul Funnel costs you 30% of what you transfer).

**Greater Demons**: summon before the pull, not mid-fight ("Feels stressful to need the tank to pull ASAP because you know clocks ticking. A lot of times the pull is cancelled" [Krotux (player), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113531#p113531)); Felguard for single-target burst (Felstorm), Infernal for AoE, Doomguard "does less than half the damage of the Felguard while requiring 2 extra people" [Merkoth (player), 2025-05-29](https://forum.turtlecraft.gg/viewtopic.php?p=133555#p133555) (1.18.1 cut the ritual to 1 summoner); kill the demon with Power Overwhelming before the 3 minutes end so it does not turn on the raid ("It also makes it easier to dispose of your greater demons when their time is running out" — Dragunovi CC2; "To let it die using power overwhelming near timers end requires communication to the healers not to heal it" — Jumadforum). Toggle their abilities every summon ("Greater summons ability states are not saved" — Jumadforum). The "enslaved demon" debuff shows a wrong duration (Szalord 2025-11-30).

## Multi-target / AoE

- Infernal (Immolation aura) + Power Overwhelming + 3-stack UP + Hellfire on stacked trash (Momohomo 2026-04-06); Rain of Fire if the pack cleaves. Felguard Felstorm hits everything near it — "You can't stop the felguard from spinning if circumstances around him change which can lead to him hitting unintended targets" (Jumadforum).
- Do not pull with an aggressive greater demon; recall it before the tank pulls.

## Cooldowns and resources

- Power Overwhelming 14 s; Inferno 10 min (5 min with Master Summoner); Demon Gate 30 min (15 min); Ritual of Doom (1.18.1: 1 summoner, cooldown halved by Master Summoner); Fel Domination 5 min (instant re-summon; pair with Master Summoner for 60% mana reduction). Reagents: Infernal Stone 10 s, Demonic Figurine 20 s, both fit in Soul Bags (CC2) — carry several.
- Mana: Imp (Master Demonologist −15% spell cost); Felhunter sacrifice is not available while using a demon; Life Tap.
- Shards: every common-demon summon except Imp costs a shard; death in BGs costs a re-summon shard [Neo4m (player), 2023-07-17](https://forum.turtlecraft.gg/viewtopic.php?p=53771#p53771).

## Role strategy

- Position the pet with Take Position "behind bosses to avoid pets getting parried" (Jamey CC3); stay within 30 yd for funnels ("Staying at max range to damage means you often can't heal your pet" — Jumadforum, before the range buff).
- Threat: Felguard "insist[ing] their felguard is a dps pet ignoring its threat mechanics" rips aggro from weak tanks (Hunter forum, [player, 2026](https://forum.turtlecraft.gg/viewtopic.php?t=24713)); Succubus Soothing Kiss (Dec-2024 rework) and Voidstone.
- Fights that fear the pet bug it out; re-summon or recall ("Any fight that fears your pet bugs the pet out" — Jumadforum).
- Greater demons in cities are treated as griefing [Boeuff (player), 2025-01-03](https://forum.turtlecraft.gg/viewtopic.php?p=115350#p115350).
- Warlock tanking via the demon: only wished for ([Spriggit (player), 2023-10-29](https://forum.turtlecraft.gg/viewtopic.php?p=74657#p74657)); Voidwalker threat "doesn't really hold aggro as you get stronger" (Jumadforum) and even at 34 "still my voidwalker is losing aggro" [Milordas (player), 2026-03-29](https://forum.turtlecraft.gg/viewtopic.php?p=173046#p173046). Not a supported role.

## Gear and consumables

- No Demonology tier set exists (requested: [Krotux (player), 2024-01-29](https://forum.turtlecraft.gg/viewtopic.php?p=86262#p86262) in the itemization thread; staff replied only to acknowledge — [Dragunovi (staff), 2024-01-29](https://forum.turtlecraft.gg/viewtopic.php?p=86264#p86264)); use the SM/Ruin (crit/hit) gear. Black Book trinket for greater demons. Hourglass Sand removes Brood Affliction: Bronze from your demon since 1.18.1 (Dragunovi 2026-02-15).
- Consumables: Infernal Stones, Demonic Figurines, shards; Healthstones for you (demons cannot use player consumables).

## Common mistakes

- Summoning a greater demon mid-fight or with less than 3 minutes of boss left; letting it time out and turn on the raid.
- Using Power Overwhelming on a low-health pet in AoE.
- Forgetting to re-toggle Felstorm/Legion Strike autocast after each summon (Jumadforum).
- Setting Legion Strike and Pursuit on autocast so the Felguard is out of mana for Felstorm (Sharmaine).
- Keeping the pet in melee on bosses with unavoidable pet damage (Erhog's list); respec or sacrifice instead.
- Relying on Soul Entrapment while controlling a greater demon (hotfixed 2026-03-31 to give nothing).
- Walking greater demons through cities.

## Sources

| Recommendation | Sources | Agreement | 1.18.1 note |
|---|---|---|---|
| Demonology raid viability | Erhog 2025-04-14, Sharmaine 2025-07-20, Momohomo 2026-04-06 vs Zulnam 2025-04-11, LastyK 2024-11-13, Forumdweller 2025-05-16, Yggd 2025-01-07 | contested | UP procs on any direct damage; Soul Link 20% |
| Unleashed Potential upkeep via funnel | Jamey 2024-12-20 (staff), Weiro7 2025-07-19, Sharmaine 2025-07-19, Szalord 2025-11 | consensus | tracking buff added |
| Greater demons: pre-pull, kill before timer | Krotux 2024-12-20, Jumadforum 2025-07-25, Dragunovi CC2 (staff) | consensus | Ritual of Doom 1 summoner; Felguard nerfs |
| Only Imp worth it among common demons (2024) | Krotux 2024-11-02 | single source, pre-rework | — |
| Talent allocation | wiki link, Erhog link, Sharmaine "0/30/21" | gap (no explicit list) | — |
