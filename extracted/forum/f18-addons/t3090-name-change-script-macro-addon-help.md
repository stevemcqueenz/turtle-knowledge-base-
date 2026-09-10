---
title: "Name change script/macro/addon help."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3090"
topic_id: 3090
forum_id: 18
forum: "AddOns"
author: "Ivlys"
author_authority: "player"
posted: "2022-06-02T09:12:00Z"
last_post: "2022-07-12T02:41:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:33:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Name change script/macro/addon help.

## Post 18964 by Ivlys — 2022-06-02T09:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18964#p18964 | page 1 | era: pre-1.18.1 -->

Hello!

I've been trying to make a script/addon that changes my name to anything i want so other ppl can't see it while streaming/recording.

This one works but it only affects your unit frame (target and targetoftarget still shows real name).
 ****local muf=UnitName UnitName = function(unit) if unit=='player' then return 'YourName' else return muf(unit) end end****

Is there any way to make it work with every frame? (while not completely renaming everything you target as well).

This one from modern Classic client does exactly what i need.
 ****local muf=UnitName UnitName = function(unit) if UnitGUID(unit) == UnitGUID('player') then return 'YourName' else return muf(unit) end end****

But doesn't work in vanilla sadly :(
Getting this error.
 **Error: attempt to call global "UnitGUID" (a nil value)**

## Post 19905 by Gurky (Barrens Chat Casualty) — 2022-07-12T02:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19905#p19905 | page 1 | era: pre-1.18.1 -->

Look into UnitName("player").

Maybe looking something like

If UnitName("player") == "yourcharactername" then
Framename:settext("whatyouwant")

