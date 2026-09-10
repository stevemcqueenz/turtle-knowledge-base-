---
title: "API IsAuctionSortReversed"
url: "https://turtle-wow.fandom.com/wiki/API_IsAuctionSortReversed"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:33:48Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsAuctionSortReversed

Returns the sorting for a column on the auction house display.
<syntaxhighlight lang="lua">
 sorted = IsAuctionSortReversed("type", "sort");
</syntaxhighlight>
----

** *Arguments***
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
   An item the player has up for auction, the "Auctions" tab in the dialog.  This is normally not shown as a separate sortable column (but is enabled with the AuctionSort adddon).  SEE RESULTS NOTE BELOW.

----

** *Returns***

   1 or nil

SEE RESULT NOTE BELOW.

  ; 1
   The auction list is sorted by this column.
  ; nil
   The auction list is not sorted by this column.

----

** *Example***
<syntaxhighlight lang="lua">
 sorted = IsAuctionSortReversed("list", "bid");
</syntaxhighlight>
** *Result***

The value of the sort is now stored in "sorted".
----

** *Details***

   The return values correspond to the arrows displayed.  An up arrow means IsAuctionSortReversed == 1.  A down arrow means IsAuctionSortReversed == nil.

   Two important notes.  First, this does NOT tell you how the auction list is actually sorted.  For example, if you sort by Lvl (reverse) and then sort by Seller, IsAuctionSortReversed("list", "level") will still return 1.  This is true even though the sorting on Seller has overriden the sorting on Lvl.  Second, the sorting returned by IsAuctionSortReversed(..., "buyout") is OPPOSITE of how it should be.

## Addon
Example from addon named AuctionSort<syntaxhighlight lang="lua">
function SortBuyoutButton_UpdateArrow(button, type, sort)
	if ( not IsAuctionSortReversed(type, sort) ) then
		getglobal(button:GetName().."Arrow"):SetTexCoord(0, 0.5625, 1.0, 0);
	else
		getglobal(button:GetName().."Arrow"):SetTexCoord(0, 0.5625, 0, 1.0);
	end
end
</syntaxhighlight>
