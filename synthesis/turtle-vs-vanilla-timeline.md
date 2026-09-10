# Turtle WoW vs. vanilla 1.12: patch timeline and cumulative changes (up to 1.18.0)

Scope: everything Turtle WoW ("Mysteries of Azeroth" Vanilla+ server) added or changed relative to stock WoW 1.12.1, as documented in the Patch Notes & Changelog forum (f63, 234 topics, staff-authored patch threads plus the weekly changelog threads 2022-08 → 2026-03), the Announcements forum (f2) for system threads that the patch notes link to, and the community wiki for release dates only. Patch 1.18.1 (t=22214, released 2026-03-20) is **excluded** by assignment and is covered separately; it is listed in the timeline only as a boundary marker.

Conventions used here (see `synthesis/CONVENTIONS.md`):
- Citation form `[author (authority), YYYY-MM-DD](post url)`. Everything cited from `structured/forum/posts/f63.jsonl` / `f2.jsonl` and `extracted/forum/**`. All dates UTC.
- Era marks: everything in this document is **pre-1.18.1** unless a line is explicitly marked **1.18.1-announced-pre-release** (posts 2025-10-03 .. 2026-03-19). Nothing here is post-1.18.1.
- `**bold**` names are names the source itself highlighted. Numbers, ranks, IDs are copied verbatim from the source; nothing is filled in from outside knowledge. Where general vanilla knowledge is used for contrast it is labelled `(vanilla baseline, not from turtlecraft.gg)`.
- "Superseded by" notes point to the later patch/post that changed the entry.
- Authority: staff = green "Turtle WoW Team" rank. Two early patch-note authors are indexed as **player** authority (Pompa 2018–2020; Moon's 2021 class changelog; Xerron's 2021 Chronoboon post) although their posts are written in the first person as the team ("Torta and I have been working"). They are cited with their indexed authority and flagged.
- Agreement marks: **consensus** = multiple independent staff sources agree; **single source** = one post; **contested** = sources disagree (both sides listed in §"Unclear or contradictory").
- Machine-readable companions: `structured/patches/timeline.yaml` (patch list) and `structured/patches/turtle-vs-vanilla.yaml` (one entry per change).

## Table of patches and dated updates

