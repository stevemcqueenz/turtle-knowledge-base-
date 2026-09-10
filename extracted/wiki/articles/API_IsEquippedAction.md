---
title: "API IsEquippedAction"
url: "https://turtle-wow.fandom.com/wiki/API_IsEquippedAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T10:27:23Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsEquippedAction

Tests if the action is an active equip action. <syntaxhighlight lang="lua">
isTrue = IsEquippedAction(slotID)
</syntaxhighlight>

## Parameters
**Arguments**

  ; slotID - [ActionSlot](Action slot)
   The tested action

**Returns**

  ; isTrue - Flag
  * 1 if the specified action is an action that equips a weapon *and* if the action has been used to equip the current weapon
  * nil otherwise

## Details
   An equip action is created if you drag a weapon from the [Inventory](Inventory) to an action bar slot.  If you click this action to equip the weapon, the action icon will obtain a green outline.  It is in this case that <code>IsEquippedAction()</code> returns 1.  All other cases (e.g. empty slot, non-equip action, equip action is of the current weapon but hasn't been used yet) will return nil.

## Addon
Example from addon named TrinketMenu<syntaxhighlight lang="lua">
function TrinketMenu.newUseAction(slot,cursor,self)
	TrinketMenu.oldUseAction(slot,cursor,self)
	if IsEquippedAction(slot) then
		TrinketMenu_TooltipScan:SetAction(slot)
		local _,trinket0 = TrinketMenu.ItemInfo(13)
		local _,trinket1 = TrinketMenu.ItemInfo(14)
		if GameTooltipTextLeft1:GetText()==trinket0 then
			TrinketMenu.ReflectTrinketUse(13)
		elseif GameTooltipTextLeft1:GetText()==trinket1 then
			TrinketMenu.ReflectTrinketUse(14)
		end
	end
end
</syntaxhighlight>
