---
title: "[Release] Puppeteer, Successor To HealersMate"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20793"
topic_id: 20793
forum_id: 18
forum: "AddOns"
author: "Oldmana"
author_authority: "player"
posted: "2025-08-10T18:04:00Z"
last_post: "2026-03-25T11:03:00Z"
post_count: 50
pages: 2
fetched: "2026-09-10T10:21:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Release] Puppeteer, Successor To HealersMate

## Post 144294 by Oldmana (Barrens Chat Casualty) — 2025-08-10T18:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144294#p144294 | page 1 | era: pre-1.18.1 -->

Puppeteer, formerly HealersMate, is a unit frames addon that strives to be an alternative to modern WoW’s VuhDo, Cell, or Healbot. The name was decided to be changed to distance itself from the idea that the addon can only be used by healers, as it can be a viable unit frames solution for any class/spec.

The release of Puppeteer comes with significant updates to the addon. A commonly requested feature was the ability to bind mouse wheel and keys to spells-- well, I’m happy to announce that is now possible in Puppeteer. Other updates include: Create and store multiple bindings loadouts, multi-bindings & Lua script bindings, basic style customizations like having class-colored health bars, ability to hide individual frame groups,  a redesigned settings panel, and more. For those of you coming from HealersMate, you can install Puppeteer alongside HealersMate and you’ll be prompted to import your settings and disable HealersMate.

See more details and download the addon at: <https://github.com/OldManAlpha/Puppeteer>

![Image](https://github.com/OldManAlpha/HealersMate/raw/main/Screenshots/Party-Example.PNG)![Image](https://i.imgur.com/nXSCc8F.png)![Image](https://i.imgur.com/KoFygXv.png)

## Post 144457 by Sharmaine (Barrens Chat Casualty) — 2025-08-11T09:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144457#p144457 | page 1 | era: pre-1.18.1 -->

Nice to see it still being worked on. Used the healersmate from since I started on twow and recommended it to others.

I wonder if custom edits I made (i.e. make it show new turtle wow warlock buffs, track unleashed potential remaining time on pet, always show if salvation is up regardless of class) are easy enough to move. Will check a bit later.

## Post 144737 by Lordmarrowgar — 2025-08-12T08:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144737#p144737 | page 1 | era: pre-1.18.1 -->

I love this addon! Thank you so much for keeping it updated.

Love that the /hm command still works :).
Puppeteer has so much QoL,and improvements on the HealMate framework, it's insane how much work you did on this.

I hate doing this, but i would love if we could remove the for example: Party, Target, Pets frametext. (edit:) *And to lock the frame in its place*

Thank you again, and i would buy you a coffee if i could!

## Post 144857 by Oldmana (Barrens Chat Casualty) — 2025-08-12T15:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144857#p144857 | page 1 | era: pre-1.18.1 -->

> **Lordmarrowgar wrote: Tue Aug 12, 2025 8:12 am**
> I hate doing this, but i would love if we could remove the for example: Party, Target, Pets frametext. (edit:) *And to lock the frame in its place*

That's a little tricky from a design perspective since you need the title bar to be able to move the frames around. That said, it'll probably be possible when the larger frame customization update comes out.

Also, it's not super clear at the moment, but you can right click the title bar to open a menu to lock the frame in place.

## Post 144862 by Jackbonus — 2025-08-12T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144862#p144862 | page 1 | era: pre-1.18.1 -->

Woohoo! Awesome work my dude ![❤️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2764.svg)

## Post 145294 by Lordmarrowgar — 2025-08-14T04:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145294#p145294 | page 1 | era: pre-1.18.1 -->

> **Oldmana wrote: Tue Aug 12, 2025 3:35 pm**
> > **Lordmarrowgar wrote: Tue Aug 12, 2025 8:12 am**
> > I hate doing this, but i would love if we could remove the for example: Party, Target, Pets frametext. (edit:) *And to lock the frame in its place*
>
>  That's a little tricky from a design perspective since you need the title bar to be able to move the frames around. That said, it'll probably be possible when the larger frame customization update comes out.
>
>  Also, it's not super clear at the moment, but you can right click the title bar to open a menu to lock the frame in place.

I saw the changelog and i couldn't believe! Haha, thanks a lot for making it easier to lock frames, i couldn't have found it otherwise. Was it: /hm lock or something?

