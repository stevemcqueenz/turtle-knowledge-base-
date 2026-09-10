---
title: "API SendAddonMessage"
url: "https://turtle-wow.fandom.com/wiki/API_SendAddonMessage"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T07:20:23Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SendAddonMessage

Sends a message to hidden AddOn channels. (**new with patch 1.12**)
 SendAddonMessage("prefix", "text", "PARTY|RAID|GUILD|BATTLEGROUND")

## Parameters
### Arguments
  ; prefix
   String - Message Prefix ( Used to figure out which addon sent the message )
  ; text
   String - Text to send
  ; type
   String - AddOn channel to send to, valid types are "PARTY", "RAID", "GUILD", "BATTLEGROUND"

## Example
 SendAddonMessage( "CTRA", "User Data: XYZ", "RAID" );

## Notes
From [Slouken](Slouken):

- The combined length of message plus prefix can be at most 254 characters.
- The message will be unaffected by inebriation.
- Messages sent to "RAID" when not in a raid will be delivered as if it had been sent as a "PARTY" message.
- Using "RAID" or "PARTY" when not in a party or raid sends no message.

- Calling this function results in the event [CHAT_MSG_ADDON](Events/C#CHAT MSG ADDON) being invoked on *other* client machines in the PARTY, RAID, BATTLEGROUND or GUILD.
- The prefix cannot include a tab character ("\t") as it's used as a delimiter between the prefix and the text when the message is sent from the client.  When the message is recieved by other clients, it's broken back in to two peices in the client and the sent to lua.  Using a tab character in the text may be acceptable, but is unadvised.
- If you want to send messages inbetween your battleground group you will need to use "BATTLEGROUND" instead of "RAID" or "PARTY".
- "Send**Addon**Message" isn't a typo, using "Send**AddOn**Message" will not work.

- it seems that ASCII 10 codes (thats the linefeed, or \n character) in the text get you disconnected (note from [psycoparrot](User:Psycoparrot))
