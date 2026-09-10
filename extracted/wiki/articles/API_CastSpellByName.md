---
title: "API CastSpellByName"
url: "https://turtle-wow.fandom.com/wiki/API_CastSpellByName"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T05:57:36Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CastSpellByName

** *Arguments***

   ( name{, onSelf})
  ; name
   String - Spell Name(as seen when mouse-over).
  ; onSelf
   Value - Any value or nil.

----

** *Returns***
  ; nil

----

** *Example***
   ( syntax )
  ; CastSpellByName("spellname(Rank X)")
  ; CastSpellByName("spellname")
  ; CastSpellByName("spellname", onSelf )

 CastSpellByName('Life Tap(Rank 2)')
----

** *Result***

   Casts Life Tap (This example is warlock specific). When the (Rank X) string is omitted, the *highest rank of the spell which the user has in his spellbook* is cast. *This is not true for Stone creation spells (i.e. "Create Firestone"), because they do not use "ranks".*

----

** *Description***

   Casts a spell by the spells given name.

----

** *Notes:***
   To cast spells that contains parentheses in the spell name, such as "Create Healthstone (Major)" and "Faerie Fire (Feral)", it's necessary to either specify rank or add () to the end of the spell name, like: CastSpellByName("Faerie Fire (Feral)()").
   You might encounter difficulties when using this on a localized version of WoW.

   This problem does only appear when working with Lua source files. When you're using macros, inside the WoW client, it should work in unicode directly.

## Macros
Rotate aura<syntaxhighlight lang="lua">
/run s={"Retribution Aura", "Concentration Aura", "Devotion Aura"} if not q then q=1 end CastSpellByName(s[q]) q=q+1 if q>table.getn(s) then q=1 end
</syntaxhighlight>

Crusader strike up to 3 stacks then stop<syntaxhighlight lang="lua">
/run local t="Interface\\Icons\\Spell_Holy_CrusaderStrike";local c=0;for i=1,40 do local tex,st=UnitBuff("player",i);if tex==t then c=st or 1 end end;if c<3 then CastSpellByName("Crusader Strike") end
</syntaxhighlight>

Blessing of Might if friendly target, else Blessing of Might onSelf<syntaxhighlight lang="lua">
/run if UnitIsFriend ("player", "target") then CastSpellByName("Blessing of Freedom") else CastSpellByName("Blessing of Freedom",1)  end
</syntaxhighlight>

## Addon
Example from addon named AsmoMOD<syntaxhighlight lang="lua">
	-- Auto-Riposte
	if(AsmoMOD_Save.riposteenabled and (UnitClass("player") == "Rogue")) then
		duration = GetSpellCooldown(RipID, 1);
		if(IsUsableAction(RipAction)) then
			if(duration == 0) then 
				CastSpellByName("Riposte");
			end
		end
	end

	-- Auto-Overpower
	if(AsmoMOD_Save.overpowerenabled and (UnitClass("player") == "Warrior")) then
		duration = GetSpellCooldown(opID, 1);
		if(IsUsableAction(opAction)) then
			if(duration == 0) then 
				CastSpellByName("Overpower(Rank 4)");
			end
		end
	end

	-- Auto-Execute
	if((AsmoMOD_Save.executeenabled) and (UnitClass("player") == "Warrior")) then
		--Check to see if the target is at 20% or less
		local tpercent;
		tpercent = (UnitHealth("target") / UnitHealthMax("target")) * 100;
		if(tpercent <= 20) then
			if(UnitMana("player") >= 15) then 
				CastSpellByName("Execute(Rank 5)");
			end
		end
	end
</syntaxhighlight>
