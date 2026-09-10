---
title: "API IsQuestCompletable"
url: "https://turtle-wow.fandom.com/wiki/API_IsQuestCompletable"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:22:47Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsQuestCompletable

Returns true if a quest is possible to complete.
 IsQuestCompletable();
----

  - *Arguments***

   *none*

----

  - *Returns***

  ; Boolean

----

  - *Example***

  if ( IsQuestCompletable() ) then QuestFrameCompleteButton:Enable(); end

  - *Result***

 true | false
----

  - *Description***

   Returns true if the currently loaded quest in the quest window is completable.
