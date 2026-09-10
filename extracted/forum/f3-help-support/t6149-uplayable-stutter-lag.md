---
title: "Uplayable,stutter,lag..."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6149"
topic_id: 6149
forum_id: 3
forum: "Help & Support"
author: "Ttvmerkyved"
author_authority: "player"
posted: "2023-03-22T20:31:00Z"
last_post: "2023-03-23T23:49:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T09:16:37Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Uplayable,stutter,lag...

## Post 38649 by Ttvmerkyved — 2023-03-22T20:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38649#p38649 | page 1 | era: pre-1.18.1 -->

Downloaded the client yesterday from gdrive,the game is unplayable. Whatever options i found online did not help. Disabling hardware cursor,enabling,disabling vsync,enabling,borderless,fullscreen,nothing works. Im stuck at like 50 fps that ranges up to 90 and there is AN INSANE AMOUNT OF STUTTER.

Specs : 10700k @ 5ghz , RTX 3070, 32GB DDR4 3600MHz.

## Post 38701 by Chubs — 2023-03-23T10:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38701#p38701 | page 1 | era: pre-1.18.1 -->

I have had the same issues which started last night. Have been playing for months but last night my fps has dropped to around 50 from well over 100 and alot of stutter

## Post 38705 by Glarthir (Barrens Chat Casualty) — 2023-03-23T11:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38705#p38705 | page 1 | era: pre-1.18.1 -->

Have been playing on and off for 2 years and haven't experienced this :S

## Post 38715 by Allwynd01 (Bug Report Enthusiast) — 2023-03-23T14:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38715#p38715 | page 1 | era: pre-1.18.1 -->

I've heard that people with newer hardware have more problems than people with older hardware.

## Post 38730 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-23T16:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38730#p38730 | page 1 | era: pre-1.18.1 -->

Your graphics card has absolutely 0 impact on framerate on the vanilla client. The bottleneck is the CPU, not the GPU and the vanilla client isn't optimized for newer hardware in the first place. Doesn't use multi-core, etc.

## Post 38750 by Geojak (Grandmaster of Forum PvP) — 2023-03-23T20:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38750#p38750 | page 1 | era: pre-1.18.1 -->

1. Google vanilla fixes and use that. Is a launcher Software to injects some code at wow launch to make it run smoother
 2. Get dxvk
 3. Check your Hardware temepesrues. I had huge fps issues too until I fixed my CPU ventilation which caused it to overheat and then force slow down.

## Post 38766 by Ttvmerkyved — 2023-03-23T22:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38766#p38766 | page 1 | era: pre-1.18.1 -->

man im not trying to sound like a dick but even wotlk maxed out on my pc uses like 4% of the cpu...let alone vanilla client from 2004. Temps are not the issue. I stream on this pc and while streaming and playing my cpu/gpu temps never go above 60c. The issue is in the client itself. I play classic wow and wrath and also i played warmane servers. Never had issues except here.

## Post 38767 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-23T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38767#p38767 | page 1 | era: pre-1.18.1 -->

I was not suggesting it was not Turtle exclusive, but rather that the problem is exacerbated by the Vanilla client. Turtle is using a great number of assets and implementations that are not 1:1 the way they would have been implemented by Blizzard, and this includes some larger data assets that have been "vanillafied" but not really. Essentially this means that the 2004 client is being asked to load 2010+ assets that have not been properly formatted, and the poorly optimized client thus demands more memory and resources than it is used to working with.

In other words, it is only a problem on Turtle because Turtle is using a vanilla client to do Turtle things.

## Post 38772 by Jubabuba — 2023-03-23T23:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38772#p38772 | page 1 | era: pre-1.18.1 -->

Try limiting your max fps at 120 or lower in your GPU settings for the turtle wow.exe.
Use Fullscreen mode not windowed.
That helped me to solve most of the stutter in game but vanillafixes from github completely removed it. My game now runs smooth like retail classic.
I hope it helps.

Ryzen 5 3600 and rtx 3060 Ti

