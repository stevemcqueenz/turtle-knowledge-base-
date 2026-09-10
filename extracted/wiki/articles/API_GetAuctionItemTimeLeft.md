---
title: "API GetAuctionItemTimeLeft"
url: "https://turtle-wow.fandom.com/wiki/API_GetAuctionItemTimeLeft"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:58:20Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAuctionItemTimeLeft

Retrieves the time left for a item in the Auction House.
<syntaxhighlight lang="lua">
 timeleft = GetAuctionTimeLeft("type", index);
</syntaxhighlight>
----

** *Arguments***
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

** *Returns***

  ; timeleft
   a number between 1 and 4
  ; 1
   short time (less then 30 min.)
  ; 2
   medium time (30 min. till 2 hours)
  ; 3
   long time (2 till 8 hours)
  ; 4
   very long time (more then 8 hours)

----

** *Example***
<syntaxhighlight lang="lua">
 timeleft = GetAuctionTimeLeft("owner", offset + i);
</syntaxhighlight>
** *Result***

Returns the time that the item will stay in the auction house. Affects nothing other than the return values.
----

** *Description***

   Retrieves the time left for an item in the current list of auction items.

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
function M.auction(index, query_type)
    query_type = query_type or 'list'

    local link = GetAuctionItemLink(query_type, index)
	if link then
        local item_id, suffix_id, unique_id, enchant_id = parse_link(link)
        local item_info = T.temp-item(item_id, suffix_id, unique_id, enchant_id)

        local name, texture, count, quality, usable, level, start_price, min_increment, buyout_price, high_bid, high_bidder, owner, sale_status = GetAuctionItemInfo(query_type, index)

    	local duration = GetAuctionItemTimeLeft(query_type, index)
        local tooltip, tooltip_money = tooltip('auction', query_type, index)
        local max_charges = max_item_charges(item_id)
        local charges = max_charges and item_charges(tooltip)
        local aux_quantity = charges or count
        local blizzard_bid = high_bid > 0 and high_bid or start_price
        local bid_price = high_bid > 0 and (high_bid + min_increment) or start_price

        return T.map(
            'item_id', item_id,
            'suffix_id', suffix_id,
            'unique_id', unique_id,
            'enchant_id', enchant_id,

            'link', link,
            'itemstring', item_info.itemstring,
            'item_key', item_id .. ':' .. suffix_id,
            'search_signature', aux.join(T.temp-T.list(item_id, suffix_id, enchant_id, start_price, buyout_price, bid_price, aux_quantity, duration, query_type == 'owner' and high_bidder or (high_bidder and 1 or 0), aux.account_data.ignore_owner and (is_player(owner) and 0 or 1) or (owner or '?')), ':'),
            'sniping_signature', aux.join(T.temp-T.list(item_id, suffix_id, enchant_id, start_price, buyout_price, aux_quantity, aux.account_data.ignore_owner and (is_player(owner) and 0 or 1) or (owner or '?')), ':'),

            'name', name,
            'texture', texture,
            'level', item_info.level,
            'type', item_info.type,
            'subtype', item_info.subtype,
            'slot', item_info.slot,
            'quality', quality,
            'max_stack', item_info.max_stack,

            'count', count,
            'start_price', start_price,
            'high_bid', high_bid,
            'min_increment', min_increment,
            'blizzard_bid', blizzard_bid,
            'bid_price', bid_price,
            'buyout_price', buyout_price,
            'unit_blizzard_bid', blizzard_bid / aux_quantity,
            'unit_bid_price', bid_price / aux_quantity,
            'unit_buyout_price', buyout_price / aux_quantity,
            'high_bidder', high_bidder,
            'owner', owner,
            'sale_status', sale_status,
            'duration', duration,
            'usable', usable,

            'tooltip', tooltip,
    	    'tooltip_money', tooltip_money,
            'max_charges', max_charges,
            'charges', charges,
            'aux_quantity', aux_quantity
        )
    end
end
</syntaxhighlight>
