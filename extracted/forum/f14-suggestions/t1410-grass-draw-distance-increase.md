---
title: "grass draw distance increase?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1410"
topic_id: 1410
forum_id: 14
forum: "Suggestions"
author: "Wtfsalame"
author_authority: "player"
posted: "2020-11-29T02:32:00Z"
last_post: "2020-11-30T12:26:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T12:42:07Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# grass draw distance increase?

## Post 8582 by Wtfsalame — 2020-11-29T02:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8582#p8582 | page 1 | era: pre-1.18.1 -->

Is there a way to increase just the environmental detail distance on server side? I've maxed it on client side using console commands (farclip/horizonfarclip/etc) but it still looks weird when I can see trees/walls/units but no grass detail at certain distances.

## Post 8583 by Roxanneflowers (Patch Note Conspiracy Theorist) — 2020-11-29T04:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8583#p8583 | page 1 | era: pre-1.18.1 -->

Limitation of a game engine that was designed almost 20 years ago.

Yes, Unreal Engine 5 does this better.
Go figure ...

## Post 8584 by Weilan — 2020-11-30T11:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8584#p8584 | page 1 | era: pre-1.18.1 -->

> **Roxanneflowers wrote: Sun Nov 29, 2020 4:20 am**
> Limitation of a game engine that was designed almost 20 years ago.
>
>  Yes, Unreal Engine 5 does this better.
>  Go figure ...

Honestly WoW 3.3.5 WoTLK has a program called WMT (WoW Machinima Tool), which allows you to enter free camera mode, change the time of day, select the environment colors (Elwynn Forest being clear and Duskwood looking gloomy even during the day) and with it you can make Eastern Plaguelands or Felwood look nicer and more clear, you can have day in the game when the server time is 22:30, etc.

And most importantly, you can adjust farclip distance so much that you can see Booty Bay from Undercity. I think there was also an option for vegetation density too.

The thing is this tool was invented years after WoW launched so there is nothing like that for Vanilla, which I think sucks. The tool works with WoTLK, CATA and Pandaria, after that it stopped development, because Activision B got cucky.

## Post 8586 by Unangwata (Patch Note Conspiracy Theorist) — 2020-11-30T12:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8586#p8586 | page 1 | era: pre-1.18.1 -->

I wonder if vegetation density and distance could be tweaked in settings files ?

edit:
I found
SET frillDensity "48"
SET farclip "777"

In WTF folder in Config.wtf
I guess these are max values that client sets. Possibly accepts higher, you could play with that.
I doubled the values and didn't see much change and buildings started to disappear..

