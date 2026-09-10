---
title: "API GetNumQuestWatches"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumQuestWatches"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:27:49Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumQuestWatches

Returns the number of quest watches active.

## Addon
Example from addon named ElvUI<syntaxhighlight lang="lua">
	HookScript(QuestTrack, "OnClick", function()
		if IsQuestWatched(GetQuestLogSelection()) then
			RemoveQuestWatch(GetQuestLogSelection())

			QuestWatch_Update()
		else
			if GetNumQuestLeaderBoards(GetQuestLogSelection()) == 0 then
				UIErrorsFrame:AddMessage(QUEST_WATCH_NO_OBJECTIVES, 1.0, 0.1, 0.1, 1.0)
				return
			end

			if GetNumQuestWatches() >= MAX_WATCHABLE_QUESTS then
				UIErrorsFrame:AddMessage(format(QUEST_WATCH_TOO_MANY, MAX_WATCHABLE_QUESTS), 1.0, 0.1, 0.1, 1.0)
				return
			end

			AddQuestWatch(GetQuestLogSelection())

			QuestLog_Update()
			QuestWatch_Update()
		end

		QuestLog_Update()
	end)
</syntaxhighlight>Example from addon named EQL3<syntaxhighlight lang="lua">
	-- Set tracking indicator
	if ( GetNumQuestWatches() > 0 ) then
		EQL3_QuestLogTrackTracking:SetVertexColor(0, 1.0, 0);
	else
		EQL3_QuestLogTrackTracking:SetVertexColor(1.0, 0, 0);
	end
	
	-- If no watch lines used then hide the frame and return
	if ( watchTextIndex == 1 ) then
		EQL3_QuestWatchFrame:Hide();
		return;
	else
		EQL3_QuestWatchFrame:Show();
		EQL3_QuestWatchFrame:SetHeight(watchTextIndex * (QuestlogOptions[EQL3_Player].TrackerFontHeight+1) + qwHeight);
		EQL3_QuestWatchFrame:SetWidth(questWatchMaxWidth+12);
	end
</syntaxhighlight>
