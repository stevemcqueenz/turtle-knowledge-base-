---
title: "Mage Macros"
url: "https://turtle-wow.fandom.com/wiki/Mage_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-09T17:05:39Z"
fetched: "2026-09-10T07:39:11Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Mage Macros

## All in One
Arcane Power / Trinket / Presence of Mind
 <code>/run if  GetInventoryItemCooldown("player", 13)==0 then UseInventoryItem(13)else s={"Arcane Power","Presence of Mind","Frostbolt"} if q==nil then q=0 end q=q+1 if q>getn(s) then q=1 end CastSpellByName(s[q]) end</code>

## Arcane Intellect
Arcane Intellect if solo, Arcane Brilliance if party
 <code>/run if GetNumPartyMembers()==0 and GetNumRaidMembers()==0 then CastSpellByName("Arcane Intellect") else CastSpellByName("Arcane Brilliance") end</code>

## Arcane Explosion
Low rank arcane explosion, max rank if combat
 <code>/run if not UnitAffectingCombat("player") then CastSpellByName("Arcane Explosion(Rank 1)") else CastSpellByName("Arcane Explosion") end</code>

## Arcane Missiles
Using Arcane Missiles repeatedly is a DPS loss because of the way the spell works, so you need this complicated macro to gain an extra tick of the spell
 <code>/run local f=CnlSpam if not f then f=CreateFrame("Frame")local s,r="SPELLCAST_CHANNEL_ST",f.RegisterEvent r(f,s.."ART")r(f,s.."OP")f:SetScript("OnEvent",function()this.c=event~=s.."OP"end)CnlSpam=f end if not f.c then CastSpellByName("Arcane Missiles")end</code>

## Arcane Power
Arcane Power spammable
 <code>/run local i=0 c=0 for i=1,40 do if strfind(tostring(GetPlayerBuffTexture(GetPlayerBuff(i))),"Spell_Nature_Lightning") then c=1 end end if c==0 then CastSpellByName("Arcane Power") end</code>

Arcane Power / Frostbolt if the AP effect is active.
 <code>/run local i=0 t=0 c=CastSpellByName for i=1,40 do if strfind(tostring(GetPlayerBuffTexture(GetPlayerBuff(i))),"Spell_Nature_Lightning") then t=1 end end if t==0 then c("Arcane Power") else c("Frostbolt") end</code>

## Blink
Cancel Ice Block, then Blink
 <code>/run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Spell_Frost_Frost"))then CancelPlayerBuff(g(i))end i=i+1 end CastSpellByName("Blink")</code>

## Blizzard
Spammable Blizzard
 <code>/run if not SpellIsTargeting() and not CastingBarFrame.channeling then CastSpellByName("Blizzard")end</code>

Cast rank 1 if out of combat, else cast max rank
 <code>/run if not UnitAffectingCombat("player") then CastSpellByName("Blizzard(Rank 1)") else CastSpellByName("Blizzard") end</code>

## Brilliant Wizard Oil
Enchant Brilliant Wizard Oil on weapon
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Brilliant Wizard Oil")then  UseContainerItem(b,s)PickupInventoryItem(16)ReplaceEnchant()end end end end</code>

## Castsequence
Castsequence macro for buffing
 <code>/run local _gspells = { "Ice Armor", "Dampen Magic", "Arcane Intellect"} if GetSpellCooldown(4,"BOOKTYPE_SPELL")==0 then _gi=_gi and _gi > 0 and _gi or 1 CastSpellByName(_gspells[_gi]) _gi = math.mod(1+_gi, 1+table.getn(_gspells))end</code>

## Cone of Cold
Cone of Cold rank1, if Clearcasting, then max rank Cone of Cold
 <code>/run SpellStopCasting() local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Shadow_ManaBurn" then x=1 end i=i+1 end if x==1 then CastSpellByName("Cone of Cold")else CastSpellByName("Cone of Cold(Rank 1)")end</code>

## Conjure Water
Conjure Water for yourself and friendly targets based on level
 <code>/run r=7;l={1,5,15,25,35,45,55};if not UnitIsFriend("player","target")then TargetUnit("player");end;t=UnitLevel("target");for i=r,1,-1 do if (t>=l[ i]) then CastSpellByName("Conjure Water(Rank "..i..")");break;end;end</code>

## Counterspell
Counterspell unless target Ice Block
 <code>/run SpellStopCasting() local z=0 for i=1,27 do t=UnitBuff("target",i) if (t and string.find(t,"Frost")) then z=1 break end end if z==0 then CastSpellByName("Counterspell")end</code>

