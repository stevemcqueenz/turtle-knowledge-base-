---
title: "API GetQuestLogQuestText"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestLogQuestText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:49:28Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestLogQuestText

Returns the description and objectives required for the specified quest.
 GetQuestLogQuestText();
----

** *Arguments***

   *none*

----

** *Returns***

   String questDescription, String questObjectives

  ; questDescription
   The quest description
  ; questObjectives
   The quest objective

----

** *Example***

 local questDescription, questObjectives = GetQuestLogQuestText();

** *Result***

 "Those darn leprechauns continue to bury their gold in my fields...", "Kill 10 leprechauns."
----

** *Description***

   Returns the description and objectives required for the specified quest.
