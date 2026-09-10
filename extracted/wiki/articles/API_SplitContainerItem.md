---
title: "API SplitContainerItem"
url: "https://turtle-wow.fandom.com/wiki/API_SplitContainerItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T09:15:10Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SplitContainerItem

Picks up part of a stack of items from a container, placing them on the cursor.

SplitContainerItem(bagID, slot, count);
----

  - *Arguments***

   (bagID, slot)
  ; [bagID](API Type BagId)
   Integer - id of the bag the slot is located in.
  ; slot
   Integer - slot inside the bag (top left slot is 1, slot to the right of it is 2).
  ; count
   Integer - Quantity to pick up.

----

  - *Returns***

   Nothing.

----

  - *Details***

   This function always puts the requested item(s) on the cursor (unlike [PickupContainerItem()](API PickupContainerItem) which can pick up items, place items, or cast spells on items based on what's already on the cursor).

   Passing a larger count than is in the requested bag and slot will pick up nothing.
   --[JuiCe](https://wowpedia.fandom.com/wiki/User:JuiCe) 16:36, 19 November 2006 (EST) - I found a bug 11/19/06 that destroyed 2 items without warning or confirmation as a result of trying to split a higher amount than the stack actually contained.

## Addon
Example from addon named Engbank<syntaxhighlight lang="lua">
		-- process normal clicks
                if (itm) then
                        if ( button == "LeftButton" ) then
				if ( IsControlKeyDown() ) then
					DressUpItemLink(itm["itemlink"]);
				elseif ( IsShiftKeyDown() and not ignoreShift ) then
					if ( ChatFrameEditBox:IsVisible() ) then
						ChatFrameEditBox:Insert(itm["iteminfo"]);
					else
						--local texture, itemCount, locked, quality, readable = GetContainerItemInfo(itm["bag"], itm["slot"]);

						if ( not itm["locked"] ) then
							this.SplitStack = function(button, split)
								SplitContainerItem(itm["bagnum"], itm["slotnum"], split);
							end
							OpenStackSplitFrame(this.count, this, "BOTTOMRIGHT", "TOPRIGHT");
						end
					end
				else
					--AllInOneInventory_HandleQuickMount(bag, slot);

					PickupContainerItem(itm["bagnum"], itm["slotnum"]);
				end
</syntaxhighlight>
