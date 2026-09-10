---
title: "API UnitIsUnit"
url: "https://turtle-wow.fandom.com/wiki/API_UnitIsUnit"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-09T19:50:40Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitIsUnit

Returns true if the two specified units are the same, false otherwise.
----

** *Arguments***

   (String unit1, String unit2)

  ; unit1
   The first unit to query (e.g. "party1", "pet", "player")
  ; unit2
   The second unit to compare it to (e.g. "target")

----

** *Returns***

   Boolean unitIsUnit

  ; unitIsUnit
   1 if the two units are the same, nil otherwise.

----

** *Example***
<syntaxhighlight lang="lua">
 if ( UnitIsUnit("party1", "target") ) then
   TargetUnit("partypet1");
 else
   TargetUnit("party1");
 end;
</syntaxhighlight>
----

## Macros
Hunter's Mark and pet attack<syntaxhighlight lang="lua">
/run if not ( UnitIsUnit("target", "pettarget") ) then CastSpellByName("Hunter's Mark");PetAttack();end
</syntaxhighlight>Pet follow only if it also attacks the same target as the one you want to scattershot<syntaxhighlight lang="lua">
/run if ( UnitIsUnit("playertarget", "pettarget") ) then PetFollow(); end
/cast Scatter Shot
</syntaxhighlight>
