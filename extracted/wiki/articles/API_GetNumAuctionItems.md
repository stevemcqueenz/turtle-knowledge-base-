---
title: "API GetNumAuctionItems"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumAuctionItems"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:07:01Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumAuctionItems

Retrieves the number of auction items of a certain type.
<syntaxhighlight lang="lua">
 batch,count = GetNumAuctionItems("list");
</syntaxhighlight>
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

----

  - *Returns***

  ; batch
   The size of the batch, seems to be MIN(NUM_AUCTION_ITEMS_PER_PAGE,count)
  ; count
   The number of items.

----

  - *Example***
<syntaxhighlight lang="lua">
 numBatchAuctions, totalAuctions = GetNumAuctionItems("bidder");
</syntaxhighlight>

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
function accept_results()
	_,  get_state().total_auctions = GetNumAuctionItems(get_state().params.type)
	
	-- Handle reverse scan: after first query, jump to last page
	if get_state().finding_last_page then
		get_state().finding_last_page = false
		local last = last_page(get_state().total_auctions)
		get_state().page = last
		return submit_query()
	end
</syntaxhighlight>
