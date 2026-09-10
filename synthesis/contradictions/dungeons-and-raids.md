# Contradictions — Dungeons and raids

Part of [`../contradictions.md`](../contradictions.md); machine-readable copy in [`../../structured/contradictions.yaml`](../../structured/contradictions.yaml). Conventions: [`../CONVENTIONS.md`](../CONVENTIONS.md). Dates UTC.

17 entries. Each gives both sides with author, authority and date, what evidence would settle it, and the current best assessment.

## CON-0023 — Emerald Sanctum raid size and scaling

- **Side A.** "The new raid, Emerald Sanctum will remain requiring 40-man as it's featuring mechanics made with 40 players in mind"; a day earlier staff wrote "ES scaling was never intended". — [Jamey (staff), 2023-10-10](https://forum.turtlecraft.gg/viewtopic.php?p=69844#p69844), [Torta (staff), 2023-10-11](https://forum.turtlecraft.gg/viewtopic.php?p=70087#p70087)
- **Side B.** The wiki says Emerald Sanctum scales "down to 30 players"; post-1.18.1 staff say raid scaling is active on all raids with a 16-player minimum for 40-player raids. — [Custom Turtle WoW content (community wiki)](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content), [Torta (staff), 2026-04-21](https://forum.turtlecraft.gg/viewtopic.php?p=176101#p176101)
- **What would settle it.** Raid-scaling configuration for the Emerald Sanctum map on the 1.18.1 server (minimum player threshold and per-player scaling factors).
- **Assessment (`superseded`).** The 2026-04-21 statement is the last word and supersedes 2023. The wiki's 30-player threshold has no staff backing at any date.

## CON-0024 — Timbermaw Hold raid: entry requires Timbermaw reputation?

- **Side A.** The raid "will have a requirement to be at least neutral with the Timbermaw faction in order to just enter". — [Carlculathor (player), 2026-03-26](https://forum.turtlecraft.gg/viewtopic.php?p=172477#p172477)
- **Side B.** "Where is it written you need at least neutral with Timbermaw to enter? You can still sneak or get summoned right in front of it afaik". — [Travoltino (player), 2026-03-26](https://forum.turtlecraft.gg/viewtopic.php?p=172541#p172541)
- **What would settle it.** Instance entry condition (area trigger / access requirement) for the Timbermaw Hold map, plus any reputation gate in the 1.18.1 data.
- **Assessment (`unresolved`).** Unresolved — no staff answer in the extraction. Context: on 2026-03-31 staff added Blackroot Furbolg kill reputation for Timbermaw.

## CON-0025 — Timbermaw Hold lockout day (Friday timer vs Wednesday reset)

- **Side A.** A player reports the in-game timer showing Friday and asks which day the raid resets. — [Dingacik (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173516#p173516)
- **Side B.** No staff answer exists in the extraction; the general weekly reset is Wednesday per the honor-flush restart statement. — [Jamey (staff), 2023-10-11](https://forum.turtlecraft.gg/viewtopic.php?p=70104#p70104)
- **What would settle it.** Instance reset period for the Timbermaw Hold map id in the local database.
- **Assessment (`unresolved`).** Unresolved.

## CON-0026 — Lower Karazhan Halls boss count (5 vs 6)

- **Side A.** "You will encounter six formidable bosses". — [Torta (staff), 2023-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=32868#p32868)
- **Side B.** The wiki lists 5; the community guide describes 4 required + Moroes + 1 optional (Master Blacksmith Rolfen). — [Custom Turtle WoW content (community wiki)](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content), [Speedz1337 (guide writer), 2025-11-19](https://forum.turtlecraft.gg/viewtopic.php?p=160087#p160087)
- **What would settle it.** Count boss-flagged creatures on the LKH map in the local creature table.
- **Assessment (`reconciled`).** The guide's breakdown reconciles all three: six killable named bosses, five on the required path.

## CON-0027 — Gilneas City boss count (7 vs 8)

- **Side A.** "Two mini-bosses and five normal bosses" — seven. — [Torta (staff), 2023-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=32868#p32868)
- **Side B.** The wiki has eight boss pages for the dungeon. — [Custom Turtle WoW content (community wiki)](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content)
- **What would settle it.** Whether the two Regent-Lords are one encounter (two creatures, one boss entry) in the local data.
- **Assessment (`unresolved`).** Probably reconciled by the Regent-Lords being a single two-target encounter, but no source says so.

## CON-0028 — Frostmane Hollow boss count (4 vs 5)

- **Side A.** The wiki's custom-content table lists 4 bosses. — [Custom Turtle WoW content (community wiki)](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content)
- **Side B.** Five boss pages exist on the wiki; Handler Oboka and Tan'sha the Sleek appear to be one paired encounter (Oboka's axe drops from Tan'sha). — [Frostmane Hollow (community wiki)](https://turtle-wow.fandom.com/wiki/Frostmane_Hollow)
- **What would settle it.** Boss flags and loot tables for the five Frostmane Hollow creatures.
- **Assessment (`unresolved`).** Unresolved; the pairing is an inference, not stated anywhere.

## CON-0029 — Molten Core extension boss count (3 vs 4)

- **Side A.** The 1.18.0 notes say the extension adds "3 new bosses and 15+ new items". — [Torta (staff), 2025-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=120615#p120615)
- **Side B.** The wiki lists four names for Molten Core — Incindis, Smoldaris, Basalthar and Sorcerer-Thane Thaurissan — with a separate boss page for Thaurissan. — [Custom Turtle WoW content (community wiki)](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content)
- **What would settle it.** Boss-flagged creatures in the Molten Core extension areas; check whether Smoldaris and Basalthar are one encounter.
- **Assessment (`unresolved`).** Unresolved; a paired encounter would reconcile the counts.

## CON-0030 — Stormwrought Ruins boss count (12 vs 13)

- **Side A.** The wiki's custom-content table counts 12 bosses. — [Custom Turtle WoW content (community wiki)](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content)
- **Side B.** Thirteen NPC pages exist, including Ighal'for; Ighal'for and Mergothid are one encounter. — [Stormwrought Ruins (community wiki)](https://turtle-wow.fandom.com/wiki/Stormwrought_Ruins)
- **What would settle it.** Creature/boss entries for the map, and whether Ighal'for is a phase of Mergothid.
- **Assessment (`reconciled`).** Ambiguous rather than contradictory; the paired encounter explains the difference.

## CON-0031 — Scarlet Monastery: boss names on the website vs the patch notes

- **Side A.** The official Classic Dungeons Update page names "The Knight of Naxxramas", "Brother Steelfist", "The Nameless Experiment" and "Master Smith Johana". — [turtlecraft.gg, Classic Dungeons Update (official website)](https://turtlecraft.gg/classic-dungeons-update)
- **Side B.** Staff forum notes and the wiki give the live names: Duke Dreadmoore <Knight of Naxxramas>, Brother Wystan and Armory Quartermaster Daghelm; the other two names appear nowhere. — [Torta (staff), 2023-12-28](https://forum.turtlecraft.gg/viewtopic.php?p=82980#p82980), [Akalix (staff), 2024-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=91709#p91709)
- **What would settle it.** Creature names in the Scarlet Monastery wings on the local server.
- **Assessment (`website-stale`).** The website page is an earlier draft that was never updated. The clearest case of the official website being stale relative to the patch notes.

## CON-0032 — Hateforge Quarry location (north-east vs south-east Burning Steppes)

- **Side A.** The official site places the entrance at "the northeastern walls of the Burning Steppes". — [turtlecraft.gg, Raids and Dungeons (official website)](https://turtlecraft.gg/raids-and-dungeons)
- **Side B.** The staff patch note and the wiki both say south-eastern Burning Steppes, at the Hateforge Excavation. — [Torta (staff), 2022-07-24](https://forum.turtlecraft.gg/viewtopic.php?p=20251#p20251), [Hateforge Quarry (community wiki)](https://turtle-wow.fandom.com/wiki/Hateforge_Quarry)
- **What would settle it.** Instance entrance coordinates for the Hateforge Quarry map in the local world data.
- **Assessment (`website-stale`).** Two official sources against one: treat the website as the outlier.

## CON-0033 — Custom dungeon level ranges: official/wiki vs the in-game LFT addon

- **Side A.** Official site and wiki level bands, e.g. Hateforge Quarry 52-60 (wiki minimum 48), Windhorn Canyon 26-30. — [turtlecraft.gg, Raids and Dungeons (official website)](https://turtlecraft.gg/raids-and-dungeons), [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168)
- **Side B.** The community guide's LFT ranges differ for most custom dungeons, e.g. Hateforge 50-60 and Windhorn 25-33; Razorfen Kraul, Razorfen Downs and Zul'Farrak also disagree between wiki table and LFT data. — [Speedz1337 (guide writer), 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29739#p29739)
- **What would settle it.** The LFT addon's range table vs the instance level requirements in the server data — the two are different fields and can legitimately differ.
- **Assessment (`unresolved`).** Unresolved as documentation, but likely not a real conflict: the LFT ranges are a suggestion table, the site/wiki state the design band.

## CON-0034 — Karazhan Crypt graveyard bug: Duskwood or Redridge?

- **Side A.** On death the graveyard sends players to Raven Hill Cemetery in Duskwood instead of Deadwind Pass. — [Raukodor (player), 2021-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=12310#p12310)
- **Side B.** "Karazhan Crypt should no longer bug out and send the player to Redridge Mountains on death". — [Torta (staff), 2023-12-19](https://forum.turtlecraft.gg/viewtopic.php?p=81778#p81778)
- **What would settle it.** Graveyard/WorldSafeLocs binding for the Karazhan Crypt map in the local data.
- **Assessment (`unresolved`).** Two incompatible descriptions two years apart; they may be different bugs. Unresolved.

## CON-0035 — Firemaw void zones after the 2026-03-21 fix

- **Side A.** "Void Zones should no longer chase players" (hotfix; no boss named). — [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608)
- **Side B.** After the fix: Firemaw spawns void zones behind line of sight, inside walls, in the air and 80+ yards away; a week later "not LoS - simply invisible". — [Travoltino (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173564#p173564), [Travoltino (player), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174380#p174380)
- **What would settle it.** Firemaw's void-zone spawn script: spawn position selection and visibility/aura on the summoned object.
- **Assessment (`unresolved`).** Open bug at the end of the extraction window; the hotfix addressed chasing, not spawn placement.

## CON-0036 — Golemagg's Core Hounds: fixate intended or broken?

- **Side A.** The Core Hounds ignore threat and cannot be held. — [Blackfox (player), 2025-08-25](https://forum.turtlecraft.gg/viewtopic.php?p=148264#p148264)
- **Side B.** Other players read it as an intended fixate/enrage at 60/50% health and disagree about whether the adds can be taunted off. — [Alovander (player), 2025-08-25](https://forum.turtlecraft.gg/viewtopic.php?p=148274#p148274), [Drubarrymooer (player), 2025-08-25](https://forum.turtlecraft.gg/viewtopic.php?p=148301#p148301)
- **What would settle it.** Golemagg's script: threat table handling and any fixate aura on the Core Hounds in 1.18.1.
- **Assessment (`unresolved`).** Contested between players, no staff statement (issue ISS-0024).

## CON-0037 — Does Lower Karazhan Halls (10-player) scale?

- **Side A.** The wiki says the raid does not scale. — [Lower Karazhan Halls (community wiki)](https://turtle-wow.fandom.com/wiki/Lower_Karazhan_Halls)
- **Side B.** "Raid Scaling is active on all raids. 20-player raids: minimum scaling threshold 8 players; 40-player raids: 16 players" — no 10-player bracket is named. — [Torta (staff), 2026-04-21](https://forum.turtlecraft.gg/viewtopic.php?p=176101#p176101)
- **What would settle it.** Scaling configuration per map id: is the LKH map in the scaling table at all?
- **Assessment (`unresolved`).** Unresolved — the staff statement neither includes nor excludes a 10-player raid.

## CON-0038 — Clawlord Howlfang's stack mechanic and taunt behaviour

- **Side A.** The debuff reduces armor and damage done and is removable only by breaking line of sight; swap tanks at roughly 15 stacks. — [Speedz1337 (guide writer), 2025-11-19](https://forum.turtlecraft.gg/viewtopic.php?p=160087#p160087)
- **Side B.** Raid leaders report Howlfang resisting "like 80% of both tanks' taunts"; another player says the real cause is the boss losing his target while casting, so taunts land only after he re-acquires one. — [Turney (player), 2025-12-17](https://forum.turtlecraft.gg/viewtopic.php?p=162969#p162969), [Deeno (player), 2025-12-17](https://forum.turtlecraft.gg/viewtopic.php?p=162983#p162983)
- **What would settle it.** Howlfang's script: taunt immunity/resist handling and target re-acquisition during casts.
- **Assessment (`unresolved`).** Unresolved; no staff explanation of either the stack removal rule or the taunt resists.

## CON-0039 — Dragonmaw Retreat: which zone is it in?

- **Side A.** The wiki and the 1.18.0 blurb place the dungeon in the Wetlands. — [Dragonmaw Retreat (community wiki)](https://turtle-wow.fandom.com/wiki/Dragonmaw_Retreat), [Torta (staff), 2025-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=120615#p120615)
- **Side B.** The internal timeline (B4) places it in the Grim Reaches; the lore ties the Dragonmaw to both. — synthesis/turtle-vs-vanilla-timeline.md (community wiki) — `synthesis/turtle-vs-vanilla-timeline.md`
- **What would settle it.** Zone id of the instance entrance in the local world data.
- **Assessment (`unresolved`).** Low-stakes documentation conflict; the entrance coordinate settles it immediately on a local server.

