---
title: "Can someone rewrite this so that the event occurs on PLAYER_ENTERING_WORLD"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6634"
topic_id: 6634
forum_id: 18
forum: "AddOns"
author: "Whalemilk"
author_authority: "player"
posted: "2023-04-17T00:08:00Z"
last_post: "2023-04-17T12:55:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:32:16Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Can someone rewrite this so that the event occurs on PLAYER_ENTERING_WORLD

## Post 41784 by Whalemilk (Patch Note Conspiracy Theorist) — 2023-04-17T00:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41784#p41784 | page 1 | era: pre-1.18.1 -->

**This code seems to only trigger when the player types /dracarys 1 or /dracarys 2 or /dracarys 3. I want the addon to trigger /dracarys 3 when PLAYER_ENTERING_WORLD so that I don't have to type it every time I sign in.**

local frame = CreateFrame('FRAME')

frame:RegisterEvent('ADDON_LOADED')
frame:RegisterEvent('PLAYER_ENTERING_WORLD')

local DEFAULT = 3
local RARE = 1
local RARE_ELITE = 2
local ELITE = 3

local INDEX_TO_TEXTURE_MAP = {
[DEFAULT] = 'Interface\\TargetingFrame\\UI-TargetingFrame.blp',
[RARE] = 'Interface\\TargetingFrame\\UI-TargetingFrame-Rare.blp',
[RARE_ELITE] = 'Interface\\TargetingFrame\\UI-TargetingFrame-Rare-Elite.blp',
[ELITE] = 'Interface\\TargetingFrame\\UI-TargetingFrame-Elite.blp',
}

local INDEX_TO_LABEL_MAP = {
[DEFAULT] = 'Default',
[RARE] = 'Rare',
[RARE_ELITE] = 'Rare Elite',
[ELITE] = 'Elite',
}

function frame:OnEvent(event, arg1)
if event == 'ADDON_LOADED' and arg1 == 'DracarysTextureIndex' then
if DracarysTextureIndex == nil then
DracarysTextureIndex = RARE -- first-time value
end
end

if event == 'PLAYER_ENTERING_WORLD' then
Dracarys_ChangePortrait(DracarysTextureIndex)
end
end

frame:SetScript('OnEvent', frame.OnEvent)

SLASH_DRACARYS1 = '/dracarys'

SlashCmdList['DRACARYS'] = function(value)
local index = tonumber(value)

if (INDEX_TO_TEXTURE_MAP[index] == nil) then
print('/dracarys 3')
return
end

DracarysTextureIndex = index

Dracarys_PrintChanged(index)

Dracarys_ChangePortrait(index)
end

function Dracarys_ChangePortrait(index)
local texture = INDEX_TO_TEXTURE_MAP[index]

PlayerFrameTexture:SetTexture(texture)
end

## Post 41860 by Geojak (Grandmaster of Forum PvP) — 2023-04-17T11:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41860#p41860 | page 1 | era: pre-1.18.1 -->

i use this code to disable hadrcore messgaes automaticallt without having to tzpe it everztine. zou can alter it for zour command

AutoHCmessage = {};
local frame=CreateFrame("Frame");

frame:RegisterEvent("VARIABLES_LOADED");
frame:SetScript("OnEvent",function(self,event,...)
SendChatMessage(".hcmessage 40", "say")
end);

its not difficult, you can figure it out i am sure what you need to change

## Post 41873 by Whalemilk (Patch Note Conspiracy Theorist) — 2023-04-17T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41873#p41873 | page 1 | era: pre-1.18.1 -->

solved.

