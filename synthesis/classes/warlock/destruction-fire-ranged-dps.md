# Warlock — Destruction (Fire) — Ranged DPS (raid / dungeon)

The "Firelock": Soul Fire (Improved Soul Fire buff) → Immolate → Conflagrate, Searing Pain filler, Hellfire / Rain of Fire on trash. Turtle-only spec: staff rebuilt it in CC2 and kept tuning Searing Pain and Hellfire through 1.18.1. Shadow builds are in `destruction-shadow-ranged-dps.md`; the PvP Conflagrate build is in `destruction-pvp.md`.

All dates UTC. Eras: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). Kit revisions within pre-1.18.1: CC2 (live 2024-11-01), 2024-11-20, 2024-12-20, 2025-03-30, CC3 (live 2025-08-15).

## Overview

- **Role**: burst / trash-oriented ranged DPS with the class's only real AoE toolkit (Hellfire with Destructive Reach radius, Rain of Fire, Infernal).
- **Strengths (sources)**: "the primary damage-dealing skills (Searing Pain, Immolate, Conflagrate) have quick cast times, are less affected by hit rating, and have an interesting rotation"; "Fire Destruction performs fairly well on trash mobs; from my Naxxramas (NAXX) and Ahn'Qiraj (TAQ) runs, it is indeed stronger than Dark Destruction ... Goblin Bombs benefit from fire damage bonuses ... Immolate and Searing Pain do not have travel time ... Since the number of trash mobs in a raid is always greater than the number of bosses ... Fire Destruction's overall damage is currently the highest among all Warlock talent builds" [LastyK (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107778#p107778); post-1.18.1: "At lvl 50 you get the infernal, paired with power overwhelm + 3 times stacked unleashed potential and your hellfire ... you'll do top aoe damage on trash mobs" [Momohomo (player), 2026-04-06](https://forum.turtlecraft.gg/viewtopic.php?p=174180#p174180); "+17(!)% critchance on our spammable firespell" from Devastation, Improved Searing Pain and Firestone [Atreidon (player), 2026-02-01](https://forum.turtlecraft.gg/viewtopic.php?p=167130#p167130).
- **Weaknesses (sources)**: fire-immune Molten Core / Blackwing Lair ("It's already viable... Just as long as you're not doing MC or BWL" [Bigsmerf (player), 2024-05-10](https://forum.turtlecraft.gg/viewtopic.php?p=94518#p94518)); no talent hit — "getting hit-capped without any talent support is extremely difficult unless you already have specific items from MC/BWL/AQ40/Naxx ... That makes Fire mostly a PvP or very late-game option" [Spritzbube (player), 2026-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=169207#p169207); low spell-power coefficients on the fillers ("Flask of Supreme Power ... Shadow Bolt will increase by around 128 points, but Searing Pain will only increase by around 63 points"; "Searing Pain's coefficient is only 16%" [Islandboii (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107891#p107891) — both pre-1.18.1; 1.18.1 raised it to 57% with a 2-s cast); Life Tap is not boosted by Fire damage so more taps are needed (LastyK); threat ("Searing Pain is just a bad filler spell, and the threat generation is way too high" — Spritzbube; "the threat is also a factor with some crits can also make pull aggro" [Lanayru (player), 2026-02-26](https://forum.turtlecraft.gg/viewtopic.php?p=169439#p169439)) even though the threat modifier itself was removed in CC2.
- **Content**: raids from AQ40 on and Karazhan trash — accepted; MC/BWL — no; dungeons — good AoE; PvP — see `destruction-pvp.md`; leveling — "Destro is the worst" [Erhog (player), 2025-03-06](https://forum.turtlecraft.gg/viewtopic.php?p=121852#p121852).
- **Community standing**: **niche / contested**. Pro: LastyK (Nov 2024, highest overall), Momohomo (2026, trash AoE), Majestik51 ("Turtle destro warlock is every warlocks player dream" [Majestik51 (player), 2024-01-08](https://forum.turtlecraft.gg/viewtopic.php?p=83998#p83998)). Con: "Fire lock needs massive buffs for specs to be comparable" [Jervy (player), 2024-11-16](https://forum.turtlecraft.gg/viewtopic.php?p=108198#p108198); "today fire destro just dont have a role on raids. its a pvp spec" [Hyrag (player), 2024-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=87962#p87962) (pre-CC2); "the other builds (SM/Ruin and Fire) are simply too weak" (Spritzbube 2026). Bots: bring Fire for AQ40/Naxx/Kara trash-heavy raids only when the raid accepts it; never to MC/BWL.

## Official kit (staff)

- CC2 (2024-10-12), [Dragunovi (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=102973#p102973): design goal "made Conflagration a more desirable capstone"; **Searing Pain loses its threat modifier** ("compensated by the new Wrathstone"); **Soul Fire** ranks at 30/38/46/54, 125% SP, 30-s CD; **Improved Shadow Bolt** flat procs; **Cataclysm** 2–10%; **Demonic Swiftness** (Firebolt −0.25/0.5 s, Lash of Pain −3/6 s) replaces Improved Lash/Firebolt; **Aftermath** 3 points, +2/4/6% Immolate periodic, "50% slow" wording; new **Improved Soul Fire** (row 5, 2: 50/100% shard refund and +8% Fire for 25 s); Intensity and Pyroclasm up a row; **Improved Immolate** all damage 4–20%; **Conflagrate no longer consumes Immolate** ("consumes 3 seconds of your Immolate spell to deal damage equal to it"), 1-s GCD. Stones: **Firestone** (22: +2% Fire crit, 40% chance on melee/wand for 15–20 + level Fire), **Wrathstone** (42: +40% Fire threat, −30% Hellfire self-damage).
- 2024-11-20, [Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=108776#p108776): Searing Pain base damage +10%; Imp Firebolt coefficients reduced.
- 2024-12-20, [Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460): "For Shadow and Fire Destruction Warlocks, the changes aim to bring more consistency"; **Improved Soul Fire buff applied on cast, 30 s** ("Having the chance for this crucial part of your rotation to miss didn't feel good").
- 2025-03-30, [Torta (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504): Imp Firebolt SP scaling 10–40% by rank.
- CC3 (2025-07-25), [Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159): stones usable in combat; **Rain of Fire 1-s ticks**; **Soul Fire 114% SP** ("normalizing the scaling to make up for the increase of Improved Soul Fire's power"); **Improved Soul Fire 10%**; **Destructive Reach also increases Hellfire radius**; Demonic Sacrifice Imp → +4% spell damage; Soul Entrapment 2/4/6%; new Voidstone.
- 1.18.1 ([Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), revisions 2026-01-26 and 2026-03-19): **Searing Pain**: GCD 1 s ("resolving the Searing Pain's lack of ability to benefit from haste effects"), then base cast 1.5 → **2.0 s with 57% SP scaling** and **Bane also reduces Searing Pain cast time by 0.1–0.5 s** (so 1.5 s at 5/5 Bane — "searing pain casts with the destro talent in 1,5 seconds", Momohomo), then **base damage +~20% for all ranks** (2026-03-19); **Hellfire**: SP scaling 2.2% → 4.125% → **6.66% per tick**, mana R3 1300 → **325 + 65/s**; Curse GCDs 1 s; Master Conjuror removed.
- AQ20 set (1.18.0 itemization): "Reduces the casting time of Immolate by 0.5 sec. Conflagrate deals an amount of damage equal to 3 sec. of your Immolate spell without consuming its duration" [Dragunovi (staff), 2025-06-30](https://forum.turtlecraft.gg/viewtopic.php?p=137624#p137624); T1 8-set also reduces Fire spell mana and the ZG 5-set reduces Soul Fire cooldown [Dragunovi (staff), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105276#p105276).

## Talent build

No post lists a full 51-point Fire raid build talent by talent. What exists:

- Community wiki "Firelock" link `https://talents.turtlecraft.gg/warlock?points=-CrAAAB-AoFYBoCFVIAoB` with "Can drop 2 in aftermath for 2 in Intensity for better shadow res tanking" (community wiki Warlock page, revision 2026-01-16). Opaque encoding; the leading `-` means no Affliction points.
- "Demonless Destruction" plan (CC2 announcement era): Soul Entrapment + Demonic Sacrifice in Demonology, deep Destruction; Xudo's edits: drop Improved Shadow Bolt ("you don't need improved shadowbolt"), drop Pyroclasm for PvE, take Cataclysm, put the freed point in Fel Domination [Xudo (player), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105313#p105313); resulting link `https://talents.turtlecraft.gg/warlock?points=AAAAAAAAAAAAAACTDABBAAAAAAAAAoFYRoCCVIAoBAA%3D` [Rudyraccoon (player), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105342#p105342). Written before CC2 went live; Demonic Sacrifice values changed twice since (Imp now +4% spell damage).
- Named talents from the sources: Devastation 5/5, Improved Searing Pain 5/5 (Atreidon's "+17%" arithmetic with Firestone 2%), Bane 5/5 (1.18.1 Searing Pain cast), Improved Immolate, Improved Soul Fire 2/2, Conflagrate, Ruin, Emberstorm, Destructive Reach, Intensity ("70% ... fire spells" pushback [Vrankz (player), 2025-05-07](https://forum.turtlecraft.gg/viewtopic.php?p=129960#p129960)), Aftermath (contested: "Aftermath doesn't improve immolate enough to seem worth it all ... the slow does not proc enough either" [Tewth (player), 2025-05-28](https://forum.turtlecraft.gg/viewtopic.php?p=133352#p133352); "Aftermath is a very poor talent" [Szalord (player), 2025-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=156057#p156057)).
- Points outside Destruction: Demonic Sacrifice (Imp) + Soul Entrapment for +10% (Tsuisama 2025-07-29), or a Demonology hybrid keeping the Imp/Infernal ("try demo/destro. searing pain good for fast gaining the unleashed potential" [Akarui (player), 2025-09-05](https://forum.turtlecraft.gg/viewtopic.php?p=150338#p150338); Momohomo's Infernal + Power Overwhelming + Unleashed Potential line). Shadow Vulnerability is skipped by demonless Fire (Xudo) but a demo/destro hybrid cannot afford it either. **Gap**: exact allocation.

Patch validity: pre-1.18.1 Fire builds are still legal; 1.18.1 made Bane mandatory (Searing Pain cast) and Hellfire far cheaper.

## Stat priority

- **Hit** first: "Destruction Warlocks rely on short burst of crits ... most of the gear doesnt have chance to crit" (Vrankz); "you need to get 16% hit chance as fire warlock and on top of that at least 20% crit" [Guiltyhaomarush (player), 2026-02-14](https://forum.turtlecraft.gg/viewtopic.php?p=168196#p168196); the 16% figure is a player restatement of the vanilla level-63 cap. Soul Fire misses used to lose the buff; since 2024-12-20 the buff is on cast, so hit matters for damage only.
- **Crit** next (Ruin, Firestone, Devastation, Improved Searing Pain). Contested by Xudo for a pure Soul Fire/Immolate/Conflagrate rotation: "Assuming that Soul Fire has additional benefits from spell power and Immolate can crit only initially ... then it is better to go full to spell power. Crit is not that important" (Xudo 2024-10-30, pre-live).
- **Spell power** third because of the coefficients (LastyK). **Haste**: Searing Pain's 1-s GCD and 2-s cast now scale with haste (Jamey 2026-01-23); the 2025 question "is haste completely useless for fire locks" [Seveta (player), 2025-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=120182#p120182) went unanswered and predates that change. Wiki: "Stat Priority: Hit and Crit".
- **T3.5 Destruction** has hit "instead of crit ... this gimps our ruin talent" [Daftpunkerlol88 (player), 2024-11-11](https://forum.turtlecraft.gg/viewtopic.php?p=107603#p107603) — single source.

## Single-target rotation

Sources: wiki Firelock ("Curse, Soulfire, Immolate, Conflagrate, Corruption, Searing Pain"), Xudo ("start with Soul Fire (to get fire buff) then immolate, then Conflagrate. If you have free time, then you spam Searing Pain or Life Tap"), LastyK ("I tried adding a Corruption spell during the 5-second window between the end of the Soul Fire buff and the end of its cooldown, and the DPS indeed increased"), a leveling destro report ("Soul fire > Immolate > Conflagrate > Searing pain", f2 Announcements [Anonymous player, 2024](https://forum.turtlecraft.gg/viewtopic.php?t=15610)).

**Opener**: 1) Curse of the Elements (raid) — the macro "Soul Fire/Curse of the Elements" on the wiki casts CoE first if missing; 2) Soul Fire (buff applies on cast, 30 s; costs a shard, Improved Soul Fire refunds it); 3) Immolate; 4) Conflagrate (1-s GCD, 10-s cooldown [Majestik51 (player), 2023-11-27](https://forum.turtlecraft.gg/viewtopic.php?p=78898#p78898)).

**Priority**:
1. Improved Soul Fire buff missing and Soul Fire off cooldown → Soul Fire (macro "Soul Fire if off cooldown else Searing Pain", wiki).
2. Immolate missing → Immolate (Conflagrate eats 3 s of it, does not remove it).
3. Conflagrate off cooldown and Immolate up → Conflagrate.
4. Curse of the Elements missing → recast (1-s GCD since 1.18.1).
5. Soul Fire buff has ≤5 s left and cooldown is not ready → Corruption as a bridge (LastyK).
6. Otherwise → Searing Pain (2.0 s base, 1.5 s with 5/5 Bane, 1-s GCD; +~20% base since 2026-03-19). Do not Shadow Bolt in a Fire spec ("Some fire warlocks are even casting Shadow Bolts in a fire spec, which is honestly ridiculous" — Spritzbube).
7. Life Tap when mana < Soul Fire + Immolate cost; Fire builds tap more than Shadow builds (LastyK).
8. Shadowburn is not in the Fire rotation in any source (shard, Shadow school) except as a finisher on fleeing targets (PvP).

## Multi-target / AoE rotation

- **2–3 targets**: Immolate each (Aftermath +% periodic), Conflagrate the main target, Searing Pain filler; Immolate has no travel time (LastyK).
- **4+ targets**: **Hellfire** (Wrathstone −30% self-damage / +40% Fire threat; Destructive Reach radius; 1.18.1: 6.66% SP per tick and 325 + 65/s mana) when the pack is stacked on a tank who has threat and does not cleave; **Rain of Fire** when melee cleave or fire-reflect makes standing in melee bad ("if trash mobs do cleave damage or something stay away and use fire rain", Momohomo); **Infernal** (Inferno, 10-min CD, 3-min control) with Power Overwhelming and Unleashed Potential for demo/destro hybrids (Momohomo). Hellfire cannot crit; Pyroclasm's 26% stun chance is per full channel not per tick ("26%/15ticks = 1,73% change per hit" [Krokzogg (player), 2023-11-12](https://forum.turtlecraft.gg/viewtopic.php?p=76997#p76997); confirmed again in 2025 [Weiro7 (player), 2025-07-12](https://forum.turtlecraft.gg/viewtopic.php?p=138826#p138826)). Warn the healer before Hellfire (Campy, `affliction-ranged-dps.md`).
- Goblin bombs benefit from Fire damage bonuses (LastyK) — engineering explosives are part of the trash toolkit.

## Cooldowns and resources

- Soul Fire (30 s) is the core cooldown; Conflagrate (10 s); Inferno (10 min, −50% with Master Summoner; also −2.5/5 min from Fel Domination talent per CC2) as a trash cooldown; Power Overwhelming (14 s) if hybrid.
- Mana: Life Tap; Cataclysm; T1 8-set Fire mana reduction; Felhunter sacrifice 3% mana / 4 s (CC3) if you do not need the Imp. Fire "does not have Improved Life Tap" reachable without Affliction points (LastyK).
- Shards: Soul Fire needs one per cast unless Improved Soul Fire refunds it (2/2 = 100%); keep 3+.
- Stones: Firestone (+2% Fire crit; melee proc is "a meme" for wand-less melee play [Manletow (player), 2023-09-23](https://forum.turtlecraft.gg/viewtopic.php?p=66609#p66609)); Wrathstone only when you want threat or are Hellfiring a lot; Voidstone (−10% spell threat) otherwise.

## Role strategy

- Threat: no threat-reduction talent; Voidstone, Succubus sacrifice (−10%), Salvation; stop Searing Pain spam when the threat meter is close (Lanayru). Wrathstone + Hellfire is "a caster taunt" (LastyK) — usable for emergency pickups but "downright deadly" [Mistermadigan (player), 2025-11-28](https://forum.turtlecraft.gg/viewtopic.php?p=160967#p160967).
- Fire immunity: swap to Shadow (respec) for MC/BWL; "MC and BWL are unplayable for fire specs" [Kord2998 (player), 2025-07-28](https://forum.turtlecraft.gg/viewtopic.php?p=141827#p141827).
- Pet: Imp for Blood Pact and Fire Shield; Demonic Sacrifice (Imp) for +4% when the pet would die.

## Gear, enchants and consumables

- T3.5 Destruction (hit-heavy, Daftpunkerlol88), AQ20 Fire set (Immolate −0.5 s / Conflagrate bonus) — "AQ20 is one of the early raids. Warlocks are going to be doing MC and BWL while wearing it" (Kord2998); Firestone; gloves enchant Fire Power (wiki); True Band of Sulfuras / fire-SP items ("what about true band of sulfuras? what if u fire destro and have items and enchants for fire spell power" — Akarui 2025-09-05); Ornate Bloodstone Dagger (self-damage proc) judged "not that good for warlocks" [Isvya (player), 2023-08-08](https://forum.turtlecraft.gg/viewtopic.php?p=56401#p56401) and nerfed in 1.18.1 to physical triggers [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272).
- Consumables: Flask of Supreme Power; Greater Fire Power potion is not mentioned (gap); goblin sappers/bombs on trash (LastyK); Healthstone; fire/arcane resist pots per raid (Bigsmerf).

## Common mistakes

- Bringing Fire to MC/BWL (Bigsmerf, Kord2998).
- Letting the Improved Soul Fire buff drop (pre-Dec-2024 it could miss; now it applies on cast — refresh on cooldown).
- Hellfire without Wrathstone/healer warning or into a cleaving pack; Inferno on every pack in a 5-man (LBRS wipe report, `affliction-ranged-dps.md`).
- Casting Shadow Bolt as a Fire lock (Spritzbube) or Searing Pain at low rank because of a stale one-button macro (Ulukay's macro ranks by mana).
- Expecting Pyroclasm stuns from Hellfire (1.7% per tick).
- Taking Aftermath for the slow (Tewth, Szalord).

## Sources

| Recommendation | Sources | Agreement | 1.18.1 note |
|---|---|---|---|
| Fire best on trash, weaker on bosses | LastyK 2024-11-13, Momohomo 2026-04-06, Sehnsucht 2024-11-13 (spreadsheet), Jervy 2024-11-16 (imp not counted) | contested | Searing Pain / Hellfire buffed 1.18.1; no post-release re-test |
| Rotation SF → Immolate → Conflag → SP | wiki, Xudo 2024-10-30, LastyK (Corruption bridge), f2 leveling report | consensus | Searing Pain 2.0 s / 1.5 s with Bane |
| Hit before crit, crit before SP | Guiltyhaomarush 2026-02-14, Vrankz 2025-05-07, wiki | consensus; Xudo 2024-10-30 contests crit | — |
| No MC/BWL | Bigsmerf 2024-05-10, Kord2998 2025-07-28, Elphadora 2023-10-16 | consensus | — |
| Aftermath weak | Tewth 2025-05-28, Szalord 2025-10-18 | consensus | — |
| Full talent allocation | wiki link (opaque), Xudo/Rudyraccoon links (pre-live) | gap | — |
