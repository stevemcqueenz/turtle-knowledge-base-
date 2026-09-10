---
title: "Macros Paladin"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17669"
topic_id: 17669
forum_id: 4
forum: "General"
author: "Ulukay"
author_authority: "player"
posted: "2025-02-20T19:25:00Z"
last_post: "2025-04-07T13:57:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T09:46:04Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macros Paladin

## Post 120530 by Ulukay (Patch Note Conspiracy Theorist) — 2025-02-20T19:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120530#p120530 | page 1 | era: pre-1.18.1 -->

1.17.2

 -=Flash of Light=- Rank depending on the player's level, mana, and missing health of the target.  Code: Select all

```
/script local UL,UM,UT,AH=UnitLevel,UnitMana;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return false;else if spellName==spell and (spellRank==rank or rank==nil) then if GetSpellCooldown(ix,"spell")==0 then return true; else return false; end;end;end;end;end;if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;AH=UnitHealthMax(UT)-UnitHealth(UT);if UL("player")>57 and UM("player")>139 and AH>343 and GotSpell("Flash of Light","Rank 6") then CastSpellByName("Flash of Light(Rank 6)");else if UL("player")>49 and UM("player")>114 and AH>267 and GotSpell("Flash of Light","Rank 5") then CastSpellByName("Flash of Light(Rank 5)");else if UL("player")>41 and UM("player")>89 and AH>197 and GotSpell("Flash of Light","Rank 4") then CastSpellByName("Flash of Light(Rank 4)");else if UL("player")>33 and UM("player")>69 and AH>145 and GotSpell("Flash of Light","Rank 3") then CastSpellByName("Flash of Light(Rank 3)");else if UL("player")>25 and UM("player")>49 and AH>96 and GotSpell("Flash of Light","Rank 2") then CastSpellByName("Flash of Light(Rank 2)");else if UL("player")>19 and UM("player")>35 and AH>62 and GotSpell("Flash of Light","Rank 1") then CastSpellByName("Flash of Light(Rank 1)");else CastSpellByName("Flash of Light(Rank 1)");end;end;end;end;end;end;
```

 -=-=Holy of Light=- Rank depending on the player's level, mana, and missing health of the target.  Code: Select all

```
/script local UL,UM,UT,AH=UnitLevel,UnitMana;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return false;else if spellName==spell and (spellRank==rank or rank==nil) then if GetSpellCooldown(ix,"spell")==0 then return true; else return false; end;end;end;end;end;if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;AH=UnitHealthMax(UT)-UnitHealth(UT);if UL("player")>59 and UM("player")>659 and AH>1590 and GotSpell("Holy Light","Rank 9") then CastSpellByName("Holy Light(Rank 9)");else if UL("player")>53 and UM("player")>579 and AH>1246 and GotSpell("Holy Light","Rank 8") then CastSpellByName("Holy Light(Rank 8)");else if UL("player")>45 and UM("player")>464 and AH>945 and GotSpell("Holy Light","Rank 7") then CastSpellByName("Holy Light(Rank 7)");else if UL("player")>37 and UM("player")>364 and AH>698 and GotSpell("Holy Light","Rank 6") then CastSpellByName("Holy Light(Rank 6)");else if UL("player")>29 and UM("player")>274 and AH>491 and GotSpell("Holy Light","Rank 5") then CastSpellByName("Holy Light(Rank 5)");else if UL("player")>21 and UM("player")>189 and AH>310 and GotSpell("Holy Light","Rank 4") then CastSpellByName("Holy Light(Rank 4)");else if UL("player")>13 and UM("player")>109 and AH>159 and GotSpell("Holy Light","Rank 3") then CastSpellByName("Holy Light(Rank 3)");else if UL("player")>5 and UM("player")>59 and AH>76 and GotSpell("Holy Light","Rank 2") then CastSpellByName("Holy Light(Rank 2)");else if UL("player")>0 and UM("player")>34 and AH>39 and GotSpell("Holy Light","Rank 1") then CastSpellByName("Holy Light(Rank 1)");else CastSpellByName("Holy Light(Rank 1)");end;end;end;end;end;end;end;end;end;
```

 -=Flash-Holy Light=- Rank and type depending on the player's level, mana, and the target's missing health. When the target's health is below 20%, Flash of Light is used.  Code: Select all

