---
title: "Pally Power, need help!"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3802"
topic_id: 3802
forum_id: 41
forum: "Paladin"
author: "Flero"
author_authority: "player"
posted: "2022-08-20T19:07:00Z"
last_post: "2023-06-21T18:30:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T07:58:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Pally Power, need help!

## Post 22955 by Flero — 2022-08-20T19:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22955#p22955 | page 1 | era: pre-1.18.1 -->

Hello my fellow Paladin Friends

I cannot get Pally Power to work and its making me freak out
I downloaded a version for turtle wow: Pally Power by Aznamir

When i left click on the other classes in my group it always says "cant find target xy"

Anyone know what i have to do?

## Post 27011 by Zakonniq — 2022-10-08T18:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27011#p27011 | page 1 | era: pre-1.18.1 -->

When I click in an empty spot, where i'm supose to set the buffs for individual classes nothing happens :|

## Post 27017 by Totuga (Barrens Chat Casualty) — 2022-10-08T19:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27017#p27017 | page 1 | era: pre-1.18.1 -->

60

*Last edited by Totuga on Wed Apr 26, 2023 4:12 am, edited 1 time in total.*

## Post 28376 by Signoftheraven — 2022-11-03T08:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28376#p28376 | page 1 | era: pre-1.18.1 -->

> **Flero wrote: Sat Aug 20, 2022 7:07 pm**
> Hello my fellow Paladin Friends
>
>  I cannot get Pally Power to work and its making me freak out
>  I downloaded a version for turtle wow: Pally Power by Aznamir
>
>  When i left click on the other classes in my group it always says "cant find target xy"
>
>  Anyone know what i have to do?

Try turning off auto self cast in game options.

## Post 29929 by Jarun — 2022-11-27T20:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29929#p29929 | page 1 | era: pre-1.18.1 -->

Hi,

I also do not get Pally Power to work. Downloaded the Addon here: <https://github.com/CosminPOP/PallyPower>

After restart this error comes up:
Interface ...116 attempt to index global "PallyPower_assignments " (a nil value)

Can someone please help?

Jarun

## Post 43330 by Thordekk — 2023-04-26T23:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43330#p43330 | page 1 | era: pre-1.18.1 -->

Hi, try this one, worked for me. There is a new option to use normal blessings instead of greater only <https://github.com/Azgaardian/PallyPower-Turtle>

## Post 44155 by Endo2412 — 2023-05-02T18:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44155#p44155 | page 1 | era: pre-1.18.1 -->

Finally 1 that works, tyvm for posting this

## Post 50859 by Pimple — 2023-06-21T18:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50859#p50859 | page 1 | era: pre-1.18.1 -->

> **Jarun wrote: Sun Nov 27, 2022 8:42 pm**
> Hi,
>
>  I also do not get Pally Power to work. Downloaded the Addon here: <https://github.com/CosminPOP/PallyPower>
>
>  After restart this error comes up:
>  Interface ...116 attempt to index global "PallyPower_assignments " (a nil value)
>
>  Can someone please help?
>
>  Jarun

It's been a while and you probably worked it out or moved on, but it took me a while to find out why I was getting this message, so in case anyone runs into the same and finds this thread as I did, I thought I'd reply.

In **\WTF\Account\[AccountName]\Turtle WoW\[CharacterName]\SavedVariables\PallyPower.lua** I had this:
Code: Select all

```
PallyPower_Assignments = nil
```

It must've happened Somehow(tm) when I downloaded a version of the add-on at first that didn't work. Anyway, if the file looks like that for you too, I would delete **PallyPower.lua** and **PallyPower.lua.bak** and reload the add-on. That recreates that file with a value where it says nil. I don't know if all works as intended yet but at least I'm not getting that error message, and the UI appears to be working.

