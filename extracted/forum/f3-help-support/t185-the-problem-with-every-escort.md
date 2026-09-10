---
title: "The problem with every Escort"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=185"
topic_id: 185
forum_id: 3
forum: "Help & Support"
author: "Hatberg"
author_authority: "player"
posted: "2018-10-28T09:49:00Z"
last_post: "2018-10-29T19:18:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:32:49Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# The problem with every Escort

## Post 950 by Hatberg — 2018-10-28T09:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=950#p950 | page 1 | era: pre-1.18.1 -->

So after some testing I think I've narrowed down the problem with every Escort quest:

 - If nobody else started the Escort (or previously completed it succesfully), the Escort NPC will start at it's intended start position.
 - If the Escort dies while in transit, it will respawn (about 6 mins later) at the location where it died
 - If you start the Escort anywhere outside of it's original startiung position, it will first run to the starting location. If this is too far away, the Escort will teleport/disappear to it's starting location instead, causing your Escort to fail due to running out of range
 - You can then abandon the Escort quest one more time, and try the escort quest as normal

## Post 965 by Sinrek (Grandmaster of Forum PvP) — 2018-10-28T19:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=965#p965 | page 1 | era: pre-1.18.1 -->

That's some sick mechanics. How should it work, do you know?

## Post 967 by Hatberg — 2018-10-28T19:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=967#p967 | page 1 | era: pre-1.18.1 -->

A dead escort should always spawn at it's origin location.

## Post 979 by Pigglebee (Barrens Chat Casualty) — 2018-10-29T07:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=979#p979 | page 1 | era: pre-1.18.1 -->

My escort (walk out the castle in Barrens) turned around, walked up a wall straight into the castle and got gangraped by 5 mobs.

## Post 984 by Torta (Turtle WoW Team) [STAFF] — 2018-10-29T19:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=984#p984 | page 1 | era: pre-1.18.1 -->

Hello! Fixed. Indeed it was a global problem with every escort in game.
Deploying changes on the next server update.

