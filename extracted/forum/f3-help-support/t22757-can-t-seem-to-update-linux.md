---
title: "Can't seem to update [Linux]"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22757"
topic_id: 22757
forum_id: 3
forum: "Help & Support"
author: "Stenchie"
author_authority: "player"
posted: "2025-11-06T17:23:00Z"
last_post: "2025-11-06T17:37:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:38:35Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Can't seem to update [Linux]

## Post 158652 by Stenchie — 2025-11-06T17:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158652#p158652 | page 1 | era: 1.18.1-announced-pre-release -->

Heyy, im not sure if this has been posted already, but i cant seem to update to patch 9?

Failed to update "patch-9.mpq"
 --------------
"Hash mismatch for "DBFilesClient/AreaPOI.dbc" after download: expected 5766431D9D89D7ADFDE3211B3F348318D46A417C75918AECA887B7539485EFC3, got D4E154C3DC477702D5B0B07354D5193CAEFD24834E8A3E7477425E301DB34FE9"

I'm on Linux if that's the problem. I've never had a problem updating the game before, but earlier, when i successfully logged in where the character creation screen should be, i got an update. When it finished and I had to restart, it started to patch until around 39% when I got a "critical error". This is the log:

Log file created.
Clean WDB Cache
Searching for the client cache...
Deleting client cache
Remove LFT Addon
LFT addon doesn't exist. Skip.
Trying open downloaded path file "Z:\home\busungen\Downloads\TurtleWoW\wow-patch.mpq"
Opened "Z:\home\busungen\Downloads\TurtleWoW\wow-patch.mpq"
Opened "Data\patch-8.mpq" inside "Z:\home\busungen\Downloads\TurtleWoW\wow-patch.mpq"
File "Data\patch-8.mpq" existed, removing

Hello! It seems that something went wrong with your installation process. Here's a list of possible solutions:

Please ensure that your Antivirus, Backup Software or Windows Defender is not blocking TWPatcher.exe, DiscordOverlay.dll or WoW.exe. Open Window Security in your right bottom taskbar, go to Virus and Scan protection > Allowed Threats > Protected Threats and select the files and click the Restore option

Move the game out of read-only folders such as Program Files, User Folder, Downloads, Desktop, etc.

Try to run WoW as Administrator!

If everything is done right, your Data folder should have Data\patch-8.mpq installed an your binary file should have revision 1.18.0

If it still doesn't work please use a direct download from our website.
 -------------------------------------------------------------------------------------------------------------

I haven't changed any files whatsoever, nor security changes. I redownloaded the game, and i now got the first error message. What gives?

## Post 158658 by Stenchie — 2025-11-06T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158658#p158658 | page 1 | era: 1.18.1-announced-pre-release -->

This is now fixed!

I followed the pinned message on the discord server.

All I did was this:
"3. Patch 8-9 error
 3.1 Clear cache, cookies from the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg) then verifying your game files by pressing the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg) in top right corner then verify game files.

 3.2 turn launcher off
delete. .local/share/turtle-wow

 3.3 Running the app image in admin mod
Right klick the folder open terminal run
Sudo ./TurtleWoW.AppImage"

