---
title: "Name of IU elements? (want to move them)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6251"
topic_id: 6251
forum_id: 18
forum: "AddOns"
author: "Gorstavich"
author_authority: "player"
posted: "2023-03-28T02:09:00Z"
last_post: "2023-04-16T18:42:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:32:19Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Name of IU elements? (want to move them)

## Post 39357 by Gorstavich — 2023-03-28T02:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39357#p39357 | page 1 | era: pre-1.18.1 -->

Could someone please let me know the names of the Turtle Wow Battlegrounds and Donation Reward Shop buttons?

Performing a **GetMouseFocus():GetName()** on them gives me the names:
TWMiniMapBattlefieldFrame
TWMinimapShopFrame

...but when I try to perform a **frame:SetPoint(...)** on them nothing happens, which usually means I'm referencing a wrong/non-existent frame.

## Post 41747 by Gorstavich — 2023-04-16T18:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41747#p41747 | page 1 | era: pre-1.18.1 -->

I was calling ClearAllPoints(), but thank you for the reply regardless.

 **Update:**  Found the issue... and it was something else completely (of course!).  The code I had built wasn't being executed OnLoad in the first place.  Doh!

