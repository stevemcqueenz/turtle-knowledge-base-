---
title: "Paladin Macros"
url: "https://turtle-wow.fandom.com/wiki/Paladin_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-17T15:01:54Z"
fetched: "2026-09-10T07:39:23Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Paladin Macros

## Aura
Rotate aura
 <code>/run s={"Retribution Aura", "Concentration Aura", "Devotion Aura"} if not q then q=1 end CastSpellByName(s[q]) q=q+1 if q>table.getn(s) then q=1 end</code>

Rotate resistance aura
 <code>/run s={"Fire Resistance Aura", "Shadow Resistance Aura", "Frost Resistance Aura"} if not q then q=1 end CastSpellByName(s[q]) q=q+1 if q>table.getn(s) then q=1 end</code>

## Auto attack
uses a loop to check if attack is set to auto-repeat.
 <code>/run for i=1,120 do if IsCurrentAction(i) then return end end CastSpellByName("Attack")</code>

This one is decent enough but it is known to be unreliable if spammed.
 <code>/run if (not PlayerFrame.inCombat) then AttackTarget() end</code>

This one is more reliable. but it requires auto attack to be found on the action bar.
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end</code>

## Bandage
Divine Protection, Self-Bandage
 <code>/run CastSpellByName("Divine Protection"); for b=0,4 do for s=1,GetContainerNumSlots(b) do local n=GetContainerItemLink(b,s) if n and strfind(n,"Bandage") then UseContainerItem(b,s) TargetUnit("player") end end end</code>

## Blessing of Freedom
Blessing of Freedom on target / self
 <code>/run if UnitIsFriend ("player", "target") then CastSpellByName("Blessing of Freedom") else CastSpellByName("Blessing of Freedom",1)  end</code>

Blessing of Freedom on mouse focused target
 <code>/run i=(GetMouseFocus().unit) if i then CastSpellByName("Blessing of Freedom") SpellTargetUnit(i) else CastSpellByName("Blessing of Freedom") end</code>

## Blessing of Might
Blessing of Might on target if target is a player, else Blessing of Might on oneself
 <code>/run if UnitIsFriend ("player", "target") then CastSpellByName("Blessing of Might") else CastSpellByName("Blessing of Might",1)  end; TargetLastEnemy();</code>

## Blessing of Protection
Blessing of Protection on target if a player, else Blessing of Protection oneself
 <code>/run if UnitIsFriend ("player", "target") then CastSpellByName("Blessing of Protection") else CastSpellByName("Blessing of Protection",1)  end</code>

Cast Blessing of Protection on the target of your target if this target isn't you. Tanking taunt
 <code>/run if not UnitIsUnit("player", "targettarget") then TargetUnit("targettarget") CastSpellByName("Blessing of Protection") TargetLastEnemy() end</code>

## Blessing of Wisdom
Blessing of Wisdom if target got mana, else Blessing of Might
 <code>/run power = UnitPowerType("target"); if ( power == 0 ) then CastSpellByName("Blessing of Wisdom") else CastSpellByName("Blessing of Might") end</code>

## Blessing of Sacrifice
Quicker Blessing of Sacrifice
 <code>/run if UnitIsPlayer("target") and not UnitIsUnit("player", "target") then CastSpellByName("Blessing of Sacrifice(Rank 1)") else TargetNearestFriend() end</code>

## Cleanse
Self cast Cleanse or on friendly targets
 <code>/run C=CastSpellByName; A="Cleanse" if UnitIsFriend("player","target") then C(A) else if not UnitIsFriend("player","target") then C(A, 1) end; end</code>

## Consecration
Rank 1 Consecration, max rank if combat
 <code>/run if not UnitAffectingCombat("player") then CastSpellByName("Consecration(Rank 1)") else CastSpellByName("Consecration") end</code>

Turns off pvp and uses rank 1 Consecration until you are no longer flagged for PvP
 <code>/run if not pvpTime then pvpTime = 0 end if UnitIsPVP("player") then CastSpellByName("Consecration(Rank 1)") end if pvpTime == 0 and UnitIsPVP("player") then TogglePVP() pvpTime = GetTime() end if GetTime() - pvpTime > 300 then pvpTime = 0 end</code>

## Crusader Strike
This does crusader strike up to 3 stacks then refresh if buff is less then 5 sec left<syntaxhighlight lang="lua">
/run local t="Interface\\Icons\\Spell_Holy_CrusaderStrike";local c=0;for i=1,40 do local tex,st=UnitBuff("player",i);if tex==t then c=st or 1 end end;if c<3 then CastSpellByName("Crusader Strike") end
/run for i=0,31 do b=GetPlayerBuff(i,"HELPFUL")if b>=0 and strfind(GetPlayerBuffTexture(b),"CrusaderStrike")then if GetPlayerBuffTimeLeft(b)>5 then return end CastSpellByName("Crusader Strike")return end end CastSpellByName("Crusader Strike")
</syntaxhighlight>

