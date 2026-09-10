---
title: "API PickupContainerItem"
url: "https://turtle-wow.fandom.com/wiki/API_PickupContainerItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T17:23:35Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PickupContainerItem

Wildcard function usually called when a player clicks on a slot in their bags. Functionality includes picking up the item from a specific bag slot, putting the item into a specific bag slot, and applying enchants (including poisons and sharpening stones) to the item in a specific bag slot.
 PickupContainerItem(bagID, slot);
----

** *Arguments***

   (bagID, slot)
  ; [bagID](API Type BagId)
   Integer - id of the bag the slot is located in.
  ; slot
   Integer - slot inside the bag (top left slot is 1, slot to the right of it is 2).

----

** *Returns***

   Nothing.

----

** *Details***

   The function behaves differently depending on what is currently on the cursor:
  * If the cursor currently has nothing, calling this will pick up an item from your backpack.
  * If the cursor currently contains an item (check with [CursorHasItem()](API CursorHasItem)), calling this will place the item currently on the cursor into the specified bag slot. If there is already an item in that bag slot, the two items will be exchanged.
  * If the cursor is set to a spell (typically enchanting and poisons, check with [SpellIsTargeting()](API SpellIsTargeting)), calling this specifies that you want to cast the spell on the item in that bag slot.
   Trying to pickup the same item twice in the same "time tick" does not work (client seems to flag the item as "modified" and waits for the server to sync). To get around the problem, you need to use an _OnUpdate function, check that at least .1 time has elapsed since the last time before picking up the same item.

## Macro
Feed Pet Longjaw Mud Snapper<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b) do local o=GetContainerItemLink(b,s);if o and string.find(o,"Longjaw Mud Snapper") then CastSpellByName("Feed Pet"); PickupContainerItem(b,s);b=4;break;end;end;end
</syntaxhighlight>Pick lock on Lockbox<syntaxhighlight lang="lua">
/run for b = 0,4 do for s=1,GetContainerNumSlots(b,s) do l=GetContainerItemLink(b,s) if l~=nil then if (strfind(l,"Lockbox")) then CastSpellByName("Pick Lock") PickupContainerItem(b,s) ClearCursor() end end end en﻿﻿d
</syntaxhighlight>

## Addon
Example from addon named GFW FeedOMatic<syntaxhighlight lang="lua">
	-- Actually feed the item to the pet
	PickupContainerItem(foodBag, foodItem);
	if ( CursorHasItem() ) then
		DropItemOnUnit("pet");
	end
	if ( CursorHasItem() ) then
		PickupContainerItem(foodBag, foodItem);
	else
		FOM_State.ShouldFeed = nil;
		-- Alert
		if ( FOM_Config.Alert == "chat") then
			GFWUtils.Print(string.format(FOM_FEEDING_EAT, pet, GFWUtils.Hilite(FOM_LastFood)));
		elseif ( FOM_Config.Alert == "emote") then
			SendChatMessage(string.format(FOM_FEEDING_FEED, pet, FOM_LastFood).. FOM_RandomEmote(), "EMOTE");
		end
	end
		
end
</syntaxhighlight>
