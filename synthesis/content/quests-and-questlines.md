# Custom quests and questlines

Turtle WoW's custom questlines, arranged by zone and by faction: chain order, quest IDs where a source gives one, givers and turn-ins, level, rewards, reputation, and what players report about bugs and tips. Structured data: `structured/content/quests.yaml`.

**Scale.** The official site claims **"1,500 quests have been added all around Azeroth"** — [official site, New Factions & Quests](https://turtlecraft.gg/new-factions-and-quests). The staff patch threads give per-patch counts: 300+ in 1.16.0, 140+ in 1.16.1, 260 in 1.16.4 (see `synthesis/turtle-vs-vanilla-timeline.md` B5). **This document covers the ~208 Turtle quests that have a community-wiki page plus the chains named in staff changelogs — a small fraction of the whole.**

**Source tiers.** *Official (staff)* = staff patch threads and hotfix posts. *Community wiki* = `turtle-wow.fandom.com`, not official — it is the source for every quest ID, level, giver, reputation and reward figure below unless stated otherwise. *Player* = forum posts, the source for bugs and tips.

**Quest IDs** are the wiki Questbox `id` field. 182 of the 274 wiki quest pages carry one; the rest show `—`.

**Two maintained player indexes** are worth reading alongside this file:

- **"Dungeon Quest Guide for Custom Content"** — [Speedz1337 (guide writer — 128 replies, 58 edits, maintained 2022-11 → 2026-04), 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29739#p29739). A per-dungeon index of **custom-only** quests with database IDs and faction markers, deliberately excluding vanilla quests — [Speedz1337, 2023-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=39496#p39496).
- Community additions to it: the Hateforge quest *Hunting Engineer Figgles* — [Balake (player), 2022-12-27](https://forum.turtlecraft.gg/viewtopic.php?p=31649#p31649); the Alliance Stockades quest *The Stockade's Search* (55221) — [Rejectedgalaxy (player), 2023-02-18](https://forum.turtlecraft.gg/viewtopic.php?p=35147#p35147); the Uldaman quest *Requisitioning a Core* (40131), which chains from a level-18 Barrens goblin quest — [Healingrain (player), 2023-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=38227#p38227).

---

## 1. Questlines by custom zone

### Thalassian Highlands (High Elf start, 1.17.1)

The starting chain, all giving **Silvermoon Remnant** reputation:

| # | Quest | id | Lv (req) | Start → End | Rep | Reward |
|---|---|---|---|---|---|---|
| 1 | A Letter from the Royalty | — | 5 | Feltouched Letter → Commander Anarileth | — | — |
| 2 | Message for the Windrunner | 41195 | 5 (3) | Commander Anarileth → Vereesa Windrunner | +150 | Thalassian Handguards |
| 3 | The Silver Covenant | 41236 | 5 (3) | Vereesa Windrunner → Commander Braedin | +150 | — |
| 4 | Felstrider Retreat | 41237 | 9 (5) | Commander Braedin | +150 | — |
| 5 | Back to Lady Windrunner | 41238 | 9 (5) | Commander Braedin → Vereesa Windrunner | +150 | — |
| 6 | Rommath, the Traitor | 41239 | 9 | Vereesa Windrunner | — | — |
| 7 | An Audience With the Prince | — | 9 | Grand Magister Rommath | — | continues to *Rommath, the Saviour* |

Side quests: *Delivery to Alah'Thalas* (41197, lv 5, Solenia Solarcrest → Tiriel Brightwater, +25); *Grapes in the Hills* (41218, lv 7, Fainriel Silverharp, +100); *The Highland Menace* (41216, lv 7, Maelor Steelguard, +150) → *A Score To Settle* (41217, +150); *Wyrms of the Highlands* (Commander Braedin, +150, **Mana Wyrm Cape**); *The Way of Fel* (41253, lv 9, Leshandra Fintri, +150); *Provisions for Refugees* (41188, part of a *Refugees no More → Safety for Refugees* chain).

Sources: [wiki: Message for the Windrunner](https://turtle-wow.fandom.com/wiki/Message_for_the_Windrunner), [wiki: Rommath, the Traitor](https://turtle-wow.fandom.com/wiki/Rommath,_the_Traitor), [wiki: An Audience With the Prince](https://turtle-wow.fandom.com/wiki/An_Audience_With_the_Prince), [wiki: The Way of Fel](https://turtle-wow.fandom.com/wiki/The_Way_of_Fel), [wiki: Provisions for Refugees](https://turtle-wow.fandom.com/wiki/Provisions_for_Refugees).

**Player note (design criticism).** A long 2022 critique of the level-60 High Elf story chain: after meeting Vereesa Windrunner, "she sends you to give letters to all of the Alliance members… it's just a series of quests to get the player base excited for the upcoming Quel'thalas zone… you are not allowed to breathe after doing a quest" — [Meepingmeeps (player), 2022-03-29](https://forum.turtlecraft.gg/viewtopic.php?p=17813#p17813). A reply from a player claiming inside knowledge describes the originally planned version (a Stormwind faction-leader summit over the corrupted Sunwell) that was cut — [Tamamo-no-Bae (player), 2022-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=18298#p18298). **single source** for the cut-plan claim; treat as unverified.

### Northwind (28–34, 1.18.0)

**SI:7 / Witch of Northwind chain** — all +100 Stormwind, giver **Operative Baltimore Hawthorne** unless noted:

*Empty Houses* (41643, lv 28, req 22) → *Defying Odds* (41644, lv 32) → *The Slavemakers* (41645, lv 33) → *Covering All Possibilities* (41646, lv 34; reward **Blackrock Cleaver** or **Ashwood Bow**) → *Unconventional Means* (41647, lv 34, Mayor Birkton → **The Witch of Northwind**) → *Deathcap And Widow's Frill* (41648) → *Shadow's Vision* (41684, → Hawthorne) → *A Veiled Threat* (41685, → **Master Mathias Shaw**; reward **SI:7 Honorary Medal**, **Loop of the Assassin** or **Operative Cape**) → *Into The Tortured Past* (41686, → Verona Gillian, which hands the story to **Balor**).

Side quests: *Goody Bag* (41668, lv 28, Ingvild Ellerian, +100, **Shiny Red Apple**) → *Fit for a Prince!* (41669, → Anduin Wrynn, **Almanac of Prayer**); *All That Is Left* (41840, lv 38, Etched Toy Sword → Judith Flenning).

Sources: [wiki: Empty Houses](https://turtle-wow.fandom.com/wiki/Empty_Houses), [wiki: A Veiled Threat](https://turtle-wow.fandom.com/wiki/A_Veiled_Threat), [wiki: Into The Tortured Past](https://turtle-wow.fandom.com/wiki/Into_The_Tortured_Past), [wiki: Goody Bag](https://turtle-wow.fandom.com/wiki/Goody_Bag_(quest)).

### Balor (29–34, 1.18.0)

Balor has the densest chain structure of any custom zone on the wiki (29 quest pages). Four independent threads:

**Alliance / SI:7 (Verona Gillian), +100 Stormwind each:** *Assessing The Situation* (41692, lv 27) → *The Last Lines* (41693, → Agent Deryl) → *To The Darkest Places* (41694, lv 30, **Group**) → *Noppsy Spickerspan* (41695) → *You May Call This Cheating...* (41696) → *Harrowing News* (41699) → *Into The Hornet's Nest* (41761, lv 33, **Group**, reward **Clasps of Subterfuge** or **Seabreeze Mantle**) → *Heart of Darkness* (41787, lv 38, **Dungeon**, reward choice of **Rufus' Trusty Tankard / Kinrial's Scalpel / Noppsy's Compendium / Nippsy's Precision Rifle**). Branches: *Demons Galore* (41697, Nippsy Spickerspan, **Harelyss' Whip**), *Explosives Make My Heart Go BOOM!* (41698, Rufus Hammerstrike, **Ez-Thro Dynamite**), *Assassin In Training* (41843, lv 35, **Dungeon**). Prologue: *My Darling Wife* (41798, lv 28, Ronald Gillian → Verona Gillian).

**Horde / Kilrogg Deadeye, +100–200 Orgrimmar:** *A Unknown Letter* (41795, lv 28, Thrall → Kilrogg Deadeye) opens the hub; *Bugs on My Island* (41828, reward **Repurposed SI:7 Dagger**); *Deep in the Mines* (41830) → *Mere Thoughts* (41831) → *Colony of Ants* (41832, **Group**) → *It Can't Rain All the Time* (41833, **Dungeon**) → *Storm's End* (41834, → Thrall, reward **Kor'kron Crown / Voodoo Jerkin / Totemic Headdress**); *Eyes of Stormreaver* (41829).

**Darkspear (O'jin):** *A Dark Tide Will Rise* (41819, lv 31, +100 Darkspear Trolls) → *To My Father, Vol'jin* (41820); *Innocence Lost* (41821, lv 34, **Dungeon**).

**Tauren (Uda'pe Sungrass), +100 Thunder Bluff:** *Grim Sunlight* (41822, **Sunkissed Shoulderpads**); *Living Fungus* (41823) → *Mycellakos* (41824, **Dungeon**) → *The Matron Will Know* (41825, → Magatha Grimtotem; reward **Left**, **Right** or **Totem of An'she**).

**Kul Tiras (Hydromancer Finnigan):** *A Hydromancer's Curiosity* (41799, lv 28, req 22, Marine Hornby → Finnigan) → *Ceaseless Storms* (41709, +200) → *Piece Of A Bigger Picture* (41710, +100) → *Calming The Tempest* (41711, +100; rewards **Pearlescent Shard** plus **Hydromancer Cowl** or **Choker of Insight**).

**Lore thread:** *Lady Who?* (41836, Drak'thul) → *Storm, Twilight and Hammer* (41837); *Artifact of the Dark Lady* (41841, lv 38, Broken Bloodstone Pendant → **Lady Sylvanas Windrunner**; reward **Lady Winter's Touch** or **Ring of Judgement**).

Sources: [wiki: Assessing The Situation](https://turtle-wow.fandom.com/wiki/Assessing_The_Situation), [wiki: Heart of Darkness](https://turtle-wow.fandom.com/wiki/Heart_of_Darkness), [wiki: A Unknown Letter](https://turtle-wow.fandom.com/wiki/A_Unknown_Letter), [wiki: Storm's End](https://turtle-wow.fandom.com/wiki/Storm%27s_End), [wiki: The Matron Will Know](https://turtle-wow.fandom.com/wiki/The_Matron_Will_Know), [wiki: Calming The Tempest](https://turtle-wow.fandom.com/wiki/Calming_The_Tempest), [wiki: Artifact of the Dark Lady](https://turtle-wow.fandom.com/wiki/Artifact_of_the_Dark_Lady).

### Grim Reaches (33–38, 1.18.0)

**Far Seer Mothang chain (Horde, +300–350 Orgrimmar):** *Entranced Magic* (41727, lv 33) → *Natural Remedies* (41728, lv 38) → *Dark Essence* (41729) → *The Power of Uth'okk* (41730, **Dungeon**) → *The Ritual of Uth'okk* (41731; reward **The Pendant of Uth'okk**) — [wiki: Entranced Magic](https://turtle-wow.fandom.com/wiki/Entranced_Magic), [wiki: The Ritual of Uth%27okk](https://turtle-wow.fandom.com/wiki/The_Ritual_of_Uth%27okk).

Other chains named on the wiki but only partially covered: **The Dragonmaw War (1)–(4)** (Mountaineer Steelwind, lv 33; 41864 is part 3), **Tomb of Ancestors → The Skardyn (41803) → Memories of Dark Iron**, and **Signs of Corruption → Yor'thegg's Ritual → The Flame of Dagnoth** (Yor'thegg the Wise, lv 37) — [wiki: The Dragonmaw War (3)](https://turtle-wow.fandom.com/wiki/The_Dragonmaw_War_(3)), [wiki: The Skardyn](https://turtle-wow.fandom.com/wiki/The_Skardyn), [wiki: Yor'thegg's Ritual](https://turtle-wow.fandom.com/wiki/Yor%27thegg%27s_Ritual).

### Gilneas (39–46, 1.17.0 "Beyond the Greymane Wall")

Named in the staff patch thread: **"Dead Until Dark"** — [Torta (staff), 2023-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=32868#p32868).

**Dead Until Dark (Horde, Orvan Darkeye, +100–250 Undercity):** *Dead Until Dark* (40877, lv 42, Deathstalker Alynna → Orvan Darkeye) → *All We Need is Blood* (40878) → *Last of the Living Dead* (40879) → *We Take It From The Living* (40880, lv 43; rewards **Sash of Innocent Blood** and **Wreath of Worgen Blood**) → *The Evil Made Me Do It* (40881, lv 46, **Dungeon**, +250) → *Blood for Blood* (40882, → Master Apothecary Faranell; reward **Pure Bloodvial Pendant**).

**Blackthorn / Genn Greymane (Horde):** *To Gilneas* (Dark Ranger Anya → Blackthorn, lv 41, +100 Undercity) branches to *Report to Livia Strongarm* → *Rendezvous with the Infiltrator* (+250) → *Quality Time with Blackthorn* (+250) → **Genn Greymane Must Die!** (lv 49, **Dungeon**, +500; rewards **Blackthorn Gauntlets**, **Banshee's Tear** or **Dark Footpad Belt**); and to *Report to Luke Agamand* → *Heist in Dryrock Mine* (+250).

**Harrison Blackheart (Horde, +250 each):** *Greymane Hatred* (40980) → *The Blackheart Killer* (40981) → *In Memory of Franklin* (40982; reward **Bleaktalon** or **Blackheart Boots**).

**Alliance / Ravenwood:** *The Wall Comes Crashing Down* (Marshal Redpath → Lord Darius Ravenwood, lv 38) and *The Rebellion* (Lord Darius Ravenwood, lv 40) open the Alliance side; the chain ends in *Assaulting Freyshear Keep* → **The Fall and Rise of Greymane** (lv 46).

**Other named chains:** *Legacy of Perenolde* (41121, lv 44, Lord Ivar Pyrewood); *Legend of Dawnstone* (lv 39, Kurnen Oathbrace, +250 Booty Bay) and *The Dawnstone Coupler* (lv 43, Technician Voltgear, +200 Gnomeregan Exiles, reward **Servocharged Wrench**); *Scouring Greyshire* (lv 42, Father Oblen, **Cuffs of Sanctitude**); *Through Greater Magic* (Dark Bishop Mordren, +150) → *The Ravenwood Scepter*; and *The Powers Beyond* → **The Greymane Stone** (40996, lv 47).

Sources: [wiki: Dead Until Dark](https://turtle-wow.fandom.com/wiki/Dead_Until_Dark), [wiki: Blood for Blood](https://turtle-wow.fandom.com/wiki/Blood_for_Blood), [wiki: Genn Greymane Must Die!](https://turtle-wow.fandom.com/wiki/Genn_Greymane_Must_Die!), [wiki: In Memory of Franklin](https://turtle-wow.fandom.com/wiki/In_Memory_of_Franklin), [wiki: The Fall and Rise of Greymane](https://turtle-wow.fandom.com/wiki/The_Fall_and_Rise_of_Greymane), [wiki: Legacy of Perenolde](https://turtle-wow.fandom.com/wiki/Legacy_of_Perenolde), [wiki: The Dawnstone Coupler](https://turtle-wow.fandom.com/wiki/The_Dawnstone_Coupler), [wiki: The Greymane Stone](https://turtle-wow.fandom.com/wiki/The_Greymane_Stone).

The 1.17.0 staff thread also names **Legend of Dawnstone / Behind the Wall / Legacy of Perenolde** and **Orvan Darkeye** as the Gilneas headline chains (timeline B5).

### Lapidis Isle (48–53, 1.16.0; reworked 1.17.2)

**Tower of Lapidis I–X** is named in the staff changelogs (timeline B5). The wiki has eight of the ten pages; all give **Kul Tiras** reputation:

I (Colonel Hardinus → Hydromancer Flakereef, +10) → II (Flakereef → Archmage Ansirem Runeweaver, +50) → III (Runeweaver, +125) → IV (Runeweaver, +50) → V–VII (Flakereef / Magus Valgon; the wiki's page for V is titled *The Tower of Lapidis VIII*, a wiki inconsistency) → VIII (Insom'ni, +125) → IX (Insom'ni → Flakereef, +25) → X (Flakereef → Colonel Hardinus, +500; reward **Kul Tiras Marine Helmet**, **Hydromancer's Peak** or **Sailor's Headband**). All are level 55.

Other Lapidis quests (all Kul Tiras rep): *Smashing the Southsea!* (lv 53) → *Southsea Interference* (+125); *The Gor'dosh Ogres* (+150) → *The Tyrant King* (+200, **Mantle of the Ogre Slayer** or **Tyrant Cuffs**); *The Tidemaster* (+100); *The Boran Family* (+100, 80 s); *Faelon's Folly* (+125); *Sailors Innovation* (req 40, +75, 80 s); *The Water Rat* (+150, **Jorgy's Golden Ear-Ring**); *The Aqua Stone* (**Group**, +150); *Drowning Deeptide* (+150); *Southsea Reserve* (+199); *An Extravagant Book*; *The Rotten Renown*.

Sources: [wiki: The Tower of Lapidis](https://turtle-wow.fandom.com/wiki/The_Tower_of_Lapidis_(quest)), [wiki: The Tower of Lapidis X](https://turtle-wow.fandom.com/wiki/The_Tower_of_Lapidis_X), [wiki: The Tower of Lapidis VI](https://turtle-wow.fandom.com/wiki/The_Tower_of_Lapidis_VI), [wiki: The Tyrant King](https://turtle-wow.fandom.com/wiki/The_Tyrant_King), [wiki: The Water Rat](https://turtle-wow.fandom.com/wiki/The_Water_Rat).

### Gillijim's Isle (48–53)

**The Maul'ogg Crisis I–VII**: the wiki has only part I (40264, lv 53, Haz'gorg the Great Seer) — [wiki: The Maul'ogg Crisis I](https://turtle-wow.fandom.com/wiki/The_Maul%27ogg_Crisis_I). Part VII (40270) is a **Sunken Temple** quest per the player guide — [Speedz1337 (guide writer), 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29752#p29752).

### Tel'Abim (54–60, 1.16.4)

- **Kontsuma chain:** *Translating The Unknown* (lv 52, A Strange Parchment → Aneka Konko, +25) → *An Exile's Regret* (+25) → *To Heal A Soul* (+250; reward **Kabuto of the Senshi** or **Kabuto of the Protector**) — [wiki: Translating The Unknown](https://turtle-wow.fandom.com/wiki/Translating_The_Unknown), [wiki: To Heal A Soul](https://turtle-wow.fandom.com/wiki/To_Heal_A_Soul).
- **Ratchet archaeology:** *An Opportunity to Dig Deep* (lv 57, Archaeologist Trixia Goldspark, +250 Ratchet) → *Azotha Gold* (+250) — [wiki: An Opportunity to Dig Deep](https://turtle-wow.fandom.com/wiki/An_Opportunity_to_Dig_Deep).
- **Tel Co.:** *Finding Bixxle!* (lv 56, Baron Telraz → Bixxle Screwfuse) → *A Report From Bixxle* — [wiki: Finding Bixxle!](https://turtle-wow.fandom.com/wiki/Finding_Bixxle!).
- **Epic gun chain (player report):** a Tel'Abim chain for an epic gun; quest 40757 requires Blackrock Depths, and the final step 40762 requires **BRD, LBRS and Molten Core** — [Elisleris (player), 2023-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=39500#p39500). **single source**; not on the wiki.
- **Danonzo's Tel'Abim Surprise** (cooking chain) is named in the timeline; its stove at Tel Co. Basecamp was fixed post-1.18.1 — [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139).

### Moonwhisper Coast (50–56, 1.18.1)

The largest single block of wiki-documented custom quests (35 pages). Five threads:

**Moonhoof / Ireth Moondancer (Horde, +150–300 Thunder Bluff, lv 55–59).** The longest chain in the extraction: *Shade Mother* (41994, Elder Moonhoof, reward **Wilted Moonflower**) → *Mindless Monster* (41995, Moonhoof the Younger) → *One Heir to Another* (42070, → Baine Bloodhoof) → *Father Will Listen* (42071, → Cairne Bloodhoof) → *Bloodhoof Stands with Moonhoof* (42072) → *Facing the Elder* (42073) → *Seeking the Truth* (42074) → *Moondancer Lives?* (42080, → Ireth Moondancer) → *Price of Betrayal* (42075, **Group**, +300) → *Return to the Dream* (42076, **Group**) → *Mothshroud Falls* (42077, lv 59, **Group**; rewards **Lens of Maras'ethil**, **Turquoise Signet of Lo'sho** or **Crown of An'she**) → *Moonhoof Rests* (42078). A parallel branch: *Hooves and Horns, Clad in Red* → *Answers from Father* (Ar'lia, lv 56) → *The Elder's End*.

**Sentinels (Alliance, Darnassus).** *Endless Vigil* (42062, lv 54, Shandris Feathermoon → Sentinel Commander Silverstreak, +300); *An'she's Respite* (42088, +500, **Boots of Krethis**); *Scales of the Tideblade* (42089, +600) → *Serpents Without Heads* (42090, lv 56; **Moonlit Hauberk** or **Moonstride Leggings**) → *Word to the High Priestess* (42091, → Tyrande Whisperwind; **Hope of Nendis**).

**Druids / Elun'aran (Darnassus).** *The Moth's Heresy* (42094, Arch Druid Renethra Moonwater, +500, **Starglass Monocle**) → *A Dryad's Counsel* (42095, → Sister Mirallun) → *The Rot of Elun'aran* (42096, **Group**, +500) → *Keeper of the Broken Grove* (42097, **Group**, +600). Also *Feathers on Point* (42093, Elendon Truebough, +300); *Echoes of Nendis* (42086, Talanis Amberscribe, +450) → *The Light of Elunaris* (42087, **Group**, **Elunarian Necklace**).

**Sunsworn (Silvermoon Remnant).** *Sunsworn Expedition* (42061, lv 53, Astalor Sunsworn → Andanil Sunsworn, +150); *Expedition Gone Wrong* (42068) → *The Withered Den* (42069, +300; **Sunsworn Glaive** or **Robes of Nox**); *Ghosts of Maras'ethil* (42066, Tesania Shadewind, +300); *Blackroot Hold* (42064, Rhys Dawnbreeze, +300; **Blackroot Wraps** or **Shield of Alah'thalas**); *Falling the Fallen* (42065, +300); *Heaven Falling Down* (42067, Arcanist Cerulon, **Group**, +300).

**Cenarion Circle and Dalaran.** *Led Astray* (42042, lv 58, Keeper Bandalar, **Group**, +250; rewards **Bloom of the Sun / Keeper's Boots / Crown of Bandalar / Dryadroot Necklace**); *Belated Preservation* (42043, Grovetender Sellais, **Group**, +250); *A Plea for Help* (42044, lv 58, Loganaar → Grovetender Sellais, +50 Cenarion Circle, from Moonglade); *A Star That Calls Back* (42092, lv 58, Zarazar Sagewind, **Group**, +500 **Dalaran**; reward **Dragonbane**).

**Priest quest:** *Secrets of Moonwhisper* (42079, lv 57, Half-Burnt Scroll → Mhulf Nighthorn, +150 Thunder Bluff).

Sources: [wiki: Shade Mother](https://turtle-wow.fandom.com/wiki/Shade_Mother), [wiki: Mothshroud Falls](https://turtle-wow.fandom.com/wiki/Mothshroud_Falls), [wiki: Endless Vigil](https://turtle-wow.fandom.com/wiki/Endless_Vigil), [wiki: Word to the High Priestess](https://turtle-wow.fandom.com/wiki/Word_to_the_High_Priestess), [wiki: The Moth's Heresy](https://turtle-wow.fandom.com/wiki/The_Moth%27s_Heresy), [wiki: Keeper of the Broken Grove](https://turtle-wow.fandom.com/wiki/Keeper_of_the_Broken_Grove), [wiki: The Withered Den](https://turtle-wow.fandom.com/wiki/The_Withered_Den), [wiki: Led Astray](https://turtle-wow.fandom.com/wiki/Led_Astray), [wiki: A Star That Calls Back](https://turtle-wow.fandom.com/wiki/A_Star_That_Calls_Back), [wiki: Secrets of Moonwhisper](https://turtle-wow.fandom.com/wiki/Secrets_of_Moonwhisper), [wiki: Answers from Father](https://turtle-wow.fandom.com/wiki/Answers_from_Father).

**Post-release quest hotfixes (all staff):** *The Fallen Ones* attack Moro'gai Village less aggressively; **Relic of Elunaris** can no longer be looted from Nendis Memento; the drop chance of **Foulheart Horn** (*Horns of their Allies*) was raised; the respawn of **Tablet of Kaz'gan** (*A Grave Misunderstanding!*) was adjusted — [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608). *The Wrath of Malgan* now rewards Thunder Bluff reputation as intended and the *Rumors of the Deathtotem* chain's broken chaining was fixed; players who completed *The Great Iqa'quluk*, *Don't tell the Others* or *Restocking for Vacation* without rewards can redo them — [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139). *Glowing Draenethyst Cluster* reputation reduced to 250; experience removed from *Core of the Elements*; **Blackroot Totem** drop chance raised — [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490). *Pridewing Venom Sac* drop chance raised and missing reputation requirements added to *The Shadow Guard* / *The Ice Guard* — [Jamey (staff), 2026-04-28](https://forum.turtlecraft.gg/viewtopic.php?p=176311#p176311).

### Blackstone Island / Durotar (Goblin start, 1.17.1)

The Goblin intro chain, all **Orgrimmar** reputation, giver **Warbringer Dar'nakk** unless noted: *The Second Wave* (lv 10, +150) → *The Warchief's Orders* (→ Thrall, +75) → *The Balance of Power* (lv 14, → Mally O'Flor, +75) → *A Favor for Mally* (+150) → *Information for Thrall* (+75) → *A War Worth Fighting* (lv 15, +50) → *Anchor's End* (lv 17, +250) → *Lieutenant Alverold* (lv 20, **Group**, +500) → *A Hero's Reward* (→ Thrall, +150; rewards **Band of Durotar**, **Signet of Durotar** or **Ring of Durotar**). Branch: *Cutting Ranks*.

Sources: [wiki: The Second Wave](https://turtle-wow.fandom.com/wiki/The_Second_Wave), [wiki: A Hero's Reward](https://turtle-wow.fandom.com/wiki/A_Hero%27s_Reward), [wiki: Lieutenant Alverold (quest)](https://turtle-wow.fandom.com/wiki/Lieutenant_Alverold_(quest)).

The reworked Orc intro *Your Place In The World* → *Cutting Teeth* → *Sting of the Scorpid* now awards **Orgrimmar & Darkspear Trolls** reputation — [wiki: Your Place In The World](https://turtle-wow.fandom.com/wiki/Your_Place_In_The_World).

---

## 2. Faction questlines that cross zones

### Kul Tiras
Beyond Lapidis Isle: *The Deeds of Sir Danuvis* (lv 15, Barrens, Sir Danuvis → Bishop Farthing, +300); *The Dragonmaw Conflict* (lv 28, Lieutenant Alverold, +300) → *The Scales of War* (lv 30, → Vice Admiral Renhoff, +100); *The Power of Aqua* (lv 25, Hydromancer Shaleborn, +300); *Kul Tiran Provisions: Food* → *Kul Tiran Provisions: Special Goods* (lv 16, Deckmaster Darkhollow); and in Stormwind *A Sailor's Love* (40661, lv 10, req 5, Sailor Borus → Charys Yserian, +100) → *Charys' Response* (40662, +75), plus *Controlling Sailors* (40663, +75; the wiki page is titled *Embassy Blues*). Sources: [wiki: The Deeds of Sir Danuvis](https://turtle-wow.fandom.com/wiki/The_Deeds_of_Sir_Danuvis), [wiki: The Power of Aqua](https://turtle-wow.fandom.com/wiki/The_Power_of_Aqua), [wiki: A Sailor's Love](https://turtle-wow.fandom.com/wiki/A_Sailor%27s_Love), [wiki: Kul Tiran Provisions: Food](https://turtle-wow.fandom.com/wiki/Kul_Tiran_Provisions:_Food).

### Dalaran — *Fel Energy Irregularities I–VII* (Blasted Lands)
Level 54–60, **level requirement 45**, the largest Dalaran reputation block: I (40438, Adjutant Scheer → Watcher Mahar Ba, +25) → II (40439, → Archmage Ansirem Runeweaver, +100) → III (40440, → Mahar Ba, +100) → IV (40441, +100) → V (40442, lv 60, → Daio the Decrepit, +100) → VI (40443, **Group**, +300) → VII (40444, → Mahar Ba, **+750**; reward a choice of four **Kirin Tor Shawls** — of Potency / of Authority / of Persecution / of Oppresion [sic]). Also *Genetic Alteration Anomaly!* (40435, lv 53, req 47, Engineer Wigglestip, +200). Sources: [wiki: Fel Energy Irregularities I](https://turtle-wow.fandom.com/wiki/Fel_Energy_Irregularities_I), [wiki: Fel Energy Irregularities VII](https://turtle-wow.fandom.com/wiki/Fel_Energy_Irregularities_VII), [wiki: Genetic Alteration Anomaly!](https://turtle-wow.fandom.com/wiki/Genetic_Alteration_Anomaly!).

### Draenei Exiles — the Riftwalker chain (Swamp of Sorrows → Azshara → Moonwhisper Coast)
*The Sanv Charm* (40027, lv 39, Sanv K'la, +175) → *Draenic Communication* (40032, +175) → *Finding Akh Z'ador* (40033, lv 52, → Akh Z'ador, +75) → *Learn Of My Past* (41320, +75) → *Rift Fatigue: Mind* (41321) **and** *Rift Fatigue: Body* (41322) → *The Riftwalker's Cane* (41323, lv 54) → *Novice In A Barren Land* (41324) → *An Echo From Beyond* (41325, lv 56+) → *Fate Of The Harborage* (Kas'tal, lv 60) → *Manifested Oddities* (Sanv K'la) → *A Favor Asked*. A side branch from *Rift Fatigue*: *A Familiar Disturbance* → *Homecoming* (Elder Krasheen, Moonwhisper Coast). Sources: [wiki: The Sanv Charm](https://turtle-wow.fandom.com/wiki/The_Sanv_Charm), [wiki: The Riftwalker's Cane](https://turtle-wow.fandom.com/wiki/The_Riftwalker%27s_Cane), [wiki: Fate Of The Harborage](https://turtle-wow.fandom.com/wiki/Fate_Of_The_Harborage), [wiki: Homecoming](https://turtle-wow.fandom.com/wiki/Homecoming).

**Pre-release question, answered by hotfix:** whether reputation from Harborage quests completed before 1.18.1 would count retroactively — [Aeliren (player), 2025-10-09](https://forum.turtlecraft.gg/viewtopic.php?p=155010#p155010); fixed by [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608).

### Wardens of Time (Caverns of Time)
Repeatables: *Corrupted Sand* (40340, 15 rep per sand) and *Sand in Bulk* (40341, 175 rep per 10) — [Speedz1337 (guide writer), 2023-11-24](https://forum.turtlecraft.gg/viewtopic.php?p=78524#p78524). Story quests: *The First Opening of The Dark Portal* (80605) and *The Bronze Betrayal* (40342) — [Speedz1337 (guide writer), 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29758#p29758). See `factions.md` for the reputation rates.

---

## 3. Named custom chains inside vanilla zones and dungeons

The player guide is the index; the wiki fills in details for a few.

| Zone / dungeon | Chain or quest (id) | Note |
|---|---|---|
| Windhorn Canyon (1.18.1) | *In Search of Tauren Relics* (41976, +350 Ironforge), *Relics of the Windhorn Tribe* (41977, +350 Thunder Bluff, **Sagh's Pendant**), *The Wrath of Malgan* (41978, +400 Ironforge; **Hauberk of Bloodshed** or **Cloudtotem Cloak**), *Destroy the Deathtotem* (41982, from *Information for Cairne*) | all **Dungeon** type |
| Frostmane Hollow (1.18.1) | *Searching for Archaeologist Evenpike* (42006) → *The Shattered Disc* (42007, **Archaeologist's Lantern**); *The Frostmane War* (42038) → *Chieftain Ubukaz* (42039; **Heavy Chain Bracers / Sash of Illumination / Deep-Thread Shawl**); *The Finest Pelt* (42008, +250 Silvermoon Remnant, **Thalassian Silk Cape**); *A Grave Misunderstanding!* (42040) | lv 13–16 |
| Stormwrought Ruins (1.18.0) | *Skull And Bones* (41760, **Grahan Family Seal**), *The Late Duke Balor* (41814; **Drinking Halfhorn** or **Enchanted Glass Kopis**), *The Dead Can't Complain* (41844, +100 Steamwheedle Cartel, **Trusty Goblin Shiv**), *Antiquities* (41842; **Antiquated Slasher** or **Chainmail of Many Pockets**), *Crystal Clear Impression* (41879, +300 Ironforge **and** +300 Wildhammer Clan, **Slatebeard Amulet**), *The Will of Balor* (41845) | lv 34–38 |
| Burning Steppes / Hateforge | *Of New and Old* I–IV (40501–40504; IV is lv 57 **Dungeon**, +300 Orgrimmar; **Blade of the Warleader / Obsidian Gem Choker / Battlemaster Helm**) | Karfang Hold chain |
| Tanaris / Zul'Farrak | *Sandfury Redemption I–III* (40522–40524) → *Of the Sandfury and the Darkspear* (40525) → *Plight of the Sandfury* (40526, **Group**) → *End Ukorz Sandscalp* (40527, **Dungeon**) | Seer Maz'ek / Vol'jin / Champion Taza'go |
| Deadwind Pass / Karazhan | *The Mystery of Karazhan* I–VI (V = 40315, Magus Ariden Dusktower); *The Depths of Karazhan* I–VI (V = 40308, Kor'gan); *The Key to Karazhan* VII (40826, Stratholme) | Alliance and Horde variants |
| Menethil / Redridge / Stormwind | *Young and Foolish* → *Caravan Meets Caravan* → *Thandol Span* → *Are You True to Your Nature?* → (*The Means of Persuading* **or** *Seeking Justice or Vengeance?*) → *The Price Of Information* → *Scarlet Aid* → *Donning the Red Flag* | level 60 SI:7/Scarlet infiltration chain |
| Dustwallow Marsh | *The Troubles Ahead* → *The Meeting with the Enemy* → *The Betrayal from Within*; *Preparation for Divination* → *Ritual of Divination* → *To Meet Again* → *The Second Meeting* → *And Justice for All* | Falgran Hastil / Magus Halister, lv 35 |
| Stranglethorn Vale | *Mechaflame's Bargain* → *Highly Unexpected Event* → *Taking the Booty Home* → *A Historian Finds You* | lv 48, Fazgel Mechaflame |
| Westfall | *The Harvest Golem Mystery* I–IX (IX = 40478, Deadmines); *Letter from Maltimor* → Maltimor Gartside | named in the 1.16.1 staff thread |
| Shadowfang Keep / Gilneas City | **Scythe of Elune legendary line**: *Blood of Vorgendor* (41378) and *The Wolf, the Crone and the Scythe* (41381) | level 60 |
| Hateforge Quarry / Maraudon | *Hammering the Mystery Home* (40920) and *The 52nd Package* (40916) — **Hardcore only**, turn the character into an Inferno character that stays permadeath past 60 | per the guide |
| Gnomeregan | *A Pounding Brain* (80398), *Backup Capacitor* (55006), *High Energy Regulator* (40861), *Backup System Activation* (40856) | Pummeler mount line |
| Hyjal | *Into the Dream I–VI* (I = 40957, Ralathius, lv 60); *Mount Hyjal In Turmoil* (41338, Loganaar → Arch Druid Dreamwind, druid Swift Travel Form) | 1.17.0 / 1.17.2 |

Sources for the table: [Speedz1337 (guide writer), 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29760#p29760) (Windhorn, Stockades), [Speedz1337, 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29762#p29762) (Stormwrought, Gnomeregan), [Speedz1337, 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29764#p29764) (Gilneas City), [Speedz1337, 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29749#p29749) (Hateforge), [Speedz1337, 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29761#p29761) (Uldaman, Maraudon), [Speedz1337, 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29743#p29743) (Shadowfang, Scythe of Elune), [Speedz1337, 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29740#p29740) (Frostmane Hollow, Deadmines), [wiki: The Wrath of Malgan](https://turtle-wow.fandom.com/wiki/The_Wrath_of_Malgan), [wiki: Chieftain Ubukaz](https://turtle-wow.fandom.com/wiki/Chieftain_Ubukaz), [wiki: Crystal Clear Impression](https://turtle-wow.fandom.com/wiki/Crystal_Clear_Impression), [wiki: Of New and Old IV](https://turtle-wow.fandom.com/wiki/Of_New_and_Old_IV), [wiki: End Ukorz Sandscalp](https://turtle-wow.fandom.com/wiki/End_Ukorz_Sandscalp), [wiki: The Mystery of Karazhan V](https://turtle-wow.fandom.com/wiki/The_Mystery_of_Karazhan_V), [wiki: The Price Of Information](https://turtle-wow.fandom.com/wiki/The_Price_Of_Information), [wiki: Ritual of Divination](https://turtle-wow.fandom.com/wiki/Ritual_of_Divination), [wiki: Highly Unexpected Event](https://turtle-wow.fandom.com/wiki/Highly_Unexpected_Event), [wiki: Into the Dream I](https://turtle-wow.fandom.com/wiki/Into_the_Dream_I), [wiki: Mount Hyjal In Turmoil](https://turtle-wow.fandom.com/wiki/Mount_Hyjal_In_Turmoil), [wiki: The Harvest Golem Mystery](https://turtle-wow.fandom.com/wiki/The_Harvest_Golem_Mystery_(13)).

Other chains named in staff changelogs but with no wiki page in this extraction (timeline B5): *Old Church of Westfall I–X*, *Insomni's chain*, *Gadgetzan Times*, *Shady Rest Inn*, *In Dreams*, *The Sleeper Has Awakened*, *Baxxil*, *Shellcoin (Marlos Catos)*, *Mirage Raceway (Race Against Time)*, *Ravasaur Training*, *Kezan Fruitcake Imports*, *Culling Wildlife*, *Field Duty*, *Battle of Darrowshire (cross-faction)*, *Korrak the Everliving / Return of Korrak*, *WANTED* bounty quests, *Call to Arms* weekly, and the Dungeon Weekly quests (War Supplies Cache, Molten Supplies Cache).

---

## 4. Class quests added by Turtle

From the changelog stream (timeline B5), with the extracted wiki pages where they exist:

- **Priest (custom races):** *Hallowed Note* (42054, lv 1, Grull Hawkwind → Nuhlok Starstrider) → *In Favor of the Three Siblings* (42055, lv 5) → *Garments of the Three Siblings* (reward **Celestial Garments**); *Light of An'she* (42057/42058, lv 10); *Spiritwalk* (42059/42060, lv 20) — [wiki: Hallowed Note](https://turtle-wow.fandom.com/wiki/Hallowed_Note_(quest)), [wiki: Garments of the Three Siblings](https://turtle-wow.fandom.com/wiki/Garments_of_the_Three_Siblings), [wiki: Light of An'she](https://turtle-wow.fandom.com/wiki/Light_of_An%27she_(quest)), [wiki: Spiritwalk](https://turtle-wow.fandom.com/wiki/Spiritwalk_(quest)).
- **Mage:** *Glyphic Rune* (3111, lv 1, Sten Stoutarm → Marrek Stromnur); *Magister's Letter* (from *Stocking Up on Wood*, Vyrin Swiftwind); Khadgar's Unlocking (2019); Theramore/Stonard teleports (1.17.0); *Arcane Arms* (80312, Wailing Caverns, mage-only); *Manuscript on Hydromancy II* (41114, Gilneas City, mage-only) — [wiki: Glyphic Rune](https://turtle-wow.fandom.com/wiki/Glyphic_Rune_(quest)), [wiki: Magister's Letter](https://turtle-wow.fandom.com/wiki/Magister%27s_Letter_(quest)), [Speedz1337 (guide writer), 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29742#p29742).
- **Warlock:** *Tainted Rune* (42045, lv 1, Alliance) and *Tainted Tablet* (41135, lv 1, Horde) — [wiki: Tainted Rune](https://turtle-wow.fandom.com/wiki/Tainted_Rune_(quest)), [wiki: Tainted Tablet](https://turtle-wow.fandom.com/wiki/Tainted_Tablet_(quest)).
- **Rogue:** *Mathias and the Defias* (2360, lv 20) → *Klaven's Tower* — [wiki: Mathias and the Defias](https://turtle-wow.fandom.com/wiki/Mathias_and_the_Defias).
- **Rogue and Warlock class weapons (1.18.1, Timbermaw Hold):** new quest starters "in the spirit of Benediction/Anathema and Rhok'delar/Lok'delar"; **staff deliberately did not say how they start** — "How you start these questlines, we'll leave to you to discover. It is half of the fun after all" — [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272). **Not found in sources:** any player report of finding them.
- Others named in the changelogs without wiki pages here: Shaman racial quests at 40 (*Way of the Spiritwolf*), Warrior *Intervene* / *Die by the Sword* books, Priest *Shadowmend* book, Warlock *Demon Portal* grimoire, Druid *Emerald Blessing* (1.17.0) and *Tome of the Wild Ride* (1.18.0), Hunter High Elf / Gnome / Goblin taming quests, and the Inferno Mode attunement at 55.

---

## 5. Quest system changes and cross-cutting rules

- **383 quests made shareable** (2023-04-03); the **Seeker of Knowledge** title at 2,800 quests; `/played` shows the completed-quest count (timeline B5).
- **1.18.1:** quests that require a payment on turn-in now show a **pop-up warning** — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168).
- **1.18.1:** *Rethevus / The Dreamer's Challenge* — Rethevus now enters combat immediately when the quest starts, and the challenge can be repeated after completion — same source.
- **Removed vanilla quests:** the Elwynn/Durotar gryphon-and-wyvern quests and some Boar Meat quests (1.18.0); Torble Sparksprocket's quests (2025-10-15); Kor'ghan's twin quests 810/811 (2023-05-09); the Alterac Valley win quest replaced by Korrak (1.16.4); AV turn-in XP removed (2024-03-27); **Shellcoin quests excluded from Hardcore** (2025-01-22); seasonal quests reset yearly (2024-02-14) — timeline B5.
- **Quest-item look excluded from transmog** (2025-10-15) — timeline B6.

---

## 6. Player-reported quest bugs and tips

| Quest / chain | Report | Source | Status |
|---|---|---|---|
| *Intercepting Wavecrest* | quest items dropped **per-player, not for the whole group**, so a group of four needed ~100 naga kills at a ~80% drop rate; the poster called it "unusual for Turtle quest design" | [Styopa1 (player), 2023-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=73526#p73526) | staff replied, [Pepesmite (staff), 2023-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=73571#p73571) |
| *A Pounding Brain* (80398) | "It took me around **500 kills** to get that quest item" (Intact Pounder Mainframe from Crowd Pummeler 9-60) | [Speedz1337 (guide writer), 2025-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=126955#p126955), asked by [Nalam (player), 2025-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=126999#p126999) | working as designed, extremely rare |
| Pummeler mount chain | "These past days I did **100 runs** and wasn't able to drop the item, so I am wondering if the quest might be broken or switched off" — had been easy before a content update | [Shade81 (player), 2023-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=71963#p71963) | **unanswered** |
| *Deadwood Headdress Feather* | ~1,200 kills (computed from 5 rep per kill and 6,000 rep) with zero feathers: "They do not drop!" | [Musse (player), 2019-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=4247#p4247) | **unanswered** |
| Group quest-item mechanics generally | players note some Turtle quest items drop for one player and some for the whole party, with no way to tell which | [Styopa1 (player), 2023-04-06](https://forum.turtlecraft.gg/viewtopic.php?p=40601#p40601) | design question, unanswered |
| Silvermoon Remnant chains | several lore chains were removed and now show as **[Deprecated]** in the item database | [Elisleris (player), 2024-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=85632#p85632), [Elisleris (player), 2024-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=85629#p85629) | see `factions.md` |
| Survival quests (1.18.1) | some Survival quests did not reward their items | [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139) | **fixed** |
| *Dirge's Kickin' Chimaerok Chops* | could not be turned in | [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608) | **fixed** |
| *Attunement to the Core* | Lothos Riftwalker did not offer it | same | **fixed** |
| *Basin of Moonwater / Shadowsong Orb* | gossip missing in Moonglade | [Torta (staff), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174367#p174367) | **fixed** |
| WPL cauldron quests | missing completion scripts | [Jamey (staff), 2026-04-28](https://forum.turtlecraft.gg/viewtopic.php?p=176311#p176311) | **fixed** |

---

## 7. Gaps and unclear points

1. **Coverage is roughly one in seven.** 208 Turtle quests have a wiki page against a claimed 1,500 added. Whole zones (Gillijim's Isle beyond one quest, most of Tel'Abim, most of Hyjal) have almost no wiki coverage.
2. **92 of the 274 wiki quest pages carry no quest ID**, including all of Lapidis Isle, most of Gilneas and the entire Goblin intro chain.
3. **No coordinates for any quest giver.** The wiki gives a settlement at best.
4. **Chain gaps.** Several wiki pages point to a `next` or `previous` quest that has no page: *To My Father* / *Vol'jin*, *Cutting Ranks*, *The Maul'ogg Crisis II*, *Into the Dream II*, *The Ravenwood Scepter*, *Rommath, the Saviour*, *Hidden Enemies (2)*, *The Battlebeard Legacy*, *Sting of the Scorpid*, *Klaven's Tower*, *Rift Fatigue* (as a merged page), *A Favor Asked*, *The Elder's End*, *Assaulting Freyshear Keep*, *Memories of Dark Iron*, *The Flame of Dagnoth*, *Donning the Red Flag*.
5. **The wiki itself is internally inconsistent** in at least one place: the page titled *The Tower of Lapidis VIII* carries the name *The Tower of Lapidis V*.
6. **The 1.18.1 Rogue and Warlock class-weapon questlines have no documented starting point** — staff withheld it on purpose and nobody published it in this extraction.
7. **Prerequisites are only partly recorded.** Wiki `levelreq` exists on 42 of 274 pages; other prerequisites (reputation, profession skill, prior chain) appear only in prose, e.g. *Gold Is The Goblin's Heart* (41305) needing **Jewelcrafting 200** — [Speedz1337 (guide writer), 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29746#p29746).
8. **Quest reward item stats are never given** — only item names.
9. **No source gives per-quest experience for the unlisted quests**, and the wiki's `experience` field is a flat number with no level scaling stated.
