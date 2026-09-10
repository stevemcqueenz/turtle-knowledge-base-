---
title: "Short list of some easy and quick quality of life improvements that can be implemented"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7953"
topic_id: 7953
forum_id: 14
forum: "Suggestions"
author: "Balake"
author_authority: "player"
posted: "2023-06-23T21:56:00Z"
last_post: "2023-06-27T23:01:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T12:15:05Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Short list of some easy and quick quality of life improvements that can be implemented

## Post 51127 by Balake (Bug Report Enthusiast) — 2023-06-23T21:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51127#p51127 | page 1 | era: pre-1.18.1 -->

While waiting for patch 1.16.6, it'd be nice if the playerbase is given a little candy to keep them hyped up and excited for what's to come soon (tm or no tm) so here we go

 1) Make tea with sugar quest into group loot. self explanatory, the area became too crowded. It would be nice if people could work together instead of steal tags from each other and breed toxicity. Code: Select all

```
UPDATE `item_template` SET `flags` = 2048 WHERE `entry` = 80880;
```

 2) Make blessed oils and consecrated sharpening stones tradeable. People already can enchant each other's weapons from the trade window, so instead of forcing people to camp their alts outside naxxramas ready to enchant their main's gear, can simply remove the soulbind from the items. Code: Select all

```
UPDATE `item_template` SET `bonding` = 0 WHERE `entry` = 23122;
UPDATE `item_template` SET `bonding` = 0 WHERE `entry` = 23123;
```

 3) Remove hour long cd from blasted lands consumables. That cd existed when blizzard capped the item at one, no reason to exist anymore. Code: Select all

```
UPDATE `item_template` SET `spellcategorycooldown_1` = 3000 WHERE `spellcategory_1` = 103;
```

 4) Additionally, remove 5 max from both the blasted lands consumes and the zanzas (means usually you have enough for an entire raid and one raid only, having to do the trip back to blasted lands and Yojamba island after each raid is redundant inconvenience. The only person that would complain is the flight path npc losing some income) Code: Select all

```
UPDATE `item_template` SET `max_count` = 0 WHERE `entry` = 8410;
UPDATE `item_template` SET `max_count` = 0 WHERE `entry` = 8411;
UPDATE `item_template` SET `max_count` = 0 WHERE `entry` = 8412;
UPDATE `item_template` SET `max_count` = 0 WHERE `entry` = 8413;
UPDATE `item_template` SET `max_count` = 0 WHERE `entry` = 8414;
UPDATE `item_template` SET `max_count` = 0 WHERE `entry` = 20079;
UPDATE `item_template` SET `max_count` = 0 WHERE `entry` = 20080;
UPDATE `item_template` SET `max_count` = 0 WHERE `entry` = 20081;
```

Can be expanded with people's ideas in the replies, or if i think of something else.

Thank you.

*Last edited by Balake on Sat Jun 24, 2023 5:07 pm, edited 1 time in total.*

## Post 51130 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-06-23T23:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51130#p51130 | page 1 | era: pre-1.18.1 -->

- Add "Report" and "Ignore" to the right-click mouse player options menu.
It's been said a million times.  Chances are, it can be done with relative ease – though no one's suggested an actual way *to* do it.  The only reason I can think that Turtle Team would be hesitant to add it is because some very petty and angry people have [abused it](https://www.google.com/search?q=Vanilla+WoW%2C+Right-Click+Report) in *WoW Classic* and Retail.

## Post 51131 by Getplucked (Patch Note Conspiracy Theorist) — 2023-06-23T23:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51131#p51131 | page 1 | era: pre-1.18.1 -->

Yeah, in practice, right-click reports just get abused and flooded with a bunch of dumb reports. There would have to be some kind of punishment for filing a false report. That and, it'd be a lot of extra work to sift through, for an already-small private server team.

## Post 51159 by Balake (Bug Report Enthusiast) — 2023-06-24T08:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51159#p51159 | page 1 | era: pre-1.18.1 -->

Those are definitely not easy... that requires client modification and can't be implemented in a simple weekly update.

Right click to ignore is nice, but right click to report doesn't convey enough information to be useful for the gms. Maybe would be good if right click to report opened the regular ticket box and let you describe what's happening.

## Post 51168 by Fizzler (Patch Note Conspiracy Theorist) — 2023-06-24T11:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51168#p51168 | page 1 | era: pre-1.18.1 -->

They should make demonic runes not BOP and instead tradeable. It’s just weird considering how it makes it an unnecessary inconvenience

## Post 51187 by Balake (Bug Report Enthusiast) — 2023-06-24T17:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51187#p51187 | page 1 | era: pre-1.18.1 -->

Added two more things to the original post

## Post 51454 by Neo4m — 2023-06-27T06:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51454#p51454 | page 1 | era: pre-1.18.1 -->

> **Getplucked wrote: Fri Jun 23, 2023 11:13 pm**
> Yeah, in practice, right-click reports just get abused and flooded with a bunch of dumb reports. There would have to be some kind of punishment for filing a false report. That and, it'd be a lot of extra work to sift through, for an already-small private server team.

Implement small deposit per complaint filed. Make the cost scale with level, matching roughly the current skill cost from the class trainer. (aka something not in significant, but something reasonably attainable).  If the complaint is found valid, money refunded. If it is frivolous, the deposit is forfeited.

Forfeited funds can be used for periodic buy backs for shellcoin, bought-back token obviously being burnt by the shellcoin treasury
satisfied_turtle

## Post 51555 by Torta (Turtle WoW Team) [STAFF] — 2023-06-27T22:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51555#p51555 | page 1 | era: pre-1.18.1 -->

Thank you for your contribution. We have different plans for the tea in patch 1.16.6, however the rest of your suggestions have been implemented :)

## Post 51558 by Balake (Bug Report Enthusiast) — 2023-06-27T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51558#p51558 | page 1 | era: pre-1.18.1 -->

> **Torta wrote: Tue Jun 27, 2023 10:14 pm**
> Thank you for your contribution. We have different plans for tea in patch 1.16.6, however the rest of your suggestions have been implemented :)

Awesome thanks Torta! <3

