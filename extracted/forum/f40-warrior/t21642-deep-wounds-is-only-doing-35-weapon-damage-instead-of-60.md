---
title: "Deep Wounds is only doing ~35% weapon damage instead of 60%"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21642"
topic_id: 21642
forum_id: 40
forum: "Warrior"
author: "Cromius"
author_authority: "player"
posted: "2025-09-02T17:45:00Z"
last_post: "2025-09-02T17:45:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T07:52:32Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Deep Wounds is only doing ~35% weapon damage instead of 60%

## Post 149915 by Cromius — 2025-09-02T17:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149915#p149915 | page 1 | era: pre-1.18.1 -->

Dragunovi wrote: 12 Oct 2024 18:31
Deep Wounds now deals damage every 1.5 seconds and lasts 6 seconds.
Developer Comment: This change makes Deep Wounds more useful even in situations where its quickly refreshed by multiple Warriors (such as raids), allowing it to deal atleast a part of its damage before its replaced while doubling its output for situations outside of raids.

This is bugged. Deep wounds is doing only about 58% of the damage it should be doing according to the tooltip.
For the tooltip to be correct it should state 35% weapon damage over 6 seconds. After further testing it appears that deep wounds is dividing by 7 and not 4 when splitting 60% of the average weapon damage for calculating the damage to apply per tick.

I have documented the bug here <https://turtlecraft.gg/bug-report?id=16021>

