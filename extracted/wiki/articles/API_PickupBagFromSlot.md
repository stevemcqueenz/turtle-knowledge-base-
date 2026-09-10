---
title: "API PickupBagFromSlot"
url: "https://turtle-wow.fandom.com/wiki/API_PickupBagFromSlot"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T08:55:08Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PickupBagFromSlot

PickupBagFromSlot(slot);

   Picks up the bag from the specified slot, placing it in the cursor.

----

  - *Arguments***
   (slot) 
  ; slot
   [InventorySlotID](API Type InventorySlotId) - the slot containing the bag.

----

  - *Returns***

   Nothing.

----

  - *Details***

   Valid slot numbers are 20-23, numbered from left to right starting after the backpack.
   inventoryID ,the result of [ContainerIDtoInventoryID(BagID)](API ContainerIDToInventoryID), can help to compute the slot number and bag numbers can be viewed in the [InventorySlotID](API Type InventorySlotId) page.

## Addon
Example from addon named Nurfed<syntaxhighlight lang="lua">
local function bag_OnDragStart()
	if (NRF_LOCKED ==1) then
		return;
	end
	if (IsControlKeyDown()) then
		this:GetParent():StartMoving();
	elseif (this:GetID() > 0) then
		PickupBagFromSlot(this:GetID());
		PlaySound("BAGMENUBUTTONPRESS");
		this:SetChecked(1);
	end
end
</syntaxhighlight>
