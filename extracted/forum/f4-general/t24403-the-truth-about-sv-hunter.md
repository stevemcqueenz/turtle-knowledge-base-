---
title: "The truth about SV Hunter"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24403"
topic_id: 24403
forum_id: 4
forum: "General"
author: "Ffnabep"
author_authority: "player"
posted: "2026-03-21T23:09:00Z"
last_post: "2026-03-21T23:09:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:36:19Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# The truth about SV Hunter

## Post 171700 by Ffnabep (Barrens Chat Casualty) — 2026-03-21T23:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171700#p171700 | page 1 | era: post-1.18.1 -->

/cast Raptor Strike
/cast Lacerate
/cast Carve
/cast Mongoose Bite
/cast Furious Howl
 ---
~1::
loop
{
GetKeyState, ScrollLockState, ScrollLock, T

if (ScrollLockState = "U") {
break
} else {
Send 1
Sleep, 15 ; Sleep for 15 msec
GetKeyState, state, 1, P
if state = U  ; The key has been released, so break out of the loop.
break
}
}
return

