---
title: "Windowed Mode Doesn't Work"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1064"
topic_id: 1064
forum_id: 3
forum: "Help & Support"
author: "Hotcakes"
author_authority: "player"
posted: "2020-05-22T15:41:00Z"
last_post: "2023-10-01T16:38:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T09:03:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Windowed Mode Doesn't Work

## Post 6096 by Hotcakes — 2020-05-22T15:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6096#p6096 | page 1 | era: pre-1.18.1 -->

I read the other threads but none of those fixed it for me.

At the lowest resolution, when I change to Windowed Mode, the entire game screen is black.

I can alt-tab and I'll see a flicker of the game for a second but then when I click back into the game, it's fully black.

No discord overlay. Any other possible solutions?

## Post 6097 by Optics — 2020-05-22T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6097#p6097 | page 1 | era: pre-1.18.1 -->

Same here.  I tried the other thread about starting at the lowest resolution but no change.   Just black screen no matter what.

## Post 6098 by Optics — 2020-05-22T16:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6098#p6098 | page 1 | era: pre-1.18.1 -->

Update.  Seems the config.wtf file isn't saving the windowed mode setting, resulting in a black screen

Change your resolution to what you like, exit the game and then edit your config.wtf with wordpad and just add this at the bottom

SET gxWindow "1"
SET gxMaximize "1"

if you don't want windowed maximized, and would like windowed with border change gxMaximize to 0 instead of 1.

## Post 6106 by Hotcakes — 2020-05-23T21:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6106#p6106 | page 1 | era: pre-1.18.1 -->

Editing the config.wtf worked, thanks!

## Post 28464 by Lancebro121 — 2022-11-04T19:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28464#p28464 | page 1 | era: pre-1.18.1 -->

thank you i had the same problem this worked heres to reliving azeroth!

## Post 51995 by Rabgel08 — 2023-07-01T07:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51995#p51995 | page 1 | era: pre-1.18.1 -->

Now what about the oppsoite where you have it set already in WIndowed mode and would like to change it back to Fullscreen mode? I get black screen in Fullscreen.

## Post 65098 by Goodgrandpaa — 2023-09-17T20:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=65098#p65098 | page 1 | era: pre-1.18.1 -->

> **Rabgel08 wrote: Sat Jul 01, 2023 7:44 am**
> Now what about the oppsoite where you have it set already in WIndowed mode and would like to change it back to Fullscreen mode? I get black screen in Fullscreen.

To fix this, go into the WTF/config.wtf file using a text editor, find SET gxMaximize "1" and set it to 0 instead, and then either add/edit SET gxWindow "1".

## Post 67946 by Dhrazar (Barrens Chat Casualty) — 2023-10-01T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67946#p67946 | page 1 | era: pre-1.18.1 -->

Can't belive this bug is still present, after 3 years ...

