---
title: "Modifier macros for downranking with mouseover"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11411"
topic_id: 11411
forum_id: 42
forum: "Druid"
author: "Abovex"
author_authority: "player"
posted: "2023-11-02T12:01:00Z"
last_post: "2023-11-02T12:01:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T08:03:08Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Modifier macros for downranking with mouseover

## Post 75435 by Abovex — 2023-11-02T12:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75435#p75435 | page 1 | era: pre-1.18.1 -->

I'm looking for a macro template that will let me use several ranks of a spell binded on one button using modifiers in the macro and heal on mouseover or heal myself automatically with said ranks if i'm not mousing over a raid frame or someones character.
The tbc onward version of said template would be:
#showtooltip
/cast [nomod,@mouseover,help,nodead][nomod,@player] Spell
/cast [mod:shift,@mouseover,help,nodead][mod:shift,@player] Spell(Rank 1)
/cast [mod:ctrl,@mouseover,help,nodead][mod:ctrl,@player] Spell(Rank 2)
/cast [mod:alt,@mouseover,help,nodead][mod:alt,@player] Spell(Rank 3)

I have no idea how to write such a macro for the 1.12 client.

