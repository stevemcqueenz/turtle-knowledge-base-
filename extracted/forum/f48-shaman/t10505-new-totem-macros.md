---
title: "New Totem Macros"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10505"
topic_id: 10505
forum_id: 48
forum: "Shaman"
author: "Ronbo"
author_authority: "player"
posted: "2023-10-03T15:03:00Z"
last_post: "2026-02-26T22:57:00Z"
post_count: 14
pages: 1
fetched: "2026-09-10T08:20:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# New Totem Macros

## Post 68468 by Ronbo — 2023-10-03T15:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68468#p68468 | page 1 | era: pre-1.18.1 -->

I'm trying to put together macros for laying down 4 totems at once since the new patch but having issues. Does anyone have a tested macros created yet?

## Post 68575 by Kundishunter — 2023-10-04T01:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68575#p68575 | page 1 | era: pre-1.18.1 -->

From what I gather, it won't be possible in Classic - Vanilla. Its on the General cooldown (GDC).

This is what I use for example (since 1.17 its VERY fast):

#showtooltip
/castsequence reset=4 Healing Stream Totem, Searing Totem, Grounding Totem

## Post 68583 by Ronbo — 2023-10-04T02:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68583#p68583 | page 1 | era: pre-1.18.1 -->

Roger that. Thank you

## Post 68611 by Ronbo — 2023-10-04T03:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68611#p68611 | page 1 | era: pre-1.18.1 -->

Must be doing something wrong. Im using your macro and it’s just saying it and not casting anything

## Post 68638 by Geojak (Grandmaster of Forum PvP) — 2023-10-04T08:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68638#p68638 | page 1 | era: pre-1.18.1 -->

He posted you a macro form classic. Does not work without some addon thaz enabled it. Also he said its on gcd when that is exactly what changed and why a macro is needed.

Try something like
/run CastSpellByName ("totem name" ); CastSpellByName("...)... end

## Post 68960 by Kundishunter — 2023-10-05T18:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68960#p68960 | page 1 | era: pre-1.18.1 -->

Hey Geojak, I tried your macro and it won't work at all. Anyone have something that works then?

## Post 69584 by Kundishunter — 2023-10-08T14:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69584#p69584 | page 1 | era: pre-1.18.1 -->

So basically you just need to spam your button 4 times real quick with this macro:

#showtooltip
/cast totem1
/cast totem2
/cast totem3
/cast totem4

It works, thats all.

## Post 69625 by Imonobor (Bug Report Enthusiast) — 2023-10-08T18:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69625#p69625 | page 1 | era: pre-1.18.1 -->

> **Kundishunter wrote: Sun Oct 08, 2023 2:06 pm**
> So basically you just need to spam your button 4 times real quick with this macro:
>
>  #showtooltip
>  /cast totem1
>  /cast totem2
>  /cast totem3
>  /cast totem4
>
>  It works, thats all.

Dunno what addons you have, but #showtooltip doesn't work in Vanilla, and the macro itself only casts the first totem in the list.

## Post 69648 by Vurion — 2023-10-08T23:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69648#p69648 | page 1 | era: pre-1.18.1 -->

I use an addon named Call of Elements:

<https://legacy-wow.com/vanilla-addons/call-of-elements/>

It supposedly has the ability to do what you want with one key, though I haven’t tried it yet.

Also, weren’t shamans getting the ability to drop all four at once with this patch?

## Post 69781 by Aljava — 2023-10-09T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69781#p69781 | page 1 | era: pre-1.18.1 -->

Nope, dropping all four totems was never the intent with the patch. Instead they placed all element types of totem separate in their own cooldowns. Effectively with button mashing you can place all 4 totems in one GCD (plus points if you play on a laptop or a slim key keyboard, as you can slide your finger in a row of 4 keys, and the effect is as if you dropped all 4 at once) but as far as 1 button press dropping all four, no dice that i know of.

Just clarifying and sending a virtual water bottle to see if anyone cracks the client limitation "code"

## Post 71394 by Takinsur — 2023-10-17T04:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71394#p71394 | page 1 | era: pre-1.18.1 -->

/run local _gspells = { "Windfury Totem", "Strength of Earth Totem", "Mana Spring Totem"} if GetSpellCooldown(4,"BOOKTYPE_SPELL")==0 then _gi=_gi and _gi > 0 and _gi or 1 CastSpellByName(_gspells[_gi]) _gi = math.mod(1+_gi, 1+table.getn(_gspells))end

gotta spam it but it does the job

from: [https://github.com/Meridaw/Vanilla-Macr ... equence.md](https://github.com/Meridaw/Vanilla-Macros/blob/master/Shaman/Totem/Castsequence.md)

## Post 143986 by Pmi999 — 2025-08-09T13:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143986#p143986 | page 1 | era: pre-1.18.1 -->

Takinsur's macro works perfectly - just tried it out - super fast placements as well

## Post 169210 by Regisseur — 2026-02-22T17:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169210#p169210 | page 1 | era: 1.18.1-announced-pre-release -->

Don't forget to enable the namepower option in the MODS to place all the totems in a macro with a single click.

#showtooltip
/cast totem1
/cast totem2
/cast totem3
/cast totem4

## Post 169491 by Riiya — 2026-02-26T22:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169491#p169491 | page 1 | era: 1.18.1-announced-pre-release -->

With the 'Call of Elements' addon, you can set up totem arrangements and bind them to a button
And with the 'nampower' mod, you can put down all 4 totems at once with no GCD

