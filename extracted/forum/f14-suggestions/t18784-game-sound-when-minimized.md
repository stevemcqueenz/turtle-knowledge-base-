---
title: "Game sound when minimized"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18784"
topic_id: 18784
forum_id: 14
forum: "Suggestions"
author: "boxcar221"
author_authority: "player"
posted: "2025-04-21T15:45:00Z"
last_post: "2025-09-09T05:43:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T11:17:13Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Game sound when minimized

## Post 127841 by boxcar221 (Barrens Chat Casualty) — 2025-04-21T15:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127841#p127841 | page 1 | era: pre-1.18.1 -->

I don't know if this is a sensible topic or not, but I strongly suggest having an option to have in-game sound while the window is minimized, simple as that. I don't know if this is possible at all, or if devs want to implement this feature, but i think i'm not the only one missing this.

## Post 127852 by Azcron (Patch Note Conspiracy Theorist) — 2025-04-21T17:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127852#p127852 | page 1 | era: pre-1.18.1 -->

It already does this? I'm not sure if I have something enabled in the options but game sound still play in the background when I have it minimized.

## Post 127914 by boxcar221 (Barrens Chat Casualty) — 2025-04-22T05:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127914#p127914 | page 1 | era: pre-1.18.1 -->

> **Azcron wrote: Mon Apr 21, 2025 5:24 pm**
> It already does this? I'm not sure if I have something enabled in the options but game sound still play in the background when I have it minimized.

I have my screen set as 1080p maximized window, (I think this should matter) and in the sound settings, there is no checkbox.
Do you play full screen?

## Post 127918 by Wolf of Rage (Patch Note Conspiracy Theorist) — 2025-04-22T05:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127918#p127918 | page 1 | era: pre-1.18.1 -->

> **boxcar221 wrote: Mon Apr 21, 2025 3:45 pm**
> I don't know if this is a sensible topic or not, but I strongly suggest having an option to have in-game sound while the window is minimized, simple as that. I don't know if this is possible at all, or if devs want to implement this feature, but i think i'm not the only one missing this.

Use the Turtle WoW Launcher, and go to one of the top settings menus -- I think it was "Tweaks". There should be a checkbox there.

Just DO NOT run the game through the Launcher -- apply settings, and CLOSE the thing. Run the game as you normally do afterwards.

## Post 127977 by Azcron (Patch Note Conspiracy Theorist) — 2025-04-22T14:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127977#p127977 | page 1 | era: pre-1.18.1 -->

> **boxcar221 wrote: Tue Apr 22, 2025 5:34 am**
> > **Azcron wrote: Mon Apr 21, 2025 5:24 pm**
> > It already does this? I'm not sure if I have something enabled in the options but game sound still play in the background when I have it minimized.
>
>   I have my screen set as 1080p maximized window, (I think this should matter) and in the sound settings, there is no checkbox.
>  Do you play full screen?

Yes, I play in full screen with max window settings. I also use the launcher and have not ran into any issues.

## Post 129984 by soundboardw — 2025-05-07T08:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129984#p129984 | page 1 | era: pre-1.18.1 -->

Totally agree! Having in-game sound while minimized would be super useful especially for those of us who love using a SoundBoard or triggering sound buttons in the background. If you're into customizing audio or finding the latest sound board free tools, check out trending soundbutton downloads at SoundBoardW.com!

## Post 130443 by Nostyke — 2025-05-10T13:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130443#p130443 | page 1 | era: pre-1.18.1 -->

+ this, i have the option enabled in the launcher but it still doesnt work.

## Post 133820 by Nelethor — 2025-06-01T00:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133820#p133820 | page 1 | era: pre-1.18.1 -->

If you have background sound enabled in the launcher but still no sound in-game, it might be caused by SuperWoW (was the case for me).
Run this in chat to fix it:
> /run SetCVar("BackgroundSound","1"); SetCVar("UncapSounds","1"); SetCVar("SoundMaxHardwareChannels","64"); SetCVar("SoundSoftwareChannels","64")

This enables background sound and increases the number of simultaneous sounds the game can play. If you don't use SuperWoW then i don't know.   dead_turtle_head

## Post 150865 by Jessina — 2025-09-08T20:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150865#p150865 | page 1 | era: pre-1.18.1 -->

> **Nelethor wrote: Sun Jun 01, 2025 12:43 am**
> If you have background sound enabled in the launcher but still no sound in-game, it might be caused by SuperWoW (was the case for me).
>  Run this in chat to fix it:
> > /run SetCVar("BackgroundSound","1"); SetCVar("UncapSounds","1"); SetCVar("SoundMaxHardwareChannels","64"); SetCVar("SoundSoftwareChannels","64")
>
>  This enables background sound and increases the number of simultaneous sounds the game can play. If you don't use SuperWoW then i don't know.   dead_turtle_head

I use Superwow and your method worked! THANK YOU!

May I ask if you use **Magnify** to get the Map to zoom in and out or make it bigger?
It seems the Github to the addon does not work anymore. :(

## Post 150921 by Kwa0 — 2025-09-09T05:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150921#p150921 | page 1 | era: pre-1.18.1 -->

> **Nelethor wrote: Sun Jun 01, 2025 12:43 am**
> If you have background sound enabled in the launcher but still no sound in-game, it might be caused by SuperWoW (was the case for me).
>  Run this in chat to fix it:
> > /run SetCVar("BackgroundSound","1"); SetCVar("UncapSounds","1"); SetCVar("SoundMaxHardwareChannels","64"); SetCVar("SoundSoftwareChannels","64")
>
>  This enables background sound and increases the number of simultaneous sounds the game can play. If you don't use SuperWoW then i don't know.   dead_turtle_head

This worked. Thank you for posting a solution.  turtle_in_love_head

