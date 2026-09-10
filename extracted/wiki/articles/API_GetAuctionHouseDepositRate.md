---
title: "API GetAuctionHouseDepositRate"
url: "https://turtle-wow.fandom.com/wiki/API_GetAuctionHouseDepositRate"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:35:03Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAuctionHouseDepositRate

Returns the deposit rate (percentage) for the currently open auction house (Possibly out-dated by [CalculateAuctionDeposit](API CalculateAuctionDeposit)).

## Addon
Example from addon named Auctioneer<syntaxhighlight lang="lua">
-------------------------------------------------------------------------------
-- Called when a post is accepted by the server.
-------------------------------------------------------------------------------
function onAuctionCreated()
	local post = removePendingPost();
	if (post) then
		-- Add to sales database
		BeanCounter.Sales.AddPendingAuction(time(), post.name, post.count, post.minBid, post.buyoutPrice, post.runTime, post.deposit, (GetAuctionHouseDepositRate() / 100));
	end
end
</syntaxhighlight>Example from addon named Auctioneer<syntaxhighlight lang="lua">
-------------------------------------------------------------------------------
-- Calculate the deposit required for the specified item.
-------------------------------------------------------------------------------
function AuctionFramePost_CalculateAuctionDeposit(itemId, count, duration)
	local price = Auctioneer.API.GetVendorSellPrice(itemId);
	if (price) then
		local base = math.floor(count * price * GetAuctionHouseDepositRate() / 100);
		return base * duration / 120;
	end
end
</syntaxhighlight>
