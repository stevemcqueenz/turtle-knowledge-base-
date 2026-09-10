---
title: "Warlock macros collection"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15629"
topic_id: 15629
forum_id: 46
forum: "Warlock"
author: "Ulukay"
author_authority: "player"
posted: "2024-11-06T14:04:00Z"
last_post: "2025-09-23T12:49:00Z"
post_count: 30
pages: 1
fetched: "2026-09-10T08:15:59Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Warlock macros collection

## Post 106702 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-06T14:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106702#p106702 | page 1 | era: pre-1.18.1 -->

if there is mana then [Drain Life] else [Life Tap][Life Tap][Life Tap][Life Tap]   dead_turtle_head

## Post 106703 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-06T14:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106703#p106703 | page 1 | era: pre-1.18.1 -->

-=Corruption+Immolate=- /script local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitDebuff(target,ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if GotDebuff("Spell_Shadow_AbominationExplosion") then CastSpellByName("Immolate"); else CastSpellByName("Corruption"); end;

 -=Immolate+Corruption=- /script local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitDebuff(target,ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if GotDebuff("Spell_Fire_Immolation") then CastSpellByName("Corruption"); else CastSpellByName("Immolate"); end;

## Post 106704 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-06T14:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106704#p106704 | page 1 | era: pre-1.18.1 -->

-=Shadowburn+Shadow Bolt=-
Type and Rank depending on the target's health and player's mana (by checking the Cataclysm talent).  /script local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell and spellRank==rank then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;local UL,UH,PM=UnitLevel,0,0;local _,_,_,_,TR = GetTalentInfo(3, 2);TR=(100-TR)/100;if UnitExists("target") then UH=UnitHealth("target");end;PM=UnitMana("player");if nil then CastSpellByName("Shadow Bolt"); end;if UH<=503 and PM>=365 and GotSpell("Shadowburn","Rank 6") then CastSpellByName("Shadowburn(Rank 6)"); else if UH<=393 and PM>=305*TR and GotSpell("Shadowburn","Rank 5") then CastSpellByName("Shadowburn(Rank 5)"); else if UH<=294 and PM>=245*TR and GotSpell("Shadowburn","Rank 4") then CastSpellByName("Shadowburn(Rank 4)"); else if UH<=211 and PM>=190*TR and GotSpell("Shadowburn","Rank 3") then CastSpellByName("Shadowburn(Rank 3)"); else if UH<=132 and PM>=130*TR and GotSpell("Shadowburn","Rank 2") then CastSpellByName("Shadowburn(Rank 2)"); else if UH<=100 and PM>=105*TR and GotSpell("Shadowburn","Rank 1") then CastSpellByName("Shadowburn(Rank 1)"); else if PM>=380*TR and GotSpell("Shadow Bolt","Rank 10") then CastSpellByName("Shadow Bolt(Rank 10)"); else if PM>=370*TR and GotSpell("Shadow Bolt","Rank 9") then CastSpellByName("Shadow Bolt(Rank 9)"); else if PM>=315*TR and GotSpell("Shadow Bolt","Rank 8") then CastSpellByName("Shadow Bolt(Rank 8)"); else if PM>=265*TR and GotSpell("Shadow Bolt","Rank 7") then CastSpellByName("Shadow Bolt(Rank 7)"); else if PM>=210*TR and GotSpell("Shadow Bolt","Rank 6") then CastSpellByName("Shadow Bolt(Rank 6)"); else if PM>=160*TR and GotSpell("Shadow Bolt","Rank 5") then CastSpellByName("Shadow Bolt(Rank 5)"); else if PM>=110*TR and GotSpell("Shadow Bolt","Rank 4") then CastSpellByName("Shadow Bolt(Rank 4)"); else if PM>=70*TR and GotSpell("Shadow Bolt","Rank 3") then CastSpellByName("Shadow Bolt(Rank 3)"); else if PM>=40*TR and GotSpell("Shadow Bolt","Rank 2") then CastSpellByName("Shadow Bolt(Rank 2)"); else if PM>=25*TR and GotSpell("Shadow Bolt","Rank 1") then CastSpellByName("Shadow Bolt(Rank 1)"); else CastSpellByName("Shadow Bolt"); end;end;end;end;end;end;end;end;end;end;end;end;end;end;end;end;

 -=Shadowburn + (Shadow Trance = Shadow Bolt) + Searing Pain=-  /script local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell and spellRank==rank then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local UL,UH,PM=UnitLevel,0,0;local _,_,_,_,TR = GetTalentInfo(3, 2);TR=(100-TR)/100;if UnitExists("target") then UH=UnitHealth("target");end;PM=UnitMana("player");if nil then CastSpellByName("Searing Pain"); end;if UH<=503 and PM>=365 and GotSpell("Shadowburn","Rank 6") then CastSpellByName("Shadowburn(Rank 6)"); else if UH<=393 and PM>=305*TR and GotSpell("Shadowburn","Rank 5") then CastSpellByName("Shadowburn(Rank 5)"); else if UH<=294 and PM>=245*TR and GotSpell("Shadowburn","Rank 4") then CastSpellByName("Shadowburn(Rank 4)"); else if UH<=211 and PM>=190*TR and GotSpell("Shadowburn","Rank 3") then CastSpellByName("Shadowburn(Rank 3)"); else if UH<=132 and PM>=130*TR and GotSpell("Shadowburn","Rank 2") then CastSpellByName("Shadowburn(Rank 2)"); else if UH<=100 and PM>=105*TR and GotSpell("Shadowburn","Rank 1") then CastSpellByName("Shadowburn(Rank 1)"); else if GotBuff("Spell_Shadow_Twilight") then if PM>=380*TR and GotSpell("Shadow Bolt","Rank 10") then CastSpellByName("Shadow Bolt(Rank 10)"); else if PM>=370*TR and GotSpell("Shadow Bolt","Rank 9") then CastSpellByName("Shadow Bolt(Rank 9)"); else if PM>=315*TR and GotSpell("Shadow Bolt","Rank 8") then CastSpellByName("Shadow Bolt(Rank 8)"); else if PM>=265*TR and GotSpell("Shadow Bolt","Rank 7") then CastSpellByName("Shadow Bolt(Rank 7)"); else if PM>=210*TR and GotSpell("Shadow Bolt","Rank 6") then CastSpellByName("Shadow Bolt(Rank 6)"); else if PM>=160*TR and GotSpell("Shadow Bolt","Rank 5") then CastSpellByName("Shadow Bolt(Rank 5)"); else if PM>=110*TR and GotSpell("Shadow Bolt","Rank 4") then CastSpellByName("Shadow Bolt(Rank 4)"); else if PM>=70*TR and GotSpell("Shadow Bolt","Rank 3") then CastSpellByName("Shadow Bolt(Rank 3)"); else if PM>=40*TR and GotSpell("Shadow Bolt","Rank 2") then CastSpellByName("Shadow Bolt(Rank 2)"); else if PM>=25*TR and GotSpell("Shadow Bolt","Rank 1") then CastSpellByName("Shadow Bolt(Rank 1)"); else CastSpellByName("Shadow Bolt"); end;end;end;end;end;end;end;end;end;end;else if PM>=168*TR and GotSpell("Searing Pain","Rank 6") then CastSpellByName("Searing Pain(Rank 6)"); else if PM>=141*TR and GotSpell("Searing Pain","Rank 5") then CastSpellByName("Searing Pain(Rank 5)"); else if PM>=118*TR and GotSpell("Searing Pain","Rank 4") then CastSpellByName("Searing Pain(Rank 4)"); else if PM>=91*TR and GotSpell("Searing Pain","Rank 3") then CastSpellByName("Searing Pain(Rank 3)"); else if PM>=68*TR and GotSpell("Searing Pain","Rank 2") then CastSpellByName("Searing Pain(Rank 2)"); else if PM>=45*TR and GotSpell("Searing Pain","Rank 1") then CastSpellByName("Searing Pain(Rank 1)"); else CastSpellByName("Searing Pain"); end;end;end;end;end;end;end;end;end;end;end;end;end;

*Last edited by Ulukay on Sun Dec 08, 2024 7:41 am, edited 1 time in total.*

## Post 106706 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-06T14:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106706#p106706 | page 1 | era: pre-1.18.1 -->

-=Fel Domination and Summon demmon=- SuperMacro addon required
With ALT
 -=Summon Imp + Fel Domination=- /script if IsAltKeyDown()~=1 or buffed("Fel Domination")=="buff" then CastSpellByName("Summon Imp");else CastSpellByName("Fel Domination");end

 -=Summon Voidwalker + Fel Domination=- /script if IsAltKeyDown()~=1 or buffed("Fel Domination")=="buff" then CastSpellByName("Summon Voidwalker");else CastSpellByName("Fel Domination");end;

 -=Summon Succubus + Fel Domination=- /script if IsAltKeyDown()~=1 or buffed("Fel Domination")=="buff" then CastSpellByName("Summon Succubus");else CastSpellByName("Fel Domination");end;

 -=Summon Felhunter + Fel Domination=- /script if IsAltKeyDown()~=1 or buffed("Fel Domination")=="buff" then CastSpellByName("Summon Felhunter");else CastSpellByName("Fel Domination");end;

 -=-

 -=Fel Domination + Summon Imp=- /script if IsAltKeyDown()==1 and buffed("Fel Domination")~="buff" then CastSpellByName("Fel Domination");else CastSpellByName("Summon Imp");end

 -=Fel Domination + Summon Voidwalker=- /script if IsAltKeyDown()==1 and buffed("Fel Domination")~="buff" then CastSpellByName("Fel Domination");else CastSpellByName("Summon Voidwalker");end;

 -=Fel Domination + Summon Succubus=- /script if IsAltKeyDown()==1 and buffed("Fel Domination")~="buff" then CastSpellByName("Fel Domination");else CastSpellByName("Summon Succubus");end;

 -=Fel Domination + Summon Felhunter=- /script if IsAltKeyDown()==1 and buffed("Fel Domination")~="buff" then CastSpellByName("Fel Domination");else CastSpellByName("Summon Felhunter");end;

*Last edited by Ulukay on Sun Dec 08, 2024 7:41 am, edited 3 times in total.*

## Post 106707 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-06T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106707#p106707 | page 1 | era: pre-1.18.1 -->

-=Fel Domination and Summon demmon=- SuperMacro addon required
Without ALT
 -=Summon Imp + Fel Domination=- /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;if not GotSpell("Fel Domination") or GotBuff("Spell_Nature_RemoveCurse") then CastSpellByName("Summon Imp");else CastSpellByName("Fel Domination");end;

 -=Summon Voidwalker + Fel Domination=- /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;if not GotSpell("Fel Domination") or GotBuff("Spell_Nature_RemoveCurse") then CastSpellByName("Summon Voidwalker");else CastSpellByName("Fel Domination");end;

 -=Summon Succubus + Fel Domination=- /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;if not GotSpell("Fel Domination") or GotBuff("Spell_Nature_RemoveCurse") then CastSpellByName("Summon Succubus");else CastSpellByName("Fel Domination");end;

 -=Summon Felhunter + Fel Domination=- /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;if not GotSpell("Fel Domination") or GotBuff("Spell_Nature_RemoveCurse") then CastSpellByName("Summon Felhunter");else CastSpellByName("Fel Domination");end;

 -=Fel Domination + Summon Imp=- /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;if GotSpell("Fel Domination") and not GotBuff("Spell_Nature_RemoveCurse") then CastSpellByName("Fel Domination");else CastSpellByName("Summon Imp");end;

 -=Fel Domination + Summon Voidwalker=- /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;if GotSpell("Fel Domination") and not GotBuff("Spell_Nature_RemoveCurse") then CastSpellByName("Fel Domination");else CastSpellByName("Summon Voidwalker");end;

 -=Fel Domination + Summon Succubus=- /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;if GotSpell("Fel Domination") and not GotBuff("Spell_Nature_RemoveCurse") then CastSpellByName("Fel Domination");else CastSpellByName("Summon Succubus");end;

 -=Fel Domination + Summon Felhunter=- /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;if GotSpell("Fel Domination") and not GotBuff("Spell_Nature_RemoveCurse") then CastSpellByName("Fel Domination");else CastSpellByName("Summon Felhunter");end;

*Last edited by Ulukay on Sun Dec 08, 2024 7:41 am, edited 1 time in total.*

## Post 106708 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-06T14:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106708#p106708 | page 1 | era: pre-1.18.1 -->

-=Warlock Stone=-
 -=Create and use Felstone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"inv_misc_gem_felstone") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then CastSpellByName("Create Felstone");end;end;

 -=Create and use Firestone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"INV_Ammo_FireTar") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then CastSpellByName("Create Firestone");end;end;

 -=Create and use Spellstone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"INV_Misc_Gem_Sapphire_01") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then CastSpellByName("Create Spellstone");end;end;

 -=Create and use Wrathstone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"INV_Misc_Gem_Bloodstone_02") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then CastSpellByName("Create Wrathstone");end;end;

