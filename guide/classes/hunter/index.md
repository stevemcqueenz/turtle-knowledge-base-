# Hunter

**Recommendation:**

- **Leveling:** Beast Mastery, with a pet that tanks. Respec to Survival at 40 if you plan to raid melee.
- **Raids:** Survival (melee, dual-wield or two-hander) is still the best overall raid DPS and AoE spec. BM is very close on single target, and MM is slightly behind but the best "safe" ranged spec [[d:hunter#1489032257317507102]], [[d:hunter#1491704423427342497]]. All three specs are raid-viable after 1.18.1: "all 3 specs eat very good right now" [[d:hunter#1491783245203898492]], [[d:hunter#1491404375711809567]].
- **PvP:** Marksmanship (or BM for easy burst).

The hunter is a physical DPS class with a permanent pet, traps and ranged utility: Tranquilizing Shot, safe pulls and Trueshot Aura. Turtle reworked it three times:

- **Class Changes 2** (1.17.2, November 2024) turned Survival into a melee spec.
- **1.18.0** (August 2025) added Kill Command v1, Baited Shot, Coordinated Assault, Lacerate and a special ability for every pet family.
- **1.18.1** (live 2026-03-20) rebuilt MM around Aimed Shot, Experimental Ammunition and Lock and Load, and rebuilt BM around Bestial Wrath, Scent of Blood and a new Kill Command.

Most guides written before March 2026 no longer apply.

## Pages

| Page | What it covers |
|---|---|
| [Leveling](leveling.md) | BM talent order 10–60 and the Survival respec at 40, pets, weapons, dungeons, Rhok'delar quest |
| [Survival](survival.md) | Melee raid 16/0/35, dual-wield vs two-hander, trap rotation, weapons by phase |
| [Marksmanship](marksmanship.md) | Ranged raid 12/37/2, Aimed Shot / Lock and Load / ammunition rotation, gear, enchants, consumables |
| [Beast Mastery](beast-mastery.md) | Pet raid 34/17/0, Kill Command play, pet management in raids |
| [Pets](pets.md) | Which pet for what, family abilities (incl. Turtle's), autocast, taming, loyalty, feeding, bugs |
| [PvP](pvp.md) | MM 0/34/17 and Survival/BM builds, burst and control, matchups, battleground role |
| [Sources](sources.md) | Where this came from, who to trust, what the sources do not settle |

## Roles and spec viability (1.18.1)

S = best choice, A = strong, B = fine, C = weak, — = not a role.

| Spec | Raid | Dungeon | PvP | Leveling | Open world / farming |
|---|---|---|---|---|---|
| **Survival** (melee) | **S.** "for overall dps in raid survival is still best" [[d:hunter#1489032257317507102]]; best AoE [[d:hunter#1492997613157617848]]; weaker where fire traps are useless (most of BWL) [[d:hunter#1489292976243867808]] | **S.** Explosive Trap + Carve cleave; facetanks trash [[d:hunter#1462596377325605158]] | **B.** Beats warriors and rogues, lacks gap closers and cc breaks [[d:hunter#1489620614468866290]] | **C → A** at 40 (in-combat traps) [[d:hunter#1489567654791483513]] | **S.** Lasher and ZG kite farms [[d:hunter#1470681473496383508]] |
| **Beast Mastery** | **A.** Naxx bosses: BM rank 1, MM rank 2, "very close" [[d:hunter#1486419920332787763]]; depends on raid buffs [[d:hunter#1492384227378073682]] | **A.** The pet off-tanks [[d:hunter#1492522963592020089]] | **A.** Undampened pet burst [[d:hunter#1490803074963476650]] | **S.** "BM till 60, then surv" [[d:hunter#1489400947317805157]] | **A.** Pet-tank soloing, e.g. Stormwind Vault [[d:hunter#1483819109232939060]], [[d:hunter#1483819615422517361]] |
| **Marksmanship** | **A.** Sims equal to Survival on single target; RNG-heavy [[d:hunter#1491704423427342497]], [[d:hunter#1491122275997585498]] | **B.** Volley and pierce-line Aimed Shot on packs [[d:hunter#1486284331247996989]] | **A.** "MM is way better for pvp rn" [[d:hunter#1494177202508402711]] | **B.** "endlessly kite" [[d:hunter#1491930373582753873]] | **B** |
| Tank | — (pet-tanking of 5-mans only; see [Leveling](leveling.md#group-role-while-leveling)) | niche | — | — | — |
| Healer | — | — | — | — | — |

Raid utility every hunter brings:

- **Trueshot Aura:** now baseline for every spec at level 40 (+3% AP +30 to the party) [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071).
- **Tranquilizing Shot:** "we will always be needed for tranq shot" [[d:hunter#1460375291829686374]].
- **Safe pulls** from 41 yards [[d:hunter#1437611567360249917]].
- **Armor shred:** MM's Serpent Sting with Nature Ammunition strips 240 armor and stacks with other debuffs [[d:hunter#1488876111252160624]].

## What changed in 1.18.1 (gameplay impact)

Official notes: [Jamey (staff), 2026-01-23, revised 2026-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071); hotfixes [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139). Players reported talents being reset on patch day [[d:hunter#1484491232167329855]].

| Change | What it means for you |
|---|---|
| **Steady Shot baseline at 20**, **Trueshot Aura baseline at 40** (toned down), **Aspect of the Viper** at 56 (5% max mana / 5 s) | Every spec has Steady Shot; Survival can shoot during movement phases [[d:hunter#1466006006126477313]]. Viper comes "a bit too late" for leveling [[d:hunter#1484535169519063110]] |
| MM: **Aimed Shot** keystone (2 s cast, 26 s cooldown), **Experimental Ammunition** (Aimed Shot cycles Fire → Arcane → Nature buffs for Multi/Arcane/Serpent), **Lock and Load** capstone (Steady/Aimed/Arcane crits reset Aimed Shot), Rapid Fire −40% Aimed/Steady cast, Ranged Weapon Specialization 2–10% | MM went from a Steady/Multi weave to "Aimed → auto → Steady → Arcane", hunting procs [[d:hunter#1488874340295643166]]. Crit is now worth ~50 AP [[d:hunter#1486705272167858227]] |
| **Arcane Shot** gains ranged-weapon scaling; **Volley** becomes a 3 s cast (1 s with Barrage) with AP scaling; ~30% cheaper Aimed/Arcane/Serpent | Arcane Shot is a real button again; Volley opens trash packs [[d:hunter#1484723679286923335]] |
| **Improved Hunter's Mark removed** | Nobody missed it [[d:hunter#1484366835540299878]], [[d:hunter#1484371791957856346]] |
| BM: **Baited Shot removed**, **Bestial Wrath** returns (18 s, 1.5 min), **Scent of Blood** (chance to enrage the pet), **Kill Command** capstone (80% pet AP, usable after a crit, no GCD) | A two-button spec: Steady spam with Kill Command macroed in [[d:hunter#1485618365513994341]]. KC crits of 5–7k [[d:hunter#1493004500149993484]], [[d:hunter#1486419920332787763]] |
| **Endurance Training and Thick Hide** raised | Pets survive open-world content again |
| Survival: **Alone Against the World** (+6% with no pet), **Surefooted** +3% dual-wield hit, **Vicious Strikes** buffs Raptor Strike and Mongoose Bite again, **Lacerate** 40% AP and +15% from the side, **Coordinated Assault** 30% → 20% | Survival gained a little on its abilities, and its Coordinated Assault dropped to a third or quarter [[d:hunter#1484615674688176158]]. Still the top overall spec [[d:hunter#1489032257317507102]] |
| New **Moth** pet family (Pollen Burst); **Scorpid Poison** bug hotfixed within a day | See [Pets](pets.md). The Moth is still bugged [[d:hunter#1493972355431661709]] |
| New **Facetted Crystal Scope** (+2% ranged crit, Engineering, Draenei Exiles Revered); craftable ammo from the reworked Survival profession | The new best ranged enchant [[d:hunter#1485556365173850123]]; Doomshot is still the best ammo [[d:hunter#1484724163993145427]] |
| Nefarian's hunter class call now breaks **all** equipped weapons | Bring a repair bot or swap weapons [[d:hunter#1487930456031625327]] |

Before 1.18.1 (and still in many guides): BM used Baited Shot and a Kill Command that cleansed pet CC, and MM never cast Aimed Shot. Some 2025 posts label the August 2025 patch "1.18.1". That patch was **1.18.0** (2025-08-15); 1.18.1 went live on 2026-03-20 ("march 20th at 4am" local time for one player) [[d:hunter#1483638689253953788]].

## Races and racials

Race matters little next to gear. Pick one you enjoy looking at for hundreds of hours [[d:hunter#1483658297973280858]], [[d:hunter#1486975409445666838]]. If you min-max:

| Race | Hunter-relevant racials | Verdict |
|---|---|---|
| **Night Elf** | Highest base Agility of the original races (28 for hunters) plus 1% haste; Shadowmeld | Best Alliance PvE pick early; best PvP with the Feign Death + Shadowmeld combo [[d:hunter#1491089681234919635]], [[d:hunter#1494899756655317095]], [[d:hunter#1460516471250616360]] |
| **High Elf** | +2% Agility (not 5%), +3 bow skill (only 0.6% hit), a weak 10% mana racial | Overtakes Night Elf around Tier 3 gear: 755 vs 733 Agility vs a Dwarf in BiS [[d:hunter#1491594913136115732]], [[d:hunter#1477884508136013854]], [[d:hunter#1494852458147479766]], [[d:hunter#1494853004807897098]]. Earlier "noob trap" advice predates High Elves getting their own base stats [[d:hunter#1456567859785236632]], [[d:hunter#1456568316087767152]] |
| **Orc** | Blood Fury (+120 AP; does not stack with Molten Emberstone), +5% pet damage, axe skill, Hardiness | "orc if you're going bm heavy" [[d:hunter#1483659121130475520]]. **Contested:** the 5% pet bonus "outdoes any other hunter racial" [[d:hunter#1496948956289171549]] vs "only 0.5% more dmg" when the pet is 10% of your damage [[d:hunter#1496952215489876081]] |
| **Troll** | Berserking, +3 bow skill | "troll if you're going mm heavy" [[d:hunter#1483659121130475520]]; Troll racials were nerfed in the racial rebalance [[d:hunter#1494901787545702461]] |
| **Human** | Crit racial, weapon skill | "a nice DPS boost with 2% crit" [[d:hunter#1432084802697171024]] |
| **Tauren** | War Stomp | Best PvP racial: it stuns in your dead zone [[d:hunter#1453792390098714936]] |
| **Undead, Gnome, Dwarf** | Will of the Forsaken, Escape Artist, gun skill | Undead and Gnome are strong PvP picks [[d:hunter#1456421765013049395]], [[d:hunter#1456327236729835611]] |
| **Goblin** | — | No hunter-specific data in the sources |

## Professions

- **Engineering + Mining** is the standard pair and the best-in-slot choice. You get the +2% crit Facetted Crystal Scope, Enchanted Thorium Shells, gadgets and sappers, and Mining funds your consumables [[d:hunter#1486157633780973589]], [[d:hunter#1484564082014289983]], [[d:hunter#1486798560052904010]].
- **Alchemy** (with Herbalism) is the best gold profession [[d:hunter#1473024949332742144]]. **Leatherworking and Skinning** are weak at 60, mostly useful for resistance gear [[d:hunter#1486157530781716631]].
- **Survival** (a secondary profession, reworked in 1.18.1) crafts your own arrows. Trees are gated by Survival skill, and the Horde trainer is in Orgrimmar near the fishing trainer [[d:hunter#1484654567957467306]], [[d:hunter#1484976773220401243]].
- Gold farms: DME lashers (from level 45) and the ZG kite farm, the best gold once mastered [[d:hunter#1470681473496383508]], [[d:hunter#1483746983536492575]].

Full guide: [Professions](professions.md)
