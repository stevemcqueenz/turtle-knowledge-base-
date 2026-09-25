# Cross-class PvP matchups — Turtle WoW Europe `#pvp-general`

Source: the archived Turtle WoW Europe Discord channel **`#pvp-general`** (266,785 messages, 2021-05-24 → 2025-11-01), scope `staging/pvp-general-b` (`dossier.md`, `findings.yaml`, `matchups.yaml`). Every claim below is a **player or staff statement made in-channel**, not a measured win-rate; `agreement` reflects how many independent posters agreed. All citations `[[d:pvp-general#<id>]]` resolve in `structured/discord/evidence-pvp-general.jsonl` (canonical) / `staging/pvp-general-b/evidence-pvp-general.jsonl`. Machine-readable copy of the same data: `staging/pvp-general-b/matchups.yaml`.

**Era key (KB convention).** `pre-1.18.1` (< 2025-10-03) | `1.18.1-announced-pre-release` (2025-10-03 .. 2026-03-19) | `post-1.18.1` (≥ 2026-03-20). The channel ends 2025-11-01, so there is **no `post-1.18.1` data** and only ~one month of `1.18.1-announced-pre-release` (pre-release speculation, not observed play). Three internal breakpoints recur: **CC2 / 1.17.2** (~2024-12-04), the **universal PvP-trinket change** (~2025-04-10) and the **1.18 PTR / class changes** (Aug–Oct 2025).

**Authority.** Discord has no green-name signal. **Akalix**, **Dragunovi** and **Jamey** are staff/dev and their few posts are authoritative; a `Chidi <beta tester>` post is treated as beta-tester authority. The most-quoted players (self-identified specialists) are treated as recognised players: Guthlac, Drunken Robot, Saned, Alban, Pastor, Zarthok, Forlorn Shade, Stormtaurus, Sigmarette, Regalius, Mido, Kyrsie, Fuggle the Dampened, Norse, Unchallenged/Undying, mtnd, Gemina, saplingsam. Everyone else is a player. Claims appearing once are `single source`.

---

## 0. The counter matrix as the channel states it

The channel's working model is vanilla rock-paper-scissors, not class balance. The clearest programmatic statement: "In vanilla there is no 'solo' or 1v1 concept. Each class fills a very specific weakness of another class … it was meant to pvp in a small group or at least pairs (rogue/mage)" [[d:pvp-general#1114302468571009034]].

**The most complete matrix posted** (Unchallenged/Undying, 2023-07-18, `single source`, pre-1.18.1):

> Druid > Mages > Rogue > Warriors — Hunter > Mages > Priest > Rogue > Warriors — Mage > Paladins > Rogue > Shaman > Warriors — Paladin > Druids > Rogues > Warriors — Priest > Almost Everything — Rogue > Warriors — Shaman > Hunter > Priest > Paladins > Mageish — Warlock > Almost Everything — Warriors > Rogues

