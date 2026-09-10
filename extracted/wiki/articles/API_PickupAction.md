---
title: "API PickupAction"
url: "https://turtle-wow.fandom.com/wiki/API_PickupAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T10:45:51Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PickupAction

Pick up an action for drag-and-drop.
 PickupAction(actionSlot)

## Parameters
### Arguments
   (actionSlot)

  ; actionSlot
   Numeric - The action slot to pick the action up from.

### Returns
   *nil*

## Details
   If the slot is empty, nothing happens, otherwise the action from the slot is placed on the cursor, and the slot is filled with whatever action was currently being drag-and-dropped (The slot is emptied if the cursor was empty).

   If you wish to empty the cursor without putting the item into another slot, try [PutItemInBackpack](API PutItemInBackpack).

## Macro
Clears all the buttons off of action bars<syntaxhighlight lang="lua">
/run for i = 1,120 do PickupAction(i) ClearCursor() end
</syntaxhighlight>

## Addon
Example from addon named SuperMacro<syntaxhighlight lang="lua">
function SetActionMacro( actionid , macro ) 
	local macroid = GetMacroIndexByName( macro )
	if ( macroid and actionid > 0 and actionid <= 120 ) then
		PickupAction( actionid );
		PickupMacro( macroid );
		PlaceAction ( actionid );
	end
end
</syntaxhighlight>
