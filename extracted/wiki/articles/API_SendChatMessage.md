---
title: "API SendChatMessage"
url: "https://turtle-wow.fandom.com/wiki/API_SendChatMessage"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-07T17:12:18Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SendChatMessage

Sends a chat message.
<syntaxhighlight lang="lua">
 SendChatMessage("msg",[ "chatType",[ "language",[ "channel"]]]);
</syntaxhighlight></blockquote>
## Parameters
### Arguments
   (msg, chatType, language, channel)

  ; msg
   String, The message to be sent, maximum length of 255 characters.

  ; chatType
   String - (Optional) The type of chat message to be sent, "SAY", "PARTY", etc. See the list of [chatTypeIds](API Type ChatTypeId).
   If chatType is **nil** or omitted then "SAY" will be used.

  ; language
   String - (Optional) The language used to translate the message.
   **Languages**: "COMMON", "DARNASSIAN", "DWARVISH", "TAURAHE", "ORCISH", "GUTTERSPEAK", "DEMONIC", "DRACONIC", "KALIMAG", "TITAN", "GNOMISH"
   If language is **nil** or omitted the default language will be used: "ORCISH" for the Horde, and "COMMON" for the Alliance, as returned by [GetDefaultLanguage](API GetDefaultLanguage)("player").

  ; channel
   String - The channel or player receiving the message for "CHANNEL"/"WHISPER" communication. If sending to a channel you must use the number (eg. "1"); obtain it using [GetChannelName](API GetChannelName)("channelName"). This field is required for the "CHANNEL"/"WHISPER" chat types and ignored for any other chat type.

### Returns
  ; nil

## Example
<syntaxhighlight lang="lua">
 SendChatMessage("Hello Bob!", "WHISPER", "Common", "Bob");
</syntaxhighlight></blockquote>
### Result
   To [Bob]: Hello Bob!

## Example
<syntaxhighlight lang="lua">
 local s = "Hello World"
 local index = GetChannelName("General") -- It finds General is a channel at index 1
 if (index~=nil) then 
   SendChatMessage(s , "CHANNEL", nil, index); 
 end
</syntaxhighlight></blockquote>
### Result
   [1. General - *Current Zone Name*][Bob]: Hello World

## Details
   Sends a chat message of the specified in 'msg' (ex. "Hey!"), to the system specified in 'system' ("SAY", "WHISPER", "EMOTE", "CHANNEL", "PARTY", "GUILD", "OFFICER", "YELL", "RAID", "RAID_WARNING", "AFK", "DND"), in the language specified in 'language' ("COMMON", "DARNASSIAN", "DWARVISH", "TAURAHE", "ORCISH", "GUTTERSPEAK", "DEMONIC", "DRACONIC", "KALIMAG", "TITAN", "GNOMISH"), to the player or channel specified in 'channel'(ex. "1", "Bob").

  - *Notes***

   "AFK" and "DND" set your AFK or DND auto-reply. To cancel afk/dnd status, send another message to the same 'channel'.

   It should be noted that you must provide a 'language' (be it nil or an actual language name) before the 'channel' when sending to the "WHISPER" or "CHANNEL" system.

   To send a whisper to the player's selected target, use [UnitName](API UnitName)("target") as the Channel.

   Patch 1.11 added the "RAID_WARNING" system, only useable by the raid leader and raid assistants. The default UI shows messages send via "RAID_WARNING" in big letters on the center of the screen.

   Some channels may have restrictions on who may speak in them. For example, in order to speak in the 'World Defense' channel, you must have a PvP rank of 11 or higher.

<blockquote><syntaxhighlight lang="lua">
   It could be a bug, but when you run this API command you can send Whispers using any language (including those from other factions).  The end listener hears it in their own language, and thus understands it, however on your screen the message is in untranslated Orcish, Dwarvish or whatever you like.
  This is not a bug, no matter what language you send a tell in, it always comes out in the end listeners default language.

   This also works in CHANNEL, PARTY, GUILD, and RAID. But not in say or yell.
   You can speak in other languages, but they will not be able to read it unless they know that language, blizzard removed this from Yell and Say when people were using this to talk to eachother.
</syntaxhighlight></blockquote>

## Translator macro
With the scripting system it is possible to speak other languages than your own in certain channels by using the SendChatMessage() function. This macro makes this a little bit easier because you don't have to type the function name and don't have to care as much about syntax.
The macro:<syntaxhighlight lang="lua">
 /script SlashCmdList["LANG"]=lang;SLASH_LANG1="/lang";function lang(msg) _,l,c,la = string.find (msg, "(%w+) (%w+)");SendChatMessage(string.sub(msg,l+2), string.upper(c),la) end
</syntaxhighlight>You will have to use this macro once (or, for some reason, sometimes twice before it works) every time you login. After that you can speak other languages like this:<syntaxhighlight lang="lua">
/lang guild dwarvish I like cookies
</syntaxhighlight>This will look like "I like cookies" to all the dwarves in the guild, and it will look like Dwarvish gibberish to everyone else, including you if you're not a dwarf.<syntaxhighlight lang="lua">
/lang party taurahe Undead are like the ants of the horde, why they so small?
</syntaxhighlight>This will look like "Undead are like the ants of the horde, why they so small?" to all the tauren in the party, and it will look like Taurahe gibberish to everyone else, including you if you're not a tauren.<syntaxhighlight lang="lua">
/lang raid gutterspeak I like corpses
</syntaxhighlight> 

This will look like "I like corpses" to all the undead in the raid, and it will look like Gutterspeak gibberish to everyone else, including you if you're not a undead.

This only work in guild, party and raid chat, so not say, whispers, general channels etc.

Some languages to play around with: Common, Darnassian, Dwarvish, Taurahe, Orcish, Gutterspeak, Demonic, Draconic, Titan, Gnomish, and there should be a few I forgot.