```
/script local UL,UM,UT,AH=UnitLevel,UnitMana;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell and spellRank==rank then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;local function GotBuff(name,target)     local tex,cnt,ix for ix = 1,32 do       tex,cnt = UnitBuff("player",ix)       if not tex then return end;      if strfind(tex,name) then return cnt end;    end;end;if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;AH=UnitHealthMax(UT)-UnitHealth(UT);if UnitHealth(UT)>UnitHealthMax(UT)*0.20 or GotBuff("ability_paladin_judgementblue") then if UL("player")>59 and UM("player")>659 and AH>1590 and GotSpell("Holy Light","Rank 9") then CastSpellByName("Holy Light(Rank 9)");else if UL("player")>53 and UM("player")>579 and AH>1246 and GotSpell("Holy Light","Rank 8") then CastSpellByName("Holy Light(Rank 8)");else if UL("player")>45 and UM("player")>464 and AH>945 and GotSpell("Holy Light","Rank 7") then CastSpellByName("Holy Light(Rank 7)");else if UL("player")>37 and UM("player")>364 and AH>698 and GotSpell("Holy Light","Rank 6") then CastSpellByName("Holy Light(Rank 6)");else if UL("player")>29 and UM("player")>274 and AH>491 and GotSpell("Holy Light","Rank 5") then CastSpellByName("Holy Light(Rank 5)");else if UL("player")>21 and UM("player")>189 and AH>310 and GotSpell("Holy Light","Rank 4") then CastSpellByName("Holy Light(Rank 4)");else if UL("player")>13 and UM("player")>109 and AH>159 and GotSpell("Holy Light","Rank 3") then CastSpellByName("Holy Light(Rank 3)");else if UL("player")>5 and UM("player")>59 and AH>76 and GotSpell("Holy Light","Rank 2") then CastSpellByName("Holy Light(Rank 2)");else if UL("player")>0 and UM("player")>34 and AH>39 and GotSpell("Holy Light","Rank 1") then CastSpellByName("Holy Light(Rank 1)");else CastSpellByName("Holy Light(Rank 1)");end;end;end;end;end;end;end;end;end;else if UL("player")>57 and UM("player")>139 and AH>343 and GotSpell("Flash of Light","Rank 6") then CastSpellByName("Flash of Light(Rank 6)");else if UL("player")>49 and UM("player")>114 and AH>267 and GotSpell("Flash of Light","Rank 5") then CastSpellByName("Flash of Light(Rank 5)");else if UL("player")>41 and UM("player")>89 and AH>197 and GotSpell("Flash of Light","Rank 4") then CastSpellByName("Flash of Light(Rank 4)");else if UL("player")>33 and UM("player")>69 and AH>145 and GotSpell("Flash of Light","Rank 3") then CastSpellByName("Flash of Light(Rank 3)");else if UL("player")>25 and UM("player")>49 and AH>96 and GotSpell("Flash of Light","Rank 2") then CastSpellByName("Flash of Light(Rank 2)");else if UL("player")>19 and UM("player")>35 and AH>62 and GotSpell("Flash of Light","Rank 1") then CastSpellByName("Flash of Light(Rank 1)");else CastSpellByName("Flash of Light(Rank 1)");end;end;end;end;end;end;end;
```

 -=Attack & Holy Strike=-
Auto Attack and Holy Strike on 1 button.
For standard macros. With a recharge check.
It is necessary that the "Attack" is on any panel.  Code: Select all

