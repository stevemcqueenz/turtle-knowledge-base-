# Contradictions — Classes and specs (guide vs guide)

Part of [`../contradictions.md`](../contradictions.md); machine-readable copy in [`../../structured/contradictions.yaml`](../../structured/contradictions.yaml). Conventions: [`../CONVENTIONS.md`](../CONVENTIONS.md). Dates UTC.

19 entries. Each gives both sides with author, authority and date, what evidence would settle it, and the current best assessment.

## CON-0049 — Warrior: Arms vs Fury for raid DPS

- **Side A.** Fury is the raid DPS spec: "Fury takes you there, arms will not"; "Arms just doesnt work compared to fury". — [Akos1896 (player), 2024-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=95013#p95013), [Likaleo (player), 2024-05-17](https://forum.turtlecraft.gg/viewtopic.php?p=95025#p95025)
- **Side B.** From mid-2025: "Arms is definitely up there with fury... better than fury in AQ40 and especially Kara40"; "Arms warrior is already the best DPS spec in game. Check out turtlogs"; but post-1.18.1 "The spec already underperforms in pve". — [Ellifta (player), 2025-07-14](https://forum.turtlecraft.gg/viewtopic.php?p=139087#p139087), [Noephix (player), 2025-06-11](https://forum.turtlecraft.gg/viewtopic.php?p=135319#p135319), [Bettargh (player), 2026-03-13](https://forum.turtlecraft.gg/viewtopic.php?p=170733#p170733)
- **What would settle it.** Not settleable from game data alone; needs parses. The kit changes (Class Changes 3, 1.18.1 Execute) are checkable in spell data.
- **Assessment (`unresolved`).** Contested and era-dependent: Fury consensus to mid-2025, contested after Class Changes 3. No post-1.18.1 raid data exists in the corpus.

## CON-0050 — Warrior: does 2H Fury exist after Class Changes 3?

- **Side A.** "2h fury isnt a spec anymore. If you use twohanders go arms". — [Atreidon (player), 2025-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=156441#p156441)
- **Side B.** "2h fury uses Slam"; "Wake up Neo! Missed CC3?"; in Feb 2026 a player calls "2h fury, in which you slam a lot" the meta build. — [Eyeburn (player), 2025-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=157054#p157054), [armsgirl (player), 2025-10-28](https://forum.turtlecraft.gg/viewtopic.php?p=157453#p157453), [Warrior37 (player), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168301#p168301)
- **What would settle it.** Talent prerequisites and Slam/Flurry interaction in the 1.18.1 talent data decide whether the build is mechanically supported.
- **Assessment (`unresolved`).** Contested; treat 2H Fury as an accepted alternative post-CC3 rather than settled either way.

## CON-0051 — Warrior: is Fury/Prot tanking still viable after Class Changes 2?

- **Side A.** "Furyprot was intentionally nerfed... Why not deepprot?"; "Sword and board warrior is the meta now. Shieldslam runs laps around bloodthirst when it comes to threat". — [Xudo (player), 2024-12-23](https://forum.turtlecraft.gg/viewtopic.php?p=114018#p114018), [Atreidon (player), 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108893#p108893)
- **Side B.** "if your healers can take it, learning how to fury tank is the way to go until you start getting toward Naxx level gear"; "I play both fury and deep prot tank and both have very similar threat gen"; the consistency argument (fast dual-wield spreads threat, a parry hurts less than a parried Shield Slam). — [Arkaris (player), 2025-02-01](https://forum.turtlecraft.gg/viewtopic.php?p=118658#p118658), [Cheruscan (player), 2026-03-16](https://forum.turtlecraft.gg/viewtopic.php?p=170960#p170960), [Eyeburn (player), 2026-03-15](https://forum.turtlecraft.gg/viewtopic.php?p=170891#p170891)
- **What would settle it.** Threat coefficients on Shield Slam / Bloodthirst and the crit-immunity (Defense) values in 1.18.1 data.
- **Assessment (`unresolved`).** Contested; both sides agree it was nerfed, they disagree on whether it remains playable.

## CON-0052 — Warrior: does Sunder Armor proc Sword Specialization?

- **Side A.** "Sunder Armor ... will not trigger Sword Specialization". — [Wolf of Rage (player), 2025-03-17](https://forum.turtlecraft.gg/viewtopic.php?p=122819#p122819)
- **Side B.** "SA is a physical attack that can proc on hit everything any other attack can proc: OP, WF, swordspec etc." — [armsgirl (player), 2025-05-05](https://forum.turtlecraft.gg/viewtopic.php?p=129704#p129704)
- **What would settle it.** Proc flags on Sunder Armor and on the Sword Specialization / Master of Arms talent in 1.18.1 spell data.
- **Assessment (`unresolved`).** Unresolved between two frequently-correct players; a pure data question.

## CON-0053 — Warrior: is rage generated from absorbed hits?

- **Side A.** "Not being able to generate rage on shields is absolutely crippling". — [Snoof (player), 2025-09-23](https://forum.turtlecraft.gg/viewtopic.php?p=152740#p152740)
- **Side B.** "Twow gave you ability to generate rage against aborbs and immunities". — [Ataika (player), 2025-07-20](https://forum.turtlecraft.gg/viewtopic.php?p=140665#p140665)
- **What would settle it.** Rage-on-damage-taken code path: does it use damage dealt before or after absorb?
- **Assessment (`unresolved`).** Unresolved; may be era-dependent (the two posts are two months apart).

## CON-0054 — Druid: is Balance raid-viable?

- **Side A.** "Balance Druid DPS is bottom of the DPS tier... literally bottom of the barrel", citing top Kara40 boomkin logs ~940 DPS against top mage logs ~1200-1400. — [Halfgeek9 (player), 2025-05-19](https://forum.turtlecraft.gg/viewtopic.php?p=131905#p131905)
- **Side B.** "the class scales incredibly well... anyone saying Boomkin is bottom of the barrel is misinformed", with logs placing a boomkin 12th of 93 casters that week. — [Noobikscube (player), 2025-06-08](https://forum.turtlecraft.gg/viewtopic.php?p=134706#p134706)
- **What would settle it.** Not settleable from game data; both sides quote logs that are not in this corpus.
- **Assessment (`unresolved`).** Contested (pre-1.18.1). Both sides are player log readings, neither reproducible here.

## CON-0055 — Druid: Intellect on feral tier sets

- **Side A.** "126 stat points are wasted" on a PvE cat set with heavy Intellect. — [Snkx (player), 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128296#p128296), [Jaffcover (player), 2024-12-25](https://forum.turtlecraft.gg/viewtopic.php?p=114200#p114200)
- **Side B.** "Druid gear needs to be viable for PvP too. INT is necessary for lasting in fights for shifting, healing, and dots" — countered with "T2.5 and T3.5 is not a PvP set, you have the Rank gear for that". — [Darter (player), 2025-01-29](https://forum.turtlecraft.gg/viewtopic.php?p=118313#p118313), [Grizb37 (player), 2025-01-29](https://forum.turtlecraft.gg/viewtopic.php?p=118323#p118323)
- **What would settle it.** Item stats on the feral tier pieces in 1.18.1 (fact), but the design question is not decidable from data.
- **Assessment (`design-dispute`).** A design argument, not a factual conflict; kept because guides state it as fact in both directions.

## CON-0056 — Mage: is AoE leveling still viable on Turtle?

- **Side A.** "Improved blizzard is heavily nerfed... Its a bit less braindead to aoe level here. But its still entirely possible"; "Mage aoe levelign just as strong here than it is in classic, if not stronger". — [Atreidon (player), 2026-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=168459#p168459), [amanagor (player), 2026-02-25](https://forum.turtlecraft.gg/viewtopic.php?p=169382#p169382)
- **Side B.** "Mage's AoE farming has been trashed to shit on TWoW"; "With the current nerfs, it's not a good aoe class anymore while leveling". — [Eluaria (player), 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171410#p171410), [Weirdyunus (player), 2025-02-20](https://forum.turtlecraft.gg/viewtopic.php?p=120499#p120499)
- **What would settle it.** Improved Blizzard / Blizzard and Cone of Cold values and any mob-count damage falloff in 1.18.1 spell data.
- **Assessment (`unresolved`).** Contested; the middle position (possible but slower, dependent on Cone of Cold) has the most support.

## CON-0057 — Priest: is Smite (Discipline damage) raid-viable?

- **Side A.** "Smite is raid viable ... your raid won't wipe just because you're doing suboptimal damage"; a player reports keeping top 3 in MC with a fresh smiter. — [Bigsmerf (player), 2025-06-19](https://forum.turtlecraft.gg/viewtopic.php?p=136250#p136250), [Kerenis (player), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154132#p154132)
- **Side B.** "Smite is a pure meme spec forced by redditors ... smite does not do anything for the group or raid". — [Terrydavis (player), 2025-08-06](https://forum.turtlecraft.gg/viewtopic.php?p=143427#p143427)
- **What would settle it.** Not settleable from data. Staff position on the tree's design: "we're very happy with the flavor of our Discipline tree".
- **Assessment (`unresolved`).** Contested; staff endorse the tree's design without claiming raid parity.

## CON-0058 — Priest: spell hit / penetration target (3% vs 4%)

- **Side A.** Players in the same thread give 3% as the working figure. — [Zvyrhol (player), 2024-10-06](https://forum.turtlecraft.gg/viewtopic.php?p=102656#p102656)
- **Side B.** Others give 4%. — [Heroclastus (player), 2024-10-08](https://forum.turtlecraft.gg/viewtopic.php?p=102752#p102752), [Grizb37 (player), 2024-10-10](https://forum.turtlecraft.gg/viewtopic.php?p=102861#p102861)
- **What would settle it.** Base spell miss chance against a level-63 target in the 1.18.1 combat formulas — a single constant.
- **Assessment (`unresolved`).** Unresolved in the forum; one of the cheapest checks on a local server.

## CON-0059 — Priest: is the T3.5 healer set an upgrade?

- **Side A.** "3-Piece 'Regen' Bonus: Pay 300+ mana to get 48 mana back ... We're forced to wear T2 3-piece + junk Naxx rings/necks". — [Solaire0726 (player), 2025-08-01](https://forum.turtlecraft.gg/viewtopic.php?p=142435#p142435)
- **Side B.** Another healer defends the set as a situational "flash heal set", an extra tool rather than a replacement. — [Maxitaxii (player), 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128268#p128268)
- **What would settle it.** Set-bonus spell effects and mana numbers for priest T2 / T2.5 / T3.5 in 1.18.1 item and spell data.
- **Assessment (`unresolved`).** Contested; the 1.18.1 rework changed the bonuses again, so both posts are pre-rework.

## CON-0060 — Rogue: Combat vs Assassination as the raid spec

- **Side A.** "AQ + gear Combat backstab spec"; post-1.18.1 "Go COMBAT u n00bs, and learn rotations"; "Combat is actually still stronger than assass. Somehow". — [Grizb37 (player), 2025-11-03](https://forum.turtlecraft.gg/viewtopic.php?p=158295#p158295), [Mdzielak (player), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171653#p171653), [Bigsmerf (player), 2025-05-11](https://forum.turtlecraft.gg/viewtopic.php?p=130645#p130645)
- **Side B.** "combat is not harder or more complex ... combat rogue has been overplayed for years". — [Thesuperwitch (player), 2026-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=172799#p172799)
- **What would settle it.** Not settleable from data; depends on gear level and the 1.18.1 poison scaling cuts.
- **Assessment (`unresolved`).** Contested, gear-dependent: Combat favoured at high gear, Assassination competitive below it.

## CON-0061 — Rogue: are rogues overpowered in PvP after 1.18.0?

- **Side A.** "Rogues are totally broken atm"; post-1.18.1 "No rogue nerf yet? ... A plain -30% damage should be ok". — [Aristany (player), 2025-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=156423#p156423), [Manolothegreat (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173527#p173527)
- **Side B.** Rogues answer that instant poison is simply the better option and that the real killers are hemo/prep players, not poison rogues. — [Crake (player), 2025-10-05](https://forum.turtlecraft.gg/viewtopic.php?p=154534#p154534)
- **What would settle it.** Poison coefficients, the 1.18.1 low-rank poison scaling cut, Noxious Assault 30% AP and the PvP dampening values in 1.18.1 data.
- **Assessment (`unresolved`).** Contested; staff acted on the complaint side in 1.18.1 without stating a verdict.

## CON-0062 — Hunter: is Beast Mastery good after Class Changes 3?

- **Side A.** "BM doesn't feel very fun to play this patch. Awkward gameplay, very mana hungry and damage is average"; "I dont even think the spec can match MM numbers ... with the current spirit bond scaling". — [SvenS2 (player), 2025-08-22](https://forum.turtlecraft.gg/viewtopic.php?p=147656#p147656), [Jiav (player), 2025-08-18](https://forum.turtlecraft.gg/viewtopic.php?p=146762#p146762)
- **Side B.** "it is the best Hunter talent tree by far nowadays but tough to start playing decent"; "a lot of BM hunters perform very badly due of them rarely using baited shot". — [Skurridizo (player), 2025-09-18](https://forum.turtlecraft.gg/viewtopic.php?p=152203#p152203), [Nalos (player), 2025-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=160458#p160458)
- **What would settle it.** Pet scaling coefficients (Spirit Bond, Kill Command, Baited Shot) in 1.18.1 spell data.
- **Assessment (`unresolved`).** Contested; the disagreement is partly about play skill, partly about scaling.

## CON-0063 — Hunter pets: Claw vs Bite

- **Side A.** Bite is stronger per focus with a cooldown; Claw is weak but spammable; both on a cat measured 124 -> 139 DPS on a dummy over one minute. — [Atreidon (player), 2026-03-25](https://forum.turtlecraft.gg/viewtopic.php?p=172305#p172305), [Glavorli (player), 2022-11-01](https://forum.turtlecraft.gg/viewtopic.php?p=28237#p28237)
- **Side B.** "claw will focus-starve pet & result in possible missed/delayed poison stack applications"; "bite>claw, because the focus remains on other skills with the same dps". — [Daoc2001 (player), 2026-03-25](https://forum.turtlecraft.gg/viewtopic.php?p=172391#p172391), [Ahinevich (player), 2026-03-26](https://forum.turtlecraft.gg/viewtopic.php?p=172621#p172621)
- **What would settle it.** Focus costs/regeneration and the damage coefficients of Claw and Bite in 1.18.1 pet spell data.
- **Assessment (`reconciled`).** Reconcilable: Claw adds DPS only when the pet has no other focus spender. Both sides are right for different pet families.

## CON-0064 — Warlock: is Dark Harvest a DPS gain?

- **Side A.** Measured "with drain soul + dots dps 8-10% more than with darkharvest+dots"; "not using Dark Harvest makes you deal more dmg in the long run". — [Akarui (player), 2025-09-27](https://forum.turtlecraft.gg/viewtopic.php?p=153453#p153453), [Horcos (player), 2025-10-16](https://forum.turtlecraft.gg/viewtopic.php?p=155815#p155815)
- **Side B.** A 2026 player reports 450 DPS "as a Dark harvest affliction warlock", and the same measurer had the opposite result before Class Changes 3. — [Guiltyhaomarush (player), 2026-02-14](https://forum.turtlecraft.gg/viewtopic.php?p=168196#p168196)
- **What would settle it.** Dark Harvest channel damage and the CC3 Destruction talent that changed the comparison, in 1.18.1 spell data.
- **Assessment (`era-dependent`).** Era-dependent rather than contradictory: the answer flipped with Class Changes 3. Skip on bosses unless an uninterrupted channel is guaranteed.

## CON-0065 — Warlock: did Class Changes 2 nerf SM/Ruin?

- **Side A.** Top parsers "could previously crack the top 5 in their raid's meters. Now they cannot crack the top 10". — [Delalama (player), 2024-11-11](https://forum.turtlecraft.gg/viewtopic.php?p=107592#p107592)
- **Side B.** "Warlock changelog doesn't have much nerfs ... Only difference that matter for SM/Ruin is rework of Improved Shadowbolt". — [Xudo (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107785#p107785)
- **What would settle it.** Improved Shadowbolt's pre/post-CC2 effect in spell data (only the post state is checkable locally).
- **Assessment (`resolved-later`).** By 2026 the complaint side is the consensus: "SM/Ruin ... is just in a terrible spot right now".

## CON-0066 — Shaman: Windfury Totem vs Grace of Air for a bear tank's group

- **Side A.** Drop Grace of Air instead of Windfury for hunter/druid/tank groups. — [Mimiwarmini (player), 2026-02-12](https://forum.turtlecraft.gg/viewtopic.php?p=168008#p168008)
- **Side B.** Bears prefer Windfury for the extra rage. — [Elesion (player), 2026-02-12](https://forum.turtlecraft.gg/viewtopic.php?p=168045#p168045)
- **What would settle it.** Rage generation per Windfury proc and the current Windfury/Grace of Air totem values in 1.18.1.
- **Assessment (`unresolved`).** Unresolved; a small, checkable numbers question.

## CON-0067 — Paladin: does Holy Might apply at the raid buff cap?

- **Side A.** Raid buffs plus consumables plus Zeal/Holy Might/Vengeance exceed the visible 32-slot cap and Holy Might does not apply. — [Cheruscan (player), 2026-03-12](https://forum.turtlecraft.gg/viewtopic.php?p=170658#p170658)
- **Side B.** The buffs work but are hidden past the cap; buff-texture macros break, timers do not. — [Ellifta (player), 2026-03-12](https://forum.turtlecraft.gg/viewtopic.php?p=170694#p170694)
- **What would settle it.** Aura-slot limit handling in the 1.18.1 server: are auras past the visible cap still active?
- **Assessment (`unresolved`).** Unresolved between two well-informed players; a decisive server-side check.

