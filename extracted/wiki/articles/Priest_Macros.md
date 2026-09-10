---
title: "Priest Macros"
url: "https://turtle-wow.fandom.com/wiki/Priest_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-04-30T08:30:35Z"
fetched: "2026-09-10T07:39:25Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Priest Macros

## Cure Disease
Cure Disease on target if friendly, else Cure Disease oneself
 <code>/run if UnitIsFriend("player","target") then CastSpellByName("Cure Disease") else CastSpellByName("Cure Disease",1)  end</code>

## Dismount
Dismount, Power Word: Shield
 /run CastSpellByName("Power Word: Shield")
 /run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Mount"))then CancelPlayerBuff(g(i))end i=i+1 end

## Flash Heal
Self Flash Heal or Flash Heal player target
 <code>/run if UnitIsFriend ("player", "target") then CastSpellByName("Flash Heal") else CastSpellByName("Flash Heal",1)  end</code>

Flash Heal on mouse focused target
 <code>/run i=(GetMouseFocus().unit) if i then CastSpellByName("Flash Heal") SpellTargetUnit(i) else CastSpellByName("Flash Heal") end</code>

## Heal
Self Heal or Heal player target
 <code>/run if UnitIsFriend ("player", "target") then CastSpellByName("Heal") else CastSpellByName("Heal",1)  end</code>

Heal on mouse focused target
 <code>/run i=(GetMouseFocus().unit) if i then CastSpellByName("Heal") SpellTargetUnit(i) else CastSpellByName("Heal") end</code>

## Inner Fire
Inner Fire if missing, else Power Word: Fortitude
 <code>/run local z=0 for i=1,32 do t=UnitBuff("player",i) if (t and strfind(t,"InnerFire")) then z=1 break end end if z==1 then CastSpellByName("Power Word: Fortitude") else CastSpellByName("Inner Fire")end</code>

## Inner Focus
Inner Focus + Power Word: Shield. Uses getspellcooldown to track if inner focus is ready
 <code>/run local c,s=CastSpellByName,"Inner Focus";local i=nil;for j=1,180 do local n=GetSpellName(j,BOOKTYPE_SPELL);if n and strfind(n,s) then i=j;break;end end if i then if GetSpellCooldown(i,BOOKTYPE_SPELL)<1 then c(s)else c("Power Word: Shield")end end</code>

## Mana Burn
Mana Burn if target have more then 200 mana else it Mind Blast them
 <code>/run if UnitPowerType("target")==0 and UnitMana("target")>200 then CastSpellByName("Mana Burn") else CastSpellByName("Mind Blast") end</code>

## Melee weaving
Shoot (Mouse wheel up)
 <code>/run GGUseAction=GGUseAction or UseAction;UseAction=function(id,a,b)if not IsCurrentAction(id)and not IsAutoRepeatAction(id)then GGUseAction(id,a,b)end end CastSpellByName("Shoot") UIErrorsFrame:Hide()</code>

Attack (Mouse wheel down)
 <code>/run GGUseAction=GGUseAction or UseAction;UseAction=function(id,a,b)if not IsCurrentAction(id)and not IsAutoRepeatAction(id)then GGUseAction(id,a,b)end end if CheckInteractDistance("target", 3) then  CastSpellByName("Attack") end UIErrorsFrame:Hide()</code>

## Mind Control
Mind Control target, then use his attack and spells<syntaxhighlight lang="lua">
/run if not UnitIsCharmed("pet") then CastSpellByName("Mind Control") else PetAttack() CastPetAction(2) CastPetAction(3) end
</syntaxhighlight>

Cancel Mind Control
 <code>/run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Spell_Shadow_ShadowWordDominate"))then CancelPlayerBuff(g(i))end i=i+1 end</code>

## Mind Flay
Using Mind Flay repeatedly is a DPS loss because of the way the spell works, so you need this complicated macro to gain an extra tick of the spell
 <code>/run local f=CnlSpam if not f then f=CreateFrame("Frame")local s,r="SPELLCAST_CHANNEL_ST",f.RegisterEvent r(f,s.."ART")r(f,s.."OP")f:SetScript("OnEvent",function()this.c=event~=s.."OP"end)CnlSpam=f end if not f.c then CastSpellByName("Mind Flay")end</code>

