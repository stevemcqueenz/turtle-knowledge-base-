---
title: "API GetCraftInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetCraftInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T14:18:59Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetCraftInfo

craftName, craftSubSpellName, craftType, numAvailable, isExpanded = GetCraftInfo(index)

## Parameters
### Arguments
  ; index
   Numeric - 1 to [GetNumCrafts()](https://wowpedia.fandom.com/wiki/API_GetNumCrafts)

### Returns
  ; craftName

  ; craftSubSpellName

  ; craftType
   String - "header" or something else

  ; numAvailable
   This is the number of enchants you can perform with the reagents you got in your inventory (the number is also shown in the UI).

  ; isExpanded

## Macro
Perform enchant or put enchant on your cursor. edit in name of enchant and don't remove the quotation marks.<syntaxhighlight lang="lua">
/run local ench="Full name of enchant here" for i=1,GetNumCrafts() do if GetCraftInfo(i)==ench then DoCraft(i) return end end
</syntaxhighlight>

## Addon
From addon named EnchantingSell<syntaxhighlight lang="lua">
	-- iterate all the enchantements to find their information
	for i=1, GetNumCrafts(), 1 do
		local name, craftSubSpellName, craftType, numAvailable, isExpanded, trainingPointCost, requiredLevel = GetCraftInfo(i);
		local enchanteReagents = {};
		local nameOnly, bonusTexte, onThis, bonus, bonusNb;
</syntaxhighlight>