*Last edited by Ulukay on Sun Dec 08, 2024 7:42 am, edited 1 time in total.*

## Post 107985 by Sharders — 2024-11-15T02:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107985#p107985 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Wed Nov 06, 2024 2:12 pm**
> -=Warlock Stone=-
>  -=Create and use Felstone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"inv_misc_gem_felstone") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then CastSpellByName("Create Felstone");end;end;
>
>
>   -=Create and use Firestone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"INV_Ammo_FireTar") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then CastSpellByName("Create Firestone");end;end;
>
>
>   -=Create and use Spellstone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"INV_Misc_Gem_Sapphire_01") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then CastSpellByName("Create Spellstone");end;end;
>
>
>   -=Create and use Wrathstone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"INV_Misc_Gem_Bloodstone_02") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then CastSpellByName("Create Wrathstone");end;end;

loves this.. replace the keyword for health stone or soulstone also works?

## Post 108270 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-17T10:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108270#p108270 | page 1 | era: pre-1.18.1 -->

> **Sharders wrote: Fri Nov 15, 2024 2:04 am**
> loves this.. replace the keyword for health stone or soulstone also works?

No, it's a little more complicated.
I think this should work.
 -=Create and use Healthstone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;local function GotSpell(spell) local ix,spellName,spellRank;for ix=1,200 do spellName=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then return ix;end;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"INV_Stone_04") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then if GotSpell("Create Healthstone (Major)") then CastSpell(GotSpell("Create Healthstone (Major)"),1);else if GotSpell("Create Healthstone (Greater)") then CastSpell(GotSpell("Create Healthstone (Greater)"),1);else if GotSpell("Create Healthstone") then CastSpell(GotSpell("Create Healthstone"),1);else if GotSpell("Create Healthstone (Lesser)") then CastSpell(GotSpell("Create Healthstone (Lesser)"),1);else if GotSpell("Create Healthstone (Minor)") then CastSpell(GotSpell("Create Healthstone (Minor)"),1);end;end;end;end;end;end;end;if nil then CastSpellByName("Create Healthstone (Major)");CastSpellByName("Create Healthstone (Greater)");CastSpellByName("Create Healthstone");CastSpellByName("Create Healthstone (Lesser)");CastSpellByName("Create Healthstone (Minor)");end;

 -=Create and use Soulstone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;local function GotSpell(spell) local ix,spellName,spellRank;for ix=1,200 do spellName=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then return ix;end;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"INV_Misc_Orb_04") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then if GotSpell("Create Soulstone (Major)") then CastSpell(GotSpell("Create Soulstone (Major)"),1);else if GotSpell("Create Soulstone (Greater)") then CastSpell(GotSpell("Create Soulstone (Greater)"),1);else if GotSpell("Create Soulstone") then CastSpell(GotSpell("Create Soulstone"),1);else if GotSpell("Create Soulstone (Lesser)") then CastSpell(GotSpell("Create Soulstone (Lesser)"),1);else if GotSpell("Create Soulstone (Minor)") then CastSpell(GotSpell("Create Soulstone (Minor)"),1);end;end;end;end;end;end;end;if nil then CastSpellByName("Create Soulstone (Major)");CastSpellByName("Create Soulstone (Greater)");CastSpellByName("Create Soulstone");CastSpellByName("Create Soulstone (Lesser)");CastSpellByName("Create Soulstone (Minor)");end;

