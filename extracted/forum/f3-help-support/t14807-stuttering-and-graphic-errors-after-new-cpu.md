---
title: "Stuttering and Graphic errors after new CPU"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14807"
topic_id: 14807
forum_id: 3
forum: "Help & Support"
author: "Heszn1"
author_authority: "player"
posted: "2024-09-07T01:57:00Z"
last_post: "2024-09-08T11:31:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:51:50Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Stuttering and Graphic errors after new CPU

## Post 100843 by Heszn1 — 2024-09-07T01:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100843#p100843 | page 1 | era: pre-1.18.1 -->

Hey i Installed the AMD Ryzen 7 5700x3d today and updated the chipset and bios and every other game runs smooth but my most palyed game right now Turtle WoW not. Before i had a AMD Ryzen 5 1600 and all was good. I even installed a new twow client to test if it was the client i was using, the graphic errors was less but the stuttering is still happening. in My original client had vanillafixes and vanilla tweaks and many addons. on the new client tested with vanilla tweaks and with vanilla fixes both/either didnt work.
best regards
Heszn

## Post 100854 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-09-07T09:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100854#p100854 | page 1 | era: pre-1.18.1 -->

> **Heszn1 wrote: Sat Sep 07, 2024 1:57 am**
> Hey i Installed the AMD Ryzen 7 5700x3d today and updated the chipset and bios and every other game runs smooth but my most palyed game right now Turtle WoW not. Before i had a AMD Ryzen 5 1600 and all was good. I even installed a new twow client to test if it was the client i was using, the graphic errors was less but the stuttering is still happening. in My original client had vanillafixes and vanilla tweaks and many addons. on the new client tested with vanilla tweaks and with vanilla fixes both/either didnt work.
>  best regards
>  Heszn

> If you don't see the right resolution in your video settings:
>
>  ∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
>  ∙ Switch to the Windowed Mode in your video settings.
>  ∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
>  ∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
>  ∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
>  ∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
>  ∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)
>
>  For other issues. Try those methods one by one:
>
>  ∙ Enable Vertext Animation Shaders in WoW Video settings.
>  ∙ If you want to set your framerate higher than 60/75 to 144/240 please edit the game config: WTF > Config.wtf > SET gxRefresh "240"
>  ∙ Try using DXVK to replace the DirectX 9 renderer with Vulkan. This should solve most of the graphical glitches. Download it from here and place the 32 bit dll files in the game folder: <https://github.com/doitsujin/dxvk/releases/tag/v1.10.3>
>  ∙ Try switching between the graphic API as described here: [https://www.mmo-champion.com/threads/68 ... vs-DirectX](https://www.mmo-champion.com/threads/687894-OpenGL-vs-DirectX)
>  ∙ Try using this third-party modification created to eliminate stutter and animation lag: <https://github.com/hannesmann/vanillafixes>

## Post 100857 by Heszn1 — 2024-09-07T11:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100857#p100857 | page 1 | era: pre-1.18.1 -->

Hey i tried everything in your post but nothing works, as i said its most likely a cpu problem because before i had no problems, is the CPU maybe to new für the old client?

## Post 100894 by Allwynd01 (Bug Report Enthusiast) — 2024-09-08T11:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100894#p100894 | page 1 | era: pre-1.18.1 -->

I tried to find out more about that CPU and one of the first results was this article/review that the CPU is a scam:

<https://www.techspot.com/review/2802-amd-ryzen-5700/>

I can't tell you anything else. Maybe you bought a faulty CPU? Do you experience other issues in other games or elsewhere?

I haven't used AMD since 2019 when I bought a PC with Intel CPU + nVidia GPU. Even though my previous PC had AMD CPU and it was OK, I wanted to try something new and I think it was better. At the time I didn't care what manufacturers would the CPU/GPU be, but when the person at the PC store advised me against AMD, I asked why and I was told that AMD were leading to a lot of compatibility issues and while they were cheaper compared to Intel/nVidia and offered the same performance, they had bad drivers and caused a lot of problems. The guy gave me an example about how they built an AMD PC for a kid who wanted to play Fortnite and the PC would cause all kinds of issues and they would take it to the store multiple times until it was set up properly.

That's what I've heard about AMD from other sources too - they offer cheaper hardware compared to Intel/nVidia counterparts, but has the same performance, but it's less stable and has lots of compatibility issues. Recently, I even read news about Windows 11 and AMD issues where Microsoft had to release patches specifically for AMD CPUs so performance could be fixed.

But I also heard that the latest Intel CPUs were also faulty so maybe having an older CPU is really for the better.

I have Intel i5-8400 and never had problems with Turtle WoW. Since spring 2024, I moved to Linux and even now, Turtle WoW works just fine under Linux and Intel i5-8400.

I wouldn't advise you to install your old CPU, but try and find out if your new one is faulty or is it this problem with Windows and new AMD CPUs.

Lastly, try playing Turtle WoW on Linux with the new CPU and see if the performance is still as bad.

