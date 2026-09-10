---
title: "General Macros"
url: "https://turtle-wow.fandom.com/wiki/General_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:26:34Z"
fetched: "2026-09-10T07:38:51Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# General Macros

## Assist
assist and follow the party leader
 <code>/run AssistUnit("party"..GetPartyLeaderIndex());FollowUnit("party"..GetPartyLeaderIndex())</code>

assist and follow if a party leader is found
 <code>/run for i=1,4 do if UnitIsPartyLeader("party"..i) then AssistUnit("party"..i); FollowUnit("party"..i)end end</code>

Non-leaders Assist Name
 <code>/run if not IsPartyLeader() then AssistByName("Charname") end</code>

Non-leaders Assist Party
 <code>/run if not IsPartyLeader() then TargetUnit("party1target") end</code>

Assist By Name
 <code>/run AssistByName("Charname")</code>

Assist Party
 <code>/run TargetUnit("party1target")</code>

## Current avoidance
 <code>/script DEFAULT_CHAT_FRAME:AddMessage("Need 102.4 combined avoidance. Currently at:"..GetDodgeChance() + GetBlockChance() + GetParryChance() + (GetParryChance() - 7));</code>

## Find Buff Texture
To find "BUFF_TEXTURE" in certain macros use this macro (Target yourself while you have the buff)
 <code>/script function m(s) DEFAULT_CHAT_FRAME:AddMessage(s); end for i=1,16 do s=UnitBuff("target", i); if(s) then m("B "..i..": "..s); end s=UnitDebuff("target", i); if(s) then m("D "..i..": "..s); end end</code>

Print GetShapeshiftFormInfo(1) in say
 <code>/run local t,n,a=GetShapeshiftFormInfo(1)DEFAULT_CHAT_FRAME:AddMessage(t..","..n..","..(a and "active" or ""))</code>

Use the script to get the current Tracking Texture
 <code>/run icon= GetTrackingTexture() DEFAULT_CHAT_FRAME:AddMessage(icon)</code>

## Castsequence
This will cast spells in the specified order separated by comma. You can add more until you reach the 255 character limit. It does not respect global cooldown so if you click it faster than 1,5 seconds you will skip a step. Keep that in mind! The following example will cast the following: 

# Mark of the Wild(Rank 7) 
# Thorns(Rank 6) 
# Rejuvenation(Rank 10) 

 <code>/run s={"Mark of the Wild(Rank 7)","Thorns(Rank 6)","Rejuvenation(Rank 10)"} if q==nil then q=0 end q=q+1 if q>getn(s)then q=1 end CastSpellByName(s[q])</code>

## Sell Item
Sell all poor items, when used at a vendor
 <code>/run for bag = 0,4,1 do for slot = 1, GetContainerNumSlots(bag),1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"ff9d9d9d") then DEFAULT_CHAT_FRAME:AddMessage("Selling "..name);UseContainerItem(bag,slot) end; end; end</code>

## Delete item
Delete all poor quality items from your bags
 <code>/run ClearCursor()local g,i,j,s,a,b=gsub;for i=0,4 do for j=1,GetContainerNumSlots(i)do s=GetContainerItemLink(i,j)if(s)then a,b,s=GetItemInfo(g(g(s,".*\124H",""),"\124h.*",""))if(s==0)then PickupContainerItem(i,j)DeleteCursorItem()end;end;end;end</code>

Mass delete Torch
 <code>/run for i=0,4 do for j=1,GetContainerNumSlots(i) do if GetContainerItemLink(i,j) then if string.find(GetContainerItemLink(i,j),"Torch") then PickupContainerItem(i,j) DeleteCursorItem() end end end end</code>

## Click to Move
turns right click to move function on and off
 <code>/run if GetCVar("autointeract") == "0" then SetCVar("autointeract", "1") else SetCVar("autointeract", "0") end</code>

## Quest
Abandon Quest

use to abandon all the quests in your quest log
 <code>/run for i=1,GetNumQuestLogEntries() do SelectQuestLogEntry(i); SetAbandonQuest(); AbandonQuest(); end</code>

Complete/Accept quests with a keybinding.