I had to increase the script to get around the problem, since for some reason calling a spell by name does not work - CastSpellByName("Create Soulstone (Minor)") Maybe someone knows why?

## Post 108415 by Sharders — 2024-11-18T05:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108415#p108415 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Sun Nov 17, 2024 10:25 am**
> > **Sharders wrote: Fri Nov 15, 2024 2:04 am**
> > loves this.. replace the keyword for health stone or soulstone also works?
>
>   No, it's a little more complicated.
>  I think this should work.
>  -=Create and use Healthstone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;local function GotSpell(spell) local ix,spellName,spellRank;for ix=1,200 do spellName=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then return ix;end;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"INV_Stone_04") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then if GotSpell("Create Healthstone (Major)") then CastSpell(GotSpell("Create Healthstone (Major)"),1);else if GotSpell("Create Healthstone (Greater)") then CastSpell(GotSpell("Create Healthstone (Greater)"),1);else if GotSpell("Create Healthstone") then CastSpell(GotSpell("Create Healthstone"),1);else if GotSpell("Create Healthstone (Lesser)") then CastSpell(GotSpell("Create Healthstone (Lesser)"),1);else if GotSpell("Create Healthstone (Minor)") then CastSpell(GotSpell("Create Healthstone (Minor)"),1);end;end;end;end;end;end;end;if nil then CastSpellByName("Create Healthstone (Major)");CastSpellByName("Create Healthstone (Greater)");CastSpellByName("Create Healthstone");CastSpellByName("Create Healthstone (Lesser)");CastSpellByName("Create Healthstone (Minor)");end;
>
>
>   -=Create and use Soulstone=- /script local ix,iz,it,ta=0,0;if CursorHasItem() then while(iz<5)do if not GetContainerItemInfo(iz,ix) then PickupContainerItem(iz,ix);break;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;end;local function GotSpell(spell) local ix,spellName,spellRank;for ix=1,200 do spellName=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then return ix;end;end;end;end;if not CursorHasItem() then iz=0;ix=0;while(iz<5)do it=GetContainerItemInfo(iz,ix);if it then if string.find(it,"INV_Misc_Orb_04") then UseContainerItem(iz,ix);break;end;end;if ix<24 then ix=ix+1;else iz=iz+1;ix=0;end;end;if iz==5 then if GotSpell("Create Soulstone (Major)") then CastSpell(GotSpell("Create Soulstone (Major)"),1);else if GotSpell("Create Soulstone (Greater)") then CastSpell(GotSpell("Create Soulstone (Greater)"),1);else if GotSpell("Create Soulstone") then CastSpell(GotSpell("Create Soulstone"),1);else if GotSpell("Create Soulstone (Lesser)") then CastSpell(GotSpell("Create Soulstone (Lesser)"),1);else if GotSpell("Create Soulstone (Minor)") then CastSpell(GotSpell("Create Soulstone (Minor)"),1);end;end;end;end;end;end;end;if nil then CastSpellByName("Create Soulstone (Major)");CastSpellByName("Create Soulstone (Greater)");CastSpellByName("Create Soulstone");CastSpellByName("Create Soulstone (Lesser)");CastSpellByName("Create Soulstone (Minor)");end;
>
>
>   I had to increase the script to get around the problem, since for some reason calling a spell by name does not work - CastSpellByName("Create Soulstone (Minor)") Maybe someone knows why?

