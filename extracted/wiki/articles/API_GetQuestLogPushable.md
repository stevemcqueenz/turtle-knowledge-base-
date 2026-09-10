---
title: "API GetQuestLogPushable"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestLogPushable"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:48:32Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestLogPushable

Returns true if the currently loaded quest in the quest window is able to be shared with other players.
 GetQuestLogPushable();
----

  - *Arguments***

   *none*

----

  - *Returns***

  ; Boolean

----

  - *Example***

  -- Determine whether the selected quest is pushable or not
  if ( GetQuestLogPushable() and GetNumPartyMembers() > 0 ) then
    QuestFramePushQuestButton:Enable();
  else
    QuestFramePushQuestButton:Disable();
  end

  - *Result***

 true | false
----

  - *Description***

   Returns true if the currently loaded quest in the quest window is able to be shared with other players ("pushable" simply meaning "sharable").
   To initiate pushing of a quest, see [QuestLogPushQuest()](API QuestLogPushQuest).

   Code sample taken from *\Interface\FrameXML\QuestLogFrame.lua:42* (#4150)

----
