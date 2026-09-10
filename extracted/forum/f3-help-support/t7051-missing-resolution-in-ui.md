---
title: "Missing Resolution in UI"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7051"
topic_id: 7051
forum_id: 3
forum: "Help & Support"
author: "Pazazz"
author_authority: "player"
posted: "2023-05-06T20:09:00Z"
last_post: "2023-05-06T20:43:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:13:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Missing Resolution in UI

## Post 44733 by Pazazz — 2023-05-06T20:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44733#p44733 | page 1 | era: pre-1.18.1 -->

I am unable to set my resolution to 1920x1080 as it is not an option within the video settings. I have tried turning off my other monitor changing the game between full screen windowed, not windowed etc. and the options do not show up. I have also gone into my NVIDIA settings and enabled resolutions not exposed by the display.

This needs to be fixed, not playable otherwise.

## Post 44734 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-06T20:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44734#p44734 | page 1 | era: pre-1.18.1 -->

Under some setups with multiple monitors, *World of Warcraft* will only detect the **highest available resolution** of one monitor or the other. (Source: *[Reddit](https://www.reddit.com/r/wowservers/comments/asuk1h/vanilla_wow_multiple_monitors_resolution_fix/)*) So, if your main screen is 900p while your second screen is only 4K, your highest selectable resolution is probably still going to be "1440 x 900 (wide)".  There are ways around this.

Play the game in fullscreen mode
- Open your *World of Warcraft* client and log into any character.
- Hit Escape to open the Main Menu, then click on "Video Settings".
- Uncheck "Windowed Mode", then click "Okay".
This method won't make the game render bigger.  Rather, it will make your monitor display in a lower resolution.  It's *essentially* the same difference, but textures will be less smooth.  Failing that, you can also **force** the game to play at 1920 x 1080 mode…

 
Edit the *Config.wtf* file
- Close your *World of Warcraft* client completely.
- Open your *Turtle WoW/WTF/Config.wtf* file in a text editor.
- Find the line "SET gxResolution" and replace whatever's in the quotes with "1920x1080".
- Re-open your *World of Warcraft* client.

 
Use console commands
- Open your *World of Warcraft* client and log into any character.
- Type the following into chat:
 - */console gxResolution 1920x1080*
 - */console gxRestart*

 
Hope this helps!
 **Note:** These may or may not work, depending on how stubborn the client wants to be.

