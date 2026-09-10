---
title: "Party & Raid Macros"
url: "https://turtle-wow.fandom.com/wiki/Party_%26_Raid_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:25:34Z"
fetched: "2026-09-10T07:39:23Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Party & Raid Macros

## AQ40 Mount
AQ40 Mount combined with regular mount
 <code>/run if GetZoneText()=="Ahn'Qiraj"then CastSpellByName("Summon Green Qiraji Battle Tank")else CastSpellByName("Riding Turtle")end</code>

## Drunk toggle
Drunk toggle macro. Useful for the zg spiders
 <code>/run local c,m=GetCVar("ffxGlow"),message if c=="1" then SetCVar("ffxGlow","0")m("Drunk GFX OFF")else SetCVar("ffxGlow","1")m("Drunk GFX ON")end</code>

## Group finder
This is a macro that aims to slightly enhance "/who whispering".

### What is "/who whispering"?
"/who whispering" is where you get a list of players using the /who command and whisper them. I've always found this method to be the quickest and easiest way to build a group, especially when you're looking for specific roles; notably tanks and healers.

### Setup
Create the "set message & reset" macro edit the message between the " ":
 <code>/run lfm_msg= "LF3M RFC: Lv.14+ Tank, Heal, RDPS";lfm_i=1;message(lfm_msg);</code>

### Create the "send message" macro:
 <code>/run if(lfm_i<=GetNumWhoResults()) then lfm_target=GetWhoInfo(lfm_i);SendChatMessage(lfm_msg,"WHISPER",nil,lfm_target);lfm_i=lfm_i+1;else message("Finished who list.");end;</code>

### Usage
1. Use /who to get a list of players to recruit (ex. /who 18 c-"warrior")

2. Run the "set message & reset" macro once

3. Run the "send message" macro repeatedly to whisper each player in the /who list

- A message will appear when you've finished the list

4. When you finish the list, repeat steps 1-3 with a new list of different players

- * Important * If the /who list contains previously whispered names, it will re-whisper them
- New /who list example: /who 16 c-"warrior"
- Step 2 must be repeated to reset the macro's list position

## Heal Nearest Friend
Will heal anyone in range who is low on hp (Set to react on < 90%).
 <code>/script for i=1,40 do TargetNearestFriend(); if UnitHealth("target")/UnitHealthMax("target") < 0.9 then if UnitIsPlayer("target") then CastSpellByName("EnterYourHealspellHere"); end end end; TargetLastEnemy()﻿;</code>

## Loot
Rolls the raidmembers and announce to the chat "Loot goes to X in grp Y !"
 <code>/run local w = math.random(1,GetNumRaidMembers()) local n, _, g = GetRaidRosterInfo(w) SendChatMessage(format("Loot goes to %s in group %d", n, g),"RAID")</code>

Set to common loot (white)
 <code>/script SetLootMethod("group", 0)</code>

## Raid Buffs
This one is for Chromaggus in Blackwing Lair. After this boss there's usually a delay of trading Hourglass sand to get rid of the Brood Affliction: Bronze debuff. This macro will list all players in chat who has it.
 <code>/run b="n_Bronze" n="" r="raid" for i=1,GetNumRaidMembers()do for j=1,40 do if(strfind(tostring(UnitDebuff(r..i,j)),b))then n=UnitName(r..i)..", "..n break end end end if n==""then else SendChatMessage("Players with bronze debuff: "..n,"SAY",nil)end</code>

The following is similar to above but will whisper to each player instead. Depending on server spam protection, this might not work.
 <code>/run b="n_Bronze" r="raid"for i=1,GetNumRaidMembers()do for j=1,40 do if(strfind(tostring(UnitDebuff(r..i,j)),b))then SendChatMessage("You've got Bronze debuff from Chromaggus use a Hourglass Sand.","WHISPER",nil,UnitName(r..i))break end end end</code>

This checks for players who have NOT popped Fire Protection Potions and list them in chat
 <code>/run n=""r="raid"function b(k,l)for i=1,32 do if strfind(tostring(UnitBuff(r..l,i)),k)then return 1 end end end for l=1,GetNumRaidMembers() do if not b("e_FireA",l)then n=UnitName(r..l)..","..n end end SendChatMessage("Pop Fire pot:"..n,"SAY",nil)</code>