```
/script local C;for C=1,192 do if IsAttackAction(C)then if not IsCurrentAction(C)then UseAction(C);else for C=1,192 do if GetSpellName(C,"spell")=="Holy Strike"then CastSpellByName("Holy Strike");break;end;end;end;end;break;end
```

 -=Paladin multi-attack=- v3.4 - Uses various paladin skills (Holy Strike, Seal, Judgement, Exorcism, Hammer of Wrath, Holy Shock, Shield\Protection, Consecration+shiftKey,) depending on the situation and the selected aura.
I call it the "One Finger Paladin"  Code: Select all

```
/script local function melee() if UnitExists("target") then return CheckInteractDistance("target",2) end;end;local function ranged() if UnitExists("target") then return not melee() end;end;local function inCombat() return UnitAffectingCombat("player") end;local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitDebuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function action(name,self) if not GotBuff("Whirlwind") then local ix;for ix=1,200 do if GetSpellName(ix,"spell")==name then if GetSpellCooldown(ix,"spell")==0 then CastSpellByName(name,self) return 1 end;end;end;end;end;function Attack_Actions() local mana = UnitMana("player")/UnitManaMax("player") local pHealth = UnitHealth("player")/UnitHealthMax("player") local tHealth = UnitHealth("target")/UnitHealthMax("target") local tType = UnitCreatureType("target") if pHealth<0.1 and action("Lay on Hands",1) then return end;if pHealth<0.2 then if action("Divine Shield",1) then return else if action("Divine Protection",1) then return else if action("Blessing of Protection",1) then return end;end;end;end;if mana>0.2 and pHealth<0.4 and action("Holy Shock",1) then return end;if not GotBuff("FistOfJustice") and not GotBuff("SealOfWisdom") and not GotBuff("SealOfSalvation") and not GotBuff("PrayerOfHealing02") and not GotBuff("LightningShield") and not GotBuff("MageArmor") and not GotBuff("GreaterBlessingofKings") and not GotBuff("GreaterBlessingofWisdom") and not GotBuff("GreaterBlessingofSalvation") and not GotBuff("GreaterBlessingofLight") and not GotBuff("GreaterBlessingofSanctuary") and not GotBuff("GreaterBlessingofKings") then if GotBuff("MindVision") and action("Blessing of Might") then return; else if (GotBuff("DevotionAura") or GotBuff("SealOfKings") or GotBuff("WizardMark") or GotBuff("SealOfFire")) and action("Blessing of Wisdom") then return; else if (GotBuff("MindSooth") or GotBuff("MindVision")) and action("Blessing of Salvation") then return; else action("Blessing of Wisdom");end;end;end;end;if IsShiftKeyDown() then action("Consecration") return end;if UnitExists("target") and not UnitCanAttack("player","target") then ClearTarget() end;for C=1,96 do if IsAttackAction(C) and not IsCurrentAction(C) then UseAction(C) C=96 end;end;if ranged() and tHealth<0.2 and mana>0.2 and action("Hammer of Wrath") then return end;if mana>0.1 and not GotBuff("HolySmite") and not GotBuff("HealingAura") and not GotBuff("RighteousnessAura") and not GotBuff("SealOfWrath") and not GotBuff("InnerRage") and not GotBuff("ThunderBolt") then if GotBuff("MindVision") then if not GotDebuff("HolySmite") and not GotDebuff("HealingAura") and not GotDebuff("RighteousnessAura") and not GotDebuff("SealOfWrath") and action("Seal of Wisdom") then return; else if action("Seal of Command") then return; else if action("Seal of Righteousness") then return; else if action("Seal of the Crusader") then return; end;end;end;end;end;if GotBuff("AuraOfLight") then if not GotDebuff("HolySmite") and not GotDebuff("HealingAura") and not GotDebuff("RighteousnessAura") and not GotDebuff("SealOfWrath") and   action("Seal of Light") then return; else if  action("Seal of the Crusader") then return; else if action("Seal of Command") then return; else if action("Seal of the Righteousness") then return; end;end;end;end;end;if GotBuff("MindSooth") then if not GotDebuff("RighteousnessAura") and action("Seal of Wisdom") then return; else if action("Seal of Command") then return; else if action("Seal of Righteousness") then return; else if action("Seal of the Crusader") then return; end;end;end;end;end;if (GotBuff("DevotionAura") or GotBuff("SealOfKings") or GotBuff("WizardMark") or GotBuff("SealOfFire")) then if not GotDebuff("HolySmite") and not GotDebuff("HealingAura") and not GotDebuff("RighteousnessAura") and not GotDebuff("SealOfWrath") and action("Seal of Light") then return; else if action("Seal of Command") then return; else if action("Seal of Righteousness") then return; else if action("Seal of the Crusader") then return; end;end;end;end;end;end;if (tType=="Demon" or tType=="Undead") and mana>0.2 and action("Exorcism") then return end;if melee() and mana>0.1 then local CS; if GotBuff("CrusaderStrike") then CS=GotBuff("CrusaderStrike"); else CS=0;end;if GotBuff("AuraOfLight") then if math.random(0,CS+1)<=1 then action("Crusader Strike") else action("Holy Strike"); end;else if math.random(0,CS+1)==0 then action("Crusader Strike") else action("Holy Strike"); end;end;end;if melee() and mana>0.1 then if (not GotDebuff("HolySmite") and not GotDebuff("HealingAura") and not GotDebuff("RighteousnessAura") and not GotDebuff("SealOfWrath") and (GotBuff("HolySmite") or GotBuff("HealingAura") or GotBuff("RighteousnessAura") or GotBuff("SealOfWrath")) or (GotBuff("InnerRage") or GotBuff("ThunderBolt"))) and action("Judgement") then return end;end;end;Attack_Actions()
```

