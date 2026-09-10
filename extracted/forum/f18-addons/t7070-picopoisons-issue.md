---
title: "PicoPoisons Issue"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7070"
topic_id: 7070
forum_id: 18
forum: "AddOns"
author: "Whalemilk"
author_authority: "player"
posted: "2023-05-08T02:31:00Z"
last_post: "2023-05-08T02:31:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:32:04Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# PicoPoisons Issue

## Post 44871 by Whalemilk (Patch Note Conspiracy Theorist) — 2023-05-08T02:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44871#p44871 | page 1 | era: pre-1.18.1 -->

Can someone take a lot at the code and see what the issue is?
I think it has something to do with the first line

local _, PicoPoisons = ...

<https://github.com/jsb/PicoPoisons>

local _, PicoPoisons = ...

function PicoPoisons.Init()
 -- Modify enchant icons to add a counter label
for buttonIndex = 1, 2 do
local enchantButton = _G["TempEnchant" .. buttonIndex]
local label = enchantButton:CreateFontString(enchantButton:GetName() .. "ChargesLabel", "ARTWORK", "NumberFontNormal")
label:SetPoint("BOTTOMLEFT", enchantButton, "BOTTOMLEFT", 1, 1)
label:Hide()
end

PicoPoisons.frame = CreateFrame("Frame")
PicoPoisons.frame.OnEvent = function(self, event, ...)
local hasMainHandEnchant, mainHandExpiration, mainHandCharges, mainHandEnchantID, hasOffHandEnchant, offHandExpiration, offHandCharges, oddHandEnchantID = GetWeaponEnchantInfo()
local buttonIndex = 1
if hasOffHandEnchant then
local chargesLabel = _G["TempEnchant" .. buttonIndex .. "ChargesLabel"]
chargesLabel:SetText(offHandCharges)
if offHandCharges > 0 then
chargesLabel:Show()
else
chargesLabel:Hide()
end
buttonIndex = buttonIndex + 1
end
if hasMainHandEnchant then
local chargesLabel = _G["TempEnchant" .. buttonIndex .. "ChargesLabel"]
chargesLabel:SetText(mainHandCharges)
if mainHandCharges > 0 then
chargesLabel:Show()
else
chargesLabel:Hide()
end
buttonIndex = buttonIndex + 1
end
end
PicoPoisons.frame:SetScript("OnEvent", PicoPoisons.frame.OnEvent)
PicoPoisons.frame:RegisterEvent("PLAYER_ENTERING_WORLD")
PicoPoisons.frame:RegisterEvent("UNIT_AURA")
PicoPoisons.frame:Show()
end

PicoPoisons.Init()

