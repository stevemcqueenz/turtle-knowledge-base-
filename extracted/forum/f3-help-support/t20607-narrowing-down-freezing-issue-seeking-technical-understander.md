---
title: "Narrowing down freezing issue (seeking technical understander)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20607"
topic_id: 20607
forum_id: 3
forum: "Help & Support"
author: "Reiker"
author_authority: "player"
posted: "2025-08-01T15:48:00Z"
last_post: "2026-02-18T21:03:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T08:37:01Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Narrowing down freezing issue (seeking technical understander)

## Post 142530 by Reiker — 2025-08-01T15:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142530#p142530 | page 1 | era: pre-1.18.1 -->

I've been playing Turtle WoW without issue for months, but a couple weeks ago I started experiencing a freezing issue. Every 3-5 minutes or so my game client will freeze / lock up / hitch / stutter for about half a second (the length of the freeze is somewhat variable). This is annoying because it can cause a delay in hitting my abilities, I fall behind while following people, etc.

I've been trying to solve this over the past week. Freezing seems to be a common issue with many different proposed remedies. I already have some suggestions covered (I have SuperWoW + VanillaTweaks + VanillaFixes installed, as well as nampower, VanillaMultiMonitorFix and UnitXP_SP3). I've tried updating my d3d9.dll to the dxvk 2.7 dll. I've tried hardware mouse on/off, vsync on/off, disabling audio, reinstalling the game, not using vulkan, etc.

I then found an addon called pfDebug. I don't really understand the information the addon is providing, but I did notice that the freezing occurs every time the addon says a "Cleanup" has occurred.

My guess on what the addon is saying, although I could be wrong:

Current Rate: how much memory is being used per second?
Current / Max: how much memory is being utilized / how much memory is being allocated?
Last Cleanup: I assume this is when previously used space gets released back to memory?
Last Peak: I guess this shows large memory chunks being written?

I also noticed that it seems like the cleanup occurs whenever current memory is equal to max memory, and then usually the max memory increases.

The next logical step in troubleshooting would be to disable all my addons and then enable them one at a time, while watching pfDebug.

With all addons disabled except for pfDebug, pfUI, pfUI-turtle, and pfUIWeakIcons a cleanup occurred after more time than normal (about 7 minutes), and with no freeze. This seems to suggest an addon is causing the issue, and it's not pfUI.

I then wanted to check the next suspicious addon, pfQuest. I also enabled pfQuest-turtle. But there was a problem. I ran around the world for over 30 minutes without ever triggering a cleanup. I abandoned this test.

I now have a problem where the cleanup doesn't occur very regularly when I don't have many addons enabled. I then decided to enable CleveRoidMacros because this addon seems to use a lot more memory than anything else.

As expected cleanup occurred after just a few minutes with a freeze. So the problem is CleveRoidMacros right? Well no, because I've already tested this addon in my previous troubleshooting. I tested it again by enabling every addon except CleveRoidMacros and I experienced a freeze after the next cleanup.

So it almost seems like the issue isn't with any particular addon, but it starts to occur once I have enough addons loaded to use a certain amount of memory? I honestly have no idea which is why I've mostly given up on troubleshooting at this point and decided to write this post instead and hopefully someone who understands the technical stuff a bit better might know what's going on.

If it helps I'll list the addons I'm using, although I've disabled most if not all of these individually without seeing a fix for the freezing:

LazyPig
AtlasLoot
aux
BetterCharacterStats
BigWigs
CleveRoidMacros
KLHThreatMeter
MageHud
Mail
MissingCrafts
PallyPowerTW
pfDebug
pfQuest
pfQuest-turtle
pfUI
pfUI-turtle
pfUI-WeakIcons
PizzaWorldBuffs
ShaguDPS
SimpleActionSets
SP_SwingTimer
SuperAPI
Tmog
UnitXP_SP3_Addon

Edit:

Test I thought of after making this post: Disable every addon except for pfDebug and CleveRoidMacros: no freeze on cleanup. It seems like the freeze only occurs after I'm using a certain amount of memory. When I only have a couple addons loaded I stop freezing during the cleanup.

## Post 142544 by Akos1896 (Grandmaster of Forum PvP) — 2025-08-01T16:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142544#p142544 | page 1 | era: pre-1.18.1 -->

Can your RAM properly handle the full setup with all of the addons, even during a spike (for example more populated zones)?
Based on what you wrote I'd agree on a memory issue but honestly, my technical understanding is inferior to yours.
I'd make a filtering among my addons, trying to find 1-2 which are kinda big and are less needed to see if there's a gameplay compromise where freeze don't happen anymore.

## Post 142545 by Membrane (Barrens Chat Casualty) — 2025-08-01T16:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142545#p142545 | page 1 | era: pre-1.18.1 -->

There's an addon called Gentle Garbage Collection that, for the most part, stops the freeze when the client does it's periodic collection.

<https://github.com/MarcelineVQ/GentleGC>

## Post 142552 by Reiker — 2025-08-01T16:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142552#p142552 | page 1 | era: pre-1.18.1 -->

