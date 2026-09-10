---
title: "Visual glitches"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11137"
topic_id: 11137
forum_id: 3
forum: "Help & Support"
author: "Tazor"
author_authority: "player"
posted: "2023-10-24T13:16:00Z"
last_post: "2023-10-24T13:31:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:00:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Visual glitches

## Post 73357 by Tazor — 2023-10-24T13:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73357#p73357 | page 1 | era: pre-1.18.1 -->

This randomly happens to me. Only seen this bug in major cities. It looks like the textures on some models are being pulled and stretched. They are also sometimes flashing very quickly between what you see here and normal.

<https://ibb.co/Bcpbbh3>

And another weird visual bug. My character is randomly going invisible. This only happens while indoors. Dungeons included. I also can't hear the sound effects of my spells while the character is invisible.

<https://ibb.co/gJGtj1r>

I have tried deleting the WDB folder. Using nampower, shagu tweaks, vanilla fixes and vanilla tweaks since the start. Aux and pfquest I added later. So I am certain these 2 addons don't cause the issues. Had the issues from the very start.

## Post 73365 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-10-24T13:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73365#p73365 | page 1 | era: pre-1.18.1 -->

> **Tazor wrote: Tue Oct 24, 2023 1:16 pm**
> This randomly happens to me. Only seen this bug in major cities. It looks like the textures on some models are being pulled and stretched. They are also sometimes flashing very quickly between what you see here and normal.
>
>  <https://ibb.co/Bcpbbh3>
>
>  And another weird visual bug. My character is randomly going invisible. This only happens while indoors. Dungeons included. I also can't hear the sound effects of my spells while the character is invisible.
>
>  <https://ibb.co/gJGtj1r>
>
>  I have tried deleting the WDB folder. Using nampower, shagu tweaks, vanilla fixes and vanilla tweaks since the start. Aux and pfquest I added later. So I am certain these 2 addons don't cause the issues. Had the issues from the very start.

Hello!

 **If your game displays nothing but a black screen:**

Please find the config located in your game folder: WoW/WTF/Config.wtf
Open it and add the following lines: SET gxWindow "1" SET gxMaximize "1"
Save it and close it.

 **If you don't see the right resolution in your video settings:**

∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
∙ Switch to the Windowed Mode in your video settings.
∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)

 **For other issues. Try those methods one by one:**

∙ Enable Vertext Animation Shaders in WoW Video settings.
∙ If you want to set your framerate higher than 60/75 to 144/240 please edit the game config: WTF > Config.wtf > SET gxRefresh "240"
∙ Try using DXVK to replace the DirectX 9 renderer with Vulkan. This should solve most of the graphical glitches. Download it from here and place the 32 bit dll files in the game folder: <https://github.com/doitsujin/dxvk/releases/tag/v1.10.3>
∙ Try switching between the graphic API as described here: [https://www.mmo-champion.com/threads/68 ... vs-DirectX](https://www.mmo-champion.com/threads/687894-OpenGL-vs-DirectX)
∙ Try using this third-party modification created to eliminate stutter and animation lag: <https://github.com/hannesmann/vanillafixes>