Whisper each player lacking Fire Protection Potion instead
 <code>/run n=""r="raid"function b(k,l)for i=1,32 do if strfind(tostring(UnitBuff(r..l,i)),k)then return 1 end end end for l=1,GetNumRaidMembers() do if not b("e_FireA",l)then SendChatMessage("Pop Fire prot potion!","WHISPER",nil,UnitName(r..l)) end end</code>

List players lacking Nature Protection Potion
 <code>/run n=""r="raid"function b(k,l)for i=1,32 do if strfind(tostring(UnitBuff(r..l,i)),k)then return 1 end end end for l=1,GetNumRaidMembers() do if not b("e_SpiritA",l)then n=UnitName(r..l)..","..n end end SendChatMessage("Pop Nature pot:"..n,"SAY",nil)</code>

Whisper each player lacking Nature Protection Potion
 <code>/run n=""r="raid"function b(k,l)for i=1,32 do if strfind(tostring(UnitBuff(r..l,i)),k)then return 1 end end end for l=1,GetNumRaidMembers() do if not b("e_SpiritA",l)then SendChatMessage("Pop Nature prot potion!","WHISPER",nil,UnitName(r..l)) end end</code>

List players lacking Shadow Protection Potion
 <code>/run n=""r="raid"function b(k,l)for i=1,32 do if strfind(tostring(UnitBuff(r..l,i)),k)then return 1 end end end for l=1,GetNumRaidMembers() do if not b("w_RagingSc",l)then n=UnitName(r..l)..","..n end end SendChatMessage("Pop Shadow pot:"..n,"SAY",nil)</code>

Whisper each player lacking Shadow Protection Potion
 <code>/run n=""r="raid"function b(k,l)for i=1,32 do if strfind(tostring(UnitBuff(r..l,i)),k)then return 1 end end end for l=1,GetNumRaidMembers() do if not b("w_RagingSc",l)then SendChatMessage("Pop Shadow prot potion!","WHISPER",nil,UnitName(r..l)) end end</code>

## Raid marks
Skull
 <code>/run SetRaidTarget("target", 8)</code>

Cross
 <code>/run SetRaidTarget("target", 7)</code>

Square
 <code>/run SetRaidTarget("target", 6)</code>

Moon
 <code>/run SetRaidTarget("target", 5)</code>

Triangle
 <code>/run SetRaidTarget("target", 4)</code>

Purple
 <code>/run SetRaidTarget("target", 3)</code>

Circle
 <code>/run SetRaidTarget("target", 2)</code>

Star
 <code>/run SetRaidTarget("target", 1)</code>

Remove mark
 <code>/run SetRaidTarget("target", 0)</code>

Target raid marked enemy. Underlined characters: 13 represents the number of mobs to cycle through. Increase it to suit your needs. X represents the number of the raid target index. (8 is skull etc)
 <code>/run for i=1,13 do TargetNearestEnemy();if GetRaidTargetIndex("target")==X then do return;end;end;end;</code>

This one is for skull. Change the 8 to something else for different marks.
 <code>/run for i=1,18 do if GetRaidTargetIndex('target') == 8 then break end; TargetNearestEnemy(); end</code>

## Raid
Swap 2 players in raid
 <code>/run local n1,n2,s1,s2="Nicky","Shagu"; for i=1,40 do if UnitName("raid"..i) == n1 then s1 = i elseif UnitName("raid"..i) == n2 then s2 = i end; end; if s1 and s2 then SwapRaidSubgroup(s1, s2) end</code>

Go through the whole raid list and demote and kick every player character that is offline.
 <code>/run for i=1,GetNumRaidMembers() do u="raid"..i n=UnitName(u)if not UnitIsConnected(u) then DemoteAssistant(n)UninviteByName(n)end end</code>

Similar to above but will promote every player character.
 <code>/run for i=1,GetNumRaidMembers() do u="raid"..i n=UnitName(u)if UnitIsConnected(u) then PromoteToAssistant(n)end end</code>

Combine both above and promote everyone online but demote and kick everyone that is offline.
 <code>/run for i=1,GetNumRaidMembers() do u="raid"..i n=UnitName(u)if UnitIsConnected(u) then PromoteToAssistant(n) else DemoteAssistant(n)UninviteByName(n)end end</code>

## Reset Instance
This one will reset the instances 
 <code>/script ResetInstances()</code>

Log out of the dungeon, have it reset and get ported back to the entrence
 <code>/script ResetInstances()
 /camp</code>