| Version / update | Name | Release date (UTC) | Date source | Forum topic |
|---|---|---|---|---|
| 1.12.1+ "Sands of Time" feature drops | Rogue's Disguise; Khadgar's Unlocking; Dishonorable Ranks; core update; Barbershop; City Protectors; Survival; Plainsrunning; Mirage Raceway; Bounty Boards; Glyphs; Forgotten Knowledge I; Holy Strike; Transmogrification; Gardening; Nerubian Overseer | 2018-12-14 → 2020-05-20 | each thread's post date, plus in-post release dates | t=295, 336, 342, 466, 481, 484, 519, 578, 811, 859, 870, 885, 894, 1036, 1052; f2 t=946 |
| 1.15.0 | Goblins & High Elves | announced 2020-10-04; released **2021-01-05** | wiki (community, unofficial) | t=1307 |
| 1.15.1 | client fix patch | maintenance announced for **2021-03-15** (wiki says 2021-03-11 = announcement date) | [Torta (staff), 2021-03-11](https://forum.turtlecraft.gg/viewtopic.php?p=9734#p9734) | t=1642 |
| 1.12.1+ QoL drops | Chronoboon Displacer / Refreshment Table / Soulwell; Forgotten Knowledge II; Goblin Brainwashing Device | 2021-05-10 .. 2021-07-04 | post dates | t=1761, 1775, 1867 |
| 1.16.0 | Mysteries of Azeroth (renamed from 1.15.2 on 2021-11-23) | announced 2021-11-22; released **2021-12-27** | wiki (community); release week confirmed by staff replies 2021-12-19/20 | t=2253, f2 t=2260 |
| 1.16.1 | Hateforge Quarry + Class Changes batch 1 | **2022-07-24** | post date; wiki agrees | t=3334 (draft: t=2197) |
| 1.16.2 / 1.16.3 | hotfix client patches | 2022-08-08 / 2022-08-10 | [Torta (staff), 2022-08-07](https://forum.turtlecraft.gg/viewtopic.php?p=21351#p21351), [Torta (staff), 2022-08-16](https://forum.turtlecraft.gg/viewtopic.php?p=22582#p22582) | t=3554, 3598, 3752 |
| 1.16.4 | Anchor's Fall (+ Pre-1.12 Alterac Valley, Winter Veil Vale) | announced 2022-09-30 for **2022-12-20** | [Torta (staff), 2022-09-30](https://forum.turtlecraft.gg/viewtopic.php?p=26516#p26516) | t=4442, 4658 |
| 1.16.5 | client builds 7060/7065 | **2023-01-03** | [Torta (staff), 2023-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=31969#p31969); wiki agrees | t=5264 |
| (no version) | world buffs removed from raids; debuff limit 64; totem/blessing stacking | **2023-02-20** | [Torta (staff), 2023-02-19](https://forum.turtlecraft.gg/viewtopic.php?p=35264#p35264) | t=5658 |
| (no version) | Vagrant's Endeavor; War Mode opt-out; Inferno Mode (2023-06-16) | 2023-04 .. 2023-06 | see timeline | t=6539, f2 t=7491 |
| 1.17.0 | Beyond the Greymane Wall (announced as 1.16.6, renumbered) | changelog 2023-01-21; released **2023-10-03** (EU) | [Akalix (staff), 2023-09-16](https://forum.turtlecraft.gg/viewtopic.php?p=64771#p64771) | t=5391, f2 t=9912 |
| 1.17.1 | Labor and Legacy | announced 2023-10-15; released **2023-12-20** | [Torta (staff), 2023-12-19](https://forum.turtlecraft.gg/viewtopic.php?p=81778#p81778) | t=10910, 12283 |
| (no version) | PvP & Economy Update parts 1–2 | 2023-12-10 .. 2024-03-19 | f2 t=12138, 12931, 13448 | |
| 1.17.2 | Tower of Karazhan + Class Changes batch 2 + Jewelcrafting | announced 2023-12-28; class changelog 2024-10-12; released **2024-11-01** (EU; SEA 48–72 h later); Tower of Karazhan raid opened **2025-04-03** (build 7207) | [Torta (staff), 2024-10-27](https://forum.turtlecraft.gg/viewtopic.php?p=104997#p104997); [Torta (staff), 2025-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=120590#p120590) | t=12462, 15157, 17678 |
| Launcher 2.1.0 | launcher update | 2025-05-17 | [Torta (staff), 2025-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=131492#p131492) | t=19352 |
| 1.18.0 | Scars of the Past | announced 2025-02-22; released **2025-08-15** (build 2778 / client 7228 hotfix) | [Torta (staff), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145131#p145131), [Torta (staff), 2025-08-15](https://forum.turtlecraft.gg/viewtopic.php?p=145822#p145822) | t=17688, 20964 |
| 1.18.1 | Nightmares of Ursol — **out of scope** | preliminary notes 2025-10-03; released **2026-03-20** | `structured/forum/timeline.json` | t=22214 |

Release dates marked "wiki" come from `extracted/wiki/articles/Patch_1.x.md` (turtle-wow.fandom.com, "community wiki, not an official source"); the forum never states those dates directly. Where the forum gives a date, the forum wins.

---

# Part A — Timeline

## 2018-12-14 — Sands of Time #01: Rogue's Disguise
Source: [Pompa (player-indexed; writes as team), 2018-12-14](https://forum.turtlecraft.gg/viewtopic.php?p=1562#p1562). **single source**
- Rogues get the unused vanilla skill **Disguise** from level 2 via a quest at starter-zone rogue trainers; individual disguises are learned from NPCs around Azeroth and need materials; "any hostile action will reveal your identity". The author states the skill itself is not custom, only the way to obtain it.

## 2019-01-05 — Sands of Time #02: Khadgar's Unlocking (Mage lockpicking)
Source: [Pompa (player-indexed), 2019-01-05](https://forum.turtlecraft.gg/viewtopic.php?p=1759#p1759). **single source**
- Mages learn **Khadgar's Unlocking** from **Moroves** (Undercity Magic Quarter, Horde) or **Truvicus** (Stormwind Mage Tower, Alliance); mastery needs **Ol' Biggins** (retired thief). Cap: mages "will not be able to open locks requiring more than 195 skill".
- Later: "Tomes for higher levels of Khadgar's Unlocking now have unlimited stock on the vendor" [Torta (staff), 2023-05-09](https://forum.turtlecraft.gg/viewtopic.php?p=45215#p45215).

## 2019-01-10 — Sands of Time #03: Dishonorable Ranks
Source: [Pompa (player-indexed), 2019-01-10](https://forum.turtlecraft.gg/viewtopic.php?p=1810#p1810); clarification [Torta (staff), 2019-01-17](https://forum.turtlecraft.gg/viewtopic.php?p=1883#p1883).
- Negative honor ranks **Dishonored**, **Exiled**, **Outlaw**, **Pariah** for dishonorable kills; "only visual", no faction-hostility effect on Turtle.
- Superseded: DHKs "have been removed, pending a larger scale rework" [Akalix (staff), 2023-12-10](https://forum.turtlecraft.gg/viewtopic.php?p=80586#p80586); then "Dishonorable kills will now be given for killing players that are grey to you, not for killing civilian NPCs" [Torta (staff), 2023-12-12](https://forum.turtlecraft.gg/viewtopic.php?p=80839#p80839) while Akalix says on 2024-01-16 "The DHKs are still disabled" [Akalix (staff), 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84944#p84944) — **contested**, see §Unclear.

## 2019-03-29 — New core ("2019 — March 29")
Source: [Pompa (player-indexed), 2019-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=2366#p2366). **single source**
- New server core (improved quest/world/NPC scripting, database, stability).
- **Diplomacy channel** (cross-faction chat).
- **Dynamic speed for mounts**: mount speed follows Riding skill (a level 1 or 40 mount runs 100% with 150 Riding, 60% with 75 Riding); level-1 mounts scale "your level divided by 2" percent (Riding Turtle / tallstriders at level 30 = 15%).
- Rebuilt donation shop (new mounts, pets incl. **portable auctioneer**, utility items incl. **portable mailbox**, dressing boxes).
- **Barber shops** (see next), **mailboxes** in starting areas, **Repair Bot** companion sells reagents, Darkmoon Faire and Children's Week back on normal schedule, **Darkreaver Menace** quest gives old helm reward again, new Hardcore rewards (f2 t=482).
- Announced for later: Caverns of Time hub, Plainsrunning.

## 2019-04-07 — Barbershop and Slow & Steady challenge
- Barber (hair dyes) in Stormwind and Crossroads [Torta (staff), 2019-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=2455#p2455); dye prices "noticeable lowered" the following week [Torta (staff), 2019-05-11](https://forum.turtlecraft.gg/viewtopic.php?p=2764#p2764); style changes were shop-only at the time [Torta (staff), 2019-07-28](https://forum.turtlecraft.gg/viewtopic.php?p=3598#p3598). Superseded: barbers "are back! You can now change your hairstyle for 3 Fashion Tokens" [Torta (staff), 2025-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=121678#p121678), then "Barbers remain broken" [Torta (staff), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130900#p130900); the 1.18.1 notes list "Added 3.3.5 Barber Shop" (**1.18.1-announced-pre-release**, out of scope).
- **Slow & Steady** leveling challenge (originally called Hardcore Mode, renamed Turtle Mode 2021-03-05): thread [Torta (staff), 2019-04-07, edited 2025-08-07](https://forum.turtlecraft.gg/viewtopic.php?p=2459#p2459). Rules as last edited: kill XP (world and dungeons) −50%, quest XP unchanged, lose 5% of current level's XP on death except in BGs/PvP; rewards every 10 levels (Speedy's packs; level 60 = mount **Admiral Grumbleshell**, 200 Donation Tokens, Fashion Coin x10). 2020-06 rework rationale: "Hardcore Mode was not Hardcore at all" [Torta (staff), 2020-06-27](https://forum.turtlecraft.gg/viewtopic.php?p=6600#p6600); de-leveling impossible [Torta (staff), 2020-06-24](https://forum.turtlecraft.gg/viewtopic.php?p=6550#p6550); rename [Torta (staff), 2021-03-05](https://forum.turtlecraft.gg/viewtopic.php?p=9664#p9664). 2025-08 changes: Purple Tallstrider grandfathered, Sword of a Thousand Truths moved to Boaring challenge, dungeon kill XP halved (same post, update dated 07/08/2025).

## 2019-04-09 — City Protectors
Source: [Torta (staff), 2019-04-09](https://forum.turtlecraft.gg/viewtopic.php?p=2475#p2475). **single source**
- Weekly: the player with most honorable kills per race gets a one-week title and **City Protector's Medallion** (teleport to racial capital, 60 min cooldown). Titles: Protector of Stormwind (Human), Overlord of Orgrimmar (Orc), Thane of Ironforge (Dwarf), High Sentinel of Darnassus (Night Elf), Deathlord of the Undercity (Undead), Chieftain of Thunderbluff (Tauren), Avenger of Gnomeregan (Gnome), Voodoo Boss of Sen'jin (Troll), Avenger of Quel'thalas (High Elf), Bruiser of Mudsprocket (Goblin).
- Later fixes: teleport got a cast time and cooldown; multiple medallions glitch fixed [Torta (staff), 2024-07-16](https://forum.turtlecraft.gg/viewtopic.php?p=99696#p99696).

## 2019-05-10 — Secondary skill: Survival
Source: [Torta (staff), 2019-05-06](https://forum.turtlecraft.gg/viewtopic.php?p=2694#p2694) (release "Friday, May 10th 2019"). **consensus** across later posts.
- Trainer **S. J. Erlgadin** (Nesingwary's Expedition, STV). Recipes: [Dim Torch] (+4 Spirit party), [Fishing Boat] (+50 fishing on the lake; announced 60 min, changed to 40 min [Torta (staff), 2019-05-10](https://forum.turtlecraft.gg/viewtopic.php?p=2730#p2730)), [Traveler's Tent] (20 min, rested XP faster inside), [Bright Campfire] (+8 Spirit). Max skill 150 at launch.
- Fixes: campfire gives +1 skill and no PvP flag; tent radius 10 → 15 yd; new tent model [Torta (staff), 2019-05-11](https://forum.turtlecraft.gg/viewtopic.php?p=2765#p2765).
- Later revisions: placeables became unique items with profession-page cooldown; new lantern recipes and **Murloc's Flippers** (1.16.1, [Torta (staff), 2022-07-24](https://forum.turtlecraft.gg/viewtopic.php?p=20251#p20251)); tents can't be built close together but single-tent rested bonus ×5 [Torta (staff), 2023-04-11](https://forum.turtlecraft.gg/viewtopic.php?p=41180#p41180); tent appearance changed to prevent griefing [Torta (staff), 2023-05-09](https://forum.turtlecraft.gg/viewtopic.php?p=45215#p45215); outdoor requirement removed from Fishing Boat/Traveler's Tent (1.17.2, [Torta (staff), 2023-12-28](https://forum.turtlecraft.gg/viewtopic.php?p=82980#p82980)); "Tents are no longer able to stack" [Torta (staff), 2025-01-28](https://forum.turtlecraft.gg/viewtopic.php?p=118168#p118168); Bright Campfire temporarily disabled [Torta (staff), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148454#p148454). A full Survival overhaul (secondary profession, 80+ recipes, Woodcutting) is announced for 1.18.1 (**1.18.1-announced-pre-release**, out of scope).

## 2019-05-27 — Tauren Plainsrunning
Source: [Pompa (player-indexed), 2019-05-27](https://forum.turtlecraft.gg/viewtopic.php?p=2984#p2984).
- Quest chain from **Harb Clawhoof** (Bloodhoof Village), min level 40; speed ramps 20>40>60% or 40>60>100% depending on Riding skill over ~5 s; damage taken bleeds speed off. Shop pet **[Kodo Calfling]** (25 Turtle Tokens, limited time).
- Later: disabled in battlegrounds [Torta (staff), 2019-11-24](https://forum.turtlecraft.gg/viewtopic.php?p=4490#p4490); Blacksmithing **Horseshoes** trinket "+3% Plainsrunning movement speed" announced [Akalix (staff), 2023-12-10](https://forum.turtlecraft.gg/viewtopic.php?p=80586#p80586); not lost in cross-faction BGs, unlearned on race change away from Tauren [Torta (staff), 2025-11-11](https://forum.turtlecraft.gg/viewtopic.php?p=159221#p159221) (**1.18.1-announced-pre-release**).

## 2019-07-21 — Dynamic raid scaling live
Source: [Torta (staff), 2019-07-21](https://forum.turtlecraft.gg/viewtopic.php?p=3487#p3487) ("Scaling is now live"). Rules not restated in the thread's staff posts. Later: an unannounced change of the scaling floor "from 20 to 30" was reverted; "general scaling rules will remain the same as before"; Emerald Sanctum stays 40-man only [Torta (staff), 2023-10-11](https://forum.turtlecraft.gg/viewtopic.php?p=70087#p70087). Greater Demons excluded from raid-size scaling [Torta (staff), 2025-03-18](https://forum.turtlecraft.gg/viewtopic.php?p=122937#p122937).

## 2019-11-01 — Mirage Raceway (player-driven races)
Source: [Torta (staff), 2019-10-24](https://forum.turtlecraft.gg/viewtopic.php?p=4289#p4289).
- Player-controlled gnome/goblin car races in Shimmering Flats using unused client spells and items (Gnome/Goblin Prize Boxes, Car Keys) [Torta (staff), 2019-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=4296#p4296). Repeatable quests, driving licence time-trial, queued competitive races, abilities (Stun, Blink, Speed Boosters, Cloaking, Seat Belts), sheep obstacles; contact **Fara Boltbreaker** (Stormwind/Orgrimmar). Quest chain by Sinrek.
- Fixes: can't start [Race Against Time] mounted; [Daisy's Gift Box] only useful consumables [Torta (staff), 2019-11-05](https://forum.turtlecraft.gg/viewtopic.php?p=4389#p4389). Later: XP/money removed from Race Against Time [Torta (staff), 2023-06-06](https://forum.turtlecraft.gg/viewtopic.php?p=49087#p49087); Car Key trinkets BoP [Torta (staff), 2023-05-09](https://forum.turtlecraft.gg/viewtopic.php?p=45215#p45215); solo Test race allowed [Torta (staff), 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84934#p84934); quests require level 28, race count limited, no auto-complete [Reynolds (staff), 2024-09-03](https://forum.turtlecraft.gg/viewtopic.php?p=100559#p100559); 10-attempt limit applies only to the cancelling side; racing allowed with the Race Against Time quest alone [Torta (staff), 2025-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=120590#p120590).

## 2019-11-22 → 2019-12-04 — PvP tuning and Bounty Boards
Source: [Torta (staff), 2019-11-24](https://forum.turtlecraft.gg/viewtopic.php?p=4490#p4490).
- 22.11.2019: win-trading forbidden; item/XP vendor Dyah Owon removed; Battle Ring honor back to normal; Bloody Coins only for temporary buffs; Warsong Gulch needs only 3 per side.
- 23.11.2019: open-world honor temporarily −75% ("decreased to 25%", incl. arena); cooldowns reset on BG join/resurrect; Plainsrunning disabled in BGs; faster power regen 30 s at BG pre-start and 10 s after resurrect.
- 04.12.2019: **Bounty Boards** in Stormwind and Orgrimmar [Torta (staff), 2019-12-07](https://forum.turtlecraft.gg/viewtopic.php?p=4580#p4580): weekly (Wednesday) target = previous week's top-HK player of the opposite faction; solo kill only; non-repeatable; reward 1 gold + 250 rep with Stormwind/Orgrimmar (270 for Humans). Reinstated 2020-06-23 [Torta (staff), 2020-06-23](https://forum.turtlecraft.gg/viewtopic.php?p=6539#p6539). Later replaced by daily "WANTED" quests (most HKs and DKs of previous day) [Torta (staff), 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84934#p84934), themselves "deprecated" and removed [Torta (staff), 2025-01-28](https://forum.turtlecraft.gg/viewtopic.php?p=118168#p118168).

## 2019-12-22 — Druid Glyphs (cosmetic form glyphs)
Source: [Torta (staff), 2019-12-22](https://forum.turtlecraft.gg/viewtopic.php?p=4662#p4662) (seven druid form appearance glyphs shown as images, price not posted); **Glyph of Stars** (Moonkin appears as Astral Form) [Torta (staff), 2020-04-11](https://forum.turtlecraft.gg/viewtopic.php?p=5678#p5678). Later named glyphs in changelogs: Glyph of the Ice Bear (appearance update, 1.17.0), Glyph of the Forest Stag, **Glyph of the Penguin** (Aquatic Form as Penguin) [Torta (staff), 2024-12-22](https://forum.turtlecraft.gg/viewtopic.php?p=113782#p113782), Glyph of the Moon (Astral Form fix) [Torta (staff), 2025-11-25](https://forum.turtlecraft.gg/viewtopic.php?p=160700#p160700). Note: "Glyph" is also the name Turtle uses for its challenge-mode items (Glyph of Twinking, Glyph of Diplomacy, Glyph of Exhaustion, Glyph of the Vagrant, War Mode glyph); see §Systems.

## 2020-01-08 — Forgotten Knowledge I (unreleased vanilla recipes)
Source: [Pompa (player-indexed), 2020-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=4777#p4777). Plans: Rune Edge, Ironforge Gauntlets, Bleakwood Hew, Ironforge Chain, Thorium Greatsword, Blood Talon, Darkspear, Mithril Scale Gloves, Rough Bronze Bracers; Pattern: Nightscape Cloak, **Onyxia Scale Breastplate** (via **Aurelius, the Mysterious Traveler**). All vendor-sold, some faction-specific, patterns BoE.

## 2020-01-17 — Paladin Holy Strike (beta ability restored)
Source: [Torta (staff), 2020-01-17](https://forum.turtlecraft.gg/viewtopic.php?p=4894#p4894). Rank 1 from class quest **Piercing Light** (Lord Grayson Shadowbreaker / Brandur Ironhammer); further ranks as Librams from vendors **William Halford** and **Braelnor**; optional client patch renames "zzOLDHoly Stirke". Superseded: rank 2+ from trainer (1.16.1); cooldown 8 → 10 s (1.16.1); complete redesign in 1.17.2 (see §Classes → Paladin).

## 2020-03-18 — Transmogrification (first version)
Source: [Torta (staff), 2020-03-12](https://forum.turtlecraft.gg/viewtopic.php?p=5355#p5355), live [Torta (staff), 2020-03-18](https://forum.turtlecraft.gg/viewtopic.php?p=5407#p5407). Fashionistas **Felicia** (Stormwind) / **Herrina** (Orgrimmar); **Fashion Coin** currency from a weekly quest (objective changes per 10-level bracket) or Speedy's shop; one coin per item; same armor type only; template item consumed; not possible to launder soulbound looks [Torta (staff), 2020-04-13](https://forum.turtlecraft.gg/viewtopic.php?p=5685#p5685). System went "dead" in 2021 [Gheor (staff), 2021-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=8943#p8943) and returned rewritten in 1.16.0 (collection-based, UI).

## 2020-05-07 — Gardening
Source: [Torta (staff), 2020-05-07](https://forum.turtlecraft.gg/viewtopic.php?p=5840#p5840). Quest **You Reap What You Sow** at level 20 (Elwynn/Mulgore), NPCs **Kern Mosshoof** (Mulgore) / **Mortimer Stansfield** (Elwynn); needs Survival 100; Shovel + **Wooden Planter**; inputs **Refreshing Spring Water**, **Un'Goro soil**, **Seeds**; water/fertilize every 9 min. Fixes [Torta (staff), 2020-05-09](https://forum.turtlecraft.gg/viewtopic.php?p=5896#p5896): shovel shows on back; planters bound to gardening zones, 1 charge, max 5 in bags, sold by Gardener's Apprentices post-quest; min 3 yd between planters. Later: planters placeable "anywhere in the wilds" and crops un-lootable by others [Torta (staff), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145131#p145131); crops can't be watered by non-planters [Torta (staff), 2025-12-02](https://forum.turtlecraft.gg/viewtopic.php?p=161356#p161356) (**1.18.1-announced-pre-release**).

## 2020-05-20 — World boss Nerubian Overseer
Source: [Pompa (player-indexed), 2020-05-14](https://forum.turtlecraft.gg/viewtopic.php?p=6010#p6010): Terrordale / Terrorweb tunnel (Eastern Plaguelands), ~40 players, loot for every class [Torta (staff), 2020-05-14](https://forum.turtlecraft.gg/viewtopic.php?p=6014#p6014). Later: quest "The Terrors of the Webweavers" no longer requires killing it [Torta (staff), 2025-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=120590#p120590).

## 2020-10-04 → 2021-01-05 — Patch 1.15.0: Goblins & High Elves
Source: [Torta (staff), 2020-10-04](https://forum.turtlecraft.gg/viewtopic.php?p=7948#p7948); release date 2021-01-05 from the community wiki (`Patch_1.15.0.md`, unofficial). **single source** for racials.
- Two new races: **High Elves** (Alliance, "Silvermoon Remnants") and **Goblins** (Horde, "Durotar Labor Union"), first of a "three-part expansion storyline".
- High Elf racials as announced: Arcane Resistance +10; Bow Specialization +5; **Arcane Meditation** "Recovers 40% of mana (25% HP for non-casters) while casting (8 seconds)"; Enchanting Specialization +10.
- Goblin racials as announced: **Chemical Superfreak** +10 Alchemy; **Prospecting** +10 Mining; **Exit Strategy** +30% movement speed for 5 s; **Aggressive Negotiations** +5 Dagger & Mace skill.
- Superseded: racials reworked in 1.17.2 (§Races). The wiki page additionally lists Gnome Hunter, Orc Mage, Stormwind Vault, 2v2 arena and gambling for 1.15.0 — not confirmed by any forum post; Stormwind Vault is listed by the forum as new in 1.16.0 (**contested**, §Unclear).

## 2021-03-15 — Client patch 1.15.1
Source: [Torta (staff), 2021-03-11](https://forum.turtlecraft.gg/viewtopic.php?p=9734#p9734). Client-only: icon/texture/map/flight-path/graveyard fixes; distant portraits and outfit backgrounds for new races; new intro-cinematic camera; DiscordOverlay.dll CPU fix; new music for Steamwheedle Port and Mudsprocket; character creation: Forest Troll skins, Wildhammer Dwarf skins, new Orc faces, Night Elf beards/eyebrows, Dwarf beards, Goblin faces & beards; passive spells for Hardcore mode; Scarlet Crusade faction fix; at-war-with-own-faction fix. Goblin animations postponed.

## 2021-05-10 — Chronoboon Displacer, Refreshment Table, Soulwell
Source: [Xerron (player-indexed), 2021-05-10](https://forum.turtlecraft.gg/viewtopic.php?p=10502#p10502) (written as "This week's update").
- **Chronoboon Displacer** (item 83000): 5g from Chromie (npc 10667, Ruins of Andorhal); stores world buffs into **Supercharged Chronoboon Displacer** (item 83001); not usable in combat/BG/arena/raid encounters. Stored buffs: Rallying Cry of the Dragonslayer (spell 22888), Spirit of Zandalar (24425), Mol'dar's Moxie (22818), Fengus' Ferocity (22817), Slip'kik's Savvy (22820), Songflower Serenade (15366), Sayge's Dark Fortunes (23768, 23736, 23767, 23766, 23769, 23738, 23737, 23735), Warchief's Blessing (16609). Later: tooltip shows stored buffs without addon (1.17.2); level requirement removed [Torta (staff), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145131#p145131).
- Mage **Refreshment Table** (item 83002; 3 players; 2x Arcane Powder 17020; yields Conjured Mana Orange 83004) from Archmage Malin (npc 2708) / Bethor Iceshard (1498).
- Warlock **Soulwell Ritual** (item 83003; 3 players; 5x Soul Shard 6265) from Gakin the Darkbinder (6122) / Carendin Halgar (5675).

## 2021-05-19 — Forgotten Knowledge II
Source: [Dragunovi (staff), 2021-05-19](https://forum.turtlecraft.gg/viewtopic.php?p=10602#p10602): recipes added with the 1.15.0 release: Pattern: Stormcloth Vest/Shoulders/Gloves/Headband/Pants (drops, level 35–45 nature/lightning casters), Green Woolen Robe (hidden Westfall peddler), Boots of Darkness (travelling merchant + robot), Plans: Inlaid Thorium Hammer (blacksmith in "a sandy goblin town"), Schematic: Goblin Radio (goblin swamp town, Horde only); "Soon" Enchant Gloves – Holy/Nature/Arcane Power and Schematic: Recharge Manual Crowd Pummeler.

## 2021-07-04 — Goblin Brainwashing Device (dual talent specs)
Source: [Torta (staff), 2021-07-04](https://forum.turtlecraft.gg/viewtopic.php?p=11156#p11156): save Primary/Secondary talent configurations and swap; activation costs the same as a talent reset; action bars not restored. Superseded by: the Nov 2023 rework — no saving specs with unspent points, 2 slots default, 3rd slot 100 g, 4th 200 g, purchasable via quest from level 30 [Jamey (staff), 2023-11-03](https://forum.turtlecraft.gg/viewtopic.php?p=75613#p75613), [Torta (staff), 2023-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=74752#p74752), [Jamey (staff), 2023-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=78235#p78235); talent-based auras removed on use [Torta (staff), 2023-03-01](https://forum.turtlecraft.gg/viewtopic.php?p=36539#p36539); lasts 5 min [Torta (staff), 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84934#p84934); no use in combat [Torta (staff), 2024-05-28](https://forum.turtlecraft.gg/viewtopic.php?p=95911#p95911); not usable near another device [Torta (staff), 2024-07-09](https://forum.turtlecraft.gg/viewtopic.php?p=99050#p99050); personal 10-minute cooldown after use, persisting offline (1.17.2, [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102965#p102965)); collision removed and price shown (2025).
