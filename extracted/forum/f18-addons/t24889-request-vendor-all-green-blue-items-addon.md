---
title: "Request: Vendor all green, blue items addon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24889"
topic_id: 24889
forum_id: 18
forum: "AddOns"
author: "Wez0"
author_authority: "player"
posted: "2026-04-18T14:33:00Z"
last_post: "2026-04-18T15:13:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:20:54Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Request: Vendor all green, blue items addon

## Post 175637 by Wez0 (Patch Note Conspiracy Theorist) — 2026-04-18T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175637#p175637 | page 1 | era: post-1.18.1 -->

**Request: Vendor all green, blue items addon**

## Post 175640 by amanagor (Grandmaster of Forum PvP) — 2026-04-18T15:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175640#p175640 | page 1 | era: post-1.18.1 -->

you don't need an addon, just use this macro: /run for b=0,4 do for s=1,GetContainerNumSlots(b) do local l=GetContainerItemLink(b,s) if l then DEFAULT_CHAT_FRAME:AddMessage("Deleting "..l) PickupContainerItem(b,s) DeleteCursorItem() end end end