## Post 123858 by BelindaStamper — 2025-03-26T03:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123858#p123858 | page 1 | era: pre-1.18.1 -->

Very convincing, thanks.[solitaire bliss](https://solitairebliss.io)

## Post 123897 by WillieSmith — 2025-03-26T09:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123897#p123897 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Thu Feb 20, 2025 7:25 pm**
> 1.17.2
>
>  -=Flash of Light=- Rank depending on the player's level, mana, and missing health of the target.  Code: Select all
>
> ```
> /script local UL,UM,UT,AH=UnitLevel,UnitMana;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return false;else if spellName==spell and (spellRank==rank or rank==nil) then if GetSpellCooldown(ix,"spell")==0 then return true; else return false; end;end;end;end;end;if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;AH=UnitHealthMax(UT)-UnitHealth(UT);if UL("player")>57 and UM("player")>139 and AH>343 and GotSpell("Flash of Light","Rank 6") then CastSpellByName("Flash of Light(Rank 6)");else if UL("player")>49 and UM("player")>114 and AH>267 and GotSpell("Flash of Light","Rank 5") then CastSpellByName("Flash of Light(Rank 5)");else if UL("player")>41 and UM("player")>89 and AH>197 and GotSpell("Flash of Light","Rank 4") then CastSpellByName("Flash of Light(Rank 4)");else if UL("player")>33 and UM("player")>69 and AH>145 and GotSpell("Flash of Light","Rank 3") then CastSpellByName("Flash of Light(Rank 3)");else if UL("player")>25 and UM("player")>49 and AH>96 and GotSpell("Flash of Light","Rank 2") then CastSpellByName("Flash of Light(Rank 2)");else if UL("player")>19 and UM("player")>35 and AH>62 and GotSpell("Flash of Light","Rank 1") then CastSpellByName("Flash of Light(Rank 1)");else CastSpellByName("Flash of Light(Rank 1)");end;end;end;end;end;end;
> ```
>
>
>
>
>
>  -=-=Holy of Light=- Rank depending on the player's level, mana, and missing health of the target.  Code: Select all
>
> ```
> /script local UL,UM,UT,AH=UnitLevel,UnitMana;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return false;else if spellName==spell and (spellRank==rank or rank==nil) then if GetSpellCooldown(ix,"spell")==0 then return true; else return false; end;end;end;end;end;if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;AH=UnitHealthMax(UT)-UnitHealth(UT);if UL("player")>59 and UM("player")>659 and AH>1590 and GotSpell("Holy Light","Rank 9") then CastSpellByName("Holy Light(Rank 9)");else if UL("player")>53 and UM("player")>579 and AH>1246 and GotSpell("Holy Light","Rank 8") then CastSpellByName("Holy Light(Rank 8)");else if UL("player")>45 and UM("player")>464 and AH>945 and GotSpell("Holy Light","Rank 7") then CastSpellByName("Holy Light(Rank 7)");else if UL("player")>37 and UM("player")>364 and AH>698 and GotSpell("Holy Light","Rank 6") then CastSpellByName("Holy Light(Rank 6)");else if UL("player")>29 and UM("player")>274 and AH>491 and GotSpell("Holy Light","Rank 5") then CastSpellByName("Holy Light(Rank 5)");else if UL("player")>21 and UM("player")>189 and AH>310 and GotSpell("Holy Light","Rank 4") then CastSpellByName("Holy Light(Rank 4)");else if UL("player")>13 and UM("player")>109 and AH>159 and GotSpell("Holy Light","Rank 3") then CastSpellByName("Holy Light(Rank 3)");else if UL("player")>5 and UM("player")>59 and AH>76 and GotSpell("Holy Light","Rank 2") then CastSpellByName("Holy Light(Rank 2)");else if UL("player")>0 and UM("player")>34 and AH>39 and GotSpell("Holy Light","Rank 1") then CastSpellByName("Holy Light(Rank 1)");else CastSpellByName("Holy Light(Rank 1)");end;end;end;end;end;end;end;end;end;
> ```
>
>
>
>
>
>  -=Flash-Holy Light=- Rank and type depending on the player's level, mana, and the target's missing health. When the target's health is below 20%, Flash of Light is used.  Code: Select all
>
> ```
> /script local UL,UM,UT,AH=UnitLevel,UnitMana;local function GotSpell(spell,rank) local ix,spellName,spellRank;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell and spellRank==rank then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;local function GotBuff(name,target)     local tex,cnt,ix for ix = 1,32 do       tex,cnt = UnitBuff("player",ix)       if not tex then return end;      if strfind(tex,name) then return cnt end;    end;end;if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;AH=UnitHealthMax(UT)-UnitHealth(UT);if UnitHealth(UT)>UnitHealthMax(UT)*0.20 or GotBuff("ability_paladin_judgementblue") then if UL("player")>59 and UM("player")>659 and AH>1590 and GotSpell("Holy Light","Rank 9") then CastSpellByName("Holy Light(Rank 9)");else if UL("player")>53 and UM("player")>579 and AH>1246 and GotSpell("Holy Light","Rank 8") then CastSpellByName("Holy Light(Rank 8)");else if UL("player")>45 and UM("player")>464 and AH>945 and GotSpell("Holy Light","Rank 7") then CastSpellByName("Holy Light(Rank 7)");else if UL("player")>37 and UM("player")>364 and AH>698 and GotSpell("Holy Light","Rank 6") then CastSpellByName("Holy Light(Rank 6)");else if UL("player")>29 and UM("player")>274 and AH>491 and GotSpell("Holy Light","Rank 5") then CastSpellByName("Holy Light(Rank 5)");else if UL("player")>21 and UM("player")>189 and AH>310 and GotSpell("Holy Light","Rank 4") then CastSpellByName("Holy Light(Rank 4)");else if UL("player")>13 and UM("player")>109 and AH>159 and GotSpell("Holy Light","Rank 3") then CastSpellByName("Holy Light(Rank 3)");else if UL("player")>5 and UM("player")>59 and AH>76 and GotSpell("Holy Light","Rank 2") then CastSpellByName("Holy Light(Rank 2)");else if UL("player")>0 and UM("player")>34 and AH>39 and GotSpell("Holy Light","Rank 1") then CastSpellByName("Holy Light(Rank 1)");else CastSpellByName("Holy Light(Rank 1)");end;end;end;end;end;end;end;end;end;else if UL("player")>57 and UM("player")>139 and AH>343 and GotSpell("Flash of Light","Rank 6") then CastSpellByName("Flash of Light(Rank 6)");else if UL("player")>49 and UM("player")>114 and AH>267 and GotSpell("Flash of Light","Rank 5") then CastSpellByName("Flash of Light(Rank 5)");else if UL("player")>41 and UM("player")>89 and AH>197 and GotSpell("Flash of Light","Rank 4") then CastSpellByName("Flash of Light(Rank 4)");else if UL("player")>33 and UM("player")>69 and AH>145 and GotSpell("Flash of Light","Rank 3") then CastSpellByName("Flash of Light(Rank 3)");else if UL("player")>25 and UM("player")>49 and AH>96 and GotSpell("Flash of Light","Rank 2") then CastSpellByName("Flash of Light(Rank 2)");else if UL("player")>19 and UM("player")>35 and AH>62 and GotSpell("Flash of Light","Rank 1") then CastSpellByName("Flash of Light(Rank 1)");else CastSpellByName("Flash of Light(Rank 1)");end;end;end;end;end;end;end;
> ```
>
>
>
>
>
>  -=Attack & Holy Strike=-
>  Auto Attack and Holy Strike on 1 button.
>  For standard macros. With a recharge check.
>  It is necessary that the "Attack" is on any panel.  Code: Select all
>
> ```
> /script local C;for C=1,192 do if IsAttackAction(C)then if not IsCurrentAction(C)then UseAction(C);else for C=1,192 do if GetSpellName(C,"spell")=="Holy Strike"then CastSpellByName("Holy Strike");break;end;end;end;end;break;end
> ```
>
>
>
>
>
>  -=Paladin multi-attack=- v3.4 - Uses various paladin skills (Holy Strike, Seal, Judgement, Exorcism, Hammer of Wrath, Holy Shock, Shield\Protection, Consecration+shiftKey,) depending on the situation and the selected aura.
>  I call it the "One Finger Paladin"  Code: Select all
>
> ```
> /script local function melee() if UnitExists("target") then return CheckInteractDistance("target",2) end;end;local function ranged() if UnitExists("target") then return not melee() end;end;local function inCombat() return UnitAffectingCombat("player") end;local function GotBuff(name,target) local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix for ix = 1,32 do tex,cnt = UnitDebuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function action(name,self) if not GotBuff("Whirlwind") then local ix;for ix=1,200 do if GetSpellName(ix,"spell")==name then if GetSpellCooldown(ix,"spell")==0 then CastSpellByName(name,self) return 1 end;end;end;end;end;function Attack_Actions() local mana = UnitMana("player")/UnitManaMax("player") local pHealth = UnitHealth("player")/UnitHealthMax("player") local tHealth = UnitHealth("target")/UnitHealthMax("target") local tType = UnitCreatureType("target") if pHealth<0.1 and action("Lay on Hands",1) then return end;if pHealth<0.2 then if action("Divine Shield",1) then return else if action("Divine Protection",1) then return else if action("Blessing of Protection",1) then return end;end;end;end;if mana>0.2 and pHealth<0.4 and action("Holy Shock",1) then return end;if not GotBuff("FistOfJustice") and not GotBuff("SealOfWisdom") and not GotBuff("SealOfSalvation") and not GotBuff("PrayerOfHealing02") and not GotBuff("LightningShield") and not GotBuff("MageArmor") and not GotBuff("GreaterBlessingofKings") and not GotBuff("GreaterBlessingofWisdom") and not GotBuff("GreaterBlessingofSalvation") and not GotBuff("GreaterBlessingofLight") and not GotBuff("GreaterBlessingofSanctuary") and not GotBuff("GreaterBlessingofKings") then if GotBuff("MindVision") and action("Blessing of Might") then return; else if (GotBuff("DevotionAura") or GotBuff("SealOfKings") or GotBuff("WizardMark") or GotBuff("SealOfFire")) and action("Blessing of Wisdom") then return; else if (GotBuff("MindSooth") or GotBuff("MindVision")) and action("Blessing of Salvation") then return; else action("Blessing of Wisdom");end;end;end;end;if IsShiftKeyDown() then action("Consecration") return end;if UnitExists("target") and not UnitCanAttack("player","target") then ClearTarget() end;for C=1,96 do if IsAttackAction(C) and not IsCurrentAction(C) then UseAction(C) C=96 end;end;if ranged() and tHealth<0.2 and mana>0.2 and action("Hammer of Wrath") then return end;if mana>0.1 and not GotBuff("HolySmite") and not GotBuff("HealingAura") and not GotBuff("RighteousnessAura") and not GotBuff("SealOfWrath") and not GotBuff("InnerRage") and not GotBuff("ThunderBolt") then if GotBuff("MindVision") then if not GotDebuff("HolySmite") and not GotDebuff("HealingAura") and not GotDebuff("RighteousnessAura") and not GotDebuff("SealOfWrath") and action("Seal of Wisdom") then return; else if action("Seal of Command") then return; else if action("Seal of Righteousness") then return; else if action("Seal of the Crusader") then return; end;end;end;end;end;if GotBuff("AuraOfLight") then if not GotDebuff("HolySmite") and not GotDebuff("HealingAura") and not GotDebuff("RighteousnessAura") and not GotDebuff("SealOfWrath") and   action("Seal of Light") then return; else if  action("Seal of the Crusader") then return; else if action("Seal of Command") then return; else if action("Seal of the Righteousness") then return; end;end;end;end;end;if GotBuff("MindSooth") then if not GotDebuff("RighteousnessAura") and action("Seal of Wisdom") then return; else if action("Seal of Command") then return; else if action("Seal of Righteousness") then return; else if action("Seal of the Crusader") then return; end;end;end;end;end;if (GotBuff("DevotionAura") or GotBuff("SealOfKings") or GotBuff("WizardMark") or GotBuff("SealOfFire")) then if not GotDebuff("HolySmite") and not GotDebuff("HealingAura") and not GotDebuff("RighteousnessAura") and not GotDebuff("SealOfWrath") and action("Seal of Light") then return; else if action("Seal of Command") then return; else if action("Seal of Righteousness") then return; else if action("Seal of the Crusader") then return; end;end;end;end;end;end;if (tType=="Demon" or tType=="Undead") and mana>0.2 and action("Exorcism") then return end;if melee() and mana>0.1 then local CS; if GotBuff("CrusaderStrike") then CS=GotBuff("CrusaderStrike"); else CS=0;end;if GotBuff("AuraOfLight") then if math.random(0,CS+1)<=1 then action("Crusader Strike") else action("Holy Strike"); end;else if math.random(0,CS+1)==0 then action("Crusader Strike") else action("Holy Strike"); end;end;end;if melee() and mana>0.1 then if (not GotDebuff("HolySmite") and not GotDebuff("HealingAura") and not GotDebuff("RighteousnessAura") and not GotDebuff("SealOfWrath") and (GotBuff("HolySmite") or GotBuff("HealingAura") or GotBuff("RighteousnessAura") or GotBuff("SealOfWrath")) or (GotBuff("InnerRage") or GotBuff("ThunderBolt"))) and action("Judgement") then return end;end;end;Attack_Actions()
> ```

Thanks for sharing these Paladin macros.[block blast unblocked](https://blockblast-unblocked.com) I especially like the practical approach to healing with Flash of Light and Holy Light. The conditional casts based on health percentages are a smart touch. It's clear a lot of thought went into making them effective. I'll give them a try in my next dungeon run.

## Post 125784 by Vladx12345 — 2025-04-06T22:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125784#p125784 | page 1 | era: pre-1.18.1 -->

Some of my macros, some use "Roid-Macros" Addon:

 1) Same button Seal+Judgement. If seal is not up - it raises the Seal, if is up -> Judge:
/cast [mod:alt] Exorcism; [mybuff:Seal_of_Wisdom] Judgement; Seal of Wisdom

 * you can do this for every seal

 2) Same button Holy Strike if shield equiped, Crusader otherwise. Can aslo use ALT to explicitly cast the alternative:
