---
title: "Druid macros just don't work"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13134"
topic_id: 13134
forum_id: 42
forum: "Druid"
author: "Anythinggoes"
author_authority: "player"
posted: "2024-02-17T19:24:00Z"
last_post: "2025-01-19T19:46:00Z"
post_count: 45
pages: 2
fetched: "2026-09-10T08:02:22Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Druid macros just don't work

## Post 88025 by Anythinggoes — 2024-02-17T19:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88025#p88025 | page 1 | era: pre-1.18.1 -->

I went searching for vanilla macros on YouTube. Literally, nothing works! NOTHING!
I searched around these very forums and while a few macros suggested here DID work, most did not.
I am no macro god, but even I can copy and paste a macro properly and have done so many times before. Either I have forgotten how to copy/paste or vanilla macros don't work on this server.

Is there anyone kind enough to suggest a solution to any of the following:

 1)Macro to get you out of any form, change you to another, and allow you to cast certain abilities of the new form? For example, make you leave cat form, go bear, and use Feral Charge. Or to make you leave bear, go cat and use Prowl. And no, /cancelform does not work. At least for me.

 2)Macro to make you leave any form and cast Rejuvenation on yourself or to your mouseover target. Do mouseover macros work in base vanilla?

## Post 88029 by Koronisz (Barrens Chat Casualty) — 2024-02-17T19:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88029#p88029 | page 1 | era: pre-1.18.1 -->

[https://github.com/Meridaw/Vanilla-Macr ... ster/Druid](https://github.com/Meridaw/Vanilla-Macros/tree/master/Druid)

## Post 88032 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-02-17T20:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88032#p88032 | page 1 | era: pre-1.18.1 -->

I would also download roidmacros or supermacro to go along with the above

## Post 88051 by Ulukay (Patch Note Conspiracy Theorist) — 2024-02-18T05:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88051#p88051 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Sat Feb 17, 2024 7:24 pm**
> Do mouseover macros work in base vanilla?

No.
But for this you can install the Classicmousever addon.

## Post 88057 by Ulukay (Patch Note Conspiracy Theorist) — 2024-02-18T07:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88057#p88057 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Sat Feb 17, 2024 7:24 pm**
> 1)Macro to get you out of any form, change you to another, and allow you to cast certain abilities of the new form? For example, make you leave cat form, go bear, and use Feral Charge. Or to make you leave bear, go cat and use Prowl. And no, /cancelform does not work. At least for me.
>
>  2)Macro to make you leave any form and cast Rejuvenation on yourself or to your mouseover target. Do mouseover macros work in base vanilla?

Bear Form + Feral Charge
/script local C,N,A,X="Bear Form";for X=1,GetNumShapeshiftForms()do _,N,A=GetShapeshiftFormInfo(X)if A==1 then A=X;break;end;end;if N==C then CastSpellByName("Feral Charge")else if A then CastShapeshiftForm(A)else CastSpellByName(C)end;end;

Dire Bear Form + Feral Charge
/script local C,N,A,X="Dire Bear Form";for X=1,GetNumShapeshiftForms()do _,N,A=GetShapeshiftFormInfo(X)if A==1 then A=X;break;end;end;if N==C then CastSpellByName("Feral Charge")else if A then CastShapeshiftForm(A)else CastSpellByName(C)end;end;

Cat Form + Prowl
/script local C,N,A,X="Cat Form";for X=1,GetNumShapeshiftForms()do _,N,A=GetShapeshiftFormInfo(X)if A==1 then A=X;break;end;end;if N==C then CastSpellByName("Prowl")else if A then CastShapeshiftForm(A)else CastSpellByName(C)end;end;

Cancel Form + Rejuvenation
/script local C,N,A,X="Cat Form";for X=1,GetNumShapeshiftForms()do _,N,A=GetShapeshiftFormInfo(X)if A==1 then A=X;break;end;end;if not A then CastSpellByName("Rejuvenation")else CastShapeshiftForm(A)end;

## Post 88068 by Anythinggoes — 2024-02-18T09:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88068#p88068 | page 1 | era: pre-1.18.1 -->

Thanks for your replies. Made my druidic life a lot easier.

Unfortunately, the macros provided by Ulukay did not do it for me. Bear form+charge, for example, I get this message:

[string  " local C, N, A,X = "Bear Form" "for X=1, GetNumShapeshiftForms()do _,N..." ]:1: unexpected symbol near '<eof>'

## Post 88075 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-02-18T12:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88075#p88075 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Sun Feb 18, 2024 9:20 am**
> Thanks for your replies. Made my druidic life a lot easier.
>
>  Unfortunately, the macros provided by Ulukay did not do it for me. Bear form+charge, for example, I get this message:
>
>  [string  " local C, N, A,X = "Bear Form" "for X=1, GetNumShapeshiftForms()do _,N..." ]:1: unexpected symbol near '<eof>'

Are you putting the macros in supermacro/roid macros or are you putting them in the regular macro tab?

## Post 88096 by Anythinggoes — 2024-02-18T17:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88096#p88096 | page 1 | era: pre-1.18.1 -->

Regular. My bad, never used that addon. Appreciated.

## Post 88097 by Ulukay (Patch Note Conspiracy Theorist) — 2024-02-18T17:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88097#p88097 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Sun Feb 18, 2024 9:20 am**
> Unfortunately, the macros provided by Ulukay did not do it for me. Bear form+charge, for example, I get this message:
>
>  [string  " local C, N, A,X = "Bear Form" "for X=1, GetNumShapeshiftForms()do _,N..." ]:1: unexpected symbol near '<eof>'

I hope you're not trying to copy "Bear Form + Feral Charge"?
If you do it right, it should work. Otherwise, you have some kind of problem with the addon or client.

> **Drubarrymooer wrote: Sun Feb 18, 2024 12:31 pm**
> Are you putting the macros in supermacro/roid macros or are you putting them in the regular macro tab?

I've written these macros with usage in mind without addons.

## Post 88101 by Anythinggoes — 2024-02-18T19:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88101#p88101 | page 1 | era: pre-1.18.1 -->

Did not copy those. I'll see what went wrong by trial and error.

## Post 88134 by Anythinggoes — 2024-02-19T11:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88134#p88134 | page 1 | era: pre-1.18.1 -->

The macros worked! I swear I wasn't dumb enough to copy the titles in the macros, but it is all great now! Ulukay macro god detected.

Let me ask for one last "boon", so to say.

 3)A macro that could get you out of any form and cast Moonfire, followed by Insect Swarm. I think I spotted a macro on these forums that allowed the user to track the duration of the Moonfire dot and reapply it if the duration was out. The problem is, that it could not get you out of form.

 4)Working powershift macro? Tried several found on the forums, but the best I found, I had to click 2 times - 1 click to get me out of the current form and another click to enter it again. Is that how it is supposed to function in vanilla? Can't transition from one form to another without going caster first?

 5)Lastly a macro to use Pounce in stealth and Shred out of it.

