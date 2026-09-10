---
title: "[Release] A little extra for Female High Elves, Humans, Night Elves"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12120"
topic_id: 12120
forum_id: 29
forum: "Modding"
author: "Watchers3d"
author_authority: "player"
posted: "2023-12-09T18:46:00Z"
last_post: "2026-04-29T17:42:00Z"
post_count: 512
pages: 15
fetched: "2026-09-10T10:37:15Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Release] A little extra for Female High Elves, Humans, Night Elves

## Post 80426 by Watchers3d (Barrens Chat Casualty) — 2023-12-09T18:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80426#p80426 | page 1 | era: pre-1.18.1 -->

****A little extra for Female High Elves, Humans, Night Elves, Trolls.****
Due to updates to current reissue of HD Patch, Female Humans are unavailable.

This mod introduces geometry, animation and texture changes to female high elves, night elves, humans and trolls.

![Image](https://i.imgur.com/mRc1Eel.png)

 *****Is there any known bugs?*****
Some helmets with ear cutouts do not display high elf female ears. Solution is not yet known to me (Apr. 14 2024).

 *****To my taste textures are kind of low resolution. Can you make giga crisp textures?*****
This game is 10 thousand years old.

 *****Can you make a standalone version, that will work without Patch-A from HD Mod?*****
I'll think about it.

 *****I've noticed some bugs! Where can I report it?*****
In this topic. Alternatively, you can send me a private message.

If there's any clipping, that is exclusively fault of this mod and such clippings are absent in regular HD model, holler. I'll fix it. Maybe  happy_turtle_head .

Installation:
 1. This mod requires Patch-A from HD Project. Use most recent fork you can find in Modding forum section.
 2. Drop patch-F in WorldofWarcraft/Data folder.
 3. If you use Turtle Launcher, enable mods in the launcher before booting up the game.

[**Download from Google Drive**](https://drive.google.com/uc?export=download&id=1IJqp9Bt9ClElsbVCsFThSNDNoMvB-lFF) Updated Apr 09 2026

[**Download older version**](https://drive.google.com/uc?export=download&id=1wtFoApt6T0ZrrgJCcpVgXkupPjKeS996) Updated Mar 27 2026

 ****Credits:****
 **Starrfury** - High Elf bow animations, High Elf weapon scaling to Legion standards, attachments tweaks, one handed pierce animation.

---

 **A Little Extra **Less Thicc Version**** by [Deezhugs](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=234070)
Features slimmer, toned down body shapes in comparison to default version. Just as original, intended to be used with patch-A.

[**Download from Google Drive folder**](https://drive.google.com/drive/folders/1YBT0JvcE_k9BkzyVKSM4D94IVKQ1IAII)

---

 **A Little Extra **Retextured**** by [Necropheus](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=751149)
Hand-painted set of base body textures to replace default underwear textures. Intended to be used with A Little extra.

[**Download from Google Drive folder**](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)

---

 ****Resource files****
 ***Click the spoiler below the image***
![Image](https://i.imgur.com/Ne6NEa9.png)

You guys have asked to post source files so you can edit, make your own versions, so here they are. Keep it mind that I'm not going to talk here about "how to 3d", "how to install Blender" and whatnot. And do not ask me about that. Go to legacy forums, WoW Blender Studio Discord channel, general WoW modding Discord, Turtle modding Discord sub-channel to seek help there if you need it. I'll just talk about what's going on within my models a little.

[Google Drive Download A Little Extra Source files](https://drive.google.com/file/d/131kye4U8QtBfVe0ROnFz1tgbnMN_Df_d/view?usp=drive_link)
Updated Feb 26 2026

Within .zip with my models you'll find wotlk-style importable to Blender models. You can import WotLK models to blender using WoW Blender Studio. How to install and work with WBS you can read all about in WoW Blender Studio Discord channel.

To backport those models to vanilla I used jm2converter. You can find it online or in this topic. It works on Java, so you have to install Java too. You can operate jm2converter via Windows PowerShell/Command Prompt.

Here's how command looks like: Code: Select all

```
java -jar "PATH TO jm2converter" -in pathtoWotlKModel -out pathtoconvertedmodel -cl
```

And here's an example of it: Code: Select all

```
java -jar "C:\Users\JoeMama\Desktop\jm2converter\jm2converter.jar" -in C:\Users\JoeMama\Desktop\jm2converter\jm2WotLK\humanfemale.m2 -out C:\Users\JoeMama\Desktop\jm2converter\jm2Vanilla\humanfemale.m2 -cl
```

People get confused sometimes on how to operate jm2converter. I'll break the example above further
Code: Select all

```
java -jar "C:\Users\JoeMama\Desktop\jm2converter\jm2converter.jar"
```

This part is basically a path to jm2converter. You have to specify path to where jm2converter.jar is stored. Code: Select all

```
-in C:\Users\JoeMama\Desktop\jm2converter\jm2WotLK\humanfemale.m2
```

Path to WotLK model (If you exported mine from WBS, then, this path must point to your export from WBS). Code: Select all

```
-out C:\Users\JoeMama\Desktop\jm2converter\jm2Vanilla\humanfemale.m2
```

Path to where converted to Vanilla model will be stored. So, yes. There's nothing there in that folder before you execute jm2converter command. File will be written after you execute it. Code: Select all

```
-cl
```

Here you basically ask jm2converter to do the thing. You of course have to execute the whole command, without breaking it down.

 *****How to fix sheathing animation?*****
"fix sheath animations from Legion-Era player character models. In struct M2Array attachments, find the value of SHOULDER_RIGHT and SHOULDER_LEFT. Take note of the bone ID. Then use these IDs in struct M2Array events in the $SHR and $SHL fields respectively." took it from this [modding primer](https://docs.google.com/document/d/1kUrZus7HAaxpJeVFX2bJ2iyyZfUR6ZJAmBygIPo-NHA/) by Astricon. Such edits are done via 010 Editor. You'll need a template that can read vanilla m2's also. You can download it from this topic.

 *****No textures?*****
These models are made specifically so they can work with Turtle HD Project. They use textures from it. If you need to preview textures within Blender or for whatever reason you might need them, just take it from HD Project.

 *****What's going on with Blood Elf head UV maps?*****
In HD Project, backport of Blood Elves is very specific for unknown reasons for me. They use EXTRA textures, that covers some parts of the head, like ears, some skin below the chin. Look at the UVs to know the specifics. And also HD Project Blood Elves have this not-like-for-others head textures. So, I pulled my hair out making UVs fit HD Project textures. The result is a bit kekw, but that's how it is. It works at least. If you want to restore default UVs for your purposes, just take them from WoD default models.

[Warlords Of Draenor default models](https://drive.google.com/file/d/1k-vl352VaMCu0Jiq2bQBECu2tAWvfuYb/view?usp=drive_link)
[Legion default models](https://drive.google.com/file/d/1i7E47HDGS-6fx9TA27s9j90GDkglJBLe/view?usp=drive_link)

Here's an archive with default Warlords of Draenor models, I believe I used them as a base for my edits. But I did not backported them to WotLK. You have to do it yourself. You need Legacy MultiConverter for this purpose. You can find it online or in this topic. I post this archives in case you ever need to restore some hairstyles, that are not used in default Vanilla, or some other meshes. If you have problems with polygon count when importing them to Blender via WBS, delete unnecessary geometry using M2Mod. You can find it online. It works with different Blender 2.91 version, but it's whatever. I believe that it's what I did for some of my backports.

 ****Some software mentioned previously:****
[m2mod 9.0.0](https://drive.google.com/file/d/1vJQfqugRvRimMOnaTlo6jrq9VEJOE7vC/view?usp=drive_link) works with blender version 2.91. m2mod you can also find on bitbucket
[suncurio-blender-m2i-scripts for m2mod](https://drive.google.com/file/d/1dPZZd17mVv94py8wsxEpKulFvtSPJMMj/view?usp=drive_link)
[legacy multiconverter 3.3.0](https://drive.google.com/file/d/1nfvyc1ofvzSd-MduJ4v8_TuG8g7HVVJn/view?usp=drive_link)
[edited legacy multiconverter 3.3.0, polygon limitation removed](https://drive.google.com/file/d/10qv_fRqT2Rxm9wooGpyDs7TlVCTke7Lw/view?usp=drive_link)
[jm2converter](https://drive.google.com/file/d/1QMKc2OOFEuM0pkyL_eStgyEbUs8DAl7J/view?usp=drive_link) you have to install Java for it to work
[010 Editor template to read vanilla m2](https://drive.google.com/file/d/1VxCUjM5zEgf2tkW7_nTrVAEE6pM-dgTl/view?usp=drive_link)

 ****Useful topic posts:****
[Entry level modding: changing any in-game weapon to Frostmourne](https://forum.turtlecraft.gg/viewtopic.php?p=99966#p99966)
[How to fix UVs to match existing textures](https://forum.turtlecraft.gg/viewtopic.php?p=127478#p127478)
[General WBS setup guide on WotLK model editing by Deezhugs](https://forum.turtlecraft.gg/viewtopic.php?p=138370#p138370)
[Weight Painting](https://forum.turtlecraft.gg/viewtopic.php?p=129925#p129925)

*Last edited by Watchers3d on Fri Apr 10, 2026 7:28 am, edited 109 times in total.*

## Post 80430 by Tacticalnelf (Barrens Chat Casualty) — 2023-12-09T19:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80430#p80430 | page 1 | era: pre-1.18.1 -->

![Image](https://i.pinimg.com/474x/c6/73/75/c673752c8ddb995b795111a63174263f.jpg)

## Post 80431 by Seigar — 2023-12-09T19:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80431#p80431 | page 1 | era: pre-1.18.1 -->

The power of PC gaming

## Post 80434 by Ataika (Grandmaster of Forum PvP) — 2023-12-09T19:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80434#p80434 | page 1 | era: pre-1.18.1 -->

Damn now i want to play helves

## Post 80436 by Blackduck (Barrens Chat Casualty) — 2023-12-09T20:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80436#p80436 | page 1 | era: pre-1.18.1 -->

I like the standard high elf nice and petite

## Post 80438 by Biteyou (Barrens Chat Casualty) — 2023-12-09T20:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80438#p80438 | page 1 | era: pre-1.18.1 -->

This is the kind of modding we need

## Post 80439 by Drubarrymooer (Grandmaster of Forum PvP) — 2023-12-09T20:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80439#p80439 | page 1 | era: pre-1.18.1 -->

Lol this is really sad.

## Post 80443 by Blackduck (Barrens Chat Casualty) — 2023-12-09T20:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80443#p80443 | page 1 | era: pre-1.18.1 -->

> **Biteyou wrote: Sat Dec 09, 2023 8:15 pm**
> This is the kind of modding we need

## Post 80444 by Wilsonsds (Patch Note Conspiracy Theorist) — 2023-12-09T20:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80444#p80444 | page 1 | era: pre-1.18.1 -->

plz do this with Nelfs and Humans too plzplzplzplzplzplzplzpzlzplzplzpz

## Post 80449 by Tawneyturtle (Barrens Chat Casualty) — 2023-12-09T21:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80449#p80449 | page 1 | era: pre-1.18.1 -->

Based beyond belief ignore the haters Queen/King let your creative side shine!

## Post 80450 by Milkthief — 2023-12-09T21:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80450#p80450 | page 1 | era: pre-1.18.1 -->

now THIS is exactly the type of content that Turtle Wow needs, don't let any of the milquetoast ERP shamers bully you into deleting this post. Thank you for creating this.

## Post 80451 by Milkthief — 2023-12-09T21:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80451#p80451 | page 1 | era: pre-1.18.1 -->

> **Wilsonsds wrote: Sat Dec 09, 2023 8:43 pm**
> plz do this with **Nelfs** and Humans too plzplzplzplzplzplzplzpzlzplzplzpz

PLZPPLZPLZPLZPLZ +1

## Post 80452 by Watchers3d (Barrens Chat Casualty) — 2023-12-09T21:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80452#p80452 | page 1 | era: pre-1.18.1 -->

Thank you for your kind words. I'm glad you like it.

I'll consider your suggestions, such as night elves and humans in the near future.

## Post 80456 by Nett — 2023-12-09T22:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80456#p80456 | page 1 | era: pre-1.18.1 -->

Now hear me out... Can you do this to... Taurens?

## Post 80458 by Fizzler (Patch Note Conspiracy Theorist) — 2023-12-09T22:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80458#p80458 | page 1 | era: pre-1.18.1 -->

I’m convinced

## Post 80459 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-12-09T22:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80459#p80459 | page 1 | era: pre-1.18.1 -->

Y'all degenerates.  insidious_turtle

Thanks OP, nice work!

## Post 80462 by Zvyrhol (Grandmaster of Forum PvP) — 2023-12-09T22:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80462#p80462 | page 1 | era: pre-1.18.1 -->

New model looks amazing. But tbh breasts are too big.

## Post 80489 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-10T04:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80489#p80489 | page 1 | era: pre-1.18.1 -->

Necessary? Not at all
Useful? Not at all
Am I going to use it? Definitely
Should you do it with the other races? Please and thank you

Now I have another BIG PAIR of reasons to shout...
FOR THE ALLIANCE!

Plus, I like you preserve the body form, you don't make that...parts exageratedly bigger as other mods for retail that I saw in the past.
Good job

## Post 80504 by Foobs (Barrens Chat Casualty) — 2023-12-10T09:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80504#p80504 | page 1 | era: pre-1.18.1 -->

> **Watchers3d wrote: Sat Dec 09, 2023 6:46 pm**
> ![Image](https://lh3.googleusercontent.com/drive-viewer/AK7aPaDT3FpUIoE1d1XKQ9hzZb7TYUqy0SPr-kLgOMRWlcfIzvv2wQ2emPzPTp_1XF4Qp_e3NdE5JG4Psw8Eg8CYYgOYVeVSrQ=w2560-h1323)
>
>  **Patch-A from HD Mod is required to run this mod properly.**
>
>
>  This mod introduces slight geometry and texture changes to female high elves.
>
>  ***Is there any known bugs?***
>  Mage spell Arcane Missiles doesn't display correctly, as it doesn't in default HD Mod model right now. As of today solution is not yet discovered/known to me. (dec 9 2023)
>
>  ***Can you also introduce some changes to other female models?***
>  I don't know. Maybe later.
>
>  ***To my taste textures are kind of low resolution. Can you make giga crisp textures?***
>  This game is 10 thousand years old.
>
>  At first I made my own UV map and textures for high elf female face, but then I reconsidered because I don't think I can support dbc-invasive version for long enough.
>  I've tested this mod on my 24 level hc mage and some starter gear characters. If there's any clipping, that is exclusively fault of this mod and such clippings are absent in regular HD model, holler. I'll fix it. Maybe  happy_turtle_head .
>
>  ![Image](https://lh3.googleusercontent.com/drive-viewer/AK7aPaAkwb68YGQOsl62xzuaG3CJIdXGd-w9uyKTE-mt4912emg10L1zCrvPjKyBXYz8EbYsKONtayapkIAJuYsHlEON_kFN=w2560-h1323)
>
>  **Download from Google Drive**
>  [https://drive.google.com/uc?id=1x86hEuh ... t=download](https://drive.google.com/uc?id=1x86hEuhuMFUUNHTqGWGI7asWvLkSKZ3x&export=download)
>
>
> [embed: //drive.google.com/file/d/1x86hEuhuMFUUNHTqGWGI7asWvLkSKZ3x/preview]

Love it.

Just prefer that the mod only effect the BE female and be independant of the HD addon. I don't want to change anything else besides the females.

## Post 80519 by Reploidrocsa (Bug Report Enthusiast) — 2023-12-10T12:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80519#p80519 | page 1 | era: pre-1.18.1 -->

Darknest forums have more stuff like that, probably for every race if you look long enough.

Great adition tho, i would def use it if it wasn't because hd patch causes me issues by showing textures (kt circles not disapearing, hurricanes staying there and grobulus clouds not showing)

Edit:
Found one of those threads, maybe some of the mpq's can be backported or work out of the box, haven't confirmed
[https://forums.darknestfantasy.com/inde ... bfa.45291/](https://forums.darknestfantasy.com/index.php?threads/simple-and-normal-model-edits-for-bfa.45291/)

*Last edited by Reploidrocsa on Sun Dec 10, 2023 9:41 pm, edited 1 time in total.*

## Post 80521 by Bigsmerf (Grandmaster of Forum PvP) — 2023-12-10T12:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80521#p80521 | page 1 | era: pre-1.18.1 -->

> **Nett wrote: Sat Dec 09, 2023 10:02 pm**
> Now hear me out... Can you do this to... Taurens?

We need tauren mommies asap. Turtle is doomed to fail without them.

## Post 80533 by Bittermens (Barrens Chat Casualty) — 2023-12-10T13:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80533#p80533 | page 1 | era: pre-1.18.1 -->

Now Gib Nelves, Humans and Orcs for scientific research.

## Post 80552 by Tacticalnelf (Barrens Chat Casualty) — 2023-12-10T17:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80552#p80552 | page 1 | era: pre-1.18.1 -->

> **Bigsmerf wrote: Sun Dec 10, 2023 12:44 pm**
> > **Nett wrote: Sat Dec 09, 2023 10:02 pm**
> > Now hear me out... Can you do this to... Taurens?
>
>   We need tauren mommies asap. Turtle is doomed to fail without them.

Gnome mommies, gime them!!!!

## Post 80592 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-11T00:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80592#p80592 | page 1 | era: pre-1.18.1 -->

> **Tacticalnelf wrote: Sun Dec 10, 2023 5:43 pm**
> > **Bigsmerf wrote: Sun Dec 10, 2023 12:44 pm**
> > > **Nett wrote: Sat Dec 09, 2023 10:02 pm**
> > > Now hear me out... Can you do this to... Taurens?
> >
> >   We need tauren mommies asap. Turtle is doomed to fail without them.
>
>   Gnome mommies, gime them!!!!

How the hell you will give the gnomes...that? hahahaha

Gnomes only have one purpose, be impaled, cooked or slammed.

## Post 80755 by Fischminister — 2023-12-11T21:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80755#p80755 | page 1 | era: pre-1.18.1 -->

where keylogger ?

## Post 80771 by Jambiya (Barrens Chat Casualty) — 2023-12-12T00:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80771#p80771 | page 1 | era: pre-1.18.1 -->

Bulges for the men when?

## Post 80792 by Mac (Bug Report Enthusiast) — 2023-12-12T06:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80792#p80792 | page 1 | era: pre-1.18.1 -->

> **Watchers3d wrote: Sat Dec 09, 2023 6:46 pm**
> ![Image](https://lh3.googleusercontent.com/drive-viewer/AK7aPaDT3FpUIoE1d1XKQ9hzZb7TYUqy0SPr-kLgOMRWlcfIzvv2wQ2emPzPTp_1XF4Qp_e3NdE5JG4Psw8Eg8CYYgOYVeVSrQ=w2560-h1323)
>
>  **Patch-A from HD Mod is required to run this mod properly.**
>
>
>  This mod introduces slight geometry and texture changes to female high elves.
>
>  ***Is there any known bugs?***
>  Mage spell Arcane Missiles doesn't display correctly, as it doesn't in default HD Mod model right now. As of today solution is not yet discovered/known to me. (dec 9 2023)
>
>  ***Can you also introduce some changes to other female models?***
>  I don't know. Maybe later.
>
>  ***To my taste textures are kind of low resolution. Can you make giga crisp textures?***
>  This game is 10 thousand years old.
>
>  At first I made my own UV map and textures for high elf female face, but then I reconsidered because I don't think I can support dbc-invasive version for long enough.
>  I've tested this mod on my 24 level hc mage and some starter gear characters. If there's any clipping, that is exclusively fault of this mod and such clippings are absent in regular HD model, holler. I'll fix it. Maybe  happy_turtle_head .
>
>  ![Image](https://lh3.googleusercontent.com/drive-viewer/AK7aPaAkwb68YGQOsl62xzuaG3CJIdXGd-w9uyKTE-mt4912emg10L1zCrvPjKyBXYz8EbYsKONtayapkIAJuYsHlEON_kFN=w2560-h1323)
>
>  **Download from Google Drive**
>  [https://drive.google.com/uc?id=1x86hEuh ... t=download](https://drive.google.com/uc?id=1x86hEuhuMFUUNHTqGWGI7asWvLkSKZ3x&export=download)
>
>
> [embed: //drive.google.com/file/d/1x86hEuhuMFUUNHTqGWGI7asWvLkSKZ3x/preview]

Bravo.

## Post 80811 by Nib42 — 2023-12-12T12:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80811#p80811 | page 1 | era: pre-1.18.1 -->

very nice. too bad the legion human male looks so stupid i won't be using it.

## Post 81112 by Watchers3d (Barrens Chat Casualty) — 2023-12-14T00:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81112#p81112 | page 1 | era: pre-1.18.1 -->

Sharing a little footage of work in progress. First import and test of female human.

[embed: //drive.google.com/file/d/1Amq3BfPv5U7Y2-npSgC2E00Th78d8rPl/preview]

## Post 81113 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-14T00:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81113#p81113 | page 1 | era: pre-1.18.1 -->

> **Watchers3d wrote: Thu Dec 14, 2023 12:01 am**
> Sharing a little footage of work in progress. First import and test of female human.
>
>
> [embed: //drive.google.com/file/d/1Amq3BfPv5U7Y2-npSgC2E00Th78d8rPl/preview]

You're on fire damn it, this looks so good.
GOOD JOB!   insidious_turtle   insidious_turtle   insidious_turtle

## Post 81420 by Tacticalnelf (Barrens Chat Casualty) — 2023-12-16T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81420#p81420 | page 1 | era: pre-1.18.1 -->

> **Watchers3d wrote: Thu Dec 14, 2023 12:01 am**
> Sharing a little footage of work in progress. First import and test of female human.
>
>
> [embed: //drive.google.com/file/d/1Amq3BfPv5U7Y2-npSgC2E00Th78d8rPl/preview]

hehe
![Image](https://static.wikia.nocookie.net/94f266f6-787d-4c3e-aae7-f8e03dfee02a/scale-to-width/755)

## Post 82406 by Watchers3d (Barrens Chat Casualty) — 2023-12-23T06:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82406#p82406 | page 1 | era: pre-1.18.1 -->

Hello people. I've already made humans and night elves, but let's wait until HD Mod authors make their updates, since this mod is dependent on their patch-A, and so people wouldn't need to redownload everything again and again. Maybe I'll tinker something else until then. Happy holidays.

[embed: //drive.google.com/file/d/15oN_lVy2gnp5MmR691OWCYcZ5yS98Wy5/preview]

At first I've changed night elves face geometry. It's loosely based on Archer unit from Reforged version of Warcraft 3, but as of now I've scrapped the idea, because of helmets and stuff like that. Maybe I'll bring it back in with some changes, so helmets and people's favorite demon hunter eye wraps will fit it. Or maybe I wont.

[embed: //drive.google.com/file/d/1xdWhnr5ExnPAb7BrN-9AQHWKlxCISfDr/preview]

*Last edited by Watchers3d on Thu Feb 01, 2024 4:16 am, edited 1 time in total.*

## Post 82407 by Dracarusggotham (Grandmaster of Forum PvP) — 2023-12-23T06:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82407#p82407 | page 1 | era: pre-1.18.1 -->

> **Watchers3d wrote: Sat Dec 23, 2023 6:13 am**
> Hello people. I've already made humans and night elves, but let's wait until HD Mod authors make their updates, since this mod is dependent on their patch-A, and so people wouldn't need to redownload everything again and again. Maybe I'll tinker something else until then. Happy holidays.
>
>  ![Image](https://lh3.googleusercontent.com/drive-viewer/AEYmBYSeNJ1SjDK59YzJV5RfP4C6S5SRjN3dI_9sHlq1NyP9kot3CvMcHMIMNF4tJsgAXNipRcp7zD2PlqbZ9OHJPiaIyMol1Q=w2560-h1313)
>
>  At first I've changed night elves face geometry. It's loosely based on Archer unit from Reforged version of Warcraft 3, but as of now I've scrapped the idea, because of helmets and stuff like that. Maybe I'll bring it back in with some changes, so helmets and people's favorite demon hunter eye wraps will fit it. Or maybe I wont.
>
>  ![Image](https://lh3.googleusercontent.com/drive-viewer/AEYmBYSaQ2GYA2gtaMuVUNw6nD5GHOJYBPsSfASPRXvmyrU1Ey1DbyicZD0ii6YPAvu7CJ_NlncgJqm2FKqC9Z7du8K3fztEkg=w2560-h1313)

Damn, that's a good job.
I never expected seeing this kind of mod in this server, but it's a great work.
I can't wait for the update of the HD mod.

## Post 82409 by Volkyte (Patch Note Conspiracy Theorist) — 2023-12-23T06:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82409#p82409 | page 1 | era: pre-1.18.1 -->

![Image](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGtqdTQzc2ZoaXdkZGlrMmZnYzF6bWZqbnhoN2lhZWZndnpmOGV3YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hAlv1YEJeULEk/giphy.gif)

## Post 82423 by Ataika (Grandmaster of Forum PvP) — 2023-12-23T09:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82423#p82423 | page 1 | era: pre-1.18.1 -->

> **Dracarusggotham wrote: Sat Dec 23, 2023 6:16 am**
> > **Watchers3d wrote: Sat Dec 23, 2023 6:13 am**
> > Hello people. I've already made humans and night elves, but let's wait until HD Mod authors make their updates, since this mod is dependent on their patch-A, and so people wouldn't need to redownload everything again and again. Maybe I'll tinker something else until then. Happy holidays.
> >
> >  ![Image](https://lh3.googleusercontent.com/drive-viewer/AEYmBYSeNJ1SjDK59YzJV5RfP4C6S5SRjN3dI_9sHlq1NyP9kot3CvMcHMIMNF4tJsgAXNipRcp7zD2PlqbZ9OHJPiaIyMol1Q=w2560-h1313)
> >
> >  At first I've changed night elves face geometry. It's loosely based on Archer unit from Reforged version of Warcraft 3, but as of now I've scrapped the idea, because of helmets and stuff like that. Maybe I'll bring it back in with some changes, so helmets and people's favorite demon hunter eye wraps will fit it. Or maybe I wont.
> >
> >  ![Image](https://lh3.googleusercontent.com/drive-viewer/AEYmBYSaQ2GYA2gtaMuVUNw6nD5GHOJYBPsSfASPRXvmyrU1Ey1DbyicZD0ii6YPAvu7CJ_NlncgJqm2FKqC9Z7du8K3fztEkg=w2560-h1313)
>
>   Damn, that's a good job.
>  I never expected seeing this kind of mod in this server, but it's a great work.
>  I can't wait for the update of the HD mod.

Greetings, they look unrealistic because aim horizontaly like rockets.

## Post 82425 by Zvyrhol (Grandmaster of Forum PvP) — 2023-12-23T10:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82425#p82425 | page 2 | era: pre-1.18.1 -->

I'm watching with concern as this post turns into a hotbed of degeneration.

## Post 82600 by Bubamasteros — 2023-12-24T18:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82600#p82600 | page 2 | era: pre-1.18.1 -->

> **Zvyrhol wrote: Sat Dec 23, 2023 10:33 am**
> I'm watching with concern as this post turns into a hotbed of degeneration.

Cry about it   crying_turtle

## Post 82603 by Nafta — 2023-12-24T19:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82603#p82603 | page 2 | era: pre-1.18.1 -->

female goblins plzplzplzplz

## Post 82610 by Watchers3d (Barrens Chat Casualty) — 2023-12-24T20:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82610#p82610 | page 2 | era: pre-1.18.1 -->

Today I've discovered a workflow that's basically better than mine in almost every single way KEKW. Now I'll definitely tinker some more for proper bouncing and such (That is ofc, if no modding chad suddenly materialize out of thin air and drops some giga retroport of hell from retail version or something).

[embed: //drive.google.com/file/d/1HnZvsG3OSFe_oFmmClx4EPL7e52oIyce/preview]

## Post 82612 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-12-24T21:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82612#p82612 | page 2 | era: pre-1.18.1 -->

> **Watchers3d wrote: Sun Dec 24, 2023 8:44 pm**
> proper bouncing

I like the sound of that.

## Post 82637 by Volkyte (Patch Note Conspiracy Theorist) — 2023-12-25T06:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82637#p82637 | page 2 | era: pre-1.18.1 -->

> **Ingameacc12345 wrote: Sun Dec 24, 2023 9:18 pm**
> > **Watchers3d wrote: Sun Dec 24, 2023 8:44 pm**
> > proper bouncing
>
>   I like the sound of that.

turtle_in_love
 *wobble wobble*

## Post 83038 by Watchers3d (Barrens Chat Casualty) — 2023-12-29T00:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83038#p83038 | page 2 | era: pre-1.18.1 -->

[embed: //drive.google.com/file/d/1v0s6ibsNEChwUuC7-7231JBiQaLOm4ZE/preview]

I'm quietly dropping an update with female humans and night elves, because HD Mod is not updated yet and because I didn't made everything I wanted to yet. You can grab the new version from the first post in the topic.

Lets call this one a test version. Humans and Helves are in dire need of some deformations in motion, and night elves need a refinement too. Female humans need more elaborate, interesting shapes around chest area. Night Elves body textures has to be corrected. And also a little bit here, a little bit there.

I'll take my vacation until ~Jan. 10, then I'll come back and hopefully introduce the rest around January.

UPD apparently Redmagejoe released an edited Patch-A patch. You can find it in HD Project topic. Download Patch-Z, rename it back to Patch-A, throw it in Data folder and replace an old one. For the most part you'll be set for today.

*Last edited by Watchers3d on Thu Feb 01, 2024 4:17 am, edited 1 time in total.*

## Post 83043 by Teurikh — 2023-12-29T01:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83043#p83043 | page 2 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri Dec 29, 2023 12:45 am**
> ![Image](https://lh3.googleusercontent.com/drive-viewer/AEYmBYQcrAHzMFcGboO6nULegYDJChdw23mtVIBD0NNolTftdT159QBZxtTJT-8cMNugBNAEYHCQ7ByfcidZ_buaEYHIElBeUQ=w2560-h1313)
>
>  I'm quietly dropping an update with female humans and night elves, because HD Mod is not updated yet and because I didn't made everything I wanted to yet. You can grab the new version from the first post in the topic.
>
>  Lets call this one a test version. Humans and Helves are in dire need of some deformations in motion, and night elves need a refinement too. Female humans need more elaborate, interesting shapes around chest area. Night Elves body textures has to be corrected. And also a little bit here, a little bit there.
>
>  I'll take my vacation until ~Jan. 10, then I'll come back and hopefully introduce the rest around January.
>
>  UPD apparently Redmagejoe released an edited Patch-A patch. You can find it in HD Project topic. Download Patch-Z, rename it back to Patch-A, throw it in Data folder and replace an old one. For the most part you'll be set for today.

Thank you very much for the work you have done. Happy New Year!

## Post 83074 by Medicenplani — 2023-12-29T09:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83074#p83074 | page 2 | era: pre-1.18.1 -->

Splendid job, very useful patch, following your career with great interest.

Any chance of adding undead to this already wonderful, modification of the game?

## Post 83194 by Nib42 — 2023-12-30T22:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83194#p83194 | page 2 | era: pre-1.18.1 -->

Hello,
Is it possible to mod the HD patch to replace the legion human male models with the default vanilla ones?

## Post 83196 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-12-30T22:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83196#p83196 | page 2 | era: pre-1.18.1 -->

> **Nib42 wrote: Sat Dec 30, 2023 10:14 pm**
> Hello,
>  Is it possible to mod the HD patch to replace the legion human male models with the default vanilla ones?

Do it yourself. Grab MPQEditor and delete the new model from the respective MPQ. Save. Boom, done.

edit: just be aware that this mod requires HD patch human (and other) models.

## Post 83354 by Foobs (Barrens Chat Casualty) — 2024-01-01T20:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83354#p83354 | page 2 | era: pre-1.18.1 -->

> **Nib42 wrote: Sat Dec 30, 2023 10:14 pm**
> Hello,
>  Is it possible to mod the HD patch to replace the legion human male models with the default vanilla ones?

It's possible but the drawback is there are some npc's that use that skin and deleting some textures will affect npc's in the world. If your willing to tolerate swirl faces on npc's then go for it, delete away!!

## Post 85265 by Watchers3d (Barrens Chat Casualty) — 2024-01-19T03:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85265#p85265 | page 2 | era: pre-1.18.1 -->

Came back just a day go. I'll cook further in regards to this mod in the next days or so. If you spotted some wrongs, holler. I'll fix it.

> **Medicenplani wrote: Fri Dec 29, 2023 9:11 am**
> Splendid job, very useful patch, following your career with great interest.
>
>
>  Any chance of adding undead to this already wonderful, modification of the game?

I'll take a good shot getting myself an Asian version of WoW. If I get my hands on one, then I think I'll make an undead female.

## Post 85478 by Glarthir (Barrens Chat Casualty) — 2024-01-20T23:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85478#p85478 | page 2 | era: pre-1.18.1 -->

After all these years! Any plans on covering more races?

## Post 85483 by Watchers3d (Barrens Chat Casualty) — 2024-01-21T00:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85483#p85483 | page 2 | era: pre-1.18.1 -->

> **Glarthir wrote: Sat Jan 20, 2024 11:35 pm**
> After all these years! Any plans on covering more races?

Sure, probably I'll make undead female too. As of today, I have to finish/polish current models. Now I'm working on some jiggle in female human animations. Rear side can be more smooth too.

## Post 85488 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-01-21T03:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85488#p85488 | page 2 | era: pre-1.18.1 -->

> **Watchers3d wrote: Sun Jan 21, 2024 12:20 am**
> > **Glarthir wrote: Sat Jan 20, 2024 11:35 pm**
> > After all these years! Any plans on covering more races?
>
>   Sure, probably I'll make undead female too. As of today, I have to finish/polish current models. Now I'm working on some jiggle in female human animations. Rear side can be more smooth too.

Still waiting for the update of the HD Project haha maybe I will make my own fix for it.

## Post 85489 by Springboards (Bug Report Enthusiast) — 2024-01-21T03:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85489#p85489 | page 2 | era: pre-1.18.1 -->

how about tauren and troll

## Post 85490 by Watchers3d (Barrens Chat Casualty) — 2024-01-21T06:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85490#p85490 | page 2 | era: pre-1.18.1 -->

> **Dracarusggotham wrote: Sun Jan 21, 2024 3:01 am**
> Still waiting for the update of the HD Project haha maybe I will make my own fix for it.

Ye. I have a similar thought about player character textures. But as of today I think I'll hold on to actually add them. Soon, eventually, I think guys from HD Project will add them themselves.

> **Springboards wrote: Sun Jan 21, 2024 3:34 am**
> how about tauren and troll

Sorry. No such plans for the coming days. I have a little to no interest in trolls and taurens. There are a lot of talented people around Turtle project. I'm sure someone eventually comes up with these races in a similar fashion.

## Post 85933 by Skilllikewall — 2024-01-26T17:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85933#p85933 | page 2 | era: pre-1.18.1 -->

Hi! can you link blender file?
Or something that working in 3.3.5 client, or atleast 00.skin files?

## Post 86632 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-01-31T22:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86632#p86632 | page 2 | era: pre-1.18.1 -->

Confirmed, Astricon retired from the mod and he will not update it anymore.
I will try updating it by myself, but I can't promise anything.

## Post 86636 by Caotic — 2024-02-01T00:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86636#p86636 | page 2 | era: pre-1.18.1 -->

do you have any plans for adding horde races to the mod

## Post 86639 by Ruwall — 2024-02-01T01:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86639#p86639 | page 2 | era: pre-1.18.1 -->

oh mama, guess i have to try it

## Post 86641 by Watchers3d (Barrens Chat Casualty) — 2024-02-01T04:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86641#p86641 | page 2 | era: pre-1.18.1 -->

> **Skilllikewall wrote: Fri Jan 26, 2024 5:17 pm**
> Hi! can you link blender file?

Sure. Some day later.

> **Dracarusggotham wrote: Wed Jan 31, 2024 10:50 pm**
> Confirmed, Astricon retired from the mod and he will not update it anymore.
>  I will try updating it by myself, but I can't promise anything.

Do we know what's missing exactly? Maybe we can compare old dbc files with the new ones from patch-Z, make the list out of it and then, fill in the blanks? Or maybe we can ask Redmagejoe for some list like that?
Is it only textures that are missing? The thing is, only one new face variation for any race can be already quite a headache, because of skin color variations. But what's missing is a lot more.
As of today I am on my female human updates. For esoteric reasons, humans gave me quite a fight. Today I am not close to a thought like "my stuff is done, now I can add some textures in". You can try, that would be great, but beware, because this stuff is basically real, but not paid job all right.

You would have to batch process a ton of textures. I used ImageMagick for my batch processing purposes. You can look in to it. It was especially helpful with downsampling algorithm (I think I used Catrom), and when I made faces. There are two textures, the top one and the bottom one. So I took my full faces textures, and cutted pixels from the top, to make the bottom one, and from the bottom, to make a top one.
And Photoshop too. Some stuff like Bakednpctextures, when you have to insert a new face to replace an old one, I don't know how you can do it faster but just drop it in Photoshop. There's also some basic scripting available in Photoshop for batch processing purposes.

And do not use Photoshop for downsampling purposes with default, bicubic interpolation. Take any image and scale it down with bicubic. Half transparent pixels on the borders of the image is an artifact, it is caused by bicubic interpolation method. And those half transparent pixels will affect how textures look in the game. I used Catrom interpolation in ImageMagick for downsampling.

> **Caotic wrote: Thu Feb 01, 2024 12:53 am**
> do you have any plans for adding horde races to the mod

Greetings. An updated version will release with undead female.

> **Ruwall wrote: Thu Feb 01, 2024 1:56 am**
> oh mama, guess i have to try it

Sure! If you want to play with this mod today, then you have to download patch-Z from HD Project topic, rename it back to patch-A and throw it in WoW/Data folder along with this patch, patch-F. But be warned, not all textures are in place. It is because the game got recently updated and they added some new ones. Skin colors, face variations, hair colors. Stuff like that.

*Last edited by Watchers3d on Thu Feb 01, 2024 5:26 am, edited 3 times in total.*

## Post 86643 by Springboards (Bug Report Enthusiast) — 2024-02-01T04:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86643#p86643 | page 2 | era: pre-1.18.1 -->

Out of all the horde races why choose undead???

## Post 86644 by Ruwall — 2024-02-01T05:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86644#p86644 | page 2 | era: pre-1.18.1 -->

Oh my, very well! :D and thank's for you job and effort on this! beceaus well, to bring mods like this is requiere a bit of job and work, and we are glad people like you do it by reasons of "have fun on the game!" and lest hope all go well with the HD project and of course, all go smooth on you work, modeling is hard i try it my self and went "damn, this is more hard than i think"

## Post 86662 by Tanasa — 2024-02-01T10:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86662#p86662 | page 2 | era: pre-1.18.1 -->

> **Springboards wrote: Thu Feb 01, 2024 4:48 am**
> Out of all the horde races why choose undead???

Frankenstein’s monster was canonically horny as hell, look at his whole quest for a matching waifu so it tracks in my opinion.

## Post 86831 by Kondzior — 2024-02-03T14:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86831#p86831 | page 2 | era: pre-1.18.1 -->

Would love that on 335 wotlk :O

## Post 86847 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-02-03T16:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86847#p86847 | page 2 | era: pre-1.18.1 -->

> **Watchers3d wrote: Thu Feb 01, 2024 4:12 am**
> > **Dracarusggotham wrote: Wed Jan 31, 2024 10:50 pm**
> > Confirmed, Astricon retired from the mod and he will not update it anymore.
> >  I will try updating it by myself, but I can't promise anything.
>
>  Do we know what's missing exactly? Maybe we can compare old dbc files with the new ones from patch-Z, make the list out of it and then, fill in the blanks? Or maybe we can ask Redmagejoe for some list like that?
>  Is it only textures that are missing? The thing is, only one new face variation for any race can be already quite a headache, because of skin color variations. But what's missing is a lot more.
>  As of today I am on my female human updates. For esoteric reasons, humans gave me quite a fight. Today I am not close to a thought like "my stuff is done, now I can add some textures in". You can try, that would be great, but beware, because this stuff is basically real, but not paid job all right.
>
>  You would have to batch process a ton of textures. I used ImageMagick for my batch processing purposes. You can look in to it. It was especially helpful with downsampling algorithm (I think I used Catrom), and when I made faces. There are two textures, the top one and the bottom one. So I took my full faces textures, and cutted pixels from the top, to make the bottom one, and from the bottom, to make a top one.
>  And Photoshop too. Some stuff like Bakednpctextures, when you have to insert a new face to replace an old one, I don't know how you can do it faster but just drop it in Photoshop. There's also some basic scripting available in Photoshop for batch processing purposes.
>
>  And do not use Photoshop for downsampling purposes with default, bicubic interpolation. Take any image and scale it down with bicubic. Half transparent pixels on the borders of the image is an artifact, it is caused by bicubic interpolation method. And those half transparent pixels will affect how textures look in the game. I used Catrom interpolation in ImageMagick for downsampling.

They are only textures that are missing, in the game they look "Broken" because what it really tries to do is apply the original textures, since the ones used by the HD mod have a different distribution, but, in essence, the only thing you have to do is to take one of the existing "HD" textures, modify it to have the appropriate color, and apply it back to the .MPQ for it to read.
I don't think it's necessary to modify the DBCs, it's just a matter of applying the correct textures.

Only, regarding the Goblins, if that were an understatement, I don't have much idea how to modify the 3D models.

## Post 86851 by Watchers3d (Barrens Chat Casualty) — 2024-02-03T18:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86851#p86851 | page 2 | era: pre-1.18.1 -->

> **Springboards wrote: Thu Feb 01, 2024 4:48 am**
> Out of all the horde races why choose undead???

Well. Lets live another day and see what it brings. As of today, I'm on my humans and didn't started any horde race yet (but soon).

> **Kondzior wrote: Sat Feb 03, 2024 2:12 pm**
> Would love that on 335 wotlk :O

WotLK, being a platform and a center for wow modding as such, already has a lot of talented people and mods around it. I think you can easily find mods such as this one with a similar fashion.

> **Ruwall wrote: Thu Feb 01, 2024 5:57 am**
> Oh my, very well! :D and thank's for you job and effort on this! beceaus well, to bring mods like this is requiere a bit of job and work, and we are glad people like you do it by reasons of "have fun on the game!" and lest hope all go well with the HD project and of course, all go smooth on you work, modeling is hard i try it my self and went "damn, this is more hard than i think"

Thank you, sir.

> **Dracarusggotham wrote: Wed Jan 31, 2024 10:50 pm**
> They are only textures that are missing, in the game they look "Broken" because what it really tries to do is apply the original textures, since the ones used by the HD mod have a different distribution, but, in essence, the only thing you have to do is to take one of the existing "HD" textures, modify it to have the appropriate color, and apply it back to the .MPQ for it to read.
>  I don't think it's necessary to modify the DBCs, it's just a matter of applying the correct textures.
>
>  Only, regarding the Goblins, if that were an understatement, I don't have much idea how to modify the 3D models.

Yes. But I don't think you need to modify any existing textures, or at least, not in all cases. You need to retroport from retail. I still have to take a look at these new patch default textures, but I suspect they just made it in a similar fashion to textures, that already exist in hd WoW. I think goblins are easily solvable like that. Look into retail files, maybe they already have more goblin face textures and if so, just retroport it.
Yes, you don't have to modify Patch-Z dbc files. It is done correctly already. But you need to know, what textures are missing exactly.

## Post 86861 by Watchers3d (Barrens Chat Casualty) — 2024-02-03T19:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86861#p86861 | page 2 | era: pre-1.18.1 -->

Today I was surfing around retail files. Apparently, they made a new dragon race or whoever they are. Basically female humans, at least for a female model, but modified. There was underwear, too. Edited it a little, ported to humans to take a look. And nah. Vanilla wow allowed resolution is miserably low unfortunately. I'll leave default underwear as it is. But I've also noticed that default HD Mod human textures are kind of on a pale side, due to compression and similar reasons. So, I'll add my port to overwrite them probably.

[embed: //drive.google.com/file/d/18y1Shr3jEipB8B7pLThvYysJriOMB-Qn/preview]

## Post 86866 by Ruwall — 2024-02-03T19:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86866#p86866 | page 2 | era: pre-1.18.1 -->

damn, is look interesting, and yes, the new race are called the Dractyr's, kinda of dragonborn's, both a draconic form and a human one, they look cool :D and to bad the new features of the new race don't match well on the project

## Post 86874 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-02-03T20:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86874#p86874 | page 2 | era: pre-1.18.1 -->

> **Watchers3d wrote: Sat Feb 03, 2024 7:07 pm**
> Today I was surfing around retail files. Apparently, they made a new dragon race or whoever they are. Basically female humans, at least for a female model, but modified. There was underwear, too. Edited it a little, ported to humans to take a look. And nah. Vanilla wow allowed resolution is miserably low unfortunately. I'll leave default underwear as it is. But I've also noticed that default HD Mod human textures are kind of on a pale side, due to compression and similar reasons. So, I'll add my port to overwrite them probably.
>
>
> [embed: //drive.google.com/file/d/18y1Shr3jEipB8B7pLThvYysJriOMB-Qn/preview]

Looks good, could be a good option

## Post 87596 by Watchers3d (Barrens Chat Casualty) — 2024-02-12T09:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87596#p87596 | page 2 | era: pre-1.18.1 -->

Mod is updated.

Bad - fixed.
Good - added.
Zug-zug.

No new races for now.

## Post 87597 by Volkyte (Patch Note Conspiracy Theorist) — 2024-02-12T09:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87597#p87597 | page 2 | era: pre-1.18.1 -->

Is it compatible with HD patch?

## Post 87598 by Watchers3d (Barrens Chat Casualty) — 2024-02-12T09:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87598#p87598 | page 2 | era: pre-1.18.1 -->

> **Volkyte wrote: Mon Feb 12, 2024 9:45 am**
> Is it compatible with HD patch?

Greetings, Volkyte.

It is compatible ONLY with HD Patch.

## Post 87686 by Psynergy — 2024-02-13T11:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87686#p87686 | page 3 | era: pre-1.18.1 -->

the booba is too large and too spherical.
too big: they're about as big as my character's head. it's a bit cartoony.
too spherical: squish the top a little and flatten the bottom a little so the shape is affected by gravity. right now they're almost perfectly round which feels artificial

## Post 87746 by Biteyou (Barrens Chat Casualty) — 2024-02-14T05:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87746#p87746 | page 3 | era: pre-1.18.1 -->

> **Psynergy wrote: Tue Feb 13, 2024 11:30 am**
> the booba is too large and too spherical.
>  too big: they're about as big as my character's head. it's a bit cartoony.
>  too spherical: squish the top a little and flatten the bottom a little so the shape is affected by gravity. right now they're almost perfectly round which feels artificial

You heard the man.

 **MAKE THEM BIGGER**

## Post 88065 by Watchers3d (Barrens Chat Casualty) — 2024-02-18T08:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88065#p88065 | page 3 | era: pre-1.18.1 -->

Yesterday I was playing my high elf and stumbled upon night elf with new skin color added recently. I think night elves turned out great. In the process I thought "Jesus, what have I done. They look like giants, not elves". But actually I like my body proportions.

![Image](https://i.imgur.com/cPJrk5Q.png)

And my High Elves.. They look classy, simple in a good way. Didn't touched much. But I think with the next update, I'll make High Elves up to par with my Humans and Night Elves. There's no edited animations currently in High Elves. Only geometry. And the latter can be smoother too.

![Image](https://i.imgur.com/bJGnsCm.png)

## Post 88106 by Alarionrp — 2024-02-18T22:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88106#p88106 | page 3 | era: pre-1.18.1 -->

Well... from some points of view, a little too big booba. But great ERP focused mod anyway. ;D

[embed: https://s9e.github.io/iframe/2/imgur.min.html#Pa1pUUR]

## Post 88189 by Voinsveta228 — 2024-02-20T00:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88189#p88189 | page 3 | era: pre-1.18.1 -->

Je should consider ta add da troll woman too, mon

## Post 88319 by Monji — 2024-02-21T15:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88319#p88319 | page 3 | era: pre-1.18.1 -->

Troll girls are the best!

## Post 88479 by Caotic — 2024-02-22T16:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88479#p88479 | page 3 | era: pre-1.18.1 -->

yes please add the troll girls

## Post 88495 by Watchers3d (Barrens Chat Casualty) — 2024-02-22T19:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88495#p88495 | page 3 | era: pre-1.18.1 -->

An extremely little update in out. Do not bother to redownload, if you did recently.

Fixes a small issue in regards to High Elf Female shields. Now shields do not magically shrink, when the character takes it out from the back.

## Post 88709 by Dhrazar (Barrens Chat Casualty) — 2024-02-25T13:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88709#p88709 | page 3 | era: pre-1.18.1 -->

I'm wondering, since there are a lot of topless-naked ladys in Stormwind... is it possible to add nipples to the model (at least just a texture) ?

## Post 88720 by Watchers3d (Barrens Chat Casualty) — 2024-02-25T15:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88720#p88720 | page 3 | era: pre-1.18.1 -->

> **Dhrazar wrote: Sun Feb 25, 2024 1:59 pm**
> I'm wondering, since there are a lot of topless-naked ladys in Stormwind... is it possible to add nipples to the model (at least just a texture) ?

It should not display like that. I think it's something to do with this exact chest armor piece they are wearing. HD Project related. People told me about Romantic Royal Suit cloth vest demonstrating this issue. Someday I'll look into it.

UPD it's a base game bug.

*Last edited by Watchers3d on Wed Mar 06, 2024 7:01 am, edited 1 time in total.*

## Post 88725 by Jaguare19 — 2024-02-25T16:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88725#p88725 | page 3 | era: pre-1.18.1 -->

Thank you.

## Post 88766 by Jeremycr — 2024-02-26T00:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88766#p88766 | page 3 | era: pre-1.18.1 -->

People gonna kill me but... Female dwarfs got a potential for some serious thickness...

## Post 88860 by Watchers3d (Barrens Chat Casualty) — 2024-02-27T17:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88860#p88860 | page 3 | era: pre-1.18.1 -->

Hello guys. In my spare time, which is limited unfortunately, I'm working on the update. It probably will revolve around only female High Elves. I plan to revamp them so they stay up to par with my humans and night elves.

In my mod, I brought blue eye glow back to female High Elves. And, in the default version of this mod, I plan to keep it that way (of course, you personally can delete eye glow by yourself, but you do you). Unfortunately, there's no way to make eye glow red to Dark Ranger skin. So, I can change Dark Ranger donation shop skin to something else. And here's 2 options.

 1. I can export Death Knight skin from retail, to replace Dark Ranger.
 2. I can export Void Elf skin from retail, to replace Dark Ranger.

![Image](https://i.imgur.com/80yWain.png)

What do you think? I'm down for whatever.

## Post 88864 by Silverleafeon (Barrens Chat Casualty) — 2024-02-27T18:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88864#p88864 | page 3 | era: pre-1.18.1 -->

Hello,

Is it possible to apply this to just one race (humans specifically), rather than Night Elves, High Elves and Humans across the board? It's just an aesthetic thing for me, but I always imagine Elves to be kinda graceful and agile, and I feel like such big assets might get in the way of maneuverability.

Thanks

## Post 88866 by Galendor (Patch Note Conspiracy Theorist) — 2024-02-27T18:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88866#p88866 | page 3 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Feb 27, 2024 5:48 pm**
> Hello guys. In my spare time, which is limited unfortunately, I'm working on the update. It probably will revolve around only female High Elves. I plan to revamp them so they stay up to par with my humans and night elves.
>
>  In my mod, I brought blue eye glow back to female High Elves. And, in the default version of this mod, I plan to keep it that way (of course, you personally can delete eye glow by yourself, but you do you). Unfortunately, there's no way to make eye glow red to Dark Ranger skin. So, I can change Dark Ranger donation shop skin to something else. And here's 2 options.
>
>  1. I can export Death Knight skin from retail, to replace Dark Ranger.
>  2. I can export Void Elf skin from retail, to replace Dark Ranger.
>
>  ![Image](https://i.imgur.com/80yWain.png)
>
>  What do you think? I'm down for whatever.

I vote for the first variant. Void elf skin was already ported: [viewtopic.php?p=57026&hilit=Void+elf#p57026](https://forum.turtlecraft.gg/viewtopic.php?p=57026&hilit=Void+elf#p57026)

## Post 88868 by Watchers3d (Barrens Chat Casualty) — 2024-02-27T18:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88868#p88868 | page 3 | era: pre-1.18.1 -->

> **Silverleafeon wrote: Tue Feb 27, 2024 6:01 pm**
> Hello,
>
>  Is it possible to apply this to just one race (humans specifically), rather than Night Elves, High Elves and Humans across the board? It's just an aesthetic thing for me, but I always imagine Elves to be kinda graceful and agile, and I feel like such big assets might get in the way of maneuverability.
>
>  Thanks

Sure. Grab yourself an MPQ Editor. You can find it the internet. Crack open Patch-F.mpq. Delete every single folder, besides humans. Then punch "compact archive" button. Close MPQ Editor and here you go.

> **Galendor wrote: Tue Feb 27, 2024 6:31 pm**
> I vote for the first variant. Void elf skin was already ported: [viewtopic.php?p=57026&hilit=Void+elf#p57026](https://forum.turtlecraft.gg/viewtopic.php?p=57026&hilit=Void+elf#p57026)

I would port it again of course. I contacted the author of this mod back in 2023 and got no answer. So, not going to use someone else's work without permission.

## Post 88870 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-02-27T18:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88870#p88870 | page 3 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Feb 27, 2024 5:48 pm**
> Hello guys. In my spare time, which is limited unfortunately, I'm working on the update. It probably will revolve around only female High Elves. I plan to revamp them so they stay up to par with my humans and night elves.
>
>  In my mod, I brought blue eye glow back to female High Elves. And, in the default version of this mod, I plan to keep it that way (of course, you personally can delete eye glow by yourself, but you do you). Unfortunately, there's no way to make eye glow red to Dark Ranger skin. So, I can change Dark Ranger donation shop skin to something else. And here's 2 options.
>
>  1. I can export Death Knight skin from retail, to replace Dark Ranger.
>  2. I can export Void Elf skin from retail, to replace Dark Ranger.
>
>  ![Image](https://i.imgur.com/80yWain.png)
>
>  What do you think? I'm down for whatever.

One thing that I personally prefer, are the hair styles of the void elves for High Elves, they look way better and more attractive than the default hair styles of blood elves.

## Post 88874 by Silverleafeon (Barrens Chat Casualty) — 2024-02-27T20:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88874#p88874 | page 3 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Feb 27, 2024 6:40 pm**
> > **Silverleafeon wrote: Tue Feb 27, 2024 6:01 pm**
> > Hello,
> >
> >  Is it possible to apply this to just one race (humans specifically), rather than Night Elves, High Elves and Humans across the board? It's just an aesthetic thing for me, but I always imagine Elves to be kinda graceful and agile, and I feel like such big assets might get in the way of maneuverability.
> >
> >  Thanks
>
>   Sure. Grab yourself an MPQ Editor. You can find it the internet. Crack open Patch-F.mpq. Delete every single folder, besides humans. Then punch "compact archive" button. Close MPQ Editor and here you go.

Thanks a bunch :)

## Post 89093 by Dhrazar (Barrens Chat Casualty) — 2024-03-01T07:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89093#p89093 | page 3 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Feb 27, 2024 5:48 pm**
> Hello guys. In my spare time, which is limited unfortunately, I'm working on the update. It probably will revolve around only female High Elves. I plan to revamp them so they stay up to par with my humans and night elves.
>
>  In my mod, I brought blue eye glow back to female High Elves. And, in the default version of this mod, I plan to keep it that way (of course, you personally can delete eye glow by yourself, but you do you). Unfortunately, there's no way to make eye glow red to Dark Ranger skin. So, I can change Dark Ranger donation shop skin to something else. And here's 2 options.
>
>  1. I can export Death Knight skin from retail, to replace Dark Ranger.
>  2. I can export Void Elf skin from retail, to replace Dark Ranger.
>
>  ![Image](https://i.imgur.com/80yWain.png)
>
>  What do you think? I'm down for whatever.

I think the void elf fits better to a Dark Ranger, than a death knight skin.

## Post 89540 by Pangea — 2024-03-06T10:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89540#p89540 | page 3 | era: pre-1.18.1 -->

I think the Void Elf flows better with the blue eyes.

## Post 89541 by Ataika (Grandmaster of Forum PvP) — 2024-03-06T13:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89541#p89541 | page 3 | era: pre-1.18.1 -->

> **Jeremycr wrote: Mon Feb 26, 2024 12:33 am**
> People gonna kill me but... Female dwarfs got a potential for some serious thickness...

Dwarf c+ breast splease.
And additional passive "Chance to occasional trip over increased"

## Post 89543 by Steelgrip (Barrens Chat Casualty) — 2024-03-06T14:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89543#p89543 | page 3 | era: pre-1.18.1 -->

Noice!! I might install turtle wow back just to check this out :D

## Post 89745 by Watchers3d (Barrens Chat Casualty) — 2024-03-09T06:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89745#p89745 | page 3 | era: pre-1.18.1 -->

Thank you guys. I'm considering Void Elf skin too. Death Knight is very close to a dark ranger skin by it's meaning, but I think it's not a big deal if it's a void elf.

As of today I'm stuck with high elf female skirt deformations. I kinda hate how Blissard handled it. Deformations are not great. It clips through itself quite a lot. I'll figure out some better deformations and you can expect an update next week.

## Post 89827 by Magzi — 2024-03-10T13:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89827#p89827 | page 3 | era: pre-1.18.1 -->

I did download older or the recent update, but it still doesn't work, what's the issue? I did download the HD mode.

## Post 89843 by Watchers3d (Barrens Chat Casualty) — 2024-03-10T19:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89843#p89843 | page 3 | era: pre-1.18.1 -->

> **Magzi wrote: Sun Mar 10, 2024 1:46 pm**
> I did download older or the recent update, but it still doesn't work, what's the issue? I did download the HD mode.

You haven't given any information to go off from. Maybe you've installed it in Addons folder, not in Data folder. Maybe some other patch is overwriting this one, like patch-Z (patch-Z is outdated. You should use Patch-A). I don't know.

## Post 89930 by Syrathegreat (Patch Note Conspiracy Theorist) — 2024-03-12T02:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89930#p89930 | page 3 | era: pre-1.18.1 -->

![Image](https://cdn.discordapp.com/attachments/1080507609846653001/1202832970063286352/image.png?ex=65fd08ff&is=65ea93ff&hm=2d0f39ce9dfb6b522b8ab67531f172f9f9b92cb2706054f1b62ecdaf19094940&)

## Post 89945 by Reploidrocsa (Bug Report Enthusiast) — 2024-03-12T08:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89945#p89945 | page 3 | era: pre-1.18.1 -->

Who's Aguru?

## Post 90004 by Magzi — 2024-03-12T16:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90004#p90004 | page 3 | era: pre-1.18.1 -->

> **Watchers3d wrote: Sun Mar 10, 2024 7:22 pm**
> > **Magzi wrote: Sun Mar 10, 2024 1:46 pm**
> > I did download older or the recent update, but it still doesn't work, what's the issue? I did download the HD mode.
>
>   You haven't given any information to go off from. Maybe you've installed it in Addons folder, not in Data folder. Maybe some other patch is overwriting this one, like patch-Z (patch-Z is outdated. You should use Patch-A). I don't know.

Thanks fore the response, I had problems with the HD patches also, my high elf looked messed up, I did reinstall the game 2 times and did delete cache and other stuff, it didn't do anything, the funny part is, that after not using the game for 2 weeks, my helf character was looking good, no bug ... really didn't do anything for 2 weeks, I did download the game and HD patch in the end of January (fresh patches), the extra helf etc patch you have here didn't work for me, I did now download the update, nothing, do you have any suggestions?
Thanks for taking your time to read and answer!

## Post 90010 by Watchers3d (Barrens Chat Casualty) — 2024-03-12T20:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90010#p90010 | page 3 | era: pre-1.18.1 -->

> **Magzi wrote: Sun Mar 10, 2024 1:46 pm**
> Thanks fore the response, I had problems with the HD patches also, my high elf looked messed up, I did reinstall the game 2 times and did delete cache and other stuff, it didn't do anything, the funny part is, that after not using the game for 2 weeks, my helf character was looking good, no bug ... really didn't do anything for 2 weeks, I did download the game and HD patch in the end of January (fresh patches), the extra helf etc patch you have here didn't work for me, I did now download the update, nothing, do you have any suggestions?
>  Thanks for taking your time to read and answer!

You can try to ask around in HD Project/Modding Turtle WoW Discord sub-channels for more elaborate answer. You see, it's hard to guess why things behave differently for you personally than they do for others. My bet is still on override from patch-Z (old). Delete patch-Z from your Data folder. It is old version of Patch-A. You must use path-A instead.

## Post 90040 by Skava — 2024-03-13T06:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90040#p90040 | page 3 | era: pre-1.18.1 -->

A bug with the Night Elf is that when you kneel/loot, the left leg transforms into the normal leg. Like someone stuck a vacuum into their thigh.

## Post 90091 by Watchers3d (Barrens Chat Casualty) — 2024-03-13T15:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90091#p90091 | page 3 | era: pre-1.18.1 -->

> **Skava wrote: Wed Mar 13, 2024 6:31 am**
> A bug with the Night Elf is that when you kneel/loot, the left leg transforms into the normal leg. Like someone stuck a vacuum into their thigh.

This is not a bug. This is how this specific deformation looks like right now. Leg stays the same, it doesn't transform into anything. Extreme poses may look weird for a simple rig as it is in WoW. Kind of just default, intended behavior.

[embed: //drive.google.com/file/d/1xLfaaBFk3sBdAVQ0JcnpB2s8U8wgSFTd/preview]

It's a matter of refining this specific animation/weights, bones in general. I'll look into it for next update.

## Post 90134 by Idiots009 — 2024-03-14T03:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90134#p90134 | page 3 | era: pre-1.18.1 -->

Can you make these models work for wotlk plz plz plz ? :)

## Post 92681 by Watchers3d (Barrens Chat Casualty) — 2024-04-14T14:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92681#p92681 | page 3 | era: pre-1.18.1 -->

Yo. Whad up. Long time no see. I've bought some new hardware, so, had to rebuild my rig. And also I was lazy.

 **Mod is updated. You can grab the new version in the topic header.** I've also left a link to an older version just in case.
Update is focused around High Elves only. Here's a bunch of 0 photography talent screenshots.

[embed: //drive.google.com/file/d/1ppdL3WVsYO8iMHNxa-aj4NLAxw9csELk/preview]

![Image](https://i.imgur.com/ykikGEu.png)

 **I believe I've fixed Arcane Missiles bug on High Elf Female also.**

As we've talked before, I've replaced Dark Ranger skin with Void Elf skin, so it can fit blue eye glow. Of course, you can always get rid of it by yourself. Check some older post in this topic to know how.

I've used a Void Elf skin made by talented mod author [Vidooo](https://forum.turtlecraft.gg/viewtopic.php?t=8843). I hope the author doesn't mind that. You can always contact me and I will remove it. I've said previously that I'll do my own backport of void elf skin, but then I thought, we already have one. And it's a job well done also.

 **Now, lets talk about future Turtle updates**. People said to me that Turtle plans to add some WotLK hairstyles sometime in the future. And I'm not sure I can make a good update for A Little Extra with such changes. Default vanilla models can fit a bunch of new polygons with ease. But you can guess, where those polygons are already in use in A Little Extra. But nonetheless, one or the other thing will happen:
I'll figure out an update myself, or
I'll post importable via WoW Blender Studio files in this topic, and in topic header as well. So you can make your versions of this mod, or implement it somewhere else. Don't forget to credit me, of course   smiling_turtle_head .

If you'll spot some bugs in new high elves, I'll try to fix it before this new hairstyle geometry update.

## Post 92686 by Fizzler (Patch Note Conspiracy Theorist) — 2024-04-14T17:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92686#p92686 | page 3 | era: pre-1.18.1 -->

Excellent

## Post 93371 by Pangea — 2024-04-24T00:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93371#p93371 | page 3 | era: pre-1.18.1 -->

Thank you for your hard work :)

## Post 93376 by Watchers3d (Barrens Chat Casualty) — 2024-04-24T01:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93376#p93376 | page 4 | era: pre-1.18.1 -->

> **Fizzler wrote: Sun Apr 14, 2024 5:25 pm**
> Excellent

> **Pangea wrote: Wed Apr 24, 2024 12:24 am**
> Thank you for your hard work :)

Thank you  smiling_turtle_head

## Post 93430 by Tomberry — 2024-04-24T18:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93430#p93430 | page 4 | era: pre-1.18.1 -->

Funny thing, but a bit too much for my taste.

There is no grace and elegance left in these silicone bombs^^

A 50% version would be perfect.

## Post 93576 by Verdict — 2024-04-26T16:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93576#p93576 | page 4 | era: pre-1.18.1 -->

> **Tomberry wrote: Wed Apr 24, 2024 6:09 pm**
> Funny thing, but a bit too much for my taste.
>
>  There is no grace and elegance left in these silicone bombs^^
>
>  A 50% version would be perfect.

Yup, I am 100% for this! While it was hilarious at start it is quite out of symmetry, a 50% one might be best for me!

But that aside, Watcher has bestowed to us magnificent content!

## Post 93596 by Jeremycr — 2024-04-27T00:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93596#p93596 | page 4 | era: pre-1.18.1 -->

Thank you very much!

## Post 94195 by Skilllikewall — 2024-05-07T07:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94195#p94195 | page 4 | era: pre-1.18.1 -->

Thanks alot!
I asked it,but sorry for asking again, any chance for blender file or for 3.3.5?
I want to learn basics of wow modeling :D

## Post 94222 by Kondzior — 2024-05-07T18:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94222#p94222 | page 4 | era: pre-1.18.1 -->

> **Watchers3d wrote: Sat Feb 03, 2024 6:05 pm**
> > **Springboards wrote: Thu Feb 01, 2024 4:48 am**
> > Out of all the horde races why choose undead???
>
>  Well. Lets live another day and see what it brings. As of today, I'm on my humans and didn't started any horde race yet (but soon).
>
> > **Kondzior wrote: Sat Feb 03, 2024 2:12 pm**
> > Would love that on 335 wotlk :O
>
>  WotLK, being a platform and a center for wow modding as such, already has a lot of talented people and mods around it. I think you can easily find mods such as this one with a similar fashion.
>
> > **Ruwall wrote: Thu Feb 01, 2024 5:57 am**
> > Oh my, very well! :D and thank's for you job and effort on this! beceaus well, to bring mods like this is requiere a bit of job and work, and we are glad people like you do it by reasons of "have fun on the game!" and lest hope all go well with the HD project and of course, all go smooth on you work, modeling is hard i try it my self and went "damn, this is more hard than i think"
>
>  Thank you, sir.
>
> > **Dracarusggotham wrote: Wed Jan 31, 2024 10:50 pm**
> > They are only textures that are missing, in the game they look "Broken" because what it really tries to do is apply the original textures, since the ones used by the HD mod have a different distribution, but, in essence, the only thing you have to do is to take one of the existing "HD" textures, modify it to have the appropriate color, and apply it back to the .MPQ for it to read.
> >  I don't think it's necessary to modify the DBCs, it's just a matter of applying the correct textures.
> >
> >  Only, regarding the Goblins, if that were an understatement, I don't have much idea how to modify the 3D models.
>
>   Yes. But I don't think you need to modify any existing textures, or at least, not in all cases. You need to retroport from retail. I still have to take a look at these new patch default textures, but I suspect they just made it in a similar fashion to textures, that already exist in hd WoW. I think goblins are easily solvable like that. Look into retail files, maybe they already have more goblin face textures and if so, just retroport it.
>  Yes, you don't have to modify Patch-Z dbc files. It is done correctly already. But you need to know, what textures are missing exactly.

Hey Watchers3d, thanks for reply :D So I must tell You i looked over many forum's like darkn#### and else and there was mods having so high level of detail's but that was year's ago. At this point i cant find any work that are near Your project. If You can share/change models for wotlk it would be awsome. Much love and have fun <3

## Post 94234 by Watchers3d (Barrens Chat Casualty) — 2024-05-07T20:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94234#p94234 | page 4 | era: pre-1.18.1 -->

> **Skilllikewall wrote: Tue May 07, 2024 7:49 am**
> Thanks alot!
>  I asked it,but sorry for asking again, any chance for blender file or for 3.3.5?
>  I want to learn basics of wow modeling :D

> **Kondzior wrote: Tue May 07, 2024 6:41 pm**
> Hey Watchers3d, thanks for reply :D So I must tell You i looked over many forum's like darkn#### and else and there was mods having so high level of detail's but that was year's ago. At this point i cant find any work that are near Your project. If You can share/change models for wotlk it would be awsome. Much love and have fun <3

Greetings, guys. Well. Where should I start.

Yes, as I've said before, I have an intention to publish WotLK style m2s in this topic in the future. Maybe a week from now or so. Within this month I think. So you can just import it via WoW Blender Studio and fiddle with it how you see fit.

But also you have to understand why A Little Extra is possible on vanilla client. In WoW releases, from Vanilla to WotLK (I guess, maybe it till older expansions too) we have a polygon limit of I think 21845 triangles. Or something close to this number. ~22k. But in vanilla version there's just less geometry compared to WotLK models. Less hairstyles, to be exact. So, that's partially a reason why I can fit as many triangles as I did.
As you probably know, Turtles intention with the next 17.2 update, whenever it will be released, to add WotLK hairstyles and some extra ones on top of vanilla(wotlk) models. They can do it, because in default, non-HD Models there's plenty of room for new geometry. And you can guess: in A Little Extra models, and even in regular HD Models, there's almost no room to fit those additional hairstyles. That's why A Little Extra gets away with it right now. It contains only vanilla hairstyles. There's no unused in vanilla hairstyles within my models at all. Of course, you can fiddle. You can decimate, un-subdivide, look for a solution. Which brings me to the next topic.

I'm contemplating whether or not I even want to look for such solutions, whether or not I even want to update A Little Extra by myself, when 17.2 comes out. But you guys can. So you can make your versions of this mod, or implement it somewhere else. Don't forget to credit me, of course  smiling_turtle_head .

I'll also want to write something up about my m2s. How to bring modified version to Vanilla. Why *these* things are like *this*, why *that stuff* is like *so* and so forth. Also you would probably need default HD Models retroported for your fiddling, so I have to make those, if you ever pursue an intention to bring some hairstyles back. Or maybe compare between them, jam it in WotLK or whatever.

So, if you want it, stay tuned. I'll do it eventually.

## Post 94377 by Kondzior — 2024-05-08T17:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94377#p94377 | page 4 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue May 07, 2024 8:21 pm**
> > **Skilllikewall wrote: Tue May 07, 2024 7:49 am**
> > Thanks alot!
> >  I asked it,but sorry for asking again, any chance for blender file or for 3.3.5?
> >  I want to learn basics of wow modeling :D
>
>
> > **Kondzior wrote: Tue May 07, 2024 6:41 pm**
> > Hey Watchers3d, thanks for reply :D So I must tell You i looked over many forum's like darkn#### and else and there was mods having so high level of detail's but that was year's ago. At this point i cant find any work that are near Your project. If You can share/change models for wotlk it would be awsome. Much love and have fun <3
>
>   Greetings, guys. Well. Where should I start.
>
>  Yes, as I've said before, I have an intention to publish WotLK style m2s in this topic in the future. Maybe a week from now or so. Within this month I think. So you can just import it via WoW Blender Studio and fiddle with it how you see fit.
>
>  But also you have to understand why A Little Extra is possible on vanilla client. In WoW releases, from Vanilla to WotLK (I guess, maybe it till older expansions too) we have a polygon limit of I think 21845 triangles. Or something close to this number. ~22k. But in vanilla version there's just less geometry compared to WotLK models. Less hairstyles, to be exact. So, that's partially a reason why I can fit as many triangles as I did.
>  As you probably know, Turtles intention with the next 17.2 update, whenever it will be released, to add WotLK hairstyles and some extra ones on top of vanilla(wotlk) models. They can do it, because in default, non-HD Models there's plenty of room for new geometry. And you can guess: in A Little Extra models, and even in regular HD Models, there's almost no room to fit those additional hairstyles. That's why A Little Extra gets away with it right now. It contains only vanilla hairstyles. There's no unused in vanilla hairstyles within my models at all. Of course, you can fiddle. You can decimate, un-subdivide, look for a solution. Which brings me to the next topic.
>
>  I'm contemplating whether or not I even want to look for such solutions, whether or not I even want to update A Little Extra by myself, when 17.2 comes out. But you guys can. So you can make your versions of this mod, or implement it somewhere else. Don't forget to credit me, of course  smiling_turtle_head .
>
>  I'll also want to write something up about my m2s. How to bring modified version to Vanilla. Why *these* things are like *this*, why *that stuff* is like *so* and so forth. Also you would probably need default HD Models retroported for your fiddling, so I have to make those, if you ever pursue an intention to bring some hairstyles back. Or maybe compare between them, jam it in WotLK or whatever.
>
>  So, if you want it, stay tuned. I'll do it eventually.

Every bit of Your work will help.   happy_turtle_head   Many ppl play on some big priv wotlk server and I dont wanna make any advertisement but there are HD client with full if I remember good Legion models, So maybe Your meshes would work there   turtle_in_love_head

## Post 94407 by Vokar282 — 2024-05-09T02:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94407#p94407 | page 4 | era: pre-1.18.1 -->

Is it possible to use the bloodelf model for a MoP server? When I try to use the blood elf model in a newly created mpq, I get error #132.
It seems like there's so little info that isn't 404'd these days.  My workflow of just playing around was to extract the bloodelf stuff from the HD pack, then overwrite that with the bloodelf content here, then repack it in a new mpq for MoP version. Sadly, it just throws the error and CTD. I assume there's something that I'm missing, but I have no clue what :(

I'm just curious and wouldn't redistribute or anything like that without explicit permission - aka research/learning purposes only. If anyone can lend some insight, I'd very much appreciate it! Thanks.

## Post 94474 by Watchers3d (Barrens Chat Casualty) — 2024-05-10T01:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94474#p94474 | page 4 | era: pre-1.18.1 -->

> **Vokar282 wrote: Thu May 09, 2024 2:09 am**
> Is it possible to use the bloodelf model for a MoP server? When I try to use the blood elf model in a newly created mpq, I get error #132.
>  It seems like there's so little info that isn't 404'd these days.  My workflow of just playing around was to extract the bloodelf stuff from the HD pack, then overwrite that with the bloodelf content here, then repack it in a new mpq for MoP version. Sadly, it just throws the error and CTD. I assume there's something that I'm missing, but I have no clue what :(
>
>  I'm just curious and wouldn't redistribute or anything like that without explicit permission - aka research/learning purposes only. If anyone can lend some insight, I'd very much appreciate it! Thanks.

Fortunately or not you cannot just take vanilla m2 and use it MoP client. The file format has been updated throughout expansions releases, just like the rest of the game.

## Post 94835 by Watchers3d (Barrens Chat Casualty) — 2024-05-14T09:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94835#p94835 | page 4 | era: pre-1.18.1 -->

Updated. Fixed annoying bug for Night Elf female model, that caused the mug in character's right hand while running suddenly fly off to the left hand.

## Post 94836 by Zoestra — 2024-05-14T10:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94836#p94836 | page 4 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue May 14, 2024 9:54 am**
> Updated. Fixed annoying bug for Night Elf female model, that caused the mug in character's right hand while running suddenly fly off to the left hand.

Glad to be the tester for this hehe! thanks <3

## Post 94853 by Skilllikewall — 2024-05-14T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94853#p94853 | page 4 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue May 07, 2024 8:21 pm**
> > **Skilllikewall wrote: Tue May 07, 2024 7:49 am**
> > Thanks alot!
> >  I asked it,but sorry for asking again, any chance for blender file or for 3.3.5?
> >  I want to learn basics of wow modeling :D
>
>
> > **Kondzior wrote: Tue May 07, 2024 6:41 pm**
> > Hey Watchers3d, thanks for reply :D So I must tell You i looked over many forum's like darkn#### and else and there was mods having so high level of detail's but that was year's ago. At this point i cant find any work that are near Your project. If You can share/change models for wotlk it would be awsome. Much love and have fun <3
>
>   Greetings, guys. Well. Where should I start.
>
>  Yes, as I've said before, I have an intention to publish WotLK style m2s in this topic in the future. Maybe a week from now or so. Within this month I think. So you can just import it via WoW Blender Studio and fiddle with it how you see fit.
>
>  But also you have to understand why A Little Extra is possible on vanilla client. In WoW releases, from Vanilla to WotLK (I guess, maybe it till older expansions too) we have a polygon limit of I think 21845 triangles. Or something close to this number. ~22k. But in vanilla version there's just less geometry compared to WotLK models. Less hairstyles, to be exact. So, that's partially a reason why I can fit as many triangles as I did.
>  As you probably know, Turtles intention with the next 17.2 update, whenever it will be released, to add WotLK hairstyles and some extra ones on top of vanilla(wotlk) models. They can do it, because in default, non-HD Models there's plenty of room for new geometry. And you can guess: in A Little Extra models, and even in regular HD Models, there's almost no room to fit those additional hairstyles. That's why A Little Extra gets away with it right now. It contains only vanilla hairstyles. There's no unused in vanilla hairstyles within my models at all. Of course, you can fiddle. You can decimate, un-subdivide, look for a solution. Which brings me to the next topic.
>
>  I'm contemplating whether or not I even want to look for such solutions, whether or not I even want to update A Little Extra by myself, when 17.2 comes out. But you guys can. So you can make your versions of this mod, or implement it somewhere else. Don't forget to credit me, of course  smiling_turtle_head .
>
>  I'll also want to write something up about my m2s. How to bring modified version to Vanilla. Why *these* things are like *this*, why *that stuff* is like *so* and so forth. Also you would probably need default HD Models retroported for your fiddling, so I have to make those, if you ever pursue an intention to bring some hairstyles back. Or maybe compare between them, jam it in WotLK or whatever.
>
>  So, if you want it, stay tuned. I'll do it eventually.

Yea i learn some basics like transfer vertex data,i made a small wotlk patch that changes guildbank m2 into NSFW model
Since it doesnt animated it working well.Not sure that i can post screen of it here,i dont want to break rules)

## Post 95291 by Lorencor — 2024-05-20T14:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95291#p95291 | page 4 | era: pre-1.18.1 -->

This

> A 50% version would be perfect.

## Post 95455 by Watchers3d (Barrens Chat Casualty) — 2024-05-23T01:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95455#p95455 | page 4 | era: pre-1.18.1 -->

Ok. The deed is done. You can go grab .blend files from the first post in this topic.

When the time comes (1.17.2, that is) I will hide the main post "download the mod" under spoiler, and leave only these Source Files, so people won't download the mod when it becomes outdated and get themselves a headache out of it.

## Post 95481 by Glaive (Barrens Chat Casualty) — 2024-05-23T10:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95481#p95481 | page 4 | era: pre-1.18.1 -->

You can see her comin' around the corner and you got time to comb your hair.

## Post 96056 by Skilllikewall — 2024-05-30T20:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96056#p96056 | page 4 | era: pre-1.18.1 -->

> **Watchers3d wrote: Thu May 23, 2024 1:17 am**
> Ok. The deed is done. You can go grab .blend files from the first post in this topic.
>
>  When the time comes (1.17.2, that is) I will hide the main post "download the mod" under spoiler, and leave only these Source Files, so people won't download the mod when it becomes outdated and get themselves a headache out of it.

Thanks alot for blender file. You get me happy.i got some inspiration for modding tooo!

## Post 96462 by Ibux (Patch Note Conspiracy Theorist) — 2024-06-06T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96462#p96462 | page 4 | era: pre-1.18.1 -->

you must not forget to give "A little extra" to Succubus as well   turtle_tongue_head

## Post 96475 by Hacerio — 2024-06-06T22:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96475#p96475 | page 4 | era: pre-1.18.1 -->

Hello,

I like to use this mod that removes the 3D glow effect from night elf eyes:

[viewtopic.php?t=694&sid=94cf9bc777ba8cb ... 9afd8274be](https://forum.turtlecraft.gg/viewtopic.php?t=694)

It looks great (IMO) with the standard HD model mod, but your mod seems to make the eyes dark in comparison:

standard HD model:

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/XXjWpam]

"extra" model:

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/wUiS6ST]

Would it be possible to update the "extra" model to have the same "glow" as the HD?

Thanks!

## Post 96477 by Springboards (Bug Report Enthusiast) — 2024-06-06T22:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96477#p96477 | page 4 | era: pre-1.18.1 -->

troll and tauren when??

## Post 96480 by Watchers3d (Barrens Chat Casualty) — 2024-06-07T00:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96480#p96480 | page 4 | era: pre-1.18.1 -->

> **Hacerio wrote: Thu Jun 06, 2024 10:13 pm**
> Hello,
>
>  I like to use this mod that removes the 3D glow effect from night elf eyes:
>
>  [viewtopic.php?t=694&sid=94cf9bc777ba8cb ... 9afd8274be](https://forum.turtlecraft.gg/viewtopic.php?t=694)
>
>  It looks great (IMO) with the standard HD model mod, but your mod seems to make the eyes dark in comparison.
>  Would it be possible to update the "extra" model to have the same "glow" as the HD?
>
>  Thanks!

Interesting. Redownload. Eyes should behave as you expect it.

## Post 96482 by Hacerio — 2024-06-07T00:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96482#p96482 | page 4 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri Jun 07, 2024 12:02 am**
> > **Hacerio wrote: Thu Jun 06, 2024 10:13 pm**
> > Hello,
> >
> >  I like to use this mod that removes the 3D glow effect from night elf eyes:
> >
> >  [viewtopic.php?t=694&sid=94cf9bc777ba8cb ... 9afd8274be](https://forum.turtlecraft.gg/viewtopic.php?t=694)
> >
> >  It looks great (IMO) with the standard HD model mod, but your mod seems to make the eyes dark in comparison.
> >  Would it be possible to update the "extra" model to have the same "glow" as the HD?
> >
> >  Thanks!
>
>   Interesting. Redownload. Eyes should behave as you expect it.

That's perfect, thank you so much!

## Post 96541 by Smanas — 2024-06-07T19:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96541#p96541 | page 4 | era: pre-1.18.1 -->

Bro you are an legend, congratz for your work, we love you.

Just bitter that the mod wont work for wotlk, legion and dragonfart.

## Post 96549 by Watchers3d (Barrens Chat Casualty) — 2024-06-07T19:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96549#p96549 | page 4 | era: pre-1.18.1 -->

> **Hacerio wrote: Thu Jun 06, 2024 10:13 pm**
> That's perfect, thank you so much!

> **Smanas wrote: Fri Jun 07, 2024 7:14 pm**
> Bro you are an legend, congratz for your work, we love you.
>
>  Just bitter that the mod wont work for wotlk, legion and dragonfart.

Thank you, guys  smiling_turtle_head .

I posted recently files for people to fiddle with. Maybe someone will cook up WotLK version eventually.

## Post 98370 by Thule (Barrens Chat Casualty) — 2024-07-02T12:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98370#p98370 | page 4 | era: pre-1.18.1 -->

Thank you for absolutely fantastic work! You are King / Queen!!!

Can I ask if you plan to make some variations for your mod? I mean body types like big curvy, small breasts, high heels etc..
On Darknest forum modders often do so - you have two or three options for body types and boobs size etc.

Also is there some Nude patch without underwear? Cant find this patch for this version of client.
Thank you very much for response!

## Post 98447 by Watchers3d (Barrens Chat Casualty) — 2024-07-03T09:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98447#p98447 | page 4 | era: pre-1.18.1 -->

> **Thule wrote: Tue Jul 02, 2024 12:22 pm**
> Thank you for absolutely fantastic work! You are King / Queen!!!
>
>  Can I ask if you plan to make some variations for your mod? I mean body types like big curvy, small breasts, high heels etc..
>  On Darknest forum modders often do so - you have two or three options for body types and boobs size etc.
>
>  Also is there some Nude patch without underwear? Cant find this patch for this version of client.
>  Thank you very much for response!

Greetings, Thule. Thank you  smiling_turtle_head .
Right now I don't have any plans to add body type variations. Previously in this topic I've talked about this subject, reasons why. But we'll see. Also I did post some files to fiddle with for everybody. With some skills and enough determination, anyone can do it theoretically  smiling_turtle_head .

People have asked me about textures before, but it has to be talented to look right. Workflow is basically one millimeter away from just straight pixel art. I did not found that talent in me for A Little Extra. I've entertained the idea right before the point when I discovered that I cannot support it with actual geometry. Blizzard added geoset for body top part in later expansions (Legion, I guess). In vanilla there's no even separate geoset for bare feet. It was added later, too. So, we have some limitations.

Also maybe me or somebody else should look into Darknest 3.3.5 mod. I've glanced at it quite some time ago. There might be ways to backport it to Turtle. Weakness and strength of A Little Extra at the same time lies within the amount of geometry I've added in HD models. And maybe this Darknest forum mod is much more conservative on the poly count, if it's working fine in WotLK.

## Post 99491 by Skilllikewall — 2024-07-15T08:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99491#p99491 | page 4 | era: pre-1.18.1 -->

Hi! Thanks again for your brilliant work!
I found some sort of bug in source files,in your m2 that already prepared for wotlk.
Plate armour(legs aka trousers) is missing.Plate armour that looks like a skirt is ok.Both BE NE and HU have same bug(

## Post 99497 by Watchers3d (Barrens Chat Casualty) — 2024-07-15T10:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99497#p99497 | page 4 | era: pre-1.18.1 -->

> **Skilllikewall wrote: Mon Jul 15, 2024 8:40 am**
> Hi! Thanks again for your brilliant work!
>  I found some sort of bug in source files,in your m2 that already prepared for wotlk.
>  Plate armour(legs aka trousers) is missing.Plate armour that looks like a skirt is ok.Both BE NE and HU have same bug(

You mean this geoset?

![Image](https://i.imgur.com/WT34A7v.png)

I thought it was added in WoD btw, not WotLK. But still.
Nah, this is not a bug. I deleted this geoset intentionally. It is not used in vanilla.

I've mentioned in a topic header that you can restore (by bringing it from freshly downported model) these kind of meshes back. You'll need legacy multiconverter to backport WoD model (you can take it from an archive in my topic header, or just download WoD/Legion client and export it from there). I actually glanced at google search results and I cannot find it for some reason. I'll upload my copy. Will be linked in a topic header.

But actually before backporting it to WotLK, it's a good idea to delete some geosets via m2mod. m2mod works with Blender version 2.91. Grab it here <https://download.blender.org/release/>
I did it like this because you cannot feed to WBS that much geometry for some reason when importing. I guess I'll upload it too. Hopefully versions of my uploads are correct ones.

So you just take WoD model (it will work fine with default WoD model you can find in topic header), extract m2i from it with m2mod, import m2i to Blender, and then delete some geometry to drop overall polygon count. Target something like ~22k polygons overall as maximum. Then, via very same m2mod, just import edited m2i back to m2. Now you can backport the result via multiconverter to WotLK and import to WBS.

But then - you on your own pretty much, in regards to adapting to WotLK. The main thing here is a polygon count. That's why I hesitate to update A Little Extra to 1.17.2 whenever it comes out. My intentions were to add geometry/details in, not to take it out. Not a big fun of un-subdividing/decimating my own meshes, especially when I did not made an unreasonable amount of it. It's just that WoW is funky on this subject. Decimating/editing/un-subdividing by hand hairstyles would probably be a reasonable start to drop overall triangle count. I believe people did it like this years prior: decimating the shit out of geometry overall.

And with this legs geometry in particular.. I would probably just take my own default legs and like make a version, that looks like this armored trousers, referencing this trousers themselves. By itself, unedited, this default geoset will of course not fit the rest of the body properly. Hips are generally larger in my models. Weights are not the same. Poly count too.

## Post 99966 by Watchers3d (Barrens Chat Casualty) — 2024-07-20T16:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99966#p99966 | page 4 | era: pre-1.18.1 -->

Random Frostmourne backport from WotLK.

![Image](https://i.imgur.com/SFhOdHT.png)

I'm too stupid to catch weapon reflections the same way how it's done in WotLK, but at least it's works in some way.

All textures are already hardcoded into model. No matter what the name of this model is, textures will always be the same (if we imply, that these textures are in the same folders as they are now within this patch). So, all you have to do is to rename the model within this .mpq to something else. I'll do it with some two handed warhammer you obtain in Northshire.

 1. I know from the game that it's name is Militia Warhammer. Now I need to know it's display ID, so I can find the name of it's model within game files.
 2. <https://database.turtlecraft.gg/> punched Militia Warhammer in. Display ID is 19544.
 3. Within ItemDisplayInfo.dbc (stored in DBFilesClient folder. If you don't use Patch-A, take it from patch-5), I can check this 19544 ID. Millitia Warhammer model by default is Hammer_2H_Maul_A_02. Now I can rename the model within this patch-G, so it can replace this warhammer model.
 4. Rename "FrostmourneRenameToSomethingElse.m2" (stored within this patch. path is /item/objectcomponents/weapon/) to "Hammer_2H_Maul_A_02.m2". Save. It's done.
 5. .mpq files as always must be stored in Data folder in order to work.

 **You'll need 2 pieces of software to make it happen:**
MPQ Editor to open and edit .mpq files. It's basically WinRAR, but for mpq archives.
WDBX Editor to open .dbc files. Other software can do the same too. Like DBCutil.

[Patch-G.mpq](https://drive.google.com/file/d/1ildMATnH08kyQigOShLCjqd6x6CGZzmI/view?usp=drive_link)

I'll take a break also. Will catch you later.

## Post 100844 by Diablowjob (Barrens Chat Casualty) — 2024-09-07T02:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100844#p100844 | page 4 | era: pre-1.18.1 -->

Looks great. Do we have standalone version of this without installing HD patch?

## Post 100874 by Watchers3d (Barrens Chat Casualty) — 2024-09-07T21:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100874#p100874 | page 4 | era: pre-1.18.1 -->

> **Diablowjob wrote: Sat Sep 07, 2024 2:53 am**
> Looks great. Do we have standalone version of this without installing HD patch?

Greetings, Diablowjob.

No, not at the time. Standalone, dbc non-intrusive character mod requires modified to fit textures for every single npc out there in the world. While player characters are build like you expect them to be, NPC's have their textures baked into 1 single image. And of course, HD heads cannot use original textures from barely 3D default head models, so it's a nasty job to swap some pixels partially in every single image.

But HD Project has most of them (for now). Although, dbcs are edited still. So, no point making it standalone like that. We'll see in the future how things turn out.

## Post 100907 by Radiantogryn — 2024-09-08T16:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100907#p100907 | page 4 | era: pre-1.18.1 -->

Has anyone made a lesser version of this yet? something that reduces the booba by around 40/50%? If so pleaaaaase post it if you can!

Great mod btw OP, even at full power it's incredibly cultured and i love you for it.

## Post 100929 by Watchers3d (Barrens Chat Casualty) — 2024-09-09T07:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100929#p100929 | page 4 | era: pre-1.18.1 -->

[embed: //drive.google.com/file/d/1m8s2oBtqwmGD0CmcpnxWH8YUpzx1lJdy/preview]

Ecks dee. Well this is possible technically (arms below the elbow are original, hence the seam). Not worth finishing though.
Original naked (underwear) texture does not fit properly on my meshes for strange blizzard reasons, and visible neck seam of course will never go away. HD rig is a little bit more complex weights-wise, but merging some vertex groups to 1 does the trick most of the time. In SD models there are some bones that are just not present in HD model. Like knee bones. But most of them are still the same. Rest poses are different too, but in HD model the same pose is preserved, except for hands balled into fists, while in SD model hands are relaxed straight.

## Post 101224 by Ruwall — 2024-09-13T18:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101224#p101224 | page 4 | era: pre-1.18.1 -->

Im glad to see this keep a live and getting better

## Post 102576 by Fury_Lion — 2024-10-05T17:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102576#p102576 | page 4 | era: pre-1.18.1 -->

Does it work on Dwarves?

## Post 102637 by Bigsmerf (Grandmaster of Forum PvP) — 2024-10-06T14:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102637#p102637 | page 5 | era: pre-1.18.1 -->

> **Fury_Lion wrote: Sat Oct 05, 2024 5:56 pm**
> Does it work on Dwarves?

Read the post my dude. You're sacrificing like a minute of your time.

## Post 102638 by Bigsmerf (Grandmaster of Forum PvP) — 2024-10-06T14:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102638#p102638 | page 5 | era: pre-1.18.1 -->

Mad respect for making this with one hand. Must've been a lot of work.

## Post 102641 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2024-10-06T15:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102641#p102641 | page 5 | era: pre-1.18.1 -->

> **Bigsmerf wrote: Sun Oct 06, 2024 2:22 pm**
> > **Fury_Lion wrote: Sat Oct 05, 2024 5:56 pm**
> > Does it work on Dwarves?
>
>   Read the post my dude. You're sacrificing like a minute of your time.

It's enough to read the TITLE.

## Post 102913 by Jeremycr — 2024-10-11T20:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102913#p102913 | page 5 | era: pre-1.18.1 -->

> **Fury_Lion wrote: Sat Oct 05, 2024 5:56 pm**
> Does it work on Dwarves?

I wish!

## Post 102914 by Turboman (Patch Note Conspiracy Theorist) — 2024-10-11T22:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102914#p102914 | page 5 | era: pre-1.18.1 -->

Are there any plans to make the non-hd version of your mod?

## Post 104866 by Jesterik — 2024-10-26T10:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104866#p104866 | page 5 | era: pre-1.18.1 -->

I merely have 2 humble requests....

 - Goblins pls!
 - BIGGER!

But seriously though, amazing work on all of this!

## Post 104874 by Goblinlover — 2024-10-26T12:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104874#p104874 | page 5 | era: pre-1.18.1 -->

Gobbos deserve representation!!!

## Post 105914 by Nhavyr — 2024-11-02T10:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105914#p105914 | page 5 | era: pre-1.18.1 -->

Give me a extra bigger chest and my life is yours

## Post 106001 by Yonu — 2024-11-02T17:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106001#p106001 | page 5 | era: pre-1.18.1 -->

> **Radiantogryn wrote: Sun Sep 08, 2024 4:01 pm**
> Has anyone made a lesser version of this yet? something that reduces the booba by around 40/50%? If so pleaaaaase post it if you can!
>
>  Great mod btw OP, even at full power it's incredibly cultured and i love you for it.

yep, the OP did a fantastic mod right here, but I also wish that we had a 40% or 50% breast version, at the moment it's a little too big for my personal taste
maybe we'll get that option eventually

## Post 106947 by turtledood — 2024-11-07T18:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106947#p106947 | page 5 | era: pre-1.18.1 -->

brother I know this isn't the right place to ask but could you please convert this mod for the 3.3.5a client?

## Post 107616 by Hottatom — 2024-11-12T02:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107616#p107616 | page 5 | era: pre-1.18.1 -->

Hello! I love this mod, though I've recently encountered an odd bug.

Mining has no sound effect when this mod is being used. The pickaxe "clink~clank" is not played. I've also noticed that when I am smithing, the sound effect for the hammer hitting the metal is also missing. It does not seem to affect professions like tailoring and first aid, but I'm not sure about others.

## Post 107635 by Watchers3d (Barrens Chat Casualty) — 2024-11-12T09:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107635#p107635 | page 5 | era: pre-1.18.1 -->

> **turtledood wrote: Thu Nov 07, 2024 6:32 pm**
> brother I know this isn't the right place to ask but could you please convert this mod for the 3.3.5a client?

Greetings, Turtledood.

You can add it to WotLK as it is from recourses link, but it won't behave properly. Only vanilla geosets are present, so every piece of armor, hairstyle etc. which were added in later game versions just won't be there. Polygon count issue. When and if there is a compelling reason to update A Little Extra, I think at that point I can post a WotLK version as well, since there will be virtually no difference between the two.

WotLK, being a wow modding community center should already have at least a bunch of projects similar to this one.

> **Hottatom wrote: Tue Nov 12, 2024 2:05 am**
> Hello! I love this mod, though I've recently encountered an odd bug.
>
>  Mining has no sound effect when this mod is being used. The pickaxe "clink~clank" is not played. I've also noticed that when I am smithing, the sound effect for the hammer hitting the metal is also missing. It does not seem to affect professions like tailoring and first aid, but I'm not sure about others.

Greetings, Hottatom.

If it behaves the same way with default HD mod models, then probably db files where soundeffect ID is defined got an update since. But if it still works fine, then I just didn't notice broken keyframes for this animevents. It happens often when downporting. Strange that nobody mentioned this in the last half a year.

## Post 107652 by Hottatom — 2024-11-12T11:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107652#p107652 | page 5 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Nov 12, 2024 9:08 am**
> > **Hottatom wrote: Tue Nov 12, 2024 2:05 am**
> > Hello! I love this mod, though I've recently encountered an odd bug.
> >
> >  Mining has no sound effect when this mod is being used. The pickaxe "clink~clank" is not played. I've also noticed that when I am smithing, the sound effect for the hammer hitting the metal is also missing. It does not seem to affect professions like tailoring and first aid, but I'm not sure about others.
>
>   Greetings, Hottatom.
>
>  If it behaves the same way with default HD mod models, then probably db files where soundeffect ID is defined got an update since. But if it still works fine, then I just didn't notice broken keyframes for this animevents. It happens often when downporting. Strange that nobody mentioned this in the last half a year.

Hey, thank you for the quick reply!

Yeah, I did test it on various mining nodes, and the lack of sfx is present only when this mod is enabled. I can have the HD patch enabled without this mod, and the sound effect will play normally.

Perhaps there was a change made in the new patch that recently released which is causing this tiny error. Everything else works perfectly fine. I'm not missing any sfx elsewhere as far I can tell. And if this issue is connected to animation keyframes, then it makes sense that both mining and smithing actions lack the sfx, because I'm pretty sure they share the same animation.

Also, when I stood next to characters who are not affected by this mod (like the NPC blacksmiths in Ironforge) I could hear their sfx but not mine.

## Post 107995 by Forest Elf — 2024-11-15T06:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107995#p107995 | page 5 | era: pre-1.18.1 -->

Is there a chance at a smaller boob version?
This is the best mod on here! Thank you!

## Post 109378 by RubeTheNomad — 2024-11-22T14:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109378#p109378 | page 5 | era: pre-1.18.1 -->

B I G G E R

## Post 109816 by Votepoint — 2024-11-25T13:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109816#p109816 | page 5 | era: pre-1.18.1 -->

"Mod is outdated to support 1.17.2 and later patches" this make me sad(

## Post 109905 by Azcron (Patch Note Conspiracy Theorist) — 2024-11-25T21:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109905#p109905 | page 5 | era: pre-1.18.1 -->

> **Votepoint wrote: Mon Nov 25, 2024 1:17 pm**
> "Mod is outdated to support 1.17.2 and later patches" this make me sad(

Still works though. I have no issues with it.

## Post 110863 by Vokar282 — 2024-12-02T03:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110863#p110863 | page 5 | era: pre-1.18.1 -->

Is it labelled as currently unsupported because of HD project being currently unsupported?

## Post 110872 by Ataika (Grandmaster of Forum PvP) — 2024-12-02T06:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110872#p110872 | page 5 | era: pre-1.18.1 -->

add trolls please

## Post 110918 by Watchers3d (Barrens Chat Casualty) — 2024-12-02T12:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110918#p110918 | page 5 | era: pre-1.18.1 -->

> **Vokar282 wrote: Mon Dec 02, 2024 3:33 am**
> Is it labelled as currently unsupported because of HD project being currently unsupported?

It's both. All of these character models are dependent on textures from HD Mod. High Elves are dependent on db entries from HD Mod. And of course, only vanilla geometry (like hairstyles) is present. Has to be severely remade to fully function again.

> **Ataika wrote: Mon Dec 02, 2024 6:38 am**
> add trolls please

Ironic, but back in July I actually did try to tinker with trolls also. Blizzard given up on this one though. Deformations, bone roll even in some regularly repeated in-game animations is.. suboptimal. I didn't have it in me at the time to fix Blizzard's models.

[embed: //drive.google.com/file/d/19pmMt7CZahLp9PPpWVtYWtGxfY7308bi/preview]

*Last edited by Watchers3d on Tue Dec 03, 2024 1:13 pm, edited 1 time in total.*

## Post 110943 by Vokar282 — 2024-12-02T16:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110943#p110943 | page 5 | era: pre-1.18.1 -->

I see, ok. Thanks.

## Post 111753 by Cush — 2024-12-08T06:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111753#p111753 | page 5 | era: pre-1.18.1 -->

I'd love to see an update, maybe stand alone w/o relying on HD mods or the option to use it or not.

The Trolls look like they're coming along nicely, like really nice. Maybe throwing away the rig and recreate blizzard's image if the bone roll thing is as bad as you say. Definitely worth your time.

I'm sure all the other races can be eventually added if you get more associated fixing the common problems in-between making them all function. As much as I hate paid addons, I would totally support a Patreon or tip jar if you wanted the pet project to continue; or even possibly asking to join the team as a HD modder.

## Post 111826 by Sinlyss — 2024-12-08T21:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111826#p111826 | page 5 | era: pre-1.18.1 -->

Could you add female orcs please? I would greatly appreciate it!

## Post 111961 by Necropheus — 2024-12-09T21:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111961#p111961 | page 5 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Dec 02, 2024 12:45 pm**
> > **Vokar282 wrote: Mon Dec 02, 2024 3:33 am**
> > Is it labelled as currently unsupported because of HD project being currently unsupported?
>
>   It's both. All of these character models are dependent on textures from HD Mod. High Elves are dependent on db entries from HD Mod. And of course, only vanilla geometry (like hairstyles) is present. Has to be severely remade to fully function again.
>
> > **Ataika wrote: Mon Dec 02, 2024 6:38 am**
> > add trolls please
>
>   Ironic, but back in July I actually did try to tinker with trolls also. Blizzard given up on this one though. Deformations, bone roll even in some regularly repeated in-game animations is.. suboptimal. I didn't have it in me at the time to fix Blizzard's models.
>
>
> [embed: //drive.google.com/file/d/19pmMt7CZahLp9PPpWVtYWtGxfY7308bi/preview]

Tbh this looks really promising! I hope you find the time, energy and inspiration to do the other races too!

The compatibility for never Versions isnt even a Problem for me since i use this Mod on another Server which sticks to 1.12

*Last edited by Necropheus on Thu May 08, 2025 9:38 am, edited 1 time in total.*

## Post 113704 by Watchers3d (Barrens Chat Casualty) — 2024-12-21T10:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113704#p113704 | page 5 | era: pre-1.18.1 -->

> **Watchers3d wrote: Sat Dec 09, 2023 6:46 pm**
> ****Mod is still outdated to support 17.2 fully, but if you're really desperate, here's a quickly made Character Models Only version of patch-A with only vanilla geosets, cycled hairstyles. Don't expect it to be perfect.****
>
>  [Patch-A Character Models Only](https://drive.google.com/file/d/1ufcaLeT5Yrkkd_snfOEixDrF2xOHk2V6/)

Yesterday had some fun testing if it's possible to forward the same geosets to different hair indexes. It is.
Character models only. Didn't test it at all by myself, but I had help in Discord to try it out.

UPD reuploaded. Invisible undead lower jaw bug fixed.

*Last edited by Watchers3d on Thu Jan 16, 2025 8:12 pm, edited 4 times in total.*

## Post 113912 by Watchers3d (Barrens Chat Casualty) — 2024-12-22T21:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113912#p113912 | page 5 | era: pre-1.18.1 -->

One man spam continues for a little. Reuploaded cycled hairstyles patch-A version. Invisible lower jaw undead bug fixed. Previously I merged something I shouldn't have by mistake.

UPS trolls scalp textures overlap should be fixed too I think

## Post 114150 by Nasupic — 2024-12-24T19:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114150#p114150 | page 5 | era: pre-1.18.1 -->

By any chance can you make the mod work with retail client?

## Post 114261 by KUMA_THE_BEAR — 2024-12-25T15:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114261#p114261 | page 5 | era: pre-1.18.1 -->

i made this forum account just to tell you i love you

i have 2 questions

are you planning on other races like fem orcs?

is it possible to ONLY use the hd models for these fem races and have the rest be classic?

## Post 114422 by Watchers3d (Barrens Chat Casualty) — 2024-12-26T16:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114422#p114422 | page 5 | era: pre-1.18.1 -->

> **KUMA_THE_BEAR wrote: Wed Dec 25, 2024 3:09 pm**
> i made this forum account just to tell you i love you
>
>  i have 2 questions
>
>  are you planning on other races like fem orcs?
>
>  is it possible to ONLY use the hd models for these fem races and have the rest be classic?

Thank you  smiling_turtle_head

I do.

It's possible, yeah. But I have to make such standalone version first. In both patch-A of HD Project, and patch-F of A little Extra, there's a lot to consider and account for before moving on in any direction.
For today we have to use a version with vanilla hairstyles looped again to fill in the missing spots. This solution is "okay", we're Gucci for now. I'll take a trip out of town for this holiday season. Once I get back, I'll see what can be done.

## Post 115008 by Stogrim — 2024-12-31T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115008#p115008 | page 5 | era: pre-1.18.1 -->

First and foremost.. Thank you! I actually wanna play WoW again now that there's something nice to look at! :)
I have a question, hopefully the Mod author or anyone with knowledge can help?
Does this Mod work with the "Void Elf Mod" that replaces the Dark Ranger shop skin with a retail Void Elf model?
I wonder because they share a model with High Elves / Blood Elves?
It looks like they do, but the Void Elf from retail has different (and better imo) shooting / fighting animations in combat.
I hope it does, coming from retail playing as a Void Elf since they came out, I would love some Thicc Void Elves! ;p
Thanks for your time :)

## Post 115266 by Modenjoyer123 — 2025-01-02T21:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115266#p115266 | page 5 | era: pre-1.18.1 -->

I've found a bug with the High Elf dance that causes her to freeze after she does the twirl. I tried reinstalling but to no avail :(
Everything else seems to work fine though!

Also whenever I get on my turtle mount the camera moves higher than it should. Not sure what could be causing it.

*Last edited by Modenjoyer123 on Thu Jan 02, 2025 10:02 pm, edited 1 time in total.*

## Post 115276 by Stogrim — 2025-01-02T23:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115276#p115276 | page 5 | era: pre-1.18.1 -->

I went and tested it out, the Void Elf replacement skin for the shop Dark Ranger does in face work with this mod.

Unfortunately, the Void Elf skin still uses the same weapon animations as the High Elves, not its weapon animations from retail. Still a beautiful mod.

As for "A Little Extra" it's amazing and you're great for making and maintaining it, thanks!

## Post 115676 by Clyptos — 2025-01-06T23:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115676#p115676 | page 5 | era: pre-1.18.1 -->

Good work, dont care for HD models but its nice to see fellow men of culture here.

## Post 116524 by Thyx — 2025-01-13T06:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116524#p116524 | page 5 | era: pre-1.18.1 -->

> **turtledood wrote: Thu Nov 07, 2024 6:32 pm**
> brother I know this isn't the right place to ask but could you please convert this mod for the 3.3.5a client?

I second this request, if you ever have time to make a 3.3.5 I'd be really grateful.   sad_turtle

## Post 117009 by Watchers3d (Barrens Chat Casualty) — 2025-01-16T19:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117009#p117009 | page 5 | era: pre-1.18.1 -->

Got back home from this holiday season.

> **Modenjoyer123 wrote: Thu Jan 02, 2025 9:38 pm**
> I've found a bug with the High Elf dance that causes her to freeze after she does the twirl. I tried reinstalling but to no avail :(
>  Everything else seems to work fine though!
>
>  Also whenever I get on my turtle mount the camera moves higher than it should. Not sure what could be causing it.

Greetings.
All right. I'll fix it in the next couple of days. Previous version of the patch (can be downloaded still) I think has this animation play correctly. It's just that I didn't touch the mod for quite some time and things were bound to break at some places  happy_turtle_head .

> **Stogrim wrote: Thu Jan 02, 2025 11:50 pm**
> I went and tested it out, the Void Elf replacement skin for the shop Dark Ranger does in face work with this mod.
>
>  Unfortunately, the Void Elf skin still uses the same weapon animations as the High Elves, not its weapon animations from retail. Still a beautiful mod.
>
>  As for "A Little Extra" it's amazing and you're great for making and maintaining it, thanks!

Greetings. Yeah. Vidoo made a texture. A Little Extra already comes with it by default, because I reintroduced eye glow, that was not present in HD Project model (because of Dark Danger skin). But somehow eye glow got back into patch-A, and everything got twisted. I'll update my patch-A edit and remove eye glow from high elves (like it was for the most part of the last year, but with some release it suddenly came back and I'm not sure, why).

> **Clyptos wrote: Mon Jan 06, 2025 11:28 pm**
> Good work, dont care for HD models but its nice to see fellow men of culture here.

Thank you  smiling_turtle_head .

> **Thyx wrote: Mon Jan 13, 2025 6:05 am**
> I second this request, if you ever have time to make a 3.3.5 I'd be really grateful.   sad_turtle

Well.. I'll develop my powers around it I guess some day. The subject is complicated. Polygon count issue weights things down hard, even in this Turtle version I had to make an edit so not to introduce new geometry. And not just to A Little Extra models, but for default HD ones, too. We'll live another day and see.

## Post 117010 by Watchers3d (Barrens Chat Casualty) — 2025-01-16T19:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117010#p117010 | page 6 | era: pre-1.18.1 -->

Pushed an update to patch-A for male high elf arcane missiles displaying incorrectly. Keep it mind that the first minute you log-in, arcane missiles display incorrectly even by default. After everything loads in it should work properly.

## Post 117242 by Ctapblu — 2025-01-19T12:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117242#p117242 | page 6 | era: pre-1.18.1 -->

Hi, i lovw what u did whit old models its a new taste of old view gj!
But for many risons i perfere to keep humans and elfs MALEs only as a deffulrt, dont upgrade the models, i tryd to do it my self but on my pc i cant start running WMV, i tryd to delete it mty self vie MPQ but there i do it blindly.
i will be vary thankful if u can help me or give somekinda advice on my issue, Thanks agean

## Post 117282 by Watchers3d (Barrens Chat Casualty) — 2025-01-19T18:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117282#p117282 | page 6 | era: pre-1.18.1 -->

> **Ctapblu wrote: Sun Jan 19, 2025 12:39 pm**
> Hi, i lovw what u did whit old models its a new taste of old view gj!
>  But for many risons i perfere to keep humans and elfs MALEs only as a deffulrt, dont upgrade the models, i tryd to do it my self but on my pc i cant start running WMV, i tryd to delete it mty self vie MPQ but there i do it blindly.
>  i will be vary thankful if u can help me or give somekinda advice on my issue, Thanks agean

Greetings, Ctapblu.

Unfortunately, there's no easy way to achieve what you want. Delete appropriate subfolders of Character folder from patch-A. Then, you have to restore db lines in charsections.dbc to it's default values. Take the default file from DBFilesClient folder of the latest numeric patch (it's patch-6 now I think), and also the same file from patch-A. Edit one of them appropriately. There's a variety of different dbc editors you can find online for the task. I personally use either DBCutil or WDBX Editor.

## Post 117467 by Ctapblu — 2025-01-21T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117467#p117467 | page 6 | era: pre-1.18.1 -->

Hello, thank you for replay, i spend all this days fixing that issue, and i finaly didi it, but only for Human race a the momet, now i have basic male human models and upgradet Human Female models, Thanks alot!
But now i have a new issue atm i dont see the way to fix it, now human NPC face are broken, textures are stracht,i try to change files in editor but its or Males are fix or Female are, never male and female at the same time

## Post 117476 by Zockzock — 2025-01-21T21:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117476#p117476 | page 6 | era: pre-1.18.1 -->

Throm-Ka me think you work work very very good.

## Post 117575 by Watchers3d (Barrens Chat Casualty) — 2025-01-22T15:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117575#p117575 | page 6 | era: pre-1.18.1 -->

> **Ctapblu wrote: Tue Jan 21, 2025 8:40 pm**
> Hello, thank you for replay, i spend all this days fixing that issue, and i finaly didi it, but only for Human race a the momet, now i have basic male human models and upgradet Human Female models, Thanks alot!
>  But now i have a new issue atm i dont see the way to fix it, now human NPC face are broken, textures are stracht,i try to change files in editor but its or Males are fix or Female are, never male and female at the same time

If you want the same race to split on the HD and SD model, then you'll have to leave at least on folder in this Character specific folder (Human, for example). Delete only Male folder, if you want males to be SD. After that, you'll have to rename all hair textures within Human folder to have an "_HD" tag at the end. Because now you'll have to split hair textures, too. HD models hair textures are not the same as SD ones. Open charsections.dbc and relink freshly renamed hairstyle textures for female models. That should cover player character models.

If you want npc's to work too, then you'll have to find and delete only human male related textures within patch-A/textures/bakednpctextures, and then, you either convert all of them to png to have a reference on what you're looking at, or you can identify race and gender of an npc by looking at creaturedisplayinfoextra.dbc

> **Zockzock wrote: Tue Jan 21, 2025 9:48 pm**
> Throm-Ka me think you work work very very good.

Thank you for being around  smiling_turtle_head . If it weren't for people who are interested in this, I would have stopped long ago.

Also, update for patch-A HD Character Models Only and patch-F A Little Extra is soon. In the next couple of days. It will address all problems people mentioned in the last 2-3 weeks.

## Post 117597 by Watchers3d (Barrens Chat Casualty) — 2025-01-22T19:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117597#p117597 | page 6 | era: pre-1.18.1 -->

HD Character Models only version of HD Project Patch-A and patch-F of A Little Extra are updated. Redownload most recent versions from the topic header.

HD Character Models Only Patch-A:
High Elf Male and Female eye glow has been disabled to match it's previous behavior, so not to interrupt with Blood Ranger skins and closer represent HD version of default models.

A Little Extra:
High Elf Female dance animation stuttering fix, animation adjustments
Night Elf Female camera while mounted fix

## Post 117618 by RPGnerd (Barrens Chat Casualty) — 2025-01-22T22:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117618#p117618 | page 6 | era: pre-1.18.1 -->

Any chance we could have these attributes increased for some Horde females as well? :)

## Post 117622 by Materia — 2025-01-22T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117622#p117622 | page 6 | era: pre-1.18.1 -->

> **RPGnerd wrote: Wed Jan 22, 2025 10:49 pm**
> Any chance we could have these attributes increased for some Horde females as well? :)

I very much vote orc female    turtle_in_love

## Post 117624 by RPGnerd (Barrens Chat Casualty) — 2025-01-22T23:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117624#p117624 | page 6 | era: pre-1.18.1 -->

> **Materia wrote: Wed Jan 22, 2025 11:20 pm**
> > **RPGnerd wrote: Wed Jan 22, 2025 10:49 pm**
> > Any chance we could have these attributes increased for some Horde females as well? :)
>
>   I very much vote orc female    turtle_in_love

wtb Female Tauren big goth tiddy

## Post 117628 by Inovatu (Barrens Chat Casualty) — 2025-01-23T00:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117628#p117628 | page 6 | era: pre-1.18.1 -->

> **Watchers3d wrote: Wed Jan 22, 2025 7:05 pm**
> HD Character Models only version of HD Project Patch-A and patch-F of A Little Extra are updated. Redownload most recent versions from the topic header.
>
>  HD Character Models Only Patch-A:
>  High Elf Male and Female eye glow has been disabled to match it's previous behavior, so not to interrupt with Blood Ranger skins and closer represent HD version of default models.
>
>  A Little Extra:
>  High Elf Female dance animation stuttering fix, animation adjustments
>  Night Elf Female camera while mounted fix

Tiddies are way off... :/

## Post 117774 by Ctapblu — 2025-01-24T11:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117774#p117774 | page 6 | era: pre-1.18.1 -->

Thanks for guide, at the moment it looks like this, everything is working but human male npc textures are off place and I wanna to fix it and keep the look of human male npc like in vanilla

![Image](https://files.fm/u/7uu5242pym)

<https://files.fm/u/7uu5242pym>

## Post 117798 by Whalemilk (Patch Note Conspiracy Theorist) — 2025-01-24T16:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117798#p117798 | page 6 | era: pre-1.18.1 -->

Anyway to get this for classic models?

Asking for a friend.

## Post 118229 by Akii — 2025-01-28T19:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118229#p118229 | page 6 | era: pre-1.18.1 -->

thanks for updating it, now i can finally play the game again

## Post 118244 by Mrrosh (Barrens Chat Casualty) — 2025-01-28T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118244#p118244 | page 6 | era: pre-1.18.1 -->

Still waiting for troll females.

## Post 119009 by Randanonn — 2025-02-05T08:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119009#p119009 | page 6 | era: pre-1.18.1 -->

Please do SD models. <3

## Post 119118 by Roido — 2025-02-06T05:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119118#p119118 | page 6 | era: pre-1.18.1 -->

I wish there was a way to make Female Night Elves to be the same height as the High Elves.

## Post 119535 by Watchers3d (Barrens Chat Casualty) — 2025-02-10T15:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119535#p119535 | page 6 | era: pre-1.18.1 -->

> **Whalemilk wrote: Fri Jan 24, 2025 4:39 pm**
> Anyway to get this for classic models?
>
>  Asking for a friend.

> **Randanonn wrote: Wed Feb 05, 2025 8:53 am**
> Please do SD models. <3

Well, SD models can be customized in the very similar fashion, sure. But for that we either need a backport of some other project, or somebody else to do it from scratch. Previously I talked quite a bit about SD Models and how simple they are. For me, I found this simplicity inconvenient. Maybe someday though?

> **Watchers3d wrote: Mon Sep 09, 2024 7:17 am**
> [embed: //drive.google.com/file/d/1m8s2oBtqwmGD0CmcpnxWH8YUpzx1lJdy/preview]
>
>
>  Ecks dee. Well this is possible technically (arms below the elbow are original, hence the seam). Not worth finishing though.
>  Original naked (underwear) texture does not fit properly on my meshes for strange blizzard reasons, and visible neck seam of course will never go away. HD rig is a little bit more complex weights-wise, but merging some vertex groups to 1 does the trick most of the time. In SD models there are some bones that are just not present in HD model. Like knee bones. But most of them are still the same. Rest poses are different too, but in HD model the same pose is preserved, except for hands balled into fists, while in SD model hands are relaxed straight.

## Post 119778 by Watchers3d (Barrens Chat Casualty) — 2025-02-12T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119778#p119778 | page 6 | era: pre-1.18.1 -->

Patch-F is updated to address broken sound events issue in Night Elf Female model.

Keep in mind, I haven't touched my NEF model for quite a while and may have broken something that was working just fine previously along the way. You can always download the previous version below the main link in the topic header.

## Post 119987 by Oniwa — 2025-02-14T20:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119987#p119987 | page 6 | era: pre-1.18.1 -->

Greetings, any update on the undead model that was being worked on?

## Post 120414 by oldboi — 2025-02-19T16:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120414#p120414 | page 6 | era: pre-1.18.1 -->

High elf in stealth mode gets stuck in the animation and slides around instead of walking. Persists even after stealth resulting in headbutting enemies instead of using her arms.

## Post 120464 by Watchers3d (Barrens Chat Casualty) — 2025-02-20T07:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120464#p120464 | page 6 | era: pre-1.18.1 -->

> **oldboi wrote: Wed Feb 19, 2025 4:32 pm**
> High elf in stealth mode gets stuck in the animation and slides around instead of walking. Persists even after stealth resulting in headbutting enemies instead of using her arms.

Fixed hopefully. Redownload.

## Post 120503 by oldboi — 2025-02-20T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120503#p120503 | page 6 | era: pre-1.18.1 -->

> **Watchers3d wrote: Thu Feb 20, 2025 7:23 am**
> > **oldboi wrote: Wed Feb 19, 2025 4:32 pm**
> > High elf in stealth mode gets stuck in the animation and slides around instead of walking. Persists even after stealth resulting in headbutting enemies instead of using her arms.
>
>   Fixed hopefully. Redownload.

Yes, thank you! But something is still wrong, after using pickpocket, the arms just hang and are not animated.

*Last edited by oldboi on Thu Feb 20, 2025 7:51 pm, edited 2 times in total.*

## Post 120560 by Watchers3d (Barrens Chat Casualty) — 2025-02-21T03:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120560#p120560 | page 6 | era: pre-1.18.1 -->

> **oldboi wrote: Thu Feb 20, 2025 2:33 pm**
> Yes, thank you! But something is still wrong, after using pickpocket, the arms just hang and are not animated.

Oh. I wish I'd noticed it sooner.

Please, redownload. Should display properly now.

## Post 121454 by Stogrim — 2025-03-03T01:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121454#p121454 | page 6 | era: pre-1.18.1 -->

I have 2 questions.
 1. Is there a reason Horde models are left out of the mod? Is it harder to change their models?
 2. Is there a way to increase breast / butt / thigh size further? It's a wonderful mod as it is, but it would be interesting to see it pushed further.

Amazing mod, one of the main reasons I'm still playing Turtle wow, thank you!

## Post 121542 by Kappita2505 — 2025-03-03T21:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121542#p121542 | page 6 | era: pre-1.18.1 -->

Orc and trolls??

## Post 121555 by Evilko — 2025-03-04T01:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121555#p121555 | page 6 | era: pre-1.18.1 -->

Hello fellow man of culture!
Found a problem. High Elf with Whitemane's hat on.
With your F mod:
![Image](https://i.imgur.com/vNQBMAX.jpeg)

Without mod:
![Image](https://i.imgur.com/YhSWogz.jpeg)

## Post 121617 by Watchers3d (Barrens Chat Casualty) — 2025-03-04T14:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121617#p121617 | page 6 | era: pre-1.18.1 -->

> **Stogrim wrote: Mon Mar 03, 2025 1:23 am**
> I have 2 questions.
>  1. Is there a reason Horde models are left out of the mod? Is it harder to change their models?
>  2. Is there a way to increase breast / butt / thigh size further? It's a wonderful mod as it is, but it would be interesting to see it pushed further.
>
>  Amazing mod, one of the main reasons I'm still playing Turtle wow, thank you!

Greetings, Stogrim  smiling_turtle_head .

I had planned on adding trolls in February. Something came up along the way. I still plan to upload them in the near foreseeable future. Generally it's not harder, no. It just that ftroll model in complete jank out of the box.
There's is a way, sure. In circumstances of vanilla client, we're pushing things hard even with default HD models, texture resolution-wise. Textures are present already and also downsized from their default resolution. There's only so much UV space to spread new geometry across these textures. The further you go, the more blurry and stretched the textures will be across the geometry.

> **Kappita2505 wrote: Mon Mar 03, 2025 9:53 pm**
> Orc and trolls??

Greetings, Kappita2505

Trolls SOON TM relatively  smiling_turtle_head .

> **Evilko wrote: Tue Mar 04, 2025 1:58 am**
> Hello fellow man of culture!
>  Found a problem. High Elf with Whitemane's hat on.

Greetings, Evilko  smiling_turtle_head .

Try the most recent version out, the problem should be fixed. If something is wrong still, you can always download previous version below the main link in the topic header.

## Post 121665 by Evilko — 2025-03-04T21:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121665#p121665 | page 6 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Mar 04, 2025 2:51 pm**
> Greetings, Evilko  smiling_turtle_head .
>
>  Try the most recent version out, the problem should be fixed. If something is wrong still, you can always download previous version below the main link in the topic header.

Thx! Newest version 0.9.3 indeed fixed it. <3

## Post 121672 by Mrrosh (Barrens Chat Casualty) — 2025-03-04T21:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121672#p121672 | page 6 | era: pre-1.18.1 -->

Can you fix the tauren female camera while swimming? Currently it's way lower than it should.

## Post 121675 by Turtledu87 — 2025-03-04T21:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121675#p121675 | page 6 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Mar 04, 2025 2:51 pm**
> > **Kappita2505 wrote: Mon Mar 03, 2025 9:53 pm**
> > Orc and trolls??
>
>   Greetings, Kappita2505
>
>  Trolls SOON TM relatively  smiling_turtle_head .

Yes ! Cant wait to see that !  turtle_in_love_head

## Post 121687 by Watchers3d (Barrens Chat Casualty) — 2025-03-04T23:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121687#p121687 | page 6 | era: pre-1.18.1 -->

> **Mrrosh wrote: Tue Mar 04, 2025 9:15 pm**
> Can you fix the tauren female camera while swimming? Currently it's way lower than it should.

I can center it on the character's head when zoomed in fully, as it supposed to be generally. Redownload.

## Post 121691 by Kappita2505 — 2025-03-05T00:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121691#p121691 | page 6 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Mar 04, 2025 2:51 pm**
> > **Stogrim wrote: Mon Mar 03, 2025 1:23 am**
> > I have 2 questions.
> >  1. Is there a reason Horde models are left out of the mod? Is it harder to change their models?
> >  2. Is there a way to increase breast / butt / thigh size further? It's a wonderful mod as it is, but it would be interesting to see it pushed further.
> >
> >  Amazing mod, one of the main reasons I'm still playing Turtle wow, thank you!
>
>   Greetings, Stogrim  smiling_turtle_head .
>
>  I had planned on adding trolls in February. Something came up along the way. I still plan to upload them in the near foreseeable future. Generally it's not harder, no. It just that ftroll model in complete jank out of the box.
>  There's is a way, sure. In circumstances of vanilla client, we're pushing things hard even with default HD models, texture resolution-wise. Textures are present already and also downsized from their default resolution. There's only so much UV space to spread new geometry across these textures. The further you go, the more blurry and stretched the textures will be across the geometry.
>
> > **Kappita2505 wrote: Mon Mar 03, 2025 9:53 pm**
> > Orc and trolls??
>
>   Greetings, Kappita2505
>
>  Trolls SOON TM relatively  smiling_turtle_head .
>
> > **Evilko wrote: Tue Mar 04, 2025 1:58 am**
> > Hello fellow man of culture!
> >  Found a problem. High Elf with Whitemane's hat on.
>
>   Greetings, Evilko  smiling_turtle_head .
>
>  Try the most recent version out, the problem should be fixed. If something is wrong still, you can always download previous version below the main link in the topic header.

Nice

## Post 121925 by Omongous — 2025-03-07T03:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121925#p121925 | page 6 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Mar 04, 2025 2:51 pm**
> > **Stogrim wrote: Mon Mar 03, 2025 1:23 am**
> > I have 2 questions.
> >  1. Is there a reason Horde models are left out of the mod? Is it harder to change their models?
> >  2. Is there a way to increase breast / butt / thigh size further? It's a wonderful mod as it is, but it would be interesting to see it pushed further.
> >
> >  Amazing mod, one of the main reasons I'm still playing Turtle wow, thank you!
>
>   Greetings, Stogrim  smiling_turtle_head .
>
>  I had planned on adding trolls in February. Something came up along the way. I still plan to upload them in the near foreseeable future. Generally it's not harder, no. It just that ftroll model in complete jank out of the box.
>  There's is a way, sure. In circumstances of vanilla client, we're pushing things hard even with default HD models, texture resolution-wise. Textures are present already and also downsized from their default resolution. There's only so much UV space to spread new geometry across these textures. The further you go, the more blurry and stretched the textures will be across the geometry.

Understandable, though as a enjoyer of all things good and big, I hope that one day you will try to push the envelope further!

In the mean time though, still wonderful work as is and definitely excited to see what you'll do for the Troll ladies down the road! Appreciate all your effort thus far.

## Post 122933 by Glarthir (Barrens Chat Casualty) — 2025-03-18T21:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122933#p122933 | page 6 | era: pre-1.18.1 -->

A little bit more extra for high elves would be 10/10

## Post 123354 by Dorufin — 2025-03-22T21:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123354#p123354 | page 7 | era: pre-1.18.1 -->

When I import the model in blender 3.4 that uses the latest version of wow blender studio, it won't let me extract it as m2. Even though I didn't do any changes to model. How can I fix it?

*Last edited by Dorufin on Sun Mar 23, 2025 5:18 pm, edited 1 time in total.*

## Post 123358 by f125d7eb — 2025-03-22T23:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123358#p123358 | page 7 | era: pre-1.18.1 -->

Hi, any update on the Horde side? Thanks.

## Post 123709 by Watchers3d (Barrens Chat Casualty) — 2025-03-25T10:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123709#p123709 | page 7 | era: pre-1.18.1 -->

> **Dorufin wrote: Sat Mar 22, 2025 9:26 pm**
> When I import the model in blender 3.4 that uses the latest version of wow blender studio, it won't let me extract it as m2. Even though I didn't do any changes to model. How can I fix it?

Greetings, Dorufin  smiling_turtle_head . You're talking about .blend files I published quite a while back? Import them from WotLK m2 instead of opening .blend files. The idea to post them as .blend was not the brightest one, since WBS version obviously got updated a couple of times since then. I'll take this link down and instead upload just WotLK m2s, without .blend files.

> **f125d7eb wrote: Sat Mar 22, 2025 11:30 pm**
> Hi, any update on the Horde side? Thanks.

Greetings. Yeah, got tangled up a bit. I see Turtle plans to push a new update April 3. It will undoubtedly introduce new NPCs, too, thus breaking HD Character Models only patch-A. So I'll have to update it after said date. And if the stars align like I expect them too, I'll push some Horde update for patch-F with it.

## Post 123756 by Dorufin — 2025-03-25T13:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123756#p123756 | page 7 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Mar 25, 2025 10:00 am**
> > **Dorufin wrote: Sat Mar 22, 2025 9:26 pm**
> > When I import the model in blender 3.4 that uses the latest version of wow blender studio, it won't let me extract it as m2. Even though I didn't do any changes to model. How can I fix it?
>
>   Greetings, Dorufin  smiling_turtle_head . You're talking about .blend files I published quite a while back? Import them from WotLK m2 instead of opening .blend files. The idea to post them as .blend was not the brightest one, since WBS version obviously got updated a couple of times since then. I'll take this link down and instead upload just WotLK m2s, without .blend files.

Thank you so much for sharing the new files! I was able to edit the model and kind of make my own version with a bit more extra bodies. The only problem I had was the left arm of night elves were split. It seemed like an armature bone issue or maybe it was because I added some high poly body parts but I think I can fix it by doing some more optimization to my edit. Again, thank you so much for sharing this mod and the source files. It helped me get the hangs of wow mod making <3

## Post 123890 by Watchers3d (Barrens Chat Casualty) — 2025-03-26T09:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123890#p123890 | page 7 | era: pre-1.18.1 -->

> **Dorufin wrote: Tue Mar 25, 2025 1:37 pm**
> Thank you so much for sharing the new files! I was able to edit the model and kind of make my own version with a bit more extra bodies. The only problem I had was the left arm of night elves were split. It seemed like an armature bone issue or maybe it was because I added some high poly body parts but I think I can fix it by doing some more optimization to my edit. Again, thank you so much for sharing this mod and the source files. It helped me get the hangs of wow mod making <3

Sure, no problem  smiling_turtle_head .
Oh, yeah. Adding new geometry to an already existing model, without prior experience can be a very complicated, intricate task. You can always start smaller and sculpt or study already unwrapped, weighted meshes. Best of luck with your project!  smiling_turtle_head

## Post 124448 by TR0Y — 2025-03-30T13:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124448#p124448 | page 7 | era: pre-1.18.1 -->

horde man gender too?

## Post 124463 by Garland1 — 2025-03-30T14:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124463#p124463 | page 7 | era: pre-1.18.1 -->

Hi! Thanks for your mod    smiling_turtle_head  . Will it work on 3.3.5 WotLK?

## Post 124970 by Bittermens (Barrens Chat Casualty) — 2025-04-01T20:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124970#p124970 | page 7 | era: pre-1.18.1 -->

Since you are working on a wrath release for those playing on 3.3.5 clients.
I say you should check on titaa's hd girls mod on which she left it open for resources.

It is at darknest obviously, but there is a ton of open source assets they left there for pservers as long as you dont post there due to the Darknest ADM scared of blizzard shutting her down.

## Post 125395 by Watchers3d (Barrens Chat Casualty) — 2025-04-04T08:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125395#p125395 | page 7 | era: pre-1.18.1 -->

> **Garland1 wrote: Sun Mar 30, 2025 2:54 pm**
> Hi! Thanks for your mod    smiling_turtle_head  . Will it work on 3.3.5 WotLK?

Greetings, Garland1  smiling_turtle_head .
While WotLK client itself will boot using m2 models from the spoiler part of the topic header, models won't display properly. WotLK geosets are missing completely. Only Vanilla geometry is present. So, no. It won't work.

> **Bittermens wrote: Tue Apr 01, 2025 8:07 pm**
> Since you are working on a wrath release for those playing on 3.3.5 clients.
>  I say you should check on titaa's hd girls mod on which she left it open for resources.
>
>  It is at darknest obviously, but there is a ton of open source assets they left there for pservers as long as you dont post there due to the Darknest ADM scared of blizzard shutting her down.

Greetings, Bittermens  smiling_turtle_head .
No plans for WotLK version. WotLK client, being the center of WoW modding has plenty and needs mods toned down a bit polygon-wise. A Little Extra was possible in Vanilla client due to number of geosets present for existing polygon limit, which is the same for WotLK client.

## Post 125396 by Watchers3d (Barrens Chat Casualty) — 2025-04-04T08:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125396#p125396 | page 7 | era: pre-1.18.1 -->

Patch-A is updated a little to not shit itself after recent Turtle patch.

## Post 125446 by Bittermens (Barrens Chat Casualty) — 2025-04-04T13:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125446#p125446 | page 7 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri Apr 04, 2025 8:00 am**
> > **Garland1 wrote: Sun Mar 30, 2025 2:54 pm**
> > Hi! Thanks for your mod    smiling_turtle_head  . Will it work on 3.3.5 WotLK?
>
>   Greetings, Garland1  smiling_turtle_head .
>  While WotLK client itself will boot using m2 models from the spoiler part of the topic header, models won't display properly. WotLK geosets are missing completely. Only Vanilla geometry is present. So, no. It won't work.
>
> > **Bittermens wrote: Tue Apr 01, 2025 8:07 pm**
> > Since you are working on a wrath release for those playing on 3.3.5 clients.
> >  I say you should check on titaa's hd girls mod on which she left it open for resources.
> >
> >  It is at darknest obviously, but there is a ton of open source assets they left there for pservers as long as you dont post there due to the Darknest ADM scared of blizzard shutting her down.
>
>   Greetings, Bittermens  smiling_turtle_head .
>  No plans for WotLK version. WotLK client, being the center of WoW modding has plenty and needs mods toned down a bit polygon-wise. A Little Extra was possible in Vanilla client due to number of geosets present for existing polygon limit, which is the same for WotLK client.

lets just say that people wants your in ascension too

## Post 125800 by metakin — 2025-04-07T03:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125800#p125800 | page 7 | era: pre-1.18.1 -->

pls pls pls pls pls add the troll female

## Post 126098 by Kappita2505 — 2025-04-09T06:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126098#p126098 | page 7 | era: pre-1.18.1 -->

add orc and troll female pls

## Post 126122 by Ataika (Grandmaster of Forum PvP) — 2025-04-09T09:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126122#p126122 | page 7 | era: pre-1.18.1 -->

> **Keesbank0 wrote: Tue Apr 08, 2025 2:54 pm**
> Just out of curiosity; Why are you working on the troll female instead of the orc for example? I believe the orc is easier to modify due to model structural reasons?

orc should remain ugly and flat

## Post 126477 by Ctapblu — 2025-04-11T17:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126477#p126477 | page 7 | era: pre-1.18.1 -->

<3

*Last edited by Ctapblu on Fri Apr 25, 2025 9:51 pm, edited 1 time in total.*

## Post 126545 by Necropheus — 2025-04-12T20:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126545#p126545 | page 7 | era: pre-1.18.1 -->

i am excited for Trolls (and maybe Orcs?)

But i thought Succubus would also be a good one

## Post 126738 by Ctapblu — 2025-04-14T14:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126738#p126738 | page 7 | era: pre-1.18.1 -->

Succubus <3

## Post 126890 by Antinuke000 — 2025-04-15T13:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126890#p126890 | page 7 | era: pre-1.18.1 -->

Hi! Do you think we can have a version of a high elf "MALE" with smaller and less wider shoulder?

its kinda clunky when you walk while playing high elf "MALE" Thank you

BTW Awesome  MOD work!!

*Last edited by Antinuke000 on Tue Apr 15, 2025 9:25 pm, edited 1 time in total.*

## Post 127052 by metakin — 2025-04-16T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127052#p127052 | page 7 | era: pre-1.18.1 -->

trolls trolls trolls trolls ^w^ i love trolls~~

## Post 127424 by f125d7eb — 2025-04-19T01:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127424#p127424 | page 7 | era: pre-1.18.1 -->

Hi, I successfully did some modifications using wotlk version of .m2 files provided by you, and they loaded well in the game :D

When I trying to more work on races other than those three you provided, I came across some obstacles:
- 1. jm2converter failed to convert 1.12 version of .m2 to woltk version

- 2. I tried to use Warlords Of Draenor default models, but some geometry and texture positions are missing/don't match. It ends up with a mess in the game.
Is there a chance you can show me where can I get wotlk version of .m2 files in patch-A? It would be a great help for me to start working on those modues. Forgive me been a noob, since I‘ve learned using Blender for less than 48 hours. Thank you!

*Last edited by f125d7eb on Sat Apr 19, 2025 1:32 am, edited 1 time in total.*

## Post 127478 by Watchers3d (Barrens Chat Casualty) — 2025-04-19T10:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127478#p127478 | page 7 | era: pre-1.18.1 -->

> **f125d7eb wrote: Sat Apr 19, 2025 1:32 am**
> Hi, I successfully did some modifications using wotlk version of .m2 files provided by you, and they loaded well in the game :D
>
>  When I trying to more work on races other than those three you provided, I came across some obstacles:
> - 1. jm2converter failed to convert 1.12 version of .m2 to woltk version
>
> - 2. I tried to use Warlords Of Draenor default models, but some geometry and texture positions are missing/don't match. It ends up with a mess in the game.
>   Is there a chance you can show me where can I get wotlk version of .m2 files in patch-A? It would be a great help for me to start working on those modues. Forgive me been a noob, since I‘ve learned using Blender for less than 48 hours. Thank you!

Hello. That's very nice to hear, good work!  smiling_turtle_head

 1. Use jm2 only to backport, but not up-port in this case. You need it only once - to convert WotLK model to Vanilla model.
 2. Oh yeah. That's because you're not aware yet of some dark, secret arts you have to muster in order to deal with this.

There's no such thing as WotLK version of .m2 files from patch-A. These were made by ancient modders of old, and any resource files these backports had now are long gone in the dark shadow of the abyss. Ways to maintain them do exist though, and that's what I and people before me did. But that's not your case, and besides, neither I, nor you, nor anyone else even needs those resource files from patch-A HD Models. Because we can recreate the results.

Start small. Take any WoD model from an archive I posted. I'll take a gnome female to demonstrate.

Put **all** the .skin files, the model itself, as well as all animations in one folder to start with. In my case skin file is something like "gnomefemale_hd01.skin", .anim file is "gnomefemale_hd0732-00.anim", and the main model is "gnomefemale_hd.m2".
Now, to backport you have to use MultiConverter. Original compilation of it doesn't allow you to backport models that exceeds our sweet polygon limit of 21845 polygons. I compiled one that does. I'll upload my edited multiconverter version in the topic header.
Just select everything from the folder and drop it in the empty space of converter interface. Click fix and after a second or two you're done. The result you can just import to WBS.

In WBS, you have to delete every object that doesn't belong in Vanilla model. Hairstyles, capes, belts, boots, gloves etc. Just compare with patch-A model in-game, or with my models in Blender, which geosets should stay. WBS is not my recompiled multiconverter - it won't allow you to export model that exceeds the polygon limit. If export shows you this error "struct.error: ushort format requires 0 <= number <= 0xffff" then, your model still exceeds polygon limit.

After that's done, you'll have to fix UV Maps, too. If you never encountered UV mapping before, I suggest you to look for the general videos about the topic in YouTube. After that, you can fix the UVs for your retroport.

Generally, you have to scale almost all UVs by 2 on X axis. Here's a little video. I throwed in a body texture to make it visible and easier to understand. In this video I only use some geosets ("naked" body related ones). But that doesn't mean it's only these ones - you have to adjust all that needs it.
Head geometry needs special attention. So I'll cover it in the video, too.

[embed: //drive.google.com/file/d/1rHqX0Kd6cURA5D1SbE01rqAaOJ42JRKr/preview]

What's going on in the video:
 1. I enter in Edit Mode, with all geometry selected within the viewport on the right. Overlays are just hidden on the right, but everything is indeed selected.
 2. In UV Editor, I change Pivot Point to 2D Cursor. 2D cursor is this little red and white circle in UV space on the bottom left.
 3. I select all UV islands using box select tool. You can press W to cycle though selection options.
 4. I press on my keyboard "S, X, 2, Enter". This way I scaled all the UVs along X by 2.
 5. Now, to cover the head. I box select most UVs in question and press ctrl+L to finish selection.
 6. "G, X, -1, Enter". This moves the selected islands on X axis by -1.
 7. "S, X, 0.5, Enter". This scales selected UVs by 0.5 on X axis.
 8. "S, Y, 0.375, Enter". This scales selected UVs by 0.375 on Y axis.

That's it.

This gnome female model in particular doesn't have UV Islands placed out of bounds of the first UV tile. But some other models do. Vanilla client doesn't understand that. In similar fashion, move all loose islands back in. Selected the island, G (to move), X/Y (to select the axis), 1 (or more, if the island is further away).

That's it. Good luck  smiling_turtle_head . This will be hard without any prior knowledge.

*Last edited by Watchers3d on Sat Apr 19, 2025 1:06 pm, edited 4 times in total.*

## Post 127479 by Watchers3d (Barrens Chat Casualty) — 2025-04-19T10:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127479#p127479 | page 7 | era: pre-1.18.1 -->

> **Ctapblu wrote: Fri Apr 11, 2025 5:00 pm**
> love what you did with High Elfs in new patchA (4aprl)
>  i notice there is same issue whit hairstyles
>
>  can you chanche it on this one
>  im playing with my little brother and all the time Im asking him to put  his helm on  :D
>  may be its possible to atlest change it on something like this
>
>  -  ill will be very thankful <3

Greetings, Ctapblu  smiling_turtle_head . Yeah, right now Patch-A does precisely what is promises to do - it cycles hairstyles again to fill in all the missing ones (Turtle added custom and WotLK hairstyles in 17.2). It not a bug, but how I set it up. Unfortunately this almost bald hairstyle became a stand-in for this long hairstyle Turtle added. I'll see what can be done.

> **Necropheus wrote: Sat Apr 12, 2025 8:57 pm**
> i am excited for Trolls (and maybe Orcs?)
>
>  But i thought Succubus would also be a good one

> **metakin wrote: Wed Apr 16, 2025 6:48 pm**
> trolls trolls trolls trolls ^w^ i love trolls~~

As for female trolls - I know I promised trolls a billion times already and yet didn't finish them. I'll get back to it  smiling_turtle_head .

> **antinuke365 wrote: Tue Apr 15, 2025 1:01 pm**
> Hi! Do you think we can have a version of a high elf "MALE" with smaller and less wider shoulder?
>
>  its kinda clunky when you walk while playing high elf "MALE" Thank you
>
>  BTW Awesome  MOD work!!

Thank you  smiling_turtle_head . Yeah, it's possible for sure. Not sure if someday I'll develop my powers around this task, but it's possible.

## Post 127481 by Watchers3d (Barrens Chat Casualty) — 2025-04-19T11:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127481#p127481 | page 7 | era: pre-1.18.1 -->

> **Watchers3d wrote: Sat Dec 09, 2023 6:46 pm**
> ****Some software mentioned previously:****
>  [m2mod 9.0.0](https://drive.google.com/file/d/1vJQfqugRvRimMOnaTlo6jrq9VEJOE7vC/view?usp=drive_link) works with blender version 2.91. m2mod you can also find on bitbucket
>  [suncurio-blender-m2i-scripts for m2mod](https://drive.google.com/file/d/1dPZZd17mVv94py8wsxEpKulFvtSPJMMj/view?usp=drive_link)
>  [legacy multiconverter 3.3.0](https://drive.google.com/file/d/1nfvyc1ofvzSd-MduJ4v8_TuG8g7HVVJn/view?usp=drive_link)
>  [edited legacy multiconverter 3.3.0, polygon limitation removed](https://drive.google.com/file/d/10qv_fRqT2Rxm9wooGpyDs7TlVCTke7Lw/view?usp=drive_link)
>  [jm2converter](https://drive.google.com/file/d/1QMKc2OOFEuM0pkyL_eStgyEbUs8DAl7J/view?usp=drive_link) you have to install Java for it to work
>  [010 Editor template to read vanilla m2](https://drive.google.com/file/d/1VxCUjM5zEgf2tkW7_nTrVAEE6pM-dgTl/view?usp=drive_link)

Guys, I posted this ancient software of old gods - 3.3.0 multiconverter, but recompiled, for the few people who needs it. You can download it from the topic header. It functions absolutely the same. Absence of polygon limit allows to, for example import WoD character model straight to WBS.

## Post 127530 by kuantumm — 2025-04-19T16:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127530#p127530 | page 7 | era: pre-1.18.1 -->

Is there any chance we could have a little extra for female gnomes? Asking for a friend   sad_turtle_head

## Post 127723 by metakin — 2025-04-20T20:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127723#p127723 | page 7 | era: pre-1.18.1 -->

> **kuantumm wrote: Sat Apr 19, 2025 4:27 pm**
> Is there any chance we could have a little extra for female gnomes? Asking for a friend   sad_turtle_head

unhappy_turtle

## Post 128172 by metakin — 2025-04-23T18:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128172#p128172 | page 7 | era: pre-1.18.1 -->

Any news on the Horde patch? :)

## Post 128489 by Watchers3d (Barrens Chat Casualty) — 2025-04-25T17:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128489#p128489 | page 7 | era: pre-1.18.1 -->

> **metakin wrote: Wed Apr 23, 2025 6:01 pm**
> Any news on the Horde patch? :)

> **Keesbank0 wrote: Thu Apr 24, 2025 8:42 am**
> Just created a troll. Was wondering the same too haha

I think I'll post it next week. I know judging by the screenshots I posted earlier it may seem like it's done already, but there's a lot to do still  smiling_turtle_head . I wish out of the box ftroll default model was up to snuff with the rest of the models I worked with before, but it's really not. I think, Blizzard cared a little less about this one  smiling_turtle_head .

## Post 128620 by Heathcliff13 — 2025-04-26T17:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128620#p128620 | page 7 | era: pre-1.18.1 -->

I found a bug with the new patch A ([viewtopic.php?t=18689](https://forum.turtlecraft.gg/viewtopic.php?t=18689)), when you get at darkwhood southern cementery. There are some mague skeletons who make the game crash.

EDIT: i found a Fix, use patch A from this post calling it patch S, and renaming patch F to patch T to solve load order. All of this using new patch A too (more HDisk space taken but working)

## Post 128790 by rukami — 2025-04-28T09:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128790#p128790 | page 7 | era: pre-1.18.1 -->

Bug on camera on Honeyback Harverster
Hey! Nice work from here!

The camera when I mount in the Honeyback its too high!, Its hard to see my PJ. Tested on Female Human
With the HD patch + A little extra:
![Image](https://i.imgur.com/2pRFhVU.png)

Witout the HD patch - A little extra:
![Image](https://i.imgur.com/fS1MPho.png)

With the HD patch - A little extra:
![Image](https://i.imgur.com/mXGQIaM.png)

*Last edited by rukami on Mon Apr 28, 2025 9:19 am, edited 1 time in total.*

## Post 128811 by Watchers3d (Barrens Chat Casualty) — 2025-04-28T12:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128811#p128811 | page 7 | era: pre-1.18.1 -->

> **rukami wrote: Mon Apr 28, 2025 9:05 am**
> Hey! Nice work from here!
>
>  The camera when I mount in the Honeyback its too high!, Its hard to see my PJ. Tested on Female Human

Greetings, rukami  smiling_turtle_head
Something like this I can only shoot in the dark and *see* if it helps for now. Try the new version from the topic header. I'll take a closer look if it won't.

Did you test with patch-A from this topic?

## Post 128957 by rukami — 2025-04-29T08:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128957#p128957 | page 7 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Apr 28, 2025 12:02 pm**
> > **rukami wrote: Mon Apr 28, 2025 9:05 am**
> > Hey! Nice work from here!
> >
> >  The camera when I mount in the Honeyback its too high!, Its hard to see my PJ. Tested on Female Human
>
>   Greetings, rukami  smiling_turtle_head
>  Something like this I can only shoot in the dark and *see* if it helps for now. Try the new version from the topic header. I'll take a closer look if it won't.
>
>  Did you test with patch-A from this topic?

Seems works fine using your Patch-A (characters only)

I actually use the new HD PATCH updated [viewtopic.php?t=18689/](https://forum.turtlecraft.gg/viewtopic.php?t=18689/)

The question I have left is whether something can be done or I simply cannot use the new HD patch.

## Post 128961 by Watchers3d (Barrens Chat Casualty) — 2025-04-29T09:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128961#p128961 | page 7 | era: pre-1.18.1 -->

> **rukami wrote: Tue Apr 29, 2025 8:30 am**
> Seems works fine using your Patch-A (characters only)
>
>  I actually use the new HD PATCH updated [viewtopic.php?t=18689/](https://forum.turtlecraft.gg/viewtopic.php?t=18689/)
>
>  The question I have left is whether something can be done or I simply cannot use the new HD patch.

This patch is using character models, related to characters db's and textures from this topic. At lest for now. Camera values between default patch-A models and A Little Extra models are exactly the same (for female human now, too). Typically, the result should be exactly the same. It's interesting that you get different camera positions.

Camera height also can be affected by creature models themselves. Patch-F and Patch-A from this topic don't deal with creatures.

I suggest to try latest patch-F. I'll upload it now. If that won't work, I can't tell exactly the reason why it happens like that.

## Post 128970 by rukami — 2025-04-29T10:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128970#p128970 | page 7 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Apr 29, 2025 9:22 am**
> > **rukami wrote: Tue Apr 29, 2025 8:30 am**
> > Seems works fine using your Patch-A (characters only)
> >
> >  I actually use the new HD PATCH updated [viewtopic.php?t=18689/](https://forum.turtlecraft.gg/viewtopic.php?t=18689/)
> >
> >  The question I have left is whether something can be done or I simply cannot use the new HD patch.
>
>   This patch is using character models, related to characters db's and textures from this topic. At lest for now. Camera values between default patch-A models and A Little Extra models are exactly the same (for female human now, too). Typically, the result should be exactly the same. It's interesting that you get different camera positions.
>
>  Camera height also can be affected by creature models themselves. Patch-F and Patch-A from this topic don't deal with creatures.
>
>  I suggest to try latest patch-F. I'll upload it now. If that won't work, I can't tell exactly the reason why it happens like that.

Now seems working with the new patch-F, youre awesome!

Congratulations on your great work and attention!

Hope the Horde characters are coming soon!

## Post 129092 by stinkyfoxy — 2025-04-30T07:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129092#p129092 | page 7 | era: pre-1.18.1 -->

Can you please add a changelog to the main post?

## Post 129298 by Zockzock — 2025-05-01T20:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129298#p129298 | page 7 | era: pre-1.18.1 -->

Yo dude like I said I think your work is amazing and all but make sure to take it easy, take some rest and don't push yourself too hard or you might regret it, I mean... Work work good but peon must sleep too.

## Post 129337 by metakin — 2025-05-02T05:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129337#p129337 | page 8 | era: pre-1.18.1 -->

work work. I mean... zug zug :P

## Post 129413 by Watchers3d (Barrens Chat Casualty) — 2025-05-02T18:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129413#p129413 | page 8 | era: pre-1.18.1 -->

Patch-A:
Female Troll hairstyles now are not cycled anymore and 1 to 1 with default SD model. I didn't dig deep with this backport. Moved hip attachments closer to hips, moved back attachment backwards. Moved pauldrons forward, in previous backport they were a little to far behind the back. Fixed cringed head UVs, which didn't match to it's textures before. I spent some time on the model I talk about below, but not much with default HD one. So I may have bricked something hard. I checked the usual: Arcane Missiles still shoot, sound from emotes still plays like it should. But I didn't dig deep with testing.

Some of you may have picked cycled hairstyle for ftroll earlier, and because of that now you may find yourself with a cringe hairstyle you didn't select. Sorry.

I'll leave a link to previous patch-A version for now below the main one.

Patch-F:
Female trolls added.

## Post 129422 by SowlusRuneSong — 2025-05-02T20:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129422#p129422 | page 8 | era: pre-1.18.1 -->

TY for your great work.
Slow and steady waiting for dwarf =)

## Post 129426 by Bittermens (Barrens Chat Casualty) — 2025-05-02T20:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129426#p129426 | page 8 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri May 02, 2025 6:44 pm**
> Patch-A:
>  Female Troll hairstyles now are not cycled anymore and 1 to 1 with default SD model. I didn't dig deep with this backport. Moved hip attachments closer to hips, moved back attachment backwards. Moved pauldrons forward, in previous backport they were a little to far behind the back. Fixed cringed head UVs, which didn't match to it's textures before. I spent some time on the model I talk about below, but not much with default HD one. So I may have bricked something hard. I checked the usual: Arcane Missiles still shoot, sound from emotes still plays like it should. But I didn't dig deep with testing.
>
>  Some of you may have picked cycled hairstyle for ftroll earlier, and because of that now you may find yourself with a cringe hairstyle you didn't select. Sorry.
>
>  I'll leave a link to previous patch-A version for now below the main one.
>
>  Patch-F:
>  Female trolls added.

i still say you should find someone to port the curvybodies to 3.3.5 too, darknest would be proud of your mod even if their rules there doesn't permit pserver support out of fear o blizzard shutting the forums down.

## Post 129484 by Slayerina — 2025-05-03T12:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129484#p129484 | page 8 | era: pre-1.18.1 -->

Hello, is there any plan to make shortstack gnomette/goblette in future?

## Post 129517 by boombay — 2025-05-03T19:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129517#p129517 | page 8 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri May 02, 2025 6:44 pm**
> Patch-A:
>  Female Troll hairstyles now are not cycled anymore and 1 to 1 with default SD model. I didn't dig deep with this backport. Moved hip attachments closer to hips, moved back attachment backwards. Moved pauldrons forward, in previous backport they were a little to far behind the back. Fixed cringed head UVs, which didn't match to it's textures before. I spent some time on the model I talk about below, but not much with default HD one. So I may have bricked something hard. I checked the usual: Arcane Missiles still shoot, sound from emotes still plays like it should. But I didn't dig deep with testing.
>
>  Some of you may have picked cycled hairstyle for ftroll earlier, and because of that now you may find yourself with a cringe hairstyle you didn't select. Sorry.
>
>  I'll leave a link to previous patch-A version for now below the main one.
>
>  Patch-F:
>  Female trolls added.

turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head

## Post 129525 by metakin — 2025-05-03T20:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129525#p129525 | page 8 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri May 02, 2025 6:44 pm**
> Patch-A:
>  Female Troll hairstyles now are not cycled anymore and 1 to 1 with default SD model. I didn't dig deep with this backport. Moved hip attachments closer to hips, moved back attachment backwards. Moved pauldrons forward, in previous backport they were a little to far behind the back. Fixed cringed head UVs, which didn't match to it's textures before. I spent some time on the model I talk about below, but not much with default HD one. So I may have bricked something hard. I checked the usual: Arcane Missiles still shoot, sound from emotes still plays like it should. But I didn't dig deep with testing.
>
>  Some of you may have picked cycled hairstyle for ftroll earlier, and because of that now you may find yourself with a cringe hairstyle you didn't select. Sorry.
>
>  I'll leave a link to previous patch-A version for now below the main one.
>
>  Patch-F:
>  Female trolls added.

i love u   turtle_in_love

## Post 129918 by Skilllikewall — 2025-05-06T20:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129918#p129918 | page 8 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri May 02, 2025 6:44 pm**
> Patch-A:
>  Female Troll hairstyles now are not cycled anymore and 1 to 1 with default SD model. I didn't dig deep with this backport. Moved hip attachments closer to hips, moved back attachment backwards. Moved pauldrons forward, in previous backport they were a little to far behind the back. Fixed cringed head UVs, which didn't match to it's textures before. I spent some time on the model I talk about below, but not much with default HD one. So I may have bricked something hard. I checked the usual: Arcane Missiles still shoot, sound from emotes still plays like it should. But I didn't dig deep with testing.
>
>  Some of you may have picked cycled hairstyle for ftroll earlier, and because of that now you may find yourself with a cringe hairstyle you didn't select. Sorry.
>
>  I'll leave a link to previous patch-A version for now below the main one.
>
>  Patch-F:
>  Female trolls added.

Thanks alot for your hard work!
Can you also update resource files?
And may i ask some tricks about booba weights or guide somewhere maybe?

## Post 129925 by Watchers3d (Barrens Chat Casualty) — 2025-05-06T21:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129925#p129925 | page 8 | era: pre-1.18.1 -->

Patch-A:
Giga small update. Fixed a couple of cringe texture glitches. Last upload May 6.

> **Skilllikewall wrote: Tue May 06, 2025 8:15 pm**
> Thanks alot for your hard work!
>  Can you also update resource files?
>  And may i ask some tricks about booba weights or guide somewhere maybe?

Thank you  smiling_turtle_head
Sure.

As far as A Little Extra goes my setups are very simple. This time I had to add a couple of bones. Ftrolls didn't have any. Previously I painted probably a little different weight values themselves, but when it's just a couple of bones in question it's not that different. WoW can understand only 4 groups per vertex and weights that add up to 1.0 for said vertex. So, before any painting I usually enable Accumulate (with Strength set to maybe something like 0.1-0.3), Mirror Vertex Groups (X), Topology Mirror and Auto Normalize in brush settings. Auto Normalize ensures groups add up to 1.0 weight-wise. Also with ftrolls specifically I locked every vertex group except "Chest" and 2 custom breast bone groups. This way weights, with auto normalize enabled, won't distribute to something that should not be affected. Arms for example can inherit some weights they don't need otherwise.

For Mirror to actually work I had to rotate the torso in edit mode I think by 90/-90, so it aligns with X and not Y, how WBS is currently setup. And afterwards I just rotated it back. A little cringe but no biggie. Also, since you're importing, find in the outliner and rename breast bones temporarily to the same name with ".L", ".R" suffixes respectively.

After all these shenanigans are done, I unlock every group but "Main", Select everything in Edit Mode - Mesh - Weights - Limit Total. Value of 4 is default and is correct. Some vertices can acquire 5+ groups during the process, even if Normalize was enabled when painting. That's because it only ensures that weights are add up to 1.0. But WoW still wouldn't understand 4+ groups per vertex, so it has to be cleaned up. As for this "locking of the "Main" vertex group" - as of today, I'm not even sure it's necessary. I just do it as some primordial ritual, because back in those days, only God knows what and how didn't work for whatever esoteric reason.

## Post 129933 by Necropheus — 2025-05-06T22:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129933#p129933 | page 8 | era: pre-1.18.1 -->

Okay so today i had time and inspiration to do some re-texturing specifically for the models in this mod. I thought i might as well share it here. I corrected the shadows which didnt align with the little extra models very well. I also removed all underwear and painted what is underneath.

Beware that some of these Textures get streched a LOT (f.e. the female Troll chest texture) which made it hard to get a somehow believable overall look. Also i only made the vanilla playable races and Textures - so no High Elves and none of the additional Options in Turtle's Character Creation.

i named the file Patch-Z but you can rename it so it doesnt interfere with your other mods. Just keep in Mind that his one needs the Patch-A + the Patch-F from this forum to work as intended.

Link:
[https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=sharing)

## Post 130568 by Slayerina — 2025-05-11T10:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130568#p130568 | page 8 | era: pre-1.18.1 -->

Still waiting for gnome =(

## Post 131243 by Skilllikewall — 2025-05-15T16:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131243#p131243 | page 8 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue May 06, 2025 9:30 pm**
> Patch-A:
>  Giga small update. Fixed a couple of cringe texture glitches. Last upload May 6.
>
>
> > **Skilllikewall wrote: Tue May 06, 2025 8:15 pm**
> > Thanks alot for your hard work!
> >  Can you also update resource files?
> >  And may i ask some tricks about booba weights or guide somewhere maybe?
>
>   Thank you  smiling_turtle_head
>  Sure.
>
>  As far as A Little Extra goes my setups are very simple. This time I had to add a couple of bones. Ftrolls didn't have any. Previously I painted probably a little different weight values themselves, but when it's just a couple of bones in question it's not that different. WoW can understand only 4 groups per vertex and weights that add up to 1.0 for said vertex. So, before any painting I usually enable Accumulate (with Strength set to maybe something like 0.1-0.3), Mirror Vertex Groups (X), Topology Mirror and Auto Normalize in brush settings. Auto Normalize ensures groups add up to 1.0 weight-wise. Also with ftrolls specifically I locked every vertex group except "Chest" and 2 custom breast bone groups. This way weights, with auto normalize enabled, won't distribute to something that should not be affected. Arms for example can inherit some weights they don't need otherwise.
>
>  For Mirror to actually work I had to rotate the torso in edit mode I think by 90/-90, so it aligns with X and not Y, how WBS is currently setup. And afterwards I just rotated it back. A little cringe but no biggie. Also, since you're importing, find in the outliner and rename breast bones temporarily to the same name with ".L", ".R" suffixes respectively.
>
>  After all these shenanigans are done, I unlock every group but "Main", Select everything in Edit Mode - Mesh - Weights - Limit Total. Value of 4 is default and is correct. Some vertices can acquire 5+ groups during the process, even if Normalize was enabled when painting. That's because it only ensures that weights are add up to 1.0. But WoW still wouldn't understand 4+ groups per vertex, so it has to be cleaned up. As for this "locking of the "Main" vertex group" - as of today, I'm not even sure it's necessary. I just do it as some primordial ritual, because back in those days, only God knows what and how didn't work for whatever esoteric reason.

Thanks alot! I will try this way to be a little bit closer to booba master haha)

## Post 131421 by kuantumm — 2025-05-16T14:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131421#p131421 | page 8 | era: pre-1.18.1 -->

> **Slayerina wrote: Sun May 11, 2025 10:20 am**
> Still waiting for gnome =(

Release the bubble butt gnomes!

## Post 131988 by Funkt4st1c3 — 2025-05-19T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131988#p131988 | page 8 | era: pre-1.18.1 -->

Begging for the rest of the races, Orcs and Tauren in particular.
Tauren just feel like they should have bigger "flanks"

## Post 132711 by MightyWalrus — 2025-05-23T18:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132711#p132711 | page 8 | era: pre-1.18.1 -->

Hi there! Awesome mod, literally dream came true.   turtle_in_love_head
For unknown reason I see some sort of stitches on my character model. Is there any way to fix that or everything is okay with my installation and I should leave it be?

## Post 132959 by Victorlob — 2025-05-25T17:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132959#p132959 | page 8 | era: pre-1.18.1 -->

Hello!

How about butt physics? It look very good! But, how i can see, it don't used in current update.

> **Watchers3d wrote: Thu Dec 14, 2023 12:01 am**
> Sharing a little footage of work in progress. First import and test of female human.
>
>
> [embed: //drive.google.com/file/d/1Amq3BfPv5U7Y2-npSgC2E00Th78d8rPl/preview]

And, how about face of night elves archers from WC3 Reforged?

> **Watchers3d wrote: Sat Dec 23, 2023 6:13 am**
> At first I've changed night elves face geometry. It's loosely based on Archer unit from Reforged version of Warcraft 3, but as of now I've scrapped the idea, because of helmets and stuff like that. Maybe I'll bring it back in with some changes, so helmets and people's favorite demon hunter eye wraps will fit it. Or maybe I wont.
>
>
> [embed: //drive.google.com/file/d/1xdWhnr5ExnPAb7BrN-9AQHWKlxCISfDr/preview]

I think, that it realy good idea!

## Post 133090 by Watchers3d (Barrens Chat Casualty) — 2025-05-26T17:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133090#p133090 | page 8 | era: pre-1.18.1 -->

> **MightyWalrus wrote: Fri May 23, 2025 6:27 pm**
> Hi there! Awesome mod, literally dream came true.   turtle_in_love_head
>  For unknown reason I see some sort of stitches on my character model. Is there any way to fix that or everything is okay with my installation and I should leave it be?

Greetings, MightyWalrus  smiling_turtle_head
Too little input data to identify the problem. Nobody mentioned it before. But I bet you encountered some badly interpolated armor texture that just got bricked on the UV edges because a guy who made it didn't understand the impact of bicubic downsampling.

> **Victorlob wrote: Sun May 25, 2025 5:33 pm**
> Hello!
>
>  How about butt physics? It look very good! But, how i can see, it don't used in current update.
>
>  And, how about face of night elves archers from WC3 Reforged?
>  I think, that it realy good idea!

Greetings, Victorlob  smiling_turtle_head
Deformations vary from model to model, but female humans are still like this even today, the major difference is just that geometry is more elaborate polygon count wise. Most interesting lower body deformation that one. By default without any follow-up changes. At least across the ones I looked into.

## Post 133091 by Springboards (Bug Report Enthusiast) — 2025-05-26T17:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133091#p133091 | page 8 | era: pre-1.18.1 -->

do tauren next

## Post 133095 by MightyWalrus — 2025-05-26T17:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133095#p133095 | page 8 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon May 26, 2025 5:06 pm**
> > **MightyWalrus wrote: Fri May 23, 2025 6:27 pm**
> > Hi there! Awesome mod, literally dream came true.   turtle_in_love_head
> >  For unknown reason I see some sort of stitches on my character model. Is there any way to fix that or everything is okay with my installation and I should leave it be?
>
>   Greetings, MightyWalrus  smiling_turtle_head
>  Too little input data to identify the problem. Nobody mentioned it before. But I bet you encountered some badly interpolated armor texture that just got bricked on the UV edges because a guy who made it didn't understand the impact of bicubic downsampling.
>
> > **Victorlob wrote: Sun May 25, 2025 5:33 pm**
> > Hello!
> >
> >  How about butt physics? It look very good! But, how i can see, it don't used in current update.
> >
> >  And, how about face of night elves archers from WC3 Reforged?
> >  I think, that it realy good idea!
>
>   Greetings, Victorlob  smiling_turtle_head
>  Deformations vary from model to model, but female humans are still like this even today, the major difference is just that geometry is more elaborate polygon count wise. Most interesting lower body deformation that one. By default without any follow-up changes. At least across the ones I looked into.

Oh, I see. So it isn't possible to fix from my end. Well if I don't zoom in too much it's okay. Yhanks for reply and good luck with further updates if you planned any   happy_turtle_head

## Post 133158 by Watchers3d (Barrens Chat Casualty) — 2025-05-27T07:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133158#p133158 | page 8 | era: pre-1.18.1 -->

> **MightyWalrus wrote: Mon May 26, 2025 5:53 pm**
> Oh, I see. So it isn't possible to fix from my end. Well if I don't zoom in too much it's okay. Yhanks for reply and good luck with further updates if you planned any   happy_turtle_head

If you want, you can share some screenshots and I'll try to recreate the results on my end. Max out your in-game graphics, enable vertex animation shaders if it's not on already, reload the game and take a screenshot when the problem occurs, as well as the same shot with patch-A enabled but patch-F disabled, and screenshot with both patches enabled but with different robe/chest armor equipped.

## Post 133175 by MightyWalrus — 2025-05-27T09:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133175#p133175 | page 8 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue May 27, 2025 7:22 am**
> > **MightyWalrus wrote: Mon May 26, 2025 5:53 pm**
> > Oh, I see. So it isn't possible to fix from my end. Well if I don't zoom in too much it's okay. Yhanks for reply and good luck with further updates if you planned any   happy_turtle_head
>
>   If you want, you can share some screenshots and I'll try to recreate the results on my end. Max out your in-game graphics, enable vertex animation shaders if it's not on already, reload the game and take a screenshot when the problem occurs, as well as the same shot with patch-A enabled but patch-F disabled, and screenshot with both patches enabled but with different robe/chest armor equipped.

Okay then. As soon as I find cloth chest I'll send you screenshots. By the way how do I enable vertex animation shaders? Also I play with highest graphics settings and with all MPQs, HD patch, bikini mod and your mod

## Post 133178 by Watchers3d (Barrens Chat Casualty) — 2025-05-27T10:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133178#p133178 | page 8 | era: pre-1.18.1 -->

> **MightyWalrus wrote: Tue May 27, 2025 9:49 am**
> By the way how do I enable vertex animation shaders?

Esc while logged in > Video Options > "Vertex Animation Shaders" checkmark under "Shaders" category.
Log out completely, delete WDB folder (not WTF) from general WoW client folder and boot the game up again.

## Post 133403 by ToTwow — 2025-05-29T02:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133403#p133403 | page 8 | era: pre-1.18.1 -->

Hi, I love your work and would like, for example, to change the hair of a blood elf to a void elf.

My problem is that, for example, when I finish using wbs, m2mod doesn't let me change the file from m2i to m2 using the v3 files you uploaded via Google Drive.

You're probably busy. If you have time to reply, that would be great.

## Post 133517 by Necropheus — 2025-05-29T15:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133517#p133517 | page 8 | era: pre-1.18.1 -->

I continued tweaking Textures for your Models and wanted to share 2 Issues i have with the Troll-Model which maybe can be solved on your side.

Issue 1:

The texture on the chest is stretched unevenly, so that a few pixels in the center cover a large area, while the surrounding pixels cover very little. Unfortunately, this is noticeable not only on the skin textures but also on almost all chest armor pieces. Is it possible to correct the texture stretching in the model so that, for example, the surrounding pixels are moved more toward the center, causing the central pixels to cover less area?

![Image](https://i.ibb.co/4g2QK454/Bildschirmfoto-20250529-165207.png)

Issue 2:

On the outer underside of the chest, there is an open gap that, on the one hand, doesn’t look aesthetically pleasing and, on the other hand, also causes parts of the texture to disappear.

![Image](https://i.ibb.co/6RzsstYG/Bildschirmfoto-20250529-165249.png)

## Post 133552 by Brokthul — 2025-05-29T19:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133552#p133552 | page 8 | era: pre-1.18.1 -->

Hi watcher, i think i found a minor problem in the high elf model, i dont know how to share an image here but for now i can describe it, there are some lines in the neck, arms, pelvis, legs and torso area that tend to show in a medium and close range of the camera when theres no shadows they are black and when theres shadows they are white and go through the model, is there any way to fix it?

## Post 133578 by Watchers3d (Barrens Chat Casualty) — 2025-05-30T01:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133578#p133578 | page 8 | era: pre-1.18.1 -->

> **ToTwow wrote: Thu May 29, 2025 2:30 am**
> Hi, I love your work and would like, for example, to change the hair of a blood elf to a void elf.
>
>  My problem is that, for example, when I finish using wbs, m2mod doesn't let me change the file from m2i to m2 using the v3 files you uploaded via Google Drive.
>
>  You're probably busy. If you have time to reply, that would be great.

Greetings  smiling_turtle_head
m2mod has it's own Blender addon. The one in this topic is for version 2.91. It's m2mod addon that needs m2i, not WBS. WBS for now works with 3.4.1 - and it's in here you feed WotLK format m2. I don't have Legion client on hand right now, so I cannot test. Aren't we able to backport Legion model straight away to WotLK with multiconverter? If you have this Legion model, just try to backport it right away, import the result to WBS and edit it/take objects right away. I posted recently it's version free of polygon limit. Scroll through WoW Modding Community discord, too. Maybe they already have void elves backported to WotLK. Although I'm not sure.

> **Necropheus wrote: Thu May 29, 2025 3:09 pm**
> I continued tweaking Textures for your Models and wanted to share 2 Issues i have with the Troll-Model which maybe can be solved on your side.

Greetings, Necropheus  smiling_turtle_head
Download new version maybe it will be sufficient.

> **Brokthul wrote: Thu May 29, 2025 7:56 pm**
> Hi watcher, i think i found a minor problem in the high elf model, i dont know how to share an image here but for now i can describe it, there are some lines in the neck, arms, pelvis, legs and torso area that tend to show in a medium and close range of the camera when theres no shadows they are black and when theres shadows they are white and go through the model, is there any way to fix it?

Greetings, Brokthul  smiling_turtle_head
Yeah, another player mentioned this not too long ago. What you see is separation between disjointed geometry - as it should be, although without any gaps between them. But I've tried and cannot recreate this in my client. Too little input data to figure it out and more is needed. My best bet is you encountered some badly interpolated armor texture that just got bricked on the UV edges because a guy who made it didn't understand the impact of bicubic downsampling.
Weights are clean last time I checked, and normals are too.

## Post 133586 by Brokthul — 2025-05-30T02:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133586#p133586 | page 8 | era: pre-1.18.1 -->

![Image](https://ibb.co/WN3G8Kgh)

<https://ibb.co/WN3G8Kgh>

this is the only way i found out how to upload images here, anyways those are the lines and they show even if the character is using armor or not

## Post 133605 by ToTwow — 2025-05-30T07:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133605#p133605 | page 8 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri May 30, 2025 1:15 am**
> > **ToTwow wrote: Thu May 29, 2025 2:30 am**
> > Hi, I love your work and would like, for example, to change the hair of a blood elf to a void elf.
> >
> >  My problem is that, for example, when I finish using wbs, m2mod doesn't let me change the file from m2i to m2 using the v3 files you uploaded via Google Drive.
> >
> >  You're probably busy. If you have time to reply, that would be great.
>
>   Greetings  smiling_turtle_head
>  m2mod has it's own Blender addon. The one in this topic is for version 2.91. It's m2mod addon that needs m2i, not WBS. WBS for now works with 3.4.1 - and it's in here you feed WotLK format m2. I don't have Legion client on hand right now, so I cannot test. Aren't we able to backport Legion model straight away to WotLK with multiconverter? If you have this Legion model, just try to backport it right away, import the result to WBS and edit it/take objects right away. I posted recently it's version free of polygon limit. Scroll through WoW Modding Community discord, too. Maybe they already have void elves backported to WotLK. Although I'm not sure.

I haven't found almost anything about void elves on that discord and I wanted to have the model you uploaded with the void elves' hair, I tried to use the plugin you uploaded and it's only compatible with 2.79 and it still doesn't let me change from m2i to m2 and it's very difficult to find tutorials about it, I've been at this for 1 week now T_T

I don't understand how to make m2mod let me import your model from m2i to m2 t-t

I found a void elf model for wotlk, but if I try to load it into wbs I get an error:

Importing animations.
Traceback (most recent call last):
File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\ui\operators.py", line 317, in execute
import_m2(int(context.scene.wow_scene.version), self.filepath, True, time_import_method)
File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\import_m2.py", line 123, in import_m2
bl_m2.load_animations()
File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 955, in load_animations
self._bl_create_fcurves(action, bone.name, partial(bl_convert_rot_track), 4,
File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 714, in _bl_create_fcurves
t_fcurves = [action.fcurves.new(data_path=data_path, index=k, action_group=action_group)
File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 714, in <listcomp>
t_fcurves = [action.fcurves.new(data_path=data_path, index=k, action_group=action_group)
RuntimeError: Error: F-Curve 'pose.bones["Head"].rotation_quaternion[0]' already exists in action '000_Stand_(0)'

## Post 133658 by Watchers3d (Barrens Chat Casualty) — 2025-05-30T13:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133658#p133658 | page 8 | era: pre-1.18.1 -->

> **ToTwow wrote: Fri May 30, 2025 7:00 am**
> > **Watchers3d wrote: Fri May 30, 2025 1:15 am**
> > Greetings  smiling_turtle_head
> >  m2mod has it's own Blender addon. The one in this topic is for version 2.91. It's m2mod addon that needs m2i, not WBS. WBS for now works with 3.4.1 - and it's in here you feed WotLK format m2. I don't have Legion client on hand right now, so I cannot test. Aren't we able to backport Legion model straight away to WotLK with multiconverter? If you have this Legion model, just try to backport it right away, import the result to WBS and edit it/take objects right away. I posted recently it's version free of polygon limit. Scroll through WoW Modding Community discord, too. Maybe they already have void elves backported to WotLK. Although I'm not sure.
>
>   I haven't found almost anything about void elves on that discord and I wanted to have the model you uploaded with the void elves' hair, I tried to use the plugin you uploaded and it's only compatible with 2.79 and it still doesn't let me change from m2i to m2 and it's very difficult to find tutorials about it, I've been at this for 1 week now T_T
>
>  I don't understand how to make m2mod let me import your model from m2i to m2 t-t
>
>
>  I found a void elf model for wotlk, but if I try to load it into wbs I get an error:
>  Importing animations.
>  Traceback (most recent call last):
>  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\ui\operators.py", line 317, in execute
>  import_m2(int(context.scene.wow_scene.version), self.filepath, True, time_import_method)
>  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\import_m2.py", line 123, in import_m2
>  bl_m2.load_animations()
>  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 955, in load_animations
>  self._bl_create_fcurves(action, bone.name, partial(bl_convert_rot_track), 4,
>  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 714, in _bl_create_fcurves
>  t_fcurves = [action.fcurves.new(data_path=data_path, index=k, action_group=action_group)
>  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 714, in <listcomp>
>  t_fcurves = [action.fcurves.new(data_path=data_path, index=k, action_group=action_group)
>  RuntimeError: Error: F-Curve 'pose.bones["Head"].rotation_quaternion[0]' already exists in action '000_Stand_(0)'

The purpose of a Little Extra resource archive is to import to WBS straight away. What you're trying to achieve could be done with WBS solely. WBS eats WotLK type m2's and spits them back on export.
While m2mod is generating a m2i file, and this file afterwards can be imported to Blender with m2mod blender addon. In your case, m2mod from this topic can help you to get rid off geometry that would exceed 21845 polygon limit, ***before*** backporting the model to WotLK. But there's no need to do that, because you can backport to WotLK without polygon limit right away. If you have Legion client, export void elf model from it and backport it afterwards to import to WBS.

In other words, don't try to feed WotLK m2s to m2mod 9.0.0. It's purpose is different. And you don't need it pretty much.

## Post 133691 by ToTwow — 2025-05-30T16:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133691#p133691 | page 8 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri May 30, 2025 1:39 pm**
> > **ToTwow wrote: Fri May 30, 2025 7:00 am**
> > > **Watchers3d wrote: Fri May 30, 2025 1:15 am**
> > > Greetings  smiling_turtle_head
> > >  m2mod has it's own Blender addon. The one in this topic is for version 2.91. It's m2mod addon that needs m2i, not WBS. WBS for now works with 3.4.1 - and it's in here you feed WotLK format m2. I don't have Legion client on hand right now, so I cannot test. Aren't we able to backport Legion model straight away to WotLK with multiconverter? If you have this Legion model, just try to backport it right away, import the result to WBS and edit it/take objects right away. I posted recently it's version free of polygon limit. Scroll through WoW Modding Community discord, too. Maybe they already have void elves backported to WotLK. Although I'm not sure.
> >
> >   I haven't found almost anything about void elves on that discord and I wanted to have the model you uploaded with the void elves' hair, I tried to use the plugin you uploaded and it's only compatible with 2.79 and it still doesn't let me change from m2i to m2 and it's very difficult to find tutorials about it, I've been at this for 1 week now T_T
> >
> >  I don't understand how to make m2mod let me import your model from m2i to m2 t-t
> >
> >
> >  I found a void elf model for wotlk, but if I try to load it into wbs I get an error:
> >  Importing animations.
> >  Traceback (most recent call last):
> >  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\ui\operators.py", line 317, in execute
> >  import_m2(int(context.scene.wow_scene.version), self.filepath, True, time_import_method)
> >  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\import_m2.py", line 123, in import_m2
> >  bl_m2.load_animations()
> >  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 955, in load_animations
> >  self._bl_create_fcurves(action, bone.name, partial(bl_convert_rot_track), 4,
> >  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 714, in _bl_create_fcurves
> >  t_fcurves = [action.fcurves.new(data_path=data_path, index=k, action_group=action_group)
> >  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 714, in <listcomp>
> >  t_fcurves = [action.fcurves.new(data_path=data_path, index=k, action_group=action_group)
> >  RuntimeError: Error: F-Curve 'pose.bones["Head"].rotation_quaternion[0]' already exists in action '000_Stand_(0)'
>
>   The purpose of a Little Extra resource archive is to import to WBS straight away. What you're trying to achieve could be done with WBS solely. WBS eats WotLK type m2's and spits them back on export.
>  While m2mod is generating a m2i file, and this file afterwards can be imported to Blender with m2mod blender addon. In your case, m2mod from this topic can help you to get rid off geometry that would exceed 21845 polygon limit, ***before*** backporting the model to WotLK. But there's no need to do that, because you can backport to WotLK without polygon limit right away. If you have Legion client, export void elf model from it and backport it afterwards to import to WBS.
>
>  In other words, don't try to feed WotLK m2s to m2mod 9.0.0. It's purpose is different. And you don't need it pretty much.

Let's see, I unzip the Legion client and go to the voidelf folder, put the files in MultiConverter, and then try to import it into wbs, but I get an error:

Import events.
Traceback (most recent call last):
File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\ui\operators.py", line 317, in execute
import_m2(int(context.scene.wow_scene.version), self.filepath, True, time_import_method)
File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\import_m2.py", line 132, in import_m2
bl_m2.load_events()
File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 1418, in load_events
bone = self.m2.root.bones[event.bone]
File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\pywowlib\file_formats\wow_common_types.py", line 300, in __getitem__
return self.values[item]
IndexError: list index out of range

I don't know if it's normal

A few hours ago I tried your files and I was able to import and export them without any problems in wbs

I have the latest version of wbs just in case or at least the one posted on discord.

## Post 133721 by LordEnorme — 2025-05-31T02:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133721#p133721 | page 8 | era: pre-1.18.1 -->

I really want the undead females

## Post 133801 by Watchers3d (Barrens Chat Casualty) — 2025-05-31T18:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133801#p133801 | page 8 | era: pre-1.18.1 -->

> **ToTwow wrote: Fri May 30, 2025 4:09 pm**
> Let's see, I unzip the Legion client and go to the voidelf folder, put the files in MultiConverter, and then try to import it into wbs, but I get an error:
>
>  Import events. Traceback (most recent call last):
>  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\ui\operators.py", line 317, in execute
>  import_m2(int(context.scene.wow_scene.version), self.filepath, True, time_import_method)
>  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\import_m2.py", line 132, in import_m2
>  bl_m2.load_events()
>  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\m2\m2_scene.py", line 1418, in load_events
>  bone = self.m2.root.bones[event.bone]
>  File "C:\Users\david\AppData\Roaming\Blender Foundation\Blender\3.4\scripts\addons\io_scene_wmo\pywowlib\file_formats\wow_common_types.py", line 300, in __getitem__
>  return self.values[item]
>  IndexError: list index out of range
>
>
>   I don't know if it's normal
>
>  A few hours ago I tried your files and I was able to import and export them without any problems in wbs
>
>  I have the latest version of wbs just in case or at least the one posted on discord.

Oh Void Elves probably came around when skel was around, too. I haven't had to deal with skel in a long time. You can either read about merging skel, maybe there's something new people come up with, or
m2mod got you to access weighted geometry, right? A rig, too? Just compare hair bones between both rigs and rename vertex groups for most complicated hairstyle, or a couple of them - it will cover most if not all groups. And rename the rest of hairstyles vertex groups with a simple python script. Append geometry the normal way through Blender to WBS scene. Don't forget about materials, geoset IDs/groups and all that in WBS.
Code: Select all

```
import bpy

# Select object(s) first before running the script
mapping = {
"oldname1": "newname1",
"oldname2": "newname2",
"oldname3": "newname3",
"oldname4": "newname4"
}

for obj in bpy.context.selected_objects:
if obj.type == 'MESH':
for vg in obj.vertex_groups:
if vg.name in mapping:
vg.name = mapping[vg.name]
```

## Post 133821 by clozer — 2025-06-01T03:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133821#p133821 | page 8 | era: pre-1.18.1 -->

amazing job :) ,I am excited to see if you modify the other races

## Post 133909 by Necropheus — 2025-06-01T20:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133909#p133909 | page 8 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri May 30, 2025 1:15 am**
> > **Necropheus wrote: Thu May 29, 2025 3:09 pm**
> > I continued tweaking Textures for your Models and wanted to share 2 Issues i have with the Troll-Model which maybe can be solved on your side.
>
>   Greetings, Necropheus  smiling_turtle_head
>  Download new version maybe it will be sufficient.

Hey man!

That helped a LOT, thank you! Just updated the Textures and replaced the File in my Drive i already shared before:

[https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)

If there are coming any more Models by you I am motivated to do these Textures as well.

PS: Any Feedback appreciated

## Post 134111 by Cyberwill — 2025-06-03T16:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134111#p134111 | page 8 | era: pre-1.18.1 -->

Excellent work. Could we have a version where only the characters' chests are modified, keeping the original model from the waist down? Thanks.

## Post 134160 by Watchers3d (Barrens Chat Casualty) — 2025-06-03T22:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134160#p134160 | page 9 | era: pre-1.18.1 -->

> **Necropheus wrote: Sun Jun 01, 2025 8:27 pm**
> Hey man!
>
>  That helped a LOT, thank you! Just updated the Textures and replaced the File in my Drive i already shared before:
>
>  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)
>
>  If there are coming any more Models by you I am motivated to do these Textures as well.
>
>  PS: Any Feedback appreciated

Great  smiling_turtle_head
Can I embed the link to in the topic header?

I heard that Turtle is using this patch-z name as a translation patch for non-English clients. So people encounter some kind of problems when using other things named as patch-z, booting up the game through the client, although I'm not sure. Can you rename it to something else by default?

## Post 134316 by Necropheus — 2025-06-04T22:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134316#p134316 | page 9 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Jun 03, 2025 10:32 pm**
> Great  smiling_turtle_head
>  Can I embed the link to in the topic header?
>
>  I heard that Turtle is using this patch-z name as a translation patch for non-English clients. So people encounter some kind of problems when using other things named as patch-z, booting up the game through the client, although I'm not sure. Can you rename it to something else by default?

Of course you can! I Changed the Name to Patch-U!

> **Cyberwill wrote: Tue Jun 03, 2025 4:15 pm**
> Excellent work. Could we have a version where only the characters' chests are modified, keeping the original model from the waist down? Thanks.

Done! There is now a Folder in the Drive-Link with your preferred Version

## Post 134323 by Cyberwill — 2025-06-05T00:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134323#p134323 | page 9 | era: pre-1.18.1 -->

Thanks Necropheous, but i was talking about the Model editing one XD. I like the boobs improvement, but i don't like the big asses. I would like to have only the top improvements :c

## Post 134503 by Cyberwill — 2025-06-06T12:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134503#p134503 | page 9 | era: pre-1.18.1 -->

Watchers3d, Could we have a version where only the characters' chests are modified, keeping the original model from the waist down? My friends and i love the chest improvement but we don't like the big asses XD. Thanks!

## Post 134559 by Necropheus — 2025-06-06T18:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134559#p134559 | page 9 | era: pre-1.18.1 -->

Just updated the Textures again. Now all Turtle exclusive Skintones are included as well. Oh, and i added High elves! So for now my Patch is finished until there are more little extra Models.

Have fun! Same Link as usual:

[https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)

## Post 135743 by Jarlander21 — 2025-06-15T05:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135743#p135743 | page 9 | era: pre-1.18.1 -->

Apologies in advance for the question but I cant seem to get the chest only Patch U to work. Im not sure if Im doing it wrong or not. I have tried both Patch U files in the link, and had them in there with the Patch A and Patch F. I can only get the chest and bottoms enhanced.

## Post 135835 by Necropheus — 2025-06-15T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135835#p135835 | page 9 | era: pre-1.18.1 -->

> **Jarlander21 wrote: Sun Jun 15, 2025 5:30 am**
> Apologies in advance for the question but I cant seem to get the chest only Patch U to work. Im not sure if Im doing it wrong or not. I have tried both Patch U files in the link, and had them in there with the Patch A and Patch F. I can only get the chest and bottoms enhanced.

Hey! I just tested it and everything seems to be fine. Make sure to use the Patch-U from the topless-folder.

## Post 136103 by Jarlander21 — 2025-06-17T21:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136103#p136103 | page 9 | era: pre-1.18.1 -->

Hmm interesting. Ya I am using that Patch - U from the folder. Redownloaded everything. Along with Patch A and Patch F I redownloaded and put in the folder again. I dont really see a difference whether Patch U is in there or not. The lower half still looks same.

## Post 136122 by Torek22 — 2025-06-18T02:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136122#p136122 | page 9 | era: pre-1.18.1 -->

Is it possible to use this patches on a WTLK client?

## Post 136130 by Ruwall — 2025-06-18T06:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136130#p136130 | page 9 | era: pre-1.18.1 -->

After almost Ah year, I decide re-install turtle wow, and of course, come to my most trusty mod, and from what I read, you working in add female trolls? Beceaus, wow, that would be fantastic, honestly one of, and probably the best lady's around, they give full latina vibe and being latino itself, man, is all comming together~

## Post 136203 by Deezhugs — 2025-06-18T17:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136203#p136203 | page 9 | era: pre-1.18.1 -->

I've noticed some people were asking for a less thicc version, and since I've done one for myself I figured I'd share. I just picked up Blender a week ago as a fun project, so it's doubtlessly a hackjob, but eh, good enough for me. Contains all races except Troll.

Edit2: I fixed the filesize, should be fine now.

[https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1YBT0JvcE_k9BkzyVKSM4D94IVKQ1IAII?usp=sharing)

## Post 136210 by Bittermens (Barrens Chat Casualty) — 2025-06-18T18:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136210#p136210 | page 9 | era: pre-1.18.1 -->

> **Torek22 wrote: Wed Jun 18, 2025 2:49 am**
> Is it possible to use this patches on a WTLK client?

needs to be patched to work with, mainly because of the helf model being belf

## Post 136230 by Watchers3d (Barrens Chat Casualty) — 2025-06-18T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136230#p136230 | page 9 | era: pre-1.18.1 -->

> **Cyberwill wrote: Tue Jun 03, 2025 4:15 pm**
> Excellent work. Could we have a version where only the characters' chests are modified, keeping the original model from the waist down? Thanks.

Greetings, Cyberwill  smiling_turtle_head .

I cannot sustain variations unfortunately. The effort would be immense. This mod never had any. By me at least.

> **Torek22 wrote: Wed Jun 18, 2025 2:49 am**
> Is it possible to use this patches on a WTLK client?

Greetings, Torek  smiling_turtle_head .

No, not out of the box. A little extra story by now is a bit convoluted. It was possible for vanilla version of the game because of the same polygon limits, as for WotLK client, but much lesser geometry in the models in general: less hairstyles, armor and so on. ~Half a year ago Turtle introduced WotLK hairstyles, as well as custom hairstyles, and now we have to cycle through original geometry for the most characters. They did add hairstyles, but no capes or armor. That's why it's still manageable. Besides, WotLK version of the client already has solid mods.

> **Ruwall wrote: Wed Jun 18, 2025 6:24 am**
> After almost Ah year, I decide re-install turtle wow, and of course, come to my most trusty mod, and from what I read, you working in add female trolls? Beceaus, wow, that would be fantastic, honestly one of, and probably the best lady's around, they give full latina vibe and being latino itself, man, is all comming together~

Greetings, Ruwall  smiling_turtle_head .

FTrolls are around already for quite a while.

## Post 136246 by Bittermens (Barrens Chat Casualty) — 2025-06-19T03:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136246#p136246 | page 9 | era: pre-1.18.1 -->

> **Watchers3d wrote: Wed Jun 18, 2025 11:01 pm**
> > **Cyberwill wrote: Tue Jun 03, 2025 4:15 pm**
> > Excellent work. Could we have a version where only the characters' chests are modified, keeping the original model from the waist down? Thanks.
>
>   Greetings, Cyberwill  smiling_turtle_head .
>
>  I cannot sustain variations unfortunately. The effort would be immense. This mod never had any. By me at least.
>
> > **Torek22 wrote: Wed Jun 18, 2025 2:49 am**
> > Is it possible to use this patches on a WTLK client?
>
>   Greetings, Torek  smiling_turtle_head .
>
>  No, not out of the box. A little extra story by now is a bit convoluted. It was possible for vanilla version of the game because of the same polygon limits, as for WotLK client, but much lesser geometry in the models in general: less hairstyles, armor and so on. ~Half a year ago Turtle introduced WotLK hairstyles, as well as custom hairstyles, and now we have to cycle through original geometry for the most characters. They did add hairstyles, but no capes or armor. That's why it's still manageable. Besides, WotLK version of the client already has solid mods.
>
> > **Ruwall wrote: Wed Jun 18, 2025 6:24 am**
> > After almost Ah year, I decide re-install turtle wow, and of course, come to my most trusty mod, and from what I read, you working in add female trolls? Beceaus, wow, that would be fantastic, honestly one of, and probably the best lady's around, they give full latina vibe and being latino itself, man, is all comming together~
>
>   Greetings, Ruwall  smiling_turtle_head .
>
>  FTrolls are around already for quite a while.

Tell that to darknest(i unironically lurk there) because all wrath mods are gone and the admin hates pservers, and yours is the one that is still alive and in need of a port, and people at the A&E are waiting for it or you find someone of trust to help with that part.

## Post 136297 by Servo — 2025-06-19T17:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136297#p136297 | page 9 | era: pre-1.18.1 -->

> **Bittermens wrote: Thu Jun 19, 2025 3:49 am**
> Tell that to darknest [...]

Modding on Darknest is dead, nearly nobody is posting anything new there and most of the old links are no longer working. Everyone moved to the Arctium Club Discord because the Arctium App is now required for modding retail WoW.

There is also a Chinese guy there which brings WoW modding to a new level: He was able to add boob/but physics and he had a recent breakthrough for adding new animations (like animations made for Sykrim).

## Post 136315 by MadafakinRio — 2025-06-19T21:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136315#p136315 | page 9 | era: pre-1.18.1 -->

> **Servo wrote: Thu Jun 19, 2025 5:29 pm**
> There is also a Chinese guy there which brings WoW modding to a new level: He was able to add boob/but physics and he had a recent breakthrough for adding new animations (like animations made for Sykrim).

You can't just say this and not give a name or link.

## Post 136362 by Servo — 2025-06-20T07:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136362#p136362 | page 9 | era: pre-1.18.1 -->

> **MadafakinRio wrote: Thu Jun 19, 2025 9:07 pm**
> You can't just say this and not give a name or link.

Go to <https://arctium.io/> (there are 2 discord links) and join the Arctium Club (18+) discord (that's where the modding stuff is happening). The chinese guy there is called wenruyitiaogou. Also other modders started adding physics.

## Post 136430 by Felixula — 2025-06-20T17:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136430#p136430 | page 9 | era: pre-1.18.1 -->

> **Servo wrote: Fri Jun 20, 2025 7:07 am**
> > **MadafakinRio wrote: Thu Jun 19, 2025 9:07 pm**
> > You can't just say this and not give a name or link.
>
>   Go to <https://arctium.io/> (there are 2 discord links) and join the Arctium Club (18+) discord (that's where the modding stuff is happening). The chinese guy there is called wenruyitiaogou. Also other modders started adding physics.

I wonder if UE client will support those to work on Turtle too somehow. I literally made whole pack of custom 4k textures for Alliance races just to crash into 1.12 limit of textures resolution. Not to mention physics and models polygons, this page is already 7th Wonder for 1.12 old ass.

## Post 136529 by Bittermens (Barrens Chat Casualty) — 2025-06-21T14:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136529#p136529 | page 9 | era: pre-1.18.1 -->

> **Servo wrote: Fri Jun 20, 2025 7:07 am**
> > **MadafakinRio wrote: Thu Jun 19, 2025 9:07 pm**
> > You can't just say this and not give a name or link.
>
>   Go to <https://arctium.io/> (there are 2 discord links) and join the Arctium Club (18+) discord (that's where the modding stuff is happening). The chinese guy there is called wenruyitiaogou. Also other modders started adding physics.

just a reminder, this will never work on this shitty vanilla client
All modding is focused on retail, legion or Wrath clients

## Post 136566 by Vellerophontis — 2025-06-21T21:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136566#p136566 | page 9 | era: pre-1.18.1 -->

Great work! *I am a bit surprised that you didnt include undead on the latest patch though. I thought you were working on them and that they would come earlier than trolls.*

Anyways, Keep up the good work!

## Post 137445 by Cyberwill — 2025-06-29T19:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137445#p137445 | page 9 | era: pre-1.18.1 -->

> **Deezhugs wrote: Wed Jun 18, 2025 5:14 pm**
> I've noticed some people were asking for a less thicc version, and since I've done one for myself I figured I'd share. I just picked up Blender a week ago as a fun project, so it's doubtlessly a hackjob, but eh, good enough for me. Contains all races except Troll.
>
>  Edit2: I fixed the filesize, should be fine now.
>
>  [https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1YBT0JvcE_k9BkzyVKSM4D94IVKQ1IAII?usp=sharing)

I can't tell the difference with the other Patch-F. I see the same models :/

Edit:
Okay, I've taken a closer look at both models and now I can see the differences. Thanks.

If you could be so kind as to tell me how to import and modify it in Blender, I'd be very grateful, as I can't find any tutorials or sites that explain it in a way I can understand. Thanks again Deezhugs.

Edit2:
I find some high elves women animations brokens. The dance one and when the roge goes stealth walking is broken too.

*Last edited by Cyberwill on Thu Jul 03, 2025 9:16 am, edited 2 times in total.*

## Post 137901 by Narja — 2025-07-03T00:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137901#p137901 | page 9 | era: pre-1.18.1 -->

Added some to the dwarves.
[https://drive.google.com/file/d/1-jfXLT ... sp=sharing](https://drive.google.com/file/d/1-jfXLTUcQXrelMM5tMIRJTnL0bz6n_rm/view?usp=sharing)
I may have broken something with the uvs and the topology is a mess, but it works.
Reduced the jawline a little bit.
Could not export the model from turtle wow mpq, so i grabed one from a wotlk hd models.

## Post 138002 by metakin — 2025-07-04T01:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138002#p138002 | page 9 | era: pre-1.18.1 -->

They are huge!!! XD

## Post 138073 by Bahamutxd (Barrens Chat Casualty) — 2025-07-04T13:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138073#p138073 | page 9 | era: pre-1.18.1 -->

Its a bit too much lol - also they are floating

Are they lore accurate and made out of rock?

## Post 138075 by RPGnerd (Barrens Chat Casualty) — 2025-07-04T14:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138075#p138075 | page 9 | era: pre-1.18.1 -->

> **Narja wrote: Thu Jul 03, 2025 12:26 am**
> Added some to the dwarves.
>  [https://drive.google.com/file/d/1-jfXLT ... sp=sharing](https://drive.google.com/file/d/1-jfXLTUcQXrelMM5tMIRJTnL0bz6n_rm/view?usp=sharing)
>  I may have broken something with the uvs and the topology is a mess, but it works.
>  Reduced the jawline a little bit.
>  Could not export the model from turtle wow mpq, so i grabed one from a wotlk hd models.

Good job, you're on the right track.

Personally, I don't think there's anything wrong with the Dwarf female's face or body — just accentuating the breasts and butt would make it perfect.

## Post 138370 by Deezhugs — 2025-07-07T16:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138370#p138370 | page 9 | era: pre-1.18.1 -->

> **Cyberwill wrote: Sun Jun 29, 2025 7:13 pm**
> I can't tell the difference with the other Patch-F. I see the same models :/
>
>  Edit:
>  Okay, I've taken a closer look at both models and now I can see the differences. Thanks.
>
>  If you could be so kind as to tell me how to import and modify it in Blender, I'd be very grateful, as I can't find any tutorials or sites that explain it in a way I can understand. Thanks again Deezhugs.
>
>  Edit2:
>  I find some high elves women animations brokens. The dance one and when the roge goes stealth walking is broken too.

Hi, I'll take a look at the broken anims, I haven't noticed that before. I guess the bones got wonky, like with the sheathing animation? Human sheathing animation is borked as well, but I can fix that one.

A quick guide how to set up blender:

 1. You need Blender version 3.4.1
 2. You need WotLK Client version 3.3.5a. See ChromieCraft.
 3. You need WoW Blender Studio.
 4. You need WoW Model Viewer.
 5. Go into Blender, Edit, Preferences, Add-ons, click Install in the top right. Install WoW Blender Studio. It will show up in Community Add-ons.
 6. In the Add-ons Menu, open Wow Blender Studio. Inside you need to specify WotLK client path. This is the game version in which the models are being worked, and why you need the WotLK client.
 7. You need to set Import Method as WMV and set a path to the WoW Model Viewer .exe file
 8. Still in WoW Blender Studio, you need to specify the path to Cache and Project folder. You need to create those folders somewhere, I recommend keeping everything in a modding folder to keep things tidy, you will need it later.
 9. Now comes importing. Since we are working on WotLK client, you can't import vanilla .m2 files. You need either .blend project files, or WotLK .m2 files. The source file provided by Watcher are WotLK m2.
 10. If you want to import them, in Blender go to File, Import, WoW m2. Remember to delete the default cube and it's camera and light before/after importing.
 11. You can now work on the model.
 12. Once you're done, you can either save it as a blender project file (.blend) which will allow you to come back and edit it later, or you can export it to use it in the game.
 13. To export, go to File, Export, WoW m2. This will create a WotLK m2 file in your specified Project folder.
 14. You must now convert the WotLK m2 into a vanilla m2. You use the jm2converter for that -- Watcher's OP has the instructions how to do that. Create a separate output folder to keep things tidy.
 15. You must now put your altered model into an MPQ file which can be read by the game. Download MPQ Editor.
 16. Once you have it, create a copy of the patch file you want to modify -- Patch F -- and open it in the MPQ editor.
 17. Navigate to the race/sex folder you're modifying. Replace the existing model file with the one you've edited, for example for humans it will "humanfemale.m2".
 18. Don't forget to compress the file, like I did. :)
 19. Put it into TWoW data folder. Your edits are now in game!

## Post 138381 by Watchers3d (Barrens Chat Casualty) — 2025-07-07T18:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138381#p138381 | page 9 | era: pre-1.18.1 -->

> **Deezhugs wrote: Mon Jul 07, 2025 4:50 pm**
> Hi, I'll take a look at the broken anims, I haven't noticed that before.

Sometimes WBS is botching animation length on export. In this case, with a high elf model,
Manually set animation 140 (dance) length to 7234
Manually set animation 22 (stealthwalk) length 1000

Use 010 Editor to achieve this. Template to read m2 files by Alastor goes with it by default. Open m2 in question via 010 editor and run template.

## Post 138392 by Deezhugs — 2025-07-07T21:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138392#p138392 | page 9 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Jul 07, 2025 6:09 pm**
> > **Deezhugs wrote: Mon Jul 07, 2025 4:50 pm**
> > Hi, I'll take a look at the broken anims, I haven't noticed that before.
>
>   Sometimes WBS is botching animation length on export. In this case, with a high elf model,
>  Manually set animation 140 (dance) length to 7234
>  Manually set animation 22 (stealthwalk) length 1000
>
>  Use 010 Editor to achieve this. Template to read m2 files by Alastor goes with it by default. Open m2 in question via 010 editor and run template.

It worked like a charm, thank you!

> **Cyberwill wrote: Sun Jun 29, 2025 7:13 pm**
> snip

I have uploaded a new version with the animations fixed. This version looks a bit different than the one before as I have iterated on the models in the meantime, I also tried to make Nelf faces smoother and closer to vanilla's style.

[https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1YBT0JvcE_k9BkzyVKSM4D94IVKQ1IAII?usp=drive_link)

## Post 138424 by Volkyte (Patch Note Conspiracy Theorist) — 2025-07-08T10:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138424#p138424 | page 9 | era: pre-1.18.1 -->

> **Deezhugs wrote: Mon Jul 07, 2025 9:45 pm**
> > **Watchers3d wrote: Mon Jul 07, 2025 6:09 pm**
> > > **Deezhugs wrote: Mon Jul 07, 2025 4:50 pm**
> > > Hi, I'll take a look at the broken anims, I haven't noticed that before.
> >
> >   Sometimes WBS is botching animation length on export. In this case, with a high elf model,
> >  Manually set animation 140 (dance) length to 7234
> >  Manually set animation 22 (stealthwalk) length 1000
> >
> >  Use 010 Editor to achieve this. Template to read m2 files by Alastor goes with it by default. Open m2 in question via 010 editor and run template.
>
>   It worked like a charm, thank you!
>
> > **Cyberwill wrote: Sun Jun 29, 2025 7:13 pm**
> > snip
>
>   I have uploaded a new version with the animations fixed. This version looks a bit different than the one before as I have iterated on the models in the meantime, I also tried to make Nelf faces smoother and closer to vanilla's style.
>
>  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1YBT0JvcE_k9BkzyVKSM4D94IVKQ1IAII?usp=drive_link)

This replace patch A entirely?

## Post 138440 by Deezhugs — 2025-07-08T14:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138440#p138440 | page 9 | era: pre-1.18.1 -->

> **Volkyte wrote: Tue Jul 08, 2025 10:26 am**
> This replace patch A entirely?

This will replace patch F from the OP, it requires patch A to work.

## Post 138452 by Volkyte (Patch Note Conspiracy Theorist) — 2025-07-08T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138452#p138452 | page 9 | era: pre-1.18.1 -->

> **Deezhugs wrote: Tue Jul 08, 2025 2:22 pm**
> > **Volkyte wrote: Tue Jul 08, 2025 10:26 am**
> > This replace patch A entirely?
>
>   This will replace patch F from the OP, it requires patch A to work.

folrgive my ignorance: patch "F" normally is...? (had to rename some of them with different letters so i wish not to make a mess!)  smiling_turtle_head

## Post 138459 by Deezhugs — 2025-07-08T17:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138459#p138459 | page 9 | era: pre-1.18.1 -->

Ah, from the original post of this thread, Patch A is the retail high definition models. This patch is required for this mod (Patch F) to work. You can rename them into any letters you want, but the modded models must be alphabetically after the retail HD models. So for G and H for example, Patch G (retail models) and Patch H (modded models).

## Post 138465 by Volkyte (Patch Note Conspiracy Theorist) — 2025-07-08T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138465#p138465 | page 9 | era: pre-1.18.1 -->

> **Deezhugs wrote: Tue Jul 08, 2025 5:40 pm**
> Ah, from the original post of this thread, Patch A is the retail high definition models. This patch is required for this mod (Patch F) to work. You can rename them into any letters you want, but the modded models must be alphabetically after the retail HD models. So for G and H for example, Patch G (retail models) and Patch H (modded models).

thanks!!
but boobas are smaller now!!!  crying_turtle   crying_turtle

## Post 138473 by Azcron (Patch Note Conspiracy Theorist) — 2025-07-08T18:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138473#p138473 | page 9 | era: pre-1.18.1 -->

> **Volkyte wrote: Tue Jul 08, 2025 6:10 pm**
> thanks!!
>  but boobas are smaller now!!!  crying_turtle   crying_turtle

That's the point of his version. You either use Watcher's original or Deez altered version.

## Post 138517 by Hacerio — 2025-07-09T04:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138517#p138517 | page 9 | era: pre-1.18.1 -->

> **Deezhugs wrote: Mon Jul 07, 2025 9:45 pm**
> > **Watchers3d wrote: Mon Jul 07, 2025 6:09 pm**
> > > **Deezhugs wrote: Mon Jul 07, 2025 4:50 pm**
> > > Hi, I'll take a look at the broken anims, I haven't noticed that before.
> >
> >   Sometimes WBS is botching animation length on export. In this case, with a high elf model,
> >  Manually set animation 140 (dance) length to 7234
> >  Manually set animation 22 (stealthwalk) length 1000
> >
> >  Use 010 Editor to achieve this. Template to read m2 files by Alastor goes with it by default. Open m2 in question via 010 editor and run template.
>
>   It worked like a charm, thank you!
>
> > **Cyberwill wrote: Sun Jun 29, 2025 7:13 pm**
> > snip
>
>   I have uploaded a new version with the animations fixed. This version looks a bit different than the one before as I have iterated on the models in the meantime, I also tried to make Nelf faces smoother and closer to vanilla's style.
>
>  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1YBT0JvcE_k9BkzyVKSM4D94IVKQ1IAII?usp=drive_link)

Hey, this looks great - but the weapon sheathing / unsheating  animation seems to be broken - any idea why?

## Post 138556 by Watchers3d (Barrens Chat Casualty) — 2025-07-09T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138556#p138556 | page 10 | era: pre-1.18.1 -->

I reuploaded source archive in case you guys need most recent trolls. Everything else is the same.

## Post 138571 by Deezhugs — 2025-07-09T17:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138571#p138571 | page 10 | era: pre-1.18.1 -->

> **Hacerio wrote: Wed Jul 09, 2025 4:45 am**
> Hey, this looks great - but the weapon sheathing / unsheating  animation seems to be broken - any idea why?

Thanks!

That's an oversight on my part, should be fixed now.

[https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1YBT0JvcE_k9BkzyVKSM4D94IVKQ1IAII?usp=drive_link)

## Post 138596 by Narja — 2025-07-10T02:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138596#p138596 | page 10 | era: pre-1.18.1 -->

Just added a little bit more to the human models and replaced the robes model for a 'mini skirt'
[https://drive.google.com/file/d/1-jfXLT ... sp=sharing](https://drive.google.com/file/d/1-jfXLTUcQXrelMM5tMIRJTnL0bz6n_rm/view?usp=sharing)

## Post 138604 by Omongous — 2025-07-10T04:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138604#p138604 | page 10 | era: pre-1.18.1 -->

> **Narja wrote: Thu Jul 10, 2025 2:51 am**
> Just added a little bit more to the human models and replaced the robes model for a 'mini skirt'
>  [https://drive.google.com/file/d/1-jfXLT ... sp=sharing](https://drive.google.com/file/d/1-jfXLTUcQXrelMM5tMIRJTnL0bz6n_rm/view?usp=sharing)

As an appreciator of the bigger things in life, thank you for your service. :D

## Post 138657 by Heruta — 2025-07-10T15:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138657#p138657 | page 10 | era: pre-1.18.1 -->

> **Narja wrote: Thu Jul 10, 2025 2:51 am**
> Just added a little bit more to the human models and replaced the robes model for a 'mini skirt'
>  [https://drive.google.com/file/d/1-jfXLT ... sp=sharing](https://drive.google.com/file/d/1-jfXLTUcQXrelMM5tMIRJTnL0bz6n_rm/view?usp=sharing)

Thanks mate! Elves would be cool too... just saying   turtle_tongue_head
Can you also do version without mini skirt, just a standard robes?

## Post 138663 by Watchers3d (Barrens Chat Casualty) — 2025-07-10T17:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138663#p138663 | page 10 | era: pre-1.18.1 -->

I can pin your google folders to the topic header if you want.

In relation to "I want to edit WoD character models and bring it to vanilla", we have an okay info you can follow. Now it's quite simple. There's really no need to tear down third-party WotLK HD mods from someone else:

 1. Download WoD models archive from this topic, as well as multiconverter version free of polygon restrictions.
 2. Drag and drop all the .anim, .skin and .m2 files that correspond to the model in multiconverter and press Fix.
 3. You're done. Import it to Blender via WBS. How to setup WBS and fix standard problems you can find in this topic, for example in:

[How to fix UVs to match existing textures](https://forum.turtlecraft.gg/viewtopic.php?p=127478#p127478)
[General WBS setup guide on WotLK model editing by Deezhugs](https://forum.turtlecraft.gg/viewtopic.php?p=138370#p138370)
[Weight Painting](https://forum.turtlecraft.gg/viewtopic.php?p=129925#p129925)

Searching through WBS Discord channel is of course a far more comprehensive source of information. Most questions already have an answer. How to get rid of sharp normals along separate geometry seams (between a belt and torso, for example), how to clean up normals in general and so on. Feel free to ask, too. In this topic as well.

## Post 138681 by Narja — 2025-07-10T23:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138681#p138681 | page 10 | era: pre-1.18.1 -->

Now that you mention it, the normals look weird in the skirt, gonna take a look into that.
Heres a folder with the file if you wan to pin it:
[https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1qeyMiK_GC6Pn0EibILI8vbOUbsxXhtk9?usp=sharing)

## Post 138743 by Narja — 2025-07-11T15:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138743#p138743 | page 10 | era: pre-1.18.1 -->

Replaced gnomes for humans

## Post 138960 by Deezhugs — 2025-07-13T16:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138960#p138960 | page 10 | era: pre-1.18.1 -->

> **Watchers3d wrote: Thu Jul 10, 2025 5:36 pm**
> I can pin your google folders to the topic header if you want.

If you think it's worthwile, absolutely.

[https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1YBT0JvcE_k9BkzyVKSM4D94IVKQ1IAII?usp=drive_link)

## Post 139794 by Lucyhardcore — 2025-07-16T05:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139794#p139794 | page 10 | era: pre-1.18.1 -->

> **Narja wrote: Thu Jul 10, 2025 2:51 am**
> Just added a little bit more to the human models and replaced the robes model for a 'mini skirt'
>  [https://drive.google.com/file/d/1-jfXLT ... sp=sharing](https://drive.google.com/file/d/1-jfXLTUcQXrelMM5tMIRJTnL0bz6n_rm/view?usp=sharing)

Hello! when pressing Z for weapon equip / unequip the animations seems broken, nothing happens

## Post 140225 by Markka — 2025-07-18T05:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140225#p140225 | page 10 | era: pre-1.18.1 -->

Any news on tauren gals? Or at least orcs?

## Post 140309 by Vellerophontis — 2025-07-18T12:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140309#p140309 | page 10 | era: pre-1.18.1 -->

Or forshaken? ;)

## Post 140393 by Funkt4st1c3 — 2025-07-18T23:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140393#p140393 | page 10 | era: pre-1.18.1 -->

Really trying to avoid figuring out how to do this on Linux, begging for the other races in order of Orc, Tauren, Forsaken, Dwarf, Gnome

## Post 140653 by Necropheus — 2025-07-20T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140653#p140653 | page 10 | era: pre-1.18.1 -->

> **Funkt4st1c3 wrote: Fri Jul 18, 2025 11:42 pm**
> Really trying to avoid figuring out how to do this on Linux, begging for the other races in order of Orc, Tauren, Forsaken, Dwarf, Gnome

Its really not that different. I use Bottles to play WoW on Linux so i have the same directory as in Windows. You can also try Lutris.

## Post 140746 by Visagezero — 2025-07-21T15:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140746#p140746 | page 10 | era: pre-1.18.1 -->

> **Deezhugs wrote: Wed Jun 18, 2025 5:14 pm**
> I've noticed some people were asking for a less thicc version, and since I've done one for myself I figured I'd share. I just picked up Blender a week ago as a fun project, so it's doubtlessly a hackjob, but eh, good enough for me. Contains all races except Troll.
>
>  Edit2: I fixed the filesize, should be fine now.
>
>  [https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1YBT0JvcE_k9BkzyVKSM4D94IVKQ1IAII?usp=sharing)

Thank you for sharing this more "moderate" size.   satisfied_turtle_head

## Post 140758 by Turtledu87 — 2025-07-21T17:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140758#p140758 | page 10 | era: pre-1.18.1 -->

> **Markka wrote: Fri Jul 18, 2025 5:40 am**
> Any news on tauren gals? Or at least orcs?

Dude im waiting for the orc female so hard.  turtle_in_love_head

## Post 141293 by Nillin — 2025-07-25T12:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=141293#p141293 | page 10 | era: pre-1.18.1 -->

Can you do the warlock succubus?  I need a Thiccubus

## Post 141978 by Turtleash — 2025-07-29T00:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=141978#p141978 | page 10 | era: pre-1.18.1 -->

Hey, firstly, AMAZING mod, thankyou. I recently started trying my own modeling work for Twow, but I am new to it and need to learn plenty. I am very clumsy with Blender, and the models I import I can't do too much with yet.

Which leads me to ask.. since you are clearly proficient: Are you able to do some work on the human male models? I find their body shape to be utterly eye rolling, with strange goofy proportions (my personal opinion), and was wanting to rework the model to have more natural and realistic proportions. Such as, smaller forearms that don't dwarf the rest of their body, a thinner waist, smaller hands. That sort of thing. I would love so much! If you read this and respond, thanks just for the feedback!

## Post 143128 by Stogrim — 2025-08-04T18:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143128#p143128 | page 10 | era: pre-1.18.1 -->

My brother installed the mod, plus the little extra for humans and the skirt mod to show off booty in robes and it made my gnome warlock taller than a night elf, with the human thicc body type but a thinner waist and a slightly bigger gnome head. It's now my favorite character because it honestly looks amazing.
Just wondering if anyone else has this turnout? Is it the mod order or the mod combination?
(I would post a pic but I can't in quick reply)

## Post 143470 by Jarlander21 — 2025-08-07T03:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143470#p143470 | page 10 | era: pre-1.18.1 -->

Is there a version with slim hips and the large chest? I only find large chest and behinds.

## Post 143493 by Turboman (Patch Note Conspiracy Theorist) — 2025-08-07T08:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143493#p143493 | page 10 | era: pre-1.18.1 -->

> **Stogrim wrote: Mon Aug 04, 2025 6:08 pm**
> My brother installed the mod, plus the little extra for humans and the skirt mod to show off booty in robes and it made my gnome warlock taller than a night elf, with the human thicc body type but a thinner waist and a slightly bigger gnome head. It's now my favorite character because it honestly looks amazing.
>  Just wondering if anyone else has this turnout? Is it the mod order or the mod combination?
>  (I would post a pic but I can't in quick reply)

May i ask you for a source of that skirt mod? For scientific reasons of course.

## Post 143719 by Stogrim — 2025-08-08T00:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143719#p143719 | page 10 | era: pre-1.18.1 -->

[embed: https://www.youtube.com/embed/c5j4jtefbg4]

This is a video of the mod list, the character models affected by the mods and the Gnome beauty I'm currently lvling all thanks to our favorite wow mod, a little extra :)

## Post 144974 by Volkyte (Patch Note Conspiracy Theorist) — 2025-08-13T05:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144974#p144974 | page 10 | era: pre-1.18.1 -->

please implement female orcs too <3

## Post 145544 by Mrtwister — 2025-08-15T05:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145544#p145544 | page 10 | era: pre-1.18.1 -->

Could we get a version where instead of a little extra it's a little less and make them more flat for people who want a more androgynus appearance.

## Post 145545 by Volkyte (Patch Note Conspiracy Theorist) — 2025-08-15T06:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145545#p145545 | page 10 | era: pre-1.18.1 -->

> **Mrtwister wrote: Fri Aug 15, 2025 5:58 am**
> Could we get a version where instead of a little extra it's a little less and make them more flat for people who want a more androgynus appearance.

then would be not "a little extra" but "a little less"   satisfied_turtle
I guess a new mod topic should be opened to satisfy your request sir.

## Post 145999 by Teerack (Barrens Chat Casualty) — 2025-08-16T00:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145999#p145999 | page 10 | era: pre-1.18.1 -->

orcs, tauren, dwarfs, gnomes, and goblins when?!

## Post 146239 by Brosephfritzl — 2025-08-16T18:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146239#p146239 | page 10 | era: pre-1.18.1 -->

> **Teerack wrote: Sat Aug 16, 2025 12:04 am**
> orcs, tauren, dwarfs, gnomes, and goblins when?!

I had my own Mandela moment with this because I could have sworn back in spring of 2024 my goblin female was, in fact, 'enhanced' and I thought it had originated from this mod. I don't have any screenshots of it though, only of the humans, night elves, and high elves just as it says on the tin.

I decided to poke at this over the past day or so...only to realize this is not the sort of thing you can just kind of 'poke at' with the suite of tools, and experience with said tools, that is necessary. Maybe someday we'll be blessed with shortstack gobbos in based on the HD patch, here or elsewhere. One can hope!

## Post 146273 by Teerack (Barrens Chat Casualty) — 2025-08-16T20:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146273#p146273 | page 10 | era: pre-1.18.1 -->

> **Brosephfritzl wrote: Sat Aug 16, 2025 6:46 pm**
> > **Teerack wrote: Sat Aug 16, 2025 12:04 am**
> > orcs, tauren, dwarfs, gnomes, and goblins when?!
>
>   I had my own Mandela moment with this because I could have sworn back in spring of 2024 my goblin female was, in fact, 'enhanced' and I thought it had originated from this mod. I don't have any screenshots of it though, only of the humans, night elves, and high elves just as it says on the tin.
>
>  I decided to poke at this over the past day or so...only to realize this is not the sort of thing you can just kind of 'poke at' with the suite of tools, and experience with said tools, that is necessary. Maybe someday we'll be blessed with shortstack gobbos in based on the HD patch, here or elsewhere. One can hope!

![Image](https://pbs.twimg.com/media/EWBlvU3XkAA2EpE.jpg)

## Post 146648 by Mrtwister — 2025-08-18T01:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146648#p146648 | page 10 | era: pre-1.18.1 -->

> **Volkyte wrote: Fri Aug 15, 2025 6:03 am**
> > **Mrtwister wrote: Fri Aug 15, 2025 5:58 am**
> > Could we get a version where instead of a little extra it's a little less and make them more flat for people who want a more androgynus appearance.
>
>   then would be not "a little extra" but "a little less"   satisfied_turtle
>  I guess a new mod topic should be opened to satisfy your request sir.

I did do that but my thread got deleted.

## Post 146863 by Kelayzz — 2025-08-18T22:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146863#p146863 | page 10 | era: pre-1.18.1 -->

New to turtle wow and just messing around with the mods.

So i am using the Deezhugs version of this mod which is named patch F (relevent for below)
also - using the "newer" HD Patch A from [viewtopic.php?t=18689](https://forum.turtlecraft.gg/viewtopic.php?t=18689)

see in the OG post that it requires the Patch-A.mpq you have listed since its for models only.

Can the "newer" HD Patch-A, plus the Patch-A you have linked be used together?
Can i just Name the Patch A you have linked here for models to say Patch D since its before F?

I am also using Necro's Patch U but dont really care for it so  have it disabled.

Thanks ahead of time. just for absolute clarification - I want to use Patch-A linked in OP here with the HD patch-a if possible.

## Post 146964 by Watchers3d (Barrens Chat Casualty) — 2025-08-19T10:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146964#p146964 | page 10 | era: pre-1.18.1 -->

> **Turtleash wrote: Tue Jul 29, 2025 12:09 am**
> Hey, firstly, AMAZING mod, thankyou. I recently started trying my own modeling work for Twow, but I am new to it and need to learn plenty. I am very clumsy with Blender, and the models I import I can't do too much with yet.
>
>  Which leads me to ask.. since you are clearly proficient: Are you able to do some work on the human male models? I find their body shape to be utterly eye rolling, with strange goofy proportions (my personal opinion), and was wanting to rework the model to have more natural and realistic proportions. Such as, smaller forearms that don't dwarf the rest of their body, a thinner waist, smaller hands. That sort of thing. I would love so much! If you read this and respond, thanks just for the feedback!

Greetings, Turtleash  smiling_turtle_head

Thank you.
No plans for male humans for me unfortunately. But the result you're talking about is not that complicated to achieve. There's a lot of info dangling around in this topic just about this subject.

> **Kelayzz wrote: Mon Aug 18, 2025 10:15 pm**
> New to turtle wow and just messing around with the mods.
>
>  So i am using the Deezhugs version of this mod which is named patch F (relevent for below)
>  also - using the "newer" HD Patch A from [viewtopic.php?t=18689](https://forum.turtlecraft.gg/viewtopic.php?t=18689)
>
>  see in the OG post that it requires the Patch-A.mpq you have listed since its for models only.
>
>  Can the "newer" HD Patch-A, plus the Patch-A you have linked be used together?
>  Can i just Name the Patch A you have linked here for models to say Patch D since its before F?
>
>
>  I am also using Necro's Patch U but dont really care for it so  have it disabled.
>
>  Thanks ahead of time. just for absolute clarification - I want to use Patch-A linked in OP here with the HD patch-a if possible.

Greetings, Kelayzz  smiling_turtle_head

Mod you refer to uses character related db entries and other files from patch-A of this topic.
You can rename it, yes, but currently I would advice not to, because this mod pack is full of outdated db entries, which will lead to misbehavior client-side. You should wait until it's updated.

## Post 146966 by Watchers3d (Barrens Chat Casualty) — 2025-08-19T10:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146966#p146966 | page 10 | era: pre-1.18.1 -->

Patch-A updated a little bit to function with the latest updates. Patch-F is fine like it was before.

I heard a lot of new people are coming around.
Some time ago Turtle introduced new WotLK and custom hairstyles to some character models. Patch-A does not feature any. It cycles vanilla hairstyles again. *proceeds to explain ancient problems of vanilla-WotLK client polygon limits* Yeah, I know. It sucks. That's just how it is. Pretty much only UE can fix this. And yeah, texture resolution is hardcoded. No BillionXBillion pixels Giga-AI upscaled textures for you, too.

## Post 146981 by Watchers3d (Barrens Chat Casualty) — 2025-08-19T11:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146981#p146981 | page 10 | era: pre-1.18.1 -->

*Is there any other cool and awesome mods I can use?* **Yeah**

WMO structures, weapons and armor by [Elkepwn](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=130127). Features HD backports and Tomkek models.
[viewtopic.php?t=16720](https://forum.turtlecraft.gg/viewtopic.php?t=16720)

Environment HD Retexture. Patch-B from legacy HD Project topic. Yes, still working as it should.
[viewtopic.php?t=2827](https://forum.turtlecraft.gg/viewtopic.php?t=2827)

Weapon/attack sound replacement patch by [Astricon](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=236154). Patch-C from legacy HD Project topic.
[viewtopic.php?t=2827](https://forum.turtlecraft.gg/viewtopic.php?t=2827)

Bikini Mod backport from WotLK by [Ribcruncher](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=23934). Replaces armor textures. (Can be run with A little Extra simultaneously. Just change the letter F in "Patch-F" to something else)
[viewtopic.php?t=12307](https://forum.turtlecraft.gg/viewtopic.php?t=12307)

## Post 147107 by Kelayzz — 2025-08-19T22:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147107#p147107 | page 10 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Aug 19, 2025 11:25 am**
> *Is there any other cool and awesome mods I can use?* **Yeah**
>
>  WMO structures, weapons and armor by [Elkepwn](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=130127). Features HD backports and Tomkek models.
>  [viewtopic.php?t=16720](https://forum.turtlecraft.gg/viewtopic.php?t=16720)
>
>  Environment HD Retexture. Patch-B from legacy HD Project topic. Yes, still working as it should.
>  [viewtopic.php?t=2827](https://forum.turtlecraft.gg/viewtopic.php?t=2827)
>
>  Weapon/attack sound replacement patch by [Astricon](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=236154). Patch-C from legacy HD Project topic.
>  [viewtopic.php?t=2827](https://forum.turtlecraft.gg/viewtopic.php?t=2827)
>
>  Bikini Mod backport from WotLK by [Ribcruncher](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=23934). Replaces armor textures. (Can be run with A little Extra simultaneously. Just change the letter F in "Patch-F" to something else)
>  [viewtopic.php?t=12307](https://forum.turtlecraft.gg/viewtopic.php?t=12307)

replying to your previous reply to me but im bad at forums so just doing this one lol.

so just to make sure I understood correctly, use the patch-A.mpq listed in this thread for A little Extra for the time being? man, i just got the succubus model to have somewhat...revealing model...was a work in progress >.>

but good mods also above i use those everyone else should to!

edit: i see this patch-a listed here is using og old old succubus model , ill probably try and play around to get legion version in cuz why not

## Post 147148 by Watchers3d (Barrens Chat Casualty) — 2025-08-20T02:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147148#p147148 | page 10 | era: pre-1.18.1 -->

> **Kelayzz wrote: Tue Aug 19, 2025 10:57 pm**
> so just to make sure I understood correctly, use the patch-A.mpq listed in this thread for A little Extra for the time being?

Yeah.

## Post 147174 by Volkyte (Patch Note Conspiracy Theorist) — 2025-08-20T05:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147174#p147174 | page 11 | era: pre-1.18.1 -->

thanks for keeping the topic alive. please also provide female orcs! <3 :3

## Post 147367 by Watchers3d (Barrens Chat Casualty) — 2025-08-20T20:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147367#p147367 | page 11 | era: pre-1.18.1 -->

> **Volkyte wrote: Wed Aug 20, 2025 5:04 am**
> thanks for keeping the topic alive. please also provide female orcs! <3 :3

No problem  smiling_turtle_head
As for any other additions to patch-F, I'll hold on to them for now. UE client is supposedly closer with each passing day. Engagement is low, too. I'm not even sure if people in need of this patch-A we came up with back in December are still here. I'll stay around a little longer though.

## Post 147444 by Servo — 2025-08-21T08:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147444#p147444 | page 11 | era: pre-1.18.1 -->

> **Watchers3d wrote: Wed Aug 20, 2025 8:44 pm**
> > **Volkyte wrote: Wed Aug 20, 2025 5:04 am**
> > thanks for keeping the topic alive. please also provide female orcs! <3 :3
>
>   No problem  smiling_turtle_head
>  As for any other additions to patch-F, I'll hold on to them for now. UE client is supposedly closer with each passing day. Engagement is low, too. I'm not even sure if people in need of this patch-A we came up with back in December are still here. I'll stay around a little longer though.

Didn't they say the UE client will be released earliest in December this year? ([in the Q&A on reddit](https://www.reddit.com/r/turtlewow/comments/1mfsgkv/comment/n6kpo5g/?context=10000))
So it will be quite some time till the release

## Post 147499 by Ankobrie — 2025-08-21T13:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147499#p147499 | page 11 | era: pre-1.18.1 -->

This is really great, thanks!!!

## Post 147510 by Glarthir (Barrens Chat Casualty) — 2025-08-21T15:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147510#p147510 | page 11 | era: pre-1.18.1 -->

@Necropheus
Could you be persuaded to do nude textures for the Donation skins as well? :3

## Post 147512 by Yheshua — 2025-08-21T15:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147512#p147512 | page 11 | era: pre-1.18.1 -->

When you making for orc women!? :D
They deserve some thiccness.

## Post 147597 by Untakenusername — 2025-08-21T23:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147597#p147597 | page 11 | era: pre-1.18.1 -->

This mod has piqued my interest in modding, and now I think i'm gonna need to figure out how to fandangle one into existence. I'm more of an artist than a coder, so all these hoops are gonna give me a headache. Are you also able to do custom animations? I might finally be able to fix those godawful troll female animations. You'd swear they were robots with how stiff, limited, and uninspired every movement is!

Not really a fan how a lot of the (mostly night elf) faces turned out with the HD mod. I don't know if they're ported from modern wow or not, but they look downright hideous compared to the OG's despite the much higher polycount.

Makes me wonder if Turtlewow will ever support different bust and hip ratios. There's already precedent in the game itself, where certain night elf characters like Tyrande seem to have an increased bustline. This was also present in certain wotlk belf NPCs like Alextrasa and Sylvanas who had a whole lot more than the usual belf character model.

## Post 147620 by Watchers3d (Barrens Chat Casualty) — 2025-08-22T01:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147620#p147620 | page 11 | era: pre-1.18.1 -->

> **Untakenusername wrote: Thu Aug 21, 2025 11:02 pm**
> Are you also able to do custom animations? I might finally be able to fix those godawful troll female animations. You'd swear they were robots with how stiff, limited, and uninspired every movement is!

You can change and edit animations, yeah. Drastic change of animation/s is out of scope for A Little Extra though.
It's the whole default model. Not just animations. Whoever made it didn't really care that much  hiding_smth_turtle_head

## Post 147791 by Watchers3d (Barrens Chat Casualty) — 2025-08-23T06:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147791#p147791 | page 11 | era: pre-1.18.1 -->

Guys do you really need all these hd creatures, mounts, music, character selection screens? Back when I was maintaining HD Project for a time, that was the most requested feature - "I don't need this. I don't need that. Just give me character models and I'll be on my way". Can't you be happy with this + hd character if needed?

> **Watchers3d wrote: Tue Aug 19, 2025 11:25 am**
> *Is there any other cool and awesome mods I can use?* **Yeah**
>
>  WMO structures, weapons and armor by [Elkepwn](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=130127). Features HD backports and Tomkek models.
>  [viewtopic.php?t=16720](https://forum.turtlecraft.gg/viewtopic.php?t=16720)
>
>  Environment HD Retexture. Patch-B from legacy HD Project topic. Yes, still working as it should.
>  [viewtopic.php?t=2827](https://forum.turtlecraft.gg/viewtopic.php?t=2827)
>
>  Weapon/attack sound replacement patch by [Astricon](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=236154). Patch-C from legacy HD Project topic.
>  [viewtopic.php?t=2827](https://forum.turtlecraft.gg/viewtopic.php?t=2827)
>
>  Bikini Mod backport from WotLK by [Ribcruncher](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=23934). Replaces armor textures. (Can be run with A little Extra simultaneously. Just change the letter F in "Patch-F" to something else)
>  [viewtopic.php?t=12307](https://forum.turtlecraft.gg/viewtopic.php?t=12307)

## Post 147893 by Bigjackhorner — 2025-08-23T19:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147893#p147893 | page 11 | era: pre-1.18.1 -->

Wow this looks bad. Like whole melons ready to burst out of the armor. Hilarious

## Post 147988 by Nhavyr — 2025-08-24T10:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147988#p147988 | page 11 | era: pre-1.18.1 -->

I think it looks great. We need a bigger breasts option.

## Post 148092 by Smoog — 2025-08-25T02:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148092#p148092 | page 11 | era: pre-1.18.1 -->

> **Hottatom wrote: Tue Nov 12, 2024 2:05 am**
> Hello! I love this mod, though I've recently encountered an odd bug.
>
>  Mining has no sound effect when this mod is being used. The pickaxe "clink~clank" is not played. I've also noticed that when I am smithing, the sound effect for the hammer hitting the metal is also missing. It does not seem to affect professions like tailoring and first aid, but I'm not sure about others.

I can concur I experience this bug as well.

## Post 148104 by Untakenusername — 2025-08-25T03:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148104#p148104 | page 11 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri Aug 22, 2025 1:48 am**
> > **Untakenusername wrote: Thu Aug 21, 2025 11:02 pm**
> > Are you also able to do custom animations? I might finally be able to fix those godawful troll female animations. You'd swear they were robots with how stiff, limited, and uninspired every movement is!
>
>   You can change and edit animations, yeah. Drastic change of animation/s is out of scope for A Little Extra though.
>  It's the whole default model. Not just animations. Whoever made it didn't really care that much  hiding_smth_turtle_head

That's fair. If I can fandangle how to unpack things maybe I can help contribute and improve things - or if somebody can send me the pieces that can be plunked in Blender and I can just send 'em back. I've got no idea how this system handles mods and how much scripting and coding is needed.

> **Nhavyr wrote: Sun Aug 24, 2025 10:14 am**
> I think it looks great. We need a bigger breasts option.

It would be pretty baller if Turtlewow added support for different chest and hip ratios, and a few other flavorful flourishes. Like using the goblin stuff from Cataclysm, and having humans able to use those ogre-looking humans and the skinny variants which use the forsaken as a base as alternate builds.

## Post 148115 by Untakenusername — 2025-08-25T06:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148115#p148115 | page 11 | era: pre-1.18.1 -->

BTW, this seems to break for donation reward skins like Mark of the Demonhunter (Only one I got, but it doesn't seem to render that skin as it should. Unsure about the others.)

## Post 148124 by Watchers3d (Barrens Chat Casualty) — 2025-08-25T07:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148124#p148124 | page 11 | era: pre-1.18.1 -->

> **Smoog wrote: Mon Aug 25, 2025 2:04 am**
> I can concur I experience this bug as well.

Greetings, Smoog  smiling_turtle_head .
Which patch-F do you use and what race is your character?

> **Untakenusername wrote: Mon Aug 25, 2025 3:22 am**
> That's fair. If I can fandangle how to unpack things maybe I can help contribute and improve things - or if somebody can send me the pieces that can be plunked in Blender and I can just send 'em back. I've got no idea how this system handles mods and how much scripting and coding is needed.

This topic has some info. Spoiler below the image in the topic header. WBS and General Discord channel has more on top of that.

> **Untakenusername wrote: Mon Aug 25, 2025 6:00 am**
> BTW, this seems to break for donation reward skins like Mark of the Demonhunter (Only one I got, but it doesn't seem to render that skin as it should. Unsure about the others.)

Looks fine to me. What's broken about it?
[embed: //drive.google.com/file/d/1Mn8WJ99JM1LwWL7FokrhaHLesZFNz6QS/preview]

## Post 148225 by Untakenusername — 2025-08-25T17:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148225#p148225 | page 11 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Aug 25, 2025 7:44 am**
> Looks fine to me. What's broken about it?
> [embed: //drive.google.com/file/d/1Mn8WJ99JM1LwWL7FokrhaHLesZFNz6QS/preview]

The bra texture in the character model. The skin should more or less be 'topless but kept 'modest' by tattoos'.

That being said, I did a little more research and fixing this 'error' may well be out of the scope of this particular mod since it focuses on the mesh itself rather than the textures. It would be a problem of the HD mod A Little Extra is build off of. Apparently underwear is 'baked in' to that particular mod rather than being a different 'clothing texture' that's applied to for vanilla models when some equipment slots are empty.

## Post 148249 by Vellerophontis — 2025-08-25T18:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148249#p148249 | page 11 | era: pre-1.18.1 -->

Forshaken when?

## Post 148250 by Volkyte (Patch Note Conspiracy Theorist) — 2025-08-25T18:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148250#p148250 | page 11 | era: pre-1.18.1 -->

> **Vellerophontis wrote: Mon Aug 25, 2025 6:30 pm**
> Forshaken when?

![Image](https://media.makeameme.org/created/wtf-f765ae35e1.jpg)

## Post 148288 by Watchers3d (Barrens Chat Casualty) — 2025-08-25T21:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148288#p148288 | page 11 | era: pre-1.18.1 -->

> **Untakenusername wrote: Mon Aug 25, 2025 5:21 pm**
> The bra texture in the character model. The skin should more or less be 'topless but kept 'modest' by tattoos'.
>
>  That being said, I did a little more research and fixing this 'error' may well be out of the scope of this particular mod since it focuses on the mesh itself rather than the textures. It would be a problem of the HD mod A Little Extra is build off of. Apparently underwear is 'baked in' to that particular mod rather than being a different 'clothing texture' that's applied to for vanilla models when some equipment slots are empty.

I'll take it off for a little extra and leave as is for patch-A for now.

## Post 148291 by Untakenusername — 2025-08-25T22:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148291#p148291 | page 11 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Aug 25, 2025 9:56 pm**
> I'll take it off for a little extra and leave as is for patch-A for now.

The bra is also there in Patch A as it has to do with the base textures in that HD patch. Unless you're talking about editing the textures directly?

## Post 148293 by Watchers3d (Barrens Chat Casualty) — 2025-08-25T23:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148293#p148293 | page 11 | era: pre-1.18.1 -->

> **Untakenusername wrote: Mon Aug 25, 2025 10:35 pm**
> The bra is also there in Patch A as it has to do with the base textures in that HD patch. Unless you're talking about editing the textures directly?

I already did. Yes, for patch-A bra stays. Retail tattoos cannot fulfill it's job. But for A Little Extra it's absence won't be that crucial.

## Post 148320 by Nelkel — 2025-08-26T01:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148320#p148320 | page 11 | era: pre-1.18.1 -->

Dude, can you give me a head start on how can I port this to a 3.3.5 client? I'll try to do it myself but I need help starting

## Post 148326 by Untakenusername — 2025-08-26T02:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148326#p148326 | page 11 | era: pre-1.18.1 -->

> **Watchers3d wrote: Mon Aug 25, 2025 11:05 pm**
> > **Untakenusername wrote: Mon Aug 25, 2025 10:35 pm**
> > The bra is also there in Patch A as it has to do with the base textures in that HD patch. Unless you're talking about editing the textures directly?
>
>   I already did. Yes, for patch-A bra stays. Retail tattoos cannot fulfill it's job. But for A Little Extra it's absence won't be that crucial.

Ah, cool. It seems you have! Not quite the direction I was expecting, but I suppose it can suffice. I was expecting something more like this quick and dirty mockup I did in MSpaint i'll link below. Don't know if you're capable of doing anything like that, but there's a chance I might be able to if you're able to send me a version of the file I can open in something like Clip Studio. Heck. Might be able to make similar... underwear while I'm at it.
![Image](https://media.discordapp.net/attachments/189900208618864644/1409728650613489735/image.png?ex=68ae6f9d&is=68ad1e1d&hm=5b85ac66e56ea40c8db064f53ca773a042abf22ea4a019550a507f8e2651f869&=&format=webp&quality=lossless)

Alternately, links to the programs and some guides on modding would be helpful. I've tried following some of the steps in the front of this thread, but I might be doing something wrong or might not have found the exact right programs.

## Post 148366 by Watchers3d (Barrens Chat Casualty) — 2025-08-26T08:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148366#p148366 | page 11 | era: pre-1.18.1 -->

> **Nelkel wrote: Tue Aug 26, 2025 1:43 am**
> Dude, can you give me a head start on how can I port this to a 3.3.5 client? I'll try to do it myself but I need help starting

Greetings, Nelkel  smiling_turtle_head

You don't need to port it to 3.3.5 client. You can just take WotLK m2s from this topic, put them in mpq archive an boot the game up. There is a but of, course. WotLK client polygon limit per m2 is is the same, as it is in vanilla, and it has more geosets per character model on top of it - boots, belts, pants, hairstyles, etc. A Little Extra is filled to the brim as is, without any additions.

So it's easier and better pretty much to either start from scratch (it being default HD model), or getting up to speed someone elses, similar in nature project, which was made for WotLK client in the first place.

> **Untakenusername wrote: Tue Aug 26, 2025 2:42 am**
> Ah, cool. It seems you have! Not quite the direction I was expecting, but I suppose it can suffice. I was expecting something more like this quick and dirty mockup I did in MSpaint i'll link below. Don't know if you're capable of doing anything like that, but there's a chance I might be able to if you're able to send me a version of the file I can open in something like Clip Studio. Heck. Might be able to make similar... underwear while I'm at it.
>  ![Image](https://media.discordapp.net/attachments/189900208618864644/1409728650613489735/image.png?ex=68ae6f9d&is=68ad1e1d&hm=5b85ac66e56ea40c8db064f53ca773a042abf22ea4a019550a507f8e2651f869&=&format=webp&quality=lossless)
>
>
>   Alternately, links to the programs and some guides on modding would be helpful. I've tried following some of the steps in the front of this thread, but I might be doing something wrong or might not have found the exact right programs.

Texture resolution is low and UV stretch is pretty strong. I might be able to squeeze a bit more even distribution, but in this case it won't change much. Texture is too detailed.

Could be done for default HD Project model though.
Sure.
[embed: //drive.google.com/file/d/1Ej8CIn8ryS4kLOFCc0la_s-C-R9ajdtV/preview]

In-game size is 256x256. If you want to test it in-game, downsample it first. Converter to blp is BLPNG Converter. Settings are 256 indexed color and alpha set to none. MPQ Archives can be opened with MPQ Editor.

## Post 148469 by Untakenusername — 2025-08-26T20:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148469#p148469 | page 11 | era: pre-1.18.1 -->

> **Watchers3d wrote: Tue Aug 26, 2025 8:32 am**
> In-game size is 256x256. If you want to test it in-game, downsample it first. Converter to blp is BLPNG Converter. Settings are 256 indexed color and alpha set to none. MPQ Archives can be opened with MPQ Editor.

Thanks. Looks like I might need to delve further into the guts of things anyways. Also less tattoos in this than I'd thought. Was thinking I'd just make a few slight edits using what existed as a baseline. I've got another question since I don't yet know how the models are rigged - Is it possible to add additional bones and use those in custom animations? What about adding extra skintones and hairstyles? I'm suspecting those might be a bit beyond what a compatible mod is capable of, but I could well be wrong.

## Post 148487 by Necropheus — 2025-08-26T21:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148487#p148487 | page 11 | era: pre-1.18.1 -->

> **Untakenusername wrote: Tue Aug 26, 2025 8:37 pm**
> > **Watchers3d wrote: Tue Aug 26, 2025 8:32 am**
> > In-game size is 256x256. If you want to test it in-game, downsample it first. Converter to blp is BLPNG Converter. Settings are 256 indexed color and alpha set to none. MPQ Archives can be opened with MPQ Editor.
>
>   Thanks. Looks like I might need to delve further into the guts of things anyways. Also less tattoos in this than I'd thought. Was thinking I'd just make a few slight edits using what existed as a baseline. I've got another question since I don't yet know how the models are rigged - Is it possible to add additional bones and use those in custom animations? What about adding extra skintones and hairstyles? I'm suspecting those might be a bit beyond what a compatible mod is capable of, but I could well be wrong.

To Achieve good results with that little amount of Pixels available in the Chest area is very hard. You can check out the files in my Texture Patch if you want so see how few pixels are actually added on the default skin textures. I dont say that you wont find a good solution, but i can say that it will not contain lots of Details like you painted it in the Screenshot.

## Post 148488 by Necropheus — 2025-08-26T21:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148488#p148488 | page 11 | era: pre-1.18.1 -->

> **Glarthir wrote: Thu Aug 21, 2025 3:26 pm**
> @Necropheus
>  Could you be persuaded to do nude textures for the Donation skins as well? :3

Have to check how to find the files. But i can look into it.

## Post 148518 by Watchers3d (Barrens Chat Casualty) — 2025-08-27T00:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148518#p148518 | page 11 | era: pre-1.18.1 -->

> **Untakenusername wrote: Tue Aug 26, 2025 8:37 pm**
> I don't yet know how the models are rigged - Is it possible to add additional bones and use those in custom animations?

Nothing out of the ordinary. Sure, bones can be added.

> **Untakenusername wrote: Tue Aug 26, 2025 8:37 pm**
> What about adding extra skintones and hairstyles? I'm suspecting those might be a bit beyond what a compatible mod is capable of, but I could well be wrong.

Yeah can't be added on top - both skintones and hairstyles. Change only.

## Post 148521 by Necropheus — 2025-08-27T00:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148521#p148521 | page 11 | era: pre-1.18.1 -->

> **Untakenusername wrote: Tue Aug 26, 2025 2:42 am**
> > **Watchers3d wrote: Mon Aug 25, 2025 11:05 pm**
> > > **Untakenusername wrote: Mon Aug 25, 2025 10:35 pm**
> > > The bra is also there in Patch A as it has to do with the base textures in that HD patch. Unless you're talking about editing the textures directly?
> >
> >   I already did. Yes, for patch-A bra stays. Retail tattoos cannot fulfill it's job. But for A Little Extra it's absence won't be that crucial.
>
>   Ah, cool. It seems you have! Not quite the direction I was expecting, but I suppose it can suffice. I was expecting something more like this quick and dirty mockup I did in MSpaint i'll link below. Don't know if you're capable of doing anything like that, but there's a chance I might be able to if you're able to send me a version of the file I can open in something like Clip Studio. Heck. Might be able to make similar... underwear while I'm at it.
>  ![Image](https://media.discordapp.net/attachments/189900208618864644/1409728650613489735/image.png?ex=68ae6f9d&is=68ad1e1d&hm=5b85ac66e56ea40c8db064f53ca773a042abf22ea4a019550a507f8e2651f869&=&format=webp&quality=lossless)
>
>
>   Alternately, links to the programs and some guides on modding would be helpful. I've tried following some of the steps in the front of this thread, but I might be doing something wrong or might not have found the exact right programs.

Okay, i just updated the U-Patch. I only edited one file and i need you to tell me a) if this changed the right donation Texture and b) if the results look as intended.

## Post 148536 by Untakenusername — 2025-08-27T01:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148536#p148536 | page 11 | era: pre-1.18.1 -->

> **Watchers3d wrote: Wed Aug 27, 2025 12:05 am**
> > **Untakenusername wrote: Tue Aug 26, 2025 8:37 pm**
> > I don't yet know how the models are rigged - Is it possible to add additional bones and use those in custom animations?
>
>   Nothing out of the ordinary. Sure, bones can be added.
>
> > **Untakenusername wrote: Tue Aug 26, 2025 8:37 pm**
> > What about adding extra skintones and hairstyles? I'm suspecting those might be a bit beyond what a compatible mod is capable of, but I could well be wrong.
>
>   Yeah can't be added on top - both skintones and hairstyles. Change only.

Some good news and some bad news! Though if the Mag'har Orc hairstyles and Zalandari Troll hairstyles can be wrangled in as some replacements, it's even better. Hearing about additional bones could be amusing if I can ever fandangle this out, but that depends on how they've rigged things to bounce.

On a similar note, are you presently working on modding any of the other available races? If so, how's the progress coming along?

> **Necropheus wrote: Wed Aug 27, 2025 12:20 am**
> Okay, i just updated the U-Patch. I only edited one file and i need you to tell me a) if this changed the right donation Texture and b) if the results look as intended.

It's a marked improvement and I'd take it or otherwise settle if you didn't want to work on it more. The perfectionist side of me says: The curl around the breasts is 'Backwards' - the spirals should ideally come from the flanks like in the original, and move in from underneath - I'd made the tattoo further away from the ribs as I felt it looked better. It's perfectly fine if the nipples end up covered or mostly covered by the tattoo (Despite perhaps being 'against' the core idea of the patch.) - it's the illusion of being 'clothed'. It's also probably why I'd add some kind of thong-looking tattoo in the front. I'd feel it keeps with the 'spirit' of both. Similar to how some artists of a particular persuasion draw Midna's markings (From the Legend of Zelda, Twilight Princess).

## Post 148570 by Watchers3d (Barrens Chat Casualty) — 2025-08-27T07:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148570#p148570 | page 11 | era: pre-1.18.1 -->

> **Untakenusername wrote: Wed Aug 27, 2025 1:36 am**
> On a similar note, are you presently working on modding any of the other available races? If so, how's the progress coming along?

No, not for now  smiling_turtle_head

## Post 148692 by Fatalframe — 2025-08-27T16:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148692#p148692 | page 11 | era: pre-1.18.1 -->

Is there by chance a mod that does this for the Female Draenei by chance? I do get that it is a mod that replaces the human female with it, but didn't know if there was one for it as well?

## Post 148760 by Necropheus — 2025-08-27T20:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148760#p148760 | page 11 | era: pre-1.18.1 -->

> **Untakenusername wrote: Wed Aug 27, 2025 1:36 am**
> It's a marked improvement and I'd take it or otherwise settle if you didn't want to work on it more. The perfectionist side of me says: The curl around the breasts is 'Backwards' - the spirals should ideally come from the flanks like in the original, and move in from underneath - I'd made the tattoo further away from the ribs as I felt it looked better. It's perfectly fine if the nipples end up covered or mostly covered by the tattoo (Despite perhaps being 'against' the core idea of the patch.) - it's the illusion of being 'clothed'. It's also probably why I'd add some kind of thong-looking tattoo in the front. I'd feel it keeps with the 'spirit' of both. Similar to how some artists of a particular persuasion draw Midna's markings (From the Legend of Zelda, Twilight Princess).

The Thing is that i dont even play on Turtle Wow but on some other vanilla hardcore server. I am just here for the Mod Community. Even if it might be a nice Project, it would be a VERY altruistic one, since i wont see any of these when playing myself. How many Donation Skins are there even?

## Post 148857 by Untakenusername — 2025-08-28T07:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148857#p148857 | page 11 | era: pre-1.18.1 -->

> **Necropheus wrote: Wed Aug 27, 2025 8:30 pm**
> The Thing is that i dont even play on Turtle Wow but on some other vanilla hardcore server. I am just here for the Mod Community. Even if it might be a nice Project, it would be a VERY altruistic one, since i wont see any of these when playing myself. How many Donation Skins are there even?

I see. That's quite fair. There are several donation skins, and while I can't give you an exact number, I'd say at least 50 - more if you count Illusion skins like the Dryad, Harpy, and Naga... Though I don't think they'd need any skins.

## Post 149059 by Nuptrator — 2025-08-29T03:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149059#p149059 | page 11 | era: pre-1.18.1 -->

Hi, is it possible to use this mod in other clients, such as Project Ascension, or does anyone know of one?

## Post 149150 by metakin — 2025-08-29T14:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149150#p149150 | page 12 | era: pre-1.18.1 -->

> **Watchers3d wrote: Wed Aug 27, 2025 7:00 am**
> No, not for now  smiling_turtle_head

Hello again! Sorry for the question :) Is it very complicated to port this specific mod to another HD client, for example, Epoch? They also released the HD package, but when you add your upgrade, the models simply disappear. Is there any way to make them compatible again? It's version 3.3.5.   satisfied_turtle

## Post 149210 by Watchers3d (Barrens Chat Casualty) — 2025-08-29T19:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149210#p149210 | page 12 | era: pre-1.18.1 -->

> **metakin wrote: Fri Aug 29, 2025 2:41 pm**
> > **Watchers3d wrote: Wed Aug 27, 2025 7:00 am**
> > No, not for now  smiling_turtle_head
>
>   Hello again! Sorry for the question :) Is it very complicated to port this specific mod to another HD client, for example, Epoch? They also released the HD package, but when you add your upgrade, the models simply disappear. Is there any way to make them compatible again? It's version 3.3.5.   satisfied_turtle

Greetings, metakin  smiling_turtle_head

You don't need to port it to 3.3.5 client. You can just take WotLK m2s from this topic, put them in mpq archive an boot the game up. There is a but of, course. WotLK client polygon limit per m2 is is the same, as it is in vanilla, and it has more geosets per character model on top of it - boots, belts, pants, hairstyles, etc. A Little Extra is filled to the brim as is, without any additions.

So it's easier and better pretty much to either start from scratch (it being Ascension HD backport model), or getting up to speed with someone else's, similar in nature project for WotLK, to partially merge it with existing Ascension HD backport model. They way of handling textures differs from HD Project to HD Project. Here, we do it like we do. Ascension may approach it differently. So, UVs are the first in question and because of that, i.e. HD backport model from Ascension.

## Post 149234 by metakin — 2025-08-29T21:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149234#p149234 | page 12 | era: pre-1.18.1 -->

> **Watchers3d wrote: Fri Aug 29, 2025 7:35 pm**
> > **metakin wrote: Fri Aug 29, 2025 2:41 pm**
> > > **Watchers3d wrote: Wed Aug 27, 2025 7:00 am**
> > > No, not for now  smiling_turtle_head
> >
> >   Hello again! Sorry for the question :) Is it very complicated to port this specific mod to another HD client, for example, Epoch? They also released the HD package, but when you add your upgrade, the models simply disappear. Is there any way to make them compatible again? It's version 3.3.5.   satisfied_turtle
>
>   Greetings, metakin  smiling_turtle_head
>
>  You don't need to port it to 3.3.5 client. You can just take WotLK m2s from this topic, put them in mpq archive an boot the game up. There is a but of, course. WotLK client polygon limit per m2 is is the same, as it is in vanilla, and it has more geosets per character model on top of it - boots, belts, pants, hairstyles, etc. A Little Extra is filled to the brim as is, without any additions.
>
>  So it's easier and better pretty much to either start from scratch (it being Ascension HD backport model), or getting up to speed with someone else's, similar in nature project for WotLK, to partially merge it with existing Ascension HD backport model. They way of handling textures differs from HD Project to HD Project. Here, we do it like we do. Ascension may approach it differently. So, UVs are the first in question and because of that, i.e. HD backport model from Ascension.

It's a real shame that there isn't a "A little extra for Females" for WOLTK HD :c I've looked in several places but nothing, only for the classic textures, but not for HD clients :c

## Post 149816 by Nelkel — 2025-09-02T02:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149816#p149816 | page 12 | era: pre-1.18.1 -->

> **Narja wrote: Thu Jul 10, 2025 2:51 am**
> Just added a little bit more to the human models and replaced the robes model for a 'mini skirt'
>  [https://drive.google.com/file/d/1-jfXLT ... sp=sharing](https://drive.google.com/file/d/1-jfXLTUcQXrelMM5tMIRJTnL0bz6n_rm/view?usp=sharing)

I would like to know how you did the robe thing. I'm playing around with models and it's not working out for me.

## Post 149979 by Ump45 — 2025-09-03T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149979#p149979 | page 12 | era: pre-1.18.1 -->

anyone know if its possible to model swap from male to a female with this enabled?

## Post 150096 by Vardalhug — 2025-09-03T19:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150096#p150096 | page 12 | era: pre-1.18.1 -->

> **metakin wrote: Fri Aug 29, 2025 9:34 pm**
> It's a real shame that there isn't a "A little extra for Females" for WOLTK HD :c I've looked in several places but nothing, only for the classic textures, but not for HD clients :c

If anyone ever finds this patch for WOLTK HD or is able to do it, I'm interested too.   smiling_turtle

*Last edited by Vardalhug on Sat Sep 06, 2025 7:23 pm, edited 1 time in total.*

## Post 150243 by Narja — 2025-09-04T23:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150243#p150243 | page 12 | era: pre-1.18.1 -->

> **Lucyhardcore wrote: Wed Jul 16, 2025 5:46 am**
> Hello! when pressing Z for weapon equip / unequip the animations seems broken, nothing happens

Happens to me too, i dont know what exactly i broke   unhappy_turtle_head

> **Nelkel wrote: Tue Sep 02, 2025 2:34 am**
> I would like to know how you did the robe thing. I'm playing around with models and it's not working out for me.

Extruding from the waist and adding the weight paint for it to deform. Then combining this new geometry with a clone of the legs mesh, so they don't disappear. After that i changed the uvmaps to show the chin texture on the legs, because is the only skin that never gets covered by texture armor i think. I did not put the effort to fix the normals tho.
Later i found out the wotlk version already has a 'skirt' geoset for chest pieces that go beyond the waist, like a loose shirt, maybe using that one might be better.

## Post 150250 by Watchers3d (Barrens Chat Casualty) — 2025-09-05T00:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150250#p150250 | page 12 | era: pre-1.18.1 -->

> **Narja wrote: Thu Sep 04, 2025 11:05 pm**
> Happens to me too, i dont know what exactly i broke   unhappy_turtle_head

Expand the spoiler in topic header to learn more about this. You can either fix it like it's described there, or do the same procedure within Blender, before the model is exported. Which can be more convenient, since you won't have to do this every time with every export+backport.

## Post 150676 by Cronodougs — 2025-09-07T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150676#p150676 | page 12 | era: pre-1.18.1 -->

The result is really cool. Do you plan to add another 6 races to the game or is your mod considered finished?

Thanks for the mod.

## Post 150716 by Shadowrose22 — 2025-09-07T23:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150716#p150716 | page 12 | era: pre-1.18.1 -->

Please do add the other races

## Post 151082 by Watchers3d (Barrens Chat Casualty) — 2025-09-10T06:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151082#p151082 | page 12 | era: pre-1.18.1 -->

Patch-A is updated a little bit. Some fixes for mnelf hairstyle color and new npcs textures by Stormhand.

Recently I remade some Auberdine dock for patch-B, you can go check it out, too
[viewtopic.php?t=21355](https://forum.turtlecraft.gg/viewtopic.php?t=21355)

## Post 151286 by Turtledu87 — 2025-09-11T14:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151286#p151286 | page 12 | era: pre-1.18.1 -->

Did you know that your patch has an influence on people’s faction choice? Maybe it would be cool to add female orcs to balance that xD (no joke)

## Post 151328 by Sotpyle — 2025-09-11T19:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151328#p151328 | page 12 | era: pre-1.18.1 -->

Would it be possible to use the patches from Azerothica, and then use them for the models?

## Post 151555 by Gmarguelles — 2025-09-13T11:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151555#p151555 | page 12 | era: pre-1.18.1 -->

Is it possible to add high heels to the female characters? (Like stilettos)

## Post 151623 by Fatalframe — 2025-09-13T22:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151623#p151623 | page 12 | era: pre-1.18.1 -->

I am having a problem with the newer patch to load as it won't do anything at all. The only one working is the other download.

## Post 152205 by Gmarguelles — 2025-09-18T08:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152205#p152205 | page 12 | era: pre-1.18.1 -->

Is it possible to add high heels for the female characters? I attached an example, back in OG Classic I found an addon from Darknest that did this, is this something doable?
Also there was a thicker female human mod, are there plans for thicker NE and HE?

Thank you!

![Image](https://i.imgur.com/RAqWJmP.png)

## Post 152324 by Shadowrose22 — 2025-09-18T23:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152324#p152324 | page 12 | era: pre-1.18.1 -->

Does this patch stop broken armor from being hidden?

## Post 152355 by Gmarguelles — 2025-09-19T08:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152355#p152355 | page 12 | era: pre-1.18.1 -->

> **Narja wrote: Thu Jul 10, 2025 2:51 am**
> Just added a little bit more to the human models and replaced the robes model for a 'mini skirt'
>  [https://drive.google.com/file/d/1-jfXLT ... sp=sharing](https://drive.google.com/file/d/1-jfXLTUcQXrelMM5tMIRJTnL0bz6n_rm/view?usp=sharing)

Hey Narja!

May I request one without the skirt mod and maybe one with breasts the size of "A little bit extra"? They are kind of big (Which is no problem) its just the way they stay up like torpedos.

## Post 152375 by Cattoknees — 2025-09-19T12:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152375#p152375 | page 12 | era: pre-1.18.1 -->

I been trying for a while to get this to work on AscensionWoW and I'm just upsetting myself.

## Post 152622 by Shadowrose22 — 2025-09-22T01:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152622#p152622 | page 12 | era: pre-1.18.1 -->

So have I, I found the classic skins and the hd skins but don't know how to do it

## Post 154258 by Connieg — 2025-10-03T17:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154258#p154258 | page 12 | era: 1.18.1-announced-pre-release -->

Could this be used on other clients that use HD? Such as Ascension?

## Post 154314 by Korythael — 2025-10-04T10:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154314#p154314 | page 12 | era: 1.18.1-announced-pre-release -->

can I use A Little Extra Less Thicc Version (F) and A Little Extra Retextured (U) with all patches from A New Era of HD Awaits!?

## Post 154316 by Watchers3d (Barrens Chat Casualty) — 2025-10-04T11:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154316#p154316 | page 12 | era: 1.18.1-announced-pre-release -->

> **Korythael wrote: Sat Oct 04, 2025 10:29 am**
> can I use A Little Extra Less Thicc Version (F) and A Little Extra Retextured (U) with all patches from A New Era of HD Awaits!?

Yes

## Post 154332 by Korythael — 2025-10-04T14:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154332#p154332 | page 12 | era: 1.18.1-announced-pre-release -->

> **Watchers3d wrote: Sat Oct 04, 2025 11:06 am**
> > **Korythael wrote: Sat Oct 04, 2025 10:29 am**
> > can I use A Little Extra Less Thicc Version (F) and A Little Extra Retextured (U) with all patches from A New Era of HD Awaits!?
>
>   Yes

Thank you very much

I noticed that if I create a character while using patches and then remove them, the appearance changes completely (face and hairstyle look different. This happened with a Human). If I create the character without patches and then apply them afterwards, everything matches correctly. The issue only happens when I create the character with patches already applied. Could this be checked? I dunno if It only happens with Humans

I think the same thing happens with other texture packs. Does it only happen with Humans? With a Night Elf it matched correctly for me.

## Post 154351 by Azcron (Patch Note Conspiracy Theorist) — 2025-10-04T17:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154351#p154351 | page 12 | era: 1.18.1-announced-pre-release -->

> **Korythael wrote: Sat Oct 04, 2025 2:06 pm**
> > **Watchers3d wrote: Sat Oct 04, 2025 11:06 am**
> > > **Korythael wrote: Sat Oct 04, 2025 10:29 am**
> > > can I use A Little Extra Less Thicc Version (F) and A Little Extra Retextured (U) with all patches from A New Era of HD Awaits!?
> >
> >   Yes
>
>   Thank you very much
>
>  I noticed that if I create a character while using patches and then remove them, the appearance changes completely (face and hairstyle look different. This happened with a Human). If I create the character without patches and then apply them afterwards, everything matches correctly. The issue only happens when I create the character with patches already applied. Could this be checked? I dunno if It only happens with Humans
>
>  I think the same thing happens with other texture packs. Does it only happen with Humans? With a Night Elf it matched correctly for me.

This is from the HD mod. It does not support the new hairstyles/customizations that Twow added so it just cycles older hairs/face. Not sure if they intend on addressing this. This has been the case for years with every HD mod.

## Post 154358 by Watchers3d (Barrens Chat Casualty) — 2025-10-04T18:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154358#p154358 | page 12 | era: 1.18.1-announced-pre-release -->

> **Azcron wrote: Sat Oct 04, 2025 5:29 pm**
> This is from the HD mod. It does not support the new hairstyles/customizations that Twow added so it just cycles older hairs/face. Not sure if they intend on addressing this. This has been the case for years with every HD mod.

Not for years, but it will be a year 2 months from now since I cycled them, yes.

## Post 154388 by Tafkam — 2025-10-05T04:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154388#p154388 | page 12 | era: 1.18.1-announced-pre-release -->

Will we be getting forsaken in the future? I saw that it was an earlier plan.

## Post 155046 by Gmarguelles — 2025-10-10T07:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155046#p155046 | page 12 | era: 1.18.1-announced-pre-release -->

Hi! Sorry to ask so many things hahaha, I know you all must be super busy to work on this patch but I figure there is no harm in posting still.

Are you able to get rid of the underwear with the donation skins? I love this mod but sometimes I have to turn off the Scarlet, and Human Necromancer skin due to the underwear being visible on the armor itself.

Thanks again and I am willing to donate if needed!

## Post 155130 by Watchers3d (Barrens Chat Casualty) — 2025-10-11T01:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155130#p155130 | page 12 | era: 1.18.1-announced-pre-release -->

> **Gmarguelles wrote: Fri Oct 10, 2025 7:10 am**
> Hi! Sorry to ask so many things hahaha, I know you all must be super busy to work on this patch but I figure there is no harm in posting still.
>
>  Are you able to get rid of the underwear with the donation skins? I love this mod but sometimes I have to turn off the Scarlet, and Human Necromancer skin due to the underwear being visible on the armor itself.
>
>  Thanks again and I am willing to donate if needed!

Greetings  smiling_turtle_head

Previously I didn't intend this mod to have an alternative set of body textures, due to various restrictions vanilla client has for textures. But it since changed now that we have patch-U from [Necropheus](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=751149) . I think it would be better if Necropheus is willing to pledge his time for a partial retexture of donation shop skins. I don't know if he is willing, but you certainly can ask   smiling_turtle_head

## Post 156257 by Rofos — 2025-10-20T07:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156257#p156257 | page 12 | era: 1.18.1-announced-pre-release -->

Hey, Wathcers3d.

Vish and Isfir created a new .dll file for TWoW called VanillaHelpers that increases the texture and memory limits of the game.
[Faithful Upscale thread](https://forum.turtlecraft.gg/viewtopic.php?t=22090)

Since 256x256 limitation is no longer a problem for our client is it possible to update this mod with 1024x1024 textures?

Thanks in advance

## Post 156305 by Gmarguelles — 2025-10-20T13:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156305#p156305 | page 12 | era: 1.18.1-announced-pre-release -->

[Necropheus](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=751149) thoughts? Please? <3

> **Watchers3d wrote: Sat Oct 11, 2025 1:10 am**
> > **Gmarguelles wrote: Fri Oct 10, 2025 7:10 am**
> > Hi! Sorry to ask so many things hahaha, I know you all must be super busy to work on this patch but I figure there is no harm in posting still.
> >
> >  Are you able to get rid of the underwear with the donation skins? I love this mod but sometimes I have to turn off the Scarlet, and Human Necromancer skin due to the underwear being visible on the armor itself.
> >
> >  Thanks again and I am willing to donate if needed!
>
>   Greetings  smiling_turtle_head
>
>  Previously I didn't intend this mod to have an alternative set of body textures, due to various restrictions vanilla client has for textures. But it since changed now that we have patch-U from [Necropheus](https://forum.turtlecraft.gg/memberlist.php?mode=viewprofile&u=751149) . I think it would be better if Necropheus is willing to pledge his time for a partial retexture of donation shop skins. I don't know if he is willing, but you certainly can ask   smiling_turtle_head

## Post 156310 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2025-10-20T15:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156310#p156310 | page 12 | era: 1.18.1-announced-pre-release -->

> **Rofos wrote: Mon Oct 20, 2025 7:16 am**
> Hey, Wathcers3d.
>
>  Vish and Isfir created a new .dll file for TWoW called VanillaHelpers that increases the texture and memory limits of the game.
>  [Faithful Upscale thread](https://forum.turtlecraft.gg/viewtopic.php?t=22090)
>
>  Since 256x256 limitation is no longer a problem for our client is it possible to update this mod with 1024x1024 textures?
>
>  Thanks in advance

turtle_in_love_head

## Post 156393 by Watchers3d (Barrens Chat Casualty) — 2025-10-21T05:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156393#p156393 | page 12 | era: 1.18.1-announced-pre-release -->

> **Rofos wrote: Mon Oct 20, 2025 7:16 am**
> Hey, Wathcers3d.
>
>  Vish and Isfir created a new .dll file for TWoW called VanillaHelpers that increases the texture and memory limits of the game.
>  [Faithful Upscale thread](https://forum.turtlecraft.gg/viewtopic.php?t=22090)
>
>  Since 256x256 limitation is no longer a problem for our client is it possible to update this mod with 1024x1024 textures?
>
>  Thanks in advance

Greetings, Rofos  smiling_turtle_head

Interesting project. I'll consider alternative set of upscaled textures if I ever get around to WotLK version, since this mod is apparently a WotLK backport. A Little Extra never really dealt with textures, due to various restrictions vanilla client has for textures, while counting on HD Project to provide textures for HD character models. While mpq archive right now has some textures, they are related to minor, barely noticeable things. In this case, I can remove everything except the models, so if HD Project ever gets a compatibility patch for Faithful Upscale, a little extra will be able to support both simultaneously, upscaled version and not.

## Post 157327 by Mikuart1 — 2025-10-27T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157327#p157327 | page 12 | era: 1.18.1-announced-pre-release -->

Hello, I don't know if some people could be interest or if Im allowed to post this here but I tried making a version for Project Ascension, there is only the troll version for the moment, it's not a 1:1 similar mod, it keep the same polycount as default Project Ascension HD Mod :
___________________

![Image](https://i.imgur.com/lW1s59G.png)
___________________
 **[Download](https://mega.nz/folder/TFdTxSqY#M6Z1u9_S68dVi2ypy4Mrjw)**

## Post 157368 by Hydrostations — 2025-10-27T18:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157368#p157368 | page 12 | era: 1.18.1-announced-pre-release -->

Another vote to see this beautiful mod ported over to Ascension.

## Post 157570 by Orielux69 — 2025-10-28T18:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157570#p157570 | page 13 | era: 1.18.1-announced-pre-release -->

PLease, please port it to Ascension! If that is a wrong place to post Your progress, let us know where to find it. keep it up!!

## Post 157644 by Snowbunnie — 2025-10-29T08:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157644#p157644 | page 13 | era: 1.18.1-announced-pre-release -->

I would like to see that mod in Ascension as well :)

## Post 157650 by Rofos — 2025-10-29T09:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157650#p157650 | page 13 | era: 1.18.1-announced-pre-release -->

From what I'm getting it's nearly impossible to up-port 1.12.1 stuff to 3.3.5 based clients. The only way is to take downported to 3.3.5 Legion models and do the same job from scratch.

## Post 157725 by Tallborn55 — 2025-10-29T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157725#p157725 | page 13 | era: 1.18.1-announced-pre-release -->

> **Mikuart1 wrote: Mon Oct 27, 2025 2:33 pm**
> Hello, I don't know if some people could be interest or if Im allowed to post this here but I tried making a version for Project Ascension, there is only the troll version for the moment, it's not a 1:1 similar mod, it keep the same polycount as default Project Ascension HD Mod :
>  ___________________
>
>  ![Image](https://i.imgur.com/lW1s59G.png)
>  ___________________
>  **[Download](https://mega.nz/folder/TFdTxSqY#M6Z1u9_S68dVi2ypy4Mrjw)**

Yes I am really interested thank you for porting it   smiling_turtle_head

## Post 157862 by Watchers3d (Barrens Chat Casualty) — 2025-10-30T17:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157862#p157862 | page 13 | era: 1.18.1-announced-pre-release -->

Patch-F is updated to support upscaled textures Stormhand is doing for Faithful Upscale compatibility patch. Everything is the same for now, I just took all the textures out of the patch-F, so it can be used both with and without upcoming Faithful Upscale compatibility patch.

As for Ascension version, Mikuart1 is making one. I'll give it a shot too further down the line. WotLK and custom hairstyles is long overdue, too. For now, I need to address something else.

## Post 157940 by Ctangod — 2025-10-31T13:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157940#p157940 | page 13 | era: 1.18.1-announced-pre-release -->

Fair warning for people modding Ascension, I've made my own A little extra type mod for Ascension in the past and from my experience WoW Blender Studios is not compatible with Ascension's Data folder layout and I was unsuccessful in importing converted Legion models to Blender for editing.

While I was successful in creating the mod, I had to use WOD models with WBS set to a Chromiecraft/WOTLK HD client in order to properly use WBS, however the end result is that the modified models will work but all Legion era armors will have missing attachments as WOTLK clients can't natively interpret those attachments and here I'm not sure if Ascension's workaround this issue is hooked into their HD models or through some other means.

I have attached an image of my modified Belf and I would be willing to share the mod/m2 files with anyone who wants to use or modify it for their own needs, however I hope somebody can figure out how to make Legion armor work properly with such a mod. My mod has a little extra for Humans, Draenei, Nelfs, Orcs, Belfs Trolls and Forsaken (which use boneless models although there is a slight bug with one of the boots models I didn't bother fixing).

<https://imgur.com/a/LwG8KGL>

## Post 157941 by Ctangod — 2025-10-31T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157941#p157941 | page 13 | era: 1.18.1-announced-pre-release -->

Also, since I'm offering my modding tism, I am willing to make a little extra mod for Turtle WoW for Orcs, Tauren, Forsaken and Dwarfs if somebody can provide me with properly retroported m2 files for them since my attempts have had UV issues I couldn't fix because I have no idea how to get the textures to work in WBS or the animations are very twitchy and sped up for some reason.

## Post 158127 by Ctangod — 2025-11-02T13:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158127#p158127 | page 13 | era: 1.18.1-announced-pre-release -->

Some update on making the mod for Turtle WoW: I've managed to solve the animation issues with Orcs via a better import, however the faces have broken UVs and eye effects and the "Speak" animation results in an explosion of polygons and I have no idea how to fix either of these.

I've also been unsuccessful in up porting the HD models to WOTLK to import those and minimize errors, so at this point all I can do is ask/wait/beg for someone like watcher to share an m2 or .blend file that shouldn't have these issues (I was success in editing watcher's raw files with minimal issues, my nelf's holster animations outside of combat don't move the equipped weapons for example).

## Post 158183 by Watchers3d (Barrens Chat Casualty) — 2025-11-03T09:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158183#p158183 | page 13 | era: 1.18.1-announced-pre-release -->

> **Ctangod wrote: Sun Nov 02, 2025 1:36 pm**
> however the faces have broken UVs and eye effects and the "Speak" animation results in an explosion of polygons and I have no idea how to fix either of these.
>
>  my nelf's holster animations outside of combat don't move the equipped weapons for example

Greetings, Ctangod  smiling_turtle_head

Both of these are explained in the topic header.

Start with a simple backport first. Take WoD models from the topic header and multiconverter edited by me slightly - it's at the topic header, too. Drag and drop the model in question to multiconverter and press fix. Import the result to WBS. Delete unnecessary for Vanilla geosets - belts, boots, capes, hairstyles and so on. Fix UVs (again, topic header has a guide) and fix sheathing either by suggested method in the topic header, or the same can be done with WBS. Export the result and convert it to vanilla.

Vanilla model come as aio. No .skin or .anim files are needed in mpq archive when you're done.

## Post 158189 by Ctangod — 2025-11-03T11:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158189#p158189 | page 13 | era: 1.18.1-announced-pre-release -->

> **Watchers3d wrote: Mon Nov 03, 2025 9:57 am**
> > **Ctangod wrote: Sun Nov 02, 2025 1:36 pm**
> > however the faces have broken UVs and eye effects and the "Speak" animation results in an explosion of polygons and I have no idea how to fix either of these.
> >
> >  my nelf's holster animations outside of combat don't move the equipped weapons for example
>
>   Greetings, Ctangod  smiling_turtle_head
>
>  Both of these are explained in the topic header.
>
>  Start with a simple backport first. Take WoD models from the topic header and multiconverter edited by me slightly - it's at the topic header, too. Drag and drop the model in question to multiconverter and press fix. Import the result to WBS. Delete unnecessary for Vanilla geosets - belts, boots, capes, hairstyles and so on. Fix UVs (again, topic header has a guide) and fix sheathing either by suggested method in the topic header, or the same can be done with WBS. Export the result and convert it to vanilla.
>
>  Vanilla model come as aio. No .skin or .anim files are needed in mpq archive when you're done.

Thank you for the reply, I did read the header for the explanation, but my Blender crashes whenever I try to apply the textures so I can check the UVs.

I will try the animation fix though.

## Post 158555 by Servo — 2025-11-06T06:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158555#p158555 | page 13 | era: 1.18.1-announced-pre-release -->

> **Necropheus wrote: Fri Jun 06, 2025 6:13 pm**
> Just updated the Textures again. Now all Turtle exclusive Skintones are included as well. Oh, and i added High elves! So for now my Patch is finished until there are more little extra Models.
>
>  Have fun! Same Link as usual:
>
>  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)

Any chance for an updated version which is has the same texture resolution as the lasted version of the [HD Patch: Reforged](https://forum.turtlecraft.gg/viewtopic.php?t=21355)? (PATCH-U: Ultra HD Character Textures & Gear)

## Post 158725 by Watchers3d (Barrens Chat Casualty) — 2025-11-07T03:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158725#p158725 | page 13 | era: 1.18.1-announced-pre-release -->

Small hopefully fixes related to high elf camera while mounted

## Post 158792 by Necropheus — 2025-11-07T17:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158792#p158792 | page 13 | era: 1.18.1-announced-pre-release -->

> **Servo wrote: Thu Nov 06, 2025 6:51 am**
> > **Necropheus wrote: Fri Jun 06, 2025 6:13 pm**
> > Just updated the Textures again. Now all Turtle exclusive Skintones are included as well. Oh, and i added High elves! So for now my Patch is finished until there are more little extra Models.
> >
> >  Have fun! Same Link as usual:
> >
> >  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)
>
>   Any chance for an updated version which is has the same texture resolution as the lasted version of the [HD Patch: Reforged](https://forum.turtlecraft.gg/viewtopic.php?t=21355)? (PATCH-U: Ultra HD Character Textures & Gear)

I could not use the Texture Upscaling so far (i am not playing on turtle but on another vanilla hardcore server). So when all of this works without having the Turtle Client i might give it a shot.

## Post 158879 by MightyWalrus — 2025-11-08T09:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158879#p158879 | page 13 | era: 1.18.1-announced-pre-release -->

Hi there! I've encountered an issue. I tried Reforged bundle of patches copying all of my patches including U into other folder. But since Reforged isn't compatible with patch-U I decided to return to my previous addons. Deleted all of Reforged patches, copypasted my old ones and now I don't have sexy bits from patch U on my characters. Just smooth skin without underwear. Cleared WDB several times, reloaded launcher and still nothing. Don't use upscaler but use VanillaHelpers.dll. How may I fix it?

## Post 158980 by Cidertime — 2025-11-09T11:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158980#p158980 | page 13 | era: 1.18.1-announced-pre-release -->

Hey, nice work! Is there any chance to make the curves a little smaller (ye i know about less thicc but its still huge)? Especially the butt, because from the side it looks a little unnatural. I would be very grateful!

## Post 159283 by Ctangod — 2025-11-12T07:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159283#p159283 | page 13 | era: 1.18.1-announced-pre-release -->

> **Mikuart1 wrote: Mon Oct 27, 2025 2:33 pm**
> Hello, I don't know if some people could be interest or if Im allowed to post this here but I tried making a version for Project Ascension, there is only the troll version for the moment, it's not a 1:1 similar mod, it keep the same polycount as default Project Ascension HD Mod :
>  ___________________
>
>  ![Image](https://i.imgur.com/lW1s59G.png)
>  ___________________
>  **[Download](https://mega.nz/folder/TFdTxSqY#M6Z1u9_S68dVi2ypy4Mrjw)**

Hey there, I've come with some good and bad news for Ascension modding!

The good news is that I've discovered how to make character model edits without breaking Legion era armors and causing them to lose all their cool attachments and armor pieces. Patch-Q is the second HD character mpq that Ascension uses, extracting all the character files from this patch will allow you to import them to WBS in Blender, edit and export them with no issues (bearing in mind the restrictive WOTLK mpq polygon limit). Replacing the m2 and skin file in Patch-Q with your edited ones will work without a hitch.

The bad news is that the Legion era armor bits are not based on the size or control points of the m2 Character files so the modified models will clip through them as these armor bits will keep their original positions. I have no idea how to edit their position/model sadly and I can only speculate on how they might have made them work for WOTLK Clients, my best guess going by what information I could find regarding retroporting Legion Armors is that they are somehow assembled as a spell effect on your character, but I am not sure.

Hopefully this information might help you some way or future modding wizards.

## Post 159850 by Necropheus — 2025-11-16T20:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159850#p159850 | page 13 | era: 1.18.1-announced-pre-release -->

> **Servo wrote: Thu Nov 06, 2025 6:51 am**
> > **Necropheus wrote: Fri Jun 06, 2025 6:13 pm**
> > Just updated the Textures again. Now all Turtle exclusive Skintones are included as well. Oh, and i added High elves! So for now my Patch is finished until there are more little extra Models.
> >
> >  Have fun! Same Link as usual:
> >
> >  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)
>
>   Any chance for an updated version which is has the same texture resolution as the lasted version of the [HD Patch: Reforged](https://forum.turtlecraft.gg/viewtopic.php?t=21355)? (PATCH-U: Ultra HD Character Textures & Gear)

Okay everyone. I did it. I made a new upscaled Version to match the HD Patch: Reforged Bundle.

Keep in mind that you need the faithful upscale Mod (as it is also included in the HD Reforged post) to use the upscaled version.

And since the female Highelf Skins Nr 2 and 8 are exactly the same without underwear and the upscaled Textures gave me more Possibilities to add Details I simply added some jewelery to distinguish those. Also renamed the File to Patch-Y. Have fun. Uploaded in the same Link as the old one:

[https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)

*Last edited by Necropheus on Sun Nov 16, 2025 11:03 pm, edited 1 time in total.*

## Post 159854 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2025-11-16T22:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159854#p159854 | page 13 | era: 1.18.1-announced-pre-release -->

> **Necropheus wrote: Sun Nov 16, 2025 8:43 pm**
> > **Servo wrote: Thu Nov 06, 2025 6:51 am**
> > > **Necropheus wrote: Fri Jun 06, 2025 6:13 pm**
> > > Just updated the Textures again. Now all Turtle exclusive Skintones are included as well. Oh, and i added High elves! So for now my Patch is finished until there are more little extra Models.
> > >
> > >  Have fun! Same Link as usual:
> > >
> > >  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)
> >
> >   Any chance for an updated version which is has the same texture resolution as the lasted version of the [HD Patch: Reforged](https://forum.turtlecraft.gg/viewtopic.php?t=21355)? (PATCH-U: Ultra HD Character Textures & Gear)
>
>   Okay everyone. I did it.
>
>  I made a new upscaled Version to match the HD Patch: Reforged Bundle. And since the female Highelf Skins Nr 2 and 8 are exactly the same without underwear and the upscaled Textures gave me more Possibilities to add Details I simply added some jewelery to distinguish those. Also renamed the File to Patch-Y. Have fun. Uploaded in the same Link as the old one:
>
>  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)

You should probably mention that:
 - this is the NAKED patch (removing underwear), not related in any way to "a little extra"...
 - it ONLY works with FULL patch-U (not performance patch-U)

## Post 159914 by Servo — 2025-11-17T15:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159914#p159914 | page 13 | era: 1.18.1-announced-pre-release -->

> **Necropheus wrote: Sun Nov 16, 2025 8:43 pm**
> Okay everyone. I did it. I made a new upscaled Version to match the HD Patch: Reforged Bundle.
>
>  Keep in mind that you need the faithful upscale Mod (as it is also included in the HD Reforged post) to use the upscaled version.
>
>  And since the female Highelf Skins Nr 2 and 8 are exactly the same without underwear and the upscaled Textures gave me more Possibilities to add Details I simply added some jewelery to distinguish those. Also renamed the File to Patch-Y. Have fun. Uploaded in the same Link as the old one:
>
>  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)

Nice thanks, would it be possible to get a version thats compatible with the Patch-U-Performance variant?^^ because the non performance variant has a lot of crashes in cities. I think they halfed the resolution of the textures.

## Post 159941 by Necropheus — 2025-11-17T21:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159941#p159941 | page 13 | era: 1.18.1-announced-pre-release -->

> **Servo wrote: Mon Nov 17, 2025 3:42 pm**
> > **Necropheus wrote: Sun Nov 16, 2025 8:43 pm**
> > Okay everyone. I did it. I made a new upscaled Version to match the HD Patch: Reforged Bundle.
> >
> >  Keep in mind that you need the faithful upscale Mod (as it is also included in the HD Reforged post) to use the upscaled version.
> >
> >  And since the female Highelf Skins Nr 2 and 8 are exactly the same without underwear and the upscaled Textures gave me more Possibilities to add Details I simply added some jewelery to distinguish those. Also renamed the File to Patch-Y. Have fun. Uploaded in the same Link as the old one:
> >
> >  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)
>
>   Nice thanks, would it be possible to get a version thats compatible with the Patch-U-Performance variant?^^ because the non performance variant has a lot of crashes in cities. I think they halfed the resolution of the textures.

downscaling textures in this case is way more trickier than it sounds. If i just scale them down, details get lost and everything will probably look off. To do it properly i would have to redo everything for that specific resolution. I will look into it but dont think that i will do a third version if i have to redo everything.

EDIT: just tried it with different resampling methods and the results arent good enough without a full rework imho. Most downscaled skins look somehow like this: <https://freeimage.host/i/fJj0dJt>

## Post 159996 by Ctangod — 2025-11-18T21:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159996#p159996 | page 13 | era: 1.18.1-announced-pre-release -->

Alright everyone, after spending quite some time messing around with Ascension files, I have remade my old mod and managed to preserve all the Legion era armors and edit them to fit the little extra added to the gals.

Turns out Ascension has edited the m2s to include the 3D armor attachments as spells cast on the player model and I was able to edit the position of them (but not for Troll, idk which point controls them) via the attachment points added.

I'm leaving here the download link to the mod itself:
[https://mega.nz/file/JJNClAKQ#F5YV-JFQC ... uvYnqP-bA4](https://mega.nz/file/JJNClAKQ#F5YV-JFQCqaxKy7IBPcmpAeBxa46OmlqXuvYnqP-bA4)

And a link to my raw files:
<https://mega.nz/folder/wREGzbiB#2L5zJDrA_pz0LDx3bCQlPw>

Pics of the models:
<https://mega.nz/folder/UZsy1IxY#WHhMwEmviShXUqNICmrhFA>

Feel free to edit and adapt the mod as needed and also feel free to ask questions if you have any.

## Post 159997 by Ctangod — 2025-11-18T21:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159997#p159997 | page 13 | era: 1.18.1-announced-pre-release -->

Alright everyone, after spending quite some time messing around with Ascension files, I have remade my old mod and managed to preserve all the Legion era armors and edit them to fit the little extra added to the gals.

Turns out Ascension has edited the m2s to include the 3D armor attachments as spells cast on the player model and I was able to edit the position of them (but not for Troll, idk which point controls them) via the attachment points added.

I'm leaving here the download link to the mod itself:
[https://mega.nz/file/JJNClAKQ#F5YV-JFQC ... uvYnqP-bA4](https://mega.nz/file/JJNClAKQ#F5YV-JFQCqaxKy7IBPcmpAeBxa46OmlqXuvYnqP-bA4)

And a link to my raw files:
<https://mega.nz/folder/wREGzbiB#2L5zJDrA_pz0LDx3bCQlPw>

Pics of the models:
<https://mega.nz/folder/UZsy1IxY#WHhMwEmviShXUqNICmrhFA>

Feel free to edit and adapt the mod as needed and also feel free to ask questions if you have any.

## Post 160040 by Cidertime — 2025-11-19T09:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160040#p160040 | page 13 | era: 1.18.1-announced-pre-release -->

> **Ctangod wrote: Tue Nov 18, 2025 9:14 pm**
> Alright everyone, after spending quite some time messing around with Ascension files, I have remade my old mod and managed to preserve all the Legion era armors and edit them to fit the little extra added to the gals.
>
>  Turns out Ascension has edited the m2s to include the 3D armor attachments as spells cast on the player model and I was able to edit the position of them (but not for Troll, idk which point controls them) via the attachment points added.
>
>  I'm leaving here the download link to the mod itself:
>  [https://mega.nz/file/JJNClAKQ#F5YV-JFQC ... uvYnqP-bA4](https://mega.nz/file/JJNClAKQ#F5YV-JFQCqaxKy7IBPcmpAeBxa46OmlqXuvYnqP-bA4)
>
>  And a link to my raw files:
>  <https://mega.nz/folder/wREGzbiB#2L5zJDrA_pz0LDx3bCQlPw>
>
>  Pics of the models:
>  <https://mega.nz/folder/UZsy1IxY#WHhMwEmviShXUqNICmrhFA>
>
>  Feel free to edit and adapt the mod as needed and also feel free to ask questions if you have any.

does it works by itself? Cuz my game have crashed everytime when im logging in

## Post 160062 by Dragenfell — 2025-11-19T13:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160062#p160062 | page 13 | era: 1.18.1-announced-pre-release -->

> **Ctangod wrote: Tue Nov 18, 2025 9:14 pm**
> Alright everyone, after spending quite some time messing around with Ascension files, I have remade my old mod and managed to preserve all the Legion era armors and edit them to fit the little extra added to the gals.
>
>  Turns out Ascension has edited the m2s to include the 3D armor attachments as spells cast on the player model and I was able to edit the position of them (but not for Troll, idk which point controls them) via the attachment points added.
>
>  I'm leaving here the download link to the mod itself:
>  [https://mega.nz/file/JJNClAKQ#F5YV-JFQC ... uvYnqP-bA4](https://mega.nz/file/JJNClAKQ#F5YV-JFQCqaxKy7IBPcmpAeBxa46OmlqXuvYnqP-bA4)
>
>  And a link to my raw files:
>  <https://mega.nz/folder/wREGzbiB#2L5zJDrA_pz0LDx3bCQlPw>
>
>  Pics of the models:
>  <https://mega.nz/folder/UZsy1IxY#WHhMwEmviShXUqNICmrhFA>
>
>  Feel free to edit and adapt the mod as needed and also feel free to ask questions if you have any.

The file causes a bright white screen in the character selection window. What order should the file be in?

## Post 160079 by Ctangod — 2025-11-19T15:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160079#p160079 | page 13 | era: 1.18.1-announced-pre-release -->

> **Cidertime wrote: Wed Nov 19, 2025 9:19 am**
> does it works by itself? Cuz my game have crashed everytime when im logging in

It should work just fine, but you need to have HD Characters enabled in the Ascension Launcher.

## Post 160080 by Ctangod — 2025-11-19T15:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160080#p160080 | page 13 | era: 1.18.1-announced-pre-release -->

> **Dragenfell wrote: Wed Nov 19, 2025 1:36 pm**
> The file causes a bright white screen in the character selection window. What order should the file be in?

Leaving the patch name as is will put it nearly last in order and should work without any issues. If you've renamed it, rename it to something that will put it last in order to avoid any issues.

Also make sure the HD characters are enabled in the Ascension launcher.

## Post 160367 by Omongous — 2025-11-23T04:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160367#p160367 | page 13 | era: 1.18.1-announced-pre-release -->

> **Ctangod wrote: Tue Nov 18, 2025 9:14 pm**
> Alright everyone, after spending quite some time messing around with Ascension files, I have remade my old mod and managed to preserve all the Legion era armors and edit them to fit the little extra added to the gals.
>
>  Turns out Ascension has edited the m2s to include the 3D armor attachments as spells cast on the player model and I was able to edit the position of them (but not for Troll, idk which point controls them) via the attachment points added.
>
>  I'm leaving here the download link to the mod itself:
>  [https://mega.nz/file/JJNClAKQ#F5YV-JFQC ... uvYnqP-bA4](https://mega.nz/file/JJNClAKQ#F5YV-JFQCqaxKy7IBPcmpAeBxa46OmlqXuvYnqP-bA4)
>
>  And a link to my raw files:
>  <https://mega.nz/folder/wREGzbiB#2L5zJDrA_pz0LDx3bCQlPw>
>
>  Pics of the models:
>  <https://mega.nz/folder/UZsy1IxY#WHhMwEmviShXUqNICmrhFA>
>
>  Feel free to edit and adapt the mod as needed and also feel free to ask questions if you have any.

Wish the top half was closer in size to the bottom, but this is amazing work non the less, kudos!

## Post 160573 by Incog — 2025-11-24T19:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160573#p160573 | page 13 | era: 1.18.1-announced-pre-release -->

> **Ctangod wrote: Tue Nov 18, 2025 9:14 pm**
> Alright everyone, after spending quite some time messing around with Ascension files, I have remade my old mod and managed to preserve all the Legion era armors and edit them to fit the little extra added to the gals.
>
>  Turns out Ascension has edited the m2s to include the 3D armor attachments as spells cast on the player model and I was able to edit the position of them (but not for Troll, idk which point controls them) via the attachment points added.
>
>  I'm leaving here the download link to the mod itself:
>  [https://mega.nz/file/JJNClAKQ#F5YV-JFQC ... uvYnqP-bA4](https://mega.nz/file/JJNClAKQ#F5YV-JFQCqaxKy7IBPcmpAeBxa46OmlqXuvYnqP-bA4)
>
>  And a link to my raw files:
>  <https://mega.nz/folder/wREGzbiB#2L5zJDrA_pz0LDx3bCQlPw>
>
>  Pics of the models:
>  <https://mega.nz/folder/UZsy1IxY#WHhMwEmviShXUqNICmrhFA>
>
>  Feel free to edit and adapt the mod as needed and also feel free to ask questions if you have any.

Why are the thighs the widest part of these models? Like, seriously, there's 20 lbs of thighs and then there's either barely as wide hips or they're non-existent. Then there's the butt, with a couple of exceptions it's either a passable amount relative to the thighs or it's somehow smaller than the thighs. (Before anyone accuses me of not liking thighs, the problem isn't the size of the thighs but rather the ratio of thighs to hips/butt.)

## Post 161335 by Jbuzick — 2025-12-02T16:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161335#p161335 | page 13 | era: 1.18.1-announced-pre-release -->

Super Great Work!

Request- Forsaken Ladies    smiling_turtle_head

Question: Worked great but the patch changed everyone character's hair style. Anyway to have it not do that?

Thanks again!

## Post 161422 by Watchers3d (Barrens Chat Casualty) — 2025-12-03T11:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161422#p161422 | page 13 | era: 1.18.1-announced-pre-release -->

> **Jbuzick wrote: Tue Dec 02, 2025 4:03 pm**
> Super Great Work!
>
>  Request- Forsaken Ladies    smiling_turtle_head
>
>  Question: Worked great but the patch changed everyone character's hair style. Anyway to have it not do that?
>
>
>  Thanks again!

Greetings, Jbuzick  smiling_turtle_head

Thank you.
The "issue" a little extra shares with patch-A unfortunately. A little extra relies on db files which are stored in patch-A, that's what get hairstyles cycled. After 17.2 the choice was to either cycle vanilla hairstyles again, or to display nothing at all. So I cycled them back then. Patch-A since like September is handled in a different forum topic. Vanilla-WotLK clients are choking on the polygon limit. Only UE or tremendous amount of work can fix this. Could be done, but I (or maybe somebody else) yet have to find this much time to backport almost all HD characters again.

## Post 161435 by RPGnerd (Barrens Chat Casualty) — 2025-12-03T14:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161435#p161435 | page 13 | era: 1.18.1-announced-pre-release -->

Dear Santa, this year I was a good boy. For Christmas, I would like the models of the female tauren and the female gnome with giant tiddys

## Post 161538 by Kerebrien — 2025-12-04T13:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161538#p161538 | page 13 | era: 1.18.1-announced-pre-release -->

Is this mod possible to pull off without having to download all that HD stuff? Highly prefer to retain the classic look.   dead_turtle_head

## Post 161540 by Watchers3d (Barrens Chat Casualty) — 2025-12-04T14:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161540#p161540 | page 13 | era: 1.18.1-announced-pre-release -->

> **Kerebrien wrote: Thu Dec 04, 2025 1:53 pm**
> Is this mod possible to pull off without having to download all that HD stuff? Highly prefer to retain the classic look.   dead_turtle_head

This mod requires patch-A from current hd mod topic.
For similar in spirit mod for SD characters, you can visit [viewtopic.php?t=21547](https://forum.turtlecraft.gg/viewtopic.php?t=21547)

## Post 161554 by Kerebrien — 2025-12-04T14:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161554#p161554 | page 13 | era: 1.18.1-announced-pre-release -->

Thanks a lot!

## Post 161948 by Michralt — 2025-12-07T21:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161948#p161948 | page 13 | era: 1.18.1-announced-pre-release -->

> **Necropheus wrote: Sun Nov 16, 2025 8:43 pm**
> > **Servo wrote: Thu Nov 06, 2025 6:51 am**
> > > **Necropheus wrote: Fri Jun 06, 2025 6:13 pm**
> > > Just updated the Textures again. Now all Turtle exclusive Skintones are included as well. Oh, and i added High elves! So for now my Patch is finished until there are more little extra Models.
> > >
> > >  Have fun! Same Link as usual:
> > >
> > >  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)
> >
> >   Any chance for an updated version which is has the same texture resolution as the lasted version of the [HD Patch: Reforged](https://forum.turtlecraft.gg/viewtopic.php?t=21355)? (PATCH-U: Ultra HD Character Textures & Gear)
>
>   Okay everyone. I did it. I made a new upscaled Version to match the HD Patch: Reforged Bundle.
>
>  Keep in mind that you need the faithful upscale Mod (as it is also included in the HD Reforged post) to use the upscaled version.
>
>  And since the female Highelf Skins Nr 2 and 8 are exactly the same without underwear and the upscaled Textures gave me more Possibilities to add Details I simply added some jewelery to distinguish those. Also renamed the File to Patch-Y. Have fun. Uploaded in the same Link as the old one:
>
>  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)

hello i tried this, i have the whole hd patch with ultra hd characters, but the model looks like this :(
could anyone help me with this
<https://imgur.com/a/4JOlMC1>

## Post 162114 by Necropheus — 2025-12-08T23:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162114#p162114 | page 14 | era: 1.18.1-announced-pre-release -->

> **Michralt wrote: Sun Dec 07, 2025 9:27 pm**
> > **Necropheus wrote: Sun Nov 16, 2025 8:43 pm**
> > > **Servo wrote: Thu Nov 06, 2025 6:51 am**
> > > Any chance for an updated version which is has the same texture resolution as the lasted version of the [HD Patch: Reforged](https://forum.turtlecraft.gg/viewtopic.php?t=21355)? (PATCH-U: Ultra HD Character Textures & Gear)
> >
> >   Okay everyone. I did it. I made a new upscaled Version to match the HD Patch: Reforged Bundle.
> >
> >  Keep in mind that you need the faithful upscale Mod (as it is also included in the HD Reforged post) to use the upscaled version.
> >
> >  And since the female Highelf Skins Nr 2 and 8 are exactly the same without underwear and the upscaled Textures gave me more Possibilities to add Details I simply added some jewelery to distinguish those. Also renamed the File to Patch-Y. Have fun. Uploaded in the same Link as the old one:
> >
> >  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)
>
>  hello i tried this, i have the whole hd patch with ultra hd characters, but the model looks like this :(
>  could anyone help me with this
>  <https://imgur.com/a/4JOlMC1>

What i can tell it that this isnt my Skin-File in your Screenshot. Are you using the right patch-file? The Patch-Y in the first folder is not for the HD upscale. The file you need to use is in the "Upscaled for HD Reforged" Sub-Folder. Also check if you have a Patch-Z using Textures, because that would overwrite mine.

## Post 162353 by Michralt — 2025-12-10T14:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162353#p162353 | page 14 | era: 1.18.1-announced-pre-release -->

> **Necropheus wrote: Mon Dec 08, 2025 11:37 pm**
> > **Michralt wrote: Sun Dec 07, 2025 9:27 pm**
> > > **Necropheus wrote: Sun Nov 16, 2025 8:43 pm**
> > > Okay everyone. I did it. I made a new upscaled Version to match the HD Patch: Reforged Bundle.
> > >
> > >  Keep in mind that you need the faithful upscale Mod (as it is also included in the HD Reforged post) to use the upscaled version.
> > >
> > >  And since the female Highelf Skins Nr 2 and 8 are exactly the same without underwear and the upscaled Textures gave me more Possibilities to add Details I simply added some jewelery to distinguish those. Also renamed the File to Patch-Y. Have fun. Uploaded in the same Link as the old one:
> > >
> > >  [https://drive.google.com/drive/folders/ ... drive_link](https://drive.google.com/drive/folders/1KFSsSgQMODgUxmoYWOA6tqZkwRQsrvo1?usp=drive_link)
> >
> >  hello i tried this, i have the whole hd patch with ultra hd characters, but the model looks like this :(
> >  could anyone help me with this
> >  <https://imgur.com/a/4JOlMC1>
>
>   What i can tell it that this isnt my Skin-File in your Screenshot. Are you using the right patch-file? The Patch-Y in the first folder is not for the HD upscale. The file you need to use is in the "Upscaled for HD Reforged" Sub-Folder. Also check if you have a Patch-Z using Textures, because that would overwrite mine.

¨thanks it works now :)

## Post 162503 by Werenfried — 2025-12-11T19:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162503#p162503 | page 14 | era: 1.18.1-announced-pre-release -->

> **Ctangod wrote: Tue Nov 18, 2025 9:14 pm**
> Alright everyone, after spending quite some time messing around with Ascension files, I have remade my old mod and managed to preserve all the Legion era armors and edit them to fit the little extra added to the gals.
>
>  Turns out Ascension has edited the m2s to include the 3D armor attachments as spells cast on the player model and I was able to edit the position of them (but not for Troll, idk which point controls them) via the attachment points added.
>
>  I'm leaving here the download link to the mod itself:
>  [https://mega.nz/file/JJNClAKQ#F5YV-JFQC ... uvYnqP-bA4](https://mega.nz/file/JJNClAKQ#F5YV-JFQCqaxKy7IBPcmpAeBxa46OmlqXuvYnqP-bA4)
>
>  And a link to my raw files:
>  <https://mega.nz/folder/wREGzbiB#2L5zJDrA_pz0LDx3bCQlPw>
>
>  Pics of the models:
>  <https://mega.nz/folder/UZsy1IxY#WHhMwEmviShXUqNICmrhFA>
>
>  Feel free to edit and adapt the mod as needed and also feel free to ask questions if you have any.

Hi,

does this work with the latest HD Patch Reforged? I wohl love to have  the orc "update"....

## Post 162924 by Aderezo — 2025-12-16T15:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162924#p162924 | page 14 | era: 1.18.1-announced-pre-release -->

someone knows is there is a "A little extra for Females" for wow bronzebeard ;3

## Post 163332 by Vellerophontis — 2025-12-20T07:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163332#p163332 | page 14 | era: 1.18.1-announced-pre-release -->

Now that unreal turtle wow 2.0 is not happening, little extra for forshaken girls when? :D

## Post 163475 by Freakyfella — 2025-12-22T06:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163475#p163475 | page 14 | era: 1.18.1-announced-pre-release -->

Good sir I beg of thee please do the other female races too

## Post 163661 by Wizardcheddar — 2025-12-24T20:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163661#p163661 | page 14 | era: 1.18.1-announced-pre-release -->

> **Ctangod wrote: Tue Nov 18, 2025 9:14 pm**
> Alright everyone, after spending quite some time messing around with Ascension files, I have remade my old mod and managed to preserve all the Legion era armors and edit them to fit the little extra added to the gals.
>
>  Turns out Ascension has edited the m2s to include the 3D armor attachments as spells cast on the player model and I was able to edit the position of them (but not for Troll, idk which point controls them) via the attachment points added.
>
>  I'm leaving here the download link to the mod itself:
>  [https://mega.nz/file/JJNClAKQ#F5YV-JFQC ... uvYnqP-bA4](https://mega.nz/file/JJNClAKQ#F5YV-JFQCqaxKy7IBPcmpAeBxa46OmlqXuvYnqP-bA4)
>
>  And a link to my raw files:
>  <https://mega.nz/folder/wREGzbiB#2L5zJDrA_pz0LDx3bCQlPw>
>
>  Pics of the models:
>  <https://mega.nz/folder/UZsy1IxY#WHhMwEmviShXUqNICmrhFA>
>
>  Feel free to edit and adapt the mod as needed and also feel free to ask questions if you have any.

Amazing models! Thanks for sharing  satisfied_turtle  . Is it possible to use them on regular WotLK? I tried using them on a private server with WoD models, but the textures look bad.

## Post 163666 by Watchers3d (Barrens Chat Casualty) — 2025-12-24T23:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163666#p163666 | page 14 | era: 1.18.1-announced-pre-release -->

> **Vellerophontis wrote: Sat Dec 20, 2025 7:29 am**
> Now that unreal turtle wow 2.0 is not happening, little extra for forshaken girls when? :D

> **Freakyfella wrote: Mon Dec 22, 2025 6:00 am**
> Good sir I beg of thee please do the other female races too

Yeah let these holidays pass and I think we'll figure something out.

## Post 163678 by Leerath — 2025-12-25T04:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163678#p163678 | page 14 | era: 1.18.1-announced-pre-release -->

First, I'd like to thank the author of this wonderful mod. It reignited my interest to return to the classic after all these years. And it brought my friend into the WoW, who otherwise wouldn't have discovered the Azeroth, never reached his first 60 and and wouldn't have wanted to play a game with default 20-year-old models. Mods like this make you appreciate the community's love for the WoW.

I won't be the first or last to request an enhanced version (the bigger the better) of the mod. There's a tuned down version, but what if we need a tuned up one? High Elf's breasts are too small. With such a bottom-heavy body, they look more like a pear than an hourglass. If it's too hard to make them all, maybe choose at least one race with more outstanding assets?

The author of the HD patch cut the bikini mod out for one reason or another, which made it pointless to use the character module.
There used to be hope for Unreal's mod potential. It was just a matter of waiting for the new engine version to be released. Now, with UE5 cancelled, I'd like to clarify a few questions.

 1. Is it possible to make An EXTRA (not a little) for Female Hight Elves, Humans, Night Elves etc. mod?
a) With the current version of the game client, is it possible to down-port the mod from the newer clients of the WoW or one have to make it from scratch?
b) With 3.3.5 client is it hard to port the mod from the other versions of the WoW or one have to make it from scratch?

 2. Should we expect An EXTRA (not a little) for Females mod in the future?
a) This is planned. We'll have to wait.
b) This should only be expected after upgrading to a newer client.
c) There are no such plans. You'll have to do the work yourself (what's the algorithm then?)

Even a simple clarification of these issues would be a good Christmas gift.

## Post 163792 by Watchers3d (Barrens Chat Casualty) — 2025-12-26T17:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163792#p163792 | page 14 | era: 1.18.1-announced-pre-release -->

> **Leerath wrote: Thu Dec 25, 2025 4:43 am**
> First, I'd like to thank the author of this wonderful mod. It reignited my interest to return to the classic after all these years. And it brought my friend into the WoW, who otherwise wouldn't have discovered the Azeroth, never reached his first 60 and and wouldn't have wanted to play a game with default 20-year-old models. Mods like this make you appreciate the community's love for the WoW.
>
>  I won't be the first or last to request an enhanced version (the bigger the better) of the mod. There's a tuned down version, but what if we need a tuned up one? High Elf's breasts are too small. With such a bottom-heavy body, they look more like a pear than an hourglass. If it's too hard to make them all, maybe choose at least one race with more outstanding assets?
>
>  The author of the HD patch cut the bikini mod out for one reason or another, which made it pointless to use the character module.
>  There used to be hope for Unreal's mod potential. It was just a matter of waiting for the new engine version to be released. Now, with UE5 cancelled, I'd like to clarify a few questions.
>
>  1. Is it possible to make An EXTRA (not a little) for Female Hight Elves, Humans, Night Elves etc. mod?
>  a) With the current version of the game client, is it possible to down-port the mod from the newer clients of the WoW or one have to make it from scratch?
>  b) With 3.3.5 client is it hard to port the mod from the other versions of the WoW or one have to make it from scratch?
>
>  2. Should we expect An EXTRA (not a little) for Females mod in the future?
>  a) This is planned. We'll have to wait.
>  b) This should only be expected after upgrading to a newer client.
>  c) There are no such plans. You'll have to do the work yourself (what's the algorithm then?)
>
>  Even a simple clarification of these issues would be a good Christmas gift.

Greetings, Leerath  smiling_turtle_head

Thank you.

Bikini mod from this topic [viewtopic.php?t=12307](https://forum.turtlecraft.gg/viewtopic.php?t=12307) can be used without HD character models, just the base client is enough. But when it comes to compatibility with Faithful Upscale, you would need to ask/search around mod-support sub-channel in Turtle Discord channel. I think somebody already upscaled these textures.

Anything is possible until polygon limitations of vanilla/wotlk client kicks in. Just regular HD character model without any alterations, with only WotLK geosets included, exceeds polygon limit already. As is. Most popular backport of HD models to WotLK "trims" these models on polycount, enough for the model to function in WotLK client. So, most of them are jacked to the limit already. As of today, Turtle HD project is using just regular WoD/Legion HD models without anything done to lower polycount. That's why after 17.1 (or whichever patch that was), when WotLK+a couple of custom hairstyles was introduced to SD Turtle Models, I had to cycle vanilla hairstyles in HD patch, because there's simply nothing else to display instead. A little extra story by now is a bit convoluted. It features ~smoother, denser geometry than regular HD model. It was possible for vanilla version of the game because of the same polygon limits, as for WotLK client, but much less objects included in the models in general: less hairstyles, armor and so on. But now, there's basically no difference between WotLK client and Turtle SD models. If anything, Turtle models are more dense because of a couple of custom hairstyles here and there.

I may cook something else after holidays, yes. Right now I'm more concerned about the other thing. People almost always treated Watchers like an old sage, and I'm grateful for this. But yet somehow Watchers has basically zero 3d renders to display, which is rather strange. An overdue oversight for this alias. I'd like to deal with this first.

## Post 163849 by Xdogx — 2025-12-27T11:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163849#p163849 | page 14 | era: 1.18.1-announced-pre-release -->

> **Watchers3d wrote: Thu Feb 22, 2024 7:03 pm**
> An extremely little update in out. Do not bother to redownload, if you did recently.
>
>  Fixes a small issue in regards to High Elf Female shields. Now shields do not magically shrink, when the character takes it out from the back.

Great mod!

This issue appears to be present in 0.9.9.1

## Post 163890 by Watchers3d (Barrens Chat Casualty) — 2025-12-27T22:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163890#p163890 | page 14 | era: 1.18.1-announced-pre-release -->

> **Xdogx wrote: Sat Dec 27, 2025 11:50 am**
> > **Watchers3d wrote: Thu Feb 22, 2024 7:03 pm**
> > An extremely little update in out. Do not bother to redownload, if you did recently.
> >
> >  Fixes a small issue in regards to High Elf Female shields. Now shields do not magically shrink, when the character takes it out from the back.
>
>   Great mod!
>
>  This issue appears to be present in 0.9.9.1

Thank you  smiling_turtle_head

Oops. Should be fixed now again. Redownload from the topic header.

## Post 164163 by Zockzock — 2026-01-01T05:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164163#p164163 | page 14 | era: 1.18.1-announced-pre-release -->

Zug Zug happy new year to all

## Post 164196 by WadeWolf — 2026-01-01T22:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164196#p164196 | page 14 | era: 1.18.1-announced-pre-release -->

I know you have a less thick version of this but even in that it seem like the NE's are still very thick.  Any version that can make them a little less hippy??

## Post 164218 by Kamilhunk — 2026-01-02T01:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164218#p164218 | page 14 | era: 1.18.1-announced-pre-release -->

Hi,
It's my first time on this forum and I want to start by thanking Watchers for the work on these model and especially for sharing the source file.

I am a 3.3.5a player and I really wanted these model in my game.
I had never used Blender before and I decided to try and tinker with it to make them usable in WoTLK.
After countless hours I finally managed to achieve a decent result.
I tried as much as I could to not reduce the quality of the model, but some stuff had to go because we have to deal with a limited number of polygon.

I frankenstein a combination of the regular Leeviathan WoD Model and those of Watchers.
Since my skills is very poor in blender I used the model from Watchers has the base to keep the extra animation, but I had to change the head for the Leeviathan model because I couldn't do UV map. The rest of the model is the original Watcher model.

I had to chop off the 3D Belt on all races to save polygon, they will display as 2D Belt instead.

Since I have no skills whatsoever in blender I couldn't model the plate pants and sculp the model, to have the Plate WoTLK pants I decided to take an easier route and just duplicate the Trousers base pants, so the Plate pants will display their texture in 2D.

The plate boots have been added to each model and I had to import in blender the Original WoD model of each race to transfer their weight because Leeviathan model had broken weight when copying them to Watcher model, but they all work great now.

Human and Blood Elf had to have their Cloak removed. They also had to have their jewelry and piercing removed to save on Polygon.
Night Elf and Troll had less hair cut to deal with so I could keep their cloak.

Also Human and Blood Elf had to have some aspect of their model being Decimated (to reduce polygon) on some of their boots, wristbands and hair cut. I didn't decimate anything by more than 5%. I tried to avoid decimating the actual model. I couldn't really see the difference in game between the pre-decimate model and post decimation.
Night Elf and Troll did not need to have any decimation done to them.

Overall I'm very happy with the result and some stuff had to go but there is nothing broken or invisible. Only minor detail have been scarified and most of these stuff I personally do not even use.
I wanted to share the major key points I had to do to have these model playable in WoTLK. It's been a struggle for me with Blender has a first timer, but I did it and I'm happy to share what I have done with you guys.
I've tried to test them has much as I could before making the post and I don't think there is any major glitch, but if there is something just tell me I will try to do my best to fix it. Also Blood Elf dance is working but it stops at one point and I can't replicate the issue in Blender so I don't know why it does that.

Before I end my post with the links, I have a question for you Watchers, I saw that you fixed an issue related to the Shield size on the Blood Elf model and I was wondering if there is a way in Blender to increase the weapon size of both Sheathed and Equipped ? The Blood Elf model still has a tinnier weapon while sheathed than in hand. I also would like to increase the size to match Legion size increase that they received back in that time. I tried to increase the attachment but it didn't do anything. Also tried other stuff but failed and couldn't find it.

So here are the links !
These model are made for regular WoTLK servers and they work with Leeviathan model has a base.
You need to download Patch-H first then add Patch-J to have a Little Extra.

Patch-H
[https://www.mediafire.com/file/9gidbl7q ... H.MPQ/file](https://www.mediafire.com/file/9gidbl7q75xym5h/Patch-H.MPQ/file)

Patch-J
[https://www.mediafire.com/file/pe2jkfsc ... J.mpq/file](https://www.mediafire.com/file/pe2jkfsc86ws2zu/patch-J.mpq/file)

## Post 164219 by Yika — 2026-01-02T02:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164219#p164219 | page 14 | era: 1.18.1-announced-pre-release -->

So is it me or is Patch Y from the handdrawn new underwear textures not working?
As soon as I install that patch the game just crashes when on character selection screen.

## Post 164319 by Markka — 2026-01-03T09:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164319#p164319 | page 14 | era: 1.18.1-announced-pre-release -->

> **Kamilhunk wrote: Fri Jan 02, 2026 1:50 am**
> Hi,
>  It's my first time on this forum and I want to start by thanking Watchers for the work on these model and especially for sharing the source file.
>
>  I am a 3.3.5a player and I really wanted these model in my game.
>  I had never used Blender before and I decided to try and tinker with it to make them usable in WoTLK.
>  After countless hours I finally managed to achieve a decent result.
>  I tried as much as I could to not reduce the quality of the model, but some stuff had to go because we have to deal with a limited number of polygon.
>
>  *-Snip-*

Heya. I tried these out on a 3.3.5a client. At least on Chromie the female troll models seem to have issues. I noticed that the two female trolls in the Horde side Dalaran inn have the following problems:

[Mimbihi](https://www.wowhead.com/wotlk/npc=32420/mimbihi) is missing her hair, and [Misensi's](https://www.wowhead.com/wotlk/npc=31031/misensi) looping crafting animation is completely frozen.

I haven't tested anything else yet, but those are a couple of issues I noticed while playing.

## Post 164333 by Kamilhunk — 2026-01-03T13:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164333#p164333 | page 14 | era: 1.18.1-announced-pre-release -->

I fixed the missing hair on Mimbihi, but I cannot do anything for Misensi's animation it's just beyond my blender skills. The Blood Elf model has something similar going on when she starts dancing for like 30 seconds and then freeze for some reason. When I play back those animation in blender they all loop flawlessly. I'm clueless with this issue, sorry. Patch-J link is updated, thanks for pointing it out.

## Post 164588 by Wizardcheddar — 2026-01-07T15:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164588#p164588 | page 14 | era: 1.18.1-announced-pre-release -->

> **Kamilhunk wrote: Fri Jan 02, 2026 1:50 am**
> Hi,
>  It's my first time on this forum and I want to start by thanking Watchers for the work on these model and especially for sharing the source file.

Thank you so much for sharing, it turned out great!   satisfied_turtle   satisfied_turtle

## Post 164704 by Werenfried — 2026-01-08T19:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164704#p164704 | page 14 | era: 1.18.1-announced-pre-release -->

Hey,

can someone give love to the Orcladies and update the body of theirs like this?

## Post 165255 by Watchers3d (Barrens Chat Casualty) — 2026-01-15T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165255#p165255 | page 14 | era: 1.18.1-announced-pre-release -->

> **Kamilhunk wrote: Sat Jan 03, 2026 1:18 pm**
> I fixed the missing hair on Mimbihi, but I cannot do anything for Misensi's animation it's just beyond my blender skills. The Blood Elf model has something similar going on when she starts dancing for like 30 seconds and then freeze for some reason. When I play back those animation in blender they all loop flawlessly. I'm clueless with this issue, sorry. Patch-J link is updated, thanks for pointing it out.

Interesting project, I'll be sure to check it out  smiling_turtle_head

These problems with animation surface up when either WBS or converter breaks animation lengths. It easy to fix. Download 010 editor from official website, and a template for it in my topic at the header under the spoiler, or use the one that comes with 010 editor from Alastor, if you open WotLK model. Open your m2 model, run the template and look for animation/sequences struct. You'll see all sequences numbered. You can correspond to WBS to know which animation is in question, these numbers are the same in-between software. In animation in question, check "length" value and compare it to either my model, or WoD clean model (you can download it in the topic header) using either 010 Editor, or WBS.

## Post 165526 by RPGnerd (Barrens Chat Casualty) — 2026-01-18T12:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165526#p165526 | page 14 | era: 1.18.1-announced-pre-release -->

Does anyone have the link to the HD mod file that only upgrades playable characters to HD?

## Post 165530 by Freakyfella — 2026-01-18T14:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165530#p165530 | page 14 | era: 1.18.1-announced-pre-release -->

Please oh kind one
Goblins and Orcs when?

## Post 166228 by MightyWalrus — 2026-01-24T08:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166228#p166228 | page 14 | era: 1.18.1-announced-pre-release -->

> **Ctangod wrote: Tue Nov 18, 2025 9:14 pm**
> Alright everyone, after spending quite some time messing around with Ascension files, I have remade my old mod and managed to preserve all the Legion era armors and edit them to fit the little extra added to the gals.
>
>  Turns out Ascension has edited the m2s to include the 3D armor attachments as spells cast on the player model and I was able to edit the position of them (but not for Troll, idk which point controls them) via the attachment points added.
>
>  I'm leaving here the download link to the mod itself:
>  [https://mega.nz/file/JJNClAKQ#F5YV-JFQC ... uvYnqP-bA4](https://mega.nz/file/JJNClAKQ#F5YV-JFQCqaxKy7IBPcmpAeBxa46OmlqXuvYnqP-bA4)
>
>  And a link to my raw files:
>  <https://mega.nz/folder/wREGzbiB#2L5zJDrA_pz0LDx3bCQlPw>
>
>  Pics of the models:
>  <https://mega.nz/folder/UZsy1IxY#WHhMwEmviShXUqNICmrhFA>
>
>  Feel free to edit and adapt the mod as needed and also feel free to ask questions if you have any.

Awesome job! Would be cool to see a bit less bottom-heavy variant in the future if you are intend to support your mod further. If not, I probably will get my crooked hands to do that   happy_turtle_head   scared_turtle_head

## Post 166491 by Watchers3d (Barrens Chat Casualty) — 2026-01-26T06:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166491#p166491 | page 14 | era: 1.18.1-announced-pre-release -->

smol update to address attachment scale inconsistencies for high elf

## Post 167803 by Kamilhunk — 2026-02-09T12:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167803#p167803 | page 14 | era: 1.18.1-announced-pre-release -->

Thanks for the tips Watchers, I fixed my animation issue on both model using the hex editor.
Patch-J in my first post has been updated.

Also, how do you change the scale of the attachment ?  I've tried increasing the sphere size but it didn't do anything in game. I'm trying to increase the weapon size of the Blood Elf/High Elf model to match the increase they got in Legion.

## Post 167924 by Watchers3d (Barrens Chat Casualty) — 2026-02-11T01:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167924#p167924 | page 14 | era: 1.18.1-announced-pre-release -->

> **Kamilhunk wrote: Mon Feb 09, 2026 12:33 pm**
> Thanks for the tips Watchers, I fixed my animation issue on both model using the hex editor.
>  Patch-J in my first post has been updated.
>
>  Also, how do you change the scale of the attachment ?  I've tried increasing the sphere size but it didn't do anything in game. I'm trying to increase the weapon size of the Blood Elf/High Elf model to match the increase they got in Legion.

Sure. Download 010 editor and a template from my topic to run on m2 vanilla models.

Run the template on model in question. Look for "attachments" struct. Take note of all bone IDs for attachments of interest. Proceed to struct "bones", unfold bone of interest and look for scale > values. These are responsible for attachment size. Change all of them from previous to a new value.

For example this way I can verify, that human female right pauldron (no matter which one you wear in-game) is scaled by 0.62 from original 1.0 size.

It can be done in Blender in the same fashion, too.

## Post 168085 by Resq — 2026-02-12T18:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168085#p168085 | page 14 | era: 1.18.1-announced-pre-release -->

A little extra "retextured" for HD patch instantly crashes after logging in (before even seeing a character on the loading screen). I think it's because of using the patch-U performance version?

## Post 168099 by Watchers3d (Barrens Chat Casualty) — 2026-02-13T00:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168099#p168099 | page 14 | era: 1.18.1-announced-pre-release -->

> **Resq wrote: Thu Feb 12, 2026 6:30 pm**
> A little extra "retextured" for HD patch instantly crashes after logging in (before even seeing a character on the loading screen). I think it's because of using the patch-U performance version?

I believe "Upscaled for HD Reforged" folder contains the version which is compatible only with full patch-U version, and is not compatible with performance version.
Patch-Y in the main A Little Extra Retextured folder is a version for original vanilla texture resolution. Nowadays, If I understand correctly, HD Patch on Turtle ditched original texture resolution completely. But there are other servers still.

## Post 168421 by Resq — 2026-02-16T09:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168421#p168421 | page 14 | era: 1.18.1-announced-pre-release -->

> **Watchers3d wrote: Fri Feb 13, 2026 12:26 am**
> > **Resq wrote: Thu Feb 12, 2026 6:30 pm**
> > A little extra "retextured" for HD patch instantly crashes after logging in (before even seeing a character on the loading screen). I think it's because of using the patch-U performance version?
>
>   I believe "Upscaled for HD Reforged" folder contains the version which is compatible only with full patch-U version, and is not compatible with performance version.
>  Patch-Y in the main A Little Extra Retextured folder is a version for original vanilla texture resolution. Nowadays, If I understand correctly, HD Patch on Turtle ditched original texture resolution completely. But there are other servers still.

Is there a way to make it work with the performance patch-U? The full patch-U crashes my WoW everytime I enter Stormwind so that's not an option unfortunately.

## Post 168505 by Watchers3d (Barrens Chat Casualty) — 2026-02-17T01:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168505#p168505 | page 14 | era: 1.18.1-announced-pre-release -->

> **Resq wrote: Mon Feb 16, 2026 9:43 am**
> Is there a way to make it work with the performance patch-U? The full patch-U crashes my WoW everytime I enter Stormwind so that's not an option unfortunately.

You can downsample it to match this performance patch texture resolution, although

> **Necropheus wrote: Mon Nov 17, 2025 9:26 pm**
> downscaling textures in this case is way more trickier than it sounds. If i just scale them down, details get lost and everything will probably look off. To do it properly i would have to redo everything for that specific resolution. I will look into it but dont think that i will do a third version if i have to redo everything.
>
>  EDIT: just tried it with different resampling methods and the results arent good enough without a full rework imho. Most downscaled skins look somehow like this: <https://freeimage.host/i/fJj0dJt>

## Post 169492 by Watchers3d (Barrens Chat Casualty) — 2026-02-26T23:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169492#p169492 | page 14 | era: 1.18.1-announced-pre-release -->

A Little Extra and model resource archives are updated courtesy of Starrfury.

High Elf bow animations changed to Legion version.
High Elf weapon scaling changed to correspond with Legion standards (0.85 from previous 0.65 of WoD).

## Post 169854 by Idiots009 — 2026-03-03T00:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169854#p169854 | page 14 | era: 1.18.1-announced-pre-release -->

New bow animation is amazing but can you fix right hand dagger animation. It appears as a regular 1h weapon animation. Left hand dagger animation already working

## Post 170696 by Watchers3d (Barrens Chat Casualty) — 2026-03-12T17:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170696#p170696 | page 14 | era: 1.18.1-announced-pre-release -->

> **Idiots009 wrote: Tue Mar 03, 2026 12:30 am**
> New bow animation is amazing but can you fix right hand dagger animation. It appears as a regular 1h weapon animation. Left hand dagger animation already working

Greetings  smiling_turtle_head

Interesting. This "bug" is a little strange. In both of my mid-season WoD and early Legion clients this one-handed pierce animation is just not there in default models. I wonder if people played through WoD-Legion on blood elves without this animation back then. But is should be present obviously.

I'll figure something out.

## Post 170697 by Watchers3d (Barrens Chat Casualty) — 2026-03-12T17:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170697#p170697 | page 14 | era: 1.18.1-announced-pre-release -->

Unrelated to the topic. Recently people started asking me "is this free?" for some reason. Yes, it is. You don't own me anything. Just don't sell what you got for free. Although, please do mention either this topic or my twitter(X) page if you want to repost/modify/repurpose it.

## Post 172814 by Watchers3d (Barrens Chat Casualty) — 2026-03-27T23:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172814#p172814 | page 15 | era: post-1.18.1 -->

Another update related to high elves courtesy of Starrfury. Attachment tweaks, dagger animation (one-handed pierce animation) added.

## Post 172862 by MightyWalrus — 2026-03-28T09:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172862#p172862 | page 15 | era: post-1.18.1 -->

> **Ctangod wrote: Tue Nov 18, 2025 9:14 pm**
> Alright everyone, after spending quite some time messing around with Ascension files, I have remade my old mod and managed to preserve all the Legion era armors and edit them to fit the little extra added to the gals.
>
>  Turns out Ascension has edited the m2s to include the 3D armor attachments as spells cast on the player model and I was able to edit the position of them (but not for Troll, idk which point controls them) via the attachment points added.
>
>  I'm leaving here the download link to the mod itself:
>  [https://mega.nz/file/JJNClAKQ#F5YV-JFQC ... uvYnqP-bA4](https://mega.nz/file/JJNClAKQ#F5YV-JFQCqaxKy7IBPcmpAeBxa46OmlqXuvYnqP-bA4)
>
>  And a link to my raw files:
>  <https://mega.nz/folder/wREGzbiB#2L5zJDrA_pz0LDx3bCQlPw>
>
>  Pics of the models:
>  <https://mega.nz/folder/UZsy1IxY#WHhMwEmviShXUqNICmrhFA>
>
>  Feel free to edit and adapt the mod as needed and also feel free to ask questions if you have any.

Hello! It seems that the latest Ascension update broke things and addon doesn't work anymore. Any workaround or I am missing something?

## Post 174562 by Muted4ever — 2026-04-09T09:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174562#p174562 | page 15 | era: post-1.18.1 -->

So... I've been getting active in the game lately, using social media to check what's going on WoW and some of my mutuals reposted this thing.

![Image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCR8RuRjnux71FfT1OOxVLh_VqG5kSXJl0GQ&s)

Can we have something similar in Turtle? A friend of mine tried the mod pack months ago and complained about the game crashing every few mins, I've been leveling a druid for a few days and I'm playing with a RP guild, really cool people. I've been checking mods to give the game a bit of something and found the thread.

Source on X: @WarlockLatia

(I hope I'm no breaking any rules for posting pics or profiles)

## Post 174653 by Watchers3d (Barrens Chat Casualty) — 2026-04-10T07:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174653#p174653 | page 15 | era: post-1.18.1 -->

Stormhand81, maintainer of current HD patch reissue, backported HD female humans again, to include wotlk hairstyles in. That means it's over for fhuman model in A Little Extra for now. I'll take it out. Redownload new version.

## Post 174663 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2026-04-10T08:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174663#p174663 | page 15 | era: post-1.18.1 -->

Ah, that's unfortunate.
Thankfully, one can just not update to v5.4.0 until a fix is released.

## Post 174689 by Watchers3d (Barrens Chat Casualty) — 2026-04-10T11:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174689#p174689 | page 15 | era: post-1.18.1 -->

> **Ingameacc12345 wrote: Fri Apr 10, 2026 8:24 am**
> Ah, that's unfortunate.
>  Thankfully, one can just not update to v5.4.0 until a fix is released.

I assume that 5.4 is HD Patch version.
You can carry forward with HD patch updates. Currently, Stormhand81 is in the process of bringing to vanilla character models from "Creatures and Mounts HD Patch 2025" nexusmods page by bibsan, one step at the time. Or maybe bibsan is using HD character models from WotLK HD Client Discord? I'm not sure. It's all confusing out there in the wide WotLK modding world.

But anyway, these HD character models backports from bibsan or hd wotlk discord are packed to the brim. A dozen polygons more and the clients: vanilla and wotlk both, will drop dead, never to boot up again. So the chances for an update to support these bibsan backports are very slim. A Little Extra is a project that adds detail, not the other way around. And that is what bibsan backports (or WotLK HD discord backports) do, but for different reasons of course: to fit these models in restrictive client. Basically new hd project human female is less HD than before. We had full retail geometry in the model before. But of course it's the only way to fit all these armor pieces and hairstyles from WotLK in. I'm not too keen on reshaping default, HD but yet lowpoly models in comparison to a little extra models, or any other modern game, or fighting for mesh density in a very small boundaries. A sandbox is too small to play within it. Many different projects handled this already and I'm sure that WotLK HD client has its own mods, similar to A Little Extra, but just a little different on substance. Which shouldn't be an issue for most anyway.

So, for now my plan is to take character models out as bibsan backports are introduced until it's deprecated pretty much. I may introduce it again, as WotLK HD and turtle vanilla compatible mod, but again. there's only so much polygons these clients can handle. Already mentioned in this topic utilization of attachment system may come in handy, but there's no such workaround present on Turtle (because there's no need for it, since it's vanilla-like server with SD graphics). It's hard to starve out SD-like artstyle on polygon limitations, but it's pretty easy with basically not indented for these clients HD base. So for now, hopefully not for long, it's closing time as bibsan backports are coming in. I'm sure something else will resurface in no time. Stormhand81 told me that he might give it a shot. I think it's a lost cause, though, because of already mentioned reasons. A backport of already existing mod for WotLK I think is the best way to handle this.

## Post 174703 by Thule (Barrens Chat Casualty) — 2026-04-10T14:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174703#p174703 | page 15 | era: post-1.18.1 -->

> **Muted4ever wrote: Thu Apr 09, 2026 9:42 am**
> So... I've been getting active in the game lately, using social media to check what's going on WoW and some of my mutuals reposted this thing.
>
>
>  Can we have something similar in Turtle? A friend of mine tried the mod pack months ago and complained about the game crashing every few mins, I've been leveling a druid for a few days and I'm playing with a RP guild, really cool people. I've been checking mods to give the game a bit of something and found the thread.
>
>  Source on X: @WarlockLatia
>
>  (I hope I'm no breaking any rules for posting pics or profiles)

If I knew how to use Blender, I would have gotten started on this a long time ago.
Maybe someone else will take the reins and create a "more thicc" version. High heels would be awesome, too.

## Post 174721 by Hottato — 2026-04-10T19:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174721#p174721 | page 15 | era: post-1.18.1 -->

> **Watchers3d wrote: Fri Apr 10, 2026 11:57 am**
> > **Ingameacc12345 wrote: Fri Apr 10, 2026 8:24 am**
> > Ah, that's unfortunate.
> >  Thankfully, one can just not update to v5.4.0 until a fix is released.
>
>   I assume that 5.4 is HD Patch version.
>  You can carry forward with HD patch updates. Currently, Stormhand81 is in the process of bringing to vanilla character models from "Creatures and Mounts HD Patch 2025" nexusmods page by bibsan, one step at the time. Or maybe bibsan is using HD character models from WotLK HD Client Discord? I'm not sure. It's all confusing out there in the wide WotLK modding world.
>
>  But anyway, these HD character models backports from bibsan or hd wotlk discord are packed to the brim. A dozen polygons more and the clients: vanilla and wotlk both, will drop dead, never to boot up again. So the chances for an update to support these bibsan backports are very slim. A Little Extra is a project that adds detail, not the other way around. And that is what bibsan backports (or WotLK HD discord backports) do, but for different reasons of course: to fit these models in restrictive client. Basically new hd project human female is less HD than before. We had full retail geometry in the model before. But of course it's the only way to fit all these armor pieces and hairstyles from WotLK in. I'm not too keen on reshaping default, HD but yet lowpoly models in comparison to a little extra models, or any other modern game, or fighting for mesh density in a very small boundaries. A sandbox is too small to play within it. Many different projects handled this already and I'm sure that WotLK HD client has its own mods, similar to A Little Extra, but just a little different on substance. Which shouldn't be an issue for most anyway.
>
>  So, for now my plan is to take character models out as bibsan backports are introduced until it's deprecated pretty much. I may introduce it again, as WotLK HD and turtle vanilla compatible mod, but again. there's only so much polygons these clients can handle. Already mentioned in this topic utilization of attachment system may come in handy, but there's no such workaround present on Turtle (because there's no need for it, since it's vanilla-like server with SD graphics). It's hard to starve out SD-like artstyle on polygon limitations, but it's pretty easy with basically not indented for these clients HD base. So for now, hopefully not for long, it's closing time as bibsan backports are coming in. I'm sure something else will resurface in no time. Stormhand81 told me that he might give it a shot. I think it's a lost cause, though, because of already mentioned reasons. A backport of already existing mod for WotLK I think is the best way to handle this.

This is a shame. Hopefully someone keeps the old "HD" non backported models patch and keeps it updated so that we don't have to lose A little extra for a bunch of extra polygons and hairstyles. Personally, A little extra mod is a lot more valuable than just a few extra hairstyles and more polygons on shapeless models.

## Post 174754 by Muted4ever — 2026-04-10T21:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174754#p174754 | page 15 | era: post-1.18.1 -->

> **Thule wrote: Fri Apr 10, 2026 2:35 pm**
> > **Muted4ever wrote: Thu Apr 09, 2026 9:42 am**
> > So... I've been getting active in the game lately, using social media to check what's going on WoW and some of my mutuals reposted this thing.
> >
> >
> >  Can we have something similar in Turtle? A friend of mine tried the mod pack months ago and complained about the game crashing every few mins, I've been leveling a druid for a few days and I'm playing with a RP guild, really cool people. I've been checking mods to give the game a bit of something and found the thread.
> >
> >  Source on X: @WarlockLatia
> >
> >  (I hope I'm no breaking any rules for posting pics or profiles)
>
>   If I knew how to use Blender, I would have gotten started on this a long time ago.
>  Maybe someone else will take the reins and create a "more thicc" version. High heels would be awesome, too.

I'll try to put this mod first, never modded a game, maybe it's not much complex, don't wanna have my game crashing   insidious_turtle

## Post 174793 by Jimmtodd — 2026-04-11T09:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174793#p174793 | page 15 | era: post-1.18.1 -->

I didn't like the new HD patch and i used this mod for some time now. And i still have this old Patch A (high res character models only) that was attached to this mod a long time ago that i still use today and have no problem with game stability.

So i'm wondering if its possible to continue this mod from that old Patch A

## Post 174837 by Hottato — 2026-04-11T17:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174837#p174837 | page 15 | era: post-1.18.1 -->

> **Jimmtodd wrote: Sat Apr 11, 2026 9:12 am**
> I didn't like the new HD patch and i used this mod for some time now. And i still have this old Patch A (high res character models only) that was attached to this mod a long time ago that i still use today and have no problem with game stability.
>
>  So i'm wondering if its possible to continue this mod from that old Patch A

Would you mind sharing your Patch A? I have an older Patch A too but the human females have hair texture bug.

## Post 174856 by Tafkam — 2026-04-11T20:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174856#p174856 | page 15 | era: post-1.18.1 -->

Human female is removed? Dang, I guess I will just hold off on updating for now.

## Post 174977 by Muted4ever — 2026-04-12T17:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174977#p174977 | page 15 | era: post-1.18.1 -->

Game crashed non-stop when I tp to Stormwind, I'll wait for an update too...

## Post 175032 by Watchers3d (Barrens Chat Casualty) — 2026-04-13T10:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175032#p175032 | page 15 | era: post-1.18.1 -->

Yeah, we had HD patch character models only version here for a year or so, and the full version with the same models included before that in the main, now long abandoned forum topic. But there was no Faithful Upscale back then, and we utilized vanilla texture resolution. Which is why people kept complaining "why textures are so blurry".

And yeah, we had full retail geometry. There's was no need to trim it down. But Turtle decided to backport WotLK SD models, with WotLK hairstyles included (plus, a couple of custom ones for almost every race+sex combo). Which is why the necessity to cycle vanilla hairstyles appeared. And now, Stormhand81 brings HD models from a pack which made HD models ironically less HD, because there's just no other way to get these WotLK geosets in. And the necessity of these hairstyles comes from "Me make character install eichdee mod look different fix plez zug-zug".

So, both changes are not for any bad reasons. It's just that there's something to sacrifice to move forward.

Not like it matters anymore anyway, but just so you get the idea.

On the second note, we might meet again somewhere. I have a couple of social profiles, watchers3d, in discord and former twitter, if you'll ever need something from me.

## Post 175192 by Thule (Barrens Chat Casualty) — 2026-04-14T13:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175192#p175192 | page 15 | era: post-1.18.1 -->

> **Watchers3d wrote: Mon Apr 13, 2026 10:31 am**
> Yeah, we had HD patch character models only version here for a year or so, and the full version with the same models included before that in the main, now long abandoned forum topic. But there was no Faithful Upscale back then, and we utilized vanilla texture resolution. Which is why people kept complaining "why textures are so blurry".
>
>  And yeah, we had full retail geometry. There's was no need to trim it down. But Turtle decided to backport WotLK SD models, with WotLK hairstyles included (plus, a couple of custom ones for almost every race+sex combo). Which is why the necessity to cycle vanilla hairstyles appeared. And now, Stormhand81 brings HD models from a pack which made HD models ironically less HD, because there's just no other way to get these WotLK geosets in. And the necessity of these hairstyles comes from "Me make character install eichdee mod look different fix plez zug-zug".
>
>  So, both changes are not for any bad reasons. It's just that there's something to sacrifice to move forward.
>
>  Not like it matters anymore anyway, but just so you get the idea.
>
>  On the second note, we might meet again somewhere. I have a couple of social profiles, watchers3d, in discord and former twitter, if you'll ever need something from me.

I just wanted to thank you for the amazing work you’ve done for us here. Hopefully, it will turn up somewhere else someday.
Thanks again.

## Post 175876 by Vyria — 2026-04-19T01:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175876#p175876 | page 15 | era: post-1.18.1 -->

Welp, ggs but I want to say thank you op author and the others who help/edited the body's. Hope the best in future endeavors for everyone in this thread and much love, the inevitable happened too soon...

## Post 175901 by Forest Elf — 2026-04-19T06:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175901#p175901 | page 15 | era: post-1.18.1 -->

I have loved this Mod! Thanks for the work! I really hope if finds its way to other versions of WoW.  sad_turtle
A lot of us are moving to Epoch, Nothing I want more than this mod on there!

*Last edited by Forest Elf on Sun Apr 19, 2026 9:33 pm, edited 1 time in total.*

## Post 175954 by Snowbunnie — 2026-04-19T17:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175954#p175954 | page 15 | era: post-1.18.1 -->

Loved this mod so much, hoping to see this mod working on other servers :)

## Post 176300 by Penuthoovez — 2026-04-28T15:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176300#p176300 | page 15 | era: post-1.18.1 -->

Hello plz fix for project ascension plz and thanks you ![❤️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2764.svg)![❤️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2764.svg)![❤️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2764.svg)![❤️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2764.svg)

## Post 176301 by Thule (Barrens Chat Casualty) — 2026-04-28T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176301#p176301 | page 15 | era: post-1.18.1 -->

> **Kamilhunk wrote: Fri Jan 02, 2026 1:50 am**
> Hi,
>  It's my first time on this forum and I want to start by thanking Watchers for the work on these model and especially for sharing the source file.
>
>  I am a 3.3.5a player and I really wanted these model in my game.
>  I had never used Blender before and I decided to try and tinker with it to make them usable in WoTLK.
>  After countless hours I finally managed to achieve a decent result.
>  I tried as much as I could to not reduce the quality of the model, but some stuff had to go because we have to deal with a limited number of polygon.
>
>  --------------------------------------------------------
>
>  So here are the links !
>  These model are made for regular WoTLK servers and they work with Leeviathan model has a base.
>  You need to download Patch-H first then add Patch-J to have a Little Extra.
>
>
>  Patch-H
>  [https://www.mediafire.com/file/9gidbl7q ... H.MPQ/file](https://www.mediafire.com/file/9gidbl7q75xym5h/Patch-H.MPQ/file)
>
>  Patch-J
>  [https://www.mediafire.com/file/pe2jkfsc ... J.mpq/file](https://www.mediafire.com/file/pe2jkfsc86ws2zu/patch-J.mpq/file)

Hi those models are just great! Thank you for for them.
But it works only on Epog and not on BB.
Do you know why? I thought that both are 3.3.5a client...

Thanks)

 **EDIT:**
Ah so it "works" if you disable their HD patch in launcher, BUT it not display properly: Missing textures on eyes and ears for example. Its just broken on BronzeB((

![Image](https://i.imgur.com/0kUNoJX.png)

## Post 176320 by Ellifta (Barrens Chat Casualty) — 2026-04-29T11:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176320#p176320 | page 15 | era: post-1.18.1 -->

> **Thule wrote: Tue Apr 28, 2026 4:31 pm**
> > **Kamilhunk wrote: Fri Jan 02, 2026 1:50 am**
> > Hi,
> >  It's my first time on this forum and I want to start by thanking Watchers for the work on these model and especially for sharing the source file.
> >
> >  I am a 3.3.5a player and I really wanted these model in my game.
> >  I had never used Blender before and I decided to try and tinker with it to make them usable in WoTLK.
> >  After countless hours I finally managed to achieve a decent result.
> >  I tried as much as I could to not reduce the quality of the model, but some stuff had to go because we have to deal with a limited number of polygon.
> >
> >  --------------------------------------------------------
> >
> >  So here are the links !
> >  These model are made for regular WoTLK servers and they work with Leeviathan model has a base.
> >  You need to download Patch-H first then add Patch-J to have a Little Extra.
> >
> >
> >  Patch-H
> >  [https://www.mediafire.com/file/9gidbl7q ... H.MPQ/file](https://www.mediafire.com/file/9gidbl7q75xym5h/Patch-H.MPQ/file)
> >
> >  Patch-J
> >  [https://www.mediafire.com/file/pe2jkfsc ... J.mpq/file](https://www.mediafire.com/file/pe2jkfsc86ws2zu/patch-J.mpq/file)
>
>
>
>  Hi those models are just great! Thank you for for them.
>  But it works only on Epog and not on BB.
>  Do you know why? I thought that both are 3.3.5a client...
>
>  Thanks)
>
>  **EDIT:**
>  Ah so it "works" if you disable their HD patch in launcher, BUT it not display properly: Missing textures on eyes and ears for example. Its just broken on BronzeB((
>
>  ![Image](https://i.imgur.com/0kUNoJX.png)

Isn't using .mpq files banned in Epoch? I haven't tried using them myself, but you didn't get banned?

## Post 176323 by Thule (Barrens Chat Casualty) — 2026-04-29T17:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176323#p176323 | page 15 | era: post-1.18.1 -->

> **Ellifta wrote: Wed Apr 29, 2026 11:57 am**
> Isn't using .mpq files banned in Epoch? I haven't tried using them myself, but you didn't get banned?

I haven't been banned yet, and besides, I read somewhere in the rules that only patches that affect gameplay (for example, in PvP) are prohibited.

This is just a cosmetic change.

