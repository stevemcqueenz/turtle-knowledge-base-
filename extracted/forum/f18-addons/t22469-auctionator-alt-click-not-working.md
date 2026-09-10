---
title: "Auctionator - alt+click not working"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22469"
topic_id: 22469
forum_id: 18
forum: "AddOns"
author: "Wyr"
author_authority: "player"
posted: "2025-10-19T04:37:00Z"
last_post: "2025-10-19T04:37:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:23:27Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Auctionator - alt+click not working

## Post 156132 by Wyr — 2025-10-19T04:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156132#p156132 | page 1 | era: 1.18.1-announced-pre-release -->

I'm using this version of Auctionator that I found who knows where some years ago.
It is not throwing errors and seemingly working as intended, mostly.
<https://drive.google.com/file/d/1Qqpz9olvbLNnaWEe9cuwkr8yxaLK8Mdp/view>

My problem is that it's supposed to be able to auto-insert and search for an item from the bag with alt+click when that function of it is enabled, yet alt+click just functions as a normal click, so for some reason it is not working, even if it's the only loaded addon.

Here is the related code when it's trying to set up its hooks, which still runs: Code: Select all

```
auctionator_orig_ContainerFrameItemButton_OnModifiedClick = ContainerFrameItemButton_OnModifiedClick;
ContainerFrameItemButton_OnModifiedClick = Auctionator_ContainerFrameItemButton_OnModifiedClick;
```

But the "Auctionator_ContainerFrameItemButton_OnModifiedClick" function is not called when i alt+click from what i can tell.
Is "ContainerFrameItemButton_OnModifiedClick" not used by turtle wow? (it does seem to be an existing function at least.) If it's something else here, what should i modify it to hook into? Or what might be the issue?

