---
title: "For Vampirism, add messages to Combat Log"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11576"
topic_id: 11576
forum_id: 14
forum: "Suggestions"
author: "Krokzogg"
author_authority: "player"
posted: "2023-11-09T00:14:00Z"
last_post: "2024-06-14T12:58:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T11:51:22Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# For Vampirism, add messages to Combat Log

## Post 76558 by Krokzogg — 2023-11-09T00:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76558#p76558 | page 1 | era: pre-1.18.1 -->

Abilities similar to Vampirism (such as Siphon Life, Drain Life or Vampiric Embrace) write their damage ticks and healing ticks in the Combat Log. Vampirism healing ticks do not appear in the Combat Log. And assessing the usefulness of Vampirism is quite difficult.

Can vampirism ticks be displayed in the Combat Log?

## Post 96579 by Penfold — 2024-06-08T03:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96579#p96579 | page 1 | era: pre-1.18.1 -->

Agree, 100%.  Really hard to work out a) if it's even working, or b) if it's worth it, with no feedback whatsoever.

## Post 96924 by Bawanaruto — 2024-06-13T00:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96924#p96924 | page 1 | era: pre-1.18.1 -->

agreed.

## Post 96960 by Theexpell — 2024-06-13T13:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96960#p96960 | page 1 | era: pre-1.18.1 -->

It's not shown in the combat log for performance reasons.

<https://turtlecraft.gg/bug-report?id=5667>

## Post 97003 by Xanwow — 2024-06-14T12:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97003#p97003 | page 1 | era: pre-1.18.1 -->

I've done quite a bit of testing into vampirism and it seems to work in a strange way. Each item with vampirism calculates the healing separately.

For example, if you have 5 pieces with 1% vampirism and hit for 100 damage, you receive 5 different heals for 1 hp.

There is a lot of rounding and integer math involved, so you may end up getting healed for more or less than you expect, so it could be useful to see the real numbers in a meter. Unfortunately, without a drastic change to the implementation, your combat log would be filled with multiple micro-heals from vampirism.

