---
title: "Shaman Macros"
url: "https://turtle-wow.fandom.com/wiki/Shaman_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-01-18T09:10:13Z"
fetched: "2026-09-10T07:39:37Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Shaman Macros

## Auto attack
uses a loop to check if attack is set to auto-repeat.
 <code>/run for i=1,120 do if IsCurrentAction(i) then return end end CastSpellByName("Attack")</code>

This one is decent enough but it is known to be unreliable if spammed.
 <code>/run if (not PlayerFrame.inCombat) then AttackTarget() end</code>

This one is more reliable. but it requires auto attack to be found on the action bar.
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end</code>

## Lightning Strike
If any shield (Water, Earth, Lightning) is active, then cast Lightning Strike, else cast Lightning Shield.
 /run local s={"WaterShield","SkinofEarth","LightningShield"}for i=1,27 do local t=UnitBuff("player",i)if t then for _,k in s do if strfind(t,k)then CastSpellByName("Lightning Strike")return end end end end CastSpellByName("Lightning Shield")

## Earth Shock
Earth Shock rank 1, max rank if clearcasting
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Shadow_ManaBurn" then x=1 end i=i+1 end if x==1 then CastSpellByName("Earth Shock")else CastSpellByName("Earth Shock(Rank 1)")end</code>

## Far Sight
Spammable Far Sight
 <code>/run if CastingBarFrame.channeling then if n~=1 then CancelPlayerBuff(GetPlayerBuff(0,"HELPFUL")) CancelPlayerBuff(GetPlayerBuff(1,"HELPFUL"))  n=1 else CastSpellByName("Far Sight") n=0 ;end; else CastSpellByName("Far Sight") end</code>

## Flame Shock
Flame Shock / Auto Attack
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z)end;end;end; CastSpellByName("Flame Shock") UIErrorsFrame:Hide()</code>

## Flametongue Weapon
Flametongue Weapon / Auto Attack
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z)end;end;end;hasMainHandEnchant =GetWeaponEnchantInfo()if  not hasMainHandEnchant then CastSpellByName("Flametongue Weapon")end UIErrorsFrame:Hide()</code>

## Frost Shock
This does Frost Shock if not on cooldown else it does Purge
 <code>/run local s="Frost Shock";local i=nil;for j=1,180 do local n=GetSpellName(j,BOOKTYPE_SPELL);if n and strfind(n,s) then i=j;break;end end if i then if GetSpellCooldown(i,BOOKTYPE_SPELL)<1 then CastSpellByName(s)else CastSpellByName("Purge")end end</code>

Frost Shock rank 1, max rank if clearcasting
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Shadow_ManaBurn" then x=1 end i=i+1 end if x==1 then CastSpellByName("Frost Shock")else CastSpellByName("Frost Shock(Rank 1)")end</code>

## Frostbrand Weapon
Frostbrand Weapon / Auto Attack
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z)end;end;end;hasMainHandEnchant =GetWeaponEnchantInfo()if  not hasMainHandEnchant then CastSpellByName("Frostbrand Weapon")end UIErrorsFrame:Hide()</code>

## Ghost Wolf
Cancel Ghost Wolf
 <code>/run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "SpiritWolf"))then CancelPlayerBuff(g(i))end i=i+1 end</code>

Cancel Ghost Wolf, cast Healing Wave on self
 <code>/run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "SpiritWolf"))then CancelPlayerBuff(g(i))end i=i+1 end CastSpellByName("Healing Wave",1)</code>

## Healing Wave
Healing Wave on friendly target, else cast Healing Wave on you
 <code>/run if UnitIsFriend("player", "target") then CastSpellByName("Healing Wave"); else CastSpellByName("Healing Wave", 1); end</code>

Healing Wave on mouse focused target
 <code>/run i=(GetMouseFocus().unit) if i then CastSpellByName("Healing Wave") SpellTargetUnit(i) else CastSpellByName("Healing Wave") end</code>

## Lightning Shield
Does Lightning Shield if the buff is missing
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Nature_LightningShield" then x=1 end i=i+1 end if x==0 then CastSpellByName("Lightning Shield")end</code>

## Nature's Swiftness
Nature's Swiftness/Healing wave
 <code>/run local x=0;for i=1,90 do if IsCurrentAction(i) then x=1 end end if x==0 then CastSpellByName("Nature's Swiftness");SpellStopCasting();CastSpellByName("Healing wave") end</code>

## Rockbiter Weapon
Rockbiter Weapon / Auto Attack
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z)end;end;end;hasMainHandEnchant =GetWeaponEnchantInfo()if  not hasMainHandEnchant then CastSpellByName("Rockbiter Weapon")end UIErrorsFrame:Hide()</code>

## Water Shield
Buff Water Shield if missing<syntaxhighlight lang="lua">
/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Ability_Shaman_WaterShield" then x=1 end i=i+1 end if x==0 then CastSpellByName("Water Shield")end
</syntaxhighlight>

## Weapon Oil
Enchant Brilliant Mana Oil on weapon
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Brilliant Mana Oil")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()ClearCursor()end end end end</code>

Enchant Brilliant Wizard Oil on weapon
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Brilliant Wizard Oil")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()end end end end</code>
