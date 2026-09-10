---
title: "Issue with pallypower."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12213"
topic_id: 12213
forum_id: 41
forum: "Paladin"
author: "Straydemon"
author_authority: "player"
posted: "2023-12-14T18:25:00Z"
last_post: "2025-04-29T18:43:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T07:56:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Issue with pallypower.

## Post 81199 by Straydemon — 2023-12-14T18:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81199#p81199 | page 1 | era: pre-1.18.1 -->

I'm currently using the pallypower addon from here:[https://github.com/madScripting/TurtleW ... PallyPower](https://github.com/madScripting/TurtleWoW-RelarPallyPower).
It works well most of the time but I'm having some issues.
If there are multiple players of the same class, pallypower will only buff the same person over and over again instead of cycling through them and buffing everyone. So I have to find out who's missing the buff and apply it manually. For example, my last dungeon group had 2 druids and another paladin, so I basically needed to manually buff everyone.
Is this supposed to happen or am I missing some important features?
Also, is there a way to make it cast a certain buff on myself but a different buff on other paladins?

## Post 81201 by Elisleris (Bug Report Enthusiast) — 2023-12-14T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81201#p81201 | page 1 | era: pre-1.18.1 -->

But Greater Blessing from paladin buff all people from the same classe who are in 40 yards from you.
My PallyPower works only with Greater Blessings, I don't know if PP support cycling

*Last edited by Elisleris on Thu Dec 14, 2023 8:16 pm, edited 1 time in total.*

## Post 81206 by Drubarrymooer (Grandmaster of Forum PvP) — 2023-12-14T19:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81206#p81206 | page 1 | era: pre-1.18.1 -->

Are you using Greater Blessings?

If you are, try Lexie's version.
<https://github.com/Lexiebean/PallyPower>

Lastly, if you want to change pally power just "/pp"

## Post 81244 by Straydemon — 2023-12-15T06:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81244#p81244 | page 1 | era: pre-1.18.1 -->

> **Elisleris wrote: Thu Dec 14, 2023 7:09 pm**
> But Greater Blessing from paladin buff all people from the same classe who are in 40 yards from you.
>  My PallyPower works only with Greater Blessings, I don't know if PP support cycling

I'm only at lvl 38, so no greater blessings yet...

## Post 81245 by Straydemon — 2023-12-15T06:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81245#p81245 | page 1 | era: pre-1.18.1 -->

> **Drubarrymooer wrote: Thu Dec 14, 2023 7:39 pm**
> Are you using Greater Blessings?
>
>  If you are, try Lexie's version.
>  <https://github.com/Lexiebean/PallyPower>
>
>  Lastly, if you want to change pally power just "/pp"

I currently only have 5 min blessings, I think the version I'm using has the option to switch to greater blessings.

## Post 83674 by Shark0175 — 2024-01-05T07:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83674#p83674 | page 1 | era: pre-1.18.1 -->

You can check the Target Rotation settings in pallypower. If it's set to Target, it will prioritize the same target repeatedly. Try switching it to Group or Raid to cycle through party or raid members for buffs. [build now gg](https://buildnowgg.co/)

## Post 87337 by Drinkjoda — 2024-02-09T06:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87337#p87337 | page 1 | era: pre-1.18.1 -->

Same thing with pally power addon don't see shaman as separate class, and I can't buff them by using this addon.

## Post 87367 by Nivny — 2024-02-09T12:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87367#p87367 | page 1 | era: pre-1.18.1 -->

> **Drinkjoda wrote: Fri Feb 09, 2024 6:23 am**
> Same thing with pally power addon don't see shaman as separate class, and I can't buff them by using this addon.

Try this version:

<https://github.com/Azgaardian/PallyPower-Turtle>

Also has 5 minute and 15 minute buff options.

## Post 119047 by petersonj — 2025-02-05T15:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119047#p119047 | page 1 | era: pre-1.18.1 -->

Can some please let me know if this issue is still a problem?  I have the Azgaardian PP-Turtle version but still unable to get it to work in groups.  I am only level 26 so just have 5 min buffs.

## Post 123885 by ivanovlk — 2025-03-26T08:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123885#p123885 | page 1 | era: pre-1.18.1 -->

you can try my version <https://github.com/ivanovlk/PallyPowerTW>

it still has some bugs ( which i am trying to figure out how to solve ) but all in all it works

Support of Greater Blessings (if you have the spell) with Left mouse button.
Right mouse button for regular (small) blessings
 2 key bindings for Greater and regular Auto blessing
Aura assigments and so on ...

Known bugs are:
 1) If a player goes out of line of sight and we have to bless that target -> you have to wait another 30 seconds to try again
 2) If you Greater bless a class and then bless individual small for some members when small blessings expire you have to re-bless Greater blessings first

## Post 129008 by DrakkarBCN — 2025-04-29T18:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129008#p129008 | page 1 | era: pre-1.18.1 -->

> **Straydemon wrote: Thu Dec 14, 2023 6:25 pm**
> I'm currently using the pallypower addon from here:[https://github.com/madScripting/TurtleW ... PallyPower](https://github.com/madScripting/TurtleWoW-RelarPallyPower).
>  It works well most of the time but I'm having some issues.
>  If there are multiple players of the same class, pallypower will only buff the same person over and over again instead of cycling through them and buffing everyone. So I have to find out who's missing the buff and apply it manually. For example, my last dungeon group had 2 druids and another paladin, so I basically needed to manually buff everyone.
>  Is this supposed to happen or am I missing some important features?
>  Also, is there a way to make it cast a certain buff on myself but a different buff on other paladins?

I had same problem with that addon, but this addon works perfect: <https://github.com/ivanovlk/PallyPowerTW>

