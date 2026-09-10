---
title: "Broken tooth?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11815"
topic_id: 11815
forum_id: 45
forum: "Hunter"
author: "Hyper1on"
author_authority: "player"
posted: "2023-11-20T20:15:00Z"
last_post: "2023-12-29T18:48:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:13:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Broken tooth?

## Post 78131 by Hyper1on — 2023-11-20T20:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78131#p78131 | page 1 | era: pre-1.18.1 -->

Greetings to all. Can anyone tell me what the respawn time is for a Broken tooth npc? PQ says it's 8 hours, but it's not

## Post 78190 by Bigsmerf (Grandmaster of Forum PvP) — 2023-11-21T15:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78190#p78190 | page 1 | era: pre-1.18.1 -->

Pretty sure they fixed it so broken tooth wasn't one of the only viable pet picks. Might be wrong though.

## Post 78208 by Traintech (Barrens Chat Casualty) — 2023-11-21T19:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78208#p78208 | page 1 | era: pre-1.18.1 -->

I mean, there are a few 1.2 AS pets if you wanted to try something different...

## Post 78258 by Hyper1on — 2023-11-22T03:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78258#p78258 | page 1 | era: pre-1.18.1 -->

> **Traintech wrote: Tue Nov 21, 2023 7:12 pm**
> I mean, there are a few 1.2 AS pets if you wanted to try something different...

Surely not 1.0?

## Post 78264 by Traintech (Barrens Chat Casualty) — 2023-11-22T04:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78264#p78264 | page 1 | era: pre-1.18.1 -->

Well I guess it depends on the use but I haven't seen a reason to bother... In PVP, a sheep that is 1.0AS is still... a sheep...I figured I would give Spiteflayer a try for soloing instances... I can tell you, the re-spawn info wasn't the same for him so maybe it was modified for BrokenTooth but I haven't had luck finding this kinda info...

## Post 78816 by Steakhouse (Patch Note Conspiracy Theorist) — 2023-11-26T17:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78816#p78816 | page 1 | era: pre-1.18.1 -->

Brokentooth's attack speed is good for 2 things: caster interrupts and Frenzy, so it's not just a pvp thing.

The ZG bats have an attack speed of 1 (as well as extremely fast movespeed iirc, rivaling epic mounts) so theyre an alternative, but requires going to ZG. It can be solo'd, though, it's just very difficult and risky if you're HC.

I don't know of any other pets that have a fast attack speed ; would be nice to have that info available from Beast Lore.

## Post 83113 by Mechanik42 — 2023-12-29T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83113#p83113 | page 1 | era: pre-1.18.1 -->

> **Steakhouse wrote: Sun Nov 26, 2023 5:40 pm**
> would be nice to have that info available from Beast Lore.

There's actually a macro that lets you know the attack speed of your target. Code: Select all

```
/run mainSpeed, offSpeed = UnitAttackSpeed("target") print(format("%s: attack speed = %.2f", GetUnitName("target"), mainSpeed))
```

Clicking this macro while targeting any beast will let you know the attack speed of such beast.

