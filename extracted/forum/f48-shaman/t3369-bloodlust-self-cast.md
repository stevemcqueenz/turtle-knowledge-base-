---
title: "Bloodlust self cast."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3369"
topic_id: 3369
forum_id: 48
forum: "Shaman"
author: "Blackshell"
author_authority: "player"
posted: "2022-07-27T12:27:00Z"
last_post: "2022-07-27T12:27:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T08:24:10Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Bloodlust self cast.

## Post 20516 by Blackshell — 2022-07-27T12:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20516#p20516 | page 1 | era: pre-1.18.1 -->

/run if UnitIsFriend("player", "target") then CastSpellByName("Bloodlust") else TargetUnit("player") CastSpellByName("Bloodlust") TargetLastTarget() end

user supermacro addon.
<https://github.com/isitLoVe/SuperMacro>

