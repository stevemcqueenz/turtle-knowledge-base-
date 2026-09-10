---
title: "Remember to Delete Your WDB (Cache) Folder Regularly"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8996"
topic_id: 8996
forum_id: 3
forum: "Help & Support"
author: "Forbearance"
author_authority: "player"
posted: "2023-08-20T15:49:00Z"
last_post: "2023-08-20T15:49:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:08:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Remember to Delete Your WDB (Cache) Folder Regularly

## Post 58169 by Forbearance (Barrens Chat Casualty) — 2023-08-20T15:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=58169#p58169 | page 1 | era: pre-1.18.1 -->

Your client locally stores data about quests, game objects, items, NPCs and more. So when something is called by the client, it will use your local copy of data first before getting new data from the server. If you have custom data or broken things it might be because you are not using the newest data from the server.

It is important on Turtle WoW that you regularly clear your cache to ensure that all data used by your client is current data from the server, as quests, game objects, items, NPCs and more can sometimes change their stats, values etc after each Turtle WoW update.

Here is a BAT file for you to use to clear your cache and launch the game every time you play. To create a BAT file, simply create a new text document in either Notepad or Notepad++, save the file with a '.bat' extension and change the filetype from “.txt” to “all files”. I saved mine as 'GameLaunch.bat'. Just place the file in your root WoW Folder:
Code: Select all

```
@echo off
rd /s /Q "WDB"
start WoW.exe
exit
```

