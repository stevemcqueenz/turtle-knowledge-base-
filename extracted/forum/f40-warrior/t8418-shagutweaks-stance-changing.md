---
title: "ShaguTweaks, stance changing"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8418"
topic_id: 8418
forum_id: 40
forum: "Warrior"
author: "Thricew"
author_authority: "player"
posted: "2023-07-21T22:36:00Z"
last_post: "2024-03-27T13:50:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T07:54:06Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# ShaguTweaks, stance changing

## Post 54265 by Thricew (Barrens Chat Casualty) — 2023-07-21T22:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54265#p54265 | page 1 | era: pre-1.18.1 -->

hi all
Got the addon ShaguTweaks which changes stances on required on casting spell
But today this changing stop working. What it may be?  crying_turtle

## Post 54279 by Thricew (Barrens Chat Casualty) — 2023-07-22T08:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54279#p54279 | page 1 | era: pre-1.18.1 -->

i notice that if i cast charge through the macro like

/cast Charge
/cast Rend

i will automaticaly change stance.

but if i cast it like

/cast Charge

or just hit charge button - it doesnt change stances.

what it could be?  wary_turtle_head

## Post 54499 by Thricew (Barrens Chat Casualty) — 2023-07-24T18:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54499#p54499 | page 1 | era: pre-1.18.1 -->

Guys if someone will exp such problem - disable of UnitScan adddon fix this.

i dont know how UnitScan interfere with this but it works

## Post 67723 by Aljava — 2023-09-30T08:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67723#p67723 | page 1 | era: pre-1.18.1 -->

Would this shagu tweaks work for dropping druid forms If I try to cast a spell while shapeshifted?

## Post 91509 by Mehhs — 2024-03-27T09:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=91509#p91509 | page 1 | era: pre-1.18.1 -->

Idk that it`s normal or not.

To make ability work in different stance i need 3 clicks on this ability. First - i get error about stance. Second  - changing stance. Third - using ability. ( with pfUI addon (ShaguTweaks) )

To make such macros work:
/cast Defensive Stance
/cast Taunt

I need 2 clicks.

Any chance to make this work by one click?

## Post 91517 by Zeran (Patch Note Conspiracy Theorist) — 2024-03-27T11:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=91517#p91517 | page 1 | era: pre-1.18.1 -->

> **Mehhs wrote: Wed Mar 27, 2024 9:50 am**
> Idk that it`s normal or not.
>
>  To make ability work in different stance i need 3 clicks on this ability. First - i get error about stance. Second  - changing stance. Third - using ability. ( with pfUI addon (ShaguTweaks) )
>
>  To make such macros work:
>  /cast Defensive Stance
>  /cast Taunt
>
>  I need 2 clicks.
>
>  Any chance to make this work by one click?

You can't chain abilities like that in Vanilla as far as I know. So the most you can do is write a macro in Lua that checks if you're already in Defensive Stance and then only casts Taunt if you're in Defensive Stance, otherwise it only switches to Defensive Stance and does not cast Taunt.

So you'd have to press the ability 2 times (1st press = stance switch, 2nd press = Taunt), but it should get rid of the error you're currently getting on the first press, at least.

## Post 91519 by Mehhs — 2024-03-27T11:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=91519#p91519 | page 1 | era: pre-1.18.1 -->

Thanks for answer.

## Post 91524 by Calli (Patch Note Conspiracy Theorist) — 2024-03-27T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=91524#p91524 | page 1 | era: pre-1.18.1 -->

Press buttons boyz, don't click!