Not 100% effective if there are more than 1 quest reward.
 /run AcceptQuest()
 /run CompleteQuest()
 /run i=GetNumQuestChoices() if i<2 then GetQuestReward(1) end
 /run SelectAvailableQuest(1)
 /run SelectGossipAvailableQuest(1)
 /run SelectActiveQuest(1)
 /run SelectGossipActiveQuest(1) 

Turn In Quest Items
 <code>/run SelectGossipAvailableQuest(1); CompleteQuest(); GetQuestReward();</code>
Use: This is usable at almost any quest giver with a blue question mark. It’s especially useful for doing Dark Iron Residue turn ins for Thorium Brotherhood faction. Some of these quest givers offer multiple quests. To have the macro select a quest besides the first one, simply change the number in the parentheses.

## Coordinates
This macro tells you your current coordinates. I keep it around to help mark locations on my map using Cartographer's note system.
 <code>/run SetMapToCurrentZone() local x,y=GetPlayerMapPosition("player") DEFAULT_CHAT_FRAME:AddMessage(format("%s, %s: %.1f, %.1f",GetZoneText(),GetSubZoneText(),x*100,y*100))</code>

## Mount
AQ40 mount combined with normal mount.
 <code>/run if GetZoneText()=="Ahn'Qiraj"then CastSpellByName("Summon Green Qiraji Battle Tank")else CastSpellByName("Riding Turtle")end</code>

Dismount
 <code>/run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Ability_Mount"))then CancelPlayerBuff(g(i))end i=i+1 end</code>

  -Summon random mount**

If you've got your 4 mounts in the first 4 slots of your first bag it would look like this
 <code>/script UseContainerItem(0,math.random(1,4));</code>

Dismount, summon random mount
 /run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Ability_Mount"))then CancelPlayerBuff(g(i))end i=i+1 end
 /run UseContainerItem(0,math.random(1,4));

## Mouseover
This macro uses GetMouseFocus to cast Healing Touch. this macro should work on most raid frames add-ons.
 <code>/run i=(GetMouseFocus().unit) if i then CastSpellByName("Healing Touch") SpellTargetUnit(i) end</code>

Checks to see if your mouse cursor is hovering over an applicable target (party frames and nameplates work also) and casts the spell on said target if so. If your cursor is not hovering over an applicable target, it just casts the spell normally as it would if you weren't using a macro.
 <code>/run local u=UnitExists("mouseover") and "mouseover" or UnitExists("target") and "target" or "player" CastSpellByName("Healing Touch") SpellTargetUnit(u)</code>

Offensive abilities (debuffs, CC, interrupts, DoTs, taunts, etc):
 <code>/run c=CastSpellByName s="SPELLNAME" if UnitExists("mouseover") and UnitReaction("mouseover","player")<5 then TargetUnit("mouseover") c(s) TargetLastTarget() else c(s) end</code>

Friendly abilities (heals, cleanse, Rebirth, etc):
 <code>/run c=CastSpellByName s="SPELLNAME" if UnitExists("mouseover") and UnitReaction("mouseover","player")>4 then TargetUnit("mouseover") c(s) TargetLastTarget() else c(s) end</code>

