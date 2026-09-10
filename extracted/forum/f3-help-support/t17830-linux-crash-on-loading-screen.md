---
title: "Linux: Crash on loading screen"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17830"
topic_id: 17830
forum_id: 3
forum: "Help & Support"
author: "Lc6ysin7qwib5le"
author_authority: "player"
posted: "2025-03-03T17:50:00Z"
last_post: "2025-03-26T17:47:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:46:14Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Linux: Crash on loading screen

## Post 121523 by Lc6ysin7qwib5le — 2025-03-03T17:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121523#p121523 | page 1 | era: pre-1.18.1 -->

**<TL;DR>**
On Linux, when I get to the loading screen, after having chosen a character, the progress bar fills up, and the the game freezes and crashes. The same happens if I switch between a couple of characters; the game just freezes on the character select screen.
 **</TL;DR>**

I've downloaded the Linux client and installed it in /home/<username>/Games/Turtle WoW. The Linux client starts fine, but it has had some bugs where it freezes at random points. After rebooting, It now only freezes in the character select screen when I switch between characters, and of course every time I try to log in, it gets stuck on the loading screen and crashes.

I've also downloaded the full client as a zip file. The "full client" available as a zip works fine, but the mouse pointer in game is ghosting like crazy. It feels like dragging it around in syrup.

Also, when I tried using the *TurtleWoW.exe* on this client, it gives me a warning message saying:
> "Running inside emulator? it looks like you might be running incorrect version of the launcher. Please download the correct version for your operating system from the links below [links] if this is not the case, you can continue at your own risk. **Confirm**"

If I press confirm here, I get an *"Unhandled exception"* error message saying:
> "The renderer process has crashed --> Reload, --> Quit"

What I've tried so far:
- Downloaded and re-installed the Linux client two times.

- Updated my nVidia video drivers.

- Rebooted the computer several time.
Any suggestions?

This is my launcher log file: Code: Select all

```
[info]  Launching /home/username/Games/Turtle WoW/WoW.exe...
[info]  Checking Config.wtf...
[info]  Config.wtf successfully patched
[info]  Launching WoW...
[info]  WoW stopped
[info]  Verifying client files at /home/username/Games/Turtle WoW...
[info]  [Fetch] Cache miss for "/api/files/EU"
[info]  Reading client version...
[info]  Client version is: 1.17.2 (7206)
```

PS. I noticed now that when the client freezes on the loading screen, it starts playing the music of Elwynn forest at the same time as the login screen music.

## Post 123977 by Lalli — 2025-03-26T17:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123977#p123977 | page 1 | era: pre-1.18.1 -->

I just did a fresh install using the linux appimage and have the same issue. I can login, create character and try to load into world. At that point the game freezes, music playing in the background. PikaOS, KDE, Nvidia-570, Wayland.

Sure hope someone figures out what causes this.

## Post 123984 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-03-26T17:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123984#p123984 | page 1 | era: pre-1.18.1 -->

> **Lalli wrote: Wed Mar 26, 2025 5:16 pm**
> I just did a fresh install using the linux appimage and have the same issue. I can login, create character and try to load into world. At that point the game freezes, music playing in the background. PikaOS, KDE, Nvidia-570, Wayland.
>
>  Sure hope someone figures out what causes this.

This isn't a fix for the app image/launcher, but I installed twow via lutris and it worked fine for me.  My buddy just runs it through steam proton.  Both using Wayland, kde, and Nvidia.  I've also found that you can run it right off the executable through wine.  Hopefully this helps.  Apologies I couldn't be of more help.  Best of luck to you.

