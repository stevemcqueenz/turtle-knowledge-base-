---
title: "Auctioneer - Browsing Issue and Fix"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22660"
topic_id: 22660
forum_id: 18
forum: "AddOns"
author: "Thisolddad"
author_authority: "player"
posted: "2025-10-30T07:08:00Z"
last_post: "2025-10-30T07:08:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:23:11Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Auctioneer - Browsing Issue and Fix

## Post 157788 by Thisolddad — 2025-10-30T07:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157788#p157788 | page 1 | era: 1.18.1-announced-pre-release -->

I am a creature of habit. Auctioneer was the first auction house addon I used Oh so many years ago. I still prefer it. I was not able to find any information on anyone else having the issue below, but I figured I would at least share in case someone is quietly suffering or happens upon it in the future.

 **Disclaimer**: I am not a programmer. What little I know, is from software testing and working with programmers.

 **Issue**: When browsing the auction house the interface buttons (search, scan, etc) stop working. For me this was only happening when I searched any of the armor categories. This is caused by a known Blizz bug, and there is actually code in Auctioneer to handle it, but for some reason it is never reaching that code.

 **Version**: Auctioneer v3.9.0.1063 from AuctioneerPack-3.9.0.1067 (I actually had this issue in ever version of Auctioneer I tried)

 **Fix**: Edit AddOns/Auctioneer/AucQueryManager.lua
Add the Following Code just before the end of function AucQueryManager_OnUpdate() Code: Select all

```
	-- reset stuck query if no progress > 5 seconds
if request and request.querySent and request.lastQueryResponseTime then
local elapsed = GetTime() - request.lastQueryResponseTime
if elapsed > 5 then
debugPrint("Failsafe triggered: query stuck >5s, aborting to restore controls.")
removeRequestFromQueue(QueryAuctionItemsResultCodes.PartialComplete)
if AuctionFrameBrowse_SearchButton then AuctionFrameBrowse_SearchButton:Enable() end
if AuctionFrameBrowse_NextPageButton then AuctionFrameBrowse_NextPageButton:Enable() end
DEFAULT_CHAT_FRAME:AddMessage("Auctioneer Query timeout — controls reset.")
end
end

```

 ***Note** - You can remove the last line that sends a message to chat, I just like to know it was triggered.

Hope this is able to help someone.

T.O.D.

