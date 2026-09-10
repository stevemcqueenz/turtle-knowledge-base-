---
title: "API UnitPowerType"
url: "https://turtle-wow.fandom.com/wiki/API_UnitPowerType"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T13:52:58Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitPowerType

Returns a number corresponding to the power type (e.g., mana, rage or energy) of the specified unit.<syntaxhighlight lang="lua">
local powerType = UnitPowerType(unit);
</syntaxhighlight>
----

  - *Arguments***

   (String unit)

  ; arg1
   the unit's power type to query

----

  - *Returns***

   powerType
  ; powerType
   the power type of the query as a number. Values seen so far are
  * 0 for Mana
  * 1 for Rage
  * 2 for Focus (hunter pets)
  * 3 for Energy
  * 4 for Happiness

----

  - *Example*<syntaxhighlight lang="lua">**
if (UnitPowerType("player") == 1) then
  ChatFrame1:AddMessage('players rage: ' .. UnitMana("player"));
elseif (UnitPowerType("player") == 0) then
  ChatFrame1:AddMessage('players mana: ' .. UnitMana("player"));
elseif (UnitPowerType("player") == 3) then
  ChatFrame1:AddMessage('players energy: ' .. UnitMana("player"));
end
</syntaxhighlight>

  - *Result*<syntaxhighlight lang="lua">**
'players rage: 0' - For warriors(and probably druids in bear form)
'players energy: 0' - For Rogues (and druids in cat form)
'players mana: 0' - Otherwise
</syntaxhighlight>

----

  - *Description***

   Returns a number corresponding to the power type (e.g., mana, rage, energy or happiness) of the specified unit.

## Macros
Cast Viper Sting If target has mana, else cast Scorpid Sting<syntaxhighlight lang="lua">
/run if (UnitPowerType('target')==0) then CastSpellByName("Viper Sting")else CastSpellByName("Scorpid Sting")end
</syntaxhighlight>Mana Burn if target have more then 200 mana else cast Mind Blast<syntaxhighlight lang="lua">
/run if UnitPowerType("target")==0 and UnitMana("target")>200 then CastSpellByName("Mana Burn") else CastSpellByName("Mind Blast") end
</syntaxhighlight>

## Addon
From addon named TNE_LowHealthWarning<syntaxhighlight lang="lua">
function TNE_LowHealth_ManaCheck()

  local mana, frame = "UNIT_MANA", getglobal("LowHealthWarningFrame")
  if (TNE_LowHealth_ManaEnabled and UnitPowerType("player") == 0) then
    -- player is using mana
    frame:RegisterEvent(mana)
  else
    frame:UnregisterEvent(mana)
    TNE_LowHealth_FlashFrameStop(OutOfControlFrame, mana)
  end
end
</syntaxhighlight>
