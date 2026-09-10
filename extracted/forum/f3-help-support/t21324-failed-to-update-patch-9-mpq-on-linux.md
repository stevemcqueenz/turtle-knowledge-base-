---
title: "Failed to update patch-9.mpq on linux"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21324"
topic_id: 21324
forum_id: 3
forum: "Help & Support"
author: "Helzpain"
author_authority: "player"
posted: "2025-08-23T18:40:00Z"
last_post: "2025-08-31T17:13:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:40:28Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Failed to update patch-9.mpq on linux

## Post 147887 by Helzpain — 2025-08-23T18:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147887#p147887 | page 1 | era: pre-1.18.1 -->

So had to download the game after a malfunction and keep running into this error.

Error: Unexpected error occurred processing Data/patch-9.mpq

This is from the launcher download and full client download

Failed to update "patch-9.mpq"
 --------------
"Hash mismatch for \"DBFilesClient/AreaPOI.dbc\" after download: expected 4F8D0B36BC9A4CE53AAC905A94B04FA0BCBAB20FBEC3CA72DA2049DAF994371B, got 7FDDC24D4565E08E19CFE978459EAA94DF118F81E20E6342AB93AFA05EAFD329"

Any help would be great thanks!

## Post 148402 by Tkoma — 2025-08-26T13:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148402#p148402 | page 1 | era: pre-1.18.1 -->

While in the launcher, click on the cog that is placed up right.
After that, at the bottom you will see option "verify game files", click on it.
After verifying files, you should be able to update patch 9 and play the game.

I hope it helps, as it worked for me. (I am on Ubuntu 24.04)

## Post 148407 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-08-26T14:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148407#p148407 | page 1 | era: pre-1.18.1 -->

**Checklist before asking for support about the launcher**
 1. Is your launcher the correct version?
 - The current latest version is 2.2.4. (2.1.2 if you are using linux)
 - If not, download the latest version from:
 - [https://launcher.turtlecraft.gg/api/lau ... load=bunny](https://launcher.turtlecraft.gg/api/launcher/TurtleWoW.exe?download=bunny)
 2. Does your launcher have the correct install location designated?
 - Check this by clicking the cogwheel in the upper right corner.
 - The selected folder should contain Wow.exe and the usual WoW files.
 - If the folder only contains:
TurtleWoW.exe or turtle-wow.exe
Cache
WTF
 - Then the launcher encountered a problem. In that case, you should create a new folder and select that as the install location.
 3. Is the launcher telling you that it is going to delete something?
 - Let it proceed. It won’t delete anything important.
 4. Windows Defender / Antivirus is flagging WoW files or mods
 - This is a false positive.
 - Add the TWoW folder to your antivirus whitelist.
 5. Clicking play closes launcher, then does nothing for a second and then reopens launcher
 - DXVK causes this. Disable the mod in the mods tab and it should be fixed
 6. Launcher doesn't opens anything, just a background process or Launcher just opens a white window
 - Update your windows.
 7. If the download is slow. try changing the download mirror at the top right. this might fix it
 8. After fixes, try closing and reopening the launcher as **administrator**

## Post 149610 by Wolfscript — 2025-08-31T17:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149610#p149610 | page 1 | era: pre-1.18.1 -->

Got the same Error on Fedora... verify the Games files do the trick.. thanks

