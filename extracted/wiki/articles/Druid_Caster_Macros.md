---
title: "Druid Caster Macros"
url: "https://turtle-wow.fandom.com/wiki/Druid_Caster_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-04-06T12:11:13Z"
fetched: "2026-09-10T07:38:40Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Druid Caster Macros

## Aquatic / Travel Form
Updated Aquatic/Travel Form + powershift + removes error spam | 29-03-2026 - This works on the surface of water too when swimming instead of needing breath bar - It seems to delete anything in a macro beyond 256 after re-logging, fixed version optimized as much as possible to just barely hit 255  <syntaxhighlight lang="lua">/run UIErrorsFrame:UnregisterEvent"UI_ERROR_MESSAGE"for i=1,GetNumShapeshiftForms()do local _,_,a=GetShapeshiftFormInfo(i)if a then CastShapeshiftForm(i)return end end CastShapeshiftForm(2)CastShapeshiftForm(4)UIErrorsFrame:RegisterEvent"UI_ERROR_MESSAGE"</syntaxhighlight>
It tries casting both travel and aquatic form while removing errors, works due to game rules of aquatic only allowed in water, travel only on land/air - if transformed, untransforms from any shapeshift so needs double click from bear/cat etc.  

---  

Aqua form if the breath timer is visible and Travel form on land. change 4 to 5 if you get the swift travel form.  <syntaxhighlight lang="lua">
/run for i=1,GetNumShapeshiftForms() do _,_,a=GetShapeshiftFormInfo(i) if a then CastShapeshiftForm(i) return end end if MirrorTimer1 and MirrorTimer1:IsVisible() then CastShapeshiftForm(2) else CastShapeshiftForm(4) end
</syntaxhighlight>

Travel /Aqua
 <code>/run UIErrorsFrame:UnregisterEvent"UI_ERROR_MESSAGE" for i = 2, GetNumShapeshiftForms(), 2 do local _, _, active = GetShapeshiftFormInfo(i) if not active then CastShapeshiftForm(i) end if i == 2 then UIErrorsFrame:RegisterEvent"UI_ERROR_MESSAGE" end end</code>

## Spammable Druid forms
 <code>/run for i=1,5 do if not ({GetShapeshiftFormInfo(2)})[3] then if ({GetShapeshiftFormInfo(i)})[3] then CastShapeshiftForm(i) end CastShapeshiftForm(2) end end</code>
Shapeshift Forms go from left to right: 1 is Bear, 2 is Cat, etc

## Barkskin + cancel buff
 <code>/run local i=0 g=GetPlayerBuff while not (g(i) == -1) do if(strfind(GetPlayerBuffTexture(g(i)),"Spell_Nature_StoneClawTotem"))then CancelPlayerBuff(g(i)) end i = i + 1; end; CastSpellByName("Barkskin")</code>

## Weapon Oil
Enchant Brilliant Mana Oil on weapon
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Brilliant Mana Oil")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()ClearCursor()end end end end</code>

Enchant Brilliant Wizard Oil on weapon
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Brilliant Wizard Oil")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()end end end end</code>

## <code>Unshift</code>
Shift out of any Druid form
 <code>/run for i=1, GetNumShapeshiftForms() do if ({GetShapeshiftFormInfo(i)})[3] then CastShapeshiftForm(i) end end</code>

## Cure Poison
Cure Poison from target if target is a player, else Cure Poison from oneself
 <code>/run if UnitIsFriend ("player", "target") then CastSpellByName("Cure Poison") else CastSpellByName("Cure Poison",1)  end</code>

## Faerie Fire
Feral Faerie Fire when shapeshifted, Faerie Fire if not
 <code>/script i=1;m=0;while(UnitBuff("player",i)~=nil) do if(strfind(UnitBuff("player",i),"Form")~=nil) then m=1; end;i=i+1;end; c=CastSpellByName; if(m==1) then c("Faerie Fire (Feral)()");else c("Faerie Fire");end;</code>

Same function, but shows the icon in the bar. Replace X with your current max rank.
 <code>#showtooltip
 /cast [form:1/3] Faerie Fire (Feral)(Rank X);Faerie Fire</code>

Faerie Fire on targettarget if friendly target, else Faerie Fire
 <code>/run if UnitCanAttack("player","target") == 1 then CastSpellByName("Faerie Fire")else TargetUnit("targettarget") CastSpellByName("Faerie Fire") TargetLastTarget() end</code>

Spammable Faerie Fire
 <code>/run m=0 for i=1,40 do if(strfind(tostring(UnitDebuff("target",i)),"Spell_Nature_FaerieFire"))then m=1 end end if m==0 then CastSpellByName("Faerie Fire(Rank 4)") end</code>

Spammable Faerie Fire/Insect Swarm
 <code>/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("e_FaerieF")then c("Faerie Fire(Rank 4)")elseif not b("e_InsectSw")then c("Insect Swarm(Rank 1)")end</code>

## Healing Touch
this uses the trinket in inventory slot 13 if you're in combat when it's ready and heals you or a friendly player you target.
 <code>/run if UnitAffectingCombat("player") and  GetInventoryItemCooldown("player", 13)==0 then UseInventoryItem(13)elseif UnitIsPlayer("target") then CastSpellByName("Healing Touch") else CastSpellByName("Healing Touch",1)  end</code>

