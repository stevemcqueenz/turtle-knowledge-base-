---
title: "[Development Halted] Turtle HD Project"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2827"
topic_id: 2827
forum_id: 29
forum: "Modding"
author: "Redmagejoe"
author_authority: "player"
posted: "2022-03-21T08:56:00Z"
last_post: "2025-05-16T11:14:00Z"
post_count: 1453
pages: 42
fetched: "2026-09-10T10:40:28Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Development Halted] Turtle HD Project

## Post 17616 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-21T08:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17616#p17616 | page 1 | era: pre-1.18.1 -->

[Turtle HD Project](https://github.com/redmagejoe/TurtleHD)

THIS PROJECT IS CURRENTLY NOT UPDATED FOR PATCH 1.17.2!

Spell, talent, and item tooltips will NOT display properly, and there is a HIGH likelihood of crashes!

Please delete patch-A.MPQ and patch-Z.MPQ if you have it from your Data folder.  patch-B.MPQ will continue to work fine.

![Image](https://i.imgur.com/JdMaqso.jpeg)

I am not a graphics person, nor a WoW mod creator. What I am, however, is a savvy user who can tinker with things to get them to deliver desirable results. What you see right now is a mostly working version of a Turtle WoW compatible conversion of Zer0cool's HD mod for Vanilla WoW servers, that I have painstakingly poured over to get into a state free of crashes and (mostly) free of graphical issues with player models. There are still a few fringe cases that makes this not quite perfect, primarily with Turtle custom mounts and player character skins. Fortunately, several passionate members of the community have been collaborating to refine this patch and make it better than I ever could have anticipated.

![Image](https://i.imgur.com/FbMaTfM.jpg)

This patch successfully replaces all playable races with their Legion HD models. This patch updates all NPCs and creatures in the world with their Legion HD versions where available. This patch replaces several spell effects and sounds with future variations which are more impactful or otherwise improved. This patch replaces all world textures with higher resolution, redrawn textures that use vanilla as a base and aims to update without desecrating the old aesthetic. This patch adds Cataclysm music for zones to the existing Vanilla playlist for more ambience.

Known Issues:
- Strange lightshafts on Undead character creation screen. A corruption in converting the background UI M2 from Warlords to Vanilla caused the ground fog effect to behave this way. Work in progress to fix this.

Tools Used: [DBCutil](https://github.com/n0t49a1n/Tools/tree/master/DBCUtil%201.3.2#start-of-content), [Ladik's MPQ Editor v4.0.0.872](http://www.zezula.net/en/mpq/download.html)

In order to make and test changes, you will need to use the MPQ Editor to open patch-A.MPQ (the mod) or patch-3.MPQ / patch-4.MPQ / patch-5.MPQ (Turtle patches) and find the file under DBClientFiles which handles the particular files you wish to work with. Extract it, then drag and drop the DBC onto DBCutil to spit out a CSV file which can be perused with Microsoft Excel or other spreadsheet viewing application. Make the necessary changes, drag and drop the CSV back onto DBCutil and it will spit out a new DBC file, which can then be put in a new test patch at the end of load order, for example patch-Z.MPQ. Use MPQ Editor to make a new World of Warcraft MPQ, and use that as your testing patch.

File Downloads

 **TURTLE HD PATCH** UPDATED 2024-04-10
 *********************************************************************************************************************************************
[patch-A.MPQ](https://github.com/redmagejoe/TurtleHD/releases/download/v1.17.1-1.0b/patch-A.MPQ) - Legion Character + World Models / Music Pack / Spell Effects
[patch-B.MPQ](https://drive.google.com/file/d/1GQ932XSzsFMKozhGd-a8HPetQI79xcXb/view?usp=share_link) - Environment HD Retexture (reTEXTURE, not a reMESH or reMODEL, only replaces flat textures)
[patch-C.MPQ](https://drive.google.com/file/d/1LAldcTI2CFliAvMTYVbURDngHyqVTzCH/view) - Optional weapon/attack sound replacement patch (all credit to Astricon)
 *********************************************************************************************************************************************

 **To install, simply navigate to your Turtle WoW install folder, open the /Data/ folder, and drop these MPQs in. Simple as that!**

FAQ

 **"Spirit Healers have a strange white bubble around them with this patch. How do I fix this?"**
 *Answer: Be sure that Smooth Shading is enabled in your Video Options.*

 **"Where can I report bugs or missing features?"**
 *Answer: Please use the GitHub link at the top of this post and make a new Issue on our repository for easier documentation of our existing bugs so that we may more easily track and resolve them.*

Credits
- [Astricon](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=236154) - Primary active texture and spell FX downporting developer; new spell sounds, new spell effects, fixing broken textures for NPCs and donation shop skins, etc
- [Crestian](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=72682) - Texture work; HD black Night Elf hair, HD custom Tauren horns
- [Samsam](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=20777) - Texture work; HD Male Orc facepaint skins
- [Tonky](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=243714) - Major contributions to texture work; fixing broken textures for NPCs and fine-tuning HD skins
- [Watchers3d](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=647390) - v1.17.1 new character customizations and NPC prebake patching

*Last edited by Redmagejoe on Thu Jan 09, 2025 4:51 am, edited 112 times in total.*

## Post 17630 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-21T17:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17630#p17630 | page 1 | era: pre-1.18.1 -->

Update: It seems that at least some of the voice lines I inserted were already in a sound dbc somewhere, as simply adding them to the pack has caused male high elf to make male blood elf grunts when taking fall damage unlike before. Occasionally there are combat grunts as well, but the DBC likely needs to be properly modified.

## Post 17633 by Daaki — 2022-03-21T20:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17633#p17633 | page 1 | era: pre-1.18.1 -->

I tried this out and have two immediate things to report:

Mechanical auctioneer summons are now giant green penguins.
Players with pvp war mounts are being carried around by glowing green gnomes instead of their mounts when mounted. The gnomes have the players "equipped" in their main hand. It's actually really hilarious.

## Post 17634 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-21T21:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17634#p17634 | page 1 | era: pre-1.18.1 -->

I think this would benefit from some input from the main MPQ-modifying dev explaining what dbc files affect what. The major issue is with the custom content and my unfamiliarity with it.

## Post 17636 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-21T22:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17636#p17636 | page 1 | era: pre-1.18.1 -->

So I found one of the issues with the mounts looking at CreatureModelData.dbc. The end of the OG Legion patch has NPC ID 2500 on, which is the faction leaders with their custom models. Those same IDs are used by the special mounts for Turtle. I don't know enough about the under the hood to know if I can afford to just append these, as I'd need to figure out the NPC IDs for Jaina, Thrall, Sylvanas, etc on Turtle WoW. Maybe a Dev could help?

![Image](https://i.imgur.com/G78hGL9.png)

## Post 17637 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-21T23:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17637#p17637 | page 1 | era: pre-1.18.1 -->

I believe I fixed the mount problem, but it did involve overwriting things which I cannot confirmed are used somewhere on Turtle WoW, like the Northrend Penguin or the Clockwork Gnomes. I will upload the new version momentarily.

EDIT: New patch-W.mpq is up, that fixes all mounts (except for weird texture on turtles)

Other known issues: Some new NPCs, like High Elf Refugees, have models but no textures, so look like black silhouettes.

*Last edited by Redmagejoe on Mon Mar 21, 2022 11:40 pm, edited 1 time in total.*

## Post 17638 by Crestian — 2022-03-21T23:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17638#p17638 | page 1 | era: pre-1.18.1 -->

Thanks for doin this I love these models. Is there any way to make the custom character appearance options show up? Like Tauren horns or hair colors? I can model and edit texture files in photoshop/maya if they need to be changed. I just dont know how to do any of that other stuff.

## Post 17639 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-21T23:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17639#p17639 | page 1 | era: pre-1.18.1 -->

> **Crestian wrote: Mon Mar 21, 2022 11:30 pm**
> Thanks for doin this I love these models. Is there any way to make the custom character appearance options show up? Like Tauren horns or hair colors? I can model and edit texture files in photoshop/maya if they need to be changed. I just dont know how to do any of that other stuff.

The DBC files are tricky for me to manipulate as well, since I'm not familiar with modifying references to files in an MPQ. However, there's currently no analogue for the "custom" skins, and cause minor graphics issues with this patch. If you would like to take the existing patch and make a Legion-ified version of Turtle's custom skins, that would be helpful.

## Post 17640 by Crestian — 2022-03-22T01:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17640#p17640 | page 1 | era: pre-1.18.1 -->

I would need the files. I have no idea how to do that though hehe. It wouldnt be difficult to make though if some one were to locate them .

## Post 17642 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-22T02:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17642#p17642 | page 1 | era: pre-1.18.1 -->

> **Crestian wrote: Tue Mar 22, 2022 1:16 am**
> I would need the files. I have no idea how to do that though hehe. It wouldnt be difficult to make though if some one were to locate them .

Grab the MPQ editor I linked in the OP, and then grab patch-W.MPQ and drag and drop it into the EXE if you'd like to root around in the replacement assets this patch uses. If you'd like to grab the vanilla files used by Turtle WoW, navigate to the Data folder of your Turtle WoW install, open patch-T.MPQ, patch-U.MPQ, or patch-V.MPQ to find the necessary files under Character within the MPQs. The way it works is load order is numerical then alphabetical, so V is loaded last. If the same file exists within V that is in U or T, ignore the older ones and use that as a base.

The files you are looking for will be in .blp format. There should be tools online that allow you to open these and work on them. Look at the same assets within patch-W.MPQ for a reference of how the skins should wrap. In this way, you may even be able to give the High Elves their blue eyes back by modifying the existing green-eyed blood elf skins.

## Post 17643 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-22T03:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17643#p17643 | page 1 | era: pre-1.18.1 -->

Just a little preview of updated mount compatibility.

![Image](https://i.imgur.com/c7SNZ13.jpeg)

And what Spirit Healers should look like.

![Image](https://i.imgur.com/yExVLAT.jpeg)

Trying to fix the Night Elf bald bug. These poor beautiful bastards.

![Image](https://i.imgur.com/ypRLoKs.jpeg)

## Post 17644 by Jambiya (Barrens Chat Casualty) — 2022-03-22T04:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17644#p17644 | page 1 | era: pre-1.18.1 -->

Incredible work your doing, thank you for this

## Post 17647 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-22T08:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17647#p17647 | page 1 | era: pre-1.18.1 -->

I am now working on getting Blood Elf and Goblin voices fully working. Assuming it can be made to work properly, I'll upload it as a separate patch and see if we can't get it pushed to the Turtle WoW team so as to incorporate it directly into their existing patches.

UPDATE: Goblin Voices are almost completely working, though there's a few lines I can't get working even with modifications to the SoundEntries.dbc. I replaced what existed in one field for which there was no line, while also creating about 16 more rows for lines that didn't have entries. The lines don't seem to play, so I'm guessing there must be another file that sets aside the action -> voice IDs for use, and they're not properly registered to what I want to use them for.

## Post 17651 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-22T14:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17651#p17651 | page 1 | era: pre-1.18.1 -->

Updated first post with the voice patch. Bear in mind it is also a WIP.

## Post 17660 by Torze — 2022-03-22T23:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17660#p17660 | page 1 | era: pre-1.18.1 -->

WOW
This is awesome, can't wait to try it out.

## Post 17661 by Astelan — 2022-03-23T00:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17661#p17661 | page 1 | era: pre-1.18.1 -->

This looks amazing! i really want to try it but im a dork figuring out everything, any chance to make a tutorial video or something? Thanks for your work!

## Post 17662 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-23T00:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17662#p17662 | page 1 | era: pre-1.18.1 -->

I am discontinuing the Goblin and High Elf voice patch, and leaving its current progress up. It's a satisfactory enough stop-gap in the interim of staff working on voices for the upcoming patch. I will resume my efforts on the graphics mods from here on out.

## Post 17668 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-23T06:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17668#p17668 | page 1 | era: pre-1.18.1 -->

UPDATE: Vantablack High Elf NPCs have been fixed. They still use OG models and textures, but it's the best solution until someone wants to try to get them using the proper assets (which would require knowledge of internal unique IDs I don't currently have)

## Post 17669 by Gmarguelles — 2022-03-23T07:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17669#p17669 | page 1 | era: pre-1.18.1 -->

turtle_in_love_head

Thank you so much! Is there a way I can help?

I am not that good with this process, but I feel like I can test things out if you guys need me to.

By the way, what are the odds of adding model edits to the models themselves based on the legion models?

Ingame character: Shibuya

Please reach out if I can help someway

Btw: I have the Scarlet Inquisitor Skin and it is bugged

## Post 17685 by Geojak (Grandmaster of Forum PvP) — 2022-03-23T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17685#p17685 | page 1 | era: pre-1.18.1 -->

hi, how does the environment retexture compare to the other one posted on this forum?

[viewtopic.php?f=29&t=2496&sid=058da3d8c ... 111f1f4265](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2496)

## Post 17686 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-23T21:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17686#p17686 | page 1 | era: pre-1.18.1 -->

To my knowledge it should be the same patch. There are some places, like Undercity, I've noticed that were untouched, though.

## Post 17692 by Faustorgo (Barrens Chat Casualty) — 2022-03-23T23:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17692#p17692 | page 1 | era: pre-1.18.1 -->

@Redmagejoe Bro
I appreciate all the time and work invested in the realization of your project, just today I found out about it by chance, keep it up friend, you can, success.

## Post 17703 by Facemaker — 2022-03-24T11:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17703#p17703 | page 1 | era: pre-1.18.1 -->

Hey all, if anyone interested i have the water patch, that works with Twow client. It's not the full procedural thing, but it looks nicer than standart vanilla water repeating texture.

[https://www.mediafire.com/file/urhqn75z ... 4.MPQ/file](https://www.mediafire.com/file/urhqn75z6ywrtyi/patch-4.MPQ/file)

## Post 17705 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-24T15:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17705#p17705 | page 1 | era: pre-1.18.1 -->

> **Facemaker wrote: Thu Mar 24, 2022 11:24 am**
> Hey all, if anyone interested i have the water patch, that works with Twow client. It's not the full procedural thing, but it looks nicer than standart vanilla water repeating texture.
>
>  [https://www.mediafire.com/file/urhqn75z ... 4.MPQ/file](https://www.mediafire.com/file/urhqn75z6ywrtyi/patch-4.MPQ/file)

Is it supposed to make the water's surface look solid, white, textureless? Should this be after the patch-X? In which case going to have to start renaming patches with the number I've got.

EDIT: No matter what order I load this in, the result is the same.

![Image](https://i.imgur.com/oaUU4Qj.jpeg)

## Post 17710 by Daaki — 2022-03-24T18:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17710#p17710 | page 1 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/FHSWqDZ.jpg)

Reporting another mob in Black Morass that isn't appearing correctly.

## Post 17712 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-24T18:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17712#p17712 | page 1 | era: pre-1.18.1 -->

Oof, will have to take a look at that. I thought I did everything properly with CreatureDisplayInfo this time as well, but I'll take another look. You are using the latest version from yesterday, correct?

## Post 17715 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-25T00:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17715#p17715 | page 1 | era: pre-1.18.1 -->

Latest patch-W fixes mount bugs and Black Morass bugs. Get it from the first post.

## Post 17719 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-25T07:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17719#p17719 | page 1 | era: pre-1.18.1 -->

In order to not completely lose my mind, I need someone willing to do some very tedious diffing/comparing of two sets of DBC / CSVs (think spreadsheet) to merge turtle custom assets into the HD patch's file that will allow all WIP HD assets to be game-ready and tested at a moment's notice. At least right now, I don't have the time or patience, but if someone is willing to assist, it would probably only take an hour or two of your time.

Any assistance would be appreciated.

## Post 17745 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-26T13:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17745#p17745 | page 1 | era: pre-1.18.1 -->

CharSections.dbc has been completely converted. This should allow Crestian and myself to more easily introduce assets and fix any remaining graphical bugs. Will wait to make an update until there's been a substantial amount of assets added.

## Post 17751 by Faustorgo (Barrens Chat Casualty) — 2022-03-27T06:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17751#p17751 | page 1 | era: pre-1.18.1 -->

Amazing bro, the game looks really impresive, with the patch, cant wait :D

## Post 17765 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-28T03:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17765#p17765 | page 1 | era: pre-1.18.1 -->

UPDATE

Pushed a new version out to fix a lot more face bugs. Not all are fixed, ones that are relying on assets we haven't made HD versions of, but it will fix horribly mismatched ones that were being taken from a completely unrelated file. This also happens to add black Night Elf hair support, new Tauren Horns, and fixed Ice Saber mounts.

## Post 17774 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-28T12:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17774#p17774 | page 1 | era: pre-1.18.1 -->

UPDATE

If you haven't already, please install the latest version of patch-W.mpq again. I made an oversight in the CharSections.dbc that caused a duplicate entry for Tauren Horns which causes memory violation crashes on character generation with certain combinations of Tauren features.

## Post 17778 by Spacestr — 2022-03-28T13:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17778#p17778 | page 1 | era: pre-1.18.1 -->

Was flying over burning steppes before your latest post and got this crash:

ERROR #132 (0x85100084) Fatal Exception
Program:	E:\Games\WoW Turtle Game Client\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:0047827A

The instruction at "0x0047827A" referenced memory at "0x00000018".
The memory could not be "read".

The only readable thing from memory dump was Textures\BakedNpcTextures\CreatureDisplayExtra-05356_HD.blp

## Post 17779 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-28T13:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17779#p17779 | page 1 | era: pre-1.18.1 -->

I will look at that specific texture and see if I can't narrow down the problem. It is possible that it had to do with a lava spider though, if it is what I think it is.

EDIT: I opened up the file in question, and it appears to be a Twilight's Hammer Tauren, specifically a Twilight Dark Shaman. It's likely related to the horn bug I described, so please consider updating to the latest version I just posted.

## Post 17787 by Spacestr — 2022-03-28T18:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17787#p17787 | page 1 | era: pre-1.18.1 -->

Yes, that fixed it! Flew back & forth a couple times to make sure.

## Post 17799 by Poisonblack — 2022-03-29T00:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17799#p17799 | page 2 | era: pre-1.18.1 -->

It looks great! Thank you so much!

## Post 17800 by Eruedraith — 2022-03-29T01:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17800#p17800 | page 2 | era: pre-1.18.1 -->

I realize this may be a more complicated issue related to new items in the game, but since installing these patches, I am no longer able to see my equipped items when I sheath/unsheathe.

That said, it looks great! Thank you for all your contributions!

## Post 17801 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-29T01:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17801#p17801 | page 2 | era: pre-1.18.1 -->

That is, unfortunately, a problem that was in the original version of the mod before I touched it, that I noticed on other servers. I notice that the redone items, like Verigan's Fist, don't seem to have this issue, so I'm assuming it has to do with items that don't have new models. Since there's far too many items in the game for any one person to try to replace or grab "Legion versions" of, that's going to be taken as an acceptable bug. You can however fix this issue by finding something to attack so your character takes a combat stance, at which point their weapon will be in their hands.

## Post 17803 by Ramue — 2022-03-29T07:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17803#p17803 | page 2 | era: pre-1.18.1 -->

--- Hard Crash Report!---
So in Searing gorge somewhere between the flight points and BRM there is a spot that crashes the game 100% of the time. if I try to even log my character again with the mod on it crashes the game instantly in that particular part of the zone.

## Post 17807 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-29T09:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17807#p17807 | page 2 | era: pre-1.18.1 -->

> **Ramue wrote: Tue Mar 29, 2022 7:38 am**
> --- Hard Crash Report!---
>  So in Searing gorge somewhere between the flight points and BRM there is a spot that crashes the game 100% of the time. if I try to even log my character again with the mod on it crashes the game instantly in that particular part of the zone.

This issue was just addressed today in the last few posts. Please update to the latest version of patch-W.MPQ. The issue is caused by a Twilight Dark Shaman NPC that is a Tauren, and it is a crash caused by custom horns.

## Post 17844 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-31T04:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17844#p17844 | page 2 | era: pre-1.18.1 -->

NEWS

Crestian is currently working on blue eyes for High Elves, and we are looking into a potential issue related to some graphical bugs with them and black Night Elf hair. Once the issue is resolved, we will push a new update and keep you posted on the next set of assets in progress.

## Post 17845 by Jambiya (Barrens Chat Casualty) — 2022-03-31T04:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17845#p17845 | page 2 | era: pre-1.18.1 -->

Thank you both for your hard work

## Post 17854 by Denniz010 — 2022-03-31T14:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17854#p17854 | page 2 | era: pre-1.18.1 -->

> **Facemaker wrote: Thu Mar 24, 2022 11:24 am**
> Hey all, if anyone interested i have the water patch, that works with Twow client. It's not the full procedural thing, but it looks nicer than standart vanilla water repeating texture.
>
>  [https://www.mediafire.com/file/urhqn75z ... 4.MPQ/file](https://www.mediafire.com/file/urhqn75z6ywrtyi/patch-4.MPQ/file)

Thanks.

## Post 17857 by Redmagejoe (Grandmaster of Forum PvP) — 2022-03-31T15:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17857#p17857 | page 2 | era: pre-1.18.1 -->

> **Denniz010 wrote: Thu Mar 31, 2022 2:41 pm**
> > **Facemaker wrote: Thu Mar 24, 2022 11:24 am**
> > Hey all, if anyone interested i have the water patch, that works with Twow client. It's not the full procedural thing, but it looks nicer than standart vanilla water repeating texture.
> >
> >  [https://www.mediafire.com/file/urhqn75z ... 4.MPQ/file](https://www.mediafire.com/file/urhqn75z6ywrtyi/patch-4.MPQ/file)
>
>   Thanks.

This patch still doesn't seem to do anything as far as I can tell, even if I remove all the other custom patches from this thread. Either loading it before Turtle's patches or after, it doesn't seem to have any impact on whatever textures whatsoever. And as shown in my screenshot, when paired with the other patches, it just causes the water to be flat and white.

## Post 17883 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-02T22:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17883#p17883 | page 2 | era: pre-1.18.1 -->

Currently seeking a BLP master, a modder who knows the perfect ins and outs of getting a texture in the precise specifications to display properly in WoW. I'm talking exact compression, format, alpha, mipmaps, everything needed to not throw weird texture glitches in-game.

We have custom PNGs being made, and I have tried my hand with various different BLP tools to get them working, but alas, there are still problems. If there's anyone out there willing to take a crack at getting these to work in-game, I'd be happy to offer guidance on how to test the new assets Crestian's making.

## Post 17886 by Bleedredstars — 2022-04-03T05:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17886#p17886 | page 2 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Mar 31, 2022 4:16 am**
> NEWS
>
>  Crestian is currently working on blue eyes for High Elves, and we are looking into a potential issue related to some graphical bugs with them and black Night Elf hair. Once the issue is resolved, we will push a new update and keep you posted on the next set of assets in progress.

Very cool! Besides the blue eyes, the skin tone on all my High Elves seems different with the patch. They all go from pale to a darker almost orange-brown shade that I associate with Blood Elves. I’m hoping this is part of the graphical glitches being looked into, because it is kind of a deal breaker for me.

## Post 17892 by Astelan — 2022-04-03T11:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17892#p17892 | page 2 | era: pre-1.18.1 -->

Any chance to update the goblins models?

## Post 17893 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-03T12:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17893#p17893 | page 2 | era: pre-1.18.1 -->

> **Astelan wrote: Sun Apr 03, 2022 11:15 am**
> Any chance to update the goblins models?

That is easier said than done. It may be on the itinerary if I can get the current projects resolved.

## Post 17906 by Geojak (Grandmaster of Forum PvP) — 2022-04-03T21:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17906#p17906 | page 2 | era: pre-1.18.1 -->

Any progress on the emotes? I remember they were driving you mad in world chat the other week.
I think the sounds should definitely get merged into 1.16.1 by torta since its basically a Bugfix.

Is it possible to fix the missing sitting animation for female highelf this way too?

## Post 17912 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-04T02:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17912#p17912 | page 2 | era: pre-1.18.1 -->

I'm taking a bit of a hiatus, at least for a week, to try to enjoy the game since this was driving me up a wall. The first thing I will look at when I return is female blood elf sitting, however.

## Post 17917 by Geojak (Grandmaster of Forum PvP) — 2022-04-04T10:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17917#p17917 | page 2 | era: pre-1.18.1 -->

I can fully relate to that, as a mod Modder and macro writer too, this can relate take up all energy and drains the fun when going on for too long

## Post 17921 by Allwynd01 (Bug Report Enthusiast) — 2022-04-04T12:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17921#p17921 | page 2 | era: pre-1.18.1 -->

If I try to modify games, I eventually get obsessed with modifying them to the point where it's never enough and I keep losing enjoyment in the game. And even when it's fully modified, I can never enjoy it as I would have when I didn't know the first thing about mods. Now I just try to play my games as bare-bones as possible, except on some occasions mods actually add more content and replayability to the game, like the Horn of the Abyss mod for Heroes of Might and Magic 3 or Morrowind Rebirth for The Elder Scrolls 3 Morrowind.

## Post 17933 by Daaki — 2022-04-05T03:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17933#p17933 | page 2 | era: pre-1.18.1 -->

Reporting that something in the patch seems to trigger spell effects not being removed after their duration is over. I've seen this in consecration and hurricane, and also some effect that I'm not sure what exactly it is, but it leaves a small white sparkle on the ground.

See screenshot from a recent aq20 raid:

![Image](https://i.imgur.com/Nx9JbV0.jpg)

## Post 17935 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-05T04:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17935#p17935 | page 2 | era: pre-1.18.1 -->

Haven't seen that happen with my Consecrate yet, but bear in mind that Your Mileage May Vary, and some of these issues are beyond my knowledge to rectify / may be issues the original pre-Turtle mod had.

## Post 17950 by Daaki — 2022-04-05T22:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17950#p17950 | page 2 | era: pre-1.18.1 -->

I found out that the small white sparkle that's left on the ground is from a mage's blink. One mage blinked right in front of me in Stormwind and left it behind. I've tried to remove the hd rextures, all mods, and the cata water mod, as well as patch-T too, to see if anything was messing with it. But nothing seems to have any impact. The spell effects always stay if the mod models are used.

Not really sure what the problem is - this only started happening to me with the latest update. Anyone else having similar issues?

Edit: actually ignore all this. I removed the hd mod as well, and still had the issue. Somehow it's the client that got buggy.

![Image](https://i.imgur.com/vhS3qWr.jpg)

## Post 17952 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-06T00:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17952#p17952 | page 2 | era: pre-1.18.1 -->

They're lucky charms left for you to pick up by Mages!

## Post 18028 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-10T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18028#p18028 | page 2 | era: pre-1.18.1 -->

Still looking for someone who's able to expertly work with BLPs and ensure they maintain the same format as similar assets. Can't make any progress with the patch until someone can fill this role.

## Post 18038 by Justvityok — 2022-04-11T10:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18038#p18038 | page 2 | era: pre-1.18.1 -->

Hello! I want to say that your mod is really nice and good-looking! Alas, I'm not looking for graphical improvements (I belong to those strange people that like old graphics in games more). But I had noticed that in your mod you'd changed the music to Cataclysm tracks. I like the diversity of Cata music, so may I ask you, if you could do the patch only with Cata music? I guess there are more people than me that'd like that. Of course, if it isn't hard for you.

## Post 18039 by Justvityok — 2022-04-11T10:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18039#p18039 | page 2 | era: pre-1.18.1 -->

> **Justvityok wrote: Mon Apr 11, 2022 10:41 am**
> Hello! I want to say that your mod is really nice and good-looking! Alas, I'm not looking for graphical improvements (I belong to those strange people that like old graphics in games more). But I had noticed that in your mod you'd changed the music to Cataclysm tracks. I like the diversity of Cata music, so may I ask you, if you could do the patch only with Cata music? I guess there are more people than me that'd like that. Of course, if it isn't hard for you.

ah yeah, and spell sound effects, too.

## Post 18041 by Justvityok — 2022-04-11T11:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18041#p18041 | page 2 | era: pre-1.18.1 -->

> **Justvityok wrote: Mon Apr 11, 2022 10:41 am**
> Hello! I want to say that your mod is really nice and good-looking! Alas, I'm not looking for graphical improvements (I belong to those strange people that like old graphics in games more). But I had noticed that in your mod you'd changed the music to Cataclysm tracks. I like the diversity of Cata music, so may I ask you, if you could do the patch only with Cata music? I guess there are more people than me that'd like that. Of course, if it isn't hard for you.

Sorry for bothering. Just deleted everything music un-related in Patch-W. Still kudos to ya for your work! Eager to see next versions!

## Post 18043 by Geojak (Grandmaster of Forum PvP) — 2022-04-11T12:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18043#p18043 | page 2 | era: pre-1.18.1 -->

Hello, I also got the issue with staying effects on the ground.
Actually I am just using the voice patch, und have removed the ground texture one again, but the issue prevails (never tried the character model patch)

Someone on discord claimed updating nvidia helped him, but for me no change.

## Post 18045 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-11T18:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18045#p18045 | page 2 | era: pre-1.18.1 -->

> **Geojak wrote: Mon Apr 11, 2022 12:59 pm**
> Hello, I also got the issue with staying effects on the ground.
>  Actually I am just using the voice patch, und have removed the ground texture one again, but the issue prevails (never tried the character model patch)
>
>  Someone on discord claimed updating nvidia helped him, but for me no change.

As someone pointed out above, that issue is completely unrelated to these patches.

## Post 18062 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-12T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18062#p18062 | page 2 | era: pre-1.18.1 -->

While there are still some rough edges in need of polishing on the current patch, I have given consideration to getting my hands on the Battle for Azeroth files (where new Goblin models were introduced) in the hopes of seeing about importing them. As previously stated, however, the assets may have changed immensely in format by that point and no longer be compatible without being retrofitted, so no promises.

## Post 18126 by Ramue — 2022-04-15T09:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18126#p18126 | page 2 | era: pre-1.18.1 -->

Bug report. High elf priest t2 helm (Halo of transcendence) (on women not tested on men)
The model doesn't appear at all when worn with W patch installed and if character preview is opened with a high elf wearing one the entire character disappears in the window. Even the character select screen goes completely black if a helf is wearing one.

## Post 18128 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-15T10:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18128#p18128 | page 2 | era: pre-1.18.1 -->

Great, now I have to figure out what could possibly be causing THAT. It's specifically when the item is equipped and unequipped that you can see this happen?

## Post 18148 by Excarillion — 2022-04-16T04:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18148#p18148 | page 2 | era: pre-1.18.1 -->

Thank you for your work. You are amazing!!!

## Post 18178 by Trckster — 2022-04-16T23:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18178#p18178 | page 2 | era: pre-1.18.1 -->

Is there a way to only download the legion models without having world and spell models ? Would love to have the option to only use the character models.

## Post 18269 by Glarthir (Barrens Chat Casualty) — 2022-04-20T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18269#p18269 | page 2 | era: pre-1.18.1 -->

omg this is so awesome! I never thought this day would come!

## Post 18328 by Faustorgo (Barrens Chat Casualty) — 2022-04-24T05:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18328#p18328 | page 2 | era: pre-1.18.1 -->

@Glarthir yeah bro, works like a charm

## Post 18386 by Raukodor (Bug Report Enthusiast) — 2022-04-27T09:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18386#p18386 | page 2 | era: pre-1.18.1 -->

Your work is awesome

But id love have the eagles with upgraded model (i have a amani eagle as hunter pet and retain the classic model. And looks crappy compares with new models)

<https://www.wow-petopia.com/look.php?id=eagle2brown>

Is a way to make this possible?

## Post 18412 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-28T01:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18412#p18412 | page 3 | era: pre-1.18.1 -->

Updates have slowed down because I've got no one who has more experience working with BLP compression and formatting, and I haven't heard from Crestian in a while, so I may also need a new asset artist.

If anyone knows someone who has experience making custom textures who can fill either or both of these roles, please point them this way.

## Post 18449 by Redmagejoe (Grandmaster of Forum PvP) — 2022-04-30T02:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18449#p18449 | page 3 | era: pre-1.18.1 -->

I'm seeing some places where I could improve on the existing Goblin PC sounds, as they seem jury-rigged to use normal NPC Goblin mob combat sound entries in SoundEntries, and somehow the Female Goblin PCs point to Male Gnomes for their combat sound entries. I imagine that the planned addition of custom voice lines for the Goblin PCs will change SoundEntries to better facilitate this, but would it be unreasonable to ask a dev if I might be pointed in the right direction for how to modify the DBC in advance, that I might plug in the Cataclysm Goblin combat sounds for Patch-Y.MPQ?

That would be quite helpful and be a nice stop-gap until any voice-acting work can be done.

## Post 18457 by Leojjet — 2022-04-30T13:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18457#p18457 | page 3 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Apr 30, 2022 2:03 am**
> I'm seeing some places where I could improve on the existing Goblin PC sounds, as they seem jury-rigged to use normal NPC Goblin mob combat sound entries in SoundEntries, and somehow the Female Goblin PCs point to Male Gnomes for their combat sound entries. I imagine that the planned addition of custom voice lines for the Goblin PCs will change SoundEntries to better facilitate this, but would it be unreasonable to ask a dev if I might be pointed in the right direction for how to modify the DBC in advance, that I might plug in the Cataclysm Goblin combat sounds for Patch-Y.MPQ?
>
>  That would be quite helpful and be a nice stop-gap until any voice-acting work can be done.

For what it’s worth I think your doing an amazing job with this stuff. I know in the past the devs didn’t exactly provide support for HD mods like this, but I hope one of the more “turtle tech” savvy devs will reach out eventually.

I’d guess after the class changes are out, it’s probably highest on the que.

*Last edited by Leojjet on Sat Apr 30, 2022 3:52 pm, edited 1 time in total.*

## Post 18458 by Tyrkir — 2022-04-30T14:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18458#p18458 | page 3 | era: pre-1.18.1 -->

First of all great work on this, nicely done.
I am curious if the only thing i wanted to change is some of the player character models, how would i need to go about it? For example if i wanted the humans changed but not the weapons or the terrain etc.

## Post 18532 by Sofacrusader — 2022-05-06T13:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18532#p18532 | page 3 | era: pre-1.18.1 -->

Thank you for the mod!

## Post 18539 by Noker — 2022-05-07T16:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18539#p18539 | page 3 | era: pre-1.18.1 -->

Bug report. Troll model with green skin looks like a flesh golem, with texture chaos.

## Post 18542 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-07T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18542#p18542 | page 3 | era: pre-1.18.1 -->

> **Noker wrote: Sat May 07, 2022 4:36 pm**
> Bug report. Troll model with green skin looks like a flesh golem, with texture chaos.

I am aware of this. We do not have HD assets for jungle troll skin, so until Crestian returns or another artist steps in, there's nothing that can be done about it.

## Post 18584 by Grimhornett — 2022-05-11T14:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18584#p18584 | page 3 | era: pre-1.18.1 -->

Are you going to manage to put the voices of the female goblins PCs?

The voices of the male gnomes disturb me. xD

Thx again for this mod !

## Post 18586 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-11T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18586#p18586 | page 3 | era: pre-1.18.1 -->

If you spot any items that show checkered boxes with Turtle HD and not without, please report the item name in here so I can update the ItemDisplayInfo.dbc

## Post 18655 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-17T07:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18655#p18655 | page 3 | era: pre-1.18.1 -->

Fixed a number of audio bugs and a few memory crashes and graphic bugs. Sadly, there's still a lot of progress to make on the graphics bugs front. Please bear with me, as I am currently without an artist.

Grab the latest version of patch-W.MPQ from the first post.

## Post 18665 by Faustorgo (Barrens Chat Casualty) — 2022-05-18T00:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18665#p18665 | page 3 | era: pre-1.18.1 -->

Thanks for your effort bro, apreciatte :D

## Post 18691 by Normercer — 2022-05-19T12:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18691#p18691 | page 3 | era: pre-1.18.1 -->

Hello! Great Addon, i love it!  turtle_in_love_head

A friend of mine ran into a bug with it, maybe you know why it happens and if it's fixable.

The bug is the following: His little wizard gnome lost his fabulous wizard beard

![Image](https://cdn.discordapp.com/attachments/941348896045694976/976553618746527814/Screenshot_2022-05-18_201752.png)

![Image](https://cdn.discordapp.com/attachments/941348896045694976/976553619174334504/Screenshot_2022-05-18_202128.png)

## Post 18699 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-19T17:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18699#p18699 | page 3 | era: pre-1.18.1 -->

That is not one of the facial hairstyles available with the patch, and looks more like a bug where certain assets are not being loaded. Are you using any other patches besides the ones I linked and the ones that came with Turtle? These problems can happen when you mix and match patches.

That same beard should appear roughly like this:
![Image](https://i.imgur.com/2I5FqIN.png)

## Post 18705 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-19T22:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18705#p18705 | page 3 | era: pre-1.18.1 -->

There's been another update to address a few more bugs. Please grab the latest patch-W.MPQ at your earliest convenience. As always, report any bugs you find here, bearing in mind there are still some graphical bugs for missing assets while I am without an artist.

Looking for a new texture artist, on that note, as Crestian has gone MIA.

## Post 18711 by Loraliel — 2022-05-20T08:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18711#p18711 | page 3 | era: pre-1.18.1 -->

Love the look of this mod, thank you so much for your efforts. I just wanted to report a bug I have encountered and wondered if this is fixable on my end or if it's a known issue.

Goblin characters appear totally bald for me, with nothing but the scalp texture (on females), the added hairstyles are not showing. As far as I'm aware I have no other patches installed besides the HD environment pack.

## Post 18715 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-20T09:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18715#p18715 | page 3 | era: pre-1.18.1 -->

This is an unfortunate side effect of the patch, and I will try to see if I can't re-enable them through DBC modification.

EDIT: I have been able to resolve the issue with Goblin hair not appearing by removing the CharHairGeosets.dbc from patch-W with no immediately apparent side-effects on other races. Now let's see if I can fix the skin color not changing on my patch.

EDIT2: Alright, I've completely fixed Goblins hair and skin and eye colors. Expect an update to the patch soon.

> **Normercer wrote: Thu May 19, 2022 12:48 pm**
> Hello! Great Addon, i love it!  turtle_in_love_head
>
>  A friend of mine ran into a bug with it, maybe you know why it happens and if it's fixable.
>
>  The bug is the following: His little wizard gnome lost his fabulous wizard beard

I have found what appears to be 3 "missing" facial hairs on my patch, which I can only assume are additional facial hairs implemented by Turtle. There won't be a fix for this unless I can find a new asset artist to create HD versions of these Turtle hairs, I'm afraid.

## Post 18723 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-20T10:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18723#p18723 | page 3 | era: pre-1.18.1 -->

Updated patch-W.MPQ to fix Goblin graphical bugs.

I am aware of certain graphical bugs with items like Ebon Mask displaying a no-model checkered box, and am taking notes and fixing them as I come across them. The HD patch tried to replace several items with Legion counterparts, but it seems the assets don't work properly on High Elves or Goblins. Rather than try to make the new models work, it would be easier to revert them.

If you spot any other items that behave this way, let me know, and when I have enough fixes I'll push out another update.

## Post 18726 by Normercer — 2022-05-20T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18726#p18726 | page 3 | era: pre-1.18.1 -->

Hello, it' me again. About that missing gnome beard. We tried everything. We deleted all addons, deinstalled turtle wow. Even used your updated version. Still the gnome beard is missing, like on the pictures above

## Post 18727 by Oran1 — 2022-05-20T15:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18727#p18727 | page 3 | era: pre-1.18.1 -->

Just wanted to say thank you for making this :D  hope it gets more updated.

## Post 18731 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-20T18:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18731#p18731 | page 3 | era: pre-1.18.1 -->

> **Normercer wrote: Fri May 20, 2022 2:28 pm**
> Hello, it' me again. About that missing gnome beard. We tried everything. We deleted all addons, deinstalled turtle wow. Even used your updated version. Still the gnome beard is missing, like on the pictures above

As stated, this is because we do not currently have the assets. Please be patient until I can find a new assets artist to create them.

## Post 18744 by Normercer — 2022-05-21T17:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18744#p18744 | page 3 | era: pre-1.18.1 -->

Oh sorry, i thought you talked about other assets and not the gnome one. My bad Redmagejoe, thanks for your reply :)

## Post 18745 by Hibernate — 2022-05-21T17:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18745#p18745 | page 3 | era: pre-1.18.1 -->

Not sure if this was mentioned, but after adding this mod, I will see spell effects linger long after the spell is over. Example: As a Paladin, after casting consecrate, every time I come back to the area where I first cast it, I still see the spell effect pulsating holy light. In an area where I fought a lot of mobs, it looks like a German techno dance club.

## Post 18748 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-21T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18748#p18748 | page 3 | era: pre-1.18.1 -->

> **Hibernate wrote: Sat May 21, 2022 5:53 pm**
> Not sure if this was mentioned, but after adding this mod, I will see spell effects linger long after the spell is over. Example: As a Paladin, after casting consecrate, every time I come back to the area where I first cast it, I still see the spell effect pulsating holy light. In an area where I fought a lot of mobs, it looks like a German techno dance club.

That is actually independent of the mod and has reports weeks ago from players not using any mods whatsoever. I don't recall what the solution was, but it may have been a caching issue.

## Post 18750 by Jere53 — 2022-05-21T21:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18750#p18750 | page 3 | era: pre-1.18.1 -->

Hi there! Is there a way I could tweak the files to make it so the mod updates only the music, but leaves the models and textures in their vanilla states?. Thanks in advance! Incredible work you've been doing.

## Post 18754 by Oran1 — 2022-05-21T23:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18754#p18754 | page 3 | era: pre-1.18.1 -->

Hey, been using it for awhile now and it seems i crash every now and then.  It says it's Model2\M2.cpp and Not enough memory resources are available to process this command.

Line:	111

If you can do have a look into it, thanks in advance :)

## Post 18755 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-21T23:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18755#p18755 | page 3 | era: pre-1.18.1 -->

> **Jere53 wrote: Sat May 21, 2022 9:10 pm**
> Hi there! Is there a way I could tweak the files to make it so the mod updates only the music, but leaves the models and textures in their vanilla states?. Thanks in advance! Incredible work you've been doing.

You could, but you'd need to know which files to extract and make a separate patch. Due to Turtle's choice to use T, U, and V, patch names are already incredibly limited so I'm not willing to spend the time to work on that myself.

> **Oran1 wrote: Sat May 21, 2022 11:26 pm**
> Hey, been using it for awhile now and it seems i crash every now and then.  It says it's Model2\M2.cpp and Not enough memory resources are available to process this command.
>
>  Line:	111
>
>  If you can do have a look into it, thanks in advance :)

Are you using the latest version?

## Post 18756 by Oran1 — 2022-05-22T00:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18756#p18756 | page 3 | era: pre-1.18.1 -->

yes i am

## Post 18757 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-22T00:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18757#p18757 | page 3 | era: pre-1.18.1 -->

Could you describe the places that you most frequently encounter these crashes? Does it happen in the same place whenever you log back on directly after a crash? That would suggest it's related to a particular player with an item model that may not be properly handled.

Are they completely random? I've recently updated the model DBCs and there may have been an oversight. I'll need more information to narrow down the issue.

## Post 18758 by Oran1 — 2022-05-22T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18758#p18758 | page 3 | era: pre-1.18.1 -->

not 100% sure but it has happened twice in the same zone: elwynn forest but yea it may be a player not a place.

## Post 18759 by Oran1 — 2022-05-22T00:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18759#p18759 | page 3 | era: pre-1.18.1 -->

no idea if this helps:

 ----------------------------------------
Memory Dump
 ----------------------------------------

Stack: 1024 bytes starting at (ESP = 0019E444)

 * = addr               **                                         *
 0019E440: 44 E4 19 00  88 47 00 00  61 E6 19 00  00 00 00 00  D....G..a.......
 0019E450: 44 E4 19 00  5C E4 19 00  CC BD 66 00  70 E4 19 00  D...\.....f.p...
 0019E460: B8 DC 64 00  88 47 00 00  03 00 00 00  00 00 00 00  ..d..G..........
 0019E470: EC F1 19 00  42 D5 64 00  00 00 00 00  68 33 87 00  ....B.d.....h3..
 0019E480: 08 00 00 00  58 1C C5 00  00 00 00 00  00 00 00 00  ....X...........
 0019E490: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E4A0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E4B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E4C0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E4D0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E4E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E4F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E500: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E510: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E520: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E530: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E540: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E550: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E560: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E570: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E580: 00 00 00 00  00 00 00 00  54 68 69 73  20 61 70 70  ........This app
 0019E590: 6C 69 63 61  74 69 6F 6E  20 68 61 73  20 65 6E 63  lication has enc
 0019E5A0: 6F 75 6E 74  65 72 65 64  20 61 20 63  72 69 74 69  ountered a criti
 0019E5B0: 63 61 6C 20  65 72 72 6F  72 3A 0A 0A  4E 6F 74 20  cal error:..Not
 0019E5C0: 65 6E 6F 75  67 68 20 6D  65 6D 6F 72  79 20 72 65  enough memory re
 0019E5D0: 73 6F 75 72  63 65 73 20  61 72 65 20  61 76 61 69  sources are avai
 0019E5E0: 6C 61 62 6C  65 20 74 6F  20 70 72 6F  63 65 73 73  lable to process
 0019E5F0: 20 74 68 69  73 20 63 6F  6D 6D 61 6E  64 2E 0D 0A   this command...
 0019E600: 0A 50 72 6F  67 72 61 6D  3A 09 46 3A  5C 54 75 72  .Program:.F:\Tur
 0019E610: 74 6C 65 20  57 6F 57 5C  57 6F 57 2E  65 78 65 0A  tle WoW\WoW.exe.
 0019E620: 46 69 6C 65  3A 09 45 3A  5C 62 75 69  6C 64 5C 62  File:.E:\build\b
 0019E630: 75 69 6C 64  57 6F 57 5C  45 6E 67 69  6E 65 5C 53  uildWoW\Engine\S
 0019E640: 6F 75 72 63  65 5C 4D 6F  64 65 6C 32  5C 4D 32 2E  ource\Model2\M2.
 0019E650: 63 70 70 0A  4C 69 6E 65  3A 09 31 31  31 0A 0A 0A  cpp.Line:.111...
 0019E660: 0A 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E670: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E680: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E690: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E6A0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E6B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E6C0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E6D0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E6E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E6F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E700: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E710: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E720: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E730: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E740: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E750: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E760: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E770: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E780: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E790: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E7A0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E7B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E7C0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E7D0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E7E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E7F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E800: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E810: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E820: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E830: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019E840: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................

## Post 18782 by Samsam — 2022-05-22T16:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18782#p18782 | page 3 | era: pre-1.18.1 -->

Great work, looks good. It seems to work on most of my characters, however, when in the character selection screen I select my main (lvl 60 Tauren Hunter) the game crashes with a "critical error" -report. Any ideas?

Edit 1: Seems like the problem was the name of the MPQ. I renamed it from patch-W.MPQ into patch-1.MPQ and it seems to work now.

Edit 2: Renaming the file to patch-1.MPQ messed up the mod, male gnome, nelf and UD faces were horribly deformed. Now that I changed it back to patch-W.MPQ my main character does not crash the game anymore and it seems to work for now.

Edit 3: I just wanted to comment on the new musics added. It's a feature I've been looking for years with no results and finally it's true. Can't thank you enough.

## Post 18788 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-22T18:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18788#p18788 | page 3 | era: pre-1.18.1 -->

Does your Tauren use the Spirit Walker skin, by any chance? I've been noticing some issues with that.

## Post 18797 by Samsam — 2022-05-23T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18797#p18797 | page 3 | era: pre-1.18.1 -->

No, he doesn't, he's not customized at all. However the mod seems to work flawlessly now, so I guess the renaming did the trick.

## Post 18800 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-23T17:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18800#p18800 | page 3 | era: pre-1.18.1 -->

Renaming the patch is not advisable, as this causes problems with load order and it will not at all work properly if it's loaded before Turtle patches. Further, renaming it to patch-1 means that even the official vanilla patch-2 overwrites it, so you might as well just delete the file and not use it at all.

If you could try temporarily removing the patch, unequipping everything on your Tauren, and reapplying the patch, I might be able to narrow down if it's character model related or item related.

## Post 18808 by 5kaeledas5 — 2022-05-23T22:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18808#p18808 | page 3 | era: pre-1.18.1 -->

Greetings and thanks for your great work! Just a (perhaps stupid) question: how do those patches affect performance?

## Post 18809 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-23T23:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18809#p18809 | page 4 | era: pre-1.18.1 -->

The only place I've seen any performance hit is during rain in Teldrassil, and even then it only drops from 60+ FPS to I'd say roughly 40+ depending on system.

## Post 18814 by Samsam — 2022-05-24T05:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18814#p18814 | page 4 | era: pre-1.18.1 -->

If you read my post through, you would know that this problem no longer exists, I cannot recreate it anymore. However if it does appear again, I will let you know.

## Post 18881 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-28T03:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18881#p18881 | page 4 | era: pre-1.18.1 -->

Recent interest has inspired me to take a look at improving patch-Y again (the goblin and high elf voice patch) to see if I can't get emotes working. I've got some new tools and potentially a second set of eyes to help get this patch fully working, hopefully.

*Last edited by Redmagejoe on Sat May 28, 2022 5:27 am, edited 1 time in total.*

## Post 18882 by Oran1 — 2022-05-28T05:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18882#p18882 | page 4 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat May 28, 2022 3:17 am**
> Recent interest has inspired my to take a look at improving patch-Y again (the goblin and high elf voice patch) to see if I can't get emotes working. I've got some new tools and potentially a second set of eyes to help get this patch fully working, hopefully.

Glad to hear! :D also btw it seems a fix to some errors is getting the 4gb patch for the exe as i seem to not be getting any errors for now.

## Post 18895 by Samsam — 2022-05-28T19:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18895#p18895 | page 4 | era: pre-1.18.1 -->

The fatal error problem is back, with the same character. I tried virus scans and Windows Update, but they didn't work. Also tried removing all the addons and trying it in a separate installation of TWow in another drive, but no effect.

## Post 18911 by Geojak (Grandmaster of Forum PvP) — 2022-05-29T16:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18911#p18911 | page 4 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat May 28, 2022 3:17 am**
> Recent interest has inspired me to take a look at improving patch-Y again (the goblin and high elf voice patch) to see if I can't get emotes working. I've got some new tools and potentially a second set of eyes to help get this patch fully working, hopefully.

Uh, I am rly looking forward to this. Thx alot for the work put in!
My mute highelf makes me sad very time I emote

## Post 18924 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-30T10:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18924#p18924 | page 4 | era: pre-1.18.1 -->

UPDATE: patch-Y.MPQ will receive no further updates. After some tinkering, I discovered that the emotes cannot be enabled by client modifications alone and require things serverside. Thus it would have to be officially supported by staff. I hope that people will continue to enjoy it in its current state!

## Post 18925 by Geojak (Grandmaster of Forum PvP) — 2022-05-30T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18925#p18925 | page 4 | era: pre-1.18.1 -->

:( someone summon torta here

## Post 18934 by Teurikh — 2022-05-31T00:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18934#p18934 | page 4 | era: pre-1.18.1 -->

Hello, when you enter the game with the W patch, errors _1, _2 appear, and after loading it crashes with errors.
![Image](https://i.ibb.co/LtrYsjc/2.png)
![Image](https://i.ibb.co/R36DK9X/1.png)
![Image](https://i.ibb.co/cTx6543/er-2.png)
![Image](https://i.ibb.co/YcRpx6T/er-1.png)

## Post 18935 by Teurikh — 2022-05-31T00:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18935#p18935 | page 4 | era: pre-1.18.1 -->

It is worth noting that these errors occurred after the patch update, before that everything worked fine

## Post 18937 by Teurikh — 2022-05-31T01:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18937#p18937 | page 4 | era: pre-1.18.1 -->

> **Teurikh wrote: Tue May 31, 2022 12:48 am**
> It is worth noting that these errors occurred after the patch update, before that everything worked fine

Switching the vertex animation shader setting fixed the issue. I'm sorry for the inconvenience.

## Post 18938 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-31T04:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18938#p18938 | page 4 | era: pre-1.18.1 -->

Still looking for a talented artist willing to make new HD assets. I may need some existing assets redone due to some file corruption a la black Night Elf hairs.

## Post 18944 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-31T16:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18944#p18944 | page 4 | era: pre-1.18.1 -->

The Druid forms are already updated, unless you mean the custom Druid form skins Turtle uses. That will require an artist.

## Post 19009 by Rangtuk — 2022-06-06T14:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19009#p19009 | page 4 | era: pre-1.18.1 -->

So I have a weird bug with mine, not gamebreaking but I can't visually sheath/unsheath my weapons without unequipping them or by attacking something. Additionally, and this is a VERY minor error (assuming its even an error) but Magma Totem, Frost Resist, and Searing Totem have the spiky orc model, but fire nova only has the tauren looking one

Also also, it seems my cast bar has been moved to the very edge of my hotbar? (just above it, instead of a bit higher) I don't use UI mods and this is the only new thing I've downloaded recently

## Post 19011 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-06T16:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19011#p19011 | page 4 | era: pre-1.18.1 -->

> **Rangtuk wrote: Mon Jun 06, 2022 2:55 pm**
> So I have a weird bug with mine, not gamebreaking but I can't visually sheath/unsheath my weapons without unequipping them or by attacking something. Additionally, and this is a VERY minor error (assuming its even an error) but Magma Totem, Frost Resist, and Searing Totem have the spiky orc model, but fire nova only has the tauren looking one

The sheathing issue is a known problem even with the unmodified version of this patch that was made for normal vanilla servers. Not something that can be easily remedied on my end, I'm afraid. As for the totems issue, I can take a look into it.

> **Rangtuk wrote: Mon Jun 06, 2022 2:55 pm**
> Also also, it seems my cast bar has been moved to the very edge of my hotbar? (just above it, instead of a bit higher) I don't use UI mods and this is the only new thing I've downloaded recently

Your UI elements are completely unaffected by anything in my patches.

## Post 19028 by Gmarguelles — 2022-06-07T06:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19028#p19028 | page 4 | era: pre-1.18.1 -->

Is it possible to add the Whitemane skin that is available on wowhead?
[https://wow.zamimg.com/uploads/screensh ... temane.jpg](https://wow.zamimg.com/uploads/screenshots/normal/937047-high-inquisitor-whitemane.jpg)

## Post 19029 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-07T07:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19029#p19029 | page 4 | era: pre-1.18.1 -->

If it's in Turtle's offered skins, and I can get an artist to downport it, then yes, it is possible.

## Post 19030 by Gmarguelles — 2022-06-07T08:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19030#p19030 | page 4 | era: pre-1.18.1 -->

Yes, thats the Whitemane skin that you can buy.
Its the one I was asking for a long time ago, but I just took a look at WoWhead and her skin is updated.

I direly want this please, how can I help?

## Post 19031 by Gmarguelles — 2022-06-07T09:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19031#p19031 | page 4 | era: pre-1.18.1 -->

[https://www.wowhead.com/npc=3977/high-i ... -whitemane](https://www.wowhead.com/npc=3977/high-inquisitor-whitemane)

Here is the wow head model on wowhead.
I dont know how to find it or where to look.

## Post 19111 by Tarok — 2022-06-11T02:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19111#p19111 | page 4 | era: pre-1.18.1 -->

Know this is a huge request, but is there any way to separate out the music? The new music grates on me, especially the cave music. I opened the mpq's with a viewer and I could delete it out of it but then it messes everything up probably because then assets don't line up. Maybe I'll need to extract all old music I want and replace them?

## Post 19154 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-14T06:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19154#p19154 | page 4 | era: pre-1.18.1 -->

**patch-W.MPQ UPDATE**

Fixed the white triangle footprint issue with the lava tarantulas and the robot chicken in Tanaris.

## Post 19186 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-16T08:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19186#p19186 | page 4 | era: pre-1.18.1 -->

patch-Y.MPQ has been officially discontinued pending the upcoming custom voice-acted High Elf and Goblin patches, and because it was causing intermittent interface sound problems. If you have patch-Y.MPQ, I encourage you to delete it.

## Post 19225 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-18T00:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19225#p19225 | page 4 | era: pre-1.18.1 -->

patch-W.MPQ has been updated

There was an issue with some misnamed tags for texture files for creatures, resulting in the client defaulting to stretching old textures over new models. If you spot any other creatures that look like they have weird textures stretched over their model, please report the specific monster name or ID. Ideally, link the database page.

For example, some of the affected creatures were:
<https://database.turtlecraft.gg/?npc=8208>
<https://database.turtlecraft.gg/?npc=5427>
<https://database.turtlecraft.gg/?npc=5425>

## Post 19237 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-19T00:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19237#p19237 | page 4 | era: pre-1.18.1 -->

Even though I'm still lacking an artist for this project, there is some hope in the ease of creating HD assets for the custom turtle skins and the like. Some of the NPCs in the world serve as the basis for custom skins, and it would be relatively easy for an artist to make use of the prebaked NPC textures for creating player character textures that use the same colors and details.

Fingers crossed I kind find a replacement soon.

## Post 19240 by Gmarguelles — 2022-06-19T06:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19240#p19240 | page 4 | era: pre-1.18.1 -->

Gosh, I hope someone is able to join, I thirst for that Scarlet skin in HD

## Post 19241 by Dushan992 — 2022-06-19T06:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19241#p19241 | page 4 | era: pre-1.18.1 -->

Hi friend first of all i want to thank you for excelent work. It looks amazing and mainly for me player that never played beyond TBC and never experienced new graphics is breathtaking.

I have one bug to report tho, when i added +3 twohand weapon dmg enchant on my sword (Morladim quest sword Archeus) my character cannot be loaded in character panel nor in the little screen on top left corner. While in world it is there but i see that sword is probably missing that little glow that +3 adds. Do you know maybe how to fix that problem or is it better for me to try and get on it some other enchant so bugs dissapears?

Once again i want to thank you for amazing work! :)

## Post 19249 by Albusturt — 2022-06-19T16:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19249#p19249 | page 4 | era: pre-1.18.1 -->

How rich is the music rescore in this patch? Is there any other (Like Leeviathan's music rescore) which has more music?

## Post 19254 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-20T00:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19254#p19254 | page 4 | era: pre-1.18.1 -->

> **Dushan992 wrote: Sun Jun 19, 2022 6:12 am**
> Hi friend first of all i want to thank you for excelent work. It looks amazing and mainly for me player that never played beyond TBC and never experienced new graphics is breathtaking.
>
>  I have one bug to report tho, when i added +3 twohand weapon dmg enchant on my sword (Morladim quest sword Archeus) my character cannot be loaded in character panel nor in the little screen on top left corner. While in world it is there but i see that sword is probably missing that little glow that +3 adds. Do you know maybe how to fix that problem or is it better for me to try and get on it some other enchant so bugs dissapears?
>
>  Once again i want to thank you for amazing work! :)

I can't say I'm aware of what would be causing disappearing characters, but I have noticed it myself before. I was unable to draw a correlation, so I will have to see if I can narrow it down specifically to enchants that I might get to the bottom of this.

> **Albusturt wrote: Sun Jun 19, 2022 4:13 pm**
> How rich is the music rescore in this patch? Is there any other (Like Leeviathan's music rescore) which has more music?

While not all of the music has been replaced, only new tracks added, those added are Cataclysm and onward rescores which are significant improvements over their originals. Elwynn Forest, Stranglethorn Vale, Stormwind, Orgrimmar, etc.

## Post 19269 by Daaki — 2022-06-20T22:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19269#p19269 | page 4 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Jun 18, 2022 12:55 am**
> patch-W.MPQ has been updated
>
>  There was an issue with some misnamed tags for texture files for creatures, resulting in the client defaulting to stretching old textures over new models. If you spot any other creatures that look like they have weird textures stretched over their model, please report the specific monster name or ID. Ideally, link the database page.
>
>  For example, some of the affected creatures were:
>  <https://database.turtlecraft.gg/?npc=8208>
>  <https://database.turtlecraft.gg/?npc=5427>
>  <https://database.turtlecraft.gg/?npc=5425>

I noticed this bad texture from the sheep in the cow level. The cats in the high elf city also have very odd textures similar to the sheep, where textures from certain body parts are in the wrong positions.

![Image](https://i.imgur.com/e5Bs6Rc.jpg)

## Post 19271 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-20T23:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19271#p19271 | page 4 | era: pre-1.18.1 -->

I may actually be able to cheat a little with the assets that are not Turtle custom. I can go find the Legion versions of these assets which exist in retail and downport them. The problem is there is no SheepBrown in my pack, but Sir Jessy uses SheepBrown, so it's just using the low-res version wrapped around an HD model. Same goes for the Dawnsabers.

I'll make an update once I've stolen these assets and put them into my patch. Custom Turtle assets will still need to be made by an artist that I do not currently have.

## Post 19272 by Casavir — 2022-06-21T02:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19272#p19272 | page 4 | era: pre-1.18.1 -->

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/Q0DvagE]

## Post 19273 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-21T04:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19273#p19273 | page 4 | era: pre-1.18.1 -->

**PATCH-W.MPQ UPDATE**

- Fixed Sir Jessy using OLD sheep texture, added HD SheepBrown texture.
- Fixed Icepoint Whiteclaws using old polar bear model and texture, now using the HD model and texture. Any other bears that were using the old model and texture have also been updated to use the HD assets.
- Updated Thrall to use the new unique model from later expansions.
- Fixed Crimson Lynxes in Quel'thalas using new model but old texture
![Image](https://i.imgur.com/2BcJypw.jpeg)

![Image](https://i.imgur.com/FbMaTfM.jpg)

## Post 19278 by Bowser (Turtle WoW Team) [STAFF] — 2022-06-21T13:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19278#p19278 | page 4 | era: pre-1.18.1 -->

I have been following this thread closely since March. This HD patch is in my opinion an impressive and badly needed graphics update.

## Post 19290 by Faustorgo (Barrens Chat Casualty) — 2022-06-21T23:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19290#p19290 | page 4 | era: pre-1.18.1 -->

> **Daaki wrote: Mon Jun 20, 2022 10:49 pm**
> > **Redmagejoe wrote: Sat Jun 18, 2022 12:55 am**
> > patch-W.MPQ has been updated
> >
> >  There was an issue with some misnamed tags for texture files for creatures, resulting in the client defaulting to stretching old textures over new models. If you spot any other creatures that look like they have weird textures stretched over their model, please report the specific monster name or ID. Ideally, link the database page.
> >
> >  For example, some of the affected creatures were:
> >  <https://database.turtlecraft.gg/?npc=8208>
> >  <https://database.turtlecraft.gg/?npc=5427>
> >  <https://database.turtlecraft.gg/?npc=5425>
>
>   I noticed this bad texture from the sheep in the cow level. The cats in the high elf city also have very odd textures similar to the sheep, where textures from certain body parts are in the wrong positions.
>
>  ![Image](https://i.imgur.com/e5Bs6Rc.jpg)

The Cow level doesnt exist!

## Post 19291 by Fournier — 2022-06-21T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19291#p19291 | page 4 | era: pre-1.18.1 -->

First of all, love the updated graphics. Strong work.

My orc’s face however got all screwed up. It looks all washed out. I’ve seen other orcs in game and their faces appear normal.

Any ideas on a fix?

## Post 19300 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-22T00:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19300#p19300 | page 5 | era: pre-1.18.1 -->

> **Fournier wrote: Tue Jun 21, 2022 11:38 pm**
> First of all, love the updated graphics. Strong work.
>
>  My orc’s face however got all screwed up. It looks all washed out. I’ve seen other orcs in game and their faces appear normal.
>
>  Any ideas on a fix?

This is due to custom skins/faces that Turtle WoW uses that are higher than the normal cap for number of skins/faces in vanilla WoW. This patch was not made for Turtle, I simply ported it to work with Turtle. This will be an issue until I can find an artist willing to create HD assets of these Turtle appearances for me.

 **NOTICE AND REQUEST**
There are some items on this patch which cause characters to not render in equipment screen or dressing room (and XPerl 3D portraits) but display fine in the game world. I am sure I know the cause of and how to fix these, but I will need players using the patch to post here which items are causing this so I can fix them.

Currently known bugged items: [Halo of Transcendence](https://database.turtlecraft.gg/?item=16921) and [Azuresong Mageblade](https://database.turtlecraft.gg/?item=17103).

## Post 19301 by Daaki — 2022-06-22T00:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19301#p19301 | page 5 | era: pre-1.18.1 -->

I can also identify these as being bugged as well:

[Judgement Crown](https://database.turtlecraft.gg/?item=16955)
[Deathbringer](https://database.turtlecraft.gg/?item=17068)
[Bonescythe Helmet](https://database.turtlecraft.gg/?item=22478)
[Shadowcraft Cap](https://database.turtlecraft.gg/?item=16707)
[Darkmantle Cap](https://database.turtlecraft.gg/?item=22005)
[Ghostshroud](https://database.turtlecraft.gg/?item=11925)
[Flying Tiger Goggles](https://database.turtlecraft.gg/?item=4368)
[Shadow Goggles](https://database.turtlecraft.gg/?item=4373)
[Green Tinted Goggles](https://database.turtlecraft.gg/?item=4385)
[Bright-Eye Goggles](https://database.turtlecraft.gg/?item=10499)
[Fire Goggles](https://database.turtlecraft.gg/?item=10500)
[Catseye Ultra Goggles](https://database.turtlecraft.gg/?item=10501)
[Spellpower Goggles Xtreme Plus](https://database.turtlecraft.gg/?item=15999)
[Rose Colored Goggles](https://database.turtlecraft.gg/?item=10503)
[Spellpower Goggles Xtreme](https://database.turtlecraft.gg/?item=10502)
[Master Engineer's Goggles](https://database.turtlecraft.gg/?item=16008)
[Bloodvine Goggles](https://database.turtlecraft.gg/?item=19999)
[Mixologist Goggles](https://database.turtlecraft.gg/?item=60612)
[The Creator's Goggles](https://database.turtlecraft.gg/?item=60540)
[Goggles of Gem Hunting](https://database.turtlecraft.gg/?item=4491)
[Linken's Sword of Mastery](https://database.turtlecraft.gg/?item=11902)

*Last edited by Daaki on Fri Jun 24, 2022 1:50 pm, edited 2 times in total.*

## Post 19308 by Galendor (Patch Note Conspiracy Theorist) — 2022-06-22T05:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19308#p19308 | page 5 | era: pre-1.18.1 -->

I believe Thrall's model from SL fits much better for a warchief but guess it's not so easy to put it in Vanilla.

## Post 19310 by Bran34 — 2022-06-22T06:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19310#p19310 | page 5 | era: pre-1.18.1 -->

I have no idea how to pack and unpack the texture files, but I noticed you say that high elf eyes turn green.  If it's a simple texture issue, if you pass me those files I can edit them to have the correct eye color and send them back.

## Post 19312 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-22T06:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19312#p19312 | page 5 | era: pre-1.18.1 -->

> **Bran34 wrote: Wed Jun 22, 2022 6:28 am**
> I have no idea how to pack and unpack the texture files, but I noticed you say that high elf eyes turn green.  If it's a simple texture issue, if you pass me those files I can edit them to have the correct eye color and send them back.

That would be incredibly helpful. There's a lot of files, but if you're willing, please have a look at these and take a crack at it. Please do not rename any of the files or change the directories if at all possible.

[https://www.mediafire.com/file/5moateks ... PQ.7z/file](https://www.mediafire.com/file/5moateksce44vv6/MPQ.7z/file)

In the process of uploading this, I found that the eyeglow was not properly ported over. Next version of this patch will give High Elves their (green atm) eyeglow back. There is a donation skin that gives the green eyes back, I just have to figure out which of the skins it's replacing so that I can copy the HD version of this patch over that file. I didn't provide that file for your editing. Any files that already have blue eyes, please ignore. Those are low res files that I have yet to replace with the HD assets.

## Post 19316 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-22T07:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19316#p19316 | page 5 | era: pre-1.18.1 -->

> **Bran34 wrote: Wed Jun 22, 2022 6:28 am**
> I have no idea how to pack and unpack the texture files, but I noticed you say that high elf eyes turn green.  If it's a simple texture issue, if you pass me those files I can edit them to have the correct eye color and send them back.

Also, I have here the files my previous artist, Crestian, sent me. Unfortunately they're unusable because in converting the original BLP texture files to PNG, he used a tool really not made for WoW files and so they ended up corrupted. The PNGs are completely viewable, so you can use them as reference, but DO NOT use these PNGs as the finished product. ONLY reference them. I CANNOT convert them back to usable BLP files. This also contains the broken Night Elf black hair. If you'd be willing to take a crack at recreating them, I can grab some working HD Night Elf hair and convert them for you to turn into working black versions.

[https://www.mediafire.com/file/lggjwctm ... st.7z/file](https://www.mediafire.com/file/lggjwctmney713v/crest.7z/file)

## Post 19317 by Bran34 — 2022-06-22T08:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19317#p19317 | page 5 | era: pre-1.18.1 -->

I've started working on them and have a couple finished, just to ensure that this is compatible though please try repacking this file and seeing if it'll work.  If it does, I'll finish up the rest.

[https://www.mediafire.com/file/htqhm7mu ... 0.png/file](https://www.mediafire.com/file/htqhm7mu4e7yyz6/BLOODELFFEMALEFACELOWER00_00.png/file)

## Post 19318 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-22T08:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19318#p19318 | page 5 | era: pre-1.18.1 -->

It works perfectly!

![Image](https://i.imgur.com/hzpSWcC.jpeg)

## Post 19323 by Faustorgo (Barrens Chat Casualty) — 2022-06-22T15:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19323#p19323 | page 5 | era: pre-1.18.1 -->

Nice!

## Post 19332 by Ramue — 2022-06-23T02:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19332#p19332 | page 5 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed Jun 22, 2022 8:31 am**
> It works perfectly!
>
>  ![Image](https://i.imgur.com/hzpSWcC.jpeg)

My hope is this can be given to turtle so they can replace those old TBC beta models for their high elves when ever they next send out an update to their client.

The men are mostly fine but women are much further from finished with those beta models.

Either way When ever this goes live to your mod I am 100% using it! <3

## Post 19337 by Heroclastus (Barrens Chat Casualty) — 2022-06-23T06:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19337#p19337 | page 5 | era: pre-1.18.1 -->

Thx from me too for all the effort. I wish I could help with the 3d assets but I don't have the knowledge ![🥺](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f97a.svg)

Any chance that one can correct items that aren't held in th correct hand, e.g. gnome female holds food/drink,mining pick/blacksmith Hammer in the wrong hand ?

## Post 19343 by Albusturt — 2022-06-23T17:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19343#p19343 | page 5 | era: pre-1.18.1 -->

Would there be compatibility problems if this was used in other servers without High Elf or Goblin custom races?

## Post 19344 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-23T17:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19344#p19344 | page 5 | era: pre-1.18.1 -->

> **Albusturt wrote: Thu Jun 23, 2022 5:10 pm**
> Would there be compatibility problems if this was used in other servers without High Elf or Goblin custom races?

This one specifically? Yes. This patch is built upon an existing patch that is made for completely unmodified vanilla servers. I used to have those on my Drive as well, but have since removed them. They can be found online, however.

## Post 19350 by Silcrow — 2022-06-23T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19350#p19350 | page 5 | era: pre-1.18.1 -->

Alright, I edited "crest's" work. See if any of these work.

[https://mega.nz/file/xZpwgK6a#R6JWn5vj_ ... Kn5rj3rvRo](https://mega.nz/file/xZpwgK6a#R6JWn5vj_B46ZzEqKyHYRTKJW3Md5P3bwKn5rj3rvRo)

## Post 19355 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-24T02:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19355#p19355 | page 5 | era: pre-1.18.1 -->

> **Silcrow wrote: Thu Jun 23, 2022 11:01 pm**
> Alright, I edited "crest's" work. See if any of these work.
>
>  [https://mega.nz/file/xZpwgK6a#R6JWn5vj_ ... Kn5rj3rvRo](https://mega.nz/file/xZpwgK6a#R6JWn5vj_B46ZzEqKyHYRTKJW3Md5P3bwKn5rj3rvRo)

Still having a bit of glitching on some. Could I get the original PNGs you made?

## Post 19364 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-24T17:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19364#p19364 | page 5 | era: pre-1.18.1 -->

Updated to-do list for investigating vanishing dressing room issues.

[Halo of Transcendence](https://database.turtlecraft.gg/?item=16921)
[Azuresong Mageblade](https://database.turtlecraft.gg/?item=17103)
[Judgement Crown](https://database.turtlecraft.gg/?item=16955)
[Deathbringer](https://database.turtlecraft.gg/?item=17068)
[Bonescythe Helmet](https://database.turtlecraft.gg/?item=22478)
[Shadowcraft Cap](https://database.turtlecraft.gg/?item=16707)
[Darkmantle Cap](https://database.turtlecraft.gg/?item=22005)
[Ghostshroud](https://database.turtlecraft.gg/?item=11925)
[Flying Tiger Goggles](https://database.turtlecraft.gg/?item=4368)
[Shadow Goggles](https://database.turtlecraft.gg/?item=4373)
[Green Tinted Goggles](https://database.turtlecraft.gg/?item=4385)
[Bright-Eye Goggles](https://database.turtlecraft.gg/?item=10499)
[Fire Goggles](https://database.turtlecraft.gg/?item=10500)
[Catseye Ultra Goggles](https://database.turtlecraft.gg/?item=10501)
[Spellpower Goggles Xtreme Plus](https://database.turtlecraft.gg/?item=15999)
[Rose Colored Goggles](https://database.turtlecraft.gg/?item=10503)
[Spellpower Goggles Xtreme](https://database.turtlecraft.gg/?item=10502)
[Master Engineer's Goggles](https://database.turtlecraft.gg/?item=16008)
[Bloodvine Goggles](https://database.turtlecraft.gg/?item=19999)
[Mixologist Goggles](https://database.turtlecraft.gg/?item=60612)
[The Creator's Goggles](https://database.turtlecraft.gg/?item=60540)
[Goggles of Gem Hunting](https://database.turtlecraft.gg/?item=4491)
[Linken's Sword of Mastery](https://database.turtlecraft.gg/?item=11902)

## Post 19389 by Jaccob — 2022-06-25T15:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19389#p19389 | page 5 | era: pre-1.18.1 -->

Do you know if its technically possible to upscale textures?
E.g taking cow texture that is 512×512, upscaling to 1024×1024 and reimporting the texture to wow.

## Post 19412 by Samsam — 2022-06-27T19:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19412#p19412 | page 5 | era: pre-1.18.1 -->

TWoW custom textures, such as this warpainted orc face:
![Image](https://i.ibb.co/SwdZQQS/OrcOld.jpg)

Are fucked up with the HD-patch:
![Image](https://i.ibb.co/jMvnTFY/Orc-Fucked-Up.jpg)

So I tried to do that custom war paint for the HD textures with photoshop and it came out pretty nice (ignore his black body):
![Image](https://i.ibb.co/FJs23FZ/NewOrc.jpg)

So it's possible to make the custom skins for the HD pathc, however it will take a LOT of time, but maybe I will try it out.

## Post 19414 by Ydithe — 2022-06-27T23:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19414#p19414 | page 5 | era: pre-1.18.1 -->

in regards to the custom skins, how hard would it be to use the Death Knight unique skin tones that were introduced in Wrath but have been updated along with everything else and specifically tying that to the Human Death Knight donation skin? or for that mater to use the other races skin for undead version of those races?

## Post 19416 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-28T01:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19416#p19416 | page 5 | era: pre-1.18.1 -->

> **Samsam wrote: Mon Jun 27, 2022 7:03 pm**
> TWoW custom textures, such as this warpainted orc face:
>  ![Image](https://i.ibb.co/SwdZQQS/OrcOld.jpg)
>
>  Are fucked up with the HD-patch:
>  ![Image](https://i.ibb.co/jMvnTFY/Orc-Fucked-Up.jpg)
>
>  So I tried to do that custom war paint for the HD textures with photoshop and it came out pretty nice (ignore his black body):
>  ![Image](https://i.ibb.co/FJs23FZ/NewOrc.jpg)
>
>  So it's possible to make the custom skins for the HD pathc, however it will take a LOT of time, but maybe I will try it out.

Any artistic contributions are appreciated. If you'd like to take a serious crack at this, I can provide you with the specific files from Turtle for which we don't have HD assets, as well as the files that we do have for reference / as a foundation.

Here's the converted PNGs of all the Orc textures in the HD pack, and the Turtle custom Orc textures:
[https://www.mediafire.com/file/a49uhzlf ... Gs.7z/file](https://www.mediafire.com/file/a49uhzlfuiov5uk/PNGs.7z/file)

*Last edited by Redmagejoe on Tue Jun 28, 2022 1:46 am, edited 1 time in total.*

## Post 19417 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-28T01:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19417#p19417 | page 5 | era: pre-1.18.1 -->

> **Silcrow wrote: Thu Jun 23, 2022 11:01 pm**
> Alright, I edited "crest's" work. See if any of these work.
>
>  [https://mega.nz/file/xZpwgK6a#R6JWn5vj_ ... Kn5rj3rvRo](https://mega.nz/file/xZpwgK6a#R6JWn5vj_B46ZzEqKyHYRTKJW3Md5P3bwKn5rj3rvRo)

Would like to see the original PNGs that you made, rather than the converted BLPs, due to some glitching similar to Crestian's after using a particular tool. Could you please just send me the PNG versions?

## Post 19420 by Faustorgo (Barrens Chat Casualty) — 2022-06-28T04:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19420#p19420 | page 5 | era: pre-1.18.1 -->

> **Samsam wrote: Mon Jun 27, 2022 7:03 pm**
> TWoW custom textures, such as this warpainted orc face:
>  ![Image](https://i.ibb.co/SwdZQQS/OrcOld.jpg)
>
>  Are fucked up with the HD-patch:
>  ![Image](https://i.ibb.co/jMvnTFY/Orc-Fucked-Up.jpg)
>
>  So I tried to do that custom war paint for the HD textures with photoshop and it came out pretty nice (ignore his black body):
>  ![Image](https://i.ibb.co/FJs23FZ/NewOrc.jpg)
>
>  So it's possible to make the custom skins for the HD pathc, however it will take a LOT of time, but maybe I will try it out.

Nice work bro :D

## Post 19427 by Succubophile — 2022-06-28T14:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19427#p19427 | page 5 | era: pre-1.18.1 -->

I really like it, but I have a lot of crashes in random places (12 in 5 days) :c

## Post 19434 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-28T19:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19434#p19434 | page 5 | era: pre-1.18.1 -->

If you're getting memory crashes, it's worth considering getting the 4gb patch for 32-bit executables. This patch demands more memory than just playing the base game.

## Post 19441 by Soleman — 2022-06-29T10:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19441#p19441 | page 5 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Jun 28, 2022 7:32 pm**
> If you're getting memory crashes, it's worth considering getting the 4gb patch for 32-bit executables. This patch demands more memory than just playing the base game.

Any chance you could link to that patch? I'm getting these random crashes now and again.

## Post 19443 by Succubophile — 2022-06-29T10:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19443#p19443 | page 5 | era: pre-1.18.1 -->

I used the Large Address Aware. It worked better, but crashes sometimes still happen.

[embed: //drive.google.com/file/d/1AkQmVj0BOF4hX-CbX1Jv5eNUKpJMSLQ9/preview]

## Post 19452 by Samsam — 2022-06-29T16:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19452#p19452 | page 5 | era: pre-1.18.1 -->

Here are the male warpaint-faces:
[https://mega.nz/file/oCUViJrB#Eo6IlfBPJ ... wQSGnCu66I](https://mega.nz/file/oCUViJrB#Eo6IlfBPJuyQMhT8yoDoMV0kSOtH4XzenwQSGnCu66I)

I named them correctly, they should work as is when inserted in the MPQ. Let me know what do you think, is it visually good enough?

Edit: Can I have your discord so it's easier to communicate?

## Post 19454 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-29T18:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19454#p19454 | page 5 | era: pre-1.18.1 -->

> **Samsam wrote: Wed Jun 29, 2022 4:27 pm**
> Here are the male warpaint-faces:
>  [https://mega.nz/file/oCUViJrB#Eo6IlfBPJ ... wQSGnCu66I](https://mega.nz/file/oCUViJrB#Eo6IlfBPJuyQMhT8yoDoMV0kSOtH4XzenwQSGnCu66I)
>
>  I named them correctly, they should work as is when inserted in the MPQ. Let me know what do you think, is it visually good enough?
>
>  Edit: Can I have your discord so it's easier to communicate?

I don't have a Discord. Best way to reach me is on here.

These look and work great! There's some minor parity that's more OCD than anything for OrcMaleFaceLower09_00.blp (the war paint bands are thinner than the others), but I can totally deploy this unless you wanted to try your hand at other needed assets.

## Post 19464 by Silcrow — 2022-06-30T05:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19464#p19464 | page 5 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Jun 28, 2022 1:26 am**
> > **Silcrow wrote: Thu Jun 23, 2022 11:01 pm**
> > Alright, I edited "crest's" work. See if any of these work.
> >
> >  [https://mega.nz/file/xZpwgK6a#R6JWn5vj_ ... Kn5rj3rvRo](https://mega.nz/file/xZpwgK6a#R6JWn5vj_B46ZzEqKyHYRTKJW3Md5P3bwKn5rj3rvRo)
>
>   Would like to see the original PNGs that you made, rather than the converted BLPs, due to some glitching similar to Crestian's after using a particular tool. Could you please just send me the PNG versions?

The PNG's I used were the same ones from the file you posted that contained Crestian's edits. If you still have those, then you have the same ones as me. I already have a hunch as to what textures didn't work. If you can provide the HD PNG's, unaltered, then I can see about editing them then converting them to BLP. If not, then I'll try to edit Crestian's work to function properly. Or if you are missing his files then I can re-post them.

## Post 19465 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-30T06:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19465#p19465 | page 5 | era: pre-1.18.1 -->

> **Silcrow wrote: Thu Jun 30, 2022 5:42 am**
> The PNG's I used were the same ones from the file you posted that contained Crestian's edits. If you still have those, then you have the same ones as me. I already have a hunch as to what textures didn't work. If you can provide the HD PNG's, unaltered, then I can see about editing them then converting them to BLP. If not, then I'll try to edit Crestian's work to function properly. Or if you are missing his files then I can re-post them.

I was afraid of that. As I stated, those PNGs were merely references for what the finished product should look like, but the PNGs themselves should not be used, copied, etc. The files are completely corrupt and can never be a usable BLP.

As I did for the Orc face fix Samsam did, I'll convert working BLPs into PNGs that can then be edited to LOOK like the PNGs in that "crest.7z". Please leave your finished work in PNG format, and leave the BLP conversion to me.

[https://www.mediafire.com/file/zfzd8x7k ... ng.7z/file](https://www.mediafire.com/file/zfzd8x7kymizudp/working.7z/file)

These are the currently working HD Night Elf hair textures, converted to PNG. If you could recreate them with the same colors used in the PNGs provided in "crest.7z" with the same names (_08 and _10) it would be greatly appreciated. I will convert them to BLPs and put them in a test patch, and if it works, merge it into the current live patch.

## Post 19472 by Samsam — 2022-06-30T11:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19472#p19472 | page 5 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed Jun 29, 2022 6:57 pm**
> I don't have a Discord. Best way to reach me is on here.
>
>  These look and work great! There's some minor parity that's more OCD than anything for OrcMaleFaceLower09_00.blp (the war paint bands are thinner than the others), but I can totally deploy this unless you wanted to try your hand at other needed assets.

I want to atleast try to convert all of the custom skins for all races. For the orc Mag'har skin and the grey skin which's name I already forgot kind of exists already in HD. Or well, the colors exists, the tattoos and "decorations" don't but using those skin files for those custom skins is good enough imo.

I will post files here every time I manage to convert something into HD, but as I said it will be probably a long process.

## Post 19621 by Silcrow — 2022-07-03T01:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19621#p19621 | page 5 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Jun 30, 2022 6:28 am**
> > **Silcrow wrote: Thu Jun 30, 2022 5:42 am**
> > The PNG's I used were the same ones from the file you posted that contained Crestian's edits. If you still have those, then you have the same ones as me. I already have a hunch as to what textures didn't work. If you can provide the HD PNG's, unaltered, then I can see about editing them then converting them to BLP. If not, then I'll try to edit Crestian's work to function properly. Or if you are missing his files then I can re-post them.
>
>   I was afraid of that. As I stated, those PNGs were merely references for what the finished product should look like, but the PNGs themselves should not be used, copied, etc. The files are completely corrupt and can never be a usable BLP.
>
>  As I did for the Orc face fix Samsam did, I'll convert working BLPs into PNGs that can then be edited to LOOK like the PNGs in that "crest.7z". Please leave your finished work in PNG format, and leave the BLP conversion to me.
>
>  [https://www.mediafire.com/file/zfzd8x7k ... ng.7z/file](https://www.mediafire.com/file/zfzd8x7kymizudp/working.7z/file)
>
>  These are the currently working HD Night Elf hair textures, converted to PNG. If you could recreate them with the same colors used in the PNGs provided in "crest.7z" with the same names (_08 and _10) it would be greatly appreciated. I will convert them to BLPs and put them in a test patch, and if it works, merge it into the current live patch.

Here is my edits. There wasn't much of a difference between the old _08 and _10 files. I tried to give them a slight difference with one being near black and one very dark grey.

[https://mega.nz/file/UcozAYzR#S996E1QNL ... qsZGUbzvAg](https://mega.nz/file/UcozAYzR#S996E1QNLT9me1Vvhcm5_njLVN5UCsAfrqsZGUbzvAg)

## Post 19625 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-03T03:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19625#p19625 | page 5 | era: pre-1.18.1 -->

Hmm, I wish I could figure out why the faces turn completely black in the last few versions... I'm not familiar enough with the graphics attributes to know why the client isn't displaying faces properly with the new hairs. I'll try to speak to someone else who works with client edits.

## Post 19643 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-03T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19643#p19643 | page 5 | era: pre-1.18.1 -->

The hair itself works properly. I'm trying to narrow down if the problem lies in the scalp textures or the facial textures.

## Post 19720 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-05T21:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19720#p19720 | page 5 | era: pre-1.18.1 -->

I noticed an issue with Swift Horde Worg mounts using old textures, and a few texture issues with Skeletal Steeds. Will try to resolve these and push out a new version soon.

## Post 19737 by Albusturt — 2022-07-06T14:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19737#p19737 | page 6 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Jul 05, 2022 9:39 pm**
> I noticed an issue with Swift Horde Worg mounts using old textures, and a few texture issues with Skeletal Steeds. Will try to resolve these and push out a new version soon.

Have you noticed the grey hair night elf glitch?

Thank you for your work.

## Post 19757 by Teurikh — 2022-07-07T01:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19757#p19757 | page 6 | era: pre-1.18.1 -->

Hello, just now I noticed that the patch-w does not change the textures and models of the high elves. Is that how it should be? There is nothing in the description about it.

## Post 19758 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-07T02:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19758#p19758 | page 6 | era: pre-1.18.1 -->

> **Teurikh wrote: Thu Jul 07, 2022 1:13 am**
> Hello, just now I noticed that the patch-w does not change the textures and models of the high elves. Is that how it should be? There is nothing in the description about it.

High Elf PCs (not NPCs) should have the new models and textures, easily seen by whether they have green eyes or blue eyes.

## Post 19760 by Faustorgo (Barrens Chat Casualty) — 2022-07-07T03:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19760#p19760 | page 6 | era: pre-1.18.1 -->

Hello, the Final Humanoid Boss of BFD (the Orc) seems to by with bad and ugly face, please check it out.

## Post 19763 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-07T06:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19763#p19763 | page 6 | era: pre-1.18.1 -->

> **Faustorgo wrote: Thu Jul 07, 2022 3:29 am**
> Hello, the Final Humanoid Boss of BFD (the Orc) seems to by with bad and ugly face, please check it out.

Somehow, Kelris's CreatureDisplayExtra texture got assigned to some Stormpike Dwarf. I'll see if I can't find his proper texture and upload a new patch with that fix and the warpaint Orc player character faces fix. It seems that the texture for 4088 was also mis-assigned to another NPC, so it's a good thing I cracked this open. Thank you for catching this!

## Post 19764 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-07T06:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19764#p19764 | page 6 | era: pre-1.18.1 -->

**UPDATED PATCH-W.MPQ**

Fixed Male Orc PC faces with black warpaint
Fixed Twilight Lord Kelris
Cleaned up a few more NPCs.

As a note to whoever requested the Black Skeletal Steed from donation shop be differentiated from Baron Rivendare's Deathcharger (using the Death Knight mount from Wrath of the Lich King), both items invoke the same spell effect (summoning the same Creature entity which thus uses the same Display ID), so it would be more difficult to mod this clientside. This would require Turtle WoW Staff to make the spells given by the items invoke 2 different Creatures. Apologies for the inconvenience.

## Post 19773 by Teurikh — 2022-07-07T12:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19773#p19773 | page 6 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Jul 07, 2022 2:05 am**
> > **Teurikh wrote: Thu Jul 07, 2022 1:13 am**
> > Hello, just now I noticed that the patch-w does not change the textures and models of the high elves. Is that how it should be? There is nothing in the description about it.
>
>   High Elf PCs (not NPCs) should have the new models and textures, easily seen by whether they have green eyes or blue eyes.

Then I'm in trouble. Elves with a patch look completely different from those in the same dressing room in a wowhead (it's worth looking at least at the hands). While the rest of the races are fine.
![Image](https://i.ibb.co/cF4HbvZ/1.png)
![Image](https://i.ibb.co/wWChzbG/2.png)
![Image](https://i.ibb.co/z6GD2pC/3.png)
![Image](https://i.ibb.co/zPMJsTC/4.png)

## Post 19783 by Galendor (Patch Note Conspiracy Theorist) — 2022-07-07T16:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19783#p19783 | page 6 | era: pre-1.18.1 -->

> **Teurikh wrote: Thu Jul 07, 2022 12:26 pm**
> > **Redmagejoe wrote: Thu Jul 07, 2022 2:05 am**
> > > **Teurikh wrote: Thu Jul 07, 2022 1:13 am**
> > > Hello, just now I noticed that the patch-w does not change the textures and models of the high elves. Is that how it should be? There is nothing in the description about it.
> >
> >   High Elf PCs (not NPCs) should have the new models and textures, easily seen by whether they have green eyes or blue eyes.
>
>  Then I'm in trouble. Elves with a patch look completely different from those in the same dressing room in a wowhead (it's worth looking at least at the hands). While the rest of the races are fine.

Well, it's because this mod only replaces beta blood elf models with actual TBC blood elf models. So it's not HD, (un)fortunately.

## Post 19804 by Hirovision — 2022-07-08T04:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19804#p19804 | page 6 | era: pre-1.18.1 -->

Sorry to bother, but I downloaded both of the files in the OP at the bottom and put them into data folder. I deleted the WDB folder as well and started my game. Looks great, but whenever I go into SW my game crashes and I get an error pop up on my pc EVERY TIME. It is not every once in a while. I can not go into SW. ANyone know what I should do?

## Post 19812 by Dakkashagga — 2022-07-08T08:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19812#p19812 | page 6 | era: pre-1.18.1 -->

is there a version with just the music patch? my client keeps getting fatal errors with the legion model pack

## Post 19815 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-08T09:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19815#p19815 | page 6 | era: pre-1.18.1 -->

Please ensure you are not renaming the patches to avoid throwing errors due to bad load order.

## Post 19816 by Slody — 2022-07-08T09:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19816#p19816 | page 6 | era: pre-1.18.1 -->

> **Facemaker wrote: Thu Mar 24, 2022 11:24 am**
> Hey all, if anyone interested i have the water patch, that works with Twow client. It's not the full procedural thing, but it looks nicer than standart vanilla water repeating texture.
>
>  [https://www.mediafire.com/file/urhqn75z ... 4.MPQ/file](https://www.mediafire.com/file/urhqn75z6ywrtyi/patch-4.MPQ/file)

The link is dead. And I have hard time to find this patch. Anyone may reupload please?
> **Redmagejoe wrote: Thu Mar 31, 2022 3:44 pm**
> And as shown in my screenshot, when paired with the other patches, it just causes the water to be flat and white.

This is exactly what I looking for. Like in that screenshot:  ![Image](https://i.imgur.com/oaUU4Qj.jpeg)

*Last edited by Slody on Fri Dec 16, 2022 7:01 pm, edited 1 time in total.*

## Post 19823 by Lev — 2022-07-08T16:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19823#p19823 | page 6 | era: pre-1.18.1 -->

Redmagejoe - you are just God

## Post 19831 by Faustorgo (Barrens Chat Casualty) — 2022-07-09T05:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19831#p19831 | page 6 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Jul 07, 2022 6:00 am**
> > **Faustorgo wrote: Thu Jul 07, 2022 3:29 am**
> > Hello, the Final Humanoid Boss of BFD (the Orc) seems to by with bad and ugly face, please check it out.
>
>   Somehow, Kelris's CreatureDisplayExtra texture got assigned to some Stormpike Dwarf. I'll see if I can't find his proper texture and upload a new patch with that fix and the warpaint Orc player character faces fix. It seems that the texture for 4088 was also mis-assigned to another NPC, so it's a good thing I cracked this open. Thank you for catching this!

Thanks for the Update bro :D

## Post 19907 by Daaki — 2022-07-12T02:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19907#p19907 | page 6 | era: pre-1.18.1 -->

Found another mob with some odd textures:

![Image](https://i.imgur.com/b4y40zy.jpg)

## Post 19909 by Gurky (Barrens Chat Casualty) — 2022-07-12T02:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19909#p19909 | page 6 | era: pre-1.18.1 -->

> **Daaki wrote: Tue Jul 12, 2022 2:56 am**
> Found another mob with some odd textures:
>
>  ![Image](https://i.imgur.com/b4y40zy.jpg)

What nightmares are made of.

## Post 19927 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-12T08:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19927#p19927 | page 6 | era: pre-1.18.1 -->

> **Daaki wrote: Tue Jul 12, 2022 2:56 am**
> Found another mob with some odd textures

Mirador fixed, and also made some improvements to a few other models.

 **UPDATED PATCH-W.MPQ IN FIRST POST**

*Last edited by Redmagejoe on Thu Oct 27, 2022 4:10 am, edited 1 time in total.*

## Post 19964 by Dakkashagga — 2022-07-13T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19964#p19964 | page 6 | era: pre-1.18.1 -->

any plans to update wildhammer dwarf skins?

## Post 19965 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-13T15:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19965#p19965 | page 6 | era: pre-1.18.1 -->

That depends entirely upon the contributions of artists, which I am not. I am just the editor.

I'm still waiting to hear back from my blue High Elf eyes contributor at the moment.

## Post 20000 by Faustorgo (Barrens Chat Casualty) — 2022-07-14T15:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20000#p20000 | page 6 | era: pre-1.18.1 -->

Thanks again for the udate Redmagejoe

## Post 20007 by Lorencor — 2022-07-15T05:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20007#p20007 | page 6 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Jul 12, 2022 8:03 am**
> > **Daaki wrote: Tue Jul 12, 2022 2:56 am**
> > Found another mob with some odd textures
>
>   Mirador fixed, and also made some improvements to a few other models. Also fixed the new Gnomeregan music only playing 2 parts of the 5-part suite.
>
>  **UPDATED PATCH-W.MPQ IN FIRST POST**

Good job dude! Thanks

## Post 20009 by Hubertus — 2022-07-15T06:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20009#p20009 | page 6 | era: pre-1.18.1 -->

> **Geojak wrote: Wed Mar 23, 2022 9:46 pm**
> hi, how does the environment retexture compare to the other one posted on this forum?
>
>  [viewtopic.php?f=29&t=2496&sid=058da3d8c ... 111f1f4265](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2496)

The old one seems to use TBC models so would be closer to what vanilla looked like. With this one using models from Legion it looks quite modern.

@Redmagejoe: I personally feel like these packs are great since slightly better graphics are one of the things that Vanilla+ should include for me: Thank you for the hard work!

## Post 20065 by Therock1990 — 2022-07-17T02:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20065#p20065 | page 6 | era: pre-1.18.1 -->

> **Slody wrote: Fri Jul 08, 2022 9:47 am**
> > **Facemaker wrote: Thu Mar 24, 2022 11:24 am**
> > Hey all, if anyone interested i have the water patch, that works with Twow client. It's not the full procedural thing, but it looks nicer than standart vanilla water repeating texture.
> >
> >  [https://www.mediafire.com/file/urhqn75z ... 4.MPQ/file](https://www.mediafire.com/file/urhqn75z6ywrtyi/patch-4.MPQ/file)
>
>   The link is dead. And I have hard time to find this patch. Anyone may reupload please?
> > **Redmagejoe wrote: Thu Mar 31, 2022 3:44 pm**
> > And as shown in my screenshot, when paired with the other patches, it just causes the water to be flat and white.
>
>  This is exactly what I looking for. Like in that screenshot:  ![Image](https://i.imgur.com/oaUU4Qj.jpeg)

Please reupload this patch i googled but didn’ found it and for me is beautiful for the water effect

## Post 20067 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-17T07:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20067#p20067 | page 6 | era: pre-1.18.1 -->

There will be a 1.16.1 compatibility pre-patch of Turtle HD dropping sometime in the next few days, so please look forward to that.

## Post 20076 by Facemaker — 2022-07-17T14:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20076#p20076 | page 6 | era: pre-1.18.1 -->

> **Therock1990 wrote: Sun Jul 17, 2022 2:19 am**
> > **Slody wrote: Fri Jul 08, 2022 9:47 am**
> > > **Facemaker wrote: Thu Mar 24, 2022 11:24 am**
> > > Hey all, if anyone interested i have the water patch, that works with Twow client. It's not the full procedural thing, but it looks nicer than standart vanilla water repeating texture.
> > >
> > >  [https://www.mediafire.com/file/urhqn75z ... 4.MPQ/file](https://www.mediafire.com/file/urhqn75z6ywrtyi/patch-4.MPQ/file)
> >
> >   The link is dead. And I have hard time to find this patch. Anyone may reupload please?
> > > **Redmagejoe wrote: Thu Mar 31, 2022 3:44 pm**
> > > And as shown in my screenshot, when paired with the other patches, it just causes the water to be flat and white.
> >
> >  This is exactly what I looking for. Like in that screenshot:  ![Image](https://i.imgur.com/oaUU4Qj.jpeg)
>
>   Please reupload this patch i googled but didn’ found it and for me is beautiful for the water effect

Sure, i reuploaded it

## Post 20078 by Slody — 2022-07-17T14:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20078#p20078 | page 6 | era: pre-1.18.1 -->

> **Facemaker wrote: Sun Jul 17, 2022 2:19 pm**
>

Unfortunately it doesn't work. I have old texture. I don't use HD textures if that matter.  ![Image](https://i.imgur.com/XcdM7MP.png)

## Post 20079 by Facemaker — 2022-07-17T14:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20079#p20079 | page 6 | era: pre-1.18.1 -->

> **Slody wrote: Sun Jul 17, 2022 2:38 pm**
> > **Facemaker wrote: Sun Jul 17, 2022 2:19 pm**
> >
>
>  Unfortunately it doesn't work. I have old texture. I don't use HD textures if that matter.  ![Image](https://i.imgur.com/XcdM7MP.png)

Hmmthat is odd, you do not need any HD textures for it to work, it just needs to be placed in the DATA folderm try rename it to patch-3.MPQ

## Post 20080 by Slody — 2022-07-17T14:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20080#p20080 | page 6 | era: pre-1.18.1 -->

> **Facemaker wrote: Sun Jul 17, 2022 2:44 pm**
>

Still doesn't work. I doesn't have any custom patches either. Oh well. I will continue playing with default one.
Ok. I found the issue. You have to enable "Terrain Highlights" in video options. Now it works. Thank you!

## Post 20088 by Therock1990 — 2022-07-18T02:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20088#p20088 | page 6 | era: pre-1.18.1 -->

> **Facemaker wrote: Sun Jul 17, 2022 2:44 pm**
> > **Slody wrote: Sun Jul 17, 2022 2:38 pm**
> > > **Facemaker wrote: Sun Jul 17, 2022 2:19 pm**
> > >
> >
> >  Unfortunately it doesn't work. I have old texture. I don't use HD textures if that matter.  ![Image](https://i.imgur.com/XcdM7MP.png)
>
>   Hmmthat is odd, you do not need any HD textures for it to work, it just needs to be placed in the DATA folderm try rename it to patch-3.MPQ

Not work on hd patch u help us plz?

## Post 20090 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-18T04:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20090#p20090 | page 6 | era: pre-1.18.1 -->

Please make another thread for this instead of hijacking this one.

## Post 20108 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-19T06:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20108#p20108 | page 6 | era: pre-1.18.1 -->

Soon...

## Post 20109 by Dakkashagga — 2022-07-19T06:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20109#p20109 | page 6 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Jul 17, 2022 7:23 am**
> There will be a 1.16.1 compatibility pre-patch of Turtle HD dropping sometime in the next few days, so please look forward to that.

will it include wildhammer dwarf skins?

## Post 20111 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-19T07:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20111#p20111 | page 6 | era: pre-1.18.1 -->

> **Jarlson wrote: Tue Jul 19, 2022 6:55 am**
> will it include wildhammer dwarf skins?

There exists a possibility that I may gain access to more asset-creation resources after the patch, but I can't make any promises.

## Post 20149 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-20T22:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20149#p20149 | page 6 | era: pre-1.18.1 -->

I'm making several additional soundtrack changes to the upcoming patch as well, like bringing back memorable old tracks alongside the newer ones for variety and to blend nostalgia and atmosphere on a zone-by-zone basis.

## Post 20188 by Wylde — 2022-07-21T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20188#p20188 | page 6 | era: pre-1.18.1 -->

This is awesome, thanks for sharing!

## Post 20194 by Faustorgo (Barrens Chat Casualty) — 2022-07-22T00:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20194#p20194 | page 7 | era: pre-1.18.1 -->

Is there any possibility of changing the game entry image (where you enter your Turtle WoW account and password), perhaps for a new one, either Turtle WoW themed or something else, and it is that the entry image is very generic and subtracts a bit of identity from the work you are doing.

## Post 20199 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-22T02:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20199#p20199 | page 7 | era: pre-1.18.1 -->

> **Faustorgo wrote: Fri Jul 22, 2022 12:06 am**
> Is there any possibility of changing the game entry image (where you enter your Turtle WoW account and password), perhaps for a new one, either Turtle WoW themed or something else, and it is that the entry image is very generic and subtracts a bit of identity from the work you are doing.

I do not create assets, as indicated by my frequent calls for artists. All that I do is purely on the programming side. I have 0 control over or ability to produce any creative assets. I would require someone to create a custom login screen in order to have one.

Having said that, please be patient. As stated before, I may possibly have access to new resources in time, which may make many of the items on the wishlist for this patch a possibility.

## Post 20201 by Faustorgo (Barrens Chat Casualty) — 2022-07-22T04:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20201#p20201 | page 7 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Jul 22, 2022 2:24 am**
> > **Faustorgo wrote: Fri Jul 22, 2022 12:06 am**
> > Is there any possibility of changing the game entry image (where you enter your Turtle WoW account and password), perhaps for a new one, either Turtle WoW themed or something else, and it is that the entry image is very generic and subtracts a bit of identity from the work you are doing.
>
>   I do not create assets, as indicated by my frequent calls for artists. All that I do is purely on the programming side. I have 0 control over or ability to produce any creative assets. I would require someone to create a custom login screen in order to have one.
>
>  Having said that, please be patient. As stated before, I may possibly have access to new resources in time, which may make many of the items on the wishlist for this patch a possibility.

Yeah bro, you're right, take your time, but please,
If it were possible, it would be perfect to change the login screen, either by the normal vanilla one or modifying it so that it says mysteries of azeroth, if you manage to find an artist on the theme, please take into account my request, success.

## Post 20207 by Eaxtens — 2022-07-22T09:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20207#p20207 | page 7 | era: pre-1.18.1 -->

Man, this is just really awesome work! Thank you very much!

## Post 20217 by Rollotomasi — 2022-07-22T18:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20217#p20217 | page 7 | era: pre-1.18.1 -->

This is fantastic! Thank you so much!

## Post 20222 by Voider98 — 2022-07-23T09:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20222#p20222 | page 7 | era: pre-1.18.1 -->

THANK YOU!! and have you seen this? <https://forum.warmane.com/showthread.php?t=433477> there are a lot of models and textures you can put on your "pack" I think and THANK YOU AGAIN!!

## Post 20277 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-25T18:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20277#p20277 | page 7 | era: pre-1.18.1 -->

************ MASSIVE COMPATIBILITY UPDATE ************

Please delete your existing PATCH-W.MPQ and PATCH-X.MPQ!

The latest update to the mod is a full compatibility update for version 1.16.1. It is CRUCIAL that you delete the old versions of this mod to avoid problems with the approaching server update. Please delete your patches as indicated above, then reacquire the newest versions (renamed for your convenience) from the original post.

Thank you for your continued support for this project!

## Post 20292 by Faustorgo (Barrens Chat Casualty) — 2022-07-25T21:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20292#p20292 | page 7 | era: pre-1.18.1 -->

man, this looks like a spoiler alert! awesome job btw :D love your work bro really :D, but can you please make a little changelog of the news of the patch perhaps, :D

## Post 20318 by Pontifice — 2022-07-25T23:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20318#p20318 | page 7 | era: pre-1.18.1 -->

Hello, I'm getting Green Eyed High Elves, how do I fix this?

## Post 20319 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-25T23:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20319#p20319 | page 7 | era: pre-1.18.1 -->

> **Pontifice wrote: Mon Jul 25, 2022 11:13 pm**
> Hello, I'm getting Green Eyed High Elves, how do I fix this?

Known. Had someone working on making HD blue eye textures, then they vanished off the face of the earth before we could get them in the proper format to put in the patch. Please bear with it for now.

## Post 20331 by Texhnolyze — 2022-07-25T23:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20331#p20331 | page 7 | era: pre-1.18.1 -->

Reporting green elf building textures with the new update.

![Image](https://i.imgur.com/ssR01aY.jpg)

## Post 20333 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-26T00:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20333#p20333 | page 7 | era: pre-1.18.1 -->

> **Texhnolyze wrote: Mon Jul 25, 2022 11:59 pm**
> Reporting green elf building textures with the new update.
>
>  ![Image](https://i.imgur.com/ssR01aY.jpg)

Please make sure you follow the instructions at the top of the first post. You appear to be mixing the old patch which is incompatible with the new update.

## Post 20336 by Texhnolyze — 2022-07-26T00:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20336#p20336 | page 7 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Jul 26, 2022 12:10 am**
> > **Texhnolyze wrote: Mon Jul 25, 2022 11:59 pm**
> > Reporting green elf building textures with the new update.
> >
> >  ![Image](https://i.imgur.com/ssR01aY.jpg)
>
>   Please make sure you follow the instructions at the top of the first post. You appear to be mixing the old patch which is incompatible with the new update.

I have deleted them beforehand and that was the result. It seems like there are 3 other patch files too besides your Y and Z, which are patch T, U, and V. What are these, I wonder.

## Post 20337 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-26T00:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20337#p20337 | page 7 | era: pre-1.18.1 -->

Those are official Turtle patches. Don't touch those. This appears to be Darkshore, and I do not have this same issue on my end. Have you deleted your WDB folder since the update? Delete all old HD MPQs, delete your WDB folder, launch the game, make sure everything looks good, then close the game and reinstall the HD MPQs.

## Post 20341 by Texhnolyze — 2022-07-26T00:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20341#p20341 | page 7 | era: pre-1.18.1 -->

I still can't get it to work, I guess I'll live without HD environment for now. What matters is the HD character. Thanks for the help and the mod!

## Post 20433 by Wylde — 2022-07-26T17:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20433#p20433 | page 7 | era: pre-1.18.1 -->

Awesome! Had to rename the 2 tho because of the Darker nights patch which is also named patch-Z.mpq and after the 1.16.1 patch somehow the HD pack PATCH-W.MPQ messed up my disc priest and affli warlock talenttree.For now I kept the updated turtle patch-W, renamed the HD pack to X and Y and so far so good.The 1 gold talent reset was a small price to pay for these great HD packs :) Thanks again Redmagejoe!

## Post 20436 by Gmarguelles — 2022-07-26T17:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20436#p20436 | page 7 | era: pre-1.18.1 -->

Hello guys!

Any news if the Scarlet Inquisitor (Sally Whitemane) Human Skin is working?
Maybe with the new patch more tools are available? I know the skin exists in Draenor
[https://www.wowhead.com/npc=3977/high-i ... -whitemane](https://www.wowhead.com/npc=3977/high-inquisitor-whitemane)

Thank you again!

## Post 20469 by Pontifice — 2022-07-26T21:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20469#p20469 | page 7 | era: pre-1.18.1 -->

My characters' weapons are always sheathed even when they're attacking.

## Post 20470 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-26T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20470#p20470 | page 7 | era: pre-1.18.1 -->

> **Pontifice wrote: Tue Jul 26, 2022 9:53 pm**
> My characters' weapons are always sheathed even when they're attacking.

That may be an issue with animations I may or may not be able to fix. What race and gender?

## Post 20471 by Pontifice — 2022-07-26T22:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20471#p20471 | page 7 | era: pre-1.18.1 -->

Night elf and human, and I don't tested it in males.

Human mage, staff and dagger.
Night Elf, dagger.

## Post 20472 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-26T22:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20472#p20472 | page 7 | era: pre-1.18.1 -->

I'll see what I can do after hotfix week settles down. If there will be clientside changes that will affect my patch. In the meantime, just report any bugs related to the patch here.

## Post 20476 by Pontifice — 2022-07-26T22:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20476#p20476 | page 7 | era: pre-1.18.1 -->

You're my hero.

I always dreamed with a HD Vanilla experience true to the RPG Books, and you're making it happen. You're making the heart of this wage-slave very warm.

I wait the sheath fix eagerly!  smiling_turtle

## Post 20484 by Texhnolyze — 2022-07-27T01:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20484#p20484 | page 7 | era: pre-1.18.1 -->

I've been using this mod since the beginning and I never get that melee weapon sheating bug. As a night elf hunter, I've used various weapons from daggers to swords and polearms, everything is working normally for me. There's a minor issue though, I can't seem the seathe my weapons, but it's minor and easily fixed by using some spells like an aspect.

## Post 20502 by Volkyte (Patch Note Conspiracy Theorist) — 2022-07-27T09:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20502#p20502 | page 7 | era: pre-1.18.1 -->

question:gonna make water effect aswell? i mean revamp water like cataclysm did.

## Post 20508 by Supersix71 — 2022-07-27T11:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20508#p20508 | page 7 | era: pre-1.18.1 -->

Appreciate all of the work you've put into this on your personal time. Everything looks great and it helps me forget the fact that I'm playing an 18 y/o game.

## Post 20514 by Volkyte (Patch Note Conspiracy Theorist) — 2022-07-27T12:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20514#p20514 | page 7 | era: pre-1.18.1 -->

POSSIBLE bug report: Spirit healers to me appears as white splats on screen, no models, just a white light. I downloaded yesterday the client fresh from zero and just applied your latest patches.

## Post 20527 by Raukodor (Bug Report Enthusiast) — 2022-07-27T16:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20527#p20527 | page 7 | era: pre-1.18.1 -->

just applied the last update for the new patch. the textures are ok but the talent calculator is the classic one not the new turtle one

## Post 20528 by Eruedraith — 2022-07-27T16:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20528#p20528 | page 7 | era: pre-1.18.1 -->

For those experiencing issues with the talents not updating to the 1.16.1 trees: make sure you’re not accidentally deleting the new Turtle WoW Patch-W, thinking it’s the old patch from this graphics mod. There should be a patch-W about 360mb in size, which is essential to the 1.16.1 update.

## Post 20536 by Volkyte (Patch Note Conspiracy Theorist) — 2022-07-27T19:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20536#p20536 | page 7 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/jK408wI.jpg)

## Post 20594 by Supersix71 — 2022-07-28T11:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20594#p20594 | page 7 | era: pre-1.18.1 -->

I don't see that white blob thing in UC. Everything looks as it should.

## Post 20599 by Eruedraith — 2022-07-28T13:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20599#p20599 | page 7 | era: pre-1.18.1 -->

> **Supersix71 wrote: Thu Jul 28, 2022 11:00 am**
> I don't see that white blob thing in UC. Everything looks as it should.

It’s the spirit healers in the spirit realm across the world, not an NPC in UC.

## Post 20604 by Volkyte (Patch Note Conspiracy Theorist) — 2022-07-28T16:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20604#p20604 | page 7 | era: pre-1.18.1 -->

this happens on all spirit healers. maybe last patch disturbed their skin?  neutral_turtle_head

## Post 20688 by Sirokos — 2022-07-30T17:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20688#p20688 | page 7 | era: pre-1.18.1 -->

I'm getting a crash (error #132) whenever I switch characters in my character screen.
Only happens after I log to another account and then back to the one I want to play.
Can't go up and down to select characters then without crashing.
Tried removing everything. It's the patch-Y.MPQ causing this.
Is there a solution to this?
[![Image](https://i.ibb.co/PDS1h5j/image.jpg)](https://ibb.co/2Zbctjh)

## Post 20695 by Esketit1234 — 2022-07-30T18:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20695#p20695 | page 7 | era: pre-1.18.1 -->

my troll has messed up ears and jaw textures, is this a graphical bug?

[embed: https://s9e.github.io/iframe/2/imgur.min.html#0IVHU8n]

[embed: https://s9e.github.io/iframe/2/imgur.min.html#4AQgg2J]

## Post 20717 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-30T23:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20717#p20717 | page 7 | era: pre-1.18.1 -->

Known issue with the Forest Trolls skins, due to not having custom HD textures for them. Please be patient.

The patch is not currently being developed until a final client update comes through which addresses some of the bugs, as this will require comparing client files for compatibility. I will let everyone know when a new update is in the works.

## Post 20735 by Pontifice — 2022-07-31T07:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20735#p20735 | page 8 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Jul 30, 2022 11:31 pm**
> a final client update

Is the final client update being developed?   smiling_turtle

## Post 20800 by Whitecatmomma — 2022-08-01T19:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20800#p20800 | page 8 | era: pre-1.18.1 -->

Missing some enviromental textures on character creation sometimes the models won't load other than that everything is going great

## Post 20802 by Undisturbed — 2022-08-01T21:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20802#p20802 | page 8 | era: pre-1.18.1 -->

Does anyone know which T-wow shop mounts are compatible with Turtle HD, I would hate to have to do a trial and error

## Post 20840 by Whitecatmomma — 2022-08-02T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20840#p20840 | page 8 | era: pre-1.18.1 -->

Got the white creame puff in place of a spirit healer

## Post 20866 by Sinlock — 2022-08-02T20:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20866#p20866 | page 8 | era: pre-1.18.1 -->

![Image](https://cdn.discordapp.com/attachments/691438750185553950/1004124698319278280/unknown.png)
Using the HD texture pack and just bought a mount off of the turtle shop and it looks like this! please help if possible

## Post 20867 by Redmagejoe (Grandmaster of Forum PvP) — 2022-08-02T20:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20867#p20867 | page 8 | era: pre-1.18.1 -->

Please be patient. There will be some compatibility issues during the post-update period. I will keep everyone posted on when I start working on a new compatibility patch.

## Post 20998 by Pontifice — 2022-08-03T20:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20998#p20998 | page 8 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Aug 02, 2022 8:39 pm**
> Please be patient. There will be some compatibility issues during the post-update period. I will keep everyone posted on when I start working on a new compatibility patch.

You're a hero. We love you!

## Post 21052 by Whitecatmomma — 2022-08-04T10:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21052#p21052 | page 8 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Aug 02, 2022 8:39 pm**
> Please be patient. There will be some compatibility issues during the post-update period. I will keep everyone posted on when I start working on a new compatibility patch.

Take your time, I am sorry if my reports were annoying

## Post 21139 by Volkyte (Patch Note Conspiracy Theorist) — 2022-08-05T09:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21139#p21139 | page 8 | era: pre-1.18.1 -->

feedback: since last update, Tirisfla uplands and Hillsbrad Foothills ALWAYS rains. there is never beena  single time I saw the sun/clear sky,. always rains.

## Post 21240 by Raukodor (Bug Report Enthusiast) — 2022-08-06T03:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21240#p21240 | page 8 | era: pre-1.18.1 -->

Can i make a Suggestion?

With the hd models all hunter pets have a cool skin

All except foxes and eagles

Very sad because eagles have a really cool hd model that may be implemented with the patch

Look at his coolness

[https://www.wow-petopia.com/look.php?id ... lightbrown](https://www.wow-petopia.com/look.php?id=eagle2lightbrown)

## Post 21253 by Redmagejoe (Grandmaster of Forum PvP) — 2022-08-06T09:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21253#p21253 | page 8 | era: pre-1.18.1 -->

I cannot pull any assets from the new CASC file structure used in Warlords onward, and rely entirely upon work that another person did to obtain the assets prior for my patch. If someone wants to provide the assets, I can certainly apply them, but I have already tried and failed to make sense of CASC. I can only pull assets from MPQ which is used from vanilla up through Mists of Pandaria.

## Post 21284 by Xgdragon — 2022-08-06T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21284#p21284 | page 8 | era: pre-1.18.1 -->

A bit of a far cry, but is it at all possible to load for example Draenei models as a stand-in for a different race?

## Post 21285 by Redmagejoe (Grandmaster of Forum PvP) — 2022-08-06T23:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21285#p21285 | page 8 | era: pre-1.18.1 -->

I have no intention of working on an entity-swapping patch. Is it possible? Yes but with significantly more work involved than simply replacing files. You would have to make that your own personal project.

## Post 21341 by Hypnoti — 2022-08-07T21:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21341#p21341 | page 8 | era: pre-1.18.1 -->

Thanks for all your hard work. Looking forward to the patch! :)

## Post 21506 by Ziandos — 2022-08-08T16:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21506#p21506 | page 8 | era: pre-1.18.1 -->

I just installed the 2 mods yesterday and am loving it. And as I can tell from previous posts it's not even fully polished because of the recent Updates. So great work and thank you so much =)

## Post 21570 by Teurikh — 2022-08-09T07:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21570#p21570 | page 8 | era: pre-1.18.1 -->

Good afternoon, I saw what the shields of mages and priests look like and I didn't like it. Can you tell me how their files are called in MPQeditor for deletion?

## Post 21700 by Spacestr — 2022-08-10T00:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21700#p21700 | page 8 | era: pre-1.18.1 -->

New update released Patch-Y and Patch-Z, what do we rename them to now?

## Post 21708 by Redmagejoe (Grandmaster of Forum PvP) — 2022-08-10T00:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21708#p21708 | page 8 | era: pre-1.18.1 -->

You don't. Once again, you wait until I make an update when all these patches stop dropping. I have it under good authority that there is going to be a Turtle patch squish, which will avail much more space for custom patches. I will post updates after that time. Please simply play without Turtle HD in the interim.

## Post 21727 by Gmarguelles — 2022-08-10T03:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21727#p21727 | page 8 | era: pre-1.18.1 -->

Thank you! for the updates! Is there a place where I can get the Whitemane skin from Draenor, so I can maybe help you with getting it into the patch?

## Post 21728 by Gmarguelles — 2022-08-10T03:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21728#p21728 | page 8 | era: pre-1.18.1 -->

Or is there a way to replace the scarlet inquisitor skin with regular human skin so it doesn't appear broken?

## Post 21743 by Akalix (Turtle WoW Team) [STAFF] — 2022-08-10T07:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21743#p21743 | page 8 | era: pre-1.18.1 -->

Just posting to mention how awesome these are. Been using them for a long time, I appreciate all the work put into them, I love playing with the HD textures   turtle_in_love_head

## Post 21821 by Pyrahead — 2022-08-10T15:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21821#p21821 | page 8 | era: pre-1.18.1 -->

Hey, I have tried many things now, but after applying your patch, my character misses it's icon on the top left and at the character screen. My friends also told me, that I don't have a character icon on their end.
I have unpacked a new .zip from the client, started the game and everything was there. After applying the patch and logging in again, it's gone. Very weird problem.

[![Image](https://i.postimg.cc/rKmm01nC/Capture.png)](https://postimg.cc/rKmm01nC)

## Post 21824 by Slaash0 — 2022-08-10T16:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21824#p21824 | page 8 | era: pre-1.18.1 -->

Just here to say thank you ! It's awesome. Some few bugs, but i hope High Elf models will be available very soon !   turtle_in_love_head

## Post 22186 by Arsenic1111 — 2022-08-13T07:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22186#p22186 | page 8 | era: pre-1.18.1 -->

I found a bug with some of the dwarf / troll textures. It appears for certain skin color selections for these two races - notably the Wildhammer dwarf skins and whatever the troll equivalent is. Other races don't appear to be affected.

The texture bug occurs for both genders, across (probably) all permutations of the other character appearance settings.

![Image](https://i.imgur.com/ilKCOc9.jpg)
![Image](https://i.imgur.com/jCu87s4.jpg)

## Post 22204 by Oran1 — 2022-08-13T14:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22204#p22204 | page 8 | era: pre-1.18.1 -->

The Links to download seem to not be working anymore :( @Redmagejoe

## Post 22208 by Redmagejoe (Grandmaster of Forum PvP) — 2022-08-13T15:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22208#p22208 | page 8 | era: pre-1.18.1 -->

I took them down because, as I said, they are not up to date and not compatible with the current version. There will be an official release once the patch squish happens which I'm told is a few weeks out. I made a quick and dirty compatibility patch which I'm testing personally, but it's not stable enough for release yet.

Please be patient and play without the patch for the time being. Look forward to a more stable patch in the future.

## Post 22216 by Oran1 — 2022-08-13T17:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22216#p22216 | page 8 | era: pre-1.18.1 -->

oh okay, thanks again for the work you do :D - i am playing with the last patch you made and seems to work well for me for now but yea if it starts causing problems i'll just play without it for now.

## Post 22344 by Aurenath — 2022-08-14T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22344#p22344 | page 8 | era: pre-1.18.1 -->

Awesome work, I appreance it so much, it really adds some new life onto old content.
One question tho; is there any chance in future for new HD models to be added for High Elves? Or it's just too hard to implement on custom race like that?

## Post 22387 by Redmagejoe (Grandmaster of Forum PvP) — 2022-08-15T02:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22387#p22387 | page 8 | era: pre-1.18.1 -->

The patch should contain updated Blood Elf models, but if there's newer ones, it will be very difficult to acquire as CASC is not easy to navigate and pull assets from in post-Pandaria files.

## Post 22397 by Slaash0 — 2022-08-15T06:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22397#p22397 | page 8 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Aug 15, 2022 2:49 am**
> The patch should contain updated Blood Elf models, but if there's newer ones, it will be very difficult to acquire as CASC is not easy to navigate and pull assets from in post-Pandaria files.

Awesome !

## Post 22722 by Nuroffen — 2022-08-18T18:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22722#p22722 | page 8 | era: pre-1.18.1 -->

Hi, I can't click the link for the files, anyone can help me ?
thanks

## Post 22929 by Redmagejoe (Grandmaster of Forum PvP) — 2022-08-20T13:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22929#p22929 | page 8 | era: pre-1.18.1 -->

A new link with new files will be up after the next official Turtle client patch.

## Post 22970 by Nuroffen — 2022-08-20T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22970#p22970 | page 8 | era: pre-1.18.1 -->

Thank you !

## Post 22986 by Douzmoundhell — 2022-08-21T05:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22986#p22986 | page 8 | era: pre-1.18.1 -->

Hi, i'm new. . . so, can you help me to find the link??? pls   crying_turtle  i wanna play with it

## Post 23149 by Nimerya — 2022-08-22T16:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23149#p23149 | page 8 | era: pre-1.18.1 -->

> **Douzmoundhell wrote: Sun Aug 21, 2022 5:09 am**
> Hi, i'm new. . . so, can you help me to find the link??? pls   crying_turtle  i wanna play with it

Did you find any usefull informations ?   smiling_turtle

## Post 23184 by Ualocin — 2022-08-23T03:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23184#p23184 | page 9 | era: pre-1.18.1 -->

Hello, the links are still not available, or am I doing something wrong?

## Post 23210 by Murloc32lol — 2022-08-23T11:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23210#p23210 | page 9 | era: pre-1.18.1 -->

waiting room for new update :)

## Post 23214 by Redmagejoe (Grandmaster of Forum PvP) — 2022-08-23T11:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23214#p23214 | page 9 | era: pre-1.18.1 -->

I can assure everyone that it will not be too much longer. Please be patient.

## Post 23216 by Sleepylol — 2022-08-23T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23216#p23216 | page 9 | era: pre-1.18.1 -->

Thank you for the big work :) cant wait for it to work and eveyrthing.
Always wished i can play this version of the game with upgraded visiuals:)
Take ur time with it so that everything works.

## Post 23217 by Soleman — 2022-08-23T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23217#p23217 | page 9 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Aug 23, 2022 11:40 am**
> I can assure everyone that it will not be too much longer. Please be patient.

Any chance you could split the spell effects into a different patch? Not really a fan of the new vfx.

## Post 23219 by Vyntoras — 2022-08-23T13:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23219#p23219 | page 9 | era: pre-1.18.1 -->

> **Soleman wrote: Tue Aug 23, 2022 1:47 pm**
> > **Redmagejoe wrote: Tue Aug 23, 2022 11:40 am**
> > I can assure everyone that it will not be too much longer. Please be patient.
>
>   Any chance you could split the spell effects into a different patch? Not really a fan of the new vfx.

This. (The SFX update for Backstab/Ambush is perfect as is tho!)

## Post 23224 by Redmagejoe (Grandmaster of Forum PvP) — 2022-08-23T15:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23224#p23224 | page 9 | era: pre-1.18.1 -->

My time is already limited enough due to new work schedule as it is, I can barely manage the time to maintain this patch let alone make multiple independent single-feature patches. Apologies, but as stated before, I have no intention of doing this. You would need to ask another modder willing to break down my patch to make something like this.

## Post 23399 by Soleman — 2022-08-25T08:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23399#p23399 | page 9 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Aug 23, 2022 3:47 pm**
> My time is already limited enough due to new work schedule as it is, I can barely manage the time to maintain this patch let alone make multiple independent single-feature patches. Apologies, but as stated before, I have no intention of doing this. You would need to ask another modder willing to break down my patch to make something like this.

No need for apologies, we appreciate all of the time and work you put into this patch. I was just curious if it was possible thinking it might be a quick cut and paste job but it sounds like it isn't.   sad_turtle_head

## Post 23436 by Nuxwulf — 2022-08-25T18:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23436#p23436 | page 9 | era: pre-1.18.1 -->

I know it sounds stupid but...I can't find the download link for this mod. I thought it was in the first post   turtle_tongue_head

EDIT: Ok sorry, I've read the latest posts. I will be here waiting   satisfied_turtle

## Post 23497 by Akalix (Turtle WoW Team) [STAFF] — 2022-08-26T06:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23497#p23497 | page 9 | era: pre-1.18.1 -->

Redmagejoe is correct, we have a patch squish coming in the near future. We will include that in the patch notes when done.

## Post 23707 by Caniko — 2022-08-27T14:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23707#p23707 | page 9 | era: pre-1.18.1 -->

Stop being an npc asking for the link. Read the first post.

Thank you for your great work my dude!

## Post 24297 by Ckek26 — 2022-09-03T17:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24297#p24297 | page 9 | era: pre-1.18.1 -->

Waiting room for update, thanks for all your hard work ! <3

## Post 24315 by Dogfood420 — 2022-09-03T22:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24315#p24315 | page 9 | era: pre-1.18.1 -->

Dont overwork yourself bro, maybe someone else can resume where you left off.
Would really like to see and use this

## Post 24636 by Mechaslav — 2022-09-08T05:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24636#p24636 | page 9 | era: pre-1.18.1 -->

He's still working on it just wait.

## Post 24648 by Kras — 2022-09-08T11:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24648#p24648 | page 9 | era: pre-1.18.1 -->

Any news of the status of the update, many thanks in advance :)

## Post 24696 by Redmagejoe (Grandmaster of Forum PvP) — 2022-09-08T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24696#p24696 | page 9 | era: pre-1.18.1 -->

When we no longer have patch-T, patch-U, and patch-V in our Data folders, that is when I will be working on an update. And it will not take me long to put out an update when that happens. You will have to ask Staff when they think their patch squish will be ready.

## Post 25129 by Rothnaric — 2022-09-15T21:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25129#p25129 | page 9 | era: pre-1.18.1 -->

how to download this?

## Post 25170 by Spocony — 2022-09-16T17:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25170#p25170 | page 9 | era: pre-1.18.1 -->

How can i download?

## Post 25179 by Redmagejoe (Grandmaster of Forum PvP) — 2022-09-16T18:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25179#p25179 | page 9 | era: pre-1.18.1 -->

I would really like to ask one last time very politely for people to please at least read the thread or to at least respect my boundaries on this mod. I have stated multiple times that this mod is not being worked on or distributed until the patch squish from Turtle WoW, and my hands are full with RL obligations enough as it is. Please do not PM me asking for links, post in this thread asking for links, or the like.

When there are links in the first post, it will be available. Thank you for your patience and understanding. I do not want to have to blacklist or block anyone.

## Post 25645 by Aniki22 — 2022-09-21T04:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25645#p25645 | page 9 | era: pre-1.18.1 -->

Can you please tell me if HD models work with new skins or for example with mag'har orcs that you can buy in the store?

## Post 25647 by Redmagejoe (Grandmaster of Forum PvP) — 2022-09-21T04:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25647#p25647 | page 9 | era: pre-1.18.1 -->

Currently there's no assets available for the Turtle custom skins. However, there is a glimmer of hope that I may convince some artists to take a crack at creating those assets. All I can say is fingers crossed and please bear with the janky appearance of the custom skins in-game.

## Post 25648 by Aniki22 — 2022-09-21T04:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25648#p25648 | page 9 | era: pre-1.18.1 -->

Thank you, I wish you luck in finding such people)

## Post 25649 by Aniki22 — 2022-09-21T05:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25649#p25649 | page 9 | era: pre-1.18.1 -->

By the way, I also wanted to ask, I remember I used HD models but not yours and there was a bug with the fact that there was no animation for obtaining weapons, or rather the animation itself was there but the weapon remained on the character, does this animation work for you or not?

## Post 26570 by Mulocalvo — 2022-10-01T13:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26570#p26570 | page 9 | era: pre-1.18.1 -->

Are you still working on this project??

## Post 27036 by Grimvarg — 2022-10-09T11:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27036#p27036 | page 9 | era: pre-1.18.1 -->

Where are the links to the files? I want to download the HD textures :((

## Post 27056 by Gore28 — 2022-10-09T19:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27056#p27056 | page 9 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Mar 21, 2022 8:56 am**
> ************ COMPATIBILITY UPDATE PENDING ************
>
>  This patch will not have a new version until Turtle's official patch squish update is pushed. There are too many compatibility fixes for me to maintain mini patches that may need to be updated a dozen times before the final update, so I will not be working on this until then. **PLEASE DO NOT PM ME OR POST IN THIS THREAD ASKING WHERE LINKS ARE, WHEN A NEW VERSION IS COMING, OR IF IT IS STILL BEING WORKED ON.**

this

## Post 27322 by Tobias — 2022-10-15T17:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27322#p27322 | page 9 | era: pre-1.18.1 -->

Not that I'm pestering but i'm lead to beleive there is a current non-final patch, but there are no links in the OP.  Saw the links for the tools and all, but no patch.  Just looking for clarification in case i'm missing out on even an alpha version.

## Post 27879 by Redmagejoe (Grandmaster of Forum PvP) — 2022-10-25T03:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27879#p27879 | page 9 | era: pre-1.18.1 -->

I have made a WIP compatibility update which will be added with new instructions in the first post shortly after the official Turtle patch squish is pushed out. I have also made a simple tutorial video on how to work with client files and make test patches for any 3D model or texture artists who wish to contribute to this project. If you are an artist and would like a link to this video tutorial, please PM me here on the forums.

## Post 28030 by Redmagejoe (Grandmaster of Forum PvP) — 2022-10-27T04:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28030#p28030 | page 9 | era: pre-1.18.1 -->

In the process of fine-tuning the patch (and trying to get past the stock mod-independent issue with Gnomeregan music not always playing), I have added all parts of the full score of Operation Gnomeregan as the background music for the Gnomeregan dungeon.

[embed: https://www.youtube.com/embed/AL-j8h0r2Q8]

## Post 28080 by Zorn — 2022-10-28T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28080#p28080 | page 9 | era: pre-1.18.1 -->

Can you please tell me witch files are from your Mod? Dont want to delete Game-File-Patches and cant identify the Mod-Patches

## Post 28081 by Zorn — 2022-10-28T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28081#p28081 | page 9 | era: pre-1.18.1 -->

BTW the game just runs fine with your Mod, not even sure if i have to delete them.

## Post 28119 by Tobias — 2022-10-30T00:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28119#p28119 | page 9 | era: pre-1.18.1 -->

> **Zorn wrote: Fri Oct 28, 2022 12:10 pm**
> BTW the game just runs fine with your Mod, not even sure if i have to delete them.

What mod?  There is no link to any files?  I TOTALLY get hes still working on an update but i'm curious to try the CURRENT version.  So WHERE oh WHERE did you download this version of which you speak?

## Post 28625 by Zorn — 2022-11-07T08:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28625#p28625 | page 9 | era: pre-1.18.1 -->

I still have the old Version.

## Post 28675 by Uaidavi — 2022-11-07T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28675#p28675 | page 9 | era: pre-1.18.1 -->

> **Zorn wrote: Mon Nov 07, 2022 8:23 am**
> I still have the old Version.

Where banana

## Post 28772 by Lorencor — 2022-11-08T19:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28772#p28772 | page 9 | era: pre-1.18.1 -->

> **Zorn wrote: Mon Nov 07, 2022 8:23 am**
> I still have the old Version.

Can you share with us?

## Post 28887 by Remorsx (Barrens Chat Casualty) — 2022-11-10T10:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28887#p28887 | page 10 | era: pre-1.18.1 -->

waiting on an update hope u finish it soon! good luck with the code

## Post 29767 by Tobias — 2022-11-24T03:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29767#p29767 | page 10 | era: pre-1.18.1 -->

> **Zorn wrote: Mon Nov 07, 2022 8:23 am**
> I still have the old Version.

Share the old version please.  I mean, if its not super buggy, i'll deal with a few this and that.  The original models are just cancer to the eyes.

## Post 30061 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-01T03:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30061#p30061 | page 10 | era: pre-1.18.1 -->

I've been contemplating after my next release putting some time into grabbing zone music from Cataclysm onward and adding them into the mix of existing Zone Music. As it stands right now, there's a lot of zones that share common music, and apparently there's more zone-specific music in Cataclysm onward. The most noticeable example for me was a lack of Mulgore having its own field music.

People's thoughts on this? It would be a lot of work on my end and I'd have to keep track of yet another DBC with ZoneMusic.dbc and more heavily modify SoundEntries.dbc, but if there's enough support for this idea, I might be inclined to work on it.

## Post 30080 by Uaidavi — 2022-12-01T14:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30080#p30080 | page 10 | era: pre-1.18.1 -->

I personally don't care that much about the new music, honestly.

## Post 30089 by Oakenhorn — 2022-12-01T21:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30089#p30089 | page 10 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Dec 01, 2022 3:33 am**
> I've been contemplating after my next release putting some time into grabbing zone music from Cataclysm onward and adding them into the mix of existing Zone Music. As it stands right now, there's a lot of zones that share common music, and apparently there's more zone-specific music in Cataclysm onward. The most noticeable example for me was a lack of Mulgore having its own field music.
>
>  People's thoughts on this? It would be a lot of work on my end and I'd have to keep track of yet another DBC with ZoneMusic.dbc and more heavily modify SoundEntries.dbc, but if there's enough support for this idea, I might be inclined to work on it.

First of all, you are doing the great job! Really appreciate it.

Me personally (as developer) always stick to the idea "One single class should be responsive for one single particular job. So, if it's called **models** it should affect only **models**.

If you want to somehow mess with music it would be wiser to prepare separate music only patch. No need to combine these two different things.

Nevertheless, if there is a button that allows you to disable the new patch music - that would work too!

Thank you for reading my feedback!
Best Regards.

## Post 30107 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-02T06:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30107#p30107 | page 10 | era: pre-1.18.1 -->

The mod currently already modifies music, and did so before I even modified it to work with Turtle. I was simply thinking of going further with it.

## Post 30158 by Sleepylol — 2022-12-03T13:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30158#p30158 | page 10 | era: pre-1.18.1 -->

I think the music isnt that important tbh, i dont know how many people have the music on while chilling here.
Would just love the Models way more tbh, gives the game such a new look and feeling.
Dont need to overdo it anyway:) ur already doing a lot. If the Textures work all fine and there are no bugs with it, i would just leave it like that :)
Everyone is Hyped about the models and the graphics rather than anything else:))

## Post 30164 by Raswen — 2022-12-03T15:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30164#p30164 | page 10 | era: pre-1.18.1 -->

It would be great if your work was officially included in the turtle.

## Post 30177 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-03T22:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30177#p30177 | page 10 | era: pre-1.18.1 -->

That would ask to divert too many resources, however.

## Post 30178 by Faustorgo (Barrens Chat Casualty) — 2022-12-03T23:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30178#p30178 | page 10 | era: pre-1.18.1 -->

Go for it RedmageJoe, i agree to your music combination idea .D

## Post 30184 by Raswen — 2022-12-04T07:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30184#p30184 | page 10 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Dec 03, 2022 10:25 pm**
> That would ask to divert too many resources, however.

I understand that it is hard to do this on a free basis. It would be nice if you were hired as a specialist in models and animations.

## Post 30200 by Ldturtle — 2022-12-04T18:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30200#p30200 | page 10 | era: pre-1.18.1 -->

Taking in consideration the limitations of current Goblin customization,how would Legion models affect them?
 3-4 faces out of 11?

## Post 30208 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-04T22:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30208#p30208 | page 10 | era: pre-1.18.1 -->

I had a great deal of trouble with trying to downport Cata goblins, and anything past Mists of Pandaria is completely out of the question. The original author who provided the Warlords/Legion new models is not someone that I have the ability to contact, recalling if you will that this project is not something I created but adapted and maintain for Turtle. Past Pandaria, the MPQ file archive system was switched to the CASC system which is near impossible to navigate let alone modify, as files aren't so much individual assets as they are chunks of files in an "archive" that relies on a checksum. In other words, you can't just pull the file you want from it and use it without a great deal of effort or existing knowledge.

## Post 30239 by Ldturtle — 2022-12-05T19:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30239#p30239 | page 10 | era: pre-1.18.1 -->

Can't wait for your new patch,man.

## Post 30250 by Tyridun — 2022-12-06T00:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30250#p30250 | page 10 | era: pre-1.18.1 -->

Looks really awesome, cant wait to try this myself!

## Post 30369 by Winthrop (Barrens Chat Casualty) — 2022-12-09T10:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30369#p30369 | page 10 | era: pre-1.18.1 -->

Im having a hard time finding something about a new, coming Turtle WoW patch. Do you have a Link or such?

## Post 30970 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-19T00:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30970#p30970 | page 10 | era: pre-1.18.1 -->

The day has finally come. A new version is available for the masses! Check the first post.

NOTE: You may need to reinstall these after the next major Turtle update due to patch pruning.

I fixed one of the mounts, too:

![Image](https://i.imgur.com/qkoNOHL.jpeg)

## Post 30997 by Remorsx (Barrens Chat Casualty) — 2022-12-19T15:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30997#p30997 | page 10 | era: pre-1.18.1 -->

is it possible to remove legion character models without removing npc models, spell effects and such? i just really dont like the new undead animations

## Post 31012 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-19T16:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31012#p31012 | page 10 | era: pre-1.18.1 -->

Possible? Yes, but it would require a completely different patch, which I have no intention of supporting. This patch already requires a lot of upkeep with content updates, and I don't want to try to keep two separate branches organized.

## Post 31023 by Remorsx (Barrens Chat Casualty) — 2022-12-19T16:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31023#p31023 | page 10 | era: pre-1.18.1 -->

thought it to be as simple as deleting something inside the mpq =( thanks for the reply though

## Post 31027 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-19T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31027#p31027 | page 10 | era: pre-1.18.1 -->

If you delete files inside the MPQ, then you also have to rewrite the DBC files that tell the game what files to be loaded for what assets. The original mod creator whose work I adapted did not simply replace files with the same names in many cases, and as such you would experience missing assets at best or game crashes at worst.

## Post 31055 by Elcas97 — 2022-12-19T17:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31055#p31055 | page 10 | era: pre-1.18.1 -->

Hello, do u know how can i fix the NE and Dwarf hairy bug? just donwloaded the patch and have this issue

## Post 31056 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-19T17:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31056#p31056 | page 10 | era: pre-1.18.1 -->

The patch WILL have issues related to load order until the official client patch from the Turtle team drops later. It was made to come after Turtle patches, but currently, Turtle patches are patch-T, -U, -V, -W, -X, -Y, -Z. After the official patch, all these will be cleaned up and Turtle will only use patch-3. You will need to redownload patch-A for the HD mod afterwards, and everything should work perfectly.

## Post 31057 by Elcas97 — 2022-12-19T17:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31057#p31057 | page 10 | era: pre-1.18.1 -->

Thank you so much, then will donwload tomorrow and try again

## Post 31064 by Rouxnoir — 2022-12-19T18:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31064#p31064 | page 10 | era: pre-1.18.1 -->

I love your work, but my Gnome's face looks like Kane's mask from world wrestling, with hair that had a bad accident with a pair of hedge trimmers

[https://drive.google.com/file/d/1RfcsXb ... share_link](https://drive.google.com/file/d/1RfcsXb634cNJ460Qw9ccMMSAOz32lVBy/view?usp=share_link)

## Post 31066 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-19T18:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31066#p31066 | page 10 | era: pre-1.18.1 -->

> **Rouxnoir wrote: Mon Dec 19, 2022 6:46 pm**
> I love your work, but my Gnome's face looks like Kane's mask from world wrestling, with hair that had a bad accident with a pair of hedge trimmers
>
>  [https://drive.google.com/file/d/1RfcsXb ... share_link](https://drive.google.com/file/d/1RfcsXb634cNJ460Qw9ccMMSAOz32lVBy/view?usp=share_link)

Please refer to the red note at the top of the first post.

## Post 31068 by Winthrop (Barrens Chat Casualty) — 2022-12-19T19:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31068#p31068 | page 10 | era: pre-1.18.1 -->

Ill keep the red post in mind - just a little thing Ive noticed here and from other simular mods:
Kobolds have Black Antlers.

## Post 31072 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-19T19:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31072#p31072 | page 10 | era: pre-1.18.1 -->

> **Winthrop wrote: Mon Dec 19, 2022 7:20 pm**
> Ill keep the red post in mind - just a little thing Ive noticed here and from other simular mods:
>  Kobolds have Black Antlers.

Kobolds will have the correct color antlers after the update.

## Post 31073 by Winthrop (Barrens Chat Casualty) — 2022-12-19T19:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31073#p31073 | page 10 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Dec 19, 2022 7:30 pm**
> > **Winthrop wrote: Mon Dec 19, 2022 7:20 pm**
> > Ill keep the red post in mind - just a little thing Ive noticed here and from other simular mods:
> >  Kobolds have Black Antlers.
>
>   Kobolds will have the correct color antlers after the update.

Hmm... always thought that they didnt have antlers at all.

## Post 31076 by Remorsx (Barrens Chat Casualty) — 2022-12-19T19:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31076#p31076 | page 10 | era: pre-1.18.1 -->

will there be any new models for the high elves / goblins after the update lands or they will remain as they are right now? sorry if was answered already haven't found anything on that

## Post 31082 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-19T20:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31082#p31082 | page 10 | era: pre-1.18.1 -->

> **Winthrop wrote: Mon Dec 19, 2022 7:34 pm**
> Hmm... always thought that they didnt have antlers at all.

When Kobolds got their model update in Warlords, their candles were replaced with moose skulls for some reason.

> **Remorsx wrote: Mon Dec 19, 2022 7:46 pm**
> will there be any new models for the high elves / goblins after the update lands or they will remain as they are right now? sorry if was answered already haven't found anything on that

I don't have the means to extract new High Elf models from CASC files post-Pandaria, and as for Goblin models, I would need someone else to help with properly downporting them.

## Post 31091 by Andima — 2022-12-19T21:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31091#p31091 | page 10 | era: pre-1.18.1 -->

Thank you very much for your time and hard work.

## Post 31094 by Rouxnoir — 2022-12-19T22:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31094#p31094 | page 10 | era: pre-1.18.1 -->

[/quote]

Please refer to the red note at the top of the first post.
[/quote]

My policy of ignoring bold-all caps red letters, and/or things that say "IMPORTANT!!!!" has failed me yet again.

## Post 31096 by Klen — 2022-12-19T22:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31096#p31096 | page 10 | era: pre-1.18.1 -->

Thank you so much for your work.

I don't know if this feedback has been brought to you already but the white ivory raptor mount has some textures issues.

<https://gyazo.com/e9e3215072692c53ba295a96d07407f7>

## Post 31097 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-19T22:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31097#p31097 | page 10 | era: pre-1.18.1 -->

> **Klen wrote: Mon Dec 19, 2022 10:46 pm**
> Thank you so much for your work.
>
>  I don't know if this feedback has been brought to you already but the white ivory raptor mount has some textures issues.
>
>  <https://gyazo.com/e9e3215072692c53ba295a96d07407f7>

Check again after the server update and redownload, and let me know if the issue persists. I'll start making a checklist of specific items for my patch's to-do list.

## Post 31101 by Mixxl — 2022-12-20T01:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31101#p31101 | page 11 | era: pre-1.18.1 -->

File A can't be downloaded for some reason. When the download should start, there is an error saying the page doesn't work at the moment. Maybe it's my computer's fault but just in case I wanted to let you know :)

## Post 31103 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-20T01:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31103#p31103 | page 11 | era: pre-1.18.1 -->

I just tested, and I believe this may be an error on your end. If you can, try to download it later, or with a different browser session, and move it to your Data folder only after Turtle WoW has finished patching.

## Post 31110 by Mixxl — 2022-12-20T01:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31110#p31110 | page 11 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Dec 20, 2022 1:06 am**
> I just tested, and I believe this may be an error on your end. If you can, try to download it later, or with a different browser session, and move it to your Data folder only after Turtle WoW has finished patching.

problem solved :)

## Post 31113 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-20T01:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31113#p31113 | page 11 | era: pre-1.18.1 -->

patch-A has been updated with another small fix.

## Post 31132 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-20T04:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31132#p31132 | page 11 | era: pre-1.18.1 -->

Please also report here if you experience any crashes related specifically to use of the patch. In other words, please disable the patch (rename it something like !patch-A.MPQ temporarily) and see if you still crash due to something server-related before reporting it as an HD patch issue.

## Post 31145 by Klen — 2022-12-20T08:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31145#p31145 | page 11 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Dec 19, 2022 10:51 pm**
> > **Klen wrote: Mon Dec 19, 2022 10:46 pm**
> > Thank you so much for your work.
> >
> >  I don't know if this feedback has been brought to you already but the white ivory raptor mount has some textures issues.
> >
> >  <https://gyazo.com/e9e3215072692c53ba295a96d07407f7>
>
>   Check again after the server update and redownload, and let me know if the issue persists. I'll start making a checklist of specific items for my patch's to-do list.

I confirm you that there's still a texture issue with the White Ivory War Raptor after the last update ;)

![Image](https://i.gyazo.com/c34ac7c497eb890e2e04b71e92a7c729.png)

## Post 31178 by Ch0rre — 2022-12-20T14:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31178#p31178 | page 11 | era: pre-1.18.1 -->

Hi, thx for your work!

A question I haven't seen answered (apologies if I'm mistaken):

If one only wants the environment update patch (B) - no changes to models / skins - isn't this also the safer option compability wise?

## Post 31183 by Maesus (Barrens Chat Casualty) — 2022-12-20T15:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31183#p31183 | page 11 | era: pre-1.18.1 -->

> **Ch0rre wrote: Tue Dec 20, 2022 2:20 pm**
> Hi, thx for your work!
>
>  A question I haven't seen answered (apologies if I'm mistaken):
>
>  If one only wants the environment update patch (B) - no changes to models / skins - isn't this also the safer option compability wise?

If you're asking if Patch-B will break your textures, it won't :) I'm using it and so far I haven't noticed anything out of order, and I think it matches the vanilla models absolutely perfectly.

## Post 31184 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-20T15:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31184#p31184 | page 11 | era: pre-1.18.1 -->

> **Klen wrote: Tue Dec 20, 2022 8:15 am**
> I confirm you that there's still a texture issue with the White Ivory War Raptor after the last update ;)
>
>  ![Image](https://i.gyazo.com/c34ac7c497eb890e2e04b71e92a7c729.png)

Then it's likely the issue is there aren't HD textures for that particular mount, and I will need an artist to create them.

## Post 31258 by Boj — 2022-12-21T00:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31258#p31258 | page 11 | era: pre-1.18.1 -->

A lot of headgear on human males have started to have the skull of the human pop out of the back, my head is showing through my wizard hat lol. Im very glad however that the patch is finally here so thanks for the hard work. Hopefully my bald head can be hidden under my hat once again.

EDIT: I was browsing the transmog section at other headgear and it looks like the placement of the item on the model is too far forward, so the head starts sticking out of the back?

## Post 31279 by Zunar — 2022-12-21T08:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31279#p31279 | page 11 | era: pre-1.18.1 -->

Thank you for the models! I have a bit of a request. Is it possible to separate the druid forms from the character models? Essentially I want to use just the druid forms without the new character races.

## Post 31282 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-21T08:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31282#p31282 | page 11 | era: pre-1.18.1 -->

It is possible, yes. You would simply need to generate an MPQ that contains only the Druid form models and textures.

## Post 31290 by Reploidrocsa (Bug Report Enthusiast) — 2022-12-21T10:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31290#p31290 | page 11 | era: pre-1.18.1 -->

some glitches i found so far:

forest trolls (male and female) have messy textures
dwarves with tatoos (male and female) have messy textures
Male night elves have messy textures, probably from the custom hairstyles and hair colors

Some mount textures not loading so they stay as blank pieces

[![Image](https://i.postimg.cc/kDVbtHkw/Screenshot-1.png)](https://postimg.cc/kDVbtHkw)

[![Image](https://i.postimg.cc/Js8Dvztd/Screenshot-2.png)](https://postimg.cc/Js8Dvztd)

[![Image](https://i.postimg.cc/rD90k2ry/Screenshot-3.png)](https://postimg.cc/rD90k2ry)

## Post 31317 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-21T17:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31317#p31317 | page 11 | era: pre-1.18.1 -->

As said many a time, Turtle custom skins have no HD counterpart until I get an artist to make them for me, and so these old textures will continue trying to stretch over new models. The black Night Elf hair issue is known and there is a solution known but I'm missing the assets needed to fix this display issue at the moment. There is nothing I can do about certain graphical bugs until someone volunteers to make new assets for the patch.

## Post 31319 by Manateufel — 2022-12-21T17:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31319#p31319 | page 11 | era: pre-1.18.1 -->

![Image](https://abload.de/img/errorm2cpp1df7z.png)

## Post 31322 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-21T18:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31322#p31322 | page 11 | era: pre-1.18.1 -->

> **Manateufel wrote: Wed Dec 21, 2022 5:54 pm**
> ![Image](https://abload.de/img/errorm2cpp1df7z.png)

This issue is unrelated the HD patch and has happened to multiple people, myself included, while not using the HD patch. Please report this in the appropriate section for assistance on how to resolve it.

## Post 31323 by Manateufel — 2022-12-21T18:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31323#p31323 | page 11 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed Dec 21, 2022 6:27 pm**
> > **Manateufel wrote: Wed Dec 21, 2022 5:54 pm**
> > ![Image](https://abload.de/img/errorm2cpp1df7z.png)
>
>
>  This issue is unrelated the HD patch and has happened to multiple people, myself included, while not using the HD patch. Please report this in the appropriate section for assistance on how to resolve it.

thanks for the answer! love this mod   turtle_in_love_head

## Post 31341 by Remorsx (Barrens Chat Casualty) — 2022-12-21T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31341#p31341 | page 11 | era: pre-1.18.1 -->

i might be going insane but could u please check if there are some troll male grunts in the druid bear form combat grunts because i cant help but hear something that reminds me of trolls...
it happens when i use demoralizing shout and maul

## Post 31346 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-21T22:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31346#p31346 | page 11 | era: pre-1.18.1 -->

Definitely crazy. I just tested it and no errant sounds on Druid Bear.

## Post 31401 by Winthrop (Barrens Chat Casualty) — 2022-12-22T20:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31401#p31401 | page 11 | era: pre-1.18.1 -->

Could you change the Pants and Gloves of Deputy Wilem (Human Starting Zone).

## Post 31402 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-22T20:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31402#p31402 | page 11 | era: pre-1.18.1 -->

Could you please take a picture of the NPC in question with and without the HD patch? I think I know what you're talking about, but I'd like to see if it's as egregious as I think it is.

## Post 31403 by Winthrop (Barrens Chat Casualty) — 2022-12-22T20:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31403#p31403 | page 11 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Dec 22, 2022 8:14 pm**
> Could you please take a picture of the NPC in question with and without the HD patch? I think I know what you're talking about, but I'd like to see if it's as egregious as I think it is.

Just turned off the PC so sadly I cant.
BUT! This NPC got promoted in later Expansions.
Befor he was wearing the typical Silver/Steel colored Sturmwind gear. Due to his Promotion, in later Expansions, he got the Gold colored PvP gear.

Im pretty sure you took care of the most obvious Gear. So now he is wearing a Silver Helm and Shoulder Pads and golden Gloves and Pants with a white Tabard.

Reminds me of some Bad Taste Parties :-)

Never the less - really awesome Job Mate. Cant Imagine how much Time and Love you spend / spent for this project. It makes the game way more enjoyable for alot of us! Please know, that we appreciate your work ♡

## Post 31440 by Winthrop (Barrens Chat Casualty) — 2022-12-23T14:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31440#p31440 | page 11 | era: pre-1.18.1 -->

Another thing I have noticed after adding and Removing the patches.
I cannot "pull out" my weapons.

## Post 31450 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-23T18:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31450#p31450 | page 11 | era: pre-1.18.1 -->

This was an issue with the base patch that the original author never addressed, and I have no idea how to address it. I believe it has to do with the differences in animations used for wielding weapons in Warlords compared ti Vanilla. Downporting models includes packing new skins and animations into an old vanilla compatible model, and there is always a loss of data. Sadly, the weapon sheathing animation may be one of those lost bits. I've noticed the weapon is wielding properly when going into combat stance, at least.

## Post 31519 by Freddofooz — 2022-12-25T07:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31519#p31519 | page 11 | era: pre-1.18.1 -->

Hi, i see you mentioned that this turns high elf eyes green, is this still the case?

EDIT: For people wondering, i tried it last night and yes sadly it still does so gonna hold off on the mod for now until its fixed, otherwise majority of it works well, saw some weird looking dwarfs tho.

## Post 31778 by Mazzr — 2022-12-29T19:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31778#p31778 | page 11 | era: pre-1.18.1 -->

Thanks for this Mod, awesome work!

I got a question regarding character models:

For some races i prefer the old ones, for others the new ones. By deleting the files under "character" in the mod mpq, i managed to keep my preferred classic models. My problem is: on the classic models the faces look weird (maybe because they use the new textures?). This problem only occures on NPCs, my Player characters are fine.

Does anyone have a solution to this issue? I would appreciate it!

<https://ibb.co/8g5x8Tb>

NPC left, PC right

## Post 31780 by Mazzr — 2022-12-29T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31780#p31780 | page 11 | era: pre-1.18.1 -->

> **Freddofooz wrote: Sun Dec 25, 2022 7:26 am**
> Hi, i see you mentioned that this turns high elf eyes green, is this still the case?
>
>  EDIT: For people wondering, i tried it last night and yes sadly it still does so gonna hold off on the mod for now until its fixed, otherwise majority of it works well, saw some weird looking dwarfs tho.

You can delete the "Bloodelf" folder under characters in the patch-A.mpq. If you are fine with having everything in HD except high elves.

## Post 31791 by Freddofooz — 2022-12-30T01:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31791#p31791 | page 11 | era: pre-1.18.1 -->

> **Mazzr wrote: Thu Dec 29, 2022 7:36 pm**
> > **Freddofooz wrote: Sun Dec 25, 2022 7:26 am**
> > Hi, i see you mentioned that this turns high elf eyes green, is this still the case?
> >
> >  EDIT: For people wondering, i tried it last night and yes sadly it still does so gonna hold off on the mod for now until its fixed, otherwise majority of it works well, saw some weird looking dwarfs tho.
>
>   You can delete the "Bloodelf" folder under characters in the patch-A.mpq. If you are fine with having everything in HD except high elves.

Well that worked, will hopefully have HD high elves one day, but i can live without it, cheers!

## Post 31932 by Vahlok — 2023-01-02T03:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31932#p31932 | page 11 | era: pre-1.18.1 -->

Can there please be a fix for the weapon sheathing bug, it'd mean so much and improve upon this pack so so so much :<

## Post 31978 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-02T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31978#p31978 | page 11 | era: pre-1.18.1 -->

> **Vahlok wrote: Mon Jan 02, 2023 3:37 am**
> Can there please be a fix for the weapon sheathing bug, it'd mean so much and improve upon this pack so so so much :<

That is beyond the means of myself and probably the original author. It's an issue of animations being lost when downporting from Warlords of Draenor to Vanilla model assets.

Don't forget to reapply this patch after the latest client update.

## Post 32027 by Diobaubau — 2023-01-03T06:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32027#p32027 | page 11 | era: pre-1.18.1 -->

A question

*Last edited by Diobaubau on Tue Jan 03, 2023 6:31 am, edited 4 times in total.*

## Post 32030 by Diobaubau — 2023-01-03T06:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32030#p32030 | page 11 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Jan 02, 2023 7:45 pm**
> > **Vahlok wrote: Mon Jan 02, 2023 3:37 am**
> > Can there please be a fix for the weapon sheathing bug, it'd mean so much and improve upon this pack so so so much :<
>
>   That is beyond the means of myself and probably the original author. It's an issue of animations being lost when downporting from Warlords of Draenor to Vanilla model assets.
>
>  Don't forget to reapply this patch after the latest client update.

I would like to know what you need to be able to implement cataclysm goblins in turtle wow.

## Post 32033 by Diobaubau — 2023-01-03T06:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32033#p32033 | page 11 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Jan 02, 2023 7:45 pm**
> > **Vahlok wrote: Mon Jan 02, 2023 3:37 am**
> > Can there please be a fix for the weapon sheathing bug, it'd mean so much and improve upon this pack so so so much :<
>
>   That is beyond the means of myself and probably the original author. It's an issue of animations being lost when downporting from Warlords of Draenor to Vanilla model assets.
>
>  Don't forget to reapply this patch after the latest client update.

I wanted to ask something else, I don't know if you'll have time or much less if you took my comment into account, but you could make an MPQ so that you only have HD textures of the creatures and mounts. (NOT HD CHARACTERS, NOT HD NPCs)

## Post 32034 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-03T06:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32034#p32034 | page 11 | era: pre-1.18.1 -->

I am not making alternate patches, sorry.

## Post 32042 by Posti — 2023-01-03T13:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32042#p32042 | page 11 | era: pre-1.18.1 -->

hey, just a comment to say thank you for the work you are provided to the community, it is so awesome, and I do like it a lot.
also have a great year !
Post

## Post 32152 by Ribles — 2023-01-05T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32152#p32152 | page 12 | era: pre-1.18.1 -->

I'm sure you get these kinds of requests a lot, but there's 1 model I'd love to see get the update treatment. I LOVE the new version of the darkhound, and would like that one ported over. is that possible?

## Post 32154 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-06T00:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32154#p32154 | page 12 | era: pre-1.18.1 -->

> **Ribles wrote: Thu Jan 05, 2023 11:38 pm**
> I'm sure you get these kinds of requests a lot, but there's 1 model I'd love to see get the update treatment. I LOVE the new version of the darkhound, and would like that one ported over. is that possible?

![Image](https://i.imgur.com/MosN1rL.png)

Not likely to happen any time soon. The new CASC file system they use is impossible for me to decipher and pull assets from, compared to the standard MPQ (basically ZIP files) format Pandaria and earlier expansions use.

## Post 32158 by Ribles — 2023-01-06T02:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32158#p32158 | page 12 | era: pre-1.18.1 -->

I'm sorry to hear that. Thanks for the explanation. I appreciate it!

## Post 32216 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-07T00:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32216#p32216 | page 12 | era: pre-1.18.1 -->

I am still in search of texture artists (see: someone who can make both RGB and Indexed PNGs to be used by the client's finicky criteria) who wish to make HD versions of Turtle custom skins, mounts, etc.

## Post 32217 by Lorencor — 2023-01-07T00:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32217#p32217 | page 12 | era: pre-1.18.1 -->

Hello all,

I'm going to start a mission to adjust the Tauren Spirit Walker skin for this Turtle HD patch. I don't have much knowledge in this, I have knowledge in programming (I don't know if that can help with anything).

Redmagejoe, I might need some tips from you, and I'll be asking about a few things as this change goes on. Maybe in discord or in game.

I don't know if this will be possible either or if the result will be perfect, but I will try doing my best.
Thanks.

[![Image](https://i.postimg.cc/jjL1KhCH/Wo-WScrn-Shot-010623-210310.png)](https://postimg.cc/NyvDkm6F)

## Post 32226 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-07T06:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32226#p32226 | page 12 | era: pre-1.18.1 -->

Programming is not the issue, I'm afraid. If you cannot create a PNG from scratch, or modify existing BLPs (converted into PNG to be worked with) the HD patch uses to look like HD versions of the skins you're trying to fix (like Tauren Spirit Walker), then there is nothing you or I can do. It is a simple issue of vanilla textures being stretched over HD models. We need HD textures that currently don't exist.

Art is what is needed. An artist is what we need to improve the HD patch.

## Post 32237 by Reploidrocsa (Bug Report Enthusiast) — 2023-01-07T13:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32237#p32237 | page 12 | era: pre-1.18.1 -->

can we get everything the HD patch offers (spells, hd monster models, etc.) except with the 10 playable races?

## Post 32248 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-07T19:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32248#p32248 | page 12 | era: pre-1.18.1 -->

New version is out, linked on the first post, with several bug fixes.

## Post 32289 by Alsharpton0 — 2023-01-08T18:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32289#p32289 | page 12 | era: pre-1.18.1 -->

[embed: https://s9e.github.io/iframe/2/imgur.min.html#OpCTPF5]

this mount is bugged i think

## Post 32295 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-08T21:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32295#p32295 | page 12 | era: pre-1.18.1 -->

Odd. That's the Immortal Charger? That worked last time I checked. I will look into it.

## Post 32335 by Nozdormus — 2023-01-09T14:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32335#p32335 | page 12 | era: pre-1.18.1 -->

Hello!
Ty for greate work. HD is really looking good.
But there is some things that blow up my eyes and ears.
patch-A.MPQ  include : Legion Character + World Models / Music Pack / Spell Effects.
Can i somehow turn off Spell effects and music pack ? Wanna only hd models.

## Post 32372 by Akalix (Turtle WoW Team) [STAFF] — 2023-01-10T06:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32372#p32372 | page 12 | era: pre-1.18.1 -->

Hello!

Would like to report the store mount "Swift Alliance Steed" looks quite odd in the pack.
![Image](https://i.imgur.com/xXVQl2J_d.webp?maxwidth=760&fidelity=grand)

I would recommend the [Reins of the Vicious War Steed](https://wowpedia.fandom.com/wiki/Reins_of_the_Vicious_War_Steed) as a replacement model, which is from Cataclysm.

## Post 32402 by Vahlok — 2023-01-10T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32402#p32402 | page 12 | era: pre-1.18.1 -->

Hello!!
Regarding the unsheath/sheathing issue, i've found something interesting as heck. Apparently the female trolls are able to unsheath and sheath their weapons just fine with the HD patch whereas other races don't have this, is it possible that someone or the gracious mod author could look into why the female trolls can whilst others cannot? - It could be that the former mod author that had this pack simply just wasn't finished with some scripts?

Just throwing in a heads up and hoping it'd make an improvement! :> <3

## Post 32436 by Vahlok — 2023-01-11T09:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32436#p32436 | page 12 | era: pre-1.18.1 -->

Races that 'can' use sheathing animations currently are as follows.
 - Orc Female
 - Troll Female
 - Forsaken Male
 - Gnome Female
 - Tauren Male
 - Goblin Male & Female (No new models)
 - High Elf Male & Female (No new models)

## Post 32676 by Mixxl — 2023-01-17T15:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32676#p32676 | page 12 | era: pre-1.18.1 -->

I just connected a second screen to my computer, and all of a sudden, the main display stays black whenever I am trying to start Turtle WoW. Was there anybody having the same issue with this? I want to eliminate any source of problems regarding this patch before reinstalling TurtleWoW.

## Post 32678 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-17T17:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32678#p32678 | page 12 | era: pre-1.18.1 -->

> **Mixxl wrote: Tue Jan 17, 2023 3:34 pm**
> I just connected a second screen to my computer, and all of a sudden, the main display stays black whenever I am trying to start Turtle WoW. Was there anybody having the same issue with this? I want to eliminate any source of problems regarding this patch before reinstalling TurtleWoW.

This issue is unrelated to the HD Patch. Please post in the appropriate support section.

## Post 32704 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-18T08:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32704#p32704 | page 12 | era: pre-1.18.1 -->

New version up: Added NO_DUPLICATE flags to a number of SoundEntries that prevent ear-rape when using the unhacked binary to remove sound channel limit.

## Post 32716 by Drummbass — 2023-01-18T13:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32716#p32716 | page 12 | era: pre-1.18.1 -->

I did tryed this HD patch a month ago but i quickly ran into two issues which kinda forced me to remove it.
Issue 1: Whenever i click to fly ( regardless from destination A to B ) my client will crash at some point During the flight. I log back in and will continue flying ,  landing as nothing ever happened. It always crashes but only once ( very wierd bug ) .
Issue 2: whenever a paladin casts concecretion i see the new improved animation which is very appreciated and it looks awesome ( 10/10) but the animation never stops, it loops indefinitely until i reload my ui or relog.

I have no clue should I write my issues here, but desided to share my experience. I also fully understand its non profit community driven project and the intent of this post is not to bash or be mean about it, but rather can anyone help me to fix my issues so that I can enjoy the good looking textures

## Post 32742 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-18T20:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32742#p32742 | page 12 | era: pre-1.18.1 -->

Both of those issues are unrelated to the HD patch. The first was due to a memory issue resolved by using the 4gb RAM patch for WoW.exe which is becoming more and more necessary even for base Turtle with new assets being added. The second was an issue that came about due to a graphics configuration issue I believe had a solution posted last year.

## Post 33004 by Pandarini3 — 2023-01-23T13:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33004#p33004 | page 12 | era: pre-1.18.1 -->

Sadly the 4GB patch does not fix the crashes. Even after installing it still crashes when approaching cities with many people, BB, SW or Org are all crashes

## Post 33043 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-23T20:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33043#p33043 | page 12 | era: pre-1.18.1 -->

I have yet to have memory-related crashes using the latest WoWFOV.exe and the latest version of my HD patch. Please be sure that you are using the latest patch-A and patch-B from the first post (check the date), and that you are using WoWFOV.exe, not WoW.exe.

## Post 33059 by Axes — 2023-01-24T01:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33059#p33059 | page 12 | era: pre-1.18.1 -->

For some reason when I try to download "patch-A.MPQ" whenever I reach about 70-80% the download collapse and got to start again from 0. I was able to download "patch-B.MPQ" with no problems.

Idk if it just me, GDrive dowloads are pretty slow, but a file constantly failing when trying to download it, that's a first to me. Well, if you have any idea why, or a suggestion I would be graceful. Thanks.

## Post 33345 by Eazykalibos — 2023-01-28T13:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33345#p33345 | page 12 | era: pre-1.18.1 -->

There seems to be issue with Quel Dorei Meditation, it doesnt have animation

## Post 33347 by Eazykalibos — 2023-01-28T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33347#p33347 | page 12 | era: pre-1.18.1 -->

Bug with NPC called Yur Dragonfist, he doesnt have face.

## Post 33364 by Madlivzz — 2023-01-28T16:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33364#p33364 | page 12 | era: pre-1.18.1 -->

Bug with the angel of death npc, it looks wrong, the npc we respawn when we die

## Post 33379 by Nain000 — 2023-01-28T19:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33379#p33379 | page 12 | era: pre-1.18.1 -->

Hello,

I spotted a bugged texture for Dwarfs who the skin colour with war paints.

Seems the skin is bugged. Would it be possible fixable or difficult ? Like making those skins appear as normal skins choices instead of ones with warpaints.

Kind regards

Love this mod, would be awesome if this was fixed

## Post 33381 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-28T20:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33381#p33381 | page 12 | era: pre-1.18.1 -->

> **Eazykalibos wrote: Sat Jan 28, 2023 1:22 pm**
> There seems to be issue with Quel Dorei Meditation, it doesnt have animation

Known. I don't know how SpellVisualsKit.dbc works so I can't really begin fixing it.

> **Eazykalibos wrote: Sat Jan 28, 2023 1:47 pm**
> Bug with NPC called Yur Dragonfist, he doesnt have face.

If it's a custom Turtle NPC, this is known. They use prebaked textures they make themselves, rather than utilizing generic resources. This makes it impossible to have an HD version of it unless the team made the assets themselves, which they likely wouldn't.

> **Madlivzz wrote: Sat Jan 28, 2023 4:57 pm**
> Bug with the angel of death npc, it looks wrong, the npc we respawn when we die

Unable to be reproduced. Works correctly for me and many others. I've only seen 1 or 2 other people mention this, and I have no way of knowing what people are doing differently to achieve this effect. Graphics card / driver differences, possibly.

> **Nain000 wrote: Sat Jan 28, 2023 7:49 pm**
> I spotted a bugged texture for Dwarfs who the skin colour with war paints.
>
>  Seems the skin is bugged. Would it be possible fixable or difficult ? Like making those skins appear as normal skins choices instead of ones with warpaints.

Mentioned before and known. Issue is similar to above. It cannot be fixed unless someone makes actual art assets for the custom Turtle assets. Mod works by replacing files from future expansions. These custom skins never existed in future expansions, therefore the files don't exist. This occurs because old textures are being wrapped around new models. No fix unless you can convince staff to make HD art assets.

## Post 33479 by Klen — 2023-01-29T18:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33479#p33479 | page 12 | era: pre-1.18.1 -->

![Image](https://i.gyazo.com/c34ac7c497eb890e2e04b71e92a7c729.png)
Texture bug is still going, wowfov or wow.exe    crying_turtle

## Post 33509 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-29T21:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33509#p33509 | page 12 | era: pre-1.18.1 -->

> **Klen wrote: Sun Jan 29, 2023 6:56 pm**
> Texture bug is still going

And it forever will until I announce that any artists exist on this project. I may add another disclaimer to the top of the first post with how often I've had to address this question.

## Post 34203 by Skate — 2023-02-06T23:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34203#p34203 | page 12 | era: pre-1.18.1 -->

Hi, outstanding work!

Is there any chance, that we could get a HD cata character models only patch, without the spell effects?

Kind Regards

## Post 34210 by Redmagejoe (Grandmaster of Forum PvP) — 2023-02-07T06:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34210#p34210 | page 12 | era: pre-1.18.1 -->

> **Skate wrote: Mon Feb 06, 2023 11:56 pm**
> Is there any chance, that we could get a HD cata character models only patch, without the spell effects?

Read the first post.

## Post 34222 by Skate — 2023-02-07T09:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34222#p34222 | page 12 | era: pre-1.18.1 -->

Oh okay, my bad. Thanks for answering regardless.

## Post 35148 by Lokens — 2023-02-18T04:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35148#p35148 | page 12 | era: pre-1.18.1 -->

The screen for creating the Dwarf race, you can see yellow-black stripes instead of half the snow
Also, all 3 skins for the night elf in the store without a face
Friend thank you very much for this mod, it's very nice to play with it

## Post 35249 by Imhitchens — 2023-02-19T19:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35249#p35249 | page 12 | era: pre-1.18.1 -->

I'm having issues where some animals (notably hunter pets) like horses and wolves have broken models/textures (big spikes as if points on the model stretches into infinity).

I'm using the latest patch, and the turtle wow client version from the direct download link on turtle wow's site.

Deleting WDB doesn't solve it.

Anyone else experiencing this issue?

## Post 35250 by Chaozer — 2023-02-19T19:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35250#p35250 | page 12 | era: pre-1.18.1 -->

Thanks for all your efforts! Really nice job!

Just wanted to report that "Crusader Strike" for paladins now instead show the "Seal of the Crusader" icon. Also when crusader strike is used on an enemy the debuff isnt showing because the icon isnt there anymore (the debuff is however applied so no problem there).

Thanks

## Post 35324 by Redmagejoe (Grandmaster of Forum PvP) — 2023-02-20T03:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35324#p35324 | page 13 | era: pre-1.18.1 -->

> **Chaozer wrote: Sun Feb 19, 2023 7:42 pm**
> Thanks for all your efforts! Really nice job!
>
>  Just wanted to report that "Crusader Strike" for paladins now instead show the "Seal of the Crusader" icon. Also when crusader strike is used on an enemy the debuff isnt showing because the icon isnt there anymore (the debuff is however applied so no problem there).
>
>  Thanks

This does not sound like an issue related to my patch. Please delete your WDB and get the latest version of the patch.

## Post 35460 by Chaozer — 2023-02-20T16:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35460#p35460 | page 13 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Feb 20, 2023 3:09 am**
> > **Chaozer wrote: Sun Feb 19, 2023 7:42 pm**
> > Thanks for all your efforts! Really nice job!
> >
> >  Just wanted to report that "Crusader Strike" for paladins now instead show the "Seal of the Crusader" icon. Also when crusader strike is used on an enemy the debuff isnt showing because the icon isnt there anymore (the debuff is however applied so no problem there).
> >
> >  Thanks
>
>  This does not sound like an issue related to my patch. Please delete your WDB and get the latest version of the patch.

You are right! I had downloaded some other HD pack (for spells etc), thanks for pointing me in the right direction.

## Post 35520 by Remorsx (Barrens Chat Casualty) — 2023-02-20T21:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35520#p35520 | page 13 | era: pre-1.18.1 -->

ok so for everyone who ABSOLUTELY HATES the new undead models like i do here is the quick solution - download mpq editor and remove "character-scourge" from patch A
you can also remove all the voidwalker attack sounds or anything else u dont like

con is undead npc will be screwed but who cares right

## Post 35873 by Molox — 2023-02-23T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35873#p35873 | page 13 | era: pre-1.18.1 -->

Dude, can I ask you for help? It will not make it difficult for you to make a patch - only character models. Let the rest remain as it was.

## Post 35883 by Redmagejoe (Grandmaster of Forum PvP) — 2023-02-24T04:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35883#p35883 | page 13 | era: pre-1.18.1 -->

> **Molox wrote: Thu Feb 23, 2023 11:38 pm**
> Dude, can I ask you for help? It will not make it difficult for you to make a patch - only character models. Let the rest remain as it was.

Read the first post. If it is not difficult, then I am sure you can do it. My hands are full as it is. This took a lot of time and energy and learning the inner workings of the WoW client, and I'm not being reimbursed for this. If you don't like it as it is, don't use it. If you do like it, I'm happy, enjoy.

Do NOT start twisting my arm, however. If people continue to read the first post and ask for these patches despite me having mentioned it a dozen times in this thread before making that red header at the top, and get PUSHY about it, I will simply remove the downloads wholesale.

## Post 36095 by Zhilo — 2023-02-25T19:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36095#p36095 | page 13 | era: pre-1.18.1 -->

Hey, just tried out the patch, and its a great improvement from the old graphics. Some hiccups here and there but what can you do. I wanted to ask, are there any plans to update the Gnoll models? gnolls didnt get new models until dragonflight i think, and I don't know if you have access to dragonflight MPQs, so I have no idea if it's something to hope for in the future.

It's only really something i bring up because of the gnoll illusion in the turtle store, I already play as a "gnoll" shaman often and it would be sick if It could look like one of the newer models.

Then again, it's probably troublesome to ask for stuff beyond Legion, I don't know. Figured i'd just ask.

## Post 36097 by Remorsx (Barrens Chat Casualty) — 2023-02-25T20:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36097#p36097 | page 13 | era: pre-1.18.1 -->

> **Molox wrote: Thu Feb 23, 2023 11:38 pm**
> Dude, can I ask you for help? It will not make it difficult for you to make a patch - only character models. Let the rest remain as it was.

delete everything except the things u dont want its really that easy

its much easier for u to do it than for him to upload different versions of it

## Post 36103 by Redmagejoe (Grandmaster of Forum PvP) — 2023-02-25T21:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36103#p36103 | page 13 | era: pre-1.18.1 -->

> **Zhilo wrote: Sat Feb 25, 2023 7:33 pm**
> Hey, just tried out the patch, and its a great improvement from the old graphics. Some hiccups here and there but what can you do. I wanted to ask, are there any plans to update the Gnoll models? gnolls didnt get new models until dragonflight i think, and I don't know if you have access to dragonflight MPQs, so I have no idea if it's something to hope for in the future.
>
>  It's only really something i bring up because of the gnoll illusion in the turtle store, I already play as a "gnoll" shaman often and it would be sick if It could look like one of the newer models.
>
>  Then again, it's probably troublesome to ask for stuff beyond Legion, I don't know. Figured i'd just ask.

Unfortunately, Warlords of Draenor and onward finally retired the MPQ system and moved to something called CASC. In summary, rather than being easily navigated archives of files, these rely on fragmented data in a sort of heavily encrypted format. I do not have the know-how that the original author of the mod had to try to extract the relevant data and recompile it into files. It is hard enough to read CASC and one cannot easily pick the files they want out.

Because of this, I sadly do not have the means to acquire any new assets from versions past Mists of Pandaria. If someone were willing to figure it out and do the legwork and downport these to vanilla, obviously I would be more than happy to implement them. Boars need the same treatment.

## Post 36109 by Zurgat — 2023-02-25T22:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36109#p36109 | page 13 | era: pre-1.18.1 -->

this is my dwarf now
![Image](https://i121.fastpic.org/big/2023/0226/8c/ee157dbac6e0e680f3c3b9aa8ca6078c.jpg)

## Post 36160 by Forumdweller (Patch Note Conspiracy Theorist) — 2023-02-26T12:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36160#p36160 | page 13 | era: pre-1.18.1 -->

> **Zurgat wrote: Sat Feb 25, 2023 10:23 pm**
> this is my dwarf now
>  ![Image](https://i121.fastpic.org/big/2023/0226/8c/ee157dbac6e0e680f3c3b9aa8ca6078c.jpg)

Nice, you go perfectly with the pig!

## Post 36162 by Forumdweller (Patch Note Conspiracy Theorist) — 2023-02-26T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36162#p36162 | page 13 | era: pre-1.18.1 -->

How would one go about removing a particular model and revert it to it's not HD counterpart?

Imo Night Elves look extremely goofy with the updated models and walk and jump like they have rickets:
[embed: https://www.youtube.com/embed/YeiD7gJYSpI]

(seriously, whats going on with his knees?)

Also I'd like to remove the undercity bats they make me feel dead inside.

## Post 36241 by Zurgat — 2023-02-27T01:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36241#p36241 | page 13 | era: pre-1.18.1 -->

> **Forumdweller wrote: Sun Feb 26, 2023 12:52 pm**
> Nice, you go perfectly with the pig!

i would like to have eyes.

## Post 36313 by Mikuart1 — 2023-02-27T16:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36313#p36313 | page 13 | era: pre-1.18.1 -->

> **Zurgat wrote: Mon Feb 27, 2023 1:09 am**
> > **Forumdweller wrote: Sun Feb 26, 2023 12:52 pm**
> > Nice, you go perfectly with the pig!
>
>  i would like to have eyes.

It's an issue from the skin color you can try to change it for the moment   satisfied_turtle_head

## Post 36495 by Remorsx (Barrens Chat Casualty) — 2023-03-01T15:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36495#p36495 | page 13 | era: pre-1.18.1 -->

> **Forumdweller wrote: Sun Feb 26, 2023 12:55 pm**
> How would one go about removing a particular model and revert it to it's not HD counterpart?
>
>  Imo Night Elves look extremely goofy with the updated models and walk and jump like they have rickets:
> [embed: https://www.youtube.com/embed/YeiD7gJYSpI]
>
>  (seriously, whats going on with his knees?)
>
>  Also I'd like to remove the undercity bats they make me feel dead inside.

i already said how to remove anything you dont like in the post above

## Post 36510 by Bittermens (Barrens Chat Casualty) — 2023-03-01T16:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36510#p36510 | page 13 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Feb 25, 2023 9:07 pm**
> > **Zhilo wrote: Sat Feb 25, 2023 7:33 pm**
> > Hey, just tried out the patch, and its a great improvement from the old graphics. Some hiccups here and there but what can you do. I wanted to ask, are there any plans to update the Gnoll models? gnolls didnt get new models until dragonflight i think, and I don't know if you have access to dragonflight MPQs, so I have no idea if it's something to hope for in the future.
> >
> >  It's only really something i bring up because of the gnoll illusion in the turtle store, I already play as a "gnoll" shaman often and it would be sick if It could look like one of the newer models.
> >
> >  Then again, it's probably troublesome to ask for stuff beyond Legion, I don't know. Figured i'd just ask.
>
>   Unfortunately, Warlords of Draenor and onward finally retired the MPQ system and moved to something called CASC. In summary, rather than being easily navigated archives of files, these rely on fragmented data in a sort of heavily encrypted format. I do not have the know-how that the original author of the mod had to try to extract the relevant data and recompile it into files. It is hard enough to read CASC and one cannot easily pick the files they want out.
>
>  Because of this, I sadly do not have the means to acquire any new assets from versions past Mists of Pandaria. If someone were willing to figure it out and do the legwork and downport these to vanilla, obviously I would be more than happy to implement them. Boars need the same treatment.

CASC Viewer as of recently still works on WoW, its just that blizzard went retarded and the folders and files everywhere
Even warcraft 3's most recent update had CASC Viewer working on it.

You can still download the latest version at the archive.org

## Post 36524 by Forumdweller (Patch Note Conspiracy Theorist) — 2023-03-01T16:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36524#p36524 | page 13 | era: pre-1.18.1 -->

> **Remorsx wrote: Wed Mar 01, 2023 3:08 pm**
> i already said how to remove anything you dont like in the post above

ty i did it

## Post 36531 by Cam88573 — 2023-03-01T17:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36531#p36531 | page 13 | era: pre-1.18.1 -->

It's shockingly easy if you just don't want the new models. I was able to download an MPQ editor and clear the "Character" Folder. Now it has all updated models and textures subtract the post draenor character models! If you all are really unwilling to dm me on the forums and I'll work on creating a custom patch that maintains more of the classic textures within the game!

## Post 36740 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-03T17:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36740#p36740 | page 13 | era: pre-1.18.1 -->

New version release with improved SoundEntries with no_duplicate flags added to avoid earrape. Various other minor improvements.

## Post 36759 by Bittermens (Barrens Chat Casualty) — 2023-03-03T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36759#p36759 | page 13 | era: pre-1.18.1 -->

Redmage would you like to test the new model shoulder and helmet models into the hd pack?
there is a quite small misalignment with  the vanilla helmet and shoulder models with the hd pack, i think replacing them with the ones from retail may fix this issue.

## Post 36770 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-04T01:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36770#p36770 | page 13 | era: pre-1.18.1 -->

Do you have the required assets that have been downported to vanilla for me to apply directly to my HD pack?

## Post 36771 by Forumdweller (Patch Note Conspiracy Theorist) — 2023-03-04T01:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36771#p36771 | page 13 | era: pre-1.18.1 -->

> **Remorsx wrote: Wed Mar 01, 2023 3:08 pm**
> i already said how to remove anything you dont like in the post above

hi again. so I've been messing with the files a bit trying to figure out why, that when i delete the night elf folder in attempt to revert them to the old models, female nelves are missing hair on their scalp and some of their facial markings are on random places on the body i.e their ears. I've tried deleting files individually to in a reductionist attempt to isolate the behaviour of each file but to no avail... can you help me with this? basically i just want the original nelf models (in addition to turtles custom stuff) and the HD druid forms.

## Post 36773 by Remorsx (Barrens Chat Casualty) — 2023-03-04T02:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36773#p36773 | page 13 | era: pre-1.18.1 -->

> **Forumdweller wrote: Sat Mar 04, 2023 1:30 am**
> > **Remorsx wrote: Wed Mar 01, 2023 3:08 pm**
> > i already said how to remove anything you dont like in the post above
>
>   hi again. so I've been messing with the files a bit trying to figure out why, that when i delete the night elf folder in attempt to revert them to the old models, female nelves are missing hair on their scalp and some of their facial markings are on random places on the body i.e their ears. I've tried deleting files individually to in a reductionist attempt to isolate the behaviour of each file but to no avail... can you help me with this? basically i just want the original nelf models (in addition to turtles custom stuff) and the HD druid forms.

i have no idea honestly i just did what i described and it worked for removing the new undead models

## Post 36783 by Nervouswisp — 2023-03-04T06:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36783#p36783 | page 13 | era: pre-1.18.1 -->

Oh dear God, what did I do
[https://cdn.discordapp.com/attachments/ ... /image.png](https://cdn.discordapp.com/attachments/1079579746041614428/1081468415623053362/image.png)

## Post 36790 by Bittermens (Barrens Chat Casualty) — 2023-03-04T11:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36790#p36790 | page 13 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Mar 04, 2023 1:19 am**
> Do you have the required assets that have been downported to vanilla for me to apply directly to my HD pack?

if vanilla and wrath still uses the same .m2 model format, the legion to wrath conversor may work on it
[https://model-changing.net/index.php?ap ... view&id=62](https://model-changing.net/index.php?app=downloads&module=downloads&controller=view&id=62)

i wish they were more active, the upscaled assets i posted there had no news yet

## Post 36796 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-04T14:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36796#p36796 | page 13 | era: pre-1.18.1 -->

They do not use the same format. There is a rather unreliable tool that requires the skins and anims and squishes them directly into the m2, but it is not without a level of Your Mileage May Vary.

## Post 36931 by Clarithium — 2023-03-06T00:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36931#p36931 | page 13 | era: pre-1.18.1 -->

I'm using the environment pack and it works well. I personally think the music and sound changes are a total downgrade from vanilla. My shaman sounds like it's shooting sci fi laser beams instead of lightning bolts, and the modern wow music is plodding without any personality

## Post 37024 by Raccoonsnax — 2023-03-07T00:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37024#p37024 | page 13 | era: pre-1.18.1 -->

Hi there, thanks for your work on this patch.

I wanted to disable some of the models, so I opened patch-A in an MPQ editor.

When playing with HD, the male night elf facial hair option that is a long goatee (you will soon see) distorts the texture on the face. This is a known problem with custom twow options, and extends to all nelf male npcs, so I deleted the night elf creature folder hoping it would work.

However, the vanilla model now looks like this:

[https://media.discordapp.net/attachment ... /image.png](https://media.discordapp.net/attachments/988866055222984744/1082141756138733628/image.png)

With the same red face markings. And the night elf male npcs all have mismatched faces too.

Is there something in the files I can change to "unlink" this texture map from the game? I just want to use the base night elf models while playing with everything else on HD. Thank you for your time.

EDIT: I should say I'm willing to tinker around to fix things. If it's a matter of needing a new texture created, I can do that if I have some guidelines.

## Post 37172 by Elenar (Patch Note Conspiracy Theorist) — 2023-03-08T18:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37172#p37172 | page 13 | era: pre-1.18.1 -->

I don't know about you, but those Legion models suck. Patch B file with textures is good tho.

## Post 37237 by Bittermens (Barrens Chat Casualty) — 2023-03-09T13:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37237#p37237 | page 13 | era: pre-1.18.1 -->

> **Elenar wrote: Wed Mar 08, 2023 6:17 pm**
> I don't know about you, but those Legion models suck. Patch B file with textures is good tho.

Legion models are good, the only issue is the skin mismatch due to tw adding custom content like forest trolls, highborne skins and wildhammer dwarves, and some NPC's featuring custom skins, all of this could be fixed on turtle HD, but unfortunately outside kazgrim and redmage there is no dedicated modder for it to check and fix these with new skins, plus the knowledge of Turtle HD is little.

id be glad if they could add pre alpha female human long hair

## Post 37399 by Urric — 2023-03-11T15:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37399#p37399 | page 13 | era: pre-1.18.1 -->

Hi.
Is there a chance that the issue with sheathing/unsheathing weapons will be resolved with this patch?
As a roleplayer, this bug really annoys me, and I will put it off until it is fixed.

## Post 37416 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-11T20:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37416#p37416 | page 13 | era: pre-1.18.1 -->

> **Urric wrote: Sat Mar 11, 2023 3:22 pm**
> Hi.
>  Is there a chance that the issue with sheathing/unsheathing weapons will be resolved with this patch?
>  As a roleplayer, this bug really annoys me, and I will put it off until it is fixed.

Can't be fixed.

## Post 37431 by Pothi — 2023-03-11T23:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37431#p37431 | page 13 | era: pre-1.18.1 -->

Guys anyone with knowledge could look into the Procedural water mod from the 3.3.5a version and if its possible to work on 1.12?

## Post 37433 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-11T23:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37433#p37433 | page 13 | era: pre-1.18.1 -->

> **Pothi wrote: Sat Mar 11, 2023 11:24 pm**
> Guys anyone with knowledge could look into the Procedural water mod from the 3.3.5a version and if its possible to work on 1.12?

It was linked in this thread many pages ago, and when I tried it it simply did not work. It changed all water into textureless white void.

## Post 37475 by Bittermens (Barrens Chat Casualty) — 2023-03-12T18:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37475#p37475 | page 13 | era: pre-1.18.1 -->

Good news, Ladik is alive and his github was updated 6days ago.
Maybe he will be dropping a new CASC viewer update for dragonflight soon, all it needs now is his website back online.

## Post 37484 by Nico79486 — 2023-03-12T20:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37484#p37484 | page 13 | era: pre-1.18.1 -->

This is a really good maj, ty for that !

## Post 37678 by W3w3w9 — 2023-03-14T11:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37678#p37678 | page 14 | era: pre-1.18.1 -->

2 little questions. Why some of races skin colors, like troll or dworf turn models into dirt? Why orc models is low res?

## Post 37723 by Ardur — 2023-03-14T15:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37723#p37723 | page 14 | era: pre-1.18.1 -->

Just wanted to say thank you for your efforts you put into this HD Mod, its a bliss to play with it on this Server (-:

## Post 37742 by Landoperk1 — 2023-03-14T18:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37742#p37742 | page 14 | era: pre-1.18.1 -->

Thanks for all the effort into these patches.

There's something in patch-A that causes aoe effects to stay on screen until you change maps or restart the client.
I've tested this with a fresh client download from TWoW and it's isolated to patch-A. I might have missed this posted already but I could not find anything.
![Image](https://cdn.discordapp.com/attachments/691438750185553950/1070752443132022795/image.png)

## Post 37761 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-14T20:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37761#p37761 | page 14 | era: pre-1.18.1 -->

> **Landoperk1 wrote: Tue Mar 14, 2023 6:15 pm**
>

Unrelated to the patch. Happens randomly to players on base game too.

## Post 37762 by Landoperk1 — 2023-03-14T20:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37762#p37762 | page 14 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Mar 14, 2023 8:31 pm**
> > **Landoperk1 wrote: Tue Mar 14, 2023 6:15 pm**
> >
>
>   Unrelated to the patch. Happens randomly to players on base game too.

Thanks for the reply.
Not arguing, just providing my experience.
Once Patch-A get's placed into a fresh data directory(no other modifications to the client/interface) the bug appears.
Remove Patch-A, bug disappears.

## Post 37779 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-14T23:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37779#p37779 | page 14 | era: pre-1.18.1 -->

Try deleting your cache to see if this resolves the issue.

## Post 37783 by Ardur — 2023-03-14T23:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37783#p37783 | page 14 | era: pre-1.18.1 -->

> **W3w3w9 wrote: Tue Mar 14, 2023 11:44 am**
> 2 little questions. Why some of races skin colors, like troll or dworf turn models into dirt? Why orc models is low res?

I noticed the same with the resolution/texture quality, not only for Orc Models but also Dwarves

## Post 37993 by Gullhc — 2023-03-16T15:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37993#p37993 | page 14 | era: pre-1.18.1 -->

> **Landoperk1 wrote: Tue Mar 14, 2023 6:15 pm**
> Thanks for all the effort into these patches.
>
>  There's something in patch-A that causes aoe effects to stay on screen until you change maps or restart the client.
>  I've tested this with a fresh client download from TWoW and it's isolated to patch-A. I might have missed this posted already but I could not find anything.
>  ![Image](https://cdn.discordapp.com/attachments/691438750185553950/1070752443132022795/image.png)

Same Problem here. Tried several times and its 100% related to patch-A.

## Post 38016 by Glarthir (Barrens Chat Casualty) — 2023-03-16T18:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38016#p38016 | page 14 | era: pre-1.18.1 -->

In theory, how hard would it be to convert the custom skins to HD? For example the hair colors. If I recoloured the vanilla hairs to fit the ones in this patch, would it be easy for you to include them? I'm not the best visual artist, but if you can give some pointers along the way, I'd be willing to give it a go :D

## Post 38035 by Bittermens (Barrens Chat Casualty) — 2023-03-16T22:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38035#p38035 | page 14 | era: pre-1.18.1 -->

> **Glarthir wrote: Thu Mar 16, 2023 6:00 pm**
> In theory, how hard would it be to convert the custom skins to HD? For example the hair colors. If I recoloured the vanilla hairs to fit the ones in this patch, would it be easy for you to include them? I'm not the best visual artist, but if you can give some pointers along the way, I'd be willing to give it a go :D

Custom skins we see now exists in retail too

## Post 38040 by Xigbclutchix — 2023-03-16T23:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38040#p38040 | page 14 | era: pre-1.18.1 -->

Seems like the Swift Grey Steed mount texture is broken, is it possible to fix?

Image of it: ![Image](https://i.imgur.com/DgBKSSU.png)

## Post 38046 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-17T03:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38046#p38046 | page 14 | era: pre-1.18.1 -->

If current custom skins exist in retail, they would need to be extracted from CASC, downported for vanilla, and then I could attempt to add them to patch-A.

> **Gullhc wrote: Thu Mar 16, 2023 3:51 pm**
> Same Problem here. Tried several times and its 100% related to patch-A.

This has been addressed a number of times, and while I am not saying that it is not happening before applying patch-A and then happening after patch-A, I can assure you that this issue is not exclusive to or caused 100% consistently to all players by applying patch-A. Staff addressed these complaints on and off long before my patch was made available, and an exact cause was never narrowed down. Some combination of graphics settings, cache clearing, and other unknown variables seem to cause this.

I have a friend who has with and without patch-A had this issue at various times over the last year, seemingly with no rhyme or reason. I myself had it happen a sum total of one time in my year of playing here, without the use of my own patch, and it lasted for approximately one day. I still do not know what caused or solved the problem.

## Post 38077 by Zielarka — 2023-03-17T12:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38077#p38077 | page 14 | era: pre-1.18.1 -->

Hello I have a question. I have the same visual bug that is mentioned above (with spell effects staying forever) which makes it impossible to raid with that addon.

Does anyone have the older version of patch A? Maybe having an older version would remove the bug for me...

## Post 38119 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-17T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38119#p38119 | page 14 | era: pre-1.18.1 -->

************ UPDATE ************
New version of patch-A is available for download. Finally narrowed down the majority of High Elf "invisible paper doll" (dressing room and character sheet) issues, as well as a number of crashes, and added even more NO_DUPLICATES flags to sounds to cut down on earrape. There are still no artists to provide HD textures for custom skins and Warlords-deprecated mounts, so please do not ask about these unless you are willing to volunteer an artist.
 ************ UPDATE 2 ************
Another minor fix that addresses Azuresong Mageblade being invisible by removing a corrupted enchantment glow particle effect.  With this, the only remaining issues should be missing HD textures for custom or deprecated content.

## Post 38129 by Bittermens (Barrens Chat Casualty) — 2023-03-17T23:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38129#p38129 | page 14 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Mar 17, 2023 3:55 am**
> If current custom skins exist in retail, they would need to be extracted from CASC, downported for vanilla, and then I could attempt to add them to patch-A.
>
> > **Gullhc wrote: Thu Mar 16, 2023 3:51 pm**
> > Same Problem here. Tried several times and its 100% related to patch-A.
>
>   This has been addressed a number of times, and while I am not saying that it is not happening before applying patch-A and then happening after patch-A, I can assure you that this issue is not exclusive to or caused 100% consistently to all players by applying patch-A. Staff addressed these complaints on and off long before my patch was made available, and an exact cause was never narrowed down. Some combination of graphics settings, cache clearing, and other unknown variables seem to cause this.
>
>  I have a friend who has with and without patch-A had this issue at various times over the last year, seemingly with no rhyme or reason. I myself had it happen a sum total of one time in my year of playing here, without the use of my own patch, and it lasted for approximately one day. I still do not know what caused or solved the problem.

Blizzard Added wildhammer NPC's and even some of the custom skins of now as npc and player customization, those can be added off it.

## Post 38146 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-18T02:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38146#p38146 | page 14 | era: pre-1.18.1 -->

Again, I cannot add them unless someone provides me with the downported assets. I don't have the means to do that.

## Post 38380 by Realtack — 2023-03-20T19:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38380#p38380 | page 14 | era: pre-1.18.1 -->

Hey there! I have a bug as a warrior. when sheathing and unsheathing my weapon it does the animation but not actually grabbing the weapons or putting them back.
Is this a common bug and how to fix?

## Post 38390 by Jackless89 — 2023-03-20T20:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38390#p38390 | page 14 | era: pre-1.18.1 -->

> **Realtack wrote: Mon Mar 20, 2023 7:06 pm**
> Hey there! I have a bug as a warrior. when sheathing and unsheathing my weapon it does the animation but not actually grabbing the weapons or putting them back.
>  Is this a common bug and how to fix?

Yes i have the same glitch with my paladin. Not a huge deal though.

## Post 38395 by Realtack — 2023-03-20T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38395#p38395 | page 14 | era: pre-1.18.1 -->

> **Jackless89 wrote: Mon Mar 20, 2023 8:19 pm**
> > **Realtack wrote: Mon Mar 20, 2023 7:06 pm**
> > Hey there! I have a bug as a warrior. when sheathing and unsheathing my weapon it does the animation but not actually grabbing the weapons or putting them back.
> >  Is this a common bug and how to fix?
>
>   Yes i have the same glitch with my paladin. Not a huge deal though.

I hope this can be fixed, other than that the hd patch is awesome.

## Post 38498 by Grauhase — 2023-03-21T21:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38498#p38498 | page 14 | era: pre-1.18.1 -->

Thank you so much! I just cant play anymore without your patch ;)

## Post 38504 by Jraie — 2023-03-21T22:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38504#p38504 | page 14 | era: pre-1.18.1 -->

Not sure if this is a bug or how exactly to report it as it really only seems like its affecting some colors, But for things like Guild tabards, they are showing up bright pink rather then their intended colors after installing both files.

![Image](https://media.discordapp.net/attachments/280092806016532481/1087601297609478165/image.png?width=362&height=449)

That tabard is normally dark purple/gold for example.

## Post 38512 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-22T00:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38512#p38512 | page 14 | era: pre-1.18.1 -->

What is the guild?  I'll see if I can reproduce it in-game with one of your members.

## Post 38553 by Realtack — 2023-03-22T08:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38553#p38553 | page 14 | era: pre-1.18.1 -->

Will sheathing and unsheathing be fixed in a future patch or is it not doable for you?
It's the only thing stopping me to use this. Which I pity so much because I love the work you put into this man!

## Post 38559 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-22T08:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38559#p38559 | page 14 | era: pre-1.18.1 -->

The animations can't be properly downported which is why they weren't in the original mod I inherited from the original author before making it Turtle compatible. The future sheathing and unsheathing animations are likely too complex to properly downport to the very stiff vanilla animations, or the conversion process simply did not work for whatever reason.

Regardless, nothing from Warlords+ can be ported unless someone is able to reliably navigate the CASC system and pull the necessary assets to even attempt to re-downport. For all I know, the original author manually downported everything himself rather than using an automated tool.

## Post 38622 by Realtack — 2023-03-22T16:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38622#p38622 | page 14 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed Mar 22, 2023 8:56 am**
> The animations can't be properly downported which is why they weren't in the original mod I inherited from the original author before making it Turtle compatible. The future sheathing and unsheathing animations are likely too complex to properly downport to the very stiff vanilla animations, or the conversion process simply did not work for whatever reason.
>
>  Regardless, nothing from Warlords+ can be ported unless someone is able to reliably navigate the CASC system and pull the necessary assets to even attempt to re-downport. For all I know, the original author manually downported everything himself rather than using an automated tool.

But the animation is correct and working as intended, except that it's not grabbing the actual weapon in the hands.
Such a pity that this is hard to fix :(

## Post 38634 by Zer0cool — 2023-03-22T19:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38634#p38634 | page 14 | era: pre-1.18.1 -->

The model can't be fixed since the issue appeared in the vanilla models, which means editing and downgrading the model to work from early WoD to classic “broke” some “animations”. Even if  inspected in Blender, for some weird reason it wasn't working correctly. This was from an early stage and even some people from the model community couldn't find a solution.

The same model could work flawlessly in WotLK, but in vanilla it wouldn't. Balsh, who made the character models, had the exact same issue with the sheathing animation too. As it seems, @redmagejoe has done a good job “upgrading” to make it work with the newest classic version of the game. My official mod can be found [https://model-changing.net/index.php?ap ... llabs&id=9](https://model-changing.net/index.php?app=collab&module=collab&controller=collabs&id=9), but it's only for the classic 1.12 version of the game.

## Post 38641 by Realtack — 2023-03-22T19:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38641#p38641 | page 14 | era: pre-1.18.1 -->

> **Zer0cool wrote: Wed Mar 22, 2023 7:13 pm**
> The model can't be fixed since the issue appeared in the vanilla models, which means editing and downgrading the model to work from early WoD to classic “broke” some “animations”. Even if  inspected in Blender, for some weird reason it wasn't working correctly. This was from an early stage and even some people from the model community couldn't find a solution.
>
>  The same model could work flawlessly in WotLK, but in vanilla it wouldn't. Balsh, who made the character models, had the exact same issue with the sheathing animation too. As it seems, @redmagejoe has done a good job “upgrading” to make it work with the newest classic version of the game. My official mod can be found [https://model-changing.net/index.php?ap ... llabs&id=9](https://model-changing.net/index.php?app=collab&module=collab&controller=collabs&id=9), but it's only for the classic 1.12 version of the game.

Thanks for the explanation. That's such a pity though.
But nothing to do about it! Thank you both for the effort to publish this though.
Cheers

## Post 38662 by Jraie — 2023-03-22T23:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38662#p38662 | page 14 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed Mar 22, 2023 12:24 am**
> What is the guild?  I'll see if I can reproduce it in-game with one of your members.

Guild is "Greetings Enemy,"

## Post 39011 by Huma — 2023-03-25T10:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39011#p39011 | page 14 | era: pre-1.18.1 -->

Hello im loving the hd pack but im having insane FPS drops in zones like teldrassil when raining specially.... weather/environment effects is causing it since if i put wather effects at 0 the fps drops stops, can you check it? theres something that screw all the performance when theres rain/fog in some areas

*Last edited by Huma on Sun Mar 26, 2023 2:06 am, edited 2 times in total.*

## Post 39035 by Werefox (Patch Note Conspiracy Theorist) — 2023-03-25T16:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39035#p39035 | page 14 | era: pre-1.18.1 -->

Tried the patch, had multiple disconnects in a row. This might have been a coincidence as my network was weird that day, so - did anybody else have DC problem?

Also, severe performance drop under bad weather, just like Huma described.

## Post 39199 by Huma — 2023-03-26T19:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39199#p39199 | page 14 | era: pre-1.18.1 -->

Anyway to fix the fps drops caused by the weather? i can edit myself the mpq just tell me what files to remove

## Post 39224 by Telishuna — 2023-03-26T23:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39224#p39224 | page 14 | era: pre-1.18.1 -->

Casting the spell Brilliance Aura (from Mage Arcane talents) causes cubes to appear on the caster's hands. Likely a missing texture?

## Post 39796 by Bittermens (Barrens Chat Casualty) — 2023-03-31T20:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39796#p39796 | page 14 | era: pre-1.18.1 -->

[https://model-changing.net/index.php?ap ... iew&id=368](https://model-changing.net/index.php?app=downloads&module=downloads&controller=view&id=368)

Quite the good news nor only for TW but all other servers

## Post 39833 by Beeroism — 2023-04-01T05:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39833#p39833 | page 14 | era: pre-1.18.1 -->

Amazing work on this mod, I had no idea something like this was even possible.

Downloaded the latest version and I'm getting crashes when selecting a Tauren in the character creation screen:![Image](https://i.imgur.com/IYy41nO.png)

I searched the forums and saw a similar issue from about a year ago, but nothing recent. Please let me know if there's any other info I can give you to help troubleshoot!

Edit: I can't seem to reproduce this reliably - I just went into the character select screen again and went through various permutations of tauren horns and styles with no issues. Selected other races, no issues. Before this attempt the crash happened three times back to back.

*Last edited by Beeroism on Sat Apr 01, 2023 5:34 am, edited 1 time in total.*

## Post 39835 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-01T05:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39835#p39835 | page 14 | era: pre-1.18.1 -->

Cannot reproduce with latest version. I selected Character Creation and, on both male and female Tauren, hit Randomize roughly 100 times each to ensure it wasn't related to the old missing horn textures issue.

Perhaps it is something you are equipped with? Could you please link your character name or your Armory page so I can see if there's a problematic item?  Anything to help me narrow down problem items would be helpful.

## Post 39836 by Beeroism — 2023-04-01T05:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39836#p39836 | page 15 | era: pre-1.18.1 -->

I was actually trying the same thing just as you were replying and couldn't get it to happen again, after happening three times in a row. Here are the armory pages for the characters I've created:

<https://armory.turtlecraft.gg/#!/character/Waroly>
<https://armory.turtlecraft.gg/#!/character/Kirkland>
<https://armory.turtlecraft.gg/#!/character/Manastus>

## Post 39859 by Tony2trampolini — 2023-04-01T10:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39859#p39859 | page 15 | era: pre-1.18.1 -->

Hey, thanks for this great patch!

I do have one issue I've been unable to solve - the new sounds all sound like they have a very low bitrate / fidelity. The added background music, for example, its a bit crackly - almost like its been over-compressed into very low quality.

I am not sure if this is just me or if its something to do with my client. I've applied the .exe patches on this forum and have tried resetting my sound cache. The vanilla sounds (not from the mod) are still high fidelity and unaffected, its only the new music and sound effects.

## Post 39882 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-01T16:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39882#p39882 | page 15 | era: pre-1.18.1 -->

> **Tony2trampolini wrote: Sat Apr 01, 2023 10:50 am**
> Hey, thanks for this great patch!
>
>  I do have one issue I've been unable to solve - the new sounds all sound like they have a very low bitrate / fidelity. The added background music, for example, its a bit crackly - almost like its been over-compressed into very low quality.
>
>  I am not sure if this is just me or if its something to do with my client. I've applied the .exe patches on this forum and have tried resetting my sound cache. The vanilla sounds (not from the mod) are still high fidelity and unaffected, its only the new music and sound effects.

This is definitely not an issue with the patch, and may be something related to the sound channel limitation Turtle imposed on the EXE. I have an "unhack" solution posted on the Modding board somewhere that may resolve this.

## Post 39901 by Tony2trampolini — 2023-04-01T20:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39901#p39901 | page 15 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Apr 01, 2023 4:58 pm**
> > **Tony2trampolini wrote: Sat Apr 01, 2023 10:50 am**
> > Hey, thanks for this great patch!
> >
> >  I do have one issue I've been unable to solve - the new sounds all sound like they have a very low bitrate / fidelity. The added background music, for example, its a bit crackly - almost like its been over-compressed into very low quality.
> >
> >  I am not sure if this is just me or if its something to do with my client. I've applied the .exe patches on this forum and have tried resetting my sound cache. The vanilla sounds (not from the mod) are still high fidelity and unaffected, its only the new music and sound effects.
>
>   This is definitely not an issue with the patch, and may be something related to the sound channel limitation Turtle imposed on the EXE. I have an "unhack" solution posted on the Modding board somewhere that may resolve this.

The hex edits you suggested in your other thread ([viewtopic.php?t=5158](https://forum.turtlecraft.gg/viewtopic.php?t=5158)) fixed the issue for me! Thanks for the quick reply!

## Post 40182 by Crissclf — 2023-04-03T19:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40182#p40182 | page 15 | era: pre-1.18.1 -->

> **Geojak wrote: Wed Mar 23, 2022 9:46 pm**
> hi, how does the environment retexture compare to the other one posted on this forum?
>
>  [viewtopic.php?f=29&t=2496&sid=058da3d8c ... 111f1f4265](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2496)

i wonder the same thing, guess i should try both and compare

## Post 40345 by Nalfein — 2023-04-05T03:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40345#p40345 | page 15 | era: pre-1.18.1 -->

Hello,

I've been running into the ERROR #132 Fatal Exception error. I'm able to recreate it consistently when walking in Stormwind from the Magic Quarter to the Trade District. It occurs when exiting the tunnel that would lead towards the bank on the right. I've recreated the error at least 6 times consistently.

This only occurs when using the patch-A.MPQ. (I tested for patch-B.MPQ and it didn't trigger this error).

I've also run into this error less consistently in other parts of Stormwind (once when in the trade district running towards the flight path) and even a few times in Westfall. I have not run into the error in Darnassus, Ironforge, or their surrounding areas.

"ERROR #132 (0x85100084) Fatal Exception
Program:	D:\Turtle WoW\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:00713E26

The instruction at "0x00713E26" referenced memory at "0xC3C4C8F2".
The memory could not be "read"."

I hope this helps. Please let me know if you'd like more information from my end.

## Post 40369 by Somnusms — 2023-04-05T11:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40369#p40369 | page 15 | era: pre-1.18.1 -->

I was #132 also.

About 4 times.

Near by Goldshire.

## Post 40406 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-05T17:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40406#p40406 | page 15 | era: pre-1.18.1 -->

[viewtopic.php?f=3&t=6409&p=40400#p40400](https://forum.turtlecraft.gg/viewtopic.php?f=3&t=6409&p=40400#p40400)

I have had this same error at seemingly random times (crashing in the same place repeatedly, yet other times crashing once then not crashing again) with and without my patch, and it seems I am not the only person. I cannot be sure what about these two locations causes it.

## Post 40441 by Zsoltkanyo — 2023-04-05T23:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40441#p40441 | page 15 | era: pre-1.18.1 -->

I still have an issue with the nelf male black hair, the face texture of the character changes at every login. Does it has been fixed?

## Post 40455 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-06T01:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40455#p40455 | page 15 | era: pre-1.18.1 -->

> **Zsoltkanyo wrote: Wed Apr 05, 2023 11:49 pm**
> I still have an issue with the nelf male black hair, the face texture of the character changes at every login. Does it has been fixed?

I've gotten in touch with one of the client devs to ask if they'd be kind enough to take a look at it for me sometime, but they're very busy.  It may be a while.

## Post 40633 by Remorsx (Barrens Chat Casualty) — 2023-04-07T08:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40633#p40633 | page 15 | era: pre-1.18.1 -->

the same goes for female black hair btw

## Post 40705 by Astricon (Barrens Chat Casualty) — 2023-04-07T21:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40705#p40705 | page 15 | era: pre-1.18.1 -->

Idk if this is helpful but I replaced the green eyed high elf textures with the blue-eyed ones from official turtle wow. they're not high def but they look just as good as the green eyed version in this patch so I'm not sure what "high def" means in the rest of this conversation. I took a lot of effort to make sure everything is 1-1 so you see the same texture that everyone else will see with a very few exceptions.

 1. Skin color 4 for male and female were missing uncorrupted lips to go with it, so they would all have the same lips or, what I did instead was just copy skin color 2 onto all the skin color 4 options which is nearly the same tint but not exact.
 2. I discovered some issues from the official turtle wow textures that I took the liberty of fixing, such as upside-down scowl on the male high elf for some skin colors...this does mean that if you are unfortunate enough to make a character with that face/skin combo that other people without the mod will see your goofy smirk, but at least you won't come across it yourself ever. However, official textures for two of the female faces were swapped (if you cycle through two of the skin colors you'll see the face dramatically change one time) and I did leave that the same because you want to see what everyone else sees.
 3. I couldn't deal with the alpha channels from official textures from turtle wow which seem to play a minor role in making things work which is most likely why I couldn't get skin tone 4 to work. If anyone knows how to work with the alpha channel when changing back and forth between PNG and BLP I'm all ears. I just ended up making the alpha layer opaque and copy-pasting the relevant missing half of the texture from other faces. So all the textures I ended up using have no alpha functionality but you shouldn't notice the difference in game.
 4. I haven't tested with any skins from turtle shop. This is literally my 3rd day on turtle wow.

This is not as good as having high def I'm sure but at least it's an in-between solution? My next thing I want to do is fix the missing faces for forest trolls somehow in a similar way. I thiiiink it'll work.

[patch-A.MPQ](https://drive.google.com/file/d/1TVYVLtnCI7S_ApY1Oex_NVr0JcwhgCW3/view?usp=sharing)

## Post 40713 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-07T22:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40713#p40713 | page 15 | era: pre-1.18.1 -->

> **Astricon wrote: Fri Apr 07, 2023 9:24 pm**
>

This is, regardless of your concerns, incredibly helpful, and I will see if the other mentioned bugs can't be addressed. I will take a look at these when I find the time, but assuming they work sufficiently and with your permission, I would like to adapt this to Turtle HD, but will not do so without your explicit consent.

EDIT:  Upon thorough testing, I could not discover any of the issues you ran into with High Elves. They look great, and I would be greatly appreciative if you would allow me to incorporate this into the main patch.

## Post 40718 by Astricon (Barrens Chat Casualty) — 2023-04-08T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40718#p40718 | page 15 | era: pre-1.18.1 -->

yeah of course! use it and anything you want that I post in future--if i manage to figure out dbc editing haha

## Post 40719 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-08T00:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40719#p40719 | page 15 | era: pre-1.18.1 -->

> **Astricon wrote: Sat Apr 08, 2023 12:54 am**
> yeah of course! use it and anything you want that I post in future--if i manage to figure out dbc editing haha

I can give you pointers on that, depending on what you need to know.  I can tell you which DBCs affect which components of characters, and which rows to look for depending on what you're changing.

## Post 40720 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-08T01:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40720#p40720 | page 15 | era: pre-1.18.1 -->

************ UPDATE ************
New patch is available with High Elf eyes finally changed from green to blue, courtesy of Astricon. Also more NO_DUPLICATES flags added to sounds for use with the Increased Sound Channels binary unhack.

## Post 40723 by Gattare — 2023-04-08T02:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40723#p40723 | page 15 | era: pre-1.18.1 -->

That's great! As an High Elf player I waiting this for long time, thanks for your hard work!
Btw, have the models of the High Elves been upgraded to the Legion version as well? If not, do you have plan for this?

## Post 40725 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-08T02:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40725#p40725 | page 15 | era: pre-1.18.1 -->

I don't have access to them, sadly, and it would make even more work for Astricon or anyone else even if we could get those assets, since the blue high elf eyes textures would then have to be made from scratch.

## Post 40728 by Astricon (Barrens Chat Casualty) — 2023-04-08T05:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40728#p40728 | page 15 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Apr 08, 2023 12:58 am**
> > **Astricon wrote: Sat Apr 08, 2023 12:54 am**
> > yeah of course! use it and anything you want that I post in future--if i manage to figure out dbc editing haha
>
>   I can give you pointers on that, depending on what you need to know.  I can tell you which DBCs affect which components of characters, and which rows to look for depending on what you're changing.

I think I know the relevant DBC is CharSections, as I see references containing "ForestTroll" in the name, but my plan was to compare and find differences between patch-A and patch-3 CharSections and there are none. Tried just adding the patch-3 blps to the patch-A folder where they are referenced but that didn't do anything so I will have to tinker more or get tutored

## Post 40758 by Kendog0013 — 2023-04-08T09:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40758#p40758 | page 15 | era: pre-1.18.1 -->

Please good sir Astricon, figure the custom skins issue out for TurtleHD and ill buy you a coffee <3

## Post 40759 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-08T09:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40759#p40759 | page 15 | era: pre-1.18.1 -->

There should be some very minor differences in CharSections.dbc in reference to Tauren horns, but it may be a different DBC. It has been a while since I have tweaked player character files. I didn't really change any names of files referenced in the DBC. Essentially, it's just a matter of replacing the texture files with HD versions using the same file name.

This is why I have asserted throughout this thread that I need a texture artist. The only two options to address the broken custom skins on this patch are to either have new assets drawn from scratch / modified from an existing HD base, or simply duplicate a non-custom texture and rename it to a file name used by the custom skins. I don't really like this latter solution, since it sacrifices custom skins for the sake of making the HD patch "appear perfect", but I also understand the complaint people have about the janky looking faces. I have tried to leave the janky faces in to give the issue exposure in case it draws a potential artist to step forward.

## Post 40771 by Huma — 2023-04-08T14:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40771#p40771 | page 15 | era: pre-1.18.1 -->

i preffer like 10000 times duplicated faces over that weird bugged faces tbh, so if its not much work for you would be nice to have it, in the end custom faces are not that good, dwarves have weird blue paints and trolls just have dirty skin colors...

## Post 40805 by Bittermens (Barrens Chat Casualty) — 2023-04-08T16:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40805#p40805 | page 15 | era: pre-1.18.1 -->

If anything, it like to see if its possible to reverse engineer the Wrath Upscaled armor pack at model changing into the HDpack

the shoulders i did worked wonderfully, and they are at discord.
[https://model-changing.net/index.php?ap ... nts&page=2](https://model-changing.net/index.php?app=downloads&module=downloads&controller=view&id=226&tab=comments&page=2)

## Post 40817 by Bittermens (Barrens Chat Casualty) — 2023-04-08T19:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40817#p40817 | page 15 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/N1ZSQZp.jpg)
i still can't pinpoint where this error comes from that causes this memory leak.

## Post 40818 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-08T19:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40818#p40818 | page 15 | era: pre-1.18.1 -->

It's been happening to me as well. Sadly, I think it's the same issue with a source I cannot identify. It's almost always in Stormwind.

## Post 40820 by Fawziforum — 2023-04-08T19:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40820#p40820 | page 15 | era: pre-1.18.1 -->

since i've installed this patch i am getting kicked out of the game everytime Majordomo Executus event starts
his application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Users\AnThares\Desktop\client_1165\WoW_tweaked.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:00713E26

The instruction at "0x00713E26" referenced memory at "0xC152C8F2".
The memory could not be "read".

## Post 40822 by Remorsx (Barrens Chat Casualty) — 2023-04-08T20:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40822#p40822 | page 15 | era: pre-1.18.1 -->

nvm found the answer

## Post 40862 by Mylord — 2023-04-09T07:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40862#p40862 | page 15 | era: pre-1.18.1 -->

WoW, that cool work! Thanks

## Post 40961 by Zer0cool — 2023-04-09T21:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40961#p40961 | page 15 | era: pre-1.18.1 -->

For the error #132 back then when I was making the mod for 1.12 classic it was reported from some people that had the same issue in the cities or where it was really crowed, as some people report here. It had to do with the memory usage from the game, since back then, Blizzard didn't think that would need above 2 GB memory.
Since high resolution models appeared with the mod, there was a modified WoW.exe that could handle 4Gb memory for the models and help with such crashes. You should address that to Turtle WoW Team and see if they can modify their WoW.exe to handle more in memory and test it.

## Post 40974 by Astricon (Barrens Chat Casualty) — 2023-04-10T00:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40974#p40974 | page 15 | era: pre-1.18.1 -->

[patch-A.MPQ](https://drive.google.com/file/d/1TVYVLtnCI7S_ApY1Oex_NVr0JcwhgCW3/view?usp=sharing) (my version) has been updated with forest troll HD textures. I just edited the regular HD textures in Photoshop so there's no body hair for males but it's a good start i figure.

this was a lot more work than the high elf blue eyes of course, and I even managed to edit the eye colors for the forest trolls to be equivalent to what you'd see from the perspective of someone without the mod. this also made me realize that a lot of the other textures DON'T do this in the HD versions of the non-custom skins, so that may be my next project. i also want to see how to get the night elf faces to stop disappearing due to black hair color.

## Post 40976 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-10T01:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40976#p40976 | page 15 | era: pre-1.18.1 -->

Going to test this. For future reference, you can just make a new patch-C that will load after patch-B, so that you don't have to upload (and I don't have to download) an entire 1.6gb patch for testing.

*Last edited by Redmagejoe on Mon Apr 10, 2023 1:49 am, edited 2 times in total.*

## Post 40977 by Astricon (Barrens Chat Casualty) — 2023-04-10T01:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40977#p40977 | page 15 | era: pre-1.18.1 -->

ok! that makes sense

## Post 40979 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-10T01:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40979#p40979 | page 15 | era: pre-1.18.1 -->

I don't know what you meant about body hair, but these all look really good and don't seem to be missing anything (trolls don't have facial hair options). I will be adding these to the patch. I would be greatly appreciative of your continued work for more fixes for other Turtle custom skins.

Just load the files you specifically changed into the correct directory path and they'll load on top of the ones in patch-A, thus taking precedence and being "replaced" when the client loads files. For example, this is what you would give me in the future: [patch-C.MPQ](https://drive.google.com/file/d/1WzhtQyrdJtOcUaPwjCF9RcyuM1CFxBTu/view?usp=share_link)

*Last edited by Redmagejoe on Mon Apr 10, 2023 1:49 am, edited 1 time in total.*

## Post 40981 by Astricon (Barrens Chat Casualty) — 2023-04-10T01:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40981#p40981 | page 15 | era: pre-1.18.1 -->

the custom textures from the twow devs have body hair. my goal is to be as 1-1 as possible but that wasn't a huge priority

## Post 40982 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-10T01:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40982#p40982 | page 15 | era: pre-1.18.1 -->

> **Astricon wrote: Mon Apr 10, 2023 1:49 am**
> the custom textures from the twow devs have body hair. my goal is to be as 1-1 as possible but that wasn't a huge priority

Well, that may be extra work for you. Comparing the Forest Troll skins to the normal Troll skins with my HD patch on, I didn't see any body hair.

## Post 40984 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-10T02:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40984#p40984 | page 16 | era: pre-1.18.1 -->

************ UPDATE ************

New patch is available with Forest Troll player skins fixed, courtesy of Astricon.

## Post 40987 by Astricon (Barrens Chat Casualty) — 2023-04-10T03:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40987#p40987 | page 16 | era: pre-1.18.1 -->

So I don't know what I was seeing earlier but I was wrong about the older textures missing eye colors. However, I did notice while editing the high elves that some textures were not matching what people without the addon might see (just some naming issues possibly) so I will check that for each race. I looked through all customization options that are not premium and here's my current working list from highest to lowest priority:

 1. Fix custom dwarf skins with tattoos
 2. Fix Night Elf Faces when having black hair option (don't know if this is something I can fix myself)
 3. Fix Gnome Female Earring Texture Missing and 2 or more Gnome Male Beards Missing if possible
 4. Investigate if Male Tauren Beard Jewelry Textures are out of alignment
 5. Verify textures match location for low-def versions
 6. (Try to) fix premium skins as reported even though I can't see if the fix works or not unless someone with the skin poses like a model for me
 7. @Redmagejoe what's up with the potential Cata goblin models? Is that in the realm of possibility?
[Edit: it seems female forest trolls are missing their bras. I'll try to fix this eventually but I firstly think it's somewhat on brand for them and secondly can't imagine anyone complaining]

Then there's some things I've noticed while playing that are not related to player models that I want to see if I can look into

 - Westfall music is...Razor Hill music I think? [Edit: I think it's Barrens actually]
 - Level Up sound is replaced with Achievement sound...intentional?
 - Missing learn new skill or recipe sound or replaced with a different one
 - Would like to add a sound/graphic to judgment. not sure if it is missing or was never there to begin with [Edit: Apparently vanilla never had one to begin with lol. I want my hammer graphic!]
 - Would like to investigate if weapon sounds can be replaced with more modern ones. Low priority.
 - Deer are way too big. Might try to see if I can scale them down.
 - Noticed one of the armored horse mounts was missing textures for its armor doodads
 - Might create my own separate patch to remove some of the weapon model replacements and other things just as a preference. I personally don't like seeing the Legion Artifact Weapons in classic.

I also might look into CASC extracting. Don't know if it'll go anywhere but I'll explore it. That would be AFTER all the other things I want to try to do.

No promises on literally anything. Just letting people know what MAY be coming.

*Last edited by Astricon on Mon Apr 10, 2023 11:36 pm, edited 3 times in total.*

## Post 40988 by Bittermens (Barrens Chat Casualty) — 2023-04-10T03:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40988#p40988 | page 16 | era: pre-1.18.1 -->

may i suggest making human female heads look young as the original non HD models?
For some reason, blizzard aged humans when the original textures were young.

## Post 40989 by Astricon (Barrens Chat Casualty) — 2023-04-10T04:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40989#p40989 | page 16 | era: pre-1.18.1 -->

> **Bittermens wrote: Mon Apr 10, 2023 3:37 am**
> may i suggest making human female heads look young as the original non HD models?
>  For some reason, blizzard aged humans when the original textures were young.

I don't think I see what you see. Post screenshot comparison and maybe I'll look into it if I feel like it

## Post 41002 by Huma — 2023-04-10T09:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41002#p41002 | page 16 | era: pre-1.18.1 -->

I think there are 3 critical things to fix on this patch

Dwarf/Trolls skin fixes (trolls already fixed thanks to Astricon) and Night elves black hair that makes the faces bug.
Premium skins replacement in HD if possible
Goblinns Cata skins

Rest of things like visual spells not matching vanilla stile like priest/mage shields or music/sounds can be customized by anyone, i replaced myself some spells and sounds just by editing it with mpqeditor and deleting the files that you dont like since its pretty straightforward

I understand that its must be to mod this client since it have many custom things which makes the work harder, my list its just a prefference

## Post 41012 by Bittermens (Barrens Chat Casualty) — 2023-04-10T12:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41012#p41012 | page 16 | era: pre-1.18.1 -->

> **Astricon wrote: Mon Apr 10, 2023 4:15 am**
> > **Bittermens wrote: Mon Apr 10, 2023 3:37 am**
> > may i suggest making human female heads look young as the original non HD models?
> >  For some reason, blizzard aged humans when the original textures were young.
>
>   I don't think I see what you see. Post screenshot comparison and maybe I'll look into it if I feel like it

Put all of the heads HD and Vanilla side by side and see it, same goes to female Night Elves, blizzard for some reason aged the male humans and most female faces when WoD and later updates came out, a retexture making it more like its vanilla counterpart may fix this.

Plus, I did something similar to the Night Elf race mod by Hyperion for Morrowind, which uses vanilla wow head and hair textures as default, though i forgot to upload at nexus later due to time constrains and the fact that i don't know how to work with Morrowind headmeshes, so i had to retexture and fix the mapping on nifskope later and make use of Reforged's night elf faces for it.

![Image](https://i.imgur.com/IyRrWiq.png)

## Post 41054 by Eivindur — 2023-04-10T21:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41054#p41054 | page 16 | era: pre-1.18.1 -->

Hello guys! So I got the Legion HD mod here and its great, but I was wondering if anyone could update this mod with updated legion models for the Horde druid glyph of the frostsaber item you can buy with donation reward in the shop?

As it is right now, this white cat model, or frostsaber, has the old vanilla look but the Alliance version is an updated cat that has the Legion model with great textures.

Is it possible to look into why the horde frostsaber is not getting updated HD Legion textures when I buy the glyph of the frostsaber but the alliance do, and is there someone that could help me with it?

Here is the link to what it looks like for horde druid players: [images/shop/glyphs/5.jpg](https://forum.turtlecraft.gg/images/shop/glyphs/5.jpg)

## Post 41061 by Shroudedsoul (Barrens Chat Casualty) — 2023-04-10T22:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41061#p41061 | page 16 | era: pre-1.18.1 -->

You all do such great work with this. It really improved the experience for me.

## Post 41242 by Kelius — 2023-04-12T10:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41242#p41242 | page 16 | era: pre-1.18.1 -->

Hello! Thanks so much for your work, the HD patch really enhanced my gaming experience.

I suddenly have the issue that certain AoE abilities like Consecration, Hurricane, even the blink animation on the ground from the Mage skill Blink stays on the ground and keeps repeating the animation in a loop endlessly. It got to a point where there were so many AoE animations staying and overlapping that I had crashes during a AQ20 raid.

Does anyone else experience this issue or knows a workaround? Removing Patch A solved the issue, but I'd like to play with the HD textures.

## Post 41279 by Astricon (Barrens Chat Casualty) — 2023-04-12T15:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41279#p41279 | page 16 | era: pre-1.18.1 -->

> **Kelius wrote: Wed Apr 12, 2023 10:33 am**
> Hello! Thanks so much for your work, the HD patch really enhanced my gaming experience.
>
>  I suddenly have the issue that certain AoE abilities like Consecration, Hurricane, even the blink animation on the ground from the Mage skill Blink stays on the ground and keeps repeating the animation in a loop endlessly. It got to a point where there were so many AoE animations staying and overlapping that I had crashes during a AQ20 raid.
>
>  Does anyone else experience this issue or knows a workaround? Removing Patch A solved the issue, but I'd like to play with the HD textures.

Weirdly I have been having the same issue but only on one of my computers...

## Post 41285 by Silvolt — 2023-04-12T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41285#p41285 | page 16 | era: pre-1.18.1 -->

Is the sheathing bug something for most weapons? Or will weapons later in the game not have the issue since they're more likely to have a HD counterpart?

## Post 41288 by Kelius — 2023-04-12T16:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41288#p41288 | page 16 | era: pre-1.18.1 -->

I found a older version of Patch-A.mpq in my download folder from March 2023 and put that into my Data folder. With that version I do not have any longer the endless repeating animation effects. Guess I am stuck with that version for the time being. If anyone found a solution to how to fix that bug in the current version I'd love to hear it!

Edit : After loading into the old Patch-A.mpq I decided to check the new one again to see the texture difference. I noticed that the bug I was experiencing was gone and the loop animations of the spell effects didn't occur anymore. I am not sure if it helped to force the game to load a different/old patch-A.mpq and then the new one - something must have changed/reset.

Anyway, thats what fixed my issue.

## Post 41326 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-12T23:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41326#p41326 | page 16 | era: pre-1.18.1 -->

It's likely cache related.

## Post 41328 by Shroudedsoul (Barrens Chat Casualty) — 2023-04-13T00:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41328#p41328 | page 16 | era: pre-1.18.1 -->

Oh, nice. The High Elves have blue eyes for me now.

## Post 41330 by Astricon (Barrens Chat Casualty) — 2023-04-13T00:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41330#p41330 | page 16 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed Apr 12, 2023 11:24 pm**
> It's likely cache related.

I think I fixed it by deleting my WDB folder. I then became annoyed that the consecration persistent effect was (while no longer infinitely persistent) looping the initial cast animation instead of the persistent animation. I deleted the consecration_impact_base.M2 from Spells folder in patch-A and this solved that problem. Is this file mis-named perhaps?

Edit: after doing all the above it seems the graphic for mage blink is still persisting infinitely. Weird.

## Post 41582 by Astricon (Barrens Chat Casualty) — 2023-04-14T23:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41582#p41582 | page 16 | era: pre-1.18.1 -->

[patch-C.MPQ](https://drive.google.com/file/d/15HFWMdb5mfAt_jBhMnXEV3zsQREqZo6O/view?usp=sharing)

Updated to include HD Dwarf Textures with Tattoos. You can add this to existing patches and it should work until you can download an update to patch-A.MPQ. Some notes:

 - Does not include the earthen variation. That's I think a premium skin which I can't see in my game to test unless someone poses for me.
 - This was a much more difficult task than the trolls and high elves. I had to re-hand-paint much of the tattoos and the mapping is very different especially for male dwarves. The tattoos do not look as sharp in all cases as they did without the HD mod (because for some reason the face textures are actually LOWER resolution than they were without the HD mod and because in some cases I had to draw the tattoo diagonally whereas it was straight in non-HD, which causes artifacts), but they do EXIST now which means it looks way better than an empty face. The body tattoos did come out mostly nicely, though.
 - Unlike with the trolls I was much more frustrated with the dwarves and the effort required to do this task was very high, so there may be more incongruencies in skin tone and eye color between the non-HD and HD version. If you notice something, mention it and I'll make a note of it.
 - For females, I tried to color match the skins, but for some reason TurtleWoW devs decided not to use existing skin tones and slap tattoos on so I had to adjust the tone to try to match and after a lot of effort it still didn't turn out as well as I had hoped. In some cases she'll have barely-noticeable lines between two skin tones because of this.
 - For males, I decided screw that and just picked the existing skin tones that were the closest possible and put tattoos on them.
 - Therefore the textures with tattoos that looked very dusky or dark are less likely to match well to the non-HD versions I think, but if I had tried to do that then this would never have come out. I may try to do better matching in the future.

This is the last MAJOR texture project I wanted to tackle. At this point, there are only niche issues which include black hair on night elves, some missing textures on jewelry, some potentially missing gnome beards, and premium skins (premium skins is possibly? a big project, but I think it'll be relatively easy compared to the dwarves that had 2 genders x 4 skin tones x 10 faces to do)

## Post 41588 by Gargzz — 2023-04-14T23:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41588#p41588 | page 16 | era: pre-1.18.1 -->

I've been using patch a/b for a couple of days and for some reason it just random broke today. It started with significant game stuttering/freezing every ten seconds or so for 1-2 seconds. Then the character models broke completely with severe artifacting. I backed up my addons and deleted the folder I extracted the zip to and started over because I kept getting a fatal memory error.

I decided to run around for a bit without these patches and the game ran very smooth with no wild variation in fps spikes/dips.

I decided to use these textures again and upon loading in the stuttering has returned with fps fluxations standing still in org of +/- 3-6 with an average of 63.

## Post 41591 by Astricon (Barrens Chat Casualty) — 2023-04-15T01:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41591#p41591 | page 16 | era: pre-1.18.1 -->

> **Gargzz wrote: Fri Apr 14, 2023 11:51 pm**
> I've been using patch a/b for a couple of days and for some reason it just random broke today. It started with significant game stuttering/freezing every ten seconds or so for 1-2 seconds. Then the character models broke completely with severe artifacting. I backed up my addons and deleted the folder I extracted the zip to and started over because I kept getting a fatal memory error.
>
>  I decided to run around for a bit without these patches and the game ran very smooth with no wild variation in fps spikes/dips.
>
>  I decided to use these textures again and upon loading in the stuttering has returned with fps fluxations standing still in org of +/- 3-6 with an average of 63.

Oh strange have you tried deleting your WDB folder?

## Post 41595 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-15T01:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41595#p41595 | page 16 | era: pre-1.18.1 -->

The Dwarf patch works great. I'll incorporate it into patch-A and announce an update with a new link sometime this week after acquiring some... misplaced assets.

Astricon, I sent you a forum PM in regards to what I'm talking about.

*Last edited by Redmagejoe on Sat Apr 15, 2023 6:08 am, edited 1 time in total.*

## Post 41611 by Gargzz — 2023-04-15T05:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41611#p41611 | page 16 | era: pre-1.18.1 -->

> **Astricon wrote: Sat Apr 15, 2023 1:25 am**
> > **Gargzz wrote: Fri Apr 14, 2023 11:51 pm**
> > I've been using patch a/b for a couple of days and for some reason it just random broke today. It started with significant game stuttering/freezing every ten seconds or so for 1-2 seconds. Then the character models broke completely with severe artifacting. I backed up my addons and deleted the folder I extracted the zip to and started over because I kept getting a fatal memory error.
> >
> >  I decided to run around for a bit without these patches and the game ran very smooth with no wild variation in fps spikes/dips.
> >
> >  I decided to use these textures again and upon loading in the stuttering has returned with fps fluxations standing still in org of +/- 3-6 with an average of 63.
>
>   Oh strange have you tried deleting your WDB folder?

I did. Nothing fixed it. Starting fresh seems to be ok so far. Fingers crossed :)

## Post 41755 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-16T20:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41755#p41755 | page 16 | era: pre-1.18.1 -->

************ UPDATE ************

New patch-A.MPQ is available with fixed Forest Troll skins and Tattoo Dwarf skins for player characters, all courtesy of Astricon.

*Last edited by Redmagejoe on Sat Apr 22, 2023 12:09 am, edited 2 times in total.*

## Post 41772 by Shroudedsoul (Barrens Chat Casualty) — 2023-04-16T22:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41772#p41772 | page 16 | era: pre-1.18.1 -->

That's fantastic .

Just posting here to remind myself to download it after I get off my 12 hour work shift.

## Post 41788 by Runningjohnny — 2023-04-17T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41788#p41788 | page 16 | era: pre-1.18.1 -->

Out of curiousity, how close to completion is this patch currently?

## Post 41790 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-17T01:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41790#p41790 | page 16 | era: pre-1.18.1 -->

I can't give an estimate because it depends entirely upon the contributions of people like Astricon to create new art assets. When all custom skins are compatible, when all NPCs with prebaked textures are fixed, and when all mount textures are compatible, it can be called complete.

## Post 41902 by Huma — 2023-04-17T17:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41902#p41902 | page 16 | era: pre-1.18.1 -->

can we have fix for black hair nelf faces? seems like most nelfs have black hair and it loots bugged

## Post 41948 by Gargzz — 2023-04-17T22:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41948#p41948 | page 16 | era: pre-1.18.1 -->

*Edit* It turns out I mistakenly put this on my HDD storage instead of my SSD (which is what I usually do). I moved this over to the SSD and it's running great now.

## Post 42014 by Huma — 2023-04-18T12:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42014#p42014 | page 16 | era: pre-1.18.1 -->

the game runs terrible on teldrassil with this  patch, without the patch 300+fps with patch fps drops all the time

## Post 42117 by Daddysaurus — 2023-04-18T22:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42117#p42117 | page 16 | era: pre-1.18.1 -->

Does anyone get a strange issue when using this patch that causes the camera to repositon to an odd angle during flightpaths?

## Post 42133 by Theeoutsider — 2023-04-19T00:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42133#p42133 | page 16 | era: pre-1.18.1 -->

A big thanks to Redmagejoe & Astricon, for this mod and the recent update to trolls and dwarves!!
You two are getting a huge virtual bear hug from this guy!

## Post 42147 by Imonobor (Bug Report Enthusiast) — 2023-04-19T04:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42147#p42147 | page 16 | era: pre-1.18.1 -->

> **Daddysaurus wrote: Tue Apr 18, 2023 10:07 pm**
> Does anyone get a strange issue when using this patch that causes the camera to repositon to an odd angle during flightpaths?

Yes, it seems to be way higher up than it should be, clipping my character into the bottom of the screen.
It may have something to do with new hippogryph/gryphon/wyvern skins/models and some hidden size value perhaps?

## Post 42272 by Astricon (Barrens Chat Casualty) — 2023-04-20T00:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42272#p42272 | page 16 | era: pre-1.18.1 -->

[patch-C.MPQ](https://drive.google.com/file/d/15HFWMdb5mfAt_jBhMnXEV3zsQREqZo6O/view?usp=sharing)

Updated for Goblins.

You will find some night elf related files in this patch because I'm working on fixing the black hair breaking face issue. Working on the goblin male actually gave me an idea as to what could be the problem (improperly formatted facial hair textures or something of that nature), so hopefully I will be able to fix that soon.

Some notes about this patch

 - Parity with non-HD: For female goblins, I tried to match eye color first for their faces. This results in a variety of face types that are absolutely not similar to what the non-HD users will see, but the cata textures I used didn't have many face types that were similar enough to the non-HD faces and also matching in eye color, and I was lazy because the female goblin model was so easy to fix. The scarred face isn't something that exists in cata textures, so I used "old face" textures in those cases usually. I figure it's similar enough. Let me know if this is something that you would like changed in the future--it's not that hard, I just didn't feel like it at the moment.
 - I spent days and hours and hours of time trying to solve the goblin male model being shitty looking compared to other HD models. It seems like the model is a cata body with a vanilla goblin head on top, meaning the cata body texture fits like a glove but the face textures result in C'thun. I got as far as importing a cata model into blender but then couldn't figure out how to export it to .m2 and I decided instead to color-match the face textures to the working body textures. I think it actually came out well enough. I used photoshop to smooth out some of the drastic and ugly contrast so the ears and nose aren't so black-lined. I also improved hair texture for both genders including the ugly-ass goblin male facial hair (that was a real pain).
 - Skin tones are actually pretty close to what they are in non-HD, and goblin female hair color is pretty exact as well, but goblin male hair color is somewhat different. The cata hair is nicer looking, though, so I went with quality over parity.

I thought the dwarf patch was the last major racial texture fix, but this one was pretty big too. Next one should be black night elf hair issue, if all is lucky. Thanks for all the positive vibes I've been getting, it means a lot since I am struggling in my software engineering job lately!

## Post 42277 by Maxstaine — 2023-04-20T02:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42277#p42277 | page 16 | era: pre-1.18.1 -->

Thank you for this amazing work.

There is a way to use the patch but keep the blue eyes on my high elf?

## Post 42280 by Astricon (Barrens Chat Casualty) — 2023-04-20T02:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42280#p42280 | page 16 | era: pre-1.18.1 -->

> **Maxstaine wrote: Thu Apr 20, 2023 2:10 am**
> Thank you for this amazing work.
>
>  There is a way to use the patch but keep the blue eyes on my high elf?

Yes that is already fixed. Just redownload the patch-A from the first page of this forum post

## Post 42281 by Daithos — 2023-04-20T02:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42281#p42281 | page 16 | era: pre-1.18.1 -->

[embed: https://s9e.github.io/iframe/2/imgur.min.html#UgfEav3]

[embed: https://s9e.github.io/iframe/2/imgur.min.html#nL9Zz6K]

For context on the Night Elf black hair issue: It gives you "war paint" face.

## Post 42332 by Runningjohnny — 2023-04-20T12:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42332#p42332 | page 16 | era: pre-1.18.1 -->

Thank you, guys, for this amazing patch and for being a force of passion in this community.

## Post 42351 by Ardur — 2023-04-20T15:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42351#p42351 | page 17 | era: pre-1.18.1 -->

How is it possible to use the old Power Word: Shield spell effect while still having the rest of the patch intact? I thought it was as easy as opening the Patch A.Mpq with the MPQ Editor and to delete to "holy shield" file (I didn't find a dedicated "Power Word Shield" entry) in the "spells" folder but that didn't work. If I delete the whole "spells" folder within the Mpq Editor it works strange wise, of course this way I got all the old spell effects, not only for Power Word Shield.

Could someone explain the way to me for dummies how to only set 1 spell effect back to the original while keeping the rest in their Legion effect shape?

Thanks again for your great work with this Patch Guys <3

## Post 42356 by Astricon (Barrens Chat Casualty) — 2023-04-20T16:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42356#p42356 | page 17 | era: pre-1.18.1 -->

> **Ardur wrote: Thu Apr 20, 2023 3:44 pm**
> How is it possible to use the old Power Word: Shield spell effect while still having the rest of the patch intact? I thought it was as easy as opening the Patch A.Mpq with the MPQ Editor and to delete to "holy shield" file (I didn't find a dedicated "Power Word Shield" entry) in the "spells" folder but that didn't work. If I delete the whole "spells" folder within the Mpq Editor it works strange wise, of course this way I got all the old spell effects, not only for Power Word Shield.
>
>  Could someone explain the way to me for dummies how to only set 1 spell effect back to the original while keeping the rest in their Legion effect shape?
>
>  Thanks again for your great work with this Patch Guys <3

Yeah it's just a matter of finding the right file. Holy shield is I think a paladin spell so that's probably why that didn't work. I myself want to get rid of that effect so let me know if you find it! Good news is if deleting the spells folder fixed it that means the file must be in there.

## Post 42358 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-20T17:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42358#p42358 | page 17 | era: pre-1.18.1 -->

> **Astricon wrote: Thu Apr 20, 2023 12:25 am**
> [patch-C.MPQ](https://drive.google.com/file/d/15HFWMdb5mfAt_jBhMnXEV3zsQREqZo6O/view?usp=sharing)
>
>  Updated for Goblins.
>
>  You will find some night elf related files in this patch because I'm working on fixing the black hair breaking face issue. Working on the goblin male actually gave me an idea as to what could be the problem (improperly formatted facial hair textures or something of that nature), so hopefully I will be able to fix that soon.
>
>  Some notes about this patch
>
>  - Parity with non-HD: For female goblins, I tried to match eye color first for their faces. This results in a variety of face types that are absolutely not similar to what the non-HD users will see, but the cata textures I used didn't have many face types that were similar enough to the non-HD faces and also matching in eye color, and I was lazy because the female goblin model was so easy to fix. The scarred face isn't something that exists in cata textures, so I used "old face" textures in those cases usually. I figure it's similar enough. Let me know if this is something that you would like changed in the future--it's not that hard, I just didn't feel like it at the moment.
>  - I spent days and hours and hours of time trying to solve the goblin male model being shitty looking compared to other HD models. It seems like the model is a cata body with a vanilla goblin head on top, meaning the cata body texture fits like a glove but the face textures result in C'thun. I got as far as importing a cata model into blender but then couldn't figure out how to export it to .m2 and I decided instead to color-match the face textures to the working body textures. I think it actually came out well enough. I used photoshop to smooth out some of the drastic and ugly contrast so the ears and nose aren't so black-lined. I also improved hair texture for both genders including the ugly-ass goblin male facial hair (that was a real pain).
>  - Skin tones are actually pretty close to what they are in non-HD, and goblin female hair color is pretty exact as well, but goblin male hair color is somewhat different. The cata hair is nicer looking, though, so I went with quality over parity.
>
>  I thought the dwarf patch was the last major racial texture fix, but this one was pretty big too. Next one should be black night elf hair issue, if all is lucky. Thanks for all the positive vibes I've been getting, it means a lot since I am struggling in my software engineering job lately!

Haven't tested this yet, but for your m2 problems, ask in support channel for a 3D modeler on the team to give you advice.

## Post 42364 by Hopstoopid — 2023-04-20T18:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42364#p42364 | page 17 | era: pre-1.18.1 -->

Any reason there is no visible graphic  when I cast Moonfire or Starfire as a Druid? That's the only thing I have noticed so far.

## Post 42365 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-20T18:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42365#p42365 | page 17 | era: pre-1.18.1 -->

> **Hopstoopid wrote: Thu Apr 20, 2023 6:28 pm**
> Any reason there is no visible graphic  when I cast Moonfire or Starfire as a Druid? That's the only thing I have noticed so far.

Neither of these issues should have anything to do with the HD patch. I use it and play Boomkin and both these spells have proper animations.

## Post 42366 by Hopstoopid — 2023-04-20T18:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42366#p42366 | page 17 | era: pre-1.18.1 -->

Hmm weird, I see a blank animation when I use either spell and only see the damage numbers. Could be on my end I guess

## Post 42368 by Astricon (Barrens Chat Casualty) — 2023-04-20T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42368#p42368 | page 17 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Apr 20, 2023 5:01 pm**
> Haven't tested this yet, but for your m2 problems, ask in support channel for a 3D modeler on the team to give you advice.

I posted in the discord support channel. No idea if it'll be something that the devs will respond to but I'd have to imagine there at one point existed a downported cata model so it would be nice if that could just be sent to me somehow

## Post 42379 by Routable — 2023-04-20T20:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42379#p42379 | page 17 | era: pre-1.18.1 -->

Just added the two patch files listed in the first post, and everything seems fine but I'm noticing some major texture issues with the Swift Grey Steed, a Turtle WoW donation mount. I'm not sure if this is an issue with the texture, or a configuration issue on my end. Thoughts?

![Image](https://media.discordapp.net/attachments/466622456308957205/1098699117200425090/image.png)

## Post 42383 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-20T21:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42383#p42383 | page 17 | era: pre-1.18.1 -->

It's a texture issue. It's one of the mounts that doesn't yet have a proper texture. Mounts we will definitely tackle whenever Astricon finds the time and wherewithall.

## Post 42390 by Bittermens (Barrens Chat Casualty) — 2023-04-20T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42390#p42390 | page 17 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Apr 20, 2023 9:08 pm**
> It's a texture issue. It's one of the mounts that doesn't yet have a proper texture. Mounts we will definitely tackle whenever Astricon finds the time and wherewithall.

Some of the new NPC's also suffers from texture issues, 2 being the new orgrimmar quartermaster and the revantusk troll  quest giver at the new zone

## Post 42391 by Johnedward — 2023-04-21T00:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42391#p42391 | page 17 | era: pre-1.18.1 -->

> **Ardur wrote: Thu Apr 20, 2023 3:44 pm**
> How is it possible to use the old Power Word: Shield spell effect while still having the rest of the patch intact? <snip>

Heh, I started doing this exact same thing like an hour ago.
As you noticed, it's somewhere in the Spells folder as removing that entirely works - specifically it's one of the loose files in that folder. Narrowing it down by trial and error wasn't that hard, just remove all files that start by "H" fixes it, then narrow it down a few at a time.

It's "Spells/Holydivineshield_state_base.M2".
And to make a replacement that doesn't get overwritten every time this project gets an update, create a new .MPQ file with a name like Patch-Z so it gets loaded in last, and copy the original file into that.

## Post 42406 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-21T04:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42406#p42406 | page 17 | era: pre-1.18.1 -->

> **Bittermens wrote: Thu Apr 20, 2023 11:38 pm**
> > **Redmagejoe wrote: Thu Apr 20, 2023 9:08 pm**
> > It's a texture issue. It's one of the mounts that doesn't yet have a proper texture. Mounts we will definitely tackle whenever Astricon finds the time and wherewithall.
>
>   Some of the new NPC's also suffers from texture issues, 2 being the new orgrimmar quartermaster and the revantusk troll  quest giver at the new zone

Those are less an issue with the patch and more of how Turtle made those particular NPCs. Ideally, they would generate NPCs based on displayIDs, and even create new displayIDs and equipment displayIDs for which there exists the assets in the HD patch. The ones that look messed up, I believe, are using what's called prebaked textures, which is a specific texture generated wholly for that NPC. It's less elegant, and the only way to fix that would either to create and HD prebake (a hassle) or ask the devs to consider using the method they used for their other custom NPCs that doesn't result in this issue.

## Post 42413 by Astricon (Barrens Chat Casualty) — 2023-04-21T07:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42413#p42413 | page 17 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Apr 21, 2023 4:25 am**
> Those are less an issue with the patch and more of how Turtle made those particular NPCs. Ideally, they would generate NPCs based on displayIDs, and even create new displayIDs and equipment displayIDs for which there exists the assets in the HD patch. The ones that look messed up, I believe, are using what's called prebaked textures, which is a specific texture generated wholly for that NPC. It's less elegant, and the only way to fix that would either to create and HD prebake (a hassle) or ask the devs to consider using the method they used for their other custom NPCs that doesn't result in this issue.

Yeah this problem is daunting if you look at the npc textures. There are...hundreds.

## Post 42414 by Astricon (Barrens Chat Casualty) — 2023-04-21T07:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42414#p42414 | page 17 | era: pre-1.18.1 -->

UPDATE: [patch-C](https://drive.google.com/file/d/15HFWMdb5mfAt_jBhMnXEV3zsQREqZo6O/view?usp=share_link)

Once I knew the problem, the solution was pretty quick! Night Elves no longer have messed up faces if they have black hair using this patch!

## Post 42418 by Daithos — 2023-04-21T07:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42418#p42418 | page 17 | era: pre-1.18.1 -->

I've seen some great replacements for certain pets with the HD pack. Have any of the hyenas or wolves been model swapped with the mastiff model? That or one of the owls or carrion birds with the BFA falcons/hawks would be absolutely amazing.

## Post 42421 by Rejectedgalaxy (Barrens Chat Casualty) — 2023-04-21T07:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42421#p42421 | page 17 | era: pre-1.18.1 -->

Someone should go in and remove some of these changes. The WoD login screen is awful, so many ugly loading screens, and a lot of model replacements make no sense. I tried myself. Figured out how to remove the loading screens, but couldn't find some other things I really didn't like.

## Post 42433 by Ardur — 2023-04-21T11:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42433#p42433 | page 17 | era: pre-1.18.1 -->

> **Johnedward wrote: Fri Apr 21, 2023 12:02 am**
> > **Ardur wrote: Thu Apr 20, 2023 3:44 pm**
> > How is it possible to use the old Power Word: Shield spell effect while still having the rest of the patch intact? <snip>
>
>   Heh, I started doing this exact same thing like an hour ago.
>  As you noticed, it's somewhere in the Spells folder as removing that entirely works - specifically it's one of the loose files in that folder. Narrowing it down by trial and error wasn't that hard, just remove all files that start by "H" fixes it, then narrow it down a few at a time.
>
>  It's "Spells/Holydivineshield_state_base.M2".
>  And to make a replacement that doesn't get overwritten every time this project gets an update, create a new .MPQ file with a name like Patch-Z so it gets loaded in last, and copy the original file into that.

Thank you so much for chasing down the correct file, will try that directly once I get home together with the creation of a new MPQ file in order to avoid deleting the file after every update.

## Post 42439 by Huma — 2023-04-21T11:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42439#p42439 | page 17 | era: pre-1.18.1 -->

Night elf females have still some weird textures on the ears when you chose black hair with the new astricon patch

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/evmvyBM]

## Post 42451 by Ulminar — 2023-04-21T13:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42451#p42451 | page 17 | era: pre-1.18.1 -->

Hello thanks a lot for these but I've been unable to download patch A, I tried it over 10 times on chrome and then firefox. I get a network error near the end, would it be possible for you to host it on Mega or medafire as well even temporarily?  Thanks a lot for the models and everything really looking forward to playing with them. I tried disabling my firewall as well, must be something with Google Drive, it's always had issues for me.

## Post 42485 by Astricon (Barrens Chat Casualty) — 2023-04-21T17:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42485#p42485 | page 17 | era: pre-1.18.1 -->

> **Huma wrote: Fri Apr 21, 2023 11:54 am**
> Night elf females have still some weird textures on the ears when you chose black hair with the new astricon patch
>
>
> [embed: https://s9e.github.io/iframe/2/imgur.min.html#a/evmvyBM]

Dang didn't notice that. I'll try to figure it out but at least it's better than before!

## Post 42487 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-21T17:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42487#p42487 | page 17 | era: pre-1.18.1 -->

Be sure to delete your WDB folder after installing a new version of the patch, as it contains your TEXTURE CACHE.

But yes, this latest patch-C fixes male Night Elf black hair, but it seems female Night Elf black hair and Cata male goblin heads are still WIP.

## Post 42490 by Huma — 2023-04-21T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42490#p42490 | page 17 | era: pre-1.18.1 -->

What can be causing the bad performance on teldrassil? specially when raining the FPS drops a lot

## Post 42493 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-21T19:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42493#p42493 | page 17 | era: pre-1.18.1 -->

Vanilla client and its reliance on CPU, not GPU, for framerate bottlenecks.  It's just not optimized for the sorts of modern demands we're making of it.

## Post 42514 by Astricon (Barrens Chat Casualty) — 2023-04-21T22:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42514#p42514 | page 17 | era: pre-1.18.1 -->

Updated patch-C (same link from previous posts) and should now fix most or all of the remaining issues for black hair on night elves. also made one of the male night elf black beards work better. Only one slight problem is face paint 6 for female night elf with black hair is missing a teeny tiny tip at the top near her scalp which is only visible with certain hairstyles. couldn't figure out why this was happening with a lot of effort and it's so barely noticeable I decided to just let it slide for now.

Goblins are as done as they will ever be unless TWoW devs wanna cough up their trade secrets or models to me, so if you're waiting for more on the male goblin heads you'll be waiting a long ass time.

## Post 42519 by Astricon (Barrens Chat Casualty) — 2023-04-21T23:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42519#p42519 | page 17 | era: pre-1.18.1 -->

> **Johnedward wrote: Fri Apr 21, 2023 12:02 am**
> Heh, I started doing this exact same thing like an hour ago.
>  As you noticed, it's somewhere in the Spells folder as removing that entirely works - specifically it's one of the loose files in that folder. Narrowing it down by trial and error wasn't that hard, just remove all files that start by "H" fixes it, then narrow it down a few at a time.
>
>  It's "Spells/Holydivineshield_state_base.M2".
>  And to make a replacement that doesn't get overwritten every time this project gets an update, create a new .MPQ file with a name like Patch-Z so it gets loaded in last, and copy the original file into that.

Thanks for finding this! I'm getting rid of that for myself lol.

## Post 42520 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-22T00:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42520#p42520 | page 17 | era: pre-1.18.1 -->

> **Astricon wrote: Fri Apr 21, 2023 10:59 pm**
> Updated patch-C (same link from previous posts) and should now fix most or all of the remaining issues for black hair on night elves. also made one of the male night elf black beards work better. Only one slight problem is face paint 6 for female night elf with black hair is missing a teeny tiny tip at the top near her scalp which is only visible with certain hairstyles. couldn't figure out why this was happening with a lot of effort and it's so barely noticeable I decided to just let it slide for now.
>
>  Goblins are as done as they will ever be unless TWoW devs wanna cough up their trade secrets or models to me, so if you're waiting for more on the male goblin heads you'll be waiting a long ass time.

You can clear your current patch-C from future pushes to the thread, as I've incorporated your patch-C into patch-A. I would encourage you to keep working on black hair for female Night Elf, however, as there are some Face Markings that cause the markings to appear on the backs of their ears instead. You're doing awesome work, so please keep it up!

## Post 42521 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-22T00:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42521#p42521 | page 17 | era: pre-1.18.1 -->

************ UPDATE ************

New patch-A.MPQ is available with improved male and female Goblin body textures, Cataclysm female Goblin faces, and (mostly) fixed black Night Elf hair, all courtesy of Astricon.  Look forward to fully fixed female black Night Elf hair and possibly Cataclysm male Goblin heads in the future!

## Post 42562 by Kobaru0 — 2023-04-22T11:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42562#p42562 | page 17 | era: pre-1.18.1 -->

> **Astricon wrote: Thu Apr 13, 2023 12:25 am**
> > **Redmagejoe wrote: Wed Apr 12, 2023 11:24 pm**
> > It's likely cache related.
>
>   I think I fixed it by deleting my WDB folder. I then became annoyed that the consecration persistent effect was (while no longer infinitely persistent) looping the initial cast animation instead of the persistent animation. I deleted the consecration_impact_base.M2 from Spells folder in patch-A and this solved that problem. Is this file mis-named perhaps?
>
>  Edit: after doing all the above it seems the graphic for mage blink is still persisting infinitely. Weird.

Is it possible to delete if from the main patch-a.mpq file so we don't have to delete it manually after each update ?

I don't know the priority on bug fixing, but thanks for the updates and the patches   turtle_in_love

## Post 42598 by Anonymouse123 — 2023-04-22T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42598#p42598 | page 17 | era: pre-1.18.1 -->

I tried the pre-4/21 update - my female undead skin troll has a blackness for her face (I'll post a screenshot shortly, if it persists with the 4/21 update) - the things that do work look amazing though, insane!

## Post 42599 by Anonymouse123 — 2023-04-22T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42599#p42599 | page 17 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/uIP6EeZ.png)

Still in latest - let me know if I can provide any other info.

## Post 42601 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-22T17:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42601#p42601 | page 17 | era: pre-1.18.1 -->

As was said before: Donation Shop Skins are still not fixed. Please be patient.

## Post 42607 by Astricon (Barrens Chat Casualty) — 2023-04-22T19:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42607#p42607 | page 17 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Apr 22, 2023 12:05 am**
> You can clear your current patch-C from future pushes to the thread, as I've incorporated your patch-C into patch-A. I would encourage you to keep working on black hair for female Night Elf, however, as there are some Face Markings that cause the markings to appear on the backs of their ears instead. You're doing awesome work, so please keep it up!

I'm not seeing any of the faulty night elf female markings you mentioned...can you tell me which marking and color combo?

## Post 42608 by Astricon (Barrens Chat Casualty) — 2023-04-22T19:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42608#p42608 | page 17 | era: pre-1.18.1 -->

> **Kobaru0 wrote: Sat Apr 22, 2023 11:46 am**
> Is it possible to delete if from the main patch-a.mpq file so we don't have to delete it manually after each update ?
>
>  I don't know the priority on bug fixing, but thanks for the updates and the patches   turtle_in_love

you could make an mpq file yourself that overwrites the model with the original one if you can find it. i myself have just been going in to delete it each time lol

## Post 42612 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-22T19:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42612#p42612 | page 17 | era: pre-1.18.1 -->

> **Astricon wrote: Sat Apr 22, 2023 7:30 pm**
> I'm not seeing any of the faulty night elf female markings you mentioned...can you tell me which marking and color combo?

All facial markings except for "no markings" and the 2 markings after "no markings" display improperly. Go to green hair (to the "right" of black in character select), and cycle through markings, then switch to black hair and you can clearly see the issue. This is about 6 markings, with "no markings" being what I'll call A.

So A, B, and C work, but D through I do not work.

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/pMaaHx0]

## Post 42616 by Astricon (Barrens Chat Casualty) — 2023-04-22T20:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42616#p42616 | page 17 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Apr 22, 2023 7:50 pm**
> All facial markings except for "no markings" and the 2 markings after "no markings" display improperly. Go to green hair (to the "right" of black in character select), and cycle through markings, then switch to black hair and you can clearly see the issue. This is about 6 markings, with "no markings" being what I'll call A.
>
>  So A, B, and C work, but D through I do not work.
>
>
> [embed: https://s9e.github.io/iframe/2/imgur.min.html#a/pMaaHx0]

I'm not experiencing this at all. Did you replace the old CharSections.dbc with my new one in patch-C? That was a necessary part of it.

## Post 42617 by Johnedward — 2023-04-22T20:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42617#p42617 | page 18 | era: pre-1.18.1 -->

[I created patches for the spell effects and main menu & loading screens for myself, so I might as well link them here.](https://drive.google.com/drive/folders/12Nb5pNSA85enpLDYJigKgnJ5mzzxHde6?usp=sharing) They simply replaces stuff with the vanilla files.

Patch Z changes:
Power Word:Shield - from 3D egg to 2D texture
Consecrate - Should fix the effect getting stuck.
Blink - Should fix the effect getting stuck
Mana Armour - from 3D egg to 2D texture

Splash effects from running in shallow water also tend to get stuck, but I don't know what files those are.

Patch-X replaces Main Menu and Kalimdor & Eastern Kingdom loading screens with the Vanilla versions.

## Post 42632 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-22T21:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42632#p42632 | page 18 | era: pre-1.18.1 -->

> **Astricon wrote: Sat Apr 22, 2023 8:39 pm**
> I'm not experiencing this at all. Did you replace the old CharSections.dbc with my new one in patch-C? That was a necessary part of it.

I did. Please download the latest patch-A, compare your CharSections.dbc to mine, delete WDB, and test again.

## Post 42660 by Astricon (Barrens Chat Casualty) — 2023-04-23T02:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42660#p42660 | page 18 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Apr 22, 2023 9:59 pm**
> I did. Please download the latest patch-A, compare your CharSections.dbc to mine, delete WDB, and test again.

Still not experiencing this on two different machines...not sure what could be happening.

## Post 42707 by Winthrop (Barrens Chat Casualty) — 2023-04-23T12:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42707#p42707 | page 18 | era: pre-1.18.1 -->

> **Johnedward wrote: Sat Apr 22, 2023 8:49 pm**
> [I created patches for the spell effects and main menu & loading screens for myself, so I might as well link them here.](https://drive.google.com/drive/folders/12Nb5pNSA85enpLDYJigKgnJ5mzzxHde6?usp=sharing) They simply replaces stuff with the vanilla files.
>
>  Patch Z changes:
>  Power Word:Shield - from 3D egg to 2D texture
>  Consecrate - Should fix the effect getting stuck.
>  Blink - Should fix the effect getting stuck
>  Mana Armour - from 3D egg to 2D texture
>
>  Splash effects from running in shallow water also tend to get stuck, but I don't know what files those are.
>
>  Patch-X replaces Main Menu and Kalimdor & Eastern Kingdom loading screens with the Vanilla versions.

Thanks alot for this! <3

## Post 42709 by Kobaru0 — 2023-04-23T12:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42709#p42709 | page 18 | era: pre-1.18.1 -->

> **Johnedward wrote: Sat Apr 22, 2023 8:49 pm**
> [I created patches for the spell effects and main menu & loading screens for myself, so I might as well link them here.](https://drive.google.com/drive/folders/12Nb5pNSA85enpLDYJigKgnJ5mzzxHde6?usp=sharing) They simply replaces stuff with the vanilla files.
>
>  Patch Z changes:
>  Power Word:Shield - from 3D egg to 2D texture
>  Consecrate - Should fix the effect getting stuck.
>  Blink - Should fix the effect getting stuck
>  Mana Armour - from 3D egg to 2D texture
>
>  Splash effects from running in shallow water also tend to get stuck, but I don't know what files those are.
>
>  Patch-X replaces Main Menu and Kalimdor & Eastern Kingdom loading screens with the Vanilla versions.

Neat, ty !   turtle_in_love_head

## Post 42733 by Tonky — 2023-04-23T17:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42733#p42733 | page 18 | era: pre-1.18.1 -->

[https://i.gyazo.com/ade2428c1b4fb7b4819 ... 9c3ef8.mp4](https://i.gyazo.com/ade2428c1b4fb7b48190b2876a9c3ef8.mp4)

Early prototype of HD High Elves. Got the proof-of-concept working, now to just refine it! :D

## Post 42742 by Astricon (Barrens Chat Casualty) — 2023-04-23T18:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42742#p42742 | page 18 | era: pre-1.18.1 -->

> **Tonky wrote: Sun Apr 23, 2023 5:12 pm**
> [https://i.gyazo.com/ade2428c1b4fb7b4819 ... 9c3ef8.mp4](https://i.gyazo.com/ade2428c1b4fb7b48190b2876a9c3ef8.mp4)
>
>  Early prototype of HD High Elves. Got the proof-of-concept working, now to just refine it! :D

omg where did you get the models and how did you get them into 1.12?

## Post 42743 by Tonky — 2023-04-23T19:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42743#p42743 | page 18 | era: pre-1.18.1 -->

Don't celebrate just yet. I have no idea what's going on with the ears and chin D:

## Post 42744 by Astricon (Barrens Chat Casualty) — 2023-04-23T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42744#p42744 | page 18 | era: pre-1.18.1 -->

> **Astricon wrote: Sun Apr 23, 2023 2:32 am**
> > **Redmagejoe wrote: Sat Apr 22, 2023 9:59 pm**
> > I did. Please download the latest patch-A, compare your CharSections.dbc to mine, delete WDB, and test again.
>
>   Still not experiencing this on two different machines...not sure what could be happening.

Ok I found someone who was also experiencing the issue. Must be a GPU thing idk but I think it's fixed now in patch-C's newest version. I'm currently working on something different--adding modern sounds (and maybe spell effects) to some abilities. I play a paladin and so far I've given judgment the hammer-slamming sound you get from modern wow when you use judgment, and i'm working on giving Holy Strike the Blade of Justice sound. Not sure if this is something that we'd want in the HD Mod, but there are other sound and spell effect replacements in there so i thought i'd ask.

## Post 42747 by Tonky — 2023-04-23T19:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42747#p42747 | page 18 | era: pre-1.18.1 -->

> **Astricon wrote: Sun Apr 23, 2023 7:09 pm**
> Ok I found someone who was also experiencing the issue. Must be a GPU thing idk but I think it's fixed now in patch-C's newest version. I'm currently working on something different--adding modern sounds (and maybe spell effects) to some abilities. I play a paladin and so far I've given judgment the hammer-slamming sound you get from modern wow when you use judgment, and i'm working on giving Holy Strike the Blade of Justice sound. Not sure if this is something that we'd want in the HD Mod, but there are other sound and spell effect replacements in there so i thought i'd ask.

Ok, this is a cool side project to add to the pack! I can't wait to hear it in action :D

## Post 42758 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-23T20:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42758#p42758 | page 18 | era: pre-1.18.1 -->

If you could make a patch-D and let me hear it, Astricon, I'll give my approval on if it'll go in or not. I'm all for sharper sounds, but want to make sure it's not too jarring.

I've already incorporated your previous patch-C into patch-A, so if you could post links to fresh patch-C later in the thread moving forward, it would be very helpful. I will let you know if this latest patch-C fixes the black hair issue.

EDIT: Completely fixed. Will update patch-A, and you can start fresh with your next patch-C. Awesome work as always, Astricon.

Tonky, really looking forward to what you manage to pull off with elves and contributing to improving this project. Contributions from both of you are making dreams I had for this project become a reality!

## Post 42761 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-23T20:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42761#p42761 | page 18 | era: pre-1.18.1 -->

************ UPDATE ************

New patch-A.MPQ is available that fixes all issues with black hair for female Night Elves, courtesy of Astricon.

## Post 42762 by Tonky — 2023-04-23T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42762#p42762 | page 18 | era: pre-1.18.1 -->

I'm excited to get things rolling too :D. I've got a lot of experience with models/textures, but absolutely no experience with the specific files/formats/file structure that WoW uses. So I'm a bit out of my depth with troubleshooting issues. I'm going to keep at it, but any advice would be greatly appreciated!

Current Issues:
Missing Texture on Ears (Rendering as black in world, and white in previews)
Missing Textures on Chin (Same as above)
Equip/Unequip Bug (Weapons don't always behave as expected)

Worklist:
Redesign Missing Custom Skin: High Elf
Redesign Missing Custom Skin: Dark Ranger
Change Underwear Texture from Horde Red to Alliance Blue

## Post 42770 by Mehra — 2023-04-23T21:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42770#p42770 | page 18 | era: pre-1.18.1 -->

Hi everyone, i've been lurking a while and after Tonky posted the bit about the HD Blood Elf model i remembered that i did something like that a while ago, i wanted to play as a Draenei in another Vanilla server and ran into the a similar issue.

The problem is the CharSection.dbc , it's using Turtle WoW BloodElf lines, and it won't work for the HD Model.

## Post 42772 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-23T21:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42772#p42772 | page 18 | era: pre-1.18.1 -->

What Mehra said. You'll need to actually adjust the CharSections.dbc (which you can easily convert to a CSV to open in a spreadsheet reader like Excel) to tell the game what textures go on what parts of the model.

## Post 42773 by Mehra — 2023-04-23T21:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42773#p42773 | page 18 | era: pre-1.18.1 -->

I hope you won't be mad Tonky, but i actually got it working!
I got the models from Model-Changing.net and replaced the Turtle Lines with the right ones.

Here's the link: [https://drive.google.com/file/d/1tXzDNm ... ecNMU/view](https://drive.google.com/file/d/1tXzDNmqxEvPZE-iYqqNa0wbuV7hecNMU/view)

But of course there's issues

 1: The Custom hairstyle is missing, so some players are gonna have a black void in their head
 2: The Green Eyes which i think can be easily fixed by you Texture Magicians(the glow could also be replaced by the DeathKnight one)
 3: The Weapon sheathing bug /cry

Other than that it's working perfectly.

## Post 42774 by Tonky — 2023-04-23T21:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42774#p42774 | page 18 | era: pre-1.18.1 -->

> **Mehra wrote: Sun Apr 23, 2023 9:41 pm**
> I hope you won't be mad Tonky, but i actually got it working!
>  I got the models from Model-Changing.net and replaced the Turtle Lines with the right ones.
>
>  Here's the link: [https://drive.google.com/file/d/1tXzDNm ... ecNMU/view](https://drive.google.com/file/d/1tXzDNmqxEvPZE-iYqqNa0wbuV7hecNMU/view)
>
>  But of course there's issues
>
>  1: The Custom hairstyle is missing, so some players are gonna have a black void in their head
>  2: The Green Eyes which i think can be easily fixed by you Texture Magicians(the glow could also be replaced by the DeathKnight one)
>  3: The Weapon sheathing bug /cry
>
>  Other than that it's working perfectly.

I LOVE YOU!

I would've had no idea where to even start with this. Wonderful!!

I can do the texture work needed to finish off the Elves. I'm still learning my way around the system here though, so if anyone is able to do up a file of "take *these* files. Change them to *This*" then I can easily knock out the changes needed and upload them real fast.

## Post 42775 by Tonky — 2023-04-23T22:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42775#p42775 | page 18 | era: pre-1.18.1 -->

What is the custom hairstyle, and where does it come from?

## Post 42778 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-23T22:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42778#p42778 | page 18 | era: pre-1.18.1 -->

When you submit something you'd like tested to be added to the official HD patch, please submit it as patch-C.MPQ (I can rename patches as needed if testing both yours and Astricon's) and link it here. Be sure to only include the files you changed and not the entirety of what's in my patch-A.

## Post 42779 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-23T22:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42779#p42779 | page 18 | era: pre-1.18.1 -->

So I tested Mehra's patch, and there are no issues with missing hairstyles on my end, assuming you're using both Turtle's patch-3 and my patch-A.  I will compare DBCs to ensure that there are no discrepancies.

However, as was the issue when switching from Turtle High Elf to TBC Blood Elf, we need blue eyes, and more importantly, we need skin shades to match their Turtle counterparts. Overall, Blood Elves had more tanned skin, so there's a very noticeable difference between someone's character between Turtle and this patch. I would ask one or both of you to work on getting skin tones matching before I can adopt this as part of Turtle HD. This may be a lot of work, because it's not just the face textures that will need to be touched up, but all the body part textures.

That said, it looks amazing and I would love to incorporate a finished version of this into Turtle HD. Credit will be given where appropriate.

## Post 42781 by Mehra — 2023-04-23T22:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42781#p42781 | page 18 | era: pre-1.18.1 -->

> **Tonky wrote: Sun Apr 23, 2023 10:07 pm**
> What is the custom hairstyle, and where does it come from?

TBH i didn't even know they had one until last month, and i can't even identify it.

Also as a side effect, the new model messed up the npcs, so they need new bakedtextures which i have no clue on how to do it.

I am nothing but a tinker, i'd rather leave texturing to more capable hands    happy_turtle_head

## Post 42784 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-23T22:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42784#p42784 | page 18 | era: pre-1.18.1 -->

I have a request for anyone who works with 3D models. I took one of the new helmets added by Turtle that do not have an appropriate model with my patch for Goblins or High Elves, took the Gnome and Human versions respectively, and renamed them to work for Goblins and High Elves. However, the positioning of the helmets is off, but I have 0 knowledge of 3D models or how to "adjust" their position to sit properly on the heads of these characters.

The issue is that the human helms are a bit too far back from the elf face, and the gnome ones are too far forward and down for the goblin face. If someone can fix these, it would prevent the "checkered cube on head" that goblins and high elves wearing this specific helmet display.

[embed: //drive.google.com/file/d/1hj-faGIZ50schl7DZ8OAG1luW6OJTZON/preview]

## Post 42786 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-23T22:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42786#p42786 | page 18 | era: pre-1.18.1 -->

> **Mehra wrote: Sun Apr 23, 2023 10:39 pm**
> Also as a side effect, the new model messed up the npcs, so they need new bakedtextures which i have no clue on how to do it.

Don't worry about NPCs. Prebakes can be replaced instead with tool-generated "built" NPCs, but that would require effort on the dev's part rather than someone making prebakes clientside. I would say keep working on making these new elves come to life, because there's already plenty of NPCs using prebakes that look bad with my patch. I'll see how difficult it would be to either find a tool to make our own prebakes, or harass devs.

## Post 42801 by Astricon (Barrens Chat Casualty) — 2023-04-24T02:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42801#p42801 | page 18 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Apr 23, 2023 10:54 pm**
> Don't worry about NPCs. Prebakes can be replaced instead with tool-generated "built" NPCs, but that would require effort on the dev's part rather than someone making prebakes clientside. I would say keep working on making these new elves come to life, because there's already plenty of NPCs using prebakes that look bad with my patch. I'll see how difficult it would be to either find a tool to make our own prebakes, or harass devs.

Alternatively, something I just thought of is maybe we can change the dbc files to only point to the new high elf model for player characters so the pre-baked ones don't break. This wouldn't work for the npcs that are human with custom skins like necromancer, and other custom skin npcs like forest trolls, since most of the npcs from that race work and are using updated textures we don't want to get rid of, but at least for high elves every single high elf is custom and thus they would all look better with tbc models and textures than they would with broken faces

## Post 42802 by Astricon (Barrens Chat Casualty) — 2023-04-24T02:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42802#p42802 | page 18 | era: pre-1.18.1 -->

> **Tonky wrote: Sun Apr 23, 2023 9:53 pm**
> I can do the texture work needed to finish off the Elves. I'm still learning my way around the system here though, so if anyone is able to do up a file of "take *these* files. Change them to *This*" then I can easily knock out the changes needed and upload them real fast.

I can help and teach you what I have been learning about texture editing! A better communication would be on discord. I'm on the official TWoW discord server under this name Astricon, so just pm me and tell me you want some tips. We can make a group chat with anyone else that wants tutoring.

## Post 42803 by Astricon (Barrens Chat Casualty) — 2023-04-24T02:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42803#p42803 | page 18 | era: pre-1.18.1 -->

Also I did successfully change Holy Strike to use the Blade of Justice sound. At first it was changing Crusader Strike and Heroic Strike sounds too and that wasn't good, and it was also playing the sound even when you miss the target, which I didn't like--but now both of those issues are fixed so I've essentially cracked the code and I might even be able to use what I learned to add a visual effect possibly!

## Post 42819 by Remorsx (Barrens Chat Casualty) — 2023-04-24T10:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42819#p42819 | page 18 | era: pre-1.18.1 -->

> **Tonky wrote: Sun Apr 23, 2023 7:00 pm**
> Don't celebrate just yet. I have no idea what's going on with the ears and chin D:

it honestly doesn't matter just let us play these please haha

## Post 42822 by Remorsx (Barrens Chat Casualty) — 2023-04-24T10:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42822#p42822 | page 18 | era: pre-1.18.1 -->

> **Mehra wrote: Sun Apr 23, 2023 9:41 pm**
> I hope you won't be mad Tonky, but i actually got it working!
>  I got the models from Model-Changing.net and replaced the Turtle Lines with the right ones.
>
>  Here's the link: [https://drive.google.com/file/d/1tXzDNm ... ecNMU/view](https://drive.google.com/file/d/1tXzDNmqxEvPZE-iYqqNa0wbuV7hecNMU/view)
>
>  But of course there's issues
>
>  1: The Custom hairstyle is missing, so some players are gonna have a black void in their head
>  2: The Green Eyes which i think can be easily fixed by you Texture Magicians(the glow could also be replaced by the DeathKnight one)
>  3: The Weapon sheathing bug /cry
>
>  Other than that it's working perfectly.

i love u my guy honestly high elves are finally playable!!!!!!!!!!!!!

## Post 42848 by Shigemato1988 — 2023-04-24T14:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42848#p42848 | page 18 | era: pre-1.18.1 -->

> **Mehra wrote: Sun Apr 23, 2023 9:41 pm**
> I hope you won't be mad Tonky, but i actually got it working!
>  I got the models from Model-Changing.net and replaced the Turtle Lines with the right ones.
>
>  Here's the link: [https://drive.google.com/file/d/1tXzDNm ... ecNMU/view](https://drive.google.com/file/d/1tXzDNmqxEvPZE-iYqqNa0wbuV7hecNMU/view)
>
>  But of course there's issues
>
>  1: The Custom hairstyle is missing, so some players are gonna have a black void in their head
>  2: The Green Eyes which i think can be easily fixed by you Texture Magicians(the glow could also be replaced by the DeathKnight one)
>  3: The Weapon sheathing bug /cry
>
>  Other than that it's working perfectly.

I just binded my sheath key to "sit down" and press it very briefly and keep walking to sheath weapon, luckily character draws weapon when you doubleclick an enemy

## Post 42870 by Kobaru0 — 2023-04-24T16:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42870#p42870 | page 18 | era: pre-1.18.1 -->

Also I wondered (sorry if it was asked already) but isn't there some strange camera positioning on griffin flypath ?

## Post 42887 by Baluar — 2023-04-24T17:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42887#p42887 | page 18 | era: pre-1.18.1 -->

Superb work, everyone. You guys are doing an awesome job.

Tried Mehra's Patch C and it seems to be working without any unexpected hiccups, though it does break the Dark Ranger skin.

## Post 42891 by Astricon (Barrens Chat Casualty) — 2023-04-24T18:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42891#p42891 | page 18 | era: pre-1.18.1 -->

> **Baluar wrote: Mon Apr 24, 2023 5:38 pm**
> Superb work, everyone. You guys are doing an awesome job.
>
>  Tried Mehra's Patch C and it seems to be working without any unexpected hiccups, though it does break the Dark Ranger skin.

Should be easy to find a modern dark Ranger texture to replace it with

## Post 42901 by Remorsx (Barrens Chat Casualty) — 2023-04-24T18:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42901#p42901 | page 18 | era: pre-1.18.1 -->

would be perfect if u guys would do something with the water, although i think that's not possible
something like backporting cata+ water

## Post 42941 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-25T01:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42941#p42941 | page 18 | era: pre-1.18.1 -->

************ UPDATE ************

New patch-A.MPQ is available that fixes all female Gnome "blackface" when using the Scholomance Student skin. Big thanks to none other than Tamamo of Turtle Staff themselves for this fix!

## Post 42945 by Tonky — 2023-04-25T02:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42945#p42945 | page 18 | era: pre-1.18.1 -->

So what would the process be for fixing the missing hair for High Elves with the temporary Elf patch we have?

## Post 42947 by Astricon (Barrens Chat Casualty) — 2023-04-25T04:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42947#p42947 | page 19 | era: pre-1.18.1 -->

I've always wanted this as an option. I made an HD patch that changes player character night elf eyes from yellow to white as this is actually lore accurate--yellow eyes are supposed to be very rare among night elves up to the release of WoW when suddenly all male night elves had yellow eyes. Illidan and Azshara are the only two night elves that are mentioned to have golden eyes pre-sundering, and Broll Bearmantle is the only one that comes to mind from post-WoW lore in which he came to have golden eyes after a certain point. Even in the books during WoW era, there are very few golden-eyed night elves. This was quietly retconned at some point late in WoW's lore overhauls until recently when night elves in Shadowlands/Dragonflight were allowed to choose their eye color at character creation.

NPC Male night elves have white eyes too, but if you look reeeeeeally closely you'll see the base is still yellow. Player characters have new textures under the glowing parts though.

Since this is in my opinion a lore accurate patch but not WoW-game-history accurate, I figured I'd just float it as an optional patch, and named it such.

[patch-BWhiteNelfHD.MPQ](https://drive.google.com/file/d/1mcY-_GeUmQDK8wO0JTplYD_cL4HsNQ_a/view?usp=share_link)

![Image](https://i.imgur.com/eWcrHfn.png)

## Post 42948 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-25T04:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42948#p42948 | page 19 | era: pre-1.18.1 -->

> **Tonky wrote: Tue Apr 25, 2023 2:09 am**
> So what would the process be for fixing the missing hair for High Elves with the temporary Elf patch we have?

I did not notice any missing hair issues.  The major issues needed to consider adding the improved High Elves to the main patch are the skin tones and the green eyes.

## Post 42950 by Astricon (Barrens Chat Casualty) — 2023-04-25T05:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42950#p42950 | page 19 | era: pre-1.18.1 -->

[patch-C](https://drive.google.com/file/d/1Y4J8RM7uYUmVE9LZjpKXZ_SZfz4PIMUr/view?usp=share_link)

Haha you thought I'd just post a throwaway patch today. But in fact I have a way more exciting update!

I have succeeded in playing around with DBCs to the point I am confident in this patch. It updates many Paladin spells to use sound effects from modern WoW! I also tweaked some visuals and fixed the Learn Spell sound.

Changelog:

Judgement now uses a throw animation for your character, will use the modern hammer sound on impact, and uses a slightly more dramatic holy visual that was not being used by other paladin spells. I tried to get a hammer missile but I think it wasn't possible due to being a zero travel time spell. I also thought I'd use a falling hammer animation but I'd need a downported effect from WotLK that I didn't manage to find yet.

Holy Strike now uses the priest holy smite spell effect and plays the Blade of Justice modern sound on impact. This just seemed to fit well with the theme of the spell to me but I'm open to suggestions. It feels really nice and you really notice when you miss now.

Crusader Strike now uses the modern sound on impact and also uses a holy impact effect on impact that used to be used by Judgement. Since this spell has some holy damage element to it I felt this effect fit better and gave Judgement the more flashy one. I forewent the modern swinging animation as that was too overpowering and makes the spell seem way more powerful than it is in this iteration.

Consecration now uses the modern cast sound. It's very cool.

Hammer of Justice now uses the modern impact sound. Also very cool.

Divine Protection and Divine Shield now use the modern cast sound. Moderate improvement.

Holy Shield (Protection Talent) now uses the Legion Truthguard spell as a casting sound. I looked hard for a modern sound effect I felt fit the spell and I believe this is it. Open for critique on this one as well.

Learn Spell sound is fixed. This includes learning trade skill recipes. Basically it shares the sound with Blessing of Might and when that was changed by the HD mod the Learn Spell sound copied the change which was a bit jarring for me as it's been the same in all of WoW's history pretty much. I should have posted this fix separately but alas. Here it is. Hopefully the rest of the changes are good enough to merge with this one.

FUTURE PLANS
Probably will do:
Update Holy Shock sound
Update Hammer of Wrath
Update Holy Wrath

Possibly will try:
Differentiate seal visuals and/or sounds

OTHER CLASSES
Unfortunately in order to test changes I need to actually have a class that knows the abilities that I'm trying to test. It's a slow process. So it's possible I will update some low level spells using level 10 or lower alts. My paladin is only level 32 right now lol. If you have ideas please let me know. This project is extremely fun to me.

## Post 42953 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-25T05:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42953#p42953 | page 19 | era: pre-1.18.1 -->

I will test this patch with my Paladin now.

EDIT: The feel of these changes to Paladin abilities is so satisfying. The hits sound meaty and when they connect, it feels impactful. I would definitely like to see this developed with more updates for other classes and their abilities. For now, I will leave this as patch-C, because it sounds like you may have a lot planned, and I don't want to overwhelm people with major updates every day. Let me know when you're satisfied with sound changes, and I'll add it to patch-A.

## Post 42966 by Meskhi — 2023-04-25T08:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42966#p42966 | page 19 | era: pre-1.18.1 -->

Will weapon swap animations be fixed in the future for new character models or is that impossible?

## Post 42967 by Remorsx (Barrens Chat Casualty) — 2023-04-25T08:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42967#p42967 | page 19 | era: pre-1.18.1 -->

> **Astricon wrote: Tue Apr 25, 2023 5:17 am**
> Possibly will try:
>  Differentiate seal visuals and/or sounds

seal of blood visual/sound for seal of command PLEASE

## Post 42969 by Astricon (Barrens Chat Casualty) — 2023-04-25T08:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42969#p42969 | page 19 | era: pre-1.18.1 -->

> **Meskhi wrote: Tue Apr 25, 2023 8:23 am**
> Will weapon swap animations be fixed in the future for new character models or is that impossible?

Most likely impossible

## Post 43013 by Tonky — 2023-04-25T16:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43013#p43013 | page 19 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Apr 25, 2023 4:44 am**
> > **Tonky wrote: Tue Apr 25, 2023 2:09 am**
> > So what would the process be for fixing the missing hair for High Elves with the temporary Elf patch we have?
>
>   I did not notice any missing hair issues.  The major issues needed to consider adding the improved High Elves to the main patch are the skin tones and the green eyes.

At least one of the hair styles for both genders is completely missing, leaving them entirely without any hair, and just a black filler texture in its place. I don't know which one it is yet.

## Post 43056 by Astricon (Barrens Chat Casualty) — 2023-04-25T21:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43056#p43056 | page 19 | era: pre-1.18.1 -->

Astricon's patch-C (same link) has an update. Sorry for the changes being spammy but I'm on vacation and I'd like testers especially for this one. There are so many types of weapon and armor combos that I decided not to test each of them myself and I'll just let people give feedback when relevant.

All weapon impact sounds (mostly for autoattacks) modernized.
Notes:
- Modern has no wooden mace sounds so I used wooden staff sounds in place of them. Seems good but it's the same for 2H and 1H so 2H might be a bit of a let-down. Would like feedback on this.

- Modern does not differentiate between 1H axes and 2H axes, but I think it sounds good regardless in this case.

- Very little concept how the parry sounds will work out as there were a few entries that seemed to refer to parries and I'm not sure which one will play when, so if something seems off let me know the weapon type and subtype (material) of both you and the target. There are critical parry sound files...no idea what that means lol.
I stood near the training dummies in Stormwind for a bit to listen to the sounds of people autoattacking with different weapons. Weirdly the training dummies are "flesh" material instead of wood so...do with that information what you will in your nightmares...but I gotta say the sounds are REALLY nice and crunchy. I'm very happy with the early testing I've done with this.

This update also randomly includes Druid Wrath spell sound modernization and a fix to the Level Up sound that got replaced with the modern achievement sound.

## Post 43087 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-26T00:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43087#p43087 | page 19 | era: pre-1.18.1 -->

If I'm being honest, I prefer the modern sounds being distinctive in that they're only on the abilities. With this update, it's a lot harder to differentiate my ability use from my normal attacks. What before felt like satisfying feedback because of the contrast now feels... homogenous.

I don't feel all sounds need to be modernized. In fact, visual and audio feedback works best at improving game feel when there is contrast. I like the Wrath change, for instance. My preference would be for vanilla auto attack sounds, but distinctive ability sounds.

EDIT: I made my own copy of patch-C locally that removes the attack sound changes, for now.  I may add these to patch-A but I'd like to see what else Astricon's working on before I upload a new version just yet.

*Last edited by Redmagejoe on Wed Apr 26, 2023 3:45 am, edited 1 time in total.*

## Post 43116 by Kyvothwin — 2023-04-26T03:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43116#p43116 | page 19 | era: pre-1.18.1 -->

Astricon, you're incredible. You're doing exactly what I wish I could do, literally down to the class. Super hyped to see the eyes on High Elves get fixed somehow!

## Post 43373 by Shroudedsoul (Barrens Chat Casualty) — 2023-04-27T06:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43373#p43373 | page 19 | era: pre-1.18.1 -->

> **Kyvothwin wrote: Wed Apr 26, 2023 3:22 am**
> Astricon, you're incredible. You're doing exactly what I wish I could do, literally down to the class. Super hyped to see the eyes on High Elves get fixed somehow!

I thought that they were fixed as my high Elf has blue eyes with this.

## Post 43376 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-27T07:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43376#p43376 | page 19 | era: pre-1.18.1 -->

That user is talking about blue eyes for the Legion Blood Elf textures that Tonky provided.

## Post 43507 by Astricon (Barrens Chat Casualty) — 2023-04-27T20:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43507#p43507 | page 19 | era: pre-1.18.1 -->

RedMageJoe and I discussed that we would like to have the HD Autoattack sounds as an optional [patch-D](https://drive.google.com/file/d/1Y4J8RM7uYUmVE9LZjpKXZ_SZfz4PIMUr/view?usp=share_link), so here it is! It will only work in conjunction with this new version of [patch-C](https://drive.google.com/file/d/1Y4J8RM7uYUmVE9LZjpKXZ_SZfz4PIMUr/view?usp=share_link). The way I set it up will not require maintenance or updates for patch-D unless an error is discovered, and I will keep adding new sound updates to patch-C. This way, if you don't want the new weapon autoattack sounds, just don't download patch-D! It is quite possible that there are errors but also highly probably that those errors are barely noticeable. It's a very hard to test thing with all the material combinations and the fact that modern doesn't have 100% parity with vanilla. I did however find that some TWoW (or original Vanilla) files were misplaced and were likely never working to begin with, so I fixed those where I noticed. Preliminary findings seem to be that everything is working, but that's just based on training dummies which are flesh type material (ew).

This version of patch-C also includes audio updates to Paladin Holy Light and Flash of Light! The weapon sound separation was a ton of work so assuming I am done with that for now I should be able to get a bigger batch of spell updates next time around.

## Post 43536 by Shroudedsoul (Barrens Chat Casualty) — 2023-04-28T02:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43536#p43536 | page 19 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Apr 27, 2023 7:13 am**
> That user is talking about blue eyes for the Legion Blood Elf textures that Tonky provided.

Ah, that makes sense. I just use Patch A and B from the original post. Thanks for clarifying that for me.

## Post 43582 by Astricon (Barrens Chat Casualty) — 2023-04-28T09:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43582#p43582 | page 19 | era: pre-1.18.1 -->

[patch-C](https://drive.google.com/file/d/1Y4J8RM7uYUmVE9LZjpKXZ_SZfz4PIMUr/view?usp=share_link)

Found a new way to be efficient so these are coming even faster. Paladin is pretty much done a full first-through pass minus testing the spells I lack on my character. Will move on to other classes tomorrow.

Newly Updated Paladin Spells:
- Swapped the base holy precast (charge) sound which affects Holy Light and probably some Priest spells

- Many paladin spells have a new cast (release) sound including blessings, Lay on Hands, Righteous Fury, and Holy Shock. This will not be a very noticeable change so don't go wasting your Lay on Hands to test it unless you really want to

- Reverted the sound replacements for Blessings and Seals and then updated specific ones: Blessing of Freedom, Blessing of Protection, Blessing of Sacrifice, Seal of Fury/Justice/Light/Wisdom/Command

- Updated Righteous Fury impact sound

- Updated Holy Wrath cast, missile travel, and impact sounds, but have not tested this

- Updated Divine Favor cast and impact sounds, but have not tested this

- Tried to add a stun sound effect to Seal of Justice proc, but haven't confirmed if working yet

- Updated Holy Shock impact sound for both damage and healing, but haven't tested
Previously Updated Paladin Spells:
- Judgement

- Holy Strike

- Crusader Strike

- Consecration

- Hammer of Justice

- Divine Protection/Shield

- Holy Shield

- Flash of Light

- Holy Light

## Post 43622 by Remorsx (Barrens Chat Casualty) — 2023-04-28T14:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43622#p43622 | page 19 | era: pre-1.18.1 -->

mind doing a patch to replace seal of command with seal of blood sound+visual please? would be perfect to play an elf here
and imo this new seal of command sound just doesn't feel right with the visual of priest's Inner Will

## Post 43639 by Imonobor (Bug Report Enthusiast) — 2023-04-28T15:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43639#p43639 | page 19 | era: pre-1.18.1 -->

Dayum, you guys are really getting busy with this mod, that's so great to see! Keep at it and know we all appreciate and love everything you do! Thank you! <3

## Post 43665 by Redmagejoe (Grandmaster of Forum PvP) — 2023-04-28T18:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43665#p43665 | page 19 | era: pre-1.18.1 -->

New Paladin sounds are great. I will incorporate these into local patch-A.  I will release a patch publicly when you run out of steam on your grind so I'm not asking all these wonderful people to update twice a week.

## Post 43670 by Astricon (Barrens Chat Casualty) — 2023-04-28T19:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43670#p43670 | page 19 | era: pre-1.18.1 -->

> **Remorsx wrote: Fri Apr 28, 2023 2:44 pm**
> mind doing a patch to replace seal of command with seal of blood sound+visual please? would be perfect to play an elf here
>  and imo this new seal of command sound just doesn't feel right with the visual of priest's Inner Will

I haven't figured out how to bring in visuals from future expansions yet and I don't think it's possible to separate them based on race without access to the backend, so I can't do this. I can teach you how to do it though just hit me up on discord.

## Post 43671 by Astricon (Barrens Chat Casualty) — 2023-04-28T19:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43671#p43671 | page 19 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Apr 28, 2023 6:38 pm**
> New Paladin sounds are great. I will incorporate these into local patch-A.  I will release a patch publicly when you run out of steam on your grind so I'm not asking all these wonderful people to update twice a week.

No problem I know I'm going really fast and updating a lot but that's more so I can get people to test it so I can find out if I missed anything

## Post 43681 by Faustorgo (Barrens Chat Casualty) — 2023-04-28T21:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43681#p43681 | page 19 | era: pre-1.18.1 -->

> **Astricon wrote: Thu Apr 27, 2023 8:50 pm**
> RedMageJoe and I discussed that we would like to have the HD Autoattack sounds as an optional [patch-D](https://drive.google.com/file/d/1Y4J8RM7uYUmVE9LZjpKXZ_SZfz4PIMUr/view?usp=share_link), so here it is! It will only work in conjunction with this new version of [patch-C](https://drive.google.com/file/d/1Y4J8RM7uYUmVE9LZjpKXZ_SZfz4PIMUr/view?usp=share_link). The way I set it up will not require maintenance or updates for patch-D unless an error is discovered, and I will keep adding new sound updates to patch-C. This way, if you don't want the new weapon autoattack sounds, just don't download patch-D! It is quite possible that there are errors but also highly probably that those errors are barely noticeable. It's a very hard to test thing with all the material combinations and the fact that modern doesn't have 100% parity with vanilla. I did however find that some TWoW (or original Vanilla) files were misplaced and were likely never working to begin with, so I fixed those where I noticed. Preliminary findings seem to be that everything is working, but that's just based on training dummies which are flesh type material (ew).
>
>  This version of patch-C also includes audio updates to Paladin Holy Light and Flash of Light! The weapon sound separation was a ton of work so assuming I am done with that for now I should be able to get a bigger batch of spell updates next time around.

Hello the patch d download link its the same as the patch C, i want to test the new sounds :D, also thanks for your hard work too :D

## Post 43723 by Astricon (Barrens Chat Casualty) — 2023-04-29T08:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43723#p43723 | page 19 | era: pre-1.18.1 -->

Ok this is probably the last large update for the week as I am very tired of looking at spreadsheets, but there is definitely still more to come. The goal of this spell effect beta update is to give every class at least three spells updated. I will compile in this post all the updated spells and fixes from all my work to date.
NT = Not tested

([patch-C](https://drive.google.com/file/d/1Y4J8RM7uYUmVE9LZjpKXZ_SZfz4PIMUr/view?usp=share_link))

Warrior
Heroic Strike
Charge (Barely noticeable)
Cleave
Execute (NT)
Mortal Strike (NT)
Revenge (NT)
Shield Bash
Slam
Thunder Clap

Hunter
Serpent Sting
Arcane Shot
Raptor Strike

Rogue
Sinister Strike
Backstab
Eviscerate

Paladin
Judgement
Holy Strike
Crusader Strike
Consecration
Hammer of Justice
Divine Protection/Shield
Holy Shield
Flash of Light
Holy Light
Blessing of Freedom
Blessing of Protection
Other Blessings and Righteous Fury reverted to pre-HD patch sounds
Seal of Fury (NT)
Seal of Justice + New Stun Proc Effect
Seal of Light
Seal of Wisdom
Seal of Command (NT)
Divine Favor (NT)
Holy Wrath (NT)

Druid
Wrath
Healing Touch
Rejuvenation
Moonfire
Thorns

Shaman
Oops. Forgot Shaman.

Priest
Psychic Scream (NT)
Resurrection (NT)
Flash Heal (NT)
Heal
Holy Fire (NT)
Holy Nova (NT)
Power Word: Shield
Mind Flay (NT)
Mind Blast (NT)
Shadow Word: Pain
Smite
Renew (NT)

Mage
Ice Block (NT)
Evocation (Also fixed missing visual for this and Quel'dorei Meditation)
Arcane Explosion
Blizzard
Fireball
Frostbolt
Fire Blast
Frost Nova
Pyroblast
Scorch

Warlock
Shadowbolt
Curse of Agony
Corruption
Drain Life
Fear
Immolate
Summon (Chargecast - Any Demon)
Rain of Fire (NT)
Hellfire (NT)
Drain Soul (NT)
Health Funnel (NT)

+ Many Standardized Spell Sounds like casting, charging, etc. Some were not replaced due to potential overlaps (Holy, Nature, Shadow), but many were--such as you can notice even though flamestrike is not on this list, its cast sound will still be updated

I love making these and I personally benefit from these updates as well, but if you'd like to help mitigate the time I lose to grinding, sending a gold tip by mail is appreciated (I can barely afford spells, and I'm only level 36). Character name Astricon. Thanks for the lovely responses and words of affirmation :)

Edit: Added Rain of Fire, Hellfire, Drain Soul, Health Funnel, Renew. Fixed some bugs. Mage and npc fire spells should no longer use green fire. Attempted to raise volume on Rejuvenation but unclear if it worked or my cache is broken. Fixed moonfire sound. Tested a bunch of Priest spells and applied some attempted (untested) fixes. Mage fire spells should be at a more reasonable volume and in some cases were changed. Immolate, Backstab, and Shield Bash sounds changed.

Next update: Early Shaman spells, Arcane Missiles, Starfire, Entangling Roots, Life Tap, Evasion, Gouge

*Last edited by Astricon on Sun Apr 30, 2023 11:49 pm, edited 1 time in total.*

## Post 43739 by Gald — 2023-04-29T11:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43739#p43739 | page 19 | era: pre-1.18.1 -->

Nice work !
Thank you everyone !

## Post 43744 by Rejectedgalaxy (Barrens Chat Casualty) — 2023-04-29T11:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43744#p43744 | page 19 | era: pre-1.18.1 -->

> **Johnedward wrote: Sat Apr 22, 2023 8:49 pm**
> [I created patches for the spell effects and main menu & loading screens for myself, so I might as well link them here.](https://drive.google.com/drive/folders/12Nb5pNSA85enpLDYJigKgnJ5mzzxHde6?usp=sharing) They simply replaces stuff with the vanilla files.
>
>  Patch Z changes:
>  Power Word:Shield - from 3D egg to 2D texture
>  Consecrate - Should fix the effect getting stuck.
>  Blink - Should fix the effect getting stuck
>  Mana Armour - from 3D egg to 2D texture
>
>  Splash effects from running in shallow water also tend to get stuck, but I don't know what files those are.
>
>  Patch-X replaces Main Menu and Kalimdor & Eastern Kingdom loading screens with the Vanilla versions.

Thank you for this, you literally fixed the worst parts of this patch. Only thing left I'd say needs to be removed is the purple loading bar.

## Post 43746 by Rejectedgalaxy (Barrens Chat Casualty) — 2023-04-29T11:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43746#p43746 | page 19 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Apr 28, 2023 6:38 pm**
> New Paladin sounds are great. I will incorporate these into local patch-A.  I will release a patch publicly when you run out of steam on your grind so I'm not asking all these wonderful people to update twice a week.

Please just keep it separate like the models and textures are. I really don't see a reason to merge them. Just add a patch-c for sounds on the main post.

## Post 43766 by Huma — 2023-04-29T14:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43766#p43766 | page 19 | era: pre-1.18.1 -->

i made my own version with patch A spells, patch B textures and patch C of Astricon, i dont like the new models , run animations are hugly and also that patch A drops the game performance a lot on my rig

## Post 43781 by Johnedward — 2023-04-29T15:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43781#p43781 | page 19 | era: pre-1.18.1 -->

> **Astricon wrote: Sat Apr 29, 2023 8:15 am**
> <snip>
>  Known issue: Mage fire spell impact sounds are too quiet. Will try to figure out a solution next patch.

I think the issue might be the opposite, as channeling pyroblast makes me half-deaf - the other sounds are too loud.

[EDIT] Yup I wasn't just imagining it. The new sounds are *way* louder. ![Image](https://i.imgur.com/MCJYlnD.png)

*Last edited by Johnedward on Sun Apr 30, 2023 12:53 am, edited 1 time in total.*

## Post 43838 by Coffeeguyyy — 2023-04-30T00:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43838#p43838 | page 19 | era: pre-1.18.1 -->

Hey there!

First of all,Thank you and everyone for the mod it looks AMAZING and made my experience much better.

However i need help with the Highelf.I created one to play with my friends and after lvl 30 I found this mod and now im the different one from my friends' characters.
I was wondering if there is a mod or any other solution that could help me make my character look similar. I have tried searching for something that could help, but i haven't had any luck so far.

Thanks in advance for anyone that can help me. :D

## Post 44019 by Rittemand — 2023-05-01T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44019#p44019 | page 19 | era: pre-1.18.1 -->

This is incredible - a whole new game!

I'm using the Turtle WoW client and I have a little lag when I use patch-b. If I use patch-a + patch-b it's worse.

Is there any way to get around this? I have a good computer.

## Post 44145 by Dhrazar (Barrens Chat Casualty) — 2023-05-02T17:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44145#p44145 | page 19 | era: pre-1.18.1 -->

> **Rittemand wrote: Mon May 01, 2023 5:37 pm**
> This is incredible - a whole new game!
>
>  I'm using the Turtle WoW client and I have a little lag when I use patch-b. If I use patch-a + patch-b it's worse.
>
>  Is there any way to get around this? I have a good computer.

Do you mean a stutter, like every 5min ?

## Post 44219 by Huma — 2023-05-03T09:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44219#p44219 | page 19 | era: pre-1.18.1 -->

Patch-A def decrease performance, i did some test in the same place and i lose like 30-40 fps specially if there are many players like on capital citys, and rig doesnt matter here, cpu/gpu usage its at 20%-30%

## Post 44222 by Rittemand — 2023-05-03T09:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44222#p44222 | page 19 | era: pre-1.18.1 -->

> **Dhrazar wrote: Tue May 02, 2023 5:46 pm**
> > **Rittemand wrote: Mon May 01, 2023 5:37 pm**
> > This is incredible - a whole new game!
> >
> >  I'm using the Turtle WoW client and I have a little lag when I use patch-b. If I use patch-a + patch-b it's worse.
> >
> >  Is there any way to get around this? I have a good computer.
>
>   Do you mean a stutter, like every 5min ?

In Capital cities it's loading very slow - and the mouse cursor is kinda laggy. Overall not so good performance.

## Post 44278 by Arknee — 2023-05-03T16:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44278#p44278 | page 19 | era: pre-1.18.1 -->

> **Huma wrote: Wed May 03, 2023 9:20 am**
> Patch-A def decrease performance, i did some test in the same place and i lose like 30-40 fps specially if there are many players like on capital citys, and rig doesnt matter here, cpu/gpu usage its at 20%-30%

Isn’t the client only using one core though?

## Post 44353 by Tonky — 2023-05-03T19:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44353#p44353 | page 19 | era: pre-1.18.1 -->

I've noticed both the Horde and Alliance PvP mounts are in need of some love. The old models used 1 texture file, whereas the new models use 3. I talked to Astricon and tried to figure it out myself, but editing the DBC file to update the changes is well beyond me. It did my head in trying to figure it out.

## Post 44360 by Astricon (Barrens Chat Casualty) — 2023-05-03T21:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44360#p44360 | page 20 | era: pre-1.18.1 -->

[patch-E](https://drive.google.com/file/d/1Ytf4X4jzEibExggWngeS4PBIpPeYpaw3/view?usp=sharing)

Sorry for the variety in patch letters but patch-C is my spell sounds, patch-D is my weapon sounds, and so this is for character changes. This one, praise the Light, is the glorious High Elf texture update for the improved model provided by Mehra and with help from Tonky. I remembered that there were two female faces that needed to be swapped to match with non-HD but if you notice anything else that still doesn't match let me know! should be close to 100% though.

I also changed the gems in High Elf jewelry from red and green to light and dark blue, but I didn't check if that is exact with non-HD. Figured that probably isn't as big of a deal.

## Post 44364 by Kokumuo — 2023-05-03T22:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44364#p44364 | page 20 | era: pre-1.18.1 -->

> **Astricon wrote: Wed May 03, 2023 9:12 pm**
> [patch-E](https://drive.google.com/file/d/1Ytf4X4jzEibExggWngeS4PBIpPeYpaw3/view?usp=sharing)
>
>  Sorry for the variety in patch letters but patch-C is my spell sounds, patch-D is my weapon sounds, and so this is for character changes. This one, praise the Light, is the glorious High Elf texture update for the improved model provided by Mehra and with help from Tonky. I remembered that there were two female faces that needed to be swapped to match with non-HD but if you notice anything else that still doesn't match let me know! should be close to 100% though.
>
>  I also changed the gems in High Elf jewelry from red and green to light and dark blue, but I didn't check if that is exact with non-HD. Figured that probably isn't as big of a deal.

Do you have a link to Patch-D?  The link in the post above goes to the same as the Patch-C in the same (and earlier) posts.

## Post 44374 by Astricon (Barrens Chat Casualty) — 2023-05-04T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44374#p44374 | page 20 | era: pre-1.18.1 -->

> **Kokumuo wrote: Wed May 03, 2023 10:01 pm**
> Do you have a link to Patch-D?  The link in the post above goes to the same as the Patch-C in the same (and earlier) posts.

[patch-D](https://drive.google.com/file/d/1EbNJDdexwKN6-VX38TuBTj84hLSPyjk_/view?usp=share_link)

It may download as patch-C for some reason but just rename it and it should be fine.

## Post 44375 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-04T02:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44375#p44375 | page 20 | era: pre-1.18.1 -->

The High Elves look amazing, Astricon!  I'll add them to patch-A and upload a new version tomorrow.

Also, for spell sounds, Warlock's Immolate still uses new fire cast sound, and Rain of Fire became orange instead of green.

## Post 44377 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-04T03:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44377#p44377 | page 20 | era: pre-1.18.1 -->

************ UPDATE ************

New version of patch-A available in the first post!  Thanks to Astricon and Tonky for their hard work, Legion-era Blood Elf models and textures have been ported and given blue eyes in the Turtle HD patch! HD High Elves are now available! Rejoice!

Once all the bug fixes and testing are done, spell sound and effect updates will be merged into patch-A. Please be patient!

## Post 44378 by Mehra — 2023-05-04T03:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44378#p44378 | page 20 | era: pre-1.18.1 -->

> **Astricon wrote: Wed May 03, 2023 9:12 pm**
> [patch-E](https://drive.google.com/file/d/1Ytf4X4jzEibExggWngeS4PBIpPeYpaw3/view?usp=sharing)
>
>  Sorry for the variety in patch letters but patch-C is my spell sounds, patch-D is my weapon sounds, and so this is for character changes. This one, praise the Light, is the glorious High Elf texture update for the improved model provided by Mehra and with help from Tonky. I remembered that there were two female faces that needed to be swapped to match with non-HD but if you notice anything else that still doesn't match let me know! should be close to 100% though.
>
>  I also changed the gems in High Elf jewelry from red and green to light and dark blue, but I didn't check if that is exact with non-HD. Figured that probably isn't as big of a deal.

Woaaah!!! They look AMAZING!

Astricon, Tonky Great work!

## Post 44379 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-04T04:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44379#p44379 | page 20 | era: pre-1.18.1 -->

> **Mehra wrote: Thu May 04, 2023 3:43 am**
> Woaaah!!! They look AMAZING!
>
>  Astricon, Tonky Great work!

Be sure to remove patch-E with this latest version of patch-A. There were some DBC issues, and all of patch-E has otherwise been merged into the latest patch-A.

## Post 44388 by Faustorgo (Barrens Chat Casualty) — 2023-05-04T07:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44388#p44388 | page 20 | era: pre-1.18.1 -->

> **Astricon wrote: Thu May 04, 2023 12:54 am**
> > **Kokumuo wrote: Wed May 03, 2023 10:01 pm**
> > Do you have a link to Patch-D?  The link in the post above goes to the same as the Patch-C in the same (and earlier) posts.
>
>  [patch-D](https://drive.google.com/file/d/1EbNJDdexwKN6-VX38TuBTj84hLSPyjk_/view?usp=share_link)
>
>  It may download as patch-C for some reason but just rename it and it should be fine.

Hi, i kinda need access aprovation for the file patch (sounds) D

## Post 44425 by Diamondbond — 2023-05-04T14:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44425#p44425 | page 20 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu May 04, 2023 4:03 am**
> > **Mehra wrote: Thu May 04, 2023 3:43 am**
> > Woaaah!!! They look AMAZING!
> >
> >  Astricon, Tonky Great work!
>
>   Be sure to remove patch-E with this latest version of patch-A. There were some DBC issues, and all of patch-E has otherwise been merged into the latest patch-A.

![Image](https://0x0.st/HZHI.png#nsfw)

weird issue with the new patch

## Post 44438 by Johnedward — 2023-05-04T16:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44438#p44438 | page 20 | era: pre-1.18.1 -->

I don't really see the need to merge everything to Patch-A, having different things in different files allows not only people to pick and choose what they want to use, it also makes updating easier when you don't have to download the entire file every time.

## Post 44443 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-04T16:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44443#p44443 | page 20 | era: pre-1.18.1 -->

> **Johnedward wrote: Thu May 04, 2023 4:27 pm**
> I don't really see the need to merge everything to Patch-A, having different things in different files allows not only people to pick and choose what they want to use, it also makes updating easier when you don't have to download the entire file every time.

The reason for this is multi-fold:
They're being merged as they are things I have desired for my patch for a long time, I like to keep my Data folder clean and have all the base changes consolidated, there are some oversights and bugs in ad-hoc patches that I usually fix before merging them to patch-A, so using loose patches increases the likelihood of incompatibility or bugs or outdated versions, and as I said in my first post: I am working on a comprehensive patch, not one that requires juggling five different sub-patches. If after the fact the contributors wish to make their own split versions, that is their prerogative.

## Post 44447 by Lorencor — 2023-05-04T17:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44447#p44447 | page 20 | era: pre-1.18.1 -->

> **Johnedward wrote: Thu May 04, 2023 4:27 pm**
> I don't really see the need to merge everything to Patch-A, having different things in different files allows not only people to pick and choose what they want to use, it also makes updating easier when you don't have to download the entire file every time.

This in the near future could become a problem. With multiple files that can conflict with each other.

Better to consolidate into a single file.

## Post 44450 by Imonobor (Bug Report Enthusiast) — 2023-05-04T17:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44450#p44450 | page 20 | era: pre-1.18.1 -->

> **Huma wrote: Wed May 03, 2023 9:20 am**
> Patch-A def decrease performance, i did some test in the same place and i lose like 30-40 fps specially if there are many players like on capital citys, and rig doesnt matter here, cpu/gpu usage its at 20%-30%

I would recommend using DXVK if you're having problems with performance and you have a moderately modern GPU. I did so and loading times and lag are significantly less now.
You can get it as part of hannesmann's VanillaFixes, search it up on github and get the DXVK version.

## Post 44469 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-04T18:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44469#p44469 | page 20 | era: pre-1.18.1 -->

Noticed a reproducible crash with the High Elf update on specific characters. I cannot narrow down what the issue is, as it doesn't appear to be a custom skin or any obvious armor pieces. The character Tomatogirl appeared to be the source of the issue, but none of their character or gear immediately raises red flags.

This bears investigating.

## Post 44514 by Thala — 2023-05-05T02:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44514#p44514 | page 20 | era: pre-1.18.1 -->

Seems like there is a bug with sheathing and unsheathing weapons with H'elves. Otherwise friggin great work!

## Post 44521 by Cenerae — 2023-05-05T04:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44521#p44521 | page 20 | era: pre-1.18.1 -->

Not sure if it's been mentioned yet, but I've noticed that Arcane Missiles doesn't have any visual effects at all, and Evocate (and by extension, the high elf racial) is lacking any sound effect. Spirit healers also have a strange solid white texture covering them (though I can see the wings and feet poking out of it). Everything else that I've noticed so far looks great, though, keep up the good work ^^

## Post 44524 by Astricon (Barrens Chat Casualty) — 2023-05-05T05:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44524#p44524 | page 20 | era: pre-1.18.1 -->

> **Diamondbond wrote: Thu May 04, 2023 2:08 pm**
> ![Image](https://0x0.st/HZHI.png#nsfw)
>
>  weird issue with the new patch

Hm. I'll try to figure this out

## Post 44525 by Astricon (Barrens Chat Casualty) — 2023-05-05T05:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44525#p44525 | page 20 | era: pre-1.18.1 -->

> **Thala wrote: Fri May 05, 2023 2:20 am**
> Seems like there is a bug with sheathing and unsheathing weapons with H'elves. Otherwise friggin great work!

This is unfixable for now and is the case for every hd character model at the moment.

## Post 44526 by Astricon (Barrens Chat Casualty) — 2023-05-05T05:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44526#p44526 | page 20 | era: pre-1.18.1 -->

> **Cenerae wrote: Fri May 05, 2023 4:22 am**
> Not sure if it's been mentioned yet, but I've noticed that Arcane Missiles doesn't have any visual effects at all, and Evocate (and by extension, the high elf racial) is lacking any sound effect. Spirit healers also have a strange solid white texture covering them (though I can see the wings and feet poking out of it). Everything else that I've noticed so far looks great, though, keep up the good work ^^

All of these are strange. You're using my most recent patch-C for this?
Edit: my high elf racial and evocation are working and this was confirmed by RedMageJoe so make sure you delete your WDB folder and if that doesn't fix it then redownload the patch making sure that you delete other older patches that are no longer relevant (like my patch-E). The Arcane Missiles is a known issue though and I will be working to fix that in the days to come. The spirit healers should not be that way though. We didn't touch them.

## Post 44537 by Etojehell — 2023-05-05T08:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44537#p44537 | page 20 | era: pre-1.18.1 -->

> **Astricon wrote: Fri May 05, 2023 5:18 am**
> > **Diamondbond wrote: Thu May 04, 2023 2:08 pm**
> > ![Image](https://0x0.st/HZHI.png#nsfw)
> >
> >  weird issue with the new patch
>
>   Hm. I'll try to figure this out

"When I went to tanning, but I forgot to take off my leggings."   happy_turtle_head   happy_turtle_head   happy_turtle_head

## Post 44543 by Terribleidea — 2023-05-05T09:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44543#p44543 | page 20 | era: pre-1.18.1 -->

High Elven NPC's faces seem all jumbled with the latest version of Patch A. The player characters are fine, however.

## Post 44545 by Sanyachan93 — 2023-05-05T09:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44545#p44545 | page 20 | era: pre-1.18.1 -->

I had to uninstall these mods, every was fine, textures were changed but after I closed and tried to open the game again I got the error: "World of Warcraft was Unable to Startup 3D Acceleration"

## Post 44554 by Papapepi — 2023-05-05T10:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44554#p44554 | page 20 | era: pre-1.18.1 -->

This is absolutely amazing, superb work!

## Post 44557 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-05T10:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44557#p44557 | page 20 | era: pre-1.18.1 -->

> **Terribleidea wrote: Fri May 05, 2023 9:13 am**
> High Elven NPC's faces seem all jumbled with the latest version of Patch A. The player characters are fine, however.

Just like with many NPCs of other races before this update you may have seen with distorted faces, prebaked textures for NPCs will need to be recreated to fix this issue now that they're all using the new models.

## Post 44572 by Cenerae — 2023-05-05T13:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44572#p44572 | page 20 | era: pre-1.18.1 -->

> **Astricon wrote: Fri May 05, 2023 5:19 am**
> > **Cenerae wrote: Fri May 05, 2023 4:22 am**
> > Not sure if it's been mentioned yet, but I've noticed that Arcane Missiles doesn't have any visual effects at all, and Evocate (and by extension, the high elf racial) is lacking any sound effect. Spirit healers also have a strange solid white texture covering them (though I can see the wings and feet poking out of it). Everything else that I've noticed so far looks great, though, keep up the good work ^^
>
>   All of these are strange. You're using my most recent patch-C for this?
>  Edit: my high elf racial and evocation are working and this was confirmed by RedMageJoe so make sure you delete your WDB folder and if that doesn't fix it then redownload the patch making sure that you delete other older patches that are no longer relevant (like my patch-E). The Arcane Missiles is a known issue though and I will be working to fix that in the days to come. The spirit healers should not be that way though. We didn't touch them.

Ah, the opening post made it sound like I only needed patches A and B. I didn't see anything about a C. This may be user error then, I'll go sift through the thread for C and see if that fixes it.

## Post 44573 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-05T13:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44573#p44573 | page 20 | era: pre-1.18.1 -->

For clarification, patch-C is a "beta" patch that will be merged into patch-A when it's good to go. It has been known that patch-A has broken Evocation effects since its implementation.

## Post 44575 by Cenerae — 2023-05-05T13:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44575#p44575 | page 20 | era: pre-1.18.1 -->

Okay, the patch C and D were installed. That indeed fixed the sound.

I re-installed Patch A (and cleared my WDB), but I'm still seeing this for my spirit healers

![Image](https://i.imgur.com/K1TgR2m.png)

## Post 44579 by Dhrazar (Barrens Chat Casualty) — 2023-05-05T13:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44579#p44579 | page 20 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri May 05, 2023 10:44 am**
> Just like with many NPCs of other races before this update you may have seen with distorted faces, prebaked textures for NPCs will need to be recreated to fix this issue now that they're all using the new models.

I really love this project, but when will those NPCs remodeled?  I mean Kul Tiran faces for example are since the very begining broke, now Highelves. I'm switching back to normal, those broken faces for months are breaking the atmosphere  too often.

## Post 44606 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-05T17:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44606#p44606 | page 20 | era: pre-1.18.1 -->

A lot of (not difficult, but very TEDIOUS) work is required to redo prebake textures. All I can say is to please be patient.

> **Cenerae wrote: Fri May 05, 2023 1:24 pm**
>

A very small number of players have reported this issue since this project was started, and we have never been able to figure out why this occurs. It appears to be related to some graphics setting or graphics card behavior, but have never been able to narrow it down. It is not reproducible on my side.

## Post 44634 by Scriptix — 2023-05-05T20:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44634#p44634 | page 20 | era: pre-1.18.1 -->

Hey, really big improvement in graphics, thanks.
I'm just wondering if I want to revert a few changes to original, for example some sound effects, should I just open the patch with MPQ Editor, delete the related file/folder in question and it should be all good?

## Post 44641 by Johnedward — 2023-05-05T23:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44641#p44641 | page 20 | era: pre-1.18.1 -->

> **Scriptix wrote: Fri May 05, 2023 8:58 pm**
> ...if I want to revert a few changes to original...

If they simply directly replace vanilla assets, then yes. A more permanent way is to create a new .MPQ file with the old files and have that load last - that's how I created [my small patches for example](https://forum.turtlecraft.gg/viewtopic.php?p=42617#p42617).

However most of the ones added in the recent "Patch-C" by Astricon use modified databases to create the new references - e.g Blizzard isn't "sound/spells/blizzardImpact1a.wav" but "sound/spells/mage/Spell_MA_Revamp_BlizzardImpact1A.ogg". If you remove those or try to replace them with the vanilla files, I'd assume the result is just silence.

## Post 44859 by Stillwater — 2023-05-07T22:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44859#p44859 | page 20 | era: pre-1.18.1 -->

Amazing work, thank you so much

## Post 44860 by Bittermens (Barrens Chat Casualty) — 2023-05-08T00:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44860#p44860 | page 20 | era: pre-1.18.1 -->

May i Suggest replacing the old BE bow animations with the new ones from legion? mainly females.

## Post 44866 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-08T01:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44866#p44866 | page 20 | era: pre-1.18.1 -->

> **Bittermens wrote: Mon May 08, 2023 12:08 am**
> May i Suggest replacing the old BE bow animations with the new ones from legion? mainly females.

All the animations are tied to the models. Now that we're using Legion Blood Elf in this patch, it should have the animations you're looking for.

## Post 44928 by Josephturtlef — 2023-05-08T15:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44928#p44928 | page 20 | era: pre-1.18.1 -->

Hey, guys!
Amazing overhaul!
I experience some issues though with spells like holy nova - the effect loops indefinitely.
Another spell is something like a blizzard - ice shards falling from the sky - also indefinite loop.

## Post 44930 by Josephturtlef — 2023-05-08T15:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44930#p44930 | page 21 | era: pre-1.18.1 -->

Ok, I see this is addressed in patches Z & X.
I am going to combine the list:

It is not too clear what is what, so if you plan on integrating those to A&B - please let us know :)
Outstanding piece of work, btw.

## Post 44949 by Josephturtlef — 2023-05-08T16:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44949#p44949 | page 21 | era: pre-1.18.1 -->

Just noticed, weapon Sheathe doesn't work even will all the patches.
Tested on Night Elf Female.

## Post 44990 by Spoing — 2023-05-08T20:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44990#p44990 | page 21 | era: pre-1.18.1 -->

Fiona longears in theramore seems to have some problems with her face (i think the texture doesnt map properly, so her eyes are in the wrong spot). (there is also an eye on her ear)

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/osVCN7F]

## Post 44993 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-08T21:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44993#p44993 | page 21 | era: pre-1.18.1 -->

Already discussed this in earlier posts. Please do not submit known issues so we can try to keep the post count on this thread manageable.

## Post 45278 by Grauhase — 2023-05-10T05:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45278#p45278 | page 21 | era: pre-1.18.1 -->

I don't mean to sound rude, but I think posting links in this thread should be limited to  Redmagejoe since this is his project and his thread + the contributors he works with (ex: Astricon).
Many people posting links, combining patches and etc that have not yet been incorporated into the project's official patches generate doubts and confusion.

## Post 45340 by Ayansky11 — 2023-05-10T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45340#p45340 | page 21 | era: pre-1.18.1 -->

agree, i will wait official pathes on the main paige

## Post 45380 by Dhrazar (Barrens Chat Casualty) — 2023-05-10T18:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45380#p45380 | page 21 | era: pre-1.18.1 -->

Astricon is realising that frequent because of beta testing, that Joe can include this, when all is working fine.
Other ppl releasing modified versions, because some things they don't like included.
So, there's a version for everybodys flavour.

## Post 45385 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-10T19:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45385#p45385 | page 21 | era: pre-1.18.1 -->

> **Dhrazar wrote: Wed May 10, 2023 6:23 pm**
> Astricon is realising that frequent because of beta testing, that Joe can include this, when all is working fine.
>  Other ppl releasing modified versions, because some things they don't like included.
>  So, there's a version for everybodys flavour.

I would PREFER that people make their own thread as a derivative work on the Modding board rather than clogging up or hijacking my thread where I need to be able to review people's feedback and bug reports, and stay on top of Astricon's latest update without asking him to post a duplicate link in every one of his posts.  The Modding board moves slowly enough that we don't have to compete for place on Page 1.

## Post 45388 by Akalix (Turtle WoW Team) [STAFF] — 2023-05-10T19:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45388#p45388 | page 21 | era: pre-1.18.1 -->

> **Josephturtlef wrote: Mon May 08, 2023 3:14 pm**
> Ok, I see this is addressed in patches Z & X.
>  I am going to combine the list:
>
>  It is not too clear what is what, so if you plan on integrating those to A&B - please let us know :)
>  Outstanding piece of work, btw.

I've gone ahead and removed the links from this post.

Please report as a separate thread, I want to avoid confusion with what mod is part of which project.

## Post 45465 by Menorrhee — 2023-05-11T12:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45465#p45465 | page 21 | era: pre-1.18.1 -->

Hello,

I just want to thank you for this work.

I really enjoy my new trip in Azeroth in turtle mode because of this !

Bb =)

## Post 45500 by Meskhi — 2023-05-11T17:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45500#p45500 | page 21 | era: pre-1.18.1 -->

there are a lot of visual bugs in cities sometimes when I move the mouse, especially in IronForge, is there a way to fix this? I'm only using patch-b.

## Post 45502 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-11T17:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45502#p45502 | page 21 | era: pre-1.18.1 -->

> **Meskhi wrote: Thu May 11, 2023 5:06 pm**
> there are a lot of visual bugs in cities sometimes when I move the mouse, especially in IronForge, is there a way to fix this? I'm only using patch-b.

There are no visual bugs correlating directly to patch-B. It is likely a graphics setting / hardware issue that patch-B simply exacerbates, but is certainly not responsible for.

## Post 45503 by Meskhi — 2023-05-11T17:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45503#p45503 | page 21 | era: pre-1.18.1 -->

Yep fixed it, it was the refresh rate, I had it on 144hz, and switching to a lower rate fixed it.

## Post 45725 by Etojehell — 2023-05-13T10:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45725#p45725 | page 21 | era: pre-1.18.1 -->

Hi guys. The white bear skin on the druid is missing the sound of footsteps. Is this because of patch A, B or what? The standard bear has no such problem.

[embed: https://s9e.github.io/iframe/2/imgur.min.html#jEWZzfX]

## Post 45733 by Lokens — 2023-05-13T11:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45733#p45733 | page 21 | era: pre-1.18.1 -->

hello guys, what you did is very cool thank you for this, please fix in the next patch update, dark iron dwarves (premium skin), all their models in the world work fine, and models from the store have a broken face, thanks again for your work  turtle_in_love_head

## Post 45766 by Johnedward — 2023-05-13T16:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45766#p45766 | page 21 | era: pre-1.18.1 -->

> **Akalix wrote: Wed May 10, 2023 7:15 pm**
> Please report as a separate thread, I want to avoid confusion with what mod is part of which project.

Mine were direct modifications to this HD patch itself, reverting some of the changes back to vanilla - notably some spell effects that multiple people have repeatedly reported as getting stuck (concecration & blink) but Redmagejoe hasn't been able to reproduce or fix.

Speaking of the edits, where are the 3d bubble effects for holy and mana shield actually from? I haven't been able to find any screenshot of from any version of retail where they wouldn't be 2d shimmers.

## Post 45995 by Act — 2023-05-15T23:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45995#p45995 | page 21 | era: pre-1.18.1 -->

Hello there!

First of all, thank you guys for your great effort! It looks amazing on those screenshots!
It is very likely that I'm simply dumb but I cannot make it work on my machine. I'm trying patch-A mentioned in the first post and that's what I get:
<https://imgur.com/a/x7HTOae>

In-game it looks the same and crashes to desktop after few seconds.

I already tried:
 1. Deleting WDB folder
 2. Using DXVK
 3. Changing various Video options in-game

Anyone can share an idea what could be wrong? It's GTX1070Ti under the hood, if that matters.

Best Regards,
Act

## Post 46000 by Routable — 2023-05-16T01:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46000#p46000 | page 21 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed May 10, 2023 7:03 pm**
> > **Dhrazar wrote: Wed May 10, 2023 6:23 pm**
> > Astricon is realising that frequent because of beta testing, that Joe can include this, when all is working fine.
> >  Other ppl releasing modified versions, because some things they don't like included.
> >  So, there's a version for everybodys flavour.
>
>   I would PREFER that people make their own thread as a derivative work on the Modding board rather than clogging up or hijacking my thread where I need to be able to review people's feedback and bug reports, and stay on top of Astricon's latest update without asking him to post a duplicate link in every one of his posts.  The Modding board moves slowly enough that we don't have to compete for place on Page 1.

Have you considered starting a discord specifically for this project?

Bug reports could be organized in their own channels, and a general discussion could still take place. Likewise, contributors could have their own channels where work might be shared.

Something to consider. Forum style discussions are a bit of a dying medium.

## Post 46001 by Bittermens (Barrens Chat Casualty) — 2023-05-16T01:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46001#p46001 | page 21 | era: pre-1.18.1 -->

The new Gun weapon sounds are terrible

## Post 46005 by Manateufel — 2023-05-16T01:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46005#p46005 | page 21 | era: pre-1.18.1 -->

Redmagejoe you are the real champ here, thanks for this mod it makes the game feel 10 times better.

## Post 46008 by Visagezero — 2023-05-16T02:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46008#p46008 | page 21 | era: pre-1.18.1 -->

Fantastic work Redmagejoe, enjoying this a lot.

## Post 46097 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-16T20:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46097#p46097 | page 21 | era: pre-1.18.1 -->

Please, do not thank me. All of the most recent heavy lifting is being done by the amazing contributions of Astricon and Tonky. On that note...

 ************ UPDATE ************

New version of patch-A available in the first post!  HUGE update to spell effects and sounds, thanks to the hard and diligent work of Astricon.  ALL HIGH ELF NPC FACES HAVE BEEN FIXED, thanks hugely to Tonky and Astricon, who figured out how to automate the process somewhat.  Look forward to this fix being applied to ALL NPC faces in future updates.  A few mount textures have been fixed as well.  This update is not a final version of the spell updates, and there are some minor bugs and some unsatisfactory sound changes that will be addressed in future versions.

EDIT: There was a small issue with uploading. Please give it another 15 minutes from the time of this post before the new version will be available.

## Post 46104 by Dhrazar (Barrens Chat Casualty) — 2023-05-16T21:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46104#p46104 | page 21 | era: pre-1.18.1 -->

Thank you so much for this, guys!

*Last edited by Dhrazar on Tue May 16, 2023 11:25 pm, edited 1 time in total.*

## Post 46105 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-16T21:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46105#p46105 | page 21 | era: pre-1.18.1 -->

Hmm... There was a sound for High Elf Racial and Evocation, but it seems like in transferring Astricon's patch into mine, I may have broken it...  Scratch that, it's the Arcane casting sound I broke. Whoops.

*Last edited by Redmagejoe on Wed May 17, 2023 12:08 am, edited 1 time in total.*

## Post 46113 by Kalbarakat1122 — 2023-05-16T23:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46113#p46113 | page 21 | era: pre-1.18.1 -->

When I put the files into my data folder and log into the game all my skills and and skill book break. Am I missing anything?

## Post 46114 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-16T23:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46114#p46114 | page 21 | era: pre-1.18.1 -->

> **Kalbarakat1122 wrote: Tue May 16, 2023 11:49 pm**
> When I put the files into my data folder and log into the game all my skills and and skill book break. Am I missing anything?

Make sure you're using the latest version and not the older version I mentioned in my post I had a delay in replacing.

## Post 46117 by Kalbarakat1122 — 2023-05-17T00:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46117#p46117 | page 21 | era: pre-1.18.1 -->

Thank you. I found them and its working now

## Post 46369 by Korbendallas2k4 — 2023-05-18T02:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46369#p46369 | page 21 | era: pre-1.18.1 -->

Can you install Patch A but not turn on the "new" character models that blizzard introduced with Warlords and the "new" sounds that they introduced with Cata (horrible gun/bow sounds and muted spells like chain lightning).

## Post 46372 by Kiersteadmo (Barrens Chat Casualty) — 2023-05-18T04:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46372#p46372 | page 21 | era: pre-1.18.1 -->

I added the files to my ones you said and i coudl nto connect to the server

## Post 46373 by Astricon (Barrens Chat Casualty) — 2023-05-18T04:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46373#p46373 | page 21 | era: pre-1.18.1 -->

if you are experiencing missing sounds try re-downloading patch-A. it was just updated with some bug fixes.

## Post 46380 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-18T06:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46380#p46380 | page 21 | era: pre-1.18.1 -->

> **Korbendallas2k4 wrote: Thu May 18, 2023 2:10 am**
> Can you install Patch A but not turn on the "new" character models that blizzard introduced with Warlords and the "new" sounds that they introduced with Cata (horrible gun/bow sounds and muted spells like chain lightning).

That's literally all patch-A is. Why download patch-A if you have no desire to use the patch?

## Post 46401 by Korbendallas2k4 — 2023-05-18T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46401#p46401 | page 21 | era: pre-1.18.1 -->

I saw "world models" there, and I appreciate your Patch-B, so i assumed world models would be more improved items/textures.

## Post 46434 by Jokke — 2023-05-18T17:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46434#p46434 | page 21 | era: pre-1.18.1 -->

Have sounds effects in Patch A been updated as well? Mage spells don't sound right at all.
The previous version of the Patch A I used was from ~May 5th, and that sounded right.

## Post 46436 by Astricon (Barrens Chat Casualty) — 2023-05-18T18:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46436#p46436 | page 21 | era: pre-1.18.1 -->

[tr][/tr]
> **Jokke wrote: Thu May 18, 2023 5:59 pm**
> Have sounds effects in Patch A been updated as well? Mage spells don't sound right at all.
>  The previous version of the Patch A I used was from ~May 5th, and that sounded right.

Sounds were updated. Some are still a bit broken. Don't know what you mean by "don't sound right" so elaborate.

## Post 46439 by Adorlastus — 2023-05-18T18:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46439#p46439 | page 21 | era: pre-1.18.1 -->

Great work all! Totally changes the experience!   turtle_in_love_head

## Post 46447 by Jokke — 2023-05-18T19:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46447#p46447 | page 22 | era: pre-1.18.1 -->

> **Astricon wrote: Thu May 18, 2023 6:28 pm**
> [tr][/tr]
> > **Jokke wrote: Thu May 18, 2023 5:59 pm**
> > Have sounds effects in Patch A been updated as well? Mage spells don't sound right at all.
> >  The previous version of the Patch A I used was from ~May 5th, and that sounded right.
>
>   Sounds were updated. Some are still a bit broken. Don't know what you mean by "don't sound right" so elaborate.

Seems like I'm mostly thinking of Blink (seems bugged to me -
[embed: https://www.youtube.com/embed/roNhhkl_5Ww]
I feel like casting Frostbolt is also sounding a bit weird, a bit too loud perhaps (compared to the very tame Fireball cast sound).

Also seems like Mana Shield got reverted to the original 2D bubble/texture? Not sure if that was intended (couldn't find any post relating to this)
[embed: https://s9e.github.io/iframe/2/imgur.min.html#lpqOzNE]

## Post 46483 by Astricon (Barrens Chat Casualty) — 2023-05-18T22:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46483#p46483 | page 22 | era: pre-1.18.1 -->

> **Jokke wrote: Thu May 18, 2023 7:30 pm**
> Seems like I'm mostly thinking of Blink

Known issue thank you. Other known issues include Arcane Missiles (unless this is fixed and I didn't know) and Rain of Fire should be green instead of red. Shield bash may be changed in the future, and Backstab might be too loud.

> **Jokke wrote: Thu May 18, 2023 7:30 pm**
> I feel like casting Frostbolt is also sounding a bit weird, a bit too loud perhaps (compared to the very tame Fireball cast sound).

I know some users experience the sounds at unexpected volumes which is odd. Frostbolt cast was indeed changed but I didn't notice it being too loud. Maybe a video of this would help so I can compare with mine. Do it side by side with Fireball if you can.

> **Jokke wrote: Thu May 18, 2023 7:30 pm**
> Also seems like Mana Shield got reverted to the original 2D bubble/texture? Not sure if that was intended

This is intended. The HD Shields were unpopular and were never used in the future of WoW. They're quite gaudy. If you want them back it's relatively easy to make your own custom patch to do that using previous versions of the patch to find the models.

## Post 46577 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-19T08:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46577#p46577 | page 22 | era: pre-1.18.1 -->

Coming soon... All the donation shop skins fixed!

## Post 46657 by Hajache — 2023-05-19T19:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46657#p46657 | page 22 | era: pre-1.18.1 -->

does anyone else have the same problem? when a paladin uses consecrate the aura on the ground it does not disappear, it is very annoying when up to 5 auras are staked in the same place or area

## Post 46664 by Astricon (Barrens Chat Casualty) — 2023-05-19T20:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46664#p46664 | page 22 | era: pre-1.18.1 -->

> **Hajache wrote: Fri May 19, 2023 7:20 pm**
> does anyone else have the same problem? when a paladin uses consecrate the aura on the ground it does not disappear, it is very annoying when up to 5 auras are staked in the same place or area

This should be fixed in the latest version of the patch-A in an un-announced update, so if you are experiencing this, please redownload and delete your WDB folder. If the issue persists, then let us know.

## Post 46667 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-19T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46667#p46667 | page 22 | era: pre-1.18.1 -->

Someone recently said that deleting cache fixed it for them.

## Post 46688 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-20T02:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46688#p46688 | page 22 | era: pre-1.18.1 -->

************ UPDATE ************

New version of patch-A on the first post.  Major spell updates and fixes for all Human, Dwarf, Orc, Tauren, High Elf, and Gnome donation shop skins, courtesy of Astricon and Tonky!  This is still a WIP, and there may be some minor bugs, but rest assured that in time all the skins will be fully working on the HD patch.

Some slight tweaks to one or two Orc skins, a slight improvement to Tauren Spirit Walker, and an update for Night Elf and Troll donation skins is in the pipe. Stay tuned for updates!

## Post 46752 by Mrrosh (Barrens Chat Casualty) — 2023-05-20T10:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46752#p46752 | page 22 | era: pre-1.18.1 -->

Can you fix the Swift Brewfest Ram model? <https://database.turtlecraft.gg/?npc=40028>

## Post 46756 by Canisus123 — 2023-05-20T11:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46756#p46756 | page 22 | era: pre-1.18.1 -->

My High elf using the dark ranger skin has a face now, but his mouth is a bit high up!

[https://i.imgur.com/8W9zq3j_d.webp?maxw ... lity=grand](https://i.imgur.com/8W9zq3j_d.webp?maxwidth=760&fidelity=grand)

## Post 46786 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-20T17:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46786#p46786 | page 22 | era: pre-1.18.1 -->

> **Canisus123 wrote: Sat May 20, 2023 11:09 am**
> My High elf using the dark ranger skin has a face now, but his mouth is a bit high up!
>
>  [https://i.imgur.com/8W9zq3j_d.webp?maxw ... lity=grand](https://i.imgur.com/8W9zq3j_d.webp?maxwidth=760&fidelity=grand)

Already fixed in the next version currently being worked on!

> **Mrrosh wrote: Sat May 20, 2023 10:38 am**
> Can you fix the Swift Brewfest Ram model? <https://database.turtlecraft.gg/?npc=40028>

It's on the to-do list!

## Post 46816 by Oran1 — 2023-05-20T23:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46816#p46816 | page 22 | era: pre-1.18.1 -->

Hey i seem to be getting this error when i try play my Tauren but i can make a new one and it doesn't crash... ??  Only the one i have already made seems to get this error.

![Image](https://i.ibb.co/CnjP3x3/error.png)

## Post 46817 by Canisus123 — 2023-05-20T23:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46817#p46817 | page 22 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat May 20, 2023 5:31 pm**
> > **Canisus123 wrote: Sat May 20, 2023 11:09 am**
> > My High elf using the dark ranger skin has a face now, but his mouth is a bit high up!
> >
> >  [https://i.imgur.com/8W9zq3j_d.webp?maxw ... lity=grand](https://i.imgur.com/8W9zq3j_d.webp?maxwidth=760&fidelity=grand)
>
>   Already fixed in the next version currently being worked on!
>
>
> > **Mrrosh wrote: Sat May 20, 2023 10:38 am**
> > Can you fix the Swift Brewfest Ram model? <https://database.turtlecraft.gg/?npc=40028>
>
>   It's on the to-do list!

Glad to hear it!

## Post 46827 by Astricon (Barrens Chat Casualty) — 2023-05-21T05:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46827#p46827 | page 22 | era: pre-1.18.1 -->

> **Oran1 wrote: Sat May 20, 2023 11:34 pm**
> Hey i seem to be getting this error when i try play my Tauren but i can make a new one and it doesn't crash... ??  Only the one i have already made seems to get this error.
>
>  ![Image](https://i.ibb.co/CnjP3x3/error.png)

can you post a picture of your crashing tauren from character select? and where is your tauren logging into? Orgrimmar?

## Post 46828 by Oran1 — 2023-05-21T05:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46828#p46828 | page 22 | era: pre-1.18.1 -->

> **Astricon wrote: Sun May 21, 2023 5:30 am**
> > **Oran1 wrote: Sat May 20, 2023 11:34 pm**
> > Hey i seem to be getting this error when i try play my Tauren but i can make a new one and it doesn't crash... ??  Only the one i have already made seems to get this error.
> >
> >  ![Image](https://i.ibb.co/CnjP3x3/error.png)
>
>   can you post a picture of your crashing tauren from character select? and where is your tauren logging into? Orgrimmar?

Sure, I had to remove the hd textures to click on him if not it will just crash:
![Image](https://i.ibb.co/zxq748n/moo.png)

## Post 46831 by Kalbarakat1122 — 2023-05-21T08:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46831#p46831 | page 22 | era: pre-1.18.1 -->

> **Oran1 wrote: Sat May 20, 2023 11:34 pm**
> Hey i seem to be getting this error when i try play my Tauren but i can make a new one and it doesn't crash... ??  Only the one i have already made seems to get this error.
>
>  ![Image](https://i.ibb.co/CnjP3x3/error.png)

I was getting that error a few days ago too but I just removed the files and redownloaded them and it seemed to fix it for me.

## Post 46844 by Hajache — 2023-05-21T11:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46844#p46844 | page 22 | era: pre-1.18.1 -->

hello, the effect of area the consecrated has been fixed, but I have discovered other effects that don't disappear either..... the druid's tranquility effect doesn't disappear, the poison cloud that makes venoxis in ZG doesn't disappear either

## Post 46850 by Bittermens (Barrens Chat Casualty) — 2023-05-21T12:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46850#p46850 | page 22 | era: pre-1.18.1 -->

> **Oran1 wrote: Sat May 20, 2023 11:34 pm**
> Hey i seem to be getting this error when i try play my Tauren but i can make a new one and it doesn't crash... ??  Only the one i have already made seems to get this error.
>
>  ![Image](https://i.ibb.co/CnjP3x3/error.png)

i get this out of memory error mostly at scholomance, MC or when someone uses anything that triggers this error in stormwind

i still feel that there is a model or texture from the compilation redmage did that has this error.
when i tried to convert the upscale pack from modelchanging from wrath to vanilla, i got this error.

maybe a corrupt blp texture, but that would take hours and hours to discover the real culprit.

## Post 46859 by Oran1 — 2023-05-21T14:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46859#p46859 | page 22 | era: pre-1.18.1 -->

Yea it's a bit weird that if i make a new character it's fine... so has to be a texture i guess that my character has that is doing this.

## Post 46861 by Allwynd01 (Bug Report Enthusiast) — 2023-05-21T14:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46861#p46861 | page 22 | era: pre-1.18.1 -->

> **Canisus123 wrote: Sat May 20, 2023 11:09 am**
> My High elf using the dark ranger skin has a face now, but his mouth is a bit high up!
>
>  [https://i.imgur.com/8W9zq3j_d.webp?maxw ... lity=grand](https://i.imgur.com/8W9zq3j_d.webp?maxwidth=760&fidelity=grand)

This mod breaks the game, better not use it and it will work without a hitch. Before I tried to use the HD mod that only changes object and ground textures, but even that got boring. The Vanilla graphics look the best and it just works. Once I tried to have that mod that hides the bones on Forsaken, but each time Turtle WoW got some update, the mod would disappear and I would have to reinstall it, after the 2nd time I gave up and now I just play with the Vanilla graphics, because it looks the best and it just works.

Don't waste your time with these mods, every time Turtle WoW gets an update something in this mod will break.

Or...

Use it, if you have time to waste troubleshooting it and dealing with headaches, it's your life.

## Post 46922 by Turboman (Patch Note Conspiracy Theorist) — 2023-05-21T20:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46922#p46922 | page 22 | era: pre-1.18.1 -->

It doesnt break the game, i use both world textures and updated models for a month now, they dont break anything.

## Post 46933 by Eldritchknight — 2023-05-21T21:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46933#p46933 | page 22 | era: pre-1.18.1 -->

What are the chances of getting things like heritage armor and the extra customization like hair styles, jewelry and leaves in the night elf hair.

How much do you guys plan on adding as far as the new weapons and armor from newer expacs?

thanks in advance.

## Post 46934 by Akalix (Turtle WoW Team) [STAFF] — 2023-05-21T21:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46934#p46934 | page 22 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Sun May 21, 2023 2:15 pm**
> > **Canisus123 wrote: Sat May 20, 2023 11:09 am**
> > My High elf using the dark ranger skin has a face now, but his mouth is a bit high up!
> >
> >  [https://i.imgur.com/8W9zq3j_d.webp?maxw ... lity=grand](https://i.imgur.com/8W9zq3j_d.webp?maxwidth=760&fidelity=grand)
>
>   This mod breaks the game, better not use it and it will work without a hitch. Before I tried to use the HD mod that only changes object and ground textures, but even that got boring. The Vanilla graphics look the best and it just works. Once I tried to have that mod that hides the bones on Forsaken, but each time Turtle WoW got some update, the mod would disappear and I would have to reinstall it, after the 2nd time I gave up and now I just play with the Vanilla graphics, because it looks the best and it just works.
>
>  Don't waste your time with these mods, every time Turtle WoW gets an update something in this mod will break.
>
>  Or...
>
>  Use it, if you have time to waste troubleshooting it and dealing with headaches, it's your life.

It is in the nature of a WIP visual modding project to occasionally have bugs. I used this one while leveling my hardcore and did not encounter issues.

## Post 46942 by Astricon (Barrens Chat Casualty) — 2023-05-21T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46942#p46942 | page 22 | era: pre-1.18.1 -->

> **Oran1 wrote: Sun May 21, 2023 5:41 am**
> Sure, I had to remove the hd textures to click on him if not it will just crash

Ok...if a tauren with the same exact appearance doesn't cause a crash, then it's possible it's one of your visible equipment pieces. can you try turning off the patch, removing all your equipment, and turning on the patch again? if that works, we know why.

## Post 46947 by Faustorgo (Barrens Chat Casualty) — 2023-05-22T01:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46947#p46947 | page 22 | era: pre-1.18.1 -->

Hello, i see new version update today :D any kin of changelog perhaps? keep the works guys you are amazing :D

## Post 46951 by Oran1 — 2023-05-22T02:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46951#p46951 | page 22 | era: pre-1.18.1 -->

> **Astricon wrote: Sun May 21, 2023 11:38 pm**
> > **Oran1 wrote: Sun May 21, 2023 5:41 am**
> > Sure, I had to remove the hd textures to click on him if not it will just crash
>
>   Ok...if a tauren with the same exact appearance doesn't cause a crash, then it's possible it's one of your visible equipment pieces. can you try turning off the patch, removing all your equipment, and turning on the patch again? if that works, we know why.

Alright so i did that and now it works, i think it may have been the new version of the pack or not lol no idea but it works anyways :D

## Post 46969 by Astricon (Barrens Chat Casualty) — 2023-05-22T05:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46969#p46969 | page 22 | era: pre-1.18.1 -->

> **Faustorgo wrote: Mon May 22, 2023 1:03 am**
> Hello, i see new version update today :D any kin of changelog perhaps? keep the works guys you are amazing :D

I just make the content so I'm not sure what RedMageJoe has merged today, but the most recent changes are likely related to Turtle Shop skins. They should all be working now! Some are lower in quality than others but at least now they won't have broken faces!

Next update will certainly be custom NPC texture related. I just finished my first round of all custom Humans, so look forward to that soon probably. The rest of the custom NPCs will come shortly after as humans were BY FAR the largest amount of work comparatively (well them and High Elves but those I've already done)

## Post 46970 by Astricon (Barrens Chat Casualty) — 2023-05-22T05:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46970#p46970 | page 22 | era: pre-1.18.1 -->

> **Oran1 wrote: Mon May 22, 2023 2:19 am**
> Alright so i did that and now it works, i think it may have been the new version of the pack or not lol no idea but it works anyways :D

Oh what a relief! Yeah there's some odd caching that happens sometimes that I run into myself and it's so annoying--something not related to the WDB folder and so the best thing you can do is to just move the patches around or re-download them until they work in that situation.

## Post 46980 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-22T08:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46980#p46980 | page 22 | era: pre-1.18.1 -->

************ UPDATE ************

A new version of patch-A is available on the front page!  Semi-final version of all Turtle WoW Donation Shop skins (maybe some higher resolution retexturing in the future, but not top priority) for those of you who have waited for SO LONG and SO PATIENTLY.  Massive thanks as always to Astricon for his hard work.

The NPC Reloading Campaign has begun! All Turtle custom human NPCs have had their PreBakedTextures fully redone.  No more horrible-looking mis-textured faces!  Humans and High Elves are now fixed, the majority of all mis-textured NPCs. Look forward to Dwarves, Orcs, Trolls, and more with future updates!

We are very quickly approaching a day where the Turtle HD patch will be indistinguishable in quality from an officially-supported graphics patch!

## Post 47016 by Bittermens (Barrens Chat Casualty) — 2023-05-22T14:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47016#p47016 | page 22 | era: pre-1.18.1 -->

I  still wish for new hair and beards, but then it is 1.12

## Post 47035 by Astricon (Barrens Chat Casualty) — 2023-05-22T17:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47035#p47035 | page 22 | era: pre-1.18.1 -->

> **Bittermens wrote: Mon May 22, 2023 2:09 pm**
> I  still wish for new hair and beards, but then it is 1.12

Theoretically possible but base game needs to add the options before HD patch can change them

## Post 47036 by Galendor (Patch Note Conspiracy Theorist) — 2023-05-22T17:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47036#p47036 | page 22 | era: pre-1.18.1 -->

> **Astricon wrote: Mon May 22, 2023 5:30 pm**
> > **Bittermens wrote: Mon May 22, 2023 2:09 pm**
> > I  still wish for new hair and beards, but then it is 1.12
>
>   Theoretically possible but base game needs to add the options before HD patch can change them

Didn't gnomes gain some new facial hair & hairstyles in previous patches on Turtle? I believe these things can be replaced to some Shadowlands hairstyles.

## Post 47037 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-22T17:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47037#p47037 | page 22 | era: pre-1.18.1 -->

There are 4 or 5 Male Gnome facial hair options that are still broken/missing unfortunately, so that's the first thing to address before thinking about adding new assets.

## Post 47049 by Mustachiocat — 2023-05-22T19:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47049#p47049 | page 22 | era: pre-1.18.1 -->

> **Rejectedgalaxy wrote: Fri Apr 21, 2023 7:55 am**
> Someone should go in and remove some of these changes. The WoD login screen is awful, so many ugly loading screens, and a lot of model replacements make no sense. I tried myself. Figured out how to remove the loading screens, but couldn't find some other things I really didn't like.

I agree, they are really ugly, Can you explain how you changed the loading screens?

## Post 47050 by Dhrazar (Barrens Chat Casualty) — 2023-05-22T19:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47050#p47050 | page 22 | era: pre-1.18.1 -->

Where do you guys have different loading screens? I just have this Alliance one, no matter which Zone I am.

## Post 47062 by Faustorgo (Barrens Chat Casualty) — 2023-05-22T21:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47062#p47062 | page 22 | era: pre-1.18.1 -->

> **Dhrazar wrote: Mon May 22, 2023 7:13 pm**
> Where do you guys have different loading screens? I just have this Alliance one, no matter which Zone I am.

there was another patch x or y i think few pages before this one, who makes your loading screens and intro looks like original vanilla , look for it :D

## Post 47063 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-22T21:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47063#p47063 | page 23 | era: pre-1.18.1 -->

> **Dhrazar wrote: Mon May 22, 2023 7:13 pm**
> Where do you guys have different loading screens? I just have this Alliance one, no matter which Zone I am.

Whether you have Horde or Alliance loading screen depends on  the continent. Kalimdor is generally the "Horde" loading screen (Kalimdor races) and Eastern Kingdoms is generally the "Alliance" loading screen (Eastern Kingdoms races). At least that's how the vanilla ones displayed, with just the races and no signage. I believe the HD patch essentially labels them as Horde and Alliance outright.

## Post 47070 by Dhrazar (Barrens Chat Casualty) — 2023-05-22T22:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47070#p47070 | page 23 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon May 22, 2023 9:21 pm**
> > **Dhrazar wrote: Mon May 22, 2023 7:13 pm**
> > Where do you guys have different loading screens? I just have this Alliance one, no matter which Zone I am.
>
>   Whether you have Horde or Alliance loading screen depends on  the continent. Kalimdor is generally the "Horde" loading screen (Kalimdor races) and Eastern Kingdoms is generally the "Alliance" loading screen (Eastern Kingdoms races). At least that's how the vanilla ones displayed, with just the races and no signage. I believe the HD patch essentially labels them as Horde and Alliance outright.

Ahhh okay. I always thought each zone had their unique loading screen back in vanilla. So was this a tbc thing?

## Post 47075 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-23T00:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47075#p47075 | page 23 | era: pre-1.18.1 -->

> **Dhrazar wrote: Mon May 22, 2023 10:57 pm**
> Ahhh okay. I always thought each zone had their unique loading screen back in vanilla. So was this a tbc thing?

[This](https://i.imgur.com/9tFhSZq.png) is the vanilla Eastern Kingdoms loading screen. [This](https://static.wikia.nocookie.net/wowpedia/images/5/54/Classic_Kalimdor_loading_screen.jpg) is the vanilla Kalimdor loading screen. It appears that the HD patch replaced those instead with the Champions' Hall loading screens.

## Post 47095 by Visagezero — 2023-05-23T05:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47095#p47095 | page 23 | era: pre-1.18.1 -->

I noticed the new undergarment textures for the dark elf skin persist when wearing equipment, and you can see it on a few select pieces of gear. Here's a comparison between a high elf and dark elf wearing a chest piece.

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/f6Q7ktT]

## Post 47100 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-23T07:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47100#p47100 | page 23 | era: pre-1.18.1 -->

> **Visagezero wrote: Tue May 23, 2023 5:41 am**
>

The permanent underwear issue is a WIP. Some clever manipulation of CharSections.dbc may be required, but this is the same issue that plagues base Turtle donation shop skins not having any underwear at all.

## Post 47102 by Meskhi — 2023-05-23T07:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47102#p47102 | page 23 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon May 22, 2023 8:10 am**
> We are very quickly approaching a day where the Turtle HD patch will be indistinguishable in quality from an officially-supported graphics patch!

Not with the weapon swap animation bug it won't.

## Post 47109 by Astricon (Barrens Chat Casualty) — 2023-05-23T08:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47109#p47109 | page 23 | era: pre-1.18.1 -->

> **Meskhi wrote: Tue May 23, 2023 7:11 am**
> > **Redmagejoe wrote: Mon May 22, 2023 8:10 am**
> > We are very quickly approaching a day where the Turtle HD patch will be indistinguishable in quality from an officially-supported graphics patch!
>
>   Not with the weapon swap animation bug it won't.

If you have any ideas of how to fix it, I'd like to know. I'm genuinely clueless for how to do it, so help out please.

## Post 47124 by Dhrazar (Barrens Chat Casualty) — 2023-05-23T11:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47124#p47124 | page 23 | era: pre-1.18.1 -->

> **Astricon wrote: Tue May 23, 2023 8:29 am**
> > **Meskhi wrote: Tue May 23, 2023 7:11 am**
> > > **Redmagejoe wrote: Mon May 22, 2023 8:10 am**
> > > We are very quickly approaching a day where the Turtle HD patch will be indistinguishable in quality from an officially-supported graphics patch!
> >
> >   Not with the weapon swap animation bug it won't.
>
>   If you have any ideas of how to fix it, I'd like to know. I'm genuinely clueless for how to do it, so help out please.

Could it be possible, to show the weapons in your hands, after you pull it? I mean not during the Animation itself, rather after. Like it is now, targeting a mob, the character has the weapons in his hands.
When I click an NPC Vendor, Weapon appears on the back.

## Post 47202 by Vukodlak — 2023-05-24T00:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47202#p47202 | page 23 | era: pre-1.18.1 -->

There is one graphic glitch when you play Undead (I play hunter) and try to fire with your crossbow. The belt iis getting shoot not directly from your ranger weapon but few steps from your left.
![Image](https://cdn.discordapp.com/attachments/1087114712245882973/1109883182360318002/image.png)

## Post 47211 by Grauhase — 2023-05-24T04:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47211#p47211 | page 23 | era: pre-1.18.1 -->

Hey guys,

I've been a huge fan of this project since the first week I started playing Turtle WoW and I have to say it makes the game much more immersive! Thank you so much for this!

That being sad, I must confess  I don't like most of the changes made to the spell sounds. I know it's just a matter of preference, but I have a feeling that one generic sound is now used for several spells, e.g. mage... evocation, teleport, frostbolt (just to name a few).... they all sound almost the same, just slightly different. Actually it happens with all classes, I'm kind of an Altaholic so I play with all classes. :P
So, I have a question... I don't know if it's possible or if it would be too hard to do (I'm totally ignorant about this mod thing): is this a way to keep all the graphical improvements you guys made (which I love ) but keep the original vanilla sounds?

## Post 47221 by Astricon (Barrens Chat Casualty) — 2023-05-24T05:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47221#p47221 | page 23 | era: pre-1.18.1 -->

> **Grauhase wrote: Wed May 24, 2023 4:20 am**
> Hey guys,
>
>  I've been a huge fan of this project since the first week I started playing Turtle WoW and I have to say it makes the game much more immersive! Thank you so much for this!
>
>  That being sad, I must confess  I don't like most of the changes made to the spell sounds. I know it's just a matter of preference, but I have a feeling that one generic sound is now used for several spells, e.g. mage... evocation, teleport, frostbolt (just to name a few).... they all sound almost the same, just slightly different. Actually it happens with all classes, I'm kind of an Altaholic so I play with all classes. :P
>  So, I have a question... I don't know if it's possible or if it would be too hard to do (I'm totally ignorant about this mod thing): is this a way to keep all the graphical improvements you guys made (which I love ) but keep the original vanilla sounds?

Hi there! There is a way to switch back to classic sounds, but you will also lose any changes to the visual effects. You will have to open patch-A with an MPQ editor and go into DBFilesClient folder. Then delete the following dbc files:

SoundEntries
Spell
SpellVisual
SpellVisualEffectName]
SpellVisualKit

Then go into the Sound folder and delete the whole Spells folder.

Unfortunately this fix requires you to repeat these steps every time you download a new version of patch-A. The only fix to this would be to manually make a new patch, call it something like patch-E, and put copies of all the classic sound files in there where the current HD versions are, naming them the same thing as the sound you want to replace. This will be tedious and as I add more HD sounds you will have to keep replacing my changes, sorry. This is the only solution that is long term, keeps the visual changes, and doesn't require you to edit the dbcs yourself. If you want to edit the dbcs, then there are other options too, but they are also...tedious.

EDIT: Oh, I just realized I should have been clearer about the results of deleting the dbcs and sound files. If you do this, you will lose some spell visual effect changes that I made, such as Paladin Holy Strike resembling Priest Smite, but you probably won't lose the replacement effects that were in the mod before I came around--however some of these are buggy.

## Post 47228 by Grauhase — 2023-05-24T07:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47228#p47228 | page 23 | era: pre-1.18.1 -->

> Hi there! There is a way to switch back to classic sounds, but you will also lose any changes to the visual effects. You will have to open patch-A with an MPQ editor and go into DBFilesClient folder. Then delete the following dbc files:
>
>  SoundEntries
>  Spell
>  SpellVisual
>  SpellVisualEffectName]
>  SpellVisualKit
>
>  ...

Hi  Astricon !

Thanks for your time and kindness to explain how to do it... :)

## Post 47236 by Mibus — 2023-05-24T08:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47236#p47236 | page 23 | era: pre-1.18.1 -->

No animation missiles in Arcane Missiles   scared_turtle_head

## Post 47241 by Drip — 2023-05-24T09:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47241#p47241 | page 23 | era: pre-1.18.1 -->

I really like the HD pack and it makes a lot of the mounts look amazing. The swift horde worg, though, just had a blob of orange where the armor is.

## Post 47243 by Astricon (Barrens Chat Casualty) — 2023-05-24T09:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47243#p47243 | page 23 | era: pre-1.18.1 -->

Known and known

## Post 47268 by Bittermens (Barrens Chat Casualty) — 2023-05-24T15:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47268#p47268 | page 23 | era: pre-1.18.1 -->

> **Astricon wrote: Wed May 24, 2023 5:49 am**
> > **Grauhase wrote: Wed May 24, 2023 4:20 am**
> > Hey guys,
> >
> >  I've been a huge fan of this project since the first week I started playing Turtle WoW and I have to say it makes the game much more immersive! Thank you so much for this!
> >
> >  That being sad, I must confess  I don't like most of the changes made to the spell sounds. I know it's just a matter of preference, but I have a feeling that one generic sound is now used for several spells, e.g. mage... evocation, teleport, frostbolt (just to name a few).... they all sound almost the same, just slightly different. Actually it happens with all classes, I'm kind of an Altaholic so I play with all classes. :P
> >  So, I have a question... I don't know if it's possible or if it would be too hard to do (I'm totally ignorant about this mod thing): is this a way to keep all the graphical improvements you guys made (which I love ) but keep the original vanilla sounds?
>
>   Hi there! There is a way to switch back to classic sounds, but you will also lose any changes to the visual effects. You will have to open patch-A with an MPQ editor and go into DBFilesClient folder. Then delete the following dbc files:
>
>  SoundEntries
>  Spell
>  SpellVisual
>  SpellVisualEffectName]
>  SpellVisualKit
>
>  Then go into the Sound folder and delete the whole Spells folder.
>
>  Unfortunately this fix requires you to repeat these steps every time you download a new version of patch-A. The only fix to this would be to manually make a new patch, call it something like patch-E, and put copies of all the classic sound files in there where the current HD versions are, naming them the same thing as the sound you want to replace. This will be tedious and as I add more HD sounds you will have to keep replacing my changes, sorry. This is the only solution that is long term, keeps the visual changes, and doesn't require you to edit the dbcs yourself. If you want to edit the dbcs, then there are other options too, but they are also...tedious.
>
>  EDIT: Oh, I just realized I should have been clearer about the results of deleting the dbcs and sound files. If you do this, you will lose some spell visual effect changes that I made, such as Paladin Holy Strike resembling Priest Smite, but you probably won't lose the replacement effects that were in the mod before I came around--however some of these are buggy.

Make those optional as patch-D

Also is better to check  for this if its possible to port it back.
[https://model-changing.net/index.php?ap ... iew&id=226](https://model-changing.net/index.php?app=downloads&module=downloads&controller=view&id=226)

## Post 47285 by Astricon (Barrens Chat Casualty) — 2023-05-24T16:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47285#p47285 | page 23 | era: pre-1.18.1 -->

> **Bittermens wrote: Wed May 24, 2023 3:00 pm**
> Make those optional as patch-D

Are you volunteering? If so thank you since as I stated it would be so much work.

## Post 47287 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-24T17:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47287#p47287 | page 23 | era: pre-1.18.1 -->

> **Bittermens wrote: Wed May 24, 2023 3:00 pm**
> Make those optional as patch-D

What Astricon said. You can't just "make a patch-D" of something that SUBTRACTS from patch-A. You would have to entirely rebuild patch-A or write a patch-D that changes a great many things. Read the red text at the top of the first post of this thread. The contributors are already working hard at no compensation to themselves to create the updates for this patch. If you don't like something about the patch, don't use it, or make you own derivative version. We cannot spare the resources to make variation patches to accommodate 1 or 2 people.

## Post 47295 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-24T17:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47295#p47295 | page 23 | era: pre-1.18.1 -->

************ UPDATE ************

A new version of patch-A is available on the front page!  All NPC prebaked textures have been fixed all across Azeroth. No more NPCs with freaky faces!  Praise be to the mad lad Astricon!

## Post 47317 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-24T20:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47317#p47317 | page 23 | era: pre-1.18.1 -->

Known bugs on current version:
Decoy Dragonlings (mechanical whelps) in Hateforge Quarry are still texture bugged
Weird checkered cubes on hands after Mage casts Brilliance Aura for about 2 minutes.

## Post 47328 by Vukodlak — 2023-05-25T01:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47328#p47328 | page 23 | era: pre-1.18.1 -->

And this autofire but where the arrows/bullets came not from weapon but from couple feet left.

## Post 47333 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-25T02:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47333#p47333 | page 23 | era: pre-1.18.1 -->

> **Vukodlak wrote: Thu May 25, 2023 1:44 am**
> And this autofire but where the arrows/bullets came not from weapon but from couple feet left.

I'm curious if this has something to do with model data that isn't compatible with Undead Hunters. This may be a more difficult fix than at first glance, if it requires tampering with model data.

## Post 47363 by Dhrazar (Barrens Chat Casualty) — 2023-05-25T09:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47363#p47363 | page 23 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed May 24, 2023 5:50 pm**
> ************ UPDATE ************
>
>  A new version of patch-A is available on the front page!  All NPC prebaked textures have been fixed all across Azeroth. No more NPCs with freaky faces!  Praise be to the mad lad Astricon!

There's in Theramore at the Gryphon Master an issue with Sergeant Terresas face.

## Post 47386 by Gundhulu — 2023-05-25T14:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47386#p47386 | page 23 | era: pre-1.18.1 -->

There seems to be an issue with tauren, as someone has posted in the thread ealier, this issue is still unidentified/unresolved.

It has happened multiple times when I get a #132 crash as soon as I click on male tauren button at character creation. However this error is very difficult to reproduce on purpose, I tried spam clicking "random" button at tauren creation and there was no crash. This crash seems to only happen when it's not expected KEKW.

Personally I do not think this is a high prio issue, just want to point out that it's there.

<https://pasteboard.co/FzCQY7jtc7vf.jpg>

## Post 47390 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-25T14:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47390#p47390 | page 23 | era: pre-1.18.1 -->

Cannot reproduce this Tauren issue at all.

## Post 47425 by Bittermens (Barrens Chat Casualty) — 2023-05-25T21:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47425#p47425 | page 23 | era: pre-1.18.1 -->

the tauren mobs in dustwallow suffers from mishmash face

## Post 47426 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-25T21:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47426#p47426 | page 23 | era: pre-1.18.1 -->

Could you give us the names or, more helpfully, their entries on <https://database.turtlecraft.gg> ?

## Post 47434 by Bittermens (Barrens Chat Casualty) — 2023-05-26T00:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47434#p47434 | page 23 | era: pre-1.18.1 -->

Nevermind, All brackenwall tauren had their faces fixed.
the only issue as of now is the NPC in theramore Sergeant Terresa
<https://database.turtlecraft.gg/?npc=60732>

## Post 47519 by Furitus — 2023-05-26T17:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47519#p47519 | page 23 | era: pre-1.18.1 -->

my undead is missing half of his face with certain helmets is that being worked on ?

## Post 47578 by Astricon (Barrens Chat Casualty) — 2023-05-27T00:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47578#p47578 | page 23 | era: pre-1.18.1 -->

> **Furitus wrote: Fri May 26, 2023 5:26 pm**
> my undead is missing half of his face with certain helmets is that being worked on ?

that's probably due to the helmet model being different without the HD patch. if you turn off the HD patch does the helmet model make sense for not displaying half the face?

## Post 47605 by Zer0cool — 2023-05-27T08:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47605#p47605 | page 23 | era: pre-1.18.1 -->

> **Gundhulu wrote: Thu May 25, 2023 2:12 pm**
> There seems to be an issue with tauren, as someone has posted in the thread ealier, this issue is still unidentified/unresolved.
>
>  It has happened multiple times when I get a #132 crash as soon as I click on male tauren button at character creation. However this error is very difficult to reproduce on purpose, I tried spam clicking “random” button at tauren creation and there was no crash. This crash seems to only happen when it's not expected KEKW.
>
>  Personally I do not think this is a high prio issue, just want to point out that it's there.
>
>  <https://pasteboard.co/FzCQY7jtc7vf.jpg>

The error #132 back then when I was making the mod for 1.12 classic it was reported from some people that also had the same issue in the cities or where it was really crowed, as some people report here. It can happen randomly though and to me wasn't an issue due to that time that I was working the mod. It had to do with the memory usage from the game, since back then, Blizzard didn't think that would need above 2 GB of memory.

Since high resolution models appeared with the mod, there was a modified WoW.exe that could handle 4Gb of memory for the models and help with such crashes some people reported. Is the new version of wow.exe file handling the same memory capacity or not. Cause if not, maybe Redmage should report it to the Turtle team, and then fix the exe file to handle more memory or another moder take step and check the .exe file.

## Post 47609 by Astricon (Barrens Chat Casualty) — 2023-05-27T08:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47609#p47609 | page 23 | era: pre-1.18.1 -->

> **Zer0cool wrote: Sat May 27, 2023 8:31 am**
> Is the new version of wow.exe file handling the same memory capacity or not.

I've been using the upgraded memory mod and have had very few if any crashes that weren't my own fault I'm pretty sure.

## Post 47615 by Grauhase — 2023-05-27T09:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47615#p47615 | page 23 | era: pre-1.18.1 -->

> I've been using the upgraded memory mod and have had very few if any crashes that weren't my own fault I'm pretty sure.

Memory mod? Whats this about? Where can I get it?

## Post 47621 by Furitus — 2023-05-27T09:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47621#p47621 | page 23 | era: pre-1.18.1 -->

> **Astricon wrote: Sat May 27, 2023 12:12 am**
> > **Furitus wrote: Fri May 26, 2023 5:26 pm**
> > my undead is missing half of his face with certain helmets is that being worked on ?
>
>   that's probably due to the helmet model being different without the HD patch. if you turn off the HD patch does the helmet model make sense for not displaying half the face?

With or without HD patch its the same, half of the face below the eyes is missing.

<https://imgur.com/V3RTp3H>

## Post 47623 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-27T09:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47623#p47623 | page 23 | era: pre-1.18.1 -->

If the issue persists without the HD patch, then it is an issue for the Turtle team, not this fan project.

## Post 47638 by Palarky — 2023-05-27T12:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47638#p47638 | page 24 | era: pre-1.18.1 -->

Hello!
Is it possible to add hash sum files?
Thank you.

## Post 47667 by 1stormer1 — 2023-05-27T18:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47667#p47667 | page 24 | era: pre-1.18.1 -->

When i install Patch A all of the high elves are just smudged pixels and then the game crashes after a few sections.

im level 1 in high elve starter zone so im not sure if its limited to high elves or not.

<https://ibb.co/k3X1Z40>

## Post 47687 by Act — 2023-05-27T19:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47687#p47687 | page 24 | era: pre-1.18.1 -->

> **1stormer1 wrote: Sat May 27, 2023 6:01 pm**
> When i install Patch A all of the high elves are just smudged pixels and then the game crashes after a few sections.
>
>  im level 1 in high elve starter zone so im not sure if its limited to high elves or not.
>
>  <https://ibb.co/k3X1Z40>

After you choose your character, go to Options, disable Vertex Shaders and restart the game. That should solve the problem.

## Post 47695 by Rorhim — 2023-05-27T22:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47695#p47695 | page 24 | era: pre-1.18.1 -->

Hi, I am having this weird problem after installing the patches, my characters cannot draw their weapons anymore. When I press Z, he/she reaches for the weapon but does not pick it up. If I enter combat, sometimes my character will start swinging with an invisible weapon, while his actual weapon remains sheathed on my back. This does not happen every time however. When he does seem to grab hold of it, I am unable to sheate with Z.

Is this a known problem or did I do something wrong?

## Post 47702 by Garatak — 2023-05-27T23:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47702#p47702 | page 24 | era: pre-1.18.1 -->

How does druid cat glyph look? Which cat is it?

## Post 47722 by Astricon (Barrens Chat Casualty) — 2023-05-28T08:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47722#p47722 | page 24 | era: pre-1.18.1 -->

> **Rorhim wrote: Sat May 27, 2023 10:15 pm**
> Hi, I am having this weird problem after installing the patches, my characters cannot draw their weapons anymore. When I press Z, he/she reaches for the weapon but does not pick it up. If I enter combat, sometimes my character will start swinging with an invisible weapon, while his actual weapon remains sheathed on my back. This does not happen every time however. When he does seem to grab hold of it, I am unable to sheate with Z.
>
>  Is this a known problem or did I do something wrong?

Known problem, possibly unsolvable

## Post 47735 by 1stormer1 — 2023-05-28T11:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47735#p47735 | page 24 | era: pre-1.18.1 -->

> **Act wrote: Sat May 27, 2023 7:51 pm**
> > **1stormer1 wrote: Sat May 27, 2023 6:01 pm**
> > When i install Patch A all of the high elves are just smudged pixels and then the game crashes after a few sections.
> >
> >  im level 1 in high elve starter zone so im not sure if its limited to high elves or not.
> >
> >  <https://ibb.co/k3X1Z40>
>
>   After you choose your character, go to Options, disable Vertex Shaders and restart the game. That should solve the problem.

Unfortunately they are already diabled but its still happening :(

<https://ibb.co/CwK7XCX>

## Post 47981 by Zer0cool — 2023-05-29T18:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47981#p47981 | page 24 | era: pre-1.18.1 -->

> **1stormer1 wrote: Sun May 28, 2023 11:27 am**
> > **Act wrote: Sat May 27, 2023 7:51 pm**
> > > **1stormer1 wrote: Sat May 27, 2023 6:01 pm**
> > > When i install Patch A all of the high elves are just smudged pixels and then the game crashes after a few sections.
> > >
> > >  im level 1 in high elve starter zone so im not sure if its limited to high elves or not.
> > >
> > >  <https://ibb.co/k3X1Z40>
> >
> >   After you choose your character, go to Options, disable Vertex Shaders and restart the game. That should solve the problem.
>
>   Unfortunately they are already diabled but its still happening :(
>
>  <https://ibb.co/CwK7XCX>

You can try to set your Shader settings like this and see if they gonna work:
![Image](https://i.imgur.com/CE52UVH.jpg)

## Post 48008 by Act — 2023-05-29T21:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48008#p48008 | page 24 | era: pre-1.18.1 -->

> **Zer0cool wrote: Mon May 29, 2023 6:26 pm**
> > **1stormer1 wrote: Sun May 28, 2023 11:27 am**
> > > **Act wrote: Sat May 27, 2023 7:51 pm**
> > > After you choose your character, go to Options, disable Vertex Shaders and restart the game. That should solve the problem.
> >
> >   Unfortunately they are already diabled but its still happening :(
> >
> >  <https://ibb.co/CwK7XCX>
>
>  You can try to set your Shader settings like this and see if they gonna work:
>  ![Image](https://i.imgur.com/CE52UVH.jpg)

I fought that uneven fight with those glitches for few hours. I'm not really sure which settings made it works fine (Disabled Vertex Shaders I think). But here's my /WTF/Config.wtf:

SET hwDetect "0"
SET gxColorBits "24"
SET gxDepthBits "24"
SET gxResolution "1920x1080"
SET gxRefresh "60"
SET gxMultisample "8"
SET gxMultisampleQuality "0.000000"
SET gxFixLag "0"
SET fullAlpha "1"
SET lodDist "100.000000"
SET SmallCull "0.010000"
SET DistCull "500.000000"
SET trilinear "1"
SET frillDensity "48"
SET farclip "777"
SET specular "1"
SET pixelShaders "1"
SET particleDensity "1.000000"
SET unitDrawDist "300.000000"
SET movie "0"
SET Gamma "1.000000"
SET readTOS "1"
SET readEULA "1"
SET SoundVolume "1"
SET MasterVolume "1"
SET realmList "logon.turtlecraft.gg"
SET patchlist "logon.turtlecraft.gg"
SET realmName "Turtle WoW"
SET gameTip "10"
SET AmbienceVolume "0.60000002384186"
SET uiScale "1"
SET lod "0"
SET shadowLevel "0"
SET anisotropic "16"
SET MusicVolume "0.40000000596046"
SET weatherDensity "3"
SET movieSubtitle "1"
SET mouseSpeed "1"
SET lastCharacterIndex "1"
SET profanityFilter "0"
SET cameraYawMoveSpeed "180"
SET cameraYawSmoothSpeed "180"
SET cameraDistanceMaxFactor "1"

You can try to replace yours with that. Oh, and after that remember to delete WDB folder, maybe there are some problems with cache.

## Post 48068 by Mustachiocat — 2023-05-30T13:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48068#p48068 | page 24 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue May 23, 2023 12:06 am**
> > **Dhrazar wrote: Mon May 22, 2023 10:57 pm**
> > Ahhh okay. I always thought each zone had their unique loading screen back in vanilla. So was this a tbc thing?
>
>  [This](https://i.imgur.com/9tFhSZq.png) is the vanilla Eastern Kingdoms loading screen. [This](https://static.wikia.nocookie.net/wowpedia/images/5/54/Classic_Kalimdor_loading_screen.jpg) is the vanilla Kalimdor loading screen. It appears that the HD patch replaced those instead with the Champions' Hall loading screens.

This is the loading screen I get no matter where I am <https://ibb.co/PTBxW0b>, is there a way to change it?

## Post 48127 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-30T21:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48127#p48127 | page 24 | era: pre-1.18.1 -->

> **Mustachiocat wrote: Tue May 30, 2023 1:54 pm**
> This is the loading screen I get no matter where I am <https://ibb.co/PTBxW0b>, is there a way to change it?

If you get that regardless of where you are even after what I said, then you are not using my patch or you modified my patch. In which case, no, there's nothing I can do to help you because I don't know what patch you're using. That loading screen will only display on Eastern Kingdoms.

## Post 48130 by Mustachiocat — 2023-05-30T21:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48130#p48130 | page 24 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue May 30, 2023 9:47 pm**
> > **Mustachiocat wrote: Tue May 30, 2023 1:54 pm**
> > This is the loading screen I get no matter where I am <https://ibb.co/PTBxW0b>, is there a way to change it?
>
>   If you get that regardless of where you are even after what I said, then you are not using my patch or you modified my patch. In which case, no, there's nothing I can do to help you because I don't know what patch you're using. That loading screen will only display on Eastern Kingdoms.

Yes, I realized it's only on eastern, is there a way to remove them back to defaults?

## Post 48132 by Redmagejoe (Grandmaster of Forum PvP) — 2023-05-30T21:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48132#p48132 | page 24 | era: pre-1.18.1 -->

> **Mustachiocat wrote: Tue May 30, 2023 9:52 pm**
> Yes, I realized it's only on eastern, is there a way to remove them back to defaults?

DBC editing.  There's resources in my first post to get you started.

## Post 48176 by Mannimar — 2023-05-31T01:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48176#p48176 | page 24 | era: pre-1.18.1 -->

Would it be possible to reanable Blizzard Healthbars somehow while using this mod? The mod overwrites my standard healthbar. Ty!

## Post 48183 by Mustachiocat — 2023-05-31T02:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48183#p48183 | page 24 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue May 30, 2023 9:55 pm**
> > **Mustachiocat wrote: Tue May 30, 2023 9:52 pm**
> > Yes, I realized it's only on eastern, is there a way to remove them back to defaults?
>
>   DBC editing.  There's resources in my first post to get you started.

I managed to open it with the mpqeditor but there's so many folders I can't seem to find it, any hint on where they might be?

## Post 48280 by Johnedward — 2023-05-31T16:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48280#p48280 | page 24 | era: pre-1.18.1 -->

Blink seems to be missing something, it just plays a microsecond long clip of an arcane channeling sound from the spot you blink away from. So all you hear is a "Shu-"

## Post 48522 by Votepoint — 2023-06-02T14:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48522#p48522 | page 24 | era: pre-1.18.1 -->

I wanted to ask if it is now possible to install the patch on the model myself? Will they get banned for this?

## Post 48529 by Winthrop (Barrens Chat Casualty) — 2023-06-02T14:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48529#p48529 | page 24 | era: pre-1.18.1 -->

So, I noticed a tiny detail, thats rather funny then noteworthy :)

When drinking with HD Graphics, the Hand without the Keg will go to the mouth, while the Hand with the Keg just kinda stays in place.

When drinking with Vanilla Graphics, the Hand WITH the Keg goes to the mouth - which makes sense.

Seems funny, that over the course of some Expansions, the "drinking Hand" switched.

## Post 48646 by Imonobor (Bug Report Enthusiast) — 2023-06-03T06:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48646#p48646 | page 24 | era: pre-1.18.1 -->

> **Winthrop wrote: Fri Jun 02, 2023 2:34 pm**
> So, I noticed a tiny detail, thats rather funny then noteworthy :)
>
>  When drinking with HD Graphics, the Hand without the Keg will go to the mouth, while the Hand with the Keg just kinda stays in place.
>
>  When drinking with Vanilla Graphics, the Hand WITH the Keg goes to the mouth - which makes sense.
>
>  Seems funny, that over the course of some Expansions, the "drinking Hand" switched.

I belive the reason for this is that when people ate and drank at the same time (as most people do most of the time), they stuffed their cheese in the mug and chewed on that, which looks ridiculous. It makes way more sense to eat with one hand and drink with the other.

## Post 48746 by Synni — 2023-06-04T07:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48746#p48746 | page 24 | era: pre-1.18.1 -->

I have issue, where my character does not draw weapon, while pressing Z, I can spam it how much I want it just does "draw animation" but weapon is not in hand

## Post 49105 by Pdsn91 — 2023-06-06T20:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49105#p49105 | page 24 | era: pre-1.18.1 -->

Hi, newbie here. I want to thank all of you for all this work, you are doing great!
Also, i wanted to ask Is there a way to implement RTX Remix into Turtle HD Patches? If so, how i can help you? I mean i don´t know how to do it but maybe I can help some way (even donations maybe?)

## Post 49252 by Cactusking — 2023-06-07T20:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49252#p49252 | page 24 | era: pre-1.18.1 -->

This update pack rules, thanks a ton for working on this!

I've noticed that the Shoulder pads on the Female Troll model sit too far back on the model.  They are properly aligned with the arms in direction and height, but need to be moved forward a bit.  Some shoulders actually clip through the model right now, examples here:
[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/SzNXpEx]

Any possible fix for this?

## Post 49311 by Bittermens (Barrens Chat Casualty) — 2023-06-08T13:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49311#p49311 | page 24 | era: pre-1.18.1 -->

Shoulders and helmets needs a new mesh update since they are mostly incompatible with the HD models and looks off place, and full of clipping.

## Post 49320 by Cannasius — 2023-06-08T14:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49320#p49320 | page 24 | era: pre-1.18.1 -->

I am playing now since a year with the HD Pack and i am just blown away - amazing work! thanks a lot man!!   turtle_in_love_head

## Post 49749 by Ranishurollout — 2023-06-12T07:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49749#p49749 | page 24 | era: pre-1.18.1 -->

Amazing work! However I can't really seem to enjoy the sounds for frostbolt and blink, they sound very distant, reverberated and choppy, if it is known then sorry for bringing it up, however if it isn't - perhaps I can record a vid?

## Post 49917 by Maxstaine — 2023-06-13T16:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49917#p49917 | page 24 | era: pre-1.18.1 -->

Hey! sorry to bother.

I just wanna know how I can delete/opt out the remodel from the Armored Black Deathcharger (aka Rivendare's Deathcharger)

I don't quite like the DK mount model used, and I prefer the original.

I tried with the MPQ editor but it seems is more complicated than deleting files there   scared_turtle

Also, the newest version of patch A seems to have some issues with the Dark Ranger skin. The blue glow kinda ruins it.

If any of you could walk me trough it, I will try the solution myself!

*Last edited by Maxstaine on Tue Jun 13, 2023 9:52 pm, edited 1 time in total.*

## Post 49933 by Redmagejoe (Grandmaster of Forum PvP) — 2023-06-13T21:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49933#p49933 | page 24 | era: pre-1.18.1 -->

Riding Aqua Saber is known to have broken textures.

## Post 49940 by Visagezero — 2023-06-13T23:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49940#p49940 | page 24 | era: pre-1.18.1 -->

> **Maxstaine wrote: Tue Jun 13, 2023 4:08 pm**
> Also, the newest version of patch A seems to have some issues with the Dark Ranger skin. The blue glow kinda ruins it.
>
>  If any of you could walk me trough it, I will try the solution myself!

To remove the blue glow, I replaced the green eyes glow texture in Blood Elf with some other random texture (you can't delete it or you'll get green letterboxes over the eyes). Bear in mind that this removes the glowing effect for all high elves.

## Post 49941 by Visagezero — 2023-06-13T23:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49941#p49941 | page 24 | era: pre-1.18.1 -->

Has the mod been updated yet to work with the latest skin texture "Demon Hunter" for Nelves?

## Post 49943 by Maxstaine — 2023-06-14T00:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49943#p49943 | page 24 | era: pre-1.18.1 -->

> **Visagezero wrote: Tue Jun 13, 2023 11:06 pm**
> > **Maxstaine wrote: Tue Jun 13, 2023 4:08 pm**
> > Also, the newest version of patch A seems to have some issues with the Dark Ranger skin. The blue glow kinda ruins it.
> >
> >  If any of you could walk me trough it, I will try the solution myself!
>
>   To remove the blue glow, I replaced the green eyes glow texture in Blood Elf with some other random texture (you can't delete it or you'll get green letterboxes over the eyes). Bear in mind that this removes the glowing effect for all high elves.

Thanks, will try that.

Edited: I actually managed to edit the Rivendare Deathcharger myself, even got me the white version from Naxx   turtle_in_love_head

## Post 50179 by Telishuna — 2023-06-15T19:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50179#p50179 | page 24 | era: pre-1.18.1 -->

Seems the model for Wyverns, like this one <https://database.turtlecraft.gg/?npc=4107>, does not play any of their animations other than idling, walking, running ones. Even in death they just stand here

## Post 50193 by Bloodphobos — 2023-06-15T20:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50193#p50193 | page 24 | era: pre-1.18.1 -->

Hey guys, your Patch-A does not have any texture for [Gloves of Spell Mastery](https://database.turtlecraft.gg/?item=14146) and I see white qubes on ppl hands with these gloves. Also, main post says that spell sounds are replaced by Patch-C, but when I add patch A, rogue [BackstabRank 9](https://database.turtlecraft.gg/?spell=25300) makes ugly not native sound, could you please make original sound?
P.S. marvelous addition, I have been using it form prev year. P.P.S. last time I stopped using Patch-B cuz hunter [frost trap](https://www.wowhead.com/classic/spell=13809/frost-trap) too saturated and prevents you from seeing anything near the trap.

## Post 50368 by Papoursse27 — 2023-06-17T07:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50368#p50368 | page 24 | era: pre-1.18.1 -->

can we have the original vanilla music with the patches? because i have the retail music.

## Post 50696 by Shener — 2023-06-20T10:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50696#p50696 | page 24 | era: pre-1.18.1 -->

Bugs report
Spells:
Blink sound is bugged.
FrostBolt sound seems like way toooo loud.
Brilliance Aura of Arcane Mage has no animation, when cast the player model would show "squares" on it.

Models:
Wyverns set mobs have no death animation.
Inferno sets, such as lesser inferno in Desolace models are way too big,  they are like 10 times bigger than which in vanilla.

## Post 50861 by Remorsx (Barrens Chat Casualty) — 2023-06-21T19:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50861#p50861 | page 24 | era: pre-1.18.1 -->

can anybody please make a guide on how to revert paladin seal sounds to the default one

## Post 50866 by Grauhase — 2023-06-21T21:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50866#p50866 | page 25 | era: pre-1.18.1 -->

> **Remorsx wrote: Wed Jun 21, 2023 7:27 pm**
> can anybody please make a guide on how to revert paladin seal sounds to the default one

Read the posts... this kind of question about reverting sounds have already been asked and answered.

## Post 50882 by Testaoq — 2023-06-21T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50882#p50882 | page 25 | era: pre-1.18.1 -->

Love all the work you guys have done!

It appears that the Crimson deathcharger may be missing a texture.
Any idea how I can update it?
[https://cdn.discordapp.com/attachments/ ... /image.png](https://cdn.discordapp.com/attachments/371025857159888897/1121222243784073316/image.png)

## Post 51049 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-06-23T01:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51049#p51049 | page 25 | era: pre-1.18.1 -->

The High Elves skin has a bug in the lower half part, has red underwear and a different skin tone.

## Post 51113 by Danibalim — 2023-06-23T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51113#p51113 | page 25 | era: pre-1.18.1 -->

Any thoughts on changing the seal animation? If possible the spell animations from tbc would be amazing. But that might be alot of work giving all of them induvidual ones. Anyway what about simply changing it back to the original seal animation? Im not a big fan of the blue custom one the patch uses. Everything else is amazing thought.

## Post 51198 by Muroming — 2023-06-24T19:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51198#p51198 | page 25 | era: pre-1.18.1 -->

Hi, can someone help me please?
I only want Character Models from this patch, without creatures, spell effects and new sounds, saw on this thread that you can just delete those parts via MPQ editor, but by doing so it just deletes sound from the game, is there something i can do my self?

## Post 51201 by Bubamasteros — 2023-06-24T21:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51201#p51201 | page 25 | era: pre-1.18.1 -->

Hello, is it possible to collect all the patches in one post? For example, update the very first one?

## Post 51210 by Redmagejoe (Grandmaster of Forum PvP) — 2023-06-24T23:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51210#p51210 | page 25 | era: pre-1.18.1 -->

> **Bubamasteros wrote: Sat Jun 24, 2023 9:54 pm**
> Hello, is it possible to collect all the patches in one post? For example, update the very first one?

All the official relevant patches are maintained in the first post. When a new version of patch-A goes live, the link changes as well. Any other links posted in this thread are either components that have been added to the main official patch, or unofficial sub-patches.

## Post 51229 by Tomasumi — 2023-06-25T08:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51229#p51229 | page 25 | era: pre-1.18.1 -->

Will there be a boneless undead option?

## Post 51231 by Redmagejoe (Grandmaster of Forum PvP) — 2023-06-25T09:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51231#p51231 | page 25 | era: pre-1.18.1 -->

> **Tomasumi wrote: Sun Jun 25, 2023 8:44 am**
> Will there be a boneless undead option?

I have no intention of maintaining patch variations, as stated in my first post. If you wish to have these sorts of variants, you would need to make them yourself or find someone willing to.

## Post 51254 by Tomasumi — 2023-06-25T14:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51254#p51254 | page 25 | era: pre-1.18.1 -->

@redmagejoe thank you for the quick response, I appreciate it and it's no problem at all, hope you are doing well in these trying times

## Post 51369 by Putridobject — 2023-06-26T15:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51369#p51369 | page 25 | era: pre-1.18.1 -->

Love the work! But the spirit healer doesnt look like what you posted.

## Post 51427 by Redmagejoe (Grandmaster of Forum PvP) — 2023-06-26T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51427#p51427 | page 25 | era: pre-1.18.1 -->

> **Putridobject wrote: Mon Jun 26, 2023 3:35 pm**
> Love the work! But the spirit healer doesnt look like what you posted.

If you're talking about the white bubble, the only common thread I have been able to find among those who have this issue is graphics hardware or configurations.  It may not be as simple as something you can change with WoW's video options either, even console-line settings in config.wtf.  There's not much more assistance I can give on this issue, as it's a person-by-person basis rather than something I can fix on my end.

## Post 51433 by Sifipidi — 2023-06-27T00:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51433#p51433 | page 25 | era: pre-1.18.1 -->

I've tried combing through the thread to see if there was a fix or work-around, but can't seem to find anything. Dying to use this mod, but I keep having the same issues with my night elf characters. Their textures are very pixelated and the eyes are a bit off ~

I've tried deleting the cache, uninstalling absolutely everything and reinstalling it (only using base game and this mod pack without any extra addons etc). Any help would be appreciated ~ thanks in advance!

![Image](https://i.imgur.com/S7EDAWl.png)

## Post 51434 by Redmagejoe (Grandmaster of Forum PvP) — 2023-06-27T00:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51434#p51434 | page 25 | era: pre-1.18.1 -->

My friend, your entire screenshot looks a little pixelated. Do you have your video settings maxed?  This looks like how textures look when you're running at lower settings.

[Here's mine for comparison.](https://i.imgur.com/gW90TGE.png)

## Post 51435 by Sifipidi — 2023-06-27T00:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51435#p51435 | page 25 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Jun 27, 2023 12:14 am**
> My friend, your entire screenshot looks a little pixelated. Do you have your video settings maxed?  This looks like how textures look when you're running at lower settings.
>
>  [Here's mine for comparison.](https://i.imgur.com/gW90TGE.png)

Unfortunately everything is set to max settings... :(

![Image](https://i.imgur.com/K3lUPsg.png)

![Image](https://i.imgur.com/23kQrZF.png)

## Post 51438 by Sifipidi — 2023-06-27T00:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51438#p51438 | page 25 | era: pre-1.18.1 -->

My friends are telling me that they have never encountered this issue, that they didn't have to tweak anything. I've reinstalled the base game twice now, removed absolutely everything before each install. Still running into the very same issue here. :(

Looks like this problem is also occurring with the Undead models as well with my game. I am also having the issue where I cannot sheath or unsheath any of my weapons. Love the work put into this, just wish I could enjoy all of it   sad_turtle_head

*Last edited by Sifipidi on Tue Jun 27, 2023 4:05 am, edited 2 times in total.*

## Post 51439 by Sifipidi — 2023-06-27T00:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51439#p51439 | page 25 | era: pre-1.18.1 -->

Posting another picture of this problem occurring. Comparing the night elf vs gnome female.

![Image](https://i.imgur.com/N5z25Cn.png)

## Post 51449 by Winthrop (Barrens Chat Casualty) — 2023-06-27T04:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51449#p51449 | page 25 | era: pre-1.18.1 -->

> **Sifipidi wrote: Tue Jun 27, 2023 12:47 am**
> Posting another picture of this problem occurring. Comparing the night elf vs gnome female.
>
>  ![Image](https://i.imgur.com/N5z25Cn.png)

Try pressing shift+f10

## Post 51475 by Dhrazar (Barrens Chat Casualty) — 2023-06-27T11:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51475#p51475 | page 25 | era: pre-1.18.1 -->

All nightelf face tattoos are looking like this, because they are not optimized for the higher resolution faces,  same for the dwarfs.

## Post 51727 by Visagezero — 2023-06-29T02:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51727#p51727 | page 25 | era: pre-1.18.1 -->

The new demon hunter skins for night elves looks awesome, I wish they had HD support

## Post 51728 by Redmagejoe (Grandmaster of Forum PvP) — 2023-06-29T02:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51728#p51728 | page 25 | era: pre-1.18.1 -->

> **Visagezero wrote: Thu Jun 29, 2023 2:57 am**
> The new demon hunter skins for night elves looks awesome, I wish they had HD support

Astricon is currently taking a much deserved vacation, so I cannot give a concrete timeline on when this might be addressed.

## Post 51846 by Dhrazar (Barrens Chat Casualty) — 2023-06-30T00:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51846#p51846 | page 25 | era: pre-1.18.1 -->

Found that both High Elves, Ambassador Ardalan in Nethergarde Keep (at the top of the mage tower) and the one in Ravenholdt Manor (idk his name anymore) have blank faces.
Sry can't tell you the NPC IDs because I have no idea how to display them.

## Post 51855 by Redmagejoe (Grandmaster of Forum PvP) — 2023-06-30T02:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51855#p51855 | page 25 | era: pre-1.18.1 -->

> **Dhrazar wrote: Fri Jun 30, 2023 12:16 am**
> Found that both High Elves, Ambassador Ardalan in Nethergarde Keep (at the top of the mage tower) and the one in Ravenholdt Manor (idk his name anymore) have blank faces.
>  Sry can't tell you the NPC IDs because I have no idea how to display them.

<https://database.turtlecraft.gg/?npc=7826> is Ambassador Ardalan.  If you can find the names of the others and look them up on the DB, we can get their IDs and make note of them for Astricon's return.

## Post 52047 by Muroming — 2023-07-01T16:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52047#p52047 | page 25 | era: pre-1.18.1 -->

Since my last question wasnt answered, going to ask it again.
I want to use this mod without new sounds, how do i replace them with default ones?
I managed to delete mobs files from mpq file and it worked, but by doing same with sounds they just disappear. Can i get an answer?

## Post 52048 by Pangea — 2023-07-01T16:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52048#p52048 | page 25 | era: pre-1.18.1 -->

You don't, you edit them with the MPQ editor and manually delete the sound files BEFORE you patch your WoW game.

You can look up how to do this on page 40.

## Post 52099 by Gex — 2023-07-02T09:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52099#p52099 | page 25 | era: pre-1.18.1 -->

Just wanted to say thanks for the hard work, you've done an awesome job.

## Post 52317 by Dhrazar (Barrens Chat Casualty) — 2023-07-04T23:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52317#p52317 | page 25 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Jun 30, 2023 2:05 am**
> <https://database.turtlecraft.gg/?npc=7826> is Ambassador Ardalan.  If you can find the names of the others and look them up on the DB, we can get their IDs and make note of them for Astricon's return.

The other high Elf with missing face is this one:
<https://database.turtlecraft.gg/?npc=13085>

## Post 52371 by Samsara (Barrens Chat Casualty) — 2023-07-05T10:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52371#p52371 | page 25 | era: pre-1.18.1 -->

Hi I have a bunch of missing textures in my game I don't know if this comes from this patch? For instance one of my talent specs background is a white square when I open my talents window panel. The problem seemed to manifest after switching to fullscreen mode as windowed was giving me performance issues.

## Post 52381 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-05T10:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52381#p52381 | page 25 | era: pre-1.18.1 -->

Those are UI elements and are unaffected by my patch.  This sounds like an issue with the game's graphics engine somehow.

## Post 52389 by Samsara (Barrens Chat Casualty) — 2023-07-05T11:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52389#p52389 | page 25 | era: pre-1.18.1 -->

Hm I was downloading updated clients and patches, but it fixed itself in the meantime. Probably messing with my nvidia control panel application settings did something to the game, but now it's gone without changing those settings again. I also just installed the old dx9 so maybe that was it, idk. :p

## Post 52431 by Astricon (Barrens Chat Casualty) — 2023-07-05T20:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52431#p52431 | page 25 | era: pre-1.18.1 -->

Hello all, I'm not "back" necessarily because I try not to explicitly commit to any unpaid work (anything that I plan to do I may randomly stop doing at any point) but I decided to come back to read the posts here and see what's going on, so I'll generally answer some questions without quoting anyone. I'm currently having fun on Diablo which is why I've been absent--and the release of Baldur's Gate 3 later this month may further delay my contributions.

 - If no one is answering your question, it's because it's already been answered. Alas, the organization of a forum is not the easiest way to find answers, but if you feel like you're being ignored, the best thing to do is to look through the other posts to see if there's an answer there.
 - I'm aware of the issues with Mage Blink sound effect. I was experimenting and something went wrong. I have an easy fix available once I decide to work on it.
 - The new Night Elf Skins should be very easy to add once I look into it
 - Pixellated compaint about night elf female face markings is related to the fact that HD textures have left and right side of the face mapped while older models have only one side mirrored. Therefore due to texture size limit the HD textures are actually less detailed on the face--you have to put up with the pixellation if you want the HD models. This actually applies to all races for all HD models--it's just most noticeable for those with face markings and tattoos.
 - Thanks for providing npcs who are missing their faces. I'm trying to keep a running list of those that need updating but the chaos of a forum makes that difficult. I'll try to take note of them.
 - don't know what's up with troll female shoulder models, but i don't think i'll be the one to fix this. i have been unsuccessful with anything model related except for some spells.
 - If you notice issues with mismatched skin tones and underwear for a race, please take a screenshot and get it reproduced by someone on another computer as this is a common caching issue. If it is reproduceable, post it. If not, try reinstalling your mods and deleting your cache. One known issue is that underwear will often remain visible even with "slutmogs" that are supposed to remove it. This is fixable but will require a lot of work and is low priority.
 - Certain spells having too high or too low volume is another caching issue of some kind I think. The results of messing with volumes for specific sounds are super inconsistent from system to system. So if you get a really loud sound that seems out of place, let me know and I'll see if I can fix it--but I may not be able to reproduce it.
 - I'm aware that gryphon and wyvern mobs have missing animations. This is not fixable by me other than to replace the models with their old ones, I think.
 - I'm aware of the arcane missiles issue. I tried many fixes to this but it looks like I'll have to level a mage through some early levels to really dig into it.

 **Too many people ask for customizations to the mod so if you do that you're probably going to be ignored mostly but pay attention here right now because I'll explain how to make your own custom patch**
You need an MPQ Editor (just look for "MPQ Editor" on Google). Then open patch-A or C or whatever with it. It's like a zip file. Find the sound you don't like. Take note of its location in the zip file with all parent folder names and also its exact name. Copy the mpq file and delete everything inside, but keep or recreate the exact parent folders with the correct names (case insensitive) down to the file you want to replace. Rename this mpq as patch-Z or whatever as long as it's alphabetically after all the other custom mod patches you have. Now find the sound file you want to have instead of the one you don't like. If you want to revert to something previously used in classic wow there are two options: look through the official MPQ files to find the original sound, or go to Wowhead and search the spell on their vanilla version of the site, then go to the sounds tab and find the one you want and download it. Place this sound you like into the MPQ file and replace the one you don't like with it, making sure its name is exactly the same as the file you replaced. Assuming the sound file you used wasn't corrupt, you should now have a permanent solution for all future updates to the HD Mod--unless something gets changed with the file structure or DBCs--but at least you know how to fix it again if that happens!

If you notice people asking for customizations for sounds they don't like, please refer them back to this post or quote it.

## Post 52471 by Neo4m — 2023-07-06T09:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52471#p52471 | page 25 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Jun 26, 2023 11:20 pm**
> > **Putridobject wrote: Mon Jun 26, 2023 3:35 pm**
> > Love the work! But the spirit healer doesnt look like what you posted.
>
>   If you're talking about the white bubble, the only common thread I have been able to find among those who have this issue is graphics hardware or configurations.  It may not be as simple as something you can change with WoW's video options either, even console-line settings in config.wtf.  There's not much more assistance I can give on this issue, as it's a person-by-person basis rather than something I can fix on my end.

Yes definitely a driver issue. I see the white blob (looks like a white hershey kiss) when i play on my Mac laptop which is using parallels for Windows emulation. Curious if wine/linux users have the same issue.

## Post 52500 by Arinathielshala — 2023-07-06T21:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52500#p52500 | page 25 | era: pre-1.18.1 -->

Patch A breaks the sheathing animations :U

## Post 52515 by Samsara (Barrens Chat Casualty) — 2023-07-07T08:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52515#p52515 | page 25 | era: pre-1.18.1 -->

> **Arinathielshala wrote: Thu Jul 06, 2023 9:51 pm**
> Patch A breaks the sheathing animations :U

I also noticed my character did the animations but without the weapons appearing

## Post 52615 by Samsara (Barrens Chat Casualty) — 2023-07-08T12:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52615#p52615 | page 25 | era: pre-1.18.1 -->

Well everything was working fine for me with patch-A.MPQ and patch-B.MPQ for a few days, minus the aforementioned sheathing bug.

I tweaked some graphical settings today and then patch-A.MPQ got corrupt and messed up my game's graphics upon restarting the game, causing crashes to desktop after loading into the game with a character. Deleting config.WTF did not solve the issue, removing patch-A.MPQ did.

patch-B.MPQ is still loaded and doesn't seem to cause stability issues with patch-A.MPQ removed. Will update if that changes.

Screenshots:
![Image](https://i.imgur.com/LeDMI7G.jpeg)

![Image](https://i.imgur.com/kWnjPE2.png)

## Post 52616 by Samsara (Barrens Chat Casualty) — 2023-07-08T12:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52616#p52616 | page 26 | era: pre-1.18.1 -->

Hmm well it looked like it was fixed, but then after 1mn in game, it crashed again:
![Image](https://i.imgur.com/S3kSnXD.png)

I then removed patch B, but it still crashed after a few seconds in game. It isn't instant like at first, but still crashes with no patch anymore...
![Image](https://i.imgur.com/LHVsufS.png)

## Post 52625 by Grauhase — 2023-07-08T16:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52625#p52625 | page 26 | era: pre-1.18.1 -->

> **Samsara wrote: Sat Jul 08, 2023 12:44 pm**
> Hmm well it looked like it was fixed, but then after 1mn in game, it crashed again:
>  ![Image](https://i.imgur.com/S3kSnXD.png)
>
>  I then removed patch B, but it still crashed after a few seconds in game. It isn't instant like at first, but still crashes with no patch anymore...
>  ![Image](https://i.imgur.com/LHVsufS.png)

Everything is working fine for me, have both  patches...

Thats what I would try to do to fix the problem: delete both patches. Then delete the WDB folder. Enter the game, exit. Then reinstall both patches.

## Post 52648 by Mrrosh (Barrens Chat Casualty) — 2023-07-08T19:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52648#p52648 | page 26 | era: pre-1.18.1 -->

You have to turn on vertex shaders.

## Post 52667 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-09T01:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52667#p52667 | page 26 | era: pre-1.18.1 -->

************ UPDATE ************

A new version of patch-A is available on the front page!  More NPC prebaked textures have been fixed and the new Night Elf donation shop skins now have HD compatible textures!  Mad thanks to Astricon!

Look forward to some upcoming spell visual updates in the future.

## Post 52698 by Gee3 — 2023-07-09T12:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52698#p52698 | page 26 | era: pre-1.18.1 -->

Amazing work. Thank you!

## Post 52716 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-07-09T17:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52716#p52716 | page 26 | era: pre-1.18.1 -->

Well, still have two problems.
First, High Elves Pelvis texture is broken or missed.
Second, the animation of sheathing the weapon is broken too, I hoped it will be fixed in the next update but remains the same.

![Image](https://drive.google.com/file/d/1eDyFXjGp2f6wBlzPZv3aylKEiHwsOsZS/view?usp=sharing)

[embed: //drive.google.com/file/d/1eDyFXjGp2f6wBlzPZv3aylKEiHwsOsZS/preview]

## Post 52735 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-09T20:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52735#p52735 | page 26 | era: pre-1.18.1 -->

Sheathing animation cannot be fixed. Also, cannot reproduce the pelvis issue.

## Post 52737 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-07-09T21:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52737#p52737 | page 26 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Jul 09, 2023 8:29 pm**
> Sheathing animation cannot be fixed. Also, cannot reproduce the pelvis issue.

I checked inside the MPQ and I saw is a texture bad positioned or broken.
"BLOODELFFEMALENAKEDPELVISSKIN00_04" Check it and you will see it.
Looks like the Blood Elf texture without modification.

## Post 52861 by Grauhase — 2023-07-10T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52861#p52861 | page 26 | era: pre-1.18.1 -->

Since I'm a big fan of this project and having already made some comments here in the past where I clearly said I didn't like the "sounds changes", I'd like to say now that - after having tested ALL CLASSES for a longer period - I've changed my mind: the sounds are incredible. Except for some mage spells and a specific sound when your character is on fire, that sound is extremely annoying. But besides that, u guys are doing an amazing work.

## Post 52899 by Korbendallas2k4 — 2023-07-10T22:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52899#p52899 | page 26 | era: pre-1.18.1 -->

Is there a way to pick and choose what we want out of each patch?

For example i would like to get the Paladin Exorcism sound they had in WOTLK, but definitely would not want the horrible sounds they changed for bows and guns in Catacylsm, nor many of the other "new" sounds they did with pandaland onward (chain lightning that sounds like a zap, fireball that sounds like a fizz and so on).

Same with the textures, there's no way I would want the "new" character models for humans, but Tauren and Orcs would be a nice change.

## Post 52900 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-10T22:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52900#p52900 | page 26 | era: pre-1.18.1 -->

> **Korbendallas2k4 wrote: Mon Jul 10, 2023 10:08 pm**
> Is there a way to pick and choose what we want out of each patch?

No. You would have to make a separate patch for each individual feature because MPQs are not so helpfully modular like this. They work on "file-overwriting" load order, and it is a lot of time and work to make user-personalized patches, not to mention that they must be named sequentially, meaning that you only have 26 patch "slots" (A through Z) to work with if you wanted a mini patch for every individual feature. You're better off learning how to do so yourself and constructing a personalized patch for yourself with the features you do and don't want from what we've made available.

## Post 52943 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-07-11T05:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52943#p52943 | page 26 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Jul 09, 2023 8:29 pm**
> Sheathing animation cannot be fixed. Also, cannot reproduce the pelvis issue.

[embed: //drive.google.com/file/d/19g3CeBuomcBqG1Vkua6zd4EJbULqWCsp/preview]

This is the error, the texture is bad.
I don't know how to fix it.

## Post 52944 by Astricon (Barrens Chat Casualty) — 2023-07-11T05:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52944#p52944 | page 26 | era: pre-1.18.1 -->

> **Dracarusggotham wrote: Tue Jul 11, 2023 5:04 am**
> > **Redmagejoe wrote: Sun Jul 09, 2023 8:29 pm**
> > Sheathing animation cannot be fixed. Also, cannot reproduce the pelvis issue.
>
>   This is the error, the texture is bad.
>  I don't know how to fix it.

Thanks guys so much for pinpointing the exact file. It was somehow just missed by me so it will be in the next update to patch-a.

## Post 53062 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-11T18:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53062#p53062 | page 26 | era: pre-1.18.1 -->

************ UPDATE ************

A new version of patch-A is available on the front page!  Major update to Paladin spell effects, Warrior spell effects, Mage spell effect fixes, some mismatched textures, new wand sounds, all courtesy of Astricon!

Known bugs: Blessing of Kings crown texture is bugged/green on cast, Rain of Fire became red again instead of green, and some others that are a work in progress.

## Post 53064 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-07-11T18:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53064#p53064 | page 26 | era: pre-1.18.1 -->

God bless!

## Post 53067 by Astricon (Barrens Chat Casualty) — 2023-07-11T19:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53067#p53067 | page 26 | era: pre-1.18.1 -->

New patch includes the following

Paladin
Seals, Blessings, and RIghteous Fury updated to be unique and use the visual effects and sounds from WotLK
Judgement visual now uses WotLK falling hammer visual

Warrior (credit to Vidooo)
Shield Bash: Reverted to original sound
Visual and Sound updates for following
Whirlwind
Battle Shout
Demoralizing Shout
Piercing Howl
Intimidating Shout

Druid (I forget if this was in this or last patch)
Sound updates for
Starfire
Entangling Roots
Bear Form
Maul
Demoralizing Roar

Mage
Arcane Missiles new sounds, improved consistency of missile fire rate, added hand effects while channeling
KNOWN ISSUE Arcane Missiles channel sound will continue slightly after channel completes or if spell is cancelled
Blink: Reverted to original, fixing missing sound issue
Brilliance Aura: fixed boxes on hands bug

Textures
Added some missing NPC textures (last patch) including many blood elf skins
Added Night Elf Demon Hunter, Demon, and Dreadlord HD skins
Fixed High Elf Female missing one pelvis skin file

Weapon Sounds
Fixed parry sounds for non-patch-C users
All wands now use updated sound effects with variants so it's not the same exact sound every time. Happy wanding!

KNOWN ISSUE: High Elf models are faulty with animation 124 (channel, directed) and thus arcane missiles visual is buggy if you have a High Elf mage. This bug only exists for High Elves. It's also possible that warlock drain spells or other spells that use this animation might have issues, but I haven't noticed any others yet. Arcane Missiles is the most complex spell in classic wow, so hopefully it's the only one with the problem.

## Post 53120 by Peasantunit — 2023-07-12T02:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53120#p53120 | page 26 | era: pre-1.18.1 -->

Please consider separating "Music Pack / Spell Effects" from the patch-A file. The new models lag my game, but I'd still like the music and the spells...   happy_turtle_head

## Post 53128 by Astricon (Barrens Chat Casualty) — 2023-07-12T04:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53128#p53128 | page 26 | era: pre-1.18.1 -->

> **Peasantunit wrote: Wed Jul 12, 2023 2:26 am**
> Please consider separating "Music Pack / Spell Effects" from the patch-A file. The new models lag my game, but I'd still like the music and the spells...   happy_turtle_head

Just make your own patch or edit the mpqs to get this. You just have to overwrite the models and textures you don't want. Also consider getting the vanilla tweaks mod to improve your framerate (mentioned somewhere else in this thread)

## Post 53314 by Ashb0rn — 2023-07-13T15:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53314#p53314 | page 26 | era: pre-1.18.1 -->

> **Astricon wrote: Tue Jul 11, 2023 7:25 pm**
> KNOWN ISSUE: High Elf models are faulty with animation 124 (channel, directed) and thus arcane missiles visual is buggy if you have a High Elf mage. This bug only exists for High Elves. It's also possible that warlock drain spells or other spells that use this animation might have issues, but I haven't noticed any others yet. Arcane Missiles is the most complex spell in classic wow, so hopefully it's the only one with the problem.

I think it's simmilar issue for dwarf mages too. When channeling arcane missiles I won't see any of the missles, except the last one, but only once the channeling bar runs out. Also can seem to find arcane missle file in the MPQ folder.

## Post 53364 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-07-14T00:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53364#p53364 | page 26 | era: pre-1.18.1 -->

There's a way to have more resolution textures in the future? I say, I have WotLK with HD Models and the textures have  good resolution, I know that mod has more time of development but with the actual good job in this mod, I guess with time is possible to improvise the resolutions and the actual bugs, even the sheathing animation. I will try to learn and compare both mods and see what's the problem with the sheathing animation, but I don't have much knowledge about it.

## Post 53820 by Bittermens (Barrens Chat Casualty) — 2023-07-17T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53820#p53820 | page 26 | era: pre-1.18.1 -->

Will the Crash on Executus fight be fixed?
this seems to be a corrupted mesh or a texture causing memory leak when starting the fight.
if anything it may be a UI related issue

## Post 53841 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-17T16:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53841#p53841 | page 26 | era: pre-1.18.1 -->

> **Bittermens wrote: Mon Jul 17, 2023 2:52 pm**
> Will the Crash on Executus fight be fixed?
>  this seems to be a corrupted mesh or a texture causing memory leak when starting the fight.
>  if anything it may be a UI related issue

Could you please give more detail about this? Troubleshooting with and without the patch? This is the first time I am hearing about an MC encounter affected by my patch, so I'll need some details to investigate this.

## Post 54091 by Peasantunit — 2023-07-20T02:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54091#p54091 | page 26 | era: pre-1.18.1 -->

Interesting finding:
[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/eaNlQGT]

If you have Patch A/B installed, certain tree models become accessible. My friend, who doesn't have it, goes straight through them and down to the ground if he tries to walk forwards in this screenshot.

Literally P2W (patch to win)

## Post 54123 by Bittermens (Barrens Chat Casualty) — 2023-07-20T12:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54123#p54123 | page 26 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Jul 17, 2023 4:43 pm**
> > **Bittermens wrote: Mon Jul 17, 2023 2:52 pm**
> > Will the Crash on Executus fight be fixed?
> >  this seems to be a corrupted mesh or a texture causing memory leak when starting the fight.
> >  if anything it may be a UI related issue
>
>   Could you please give more detail about this? Troubleshooting with and without the patch? This is the first time I am hearing about an MC encounter affected by my patch, so I'll need some details to investigate this.

Every time when the fight starts, TWHD simply causes the game to crash, other people have reported this ingame for a while.
it must be a effect, corrupted mesh or ui that is causing this issue, and it is related to Executus fight.

Without it, it works fine, in fact all am i using for more than a month by now is the texture pack, the upscaled shoulders and shields.

## Post 54160 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-20T20:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54160#p54160 | page 26 | era: pre-1.18.1 -->

I recently went through a full MC run with the HD pack and could not trigger any crashes whatsoever, with Executus in his fight or when summoning Ragnaros.

## Post 54167 by Rainspider — 2023-07-20T22:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54167#p54167 | page 26 | era: pre-1.18.1 -->

First of all, amazing job! I really appreciate all the work you and the others have put into this. It damn near makes turtle-wow into the perfect server for me. I've always wanted classic/vanilla plus with better graphics and this achieves that mostly.

The only problems I've encountered are some of the spell sound effects contained within patch-a are way too loud. I just extracted the ones bothering me, mainly shaman lightning bolt, and cut the volume in half.

Thanks!

## Post 54171 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-20T23:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54171#p54171 | page 26 | era: pre-1.18.1 -->

Spell sounds volume can be reduced through a field in SoundEntries.dbc, so if you could compile a list of sounds that are disproportionately louder than others, I'll see about adjusting these for our next patch.

## Post 54176 by Rainspider — 2023-07-21T00:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54176#p54176 | page 26 | era: pre-1.18.1 -->

Oh awesome! This is so much easier.

Right now I have LightningBoltCast at .75 but that includes me also previously having reduced the sound file as well. So it may be closer to .50 I also took RockbiterWeaponCast down to .75 and HealingWaveCast to .80

I will edit this post if I change anything else. And again, thanks!

## Post 54313 by Noobita — 2023-07-22T21:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54313#p54313 | page 26 | era: pre-1.18.1 -->

crashes with fatal exception when rotating the camera at orgrimmar entrance tunnel.
without it doesn't crash.

## Post 54521 by Kelatazartwow — 2023-07-24T22:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54521#p54521 | page 26 | era: pre-1.18.1 -->

This is unbelievably good. I have huge gripes with 1.12 for not supporting 21:9 but this is amazing work. Didn't even think stuff like this was possible.

## Post 54523 by Albel — 2023-07-24T22:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54523#p54523 | page 26 | era: pre-1.18.1 -->

This is incredible, thank you!

## Post 54527 by Film — 2023-07-24T23:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54527#p54527 | page 26 | era: pre-1.18.1 -->

A high-level elf hunter, with a bow and arrow in his hand, shoots in the same posture as Hawking
a particularly twisted neck, looks weird

## Post 54533 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-25T00:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54533#p54533 | page 26 | era: pre-1.18.1 -->

> **Film wrote: Mon Jul 24, 2023 11:32 pm**
> A high-level elf hunter, with a bow and arrow in his hand, shoots in the same posture as Hawking
>  a particularly twisted neck, looks weird

Do you have a screenshot of this?

## Post 54549 by Astricon (Barrens Chat Casualty) — 2023-07-25T04:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54549#p54549 | page 26 | era: pre-1.18.1 -->

> **Ashb0rn wrote: Thu Jul 13, 2023 3:07 pm**
> I think it's simmilar issue for dwarf mages too. When channeling arcane missiles I won't see any of the missles, except the last one, but only once the channeling bar runs out. Also can seem to find arcane missle file in the MPQ folder.

Well that's just bad news =(
Arcane missile graphic is stored in Spells\Arcane_Missile_Lvl1.mdx with Lvl1 being replaced by 2, 3, and 4 for each time a new missile is added to the graphic. It was not changed by patch-A so it will be in model.MPQ

> **Dracarusggotham wrote: Fri Jul 14, 2023 12:23 am**
> There's a way to have more resolution textures in the future? I say, I have WotLK with HD Models and the textures have  good resolution, I know that mod has more time of development but with the actual good job in this mod, I guess with time is possible to improvise the resolutions and the actual bugs, even the sheathing animation. I will try to learn and compare both mods and see what's the problem with the sheathing animation, but I don't have much knowledge about it.

Thank you for potentially looking into the sheathing animation. Since it's a model-level issue I don't have the expertise. As for the resolution, no, sadly we cannot increase it. We are limited by a strict vanilla limitation. Oddly, NPCs seem to be able to bypass this restriction, but not player characters, which makes it pointless to upscale the NPCs. Also, if we did manage to upscale them, we'd quickly run into hardcoded RAM limitations that even the vanilla hotfixes probably don't cover. The reason the resolution of player character faces looks worse than it did before the HD patch is because the texture mapping for the newer models uses both sides of a face to allow for asymmetry while classic models conserved more space by mirroring the texture from one side to the other. The newer textures were quartered to fit the texture size limitation but they do not make use of the mirroring. Therefore it is theoretically possible to marginally improve the quality of the textures by doing that, but it would require someone to go in by hand to map the texture in the model that way and then re-import all the face textures. To me, the worse texture quality on the face is worth the better models.

## Post 54589 by Film — 2023-07-25T11:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54589#p54589 | page 26 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Jul 25, 2023 12:28 am**
> > **Film wrote: Mon Jul 24, 2023 11:32 pm**
> > A high-level elf hunter, with a bow and arrow in his hand, shoots in the same posture as Hawking
> >  a particularly twisted neck, looks weird
>
>   Do you have a screenshot of this?

<https://postimg.cc/CBNvyzhQ>
[![Image](https://i.postimg.cc/KjXCMMdx/111.png)](https://postimg.cc/CBNvyzhQ)

## Post 54590 by Film — 2023-07-25T11:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54590#p54590 | page 27 | era: pre-1.18.1 -->

First of all, thank you for your selfless contribution to this project. The original high elf hunter's neck looks fine, and now this neck is in desperate need of your treatment.

## Post 54704 by Pyrahead — 2023-07-26T05:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54704#p54704 | page 27 | era: pre-1.18.1 -->

Hey there. Thank you for breathing new graphical life into this game. How would I go about using all your graphical patches but keeping the old sound files for skills / spells. Some of the Rogue skills or fire spells (like that melting in the deadmines) is just extremely loud compared to other skills.

I already used an MPQ Editor and had a look at the sound files.

## Post 54705 by Peasantunit — 2023-07-26T05:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54705#p54705 | page 27 | era: pre-1.18.1 -->

Notes and curious questions:

 - Voidwalkers are not transparent in the new models. Due to their large size and wide shoulders, combined with how tight certain locations can be, specially in dungeons, it becomes really difficult, sometimes impossible, to visualize what is going on, as they cover too much of your vision. This can be extra troublesome if you're a gnome, as the axis of your camera is lower. Please consider adding transparency to them, optionally or otherwise.

 - In Classic, when emoting something like /wave, you can walk around while doing so, but in tWoW the animation is immediately cancelled if you move. Is this behavior attached to models? And if so, would it be possible to be modified so that upper body animations are not cancelled if you move?

 - Stranglethorn Vale's music has this weird feedback noise present for a few seconds in the middle of it. It happens at [1:22 in this video](https://youtu.be/uRiQE-xvDyQ?t=82). Could this be possibly fixed with one of these patches? I noticed while writting this that, maybe, this was supposed to be a didgeridoo, but if it was, there's something wrong with it...

I was actually going to write more things, but I forgot...

## Post 54767 by Albusturt — 2023-07-26T14:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54767#p54767 | page 27 | era: pre-1.18.1 -->

I friggin love the sound of sinister strike and backstab using Patch-C by Astricon. Thank you very much!

## Post 54832 by Astricon (Barrens Chat Casualty) — 2023-07-27T05:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54832#p54832 | page 27 | era: pre-1.18.1 -->

> **Pyrahead wrote: Wed Jul 26, 2023 5:05 am**
> Hey there. Thank you for breathing new graphical life into this game. How would I go about using all your graphical patches but keeping the old sound files for skills / spells. Some of the Rogue skills or fire spells (like that melting in the deadmines) is just extremely loud compared to other skills.
>
>  I already used an MPQ Editor and had a look at the sound files.

There's directions on how to do this a few posts back of mine.

> **Peasantunit wrote: Wed Jul 26, 2023 5:38 am**
> - Voidwalkers are not transparent in the new models. ... Please consider adding transparency to them, optionally or otherwise.

You can make this edit yourself if you'd like but doing this would affect all voidwalker mobs in the game so it's not worth doing it for the patch as a whole.

> **Peasantunit wrote: Wed Jul 26, 2023 5:38 am**
> - In Classic, when emoting something like /wave, you can walk around while doing so, but in tWoW the animation is immediately cancelled if you move. Is this behavior attached to models? And if so, would it be possible to be modified so that upper body animations are not cancelled if you move?

> **Film wrote: Tue Jul 25, 2023 11:41 am**
> First of all, thank you for your selfless contribution to this project. The original high elf hunter's neck looks fine, and now this neck is in desperate need of your treatment.

These are not something we can easily fix without someone with better knowledge of classic wow models to help us. Unfortunately, such a person has yet to appear.

> **Peasantunit wrote: Wed Jul 26, 2023 5:38 am**
> - Stranglethorn Vale's music has this weird feedback noise present for a few seconds in the middle of it. It happens at [1:22 in this video](https://youtu.be/uRiQE-xvDyQ?t=82). Could this be possibly fixed with one of these patches? I noticed while writting this that, maybe, this was supposed to be a didgeridoo, but if it was, there's something wrong with it...

I dislike the HD patch's music replacements, so I always remove them from the mpq each time I download a new version. You can just do that for the stranglethorn music if you want, or if you like the music then download the file again and replace it yourself, create a new patch with it, and you can even post it to request a merge into patch-A.

## Post 54951 by Mrrosh (Barrens Chat Casualty) — 2023-07-28T15:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54951#p54951 | page 27 | era: pre-1.18.1 -->

@Astricon Any chance you could take a look at the Swift Brewfest Ram model from the donation shop? <https://database.turtlecraft.gg/?npc=40028>

## Post 54987 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-28T19:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54987#p54987 | page 27 | era: pre-1.18.1 -->

It seems that Arcane Wands are making the Nature Wand sound now. Oops...

## Post 55045 by Healthyboundary — 2023-07-29T10:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55045#p55045 | page 27 | era: pre-1.18.1 -->

Not the most intelligent idea to combine the dumb sound "upgrade" with updated models into a single patch when you're gonna release multiple patches anyway.......

## Post 55103 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-29T18:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55103#p55103 | page 27 | era: pre-1.18.1 -->

> **Healthyboundary wrote: Sat Jul 29, 2023 10:30 am**
> Not the most intelligent idea to combine the dumb sound "upgrade" with updated models into a single patch when you're gonna release multiple patches anyway.......

I am only creating one patch. patch-B exists solely because there is not a complete list file for it since it was inherited, making it impossible to make changes or merge this into patch-A. Anything beyond patches A and B are not entirely hobby contributions by the other members of the project. What you see in patch-A is built upon an inherited project's foundation, not built from the ground up by me.

If you want separate patches that behave differently than what is offered, you are more than welcome to make them yourself.

## Post 55119 by Albel — 2023-07-29T22:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55119#p55119 | page 27 | era: pre-1.18.1 -->

My nature wand is using the shadow animation. Doesn't bother me, but just in case it helps.

## Post 55176 by Garotheon — 2023-07-30T13:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55176#p55176 | page 27 | era: pre-1.18.1 -->

hey redmage i am trying to look into the sheath animation bug, but i am having problems with the m2. , and model viewer for wow, also i tryied to jus take world models + weapons and keeped the vanilla models with better texture, the players keeped their vanilla apearence and still had the sheath animation normal but the npc's had a texture problem on thgeir face the face texture whent into their back heads, i tried messing around a little more, but only got to a point where npcs turned into walking green man with hair and updated weapons LOL, one guys recomended to me to check out DBC and alte them but i am having some trouble in doing that too. i would love any tips or tricks or apps you are ale to share. btw you have done a awesome job

## Post 55354 by Garotheon — 2023-07-31T11:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55354#p55354 | page 27 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Jul 09, 2023 8:29 pm**
> Sheathing animation cannot be fixed.

i iam trying and messing around the issue, it looks like is rooted in the characters M2. but to some reason i cannot open the model viwer at any way, i did some work around in the high elf case deleting the legion M2 and using vanilla M2 will make the textures go wild - só in the end i just used vanilla m2 + vanilla textures (because of the way they satay in the character), probaly making customs M2 using the legion ones as base for each race will fix that i would like to do it but i am being outsmarted and outplayed by the modding tool in the moment.

## Post 55380 by Bittermens (Barrens Chat Casualty) — 2023-07-31T16:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55380#p55380 | page 27 | era: pre-1.18.1 -->

> **Garotheon wrote: Mon Jul 31, 2023 11:52 am**
> > **Redmagejoe wrote: Sun Jul 09, 2023 8:29 pm**
> > Sheathing animation cannot be fixed.
>
>   i iam trying and messing around the issue, it looks like is rooted in the characters M2. but to some reason i cannot open the model viwer at any way, i did some work around in the high elf case deleting the legion M2 and using vanilla M2 will make the textures go wild - só in the end i just used vanilla m2 + vanilla textures (because of the way they satay in the character), probaly making customs M2 using the legion ones as base for each race will fix that i would like to do it but i am being outsmarted and outplayed by the modding tool in the moment.

that is because turtle HD uses outdated versions of said models, and no one at model changing cared to make Vanilla and TBC friendly ones since they all are working on Wrath, which technically it is the best client to mod with it, and it even got 3d armor models working on it.

## Post 55837 by Urric — 2023-08-05T00:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55837#p55837 | page 27 | era: pre-1.18.1 -->

Hey guys.

Weapons don't sheathe or unsheathe with Z anymore. What's that about?

## Post 55838 by Hctwowfan (Bug Report Enthusiast) — 2023-08-05T00:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55838#p55838 | page 27 | era: pre-1.18.1 -->

> **Urric wrote: Sat Aug 05, 2023 12:23 am**
> Hey guys.
>
>  Weapons don't sheathe or unsheathe with Z anymore. What's that about?

You might have accidentially switched to a different keyboard layout via pressing alt+shift and your z key is now the y key. Press alt+shift to switch back.

## Post 55867 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-08-05T08:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55867#p55867 | page 27 | era: pre-1.18.1 -->

> **Hctwowfan wrote: Sat Aug 05, 2023 12:28 am**
> > **Urric wrote: Sat Aug 05, 2023 12:23 am**
> > Hey guys.
> >
> >  Weapons don't sheathe or unsheathe with Z anymore. What's that about?
>
>  You might have accidentially switched to a different keyboard layout via pressing alt+shift and your z key is now the y key. Press alt+shift to switch back.

I'm not sure this is the problem. My weapons/shields don't sheathe/unsheathe too (and as far as I remember they never did with this patch).

## Post 55886 by Dhrazar (Barrens Chat Casualty) — 2023-08-05T12:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55886#p55886 | page 27 | era: pre-1.18.1 -->

Jesus christ, are you guys able to read anything about this patch?
It's written in the description, and nearly every second comment, that weapon sheathe will no longer work with this patch, 'cause of technical reasons.

## Post 55893 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-08-05T13:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55893#p55893 | page 27 | era: pre-1.18.1 -->

> **Dhrazar wrote: Sat Aug 05, 2023 12:51 pm**
> Jesus christ, are you guys able to read anything about this patch?
>  It's written in the description, and nearly every second comment, that weapon sheathe will no longer work with this patch, 'cause of technical reasons.

Ha, I remember reading it somewhere   hiding_smth_turtle_head

## Post 55906 by Wleting — 2023-08-05T16:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55906#p55906 | page 27 | era: pre-1.18.1 -->

Is there any way to change the color of the HD druids forms? Regardless of the character's hair or skin color it remains the same form

## Post 55922 by Albusturt — 2023-08-05T18:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55922#p55922 | page 27 | era: pre-1.18.1 -->

I wonder what are the latest news and if the patch developers are working on something currently. Let us know if an updated patch is on the way.

## Post 55945 by Wilsonsds (Patch Note Conspiracy Theorist) — 2023-08-06T01:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55945#p55945 | page 27 | era: pre-1.18.1 -->

Is there a way in future patches to change the priest animation while levitanting?

## Post 55974 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-06T08:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55974#p55974 | page 27 | era: pre-1.18.1 -->

We're featured!

[embed: https://www.youtube.com/embed/KmRxTLwHIas]

## Post 55999 by Dhrazar (Barrens Chat Casualty) — 2023-08-06T13:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55999#p55999 | page 27 | era: pre-1.18.1 -->

> **Wleting wrote: Sat Aug 05, 2023 4:21 pm**
> Is there any way to change the color of the HD druids forms? Regardless of the character's hair or skin color it remains the same form

The easiest way would be to buy one of those "Winter" skins for druids, from the donation shop.

## Post 56031 by Mehra — 2023-08-06T18:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56031#p56031 | page 27 | era: pre-1.18.1 -->

Hello again!

I was exploring the game files when i came across the TBC Blood Elf character screen files, and i thought that maybe some people here would like to use it, or that one of the texture magicians here would like to give it a more "Quel'Dorei" look.

In any event here it is.

[https://drive.google.com/file/d/1clMYBe ... drive_link](https://drive.google.com/file/d/1clMYBeWhTnTDBde-NsZfAx_r8teVGpAg/view?usp=drive_link)

## Post 56484 by Wilsonsds (Patch Note Conspiracy Theorist) — 2023-08-09T05:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56484#p56484 | page 27 | era: pre-1.18.1 -->

> **Dhrazar wrote: Sat Aug 05, 2023 12:51 pm**
> Jesus christ, are you guys able to read anything about this patch?
>  It's written in the description, and nearly every second comment, that weapon sheathe will no longer work with this patch, 'cause of technical reasons.

 ***PLEASE HELP ME, MY POOR WEAPONS FOREVER GONE!!! I CANT  SHEATHE OR UNSHEATHE THEM ANYMORE***

HAHHAHAHA

## Post 56599 by Fingster — 2023-08-09T22:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56599#p56599 | page 27 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/58q2rST.jpg)

Armored horde wolf is messed up too:(

## Post 56603 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-09T22:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56603#p56603 | page 27 | era: pre-1.18.1 -->

> **Fingster wrote: Wed Aug 09, 2023 10:02 pm**
> Armored horde wolf is messed up too:(

Known for some time. Need Astricon's help to fix this.

## Post 56696 by Huma — 2023-08-10T14:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56696#p56696 | page 27 | era: pre-1.18.1 -->

i have rly low fps in teldrassil when raining with patch A, rest of the time im above  200fps, can you check it?

## Post 56739 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-10T19:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56739#p56739 | page 27 | era: pre-1.18.1 -->

> **Huma wrote: Thu Aug 10, 2023 2:43 pm**
> i have rly low fps in teldrassil when raining with patch A, rest of the time im above  200fps, can you check it?

I was only able to resolve this issue with a new CPU, and even then there are micro FPS drops very rarely. The fact is that the vanilla client is not designed for these kinds of demands, and it doesn't put the burden on your GPU but on your CPU. There's sadly no way to fix this other than with a beefy CPU.

## Post 56837 by Huma — 2023-08-11T16:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56837#p56837 | page 27 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Aug 10, 2023 7:25 pm**
> > **Huma wrote: Thu Aug 10, 2023 2:43 pm**
> > i have rly low fps in teldrassil when raining with patch A, rest of the time im above  200fps, can you check it?
>
>   I was only able to resolve this issue with a new CPU, and even then there are micro FPS drops very rarely. The fact is that the vanilla client is not designed for these kinds of demands, and it doesn't put the burden on your GPU but on your CPU. There's sadly no way to fix this other than with a beefy CPU.

Why you talk bullshit? i play black desert online above 100 fps on ultra setings and you say to me "buy a new CPU to play a 2004 game" are you kidding? your patch kill the performance in some places because you are adding effects for a 2000s engine, just dont talk shit and fix your patch, dont have the balls to say i need a new CPU when i been playing retail with no fps drops pls.......

## Post 56840 by Dhrazar (Barrens Chat Casualty) — 2023-08-11T16:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56840#p56840 | page 27 | era: pre-1.18.1 -->

> **Huma wrote: Thu Aug 10, 2023 2:43 pm**
> i have rly low fps in teldrassil when raining with patch A, rest of the time im above  200fps, can you check it?

I have the same issue with a 7700k, so I set wheater effects on low. I will check fps again, when I installed my new 5800X3D in a few weeks.

## Post 56842 by Huma — 2023-08-11T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56842#p56842 | page 27 | era: pre-1.18.1 -->

> **Dhrazar wrote: Fri Aug 11, 2023 4:28 pm**
> > **Huma wrote: Thu Aug 10, 2023 2:43 pm**
> > i have rly low fps in teldrassil when raining with patch A, rest of the time im above  200fps, can you check it?
>
>   I have the same issue with a 7700k, so I set wheater effects on low. I will check fps again, when I installed my new 5800X3D in a few weeks.

Man hardware doesnt matter, its a 2004 game using some ported models from 2012..... theres something on weather and forest zones that tihs old engine cant handle

## Post 56844 by Dhrazar (Barrens Chat Casualty) — 2023-08-11T16:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56844#p56844 | page 27 | era: pre-1.18.1 -->

> **Huma wrote: Fri Aug 11, 2023 4:08 pm**
> Why you talk bullshit? i play black desert online above 100 fps on ultra setings and you say to me "buy a new CPU to play a 2004 game" are you kidding? your patch kill the performance in some places because you are adding effects for a 2000s engine, just dont talk shit and fix your patch, dont have the balls to say i need a new CPU when i been playing retail with no fps drops pls...

Are you serious? You are comparing two different games, from two different decades.
RedmageJoe can't do anything about this, 'cause the game engine doesn't know any of modern CPU instructions.
It just requires raw CPU horsepower and a basic 150$ CPU doesn't deliver that.
Also if you install vanillafixes+vanillatweaks patch, the game will run on vulcan, which will use hardware much more  efficient. With these you have retail performance and smoothness.

*Last edited by Dhrazar on Fri Aug 11, 2023 4:56 pm, edited 2 times in total.*

## Post 56846 by Huma — 2023-08-11T16:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56846#p56846 | page 27 | era: pre-1.18.1 -->

hahaah dont make me laugh, pls, typical noobs that when they see an unnoptimized game runs to the store to buy the new 800$ GPU xDDD

## Post 56847 by Huma — 2023-08-11T16:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56847#p56847 | page 27 | era: pre-1.18.1 -->

you are putting effects that a 2000s engine cant handle stop talking trash about other PCs pls..... i play every new game on high/ultra with no problems, dont be so cringe, patch its bad.

## Post 56848 by Dhrazar (Barrens Chat Casualty) — 2023-08-11T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56848#p56848 | page 28 | era: pre-1.18.1 -->

> **Huma wrote: Fri Aug 11, 2023 4:46 pm**
> hahaah dont make me laugh, pls, typical noobs that when they see an unnoptimized game runs to the store to buy the new 800$ GPU xDDD

Nobody was talking about GPUs, except you. Seems you have no idea what you are talking about.

## Post 56864 by Huma — 2023-08-11T18:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56864#p56864 | page 28 | era: pre-1.18.1 -->

i put GPU as an example of how people like you who know nothing about computers get cucked my companies you dumb fuck

## Post 56906 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-11T22:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56906#p56906 | page 28 | era: pre-1.18.1 -->

Huma, I have very clearly explained to you the issue, and I can even ask one of the tech wizards of the staff to come weigh in on this if it would appease you. They will likely confirm the issues as being the game engine itself and the demands that we're putting upon it. However, I would ask you to be civil in this thread and not lash out at people who understand the technical nuances of the situation better than you do.

We are loading high resolution assets that have been crushed down as much as they possibly can be to fit the vanilla client's maximum allowed resolution for textures and maximum allowed model complexity without losing graphic fidelity, so there is nothing further that can be done with the assets, which is the only thing this patch adds.  What you are asking is that we wave our hands and magically make HD assets somehow occupy less space and have less complexity than they already do, or that we magically make the 2004 vanilla client call on the GPU to handle the heavy lifting, or to suddenly be optimized to load no less than 2 additional gigabytes of ONLY graphic assets into memory, on top of the additions Turtle has made.  Even with the hacky fix of allowing WoW.exe to be aware of addresses beyond 2 GB, you must understand what this entails.

If you have never worked on software, then you won't have any idea what we're talking about, and if that is the case, I ask you keep your hostile ignorance to yourself. You can't optimize a zip folder full of data (which is all these MPQs are) to make an actual binary not optimized for modern demands magically perform better.

## Post 57031 by Huma — 2023-08-12T21:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57031#p57031 | page 28 | era: pre-1.18.1 -->

the insane fps drops only happens on teldrassil (idk if it happens in other forest/jungle maps) when it rains, if it rains in elwyn for example the performance its good, maybe its caused by only couple of files that can be replaced or simply deleted

## Post 57147 by Dalijon — 2023-08-13T17:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57147#p57147 | page 28 | era: pre-1.18.1 -->

I followed the instructions, and it was kind of cool on my human warrior.  Only the unsheath weapon button seemed a little bugged.  However, I can't even click on my 60 male druid on the character selection screen, or the game crashes.

## Post 57168 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-13T20:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57168#p57168 | page 28 | era: pre-1.18.1 -->

> **Dalijon wrote: Sun Aug 13, 2023 5:16 pm**
> I followed the instructions, and it was kind of cool on my human warrior.  Only the unsheath weapon button seemed a little bugged.  However, I can't even click on my 60 male druid on the character selection screen, or the game crashes.

Is your Druid, by any chance, a Tauren?

## Post 57172 by Dalijon — 2023-08-13T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57172#p57172 | page 28 | era: pre-1.18.1 -->

Yes,

My druid is a Tauren.  I take it some Tauren models just can't be supported?  I'll admit, I didn't read all the fine print about the mod, just how easy it was to try, and that there were limitations that may not be able to be overcome due to the outdated code the original 1.12 software used.

Edit:  I downloaded again, stripped my tauren naked, and it loaded.  Going to add piece by piece and find out what piece causes a crash.

Second update:  Once I loaded my naked tauren, It loaded and I can play.  Could not duplicate the crash again once I got it working.  I exited game, and my fully cloathed Tauren loads just fine.  I'll report any further issues.  The updated animal forms are SICK!

Ty for responding, and for caring!

Sincerely,
A happy druid.

## Post 57212 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-14T04:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57212#p57212 | page 28 | era: pre-1.18.1 -->

I am actually doing a full retool of the DBCs that deal with Spells and ItemDisplayInfo in a bid to clean up some outdated references to equipment and the like. Considering that the aforementioned Tauren issue seems item related, I'm hoping that this retool will, among other item-related issues, remedy so many problematic behaviors that some items have caused in the past.

There's no better time for me to work on cleaning up the DBC files, as a compatibility patch will be needed whenever Turtle's big content patch drops. I'd like to have the HD patch as ready as possible for when that day comes.

## Post 57307 by Reever — 2023-08-14T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57307#p57307 | page 28 | era: pre-1.18.1 -->

Is it possible to separate the spell effects from the Legion character models

## Post 57312 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-08-14T17:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57312#p57312 | page 28 | era: pre-1.18.1 -->

> **Reever wrote: Mon Aug 14, 2023 4:53 pm**
> Is it possible to separate the spell effects from the Legion character models

Everything is possible, just download an MPQ Editor and get to work!

## Post 57321 by Reever — 2023-08-14T18:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57321#p57321 | page 28 | era: pre-1.18.1 -->

> **Ingameacc12345 wrote: Mon Aug 14, 2023 5:19 pm**
> > **Reever wrote: Mon Aug 14, 2023 4:53 pm**
> > Is it possible to separate the spell effects from the Legion character models
>
>   Everything is possible, just download an MPQ Editor and get to work!

Didn't realize it would be this easy. Took me like 3 minutes to get it done. Thanks

## Post 57440 by Wilczan (Barrens Chat Casualty) — 2023-08-15T11:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57440#p57440 | page 28 | era: pre-1.18.1 -->

How I can remove one model from the patch to keep the default look?

Bought Brewfest Kodo but very dissapointed how it looks with HD patch.
On the other hand HD patch overall is great and would like to keep rest of the models.

## Post 57496 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-15T19:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57496#p57496 | page 28 | era: pre-1.18.1 -->

> **Wilczan wrote: Tue Aug 15, 2023 11:10 am**
> How I can remove one model from the patch to keep the default look?
>
>  Bought Brewfest Kodo but very dissapointed how it looks with HD patch.
>  On the other hand HD patch overall is great and would like to keep rest of the models.

Brewfest Kodo is among a list of mounts that do not currently have HD textures, so they will look quite bad until we can port or create our own.

## Post 57500 by Wilczan (Barrens Chat Casualty) — 2023-08-15T21:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57500#p57500 | page 28 | era: pre-1.18.1 -->

I bet creating new ones would be very time consuming. Cannot just import old ones for now?

## Post 57961 by Baess — 2023-08-18T20:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57961#p57961 | page 28 | era: pre-1.18.1 -->

Total sidebar here. Would this work with a stock vanilla client or has turtle changed to much ![😀](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f600.svg)

## Post 57962 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-18T21:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57962#p57962 | page 28 | era: pre-1.18.1 -->

> **Baess wrote: Fri Aug 18, 2023 8:58 pm**
> Total sidebar here. Would this work with a stock vanilla client or has turtle changed to much ![😀](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f600.svg)

In theory, it should work as the references that were changed in DBCs that are Turtle exclusive shouldn't interfere with things that obviously do not exist in vanilla, but we also changed Spells.DBC which has spell tooltips.  Any spell that Turtle changed would thus be inaccurately described on base vanilla.

I apologize, as I do not still have a link to the original mod that serves as the base for this one.

## Post 57968 by Baess — 2023-08-18T22:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57968#p57968 | page 28 | era: pre-1.18.1 -->

Many thanks

## Post 58033 by Astrilslab17 — 2023-08-19T14:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=58033#p58033 | page 28 | era: pre-1.18.1 -->

Could you please upload the patch-A.MPQ file to mediafire because of the restrictions in my country it doesn't let me download it from google drive thanks in advance, very good post.

## Post 58240 by Faustorgo (Barrens Chat Casualty) — 2023-08-21T08:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=58240#p58240 | page 28 | era: pre-1.18.1 -->

> **Astrilslab17 wrote: Sat Aug 19, 2023 2:05 pm**
> Could you please upload the patch-A.MPQ file to mediafire because of the restrictions in my country it doesn't let me download it from google drive thanks in advance, very good post.

Hi, there we go, Patch-A , updated :D [https://www.mediafire.com/file/hz89iukx ... A.rar/file](https://www.mediafire.com/file/hz89iukxw3uzj2u/patch-A.rar/file)

## Post 58534 by Zer0cool — 2023-08-23T05:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=58534#p58534 | page 28 | era: pre-1.18.1 -->

> **Baess wrote: Fri Aug 18, 2023 8:58 pm**
> Total sidebar here. Would this work with a stock vanilla client or has turtle changed to much ![😀](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f600.svg)

If you want the original mod for classic WoW client, you can find it here : [https://model-changing.net/index.php?ap ... llabs&id=9](https://model-changing.net/index.php?app=collab&module=collab&controller=collabs&id=9) as many other mods that modding community has made. The mod is for every private server that is 1.12 version. Im the creator of it and I like that other people get inspired and entering into wow modding community, since we are few, as Redmagejoe and Astricon did here. It makes a difference. Cheers

## Post 58542 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-23T06:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=58542#p58542 | page 28 | era: pre-1.18.1 -->

> **Zer0cool wrote: Wed Aug 23, 2023 5:02 am**
> Cheers

Awesome to see you again Zer0cool. Thanks for commenting. I may have already asked this before, but any idea if it's possible for the sheathing animation issue to ever be fixed with a reconversion, or is that part of the raw deal in downporting Legion models and animation data and trying to bundle it into a vanilla M2?

## Post 58579 by Zer0cool — 2023-08-23T09:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=58579#p58579 | page 28 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed Aug 23, 2023 6:51 am**
> > **Zer0cool wrote: Wed Aug 23, 2023 5:02 am**
> > Cheers
>
>   Awesome to see you again Zer0cool. Thanks for commenting. I may have already asked this before, but any idea if it's possible for the sheathing animation issue to ever be fixed with a reconversion, or is that part of the raw deal in downporting Legion models and animation data and trying to bundle it into a vanilla M2?

Unfortunately no. From contacting, back then, with the creator of the tool that used to convert Legion++ models back to vanilla, it isn't possible. After a few tests that he did and I, we end up that we couldn't locate what was the exact issue, was tool fault or model fault ? Maybe meshed up bone connections to the model, or maybe something else that we couldn't locate after all. I tried everything, to bypass this, but with no success. I tried even checking it by porting the model into blender, but again I couldn't locate the issue, it was all normal there. So I believed that would be a permanent “error” but with less impact on playing the game and “ruin” the feeling. People must move on, after all playing the vanilla version but with newer models is something out of the mind of everyone, but the feeling is AWESOME I guess.  turtle_in_love   smiling_turtle_head

## Post 59091 by Remorsx (Barrens Chat Casualty) — 2023-08-26T09:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59091#p59091 | page 28 | era: pre-1.18.1 -->

if i delete the "scourge" folder to retain the old UD models, is it possible to restore the eye glow on all facial features? right now it is only present on one

## Post 59170 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-26T14:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59170#p59170 | page 28 | era: pre-1.18.1 -->

> **Remorsx wrote: Sat Aug 26, 2023 9:39 am**
> if i delete the "scourge" folder to retain the old UD models, is it possible to restore the eye glow on all facial features? right now it is only present on one

This can probably easily be fixed with a quick review of the DBC.  I will see what I can do.

EDIT: It appears that all of the faces and "features" options that should have eye glow are properly working in-game.  Are you asking to have eye glow added to the face combinations that specifically have blacked out eyes, such as the cross-strap faces? You do realize that these match their vanilla counterparts, right?

Good news is that while looking into this, I've narrowed down the issue with the weird "light shafts" in the Undead character select screens.  It seems that the alpha channels aren't being rendered properly with their textures, causing this effect. These are meant to be spider webs and fog effects. Will see what I can do about this.

## Post 59262 by Remorsx (Barrens Chat Casualty) — 2023-08-27T08:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59262#p59262 | page 28 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Aug 26, 2023 2:21 pm**
> EDIT: It appears that all of the faces and "features" options that should have eye glow are properly working in-game.  Are you asking to have eye glow added to the face combinations that specifically have blacked out eyes, such as the cross-strap faces? You do realize that these match their vanilla counterparts, right?

quite strange because on my part there is only 1 "facial feature" with the glowing yellow eyes, all the other ones are empty blacked out ones lol

i did it that way - opened patch A via MPQedit64, removed the scourge folder from the characters entirely and closed it
guess i did something wrong? xd

i'm currently talking about the UD males

![Image](https://sun9-41.userapi.com/impg/z_iwFDsAXx-Ac7k37pjtrUNshbJqL05TsUUiQA/Lf0Uhzs2b4s.jpg?size=1920x1080&quality=96&sign=dc7d45a1034cdcde09924605b4955967&type=album)

and this is the only option with the glow
![Image](https://sun9-14.userapi.com/impg/7dObxnXU_-zb0Ey3fVKjW844IuJ3dtXmNKuSTA/X2Suu9fd0GE.jpg?size=1920x1080&quality=96&sign=fbf243a355e3df94ed45e478e67e7655&type=album)

## Post 59456 by Remorsx (Barrens Chat Casualty) — 2023-08-27T22:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59456#p59456 | page 28 | era: pre-1.18.1 -->

if it helps - sheath/unsheath animation does work on female orc shaman with a 2handed axe
lol

## Post 59457 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-27T22:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59457#p59457 | page 28 | era: pre-1.18.1 -->

Are you sure that you did not mistake what facial settings you had? It is not the "Face" field, but the "Features" field that affects the eyes.  There are 17 total Features settings, 12 of which have eye glow, 5 of which have black eyes.  Faces will not change the eye glow, as it is dependent upon what "Features" you have chosen.

I just tested all of these on both Male and Female, all combinations of Face and Features, and while there are more options with eye glow, at least 5 of the eye glow options have a black eyes alternative.

## Post 59458 by Remorsx (Barrens Chat Casualty) — 2023-08-27T23:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59458#p59458 | page 28 | era: pre-1.18.1 -->

yep, it seems bugged on my end, i scrolled through all the features and only 1 has the glowing eyes

moreso, before installing the patch i created an UD with the glowing eyes and when i deleted the scourge folder they became blacked out as on my first screenshot

## Post 59463 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-28T00:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59463#p59463 | page 28 | era: pre-1.18.1 -->

> **Remorsx wrote: Sun Aug 27, 2023 11:02 pm**
> yep, it seems bugged on my end, i scrolled through all the features and only 1 has the glowing eyes
>
>  moreso, before installing the patch i created an UD with the glowing eyes and when i deleted the scourge folder they became blacked out as on my first screenshot

Unfortunately, I cannot reproduce this issue. I asked a number of other players to check this for me on the latest version of the patch, and they can also not reproduce this issue. Do you have the latest version of the patch available on the front page?

## Post 59486 by Remorsx (Barrens Chat Casualty) — 2023-08-28T06:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59486#p59486 | page 28 | era: pre-1.18.1 -->

yep. of course
well, unfortunate, but whatever

## Post 60155 by Kassuss8787 — 2023-08-30T22:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60155#p60155 | page 28 | era: pre-1.18.1 -->

Hello i have a problem with nameplate, after installing the HD Model i got these nameplate.
Tried disabling all addon, nothing, even addon that change nameplate do nothing. But i did redownload the game without the patch and nameplates are fine.
Any idea how to fix this?
![Image](https://imgur.com/a/4poq1Ph)
<https://imgur.com/a/4poq1Ph>

## Post 60156 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-30T23:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60156#p60156 | page 28 | era: pre-1.18.1 -->

The HD patch natively changes the appearance of nameplates.

## Post 60160 by Kassuss8787 — 2023-08-30T23:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60160#p60160 | page 28 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed Aug 30, 2023 11:07 pm**
> The HD patch natively changes the appearance of nameplates.

There are no way to keep the hd patch and use nameplate addon like KUI?

## Post 60163 by Redmagejoe (Grandmaster of Forum PvP) — 2023-08-31T00:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60163#p60163 | page 28 | era: pre-1.18.1 -->

I am not familiar with the addon you speak of, but addons should take precedence over any base client behavior. The HD patch does not manipulate any sort of XML or LUA to my knowledge, simply replaces existing assets. It should have no impact on the function of any addons.

## Post 60450 by Leathertank — 2023-09-01T12:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60450#p60450 | page 28 | era: pre-1.18.1 -->

Been away for a while, so happy you finally dropped this! So cool to see zerocool in the thread, you guys all rock.

Great work, and thank you!

## Post 60824 by Mrouiouix — 2023-09-04T15:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60824#p60824 | page 29 | era: pre-1.18.1 -->

We know when the goblins will be released in HD?

## Post 61238 by Wilczan (Barrens Chat Casualty) — 2023-09-07T07:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61238#p61238 | page 29 | era: pre-1.18.1 -->

Any chance for Brewfest Kodo in HD?

## Post 61239 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-07T07:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61239#p61239 | page 29 | era: pre-1.18.1 -->

> **Wilczan wrote: Thu Sep 07, 2023 7:01 am**
> Any chance for Brewfest Kodo in HD?

It's a little more complex, and Astricon is taking a much-deserved break. No updates to textures unless he returns or another texture artist steps forward, I'm afraid.

## Post 61314 by Wwq133 — 2023-09-07T18:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61314#p61314 | page 29 | era: pre-1.18.1 -->

Arcane Missiles still has a texture issue?

## Post 61967 by Astricon (Barrens Chat Casualty) — 2023-09-09T08:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61967#p61967 | page 29 | era: pre-1.18.1 -->

Wow so excited in the time I've been gone to see Zer0cool commenting and that cool video featuring this mod! Very very awesome. I've been playing baldur's gate 3 a ton lately which is why I've been absent, but I fully intend to one day (maybe soon) fix some mount textures and make some more sound changes as my boyfriend and I level a rogue and druid, or whatever else we do. I have a few weeks off coming up, so I may do some stuff then. Please comment any broken textures you notice that I can fix, and any spell sounds you might like updated, and I'll prioritize them. I'm also crossing my fingers because I maaaaay get a very WoW-related coding job soon which means that this experience possibly paid off monetarily for me haha. Thanks for all the feedback you've all given me! Except that one guy. Not elaborating. :)

## Post 61971 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-09T08:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61971#p61971 | page 29 | era: pre-1.18.1 -->

In preparation for the upcoming content patch, the Turtle Dev Team has been kind enough to provide me with some insight into clientside changes in advance to allow me to begin preparing a compatibility update for patch-A.MPQ.

> **Astricon wrote: Sat Sep 09, 2023 8:45 am**
>

Great to have you back.  Please be sure to let me know when you want to start working on DBCs again, as we will need to use this new patch-A I'm working on as the base for any changes.

## Post 61974 by Astricon (Barrens Chat Casualty) — 2023-09-09T09:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61974#p61974 | page 29 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Sep 09, 2023 8:52 am**
> Please be sure to let me know when you want to start working on DBCs again, as we will need to use this new patch-A I'm working on as the base for any changes.

Yes I figured that might be the case. I won't do anything until I have the cutting edge stuff in hand. If there's something I might be able to do to help get the mod ready for patch day pm me about it I'll see if I have time.

## Post 64537 by Zer0cool — 2023-09-15T19:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64537#p64537 | page 29 | era: pre-1.18.1 -->

By the way, Redmagejoe there is also another mod that Leeviathan has made back then. He made a mod using the Chinese models and porting them back to classic. So I gave it a test here and the file work's directly as it is with no edit at all. Only you need to rename it as patch_C or D etc, probably a letter after any other mod. I also load it with your version of model patch and works ok. You can find it here if you want to test it too:
[https://model-changing.net/index.php?ap ... llabs&id=9](https://model-changing.net/index.php?app=collab&module=collab&controller=collabs&id=9)  under the section (Alternative Mods).
I include some pictures from the Character Creation screen.
![Image](https://i.imgur.com/Zot4820.jpg)

![Image](https://i.imgur.com/wyX8jl3.jpg)

## Post 64789 by Faustorgo (Barrens Chat Casualty) — 2023-09-16T20:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64789#p64789 | page 29 | era: pre-1.18.1 -->

Please fix, the arcane missiles, if is possible :D

## Post 64837 by Astricon (Barrens Chat Casualty) — 2023-09-17T04:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64837#p64837 | page 29 | era: pre-1.18.1 -->

> **Faustorgo wrote: Sat Sep 16, 2023 8:34 pm**
> Please fix, the arcane missiles, if is possible :D

Unfortunately it seems that the arcane missiles bug is related to certain models such as high elf female. It's not a bug with the spell itself. Since I don't have any modeling knowledge, I can't fix it.

## Post 65241 by Voxmf1r — 2023-09-18T09:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=65241#p65241 | page 29 | era: pre-1.18.1 -->

Is it possible that new music was not added to the playlist but replaced it? Because I've been leveling in westfall and only new music played.

## Post 65687 by Tzlol — 2023-09-19T11:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=65687#p65687 | page 29 | era: pre-1.18.1 -->

Hi,

there is an issue that skill text not being displayed in the Chinese client

Could it be fixed?

Thanks a lot

## Post 65808 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-19T16:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=65808#p65808 | page 29 | era: pre-1.18.1 -->

> **Tzlol wrote: Tue Sep 19, 2023 11:05 am**
> Hi,
>
>  there is an issue that skill text not being displayed in the Chinese client
>
>  Could it be fixed?
>
>  Thanks a lot

We do not support Chinese clients nor will we make a compatibility patch for it.

## Post 66016 by Luidiro — 2023-09-20T14:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66016#p66016 | page 29 | era: pre-1.18.1 -->

It's possible to have the patch-A.MPQ updated models but with the vanilla sound effects? I really like the older sinister strike and auto attack sounds (nostalgic reasons).

## Post 66024 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-09-20T14:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66024#p66024 | page 29 | era: pre-1.18.1 -->

> **Luidiro wrote: Wed Sep 20, 2023 2:00 pm**
> It's possible to have the patch-A.MPQ updated models but with the vanilla sound effects? I really like the older sinister strike and auto attack sounds (nostalgic reasons).

[viewtopic.php?p=57312#p57312](https://forum.turtlecraft.gg/viewtopic.php?p=57312#p57312)

## Post 66030 by Luidiro — 2023-09-20T15:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66030#p66030 | page 29 | era: pre-1.18.1 -->

> **Ingameacc12345 wrote: Wed Sep 20, 2023 2:38 pm**
> > **Luidiro wrote: Wed Sep 20, 2023 2:00 pm**
> > It's possible to have the patch-A.MPQ updated models but with the vanilla sound effects? I really like the older sinister strike and auto attack sounds (nostalgic reasons).
>
>  [viewtopic.php?p=57312#p57312](https://forum.turtlecraft.gg/viewtopic.php?p=57312#p57312)

I will try it out, thanks!

## Post 66074 by Eriana — 2023-09-20T22:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66074#p66074 | page 29 | era: pre-1.18.1 -->

all right first and foremost, i LOVE the HD patch, however Patch-A.MPQ is now causing wow error#132's in stormwind

i tried deleting addons, reverting certain sound channel modifications, update drivers- de-update drivers to a previous state when i didnt get erros, still get #132, the moment i cut Patch-A out of the picture the game runs smooth

Here is the wow crash TXT im getting:

==============================================================================
World of WarCraft (build 5875)

Exe:      C:\Mysteries Of Azeroth\WoW.exe
Time:     Sep 21, 2023 12:21:39.104 AM
User:     *redacted*
Computer: Desktop-comp
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Mysteries Of Azeroth\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:00713E26

The instruction at "0x00713E26" referenced memory at "0xC35EC8F2".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=1FB465FC  EBX=00000D05  ECX=448D3102  EDX=00000000  ESI=00000000
EDI=3F68CBF9  EBP=0019F9D8  ESP=0019F9C4  EIP=00713E26  FLG=00010217
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 00713E26 0019F9D8 0001:00312E26 C:\Mysteries Of Azeroth\WoW.exe
 00714FE6 0019FB98 0001:00313FE6 C:\Mysteries Of Azeroth\WoW.exe
 007077BB 0019FC44 0001:003067BB C:\Mysteries Of Azeroth\WoW.exe
 0048368F 0019FC84 0001:0008268F C:\Mysteries Of Azeroth\WoW.exe
 00482E7A 0019FD10 0001:00081E7A C:\Mysteries Of Azeroth\WoW.exe
 0076FC31 0019FD2C 0001:0036EC31 C:\Mysteries Of Azeroth\WoW.exe
 007658E7 0019FD50 0001:003648E7 C:\Mysteries Of Azeroth\WoW.exe
 0076434C 0019FD5C 0001:0036334C C:\Mysteries Of Azeroth\WoW.exe
 0044264E 0019FE24 0001:0004164E C:\Mysteries Of Azeroth\WoW.exe
 004246B0 0019FE58 0001:000236B0 C:\Mysteries Of Azeroth\WoW.exe
 0042106F 0019FEC8 0001:0002006F C:\Mysteries Of Azeroth\WoW.exe
 00420BF1 0019FEE0 0001:0001FBF1 C:\Mysteries Of Azeroth\WoW.exe
 0040411E 0019FF70 0001:0000311E C:\Mysteries Of Azeroth\WoW.exe
 767CFCC9 0019FF80 0001:0000FCC9 C:\Windows\System32\KERNEL32.DLL
 77307B1E 0019FFDC 0001:00066B1E C:\Windows\SYSTEM32\ntdll.dll
 77307AEE 0019FFEC 0001:00066AEE C:\Windows\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 00713E26 WoW.exe      <unknown symbol>+0 (0x00000000,0x00000D05,0x448D1752,0x4A0D000C)

## Post 66091 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-21T01:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66091#p66091 | page 29 | era: pre-1.18.1 -->

> **Eriana wrote: Wed Sep 20, 2023 10:31 pm**
>

Some crashes caused by bad entries in DBCs are known. I have been diligently working to take this upcoming patch (for which I will have to make a compatibility update for Turtle HD anyway) and give it a proper optimization.  As a result, I have been able to eliminate 99.9% of all player/asset caused #132 crashes.  I have also been working with assistance from the Turtle Team to ensure that all of patch-A's DBCs are compatible with the upcoming DBCs from patch-4, ensuring that all new content is properly referenced and rendered and plays nicely with patch-A.

For that reason, I ask that you please be patient until I make the newest version of patch-A available in the first post of this thread.  Astricon and I have been working to ensure that the newest version will be as bug-free as possible and have no crashes.  There will still be some missing textures that are WIP as listed on the first post, and there is still a very rare, completely intermittent (see: cannot reliably reproduce, does not happen again after re-entering the game in the same place with all the same players in draw distance) #132 crash that only seems to occur in Stormwind or other incredibly high-population areas.  Even with the 64-bit patch for WoW.exe, we believe this is an issue of insufficient memory that cannot be remedied with a tweak to Turtle HD.

Thank you for your patience, and look forward to the latest version coming in a few weeks.

## Post 66131 by Kingkillwatts — 2023-09-21T05:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66131#p66131 | page 29 | era: pre-1.18.1 -->

For some reason I'm getting a bunch of checkered boxes and wierd textures for mounts after installing the 3 patches. Unsure if it's a new content thing from Turtle or my files are bugged? Lots of boxes for headpieces and even some players in the world are just small boxes. I've attached an image for reference below.<https://imgur.com/a/UF8ru5V>

## Post 66133 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-21T05:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66133#p66133 | page 29 | era: pre-1.18.1 -->

> **Kingkillwatts wrote: Thu Sep 21, 2023 5:38 am**
> For some reason I'm getting a bunch of checkered boxes and wierd textures for mounts after installing the 3 patches. Unsure if it's a new content thing from Turtle or my files are bugged? Lots of boxes for headpieces and even some players in the world are just small boxes. I've attached an image for reference below.<https://imgur.com/a/UF8ru5V>

Please be sure that you are not renaming any of the patches, and that you do not have any other custom MPQs loading after Turtle HD. Turtle's patches should be patch-3.MPQ, while Turtle HD's patches should be patch-A.MPQ and patch-B.MPQ.  patch-C.MPQ is an optional patch which I have not thoroughly tested and would require troubleshooting from Astricon.

## Post 66317 by Kingkillwatts — 2023-09-22T02:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66317#p66317 | page 29 | era: pre-1.18.1 -->

Thanks for the help Joe. It turned out that patch 3 I got rid of a while ago as I thought it was a previous version of HD. Restored it and all seems to be working fine

## Post 66769 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-09-25T04:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66769#p66769 | page 29 | era: pre-1.18.1 -->

Hello, there's a way to hear the music? you know, like the TWoW Youtube Channel with all the soundtracks, I like the music in Westfall and I can't say how much time I spend only wandering around there only hearing the music hahaha

Or maybe say the origin of the soundtracks.

## Post 66824 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-09-25T10:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66824#p66824 | page 29 | era: pre-1.18.1 -->

> **Dracarusggotham wrote: Mon Sep 25, 2023 4:22 am**
> Hello, there's a way to hear the music? you know, like the TWoW Youtube Channel with all the soundtracks, I like the music in Westfall and I can't say how much time I spend only wandering around there only hearing the music hahaha
>
>  Or maybe say the origin of the soundtracks.

I'm not sure if I understand you correctly but if you'd like to extract the game music (so you have mp3 files), you can do it (and a lot more) with this tool: [https://www.hiveworkshop.com/threads/la ... or.249562/](https://www.hiveworkshop.com/threads/ladiks-mpq-editor.249562/)

## Post 66880 by Samus — 2023-09-25T16:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66880#p66880 | page 29 | era: pre-1.18.1 -->

Just wanted to say thanks to everyone who made this mod. I haven't encountered any bugs so far - we'll see what happens when 1.17 hits! As long as it doesn't break anything major I'll keep using it even if it does introduce some new bugs.

## Post 66912 by Oaksorcerer — 2023-09-26T01:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66912#p66912 | page 29 | era: pre-1.18.1 -->

I encountered a strange issue. At first everything worked like it should, but sometime later, flying transportation camera began to move slightly upwards. It began at Eastern Kingdoms first and then Kalimdor became affected too.

It's not a big deal, but maybe it is something known?

## Post 66913 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-26T01:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66913#p66913 | page 29 | era: pre-1.18.1 -->

> **Oaksorcerer wrote: Tue Sep 26, 2023 1:43 am**
> I encountered a strange issue. At first everything worked like it should, but sometime later, flying transportation camera began to move slightly upwards. It began at Eastern Kingdoms first and then Kalimdor became affected too.
>
>  It's not a big deal, but maybe it is something known?

This is known.  For whatever reason, it appears that the camera position on flights is elevated compared to in vanilla. None of the DBCs related to the patch seem to have anything to do with camera placement, so it may be something that is incorporated into one of the new models' data.  Perhaps the gryphon / hippogryph / gargoyle / wind rider M2s have different camera configuration data.

## Post 66916 by Oaksorcerer — 2023-09-26T02:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66916#p66916 | page 29 | era: pre-1.18.1 -->

Ok, thank you for the answer. I can live with that, nothing serious, just was curious.

## Post 67456 by Zer0cool — 2023-09-28T17:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67456#p67456 | page 29 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Sep 26, 2023 1:59 am**
> > **Oaksorcerer wrote: Tue Sep 26, 2023 1:43 am**
> > I encountered a strange issue. At first everything worked like it should, but sometime later, flying transportation camera began to move slightly upwards. It began at Eastern Kingdoms first and then Kalimdor became affected too.
> >
> >  It's not a big deal, but maybe it is something known?
>
>   This is known.  For whatever reason, it appears that the camera position on flights is elevated compared to in vanilla. None of the DBCs related to the patch seem to have anything to do with camera placement, so it may be something that is incorporated into one of the new models' data.  Perhaps the gryphon / hippogryph / gargoyle / wind rider M2s have different camera configuration data.

Exactly Redmagejoe, unfortunately I tried to fix the camera issue too, but it is indeed embedded into the new model data, all taxi models get impacted when I convert them back to vanilla, so it appears a bit up and a bit left compared to the old models. It can't be fixed via DBC editing.

## Post 67608 by Rymermerys — 2023-09-29T14:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67608#p67608 | page 29 | era: pre-1.18.1 -->

I've encountered some odd glitches but nothing gamebreaking - the improvement in visuals itself was worth upgrading with these files. Thank you guys for your hard work on this.

## Post 67649 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-29T19:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67649#p67649 | page 29 | era: pre-1.18.1 -->

************ BIG ANNOUNCEMENT ************

With the amazingly tireless work of Astricon, a tiny bit of finagling of my own (including moving to a GitHub development pipeline for myself, Astricon, and any future contributors), and huge help from the Turtle WoW Client Dev team aiding both of us, Turtle HD v1.17.0-1.0 is ready for launch!  The new HD patch is fully compatible with all changes to Spell.DBC, ItemDisplayInfo.DBC, and several other client DB changes coming to a Turtle WoW near you on October 3rd!

The link in the first post will NOT be updated until patch day, to avoid potential game breaking with v1.16.5 and the potential for spoilers / access to new areas.  I have been informed that the Turtle WoW patcher WILL delete any custom MPQs you have in your data folder, so you will need to reinstall patch-A.MPQ and patch-B.MPQ AFTER you have updated to the latest version of Turtle via the in-game patch process.

I am excited to share all the new updates with you, but just a few worth mention are: Updated Druid spell effects and sounds, updated Warrior spell effects and sounds, a number of model and texture fixes... More fixes and updated spell effects to come in the future! Stay tuned!

## Post 67650 by Azcron (Patch Note Conspiracy Theorist) — 2023-09-29T19:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67650#p67650 | page 29 | era: pre-1.18.1 -->

Is there a way to remove the Highlord model from the Paladin Charger? Not asking for a special version just something I would be able to do manually?

## Post 67651 by Astricon (Barrens Chat Casualty) — 2023-09-29T20:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67651#p67651 | page 29 | era: pre-1.18.1 -->

> **Azcron wrote: Fri Sep 29, 2023 7:59 pm**
> Is there a way to remove the Highlord model from the Paladin Charger? Not asking for a special version just something I would be able to do manually?

yes just go into the patch-a mpq, find the relevant model, and delete it. should default to the original model

## Post 67652 by Azcron (Patch Note Conspiracy Theorist) — 2023-09-29T20:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67652#p67652 | page 29 | era: pre-1.18.1 -->

Great, thank you! I will try this later when I get home.

## Post 68105 by Maozhekai — 2023-10-02T14:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68105#p68105 | page 29 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Sep 29, 2023 7:47 pm**
> ************ BIG ANNOUNCEMENT ************
>
>  With the amazingly tireless work of Astricon, a tiny bit of finagling of my own (including moving to a GitHub development pipeline for myself, Astricon, and any future contributors), and huge help from the Turtle WoW Client Dev team aiding both of us, Turtle HD v1.17.0-1.0 is ready for launch!  The new HD patch is fully compatible with all changes to Spell.DBC, ItemDisplayInfo.DBC, and several other client DB changes coming to a Turtle WoW near you on October 3rd!
>
>  The link in the first post will NOT be updated until patch day, to avoid potential game breaking with v1.16.5 and the potential for spoilers / access to new areas.  I have been informed that the Turtle WoW patcher WILL delete any custom MPQs you have in your data folder, so you will need to reinstall patch-A.MPQ and patch-B.MPQ AFTER you have updated to the latest version of Turtle via the in-game patch process.
>
>  I am excited to share all the new updates with you, but just a few worth mention are: Updated Druid spell effects and sounds, updated Warrior spell effects and sounds, a number of model and texture fixes... More fixes and updated spell effects to come in the future! Stay tuned!

Hello joe! I am a new player from Taiwan
Sorry, my English is not very good. But I want to sincerely thank the Turtle HD team for their efforts.
I was really moved to see such a beautiful World of Warcraft.
If my understanding is correct, will HD Turle support Chinese clients ?
If so then I would be really happy <3 It's like a dream come true.

*Last edited by Maozhekai on Mon Oct 02, 2023 2:38 pm, edited 2 times in total.*

## Post 68112 by Bahamutxd (Barrens Chat Casualty) — 2023-10-02T14:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68112#p68112 | page 29 | era: pre-1.18.1 -->

Thanks for updating this, such an awesome mod

## Post 68126 by Astricon (Barrens Chat Casualty) — 2023-10-02T16:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68126#p68126 | page 30 | era: pre-1.18.1 -->

Hello all! Happy imminent patch day! When the server is down, we will have a patch update for you which includes HD updates to new custom NPCs and many other new changes. Your files will automatically be removed when downloading the new content, so it is likely you will be forced to come here anyway. Please note that this means you should BACKUP YOUR ANY CUSTOM MPQ YOU MADE YOURSELF and any other mods before patching! Anyway, when downloading the newest patch-A, here is what you can expect.

Warrior
- Shout abilities have visual updates reapplied after being removed for the sake of differentiating with mob spells

- Many abilities now cause a red weapon trail hello

- Massive sounds update to nearly every remaining ability that didn't have a sound update. This includes whirlwind impact, demoralizing shout, rend, mocking blow, pummel, sunder armor (subject to future change), bloodthirst, shield slam, concussion blow, death wish, last stand, sweeping strikes, shield wall, blood rage (subject to future change), challenging shout, commanding shout, and retaliation.
Rogue
- Many new sounds including for backstab, evasion, ambush, garrote, feint, rupture (currently bugged), slice and dice, hemorrhage (subject to change), poison procs, and cheap shot
Paladin
- Fixed spell effects for Blessing of Kings and Seal of Wisdom
Druid
- Sounds update for the following: starfire, claw, shred, rip, rake, swipe, ravage
Shaman
- The dark Shaman totem model is no more. Every totem in the game is being reverted to the original Tauren themed totem.
Texture Fixes
- Karazhan ghouls and worgen

- Hateforge mechanical dragonlings reverted

- Some random blood elves

- Bats

- Father Bear in ashenvale

- Jaina Proudmoore now has lore appropriate fully blonde hair, since Theramore has not blown up
New Content
- All new NPCs should have their faces updated for the HD patch
Looking ahead, I will be continuing to update spell sounds and effects, particularly for classes I haven't touched much yet. I will also be fixing some custom mount textures and more custom creatures. As always, if you know how to downport models, please contact me. I'm able to do so for most WotLK models and some after, but if you know how to do this please consider writing a guide for me and others. Thank you!

## Post 68197 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-02T23:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68197#p68197 | page 30 | era: pre-1.18.1 -->

************ PATCH 1.17.0 UPDATE ************

The first post has been updated with the new patch-A.MPQ!  Be sure to reinstall after your Turtle WoW client patches, as it will delete all your custom MPQs in your Turtle WoW directory. The old version of patch-A.MPQ is **NO LONGER COMPATIBLE** with the game.

## Post 68204 by Bakaslayer — 2023-10-02T23:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68204#p68204 | page 30 | era: pre-1.18.1 -->

hi why is it so much smaller?

## Post 68205 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-02T23:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68205#p68205 | page 30 | era: pre-1.18.1 -->

> **Bakaslayer wrote: Mon Oct 02, 2023 11:54 pm**
> hi why is it so much smaller?

A lot of bloat was cleaned up.

## Post 68206 by Bakaslayer — 2023-10-02T23:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68206#p68206 | page 30 | era: pre-1.18.1 -->

nice thanx

## Post 68207 by Dicer — 2023-10-02T23:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68207#p68207 | page 30 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Oct 02, 2023 11:16 pm**
> ************ PATCH 1.17.0 UPDATE ************
>
>  The first post has been updated with the new patch-A.MPQ!  Be sure to reinstall after your Turtle WoW client patches, as it will delete all your custom MPQs in your Turtle WoW directory. The old version of patch-A.MPQ is **NO LONGER COMPATIBLE** with the game.

Excellent work, thanks :)

## Post 68277 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-03T06:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68277#p68277 | page 30 | era: pre-1.18.1 -->

Please report any issues you find with the new patch, including broken NPC skin textures, spell effect issues, or otherwise.

## Post 68327 by Whtmstttv — 2023-10-03T09:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68327#p68327 | page 30 | era: pre-1.18.1 -->

Hello, could you please tell me if anyone has had an issue with the HD patch? I installed it today on version 1.17.0, and in the SM Library dungeon, some mobs disappeared for me, specifically in the middle of the dungeon, even though they were there before. They only appeared after I targeted and damaged them through someone else. Could this be because of the HD patch?

## Post 68367 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-10-03T11:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68367#p68367 | page 30 | era: pre-1.18.1 -->

I have intermittent freezes in Stormwind - seem random but for example at and around Alchemist shop. For 3-5 seconds everything just freezes. It never happened before today.

edit: Not only in SW - just had several consecutive freezes near Northshire Abbey, around 10 seconds in total.

## Post 68379 by Whtmstttv — 2023-10-03T12:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68379#p68379 | page 30 | era: pre-1.18.1 -->

> **Ingameacc12345 wrote: Tue Oct 03, 2023 11:34 am**
> I have intermittent freezes in Stormwind - seem random but for example at and around Alchemist shop. For 3-5 seconds everything just freezes. It never happened before today.
>
>  edit: Not only in SW - just had several consecutive freezes near Northshire Abbey, around 10 seconds in total.

Freez 100% not from HD patch, my friend doesn't have this patch, and have same problem as u, freezing for 1-2 sec.

## Post 68390 by Dhrazar (Barrens Chat Casualty) — 2023-10-03T12:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68390#p68390 | page 30 | era: pre-1.18.1 -->

> **Whtmstttv wrote: Tue Oct 03, 2023 12:01 pm**
> > **Ingameacc12345 wrote: Tue Oct 03, 2023 11:34 am**
> > I have intermittent freezes in Stormwind - seem random but for example at and around Alchemist shop. For 3-5 seconds everything just freezes. It never happened before today.
> >
> >  edit: Not only in SW - just had several consecutive freezes near Northshire Abbey, around 10 seconds in total.
>
>   Freez 100% not from HD patch, my friend doesn't have this patch, and have same problem as u, freezing for 1-2 sec.

Can confirm, I've did a fresh download for 1.1.7 without the HD patch first. Had the same "freez" from time to time.

## Post 68411 by Mahga — 2023-10-03T13:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68411#p68411 | page 30 | era: pre-1.18.1 -->

Hey, i've tried deleted the sound folder to get the OG music and spell effect that are engraved in my monkey brain, but it's not working as i planned.

Do i have to manualy insert every sound in the patch file with MPQ editor ?

## Post 68466 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-10-03T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68466#p68466 | page 30 | era: pre-1.18.1 -->

> **Whtmstttv wrote: Tue Oct 03, 2023 12:01 pm**
> > **Ingameacc12345 wrote: Tue Oct 03, 2023 11:34 am**
> > I have intermittent freezes in Stormwind - seem random but for example at and around Alchemist shop. For 3-5 seconds everything just freezes. It never happened before today.
> >
> >  edit: Not only in SW - just had several consecutive freezes near Northshire Abbey, around 10 seconds in total.
>
>   Freez 100% not from HD patch, my friend doesn't have this patch, and have same problem as u, freezing for 1-2 sec.

> **Dhrazar wrote: Tue Oct 03, 2023 12:46 pm**
>

Someone in SW said to mute the new "Everlook Broadcasting Co." (whatever that is). I did and it seems to have fixed the freezing issue!

![Image](https://i.imgur.com/81KL2X9.png)

## Post 68492 by Olegatorzk1 — 2023-10-03T16:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68492#p68492 | page 30 | era: pre-1.18.1 -->

Hello. After installing all the patches, when trying to create a tauren, the game crashes with an error.

## Post 68508 by Astricon (Barrens Chat Casualty) — 2023-10-03T17:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68508#p68508 | page 30 | era: pre-1.18.1 -->

> **Olegatorzk1 wrote: Tue Oct 03, 2023 4:17 pm**
> Hello. After installing all the patches, when trying to create a tauren, the game crashes with an error.

tested and not experiencing this. you may need to redownload

## Post 68509 by Astricon (Barrens Chat Casualty) — 2023-10-03T17:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68509#p68509 | page 30 | era: pre-1.18.1 -->

> **Mahga wrote: Tue Oct 03, 2023 1:20 pm**
> Hey, i've tried deleted the sound folder to get the OG music and spell effect that are engraved in my monkey brain, but it's not working as i planned.
>
>  Do i have to manualy insert every sound in the patch file with MPQ editor ?

you probably just have to delete the music folder in the sound folder for patch-a

## Post 68510 by Astricon (Barrens Chat Casualty) — 2023-10-03T17:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68510#p68510 | page 30 | era: pre-1.18.1 -->

we now have a dedicated channel in the discord for the HD Mod. I will be much more responsive there with any questions or concerns

## Post 68726 by Sundrix — 2023-10-04T19:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68726#p68726 | page 30 | era: pre-1.18.1 -->

there's some auto-crash happening in moonbrook (the city outside Deadmines in Westfall) with the latest patch

## Post 68737 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-10-04T19:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68737#p68737 | page 30 | era: pre-1.18.1 -->

> **Sundrix wrote: Wed Oct 04, 2023 7:14 pm**
> there's some auto-crash happening in moonbrook (the city outside Deadmines in Westfall) with the latest patch

I did not experience any crashing in Moonbrook.

## Post 69172 by Tusam3 — 2023-10-06T13:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69172#p69172 | page 30 | era: pre-1.18.1 -->

Getting "File is in owner's trash" message for patch-c.

## Post 69174 by Vegiguru — 2023-10-06T13:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69174#p69174 | page 30 | era: pre-1.18.1 -->

Same here, can't download Patch C.

## Post 69194 by Wilczan (Barrens Chat Casualty) — 2023-10-06T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69194#p69194 | page 30 | era: pre-1.18.1 -->

Illusion - Worgen, looks bad with HD

## Post 69214 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-06T18:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69214#p69214 | page 30 | era: pre-1.18.1 -->

> **Wilczan wrote: Fri Oct 06, 2023 3:17 pm**
> Illusion - Worgen, looks bad with HD

Could you please elaborate?  Broken textures?

## Post 69261 by Wilczan (Barrens Chat Casualty) — 2023-10-06T22:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69261#p69261 | page 30 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Oct 06, 2023 6:12 pm**
> Could you please elaborate?  Broken textures?

![Image](https://i.postimg.cc/ZqZp32xR/wolf.jpg)

On the left - HD model, on the right - without HD.
Model on the right looks much better than HD one.
Has hair on body instead just plain black skin, and also parts of the clothing looks much better then HD.
Just dissapointed when buying something in shop and it looks better without HD.

## Post 69507 by Astricon (Barrens Chat Casualty) — 2023-10-08T06:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69507#p69507 | page 30 | era: pre-1.18.1 -->

> **Wilczan wrote: Fri Oct 06, 2023 10:56 pm**
> On the left - HD model, on the right - without HD.
>  Model on the right looks much better than HD one.
>  Has hair on body instead just plain black skin, and also parts of the clothing looks much better then HD.
>  Just dissapointed when buying something in shop and it looks better without HD.

This guy got an HD patch and doesn't like the HD part of the patch?

## Post 69516 by Vuux — 2023-10-08T07:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69516#p69516 | page 30 | era: pre-1.18.1 -->

I really like the new High elf model look, but the "glow" effect is a bit buggy atm. It seems like the intention was to have the glow "blink" whenever the character blinks, but it's not synced up correctly so the character opens their eyes and then after a moment the light returns making it look like their eyes are a flashlight being turned on and off.

Here is an example of it.
<https://gyazo.com/529d98e85f5c7843bb00abd044b67067>
<https://gyazo.com/01f518f4f000cd8fdaf36209a7989cdb>
<https://gyazo.com/24c908fa137e812c3da665015d1e52f7>
It's obviously not game-breaking or anything, but it is a little jarring seeing the light blink on and off like that while the eye is already open. I also noticed that the blood elf models will also have the blue glow, a necessity based off their shared model.

Almost wonder if it would be better to just brighten the eye and remove the glow altogether and go for the wotlk High elf style. Just my take.

## Post 69545 by Wilczan (Barrens Chat Casualty) — 2023-10-08T10:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69545#p69545 | page 30 | era: pre-1.18.1 -->

> **Astricon wrote: Sun Oct 08, 2023 6:17 am**
> > **Wilczan wrote: Fri Oct 06, 2023 10:56 pm**
> > On the left - HD model, on the right - without HD.
> >  Model on the right looks much better than HD one.
> >  Has hair on body instead just plain black skin, and also parts of the clothing looks much better then HD.
> >  Just dissapointed when buying something in shop and it looks better without HD.
>
>  This guy got an HD patch and doesn't like the HD part of the patch?

Oh, sorry, din't knew that criticizing is forbidden, even when HD model looks worse then non-HD.

## Post 69546 by Galendor (Patch Note Conspiracy Theorist) — 2023-10-08T11:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69546#p69546 | page 30 | era: pre-1.18.1 -->

> **Wilczan wrote: Sun Oct 08, 2023 10:57 am**
> > **Astricon wrote: Sun Oct 08, 2023 6:17 am**
> > > **Wilczan wrote: Fri Oct 06, 2023 10:56 pm**
> > > On the left - HD model, on the right - without HD.
> > >  Model on the right looks much better than HD one.
> > >  Has hair on body instead just plain black skin, and also parts of the clothing looks much better then HD.
> > >  Just dissapointed when buying something in shop and it looks better without HD.
> >
> >  This guy got an HD patch and doesn't like the HD part of the patch?
>
>   Oh, sorry, din't knew that criticizing is forbidden, even when HD model looks worse then non-HD.

That's not about criticism. The left one is literally HD model of worgens that was introduced in Cata. Everything that is in this patch is retroprted from Wrath/Cata/MoP/Draenor. Mod's authors didn't make every model in Blender to recreate an original ones. It's definitely not their fault that creature's design  has evolved by Blizzard.

## Post 69547 by Wilczan (Barrens Chat Casualty) — 2023-10-08T11:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69547#p69547 | page 30 | era: pre-1.18.1 -->

> **Galendor wrote: Sun Oct 08, 2023 11:02 am**
> > **Wilczan wrote: Sun Oct 08, 2023 10:57 am**
> > > **Astricon wrote: Sun Oct 08, 2023 6:17 am**
> > > This guy got an HD patch and doesn't like the HD part of the patch?
> >
> >   Oh, sorry, din't knew that criticizing is forbidden, even when HD model looks worse then non-HD.
>
>   That's not about criticism. The left one is literally HD model of worgens that was introduced in Cata. Everything that is in this patch is retroprted from Wrath/Cata/MoP/Draenor. Mod's authors didn't make every model in Blender to recreate an original ones. It's definitely not their fault that creature's design  has evolved by Blizzard.

I understand that, but maybe it is worth to not port all models blindly, so you can left old model if it looks better.

## Post 69635 by Mrrosh (Barrens Chat Casualty) — 2023-10-08T19:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69635#p69635 | page 30 | era: pre-1.18.1 -->

> **Wilczan wrote: Sun Oct 08, 2023 11:04 am**
> > **Galendor wrote: Sun Oct 08, 2023 11:02 am**
> > > **Wilczan wrote: Sun Oct 08, 2023 10:57 am**
> > > Oh, sorry, din't knew that criticizing is forbidden, even when HD model looks worse then non-HD.
> >
> >   That's not about criticism. The left one is literally HD model of worgens that was introduced in Cata. Everything that is in this patch is retroprted from Wrath/Cata/MoP/Draenor. Mod's authors didn't make every model in Blender to recreate an original ones. It's definitely not their fault that creature's design  has evolved by Blizzard.
>
>  I understand that, but maybe it is worth to not port all models blindly, so you can left old model if it looks better.

You always have the option to create a better patch yourself, or remove models that you don't like from this one.

## Post 69992 by Gundihulu — 2023-10-10T16:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69992#p69992 | page 30 | era: pre-1.18.1 -->

> **Wilczan wrote: Sun Oct 08, 2023 10:57 am**
> > **Astricon wrote: Sun Oct 08, 2023 6:17 am**
> > > **Wilczan wrote: Fri Oct 06, 2023 10:56 pm**
> > > On the left - HD model, on the right - without HD.
> > >  Model on the right looks much better than HD one.
> > >  Has hair on body instead just plain black skin, and also parts of the clothing looks much better then HD.
> > >  Just dissapointed when buying something in shop and it looks better without HD.
> >
> >  This guy got an HD patch and doesn't like the HD part of the patch?
>
>   Oh, sorry, din't knew that criticizing is forbidden, even when HD model looks worse then non-HD.

It's not, but it should be.  At first players only get the option to play non HD, now OP offers you an HD alternative, an addition that you could choose.

Mind this, an extra alternative (which comes from someone else's free effort) should ONLY be appreciated, NEVER be criticized, because no one has that right. ALWAYS remember that OP uses their free time to make and upload this thing so you can have an extra choice FOR FREE. You MIGHT give suggestions, nicely and moderately.

Seriously people need to ALWAYS keep this in mind: You ARE NOT a paying consumer and you ARE NOT using a paid product, only then you have the right to complain, otherwise stfu.

## Post 69995 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-10-10T16:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69995#p69995 | page 30 | era: pre-1.18.1 -->

> **Gundihulu wrote: Tue Oct 10, 2023 4:18 pm**
> It's not, but it should be.  At first players only get the option to play non HD, now OP offers you an HD alternative, an addition that you could choose.
>
>  Mind this, an extra alternative (which comes from someone else's free effort) should ONLY be appreciated, NEVER be criticized, because no one has that right. ALWAYS remember that OP uses their free time to make and upload this thing so you can have an extra choice FOR FREE. You MIGHT give suggestions, nicely and moderately.
>
>  Seriously people need to ALWAYS keep this in mind: You ARE NOT a paying consumer and you ARE NOT using a paid product, only then you have the right to complain, otherwise stfu.

What the heck? It doesn't make sense. How can someone improve if their work is not criticised? I'm sure everyone agrees that **constructive criticism presented in a polite manner** (otherwise knows as **feedback**) is perfectly fine. Noone here is a snowflake (at least I hope...).

## Post 70000 by Gundihulu — 2023-10-10T16:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70000#p70000 | page 30 | era: pre-1.18.1 -->

> **Ingameacc12345 wrote: Tue Oct 10, 2023 4:30 pm**
> > **Gundihulu wrote: Tue Oct 10, 2023 4:18 pm**
> > It's not, but it should be.  At first players only get the option to play non HD, now OP offers you an HD alternative, an addition that you could choose.
> >
> >  Mind this, an extra alternative (which comes from someone else's free effort) should ONLY be appreciated, NEVER be criticized, because no one has that right. ALWAYS remember that OP uses their free time to make and upload this thing so you can have an extra choice FOR FREE. You MIGHT give suggestions, nicely and moderately.
> >
> >  Seriously people need to ALWAYS keep this in mind: You ARE NOT a paying consumer and you ARE NOT using a paid product, only then you have the right to complain, otherwise stfu.
>
>   What the heck? It doesn't make sense. How can someone improve if their work is not criticised? I'm sure everyone agrees that **constructive criticism presented in a polite manner** (otherwise knows as **feedback**) is perfectly fine. Noone here is a snowflake (at least I hope...).

I make mods for other games on Nexus, things that I make for my own enjoyment and I figured why not share it with the community, so I upload them. The next thing you know is 100 people jumps onto your face and tells you how you can "improve your work" despite their opinions being completely subjective and many of them conflict with each other.

So my suggestion is, don't just assume that the author wants to "improve their work", especially don't assume that your criticism is "constructive criticism", more likely it's just rude criticism.

If you want something, ask nicely or suggest nicely and be prepared to be rejected, you don't have the right to criticize.

## Post 70131 by Sofire — 2023-10-11T04:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70131#p70131 | page 30 | era: pre-1.18.1 -->

OK, HD patch is great but not perfect, the weapon sheathe animation is not functioning,
But, if you play a **Gnome**, the weapon is sheathing/unsheathing perfectly  hiding_smth_turtle_head
I tried making multiple new chars to test(Alliance&horde), only Gnome is able to do the sheath/unsheath animation.

## Post 70155 by Mrrosh (Barrens Chat Casualty) — 2023-10-11T07:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70155#p70155 | page 30 | era: pre-1.18.1 -->

> **Sofire wrote: Wed Oct 11, 2023 4:34 am**
> OK, HD patch is great but not perfect, the weapon sheathe animation is not functioning,
>  But, if you play a **Gnome**, the weapon is sheathing/unsheathing perfectly  hiding_smth_turtle_head
>  I tried making multiple new chars to test(Alliance&horde), only Gnome is able to do the sheath/unsheath animation.

Gnome females, on males it won't work.

 *Edit: Also male undead seems to work too.
 *Edit2: And orc females.
 *Edit3: And male taurens.

*Last edited by Mrrosh on Wed Oct 11, 2023 8:55 am, edited 3 times in total.*

## Post 70157 by Sofire — 2023-10-11T07:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70157#p70157 | page 31 | era: pre-1.18.1 -->

> **Mrrosh wrote: Wed Oct 11, 2023 7:21 am**
> > **Sofire wrote: Wed Oct 11, 2023 4:34 am**
> > OK, HD patch is great but not perfect, the weapon sheathe animation is not functioning,
> >  But, if you play a **Gnome**, the weapon is sheathing/unsheathing perfectly  hiding_smth_turtle_head
> >  I tried making multiple new chars to test(Alliance&horde), only Gnome is able to do the sheath/unsheath animation.
>
>   Gnome females, on males it won't work.

Hmm, ur right, I just tested... Only Gnome Female has functioning sheathing animation...  neutral_turtle_head

## Post 70160 by Galendor (Patch Note Conspiracy Theorist) — 2023-10-11T07:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70160#p70160 | page 31 | era: pre-1.18.1 -->

> **Sofire wrote: Wed Oct 11, 2023 4:34 am**
> OK, HD patch is great but not perfect, the weapon sheathe animation is not functioning,
>  But, if you play a **Gnome**, the weapon is sheathing/unsheathing perfectly  hiding_smth_turtle_head
>  I tried making multiple new chars to test(Alliance&horde), only Gnome is able to do the sheath/unsheath animation.

Good old gnome supremacy   insidious_turtle

## Post 70196 by Kawerte1 — 2023-10-11T11:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70196#p70196 | page 31 | era: pre-1.18.1 -->

I modified `patch-A` to have ONLY the new Dwarf models.
[https://drive.google.com/file/d/103_2G_ ... sp=sharing](https://drive.google.com/file/d/103_2G_Yhp_MAw2TK45ojfKeW6_TmDEne/view?usp=sharing)

Also as a side effect performance should be better.
You can still use `patch-B` and `patch-C` if you want.

EDIT: fixed the dwarf NPCs not showing up correctly.

*Last edited by Kawerte1 on Wed Oct 18, 2023 10:48 pm, edited 2 times in total.*

## Post 70221 by Cabbagepro — 2023-10-11T15:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70221#p70221 | page 31 | era: pre-1.18.1 -->

I really like ice bear glyph, but it has a graphic error in the HD patch.
Please fix it.

## Post 70274 by Dhrazar (Barrens Chat Casualty) — 2023-10-11T23:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70274#p70274 | page 31 | era: pre-1.18.1 -->

> **Mrrosh wrote: Wed Oct 11, 2023 7:21 am**
> Gnome females, on males it won't work.
>
>  *Edit: Also male undead seems to work too.
>  *Edit2: And orc females.
>  *Edit3: And male taurens.

Wait, I thought sheathing won't work at all. Why is it, that some models are working fine, and others don't ?

## Post 70339 by Liberty — 2023-10-12T12:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70339#p70339 | page 31 | era: pre-1.18.1 -->

> **Cabbagepro wrote: Wed Oct 11, 2023 3:12 pm**
> I really like ice bear glyph, but it has a graphic error in the HD patch.
>  Please fix it.

I have the same problem

## Post 70348 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-12T13:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70348#p70348 | page 31 | era: pre-1.18.1 -->

> **Cabbagepro wrote: Wed Oct 11, 2023 3:12 pm**
> I really like ice bear glyph, but it has a graphic error in the HD patch.
>  Please fix it.

It's being worked on.

## Post 70419 by E3l — 2023-10-12T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70419#p70419 | page 31 | era: pre-1.18.1 -->

> **Kawerte1 wrote: Wed Oct 11, 2023 11:48 am**
> I modified `patch-A` to have ONLY the new Dwarf models.
>  [https://drive.google.com/file/d/1bDyEUM ... sp=sharing](https://drive.google.com/file/d/1bDyEUM3K97oJwSuMXLyfG-1bujEATaet/view?usp=sharing)
>
>  Also as a side effect performance should be better.
>  You can still use `patch-B` and `patch-C` if you want.

I would like a modification only for goblins, the only race that hurts my eyes on the Turtle. I hope someday the HD models from this modification will become the default on this server. It would be great  dead_turtle_head

## Post 70456 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-12T21:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70456#p70456 | page 31 | era: pre-1.18.1 -->

> **E3l wrote: Thu Oct 12, 2023 8:40 pm**
> I would like a modification only for goblins, the only race that hurts my eyes on the Turtle.

You're about to be amazed...  SOON!

## Post 70463 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-12T22:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70463#p70463 | page 31 | era: pre-1.18.1 -->

************ UPDATE ************

The first post has been updated with the new patch-A.MPQ!  GOBLIN REVAMP IS HERE!  All Goblin PC and NPC models and textures now use Cataclysm+ assets, allowing for much more flexibility in character creation.

For now, all male and female goblin NPCs use a single facial variation, but we do have plans to mix them up in a future patch.  Similarly, the options for facial variations on Goblins are limited by Turtle's serverside number of available variation slots, but we are working with the Client Dev Team to try to encourage more base variations to goblin character creation so that Astricon and I can use more of the Cataclysm assets in our patch.

Several broken creature textures, such as Tauren Ice Bear glyph, have been fixed.

## Post 70466 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-12T22:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70466#p70466 | page 31 | era: pre-1.18.1 -->

Minor update: If you downloaded the new version from about 50 minutes ago, there was a bug that has since been addressed in the new version. Apologies for the issues.

*Last edited by Redmagejoe on Fri Oct 13, 2023 12:52 am, edited 1 time in total.*

## Post 70480 by Korgoth — 2023-10-13T00:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70480#p70480 | page 31 | era: pre-1.18.1 -->

Can't skin with this mod. Stops at level 5/75. When I remove the mod I can skin again. Message says "Requires Skinning 1"

<https://imgbb.com/TRJ9tXk>

## Post 70482 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-13T00:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70482#p70482 | page 31 | era: pre-1.18.1 -->

> **Korgoth wrote: Fri Oct 13, 2023 12:34 am**
> Can't skin with this mod. Stops at level 5/75. When I remove the mod I can skin again. Message says "Requires Skinning 1"

See:
> **Redmagejoe wrote: Thu Oct 12, 2023 10:56 pm**
> Minor update: If you downloaded the new version from about 50 minutes ago, there was a bug that has since been addressed in the new version. Apologies for the issues.

## Post 70488 by Korgoth — 2023-10-13T02:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70488#p70488 | page 31 | era: pre-1.18.1 -->

Awesome thankyou sir!

## Post 70489 by Korgoth — 2023-10-13T02:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70489#p70489 | page 31 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Oct 13, 2023 12:52 am**
> > **Korgoth wrote: Fri Oct 13, 2023 12:34 am**
> > Can't skin with this mod. Stops at level 5/75. When I remove the mod I can skin again. Message says "Requires Skinning 1"
>
>   See:
> > **Redmagejoe wrote: Thu Oct 12, 2023 10:56 pm**
> > Minor update: If you downloaded the new version from about 50 minutes ago, there was a bug that has since been addressed in the new version. Apologies for the issues.

Awesome Thankyou sir!

## Post 70551 by E3l — 2023-10-13T08:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70551#p70551 | page 31 | era: pre-1.18.1 -->

The best version of goblins I've ever seen in WOW, thanks!  satisfied_turtle

## Post 70628 by Cabbagepro — 2023-10-13T16:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70628#p70628 | page 31 | era: pre-1.18.1 -->

Excellent job, the ice bear glyph has been fixed.

## Post 70633 by Wwq133 — 2023-10-13T16:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70633#p70633 | page 31 | era: pre-1.18.1 -->

> **Astricon wrote: Sun Sep 17, 2023 4:22 am**
> > **Faustorgo wrote: Sat Sep 16, 2023 8:34 pm**
> > Please fix, the arcane missiles, if is possible :D
>
>   Unfortunately it seems that the arcane missiles bug is related to certain models such as high elf female. It's not a bug with the spell itself. Since I don't have any modeling knowledge, I can't fix it.

Male high elf too

## Post 70841 by Vuux — 2023-10-14T22:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70841#p70841 | page 31 | era: pre-1.18.1 -->

I really do wish you guys would either reduce, or remove the glow from the High elf eyes. It looks really bad, and it isn't synced up correctly to the eye blinking animation. Plus it adds the blue glow to every elf model, even the blood elves. The updated model itself is wonderful, it would just be amazing if we could have a version without the annoying glow.

## Post 71044 by Astricon (Barrens Chat Casualty) — 2023-10-15T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71044#p71044 | page 31 | era: pre-1.18.1 -->

> **Vuux wrote: Sat Oct 14, 2023 10:41 pm**
> I really do wish you guys would either reduce, or remove the glow from the High elf eyes. It looks really bad, and it isn't synced up correctly to the eye blinking animation. Plus it adds the blue glow to every elf model, even the blood elves. The updated model itself is wonderful, it would just be amazing if we could have a version without the annoying glow.

I really do agree. The High Elf Eye glow issue is one of the most annoying things to deal with to me. I may find a fix for this soon but no promises.

## Post 71046 by Astricon (Barrens Chat Casualty) — 2023-10-15T23:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71046#p71046 | page 31 | era: pre-1.18.1 -->

<https://github.com/redmagejoe/TurtleHD> Our GitHub repository is public, so you can comment any bugs, requests, or possibly (not sure) make your own private branch. I'm not going to be checking this forum very much anymore as GitHub is more organized for this sort of thing. I will also update the README there to give instructions on how to install, known issues, etc. If you see anyone posting bugs here, please direct them to the github or the discord channel which I also curate. Thanks!

## Post 71054 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-16T00:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71054#p71054 | page 31 | era: pre-1.18.1 -->

FROM NOW ON, PLEASE REPORT ANY BUGS AS AN ISSUE ON THE GITHUB PAGE IN THE FIRST POST

## Post 71285 by Vuux — 2023-10-16T16:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71285#p71285 | page 31 | era: pre-1.18.1 -->

> **Astricon wrote: Sun Oct 15, 2023 11:38 pm**
> > **Vuux wrote: Sat Oct 14, 2023 10:41 pm**
> > I really do wish you guys would either reduce, or remove the glow from the High elf eyes. It looks really bad, and it isn't synced up correctly to the eye blinking animation. Plus it adds the blue glow to every elf model, even the blood elves. The updated model itself is wonderful, it would just be amazing if we could have a version without the annoying glow.
>
>   I really do agree. The High Elf Eye glow issue is one of the most annoying things to deal with to me. I may find a fix for this soon but no promises.

I do like the model change, it looks like you guys rounded the face more too? I love the eye texture as well, but that damn glow. Is there no way to just remove it entirely? Or at least maybe post a version of it without the glow.

I want to use the HD pack really bad for the updated model, but that glow is stopping me lol

*Last edited by Vuux on Mon Oct 16, 2023 5:05 pm, edited 1 time in total.*

## Post 71296 by Justdjango — 2023-10-16T16:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71296#p71296 | page 31 | era: pre-1.18.1 -->

The human male models run so dumb lol

## Post 71765 by Gingerale01 — 2023-10-18T03:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71765#p71765 | page 31 | era: pre-1.18.1 -->

anyone else have a problem where spell effects are permanent like clouds in the air

<https://gyazo.com/fcd9e9901f6cceff54a1ae1dc594631b> also these little dust clouds. its mainly a problem in AV but many of them show up over time and tank fps

<https://gyazo.com/f00b09a2ece42f21fa275b46e46d2262>

## Post 72021 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-19T04:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72021#p72021 | page 31 | era: pre-1.18.1 -->

************ UPDATE ************

The first post has been updated with the new patch-A.MPQ!
SHEATHING IS FINALLY FIXED!
All mount textures are fixed!
New character creation / select backgrounds for Troll, High Elf, and Goblin!

## Post 72481 by Manateufel — 2023-10-20T21:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72481#p72481 | page 31 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Oct 19, 2023 4:51 am**
> ************ UPDATE ************
>
>  The first post has been updated with the new patch-A.MPQ!
>  SHEATHING IS FINALLY FIXED!
>  All mount textures are fixed!
>  New character creation / select backgrounds for Troll, High Elf, and Goblin!

Thank you   turtle_in_love

## Post 72620 by Boratbenz — 2023-10-21T18:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72620#p72620 | page 31 | era: pre-1.18.1 -->

Currently I have everything set to max. In the capital, where there are a lot of people, my frames drop to 45 fps. Is it the fault of the mod or the settings? Is there an option to fix it with an additional fix?

## Post 72669 by Ashstache (Barrens Chat Casualty) — 2023-10-22T01:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72669#p72669 | page 31 | era: pre-1.18.1 -->

Found a missing texture

![Image](https://i.imgur.com/2KM1Rzh.png)
![Image](https://i.imgur.com/191PxIl.png)

## Post 73148 by Gingerale01 — 2023-10-23T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73148#p73148 | page 31 | era: pre-1.18.1 -->

Anyone else experience permanent spell effects that only go away on restart?

## Post 73156 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-10-23T19:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73156#p73156 | page 31 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Oct 19, 2023 4:51 am**
> ************ UPDATE ************
>
>  The first post has been updated with the new patch-A.MPQ!
>  SHEATHING IS FINALLY FIXED!
>  All mount textures are fixed!
>  New character creation / select backgrounds for Troll, High Elf, and Goblin!

Wait what?! Finally?! Oh my God this is a...
 *Dies in finally HD High Elf*

If you ask, I stopped using the Mod due to the sheathing animation, I'm a bit perfectinist with my games and I don't like bugs hahaha.

## Post 73403 by Bittermens (Barrens Chat Casualty) — 2023-10-24T15:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73403#p73403 | page 31 | era: pre-1.18.1 -->

All is left now are quillboars and gnolls with edited textures to make it more W3 Vanilla like with is nothing but possibly a pass through a comic book filter

## Post 74010 by Necro13 — 2023-10-26T18:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74010#p74010 | page 31 | era: pre-1.18.1 -->

Mine seems to not work after I've placed the three Patch files in Data folder the game updates and directory deletes everything back to default...?

Any help?

## Post 74498 by Pewpewkek — 2023-10-28T11:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74498#p74498 | page 31 | era: pre-1.18.1 -->

The Tauren client crash error that others have posted about seems to be tied with the custom Spirit Walker skin you can buy. When i have it on, i can't even click on my character in the selection screen without crashing. Removed and i can log in just fine. Can this be fixed easily? Thanks

## Post 74500 by Manfredofred — 2023-10-28T11:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74500#p74500 | page 31 | era: pre-1.18.1 -->

Is it possible to disable Warlock green fire?

## Post 74677 by Tazdv — 2023-10-29T18:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74677#p74677 | page 32 | era: pre-1.18.1 -->

Hi I have a question, are there plans to update this with the new mob models from Dragonflight? For instance Hogger's model
<https://wowpedia.fandom.com/wiki/Hogger>

## Post 74694 by Redmagejoe (Grandmaster of Forum PvP) — 2023-10-29T21:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74694#p74694 | page 32 | era: pre-1.18.1 -->

> **Tazdv wrote: Sun Oct 29, 2023 6:55 pm**
> Hi I have a question, are there plans to update this with the new mob models from Dragonflight? For instance Hogger's model
>  <https://wowpedia.fandom.com/wiki/Hogger>

Astricon has mentioned new Gnolls being on his to-do list.

## Post 75077 by Sarenrae — 2023-11-01T04:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75077#p75077 | page 32 | era: pre-1.18.1 -->

Any plans to correct the eye color glow of the blood elf skin? The eyes are green, but the glow is blue.

## Post 75702 by Tazdv — 2023-11-03T13:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75702#p75702 | page 32 | era: pre-1.18.1 -->

I don't know if this helps, but Ascenssion WoW's featured HD model packs features a fair amount of mobs that weren't covered here (gnolls, quilboar etc.) can that be copied into this project?

## Post 75869 by Mrrosh (Barrens Chat Casualty) — 2023-11-04T13:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75869#p75869 | page 32 | era: pre-1.18.1 -->

> **Tazdv wrote: Fri Nov 03, 2023 1:48 pm**
> I don't know if this helps, but Ascenssion WoW's featured HD model packs features a fair amount of mobs that weren't covered here (gnolls, quilboar etc.) can that be copied into this project?

Read 2 replies above you.

## Post 76061 by Wookiepie — 2023-11-05T20:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76061#p76061 | page 32 | era: pre-1.18.1 -->

Brand new player. How do I make sure I download the most up to date HD mod for the game?

## Post 76073 by Redmagejoe (Grandmaster of Forum PvP) — 2023-11-05T21:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76073#p76073 | page 32 | era: pre-1.18.1 -->

> **Wookiepie wrote: Sun Nov 05, 2023 8:39 pm**
> Brand new player. How do I make sure I download the most up to date HD mod for the game?

First post in this thread always has the most up-to-date version in the links.

## Post 76118 by Musclewizard — 2023-11-06T10:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76118#p76118 | page 32 | era: pre-1.18.1 -->

I want to backport some models, but it is so hard to find a guide with all these wow versions. How did you start out learning it? Do you have the materaials still around?

## Post 76193 by Mrrosh (Barrens Chat Casualty) — 2023-11-06T17:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76193#p76193 | page 32 | era: pre-1.18.1 -->

> **Musclewizard wrote: Mon Nov 06, 2023 10:30 am**
> I want to backport some models, but it is so hard to find a guide with all these wow versions. How did you start out learning it? Do you have the materaials still around?

[https://docs.google.com/document/d/1kUr ... 33mjgvdsq6](https://docs.google.com/document/d/1kUrZus7HAaxpJeVFX2bJ2iyyZfUR6ZJAmBygIPo-NHA/edit#heading=h.ir33mjgvdsq6)

## Post 76302 by Gex — 2023-11-07T15:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76302#p76302 | page 32 | era: pre-1.18.1 -->

It's crashing at Far Watch Post, also some wolfs look like they have a stroke.
Error log: This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	"some location"
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:00713E26

The instruction at "0x00713E26" referenced memory at "0xC374C8F2".
The memory could not be "read".

## Post 76663 by Bryonus — 2023-11-09T16:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76663#p76663 | page 32 | era: pre-1.18.1 -->

> **Manfredofred wrote: Sat Oct 28, 2023 11:26 am**
> Is it possible to disable Warlock green fire?

How do you even enable it?

## Post 76747 by Romcomtom — 2023-11-10T06:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76747#p76747 | page 32 | era: pre-1.18.1 -->

I'm playing as an arcane mage, the patch is causing arcane missiles to dissapear, it just doesn't show the effect at all, love the patches, but can this get looked into please?

## Post 77161 by Meskhi — 2023-11-13T11:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77161#p77161 | page 32 | era: pre-1.18.1 -->

Paladin's judgement new animation is horrible, I tried using mpq editor to revert it to original animation but cant do it, if someone can help me and tell me how to revert judgement's animation back to original animation I''ll be very happy.

## Post 77434 by Deadlycat — 2023-11-15T01:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77434#p77434 | page 32 | era: pre-1.18.1 -->

The human and dwarf npcs' faces got glitches for being nothing on them. It seems that they are all grey faces with no eyeballs or just void faces. How to fix this?   crying_turtle

## Post 77444 by Redmagejoe (Grandmaster of Forum PvP) — 2023-11-15T02:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77444#p77444 | page 32 | era: pre-1.18.1 -->

> **Deadlycat wrote: Wed Nov 15, 2023 1:11 am**
> The human and dwarf npcs' faces got glitches for being nothing on them. It seems that they are all grey faces with no eyeballs or just void faces. How to fix this?   crying_turtle

Could you link specific NPCs? Astricon should have fixed this already prior to the 1.17.0 patch release.

## Post 77477 by Deadlycat — 2023-11-15T06:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77477#p77477 | page 32 | era: pre-1.18.1 -->

Oh, it works now. I think it's the client problem. Ty.

## Post 77830 by Duzolt — 2023-11-17T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77830#p77830 | page 32 | era: pre-1.18.1 -->

Thanks for the amazing work on this 3 patchs this bring so much on the game.

My only issue is with the new music, do you have any plans for a version of patch A without music pak in it?

## Post 77943 by Azcron (Patch Note Conspiracy Theorist) — 2023-11-18T17:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77943#p77943 | page 32 | era: pre-1.18.1 -->

I have this on my laptop, and it works fine but, on my Desktop, it's not updating character models. Is there something else I need to do?

## Post 77955 by Schwarzschild (Barrens Chat Casualty) — 2023-11-18T19:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77955#p77955 | page 32 | era: pre-1.18.1 -->

Thanks for the awesome work!

Bug/remark: Instance portals look weird. The blue texture has a hole in the center.

![Image](https://i.ibb.co/2WV6MQ9/Unbenannt-1.png)

## Post 78039 by Drargo — 2023-11-20T02:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78039#p78039 | page 32 | era: pre-1.18.1 -->

> **Romcomtom wrote: Fri Nov 10, 2023 6:06 am**
> I'm playing as an arcane mage, the patch is causing arcane missiles to dissapear, it just doesn't show the effect at all, love the patches, but can this get looked into please?

They know about it, but unfortunately have no current plans to work on it. One of the people on the project had mentioned previously it was beyond their ability to address. We just have to learn to pretend the spell is animating until someone comes along with the ability to address the issue.

## Post 78068 by Dhrazar (Barrens Chat Casualty) — 2023-11-20T10:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78068#p78068 | page 32 | era: pre-1.18.1 -->

> **Schwarzschild wrote: Sat Nov 18, 2023 7:10 pm**
> Bug/remark: Instance portals look weird. The blue texture has a hole in the center.
>
>  ![Image](https://i.ibb.co/2WV6MQ9/Unbenannt-1.png)

That's the singularity.

## Post 78756 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-11-26T02:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78756#p78756 | page 32 | era: pre-1.18.1 -->

I need to ask again.
There's a way to hear the music out of the game? like a youtube channel?
There are a lot of songs that I like, and usually I enter to a dungeon or I go to zones for hear the songs as I do another things.
Like razorfen kraul or westfall, you really made a good job choosing the new music.

## Post 78793 by Redmagejoe (Grandmaster of Forum PvP) — 2023-11-26T15:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78793#p78793 | page 32 | era: pre-1.18.1 -->

> **Dracarusggotham wrote: Sun Nov 26, 2023 2:15 am**
> I need to ask again.
>  There's a way to hear the music out of the game? like a youtube channel?
>  There are a lot of songs that I like, and usually I enter to a dungeon or I go to zones for hear the songs as I do another things.
>  Like razorfen kraul or westfall, you really made a good job choosing the new music.

Most of it is Cataclysm music, though I couldn't be certain the names to look up. If you chase down Cata music on YouTube long enough, you can probably narrow down each song.

## Post 78915 by Bashmak — 2023-11-27T13:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78915#p78915 | page 32 | era: pre-1.18.1 -->

Greetings!
I've posted bug ticket, and found that bug lead to models patch it concerning work of couple of recipes:
[https://github.com/slowtorta/turtlewow- ... ssues/4741](https://github.com/slowtorta/turtlewow-bug-tracker/issues/4741)
can you please fix that problem?
Also if you didnt know, weapon swap hand\back\rdd out of combat dont work ok with new models.

Thank you for your work!

*Last edited by Bashmak on Tue Nov 28, 2023 7:58 am, edited 1 time in total.*

## Post 78992 by Wideworld (Barrens Chat Casualty) — 2023-11-27T22:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78992#p78992 | page 32 | era: pre-1.18.1 -->

Hi, Thanks for the work.
I have a problem that my Mage's 'Arcane Missiles' can only display the last missile.

## Post 78999 by Redmagejoe (Grandmaster of Forum PvP) — 2023-11-27T23:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78999#p78999 | page 32 | era: pre-1.18.1 -->

> **Wideworld wrote: Mon Nov 27, 2023 10:07 pm**
> Hi, Thanks for the work.
>  I have a problem that my Mage's 'Arcane Missiles' can only display the last missile.

Race? It may be tied to broken model rigging which is being worked on.

## Post 79004 by Wideworld (Barrens Chat Casualty) — 2023-11-28T03:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79004#p79004 | page 32 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Nov 27, 2023 11:56 pm**
> > **Wideworld wrote: Mon Nov 27, 2023 10:07 pm**
> > Hi, Thanks for the work.
> >  I have a problem that my Mage's 'Arcane Missiles' can only display the last missile.
>
>   Race? It may be tied to broken model rigging which is being worked on.

High Elf , female.
And the last missile seems to be displayed with a little delay.

## Post 79148 by Redmagejoe (Grandmaster of Forum PvP) — 2023-11-28T18:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79148#p79148 | page 32 | era: pre-1.18.1 -->

************ UPDATE ************

<https://github.com/redmagejoe/TurtleHD/releases>

![Image](https://i.imgur.com/zVsF8Sw.png)

## Post 79300 by Chapati — 2023-11-29T17:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79300#p79300 | page 32 | era: pre-1.18.1 -->

Hey,
first, thanks all for your excellent works, that's very impressive ...

But if you looking my tauren, it seem that fur is low res, however horns are HD.
And most of the models have a low res skin (dwarf too).
I'm using the last version of MPQ.
And, also I'm using french speech.MPQ, I don't think there are interaction, but to be specific.

What do you think ?

[https://drive.google.com/file/d/1TFXG0w ... sp=sharing](https://drive.google.com/file/d/1TFXG0wUh0x7PFSgWmNfFHIb49zIu7bcE/view?usp=sharing)

## Post 79331 by Redmagejoe (Grandmaster of Forum PvP) — 2023-11-30T00:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79331#p79331 | page 32 | era: pre-1.18.1 -->

The vanilla client cannot support textures above 256x256 or 256x512 depending on what the specific asset is being used for. As a result, while these are indeed not "HD", they are downports of the newer textures and models used in modern versions of the game. The intent was not to make the characters literally high fidelity, but to change their appearance to something more polished.

## Post 79422 by Khmerthug — 2023-11-30T17:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79422#p79422 | page 32 | era: pre-1.18.1 -->

HD mod is great but the update to the sounds makes it unbearable. There are some sounds like the rogue sinister strike that is way too loud it pierces the ear I am giving up on the mod until somebody reverts the sound back to the original.

## Post 79897 by Wideworld (Barrens Chat Casualty) — 2023-12-05T10:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79897#p79897 | page 32 | era: pre-1.18.1 -->

Hi sometimes my client crashed on the character selection page when I tried to choose my Tauren Hunter and the pet wasn't dismissed, a error frame was popped up. If pet was dismissed the crash would not occur.

## Post 79931 by Redmagejoe (Grandmaster of Forum PvP) — 2023-12-05T17:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79931#p79931 | page 32 | era: pre-1.18.1 -->

> **Wideworld wrote: Tue Dec 05, 2023 10:58 am**
> Hi sometimes my client crashed on the character selection page when I tried to choose my Tauren Hunter and the pet wasn't dismissed, a error frame was popped up. If pet was dismissed the crash would not occur.

This sounds similar to another issue that was resolved by removing a certain texture.  Please make an issue on the GitHub page so Astricon and I can more easily track this problem.

## Post 79932 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-05T17:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79932#p79932 | page 32 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Dec 05, 2023 5:22 pm**
> > **Wideworld wrote: Tue Dec 05, 2023 10:58 am**
> > Hi sometimes my client crashed on the character selection page when I tried to choose my Tauren Hunter and the pet wasn't dismissed, a error frame was popped up. If pet was dismissed the crash would not occur.
>
>   This sounds similar to another issue that was resolved by removing a certain texture.  Please make an issue on the GitHub page so Astricon and I can more easily track this problem.

The Undead race have strange lights in the Character Creation.
You know, a white lines can be seen everywhere.

## Post 79944 by Explorer101 — 2023-12-05T19:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79944#p79944 | page 32 | era: pre-1.18.1 -->

> **Khmerthug wrote: Thu Nov 30, 2023 5:30 pm**
> HD mod is great but the update to the sounds makes it unbearable. There are some sounds like the rogue sinister strike that is way too loud it pierces the ear I am giving up on the mod until somebody reverts the sound back to the original.

I agree and I had to stop using it for this very reason. If we could get the updated .MPQ's with the old sounds that would be ideal. I didn't mind that much but it does get tiring after a while and I had a couple complaints in my YT videos/streams so decided to just revert back . A shame really.

## Post 80023 by Zhuaiz — 2023-12-06T09:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80023#p80023 | page 33 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Sep 19, 2023 4:17 pm**
> > **Tzlol wrote: Tue Sep 19, 2023 11:05 am**
> > Hi,
> >
> >  there is an issue that skill text not being displayed in the Chinese client
> >
> >  Could it be fixed?
> >
> >  Thanks a lot
>
>   We do not support Chinese clients nor will we make a compatibility patch for it.

I hope this message finds you well. I am writing to bring to your attention an issue that many of us in the Chinese gaming community are currently facing with the client. It appears that the skill text is not being displayed properly in the Chinese version.

Understanding that your team may not officially support Chinese clients, I would like to kindly request your consideration in addressing this matter. The Chinese gaming community has been growing rapidly, and many players are passionate about your game.

Having proper support for the Chinese client would not only enhance the gaming experience for existing players but also open up new opportunities for your game to reach a broader audience. As you may be aware, catering to diverse language preferences can significantly contribute to the success and popularity of a game.

I understand that creating a compatibility patch specifically for the Chinese client may not have been on your immediate agenda. However, I believe that by investing a bit of effort in resolving this issue, you can strengthen your relationship with the Chinese gaming community and foster a more inclusive gaming environment.

Thank you for taking the time to consider this request. I look forward to the possibility of improved support for the Chinese client in the near future.

Best regards

## Post 80051 by Redmagejoe (Grandmaster of Forum PvP) — 2023-12-06T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80051#p80051 | page 33 | era: pre-1.18.1 -->

> **Zhuaiz wrote: Wed Dec 06, 2023 9:04 am**
>

Not happening. I haven't the time nor any motivation to work on something as labor intensive as this.

## Post 80110 by Saronsen — 2023-12-06T21:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80110#p80110 | page 33 | era: pre-1.18.1 -->

Hate to make a request, but is there a version without the music changes, or, is it simple for me to remove them myself?

Would love to use the patch but I'm not a fan of some music changes blizzard has done with expansions.

## Post 80130 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-07T01:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80130#p80130 | page 33 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed Dec 06, 2023 1:50 pm**
> > **Zhuaiz wrote: Wed Dec 06, 2023 9:04 am**
> >
>
>   Not happening. I haven't the time nor any motivation to work on something as labor intensive as this.

Hey, I was thinking if it's possible for include in a future update the theme of the Stormwind Keep of MoP:
[embed: https://www.youtube.com/embed/0m9KCe48yvQ?start=57]

For the future only, IDK how you can include the songs and play them in game.

*Last edited by Dracarusggotham on Fri Dec 22, 2023 3:52 pm, edited 1 time in total.*

## Post 80254 by Gautzilla — 2023-12-08T08:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80254#p80254 | page 33 | era: pre-1.18.1 -->

> **Explorer101 wrote: Tue Dec 05, 2023 7:56 pm**
> > **Khmerthug wrote: Thu Nov 30, 2023 5:30 pm**
> > HD mod is great but the update to the sounds makes it unbearable. There are some sounds like the rogue sinister strike that is way too loud it pierces the ear I am giving up on the mod until somebody reverts the sound back to the original.
>
>   I agree and I had to stop using it for this very reason. If we could get the updated .MPQ's with the old sounds that would be ideal. I didn't mind that much but it does get tiring after a while and I had a couple complaints in my YT videos/streams so decided to just revert back . A shame really.

Just read the readme... There's a section literally named **I want the player character models and textures but I don't want the new spell effects and sounds**.

## Post 80291 by Oranges — 2023-12-08T16:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80291#p80291 | page 33 | era: pre-1.18.1 -->

It was actually pretty easy to remove the sounds and music from the patch, I followed the read me.

> I want the player character models and textures but I don't want the new spell effects and sounds
>
>  Delete the following:
>
>  In the folder DBFilesClient: Spell.dbc, SpellVisual.dbc, SpellVisualKit.dbc, SpellVisualEffectName.dbc, and SoundEntries.dbc
>  The whole folder on the top level called "Spells"
>  The whole Sounds/Spells folder (not the whole Sounds folder, just the Spells one inside it)
>  This might mess up your dungeon entrance texture, but someone might figure out a solution to this soon
>  You CANNOT have the spell sounds update without the spell visuals update or vice versa. They are unfortunately tied together, so don't ask for this.
>
>  The music isn't right in some areas. I'd prefer the vanilla versions
>
>  In the Sound folder, delete the Music folder

So this file is just the changes listed above, I have no idea what im doing so I can't really help if there are any issues.

[embed: //drive.google.com/file/d/1NH2rslZjb-K3B5jUeSzVYbHsxRvm5lGA/preview]

## Post 80727 by Khmerthug — 2023-12-11T18:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80727#p80727 | page 33 | era: pre-1.18.1 -->

> **Oranges wrote: Fri Dec 08, 2023 4:16 pm**
> It was actually pretty easy to remove the sounds and music from the patch, I followed the read me.
>
> > I want the player character models and textures but I don't want the new spell effects and sounds
> >
> >  Delete the following:
> >
> >  In the folder DBFilesClient: Spell.dbc, SpellVisual.dbc, SpellVisualKit.dbc, SpellVisualEffectName.dbc, and SoundEntries.dbc
> >  The whole folder on the top level called "Spells"
> >  The whole Sounds/Spells folder (not the whole Sounds folder, just the Spells one inside it)
> >  This might mess up your dungeon entrance texture, but someone might figure out a solution to this soon
> >  You CANNOT have the spell sounds update without the spell visuals update or vice versa. They are unfortunately tied together, so don't ask for this.
> >
> >  The music isn't right in some areas. I'd prefer the vanilla versions
> >
> >  In the Sound folder, delete the Music folder
>
>
>
>  So this file is just the changes listed above, I have no idea what im doing so I can't really help if there are any issues.
>
> [embed: //drive.google.com/file/d/1NH2rslZjb-K3B5jUeSzVYbHsxRvm5lGA/preview]

thank you sir i will try this

## Post 80928 by Schwarzschild (Barrens Chat Casualty) — 2023-12-12T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80928#p80928 | page 33 | era: pre-1.18.1 -->

How will this mod handle the revamped Goblin models/textures coming with patch 1.17.1?
Will it keep overriding them with the Cataclysm models or will they be singled out?

As it stands right now, I would have to do without all the Legion Character + World Models / Music Pack / Spell Effects if I wanted to have the new TWoW Goblin models of patch 1.17.1 :-/

Now that TWoW is doing their "own, proper" Goblin models, they should be integrated into this mod imo

## Post 81746 by Korval1 (Barrens Chat Casualty) — 2023-12-19T15:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81746#p81746 | page 33 | era: pre-1.18.1 -->

A Turtle staff member confirmed that this issue is not present with the vanilla graphics. You can find more information here: [https://github.com/slowtorta/turtlewow- ... ssues/5651](https://github.com/slowtorta/turtlewow-bug-tracker/issues/5651)

 ----

 **Please, provide a clear description of what the bug is:**

The bat is not centered on the screen whenever I take a bat flight. Instead, it's positioned off-center towards the bottom.

Here are a few screenshots:

When leaving Undercity through the sewers, my camera scraps the top of the sewer canal.
![Image](https://i.imgur.com/sKkPVxX.jpeg)

Exiting the Undercity sewers
![Image](https://i.imgur.com/UOSSOtZ.jpeg)

Typically how it looks
![Image](https://i.imgur.com/ZAUBjNw.jpeg)

Here's a 40-second video showing the problem. Notice how the camera moves downward after the flight ends:

[https://www.veed.io/view/de93381b-7d8d- ... anel=share](https://www.veed.io/view/de93381b-7d8d-43e0-983b-989a5b0a26c9?panel=share)

This issue doesn't occur when flying on a Wyvern.

 **Steps to reproduce the behavior with as much detail as possible:**

With the Turtle WOW HD patch install:
 1. Visit Undercity and use a bat flight.
 2. Observe that the bat's position is off-center, towards the bottom.

 **IDs of affected creatures, items, quests, or spells with a link to the relevant page:**

NPC: <https://database.turtlecraft.gg/?object=58597>

 **Expected behavior. Describe how it should work:**

The bat should be centered on the screen.

*Last edited by Korval1 on Tue Dec 19, 2023 3:26 pm, edited 1 time in total.*

## Post 81749 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-19T15:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81749#p81749 | page 33 | era: pre-1.18.1 -->

> **Korval1 wrote: Tue Dec 19, 2023 3:20 pm**
> A Turtle staff member confirmed that this issue is not present with the vanilla graphics. You can find more information here: [https://github.com/slowtorta/turtlewow- ... ssues/5651](https://github.com/slowtorta/turtlewow-bug-tracker/issues/5651)
>
>  ----
>
>  **Please, provide a clear description of what the bug is:**
>
>  The bat is not centered on the screen whenever I take a bat flight. Instead, it's positioned off-center towards the bottom.
>
>  Here are a few screenshots:
>
>  Leaving Undercity through the sewers
>  ![Image](https://i.imgur.com/sKkPVxX.jpeg)
>
>  Exiting the Undercity sewers
>  ![Image](https://i.imgur.com/UOSSOtZ.jpeg)
>
>  Typically how it looks
>  ![Image](https://i.imgur.com/ZAUBjNw.jpeg)
>
>  Here's a 40-second video showing the problem. Notice how the camera moves downward after the flight ends:
>
>  [https://www.veed.io/view/de93381b-7d8d- ... anel=share](https://www.veed.io/view/de93381b-7d8d-43e0-983b-989a5b0a26c9?panel=share)
>
>  This issue doesn't occur when flying on a Wyvern.
>
>  **Steps to reproduce the behavior with as much detail as possible:**
>
>  With the Turtle WOW HD patch install:
>  1. Visit Undercity and use a bat flight.
>  2. Observe that the bat's position is off-center, towards the bottom.
>
>  **IDs of affected creatures, items, quests, or spells with a link to the relevant page:**
>
>  NPC: <https://database.turtlecraft.gg/?object=58597>
>
>  **Expected behavior. Describe how it should work:**
>
>  The bat should be centered on the screen.

That problem has the same time existing as the sheathing weapons problem arose, so, it can take some time for be solved...if it has solution.
the Sheathing weapons was solved, so...give them time.

## Post 81784 by Rejectedgalaxy (Barrens Chat Casualty) — 2023-12-19T20:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81784#p81784 | page 33 | era: pre-1.18.1 -->

Hey I'm not sure if you guys are implementing new models still but Dragonflight added new skeletons a patch or 2 ago. The skeletons I'm talking about are the ones that appear when you die and run back to your body. If it's possible to port models from DF to this project I'd assume it'd be one of the easier things to do since they're just static objects.

## Post 81869 by Schwarzschild (Barrens Chat Casualty) — 2023-12-20T04:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81869#p81869 | page 33 | era: pre-1.18.1 -->

The face textures of female Goblins and female Undead characters in the world are not visible using the HD mod with patch 1.17.1.

## Post 81886 by Korval1 (Barrens Chat Casualty) — 2023-12-20T06:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81886#p81886 | page 33 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/W5Lr68T.jpeg)

Seems a bit checkered ![😄](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f604.svg)

Also, it sounds like a snake.

## Post 81887 by Korval1 (Barrens Chat Casualty) — 2023-12-20T06:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81887#p81887 | page 33 | era: pre-1.18.1 -->

Unfortunately, the HD patch breaks the game in the new High Elf starting zone, Thalassian Highlands. I wasn't really bothered by the checkered cube boars with snaking hissing sounds, but the game froze after turning in the first quest. The issue was immediately resolved after moving the three HD patch files into a temporary folder.

## Post 81896 by Wideworld (Barrens Chat Casualty) — 2023-12-20T08:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81896#p81896 | page 33 | era: pre-1.18.1 -->

Without HD, I even don't want to play game   sad_turtle_head

## Post 81905 by Korval1 (Barrens Chat Casualty) — 2023-12-20T08:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81905#p81905 | page 33 | era: pre-1.18.1 -->

> **Wideworld wrote: Wed Dec 20, 2023 8:09 am**
> Without HD, I even don't want to play game   sad_turtle_head

You can still play with the HD, it just might freak out on the new zone content...

## Post 81947 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-20T12:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81947#p81947 | page 33 | era: pre-1.18.1 -->

> **Korval1 wrote: Wed Dec 20, 2023 8:50 am**
> > **Wideworld wrote: Wed Dec 20, 2023 8:09 am**
> > Without HD, I even don't want to play game   sad_turtle_head
>
>   You can still play with the HD, it just might freak out on the new zone content...

I'm thinking if I play without the HD cause...God, the High Elven area it's crazy, it's beautiful without it.

## Post 81952 by Papou — 2023-12-20T13:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81952#p81952 | page 33 | era: pre-1.18.1 -->

The dark dwarf skin is plain grey, with no eyes or details. Cheers!

## Post 82006 by Nib42 — 2023-12-20T18:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82006#p82006 | page 33 | era: pre-1.18.1 -->

Please delete human male legion model from the files and use the vanilla one instead. It looks really stupid and cartoony, all the animations etc.

## Post 82025 by Donald137777 — 2023-12-20T21:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82025#p82025 | page 33 | era: pre-1.18.1 -->

hey guys thanks for the amazing models, i dont know if its asked before so pls forgive me,can you pls update horse mount models? like horses in bfa for example, level 40 horse models are still old ones, i know you are busy and again thank you! and oh like one of the horses in goldshire that is brown and has long hair.

sry for my english btw

## Post 82027 by Ragatho — 2023-12-20T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82027#p82027 | page 33 | era: pre-1.18.1 -->

any informations about update PLX?

## Post 82051 by Munra — 2023-12-21T03:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82051#p82051 | page 33 | era: pre-1.18.1 -->

Does the 1.17.1 update invalids mod?
I've updated client and I have no hd mod thought the .mpq files are in the proper folder (/Data)

## Post 82052 by Munra — 2023-12-21T03:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82052#p82052 | page 33 | era: pre-1.18.1 -->

> **Korval1 wrote: Wed Dec 20, 2023 8:50 am**
> You can still play with the HD, it just might freak out on the new zone content...

How come? I recently update cliet and got up to date patches A,B,C (2023-11-28) and when i load game i dont see any HD just original models for everything.

## Post 82055 by Korval1 (Barrens Chat Casualty) — 2023-12-21T03:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82055#p82055 | page 33 | era: pre-1.18.1 -->

> **Munra wrote: Thu Dec 21, 2023 3:28 am**
> > **Korval1 wrote: Wed Dec 20, 2023 8:50 am**
> > You can still play with the HD, it just might freak out on the new zone content...
>
>   How come? I recently update cliet and got up to date patches A,B,C (2023-11-28) and when i load game i dont see any HD just original models for everything.

My comment above, "Unfortunately, the HD patch breaks the game in the new High Elf starting zone, Thalassian Highlands. ... the game froze after turning in the first quest. The issue was immediately resolved after moving the three HD patch files into a temporary folder."

## Post 82071 by Korval1 (Barrens Chat Casualty) — 2023-12-21T05:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82071#p82071 | page 33 | era: pre-1.18.1 -->

Female goblins

![Image](https://i.imgur.com/mL7JLXd.jpeg)
![Image](https://i.imgur.com/g7HoVRt.jpeg)

I believe this issue relates to Turtle WoW updating the models so they don't precisely match the original vanilla female goblins. Which, TBH, goes against the spirit of vanilla WOW.

*Last edited by Korval1 on Thu Dec 21, 2023 5:27 am, edited 2 times in total.*

## Post 82072 by Korval1 (Barrens Chat Casualty) — 2023-12-21T05:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82072#p82072 | page 33 | era: pre-1.18.1 -->

> **Munra wrote: Thu Dec 21, 2023 3:19 am**
> Does the 1.17.1 update invalids mod?
>  I've updated client and I have no hd mod thought the .mpq files are in the proper folder (/Data)

You need to grab the files again and add them back.

## Post 82300 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-22T14:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82300#p82300 | page 33 | era: pre-1.18.1 -->

Any news about the update?
I'm wanting to see Lor'themar Theron in HD hahaha.

## Post 82326 by Redmagejoe (Grandmaster of Forum PvP) — 2023-12-22T16:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82326#p82326 | page 33 | era: pre-1.18.1 -->

I've been away for the holidays, and Astricon is on vacation.  I will try my best to push an update that makes DBCs compatible with the new patch, but I cannot promise any HD versions of the new character customizations or even the new NPCs until Astricon returns.

## Post 82329 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-22T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82329#p82329 | page 33 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Dec 22, 2023 4:08 pm**
> I've been away for the holidays, and Astricon is on vacation.  I will try my best to push an update that makes DBCs compatible with the new patch, but I cannot promise any HD versions of the new character customizations or even the new NPCs until Astricon returns.

Oh, no problem, take your time and enjoy the Holidays.
We can wait.

## Post 82355 by Redmagejoe (Grandmaster of Forum PvP) — 2023-12-22T20:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82355#p82355 | page 33 | era: pre-1.18.1 -->

Everything is done with making compatibility fixes to DBCs, except for the ones that pertain to Character Sections... Turtle added a lot of new customizations, and changed goblins, and Astricon did extensive work with these files too, so...  I'm a little out of my element.

I could release what I have right now, which fixes up Item Display issues, Sound Entries issues, Creature Display issues, and Spell issues, but I'd hate to have to ask people to download another patch later and deal with fucked-up Goblins in the interim.

## Post 82356 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-22T20:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82356#p82356 | page 33 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Dec 22, 2023 8:57 pm**
> Everything is done with making compatibility fixes to DBCs, except for the ones that pertain to Character Sections... Turtle added a lot of new customizations, and changed goblins, and Astricon did extensive work with these files too, so...  I'm a little out of my element.
>
>  I could release what I have right now, which fixes up Item Display issues, Sound Entries issues, Creature Display issues, and Spell issues, but I'd hate to have to ask people to download another patch later and deal with fucked-up Goblins in the interim.

If there are too much issues, don't release it, I'm sure the people can wait until the update is complete.

## Post 82384 by Schwarzschild (Barrens Chat Casualty) — 2023-12-23T02:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82384#p82384 | page 33 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Dec 22, 2023 8:57 pm**
> Everything is done with making compatibility fixes to DBCs, except for the ones that pertain to Character Sections... Turtle added a lot of new customizations, and changed goblins, and Astricon did extensive work with these files too, so...  I'm a little out of my element.
>
>  I could release what I have right now, which fixes up Item Display issues, Sound Entries issues, Creature Display issues, and Spell issues, but I'd hate to have to ask people to download another patch later and deal with fucked-up Goblins in the interim.

Take your time, enjoy the holidays. Awesome work. People can deal with playing TWoW without HD for a week or two.

## Post 82647 by Sparrowolf — 2023-12-25T08:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82647#p82647 | page 33 | era: pre-1.18.1 -->

Hey there Redmagejoe!

Love the HD project, I came across an oddity that I am not sure you are aware of or not yet with the newest patch, but the new custom recipes that were added, are unusable while running your patches. The recipes just show up with the name and "requires tailoring (75)" but when you right click it to learn it nothing happens at all. After removing the patches it shows up with the proper tooltip and description and I was able to learn the recipe.

<https://database.turtlecraft.gg/?item=51277>
<https://database.turtlecraft.gg/?item=51286>

Here is the item numbers of the two I encountered though I know there was a few more recipes added. I hope the item numbers help to help better track them down. Hope the holidays goes great for you guys!

## Post 82653 by Redmagejoe (Grandmaster of Forum PvP) — 2023-12-25T09:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82653#p82653 | page 33 | era: pre-1.18.1 -->

> **Sparrowolf wrote: Mon Dec 25, 2023 8:07 am**
>

The HD patch is not currently compatible with the new Turtle patch.  The HD patch includes Spell and ItemDisplay data which has been updated, and thus you should NOT use the currently available version until a new version is pushed out.

Having said that, I may have a Christmas gift for everyone, so sit tight while I do some testing. Bear in mind, any WIP patch released will NOT necessarily fully support new NPCs or new character customizations.

## Post 82660 by Redmagejoe (Grandmaster of Forum PvP) — 2023-12-25T10:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82660#p82660 | page 33 | era: pre-1.18.1 -->

USE AT YOUR OWN RISK! CANNOT GUARANTEE NO CRASHES!

[patch-Z.MPQ](https://github.com/redmagejoe/TurtleHD/releases/download/v0.0.14-test.1/patch-Z.MPQ) - Hackfix for patch-A.

Merry Christmas

## Post 82677 by Teurikh — 2023-12-25T14:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82677#p82677 | page 34 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Dec 25, 2023 10:50 am**
> USE AT YOUR OWN RISK! CANNOT GUARANTEE NO CRASHES!
>
>
>  [patch-Z.MPQ](https://github.com/redmagejoe/TurtleHD/releases/download/v0.0.14-test.1/patch-Z.MPQ) - Hackfix for patch-A.
>
>  Merry Christmas

turtle_in_love_head   Merry Christmas Redmagejoe

## Post 82679 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-25T14:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82679#p82679 | page 34 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Dec 25, 2023 10:50 am**
> USE AT YOUR OWN RISK! CANNOT GUARANTEE NO CRASHES!
>
>
>  [patch-Z.MPQ](https://github.com/redmagejoe/TurtleHD/releases/download/v0.0.14-test.1/patch-Z.MPQ) - Hackfix for patch-A.
>
>  Merry Christmas

Well thank you hahaha, I will wait for the complete update.
Merry Christmass Joe.

## Post 82718 by Sparrowolf — 2023-12-25T19:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82718#p82718 | page 34 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Dec 25, 2023 10:50 am**
> USE AT YOUR OWN RISK! CANNOT GUARANTEE NO CRASHES!
>
>
>  [patch-Z.MPQ](https://github.com/redmagejoe/TurtleHD/releases/download/v0.0.14-test.1/patch-Z.MPQ) - Hackfix for patch-A.
>
>  Merry Christmas

You're awesome! Merry Christmas to you as well!

## Post 82857 by Munra — 2023-12-27T02:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82857#p82857 | page 34 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Dec 25, 2023 10:50 am**
> USE AT YOUR OWN RISK! CANNOT GUARANTEE NO CRASHES!
>
>
>  [patch-Z.MPQ](https://github.com/redmagejoe/TurtleHD/releases/download/v0.0.14-test.1/patch-Z.MPQ) - Hackfix for patch-A.
>
>  Merry Christmas

Merry Christmas and thanks a lot for the awesome job!!
Got a question about the hackfix. Do we need to remove patch-A from folder and rename patch-Z to patch-A, or keep patch-A in folder and just add patch-Z to the folder?

## Post 82883 by Ellacinders — 2023-12-27T10:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82883#p82883 | page 34 | era: pre-1.18.1 -->

Thank you kindly for taking the time and dedication to work on this, Joe. Much appreciated :)

In the RELEASES section I can see the v0.0.14-test.1 but can't find the Patch-A file there. Only Z and if I scroll down on the website I can find B and C as well.  If I use the A and B patches from the description of the first post entry here, the high elves pink hair has a very strange texture almost as... newspaper hair. Maybe that was not included in this fix?

Kudos!!

## Post 82927 by Redmagejoe (Grandmaster of Forum PvP) — 2023-12-27T19:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82927#p82927 | page 34 | era: pre-1.18.1 -->

For everyone asking about patch-Z, it is called a hackfix for a reason.  It replaces patch-A, so you can delete your old patch-A.  No, it does not make all new NPCs look good, or all new hairs or skins look good, because it was JUST a DBC edit to make the game not crash and have other problems. It is purely to make the patch "work" until new HD assets can be made for the new assets Turtle made for skin and hair.

It was either have the current form of the HD release, or not have HD at all until Astricon got back from holiday vacation, and I personally opted for the former.

## Post 82929 by Ellacinders — 2023-12-27T19:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82929#p82929 | page 34 | era: pre-1.18.1 -->

Thank you for clarifying! All more clear now! =3

## Post 83142 by Kozumi — 2023-12-30T01:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83142#p83142 | page 34 | era: pre-1.18.1 -->

Vault doors don't properly load in BRD
Github issue but it has screenshots showing which doors with this .mpq edit
<https://github.com/vmangos/core/issues/2390>

## Post 83177 by Druidshadow — 2023-12-30T16:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83177#p83177 | page 34 | era: pre-1.18.1 -->

So, first time posting on the forums, but I wanted to bring something to your attention.
As we all know Turtle Wow has introduced fresh new content, however this introduces a complication with this project.
It appears that when using the HD project that the new models fully replace the old ones. However, this presents any issue with regards to original content such as  Alah'Thalas for example. In these areas, not only are the new models not being used, but due to how the project is written, character models aren't appearing...AT ALL! Instead a white and blue cubes appear in place of the missing character models! Is there any way we could get a version of this that defaults back to the old models, when new ones don't exist!

Thank you for your time and consideration!

## Post 83192 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-12-30T22:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83192#p83192 | page 34 | era: pre-1.18.1 -->

> **Druidshadow wrote: Sat Dec 30, 2023 4:02 pm**
> So, first time posting on the forums, but I wanted to bring something to your attention.
>  As we all know Turtle Wow has introduced fresh new content, however this introduces a complication with this project.
>  It appears that when using the HD project that the new models fully replace the old ones. However, this presents any issue with regards to original content such as  Alah'Thalas for example. In these areas, not only are the new models not being used, but due to how the project is written, character models aren't appearing...AT ALL! Instead a white and blue cubes appear in place of the missing character models! Is there any way we could get a version of this that defaults back to the old models, when new ones don't exist!
>
>  Thank you for your time and consideration!

I think RMJ is fully aware of this and this is the temporary fix: [viewtopic.php?p=82927#p82927](https://forum.turtlecraft.gg/viewtopic.php?p=82927#p82927)

## Post 83242 by Faroghar — 2023-12-31T13:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83242#p83242 | page 34 | era: pre-1.18.1 -->

The Aerie Peak forge

I have small cube covered with black and white squares instead of npc in case it's not a known issue.

## Post 83245 by Eriana — 2023-12-31T14:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83245#p83245 | page 34 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Oct 19, 2023 4:51 am**
> ************ UPDATE ************
>
>  The first post has been updated with the new patch-A.MPQ!
>  SHEATHING IS FINALLY FIXED!
>  All mount textures are fixed!
>  New character creation / select backgrounds for Troll, High Elf, and Goblin!

HOLY S**** THANK YOU!!!! may all the wonderful people who work on this mod have a wonderful life ahead!!!
the sheating bug was driving me INSANE for god knows how many years now (since nostalrius days really) holy holy HOOOLY LETS GOOOO

## Post 83250 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-31T16:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83250#p83250 | page 34 | era: pre-1.18.1 -->

> **Eriana wrote: Sun Dec 31, 2023 2:46 pm**
> > **Redmagejoe wrote: Thu Oct 19, 2023 4:51 am**
> > ************ UPDATE ************
> >
> >  The first post has been updated with the new patch-A.MPQ!
> >  SHEATHING IS FINALLY FIXED!
> >  All mount textures are fixed!
> >  New character creation / select backgrounds for Troll, High Elf, and Goblin!
>
>   HOLY S**** THANK YOU!!!! may all the wonderful people who work on this mod have a wonderful life ahead!!!
>  the sheating bug was driving me INSANE for god knows how many years now (since nostalrius days really) holy holy HOOOLY LETS GOOOO

Damn, I was believing that was the update for the last patch hahahahaha.
I'm waiting for it like a child waiting a new toy.

## Post 83392 by Plaquebearer — 2024-01-02T05:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83392#p83392 | page 34 | era: pre-1.18.1 -->

I cant get the female dark ranger skin for high elves to look proper
As of right now it just takes random meshes of what was last seen (character create on a goblin, back out, now I have a green skin texture on character select etc)

## Post 83393 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-01-02T05:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83393#p83393 | page 34 | era: pre-1.18.1 -->

> **Plaquebearer wrote: Tue Jan 02, 2024 5:12 am**
> I cant get the female dark ranger skin for high elves to look proper
>  As of right now it just takes random meshes of what was last seen (character create on a goblin, back out, now I have a green skin texture on character select etc)

Wait for the update.

## Post 83587 by Overberk — 2024-01-04T00:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83587#p83587 | page 34 | era: pre-1.18.1 -->

Is it possible to add boneless undead skins to in to HD models?
[viewtopic.php?t=7539](https://forum.turtlecraft.gg/viewtopic.php?t=7539)

## Post 83596 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-01-04T01:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83596#p83596 | page 34 | era: pre-1.18.1 -->

Still waiting, happy vacations Redmagejoe and Astricon.

## Post 83653 by Pedracowow — 2024-01-04T23:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83653#p83653 | page 34 | era: pre-1.18.1 -->

With the latest update it no longer works :(

## Post 83696 by Ellacinders — 2024-01-05T13:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83696#p83696 | page 34 | era: pre-1.18.1 -->

> **Pedracowow wrote: Thu Jan 04, 2024 11:43 pm**
> With the latest update it no longer works :(

If you replace patch-A for the hotfix patch-Z it should work; with the exception of the new hairstyles and some skins.

## Post 84178 by Ren92 — 2024-01-10T08:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84178#p84178 | page 34 | era: pre-1.18.1 -->

I may be doing something wrong, my high elf hair is bugged, it appears as a white patch, but on the character creation all hairstyles are fine, and when getting into the game all NPCs, and players have their hairstyles fine, all but me.
Any advice? I understand patch-A has being updated and Patch-Z is no longer needed (?)
Thanks in advance

## Post 84211 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-01-10T14:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84211#p84211 | page 34 | era: pre-1.18.1 -->

Some news about the update? Sorry for being so annoying.

## Post 84230 by Dhrazar (Barrens Chat Casualty) — 2024-01-10T16:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84230#p84230 | page 34 | era: pre-1.18.1 -->

> **Ren92 wrote: Wed Jan 10, 2024 8:36 am**
> I understand patch-A has being updated and Patch-Z is no longer needed (?)

Patch-A is outdated, you need to replace it with patch-Z.

## Post 84254 by Ren92 — 2024-01-10T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84254#p84254 | page 34 | era: pre-1.18.1 -->

> **Dhrazar wrote: Wed Jan 10, 2024 4:06 pm**
> > **Ren92 wrote: Wed Jan 10, 2024 8:36 am**
> > I understand patch-A has being updated and Patch-Z is no longer needed (?)
>
>   Patch-A is outdated, you need to replace it with patch-Z.

Either putting both in the folder or only Patch Z or renaming patch-Z as patch-A and removing the outdated patch A.
It's still bugged in a different way as before, now it has, as hair colour, the colour pattern of the chest plate (somehow, I don't know how to explain myself properly)
Sorry if I'm doing bad something obvious

## Post 84517 by Mannerless01 — 2024-01-13T14:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84517#p84517 | page 34 | era: pre-1.18.1 -->

This patch is great, but several NPC's are now rendered as checkered cubes, and many items are just a red question mark and cannot be viewed or shown.

Is there a fix for this? Some examples are the sentinels in the high elf city by the docks, the fashion people of the park in sw and the 3 dwarves in the left bunker of hinterlands aerie peak base.

## Post 84521 by Mikuart1 — 2024-01-13T14:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84521#p84521 | page 34 | era: pre-1.18.1 -->

Hello, I really like the Turtle HD Project you worked on thank you for working on it!

I have found a really nice  [HD pack](https://www.mediafire.com/folder/j974iyhrxvg1c/TextureHD_Wotlk_%28Full%29#j974iyhrxvg1c) for 3.3.5, maybe the content could help you improve your project, Im a big noob in modding wow, I wanted to try to convert everything but I don't understand anything sadly ahah and I don't know how to edit the dbc to work on 1.12, they are more recent models and textures working on 3.3.5 so maybe that could work for 1.12 with some adjustement, I think ^^

Everything is in the Data folder, there is some read me for every info for the MPQ's, the optionals MPQ's are great too, I post it here if that could help you or if some people could be interested to use it on 3.3.5.

 *(Sorry If that was bad from my part to post that here, I delete it if that wrong.)*

## Post 84547 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-01-13T17:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84547#p84547 | page 34 | era: pre-1.18.1 -->

> **Mikuart1 wrote: Sat Jan 13, 2024 2:37 pm**
> Hello, I really like the Turtle HD Project you worked on thank you for working on it!
>
>  I have found a really nice  [HD pack](https://www.mediafire.com/folder/j974iyhrxvg1c/TextureHD_Wotlk_%28Full%29#j974iyhrxvg1c) for 3.3.5, maybe the content could help you improve your project, Im a big noob in modding wow, I wanted to try to convert everything but I don't understand anything sadly ahah and I don't know how to edit the dbc to work on 1.12, they are more recent models and textures working on 3.3.5 so maybe that could work for 1.12 with some adjustement, I think ^^
>
>  Everything is in the Data folder, there is some read me for every info for the MPQ's, the optionals MPQ's are great too, I post it here if that could help you or if some people could be interested to use it on 3.3.5.
>
>  *(Sorry If that was bad from my part to post that here, I delete it if that wrong.)*

Astricon is working on a update, so, I guess he will take in count that, IDK if he is working now or if he is still in holidays.

## Post 84548 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-01-13T17:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84548#p84548 | page 34 | era: pre-1.18.1 -->

> **Mannerless01 wrote: Sat Jan 13, 2024 2:12 pm**
> This patch is great, but several NPC's are now rendered as checkered cubes, and many items are just a red question mark and cannot be viewed or shown.
>
>  Is there a fix for this? Some examples are the sentinels in the high elf city by the docks, the fashion people of the park in sw and the 3 dwarves in the left bunker of hinterlands aerie peak base.

You need the patch-Z, rename it and delete the patch-A, it's outdated, but I warn you, some things are still broken cause Magejoe only made a temporal hotfix for it, things like new skins are not working well.

Astricon will fix that...someday, he's in holidays so, wait for it.

## Post 84701 by Redmagejoe (Grandmaster of Forum PvP) — 2024-01-14T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84701#p84701 | page 34 | era: pre-1.18.1 -->

> **Mannerless01 wrote: Sat Jan 13, 2024 2:12 pm**
> This patch is great, but several NPC's are now rendered as checkered cubes, and many items are just a red question mark and cannot be viewed or shown.
>
>  Is there a fix for this? Some examples are the sentinels in the high elf city by the docks, the fashion people of the park in sw and the 3 dwarves in the left bunker of hinterlands aerie peak base.

![Image](https://i.imgur.com/nnIqQFS.png)

![Image](https://i.imgur.com/2tKKo08.png)

Noticing a trend with your inability to read a post in its entirety before getting irrationally upset.

## Post 85487 by Thesenate42 — 2024-01-21T01:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85487#p85487 | page 34 | era: pre-1.18.1 -->

Hello, so I've noticed that when I loaded up the game with the addons, sound is just non-existent. Is anyone else having this issue?

## Post 87061 by Mlororc — 2024-02-05T19:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87061#p87061 | page 34 | era: pre-1.18.1 -->

Ive installed this mod and noticed that female goblins have face missing with only floating eyeballs and hair. Has someone encountered this ?

## Post 87113 by Lucaswater — 2024-02-06T22:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87113#p87113 | page 34 | era: pre-1.18.1 -->

Sure, my game also has this glitch of the female goblin face

## Post 87116 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-02-06T22:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87116#p87116 | page 34 | era: pre-1.18.1 -->

The mod will not receive more support. Astricon retired from the project, for now I don't recommend using it until new advice.

## Post 87124 by Watchers3d (Barrens Chat Casualty) — 2024-02-06T23:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87124#p87124 | page 34 | era: pre-1.18.1 -->

> **Mlororc wrote: Mon Feb 05, 2024 7:28 pm**
> Ive installed this mod and noticed that female goblins have face missing with only floating eyeballs and hair. Has someone encountered this ?

> **Lucaswater wrote: Tue Feb 06, 2024 10:08 pm**
> Sure, my game also has this glitch of the female goblin face

For now, you have to download Patch-Z.mpq instead. You can find it in the topic header.

*Last edited by Watchers3d on Mon Feb 12, 2024 10:58 am, edited 1 time in total.*

## Post 87462 by Buksy — 2024-02-10T12:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87462#p87462 | page 34 | era: pre-1.18.1 -->

hello, whenever im in winterswring i keep geting crashes, there might be a problem there, any solutions?

## Post 87524 by Magzi — 2024-02-11T09:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87524#p87524 | page 34 | era: pre-1.18.1 -->

Hello everyone, I've been looking at the forum, but I didn't find similar problem to mine, can someone help me with the issue, why is my High Elf looking like this with the HD patch A ? with the Path Z it looks even worse...
I'm hoping if you guys can help me with the issue PLEASE :)
PS: If I create a new High elf char, there is no problem, just with the current one.. I wouldn't like to delete it :/
Thanks for reading !

[https://tinypic.host/image/Screenshot-2 ... 2039.pZMev](https://tinypic.host/image/Screenshot-2024-02-11-112039.pZMev)

## Post 87551 by Booth — 2024-02-11T20:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87551#p87551 | page 35 | era: pre-1.18.1 -->

I have a question and hopeing for a fix! And it has been this for me allways.. when i play undead hunter the autoshot comes 1 meter to the left of my toon! All other horde hunters work as it should!

## Post 87584 by Redmagejoe (Grandmaster of Forum PvP) — 2024-02-12T08:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87584#p87584 | page 35 | era: pre-1.18.1 -->

************ UPDATE ************

<https://github.com/redmagejoe/TurtleHD/releases>

![Image](https://i.imgur.com/4BbqQkO.png)

Thanks to the generous contributions of one Watchers3d, we now have a WIP update for v1.17.1. Please replace your current patch-A.MPQ with this patch-Z.MPQ, and report any issues with this new version.  If all works well, I will merge this beta release into the main branch and update the patch-A link.

## Post 87631 by Ruwall — 2024-02-12T19:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87631#p87631 | page 35 | era: pre-1.18.1 -->

lest go! new update! many thanks for all RedmageJoe you and the rest of folks helping you, you deserv the sky ♥

## Post 87653 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-02-13T00:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87653#p87653 | page 35 | era: pre-1.18.1 -->

Ok, some textures in Thalassian Highlands are broken.
Same for Trolls, are a many screenshots so I let you a Folder with all the screenshots.
[https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1msVsfOUzWAz5__YoiXQ3LlP9iHbtQu_J?usp=sharing)

## Post 87656 by Watchers3d (Barrens Chat Casualty) — 2024-02-13T01:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87656#p87656 | page 35 | era: pre-1.18.1 -->

> **Dracarusggotham wrote: Tue Feb 13, 2024 12:57 am**
> Ok, some textures in Thalassian Highlands are broken.
>  Same for Trolls, are a many screenshots so I let you a Folder with all the screenshots.
>  [https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1msVsfOUzWAz5__YoiXQ3LlP9iHbtQu_J?usp=sharing)

I've looked at your screenshots.

Trolls upper part not matching lower one is a dbc typo. Instead of referencing FacialUpperHair07_02, it actually looks at FacialUpperHair07_00. I think.
Missing textures for High Elves ears - new texture is not referenced in dbc files.
Missing High Elves npc faces are probably dbc shenanigans too.
Stag texture is a bad reference in dbc files too probably.

You see. I've added all (to the best of my knowledge) missing textures from 1.17.1. They do exist within the mod. But some of them are just not referenced in dbc files properly. We stay in touch with Redmagejoe on the matter though. So, I think it will be all figured out.

Please continue to report bugs in this topic.   smiling_turtle_head

## Post 87657 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-02-13T01:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87657#p87657 | page 35 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Feb 13, 2024 1:20 am**
> > **Dracarusggotham wrote: Tue Feb 13, 2024 12:57 am**
> > Ok, some textures in Thalassian Highlands are broken.
> >  Same for Trolls, are a many screenshots so I let you a Folder with all the screenshots.
> >  [https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1msVsfOUzWAz5__YoiXQ3LlP9iHbtQu_J?usp=sharing)
>
>   I've looked at your screenshots.
>
>  Trolls upper part not matching lower one is a dbc typo. Instead of referencing FacialUpperHair07_02, it actually looks at FacialUpperHair07_00. I think.
>  Missing textures for High Elves ears - new texture is not referenced in dbc files.
>  Missing High Elves npc faces are probably dbc shenanigans too.
>  Stag texture is a bad reference in dbc files too probably.
>
>  You see. I've added all (to the best of my knowledge) missing textures from 1.17.1. They do exist within the mod. But some of them are just not referenced in dbc files properly. We stay in touch with Redmagejoe on the matter though. So, I think it will be all figured out.
>
>  Please continue to report bugs in this topic.   smiling_turtle_head

Thanks for the quick answer, I will be checking in-game for more errors inside the game and thanks for your work.
It's good to see someone still has interest in the project.

## Post 87685 by Watchers3d (Barrens Chat Casualty) — 2024-02-13T11:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87685#p87685 | page 35 | era: pre-1.18.1 -->

Guys, link went down  unhappy_turtle_head . I think it's evil GitHub men wrongdoing. Give us some time.

Upd. Is up again.

*Last edited by Watchers3d on Wed Feb 14, 2024 1:16 am, edited 2 times in total.*

## Post 87726 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-02-13T21:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87726#p87726 | page 35 | era: pre-1.18.1 -->

I was thinking...
I saw that the devs in the next patch will add more customizations, which means new hairstyles and stuff like that, I guess that will be the end of the HD Project.
I don't think there is a way to add them unless someone with knowledge of 3D modeling knows how to add those types of customizations, or, add some Shadowlands customizations as compensation.

## Post 87741 by Redmagejoe (Grandmaster of Forum PvP) — 2024-02-14T04:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87741#p87741 | page 35 | era: pre-1.18.1 -->

Patch-Z has been updated with DBC fixes. Please report any texture bugs with NPCs or player or mount skins here.  If this beta is bug-free, I will push this to the main branch and update the Patch-A link.

## Post 87804 by Redmagejoe (Grandmaster of Forum PvP) — 2024-02-15T00:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87804#p87804 | page 35 | era: pre-1.18.1 -->

I apologize for all the link breakage. I must be retarded, because I cannot get my auto-commits from my build pushes to generate a specific versioning convention of my choosing, thus the confusion when renaming versions.

## Post 87807 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-02-15T03:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87807#p87807 | page 35 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Feb 15, 2024 12:35 am**
> I apologize for all the link breakage. I must be retarded, because I cannot get my auto-commits from my build pushes to generate a specific versioning convention of my choosing, thus the confusion when renaming versions.

I will post in the folder all the bugs that I have found.
For now I checked the trolls and the texture matchs correctly.
Same for the stag.

Blood Elves in Alah'thalas still has the broken texture.
That...kind of elf who is aside of Eldin Sunstrider has his texture broken too.
The Elf in the dock nearly to the Isle of Eternal Autumn has his texture broken.
The driads in the Isle of Eternal Autum are REALLY broken.

[https://drive.google.com/drive/folders/ ... P9iHbtQu_J](https://drive.google.com/drive/folders/1msVsfOUzWAz5__YoiXQ3LlP9iHbtQu_J)

## Post 87829 by Watchers3d (Barrens Chat Casualty) — 2024-02-15T10:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87829#p87829 | page 35 | era: pre-1.18.1 -->

> **Dracarusggotham wrote: Thu Feb 15, 2024 3:00 am**
> I will post in the folder all the bugs that I have found.
>  For now I checked the trolls and the texture matchs correctly.
>  Same for the stag.
>
>  Blood Elves in Alah'thalas still has the broken texture.
>  That...kind of elf who is aside of Eldin Sunstrider has his texture broken too.
>  The Elf in the dock nearly to the Isle of Eternal Autumn has his texture broken.
>  The driads in the Isle of Eternal Autum are REALLY broken.
>
>  [https://drive.google.com/drive/folders/ ... P9iHbtQu_J](https://drive.google.com/drive/folders/1msVsfOUzWAz5__YoiXQ3LlP9iHbtQu_J)

Ok. Will be included in the next update.

## Post 87837 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-02-15T11:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87837#p87837 | page 35 | era: pre-1.18.1 -->

> **Watchers3d wrote: Thu Feb 15, 2024 10:09 am**
> > **Dracarusggotham wrote: Thu Feb 15, 2024 3:00 am**
> > I will post in the folder all the bugs that I have found.
> >  For now I checked the trolls and the texture matchs correctly.
> >  Same for the stag.
> >
> >  Blood Elves in Alah'thalas still has the broken texture.
> >  That...kind of elf who is aside of Eldin Sunstrider has his texture broken too.
> >  The Elf in the dock nearly to the Isle of Eternal Autumn has his texture broken.
> >  The driads in the Isle of Eternal Autum are REALLY broken.
> >
> >  [https://drive.google.com/drive/folders/ ... P9iHbtQu_J](https://drive.google.com/drive/folders/1msVsfOUzWAz5__YoiXQ3LlP9iHbtQu_J)
>
>   Ok. Will be included in the next update.

Thank you, your hard work is appreciatted, really.

## Post 87840 by Watchers3d (Barrens Chat Casualty) — 2024-02-15T12:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87840#p87840 | page 35 | era: pre-1.18.1 -->

> **Booth wrote: Sun Feb 11, 2024 8:03 pm**
> I have a question and hopeing for a fix! And it has been this for me allways.. when i play undead hunter the autoshot comes 1 meter to the left of my toon! All other horde hunters work as it should!

Addressed. Will be fixed next update.

## Post 87911 by Galownik — 2024-02-16T07:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87911#p87911 | page 35 | era: pre-1.18.1 -->

dont need download patch A? i cant click link

## Post 88055 by Redmagejoe (Grandmaster of Forum PvP) — 2024-02-18T06:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88055#p88055 | page 35 | era: pre-1.18.1 -->

************ UPDATE ************

<https://github.com/redmagejoe/TurtleHD/releases>

![Image](https://i.imgur.com/YxP3DQq.png)

Thanks to the generous contributions of Watchers3d, we now have another WIP update for v1.17.1. Please replace your current patch-A.MPQ with this patch-Z.MPQ, and report any issues with this new version.  If all works well, I will merge this beta release into the main branch and update the patch-A link.

## Post 88104 by Alarionrp — 2024-02-18T22:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88104#p88104 | page 35 | era: pre-1.18.1 -->

Haven't seen anyone mentioned these things, so here is my bug report for latest version of the patch.

 1. Female gnome has no texture / just black texture when choosing new red hair color (gnome male red hair color works correctly);

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/xzljsaZ]

 2. Female troll misses golden piercing texture when choosing one of the newest markings with grey spot around eyes.

[embed: https://s9e.github.io/iframe/2/imgur.min.html#mUq4gMT]

Thank you for your work!

## Post 88125 by Watchers3d (Barrens Chat Casualty) — 2024-02-19T09:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88125#p88125 | page 35 | era: pre-1.18.1 -->

> **Alarionrp wrote: Sun Feb 18, 2024 10:23 pm**
> Haven't seen anyone mentioned these things, so here is my bug report for latest version of the patch.
>
>  1. Female gnome has no texture / just black texture when choosing new red hair color (gnome male red hair color works correctly);
>
>  2. Female troll misses golden piercing texture when choosing one of the newest markings with grey spot around eyes.
>
>  Thank you for your work!

Ok. Thank you. I'll look into this for the next update.

## Post 88329 by Zogtog — 2024-02-21T15:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88329#p88329 | page 35 | era: pre-1.18.1 -->

Hi! Tnx for your hard work guys! Spectral tiger mount model for horde very small, like companion :).
How i can add a picture?

## Post 88610 by Redmagejoe (Grandmaster of Forum PvP) — 2024-02-24T02:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88610#p88610 | page 35 | era: pre-1.18.1 -->

************ UPDATE ************

<https://github.com/redmagejoe/TurtleHD/releases>

At long last, we have a stable release, thanks to the ongoing efforts of Watchers3d. Thank you all for your patience during this patch period while we worked out all the bugs.

## Post 88626 by Ragetto (Patch Note Conspiracy Theorist) — 2024-02-24T09:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88626#p88626 | page 35 | era: pre-1.18.1 -->

I just installed the packs, and I love them :) Almost feels like playing a new game.

The new Orgrimmar music is excellent, finally on par with Ironforge and Stormwind! (wasn't the case before, imo)

Thank you very much!

## Post 88639 by Ludovico — 2024-02-24T12:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88639#p88639 | page 35 | era: pre-1.18.1 -->

Sirs, could you advise, how to remove updated models of the Owls from the pack?

## Post 88655 by Azcron (Patch Note Conspiracy Theorist) — 2024-02-24T15:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88655#p88655 | page 35 | era: pre-1.18.1 -->

Not sure what I did but I downloaded the patches and my textures are broken? I removed the old patches and downloaded everything fresh..

Edit: I fixed the issue. I was opening WoWFOV and did not use WoW.exe first

## Post 88666 by Redmagejoe (Grandmaster of Forum PvP) — 2024-02-24T19:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88666#p88666 | page 35 | era: pre-1.18.1 -->

> **Azcron wrote: Sat Feb 24, 2024 3:49 pm**
> Not sure what I did but I downloaded the patches and my textures are broken? I removed the old patches and downloaded everything fresh..
>
>  Edit: I fixed the issue. I was opening WoWFOV and did not use WoW.exe first

Always delete WDB any time you install a new version of any MPQs.

## Post 88859 by Dhrazar (Barrens Chat Casualty) — 2024-02-27T17:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88859#p88859 | page 35 | era: pre-1.18.1 -->

The item Fury Visor, Display ID: 32908, appears as rubiks cube.

## Post 88869 by Volkyte (Patch Note Conspiracy Theorist) — 2024-02-27T18:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88869#p88869 | page 35 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Feb 24, 2024 2:00 am**
> ************ UPDATE ************
>
>  <https://github.com/redmagejoe/TurtleHD/releases>
>
>  At long last, we have a stable release, thanks to the ongoing efforts of Watchers3d. Thank you all for your patience during this patch period while we worked out all the bugs.

We thanks you for the efforts   satisfied_turtle_head

## Post 89178 by Watchers3d (Barrens Chat Casualty) — 2024-03-01T21:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89178#p89178 | page 35 | era: pre-1.18.1 -->

> **Dhrazar wrote: Tue Feb 27, 2024 5:19 pm**
> The item Fury Visor, Display ID: 32908, appears as rubiks cube.

Displays normal on my end.
![Image](https://i.imgur.com/uEf2GO7.png)

## Post 89282 by Dhrazar (Barrens Chat Casualty) — 2024-03-03T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89282#p89282 | page 35 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri Mar 01, 2024 9:33 pm**
> Displays normal on my end.

Hmm that's strange. I've only saw it once in SW.
I also wanted to ask, if the plague bats in eastern plague lands, have broken textures too. It seems so on my side.

## Post 89283 by Redmagejoe (Grandmaster of Forum PvP) — 2024-03-03T16:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89283#p89283 | page 35 | era: pre-1.18.1 -->

The bats in Gilneas and EPL had broken textures a while ago, but Astricon fixed them up. It appears they've broken again, perhaps in relation to the Horde bat flights being changed. I will have to ask Watchers what in CreatureDisplayInfo was changed.

## Post 89325 by Watchers3d (Barrens Chat Casualty) — 2024-03-04T00:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89325#p89325 | page 35 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Mar 03, 2024 4:33 pm**
> The bats in Gilneas and EPL had broken textures a while ago, but Astricon fixed them up. It appears they've broken again, perhaps in relation to the Horde bat flights being changed. I will have to ask Watchers what in CreatureDisplayInfo was changed.

PMed you.

## Post 89333 by Redmagejoe (Grandmaster of Forum PvP) — 2024-03-04T07:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89333#p89333 | page 35 | era: pre-1.18.1 -->

************ UPDATE ************

<https://github.com/redmagejoe/TurtleHD/releases>

![Image](https://i.imgur.com/lGlWQ0V.png)

Several fixes for the latest stable release of Turtle HD.  More details in the changelog.

## Post 89539 by Jawawr — 2024-03-06T10:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89539#p89539 | page 35 | era: pre-1.18.1 -->

I really appreciate this whole modification. Huge work, thanks a lot!

Btw, just noticed that high elf female model has a mask issue - face textures come through the mask in a few tiny places like it has kinda holes or something. Same thing with Red Defias Mask (same model obviously)

WDB folder cleaned ofc.

![Image](https://i.postimg.cc/qMSGvymb/wowscrnshot-030524-231900.png)

## Post 89655 by Zogtog — 2024-03-08T04:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89655#p89655 | page 35 | era: pre-1.18.1 -->

Hi again. Armored spectral tiger from Donatiom Shop very small. My pet bigger. Tnx for your work guys!

## Post 89711 by Ragetto (Patch Note Conspiracy Theorist) — 2024-03-08T19:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89711#p89711 | page 35 | era: pre-1.18.1 -->

Hi, something's wrong in Stranglethorn   sad_turtle
 *<https://ibb.co/vwF1x1h>*

 ---

Edit: That said, I've added several patches so I'm not sure where the issue originates from... I'm trying to revert to the original version but I'm uncertain which patch.mpq files are default.

Could someone tell me which ones to keep/delete?
(I believe I've already deleted the Turtle HD ones)

 *<https://ibb.co/QcCYpWP>*

## Post 89717 by Reploidrocsa (Bug Report Enthusiast) — 2024-03-08T19:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89717#p89717 | page 35 | era: pre-1.18.1 -->

Reporting texture error on lovely pink furline mount

[![Image](https://i.ibb.co/Jmf0mS5/Screenshot-2.jpg)](https://ibb.co/VJ7rJk2)

## Post 89727 by Redmagejoe (Grandmaster of Forum PvP) — 2024-03-08T23:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89727#p89727 | page 36 | era: pre-1.18.1 -->

> **Ragetto wrote: Fri Mar 08, 2024 7:07 pm**
> Hi, something's wrong in Stranglethorn   sad_turtle
>  *<https://ibb.co/vwF1x1h>*

That is a graphics, probably AMD Graphics Card, problem, not a mod problem. There is nothing that I or anyone can do with client files to fix that.

> **Reploidrocsa wrote: Fri Mar 08, 2024 7:24 pm**
> Reporting texture error on lovely pink furline mount
>
>  [![Image](https://i.ibb.co/Jmf0mS5/Screenshot-2.jpg)](https://ibb.co/VJ7rJk2)

You are using an outdated version of the patch, or have not deleted your WDB folder in a long time.  It is fully functional on the current version of the patch.

*Last edited by Redmagejoe on Fri Mar 08, 2024 11:28 pm, edited 1 time in total.*

## Post 89730 by Dhrazar (Barrens Chat Casualty) — 2024-03-08T23:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89730#p89730 | page 36 | era: pre-1.18.1 -->

> **Ragetto wrote: Fri Mar 08, 2024 7:07 pm**
> Hi, something's wrong in Stranglethorn   sad_turtle
>  *<https://ibb.co/vwF1x1h>*
>
>  ---
>
>  Edit: That said, I've added several patches so I'm not sure where the issue originates from... I'm trying to revert to the original version but I'm uncertain which patch.mpq files are default.
>
>  Could someone tell me which ones to keep/delete?
>  (I believe I've already deleted the Turtle HD ones)
>
>  *<https://ibb.co/QcCYpWP>*

Patch-Z is the old fix, if you didn't download something other ... so you can delete it.
Patch-F is maybe "a little extra" and patch-W I have no idea.

## Post 89734 by Reploidrocsa (Bug Report Enthusiast) — 2024-03-09T00:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89734#p89734 | page 36 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Mar 08, 2024 11:21 pm**
> > **Ragetto wrote: Fri Mar 08, 2024 7:07 pm**
> > Hi, something's wrong in Stranglethorn   sad_turtle
> >  *<https://ibb.co/vwF1x1h>*
>
>   That is a graphics, probably AMD Graphics Card, problem, not a mod problem. There is nothing that I or anyone can do with client files to fix that.
>
>
> > **Reploidrocsa wrote: Fri Mar 08, 2024 7:24 pm**
> > Reporting texture error on lovely pink furline mount
> >
> >  [![Image](https://i.ibb.co/Jmf0mS5/Screenshot-2.jpg)](https://ibb.co/VJ7rJk2)
>
>   You are using an outdated version of the patch, or have not deleted your WDB folder in a long time.  It is fully functional on the current version of the patch.

Will look into it, thanks!

## Post 89741 by Watchers3d (Barrens Chat Casualty) — 2024-03-09T06:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89741#p89741 | page 36 | era: pre-1.18.1 -->

> **Reploidrocsa wrote: Fri Mar 08, 2024 7:24 pm**
> Reporting texture error on lovely pink furline mount
>
>
>  [![Image](https://i.ibb.co/Jmf0mS5/Screenshot-2.jpg)](https://ibb.co/VJ7rJk2)

People reported the same behavior a week or 2 ago. This mount is displaying correctly in HD Project.

![Image](https://media.discordapp.net/attachments/1158807751850475690/1210663250547580978/2024-02-24.png?ex=65fdd603&is=65eb6103&hm=9929913388d5799fc46e947bc1d42277c2bcfadb46b1f3bd268da757c5383299&=&format=webp&quality=lossless&width=1190&height=744)

Uninstalling "WotLK feral forms" mod fixed the issue.

> **Ragetto wrote: Fri Mar 08, 2024 7:07 pm**
> Hi, something's wrong in Stranglethorn   sad_turtle
>  *<https://ibb.co/vwF1x1h>*
>
>  ---
>
>  Edit: That said, I've added several patches so I'm not sure where the issue originates from... I'm trying to revert to the original version but I'm uncertain which patch.mpq files are default.
>
>  Could someone tell me which ones to keep/delete?
>  (I believe I've already deleted the Turtle HD ones)
>
>  *<https://ibb.co/QcCYpWP>*

As always, you can check WDB folder. You can also try vanilla fixes dxvk version.

## Post 90069 by Dhrazar (Barrens Chat Casualty) — 2024-03-13T11:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90069#p90069 | page 36 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri Mar 01, 2024 9:33 pm**
> > **Dhrazar wrote: Tue Feb 27, 2024 5:19 pm**
> > The item Fury Visor, Display ID: 32908, appears as rubiks cube.
>
>   Displays normal on my end.
>  ![Image](https://i.imgur.com/uEf2GO7.png)

Saw it again in SW, on high elf female. I'm also high elf. I think that's the problem.

## Post 90180 by Moo89 — 2024-03-14T18:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90180#p90180 | page 36 | era: pre-1.18.1 -->

]Hello :)
I recently updated Windows 11 and today i wanted to play some Turtlewow and I logged in to this..
I have tryed most ways to get this fixed but nothing helps, This glitch only happens with Patch A.
Did update my grafic drivers with restart.

[img]
[embed: //drive.google.com/file/d/1O7-yQP4xW8GlHWCl76hGW6xQPt-7FHk3/preview]
[/img

## Post 90182 by Watchers3d (Barrens Chat Casualty) — 2024-03-14T18:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90182#p90182 | page 36 | era: pre-1.18.1 -->

> **Dhrazar wrote: Tue Feb 27, 2024 5:19 pm**
> Saw it again in SW, on high elf female. I'm also high elf. I think that's the problem.

High Elves and helmets can be sometimes sketchy, yeah. We're looking into it.

> **Moo89 wrote: Thu Mar 14, 2024 6:13 pm**
> Hello :)
>  I recently updated Windows 11 and today i wanted to play some Turtlewow and I logged in to this..
>  I have tryed most ways to get this fixed but nothing helps, This glitch only happens with Patch A.
>  Did update my grafic drivers with restart.

Hello. You can try fiddling with Vertex Animation Shaders option, weather options. Also you can try Vanilla Fixes dxvk version.

## Post 92531 by Redmagejoe (Grandmaster of Forum PvP) — 2024-04-10T20:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92531#p92531 | page 36 | era: pre-1.18.1 -->

I am currently working on reverting Wyverns to their vanilla models other than those you ride as a Horde and the ones at the flightmasters, and will try to address a few other lingering issues for the next version of the HD patch.

## Post 92543 by Wideworld (Barrens Chat Casualty) — 2024-04-11T02:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92543#p92543 | page 36 | era: pre-1.18.1 -->

The color of the innermost chair in the Stormwind bank hall is Yellow in the day but becomes blue in the night.

*Last edited by Wideworld on Thu Apr 25, 2024 7:53 am, edited 2 times in total.*

## Post 92632 by Volkyte (Patch Note Conspiracy Theorist) — 2024-04-13T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92632#p92632 | page 36 | era: pre-1.18.1 -->

murlocs in BFD are all white

![Image](https://i.imgur.com/wIp3RSI.jpeg)

## Post 92633 by Zer0cool — 2024-04-13T12:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92633#p92633 | page 36 | era: pre-1.18.1 -->

> **Volkyte wrote: Sat Apr 13, 2024 12:10 pm**
> murlocs in BFD are all white
>
>  ![Image](https://i.imgur.com/wIp3RSI.jpeg)

First rule of white textures is: exit game normally, don't try Alt+f4, delete as usual WDB folder, reload game. Killing the game, it might continue keeping unloaded models in the memory, while exit the game it will unload the memory.

## Post 92634 by Volkyte (Patch Note Conspiracy Theorist) — 2024-04-13T13:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92634#p92634 | page 36 | era: pre-1.18.1 -->

> **Zer0cool wrote: Sat Apr 13, 2024 12:54 pm**
> > **Volkyte wrote: Sat Apr 13, 2024 12:10 pm**
> > murlocs in BFD are all white
> >
> >  ![Image](https://i.imgur.com/wIp3RSI.jpeg)
>
>  First rule of white textures is: exit game normally, don't try Alt+f4, delete as usual WDB folder, reload game. Killing the game, it might continue keeping unloaded models in the memory, while exit the game it will unload the memory.

already tried 2 times sir

## Post 92643 by Zer0cool — 2024-04-13T18:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92643#p92643 | page 36 | era: pre-1.18.1 -->

> **Volkyte wrote: Sat Apr 13, 2024 1:09 pm**
> > **Zer0cool wrote: Sat Apr 13, 2024 12:54 pm**
> > > **Volkyte wrote: Sat Apr 13, 2024 12:10 pm**
> > > murlocs in BFD are all white
> > >
> > >  ![Image](https://i.imgur.com/wIp3RSI.jpeg)
> >
> >  First rule of white textures is: exit game normally, don't try Alt+f4, delete as usual WDB folder, reload game. Killing the game, it might continue keeping unloaded models in the memory, while exit the game it will unload the memory.
>
>   already tried 2 times sir

Well, usually by exit the game normally or just using the command Code: Select all

```
/run ReloadUI()
```

fix the issue.
The only thing that I can suggest now is to try the LAA [https://www.techpowerup.com/forums/thre ... re.112556/](https://www.techpowerup.com/forums/threads/large-address-aware.112556/) modification in order to give more space into the game to load up better.

## Post 92657 by Volkyte (Patch Note Conspiracy Theorist) — 2024-04-14T07:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92657#p92657 | page 36 | era: pre-1.18.1 -->

tried. yet no luck still

## Post 92662 by Redmagejoe (Grandmaster of Forum PvP) — 2024-04-14T08:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92662#p92662 | page 36 | era: pre-1.18.1 -->

Working on this Murloc issue. I believe I narrowed down the problem.

Funny enough, the issue is usually vanilla textures wrapping around HD models. In this case, it appears to be HD textures attempting to wrap around vanilla / Turtle models.

EDIT: Success on test patch. I would not recommend getting the latest patch-Z, which I use for testing, as this is not game-breaking. Please wait for the next version of patch-A, when I push test branch fixes over to main branch.

[https://github.com/redmagejoe/TurtleHD/ ... 1e67db919a](https://github.com/redmagejoe/TurtleHD/commit/253fd8a2fad60e801d65b88b9584b71e67db919a)

*Last edited by Redmagejoe on Sun Apr 14, 2024 8:26 am, edited 1 time in total.*

## Post 92665 by Volkyte (Patch Note Conspiracy Theorist) — 2024-04-14T08:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92665#p92665 | page 36 | era: pre-1.18.1 -->

no problems and thanks for solving the issue =)

## Post 92689 by Zer0cool — 2024-04-14T20:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92689#p92689 | page 36 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Apr 14, 2024 8:14 am**
> Working on this Murloc issue. I believe I narrowed down the problem.
>
>  Funny enough, the issue is usually vanilla textures wrapping around HD models. In this case, it appears to be HD textures attempting to wrap around vanilla / Turtle models.
>
>  EDIT: Success on test patch. I would not recommend getting the latest patch-Z, which I use for testing, as this is not game-breaking. Please wait for the next version of patch-A, when I push test branch fixes over to main branch.
>
>  [https://github.com/redmagejoe/TurtleHD/ ... 1e67db919a](https://github.com/redmagejoe/TurtleHD/commit/253fd8a2fad60e801d65b88b9584b71e67db919a)

Well, a whole different issue this appeared to be, giving a similar error as the original one. Glad you managed to track it down, Red.

## Post 93374 by Plaquebearer — 2024-04-24T00:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93374#p93374 | page 36 | era: pre-1.18.1 -->

With "Runeblade of Baron Rivendare" having an unique texture for this graphic overhaul, is there anyway to change how other items look on our own?

## Post 93629 by Ragetto (Patch Note Conspiracy Theorist) — 2024-04-27T15:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93629#p93629 | page 36 | era: pre-1.18.1 -->

Could someone (who hasn't installed the packs) take a screenshot of the Data directory or list the default .mpq files?

Sometimes my game is lagging and I want to figure out if it's due to Turtle HD (and other packs) or not, but I don't know which .mpq files were added... so I can't revert to the original configuration.

PS: Also, in my opinion, Turtle HD could include this information somewhere.

## Post 93632 by Watchers3d (Barrens Chat Casualty) — 2024-04-27T15:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93632#p93632 | page 36 | era: pre-1.18.1 -->

> **Ragetto wrote: Sat Apr 27, 2024 3:12 pm**
> Could someone (who hasn't installed the packs) take a screenshot of the Data directory or list the default .mpq files?
>
>  Sometimes my game is lagging and I want to figure out if it's due to Turtle HD (and other packs) or not, but I don't know which .mpq files were added... so I can't revert to the original configuration.
>
>  PS: Also, in my opinion, Turtle HD could include this information somewhere.

![Image](https://i.imgur.com/QMXxs9I.png)

Here.
It probably would not help with lag reducing though. You should look into things like VanillaFixes, hardware cursor acceleration toggled on, Vertex Animation Shaders, weather settings, WDB folder etc. General topic in Discord probably can be more helpful and speedier than a forum for things like this.

## Post 93672 by Ragetto (Patch Note Conspiracy Theorist) — 2024-04-28T09:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93672#p93672 | page 36 | era: pre-1.18.1 -->

Thanks! So, I reset everything... and the game is

 1/ Less pretty :(
 2/ Smoother :)

Even with all graphics settings maxed out, I don't have the fps drops and micro-freezes that were driving me crazy in PvP until recently.

I'd really like to reinstall the patches, but I'm going to do it one by one to figure out which file is causing the problem

 ----
edit:
Turns out I celebrated too soon, there are still some micro-freezes... but a bit fewer.

Still, I know that the problem is with my computer, not the patches.

## Post 94671 by Ryuk0min — 2024-05-12T22:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94671#p94671 | page 36 | era: pre-1.18.1 -->

![Image](https://i.postimg.cc/NF8VBBSr/2024-05-13-01-02-23.png)
![Image](https://i.postimg.cc/pVK3DJrX/2024-05-13-01-01-57.png)
![Image](https://i.postimg.cc/c4Z2Ttt7/2024-05-13-00-59-18.png)

It's not supposed to work like that, right?  wary_turtle_head

## Post 94723 by Watchers3d (Barrens Chat Casualty) — 2024-05-13T11:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94723#p94723 | page 36 | era: pre-1.18.1 -->

> **Ryuk0min wrote: Sun May 12, 2024 10:06 pm**
> It's not supposed to work like that, right?  wary_turtle_head

Right. First things first, delete WDB folder. Then, perhaps things might get clearer.

## Post 95086 by Ryuk0min — 2024-05-17T20:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95086#p95086 | page 36 | era: pre-1.18.1 -->

![Image](https://i.postimg.cc/BbSXPsPC/2024-05-17-23-27-50.png)

better, not..

## Post 95173 by Wideworld (Barrens Chat Casualty) — 2024-05-18T11:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95173#p95173 | page 36 | era: pre-1.18.1 -->

Sometimes this critical error occurs, usually happens in cities.
![Image](https://i.postimg.cc/CLC6YF54/Error2.png)

*Last edited by Wideworld on Mon Jul 01, 2024 11:57 am, edited 7 times in total.*

## Post 95290 by Bowser (Turtle WoW Team) [STAFF] — 2024-05-20T14:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95290#p95290 | page 36 | era: pre-1.18.1 -->

> **Ryuk0min wrote: Sun May 12, 2024 10:06 pm**
> It's not supposed to work like that, right?  wary_turtle_head

Is your graphics card working properly? Are the graphics drivers updated? Have you tried running the old client with the -opengl tag? If none of this helps, try Vanillatweaks with DXVK enabled.

## Post 95480 by Mannerless01 — 2024-05-23T10:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95480#p95480 | page 36 | era: pre-1.18.1 -->

The patch is corrupting my game data and causing me horriffic scream tearing and frame breaking... am I the only one? Wow works without patch, but not with.

## Post 95514 by Pussymobster — 2024-05-23T16:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95514#p95514 | page 36 | era: pre-1.18.1 -->

> **Wideworld wrote: Sat May 18, 2024 11:52 am**
> Sometimes this critical error occurs.
>  <https://imagetolink.com/ib/b9uNlun1mk>
>  ![Image](https://imagetolink.com/ib/b9uNlun1mk)

Same stuff appear sometimes when I play BGs, anyone knows how to fix it?

## Post 96498 by Reverb1983 — 2024-06-07T11:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96498#p96498 | page 36 | era: pre-1.18.1 -->

Hey,

Thank you for the patch man, very nice work! I am having an issue with my Tauren druid alt, cant Login!
I can loggin with UD ORC and Troll, but when i click to select my Tauren game crushes. Can t even see the char.

I ve tried deleteing WDB, re download the game but nothing. I made a copy and rerun wow without the HD files and it works fine. Any suggestions?

## Post 96576 by Templar85 (Patch Note Conspiracy Theorist) — 2024-06-08T01:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96576#p96576 | page 36 | era: pre-1.18.1 -->

Somebody asked this question and solution was to take off all your gear before loging out as a Tauren.

## Post 97020 by Eithos — 2024-06-14T18:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97020#p97020 | page 36 | era: pre-1.18.1 -->

Attached is a bug which I believe may need attention:
<https://postimg.cc/phw7hqC7>

As per the image, one can see that the faces disappear/smudge, as if a texture was missing.

Troubleshooting I've done:
 -Delete cache (WDB folder)
 -Changed Resolution (also changed Windowed/Fullscreen modes)
 -Reset Game to Clean Install
 -Bought Appearance Token (wasted money...)

From my investigation, the HD patch does allow for the skin to work if the character is Bald/Shaved (no hair) as Certain NPCs, such as Grandfather Winter/Lunar Festival Dwarves are updated to the HD patch successfully, however I am not made of money enough to keep buying tokens to see which hairstyles/beardstyles combinations actually work. That being said, I've notices similar patterns in the past regarding ghost textures and models missing faces/broken textures.

I hope this is useful to someone more technically capable.

Thank you!!!   satisfied_turtle_head

## Post 97112 by Milton3450 — 2024-06-16T12:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97112#p97112 | page 36 | era: pre-1.18.1 -->

Patch-A makes Arcane Missiles not show missiles flying. They became invisible (still damaging target though). Tested with High Elf Male.

## Post 97347 by Hacerio — 2024-06-19T16:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97347#p97347 | page 36 | era: pre-1.18.1 -->

> **Astricon wrote: Tue Apr 25, 2023 4:16 am**
> I've always wanted this as an option. I made an HD patch that changes player character night elf eyes from yellow to white as this is actually lore accurate--yellow eyes are supposed to be very rare among night elves up to the release of WoW when suddenly all male night elves had yellow eyes. Illidan and Azshara are the only two night elves that are mentioned to have golden eyes pre-sundering, and Broll Bearmantle is the only one that comes to mind from post-WoW lore in which he came to have golden eyes after a certain point. Even in the books during WoW era, there are very few golden-eyed night elves. This was quietly retconned at some point late in WoW's lore overhauls until recently when night elves in Shadowlands/Dragonflight were allowed to choose their eye color at character creation.
>
>  NPC Male night elves have white eyes too, but if you look reeeeeeally closely you'll see the base is still yellow. Player characters have new textures under the glowing parts though.
>
>  Since this is in my opinion a lore accurate patch but not WoW-game-history accurate, I figured I'd just float it as an optional patch, and named it such.
>
>  [patch-BWhiteNelfHD.MPQ](https://drive.google.com/file/d/1mcY-_GeUmQDK8wO0JTplYD_cL4HsNQ_a/view?usp=share_link)
>
>  ![Image](https://i.imgur.com/eWcrHfn.png)

Hey,

I'm really interested in this patch to make male night elf eyes white, but the file link seems to be dead.

Any chance you could provide an updated link?

Thanks

## Post 97681 by Mouzai — 2024-06-23T20:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97681#p97681 | page 36 | era: pre-1.18.1 -->

**Turtle HD+**
 *Informations & Update here : [viewtopic.php?t=14319](https://forum.turtlecraft.gg/viewtopic.php?t=14319)*

In order to complete the very good  ["Turle HD Project"](https://forum.turtlecraft.gg/viewtopic.php?t=2827), I've decided to add various models that are not already updated by the "Turtle HD Project" which nevertheless appear in many zones and especially the first ones.

It's 100% compatible with the original TURTLE HD PROJECT mod and all other mods designed to improve models, environments, etc...

Please share your feedback, suggestions and bug reports on the topic [viewtopic.php?t=14319](https://forum.turtlecraft.gg/viewtopic.php?t=14319) !
I hope I'll have the time and courage to continue adding more models.

 **SCREENSHOTS**

 **CREATURES**
![Image](https://i.imgur.com/UUXJkVD.jpeg)
![Image](https://i.imgur.com/n1GGObb.jpeg)
![Image](https://i.imgur.com/MVUFVHJ.jpeg)
![Image](https://i.imgur.com/ek9obNr.jpeg)
 *All variations : Gnolls, Wolfs, Boars, Darkhound, Dragon Whelps, Lynxes, Striders, Human Boy, Human Girl.*

 **MOUNTS**
![Image](https://i.imgur.com/WG7fHiu.jpeg)
 *Human Mount 60 % (Horses), High Elf Mount 60% & 100% (Unicorns), Paladin Mount 60%, All other Warhorses (like Scarlet Charger), Warlock Mount 60% & 100%, Dwarf Mount 60% (Ram), Mule.*

 **Q&A**

 **Q1 - What's the difference between this mod and Turtle HD?**
 *A1 - This mod is designed to complete the  ["Turle HD Project"](https://forum.turtlecraft.gg/viewtopic.php?t=2827), so it's advisable to use both.*

 **Q2 - Is this compatible with other mods?**
 *A2 - Currently, it is compatible with all mods published on this forum.*

 **Q3 - Are there any mods recommended to go with it?**
 *A3 - The Turtle HD Projet Patch-A is an important foundation, so it's highly recommended to also play with it if you want to get as many HD models as possible.*

 **DOWNLOAD**

[Patch-H](https://drive.google.com/file/d/1CIvMgTALrQSmoLmr4gL3Zw8y-VXaIz2h/view?usp=sharing) *(Last updated 22th June 2024)*

 ***Note :** To install, simply navigate to your Turtle WoW install folder, open the /Data/ folder, and drop these MPQs in. Simple as that!*

*Last edited by Mouzai on Sun Jun 23, 2024 9:53 pm, edited 1 time in total.*

## Post 97685 by Redmagejoe (Grandmaster of Forum PvP) — 2024-06-23T20:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97685#p97685 | page 36 | era: pre-1.18.1 -->

> **Mouzai wrote: Sun Jun 23, 2024 8:00 pm**
>

I can see you've put quite a bit of work into this, Mouzai.  Would you be averse to having your patch merged into the main branch of the project?  Do you have plans for further changes?  Does your fork have any DBC edits that may need to be reviewed before any such merge?

Thanks in advance for your contributions.  The Turtle HD Project is, and has always been, a community-driven project.

## Post 97687 by Mouzai — 2024-06-23T21:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97687#p97687 | page 37 | era: pre-1.18.1 -->

I will be honored if my patch is merged into the project !
To my knowledge, no DBC edits are required.

Currently I don't have any plans yet but I'm open to suggestions.

## Post 97700 by Redmagejoe (Grandmaster of Forum PvP) — 2024-06-24T01:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97700#p97700 | page 37 | era: pre-1.18.1 -->

> **Mouzai wrote: Sun Jun 23, 2024 9:13 pm**
> I will be honored if my patch is merged into the project !
>  To my knowledge, no DBC edits are required.
>
>  Currently I don't have any plans yet but I'm open to suggestions.

I will need to set aside some time to do some QA review of it, but afterwards, I will gladly add these to the main branch and push an updated patch-A.

## Post 97701 by Bigbearimpact — 2024-06-24T03:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97701#p97701 | page 37 | era: pre-1.18.1 -->

Love u guys! Thanks for the awesome MOD!!  turtle_in_love_head   turtle_in_love_head

## Post 97720 by Redmagejoe (Grandmaster of Forum PvP) — 2024-06-24T09:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97720#p97720 | page 37 | era: pre-1.18.1 -->

> **Mouzai wrote: Sun Jun 23, 2024 9:13 pm**
> I will be honored if my patch is merged into the project !
>  To my knowledge, no DBC edits are required.
>
>  Currently I don't have any plans yet but I'm open to suggestions.

There's a lot of clean-up I've been doing, like removing .anim and .skin files (these are not used prior to Wrath, and are instead baked into the m2 files themselves during conversion), as well as leftover converter files. Removal of redundancies, like gryphon models and wolf models and textures which should already be in.  Other than that, pretty much everything can be merged as-is.

There are a few decisions I've made for exclusions, such as the Druid Cat form change which removes the Night Elf specific Druid appearance.  I can, however, use the assets for the lynx by making modifications to what model and texture the lynx uses in the DBC file.  Also, because the packmule has been beefed up into a very NOT donkey-looking horse, I've opted to exclude that from the patch.

With these changes and some more testing, I think everything should make for a nice addition to the Turtle HD Project.  If you manage to find a way to downport anything else that's currently in Turtle and still using vanilla assets, please keep me apprised and we'll see how far we can push this mod's limits.

## Post 97732 by Redmagejoe (Grandmaster of Forum PvP) — 2024-06-24T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97732#p97732 | page 37 | era: pre-1.18.1 -->

I have generated a playtest patch on the Test branch of Turtle HD and posted a link in this post and on the OP.  This is patch-Z.MPQ and is ONLY for playtesting.  I would like to ask the community to thoroughly make use of this and report any bugs.

If all comes back OK, I will merge the Test branch into the Main branch and release an update for patch-A.MPQ. At that time, please be sure to delete patch-Z or it will interfere with the proper behavior of the mod.

[https://github.com/redmagejoe/TurtleHD/ ... atch-Z.MPQ](https://github.com/redmagejoe/TurtleHD/releases/download/v0.0.18-test.1/patch-Z.MPQ)

## Post 97736 by Foobs (Barrens Chat Casualty) — 2024-06-24T12:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97736#p97736 | page 37 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Jun 24, 2024 11:13 am**
> I have generated a playtest patch on the Test branch of Turtle HD and posted a link in this post and on the OP.  This is patch-Z.MPQ and is ONLY for playtesting.  I would like to ask the community to thoroughly make use of this and report any bugs.
>
>  If all comes back OK, I will merge the Test branch into the Main branch and release an update for patch-A.MPQ. At that time, please be sure to delete patch-Z or it will interfere with the proper behavior of the mod.
>
>  [https://github.com/redmagejoe/TurtleHD/ ... atch-Z.MPQ](https://github.com/redmagejoe/TurtleHD/releases/download/v0.0.18-test.1/patch-Z.MPQ)

Do you have any patch notes you wanna share maybe, thanks.

## Post 97740 by Redmagejoe (Grandmaster of Forum PvP) — 2024-06-24T13:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97740#p97740 | page 37 | era: pre-1.18.1 -->

> **Foobs wrote: Mon Jun 24, 2024 12:45 pm**
> Do you have any patch notes you wanna share maybe, thanks.

[https://github.com/redmagejoe/TurtleHD/ ... .18-test.1](https://github.com/redmagejoe/TurtleHD/compare/v0.0.17...v0.0.18-test.1)

Click on each individual commit for more detailed breakdown of each commit.  Will post a proper full changelog on any release (see: main branch) versions.

## Post 97767 by Specialghost — 2024-06-24T21:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97767#p97767 | page 37 | era: pre-1.18.1 -->

Would it be possible to provide seperate patches just for the spell effects and the music pack instead of having to use the whole Patch-A? I really don't like the HD models.

## Post 97769 by Redmagejoe (Grandmaster of Forum PvP) — 2024-06-24T22:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97769#p97769 | page 37 | era: pre-1.18.1 -->

> **Specialghost wrote: Mon Jun 24, 2024 9:20 pm**
> Would it be possible to provide seperate patches just for the spell effects and the music pack instead of having to use the whole Patch-A? I really don't like the HD models.

Inevitably I'd see a message like this when I finally removed the "no, we will not maintain separate patches" message.

If you don't like everything in patch-A, you're going to have to pick it apart yourself.

## Post 97817 by Specialghost — 2024-06-25T11:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97817#p97817 | page 37 | era: pre-1.18.1 -->

Oh I didn't mean to sound snobby. It's just that picking apart something that I haven't created myself seems overwhelming. Anyway, no sweat. I'll just skip this patch entirely then.

## Post 97820 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2024-06-25T15:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97820#p97820 | page 37 | era: pre-1.18.1 -->

> **Specialghost wrote: Tue Jun 25, 2024 11:36 am**
> Oh I didn't mean to sound snobby. It's just that picking apart something that I haven't created myself seems overwhelming. Anyway, no sweat. I'll just skip this patch entirely then.

Just so you know - it's really easy to do yourself even if you barely know what a MPQ file is.

## Post 97822 by Galendor (Patch Note Conspiracy Theorist) — 2024-06-25T16:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97822#p97822 | page 37 | era: pre-1.18.1 -->

> **Mouzai wrote: Sun Jun 23, 2024 8:00 pm**
> *All variations : Gnolls, Wolfs, Boars, Darkhound, Dragon Whelps, Lynxes, Striders, Human Boy, Human Girl.*
>
>  *Human Mount 60 % (Horses), High Elf Mount 60% & 100% (Unicorns), Paladin Mount 60%, All other Warhorses (like Scarlet Charger), Warlock Mount 60% & 100%, Dwarf Mount 60% (Ram), Mule.*

Hey, that's a very good work!
One question though: do you concider updating some models that already exist in HD mod? For example, there are BfA models for 60% night elf mounts, classic-like HD crabs, vultures, turtles, etc. Maybe even foxes?

## Post 98005 by Redmagejoe (Grandmaster of Forum PvP) — 2024-06-27T23:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98005#p98005 | page 37 | era: pre-1.18.1 -->

Current known issue with Mouzai's update: Zhevras do not have proper texture.  If we cannot get striped textures, I may simply have to remove those assets to set Zhevras back to vanilla.

## Post 98176 by Faustorgo (Barrens Chat Casualty) — 2024-06-30T03:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98176#p98176 | page 37 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Jun 27, 2024 11:14 pm**
> Current known issue with Mouzai's update: Zhevras do not have proper texture.  If we cannot get striped textures, I may simply have to remove those assets to set Zhevras back to vanilla.

Also affect the Scarlet Charger Horse from Turtle Donation Store, sadly

## Post 98179 by Redmagejoe (Grandmaster of Forum PvP) — 2024-06-30T06:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98179#p98179 | page 37 | era: pre-1.18.1 -->

Current todo: Keep an eye on zebra creatures and look into what assets affected Scarlet Charger; mess with model scale sizes for Spectral Tiger, though in the past I've found that I cannot modify scales clientside due to serverside scale overrides (such as with Infernals)

## Post 98199 by Mouzai — 2024-06-30T12:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98199#p98199 | page 37 | era: pre-1.18.1 -->

> **Faustorgo wrote: Sun Jun 30, 2024 3:06 am**
> > **Redmagejoe wrote: Thu Jun 27, 2024 11:14 pm**
> > Current known issue with Mouzai's update: Zhevras do not have proper texture.  If we cannot get striped textures, I may simply have to remove those assets to set Zhevras back to vanilla.
>
>  Also affect the Scarlet Charger Horse from Turtle Donation Store, sadly

It's intentional. Warhorses have all been replaced and this is what they look like :
![Image](https://i.imgur.com/LMViSwh.png)

## Post 98200 by Mouzai — 2024-06-30T13:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98200#p98200 | page 37 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Jun 30, 2024 6:09 am**
> Current todo: Keep an eye on zebra creatures and look into what assets affected Scarlet Charger; mess with model scale sizes for Spectral Tiger, though in the past I've found that I cannot modify scales clientside due to serverside scale overrides (such as with Infernals)

We have two solutions to solve the zebra problem:
 1 - Delete the "unicorn" folder and leave only the "zebramount" folder
Consequences: the "zebra" mob will keep its vanilla model and any enventual "unicorn" mobs will be in their vanilla model but the unicorn mounts will always be HD

 2 - Disassociate the zebra and the unicorn model in the server.
Consequences : Zebra keep its vanilla model, all Unicorns have an HD model

## Post 98210 by Faustorgo (Barrens Chat Casualty) — 2024-06-30T15:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98210#p98210 | page 37 | era: pre-1.18.1 -->

> **Mouzai wrote: Sun Jun 30, 2024 12:28 pm**
> > **Faustorgo wrote: Sun Jun 30, 2024 3:06 am**
> > > **Redmagejoe wrote: Thu Jun 27, 2024 11:14 pm**
> > > Current known issue with Mouzai's update: Zhevras do not have proper texture.  If we cannot get striped textures, I may simply have to remove those assets to set Zhevras back to vanilla.
> >
> >  Also affect the Scarlet Charger Horse from Turtle Donation Store, sadly
>
>   It's intentional. Warhorses have all been replaced and this is what they look like :
>  ![Image](https://i.imgur.com/LMViSwh.png)

I see, look less cute, but i understnd the upgrade :D

## Post 98280 by Ultizers — 2024-07-01T04:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98280#p98280 | page 37 | era: pre-1.18.1 -->

How difficult would it be to convert a lot of these textures to PBR format? Would look great with the RTX Remix patch coming up.

## Post 98312 by Wideworld (Barrens Chat Casualty) — 2024-07-01T12:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98312#p98312 | page 37 | era: pre-1.18.1 -->

> **Wideworld wrote: Sat May 18, 2024 11:52 am**
> Sometimes this critical error occurs, usually happens in cities.
>  ![Image](https://i.postimg.cc/CLC6YF54/Error2.png)

Today it occurred again, but didn't come out when I removed patch-A. Is it the problem with this patch?

This application has encountered a critical error:
ERROR #132 (0x85100084) Fatal Exception
...
The memory could not be "read".

## Post 98325 by Sauceman89 — 2024-07-01T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98325#p98325 | page 37 | era: pre-1.18.1 -->

> **Wideworld wrote: Mon Jul 01, 2024 12:01 pm**
> > **Wideworld wrote: Sat May 18, 2024 11:52 am**
> > Sometimes this critical error occurs, usually happens in cities.
> >  ![Image](https://i.postimg.cc/CLC6YF54/Error2.png)
>
>   Today it occurred again, but didn't come out when I removed patch-A. Is it the problem with this patch?
>
>  This application has encountered a critical error:
>  ERROR #132 (0x85100084) Fatal Exception
>  ...
>  The memory could not be "read".

A guildmate of mine also had this issue today so I went and checked it out. Right as I appeared in Steamwheedle Port I got that same error. However, I did not get that error again when I logged back in. I wonder if its because of the obstacle course still there from Vrograg's summer event. Could be too many doodads trying to load that it causes that memory cannot be read error. Not 100% sure.

## Post 98326 by Redmagejoe (Grandmaster of Forum PvP) — 2024-07-01T18:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98326#p98326 | page 37 | era: pre-1.18.1 -->

This is largely a client issue, not specifically an issue with HD.  It's simply that, even with the large address aware patch, the client doesn't handle large memory demands well.  The HD patch exacerbates this with its higher memory demands for assets, and when the game wishes to load too many environmental objects at once, a crash can happen.

I have it on good authority that client limitations such as this will not be an issue by next year, however, so please be patient in the interim.

## Post 98640 by Idiots009 — 2024-07-06T08:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98640#p98640 | page 37 | era: pre-1.18.1 -->

Goblin HD model when?

## Post 98642 by Redmagejoe (Grandmaster of Forum PvP) — 2024-07-06T09:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98642#p98642 | page 37 | era: pre-1.18.1 -->

> **Idiots009 wrote: Sat Jul 06, 2024 8:07 am**
> Goblin HD model when?

It's already in.

## Post 98650 by Mouzai — 2024-07-06T11:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98650#p98650 | page 37 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Mon Jun 24, 2024 9:55 am**
> > **Mouzai wrote: Sun Jun 23, 2024 9:13 pm**
> > I will be honored if my patch is merged into the project !
> >  To my knowledge, no DBC edits are required.
> >
> >  Currently I don't have any plans yet but I'm open to suggestions.
>
>   There's a lot of clean-up I've been doing, like removing .anim and .skin files (these are not used prior to Wrath, and are instead baked into the m2 files themselves during conversion), as well as leftover converter files. Removal of redundancies, like gryphon models and wolf models and textures which should already be in.  Other than that, pretty much everything can be merged as-is.
>
>  There are a few decisions I've made for exclusions, such as the Druid Cat form change which removes the Night Elf specific Druid appearance.  I can, however, use the assets for the lynx by making modifications to what model and texture the lynx uses in the DBC file.  Also, because the packmule has been beefed up into a very NOT donkey-looking horse, I've opted to exclude that from the patch.
>
>  With these changes and some more testing, I think everything should make for a nice addition to the Turtle HD Project.  If you manage to find a way to downport anything else that's currently in Turtle and still using vanilla assets, please keep me apprised and we'll see how far we can push this mod's limits.

Hello Redmagejoe,

I tested your Patch-Z and I see that you have remove  my normal wolf model (human one) to keep a draenor wolf model (the orc one with big tusks).
I think the wolf that we can see all around Elwynn Forest should be more "normal".
Besides the model I added is closer to the original one as you can see :
![Image](https://i.imgur.com/bsKKUIj.jpeg)

However, I recommend using your wolf model to replace Prowler and Worgs because both models have tusks  :
![Image](https://i.imgur.com/q42J7WW.png)

Also, I see that you removed my "Gryphon_Mount.M2" file and now the gryphon NPC next to the dwarf at Goldshire uses the old model as you can see :
![Image](https://i.imgur.com/1pvvfeL.jpeg)

## Post 98651 by Idiots009 — 2024-07-06T12:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98651#p98651 | page 37 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Jul 06, 2024 9:08 am**
> > **Idiots009 wrote: Sat Jul 06, 2024 8:07 am**
> > Goblin HD model when?
>
>   It's already in.

I mean goblins from Legion, not cata

## Post 98663 by Mouzai — 2024-07-06T17:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98663#p98663 | page 37 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Jun 30, 2024 6:09 am**
> Current todo: Keep an eye on zebra creatures and look into what assets affected Scarlet Charger; mess with model scale sizes for Spectral Tiger, though in the past I've found that I cannot modify scales clientside due to serverside scale overrides (such as with Infernals)

Here is the result of the work I did about the Zebra.
Fortunately, I started from an already existing base that I adjusted.

![Image](https://i.imgur.com/zGAh7Hy.png)

The zebra texture for the Unicorn folder :

[embed: //drive.google.com/file/d/1wljbgKxkJKcgWaQHPmbafPfDMqTYVWaT/preview]

## Post 98666 by Faustorgo (Barrens Chat Casualty) — 2024-07-06T17:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98666#p98666 | page 37 | era: pre-1.18.1 -->

> **Mouzai wrote: Sat Jul 06, 2024 11:50 am**
> > **Redmagejoe wrote: Mon Jun 24, 2024 9:55 am**
> > > **Mouzai wrote: Sun Jun 23, 2024 9:13 pm**
> > > I will be honored if my patch is merged into the project !
> > >  To my knowledge, no DBC edits are required.
> > >
> > >  Currently I don't have any plans yet but I'm open to suggestions.
> >
> >   There's a lot of clean-up I've been doing, like removing .anim and .skin files (these are not used prior to Wrath, and are instead baked into the m2 files themselves during conversion), as well as leftover converter files. Removal of redundancies, like gryphon models and wolf models and textures which should already be in.  Other than that, pretty much everything can be merged as-is.
> >
> >  There are a few decisions I've made for exclusions, such as the Druid Cat form change which removes the Night Elf specific Druid appearance.  I can, however, use the assets for the lynx by making modifications to what model and texture the lynx uses in the DBC file.  Also, because the packmule has been beefed up into a very NOT donkey-looking horse, I've opted to exclude that from the patch.
> >
> >  With these changes and some more testing, I think everything should make for a nice addition to the Turtle HD Project.  If you manage to find a way to downport anything else that's currently in Turtle and still using vanilla assets, please keep me apprised and we'll see how far we can push this mod's limits.
>
>
>  Hello Redmagejoe,
>
>  I tested your Patch-Z and I see that you have remove  my normal wolf model (human one) to keep a draenor wolf model (the orc one with big tusks).
>  I think the wolf that we can see all around Elwynn Forest should be more "normal".
>  Besides the model I added is closer to the original one as you can see :
>  ![Image](https://i.imgur.com/bsKKUIj.jpeg)
>
>  However, I recommend using your wolf model to replace Prowler and Worgs because both models have tusks  :
>  ![Image](https://i.imgur.com/q42J7WW.png)
>
>
>  Also, I see that you removed my "Gryphon_Mount.M2" file and now the gryphon NPC next to the dwarf at Goldshire uses the old model as you can see :
>  ![Image](https://i.imgur.com/1pvvfeL.jpeg)

Loe for the Patch A wolf and man the zebra looks astonish :D keep the good work, Btw friend, theres a chance to have a upgrade model for the Ice trolls from dun morogh around? the muscular ones?

## Post 98687 by Redmagejoe (Grandmaster of Forum PvP) — 2024-07-06T18:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98687#p98687 | page 37 | era: pre-1.18.1 -->

> **Mouzai wrote: Sat Jul 06, 2024 11:50 am**
>

I''ll try to play around with CreatureDisplayInfo.dbc for the wolves and worgs, and see about re-implementing the new Zhevras.  The gryphon and wolves were removed, admittedly, as I assumed them to be redundancies.  Seeing that there are more nuanced differences, I'll take a closer look.

I don't really like the approach of simply overwriting assets for these two cases, though, and would rather keep both sets of assets (which, unless I'm mistaken, both the gryphon and the wolf should already be IN patch-A), but use CreatureDisplayInfo to properly assigned the textures they use.  The wolves should be using the correct model in CreatureModelData, but then serverside DisplayID may be what's determining their texture.

I would have to tinker with this on a case-by-case (wolf-by-wolf) basis to achieve what you've suggested. If you can give a digest of which wolves you think should remain as-is on HD, and which ones should be changed to the "scarred, non-glowy eyes" variant, I'll see if it's feasible based on what the server has assigned what displayIDs to.

## Post 98699 by Redmagejoe (Grandmaster of Forum PvP) — 2024-07-06T19:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98699#p98699 | page 37 | era: pre-1.18.1 -->

Also, it would seem that I no longer have to keep my silence on Turtle 2.0 since the trailer has been dropped:
[embed: https://www.youtube.com/embed/MlzOOiJ4puk]

I will assume that I will have the support of the Client Dev Team behind me on the Turtle HD patch seeing as my upkeep on the patch was requested by Team members. If the Team does indeed wish to officially endorse this patch, then I would welcome Team contributions to the patch itself.

## Post 98716 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-07-06T20:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98716#p98716 | page 37 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Jul 06, 2024 7:00 pm**
> Also, it would seem that I no longer have to keep my silence on Turtle 2.0 since the trailer has been dropped:
> [embed: https://www.youtube.com/embed/MlzOOiJ4puk]
>
>
>  I will assume that I will have the support of the Client Dev Team behind me on the Turtle HD patch seeing as my upkeep on the patch was requested by Team members. If the Team does indeed wish to officially endorse this patch, then I would welcome Team contributions to the patch itself.

My my...your patch is going to be implemented as base in the TWoW 2.0?
Holy God...I can't believe what I saw...

## Post 98731 by Faustorgo (Barrens Chat Casualty) — 2024-07-06T22:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98731#p98731 | page 37 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Jul 06, 2024 7:00 pm**
> Also, it would seem that I no longer have to keep my silence on Turtle 2.0 since the trailer has been dropped:
> [embed: https://www.youtube.com/embed/MlzOOiJ4puk]
>
>
>  I will assume that I will have the support of the Client Dev Team behind me on the Turtle HD patch seeing as my upkeep on the patch was requested by Team members. If the Team does indeed wish to officially endorse this patch, then I would welcome Team contributions to the patch itself.

hell yeah friend, twow client + plus hd global projects combine will be the BOOM!

## Post 98753 by Redmagejoe (Grandmaster of Forum PvP) — 2024-07-07T05:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98753#p98753 | page 37 | era: pre-1.18.1 -->

I've pushed an update to the test version and updated the link on the first post.  This new patch-Z should put the Gryphon_Mount.m2 back in and attempts to re-stripe the zebras.  I will test to see if their walk cycles are still broken and, if so, the model will need to be re-imported or converted to address these missing animations.

As for wolves and worgs, this will require DBC work to achieve desirable effects, so an update will have to wait on that front.

*Last edited by Redmagejoe on Mon Jul 08, 2024 9:51 pm, edited 1 time in total.*

## Post 98940 by Redmagejoe (Grandmaster of Forum PvP) — 2024-07-08T21:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98940#p98940 | page 37 | era: pre-1.18.1 -->

> **Mouzai wrote: Sat Jul 06, 2024 5:00 pm**
>

On latest patch-Z:

Zebras / unicorns using this new model still do not have a walk cycle (but do have a run cycle), and do not have a proper death animation. If these are present on the original creatures from modern retail, I will need a new update model with these broken animations baked into the m2 before I can include this in the release version.

Gryphons have been restored.

Wolves/worgs will remain as-is until a more detailed approach can be discussed.

## Post 98997 by Thule (Barrens Chat Casualty) — 2024-07-09T14:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98997#p98997 | page 37 | era: pre-1.18.1 -->

Hi can I ask what exactly contains music pack in Patch-A?
Can I extract those music files using MPQ editor and listen to them or is there a list of specific tracks somewhere?
Similar question but about patch-C.

Sorry if it already been answered somewhere in this topic.
Thanks for reply!

## Post 99012 by Doglord — 2024-07-09T15:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99012#p99012 | page 38 | era: pre-1.18.1 -->

Hi thanx for you work guys!

Im not sure if the mod is working or not - the textures still seem blurred. Ive installed it by copying the .mpg inside the /data folder.

Is there a way to validate that it's loaded (or not) ? Thank you!

## Post 99037 by Watchers3d (Barrens Chat Casualty) — 2024-07-09T19:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99037#p99037 | page 38 | era: pre-1.18.1 -->

> **Thule wrote: Tue Jul 09, 2024 2:05 pm**
> Hi can I ask what exactly contains music pack in Patch-A?
>  Can I extract those music files using MPQ editor and listen to them or is there a list of specific tracks somewhere?
>  Similar question but about patch-C.
>
>  Sorry if it already been answered somewhere in this topic.
>  Thanks for reply!

You can absolutely. Path is Patch-A/sound/music/, and further it's divided to 2 folders - CityMusic and ZoneMusic. It's in .mp3 format too. The titles of these tracks itself can give a solid clue on what to google search too if needed.

Within Patch-C there are only weapon related sounds.

> **Doglord wrote: Tue Jul 09, 2024 3:50 pm**
> Hi thanx for you work guys!
>
>  Im not sure if the mod is working or not - the textures still seem blurred. Ive installed it by copying the .mpg inside the /data folder.
>
>  Is there a way to validate that it's loaded (or not) ? Thank you!

Greetings  smiling_turtle_head . Textures might be perceived as blurry because we are hindered by 1.12 client. Texture resolution is hardcoded within executable for most cases, so as of today we can't have giga-sharp character textures for example. This thing might clear itself out next year though.

## Post 99044 by Thule (Barrens Chat Casualty) — 2024-07-09T19:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99044#p99044 | page 38 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Jul 09, 2024 7:02 pm**
> > **Thule wrote: Tue Jul 09, 2024 2:05 pm**
> > Hi can I ask what exactly contains music pack in Patch-A?
> >  Can I extract those music files using MPQ editor and listen to them or is there a list of specific tracks somewhere?
> >  Similar question but about patch-C.
> >
> >  Sorry if it already been answered somewhere in this topic.
> >  Thanks for reply!
>
>   You can absolutely. Path is Patch-A/sound/music/, and further it's divided to 2 folders - CityMusic and ZoneMusic. It's in .mp3 format too. The titles of these tracks itself can give a solid clue on what to google search too if needed.
>
>  Within Patch-C there are only weapon related sounds.
>
>  Thanks!!!   satisfied_turtle_head

## Post 99155 by Galfear — 2024-07-11T05:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99155#p99155 | page 38 | era: pre-1.18.1 -->

Hey guys,

In the github Read.me there's Patch A, B, and C. The link to Patch A is missing in the Read.me but I downloaded it from this post. Patch B, and C download links don't seem to be working and G-Drive says it's missing. Then there's Patch Z in the releases, it's mentioned that it's a play test patch, but what is it exactly? Is it a compilation of patch a, b, and c?

## Post 99157 by Redmagejoe (Grandmaster of Forum PvP) — 2024-07-11T06:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99157#p99157 | page 38 | era: pre-1.18.1 -->

> **Galfear wrote: Thu Jul 11, 2024 5:56 am**
> Patch B, and C download links don't seem to be working and G-Drive says it's missing. Then there's Patch Z in the releases, it's mentioned that it's a play test patch, but what is it exactly? Is it a compilation of patch a, b, and c?

patch-B and patch-C download links on the first post work completely fine.

patch-Z is the current test version of patch-A attempting to add missing assets that Mouzai incorporated, and is going through a testing period to ensure any bugs are fixed before I officially merge it into the main branch (patch-A) for "public release".  I encourage anyone using TurtleHD to use patch-Z and report any bugs they find here.

## Post 99158 by Galfear — 2024-07-11T07:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99158#p99158 | page 38 | era: pre-1.18.1 -->

Right! I saw the preview unavailable, and my silly brain told me it wasn't working.
Managed to download B, and C. I've added Patch A and Z to my Data directory, but I'm guessing having both of them is redundant. I will remove A and keep B, C, and Z.

Thanks a bunch for the info. :)

## Post 99241 by Redmagejoe (Grandmaster of Forum PvP) — 2024-07-12T06:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99241#p99241 | page 38 | era: pre-1.18.1 -->

> **Mouzai wrote: Sun Jun 23, 2024 9:13 pm**
>

Bug Report: Armored boars do not work properly as they do not have armor pieces as individual models or greebils.  As such, the new model would need a custom texture so as not to result in the broken texture wrapping that is currently most visible in places like RFK. If this cannot be remedied, the boar upgrade may need to be excluded from any future release.

## Post 99326 by Bgnome — 2024-07-12T23:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99326#p99326 | page 38 | era: pre-1.18.1 -->

![Image](https://i.ibb.co/dtn5HTD/gray-tallstrider.jpg)
Gray Tallstrider mount has been broken since Mouzai integration.

## Post 99377 by Xjunorx — 2024-07-13T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99377#p99377 | page 38 | era: pre-1.18.1 -->

I having some glitches in AQ, textures stretching across the screen.

## Post 99385 by Bgnome — 2024-07-13T21:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99385#p99385 | page 38 | era: pre-1.18.1 -->

Turns out, the Gray Tallstrider blp file is missing from the Tallstrider folder.  I was able to get it to work by renaming TallStriderSkinblack.blp to TallStriderSkingray.blp.  I tried inserting a copy of the the black texture renamed to gray instead, but it broke the patch.
![Image](https://i.ibb.co/3N531W7/gray-tallstrider-2.jpg)

## Post 99453 by Alchemister — 2024-07-14T20:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99453#p99453 | page 38 | era: pre-1.18.1 -->

What are some frames and nameplates changed in patch A for? Why is it not mentioned?   unhappy_turtle_head
Does this have some purpose or can I safely delete it from MPQ?

<https://ibb.co/9hChd9F>

## Post 99494 by Watchers3d (Barrens Chat Casualty) — 2024-07-15T09:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99494#p99494 | page 38 | era: pre-1.18.1 -->

> **Alchemister wrote: Sun Jul 14, 2024 8:12 pm**
> What are some frames and nameplates changed in patch A for? Why is it not mentioned?   unhappy_turtle_head
>  Does this have some purpose or can I safely delete it from MPQ?
>
>  <https://ibb.co/9hChd9F>

Download MPQ Editor.
Delete "Tooltips" folder from patch-A. Path to this folder is patch-A/interface/.
Press "compact archive" button and answer yes to any questions it asks.

Should do the trick probably.

## Post 99500 by Dangard — 2024-07-15T11:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99500#p99500 | page 38 | era: pre-1.18.1 -->

Is it possible to somehow remove all sounds in the latest versions? I tried to delete the folder with sounds in the editor, but then the game itself is silent, there are no vanilla sounds of skills. I changed the listfile, tried to delete spell.dbc, but still the vanilla sounds do not return, maybe someone will tell me or throw off the file with the deleted sounds.

## Post 99501 by Watchers3d (Barrens Chat Casualty) — 2024-07-15T11:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99501#p99501 | page 38 | era: pre-1.18.1 -->

> **Dangard wrote: Mon Jul 15, 2024 11:05 am**
> Is it possible to somehow remove all sounds in the latest versions? I tried to delete the folder with sounds in the editor, but then the game itself is silent, there are no vanilla sounds of skills. I changed the listfile, tried to delete spell.dbc, but still the vanilla sounds do not return, maybe someone will tell me or throw off the file with the deleted sounds.

Spell sounds? There's a [guide](https://github.com/redmagejoe/TurtleHD?tab=readme-ov-file#i-want-the-player-character-models-and-textures-but-i-dont-want-the-new-spell-effects-and-sounds) on how to do it. Just go through this steps, and then, in the end press "compact archive" button and answer yes to any questions software asks. Close MPQ editor and it should work. If you don't want any new sounds, then just delete whole Sounds folder, among other things mentioned.

## Post 99503 by Dangard — 2024-07-15T11:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99503#p99503 | page 38 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Jul 15, 2024 11:29 am**
> > **Dangard wrote: Mon Jul 15, 2024 11:05 am**
> > Is it possible to somehow remove all sounds in the latest versions? I tried to delete the folder with sounds in the editor, but then the game itself is silent, there are no vanilla sounds of skills. I changed the listfile, tried to delete spell.dbc, but still the vanilla sounds do not return, maybe someone will tell me or throw off the file with the deleted sounds.
>
>   Spell sounds? There's a [guide](https://github.com/redmagejoe/TurtleHD?tab=readme-ov-file#i-want-the-player-character-models-and-textures-but-i-dont-want-the-new-spell-effects-and-sounds) on how to do it. Just go through this steps, and then, in the end press "compact archive" button and answer yes to any questions software asks. Close MPQ editor and it should work. If you don't want any new sounds, then just delete whole Sounds folder, among other things mentioned.

Thanks, 2 seconds ago I tried to remove the ripe textures myself and voila, the vanilla sounds are back))

## Post 99511 by Dangard — 2024-07-15T13:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99511#p99511 | page 38 | era: pre-1.18.1 -->

Please tell me, in theory, and the voice acting of the characters be changed through such a patch? I want my orc to say other phrases?

## Post 99527 by Alchemister — 2024-07-15T16:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99527#p99527 | page 38 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Jul 15, 2024 9:59 am**
> Should do the trick probably.

I know how to delete it, thanks :)
I'm asking what it was done for, if it's patches with models. Maybe these textures are involved somewhere else (in some DBCs)

## Post 99558 by Jstryker47 — 2024-07-15T21:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99558#p99558 | page 38 | era: pre-1.18.1 -->

Hi.  First time poster.  I just wanted to ask, this probably doesn't need to be priority #1 or anything, but is there going to be some work done on the models' feet?  I've found that some models - female night elves in particular, have nasty-looking feet that aren't anything like what they had in Legion at all.

![Image](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a38b2bcb-032a-4e76-948a-1f6f359f3ba5/dhs8pfm-fde6574d-dac9-4fb6-b426-ebc74375e753.png/v1/fill/w_1130,h_707,q_70,strp/night_elf_feet_by_jackstryker_dhs8pfm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAxIiwicGF0aCI6IlwvZlwvYTM4YjJiY2ItMDMyYS00ZTc2LTk0OGEtMWY2ZjM1OWYzYmE1XC9kaHM4cGZtLWZkZTY1NzRkLWRhYzktNGZiNi1iNDI2LWViYzc0Mzc1ZTc1My5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5zQWmbwMXQElywYllaiUdf9-wCEfnD9rTElYGIEVvwM)

(Although, to be honest... Blizz didn't give female night elves' feet that much of an improvement, really.  The poor girls even had their pinkie toes cut off, when wearing junglewalker sandals.)

## Post 99561 by Watchers3d (Barrens Chat Casualty) — 2024-07-15T22:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99561#p99561 | page 38 | era: pre-1.18.1 -->

> **Dangard wrote: Mon Jul 15, 2024 1:21 pm**
> Please tell me, in theory, and the voice acting of the characters be changed through such a patch? I want my orc to say other phrases?

Well. In theory, yes. Such things could be made as an addon too I suppose (and probably it would be better as an addon). Didn't encounter any mods/addons like that though myself.

> **Alchemister wrote: Mon Jul 15, 2024 4:10 pm**
> > **Watchers3d wrote: Mon Jul 15, 2024 9:59 am**
> > Should do the trick probably.
>
>   I know how to delete it, thanks :)
>  I'm asking what it was done for, if it's patches with models. Maybe these textures are involved somewhere else (in some DBCs)

Oh. Sorry. Dunno. Maybe someone else can give an answer to why.

> **Jstryker47 wrote: Mon Jul 15, 2024 9:48 pm**
> Hi.  First time poster.  I just wanted to ask, this probably doesn't need to be priority #1 or anything, but is there going to be some work done on the models' feet?  I've found that some models - female night elves in particular, have nasty-looking feet that aren't anything like what they had in Legion at all.
>
>  (Although, to be honest... Blizz didn't give female night elves' feet that much of an improvement, really.  The poor girls even had their pinkie toes cut off, when wearing junglewalker sandals.)

Unfortunately, as of today nothing can be done about it. There's no bare feet geoset in vanilla. It was added in later expansions.

## Post 99618 by Gous — 2024-07-16T09:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99618#p99618 | page 38 | era: pre-1.18.1 -->

I wish you could use the old Walking Animations, thats why i dont use it ![😬](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f62c.svg)
Still great Mod, its incredible how much can be done with the old Client. ![😁](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f601.svg)

## Post 99644 by Daedalus007 (Patch Note Conspiracy Theorist) — 2024-07-16T16:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99644#p99644 | page 38 | era: pre-1.18.1 -->

> **Jstryker47 wrote: Mon Jul 15, 2024 9:48 pm**
> Hi.  First time poster.  I just wanted to ask, this probably doesn't need to be priority #1 or anything, but is there going to be some work done on the models' feet?  I've found that some models - female night elves in particular, have nasty-looking feet that aren't anything like what they had in Legion at all.
>
>  (Although, to be honest... Blizz didn't give female night elves' feet that much of an improvement, really.  The poor girls even had their pinkie toes cut off, when wearing junglewalker sandals.)

Most normal people aren't looking at their character's feet.  Whatever your fetish/kinks are, please keep them off the forums and remain on topic.
As far as the actual model-editing goes, that requires some DBC edits and other complex technical solutions to get going.  In addition since MOST normal players aren't staring at character feet, the polygon-limit for vanilla client is instead used on the actual noticeable parts of the characters such as face, head, hair, ears, etc.

And no, there is no demand in the RP community for barefooted characters to have 'beautiful' feet.  It is what it is.

## Post 99736 by Venomblood — 2024-07-17T09:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99736#p99736 | page 38 | era: pre-1.18.1 -->

Hi everyone, new player here!
I downloaded the vanillatweaks + all three HD patches and the game went from 180fps locked to around 65-70 in Stormwind. I'm using a 4090 PC that's completely maxed out with specs.

Is it normal that the HD packs/patches plummets the performance of the game so much?

## Post 99744 by Watchers3d (Barrens Chat Casualty) — 2024-07-17T11:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99744#p99744 | page 38 | era: pre-1.18.1 -->

> **Venomblood wrote: Wed Jul 17, 2024 9:31 am**
> Hi everyone, new player here!
>  I downloaded the vanillatweaks + all three HD patches and the game went from 180fps locked to around 65-70 in Stormwind. I'm using a 4090 PC that's completely maxed out with specs.
>
>  Is it normal that the HD packs/patches plummets the performance of the game so much?

You should use vanillafixes dxvk version to fix performance issues. VaniilaTweaks are just tweaks for the most part.
[https://turtle-wow.fandom.com/wiki/Clie ... and_Tweaks](https://turtle-wow.fandom.com/wiki/Client_Fixes_and_Tweaks)

## Post 99763 by Jstryker47 — 2024-07-18T02:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99763#p99763 | page 38 | era: pre-1.18.1 -->

> **Daedalus007 wrote: Tue Jul 16, 2024 4:33 pm**
> > **Jstryker47 wrote: Mon Jul 15, 2024 9:48 pm**
> > Hi.  First time poster.  I just wanted to ask, this probably doesn't need to be priority #1 or anything, but is there going to be some work done on the models' feet?  I've found that some models - female night elves in particular, have nasty-looking feet that aren't anything like what they had in Legion at all.
> >
> >  (Although, to be honest... Blizz didn't give female night elves' feet that much of an improvement, really.  The poor girls even had their pinkie toes cut off, when wearing junglewalker sandals.)
>
>   Most normal people aren't looking at their character's feet.  Whatever your fetish/kinks are, please keep them off the forums and remain on topic.
>  As far as the actual model-editing goes, that requires some DBC edits and other complex technical solutions to get going.  In addition since MOST normal players aren't staring at character feet, the polygon-limit for vanilla client is instead used on the actual noticeable parts of the characters such as face, head, hair, ears, etc.
>
>  And no, there is no demand in the RP community for barefooted characters to have 'beautiful' feet.  It is what it is.

Don't be a jerk.  I was just asking if it could be done.

Also, this IS on topic.  The Legion expansion updated the models' feet, along with the rest of their bodies, and this mod is made for the purpose of updating the models to look like they did in Legion.  Furthermore, you must not have played the old game as much as I have, because for your information, the ability to hide boots has been a very popular feature among players.  In fact, when I played, I rarely got into a dungeon or raid group that didn't have a number of players whose character had bare feet as part of their transmog, nor did I ever hear anyone complain about it.

And by the way, Watchers3d already gave a much more reasonable and polite answer, which I've already accepted.  So butt out.

*Last edited by Jstryker47 on Mon Jul 22, 2024 3:43 pm, edited 1 time in total.*

## Post 99767 by Saraveena — 2024-07-18T05:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99767#p99767 | page 38 | era: pre-1.18.1 -->

First time poster, and I'm not sure if this has been mentioned, but the murloc texture for the deep murk murlocs on the High Elf starting zone is broken. They look kind of blobby lol and very creepy.

## Post 99813 by Vjornex — 2024-07-18T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99813#p99813 | page 38 | era: pre-1.18.1 -->

Hello, I need to know what patches are being used in the Turtle HD project. I only have the A, B and C that appear at the beginning... and I see that there are many links being updated... so I would like to know What are the latest updates that I should have as of today...thanks in advance

## Post 99989 by Daedalus007 (Patch Note Conspiracy Theorist) — 2024-07-20T19:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99989#p99989 | page 38 | era: pre-1.18.1 -->

> **Jstryker47 wrote: Thu Jul 18, 2024 2:27 am**
> *snip*

A WoW model developer (Watchers3D) just told you 'no' in a few more words.  If you care so much about that, so be it.

What I said was correct.  The polygon limit for characters is ~23k polygons or less, usually around 22k or lower.  The devs are doing major polygon updates in the v1.17.2 upcoming patch so any MPQ patches will need to adjust even further down (probably a goal of 20k or less) to allow that buffer and mitigate crashes.

You've already publicly exposed yourself as a creeper obsessed with feet.  Don't feel you need to 'contribute' any more than you already have.

> **Vjornex wrote: Thu Jul 18, 2024 6:10 pm**
> *snip*

You only have the Patches A, B, and C for the TurtleHD project.  There is a 'testing' Patch Z that has some known bugs and issues.  It is only for testing and not really for regular gameplay unless you are ready to report bugs/issues and deal with any crashes.

## Post 100009 by Jstryker47 — 2024-07-21T06:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100009#p100009 | page 38 | era: pre-1.18.1 -->

> **Daedalus007 wrote: Sat Jul 20, 2024 7:19 pm**
> > **Jstryker47 wrote: Thu Jul 18, 2024 2:27 am**
> > *snip*
>
>  A WoW model developer (Watchers3D) just told you 'no' in a few more words.

Wrong.  What they did was give an **actual reason** why it couldn't be done, without directly insulting me - unlike you.  If you had just ignored my post, instead of bullying me, I would have just left the thread alone from there.

## Post 100065 by Daedalus007 (Patch Note Conspiracy Theorist) — 2024-07-21T17:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100065#p100065 | page 38 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Jul 15, 2024 10:18 pm**
> > **Jstryker47 wrote: Mon Jul 15, 2024 9:48 pm**
> > Hi.  First time poster.  I just wanted to ask, this probably doesn't need to be priority #1 or anything, but is there going to be some work done on the models' feet?  I've found that some models - female night elves in particular, have nasty-looking feet that aren't anything like what they had in Legion at all.
> >
> >  (Although, to be honest... Blizz didn't give female night elves' feet that much of an improvement, really.  The poor girls even had their pinkie toes cut off, when wearing junglewalker sandals.)
>
>   Unfortunately, as of today nothing can be done about it. There's no bare feet geoset in vanilla. It was added in later expansions.

> **Jstryker47 wrote: Sun Jul 21, 2024 6:01 am**
> Wrong.  What they did was give an **actual reason** why it couldn't be done, without directly insulting me - unlike you.  If you had just ignored my post, instead of bullying me, I would have just left the thread alone from there.

They told you 'no' using many more words.  Nothing more to it than that.  No your foot fetish is not happening.  Deal with it.  Also learn some reading comprehension.

## Post 100267 by Silwarel — 2024-07-24T16:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100267#p100267 | page 38 | era: pre-1.18.1 -->

Hello guys!

This may be a really dumb question, but I cannot help myself - will this HD patch work with the new turtle client?

Because I am exactly in between regarding the graphics, I like the improved cartoonish style, not the new Unreal one, but also not the old vanilla one.

## Post 100283 by Daedalus007 (Patch Note Conspiracy Theorist) — 2024-07-24T20:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100283#p100283 | page 38 | era: pre-1.18.1 -->

> **Silwarel wrote: Wed Jul 24, 2024 4:34 pm**
> Hello guys!
>  This may be a really dumb question, but I cannot help myself - will this HD patch work with the new turtle client?
>  Because I am exactly in between regarding the graphics, I like the improved cartoonish style, not the new Unreal one, but also not the old vanilla one.

New client (sometime in 2025) will use a new custom file format.  No details have been released yet but all MPQ patches including this one will be required to convert/update to the newer file formats in the UE5 client.  Too early to give details for now.

## Post 100324 by Overberk — 2024-08-28T13:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100324#p100324 | page 38 | era: pre-1.18.1 -->

Hi there, any new updates so far?

## Post 100388 by Redmagejoe (Grandmaster of Forum PvP) — 2024-08-29T23:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100388#p100388 | page 38 | era: pre-1.18.1 -->

> **Overberk wrote: Wed Aug 28, 2024 1:22 pm**
> Hi there, any new updates so far?

I haven't gotten any fixes for the existing bugs on patch-Z, so there's currently no pending update for the official release version.

## Post 100410 by Silwarel — 2024-08-30T10:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100410#p100410 | page 38 | era: pre-1.18.1 -->

> **Daedalus007 wrote: Wed Jul 24, 2024 8:18 pm**
> > **Silwarel wrote: Wed Jul 24, 2024 4:34 pm**
> > Hello guys!
> >  This may be a really dumb question, but I cannot help myself - will this HD patch work with the new turtle client?
> >  Because I am exactly in between regarding the graphics, I like the improved cartoonish style, not the new Unreal one, but also not the old vanilla one.
>
>   New client (sometime in 2025) will use a new custom file format.  No details have been released yet but all MPQ patches including this one will be required to convert/update to the newer file formats in the UE5 client.  Too early to give details for now.

Thank you so much for replying! Geez, I hope it will be possible to convert/update. I would gladly donate some money to the task.

## Post 100480 by ZyVerus — 2024-09-01T16:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100480#p100480 | page 38 | era: pre-1.18.1 -->

> **Film wrote: Tue Jul 25, 2023 11:38 am**
> > **Redmagejoe wrote: Tue Jul 25, 2023 12:28 am**
> > > **Film wrote: Mon Jul 24, 2023 11:32 pm**
> > > A high-level elf hunter, with a bow and arrow in his hand, shoots in the same posture as Hawking
> > >  a particularly twisted neck, looks weird
> >
> >   Do you have a screenshot of this?
>
>  <https://postimg.cc/CBNvyzhQ>
>  [![Image](https://i.postimg.cc/KjXCMMdx/111.png)](https://postimg.cc/CBNvyzhQ)

Hey there, first off I want to say thank you for the work you've put into this and the contribution to the community. I'm running into this same (Quoted) issue after installing Patch A. Any suggestions or possible fixes coming? Thank you in advance.

## Post 100524 by Watchers3d (Barrens Chat Casualty) — 2024-09-02T16:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100524#p100524 | page 39 | era: pre-1.18.1 -->

> **ZyVerus wrote: Sun Sep 01, 2024 4:45 pm**
> Hey there, first off I want to say thank you for the work you've put into this and the contribution to the community. I'm running into this same (Quoted) issue after installing Patch A. Any suggestions or possible fixes coming? Thank you in advance.

Unfortunately that's just how Blizzard artist handled this animation at the time. Since then bow reload animation was changed and in retail version it looks more natural. But in Legion models it's like that.

[embed: //drive.google.com/file/d/1qJVPlQ9cA-4gXYEQTjkmxa4qz4ym9uBq/preview]

## Post 100573 by Daedalus007 (Patch Note Conspiracy Theorist) — 2024-09-04T00:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100573#p100573 | page 39 | era: pre-1.18.1 -->

That neck looks very weird.  Probably should test myself on a female HE hunter but I haven't seen it look that bad in-game.

## Post 100575 by ZyVerus — 2024-09-04T01:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100575#p100575 | page 39 | era: pre-1.18.1 -->

It's so weird. Are we sure that's how it is in Legion? It almost seems like the animations for the model are only showing up on the top half of the skeleton, while the bottom half is rigid and doesn't change from the standing animation. What's strange is I've had it sometimes alternate between a more natural animation that happens like once in every 20 shots, and the other ones look like this.

## Post 100605 by Watchers3d (Barrens Chat Casualty) — 2024-09-04T10:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100605#p100605 | page 39 | era: pre-1.18.1 -->

> **ZyVerus wrote: Wed Sep 04, 2024 1:19 am**
> It's so weird. Are we sure that's how it is in Legion? It almost seems like the animations for the model are only showing up on the top half of the skeleton, while the bottom half is rigid and doesn't change from the standing animation. What's strange is I've had it sometimes alternate between a more natural animation that happens like once in every 20 shots, and the other ones look like this.

Yes. 7.3 introduced new combat animations back in 2017. Before 7.3 it was always like that, with wrong foot forward.

## Post 100668 by Akalix (Turtle WoW Team) [STAFF] — 2024-09-04T22:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100668#p100668 | page 39 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Aug 29, 2024 11:08 pm**
> > **Overberk wrote: Wed Aug 28, 2024 1:22 pm**
> > Hi there, any new updates so far?
>
>   I haven't gotten any fixes for the existing bugs on patch-Z, so there's currently no pending update for the official release version.

If you have any specific bugs needing some special attention, I would be happy to sponsor a decent chunk of tokens as a bounty on them, just let me know which.

## Post 100684 by Redmagejoe (Grandmaster of Forum PvP) — 2024-09-05T02:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100684#p100684 | page 39 | era: pre-1.18.1 -->

> **Akalix wrote: Wed Sep 04, 2024 10:26 pm**
> If you have any specific bugs needing some special attention, I would be happy to sponsor a decent chunk of tokens as a bounty on them, just let me know which.

Armored boars will need a custom texture reworked for the new models from scratch, as in vanilla armored boars use a single texture, whereas newer boars have separate assets for their armor.  Turtle HD would have to have the vanilla armored boar textures adapted to the new Legion+ boar models.  If this isn't possible, all boars will have to be reverted to vanilla.

Legion+ Zhevras do not have a walking animation, and would need to be re-downported.  If this isn't possible, all Zhevras will need to be reverted to vanilla.

There are a few other issues in the last few pages, mainly a missing color texture for tallstriders, but I haven't had the time to look into it myself.

## Post 100696 by Kerebrien — 2024-09-05T08:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100696#p100696 | page 39 | era: pre-1.18.1 -->

This patch overwrites my custom sound folder and when I remove all the sound files and .dbc entries all sounds emitted by changed models are muted. What's the issue?

EDIT: Nvm, the names are all changed x_x
Gotta rework from the ground up with a lot of them, bummer

## Post 100884 by Watchers3d (Barrens Chat Casualty) — 2024-09-08T07:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100884#p100884 | page 39 | era: pre-1.18.1 -->

> **ZyVerus wrote: Wed Sep 04, 2024 1:19 am**
> It's so weird. Are we sure that's how it is in Legion? It almost seems like the animations for the model are only showing up on the top half of the skeleton, while the bottom half is rigid and doesn't change from the standing animation. What's strange is I've had it sometimes alternate between a more natural animation that happens like once in every 20 shots, and the other ones look like this.

[embed: //drive.google.com/file/d/1yZxe8u8pykF_yrPErx0KStcduQqfImwr/preview]

It's actually absolutely the same even in default SD female elf model. So, things are how they should be.

I guess sometimes people are just more critical of the newer "soul lacking" models, without noticing the same things in the “good old” ones.

## Post 100987 by Bigbearimpact — 2024-09-10T03:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100987#p100987 | page 39 | era: pre-1.18.1 -->

Hi, after i installed the HD patch, i always get the error msg and the game close when starting the fight with Majordomo in MC. Is there a way to fix this? Thank you.

## Post 101145 by Silwarel — 2024-09-12T13:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101145#p101145 | page 39 | era: pre-1.18.1 -->

Hello everyone!

Today I noticed that shoulder items on Troll females seem to be off, as if placed further behind the actual shoulders than they should be, causing the texture of the shoulders themselves and the shoulder armor to overlap weirdly.

## Post 101236 by Arcanex Ota — 2024-09-14T02:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101236#p101236 | page 39 | era: pre-1.18.1 -->

"Fatal Exception" in World of Warcraft, specifically Error #132 (ACCESS_VIOLATION).

When using the HD files, whenever I try to select my tauren characters on the character selection screen, the game crashes with the same error.

## Post 101332 by woolsack — 2024-09-16T08:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101332#p101332 | page 39 | era: pre-1.18.1 -->

![Image](https://i.ibb.co/wZkJK7R/Unt31231231231321itled.png)![Image](https://i.ibb.co/RznB6sC/U123211241241ntitled.png)
![Image](https://i.ibb.co/J7BDjWN/Un213123123213213123123123titled.png)

Undead male is missing part of the face when equipping masks , or other items that partially cover the face. Any way you could fix that ? That'd be great thanks.

*Last edited by woolsack on Mon Sep 16, 2024 8:22 am, edited 3 times in total.*

## Post 101354 by Truv — 2024-09-16T14:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101354#p101354 | page 39 | era: pre-1.18.1 -->

Hello! We have a problem with Tauren and his any cloak and, as i found out recently, with Death's Bargain shield.
![Image](https://i.postimg.cc/3NZ78jp8/2024-09-16-185327.png)
So when i log out to change the character i should always unequip cloak and the shield, otherwise it will crash the client when i try to choose my Tauren back, with equiped cloak or shield.
![Image](https://i.postimg.cc/yNryG2bB/2024-09-16-193605.png)

## Post 101547 by Ashwhole (Barrens Chat Casualty) — 2024-09-20T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101547#p101547 | page 39 | era: pre-1.18.1 -->

I have two questions about the hd pack.

Number on is how do i fix performance issues with the hd pack ? My performance is often very bad with the pack sometimes dropping down to 20fps.

I didnt have this issue without the HD pack. I got 12gb ram, i7 4.5ghz cpu, and nvidia 970 gpu, so theres shouldnt be a problem with power.

Question number two: How do i uninstall the HD Packs ? I believe i have the HD pack for characters and enviroment. Thx !

## Post 101556 by Stemar — 2024-09-20T14:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101556#p101556 | page 39 | era: pre-1.18.1 -->

As mentioned ealier about Taurens- It can even make crashes durring a creating one :)
I have one question. Is there any chance to let say "repair" orc's back? :)

## Post 101588 by fatherrrrrr — 2024-09-21T11:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101588#p101588 | page 39 | era: pre-1.18.1 -->

how do I use 100% of the resolution? Some textures are blurry, unlike retail.

## Post 101811 by HerTiSo — 2024-09-24T10:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101811#p101811 | page 39 | era: pre-1.18.1 -->

Anyone else having these strange yellow and glitchy lines on the ground for dwarves and gnomes in the character selection screen? They didn't appear without the HD Project's files. Thanks for your time and work!

![Image](https://i.imgur.com/9YJ8yvm.jpeg)

## Post 102411 by Redmagejoe (Grandmaster of Forum PvP) — 2024-10-03T02:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102411#p102411 | page 39 | era: pre-1.18.1 -->

> **Akalix wrote: Wed Sep 04, 2024 10:26 pm**
> If you have any specific bugs needing some special attention, I would be happy to sponsor a decent chunk of tokens as a bounty on them, just let me know which.

> **Redmagejoe wrote: Thu Sep 05, 2024 2:37 am**
> Armored boars will need a custom texture reworked for the new models from scratch, as in vanilla armored boars use a single texture, whereas newer boars have separate assets for their armor.  Turtle HD would have to have the vanilla armored boar textures adapted to the new Legion+ boar models.  If this isn't possible, all boars will have to be reverted to vanilla.
>
>  Legion+ Zhevras do not have a walking animation, and would need to be re-downported.  If this isn't possible, all Zhevras will need to be reverted to vanilla.
>
>  There are a few other issues in the last few pages, mainly a missing color texture for tallstriders, but I haven't had the time to look into it myself.

These issues remain outstanding on current test branch. Currently, the latest stable version remains an April 10 release of patch-A.  I will see about moving the Deep Murloc Fix, as well as the Horses / Tallstriders / Whelps / Gnolls updates over to main branch individually, though this is less than ideal given the commits that contained them involving piecemeal DBC changes also contain updated rows responsible for the currently buggy updates on test branch.  As such, I cannot simply do a merge of test into main and would have to manually diff and apply individual changes.

## Post 102535 by Akalix (Turtle WoW Team) [STAFF] — 2024-10-05T03:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102535#p102535 | page 39 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Oct 03, 2024 2:09 am**
> > **Akalix wrote: Wed Sep 04, 2024 10:26 pm**
> > If you have any specific bugs needing some special attention, I would be happy to sponsor a decent chunk of tokens as a bounty on them, just let me know which.
>
>
> > **Redmagejoe wrote: Thu Sep 05, 2024 2:37 am**
> > Armored boars will need a custom texture reworked for the new models from scratch, as in vanilla armored boars use a single texture, whereas newer boars have separate assets for their armor.  Turtle HD would have to have the vanilla armored boar textures adapted to the new Legion+ boar models.  If this isn't possible, all boars will have to be reverted to vanilla.
> >
> >  Legion+ Zhevras do not have a walking animation, and would need to be re-downported.  If this isn't possible, all Zhevras will need to be reverted to vanilla.
> >
> >  There are a few other issues in the last few pages, mainly a missing color texture for tallstriders, but I haven't had the time to look into it myself.
>
>
>  These issues remain outstanding on current test branch. Currently, the latest stable version remains an April 10 release of patch-A.  I will see about moving the Deep Murloc Fix, as well as the Horses / Tallstriders / Whelps / Gnolls updates over to main branch individually, though this is less than ideal given the commits that contained them involving piecemeal DBC changes also contain updated rows responsible for the currently buggy updates on test branch.  As such, I cannot simply do a merge of test into main and would have to manually diff and apply individual changes.

I will place a 500 token bounty on the fixes of any of these issues. Fixes must be approved by Redmagejoe and committed for reward.

## Post 102537 by HerTiSo — 2024-10-05T06:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102537#p102537 | page 39 | era: pre-1.18.1 -->

Well... I might become a WoW modder now.

## Post 102842 by Doomwaffel — 2024-10-10T06:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102842#p102842 | page 39 | era: pre-1.18.1 -->

Just came across this. This looks like A LOT of work. respect.
Now I am scared to try it out in fear that my old system cant take it. ^^

Is most of this copied over from retail or other versions or how does this work? I saw some new models as well here and there while browsing through the more recent pages.

## Post 102843 by HerTiSo — 2024-10-10T06:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102843#p102843 | page 39 | era: pre-1.18.1 -->

> **Doomwaffel wrote: Thu Oct 10, 2024 6:23 am**
> Just came across this. This looks like A LOT of work. respect.
>  Now I am scared to try it out in fear that my old system cant take it. ^^

Just a heads-up: The HD Patch (all three parts of it) runs perfectly well on both my virtual ARM machine (Parallels via MacBook) and both my Steam Decks at max settings. Just go for it.   smiling_turtle

## Post 103150 by Aeris Elenor — 2024-10-16T08:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=103150#p103150 | page 39 | era: pre-1.18.1 -->

can you provide us an option for just the HD chasracter models alone?  with everything else left normal?  i like the original music and sound affects.

also,  any chance you could provide us with a patch/mod/addon for the new melee combat animations?   looks like we got that for spellcasting animations so i assume melee cant be that big a jump

## Post 103479 by Rors — 2024-10-17T21:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=103479#p103479 | page 39 | era: pre-1.18.1 -->

It would be amazing if we could have a version of patch A without the NPCs like Thrall, Jaina etc having their newest models

## Post 104596 by Legranduc — 2024-10-23T19:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104596#p104596 | page 39 | era: pre-1.18.1 -->

> **HerTiSo wrote: Tue Sep 24, 2024 10:19 am**
> Anyone else having these strange yellow and glitchy lines on the ground for dwarves and gnomes in the character selection screen? They didn't appear without the HD Project's files. Thanks for your time and work!
>
>  ![Image](https://i.imgur.com/9YJ8yvm.jpeg)

Same probleme here :/ anyone know how to fix this please? Thx for your amazing work

## Post 104631 by HerTiSo — 2024-10-24T06:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104631#p104631 | page 39 | era: pre-1.18.1 -->

> **Legranduc wrote: Wed Oct 23, 2024 7:50 pm**
> > **HerTiSo wrote: Tue Sep 24, 2024 10:19 am**
> > Anyone else having these strange yellow and glitchy lines on the ground for dwarves and gnomes in the character selection screen? They didn't appear without the HD Project's files. Thanks for your time and work!
> >
> >  ![Image](https://i.imgur.com/9YJ8yvm.jpeg)
>
>   Same probleme here :/ anyone know how to fix this please? Thx for your amazing work

Often a restart is enough.

## Post 104924 by Turboman (Patch Note Conspiracy Theorist) — 2024-10-27T03:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104924#p104924 | page 39 | era: pre-1.18.1 -->

Does anyone know which element i should delete  in the patch to bring back the gunfire? Right now with patch-A whenever i use my gun it shoots without flame vfx, the bullet just flies out of the barrel.

## Post 105061 by Karadin12 — 2024-10-28T10:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105061#p105061 | page 39 | era: pre-1.18.1 -->

some of the cat models are replaced with druid cat models, like rak shiri from winderspring, who is now a druid cat with horns. assuming this has something to do with the purchasable skins for druids in game, any way to fix this for hunters?

## Post 105460 by Redmagejoe (Grandmaster of Forum PvP) — 2024-10-31T04:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105460#p105460 | page 39 | era: pre-1.18.1 -->

Bear in mind that there will likely not be an update for Turtle HD immediately after the patch drops. I will do my best to find time between other obligations outside of WoW to diff the new client files and make a patch, and roll the non-broken parts of patch-Z into and update.  At this point, some changes will have to be rolled back, like the Zhevras, Druid cat changes, and boar models and textures.

## Post 105872 by Akalix (Turtle WoW Team) [STAFF] — 2024-11-02T03:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105872#p105872 | page 39 | era: pre-1.18.1 -->

To anyone coming to discuss incompatibilities:

The incompatibility in the HD Patch is in `Patch-A` and `Patch-Z`. The problem stems from the Spell Effects. Other parts are not heavily problematic.

## Post 105876 by Redmagejoe (Grandmaster of Forum PvP) — 2024-11-02T05:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105876#p105876 | page 39 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/Svan9pk.png)

## Post 105889 by Kathoreary — 2024-11-02T07:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105889#p105889 | page 39 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Nov 02, 2024 5:12 am**
> ![Image](https://i.imgur.com/Svan9pk.png)

Will there be HD Project fixes for 1.17.2?

## Post 105895 by Redmagejoe (Grandmaster of Forum PvP) — 2024-11-02T08:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105895#p105895 | page 39 | era: pre-1.18.1 -->

Eventually, but I'm not going to go through the work of diffing DBC files for spells, item display IDs, and creature display IDs until any hotfixes the staff may release have come and gone. Otherwise I would be making a new version with every single hotfix.

As much as I hate to say it, given my disdain for vanilla graphics being the primary reason I started this project, we may just have to settle for vanilla graphics for a week or two while all the dust settles.

## Post 106051 by Basih149 — 2024-11-02T22:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106051#p106051 | page 39 | era: pre-1.18.1 -->

> **Kathoreary wrote: Sat Nov 02, 2024 7:56 am**
> > **Redmagejoe wrote: Sat Nov 02, 2024 5:12 am**
> > ![Image](https://i.imgur.com/Svan9pk.png)
>
>   Will there be HD Project fixes for 1.17.2?

You can temporarily fix it yourself to work with the new patch   turtle_tongue_head
Step 1 - you need a MPQ editor (I use this one:  [https://www.hiveworkshop.com/threads/la ... or.249562/](https://www.hiveworkshop.com/threads/ladiks-mpq-editor.249562/) )
Step 2 - Open the Patch-A.MPQ file with the editor and look under the DBFilesClient folder there should be something called Spell.dbc, right click and delete that .dbc file.
![Image](https://cdn.discordapp.com/attachments/1158807751850475690/1302259291708985425/image.png?ex=672776f9&is=67262579&hm=ee8eca45ccaf464813c11dae64ddade37e69c1ca3eb835fef2abeb6229844d13&)

Step 3 - Now you can use the modified MPQ file normally.

## Post 106075 by Glarthir (Barrens Chat Casualty) — 2024-11-03T02:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106075#p106075 | page 39 | era: pre-1.18.1 -->

If anyone need it, this is a very quick fix for the HD patch. All it does is remove the files that are crashing the game, such as spell effects. I haven't had any issues with it so far, however the new costumization options aren't available in character creation with the HD patch on and all ingame characters who are using new hair are bald, as are your own if you create one without the HD patch on and the activate the patch and login.

[embed: //drive.google.com/file/d/1Vjldo7vccBJlYV7yA7bZZsNKDj4tDrXS/preview]

Enjoy

## Post 106087 by Templar85 (Patch Note Conspiracy Theorist) — 2024-11-03T05:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106087#p106087 | page 40 | era: pre-1.18.1 -->

> If anyone need it, this is a very quick fix for the HD patch.

I installed this without B or C and causing me crashes in Mulgore for Tauren Hunter when I attacking Harpies.

## Post 106092 by Redmagejoe (Grandmaster of Forum PvP) — 2024-11-03T06:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106092#p106092 | page 40 | era: pre-1.18.1 -->

> **Daedalus007 wrote: Sun Nov 03, 2024 6:18 am**
>

Literally who are you?  Obviously someone who couldn't spend even a few minutes skimming even a snippet of the long history of this thread where you'd see each and every single audacious claim you've made in your post contradicted with a paper trail.  This entire thread's early history was nothing but documenting in great detail my progress in learning the base product which I explicitly stated in the first post was not my own, collaborating with volunteers willing to lend a hand to improving the product, and full transparency at every single step of this project's development.

It was ultimately the author themselves who came in to collaborate in this very thread that allowed me to identify and name them properly.  Do you go around looking to pick fights that you haven't properly prepared for? Because all you've accomplished is making yourself look like an irreverent ass.  Perhaps consider actually doing your research (see: read this thread) before throwing rocks.

By all means, though, feel free to continue making an ass of yourself.

## Post 106163 by Silwarel — 2024-11-03T15:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106163#p106163 | page 40 | era: pre-1.18.1 -->

People who are using HD patch and have issues with brainwasher device and talent trees:

 - remove the patch, add the brainwashing device to your spellbook, save your specs
 - apply the patch again

It should help. It definitely helped me.

## Post 106179 by Raggni — 2024-11-03T16:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106179#p106179 | page 40 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Nov 03, 2024 6:43 am**
> > **Daedalus007 wrote: Sun Nov 03, 2024 6:18 am**
> >
>
>   Literally who are you?

It's just one of the many internet tough guys we've got around here for whatever reason.  Don't let them get under your skin man, thanks for your work on this project.

## Post 106306 by Zarmr — 2024-11-04T12:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106306#p106306 | page 40 | era: pre-1.18.1 -->

First of all I would like to thank you for this amazing work! Secondly I would like to ask if there will be HD versions of the new hairstyles. And if it's planned to have them, when can we expect it? I know it's probably hard to tell, I am just asking for rough estimate.

*Last edited by Zarmr on Tue Nov 05, 2024 11:22 pm, edited 1 time in total.*

## Post 106539 by Bordar — 2024-11-05T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106539#p106539 | page 40 | era: pre-1.18.1 -->

Anyone has just new music MPQ file?

## Post 106630 by Redmagejoe (Grandmaster of Forum PvP) — 2024-11-06T04:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106630#p106630 | page 40 | era: pre-1.18.1 -->

> **Daedalus007 wrote: Tue Nov 05, 2024 11:45 pm**
>

I neither need nor desire an apology from some nobody, especially one who got banned for being a douchebag on the Discord, Ayriana, in-game names Bankara and Ayri.  Certainly not from some friendless, unlikable nobody whose every claim, assertion, and complaint is groundless and/or ignorant.  You have 0 clue what you're talking about.  I realize that your exile has made you bitter, but this is pretty pathetic, coming onto the forum to continue your one-woman crusade.

You are more than welcome to deliver on your promise to "roll up my sleeves and make a better version" of Turtle HD. I encourage you, in fact!  Be my guest!  If your spite drives you to deliver a better product, it's a win-win for me.  All the HD goodness with none of the work or management from me? Go for it, champ.

## Post 106780 by DitaRedrum — 2024-11-06T23:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106780#p106780 | page 40 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Oct 31, 2024 4:31 am**
> Bear in mind that there will likely not be an update for Turtle HD immediately after the patch drops. I will do my best to find time between other obligations outside of WoW to diff the new client files and make a patch, and roll the non-broken parts of patch-Z into and update.  At this point, some changes will have to be rolled back, like the Zhevras, Druid cat changes, and boar models and textures.

Where can I get your patch-z?

## Post 106819 by Redmagejoe (Grandmaster of Forum PvP) — 2024-11-07T03:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106819#p106819 | page 40 | era: pre-1.18.1 -->

> **DitaRedrum wrote: Wed Nov 06, 2024 11:37 pm**
> Where can I get your patch-z?

<https://github.com/redmagejoe/TurtleHD/releases>
The latest test release would be v0.0.18-test3

## Post 106896 by DitaRedrum — 2024-11-07T12:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106896#p106896 | page 40 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Nov 07, 2024 3:55 am**
> > **DitaRedrum wrote: Wed Nov 06, 2024 11:37 pm**
> > Where can I get your patch-z?
>
>  <https://github.com/redmagejoe/TurtleHD/releases>
>  The latest test release would be v0.0.18-test3

What exactly does your patch-z do? I know patch-z(Darker Nights) from "Vidooo". And so I wonder what your patch-z is doing. Thank you in advance!

## Post 106946 by Redmagejoe (Grandmaster of Forum PvP) — 2024-11-07T18:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106946#p106946 | page 40 | era: pre-1.18.1 -->

patch-Z has a few attempted updates that, sadly, without proper backporting or the ability to make custom assets, will need to be rolled back, such as new boars with armor, new zhevras without walking animations, and a few other things.

What does work and would likely be merged into a new version of patch-A when I get to it, would be the new gnolls, new whelps, a fix for the High Elf Arcane Missile casting animation, new tallstriders, new human children, new darkhounds, and some new horses.

## Post 106956 by Yonu — 2024-11-07T20:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106956#p106956 | page 40 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Nov 07, 2024 6:20 pm**
> new version of patch-A when I get to it

Do you think you'd also be able to fix the issue we have with these 2 specific store skins for Undead and High Elf? The modern model eye glow messes up the red glow and the red color of the eyes when you apply these skins

High Elf Dark Ranger:
![Image](https://i.postimg.cc/63XDtM44/eyeissue1.png)

Undead Blood Widow:
![Image](https://i.postimg.cc/qqmYc0b2/eyeissue2.png)

Since some people would still prefer to preserve their default eye glow from the HD patch, maybe it would be a better idea to make this a patch-(any other letter) just for people who wish to use these skins
And I'm sorry to ask you, I've gave it a shot myself, and I was able to semi-fix the High elf one, but it's a pretty bad job and I'm unable to fix the Undead version

Thank you

## Post 106965 by Redmagejoe (Grandmaster of Forum PvP) — 2024-11-07T21:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106965#p106965 | page 40 | era: pre-1.18.1 -->

> **Yonu wrote: Thu Nov 07, 2024 8:10 pm**
>

Any new custom skins will be added to the feature to-do list.  I'll make note of these.  Appreciate the info, as I don't usually keep tabs on the new donation shop additions.

## Post 106974 by Yonu — 2024-11-07T21:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106974#p106974 | page 40 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Nov 07, 2024 9:14 pm**
> > **Yonu wrote: Thu Nov 07, 2024 8:10 pm**
> >
>
>   Any new custom skins will be added to the feature to-do list.  I'll make note of these.  Appreciate the info, as I don't usually keep tabs on the new donation shop additions.

Thank you so much, RedMage, I really appreciate your work
I also forgot to ask, they introduced new haircuts to the game, do you think there's any possibility to implement them into the patch-A? something tells me that something like this would require someone to literally change the haircuts to fit the legion models and what not, but I could be wrong

## Post 106988 by Yonu — 2024-11-07T23:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106988#p106988 | page 40 | era: pre-1.18.1 -->

> **Daedalus007 wrote: Thu Nov 07, 2024 11:07 pm**
> > **Redmagejoe wrote: Wed Nov 06, 2024 4:29 am**
> > *snip*
>
>  -rage bait-

What do you wish to achieve with this tho?
Whatever RedMage has done in the past, the reality is that he shared with the community a mod that a lot of people are enjoying
Sure, we can go to the bottom of things and eventually find out that he has nothing to do with the mod itself, but the only person who should be looking for "retribution" should be the "original creator" of the mod
Why all this instigation? You're basically just pushing a line that will eventually get you banned from this place, if you care about that at all anyway

## Post 106991 by D4rcy — 2024-11-07T23:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106991#p106991 | page 40 | era: pre-1.18.1 -->

This currently works, i edited some files. if you just want HD mod just use Patch A.
[viewtopic.php?t=15671](https://forum.turtlecraft.gg/viewtopic.php?t=15671)

## Post 106997 by Yonu — 2024-11-08T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106997#p106997 | page 40 | era: pre-1.18.1 -->

> **Daedalus007 wrote: Thu Nov 07, 2024 11:51 pm**
> > **Yonu wrote: Thu Nov 07, 2024 11:41 pm**
> > *snip*
>
>  -reply with a hint of gasoline-

I think you're judging my character far too quickly, all I was trying to understand is your motivation behind your campaign against the current host of this mod's github, no "echo chambers" and I'm good without any of 2 suggested networks you mentioned, thanks
and at least, with this post, you validated your claim when you said that you're not on Twow's discord, because me and a few others have made the same fix to our patch-A as the person you're quoting, and we've been spreading that file to other discord users who ask for a fix, for the past few days
I think I even posted the file here in one of the general threads
my main reason why I didn't post the current semi-fix of the patch-A file in this thread it's because it is in fact a "quick fix" that's not too solid, and me and the others are currently hoping for RMJ to come up with a more "official" version

## Post 107009 by Redmagejoe (Grandmaster of Forum PvP) — 2024-11-08T01:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107009#p107009 | page 40 | era: pre-1.18.1 -->

> **Yonu wrote: Fri Nov 08, 2024 12:37 am**
>

> **Bigsmerf wrote: Fri Nov 08, 2024 1:50 am**
>

It's best you simply block the user as I did and not give them any more of the attention they desperately crave.

*Last edited by Redmagejoe on Fri Nov 08, 2024 2:06 am, edited 3 times in total.*

## Post 107010 by Bigsmerf (Grandmaster of Forum PvP) — 2024-11-08T01:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107010#p107010 | page 40 | era: pre-1.18.1 -->

> **RedMageRaper wrote: Sat Nov 02, 2024 11:23 am**
> > **Redmagejoe wrote: Sat Nov 02, 2024 8:51 am**
> > Eventually, but I'm not going to go through the work of diffing DBC files for spells, item display IDs, and creature display IDs until any hotfixes the staff may release have come and gone. Otherwise I would be making a new version with every single hotfix.
> >
> >  As much as I hate to say it, given my disdain for vanilla graphics being the primary reason I started this project, we may just have to settle for vanilla graphics for a week or two while all the dust settles.
>
>
>  Fuck off of the forums with your half baked excuses final fantasy faggot Redmagejoe retard
>
>  learn to TLDR so people don't have to WASTE TIME on your words, are you too inept to summarize?
>
>  you think you're hot shit because of this HD mod? stealing and compiling the works of others does not make you a saint, everyone can do what you can; even better in most cases.
>
>  go back to bending over for your furry butt bois in Final Fantasy 14's gaylord halloween event
>
>  my little man, Redmagejoe you are pathetic excuse of a human being, without common decency or respect ; you are essentially useless and worthless to the environment and nature - which is built on solidarity necessary for evolution, something a loser like you lacks tremendously
>
>  how does the taste of your own medicine feel? START SHIT GET HIT PRICK
>
>  something to think about, RedDickHeadJoe
>
>  if you think this is it, I'm just getting started ; I will make you life a living hell, when you least expect it because why not right?

You seem like the kind of person to piss in your own coffee on a daily basis...

## Post 107049 by Zarmr — 2024-11-08T08:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107049#p107049 | page 40 | era: pre-1.18.1 -->

> **Yonu wrote: Thu Nov 07, 2024 9:50 pm**
> > **Redmagejoe wrote: Thu Nov 07, 2024 9:14 pm**
> > > **Yonu wrote: Thu Nov 07, 2024 8:10 pm**
> > >
> >
> >   Any new custom skins will be added to the feature to-do list.  I'll make note of these.  Appreciate the info, as I don't usually keep tabs on the new donation shop additions.
>
>   Thank you so much, RedMage, I really appreciate your work
>  I also forgot to ask, they introduced new haircuts to the game, do you think there's any possibility to implement them into the patch-A? something tells me that something like this would require someone to literally change the haircuts to fit the legion models and what not, but I could be wrong

I would also love to know the answer for this but for some reasons RedmageJoe won't answer this question. I already tried asking here, on Discord, PM him here and no answer. I only want to know because I want to start a toon with one of the new customization options but if the new models won't be part of the HD patch anytime soon I will use the old options.

## Post 107118 by Tekamthi (Barrens Chat Casualty) — 2024-11-08T16:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107118#p107118 | page 40 | era: pre-1.18.1 -->

I'm relatively new wow player, only started the game about a year ago on turtle (ie i have no prior experience on retail) -- imo this pack is essential in 2024, turtle devs should consider integrating it with the main project.  Personally i'm skipping all the new bells and whistles of 1.17.2 til I can play in HD, will just play other games til then, but nonetheless eagerly awaiting update here.

As an intermittent mod-dev in other communities, I find the complaining about volunteer devs rather distasteful and counter-productive.  I can probably find an hour or two if there are any particularly menial/simple tasks to assist with in updating...

## Post 107337 by Snaire359 — 2024-11-10T07:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107337#p107337 | page 40 | era: pre-1.18.1 -->

HD PATCH UPDATE 17.2 When ???

## Post 107339 by Novola — 2024-11-10T08:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107339#p107339 | page 40 | era: pre-1.18.1 -->

Hey,  i am having wierd issue with some of the buggy textures, wondering if anyone had simmillar problem. Like a year ago i installed all the legion models and textures and spell effects, which i quickly removed again since i had some massive tearing of the textures, buggy mob models (furbolgs, for example). Problem is, even when i removed those mpqs and installed original ones, problem persisted, in somewhat smaller scale,  but i was often geting crashes with that "memory cant be read" error.(i did the vertex shaders thingy)
So i uninstalled entire thing and stopped playing twow.

I started playing again few days ago, installed fresh client and those damn tearing textures returned again, here and there, even after all that time and fresh install.

Question is: is there any place on the computer that game saves those settings, other than wow folder, so i can delete them? I deleted standard wtf and wdb folders and thats it basicaly, to no avail.

## Post 107666 by D4rcy — 2024-11-12T13:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107666#p107666 | page 40 | era: pre-1.18.1 -->

> **Snaire359 wrote: Sun Nov 10, 2024 7:58 am**
> HD PATCH UPDATE 17.2 When ???

check out my fix here [viewtopic.php?p=106990#p106990](https://forum.turtlecraft.gg/viewtopic.php?p=106990#p106990). it only has an edited patch a and then some lewdy mods. but my edited patch a works. with a few visual bugs, but menus and ui is perfect.

## Post 107946 by HerTiSo — 2024-11-14T11:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107946#p107946 | page 40 | era: pre-1.18.1 -->

> **D4rcy wrote: Tue Nov 12, 2024 1:30 pm**
> > **Snaire359 wrote: Sun Nov 10, 2024 7:58 am**
> > HD PATCH UPDATE 17.2 When ???
>
>   check out my fix here [viewtopic.php?p=106990#p106990](https://forum.turtlecraft.gg/viewtopic.php?p=106990#p106990). it only has an edited patch a and then some lewdy mods. but my edited patch a works. with a few visual bugs, but menus and ui is perfect.

Nah fam - crashed with your version twice, then ditched it again.

## Post 108056 by Azaryia — 2024-11-15T21:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108056#p108056 | page 40 | era: pre-1.18.1 -->

Hmm I am not able to see Jewelcrafting icon when I add patches. Not in spellbook neither on action bars.

## Post 108138 by Lockepu — 2024-11-16T15:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108138#p108138 | page 40 | era: pre-1.18.1 -->

There seems to be missing textures for the Quel'Dorei Hero's Cloak (silvermoon remnants rep)
<https://postimg.cc/ct7pSr9h>

## Post 108213 by Forest Elf — 2024-11-16T23:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108213#p108213 | page 40 | era: pre-1.18.1 -->

Great Mod! looking forward to its updated version.

## Post 108879 by Disco — 2024-11-20T07:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108879#p108879 | page 40 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Nov 02, 2024 8:51 am**
> Eventually, but I'm not going to go through the work of diffing DBC files for spells, item display IDs, and creature display IDs until any hotfixes the staff may release have come and gone. Otherwise I would be making a new version with every single hotfix.
>
>  As much as I hate to say it, given my disdain for vanilla graphics being the primary reason I started this project, we may just have to settle for vanilla graphics for a week or two while all the dust settles.

turtle_in_love_head
Thanks for keeping us updated 10/10 addon and dev

## Post 109163 by Filauro1989 — 2024-11-21T08:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109163#p109163 | page 40 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Nov 02, 2024 8:51 am**
> Eventually, but I'm not going to go through the work of diffing DBC files for spells, item display IDs, and creature display IDs until any hotfixes the staff may release have come and gone. Otherwise I would be making a new version with every single hotfix.
>
>  As much as I hate to say it, given my disdain for vanilla graphics being the primary reason I started this project, we may just have to settle for vanilla graphics for a week or two while all the dust settles.

Just wanted to show gratitude for your work, looking forward to a new version of this.

## Post 110554 by J0rsche — 2024-11-29T17:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110554#p110554 | page 40 | era: pre-1.18.1 -->

So far, my most stable version is a compilation of deletes I've sourced and played with.

I take patch A and delete "Spells.dbc" and "ItemDisplayInfo.dbc" within the DBFilesClient folder, and everything Character>Tauren>Male folder, as I was getting crashes trying to load male tauren characters.

A little something mod works, talent trees work, updated HD mounts work and I can see the new tmogs from the event and new world bosses. I haven't seen any bald freaks around either so that's probably fixed as well.

## Post 110989 by Bluemethod05 — 2024-12-03T02:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110989#p110989 | page 40 | era: pre-1.18.1 -->

> **J0rsche wrote: Fri Nov 29, 2024 5:13 pm**
> So far, my most stable version is a compilation of deletes I've sourced and played with.
>
>  I take patch A and delete "Spells.dbc" and "ItemDisplayInfo.dbc" within the DBFilesClient folder, and everything Character>Tauren>Male folder, as I was getting crashes trying to load male tauren characters.
>
>  A little something mod works, talent trees work, updated HD mounts work and I can see the new tmogs from the event and new world bosses. I haven't seen any bald freaks around either so that's probably fixed as well.

Hello! Where do I find this ' DBFilesClient folder'?

## Post 111005 by Imonobor (Bug Report Enthusiast) — 2024-12-03T06:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111005#p111005 | page 40 | era: pre-1.18.1 -->

> **Bluemethod05 wrote: Tue Dec 03, 2024 2:10 am**
> Hello! Where do I find this ' DBFilesClient folder'?

Inside Patch_A.mpq
You need an mpq editor to open it. It's basically an archive.

## Post 111339 by Vokar282 — 2024-12-04T14:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111339#p111339 | page 40 | era: pre-1.18.1 -->

> **J0rsche wrote: Fri Nov 29, 2024 5:13 pm**
> So far, my most stable version is a compilation of deletes I've sourced and played with.
>
>  I take patch A and delete "Spells.dbc" and "ItemDisplayInfo.dbc" within the DBFilesClient folder, and everything Character>Tauren>Male folder, as I was getting crashes trying to load male tauren characters.
>
>  A little something mod works, talent trees work, updated HD mounts work and I can see the new tmogs from the event and new world bosses. I haven't seen any bald freaks around either so that's probably fixed as well.

Any update on your fix? Is it available as a stopgap until the official update?   smiling_turtle_head

## Post 111414 by Shan96 — 2024-12-04T22:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111414#p111414 | page 40 | era: pre-1.18.1 -->

I really appreciate your work, this patch is awesome! :)

one bit of feedback - would you consider switching the nightsaber models to the BFA nightsaber models instead of the tiger ones? I think it'd look way more appropriate.

## Post 111415 by Fugrim — 2024-12-04T22:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111415#p111415 | page 41 | era: pre-1.18.1 -->

Hei
I will like to continue this mod myself but never really did this before for game any ideas how I can start what program I need to use to make these patches?

## Post 111517 by Pizzasmugglerix — 2024-12-05T20:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111517#p111517 | page 41 | era: pre-1.18.1 -->

Still no way to fix baldies everywhere I go? :C

## Post 111683 by Kalimdor92 — 2024-12-07T12:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111683#p111683 | page 41 | era: pre-1.18.1 -->

> **J0rsche wrote: Fri Nov 29, 2024 5:13 pm**
> So far, my most stable version is a compilation of deletes I've sourced and played with.
>
>  I take patch A and delete "Spells.dbc" and "ItemDisplayInfo.dbc" within the DBFilesClient folder, and everything Character>Tauren>Male folder, as I was getting crashes trying to load male tauren characters.
>
>  A little something mod works, talent trees work, updated HD mounts work and I can see the new tmogs from the event and new world bosses. I haven't seen any bald freaks around either so that's probably fixed as well.

Could you upload your version somewhere? Not because I'm lazy, but unfortunately I can't download the MPQ editor because the system indicates a virus. And unfortunately, the spells.dbc in the "D4rcy version Patch-A" are included. For example, if a mage casts flamestrike, the game almost freezes, I get 15-20 fps. Thank you in advance for your help.

## Post 111746 by violetsareblue — 2024-12-08T01:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111746#p111746 | page 41 | era: pre-1.18.1 -->

> **Kalimdor92 wrote: Sat Dec 07, 2024 12:14 pm**
> > **J0rsche wrote: Fri Nov 29, 2024 5:13 pm**
> > So far, my most stable version is a compilation of deletes I've sourced and played with.
> >
> >  I take patch A and delete "Spells.dbc" and "ItemDisplayInfo.dbc" within the DBFilesClient folder, and everything Character>Tauren>Male folder, as I was getting crashes trying to load male tauren characters.
> >
> >  A little something mod works, talent trees work, updated HD mounts work and I can see the new tmogs from the event and new world bosses. I haven't seen any bald freaks around either so that's probably fixed as well.
>
>   Could you upload your version somewhere? Not because I'm lazy, but unfortunately I can't download the MPQ editor because the system indicates a virus. And unfortunately, the spells.dbc in the "D4rcy version Patch-A" are included. For example, if a mage casts flamestrike, the game almost freezes, I get 15-20 fps. Thank you in advance for your help.

I suspect the reason OP didn't upload it is because they realized it was still buggy.
I made the changes as suggested and balding was still an issue, as were crashes, though much less frequent.
I have since found that the balding issues have something to do with the facialhair/charvariations.dbc files inside the DBFilesClient folder and have made some changes but i believe the issue goes much deeper than that and is probably nested in files split throughout the MPQ.
None the less I am still working on it, this version seems to be much more stable but has weird facial markings for night elfs and still the occasional bald player but its much much better than it was.

Here is a link to the version discussed. I will upload more if i make progress:
https://drive.google.com/file/d/1lAzMGRjlNGJyeRn35Qu-t-NRRVIrO9AK/view?usp=sharing

*Last edited by violetsareblue on Sun Dec 08, 2024 1:22 am, edited 2 times in total.*

## Post 111927 by Vokar282 — 2024-12-09T17:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111927#p111927 | page 41 | era: pre-1.18.1 -->

Do these updates also fix missing items from the fashion event? I have a top hat that is invisible and a ? in the inventory.

Either way, thanks for posting this!

Update:
This fix seems to have resolved the missing top hat, but now high elf ears have no texture and night elves have some strange facial textures.   dead_turtle_head

## Post 112237 by J0rsche — 2024-12-11T13:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112237#p112237 | page 41 | era: pre-1.18.1 -->

> **violetsareblue wrote: Sun Dec 08, 2024 1:20 am**
> > **Kalimdor92 wrote: Sat Dec 07, 2024 12:14 pm**
> > > **J0rsche wrote: Fri Nov 29, 2024 5:13 pm**
> > > So far, my most stable version is a compilation of deletes I've sourced and played with.
> > >
> > >  I take patch A and delete "Spells.dbc" and "ItemDisplayInfo.dbc" within the DBFilesClient folder, and everything Character>Tauren>Male folder, as I was getting crashes trying to load male tauren characters.
> > >
> > >  A little something mod works, talent trees work, updated HD mounts work and I can see the new tmogs from the event and new world bosses. I haven't seen any bald freaks around either so that's probably fixed as well.
> >
> >   Could you upload your version somewhere? Not because I'm lazy, but unfortunately I can't download the MPQ editor because the system indicates a virus. And unfortunately, the spells.dbc in the "D4rcy version Patch-A" are included. For example, if a mage casts flamestrike, the game almost freezes, I get 15-20 fps. Thank you in advance for your help.
>
>   I suspect the reason OP didn't upload it is because they realized it was still buggy.
>  I made the changes as suggested and balding was still an issue, as were crashes, though much less frequent.

Honestly I just rarely check forum but you aren't wrong, I'm just testing myself and yeah noticed the same some of the hair models still don't work. I don't really get crashing though, the thing that seems to crash my game the most is super macros for some reason. I just wanted something functional for me that worked until another version (made by someone who knows what they are doing) comes out.

## Post 112287 by Raypulsif — 2024-12-11T18:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112287#p112287 | page 41 | era: pre-1.18.1 -->

Hi there,
new turtle player
 2-3 weeks in game so far so good

i discovered you could add mods.

I tried this with a couple of others (and without a couple of others) to see what it looks in game

I tried to login at wetlands twice, no issues (i stayed manethil)
I tried to login at SW in a crowded city 5-6 times :

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\turtle\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:00713E26

The instruction at "0x00713E26" referenced memory at "0xBC8AC8F2".
The memory could not be "read".

(It worked once though)

I took the package from there
[viewtopic.php?t=15671](https://forum.turtlecraft.gg/viewtopic.php?t=15671)
where the OP says :
"I DID NOT CREATE THESE MODS I JUST EDITED THE HD MOD SO THEY WOULD WORK WITH THE CURRENT UPDATE ALL ORIGINAL LINKS ARE BELOW."

I saw the 1st post here also, stating it doesn't work with new patch, but have things changed recently, and could someone help here ?

it's a wonderfull mod

## Post 112375 by violetsareblue — 2024-12-12T11:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112375#p112375 | page 41 | era: pre-1.18.1 -->

> **Raypulsif wrote: Wed Dec 11, 2024 6:43 pm**
> Hi there,
>  new turtle player
>  2-3 weeks in game so far so good
>
>  i discovered you could add mods.
>
>  I tried this with a couple of others (and without a couple of others) to see what it looks in game
>
>  I tried to login at wetlands twice, no issues (i stayed manethil)
>  I tried to login at SW in a crowded city 5-6 times :
>
>  This application has encountered a critical error:
>
>  ERROR #132 (0x85100084) Fatal Exception
>  Program:	C:\turtle\WoW.exe
>  Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:00713E26
>
>  The instruction at "0x00713E26" referenced memory at "0xBC8AC8F2".
>  The memory could not be "read".
>
>  (It worked once though)
>
>  I took the package from there
>  [viewtopic.php?t=15671](https://forum.turtlecraft.gg/viewtopic.php?t=15671)
>  where the OP says :
>  "I DID NOT CREATE THESE MODS I JUST EDITED THE HD MOD SO THEY WOULD WORK WITH THE CURRENT UPDATE ALL ORIGINAL LINKS ARE BELOW."
>
>  I saw the 1st post here also, stating it doesn't work with new patch, but have things changed recently, and could someone help here ?
>
>  it's a wonderfull mod

no disrespect intended but you should read the last few pages of this thread. the version of this mod you are referring to on that thread is, just like all of these, out of date and does not work correctly. we are all still searching for a solution.
Unfortunately, it only takes one douchebag to ruin it for everyone else waiting patiently for OP to tirelessly fix what they didnt break.

## Post 112648 by lostcrow410 — 2024-12-14T02:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112648#p112648 | page 41 | era: pre-1.18.1 -->

Thank you so much for this mod, you're the greatest.
Hope the updated version will be released soon

## Post 112674 by somemagicc (Barrens Chat Casualty) — 2024-12-14T10:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112674#p112674 | page 41 | era: pre-1.18.1 -->

this mod is amazing, i can't wait til it gets updated!

## Post 113170 by Thegimp86 — 2024-12-18T08:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113170#p113170 | page 41 | era: pre-1.18.1 -->

Could anyone tell me what texture file in a MPQ (Patch A) is directly related to Instance Portal texture? I have a feeling deleting that file would fix any Green Portal instance texture bugs we're all experiencing

## Post 113179 by Imonobor (Bug Report Enthusiast) — 2024-12-18T09:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113179#p113179 | page 41 | era: pre-1.18.1 -->

> **Thegimp86 wrote: Wed Dec 18, 2024 8:50 am**
> Could anyone tell me what texture file in a MPQ (Patch A) is directly related to Instance Portal texture? I have a feeling deleting that file would fix any Green Portal instance texture bugs we're all experiencing

I actually have deleted it from my MPQ and that did indeed fix instance portals, but I can't remember which file it was. It was named kinda obviously though, try searching for "instance" or "portal" in the mpq editor. I'll see which one it was when I get home.

EDIT: Found it, it's in World/Generic/Activedoodads/InstancePortal   smiling_turtle_head

On a somewhat unrelated note, I am interested in making my own custom model MPQ mods for vanilla, but struggle finding good resources, tools and tutorials that aren't 15 years old with expired links and whatnot. Is there a dedicated discord or reddit community for vanilla modding, where I could get help from people with experience in modding vanilla game files?

## Post 113278 by Thegimp86 — 2024-12-18T22:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113278#p113278 | page 41 | era: pre-1.18.1 -->

> **Imonobor wrote: Wed Dec 18, 2024 9:26 am**
> > **Thegimp86 wrote: Wed Dec 18, 2024 8:50 am**
> > Could anyone tell me what texture file in a MPQ (Patch A) is directly related to Instance Portal texture? I have a feeling deleting that file would fix any Green Portal instance texture bugs we're all experiencing
>
>   I actually have deleted it from my MPQ and that did indeed fix instance portals, but I can't remember which file it was. It was named kinda obviously though, try searching for "instance" or "portal" in the mpq editor. I'll see which one it was when I get home.
>
>  EDIT: Found it, it's in World/Generic/Activedoodads/InstancePortal   smiling_turtle_head
>
>
>  On a somewhat unrelated note, I am interested in making my own custom model MPQ mods for vanilla, but struggle finding good resources, tools and tutorials that aren't 15 years old with expired links and whatnot. Is there a dedicated discord or reddit community for vanilla modding, where I could get help from people with experience in modding vanilla game files?

Thanks man, that was the fix :)! Now to try and figure out why the Deadmines NPC's on the Zanzil Mixture side were Blue and White Checkered boxes T__T lol Any ideas?
Also a discord or something with TWoW Modders would be amazing, please lmk if you find such a thing!

EDIT: Defias Mixologist in Deadmines is blue/white checkered boxes / New Boss: Jared Voss is blue/white checkered box.
Any help with this issue would be greatly appreciated !

## Post 113691 by Bashmak — 2024-12-21T08:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113691#p113691 | page 41 | era: pre-1.18.1 -->

Greets everyone, kind enthusiasts, tell me plz, did you uploaded fixes to a b and c  patches to main download source, or to github posts ?
Is it possible to take working and not crashing version from you please ?

## Post 114588 by Wideworld (Barrens Chat Casualty) — 2024-12-28T09:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114588#p114588 | page 41 | era: pre-1.18.1 -->

Hi I think I need help, the pitch is not correct when flight I want to know which file do I need to delete from the mod to fix it, could anyone tell me please?

*Last edited by Wideworld on Thu Jan 02, 2025 9:10 am, edited 1 time in total.*

## Post 114659 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-12-28T17:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114659#p114659 | page 41 | era: pre-1.18.1 -->

The update will happen at some point or we can discard the HD Patch from now and wait for the HD Client?

## Post 114734 by NeyMey (Barrens Chat Casualty) — 2024-12-29T08:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114734#p114734 | page 41 | era: pre-1.18.1 -->

hi all! I spent the last three days collecting fixes from different players and combining them into one working patch. According to the tests, this patch works well, however, some hairstyles will not display as they should on the turtle. (But you won't see any bald players!)
[https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1OrMT2ec3K22h2BduHXbCNRhS6vCajT7c?usp=sharing)
It's far from perfect, but it works. I did the best I could. Please let me know if you find any errors.

## Post 114743 by NeyMey (Barrens Chat Casualty) — 2024-12-29T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114743#p114743 | page 41 | era: pre-1.18.1 -->

Updated patch A to fix the issue with most mounts. Some mounts still display incorrectly, I'm working on it.

## Post 114758 by somemagicc (Barrens Chat Casualty) — 2024-12-29T13:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114758#p114758 | page 41 | era: pre-1.18.1 -->

> **NeyMey wrote: Sun Dec 29, 2024 8:29 am**
> hi all! I spent the last three days collecting fixes from different players and combining them into one working patch. According to the tests, this patch works well, however, some hairstyles will not display as they should on the turtle. (But you won't see any bald players!)
>  [https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1OrMT2ec3K22h2BduHXbCNRhS6vCajT7c?usp=sharing)
>  It's far from perfect, but it works. I did the best I could. Please let me know if you find any errors.

what does patch-W do?

## Post 114762 by NeyMey (Barrens Chat Casualty) — 2024-12-29T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114762#p114762 | page 41 | era: pre-1.18.1 -->

> **somemagicc wrote: Sun Dec 29, 2024 1:04 pm**
> what does patch-W do?

Water texture)

*Last edited by NeyMey on Sun Dec 29, 2024 6:12 pm, edited 1 time in total.*

## Post 114816 by NeyMey (Barrens Chat Casualty) — 2024-12-30T05:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114816#p114816 | page 41 | era: pre-1.18.1 -->

More mount fixes. Merged patch W (previously required for new water texture) and patch B (after installing new patch B, you can remove patch W).
Edited and added a new patch (found it on the forum at the link: [viewtopic.php?t=14319](https://forum.turtlecraft.gg/viewtopic.php?t=14319), many thanks to the author) should be compatible with the current patch A

*Last edited by NeyMey on Mon Dec 30, 2024 5:36 am, edited 1 time in total.*

## Post 114836 by somemagicc (Barrens Chat Casualty) — 2024-12-30T11:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114836#p114836 | page 41 | era: pre-1.18.1 -->

> **NeyMey wrote: Mon Dec 30, 2024 5:08 am**
> More mount fixes. Merged patch W (previously required for new water texture) and patch B (after installing new patch B, you can remove patch W).
>  Edited and added a new patch (found it on the forum at the link: [viewtopic.php?t=14319](https://forum.turtlecraft.gg/viewtopic.php?t=14319), many thanks to the author) should be compatible with the current patch A

can you link your new update?

## Post 114837 by NeyMey (Barrens Chat Casualty) — 2024-12-30T11:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114837#p114837 | page 41 | era: pre-1.18.1 -->

> **somemagicc wrote: Mon Dec 30, 2024 11:31 am**
> can you link your new update?

Same link - [https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1OrMT2ec3K22h2BduHXbCNRhS6vCajT7c?usp=sharing)

## Post 114838 by somemagicc (Barrens Chat Casualty) — 2024-12-30T11:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114838#p114838 | page 41 | era: pre-1.18.1 -->

> **NeyMey wrote: Mon Dec 30, 2024 11:38 am**
> > **somemagicc wrote: Mon Dec 30, 2024 11:31 am**
> > can you link your new update?
>
>   Same link - [https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1OrMT2ec3K22h2BduHXbCNRhS6vCajT7c?usp=sharing)

thanks

## Post 114866 by somemagicc (Barrens Chat Casualty) — 2024-12-30T15:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114866#p114866 | page 41 | era: pre-1.18.1 -->

> **NeyMey wrote: Mon Dec 30, 2024 11:38 am**
> > **somemagicc wrote: Mon Dec 30, 2024 11:31 am**
> > can you link your new update?
>
>   Same link - [https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1OrMT2ec3K22h2BduHXbCNRhS6vCajT7c?usp=sharing)

does your mods also change game sounds, by chance? i've noticed i have a lot new sounds..
greater heal (priest) now plays the sound of prayer of mending from TBC, for example

## Post 114868 by NeyMey (Barrens Chat Casualty) — 2024-12-30T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114868#p114868 | page 41 | era: pre-1.18.1 -->

> **somemagicc wrote: Mon Dec 30, 2024 3:06 pm**
> does your mods also change game sounds, by chance? i've noticed i have a lot new sounds..
>  greater heal (priest) now plays the sound of prayer of mending from TBC, for example

Yes, there are indeed sound files in the patches, is this a problem? Should they be removed?

## Post 114870 by Diaboli — 2024-12-30T15:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114870#p114870 | page 41 | era: pre-1.18.1 -->

> **NeyMey wrote: Mon Dec 30, 2024 5:08 am**
> More mount fixes. Merged patch W (previously required for new water texture) and patch B (after installing new patch B, you can remove patch W).
>  Edited and added a new patch (found it on the forum at the link: [viewtopic.php?t=14319](https://forum.turtlecraft.gg/viewtopic.php?t=14319), many thanks to the author) should be compatible with the current patch A

Thank you so much for sharing these fixes, it seems like a lot of work and effort. I appreciate it a lot, specially since now I can finally enjoy the game how I wanted to   happy_turtle_head

## Post 114887 by NeyMey (Barrens Chat Casualty) — 2024-12-30T19:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114887#p114887 | page 41 | era: pre-1.18.1 -->

I made a separate topic for my patch
[viewtopic.php?t=16818](https://forum.turtlecraft.gg/viewtopic.php?t=16818)

## Post 114894 by Bonho — 2024-12-30T21:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114894#p114894 | page 41 | era: pre-1.18.1 -->

Guys, any chance we got update for trees? Look at this 2.5 polygons tree

![Image](https://i.imgur.com/JahEEiq.png)

## Post 114972 by somemagicc (Barrens Chat Casualty) — 2024-12-31T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114972#p114972 | page 41 | era: pre-1.18.1 -->

> **NeyMey wrote: Mon Dec 30, 2024 3:17 pm**
> > **somemagicc wrote: Mon Dec 30, 2024 3:06 pm**
> > does your mods also change game sounds, by chance? i've noticed i have a lot new sounds..
> >  greater heal (priest) now plays the sound of prayer of mending from TBC, for example
>
>   Yes, there are indeed sound files in the patches, is this a problem? Should they be removed?

i am indifferent

## Post 115351 by Wideworld (Barrens Chat Casualty) — 2025-01-03T23:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115351#p115351 | page 41 | era: pre-1.18.1 -->

> **Wideworld wrote: Sat Dec 28, 2024 9:57 am**
> Hi I think I need help, the pitch is not correct when flight I want to know which file do I need to delete from the mod to fix it, could anyone tell me please?

Ｎeed Help  sad_turtle_head

## Post 115958 by Redmagejoe (Grandmaster of Forum PvP) — 2025-01-09T04:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115958#p115958 | page 41 | era: pre-1.18.1 -->

Due to the current state of Turtle WoW in 1.17.2 and, I presume, onward, I have quit playing the game.  While a number of great changes were made to classes in talent trees and even core abilities (Beast Mastery Hunter, Fire Mage, Assassination Rogue), a number of decisions were made that were grossly out of touch with the core virtues of subtle, yet elegant tweaks to the existing vanilla design philosophy.  I can no longer motivate myself to play a game that seems to be moving further away from the simple, slightly archaic, yet elegant model of vanilla WoW towards a more streamlined, retail-esque product.

As such, I have no incentive to continue working on Turtle HD, and I leave it to the community to carry on its legacy.  The project is open source on GitHub, and can be forked by anyone as they see fit.  Thank you to everyone whose kinds words and eagerness to contribute made this project far more than I had ever hoped it would be when I started.  I'm glad that so many people enjoyed this little hobby project, and I hope that it continues to inspire others to get into WoW modding and video game modding in general.

## Post 116016 by Snipesta (Barrens Chat Casualty) — 2025-01-09T17:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116016#p116016 | page 41 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Jan 09, 2025 4:54 am**
> Due to the current state of Turtle WoW in 1.17.2 and, I presume, onward, I have quit playing the game.  While a number of great changes were made to classes in talent trees and even core abilities (Beast Mastery Hunter, Fire Mage, Assassination Rogue), a number of decisions were made that were grossly out of touch with the core virtues of subtle, yet elegant tweaks to the existing vanilla design philosophy.  I can no longer motivate myself to play a game that seems to be moving further away from the simple, slightly archaic, yet elegant model of vanilla WoW towards a more streamlined, retail-esque product.
>
>  As such, I have no incentive to continue working on Turtle HD, and I leave it to the community to carry on its legacy.  The project is open source on GitHub, and can be forked by anyone as they see fit.  Thank you to everyone whose kinds words and eagerness to contribute made this project far more than I had ever hoped it would be when I started.  I'm glad that so many people enjoyed this little hobby project, and I hope that it continues to inspire others to get into WoW modding and video game modding in general.

Sadge, it's unfortunately to see you go but sure you'll be back in the future to see how your baby has grown. Thanks for all your hard dedicated work.

## Post 116018 by Dracarusggotham (Grandmaster of Forum PvP) — 2025-01-09T17:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116018#p116018 | page 41 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Jan 09, 2025 4:54 am**
> Due to the current state of Turtle WoW in 1.17.2 and, I presume, onward, I have quit playing the game.  While a number of great changes were made to classes in talent trees and even core abilities (Beast Mastery Hunter, Fire Mage, Assassination Rogue), a number of decisions were made that were grossly out of touch with the core virtues of subtle, yet elegant tweaks to the existing vanilla design philosophy.  I can no longer motivate myself to play a game that seems to be moving further away from the simple, slightly archaic, yet elegant model of vanilla WoW towards a more streamlined, retail-esque product.
>
>  As such, I have no incentive to continue working on Turtle HD, and I leave it to the community to carry on its legacy.  The project is open source on GitHub, and can be forked by anyone as they see fit.  Thank you to everyone whose kinds words and eagerness to contribute made this project far more than I had ever hoped it would be when I started.  I'm glad that so many people enjoyed this little hobby project, and I hope that it continues to inspire others to get into WoW modding and video game modding in general.

I'm sorry to hear that, your project was very good and was the heart of Modding here since it started to the point of being pinned to the top of the mods area.

But since Turtle started with patch 1.15.0 it was obvious that at some point everything was going to lead to more changes to the game model to evolve it in a different way trying to maintain the original Vanilla skeleton.

Controversial changes, yes, but at the end of the day necessary to attract more people and solve obvious problems of the base game that Blizzard gave us in 2004.

I hope to see you here again someday when the project has advanced more, thanks for your hard work all these years.

Good luck.

## Post 116020 by Allwynd01 (Bug Report Enthusiast) — 2025-01-09T17:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116020#p116020 | page 41 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Jan 09, 2025 4:54 am**
> a number of decisions were made that were grossly out of touch with the core virtues of subtle, yet elegant tweaks to the existing vanilla design philosophy.  I can no longer motivate myself to play a game that seems to be moving further away from the simple, slightly archaic, yet elegant model of vanilla WoW towards a more streamlined, retail-esque product.

I'm curious, what exactly are those changes that don't sit well with you so much? I have played on and off since 2018 and I can't really think of something that did that I don't really like. At best, there are things I'm indifferent about. I could complain how the barber shop system is not good enough as you can't tell how each haircut will look on you unless you spend the money to buy it first. Second on that regard, I can't understand why they haven't expanded the hairstyle options more to the point where they give each race every other hair from every other race for the same gender. For example, the Orc female gets the hairstyles (where applicable, so without Tauren) of every other female playable race - Human, Night Elf, High Elf, Goblin, Troll, Gnome, Dwarf, Forsaken and vice versa. Same with facial hair for male characters.

But I can't think of a single change that's made it undesirable for me to play or something that makes Turtle WoW feel like Retail WoW. I can only think of the tents for rested XP, which can make leveling easier, but that's optional and you also have the ability to pause your XP gain at will so even that's not an issue for me.

## Post 116243 by proxydark — 2025-01-11T16:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116243#p116243 | page 42 | era: pre-1.18.1 -->

So is this project going to work again or for now it is more likelly closed ?

Found this one for new update [viewtopic.php?f=29&p=114886#p114886](https://forum.turtlecraft.gg/viewtopic.php?f=29&p=114886#p114886)

## Post 117323 by Zeran (Patch Note Conspiracy Theorist) — 2025-01-20T06:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117323#p117323 | page 42 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Thu Jan 09, 2025 5:46 pm**
> > **Redmagejoe wrote: Thu Jan 09, 2025 4:54 am**
> > a number of decisions were made that were grossly out of touch with the core virtues of subtle, yet elegant tweaks to the existing vanilla design philosophy.  I can no longer motivate myself to play a game that seems to be moving further away from the simple, slightly archaic, yet elegant model of vanilla WoW towards a more streamlined, retail-esque product.
>
>   I'm curious, what exactly are those changes that don't sit well with you so much? I have played on and off since 2018 and I can't really think of something that did that I don't really like. At best, there are things I'm indifferent about. I could complain how the barber shop system is not good enough as you can't tell how each haircut will look on you unless you spend the money to buy it first. Second on that regard, I can't understand why they haven't expanded the hairstyle options more to the point where they give each race every other hair from every other race for the same gender. For example, the Orc female gets the hairstyles (where applicable, so without Tauren) of every other female playable race - Human, Night Elf, High Elf, Goblin, Troll, Gnome, Dwarf, Forsaken and vice versa. Same with facial hair for male characters.
>
>  But I can't think of a single change that's made it undesirable for me to play or something that makes Turtle WoW feel like Retail WoW. I can only think of the tents for rested XP, which can make leveling easier, but that's optional and you also have the ability to pause your XP gain at will so even that's not an issue for me.

I'm pretty sure that he's talking about the second round of class changes.

## Post 117376 by Allwynd01 (Bug Report Enthusiast) — 2025-01-20T20:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117376#p117376 | page 42 | era: pre-1.18.1 -->

> **Zeran wrote: Mon Jan 20, 2025 6:38 am**
> I'm pretty sure that he's talking about the second round of class changes.

I see, well, in that case, I don't see how those class changes affect things that much, unless someone is a die-hard min-maxer who is heavily invested into something and any small or large change literally breaks everything for them. I'm a casual enjoyer of Turtle WoW so changes like this are either welcome or insignificant. In the best case, I like the variation they bring, it really makes Turtle WoW feel like a live service Vanilla WoW alternative timeline rather than a regular Vanilla server that is completely stagnant from start to end, kind of like how Counter-Strike has been since 1999 until (and including) Counter-Strike 2 - so much the same, so boring, there is no point in playing.

## Post 117409 by Fizzler (Patch Note Conspiracy Theorist) — 2025-01-21T05:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117409#p117409 | page 42 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Jan 09, 2025 4:54 am**
> Due to the current state of Turtle WoW in 1.17.2 and, I presume, onward, I have quit playing the game.  While a number of great changes were made to classes in talent trees and even core abilities (Beast Mastery Hunter, Fire Mage, Assassination Rogue), a number of decisions were made that were grossly out of touch with the core virtues of subtle, yet elegant tweaks to the existing vanilla design philosophy.  I can no longer motivate myself to play a game that seems to be moving further away from the simple, slightly archaic, yet elegant model of vanilla WoW towards a more streamlined, retail-esque product.
>
>  As such, I have no incentive to continue working on Turtle HD, and I leave it to the community to carry on its legacy.  The project is open source on GitHub, and can be forked by anyone as they see fit.  Thank you to everyone whose kinds words and eagerness to contribute made this project far more than I had ever hoped it would be when I started.  I'm glad that so many people enjoyed this little hobby project, and I hope that it continues to inspire others to get into WoW modding and video game modding in general.

I mean you worked on this patch for years now. It is inevitable that people will have to step down eventually, though you have done a great service to the community during the time you been here.

## Post 118159 by HerTiSo — 2025-01-28T09:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118159#p118159 | page 42 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Thu Jan 09, 2025 4:54 am**
> Due to the current state of Turtle WoW in 1.17.2 and, I presume, onward, I have quit playing the game.  While a number of great changes were made to classes in talent trees and even core abilities (Beast Mastery Hunter, Fire Mage, Assassination Rogue), a number of decisions were made that were grossly out of touch with the core virtues of subtle, yet elegant tweaks to the existing vanilla design philosophy.  I can no longer motivate myself to play a game that seems to be moving further away from the simple, slightly archaic, yet elegant model of vanilla WoW towards a more streamlined, retail-esque product.
>
>  As such, I have no incentive to continue working on Turtle HD, and I leave it to the community to carry on its legacy.  The project is open source on GitHub, and can be forked by anyone as they see fit.  Thank you to everyone whose kinds words and eagerness to contribute made this project far more than I had ever hoped it would be when I started.  I'm glad that so many people enjoyed this little hobby project, and I hope that it continues to inspire others to get into WoW modding and video game modding in general.

Man, I feel you—a few weeks after the big class changes dropped, I started feeling less compelled by the project. I began playing on Anniversary Classic and am having a blast. I’ll try to keep working on TRP, but man, it’s rough. I wish you nothing but the best, my friend!

## Post 119399 by Ulfheddir — 2025-02-09T12:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119399#p119399 | page 42 | era: pre-1.18.1 -->

Hello guys. With this patch my Ferocious Bite is dissapeared from spellbook and action bar. How i can fix that?

I dont have patch-A or patch-Z in my Data folder, that's why i asking   sad_turtle

## Post 119401 by Sylveria (Grandmaster of Forum PvP) — 2025-02-09T12:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119401#p119401 | page 42 | era: pre-1.18.1 -->

> **Ulfheddir wrote: Sun Feb 09, 2025 12:20 pm**
> Hello guys. With this patch my Ferocious Bite is dissapeared from spellbook and action bar. How i can fix that?
>
>  I dont have patch-A or patch-Z in my Data folder, that's why i asking   sad_turtle

if you've read the first post: This mod/patch is not longer in development and is NOT up-to-date. It will propably not work and cause for bugs on current Turtle-Version. (Standing there in big red letters.)

## Post 119482 by Ulfheddir — 2025-02-10T07:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119482#p119482 | page 42 | era: pre-1.18.1 -->

> **Sylveria wrote: Sun Feb 09, 2025 12:30 pm**
> > **Ulfheddir wrote: Sun Feb 09, 2025 12:20 pm**
> > Hello guys. With this patch my Ferocious Bite is dissapeared from spellbook and action bar. How i can fix that?
> >
> >  I dont have patch-A or patch-Z in my Data folder, that's why i asking   sad_turtle
>
>   if you've read the first post: This mod/patch is not longer in development and is NOT up-to-date. It will propably not work and cause for bugs on current Turtle-Version. (Standing there in big red letters.)

Sure, but i wanna just do it myself, man) If you can help me - just say, what i can do, please  smiling_turtle_head

## Post 119533 by Watchers3d (Barrens Chat Casualty) — 2025-02-10T15:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119533#p119533 | page 42 | era: pre-1.18.1 -->

> **Ulfheddir wrote: Mon Feb 10, 2025 7:06 am**
> Sure, but i wanna just do it myself, man) If you can help me - just say, what i can do, please  smiling_turtle_head

You can do it yourself, but why would you? Just install whatever you want that's already there. With these ones you will be just fine. Pinky promise.

> HD Character Models only patch-A, Thicc Mod patch-F
>  [viewtopic.php?t=12120](https://forum.turtlecraft.gg/viewtopic.php?t=12120)
>
>  Bikini Mod. Replaces armor textures. (Can be run with A little Extra simultaneously. Just change the letter F in "Patch-F" to something else)
>  [viewtopic.php?t=12307](https://forum.turtlecraft.gg/viewtopic.php?t=12307)
>
>  WMO structures, weapons and armor
>  [viewtopic.php?t=16720](https://forum.turtlecraft.gg/viewtopic.php?t=16720)
>
>  Tilesets and ground clutter. Last post in this topic by Vidooo.
>  [viewtopic.php?t=10741](https://forum.turtlecraft.gg/viewtopic.php?t=10741)
>
>  Environment HD Retexture. Patch-B from default HD Project topic. Yes, still working as it should.
>  [viewtopic.php?t=2827](https://forum.turtlecraft.gg/viewtopic.php?t=2827)

If you want less stable stuff, you can also look up this amalgamation. No promises though.
[viewtopic.php?t=16818](https://forum.turtlecraft.gg/viewtopic.php?t=16818)

## Post 119653 by Ulfheddir — 2025-02-11T22:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119653#p119653 | page 42 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Feb 10, 2025 3:16 pm**
> > **Ulfheddir wrote: Mon Feb 10, 2025 7:06 am**
> > Sure, but i wanna just do it myself, man) If you can help me - just say, what i can do, please  smiling_turtle_head
>
>   You can do it yourself, but why would you? Just install whatever you want that's already there. With these ones you will be just fine. Pinky promise.
>
> > HD Character Models only patch-A, Thicc Mod patch-F
> >  [viewtopic.php?t=12120](https://forum.turtlecraft.gg/viewtopic.php?t=12120)
> >
> >  Bikini Mod. Replaces armor textures. (Can be run with A little Extra simultaneously. Just change the letter F in "Patch-F" to something else)
> >  [viewtopic.php?t=12307](https://forum.turtlecraft.gg/viewtopic.php?t=12307)
> >
> >  WMO structures, weapons and armor
> >  [viewtopic.php?t=16720](https://forum.turtlecraft.gg/viewtopic.php?t=16720)
> >
> >  Tilesets and ground clutter. Last post in this topic by Vidooo.
> >  [viewtopic.php?t=10741](https://forum.turtlecraft.gg/viewtopic.php?t=10741)
> >
> >  Environment HD Retexture. Patch-B from default HD Project topic. Yes, still working as it should.
> >  [viewtopic.php?t=2827](https://forum.turtlecraft.gg/viewtopic.php?t=2827)
>
>
>  If you want less stable stuff, you can also look up this amalgamation. No promises though.
>  [viewtopic.php?t=16818](https://forum.turtlecraft.gg/viewtopic.php?t=16818)

Amazing! Thank you very much, my friend!  turtle_in_love_head

## Post 119837 by BevisJason — 2025-02-13T13:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119837#p119837 | page 42 | era: pre-1.18.1 -->

Thanks for doing this; I love these models! Is there any way to make the custom character appearance options appear, like Tauren horns or different hair colors? I can model and edit texture files in Photoshop/Maya if needed, but I'm not sure how to handle the other aspects.[Sprunki Retake](https://play-sprunki.com)

## Post 121228 by amadeussl — 2025-02-28T17:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121228#p121228 | page 42 | era: pre-1.18.1 -->

So, i'm playing with hunter. When i started using this mod i found something, the Moongose Bite skill went on to say that I need to dodge in order to activate the ability when I have this mod active. But i can use it normally without the mod.

## Post 123036 by Siroko — 2025-03-19T18:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123036#p123036 | page 42 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Feb 10, 2025 3:16 pm**
> > **Ulfheddir wrote: Mon Feb 10, 2025 7:06 am**
> > Sure, but i wanna just do it myself, man) If you can help me - just say, what i can do, please  smiling_turtle_head
>
>   You can do it yourself, but why would you? Just install whatever you want that's already there. With these ones you will be just fine. Pinky promise.
>
> > HD Character Models only patch-A, Thicc Mod patch-F
> >  [viewtopic.php?t=12120](https://forum.turtlecraft.gg/viewtopic.php?t=12120)
> >
> >  Bikini Mod. Replaces armor textures. (Can be run with A little Extra simultaneously. Just change the letter F in "Patch-F" to something else)
> >  [viewtopic.php?t=12307](https://forum.turtlecraft.gg/viewtopic.php?t=12307)
> >
> >  WMO structures, weapons and armor
> >  [viewtopic.php?t=16720](https://forum.turtlecraft.gg/viewtopic.php?t=16720)
> >
> >  Tilesets and ground clutter. Last post in this topic by Vidooo.
> >  [viewtopic.php?t=10741](https://forum.turtlecraft.gg/viewtopic.php?t=10741)
> >
> >  Environment HD Retexture. Patch-B from default HD Project topic. Yes, still working as it should.
> >  [viewtopic.php?t=2827](https://forum.turtlecraft.gg/viewtopic.php?t=2827)
>
>
>  If you want less stable stuff, you can also look up this amalgamation. No promises though.
>  [viewtopic.php?t=16818](https://forum.turtlecraft.gg/viewtopic.php?t=16818)

Hello there, thanks for the info! They look great. Only issue I have with those so far is getting a crash when I land at Everlook. Is it common, or it's just me?

## Post 123339 by mosherj — 2025-03-22T18:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123339#p123339 | page 42 | era: pre-1.18.1 -->

Hello, I'm new here, I'm trying all this week to configure the graphics, sounds like my video board isn't  working with a the turtle wow, the game and the launcher are kinda blue. I have a good PC, my graphic card it is a 4070.  What do I do?

## Post 124062 by bartek1150 — 2025-03-27T10:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124062#p124062 | page 42 | era: pre-1.18.1 -->

Hey just wanted to inform that there is an error after leveling up and opening spellbook. It says: ERROR, this layout is undrawable 1

## Post 127888 by tomayy — 2025-04-21T22:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127888#p127888 | page 42 | era: pre-1.18.1 -->

Also getting the same "Error, this layout is undrawable 1" in spell book and certain vendors.

## Post 128743 by Dracarusggotham (Grandmaster of Forum PvP) — 2025-04-27T19:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128743#p128743 | page 42 | era: pre-1.18.1 -->

This mod needs to be unpinned from here, clearly RedMageJoe is not comming back.
Please let the new versions be the main pin and let this die, it's time...

## Post 131368 by Morxmorte — 2025-05-16T11:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131368#p131368 | page 42 | era: pre-1.18.1 -->

goodjob thx

