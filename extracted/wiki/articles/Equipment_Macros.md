---
title: "Equipment Macros"
url: "https://turtle-wow.fandom.com/wiki/Equipment_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:26:43Z"
fetched: "2026-09-10T07:38:44Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Equipment Macros

## Equip item
Equip the item named Dagger
 <code>/run for i=0,4 do for j=1,GetContainerNumSlots(i) do local l=GetContainerItemLink(i,j) if l and string.find(l,"Dagger") then PickupContainerItem(i,j) AutoEquipCursorItem() break end end end</code>

Equip the item named Dagger specifically in the offhand slot
 <code>/run for i=0,4 do for j=1,GetContainerNumSlots(i) do local l=GetContainerItemLink(i,j) if l and string.find(l,"Dagger") then PickupContainerItem(i,j) EquipCursorItem(17) break end end end</code>

## Quick-swap
Weapons/Shield quick-swap
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (string.find(n,"InsertMainHandName") or string.find(n,"InsertOffHandName"))then PickupContainerItem(b,s)EquipCursorItem(16, 17)break end end end</code>
One item got to be main hand/offhand only, and swap 16 for 17 if both weapons go into main hand slot.

Swap off hand's (Skull of Impending Doom and Misplaced Servo Arm)
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (string.find(n,"Skull of Impending Doom") or string.find(n,"Misplaced Servo Arm"))then PickupContainerItem(b,s)EquipCursorItem(17)break end end end</code>

## Show / hide
Show / hide Cloak
 <code>/run ShowCloak(not ShowingCloak())</code>

Show / hide Helm
 <code>/run ShowHelm(not ShowingHelm())</code>

## Strip all gear
**Strip all gear with durability**

For those times when you’re not in combat, but about to die anyway (like falling a long distance), this will at least protect your gear (or as much of it as there’s room for in your bags (your backpack will not be used)). Also useful at the right sort of parties. Optimizers can rearrange the slot list to put the most expensive to repair items first. As usual, it needs to be one (really long) line – be careful entering it, as it’s exactly 255 characters long.
 <code>/run ClearCursor()local k;for i=1,4 do for j=1,GetContainerNumSlots(i)do if(not GetContainerItemLink(i,j))then repeat k,l=next({1,3,5,6,7,8,9,10,16,17,18},k)if(not k)then return;end;PickupInventoryItem(l)until(CursorHasItem())PutItemInBag(i+19)end;end;end</code>

## Use Helmet
Use the equipped helmet
 <code>/run UseInventoryItem(1)</code>

## Use offhand
Uses the item equipped in the offhand slot
 <code>/run UseInventoryItem(17);</code>

Uses Skull of Impending Doom or cancels the Skull of Impending Doom effect
 /run UseInventoryItem(17);
 /run SpellStopCasting()
 /run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Spell_Magic_PolymorphChicken"))then CancelPlayerBuff(g(i))end i=i+1 end

## Use trinket
Uses the top and bottom trinket slot
 /run UseInventoryItem(13);
 /run UseInventoryItem(14);

Use the top trinket if no cooldown
 <code>/run if  GetInventoryItemCooldown("player", 13)==0 then UseInventoryItem(13)end</code> 

Stops casting spell and use both trinket slots if no cooldown
 /run if GetInventoryItemCooldown("player", 13) == 0 then UseInventoryItem(13); SpellStopCasting(); end
 /run if GetInventoryItemCooldown("player", 14) == 0 then UseInventoryItem(14); SpellStopCasting(); end

Trinket if no cooldown, else Shadow Word: Pain
 <code>/run local s=GetInventoryItemCooldown("player", 13) if s~=0 then CastSpellByName("Shadow Word: Pain") else UseInventoryItem(13) end</code>

## Use main hand
Use main hand if Haste effect from Crowd Pummeler is missing
 <code>/run i=0 m=0 while not (GetPlayerBuff(i)==-1) do if (strfind(GetPlayerBuffTexture(GetPlayerBuff(i)),"Spell_Nature_Invisibilty")) then m=1 end i=i+1 end if m==0 then UseInventoryItem(16); end</code>

## Weaponswap
this puts your main hand in the offhand slot, if there is already a weapon in the offhand slot it will switch them around
 <code>/run PickupInventoryItem(GetInventorySlotInfo("MainHandSlot"));PickupInventoryItem(GetInventorySlotInfo("SecondaryHandSlot"))</code>

This one swaps the main weapon with the off hand weapon
 <code>/run PickupInventoryItem(17); EquipCursorItem(16);</code>
