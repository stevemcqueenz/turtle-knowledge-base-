---
title: "API ReplaceEnchant"
url: "https://turtle-wow.fandom.com/wiki/API_ReplaceEnchant"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T13:38:34Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ReplaceEnchant

Confirms the "Replace Enchant" dialog.
 ReplaceEnchant();

## Details
   When the player attempts to apply an enchant or weapon buff to an item which already has one, the game presents the "Replace Enchant" dialog. This method confirms that dialog allowing the application of the enchant/buff to continue.

## Macros
Enchant Brilliant Mana Oil on weapon<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Brilliant Mana Oil")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()ClearCursor()end end end end
</syntaxhighlight>

## Addon
From addon named EzPoison<syntaxhighlight lang="lua">
function EZP:ApplyPoisen(hand)
	EZP:UpdateTexture()
	if hand and not EZP.Work.iSCasting then
		local id = EZP:GetInventoryID(hand)
		if id then
			EZP:RegisterEvent("SPELLCAST_START")
			EZP:RegisterEvent("SPELLCAST_STOP")
			EZP:RegisterEvent("SPELLCAST_INTERRUPTED")
			EZP:RegisterEvent("SPELLCAST_FAILED")
			UseContainerItem(id[1], id[2])
			if hand == "MH" then PickupInventoryItem(16)
			elseif hand == "OH" then PickupInventoryItem(17) end
			ReplaceEnchant()
			ClearCursor()
		else
			if hand == "MH" and UIDropDownMenu_GetSelectedID(EZP.ConfigFrame.MainHand.BorderDropdown) ~= 1 and UIDropDownMenu_GetSelectedID(EZP.ConfigFrame.MainHand.BorderDropdown) ~= 7 then
				 DEFAULT_CHAT_FRAME:AddMessage("EzPoison: ".."|cFFCC9900".."MainHand ".."|r".."|cFFFFFFFF".."Poison not found.".."|r",0.4,0.8,0.4)
			elseif hand == "OH" and UIDropDownMenu_GetSelectedID(EZP.ConfigFrame.OffHand.BorderDropdown) ~= 1 and UIDropDownMenu_GetSelectedID(EZP.ConfigFrame.OffHand.BorderDropdown) ~= 7 then
				DEFAULT_CHAT_FRAME:AddMessage("EzPoison: ".."|cFFCC9900".."OffHand ".."|r".."|cFFFFFFFF".."Poison not found.".."|r",0.4,0.8,0.4) 
			end
		end
	end
end
</syntaxhighlight>
