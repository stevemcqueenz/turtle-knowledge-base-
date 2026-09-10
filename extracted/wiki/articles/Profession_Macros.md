---
title: "Profession Macros"
url: "https://turtle-wow.fandom.com/wiki/Profession_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:25:13Z"
fetched: "2026-09-10T07:39:25Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Profession Macros

## <code>Merchant Item</code>
Buys 40 Arcane Powder
 <code>/run local function buy (n,q) for i=1,100 do if n==GetMerchantItemInfo(i) then BuyMerchantItem(i,q) end end end buy ("Arcane Powder",40);</code>

## Disenchant
Just mouse over the item you want to disenchant (in your bags only) and run the macro.
 <code>/run SpellStopTargeting(); local f=GetMouseFocus(); if strfind(tostring(f:GetName()), 'ContainerFrame') then CastSpellByName('Disenchant'); f:Click(); end SpellStopTargeting(); ClearCursor();</code>
The way I made it was for default ui, as bagnon uses its own frames. You just simply need to change it to what bagnon frames use.

Just mouse over a slot in the bags and type
 <code>/run DEFAULT_CHAT_FRAME:AddMessage(GetMouseFocus():GetName())</code>
..In this case.. you get something along the lines of 'BagnonItem19' or so.

So just replace 'ContainerFrame' with 'Bagnon',
 <code>/run SpellStopTargeting(); local f=GetMouseFocus(); if strfind(tostring(f:GetName()), 'Bagnon') then CastSpellByName('Disenchant'); f:Click(); end SpellStopTargeting(); ClearCursor();</code>

Or just simply remove the if statement which will allow it to be used in any frame which might cause unforeseen issues. (Will cause errors to appear on non-clickable/non-existent frames)
 <code>/run SpellStopTargeting(); local f=GetMouseFocus(); CastSpellByName('Disenchant'); f:Click(); SpellStopTargeting(); ClearCursor();</code>

## Fishing
Enchants Aquadynamic Fish Attractor to fishing pole
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Aquadynamic Fish Attractor")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()end end end end</code>

  -Toggle between the named rod and weapon**

While holding shift, toggles between the named rod and weapon. While not holding shift, casts fishing. It doesn't take offhands into account.
 <code>/run local p,w,z,c,u,l="Fishing Pole","Gnarled Short Staff",string,CastSpellByName,UseItemByName,GetInventoryItemLink("player",16)local s,e=z.find(l,"%[.+%]")l=z.sub(l,s+1,e-1)if IsShiftKeyDown() then if l~=p then u(p)else u(w)end else c("Fishing")end</code>

## Enchant
This perform the enchant or puts the enchant on your cursor. edit in name of enchant and don't remove the quotation marks.
 <code>/run local ench="Full name of enchant here" for i=1,GetNumCrafts() do if GetCraftInfo(i)==ench then DoCraft(i) return end end</code>

Mouseover enchant. While the enchanting window is open, whatever enchant is selected in the window, it will enchant the current item that the mouse is placed over.
 <code>/run CraftCreateButton:Click() GetMouseFocus():Click() StaticPopup1Button1:Click()</code>

## Skinning
Mouseover Skinning. Uses skinning if mouse is over dead target, else target nearest enemy, cast Shadow Bolt
 <code>/run if UnitIsDead("mouseover") then TargetUnit("mouseover") CastSpellByName("Skinning") else TargetNearestEnemy();CastSpellByName("Shadow Bolt")end</code>

## First Aid
Craft Linen Bandage. Edit First Aid and Linen Bandage if you need to craft something else.
 <code>/run CastSpellByName("First Aid") for r=1,GetNumTradeSkills() do if GetTradeSkillInfo(r) == "Linen Bandage" then DoTradeSkill(r,1) break end end CloseTradeSkill()</code>

## Sell grey junk
 <code>/run for bag=0,4,1 do for slot=1,GetContainerNumSlots(bag),1 do local name=GetContainerItemLink(bag,slot) if name and string.find(name,"ff9d9d9d") then DEFAULT_CHAT_FRAME:AddMessage("- Selling "..name) UseContainerItem(bag,slot) end end end</code>

## <code>Tracking</code>
Find Herbs, else Minerals
 <code>/run if n~= 1 then CastSpellByName("Find Herbs") n=1 else CastSpellByName("Find Minerals") n=0 ;end</code>

Find Minerals, else Herbs
 <code>/run local g,h=GetTrackingTexture(),"INV_Misc_Flower_02";if strfind(g,h)then CastSpellByName("Find Minerals")else CastSpellByName("Find Herbs")end</code>

Find Treasure/Minerals
 <code>/run local s,t,c={'Find Treasure','Find Minerals'},{'Racial_Dwarf_FindTreasure','Spell_Nature_Earthquake'},GetTrackingTexture()foreach(t,function(k,v)if not c or strfind(c,v) then CastSpellByName(k<getn(t)and s[k+1]or s[1]) end end)</code>
