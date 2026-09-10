---
title: "API GetNumBankSlots"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumBankSlots"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T16:39:59Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumBankSlots

Returns total purchased bank bag slots, and a flag indicating if it's full.

## Addons
Example from addon named Bagshui<syntaxhighlight lang="lua">
function Bank:UpdateBagSlotPurchaseStatus(bagSlotButton, numSlotsPurchased, allSlotsPurchased)
	if not self.online then
		return
	end
	if numSlotsPurchased == nil then
		numSlotsPurchased, allSlotsPurchased = _G.GetNumBankSlots()
	end
	-- Apparently GetNumBankSlots() can return nil sometimes. If that happens,
	-- don't try to update anything and stick with the previous purchase status.
	-- https://github.com/veechs/Bagshui/issues/177
	if numSlotsPurchased == nil then
		return
	end
</syntaxhighlight>Example from addon named ElvUI<syntaxhighlight lang="lua">
			local _, full = GetNumBankSlots()
			if full then
				E:StaticPopup_Show("CANNOT_BUY_BANK_SLOT")
			else
				E:StaticPopup_Show("BUY_BANK_SLOT")
			end
		end)
</syntaxhighlight>Example from addon named Toons<syntaxhighlight lang="lua">
function Toons_BankSizeUpdate()
	local size, max = 0, 24;
	for slotId=40,63 do -- bank slots as inventory ids
		if ( GetInventoryItemLink("player", slotId) ) then
			size = size + 1;
		end
	end
	for bag=NUM_BAG_SLOTS+1, NUM_BAG_SLOTS+GetNumBankSlots() do
		max = max+GetContainerNumSlots(bag);
		for slot=1, GetContainerNumSlots(bag) do
			if ( GetContainerItemLink(bag, slot) ) then
				size = size + 1;
			end
		end
	end
	ToonsTab_Update( "banksize", size );
	ToonsTab_Update( "bankmax", max );
	return size, max;
end
</syntaxhighlight>
