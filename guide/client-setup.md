# Client, launcher and addons on Turtle WoW 1.18.1

**Short answer:** Turtle runs the 2006 **1.12 client**, not Classic, so modern macros and many addon features only work once you add client mods. The usual stack is **Nampower** (spell queueing), **SuperWoW** (longer macros, hidden buffs, better combat log) and **UnitXP** (line of sight and distance), with a macro addon such as **SuperCleveRoidMacros** on top. If something breaks after a patch, try these in order: remove or update **patch-O**, delete the **WDB** folder, launch through the official launcher so it patches fully, and clear your GPU **shader cache** if spell visuals get stuck on screen. Class-specific macros live on the class pages (links at the bottom).

Most messages cited here come from the weeks around the 1.18.1 release (live 2026-03-20). Anything older is marked as possibly stale.

## The client mod stack

| Mod | What it does | Where to get it |
|---|---|---|
| **Nampower** | Spell queueing: the only way to press two spells on one button and have both go off [[d:code-corner#1428695809997672528]]. Also adds `IsSpellInRange` [[d:code-corner#1312194271306059857]] and cursor quickcast for ground spells [[d:mage#1445534782132850699]] | Launcher, Mods tab [[d:shaman#1431836631073292379]], [[d:mage#1459305280537100574]] |
| **SuperWoW** | 511-character macros instead of 255 [[d:code-corner#1238364213143928842]], hidden-buff visibility and better combat logging, which many addons use [[d:code-corner#1228455937757417473]] | Manual install, or the launcher (see below) [[d:druid#1468289665202262137]] |
| **UnitXP (UnitXP_SP3)** | Line-of-sight and distance checks for addons [[d:code-corner#1283399432422817803]]. It is also the only known way to turn off weather effects [[d:warrior#1455615819294707782]] | Launcher, Mods tab [[d:druid#1446120461632143492]] |
| **DXVK** | Smoother rendering. If the game won't start after you enable it, turn it off, because it doesn't work on every graphics card [[d:warrior#1378002463109681244]] (2025-05, pre-1.18.1). It also delays the 32-bit out-of-memory crash with HD textures [[d:code-corner#1489973377665073253]] | Launcher, Mods tab |
| **VanillaFixes** | Launcher that loads the DLL mods and then starts `wow.exe` [[d:code-corner#1088225716589568111]], [[d:code-corner#1235184163745824849]] (pre-1.18.1) | GitHub |
| **perf_boost** | FPS mod that can hide other players' spell effects in raids [[d:warrior#1429911873976930344]], [[d:rogue#1428451857281454141]]. The install is fiddly: a DLL plus an optional settings addon [[d:warrior#1474847109030084638]], [[d:warrior#1474858444468260907]] | gitea.com/avitasia/perf_boost |

- **SuperCleveRoidMacros (SCRM) needs SuperWoW + Nampower + UnitXP.** The druid-channel setup guide:
  1. Install SuperWoW from its GitHub release.
  2. If the launcher warns about unwanted files, let it remove them. SuperWoWhook should then appear in the Mods tab.
  3. Add Nampower and UnitXP from the Mods tab.
  4. Install SCRM as a normal addon [[d:druid#1468289665202262137]], [[d:code-corner#1433579920730099894]].
- **Antivirus:** Windows Defender sometimes flags Nampower, including 4.2.0 after release [[d:hunter#1485610049316454503]]. Players say it's a false positive, because these mods patch the game client [[d:code-corner#1440728916846448790]].
- **Addons need specific mods:** Cursive's DoT tracking needs SuperWoW [[d:code-corner#1417392442206064712]], and DPSMate needs it too [[d:priest#1433730377222193172]].

### SuperWoW and the launcher

- **The launcher can delete SuperWoW when it patches.** The standard reply is to start the game from VanillaFixes instead, "the launcher always does goofy stuff like that" [[d:rogue#1447775761686597774]], [[d:rogue#1447776015274479757]].
- **Starting `wow.exe` directly after a patch can leave the client half-patched.** One rogue couldn't use a new 1.18.1 consumable (the item had no green text) until they deleted all mods and addons and started through the launcher: "when you dont use the launcher it doesnt patch properly" [[d:rogue#1484876361184313477]], [[d:rogue#1484870447009894420]] (single source).
- **The launcher and SuperWoW can coexist:** you can keep using the launcher after installing SuperWoW [[d:hunter#1483024333541609624]].
- **Contested:** is SuperWoW itself offered in the launcher's Mods tab? One player says "you literally just install from launcher" [[d:druid#1493026379917295777]]. Another, the same week, says "superwow isn't in the launcher options" [[d:paladin#1491949655636967456]]. Earlier replies say it only shows up in the Mods tab after a manual install [[d:druid#1446123485750366289]]. If you can't find it, install it manually.

### Nampower settings worth changing

- **Spell queue window:** the defaults are "very very caster focused". For melee, set the queue window to about 250-300 ms, or about 200 ms on low ping [[d:warrior#1444412479278022760]], [[d:warrior#1444412536890851468]], [[d:warrior#1444412691451215992]]. One player found 500 "too much" [[d:warrior#1427061877787328543]].
- **Skip the queue for one spell:** in a script, replace `CastSpellByName` with `CastSpellByNameNoQueue` and Nampower won't queue that spell [[d:warrior#1427061812788203641]], [[d:warrior#1427061855226040455]].
- **Quickcast Targetting Spells** (Cast options): when it's on, ground-targeted spells fire instantly at your cursor. A hunter found Flare firing without the placement circle, and that option was the cause [[d:hunter#1478006334501949582]], [[d:hunter#1478007480863821906]], [[d:hunter#1478007826080207010]]. Turn it on deliberately if you want one-press grenades or Holy Water [[d:priest#1481912827550896328]].
- **Hunters:** Nampower can silently drop an Arcane Shot queued during Aimed Shot. See [Marksmanship](classes/hunter/marksmanship.md#macros-and-addons) for the buffer fix.
- **Scripting:** calling `GetSpellCooldown()` with a nil id while Nampower is loaded can crash the client [[d:code-corner#1469074192241524982]].

### Config.wtf tweaks

- **Tab-target range and cone:**
  - `targetnearestdistance` (default 41) sets how far Tab reaches. Raise it, don't lower it [[d:hunter#1482843843836514304]], [[d:hunter#1482853005207273522]].
  - The "nearest distance radius" setting narrows the cone in front of you that Tab prefers. A low value such as 5 stops Tab from jumping to mobs at the edge of the screen, so you "stop ass pulling packs BEHIND me" in raids [[d:hunter#1482852924744007750]], [[d:hunter#1482849820724170854]].
  - Rogues change the distance inside a macro to Sap or Pick Pocket only close targets: `/console targetNearestDistance 10`, then set it back to 41 [[d:rogue#1451578487709237268]].
- **Farclip (view distance):** `/console farclip 1500`. The default is 777, the maximum is 10000, and the change needs a relog. Updated BigWigs lowers farclip automatically in Naxx and Kara40 [[d:druid#1397346351963963543]], [[d:druid#1397525534698897504]] (2025-07, pre-1.18.1). Staff found that an old BigWigs version with farclip on by default caused Maexxna's portal to fail [[d:code-corner#1270523199691427911]].

## Patch-day troubleshooting

| Symptom | Fix |
|---|---|
| Talent tree scrambled or incomplete, for example Carve stuck at 0/1 or shown in the General tab, or Lock and Load missing | 1. Respec and try again. 2. If that fails, delete WDB and remove patch-O [[d:hunter#1484583347807191211]], [[d:hunter#1485001813366407288]], [[d:hunter#1484593514292707529]]. A GM told one player to delete WDB and patches A, B, C and O [[d:hunter#1484643422974509169]] |
| New items or tooltips missing or wrong | Disable patch-O [[d:paladin#1484595785604530216]], [[d:paladin#1485115136267124766]] |
| Set bonus not activating, spell missing, wrong aspect showing | Delete the WDB folder and relog [[d:priest#1482476697189220484]], [[d:hunter#1484565740819320903]], [[d:hunter#1484739582963744970]] |
| Still broken after all that | Re-verify the game files in the launcher and update the "raid visuals" mod [[d:hunter#1485339437746618639]] |
| Spell effects stay on screen for good: Tranquility, Hurricane, Totem of Thundercall cloud | Clear your graphics card's shader cache [[d:druid#1490800581365727406]], [[d:druid#1490809620711870694]], [[d:shaman#1493196832199675914]], [[d:shaman#1493038385344942110]] |
| Game crashed out of a battleground ("a patch or mod has caused an issue") | Don't click the white error box. Open a new launcher and you rejoin the BG without a deserter penalty [[d:pvp-general#1433159918965362910]] (2025-10) |
| PallyPower misbehaving | Delete WDB and the 2-4 PallyPower SavedVariables files for that character [[d:paladin#1492817928205242400]] |

### What patch-O is

- **patch-O** is `patch-O.mpq` from MarcelineVQ's **twow-raid-visuals**. It adds clear AoE range indicators to spell effects and improves performance on many custom bosses [[d:mage#1484870285873250345]], [[d:paladin#1484606428516847636]], [[d:paladin#1484607066063507734]].
- **Caveat:** AoEs applied to players are scaled to a human male. They look bigger than they really are on a tauren and smaller on a gnome [[d:paladin#1484607066063507734]].
- **You don't have to delete it for good.** It's a checkbox in the launcher's Mods section [[d:hunter#1484576631082193117]], and an updated build (1.4.9) came out two days after the patch [[d:paladin#1485117549816320060]]. After a client update, update patch-O [[d:warrior#1487124749166575849]]. "Any MPQ will brick your game on client update basically" [[d:warrior#1486103965144846368]].

### Addons that broke with 1.18.1

- **pfUI:** the original is "not getting updated anymore" [[d:druid#1484612123853328554]]. Players point to the **me0wg4ming fork** (`github.com/me0wg4ming/pfUI`) [[d:druid#1484619485120823327]], [[d:priest#1486594998588805250]], [[d:rogue#1485920916591480895]].
  - The druid SCRM guide recommends the jrc13245 fork instead, for correct cast bars [[d:druid#1468289665202262137]].
  - One fork update (8.3.0) hid the channel cast bar for a while, and one player rolled back to an older build [[d:mage#1487482770044489810]], [[d:mage#1487505813604929698]].
  - pfUI's own totem timer disappeared for one shaman after the update [[d:shaman#1485788837031448576]].
- **pfUI + CleveRoid:** pfUI's **Macro Tweaks** module breaks `#showtooltip` in CleveRoid macros. Disable it [[d:code-corner#1354442466325168198]] (pre-1.18.1).
- **Cursive** disappeared after a release-week update. Rolling back to the previous version fixed it [[d:warlock#1483888636943532225]], [[d:warlock#1483893754849919137]].
- **Quiver** (hunters) is no longer delivered by the launcher, so install it manually [[d:hunter#1440465885319135284]]. After release one hunter switched to pfUI's built-in shot timer "because quiver's update broke it" [[d:hunter#1489746176595984504]]. Quiver setup details are on the [hunter pages](classes/hunter/marksmanship.md#macros-and-addons).
- **pfQuest:** use the **pfQuest-turtle** fork from The-Kludge-Bureau. It fixes quest markers not showing in Turtle zones and dungeons [[d:code-corner#1481496088622928073]].
- **General method:** delete WDB, move your WTF folder somewhere else, then reinstall addons one by one to find the culprit [[d:paladin#1485474892743970926]].

## FPS and performance

- **The biggest single fix in 40-mans:** in your unit-frame addon, turn off the target frame's buff and debuff icons [[d:druid#1437933011038375947]], [[d:druid#1437935343356743691]].
- **Other fixes that helped some players:** disabling nameplate debuffs, pfQuest and unused pfUI modules [[d:warrior#1448651452221358171]].
- **Some stutter can't be fixed:** big packs dying at once stutter even on strong PCs, because "there's a point where the client is just shit" [[d:warrior#1448642066279174275]], [[d:warrior#1448673575329464330]].
- **DPSMate** costs a lot of FPS [[d:hunter#1425938313017036913]], [[d:priest#1433730377222193172]], and it freezes once its log file reaches about 20 MB [[d:code-corner#1134027762773012520]] (pre-1.18.1). ShaguDPS is the lightweight alternative [[d:priest#1433730377222193172]].
- **Outfitter:** its newer option to change gear based on the raid's health caused "massive framedrops" until it was commented out [[d:paladin#1484180695005003878]].
- **Rain:** rain can drop FPS from 150 to 10-20 on good hardware. UnitXP is the only known way to disable weather [[d:warrior#1455610776764158083]], [[d:warrior#1455615819294707782]].
- **perf_boost** and **DXVK**: see the stack table above.

## Addons players recommend (1.18.1)

Keep to **one macro addon** and one unit-frame addon. Most "my macro does something weird" reports come from running two at once (see Macro basics).

| Role | Addons | Why |
|---|---|---|
| **Everyone** | pfUI (fork) or ShaguTweaks / ShaguPlates, pfQuest-turtle, AtlasLoot, BigWigs | Full UI or light tweaks [[d:code-corner#1164289016271732758]], [[d:druid#1484973543975551117]]. Quest database [[d:code-corner#1344050509731991643]]. Boss timers: most raiders run BigWigs, and raid tools read its cooldown data [[d:code-corner#1483298694974537852]] |
| **Healers** | Puppeteer (formerly HealersMate), Rinse or Decursive, QuickHeal, Luna Unit Frames | Puppeteer: mouseover healing, binding BoP and similar, HoT timers on frames, "a must if you are healing" [[d:druid#1479809133074055220]], [[d:paladin#1471870338366177280]], [[d:druid#1493074616527229089]]. Rinse is preferred over Decursive because it has a blacklist and priorities, for example so you don't dispel mage Icicles [[d:priest#1477799926187692073]], [[d:priest#1477804253618639049]], [[d:mage#1448034550763491552]]. Healing starter kit: "Nampower and healcomm are enough to get you going" [[d:priest#1450211318199222322]]. Luna for raid frames [[d:druid#1485011354527072276]]. QuickHeal automates target and rank choice. Some paladins look down on it [[d:paladin#1441457070913359892]], [[d:paladin#1462142342718033993]] |
| **Tanks** | TWThreat | Reads real threat values from the server [[d:paladin#1468276330234773673]]. Only shows inside a dungeon or party [[d:druid#1486763413676884158]] and stops working when mobs share a name [[d:code-corner#1374701093157732415]] (pre-1.18.1) |
| **DoT classes** (warlock, shadow priest, feral bleeds) | Cursive (needs SuperWoW) | DoT tracking that accounts for haste talents [[d:code-corner#1417392442206064712]]. It only tracks your own bleeds [[d:druid#1471156099083141182]] |
| **Procs and buffs** | DoiteAuras, MPOWA | "Budget weakauras": MPowa, DoiteAuras, PowerAuras, SimpleAuras [[d:paladin#1469059852763660409]]. DoiteAuras (written by the player Doite) can see player buffs beyond the 32 visible slots [[d:paladin#1480917066545369200]] |
| **Hunters** | Quiver, ProcDoc, MetaHunt | See [Marksmanship](classes/hunter/marksmanship.md#macros-and-addons) and [Pets](classes/hunter/pets.md#addons-and-data) |
| **Shamans** | Call of Elements + Nampower | One button drops all four totems, but only with Nampower installed [[d:shaman#1427843757457412217]], [[d:shaman#1431836631073292379]]. The MarcelineVQ fork supports Nampower/SuperWoW. **Contested:** some prefer the Laytya fork for its newer features, but others couldn't get it working [[d:shaman#1428271369992278138]], [[d:shaman#1428276678437634158]], [[d:shaman#1427910498845724843]] |
| **Paladins** | PallyPower | Blessing assignment. "I only use pallypower due to needing to" [[d:paladin#1490749325733658686]] |
| **Logs** | SuperWoW combat logger + Chronicle | The logger range is 200 yards by default [[d:mage#1432438607800701100]]. Chronicle appeared when turtlogs announced it was shutting down [[d:paladin#1487136966465028148]] |

## Macro basics on the 1.12 client

### What isn't native

- `#showtooltip`, `/startattack`, `/stopcasting`, `/castsequence` and `/equip` are **not 1.12 commands**. They come from macro addons [[d:code-corner#1354103471305134102]], [[d:code-corner#1310741319546830890]].
- Without an addon, `#showtooltip` just prints itself into chat and throws a `/help` error [[d:code-corner#1412074266844987506]]. For a tooltip that updates as the macro changes, use CleverMacro or CleveRoid-family addons [[d:code-corner#1303332038988009604]].
- **Mouseover:** 1.12 has no native mouseover. Use `/pfcast` (pfUI), `/lunamo` (Luna), `/ngcast` (NotGrid) or a Roid-style `[@mouseover]` [[d:code-corner#1278504904503201876]].
- **`@cursor`** doesn't exist [[d:code-corner#1278504904503201876]]. Use Nampower quickcast instead.
- **Pets:** `/petattack` doesn't work for hunters, so use `/script PetAttack(target)` [[d:hunter#1455307187214614609]]. `/run PetFollow()` works for follow [[d:hunter#1492623557367435456]]. You can also bind pet commands directly: one of the "secondary action bars" in the Keybinds menu is the pet bar [[d:hunter#1492627484980543580]], [[d:hunter#1492627571052122143]].
- **One action per press:** you can't automate gameplay. Luke (staff): "General rule is 1 action = 1 input from the player" [[d:code-corner#1460046663375655056]].

### Length limits

- **255 characters by default, 511 with SuperWoW.** If your macro window allows 511, SuperWoW is running [[d:code-corner#1238364213143928842]].
- **A single line over 255 characters crashes the game** once the macro is on an action bar [[d:code-corner#1443930190743994369]], [[d:code-corner#1407692196882288641]].

### Which macro addon

| Addon | Notes |
|---|---|
| **SuperMacro** | Longer macros and script functions. Its own docs say not to run it with other macro addons. Running it with Roid made macros on the bars change into other spells [[d:warrior#1456360403419402374]], [[d:warrior#1456360928160256228]], [[d:warrior#1456361989822746705]] |
| **Roid-Macros** | Conditionals, `/startattack`, `/equip`, mouseover [[d:code-corner#1237455282066554900]], [[d:code-corner#1278504904503201876]] |
| **SuperCleveRoidMacros (SCRM)** | The current standard. Old CleverRoidMacros "wont work", so use SCRM [[d:druid#1468289665202262137]]. Adds `/equipmh` / `/equipoh`, `[@mouseover help alive]` and more [[d:code-corner#1433579920730099894]], [[d:druid#1464971421745807653]] |

### Syntax pitfalls

- **Use `equipped:`, not `worn:`.** "worn is not a conditional, equipped is" [[d:warrior#1459563327851331648]]. Example: `/cast [equipped:Daggers] Backstab` [[d:rogue#1488047831829970975]].
- **`/equip` with random-suffix items:** leave off the "of the Bear" part. "Of the animal is not part of the name" [[d:warrior#1447848204036214816]], [[d:warrior#1490094431116988558]].
- **No cascading conditions on one buff.** SCRM rejected `[mybuff:"Zeal">#2&"Zeal"<10]`. Split it into two `/cast` lines, one for stacks and one for duration [[d:paladin#1455501077150564405]], [[d:paladin#1455501564721496218]], [[d:paladin#1455502815970726035]].
- **In SCRM, `/` means OR and `&` means AND.** A December 2025 update briefly made both behave as one operator before the maintainer fixed it. Recheck buff-guard macros after SCRM updates [[d:code-corner#1447624406150025226]], [[d:code-corner#1448341959746912440]].
- **The 32-buff cap:** past 32 visible buffs, `nomybuff` checks can't see your buff and keep recasting it. One druid's macro spammed Tiger's Fury at the cap [[d:code-corner#1480552709412229253]]. Another player removes Tiger's Fury from the macro in big raids [[d:druid#1457312103265206344]].
- **`!` prefix (`/cast !Auto Shot`, `!Stealth`):** **Contested.** One hunter says no `!` macro works, even with addons [[d:hunter#1469396307310542911]]. Others use `/cast !Stealth` and `/cast !Dire Bear Form` with a Roid-family addon [[d:rogue#1472902890753622176]], [[d:druid#1486090197556002877]], [[d:hunter#1486846776613933298]].
- **Weapon swaps in combat cost a GCD per swap** and can't happen while the GCD is running [[d:code-corner#1489027328683278418]].

### Portable script macros

- **Auto Shot without toggling it off:** `/run for i=1,120 do if IsAutoRepeatAction(i) then return end end CastSpellByName("Auto Shot")` [[d:hunter#1430180070982553631]]. Checking your Auto Shot's own slot number is cheaper than looping [[d:hunter#1430180240067399691]].
- **Target the nearest enemy if you have none, then send the pet:** `/script if GetUnitName("target")==nil then TargetNearestEnemy() end` + `/script PetAttack(target)` [[d:hunter#1483481012934676623]].
- **`TargetNearestEnemy()` limits:** it only runs from a key press, cycles rather than picking the nearest mob, and can grab out-of-combat mobs [[d:code-corner#1340130403654045797]] (pre-1.18.1).

## Class macros and addons

Rotation macros depend on the spec, so they live on the class pages. Check each page's "Macros and addons" section:

- **Druid:** [Feral cat](classes/druid/feral-cat.md#macros-and-addons) (SCRM idol swaps), [Bear](classes/druid/feral-bear.md#macros-and-addons), [Balance](classes/druid/balance.md#macros-and-addons), [Restoration](classes/druid/restoration.md#addons)
- **Hunter:** [Marksmanship](classes/hunter/marksmanship.md#macros-and-addons), [Survival](classes/hunter/survival.md#macros-and-addons), [Pets](classes/hunter/pets.md#addons-and-data), [PvP](classes/hunter/pvp.md#macros)
- **Mage:** [Addons every mage uses](classes/mage/index.md#addons-every-mage-uses), [Arcane](classes/mage/arcane.md#macros-and-addons), [Fire](classes/mage/fire.md#macros-and-addons)
- **Paladin:** [Holy](classes/paladin/holy.md#macros-and-addons), [Protection](classes/paladin/protection.md#macros-and-addons), [Retribution](classes/paladin/retribution.md#macros-and-addons)
- **Priest:** [Holy](classes/priest/holy.md#macros-and-addons), [Discipline](classes/priest/discipline.md#macros-and-addons), [Shadow](classes/priest/shadow.md#macros-and-addons)
- **Rogue:** [Combat](classes/rogue/combat.md#macros-and-addons)
- **Shaman:** [Enhancement](classes/shaman/enhancement.md#macros-and-addons), [Restoration](classes/shaman/restoration.md#addons)
- **Warlock:** [Affliction](classes/warlock/affliction.md#macros-and-addons), [Demonology](classes/warlock/demonology.md#macros-and-addons)
- **Warrior:** [Fury](classes/warrior/fury.md#macros-and-addons), [Protection](classes/warrior/protection.md#macros-and-addons)
