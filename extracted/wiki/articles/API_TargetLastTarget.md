---
title: "API TargetLastTarget"
url: "https://turtle-wow.fandom.com/wiki/API_TargetLastTarget"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T06:42:43Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API TargetLastTarget

Selects the last target as the current target. New as of patch 1.6.
 TargetLastTarget();
----

** *Arguments***

   *none*

----

** *Returns***

  ; nil

----

** *Example***

 TargetLastTarget();

** *Result***

----

** *Description***

   Selects the last target as the current target. It will select a dead character or mob's corpse if that was the last live character or mob targetted. Can distinguish between two mobs of the same name and level.

## Macros
Faerie Fire on targettarget if friendly target, else Faerie Fire<syntaxhighlight lang="lua">
/run if UnitCanAttack("player","target") == 1 then CastSpellByName("Faerie Fire")else TargetUnit("targettarget") CastSpellByName("Faerie Fire") TargetLastTarget() end
</syntaxhighlight>Heal enemy target's target<syntaxhighlight lang="lua">
/run if UnitCanAttack("player","target") and not UnitCanAttack("player","targettarget") then TargetUnit("targettarget") CastSpellByName("Heal") TargetLastTarget() end
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
