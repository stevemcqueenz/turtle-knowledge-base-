---
title: "API BuyMerchantItem"
url: "https://turtle-wow.fandom.com/wiki/API_BuyMerchantItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T13:57:39Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API BuyMerchantItem

BuyMerchantItem(index {, quantity});
Buys the specified item.
----

  - *Arguments***

   (index {, quantity})
  ; index
   Number - The index of the item in the merchant's inventory
  ; quantity
   Number - Optional quantity to buy

----

  - *Returns***

   nothing

----

  - *Details***

   If the item is sold in stacks, the quantity specifies how many stacks will be bought.

## Macro
Buys 40 Arcane Powder<syntaxhighlight lang="lua">
/run local function buy (n,q) for i=1,100 do if n==GetMerchantItemInfo(i) then BuyMerchantItem(i,q) end end end buy ("Arcane Powder",40);
</syntaxhighlight>

## Addon
From addon named BuyPoisons<syntaxhighlight lang="lua">
 function Buy_Item(poison, quantity)
	 local item_index = Index_merchant(poison);
	 if (item_index) then
		 BuyMerchantItem(item_index, quantity);
	 end
 end
</syntaxhighlight>