> **Membrane wrote: Fri Aug 01, 2025 4:28 pm**
> There's an addon called Gentle Garbage Collection that, for the most part, stops the freeze when the client does it's periodic collection.
>
>  <https://github.com/MarcelineVQ/GentleGC>

Hm, this addon seems to describe my issue exactly, but installing it doesn't seem to change anything. I still get freezing whenever the cleanup occurs.

Should have mentioned my RAM is Crucial Ballistix 32GB DDR4 3600 MHz. It should be more than enough for vanilla WoW & I have no other issues in any other applications as far as I know.

Edit: If I run the reporting command (/run ggc_debug = 1) I get some information when the cleanup occurs (180 sec gc 5, was 250.0mb, is 219.5mb, saved 30.5mb, took 0.31s) but I also get a freeze.

Edit 2: Some additional testing / information.

When I disable CleveRoidMacros I still get a large freeze after Cleanup a few minutes later. This led me to believe that the issue isn't related to this addon.

However if I keep playing the game with CleveRoidMacros disabled future "Cleanups" either result in a much smaller freeze, or virtually no freeze. Sometimes I notice a very quick freeze or I don't notice one at all, which is much less significant as the freezing I was experiencing with CleveRoidMacros enabled.

So now my thoughts are:

I don't think it's fair to conclude that the problem is with the CleveRoidMacros addon. First, many people seemingly use it without experiencing this freezing issue. Second, I still get a bit of freezing without CleveRoidMacros enabled, it's just much less noticeable.

Also, if I disable all addons beside CleveRoidMacros then Cleanups trigger without any freezing. CleveRoidMacros just seems to be exacerbating the actual issue.

Edit: more testing

pfui + pfquest + cleveroidmacros = freezing
pfui + cleveroidmacros = no freezing

Seems like the problem is pfquest? Well...

all addons enabled *except* pfquest = smaller, but still noticeable freezing. (more like a small stutter compared to the half-a-second freeze).

So... I don't think the issue is related to any particular addon. It just seems to get worse as I add heavy addons.

But I'm also not sure where to go from here, besides disabling pfquest during raids for slightly better performance. I've already tried reinstalling the game on another drive yesterday (still had freezing).

## Post 150429 by Latcheef — 2025-09-06T01:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150429#p150429 | page 1 | era: pre-1.18.1 -->

Hi Reiker,
have you made any progress with those freezes? I am experiencing the similar issues. But disabling pfquest does not fully resolve this...

## Post 153059 by OneTurtle — 2025-09-24T22:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153059#p153059 | page 1 | era: pre-1.18.1 -->

for me it was a constant stutter every 25 sec's or so.   Narrowed it down to DPSmate. Once i disabled it the problem went away.  Looks like it was just trying to keep track of too much data related to DPS stats.

## Post 153083 by Noce (Patch Note Conspiracy Theorist) — 2025-09-25T06:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153083#p153083 | page 1 | era: pre-1.18.1 -->

at least u have only few sec of freeze.
i cant play AT ALL in raid or bg setup.
i have played a bit few new HC chars but its not working for me since i cant go dungs properly.
so i stoped playing turtle altogether.

## Post 153100 by Idontcareatall (Barrens Chat Casualty) — 2025-09-25T07:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153100#p153100 | page 1 | era: pre-1.18.1 -->

The 1.12 client is legacy garbage and unoptimized to run on anything beyond ~2018 (and that's being generous).

You can expect random freezes and stutters, or a near perfect experience. It's all coming down to pure luck.

I'm running TWoW on a 7700x/RTX 4070, have installed the fixes, the vulkan API etc, and it still stutters like crazy, but it didn't on my previous inferior setup.

So if everything is still stuttering/freezing with 0 addons, and you've already tried to uninstall/clean install and wiped your caches, there's nothing you can do beside waiting for the new client based on unreal engine.

## Post 153111 by Crake (Patch Note Conspiracy Theorist) — 2025-09-25T09:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153111#p153111 | page 1 | era: pre-1.18.1 -->

> **OneTurtle wrote: Wed Sep 24, 2025 10:15 pm**
> for me it was a constant stutter every 25 sec's or so.   Narrowed it down to DPSmate. Once i disabled it the problem went away.  Looks like it was just trying to keep track of too much data related to DPS stats.

Can confirm for me that disabling DPSmate also removes any and all freezes I have as well, but then I can't see my big numbers :P

The twow 2.0 client should hopefully resolve all this legacy spaghetti code

## Post 158771 by postgaro — 2025-11-07T13:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158771#p158771 | page 1 | era: 1.18.1-announced-pre-release -->

for me it was pfquest that was stuttering the game

## Post 164226 by moloki — 2026-01-02T04:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164226#p164226 | page 1 | era: 1.18.1-announced-pre-release -->

basically any Shagu addon has this issue for me. i stopped using all of his addons and these issues went away

## Post 168810 by clearmind — 2026-02-18T21:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168810#p168810 | page 1 | era: 1.18.1-announced-pre-release -->

was experiencing the same, problem has been solved after disabling addons: Plater, Attune and Shagustance.
also i set script memory to 999 MB. Some of these actions helped to stop freezes.

