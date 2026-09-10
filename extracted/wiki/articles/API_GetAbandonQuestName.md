---
title: "API GetAbandonQuestName"
url: "https://turtle-wow.fandom.com/wiki/API_GetAbandonQuestName"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T11:13:22Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAbandonQuestName

Returns the name of a quest that is about to be abandoned.  Non-nil in the time between clicking abandon, and before clicking "Yes"
 GetAbandonQuestName();
----

** *Arguments***

   None

----

** *Returns***

  ; Name(String)
   The name of the quest being abandoned.

----

** *Example***

 local Name = GetAbandonQuestName();

** *Result***

 "Leprechaun Assault"
----

** *Description***

   Returns the name of a quest that is about to be abandoned.  Non-nil in the time between clicking abandon, and before clicking "Yes."  Not tested to see if it retains values at other times.
