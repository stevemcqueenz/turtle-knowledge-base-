---
title: "Turtle WoW 2.0 & Unreal Azeroth — Technical Report"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18911"
topic_id: 18911
forum_id: 75
forum: "Remastered Client: Unreal Engine 5"
author: "Torta"
author_authority: "staff"
posted: "2025-04-26T23:20:00Z"
last_post: "2025-10-23T23:34:00Z"
post_count: 79
pages: 3
fetched: "2026-09-10T07:50:26Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Turtle WoW 2.0 & Unreal Azeroth — Technical Report

## Post 128644 by Torta (Turtle WoW Team) [STAFF] — 2025-04-26T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128644#p128644 | page 1 | era: pre-1.18.1 -->

Hello everyone! It's been four months since our previous development update, and we're excited to share some more exciting news from the **Unreal Azeroth Team** about the progress on the Unreal Engine 5 client development.

This report will be continuously updated as more progress is made.

 **We're aware of the very glaring font positioning issues in the game, and debated for a while whether to showcase any progress before this issue is fixed — but in the end, we decided to show it anyway: while it affects nearly every UI element in the game, we're proud to share that most core systems are already up and running!**

This dev update mostly shows screenshots from Legacy Mode, which is meant to look just like the original game. More updates on Modern Mode are coming in the next few weeks!

The client will support two graphic modes: **Legacy** (1:1 original client style) and**Modern** (optional), which offers updated lighting and visuals. The main purpose of using the UE5 client is to gain full control, enabling us to modify many previously hardcoded elements. Learn more: <https://turtlecraft.gg/remastered>

[![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml_12.jpeg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml_12.jpeg)

 **Core client infrastructure, what’s done or nearly done:**

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Data Transition — Models, maps, textures, and other game assets have been successfully imported into Unreal Engine.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) GlueXML — Early-game UI elements like the login screen and character selection screen.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) FrameXML — The in-game UI layout system.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Networking — The networking systems that connect everything are fully set up.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Object Manager — This manages every entity in the game world, keeping everything running, fully implemented.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Cache System — Stores and retrieves important data to make the game run more efficiently.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Player Character & Controller — Character movement and actions are fully functional.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Input System — Basic input is working but key-binding is still missing.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Sound System — Music, ambience, and sound events are fully implemented.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Animation System — Mostly working, but needs optimization, proper blending, animation layering, and transition logic similar to the original client.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Particle Effects — Some M2 model effects still need implementation.
 **Core Gameplay Systems & Corresponding UI (FrameXML)**

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Unit System — Fully implemented.
> *All unit-related functions are now working. This includes health, power, level, class, race, faction, combat state, attack stats, creature types, party and raid checks, PvP status, unit visibility (dead, ghost, civilian, etc.), reaction and relation checks (enemy, friend), and various utility queries like name, sex, XP, and relic slot presence.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Character Object — Fully implemented with all related systems:
> *All core character systems are now working, including accepting or declining resurrection, skill training and refunds, XP loss on death, resting and well-rested state, corpse retrieval, spirit healer and binder checks, money handling, visibility toggles for helm and cloak, stat calculations like block, dodge, and parry, soulstone status, and full control checks.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Combat — Basic spell system works, but AoE targeting and item-dependent spells need more work.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Spells — Core system is in place, with minor exceptions.
> *The core spellcasting system is now functional, including casting, targeting, cooldowns, shapeshift forms, and spellbook handling. AoE effects, special animations, and AoE visual effects are in progress.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Skills — Fully Implemented.
> *All skill-related features are working, including managing skill lines, selecting skills, and adjusting skill points.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Objects — Fully implemented.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Factions System & Reputations — Fully implemented.
> *All faction and reputation features are working, including viewing and managing factions, tracking reputation status, toggling war status, and selecting watched factions.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Transport — Fully implemented.
> *All taxi/flight path functions are working, including listing routes and nodes, taking flights, calculating costs, and managing taxi map display.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Pet System — In progress, spell quirks and behaviors are being resolved.
> *Core pet functions are implemented, including pet actions, stables, experience, modes, and autocast. Some spell behaviors and quirks are still being worked out.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Duel System — Fully implemented.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) PvP Flagging — Fully implemented.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Soul Stones — Fully implemented.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Random Roll — Fully implemented.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Group System — Mostly implemented, pending group promotion and ready-check implementation.
> *Core group features like inviting, leaving, loot settings, and ready checks are working. Group promotion and ready-check confirmations are still pending.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Raid System — In progress (missing target marks and promotions).
> *Core raid functions like roster management, subgroup settings, and promotions are implemented. Target marks and some promotion features are still missing.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Dungeon & Instance System — Fully implemented.
> *All core instance features are working, including checking saved instances, instance reset timers, and resetting instances.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Targeting — Fully implemented.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Honor System — Fully implemented.
> *All core honor features are working, including rank info and PvP statistics tracking.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Loot System — Single-player loot works, group loot pending.
> *Single-player loot is fully working. Group loot features like master loot and roll confirmation are still pending.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Weather, Sky & Clouds — Ready for Modern Mode, Legacy weather effects pending.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Location System — In progress.
> *Basic zone and subzone info is working, including minimap text and PvP zone status. Further improvements are underway.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Cinematic System — In progress.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Meeting Stones — Fully implemented.
> *CAll core meeting stone features are working, including queue status and request cancellation.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Battlegrounds — In progress.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) GlueXML — Login and character selection nearly complete.

