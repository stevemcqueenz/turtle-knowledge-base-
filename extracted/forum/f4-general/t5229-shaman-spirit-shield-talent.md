---
title: "Shaman Spirit Shield talent"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5229"
topic_id: 5229
forum_id: 4
forum: "General"
author: "Realdsy"
author_authority: "player"
posted: "2022-12-29T19:23:00Z"
last_post: "2022-12-31T12:23:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:09:21Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Shaman Spirit Shield talent

## Post 31779 by Realdsy — 2022-12-29T19:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31779#p31779 | page 1 | era: pre-1.18.1 -->

I have noticed that according to my hud (no addon) - my character don't get any armor bonus from this talent.
Equiping a 500 armor shield I should get 150 armor bonus but I get only 50 (which comes from Ancestral Guardian I guess).

Is it bugged or just not showing in hud?

## Post 31787 by Kairion (Bug Report Enthusiast) — 2022-12-29T21:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31787#p31787 | page 1 | era: pre-1.18.1 -->

If i recall correctly spirit shield talent increases armor of ALL shields you look at by 30% so your 500 armor shield would have 30% less even in its own tooltip if you unlearn the talent.

## Post 31814 by Realdsy — 2022-12-30T15:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31814#p31814 | page 1 | era: pre-1.18.1 -->

I was refering to Fortified Shield Which according to internet has 495 armor (just rounded up in my example to highlight the issue)

## Post 31822 by Darkgestalt — 2022-12-30T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31822#p31822 | page 1 | era: pre-1.18.1 -->

Ok, so the calculations of the skill is very frumpy, if you unequip a shield the bonus armor is still added to you total amount.

You can reproduce this as follows:
 - Equip ALL gear and make of a note of your armor value
 - Unequip your shield, you notice it only reduces the base amount, make a not of this armor value
 - unequip ANY other armor piece, like a bracelet or whatever
 - reequip that armor piece, you now have a LOWER armor value then before :D Thats the 30% you get from Spirit Shield

Guess it truly is spirited, since it lingers on even if you dont use the shield...

## Post 31848 by Realdsy — 2022-12-31T12:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31848#p31848 | page 1 | era: pre-1.18.1 -->

> **Darkgestalt wrote: Fri Dec 30, 2022 7:36 pm**
> Ok, so the calculations of the skill is very frumpy, if you unequip a shield the bonus armor is still added to you total amount.
>
>  You can reproduce this as follows:
>  - Equip ALL gear and make of a note of your armor value
>  - Unequip your shield, you notice it only reduces the base amount, make a not of this armor value
>  - unequip ANY other armor piece, like a bracelet or whatever
>  - reequip that armor piece, you now have a LOWER armor value then before :D Thats the 30% you get from Spirit Shield
>
>  Guess it truly is spirited, since it lingers on even if you dont use the shield...

Yes I got the same results. Thank you!