You got me hyped for that frame customization update!

## Post 145635 by Pmi999 — 2025-08-15T11:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145635#p145635 | page 1 | era: pre-1.18.1 -->

I'd first like to say thanks for giving us this addon.
I've a question/requirement. The thing I'm personally struggling with is when healing in a raid, it's not immediately clear to me when looking at 40 players in the raid frame and being able to see who I can heal who is in range. The raid frame puts a distance number on the frames, and you can skip those, but in the heat of battle (literally in AV for example) I'd like to be able to more quickly spot the people who need my help. That fraction of a second as you decide who to heal is vital. Is there a way to completely grey out for example anyone who is out of range? And can I remove the HP and distance numbers on the frames so they are more "clean". Ive got the Puppeteer .lua file open in notepad right now but I'm very wary of modifying it.
Thanks in advance

## Post 145641 by Sharmaine (Barrens Chat Casualty) — 2025-08-15T11:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145641#p145641 | page 1 | era: pre-1.18.1 -->

> **Pmi999 wrote: Fri Aug 15, 2025 11:17 am**
> Is there a way to completely grey out for example anyone who is out of range? And can I remove the HP and distance numbers on the frames so they are more "clean". Ive got the Puppeteer .lua file open in notepad right now but I'm very wary of modifying it.
>  Thanks in advance

Go to Addons\Puppeteer\Profile.lua to line 172
Change the value of profile.OutOfRangeOpacity to a lesser one. I put mine to 30 because I had exact same problem.

The values at which distance is shown is at line 169,  profile.ShowDistanceThreshold
I guess you can increase it so it never shows.

## Post 145740 by Oldmana (Barrens Chat Casualty) — 2025-08-15T15:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145740#p145740 | page 1 | era: pre-1.18.1 -->

> **Pmi999 wrote: Fri Aug 15, 2025 11:17 am**
> I'd first like to say thanks for giving us this addon.
>  I've a question/requirement. The thing I'm personally struggling with is when healing in a raid, it's not immediately clear to me when looking at 40 players in the raid frame and being able to see who I can heal who is in range. The raid frame puts a distance number on the frames, and you can skip those, but in the heat of battle (literally in AV for example) I'd like to be able to more quickly spot the people who need my help. That fraction of a second as you decide who to heal is vital. Is there a way to completely grey out for example anyone who is out of range? And can I remove the HP and distance numbers on the frames so they are more "clean". Ive got the Puppeteer .lua file open in notepad right now but I'm very wary of modifying it.
>  Thanks in advance

Are you using either the SuperWoW or UnitXP SP3 mods? If you have one of those, allies over 40 yd away will appear faded.

## Post 146399 by Eisenwolf — 2025-08-17T08:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146399#p146399 | page 1 | era: pre-1.18.1 -->

Hello,
the buffs and hots aren't showing up in my party window. It recognizes SuperWoW. Do I need to configure this somewhere in the options? I can't find anything there.

## Post 146511 by Oldmana (Barrens Chat Casualty) — 2025-08-17T15:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146511#p146511 | page 1 | era: pre-1.18.1 -->

> **Eisenwolf wrote: Sun Aug 17, 2025 8:27 am**
> Hello,
>  the buffs and hots aren't showing up in my party window. It recognizes SuperWoW. Do I need to configure this somewhere in the options? I can't find anything there.

That probably means you're not using an English client. Currently, that is the only supported client language and many features will be broken if you don't use English.

## Post 146731 by Korythael — 2025-08-18T11:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146731#p146731 | page 1 | era: pre-1.18.1 -->

Since the last patch, the automatic roles no longer appear for me, and I have to assign them manually to know if they are DPS, tank, or healer

Can you check it?

## Post 146802 by Oldmana (Barrens Chat Casualty) — 2025-08-18T16:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146802#p146802 | page 1 | era: pre-1.18.1 -->

> **Korythael wrote: Mon Aug 18, 2025 11:14 am**
> Since the last patch, the automatic roles no longer appear for me, and I have to assign them manually to know if they are DPS, tank, or healer
>
>  Can you check it?

It's already known to have broken in 1.18. There will likely be an update sometime in the next few days that accounts for the LFT changes.

