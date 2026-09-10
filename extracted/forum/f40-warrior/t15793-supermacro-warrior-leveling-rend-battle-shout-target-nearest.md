---
title: "SuperMacro Warrior Leveling Rend, Battle Shout, Target Nearest, etc"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15793"
topic_id: 15793
forum_id: 40
forum: "Warrior"
author: "Webmaster"
author_authority: "player"
posted: "2024-11-12T13:45:00Z"
last_post: "2024-11-12T13:45:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T07:53:41Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# SuperMacro Warrior Leveling Rend, Battle Shout, Target Nearest, etc

## Post 107673 by Webmaster — 2024-11-12T13:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107673#p107673 | page 1 | era: pre-1.18.1 -->

I think you might like this simple, but efficient supermacro with a few conditional checks.
Code: Select all

```
/run if UnitIsDead("target") and UnitExists("target") then ClearTarget(); end
/run if GetUnitName("target")==nil then TargetNearestEnemy() end

/run for i=1,120 do if IsCurrentAction(i) then return end end CastSpellByName("Attack")

/cast Charge

/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Ability_Gouge" then x=1 end i=i+1 end if x==0 and UnitHealth("target")/UnitHealthMax("target") > 0.3 then CastSpellByName("Rend") end

/run local hasBuff=false for i=1,40 do if UnitBuff("player",i) and strfind(UnitBuff("player",i),"Warrior_BattleShout") then hasBuff=true break end end if not hasBuff then CastSpellByName("Battle Shout(Rank 1)") end

/cast Heroic Strike
```

