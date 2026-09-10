---
title: "API GetContainerItemInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetContainerItemInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T08:08:41Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetContainerItemInfo

texture, itemCount, locked, quality, readable = GetContainerItemInfo(bagID, slot);

## Parameters
### Arguments
  ; [bagID](API Type BagId)
   Number - number of the bag the item is in, e.g. 0 for your backpack
  ; slot
   Number - slot number of the bag item you want the info for.

### Returns
  ; texture
   String - the texture for the item in the specified bag slot
  ; itemCount
   Number - the number of items in the specified bag slot
  ; locked
   [Boolean](API Type Boolean) - 1 if locked; that is, a stack that cannot be split (?)
  ; quality
   Number - the numeric quality of the item
  ; readable
   [quality](Boolean - 1 if the item can be "read" (as in a book)

## Example
<syntaxhighlight lang="lua">
 local texture, itemCount, locked, quality, readable = GetContainerItemInfo(1,2);
 DEFAULT_CHAT_FRAME:AddMessage(itemCount .. " stacked items in 2nd slot of bag 1.");
</syntaxhighlight>
### Result
   The texture variable will contain the item's texture and the itemCount variable will contain the number of that item in the slot.

   The quality return value will either be -1 or a standard [[API Type Quality) value from 0 to 6. A value of -1 seems to indicate that the item requires special handling: It's stackable, it's unique or it's a quest item.

   The readable return value simply indicates if there is text related to the item.  If it's true, the default UI will change the cursor to the "Read" cursor (the magnifying glass) when the mouse is over the item button.

   The locked return value appears to be set to true only on an item that is picked up via [PickupContainerItem](API PickupContainerItem).

## Addon
Example from addon named WeaponQuickSwap<syntaxhighlight lang="lua">
function WeaponQuickSwap_AnyItemLocked()
	-- Checks all the bags and the 3 equip slots to see if any slot is still locked
  for i=0,NUM_BAG_FRAMES do
    for j=1,GetContainerNumSlots(i) do
	  	local _,_,retVal = GetContainerItemInfo(i,j);
	  	if retVal then
	  		return retVal;
	  	end
	  end
  end
</syntaxhighlight>
