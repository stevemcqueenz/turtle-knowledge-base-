---
title: "API PutItemInBag"
url: "https://turtle-wow.fandom.com/wiki/API_PutItemInBag"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T09:04:41Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PutItemInBag

Puts the item on the cursor into the specified bag slot on the main bar, if it's a bag. Otherwise, attempts to place the item inside the bag in that slot. Note that to place an item in the backpack, you must use [PutItemInBackpack](API PutItemInBackpack).
 PutItemInBag(n)

## Parameters
### Arguments
   (n)

  ; n
   Numeric - A value from 20 to 23 where 20 is the rightmost bag (not including backpack) and 23 is the leftmost.

## Example
   PutItemInBag(20) will put the item (if it's not a bag) on the cursor into the first bag (not including backpack) starting from the right.

## Macro
Strip all gear with durability<syntaxhighlight lang="lua">
/run ClearCursor()local k;for i=1,4 do for j=1,GetContainerNumSlots(i)do if(not GetContainerItemLink(i,j))then repeat k,l=next({1,3,5,6,7,8,9,10,16,17,18},k)if(not k)then return;end;PickupInventoryItem(l)until(CursorHasItem())PutItemInBag(i+19)end;end;end
</syntaxhighlight>

## Addon
Example from addon named Bagnon<syntaxhighlight lang="lua">
function BagnonBag_OnClick()
	if ( Bagnon_IsCachedBag(this:GetParent():GetParent().player, this:GetID() ) ) then
		return;
	end

	if(not IsShiftKeyDown() ) then
		--damn you blizzard for making the keyring specific code!
		if( this:GetID() == KEYRING_CONTAINER ) then
			PutKeyInKeyRing();
		else
			PutItemInBag(ContainerIDToInventoryID(this:GetID()));
		end
	else
		BagnonFrame_ToggleBag(this:GetParent():GetParent(), this:GetID());
	end
end
</syntaxhighlight>