woh, far more complicate
thanks

## Post 108747 by Darkabom — 2024-11-19T21:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108747#p108747 | page 1 | era: pre-1.18.1 -->

Here's a simple macro that casts an existing Soulstone on a targeted player and announces it in party and raid chat (no addon needed). The only requirement is that four of your bags have 16 slots:

/run for b=0,4 do for s=1,16 do n=GetContainerItemLink(b,s);if n and string.find(n,"Major Soulstone") then UseContainerItem(b,s);end;end;end;

/party Casting Soulstone on %t.
/raid Casting Soulstone on %t.

This is for the max rank of Soulstone. Simply change the "Major Soulstone" to the correct version for your level if you are below level 60.

*Last edited by Darkabom on Tue Nov 19, 2024 9:50 pm, edited 1 time in total.*

## Post 108748 by Darkabom — 2024-11-19T21:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108748#p108748 | page 1 | era: pre-1.18.1 -->

Here's a banish macro that uses the SHIFT key. You use this macro by combining your Banish key with the SHIFT key. Without the SHIFT key being pressed, Banish Rank 2 is cast. When SHIFT is pressed, Banish Rank 1 is cast (no addon needed):

/run local s=IsShiftKeyDown() n=CastSpellByName if(s)then n("Banish(Rank 1)")else n("Banish(Rank 2)");end

*Last edited by Darkabom on Tue Nov 19, 2024 9:53 pm, edited 1 time in total.*

## Post 108750 by Darkabom — 2024-11-19T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108750#p108750 | page 1 | era: pre-1.18.1 -->

Here are some warlock demon macros (no addon needed):

Create a macro called PET1 (or whatever you prefer) and add the following to it:

/cast Devour Magic
/cast Consume Shadows
/cast Soothing Kiss
/cast Fire Shield

The correct abilities will activate depending on which demon you have out.

Create a macro called PET2 (or whatever) and add the following to it:

/cast Spell Lock
/cast Seduction
/cast Sacrifice

Now you have most (common) demon abilities on two key presses. You can add other abilities as needed.

Here's one for Seduce that casts Seduce on the first key press (whatever key Seduce is bound to for you), then stops Seduce when that same key is pressed again:

/run if UnitExists("target") then CastSpellByName("Seduction") end if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetFollow() PetStopAttack() end

Here's one that sends your demon in when the Attack key is pressed ("F" key for me), then recalls your demon on the second keypress (useful for when you want to pull your demon back before it reaches the target):

/script if UnitExists("target") then if a==0 then PetAttack(target) a=1 else if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetFollow("YOURNAME") a=0 else PetAttack(target) end;end; else PetFollow("YOURNAME") a=0 end

Make sure to substitute your character name in place of "YOURNAME". Don't remove the quotes around "YOURNAME".

