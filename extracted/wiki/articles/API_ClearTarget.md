---
title: "API ClearTarget"
url: "https://turtle-wow.fandom.com/wiki/API_ClearTarget"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T06:09:34Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ClearTarget

Clears the selected target.
 ClearTarget();
----

** *Arguments***

   *none*

----

** *Returns***

  ; nil

----

** *Example***

 ClearTarget();

** *Result***

Your current target is detargeted.

## Macros
Auto-targeting<syntaxhighlight lang="lua">
/run if UnitHealth("target")==0 and UnitExists("target") then ClearTarget(); end
/run if GetUnitName("target")==nil then TargetNearestEnemy() end
</syntaxhighlight>use Sunder Armor, clears target if target is sheep'ed, shows target's armor<syntaxhighlight lang="lua">
/cast Sunder Armor
/run for i=1,16 do if string.find(tostring(UnitDebuff("target",i)),"Polymorph") then ClearTarget() break end end
/run a=UnitResistance("target",0) if a~=lastArmor then SendChatMessage(a,"SAY") lastArmor=a end
</syntaxhighlight>

## Addon
Example from addon named EasyTab<syntaxhighlight lang="lua">
	-- Try to assist the EasyTab_AssistTarget
	if ( ( EasyTab_AssistTarget and string.len(EasyTab_AssistTarget) > 0 ) and Blacklisted == false ) then
		ClearTarget();
		TargetByName(EasyTab_AssistTarget, 1);
		if ( ( UnitExists("target") and UnitExists("targettarget") ) and not ( UnitIsCorpse("targettarget") or UnitIsDead("targettarget") ) ) then
			AssistUnit("target");
			DEFAULT_CHAT_FRAME:AddMessage(EASYTAB_ASSIST_FOUND_TEXT .. EasyTab_AssistTarget);
			return;
		else
			-- Blacklist the Assist Target as of now
			blTime = time();
			DEFAULT_CHAT_FRAME:AddMessage(EASYTAB_ASSIST_NOTFOUND_TEXT1 .. EasyTab_AssistTarget .. EASYTAB_ASSIST_NOTFOUND_TEXT2 .. blDuration .. EASYTAB_ASSIST_NOTFOUND_TEXT3);
			if ( hadTarget ) then
				TargetLastTarget();
			else
				ClearTarget();
			end
			TargetNearestEnemy();
		end
	end
</syntaxhighlight>
