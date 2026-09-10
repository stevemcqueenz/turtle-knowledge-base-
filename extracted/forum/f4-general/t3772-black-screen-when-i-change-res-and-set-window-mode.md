---
title: "Black Screen when I change Res and set Window Mode"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3772"
topic_id: 3772
forum_id: 4
forum: "General"
author: "Eck"
author_authority: "player"
posted: "2022-08-18T22:35:00Z"
last_post: "2022-08-19T19:30:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:10:46Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Black Screen when I change Res and set Window Mode

## Post 22742 by Eck — 2022-08-18T22:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22742#p22742 | page 1 | era: pre-1.18.1 -->

I get a black screen every time I try to change the res and windowed mode. I'm tired of deleting WTF to fix this. So....I'm gonna leave it as is unless there is a fix somewhere else. like a config file or something to edit? Browsing the config file in WTF I can't spot windowed mode. Im not even sure if that will fix it. Only thing I can think of.

## Post 22750 by Kwayver (Barrens Chat Casualty) — 2022-08-19T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22750#p22750 | page 1 | era: pre-1.18.1 -->

You are most likely running multiple monitors.
There is a setting you can change somewhere that fixes it but I don't recall which file its in... However there is another way to fix this which takes a little more effort.
Unplug your additional monitors then changed to windowed mode. Close wow. Pug your other monitor(s) back in. Should work fine after that

## Post 22752 by Baconbits — 2022-08-19T00:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22752#p22752 | page 1 | era: pre-1.18.1 -->

SET gxWindow "1"
SET gxMaximize "1"

In your config file

## Post 22834 by Eck — 2022-08-19T14:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22834#p22834 | page 1 | era: pre-1.18.1 -->

Thanks for the reply guys and yes I use two monitors. I'll try the fixes when I get home.

## Post 22858 by Eck — 2022-08-19T19:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22858#p22858 | page 1 | era: pre-1.18.1 -->

> **Baconbits wrote: Fri Aug 19, 2022 12:50 am**
> SET gxWindow "1"
>  SET gxMaximize "1"
>
>  In your config file

This worked perfect.

Thanks!

