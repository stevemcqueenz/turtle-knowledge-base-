---
title: "Chat Macros"
url: "https://turtle-wow.fandom.com/wiki/Chat_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:27:17Z"
fetched: "2026-09-10T07:38:31Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Chat Macros

## Chat messages
Print a string of your current target to chat log
 <code>/run DEFAULT_CHAT_FRAME:AddMessage("Hello world! my target name is "..GetUnitName("target"))</code>

Send chat message
 <code>/run local s,m,c,=SendChatMessage,"<My Message Here>";if UnitInRaid("player")then c="RAID" elseif UnitExists("party1")then c="PARTY" end;s(m,c)</code>

## whisper
If your current target is a player then send a chat whisper to him/her
 <code>/run if UnitExists("target") then SendChatMessage("This is a test but insert whatever you are casting here","WHISPER",nil,UnitName("target")) end</code>

Whisper hi! to target (doesn't whisper yourself)
 <code>/run if not UnitIsUnit("player","target") then SendChatMessage("hi!","WHISPER",nil,UnitName("target"))end</code>

## Current location
Send your current location into PARTY chat:
 <code>/run local x,y=GetPlayerMapPosition("player") SendChatMessage("I'm at "..GetZoneText().." - "..GetMinimapZoneText().." - "..math.floor((x*100)+0,5).." "..math.floor((y*100)+0,5),"PARTY")</code>

Send your current location into into BATTLEGROUND chat:
 <code>/run local x,y=GetPlayerMapPosition("player") SendChatMessage("I'm at "..GetZoneText().." - "..GetMinimapZoneText().." - "..math.floor((x*100)+0,5).." "..math.floor((y*100)+0,5),"BATTLEGROUND")</code>

## Guild Recruitment
 <code>/run n=GetNumWhoResults(); i=1; while(i<n+1) do c,g=GetWhoInfo(i); if(g=="") then SendChatMessage("Hello "..c.."! <GUILDNAME> is now recruiting!Awsome guild!, join now!","WHISPER","COMMON",c); GuildInvite(c); end; i=i+1; end;</code>

## Quest Objectives
Say Quest Objectives
 <code>/run i = GetNumQuestLeaderBoards(); for j = 1, i, 1 do a1, a2, a3 = GetQuestLogLeaderBoard(j); SendChatMessage(a1, "PARTY"); end;</code>
Use: Sends your current quest objectives to your party. This way, you don’t have to constantly type to party members how many of each creature you need to complete a quest.

## Racial language
Automatically swap racial language to Taur-ahe (tauren language).
 <code>/run ChatFrameEditBox.language = (ChatFrameEditBox.language == GetLanguageByIndex(1) and GetLanguageByIndex(2) or GetLanguageByIndex(1)) ChatFrame1:AddMessage(" "..ChatFrameEditBox.language)</code>

## Random Emote
Randomly use a set of emotes
 <code>/run local a={"roar","charge","attacktarget","gloat"} DoEmote(a[random(table.getn(a))])</code>

## Roll Brackets
Prints roll brackets for each guild in the raid. Used by the world boss coalition.
 <code>/run local t={},n,g,r;for i=1,40 do n=GetRaidRosterInfo(i);if n then TargetByName(n);g=tostring(GetGuildInfo("target"));t[g]=t[g] and t[g]+1 or 1;end;end;r=1;for k,v in pairs(t) do SendChatMessage(string.format("%s: %d-%d",k,r,r+v-1),"RAID");r=r+v;end;</code>

## Who Zone
Alliance in the zone
 <code>/run R,Z=" r-human r-dwarf r-gnome r-elf",GetRealZoneText() O=Z .. R; SendWho(O);</code>

Horde in the zone
 <code>/run R,Z=" r-orc r-troll r-tauren r-undead",GetRealZoneText() O=Z .. R; SendWho(O);</code>
