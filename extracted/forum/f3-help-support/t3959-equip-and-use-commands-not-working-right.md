---
title: "Equip and use commands not working right"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3959"
topic_id: 3959
forum_id: 3
forum: "Help & Support"
author: "Snoodydood"
author_authority: "player"
posted: "2022-08-30T00:57:00Z"
last_post: "2022-08-30T07:59:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:21:58Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Equip and use commands not working right

## Post 23963 by Snoodydood (Patch Note Conspiracy Theorist) — 2022-08-30T00:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23963#p23963 | page 1 | era: pre-1.18.1 -->

It seems the /equip and /use chat commands aren't functioning and just give the "try using /help" prompt whenever they are used. I don't know if this is a known issue or not but it also prevents certain types of macros from working.

## Post 23969 by Dasenel — 2022-08-30T04:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23969#p23969 | page 1 | era: pre-1.18.1 -->

Hey, macros work different in vanilla. You can't just type /equip or /attack for auto attack.
There are 2 solutions:
 - get an addon that allows to use modern macros, you can find them here on forum
 - use vanilla specific ones like this one for example (for auto attack instead of just /attack)
/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;

## Post 23980 by Geojak (Grandmaster of Forum PvP) — 2022-08-30T07:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23980#p23980 | page 1 | era: pre-1.18.1 -->

I have an issue with lua equip item slot macros.

They somehow cause gcd when they should not

