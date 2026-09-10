---
title: "A working Raidframe grid like UI"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18258"
topic_id: 18258
forum_id: 18
forum: "AddOns"
author: "moloki"
author_authority: "player"
posted: "2025-03-31T01:47:00Z"
last_post: "2025-05-30T13:55:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:25:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# A working Raidframe grid like UI

## Post 124545 by moloki — 2025-03-31T01:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124545#p124545 | page 1 | era: pre-1.18.1 -->

Hi. Been testing so many addons now for Raidframes that fulfills my requirements but I think I need some assistance.
Req:
Flat layout
Resizable and somewhat custimizable, fonts, colors, text
HealComm integration
Clique integration or build in clickcasting
option to display dispellable debuffs
Must have reliable distance controls.
Not mandatory but support for Lazyspell for automatic downranking would be great
option to display my Buffs (good to have, not required tho)

Starting with the ones I tested  and what I cannot get working properly.

Notgrid - So far probably the one I like the most. But I cant seem to figure out how to show debuffs(dispellable ones)
The readme only has thism  not so helpful description "Use / for separating multiple Buffs/Debuffs to track on one icon.""
so.. should I look at wowhead and take the 2000+ existing debuffs and put them there ?? (probably not but I dont get it, must be a simpler way and only show debuffs dispellable by my class)
Im only guessing that the red indicator is a debuff and green is something else?

HealersMate - This one fulfills all my needs but its so bloody ugly that I cant use it. looks 15 years out of date.
there is also a setting that dont make no sence. when binding mouse buttons you have left right middle and then "forward and backward"?? in the code it looks like Button 4 and button 5 but not tested if this is the case
When using it in Molten Core on Raggy it was somewhat frustrating because all raid members looked like they were in range for heals but half of them were not. Think this was solved by Superwow.

CRAP - it looks and feels pretty good but I dont think it has support for debuffs

LunaUnitFrames - looks promising but I dont this one can show debuffs either.
according to they developer "The fastest health-bars of all the raid-frames out there"
Not gotten it to work properly though

Does Grid2 work on 1.12 client?  I found an old Grid version but it looks very old and have not had time to check it yet.

Cell is another one that I used before but I doubt there is a port for 1.12 and Turtle wow.

I saw this the other night and I'm curious if anyone knows what raidframes addon is used here

[embed: https://www.youtube.com/embed/FsU0gdCjQs8]

I would prefer to use something other than Healersmate, but atleast that one works.. There are some strange issues that occurs occationally that blocks outgoing heals for some reason. It was written something in the combat log about not ready yet or similar. perhaps only for a few milliseconds but that is not acceptable for me.

PFui had some nice things out of the box but it was far to slow for me. I believe the healing will suffer cuz of performance issues.

## Post 124717 by Oldmana (Barrens Chat Casualty) — 2025-03-31T18:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124717#p124717 | page 1 | era: pre-1.18.1 -->

Hey, current developer of HealersMate here. To address some of your points:

> **moloki wrote: Mon Mar 31, 2025 1:47 am**
> there is also a setting that dont make no sence. when binding mouse buttons you have left right middle and then "forward and backward"?? in the code it looks like Button 4 and button 5 but not tested if this is the case

The "Forward" and "Backward" binds are indeed Button 4 and 5, which are the side buttons that some mice have. They go forward and backward on some programs, such as web browsers.

> **moloki wrote: Mon Mar 31, 2025 1:47 am**
> When using it in Molten Core on Raggy it was somewhat frustrating because all raid members looked like they were in range for heals but half of them were not. Think this was solved by Superwow.

Range checking is currently only supported for the simple 28 yd check in vanilla clients. There's hacky ways to do a 30/40 yd check, but I haven't gotten around to that yet. As you discovered, installing SuperWoW allows you to see real distance to other players.

> **moloki wrote: Mon Mar 31, 2025 1:47 am**
> I would prefer to use something other than Healersmate, but atleast that one works.. There are some strange issues that occurs occationally that blocks outgoing heals for some reason. It was written something in the combat log about not ready yet or similar. perhaps only for a few milliseconds but that is not acceptable for me.

I'm not sure what you mean by this, the addon itself shouldn't ever "block" casts. Could you elaborate?

> **moloki wrote: Mon Mar 31, 2025 1:47 am**
> This one fulfills all my needs but its so bloody ugly that I cant use it. looks 15 years out of date.

If you're referring to the bar style, there are some alternatives that you can use. It is intended in the future for things like this to be easily customizable, but for now, you can edit the load script. Go to **HealersMate Settings>Customize>Edit Load Script**, paste in Code: Select all

```
GetProfile("Default").HealthBarStyle = "Blizzard Raid"
GetProfile("Default").PowerBarStyle = "Blizzard Raid"
```

Replace "Default" with the style name that you're using. There's a few different bar styles you can try out:
"Blizzard Raid" - The one that CRAP uses
"Blizzard Raid Sideless" - The one that CRAP uses, but without the stretched out sides
"Blizzard" - The default health bar texture
"Blizzard Smooth" - The default health bar texture, but without the horizontal gradient

## Post 124781 by Bonho — 2025-03-31T22:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124781#p124781 | page 1 | era: pre-1.18.1 -->

> **moloki wrote: Mon Mar 31, 2025 1:47 am**
> I saw this the other night and I'm curious if anyone knows what raidframes addon is used here

Thats Notgrid

## Post 124892 by moloki — 2025-04-01T11:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124892#p124892 | page 1 | era: pre-1.18.1 -->

Hello. Tried to reply last night but forum was down .
I spent some more time on Healermate and managed to fix most of the kinks. I spent alot of time testing the Edit Load Script but I needed some examples like the ones you supplied. many thanks for that.
I did not get lazyspell working with Healersmate but I can live without it.
Can you custemize the Debuff indicator icons? make each unit more evenly squared? change the filcolor from gradiant to one color? just some of the things I would like to play around with but there is no examples what you need to change in the edit script settings.
regarding the issue I got that blocked spells a few times, it was very strange and I have no idea why. the combatlog only said something like "not ready yet" . I wish I took a screenshot but I dont have one. if it happens again I will.

Keep up the good work.

oh, and add some more examples on github what you can do with Loadscript and postload script that would be most helpful. I still dont understand whats the difference between them  happy_turtle_head

*Last edited by moloki on Tue Apr 01, 2025 11:53 am, edited 1 time in total.*

## Post 124900 by moloki — 2025-04-01T12:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124900#p124900 | page 1 | era: pre-1.18.1 -->

Did some testing on the Load script and postload script but I dont see any difference. its not clear if both need reloadui or just one. tried just changing profile.HealthBarColor = "Green" in both of them but that does not seem to change anything. what I need the most is some settings regarding debuffs, dispellable debuffs

## Post 133367 by Cxn_r1122 — 2025-05-28T20:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133367#p133367 | page 1 | era: pre-1.18.1 -->

Hello,

I was wondering if there is a simple way or a piece of code to make the bars horizontal and not vertical?

Thanks.

## Post 133670 by Noephix (Patch Note Conspiracy Theorist) — 2025-05-30T13:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133670#p133670 | page 1 | era: pre-1.18.1 -->

Try out sRaidFrames.

