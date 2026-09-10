---
title: "Warlock Macros"
url: "https://turtle-wow.fandom.com/wiki/Warlock_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-07-01T03:04:27Z"
fetched: "2026-09-10T07:39:58Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Warlock Macros

## Amplify Curse
Amplify Curse if cooldown is ready or Fear
 <code>/run local c,s=CastSpellByName,"Amplify Curse";local i=nil;for j=1,180 do local n=GetSpellName(j,BOOKTYPE_SPELL);if n and strfind(n,s) then i=j;break;end end if i then if GetSpellCooldown(i,BOOKTYPE_SPELL)<1 then c(s)else c("Curse of Agony")end end</code>

## Banish
Says what raid mark target you're Banishing
 <code>/run i=GetRaidTargetIndex("target");s={"Star","Circle","Diamond","Green","Moon","Square","Cross","Skull"};if UnitName("target") and i then SendChatMessage("Banishing "..s[i],"SAY",nil); end</code>

Banish / Fear
 <code>/run local CT = UnitCreatureType("target") if CT == "Demon" or CT == "Elemental" then CastSpellByName("Banish") else CastSpellByName("Fear") end</code>

## Castsequence
Siphon Life, CoA, Corruption
 <code>/run s={"Siphon Life","Curse of Agony","Corruption"} if not q then q=1 end CastSpellByName(s[q]) q=q+1 if q>table.getn(s) then q=1 end</code>

Siphon Life, CoA, Corruption, Immolate
 <code>/run local _gspells = { "Siphon Life", "Curse of Agony", "Corruption", "Immolate"} if GetSpellCooldown(4,"BOOKTYPE_SPELL")==0 then _gi=_gi and _gi > 0 and _gi or 1 CastSpellByName(_gspells[_gi]) _gi = math.mod(1+_gi, 1+table.getn(_gspells))end</code>

## Detect Inivisibility
Buff Detect Inivisibility, Unending Breath
 <code>/run local _gspells = { "Detect Invisibility", "Unending Breath"} if GetSpellCooldown(4,"BOOKTYPE_SPELL")==0 then _gi=_gi and _gi > 0 and _gi or 1 CastSpellByName(_gspells[_gi]) _gi = math.mod(1+_gi, 1+table.getn(_gspells))end</code>

## Curse of Agony
Curse of Agony and pet attack. If not set to passive or currently attacking.
 <code>/run local _,_,_,_,isActive=GetPetActionInfo(10) if not isActive and not GetUnitName("pettarget") then PetAttack() end
 /cast Curse of Agony</code>

## Curse of Tongues
Curse of Tongues if target got mana, else Curse of Weakness
 <code>/run if (UnitMana("target")>0) then CastSpellByName("Curse of Tongues") else CastSpellByName("Curse of Weakness") end</code>

## Death Coil
Death Coil if cooldown is ready or Fear
 <code>/run local c,s=CastSpellByName,"Death Coil";local i=nil;for j=1,180 do local n=GetSpellName(j,BOOKTYPE_SPELL);if n and strfind(n,s) then i=j;break;end end if i then if GetSpellCooldown(i,BOOKTYPE_SPELL)<1 then c(s)else c("Fear")end end</code>

## DoT Rotation
This macro will apply DoT debuffs when needed. There are the same drawbacks to this as Priest Mind Flay above that it can’t distinguish between your own debuffs and fellow warlocks. Still, its quite useful for grinding or when you’re the lone warlock in group. Another limitation is the length of the macro. In order to fit the 255 character limit the debuff names have to be shortened, this could cause conflicts in case a debuff with a similar name is already applied.
**Example:**

Curse of Agony = Spell_Shadow_CurseOfSargeras

Corruption = Spell_Shadow_AbominationExplosion

Siphon Life = Spell_Shadow_Requiem

**Order Alternative a)** 1) Corruption, 2) Curse of Agony, 3) Siphon Life
 <code>/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("ionExp")then c("Corruption(Rank 6)")elseif not b("eOfSar")then c("Curse of Agony(Rank 6)")else c("Siphon Life(Rank 4)")end</code>

**Order alternative b)** 1) Siphon Life, 2) Corruption, 3) Curse of agony
 <code>/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("w_Requ")then c("Siphon Life(Rank 4)")elseif not b("ionExp")then c("Corruption(Rank 6)")else c("Curse of Agony(Rank 6)")end</code>

**Order alternative c)** 1) Siphon Life, 2) Curse of agony, 3) Corruption
 <code>/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("w_Requ")then c("Siphon Life(Rank 4)")elseif not b("eOfSarg")then c("Curse of Agony(Rank 6)")else c("Corruption(Rank 6)")end</code>

## Drain Life
Using Drain Life repeatedly is a DPS loss because of the way the spell works, so you need this complicated macro to gain an extra tick of the spell
 <code>/run local f=CnlSpam if not f then f=CreateFrame("Frame")local s,r="SPELLCAST_CHANNEL_ST",f.RegisterEvent r(f,s.."ART")r(f,s.."OP")f:SetScript("OnEvent",function()this.c=event~=s.."OP"end)CnlSpam=f end if not f.c then CastSpellByName("Drain Life")end</code>

## Drain Mana
Spammable Drain Mana
 <code>/run if not CastingBarFrame.channeling then CastSpellByName("Drain Mana") end</code>

## Drain Soul
Drain Soul, pet passive, delete Soul Shard
 <code>/cast Drain Soul(Rank 1)
 /run PetPassiveMode()local a=GetBagName(4); if a=="Core Felcloth Bag" or a=="Felcloth Bag" or a=="Soul Pouch" or a=="Box of Souls" or a=="Small Soul Pouch" then PickupContainerItem(4,GetContainerNumSlots(4))DeleteCursorItem()end</code>

