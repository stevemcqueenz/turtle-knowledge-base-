---
title: "API ClickAuctionSellItemButton"
url: "https://turtle-wow.fandom.com/wiki/API_ClickAuctionSellItemButton"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:27:18Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ClickAuctionSellItemButton

ClickAuctionSellItemButton() - Puts the currently 'picked up' item into the 'create auction' slot.

In the Auction house, under 'auctions', 'create auction', there is an 'auction item' slot. This function lets you 'drop' your currently 'picked up' item into it. AFAIK It works as long as the 'auction' window is up (the one you get by clicking on the auctioneer).

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
function unit_vendor_price(item_key)
    for slot in info.inventory() do
	    T.temp(slot)
        local item_info = T.temp-info.container_item(unpack(slot))
        if item_info and item_info.item_key == item_key then
            if info.auctionable(item_info.tooltip, nil, true) and not item_info.lootable then
                ClearCursor()
                PickupContainerItem(unpack(slot))
                ClickAuctionSellItemButton()
                local auction_sell_item = T.temp-info.auction_sell_item()
                ClearCursor()
                ClickAuctionSellItemButton()
                ClearCursor()
                if auction_sell_item then
                    return auction_sell_item.vendor_price / auction_sell_item.count
                end
            end
        end
    end
end
</syntaxhighlight>
