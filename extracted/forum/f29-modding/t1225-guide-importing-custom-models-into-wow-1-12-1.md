---
title: "[Guide] Importing Custom Models into WoW (1.12.1)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1225"
topic_id: 1225
forum_id: 29
forum: "Modding"
author: "Kazgrim"
author_authority: "player"
posted: "2020-08-06T01:52:00Z"
last_post: "2025-10-10T11:35:00Z"
post_count: 27
pages: 1
fetched: "2026-09-10T10:38:58Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Guide] Importing Custom Models into WoW (1.12.1)

## Post 7213 by Kazgrim (Patch Note Conspiracy Theorist) — 2020-08-06T01:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7213#p7213 | page 1 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/5rSqZPC.png)

Some of you may be familiar with some of my creations involving new helmets and shoulders for players to wear. This guide is to explain how to get models from blender (.obj) to work in WoW.

 **What you'll need:**
 - WoW 3.3.5 client (wotlk) [you'll need to use google to find this]
 - WoW Model Viewer (3.3.5. version) [https://cdn.discordapp.com/attachments/ ... evWork.zip](https://cdn.discordapp.com/attachments/724401256470282320/740746868388134932/WMV_Binary_v0701_r252_Win32_DevWork.zip)
 - Blender 2.79b <https://download.blender.org/release/Blender2.79/>
 - OBJtoM2 (windows script) [https://model-changing.net/files/file/9 ... -toolpack/](https://model-changing.net/files/file/96-amaroths-toolpack/)
 - 010 Editor <https://www.sweetscape.com/010editor/>
 - AlastorM2 (010 script) [https://model-changing.net/files/file/9 ... -toolpack/](https://model-changing.net/files/file/96-amaroths-toolpack/)
 - jm2converter (java script) [http://www.mediafire.com/file/lff2z9k7u ... r.jar/file](http://www.mediafire.com/file/lff2z9k7u191msc/jm2converter.jar/file)
 - Ladik's MPQ Editor <http://www.zezula.net/en/mpq/download.html>
 - DBC editor (I use dbcutil) [http://www.mediafire.com/file/6er18emrr ... l.rar/file](http://www.mediafire.com/file/6er18emrr35f22d/dbcutil.rar/file)
 - A server repack for 1.12.1 client <https://www.mediafire.com/?exb0r89grerrmg0>
 - HeidiSQL (to edit server DB files) <https://www.heidisql.com/download.php>

 ****F.A.Q.****

 ***1. How do helmets and shoulders work in WoW?***

Helmets and shoulders are 3d models in the file format m2. Each expansion of WoW has a unique m2 format. This means that a m2 file from a later expansion does not work in a previous expansion, and vice versa. Therefore, it is important that we convert the m2 file to the correct expansion version in order for it to work ingame.

 ***2. Why do I need a Wrath of the Lich King client?***

The tools and scripts I use -only- work with the m2 version from wrath of the lich king. We will need models from WotLK in order to properly refrence from and align our custom model to make sure it fits to the character model.

 ***3. Why do I need a server repack to create custom models?***

You don't, but it makes testing them possible. You can't add models without replacing existing ones to someone else's server unless they input the correct data to the server DB and DBC.

 ***4. Why are there so many different versions of the same helmet model?***

Each race AND gender has a unique 3d model of a given helmet. You will have to create a unique version for all races and each gender if you want to allow each race/gender to wear a custom helmet. Helmets that correspond to a race and gender end with a specific suffix, such as HuM (human male) or DwF (Dwarf female) or OrM (Orc male).

 ***5. Why is there a left and right version for shoulder models?***

Shoulder models require a left and right version. If you want a custom model to rest on your right shoulder, you need to create a model that fits for the right shoulder. Unlike helmets, shoulders are not unique to races or genders THEREFORE you only need two models (one for left, one for right).

*Last edited by Kazgrim on Thu Aug 06, 2020 2:02 am, edited 1 time in total.*

## Post 7214 by Kazgrim (Patch Note Conspiracy Theorist) — 2020-08-06T01:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7214#p7214 | page 1 | era: pre-1.18.1 -->

Step 1. Exporting a character model and helmet model from WoW model viewer

*Last edited by Kazgrim on Thu Aug 06, 2020 1:58 am, edited 2 times in total.*

## Post 7215 by Kazgrim (Patch Note Conspiracy Theorist) — 2020-08-06T01:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7215#p7215 | page 1 | era: pre-1.18.1 -->

Step 2. Exporting the new custom model from Blender

*Last edited by Kazgrim on Thu Aug 06, 2020 1:56 am, edited 2 times in total.*

## Post 7216 by Kazgrim (Patch Note Conspiracy Theorist) — 2020-08-06T01:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7216#p7216 | page 1 | era: pre-1.18.1 -->

Step 3. Converting the .obj to a .m2

*Last edited by Kazgrim on Thu Aug 06, 2020 1:57 am, edited 1 time in total.*

## Post 7217 by Kazgrim (Patch Note Conspiracy Theorist) — 2020-08-06T01:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7217#p7217 | page 1 | era: pre-1.18.1 -->

Step 4. 010 Editing

## Post 7218 by Kazgrim (Patch Note Conspiracy Theorist) — 2020-08-06T01:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7218#p7218 | page 1 | era: pre-1.18.1 -->

Step 5. Converting to 1.12.1 version .m2

## Post 7219 by Kazgrim (Patch Note Conspiracy Theorist) — 2020-08-06T01:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7219#p7219 | page 1 | era: pre-1.18.1 -->

Step 6. Adding the custom model to a custom mpq patch

## Post 7220 by Kazgrim (Patch Note Conspiracy Theorist) — 2020-08-06T01:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7220#p7220 | page 1 | era: pre-1.18.1 -->

Step 7. Adding the custom model as an entry into client DBC

## Post 7221 by Kazgrim (Patch Note Conspiracy Theorist) — 2020-08-06T02:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7221#p7221 | page 1 | era: pre-1.18.1 -->

Step 8. Adding the item to your server

## Post 7222 by Kazgrim (Patch Note Conspiracy Theorist) — 2020-08-06T02:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7222#p7222 | page 1 | era: pre-1.18.1 -->

Step 9. The fun part

## Post 16616 by William1103 — 2022-02-02T09:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16616#p16616 | page 1 | era: pre-1.18.1 -->

> **Kazgrim wrote: Thu Aug 06, 2020 1:55 am**
> Step 4. 010 Editing

Hello, could you pls continue your post, Thanks a lot

## Post 17506 by Moonlight — 2022-03-13T02:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17506#p17506 | page 1 | era: pre-1.18.1 -->

Not to be rude but, Is this the entire guide? Just a few words of text for each step? I feel like I'm not seeing something or missing something, was something deleted?   sad_turtle_head

## Post 17509 by Error404 — 2022-03-13T12:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17509#p17509 | page 1 | era: pre-1.18.1 -->

Hello,
It's not completed at least but you can begin by download the programs and after find some tutorial on Youtube or Google depending what you want to do :)

Ghoulberg

## Post 17517 by Moonlight — 2022-03-13T20:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17517#p17517 | page 1 | era: pre-1.18.1 -->

Ok cool, thank you! Just trying to create my own helmet, like the picture at the very top. I'll look around for now. Can't wait for this to come out!

## Post 27624 by Sstrmn2 — 2022-10-20T19:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27624#p27624 | page 1 | era: pre-1.18.1 -->

Hi Kazgrim. Do you know how to import a 1.12.1 character model with all of its assets to blender to make edits?

## Post 27690 by Elkepwn (Barrens Chat Casualty) — 2022-10-22T07:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27690#p27690 | page 1 | era: pre-1.18.1 -->

Amazing work m8!

## Post 29996 by Ivanturtle — 2022-11-29T07:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29996#p29996 | page 1 | era: pre-1.18.1 -->

I'd love to start messing around with and making objects of my own, but I can't even seem to open the model viewer. It keeps telling me it 'could  not find my world of warcraft data folder'

## Post 30340 by Elkepwn (Barrens Chat Casualty) — 2022-12-08T08:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30340#p30340 | page 1 | era: pre-1.18.1 -->

> **Ivanturtle wrote: Tue Nov 29, 2022 7:43 am**
> I'd love to start messing around with and making objects of my own, but I can't even seem to open the model viewer. It keeps telling me it 'could  not find my world of warcraft data folder'

Did you use the folder from the 3.3.5a client?

## Post 31466 by Ivanturtle — 2022-12-24T00:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31466#p31466 | page 1 | era: pre-1.18.1 -->

[/quote]

Did you use the folder from the 3.3.5a client?
[/quote]

Out of curiosity, would the WotLK classic client from Blizz work? I couldn't figure out what to even do with the which folder tbh, lol. I can't even open the model viewer exe.

## Post 33452 by Exurok — 2023-01-29T15:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33452#p33452 | page 1 | era: pre-1.18.1 -->

> **Ivanturtle wrote: Tue Nov 29, 2022 7:43 am**
> I'd love to start messing around with and making objects of my own, but I can't even seem to open the model viewer. It keeps telling me it 'could  not find my world of warcraft data folder'

The issue is in the userSettings folder of your WMV.
Go in there, find the config.ini, open it with notepad and go down to [settings] there you'll find "Path=" is set to Kazgrim's personal loc, change it to where you have the WOTLK data directory.
You also need to do it for the last line "MPQFiles=" change it to the correct name :)
Remember the double backward dashes "\\"

Hope it works, 1.12 needs all the interest and modders it can get!

## Post 33793 by Kazgrim (Patch Note Conspiracy Theorist) — 2023-02-02T07:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33793#p33793 | page 1 | era: pre-1.18.1 -->

Importing 1.12.1 models into blender is not possible atm. Use m2mod3 to convert character models from common-2.mpq in your wotlk data folder into a .m2i file and edit it in blender 2.49b. You need the appropiate m2i import/export addon. When you are done, export the model from blender as a m2i, convert back to .m2, and then convert it to a 1.12.1 m2 using jm2converter.

## Post 48702 by Calebhat7 — 2023-06-03T16:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48702#p48702 | page 1 | era: pre-1.18.1 -->

My biggest issue is that there are some tutorials on YT and other (almost abandoned) forums about making all kinds of models, but just like this one - it requires a different method every singe time. I found a good guide for 3DS but all the links to the tools (e.g. 3ds to m2 converter) are dead. Many guides only support 3.3.5a or higher while 1.12 has almost none   scared_turtle_head

It would be nice if we could make a totally up to date tutorial about creating new assets for vanilla...

## Post 78029 by Jaguare19 — 2023-11-19T23:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78029#p78029 | page 1 | era: pre-1.18.1 -->

I would love to see this tutorial done T.T

## Post 78089 by Elkepwn (Barrens Chat Casualty) — 2023-11-20T14:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78089#p78089 | page 1 | era: pre-1.18.1 -->

> **Jaguare19 wrote: Sun Nov 19, 2023 11:27 pm**
> I would love to see this tutorial done T.T

[viewtopic.php?t=9360#p61292](https://forum.turtlecraft.gg/viewtopic.php?t=9360#p61292) ![😋](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f60b.svg)

## Post 123480 by Menosyl — 2025-03-23T23:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123480#p123480 | page 1 | era: pre-1.18.1 -->

Hello, I'm a turtle player from China, I'm trying to use the tutorial in your post to complete the model transfer, but I can't find the relevant tool on the Internet, can you provide him, my email is [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection#71074449461d18101f1619101e311e04051d1e1e1a5f121e1c), please help me.

## Post 123852 by Bittermens (Barrens Chat Casualty) — 2025-03-26T01:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123852#p123852 | page 1 | era: pre-1.18.1 -->

would be nice to teach how to edit player textures, mainly heads

Also how to change Ui CharacterCreateRaces portraits with custom ones since the helf and gobbo faces looks bad as the female faces while all males were made off official art and females were quick pasted screenshots with a few edits.

## Post 155073 by Azcron (Patch Note Conspiracy Theorist) — 2025-10-10T11:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155073#p155073 | page 1 | era: 1.18.1-announced-pre-release -->

What tool are you using to convert .m2i to .m2?

