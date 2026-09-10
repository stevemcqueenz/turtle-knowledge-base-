---
title: "API UseContainerItem"
url: "https://turtle-wow.fandom.com/wiki/API_UseContainerItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T10:00:37Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UseContainerItem

Use an item from a container. If Merchant window is open, this will sell the item.

 UseContainerItem(bagId, slot [, onSelf])

## Parameters
### Arguments
  (bagId, slot [, onSelf])

  ;[bagId](API Type BagId): Integer - The bag id, where the item to use is located
  ;slot : Integer - The slot in the bag, where the item to use is located
  ;onSelf : Boolean - Optional parameter, if the item should be used on yourself (default: false).

## Example
 UseContainerItem(1, 16, 1)

#### Result
  Uses the item located in the 16th slot in your 1st bag (not backpack) on yourself.
  For instance if it's a bandage, this will bandage yourself.

## Details
  Slots in the bags are listed from left to right, top to bottom. 
  A 16 slot bag have the following slot numbers:
  {| ! style="width: 150px; text-align: right; border: 1px solid white"
|-
| 1 || 2 || 3 || 4 
|-
| 5 || 6 || 7 || 8
|-
| 9 || 10 || 11 || 12
|-
| 13 || 14 || 15 || 16 
|}

  An 18 slot bag have the following slot numbers:
  {| ! style="width: 150px; text-align: right; border: 1px solid white"
|-
|   ||   || 1 || 2
|-
| 3 || 4 || 5 || 6 
|-
| 7 || 8 || 9 || 10
|-
| 11 || 12 || 13 || 14
|-
| 15 || 16 || 17 || 18
|}

## Macros
Create /use Healthstone<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Healthstone"))then UseContainerItem(b,s,1)end end end
/cast Create Healthstone (Major)()
</syntaxhighlight>Use any bandage<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Bandage"))then UseContainerItem(b,s)SpellTargetUnit("player")end end end
</syntaxhighlight>

Enchants Aquadynamic Fish Attractor to fishing pole<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Aquadynamic Fish Attractor")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()end end end end
</syntaxhighlight>

## Addon
Example from addon named AsmoMOD<syntaxhighlight lang="lua">
-- Auto-Repair Inventory Implimentation
function AsmoMOD_RepairInventory()
	if( (AsmoMOD_Save.repairenabled) and (CanMerchantRepair()) ) then
		local total = GetRepairAllCost();
		total = total + AsmoMOD_GetInventoryCost();
		total = total / 10000;
		AsmoMOD_Chat("All items repaired. Total Cost: " .. total .. " gold.");

		ShowRepairCursor();
		for bag = 0,4,1 do	
			for slot = 1, GetContainerNumSlots(bag) , 1 do
				local hasCooldown, repairCost = GameTooltip:SetBagItem(bag,slot);
				if (repairCost and repairCost > 0) then
					UseContainerItem(bag,slot);
				end
			end
		end
		HideRepairCursor();	
	end
end
</syntaxhighlight>
