---
title: "Need help with a macro please"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6763"
topic_id: 6763
forum_id: 4
forum: "General"
author: "Jimmyjimjames"
author_authority: "player"
posted: "2023-04-22T20:50:00Z"
last_post: "2023-04-23T14:28:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:07:00Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Need help with a macro please

## Post 42618 by Jimmyjimjames — 2023-04-22T20:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42618#p42618 | page 1 | era: pre-1.18.1 -->

I am trying to make a macro that will target the nearest enemy and then use X ability, I am able to do this but I run into the problem of the target nearest enemy part continuing to cycle thru enemies, does anyone know a way to make it so I am able to target nearest enemy(or anything similar) and continue to use the ability in the macro without changing targets to something else until my target dies?

## Post 42719 by Baess — 2023-04-23T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42719#p42719 | page 1 | era: pre-1.18.1 -->

/script if GetUnitName("target")==nil then TargetNearestEnemy() end

