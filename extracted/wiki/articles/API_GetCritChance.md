---
title: "API GetCritChance"
url: "https://turtle-wow.fandom.com/wiki/API_GetCritChance"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-10T15:49:08Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetCritChance

Since there are functions incorporated in the [WoW API](API Functions) to return [parry](API GetParryChance), [dodge](API GetDodgeChance) and [block](API GetBlockChance) chances but none to return critical hit chance, here is a [GetCritChance()](API GetCritChance) function that will do so.

## GetCritChance()
### Function code
<syntaxhighlight lang="lua">
 function GetCritChance()
   local critChance, iCritInfo, critNum;
   local id = 1;
   -- This may vary depending on WoW localizations.
   local atkName = "Attack";
   local attackSpell = GetSpellName(id,BOOKTYPE_SPELL);
   if (attackSpell ~= atkName) then
     name, texture, offset, numSpells = GetSpellTabInfo(1);
     for i=1, numSpells do
       if (GetSpellName(i,BOOKTYPE_SPELL) == atkName) then
         id = i;
       end
     end
   end
   GameTooltip:SetOwner(WorldFrame,"ANCHOR_NONE");
   GameTooltip:SetSpell(id, BOOKTYPE_SPELL);
   local spellName = GameTooltipTextLeft2:GetText();
   GameTooltip:Hide();
   iCritInfo = string.find(spellName, "%s");
   critNum = string.sub(spellName,0,(iCritInfo -2));
   critChance = math.ceil(critNum);
   return critChance;
 end
</syntaxhighlight>
### Returns
   Player's critical hit chance, in percentage (*without the % symbol*).
   **Note**: Sometimes, the percentage returned would include a **lot** of decimals, hence the usage of [math.ceil()](http://www.lua.org/manual/5.0/manual.html#5.5)] here to round up the number to the nearest decimal.

## Examples
Simply call the function and display it, like this:
<syntaxhighlight lang="lua">
 -- Will display your critical hit chance in your default chat frame.
 DEFAULT_CHAT_FRAME:AddMessage("Your crit chance is: "..GetCritChance().."%");
</syntaxhighlight>
You can also use this code for a more thorough display:
<syntaxhighlight lang="lua">
 -- Will send a "SAY" message (/s) with your crit, dodge, parry and block chances in percentage.
 SendChatMessage("My crit chance is: "..GetCritChance().."%","SAY");
 SendChatMessage(UnitName('player').."'s chances to...","SAY");
 SendChatMessage("Crit: "..GetCritChance().."%","SAY");
 SendChatMessage("Dodge: "..GetDodgeChance().."%","SAY");
 SendChatMessage("Parry: "..GetParryChance().."%","SAY");
 SendChatMessage("Block: "..GetBlockChance().."%","SAY");
</syntaxhighlight>
## How it works
This function simply loops through your spellbook ([BOOKTYPE_SPELL](WoW Constants#Miscellaneous)) for your regular melee attack skill and then grabs the text from the skill's tooltip using [GameTooltip](Widget API#GameTooltip) functions (the tooltip of the regular melee attack is the only place where the crit chance is displayed).

## Credits
Much of this [GetCritChance()](API GetCritChance) function was taken and (slightly) modified from [mercdev's Combat Info](https://web.archive.org/web/20060522224452/http://ui.worldofwar.net/ui.php?id=722) ([alt](https://web.archive.org/web/20060820125320/http://www.curse-gaming.com/en/wow/addons-1208-1-titan-panel-combat-info-v152.html)) for [Titan Panel](Titan Panel). Thanks to him.
----
