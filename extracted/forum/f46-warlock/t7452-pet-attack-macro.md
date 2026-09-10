---
title: "Pet attack macro?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7452"
topic_id: 7452
forum_id: 46
forum: "Warlock"
author: "Zeroanjel"
author_authority: "player"
posted: "2023-05-26T02:41:00Z"
last_post: "2025-01-15T00:58:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:16:41Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Pet attack macro?

## Post 47445 by Zeroanjel — 2023-05-26T02:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47445#p47445 | page 1 | era: pre-1.18.1 -->

is there a macro that we can use to cast a spell and have your pet attack without clicking the attack button?? Thanks

## Post 47449 by Frosty73 — 2023-05-26T04:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47449#p47449 | page 1 | era: pre-1.18.1 -->

/script PetAttack(target)

## Post 47460 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-26T05:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47460#p47460 | page 1 | era: pre-1.18.1 -->

Here are all the normal pet hotkeys in Vanilla macro format: Code: Select all

```
PetAggressiveMode() - Set your pet in aggressive mode.
PetAttack()         - Instruct your pet to attack your target.
PetStopAttack()     - Stop the attack of the pet.
PetDefensiveMode()  - Set your pet in defensive mode.
PetFollow()         - Instruct your pet to follow you.
PetPassiveMode()    - Set your pet into passive mode.
PetWait()           - Instruct your pet to remain still.
```

And here's a couple of random examples of what you're asking for:

Use Wand + Pet Attack Code: Select all

```
/run --CastSpellByName("Shoot")
/run PetAttack(); CastSpellByName("Shoot") end
```

Cycle Immolate, Corruption, and Shadow Bolt + Pet Attack Code: Select all

```
/run --CastSpellByName("Immolate")
/run PetAttack(); local c=CastSpellByName; if IsShiftKeyDown() or n==0 then c("Immolate") n=1; elseif n==1 then c("Corruption") n=2 else c("Shadow Bolt") end
```

(You have to hold Shift to reset the "castsequence" counter on this one.)

## Post 48152 by Malfiouss — 2023-05-31T00:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48152#p48152 | page 1 | era: pre-1.18.1 -->

I originally had my pet attack mapped to my spells but found this messed up, pulling more mobs and maintaining agro on specific ones. I ended up making the pet attack a separate button for more control.

I can see the macros being nice in dungeons though to avoid having to keep telling your pet to attack. I wish there was a way to tell the pet to attack my target if not already engaged.

## Post 66325 by Adnoctum — 2023-09-22T04:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66325#p66325 | page 1 | era: pre-1.18.1 -->

stop using pet attack macro binde attack and passive to mousewheel  scroll up for attack and down for passive . you will never again have a pet pull acident and you have full controll of pet. and then just ctrl up/down for camera..

## Post 114034 by Atsuki — 2024-12-23T15:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114034#p114034 | page 1 | era: pre-1.18.1 -->

I disagree with Adnoctum here: "stop using attack macro binds, because accidents happen!"

I bind petattack to my usual opener and keep a "pet stop attack" macro just in case...
/run PetStopAttack()
/run PetDefensiveMode()
/run PetFollow()

this will make your pet stop attacking, even mid cast, and follow you instead. Switch PetDefensiveMode() to PetPassiveMode() if you prefer

## Post 116761 by Jmgibson1981 — 2025-01-15T00:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116761#p116761 | page 1 | era: pre-1.18.1 -->

forget the in  game macro interface. lua file / mod style for the win. Granted this one specifically relies on some of my own functions but you aren't limited by the in game macro ui.
Code: Select all

```
function WarlockPetSkinMACRO(drinkslot, foodslot, hearthslot, wandactionbutton)
if drinkslot == "help" then
local function lockprint(text)
DEFAULT_CHAT_FRAME:AddMessage(text)
end

lockprint("Usage:")
lockprint("Mod Ctrl = Dismiss Pet")
lockprint("Mod Alt Combat = Health Funnel")
lockprint("Mod Alt = Use Hearthstone (* hearthstone)")
lockprint("Mod Shift = Demon Armor / Unending Breath")
lockprint("Default Friendly Target = Fire Shield (**)")
lockprint("Default Aggro Target = Send pet (* start wand)")
lockprint("No mod and no valid target = Drink")
lockprint("No mod and no valid target if Drink active = Eat")
lockprint("--")
lockprint("* = Based on action button location")
lockprint("** = Requires Imp")
return
end

 -- dismiss pet as called
if IsControlKeyDown() then
if HasPetUI() then
PetDismiss()
return
end
end

 -- alt key, combat heals pet
if IsAltKeyDown() then
if UnitAffectingCombat("player") == 1 then
CastSpellByName("Health Funnel")
else
UseAction(hearthslot)
end
return
end

if IsShiftKeyDown() then
if CheckBuffRemain("Shadow", "RagingScream", "player") < 300 then
CastSpellByName("Demon Armor")
else
if UnitCanCooperate("player", "target") then
CastSpellByName("Unending Breath")
else
if CheckBuffRemain("Shadow", "DemonBreath", "player") < 120 then
CastSpellByName("Unending Breath", "player")
end
end
end
return
end

 -- friendly target cast flame shield on them if pet is imp
if UnitCanCooperate("player", "target") then
local pettype = UnitCreatureFamily("pet")
if pettype == "Imp" then
CastSpellByName("Fire Shield")
end
return
end

if UnitCanAttack("player", "target") and wandactionbutton > 0 then
wandStart(wandactionbutton)
end

 -- if have pet send attack / pull back. returns only on attack mode. default is passive
if HasPetUI() then
if PetAttackMACRO() then
return
end
end

 -- check status of food and drink. activate as needed
local drinkexist = CheckBuffRemain("INV", "Drink", "player")
if drinkexist == 0 then
if UnitMana("player") < UnitManaMax("player") then
UseAction(drinkslot)
return
end
end

local foodexist = CheckBuffRemain("INV", "Fork&Knife", "player")
if foodexist == 0 then
if UnitHealth("player") < UnitHealthMax("player") then
UseAction(foodslot)
return
end
end
end

function PetAttackMACRO()
if UnitCanAttack("player", "target") then
PetAttack()
return true
end
PetPassiveMode()
return false
end
```

