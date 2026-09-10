---
title: "Resolution bugged?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4634"
topic_id: 4634
forum_id: 3
forum: "Help & Support"
author: "Kyye"
author_authority: "player"
posted: "2022-10-22T21:37:00Z"
last_post: "2022-10-23T13:37:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:20:26Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Resolution bugged?

## Post 27728 by Kyye — 2022-10-22T21:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27728#p27728 | page 1 | era: pre-1.18.1 -->

I just recently downloaded the game again, I'm unable to play no higher than 1600x1200.
Even maximized window mode sets the resolution to 1600x1200, which is also the highest selectable in the drop down.
halp plz

## Post 27762 by Shamma (Bug Report Enthusiast) — 2022-10-23T13:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27762#p27762 | page 1 | era: pre-1.18.1 -->

Try closing the game and manually editing Config.wtf

Here is what I have in mine:

SET gxWindow "1"
SET gxMaximize "1"
SET hwDetect "0"
SET gxColorBits "24"
SET gxDepthBits "24"
SET gxResolution "1920x1200"
SET gxRefresh "60"
SET gxMultisampleQuality "0.000000"
SET gxFixLag "0"

## Post 27764 by Shamma (Bug Report Enthusiast) — 2022-10-23T13:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27764#p27764 | page 1 | era: pre-1.18.1 -->

> **Kyye wrote: Sat Oct 22, 2022 9:37 pm**
> I just recently downloaded the game again, I'm unable to play no higher than 1600x1200.
>  Even maximized window mode sets the resolution to 1600x1200, which is also the highest selectable in the drop down.
>  halp plz

Try closing the game and manually editing Config.wtf

Here is what I have in mine:

SET gxWindow "1"
SET gxMaximize "1"
SET hwDetect "0"
SET gxColorBits "24"
SET gxDepthBits "24"
SET gxResolution "1920x1200"
SET gxRefresh "60"
SET gxMultisampleQuality "0.000000"
SET gxFixLag "0"

