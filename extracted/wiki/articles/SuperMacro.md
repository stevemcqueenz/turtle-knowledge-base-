---
title: "SuperMacro"
url: "https://turtle-wow.fandom.com/wiki/SuperMacro"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-09T19:42:45Z"
fetched: "2026-09-10T07:39:45Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# SuperMacro

Unlimited 'Super' macros hold up to 7000 letters. Run macros with keybindings and through other macros and from events. In-game code extender editor. Item link into macros. Tooltips over macros on actionbars. Convenient slash commands and functions.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the SuperMacro-master folder to SuperMacro
# Restart the game
You may also create a text file called SM_Extend.lua and put extra long codes in there.

Warning:

- Make sure you have saved at least one "regular" macro. Then relog. It is required so you can drag super macros to the action bars.
- Before you unzip, backup your old Bindings.xml and SM_Extend.lua that are in the SuperMacro folder (if you have on older version of SuperMacro).
- It is not recommended to use SuperMacro with other macro addons to avoid function conflicts

## Git Links
- **[(qs-crocodyle)](https://github.com/qs-crocodyle/SuperMacro-turtle)**  - This version is updated for Turtle WoW use
- [**(jrc13245)**](https://github.com/jrc13245/SuperMacro-turtle) - This version is for [SuperWoW](https://github.com/balakethelock/SuperWoW) users only

## Preview
Menu:

Macro Window:

## Commands
Functions and slash commands found in SuperMacro add-on that can be helpful in your macros are listed here in alphabetical order. **Alt-click** on an item to insert its item link into the macro. **Shift-click** to add item's or spell's name. **Shift-Ctrl-click** will add quotes.

- cancelBuff(buff [,...]), unbuff, /unbuff, /smunbuff
- cast
- caststop(spell [,...])
- Channel(spell), SM_Channel, /smchan, /smchannel
- CraftItem( skill, item, count), /craft, /smcraft
- DoOrder(spell | item [,...]), /order, /smorder
- echo   (see /print)
- /equip, /smequip, /eq, /smeq
- /equipoff, /smequipoff, /eqoff, /smeqoff
- Fail(message), /fail   (also see Pass)
- FindBuff(buff [ [, unit], item]), buffed
- SpellReady(spell)
- FindItem(item)
- /in seconds[+] command, SM_IN(seconds, command, repeat)
- lastActionUsed
- Macro   (see RunMacro)
- Pass(message), /pass   (also see Fail)
- pickup(bag, slot), pickup(inventory_slot), pickup("item")
- /print msg, /smprint, SM_print(msg), echo
- PrintColor(r,g,b,msg [,...]), Printc
- Printd(msg [,...]), Print
- PrintTable(table, rowname, level), Printt
- RegisterEventMacro(macro, super, event[,...])
- RunBody(longtext)
- RunLine(command [,...])
- RunMacro(index|macro), Macro, /macro
- RunSuperMacro(index|super), /smacro
- SayRandom(speech [,...]), /sayrandom, /smsayrandom
- send
- SetActionMacro(actionid, macro)
- SetActionSuperMacro(actionid, supername)
- /shift form, /smshift -- for druids, rogues, warriors only
- stopcast   (also see caststop)
- /unequip, /smunequip, /uneq, /smuneq
- UnregisterEventMacro(macro, super, event[,...])  (see RegisterEventMacro)
- use(bag,slot), use(item), /use, /smuse
- UseItemByName(item)
- ViewEventMacros()  (also see RegisterEventMacro)

**Tooltips**

If you want see tooltips and button text for spell in macros you should add line to top of your macro:

- /run -- CastSpellByName("Spell Name")
- /script -- CastSpellByName("Spell Name")
- /script if nil then CastSpellByName("SPELLNAME"); end
- /run -- cast("Spell Name")
- /script -- cast("Spell Name")

**CancelBuff(buff [,...]), unbuff, /unbuff, /smunbuff**

Cancel the player's buffs that match the given strings.

- Ex. /script CancelBuff("Demon Skin")
- Ex. /script CancelBuff("demon") -- cancel buffs with demon in it, including Demon Skin
- Ex. /script unbuff("demon") -- same as above
- Ex. /unbuff demon -- same as above
- Ex. /unbuff mana, frost -- cancel any buffs matching mana or frost
- Ex. /unbuff . -- cancel all buffs, use with care
- Ex. /unbuff a -- careful, cancel all buffs with 'a' in their names

**Cast**

cast is same as CastSpellByName.

- Ex. cast("Heal")

**Caststop(spell [,...])**

Cast a spell, then stop. Will cast multiple spells in sequence. Only works properly for spells that don't cause global cooldown. (Not tested.)

- Ex. /script caststop("Arcane Power","Presence of Mind","Frostbolt")

**Channel(spell), /smchan, /smchannel**

Safely channel a spell, ignoring accidental multiple keypresses.

- Ex. SM_Channel("mind flay")
- Ex. /smchan mind flay

**CraftItem( skill, item, count), /craft, /smcraft**

Create item or enchant (at least one time). If count is left out (nil) then will make one. If count is zero, then will make all available. If count is negative, then will leave that much.

- Ex. /craft First aid, Heavy Linen Bandage -- make one bandage
- Ex. /smcraft First aid, Heavy Linen Bandage, 0 -- make all available bandages
- Ex. CraftItem( "First aid", "Heavy Linen Bandage", -1 ) -- make all but one

**DoOrder(...), /order, /smorder**

Use first available item or cast spell in a list separated by commas, and ignore the rest of the list. Alt-click on item to insert item link into macro. Shift-click to add item's or spell's name; Shift-Ctrl-click will add quotes.

- Ex. DoOrder("healing potion", "lesser healing potion", "healing touch")
- Ex. /order healing potion, lesser healing potion, healing touch
- Ex. /script DoOrder( not FindBuff("mark") and "mark of the wild" or "", not FindBuff("thorns") and "thorns" or "" )

**echo**

See /print.

**/equip, /smequip, /eq, /smeq**

Equip or use an item. Also works with item links. Alt-click on item to insert item link into macro.

- Ex. /eq hatchet

**/equipoff, /smequipoff, /eqoff, /smeqoff**

Equip item into off-hand slot. Also works with item links. Alt-click on item to insert item link into macro.

- Ex. /eqoff shield

**Fail(message), /fail**

Run message or script if current action (spell or item) failed. See Pass for success.

- Ex. /script CastSpellByName("Attack") Fail("Can't attack")
- Ex. /script CastSpellByName("nada") Fail("not a spell")
- Ex. /script Fail("no action")
- Ex. /fail /script use('hearthstone')

**FindBuff, buffed**

See if a unit has a specific buff or debuff, or weapon buff.

- Usage 1: FindBuff(buff [ [, unit], item])
- Usage 2: buffed(buff [ [, unit], item])

buff is the buff's name, or part of it's name--not case sensitive

unit is API 'unit' value ('player' if left empty or nil)

item value is boolean. if item is not nil or false or empty, then will search for item buff instead

- Ex. buffed("Find Herbs") -- player's buff; returns "track", 0
- Ex. buffed("herbs") -- also works
- Ex. FindBuff("rockbiter",nil,1) -- player's weapon buff; returns "main" or "off", time left, charges
- Ex. buffed("rockb") -- same as above
- Ex. buffed("gouge", 'target') -- target's buff; returns "debuff", id
- Ex. buffed("perception") -- returns "buff", id

**SpellReady**

See if a specifc spell is off cooldown

- Usage: SpellReady("spell")

spell is the name of the spell (not case sensitive)

- Ex. SpellReady("Innervate") -- returns true or false

**FindItem(item)**

Find an item in your container bags or inventory. If found in inventory, returns slot, nil, texture, count. If found in bags, returns bag, slot, texture, total count in all bags. Also works with item links. Alt-click on item to insert item link into macro.

- Ex. local bag,slot,texture,count = FindItem("Lesser Magic Essence");

**/in seconds[+] command, /smin, SM_IN(seconds, command[, repeat])**

Execute command in seconds seconds. Use + after sec to repeat. Separate multiple commands with \n. Does not cast spells or use items. 

- Ex. /in 5 /p NOW
- Ex. /script SM_IN(5, "/p NOW") -- same as first, no repeat
- Ex. /in 1 /script PlaySound( "LOOTWINDOWCOINSOUND")
- Ex. /smin 600+ /print 10 mins repeating -- use + to repeat
- Ex. SM_IN(600, "/print 10 mins repeating", 1) -- repeats, same as above, but no +, instead include third parameter
- Ex. /in 1 /t ;me hi\n/t ;me hey -- multiple commands separated by \n
- Ex. /script SM_IN(1,"/t ;me hi\n/t ;me hey") -- same as above
- Ex. /in 1m /print 1 min passed -- 1m = 1 minute, 1h = 1 hour, 1s = 1 second
- Ex. /script SM_IN("1m","/print 1 min passed") -- same as above, note 1m in quotes
- Ex. /in 1h30m5s+ /print repeat every hour and 30 mins and 5 seconds

**LastActionUsed**

Variable that stores the current or last action's id. Usually same id as the current button you press. Useful for items and supermacros to check IsActionInRange.

Example to see if action is in range:

- Ex. /script if IsActionInRange(lastActionUsed) then use("trinket")

**Macro**

See RunMacro.

**Pass(message), /pass**

Run message or script if current action (spell or item) succeeded. See Fail for failure.

- Ex. /script CastSpellByName("Attack") Pass("Attacking")
- Ex. /pass /macro Cheer

**pickup(bag, slot), pickup(inventory_slot), pickup("item")**

Pickup item from inventory or bags. One argument for inventory; two arguments for bags. Argument can also be a string containing the item's name. Calling this function again puts the item into that slot, which may swap items. Also works with item links. Alt-click on item to insert item link into macro.

- Ex. pickup(16) --main hand weapon
- Ex. pickup("mainhandslot") -- also main hand weapon
- Ex. pickup(1,4) -- bag 1, 4th slot
- Ex. pickup("hearthstone") -- pickup hearthstone
- Ex. pickup("hearthstone") pickup("healing potion") -- consecutive pickups will swap these items
- Ex. pickup("hearthstone") pickup(4,7) -- put hearthstone in that slot; may swap if slot is not empty
- Ex. pickup("ring of iron will") pickup("finger0slot") -- put ring on first finger slot

**/print msg, /smprint, SM_print(msg), echo**

Print message into chat that only you can see. It's identical to DEFAULT_CHAT_MESSAGE:AddMessage. Default color is white, but you can change it in options.

- Ex. /print test
- Ex. echo("test")

**PrintColor(r,g,b,...), Printc**

Print message into chat that only you can see using specified color codes, in order of red, green, and blue. Color values are between 0 and 1. Also accepts any number of arguments like Printd.

- Ex. PrintColor(1,0,1, "test") -- purple
- Ex. PrintColor(1,1,0, "msg1", "msg2") -- yellow

**Printd(...), Print**

Print message into chat that only you can see. Unlike /print, this accepts any number of arguments and prints each onto separate lines. Also, color is always white. If Print is taken by another addon, it will not overwrite it.

- Ex. Printd("Test")
- Ex. Print("msg 1", "msg 2") -- only if another addon doesn't have Print

**PrintTable(table, row, level), Printt**

Print a table into chat for your view only.

- Ex. PrintTable(SM_VARS)

**RegisterEventMacro(macro, super, events[,...]), UnregisterEventMacro(macro, super, events[,...])**

Run a macro after an event or events. macro is macro's name. super is 1 if "super" macro, else 0 or nil. And lastly, any number of events. 

Probably the best place to put these commands is in Extended LUA box.

Use ViewEventMacros() to print events table to chat frame.

- Ex. RegisterEventMacro( "todo", nil, "PLAYER_LOGIN"); -- regular macro
- Ex. RegisterEventMacro( "todo", 1, "PLAYER_LOGIN"); -- super macro
- Ex. RegisterEventMacro( "todo", nil, "PLAYER_LOGIN", "PLAYER_LOGOFF"); -- multiple events, same macro
- Ex. UnregisterEventMacro( "todo", nil, "PLAYER_LOGIN"); -- unregister, don't run macro for this event anymore
- Ex. RegisterEventMacro( "ding", 1, "PLAYER_LEVEL_UP"); -- do something whenever you level up

**RunBody(longtext)**

Execute longtext like a macro. Each line is separated by \n.

- Ex. RunBody("/cast Attack\n/pass /p Attack!")
- Ex. /in 5 /script RunBody("/print 5 secs passed\n/macro MyMacro")

**RunLine(command [,...])**

Execute a line like a macro or chat message. Takes multiple lines, where each line is another argument separated by commas. Excellent for doing slash commands within 'if' blocks.

- Ex. RunLine("/p hi")
- Ex. RunLine("/p hi", "/dance", "/supermacro")
- Ex. if GetSpellCooldown(1,'spell')==0 then CastSpell(1,'spell') RunLine("/in 5 /print Cooldown finished") end

**RunMacro(index | name), Macro, /macro**

Execute a macro by name or by index.

- Ex. /macro Attack -- runs macro named Attack
- Ex. RunMacro("Attack") -- same as above
- Ex. Macro(1) -- run first macro in macro frame
- Ex. /macro 1 -- will run macro named 1; note difference from last example
- Ex. Macro("1") -- same as last example
- Ex. /macro -- opens SuperMacro frame (no argument passed)

**RunSuperMacro(index | super), /smacro**

Execute a SuperMacro by name or by index (in the order shown in SuperMacro frame at Super tab).

- Ex. RunSuperMacro(1);
- Ex. RunSuperMacro("MySuperMacro");

**SayRandom(...), /sayrandom, /smsayrandom**

Say a random phrase from a list separated by comma. Actually, you can do more than send chat messages. There's an equal chance (1 in number of list items+1) that nothing will happen.

- Ex. /sayrandom hi, hello -- says hi or hello or nothing
- Ex. /script SayRandom("hi","hello"); -- same as last example
- Ex. /script SayRandom("/script Print(1)","/script Print(2)"); -- actions besides chat
- Ex. /sayrandom /script Print(1), /script Print(2) -- same as last example

**Send**

send is same as SendChatMessage. Also see RunLine.

- Ex. send("hi") -- send "hi" to local channel
- Ex. send("hi", "WHISPER", "COMMON", "Aquendyn") -- send whisper

**SetActionMacro(actionid, macro)**

Set or replace an action button with another macro. The global variable lastActionUsed can be used to get the ID of the last action button that was pressed or clicked.

- Ex. Swap two macros named FindHerbs and FindMinerals.

**Macro FindHerbs looks like this:**

- /cast Find Herbs
- /script SetActionMacro( lastActionUsed, 'FindMinerals' )

**Macro FindMinerals looks like this:**

- /cast Find Minerals
- /script SetActionMacro( lastActionUsed, 'FindHerbs' )

Drag either macro into an action button on your action bar. Each time you execute that action, the macros will swap, along with their appropriate icons and tooltips.

**SetActionSuperMacro(actionid, supername)**

Set or replace an action button with a SuperMacro. The global variable lastActionUsed can be used to get the ID of the last action button that was pressed or clicked. See SetActionMacro for an example.

- Ex. SetActionSuperMacro(1,"MySuperMacro");

**/shift form**

Form is number or name of form, stealth, or stance.

Druids: bear=1, aquatic=2, cat=3, travel=4, moonkin=5

Rogues: stealth=1

Warriors: battle=1, defend=2, berzerk=3

- Ex. /shift bear
- Ex. /shift battle
- Ex. /shift stealth
- Ex. /shift 1 -- all four commands are equivalent, any of them will shift to battle for warriors, stealth for rogues, bear for druids

**Stopcast**

stopcast is same as SpellStopCasting. Also see caststop.

**/unequip, /smunequip, /uneq, /smuneq**

Unequip an item if you have an empty bag space. Alt-click on item to insert item link into macro. Shift-click to add item's name.

- Ex. /uneq shield

**use, /use, /smuse**

Use an item by name or link, by bag and slot, or by inventory slot. Alt-click on item to insert item link into macro. Shift-click to add item's name; Shift-Ctrl-click will add quotes.

- Ex. /use hearthstone
- Ex. /use 4,1
- Ex. /script use("hearthstone");
- Ex. /script use(4,1); -- bag 4, 1st slot
- Ex. /script use(13); -- trinket

**UseItemByName(item)**

Use or equip an item given its name or item link. Alt-click on item to insert item link into macro. Shift-Ctrl-click to add item's name with quotes.

- Ex. UseItemByName("hearthstone")

**ViewEventMacros()**

Print to chat frame the events table used by RegisterEventMacro.

- Ex. ViewEventMacros();

**Aliases to simplify macros**

Aliases can simplify your macros significantly. However, this requires alias addons. These examples use ASF (aka Alias-Spellchecker-Filter).

For example, to get current mana, alias is simply /pm instead of UnitMana('player'). More importantly, Alias allows values from functions into chat. Instead of:

- /script SendChatMessage("Buffing you", "WHISPER", "COMMON", UnitName("target"))

**Use a regular chat message:**

- /tt Buffing you

**Useful default aliases include:**

- **/z** for /script
- **cn** for CastSpellByName
- **/c** for /cast
- **/m** for /macro
- **/rl** for /console reloadui
- **pm** for player mana
- **pmm** for player max mana
- **ph** for player health
- **phm** for player max health
- **p2h** for party2 health (and so on for party3, party4, party5)

**Macro Character Limit and Workarounds**

The maximum character limit for a macro is **256 characters**. However, you can bypass this limit by using one of the following methods:

  1. **Calling Macros from Other Macros:**

You can break up long macros into smaller parts and have them call each other. For example, if **Macro1** exceeds 256 characters, you can create a new macro like this:<syntaxhighlight lang="lua">
/script RunMacro("Macro1") --more scripting here
</syntaxhighlight>Then, assign this new macro to your action bar.

  2. **Using the <code>SM_Extend.lua</code> File:**

For even longer functions, you can place them in the **<code>SM_Extend.lua</code>** file. This file is not included in the addon zip, so you will need to create it yourself. This ensures your custom functions are not overwritten during updates.

You can also use **<code>SM_Extend.lua</code>** to define global variables and constants.

**Example: Defining a Function in <code>SM_Extend.lua</code>**

To define a function in this Lua file, use the following structure:<syntaxhighlight lang="lua">
function FunctionName(parameter1, parameter2, etc.)
	-- code goes here
	-- return variable
end
</syntaxhighlight>**Example Function:**<syntaxhighlight lang="lua">
function FindTradeSkillIndex(tradeskill)
	if (TradeSkillFrame:IsVisible()) then
		for i=1,GetNumTradeSkills() do
			tsn,tst,tsx=GetTradeSkillInfo(i);
			if (tsn==tradeskill) then
				tsi=i;
				SelectTradeSkill(tsi);
				TradeSkillInputBox:SetNumber(tsx);
				TradeSkillFrame.numAvailable=tsx;
				return tsi, tsx;
			end
		end
	end
end
</syntaxhighlight>

  3. **Using the Function in a Macro:**

Once you've defined your function in <code>SM_Extend.lua</code>, you can call it in a macro. For example, to use the **<code>FindTradeSkillIndex</code>** function, your macro might look like this:<syntaxhighlight lang="lua">
/script CastSpellByName("First Aid")
/script tsi,tsx=FindTradeSkillIndex("Heavy Linen Bandage") if (tsx) then DoTradeSkill(tsi,tsx-1) end
</syntaxhighlight>

  4. **Reloading the UI for Changes:**

If you modify the <code>SM_Extend.lua</code> file while in-game, you will need to reload your UI to apply the changes. You can do this by closing the Macro frame and typing the following in the chat line: **/script ReloadUI()** Alternatively, you can create a macro for this.

**Default Bindings for SuperMacro**

The default bindings for this addon provide entries for Macros #1 through #36. You can add more keybinds by editing the <code>bindings.xml</code> file. **Important:** Backup this file before installing a new version of SuperMacro. Additionally, there are two special bindings for <code>Attack</code> and <code>PetAttack</code>. To use these macros, you must first create them.

**Attack Macro**

  1. Create a macro named <code>Attack</code> (note the capitalization) with the following content:

 <syntaxhighlight lang="lua">/script if (not PlayerFrame.inCombat) then CastSpellByName("Attack") end</syntaxhighlight>

  2. Now you can assign a keybind for attack. You can also call this macro within other macros. For example, to attack and cast a spell, create a macro with the following content:

 <syntaxhighlight lang="lua">/script RunMacro("Attack")
/cast Shadow Bolt</syntaxhighlight>

**PetAttack Macro**

  1. Create a macro named <code>PetAttack</code> (note the capitalization) with the following content:

 <syntaxhighlight lang="lua">/script CastPetAction(1);</syntaxhighlight>

  2. Ensure the pet attack icon is in the first slot on your pet action bar (this should be there by default).
  3. You can now assign a keybind to command your pet to attack. To call this macro in another macro, you can combine it with the previous example:

 <syntaxhighlight lang="lua">/script RunMacro("Attack");
/script RunMacro("PetAttack");
/cast Shadow Bolt</syntaxhighlight>

**Running Macros with <code>RunMacro</code>**

SuperMacro allows macros to call other macros using the <code>RunMacro(index)</code> or <code>RunMacro("name")</code> functions. If you use a number (without quotes), it will call the macro by its position in the macro frame (1–36). If you use the macro name in quotes, it will call the macro by its name.

- **Macro 1–18:** Account macros
- **Macro 19–36:** Character-specific macros

You can modify these bindings to call your own macros. For example:
 <syntaxhighlight lang="lua">/script RunMacro("Attack");</syntaxhighlight>
Note: You can also use <code>Macro()</code> instead of <code>RunMacro()</code> if you're approaching the 256-character limit.

**Slash Commands**

- **Running Macros from the Chat Line:** Use <code>/macro <macro_name></code>, which is equivalent to <code>/script RunMacro("macro_name")</code>. For example, <code>/macro Attack</code> will execute the <code>Attack</code> macro.  **Note:** Running a macro or script from the chat line will not cast spells.
- **SuperMacro Options:**
  - <code>/supermacro</code>: Displays help for SuperMacro options.
  - <code>/supermacro hideaction 1</code>: Hides macro names on action buttons.
  - <code>/supermacro hideaction 0</code>: Displays macro names on action buttons.
- **Text Color for <code>/print</code> Command:**
  - Use <code>/supermacro printcolor <red> <green> <blue></code> to change the color of text printed with the <code>/print</code> command (values range from 0 to 1). Example: <code>/supermacro printcolor 1 0.5 0.03</code>.
  - To reset to the default white color: <code>/supermacro printcolor default</code>.
- **Macro Tooltip Options:**
  - <code>/supermacro macrotip 0-3</code>: Customizes the tooltip display.
  - * <code>0</code> (default) shows normal tooltips.
  - * <code>1</code> shows only spell names.
  - * <code>2</code> shows only macro code.
  - * <code>3</code> shows both spells and/or macros.

These options can also be set in the SuperMacro options frame.

**Slash Commands for Using and Equipping Items**

You can use the following commands for item-related actions:

- <code>/use <item_name></code> or <code>/smuse <item_name></code> to use an item.
- <code>/equip <item_name></code> or <code>/smequip <item_name></code> to equip an item.
- <code>/equipoff <item_name></code> or <code>/smequipoff <item_name></code> to equip an offhand item.
- <code>/unequip <item_name></code> or <code>/smunequip <item_name></code> to unequip an item.

When using item links in macros, make sure the item link and command are on the same line:
 <syntaxhighlight lang="lua">/eq [link]  -- Correct
/eq
[link]     -- Incorrect</syntaxhighlight>
You can also use <code>/smuse</code> and <code>/smeq</code> as alternatives to <code>/use</code> and <code>/equip</code> if another addon has already taken those commands.

- To print text to the chat frame, use <code>/print <message></code>. You can change the text color using <code>/supermacro printcolor <red> <green> <blue></code>.

**Item Links in Macros**

To insert item links into macros:

- **Alt-click** on an item in your inventory to link it.
- **Shift-click** on an item or tradeskill to insert its name into the macro.
- **Ctrl-Shift-click** inserts the recipe of a tradeskill into the macro.

For spells, use **Shift-click** on the spell in your spellbook to insert <code>/cast <spellname></code>. **Ctrl-Shift-click** inserts the spell with its rank.

**In-Game Extended Lua Code Editor and <code>SM_EXTEND.lua</code>**

SuperMacro includes an in-game extended Lua editor for advanced functionality:

# The **Extended Editor** allows you to add additional code to your macros, stored in the <code>SM_EXTEND</code> table in SavedVariables.
# **SM_EXTEND.lua**: If you want to use custom code, create a text file named <code>SM_EXTEND.lua</code>. Any code placed here will be loaded when the addon starts.  **Note:** Changes made during gameplay require a UI reload to take effect.
# **Macro Renaming and Deletion Behavior:**
1. * If you create a new macro with the same name as an existing one, it inherits the previous macro's extended code.
1. * Renaming a macro to an existing macro's name will cause both macros to share the same extended code.
1. * When a macro is deleted, its associated extended code is also removed unless another macro with the same name exists.
