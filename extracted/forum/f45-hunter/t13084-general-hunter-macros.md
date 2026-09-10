---
title: "General Hunter Macros"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13084"
topic_id: 13084
forum_id: 45
forum: "Hunter"
author: "Ihavenoclothes"
author_authority: "player"
posted: "2024-02-13T12:55:00Z"
last_post: "2024-05-23T02:42:00Z"
post_count: 16
pages: 1
fetched: "2026-09-10T08:13:24Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# General Hunter Macros

## Post 87692 by Ihavenoclothes — 2024-02-13T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87692#p87692 | page 1 | era: pre-1.18.1 -->

- AutoShot

/script if GetUnitName("target")==nil then TargetNearestEnemy() end
/run if CheckInteractDistance("target", 3) and (not PlayerFrame.inCombat) then AttackTarget() elseif not IsAutoRepeatAction(12) then CastSpellByName("Auto Shot") end

 --AutoAttack with Raptor Strike then Mongoose Bite

/run if (not PlayerFrame.inCombat) then AttackTarget() end
/cast Raptor Strike
/cast Mongoose Bite

 -- Serpent Sting with AutoAttack and PetAttack

/script if (not PlayerFrame.inCombat) then AttackTarget() end
/cast Serpent Sting
/script PetAttack()

PetPassiveMode with PetFollow

/script PetPassiveMode();
/script PetFollow();

 --AutoShot or Shoot (for wand)

/run if CheckInteractDistance("target", 3) and (not PlayerFrame.inCombat) then AttackTarget() elseif not IsAutoRepeatAction(12) then CastSpellByName("Auto Shot OR Shoot") end

*Last edited by Ihavenoclothes on Tue Feb 13, 2024 1:06 pm, edited 1 time in total.*

## Post 87693 by Ibux (Patch Note Conspiracy Theorist) — 2024-02-13T13:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87693#p87693 | page 1 | era: pre-1.18.1 -->

<https://github.com/Meridaw/Vanilla-Macros>

## Post 87695 by Ihavenoclothes — 2024-02-13T13:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87695#p87695 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Tue Feb 13, 2024 1:02 pm**
> <https://github.com/Meridaw/Vanilla-Macros>

Thank You for adding that great resource link! I'm just posting a cumulative list of macro's I've found useful.

## Post 93446 by Booglesz — 2024-04-25T00:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93446#p93446 | page 1 | era: pre-1.18.1 -->

/script if UnitExists("target") then if a ==0 then PetAttack(target) a=1 else if UnitExists("pettarget") and UnitIsUnit("target","pettarget") then PetFollow("Leonhardtusk") a=0 else PetAttack(target) end;end; else PetFollow("Leonhardtusk") a=0 end;

Change "Leonhardtusk" to your name.
This is attack and if you press it again it turns on follow and brings them back to you. I have it bound  to one of my mouse buttons for quick on off usage

## Post 93705 by Ulukay (Patch Note Conspiracy Theorist) — 2024-04-28T19:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93705#p93705 | page 1 | era: pre-1.18.1 -->

I'll share my macro, maybe someone will like it. Although it was made more than a year ago, it may still be working.

Shot + Aimed Shot, Trueshot/Arcane Shot or Attack + Raptor Strike, Mongoose Bite, Counterattack depending on the distance to the target.

