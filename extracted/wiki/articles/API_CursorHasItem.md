---
title: "API CursorHasItem"
url: "https://turtle-wow.fandom.com/wiki/API_CursorHasItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T17:45:17Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CursorHasItem

Returns true if the cursor currently holds an item

## Macros
Strip all gear with durability<syntaxhighlight lang="lua">
/run ClearCursor()local k;for i=1,4 do for j=1,GetContainerNumSlots(i)do if(not GetContainerItemLink(i,j))then repeat k,l=next({1,3,5,6,7,8,9,10,16,17,18},k)if(not k)then return;end;PickupInventoryItem(l)until(CursorHasItem())PutItemInBag(i+19)end;end;end
</syntaxhighlight>Switch weapons between main-hand and off-hand<syntaxhighlight lang="lua">
/run local a,b=CursorHasItem,PickupInventoryItem;if(not a())then CloseMerchant();b(17);if(a())then b(16);end end 
</syntaxhighlight>

## Addon
Example from addon named SmartPet<syntaxhighlight lang="lua">
--Modified to record item id and bag when picking up a food from the inventory
function SmartPet_PickupContainerItem(bag, slot)
	
	Pre_SmartPet_PickupContainerItem(bag, slot);

	if (CursorHasItem()) then
		SmartPet_Vars.CursorItem = { bag = bag, slot = slot};
	else
		-- If the selected Food is moved to another slot in the bag, update the configuration
		if (SmartPet_Config.Food.bag == SmartPet_Vars.CursorItem.bag and 
		    SmartPet_Config.Food.slot == SmartPet_Vars.CursorItem.slot and
		    (SmartPet_Config.Food.bag ~= bag or SmartPet_Config.Food.slot ~= slot)) then
			SmartPet_Config.Food.bag = bag;
			SmartPet_Config.Food.slot = slot;
		end
		SmartPet_ClearCursorItem();
	end
end
</syntaxhighlight>
