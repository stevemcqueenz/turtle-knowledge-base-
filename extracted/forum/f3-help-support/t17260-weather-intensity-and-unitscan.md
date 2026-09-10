---
title: "Weather Intensity and Unitscan"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17260"
topic_id: 17260
forum_id: 3
forum: "Help & Support"
author: "Njord12"
author_authority: "player"
posted: "2025-01-25T06:10:00Z"
last_post: "2025-07-18T21:30:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:42:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Weather Intensity and Unitscan

## Post 117871 by Njord12 — 2025-01-25T06:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117871#p117871 | page 1 | era: pre-1.18.1 -->

Anyone else having trouble getting the setting of your Weather Intensity not sticking? I have to turn it down everytime I log a character. The setting doesnt save.
I've tried making the game files read/write.
Any ideas?

Also; I have the same problem with Unitscan addon. When I try and remove units from getting an alert, they just add themselves back on the list and the alert keeps blaring.
Tried the same thing with read/write permissions.
It kinda is driving me mad to get 24 Mor'ladim alerts in 15 mins when visiting Raven Hill >.<

## Post 117874 by Vanth (Turtle WoW Team) [STAFF] — 2025-01-25T08:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117874#p117874 | page 1 | era: pre-1.18.1 -->

You can try to ask in the Discord channels #mod-support and #addon-support. There should be assistance for your specific issue.

## Post 117927 by Zeran (Patch Note Conspiracy Theorist) — 2025-01-25T22:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117927#p117927 | page 1 | era: pre-1.18.1 -->

> **Njord12 wrote: Sat Jan 25, 2025 6:10 am**
> Anyone else having trouble getting the setting of your Weather Intensity not sticking? I have to turn it down everytime I log a character. The setting doesnt save.
>  I've tried making the game files read/write.
>  Any ideas?
>
>  Also; I have the same problem with Unitscan addon. When I try and remove units from getting an alert, they just add themselves back on the list and the alert keeps blaring.
>  Tried the same thing with read/write permissions.
>  It kinda is driving me mad to get 24 Mor'ladim alerts in 15 mins when visiting Raven Hill >.<

Do you have your game in Program Files or similar by any chance? On Windows, even if you remove the read-only flag from a folder, it might still remain as read-only due to the parent folder still having that flag IIRC (indicated by the filled square for the flag in file properties)

## Post 117960 by Njord12 — 2025-01-26T09:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117960#p117960 | page 1 | era: pre-1.18.1 -->

> **Zeran wrote: Sat Jan 25, 2025 10:50 pm**
> Do you have your game in Program Files or similar by any chance? On Windows, even if you remove the read-only flag from a folder, it might still remain as read-only due to the parent folder still having that flag IIRC (indicated by the filled square for the flag in file properties)

I used to!
But when I started using the launcher it forced me to move my twmoa_1171 folder to C:/Games
The Read-only flag gets re-applied as soon as I uncheck it, whether or not I have the gamefolder in Program Files or some other location.

## Post 117985 by Allwynd01 (Bug Report Enthusiast) — 2025-01-26T15:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117985#p117985 | page 1 | era: pre-1.18.1 -->

> **Njord12 wrote: Sun Jan 26, 2025 9:46 am**
> > **Zeran wrote: Sat Jan 25, 2025 10:50 pm**
> > Do you have your game in Program Files or similar by any chance? On Windows, even if you remove the read-only flag from a folder, it might still remain as read-only due to the parent folder still having that flag IIRC (indicated by the filled square for the flag in file properties)
>
>   I used to!
>  But when I started using the launcher it forced me to move my twmoa_1171 folder to C:/Games
>  The Read-only flag gets re-applied as soon as I uncheck it, whether or not I have the gamefolder in Program Files or some other location.

You should probably move your game to the D:\ drive. Do other settings also not save between sessions or only Weather Intensity? I'm on Linux, but my game is on my second drive, what would be considered the D:\ drive on Windows. I have an SSD which is only for Linux and an HDD for everything else, and WoW is on the HDD.

As others said, when people have such problems, it's due to file read/write permissions.

## Post 118096 by Njord12 — 2025-01-27T18:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118096#p118096 | page 1 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Sun Jan 26, 2025 3:35 pm**
> You should probably move your game to the D:\ drive. Do other settings also not save between sessions or only Weather Intensity? I'm on Linux, but my game is on my second drive, what would be considered the D:\ drive on Windows. I have an SSD which is only for Linux and an HDD for everything else, and WoW is on the HDD.
>
>  As others said, when people have such problems, it's due to file read/write permissions.

Yeah, I just tried to move it to another disc and its the same problem.
Other options and graphical options saves just fine, like UI Scale and level of detail etc.

Could it be a conflict with ShaguTweaks or VanillaGraphicBoost addons?

## Post 118098 by Allwynd01 (Bug Report Enthusiast) — 2025-01-27T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118098#p118098 | page 1 | era: pre-1.18.1 -->

> **Njord12 wrote: Mon Jan 27, 2025 6:37 pm**
> > **Allwynd01 wrote: Sun Jan 26, 2025 3:35 pm**
> > You should probably move your game to the D:\ drive. Do other settings also not save between sessions or only Weather Intensity? I'm on Linux, but my game is on my second drive, what would be considered the D:\ drive on Windows. I have an SSD which is only for Linux and an HDD for everything else, and WoW is on the HDD.
> >
> >  As others said, when people have such problems, it's due to file read/write permissions.
>
>   Yeah, I just tried to move it to another disc and its the same problem.
>  Other options and graphical options saves just fine, like UI Scale and level of detail etc.
>
>  Could it be a conflict with ShaguTweaks or VanillaGraphicBoost addons?

Interesting. I've never heard of that addon before, so I looked it up and I installed it to see what it does. It really changes the Weather Intensity to MAX every time you login.

I even tried to set it to LOW and use /relog while in-game and it resets it to MAX again. What I also noticed is that Rendering Distance and Ground Clutter get reduced each time I set Weather Intensity to LOW.

So that addon is the culprit. Ergo, if you want to use it, you have to come to terms that you can't set Weather Intensity to anything else than MAX. I usually keep mine at lowest, because rain and snow and sandstorm really make it difficult to see and is also very annoying.

## Post 118146 by Njord12 — 2025-01-28T04:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118146#p118146 | page 1 | era: pre-1.18.1 -->

Yeah, I tried disabling it and that did it!
I've used the addon for so long that I've forgotten what it actually does, so it took me a good while to think of it.
I'm not sure I need the addon, since the launcher does alot of the functions now.
Just glad I dont need to change the Intensity every god damn time now.

Now to see what is affecting UnitScan.

## Post 140382 by Jtn — 2025-07-18T21:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140382#p140382 | page 1 | era: pre-1.18.1 -->

Late reply but some units are hardcoded in the Unitscan (Mor'Ladim is) files and you have to edit zonetargets.lua in the addon folder and delete them.