## Post 147681 by CaseyRomain — 2025-08-22T10:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147681#p147681 | page 1 | era: pre-1.18.1 -->

Thanks for all the work! Still loving this addon and it keeps getting better!

One question: I thought i read somewhere that Healersmate supports Smarterheals, but now I can't find that anymore. Is this indeed the case or did I just dream it?

## Post 147770 by Oldmana (Barrens Chat Casualty) — 2025-08-23T01:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147770#p147770 | page 1 | era: pre-1.18.1 -->

> **CaseyRomain wrote: Fri Aug 22, 2025 10:25 am**
> Thanks for all the work! Still loving this addon and it keeps getting better!
>
>  One question: I thought i read somewhere that Healersmate supports Smarterheals, but now I can't find that anymore. Is this indeed the case or did I just dream it?

Neither Puppeteer nor HealersMate directly support auto ranking addons. However, in Puppeteer, you can bind Lua scripts to run any code you want.

## Post 148137 by Krautsurfer — 2025-08-25T09:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148137#p148137 | page 1 | era: pre-1.18.1 -->

how can i remove the shutted eye icon which sometimes shows up on the unitframes and what does it mean?

## Post 148196 by Oldmana (Barrens Chat Casualty) — 2025-08-25T15:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148196#p148196 | page 1 | era: pre-1.18.1 -->

> **Krautsurfer wrote: Mon Aug 25, 2025 9:32 am**
> how can i remove the shutted eye icon which sometimes shows up on the unitframes and what does it mean?

The icon means the player is out of your line-of-sight. You see it when using UnitXP SP3 and it's currently not removable.

## Post 150905 by Oldmana (Barrens Chat Casualty) — 2025-09-09T02:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150905#p150905 | page 1 | era: pre-1.18.1 -->

Released version 1.0.5, which includes new features such as:

- PvP status icons

- PvP Flag Protection which prevents you from accidentally casting on PvP flagged players

- Ability to disable frame title and change frame anchor

- New style overrides to change incoming heal display and change out of range opacity

- Bug fixes and more

## Post 151612 by Gautzelin — 2025-09-13T19:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151612#p151612 | page 1 | era: pre-1.18.1 -->

Perhaps I am missing something, but is there a way to see the class of party members while using this add-on?

## Post 151613 by Oldmana (Barrens Chat Casualty) — 2025-09-13T20:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151613#p151613 | page 1 | era: pre-1.18.1 -->

> **Gautzelin wrote: Sat Sep 13, 2025 7:46 pm**
> Perhaps I am missing something, but is there a way to see the class of party members while using this add-on?

By default, the name of the player is colored by their class. Other than that, you can make the health bars class-colored in Customize>Style Overrides.

## Post 151625 by Gautzelin — 2025-09-13T23:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151625#p151625 | page 1 | era: pre-1.18.1 -->

Understood, thanks! And appreciate the amazing work on the add-on!

## Post 152923 by Mastrshake — 2025-09-24T07:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152923#p152923 | page 1 | era: pre-1.18.1 -->

hey, i love the addon thanks for the work. is there anyway to filter buffs off of the frames? for example my mark of the wild and thorns show up on the raid frames and it kind of clutters and makes it harder to track my hots with those in the way. thank you for the addon.

## Post 153072 by Sharmaine (Barrens Chat Casualty) — 2025-09-25T02:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153072#p153072 | page 1 | era: pre-1.18.1 -->

> **Mastrshake wrote: Wed Sep 24, 2025 7:36 am**
> hey, i love the addon thanks for the work. is there anyway to filter buffs off of the frames? for example my mark of the wild and thorns show up on the raid frames and it kind of clutters and makes it harder to track my hots with those in the way. thank you for the addon.

It is currently hardcoded, but very easy to edit.
Open PuppeteerSettings.lua and go to lines 346-376, you will first see list of buffs that show up for every class, then only for your class (I assume druid). Just delete the ones you don't want to see.

For example, replace this
["DRUID"] = {"Gift of the Wild", "Mark of the Wild", "Thorns", "Rejuvenation", "Regrowth"},
with this
["DRUID"] = {"Rejuvenation", "Regrowth"},

Don't update addon after that, it will revert change.

## Post 153074 by Oldmana (Barrens Chat Casualty) — 2025-09-25T04:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153074#p153074 | page 1 | era: pre-1.18.1 -->

