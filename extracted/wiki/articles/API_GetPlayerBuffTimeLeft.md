---
title: "API GetPlayerBuffTimeLeft"
url: "https://turtle-wow.fandom.com/wiki/API_GetPlayerBuffTimeLeft"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T14:22:01Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetPlayerBuffTimeLeft

Retrieve info about a certain player buff of a certain type.

buffTimeLeft = GetPlayerBuffTimeLeft(buffIndex);
----

** ***Arguments*****

   (Number buffIndex)

  ; **buffIndex**
   The index of the buff to retrieve. Can be obtained with GetPlayerBuff

----

** ***Returns*****

   (Number buffTimeLeft)

  ; **buffTimeLeft**
   The time (in seconds) left until the buff expires.

----

** ***Example*****

 local timeLeft = GetPlayerBuffTimeLeft(buffIndex)

** *Result***

Retrieves amount of time left of the first buff you have.

or

** ***Example***<syntaxhighlight lang="lua">**
  for i=0,31 do
   local id,cancel = GetPlayerBuff(i,"HELPFUL|HARMFUL|PASSIVE");
   if(id > -1) then
     local timeleft = GetPlayerBuffTimeLeft(id);
    DEFAULT_CHAT_FRAME:AddMessage(timeleft);
   end
 end
</syntaxhighlight>

** ***Result*****

Will display your buff/debuff durations.
----

** ***Description*****

   Retrieves time left until a certain buff expires.

## **Macro**
Refresh Crusader Strike if less then 5 seconds left on the buff<syntaxhighlight lang="lua">
/run for i=0,31 do b=GetPlayerBuff(i,"HELPFUL")if b>=0 and strfind(GetPlayerBuffTexture(b),"CrusaderStrike")then if GetPlayerBuffTimeLeft(b)>5 then return end CastSpellByName("Crusader Strike")return end end CastSpellByName("Crusader Strike")
</syntaxhighlight>Shows your buff/debuff duration's in seconds.<syntaxhighlight lang="lua">
/run for i=0,31 do local id,cancel = GetPlayerBuff(i,"HELPFUL|HARMFUL|PASSIVE"); if(id > -1) then local timeleft = GetPlayerBuffTimeLeft(id); DEFAULT_CHAT_FRAME:AddMessage(timeleft); end end
</syntaxhighlight>

## Addon
Example from addon named AsmoMOD<syntaxhighlight lang="lua">
	-- Kidney Shot Duration Detect
	if(KidneyCheck == 1) then
		local buffIndex = AsmoMOD_UnitHasBuff("player", "Ability_Rogue_KidneyShot");
		local buffTimeLeft = GetPlayerBuffTimeLeft(buffIndex);
		if(buffTimeLeft >= 2) then
			AutoBreak.stunned = true;
		end
		KidneyCheck = 0;
	end
</syntaxhighlight>
