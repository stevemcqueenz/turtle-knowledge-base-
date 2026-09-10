---
title: "API UnitIsDead"
url: "https://turtle-wow.fandom.com/wiki/API_UnitIsDead"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T11:15:44Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: []
---
# API UnitIsDead

Very useful to determine if a mod should be doing something if "unit" is dead.

Returns 1 if "unit" is dead, nil otherwise.

Information from [UnitIsDeadOrGhost("unit")](API UnitIsDeadOrGhost):

Does not work for ("pet") unless the pet bar is still active.  Not sure why the petbar stays active when the pet dies -- it used to gray out, now it will disappear after some time or some event happens, but not immediately when the pet dies. -- 5/29/2006

## Macros
Call Pet, Revive Pet or Mend Pet<syntaxhighlight lang="lua">
/run if not UnitExists("pet") then CastSpellByName("Call Pet") else if UnitIsDead("pet") then CastSpellByName("Revive Pet") else CastSpellByName("Mend Pet") end end
</syntaxhighlight>If no target /friendly target /dead target, then target nearest enemy<syntaxhighlight lang="lua">
/run if UnitExists("target") == nil or not UnitIsEnemy("target", "player") or UnitIsDead("target") ~= nil then TargetNearestEnemy() end
</syntaxhighlight>