this uses <code>GetMouseFocus cast Healing Touch on</code> your target.
 <code>/run i=(GetMouseFocus().unit) if i then CastSpellByName("Healing Touch") SpellTargetUnit(i) else CastSpellByName("Healing Touch") end</code>

## Hurricane
Spammable Hurricane
 <code>/run if not SpellIsTargeting() and not CastingBarFrame.channeling then CastSpellByName("Hurricane")end</code>

Hurrican + Barkskin
 <code>/run if not focusTime then focusTime = 0 end if (GetTime() - focusTime > 60) then CastSpellByName("Barkskin") focusTime = GetTime() end if not SpellIsTargeting() then CastSpellByName("Hurricane")end</code>

## Innervate
Innervate and whisper to target
 /cast Innervate
 /run if UnitExists"target"then SendChatMessage("flavor text","WHISPER",nil,UnitName"target")end

Innervate overwrite prevention
 <code>/run n=0 for i=1,40 do if(strfind(tostring(UnitBuff("target",i)),"Spell_Nature_Lightning"))then n=1 end end if n==0 then CastSpellByName("Innervate")end</code>

## Insect Swarm
If missing cast Insect Swarm, else cast Moonfire
 <code>/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Spell_Nature_InsectSwarm" then x=1 end i=i+1 end if x==0 then CastSpellByName("Insect Swarm") else CastSpellByName("Moonfire")end</code>

## Buffing
Buff target with Gift of the Wild if Gift of the Wild is missing, then Thorns if Thorns is missing, else Rejuvenation.
 <code>/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitBuff("target",i)),k)then return 1 end end end if not b("Nature_Regeneration")then c("Gift of the Wild")elseif not b("Nature_Thorns")then c("Thorns")else c("Rejuvenation")end</code>

Buff oneself with Mark of the Wild if Mark of the Wild is missing, then Thorns if Thorns is missing. else Omen of Clarity.
 <code>/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitBuff("player",i)),k)then return 1 end end end if not b("Nature_Regeneration")then c("Mark of the Wild",1)elseif not b("Nature_Thorns")then c("Thorns",1)else c("Omen of Clarity")end</code>

## Moonfire
Moonfire and attack. useful for starting zone.
 /run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;
 /cast Moonfire

Max rank Moonfire, or rank 9 Moonfire if Moonfire debuff on target.
 <code>/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("Nature_StarFall")then c("Moonfire")else c("Moonfire(Rank 9)")end</code>

## Nature's Grace
If buffed Nature's Grace cast HT4, else cast HT3
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Nature_NaturesBlessing" then x=1 end i=i+1 end if x==0 then CastSpellByName("Healing Touch(Rank 3)") else CastSpellByName("Healing Touch(Rank 4)")end</code>

If buffed Nature's Grace cast HT3, else cast Regrowth 4
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\Icons\Spell_Nature_NaturesBlessing" then x=1 end i=i+1 end if x==0 then CastSpellByName("Regrowth(Rank 4)") else CastSpellByName("Healing Touch(Rank 3)")end</code>

## Rebirth
Cast Rebirth and yell two random messages
 /cast Rebirth
 /run if not lr or GetTime()-lr>5 then lr=GetTime() if UnitIsDead("target") then i=math.random(1,2) c=i>1 and "Combat-res on %T" or "Ressing %T go get your revenge!" SendChatMessage(c,"YELL") end end

## Regrowth
Unshift combined with Regrowth on self/target
 <code>/run local c,r,a,_=CastSpellByName,"Regrowth";for i=1,GetNumShapeshiftForms()do _,_,a=GetShapeshiftFormInfo(i)if(a)then CastShapeshiftForm(i)break end end if UnitIsFriend("player","target")then c(r)else c(r,1)end</code>

## Rejuvenation
Rejuvenation overwrite prevention
 <code>/run m=0 for i=1,40 do if(strfind(tostring(UnitBuff("target",i)),"Spell_Nature_Rejuvenation"))then m=1 end end if m==0 then CastSpellByName("Rejuvenation")end</code>

Rejuvenation / Swiftmend Combo
 <code>/run c=CastSpellByName m=0 for i=1,40 do if(strfind(tostring(UnitBuff("target",i)),"Spell_Nature_Rejuvenation"))then m=1 end end if m==0 then c("Rejuvenation") else c("Swiftmend")end</code>

## Remove Curse
Remove Curse from target if target is a player, else Remove Curse from oneself
 <code>/run if UnitIsFriend ("player", "target") then CastSpellByName("Remove Curse") else CastSpellByName("Remove Curse",1)  end</code>

## Starfire
cast moonfire until nature's grace trigger then cast starfire
 <code>/run c=CastSpellByName function b(k)for i=1,32 do if strfind(tostring(UnitBuff("player",i)),k)then return 1 end end end if not b("NaturesBlessing")then c("Moonfire(Rank 4)")else c("Starfire")end</code>

cast wrath until nature's grace trigger then cast starfire
 <code>/run i=1;m=0;c=CastSpellByName;while(UnitBuff("player",i)~=nil) do if(strfind(UnitBuff("player",i),"Spell_Nature_NaturesBlessing")~=nil) then m=1;end;i=i+1;end;if (m==1) then c"Starfire";else c"Wrath";end</code>

## Tranquility
Spammable Tranquility
 <code>/script if not CastingBarFrame.channeling then CastSpellByName("Tranquility") en﻿d</code>
