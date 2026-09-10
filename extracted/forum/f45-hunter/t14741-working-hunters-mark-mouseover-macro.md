---
title: "Working hunters mark mouseover macro?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14741"
topic_id: 14741
forum_id: 45
forum: "Hunter"
author: "james1992341"
author_authority: "player"
posted: "2024-09-01T11:29:00Z"
last_post: "2024-09-24T01:10:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:13:12Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Working hunters mark mouseover macro?

## Post 100470 by james1992341 — 2024-09-01T11:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100470#p100470 | page 1 | era: pre-1.18.1 -->

Hi I've been trying to find a working one for a fair few hours now and no luck! Wondering if anyone already had one to share? Thanks! ![🙏](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f64f.svg)

## Post 101791 by Cochise — 2024-09-24T01:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101791#p101791 | page 1 | era: pre-1.18.1 -->

Code: Select all

```
/run local p,t,m,A="player","target","mouseover",UnitCanAttack local M=A(p,m)and not UnitIsUnit(t,m)if M then TargetUnit(m)end if A(p,t)then CastSpellByName"Hunter's Mark"end if M and UnitExists(t)then TargetLastTarget()end
```

Here's a breakdown of the macro
Code: Select all

```
/run
local p,t,m,A="player","target","mouseover",UnitCanAttack

-- Check if the mouseover unit is attackable and not the same as the target
local M=A(p,m)and not UnitIsUnit(t,m)

-- Target the mouseover unit if it's attackable
if M then TargetUnit(m)end

-- Cast "Hunter's Mark" on the current target if it's attackable
if A(p,t)then CastSpellByName"Hunter's Mark"end

-- Target the last target if changed
if M and UnitExists(t)then TargetLastTarget()end
```