/cast [mod:alt equipped:Shields] Crusader Strike; [equipped:Shields] Holy Strike; [mod:alt] Holy Strike; Crusader Strike;

 * you need Holy Strike when tanking (threat) it is AP based, while Crusader is weapon dmg so is better with 2H.

 3)  Judges the active seal and returns to Righteous Seal. Nice for tanking
/cast [mybuff:Seal_of_Righteousness] Judgement; [mybuff:Seal_of_the_Crusader] Judgement; [mybuff:Seal_of_Wisdom] Judgement; [mybuff:Seal_of_Light] Judgement; Seal of Righteousness;

 * basically you judge the mob with any seal - Wisdom, Life, Holy -> then with this button JUDGE +  tap again for Righteous Seal for agro

## Post 125835 by Mayson (Patch Note Conspiracy Theorist) — 2025-04-07T09:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125835#p125835 | page 1 | era: pre-1.18.1 -->

This is a good and interesting thread. Bumperinos.

## Post 125862 by Elisleris (Bug Report Enthusiast) — 2025-04-07T13:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125862#p125862 | page 1 | era: pre-1.18.1 -->

My one key prot paladin macro (for Roid-Macros):
Check Righteous Fury, use on CD Holy Strike and Holy Shield, put judge of Wisdom on target and mantain Seal of Righteous (judge when ending) Code: Select all

