---
title: "Mouseover macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6113"
topic_id: 6113
forum_id: 18
forum: "AddOns"
author: "Tidushugo"
author_authority: "player"
posted: "2023-03-20T22:19:00Z"
last_post: "2024-11-13T09:33:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:27:59Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Mouseover macro

## Post 38398 by Tidushugo — 2023-03-20T22:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38398#p38398 | page 1 | era: pre-1.18.1 -->

Yo
I'm looking for the correct syntax for macro with classicmouseover

i'd like to have a macro that :
make my pet attack on mouseover but not changing my current target
else make my pet attack my target

Thx

## Post 38784 by Diurmiud — 2023-03-24T01:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38784#p38784 | page 1 | era: pre-1.18.1 -->

a player recommended me a file where there were addons that work in vanilla.The macro in case you haven't found it yet.

/run TargetUnit("mouseover")
/cast spellname
/run TargetLastTarget()

you can replace the spell name with "PetAttack"

## Post 107347 by Ectora — 2024-11-10T09:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107347#p107347 | page 1 | era: pre-1.18.1 -->

> **Diurmiud wrote: Fri Mar 24, 2023 1:24 am**
> a player recommended me a file where there were addons that work in vanilla.The macro in case you haven't found it yet.
>
>  /run TargetUnit("mouseover")
>  /cast spellname
>  /run TargetLastTarget()
>
>  you can replace the spell name with "PetAttack"

thank you, I was searching how to make my mouse over to work, is there a library for macros for classic mouseover addon?

## Post 107816 by apollonormally — 2024-11-13T09:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107816#p107816 | page 1 | era: pre-1.18.1 -->

> **Diurmiud wrote: Fri Mar 24, 2023 1:24 am**
> a player recommended me a file where there were addons that work in vanilla.The macro in case you haven't found it yet.
>
>  /run TargetUnit("mouseover")
>  /cast spellname
>  /run TargetLastTarget()
>
>  you can replace the spell name with "PetAttack"

Great suggestion. I was looking for information on ouseover macro.

