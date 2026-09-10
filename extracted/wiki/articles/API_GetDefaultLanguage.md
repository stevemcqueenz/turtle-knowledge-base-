---
title: "API GetDefaultLanguage"
url: "https://turtle-wow.fandom.com/wiki/API_GetDefaultLanguage"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T07:13:56Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetDefaultLanguage

Returns the Language used by the indicated Player.
 GetDefaultLanguage("player");
----

  - *Arguments***

   String "player" : I haven't tested this thoroughly yet, but it seems that you can use the same constants that are used in the UnitName() function.  Giving it "player" will return your own default language, for example.

----

  - *Returns***

   String language : the default language of the indicated object.

----

  - *Example***

 if( GetDefaultLanguage("player") ~= arg3) then ChatFrame:AddMessage(arg2 .. " is not speaking your language!"); end
(Remember, arg2 is the author and arg3 is the language in a standard "MSG" event.)

  - *Result***

If the player doesn't speak the same language as the person who spoke the message, you get:
 (author) is not speaking your language!
----

  - *Description***

Returns the Language used by the indicated Player.

----
