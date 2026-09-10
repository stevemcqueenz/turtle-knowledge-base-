---
title: "API AuctionFrameAuctions.duration"
url: "https://turtle-wow.fandom.com/wiki/API_AuctionFrameAuctions.duration"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:56:15Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["FrameXML functions"]
---
# API AuctionFrameAuctions.duration

AuctionFrameAuctions.duration = *time in minutes*

  //set the short duration button to be checked and set the time
  AuctionsShortAuctionButton:SetChecked(1);
  AuctionFrameAuctions.duration = 120;
  
  //set the medium duration button to be checked and set the time
  AuctionsMediumAuctionButton:SetChecked(1);
  AuctionFrameAuctions.duration = 480;
  
  //set the long duration button to be checked and set the time
  AuctionsLongAuctionButton:SetChecked(1);
  AuctionFrameAuctions.duration = 1440;

## Addon
Example from addon named Auctioneer<syntaxhighlight lang="lua">
local ignoreAuctionDurationChange = nil
function onChangeAuctionDuration()
	if (ignoreAuctionDurationChange) then
		ignoreAuctionDurationChange = nil;
		return
	end
	Auctioneer.Command.SetFilter('last-auction-duration', AuctionFrameAuctions.duration)
end
</syntaxhighlight>
