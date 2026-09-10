---
title: "Macro Inspiration (Warrior) [Charge + Moonglow]"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23245"
topic_id: 23245
forum_id: 4
forum: "General"
author: "Wez0"
author_authority: "player"
posted: "2025-12-11T15:56:00Z"
last_post: "2025-12-11T15:56:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:38:19Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro Inspiration (Warrior) [Charge + Moonglow]

## Post 162480 by Wez0 (Patch Note Conspiracy Theorist) — 2025-12-11T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162480#p162480 | page 1 | era: 1.18.1-announced-pre-release -->

I've tried looking for easier macros, but only found this now.

This lets you charge and use moonglow at the same time.

Put alt+255 as the name

/cast Charge
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Moonglow"))then UseContainerItem(b,s,1)end end end

If anyone knows a solution for showtool tip, please show me [viewtopic.php?t=12569](https://forum.turtlecraft.gg/viewtopic.php?t=12569)

