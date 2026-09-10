---
title: "Farming/grinding macro help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13187"
topic_id: 13187
forum_id: 45
forum: "Hunter"
author: "Natto1972"
author_authority: "player"
posted: "2024-02-21T14:28:00Z"
last_post: "2024-02-22T10:56:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:13:40Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Farming/grinding macro help

## Post 88311 by Natto1972 — 2024-02-21T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88311#p88311 | page 1 | era: pre-1.18.1 -->

Trying to make a macro that includes: Hunter's mark+pet attack+auto shot
Is it possible in this gameversion? I got supermacro but years has gone by since i used it and i cant find any source elsewhere...

//natto

## Post 88348 by Kwall — 2024-02-21T19:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88348#p88348 | page 1 | era: pre-1.18.1 -->

/script if not IsCurrentAction(9) then UseAction(9) end;
/cast Hunter's Mark
/script CastPetAction(1)

The number 9 is where I have auto shot on my hot bar this can be changed you also don't need any macro addons for this.

*Last edited by Kwall on Wed Feb 21, 2024 7:47 pm, edited 1 time in total.*

## Post 88349 by Kwall — 2024-02-21T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88349#p88349 | page 1 | era: pre-1.18.1 -->

You can also add your pet stance by adding /script CastPetAction(enter position of spell number here)

 1 for attack
 2 for follow
 3 for stay
 4 for growl
 5 for claw
 8 for aggressive stance
 9 for defensive stance
 10 for passive

## Post 88350 by Kwall — 2024-02-21T19:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88350#p88350 | page 1 | era: pre-1.18.1 -->

If you spam it, it will turn your auto shot on and off the end; part doesn't work for auto shot like it does for melee auto attack but it works great for what I use it for

## Post 88409 by Natto1972 — 2024-02-22T10:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88409#p88409 | page 1 | era: pre-1.18.1 -->

ty m8!

