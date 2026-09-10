---
title: "Refresh rate"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19469"
topic_id: 19469
forum_id: 3
forum: "Help & Support"
author: "Lazylautrec"
author_authority: "player"
posted: "2025-05-21T22:54:00Z"
last_post: "2025-05-22T01:32:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:43:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Refresh rate

## Post 132448 by Lazylautrec — 2025-05-21T22:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132448#p132448 | page 1 | era: pre-1.18.1 -->

Im trying to get my friend on Twow but I cant get his Hz past 75 I did what I did with mine with editing it in notepad but his doesnt work and always reverts back to 75hz. Ive messed with his monitor, gpu settings, and firewall. I got it to work by launching the game through Exe but by doing that he cant use addons. I copied everything I did with mine but cant get his to work at all. any help would be amazing.

## Post 132464 by Sleeptime (Turtle WoW Team) [STAFF] — 2025-05-22T01:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132464#p132464 | page 1 | era: pre-1.18.1 -->

Hey there,

If you don't see the right resolution in your video settings:

∙ Enable DXVK in the launcher and see if that resolves the issue
∙ MultiMonitorFix as well Even 4K at 240 Hz (3840×2160) should cause no issues at all if you enable DXVK
∙ Unplug your other monitors, launch the game and see if that fixes it

If none of those solutions work try:
∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
∙ Switch to the Windowed Mode in your video settings.
∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)

If none of this helps, I suggest you visit our Discord support channel ([https://discord.com/channels/4666224558 ... 0185553950](https://discord.com/channels/466622455805378571/691438750185553950))

