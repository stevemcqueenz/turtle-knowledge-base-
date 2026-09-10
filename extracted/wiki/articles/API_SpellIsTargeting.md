---
title: "API SpellIsTargeting"
url: "https://turtle-wow.fandom.com/wiki/API_SpellIsTargeting"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T17:41:03Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SpellIsTargeting

Checks whether a spell is about to be cast, waiting for a target.
<syntaxhighlight lang="lua">
 isTargeting = SpellIsTargeting();
</syntaxhighlight>
## Parameters
### Arguments
   *none*

### Returns
  ; isTargeting
   [Boolean](API Type Boolean) - true if a spell has been cast and is waiting for a target; false otherwise

## Example
<syntaxhighlight lang="lua">
 CastSpellByName("Purify")
 if (SpellIsTargeting()) then
   SpellTargetUnit("player")
 end
</syntaxhighlight>
### Result
Casts Purify on the current target, if possible; otherwise, casts on the casting player.

## Macros
Spammable Hurricane<syntaxhighlight lang="lua">
/run if not SpellIsTargeting() and not CastingBarFrame.channeling then CastSpellByName("Hurricane")end
</syntaxhighlight>Track Hidden, else spammable flare<syntaxhighlight lang="lua">
/run local g,h=GetTrackingTexture(),"Ability_Stealth";if not strfind(g,h) then CastSpellByName("Track Hidden")else if not SpellIsTargeting() then CastSpellByName("Flare")end end
</syntaxhighlight>

## Addon
Example from addon named  Clique<syntaxhighlight lang="lua">
    -- If the casting hand is up on the screen, cast the waiting spell on
    -- this unit
    if SpellIsTargeting() then
        if button == "LeftButton" then SpellTargetUnit(unit)
        elseif button == "RightButton" then SpellStopTargeting() end
        return true
    end
</syntaxhighlight>
