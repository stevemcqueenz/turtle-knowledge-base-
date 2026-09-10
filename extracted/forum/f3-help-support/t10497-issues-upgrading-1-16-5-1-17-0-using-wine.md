---
title: "Issues upgrading 1.16.5 -> 1.17.0 using wine"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10497"
topic_id: 10497
forum_id: 3
forum: "Help & Support"
author: "Ischkajol"
author_authority: "player"
posted: "2023-10-03T13:51:00Z"
last_post: "2023-10-04T04:55:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:02:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Issues upgrading 1.16.5 -> 1.17.0 using wine

## Post 68437 by Ischkajol — 2023-10-03T13:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68437#p68437 | page 1 | era: pre-1.18.1 -->

Hi Folks,

the build-in patch did not work using wine (staging). The log file looks like this:
Code: Select all

```
Log file created.
Searching for patch-5...
Patch-5 not found.
[...]
Searching for patch-Z.mpq...
patch-Z.mpq not found.
LFT addon doesn't exist. Skip.
Trying open downloaded path file "C:\turtlewow\wow-patch.mpq"
Opened "C:\turtlewow\wow-patch.mpq"
Opened "Data\patch-4.mpq" inside "C:\turtlewow\wow-patch.mpq"
File "Data\patch-4.mpq" existed, removing
File created "Data\patch-4.mpq"
Opened "WoWFoV.exe" inside "C:\turtlewow\wow-patch.mpq"
File "WoWFoV.exe" existed, removing
File created "WoWFoV.exe"
Opened "WoW.exe" inside "C:\turtlewow\wow-patch.mpq"
File "WoW.exe" existed, removing

Hello! It seems that something went wrong with your installation process. Here's a list of possible solutions:

Please ensure that your Antivirus, Backup Software or Windows Defender is not blocking TWPatcher.exe, DiscordOverlay.dll or WoW.exe. Open Window Security in your right bottom taskbar, go to Virus and Scan protection > Allowed Threats > Protected Threats and select the files and click the Restore option.

Move the game out of read-only folders such as Program Files, User Folder, Downloads, Desktop, etc.

Try to run WoW as Administrator!

If everything is done right, your Data folder should have Data\patch-4.mpq installed an your binary file should have revision 1.17.0

If it still doesn't work please use a direct download from our website.
```

I have downloaded twow_patch_1170.exe and i got no error messages while applying this patch. But when i start WoW.exe after the patch, 1.16.5 is shown.

The 1.17 client was called WoWFoV.exe

What should i do? Should i run WoWFoV.exe in Future? Do i have to replace WoW.exe "by hand" with the WoWFoV.exe binary?

Greetings,
Joli

## Post 68461 by Klump — 2023-10-03T14:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68461#p68461 | page 1 | era: pre-1.18.1 -->

Hey!
I'm on linux/ge-proton and fixed this issue by renaming and moving my turtle wow folder to "drive_c/Program Files (x86)/World of Warcraft" and then running the updater by starting WoW.exe, that should generate the new Wow.exe as 1.17.

The updater seems to be hardcoded to that location and folder name.

## Post 68484 by Ischkajol — 2023-10-03T15:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68484#p68484 | page 1 | era: pre-1.18.1 -->

Hello,

you're right. I had to use "drive_c/Program Files/World of Warcraft/" (32 Bit wine prefix).

I wonder why a symbolic link didn't work in this case?!?

Greetings,
Joli

## Post 68615 by Lolopreal — 2023-10-04T04:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68615#p68615 | page 1 | era: pre-1.18.1 -->

For me it update the Data/*mpq files but not the Wow.exe and WowFOV.exe's.
I downloaded the fullzip, extracted those and copied them over. Viola.

