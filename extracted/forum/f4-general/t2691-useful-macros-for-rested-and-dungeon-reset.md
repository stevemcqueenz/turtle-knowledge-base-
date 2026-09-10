---
title: "Useful macros for rested and dungeon reset"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2691"
topic_id: 2691
forum_id: 4
forum: "General"
author: "Flameroller"
author_authority: "player"
posted: "2022-02-10T01:49:00Z"
last_post: "2025-05-26T21:17:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:44:29Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Useful macros for rested and dungeon reset

## Post 16914 by Flameroller — 2022-02-10T01:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16914#p16914 | page 1 | era: pre-1.18.1 -->

Here is the macro for rested bonus amount /script p="player";x=UnitXP(p);m=UnitXPMax(p);r=GetXPExhaustion();if -1==(r or -1)then t="No rest."else t="Rest: "..(math.floor(20*r/m+0.5)).."bubbles ("if r+x<m then t=t..r else t=t.."level +"..(r+x-m)end t=t.."XP)"end;DEFAULT_CHAT_FRAME:AddMessage(t)

and here is the one for resetting instances
/script ResetInstances()

## Post 133103 by Gryzorzz — 2025-05-26T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133103#p133103 | page 1 | era: pre-1.18.1 -->

Grok gave me the best version: gives the XP as percentage of current level:

/run p="player";x=UnitXP(p);m=UnitXPMax(p);r=GetXPExhaustion();if -1==(r or -1)then t="No rested XP."else t="Rested XP: "..format("%.1f%%",100*r/m).." ("..r.." XP)"end;DEFAULT_CHAT_FRAME:AddMessage(t)

Example of what is displayed:
Rested XP: 150.0% (54600 XP)

## Post 133120 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-26T21:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133120#p133120 | page 1 | era: pre-1.18.1 -->

Don't you have an addon that show the rested xp over the xp bar ? O_o

