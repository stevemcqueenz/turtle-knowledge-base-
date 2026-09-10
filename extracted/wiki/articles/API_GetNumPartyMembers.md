---
title: "API GetNumPartyMembers"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumPartyMembers"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T11:11:26Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumPartyMembers

Returns number of party members.

numberOfPartyMembers = GetNumPartyMembers();
----

** *Arguments***

  ; None

----

** *Returns***

   (Number numberOfPartyMembers)

  ; numberOfPartyMembers
   The number of party members - from 0 to 4 (excluding the player).

----

** *Example***

 if ( GetNumPartyMembers() > 0 ) then CastSpellByName("Aura of Retribution"); end

** *Result***

Casts Aura of Retribution if player is in a group.
----

** *Description***

   Returns number of party members.

## Macro
Aspect of the Cheetah if solo, Pack if party<syntaxhighlight lang="lua">
/run if GetNumPartyMembers()==0 or GetNumRaidMembers()==0 then CastSpellByName("Aspect of the Cheetah") else CastSpellByName("Aspect of the Pack") end
</syntaxhighlight>

## Addon
From addon ClickHeal<syntaxhighlight lang="lua">
  -- ----- player
  if ( UnitIsUnit('target',unit) and (not isPet) ) then
    for i=1,GetNumPartyMembers() do
      if ( UnitIsUnit(unit,'party'..i..'target') ) then
        return( CHL_SetUnitColorReal('party'..i..'target',false,frame) );
      end
    end
    if ( UnitExists('pet') and UnitIsUnit(unit,'pettarget') ) then
      return( CHL_SetUnitColorReal('pettarget',false,frame) );
    end
    for i=1,GetNumPartyMembers() do
      if ( UnitExists('partypet'..i) and UnitIsUnit(unit,'partypet'..i..'target') ) then
        return( CHL_SetUnitColorReal('partypet'..i..'target',false,frame) );
      end
    end

    return( CHL_SetUnitColorReal('playertarget',false,frame) );
  end

  -- ----- party
  for i=1,GetNumPartyMembers() do
    if ( UnitIsUnit(unit,'party'..i..'target') ) then				-- "unit" can be party and partypet !
      return( CHL_SetUnitColorReal('party'..i..'target',false,frame) );
    end
  end

  -- (party) pets
  if ( UnitExists('pet') and UnitIsUnit(unit,'pettarget') ) then
    return( CHL_SetUnitColorReal('pettarget',false,frame) );
  end
  for i=1,GetNumPartyMembers() do
    if ( UnitExists('partypet'..i) and UnitIsUnit(unit,'partypet'..i..'target') ) then			-- "unit" can be party and partypet !
      return( CHL_SetUnitColorReal('partypet'..i..'target',false,frame) );
    end
  end
</syntaxhighlight>
