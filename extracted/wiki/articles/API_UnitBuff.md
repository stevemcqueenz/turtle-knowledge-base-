---
title: "API UnitBuff"
url: "https://turtle-wow.fandom.com/wiki/API_UnitBuff"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T19:32:34Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitBuff

Retrieve info about a certain buff on a certain unit.
 buffTexture, buffApplications, buffID = UnitBuff(unit, buffIndex, showCastable);
----

## *Arguments*
**unit** 
  String - The unit ID you want buff information for - "player", "target", "pet" etc

**buffIndex**
   Number - The index num of the buff to retrieve info on. Starts at 1 and goes up to (and possibly beyond) a certain number. The maximum numbers used by turtle code are 32 for party/pet and 8(?) for target buffs.

**showCastable**
  Boolean - *(optional)* - Can be 0, 1, or nil. If present and 1, then only buffs will be returned which are castable by the player. Index is still starting with 1 and counting up.

## *Returns*
**buffTexture**
  String - The identifier of (path and filename to) the indicated buff, or nil if no buff

**buffApplications**
  String - The number of times the buff has been applied to the target.

**buffID**
  Number - the unique identifier for the buff.
  As IDs are unique, they are more reliable than texture matching.

## *Example*
Retrieve the buff texture of the pets buff with the index of "i".
 buff = UnitBuff("pet", i);

## Macros
Use BUFF if the main buff is not active, or else use SPELL<syntaxhighlight lang="lua">
/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Texture_Name" then x=1 end i=i+1 end if x==0 then CastSpellByName("BUFF") else CastSpellByName("SPELL") end
</syntaxhighlight>You need to replace "BUFF_TEXTURE" with the TEXTURE of a particular buff and NOT it's name. For example A Rogue's Stealth skill and a Druid's Prowl skill both use the little icon texture called "Ability_Ambush". Use this site to lookup your buff's texture: [Queryable buff effects](Queryable buff effects)

Print the texture names of any buffs and debuffs on the target<syntaxhighlight lang="lua">
/run function m(s) DEFAULT_CHAT_FRAME:AddMessage(s); end for i=1,16 do s=UnitBuff("target", i); if(s) then m("B "..i..": "..s); end s=UnitDebuff("target", i); if(s) then m("D "..i..": "..s); end end
</syntaxhighlight>

Print the index, texture name, number of applications/stacks and ID of all buffs on the player<syntaxhighlight lang="lua">
/run for i=1,32 do local texture,stacks,buffID = UnitBuff("player",i);if not buffID then break end;print(i,texture,stacks,buffID)end
</syntaxhighlight>

## Addon
Example from addon named Clique<syntaxhighlight lang="lua">
	-- Check buffs
	for i=1,32 do
		if not UnitBuff(unit, i) then return nil end

		self.tooltip:ClearLines()		
		self.tooltip:SetUnitBuff(unit, i)
		if string.find(self.tooltip.name:GetText(), spell) then
			return i
		end
	end
</syntaxhighlight>
