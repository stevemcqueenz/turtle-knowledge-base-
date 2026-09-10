---
title: "Improved Models for Turtle WoW"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2514"
topic_id: 2514
forum_id: 29
forum: "Modding"
author: "Glarthir"
author_authority: "player"
posted: "2022-01-11T17:17:00Z"
last_post: "2023-11-26T21:16:00Z"
post_count: 25
pages: 1
fetched: "2026-09-10T10:42:41Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Improved Models for Turtle WoW

## Post 15663 by Glarthir (Barrens Chat Casualty) — 2022-01-11T17:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15663#p15663 | page 1 | era: pre-1.18.1 -->

Don't get your hopes up too high, I am not a modder and can't make turtle wow's custom races and so on work with HD models. What I can do tho, is delete objects in MPQ files, so that is what I am doing.

<https://www.nexusmods.com/worldofwarcraft/mods/846>

I simply downloaded the fantastic [https://model-changing.net/gc/9-improve ... s-for-112/](https://model-changing.net/gc/9-improved-models-for-112/) mod and started out by deleting all HD player character models, because I know they don't work in Twow.
Right now I am just playing the game casually and deleting bugged HD models I come across.

For now, some of the things I have deleted (deleted meaning: they have normal 1.12 models) are:
 -Ogres
 -Fulbolgs
 -Chickens (the auctionhouse chicken from the Twow shop had bugged textures)
 -Hydras
 -Almost all character creation screens, as some of them were already buggy in the original mod. Night Elf and Orc works tho.
 *-I think I saw a custom shop Raptor mount in Stormwind that looked kinda bugged, but I don't own all turtle shop mounts, so can't check those out, but all vanilla mounts seem to work

This is a WIP because as I said, I delete things I come across, so if you give it a go, feel free to comment here if you find a bugged creature and I'll remove it and update the file ASAP

I highly recommend combining this with the "High Res Resolution Pack for Vanilla and TBC Environment and Buildings" ([viewtopic.php?f=29&t=2496](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2496)) as it just looks awesome!

 *Edit: Please post screenshots when reporting stuff as it helps me identifying things, especially if I'm not certain what the mob is called in the game files.
As stated in a post in here, one bugged mob can mean all HD models getting deleted from the mod, as it seems the mod itself replaces the .M2 file (the model/meshes) for a single mob type, so I don't think there's anyway I can make for example, darnassus tiger HD and Darkshore tiger vanilla

*Last edited by Glarthir on Sun Jan 16, 2022 1:27 pm, edited 1 time in total.*

## Post 15667 by Celaris — 2022-01-11T18:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15667#p15667 | page 1 | era: pre-1.18.1 -->

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/JOJr1cT]

the winterspring tiger is a bit buggy lol

also the black war ram has messed up textures

## Post 15668 by Glarthir (Barrens Chat Casualty) — 2022-01-11T19:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15668#p15668 | page 1 | era: pre-1.18.1 -->

Both have been removed and file is uploading :D

## Post 15671 by Galendor (Patch Note Conspiracy Theorist) — 2022-01-11T20:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15671#p15671 | page 1 | era: pre-1.18.1 -->

Lynxes in Alah'thalas are broken, too.

## Post 15672 by Celaris — 2022-01-11T20:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15672#p15672 | page 1 | era: pre-1.18.1 -->

> **Glarthir wrote: Tue Jan 11, 2022 7:38 pm**
> Both have been removed and file is uploading :D

it appears you deleted all the files in the tiger folder but the problem was in the frostsabre folder with the RidingTigerLavender

## Post 15673 by Glarthir (Barrens Chat Casualty) — 2022-01-11T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15673#p15673 | page 1 | era: pre-1.18.1 -->

Oh damn, ty I'll fix it!

@Galendor what type of mob is the lynx? tiger or frostsaber?

## Post 15674 by Galendor (Patch Note Conspiracy Theorist) — 2022-01-11T21:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15674#p15674 | page 1 | era: pre-1.18.1 -->

