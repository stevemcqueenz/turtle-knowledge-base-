---
title: "Rogue Poison ingredients, stack size increase QOL change"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21197"
topic_id: 21197
forum_id: 14
forum: "Suggestions"
author: "Scrubzor"
author_authority: "player"
posted: "2025-08-20T02:54:00Z"
last_post: "2025-09-19T10:14:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T11:16:10Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Rogue Poison ingredients, stack size increase QOL change

## Post 147160 by Scrubzor — 2025-08-20T02:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147160#p147160 | page 1 | era: pre-1.18.1 -->

Please can we increase the amount that the poison ingredients can be both purchased from the vendor and stack in inventory. To make 40 dissolvent poison I need like 24 open slots of inventory space and I have to purchase maiden's anguish in stacks of 10. I don't understand why this is necessary. It it is a total pain in the ass to have to buy 16 stacks of 10 from the vendor. Please allow Poison ingredients to be purchased from vendor and stack in the amount of 100.

## Post 147186 by Teerack (Barrens Chat Casualty) — 2025-08-20T05:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147186#p147186 | page 1 | era: pre-1.18.1 -->

Yeah it's so tedious buying the maiden's anguish that only stacks to 10 over and over. I feel like it was more of an oversight.

Side note I also think is an oversight can all the cap level poisons be unified to be 1 hour and 115 charges? kind of weird how half of them last only 30 minutes and have less charges.

Also be huge if blinding powder could give you 4 or 5 per creation instead of 3 so that I could just make a clean stack instead of it always being a little less or little more than i need.

*Last edited by Teerack on Wed Aug 20, 2025 11:43 pm, edited 2 times in total.*

## Post 147190 by Xudo (Grandmaster of Forum PvP) — 2025-08-20T06:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147190#p147190 | page 1 | era: pre-1.18.1 -->

As a temporary solution - you can use crafting addon with "buy vendor mats" button.
Other option is to make buying macro.

## Post 147404 by Akarui (Patch Note Conspiracy Theorist) — 2025-08-21T01:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147404#p147404 | page 1 | era: pre-1.18.1 -->

rogues need to spend one bag for ammo/arrows, soulshards ? i think no. so whats a problem?

## Post 147453 by Teerack (Barrens Chat Casualty) — 2025-08-21T09:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147453#p147453 | page 1 | era: pre-1.18.1 -->

> **Akarui wrote: Thu Aug 21, 2025 1:40 am**
> rogues need to spend one bag for ammo/arrows, soulshards ? i think no. so whats a problem?

Actually yes? Rogues need to carry around 2 stacks of flash powder, one stack of blinding powder, thieves tools, and then dedicate about 7-8 slots to different poisons. And we actually need to make our poisons. When I'm on my hunter I chuckle about how much easier it is to just restock on ammo with a few right clicks compared to when i'm on my rogue. Not to mention rogue's have their own special reagent vendors only in major cities or neutral hubs.

That all aside this thread isn't even about the stack size of rogue reagents its about the stack size of the ingredients on the vendor. Imagine if you had to buy all of your hunter's ammo 10 at a time lol

## Post 152332 by Nomadin — 2025-09-19T01:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152332#p152332 | page 1 | era: pre-1.18.1 -->

They sell bags in donation store, thus small stack sizes

## Post 152334 by Crake (Patch Note Conspiracy Theorist) — 2025-09-19T04:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152334#p152334 | page 1 | era: pre-1.18.1 -->

> **Nomadin wrote: Fri Sep 19, 2025 1:57 am**
> They sell bags in donation store, thus small stack sizes

For the people who don't understand: This isn't about bag space. it's about the tedium of shift clicking the vendor, typing in 10, and then having to repeat that 14 times to make 2 stacks of dissolvent poison. All other ingredients stack to 20, so that would at least reduce the tedium by half if they matched maiden's tears.

Nobody here is complaining about bag space, that's not the issue.

## Post 152344 by Xudo (Grandmaster of Forum PvP) — 2025-09-19T07:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152344#p152344 | page 1 | era: pre-1.18.1 -->

Try something like this as macro. It buys stack of 20 items in one click. Replace "Poison reagent" with name of your reagent. Should work when you open vendor window. Haven't tested it, though, because can't connect to server atm. Code: Select all

```
/run for i=1, GetMerchantNumItems(), 1 do if GetMerchantItemInfo(i)=='Poison reagent' then BuyMerchantItem(i,20);end;end
```

## Post 152365 by Xudo (Grandmaster of Forum PvP) — 2025-09-19T10:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152365#p152365 | page 1 | era: pre-1.18.1 -->

Tested that macro. Working version is here: Code: Select all

```
/run for i=1, GetMerchantNumItems() do t=GetMerchantItemInfo(i); if t=='Tough Jerky' then BuyMerchantItem(i,99);end;end
```

This macro performs 99 purchases of Tough Jerky. Resulting 495 items in bag in one click.
Item name is case sensitive. If item is sold in stacks, like food, then you specify number of purchases. 4 purchases of 5-stacked food will buy 20 items.
If item sold as individual items, you buy specified amount of items.
You can specify exact number. I tried with Coarse Thread and set amount "41" and I got 2 full stacks of 20 and 1 individual item.

