---
title: "Shaman Totem Macros"
url: "https://turtle-wow.fandom.com/wiki/Shaman_Totem_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:24:12Z"
fetched: "2026-09-10T07:39:37Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Shaman Totem Macros

## Castsequence
Windfury, Strenght of Earth, Mana Spring
 <code>/run local _gspells = { "Windfury Totem", "Strength of Earth Totem", "Mana Spring Totem"} if GetSpellCooldown(4,"BOOKTYPE_SPELL")==0 then _gi=_gi and _gi > 0 and _gi or 1 CastSpellByName(_gspells[_gi]) _gi = math.mod(1+_gi, 1+table.getn(_gspells))end</code>

Windfury, Strenght of Earth, Mana Spring
 <code>/run s={"Windfury Totem","Strength of Earth Totem","Mana Spring Totem"} if q==nil then q=0 end q=q+1 if q>getn(s) then q=1 end CastSpellByName(s[q])</code>

Re-popping totems using the cheapest rank 1 spells
 <code>/run s={"Fire Resistance Totem(Rank 1)","Nature Resistance Totem(Rank 1)","Stoneskin Totem(Rank 1)","Frost Resistance Totem(Rank 1)"} if q==nil then q=0 end q=q+1 if q>getn(s) then q=1 end CastSpellByName(s[q])</code>

Searing / Strength of Earth / Healing Stream
 <code>/run c=CastSpellByName if n==0 then c("Searing Totem") n=1 elseif n==1 then c("Strength of Earth Totem") n=2 else c("Healing Stream Totem") n=0 ;end</code>

## Fire Nova Totem
This uses Fire Nova Totem and Magma Totem with a 15 second cooldown
 <code>/script if Ttwist == nil or (GetTime()-Ttwist>15) then Ttwist,wTot=GetTime(),true CastSpellByName("Fire Nova Totem") elseif wTot and (GetTime()-Ttwist>5) then CastSpellByName("Magma Totem"); wTot=false end</code>

## Magma Totem
Rank 1 Magma Totem out of combat, max rank if combat
 <code>/run if not UnitAffectingCombat("player") then CastSpellByName("Magma Totem(Rank 1)") else CastSpellByName("Magma Totem") end</code>

## Mana Tide Totem
Mana Tide Totem, Chain Heal(Rank 1)
 <code>/run if UnitMana("player")< 1000 then CastSpellByName("Mana Tide Totem")CastSpellByName("Chain Heal(Rank 1)") else CastSpellByName("Chain Heal(Rank 1)")end</code>

## Modifier keys
This macro allows for a second totem to be attached to the same key, while ALT is being hold down aswell.
 <code>/run if (IsAltKeyDown())then CastSpellByName("TOTEM NAME FOR SHIFT+ALT") else CastSpellByName("TOTEM NAME FOR SHIFT") end</code>

## Searing Totem
Start attack, Searing Totem
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;
 /cast Searing Totem</code>

## Windfury Totem
Spammable Windfury / Grace of Air with a 10 second cooldown
 <code>/run if Ttwist == nil or (GetTime()-Ttwist>10) then Ttwist,wTot=GetTime(),true CastSpellByName("Windfury Totem") elseif wTot and (GetTime()-Ttwist>1.5) then CastSpellByName("Grace of Air Totem"); wTot=false end</code>
Spammable Windfury / Tranquil Air with a 10 second cooldown
 <code>/run if Ttwist == nil or (GetTime()-Ttwist>10) then Ttwist,wTot=GetTime(),true CastSpellByName("Windfury Totem") elseif wTot and (GetTime()-Ttwist>1.5) then CastSpellByName("Tranquil Air Totem"); wTot=false end</code>
Target Windfury Totem, if in duel range (9.9 yards) target last target, else cast Windfury Totem (edit III and YOURNAME)
 <code>/run TargetByName("Windfury Totem III YOURNAME", exactMatch) if not CheckInteractDistance("target",3) then CastSpellByName("Windfury Totem")else TargetLastTarget()end</code>
