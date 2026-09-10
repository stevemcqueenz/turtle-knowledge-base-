---
title: "API Type UnitId"
url: "https://turtle-wow.fandom.com/wiki/API_Type_UnitId"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-19T15:57:16Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# API Type UnitId

Many of the API functions which act on units in the game world (Players, NPC's, Monsters, etc) refer to the unit in question by an identifier that is related to how the player is accessing the unit. The following values are available:

### Base Values
"player" The current player

"pet" The current player's pet

"partyN" The Nth party member excluding the player (1,2,3 or 4)

"partypetN" The pet of the Nth party member (N is 1,2,3, or 4) (Added in 1.5.0)

"raidN" The raid member with raidIndex N (1,2,3,...,40).

"raidpetN" The pet of the raid member with raidIndex N (1,2,3,...,40) (Added in 1.5.0)

"target" The currently targetted unit

"mouseover" The unit which the mouse is currently (or was most recently) hovering over

The following value also appears in some very specific places (Vendor interactions, for example)

"npc" or "NPC" The NPC with which the player is currently interacting.

### Targets
You can append the suffix target to any UnitId to get a UnitId which refers to that unit's target (e.g. "partypet2target"). This appending can be repeated indefinitely (e.g. "playertargettarget"), though you will observe an attendant performance hit if you overdo it, as the game engine has to jump from target to target.

### Notes
Many of the functions which take a UnitId only provide useful results for a subset of ID's. Other functions will only provide information for friendly targets (or those upon which a power is active).

Also, some functions return different values if the target is close enough to be 'visible' to your client (not necessarily in line of sight), as can be determined with UnitIsVisible("unit"), versus further away.
