---
title: "Gatherer Issue"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16781"
topic_id: 16781
forum_id: 18
forum: "AddOns"
author: "irakien"
author_authority: "player"
posted: "2024-12-29T01:36:00Z"
last_post: "2024-12-31T22:43:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:27:24Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Gatherer Issue

## Post 114710 by irakien — 2024-12-29T01:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114710#p114710 | page 1 | era: pre-1.18.1 -->

If you have this bother message:
Error: Interface\AddOns\Gatherer\Gatherer .lua 1837: table index is nil

This happens because the addons is not able to take the name of the zone so we need to ensure that we dont pass to the array a null value. We can solve this issue selecting the code from line 1834 to 1843
Code: Select all

```
local continentName = Gatherer_GetContinentName(gatherC)
local zoneName = Gatherer_GetZoneName(gatherC, gatherZ)

if (not GatherItems[continentName]) then GatherItems[continentName] = {}; end
if (not GatherItems[continentName][zoneName]) then
GatherItems[continentName][zoneName] = {};
end
if (not GatherItems[continentName][zoneName][gather]) then
GatherItems[continentName][zoneName][gather] = {};
end
```

and replace it for this code:
Code: Select all

```
if not gatherC or not gatherZ then
return false -- Exit gracefully if input is invalid
end

 -- Retrieve continent and zone names
local continentName = Gatherer_GetContinentName(gatherC)
local zoneName = Gatherer_GetZoneName(gatherC, gatherZ)

 -- Exit gracefully if continentName or zoneName is nil
if not continentName or not zoneName then
return false
end

 -- Initialize GatherItems table if it doesn't exist
GatherItems = GatherItems or {}

 -- Safely navigate and initialize the GatherItems table hierarchy
GatherItems[continentName] = GatherItems[continentName] or {}
GatherItems[continentName][zoneName] = GatherItems[continentName][zoneName] or {}
GatherItems[continentName][zoneName][gather] = GatherItems[continentName][zoneName][gather] or {}
```

## Post 115066 by JackTupp — 2024-12-31T22:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115066#p115066 | page 1 | era: pre-1.18.1 -->

Awesome sauce thx!

