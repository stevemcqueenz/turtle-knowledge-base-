---
title: "Broken textures"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13904"
topic_id: 13904
forum_id: 3
forum: "Help & Support"
author: "Unselo8"
author_authority: "player"
posted: "2024-05-14T15:10:00Z"
last_post: "2024-05-14T15:26:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:53:22Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Broken textures

## Post 94856 by Unselo8 — 2024-05-14T15:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94856#p94856 | page 1 | era: pre-1.18.1 -->

Why do I have broken textures? I know that you can delete the WTF folder, but after rebooting everything breaks again.
![Image](WoWScrnShot_051424_183416.tga)

## Post 94857 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-05-14T15:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94857#p94857 | page 1 | era: pre-1.18.1 -->

> **Unselo8 wrote: Tue May 14, 2024 3:10 pm**
> Why do I have broken textures? I know that you can delete the WTF folder, but after rebooting everything breaks again.
>  ![Image](WoWScrnShot_051424_183416.tga)

Greetings !
If you're experiencing graphical glitches or low framerate, please go throught the following steps

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

