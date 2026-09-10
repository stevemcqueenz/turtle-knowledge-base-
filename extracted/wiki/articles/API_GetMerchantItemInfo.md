---
title: "API GetMerchantItemInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetMerchantItemInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-10T11:01:38Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetMerchantItemInfo

## Synopsis
Returns information about a merchant's item.
<syntaxhighlight lang="lua">
 name, texture, price, quantity, numAvailable, isUsable = GetMerchantItemInfo(index)
</syntaxhighlight>
## Arguments
   (index)

  ; index
   Number - The index of the item in the merchant's inventory

## Returns
   name, texture, price, quantity, numAvailable, isUsable

  ; name
   String - The name of the item
  ; texture
   String - The texture that represents the item's icon
  ; price
   Number - The price of the item (in copper)
  ; quantity
   Number - The quantity that will be purchased
  ; numAvailable
   Number - The number of this item that the merchant has in stock. -1 for unlimited stock.
  ; isUsable
   Number - Is 1 if the player can use this item, nil otherwise

## Example
   Let's say that we want to get info about the item in slot 4. The item is an alchemy recipe that costs 18 silver and the player does not have a high enough skill to use it yet. The item is in limited supply and 2 are in stock.
<syntaxhighlight lang="lua">
 local name, texture, price, quantity, numAvailable, isUsable = GetMerchantItemInfo(4);
</syntaxhighlight>
#### Result
   In this case, we would get:
<syntaxhighlight lang="lua">
 name         -&#x3E; Recipe: Great Rage Potion
 texture      -&#x3E; Interface\Icons\INV_Scroll_03
 price        -&#x3E; 1800
 quantity     -&#x3E; 1
 numAvailable -&#x3E; 2
 isUsable     -&#x3E; nil
</syntaxhighlight>
----

## Macro
Buy 10 stacks of Symbol of Kings from the merchant, which should be 200<syntaxhighlight lang="lua">
/run for i=1,100 do if "Symbol of Kings"==GetMerchantItemInfo(i) then BuyMerchantItem(i,10) end end
</syntaxhighlight>
