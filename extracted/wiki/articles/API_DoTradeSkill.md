---
title: "API DoTradeSkill"
url: "https://turtle-wow.fandom.com/wiki/API_DoTradeSkill"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T14:26:07Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API DoTradeSkill

Performs the tradeskill a specified # of times
----

** *Arguments***

   (Number index, Number repeat)

  ; index
   The index of the tradeskill recipe
  ; repeat
   The number of times to repeat the creation of the specified recipe

----

** *Returns***

  ; nil

----

** *Example***

 DoTradeSkill(index, repeat);
or
 DoTradeSkill(75); - craft a mooncloth on my char (all trainer recipes only)

## Macro
Craft Linen Bandage. Edit First Aid and Linen Bandage if you need to craft something else.<syntaxhighlight lang="lua">
/run CastSpellByName("First Aid") for r=1,GetNumTradeSkills() do if GetTradeSkillInfo(r) == "Linen Bandage" then DoTradeSkill(r,1) break end end CloseTradeSkill()
</syntaxhighlight>

## Addon
From addon named GFW_AutoCraft<syntaxhighlight lang="lua">
function P.Iterate()	
	if (P.CraftingQueuedItem or P.CastingOtherSpell) then return; end
	if (table.getn(P.OrderedQueue) > 0) then
		local index = P.GetTradeRecipeIndex(P.OrderedQueue[1].recipe);
		if (index >= 0) then
			if (P.OrderedQueue[1].skill == GetTradeSkillLine()) then
				DoTradeSkill(index, (P.OrderedQueue[1].numQueued - P.OrderedQueue[1].numProduced));
				P.UpdateDisplay();
				return;
			end
		end
		P.ManuallyPaused = false;
		P.UpdateDisplay();
	end
end
</syntaxhighlight>
