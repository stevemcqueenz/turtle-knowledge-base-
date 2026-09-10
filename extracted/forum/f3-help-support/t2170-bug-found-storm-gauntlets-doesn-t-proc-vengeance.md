---
title: "Bug found : Storm Gauntlets doesn't proc Vengeance"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2170"
topic_id: 2170
forum_id: 3
forum: "Help & Support"
author: "Lahire"
author_authority: "player"
posted: "2021-10-28T09:33:00Z"
last_post: "2021-10-28T13:51:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:26:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Bug found : Storm Gauntlets doesn't proc Vengeance

## Post 13279 by Lahire (Patch Note Conspiracy Theorist) — 2021-10-28T09:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=13279#p13279 | page 1 | era: pre-1.18.1 -->

Hi,

I'm building a paladin dps. A neat known quirk of this spec is that the blue gear Storm Gauntlets ( <https://classic.wowhead.com/item=12632/storm-gauntlets> ) procs the paladin's talent Vengeance to keep the +15% dps running.
This works on both vanilla and classic.

So I built Storm Gauntlets on Turtle. I discovered that :
 1. The proc works (3 damage on each melee strike and melee judgement)
 2. It correctly crits (with %spellcrit)
 3. It doesn't scale with spell power (normal)
But : 4. Its crit doesn't proc Vengeance.

I'm saddened by this bug, because I think it is a really cool part of retadin itemization to be able to do that, and it exists in other versions of WoW vanilla.

The fact this quirk works is documented, for example, on these various pages :
<https://www.judgementret.com/spelladin-guide>
[https://classic.wowhead.com/item=12632/ ... s#comments](https://classic.wowhead.com/item=12632/storm-gauntlets#comments) (comments)
[https://forum.elysium-project.org/topic ... ur-attack/](https://forum.elysium-project.org/topic/50465-adds-x-elemental-damage-to-your-attack/)

[embed: https://www.youtube.com/embed/O8LzYed7ONU]

[embed: https://s9e.github.io/iframe/2/reddit.min.html#classicwow/comments/fl1cuh#theme=]

Proofs are numerous & concordant imo.
Can this bug be fixed please ?

## Post 13284 by Paw (Bug Report Enthusiast) — 2021-10-28T12:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=13284#p13284 | page 1 | era: pre-1.18.1 -->

> **Lahire wrote: Thu Oct 28, 2021 9:33 am**
> Hi,
>
>  I'm building a paladin dps. A neat known quirk of this spec is that the blue gear Storm Gauntlets ( <https://classic.wowhead.com/item=12632/storm-gauntlets> ) procs the paladin's talent Vengeance to keep the +15% dps running.
>  This works on both vanilla and classic.
>
>  So I built Storm Gauntlets on Turtle. I discovered that :
>  1. The proc works (3 damage on each melee strike and melee judgement)
>  2. It correctly crits (with %spellcrit)
>  3. It doesn't scale with spell power (normal)
>  But : 4. Its crit doesn't proc Vengeance.
>
>  I'm saddened by this bug, because I think it is a really cool part of retadin itemization to be able to do that, and it exists in other versions of WoW vanilla.
>
>  The fact this quirk works is documented, for example, on these various pages :
>  <https://www.judgementret.com/spelladin-guide>
>  [https://classic.wowhead.com/item=12632/ ... s#comments](https://classic.wowhead.com/item=12632/storm-gauntlets#comments) (comments)
>  [https://forum.elysium-project.org/topic ... ur-attack/](https://forum.elysium-project.org/topic/50465-adds-x-elemental-damage-to-your-attack/)
>
> [embed: https://www.youtube.com/embed/O8LzYed7ONU]
>
>
> [embed: https://s9e.github.io/iframe/2/reddit.min.html#classicwow/comments/fl1cuh#theme=]
>
>
>  Proofs are numerous & concordant imo.
>  Can this bug be fixed please ?

I'm with you... but unfortunately can't help! We have a github bug report system where we sort out these issues. You find the link on our website if you wish to further your plea!

## Post 13287 by Lahire (Patch Note Conspiracy Theorist) — 2021-10-28T13:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=13287#p13287 | page 1 | era: pre-1.18.1 -->

thanks, I did a bug ticket on the turtle github.  smiling_turtle_head
[https://github.com/slowtorta/turtlewow- ... issues/402](https://github.com/slowtorta/turtlewow-bug-tracker/issues/402)

There are other items which work the same way :
 - Fiery Plate Gauntlet <https://database.turtlecraft.gg/?item=12631>
 - Blazefury Medallion <https://database.turtlecraft.gg/?item=17111>
They have the same family effect "add X damage to melee attack".

It is different from "X% chance of casting a bolt" you can find on :
 - Shadow Oil <https://database.turtlecraft.gg/?item=3824>
 - Helmet of the Scarlet Avenger <https://database.turtlecraft.gg/?item=81131>
 - Sulfuras <https://database.turtlecraft.gg/?item=17182>

All these effects should trigger Vengeance, as they did in vanilla and classic.
I gonna verify it ingame, but I'm ready to bet that the first family is bugged and the second family works as intended on Turtle (I'm pretty sure I've procced Vengeance with Shadow Oil and Helmet of the Scarlet Avenger).

