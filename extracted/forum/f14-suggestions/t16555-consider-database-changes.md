---
title: "Consider Database changes"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16555"
topic_id: 16555
forum_id: 14
forum: "Suggestions"
author: "Trukken"
author_authority: "player"
posted: "2024-12-16T15:57:00Z"
last_post: "2024-12-16T15:57:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T11:41:46Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Consider Database changes

## Post 112924 by Trukken — 2024-12-16T15:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112924#p112924 | page 1 | era: pre-1.18.1 -->

As far as I understood the recent outage occurred because a DB table limitation was reached.
I have a couple of idea how you could reduce that table. It contains a lot of assumptions, so feel free to correct me.
- Move inactive players' items to an items_inactive table. Retrieve and insert into items when they want to play again.
- Instead of having a one table for all the items divide them into multiple tables. ex 'gear', 'materials', 'consumables' and so on.
- If you run out of indexes, consider reindexing during maintenances. But this is not a good solution as you will end up running into this problem eventually.
I'm not sure what DB you are using, but these suggestions should be applicable for most relational and non-relational DBs.

Best regards

