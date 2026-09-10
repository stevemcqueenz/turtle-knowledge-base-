---
title: "API GetQuestLogRewardSpell"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestLogRewardSpell"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:58:19Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestLogRewardSpell

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ GetQuestLogRewardSpell                                                --]( GetQuestLogRewardSpell                                                --)
--[   ??                                                                  --](   ??                                                                  --)
MQOverride_GetQuestLogRewardSpell = GetQuestLogRewardSpell;
function GetQuestLogRewardSpell()
  if (MQBypass_LogSelection > 0) then
    return nil;
  end

  return MQOverride_GetQuestLogRewardSpell();
end
</syntaxhighlight>Example from addon named QuestHistory<syntaxhighlight lang="lua">
				-- Record quest spells if doing so
				if ( QuestHistoryFlags["logSpells"].status ) then
					if ( GetQuestLogRewardSpell() ) then
						-- Create blank table to store spell info
						QuestHistory_List[RealmName][PlayerCharacterName][questID].s = { };
						-- Get data for spell reward
						local sTexture, sName = GetQuestLogRewardSpell();
						-- Record data for spell reward
						QuestHistory_List[RealmName][PlayerCharacterName][questID]["s"].t = sTexture;
						QuestHistory_List[RealmName][PlayerCharacterName][questID]["s"].n = sName;
					end
				end
</syntaxhighlight>Example from addon named QuestLink<syntaxhighlight lang="lua">
	if ( GetRewardSpell() ) then
		questInfo.spellReward={};
		questInfo.spellReward.texture, questInfo.spellReward.name = GetQuestLogRewardSpell();
	end
</syntaxhighlight>
