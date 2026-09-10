---
title: "My loading time is taking too long"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3280"
topic_id: 3280
forum_id: 3
forum: "Help & Support"
author: "Zina"
author_authority: "player"
posted: "2022-07-16T01:07:00Z"
last_post: "2023-10-15T05:25:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T09:01:17Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# My loading time is taking too long

## Post 20024 by Zina — 2022-07-16T01:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20024#p20024 | page 1 | era: pre-1.18.1 -->

Takes almost 1 min to complete and if i alt+tab during the load, the game crashes. So i need to wait until is done.
Already tested:
 **#** Default/Low video configs
 **#** Enabled/Disabled Vertex Animations
 **#** Without addons
 **#** 4GB Patch on wow executable
 **#** Swaped from HDD to SSD
 **#** Used the command /console worldPreloadNonCritical 0/1
 **#** Deleted WDB folder

My Specs:
 **GPU:** GTX 1050TI 4GB
 **CPU:** Ryzen 5 5600x
 **RAM:** 16GB
 **OS:** Win 10

*Last edited by Zina on Sat Jul 16, 2022 4:22 pm, edited 2 times in total.*

## Post 20026 by Gurky (Barrens Chat Casualty) — 2022-07-16T01:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20026#p20026 | page 1 | era: pre-1.18.1 -->

This would be most likely addon related, try to disable them and see if the same thing happens. If it doesn't you'll need to figure out what addon does this and replace it with something a little more lightweight.

## Post 20029 by Zina — 2022-07-16T02:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20029#p20029 | page 1 | era: pre-1.18.1 -->

> **Gurky wrote: Sat Jul 16, 2022 1:10 am**
> This would be most likely addon related, try to disable them and see if the same thing happens. If it doesn't you'll need to figure out what addon does this and replace it with something a little more lightweight.

I tested it again and occurs the same thing. Also, i deleted my addons folder and swaped to a fresh addons folder from turtle wow .zip

## Post 20035 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-16T09:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20035#p20035 | page 1 | era: pre-1.18.1 -->

Honestly, my load times are a bit on the heavy side, too.  Even with all my AddOns completely disabled, the load times are unexpectedly high for a game as old as this one.  Here's some of my statistics:

With no AddOns
- **Opening the EXE:** ~3 seconds
- **Playing a character:** ~22 seconds
 - **New character cinematics*:**~22 seconds + ~11 seconds (if skipping)
- **Teleporting across the continent**:** ~7 seconds
- **Teleporting to the other continent**:** ~17 seconds
 * Tested with a human in Elwynn Forest.  Load times may vary elsewhere.
 ** Tested with a Forsaken going from Tirisfal to Stranglethorn, then Stranglethorn to Durotar.

 
With my usual AddOns (less than 128 MB usage, usually)
- **Opening the EXE:** ~3 seconds (no impact)
- **Playing a character:** ~29 seconds
 - **New character cinematics*:**~23 seconds + ~ 17 seconds (if skipping)
- **Teleporting across the continent**:** ~7 seconds
- **Teleporting to the other continent**:** ~17 seconds (no impact?)
 * Tested with a human in Elwynn Forest.  Load times may vary elsewhere.
 ** Tested with a Forsaken going from Tirisfal to Stranglethorn, then Stranglethorn to Durotar.

 
If it helps, I'm running it from an internal SSD, 8 GB of RAM (shared with the video card), and a quad-core processor at 2.30 GHz.

## Post 20049 by Zina — 2022-07-16T16:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20049#p20049 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Sat Jul 16, 2022 9:01 am**
> Honestly, my load times are a bit on the heavy side, too.  Even with all my AddOns completely disabled, the load times are unexpectedly high for a game as old as this one.  Here's some of my statistics:
>
>  With no AddOns
> - **Opening the EXE:** ~3 seconds
> - **Playing a character:** ~22 seconds
>     - **New character cinematics*:**~22 seconds + ~11 seconds (if skipping)
> - **Teleporting across the continent**:** ~7 seconds
> - **Teleporting to the other continent**:** ~17 seconds
>  * Tested with a human in Elwynn Forest.  Load times may vary elsewhere.
>  ** Tested with a Forsaken going from Tirisfal to Stranglethorn, then Stranglethorn to Durotar.
>
>
>   
>  With my usual AddOns (less than 128 MB usage, usually)
> - **Opening the EXE:** ~3 seconds (no impact)
> - **Playing a character:** ~29 seconds
>     - **New character cinematics*:**~23 seconds + ~ 17 seconds (if skipping)
> - **Teleporting across the continent**:** ~7 seconds
> - **Teleporting to the other continent**:** ~17 seconds (no impact?)
>  * Tested with a human in Elwynn Forest.  Load times may vary elsewhere.
>  ** Tested with a Forsaken going from Tirisfal to Stranglethorn, then Stranglethorn to Durotar.
>
>
>   
>  If it helps, I'm running it from an internal SSD, 8 GB of RAM (shared with the video card), and a quad-core processor at 2.30 GHz.

Do you already tested "/console worldPreloadNonCritical 0" command? To revert it just put 1 instead 0.
For me its almost the same thing, but maybe can be different for you

## Post 20052 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-16T16:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20052#p20052 | page 1 | era: pre-1.18.1 -->

That didn't appear to do much of anything, sadly.  What *did* make a massive difference, however, was turning the Terrain Distance down as low as it'll go.  My load time in Northshire Valley went from 22-23 seconds to a surprising **16** seconds.  Once that load bar was full, I was pretty much instantly in the game.

I get the feeling the original *World of Warcraft* may not have been the most finely-optimized thing out there, in 2004…

## Post 70848 by Snnail — 2023-10-15T00:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70848#p70848 | page 1 | era: pre-1.18.1 -->

I have same issue, have you found a solution yet?TIA

## Post 70874 by Elisleris (Bug Report Enthusiast) — 2023-10-15T05:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70874#p70874 | page 1 | era: pre-1.18.1 -->

Use VanillaFixes <https://github.com/hannesmann/vanillafixes/releases>
With that mod, loading time took few seconds for me.

