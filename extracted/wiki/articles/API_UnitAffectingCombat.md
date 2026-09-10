---
title: "API UnitAffectingCombat"
url: "https://turtle-wow.fandom.com/wiki/API_UnitAffectingCombat"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T07:38:26Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitAffectingCombat

Determine whether a unit is in combat or has aggro.
 affectingCombat = UnitAffectingCombat("unit");

## Parameters
### Arguments
   ("unit")

  ; unit
   String - The [UnitId](API Type UnitId) of the unit to check (Tested with "player", "pet", "party1", hostile "target")

### Returns
  ; affectingCombat
   Flag - Returns 1 if the unit is in combat or has aggro, nil otherwise.

## Details
   Goes true when initiating combat.
   Goes true if aggroed, even if enemy doesn't land a blow.
   If a hunter, then goes true shortly after pet enters combat.
   If using timed spell such as aimed shot, goes true when spell fires (not during charge up).
   Goes to false on death.
   Is false if the unit being checked for agro is out of range, or in another zone.

*Note: remains false if a unit is proximity-aggroed. It wont go true until it either attacks or is attacked.*
----
