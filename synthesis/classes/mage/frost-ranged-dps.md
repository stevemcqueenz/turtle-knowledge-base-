# Mage — Frost — Ranged DPS (raids and dungeons)

Era coverage: Frost got Icicles, Flash Freeze, the Ice Barrier damage bonus, the Improved Blizzard slow nerf (65% → 40%) and the Shatter nerf (50% → 35%) in 1.17.2; Icicles GCD 1 s (2024-12-20); Flash Freeze no longer procs from temporary immunities (2025-04-01); Ragnaros made freeze-immune (2025-04-30); Icicles triggers Master of Elements (2025-02-19); Icicles root cannot trigger negative effects (2025-10-22). **Patch 1.18.1's only Frost change: Ice Barrier's Frost-damage bonus while active reduced from 15% to 5%, plus +10% Frost damage for 1 minute on cast, independent of the barrier** ([Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)).

## Overview

- **Role.** Ranged caster: Frostbolt filler, Icicles (5 s self-rooting channel, 4 ranks) whenever Flash Freeze procs, Ice Barrier upkeep. Staff intent: "the rotation is entirely composed of a single ability … Frostbolt … we've added new functionality to Ice Barrier to reward its upkeep, a new rotational ability called Icicles and the Flash Freeze talent that synergizes with Icicles and primarily activates against creatures" [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968).
- **Community standing: niche in raids (lowest of the three), favored for open-world/soloing and (historically) PvP** — **contested**:
  - Against: "Frost mage is absolutely dead, no one raids and no one levels in frost. Low damage, no control" [Stron2003, 2025-09-16](https://forum.turtlecraft.gg/viewtopic.php?p=151926#p151926); "Frost damage is poo poo … they are below even priests in raid" [Sharmaine, 2025-10-14](https://forum.turtlecraft.gg/viewtopic.php?p=155528#p155528); "I cannot recommend playing Frost in Raids … Until the Devs actually rework and Buff Frostmage, it will not be playable outside of Open World Content. It DOES excel there." [Eluaria (player), 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171409#p171409); "frost is the one with least dps" [Darkhann, 2026-03-08](https://forum.turtlecraft.gg/viewtopic.php?p=170344#p170344); "Frost in PvE is so BAD, sometimes in boss fight you have O N L Y ONE proc of icycles for WHOLE fight" [Alienns, 2026-04-10](https://forum.turtlecraft.gg/viewtopic.php?p=174699#p174699); "Frost damage is low … Frost burst is also heavily nerfed compared to classic … due to bugged mechanics and nerfed shatter" [amanagor, 2026-02-11](https://forum.turtlecraft.gg/viewtopic.php?p=167933#p167933).
  - For: wiki "Frost - hardest to play at a high level due to needing to maximize flash freeze procs and manage more cooldowns. Highest average single target dmg and best dps on small trash packs. As of April 7th, frost has mana issues." and "Frost is viable but not many people play it due to its variance and current mana issues, hopefully addressed in 1.18.1" [Mage General FAQ (wiki, rev. 2026-09-09)](https://turtle-wow.fandom.com/wiki/Mage_General_FAQ) (1.18.1 did not address mana); "Frost dps is fine" [Bigsmerf, 2025-06-07](https://forum.turtlecraft.gg/viewtopic.php?p=134584#p134584); "frost is still significantly better than ele/enha in pve" [amanagor, 2024-12-05](https://forum.turtlecraft.gg/viewtopic.php?p=111502#p111502); "Raids are quite chill in turtle so you can pick any spec" (Darkhann).
  - Staff: no Frost-specific balance comment after 2024-12; "Mages of all specializations are currently performing quite well" [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460).
  - Player theory why: devs "want frost to be more of a pvp spec" [Captain4k, 2026-02-04](https://forum.turtlecraft.gg/viewtopic.php?p=167387#p167387) — unconfirmed.
- **Strengths:** survivability and control for soloing elites (Eluaria 2026-03-20; "Iceblock is a lifesaver. Frostbolt crits are insane" [Imonobor, 2023-12-21](https://forum.turtlecraft.gg/viewtopic.php?p=82194#p82194)); best DPS on small trash packs (wiki); Icicles' burst when Flash Freeze procs (Icicle averages 6000 DPS over its 0.21 s per-icicle cast in the wiki sim).
- **Weaknesses:** Flash Freeze RNG (15% Frostbite) — "there is a decent chance that a fight goes over without a single Flash Freeze Proc" [Eluaria, 2025-10-19](https://forum.turtlecraft.gg/viewtopic.php?p=156219#p156219); Frostbite 3/3 mandatory for procs ("We are forced to put 3 points into Frostbite, a pvp talent … only to make icicles useful in a boss fight" — Frost raider in the Karazhan balance thread, [t15610, 2024-11](https://forum.turtlecraft.gg/viewtopic.php?t=15610)); Icicles roots you and shatters for 30% base HP when hit ("becoming a bomb that blows itself up when hit by even a smallest AoE" [Gattare, 2024-12-05](https://forum.turtlecraft.gg/viewtopic.php?p=111489#p111489)); Ice Barrier damage bonus lost to AoE (the 1.18.1 change was made exactly because "that same damage now feels punishing when it breaks the barrier" — Jamey 2026-01-23); mana issues from April 2025 (wiki; cause not documented); Icicles cannot be used well on bosses you can't stand next to for Frost Nova ("you can do that in MC not in every boss in Kharazan" — Alienns).

## Talent build

### Official talent numbers (Frost)

| Talent | Effect | Source |
|---|---|---|
| Icicles | Row 5 keystone; ranks at 30/40/50/60: 200/265/330/400 mana, 101/147/213/272 per icicle, 1 per second for 5 s, 40% SP per icicle, 30 s cooldown, 30 yd, roots the caster; damage taken has a high chance to shatter the prison for 30% base HP Frost damage; cancelling early keeps the root; GCD 1 s (2024-12-20); Elemental Precision applies (changelog 2024-12-04); triggers Master of Elements 2/4/6% per missile up to 10/20/30% (2025-02-19); the self-root "can no longer trigger negative effects" (2025-10-22); casting on a target out of LoS no longer eats the GCD (2025-03-19); does not stack between mages (fixed 2024-11-20) | [Dragunovi 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968); [Jamey 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460); changelogs |
| Flash Freeze | Row 6, 2 pts: when a freeze is applied to a freeze-immune target, 50/100% to finish Icicles' cooldown and make the next Icicles channel 400% faster, 10 s; triggered by Frostbite and Frost Nova; **not** by temporary immunities (Free Action Potion, Blessing of Freedom) since 2025-04-01 | staff 2024-10-12; [Torta 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504) |
| Ice Barrier | 1.18.1: +5% Frost damage while active and +10% Frost damage for 1 min on cast (was +15% while active) | [Jamey 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) |
| Shatter | 7/14/21/28/35% (was 10–50%) | staff 2024-10-12 |
| Improved Blizzard | slow 20/30/40% (was 30/50/65%); chill no longer overrides longer-lasting slows (changelog 2024-06-26) | staff 2024-10-12 |
| Piercing Ice | moved to row 2 | staff 2024-10-12 |
| Winter's Chill | no longer has a separate miss chance (changelog 2024-12-11) | changelog |
| Ragnaros | freeze-immune since 2025-04-30 so Flash Freeze works on him | changelog 2025-04-30 |

### Allocation

**No complete raid build exists in text** — the wiki's "Pepo frost" is an image (**gap**). Talents that every raid source requires:

| Talent | Points | Why / source |
|---|---|---|
| Icicles | 1 | the rotation (wiki Frost FAQ, [Crake, 2025-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=152031#p152031)) |
| Flash Freeze | 2 | "use frost nova, cone of cold, and even blizzard to trigger flash freeze in order to get 1 second icicles" (wiki) |
| Frostbite | 3 | needed for procs on bosses you can't nova (Karazhan-thread raider; Eluaria 2025-11-26: "incredibly reliant on RNG Flash Freeze Procs due to Frostbite") |
| Ice Barrier | 1 | "Always keep ice barrier up if possible" (wiki) |
| Winter's Chill | 2–3 | wiki sim: 5/5 gives 96.7% 5-stack uptime (1410 DPS) vs 3/5 90.5% (1403) vs 2/5 80.4% (1400); with two Frost mages 2 each = 93.8%. "Conclusion: 2 or 3 points really all you need". Forum: "frost mages just putting 2 talents into WC because 5 is overkill" [Bahamutxd, 2024-11-30](https://forum.turtlecraft.gg/viewtopic.php?p=110620#p110620) |
| Improved Frostbolt, Elemental Precision, Ice Shards, Frost Channeling, Shatter, Piercing Ice, Arcane Concentration | 5/3/5/3/5/3/5 | the wiki single-target leveling priorities (Frost FAQ) and the Levelling FAQ table |

The wiki Levelling FAQ (rev. 2025-10-01) single-target table at 59 is 50 points: Improved Frostbolt 5, Frostbite 3, Improved Frost Nova 2, Ice Shards 5, Shatter 5, Ice Block 1, Cold Snap 1, Frost Channeling 3, Elemental Precision 3, Piercing Ice 3, Ice Barrier 1, Arctic Reach 2, Arcane Subtlety 2, Arcane Focus 3, Arcane Concentration 5, Permafrost 3, Improved Cone of Cold 3 — **without Icicles or Flash Freeze** ("I don't recommend using icicles at all when leveling", Frost FAQ). Converting it into the raid build means dropping Permafrost/Improved Cone of Cold/Arctic Reach/Arcane Focus for Icicles, Flash Freeze and Winter's Chill — that conversion is this document's inference, not a source's build.

Player builds: Frost/Fire AoE-farm build "0/24/27" — `https://talents.turtlecraft.gg/mage?points=AAAAAAAAAAAAAAFAoYDIADLAAAAAFAYQpAQoBDAAAAA%3D`, "buff Flamestrike critchance to 56% with Frost Nova and fire talents and let mobs to Ignite" [Xudo, 2024-12-05](https://forum.turtlecraft.gg/viewtopic.php?p=111491#p111491) (export not decodable).

## Stat priority (level 60)

Wiki sim ([Mage Frost FAQ](https://turtle-wow.fandom.com/wiki/Mage_Frost_FAQ); rotation "nova when available -> icicles when you have flash freeze -> frostbolt", Ice Barrier up, 110 s):

| Profile | 1% Hit | 1% Haste | 1% Crit |
|---|---|---|---|
| Endgame (1000 SP, 40 crit, 15 hit, 0 haste) | ~18–19 SP | ~12–13 SP | ~11–12 SP |
| Fresh 60 (300 SP, 18 crit, 13 hit) | ~11–12 SP | ~6 SP | ~7 SP |

Priority: hit to cap (16% generic figure) → spell power → haste ≥ crit. Damage split: Frostbolt ~57%, Icicles ~43%. PvP stat notes are in `frost-pvp.md`.

## Single-target rotation (raid; freeze-immune targets only)

Wiki Frost FAQ: "THIS ONLY APPLIES TO MOBS THAT CANNOT BE FROZEN (most mobs in raid). Outside of raids most mobs CAN be frozen so these rotations don't apply to leveling or dungeons." A spreadsheet of raid mobs that are *not* freeze-immune is linked from the wiki ("You don't want to use frost nova/cone of cold on these unless you/your guild are prepared for mobs potentially getting rooted").

1. Before the pull: cast **Ice Barrier** ("Make sure you are refreshing it right before pull"); in 1.18.1 casting also grants +10% Frost damage for 60 s, so recast on cooldown regardless of whether the shield is up.
2. **Frost Nova** on the boss (stand in melee range) → Flash Freeze proc → **Icicles** (400% faster channel = ~1 s) → **Frostbolt** until the next proc.
3. "anytime you proc flash freeze from a frost spell you should immediately icicle" (wiki) — Frostbite procs from Frostbolt/Cone of Cold on immune targets.
4. Frost Nova on cooldown vs freeze-immune bosses "in order to get free icicles proc" ([Crake, 2025-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=152031#p152031)).

Crake's one-click priority (written for a friend, Sept 2025): Ice Barrier if not up or ≤10 s remaining and off cooldown → Arcane Surge if available → Icicles if available → Frostbolt. **Contested detail:** Crake fires Icicles whenever it is off cooldown; the Karazhan-thread raider says "Using Icicles without a flash freeze procc makes absolutely no sense"; the wiki sim only casts Icicles with a proc. A 5 s root next to a boss without a proc also exposes you to the 30% base HP shatter — bots should follow the wiki/proc-only rule.

Proc hygiene: if a Frostbolt is in flight when you press Frost Nova, the bolt's Frostbite can proc first and the Nova proc is wasted — "Grab 8 pts in fire and use fireblast first while the frobo is flying" [Atreidon, 2025-06-27](https://forum.turtlecraft.gg/viewtopic.php?p=137216#p137216) (answer to [Mokkori's](https://forum.turtlecraft.gg/viewtopic.php?p=137198#p137198) request for a second Icicles charge).

Frostbolt rank-switch macro (shatter): `/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("FrostArmor") or not b("FrostNova")then c("Frostbolt(Rank 1)")else c("Frostbolt(Rank 10)")end` — works for Frost Nova, failed to detect Frostbite ([Ibux / Anveena thread, 2024-09](https://forum.turtlecraft.gg/viewtopic.php?p=101160#p101160)).

Blink breaks the Icicles root (staff 2024-10-12); cancelling the channel early does not.

## Multi-target / AoE rotation

Wiki Frost FAQ (raid trash):
- **Up to 5 mobs:** Cone of Cold → Icicles if it procs → Frost Nova → Icicles → Arcane Explosion.
- **More than 5 mobs:** Cone of Cold → Arcane Explosion spam → "try to use icicles on something at the end when some have died".
- Only on freeze-immune packs; on freezable packs Nova/CoC root them away from the tank (wiki warning).
- Blizzard: slow nerfed to 40% ([staff](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968)); Eluaria says its damage was also cut and Improved Cone of Cold damage nerfed ([2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171409#p171409)) — not in any staff note found (**single source, unverified**); "Cone of Cold slow is untouched" (wiki Frost FAQ). Improved Blizzard and Cone of Cold slows do not coexist — the stronger overwrites, "working as intended, this was the exact way in vanilla" [Mcnair, 2023-07-05](https://forum.turtlecraft.gg/viewtopic.php?p=52391#p52391) (contested by [Avalok](https://forum.turtlecraft.gg/viewtopic.php?p=53392#p53392) who wanted TBC behaviour); since 2024-06-26 the Blizzard chill no longer overrides longer slows (changelog).
- Blizzard ticks don't proc Clearcasting ([Nett, 2024-02-02](https://forum.turtlecraft.gg/viewtopic.php?p=86786#p86786)).

## Cooldowns and resources

- **Ice Barrier**: on cooldown (1.18.1 bonus is on cast). MageHud addon shows remaining shield (wiki General FAQ).
- **Ice Block / Cold Snap**: Cold Snap gives a second Block/Nova/Barrier; "Cold Snap if Ice Block on cooldown, else Ice Block" macro (wiki Mage Macros). Fire has no Block → Cold Snap ([Darktifa, 2023-11-01](https://forum.turtlecraft.gg/viewtopic.php?p=75350#p75350)).
- **Mana**: Frost Channeling −15% cost/−30% threat (vanilla numbers as quoted in [Roxanneflowers' 2020 build](https://forum.turtlecraft.gg/viewtopic.php?p=6936#p6936)); Arcane Concentration; Icicles → Master of Elements if talented (rare in Frost). Wiki reports Frost "has mana issues" since 2025-04-07 with no explanation in any changelog (**gap**).
- **Trinkets** (wiki sim, 2 min): Tear 1385 > Mark of the Champion 1381 > MQG 1366 > REoS 1363 > Shard of the Nightmare 1359 > Gulch 1351 > Eye of Dim 1343 > ToEP 1332 > Zandalarian Hero Charm 1327 > none 1314.
- **Arcane Surge** is worth a slot for Frost too (Crake's priority; Rethon macros it with Fire Blast).

## Role strategy

- Threat: Frost Channeling −30% threat; Icicles "produce a massive amount of aggr[o]" (Karazhan-thread raider).
- Positioning: melee range of freeze-immune bosses for Frost Nova procs — only where the boss allows it (Alienns: MC yes, Karazhan bosses often not). Never Icicle while standing in AoE (30% base HP shatter). AoE also breaks Ice Barrier's old damage bonus — mitigated in 1.18.1.
- Dungeons/open world: the raid rotation does not apply; play Frostbolt → Frost Nova → Blink/kite, Cone of Cold when Nova is down (wiki Levelling FAQ). Frost "can solo many Elite Quests that almost all classes have issues doing" (Eluaria 2026-03-20).
- Slow management: Chilled effects on trash for melee — a priest poster complains about purging Frost Armor (1.18.1 thread) — irrelevant for mages; keep Frost Armor/Ice Armor up for the slow on attackers.

## Gear, enchants and consumables

- **Pre-raid** (wiki General FAQ "Frost Mage"): Spellweaver's Turban, Diana's Pearl Necklace, Boreal Mantle (BRD Warder Stilgiss), Shroud of Arcane Mastery, Freezing Lich Robes (Scholo Ras Frostwhisper), Sublime Wristguards, Hands of Power, Ban'thok Sash, Skyshroud Leggings, Kayser's Boots of Precision (LBRS), Ring of the Academy / Rune Band of Wizardry / Don Mauricio's Band, Witchblade, Tome of Shivering Secrets (Karazhan Crypt Archlich Enkhraz), Lord Valthalak's Staff of Command, Bonecreeper Stylus, Orb of Kaladoon / Blackfire Orb, Fabric of Time (Black Morass Epidamu).
- **Sets:** "Frost and Fire are stuck with Boni such as 'Do a bit less Threat' or 'Increase the radius of Flamestrike and Blizzard by 15%' … Frost benefits a lot from our Second Tier Dungeon Set. A 5% chance to trigger freeze whenever you take damage, which in turn causes Flash Freeze to proc." [Eluaria, 2025-11-26](https://forum.turtlecraft.gg/viewtopic.php?p=160732#p160732) (single source; presumably Sorcerer's Regalia T0.5, "buffed on Turtle WoW" per the wiki). T3.5 3-set: 35% proc, +20% Frost replicated damage, 4 s cooldown (1.18.0 itemization); wear 3 Frost/Fire + 3 Arcane on trash (wiki).
- Boreal Mantle was rebalanced from spell power toward raw stats ([Dragunovi (staff), 2023-10](https://forum.turtlecraft.gg/viewtopic.php?t=10971)).
- Consumables: generic mage list; Greater Fire Protection Potion for PvP.

## Common mistakes

1. Frost Nova / Cone of Cold on raid mobs that are *not* freeze-immune (roots them off the tank) — wiki.
2. Icicles without a Flash Freeze proc (5 s root, no burst) — Karazhan-thread raider; wiki sim.
3. Standing in AoE while Icicling (30% base HP self-damage; Gattare).
4. Ignoring Flash Freeze procs — "A Frost Mage will not do damage if you ignore your flash freeze procs" (cross-forum player remark).
5. Pressing Frost Nova with a Frostbolt in flight (wastes one of the two procs) — Atreidon.
6. Kiting packs with Blizzard as in Classic — slow is 40% now; use Cone of Cold / Frost Nova / Flamestrike / Arcane Explosion ([Eluaria, 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171409#p171409); [Atreidon, 2026-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=168459#p168459)).
7. Taking 5/5 Winter's Chill (2–3 suffice per wiki sim).
8. Expecting Flash Freeze from a Free Action Potion or Blessing of Freedom (removed 2025-04-01).
9. Letting Ice Barrier lapse / not recasting it on cooldown for the 1.18.1 cast bonus.

## Sources

| Source | Authority | Date | Era |
|---|---|---|---|
| [Dragunovi p102968](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968) | staff | 2024-10-12 | pre-1.18.1 |
| [Jamey p113460](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460) | staff | 2024-12-20 | pre-1.18.1 |
| [Torta p124504](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504) | staff | 2025-03-30 | pre-1.18.1 |
| [Jamey p166071](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) | staff | 2026-01-23 | 1.18.1-announced |
| Weekly changelogs 2024-06-26, 2024-11-20, 2024-12-04, 2024-12-11, 2025-02-19, 2025-03-19, 2025-04-30, 2025-10-22 | staff | as dated | pre-1.18.1 |
| [Mage Frost FAQ](https://turtle-wow.fandom.com/wiki/Mage_Frost_FAQ) (rev. 2025-10-28), [Mage General FAQ](https://turtle-wow.fandom.com/wiki/Mage_General_FAQ) (rev. 2026-09-09), [Mage Levelling FAQ](https://turtle-wow.fandom.com/wiki/Mage_Levelling_FAQ) | wiki (community) | — | — |
| Crake p152031 | player | 2025-09-17 | pre-1.18.1 |
| Eluaria p156219, p160732, p167347, p167923, p171409 | player | 2025-10 → 2026-03 | both |
| Karazhan balance thread Frost raider ([t15610](https://forum.turtlecraft.gg/viewtopic.php?t=15610), page 3 area) | player | 2024-11 | pre-1.18.1 |
| Gattare p111489; Bigsmerf p111490/p134584; Xudo p111491; Bahamutxd p111494/p110620; amanagor p111502/p167933; Atreidon p111516/p137216/p168459; Jammyzz p111518; Bayanni p111549; Mokkori p112682/p137198; Stron2003 p151926; Sharmaine p155528; Darkhann p170344; Alienns p174699; Captain4k p167387; Cheruscan p167405; Imonobor p82194; Mcnair p52391; Avalok p52335/p53392; Nett p86786; Ibux p101160; Darktifa p75350; Laysson p134573 | players | 2023–2026 | as dated |

Agreement: raid standing — contested (majority: weakest; wiki/minority: viable but high variance); rotation — single source (wiki) with Crake partially agreeing; Winter's Chill points — consensus (sim + player); build — no complete source.