## Post 108819 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-20T02:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108819#p108819 | page 1 | era: pre-1.18.1 -->

> **Darkabom wrote: Tue Nov 19, 2024 9:46 pm**
> Here's one that sends your demon in when the Attack key is pressed ("F" key for me), then recalls your demon on the second keypress (useful for when you want to pull your demon back before it reaches the target):
>
>  /script if UnitExists("target") then if a==0 then PetAttack(target) a=1 else if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetFollow("YOURNAME") a=0 else PetAttack(target) end;end; else PetFollow("YOURNAME") a=0 end
>
>  Make sure to substitute your character name in place of "YOURNAME". Don't remove the quotes around "YOURNAME".

PetFollow doesn't require a name, it requires PetFollow(), but putting anything in there won't change anything.
Besides making no sense, this macro can cause errors in other addons and macros because it uses the global variable "a".
Before you do copy-paste from other sites, it would be worth checking this out.

## Post 109511 by Ededdnedy — 2024-11-23T12:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109511#p109511 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Wed Nov 06, 2024 2:07 pm**
> -=Shadowburn+Shadow Bolt=-
>  Type and Rank depending on the target's health and player's mana (by checking the Cataclysm talent). /script local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell and spellRank==rank then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;local UL,UH,PM=UnitLevel,0,0;local _,_,_,_,TR = GetTalentInfo(3, 2);TR=(100-TR)/100;if UnitExists("target") then UH=UnitHealth("target");end;PM=UnitMana("player");if UH<=503 and PM>=365 and GotSpell("Shadowburn","Rank 6") then CastSpellByName("Shadowburn(Rank 6)"); else if UH<=393 and PM>=305*TR and GotSpell("Shadowburn","Rank 5") then CastSpellByName("Shadowburn(Rank 5)"); else if UH<=294 and PM>=245*TR and GotSpell("Shadowburn","Rank 4") then CastSpellByName("Shadowburn(Rank 4)"); else if UH<=211 and PM>=190*TR and GotSpell("Shadowburn","Rank 3") then CastSpellByName("Shadowburn(Rank 3)"); else if UH<=132 and PM>=130*TR and GotSpell("Shadowburn","Rank 2") then CastSpellByName("Shadowburn(Rank 2)"); else if UH<=100 and PM>=105*TR and GotSpell("Shadowburn","Rank 1") then CastSpellByName("Shadowburn(Rank 1)"); else if PM>=380*TR and GotSpell("Shadow Bolt","Rank 10") then CastSpellByName("Shadow Bolt(Rank 10)"); else if PM>=370*TR and GotSpell("Shadow Bolt","Rank 9") then CastSpellByName("Shadow Bolt(Rank 9)"); else if PM>=315*TR and GotSpell("Shadow Bolt","Rank 8") then CastSpellByName("Shadow Bolt(Rank 8)"); else if PM>=265*TR and GotSpell("Shadow Bolt","Rank 7") then CastSpellByName("Shadow Bolt(Rank 7)"); else if PM>=210*TR and GotSpell("Shadow Bolt","Rank 6") then CastSpellByName("Shadow Bolt(Rank 6)"); else if PM>=160*TR and GotSpell("Shadow Bolt","Rank 5") then CastSpellByName("Shadow Bolt(Rank 5)"); else if PM>=110*TR and GotSpell("Shadow Bolt","Rank 4") then CastSpellByName("Shadow Bolt(Rank 4)"); else if PM>=70*TR and GotSpell("Shadow Bolt","Rank 3") then CastSpellByName("Shadow Bolt(Rank 3)"); else if PM>=40*TR and GotSpell("Shadow Bolt","Rank 2") then CastSpellByName("Shadow Bolt(Rank 2)"); else if PM>=25*TR and GotSpell("Shadow Bolt","Rank 1") then CastSpellByName("Shadow Bolt(Rank 1)"); else CastSpellByName("Shadow Bolt"); end;end;end;end;end;end;end;end;end;end;end;end;end;end;end;end;

This addon made my client crash.  Have SuperWoW and Roid-Macros installed.

## Post 109513 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-23T12:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109513#p109513 | page 1 | era: pre-1.18.1 -->

> **Ededdnedy wrote: Sat Nov 23, 2024 12:07 pm**
> This addon made my client crash.  Have SuperWoW and Roid-Macros installed.

I thought it was obvious. But Roid-Macros is not required.

## Post 111124 by Darkabom — 2024-12-03T18:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111124#p111124 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Wed Nov 20, 2024 2:52 am**
> > **Darkabom wrote: Tue Nov 19, 2024 9:46 pm**
> > Here's one that sends your demon in when the Attack key is pressed ("F" key for me), then recalls your demon on the second keypress (useful for when you want to pull your demon back before it reaches the target):
> >
> >  /script if UnitExists("target") then if a==0 then PetAttack(target) a=1 else if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetFollow("YOURNAME") a=0 else PetAttack(target) end;end; else PetFollow("YOURNAME") a=0 end
> >
> >  Make sure to substitute your character name in place of "YOURNAME". Don't remove the quotes around "YOURNAME".
>
>  PetFollow doesn't require a name, it requires PetFollow(), but putting anything in there won't change anything.
>  Besides making no sense, this macro can cause errors in other addons and macros because it uses the global variable "a".
>  Before you do copy-paste from other sites, it would be worth checking this out.

You may be right, but this macro works for me and I've had no issues with it.

BTW, I use every macro I provided in this thread.

## Post 111406 by Ulukay (Patch Note Conspiracy Theorist) — 2024-12-04T19:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111406#p111406 | page 1 | era: pre-1.18.1 -->

