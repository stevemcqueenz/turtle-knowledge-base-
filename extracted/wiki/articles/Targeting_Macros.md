---
title: "Targeting Macros"
url: "https://turtle-wow.fandom.com/wiki/Targeting_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-09-10T19:16:29Z"
fetched: "2026-09-10T07:39:46Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Targeting Macros

## Auto-targeting
Put these lines ahead of your existing macro for auto-targeting
 <code>/run if UnitHealth("target")==0 and UnitExists("target") then ClearTarget(); end
 /run if GetUnitName("target")==nil then TargetNearestEnemy() end</code>

Spammable Wand Shoot w/ Auto Targeting
 <code>/run --CastSpellByName("Shoot") end
 /run if GetUnitName("target")==nil or UnitExists("target") and UnitReaction("target","player")>4 then TargetNearestEnemy() end
 /run if not IsAutoRepeatAction(#) then CastSpellByName("Shoot"); end</code>

Auto Shot and melee Attack w/ Auto Targeting
 <code>/run if GetUnitName("target")==nil then TargetNearestEnemy() end
 /run if CheckInteractDistance("target", 3) and (not PlayerFrame.inCombat) then AttackTarget() elseif not IsAutoRepeatAction(#) then CastSpellByName("Auto Shot") end</code>

## Target By Name
Cast spell on enemy that matches name below EXACTLY. Useful when leveling to tag mobs first.
 <code>/run TargetByName("REPLACE THIS TO NPC NAME", true) CastSpellByName("REPLACE THIS WITH INSTANT CAST SPELL")</code>

## Target last enemy
 <code>/run TargetLastEnemy()</code>

## Target last target
 <code>/run TargetLastTarget()</code>

## Target Nearest Enemy
 <code>/run TargetNearestEnemy();</code>

## No Unit Exists
If no target, friendly target, or dead target, then target nearest enemy
 <code>/script if UnitExists("target") == nil or not UnitIsEnemy("target", "player") or UnitIsDead("target") ~= nil then TargetNearestEnemy() end</code>

## Unit Reaction
if no target, no hostile target, then targets nearest enemy
 <code>/run if GetUnitName("target")==nil or UnitExists("target") and UnitReaction("target","player")>4 then TargetNearestEnemy() end</code>

## Target Nearest Friend
 <code>/run TargetNearestFriend()</code>

## Targettarget
Target your target's target, then cast the spell
 <code>/run TargetUnit("targettarget") CastSpellByName("spell")</code>

Target your target's target, then cast the spell, then target the previous target
 <code>/run TargetUnit("targettarget") CastSpellByName("spell") TargetLastTarget()</code>
