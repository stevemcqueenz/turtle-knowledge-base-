---
title: "API PlaceAuctionBid"
url: "https://turtle-wow.fandom.com/wiki/API_PlaceAuctionBid"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:36:08Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PlaceAuctionBid

Place a bid on the selected auction item.
 PlaceAuctionBid("type", index, bid);
----

  - *Arguments***
   (string type)

  ; type
   One of the following:
  ; "list"
   Items up for auction, the "Browse" tab in the dialog.
  ; "bidder"
   Items the player has bid on, the "Bids" tab in the dialog.
  ; "owner"
   Items the player has up for auction, the "Auctions" tab in the dialog.

  ; index
   The index of the item in the list to bid on (normally 1-50, inclusive)

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
