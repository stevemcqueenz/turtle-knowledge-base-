---
title: "API GetContainerNumSlots"
url: "https://turtle-wow.fandom.com/wiki/API_GetContainerNumSlots"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T08:33:02Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetContainerNumSlots

Return the number of slots available in the bag specified by the index.
 numberOfSlots = GetContainerNumSlots(bagID);

## Parameters
### Arguments
  ; [bagID](API Type BagId)
   Integer - the slot containing the bag, e.g. 0 for backpack, etc.

### Returns
  ; numberOfSlots
   Integer - the number of slots in the specified bag.

## Details
- In 1.11.2, it appears that with the Key Ring, GetContainerNumSlots(-2) always returns zero, regardless of whether [HasKey](API HasKey)() is true or false.

## Macros
Feed Pet Longjaw Mud Snapper<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b) do local o=GetContainerItemLink(b,s);if o and string.find(o,"Longjaw Mud Snapper") then CastSpellByName("Feed Pet"); PickupContainerItem(b,s);b=4;break;end;end;end
</syntaxhighlight>Use any Conjured water/food (press it quick twice, to eat when you drink)<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Conjured"))then UseContainerItem(b,s,1)end end end
</syntaxhighlight>

## Addon
Example from addon named Outfitter<syntaxhighlight lang="lua">
		-- Search the bag for empty slots
		
		if not vSkipBag then
			local	vNumBagSlots = GetContainerNumSlots(vBagIndex);
			
			if vNumBagSlots > 0 then
				for vSlotIndex = vStartBagSlotIndex, vNumBagSlots do
					local	vItemInfo = Outfitter_GetBagItemInfo(vBagIndex, vSlotIndex);
					
					if not vItemInfo then
						return {BagIndex = vBagIndex, BagSlotIndex = vSlotIndex};
					end
				end
			end
		end
</syntaxhighlight>
