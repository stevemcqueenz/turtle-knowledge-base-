---
title: "API UnitIsPVP"
url: "https://turtle-wow.fandom.com/wiki/API_UnitIsPVP"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-10T11:06:51Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitIsPVP

Checks to see if a unit is flagged for PvP or not.
<syntaxhighlight lang="lua">
 local ispvp = UnitIsPVP(unit);
</syntaxhighlight>
----

** *Arguments***

  ; unit ([UnitID](API Type UnitId))
   the unit name (e.g., "target")

----

** *Returns***

  ; ispvp
   1 if the unit is flagged for PvP, nil otherwise.

----

** *Example***
<syntaxhighlight lang="lua">
 if (UnitIsPVP("target")) then
  -- Target is flagged for PvP
 end
</syntaxhighlight>
----

## Macro
Turns off pvp and uses rank 1 Consecration until you are no longer flagged for PvP<syntaxhighlight lang="lua">
/run if not pvpTime then pvpTime = 0 end if UnitIsPVP("player") then CastSpellByName("Consecration(Rank 1)") end if pvpTime == 0 and UnitIsPVP("player") then TogglePVP() pvpTime = GetTime() end if GetTime() - pvpTime > 300 then pvpTime = 0 end
</syntaxhighlight>
