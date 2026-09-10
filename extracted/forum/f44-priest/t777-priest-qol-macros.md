---
title: "[PRIEST] QOL Macros"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=777"
topic_id: 777
forum_id: 44
forum: "Priest"
author: "Xerron"
author_authority: "player"
posted: "2019-09-27T05:19:00Z"
last_post: "2019-09-27T22:50:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:09:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [PRIEST] QOL Macros

## Post 4094 by Xerron (Barrens Chat Casualty) — 2019-09-27T05:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4094#p4094 | page 1 | era: pre-1.18.1 -->

Fort rank based on target's level
Code: Select all

```
/script Pre="Power Word: Fortitude(Rank " Sp={1,2,14,26,38,50} if (UnitLevel("target") ~= nil and UnitIsFriend("player","target")) then for i=6,1,-1 do if (UnitLevel("target") >= Sp[i]) then CastSpellByName(Pre..i..")") return end end end
```

Spell1 if target is friend, Spell2 if target is enemy
Code: Select all

```
/script if UnitIsFriend("player", "target") then CastSpellByName("Renew") else CastSpellByName("Shadow Word: Pain") end
```

Resurrection with SAY target's name ( you can replace rank # and rezzing text, just dont mess with %t) Code: Select all

```
/s rezzing %t
/cast Resurrection(Rank 1)
```

## Post 4101 by Sinrek (Grandmaster of Forum PvP) — 2019-09-27T22:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4101#p4101 | page 1 | era: pre-1.18.1 -->

Forgot to mention that you gotta have your target selected for that resurrection macro. But you can't click on corpses (those which released the spirit).

