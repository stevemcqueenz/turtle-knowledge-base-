---
title: "Video settings reset"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10784"
topic_id: 10784
forum_id: 3
forum: "Help & Support"
author: "Melonwow"
author_authority: "player"
posted: "2023-10-12T07:31:00Z"
last_post: "2024-11-21T09:22:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T08:49:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Video settings reset

## Post 70307 by Melonwow — 2023-10-12T07:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70307#p70307 | page 1 | era: pre-1.18.1 -->

Steps:
 1. set resolution to 1920*1080 and maxsize window mode
 2. change wheather display level and others video setting options

Then I can play a perfect game for a while

 3. if it gets a blue loading screen, all video settings effect will be reset(values not changed), especially the resolution annoyed me, seems to be the 800*600 effect.
e.g. run /rl, map changed, dungeons in-out...

 4. workround is that esc key> video setting popup>click OK directly then resolution get normal effect

NOTES: I am using the PFUI

## Post 70353 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-10-12T14:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70353#p70353 | page 1 | era: pre-1.18.1 -->

> **Melonwow wrote: Thu Oct 12, 2023 7:31 am**
> Steps:
>  1. set resolution to 1920*1080 and maxsize window mode
>  2. change wheather display level and others video setting options
>
>  Then I can play a perfect game for a while
>
>  3. if it gets a blue loading screen, all video settings effect will be reset(values not changed), especially the resolution annoyed me, seems to be the 800*600 effect.
>  e.g. run /rl, map changed, dungeons in-out...
>
>  4. workround is that esc key> video setting popup>click OK directly then resolution get normal effect
>
>
>  NOTES: I am using the PFUI

Hello! Here is some tips.

If your game displays nothing but a black screen:

Please find the config located in your game folder: WoW/WTF/Config.wtf
Open it and add the following lines: SET gxWindow "1" SET gxMaximize "1"
Save it and close it.

If you don't see the right resolution in your video settings:

∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
∙ Switch to the Windowed Mode in your video settings.
∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)

For other issues. Try those methods one by one:

∙ Enable Vertext Animation Shaders in WoW Video settings.
∙ If you want to set your framerate higher than 60/75 to 144/240 please edit the game config: WTF > Config.wtf > SET gxRefresh "240"
∙ Try using DXVK to replace the DirectX 9 renderer with Vulkan. This should solve most of the graphical glitches. Download it from here and place the 32 bit dll files in the game folder: <https://github.com/doitsujin/dxvk/releases/tag/v1.10.3>
∙ Try switching between the graphic API as described here: [https://www.mmo-champion.com/threads/68 ... vs-DirectX](https://www.mmo-champion.com/threads/687894-OpenGL-vs-DirectX)
∙ Try using this third-party modification created to eliminate stutter and animation lag: <https://github.com/hannesmann/vanillafixes>

## Post 70522 by Melonwow — 2023-10-13T06:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70522#p70522 | page 1 | era: pre-1.18.1 -->

Hi Pepesmite, thank you for your reply!
but it won't fix my problems sadly - my video settings are reseted after loading screen

## Post 70536 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-10-13T08:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70536#p70536 | page 1 | era: pre-1.18.1 -->

> **Melonwow wrote: Fri Oct 13, 2023 6:41 am**
> Hi Pepesmite, thank you for your reply!
>  but it won't fix my problems sadly - my video settings are reseted after loading screen

Greetings!
Make sure your game folder is not write-protected.
Open the properties of the folder and uncheck the "read-only" option

## Post 70779 by Melonwow — 2023-10-14T15:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70779#p70779 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Fri Oct 13, 2023 8:08 am**
> Greetings!
>  Make sure your game folder is not write-protected.
>  Open the properties of the folder and uncheck the "read-only" option

It doesn't work as well...

## Post 71468 by Melonwow — 2023-10-17T13:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71468#p71468 | page 1 | era: pre-1.18.1 -->

Anyone encountered this as well?

## Post 71495 by Paw (Bug Report Enthusiast) — 2023-10-17T14:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71495#p71495 | page 1 | era: pre-1.18.1 -->

Hello-bello! All I can think of is that ur using Window mode which is cool but then u need to set ur desktop similarly or not and then I think u are experiencing such an extremely simple problem that you just overlook for it is too obvious but I'm not you. When one makes a grammar mistake you can tell that their focus is not in its right place. PsichologistPaw out.

## Post 71705 by Melonwow — 2023-10-17T23:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71705#p71705 | page 1 | era: pre-1.18.1 -->

I find the solution, it is a PFUI setting conflict: change the UI scale to off
 - PFUI setting > Settings > General > Enable UI-Scale > Off

## Post 83109 by Schwarzschild (Barrens Chat Casualty) — 2023-12-29T17:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83109#p83109 | page 1 | era: pre-1.18.1 -->

> **Melonwow wrote: Tue Oct 17, 2023 11:24 pm**
> I find the solution, it is a PFUI setting conflict: change the UI scale to off
>  - PFUI setting > Settings > General > Enable UI-Scale > Off

^That helped! THX!

## Post 109167 by Fetza — 2024-11-21T09:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109167#p109167 | page 1 | era: pre-1.18.1 -->

Hey guys!
I feel like this bug appeared for me after the Turtle WoW Launcher release. My problem is every graphic settings are saved except Terrain Distance and the Enable All Shader Effects. I just want to dicrease the Terrain Distance and tick off the Enable All Shader Effects but these two keeps resetting to default with every log-in.
I think I did everything what I read on the forum under different posts. I ticked off the Read-only, run the game as administrator, did pfui ui-scale off and waited in-game and after the log-out on the log-in screen after set those mentioned things for a while but nothing helped. My folder is in the right location (I mean there were some problems with the game locations as I read some posts).
Does someone have a tip or any idea what I can do for solving this problem?

