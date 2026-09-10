---
title: "API TargetNearestEnemy"
url: "https://turtle-wow.fandom.com/wiki/API_TargetNearestEnemy"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T06:54:02Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API TargetNearestEnemy

Selects the nearest enemy as the current target.
 TargetNearestEnemy([reverse]);
----

** *Arguments***

   ([reverse])

  ; reverse
   Boolean - Set to 1 or <code>true</code> to cycle backwards (optional).

----

** *Returns***

  ; nil

----

** *Example***

 TargetNearestEnemy();

** *Result***

----

** *Description***

   Selects the nearest enemy as the current target.
   This appears to be equivalent to pressing TAB, as it only cycles through enemies that you are facing, even if there are enemies behind you that are closer.
   This function only works if initiated by a hardware event.

## Macros
Finds a target and attacks the target if it is not neutral<syntaxhighlight lang="lua">
/run for i=1,4 do TargetNearestEnemy(); if UnitIsEnemy("player", "target") then CastPetAction(1); return end end
</syntaxhighlight>Tagging closest mob<syntaxhighlight lang="lua">
/script ClearTarget();
/run TargetNearestEnemy()
/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;
/cast Shadowburn
</syntaxhighlight>Auto Target / Sinister Strike<syntaxhighlight lang="lua">
/run if UnitExists("target") then CastSpellByName("Sinister Strike") elseif GetUnitName("target")==nil then CastSpellByName("Attack") TargetNearestEnemy() end
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
	
	local i = 0;
	while i < 5 do
		i = i+1;
		if ( not EasyTab_ValidTarget("target") ) then
			TargetNearestEnemy();
		end
	end
end
</syntaxhighlight>