/script local N,R,C;local UL=UnitLevel;if UnitExists("target")==nil then TargetNearestEnemy();end;if CheckInteractDistance("target",2)==1 then for C=1,200 do if IsAttackAction(C)then if not IsCurrentAction(C)then UseAction(C);end;C=200;end;end;if UL("player")>55 then LV="Rank 8" else if UL("player")>47 then LV="Rank 7" else if UL("player")>39 then LV="Rank 6" else if UL("player")>31 then LV="Rank 5" else if UL("player")>23 then LV="Rank 4" else if UL("player")>15 then LV="Rank 3" else if UL("player")>7 then LV="Rank 2" else if UL("player")>0 then LV="Rank 1" else LV="0" end;end;end;end;end;end;end;end; for C=1,200 do N,R=GetSpellName(C,"spell");if N=="Raptor Strike" and R==LV and GetSpellCooldown(C,"spell")==0 then CastSpellByName("Raptor Strike("..LV..")");C=200;end;end;if UL("player")>57 then LV="Rank 4" else if UL("player")>43 then LV="Rank 3" else if UL("player")>29 then LV="Rank 2" else if UL("player")>15 then LV="Rank 1" else LV="0" end;end;end;end;CastSpellByName("Mongoose Bite("..LV..")");if UL("player")>53 then LV="Rank 3" else if UL("player")>41 then LV="Rank 2" else if UL("player")>30 then LV="Rank 1" else LV="0" end;end;end;CastSpellByName("Counterattack("..LV..")");else if not IsAutoRepeatAction(58)then CastSpellByName("Auto Shot");end;if UL("player")>59 then LV="Rank 6" else if UL("player")>51 then LV="Rank 5" else if UL("player")>43 then LV="Rank 4" else if UL("player")>35 then LV="Rank 3" else if UL("player")>27 then LV="Rank 2" else if UL("player")>19 then LV="Rank 1" else LV="0" end;end;end;end;end;end;for C=1,200 do N,R=GetSpellName(C,"spell");if N=="Aimed Shot" and R==LV and GetSpellCooldown(C,"spell")==0 then CastSpellByName("Aimed Shot("..LV..")");C=200;end;end;for C=1,200 do N,R=GetSpellName(C,"spell");if N=="Trueshot" and GetSpellCooldown(C,"spell")==0 then CastSpellByName("Trueshot");C=200;end;end;if UL("player")>59 then LV="Rank 8" else if UL("player")>51 then LV="Rank 7" else if UL("player")>43 then LV="Rank 6" else if UL("player")>35 then LV="Rank 5" else if UL("player")>27 then LV="Rank 4" else if UL("player")>19 then LV="Rank 3" else if UL("player")>11 then LV="Rank 2" else if UL("player")>5 then LV="Rank 1" else LV="0" end;end;end;end;end;end;end;end; for C=1,200 do N,R=GetSpellName(C,"spell");if N=="Arcane Shot" and R==LV and GetSpellCooldown(C,"spell")==0 then CastSpellByName("Arcane Shot("..LV..")");C=200;end;end;end;

## Post 94202 by Ihavenoclothes — 2024-05-07T10:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94202#p94202 | page 1 | era: pre-1.18.1 -->

Anyone have a good macro to bind Rapid Fire to another attack like Arcane Shot, so it automatically casts on CD?

## Post 94205 by Likaleo (Barrens Chat Casualty) — 2024-05-07T12:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94205#p94205 | page 1 | era: pre-1.18.1 -->

> /autoshot /afk

## Post 94345 by Ihavenoclothes — 2024-05-08T12:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94345#p94345 | page 1 | era: pre-1.18.1 -->

Thanks, but I am trying to have the tooltip show as Arcane shot, so it need it to be the first line.

I'd also like to integrate autoshot into the macro.

## Post 95407 by Ulukay (Patch Note Conspiracy Theorist) — 2024-05-22T10:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95407#p95407 | page 1 | era: pre-1.18.1 -->

Does anyone know what happened to the "Auto Shot" skill and how to fix it? Now its activity cannot be checked with a macro.
Here's an example of a simple macro that previously worked well:
/script local x;for x=1,99 do if GetSpellName(x,"spell")=="Auto Shot"then if not IsAutoRepeatAction(x) then CastSpellByName("Auto Shot") end;end;end;

## Post 95409 by Ibux (Patch Note Conspiracy Theorist) — 2024-05-22T11:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95409#p95409 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Wed May 22, 2024 10:38 am**
> Does anyone know what happened to the "Auto Shot" skill and how to fix it? Now its activity cannot be checked with a macro.
>  Here's an example of a simple macro that previously worked well:
>  /script local x;for x=1,99 do if GetSpellName(x,"spell")=="Auto Shot"then if not IsAutoRepeatAction(x) then CastSpellByName("Auto Shot") end;end;end;