-=Warlock Stone=- v2

 -=Create and use Felstone=-  /script if not UseItemByName("Felstone") then CastSpellByName("Create Felstone");end;

 -=Create and use Firestone=-  /script if not UseItemByName("Firestone") then CastSpellByName("Create Firestone");end;

 -=Create and use Spellstone=-  /script if not UseItemByName("Spellstone") then CastSpellByName("Create Spellstone");end;

 -=Create and use Wrathstone=-  /script if not UseItemByName("Wrathstone") then CastSpellByName("Create Wrathstone");end;

 -=Create and use Healthstone=-  /script local function GotSpell(spell) local ix,spellName,spellRank;for ix=1,200 do spellName=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then return ix;end;end;end;end;if not UseItemByName("Major Healthstone") and not UseItemByName("Greater Healthstone") and not UseItemByName("Healthstone") and not UseItemByName("Lesser Healthstone") and not UseItemByName("Minor Healthstone") then if GotSpell("Create Healthstone (Major)") then CastSpell(GotSpell("Create Healthstone (Major)"),1);else if GotSpell("Create Healthstone (Greater)") then CastSpell(GotSpell("Create Healthstone (Greater)"),1);else if GotSpell("Create Healthstone") then CastSpell(GotSpell("Create Healthstone"),1);else if GotSpell("Create Healthstone (Lesser)") then CastSpell(GotSpell("Create Healthstone (Lesser)"),1);else if GotSpell("Create Healthstone (Minor)") then CastSpell(GotSpell("Create Healthstone (Minor)"),1);end;end;end;end;end;end;if nil then CastSpellByName("Create Healthstone (Major)");CastSpellByName("Create Healthstone (Greater)");CastSpellByName("Create Healthstone");CastSpellByName("Create Healthstone (Lesser)");CastSpellByName("Create Healthstone (Minor)");end;

 -=Create and use Soulstone=-  /script local function GotSpell(spell) local ix,spellName,spellRank;for ix=1,200 do spellName=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then return ix;end;end;end;end;if not UseItemByName("Major Soulstone") and not UseItemByName("Greater Soulstone") and not UseItemByName("Soulstone") and not UseItemByName("Lesser Soulstone") and not UseItemByName("Minor Soulstone") then if GotSpell("Create Soulstone (Major)") then CastSpell(GotSpell("Create Soulstone (Major)"),1);else if GotSpell("Create Soulstone (Greater)") then CastSpell(GotSpell("Create Soulstone (Greater)"),1);else if GotSpell("Create Soulstone") then CastSpell(GotSpell("Create Soulstone"),1);else if GotSpell("Create Soulstone (Lesser)") then CastSpell(GotSpell("Create Soulstone (Lesser)"),1);else if GotSpell("Create Soulstone (Minor)") then CastSpell(GotSpell("Create Soulstone (Minor)"),1);end;end;end;end;end;end;if nil then CastSpellByName("Create Soulstone (Major)");CastSpellByName("Create Soulstone (Greater)");CastSpellByName("Create Soulstone");CastSpellByName("Create Soulstone (Lesser)");CastSpellByName("Create Soulstone (Minor)");end;

## Post 111420 by Czajnastole — 2024-12-04T23:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111420#p111420 | page 1 | era: pre-1.18.1 -->

Finally, i've created a macro for SS/HS that shows a tooltip (with SuperMacro ofc). Thanks Ulukay
Main macro:  Code: Select all

```
/script if not UseItemByName("Major Soulstone") then CreateMajorSoulstone();end;
```

Extended LUA code in readable format:  Code: Select all

```
function GotSpell(spell)
for i = 1, 200 do
local spellName = GetSpellName(i, "spell")
if not spellName then return nil end
if spellName == spell then return i end
end
return nil
end

function CreateMajorSoulstone()
if not UseItemByName("Major Soulstone") then
local spellIndex = GotSpell("Create Soulstone (Major)")
if spellIndex then
CastSpell(spellIndex, 1)
else
CastSpellByName("Create Soulstone (Major)")
end
end
end
```

## Post 119112 by ejfadrigo — 2025-02-06T03:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119112#p119112 | page 1 | era: pre-1.18.1 -->

If you dont mind if I can request for Curses Combo, Like Curse of Agony + Curse of Recklessness or Curse of Agony + Curse of Weakness. And also is it possible to combine Demon Armor + stones (Felstone, WrathStone, Healtstone)

## Post 119281 by Ulukay (Patch Note Conspiracy Theorist) — 2025-02-07T21:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119281#p119281 | page 1 | era: pre-1.18.1 -->

> **ejfadrigo wrote: Thu Feb 06, 2025 3:00 am**
> If you dont mind if I can request for Curses Combo, Like Curse of Agony + Curse of Recklessness or Curse of Agony + Curse of Weakness. And also is it possible to combine Demon Armor + stones (Felstone, WrathStone, Healtstone)

Curse of Agony + Curse of Recklessness  /script local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitDebuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotDebuff("CurseOfSargeras") then CastSpellByName("Curse of Agony") else if not GotDebuff("UnholyStrength") then CastSpellByName("Curse of Recklessness") end;end;

Curse of Agony + Curse of Weakness  /script local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitDebuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotDebuff("CurseOfSargeras") then CastSpellByName("Curse of Agony") else if not GotDebuff("CurseOfMannoroth") then CastSpellByName("Curse of Weakness") end;end;

Demon Armor + Felstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Felstone") then CastSpellByName("Create Felstone");end;end;

Demon Armor + Firestone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Firestone") then CastSpellByName("Create Firestone");end;end;

Demon Armor + Spellstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Spellstone") then CastSpellByName("Create Spellstone");end;end;

