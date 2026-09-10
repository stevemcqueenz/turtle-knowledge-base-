---
title: "API Type ChatTypeId"
url: "https://turtle-wow.fandom.com/wiki/API_Type_ChatTypeId"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-19T15:54:36Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# API Type ChatTypeId

<nowiki>These are the chat types used by SendChatMessage("msg"{,"type"{,"lang"{,"channel"}}}).</nowiki>

## Values
  - <code>"SAY"</code> Speech to nearby players (/say).**
  - <code>"EMOTE"</code> Text emote to nearby players (/em) (Use DoEmote("action") for voice emotes)**
  - <code>"YELL"</code> Yell to not so nearby players (/yell).**
  - <code>"PARTY"</code> Message to party members (/p)**
  - <code>"GUILD"</code> Message to guild members (/g)**
  - <code>"OFFICER"</code> Message to guild officers (/o)**
  - <code>"RAID"</code> Message to raid members (/raid)**
  - <code>"RAID_WARNING"</code> Warning to raid members (/rw)**
  - <code>"BATTLEGROUND"</code> Message to battleground raid group (/bg)**
  - <code>"WHISPER"</code> Message to a specific other player (/whisper) - Player name provided as channel.**
  - <code>"CHANNEL"</code> Message to a specific chat channel (/1,/2,...) - Channel number provided as channel**
  - <code>"AFK"</code> Not a real channel; sets your AFK message to the message you send. Send an empty message to clear AFK status.**
  - <code>"DND"</code> Not a real channel; sets your DND message to the message you send. Send an empty message to clear DND status.**
