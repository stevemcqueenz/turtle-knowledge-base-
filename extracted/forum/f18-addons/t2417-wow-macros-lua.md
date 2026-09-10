---
title: "WoW + Macros + LUA"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2417"
topic_id: 2417
forum_id: 18
forum: "AddOns"
author: "Snigery"
author_authority: "player"
posted: "2021-12-31T20:53:00Z"
last_post: "2022-08-12T20:57:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:33:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# WoW + Macros + LUA

## Post 15086 by Snigery (Barrens Chat Casualty) — 2021-12-31T20:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15086#p15086 | page 1 | era: pre-1.18.1 -->

****Hello All****

Since playing here I have enjoyed writing macros with the freedom that the Vanilla WoW API affords. I have written macros for:
- Single-button conditional utility such as hunter pet feed/heal/revive

- Spammable single-button melee/ranged engage w/ added fishing utility

- Advanced pet control such as target-swapping, safe follow, and more

- Single-button conditional multi-spell-cast such as single button Raptor Strike/Mongoose Bite/Counterattack

- Single-button cycle through mulitple spells (useful for hunter tracking)
If any of that, or the like, is of interest to you then I hope what I am about to share here satisfies. Whether you have or have not written macros yourself, it is important to know several things. Macros are limited to 255 characters, they allow us to automate our actions - whether using spells or sending pre-written chat messages, they use the LUA scripting language with access to special tools WoW has built-in. To do what I have described and more you will need to have a means of using LUA code.

 ****The LUA****