Demon Armor + Wrathstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Wrathstone") then CastSpellByName("Create Wrathstone");end;end;

Demon Armor + Healthstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell) local ix,spellName,spellRank;for ix=1,200 do spellName=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then return ix;end;end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Major Healthstone") and not UseItemByName("Greater Healthstone") and not UseItemByName("Healthstone") and not UseItemByName("Lesser Healthstone") and not UseItemByName("Minor Healthstone") then if GotSpell("Create Healthstone (Major)") then CastSpell(GotSpell("Create Healthstone (Major)"),1);else if GotSpell("Create Healthstone (Greater)") then CastSpell(GotSpell("Create Healthstone (Greater)"),1);else if GotSpell("Create Healthstone") then CastSpell(GotSpell("Create Healthstone"),1);else if GotSpell("Create Healthstone (Lesser)") then CastSpell(GotSpell("Create Healthstone (Lesser)"),1);else if GotSpell("Create Healthstone (Minor)") then CastSpell(GotSpell("Create Healthstone (Minor)"),1);end;end;end;end;end;end;end;

## Post 119299 by ejfadrigo — 2025-02-08T02:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119299#p119299 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Fri Feb 07, 2025 9:08 pm**
> > **ejfadrigo wrote: Thu Feb 06, 2025 3:00 am**
> > If you dont mind if I can request for Curses Combo, Like Curse of Agony + Curse of Recklessness or Curse of Agony + Curse of Weakness. And also is it possible to combine Demon Armor + stones (Felstone, WrathStone, Healtstone)
>
>  Curse of Agony + Curse of Recklessness  /script local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitDebuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotDebuff("CurseOfSargeras") then CastSpellByName("Curse of Agony") else if not GotDebuff("UnholyStrength") then CastSpellByName("Curse of Recklessness") end;end;
>
>
>   Curse of Agony + Curse of Weakness  /script local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitDebuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotDebuff("CurseOfSargeras") then CastSpellByName("Curse of Agony") else if not GotDebuff("CurseOfMannoroth") then CastSpellByName("Curse of Weakness") end;end;
>
>
>   Demon Armor + Felstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Felstone") then CastSpellByName("Create Felstone");end;end;
>
>
>   Demon Armor + Firestone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Firestone") then CastSpellByName("Create Firestone");end;end;
>
>
>   Demon Armor + Spellstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Spellstone") then CastSpellByName("Create Spellstone");end;end;
>
>
>   Demon Armor + Wrathstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Wrathstone") then CastSpellByName("Create Wrathstone");end;end;
>
>
>   Demon Armor + Healthstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell) local ix,spellName,spellRank;for ix=1,200 do spellName=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then return ix;end;end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Major Healthstone") and not UseItemByName("Greater Healthstone") and not UseItemByName("Healthstone") and not UseItemByName("Lesser Healthstone") and not UseItemByName("Minor Healthstone") then if GotSpell("Create Healthstone (Major)") then CastSpell(GotSpell("Create Healthstone (Major)"),1);else if GotSpell("Create Healthstone (Greater)") then CastSpell(GotSpell("Create Healthstone (Greater)"),1);else if GotSpell("Create Healthstone") then CastSpell(GotSpell("Create Healthstone"),1);else if GotSpell("Create Healthstone (Lesser)") then CastSpell(GotSpell("Create Healthstone (Lesser)"),1);else if GotSpell("Create Healthstone (Minor)") then CastSpell(GotSpell("Create Healthstone (Minor)"),1);end;end;end;end;end;end;end;

Thank you so much...have a blessed day

## Post 119301 by ejfadrigo — 2025-02-08T04:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119301#p119301 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Fri Feb 07, 2025 9:08 pm**
> > **ejfadrigo wrote: Thu Feb 06, 2025 3:00 am**
> > If you dont mind if I can request for Curses Combo, Like Curse of Agony + Curse of Recklessness or Curse of Agony + Curse of Weakness. And also is it possible to combine Demon Armor + stones (Felstone, WrathStone, Healtstone)
>
>  Curse of Agony + Curse of Recklessness  /script local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitDebuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotDebuff("CurseOfSargeras") then CastSpellByName("Curse of Agony") else if not GotDebuff("UnholyStrength") then CastSpellByName("Curse of Recklessness") end;end;
>
>
>   Curse of Agony + Curse of Weakness  /script local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitDebuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotDebuff("CurseOfSargeras") then CastSpellByName("Curse of Agony") else if not GotDebuff("CurseOfMannoroth") then CastSpellByName("Curse of Weakness") end;end;
>
>
>   Demon Armor + Felstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Felstone") then CastSpellByName("Create Felstone");end;end;
>
>
>   Demon Armor + Firestone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Firestone") then CastSpellByName("Create Firestone");end;end;
>
>
>   Demon Armor + Spellstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Spellstone") then CastSpellByName("Create Spellstone");end;end;
>
>
>   Demon Armor + Wrathstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Wrathstone") then CastSpellByName("Create Wrathstone");end;end;
>
>
>   Demon Armor + Healthstone  /script local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotSpell(spell) local ix,spellName,spellRank;for ix=1,200 do spellName=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell then return ix;end;end;end;end;if not GotBuff("RagingScream") then CastSpellByName("Demon Armor") else if not UseItemByName("Major Healthstone") and not UseItemByName("Greater Healthstone") and not UseItemByName("Healthstone") and not UseItemByName("Lesser Healthstone") and not UseItemByName("Minor Healthstone") then if GotSpell("Create Healthstone (Major)") then CastSpell(GotSpell("Create Healthstone (Major)"),1);else if GotSpell("Create Healthstone (Greater)") then CastSpell(GotSpell("Create Healthstone (Greater)"),1);else if GotSpell("Create Healthstone") then CastSpell(GotSpell("Create Healthstone"),1);else if GotSpell("Create Healthstone (Lesser)") then CastSpell(GotSpell("Create Healthstone (Lesser)"),1);else if GotSpell("Create Healthstone (Minor)") then CastSpell(GotSpell("Create Healthstone (Minor)"),1);end;end;end;end;end;end;end;

