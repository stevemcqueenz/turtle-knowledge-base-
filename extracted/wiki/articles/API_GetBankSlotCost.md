---
title: "API GetBankSlotCost"
url: "https://turtle-wow.fandom.com/wiki/API_GetBankSlotCost"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T16:34:01Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetBankSlotCost

Returns the cost of the next bank slot

## Addons
Example from addon named ElvUI<syntaxhighlight lang="lua">
E.PopupDialogs["BUY_BANK_SLOT"] = {
	text = CONFIRM_BUY_BANK_SLOT,
	button1 = YES,
	button2 = NO,
	OnAccept = PurchaseSlot,
	OnShow = function()
		MoneyFrame_Update(this:GetName().."MoneyFrame", GetBankSlotCost())
	end,
	hasMoneyFrame = 1,
	timeout = 0,
	hideOnEscape = 1
}
</syntaxhighlight>Example from addon named Bagshui<syntaxhighlight lang="lua">
		-- Ensure nextPurchasable is current for OnUpdate and OnClick.
		self:UpdateBagSlotPurchaseStatus(this)

		if self.containers[this.bagshuiData.bagNum].nextPurchasable then
			local nextSlotCost = _G.GetBankSlotCost(this.bagshuiData.bagSlotNum)
			_G.SetTooltipMoney(_G.GameTooltip, nextSlotCost)
			_G.GameTooltip:Show()
			_G.SetCursor("BUY_CURSOR")
		end
	end)
</syntaxhighlight>Example from addon named Depositbox<syntaxhighlight lang="lua">
function DepositBox_New_PurchaseSlot()

	if (DepositBox_CheckBalance(GetBankSlotCost(GetNumBankSlots()+1)) == true) then
		DepositBox_Original_PurchaseSlot();
	end
end
</syntaxhighlight>
