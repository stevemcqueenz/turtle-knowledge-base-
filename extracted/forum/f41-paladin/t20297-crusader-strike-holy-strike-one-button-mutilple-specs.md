---
title: "Crusader Strike / Holy Strike one button, mutilple specs"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20297"
topic_id: 20297
forum_id: 41
forum: "Paladin"
author: "excin"
author_authority: "player"
posted: "2025-07-15T07:26:00Z"
last_post: "2025-10-27T14:28:00Z"
post_count: 22
pages: 1
fetched: "2026-09-10T07:55:44Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Crusader Strike / Holy Strike one button, mutilple specs

## Post 139403 by excin (Barrens Chat Casualty) — 2025-07-15T07:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139403#p139403 | page 1 | era: pre-1.18.1 -->

Here's a macro turned into a slash command addon for automatically alternating Crusader/Holy strike to maintain maximum uptime on the Zeal/Holy Might buffs.

It doesn't require superwow or any other addon.

<https://github.com/Excinerus/ExAutoCSHS>

It can be customized to obtain several rotation patterns, with different priorities

By default it's set to obtain this pattern while using a 2 handed weapon (phys ret dps)

![Image](https://i.imgur.com/UvTcOOU.png)

And this one while using a 1 handed one (tanking building zeal along the fight while doing max threat)

![Image](https://i.imgur.com/BChT4eb.png)

It can be set to cast Exorcism on CD when CS/HS is on CD

This doesn't require superwow, uses combat log and creates timestamps to make timers

*Last edited by excin on Fri Oct 24, 2025 9:32 am, edited 2 times in total.*

## Post 139413 by Elisleris (Bug Report Enthusiast) — 2025-07-15T08:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139413#p139413 | page 1 | era: pre-1.18.1 -->

Macro for RoidMacros
/startattack
/cast [mybuff:Holy_Might<6] Holy Strike; Crusader Strike
/cast [nocooldown:Repentance] Repentance

## Post 139772 by Rindexxx (Barrens Chat Casualty) — 2025-07-16T01:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139772#p139772 | page 1 | era: pre-1.18.1 -->

#showtooltip
/script if not UnitExists("target") then TargetNearestEnemy() end
/startattack
/castsequence reset=17 Holy Strike(Rank 8), Crusader Strike(Rank 5), Crusader Strike(Rank 5)
/cancelaura bladestorm
/cancelaura hand of protection

## Post 140143 by Temannen — 2025-07-17T20:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140143#p140143 | page 1 | era: pre-1.18.1 -->

Hey, how do I make this addon work? Nothing happens when I type /AutoCS openHS prioZeal in chat in-game. Do I need any other addons?

## Post 140148 by Azcron (Patch Note Conspiracy Theorist) — 2025-07-17T20:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140148#p140148 | page 1 | era: pre-1.18.1 -->

> **Temannen wrote: Thu Jul 17, 2025 8:41 pm**
> Hey, how do I make this addon work? Nothing happens when I type /AutoCS openHS prioZeal in chat in-game. Do I need any other addons?

This is not an addon. Its a macro. You need to open your macros by typing /m then copy /AutoCS openHS prioZeal into the text field.

## Post 140156 by Temannen — 2025-07-17T21:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140156#p140156 | page 1 | era: pre-1.18.1 -->

> **Azcron wrote: Thu Jul 17, 2025 8:52 pm**
> > **Temannen wrote: Thu Jul 17, 2025 8:41 pm**
> > Hey, how do I make this addon work? Nothing happens when I type /AutoCS openHS prioZeal in chat in-game. Do I need any other addons?
>
>  This is not an addon. Its a macro. You need to open your macros by typing /m then copy /AutoCS openHS prioZeal into the text field.

That's what I'm doing. Nothing happens at all when I click the macro on my spellbar. That's why I wondered if I had to pair it with another addon or something. ^^

## Post 140475 by excin (Barrens Chat Casualty) — 2025-07-19T12:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140475#p140475 | page 1 | era: pre-1.18.1 -->

> **Temannen wrote: Thu Jul 17, 2025 9:00 pm**
> That's what I'm doing. Nothing happens at all when I click the macro on my spellbar. That's why I wondered if I had to pair it with another addon or something. ^^

Did you have a target ? x)  you simply use the macro instead of the attack,  you can pair it with a #showtooltip and a /startattack if you have the addons for those.

There's no UI in it, just logic to track casts and chose different rotations depending on the arguments.

If you had a target and something went wrong you should at least see a lua error, let me know how it's going.

## Post 140525 by Temannen — 2025-07-19T19:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140525#p140525 | page 1 | era: pre-1.18.1 -->

> **excin wrote: Sat Jul 19, 2025 12:15 pm**
> > **Temannen wrote: Thu Jul 17, 2025 9:00 pm**
> > That's what I'm doing. Nothing happens at all when I click the macro on my spellbar. That's why I wondered if I had to pair it with another addon or something. ^^
>
>   Did you have a target ? x)  you simply use the macro instead of the attack,  you can pair it with a #showtooltip and a /startattack if you have the addons for those.
>
>  There's no UI in it, just logic to track casts and chose different rotations depending on the arguments.
>
>  If you had a target and something went wrong you should at least see a lua error, let me know how it's going.