How about:
Stone + Demon Armor, got confused since all the icon start with demon armor..thank you so much for your help

## Post 119322 by ejfadrigo — 2025-02-08T14:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119322#p119322 | page 1 | era: pre-1.18.1 -->

When you cast the spell does it select the highest skill level in curses?

## Post 119594 by Ulukay (Patch Note Conspiracy Theorist) — 2025-02-11T07:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119594#p119594 | page 1 | era: pre-1.18.1 -->

> **ejfadrigo wrote: Sat Feb 08, 2025 2:42 pm**
> When you cast the spell does it select the highest skill level in curses?

The game system itself selects the maximum level of the spell if they have the same name. Exceptions of healing stones and stones of souls.

## Post 119595 by Ulukay (Patch Note Conspiracy Theorist) — 2025-02-11T07:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119595#p119595 | page 1 | era: pre-1.18.1 -->

> **ejfadrigo wrote: Sat Feb 08, 2025 4:06 am**
> How about:
>  Stone + Demon Armor, got confused since all the icon start with demon armor..thank you so much for your help

If you need the visibility that this is a stone, then you can write a false call at the beginning (after /script), for example: if nil the castspellbyname ("Create Felstone"); end; . This will not cause the operation, but will make the icon with the image of the stone.

## Post 119596 by Ulukay (Patch Note Conspiracy Theorist) — 2025-02-11T07:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119596#p119596 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Tue Feb 11, 2025 7:50 am**
> > **ejfadrigo wrote: Sat Feb 08, 2025 4:06 am**
> > How about:
> >  Stone + Demon Armor, got confused since all the icon start with demon armor..thank you so much for your help
>
>  Yes, somehow I did not think about displaying information   satisfied_turtle_head
>  If you need the visibility that this is a stone, then you can write a false call at the beginning (after /script), for example: if nil then CastSpellByName("Create Felstone");end; . This will not cause the operation, but will make the icon with the image of the stone.

## Post 119601 by Ulukay (Patch Note Conspiracy Theorist) — 2025-02-11T08:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119601#p119601 | page 1 | era: pre-1.18.1 -->

So it should be normal.
Felstone+Demon Armor  /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("felstone") then if not UseItemByName("Felstone") then CastSpellByName("Create Felstone");end;else if not GotBuff("RagingScream") then CastSpellByName("Demon Armor")end;end;

Firestone+Demon Armor  /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("FireTar") then if not UseItemByName("Firestone") then CastSpellByName("Create Firestone");end;else if not GotBuff("RagingScream") then CastSpellByName("Demon Armor")end;end;

Spellstone+Demon Armor  /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("Sapphire") then if not UseItemByName("Spellstone") then CastSpellByName("Create Spellstone");end;else if not GotBuff("RagingScream") then CastSpellByName("Demon Armor")end;end;

Wrathstone+Demon Armor  /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("Bloodstone") then if not UseItemByName("Wrathstone") then CastSpellByName("Create Wrathstone");end;else if not GotBuff("RagingScream") then CastSpellByName("Demon Armor")end;end;

## Post 120532 by ejfadrigo — 2025-02-20T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120532#p120532 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Tue Feb 11, 2025 8:09 am**
> So it should be normal.
>  Felstone+Demon Armor  /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("felstone") then if not UseItemByName("Felstone") then CastSpellByName("Create Felstone");end;else if not GotBuff("RagingScream") then CastSpellByName("Demon Armor")end;end;
>
>
>  Firestone+Demon Armor  /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("FireTar") then if not UseItemByName("Firestone") then CastSpellByName("Create Firestone");end;else if not GotBuff("RagingScream") then CastSpellByName("Demon Armor")end;end;
>
>
>  Spellstone+Demon Armor  /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("Sapphire") then if not UseItemByName("Spellstone") then CastSpellByName("Create Spellstone");end;else if not GotBuff("RagingScream") then CastSpellByName("Demon Armor")end;end;
>
>
>  Wrathstone+Demon Armor  /script local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;if not GotBuff("Bloodstone") then if not UseItemByName("Wrathstone") then CastSpellByName("Create Wrathstone");end;else if not GotBuff("RagingScream") then CastSpellByName("Demon Armor")end;end;

Thank you so much!!!

## Post 121823 by Asharu — 2025-03-06T00:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121823#p121823 | page 1 | era: pre-1.18.1 -->

I saw this on the wiki and modified it for my use - Running Aff, so a bit of Drain Soul = Filled ordinary bags with shards :(

Place your soul shard bag on the last slot and run this :

/run for b=0,**3** do for s=1,36 do n=GetContainerItemLink(b,s);if n and string.find(n,"Soul Shard") then PickupContainerItem(b,s);DeleteCursorItem();end;end;end;

Note: The underlined 3 is based on you having unlocked all bag slots - so basic backpack + 4 more slots (Keeping the soul bag in last slot). If you don't, modify this number down accordingly.

 **WARNING:** This WILL destroy Fel Soul Shards dropped from mobs in Felwood, so keep them in the bank or manually remove them while you're questing there.

## Post 152806 by Ashwhole (Barrens Chat Casualty) — 2025-09-23T12:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152806#p152806 | page 1 | era: pre-1.18.1 -->

Thx for this guide bro! Its so useful :)

