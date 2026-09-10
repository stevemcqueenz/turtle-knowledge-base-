# Custom professions and recipes

Turtle WoW's custom professions (**Survival**, **Gardening**, **Jewelcrafting**), the **Forgotten Knowledge** recipe releases, custom recipes added to the vanilla professions, and the 1.18.1 **crafted-item upgrade** system. Structured data: `structured/content/recipes.yaml`.

**Source tiers.** *Official (staff)* = turtlecraft.gg pages and staff forum threads (green "Turtle WoW Team" rank). *Community wiki* = `turtle-wow.fandom.com`, not official. *Player* = non-staff forum posts. Guide threads by long-standing forum guide writers (Gifted, Speedz1337, Jcarrill0) are marked **guide writer** with a reason.

**Item and skill IDs** are given only where a source states them. The Turtle item database (`database.turtlecraft.gg`) is linked by many posts but was not fetched for this knowledge base, so IDs quoted here are the ones players and staff typed into posts.

---

## 1. Survival (secondary profession)

### 1.1 What it is

Survival was added on **2019-05-10** as a secondary skill with a cap of 150 (timeline entry; see `synthesis/turtle-vs-vanilla-timeline.md` B7). It was completely **reworked in patch 1.18.1** (release 2026-03-20) into "a secondary profession drawing from other primary professions", with **over 80 new recipes**, tools that can slow/root/trap opponents, bags for the three gathering professions, and containers for fish and meat — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168).