## Ice Block
Spammable Ice Block
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Frost_Frost" then x=1 end i=i+1 end if x==0 then CastSpellByName("Ice Block")end</code>

## Cold Snap
Cold Snap if Ice Block on cooldown, else Ice Block
 /run local c,s=CastSpellByName,"<code>Cold Snap</code>";local i=nil;for j=1,180 do local n=GetSpellName(j,BOOKTYPE_SPELL);if n and strfind(n,s) then i=j;break;end end if i then if GetSpellCooldown(i,BOOKTYPE_SPELL)<1 then c(s)else c("<code>Ice Block</code>")end end

## Detect magic
Cast Detect magic  if enemy, else cast Arcane Intellect
 <code>/run if UnitCanAttack("player","target") == 1 then CastSpellByName("Detect Magic")else CastSpellByName("Arcane Intellect")end</code>

## Mage Armor
Mage Armor, else Frost Armor
 <code>/run local s="Mage" ; for i=1,16 do if strfind(UnitBuff("player",i) or "","MageArmor") then s="Frost" ; break ; end ; end ; CastSpellByName(s.." Armor"﻿)</code>

## Mana Gem
Macro for conjuring
 <code>/script local c=function(a) local f,d a="Mana "..a for i=0,4 do for k=1,GetContainerNumSlots(i) do d=GetContainerItemLink(i,k) or "" if strfind(d,a) then f = 1 end end end if not f then CastSpellByName("Conjure "..a) end end c "Ruby" c "Citrine" c "Jade"</code>

Use Mana Ruby, Mana Citrine, or Mana Jade
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Mana Ruby") or strfind(n,"Mana Citrine") or strfind(n,"Mana Jade"))then UseContainerItem(b,s,1)end end end</code>

## Polymorph
Sheep controlled teammates (BWL Nefarian, ZG Hakkar)
 <code>/run local n,p,i,t=4,"party";if UnitInRaid("player") then n=40;p="raid";end;for i=1,n do t=p..i ;if UnitCanAttack("player",t) then TargetUnit(t);CastSpellByName("Polymorph");SendChatMessage("%t is controlled, I changed him to sheep~",p);break;end;end</code>

Casts polymorph, and searches through the party and raid for anyone who is targeting what you are going to polymorph, and whispering them to change targets.
 <code>/cast Polymorph
 /run n,s=UnitName,UnitIsUnit;y,p,r,t="player","raid","party","target";for i=1,40 do a=((n(r..i)and r..i)or(n(p..i) and p..i)or nil);z=a and(not s(a,y)) and s(a..t,t) and SendChatMessage("Sheeping your: "..n(t),"WHISPER",nil,n(a))end</code>

## Presence of Mind
Presence of Mind spammable
 <code>/run local i=0 t=0 c=CastSpellByName for i=1,40 do if strfind(tostring(GetPlayerBuffTexture(GetPlayerBuff(i))),"Spell_Nature_EnchantArmor") then t=1 end end if t==0 then c("Presence of Mind") else c("Frostbolt") end</code>

## Teleport
Teleport when solo and portal when in group
 <code>/run if GetNumPartyMembers()==0 and GetNumRaidMembers()==0 then CastSpellByName("Teleport: Ironforge") else CastSpellByName("Portal: Ironforge") end</code>

## Slow Fall
Buff Slow Fall, or cancel buff
 <code>/run CastSpellByName("Slow Fall")
 /run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Spell_Magic_FeatherFall"))then CancelPlayerBuff(g(i))end i=i+1 end</code>

## Shoot
Toggle on wand auto casting
 <code>/run for i=1,120 do if IsAutoRepeatAction(i) then return end end CastSpellByName("Shoot")</code>

## Trade Water
This macro will open trade, put in two stacks of water, and accept trade in 1 button(click it few times)
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b,s) do local n=GetContainerItemLink(b,s) if n and string.find(n,"Conjured Crystal Water") then PickupContainerItem(b,s); DropItemOnUnit("target"); AcceptTrade(); break; end; end; end</code>

## Arcane Rupture
This macro uses Arcane Rupture if no cd during temporal buff proc, else channel Arcane Missiles if not already channeling.<syntaxhighlight lang="lua">
/run h=0 for i=1,40 do b=UnitBuff("player",i) if b and strfind(b,"Spell_Nature_StormReach") then h=1 end end
/run if h==1 then for i=1,180 do n=GetSpellName(i,BOOKTYPE_SPELL) if n=="Arcane Rupture" and GetSpellCooldown(i,BOOKTYPE_SPELL)<1 then CastSpellByName(n) return end end end
/run if h==0 and not CastingBarFrame.channeling then CastSpellByName("Arcane Missiles") end
</syntaxhighlight>
