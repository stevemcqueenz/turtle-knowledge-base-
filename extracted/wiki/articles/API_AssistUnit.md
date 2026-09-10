---
title: "API AssistUnit"
url: "https://turtle-wow.fandom.com/wiki/API_AssistUnit"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T05:58:08Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API AssistUnit

Selects the target of the specified id as the current target. 

 AssistUnit("unit");

----
***Arguments***

  ("unit")

  ;unit: String - The [UnitId](API Type UnitId) to select as a target.

----
***Returns***

  ;nil

----
***Example***
 AssistUnit("player");

***Result***

----
***Description***

- Selects the target of the specified id as the current target. One can use any of the defined [UnitId](API Type UnitId) values. One can also use AssistUnit("[unit](API Type UnitId)"pet) to assist the pet.
- If the players target was changed by a Targetting Function it is possible to restore the original target by assisting the player. 

## Macros
Send Pet to assist Friendly Target. Send Pet on that Hostile Target. Recall your Pet.<syntaxhighlight lang="lua">
/run if UnitExists("target") then if UnitIsFriend("player","target") then AssistUnit("target");PetAttack();else if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetFollow();else PetAttack();end;end;else PetFollow();end;
</syntaxhighlight>Assist and follow the party leader<syntaxhighlight lang="lua">
/run AssistUnit("party"..GetPartyLeaderIndex());FollowUnit("party"..GetPartyLeaderIndex())
</syntaxhighlight>Assist and follow if a party leader is found<syntaxhighlight lang="lua">
/run for i=1,4 do if UnitIsPartyLeader("party"..i) then AssistUnit("party"..i); FollowUnit("party"..i)end end
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