[[d:pvp-general#1130633126205468744]]. The same author immediately adds that "Lock, Mage, Spriest, Hunter, Shaman can easily out do [paladins] + counter most of the other classes" [[d:pvp-general#1130634005587439657]]. A later, simpler classic-rule statement: "Frost mage Vs WARR. Warr in trouble. Shadow priest vs rogue … usually has the upper hand. Druid vs rogue, rogue is kind of screwed." [[d:pvp-general#1343650721060622478]] (2025-02-24, player).

**Faction asymmetry dominates every matchup discussion.** The channel repeatedly asserts Horde runs casters (shaman/mage/lock/priest) and Alliance runs melee (warrior/paladin/hunter), which is itself a matchup effect: "horde wins most games because all casters are on horde side and every warrior and pala on alliance side … shaman is one of the biggest counters to pala and warrior" [[d:pvp-general#1407978304132091935]] (2025-08-21); "more like paladins, rogues, hunters vs shamans, warlocks, mages" [[d:pvp-general#1423248260541317130]] (2025-10-02); "horde has all priests and mages while ally has all the warriors" [[d:pvp-general#1433147935595434130]] (2025-10-29); a levelling-BG snapshot "4 warrior 4 paladin 2 hunter in WSG and that is the normal alliance team" [[d:pvp-general#1433040062240526501]] (2025-10-29). `consensus`, `1.18.1-announced-pre-release`.

### Tier lists posted in-channel (all contested against each other)

| Date | Author | S | A | B | C |
|---|---|---|---|---|---|
| 2025-03-23 | mtnd | Enh shaman, Sham hybrid, Hpala, Protpala, Melee hunter, Destro lock | Ret, Moonkin, Smite priest, Lock overhaul, Mage (icicles/arcane) | Hunter, Warrior, Druid (other specs), Shadow priest | Rogue overhaul, Heal priest, Fire mage |
| 2025-04-22 | Gemina | — | (image-only placements; "A heavily overtuned, S is cancer") | — | — |
| 2025-08-14 | saplingsam | Warrior, Mage | Hunter, Shaman, Druid, Rogue | Priest, Paladin | Warlock (nerfed hard after being dominant) |

- mtnd's full list [[d:pvp-general#1353324094954934314]] — Warrior note: "Mortal strike still a game changer, but even with the rage management, cc2 fucked it up, and they are underdogs in many ways, worst solo class by far if not well geared"; Rogue "you only exist by being a 10 min rogue" (cooldown-gated).
- Gemina's placements [[d:pvp-general#1364255069939171329]] and his "not okay" list [[d:pvp-general#1343527634344083508]] (Shamans as a whole; upper-gear Warlocks instant 70%+ damage; arcane-mage burst highest but glass-cannon; rogue borderline but counterable).
- saplingsam's 1.18 list [[d:pvp-general#1405599106486767717]].
- An earlier, high-reaction "best race/class combos" post (Orc first for everything) is joke-adjacent but widely reacted [[d:pvp-general#1138558263999332456]].

**Tier lists disagree by design.** mtnd (post-CC2) is pro-paladin/anti-warrior; saplingsam (1.18 preview) is the inverse. Do not average them.

The single most-repeated, most-contested pair is **paladin vs shaman** (see the Paladin section).

---

## 1. Warrior

**Bottom line:** the consensus "gets punished by everything with a kite" class; a monster only with gear and/or a pocket healer.

| vs | Verdict / advice | Agreement | Era | Sources |
|---|---|---|---|---|
| Mage | Hard counter. FAP or you are kited forever; do not Charge in the open (a mage's Counterspell puts you in combat and blocks Charge); reflect/reduce burst, force Blink before committing Intercept, never eat a full nova→shatter window. | consensus | pre-1.18.1 | [[d:pvp-general#1387001790829957131]] [[d:pvp-general#1338802250927177791]] [[d:pvp-general#1345910454886731869]] [[d:pvp-general#1330668444047114343]] |
| Paladin | Losing. Do not 1v1 head-on: apply Mortal Strike, let ranged burn the paladin, kite/oom only with heavy gear + tea/whipper tubers. Paladins Freedom and pillar-kite until a second HoJ globals you. "Shreds" warriors/rogues. | consensus | pre-1.18.1 | [[d:pvp-general#1198322883143938078]] [[d:pvp-general#1118214963002089563]] [[d:pvp-general#1118237730489499778]] [[d:pvp-general#1153844681717854249]] |
| Hunter | Slight hunter favour: they land entrap/improved Concussive more reliably than you land improved Hamstring. Use spacing, Reflect the Frost Trap or avoid the opener. | consensus | pre-1.18.1 | [[d:pvp-general#1126849924491919420]] [[d:pvp-general#861315901718396968]] |
| Hunter | Post trinket-change the hunter reset is removable but the warrior matchup got worse; anecdotal "100% hunter win rate" in duels. Hunter counter-kit is Monkey + Deterrence (~90% avoidance). | single source | 1.18.1-announced-pre-release | [[d:pvp-general#1429939678076862484]] [[d:pvp-general#1430283039140741252]] |
| Warlock | Semi-hard duel and worse after CC2. Succubus Seduce → Soulfire is an instant loss; Curse of Exhaustion kites with no cooldown. Only realistic line: deny the succubus or have the Warlock's trinket/coil down. | consensus | pre-1.18.1 | [[d:pvp-general#1351160314342936608]] [[d:pvp-general#1216944373036613633]] [[d:pvp-general#1380095986721886268]] [[d:pvp-general#1314934790587154572]] |
| Druid | Root + kite decides it for the druid; they shapeshift out of roots/slows, moonfire + insect swarm, reset with travel form. Chase only with FAP/intercept tempo. | consensus | pre-1.18.1 | [[d:pvp-general#1312834892807012414]] [[d:pvp-general#1334957961822601247]] |
| Druid | Counter-claim: a warrior can kill every druid spec, including out-levelling them while levelling fury. | contested | pre-1.18.1 | [[d:pvp-general#1389608692554535093]] |
| Priest | Even a 50%-resist / 2k-shield / 5.6k-hp priest is shredded in ~5s; fear is the priest's only real defense and breaks to trinket/WotF. | single source | 1.18.1-announced-pre-release | [[d:pvp-general#1351158197708263476]] |
| Shaman | Losing vs 1h-shield shaman ("i deal like 0 damage to shamans with shields"). Protection warrior with a stun is the claimed counter ("only spec that counters shaman very well"). | single source | 1.18.1-announced-pre-release | [[d:pvp-general#1348015572792901652]] [[d:pvp-general#1422251154343202876]] [[d:pvp-general#1418626701457625119]] |

**Cooldowns & consumes.** FAP is the near-mandatory anti-kite tool [[d:pvp-general#1330668444047114343]]. Death Wish for the fear matchups (warriors/warlocks) [[d:pvp-general#986653328362582016]]. Sweeping Strikes + Whirlwind punishes 2–4 stacked melee [[d:pvp-general#1060692577948541008]]. **Weapon chain is mandatory** vs disarm spam [[d:pvp-general#1290571835859275818]]. The 30-min warrior defensive CDs vs the 5-min paladin bubble is a recurring grievance [[d:pvp-general#1117825966916522055]]; a warrior trinket could not break sheep/trap/seduce pre-2025 [[d:pvp-general#1216689050057048134]].

**Group role.** Consensus group-PvP DPS is warrior [[d:pvp-general#1310884374819901450]]; with a healer it becomes oppressive ("warrior has 100% uptime") [[d:pvp-general#1429595291362918493]] [[d:pvp-general#1309915272894873653]].

*Protection warrior:* go prot and kill the shaman inside a stun [[d:pvp-general#1418626701457625119]] (`single source`, 1.18.1-announced-pre-release).

---

## 2. Mage

**Bottom line:** the classic melee-killer and control/reset class; works with almost no gear because Poly/Counterspell/Nova/rank-1 Frostbolt carry it; hard-countered mainly by good casters and by being squishy.

| vs | Verdict / advice | Agreement | Era | Sources |
|---|---|---|---|---|
| Warrior | Free win via control: Polymorph, Frost Nova, Counterspell, rank-1 Frostbolt, Blink, Ice Block. Counter Charge by casting Counterspell first. "You need no gear at all to make effective use of polymorph, counterspell, frost nova, and rank 1 frostbolt." | consensus | pre-1.18.1 | [[d:pvp-general#1094488550445170800]] [[d:pvp-general#1345910454886731869]] [[d:pvp-general#1343540135857356832]] |
| Rogue | Pure skill matchup without potions; with FAP the rogue trivially wins (kills the shatter window). Blink is "a trinket on crack" — save it for the opener, force Vanish, hold Ice Block/Cold Snap for the second chain. | consensus | pre-1.18.1 | [[d:pvp-general#1278955218364530803]] [[d:pvp-general#1102905332184928256]] [[d:pvp-general#1387768750887145482]] [[d:pvp-general#1380875640907235431]] |
| Paladin | Wins by kiting/resetting. Nova → blanket Counterspell → Poly; re-sheep a trinket; if he bubbles, Blink and reset. Dispelling Hand of Freedom is the "I WIN" button; the paladin loses the mana war. | consensus | pre-1.18.1 | [[d:pvp-general#1376543969743474790]] [[d:pvp-general#1329116276215250985]] [[d:pvp-general#1119176317791895573]] [[d:pvp-general#1165856311053930506]] |
| Hunter | Losing: hunter double Multi-Shot from 41 yd deletes a mage and cannot be interrupted without hard CC. Play the deadzone/LoS. | consensus | pre-1.18.1 | [[d:pvp-general#1120391121005195286]] [[d:pvp-general#1104030503444688896]] [[d:pvp-general#1355521268085952623]] |
| Warlock | Roughly even / mage-favoured on Turtle; frost is safer, arcane is the burst spec; can struggle vs a good caster. | single source | 1.18.1-announced-pre-release | [[d:pvp-general#1430022003674447904]] [[d:pvp-general#1274821259225596006]] |
| Shaman | Counterspell is the win condition — it locks the shaman out of damage *and* healing; shamans name it their biggest enemy. Late arcane sheep + long Counterspell + instant burst called overtuned. | consensus | pre-1.18.1 | [[d:pvp-general#1081905593008259082]] [[d:pvp-general#1380182527783862413]] [[d:pvp-general#1420659419355811892]] |

**Specs.** Frost is the default PvP spec (Ice Block + Cold Snap + shatter value) [[d:pvp-general#1065209761425002516]] [[d:pvp-general#1065059889975668736]]; a late dissent claims frost is "trashcan tier" and only arcane is good [[d:pvp-general#1429914496326959105]] (contested, 1.18.1-announced-pre-release). **Arcane burst** is the late-era boogeyman: PoM → Arcane Rupture can hit ~5–10k in one cast and is the highest burst in the game but glass-cannon [[d:pvp-general#1303023121917542452]] [[d:pvp-general#1353324094954934314]] [[d:pvp-general#1343527634344083508]] (`single source`). PoM Pyro gives up most defensive tools to nuke one target every 3 min [[d:pvp-general#1112051170308001875]].

**Blood Ring one-shot combo (arcane/frost):** dismiss/banish pet, Frost Nova to set Icicles, Gnomish Cloaking Device + rocket boots, then Frostbolt + Icicles from cloak [[d:pvp-general#1343577276763082802]]. The trinket + Arcane Power macro: "presses trinket + arcane power macro > presses arcane missiles > target dead" [[d:pvp-general#1370077415652462644]]. Ice Block + Cold Snap is "double iceblock on cooldown with swiftness pot" [[d:pvp-general#1341734834141396992]].

---

## 3. Rogue

**Bottom line:** the highest-skill-ceiling duelist and open-world ganker; weak in group fights; hard-countered by Soul Link warlocks and tanky paladins; nerfed by the 2025 universal trinket.

| vs | Verdict / advice | Agreement | Era | Sources |
|---|---|---|---|---|
| Warlock | Losing. Geared/Soul Link warlocks are a "hard counter"; Death Coil usually means gg. Counter with LIP and by killing the succubus before it seduces (Detect Lesser Invisibility); disengaging is very hard. | consensus | pre-1.18.1 | [[d:pvp-general#1138484964078399500]] [[d:pvp-general#1151537392818323526]] [[d:pvp-general#992112239207251988]] [[d:pvp-general#1105856390163071007]] |
| Paladin | Losing vs t2.5/t3 paladins, especially pre-universal-trinket when HoJ was not trinketable. Win line: engage/disengage, run when he BoPs, trinket Repentance (not HoJ) to regain stealth. After 2025 a paladin can BoP/bubble off Blind. | consensus | pre-1.18.1 | [[d:pvp-general#1138484964078399500]] [[d:pvp-general#1161371374846218290]] [[d:pvp-general#1431320532137021481]] [[d:pvp-general#1429044165223645285]] |
| Warrior | Wins unless the warrior has FAP or is an Orc. Use bleed/CC chain (cheap shot + kidney), open from stealth. Cold Blood Eviscerate ~2k finishes. | consensus | pre-1.18.1 | [[d:pvp-general#1075876537380917278]] [[d:pvp-general#1387001790829957131]] [[d:pvp-general#1366944538773688420]] |
| Hunter | Stunlock and stay in the deadzone: Sap/Blind/Disarm opener; if they trinket, Vanish + Sap, kill the pet, get out of combat, re-sap. Trap being trinket-dispellable removes one of their reset tools. | single source | 1.18.1-announced-pre-release | [[d:pvp-general#1336091851278520433]] [[d:pvp-general#1370452815889174538]] |
| Druid | Near-unwinnable while the druid stays in bear form; with Turtle's shifting changes they no longer need to leave it. | single source | pre-1.18.1 | [[d:pvp-general#1103744129785135164]] [[d:pvp-general#1043221976841457674]] |
| Priest | Warlock-like control war is hard; priests answer with shield + dots to break Vanish (dots break re-stealth). Against fear, play UD or use trinket. | single source | pre-1.18.1 | [[d:pvp-general#1389608692554535093]] [[d:pvp-general#1137177298328633404]] |
| Any | Cross-cutting: the 2025-04 universal PvP trinket (all CC, 3 min) removed guaranteed CC chains and nerfed rogue 2v1s. Envenom spec is the claimed answer to paladins/shamans and expected to improve in 1.18. | consensus | pre-1.18.1 | [[d:pvp-general#1362160826236014822]] [[d:pvp-general#1370736113874112643]] [[d:pvp-general#1404053883977990204]] [[d:pvp-general#1359880507277447381]] |

**Combos/tactics.** Ambush → Backstab → Tea → Backstab → Cold Blood → Eviscerate (t2.5 + imp. evis) [[d:pvp-general#897090660274933760]]. Cold Blood Eviscerate ~2k on a geared target [[d:pvp-general#1387001790829957131]]. Stunlock "usually the only time when you can just stand there and auto … cheap shot kidney shot" [[d:pvp-general#907274934173196298]]. Rend is used specifically to knock a vanishing rogue out of stealth [[d:pvp-general#1060691182121926726]]. Vanilla attack-power normalisation made rogues "fall off and required people to actually press their buttons" [[d:pvp-general#1119257786413494378]]. **Racials:** Alliance rogues hate Orc stun-resist and shaman totems [[d:pvp-general#1100793971363549225]]; Dwarf Stoneform removes Blind/crippling [[d:pvp-general#1426544205789925527]] [[d:pvp-general#1426545537766916126]]; UD WotF hard-counters Alliance priests/warlocks [[d:pvp-general#1146796016700510279]] [[d:pvp-general#1394005028494250075]]. **1.18 outlook:** "Rogues are fine when played by competent people … envenom spec to eat pala/shamans … In 1.18 it will be even easier" [[d:pvp-general#1404053883977990204]]. **BG role:** emergency flag carrier / sap threat — should not carry into fights or it loses stealth and the team loses a sap [[d:pvp-general#898159009478107177]]; a "sneaky FC kill is equally if not more important" [[d:pvp-general#1152721083993178313]].

---

## 4. Hunter

**Bottom line:** the premier kiter and ranged burst; hard counter to squishy casters; its whole CC/reset game was gutted by the 2025 trinket change; tanky hybrids/paladins are its problem.

| vs | Verdict / advice | Agreement | Era | Sources |
|---|---|---|---|---|
| Warrior | Kite: Wing Clip → Scatter + Freezing Trap → Aimed Shot burst → Concussive as clip falls off. Monkey + Deterrence for a melee brawl. Post-2025 the warrior can dispel the trap, so resetting is harder. | consensus | pre-1.18.1 | [[d:pvp-general#861315901718396968]] [[d:pvp-general#1126849924491919420]] [[d:pvp-general#1430283039140741252]] |
| Mage | Hard counter: double Multi-Shot from 41 yd cannot be interrupted without hard CC; delete squishy casters before they close. Watch the deadzone. | consensus | pre-1.18.1 | [[d:pvp-general#1120391121005195286]] [[d:pvp-general#1104030503444688896]] |
| Paladin | Full plan: gear stam, 0/31/20 or 5/31/15, PvP trinket + Burrower's Shell/AGM; damage from range; FD + trap to make space; **never Scatter into trap** (wastes 2 CDs); Cheetah kite; Deterrence/Monkey when he bubbles. Use Viper Sting as a mana tax so cleansing goes net-negative. Pillar/LoS when under-geared. | consensus | pre-1.18.1 | [[d:pvp-general#1120255181372796948]] [[d:pvp-general#1120255590187409428]] [[d:pvp-general#1126847460858396804]] [[d:pvp-general#1126848744181211136]] [[d:pvp-general#1126849219412631582]] |
| Paladin | Late-era: no longer S-tier vs buffed hybrids/paladins because trap/scatter are trinket-dispellable and the paladin out-sustains pet damage. Survival (melee) is the anti-paladin answer on Alliance-heavy realms. | consensus | 1.18.1-announced-pre-release | [[d:pvp-general#1370735231186899026]] [[d:pvp-general#1368629866244608151]] [[d:pvp-general#1370452815889174538]] |
| Shaman | Contested. Early: hunter range beats enh shaman ("hunter can just kite you for eternity"). Later: shaman is super tanky for casters, self-heals, and Frost Shock + Earthbind into the deadzone is gg. | contested | pre-1.18.1 | [[d:pvp-general#1082820346035576913]] [[d:pvp-general#1283223619547172884]] |
| Any | Viper Sting carries teamfights only if the enemy cannot dispel (Stoneform removes it). At 29 the pet deals player-level damage and the hunter can melee a warrior. | consensus | pre-1.18.1 | [[d:pvp-general#1126825522811383870]] [[d:pvp-general#1296815789810122804]] [[d:pvp-general#1376318809412993096]] |

**Spec/role.** Default ranged **MM/surv**; **survival is the melee build** used against paladin-heavy Alliance [[d:pvp-general#1368629866244608151]] [[d:pvp-general#1361238363776090212]]. "MM for sure is glass cannon … hunter is 1 of the few classes which legit has no defensives" [[d:pvp-general#1430286353043689512]]. BG role: traps + Shadowmeld are defensive; "hunters are not that great at going offensive vs enemy flag carry" while warlocks are [[d:pvp-general#1427354322395463682]]. **The 2025 trinket change is a hunter nerf:** Freezing Trap/Scatter became trinketable, killing the reset [[d:pvp-general#1370452815889174538]] [[d:pvp-general#1370726144814616629]] [[d:pvp-general#1370764527867658281]] [[d:pvp-general#1361238363776090212]]. **Viper Sting:** "auto wins some teamfights if enemy can't dispel it" [[d:pvp-general#1120391121005195286]]; "Green geared hunters spamming tab viper sting carry teamfights if u cant dispel" [[d:pvp-general#1126825522811383870]]; useless vs shamans [[d:pvp-general#1283223619547172884]]; Stoneform clears it [[d:pvp-general#1296815789810122804]]; it also broke Scatter/Trap CC (bug) [[d:pvp-general#1091004479895253062]].

---

## 5. Warlock

**Bottom line:** the classic "wins the 1v1 by attrition" class (Soul Link), with the best CC→burst opener (Succubus Seduce → Soulfire). Weak in BG melee but dominant in duels; explicitly hit hard in 1.18 per the last tier list.

| vs | Verdict / advice | Agreement | Era | Sources |
|---|---|---|---|---|
| Any | Soul Link is the durability engine (SL + 2 void sacs + healthstone + Death Coil = tankiest class in vanilla PvP; banned in many duelling tournaments). The Seduce → Soulfire → Seduce → Shadow Bolt + Shadowburn opener globals most targets; a blue/epic lock does ~2.5k SB and ~3.5k Soulfire crits. | consensus | pre-1.18.1 | [[d:pvp-general#1278958852855042069]] [[d:pvp-general#1113087406359449671]] [[d:pvp-general#1119213568592719902]] [[d:pvp-general#1113585017533247619]] |
| Rogue | Keep felhunter (devour magic / paranoia / spell lock) or succubus; Death Coil means gg. LIP wins rogue fights. Opener answer: trinket + Death Coil, Immolate + Conflag, run while dotting. | consensus | pre-1.18.1 | [[d:pvp-general#1358235113535574017]] [[d:pvp-general#992112239207251988]] [[d:pvp-general#1323633814144155741]] [[d:pvp-general#1151537392818323526]] |
| Paladin | Wins: SL lock "mugs" paladins in 1v1, and paladins themselves name shaman/lock as counters. Protection paladins claim to beat destro locks but die to Soul Link. | consensus | pre-1.18.1 | [[d:pvp-general#1126789007439822858]] [[d:pvp-general#1381360208340848680]] [[d:pvp-general#1315720921260101725]] |
| Shaman | Curse of Tongues hard-counters the entire shaman kit (all nature); "lock beats any shammy". Curse of Exhaustion also kites with no cooldown. | consensus | pre-1.18.1 | [[d:pvp-general#1292034196495138889]] [[d:pvp-general#1138134954014933022]] [[d:pvp-general#1427356400962637824]] |
| Druid | Any decent warlock is a nightmare for a druid; nature-resist gear helps with druids/hunters but does not blunt DoTs much. | single source | pre-1.18.1 | [[d:pvp-general#1134586904780746795]] [[d:pvp-general#1384954463919542347]] |
| Priest | Control war: spell lock + Curse of Tongues, or seduce + CoT; you should win. Affliction is bad in BGs — burst is everything. | single source | pre-1.18.1 | [[d:pvp-general#1382720814482329600]] [[d:pvp-general#1323633814144155741]] [[d:pvp-general#1427354322395463682]] |
| Any | Weaknesses: fear/charm breaks to WotF and defensive dispel; no blink/portal/frost nova; Alliance locks face UD rogues ~99% of the time. A 2025 proposal suggested a succubus glyph (short stun instead of charm) to reduce the UD auto-win. | single source | pre-1.18.1 | [[d:pvp-general#1278958230449426478]] [[d:pvp-general#1146796016700510279]] [[d:pvp-general#1394005028494250075]] |
| Any | 1.18 preview tier list puts Warlock in C, "getting heavily nerfed after being dominant". | single source | 1.18.1-announced-pre-release | [[d:pvp-general#1405599106486767717]] |

**Pet choice** is matchup-driven: felhunter for rogues/casters (devour magic, Paranoia, spell lock) vs succubus for the burst opener [[d:pvp-general#1105853398269579455]] [[d:pvp-general#1105851966367731844]]. **Curse of Tongues** is +60% cast time / 30s, the anti-caster tool [[d:pvp-general#1314933010357030982]]. **Cooldowns/tactics:** opener answer "trinket + deathcoil, immo + conflag, run away while dotting them" [[d:pvp-general#1358235113535574017]]; Curse of Exhaustion has no cooldown unlike Concussive Shot [[d:pvp-general#1427356400962637824]]; fear/Deathcoil pathing warps were a long-standing bug [[d:pvp-general#1013997858757812364]].

---

## 6. Priest

**Bottom line:** Shadow priest is a top-tier 1v1 duelist on Turtle (boosted by Pain Spike and shadow-form mana changes); Disc/Holy are the best/most in-demand healers; hard-punished by purge and by WotF/undead.

| vs | Verdict / advice | Agreement | Era | Sources |
|---|---|---|---|---|
| Any (shadow) | In Turtle's version spriest is the strongest 1v1 class: more mana-efficient, Pain Spike instant burst, Shadowmend heal in shadow form, Inner Fire + shadow form tankiness. Use Silence to shut down aggressive casters. | consensus | pre-1.18.1 | [[d:pvp-general#1167844772812161125]] [[d:pvp-general#1142220782999703633]] [[d:pvp-general#1142231666400694422]] [[d:pvp-general#1360941242695028736]] |
| Shaman | Losing: purge strips Fortitude and PW:Shield instantly, then Lightning/Shock burst kills you; no reliable Alliance counter. After the 2025 trinket change the shaman also no longer loses to your fear. | consensus | pre-1.18.1 | [[d:pvp-general#1366083256025485352]] [[d:pvp-general#1314933010357030982]] [[d:pvp-general#1416845108288032788]] |
| Warrior | PW:Shield + Inner Fire do not survive; a geared warrior shreds a 5.6k-hp / 50%-resist priest in ~5s. | single source | 1.18.1-announced-pre-release | [[d:pvp-general#1351158197708263476]] [[d:pvp-general#997155366662062100]] |
| Paladin | Dispel HoF/HoJ; bring fear-resist gear (aura + AQ40 trinket + enchants ≈ 50% fear resist for the paladin). Stoneform covers Viper/Blind for Alliance priests. | single source | pre-1.18.1 | [[d:pvp-general#1312863880044613655]] [[d:pvp-general#1296815789810122804]] |
| Any (healer) | Best/most in-demand PvP healer on Horde because Horde otherwise lacks defensive magic dispel; defensive dispel (sheep/fear/dots/HoJ/Repentance/slows) is stronger than purge. Late-era healing is weak vs burst and Fear Ward is now baseline for all priests, not just Dwarf. | consensus | pre-1.18.1 | [[d:pvp-general#1104024920343720007]] [[d:pvp-general#1073761850845573140]] [[d:pvp-general#1424980220653473942]] [[d:pvp-general#1410926712832917534]] |
| Shaman (healer) | Purge removes Fortitude/PW:Shield; a losing matchup but "keeps healers and especially priests in check" by design. | single source | pre-1.18.1 | [[d:pvp-general#1359223338878369983]] [[d:pvp-general#1366083256025485352]] |

**Race/toolkit notes.** UD WotF answers locks/priests/warrior fear plus Seduce/Sleep/Magic Dust/Hunter Wyvern; Troll Touch of Weakness procs Blackout and Shadowguard reflects at melee hybrids [[d:pvp-general#1161937882072743976]] [[d:pvp-general#1138078767114362931]] [[d:pvp-general#1138105397052448898]]. A late-2025 change gave the **Dwarf Fear Ward racial to all priests** [[d:pvp-general#1410926712832917534]]; "fear ward is no longer a racial" [[d:pvp-general#1342187030133866517]]. **Group utility:** defensive magic dispel on Alliance is scarce on Horde; a friendly priest/shaman purging enemy bubbles lets you "eat through the 3 cloth classes like butter" [[d:pvp-general#1060691926413758514]]. **BG note:** "vs 6 shaman, 5 priest and warlock in arathi basin, i am feeling the spells through my monitor" [[d:pvp-general#1390324695341072404]]. **Era tier:** mtnd (post-CC2) puts shadow priest low-B and heal priest C [[d:pvp-general#1353324094954934314]]; saplingsam (1.18 preview) puts Priest in B [[d:pvp-general#1405599106486767717]].

---

## 7. Shaman

**Bottom line:** the most-argued class besides paladin. Hard counter to paladin (purge) and to priest; strong kiter/burst via Frost Shock/Earthbind + NS Chain Lightning; tanky via high armour + 10% DR. Countered by warlock (Curse of Tongues), mage (Counterspell), spriest (Silence) and by rogues who land a stunlock without trinket.

| vs | Verdict / advice | Agreement | Era | Sources |
|---|---|---|---|---|
| Paladin | Hard counter by design: spam Purge to strip seal, vengeance, blessings, Hands and even consumables; Frost Shock/Earthbind kite the paladin forever; NS Chain Lightning + Earth Shock burst. A paladin has no slow/charge to close. Prot paladin is the claimed exception. | consensus | pre-1.18.1 | [[d:pvp-general#1112115354303475752]] [[d:pvp-general#1371851334738907257]] [[d:pvp-general#1338864895013425192]] [[d:pvp-general#1067844135320559616]] [[d:pvp-general#1340006892612616274]] |
| Warrior | Shaman favoured: Frost Shock/Earthbind own pure melee, Earth Shock interrupts every 5–6s and hits hard, Tremor/Grounding negates fear/stuns, mail + heals sustain. 1h+shield shaman takes almost no warrior damage. | consensus | pre-1.18.1 | [[d:pvp-general#1067844135320559616]] [[d:pvp-general#1348015572792901652]] [[d:pvp-general#1422251154343202876]] |
| Priest | Purge Fortitude/PW:Shield then burst; the priest trinket no longer removes fear after 2025, so the matchup is a shaman win. | single source | pre-1.18.1 | [[d:pvp-general#1366083256025485352]] [[d:pvp-general#1416845108288032788]] |
| Warlock | Losing: Curse of Tongues counters the whole (nature) kit; Stormtaurus's counter list explicitly names rogue and warlock. | consensus | pre-1.18.1 | [[d:pvp-general#1292034196495138889]] [[d:pvp-general#1422251154343202876]] |
| Mage | Losing/hard: Counterspell locks you out of damage and healing; mages have better CC and mobility. Consider Grounding Totem to absorb the CS, but you cannot free-cast. | consensus | pre-1.18.1 | [[d:pvp-general#1380182527783862413]] [[d:pvp-general#1081905593008259082]] [[d:pvp-general#1129149565463957646]] |
| Rogue | Rogue wins a clean 1v1; an equally geared rogue bursts a 6k-armour / 4k-hp shaman in one cheap shot + kidney if trinket is down. In world-PvP ambushes both specs "really rek people". | consensus | 1.18.1-announced-pre-release | [[d:pvp-general#1419603728960458762]] [[d:pvp-general#1422251154343202876]] [[d:pvp-general#1420373126033834051]] |
| Hunter | Contested — see the Hunter section; shaman self-view is that ranged hunter is its biggest weakness, hunter-side view is that shaman tanks the damage and deadzones the hunter. | contested | pre-1.18.1 | [[d:pvp-general#1082820346035576913]] [[d:pvp-general#1283223619547172884]] |
| Any (elemental) | NS is mandatory over EM; build 1h+shield vs physical and 2h vs cloth. Instant Chain Lightning + Earth Shock burst, Frost Shock kite. Countered by spriest Silence, warlock CoT, mage Counterspell/kick. Post-CC2 ele burst was cut (CL ~1400, shocks <1000). | consensus | pre-1.18.1 | [[d:pvp-general#1118096045004558386]] [[d:pvp-general#1090138512596152330]] [[d:pvp-general#1420489854319464478]] [[d:pvp-general#1313851718735499286]] |
| Any (enhancement) | Stormstrike became a yellow hit that no longer interacts with weapon imbues, hurting burst; "autist enh" is S-tier only with perfect gear/consumes. | single source | pre-1.18.1 | [[d:pvp-general#1087857657454530610]] [[d:pvp-general#1353324094954934314]] |

**Tankiness.** "10% damage reduction and high armor, quicker casts, better pushback protection, they can just tank and keep themselves up" [[d:pvp-general#1404863452966551553]]; "OP tank shamans … 7k hp" [[d:pvp-general#1416595760761409678]]; "plate-level AC for shamans … put in place to make them better in PvE" [[d:pvp-general#1386915078992826449]] (i.e. the PvE-driven cause of PvP imbalance). **Builds:** NS is "mandatory" ("Do you realise how trash it is to not have NS as a shaman") [[d:pvp-general#1118095520511053864]] [[d:pvp-general#1118096045004558386]]; enhance 1h+shield vs high physical, 2h vs clothies/burst [[d:pvp-general#1090138512596152330]]. **Group value** is purge-bot + totems (Grounding/Tremor) [[d:pvp-general#1090840641761714366]]. **Trinket interaction:** "I cant use both insignia and wotf as a shaman, seems sharing CD" [[d:pvp-general#1405223238354735264]]. **Era tier:** saplingsam 1.18 A-tier [[d:pvp-general#1405599106486767717]]; mtnd (CC2) puts enh and hybrid shaman in S [[d:pvp-general#1353324094954934314]].

---

## 8. Druid

**Bottom line:** the WSG **flag-carry** god and the hardest "run away and reset" class; balance/feral hybrids are strong 1v1; resto healing is the worst in PvP and resto is not arena-viable.

| vs | Verdict / advice | Agreement | Era | Sources |
|---|---|---|---|---|
| Paladin | Considered the paladin's hardest matchup (above mage/lock/spriest): a good druid kites/resets and out-sustains. Paladin counter-advice: open with 2h (not 1h+shield) to apply pressure immediately, and note resilience does not reduce melee crit. | single source | pre-1.18.1 | [[d:pvp-general#1161684586296782848]] [[d:pvp-general#1330191318986657925]] [[d:pvp-general#1162321554294718646]] |
| Warrior | Root + kite: shapeshift out of roots/slows, moonfire + insect swarm, travel-form reset, heal, re-engage. | consensus | 1.18.1-announced-pre-release | [[d:pvp-general#1312834892807012414]] [[d:pvp-general#1334957961822601247]] |
| Rogue | Sit in bear form and lock the rogue down; the rogue's only kill window is catching you out of form. | single source | pre-1.18.1 | [[d:pvp-general#1103744129785135164]] [[d:pvp-general#1043221976841457674]] |
| Mage | Never pounce a mage — they Blink out, then save trinket for your Bash; Blink is "a trinket on crack". A FC druid gets blinked/trinketed and deleted by a mage. | single source | 1.18.1-announced-pre-release | [[d:pvp-general#1380875640907235431]] [[d:pvp-general#1376579767540650075]] |
| Warlock | Losing — "any decent warlock is a nightmare for a druid." | single source | pre-1.18.1 | [[d:pvp-general#1134586904780746795]] |
| Any (feral) | Stealth cat opener → burst; if CC'd, shift to bear (6k+ hp) and pop Frenzied Regeneration; disengage with travel form. CC2 nerfed frenzy regen and added PvP-useless talents, so T3 bear set + R13 move-speed is now needed. | single source | pre-1.18.1 | [[d:pvp-general#1118052634226593792]] [[d:pvp-general#1312805889107038281]] |
| Any (resto) | Worst PvP healer: HoTs cannot match burst, least utility; Blind cannot be cleansed and HoTs get purged. Not viable in arena; feral/boomkin hybrids are preferred. | consensus | 1.18.1-announced-pre-release | [[d:pvp-general#1404863452966551553]] [[d:pvp-general#1401108100123201557]] [[d:pvp-general#1401121954450116638]] |

**FC meta.** "If you're playing WSG then FC druid is OP" [[d:pvp-general#1104024920343720007]]; "druid is already the strongest FC, making their reshifitng even cheaper is a massive massive buff" [[d:pvp-general#1117966170281222246]]. Horde FC druid is stronger because "Horde has more purge than Alliance" [[d:pvp-general#1338876735130964009]]. FAP helps druids *less* because they shift roots/slows anyway [[d:pvp-general#1108786203144233090]]. **Spec tier:** balance/moonkin hybrid "s tier", tree-form healer terrible [[d:pvp-general#1370761645491748996]]; mtnd puts Moonkin A and "feral well geared and well played is almost A" [[d:pvp-general#1353324094954934314]]. **Common failure mode:** "90% of people who play boomkin are bad … Only this moonfire/insect swarm spamming druids" [[d:pvp-general#1365802028613369980]] [[d:pvp-general#1346648068682027059]].

---

## 9. Paladin

**Bottom line:** the most-discussed and most-disputed class. Post-1.16 the Ret/Prot paladin is a burst bruiser with a support kit; it hard-counters warriors and rogues and is hard-countered by shaman (purge) plus the caster kite classes (mage/lock/spriest/druid/hunter). Holy paladin is considered the best PvP healer after CC2.

| vs | Verdict / advice | Agreement | Era | Sources |
|---|---|---|---|---|
| Warrior | Wins by design. Freedom + pillar-kite to drop the warrior's flask and wait for a second HoJ, then global him. Warrior counterplay is to not 1v1, Mortal Strike the paladin and let ranged kill him, or heavy-gear kite/oom. | consensus | pre-1.18.1 | [[d:pvp-general#1118210717846339636]] [[d:pvp-general#1118214963002089563]] [[d:pvp-general#1198322883143938078]] [[d:pvp-general#1153844681717854249]] |
| Rogue | Shreds rogues; pre-2025 HoJ was not class-trinketable. Ret/Prot just needs to survive the opener and connect once. After the universal trinket a paladin can also BoP/bubble off Blind. | consensus | pre-1.18.1 | [[d:pvp-general#1153844681717854249]] [[d:pvp-general#1161371374846218290]] [[d:pvp-general#1429044165223645285]] |
| Shaman | Losing/hard: purge strips seal/blessings/Hands and consumes; you have no slow or charge to close, so a kiting shaman wins. Prot paladin with high stamina/defensive CDs is the claimed exception vs ret. | consensus | pre-1.18.1 | [[d:pvp-general#1371851334738907257]] [[d:pvp-general#1338864895013425192]] [[d:pvp-general#1340006892612616274]] |
| Mage | Losing — mage kites with Nova/Poly/Blink/Ice Block and dispels Freedom; you lose the mana war in duels. | consensus | pre-1.18.1 | [[d:pvp-general#1376543969743474790]] [[d:pvp-general#1329116276215250985]] [[d:pvp-general#1165856311053930506]] |
| Warlock | Losing — SL locks "mug" paladins; paladins themselves name lock a top counter. Prot paladin beats destro but dies to Soul Link. | consensus | pre-1.18.1 | [[d:pvp-general#1126789007439822858]] [[d:pvp-general#1381360208340848680]] [[d:pvp-general#1315720921260101725]] |
| Priest | Spriest is generally a losing 1v1; dispel PW:Shield/fear and use resist gear (aura + AQ40 trinket ≈ 50% fear resist for the priest). Healer-priest is a softer target. | single source | pre-1.18.1 | [[d:pvp-general#1306963676057833532]] [[d:pvp-general#1312863880044613655]] |
| Druid | Hardest paladin matchup per a paladin main; open with 2h and pressure immediately. Resilience does not reduce the druid's melee crit. | single source | pre-1.18.1 | [[d:pvp-general#1161684586296782848]] [[d:pvp-general#1330191318986657925]] |
| Hunter | Paladin cannot be kited by the hunter but also cannot catch one; in a duel the hunter generally wins (kite + Viper mana tax + Deterrence/Monkey vs bubble), though the paladin can randomly global the hunter in HoJ/bubble. | contested | pre-1.18.1 | [[d:pvp-general#1161014215235092520]] [[d:pvp-general#1103600041425387550]] [[d:pvp-general#1119170067159056475]] |
| Any (ret) | Pre-CC2 burst: Holy Strike + Judge + Seal + Hammer can global in one HoJ ("7k holy strike global burst"). CC2 removed the plate/druid one-shots and made Seal of Command dispellable, but paladin does more sustained damage and is tankier. The real strength is the support kit (Cleanse/BoP/Sac/Freedom) most rets ignore. | consensus | pre-1.18.1 | [[d:pvp-general#1119730978655580301]] [[d:pvp-general#1303023121917542452]] [[d:pvp-general#1303363938741915701]] [[d:pvp-general#1109073351412027432]] |
| Any (holy) | Best-in-class PvP healer after CC2 (A/S tier); "3 times as unkillable than 1.12" and was already strong in 1.12. Rare because most paladins play ret. | consensus | pre-1.18.1 | [[d:pvp-general#1370761645491748996]] [[d:pvp-general#1353324094954934314]] [[d:pvp-general#1104024920343720007]] |
| Any (prot) | Anti-melee/anti-burst bruiser: 7k hp, ~60% physical reduction, holy damage ignores armour and "holy resist doesn't exist", 12s immunity + instant full heal. Beats rogues/warriors/hunters/enh shamans/feral druids and even mages/priests/destro locks; loses only to Soul Link locks. Stack AB/R13/Bloodring/Bulwark for ~40% DoT reduction. | single source | pre-1.18.1 | [[d:pvp-general#1315720921260101725]] [[d:pvp-general#1353324094954934314]] |

**The shaman pairing (most contested).** Shaman side: "Shamans counter paladins, that's by design" [[d:pvp-general#1112115354303475752]]; "shaman is hard counter for paladin" [[d:pvp-general#1371851334738907257]]. Paladin side: "people nowadays have more knowledge … shamans perfectly know they just have to spam purge to counter paladins" [[d:pvp-general#1380184821392736337]]; a shaman concedes "I don't have an issue at all with Paladins being favoured vs Shamans" [[d:pvp-general#1163425782232789094]]. A 2025-02 duelling anecdote: "I've seen good paladins beat good shamans and vis versa depending on what CDs they have up and RNG crits. (In 1v1 prot paladin beats ret)" [[d:pvp-general#1340006892612616274]]. **Verdict: contested, era-dependent; the channel usually treats shaman as the paladin's hardest counter because of purge, with prot paladin the exception.**

**Support kit / other.** "paladin is the only melee class that can't slow its target and has nothing to run faster or charge. Any ranged player who can play can easily kite a paladin" [[d:pvp-general#1347639357766373397]]; Hand of Freedom is "always instantly dispelled when playing against good players" [[d:pvp-general#1349034344592707715]]. Paladins are told not to waste trinket on Repentance and to save it for HoJ [[d:pvp-general#1359138883597766696]]. **2v2 arena:** "ret paladin + felguard warlock probably best 2v2 arena comp" [[d:pvp-general#1433954955731140648]] (last-message-era, 2025-11-01). **Era:** mtnd's post-CC2 list is the most paladin-generous (Hpal/Protpala S, Ret A) [[d:pvp-general#1353324094954934314]]; saplingsam's 1.18 preview demotes Paladin to B [[d:pvp-general#1405599106486767717]]; a 2025-09 warning that the paladin's counters (shaman/mage) were being nerfed next patch and Paladin share would rise [[d:pvp-general#1416552025541312563]].

---

## 10. Cross-cutting: trinkets, consumables, engineering, racials

**The universal PvP trinket (2025-04).** The single biggest cross-matchup change in the channel's second half: "PvP Trinket now removes all CC regardless of Class and is on a 3m timer" [[d:pvp-general#1360668535944118542]] (Jamey gave "a longer reasoning why pvp trinket changes went through" [[d:pvp-general#1359887103760142527]], but it was not posted in-channel). Reported effects, all with matchups:

- **Hunters:** Freezing Trap/Scatter trinketable → reset game gone [[d:pvp-general#1361238363776090212]] [[d:pvp-general#1370452815889174538]] [[d:pvp-general#1370764527867658281]].
- **Rogues:** guaranteed CC chains gone [[d:pvp-general#1362160826236014822]] [[d:pvp-general#1370736113874112643]]; "dumbing down the game" [[d:pvp-general#1432290422553575557]].
- **Casters:** "the latest pvp trinket breaks all kind of cc" hurts Alliance fighting UD [[d:pvp-general#1358352140791320677]].
- **Other trinkets devalued:** "3min so frequently used other trinkets became obselete" [[d:pvp-general#1362171784119718051]]; "funky trinkets have a bit less value … cause the insignia is just that good" [[d:pvp-general#1380459420856877127]].
- **WotF/Insignia share a CD for some classes** [[d:pvp-general#1405223238354735264]]; "wotf still valuable because it allows you to save your trinket for other things" [[d:pvp-general#1370884201426976778]] — genuinely contested.
- **Priests:** "trinket removes fear. means sham doesnt lose to priest anymore" [[d:pvp-general#1416845108288032788]].

**Other trinkets.** Tidal Charm and sleep/ES trinkets are common 1v1 swing items [[d:pvp-general#1389577022447030373]] [[d:pvp-general#1389578393284116621]] [[d:pvp-general#1423768252198293617]]; **Renataki** is BiS PvP trinket for dagger rogues [[d:pvp-general#1396306667750035497]]; reflectors (shadow/fire/frost) are matchup-specific ("reflectors help a lot if you know you're about to fight one [warlock]" [[d:pvp-general#1360188212584382646]]); the Kara40 spell-reflect trinket is noted [[d:pvp-general#1359644490448634019]]; a Scythe-of-Elune PvP trinket was flagged as uncounterable/uncleansable [[d:pvp-general#1365792031586386061]].

**Consumables decide vanilla fights.** "classic pvp is a consumes prep fight … with trinkets u only gain advantage if u go out of ur way to farm stuff like tidal charm" [[d:pvp-general#1361332269851082895]]; FAP, LIP, Tidal Charm are the "true gems" [[d:pvp-general#1389577022447030373]]; LIP is "very good vs paladins, warrs rogues … make you immune to hamstrings" [[d:pvp-general#1341853645683036191]]; Free Action Potion is the warrior's anti-kite fix [[d:pvp-general#1330668444047114343]]; weapon chain is required vs disarm [[d:pvp-general#1290571835859275818]]. **Engineering:** reflectors, rocket boots, grenades, MC cap, net trinket [[d:pvp-general#1358338511744532550]]; Hateforge for the non-engineering net trinket [[d:pvp-general#1361789565139943646]]; a macro can share a trinket slot [[d:pvp-general#1400180147029676042]] [[d:pvp-general#1367599163721912421]]. **Racials as matchup tools:** Orc Hardiness now only reduces stun duration (no root/charm answer) [[d:pvp-general#1358338511744532550]]; UD WotF answers fear/charm/sleep [[d:pvp-general#1161937882072743976]]; Dwarf Stoneform answers Blind/poisons/Viper [[d:pvp-general#1426545537766916126]] [[d:pvp-general#1296815789810122804]]; Gnome Escape Artist overlaps Blink [[d:pvp-general#960951357198708796]] (vanilla baseline). **Trinket tracking gap:** "is there a way to track enemy pvp trinket usage? cdframes dont track this, it doesnt even show in combat log" [[d:pvp-general#1372914812216021073]].

---

## 11. Era timeline of matchup-relevant change (as discussed in-channel)

| When | Change | Matchup effect (as claimed) |
|---|---|---|
| 2021–2022 | 1.16 promised; pally reworks land | Holy Strike/Crusader Strike replace reckoning as paladin burst [[d:pvp-general#1103663807907242064]] |
| 2023-07 | Resilience added to PvP pieces | Crit-dependent specs (rogue ambush/backstab) worried [[d:pvp-general#1133554837305426030]]; later "resilience vs paladin does not reduce melee crit" [[d:pvp-general#1330191318986657925]] |
| 2023–2024 | 1.17.x / Class Changes 2.0 planned | "CC2 will be bringing some PvP balance updates to the biggest offenders" — Akalix [[d:pvp-general#1252023300989780089]] |
| 2024-11/12 | **CC2 / 1.17.2 lands** | "pvp is much faster after cc2. many specs have absurd damage" [[d:pvp-general#1309292338262048881]]; paladin burst down [[d:pvp-general#1303023121917542452]]; ele shaman burst down (CL ~1400, shocks <1000) [[d:pvp-general#1313851718735499286]]; feral frenzy-regen nerf [[d:pvp-general#1312805889107038281]] |
| 2024-12-09 | Resilience tweaked (DoT dmg -3%/item) | prot-paladin anti-DoT stacking thread [[d:pvp-general#1315720921260101725]] |
| 2025-04-10 | **Universal PvP trinket (all CC, 3 min)** | §10 — biggest single matchup shift in the channel |
| 2025-08 | 1.18 PTR / talent-builder builds circulate | 1.18 preview tier list flips Warlock to C, Warrior/Mage to S [[d:pvp-general#1405599106486767717]] |
| 2025-09/10 | 1.18.1 announced; cross-faction BGs confirmed | class counts/stacking and faction asymmetry arguments intensify [[d:pvp-general#1427414065063395495]] [[d:pvp-general#1432402247769264269]] |

---

## 12. Contested pairings, single-source numbers, and gaps

- **No `post-1.18.1` data.** The channel is archived 2025-11-01; every "1.18.1" claim here is pre-release speculation (tier lists, patch-note reads), not observed play.
- **Contested pairings to flag downstream:** Paladin↔Shaman (purge vs burst, prot paladin exception); Hunter↔Shaman (range vs tanky/heal, 2023 vs 2024/25); Warrior↔Druid ("roots decide it" vs "I kill every druid").
- **Tier lists disagree by design.** mtnd (post-CC2, 2025-03) is pro-paladin/anti-warrior; saplingsam (1.18 preview, 2025-08) is the inverse. Do not average them.
- **Single-source numbers** (3k Earth Shock, 10k Rupture, 7k Holy Strike, 1.8–2k Frost Shock) are anecdotal geared-and-buffed snapshots; several authors themselves dispute them ([[d:pvp-general#1118839761034023003]] pushes back on cherry-picked paladin screenshots).
- **Authority caveat:** the most confident-sounding posts are frequently the most contested (the "counter matrix" [[d:pvp-general#1130633126205468744]] is one player's opinion); staff/dev balance rationale for the trinket change was referenced but not posted in-channel [[d:pvp-general#1359887103760142527]].
- **Open gaps:** no in-channel way to track an enemy PvP-trinket use [[d:pvp-general#1372914812216021073]]; no measured win-rate data anywhere — all "beats/loses to" claims are player statements.

### Per-class one-line matchup summary

| Class | Beats (as claimed) | Loses to (as claimed) | Key tool |
|---|---|---|---|
| Warrior | Rogues (slight) [[d:pvp-general#1294321583241953352]] | Mage, Shadow, Paladin, Druid, Shaman; Warlock (post-CC2) | FAP / Mortal Strike / healer |
| Mage | Warriors, Paladins (kite), Warlocks (late) | Hunter, Shaman (Counterspell is *their* counter), good casters | Poly / Counterspell / Ice Block |
| Rogue | Warriors, unprepared casters | SL Warlock, t2.5 Paladin, Orcs/Dwarves | Vanish / Kidney / Cold Blood |
| Hunter | Mages, Warriors, kiters | Buffed hybrids, Paladins, trinketable traps | Scatter/Trap / Viper / kiting |
| Warlock | Almost everything in 1v1 (SL) | UD/WotF, high dispel, 1.18 nerfs | Seduce→Soulfire / CoT / Death Coil |
| Priest (shadow) | Most 1v1, Mages (Silence) | Purge (Shaman), Warrior burst | Silence / Pain Spike / fear |
| Shaman | Paladin, Warrior, Priest | Warlock (CoT), Mage (CS), spriest, Rogue stunlock | Purge / Frost Shock / NS burst |
| Druid | WSG FC, Warriors (kite), Rogues (bear) | Warlock, geared Mage, burst meta | Roots/kite / Bear / Frenzied Regen |
| Paladin | Warriors, Rogues | Shaman, Mage, Warlock, Spriest, Hunter, Druid | Bubble / HoJ / Cleanse+Freedom |
