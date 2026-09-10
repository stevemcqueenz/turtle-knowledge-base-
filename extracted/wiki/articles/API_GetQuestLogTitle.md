---
title: "API GetQuestLogTitle"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestLogTitle"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:01:21Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestLogTitle

Returns the string and other information which is associated with the specific QuestLog Title in the game.
 GetQuestLogTitle(questID);
----

  - *Arguments***

   (Number questID)

  ; questID
   The quest number to get the title of

----

  - *Returns***

  ; questTitle(String)
   The title of the quest
  ; level(Number)
   The level of the quest
  ; questTag(String)
   Should be "Elite", "Dungeon", "PVP", "Raid", or nil.  (Localized, of course.)
  ; isHeader(boolean)
   True if this quest is a header.
  ; isCollapsed(boolean)
   True if this quest is a header and is collapsed.
  ; isComplete(number)
   -1 if quest is (FAILED), +1 if quest is (COMPLETED), nil otherwise.

----

  - *Example***

 local questTitle = GetQuestLogTitle(1);

  - *Result***

 "Leprechaun Assault"

  - *Example from QuestLogFrame.lua***

 local questLogTitleText, level, questTag, isHeader, isCollapsed, isComplete = GetQuestLogTitle(questIndex);
----

  - *Description***

   Returns the string which is associated with the specific QuestLog Title in the game. Also returns other information about a given quest such as what it's level is, completion status, whether it's a header and if so if it is collapsed.
