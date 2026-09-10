---
title: "Linux Mint Launcher fully updated but Game won't start"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21126"
topic_id: 21126
forum_id: 3
forum: "Help & Support"
author: "Remedy"
author_authority: "player"
posted: "2025-08-18T18:06:00Z"
last_post: "2025-08-19T19:34:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:41:14Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Linux Mint Launcher fully updated but Game won't start

## Post 146814 by Remedy — 2025-08-18T18:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146814#p146814 | page 1 | era: pre-1.18.1 -->

Hello,
I am running Linux Mint on my Notebook.
I Installed the Linux Version from the official Turtle WoW Page.
Launcher is fully updated and the button PLAY is available.
BUT the game won't open when I hit the Play-Button.
It says: Failed to launch WoW, check log for errors.
and: Datei oder Verzeichnis nicht gefunden (os error 2).
What can I do?
Please help me :(

## Post 146817 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-08-18T18:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146817#p146817 | page 1 | era: pre-1.18.1 -->

I run mine through proton-ge in lutris.  You could also try adding it to steam and running it through proton there.

## Post 146821 by Edwanji (Barrens Chat Casualty) — 2025-08-18T18:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146821#p146821 | page 1 | era: pre-1.18.1 -->

I got mine to work just by installing Wine.  I prefer to run it through the launcher just to make sure everything is up to date.

## Post 146831 by Remedy — 2025-08-18T19:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146831#p146831 | page 1 | era: pre-1.18.1 -->

Do you run the Linux Version with Wine or the Windows?

## Post 146834 by Edwanji (Barrens Chat Casualty) — 2025-08-18T19:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146834#p146834 | page 1 | era: pre-1.18.1 -->

It's the Linux version of the launcher, but it uses Wine to run the actual game client.  If you click the little gear in the upper right corner, it shows the launch command as "wine WoW.exe" So I installed the standalone Wine and it worked fine.  Something like proton would probably be "better", but for a very old game stock Wine works just as well for me.

## Post 147066 by Remedy — 2025-08-19T19:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147066#p147066 | page 1 | era: pre-1.18.1 -->

So i tried it with proton and running with steam. I can press Play on Steam but nothing happens... what else I can do...? Are there any other things I need to consider?

## Post 147071 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-08-19T19:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147071#p147071 | page 1 | era: pre-1.18.1 -->

This is what I do.  I install lutris from the official store or flathub.  Then I use this install script from lutris ([https://lutris.net/games/world-of-warcr ... lich-king/](https://lutris.net/games/world-of-warcraft-wrath-of-the-lich-king/)).  When it asks for the files, I just point it to the latest version of turtle wow unzipped.

That's it.  It should be playable from there.  I change the art and logo to turtle wow's icons but that's it.

