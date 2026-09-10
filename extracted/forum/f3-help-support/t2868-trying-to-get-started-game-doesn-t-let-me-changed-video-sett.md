---
title: "Trying to get started, game doesn't let me changed video settings"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2868"
topic_id: 2868
forum_id: 3
forum: "Help & Support"
author: "Nyner4137"
author_authority: "player"
posted: "2022-04-03T08:31:00Z"
last_post: "2025-09-14T06:17:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T08:39:59Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Trying to get started, game doesn't let me changed video settings

## Post 17887 by Nyner4137 — 2022-04-03T08:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17887#p17887 | page 1 | era: pre-1.18.1 -->

My video settings are off, screen res and other things. When I try changing them, the game freezes, my cursor is lost and I have to restart. None of the settings get saved when I come back. The game looks horrible, like worse than vanilla.   unhappy_turtle

## Post 18017 by Fornow (Barrens Chat Casualty) — 2022-04-10T04:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18017#p18017 | page 1 | era: pre-1.18.1 -->

The settings are stored in the WTF subfolder of the World of Warcraft folder. You could try to looking at that and set the values you need by modifying the text. I'm sure there is documentation for it online.

## Post 18022 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-10T08:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18022#p18022 | page 1 | era: pre-1.18.1 -->

config.wtf is the file you want to modify in a text editor to get the video settings you desire.

## Post 18531 by Grantgrace — 2022-05-06T10:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18531#p18531 | page 1 | era: pre-1.18.1 -->

The main reason for this problem is the lack of right to edit configuration files. If the game version is pirated, then the appearance of such an error is not surprising. Unfortunately, my video graphic card broke last week. The only thing I can do now is to find [a calm and peaceful server to build my own world](https://servers-minecraft.net). You should check the properties in the destination folder where the game files are saved. You need to click on this file and select the properties tab in the open menu. I hope you will be able to find a way out.

## Post 18548 by Allwynd01 (Bug Report Enthusiast) — 2022-05-08T19:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18548#p18548 | page 1 | era: pre-1.18.1 -->

> **Grantgrace wrote: Fri May 06, 2022 10:11 am**
> The main reason for this problem is the lack of right to edit configuration files. If the game version is pirated, then the appearance of such an error is not surprising. Unfortunately, my video graphic card broke last week. The only thing I can do now is to find [a calm and peaceful server to build my own world](https://servers-minecraft.net). You should check the properties in the destination folder where the game files are saved. You need to click on this file and select the properties tab in the open menu. I hope you will be able to find a way out.

I've NEVER had such problems with WoW and I've played on private servers since 2006-2007, I've only briefly played Classic in 2019 when it launched. I've switched many computers during the years or upgraded parts and I've NEVER had such a problem with WoW. Even tried playing the game on Linux a couple of times - zero problems.

I think it's people's system configurations that are causing these problems. Missing runtime stuff like Visual C++, dot.net, DirectX Runtime, faulty drivers, faulty hardware...

## Post 18639 by Huruh — 2022-05-15T20:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18639#p18639 | page 1 | era: pre-1.18.1 -->

I tried changing resolution which turned the game client black. I cannot launch the game anymore as the login screen is black. I tried changing the wtf files, but even when saving, these get reverted back to the black screen settings as soon as I launch it.

## Post 18643 by Fin (Patch Note Conspiracy Theorist) — 2022-05-16T10:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18643#p18643 | page 1 | era: pre-1.18.1 -->

For  black screen:
Go to your config.wtf file found in your wtf folder which is in your main wow folder
Add those lines:
SET gxWindow "1"
SET gxMaximize "1"

## Post 18675 by Adiel — 2022-05-18T19:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18675#p18675 | page 1 | era: pre-1.18.1 -->

> **Tinyfin wrote: Mon May 16, 2022 10:10 am**
> For  black screen:
>  Go to your config.wtf file found in your wtf folder which is in your main wow folder
>  Add those lines:
>  SET gxWindow "1"
>  SET gxMaximize "1"

This fixed my problem, thank you.

## Post 19690 by Dumont — 2022-07-05T03:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19690#p19690 | page 1 | era: pre-1.18.1 -->

OK I changed the config but I still can't get more than 1080.  I am running dual mons.  If I uncheck windowed mode I get the black screen and then have to restore the config to get back in.

Any help would be appreciated.

## Post 138589 by Wowstein — 2025-07-09T22:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138589#p138589 | page 1 | era: pre-1.18.1 -->

> **Fin wrote: Mon May 16, 2022 10:10 am**
> For  black screen:
>  Go to your config.wtf file found in your wtf folder which is in your main wow folder
>  Add those lines:
>  SET gxWindow "1"
>  SET gxMaximize "1"

My hero. Thank you very, very much.

## Post 138823 by Hyundef (Turtle WoW Team) [STAFF] — 2025-07-12T12:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138823#p138823 | page 1 | era: pre-1.18.1 -->

> **Dumont wrote: Tue Jul 05, 2022 3:51 am**
> OK I changed the config but I still can't get more than 1080.  I am running dual mons.  If I uncheck windowed mode I get the black screen and then have to restore the config to get back in.
>
>  Any help would be appreciated.

If you are not running the multimonitorfix through the launcher, I would recommend using that.  If you are and it still isnt working, I would recommend disabling it, running this attached .dll file, and enabling that through the launcher to see if you still have problems.  <https://github.com/allfoxwy/no1600x1200>

## Post 151657 by Kerenis (Patch Note Conspiracy Theorist) — 2025-09-14T06:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151657#p151657 | page 1 | era: pre-1.18.1 -->

> **Hyundef wrote: Sat Jul 12, 2025 12:05 pm**
> [...]

Is there yet a solution to unability to change video settings? I even selected "Performance mode" in launcher, but im still getting max settings

