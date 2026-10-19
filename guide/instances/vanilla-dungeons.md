# Other vanilla dungeons

Short notes for vanilla dungeons where the Turtle sources say little: Ragefire Chasm, the Stockade, Gnomeregan and Uldaman. Unless noted, these play as in vanilla. The Turtle-extended vanilla dungeons have their own pages: [Deadmines](deadmines.md), [Wailing Caverns](wailing-caverns.md), [Shadowfang Keep](shadowfang-keep.md), [Blackfathom Deeps](blackfathom-deeps.md), [Razorfen Kraul](razorfen-kraul.md), [Scarlet Monastery](scarlet-monastery.md), [Razorfen Downs](razorfen-downs.md), [Zul'Farrak](zulfarrak.md), [Maraudon](maraudon.md), [Sunken Temple](sunken-temple.md), [Blackrock Depths](blackrock-depths.md), [Lower](lower-blackrock-spire.md) and [Upper Blackrock Spire](upper-blackrock-spire.md), [Dire Maul](dire-maul.md), [Scholomance](scholomance.md), [Stratholme](stratholme.md).

**Server-wide rules:** standard dungeon trash respawns in 5 hours ([Torta (staff), 2023-12-05](https://forum.turtlecraft.gg/viewtopic.php?p=79953#p79953)). The 5-instances-per-hour limit is counted separately for dungeons and raids ([Torta (staff), 2025-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=128053#p128053)). Dungeon weekly quests were added in 1.18.0 and reset with the weekly maintenance ([Jamey (staff), 2025-09-09](https://forum.turtlecraft.gg/viewtopic.php?p=151050#p151050)). The earliest dungeons open at about level 13 [[d:mage#1489951665858547742]].

## Ragefire Chasm

| Boss | # | Note |
|---|---|---|
| **Oggleflint** | 1 | the first boss of the cavern |
| **Taragaman the Hungerer** | 2 | |
| **Jergosh the Invoker** | 3 | |
| **Bazzalan** | 4 | the last boss of the route |


- Level requirement restored in 2025. Level One Lunatics can bypass it ([Torta (staff), 2025-05-06](https://forum.turtlecraft.gg/viewtopic.php?p=129934#p129934)).

## The Stockade

| Boss | # | Note |
|---|---|---|
| **Dextren Ward** | 5 | the cell block's first boss |
| **Targorr the Dread** | 6 | |
| **Kam Deepfury** | 7 | |
| **Hamhock** | 8 | |
| **Bruegal Ironknuckle** *(optional rare)* | 9 | |
| **Bazil Thredd** (final) | 10 | |


- At 60 you can clear it in 3 pulls in under 8 minutes in "crap gear", with an Argent Dawn shield and a Thorium Spike enchant [[d:paladin#1490656952915591281]]. It gives wool and silk for alts, "closer to 5g a run". Not worth your dungeon-per-hour limit, but it is close by [[d:paladin#1490659960747458570]].
- Pulling everything and facing backward so every Rend lands can overflow 16+ debuffs into your buff bar (a display bug) [[d:paladin#1490665553956704306]].
- **Route:** Dextren Ward → Targorr the Dread → Kam Deepfury → Hamhock → Bazil Thredd (final), with Bruegal Ironknuckle as an optional rare. One long cell block: the group clears the side rooms first and then works down the block. Five required bosses, no gates — the instance has no script, no door and no lever in the data. [measured on bot runs, private 1.18.1-based realm — verified against our plan files, not a run log]
- **Level:** 23-31 in our clears' band (LFT minimum 15). [measured]
- **Trash:** the Defias prison population — Defias Inmate (the most common), Defias Captive, Defias Prisoner, Defias Convict, Defias Insurgent, with Bruegal Ironknuckle as the one rare. [measured]
- **Gaps:** loot, quests and any Turtle changes still need a source pass; a clear-time benchmark, and whether the block's packs pull as one group or split.

## Gnomeregan

| Boss | # | Note |
|---|---|---|
| **Viscous Fallout** | 11 | frost-immune |
| **Electrocutioner 6000** | 12 | he drops the **Workshop Key** the Workshop Door needs |
| **Crowd Pummeler 9-60** | 13 | |
| **Dark Iron Ambassador** *(optional)* | 14 | |
| **Mekgineer Thermaplugg** (final) | 15 | behind the Final Chamber |


- **Manual Crowd Pummeler** (about 28) for leveling ferals: only its stats matter now, since its effect no longer works in form [[d:druid#1484464772115206204]], [[d:druid#1462513205434650823]], [[d:druid#1462513287345209394]].
- **Toxic Revenger** (dagger) [[d:rogue#1324107314747408587]] and an early-30s gun [[d:hunter#1311230041606062111]].
- **Route:** Viscous Fallout → Electrocutioner 6000 → Crowd Pummeler 9-60 → (Dark Iron Ambassador, optional) → Mekgineer Thermaplugg (final, behind the Final Chamber). Four required bosses. [measured on bot runs, private 1.18.1-based realm — verified against our plan files, not a run log]
- **Two gates, not one.** The **Final Chamber** is Thermaplugg's door (a skill lock, no key); the route also passes the **Workshop Door**, which needs the **Workshop Key** — dropped **100% by the Electrocutioner 6000**, the second boss. Kill him before the door or the route stops there. [measured]
- **Grubbis is not on the route.** He (with Chomper) has no spawn row in our realm's data: he comes from the Blastmaster Emi Shortfuse event, which the route leaves out because no door or boss depends on it. [measured]
- **Trash:** four families, and they are the reason the walk is slow — the **Leprous** gnomes (Leprous Assistant is the most common mob in the dungeon, with Machinesmith, Technician and Defender), the **Caverndeep** troggs (Burrower, Reaver), the **Mechanical** mobs (Mechanized Sentry, Mechanized Guardian, Arcane Nullifier X-21, Mechano-Flamewalker and -Frostwalker) and the **Dark Iron** (Agent, and the Ambassador as the optional boss). [measured]
- **Viscous Fallout is frost-immune** — frost damage does nothing to him; bring fire or physical. [measured]
- **Gaps:** loot, quests and Turtle changes still need a source pass; a clear-time benchmark, and whether the alarm/back-door mechanics (vanilla) exist on Turtle.

## Uldaman

| Boss | # | Note |
|---|---|---|
| **Baelog** | 16 | one of the three dwarves of the disc event |
| **Eric "The Swift"** | 17 | |
| **Olaf** | 18 | |
| **Revelosh** | 19 | |
| **Ironaya** *(optional)* | 20 | |
| **Obsidian Sentinel** | 21 | |
| **Galgann Firehammer** | 22 | |
| **Grimlok** | 23 | |
| **Ancient Stone Keeper** | 24 | |
| **Stone Keepers** *(two of them)* | 25 | they self-destruct on death |
| **Archaedas** (final) | 26 | |

The numbers run across the whole page (Ragefire Chasm first, Uldaman last). [measured on bot runs, private
1.18.1-based realm — verified against our plan files, not a run log]

- **Tank spike:** the trogg packs hit hard. Shaman tanks should be ready to kite with Earthbind Totem if they overpull [[d:shaman#1331803317054996570]].
- **Archaedas:** the old exploit that pulled the final boss out of his room to skip the adds is patched [[d:shaman#1434695101472309298]], [[d:shaman#1434695351876583544]].
- Turtle changes: Stone Keepers self-destruct on death (2024-02-27); Uldaman is no longer required for the Cartographer title; the Ancient Power Module drops as intended (2026-04-21) ([Torta (staff), 2024-02-27](https://forum.turtlecraft.gg/viewtopic.php?p=88858#p88858), [Torta (staff), 2026-04-21](https://forum.turtlecraft.gg/viewtopic.php?p=176101#p176101)).
- **Loot:** Grimlock's Charge at about 42 for ferals [[d:druid#1484464772115206204]]; the last-boss two-hander for shamans at 45-50 [[d:shaman#1423700684641144922]].