I appreciate the reply. I've uploaded a YT-video, please have a look:
[embed: https://www.youtube.com/embed/_WJUMHNwF70]

Nothing happens at all when I click, with or without any addons (except for your github)

## Post 140568 by excin (Barrens Chat Casualty) — 2025-07-20T00:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140568#p140568 | page 1 | era: pre-1.18.1 -->

> **Temannen wrote: Sat Jul 19, 2025 7:30 pm**
> Nothing happens at all when I click, with or without any addons (except for your github)

It's attempting to cast a crusader strike rank you don't have, my bad, didn't think about lower level characters x)

I'll push a quick fix that ignores mana cost and downranking for lower level characters until i figure out a better solution

## Post 140574 by Temannen — 2025-07-20T04:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140574#p140574 | page 1 | era: pre-1.18.1 -->

> **excin wrote: Sun Jul 20, 2025 12:49 am**
> > **Temannen wrote: Sat Jul 19, 2025 7:30 pm**
> > Nothing happens at all when I click, with or without any addons (except for your github)
>
>   It's attempting to cast a crusader strike rank you don't have, my bad, didn't think about lower level characters x)
>
>  I'll push a quick fix that ignores mana cost and downranking for lower level characters until i figure out a better solution

That explains it! Thank you so much man, you're awesome! <3

## Post 151041 by Cuivienel — 2025-09-09T21:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151041#p151041 | page 1 | era: pre-1.18.1 -->

Whenever I log in and want to use this macro

> /AutoCS openHS prioZeal exorcism

it is not running the macro but just putting the content of the macro in /s

However, when I edit the macro (i.e. I just add a space at the end and then delete it again), the macro works again. That has me a bit puzzled.

## Post 151811 by Nectiusleo — 2025-09-15T13:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151811#p151811 | page 1 | era: pre-1.18.1 -->

> **Cuivienel wrote: Tue Sep 09, 2025 9:36 pm**
> Whenever I log in and want to use this macro
>
> > /AutoCS openHS prioZeal exorcism
>
>   it is not running the macro but just putting the content of the macro in /s
>
>  However, when I edit the macro (i.e. I just add a space at the end and then delete it again), the macro works again. That has me a bit puzzled.

It only happens because of Exorcism, removing it fixes the problem.
I think when you log in first (or reload), it takes some time to fully load the addon and DLLs to take effect. About 15-20 secs. (Reason might be something else tho...)
However, you don't need to change anything, just keep spamming it, and it will start working as usual.

Maybe you will miss the first Exorcism or use it a bit delayed but it's not really a big annoyance in my opinion.
I checked the code, and didn't see any clear optimization points at first glance. So I will use it as it is for now.

## Post 152097 by Gattare — 2025-09-17T13:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152097#p152097 | page 1 | era: pre-1.18.1 -->

Hello, the "prioZeal" doesn't seem to be working.

I'm prot with 1h weapon, my macro is /AutoCS openAuto prioZeal

But in practice, CS will only be used when Zeal is about to expire, and will not prioritize to 3 stacks.

## Post 153194 by Matzeroe — 2025-09-25T19:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153194#p153194 | page 1 | era: pre-1.18.1 -->

<https://github.com/kninib12a/ExAutoCSHS>

i think this fork is fixing the problem

## Post 153225 by Crake (Patch Note Conspiracy Theorist) — 2025-09-25T23:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153225#p153225 | page 1 | era: pre-1.18.1 -->

I'm genuinely baffled by what appears to be a horrendous amount of spaghetti code in that addon... I'm pretty sure you can write an entire rotation's macro in about 50-100 lines, yet that thing is 250+ just to track CS/HS?

Hell, i managed to write assassin rogue's entire rotation into the new 510 macro character limit with room to spare for #showtooltip, and /startattack in there

## Post 156850 by excin (Barrens Chat Casualty) — 2025-10-24T09:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156850#p156850 | page 1 | era: 1.18.1-announced-pre-release -->

> **Gattare wrote: Wed Sep 17, 2025 1:55 pm**
> Hello, the "prioZeal" doesn't seem to be working.

Fixed on last update, sorry for the late reply

## Post 156853 by excin (Barrens Chat Casualty) — 2025-10-24T09:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156853#p156853 | page 1 | era: 1.18.1-announced-pre-release -->

> **Crake wrote: Thu Sep 25, 2025 11:34 pm**
> I'm genuinely baffled by what appears to be a horrendous amount of spaghetti code in that addon... I'm pretty sure you can write an entire rotation's macro in about 50-100 lines, yet that thing is 250+ just to track CS/HS?
>
>  Hell, i managed to write assassin rogue's entire rotation into the new 510 macro character limit with room to spare for #showtooltip, and /startattack in there

The code isn't the macro.

when you type #showtooltip or /startattack in the macro window, that gets replaced by a bunch of "spaghetti code" on LUA side

That's what RoidsMacro, SuperMacro, and Zorlens are doing for you, the "spaghetti code"

This addon doesn't have any dependencies, and thus has to include all the "spaghetti code" to hook into combat log, react to events, keep up timers and manage state.

And thus allowing you to automate your whole rotation with one line !! (better than 50 !!) with a simple command like
/AutoCSHS OpenCS MoreHS

## Post 157229 by Crake (Patch Note Conspiracy Theorist) — 2025-10-27T00:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157229#p157229 | page 1 | era: 1.18.1-announced-pre-release -->

> **excin wrote: Fri Oct 24, 2025 9:45 am**
> > **Crake wrote: Thu Sep 25, 2025 11:34 pm**
> > I'm genuinely baffled by what appears to be a horrendous amount of spaghetti code in that addon... I'm pretty sure you can write an entire rotation's macro in about 50-100 lines, yet that thing is 250+ just to track CS/HS?
> >
> >  Hell, i managed to write assassin rogue's entire rotation into the new 510 macro character limit with room to spare for #showtooltip, and /startattack in there
>
>   The code isn't the macro.
>
>  when you type #showtooltip or /startattack in the macro window, that gets replaced by a bunch of "spaghetti code" on LUA side
>
>  That's what RoidsMacro, SuperMacro, and Zorlens are doing for you, the "spaghetti code"
>
>  This addon doesn't have any dependencies, and thus has to include all the "spaghetti code" to hook into combat log, react to events, keep up timers and manage state.
>
>  And thus allowing you to automate your whole rotation with one line !! (better than 50 !!) with a simple command like
>  /AutoCSHS OpenCS MoreHS

I'm aware of the differences between macros and addons. The actual functional code of my rogue's macro is written in raw lua (specifically so it could be shared with people with 0 addon dependencies), the point was that i had enough space to spare even after that to fit in #showtooltip and /startattack after the fact, and that was just to make it look nice on my hotbar and to kick off autoattacking.

For reference, here is an entire assassination rogue's rotation in raw lua that fits in one macro without any #showtooltip or /startattack:

/run c=CastSpellByName p=GetComboPoints() g=GetPlayerBuff t=GetPlayerBuffTexture s=strfind if p==5 then c("Rupture")end
/run i=0 m=0 while not (g(i)==-1) do if (s(t(g(i)),"INV_Sword_31")) then m=1 end i=i+1 end if m==0 then if p<5 then c("Envenom")end end
/run i=0 m=0 while not (g(i)==-1) do if (s(t(g(i)),"Ability_Rogue_SliceDice")) then m=1 end i=i+1 end if m==0 then if p<5 then c("Slice and Dice")end end
/run c("Noxious Assault")
/run if (not PlayerFrame.inCombat) then AttackTarget() end

A better way to track CS/HS would be by actually checking the buff duration remaining. If there's less than 6 seconds left on holy strength, use holy strike, otherwise use crusader strike. If you're in prot, then just check if zeal is at 3 stacks, if it's not use CS, if it is check if it has less than 6 seconds left, in which case refresh it, otherwise just use HS

## Post 157245 by Kerenis (Patch Note Conspiracy Theorist) — 2025-10-27T04:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157245#p157245 | page 1 | era: 1.18.1-announced-pre-release -->

As far as I see in Ambershire, most pallies only use Holy Strike and stay right behind mages and rogues in dps.

Holy Strike party regeneration is too good  to waste CDs on Crusader Strike

## Post 157276 by excin (Barrens Chat Casualty) — 2025-10-27T09:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157276#p157276 | page 1 | era: 1.18.1-announced-pre-release -->

> **Crake wrote: Mon Oct 27, 2025 12:22 am**
> For reference, here is an entire assassination rogue's rotation in raw lua that fits in one macro without any #showtooltip or /startattack:
>
>  /run c=CastSpellByName p=GetComboPoints() g=GetPlayerBuff t=GetPlayerBuffTexture s=strfind if p==5 then c("Rupture")end
>  /run i=0 m=0 while not (g(i)==-1) do if (s(t(g(i)),"INV_Sword_31")) then m=1 end i=i+1 end if m==0 then if p<5 then c("Envenom")end end
>  /run i=0 m=0 while not (g(i)==-1) do if (s(t(g(i)),"Ability_Rogue_SliceDice")) then m=1 end i=i+1 end if m==0 then if p<5 then c("Slice and Dice")end end
>  /run c("Noxious Assault")
>  /run if (not PlayerFrame.inCombat) then AttackTarget() end

yup and it's not that complicated, would look even prettier with roids macros and wouldn't warrant a forum post :D

Using UnitBuff/GetPlayerBuff/GetPlayerBuffTexture to test against a texture wouldn't work when over visual buff cap which you're always at as a ret paladin in any high level raiding environment

UnitBuff didn't return spell ID until months after I posted this, and visual buff cap was short of 20, and i reach visual cap even with the expanded buff frame now

> **Crake wrote: Mon Oct 27, 2025 12:22 am**
> A better way to track CS/HS would be by actually checking the buff duration remaining. If there's less than 6 seconds left on holy strength, use holy strike, otherwise use crusader strike. If you're in prot, then just check if zeal is at 3 stacks, if it's not use CS, if it is check if it has less than 6 seconds left, in which case refresh it, otherwise just use HS

So now you're left having to implement this logic using something else, like combat log and timers for example.

I could probably fit that in a unreadable blurb like the one you posted, but you wouldn't be satisfied, you'd call it couscous code even.

And when you've already built a hook set up and a state machine for one rotation, why not use it for multiple kinds of rotations, add some checks for mana, and then neat commands etc..

## Post 157278 by excin (Barrens Chat Casualty) — 2025-10-27T10:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157278#p157278 | page 1 | era: 1.18.1-announced-pre-release -->

> **Kerenis wrote: Mon Oct 27, 2025 4:41 am**
> As far as I see in Ambershire, most pallies only use Holy Strike and stay right behind mages and rogues in dps.
>
>  Holy Strike party regeneration is too good  to waste CDs on Crusader Strike

Holystrike has a lot of base damage, enough to make it viable during your stage of progression without even scaling with your weapon.

Later on it falls off and becomes a problem even for prot warriors.

In t2.5-t3 it becomes a periodic buff button like the rotation shown above, and in K40, most spell rets wouldn't even touch it.

This is a big design problem now, with the spell power scaling strike only being used by AP ret players because it's being forced on them.

## Post 157326 by Kerenis (Patch Note Conspiracy Theorist) — 2025-10-27T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157326#p157326 | page 1 | era: 1.18.1-announced-pre-release -->

> **excin wrote: Mon Oct 27, 2025 10:01 am**
> > **Kerenis wrote: Mon Oct 27, 2025 4:41 am**
> > As far as I see in Ambershire, most pallies only use Holy Strike and stay right behind mages and rogues in dps.
> >
> >  Holy Strike party regeneration is too good  to waste CDs on Crusader Strike
>
>   Holystrike has a lot of base damage, enough to make it viable during your stage of progression without even scaling with your weapon.
>
>  Later on it falls off and becomes a problem even for prot warriors.
>
>  In t2.5-t3 it becomes a periodic buff button like the rotation shown above, and in K40, most spell rets wouldn't even touch it.
>
>  This is a big design problem now, with the spell power scaling strike only being used by AP ret players because it's being forced on them.

We have crossed thresold where no fun is allowed anymore. Twow is now "heres the pizza, eat it" without the chance to add extra jalapeños