> **Sharmaine wrote: Thu Sep 25, 2025 2:53 am**
> It is currently hardcoded, but very easy to edit.
>  Open PuppeteerSettings.lua and go to lines 346-376, you will first see list of buffs that show up for every class, then only for your class (I assume druid). Just delete the ones you don't want to see.
>
>  For example, replace this
>  ["DRUID"] = {"Gift of the Wild", "Mark of the Wild", "Thorns", "Rejuvenation", "Regrowth"},
>  with this
>  ["DRUID"] = {"Rejuvenation", "Regrowth"},
>
>  Don't update addon after that, it will revert change.

> **Mastrshake wrote: Wed Sep 24, 2025 7:36 am**
> hey, i love the addon thanks for the work. is there anyway to filter buffs off of the frames? for example my mark of the wild and thorns show up on the raid frames and it kind of clutters and makes it harder to track my hots with those in the way. thank you for the addon.

If you'd like to not edit the addon, you can go to Options>Advanced>Edit Load Script, put in: Code: Select all

```
PuppeteerSettings.AddTrackedBuffs("Buff 1", "Buff 2")
PuppeteerSettings.RemoveTrackedBuffs("Buff 1", "Buff 2")

PuppeteerSettings.AddTrackedDebuffs("Debuff 1", "Debuff 2")
PuppeteerSettings.RemoveTrackedDebuffs("Debuff 1", "Debuff 2")
```

Add or remove as many auras as you want.

## Post 153076 by Mastrshake — 2025-09-25T04:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153076#p153076 | page 1 | era: pre-1.18.1 -->

awesome that worked thank you. is there anyway in the settings to adjust the hot icon size?

## Post 153150 by Purecek (Barrens Chat Casualty) — 2025-09-25T14:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153150#p153150 | page 1 | era: pre-1.18.1 -->

Is it somehow possible to create macros such as:
/cast [@focus] "any heal spell"
meaning that @focus will be targeting focus frames from puppeteer?

## Post 153255 by Oldmana (Barrens Chat Casualty) — 2025-09-26T04:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153255#p153255 | page 1 | era: pre-1.18.1 -->

> **Mastrshake wrote: Thu Sep 25, 2025 4:46 am**
> awesome that worked thank you. is there anyway in the settings to adjust the hot icon size?

That's not quite so easy at this time. You could edit the profile attributes, but increasing the size of the buffs would obstruct the view of other components, requiring changing more things. There will come a large update in the future which adds proper frame customization in-game.

> **Purecek wrote: Thu Sep 25, 2025 2:04 pm**
> Is it somehow possible to create macros such as:
>  /cast [@focus] "any heal spell"
>  meaning that @focus will be targeting focus frames from puppeteer?

No, macro addons don't support Puppeteer's focus system. However, if you know how to write Lua scripts to do what you want to do, I can show you how to obtain the identities of the focus units.

## Post 153963 by Sharmaine (Barrens Chat Casualty) — 2025-10-01T22:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153963#p153963 | page 1 | era: pre-1.18.1 -->

Just thought I'd share some bugs I noticed.
 1. Focus. If you focus someone, and then they are out of range or offline, sometimes it's impossible to make focus frame to disappear. Clicking the frame with focus action doesn't do anything since the target is just not available.
 2. In raids pets sometimes bug out. I see multiple frames for the same warlock's pet. And even after leaving raid, these pet frames still persist. Only relogging helps to get rid of them. Hmm, I think it's really just warlock pets.
Also a bug I guess... or more like a feature request?
Demonology warlocks have temporary pets - Infernal, Felguard, Doomguard. They are nameless, they last for few minutes, and they are very important. I tried to use Focus feature to keep track of UP stacks on them, but sadly each time you summon them it's a different focus frame, the old one just becomes unavailable. Would it be possible to check for target name (and owner) and reuse the old focus frame if it already exists?

## Post 153966 by Oldmana (Barrens Chat Casualty) — 2025-10-01T23:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153966#p153966 | page 1 | era: pre-1.18.1 -->

> **Sharmaine wrote: Wed Oct 01, 2025 10:35 pm**
> Just thought I'd share some bugs I noticed.
>  1. Focus. If you focus someone, and then they are out of range or offline, sometimes it's impossible to make focus frame to disappear. Clicking the frame with focus action doesn't do anything since the target is just not available.

