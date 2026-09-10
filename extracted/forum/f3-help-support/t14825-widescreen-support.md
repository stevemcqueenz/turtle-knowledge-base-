---
title: "Widescreen support"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14825"
topic_id: 14825
forum_id: 3
forum: "Help & Support"
author: "Levoc"
author_authority: "player"
posted: "2024-09-09T11:02:00Z"
last_post: "2024-11-01T15:22:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:50:47Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Widescreen support

## Post 100939 by Levoc — 2024-09-09T11:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100939#p100939 | page 1 | era: pre-1.18.1 -->

Hello I'm trying to play turtle wow on my 1440p monitor but despite trying many things I saw on other threads such as vanillatweaks, vanillafixes, setting config.wtf, special k d3d9 library, I still cannot get turtle wow to recognize 1440p resolution. It only shows up to 1920x1080 and its stretched in both Wow.exe and WowFoV.exe. Can anyone help in regards to this?

## Post 100948 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-09-09T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100948#p100948 | page 1 | era: pre-1.18.1 -->

> **Levoc wrote: Mon Sep 09, 2024 11:02 am**
> Hello I'm trying to play turtle wow on my 1440p monitor but despite trying many things I saw on other threads such as vanillatweaks, vanillafixes, setting config.wtf, special k d3d9 library, I still cannot get turtle wow to recognize 1440p resolution. It only shows up to 1920x1080 and its stretched in both Wow.exe and WowFoV.exe. Can anyone help in regards to this?

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

## Post 105646 by Stanleytweedle — 2024-10-31T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105646#p105646 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Mon Sep 09, 2024 1:50 pm**
> ∙ Try using this third-party modification created to eliminate stutter and animation lag: <https://github.com/hannesmann/vanillafixes>

Is there another source for this? I can't get any browser to download it (Brave, Vivaldi, Edge, Waterfox, Firefox, Chrome), everything flags it as a virus and even disabling all protections they *still* prevent the download with no option to force it. I don't have a clue how to go about compiling it myself, that isn't really something I want to get into.

## Post 105787 by Pterop — 2024-11-01T15:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105787#p105787 | page 1 | era: pre-1.18.1 -->

I downloaded it through the Firefox, after disabling windows real-time protection. Also DXVK version no longer works on newest nvidia drivers its fine on AMD.

