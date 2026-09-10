---
title: "Problems with pfUI, Carbonite"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20833"
topic_id: 20833
forum_id: 3
forum: "Help & Support"
author: "Marked1"
author_authority: "player"
posted: "2025-08-12T07:28:00Z"
last_post: "2025-08-12T15:49:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:42:07Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Problems with pfUI, Carbonite

## Post 144728 by Marked1 — 2025-08-12T07:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144728#p144728 | page 1 | era: pre-1.18.1 -->

Hello, fellow turtles!

Anyone else has a problem with Carbonite? When I enable questing, and quests start showing on the map, my fps drops from stable 80 to maybe 30, makes the game laggy. Also having the same problem with pfUI, though i don't like it and I am not considering using it, though, I believe, Carbonite is superior to pfQuest (which is really inconvenient, has some minor issues). I would like to use Carbonite, and can't find a fix for it. No problems on other clients like 3.3.5a, 2.4.3, just the vanilla 1.21.1 client. I tried all the fixes online, all mods, tweaks, removing the memory usage limit of addons, still no luck. Only closing the map solves the problem, but I want to be able to play with a map, and see the quest areas.
Also I've noticed some Bagnon-TurtleWow items still give lua errors.

Thank you in advance!   satisfied_turtle   satisfied_turtle

## Post 144860 by Marked1 — 2025-08-12T15:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144860#p144860 | page 1 | era: pre-1.18.1 -->

FIXED
I added a throttle mechanism in NxMap and NxQuest for QMapWatchAreas , making them blink every 0.5 s and limited watched quest areas only to tracked quest

