---
title: "API PetAttack"
url: "https://turtle-wow.fandom.com/wiki/API_PetAttack"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T13:23:16Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PetAttack

Instruct your pet to attack your target.
 PetAttack();
----

** *Arguments***

   *none*

----

** *Returns***

  ; nil

----

** *Example***

 PetAttack();

** *Result***

----

** *Description***

   Instruct your pet to attack your target. Requires a buttonpress.

## Macros
Hunter`s Mark and Pet Attack<syntaxhighlight lang="lua">
/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("SniperShot")then c("Hunter's Mark")PetAttack() end
</syntaxhighlight>Send pet to assist on friendly target. Attack on hostile target. Or else set the pet to follow.<syntaxhighlight lang="lua">
/run if UnitExists("target") then if UnitIsFriend("player","target") then AssistUnit("target");PetAttack();else if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetFollow();else PetAttack();end;end;else PetFollow();end
</syntaxhighlight>Pet attack if not set to passive or currently attacking<syntaxhighlight lang="lua">
/run local _,_,_,_,isActive=GetPetActionInfo(10) if not isActive and not GetUnitName("pettarget") then PetAttack() end
</syntaxhighlight>

## Addon
Example from addon named SmartPet<syntaxhighlight lang="lua">
--Modified to catch casting attack from the PetAction Bar and use modifed pet attack
function SmartPet_CastPetAction(id)
	SmartPet_AddDebugMessage(id, "spew");
	if (id  == SmartPet_Actions["Attack"].id ) then
		PetAttack();
	else
		Pre_SmartPet_CastPetAction(id);
	end
end
</syntaxhighlight>
