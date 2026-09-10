---
title: "IsAutoRepeatAction() is bugged - cannot make spammable Auto Shot Macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14914"
topic_id: 14914
forum_id: 45
forum: "Hunter"
author: "Bashor"
author_authority: "player"
posted: "2024-09-19T19:55:00Z"
last_post: "2024-09-30T01:25:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:13:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# IsAutoRepeatAction() is bugged - cannot make spammable Auto Shot Macro

## Post 101516 by Bashor — 2024-09-19T19:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101516#p101516 | page 1 | era: pre-1.18.1 -->

/run if not IsAutoRepeatAction(36)then CastSpellByName("Auto Shot")end

IsAutoRepeatAction(36) that thing returning 1 or TRUE if the corresponding slot is active on the Action Bar does not work. It is essential for Hunter Auto Shot Macros in 1.12 and used to work on Nostalrius or Feenix.

Edit: IsCurrentAction(slot) also does not seem to work, tested with Raptor Strike.
IsAttackAction(slot) works with "Attack", but not with "Auto Shot" - shouldn't solve the problem, just mentioning.

## Post 101793 by Cochise — 2024-09-24T02:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101793#p101793 | page 1 | era: pre-1.18.1 -->

IsAutoRepeatAction works fine

[embed: https://www.youtube.com/embed/qQ-Gk20yU2E]

## Post 101912 by Bashor — 2024-09-26T00:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101912#p101912 | page 1 | era: pre-1.18.1 -->

I checked it again and using only the Auto Shot line as demonstrated in your video does work perfectly. The first line in the following macro clearly works, however the second one will now cause the attack animation to be spammed in a similar fashion to not using a macro at all.

/run if TargetUnit("player")==nil or TargetUnit("player")==friend then TargetNearestEnemy()end
/run if not IsAutoRepeatAction(36)then CastSpellByName("Auto Shot")end

## Post 101918 by Borefficz (Patch Note Conspiracy Theorist) — 2024-09-26T06:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101918#p101918 | page 1 | era: pre-1.18.1 -->

It works perfectly fine for me.

## Post 101994 by Cochise — 2024-09-27T05:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101994#p101994 | page 1 | era: pre-1.18.1 -->

> **Bashor wrote: Thu Sep 26, 2024 12:57 am**
> I checked it again and using only the Auto Shot line as demonstrated in your video does work perfectly. The first line in the following macro clearly works, however the second one will now cause the attack animation to be spammed in a similar fashion to not using a macro at all.
>
>  /run if TargetUnit("player")==nil or TargetUnit("player")==friend then TargetNearestEnemy()end
>  /run if not IsAutoRepeatAction(36)then CastSpellByName("Auto Shot")end

The issue is your macro. TargetUnit doesn't return a value; it only targets a unit. Thus, you're targeting yourself before switching to the nearest enemy, which interrupts Auto Shot. To get those values, use functions UnitExists and UnitIsFriend.

Here's a working version
Code: Select all

```
/run if not UnitCanAttack("player","target")then TargetNearestEnemy()end if not IsAutoRepeatAction(36)then CastSpellByName"Auto Shot"end
```

## Post 102194 by Bashor — 2024-09-30T01:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102194#p102194 | page 1 | era: pre-1.18.1 -->

Sick dude that is great. Thanks. I think I used UnitExists many years ago on the private server macro and I just somehow made it work quickly on Turtle recently. Thanks a lot.

