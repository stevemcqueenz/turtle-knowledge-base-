---
title: "API CanSendAuctionQuery"
url: "https://turtle-wow.fandom.com/wiki/API_CanSendAuctionQuery"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:17:10Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CanSendAuctionQuery

Return 1 if auction search button would be active, nil otherwise.

## Addon
Example from addon named Artisan<syntaxhighlight lang="lua">
function Artisan_ItemOnClick(link)
    if not link then
        return
    end
	if arg1 and arg1 == "RightButton" then
		if aux_frame and aux_frame:IsShown() then
			local _, _, id = string.find(link, "item:(%d+)")
			local ref
			if not id then
				_, _, id = string.find(link, "enchant:(%d+)")
				ref = string.format("enchant:%d", tonumber(id or 0))
			else
				ref = string.format("item:%d", tonumber(id or 0))
			end
			SetItemRef(ref, "", "RightButton")
		elseif CanSendAuctionQuery() and BrowseName then
			BrowseName:SetText(link)
			AuctionFrameBrowse_Search()
			BrowseNoResultsText:SetText(BROWSE_NO_RESULTS)
		end
	elseif IsControlKeyDown() then
		DressUpItemLink(link)
	elseif IsShiftKeyDown() then
		if WIM_EditBoxInFocus then
			WIM_EditBoxInFocus:Insert(link)
		elseif ChatFrameEditBox:IsShown() then
			ChatFrameEditBox:Insert(link)
        end
    end
end
</syntaxhighlight>Example from addon named Advanced Trade Skill Window<syntaxhighlight lang="lua">
function ATSWAuction_SearchForItem(itemname)
	if(CanSendAuctionQuery()) then
		BrowseName:SetText(itemname);
		AuctionFrameBrowse_Search();
		BrowseNoResultsText:SetText(BROWSE_NO_RESULTS);
	end
end
</syntaxhighlight>Example from addon named Auctioneer<syntaxhighlight lang="lua">
function canScan()
	if (lScanInProgress) then
		return false;
	end
	if (not CanSendAuctionQuery()) then
		return false;
	end
	if (AucBidManager.IsProcessingRequest()) then
		return false;
	end
	return true;
end
</syntaxhighlight>
