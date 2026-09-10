---
title: "API GetProgressText"
url: "https://turtle-wow.fandom.com/wiki/API_GetProgressText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:32:47Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetProgressText

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ GetProgressText                                                       --]( GetProgressText                                                       --)
--[   Returns the progress text string, shown when speaking to the turn   --](   Returns the progress text string, shown when speaking to the turn   --)
--[     in player but before the quest is complete.                       --](     in player but before the quest is complete.                       --)
MQOverride_GetProgressText = GetProgressText;
function GetProgressText()
  if(MQBypass_Quest) then
    return MQBypass_Quest.progressText;
  end;
  
  return MQOverride_GetProgressText();
end;
</syntaxhighlight>Example from addon named JudgeHype<syntaxhighlight lang="lua">
function JHC_QuestProgress()
	if (IsQuestCompletable()) then
		local Report;
		local JHcp = JHC_Clean(UnitName("player")).."_"..JHC_Clean(GetCVar("realmName"));
		local JHC_TitreText = JHC_Clean(JHC_CleanLevel(GetTitleText()));
		local JHC_ProgressText = JHC_Clean(JHC_CleanQuete(GetProgressText()));
		local Pos = 0;
		local CompareNom,CompareFinished;
		local NumEntry = getn(JH_Collector.quetes);
		
		for a=1, NumEntry, 1 do
			CompareNom = "";
			CompareFinished = "";
			if (JH_Collector.quetes[a]["newquete_"..JHcp]) then
				CompareNom = JH_Collector.quetes[a]["newquete_"..JHcp]["qtnom"];
			end
			if (JH_Collector.quetes[a]["newquete_"..JHcp]) then
				if (JH_Collector.quetes[a]["newquete_"..JHcp]["qtfinished"]) then
					CompareFinished = JH_Collector.quetes[a]["newquete_"..JHcp]["qtfinished"];
				end
			end
			if (JHC_TitreText == CompareNom and CompareFinished ~= "fini") then
				Pos = a;
			end
		end
</syntaxhighlight>
