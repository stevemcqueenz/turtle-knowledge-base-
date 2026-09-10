---
title: "API PickupPetAction"
url: "https://turtle-wow.fandom.com/wiki/API_PickupPetAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T10:51:19Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PickupPetAction

Pick up a pet action for drag-and-drop.
 PickupPetAction(petActionSlot)

## Parameters
### Arguments
   (petActionSlot)

  ; petActionSlot
   Numeric - The pet action slot to pick the action up from (1-10).

### Returns
   *nil*

## Details
   If the slot is empty, nothing happens, otherwise the action from the slot is placed on the cursor, and the slot is filled with whatever action was currently being drag-and-dropped (The slot is emptied if the cursor was empty).

   Be very careful about picking up the pet control actions (Attack/Follow/Stay/Aggressive/Defensive/Passive), because if you lose them, there's no way to get them back.

## Addon
Example from addon named Nurfed ActionBars<syntaxhighlight lang="lua">
-- PetBar Replacement functions
function Nurfed_PetActionButton_OnDragStart()
	if (NRF_LOCKED == 1) then
		return;
	end

	if (IsControlKeyDown()) then
		this:GetParent():StartMoving();
	else
		this:SetChecked(0);
		PickupPetAction(this:GetID());
		PetActionBar_Update();
	end
end

function Nurfed_PetActionButton_OnReceiveDrag()
	if ( LOCK_ACTIONBAR ~= "1" ) then
		this:SetChecked(0);
		PickupPetAction(this:GetID());
		PetActionBar_Update();
	end
end
</syntaxhighlight>
