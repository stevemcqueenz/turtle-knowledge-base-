---
title: "API SpellTargetUnit"
url: "https://turtle-wow.fandom.com/wiki/API_SpellTargetUnit"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T10:56:49Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SpellTargetUnit

This specifies the target that the spell should use without needing you to click the target or make it your main target.
 SpellTargetUnit(unitId)

## Arguments
   Insert paragraph
  ; unitId
   Unit ID : unit you wish to cast the spell on.  Insert paragraph

## Example
<syntaxhighlight lang="lua">
 local ue = UnitExists("target"); -- We'll need to know if we have a target at the moment. 
 ClearTarget(); -- Get rid of it, either way
 CastSpellByName("Power Word: Fortitude"); -- This gets us into cursor casting mode.
 SpellTargetUnit("raid1"); -- This casts PW:F on raid1 (if you are in a raid).
 if (ue) then
  TargetLastTarget(); -- Return target if it existed before we clared it.
 end
</syntaxhighlight>

## Macro
Cast Healing Touch on MouseFocus with SpellTargetUnit<syntaxhighlight lang="lua">/run i=(GetMouseFocus().unit) if i then CastSpellByName("Healing Touch") SpellTargetUnit(i) end</syntaxhighlight>

## Addon
From addon named Clique<syntaxhighlight lang="lua">
    -- If the casting hand is up on the screen, cast the waiting spell on
    -- this unit
    if SpellIsTargeting() then
        if button == "LeftButton" then SpellTargetUnit(unit)
        elseif button == "RightButton" then SpellStopTargeting() end
        return true
    end
</syntaxhighlight>
