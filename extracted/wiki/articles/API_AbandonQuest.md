---
title: "API AbandonQuest"
url: "https://turtle-wow.fandom.com/wiki/API_AbandonQuest"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T11:18:54Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API AbandonQuest

Abandon the specified quest.
 AbandonQuest();
----

  - *Arguments***

   *none*

----

  - *Returns***

  ; nil

----

  - *Example***

 AbandonQuest();

  - *Result***

----

  - *Description***

   Abandon's the specified quest. Looks like [SetAbandonQuest](API SetAbandonQuest) should be called prior to use.

## Macro
Abandon all the quests in your quest log<syntaxhighlight lang="lua">/run for i=1,GetNumQuestLogEntries() do SelectQuestLogEntry(i); SetAbandonQuest(); AbandonQuest(); end</syntaxhighlight>

## Addon
Example from addon named BetterWaypoints<syntaxhighlight lang="lua">--Set our Hooks
--Abandon quest to know when you drop a quest and no longer require that questgiver
local Old_AbandonQuest =  AbandonQuest
function  AbandonQuest() 
	local title = GetAbandonQuestName()
	if(title)then
		DEFAULT_CHAT_FRAME:AddMessage("Abandoning:"..title)
		clearquest(title)
		
	end
	Old_AbandonQuest()
	return Old_AbandonQuest
	
end</syntaxhighlight>
