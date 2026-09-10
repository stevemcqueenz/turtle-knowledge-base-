---
title: "Error when playing on Ubuntu."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6476"
topic_id: 6476
forum_id: 3
forum: "Help & Support"
author: "Istratenko"
author_authority: "player"
posted: "2023-04-08T14:44:00Z"
last_post: "2023-04-13T00:39:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:15:24Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Error when playing on Ubuntu.

## Post 40774 by Istratenko — 2023-04-08T14:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40774#p40774 | page 1 | era: pre-1.18.1 -->

Hi guys. I installed WoW on ubuntu 22, from Lutris. And after 30m received this error(scrn. 1). Anyone know how to fix it?

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/PPemMZc]

## Post 41005 by Monraseven1 — 2023-04-10T10:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41005#p41005 | page 1 | era: pre-1.18.1 -->

i get this error immediatelly when i log in... every time
cant even play, and it just started happening, it was okay the first 2 days of playing.
if u fixed it please help

## Post 41329 by Jmc2000 — 2023-04-13T00:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41329#p41329 | page 1 | era: pre-1.18.1 -->

Might be a little late, but maybe Lutris config might not be done properly for Turtle WoW. Download the game files .zip folder from the Turtle WoW downloads and extract, as you would do on Windows. Then try running the Wow.exe either with wine directly, Steam Proton (add as a non-steam game), or Bottles (requires Flatpak). I tried both Bottles and Steam Proton and they work fine.

If you never played with this things and you dont know how they work then Ill try to explain:

In Steam go to add non-steam game, make sure its searching for all file types (in my case defaults to only showing .desktop files) so you can see the .exe file, and select Wow.exe. Then go to your library, search Wow.exe and go to Properties-> Compatibility, force compatibility and choose a Proton version. I am running with Proton 7.06, but you can try other Proton version if you want or if something in the game doesn't seem fine. Then just press Play and it should be ready.

For Bottles, install it through Flatpak. You create a Bottle (basically a wine environment with some extra stuff), and it has some presets, but you can also customize. I just created the Gaming preset bottle. Then selected Add Shortcut and selected Wow.exe. The WoW entry should appear in the program list of the Bottle, so just press the play button and it should work!

## Post 41331 by Racingturtle — 2023-04-13T00:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41331#p41331 | page 1 | era: pre-1.18.1 -->

I think the problem could be the DXVK vesrion that Lutris installs. I tested a bit and in my Debian 11 System I use "winetricks dxvk1103", because that's the latest version which seems to work with TurtleWoW. With later Versions I get a similar error. Before that I tried "winetricks dxvk" which produced the error.

