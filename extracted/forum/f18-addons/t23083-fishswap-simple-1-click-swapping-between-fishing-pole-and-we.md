---
title: "FishSwap - Simple 1-click swapping between fishing pole and weapons"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23083"
topic_id: 23083
forum_id: 18
forum: "AddOns"
author: "Draiscor"
author_authority: "player"
posted: "2025-11-30T17:03:00Z"
last_post: "2025-12-11T10:05:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:22:41Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# FishSwap - Simple 1-click swapping between fishing pole and weapons

## Post 161109 by Draiscor — 2025-11-30T17:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161109#p161109 | page 1 | era: 1.18.1-announced-pre-release -->

I always hate having to find my weapons in my bags again after I'm done fishing, so I vibe-coded a simple addon that provides a button that, on the first click, caches the items in your MH and OH, and then equips your fishing pole. On the second click, it re-equips the weapons you had on before the fishing pole.

Feel free to give it a try and let me know if you find it useful, or if you have any issues with it
<https://github.com/Draiscor/FishSwap>

## Post 162424 by Draiscor — 2025-12-11T10:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162424#p162424 | page 1 | era: 1.18.1-announced-pre-release -->

I found a couple of bugs with this while playing over the past few days, so I pushed an update yesterday.

I've now fixed the following:
- Fishing Pole identification should now be much more reliable; especially custom Turtle WoW poles (such as the driftwood fishing pole from Survival)
- The addon can no longer sell the fishing pole and/or weapons to a vendor if the addon button is pressed while a vendor window is open (this may have been caused by an attempted fix of the first issue, and not present in the actual released version before)   scared_turtle
- I've updated the GitHub documentation to include a couple of screenshots of the addon button in the game

