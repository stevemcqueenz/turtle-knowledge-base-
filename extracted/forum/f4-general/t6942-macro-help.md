---
title: "macro help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6942"
topic_id: 6942
forum_id: 4
forum: "General"
author: "Ozzymagnum"
author_authority: "player"
posted: "2023-04-30T16:13:00Z"
last_post: "2023-04-30T16:59:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:06:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# macro help

## Post 43903 by Ozzymagnum — 2023-04-30T16:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43903#p43903 | page 1 | era: pre-1.18.1 -->

i made this macro, i want it to use my trinket first and then my spell but it uses my spell first instead of my trinket.

#showtooltip  Shadow Word: Pain
/use 13
/cast Shadow Word: Pain(Rank 8)

## Post 43912 by Emberlain — 2023-04-30T16:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43912#p43912 | page 1 | era: pre-1.18.1 -->

Looks way too simple to be a vanilla macro. Remember, this is vanilla, not classic. Classic macros will not work here. Try using this link to research and adjust your macro for vanilla: <https://github.com/Meridaw/Vanilla-Macros>

## Post 43916 by Shwannu — 2023-04-30T16:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43916#p43916 | page 1 | era: pre-1.18.1 -->

I don't have a priest, or a usable trinket to test with but try this. Like Emberlain said Vanilla macros are very weak so you might have to do it in lua.

/run local s=GetInventoryItemCooldown("player", 13) if s~=0 then CastSpellByName("Shadow Word: Pain(Rank 8)") else UseInventoryItem(13) end

