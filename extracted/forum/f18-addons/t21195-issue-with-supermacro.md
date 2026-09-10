---
title: "Issue with SuperMacro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21195"
topic_id: 21195
forum_id: 18
forum: "AddOns"
author: "Kuxunoob"
author_authority: "player"
posted: "2025-08-20T02:17:00Z"
last_post: "2025-08-20T02:17:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:24:32Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Issue with SuperMacro

## Post 147149 by Kuxunoob — 2025-08-20T02:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147149#p147149 | page 1 | era: pre-1.18.1 -->

Hello littles turtles !

First of all, sorry for my poor english...

Can someone tell me why and give me a solution to a issue I have with the **SuperMacro** addon ?

Every time I press a macro button, I get the **yellow (/help) message** in the chat for the commandes list...

Macro Example:
/run if UnitIsDead("target") and UnitExists("target") then ClearTarget(); end
/run if GetUnitName("target")==nil then TargetNearestEnemy() end
/run for i=1,120 do if IsCurrentAction(i) then return end end CastSpellByName("Attack")
/cast Charge
/startattack

