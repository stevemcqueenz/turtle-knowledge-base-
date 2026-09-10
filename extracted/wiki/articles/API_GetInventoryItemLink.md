---
title: "API GetInventoryItemLink"
url: "https://turtle-wow.fandom.com/wiki/API_GetInventoryItemLink"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T09:38:10Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetInventoryItemLink

Get a link string for the specified item.
<syntaxhighlight lang="lua">
 link = GetInventoryItemLink("unit", slotId)
</syntaxhighlight>
## Parameters
### Arguments
   ("unit", slotId)

  ; unit
   String - The [UnitId](API Type UnitId) of the unit whose inventory is to be queried.
  ; slotId
   Numeric - The [inventory slot](API Type InventorySlotId) to be queried, obtained via [GetInventorySlotInfo](API GetInventorySlotInfo).

### Returns
  ; link
   String - The link string for the specified item, or nil if the slot is empty.

## Example
### Code
<syntaxhighlight lang="lua">
 local mainHandLink = GetInventoryItemLink("player",GetInventorySlotInfo("MainHandSlot"))
 local _, _, itemCode = strfind(mainHandLink, "(%d+):")
 local _, _, _, _, _, itemType = GetItemInfo(itemCode)
 DEFAULT_CHAT_FRAME:AddMessage(itemType)
</syntaxhighlight>
### Results
Prints the subtype of the mainhand weapon - for example "Mace" or "Sword".

### Comments
The 2nd line of the example is used to strip down the link returned by the function into a format that [GetItemInfo](API GetItemInfo) will accept.  You can't pass a link from [GetInventoryItemLink](API GetInventoryItemLink) to [GetItemInfo](API GetItemInfo) directly.

## Macros
Shoot Gun/Bow/Crossbow/Throw<syntaxhighlight lang="lua">
/run local _,_,i=strfind(GetInventoryItemLink("player",18),"\124Hitem:(%d+)")local _,_,_,_,_,p=GetItemInfo(i)local t={}t.Bows="Bow"t.Guns="Gun"t.Crossbows="Crossbow"t.Thrown="Throw"CastSpellByName((string.gsub(t[p],"^([^T])","Shoot %1")))
</syntaxhighlight>Toggle between the named rod and weapon<syntaxhighlight lang="lua">
/run local p,w,z,c,u,l="Fishing Pole","Gnarled Short Staff",string,CastSpellByName,UseItemByName,GetInventoryItemLink("player",16)local s,e=z.find(l,"%[.+%]")l=z.sub(l,s+1,e-1)if IsShiftKeyDown() then if l~=p then u(p)else u(w)end else c("Fishing")end
</syntaxhighlight>Weapon ﻿imbu﻿﻿e specific weapon<syntaxhighlight lang="lua">
/run if string.find(GetInventoryItemLink("player",16), "NameOfWeapon") then CastSpellByName("WeaponImbueSpellName") end
</syntaxhighlight>

## Addon
Example from addon named AsmoMOD<syntaxhighlight lang="lua">
		-- Use PvP Trinket if it is equipped and active
		if(SaveMe == 1) then
			myTrinket0 =  GetInventoryItemLink("player", GetInventorySlotInfo("Trinket0Slot"))
			myTrinket1 =  GetInventoryItemLink("player", GetInventorySlotInfo("Trinket1Slot"))

			if (myTrinket0 == nil) then myTrinket0 = "empty" end
			if (myTrinket1 == nil) then myTrinket1 = "empty" end
			
			if ((string.find(myTrinket0, "Insignia of the Horde") ~= nil) or (string.find(myTrinket0, "Insignia of the Alliance") ~= nil)) then
				myTrinketUse = GetInventorySlotInfo("Trinket0Slot")
			elseif ((string.find(myTrinket1, "Insignia of the Horde") ~= nil) or (string.find(myTrinket1, "Insignia of the Alliance") ~= nil)) then
				myTrinketUse = GetInventorySlotInfo("Trinket1Slot")
			else
				myTrinketUse = nil
			end
			if(myTrinketUse ~= nil) then
				UseInventoryItem(myTrinketUse);
			end
		end
	end
</syntaxhighlight>
