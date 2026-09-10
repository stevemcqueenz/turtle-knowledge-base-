---
title: "API SetAbandonQuest"
url: "https://turtle-wow.fandom.com/wiki/API_SetAbandonQuest"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T11:26:30Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SetAbandonQuest

Called before calling [AbandonQuest](API AbandonQuest)
 SetAbandonQuest();
----

  - *Arguments***

   *none*

----

  - *Returns***

  ; nil

----

  - *Example***

 SetAbandonQuest();

  - *Result***

----

  - *Description***

   Called before calling [AbandonQuest](API AbandonQuest). Found in OnClick event of the Abandon Quest button of the default interface file QuestLogFrame.xml

## Macros
Abandon all the quests in your quest log<syntaxhighlight lang="lua">
/run for i=1,GetNumQuestLogEntries() do SelectQuestLogEntry(i); SetAbandonQuest(); AbandonQuest(); end
</syntaxhighlight>

## Addons
Example from TitanQuest plugin for Titan<syntaxhighlight lang="lua">
			-- abandon quest
			info = {};
			info.value = "AbandonQuest";
			info.text = ABANDON_QUEST;
			info.func = function ()	
					DropDownList1:Hide();				
					SetAbandonQuest();
                			StaticPopup_Show("ABANDON_QUEST", GetAbandonQuestName());
			end
</syntaxhighlight>
