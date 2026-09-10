---
title: "API PurchaseSlot"
url: "https://turtle-wow.fandom.com/wiki/API_PurchaseSlot"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T16:44:51Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PurchaseSlot

Buys another bank slot if available.

## Addons
Example from addon named AllInOneBank<syntaxhighlight lang="lua">
function AIOB_PurchaseSlot()
	if not StaticPopupDialogs["PURCHASE_BANKBAG"] then
		return;
	end
	local cost = GetBankSlotCost();
	if cost < 10000 then
		StaticPopupDialogs["PURCHASE_BANKBAG"]["text"] = format(AIOB_PURCHASE_CONFIRM_S,(cost/100)); 
	else
		StaticPopupDialogs["PURCHASE_BANKBAG"]["text"] = format(AIOB_PURCHASE_CONFIRM_G,(cost/10000)); 
	end
	StaticPopup_Show("PURCHASE_BANKBAG");
end
</syntaxhighlight>Example from addon named Bagnon<syntaxhighlight lang="lua">
function Banknon_OnLoad()
	--Create the confirmation dialog when purchasing a bank slot
	StaticPopupDialogs["CONFIRM_BUY_BANK_SLOT_BANKNON"] = {
		text = TEXT(CONFIRM_BUY_BANK_SLOT),
		button1 = TEXT(YES),
		button2 = TEXT(NO),
		
		OnAccept = function()
			PurchaseSlot();
		end,
		
		OnShow = function()
			MoneyFrame_Update(this:GetName().."MoneyFrame", GetBankSlotCost(GetNumBankSlots()) );
		end,
		
		hasMoneyFrame = 1,
		timeout = 0,
		hideOnEscape = 1,
	};

	this:RegisterEvent("ADDON_LOADED");
end
</syntaxhighlight>