It sounds like you're using the initial release, that bug was fixed back in 1.0.1.

> **Sharmaine wrote: Wed Oct 01, 2025 10:35 pm**
> 2. In raids pets sometimes bug out. I see multiple frames for the same warlock's pet. And even after leaving raid, these pet frames still persist. Only relogging helps to get rid of them. Hmm, I think it's really just warlock pets.

This is a client bug from what I can tell. Not too much I can do there.

> **Sharmaine wrote: Wed Oct 01, 2025 10:35 pm**
> Also a bug I guess... or more like a feature request?
>  Demonology warlocks have temporary pets - Infernal, Felguard, Doomguard. They are nameless, they last for few minutes, and they are very important. I tried to use Focus feature to keep track of UP stacks on them, but sadly each time you summon them it's a different focus frame, the old one just becomes unavailable. Would it be possible to check for target name (and owner) and reuse the old focus frame if it already exists?

Yeah, I don't think Focus frames are very good for Warlock pets. They're meant to track specific entities, they track entities by their unique ID and Warlock pets generate new IDs every time they're summoned.

## Post 154368 by Stillenow — 2025-10-04T22:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154368#p154368 | page 1 | era: 1.18.1-announced-pre-release -->

Heya! I got to say really nice addon! I'm new to twow and i was almost giving up doing a healing class as healbot isnt ideal on here with auto self cast etc. and I'm so used to that addon, so I knew i needed something else instead and thats when i luckily stumbled upon this great addon! Just one 'issue' that I have noticed, the target function doesn't seem to be working? I would like that when i cast for example 'heal' it would be nice if the addon would target the party member that I'm casting the spell on, its toggled on in the setting both under casting 'target while casting' and in the bindings 'Target while casting' 'yes' - is there any way to get that to work? I'm probably doing something wrong :)

Also a second question. but I think the answer will be no its not possible. but it would be really nice if I can see durations on the bars so I can see when my renew is about to run out or my stamina buff on party members. Cheers

## Post 154416 by Oldmana (Barrens Chat Casualty) — 2025-10-05T09:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154416#p154416 | page 1 | era: 1.18.1-announced-pre-release -->

> **Stillenow wrote: Sat Oct 04, 2025 10:33 pm**
> Just one 'issue' that I have noticed, the target function doesn't seem to be working? I would like that when i cast for example 'heal' it would be nice if the addon would target the party member that I'm casting the spell on, its toggled on in the setting both under casting 'target while casting' and in the bindings 'Target while casting' 'yes' - is there any way to get that to work? I'm probably doing something wrong :)

"Target While Casting" refers to the split-second where you target the player, cast the spell, and go back to your previous target. This behavior is forced on for spell casts if you don't use SuperWoW. What you want is to enable "Target After Casting", which will keep who you're casting on targeted.

> **Stillenow wrote: Sat Oct 04, 2025 10:33 pm**
> Also a second question. but I think the answer will be no its not possible. but it would be really nice if I can see durations on the bars so I can see when my renew is about to run out or my stamina buff on party members. Cheers

This is already supported, but only if you use the SuperWoW client mod.

## Post 155093 by Purecek (Barrens Chat Casualty) — 2025-10-10T14:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155093#p155093 | page 1 | era: 1.18.1-announced-pre-release -->

Hello, would it be possible to also make "loadouts" save the current frames position?

## Post 155213 by Oldmana (Barrens Chat Casualty) — 2025-10-11T22:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155213#p155213 | page 1 | era: 1.18.1-announced-pre-release -->

> **Purecek wrote: Fri Oct 10, 2025 2:48 pm**
> Hello, would it be possible to also make "loadouts" save the current frames position?

That will likely be possible when the greater frame customization update comes out.

## Post 155472 by Stillenow — 2025-10-13T20:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155472#p155472 | page 1 | era: 1.18.1-announced-pre-release -->

