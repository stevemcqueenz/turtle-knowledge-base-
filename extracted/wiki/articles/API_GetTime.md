---
title: "API GetTime"
url: "https://turtle-wow.fandom.com/wiki/API_GetTime"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T05:40:53Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetTime

Returns the system uptime **of your computer** in seconds, with millisecond precision.
 seconds = GetTime();

## Parameters
### Arguments
   *None*

### Returns
  ; seconds
   Floating Point Number - The current system uptime in seconds.

## Example
<syntaxhighlight lang="lua">
seconds = GetTime(); 
print("Current system uptime is: "..seconds.." seconds!"); 

> Current system uptime is: 60123.558 seconds!
</syntaxhighlight>

## Details
   Contrary to what some believe, this does not return your current session time, time since launching the game, or time since the last patch. It returns the **time since your own computer booted up**.

   In Windows, this is gotten through the Windows kernel function [GetTickCount()](http://msdn.microsoft.com/library/en-us/sysinfo/base/gettickcount.asp), divided by 1000.

## Macro
Charge emote with timer<syntaxhighlight lang="lua">
/cast charge 
/run TeM=TeM or GetTime()-5 if (GetTime()-TeM)>5 and DoEmote("charge") then TeM=GetTime() end
</syntaxhighlight>

Windfury then Grace of Air swap with a 10 second cooldown<syntaxhighlight lang="lua">
/run if Ttwist == nil or (GetTime()-Ttwist>10) then Ttwist,wTot=GetTime(),true CastSpellByName("Windfury Totem") elseif wTot and (GetTime()-Ttwist>1.5) then CastSpellByName("Grace of Air Totem"); wTot=false end
</syntaxhighlight>

## Addon
Example from addon named AsmoMOD<syntaxhighlight lang="lua">
			-- Use WoTF if it is active
			if (UnitRace("player") == "Undead" and AsmoMOD_Save.wotfenabled and (not wotflock)) then
				-- Cast Will of the Forsaken
				local duration = GetSpellCooldown(WotfID, 1);
				if(duration == 0) then 
					CastSpell(WotfID, BOOKTYPE_SPELL);
					trinketlock = true;
					resetTimeTrinket = GetTime() + 3;
				end
			end
</syntaxhighlight>
