---
title: "API DoEmote"
url: "https://turtle-wow.fandom.com/wiki/API_DoEmote"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T07:10:38Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API DoEmote

DoEmote("token", "message");

Executes an emote.
----

** *Arguments***

   ("token", "message")
  ; token
   String - the token that describes which emote is being used.  See [Emotes Tokens](API TYPE Emotes Token)
  ; message
   String - target / additional command for the emote?  It appears that if this is a player name, then the emote is "done" to the player for emotes that support that.

----

** *Returns***

   Nothing.

----

** *Details***

   Executes one of the emotes based on the given token, including vocal emotes.  The list of currently valid emotes is given in ChatFrame.lua, defined as one of the EMOTE*x*_TOKEN constants.  *x* starts at 1 and currently goes up to 170 (as of 1.3.0).  Certain emotes may also trigger character animations and sound effects.

----
