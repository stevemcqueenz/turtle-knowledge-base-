---
title: "Can't change refresh rate to 144hz"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15307"
topic_id: 15307
forum_id: 3
forum: "Help & Support"
author: "Glirion"
author_authority: "player"
posted: "2024-10-23T07:03:00Z"
last_post: "2024-10-23T08:10:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:50:58Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Can't change refresh rate to 144hz

## Post 104486 by Glirion — 2024-10-23T07:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104486#p104486 | page 1 | era: pre-1.18.1 -->

Hi, I'm trying to set my refresh rate to 144hz in twow, but I don't have the option ingame and changing it in the config file causes the game to crash on startup. (I'm using Lutris to start the game)
I am using Linux Mint 22 Cinnamon version 6.2.9.
I am using two monitors, other one is 75hz and the main one is 144hz.

## Post 104488 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-10-23T07:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104488#p104488 | page 1 | era: pre-1.18.1 -->

> **Glirion wrote: Wed Oct 23, 2024 7:03 am**
> Hi, I'm trying to set my refresh rate to 144hz in twow, but I don't have the option ingame and changing it in the config file causes the game to crash on startup. (I'm using Lutris to start the game)
>  I am using Linux Mint 22 Cinnamon version 6.2.9.
>  I am using two monitors, other one is 75hz and the main one is 144hz.

Hello!
∙ If you want to set your framerate higher than 60/75 to 144/240 please edit the game config: WTF > Config.wtf > SET gxRefresh "240"

## Post 104492 by Glirion — 2024-10-23T07:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104492#p104492 | page 1 | era: pre-1.18.1 -->

I tried that and the changes don't stick and revert back to 60.

## Post 104496 by Glirion — 2024-10-23T07:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104496#p104496 | page 1 | era: pre-1.18.1 -->

I did a full re-install, changed the config and restarted and it seems like its working properly now.

## Post 104504 by xebecfumbling — 2024-10-23T08:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104504#p104504 | page 1 | era: pre-1.18.1 -->

Open a terminal and use the xrandr tool to manually set your 144Hz monitor to the correct refresh rate before launching the game.

