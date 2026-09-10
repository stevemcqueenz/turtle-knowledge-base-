---
title: "API GetAuctionSellItemInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetAuctionSellItemInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:01:56Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAuctionSellItemInfo

Returns information about the current selling item (or nil if none selected).<syntaxhighlight lang="lua">
local name, texture, count, quality, canUse, price = GetAuctionSellItemInfo();
</syntaxhighlight>

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
function game_tooltip_hooks:SetAuctionSellItem()
    local name, _, quantity = GetAuctionSellItemInfo()
    if name then
        for slot in info.inventory() do
	        T.temp(slot)
            local link = GetContainerItemLink(unpack(slot))
            if link and aux.select(5, info.parse_link(link)) == name then
                extend_tooltip(GameTooltip, link, quantity)
                return
            end
        end
    end
end
</syntaxhighlight>Example from addon named ShaguTweaks<syntaxhighlight lang="lua">
  local HookSetAuctionSellItem = GameTooltip.SetAuctionSellItem
  function GameTooltip.SetAuctionSellItem(self)
    local itemName, _, itemCount = GetAuctionSellItemInfo()
    GameTooltip.itemCount = itemCount
    GameTooltip.itemLink = GetItemLinkByName(itemName)
    GameTooltip.ignoreMerchant = true
    return HookSetAuctionSellItem(self)
  end
</syntaxhighlight>