- ![🔴](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f534.svg) In-game Fonts — Mostly working, some edge cases remain. We're fully aware that fonts may appear slightly misplaced in development screenshots — this will be addressed, but likely during the final stages of development.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Dynamic Creation of In-Game Fonts — In progress.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) UI Reloading — In progress.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Spellbook & Casting — Fully implemented (including CastSpellByName).
> *The spellbook and casting system is fully functional, enabling players to learn, manage, and cast spells by name without issues.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Talents — Fully implemented.
> *All talent features are working, including talent trees, learning talents, talent wipes, and trainer checks.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Targeting System — Fully implemented (minor exceptions).
> *Core targeting functions like targeting by name, assisting, attacking, and clearing targets are fully working. A few minor features remain to be polished.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Macros System & UI — Fully implemented.
> *All macro functions are working, including creating, editing, deleting, and retrieving macro info and icons.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Minimap & World Map — Fully implemented.
> *All core map functions are working, including player position, map info, landmarks, overlays, zoom, and world map arrows.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Screenshots — Fully implemented.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) RunScript System — Fully implemented.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) In-game Console — Fully implemented.
> *All console commands and functions are fully operational. This includes executing scripts and network commands, retrieving system and build info, checking key presses, capturing screenshots, reloading the UI, managing sound and music, handling cinematics, and tracking game and realm time.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Settings — Fully implemented (some video options excluded).
> *Core settings functions are working, including getting and setting CVars, screen resolutions, refresh rates, gamma, multisampling, and nameplate visibility. Some advanced video options are not yet included.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Guild System — Guild Management is implemented, pending petition and tabard design implementation.
> *Guild management features like invites, promotions, demotions, notes, roster info, ranks, and guild settings are fully functional. Petition and tabard design features are still pending.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) GM Ticket System — In progress.
> *Core GM ticket features are being developed, including creating, updating, and deleting tickets, player info requests, ticket categories, and survey submissions.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Who List — Fully implemented.
> *All core functions are working, including sending who queries, retrieving results, sorting, and UI integration.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Guild Petitions — In progress.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Professions & Crafting — Fully implemented.
> *All core professions and crafting mechanics are fully functional, allowing players to gather materials, craft items, and progress their skills.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Enchanting — In progress.
> *Core enchanting functions like applying and replacing enchants are being worked on.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Character Equipment & Inventory — Fully implemented.
> *Complete support for managing equipment and inventory is in place. This includes equipping and confirming item bindings, tracking item cooldowns and quality, checking if items are broken or locked, retrieving item textures and links, counting items, handling wand equipment, updating inventory alerts, and using items directly from the inventory.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Item Linking — Fully implemented.
> *All item link functions are working, including quality colors and quest/tradeskill item links. The **GetItemInfo** function is still pending.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Page Text (Books & Letters) — Fully implemented.
> *All functions for reading in-game books and letters are working, including page navigation, retrieving text material and creator info, and closing the text window.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Bags & Containers — In progress.
> *Most core features for bags and containers are being developed. This includes retrieving bag names and slot counts, managing item info and cooldowns within containers, moving items between bags and slots, splitting item stacks, using items from bags, handling keys, and updating bag portrait textures. Some UI and edge cases are still in progress.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Bank — Fully implemented.
> *Players can now deposit, withdraw, and manage their items and money securely using the bank system.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Item Tooltips — In progress (missing enchant displays and set bonuses).

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Enchanting — In progress.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Auction House —
> *Fully implemented.All core auction house features are complete, including browsing, bidding, buying, and selling items, as well as managing auctions and searching the marketplace.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Unstuck Feature — Fully implemented.
> *Players can now reliably use the unstuck function to free their character from stuck or trapped situations in the game world.*
 **Communication & Social Systems**

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Social UI: Friend & Ignore Lists — Fully implemented.
> *All core social features are working, including adding, removing, and managing friends and ignores, retrieving friend info, selecting friends or ignores in the UI, and displaying the friends list.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Player Inspection — Fully implemented.
> *All player inspection features are working, including requesting and receiving honor and PvP rank data, checking interaction distance, clearing and notifying inspections, and verifying available honor info.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Basic Chat System — Fully implemented.
> *All core chat functions are in place, including changing chat colors, managing chat windows (size, name, lock, visibility, and docking), handling chat logging, sending messages and emotes, and supporting multiple languages and addon messages.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Chat Window & Channels — Pending custom/system channels support and file logging.
> *Basic chat window and channel functions are working, including joining, leaving, moderating, banning, muting, and managing channels. Support for custom/system channels and chat file logging is still pending.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) In-game Mail — Mostly done, missing drag'n drop and COD features.
> *Core mail functions like checking inbox, reading and deleting messages, handling attachments, and sending mail are fully working. Drag-and-drop item management and Cash on Delivery (COD) features are still missing.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Trading Between Players — In progress.
 **Quest & NPC Interaction**

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Quest System — Fully implemented (except quest timers and minor fixes).
> *All core quest functions are complete, including tracking, accepting, abandoning, completing quests, viewing quest details, rewards, and objectives. Quest timers and a few minor fixes remain to be done.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Gossip System — Fully implemented.

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Vendor System — Fully implemented.
> *All vendor interactions are working, including buying and buyback of items, repairing gear (full or individual), retrieving item info and links, and managing buyback item lists.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Class Trainers — Fully implemented.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Profession Trainers — In progress.
> *Core trainer interactions are being developed, including browsing and selecting training services, viewing service costs and requirements, filtering skill lines and service types, and handling trainer UI. Some features and polish are still pending.*
 **Camera, Controls & Input**

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Input System — Generally working, pending keybinding implementation.
> *Most input handling functions are functional, including retrieving and setting key bindings, loading and saving bindings, and running bound actions. Full keybinding customization and management are still pending.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Camera — In progress.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Cursor & Drag-and-Drop System — In progress.
> *Core drag-and-drop features are functional, including picking up and equipping items, spells, and money, as well as cursor management and interactions with inventory, merchants, macros, and pets. Some edge cases and advanced cursor visuals are still being finalized.*

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Movement — Generally done, pending effects like Levitate and Knockback, Autorun/Follow implementation.
> *Basic movement controls like walking, running, strafing, turning, jumping, and toggling autorun are working. Pending features include special movement effects such as Levitate and Knockback, plus full implementation of autorun and follow commands.*

- ![🟢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e2.svg) Logout — Fully implemented.

- ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Sheathing — In progress.

 **Screenshots**

