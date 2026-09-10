---
title: "API GetPetActionInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetPetActionInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T12:35:12Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetPetActionInfo

Returns information on the specified pet action.
  name, subtext, texture, isToken, isActive, autoCastAllowed, autoCastEnabled = GetPetActionInfo(index)
----

  - *Arguments***

   (index)
  ; index
   Number - The index of the pet action button you want to query.

----

  - *Returns***

  ; name, subtext, texture, isToken, isActive, autoCastAllowed, autoCastEnabled

  ; name
   String - The name of the action (or its global ID if isToken is true).
  ; subtext
   String - The subtext for the action's tooltip.
  ; texture
   String - The name (or its global ID, if isToken is true) of the texture for the action.
  ; isToken
   Boolean - Indicates if the action is a reference to a global action, or not (guess -- [Flickering](https://wowpedia.fandom.com/wiki/User:Flickering) 15:12, 28 Dec 2004 (EST))
  ; isActive
   Boolean - Returns true if the ability is currently active.
  ; autoCastAllowed
   Boolean - Returns true if this ability can use autocast.
  ; autoCastEnabled
   Boolean - Returns true if autocast is currently enabled for this ability.

----

  - *Example***

  local name, subtext, texture, isToken, isActive, autoCastAllowed, autoCastEnabled = GetPetActionInfo(4); 
----

  - *Description***

   Returns information on the specified pet action.

## Macros
Print name and number of pet skills<syntaxhighlight lang="lua">
/run for i=1,100 do if GetPetActionInfo(i) then DEFAULT_CHAT_FRAME:AddMessage("Index "..i..": "..GetPetActionInfo(i)) end end
</syntaxhighlight>Pet attack if not set to passive or currently attacking<syntaxhighlight lang="lua">
/run local _,_,_,_,isActive=GetPetActionInfo(10) if not isActive and not GetUnitName("pettarget") then PetAttack() end
</syntaxhighlight>

## Addon
Example from addon named SmartPet<syntaxhighlight lang="lua">
-- Enables the specified pet ability
function SmartPet_EnableAction(action)
	if (SmartPet_Actions[action].index < 1) then
		return;
	end
	local _, _, _, _, _, _, autoCastEnabled = GetPetActionInfo(SmartPet_Actions[action].index);
	if (not autoCastEnabled) then
		SmartPet_AddDebugMessage("Enabling Action: "..SmartPet_Actions[action].name, "spew");	
		if (keym) then
			keym.whack.add(TRUE, TogglePetAutocast, SmartPet_Actions[action].index);
		else	
			TogglePetAutocast(SmartPet_Actions[action].index);
		end
	end
end
</syntaxhighlight>
