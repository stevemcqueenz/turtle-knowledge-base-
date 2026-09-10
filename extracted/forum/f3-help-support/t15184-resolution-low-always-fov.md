---
title: "Resolution low/always FoV"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15184"
topic_id: 15184
forum_id: 3
forum: "Help & Support"
author: "paddoh"
author_authority: "player"
posted: "2024-10-14T17:49:00Z"
last_post: "2024-10-19T07:39:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:51:03Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Resolution low/always FoV

## Post 103069 by paddoh — 2024-10-14T17:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=103069#p103069 | page 1 | era: pre-1.18.1 -->

Hello there,
since a few days I cant switch my resolution to more than 1600*1200. Neither in Fullscreen nor in Windowed mode. Can someone Help me maybe?

## Post 103085 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-10-15T07:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=103085#p103085 | page 1 | era: pre-1.18.1 -->

> **paddoh wrote: Mon Oct 14, 2024 5:49 pm**
> Hello there,
>  since a few days I cant switch my resolution to more than 1600*1200. Neither in Fullscreen nor in Windowed mode. Can someone Help me maybe?

Hello!

If you don't see the right resolution in your video settings:

∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
∙ Switch to the Windowed Mode in your video settings.
∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)

## Post 103790 by Szmury — 2024-10-19T07:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=103790#p103790 | page 1 | era: pre-1.18.1 -->

Hey
Had this issue recently, spent like hour on solving.

First check your Nvidia card updates it solved the issue for me.

Also changing cable from display port to HDMI helped.

