---
title: "PF slashcommand ?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23189"
topic_id: 23189
forum_id: 18
forum: "AddOns"
author: "Rejuve"
author_authority: "player"
posted: "2025-12-08T11:48:00Z"
last_post: "2025-12-10T07:01:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:22:43Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# PF slashcommand ?

## Post 162003 by Rejuve (Barrens Chat Casualty) — 2025-12-08T11:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162003#p162003 | page 1 | era: 1.18.1-announced-pre-release -->

PF-Quest addon: Is there a slashcommand for toggling the quest objective icons on the world map on/off ?

## Post 162004 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-12-08T11:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162004#p162004 | page 1 | era: 1.18.1-announced-pre-release -->

I'm not sure if there's a /command but there should be an option in pfquest via the minimap icon.

## Post 162067 by Rejuve (Barrens Chat Casualty) — 2025-12-08T16:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162067#p162067 | page 1 | era: 1.18.1-announced-pre-release -->

> **Drubarrymooer wrote: Mon Dec 08, 2025 11:56 am**
> I'm not sure if there's a /command but there should be an option in pfquest via the minimap icon.

Yes, know about this. ty. But I need the slashcommand.

## Post 162283 by TR0Y — 2025-12-10T07:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162283#p162283 | page 1 | era: 1.18.1-announced-pre-release -->

Open file in ..\Interface\AddOns\pfQuest\README.md in any notepad
The addon features a CLI interface which allows you to easilly create macros to show your favourite herb or mining-veins. Let's say you want to display all **Iron Deposit** deposits, then type in chat or create a macro with the text: `/db object Iron Deposit`. You can also display all mines on the map by typing: `/db track mines`. This can be extended by giving the minimum and maximum required skill as paramter, like: `/db track mines 150 225` to display all ores between skill 150 and 225. The `mines` parameter can also be replaced by `herbs`, `rares`, `chests`, `taxi`  (`taxi horde` & `taxi alliance`) and many more in order to show those instead. If `/db` doesn't work for you, there are also some other aliases available like `/shagu`, `pfquest` and `/pfdb`.

 **### Basic Commands**
```
/db lock                Lock map tracker
/db tracker             Show map tracker
/db journal             Show quest journal
/db arrow               Show quest arrow
/db show                Show database interface
/db config              Show configuration interface
/db locale              Display addon locales
/db scan                Scan the server for custom items
```

 **### Questing**
```
/db reset               Reload all quests on map
/db query               Query the server for completed quests
```

 **### Database**
```
/db unit <unit>         Search for specific units by name (e.g Thrall)
/db object <object>     Search for gameobjects by name (e.g Iron Deposit)
/db item <item>         Search for units and objects dropping an item (e.g Runecloth)
/db vendor <item>       Search for vendors that sell a specific item (e.g Jagged Arrow)
/db quest <questname>   Search for a specific quest by name
/db clean               Clean all database search results from map
```

 **### Tracking**
```
/db track               Shows an overview of all trackable lists
/db track clean         Cleans all tracked lists at once
/db track <list>        Shows all objects of <list> on the map
/db track <list> clean  Removes all objects of <list> from the map
```

 ****Examples:****
```
/db track mines         Shows all mines on the map
/db track mines auto    Shows all mines that are in the characters current skill range
/db track mines 50 150  Shows all mines that require skill 50 to 150
/db track mines clean   Cleans all mines from the map
```

 *Currently available tracking lists are: `repair`, `mines`, `vendor`, `herbs`, `fish`,
`meetingstone`, `rares`, `auctioneer`, `battlemaster`, `banker`, `chests`,
`flight`, `stablemaster`, `innkeeper`, `spirithealer`, `mailbox`*

