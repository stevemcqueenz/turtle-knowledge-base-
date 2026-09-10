---
title: "Long black screen when alt tabbing with newest Nvidia drivers"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11031"
topic_id: 11031
forum_id: 3
forum: "Help & Support"
author: "Jagar1"
author_authority: "player"
posted: "2023-10-20T03:42:00Z"
last_post: "2024-10-05T18:28:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:51:21Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Long black screen when alt tabbing with newest Nvidia drivers

## Post 72279 by Jagar1 — 2023-10-20T03:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72279#p72279 | page 1 | era: pre-1.18.1 -->

Hi all,

I recently updated my Nvidia drivers to version 545.84. These are the latest stable game ready drivers provided by Nvidia. However, since updating I've found that when I alt tab or tab back into WoW it now has a 2-3 second delay where I have a black screen. I am able to control my character and use my binds but it's just black. Prior to updating my drivers this black screen only happened for less than a second. Is anyone else experiencing this?

One work-around is to force WoW to use Open GL by adding SET gxApi "opengl" to the config.wtf file. The black screen flashes are nearly instantaneous using this method. However, the drawback using this method is that the performance is greatly decreased. I hardly go above 100FPS now and in major trafficked areas my FPS dips considerably. I'd like to switch back off Open GL again but the extended black screen when alt tabbing is just too annoying to deal with. I guess I multi-task a lot on my other monitors?

A quick rundown of my WoW setup. I have the latest VanillFixes 1.3.1-dxvk installed, Vanilla Tweaks 1.6.0 installed (reinstalled after the Gilneas update), Nampower installed, Classic-Snowfall addon installed, and ImpulseBooster installed. I can list out my other addons if anyone thinks it could be related to one of those as well.

I've tried re-installing the latest VanillaFixes to see if that resolved the issue but, unfortunately, it does not.

Any help would be appreciated!

## Post 72287 by Jagar1 — 2023-10-20T04:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72287#p72287 | page 1 | era: pre-1.18.1 -->

I just tried deleting my WDB folder. No change in behavior sadly.

## Post 73100 by Jagar1 — 2023-10-23T17:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73100#p73100 | page 1 | era: pre-1.18.1 -->

I've also verified in the config.wtf that these two settings are set:

SET gxWindow "1"
SET gxMaximize "1"

No change in behavior.

## Post 73113 by Jagar1 — 2023-10-23T17:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73113#p73113 | page 1 | era: pre-1.18.1 -->

Working with someone in the support channel on Discord it was found that removing the d3d9.dll and dxvk.conf files that VanillaFixes places into your WoW folder fixes the black screen flickering entirely. They mentioned that these files include optimizations to get more FPS in WoW, but as I am already high FPS this was a very acceptable tradeoff. After switching back off of opengl I went from 170-200 FPS to 150-180 in quick tests.

*Last edited by Jagar1 on Fri Oct 27, 2023 4:22 pm, edited 1 time in total.*

## Post 74068 by Korosu — 2023-10-27T00:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74068#p74068 | page 1 | era: pre-1.18.1 -->

The fix to remove d3d9.dll and dxvk.conf files worked for me. Thank you!

## Post 102579 by Oppersjaakforum — 2024-10-05T18:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102579#p102579 | page 1 | era: pre-1.18.1 -->

This worked for me as well! Deleting those files means you are not using Vulkan to render, but the 1 sec black screen on alt-tab was just too annoying for me.