## Power infusion
Cast power infusion, whispers a tell to the target notifying them
 /cast Power Infusion
 /run if UnitExists"target"then SendChatMessage("PI on YOU!! 20% spellpower for 15secs","WHISPER",nil,UnitName"target")end

## Power Word: Fortitude
Self buff Power Word: Fortitude, Divine Spirit, else Inner Fire
 <code>/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitBuff("player",i)),k)then return 1 end end end if not b("Fortitude")then c("Power Word: Fortitude",1)elseif not b("Spirit")then c("Divine Spirit",1)else c("Inner Fire")end</code>

Buff target Power Word: Fortitude, Divine Spirit, else Shadow Protection
 <code>/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitBuff("target",i)),k)then return 1 end end end if not b("Fortitude")then c("Power Word: Fortitude")elseif not b("Spirit")then c("Divine Spirit")else c("Shadow Protection")end</code>

## Power word: Shield
Shield target / self
 <code>/run SpellStopCasting() if UnitIsPlayer ("target") then CastSpellByName("Power word: Shield") else CastSpellByName("Power word: Shield",1)  end UIErrorsFrame:Hide()</code>

## Renew
Renew target if the target does not have Renew
 <code>/run function b(k)for i=1,32 do if strfind(tostring(UnitBuff("target",i)),k)then return 1 end end end if not b("Renew") then CastSpellByName("Renew")end</code>

## Ressurection
simply says who u res
 <code>/run if UnitIsDeadOrGhost("target") then CastSpellByName("Resurrection"); SendChatMessage("Return to us, %t.","SAY"); end</code>

## Shackle
Says what u shackle
 /run CastSpellByName("Shackle Undead");
 /run if UnitCreatureType("target") == "Undead" then SendChatMessage(">>> Shackling %t, leave it be.","SAY"); end

Shackle if undead, else Mind Soothe
 <code>/run if UnitCreatureType("target")=="Undead" then CastSpellByName("Shackle Undead") else CastSpellByName("Mind Soothe")end</code>

## Shadow Word: Pain
Cast Shadow Word: Pain if it's not already on the target
 <code>/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Spell_Shadow_ShadowWordPain" then x=1 end i=i+1 end if x==0 then CastSpellByName("Shadow Word: Pain")end</code>

Shadow Word: Pain, else Mind Blast
 <code>/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Spell_Shadow_ShadowWordPain" then x=1 end i=i+1 end if x==0 then CastSpellByName("Shadow Word: Pain")else CastSpellByName("Mind Blast")end</code>

## Shadowform
Cancel Shadowform
 <code>/run local i=0 g=GetPlayerBuff while not(g(i)==-1) do if(strfind(GetPlayerBuffTexture(g(i)), "Shadowform")) then CancelPlayerBuff(g(i)) end i=i+1 end</code>

Cancel Shadowform, Flash Heal self
 <code>/run local i=0 g=GetPlayerBuff while not(g(i)==-1) do if(strfind(GetPlayerBuffTexture(g(i)), "Shadowform")) then CancelPlayerBuff(g(i)) end i=i+1 end CastSpellByName("Flash Heal",1)</code>

Buff Shadowform /Inner Fire
 <code>/run z=false for i=1,16,1 do db=UnitBuff("player",i) if(db~=nil and string.find(db,"Shadowform")) then z=true end end if z then CastSpellByName("Inner Fire") else CastSpellByName("Shadowform") end</code>

## Shoot
Start wand auto shooting
 <code>/run for i=1,120 do if IsAutoRepeatAction(i) then return end end CastSpellByName("Shoot")</code>

## Starshards
Spammable Starshards
 <code>/run if not CastingBarFrame.channeling then CastSpellByName("Starshards") end</code>

## Weapon Oil
Enchant Brilliant Mana Oil on weapon
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Brilliant Mana Oil")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()ClearCursor()end end end end</code>

Enchant Brilliant Wizard Oil on weapon
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Brilliant Wizard Oil")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()end end end end</code>
