---
title: "Black screen"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4172"
topic_id: 4172
forum_id: 3
forum: "Help & Support"
author: "Glowingslow"
author_authority: "player"
posted: "2022-09-12T16:06:00Z"
last_post: "2022-10-02T10:05:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:20:58Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Black screen

## Post 24943 by Glowingslow — 2022-09-12T16:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24943#p24943 | page 1 | era: pre-1.18.1 -->

I get a black screen on launching wow.exe and music is playing in the background, if i click anywhere the screen stops responding. I tried looking into config and see over screen size setting but both are set to "1". Please help.

## Post 24966 by Stonyblony — 2022-09-13T04:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24966#p24966 | page 1 | era: pre-1.18.1 -->

Having the same issue. I was messing with settings and deselected windowed mode. Game went black. deleting config folder yielded no change.

## Post 24971 by Fin (Patch Note Conspiracy Theorist) — 2022-09-13T06:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24971#p24971 | page 1 | era: pre-1.18.1 -->

For black screen:
Go to your config.wtf file found in your wtf folder which is in your main wow folder
Add those lines:
SET gxWindow "1"
SET gxMaximize "1"

## Post 25008 by Stonyblony — 2022-09-14T03:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25008#p25008 | page 1 | era: pre-1.18.1 -->

> **Tinyfin wrote: Tue Sep 13, 2022 6:41 am**
> For black screen:
>  Go to your config.wtf file found in your wtf folder which is in your main wow folder
>  Add those lines:
>  SET gxWindow "1"
>  SET gxMaximize "1"

Thanks for the response, but the OP and I have tried this fix with no success.

I'm still having the issue but found a workaround. I can launch/run the game as administrator to play. It did reset all my settings, but I still get the black screen when I launch/run the game normally.

Is there separate config settings for a user and an admin?

UPDATE/FIX: I found an earlier thread post that mentioned to not store your turtle client folder in Program Files, but directly onto your Drive (i.e. C:/turtle_client_116). This allowed the config.wtf fixes to apply to launching the game normally. This fixed my issue with having to run the game as admin.

## Post 26611 by Akarion — 2022-10-02T10:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26611#p26611 | page 1 | era: pre-1.18.1 -->

> **Tinyfin wrote: Tue Sep 13, 2022 6:41 am**
> For black screen:
>  Go to your config.wtf file found in your wtf folder which is in your main wow folder
>  Add those lines:
>  SET gxWindow "1"
>  SET gxMaximize "1"

For me this solution worked, thanks!