> **Oldmana wrote: Sun Oct 05, 2025 9:05 am**
> > **Stillenow wrote: Sat Oct 04, 2025 10:33 pm**
> > Just one 'issue' that I have noticed, the target function doesn't seem to be working? I would like that when i cast for example 'heal' it would be nice if the addon would target the party member that I'm casting the spell on, its toggled on in the setting both under casting 'target while casting' and in the bindings 'Target while casting' 'yes' - is there any way to get that to work? I'm probably doing something wrong :)
>
>  "Target While Casting" refers to the split-second where you target the player, cast the spell, and go back to your previous target. This behavior is forced on for spell casts if you don't use SuperWoW. What you want is to enable "Target After Casting", which will keep who you're casting on targeted.
>
> > **Stillenow wrote: Sat Oct 04, 2025 10:33 pm**
> > Also a second question. but I think the answer will be no its not possible. but it would be really nice if I can see durations on the bars so I can see when my renew is about to run out or my stamina buff on party members. Cheers
>
>  This is already supported, but only if you use the SuperWoW client mod.

Thank you for your answers, really appreciate!

Only thing, is there a way to toggle cast when clicking and not when releasing? like I want to just press left mouse button and it casts the healing spell, i don't know if I'm going crazy, but I feel a slight delay on my healing spells :)

## Post 155495 by Oldmana (Barrens Chat Casualty) — 2025-10-13T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155495#p155495 | page 1 | era: 1.18.1-announced-pre-release -->

> **Stillenow wrote: Mon Oct 13, 2025 8:11 pm**
> > **Oldmana wrote: Sun Oct 05, 2025 9:05 am**
> > > **Stillenow wrote: Sat Oct 04, 2025 10:33 pm**
> > > Just one 'issue' that I have noticed, the target function doesn't seem to be working? I would like that when i cast for example 'heal' it would be nice if the addon would target the party member that I'm casting the spell on, its toggled on in the setting both under casting 'target while casting' and in the bindings 'Target while casting' 'yes' - is there any way to get that to work? I'm probably doing something wrong :)
> >
> >  "Target While Casting" refers to the split-second where you target the player, cast the spell, and go back to your previous target. This behavior is forced on for spell casts if you don't use SuperWoW. What you want is to enable "Target After Casting", which will keep who you're casting on targeted.
> >
> > > **Stillenow wrote: Sat Oct 04, 2025 10:33 pm**
> > > Also a second question. but I think the answer will be no its not possible. but it would be really nice if I can see durations on the bars so I can see when my renew is about to run out or my stamina buff on party members. Cheers
> >
> >  This is already supported, but only if you use the SuperWoW client mod.
>
>   Thank you for your answers, really appreciate!
>
>  Only thing, is there a way to toggle cast when clicking and not when releasing? like I want to just press left mouse button and it casts the healing spell, i don't know if I'm going crazy, but I feel a slight delay on my healing spells :)

You'd want to change Options>Casting>Cast When (Mouse) to "Mouse Down".

## Post 156464 by Sharmaine (Barrens Chat Casualty) — 2025-10-21T14:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156464#p156464 | page 2 | era: 1.18.1-announced-pre-release -->

Hi. Think it would be possible to add a feature in the future that would let me enable only MY pet frame, rather than all raid pets? In 40mans it can obscure significant portion of screen, yet I need to see my demon frame.

## Post 157447 by Jozay — 2025-10-28T05:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157447#p157447 | page 2 | era: 1.18.1-announced-pre-release -->

Hello,
Is there a reason why as a shaman, I can't get the timer for "Healing Way" and "Ancestral Fortitude" ?
I tried the mod with a druid, and I'm able to see the timers of Regrowth and Rejuvenation, so I don't understand what's wrong with that.
Any idea ?
Thanks!

## Post 157448 by Jozay — 2025-10-28T05:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157448#p157448 | page 2 | era: 1.18.1-announced-pre-release -->

Btw, as druid, I had to remove the "Mark of the wild" and "Thorns" buffs, by editing the Load Script with the line
PuppeteerSettings.RemoveTrackedBuffs("Mark of the Wild", "Thorns")

but... it's not optimal since I don't know if everyone is buffed in party.
Can we just "invert" the display ?

## Post 157858 by Korythael — 2025-10-30T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157858#p157858 | page 2 | era: 1.18.1-announced-pre-release -->

Can you add an option to hide the party/raid frames if we have ShaguTweaks installed?

I have the party frames in ShaguTweaks set as raid frames, and every time I log in, I have to hide them manually to avoid having them twice

