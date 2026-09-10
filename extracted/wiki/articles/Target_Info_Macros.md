---
title: "Target Info Macros"
url: "https://turtle-wow.fandom.com/wiki/Target_Info_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:23:54Z"
fetched: "2026-09-10T07:39:46Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Target Info Macros

## Base Reduction
Target base armor and damage reduction
 <code>/run a=UnitResistance("target" , 0) pl=UnitLevel("player") br=(a/(a+400+85*pl)*100) DEFAULT_CHAT_FRAME:AddMessage(string.format("Target Base Armor = ".. a)) DEFAULT_CHAT_FRAME:AddMessage("Target Base Damage Reduction = ".. br .."%")</code>

## Damage Reduction
Target damage reduction after 5 sunders
 <code>/run a=UnitResistance("target",0) pl=UnitLevel("player") br=(a/(a+400+85*pl)*100) sund=((a-2000)/(a+400+85*pl)*100) tot=(br-sund) DEFAULT_CHAT_FRAME:AddMessage("After 5 Sunders = "..sund.."%") DEFAULT_CHAT_FRAME:AddMessage("Total Reduction = "..tot.."%")</code>

## Armor and DPS
Target armor and dps in say
 <code>/run lowDmg, highDmg=UnitDamage("target") SendChatMessage("%t hits for "..math.ceil((lowDmg+highDmg)/2).." damage every "..tostring(math.floor(UnitAttackSpeed("target")*100)/100).." seconds and has "..UnitResistance("target",0).." Armor.","SAY")</code>

## Curse
Curse of Elements
 <code>/run a=SendChatMessage z="target" str=UnitName(z) b=UnitExists(z) CoE=false for i=1,16 do db=UnitDebuff(z,i) if db and string.find(db,"ChillTouch") then CoE=true end end if CoE then a("COE true","SAY") elseif b then str=str.." no CoE!" a(str,"SAY") end</code>

Curse of Recklessness
 <code>/run a=SendChatMessage z="target" str=UnitName(z) b=UnitExists(z) CoR=false for i=1,16 do db=UnitDebuff(z,i) if db and string.find(db,"UnholyStrength") then CoR=true end end if CoR then a("COR true","SAY") elseif b then str=str.." no CoR!" a(str,"SAY")end</code>

Curse of Shadow
 <code>/run a=SendChatMessage z="target" str=UnitName(z) b=UnitExists(z) CoS=false for i=1,16 do db=UnitDebuff(z,i) if db and string.find(db,"Achimonde") then CoS=true end end if CoS then a("COS true","SAY") elseif b then str=str.." no CoS!" a(str,"SAY") end</code>

## Dead or Ghost
Prints if a unit is dead or ghost. Returns nil if alive and 1 if dead.
 <code>/run DEFAULT_CHAT_FRAME:AddMessage(tostring(UnitIsDeadOrGhost("target")))</code>

## Faerie Fire
Says if target has Faerie Fire or not
 <code>/run a=SendChatMessage z="target" str=UnitName(z) b=UnitExists(z) FF=false for i=1,16 do db=UnitDebuff(z,i) if db and string.find(db,"FaerieFire") then FF=true end end if FF then a("FF true","SAY") elseif b then str=str.." no FF!" a(str,"SAY") end</code>

## Attack Power
Target attack power in say
 <code>/run u=UnitAttackPower y="target" a=u(y ,0) SendChatMessage(UnitName(y).." has "..a.." Attack Power. ", SAY)</code>

Checking The Attack Power Modifiers
 <code>/run base, buff, debuff = UnitAttackPower("target"); ap = base + buff + debuff; DEFAULT_CHAT_FRAME:AddMessage(ap.." = "..base.."+"..buff.."+"..debuff);</code>
The command for unit attack power returns (base ap), (ap increases), and (ap decreases) for players. 
The command for unit attack power returns (base ap), (ap changes), and (a buggy -1 )for units. 
Mob melee damage is reduced by 0% to 30% based on the percent of how much ap is reduced (if you reduce a mob's ap by 100%, you reduce its damage by 30%). 
Scaling in raids reduces mobs base damage AND base ap (reducing base ap does not reduce the damage directly, but it makes AP debuffs more effective by making them reduce it by a bigger percent).

## Attack Speed
Prints target attack speed in say
 <code>/run u=UnitAttackSpeed y="target" a=u(y ,0) SendChatMessage(UnitName(y).." has "..a.." seconds per attack. ", SAY)</code>

## Target class
Prints target class in say
 <code>/run u=UnitClass y="target" a=u(y ,0) SendChatMessage(UnitName(y).." is a "..a..". ", SAY)</code>

## Target Name and DPS
Prints target name and DPS
 <code>/run L, H = UnitDamage("target"); S = UnitAttackSpeed("target"); DEFAULT_CHAT_FRAME:AddMessage(format("%s DPS: %d", GetUnitName("target"), (L + H)/(2*S)))</code>

## Target name and damage
Prints target name and damage
 <code>/run L, H = UnitDamage("target") DEFAULT_CHAT_FRAME:AddMessage(format("%s Dmg: %.0f - %.0f", GetUnitName("target"), L, H))</code>

Target name, main hand damage and offhand damage
 <code>/run ld, hd, old, ohd, pb, nb, pm = UnitDamage("target"); SendChatMessage(UnitName("target").."'s main hand attacks hit for "..ld.." to "..hd.. " and their offhand attacks hit for "..old.." to "..ohd);</code>

## Armor and Resist
Send target armor and resist in chat. only works on you and NPCs.
 <code>/run local b={"Armor","Holy","Fire","Nature","Frost","Shadow","Arcane"} a=UnitName("target").."'s stats: " for i=0,6 do a = a..b[i+1]..": "..UnitResistance("target", i)..", " end SendChatMessage(a)</code>

Send target armor and resist in say
 <code>/run u=UnitResistance y="target" a=u(y ,0) h=u(y ,1) f=u(y ,2) n=u(y ,3) fr=u(y ,4) s=u(y ,5) z=u(y ,6) SendChatMessage(UnitName(y).." has "..a.." Armor, "..h.." HR, "..f.." FR, "..n.." NR, "..fr.." FrR, "..s.." SR and "..z.." AR.", SAY)</code>