![Image](https://turtlecraft.gg/images/unreal/framexml_firstlogin.jpg)
 *The world's first player to experience Unreal Engine WoW on a live server! Dec 30, 2024*

| [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml_4.jpeg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml_1.jpeg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml_5.jpeg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml_2.jpeg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml_6.jpeg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml_3.jpeg) |
|---|---|---|
| [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml_7.jpeg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml_7.jpeg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml_8.jpeg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml_8.jpeg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml_9.jpeg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml_9.jpeg) |
| [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml_10.jpeg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml_10.jpeg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml_14.jpeg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml_14.jpeg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml_13.jpeg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml_13.jpeg) |
| [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml1.jpg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml1.jpg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml2.jpg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml2.jpg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml3.jpg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml3.jpg) |
| [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml4.jpg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml4.jpg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml9.jpg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml9.jpg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml6.jpg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml6.jpg) |
| [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml7.jpg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml7.jpg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml5.jpg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml5.jpg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_framexml8.jpg)](https://turtlecraft.gg/images/unreal/unrealwow_framexml8.jpg) |
 *Unreal Engine 5 reimplementation of FrameXML (different stages of progress), ****Legacy Mode*****

| [![Image](https://turtlecraft.gg/images/unreal/twue_1.jpg)](https://turtlecraft.gg/images/unreal/twue_1.jpg) | [![Image](https://turtlecraft.gg/images/unreal/twue_2.jpg)](https://turtlecraft.gg/images/unreal/twue_2.jpg) | [![Image](https://turtlecraft.gg/images/unreal/twue_3.jpg)](https://turtlecraft.gg/images/unreal/twue_3.jpg) |
|---|---|---|
| [![Image](https://turtlecraft.gg/images/unreal/twue_4.png)](https://turtlecraft.gg/images/unreal/twue_4.png) | [![Image](https://turtlecraft.gg/images/unreal/twue_5.png)](https://turtlecraft.gg/images/unreal/twue_5.png) | [![Image](https://turtlecraft.gg/images/unreal/twue_6.png)](https://turtlecraft.gg/images/unreal/twue_6.png) |
| [![Image](https://turtlecraft.gg/images/unreal/twue_8.png)](https://turtlecraft.gg/images/unreal/twue_8.png) | [![Image](https://turtlecraft.gg/images/unreal/twue_9.jpeg)](https://turtlecraft.gg/images/unreal/twue_9.jpeg) | [![Image](https://turtlecraft.gg/images/unreal/twue_10.jpeg)](https://turtlecraft.gg/images/unreal/twue_10.jpeg) |
 *Maraudon, ****Modern Mode*****

| [![Image](https://turtlecraft.gg/images/unreal/twueif-1.png)](https://turtlecraft.gg/images/unreal/twueif-1.png) | [![Image](https://turtlecraft.gg/images/unreal/twueif-2.png)](https://turtlecraft.gg/images/unreal/twueif-2.png) | [![Image](https://turtlecraft.gg/images/unreal/twueif-3.png)](https://turtlecraft.gg/images/unreal/twueif-3.png) |
|---|---|---|
| [![Image](https://turtlecraft.gg/images/unreal/twueif-4.png)](https://turtlecraft.gg/images/unreal/twueif-4.png) | [![Image](https://turtlecraft.gg/images/unreal/twueif-5.png)](https://turtlecraft.gg/images/unreal/twueif-5.png) | [![Image](https://turtlecraft.gg/images/unreal/twueif-6.png)](https://turtlecraft.gg/images/unreal/twueif-6.png) |
 *Ironfroge, ****Modern Mode*****

| [![Image](https://turtlecraft.gg/images/unreal/turtlewow_unreal_teaser_3.jpg)](https://turtlecraft.gg/images/unreal/turtlewow_unreal_teaser_3.jpg) | [![Image](https://turtlecraft.gg/images/unreal/turtlewow_unreal_teaser_7.png)](https://turtlecraft.gg/images/unreal/turtlewow_unreal_teaser_7.png) | [![Image](https://turtlecraft.gg/images/unreal/turtlewow_unreal_teaser_5.png)](https://turtlecraft.gg/images/unreal/turtlewow_unreal_teaser_5.png) |
|---|---|---|
| [![Image](https://turtlecraft.gg/images/unreal/turtlewow_unreal_teaser_6.png)](https://turtlecraft.gg/images/unreal/turtlewow_unreal_teaser_6.png) | [![Image](https://turtlecraft.gg/images/unreal/turtlewow_unreal_teaser_4.jpg)](https://turtlecraft.gg/images/unreal/turtlewow_unreal_teaser_4.jpg) |

| [![Image](https://turtlecraft.gg/images/unreal/GZ2gzrKWYBMSfLo.jpg)](https://turtlecraft.gg/images/unreal/GZ2gzrKWYBMSfLo.jpg) | [![Image](https://turtlecraft.gg/images/unreal/unrealwow_newtrees.jpg)](https://turtlecraft.gg/images/unreal/unrealwow_newtrees.jpg) |
|---|---|
 *We're working on growing better trees!*

## Post 137558 by Torta (Turtle WoW Team) [STAFF] — 2025-06-30T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137558#p137558 | page 1 | era: pre-1.18.1 -->

****Some of your questions have already been answered by Bowser:**** [viewtopic.php?p=137695#p137695](https://forum.turtlecraft.gg/viewtopic.php?p=137695#p137695)

(Reserved for footnotes)

## Post 137560 by Maxmadkent — 2025-06-30T16:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137560#p137560 | page 1 | era: pre-1.18.1 -->

turtle_in_love_head

## Post 137561 by Alexhb — 2025-06-30T16:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137561#p137561 | page 1 | era: pre-1.18.1 -->

Awesome / - Tel Abim  turtle_in_love   turtle_in_love   turtle_in_love

*Last edited by Alexhb on Tue Nov 11, 2025 6:43 pm, edited 2 times in total.*

## Post 137562 by Reploidrocsa (Bug Report Enthusiast) — 2025-06-30T16:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137562#p137562 | page 1 | era: pre-1.18.1 -->

Twow UE5 Hype Twow UE5 Hype

## Post 137564 by Eaos — 2025-06-30T16:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137564#p137564 | page 1 | era: pre-1.18.1 -->

LOOKS AMAZING!

## Post 137566 by Scholarelenay — 2025-06-30T16:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137566#p137566 | page 1 | era: pre-1.18.1 -->

This looks so good!!!! But if it's allowed to give a tiny feedback!... I feel like the road lamps at the Ironforge screenshots are way too bright? They should be a little (or much, idk) softer.
Anyway, continue the great work!! :)

## Post 137567 by Allwynd01 (Bug Report Enthusiast) — 2025-06-30T16:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137567#p137567 | page 1 | era: pre-1.18.1 -->

This looks really exciting. I don't understand if Legacy mode is just UE5 effects severely toned down or just the old client working like it does in Diablo 2 Resurrected. Because when I looked at the screenshots, it looks like in some places the lighting is off and the sky looks dramatically different so I'm inclined to think that Legacy Mode is still UE5.

Other than that I wish there were more screenshots from Unreal Azeroth during the daytime with more focus on outdoor lighting, some vistas and some focus on the sky. Because besides the new water, I think the sky will see a dramatic change. One thing that bugged me in Vanilla is that if you climb up someplace high and you look at the horizon unobstructed, it looks like the sky just ends midway and it's replaced by the zone's fog color.

## Post 137568 by Swizz — 2025-06-30T16:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137568#p137568 | page 1 | era: pre-1.18.1 -->

Keep up the great work.

## Post 137569 by Thol (Barrens Chat Casualty) — 2025-06-30T16:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137569#p137569 | page 1 | era: pre-1.18.1 -->

Looks amazing. Keep up the good work!   smiling_turtle

## Post 137571 by Masterslyp — 2025-06-30T16:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137571#p137571 | page 1 | era: pre-1.18.1 -->

Hey guys, I usually don't have the energy to log in and post on a forum these days. But I have to say, GREAT work and we all appreciate everybody putting in the time! This game has come a long way, it's been a couple months since I logged in due to a move, but I'm excited to check out some changes. Thank you devs!

## Post 137572 by Anonymouse123 — 2025-06-30T16:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137572#p137572 | page 1 | era: pre-1.18.1 -->

How about add-on support?

## Post 137573 by IamMe — 2025-06-30T16:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137573#p137573 | page 1 | era: pre-1.18.1 -->

The modern mode looks so ugly so I am grateful that you kept the legacy mode. Really has those '10s vibes of cramming in more pixelz no matter how bad it looks.

## Post 137574 by Overeath — 2025-06-30T16:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137574#p137574 | page 1 | era: pre-1.18.1 -->

This work looks kinda exciting ! The shaders offer a new atmosphere which looks quite pleasant. Thanks for this work !  satisfied_turtle
I may not have all the info about Twow and UE5 but do you plan de include texture height / paralax occlusion or something like this for all the old textures?
I know this can be time consuming and constant debuging but this could look awesome !   turtle_in_love

## Post 137575 by fa1l1l — 2025-06-30T16:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137575#p137575 | page 1 | era: pre-1.18.1 -->

Waiting for a release! I wish you success and easy work

## Post 137577 by Nassta47 — 2025-06-30T16:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137577#p137577 | page 1 | era: pre-1.18.1 -->

WOOOOW ! Is there a way to enable **perma night-mode** ?   turtle_in_love_head

## Post 137579 by stivanbg123 — 2025-06-30T16:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137579#p137579 | page 1 | era: pre-1.18.1 -->

> **Alexhb wrote: Mon Jun 30, 2025 4:03 pm**
> Awesome / Rag - Tel Abim  turtle_in_love   turtle_in_love   turtle_in_love

Every where you go , you should know the name Stiffler   insidious_turtle

## Post 137581 by stivanbg123 — 2025-06-30T16:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137581#p137581 | page 1 | era: pre-1.18.1 -->

Stiffler > Rag as a tank on Tel'Abim.

## Post 137582 by Dutok — 2025-06-30T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137582#p137582 | page 1 | era: pre-1.18.1 -->

It looks insanely good. People severely underestimate how much work goes into this. Great work guys!

## Post 137583 by Pulsebomber — 2025-06-30T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137583#p137583 | page 1 | era: pre-1.18.1 -->

Looks amazing!

## Post 137585 by Itstwig — 2025-06-30T16:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137585#p137585 | page 1 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Mon Jun 30, 2025 4:16 pm**
> ...I don't understand if Legacy mode is just UE5 effects severely toned down or just the old client...

Legacy Mode is still within the UE5 client. The team has mentioned that the current client and the UE5 will coexist for a time, but will inevitably switch strictly to the UE5 client when they're ready to.

## Post 137588 by SvenS2 (Bug Report Enthusiast) — 2025-06-30T16:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137588#p137588 | page 1 | era: pre-1.18.1 -->

Thanks for sharing the progress!

## Post 137590 by Manolothegreat (Barrens Chat Casualty) — 2025-06-30T17:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137590#p137590 | page 1 | era: pre-1.18.1 -->

Are you guys using old models for the new client? Instead of the HD models? If so, why? Does it make any sense?
Also, why do all the pictures have a low resolution? Is this a forum thing, or will the client look like this?

## Post 137593 by Nazdar — 2025-06-30T17:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137593#p137593 | page 1 | era: pre-1.18.1 -->

What I see:
- Screenshots
- Lots of dramatic lighting
- A long list of technical subsystems
- Green/Yellow/Red progress indicators
What I don't see:
- A single animation
- A single particle effect
- Multiple players moving at once
The stills are great for a tease, but until we see something technically difficult, it's hard to buy into the hype.  All I want is a short clip of a mage casting a frostbolt in a duel.  Then I'll be impressed.

## Post 137597 by kalevala206 (Barrens Chat Casualty) — 2025-06-30T17:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137597#p137597 | page 1 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Mon Jun 30, 2025 4:16 pm**
> This looks really exciting. I don't understand if Legacy mode is just UE5 effects severely toned down or just the old client working like it does in Diablo 2 Resurrected. Because when I looked at the screenshots, it looks like in some places the lighting is off and the sky looks dramatically different so I'm inclined to think that Legacy Mode is still UE5.

Legacy mode is still a rebuilt UE5 client. The point is to have an engine that they have full control of, and not be restricted by the hardcoded elements. The ability to turn on better lighting features is just an added bonus really. While they're working on things you'll definitely still notice things about the lighting being off in Legacy mode. IDK if they'll ever be able to get it exact, but I'm sure they'll try.

## Post 137601 by Gattare — 2025-06-30T18:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137601#p137601 | page 1 | era: pre-1.18.1 -->

I noticed that the vanilla character model has various hard edges under complex lighting due to the low number of model faces. I wonder if this has been improved in the UE5 environment. We hope to see this in the next dev report!

## Post 137602 by Xandegamesbr — 2025-06-30T18:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137602#p137602 | page 1 | era: pre-1.18.1 -->

Please add a barber for the SA servers and boneless undead like the chinese client

## Post 137604 by Pino1536 — 2025-06-30T18:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137604#p137604 | page 1 | era: pre-1.18.1 -->

Are you reworked the lua xml interface too or only the API for?
(I actually refactor the whole xml and lua interface (FrameXML and GlueXML) and port many retail stuff into it. Dont want to do all this pointless :D)

*Last edited by Pino1536 on Mon Jun 30, 2025 9:42 pm, edited 1 time in total.*

## Post 137609 by Angra — 2025-06-30T20:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137609#p137609 | page 1 | era: pre-1.18.1 -->

This all looks amazing. Kudos to the people working on this for their dedication to making a great game even greater. I'm looking forward to seeing all the new developments!  turtle_in_love

## Post 137610 by Curix — 2025-06-30T20:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137610#p137610 | page 1 | era: pre-1.18.1 -->

The goal is for the game to FEEL and FUNCTION identically to the game we all know and love, right? There aren't going to be hundreds of nagging little differences in moment to moment gameplay?

## Post 137611 by Aindoros1 — 2025-06-30T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137611#p137611 | page 1 | era: pre-1.18.1 -->

> **Manolothegreat wrote: Mon Jun 30, 2025 5:09 pm**
> Are you guys using old models for the new client? Instead of the HD models? If so, why? Does it make any sense?
>  Also, why do all the pictures have a low resolution? Is this a forum thing, or will the client look like this?

I'm worried about that too.

## Post 137616 by Knuckle — 2025-06-30T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137616#p137616 | page 1 | era: pre-1.18.1 -->

If you really wanted this to look good, you'd implement the HD models for architecture, flora and characters. If you can do it for the shop mounts, you can do it for this.

## Post 137623 by Sylveria (Grandmaster of Forum PvP) — 2025-06-30T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137623#p137623 | page 1 | era: pre-1.18.1 -->

> **Manolothegreat wrote: Mon Jun 30, 2025 5:09 pm**
> Are you guys using old models for the new client? Instead of the HD models? If so, why? Does it make any sense?
>  Also, why do all the pictures have a low resolution? Is this a forum thing, or will the client look like this?

If you watched the very First Trailer: we're gonna have both old and new Models. It will have Something for everyone.
And this is Still under development.

## Post 137631 by Some7 — 2025-07-01T01:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137631#p137631 | page 1 | era: pre-1.18.1 -->

I'm so happy to see UE5 bring Azeroth to life!

regarding:
![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Animation System — Mostly working, but needs optimization, proper blending, animation layering, and transition logic similar to the original client.

I work as a tech artist in ue5, specifically in animation systems programming and animation performance optimization. I'd love to volunteer and help with the labor. I sent your team an email with my info.

Thanks for the teaser! Looks promising.

*Last edited by Some7 on Tue Jul 01, 2025 2:53 am, edited 1 time in total.*

## Post 137632 by Nazzydragon (Barrens Chat Casualty) — 2025-07-01T02:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137632#p137632 | page 1 | era: pre-1.18.1 -->

> **Some7 wrote: Tue Jul 01, 2025 1:51 am**
> I'm so happy to see UE5 bring Azeroth to life!
>
>  regarding:
>  ![🟡](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f7e1.svg) Animation System — Mostly working, but needs optimization, proper blending, animation layering, and transition logic similar to the original client.
>
>  I work as a tech artist in ue5, specifically in animation systems programming and animation performance optimization. I'd love to volunteer and help with the labor. Shoot me an email sometime if you need an extra hand.
>
>  Thanks for the teaser! Looks promising.

Probably shoot *them* an e-mail, more likely to get a response. :D

## Post 137638 by Allwynd01 (Bug Report Enthusiast) — 2025-07-01T06:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137638#p137638 | page 2 | era: pre-1.18.1 -->

> **Knuckle wrote: Mon Jun 30, 2025 9:46 pm**
> If you really wanted this to look good, you'd implement the HD models for architecture, flora and characters. If you can do it for the shop mounts, you can do it for this.

Looking good is subjective. I don't think the HD models look good or better, they just look different and more detailed, but not better.

There are a lot of old models that don't have HD counterparts and whenever the HD models are used, there is a visible discrepancy in the art, because some assets are from, say 2015 and others are from 2004 and the difference is glaring. Even if there was no such issue, I still find the HD models unappealing so you broadly calling them "good looking" is like speaking for everyone and that's not how people feel.

The 2004 models and assets still look good and have a charisma that is lost in the HD counterparts, especially the original player models look much better, more precisely - their faces. The old models have aged well and look less cartoony and more stylized while the new models make everything look like a Disney Pixar movie whose target audience is 8 year olds.

## Post 137654 by Nicko77 — 2025-07-01T08:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137654#p137654 | page 2 | era: pre-1.18.1 -->

Regarding sheating would be nice for hunters to have their ranged weapon sheated on the back.

## Post 137673 by Archyy — 2025-07-01T10:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137673#p137673 | page 2 | era: pre-1.18.1 -->

What addons will work on the modern UE client? Modern addons  (retail / life released addons)? Or will we have to use the old (Archived) addons?

## Post 137682 by Wildaweb — 2025-07-01T11:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137682#p137682 | page 2 | era: pre-1.18.1 -->

why is everyone praising this? the colors are super washed out on anything other than extremely dark areas and caves, which is all they show in the screenshots cause everywhere else in the game likely looks like garbage. i doubt this sees the light of day in the next two years anyway but this is not gonna be what everyone thinks it is.

## Post 137687 by Hyundef (Turtle WoW Team) [STAFF] — 2025-07-01T11:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137687#p137687 | page 2 | era: pre-1.18.1 -->

Looking great!

## Post 137688 by Ficurse — 2025-07-01T11:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137688#p137688 | page 2 | era: pre-1.18.1 -->

i am so glad to see your progress, i hope nothing will stop your team from the seccessful completion of the project

## Post 137694 by SvenS2 (Bug Report Enthusiast) — 2025-07-01T12:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137694#p137694 | page 2 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Tue Jul 01, 2025 6:38 am**
> > **Knuckle wrote: Mon Jun 30, 2025 9:46 pm**
> > If you really wanted this to look good, you'd implement the HD models for architecture, flora and characters. If you can do it for the shop mounts, you can do it for this.
>
>   Looking good is subjective. I don't think the HD models look good or better, they just look different and more detailed, but not better.
>
>  There are a lot of old models that don't have HD counterparts and whenever the HD models are used, there is a visible discrepancy in the art, because some assets are from, say 2015 and others are from 2004 and the difference is glaring. Even if there was no such issue, I still find the HD models unappealing so you broadly calling them "good looking" is like speaking for everyone and that's not how people feel.
>
>  The 2004 models and assets still look good and have a charisma that is lost in the HD counterparts, especially the original player models look much better, more precisely - their faces. The old models have aged well and look less cartoony and more stylized while the new models make everything look like a Disney Pixar movie whose target audience is 8 year olds.

This. I hate how cartoony taurens look with the new models

## Post 137695 by Bowser (Turtle WoW Team) [STAFF] — 2025-07-01T12:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137695#p137695 | page 2 | era: pre-1.18.1 -->

I’ll answer some of the questions, but I won’t quote everyone, it would take up the whole page and lead to duplicate answers.

 ****Lights & Shadows:****
All the lighting code for Modern Mode has been completely **overhauled** and Legacy Mode is now 99% matching the original shaders.

 ****Release Date:****
We’re still aiming to release the Windows client in **December 2025**, but we won’t launch a half-baked version if our QA team identifies major issues. Quality comes first!

 ****Fresh Realm:****
All I can say is that our current realms support up to 11k players each without any lag. We did have a SEA realms hitting 13k players, but the world update load was too high, so we had to enable a queue and launch additional realms. Now, I’ll leave it to your imagination how many players will try the new client and how many realms we might need to handle that.

Whatever happens, existing realms will remain and your characters will stay intact, this update affects primarily the **client**, not the server.

 ****Flying Mounts:****
While technically possible to enable flying mounts with real flying physics, it’s **not planned**. It would change the game too much and we want to stay true to the Vanilla spirit.

 ****HD models:****
You’ll be able to choose between the classic stock models or HD models. We already have HD patch modelers on our team and have created a new GitHub to improve HD support for both the **old and new** clients. However, this feature might not be available at release.

 ****Linux:****
We’ll be testing the client with Proton in Q3 and will share the results. Long-term, we plan to offer native Linux support, including a **native ARM** version.

 ****Beta Testing:****
We have a large QA team handling testing, but we plan to expand the tester pool to cover a wider range of devices. There will be **two ways** to get involved and we’ll share more details 'how' in Q3 2025.

 ****Mobile Android Client:****
The Android client is currently several months behind the Windows client in terms of development. Since we have to prioritize Windows first, progress is a bit staggered. That said, we've recently brought on an additional FrameXML developer to help accelerate interface development across both platforms.

 ****Mobile Requirements:****
Basically, any mobile device released in 2017 or later should support Vulkan in theory. A popular example is the Samsung Galaxy S8, which comes with either the Snapdragon 835 or Exynos 8895 CPU. Unreal Azeroth is still considering using OpenGL ES 3.2 instead, as it would support an even wider range of devices.

This performance level roughly corresponds to a low-end device in 2025. We will release benchmarks in Q4 2025.

 ****Existing Client:****
Working on two separate clients long-term would be a **nightmare**. Right now, the plan is to ban the old client either at release or shortly after. The UE5 client just gives us way more room to grow and innovate, without being tied down by the limitations of the legacy binary. Moving forward with a single, modern codebase is a huge step toward making TW development smoother and more sustainable.

 ****Game Controllers:****
Controller support will be ready on **day one**.

 ****Addons:****
We're also extending the addon API to support both **1.12** and some of the popular **3.3.5** addons, plus long-term new custom API calls to enable future addon features beyond what’s currently possible.

 ****Why we chose UE5:****
First of all, switching to UE5 significantly increases our development speed. It gives the entire team *(Client developers, 3D modelers, skin modders, musicians, designers...)*, tools they can only dream of. This cuts their workload by at least 50% and eliminates the need to constantly convert files or struggle with outdated tools.

 **We did consider 3.3.5**, but its tools are limited and not future-proof. We even ran a beta test to double-check if 3.3.5 was an option, but our project leads, representing every department, agreed that **UE5 is the better choice**.

Beyond development, the new client runs better on modern devices, supports ARM CPUs for mobile and thus offers true cross-platform support. We could even enable asset streaming and we will implement a much better anti-cheat system than the 15–20-year-old Warden version.

We’ve already planned many custom features that would be impossible with any legacy client, though I won’t spoil anything yet. Rest assured, everything will stay **true to the vanilla gameplay** style. You won’t be seeing flying helicopters shooting rockets in Stormwind.

 **TL;DR:** It’s not just about graphics, although Modern Mode will deliver that too. The real win is faster development, better tools, cross-platform support and improved performance and security.

 ****Bits, Multithreading and FPS:****
The client is **64-bit** and there is no planned support for 32-bit. The 64-bit client will perform much better on modern systems, can cache significantly more content than the old legacy clients on PCs with 8GB of RAM or more and supports true multithreading.

All legacy clients up to version 8.x.x **do not support multithreading**. This was one of the main reasons we decided to **move away from legacy clients** and believe that UE5 is a much better long-term path for our project.

So, on a low-end laptop with, lets say, an Intel N100 Quadcore CPU, you can expect at least **twice the FPS** because the UE5 client uses multiple CPU cores instead of overloading a single slow core of a CPU like the N100.

This was especially important for the upcoming mobile client.

## Post 137723 by Allwynd01 (Bug Report Enthusiast) — 2025-07-01T14:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137723#p137723 | page 2 | era: pre-1.18.1 -->

I noticed in the screenshots provided, the character portrait seems to have captured an animation where the model is going through a sighing animation or something with the eyelids closed and mouth slightly open, like flinching. I hope this is known and will be fixed by the time the UE5 goes public. Alternatively, as a bonus you could consider including animated portraits, like in LOTRO.

## Post 137745 by Dirti — 2025-07-01T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137745#p137745 | page 2 | era: pre-1.18.1 -->

Those night time screenshots are everything I ever wanted this game to be visually. I AM SO EXCITED!  turtle_in_love_head

## Post 137751 by Zennever — 2025-07-01T16:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137751#p137751 | page 2 | era: pre-1.18.1 -->

Wow great job everybody! I hope we will be able to modify our haircut/beard in game like in WOTLK with this new engine! :D

## Post 137753 by Korythael — 2025-07-01T16:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137753#p137753 | page 2 | era: pre-1.18.1 -->

I currently play from a Mac with Apple Silicon using Windows 11 ARM via VMware Fusion. It would be great if the new client continues to work in that setup, but it would be even better if you could provide a native macOS version for Apple Silicon

Thanks for all the work you’re doing!!

## Post 138388 by Nazzydragon (Barrens Chat Casualty) — 2025-07-07T21:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138388#p138388 | page 2 | era: pre-1.18.1 -->

> **bowser wrote: Tue Jul 01, 2025 12:09 pm**
> ****HD models:****
>  You’ll be able to choose between the classic stock models or HD models. We already have HD patch modelers on our team and have created a new GitHub to improve HD support for both the **old and new** clients. However, this feature might not be available at release.

Will the HD models be the WoD models, or custom ones..? I absolutely despise the WoD models. Way too cartoony.

## Post 138437 by Allwynd01 (Bug Report Enthusiast) — 2025-07-08T14:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138437#p138437 | page 2 | era: pre-1.18.1 -->

> **Nazzydragon wrote: Mon Jul 07, 2025 9:04 pm**
> > **bowser wrote: Tue Jul 01, 2025 12:09 pm**
> > ****HD models:****
> >  You’ll be able to choose between the classic stock models or HD models. We already have HD patch modelers on our team and have created a new GitHub to improve HD support for both the **old and new** clients. However, this feature might not be available at release.
>
>   Will the HD models be the WoD models, or custom ones..? I absolutely despise the WoD models. Way too cartoony.

Are there even any other models? They don't look very nice, especially their faces, facial expressions and body animations look cringe.

## Post 139568 by Zulnam (Bug Report Enthusiast) — 2025-07-15T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139568#p139568 | page 2 | era: pre-1.18.1 -->

i am hoping that the new client will be supported on all OSes natively: linux and macos.

UE5 supports both. there would be little reason not to.

## Post 139950 by Itstwig — 2025-07-16T18:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139950#p139950 | page 2 | era: pre-1.18.1 -->

> **Zulnam wrote: Tue Jul 15, 2025 3:17 pm**
> i am hoping that the new client will be supported on all OSes natively: linux and macos.
>
>  UE5 supports both. there would be little reason not to.

There's quite a big difference between UE5 supporting both and the game actually functioning on both. They are vastly different architectures than Windows and things behave differently on each system. I'm also holding out hope for a macOS client, though.

## Post 139964 by Veinar — 2025-07-16T19:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139964#p139964 | page 2 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Tue Jul 08, 2025 2:07 pm**
> > **Nazzydragon wrote: Mon Jul 07, 2025 9:04 pm**
> > > **bowser wrote: Tue Jul 01, 2025 12:09 pm**
> > > ****HD models:****
> > >  You’ll be able to choose between the classic stock models or HD models. We already have HD patch modelers on our team and have created a new GitHub to improve HD support for both the **old and new** clients. However, this feature might not be available at release.
> >
> >   Will the HD models be the WoD models, or custom ones..? I absolutely despise the WoD models. Way too cartoony.
>
>   Are there even any other models? They don't look very nice, especially their faces, facial expressions and body animations look cringe.

I really hope they get artists to make a new variant for each of the HD Models. I'm always in a shocker whenever I take a look at the tauren at those massive hooves vs how they look like in Warcraft III. I would be inclined to assist with this, however I am still in a rough shape learning 3D at anatomy and sculpting(and texturing). :c

## Post 140620 by Allwynd01 (Bug Report Enthusiast) — 2025-07-20T14:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140620#p140620 | page 2 | era: pre-1.18.1 -->

> **Veinar wrote: Wed Jul 16, 2025 7:33 pm**
> > **Allwynd01 wrote: Tue Jul 08, 2025 2:07 pm**
> > > **Nazzydragon wrote: Mon Jul 07, 2025 9:04 pm**
> > > Will the HD models be the WoD models, or custom ones..? I absolutely despise the WoD models. Way too cartoony.
> >
> >   Are there even any other models? They don't look very nice, especially their faces, facial expressions and body animations look cringe.
>
>   I really hope they get artists to make a new variant for each of the HD Models. I'm always in a shocker whenever I take a look at the tauren at those massive hooves vs how they look like in Warcraft III. I would be inclined to assist with this, however I am still in a rough shape learning 3D at anatomy and sculpting(and texturing). :c

I don't know. I really think that the Vanilla models look fine like they are. Maybe using AI to increase texture resolution and modify models to have some higher polygon count and improve skeletons so things like fingers are separate, because currently I think only thumbs and index fingers are separate, middle, ring and pinkie seem to be "fused" together. Also having defined and separate toes that don't look like some gigantic fused lump of meat will also be nice. Proper blinking and maybe a bit smoother animations overall will be better than just slapping the WoD models, those are just a crime to gaming.

## Post 141841 by Crake (Patch Note Conspiracy Theorist) — 2025-07-28T07:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=141841#p141841 | page 2 | era: pre-1.18.1 -->

I'm not sure how difficult it would be to implement, but as a suggestion, including the option for the in game font to be toggled to the open dyslexia font would be an incredible accessibility feature for many people.

## Post 143597 by Dropforged — 2025-08-07T14:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143597#p143597 | page 2 | era: pre-1.18.1 -->

> **Sylveria wrote: Mon Jun 30, 2025 11:20 pm**
> > **Manolothegreat wrote: Mon Jun 30, 2025 5:09 pm**
> > Are you guys using old models for the new client? Instead of the HD models? If so, why? Does it make any sense?
> >  Also, why do all the pictures have a low resolution? Is this a forum thing, or will the client look like this?
>
>   If you watched the very First Trailer: we're gonna have both old and new Models. It will have Something for everyone.
>  And this is Still under development.

I just hope they don't use the WoD enhanced models.  They had more polygons but looked so doughy / pasty.  In the end I found the original art more immersive and stylized to the Warcraft feel.

## Post 143618 by SvenS2 (Bug Report Enthusiast) — 2025-08-07T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143618#p143618 | page 2 | era: pre-1.18.1 -->

> **Sylveria wrote: Mon Jun 30, 2025 11:20 pm**
> > **Manolothegreat wrote: Mon Jun 30, 2025 5:09 pm**
> > Are you guys using old models for the new client? Instead of the HD models? If so, why? Does it make any sense?
> >  Also, why do all the pictures have a low resolution? Is this a forum thing, or will the client look like this?
>
>   If you watched the very First Trailer: we're gonna have both old and new Models. It will have Something for everyone.
>  And this is Still under development.

You sure? What I got from the trailer was modern lighting and effects, but not new models

## Post 143621 by Sylveria (Grandmaster of Forum PvP) — 2025-08-07T14:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143621#p143621 | page 2 | era: pre-1.18.1 -->

> **SvenS2 wrote: Thu Aug 07, 2025 2:33 pm**
> > **Sylveria wrote: Mon Jun 30, 2025 11:20 pm**
> > > **Manolothegreat wrote: Mon Jun 30, 2025 5:09 pm**
> > > Are you guys using old models for the new client? Instead of the HD models? If so, why? Does it make any sense?
> > >  Also, why do all the pictures have a low resolution? Is this a forum thing, or will the client look like this?
> >
> >   If you watched the very First Trailer: we're gonna have both old and new Models. It will have Something for everyone.
> >  And this is Still under development.
>
>  You sure? What I got from the trailer was modern lighting and effects, but not new models

![Image](http://puu.sh/KyA8M/6beb98d5d1.JPG)

## Post 144049 by Eggfarts — 2025-08-09T19:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144049#p144049 | page 2 | era: pre-1.18.1 -->

i haven't really been into wow private servers in years, but i must say, this is the most hyped i've been in the decade+ i've been playing pservers. the janky clients are my biggest gripe with going back to play pservers. from the memory limits, to the cursor issues, to the graphics, this release seems aimed to fix everything. i am supremely excited and look forward to doing some beta testing. cheers!

## Post 144080 by Mothius (Barrens Chat Casualty) — 2025-08-09T23:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144080#p144080 | page 2 | era: pre-1.18.1 -->

> **bowser wrote: Tue Jul 01, 2025 12:09 pm**
> We did consider 3.3.5[/b], but its tools are limited and not future-proof. We even ran a beta test to double-check if 3.3.5 was an option, but our project leads, representing every department, agreed that **UE5 is the better choice**.
>
>  ****Bits, Multithreading and FPS:****
>  The client is **64-bit** and there is no planned support for 32-bit. The 64-bit client will perform much better on modern systems, can cache significantly more content than the old legacy clients on PCs with 8GB of RAM or more and supports true multithreading.
>
>  All legacy clients up to version 8.x.x **do not support multithreading**. This was one of the main reasons we decided to **move away from legacy clients** and believe that UE5 is a much better long-term path for our project.

I know is a bit late to question about, but just out of curiosity, did you guys considered using the Classic Wow client (7.x.x) or even the TBC Classic client (8.x.x) over the Unreal Engine?

Wouldn't it be easier to use one of these versions instead of UE5?
Or would be harder to work with those versions?

Thanks.

*Last edited by Mothius on Mon Aug 11, 2025 3:10 am, edited 1 time in total.*

## Post 144087 by Yavamar1 (Barrens Chat Casualty) — 2025-08-10T00:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144087#p144087 | page 2 | era: pre-1.18.1 -->

6756m45nygb3

*Last edited by Yavamar1 on Sat Apr 18, 2026 6:45 pm, edited 1 time in total.*

## Post 147016 by Murdoc89 — 2025-08-19T13:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147016#p147016 | page 2 | era: pre-1.18.1 -->

Im a bit confused,legacy/modern mode. can someone explain it ? Is "legacy" going to be vanilla like,without modding and "modern" would look like what Redmagejoe used to do with legion models,buildings,world...?

## Post 147025 by FrankFankledank (Patch Note Conspiracy Theorist) — 2025-08-19T15:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147025#p147025 | page 2 | era: pre-1.18.1 -->

> **Murdoc89 wrote: Tue Aug 19, 2025 1:54 pm**
> Im a bit confused,legacy/modern mode. can someone explain it ? Is "legacy" going to be vanilla like,without modding and "modern" would look like what Redmagejoe used to do with legion models,buildings,world...?

Legacy mode would be using the standard graphics we already have, Modern would be using the Unreal Engine one which covers updated lighting and shaders and such, not Legion model replacement.

## Post 149049 by MakerManu — 2025-08-29T01:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149049#p149049 | page 2 | era: pre-1.18.1 -->

Hi guys - thank you so, so much for this work, it’s incredible.
I have two questions, and sorry in advance if you’ve already answered them, but the post is long and I couldn’t read everything.
The Turtle WoW character will be transferable, right? Since this is just a client update.

 ***Do you have any idea, even a very vague one, of when it might be released? Could there be delays?***

 **Thanks again!**

## Post 149053 by Ironbob (Barrens Chat Casualty) — 2025-08-29T02:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149053#p149053 | page 2 | era: pre-1.18.1 -->

Dec2025-april26

## Post 149058 by Hammerfall — 2025-08-29T03:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149058#p149058 | page 2 | era: pre-1.18.1 -->

wow  turtle_in_love_head

## Post 149123 by MakerManu — 2025-08-29T11:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149123#p149123 | page 2 | era: pre-1.18.1 -->

> **Ironbob wrote: Fri Aug 29, 2025 2:45 am**
> Dec2025-april26

Thanks!

## Post 149328 by Torze — 2025-08-30T11:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149328#p149328 | page 2 | era: pre-1.18.1 -->

Looks amazing! Keep up the good work.

## Post 153088 by Eroh (Barrens Chat Casualty) — 2025-09-25T06:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153088#p153088 | page 2 | era: pre-1.18.1 -->

any update?

## Post 153332 by Dark0 — 2025-09-26T13:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153332#p153332 | page 2 | era: pre-1.18.1 -->

New video dropped:
<https://www.youtube.com/watch?v=ZVGr0GmP-Dc>

Looks amazing. My only point would be grass draw distance needs to be increased for sure.
Also would be amazing if grass could react to player running through it and move, but not sure if that's possible at all.

## Post 153395 by Eroh (Barrens Chat Casualty) — 2025-09-26T21:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153395#p153395 | page 2 | era: pre-1.18.1 -->

> **Dark0 wrote: Fri Sep 26, 2025 1:58 pm**
> New video dropped:
>  <https://www.youtube.com/watch?v=ZVGr0GmP-Dc>
>
>  Looks amazing. My only point would be grass draw distance needs to be increased for sure.
>  Also would be amazing if grass could react to player running through it and move, but not sure if that's possible at all.

adjustable

## Post 153413 by Aks666 — 2025-09-27T06:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153413#p153413 | page 3 | era: pre-1.18.1 -->

I really like it ![😃](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f603.svg)
And I like it more if there will be a native Mac client. ![😁](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f601.svg)![😁](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f601.svg)

## Post 153419 by Wideworld (Barrens Chat Casualty) — 2025-09-27T07:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153419#p153419 | page 3 | era: pre-1.18.1 -->

Pity, I prefer the original client style.
Bye, TurtleWOW.

## Post 153452 by Dark0 — 2025-09-27T14:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153452#p153452 | page 3 | era: pre-1.18.1 -->

> **Wideworld wrote: Sat Sep 27, 2025 7:39 am**
> Pity, I prefer the original client style.
>  Bye, TurtleWOW.

The new client has legacy mode, that has the original style lol

## Post 153454 by Zirek — 2025-09-27T14:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153454#p153454 | page 3 | era: pre-1.18.1 -->

I hope they will make Darkshire absurdly dark. So carrying torches would be something that everyone does.

## Post 153466 by Eroh (Barrens Chat Casualty) — 2025-09-27T16:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153466#p153466 | page 3 | era: pre-1.18.1 -->

> **Wideworld wrote: Sat Sep 27, 2025 7:39 am**
> Pity, I prefer the original client style.
>  Bye, TurtleWOW.

Bye

## Post 155900 by Crimson957 — 2025-10-17T15:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155900#p155900 | page 3 | era: 1.18.1-announced-pre-release -->

is this project dead now that they are being sued by blizzard ?

## Post 155903 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-10-17T15:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155903#p155903 | page 3 | era: 1.18.1-announced-pre-release -->

> **Crimson957 wrote: Fri Oct 17, 2025 3:26 pm**
> is this project dead now that they are being sued by blizzard ?

Development is still ongoing.

## Post 156778 by Six100 — 2025-10-23T22:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156778#p156778 | page 3 | era: 1.18.1-announced-pre-release -->

Not a fan of the remastered art style. I hope there is at least a way to change back and forth from new and old.
I also hope the devs are careful with Unreal. It not only introduces a lot of bloat, but isn't the best for large iterative projects like these, that go on for years and years.
What are the actual issues that the main client has that necessitates a switch to Unreal?

## Post 156787 by Crake (Patch Note Conspiracy Theorist) — 2025-10-23T23:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156787#p156787 | page 3 | era: 1.18.1-announced-pre-release -->

> **Six100 wrote: Thu Oct 23, 2025 10:33 pm**
> Not a fan of the remastered art style. I hope there is at least a way to change back and forth from new and old.
>  I also hope the devs are careful with Unreal. It not only introduces a lot of bloat, but isn't the best for large iterative projects like these, that go on for years and years.
>  What are the actual issues that the main client has that necessitates a switch to Unreal?

The devs have made it clear that their intention is to maintain a lightweight client that is playable on old hardware.

As for the issues of the old client, they are well documented and widespread. A lot of it has been already laid out by the dev team themselves, but some highlights include: single threaded, and build for single core processors, meaning it doesn't make much use of modern hardware and is severely limited, old architechture, its a 32 bit client, when practically nobody uses 32 bit cpus anymore, and the old blizzard client has a lot of hard coded limitations that would require a lot of time trying to decompile and hack the original client, things like the quest log limit of 20.

As for the graphics, the devs have had the legacy mode as a front and center feature.