this one work
> /run for i=1,120 do if IsAutoRepeatAction(i) then return end end CastSpellByName("Auto Shot")

## Post 95410 by Ulukay (Patch Note Conspiracy Theorist) — 2024-05-22T11:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95410#p95410 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Wed May 22, 2024 11:03 am**
> > **Ulukay wrote: Wed May 22, 2024 10:38 am**
> > Does anyone know what happened to the "Auto Shot" skill and how to fix it? Now its activity cannot be checked with a macro.
> >  Here's an example of a simple macro that previously worked well:
> >  /script local x;for x=1,99 do if GetSpellName(x,"spell")=="Auto Shot"then if not IsAutoRepeatAction(x) then CastSpellByName("Auto Shot") end;end;end;
>
>   this one work
> > /run for i=1,120 do if IsAutoRepeatAction(i) then return end end CastSpellByName("Auto Shot")

It's not that. The result is the same. When you press it again, the skill is deactivated. You might as well make /script CastSpellByName("Auto Shot").

## Post 95411 by Ibux (Patch Note Conspiracy Theorist) — 2024-05-22T11:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95411#p95411 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Wed May 22, 2024 11:10 am**
> > **Ibux wrote: Wed May 22, 2024 11:03 am**
> > > **Ulukay wrote: Wed May 22, 2024 10:38 am**
> > > Does anyone know what happened to the "Auto Shot" skill and how to fix it? Now its activity cannot be checked with a macro.
> > >  Here's an example of a simple macro that previously worked well:
> > >  /script local x;for x=1,99 do if GetSpellName(x,"spell")=="Auto Shot"then if not IsAutoRepeatAction(x) then CastSpellByName("Auto Shot") end;end;end;
> >
> >   this one work
> > > /run for i=1,120 do if IsAutoRepeatAction(i) then return end end CastSpellByName("Auto Shot")
>
>
>  It's not that. The result is the same. When you press it again, the skill is deactivated. You might as well make /script CastSpellByName("Auto Shot").

make sure you got auto shot some place on your actionbar or it will not work.

## Post 95414 by Ulukay (Patch Note Conspiracy Theorist) — 2024-05-22T13:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95414#p95414 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Wed May 22, 2024 11:03 am**
> make sure you got auto shot some place on your actionbar or it will not work.

I made a mistake. For some reason, it seemed to me that this should be a check from the writings of spells :)
In any case, thanks.

## Post 95415 by Ulukay (Patch Note Conspiracy Theorist) — 2024-05-22T13:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95415#p95415 | page 1 | era: pre-1.18.1 -->

I had to tinker with this to apply it correctly to my macro, but it seems to have worked out well. Try it, hunters.  satisfied_turtle_head
It is desirable that Auto Attack and Auto Shot are on the panel

