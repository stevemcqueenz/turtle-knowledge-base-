---
title: "API StartAuction"
url: "https://turtle-wow.fandom.com/wiki/API_StartAuction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:51:51Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API StartAuction

StartAuction(minBid, buyoutPrice, runTime) - Starts the auction you have created in the Create Auction panel.

The item is that which has been put into the AuctionSellItemButton. That's the slot in the 'create auction' panel.

The minBid and buyoutPrice are in copper. However I cant figure out how to go below 1 silver. So putting in '50' or '10' or '1' will always make the auction do '1 silver'. But '102' will make it do '1 silver 2 copper'.

The runTime is in minutes. Apparently, the *only* permissible values are 2*60, 8*60, 24*60, for 2, 8, and 24 hours, respectively.

Examples:
<syntaxhighlight lang="lua">
 StartAuction(1,1,120)       - Start at 1 silver, buyout 1 silver, time 2 hours
 StartAuction(1,10,120)      - Start at 1 silver, buyout 1 silver, time 2 hours
 StartAuction(1,100,120)     - Start at 1 silver, buyout 1 silver, time 2 hours
 StartAuction(1,1000,2*60)   - Start at 1 silver, buyout 10 silver, time 2 hours
 StartAuction(1,10000,8*60)  - Start at 1 silver, buyout 1 gold, time 8 hours
 StartAuction(101,150,24*60) - Start at 1 silver 1 copper, buyout at 1 silver 50 copper, time 24 hours
</syntaxhighlight>
Play with it yourself:

- Go to auction house
- Right click on auctioneer
- Click on the 'auction' tab
- Drag an item to the slot in the 'Create Auction' panel
- Type the following into chat window:
<syntaxhighlight lang="lua">
 /script StartAuction(1,150,120)
</syntaxhighlight>
- This should create an auction starting at 1 silver, buyout at 1 silver 50 copper, with auction time of 2 hours.
- It should say 'Auction Created' in the chat window.
- Now if you go to browse the auctions, your items should show up.

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
		StartAuction(max(1, aux.round(start_price * item_info.aux_quantity)), aux.round(buyout_price * item_info.aux_quantity), state.duration)

		local send_signal, signal_received = aux.signal()
		aux.when(signal_received, function()
			state.posted = state.posted + 1
			return k()
		end)

		local posted
		aux.event_listener('CHAT_MSG_SYSTEM', function(kill)
			if arg1 == ERR_AUCTION_STARTED then
				send_signal()
				kill()
			end
		end)
	else
		return stop()
	end
</syntaxhighlight>
