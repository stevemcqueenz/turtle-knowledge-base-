---
title: "API GetObjectiveText"
url: "https://turtle-wow.fandom.com/wiki/API_GetObjectiveText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:30:32Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetObjectiveText

Gets the objective of the current quest.

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ GetObjectiveText                                                      --]( GetObjectiveText                                                      --)
--[   Returns the short objective summary of the current quest.           --](   Returns the short objective summary of the current quest.           --)
MQOverride_GetObjectiveText = GetObjectiveText;
function GetObjectiveText()
  if(MQBypass_Quest) then
    mq.IO.dprint(MQBypass_Quest.summaryText);
    return MQBypass_Quest.summaryText;
  end;
  
  return MQOverride_GetObjectiveText();
end;
</syntaxhighlight>Example from addon named JudgeHype<syntaxhighlight lang="lua">
	local QuestTitre = JHC_Clean(JHC_CleanLevel(GetTitleText()));
	local QuestTexte = JHC_Clean(JHC_CleanQuete(GetQuestText()));
	local QuestObj = JHC_Clean(JHC_CleanQuete(GetObjectiveText()));
	local spellTexture, spellName = GetRewardSpell(); 

	local Pos = 0;
	local CompareNom,CompareObjectif;
	local NumEntry = getn(JH_Collector.quetes);
	for i=1, NumEntry, 1 do
		CompareNom = "";
		CompareObjectif = "";
		if (JH_Collector.quetes[i]["newquete_"..JHcp]) then
			CompareNom = JH_Collector.quetes[i]["newquete_"..JHcp]["qtnom"];
		end
		if (JH_Collector.quetes[i]["newquete_"..JHcp]) then
			CompareObjectif = JH_Collector.quetes[i]["newquete_"..JHcp]["qtobjectif"];
		end
		if (QuestTitre == CompareNom and QuestObj == CompareObjectif) then
			Pos = i;
		end
	end
	if (Pos == 0) then
		Pos = NumEntry+1;
		table.insert(JH_Collector.quetes, Pos);
		JH_Collector.quetes[Pos] = {};
		JH_Collector.quetes[Pos]["newquete_"..JHcp] = {};
		JH_Main.cc.quetes = JH_Main.cc.quetes + 1;
		JH_Main.ccn.quetes = JHC_CleanLevel(GetTitleText());
	end
</syntaxhighlight>
