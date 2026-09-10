---
title: "Tag Farming Guide"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7954"
topic_id: 7954
forum_id: 4
forum: "General"
author: "Speedz1337"
author_authority: "player"
posted: "2023-07-03T14:07:00Z"
last_post: "2026-01-16T11:47:00Z"
post_count: 16
pages: 1
fetched: "2026-09-10T09:37:43Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Tag Farming Guide

## Post 51133 by Speedz1337 (Patch Note Conspiracy Theorist) — 2023-07-03T14:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51133#p51133 | page 1 | era: pre-1.18.1 -->

I have tag farmed many toons over my time in Twow and have learned things that could be helpful for people in the future if you have a lv 60 that can tag farm your lower level toons to level 60.  I have been playing turtle wow since 2021 and I would like to pass down the knowledge that I have gained over the years of playing.

 **Tag Farming**
What is tag farming?
- Tag farming is when a lower level character hits a mob first which then allows that player to gain all the loot, experience, and reputation from the mob exclusively allowing a higher level character to kill the mob for the benefit of the lower level character.

- When starting tag farming it is important that you start out with 150% rested experience for maximum mileage.
 **Macros for Tag Farming**
- This macro below will cast the spell of your choosing whenever the unit it tapped so that the level 60 who is tag farming you will not accidently tag the mob they are trying to kill for the low level.
/run if UnitIsTapped("target") then CastSpellByName("Sinister Strike") end

 **Rested Experience**
What is rested experience?
- The Rested XP system is designed to reward you for returning to the game after you have been away for a while. It is a bar that adds to your Experience bar while you are offline, and it increases the XP you gain from killing mobs until the bar is depleted. The Rested XP bar grows up to 150% of your level or 30 "bubbles" of XP on the default UI.

- The duration to get to full rested using two tents is 9 minutes!

- A script to show the rested exp bar is listed below in the spoiler tab
/script p="player";x=UnitXP(p);m=UnitXPMax(p);r=GetXPExhaustion();if -1==(r or -1)then t="No rest."else t="Rest: "..(math.floor(20*r/m+0.5)).." bubbles ("if r+x<m then t=t..r else t=t.."level +"..(r+x-m)end t=t.."XP)"end;DEFAULT_CHAT_FRAME:AddMessage(t)

