---
title: "API ContainerIDToInventoryID"
url: "https://turtle-wow.fandom.com/wiki/API_ContainerIDToInventoryID"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T07:57:05Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ContainerIDToInventoryID

- *Arguments***
  ;: (bagID)
  ; bagID
   [bagID](API Type BagId) - number of the bag (0-4) to get the inventoryID for

----

  - *Returns***

  ; inventoryID
   inventoryID - the bag's inventory ID used in functions like [PutItemInBag(inventoryId)](API PutItemInBag) and [GetInventoryItemLink("player",inventoryId)](API GetInventoryItemLink)

----

  - *Examples***
<syntaxhighlight lang="lua">
 local invID = ContainerIDToInventoryID(1)  
 DEFAULT_CHAT_FRAME:AddMessage("Bag slot 1 is inventory slot "..invID)
</syntaxhighlight>
----

  - *Result***
<syntaxhighlight lang="lua">
 Bag slot 1 is inventory slot 20
</syntaxhighlight>
----

  - *Notes***

   The return of container IDs -2 (key ring), -1 (bank) and 0 (backpack) aren't actual Inventory slots usable by most Inventory functions.
   The player bags begin at container 1 and inventory 20.
   The bank bags begin at container 5 and inventory 64.

## Addon
Example from addon named FishingBuddy<syntaxhighlight lang="lua">
   -- no affinity, check all bags
   for i=NUM_BAG_FRAMES,0,-1 do
      -- but skip any bag we already have affinity for (because it might have 
      -- already modified skipcount)
      if bag_affinity ~= i then
	 -- Make sure this isn't a quiver, those won't hold shit
	 local bagName = GetBagName(i);
	 if ( bagName ) then
	    local texture = GetInventoryItemTexture("player",
						    ContainerIDToInventoryID(i));
	    
	    if ( string.find(texture, "INV_Misc_Bag_%d") and not string.find(bagName, AMMOSLOT) ) then
	       for j=GetContainerNumSlots(i),1,-1 do
		  if not GetContainerItemInfo(i,j) then
		     if skipcount == 0 then return i,j; end
		     skipcount = skipcount - 1;
		  end  -- if empty
	       end  -- for slots
	    end  -- if normal bag
	 end -- if there is a bag
      end -- if not affinity bag
   end  -- for bags

   -- not found return nil,nil implicitly
end
</syntaxhighlight>
