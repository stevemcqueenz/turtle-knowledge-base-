---
title: "Trouble with resolution"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11967"
topic_id: 11967
forum_id: 3
forum: "Help & Support"
author: "Jamjag"
author_authority: "player"
posted: "2023-11-29T04:34:00Z"
last_post: "2023-11-29T08:59:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:57:47Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Trouble with resolution

## Post 79208 by Jamjag — 2023-11-29T04:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79208#p79208 | page 1 | era: pre-1.18.1 -->

Hi there, I accidentally started the game using the wowFOV.exe and now when I use the regular shortcut it's still very stretched out.  Can anyone help me figure out how to reset so I can use the standard wow.exe?  Thanks!

## Post 79237 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-11-29T08:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79237#p79237 | page 1 | era: pre-1.18.1 -->

> **Jamjag wrote: Wed Nov 29, 2023 4:34 am**
> Hi there, I accidentally started the game using the wowFOV.exe and now when I use the regular shortcut it's still very stretched out.  Can anyone help me figure out how to reset so I can use the standard wow.exe?  Thanks!

Hello!
If you don't see the right resolution in your video settings:

∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
∙ Switch to the Windowed Mode in your video settings.
∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)