- In this server there is a custom way of getting rested experience that fills your rested bar to 150% within 20 minutes. The forum post that guides you through being able to make a tent is listed [here](https://forum.turtlecraft.gg/viewtopic.php?f=4&t=706).
 **Warmode**
- Warmode allows you to gain 5% exp from mob kills this challenge is able to be started at the battle masters at main towns. This challenge will flag you for pvp though so if you are worried about dying to the opposite faction I would not suggest picking this up. If you have already enabled warmode you can go back to the battle master to end the war mode challenge.  You can toggle warmode again after that point without any consequences.

- The Battle Masters can be found at each of the respective faction cities.  If you are having issues finding it I have a search from the turtle db that will help you out [for Horde](https://database.turtlecraft.gg/?npc=3890) or [for Alliance](https://database.turtlecraft.gg/?npc=15008).
 **Rules of Turtle WoW**
- The rules of turtle wow state that you cannot multibox while being flagged.  Either character cannot be flagged while you multibox so if you are going to tag farm while in warmode you are not allowed to do so under the rules listed [here](https://turtlecraft.gg/#/rules#multi-boxing).

- However if you are not multiboxing you can warmode with a higher level character.
 **Suggested Addons**

Titan Panel EXP <https://legacy-wow.com/vanilla-addons/titan-panel-xp/>
- Tells you how much time you have till next level based on xp/hr total.  This addon requires the use of an additional Titan Panel addon listed [here](https://legacy-wow.com/vanilla-addons/titan-panel/).
Shagu Tweaks <https://shagu.org/ShaguTweaks/>
- Is required for Shagu Tweaks Mod
Shagu Tweaks Mod <https://github.com/GryllsAddons/ShaguTweaks-Mods>
- Has an improved exp bar that tells you what your rested exp is without the use of a script/macro
Shagu Kill <https://shagu.org/ShaguKill/>
- Every time you gain experience it tells you how many kills you need for the next level.
 **Suggested Items/Spells**

[Spiked Defias Spaulders](https://database.turtlecraft.gg/?item=81005)
- Drops from Edwin VanCleef available at lvl 20
[Band of Thorns](https://database.turtlecraft.gg/?item=5007)
- AH item all players can get at lvl 26
[Thorns](https://database.turtlecraft.gg/?spell=467)
- If you tag farming with a druid this is a good spell to use for tag farming
[Technician's Servoshield](https://database.turtlecraft.gg/?item=81311)
- Little bit pricey from a vendor.  Horde only but its a shield so will help your boosted toon not to die so much.
[Enchant Boots  Minor Speed](https://database.turtlecraft.gg/?spell=13890)
- Very cheap enchant to put on a boosted toon to make things cumulatively faster.
 **Mob Difficulty Colors**
- Based on your current level difference between you and the mob you will be either Grey, Green, Yellow, Orange, Red or Skull to a mob.

- Grey mobs will give no exp to you so this is why this is important for tag farming.

- Below is the chart of Your level vs the mobs level and lists which color the mob difficulty will be.
![Image](https://i.imgur.com/733Zufo.png)
![Image](https://i.imgur.com/dLf4K1A.png)
![Image](https://i.imgur.com/MWdET91.png)

 **XP till lvl chart**

![Image](https://i.imgur.com/FYeKKfy.png)

 **Starting the Mob Grind**
- Elite mobs are usually the best way to go when tag farming because of the heightened experience gain from elites, BUT there are no elites that are convenient to farm between the levels of 1-13.  So that means that you just kill whatever is in your level range.

- It is also vital that you are not in a party with the other player due to the experience shared in a party.  The experience split while a lv 60 is in the group would tank your experience gain by a substantial amount which defeats the purpose of this grind.

- This server is cross faction so both alliance and horde can farm this together.  HOWEVER when multiboxing this grind goes to a very slow pace because you cannot /follow the other faction while not in a party.  So it is suggested if doing this solo you level a toon that is on the same faction as your main.

- The work around to having a toon that isn't in the same faction is to /follow while the other toon is in the same party.  The /follow mechanic will persist when you leave the party.

- The listed macro will help you follow a cross faction target if they are added to friends using lazypig they will auto accept the invite. You must press the below macro twice in order to invite/follow then leave group right after everytime you tab back and forth.
/inv (Name)
/script TargetByName("(Name)", true);
/follow
/uninvite (Name)

- The next macro just uses the above macro but without using invite and uninvite lines.  This is what you would use if both the character you are multiboxing are in the same faction.
/script TargetByName("(Name)", true);
/follow

 **13 through 19**
- The first elites start at level 13 and are grouped with elites that are up to level 15.  So that it why I suggest being level 13 to start this grind out.

- I would suggest using either a wand or another ranged weapon to try to pull these guys because spells have a chance to resist and I have found that ranged weapons tend not to miss as often as melee weapons or spells.  But if you are a class that cannot use ranged weapons your going to need to use a spell to tag them.

- We are going to start in Silverpine Forest with the elite worgen that are posted here. The picture to the exact location is listed below.
![Image](https://i.imgur.com/Q6XlcVC.png)
- At around level 16 we can go to the enterance of Wailing Caverns to deal with the elites between level 15-17.  Do this till level 19. The picture to the exact location is listed below.
![Image](https://i.imgur.com/3yIKTI7.png)

 **19 through 33**
- At around level 19 we can go to Redridge Mountains to kill the elites between level 20-24.  Do this until level 26.
The picture to the exact location is listed below. (circled in red)
![Image](https://i.imgur.com/c54vuvn.png)

- If the above method is too contested or you simply don't want to go all the way to Redridge Mountains then you can choose this location.  At around level 19 we can go to Ashvenvale to kill the elites between level 20-22.  Do this until level 26. The picture to the exact location is listed below.
![Image](https://i.imgur.com/N5zCJqE.png)

- At around level 26 we can go to Scarlet Monastery to kill the elites between level 29-30.  Do this until level 33. The picture to the exact location is listed below.
![Image](https://i.imgur.com/w5SpSzo.png)

 **33 through 39**
- At around level 33 we can go to Razerfen Downs to kill the elites between level 33-34.  Do this until level 36.  The picture to the exact location is listed below.
![Image](https://i.imgur.com/ju7Czu7.png)
- At around level 36 we can go to the enterance of Uldaman to kill the elites between level 35-37.  Do this until level 39.  The picture to the exact location is listed below.
![Image](https://i.imgur.com/rUy8Ji5.png)

 **39 through 49**
- At around level 39 we can go to Dustwallow Marsh to kill the elites between level 40-41.  Do this until level 43.  The picture to the exact location is listed below.
![Image](https://i.imgur.com/MaAuqlD.png)
- At around level 43 we can go to Dustwallow Marsh to kill the elites between level 43-44.  Do this until level 49.  The picture to the exact location is listed below.
![Image](https://i.imgur.com/qFVYDos.png)

 **49 through 60**
- At around level 49 we can go to Azshara to kill the elites between level 50-54.  Do this until level 57.  The picture to the exact location is listed below.
![Image](https://i.imgur.com/leoeYbP.png)

- If the above method is too contested or you simply don't want to go all the way to Azshara then you can choose this location.  At around level 49 we can go to Searing Gorge to kill the elites between level 47-51.  Do this until level 57.  The picture to the exact location is listed below.
![Image](https://i.imgur.com/JLiwTNy.png)

- If you are still not satisfied with the above methods then you can choose this location.  At around level 49 we can go to Feralas to kill the elites between level 48-50.  Do this until level 57.  The picture to the exact location is listed below.
![Image](https://i.imgur.com/wO7tHMH.png)
- This is the point where I would stop tag farming and start doing end game quests and dungeons for your pre-bis items.  This is also the point in the guide where I would suggest getting farmed up with a level 60 mage in ZG.  However turtle hates fun and does not allow people lower than 60 go into the dungeon and they made it so the crocs were immune to slow effects.  LMAO

[![Image](https://i.imgur.com/haOMSXL.png)](https://buymeacoffee.com/speedz)

*Last edited by Speedz1337 on Wed Apr 01, 2026 1:12 am, edited 21 times in total.*

## Post 102400 by Ashwhole (Barrens Chat Casualty) — 2024-10-02T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102400#p102400 | page 1 | era: pre-1.18.1 -->

Thx for this guide dude ! I will try it out !

## Post 102405 by Ashwhole (Barrens Chat Casualty) — 2024-10-02T22:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102405#p102405 | page 1 | era: pre-1.18.1 -->

I dunno about multiboxing the the dustwallow marsh area. There are so many patrols walking around and they will delete your lvl 41 character in seconds when they aggro. I tried multiboxing there with my lvl 60 warlock and 41 druid. Died about 10 times in an hour.

Ideally to do this tag farming, there should be mobs that arent patrolling, preferebly melee mobs that doesnt delete u in 1 second and not too tightly packed mobs.

## Post 102408 by Speedz1337 (Patch Note Conspiracy Theorist) — 2024-10-02T23:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102408#p102408 | page 1 | era: pre-1.18.1 -->

> **Ashwhole wrote: Wed Oct 02, 2024 10:33 pm**
> I dunno about multiboxing the the dustwallow marsh area. There are so many patrols walking around and they will delete your lvl 41 character in seconds when they aggro. I tried multiboxing there with my lvl 60 warlock and 41 druid. Died about 10 times in an hour.
>
>  Ideally to do this tag farming, there should be mobs that arent patrolling, preferebly melee mobs that doesnt delete u in 1 second and not too tightly packed mobs.

These areas are very dangerous.  You need to know what the patrols are and watch out for them because yes they will delete you within seconds if u bump into them.  The patrol that runs in a pack of two will absolutely mess you up.  I use a lvl 60 rogue and I found that using him can take aggro off really fast.

## Post 102431 by Xerilin (Bug Report Enthusiast) — 2024-10-03T11:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102431#p102431 | page 1 | era: pre-1.18.1 -->

One small correction: As far as I know, Warmode was redesigned to give only +20% xp and +20% honour, instead of the +30% xp it gave before.

## Post 102450 by Atreidon (Grandmaster of Forum PvP) — 2024-10-03T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102450#p102450 | page 1 | era: pre-1.18.1 -->

Do not use warmode while tag farming, you might get a warning or a ban for Violating the Multi-boxing rules of turtlewow:
<https://turtlecraft.gg/rules>
> Multiboxing is the act of controlling multiple WoW clients simultaneously. This can entail having multiple clients open on a single machine or utilizing multiple machines to control the actions of both accounts at the same time for combat or moving. At our server, we permit the use of a maximum of two accounts at a time, with the following exceptions:
>
>  It is strictly forbidden to multibox if either of your characters is undergoing a Hardcore challenge.
>  It is strictly forbidden to multibox if either of your characters is flagged for PvP, including Warmode.

## Post 102470 by Speedz1337 (Patch Note Conspiracy Theorist) — 2024-10-03T17:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102470#p102470 | page 1 | era: pre-1.18.1 -->

> **Xerilin wrote: Thu Oct 03, 2024 11:33 am**
> One small correction: As far as I know, Warmode was redesigned to give only +20% xp and +20% honour, instead of the +30% xp it gave before.

updated thanks.  Its hard to keep track of all the info on my guides.  Thanks for helping out.

## Post 102471 by Speedz1337 (Patch Note Conspiracy Theorist) — 2024-10-03T17:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102471#p102471 | page 1 | era: pre-1.18.1 -->

> **Atreidon wrote: Thu Oct 03, 2024 2:33 pm**
> Do not use warmode while tag farming, you might get a warning or a ban for Violating the Multi-boxing rules of turtlewow:
>  <https://turtlecraft.gg/rules>
> > Multiboxing is the act of controlling multiple WoW clients simultaneously. This can entail having multiple clients open on a single machine or utilizing multiple machines to control the actions of both accounts at the same time for combat or moving. At our server, we permit the use of a maximum of two accounts at a time, with the following exceptions:
> >
> >  It is strictly forbidden to multibox if either of your characters is undergoing a Hardcore challenge.
> >  It is strictly forbidden to multibox if either of your characters is flagged for PvP, including Warmode.

you can't multibox but you can still tag farm with another character like a friend that is helping you.

## Post 102492 by Reploidrocsa (Bug Report Enthusiast) — 2024-10-04T06:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102492#p102492 | page 1 | era: pre-1.18.1 -->

What about Jintha'alor in hinterlands? I've done some tag farming in the past there, plenty of elites to get exp

Also, there's an elite area in gillijim isle iirc

## Post 102503 by Zulnam (Bug Report Enthusiast) — 2024-10-04T12:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102503#p102503 | page 1 | era: pre-1.18.1 -->

Great guide. Just one caveat that should be mentioned to players wanting to try this out:

expect to pay a lot of gold to gear and train your newly boosted character. The pretty big downside of Tag Farming is that gear and gold do not flow in the same manner as questing.

So lets say you go from 20 to 50 with tag farming. Your gear will reflect that. You will have to go to the AH and spend gold to get some meager greens. Besides that you will have to spend gold for abilities and a mount.

So you are looking at 150g roughly, depending on how many abilities you have to learn (and how many you can skip).

## Post 122236 by DevilSir — 2025-03-11T07:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122236#p122236 | page 1 | era: pre-1.18.1 -->

Thanks for this great guide   turtle_in_love_head

## Post 122247 by Speedz1337 (Patch Note Conspiracy Theorist) — 2025-03-11T14:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122247#p122247 | page 1 | era: pre-1.18.1 -->

> **DevilSir wrote: Tue Mar 11, 2025 7:33 am**
> Thanks for this great guide   turtle_in_love_head

No problem. Its for the love of the community!

## Post 122248 by Akos1896 (Grandmaster of Forum PvP) — 2025-03-11T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122248#p122248 | page 1 | era: pre-1.18.1 -->

An extremely high level guide

## Post 122278 by Speedz1337 (Patch Note Conspiracy Theorist) — 2025-03-11T22:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122278#p122278 | page 1 | era: pre-1.18.1 -->

> **Akos1896 wrote: Tue Mar 11, 2025 2:28 pm**
> An extremely high level guide

satisfied_turtle_head

## Post 165320 by Seridion — 2026-01-16T11:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165320#p165320 | page 1 | era: 1.18.1-announced-pre-release -->

Heya,

I don't get these macros to work.
I am using Cleveroid Macros and Supermacros.

/run if UnitIsTapped("target") then CastSpellByName("Sinister Strike") end

Do I need to type the name of the target as well?

/inv NameOfPlayer
/script TargetByName("(Flensmaster)", true);
/follow
/uninvite NameOfPlayer

Same thing with this one, it invites and uninvites the player but doesn't put follow. If it matters it's an Alliance with a Horde.

## Post 165323 by Speedz1337 (Patch Note Conspiracy Theorist) — 2026-01-16T11:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165323#p165323 | page 1 | era: 1.18.1-announced-pre-release -->

> **Seridion wrote: Fri Jan 16, 2026 11:17 am**
> Heya,
>
>  I don't get these macros to work.
>  I am using Cleveroid Macros and Supermacros.
>
>  /run if UnitIsTapped("target") then CastSpellByName("Sinister Strike") end
>
>  Do I need to type the name of the target as well?
>
>  /inv NameOfPlayer
>  /script TargetByName("(Flensmaster)", true);
>  /follow
>  /uninvite NameOfPlayer
>
>  Same thing with this one, it invites and uninvites the player but doesn't put follow. If it matters it's an Alliance with a Horde.

I am assuming cleveroid macros edits the way that macros work in the client.  Can you try disabling the addon and see if it works?  Also if you aren't using a rogue you wouldn't be able to use sinister strike as a spell.  You would need to replace that spell with another one.

