---
title: "API GetInventorySlotInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetInventorySlotInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T09:51:47Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetInventorySlotInfo

Return information about a specific inventory slot
 slotId, textureName = GetInventorySlotInfo("slotName")

## Parameters
### Arguments
   ("slotName")

  ; slotName
   String - The [InventorySlotName](API Type InventorySlotName) to query ("HEADSLOT", etc).

### Returns
   slotId, textureName

  ; slotId
   Numeric - The [slot ID](API Type InventorySlotId) to use to refer to that slot in the other GetInventory functions.
  ; textureName
   String - The texture to use for the empty slot on the paper doll display.
  

## Macros
Activate ToEP/ZHC if and only if your target has HP above 30% and is an enemy target. It will than proceed to cast Fireball(Rank 12).<syntaxhighlight lang="lua">
/run local a=GetInventorySlotInfo("Trinket1Slot");local b,c=GetInventoryItemCooldown("player",a);if c <= 0 and (UnitHealth("target") > 30 or UnitIsPlayer("target")) then UseInventoryItem(a);SpellStopCasting();end CastSpellByName("Fireball(Rank 12)");
</syntaxhighlight>Keybinding this one to a mouse button like middle-click for easy fishing<syntaxhighlight lang="lua">
/run local i=GetInventoryItemTexture("player",GetInventorySlotInfo("MainHandSlot")) if i and string.find(i,"INV_Fishingpole")then CastSpellByName("Fishing")end
</syntaxhighlight>Puts your main-hand in the offhand slot, if there is already a weapon in the offhand slot it will switch them around<syntaxhighlight lang="lua">
/run PickupInventoryItem(GetInventorySlotInfo("MainHandSlot"));PickupInventoryItem(GetInventorySlotInfo("SecondaryHandSlot"))
</syntaxhighlight>

## Addon
Example from addon named AsmoMOD<syntaxhighlight lang="lua">
		-- Use PvP Trinket if it is equipped and active
		if(SaveMe == 1) then
			myTrinket0 =  GetInventoryItemLink("player", GetInventorySlotInfo("Trinket0Slot"))
			myTrinket1 =  GetInventoryItemLink("player", GetInventorySlotInfo("Trinket1Slot"))

			if (myTrinket0 == nil) then myTrinket0 = "empty" end
			if (myTrinket1 == nil) then myTrinket1 = "empty" end
			
			if ((string.find(myTrinket0, "Insignia of the Horde") ~= nil) or (string.find(myTrinket0, "Insignia of the Alliance") ~= nil)) then
				myTrinketUse = GetInventorySlotInfo("Trinket0Slot")
			elseif ((string.find(myTrinket1, "Insignia of the Horde") ~= nil) or (string.find(myTrinket1, "Insignia of the Alliance") ~= nil)) then
				myTrinketUse = GetInventorySlotInfo("Trinket1Slot")
			else
				myTrinketUse = nil
			end
			if(myTrinketUse ~= nil) then
				UseInventoryItem(myTrinketUse);
			end
		end
	end
</syntaxhighlight>
