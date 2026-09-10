---
title: "API GetContainerItemCooldown"
url: "https://turtle-wow.fandom.com/wiki/API_GetContainerItemCooldown"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T08:00:10Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetContainerItemCooldown

Returns cooldown information for an item in your inventory
 startTime, duration, isEnabled = GetContainerItemCooldown(bagID, slot)

## Parameters
### Arguments
   (bagID, slot)

  ; [bagID](API Type BagId)
   number - number of the bag the item is in, 0 is your backpack, 1-4 are the four additional bags
  ; slot
   number - slot number of the bag item you want the info for.

### Returns
   startTime, duration, isEnabled

  ; start
   the time the cooldown period began
  ; duration
   the duration of the cooldown period
  ; enabled
   1 if the item has a cooldown, 0 otherwise

## Addon
Example from addon named ItemRack<syntaxhighlight lang="lua">
-- returns true if the bagid (0-4) is a normal "Container", as opposed to quivers and ammo pouches
function Rack.ValidBag(bagid)

	local linkid,bagtype,legal

	if bagid==0 or bagid==-1 then
		legal = true
	else
		local invID = ContainerIDToInventoryID(bagid)
		_,_,linkid = string.find(GetInventoryItemLink("player",invID) or "","item:(%d+)")
		if linkid then
			_,_,_,_,_,bagtype = GetItemInfo(linkid)
			if bagtype==ItemRackText.INVTYPE_CONTAINER then -- "Bag" for enUS clients, "Container" for other clients
				legal = true -- this is a true container
			end
		end
	end

	return legal
end
</syntaxhighlight>
