---
title: "API SpellStopTargeting"
url: "https://turtle-wow.fandom.com/wiki/API_SpellStopTargeting"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T11:00:35Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SpellStopTargeting

Cancels the spell awaiting target selection.

Also cancels some types of weapon buffs when they ask for confirmation.  For example, if you attempt to apply a poison to a weapon that already has a poison, the game will ask you to confirm the replacement.  You can accept the replacement with ReplaceEnchant() or cancel the replacement with SpellStopTargeting().
 SpellStopTargeting()
----

  - *Arguments***

   *none*

----

  - *Returns***

   Boolean istargeting
  ; istargeting
   true if a spell has been cast and is waiting for a target; false otherwise

----

  - *Example***

?

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