## Post 157905 by Oldmana (Barrens Chat Casualty) — 2025-10-31T04:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157905#p157905 | page 2 | era: 1.18.1-announced-pre-release -->

> **Sharmaine wrote: Tue Oct 21, 2025 2:08 pm**
> Hi. Think it would be possible to add a feature in the future that would let me enable only MY pet frame, rather than all raid pets? In 40mans it can obscure significant portion of screen, yet I need to see my demon frame.

Future plans with frame customization would allow that.

> **Jozay wrote: Tue Oct 28, 2025 5:47 am**
> Hello,
>  Is there a reason why as a shaman, I can't get the timer for "Healing Way" and "Ancestral Fortitude" ?
>  I tried the mod with a druid, and I'm able to see the timers of Regrowth and Rejuvenation, so I don't understand what's wrong with that.
>  Any idea ?
>  Thanks!

The issue is that they're procs off of spells, rather than being spells you cast. This makes it impossible to reliably track when they start. That said, hacky solutions may come in the future.

> **Jozay wrote: Tue Oct 28, 2025 5:56 am**
> Btw, as druid, I had to remove the "Mark of the wild" and "Thorns" buffs, by editing the Load Script with the line
>  PuppeteerSettings.RemoveTrackedBuffs("Mark of the Wild", "Thorns")
>
>  but... it's not optimal since I don't know if everyone is buffed in party.
>  Can we just "invert" the display ?

"Negative Buffs" is something I've been thinking of adding for a while. It'll probably come when I add customizable buff/debuff tracking(without having to edit the load script).

> **Korythael wrote: Thu Oct 30, 2025 4:53 pm**
> Can you add an option to hide the party/raid frames if we have ShaguTweaks installed?
>
>  I have the party frames in ShaguTweaks set as raid frames, and every time I log in, I have to hide them manually to avoid having them twice

You can hide specific Puppeteer frames in Customize>Frame Group Settings.

## Post 157921 by Korythael — 2025-10-31T07:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157921#p157921 | page 2 | era: 1.18.1-announced-pre-release -->

> **Oldmana wrote: Fri Oct 31, 2025 4:25 am**
> You can hide specific Puppeteer frames in Customize>Frame Group Settings.

Yes, but I mean hiding the ShaguTweaks raid frames and keeping the Puppeteer ones visible

## Post 157928 by Oldmana (Barrens Chat Casualty) — 2025-10-31T09:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157928#p157928 | page 2 | era: 1.18.1-announced-pre-release -->

> **Korythael wrote: Fri Oct 31, 2025 7:49 am**
> > **Oldmana wrote: Fri Oct 31, 2025 4:25 am**
> > You can hide specific Puppeteer frames in Customize>Frame Group Settings.
>
>  Yes, but I mean hiding the ShaguTweaks raid frames and keeping the Puppeteer ones visible

I'm not sure if I follow your issue. If you don't want the ShaguTweaks raid frames, you can permanently disable them in its settings.

## Post 158142 by Jozay — 2025-11-02T17:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158142#p158142 | page 2 | era: 1.18.1-announced-pre-release -->

> **Oldmana wrote: Fri Oct 31, 2025 4:25 am**
> > **Jozay wrote: Tue Oct 28, 2025 5:47 am**
> > Hello,
> >  Is there a reason why as a shaman, I can't get the timer for "Healing Way" and "Ancestral Fortitude" ?
> >  I tried the mod with a druid, and I'm able to see the timers of Regrowth and Rejuvenation, so I don't understand what's wrong with that.
> >  Any idea ?
> >  Thanks!
>
>  The issue is that they're procs off of spells, rather than being spells you cast. This makes it impossible to reliably track when they start. That said, hacky solutions may come in the future.
>
> > **Jozay wrote: Tue Oct 28, 2025 5:56 am**
> > Btw, as druid, I had to remove the "Mark of the wild" and "Thorns" buffs, by editing the Load Script with the line
> >  PuppeteerSettings.RemoveTrackedBuffs("Mark of the Wild", "Thorns")
> >
> >  but... it's not optimal since I don't know if everyone is buffed in party.
> >  Can we just "invert" the display ?
>
>  "Negative Buffs" is something I've been thinking of adding for a while. It'll probably come when I add customizable buff/debuff tracking(without having to edit the load script).

