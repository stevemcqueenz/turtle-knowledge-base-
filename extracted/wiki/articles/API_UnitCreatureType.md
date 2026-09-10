---
title: "API UnitCreatureType"
url: "https://turtle-wow.fandom.com/wiki/API_UnitCreatureType"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T14:54:15Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitCreatureType

Returns the creature type of the specified unit -- "Humanoid", "Demon", "Beast" or nil.
   local creatureType = UnitCreatureType(unit)
----***Arguments***

   [UnitId](API TYPE UnitId)

   The unit name (e.g. "target", "mouseover", "player")

----***Returns***

   **creatureType**

   A string representing the creature type or nothing if no target or invalid specification.

----***Examples***

   DEFAULT_CHAT_FRAME:AddMessage(UnitCreatureType('target'))
  -*Result***

   Prints the creature type to your default message window of whatever you have targeted.

   -or-

   if (UnitCreatureType("target") == "Humanoid") then 
      CastSpellByName("Sap(Rank 3)")
   end
  -*Result***

   If the creature targeted is a Humanoid and you are a rogue with Sap, Rank 3 -- it will launch that attack.

----***Description*** Returns the creature type of the specified unit -- "Humanoid", "Demon", "Beast" or nil -- if the unit does not have a creature type because you have no target, or the like.

## Macro
Shackle if undead, else Mind Soothe<syntaxhighlight lang="lua">
/run if UnitCreatureType("target")=="Undead" then CastSpellByName("Shackle Undead") else CastSpellByName("Mind Soothe")end
</syntaxhighlight>

## Addon
From addon named MobInfo2<syntaxhighlight lang="lua">
local function MI2_EventLootOpened( )

  if lCurTarget  and  GetNumLootItems() > 0  then
    local index = lCurTarget.index;
    lLastLooted = index;

    -- process loot when opening a corpse we killed
    if UnitIsDead("target")  and UnitCreatureType("target") 
       and not UnitIsPlayer("target") 
       and not UnitIsFriend("player","target")
    then 
      MI2_CorpseOpened( index );
      return 0;
    end
  end
end  -- end of function MI2_EventLootOpened()
</syntaxhighlight>
