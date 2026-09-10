---
title: "Macro Help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20826"
topic_id: 20826
forum_id: 4
forum: "General"
author: "Twosheds"
author_authority: "player"
posted: "2025-08-12T02:35:00Z"
last_post: "2025-08-12T04:52:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:42:36Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro Help

## Post 144699 by Twosheds — 2025-08-12T02:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144699#p144699 | page 1 | era: pre-1.18.1 -->

Hey guys, I’m looking for a macro that does the following
Say “Message text” in say if not in a party / raid
Say “Message text” in party if in a party
Say “Message text” in raid if in a raid

I found Code: Select all

```
/run local s,m,c,=SendChatMessage,"<My Message Here>";if UnitInRaid("player")then c="RAID" elseif UnitExists("party1")then c="PARTY" end;s(m,c)
```

But it does not work

## Post 144705 by Czxddl — 2025-08-12T04:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144705#p144705 | page 1 | era: pre-1.18.1 -->

/run local s,m,c=SendChatMessage,"<My Message Here>";if UnitInRaid("player")then c="RAID" elseif UnitExists("party1")then c="PARTY" end;s(m,c)

