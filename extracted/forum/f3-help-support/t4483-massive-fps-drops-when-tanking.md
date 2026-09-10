---
title: "Massive fps drops when tanking"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4483"
topic_id: 4483
forum_id: 3
forum: "Help & Support"
author: "Wez266"
author_authority: "player"
posted: "2022-10-06T07:53:00Z"
last_post: "2022-10-06T22:18:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:20:51Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Massive fps drops when tanking

## Post 26819 by Wez266 — 2022-10-06T07:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26819#p26819 | page 1 | era: pre-1.18.1 -->

Heya,

When I was tanking on my paladin for the first time I noticed that when I pulled a few mobs my fps would drop dramatically. Like to the point of unplayable. This happened in Hateforge Quarry, especially in the last part of the dungeon.

I'm not playing on a potato and my pc has never had any issues when I was aoe farming in classic and so on.  It doesn't happen when I play as dps or solo either.
Anyone got any suggestions? Would be greatly appreciated as I'd love to continue tanking.

Thanks in advance!

## Post 26892 by Thol (Barrens Chat Casualty) — 2022-10-06T22:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26892#p26892 | page 1 | era: pre-1.18.1 -->

> **Tinyfin wrote:**
> - [Make sure your using the proper gpu](https://www.howtogeek.com/351522/how-to-choose-which-gpu-a-game-uses-on-windows-10/)
>
> - Try fiddling with in  game the settings:
>     - turning  off hardware cursor ,trilinear filtering,vsync.
>        turning on Vertex Animation Shaders in Video settings.
>        Switching between : windows mode,  and fullscreen.
>
> - [Look into  large address aware](https://www.techpowerup.com/forums/threads/large-address-aware.112556/)
>
> - Change gxApi:
>     - Add this line to your config.wtf found in your WTF Folder
>        Set gxApi "d3d11"
>        Then run the game in windowed full screen mode with Vsync turned on.
>
> - [Try a custom resolution in the  graphic card control panel.](https://www.howtogeek.com/351522/how-to-choose-which-gpu-a-game-uses-on-windows-10/)
>
> - Addons can eat a good chunk of your fps too.Try to disable them.
>
> - Disabling hardware-cursor in the graphics options.
>
> - Try to limit in FPS in your GPU control panel:
>     - For 60/75 Hz monitors, limit FPS to: 64
>        For 120/144/165/240 Hz monitors, limit FPS to: 120

