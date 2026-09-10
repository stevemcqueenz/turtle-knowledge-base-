---
title: "API GetNumQuestLogEntries"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumQuestLogEntries"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:20:33Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumQuestLogEntries

Returns the number of entries in the quest log.
 GetNumQuestLogEntries();
----

** *Arguments***

   *none*

----

** *Returns***

   Number numEntries

  ; numEntries
   Number of entries in the Quest Log (includes collapsable area grouping headlines).

   Number numQuests

  ; numQuests
   Number of actual quests.

----

** *Example***

 local numEntries, numQuests = GetNumQuestLogEntries()
----

** *Description***

   Returns the number of entries in the quest log.
