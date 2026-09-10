---
title: "how many debuffs can cast on target in twow?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13281"
topic_id: 13281
forum_id: 18
forum: "AddOns"
author: "Coolair"
author_authority: "player"
posted: "2024-02-29T13:28:00Z"
last_post: "2024-03-03T05:05:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:29:22Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# how many debuffs can cast on target in twow?

## Post 89034 by Coolair — 2024-02-29T13:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89034#p89034 | page 1 | era: pre-1.18.1 -->

i want to get debuffs on target in raid, when boss got lots of debuffs, i want to get it.
UnitDebuff("target", 16) returns icon
UnitDebuff("target", 17) returns nil, and UnitDebuff("target", 18) either.
how many debuffs can cast on target in twow?
how to get the index after 16?

## Post 89039 by Elisleris (Bug Report Enthusiast) — 2024-02-29T13:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89039#p89039 | page 1 | era: pre-1.18.1 -->

[viewtopic.php?t=5658](https://forum.turtlecraft.gg/viewtopic.php?t=5658)
 * The debuff limit was increased from 24 to 64. You will not see them all under your enemy frame, but they're there server-side.

## Post 89040 by Coolair — 2024-02-29T13:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89040#p89040 | page 1 | era: pre-1.18.1 -->

from the post:The debuff limit was increased from 24 to 64. You will not see them all under your enemy frame, but they're there server-side.
it means UnitDebuff("target", index), from 17 to 64, returns nil but they're there server-side.
any way to judge debuff17-64 on target?

## Post 89099 by Balake (Bug Report Enthusiast) — 2024-03-01T08:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89099#p89099 | page 1 | era: pre-1.18.1 -->

> **Coolair wrote: Thu Feb 29, 2024 1:45 pm**
> from the post:The debuff limit was increased from 24 to 64. You will not see them all under your enemy frame, but they're there server-side.
>  it means UnitDebuff("target", index), from 17 to 64, returns nil but they're there server-side.
>  any way to judge debuff17-64 on target?

Debuffs 17-48 show as "buffs" so you can get them with UnitBuff
 49 to 64 are invisible and unable to see by the player

## Post 89257 by Coolair — 2024-03-03T05:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89257#p89257 | page 1 | era: pre-1.18.1 -->

thanks, got it!

