---
title: "API SortAuctionItems"
url: "https://turtle-wow.fandom.com/wiki/API_SortAuctionItems"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:48:02Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SortAuctionItems

Sorts the auction house display.
<syntaxhighlight lang="lua">
 SortAuctionItems("type", "sort");
</syntaxhighlight>
----

  - *Arguments***
   (String type, String sort)

  ; type
   One of the following:
  ; "list"
   An item up for auction, the "Browse" tab in the dialog.
  ; "bidder"
   An item the player has bid on, the "Bids" tab in the dialog.
  ; "owner"
   An item the player has up for auction, the "Auctions" tab in the dialog.

  ; sort
   One of the following:
  ; "quality"
   The rarity of the item.
  ; "level"
   The minimum required level (if any).  Only applies to "Browse" and "Bids" tabs.
  ; "status"
   On the "Browse" tab, this is the "Seller" column.  On the "Bids" tab it is the "Bid Status" column.  On the "Auctions" tab it is the "High Bidder" column.
  ; "duration"
   The amount of time left in the auction
  ; "bid"
   An item the player has up for auction, the "Auctions" tab in the dialog.
  ; "name"
   The name of the item.  Only applies to "Browse" and "Bids" tabs.  This is normally not shown as a separate sortable column (but is enabled with the AuctionSort adddon).
  ; "buyout"
   An item the player has up for auction, the "Auctions" tab in the dialog.  This is normally not shown as a separate sortable column (but is enabled with the AuctionSort adddon).

----

  - *Example***
<syntaxhighlight lang="lua">
 SortAuctionItems("list", "bid");
</syntaxhighlight>
  - *Result***

The results on the "Browse" tab are sorted by bid.
----

  - *Details***

   There is no way to specifically set the direction of the sort.  It reverses the previous direction.  See also: [IsAuctionSortReversed(type, sort)](API IsAuctionSortReversed)

## Addon
Example from addon named Auctioneer<syntaxhighlight lang="lua">
-------------------------------------------------------------------------------
-- Hook called before Blizzard's SortAuctionItems().
-------------------------------------------------------------------------------
function preSortAuctionItemsHook(_, _, sortType, sortColumn)
	if (sortType == "list") then
		if (isQueryInProgress()) then
			debugPrint("Overriding SortAuctionItems() - Request in progress");
			return "abort"
		elseif (isBidInProgress()) then
			debugPrint("Overriding SortAuctionItems() - Bid in progress");
			return "abort"
		end
		PerformingSortAuctionItems = true;
	end
end

-------------------------------------------------------------------------------
-- Hook called after Blizzard's SortAuctionItems().
-------------------------------------------------------------------------------
function postSortAuctionItemsHook(_, _, sortType, sortColumn)
	if (sortType == "list") then
		PerformingSortAuctionItems = false;
	end
end
</syntaxhighlight>