## Enslave Demon
Enslave demon if you don't have yet or attack and use the demons abilities if you have.<syntaxhighlight lang="lua">
/run if not HasPetUI() then CastSpellByName("Enslave Demon");end CastPetAction(1);CastPetAction(4);CastPetAction(5);PetAttack()
</syntaxhighlight>

## Healthstone
Use any Healthstone/Healing Potion
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Healthstone") or strfind(n,"Healing Potion"))then UseContainerItem(b,s,1)end end end</code>

Create/use Healthstone
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Healthstone"))then UseContainerItem(b,s,1)end end end
 /cast Create Healthstone (Major)()</code>

Trade Healthstone
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s) do local n=GetContainerItemLink(b,s) if n and string.find(n,"Healthstone") then PickupContainerItem(b,s); DropItemOnUnit("target"); AcceptTrade(); break; end; end; end</code>

## Rain of Fire
Spammable Rain of Fire
 <code>/run if not SpellIsTargeting() and not CastingBarFrame.channeling then CastSpellByName("Rain of Fire")end</code>

## Life Tap
Life Tap/Demon Armo﻿r
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Shadow_RagingScream" then x=1 end i=i+1 end if x==0 then CastSpellByName("Demon Armor") else CastSpellByName("Life Tap")end</code>

## Melee weaving
Shoot (Mouse wheel up)
 <code>/run for i=1,120 do if IsAutoRepeatAction(i) then return end end CastSpellByName("Shoot")</code>

Attack (Mouse wheel down)
 <code>/run for i=1,120 do if IsCurrentAction(i) then return end end if CheckInteractDistance("target", 3) then CastSpellByName("Attack")end</code>

## Shadowburn
Tagging closest mob
 <code>/run ClearTarget();
 /run TargetNearestEnemy()
 /run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;
 /cast Shadowburn</code>

## Siphon Life
Siphon Life / target next enemy
 <code>/run z=0;for i=1,16 do GameTooltipTextLeft1:SetText(nil);GameTooltip:SetUnitDebuff("target",i);if GameTooltipTextLeft1:GetText()=="Siphon Life" then z=1;end;end;if z==1 then TargetNearestEnemy();else CastSpellByName("Siphon Life");end</code>

## Summoning
Summoning if friendly target, else Banish
 <code>/run if UnitIsFriend("player", "target") then SendChatMessage("Summoning %t" ,"emote") CastSpellByName("Ritual of Summoning") else CastSpellByName("Banish")end</code>

Summoning and announce who in party / raid
 <code>/script local a = " - 2 people pls click the portal."; local b = UnitName("target"); if (GetNumRaidMembers() > 0) then SendChatMessage("Summoning "..b..a, "RAID"); else SendChatMessage("Summoning "..b..a, "PARTY"); end
 /cast Ritual of Summoning</code>

## Shadow Bolt
Shadow Bolt + Top Trinket
 <code>/run if UnitAffectingCombat("player") and GetInventoryItemCooldown("player", 13)==0 then UseInventoryItem(13)CastSpellByName("Shadow Bolt")else CastSpellByName("Shadow Bolt")end</code>

Curse of Shadow, else Shadow Bolt
 <code>/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Spell_Shadow_CurseOfAchimonde" then x=1 end i=i+1 end if x==0 then CastSpellByName("Curse of Shadow") else CastSpellByName("Shadow Bolt")end</code>

## Shoot
Start auto Shoot with the wand
 <code>/run for i=1,120 do if IsAutoRepeatAction(i) then return end end CastSpellByName("Shoot")</code>

## Soul Fire
Soul Fire/Curse of the Elements
 <code>/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Spell_Shadow_ChillTouch" then x=1 end i=i+1 end if x==0 then CastSpellByName("Curse of the Elements") else CastSpellByName("Soul Fire") end</code>

Soul Fire if off cooldown else Searing Pain<syntaxhighlight lang="lua">
/run local c,s=CastSpellByName,"Soul Fire";local i=nil;for j=1,180 do local n=GetSpellName(j,BOOKTYPE_SPELL);if n and strfind(n,s) then i=j;break;end end if i then if GetSpellCooldown(i,BOOKTYPE_SPELL)<1 then c(s)else c("Searing Pain")end end
</syntaxhighlight>

## Soulstone
Create Major Soulstone, else use any Soulstone
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Soulstone"))then UseContainerItem(b,s,1)end end end
 /cast Create Soulstone (Major)()</code>

## Felstone
Create Felstone, use Felstone<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Felstone"))then UseContainerItem(b,s,1)end end end
/cast Create Felstone
</syntaxhighlight>

## Wrathstone
Create Wrathstone, use Wrathstone<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Wrathstone"))then UseContainerItem(b,s,1)end end end
/cast Create Wrathstone
</syntaxhighlight>

## Firestone
Create Firestone, use Firestone<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Firestone"))then UseContainerItem(b,s,1)end end end
/cast Create Firestone
</syntaxhighlight>

## Spellstone
Create Spellstone, use Spellstone<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Spellstone"))then UseContainerItem(b,s,1)end end end
/cast Create Spellstone
</syntaxhighlight>

## Soul Shard
This should only delete Soul Shards and you can specify a number of stacks you wish to keep (i.e. n=>3). Use at own risk.<syntaxhighlight lang="lua">
/run local n=0; for i=0, 4 do for j=1, GetContainerNumSlots(i) do local x=GetContainerItemLink(i, j); if x and string.find(x, "item:6265:") then if n>=3 then PickupContainerItem(i, j); DeleteCursorItem() else n=n+1 end end end end
</syntaxhighlight>
