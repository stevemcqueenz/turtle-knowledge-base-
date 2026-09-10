---
title: "API GameTooltip SetInventoryItem"
url: "https://turtle-wow.fandom.com/wiki/API_GameTooltip_SetInventoryItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-06T17:44:48Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["Widget methods"]
---
# API GameTooltip SetInventoryItem

<syntaxhighlight lang="lua">
 hasItem, hasCooldown, repairCost = 
  Tooltip:SetInventoryItem("unit", slot {, nameOnly});
</syntaxhighlight>

This function sets a tooltip widget to display information for the given unit's given inventory slot.

----
  -*Arguments*
**

  ("unit", slot {, nameOnly})
  ;unit : String - the unit whose inventory should be searched
  ;slot : Number - the [inventory slot number](API Type InventorySlotId) to search
  ;nameOnly : Unknown - unknown argument

----
  -*Returns*
**

  hasItem, hasCooldown
  ;hasItem : Boolean - is there an item at the given slot?
  ;hasCooldown : Boolean - unknown
  ;repairCost : Number - cost of repairing item 

----
  -*Example*
**
<syntaxhighlight lang="lua">
 -- See if the player has head gear and if it is broken
 function HasHeadGear()
  local headSlot = getglobal("CharacterHeadSlot");
  local hasItem, hasCooldown, repairCost =
   MyTooltip:SetInventoryItem("player", headSlot:GetID());
  if ((hasItem) and (repairCost) and (repairCost > 0)) then
   return true;
  else
   return false;
  end
 end
</syntaxhighlight>
----
  -*Source***

This information was obtained via a Google cached page of a Thottbot index of a now expired official US beta forum post by Angarth.  It appears to still be correct.

repairCost info obtained from orginal blizzard lua files (PaperDolFrame.lua and MoneyFrame.lua)
