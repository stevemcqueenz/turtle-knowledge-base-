---
title: "My simple addon dont work please help with LUA"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14624"
topic_id: 14624
forum_id: 18
forum: "AddOns"
author: "Korki"
author_authority: "player"
posted: "2024-07-18T11:59:00Z"
last_post: "2024-09-22T10:26:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:28:27Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# My simple addon dont work please help with LUA

## Post 99780 by Korki — 2024-07-18T11:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99780#p99780 | page 1 | era: pre-1.18.1 -->

local f = CreateFrame("Frame")

f:RegisterEvent("PLAYER_REGEN_DISABLED")
f:RegisterEvent("PLAYER_REGEN_ENABLED")

f:SetScript("OnEvent", function(self,event, ...)

if event == "PLAYER_REGEN_DISABLED" then
SendChatMessage(".xp off")
end
if event == "PLAYER_REGEN_ENABLED" then
SendChatMessage(".xp on")
end
end)

Guys whats wrong can you help me? I wanna make OFF exp during fight mobs, and on XP when im in non combat mode...

## Post 101651 by Spitfire33 (Barrens Chat Casualty) — 2024-09-22T10:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101651#p101651 | page 1 | era: pre-1.18.1 -->

Remove this crap "self,event, ..." from your function, it should be "f:SetScript("OnEvent", function()"