I use the SuperMacro addon, which you can find [here](https://forum.turtlecraft.gg/viewtopic.php?f=18&t=874), that allows us to write extended LUA code to use in our macros. But we are going to do better than that, once you install the addon, navigate to its folder and create a new SM_Extend.lua file. This file will contain LUA code and the addon will load it when your game starts up. What I would like to do is share some of the LUA code I have written, the macros I have written, and how I play and use macros in-game.
Code: Select all

```
--To load LUA code, create new file at ../WoW/Interface/Addon/SuperMacro/SM_Extend.lua and add code to file. Use ingame command "/reloadui" to refresh ingame addons; SuperMacro will re-load SM_Extend.lua as well, useful for reflecting code changes mid-game.

--[[ Inventory Item Slot IDs
0 = ammo
1 = head
2 = neck
3 = shoulder
4 = shirt
5 = chest
6 = waist
7 = legs
8 = feet
9 = wrist
10 = hands
11 = finger 1
12 = finger 2
13 = trinket 1
14 = trinket 2
15 = back
16 = main hand
17 = off hand
18 = ranged
19 = tabard
20 = first bag (the rightmost one)
21 = second bag
22 = third bag
23 = fourth bag (the leftmost one)
--]]

-- Variables
local
vGearSwapState = true
vActionLoadCycle = 1;

-- Functions
function has_target()
if UnitExists( "target" ) then return true end

return false
end

function has_enemy_target()
if has_target() and UnitCanAttack( "player", "target" ) then return true end

return false
end

function target_within( num, unit )
if num ~= nil then
if unit == nil then unit = "target" end
if CheckInteractDistance( unit, num ) then
return true
end
end

return false
end

function pet_active()
if HasPetUI() then
return true
else
return false
end
end

function pet_alive()
local alive = false

if pet_active() then
if not UnitIsDead( "pet" ) then
alive = true
end
end

return alive
end

function action_info_pet( id )
local name, subtext, token, active, autocastable, autocasted = GetPetActionInfo( id )

return { name, subtext, token, active, autocastable, autocasted }
end

function action_exists( id )
if id ~= nil and HasAction( id ) then return true end

return false
end

function action_active( id )
if id ~= nil and ( IsCurrentAction( id ) or IsAutoRepeatAction( id ) ) then
return true
end

return false
end

function action_usable( id )
local usable = false

if id ~= nil then
local start, duration, enable = GetActionCooldown( id )

if IsUsableAction( id ) and duration == 0 then
usable = true
end
end

return usable
end

function action_load( id )
if action_usable( id ) and not action_active( id ) then
UseAction( id )
end
end

function action_load_cycle( ids )
if ids ~= nil then
if ( vActionLoadCycle > table.getn( ids ) - 1 or vActionLoadCycle < 1 ) then
vActionLoadCycle = 1;
end

action_load( ids[ vActionLoadCycle ] );
vActionLoadCycle = vActionLoadCycle + 1;
end
end

function action_cycle_move( ids )
local i = 1;

if ids ~= nil then
while i <= table.getn( ids ) do
if not CursorHasItem() then
PickupAction( ids[ i ] );
else
PlaceAction( ids[ i ] );
end

if i == table.getn( ids ) then
PlaceAction( ids[ 1 ] );
end

i = i + 1;
end
end
end

function action_use( id )
if action_usable( id ) and not action_active( id ) and IsActionInRange( id ) then
UseAction( id )
end
end

function list_buffs()
local s = "";
for i = 1, 40 do
local buff = tostring(UnitBuff('target', i))
if buff ~= 'nil' then DEFAULT_CHAT_FRAME:AddMessage('[' .. i .. '] ' .. buff) end
end
end

function buff_exists(unit, buff_name)
local found = false
for i = 1, 40 do
if (strfind(tostring(UnitBuff(unit, i)), buff_name)) then
found = true
end
end

return found
end

function debuff_exists(unit, buff_name)
local found = false
for i = 1, 40 do
if (strfind(tostring(UnitDebuff(unit, i)), buff_name)) then
found = true
DEFAULT_CHAT_FRAME:AddMessage('Found Debuff: ' .. buff_name)
end
end

return found
end

function buff_cancel(buff_name)
for i = 1, 40 do
local buff = UnitBuff('player', i) buff_string = tostring(buff)
if buff and (strfind(buff_string, buff_name)) then
CancelPlayerBuff(i-1)
end
end
end

-- Macro Functions
function engage( mId, rId, fId )
if has_enemy_target() then
if target_within( 3 ) then
action_load( mId )
elseif not action_active( rId ) then
action_use( rId )
end
else
if fId ~= nil and string.find( GetInventoryItemTexture( "player", 16 ), "Fishingpole" ) ~= nil then
action_load( fId )
end
end

if action_info_pet( 6 )[ 5 ] === nil then
PetAttack()
end
end

function engage_outdated()
if has_enemy_target() then
if target_within( 3 ) then
action_load( 53 )
elseif not action_active( 54 ) then
action_use( 54 )
end
end

if action_info_pet( 6 )[ 5 ] === nil then
PetAttack()
end
end

function disengage()
SpellStopCasting('Attack')
SpellStopCasting('Auto Shot')
SpellStopCasting('Shoot')
ClearTarget()
PetFollow()
end

function swap_gear( set1, set2 )
local i = 1;

if vGearSwapState == true then
while i <= table.getn( set1 ) do
action_load( set1[ i ] );
i = i + 1;
end

i = 1;
vGearSwapState = false;
else
while i <= table.getn( set2 ) do
action_load( set2[ i ] );
i = i + 1;
end

i = 1;
vGearSwapState = true;
end
end

function unequip( slot )
if slot ~= nil then
PickupInventoryItem( slot )
PutItemInBackpack()
end
end

function pet_return()
if CheckInteractDistance( "pet", 1 ) then
PetWait()
else
PetFollow()
PetPassiveMode()
end
end

function pet_switch()
if has_enemy_target() then
TargetNearestEnemy()
PetAttack()
TargetNearestEnemy(true)
else
TargetNearestEnemy()
end
end

function pet_assist()
if has_enemy_target() then
PetAttack()
else
PetFollow()
end
end

function pet_temperment()
local counter = GetCVar('c1') * 1

if counter == nil then
RegisterCVar('c1', 4)
end

if counter < 4 or counter > 5 then
SetCVar('c1', 4)
counter = 4
end

CastPetAction(counter)
SetCVar('c1', counter + 1)
end

function list_actions()
local i = 0

for i = 1, 120 do
local t = GetActionText(i);
local x = GetActionTexture(i);
if x then
local m = "[" .. i .. "] (" .. x .. ")";
if t then m = m .. " \"" .. t .. "\""; end
DEFAULT_CHAT_FRAME:AddMessage(m);
end
end
end

function list_pet_actions()
 -- This function is no different from list_actions(). I might have intended to modify the borrowed code to operate on the pet action bar.
local i = 0

for i = 1, 120 do
local t = GetActionText(i);
local x = GetActionTexture(i);
if x then
local m = "[" .. i .. "] (" .. x .. ")";
if t then m = m .. " \"" .. t .. "\""; end
DEFAULT_CHAT_FRAME:AddMessage(m);
end
end
end

--[[
Druid Unshapeshift: My first code design involved toggling through player buffs (looking for any buff with 'Form' in the texture path) and using CancelPlayerBuff() on the buff index. After much testing I have concluded that entering combat triggers something that somehow affects the usage of CancelPlayerBuff() on Druid's Forms. This design (suggested by Willbreaker of TurtleWoW) uses the Druid functions available for getting form info and casting shapeshift form. The goal is to find the currenty form by looking at the form texture (active forms actions/buttons will present the 'wisp' icon) and cast that form essentially toggling it off. Willbreaker's initial code design invovled literally declared if/else conditionals for each of the Forms. Mine incorporates the for loop from my previous design and as seen within buff_exists() and dynamically toggles the Druid Form.
/run for i=1,6 do if strfind(tostring(GetShapeshiftFormInfo(i)), 'Wisp') then CastShapeshiftForm(i) end end
--]]
```

 ****Interlude: How I Play****

![Image](https://cdn.discordapp.com/attachments/917244148086620220/926558919625674832/Screenshot_233.png)

Someone from another server convinced me to remap my action bars around my movement keys and to use mouse scroll for targeting. Well, they said to map charge to it but mouse scrolling is too glitchy imo for that. This interface above is the result of tinkering with that style and adapting Vanilla addons in place of WoTLK UI addons. You can see below how the action bars and UI elements are clustered with spare action bars placed above. This all lends nicely to macro usage. I place spare spells I cannot fit down below up top along with items and consumables. So I play with the camera more close in a RPG-ish style. With this approach I instead design my macros and LUA functions to operate on the action bars in certain behaviors rather than directly cast the spells. This allows me to focus on action bar conditionals and manipulation behavior instead, then when I get in-game, I can swap out the abilities myself and the macros still work. I have found this approach to work very nicely so far.

 ****The Macro****

In the code above there are some comment blocks with WoW API references, some global variables used by some of the functions, LUA utility functions, and macro functions. You can use anything not commented in your macro with '/script', but if you want to get started quickly, I'd recommend starting with engage.

This macro, which is useful for all classes, will let you engage your target by using a ranged/melee attack depending on target distance. You can spam the macro and it will not toggle off, so press it as you enter/leave melee range to swap between the two attacks (good for hunters). This function works by using your action bar spells. Provide it the action bar slots of your melee 'Attack' spell, ranged 'Shoot' or 'Auto Shot' spell, and the third value your 'Fishing' spell if you so choose. A nice all in one button.

 **Engage**: This function will let you *engage* your target, whether from range or melee. The numbers you provide the function are, in order, action slot id of your melee spell, ranged spell, and fishing ability. Last one is a nice utility I added, if you have a fishing pole equipped you can fish with this macro too. Code: Select all

```
/run engage( 1, 2, 3 )
```

Don't know how to find action slot ids? There is a LUA function in the code above. Just make a new macro with the function, or type '/script list_actions()' in-game.

 **Disengage**: Clears your target and stops attacks. Also has your pet follow you. Code: Select all

```
/run disengage()
```

I like to put Engage on my Tab key and Disengage on my Shift+Tab key.

 **Swap Gear**: This macro will swap between two sets of main hand/off hand items. The function uses a global variable to store the state so it knows which one to swap to after each press. Good idea to reserve 4 action bar slots for your gear. Nice thing is you can swap out whatever equippable items you want. I like to have my fishing rod on the second set to use it quickly with Engage's fishing utility. Code: Select all

```
/run swap_gear({1,2},{3,4})
```

 **Raptor Strike/Mongoose Bite/Counterattack**: This macro represents not one macro but how you can use the LUA functions I have made available to achieve this sort of result. Though obviously limited by the 255 character limit, if you want you could put this code in a new LUA function and just call that function then. Ta da! What it does is conditionally uses 1 of 3 abilities depending whether they are available. It will prioritize the available abilities, annoyingly. So if you don't want to have to use Counterattack over Mongoose Bite, and Mongoose Bite over Raptor Strike, best not use it, or modify the macro to suit your needs ; ) Code: Select all

```
/run if has_enemy_target() then if action_usable(1) then action_use(1) elseif action_usable(2) then action_use(2) elseif action_usable(3) then action_use(3) end end
```

 **Track Toggle**: This macro again uses a global variable to cycle through the provided action slot ids. Though it might seem wasteful to cycle through the spells one by one, it is convenient and I don't mind it. Again, this macro represents how you can use this function to achieve this result. There are many other applications for this, and you can provide as few or as many action slot ids as you want - they do not have to be in sequence either. Code: Select all

```
/run action_load_cycle({1,2,3,4})
```

 **Concussive Shot/Wingclip**: I consider this one different because of the added ranged distance conditional. This one will cast Concussive Shot if target is far, or Wingclip if near. What is nice about this is they both slow the target, and now we only need a single button. Code: Select all

```
/run if has_enemy_target() then if target_within( 3 ) and action_usable(1) then action_use(1) elseif action_usable(2) then action_use(2) end end
```

 **Pet Temperment**: Uses the return of action_info_pet to see which pet spell is auto-castable (not casted), and toggles between the two, which should be your pet aggressive and pet defensive. Code: Select all

```
/run local c=CastPetAction a=action_info_pet  if a(5)[5] then c(4) else c(5) end
```

 **Pet Return/Stay**: Will have pet follow passively, or if nearby, stay. Code: Select all

```
/run if target_within(1,'pet') then PetWait() else PetFollow() PetPassiveMode() end
```

 **Cycle Totems**: This one needs some explaining. I have my totems organized by element type, from left to right. I only have so many modifier keys to access all the variations, so extra totems I store on the action bars above (see 'How I Play' for context). What this macro will do is automatically pickup, and put down totem spells along the action bar slots I provide for each totem element, effectively rotating my access to totems while still using the same modifier keys. Code: Select all

```
/run local acm=action_cycle_move acm({74,70,66,2,6,10}) acm({75,71,67,3,7,11}) acm({76,72,68,4,8,12}) acm({77,73,69,14,18,22})
```

 1/3
![Image](https://cdn.discordapp.com/attachments/917244148086620220/926576480794869780/Screenshot_234.png)

 2/3
![Image](https://cdn.discordapp.com/attachments/917244148086620220/926576481000357927/Screenshot_235.png)

 3/3
![Image](https://cdn.discordapp.com/attachments/917244148086620220/926576481201688636/Screenshot_236.png)

 ****Conclusion/Changes****

I hope you can find what I shared useful. If you have any questions or suggestions feel free to leave them.

## Post 15098 by Kiwijello — 2022-01-01T01:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15098#p15098 | page 1 | era: pre-1.18.1 -->

Thank you for starting this. I love me some macros lol. I have been working with this script for my healers. I bind a heal and an offensive ability to the same key and it changes based on what I have targeted. Makes keybinding so much easier.

/script if UnitIsFriend("player", "target") then CastSpellByName("Rejuvenation"); else CastSpellByName("Moonfire", 1); end

If anyone can figure out what to add to make it cast on me with no target, I would love you forever :)

## Post 22160 by Santiago54 — 2022-08-12T20:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22160#p22160 | page 1 | era: pre-1.18.1 -->

> **Kiwijello wrote: Sat Jan 01, 2022 1:45 am**
> If anyone can figure out what to add to make it cast on me with no target, I would love you forever :)

Try to use this: Code: Select all

```
/run CastSpellByName(UnitCanAttack("player", "target") and "Moonfire" or "Rejuvenation")
```

it means to use Moonfire if u can attack the target else use Rejuvenation(for friendly target or when u have no target)