Ok, thanks for the reply.
Great job for this mod, by the way. I tried NotGrid with my drood, then tried Puppeter/Healermate. It's obviously better to track cooldowns.
Bye

## Post 158436 by Korythael — 2025-11-05T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158436#p158436 | page 2 | era: 1.18.1-announced-pre-release -->

Hey, since the last turtle patch that enables cross-faction in BGs, I’ve been experiencing a bug. Sometimes, when new players join my team in the battleground, the frames overlap (mine and the new player’s), and when I click, it targets them instead of me

Is anyone else having this issue?

I think it’s something related to the new Turtle WoW patch, because I’ve noticed that sometimes when someone joins the normal raid frames, I don’t show up for a while

## Post 158556 by Telshak — 2025-11-06T07:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158556#p158556 | page 2 | era: 1.18.1-announced-pre-release -->

Any ways to get party lead icon to display on frame (party frame etc?)

## Post 162886 by Oldmana (Barrens Chat Casualty) — 2025-12-15T23:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162886#p162886 | page 2 | era: 1.18.1-announced-pre-release -->

Released version 1.1.0, which includes features such as:
 - Support for non-English clients
 - Experimental Incoming Cast Icons (SuperWoW Required)
 - Experimental Enemy Frames (SuperWoW & UnitXP SP3 Required)
 - New Style Overrides
 - QOL Updates
 - Bug Fixes

## Post 172061 by Sharmaine (Barrens Chat Casualty) — 2026-03-24T04:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172061#p172061 | page 2 | era: post-1.18.1 -->

Requesting another feature   hiding_smth_turtle_head
Make it possible to remove hunter pets from raid pet list
My guild would like to only have high priority targets on frames (Infernal, Doomguard and Felguard)
Perhaps a custom frame constructor...?

By the way something is wrong with focus frames. Update rate is much slower than, let's say, party frames. If you focus a party member you can see how focus lags behind, not updating hp/mana or buffs for long time. It makes it extremely unreliable

Oh and would be nice to see Prayer of Healing incoming heal support   turtle_in_love_head

## Post 172063 by Oldmana (Barrens Chat Casualty) — 2026-03-24T05:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172063#p172063 | page 2 | era: post-1.18.1 -->

> **Sharmaine wrote: Tue Mar 24, 2026 4:36 am**
> Requesting another feature   hiding_smth_turtle_head
>  Make it possible to remove hunter pets from raid pet list
>  My guild would like to only have high priority targets on frames (Infernal, Doomguard and Felguard)
>  Perhaps a custom frame constructor...?

To be honest, this is pretty niche and probably won't be something that is added.

> **Sharmaine wrote: Tue Mar 24, 2026 4:36 am**
> By the way something is wrong with focus frames. Update rate is much slower than, let's say, party frames. If you focus a party member you can see how focus lags behind, not updating hp/mana or buffs for long time. It makes it extremely unreliable

This is caused by having Filter GUID Events enabled in either PerfBoost or Nampower. Turn that off to fix the issue.

> **Sharmaine wrote: Tue Mar 24, 2026 4:36 am**
> Oh and would be nice to see Prayer of Healing incoming heal support   turtle_in_love_head

This is already supported as of version 1.1.1, and SuperWoW is required for it to work.

## Post 172312 by CaseyRomain — 2026-03-25T08:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172312#p172312 | page 2 | era: post-1.18.1 -->

"This is caused by having Filter GUID Events enabled in either PerfBoost or Nampower. Turn that off to fix the issue."

I'm just adjusting this setting as I had the same behaviour. Follow up question:

Does puppetteer need "enable GUID events"? The tool tip suggest that feature might be spammy (I read negative performance possible)

## Post 172320 by Oldmana (Barrens Chat Casualty) — 2026-03-25T11:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172320#p172320 | page 2 | era: post-1.18.1 -->

> **CaseyRomain wrote: Wed Mar 25, 2026 8:18 am**
> "This is caused by having Filter GUID Events enabled in either PerfBoost or Nampower. Turn that off to fix the issue."
>
>  I'm just adjusting this setting as I had the same behaviour. Follow up question:
>
>  Does puppetteer need "enable GUID events"? The tool tip suggest that feature might be spammy (I read negative performance possible)

Yes, Focus frames cannot function without these events. I personally don't see a significant performance impact, but it depends on what addons you use.