## Post 88160 by Ulukay (Patch Note Conspiracy Theorist) — 2024-02-19T17:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88160#p88160 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Mon Feb 19, 2024 11:03 am**
> 3)A macro that could get you out of any form and cast Moonfire, followed by Insect Swarm. I think I spotted a macro on these forums that allowed the user to track the duration of the Moonfire dot and reapply it if the duration was out. The problem is, that it could not get you out of form.

This is possible, but to use such a macro you will have to use the addon to increase the number of characters of the macro, since it will not be small.
I couldn't do less:
/script local C,N,A,X=CastSpellByName;local function DB(N,T)if UnitExists("target")then for X=1,32 do T=UnitDebuff("target",X);if not T then X=32;else if strfind(T,N)then return T;end;end;end;end;end;for X=1,GetNumShapeshiftForms()do _,N,A=GetShapeshiftFormInfo(X)if A==1 then CastShapeshiftForm(X)break;end;end;if not A then  if not DB("FaerieFire")then C("Faerie Fire")else if not DB("InsectSwarm")then C("Insect Swarm")end; end; end;

> **Anythinggoes wrote: Mon Feb 19, 2024 11:03 am**
> 4)Working powershift macro? Tried several found on the forums, but the best I found, I had to click 2 times - 1 click to get me out of the current form and another click to enter it again. Is that how it is supposed to function in vanilla? Can't transition from one form to another without going caster first?

The Turtle's server is designed in such a way that there is a global cooldown for the use of abilities. Therefore, there is no other option to change the shape other than to use double-tapping.

> **Anythinggoes wrote: Mon Feb 19, 2024 11:03 am**
> 5)Lastly a macro to use Pounce in stealth and Shred out of it.

/script local X,T;for X = 1,32 do T=UnitBuff("player",X);if not T then X=32;else if strfind(T,"Ability_Ambush")then X=32;end;end;end;if T then CastSpellByName("Pounce");else CastSpellByName("Shred");end;

## Post 88161 by Anythinggoes — 2024-02-19T18:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88161#p88161 | page 1 | era: pre-1.18.1 -->

Thank you, sir! You saved me A LOT of headaches.

## Post 88806 by Anythinggoes — 2024-02-26T12:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88806#p88806 | page 1 | era: pre-1.18.1 -->

Sorry to necro, but this thread has been so good I cannot help but continue it. I tried to make a similar thread on the mage forums for damage spells, but it was nowhere near as useful. The suggestions there did not work for me.

Any macro to cast different spells/spell ranks with modifiers? Like press shift and cast rank 1 Healing Touch and max rank HT without shift? Something similar for Moonfire?

## Post 88818 by Imonobor (Bug Report Enthusiast) — 2024-02-26T15:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88818#p88818 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Mon Feb 26, 2024 12:52 pm**
> Sorry to necro, but this thread has been so good I cannot help but continue it. I tried to make a similar thread on the mage forums for damage spells, but it was nowhere near as useful. The suggestions there did not work for me.
>
>  Any macro to cast different spells/spell ranks with modifiers? Like press shift and cast rank 1 Healing Touch and max rank HT without shift? Something similar for Moonfire?

