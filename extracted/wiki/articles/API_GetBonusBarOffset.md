---
title: "API GetBonusBarOffset"
url: "https://turtle-wow.fandom.com/wiki/API_GetBonusBarOffset"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T13:22:47Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetBonusBarOffset

Returns the current bonus action bar index.  

offset = GetBonusBarOffset() 

## Parameters
**Arguments**

   NONE

**Returns**

  ; offset - Number
   The current bonus action bar index.

## Details
Certain classes have "bonus action bars" for their class-specific actions, e.g. the various [Stance Bars](Stance) for the [Warrior](Warrior) class.  GetBonusBarOffset() returns the index of the current action bar that is being displayed.  Note that simply scrolling through the action bar pages won't change the output; only switching to the different bonus bars.  Each class has their own way of indexing their bonus bars.

**Warrior**

- Battle Stance: 1
- Defensive Stance: 2
- Berserker Stance: 3

**Druid**

- ???

**Rogue**

- Normal: 0
- Stealthed: 1

## Example
<syntaxhighlight lang="lua">
/script ChatFrame1:AddMessage(GetBonusBarOffset())
</syntaxhighlight>

   This will simply print the output of GetBonusBarOffset().  It should change as you change between your bonus bars.
<syntaxhighlight lang="lua">
slotID = (1 + (NUM_ACTIONBAR_PAGES + GetBonusBarOffset() - 1) * NUM_ACTIONBAR_BUTTONS)
</syntaxhighlight>

   Here, slotID will be the action slot number for the first slot of the current bonus bar.  For example, for a Warrior in Defensive Stance, <code>slotID = 85</code>, which is correct.
  
  
  
   

## Macros
Stealth<syntaxhighlight lang="lua">
/run if GetBonusBarOffset() == 0 then CastSpellByName("Stealth") end
</syntaxhighlight>

Ambush / Eviscerate / Backstab<syntaxhighlight lang="lua">
/run if GetBonusBarOffset() == 1 then CastSpellByName("Ambush") elseif GetComboPoints()>=3 then CastSpellByName("Eviscerate") else CastSpellByName("Backstab")end
</syntaxhighlight>

## Addon
From addon named Gypsy<syntaxhighlight lang="lua">
-- Default function modified to handle bonus buttons correctly
function ActionButton_GetPagedID(button) 
	local actualPage = math.mod(CURRENT_ACTIONBAR_PAGE-1,NUM_ACTIONBAR_PAGES) +1; 
	if (button == nil) then 
		message("nil button passed into Gypsy_ActionButtonGetPagedID(), contact Jeff"); 
		return 0; 
	end 
	if (button.isBonus and actualPage == 1) then 
		return (button:GetID() + ((6 + GetBonusBarOffset() - 1) * 12)); 
	elseif ( button:GetParent():GetName() == "MultiBarBottomLeft" ) then
		return (button:GetID() + ((BOTTOMLEFT_ACTIONBAR_PAGE - 1) * 12));
	elseif ( button:GetParent():GetName() == "MultiBarBottomRight" ) then
		return (button:GetID() + ((BOTTOMRIGHT_ACTIONBAR_PAGE - 1) * 12));
	elseif ( button:GetParent():GetName() == "MultiBarLeft" ) then
		return (button:GetID() + ((LEFT_ACTIONBAR_PAGE - 1) * 12));
	elseif ( button:GetParent():GetName() == "MultiBarRight" ) then
		return (button:GetID() + ((RIGHT_ACTIONBAR_PAGE - 1) * 12));
	else 
		return (button:GetID() + ((actualPage - 1) * NUM_ACTIONBAR_BUTTONS)) ;
	end 
end
</syntaxhighlight>