```
/startattack
/cast [nomybuff:Righteous_Fury] Righteous Fury
/cast [nocooldown:Holy_Strike] Holy Strike
/cast [nocooldown:Holy_Shield] Holy Shield
/cast [debuff:Judgement_of_Wisdom<#1 nocooldown:Judgement] Seal of Wisdom
/cast [debuff:Judgement_of_Wisdom<#1 mybuff:Seal_of_Wisdom] Judgement
/cast [nomybuff:Seal_of_Righteousness] Seal of Righteousness
/cast [mybuff:Seal_of_Righteousness<3] Judgement
```

## Post 125864 by Bigsmerf (Grandmaster of Forum PvP) — 2025-04-07T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125864#p125864 | page 1 | era: pre-1.18.1 -->

How is this the guy who asked for melee stats on cloth gear

## Post 125866 by Wolf of Rage (Patch Note Conspiracy Theorist) — 2025-04-07T13:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125866#p125866 | page 1 | era: pre-1.18.1 -->

> **Bigsmerf wrote: Mon Apr 07, 2025 1:47 pm**
> How is this the guy who asked for melee stats on cloth gear

Me when I look at Jewelcrafting-crafted Cloth Bracers with STR and +Weapon DMG on them in this server.

## Post 125867 by Bigsmerf (Grandmaster of Forum PvP) — 2025-04-07T13:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125867#p125867 | page 1 | era: pre-1.18.1 -->

> **Wolf of Rage wrote: Mon Apr 07, 2025 1:56 pm**
> > **Bigsmerf wrote: Mon Apr 07, 2025 1:47 pm**
> > How is this the guy who asked for melee stats on cloth gear
>
>  Me when I look at Jewelcrafting-crafted Cloth Bracers with STR and +Weapon DMG on them in this server.

They actually listened too   crying_turtle

