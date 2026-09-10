---
title: "API GetRaidRosterInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetRaidRosterInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T12:57:09Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetRaidRosterInfo

Gets information about a raid member.
 name, rank, subgroup, level, class, fileName, zone, online, isDead = GetRaidRosterInfo(raidIndex);

## Parameters
### Arguments
  ; [raidIndex](raidIndex)
   Number - Index of raid member between 1 and (up to) 40. If you specify an index that is out of bounds, the function returns [nil](nil).

### Returns
   name, rank, subgroup, level, class, fileName, zone, online, isDead

  ; name
   String - the name of the player

  ; rank
   Integer - The character's current rank in the raid.  0 is a standard raid member.  1 is a raid Assistant - labeled (A) in the standard raid window.  2 is the Leader of the raid - labeled (L) in the standard raid window.
   **Possible values:**  0, 1, 2

  ; subgroup
   Integer - The raid party this character is currently a member of.  Raid subgroups are numbered as on the standard raid window.
   **Possible values:**  1, 2, 3, 4, 5, 6, 7, 8

  ; level
   Number - The level of the character.  If this character is offline, the level will show as 0 (not nil).
   **Possible values:**  0, any valid character level

  ; class
   String - The character's class (localized), with the first letter capitalized (e.g. "Priest"). This function works as normal for offline characters.
   **Possible values:**  Any valid character class, localized

  ; fileName
   String - The system representation of the character's class; always in english, always fully capitalized.
   **Possible values:**  "PRIEST, "WARRIOR", "WARLOCK", etc...

  ; zone
   String - The name of the zone this character is currently in.  This is the same value you see if you mouseover their portrait (if in group).  If the character is offline, this value will be the string "Offline".
   **BUG** (as of 2/26/2005):  It seems that the person calling this function will have their Zone value returned as nil if they have not changed locations since last reloading their UI.  Once you change locations (get the name to popup on screen), it seems to return as normal.  This only seems to affect when you look at the zone value of yourself from the raid. *Could a call to [SetMapToCurrentZone](API SetMapToCurrentZone)() cure this? --[Mikk](https://wowpedia.fandom.com/wiki/User:Mikk) 10:30, 13 August 2006 (EDT)*
   **Possible values:**  nil, "Offline", any valid location

  ; online
   [Boolean](API Type Boolean) - The player's current online status
   **Possible values:**  1, nil

  ; isDead
   [Boolean](API Type Boolean) - Returns if raid member is dead or not
   Note: this does not show hunters as being dead when they have Feign Death.)

## Details
   Regarding the correspondence of raid indices to players:  Let C be the list of players in a raid ordered by their raid index.  It appears that after any series of changes is made to the raid, at the end all players from C still in the raid will retain their original ordering (even if they left and rejoined the raid), with new members existing at any index 1<i<=40.

## Macro
Rolls the raidmembers and announce to the chat "Loot goes to X in grp Y !"<syntaxhighlight lang="lua">
/run local w = math.random(1,GetNumRaidMembers()) local n, _, g = GetRaidRosterInfo(w) SendChatMessage(format("Loot goes to %s in group %d", n, g),"RAID")
</syntaxhighlight>Prints roll brackets for each guild in the raid. Used by the world boss coalition.<syntaxhighlight lang="lua">/run local t={},n,g,r;for i=1,40 do n=GetRaidRosterInfo(i);if n then TargetByName(n);g=tostring(GetGuildInfo("target"));t[g]=t[g] and t[g]+1 or 1;end;end;r=1;for k,v in pairs(t) do SendChatMessage(string.format("%s: %d-%d",k,r,r+v-1),"RAID");r=r+v;end;</syntaxhighlight>

## Addon
Example from addon named oRA2<syntaxhighlight lang="lua">
function oRALReady:PerformReadyCheck()
	if not self:IsPromoted() then return end
	self.ready = {}
	for i = 1, GetNumRaidMembers(), 1 do
		local name, rank, subgroup, level, class, fileName, zone, online, isDead = GetRaidRosterInfo(i)
		if online then self.ready[name] = "no reply" end		
	end
</syntaxhighlight>
