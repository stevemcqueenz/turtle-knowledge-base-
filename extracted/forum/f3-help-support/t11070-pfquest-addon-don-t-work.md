---
title: "pfquest addon don't work"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11070"
topic_id: 11070
forum_id: 3
forum: "Help & Support"
author: "Theph42"
author_authority: "player"
posted: "2023-10-21T21:48:00Z"
last_post: "2023-10-22T06:48:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:00:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# pfquest addon don't work

## Post 72647 by Theph42 — 2023-10-21T21:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72647#p72647 | page 1 | era: pre-1.18.1 -->

Hello,

My addon pfquest seems to not working. Nothing appears on the minimap or map, and no quest tracking. When I open the map (M) and close it i have an error than occure "Interface\FrameXML\UIDropDownMenu.Iua:156: attempt to concatenate global UIDROPDOWNMENU_OPEN_MENU' (a nil value) ".

Someone can help me please ? Thanks you !

## Post 72650 by Wrathweaver (Patch Note Conspiracy Theorist) — 2023-10-21T21:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72650#p72650 | page 1 | era: pre-1.18.1 -->

> **Theph42 wrote: Sat Oct 21, 2023 9:48 pm**
> Hello,
>
>  My addon pfquest seems to not working. Nothing appears on the minimap or map, and no quest tracking. When I open the map (M) and close it i have an error than occure "Interface\FrameXML\UIDropDownMenu.Iua:156: attempt to concatenate global UIDROPDOWNMENU_OPEN_MENU' (a nil value) ".
>
>  Someone can help me please ? Thanks you !

Have you removed master title from the mod folder and downloaded pfquest turtle as well?
Need to use both mods.
Edit: if you have a map mod, that might not work, see if other mods you have change the map system in any way.
Also delete the content of the WBD folder

*Last edited by Wrathweaver on Sat Oct 21, 2023 9:57 pm, edited 2 times in total.*

## Post 72651 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-10-21T21:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72651#p72651 | page 1 | era: pre-1.18.1 -->

Vanilla *WoW*'s AddOn support is fickle.  One crossed wire and **boom**!  Your AddOn is broken.

Have you tried erasing your personal settings for the AddOn?  To do this, go to your *Turtle WoW* folder and run a search for **pfQuest.lua**.  You should find one file in each of your characters' **WTF** folder, one in the general **SavedVariables** folder, and most likely "**.bak**" files for all of them.  Erase all of the **pfQuest.lua** files, then load back into the game.

This will **completely erase your quest progress** with *pfQuest* and you'll have to change the AddOn's settings per-character, again, but this usually fixes problems like this.

## Post 72704 by Theph42 — 2023-10-22T06:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72704#p72704 | page 1 | era: pre-1.18.1 -->

Hi, tganks you for your answer ! I tried but it's did'nt work. So I deleted the game and reinstall it. And now it's working ^^

