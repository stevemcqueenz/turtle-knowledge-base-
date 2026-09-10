---
title: "API GetAuctionItemLink"
url: "https://turtle-wow.fandom.com/wiki/API_GetAuctionItemLink"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:50:00Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAuctionItemLink

Retrieves a link string about one item in the current retrieved list of items from the Auction House.
 link = GetAuctionItemInfo("type", index);
----

  - *Arguments***
   (String type, Number index)

  ; type
   One of the following:
  ; "list"
   An item up for auction, the "Browse" tab in the dialog.
  ; "bidder"
   An item the player has bid on, the "Bids" tab in the dialog.
  ; "owner"
   An item the player has up for auction, the "Auctions" tab in the dialog.

  ; index
   The index of the item in the list to retrieve info from (normally 1-50, inclusive)

----

  - *Returns***

  ; link
   The link string for the specified item, or nil if the slot is empty.

----

  - *Description***

   Retrieves a link string about an item in the current list of auction items.

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
			-- Get item_id from link for vendor price lookup
			local item_id
			local link = GetAuctionItemLink(type, index)
			if link then
				item_id = info.parse_link(link)
			end
</syntaxhighlight>
