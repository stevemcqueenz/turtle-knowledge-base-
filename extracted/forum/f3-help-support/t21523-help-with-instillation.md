---
title: "Help with instillation"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21523"
topic_id: 21523
forum_id: 3
forum: "Help & Support"
author: "Nebari"
author_authority: "player"
posted: "2025-08-29T13:50:00Z"
last_post: "2025-08-29T14:13:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:40:42Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Help with instillation

## Post 149141 by Nebari — 2025-08-29T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149141#p149141 | page 1 | era: pre-1.18.1 -->

Hello,

I had the game installed previously. When I tried to log in this morning it told me I had to reinstall and now im receiving this error.

"failed to read directory at path: with error: The system cannot find the path specified. (os error 3)"

any ideas?

## Post 149145 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-08-29T14:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149145#p149145 | page 1 | era: pre-1.18.1 -->

> **Nebari wrote: Fri Aug 29, 2025 1:50 pm**
> Hello,
>
>  I had the game installed previously. When I tried to log in this morning it told me I had to reinstall and now im receiving this error.
>
>  "failed to read directory at path: with error: The system cannot find the path specified. (os error 3)"
>
>  any ideas?

# Checklist
 1. Is your launcher the correct version?
 - The current latest version is 2.2.4. (2.1.2 if you are using linux)
 - If not, download the latest version from:
 - [https://launcher.turtlecraft.gg/api/lau ... load=bunny](https://launcher.turtlecraft.gg/api/launcher/TurtleWoW.exe?download=bunny)
 2. Does your launcher have the correct install location designated?
 - Check this by clicking the cogwheel in the upper right corner.
 - The selected folder should contain Wow.exe and the usual WoW files.
 - If the folder only contains:
`TurtleWoW.exe or turtle-wow.exe`
`Cache`
`WTF`
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

