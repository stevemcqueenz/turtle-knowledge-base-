---
title: "Graphical settings higher than GUI's Max"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14584"
topic_id: 14584
forum_id: 18
forum: "AddOns"
author: "Doglord"
author_authority: "player"
posted: "2024-07-15T07:25:00Z"
last_post: "2024-07-16T11:54:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:28:39Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Graphical settings higher than GUI's Max

## Post 99486 by Doglord — 2024-07-15T07:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99486#p99486 | page 1 | era: pre-1.18.1 -->

Are there working commands that increase grass and ground clutter further than the max settings?

Thanx

## Post 99508 by Ibux (Patch Note Conspiracy Theorist) — 2024-07-15T13:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99508#p99508 | page 1 | era: pre-1.18.1 -->

you can check the command list here:

[embed: https://docs.google.com/spreadsheets/d/17bXs9WhOkP8Zknl1GYXCFVdHYOdgxoRFrIe7Os3BtRo/preview#gid=0]

there are also some addons that might be of use like this one
<https://github.com/mrrosh/VanillaGraphicBoost>

## Post 99536 by Itorch100 (Barrens Chat Casualty) — 2024-07-15T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99536#p99536 | page 1 | era: pre-1.18.1 -->

I suggest you take a look at [VanillaTweaks](https://forum.turtlecraft.gg/viewtopic.php?t=3268) :) Improved the look of my game by a ton

## Post 99543 by Doglord — 2024-07-15T19:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99543#p99543 | page 1 | era: pre-1.18.1 -->

> **Itorch100 wrote: Mon Jul 15, 2024 4:49 pm**
> I suggest you take a look at [VanillaTweaks](https://forum.turtlecraft.gg/viewtopic.php?t=3268) :) Improved the look of my game by a ton

Im sorry but i did absolutely nothing to make the game render further away than the maximum thats already been set from GUI. At least nothing noticeable.

## Post 99546 by Doglord — 2024-07-15T19:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99546#p99546 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Mon Jul 15, 2024 1:01 pm**
> you can check the command list here:
>
> [embed: https://docs.google.com/spreadsheets/d/17bXs9WhOkP8Zknl1GYXCFVdHYOdgxoRFrIe7Os3BtRo/preview#gid=0]
>
>
>  there are also some addons that might be of use like this one
>  <https://github.com/mrrosh/VanillaGraphicBoost>

Thanx, the game already is set at max values (or so it seems).

So in other words, there is no chance rendering ground clutter/doodads further away.

## Post 99616 by Alchemister — 2024-07-16T09:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99616#p99616 | page 1 | era: pre-1.18.1 -->

> **Doglord wrote: Mon Jul 15, 2024 7:26 pm**
> So in other words, there is no chance rendering ground clutter/doodads further away.

With Vanila-Tweaks you can modify **frilldistance** variable to increase rendering distance of flowers/grass. Default game value is 70. Default Vanila-Tweaks value is 300. Also **/console frilldensity 256** can increase grass density

## Post 99625 by Itorch100 (Barrens Chat Casualty) — 2024-07-16T11:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99625#p99625 | page 1 | era: pre-1.18.1 -->

It doesn't modify your game out of the box (maybe some changes I'm not sure). Do check the usage on its' github page, you can modify the frilldistance and density, as well as some other values that have a hard cap via ingame settings. It really does make a huge difference.

Do note that it can be a hit on performance, so you might need to find a sweet spot that would work for you :)

