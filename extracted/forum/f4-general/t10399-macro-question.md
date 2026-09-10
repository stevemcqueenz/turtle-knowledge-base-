---
title: "Macro question"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10399"
topic_id: 10399
forum_id: 4
forum: "General"
author: "Aizawakai"
author_authority: "player"
posted: "2023-10-01T12:18:00Z"
last_post: "2023-10-01T12:18:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:00:47Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro question

## Post 67917 by Aizawakai — 2023-10-01T12:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67917#p67917 | page 1 | era: pre-1.18.1 -->

Hello:

Macro: "CB"
CreateFrame("frame",'F')F:RegisterEvent("COMBAT_LOG_EVENT_UNFILTERED")return function(t)c=InActiveBattlefield()and"SAY"or IsInRaid()and"RAID"or IsInGroup()and"PARTY"or"EMOTE"SendChatMessage(t,c)end,i and"{rt"..i.."}"or '',CombatLogGetCurrentEventInfo

Macro: "Kick"
/script i=GetRaidTargetIndex("target")local d,b,c=loadstring(GetMacroBody("CB"))()F:SetScript("OnEvent",function()C={c()}m=C[2]:find("PT")and C[4]==UnitGUID("player")and d("Interrupted "..b..C[9].." → ["..C[16].."]")end)
/stopcasting
/cast Kick

This is a combination macro I used in version 1.14.
I changed 'GetMacroBody' to 'GetMacroIndexByName,' but I'm still getting an error at runtime: 'ERROR: [String "i=GetRaidTargetIndex("target")local d,b,c=I...]:1: attempt to call a nil value.'
Can anyone help me convert it into a format that works for Twow?
Combining it together is also fine, and I have the SuperMacro

