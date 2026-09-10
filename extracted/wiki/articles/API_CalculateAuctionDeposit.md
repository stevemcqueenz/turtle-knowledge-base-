---
title: "API CalculateAuctionDeposit"
url: "https://turtle-wow.fandom.com/wiki/API_CalculateAuctionDeposit"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:11:14Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CalculateAuctionDeposit

Returns the required deposit for the current selling item given the specified duration (minutes).

## Addon
Example from addon named IgorsMassAuction<syntaxhighlight lang="lua">
function IMA_UpdateDeposit(itemindex, amount)
	if ( amount == nil ) then
		amount = CalculateAuctionDeposit(getglobal("IMA_Item"..itemindex).duration);
	end
	if ( amount == nil ) then
		amount = 0;
	end
	
	MoneyFrame_Update("IMA_Item"..itemindex.."DepositCharge",amount)
end
</syntaxhighlight>Example from addon named DepositBox<syntaxhighlight lang="lua">
function DepositBox_New_StartAuction(minBid, buyoutPrice, runTime)

	if (DepositBox_CheckBalance(CalculateAuctionDeposit(runTime)) == true) then
		DepositBox_Original_StartAuction(minBid, buyoutPrice, runTime);
	end
end
</syntaxhighlight>Example from addon named Auctioneer<syntaxhighlight lang="lua">
-------------------------------------------------------------------------------
-- Called before StartAuction()
-------------------------------------------------------------------------------
function preStartAuctionHook(_, _, minBid, buyoutPrice, runTime)
	local name, texture, count, quality, canUse, price = GetAuctionSellItemInfo();
	if (name and count and price) then
		local deposit = CalculateAuctionDeposit(runTime);
		addPendingPost(name, count, minBid, buyoutPrice, runTime, deposit);
	end
end
</syntaxhighlight>
