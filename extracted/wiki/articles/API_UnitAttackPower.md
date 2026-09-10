---
title: "API UnitAttackPower"
url: "https://turtle-wow.fandom.com/wiki/API_UnitAttackPower"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-10T11:12:23Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitAttackPower

<syntaxhighlight lang="lua">
 base, posBuff, negBuff = UnitAttackPower("unit");
</syntaxhighlight>
Returns the unit's melee attack power and modifiers.
----

  - *Arguments***

   ("unit")
  ; unit
   String - The [UnitId](API Type UnitId) to get information from. (Does not work for <code>"target"</code> - Possibly only <code>"player"</code> and <code>"pet"</code>)

----

  - *Returns***

   base, posBuff, negBuff
  ; base
   Number - The unit's base attack power
  ; posBuff
   Number - The total effect of positive buffs to attack power.
  ; negBuff
   Number - The total effect of negative buffs to the attack power (a negative number)

----

  - *Example***
<syntaxhighlight lang="lua">
 local base, posBuff, negBuff = UnitAttackPower("unit");
 local effective = base + posBuff + negBuff;
</syntaxhighlight>
----

## Macros
Shows you target attack power after reduction. change 126 depending on roar rank.<syntaxhighlight lang="lua">
/cast Demoralizing Roar
/run a=UnitAttackPower("target") - 126 if a ~= lastAttackPower then DEFAULT_CHAT_FRAME:AddMessage(a) lastAttackPower = a end
</syntaxhighlight>
