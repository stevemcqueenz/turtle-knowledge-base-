---
title: "PvP Macros"
url: "https://turtle-wow.fandom.com/wiki/PvP_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-06-29T15:07:15Z"
fetched: "2026-09-10T07:39:25Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# PvP Macros

## Healing Potion
Uses any Healing Potion
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Healing Potion"))then UseContainerItem(b,s)end end end</code>

## Bandage
Uses any bandage without losing target
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Bandage"))then UseContainerItem(b,s)SpellTargetUnit("player")end end end</code>

## Battlefield Minimap
Show the Battlefield Minimap outside of BGs
 <code>/run if(not BattlefieldMinimap)then BattlefieldMinimap_LoadUI()BattlefieldMinimap:Show()else BattlefieldMinimap:Show()end;SHOW_BATTLEFIELD_MINIMAP="1";</code>

If you want to make it bigger append this at the end of the macro. 1.5 = 50% bigger, adjust as needed. All should be one line.
 <code>BattlefieldMinimap:SetScale(1.5);</code>

## Calculate RP
Calculate RP
 <code>/run P=(math.floor(GetPVPRankProgress(target)*10000))/100 W=UnitPVPRank("player") N=(W-6)*5000+5000*P/100 Q=(W-5)*5000-N*0.8 SendChatMessage("Rank Progress: "..P.."% ".."Current RP: "..N.." RP to next rank "..Q.."")</code>

Emote Calculated RP
 <code>/run P=(math.floor(GetPVPRankProgress(target)*10000))/100 W=UnitPVPRank("player") N=(W-6)*5000+5000*P/100 Q=(W-5)*5000-N*0.8 SendChatMessage("Rank Progress: "..P.."% ".."Current RP: "..N.." RP to next rank "..Q.."","emote")</code>

## Drop WSG flag
 <code>/run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "INV_BannerPVP_01"))then CancelPlayerBuff(g(i))end i=i+1 end</code>

## Announce to Grab the Flag
If the target HP is below 20 % remind the people to Grab the flag, and not only kill it!
 <code>/run if (UnitHealth('target')/UnitHealthMax('target')<0.20) then SendChatMessage("target has under 20 % Health, BE READY TO GRAB FLAG","PARTY"); end</code>

## Grenade
Stop casting, then use any Grenade
 <code>/run SpellStopCasting() for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Grenade"))then UseContainerItem(b,s)end end end</code>

Stop casting, then use any Grenade/Bomb/Dynamite
 <code>/run SpellStopCasting() for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Bomb" or "Dynamite" or "Grenade"))then UseContainerItem(b,s)end end end</code>

## Healthstone
Use any Healthstone/Healing Potion
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Healthstone") or strfind(n,"Healing Potion"))then UseContainerItem(b,s,1)end end end</code>

## Chat Message
Assault that target
 <code>/script SendChatMessage("Assault that level " .. UnitLevel("target") .. " " ..UnitName("target") , "say")
 /point</code>

Random say
 <code>/script s={"Die!","Take that!","Smack!","etc"}; SendChatMessage(s[math.random(getn(s))], "SAY")</code>

Attack notification
 <code>/run z="target" x,y=GetPlayerMapPosition("player");SendChatMessage(string.format("%s found at %s! Name:%s Level: %s Type:%s (%d, %d)",UnitClassification(z),GetMinimapZoneText(),UnitName(z),UnitLevel(z),UnitClass(z),1+x*100,1+y*100),"CHANNEL",nil,3);</code> 

Target's name, race and class
 <code>/run local c, r, n = UnitClass("target"), UnitRace("target"), UnitName("target"); SendChatMessage('Focus ['.. n .. ']! ' .. r .. ' ' .. c .. ' !',"YELL","ORCISH");</code>

## Skull of Impending Doom
Use the offhand or cancel the buff
 </run UseInventoryItem(17);
 /run SpellStopCasting()
 /run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Spell_Magic_PolymorphChicken"))then CancelPlayerBuff(g(i))end i=i+1 end</code>

## Honor Stats
Current % of rank in chat<syntaxhighlight lang="lua">
/script fG, fN = UnitFactionGroup("player");rankName, rankNumber = GetPVPRankInfo(UnitPVPRank("player")); SendChatMessage(string.format("I am currently at %d%% of rank %s with %s.", GetPVPRankProgress()*100, rankNumber, fG), "SAY");
</syntaxhighlight>

## Arathi Basin
This will let you request help anywhere in the Arathi Basin game and it will say "Need Help at Blacksmith". <syntaxhighlight lang="lua">/script x,y=GetPlayerMapPosition("player"); SendChatMessage(string.format("Need help at %s! (%d, %d)",GetMinimapZoneText(),1+x*100,1+y*100),"BATTLEGROUND");</syntaxhighlight>This will let you notify your allies when the area is secured!<syntaxhighlight lang="lua">
/script x,y=GetPlayerMapPosition("player"); SendChatMessage(string.format("%s is under control!",GetMinimapZoneText(),1+x*100,1+y*100),"BATTLEGROUND");
</syntaxhighlight>