## Divine Favor
Divine Favor + Holy Shock
 <code>/run local c,s=CastSpellByName,"Divine Favor";local i=nil;for j=1,180 do local n=GetSpellName(j,BOOKTYPE_SPELL);if n and strfind(n,s) then i=j;break;end end if i then if GetSpellCooldown(i,BOOKTYPE_SPELL)<1 then c(s)else c("Holy Shock")end end</code>

## Divine Protection
cast + unbuff max rank Divine Protection
 <code>/cast Divine Protection
 /script local i=0 g=GetPlayerBuff while not (g(i) == -1) do if(strfind(GetPlayerBuffTexture(g(i)), "Spell_Holy_Restoration"))then CancelPlayerBuff(g(i))end i = i + 1; end</code>

cast + unbuff rank 1 Divine Protection
 <code>/script local i=0 g=GetPlayerBuff while not (g(i) == -1) do if (strfind(GetPlayerBuffTexture(g(i)), "Spell_Holy_Restoration")) then CancelPlayerBuff(g(i)) end i = i + 1; end
 /cast Divine Protection(Rank 1)</code>

## Divine Shield
cast + unbuff max rank Divine Shield
 <code>/cast Divine Shield
 /script local i=0 g=GetPlayerBuff while not (g(i) == -1) do if(strfind(GetPlayerBuffTexture(g(i)), "Spell_Holy_DivineIntervention"))then CancelPlayerBuff(g(i))end i = i + 1; end</code>

## Exorcism
Exorcism if undead or demon, else Holy Light
 <code>/run if UnitCreatureType("target")=="Undead" or UnitCreatureType("target")=="Demon" then CastSpellByName("Exorcism")else CastSpellByName("Holy Light")end</code>

## Flash of Light
Flash of Light on targeted player or self cast if no player targeted
 <code>/run if UnitIsPlayer("target") then CastSpellByName("Flash of Light") else CastSpellByName("Flash of Light",1)  end</code>

Flash of Light on mouse focused target
 <code>/run i=(GetMouseFocus().unit) if i then CastSpellByName("Flash of Light") SpellTargetUnit(i) else CastSpellByName("Flash of Light") end</code>

Flash of Light + Top Trinket
 <code>/run if UnitAffectingCombat("player") and  GetInventoryItemCooldown("player", 13)==0 then UseInventoryItem(13)elseif UnitIsPlayer("target") then CastSpellByName("Flash of Light") else CastSpellByName("Flash of Light",1)  end</code>

## Hammer of Wrath
Hammer of Wrath if target have 20% hp, else Judgement
 <code>/run if UnitHealth("target")/UnitHealthMax("target") < 0.2 then CastSpellByName("Hammer of Wrath")CastSpellByName("Judgement")else CastSpellByName("Judgement")end</code>

## Hearthstone
Divine Protection, Hearthstone
 <code>/run CastSpellByName("Divine Protection") for b=0,4 do for s=1,GetContainerNumSlots(b) do local n=GetContainerItemLink(b,s) if n and strfind(n,"Hearthstone") then UseContainerItem(b,s)  end end end</code>

## Holy Light
Holy Light on other players or self cast if no friendly player targeted 
 <code>/run if UnitIsPlayer("target") then CastSpellByName("Holy Light") else CastSpellByName("Holy Light",1)  end</code>

Holy Light on mouse focused target
 <code>/run i=(GetMouseFocus().unit) if i then CastSpellByName("Flash of Light") SpellTargetUnit(i) else CastSpellByName("Holy Light") end</code>

## Purify
Purify target if friendly, else Purify oneself
 <code>/run if UnitIsFriend ("player", "target") then CastSpellByName("Purify") else CastSpellByName("Purify",1)  end</code>

## Redemption
Redemption if target is dead, else Holy Light on target or self 
 <code>/run if UnitIsDead("target") then CastSpellByName("Redemption") elseif UnitIsFriend ("player", "target") then CastSpellByName("Holy Light") else CastSpellByName("Holy Light",1)  end</code>

Redemption RP macro
 <code>/cast Redemption
 /run if not lr or GetTime()-lr>5 then lr=GetTime() if UnitIsDead("target") then i=math.random(1,2) c=i>1 and "%t, you are terminated." or "What, %t has fallen? Arise, my champion!" SendChatMessage(c,"YELL") end end</code>

## Repentance
Repentance / send chat message
 <code>/run CastSpellByName("Repentance") if SpellCanTargetUnit("target") then SendChatMessage('Repentance on %t', 'Say') else SpellStopTargeting() end</code>

## Retribution Aura
Spammable Retribution Aura
 <code>/run i=0;s=0;while(1) do b=GetPlayerBuff(i,"HELPFUL") if b==-1 then break;end t=GetPlayerBuffTexture(b); if string.find(t,"AuraOfLight") then s=1;end i=i+1;end if s==0 then CastSpellByName("Retribution Aura");end</code>

## Seal of Command
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Ability_Warrior_InnerRage" then x=1 end i=i+1 end if x==0 then CastSpellByName("Seal of Command") else CastSpellByName("Judgement")end</code>

