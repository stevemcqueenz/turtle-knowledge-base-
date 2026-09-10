---
title: "Resolution"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5444"
topic_id: 5444
forum_id: 4
forum: "General"
author: "Zonk"
author_authority: "player"
posted: "2023-01-27T16:46:00Z"
last_post: "2023-02-13T18:31:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:08:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Resolution

## Post 33296 by Zonk — 2023-01-27T16:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33296#p33296 | page 1 | era: pre-1.18.1 -->

Is there a way to set a 16:9 resolution?

## Post 33298 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-01-27T17:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33298#p33298 | page 1 | era: pre-1.18.1 -->

Sure is. If for some reason you are unable to set it in your client (you should be), then you can try to force it by manually editing your WTF/config.wtf file and putting correct values there, eg.:
Code: Select all

```
SET gxResolution "1920x1080"
```

Also there is a widescreen FoV patch available (WoWFoV.exe).

## Post 33473 by Zonk — 2023-01-29T17:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33473#p33473 | page 1 | era: pre-1.18.1 -->

Found discord and worked through this:

If you don't see the right resolution in your video settings:

∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
 *Have no GPU CPIU*

∙ Switch to the Windowed Mode in your video settings.
 *done*

∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
 *have only one monitor*

∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
 *Done but game resets to 800x600 if i launch it!*

∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
 *is already set. disabling dies no change*

∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)
 *no multi monotor or radeon here*

Any further solution attemps?  At this point i get ignored on DC   scared_turtle_head
Are there maybe other folders interupting like installation and settings form blizzard?

## Post 33474 by Zonk — 2023-01-29T17:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33474#p33474 | page 1 | era: pre-1.18.1 -->

I unplugged the hdmi from the external 5.1 soundsytem and resolution fixed itself.
Seems like it was recogniced a s a sort of a monitor too

## Post 34721 by Gord44 — 2023-02-13T18:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34721#p34721 | page 1 | era: pre-1.18.1 -->

have this same issue. sadly manually setting it doesn't do anything. tried the other fixes as well. max i can go is 1600x900. i mean it's playable, but odd that i can't get 1980 res.

