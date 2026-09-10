---
title: "API GetAuctionItemInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetAuctionItemInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:47:00Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAuctionItemInfo

Retrieves info about one item in the current retrieved list of items from the Auction House.
<syntaxhighlight lang="lua">
 name, texture, ... = GetAuctionItemInfo("type", index);
</syntaxhighlight>
----
  -*Arguments***
  (String type, Number index)

  ;type : One of the following:
  ;"list" : An item up for auction, the "Browse" tab in the dialog.
  ;"bidder" : An item the player has bid on, the "Bids" tab in the dialog.
  ;"owner" : An item the player has up for auction, the "Auctions" tab in the dialog.

  ;index : The index of the item in the list to retrieve info from (normally 1-50, inclusive)

----
  -*Returns***

  ;name : a string containing the name of the item
  ;texture : a string containing the name of the texture of the item
  ;count : a number containing the number of items in the auction item
  ;quality : an index into the [ITEM_QUALITY_COLORS](API ITEM_QUALITY_COLORS) array
  ;canUse : a boolean, true if the user can use the item, false if not
  ;level : a number referring to the level required to use the item
  ;minBid : the starting bid price
  ;minIncrement : the minimum amount of item at which to put the next bid
  ;buyoutPrice : zero if no buy out, otherwise it contains the buyout price of the auction item
  ;bidAmount : the current highest bid, zero if no one has bid yet
  ;highBidder : a boolean that is true if the current player is the highest bidder, otherwise nil
  ;owner : the player that is selling the item

----
  -*Example***
<syntaxhighlight lang="lua">
 name, texture, count, quality, canUse, level, 
 minBid, minIncrement, buyoutPrice, bidAmount, 
 highBidder, owner = GetAuctionItemInfo("owner", offset + i);
</syntaxhighlight>
  -*Result***

Retrieves info about an item in the current list of auction items. Affects nothing other than the return values.

----
  -*Description***

   Retrieves info about an item in the current list of auction items.

----

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
	function M.place_bid(type, index, amount, on_success, is_auto_buy)
		if locked then return false, 'busy' end
		local money_before = GetMoney()
		if money_before < amount then return false, 'gold' end
		PlaceAuctionBid(type, index, amount)
		if money_before >= amount then
			locked = true
			local send_signal, signal_received = signal()
			local name, texture, count, _, _, _, _, _, buyout_price = GetAuctionItemInfo(type, index)
			-- Get item_id from link for vendor price lookup
			local item_id
			local link = GetAuctionItemLink(type, index)
			if link then
				item_id = info.parse_link(link)
			end
</syntaxhighlight>