## Seal of Justice
Seal of Justice + Judgement
 <code>/run c=CastSpellByName j="Judgement" q="y_SealOfWrath" function b(k)for i=1,32 do if strfind(tostring(UnitBuff("player",i)),k)then return 1 end end end if not b(q) then c("Seal of Justice")else c(j) end</code>

Seal of Justice only when you don't have it active. Judgement if seal is active.
 <code>/run i=0;s=0;while(1) do b=GetPlayerBuff(i,"HELPFUL") if b==-1 then break;end t=GetPlayerBuffTexture(b);if string.find(t,"SealOfWrath") then CastSpellByName("Judgement");s=1;break;end i=i+1;end;if s==0 then CastSpellByName("Seal of Justice");end</code>

## Seal of Light
Seal of Light + Judgement
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Holy_HealingAura" then x=1 end i=i+1 end if x==0 then CastSpellByName("Seal of Light") else CastSpellByName("Judgement")end</code>

Seal of light that cannot be reapplied while buff is up
 <code>/run i=0;s=0;while(1) do b=GetPlayerBuff(i,"HELPFUL") if b==-1 then break;end t=GetPlayerBuffTexture(b); if string.find(t,"HealingAura") then s=1;end i=i+1;end if s==0 or IsControlKeyDown() then CastSpellByName("Seal of Light"); end</code>

## Seal of Righteousness
Seal of Righteousness + Judgement
 <code>/run local z=0 for i=1,27 do t=UnitBuff("player",i) if (t and strfind(t,"ThunderBolt")) then z=1 break end end if z==1 then CastSpellByName("Judgement") else CastSpellByName("Seal of Righteousness") end</code> 
Seal of Righteousness that cannot be reapplied while buff is up
 <code>/run local z=0 for i=1,27 do t=UnitBuff("player",i) if (t and strfind(t,"ThunderBolt")) then z=1 break end end if z==0 then CastSpellByName("Seal of Righteousness") end</code>

If any Seal is found, then cast Judgement, else Seal of Righteousness (you can edit it with your preferred seal, just keep it under 256 characters):
 /run local s={"InnerRag","ealOfWrat","lingAura","erBol","usnessAur","Smite"}for i=1,27 do local t=UnitBuff("player",i)if t then for _,k in s do if strfind(t,k)then CastSpellByName("Judgement")return end end end end CastSpellByName("Seal of Righteousness")

## Seal of Wisdom
Seal of Wisdom + Judgement
 <code>/run c=CastSpellByName j="Judgement" q="y_Righteou" function b(k)for i=1,32 do if strfind(tostring(UnitBuff("player",i)),k)then return 1 end end end if not b(q) then c("Seal of Wisdom")else c(j) end</code>
Seal of Wisdom that cannot be reapplied while buff is up
 <code>/run i=0;s=0;while(1) do b=GetPlayerBuff(i,"HELPFUL") if b==-1 then break;end t=GetPlayerBuffTexture(b); if string.find(t,"RighteousnessAura") then s=1;end i=i+1;end if s==0 or IsControlKeyDown() then CastSpellByName("Seal of Wisdom"); end</code>

## Seal of the Crusader
Seal of the Crusader + Judgement
 <code>/run c=CastSpellByName j="Judgement" q="y_HolySmite" function b(k)for i=1,32 do if strfind(tostring(UnitBuff("player",i)),k)then return 1 end end end if not b(q) then c("Seal of the Crusader")else c(j) end</code>
This one checks for both Seal of the Crusader and Seal of Righteousness and only recasts Seal of Righteousness if none of them are active. This helps a lot when tanking.
 <code>/run c=CastSpellByName j="Judgement" q="y_ThunderB" r="y_HolyS" function b(k)for i=1,32 do if strfind(tostring(UnitBuff("player",i)),k)then return 1 end end end if b(r)or b(q) then c(j)end if not b(q) and not b(r)then c("Seal of Righteousness")end</code>

## Symbol of Kings
This one will buy 10 stacks of Symbol of Kings from the merchant, which should be 200
 <code>/run for i=1,100 do if "Symbol of Kings"==GetMerchantItemInfo(i) then BuyMerchantItem(i,10) end end</code>

## Target Dummy
Uses Target Dummy, aims at dummy and if target is found casts Blessing of Protection
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b) do local n=GetContainerItemLink(b,s) if n and strfind(n,"Dummy")then UseContainerItem(b,s) end end end; TargetByName("Target Dummy");if UnitExists("target")then CastSpellByName("Blessing of Protection")end</code>

## Turn Undead
Turn Undead if combat, else Summon Warhorse
 <code>/run if UnitAffectingCombat("player") and UnitCreatureType("target")=="Undead" then CastSpellByName("Turn Undead") else CastSpellByName("Summon Warhorse")end</code>

## Weapon Oil
Enchant Brilliant Mana Oil on weapon
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Brilliant Mana Oil")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()ClearCursor()end end end end</code>

Enchant Brilliant Wizard Oil on weapon
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Brilliant Wizard Oil")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()end end end end</code>
