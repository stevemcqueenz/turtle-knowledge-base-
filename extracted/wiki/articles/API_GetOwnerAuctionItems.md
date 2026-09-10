---
title: "API GetOwnerAuctionItems"
url: "https://turtle-wow.fandom.com/wiki/API_GetOwnerAuctionItems"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:24:36Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetOwnerAuctionItems

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
	local function submit()
		if get_state().params.type == 'bidder' then
			GetBidderAuctionItems(get_state().page)
		elseif get_state().params.type == 'owner' then
			GetOwnerAuctionItems(get_state().page)
		else
			get_state().last_list_query = GetTime()
			local blizzard_query = get_query().blizzard_query or T.acquire()
			QueryAuctionItems(
				blizzard_query.name,
				blizzard_query.min_level,
				blizzard_query.max_level,
				blizzard_query.slot,
				blizzard_query.class,
				blizzard_query.subclass,
				get_state().page,
				blizzard_query.usable,
				blizzard_query.quality
			)
		end
		return wait_for_results()
	end
</syntaxhighlight>
