# Game mechanics and systems (Turtle WoW 1.18.1)

**Short answer:** Turtle has server rules that no class page covers. Tier sets can be swapped to another spec, but T1/T2 swaps are one-way. Most same-stat buffs don't stack, and Turtle's custom stat procs don't stack with vanilla buffs such as Juju Power. Most consumables stay on you through death. Enchants come from players, Jewelcrafting and a few NPC quest-givers, and fresh loot needs a relog before you can enchant it. Nordanaar and Ambershire have cross-faction raids; Tel'Abim, the PvP realm, does not. Everything below is player-reported from Discord unless a staff quote is named. Where players disagree it is marked **Contested**.

Related pages: [Professions](professions.md) · [Instances](instances/index.md) · [World bosses](instances/world-bosses.md).

## Tier sets: spec exchange and drop bugs

### Where to swap

| Tier | Where | Rules |
|---|---|---|
| T1 (Molten Core), T2 (Blackwing Lair) | NPC in the room in the middle of Blackrock Mountain. Walk the chains there [[d:shaman#1487759945435713688]], [[d:druid#1414046625982189640]] | **One-way.** Once you turn a piece into another spec's version you can't undo it [[d:paladin#1430457071488466998]], [[d:shaman#1391325389368070194]]. To get the original spec back you have to loot a new piece [[d:priest#1420155405547339797]] |
| T2.5 (AQ40), T3 (Naxxramas) | **Feid Rota** in Ratchet, near the bank, the "quest reward swapper" [[d:mage#1312865682915852370]], [[d:paladin#1419684516028481701]], [[d:druid#1434146978195050629]] | Can be swapped again [[d:druid#1431948502811807944]]. Feid Rota changes quest rewards; he doesn't handle a quest's first completion [[d:warrior#1336690376676872233]]. His list has several pages, so click through them [[d:mage#1392215020829540454]] |
| T3.5 | None | Can't be swapped [[d:druid#1434146978195050629]] |

- **The T1/T2 swap quest only shows up while the original piece is in your bags.** If you vendored it, there's nothing to swap [[d:paladin#1430447123194974321]], [[d:paladin#1430457356596281394]].
- The warrior and warlock T1/T2 swap quests were made repeatable like the other classes' (patch note quoted 2025-06) [[d:mage#1380609498389024958]].
- **If an item won't show up at the swapper,** players found they had to take off their gear and bank everything except the piece they wanted to swap (2025-07, pre-1.18.1) [[d:mage#1392218312481570886]].
- **Uniqueness:** only Turtle's new tier sets are Unique. On original sets you can hold duplicates of the same piece in two specs, but not a second copy of a unique one [[d:druid#1431944850051436686]].

### Known loot-table bugs

- **Paladin T1 shoulders drop at 8%,** while other classes' tier shoulders drop at about 33% [[d:paladin#1481987026428629157]], [[d:paladin#1475523841110573292]]. A tester said the other T1 drop rates are fine [[d:paladin#1475521558033203241]]. It was still 8% in April 2026, after 1.18.1 [[d:paladin#1493006159693611080]], [[d:paladin#1494447085494337701]]. The shoulders drop from a shared group and have to "beat" three other items at about 20% each [[d:paladin#1494447316659208312]]. A rogue said all shoulders had been fixed after a halved drop rate (2026-01), but the April paladin reports say otherwise [[d:rogue#1463676422739460190]].
- **Paladin and shaman T2 legs from Ragnaros** could only drop once per kill, while other classes' legs could drop twice. Staff confirmed this was a bug and said it would be fixed "with the next update" (2026-03-13) [[d:paladin#1481966240942526635]]. On 2026-03-24 players were still asking whether the fix was live [[d:shaman#1485991171950903316]].
- In BWL, Nefarian and Chromaggus give paladins and shamans their tier in both loot tables, like other classes. Ragnaros was the only boss where they still had half the drop rate [[d:paladin#1475522820137025679]]. Details are on [Molten Core](instances/molten-core.md) and [Blackwing Lair](instances/blackwing-lair.md).

## Buff, debuff and proc stacking

### Same-stat buffs

- **For any one stat, only the biggest buff counts.** Firewater, Juju Power, Elixir of the Giants and Juju Might don't stack with each other. The exception is the Blasted Lands buffs (R.O.I.D.S., Ground Scorpok Assay), which stack with Giants or Mongoose [[d:warrior#1472730280639992008]], [[d:warrior#1433903143711674519]].
- Juju Power doesn't stack with Elixir of the Giants [[d:warrior#1441592987690729502]], [[d:paladin#1428068565629534208]]. Scrolls of Agility and Strength don't stack with Mongoose or Giants [[d:druid#1433887910083428544]].
- **Movement speed:** only the highest movement-speed bonus applies, but mount-speed and swim-speed bonuses do stack [[d:hunter#1494860666123845662]].

### Turtle procs vs vanilla buffs

- "It's just a known issue that twow ap,str,sp procs dont stack with vanilla/vmangoes ap,str,sp buffs" [[d:warrior#1481311664975515668]]. Examples: the Karazhan mace proc "has never stacked" with Juju Power [[d:warrior#1451922108509585408]], [[d:warrior#1451953710346408020]], and Untamed Blade reportedly doesn't stack with it either [[d:warrior#1481321194216231064]].

### Boss debuffs

- **Attack-speed and damage-reduction debuffs on a boss don't stack.** Only the strongest one applies, and Thunderfury overwrites the rest. Dream's Herald's effect used to stack but no longer does (2026-01) [[d:rogue#1457701196864290976]], [[d:rogue#1457701826068484228]].
- **Timbermaw Hold item bug (2026-03):** one TMH drop has a 150-armor debuff proc. It overwrites Sunder Armor and Improved Expose Armor, and stops them being reapplied until it falls off. The reporter planned to file a bug [[d:warrior#1487709103756152902]], [[d:warrior#1487709435647361054]]. See [Timbermaw Hold](instances/timbermaw-hold.md).

### What can't trigger what

- **Extra attacks:** according to one player reading the vmangos code, Windfury (weapon and totem), Sword Specialization and Hand of Justice all set the same extra-attack flag. While it is set, none of the others can proc (single source) [[d:paladin#1467777309149892650]].
- **Aura damage** such as Lightning Shield or Pure Essence never procs "on spell hit" items, because it is coded like Thorns. Flametongue and Thunder Lizard cloak procs are real spells (2025-08, pre-1.18.1) [[d:shaman#1403293017405788191]].
- **Minions don't attack training dummies,** so dummy tests don't show their damage (see [Training dummies](#training-dummies)).

### Debuff cap

- The client shows 16 debuff slots. Past that, debuffs start taking buff slots [[d:warrior#1424130905487839474]], [[d:mage#1385259613368090654]]. Addons like Cursive and DoiteAuras can track debuffs beyond what the client shows [[d:warrior#1493371493554327747]].
- **Contested, total cap:** one player says the limit was raised to 64, "so the limit is not really an issue" [[d:hunter#1424107283280957471]]. A warlock says debuffs above 32 are active but invisible, and stacked debuffs can still look like they fell off [[d:warlock#1443264742813863966]], [[d:warlock#1443264945138569256]]. The DoiteAuras author tracks 16 visible slots plus 32 more, 48 in total [[d:warrior#1459581775960342680]], [[d:warrior#1493371493554327747]]. Whatever the true number, the 16-slot display means debuff-based addons and WeakAura-style trackers can miss your debuffs in raids [[d:paladin#1430506094475612312]].

## Consumable rules

### Death

- **Almost every consumable lasts through death in raids.** "It's pretty much only alcohol, juju, food buffs that you lose on death" [[d:paladin#1462147106298138850]], [[d:paladin#1462147321256218810]]. Jujus fade on death [[d:druid#1475832792372740218]], [[d:paladin#1465404758734012611]].
- Elixir of the Giants lasts 1 hour and stays through death [[d:warrior#1434143470737555620]]. Dreamtonic now does too, though it didn't before (2025-11) [[d:mage#1435777760722288804]]. Blackroot Brew plus Dreamtonic is a common 60-minute pair for Strength and AP [[d:paladin#1494327050813575318]], [[d:paladin#1494327211531047033]].
- Spirit of Zanza was listed as not lasting through death (2025-10) [[d:paladin#1428068565629534208]].

### Concoctions

- **A concoction doesn't stack with the elixirs it contains.** If you use concoctions, drop Elixir of the Giants, Mongoose and Arcane Elixir [[d:paladin#1475421183112642723]], [[d:paladin#1475421294127353866]], [[d:paladin#1425005894609010820]].
- Different concoctions used to fail to stack with each other, because the two 35-spell-power ones shared a spell ID [[d:paladin#1472682907867938889]]. The patch of 2026-02-18 fixed it: "Fixed an issue causing Alchemy concoctions to not stack correctly" [[d:paladin#1473433149403955280]].

### Shared cooldowns

| Item | Shares a cooldown with | Source |
|---|---|---|
| Goblin Sapper Charge | Stratholme Holy Water | [[d:rogue#1421159028498759741]], [[d:rogue#1450511796338430054]] |
| Potion of Quickness | Protection potions | [[d:rogue#1421159028498759741]] |
| Frozen Rune | Puts Thistle Tea on cooldown, but Tea doesn't put Runes on cooldown | [[d:rogue#1450512236371247104]], [[d:rogue#1450512326812893245]] |
| Night Dragon's Breath | Mana gems and runes ("if I recall") | [[d:mage#1470460393116799188]] |
| Spellstone (warlock) | Healthstone | [[d:warlock#1404918798531690587]] |
| Nordanaar Herbal Tea | Nothing: 2-minute cooldown separate from potions; about 600 HP and 1,100 mana; 5 for 1 small Dream Shard in Hyjal | [[d:paladin#1485441517744029717]] |

**Contested: Thistle Tea and Healthstones.** Rogues call it "the most infuriating shared cd" [[d:rogue#1450512076073336894]] and asked the devs to change it [[d:rogue#1398664653223104524]]. A warrior theorycrafter says "tea/healthstone doesnt share cd" [[d:warrior#1425928485221695549]]. One player thinks the order matters, with Tea first [[d:rogue#1450512275793252492]]. Test it yourself before counting on both.

### Other stacking notes

- Spirit of Zanza doesn't stack with Lung Juice [[d:warrior#1453930771399180288]].

### MP5 ticks

*Pre-1.18.1 (2025-03), from a player citing the wiki. Nothing later contradicts it.*
- MP5 from gear, Mageblood Potion and Mana Oil ticks every 2 seconds whether you are casting or not, and ignores the five-second rule. 10 MP5 gives 4 mana every 2 seconds [[d:druid#1354565529620451399]].
- Mana food (Sagefish, Nightfin) ticks on its own 5-second timer. It still stacks and gives its full mana (Nightfin 960 over 10 minutes, Sagefish 1,080 over 15), so "food is bugged" is a myth. Stat addons just show confusing numbers [[d:druid#1354565529620451399]].

### Juju sourcing

- Trade Winterfall E'ko in Winterspring, 3 E'ko for 3 Juju [[d:paladin#1428069323997577218]], [[d:paladin#1407766387325276160]]. E'ko supply swings with how many people are farming [[d:warrior#1452410233220759623]].

## Flask of Petrified Gold (1.18.1)

- A new trinket with **25% Fortune**, from the new optional BWL boss (the goblin/ogre boss added in 1.18.1). The same boss drops a staff and a spell-power upgrade for Engineering goggles [[d:warrior#1485487352590630943]], [[d:rogue#1488123590263181322]]. See [Blackwing Lair](instances/blackwing-lair.md).
- **Fortune multiplies proc chance; it doesn't add to it.** Staff member Meflor: "hoj goes from 2% to 2.5% if you have 25% [Flask of Petrified Gold] equipped. 2x1.25=2.5". The same comment said set bonuses weren't working with it yet and were being fixed (2026-04) [[d:shaman#1489372263731167454]]. At 10% Fortune, a 1% proc becomes 1.1% [[d:warrior#1484543792043397232]].
- **On-use:** about 200 spell power for 20 seconds on a 120-second cooldown. That averages about 33 SP, slightly better than Talisman of Ephemeral Power's ~29 [[d:mage#1490385011248074802]].
- **Contested value:** melee rate it "a decent trinket with Thunderfury" [[d:warrior#1485751182386397295]] and theorycraft pairs it with HoJ, the Ironfoe set, the Wardens of Time cloak and the Timbermaw rings [[d:warrior#1488965171199086673]]. For mages, one sim gave only about 1.5 SP per 1% Fortune even with every proc item equipped ("fortune is a dead stat") [[d:mage#1486744287004594287]], [[d:mage#1486744448812585040]]. Rule of thumb: it only pays off with 3-4 proc items [[d:mage#1488702935037902950]]. Many proc items also got internal cooldowns in 1.18.1, which caps how much extra proc chance can add [[d:mage#1484544120545611786]], [[d:mage#1484544659697959032]].

## Where enchants come from

### Three sources

Depending on the slot, an enchant comes from [[d:paladin#1493599381910454352]]:
1. **Enchanting.** Usually the buyer brings the mats and the enchanter applies it [[d:code-corner#1461537526685896847]].
2. **Jewelcrafting (Gemology).** See [Professions](professions.md).
3. **NPC quest enchants:** Hyjal, the Karazhan church, the Dire Maul library and Burning Steppes.

### Specific enchants

| Enchant | Source | Notes |
|---|---|---|
| Shoulders: Sigil of Quickness (+2% haste) | Hyjal quest from an NPC in one of the houses in Nordanaar (the Hyjal town, not the realm) [[d:druid#1486295829471035472]], [[d:mage#1482100534147289321]] | Costs 5 Bright Dream Shards [[d:paladin#1437800426832527432]], plus a Fading Dream Shard [[d:paladin#1437800279088300083]]. About 20-25g at AH prices [[d:paladin#1437800903578091520]], [[d:druid#1490201212497428523]]. Hyjal also offers +2% vampirism shoulders [[d:warrior#1492288332460327073]]. The usual melee pick until the Sapphiron shoulder enchant [[d:warrior#1432713009398026293]] |
| Bracer +12 spell power | Gelkis Centaur reputation (Desolace) [[d:priest#1482940784075477030]] | Farm route: kill Magram to honored, do quests, then repeat the Magram bracer turn-in [[d:turtle-wiki#1424967239345377310]] |
| Helm / legs (Zul'Gurub) | Bring the idol plus a voodoo doll to the NPC inside ZG [[d:paladin#1472355743859736682]] | See [Zul'Gurub](instances/zulgurub.md) |

Before Ambershire's later phases, Hyjal and the Argent Dawn were the only shoulder enchant sources there (2025-10) [[d:paladin#1432813846636003519]].

### "Spell is not ready" on fresh loot

- **You can't enchant or imbue gear that just dropped.** Windfury, poisons and enchants fail with "Spell is not ready", because of the raid-loot trade timer. **Relog** to fix it, or wait about 10 minutes [[d:shaman#1459269135325335592]], [[d:shaman#1459269794271334513]], [[d:shaman#1459269929801875546]], [[d:shaman#1476724798921904283]].

## Scourge Invasion (world event)

- The event came back in 2026-01, with bosses up by 2026-01-02 [[d:paladin#1456499968750780426]]. On Turtle it adds extra undead, and a boss, inside six dungeons [[d:paladin#1457257990846677153]], [[d:paladin#1457258209537691843]]:

| Boss | Dungeon | Notable loot |
|---|---|---|
| Balzaphon | Stratholme (Live) · [page](instances/stratholme.md) | "Decent neck" [[d:paladin#1457259097517985936]] |
| Lady Falther'ess | Razorfen Downs · [page](instances/razorfen-downs.md) | |
| Lord Blackwood | Scholomance · [page](instances/scholomance.md) | A unique sword transmog [[d:paladin#1456499968750780426]], [[d:paladin#1457260126330294323]] |
| Revanchion | Dire Maul · [page](instances/dire-maul.md) | |
| Scorn | Scarlet Monastery Graveyard · [page](instances/scarlet-monastery.md) | |
| Sever | Shadowfang Keep · [page](instances/shadowfang-keep.md) | |

Source for the list: [[d:paladin#1457258225651941376]].
- The event is temporary. Twinks were told to get the BiS level-29 warlock pants and level-39 warlock neck before it ended [[d:twinking#1461401565687451859]], [[d:twinking#1461392648043761685]].
- The Razorfen Downs invasion boss is a known danger for Hardcore groups [[d:paladin#1456500940810223719]].
- A separate world event, **elemental invasions**, spawns at random in 4 places (fire, air, water or earth) and drops essences and elementals; water and fire were the most profitable in 2026-02 [[d:paladin#1471658039798141041]], [[d:paladin#1471658136166207630]].

## Quest blockers and spell-unlock quests

| Class | Problem | Fix / status |
|---|---|---|
| Warrior | Abandoned the Defensive Stance quest and it vanished from every trainer | **Uzzek** in the Barrens still offers it: tent by a tree near the bridge into Durotar, about 61.4, 21.1 [[d:warrior#1441154001142812794]], [[d:warrior#1441163370496790528]]. See [Warrior leveling](classes/warrior/leveling.md) |
| Shaman (Orc) | Feral Spirit quest (40530) doesn't show up at 60 in Orgrimmar | Check whether you already did earlier steps: the Scholomance part and the Feralas part [[d:shaman#1465733167356051642]], [[d:shaman#1465735575800647987]], [[d:shaman#1491813059667169321]] |
| Shaman | "Gone with the Wind" (air totem quest) | Bugged in 2026-03: no enemies spawn in the Earthen Ring [[d:shaman#1487569832848130089]], [[d:shaman#1487570119566561403]] |
| Shaman | "Call of Earth" | Reported bugged in 2025-06 and 2025-12 (pre-1.18.1); no later report [[d:shaman#1380254127254409396]], [[d:shaman#1455802318942507129]] |
| Shaman (Troll) | Hex | One Troll says the trainer taught Hex directly, and the Dustwallow frog quest still worked but gave no reward (2026-04, single source). The [Shaman](classes/shaman/index.md) page says it comes from a level-40 quest [[d:shaman#1491813613722140895]] |
| Priest | Mind Control while leveling | Mobs your MC'd target kills give you loot and XP. If another mob kills your MC'd target you get nothing, so drop MC first and kill it yourself [[d:priest#1448450776459644948]]. Another player says you must hit the mob once before or after MC to get its loot [[d:priest#1448451422986436619]]. See [Priest leveling](classes/priest/leveling.md) |

## Server rules, economy and realms

### Rules players quote

- **Boosting for pay is banned.** The quoted rule: boosting is "paid or tipped runs where a notably higher leveled character will complete a dungeon for lower leveled character(s)". You may sell tanking, healing or damage in dungeons "within their own level bracket, with level 60s considered their own bracket" [[d:hunter#1478056302826749983]], [[d:hunter#1478054248360185887]].
- **Rare spawns:** you can camp and sell BoE drops, but not BoP [[d:hunter#1478058895590297683]].
- **Boss loot:** the rules forbid selling boss loot publicly [[d:hunter#1460360881077616763]].
- World buffs are disabled in raids [[d:hunter#1460360881077616763]].

### Epic riding cost

- 900g for training plus 100g for the mount. Honored with the relevant faction gives 10% off, exalted another 10%, and PvP rank 3 another 10%, but the total discount is capped at **20%** [[d:paladin#1426666273005240490]]. The paladin and warlock class mounts are cheaper [[d:paladin#1426664316899295263]], [[d:paladin#1426664337996517386]]. Druids get epic riding through the Swift Travel Form questline (see [Druid leveling](classes/druid/leveling.md)).

### Realm differences

| Realm | Type | Faction rules | Notes |
|---|---|---|---|
| **Nordanaar** | The original PvE server, with the largest population [[d:paladin#1410014498659635220]], [[d:paladin#1393373015399469248]] | Cross-faction raids [[d:paladin#1434537723880013944]] | All content, including Karazhan 40 [[d:pvp-general#1428063899978305679]]. Prices are inflated [[d:paladin#1439729082710360064]] |
| **Ambershire** | Fresh server, launched 2025-08; it drew players looking for a fresh start [[d:paladin#1410014498659635220]], [[d:shaman#1457932447709659258]] | Cross-faction, so Alliance get Windfury [[d:paladin#1416678752968249404]] | Moves through content phases, so each tier gets time as current content [[d:mage#1478402560191627377]]. In 2026-01 it had Kara10, ZG and MC/Onyxia, with BWL next [[d:mage#1458349754688999508]], [[d:mage#1459936329365455021]]. Some enchants, such as +15 Agility gloves, weren't available yet (2025-10) [[d:pvp-general#1428064010216931529]] |
| **Tel'Abim** | PvP server with a small population [[d:shaman#1416392222466768990]], [[d:warrior#1466841777372663818]] | "Nothing is shared between factions"; raids aren't cross-faction [[d:hunter#1487258457542361309]], [[d:warrior#1492028231614726286]] | Horde have no Blessing of Salvation [[d:warrior#1441280051780915291]], and Alliance have no Windfury, which hurts Ret paladins (see [Retribution](classes/paladin/retribution.md)) |

## Stealth detection

*Applies to rogues and to druids in Cat Form (Prowl).*
- **Some mobs have boosted stealth detection,** for example the dogs in BRD and the Mind Flayers in AQ40. To check, step in and out of stealth: a mob with boosted detection spots you much farther away in stealth than out of it [[d:rogue#1469338037065351409]]. See [Blackrock Depths](instances/blackrock-depths.md) and [AQ40](instances/ahnqiraj-temple.md).
- **Custom zones are erratic.** Gilneas elites around level 45 sometimes break your stealth from about 1 m away, yet other times you can run past them [[d:rogue#1469305659995586600]], [[d:rogue#1469338037065351409]]. See [Gilneas City](instances/gilneas-city.md).
- **+Stealth gear helps in PvP, not much in PvE.** One rogue added up the sources at 8.4 levels (Camouflage +1, Darkmantle +1.4, cloak +1, cloak enchant +1, two rings +2, two trinkets +2), but mobs "notice" you inconsistently even at the same spot, and it doesn't help against True Sight [[d:rogue#1446376312649552014]]. Another rogue saw no difference in PvE, and "for undead in strat it seems to make no difference at all" [[d:rogue#1436797996921655386]], [[d:rogue#1436796399391084617]]. See [Rogue leveling](classes/rogue/leveling.md).

## Training dummies

Dummy numbers don't match raid numbers:
- **Heroic dummies got spell-school resistances in 1.18.1,** so spell damage and ghost procs hit them for less than before [[d:paladin#1484672724952678520]], [[d:paladin#1484675444434534401]].
- **Some minions never attack dummies:** Gnomish Battle Chicken, dragonlings, the K40 belt wolves and bomb-sigil bombs all work on real mobs but not on dummies [[d:paladin#1475602917271666698]], [[d:paladin#1475614760081817630]]. The "of the Lost" set's ghosts don't proc the bomb sigil [[d:paladin#1475608339047120979]].
- **The dummy has about 4,000 armor,** more than a well-debuffed raid boss, which undersells physical attacks against spell damage [[d:paladin#1440266439335481384]], [[d:paladin#1439557480878313493]].
- **No incoming damage means no rage from being hit,** so dual-wield warriors play differently than on a boss [[d:warrior#1430230152339783751]].
- The guide's SoC vs SoR verdict leans on dummy tests, so read it with these caveats: [Retribution](classes/paladin/retribution.md), [Paladin sources](classes/paladin/sources.md).
