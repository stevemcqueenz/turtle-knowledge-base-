---
title: "API CheckInteractDistance"
url: "https://turtle-wow.fandom.com/wiki/API_CheckInteractDistance"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-04T16:54:14Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CheckInteractDistance

Returns 1 if you are in range of the specified unit to perform the action specified by distIndex (returns nil otherwise).
----

  - *Arguments***

   (String unit, Int distIndex)

  ; unit
   The unit to query (e.g. "target", "party1", "pet", "player")
  ; distIndex
   A value 1-5:
   1 = Inspect, 11.11 yards (prior to Patch 1.12 this was 5.55 yards)
   2 = Trade, 11.11 yards
   3 = Duel, 10 yards
   4 = Follow, ~28 yards
   5 = Heal, 40 yards (added in patch 1.18.1 - Nightmares of Ursol)

----

  - *Returns***

  ; canInteract
   If in range to perform the action, 1 (true).  Otherwise, nil (false).

----

  - *Notes***

   If "unit" is a hostile unit, the return values are the same.  But you obviously won't be able to do things like Trade.

   There may also be more values for distIndex that we don't know about.

----

  - *Example***
<syntaxhighlight lang="lua">
 if ( CheckInteractDistance("target", 4) ) then
   FollowUnit("target");
 else
   -- we're too far away to follow the target
 end
</syntaxhighlight>

## Macro
Wing Clip if melee range, else Concussive Shot<syntaxhighlight lang="lua">/run if CheckInteractDistance("target",3) then CastSpellByName("Wing Clip") else CastSpellByName("Concussive Shot"); end</syntaxhighlight>

## Addon
From addon CensusPlus<syntaxhighlight lang="lua">
		--  Trigger an update on the inspect honor frame to get honor information
		--
		if ( UnitIsPlayer( unit ) and sightingData.level >= 30
				and CheckInteractDistance( unit, 1)
				and not UnitIsUnit("player", unit) and unit == "target"
				and g_CensusPlusLastTarget == nil
				and g_CensusPlusLastTargetName == nil
				and CensusPlus_IsInspectLoaded() ) then
			NotifyInspect(unit);
			InspectFrame.unit = unit;
			if ( not HasInspectHonorData() ) then
				g_CensusPlusLastTarget = entry;
			    g_CensusPlusLastTargetName = sightingData.name;
				RequestInspectHonorData();
			else
				InspectHonorFrame_Update();
			end
		end
	end
end
</syntaxhighlight>
