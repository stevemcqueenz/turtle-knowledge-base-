---
title: "API TargetByName"
url: "https://turtle-wow.fandom.com/wiki/API_TargetByName"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T06:25:07Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API TargetByName

Target a player by their name.

 TargetByName("name", exactMatch);

## Parameters
### Arguments
  ("name", exactMatch)

  ;name: String - The [name](PlayerName) of the player to target.
  ;exactMatch : Boolean

## Example
 TargetByName("Norrin", true);

## Details
   If the user isn't nearby or doesn't exist, and **exactMatch** isn't set, TargetByName picks the closest match from characters nearby.

   If **exactMatch** is set, TargetByName can also target party members even if they are out of visible range.

   If there is no close match available then an error message is displayed (Error event?) and the target is left unchanged. There is no return value from this method so the only way to check for success is see what the target ended up as afterwards. -- [Flickering](User:Flickering) 20:37, 7 Jan 2005 (EST)

## Macros
Target Windfury Totem, if in duel range (9.9 yards) target last target, else cast Windfury Totem (edit III and YOURNAME)<syntaxhighlight lang="lua">
/run TargetByName("Windfury Totem III YOURNAME", exactMatch) if not CheckInteractDistance("target",3) then CastSpellByName("Windfury Totem")else TargetLastTarget()end
</syntaxhighlight>
Cast spell on enemy that matches name EXACTLY. Useful when leveling to tag mobs first.<syntaxhighlight lang="lua">
/run TargetByName("REPLACE THIS TO NPC NAME", true) CastSpellByName("REPLACE THIS WITH INSTANT CAST SPELL")
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
