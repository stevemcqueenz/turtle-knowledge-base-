---
title: "[Question] Pop-Cap Addons for Turtle"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24525"
topic_id: 24525
forum_id: 18
forum: "AddOns"
author: "Strdst"
author_authority: "player"
posted: "2026-03-26T16:44:00Z"
last_post: "2026-03-26T17:27:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:21:18Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Question] Pop-Cap Addons for Turtle

## Post 172589 by Strdst — 2026-03-26T16:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172589#p172589 | page 1 | era: post-1.18.1 -->

Hihi, I was curious if the official addons that Pop-Cap made for playing Peggle and Bejeweled in WoW were ever made available for Turtle? If not, I'm curious: how difficult is porting addons from the old Classic codebase to Turtle? Thanks!

## Post 172593 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2026-03-26T17:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172593#p172593 | page 1 | era: post-1.18.1 -->

The main issue in backporting lies in hacking potentially missing functions,
otherwise its just syntax work.

If you backport a piece of software from later versions, for example from Classic (13.1) to Vanilla (1.12), and that software uses functions that dont exist in Vanilla (either LUA or WOW),
you will have to find a way to replicate that in the old vanilla client.

A good example are nameplates. If you want to backport a nameplate addon from TBC or higher to Vanilla,
you will have to use a scanning technique to access nameplates, since Vanilla has no API functions that do that.

