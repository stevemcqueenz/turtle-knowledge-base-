---
title: "API UnitExists"
url: "https://turtle-wow.fandom.com/wiki/API_UnitExists"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T12:49:20Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitExists

Returns true if the specified unit exists, false otherwise
----

Example:<syntaxhighlight lang="lua">
 function 1stBuff()
 	if(UnitExists("target")) then 
 		MeinZiel="target";
 		DEFAULT_CHAT_FRAME:AddMessage("My targets 1st buff: "..(UnitBuff(MeinZiel, 1)));
 	else 
 		MeinZiel="player";
 		DEFAULT_CHAT_FRAME:AddMessage("My own 1st buff: "..(UnitBuff(MeinZiel, 1)));
 	end;
 end
</syntaxhighlight>

## Macros
Call Pet, Revive Pet or Mend Pet<syntaxhighlight lang="lua">
/run if not UnitExists("pet") then CastSpellByName("Call Pet") else if UnitIsDead("pet") then CastSpellByName("Revive Pet") else CastSpellByName("Mend Pet") end end
</syntaxhighlight>Send pet to assist on friendly target. Attack on hostile target. Or else set the pet to follow. <syntaxhighlight lang="lua">
/run if UnitExists("target") then if UnitIsFriend("player","target") then AssistUnit("target");PetAttack();else if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetFollow();else PetAttack();end;end;else PetFollow();end
</syntaxhighlight>
