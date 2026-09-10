---
title: "API TargetLastEnemy"
url: "https://turtle-wow.fandom.com/wiki/API_TargetLastEnemy"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T06:34:43Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API TargetLastEnemy

Selects the last targetted enemy as the current target.
 TargetLastEnemy();
----

  - *Arguments***

   *none*

----

  - *Returns***

  ; nil

----

  - *Example***

 TargetLastEnemy();

  - *Result***

----

  - *Description***

   Selects the last targetted enemy as the current target. It will select a dead enemy's corpse if that was the last live enemy targetted.

## Macros
Self Flash Heal or Flash Heal friendly target<syntaxhighlight lang="lua">/run if UnitIsFriend ("player", "target") then CastSpellByName("Flash Heal") else CastSpellByName("Flash Heal",1)  end; TargetLastEnemy();UIErrorsFrame:Clear()</syntaxhighlight>Heal anyone in range who is low on hp<syntaxhighlight lang="lua">
/run for i=1,40 do TargetNearestFriend(); if UnitHealth("target")/UnitHealthMax("target") < 0.9 then if UnitIsPlayer("target") then CastSpellByName("EnterYourHealspellHere"); end end end; TargetLastEnemy();
</syntaxhighlight>

## Addon
Example from addon named Detox<syntaxhighlight lang="lua">
	--restore original target
	self:Debug("completed curing attempts")
	if targetIsEnemy then
		if not UnitIsEnemy("target","player") then 
			self:Debug("restoring last enemy target")
			TargetLastEnemy() -- Decursive using TargetUnit("playertarget")
			-- Decursive scheduling AttackTarget() after 1sec when PLAYER_ENTER_COMBAT
		else
			self:Debug("original enemy still targetted , not switching back")
		end
</syntaxhighlight>
