---
title: "API IsCurrentQuestFailed"
url: "https://turtle-wow.fandom.com/wiki/API_IsCurrentQuestFailed"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:21:53Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsCurrentQuestFailed

## Addon
Example from addon named QuestHistory<syntaxhighlight lang="lua">
				-- Check if quest is failed
				if ( IsCurrentQuestFailed() ) then
					if ( not QuestHistory_List[RealmName][PlayerCharacterName][questID].f ) then
						QuestHistory_List[RealmName][PlayerCharacterName][questID].f = true;
						if ( not QuestHistory_List[RealmName][PlayerCharacterName][questID].fc ) then
							QuestHistory_List[RealmName][PlayerCharacterName][questID].fc = 1;
						else
							QuestHistory_List[RealmName][PlayerCharacterName][questID].fc = QuestHistory_List[RealmName][PlayerCharacterName][questID].fc + 1;
						end
					end
				else
					-- Mark quest as not failed
					QuestHistory_List[RealmName][PlayerCharacterName][questID].f = nil;
				end
				-- Make sure quest is not marked abandoned since it is currently in the quest log
				QuestHistory_List[RealmName][PlayerCharacterName][questID].a = nil;
			end
</syntaxhighlight>Example from plugin for Titan Panel named TitanQuests<syntaxhighlight lang="lua">
	-- set title
	local newquestTitle = TitanUtils_GetColoredText("["..questLevel..useTag.."]",diff)..TitanUtils_GetHighlightText(questTitle);
	TitanQuests_Details_Title:SetText(newquestTitle);

	if ( IsCurrentQuestFailed() ) then
                questTitle = questTitle.." - ("..TEXT(FAILED)..")";
        end

	TitanQuests_Details_ScrollChild_QuestTitle:SetText(questTitle);
</syntaxhighlight>
