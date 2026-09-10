---
title: "Hunter Pet Feed Addon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13417"
topic_id: 13417
forum_id: 18
forum: "AddOns"
author: "Ceebones"
author_authority: "player"
posted: "2024-03-16T20:18:00Z"
last_post: "2024-03-16T22:09:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:29:18Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Hunter Pet Feed Addon

## Post 90370 by Ceebones — 2024-03-16T20:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90370#p90370 | page 1 | era: pre-1.18.1 -->

Returning to TW - trying to get the Hunter Feed O Matic set up that I used in the past.

Can anyone point me to the correct file for Feed O Matic? The current file is riddle with errors when i login.

 3/16 15:49:36.530  ** Loading table of contents Interface\AddOns\GFW_FeedOMatic\GFW_FeedOMatic.toc
 3/16 15:49:36.530  ...rface\AddOns\GFW_FeedOMatic\libs\LibStub\LibStub.lua:6: attempt to index global `_G' (a nil value)
 3/16 15:49:36.530  ++ Loading file Interface\AddOns\GFW_FeedOMatic\Libs.xml
 3/16 15:49:36.530  Error loading libs\LibStub\LibStub.lua
 3/16 15:49:36.530  ++ Loading file Interface\AddOns\GFW_FeedOMatic\libs\CallbackHandler-1.0\CallbackHandler-1.0.xml
 3/16 15:49:36.530  ...e\AddOns\GFW_FeedOMatic\libs\CallbackHandler-1.0\CallbackHandler-1.0.lua:19: unexpected symbol near `...'
 3/16 15:49:36.530  ++ Loading file Interface\AddOns\GFW_FeedOMatic\libs\AceAddon-3.0\AceAddon-3.0.xml
 3/16 15:49:36.530  Interface\AddOns\GFW_FeedOMatic\libs\AceAddon-3.0\AceAddon-3.0.lua:66: unexpected symbol near `...'
 3/16 15:49:36.530  ++ Loading file Interface\AddOns\GFW_FeedOMatic\libs\AceDB-3.0\AceDB-3.0.xml
 3/16 15:49:36.530  ...e\AddOns\GFW_FeedOMatic\libs\AceDB-3.0\AceDB-3.0.lua:45: attempt to index global `LibStub' (a nil value)
 3/16 15:49:36.530  ++ Loading file Interface\AddOns\GFW_FeedOMatic\libs\AceDBOptions-3.0\AceDBOptions-3.0.xml
 3/16 15:49:36.530  ...eedOMatic\libs\AceDBOptions-3.0\AceDBOptions-3.0.lua:6: attempt to index global `LibStub' (a nil value)
 3/16 15:49:36.530  ++ Loading file Interface\AddOns\GFW_FeedOMatic\libs\AceGUI-3.0\AceGUI-3.0.xml
 3/16 15:49:36.530  Interface\AddOns\GFW_FeedOMatic\libs\AceGUI-3.0\AceGUI-3.0.lua:66: unexpected symbol near `...'

## Post 90384 by Zeran (Patch Note Conspiracy Theorist) — 2024-03-16T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90384#p90384 | page 1 | era: pre-1.18.1 -->

Most likely scenarios are:

 1. You downloaded the version for WoW Classic (1.14+) instead of for Vanilla (1.12)
 2. The add-on has some dependencies that are not satisfied (I can see LibStub being mentioned in your errors)

Try this one? [https://legacy-wow.com/vanilla-addons/f ... d-o-matic/](https://legacy-wow.com/vanilla-addons/fizzwidget-feed-o-matic/)