Both (ex: Paladin's Holy Shock - heals friendlies, hurts enemies):
 <code>/run c=CastSpellByName s="SPELLNAME" if UnitExists("mouseover") then TargetUnit("mouseover") c(s) TargetLastTarget() else c(s) end</code>

Simple mouseover macro
 /run TargetUnit("mouseover")
 /cast spellname
 /run TargetLastTarget()

## Drink / Eat
Uses any Conjured water/food.
Press this quick twice, to eat when you drink
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Conjured"))then UseContainerItem(b,s,1)end end end</code>

## GMTicket
Some UI add-ons may not show the help request button. If so, you can use the script below:
 <code>/script NewGMTicket(1,"text")</code>
The average response to tickets are 24-48 hours, sometimes longer depending on your inquiry and workload. The system message in the ticket UI is arbitrary and does not mean anything, so disregard it.

## Mail
Picks up item and money from first mail in mailbox
 <code>/script GetInboxText(1); TakeInboxItem(1); TakeInboxMoney(1); DeleteInboxItem(1);</code>

## Inspect
 <code>/run if (UnitPlayerControlled("target") and CheckInteractDistance("target", 1) and not UnitIsUnit("player", "target")) then InspectUnit("target")end</code>

## Trainer
Mass learn from trainer
 <code>/script n=GetNumTrainerServices(); i = 1; while n >= i do BuyTrainerService(i); i=i+1; end;</code>

## Ping Location
Used in combo with aoe spells and items to instantly drop them at your location.
 <code>/script Minimap:PingLocation(0,0)</code>

## Racial
Shadowmeld
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Ability_Ambush" then x=1 end i=i+1 end if x==0 then CastSpellByName("Shadowmeld")end</code>

## Rested XP
Show current rested experience
 <code>/run DEFAULT_CHAT_FRAME:AddMessage(format("%d%% rested", 100 * GetXPExhaustion() / UnitXPMax("player")))</code>

Show current rested experience as bubbles
 <code>/run p="player";x=UnitXP(p);m=UnitXPMax(p);r=GetXPExhaustion();if -1==(r or -1)then t="No rest."else t="Rest: "..(math.floor(20*r/m+0.5)).."bubbles ("if r+x<m then t=t..r else t=t.."level +"..(r+x-m)end t=t.."XP)"end;DEFAULT_CHAT_FRAME:AddMessage(t)</code>

## Server time
Local Server time
 /run hour,min=GetGameTime()
 /run DEFAULT_CHAT_FRAME:AddMessage(format("Server time is %s:%s",hour,min));

## Smart buff
Uses BUFF_1 if the main buff is active, or else uses SPELL_2
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Texture_Name" then x=1 end i=i+1 end if x==0 then CastSpellByName("BUFF") else CastSpellByName("SPELL") end</code>
You need to replace "BUFF_TEXTURE" with the TEXTURE of a particular buff and NOT it's name. For example A Rogue's Stealth skill and a Druid's Prowl skill both use the little icon texture called "Ability_Ambush". Use this site to lookup your buff's texture: [Queriable_buff_effects](https://turtle-wow.fandom.com/wiki/Queriable_buff_effects)

## Timer
  -Simple script to track the time elapsed from a set point in time.**

# Clicking the script while holding the Alt key down will begin the timer and state so. E.g. "Timer Set: [Instance Start]".
# Clicking the script without any additional keys thereafter will yield the time elapsed. E.g. "Time Elapsed - [Instance Start]: 00h:01m19s".

If you click the script without holding the Alt key first, you will receive an interface error. If you log off for whatever reason,

your timer will be erased. Change "Say" to whatever channel you want "Party", "Raid", "Guild", etc.
 <code>/run if IsAltKeyDown() then L1="Instance Start"; T1=GetTime(); M=format("Timer Set [%s]",L1); else N=GetTime(); D=N-T1; M=format("Time Elapsed – [%s]: %02dh:%02dm:%02ds",L1, D/3600,mod((D/60),60), mod(D,60)); end; SendChatMessage(M,"SAY");</code>

  -About script variables**
L1 (Label) – Holds the label for the timer. If you have script space, you can copy this script and change L1 to L2, L3 etc. creating multiple timers each with different labels (Core Hound 1, Core Hound 2 etc.)
T1 (Time) – Holds the base time from which time elapsed is computed. For multiple scripts, change T1 to T2, T3 etc.

M (Message) – Temporary variable to hold message formatting.

N (Now) – Temporary variable to hold the current time. Used in computation.

## Bandage
Use any bandage
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Bandage"))then UseContainerItem(b,s)SpellTargetUnit("player")end end end</code>

## Use Juju
Use any Juju on yourself, or friendly target (add full name if you want a specific Juju)
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Juju"))then UseContainerItem(b,s)SpellTargetUnit("player")end end end</code>

## Use Potion
Use any Healthstone/Healing Potion
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Healthstone") or strfind(n,"Healing Potion"))then UseContainerItem(b,s,1)end end end</code>

Use any Mana Potion
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Mana Potion"))then UseContainerItem(b,s)end end end</code>
