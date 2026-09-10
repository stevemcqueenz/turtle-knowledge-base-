---
title: "API GetSelectedAuctionItem"
url: "https://turtle-wow.fandom.com/wiki/API_GetSelectedAuctionItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:29:51Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetSelectedAuctionItem

Returns the index (1-50) of the selected auction item or 0 if none is selected.

## Addon
Example from addon named Depositbox<syntaxhighlight lang="lua">
function DepositBox_RefreshAuction(type)
	local name, texture, count, quality, canUse, level, minBid, minIncrement, buyoutPrice, bidAmount, highBidder, owner = GetAuctionItemInfo(type, GetSelectedAuctionItem(type));
	if (buyoutPrice == 0 or buyoutPrice > DepositBox_New_GetMoney()) then
	
		if (type == "list") then
			BrowseBuyoutButton:Disable();	
		elseif (type == "bidder") then
			BidBuyoutButton:Disable();	
		end
	end
	if (minBid > DepositBox_New_GetMoney()) then
		if (type == "list") then
			BrowseBidButton:Disable();	
		elseif (type == "bidder") then
			BidBidButton:Disable();	
		end
	end
end
</syntaxhighlight>Example from addon named DuugusAHIgnore<syntaxhighlight lang="lua">
			-- Set highlight
			if ( GetSelectedAuctionItem("list") and (offset + i) == GetSelectedAuctionItem("list") ) then
				button:LockHighlight();
				
				if ( buyoutPrice > 0 and buyoutPrice >= minBid and GetMoney() >= buyoutPrice ) then
					BrowseBuyoutButton:Enable();
					AuctionFrame.buyoutPrice = buyoutPrice;
				else
					AuctionFrame.buyoutPrice = nil;
				end
				-- Set bid
				if ( bidAmount > 0 ) then
					bidAmount = bidAmount + minIncrement ;
					MoneyInputFrame_SetCopper(BrowseBidPrice, bidAmount);
				else
					MoneyInputFrame_SetCopper(BrowseBidPrice, minBid);
				end

				if ( not highBidder and GetMoney() >= MoneyInputFrame_GetCopper(BrowseBidPrice) ) then
					BrowseBidButton:Enable();
				end
			else
				button:UnlockHighlight();
			end
		end
	end
</syntaxhighlight>
