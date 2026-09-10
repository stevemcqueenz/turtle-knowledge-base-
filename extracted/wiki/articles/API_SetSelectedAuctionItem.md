---
title: "API SetSelectedAuctionItem"
url: "https://turtle-wow.fandom.com/wiki/API_SetSelectedAuctionItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:43:57Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SetSelectedAuctionItem

## Addon
Example from addon named DuugusAHIgnore<syntaxhighlight lang="lua">
	if ign == false then
		-- original BrowseButton_OnClic code ... just select the auction
		SetSelectedAuctionItem("list", button:GetID() + FauxScrollFrame_GetOffset(BrowseScrollFrame));
		AuctionFrameBrowse_Update();
	else
		-- seller is ignored ... don't select and disable bid/buy buttons
		AuctionFrameBrowse_Update();
		BrowseBidButton:Disable();
		BrowseBuyoutButton:Disable();
		DEFAULT_CHAT_FRAME:AddMessage(obj:GetText()..DAHIOnList);
	end
end
</syntaxhighlight>