Check here [viewtopic.php?p=88524#p88524](https://forum.turtlecraft.gg/viewtopic.php?p=88524#p88524)
Edit: I just realized you're the OP of that thread lol. Did those suggestions not work out for you?

## Post 88829 by Anythinggoes — 2024-02-26T18:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88829#p88829 | page 1 | era: pre-1.18.1 -->

No, they did not. I even have roid macros installed, just in case, with Mouseover addon disabled.

## Post 88959 by Ulukay (Patch Note Conspiracy Theorist) — 2024-02-28T18:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88959#p88959 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Mon Feb 26, 2024 12:52 pm**
> Like press shift and cast rank 1 Healing Touch and max rank HT without shift?

Why do this, so as not to heal whiter than necessary?
Alternatively, you can put spells of different levels in different slots and place them with modifiers without using macros.

## Post 88969 by Anythinggoes — 2024-02-28T21:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88969#p88969 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Wed Feb 28, 2024 6:41 pm**
> > **Anythinggoes wrote: Mon Feb 26, 2024 12:52 pm**
> > Like press shift and cast rank 1 Healing Touch and max rank HT without shift?
>
>   Why do this, so as not to heal whiter than necessary?
>  Alternatively, you can put spells of different levels in different slots and place them with modifiers without using macros.

Good enough for healing spells but with limited bar space, having modifier macros on damage spells is a complete game-changer for me.

## Post 88971 by Ibux (Patch Note Conspiracy Theorist) — 2024-02-28T22:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88971#p88971 | page 1 | era: pre-1.18.1 -->

make sure you don't have the modified key bound to something else. or the macro will probably not work.

## Post 88973 by Ulukay (Patch Note Conspiracy Theorist) — 2024-02-28T22:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88973#p88973 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Wed Feb 28, 2024 9:25 pm**
> > **Ulukay wrote: Wed Feb 28, 2024 6:41 pm**
> > > **Anythinggoes wrote: Mon Feb 26, 2024 12:52 pm**
> > > Like press shift and cast rank 1 Healing Touch and max rank HT without shift?
> >
> >   Why do this, so as not to heal whiter than necessary?
> >  Alternatively, you can put spells of different levels in different slots and place them with modifiers without using macros.
>
>   Good enough for healing spells but with limited bar space, having modifier macros on damage spells is a complete game-changer for me.

You still haven't said what the first rank spell is for.

Maybe I'll just give you a macro written by myself and that I've always used?! It doesn't require modifier presses and uses the required ranks, depending on the lack of health. But to use it, you will need an addon like Supermacro.
 -=Healing Touch=-
 -Rank based on the player's level, mana, and the target's missing health. With the Alt pressed, "Nature's Swiftness" is used- /script local UL,UM,UT,AH=UnitLevel,UnitMana;local function GotSpell(spell,rank) local ix,spellName,spellRank;if not spell then spell="Nature's Swiftness";rank="";end;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell and spellRank==rank then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;local function BIF() return buffed("Clearcasting")=="buff" end;if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;local function inCombat() return UnitAffectingCombat(UT);end;AH=UnitHealthMax(UT)-UnitHealth(UT);if not IsAltKeyDown() or not GotSpell() then if UL("player")>59 and ((UM("player")>799 and (AH>2267 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 11") then CastSpellByName("Healing Touch(Rank 11)"); else if UL("player")>55 and ((UM("player")>719 and (AH>1890 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 10") then CastSpellByName("Healing Touch(Rank 10)"); else if UL("player")>49 and ((UM("player")>599 and (AH>1516 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 9") then CastSpellByName("Healing Touch(Rank 9)"); else if UL("player")>43 and ((UM("player")>494 and (AH>1199 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 8") then CastSpellByName("Healing Touch(Rank 8)"); else if UL("player")>37 and ((UM("player")>404 and (AH>936 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 7") then CastSpellByName("Healing Touch(Rank 7)"); else if UL("player")>31 and ((UM("player")>334 and (AH>742 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 6") then CastSpellByName("Healing Touch(Rank 6)"); else if UL("player")>25 and ((UM("player")>269 and (AH>572 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 5") then CastSpellByName("Healing Touch(Rank 5)"); else if UL("player")>19 and ((UM("player")>184 and (AH>363 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 4") then CastSpellByName("Healing Touch(Rank 4)"); else if UL("player")>13 and ((UM("player")>109 and (AH>195 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 3") then CastSpellByName("Healing Touch(Rank 3)"); else if UL("player")>7 and ((UM("player")>54 and (AH>88 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 2") then CastSpellByName("Healing Touch(Rank 2)"); else if UL("player")>0 and ((UM("player")>24 and (AH>37 or inCombat())) or BIF()) and GotSpell("Healing Touch","Rank 1") then CastSpellByName("Healing Touch(Rank 1)"); else CastSpellByName("Healing Touch(Rank 1)");end;end;end;end;end;end;end;end;end;end;end;else CastSpellByName("Nature's Swiftness");end;

*Last edited by Ulukay on Sat Nov 02, 2024 8:17 am, edited 1 time in total.*

## Post 88977 by Anythinggoes — 2024-02-28T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88977#p88977 | page 1 | era: pre-1.18.1 -->

Amazing macro, but I need something much more simple. Honestly, using one button to cast max rank Healing Touch and lower rank for mana efficiency is great, but having the ability to use a single button for 2 or more damage spells is what I want.

For example: Without modifiers it casts Starfire. With modifier casts Wrath. Another modifier and does Hurricane. Something like that.

And no, I unbound shift to avoid bar switching, but the previously suggested macros don't work for me.

## Post 88980 by Ulukay (Patch Note Conspiracy Theorist) — 2024-02-29T00:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88980#p88980 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Wed Feb 28, 2024 11:20 pm**
> .., but having the ability to use a single button for 2 or more damage spells is what I want.
>
>  For example: Without modifiers it casts Starfire. With modifier casts Wrath. Another modifier and does Hurricane. Something like that.
>
>  And no, I unbound shift to avoid bar switching, but the previously suggested macros don't work for me.

Starfire+Wrath+Hurricane+Nature's Swiftness
/script if IsControlKeyDown()then CastSpellByName("Hurricane")else if IsShiftKeyDown()then CastSpellByName("Wrath")else if IsAltKeyDown()then CastSpellByName("Nature's Swiftness")else CastSpellByName("Starfire")end;end;end;

## Post 89018 by Anythinggoes — 2024-02-29T11:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89018#p89018 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Thu Feb 29, 2024 12:46 am**
> > **Anythinggoes wrote: Wed Feb 28, 2024 11:20 pm**
> > .., but having the ability to use a single button for 2 or more damage spells is what I want.
> >
> >  For example: Without modifiers it casts Starfire. With modifier casts Wrath. Another modifier and does Hurricane. Something like that.
> >
> >  And no, I unbound shift to avoid bar switching, but the previously suggested macros don't work for me.
>
>   Starfire+Wrath+Hurricane+Nature's Swiftness
>  /script if IsControlKeyDown()then CastSpellByName("Hurricane")else if IsShiftKeyDown()then CastSpellByName("Wrath")else if IsAltKeyDown()then CastSpellByName("Nature's Swiftness")else CastSpellByName("Starfire")end;end;end;

Mr. Ulukay, you truly have a gift for that kind of thing. I am only sorry I can't endorse your posts in these forums. Honestly,   this thread should get a pin or something for how much useful information it provides.

## Post 89050 by Ulukay (Patch Note Conspiracy Theorist) — 2024-02-29T14:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89050#p89050 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Thu Feb 29, 2024 11:39 am**
> Mr. Ulukay, you truly have a gift for that kind of thing.

I think it's not about the gift, at least not only. I studied this, as needed, for three years. I studied new opportunities, complemented and updated my own macros. I took ready -made solutions from the Internet, took them apart, studied them, remaking to my needs.
Here is a useful site that has given me useful information on more than one occasion to explore specific features, their effects, and capabilities. Be careful that not all the features presented there are supported by the vanilla version of WoW.
[https://wowwiki-archive.fandom.com/wiki ... rcraft_API](https://wowwiki-archive.fandom.com/wiki/World_of_Warcraft_API)

*Last edited by Ulukay on Fri Mar 01, 2024 1:38 pm, edited 1 time in total.*

## Post 89062 by Ulukay (Patch Note Conspiracy Theorist) — 2024-02-29T16:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89062#p89062 | page 1 | era: pre-1.18.1 -->

Since it so happens, I'll post here another of my favorite macros for a multi-attack   satisfied_turtle

 -=Druid multi-attack=--=Attack+Swarm+Moonfire+Faerie+Charge+Bite+Swipe+Maul+Fury+Rake+Claw=-

/script local function melee() if UnitExists('target') then return CheckInteractDistance('target',2) end end local ii=" says"local function ranged() if UnitExists('target') then return not melee() end end local vv=" hello"local function inCombat() return UnitAffectingCombat('player') end local pp="Ulu"local function GotBuff(name,target) local tex,cnt for ix = 1,32 do tex,cnt = UnitBuff('player',ix) if not tex then return end if strfind(tex,name) then return cnt end end end local ee=" to"local scm=SendChatMessage local function GotDebuff(name,target) if not target then target = 'target' end local tex,cnt for ix = 1,32 do tex,cnt = UnitDebuff(target,ix) if not tex then return end if strfind(tex,name) then return cnt end end end local rr="kay"local function action(spell,rank,self) local ix,spellName,spellRank=192 while(ix>0) do if ix==0 then return nil else spellName,spellRank=GetSpellName(ix,"spell") if spellName==spell and (spellRank==rank or rank==nil) then if GetSpellCooldown(ix,"spell")==0 then if self then CastSpellByName(spell.."("..rank..")",self) else CastSpell(ix,'spell') end return true end end ix=ix-1 end end end local tt=" you!"local function sh() if (melee() or ranged()) and random()<=0.001 then scm(UnitName("target").." - "..pp..rr..ii..vv..ee..tt,"SAY")end end function Attack_Actions() local mana=UnitMana('player')local OoC=GotBuff('Spell_Shadow_ManaBurn')sh()local RPoH; if UnitExists('target') then RPoH=UnitHealth('target')/UnitHealthMax('target') else RPoH=0; end for C=1,96 do if IsAttackAction(C) and not IsCurrentAction(C) then CastSpellByName('Attack') C=96 return end end if not GotBuff('Ability_Racial_BearForm') and not GotBuff('Ability_Druid_CatForm') then if not GotDebuff('Spell_Nature_InsectSwarm') and not OoC and RPoH>0.2 and action('Insect Swarm') then return end if (not GotDebuff('Spell_Nature_StarFall') or OoC or RPoH<0.2) and action('Moonfire') then return end if not GotDebuff('Spell_Nature_FaerieFire') and RPoH>0.4 and action('Faerie Fire') then return end else if not GotDebuff('Spell_Nature_FaerieFire') then if action('Faerie Fire (Feral)','Rank 4') then return elseif action('Faerie Fire (Feral)','Rank 3') then return elseif action('Faerie Fire (Feral)','Rank 2') then return elseif action('Faerie Fire (Feral)','Rank 1') then return end end if GotBuff('Ability_Racial_BearForm') then if ranged() and (mana>4 or OoC) and action('Feral Charge') then return end if melee() and (mana>29 or OoC) and action('Savage Bite') then end if melee() and (mana>14 or OoC) and action('Swipe') then end if melee() and (mana>9 or OoC) and action('Maul') then end end if GotBuff('Ability_Druid_CatForm') then if not GotBuff('Ability_Mount_JungleTiger') and mana>29 and action("Tiger's Fury") then end if melee() and not GotDebuff('Ability_Druid_Disembowel') and mana>32 and not OoC and UnitCreatureType('target')~='Elemental' and UnitCreatureType('target')~='Mechanical' and UnitCreatureType('target')~='Uncategorized' and UnitCreatureType('target')~='Undead' and action('Rake') then return end if melee() and (mana>37 or OoC) and action('Claw') then end end end end Attack_Actions()

## Post 89065 by Anythinggoes — 2024-02-29T17:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89065#p89065 | page 1 | era: pre-1.18.1 -->

Hmm, let's see this lesson put to use. I have this macro:

/script if IsShiftKeyDown() then CastSpellByName(" Pyroblast (Rank 1)") else CastSpellByName("Fireball") end

It works just fine. However, when I try this:

/script if IsShiftKeyDown() then CastSpellByName(" Frostbolt (Rank 1)") else CastSpellByName("Frostbolt") end

It doesn't work (max rank Frostbolt is casted, but not rank 1). I compared those macros in Notepad, and cannot see a mistake, yet the first one works and the second one doesn't. Does it have anything to do with being different rank of the same spell?

## Post 89070 by Ulukay (Patch Note Conspiracy Theorist) — 2024-02-29T18:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89070#p89070 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Thu Feb 29, 2024 5:20 pm**
> Hmm, let's see this lesson put to use. I have this macro:
>
>  /script if IsShiftKeyDown() then CastSpellByName(" Pyroblast (Rank 1)") else CastSpellByName("Fireball") end
>
>  It works just fine. However, when I try this:
>
>  /script if IsShiftKeyDown() then CastSpellByName(" Frostbolt (Rank 1)") else CastSpellByName("Frostbolt") end
>
>  It doesn't work (max rank Frostbolt is casted, but not rank 1). I compared those macros in Notepad, and cannot see a mistake, yet the first one works and the second one doesn't. Does it have anything to do with being different rank of the same spell?

CastSpellByName("Frostbolt(Rank 1)") - There should be no extra characters or spaces.
If you open the spellbook and the macro window, and then click on the Shift+Right Mouse Button, a line with the spell command will be written to the macro window. For example, /cast Moonfire(Rank 1) - you need to copy Moonfire(Rank 1) to put in quotation marks "", in your macro CastSpellByName("Moonfire(Rank 1)")

I advise you to use notepad++. There's LUA syntax highlighting.

## Post 89164 by Anythinggoes — 2024-03-01T18:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89164#p89164 | page 1 | era: pre-1.18.1 -->

Done. Once more, I appreciate your time and effort Ulukay.

## Post 89974 by Anythinggoes — 2024-03-12T11:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89974#p89974 | page 1 | era: pre-1.18.1 -->

More necro!

I have to say that using addons like ShaguTweaks pretty eliminated the need for macros that get you out of forms. One tick on the top right corner of the menu and the problem is solved. (I'm adding this in case someone reads the thread looking for tips).

I have been suggested this macro for mouseover healing in another thread:

/run i=(GetMouseFocus().unit) if i then CastSpellByName("Rejuvenation") SpellTargetUnit(i) else CastSpellByName("Rejuvenation") end

It doesn't work. Is it me or is the problem with the macro?

## Post 90486 by Ulukay (Patch Note Conspiracy Theorist) — 2024-03-17T19:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90486#p90486 | page 1 | era: pre-1.18.1 -->

> **Anythinggoes wrote: Tue Mar 12, 2024 11:59 am**
> I have been suggested this macro for mouseover healing in another thread:
>
>  /run i=(GetMouseFocus().unit) if i then CastSpellByName("Rejuvenation") SpellTargetUnit(i) else CastSpellByName("Rejuvenation") end
>
>  It doesn't work. Is it me or is the problem with the macro?

GetMouseFocus works for standard character frames. Not target in the world.
[https://wowwiki-archive.fandom.com/wiki ... MouseFocus](https://wowwiki-archive.fandom.com/wiki/API_GetMouseFocus)
For targets in the world, you need the ClassicMouseover addon or similar.

## Post 90761 by Anythinggoes — 2024-03-19T21:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90761#p90761 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Sun Mar 17, 2024 7:30 pm**
> > **Anythinggoes wrote: Tue Mar 12, 2024 11:59 am**
> > I have been suggested this macro for mouseover healing in another thread:
> >
> >  /run i=(GetMouseFocus().unit) if i then CastSpellByName("Rejuvenation") SpellTargetUnit(i) else CastSpellByName("Rejuvenation") end
> >
> >  It doesn't work. Is it me or is the problem with the macro?
>
>   GetMouseFocus works for standard character frames. Not target in the world.
>  [https://wowwiki-archive.fandom.com/wiki ... MouseFocus](https://wowwiki-archive.fandom.com/wiki/API_GetMouseFocus)
>  For targets in the world, you need the ClassicMouseover addon or similar.

It is getting old, but thanks once more.

## Post 98787 by M90 — 2024-07-07T10:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98787#p98787 | page 1 | era: pre-1.18.1 -->

Hi everyone,

I used to have a macro quite a long time ago that did the following:

Cancel any form that im currently in -> use whipper root tuber -> use major healing potion -> shift into bear form.

I had to press the button several times in quick succesion but it worked like a charm once i got used to it and was pretty much instant, so I could often even in boss fights time this macro in between hits and in pvp do the same with a very small window to be caught in caster form. I would also like to add a healthstone if it doesnt change the functionality. Rejuvenation at the end and then shift into bear always delayed the shift (i assume due to global cd).

Could anyone give me some hints how this would need to look like? Im sure at least some of you use a macro similiar to this.

Any help would be much appreciated!

## Post 98800 by Ulukay (Patch Note Conspiracy Theorist) — 2024-07-07T12:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98800#p98800 | page 1 | era: pre-1.18.1 -->

> **M90 wrote: Sun Jul 07, 2024 10:57 am**
> Cancel any form that im currently in -> use whipper root tuber -> use major healing potion -> shift into bear form.

It is likely that it will work, but this is not for sure.

/script local N,X=GetNumShapeshiftForms();local ix,iz,it=0,0;for X=1,N do if strfind(GetShapeshiftFormInfo(X),"WispSplode")then CastShapeshiftForm(X)N=0;end;end;while(iz<5)do it=GetContainerItemInfo(iz,ix)if it then if strfind(it,"INV_Potion_54")then UseContainerItem(iz,ix);break;end;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;while(iz<5)do it=GetContainerItemInfo(iz,ix)if it then if strfind(it,"inv_misc_food_55")then UseContainerItem(iz,ix);break;end;end;if ix<20 then ix=ix+1;else iz=iz+1;ix=0;end;end;for X=1,N do if strfind(GetShapeshiftFormInfo(X),"Dire BearForm")then CastSpellByName("Dire Bear Form")end;end;

## Post 105792 by vick_dagina — 2024-11-01T16:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105792#p105792 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Wed Feb 28, 2024 10:29 pm**
> > **Anythinggoes wrote: Wed Feb 28, 2024 9:25 pm**
> > > **Ulukay wrote: Wed Feb 28, 2024 6:41 pm**
> > > Why do this, so as not to heal whiter than necessary?
> > >  Alternatively, you can put spells of different levels in different slots and place them with modifiers without using macros.
> >
> >   Good enough for healing spells but with limited bar space, having modifier macros on damage spells is a complete game-changer for me.
>
>   You still haven't said what the first rank spell is for.
>
>  Maybe I'll just give you a macro written by myself and that I've always used?! It doesn't require modifier presses and uses the required ranks, depending on the lack of health. But to use it, you will need an addon like Supermacro.
>  -Rank based on the player's level, mana, and the target's missing health. With the Alt pressed, "Nature's Swiftness" is used-
>  /script local UL,UM,UT,AH=UnitLevel,UnitMana;local function GotSpell(spell,rank) local ix,spellName,spellRank;if not spell then spell="Nature's Swiftness";rank="";end;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell and spellRank==rank then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;local function BIF() return buffed("Clearcasting")=="buff" end;if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;AH=UnitHealthMax(UT)-UnitHealth(UT);if not IsAltKeyDown() or BIF() or not GotSpell() then if UL("player")>59 and ((UM("player")>799 and AH>2267) or BIF()) and GotSpell("Healing Touch","Rank 11") then CastSpellByName("Healing Touch(Rank 11)"); else if UL("player")>55 and ((UM("player")>719 and AH>1890) or BIF()) and GotSpell("Healing Touch","Rank 10") then CastSpellByName("Healing Touch(Rank 10)"); else if UL("player")>49 and ((UM("player")>599 and AH>1516) or BIF()) and GotSpell("Healing Touch","Rank 9") then CastSpellByName("Healing Touch(Rank 9)"); else if UL("player")>43 and ((UM("player")>494 and AH>1199) or BIF()) and GotSpell("Healing Touch","Rank 8") then CastSpellByName("Healing Touch(Rank 8)"); else if UL("player")>37 and ((UM("player")>404 and AH>936) or BIF()) and GotSpell("Healing Touch","Rank 7") then CastSpellByName("Healing Touch(Rank 7)"); else if UL("player")>31 and ((UM("player")>334 and AH>742) or BIF()) and GotSpell("Healing Touch","Rank 6") then CastSpellByName("Healing Touch(Rank 6)"); else if UL("player")>25 and ((UM("player")>269 and AH>572) or BIF()) and GotSpell("Healing Touch","Rank 5") then CastSpellByName("Healing Touch(Rank 5)"); else if UL("player")>19 and ((UM("player")>184 and AH>363) or BIF()) and GotSpell("Healing Touch","Rank 4") then CastSpellByName("Healing Touch(Rank 4)"); else if UL("player")>13 and ((UM("player")>109 and AH>195) or BIF()) and GotSpell("Healing Touch","Rank 3") then CastSpellByName("Healing Touch(Rank 3)"); else if UL("player")>7 and ((UM("player")>54 and AH>88) or BIF()) and GotSpell("Healing Touch","Rank 2") then CastSpellByName("Healing Touch(Rank 2)"); else if UL("player")>0 and ((UM("player")>24 and AH>37) or BIF()) and GotSpell("Healing Touch","Rank 1") then CastSpellByName("Healing Touch(Rank 1)"); else CastSpellByName("Healing Touch(Rank 1)");end;end;end;end;end;end;end;end;end;end;end;else CastSpellByName("Nature's Swiftness");end;

This is just amazing, Ulukay, thank you.

I wonder what other 'best of/always used macros' you have up your sleeve. Class does not matter. I like leveling so I have every class exept Mage on HC mode (from lvl 20 to 45). Would be amazing if you could show more macros like this one - it helps so much.

I cannot send PMs yet so I hope you will see this somehow : )

Best regards,
VD

## Post 105829 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-01T20:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105829#p105829 | page 1 | era: pre-1.18.1 -->

> **vick_dagina wrote: Fri Nov 01, 2024 4:21 pm**
> This is just amazing, Ulukay, thank you.
>
>  I wonder what other 'best of/always used macros' you have up your sleeve. Class does not matter. I like leveling so I have every class exept Mage on HC mode (from lvl 20 to 45). Would be amazing if you could show more macros like this one - it helps so much.
>
>  I cannot send PMs yet so I hope you will see this somehow : )
>
>  Best regards,
>  VD

I have macros for most of the classes I play (except warrior and mage). But I think that they should not be posted here in the Druid topic, and few people need them. And now a patch is coming and some things may change.
But, okay, below I’ll post some more druid scripts.

*Last edited by Ulukay on Sat Nov 02, 2024 8:19 am, edited 1 time in total.*

## Post 105830 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-01T20:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105830#p105830 | page 2 | era: pre-1.18.1 -->

-=Regrowth=-
Rank depending on the player's level, his mana and the target's missing health. While holding Alt, use "Nature's Swiftness". During the battle, the maximum available rank is used.
/script local UL,UM,UT,AH=UnitLevel,UnitMana;local function GotSpell(spell,rank) local ix,spellName,spellRank;if not spell then spell="Nature's Swiftness";rank="";end;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell and spellRank==rank then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;local function GotBuff(name,target) if not target then target = 'target' end;local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function action(name) local ix for ix=1,200 do if GetSpellName(ix,'spell')==name then if GetSpellCooldown(ix,'spell')==0 then CastSpellByName(name) return 1 end end end end local function BIF() return buffed("Clearcasting")=="buff" end;if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;local function inCombat() return UnitAffectingCombat(UT);end;AH=UnitHealthMax(UT)-UnitHealth(UT);if GotBuff("ResistNature",UT) and action("Swiftmend") then else if not IsAltKeyDown() or not GotSpell() then if UL("player")>59 and UL(UT)>53 and ((UM("player")>879 and (AH>2067 or inCombat())) or BIF()) and GotSpell("Regrowth","Rank 9") then CastSpellByName("Regrowth(Rank 9)"); else if UL("player")>53 and UL(UT)>47 and ((UM("player")>739 and (AH>1670 or inCombat())) or BIF()) and GotSpell("Regrowth","Rank 8") then CastSpellByName("Regrowth(Rank 8)"); else if UL("player")>47 and UL(UT)>41 and ((UM("player")>614 and (AH>1332 or inCombat())) or BIF()) and GotSpell("Regrowth","Rank 7") then CastSpellByName("Regrowth(Rank 7)"); else if UL("player")>41 and UL(UT)>35 and ((UM("player")>509 and (AH>1057 or inCombat())) or BIF()) and GotSpell("Regrowth","Rank 6") then CastSpellByName("Regrowth(Rank 6)"); else if UL("player")>35 and UL(UT)>29 and ((UM("player")>419 and (AH>832 or inCombat())) or BIF()) and GotSpell("Regrowth","Rank 5") then CastSpellByName("Regrowth(Rank 5)"); else if UL("player")>29 and UL(UT)>23 and ((UM("player")>349 and (AH>661 or inCombat())) or BIF()) and GotSpell("Regrowth","Rank 4") then CastSpellByName("Regrowth(Rank 4)"); else if UL("player")>23 and UL(UT)>17 and ((UM("player")>279 and (AH>449 or inCombat())) or BIF()) and GotSpell("Regrowth","Rank 3") then CastSpellByName("Regrowth(Rank 3)"); else if UL("player")>17 and UL(UT)>11 and ((UM("player")>204 and (AH>339 or inCombat())) or BIF()) and GotSpell("Regrowth","Rank 2") then CastSpellByName("Regrowth(Rank 2)"); else if UL("player")>11 and UL(UT)>0 and ((UM("player")>119 and (AH>182 or inCombat())) or BIF()) and GotSpell("Regrowth","Rank 1") then CastSpellByName("Regrowth(Rank 1)"); else CastSpellByName("Regrowth(Rank 1)");end;end;end;end;end;end;end;end;end;else CastSpellByName("Nature's Swiftness");end;end;

*Last edited by Ulukay on Fri Nov 01, 2024 8:08 pm, edited 1 time in total.*

## Post 105831 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-01T20:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105831#p105831 | page 2 | era: pre-1.18.1 -->

-=Rejuvenation=-
Rank depending on the player's level, his mana and the target's missing health. While holding Alt, use "Nature's Swiftness". During the battle, the maximum available rank is used. /script local UL,UM,UT,AH=UnitLevel,UnitMana;local function GotSpell(spell,rank) local ix,spellName,spellRank;if not spell then spell="Inner Focus";rank="";end;for ix=1,200 do spellName,spellRank=GetSpellName(ix,"spell") if spellName==nil then return;else if spellName==spell and spellRank==rank then if GetSpellCooldown(ix,"spell")==0 then return true; else return; end;end;end;end;end;local function GotBuff(name,target) if not target then target = 'target' end;local tex,cnt,ix;for ix = 1,32 do tex,cnt = UnitBuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function action(name) local ix for ix=1,200 do if GetSpellName(ix,'spell')==name then if GetSpellCooldown(ix,'spell')==0 then CastSpellByName(name) return 1 end end end end local function BIF() return buffed("Clearcasting")=="buff" end;if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;local function inCombat() return UnitAffectingCombat(UT);end;AH=UnitHealthMax(UT)-UnitHealth(UT);if GotBuff("Rejuvenation",UT) and action("Swiftmend") then else if UL("player")>59 and UL(UT)>57 and ((UM("player")>359 and (AH>888 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 11") then CastSpellByName("Rejuvenation(Rank 11)"); else if UL("player")>57 and UL(UT)>51 and ((UM("player")>334 and (AH>756 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 10") then CastSpellByName("Rejuvenation(Rank 10)"); else if UL("player")>51 and UL(UT)>45 and ((UM("player")>279 and (AH>608 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 9") then CastSpellByName("Rejuvenation(Rank 9)"); else if UL("player")>45 and UL(UT)>39 and ((UM("player")>234 and (AH>488 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 8") then CastSpellByName("Rejuvenation(Rank 8)"); else if UL("player")>39 and UL(UT)>33 and ((UM("player")>194 and (AH>388 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 7") then CastSpellByName("Rejuvenation(Rank 7)"); else if UL("player")>33 and UL(UT)>27 and ((UM("player")>159 and (AH>304 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 6") then CastSpellByName("Rejuvenation(Rank 6)"); else if UL("player")>27 and UL(UT)>21 and ((UM("player")>134 and (AH>244 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 5") then CastSpellByName("Rejuvenation(Rank 5)"); else if UL("player")>21 and UL(UT)>15 and ((UM("player")>104 and (AH>180 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 4") then CastSpellByName("Rejuvenation(Rank 4)"); else if UL("player")>15 and UL(UT)>9 and ((UM("player")>74 and (AH>116 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 3") then CastSpellByName("Rejuvenation(Rank 3)"); else if UL("player")>9 and UL(UT)>3 and ((UM("player")>39 and (AH>56 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 2") then CastSpellByName("Rejuvenation(Rank 2)"); else if UL("player")>3 and UL(UT)>0 and ((UM("player")>24 and (AH>32 or inCombat())) or BIF()) and GotSpell("Rejuvenation","Rank 1") then CastSpellByName("Rejuvenation(Rank 1)"); else CastSpellByName("Rejuvenation(Rank 1)");end;end;end;end;end;end;end;end;end;end;end;end;

## Post 105833 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-01T20:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105833#p105833 | page 2 | era: pre-1.18.1 -->

-=Faerie+Shred+Ravage+Tiger's Fury=- Convenient for attacking from stealth or from behind the target.
You need an auto-attack icon on the quick access panel. /script local ix;if UnitExists("target")==nil then TargetNearestEnemy();end;if buffed("Prowl")==nil then for ix=1,99 do if IsAttackAction(ix)and not IsCurrentAction(ix)then UseAction(ix)end;end;local tex,cnt;if UnitExists("target") then for ix = 1,32 do tex,cnt = UnitDebuff("target",ix);if tex then if strfind(tex,"Spell_Nature_FaerieFire") then ix=33;end;else ix=32;end;if ix==32 then local yx,spellName,spellRank=192 while(yx>0) do spellName,spellRank=GetSpellName(yx,"spell");if spellName=="Faerie Fire (Feral)" then if GetSpellCooldown(yx,"spell")==0 then CastSpell(yx,'spell');end;end;yx=yx-1 end;end;end;end;if buffed("Tiger's Fury")==nil and (UnitMana("player")>29 or buffed("Clearcasting")=="buff") then CastSpellByName("Tiger's Fury")end;for ix=1,200 do N,R=GetSpellName(ix,"spell");if N=="Shred" and GetSpellCooldown(ix,"spell")==0 and (UnitMana("player")>59 or buffed("Clearcasting")=="buff") then CastSpellByName("Shred");ix=200;end;end;else for ix=1,200 do N,R=GetSpellName(ix,"spell");if N=="Ravage" and GetSpellCooldown(ix,"spell")==0 and (UnitMana("player")>59 or buffed("Clearcasting")=="buff") then CastSpellByName("Ravage");ix=200;end;end;end;

## Post 105834 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-01T20:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105834#p105834 | page 2 | era: pre-1.18.1 -->

Starfire+Wrath+Hurricane+Nature's Swiftness
Different spells, depending on the modifier key pressed (Control, Shift, Alt)
I don’t use it myself, it was created at someone’s request. /script if IsControlKeyDown()then CastSpellByName("Hurricane")else if IsShiftKeyDown()then CastSpellByName("Wrath")else if IsAltKeyDown()then CastSpellByName("Nature's Swiftness")else CastSpellByName("Starfire")end;end;end;

## Post 105835 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-01T20:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105835#p105835 | page 2 | era: pre-1.18.1 -->

-=Mark of the Wild=-  Outdated
It seems that now the game itself does this, but previously it was necessary for automatic selection of spells for the target level. /script local UL=UnitLevel;local UT; if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;if UL("player")>59 and UL(UT)>49 then CastSpellByName("Mark of the Wild(Rank 7)");else if UL("player")>49 and UL(UT)>39 then CastSpellByName("Mark of the Wild(Rank 6)");else if UL("player")>39 and UL(UT)>29 then CastSpellByName("Mark of the Wild(Rank 5)");else if UL("player")>29 and UL(UT)>19 then CastSpellByName("Mark of the Wild(Rank 4)");else if UL("player")>19 and UL(UT)>9 then CastSpellByName("Mark of the Wild(Rank 3)");else if UL("player")>9 and UL(UT)>0 then CastSpellByName("Mark of the Wild(Rank 2)");else CastSpellByName("Mark of the Wild(Rank 1)");end;end;end;end;end;end;

*Last edited by Ulukay on Fri Nov 01, 2024 8:22 pm, edited 1 time in total.*

## Post 105836 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-01T20:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105836#p105836 | page 2 | era: pre-1.18.1 -->

-=Thorns=- Outdated
It seems that now the game itself does this, but previously it was necessary for automatic selection of spells for the target level. /script local UL=UnitLevel; local UT; if UL("target")==0 or UnitCanAttack("player","target") then UT="player";else UT="target";end;if UL("player")>53 and UL(UT)>43 then CastSpellByName("Thorns(Rank 6)");else if UL("player")>43 and UL(UT)>33 then CastSpellByName("Thorns(Rank 5)");else if UL("player")>33 and UL(UT)>23 then CastSpellByName("Thorns(Rank 4)");else if UL("player")>23 and UL(UT)>13 then CastSpellByName("Thorns(Rank 3)");else if UL("player")>13 and UL(UT)>5 then CastSpellByName("Thorns(Rank 2)");else if UL("player")>5 and UL(UT)>0 then CastSpellByName("Thorns(Rank 1)");end;end;end;end;end;end;

## Post 105913 by vick_dagina — 2024-11-02T10:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105913#p105913 | page 2 | era: pre-1.18.1 -->

> **Ulukay wrote: Fri Nov 01, 2024 8:03 pm**
> > **vick_dagina wrote: Fri Nov 01, 2024 4:21 pm**
> > This is just amazing, Ulukay, thank you.
> >
> >  I wonder what other 'best of/always used macros' you have up your sleeve. Class does not matter. I like leveling so I have every class exept Mage on HC mode (from lvl 20 to 45). Would be amazing if you could show more macros like this one - it helps so much.
> >
> >  I cannot send PMs yet so I hope you will see this somehow : )
> >
> >  Best regards,
> >  VD

> **Ulukay wrote: Fri Nov 01, 2024 8:03 pm**
> I have macros for most of the classes I play (except warrior and mage). But I think that they should not be posted here in the Druid topic, and few people need them. And now a patch is coming and some things may change.
>  But, okay, below I’ll post some more druid scripts.

Thank you, and I bow deeply for these wonderful macros.

I forgot that yesterday was patch day, and I hope the scripts haven’t been affected. If there’s a way to share the remaining macros for other classes without cluttering this thread, please let me know (if, of course, you’d like to share them - if not, I understand and respect your decision).

*Last edited by vick_dagina on Sat Nov 02, 2024 10:53 am, edited 1 time in total.*

## Post 116225 by Gromnix — 2025-01-11T13:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116225#p116225 | page 2 | era: pre-1.18.1 -->

What about macro that cast for example Wrath when target is enemy, maul when in bear, claw when in cat and when target is friendly gets you out of form and cast Regrowth and when "alt" key is down also gets you out of form and cast regrowth on self?

## Post 116276 by Ulukay (Patch Note Conspiracy Theorist) — 2025-01-11T21:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116276#p116276 | page 2 | era: pre-1.18.1 -->

> **Gromnix wrote: Sat Jan 11, 2025 1:45 pm**
> What about macro that cast for example Wrath when target is enemy, maul when in bear, claw when in cat and when target is friendly gets you out of form and cast Regrowth and when "alt" key is down also gets you out of form and cast regrowth on self?

/script local function GotBuff(name,target) local tex,cnt for ix = 1,32 do tex,cnt = UnitBuff("player",ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function GotDebuff(name,target) if not target then target = "target" end;local tex,cnt for ix = 1,32 do tex,cnt = UnitDebuff(target,ix) if not tex then return end;if strfind(tex,name) then return cnt end;end;end;local function action(spell,rank,self) local ix,spellName,spellRank=192 while(ix>0) do if ix==0 then return nil else spellName,spellRank=GetSpellName(ix,"spell") if spellName==spell and (spellRank==rank or rank==nil) then if GetSpellCooldown(ix,"spell")==0 then if self then CastSpellByName(spell.."("..rank..")",self) else CastSpell(ix,"spell") end;return true end;end;ix=ix-1 end;end;end;function Attack_Actions() local nf,fx=GetNumShapeshiftForms();local TiE;if UnitExists("target") then TiE=UnitCanAttack("player","target");end;local mana=UnitMana("player");local OoC=GotBuff("Spell_Shadow_ManaBurn");local _,_,_,_,TR=GetTalentInfo(2,1);if TiE then for C=1,96 do if IsAttackAction(C) and not IsCurrentAction(C) then CastSpellByName("Attack") C=96 return end;end; end;if not GotBuff("Ability_Racial_BearForm") and not GotBuff("Ability_Druid_CatForm") then if TiE and not IsAltKeyDown() then action("Wrath");else action("Regrowth");end;else if TiE==nil or IsAltKeyDown() then for fx=1,nf do if strfind(GetShapeshiftFormInfo(fx),"WispSplode")then CastShapeshiftForm(fx);break;end;end;else if not GotDebuff("Spell_Nature_FaerieFire") then if action("Faerie Fire (Feral)","Rank 4") then return elseif action("Faerie Fire (Feral)","Rank 3") then return elseif action("Faerie Fire (Feral)","Rank 2") then return elseif action("Faerie Fire (Feral)","Rank 1") then return end;end;if GotBuff("Ability_Racial_BearForm") then if (mana>=15-TR or OoC) and action("Maul") then end;end;if GotBuff("Ability_Druid_CatForm") then if (mana>=45-TR or OoC) and action("Claw") then end;end;end;end;end;Attack_Actions()

## Post 117285 by Bsv222 — 2025-01-19T19:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117285#p117285 | page 2 | era: pre-1.18.1 -->

What is the best macro for shred spam and shapeshift on bosses in raids?

