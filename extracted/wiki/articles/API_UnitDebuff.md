---
title: "API UnitDebuff"
url: "https://turtle-wow.fandom.com/wiki/API_UnitDebuff"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T19:30:16Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitDebuff

Retrieve info about a certain debuff on a certain unit.
 debuffTexture, debuffApplications, debuffDispelType, debuffID = UnitDebuff( unitID, debuffIndex [, showDispellable] );

## Arguments
**unitID**
  String - The unit ID you want debuff information for - "player", "target", "pet" etc

**debuffIndex**
  Number - The index of the debuff to retrieve info for. Starts at 1. The maximum index is 16 for party/pet/target debuffs.

**showDispellable**
  Boolean - *(optional)* - Can be 0, 1, or nil. If present and 1, then only debuffs will be returned which are dispellable by the player. Index is still starting with 1 and counting up.

## Returns
**debuffTexture**
  String - The identifier of (path and filename to) the indicated debuff, or nil if no debuff

**debuffApplications**
  Number - The number of times the debuff has been applied to the target.  Returns 0 for any debuff which doesn't stack.

**debuffDispelType**
  String - The debuff dispel type. Can be "Magic", "Curse", "Poison", "Disease" or nil if not dispellable. These strings are constant across localizations.

**debuffID**
  Number - the unique identifier for the debuff. 
  As IDs are unique, they are more reliable than texture matching.

## Example
Retrieve the debuff texture of the player's pet's debuff with the index i.
 debuff = UnitDebuff("pet", i);

## Macros
This macro will apply debuffs when needed. There are some drawbacks to this as it can’t distinguish between your own debuffs and fellow warlocks. Still, its quite useful for grinding or when you’re the lone warlock in group. Another limitation is the length of the macro. In order to fit the 255 character limit the debuff names have to be shortened, this could cause conflicts in case a debuff with a similar name is already applied.

Curse of Agony = Spell_Shadow_CurseOfSargeras

Corruption = Spell_Shadow_AbominationExplosion

Siphon Life = Spell_Shadow_Requiem<syntaxhighlight lang="lua">
/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("ionExp")then c("Corruption(Rank 6)")elseif not b("eOfSar")then c("Curse of Agony(Rank 6)")else c("Siphon Life(Rank 4)")end
</syntaxhighlight>

Prints the texture names of any buffs and debuffs on the target<syntaxhighlight lang="lua">
/run function m(s) DEFAULT_CHAT_FRAME:AddMessage(s); end for i=1,16 do s=UnitBuff("target", i); if(s) then m("B "..i..": "..s); end s=UnitDebuff("target", i); if(s) then m("D "..i..": "..s); end end
</syntaxhighlight>

Prints the index, texture name, number of applications/stacks, dispel type and ID of all debuffs on the player<syntaxhighlight lang="lua">
/run for i=1,16 do local debuffTexture, debuffApplications, debuffDispelType, debuffID = UnitDebuff("player",i);if not debuffID then break end;print(i,debuffTexture, debuffApplications, debuffDispelType, debuffID)end
</syntaxhighlight>

## Addon
Example from addon named Clique<syntaxhighlight lang="lua">
	-- Check debuffs
	for i=1,32 do
		if not UnitDebuff(unit, i) then return nil end

		self.tooltip:ClearLines()		
		self.tooltip:SetUnitDebuff(unit, i)
		if string.find(self.tooltip.name:GetText(), spell) then
			return i
		end
	end
	return false
end	
</syntaxhighlight>