The official page lists the pre-1.18.1 Survival crafts and their effects — [official site, Survival & Gardening](https://turtlecraft.gg/survival-and-gardening):

| Craft | Item id (official page) | Effect as stated |
|---|---|---|
| **Dim Torch** | 6182 | brightens the night; **+4 Spirit to the party while held** |
| **Fishing Boat** | 50235 | **+50 Fishing** while fishing from it; lasts **60 minutes** |
| **Traveler's Tent** | 50234 | lasts **20 minutes**; rested-XP bonus inside; stacks with adjacent tents, **scaling up to 5 tents** |
| **Bright Campfire** | — | **+8 Spirit** to you and your party |
| **Iron Lantern** | 81187 | lights dark forests; "lantern oil not included" |
| **Murloc's Flippers** | 65029 | small amounts of all stats; increases swim speed while worn |
| **Repaired Electro-Lantern** | 65031 | **+4 Spirit** like the Dim Torch, adds a zap to melee attacks, never runs out of fuel |
| **Simple Wooden Planter** | 50238 | the Gardening planter |

Note the official page says the tent lasts 20 minutes while the 2019 player guide says 30 — **contested**, and the guide is the older of the two ([Gifted (guide writer — the pinned Survival guide, 35 replies over seven years), 2019-08-03](https://forum.turtlecraft.gg/viewtopic.php?p=3641#p3641)).

### 1.2 Trainers and where to start

- **Official:** "Visit Stranglethorn Vale and speak to **S. J. Erlgadin** and **Rufus Hardwick** of Nesingwary's Expedition" — [official site](https://turtlecraft.gg/new-locations-and-maps) / [Survival & Gardening](https://turtlecraft.gg/survival-and-gardening). Both sit at **Nesingwary's Expedition, northern Stranglethorn Vale**.
- **Player correction (pre-1.18.1):** the quest giver was faction-split — Alliance took it from **Sir S. J. Erlgadin**, Horde from **Rufus Hardwick** — [Bullfish90 (player), 2020-10-20](https://forum.turtlecraft.gg/viewtopic.php?p=8206#p8206).
- **Post-1.18.0 change (player report):** "As of 1.18 learning Survival skill no longer requires completion of Night Exploration, one can simply talk to Rufus Hardwick and learn Survival exactly like one learns any other skill" — [Nistikeitto (player), 2025-08-16](https://forum.turtlecraft.gg/viewtopic.php?p=146245#p146245). **single source**, but consistent with the 1.18.1 hotfix that made "Apprentice Survival correctly available at level 1 again" — [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608).
- **1.18.1 additions:** a **Survival Trainer named Feebeld** (level 50) was added at Rustgate Ridge on Blackstone Island — [wiki: Feebeld](https://turtle-wow.fandom.com/wiki/Feebeld); Orgrimmar Grunts were fixed so they "correctly direct players to the Survival Trainer" — [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490); and **missing Survival supplies were added to Rufus Hardwick** in the same hotfix.
- **1.18.1 Artisan quest:** *To Survive in the Jungle* had its **minimum level reduced to 35** — [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490).

### 1.3 The old quest *Night's Exploration* (pre-1.18.0, historical)

Materials, as recorded by the guide and later corrections:

| Item | Source | Price stated | Source |
|---|---|---|---|
| Wooden Club | loot from a Pile of Wood on the ground at Nesingwary's Expedition | — | [Gifted (guide writer), 2019-08-03](https://forum.turtlecraft.gg/viewtopic.php?p=3641#p3641) |
| Coil of Sturdy Rope | Jaquilina Dramet (superior axecrafter), Nesingwary's Expedition | 35 s | same |
| Cheap Goblin's Oil | Mazk Snipeshot (engineering supplies), Booty Bay — later located in the Old Port Authority building | 40 s 50 c (2019); 45 s (2023) | same; [Neo4m (player), 2023-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=46021#p46021) |
| Traveler's Tent Blueprints | Rufus Hardwick only | 1 g 50 s by 2023 (was cheaper) | [Neo4m (player), 2023-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=46021#p46021) |

Total cost given in 2019: quest 75 s 50 c; quest plus mats to reach tents 1 g 45 s 65 c — [Gifted (guide writer), 2019-08-03](https://forum.turtlecraft.gg/viewtopic.php?p=3641#p3641). A later player added that **Cheap Goblin's Oil is BoP**, so it cannot be bought on an alt — [Sharq (player), 2024-01-30](https://forum.turtlecraft.gg/viewtopic.php?p=86439#p86439).

### 1.4 Skilling up Survival (pre-1.18.1)

**contested over time** — the numbers changed repeatedly and each report is dated:

| Date | Claim | Source |
|---|---|---|
| 2019-08-03 | Bright Campfire 5 min CD, guaranteed skill-up to 75; Unlit Poor Torch ~1–2 min CD, 100% to skill 10–20 then ~50%; 1–75 takes 2.5–4 h; tents at 76+, 2 h craft CD; Fishing Boats at 125 | [Gifted (guide writer), 2019-08-03](https://forum.turtlecraft.gg/viewtopic.php?p=3641#p3641) |
| 2020-10-20 | fires gave a point every time up to **150**, torches every 3–5 tries after ~80 | [Skalman (player), 2020-10-20](https://forum.turtlecraft.gg/viewtopic.php?p=8207#p8207) |
| 2020-10-20 | torches 1 min CD, low skill-up chance; campfires 5 min CD, guaranteed — "if you just want skill points, only do Bright Campfires" | [Roxanneflowers (player), 2020-10-20](https://forum.turtlecraft.gg/viewtopic.php?p=8220#p8220) |
| 2023-05-16 | **tents can be made at skill 50**; a point per torch up to 46, then ~15 torches for the last 4; one tent at a time (unique), 2 h CD; tent mats = rope + linen + Simple Wood | [Neo4m (player), 2023-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=46020#p46020) |
| 2023-05-18 | Dim Torches have **no cooldown** and skill up 100% of the time to skill 30 | [Monkeywrench (player), 2023-05-18](https://forum.turtlecraft.gg/viewtopic.php?p=46391#p46391) |
| 2024-01-30 | power-level to 50 on torches alone; torch CD gone; only tents need STV mats — everything else is buyable in Stormwind plus Linen from the AH | [Sharq (player), 2024-01-30](https://forum.turtlecraft.gg/viewtopic.php?p=86439#p86439) |
| 2025-08-16 | torches skill up 100% to **35**, yellow after, green at **45** | [Nistikeitto (player), 2025-08-16](https://forum.turtlecraft.gg/viewtopic.php?p=146245#p146245) |
| 2026-03-21 | staff: "Reduced the range of skill levels gained by crafting Dim Torch" | [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608) |
| 2026-03-23 | after that hotfix players report torches cap at **15 skill** | [Birtha (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=171978#p171978) |

**UI quirks (players, pre-1.18.1):** the Survival crafting window sometimes only appeared if another profession window was opened first — [Emberlain (player), 2022-02-02](https://forum.turtlecraft.gg/viewtopic.php?p=16601#p16601), confirmed by [Toemaster (player), 2022-02-02](https://forum.turtlecraft.gg/viewtopic.php?p=16665#p16665). Bright Campfire lived in the **General tab of the spellbook**, not the profession window — [Wolf of Rage (player), 2025-04-11](https://forum.turtlecraft.gg/viewtopic.php?p=126412#p126412). One player believes Bright Campfire was removed entirely in the 1.18.1 overhaul — [Nistikeitto (player), 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173906#p173906). **single source**, unconfirmed by staff.

**Cap:** before the overhaul, Survival could not go past 150 — [Speedz1337 (guide writer — author of the pinned Gardening guide), 2024-05-09](https://forum.turtlecraft.gg/viewtopic.php?p=94431#p94431).

### 1.5 The 1.18.1 Survival overhaul

Staff (all [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168) unless noted):

- Survival now **draws from the other primary professions**; **80+ new recipes**.
- Tools that can **slow, root or trap** opponents.
- **Bags for the three gathering professions**; containers for **fish** and **meat**.
- **Woodcutting**, "directly tied to Survival skill", lets players search forests for wood and other materials. Woodcutting tree names were later changed "for better immersion" — [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139). The wiki records tree tiers per zone (Simple Wood, Bright Wood, Shade Wood, Star Wood, Dead Wood, Tropical Wood) in each zone's Resources section; see `zones.md`.
- Fishing Boat craft cooldown **reduced by 1 hour**.
- Enchanting's **Lesser/Greater Mystic Wand** now require **Bright Wood** instead of Star Wood, tying Enchanting to Woodcutting.

Post-release hotfixes: Apprentice Survival available at level 1 again; Survival quests not rewarding items fixed; Survival skills mis-categorised in the trainer UI fixed; Survival missing from auction-house filters fixed (twice) — [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608), [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139), [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490).

**Player reception (post-1.18.1):**

- Positive, detailed: gathering trinkets that boost herbing and mining, fishing traps, craftable bows and arrows, **Nutritious Rations** producing permanent Oranges, **Emergency Parachutes**, "secret pets", one-handed white weapons useful for the Traveling Craftsman / Vagrant challenges, and a cloth head piece that can summon a cooking fire — [Elesion (player), 2026-03-29](https://forum.turtlecraft.gg/viewtopic.php?p=173031#p173031), [Elesion (player), 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173825#p173825), [Reddguard (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173594#p173594), [Paidian (player), 2026-03-29](https://forum.turtlecraft.gg/viewtopic.php?p=173067#p173067), [Fizuzfil (player), 2026-04-02](https://forum.turtlecraft.gg/viewtopic.php?p=173747#p173747). Elesion also notes **wood was removed from vendors** and moved to the Woodcutting gathering activity.
- A **skill-300 crafted sickle increases the chance to farm Black Lotus**; a player with 900 lotus asked for a yield-boosting version instead — [Birtha (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=171974#p171974).
- Complaints at launch: unable to cut wood or find the tree-finding spell; torches showing orange but behaving as grey — [Chungassus (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=172006#p172006), [Ravenofseven72 (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=171997#p171997), [Springboards (player), 2026-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=171743#p171743).
- New tools require a **woodcutting axe** and a "widdle", plus heavy Mining; the **Survivalist Skinning Knife** was called useless because skinning still needs a skinning knife — [Dexday (player), 2026-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=172785#p172785).
- Survival recipes showing as "unknown" at the trainer even after clearing the WDB cache — [Deadcrow (player), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174264#p174264).
- A Survival **slingshot** usable for ranged pulling — [Atreidon (player), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172086#p172086).

**Not found in sources:** a per-recipe list of the 80+ new Survival recipes with skill levels and materials. Staff gave the count, not the list, and no player thread in this extraction enumerates them.

### 1.6 Tents, taverns and rested XP (1.18.1)

| Rule (1.18.1) | Value | Source |
|---|---|---|
| Rested XP from kills | **50%** bonus (was 100%) | [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168) |
| Tent rested cap | **25%** of rested XP; no benefit above that | same |
| Non-city taverns | can reach **100%** rested | same |
| Tent vs. tavern pace | both grant rested at the same pace | same |
| Rested while dead | removed | [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608) |

Staff reasoning: the bonus was nerfed "so XP rate isn't permanently doubled in the game" while making rested accessible worldwide; tent camps at the Stormwind/Orgrimmar gates were "a mess"; "can't feel fully rested unless you're comfortable" — [Torta (staff), 2026-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=168639#p168639), [Torta (staff), 2026-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=168649#p168649). Players objected — [Hctwowfan (player), 2026-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=168644#p168644), [Saronsen (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173332#p173332). **contested** (staff intent vs. player reception).

Historical: "tent parties" in front of Stormwind and Orgrimmar, and later at the Gurubashi Arena because both factions had Arena Ambassadors teleporting there — [Gifted (guide writer), 2019-08-03](https://forum.turtlecraft.gg/viewtopic.php?p=3641#p3641). The Arena Ambassadors were later removed — [Desuku (player), 2022-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=25464#p25464), confirmed by [Robin64 (player), 2024-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=87875#p87875).

---

## 2. Gardening

### 2.1 Getting it

- **Official:** at level 20 take **"You Reap What You Sow"** in **Elwynn Forest** or **Mulgore**; the quest teaches where to get four seed types with an accelerated growth rate and rewards a **Shovel** and a first **Wooden Planter**. **Survival 75 is required** — [official site, Survival & Gardening](https://turtlecraft.gg/survival-and-gardening).
- **Trainers (player guide):** **Kern Mosshoof** (Horde, npc 51532) or **Mortimer Stansfield** (Alliance, npc 51530); Horde quest is in **Bloodhoof Village, Mulgore**, Alliance just outside Stormwind — [Speedz1337 (guide writer), 2025-06-19](https://forum.turtlecraft.gg/viewtopic.php?p=136320#p136320), [Xudo (player), 2023-07-14](https://forum.turtlecraft.gg/viewtopic.php?p=53374#p53374), [Aeternusdoleo (player), 2023-07-14](https://forum.turtlecraft.gg/viewtopic.php?p=53372#p53372).
- The **Simple Wooden Planter** recipe is bought from the gardening trainer and needs **Survival 75** — [Speedz1337 (guide writer), 2025-06-19](https://forum.turtlecraft.gg/viewtopic.php?p=136320#p136320).

### 2.2 Seeds and where they come from (player guide)

| Seed | Item id | Where | Yields (3–6 unless noted) |
|---|---|---|---|
| **Mountain Berry Bush Seeds** | 51707 | bushes (object 1000371) around **The Hinterlands**; AH | Sour Mountain Berry, Sweet Mountain Berry |
| **Country Pumpkin Seeds** | 51706 | garden pumpkins (object 1000370) in **Elwynn Forest, Tirisfal Glades, Hillsbrad Foothills**; AH | two versions of Plump Country Pumpkin — one flat +6 Sta/Spi, one **25% of your level** in Sta/Spi |
| **Striped Melon Seeds** | 51708 | ripe garden watermelons (object 1000372) in **The Barrens, Durotar, Elwynn Forest, Redridge Mountains, Mulgore**; AH | two versions of Juicy Striped Melon |
| **Magic Mushroom Spores** | 51716 | vendors in **Mulgore, Teldrassil, Eastern Plaguelands** at **2 g 50 s** (2 g with the 20% reputation discount); AH | Hardened Mushroom, Power Mushroom (**2–5**) |

Source for the whole table: [Speedz1337 (guide writer), 2025-06-19](https://forum.turtlecraft.gg/viewtopic.php?p=136320#p136320). The guide originally said the mushroom vendors were in Thunder Bluff/Darnassus and was edited 15 times; the zone list above is the version in the extracted post.

### 2.3 Growth cycle (player guide)

Four stages of **9 minutes** each = **36 minutes** to maturity with no downtime. One seed per planter. Stage 2 needs **Un'Goro Soil**, stages 3 and 4 need **Refreshing Spring Water**; then harvest. Intermediate stages cannot spoil with time, but **planters disappear when you log out or leave the zone**, at any stage — [Speedz1337 (guide writer), 2025-06-19](https://forum.turtlecraft.gg/viewtopic.php?p=136320#p136320). The official page states the same loop in prose ("Every 9 minutes you'll have to water or fertilize the sproutling").

### 2.4 Placement

Originally restricted to specific "farm or garden" objects (object 1000373 marks the check points), which produced the error "need farm or garden" — [kalimore (player), 2025-07-20](https://forum.turtlecraft.gg/viewtopic.php?p=140645#p140645), [Speedz1337 (guide writer), 2025-07-21](https://forum.turtlecraft.gg/viewtopic.php?p=140709#p140709). The restriction was later lifted: "Turtle made an update to allow farming in all areas besides capital cities" — [Speedz1337 (guide writer), 2025-10-13](https://forum.turtlecraft.gg/viewtopic.php?p=155377#p155377). The timeline records "planters anywhere (2025-08-13)" and "crops private (2025-12-02)".

Player-found spots from the restricted era, for the record: a hut with crops in Durotar between Razor Hill and Sparkwater Port, and a fork in the road just above the Crossroads — [Bigsmerf (player), 2025-06-23](https://forum.turtlecraft.gg/viewtopic.php?p=136721#p136721), confirmed by the guide author.

### 2.5 1.18.1 Gardening changes

- Staff: **three new crops** in specific zones grant powerful buffs when fully grown; "unwelcome critters" now infiltrate crops — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168).
- Player report of the new seed names, read off the restored item database: **Wildhammer Yam Roots, Wild Grape Seeds, Ordinary Cabbage Seeds, Sandswept Carrot Seeds** — [Sagabal (player), 2026-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=174505#p174505). That is **four** names against staff's "three new crops"; **contested**, and no staff post reconciles it. Note the 1.18.1 cooking change to **Empowering Herbal Salad** now uses **Lush Cabbage Head** and **Moonwhisper Berry** — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168), which is consistent with cabbage being a new crop.

---

## 3. Jewelcrafting (primary profession, 1.17.2)

### 3.1 Overview (official)

Announced with **Patch 1.17.2: Tower of Karazhan** — [Torta (staff), 2023-12-28](https://forum.turtlecraft.gg/viewtopic.php?p=82980#p82980). The dedicated page and the patch thread carry identical wording — [official site, Jewelcrafting](https://turtlecraft.gg/jewelcrafting):

- **Over 200 new craftable items**: rings, necklaces, staves, trinkets, off-hand frills, helmets and gemstones. Recipes come from **trainers**, are **found in the world**, and from **exclusive Jewelcrafter questlines that reward a unique recipe on completion**.
- **Trainers:** Alliance — **Stormwind, Ironforge, Alah'Thalas**; Horde — **Orgrimmar, Undercity, Sparkwater Port**.
- **New trade goods:** gritted papers, polishing oils; new jewels **Amber Topaz** and **Pure Moonstone**. **Enchanted Gemstone Oils** must be supplied by an **Enchanter** — the profession "demands collaboration".
- **Gemstone Clusters** (post-release) let any Jewelcrafter recycle materials into more jewels than mining alone yields.
- **Gemstone Deposits** appear in the world, **replacing thorium veins**, and require **Mining 310**. They yield gems from several tiers and **guarantee an Imperial Topaz** — described as "akin to Black Lotus" and vital for high-level crafts in both specialisations.
- A **Gem Rush** event ran until the 1.17.2 release, doubling drop chances for most gemstones "with a few exceptions".

### 3.2 Specialisations

Chosen at **skill 225 and character level 40**, after a related questline, like the other specialisations — [official site, Jewelcrafting](https://turtlecraft.gg/jewelcrafting).

| Specialisation | Focus (official) |
|---|---|
| **Goldsmith** | equipment — necklaces, rings, bracers, staves; **most powerful items including Epics are exclusive to it** |
| **Gemology** | unique gemstones that empower necklaces and rings; **almost all gemstones are exclusive to it** |

**Goblin racial interaction:** the Goblin racial **Prospecting** "now grants Mining *and* Jewelcrafting skill instead of just Mining" — [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102965#p102965).

### 3.3 Specialisation questline waypoints reported by players

- The Goldsmith pre-quest item **Tarnished Citrine Choker** is **not a ground spawn** — it drops from "the rogue boss in the alley" in **Gilneas City** — [Mikkey123 (player), 2025-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=115800#p115800), after searching in-game and online — [Mikkey123 (player), 2025-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=115790#p115790). **single source.**
- A later Goldsmith pre-quest requires crafting **two Alluring Citrine Chokers**; the recipe is itself a **quest reward** (item 70134), not a purchasable pattern — [Uratha (player), 2026-02-26](https://forum.turtlecraft.gg/viewtopic.php?p=169487#p169487), answered by [Ingameacc12345 (player), 2026-02-26](https://forum.turtlecraft.gg/viewtopic.php?p=169490#p169490). **single source**, sourced from the item database rather than gameplay.
- **Top Half of Advance Goldsmithing 2** (item 56102) is a rare **BoP** drop with no confirmed source; a player reported the database listing Sunken Temple trolls and farming them without success — [Nobody2u (player), 2025-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=155228#p155228), [Assteeriix (player), 2026-02-06](https://forum.turtlecraft.gg/viewtopic.php?p=167568#p167568). **unresolved.**

### 3.4 Jewelcrafting maintenance changes (staff)

- Missing new Jewelcrafting recipes were added to drop tables — [Torta (staff), 2024-11-05](https://forum.turtlecraft.gg/viewtopic.php?p=106599#p106599).
- NPCs that erroneously dropped Jewelcrafting crafts were fixed — [Jamey (staff), 2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107253#p107253).
- The 1.17.2 final itemization changelog notes "a few item sets for Jewelcrafting" among the new sets — [Dragunovi (staff), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105276#p105276).
- Recipes named in the timeline document from the changelog stream: Aquamarine Pendant, Rough Truesilver Ring (2 Truesilver Bars), Plans: Gorgeous Mountain Gemstone, Malachite Ring, Emerald Monarch's Glow, Blue Starfire, Amber Ring, Gem of Nerubis, Voltage-Neutralizing Nature Reflector, Giga-Charged Arcane Reflector, and the Heavy/Solid/Dense gritted papers (reagent fixes 2024-11-20). See `synthesis/turtle-vs-vanilla-timeline.md` B7 for the per-item changelog dates.

**Not found in sources:** the Jewelcrafting skill ranges per recipe, trainer prices, and the full 200-item list. No extracted thread reproduces them.

---

## 4. Forgotten Knowledge — unreleased vanilla recipes made obtainable

### 4.1 Forgotten Knowledge I (live 2020-01-08)

Announced by [Pompa (player-indexed, posts as the team in the patch-notes forum), 2020-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=4777#p4777). Staff deliberately withheld the sources; the clues given were "every plan and pattern is **sold** by an NPC, no drops", "some are Alliance or Horde only, but the patterns are BoE", and "find **Aurelius, the Mysterious Traveler**" for the Onyxia pattern. Players then mapped them:

| Recipe | Vendor / location (player-found) | Source |
|---|---|---|
| Plans: Rune Edge | Stormwind and Orgrimmar Blacksmithing Suppliers | [Qixel (player), 2020-01-08](https://forum.turtlecraft.gg/viewtopic.php?p=4823#p4823) |
| Plans: Thorium Greatsword | Stormwind and Orgrimmar Blacksmithing Suppliers | same |
| Plans: Mithril Scale Gloves | Stormwind and Orgrimmar Blacksmithing Suppliers | same |
| Plans: Rough Bronze Bracers | Stormwind and Orgrimmar Blacksmithing Suppliers | same |
| Plans: Ironforge Gauntlets | Blacksmithing Supplies vendor, Ironforge | [Matt (player), 2020-01-08](https://forum.turtlecraft.gg/viewtopic.php?p=4822#p4822) |
| Plans: Ironforge Chain | Blacksmithing Supplies vendor, Ironforge | same |
| Plans: Blood Talon | Thunder Bluff blacksmithing supplies | [Matt (player), 2020-01-08](https://forum.turtlecraft.gg/viewtopic.php?p=4826#p4826) |
| Plans: Darkspear | Sen'jin Village Blacksmithing Supplier | [Qixel (player), 2020-01-08](https://forum.turtlecraft.gg/viewtopic.php?p=4823#p4823) |
| Plans: Bleakwood Hew | Altsoba Ragetotem, Bloodvenom Post, Felwood — **Horde-only purchase, BoE recipe** | [Matt (player), 2020-01-08](https://forum.turtlecraft.gg/viewtopic.php?p=4831#p4831) |
| Pattern: Nightscape Cloak | Undercity Leatherworking Supplier | [Qixel (player), 2020-01-08](https://forum.turtlecraft.gg/viewtopic.php?p=4823#p4823) |
| **Pattern: Onyxia Scale Breastplate** | outside Onyxia's Lair | same |

The vendor locations are **player-found, single source each**, and are six years old at the time of this extraction; treat them as historical.

### 4.2 Forgotten Knowledge II (2021-05-19)

Announced by [Dragunovi (staff), 2021-05-19](https://forum.turtlecraft.gg/viewtopic.php?p=10602#p10602) — recipes that had shipped with an earlier release but were never documented.

| Recipe | Clue given by staff |
|---|---|
| Pattern: Stormcloth Vest / Shoulders / Gloves / Headband / Pants | drop from "creatures that harness natural healing or lightning around **level 35–45**" |
| Pattern: Green Woolen Robe | "sold by a hidden peddler in **Westfall**" |
| Pattern: Boots of Darkness | "sold by a travelling merchant and his guardian robot" |
| Plans: Inlaid Thorium Hammer | "sold by a blacksmith in a sandy goblin town" |
| Schematic: Goblin Radio | "sold on the newly established goblin town in the murky swamp, only to those who get on their good side. **(Horde Only)**" |

Listed as **Soon™** in the same post and delivered later (they appear as 1.17.0 additions in the staff profession changelog, §5): Enchant Gloves – Holy Power, Enchant Gloves – Nature Power, Enchant Gloves – Arcane Power, Schematic: Recharge Manual Crowd Pummeler.

---

## 5. Custom recipes added to the vanilla professions

The authoritative list is the staff itemization thread **"Profession Changes and Additions"** — [Dragunovi (staff), 2023-07-10](https://forum.turtlecraft.gg/viewtopic.php?p=52796#p52796). Entries with no patch tag predate 1.17.0; tagged entries carry the patch the staff post gives. Reproduced in full because it is the only staff-authored recipe inventory in this extraction.

### Tailoring
Pattern: Stormcloth Vest · Stormcloth Shoulders · Stormcloth Gloves · Stormcloth Headband · Stormcloth Pants · Green Woolen Robe · Boots of Darkness · Windbinder Gloves · Dustguider Sash · Robe of Sacrifice.
**1.17.0:** Flarecore Boots · Gloves of Unwinding Mystery · Dreamthread Mantle · Dreamthread Kilt · Dreamthread Bracers · Dreamthread Gloves.
**1.17.1:** Gloves of Manathirst.
**1.17.2:** Cosmic Headdress · Cosmic Leggings · Cosmic Mantle · Cosmic Vest · Ley-Kissed Drape.

Dreamthread shoulders require **skill 300 to equip** (2023-10-18 timeline entry). The Undermarket quest is a Tailoring 230 gate (2025-10-05 timeline entry).

### Leatherworking
**General:** Nightscape Cloak · Shadowskin Boots · Centaur Battle Harness. **1.17.0:** Enchanted Armor Kit · Inscribed Runic Bracers · Dreamhide Mantle · Dreamhide Bracers · Dreamhide Leggings · Dreamhide Belt. **1.17.1:** Lynxstep Boots. **1.17.2:** Ethereal Helmet · Ethereal Leggings · Ethereal Shoulder Pads · Ethereal Tunic.
**Dragonscale:** Onyxia Scale Breastplate · Red Dragonscale Boots · Red Dragonscale Shoulders · Red Dragonscale Leggings · Dragonscale Leggings · Stormscale Leggings · Blue Dragonscale Boots. **1.17.0:** Chromatic Leggings.
**Elemental:** Boots of the Wind · Breastplate of the Earth · Depthstalker Helm · Earthguard Tunic · Flamewrath Leggings · Windwalker Boots. **1.17.0:** Molten Leggings.
**Tribal:** Verdant Dreamer's Breastplate. **1.17.0:** Corehound Gloves.

Dreamhide shoulders also require **300 to equip** (2023-10-18 timeline entry).

### Blacksmithing
**General:** Mantle of Centaur Authority · Lordaeron Breastplate · Rune Edge · Ironforge Gauntlets · Ironforge Chain · Thorium Greatsword · Mithril Scale Gloves · Rough Bronze Bracers · Inlaid Thorium Hammer · Rune-Etched Breastplate/Crown/Greaves/Grips/Legplates/Mantle · Hateforge Cuirass/Helmet/Leggings/Belt/Grips/Boots · Bloodstone Warblade · Imperial Plate Gauntlets. **1.17.0:** Fiery Chain Breastplate · Dreamsteel Mantle/Leggings/Bracers/Boots · Thorium Spurs. **1.17.1:** Blast Shield. **1.17.2:** Otherworldly Breastplate/Coif/Leggings/Spaulders · Reflective Breastplate/Helmet/Leggings/Pauldrons (the staff post labels these last eight "Pattern:", apparently a typo in a Blacksmithing block).
**Weaponsmith:** Bleakwood Hew · Blood Talon · Darkspear · Bloodletter Razor · Frostbound Slasher. **1.17.0:** Ornate Bloodstone Blade.
**Armorsmith:** Pauldron of Deflection. **1.17.0:** Pauldrons of the Timbermaw · Fury of the Timbermaw · Towerforge Breastplate/Pauldrons/Crown.
**Master Swordsmith:** Untempered Runeblade · Dream's Herald.
**Master Macesmith (1.17.0):** Dawnstone Hammer · Towerforge Demolisher.

**Where the Rune-Etched recipes drop (player):** "The Rune-Etched armor set and Untempered Rune-Blade drop their recipes in **Strat Live**. All need 300 BS, but the rune blade needs 300 in master swordsmith as well. All of the items are BoP but the recipes can be traded" — [Bayanni (player), 2022-07-13](https://forum.turtlecraft.gg/viewtopic.php?p=19978#p19978). **single source.**

### Engineering
Schematic: Goblin Radio · Portable Wormhole Generator: Stormwind · Portable Wormhole Generator: Orgrimmar · Battery-Powered Manual Crowd Pummeler · Hypertech Battery Pack. **1.17.0:** Intricate Gyroscope Goggles. **1.17.1:** Unstable Mining Dynamite.
**1.18.1:** **Enchanted Thorium Shells** — new crafted gun ammunition; the schematic **drops from Cannon Master Willey** — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168), source named in [Torta (staff), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174367#p174367). Players complained the notes did not say where it came from — [Handmm (player), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171533#p171533), [Toonokiara (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173663#p173663) — and one reported it still not dropping after the April 8 fix — [Roegnvald (player), 2026-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=175240#p175240). **contested/unresolved.**

### Enchanting
Formula: Enchant Bracer – Spell Power (+12 Spellpower) · Enchant Bracer – Greater Agility (+7 Agility). **1.17.0:** Enchant Gloves – Arcane Power (+20 Arcane Spellpower) · Enchant Gloves – Nature Power (+20 Nature Spellpower) · Enchant Cloak – Greater Arcane Resistance · Enchant Chest – Mighty Mana (+150 Mana) · Enchant Boots – Superior Stamina (+14 Stamina) · Enchant Boots – Greater Spirit (+12 Spirit) · Enchant Bracer – Greater Deflection (+5 Defense) · Enchant Gloves – Major Strength (+9 Strength) · Enchant Bracer – Vampirism (+1% Vampirism) · Enchant Boots – Vampirism (+2% Vampirism). **1.17.1:** Enchant 2H Weapon – Minor Intellect (+2 Intellect). **1.17.2:** Eternal Dreamstone Shard.
**1.18.1:** Lesser and Greater Mystic Wand now require **Bright Wood** instead of Star Wood — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168).

### Alchemy
**1.17.0:** Recipe: Potion of Quickness · Lucidity Potion · Elixir of Greater Nature Power · Dreamshard Elixir. **1.17.1:** Unstable Concoction.

### Cooking
**1.17.0:** Gilnean Hot Stew (+12 Spellpower) · Gurubashi Gumbo (+10 Stamina / +1% reduced chance to be crit) · Le Fishe Au Chocolat (+3 Defense / +1% Dodge). **1.17.1:** Maritime Gumbo (+2 Stamina / +2 Spirit).
**1.18.1 food retunes and additions** — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168): Hot Smoked Bass 10 → **30 Spirit**; Cooked Glossy Mightfish 10 Stamina → **15 Spell Penetration**; Mightfish Steak 10 Stamina → **20 Strength**; Dirge's Kickin' Chimaerok Chops 25 Stamina → **30 Stamina + 2% Dodge**; **Squid Eel Skewer** +20 Agility; **Deep Sea Stew** +20 health/5s and +150 Armor (both had their yield raised on 2026-04-01 — [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490)); **Empowering Herbal Salad** now uses **Lush Cabbage Head + Moonwhisper Berry** instead of Sungrass + Sweet Mountain Berry. A player called Deep Sea Stew "insanely overpriced" with terrible ingredients — [Nazzydragon (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173514#p173514).

### Survival and First Aid
**1.17.0:** Outline: Cleaning Cloth (Survival). First Aid: Formula: Powerful Smelling Salts.

### Blacksmithing / Mining reagent change (1.18.1)
**Enchanted Thorium** now requires **3 Illusion Dust** instead of Dream Dust — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168).

### Custom craftable sets players single out
- **Steel Plate** set, Blacksmithing, roughly level 40–45 — [Thecakeisalie (player), 2022-04-23](https://forum.turtlecraft.gg/viewtopic.php?p=18313#p18313), [Geojak (player), 2022-04-25](https://forum.turtlecraft.gg/viewtopic.php?p=18364#p18364).
- **Grifter's set**, Leatherworking, six pieces, late 30s; player-reported bonuses not shown by the database at the time: **3-piece +10 Strength, 6-piece 1% chance to parry** — [Witch101 (player), 2022-04-23](https://forum.turtlecraft.gg/viewtopic.php?p=18315#p18315). **single source.**
- "Almost all [the leveling set recipes] come from regular artisan trainers" — [Geojak (player), 2022-07-12](https://forum.turtlecraft.gg/viewtopic.php?p=19948#p19948).

---

## 6. Crafted-item upgrades (1.18.1, experimental)

Staff design statement — [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272):

> "Specific bosses will now have a chance to additionally drop a new upgrade item, such as a sharpening stone. This item will be usable on specific items to upgrade them to the overall power level of the raid its been acquired from, if not slightly higher and include new effects."
> "…you need to be proficient in the profession that's required to make that item, such as requiring Swordsmithing if its an upgraded crafted sword…"
> "This will initially be added to only to **Blackwing Lair** with it expanding to later tiers depending on how it is received."

**Player experience.** An Arcanite sharpening stone dropped in Blackwing Lair; the finder (an Armorsmith) found it could not be shift-clicked onto another player's Arcanite Reaper the way an Obsidian Belt Buckle can, and could not use the upgraded weapon himself because the result requires **Master Axesmith** while the stone's own tooltip only says Blacksmithing (300) — [Scootiesana (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173581#p173581), [Scootiesana (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173586#p173586). Two players replied that the 300-only requirement exists because the same stone works on **Arcanite Reaper (axe) or Arcanite Champion (sword)**, and the item text already says "Items improved in this way can only be used by those skilled in Blacksmithing and the improved item's crafting specialization" — [Reddguard (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173584#p173584), [Elesion (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173602#p173602). Elesion's verdict: "very niche and mostly just for flavor/memes… they picked some of the least used professions to give items to (Axesmithing, Dragonscale Leatherworking, etc)". **contested** — the tooltip wording is the disputed point, not the mechanic.

---

## 7. Gathering changes that affect every profession

All from the staff changelog stream; the per-date citations are in `synthesis/turtle-vs-vanilla-timeline.md` B7 and `zones.md` §4.

- **Black Lotus** additional drop chance from Dreamfoil / Mountain Silversage / Plaguebloom / Icecap raised in steps 0.5% → 1% → 2% → 4% → 6% (last step 2025-10-21).
- **Whip Lasher** herb drop chances raised from ~1.7% to **4%** for Golden Sansam, Arthas' Tears, Swiftthistle, Dreamfoil, Firebloom, Gromsblood and Sungrass, and Whip Lashers gained a **4% chance** at Mountain Silversage, Plaguebloom and Icecap — [Akalix (staff), 2024-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=90746#p90746). Stated reason: the three grey drops from Whip Lashers in Dire Maul were "causing massive inflation".
- **Rich Thorium** shares Thorium spawns; **Elemental Earth** added to Thorium veins in 1.18.0; gold veins removed from Western Plaguelands, Un'Goro and Burning Steppes; copper/tin/silver removed from Desolace.
- **Gemstone Deposits** (Mining 310) replace thorium veins and guarantee an **Imperial Topaz** — [official site, Jewelcrafting](https://turtlecraft.gg/jewelcrafting).
- Dynamic respawn for high-level herbs and ores (2024-03-19; custom zones from 2023-10-18); dynamic fishing pools (2024-03-19).
- **Hyjalroot** was reclassified as a Herb so Herbalists can track it — [Torta (staff), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145131#p145131).
- **Woodcutting** nodes added world-wide in 1.18.1 (see §1.5).

**Player argument about a mining trinket.** A player reasoned that a Survival trinket "gives you 1.5× the drop chance" for rare mining yields and that thousands of veins would be needed to measure it, and asked for an official statement — [Elesion (player), 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173826#p173826). **No staff answer in this extraction.**

---

## 8. Gaps and unclear points

1. **No skill-level table for Survival or Jewelcrafting recipes.** Staff gave counts ("80+ new recipes", "over 200 new items") and players gave anecdotes; no source in this extraction lists recipe → required skill → materials for either profession. `structured/content/recipes.yaml` therefore carries `skill_level: null` for most rows.
2. **No material lists.** Except the Traveler's Tent (rope + linen + Simple Wood), the Rough Truesilver Ring (2 Truesilver Bars, via the timeline), Enchanted Thorium (3 Illusion Dust) and Empowering Herbal Salad, no recipe's reagent list appears in the sources.
3. **The 1.18.1 Survival recipe list is missing entirely.** Player posts name individual items (Nutritious Rations, Emergency Parachute, gathering trinkets, fishing traps, a slingshot, a sickle at skill 300, a Survivalist Skinning Knife, one-handed white weapons, a cloth head piece that summons a cooking fire) but never as a list with skill levels.
4. **Gardening crop count is contested** — staff say three new 1.18.1 crops, a player names four new seeds.
5. **Forgotten Knowledge I vendor locations are player-found and six years old.** They have not been re-confirmed in any later post in this extraction.
6. **Jewelcrafting trainer names are not given** — only the six cities. No wiki NPC page in this extraction is tagged as a Jewelcrafting trainer with a name and location.
7. **Schematic: Enchanted Thorium Shells** is contested: staff named Cannon Master Willey as the source, a player reports it still not dropping a week later. Unresolved at the end of the extracted record.
8. **The Turtle item database** (`database.turtlecraft.gg`) is the source players lean on for recipe sources and item IDs; it was offline for a stretch in early 2026 — [Scootiesana (player), 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173839#p173839) — and is not part of this extraction. Anything sourced only to it is marked as such above.
9. **Alchemy, First Aid, Fishing and Lockpicking custom content** is thin here: the staff profession thread lists five Alchemy recipes and one First Aid formula, and the rest comes from the timeline's condensed changelog lines rather than from a dedicated thread.
