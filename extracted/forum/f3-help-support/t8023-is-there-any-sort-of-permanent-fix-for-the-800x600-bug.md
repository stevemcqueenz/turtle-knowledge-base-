---
title: "Is there any sort of permanent fix for the 800x600 bug?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8023"
topic_id: 8023
forum_id: 3
forum: "Help & Support"
author: "Sickfoley"
author_authority: "player"
posted: "2023-06-28T01:40:00Z"
last_post: "2023-07-13T03:56:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T09:10:49Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Is there any sort of permanent fix for the 800x600 bug?

## Post 51576 by Sickfoley — 2023-06-28T01:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51576#p51576 | page 1 | era: pre-1.18.1 -->

Every time I go to play Turtle WoW my resolution is locked to 800x600 and I can't change it back to my native res (2560x1440). I found a post that recognizes this bug and says it's caused by having two monitors with different resolutions (I do), but I haven't found any sort of fix other than having to restart my PC every time I want to play the game.

Thanks!

## Post 51597 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-06-28T07:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51597#p51597 | page 1 | era: pre-1.18.1 -->

> **Sickfoley wrote: Wed Jun 28, 2023 1:40 am**
> Every time I go to play Turtle WoW my resolution is locked to 800x600 and I can't change it back to my native res (2560x1440). I found a post that recognizes this bug and says it's caused by having two monitors with different resolutions (I do), but I haven't found any sort of fix other than having to restart my PC every time I want to play the game.
>
>  Thanks!

Hello! There are some tips :
If you don't see the right resolution in your video settings:
∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
∙ Switch to the Windowed Mode in your video settings.
∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)

## Post 51718 by Sickfoley — 2023-06-29T00:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51718#p51718 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Wed Jun 28, 2023 7:31 am**
> ∙ Make sure that the game is using proper GPU and not the integrated one

Pretty sure my igpu is disabled to begin with, it doesn't show up in device manager and I can't enable the option through nvidia control panel (likely because my igpu is disabled).

> ∙ Turn off second monitor

Turning off second monitor doesn't fix it.

> ∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.

This doesn't fix the issue. I have to edit the config.wtf back to 2560x1440 after restarting anyways. If I don't restart after editing config.wtf it just resets it back to 800x600 when I launch the game.

> ∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.

I enabled this, but it doesn't fix the issue. I'm not sure how this is relevant anyways.

> ∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)

This seems super irrelevant to the issue. I'm not trying to use a custom resolution in the first place (couldn't I just set this through nvidia control panel if I wanted to anyways?). I'm just trying to use a standard resolution (2560x1440) but the game is forcing 800x600 until I restart my PC.

Still looking for a solution.

## Post 51769 by Aeternusdoleo — 2023-06-29T10:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51769#p51769 | page 1 | era: pre-1.18.1 -->

Do you have any other applications/games running while WoW is active? I've had some issues in the past when I had another game running in the background (Dyson Sphere Program, but I suspect other games can do this as well when they muck around with the resolution).
Close out any and all other applications as much as possible if so and see if that helps.

## Post 51792 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-06-29T14:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51792#p51792 | page 1 | era: pre-1.18.1 -->

> **Sickfoley wrote: Thu Jun 29, 2023 12:49 am**
> > **Pepesmite wrote: Wed Jun 28, 2023 7:31 am**
> > ∙ Make sure that the game is using proper GPU and not the integrated one
>
>   Pretty sure my igpu is disabled to begin with, it doesn't show up in device manager and I can't enable the option through nvidia control panel (likely because my igpu is disabled).
>
>
> > ∙ Turn off second monitor
>
>   Turning off second monitor doesn't fix it.
>
> > ∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
>
>   This doesn't fix the issue. I have to edit the config.wtf back to 2560x1440 after restarting anyways. If I don't restart after editing config.wtf it just resets it back to 800x600 when I launch the game.
>
> > ∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
>
>   I enabled this, but it doesn't fix the issue. I'm not sure how this is relevant anyways.
>
> > ∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)
>
>   This seems super irrelevant to the issue. I'm not trying to use a custom resolution in the first place (couldn't I just set this through nvidia control panel if I wanted to anyways?). I'm just trying to use a standard resolution (2560x1440) but the game is forcing 800x600 until I restart my PC.
>
>  Still looking for a solution.

Last thing i have : [https://discord.com/channels/4666224558 ... 0708507740](https://discord.com/channels/466622455805378571/691438750185553950/1085596420708507740)

## Post 53242 by Sickfoley — 2023-07-13T02:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53242#p53242 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Thu Jun 29, 2023 2:30 pm**
> Last thing i have : [https://discord.com/channels/4666224558 ... 0708507740](https://discord.com/channels/466622455805378571/691438750185553950/1085596420708507740)

Hm, okay this *did* let me escape 800x600 without restarting for now. Hoping that this remains a permanent fix, thanks.

## Post 53251 by Grybank — 2023-07-13T03:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53251#p53251 | page 1 | era: pre-1.18.1 -->

If You Have dual monitors. Put the one You want to play wow on to the left i Windows setting. Thats the one wow takes resolution from. No mather if the right one is primary monitor.

