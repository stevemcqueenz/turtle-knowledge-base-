---
title: "Druid Bear Macros"
url: "https://turtle-wow.fandom.com/wiki/Druid_Bear_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-04-05T12:23:31Z"
fetched: "2026-09-10T07:38:40Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Druid Bear Macros

## Auto attack
uses a loop to check if attack is set to auto-repeat.
 <code>/run for i=1,120 do if IsCurrentAction(i) then return end end CastSpellByName("Attack")</code>

this one is decent enough but it is known to be unreliable if spammed.
 <code>/run if (not PlayerFrame.inCombat) then AttackTarget() end</code>

this one is more reliable. but it requires auto attack to be found on the action bar.
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;</code>

## Bash
From any stance to bear, cast Bash
 <code>/run local _, _, active = GetShapeshiftFormInfo(1) if not active or IsControlKeyDown() then for i = 2, 4 do _, _, active = GetShapeshiftFormInfo(i) if active then CastShapeshiftForm(i) return end end CastShapeshiftForm(1) else CastSpellByName("Bash")end</code>

## Bear Form
Bear Form from any form, 2 clicks.
 <code>/run local s,_ for i=1,5 do _,_,s=GetShapeshiftFormInfo(i)if s then CastShapeshiftForm(i)break end end if not s then CastShapeshiftForm(1) end</code>

Spammable Bear Form
 <code>/run for i=1,5 do if not ({GetShapeshiftFormInfo(1)})[3] then if ({GetShapeshiftFormInfo(i)})[3] then CastShapeshiftForm(i) end CastShapeshiftForm(1) end end</code>

## Demoralizing Roar
shows you target attack power after reduction. change 126 depending on roar rank.
 /cast Demoralizing Roar
 /run a=UnitAttackPower("target") - 126 if a ~= lastAttackPower then DEFAULT_CHAT_FRAME:AddMessage(a) lastAttackPower = a end

## Enrage
Enrage + cancel buff
 <code>/run local i=0 g=GetPlayerBuff while not (g(i) == -1) do if(strfind(GetPlayerBuffTexture(g(i)),"Ability_Druid_Enrage"))then CancelPlayerBuff(g(i)) end i=i+1 end CastSpellByName("Enrage")</code>

## Feral Faerie Fire
Feral Faerie Fire when shapeshifted, Faerie Fire if not.
 <code>/script i=1;m=0;while(UnitBuff("player",i)~=nil) do if(strfind(UnitBuff("player",i),"Form")~=nil) then m=1; end;i=i+1;end; c=CastSpellByName; if(m==1) then c("Faerie Fire (Feral)()");else c("Faerie Fire");end</code>

Same function, but shows the icon in the bar. Replace X with your current max rank.
 <code>#showtooltip
 /cast [form:1/3] Faerie Fire (Feral)(Rank X);Faerie Fire</code>

## Feral charge
Spammable bear form with feral charge
 <code>/run local _, _, active = GetShapeshiftFormInfo(1) if not active or IsControlKeyDown() then CastShapeshiftForm(1) else CastSpellByName("Feral Charge")end</code>

## Safe Growl
Safe growl, which protects taunt and growl from being overridden if two or more players spam it at the same time.
 <code>/run t=0 for i=1,40 do local d=UnitDebuff("target",i) if d then if string.find(d,"UnyieldingFaith") or string.find(d,"Reincarnation") or string.find(d,"Taunt") then t=1 break end end end if t==0 then CastSpellByName("Growl") end</code>

## Maul
Startattack, Maul
 /run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end CastSpellByName("Maul") UIErrorsFrame:Clear()

## Savage Bite
Start attack, Savage Bite if over 35 rage 
 /run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;if UnitMana("player") >=35 then CastSpellByName("Savage Bite")end;UIErrorsFrame:Clear()

## Swipe
Startattack, Swipe
 /run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;
 /cast Swipe
