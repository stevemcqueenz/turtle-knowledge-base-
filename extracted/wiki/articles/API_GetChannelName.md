---
title: "API GetChannelName"
url: "https://turtle-wow.fandom.com/wiki/API_GetChannelName"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T07:43:58Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetChannelName

Retrieves the id and the name from a specific channel.
 id, name = GetChannelName(id);
----

  - *Arguments***

  ; id
   The numeric id of the channel you want to query, or a string containing the name of the channel.

----

  - *Returns***

  ; id
   a number containing the id of the channel, e.g. 2, or 0 if the channel is not found
  ; name
   a string containing the name of the channel, e.g. "Trade - Stormwind", or nil if the channel is not found or the id parameter was a name.

----

  - *Important***

If the channel argument is the channel name (ie "testchan1"), then the returned channel name is a nil value. If the channel argument is the channel number (ie 6 or "6"), then the returned channel name is correct. The channel id returns correctly in both cases.
----

  - *Example***
<syntaxhighlight lang="lua">
-- Check if the specific channel exists
myChannel = 1;
id, name = GetChannelName(myChannel);
if (id > 0 and name ~= nil) then
  SendChatMessage("This is just a test.", "CHANNEL", nil, id);
end
</syntaxhighlight>
  - *Result***

Checks if the channel with id stored in myChannel exists and in this case sends the text "This is just a test" to it.
----

  - *Description***

   Retrieves the name from a specific channel.

----
