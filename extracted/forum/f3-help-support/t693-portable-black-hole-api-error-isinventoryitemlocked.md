---
title: "Portable Black Hole API error IsInventoryItemLocked()"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=693"
topic_id: 693
forum_id: 3
forum: "Help & Support"
author: "Lefaux"
author_authority: "player"
posted: "2019-07-24T16:06:00Z"
last_post: "2019-07-25T13:06:00Z"
post_count: 14
pages: 1
fetched: "2026-09-10T09:30:49Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Portable Black Hole API error IsInventoryItemLocked()

## Post 3528 by Lefaux — 2019-07-24T16:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3528#p3528 | page 1 | era: pre-1.18.1 -->

It seems that the API call Code: Select all

```
IsInventoryItemLocked()
```

fails on high bag slot ids.

I have 4 PBH on me and if I sort Trinkets to the bottom bag, [GearMenu](https://github.com/RagedUnicorn/wow-vanilla-gearmenu) throws an LUA error.

Is this something that's purely client side or something that can be fixed on the server side of things?

## Post 3529 by Torta (Turtle WoW Team) [STAFF] — 2019-07-24T16:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3529#p3529 | page 1 | era: pre-1.18.1 -->

Hello! What's does the error say exactly?

## Post 3531 by Lefaux — 2019-07-24T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3531#p3531 | page 1 | era: pre-1.18.1 -->

Code: Select all

```
Error: Interface\AddOns\GearMenu\Code\GM_ItemHelper.lua:186: Invalid inventory slot in IsInventoryItemLocked
```

## Post 3532 by Lefaux — 2019-07-24T17:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3532#p3532 | page 1 | era: pre-1.18.1 -->

I wonder whether IsInventoryItemLocked has an upper bound so it can only return integers between 1 and 112 (28 Slots bags like Soulbags, Miningbags etc.)

With the 4 PBHs I get above that number.

## Post 3534 by Torta (Turtle WoW Team) [STAFF] — 2019-07-24T18:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3534#p3534 | page 1 | era: pre-1.18.1 -->

Please, execute 5 commands in game and show the output of each of them:
Code: Select all

```
/script local t = GetContainerNumSlots(0) print(t)
/script local t = GetContainerNumSlots(1) print(t)
/script local t = GetContainerNumSlots(2) print(t)
/script local t = GetContainerNumSlots(3) print(t)
/script local t = GetContainerNumSlots(4) print(t)
```

## Post 3537 by Sinrek (Grandmaster of Forum PvP) — 2019-07-24T19:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3537#p3537 | page 1 | era: pre-1.18.1 -->

I've had a similar problem with my EngBags addon with those bags. I just had to ditch the addon after all the attempts for fixing it.

## Post 3538 by Lefaux — 2019-07-24T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3538#p3538 | page 1 | era: pre-1.18.1 -->

Code: Select all

```
16
36
36
36
36
```

Did some more testing and GearMenu breaks on the last 13 slots of my last bag.
My Bag Order is:
 - Backpack
 - PBH
 - PBH
 - PBH
 - PBH

So much like the container size script you asked me to execute

P.S. thanks for taking the time

## Post 3543 by Torta (Turtle WoW Team) [STAFF] — 2019-07-24T22:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3543#p3543 | page 1 | era: pre-1.18.1 -->

Pompa said he is fixing your addon x) It will ignore IsInventoryItemLocked() check for the last 8 slots.

What happens if you place any item in the last slot of your last bag and then run a command?
Code: Select all

```
/script local link = GetContainerItemLink(4, 36) print(link)
```

## Post 3548 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-24T22:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3548#p3548 | page 1 | era: pre-1.18.1 -->

Yup, it's now "fixed" Lefaux, grab it here: [viewtopic.php?f=18&t=690&p=3508](https://forum.turtlecraft.gg/viewtopic.php?f=18&t=690&p=3508)

The issue is that `IsInventoryItemLocked` function will only work for bags up to 28 slots.

## Post 3552 by Lefaux — 2019-07-25T05:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3552#p3552 | page 1 | era: pre-1.18.1 -->

hm... where do I start...

I guess "THANK YOU" doesn't cut it.

I was expecting a simple "yeah, that's a limitation of the gameclient", but fixing the Addon is way beyond my expectations.

To answer your question Torta, the API call you wanted me to do yields the Chatlink to the item in that slot, much like we'd expect.

On another note:
My background is in Web-Development and I wonder if you folks could use help.
I can't think of another way (other than donating which I kinda do already) how to thank you for your support, so I'll try it with offering help.

## Post 3553 by Torta (Turtle WoW Team) [STAFF] — 2019-07-25T06:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3553#p3553 | page 1 | era: pre-1.18.1 -->

> **Lefaux wrote: Thu Jul 25, 2019 5:48 am**
> On another note:
>  My background is in Web-Development and I wonder if you folks could use help.
>  I can't think of another way (other than donating which I kinda do already) how to thank you for your support, so I'll try it with offering help.

Would you be interesting to work on something like <https://github.com/mangostools/aowow> or <https://github.com/MarkusNemesis/vanillawowdb> for Turtle WoW? It could be a fork of AoWoW or entirely new thing, but I think there's no real need to reinvent the wheel once again.

We have custom content and items, would be nice to have an interface to search throught it.

Big thanks for offering help :)

## Post 3558 by Lefaux — 2019-07-25T11:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3558#p3558 | page 1 | era: pre-1.18.1 -->

from a quick glimpse this looks like "TurtleHead", did I get that right?

Since it's PHP (which is my goto language) yes, that is something I could help with.
I'd try to get the search faster, though, since I know my way around Elasticsearch.

## Post 3559 by Lefaux — 2019-07-25T11:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3559#p3559 | page 1 | era: pre-1.18.1 -->

just looked through the code.
I WILL reinvent the wheel here because the codebase is... well... it sucked back in the day when it was written.
But I know what needs to be done.
I'd recycle as much as I can from the entity structure to keep it compatible with existing exporters and stuff, but I'd rather have a clean Symfony4 underneath that :D

In the end... it needs to be maintainable

## Post 3560 by Torta (Turtle WoW Team) [STAFF] — 2019-07-25T13:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3560#p3560 | page 1 | era: pre-1.18.1 -->

![Image](https://thumbs.gfycat.com/ThunderousUnitedKatydid-small.gif)

