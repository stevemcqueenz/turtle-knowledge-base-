---
title: "API QuestLogPushQuest"
url: "https://turtle-wow.fandom.com/wiki/API_QuestLogPushQuest"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:29:10Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API QuestLogPushQuest

Initiates the sharing of the currently viewed quest in the quest log with other players.
 QuestLogPushQuest();
----

  - *Arguments***

   *none*

----

  - *Returns***

   *<unknown>*

----

  - *Example***

  <Button name="QuestFramePushQuestButton" inherits="UIPanelButtonTemplate" text="SHARE_QUEST">
    ...
    <Scripts>
      <OnClick>
        QuestLogPushQuest();
      </OnClick>
      ...
    </Scripts>
  </Button>

  - *Result***

 *<unknown>*
----

  - *Description***

   Attempt to share (push) the currently loaded quest in the quest window with other players.
   The system only attempts to push the quest to grouped players and will fail if a recipient is out of range (typically trading range), does not qualify for the quest (too low level or hasn't completed prior chain-quests) or has already completed it.

   Code sample taken from *\Interface\FrameXML\QuestLogFrame.xml:433* (#4150)
