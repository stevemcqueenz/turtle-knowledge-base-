---
title: "API GetComboPoints"
url: "https://turtle-wow.fandom.com/wiki/API_GetComboPoints"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T16:28:20Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetComboPoints

**GetComboPoints()**

Delivers how much combo points the rogue or the druids cat form on the actual target has. 

<syntaxhighlight lang="lua">
  if ( GetComboPoints() == 5 ) then
    print "You have 5 Combopoints, use a Finishing Move!";
  end
</syntaxhighlight>

The return value is a number (0 up to 5).

## Macros
Start attack, Sinister strike until 5 combo points then use Eviscerate<syntaxhighlight lang="lua">
/run for z=1,172 do if IsAttackAction(z) then if not IsCurrentAction(z) then UseAction(z) elseif GetComboPoints()>=5 then CastSpellByName("Eviscerate") else CastSpellByName("Sinister Strike") end end end UIErrorsFrame:Hide()
</syntaxhighlight>Ravage if out of combat, Ferocious Bite if 3 combopoint, else Shred<syntaxhighlight lang="lua">
/run C=CastSpellByName if not UnitAffectingCombat("player")then C("Ravage") elseif GetComboPoints()>=3 then C("Ferocious Bite") else C("Shred") end UIErrorsFrame:Clear()
</syntaxhighlight>

## Addon
Example from addon named FeralSkills<syntaxhighlight lang="lua">
function FeralSkills_FBWillKill()
	if MobHealthFrame and GetComboPoints() > 0 then
		local _,_,_,_,feralAggressionRank = GetTalentInfo(2,2);
		local avgDamage = (70 + (145 * GetComboPoints())) * ( 1 + (.03 * feralAggressionRank));
		local currHP = FeralSkills_GetTargetCurHP();
		if avgDamage and currHP and avgDamage >= currHP then
			--fsprint("Expected FB Dmg: "..avgDamage);
			return 1;
		end
	end
end
</syntaxhighlight>
