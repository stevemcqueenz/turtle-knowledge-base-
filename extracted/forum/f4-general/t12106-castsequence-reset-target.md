---
title: "Castsequence reset=target ?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12106"
topic_id: 12106
forum_id: 4
forum: "General"
author: "Spot"
author_authority: "player"
posted: "2023-12-08T23:55:00Z"
last_post: "2023-12-08T23:55:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:57:10Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Castsequence reset=target ?

## Post 80332 by Spot (Barrens Chat Casualty) — 2023-12-08T23:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80332#p80332 | page 1 | era: pre-1.18.1 -->

Is there a way to get a castsequence macro to reset with a new target on 1.12?

I'm using this at the moment.

/cast Amplify Curse
/run s={"Curse of Agony(Rank 3)","Corruption(Rank 3)"} if not q then q=1 end CastSpellByName(s[q]) q=q+1 if q>table.getn(s) then q=1 end

But this does not reset.  If I cast Agony on a target and switch targets, it will cast corruption next.  I'd rather have it cast Agony first, with every new target.  Is that a thing that can be done on turtle wow?

