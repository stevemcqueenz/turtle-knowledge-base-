---
title: "Rogue Poison Macros"
url: "https://turtle-wow.fandom.com/wiki/Rogue_Poison_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:24:54Z"
fetched: "2026-09-10T07:39:31Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Rogue Poison Macros

## Instant poison VI
This will apply Instant poison VI on your mainhand if you press on no modifier, and on your offhand if shift is pressed
 <code>/run for i=0,4 do for j=1,18 do local h=GetContainerItemLink if not(h(i,j)==nil)then if strfind(h(i,j), "Instant Poison VI")then p=PickupInventoryItem UseContainerItem(i,j)if IsShiftKeyDown()then p(17)else p(16)end ReplaceEnchant()end end end end</code>

Instant Poison VI to mainhand
 <code>/run for bag = 0,4,1 do for slot = 1,16,1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"Instant Poison VI") then UseContainerItem(bag,slot); PickupInventoryItem(16); ReplaceEnchant(); ClearCursor(); end; end; end</code>

Instant Poison VI to offhand
 <code>/run for bag = 0,4,1 do for slot = 1,16,1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"Instant Poison VI") then UseContainerItem(bag,slot); PickupInventoryItem(17); ReplaceEnchant(); ClearCursor(); end; end; end</code>

## Deadly Poison
Deadly Poison V to mainhand
 <code>/run for bag = 0,4,1 do for slot = 1,16,1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"Deadly Poison V") then UseContainerItem(bag,slot); PickupInventoryItem(16); ReplaceEnchant(); ClearCursor(); end; end; end</code>

Deadly Poison V to offhand
 <code>/run for bag = 0,4,1 do for slot = 1,16,1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"Deadly Poison V") then UseContainerItem(bag,slot); PickupInventoryItem(17); ReplaceEnchant(); ClearCursor(); end; end; end</code>

## Crippling Poison
Crippling Poison II to mainhand
 <code>/run for bag = 0,4,1 do for slot = 1,16,1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"Crippling Poison II") then UseContainerItem(bag,slot); PickupInventoryItem(16); ReplaceEnchant(); ClearCursor(); end; end; end</code>

Crippling Poison II to offhand
 <code>/run for bag = 0,4,1 do for slot = 1,16,1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"Crippling Poison II") then UseContainerItem(bag,slot); PickupInventoryItem(17); ReplaceEnchant(); ClearCursor(); end; end; end</code>

## Mind-numbing Poison
Mind-numbing Poison III to main hand
 <code>/run for bag = 0,4,1 do for slot = 1,16,1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"Mind%-numbing Poison III") then UseContainerItem(bag,slot); PickupInventoryItem(16); ReplaceEnchant(); ClearCursor(); end; end; end</code>

Mind-numbing Poison III to offhand
 <code>/run for bag = 0,4,1 do for slot = 1,16,1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"Mind%-numbing Poison III") then UseContainerItem(bag,slot); PickupInventoryItem(17); ReplaceEnchant(); ClearCursor(); end; end; end</code>

## Wound Poison
Wound Poison IV to main hand
 <code>/run for bag = 0,4,1 do for slot = 1,16,1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"Wound Poison IV") then UseContainerItem(bag,slot); PickupInventoryItem(16); ReplaceEnchant(); ClearCursor(); end; end; end</code>

Wound Poison IV to offhand
 <code>/run for bag = 0,4,1 do for slot = 1,16,1 do local name = GetContainerItemLink(bag,slot); if name and string.find(name,"Wound Poison IV") then UseContainerItem(bag,slot); PickupInventoryItem(17); ReplaceEnchant(); ClearCursor(); end; end; end</code>