/script local function melee() if UnitExists("target") then return CheckInteractDistance("target",2);end;end;local function ranged() if UnitExists("target") then return not melee();end;end;local function inCombat() return UnitAffectingCombat("player");end;local function GotBuff(name,target) local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff("player",ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitDebuff(target,ix);if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function ActSpell(spell,rank,sw) local ix,spellName,spellRank=192;while(ix>0) do if ix==0 then return nil;else spellName,spellRank=GetSpellName(ix,"spell");if spellName==spell and (spellRank==rank or rank==nil) then if sw==0 then return ix;end;if sw==1 then return GetSpellCooldown(ix,"spell");end;if sw==nil then if GetSpellCooldown(ix,"spell")==0 then CastSpell(ix,"spell");return ix;end;end;end;ix=ix-1;end;end;end;function Attack_Actions() local mana,X,C=UnitMana("player");if UnitCanAttack("player","target")==nil or UnitHealth("target")<=0 then TargetNearestEnemy();end;if melee() then if GotBuff("Spell_Nature_RavenForm") then ActSpell("Aspect of the Hawk") end;if UnitCanAttack("player","target") and not GotBuff("WhiteDireWolf") and not GotBuff("AspectOfTheMonkey") and not GotBuff("JungleTiger") then if not ActSpell("Aspect of the Wolf") then ActSpell("Aspect of the Monkey"); end; end;for C=1,96 do if IsAttackAction(C) and not IsCurrentAction(C) then CastSpellByName("Attack");C=96;end;end;ActSpell("Raptor Strike");ActSpell("Counterattack");ActSpell("Mongoose Bite");return;end if ranged() then if UnitCanAttack("player","target") and GotBuff("Ability_Mount_WhiteDireWolf") then ActSpell("Aspect of the Wolf")end;if not GotDebuff("Ability_Hunter_SniperShot") and (UnitHealth("target")/UnitHealthMax("target"))>0.50 then ActSpell("Hunter's Mark")end;if not inCombat() and ActSpell("Aimed Shot") then return;end;local _,_,link=string.find(GetInventoryItemLink("player", 18),"(item:%d+:%d+:%d+:%d+)")local _,_,_,_,_,itemtype,_,_,itemTexture=GetItemInfo(link);if itemtype == "Bows" or itemtype == "Guns" or itemtype == "Crossbows" then X=1;for C=1,96 do if itemTexture==GetActionTexture(C) then if IsAutoRepeatAction(C) then X=0;end;break;end;end; if X==1 then CastSpellByName("Auto Shot");return;end;if not GotDebuff("Quickshot") and not GotDebuff("CriticalShot") and not GotDebuff("AimedShot") and UnitCreatureType("target")~="Elemental" and UnitCreatureType("target")~="Mechanical" and UnitCreatureType("target")~="Uncategorized" then if ActSpell("Serpent Sting") then return;end;end;if ActSpell("Arcane Shot") then return;end;if UnitCanAttack("player","target") and not GotBuff("RavenForm") and not GotBuff("AspectOfTheMonkey") and not GotBuff("JungleTiger") then ActSpell("Aspect of the Hawk") end;if ActSpell("Trueshot") then return;end;end;if itemtype == "Thrown" then if ActSpell("Throw") then return;end;end;end;end;Attack_Actions()

*Last edited by Ulukay on Fri May 24, 2024 6:21 am, edited 1 time in total.*

## Post 95461 by Booglesz — 2024-05-23T01:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95461#p95461 | page 1 | era: pre-1.18.1 -->

I recently learned you can use chatgpt to write macros for super macro
start the prompt with "world of warcraft classic hunter macro (enter actions here) comptable with supermacro addon"

heres one i have that shoots concussive when ranged,then arcane then autoshot,and when in melee range casts wing clip.
i spam it in pvp and its pretty effective lmao

/script if CheckInteractDistance("target", 3) then CastSpellByName("Wing Clip"); else if not IsAutoRepeatAction(2) then CastSpellByName("Concussive Shot") end; CastSpellByName("Arcane Shot"); end;

## Post 95466 by Ulukay (Patch Note Conspiracy Theorist) — 2024-05-23T02:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95466#p95466 | page 1 | era: pre-1.18.1 -->

> **Booglesz wrote: Thu May 23, 2024 1:43 am**
> I recently learned you can use chatgpt to write macros for super macro
>  start the prompt with "world of warcraft classic hunter macro (enter actions here) comptable with supermacro addon"
>
>  heres one i have that shoots concussive when ranged,then arcane then autoshot,and when in melee range casts wing clip.
>  i spam it in pvp and its pretty effective lmao
>
>  /script if CheckInteractDistance("target", 3) then CastSpellByName("Wing Clip"); else if not IsAutoRepeatAction(2) then CastSpellByName("Concussive Shot") end; CastSpellByName("Arcane Shot"); end;

I very much doubt that GPT can create a really good and working script. It just gives a splicing of previously created by someone, simple scripts, nothing more. Like all neural networks.

