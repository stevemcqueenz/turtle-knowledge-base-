---
title: "API SelectQuestLogEntry"
url: "https://turtle-wow.fandom.com/wiki/API_SelectQuestLogEntry"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:31:43Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SelectQuestLogEntry

Makes a quest in the quest log the currently selected quest.
  SelectQuestLogEntry(questID);
----***Arguments***

   (Number questID)

  ; **questID**
   The quest number to make active.

----***Returns***

   none

----***Description***

   This function is necessary before using any functions that pull information from the quest log that are not passed a questID, such as GetQuestLogQuestText().
