---
title: "-Solved- Resolution stuck at 4:3"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16974"
topic_id: 16974
forum_id: 3
forum: "Help & Support"
author: "Tacoloco"
author_authority: "player"
posted: "2025-01-08T02:02:00Z"
last_post: "2025-04-23T19:02:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:44:42Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# -Solved- Resolution stuck at 4:3

## Post 115822 by Tacoloco — 2025-01-08T02:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115822#p115822 | page 1 | era: pre-1.18.1 -->

Could anyone tell me how to expand my resolution to 16:9? best the dropdown gives me is 1600x1200. Is there a way to fix this now that wowFOV is no longer supported? I've tried everything i can find. I am using vanilla tweaks.

*Last edited by Tacoloco on Thu Jan 09, 2025 3:05 am, edited 1 time in total.*

## Post 115836 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-01-08T06:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115836#p115836 | page 1 | era: pre-1.18.1 -->

> **Tacoloco wrote: Wed Jan 08, 2025 2:02 am**
> Could anyone tell me how to expand my resolution to 16:9? best the dropdown gives me is 1600x1200. Is there a way to fix this now that wowFOV is no longer supported? I've tried everything i can find. I am using vanilla tweaks.

Hello!

If you don't see the right resolution in your video settings:

∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
∙ Switch to the Windowed Mode in your video settings.
∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)

## Post 115954 by Tacoloco — 2025-01-09T03:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115954#p115954 | page 1 | era: pre-1.18.1 -->

Thank you for the reply Pepe.
Unfortunately none of these suggestions worked for me, but I did find a workaround. I am using a laptop with an external monitor via displayport. The only thing that worked for me was to mirror the laptop and monitor displays rather than only using the monitor display. Hope that helps someone.

## Post 128189 by mlin2025 — 2025-04-23T19:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128189#p128189 | page 1 | era: pre-1.18.1 -->

Tacoloco, tyvm. I had exactly the same issue and you just saved my day!