> **Glarthir wrote: Tue Jan 11, 2022 8:56 pm**
> Oh damn, ty I'll fix it!
>
>  @Galendor what type of mob is the lynx? tiger or frostsaber?

It's recoloured druid cat form, as I can see.

## Post 15677 by Glarthir (Barrens Chat Casualty) — 2022-01-11T22:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15677#p15677 | page 1 | era: pre-1.18.1 -->

I'll see what I can do! I just made a discovery, when I unpacked all the files and converted them to PNG files, I found out the reason things are bugging are that the original author packed some of the original skins instead of the ones that fit the new model!
This is the vanilla skin (RidingTigerSkinLavender):

[embed: https://s9e.github.io/iframe/2/imgur.min.html#snaKazO]

This is the HD skin (RidingTigerSkinLavender1:

[embed: https://s9e.github.io/iframe/2/imgur.min.html#QDCIvs8]

Right now I am learning how to navigate WoW.tool, but I'm having trouble figuring out wether the HD models are from cata, WoD or newer as I haven't touched retail in 10 years or so, so if anyone knows, let me know!

So anyways, I think for now, instead of deleting stuff, I'll try and unpack the whole mob's folder and if the original is the problem in all the glitches, I'll simply try and pick the skin thats closes to the original, so that I don't have to delete an entire HD mob.

Keep sending in those bugged mobs!

## Post 15680 by Celaris — 2022-01-12T00:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15680#p15680 | page 1 | era: pre-1.18.1 -->

The models are a mixture of expansions. It appears to be up to BFA & some of them appear to be custom textures. Like that lavender texture is custom

## Post 15682 by Bitterman — 2022-01-12T00:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15682#p15682 | page 1 | era: pre-1.18.1 -->

i kinda wish for this too [https://model-changing.net/files/file/2 ... d-for-335/](https://model-changing.net/files/file/226-vanilla-tbc-and-wotlk-clothing-textures-upscaled-for-335/)

## Post 15684 by Glarthir (Barrens Chat Casualty) — 2022-01-12T01:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15684#p15684 | page 1 | era: pre-1.18.1 -->

@Bitterman Actually I was gonna make a post about that.. I have sorted out all TBC and WOTLK files from that mod and thrown all files into a vanilla MPQ, but sadly the game still crashes on login. I have written a comment on the mod page and asked the author if it is possible and if he can use my sorted files. I don't know if 1.12 is simply incompatible with higher resolution textures or what is wrong, but if anyone want's my sorted file to give making it work a shot, let me know.

## Post 15686 by Bitterman — 2022-01-12T01:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15686#p15686 | page 1 | era: pre-1.18.1 -->

It would be nice if @kazgrim could look at this

## Post 15689 by Imagician — 2022-01-12T03:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15689#p15689 | page 1 | era: pre-1.18.1 -->

Got another cat-like mount with bugged textures, 'Swift Darnassian Nightsaber' - Super cool pack still though, i'll just be using a different mount until the the next update!

![Image](https://media.discordapp.net/attachments/840293806519746614/930661647654199306/unknown.png)

 - Also, would it be possible to add the TBC-onwards version of the vanish/gouge sound?
[embed: https://www.youtube.com/embed/BIpz4u2M8PA]
for refference
(1 and 2 are the vanilla sounds)

## Post 15843 by Duzolt — 2022-01-15T05:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15843#p15843 | page 1 | era: pre-1.18.1 -->

Hi on my side ; i Have some textures bugs with Son of Cenarius ( no textures belt ) and Daughter of Cenarius ( creepy textures on the face and the model ).

This was during my time ine Stonetalon in the NE zone in the north.

## Post 15907 by Glarthir (Barrens Chat Casualty) — 2022-01-16T13:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15907#p15907 | page 1 | era: pre-1.18.1 -->

@Imagician you can quickly do a swap yourself by finding the sound you want to replace in the sound.MPQ file and then just put the new sound in the right folders within your data folder:)

As of now, I want to make it clear that I have no kind of experience in wow modding, so everything people link will not get fixed, it will just be deleted and reverted to the vanilla model. And due to my lack of experience, the way I have been doing it as of now means that one broken texture on one mob type specific to a zone means all mobs of that type gets deleted from the MPQ. I wish I could do more!

## Post 15913 by Pokyto — 2022-01-16T15:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15913#p15913 | page 1 | era: pre-1.18.1 -->

> **Glarthir wrote: Tue Jan 11, 2022 5:17 pm**
> I highly recommend combining this with the "High Res Resolution Pack for Vanilla and TBC Environment and Buildings" ([viewtopic.php?f=29&t=2496](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2496)) as it just looks awesome!

so... how does one would start doing this? both your file and the high res file has the same name, and rewrites it

## Post 15919 by Glarthir (Barrens Chat Casualty) — 2022-01-16T15:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15919#p15919 | page 1 | era: pre-1.18.1 -->

Just name one of them patch-4.MPQ, I'm not quite sure how load order works in wow, but I imagine the lowest number is loaded first and then overwritten by latter numbers. At least that's how it works in bethesda games xD

## Post 17000 by Valadorn (Patch Note Conspiracy Theorist) — 2022-02-12T22:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17000#p17000 | page 1 | era: pre-1.18.1 -->

I promised a guy to find this post, so Im gonna make it go to the top again :D

## Post 17172 by Volkyte (Patch Note Conspiracy Theorist) — 2022-02-21T10:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17172#p17172 | page 1 | era: pre-1.18.1 -->

Banshees have white airs and kobolds white horns

## Post 20442 by Sentaibrad — 2022-07-26T18:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20442#p20442 | page 1 | era: pre-1.18.1 -->

I appreciate the time you're taking to do this. :D

## Post 20448 by Selivanyro — 2022-07-26T19:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20448#p20448 | page 1 | era: pre-1.18.1 -->

Friendly hello, maybe you have an idea on how to revert patch changes and go back to original pre 1.16.1 high elf models ?
I'm totally frustuated with that fact
Really want this bad dream to end

## Post 20459 by Redmagejoe (Grandmaster of Forum PvP) — 2022-07-26T21:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20459#p20459 | page 1 | era: pre-1.18.1 -->

I'm the current model modder around here, but I work with Warlords/Legion models. I have no intention of working on a separate MPQ just to revert to buggy High Elf models, because not only does it eat up an MPQ slot in load order, which are finite, but then I will have to deal with people posting about all the animation bugs and everything that came with them, and be expected to support a product that I ultimately have no interest in as it is.

I imagine anyone else who may be able to do model changes that are still around feel the same way. It would require too much energy invested for ultimately minimal return/appreciation. If you want to make a personal mod for yourself, there are tools and resources available online and in the Turtle HD thread to allow you to do so yourself.

## Post 20555 by Gurky (Barrens Chat Casualty) — 2022-07-27T23:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20555#p20555 | page 1 | era: pre-1.18.1 -->

> **Selivanyro wrote: Tue Jul 26, 2022 7:23 pm**
> Friendly hello, maybe you have an idea on how to revert patch changes and go back to original pre 1.16.1 high elf models ?
>  I'm totally frustuated with that fact
>  Really want this bad dream to end

We are in talks about some options for the future for now use the workaround.

## Post 26670 by Spectranocturne — 2022-10-03T18:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26670#p26670 | page 1 | era: pre-1.18.1 -->

I don't see any changes when I add patch-3.MPQ to my Data directory. Is this because the game is on 1.16.3 now?

Edit: Nevermind, I needed to use the Byte Patcher before I was able to see changes from texture mods.

## Post 78849 by Bashmak — 2023-11-26T21:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78849#p78849 | page 1 | era: pre-1.18.1 -->

Greetings!
I've posted bug ticket, and found that bug lead to models patch it concerning work of couple of recipes:
[https://github.com/slowtorta/turtlewow- ... ssues/4741](https://github.com/slowtorta/turtlewow-bug-tracker/issues/4741)
can you please fix that problem?
Also if you didnt know, weapon swap hand\back\rdd out of combat dont work ok with new models.

Thank you for your work!

