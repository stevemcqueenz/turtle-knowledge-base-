---
title: "Problems with understanding or programming? Where is my attack speed?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20707"
topic_id: 20707
forum_id: 4
forum: "General"
author: "Ulukay"
author_authority: "player"
posted: "2025-08-06T19:29:00Z"
last_post: "2025-08-06T20:52:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T09:42:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Problems with understanding or programming? Where is my attack speed?

## Post 143420 by Ulukay (Patch Note Conspiracy Theorist) — 2025-08-06T19:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143420#p143420 | page 1 | era: pre-1.18.1 -->

Can someone explain to me why, when using [Crusader Strike]x3=15% + [Seal of the Crusader]=40% + [The Jackhammer] =30%, my attack speed with [The Jackhammer], which starts at 2.5, is not 0.375, but 1.18?
![Image](https://cdn.imgpile.com/f/PsU1Log_xl.webp)

![Image](https://cdn.imgpile.com/f/nCYidy2_xl.webp)
+
![Image](https://cdn.imgpile.com/f/k1rmYk6_xl.webp)
+
![Image](https://cdn.imgpile.com/f/qK5quRq_xl.webp)

## Post 143421 by Elisleris (Bug Report Enthusiast) — 2025-08-06T19:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143421#p143421 | page 1 | era: pre-1.18.1 -->

Maybe your addon can't calculate this combination of buffs?

## Post 143422 by Atreidon (Grandmaster of Forum PvP) — 2025-08-06T19:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143422#p143422 | page 1 | era: pre-1.18.1 -->

Because in simple terms +100% attackspeed means you get double the amount of attacks in a given timeframe, not instant attacks.

The way its calculated is

Weapon speed / (1 + (attack speed bonus percentages/100))

If you think about it, otherwise anyone with 100% haste would do an infinite amount of autoattacks per second.

To make matters even more confusing seal of the crusader works different from other haste effects entirely. Thats likely why the numbers dont line up for your example

## Post 143424 by Dezhan (Barrens Chat Casualty) — 2025-08-06T19:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143424#p143424 | page 1 | era: pre-1.18.1 -->

looks like you have done a 15%+30%+40%=85%      2.5x0.15=0,375
and attack speed buffs stacking dont work like that.
you need to do:
 15%
 2.5/1.15=2,173913 about 2,17
 40%
 2,17/1,40=1,55
 30%
 1,55/1,30=1,1923076 about 1,19
but wow has a weird rounding system so it ends up at 1,18

## Post 143429 by Ulukay (Patch Note Conspiracy Theorist) — 2025-08-06T20:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143429#p143429 | page 1 | era: pre-1.18.1 -->

So the difference is in how it's calculated. ![🤔](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f914.svg)
Even if 15+40+30=85 and 2.5/1.85=1.351351351351351

So how can I make an infinite number of attacks per second? ![🙃](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f643.svg)

## Post 143434 by Dezhan (Barrens Chat Casualty) — 2025-08-06T20:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143434#p143434 | page 1 | era: pre-1.18.1 -->

you cant add them up like that, and you can never get 0% attack speed :)
you need to add attack speed one by one 30% out of 2.5 first and 40% out of the value you get from first attackspeed buff.
So we say you had 5 diffrent buffs that gave you attack speed and all togheter gave you +400% it would still be around 0.5 attack speed from a 2.5 weapon. 2 weapon hit per sec.

