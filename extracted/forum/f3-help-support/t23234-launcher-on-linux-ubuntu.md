---
title: "Launcher on Linux Ubuntu"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23234"
topic_id: 23234
forum_id: 3
forum: "Help & Support"
author: "Zulnam"
author_authority: "player"
posted: "2025-12-10T15:11:00Z"
last_post: "2025-12-14T03:47:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:37:51Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Launcher on Linux Ubuntu

## Post 162361 by Zulnam (Bug Report Enthusiast) — 2025-12-10T15:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162361#p162361 | page 1 | era: 1.18.1-announced-pre-release -->

So the launcher has an AppImage for linux, and it does seem to work. But the main problem is that it only works with all the client files in the Downloads folder, which is really a shitty solution I don't think I need to explain why.

Trying to move the launcher appImage to it's own folder, if i move the entire download of the client as well it does not register it and require i redownload all 9+ GB into Downloads.

Tried making a simlink with the below command, didn't work. Code: Select all

```
ln -s /games/turtlewow ~/Downloads/turtlewow
```

Tried changing the launcher options to something akin to below, didn't work. Code: Select all

```
wine start /unix /games/turtlewow/WoW.exe
```

About the only way I can run the game is via Steam Proton compatibility, but now with the launcher this doesn't check or update the client, so every time I would have to update i would have to either move or redownload the whole bloody thing.

Anyone have the launcher working on Ubuntu?

Also want to point out that this to me also just feels like sloppy coding.  Beyond All Reason, an open source F2P strategy game has an AppImage launcher and it downloads the app to: Code: Select all

```
home/user/.local/state/Beyond All Reason
```

Which means the AppImage can be moved anywhere and runs fine from anywhere. I can access those files as well without issue.

## Post 162731 by Zulnam (Bug Report Enthusiast) — 2025-12-14T03:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162731#p162731 | page 1 | era: 1.18.1-announced-pre-release -->

Apparently Turtle WoW uses the local state as well, just not great.

If you run the AppImage the first time it will create the files and hard-lock the folder location to the downloads folder (in my case).

To fix this you have to delete the ./local/state/Turtle WoW folder. Rerunning the appImage then will fix the issue.

