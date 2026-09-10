---
title: "Faithful Upscale - Graphics Mod"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22090"
topic_id: 22090
forum_id: 29
forum: "Modding"
author: "Ellea"
author_authority: "player"
posted: "2025-09-25T21:47:00Z"
last_post: "2026-03-29T18:05:00Z"
post_count: 143
pages: 5
fetched: "2026-09-10T10:37:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Faithful Upscale - Graphics Mod

## Post 153212 by Ellea — 2025-09-25T21:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153212#p153212 | page 1 | era: pre-1.18.1 -->

![Image](https://i.ibb.co/LDyTzzY7/Logo.png)

This mod focuses on delivering sharper, more detailed visuals across characters, armor, weapons, and the world — all while preserving the original look and feel of the game.

The latest update of this mod now requires **VanillaHelpers** to increase the texture and memory limits of the game, greatly improving overall quality. Big thanks to Isfir for his work, this wouldn't be possible without him.

This mod is **very** stable and there are no known issues that would result in any crashes. If you do experience a crash related to memory, use the performance versions of Patch P & O.

 **Updates:**
Updated post and fixed some links - currently on break from WoW so not all assets will be upscaled from the latest Turtle patches. (Feb 17th 2026)

 **Previews**
Please note that these images are compressed - they will look better in-game.

 **Goldshire Inn**
<https://imgsli.com/NDIyOTc5>

 **Armour**
[![Image](https://i.ibb.co/YFk164zR/armor-upscale-comparison.png)](https://ibb.co/ycyZDmwf)

 **Mount**
[![Image](https://i.ibb.co/s9qQH1ZX/mount-upscale-comparison.png)](https://ibb.co/B2BjN69Y)

    
 **Download**  Patch Files: <https://transfer.it/t/k6uouSp1CTyK>

 **VanillaHelpers** required to enable higher quality textures: <https://github.com/isfir/VanillaHelpers/releases>

Note: Your antivirus may block the download of VanillaHelpers as it overrides code ran by your game to allow the texture limits to be increased. It is safe to use, but with that said, as with any third-party tool, you should use it at your own discretion.

  
 **Installation**  Extract all files into your games **Data** folder.

VanillaHelpers should be copied into your games root folder alongside your turtle-wow.exe

Ensure that all patches are selected on the Turtle Launcher and that VanillaHelpers is enabled:
[![Image](https://i.ibb.co/k6WnzVcJ/launcher.png)](https://ibb.co/BKSDvHsG)

It is highly recommended that you enable DXVK on the launcher for using this mod or you will very likely experience memory crashes even without any other addons/mods. Using Reshade may interfere with DXVK if not installed correctly.

  
 **Contents** • **Patch-A–G** – World Textures
• **Patch-O** – Player/Armour Textures (REQUIRES PATCH-P)
• **Patch-P** – Player/Armour Textures (REQUIRES PATCH-O)
• **Patch-I** – UI Elements (may conflict with some addons / do not use unless you use the default UI – **early WIP**)
• **Patch-M** – Map Textures (minor imperfections expected – WIP)
• **Patch-L** – Loading Screens

Each patch is optional however Patch-O & Patch-P must be either used together or both disabled.

If you use other patches, just rename them to another letter (after these).

​  
 **Performance** This mod has not been extensively performance-tested. The engine is dated and doesn’t make use of modern rendering techniques.

The included DLL raises the RAM limit beyond the internal 2 GB memory allocator, but it still has constraints. Running too many addons—or large ones—can result in out-of-memory errors.

 **Patch-O/P is the most memory-intensive, particularly in areas with many characters (e.g. large cities). Disabling it will significantly improve frame rate, performance and reduce RAM usage.** If you experience issues, disable Patch-O/P or use the performance Patches found within EXTRAs.

When using Patch-O/P DXVK is pretty much mandatory due to how it reduces RAM usage. Again, if you have issues and are unwilling to compromise, you will need to disable Patch-P/O or use the performance version in the Extras section.

​  
 **Modding Information**
For modding purposes, **I strongly recommend that you do not merge this mod into your own**, for the following reasons:

• This mod receives ongoing updates and bug fixes. I don’t maintain a changelog of individual texture names, so your merged version would quickly become outdated.
• Merging it will significantly inflate your mod’s file size and number of patches, meaning you’ll have more to maintain.
• It’s much easier to ask users to temporarily disable either your mod or this one when troubleshooting — that way, bugs can be correctly reported to the right author.

 **If your mod edits character models or armours**, note that Patch-O/P from this mod must be disabled. It forces all player textures to be 4× their original resolution, and any textures not at the correct size will be invisible.

If you want your mod to support high-resolution player textures, create a separate compatibility patch with your player textures upscaled 4×. Patch-P contains a file that enables 4x character upscales. Keeping this as a standalone “compatibility” patch containing only the upscaled player/armour textures is recommended because:

• When the game is updated and new armours, tabards, etc. are added, the game **will not render** textures that have the wrong resolution. Having a separate compatibility patch means both Patch-P and your patch can simply be disabled while I update the new textures.
• In large cities or crowded areas, Patch-P can significantly increase RAM usage and impact performance. Users on lower-end machines or those running many memory intensive addons who will get out of memory errors are likely to disable it.

In general, I recommend that anyone creating a mod intended to work alongside or remain compatible with this one **names their patches so they load after “P” alphabetically** (e.g., Patch-Q or higher). This ensures your textures correctly override mine where needed.

This mod makes **no model edits or DBC changes**, so it should be fully compatible with almost all other mods by default, provided it loads before your mod in the load order.

   
 **Extras**
 **Epoch Water**  - More retail-like water textures
[https://drive.google.com/file/d/1xRx9O ... XtzmU/view](https://drive.google.com/file/d/1xRx9OrznbgbE1uBae3H3OGke9UoXtzmU/view)

 **Minimap Tracking** - Adds a tracking button to the minimap as in later versions of the game.
Install via the launcher -> Addons -> +Add new addon -> copy the link below.
<https://github.com/isfir/MinimapTracking>

Patch-P/O Performance Patches - Lower resolution performance patch, only use this if the default Patch-P/O crashes your game or impacts your frame rate too much.
<https://transfer.it/t/tga7TSg3kBRR>

Faithful Models - An addon to do real-time model swaps for less faithful models in the game, i.e. giant spiders / lava hound mounts will get replaced by the race-specific mount of the characters race. Customize to your own tastes, add additional mounts/costumes to your filter list. This is still WIP as I want to improve the default settings and will move to github, however it is fully functional as is. Type `/fmodels` to bring up the menu.

 **Make sure to update to **VanillaHelpers** 1.1+ (github link is under the Downloads section) and drop the below into your Addon folder.**
<https://transfer.it/t/VrGpyWwzQJhK>

 **Notes**
• **This mod is entirely fan-made and independently worked on by me.** I work on it in my free time to enhance the visuals of a game I love and to learn new things along the way. Many textures require manual Photoshop edits, scripting, and testing. Given the scale of how many textures there are, progress takes time, and I do this only for 'fun' - I am a little burnt out currently given how long I have already spent on this by myself, please keep that in mind when reporting bugs or suggesting changes.
• Some armors may display slightly sometimes black, jagged edges. There are thousands of armor textures, and while I’m gradually improving them, automation isn’t perfect.
• If you encounter white/black textures after changing graphics settings, simply relog to fix them.
 **• This will NOT work with the HD patch currently when using Patch-O/P, or the nude patch, or any other patch that modifies/edits player textures UNTIL the authors create a compatibility patch. See the modding info section for further information.**

*Last edited by Ellea on Tue Feb 17, 2026 11:35 am, edited 94 times in total.*

## Post 153262 by Eclefr — 2025-09-26T06:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153262#p153262 | page 1 | era: pre-1.18.1 -->

Hello,

Thank you very much for this great work !
It's exactly what I was looking for !

I have a question: is this patch B the one we find here (often updated) ? :
[viewtopic.php?t=21355](https://forum.turtlecraft.gg/viewtopic.php?t=21355)

I would like to know what I need to update and where to look in the future.

## Post 153264 by Eclefr — 2025-09-26T06:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153264#p153264 | page 1 | era: pre-1.18.1 -->

I'm currently testing the mod, it's great, thank you very much !

At the moment, I'm having a bug with the minimap: ores no longer appear in yellow on the minimap. Now I have this weird icon : ![Image](https://i.postimg.cc/44H3Z9Dg/gold.png)

## Post 153276 by Ellea — 2025-09-26T08:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153276#p153276 | page 1 | era: pre-1.18.1 -->

Thanks for the info, I have updated patch-c with a change which I believe will fix this (looks related to the downport from WOTLK). If you could redownload and let me know if that fixes it please, as I do not have an easy way to test on my end without me making a character and levelling.

In regards to the contents of this mod, it is entirely my creation so there won't be any other mods that use the same files. In general you should be able to use this mod with other HD mods, but its important that you load this before it (rename the other HD mod to be patch-D, patch-E... and leave these as A, B, C)

## Post 153282 by Eclefr — 2025-09-26T09:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153282#p153282 | page 1 | era: pre-1.18.1 -->

The problem is fixed, thank you very much. I was also had it on the group member circle on the minimap.

I didn't quite understand. Should I use both B patches and rename one?
Or is a second B patch unnecessary ?

Thx again for your work !

## Post 153331 by Sousoup632 — 2025-09-26T13:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153331#p153331 | page 1 | era: pre-1.18.1 -->

Fantastic work ! This is a great addition to make turtle wow even better ! Thanks you so much.

## Post 153351 by Ellea — 2025-09-26T15:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153351#p153351 | page 1 | era: pre-1.18.1 -->

> **Eclefr wrote: Fri Sep 26, 2025 9:05 am**
> I didn't quite understand. Should I use both B patches and rename one?
>  Or is a second B patch unnecessary ?

Yeah, use the other patch-B and rename it to something like patch-D, do not rename this. Storm is pushing an update at some point to include this mod as part of his.

## Post 153390 by Eclefr — 2025-09-26T20:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153390#p153390 | page 1 | era: pre-1.18.1 -->

> **Ellea wrote: Fri Sep 26, 2025 3:31 pm**
> > **Eclefr wrote: Fri Sep 26, 2025 9:05 am**
> > I didn't quite understand. Should I use both B patches and rename one?
> >  Or is a second B patch unnecessary ?
>
>   Yeah, use the other patch-B and rename it to something like patch-D, do not rename this. Storm is pushing an update at some point to include this mod as part of his.

Great news! This will make updates easier; I'll wait.

Thanks again for your work!

## Post 153606 by Agonyzt — 2025-09-28T23:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153606#p153606 | page 1 | era: pre-1.18.1 -->

Nice! Where can I find your Wotlk version?

## Post 153848 by Adrianus — 2025-09-30T21:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153848#p153848 | page 1 | era: pre-1.18.1 -->

Latest version crashes with patch A.

## Post 153896 by Ellea — 2025-10-01T09:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153896#p153896 | page 1 | era: pre-1.18.1 -->

> **Adrianus wrote: Tue Sep 30, 2025 9:54 pm**
> Latest version crashes with patch A.

I assume you mean the latest version's patch A is causing your game to crash, and you do not mean in conjunction with the HD mods patch A?

I haven't been able to recreate this and not had any other reports but I have recompiled and updated the download link if you want to try again.

## Post 153953 by Allwynd01 (Bug Report Enthusiast) — 2025-10-01T19:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153953#p153953 | page 1 | era: pre-1.18.1 -->

I tested it and it looks great, but I noticed some things aren't changed.

 1. The water ripples/waves texture is the old one.
 2. I noticed some UI elements like the main ability bar and the minimap are updated, but the rest of the UI windows are the old ones.

I will explore this in more detail tomorrow, but is there a chance for all the UI elements and water texture to be updated as well?

## Post 153956 by Ellea — 2025-10-01T20:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153956#p153956 | page 1 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Wed Oct 01, 2025 7:49 pm**
> I tested it and it looks great, but I noticed some things aren't changed.
>
>  1. The water ripples/waves texture is the old one.
>  2. I noticed some UI elements like the main ability bar and the minimap are updated, but the rest of the UI windows are the old ones.
>
>  I will explore this in more detail tomorrow, but is there a chance for all the UI elements and water texture to be updated as well?

I haven't touched every UI element, it will cause issues with addons and some elements just cannot be touched due to default limitations. I can potentially create a different patch in the future and improve a few things that won't cause problems.

For water, I can take a look at this - most folk tend to use the Epoch water patch, and I get the feeling that increasing the texture sharpness of the default 'ripples' will potentially look worse but I will give it a look.

## Post 153962 by Adrianus — 2025-10-01T22:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153962#p153962 | page 1 | era: pre-1.18.1 -->

No, I do not use HD mod that makes it look like retail and have disabled other mods upon testing. Downloaded it again and it's working.

Thanks!

## Post 153964 by Testhuman — 2025-10-01T22:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153964#p153964 | page 1 | era: pre-1.18.1 -->

Wow, this looks amazing so far. Will test and get back to it. Thanks for doing such amazing work for the community.

## Post 154209 by Allwynd01 (Bug Report Enthusiast) — 2025-10-03T12:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154209#p154209 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Wed Oct 01, 2025 8:31 pm**
> > **Allwynd01 wrote: Wed Oct 01, 2025 7:49 pm**
> > I tested it and it looks great, but I noticed some things aren't changed.
> >
> >  1. The water ripples/waves texture is the old one.
> >  2. I noticed some UI elements like the main ability bar and the minimap are updated, but the rest of the UI windows are the old ones.
> >
> >  I will explore this in more detail tomorrow, but is there a chance for all the UI elements and water texture to be updated as well?
>
>   I haven't touched every UI element, it will cause issues with addons and some elements just cannot be touched due to default limitations. I can potentially create a different patch in the future and improve a few things that won't cause problems.
>
>  For water, I can take a look at this - most folk tend to use the Epoch water patch, and I get the feeling that increasing the texture sharpness of the default 'ripples' will potentially look worse but I will give it a look.

In case you can't update all UI elements, will it be possible to have a version without updates UI elements to maintain consistency?

## Post 154248 by Ellea — 2025-10-03T16:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154248#p154248 | page 1 | era: 1.18.1-announced-pre-release -->

> **Allwynd01 wrote: Fri Oct 03, 2025 12:48 pm**
> In case you can't update all UI elements, will it be possible to have a version without updates UI elements to maintain consistency?

Will look to separate them out for you when I get chance. I'm curious what you found were the most inconsistent for you? The +/- options on the minimap are on my to do list, as is the frame that the day/night icon sites in, but I think those are the only major ones that stand out?

## Post 154400 by Allwynd01 (Bug Report Enthusiast) — 2025-10-05T06:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154400#p154400 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Fri Oct 03, 2025 4:05 pm**
> > **Allwynd01 wrote: Fri Oct 03, 2025 12:48 pm**
> > In case you can't update all UI elements, will it be possible to have a version without updates UI elements to maintain consistency?
>
>   Will look to separate them out for you when I get chance. I'm curious what you found were the most inconsistent for you? The +/- options on the minimap are on my to do list, as is the frame that the day/night icon sites in, but I think those are the only major ones that stand out?

I first looked at the minimap and saw some shadow around the inner circle, first I thought it was some change on the texture of the map inside the minimap, then I looked closer and noticed that the UI was made sharper. Initially I liked that very much, then I looked at the action bar and saw that one was updated as well, which made me even more excited, then I decided to open the rest of the UI and see if that has been updated too and when I realized it wasn't I decided to leave it as a feedback.

Basically the updated UI elements are sharper and more detailed, which I like, but the ones that aren't, are more blurry and even a bit pixelized and this inconsistency bothers me. I'm of the mentality of "either have it all or have nothing" so if you say that not all UI elements (like the window frames and buttons throughout the UI) cannot be updated, I would much prefer to have a version that doesn't touch the UI at all and just focuses on textures within the world. Don't take it a personal request of mine, I certainly don't view it this way myself, but rather sharing my opinion on how I see things in general. When I saw this mod, I didn't imagine that it will also include UI elements, but I was happy for it, my dissatisfaction came when I realized not everything is changed.

Also on the first side-by-side picture with the Orc in Orgrimmar, I noticed that on the right, the palm tree with the updated textures has part of the textures on the leaves of the palm made transparent, effectively it doesn't exist in certain places.

![Image](https://i.ibb.co/Nd7TfXy6/image.png)

## Post 154478 by Ellea — 2025-10-05T16:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154478#p154478 | page 1 | era: 1.18.1-announced-pre-release -->

> **Allwynd01 wrote: Sun Oct 05, 2025 6:34 am**
> Also on the first side-by-side picture with the Orc in Orgrimmar, I noticed that on the right, the palm tree with the updated textures has part of the textures on the leaves of the palm made transparent, effectively it doesn't exist in certain places.

Thanks! The latest version fixes this and some other bush/tree textures that had this problem

## Post 154500 by Mayson (Patch Note Conspiracy Theorist) — 2025-10-05T19:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154500#p154500 | page 1 | era: 1.18.1-announced-pre-release -->

Tried this out for a few days. The difference is night and day. Raw improvements, all in the style of the original vanilla.

Ellea, you are the immaculate one. Thank you for this work you have delivered.

## Post 154743 by marvian (Barrens Chat Casualty) — 2025-10-07T16:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154743#p154743 | page 1 | era: 1.18.1-announced-pre-release -->

INSANE WORK
finally an HD patch for vanilla models that is far away from the retail HD philosophy,
i would only like to ask to give us more before and after pic and for other patches despite the item and npc comparisson you already have posted ,i can confirm r14 warrior shoulders are HD with patch A

*Last edited by marvian on Tue Oct 07, 2025 4:39 pm, edited 1 time in total.*

## Post 154745 by Azcron (Patch Note Conspiracy Theorist) — 2025-10-07T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154745#p154745 | page 1 | era: 1.18.1-announced-pre-release -->

Does this affect custom items from not displaying properly? The current HD mod causes issues with them they do not have models currently.

## Post 154752 by Ellea — 2025-10-07T18:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154752#p154752 | page 1 | era: 1.18.1-announced-pre-release -->

> **marvian wrote: Tue Oct 07, 2025 4:35 pm**
> INSANE WORK
>  finally an HD patch for vanilla models that is far away from the retail HD philosophy,
>  i would only like to ask to give us more before and after pic and for other patches despite the item and npc comparisson you already have posted ,i can confirm r14 warrior shoulders are HD with patch A

I put this together quite lazily as I didn't plan to play Turtle but had people ask me to do so. I do plan on starting playing in a few weeks time, and I have been in chats with an awesome dude who has managed to push the Vanilla texture renderer to the same as WOTLK. In a few weeks (or less hopefully) I will have a major update to this, increasing the quality by effectively double, so when that is ready and I update this I will grab some better comparisons.

As for the patches themselves, I would just advise using everything aside from the interface patch if you use interface addons, and the map patch if you want PERFECT maps, everything else is just 'less blur' so I see no reason to not use them.

## Post 154754 by Ellea — 2025-10-07T18:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154754#p154754 | page 1 | era: 1.18.1-announced-pre-release -->

> **Azcron wrote: Tue Oct 07, 2025 4:38 pm**
> Does this affect custom items from not displaying properly? The current HD mod causes issues with them they do not have models currently.

This mod intentionally does not touch the client database files, which basically means this will not break with updates and any new content will just not be upscaled until I add it (that is assuming the turtle team dont decide to do some crazy things with existing models anyway).

## Post 154918 by hunternoob — 2025-10-09T00:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154918#p154918 | page 1 | era: 1.18.1-announced-pre-release -->

Dude, this is spectacular! Exactly what I've been wanting. Thank you so much for the work/time you put into this, it's very sincerely appreciated.

Does this change the red/yellow/green circle that appears up under your target? I've always thought it could & should look a little less blurry.

## Post 154934 by Eclefr — 2025-10-09T07:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154934#p154934 | page 1 | era: 1.18.1-announced-pre-release -->

Thx for all your work and the update !

For me, this is the best pack on the forum! The game is faithful yet sharp, it's incredible.

The ground textures in Storwind, for example, are magnificent.

Thank you !

## Post 155112 by Ellea — 2025-10-10T21:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155112#p155112 | page 1 | era: 1.18.1-announced-pre-release -->

> **hunternoob wrote: Thu Oct 09, 2025 12:29 am**
> Does this change the red/yellow/green circle that appears up under your target? I've always thought it could & should look a little less blurry.

It won't, some of those things are a little more tricky to do due to how the game renders and there is a lot of work involved outside of texture work

## Post 155523 by Mothius (Barrens Chat Casualty) — 2025-10-14T02:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155523#p155523 | page 1 | era: 1.18.1-announced-pre-release -->

Great mod, this is awesome for those of us who want better textures but keeping the Vanilla feel of the game, thanks for the work.

I would just like to make a small request:

Can you update the textures of these bookshelfs (and the books)?

![Image](https://i.imgur.com/siE92gU.png)

They are used in the High Elf character main screen, but also in some areas in the game, like Alah'thalas and Stormwind.

Thanks for the amazing work.

## Post 155569 by Ellea — 2025-10-14T14:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155569#p155569 | page 1 | era: 1.18.1-announced-pre-release -->

> **Mothius wrote: Tue Oct 14, 2025 2:50 am**
> I would just like to make a small request:
>
>  Can you update the textures of these bookshelfs (and the books)?
>
>  They are used in the High Elf character main screen, but also in some areas in the game, like Alah'thalas and Stormwind.

Unfortunately due to in-game memory limitations, any texture used on the character creation screen (which then gets re-used in-game) has to be small, if the total amount of textures on screen exceeds 2MB~ then the game will crash. I did have these upscaled originally but I ended up removing them for this reason.

A significant update will be coming *soon* as I have been working alongside a genius to remove some of these limitations, including armour upscales and texture size limits, and these should be upscaled as part of that.

## Post 155572 by Mothius (Barrens Chat Casualty) — 2025-10-14T15:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155572#p155572 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Tue Oct 14, 2025 2:29 pm**
> > **Mothius wrote: Tue Oct 14, 2025 2:50 am**
> > I would just like to make a small request:
> >
> >  Can you update the textures of these bookshelfs (and the books)?
> >
> >  They are used in the High Elf character main screen, but also in some areas in the game, like Alah'thalas and Stormwind.
>
>   Unfortunately due to in-game memory limitations, any texture used on the character creation screen (which then gets re-used in-game) has to be small, if the total amount of textures on screen exceeds 2MB~ then the game will crash. I did have these upscaled originally but I ended up removing them for this reason.
>
>  A significant update will be coming *soon* as I have been working alongside a genius to remove some of these limitations, including armour upscales and texture size limits, and these should be upscaled as part of that.

Thanks for the reply and the amazing work on the mod!

## Post 156163 by Mrrosh (Barrens Chat Casualty) — 2025-10-19T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156163#p156163 | page 1 | era: 1.18.1-announced-pre-release -->

Thank you for the update, looks amazing!

## Post 156192 by Rofos — 2025-10-19T15:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156192#p156192 | page 1 | era: 1.18.1-announced-pre-release -->

Great update, keep it up!

VanillaHelpers is *the* game changer for all 1.12.1 servers, whoever created it is a f **G**.

Now we all need to spread the news about new texture and memory limits so other mods like "A little extra" and "Bikini mod" could look as crisp as your work =P   turtle_in_love_head

Also waiting for that Legion character models update. Used your Epoch version and the character models looked incredible, can't wait for them to be as deatailed here. The legion models never looked that good on 1.12.1 but not anymore I guess!   smiling_turtle_head

## Post 156199 by Oniwa — 2025-10-19T16:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156199#p156199 | page 1 | era: 1.18.1-announced-pre-release -->

Greetings, is it possible to seperate the player models from the armor texture?

It would be great to use armor texture with the patch "Little extra".

## Post 156235 by Mothius (Barrens Chat Casualty) — 2025-10-19T23:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156235#p156235 | page 1 | era: 1.18.1-announced-pre-release -->

A massive improvement after the new update, thanks for the great work!

## Post 156256 by Rofos — 2025-10-20T07:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156256#p156256 | page 1 | era: 1.18.1-announced-pre-release -->

> **Oniwa wrote: Sun Oct 19, 2025 4:35 pm**
> Greetings, is it possible to seperate the player models from the armor texture?
>
>  It would be great to use armor texture with the patch "Little extra".

I tried that, but that doesn't seem to be the issue. Little extra uses HD models from Legion, for some reason the mod misbehaves because of the upscaled textures and the new .dll related files.

Long story short, the textures for the HD mod must be updated/upscaled/upsized first. Maybe even remeshed. Then It will work. Or some interference with DBC files might fix that, not sure. Let's give modders some time.

But we certainly **must** make other modders aware of this new .dll that expands the size limit for the textures. Every texture mod for Turtle might look crispier than what ppl have at retail.

## Post 156282 by Ellea — 2025-10-20T10:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156282#p156282 | page 2 | era: 1.18.1-announced-pre-release -->

> **Rofos wrote: Mon Oct 20, 2025 7:11 am**
> Long story short, the textures for the HD mod must be updated/upscaled/upsized first.

This is correct, they just need upscaling x4 of what they are normally.

They will be required to use this mod if they do that though, not just the .dll, as it enforces all player textures to x4 including armours.

I've updated the thread post to add some guidance for modders.

## Post 156359 by Inff — 2025-10-20T21:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156359#p156359 | page 2 | era: 1.18.1-announced-pre-release -->

With latest version armors in heavy populated areas appears black on many people and after a few moments game crashes. Without patch P it works fine. Idk if this is cause my old PC or? I have 16gm RAM.

## Post 156362 by Ellea — 2025-10-20T21:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156362#p156362 | page 2 | era: 1.18.1-announced-pre-release -->

> **Inff wrote: Mon Oct 20, 2025 9:03 pm**
> With latest version armors in heavy populated areas appears black on many people and after a few moments game crashes. Without patch P it works fine. Idk if this is cause my old PC or? I have 16gm RAM.

You're likley hitting the games memory limit - see the performance section on the main post. You probably have addons that are eating up your RAM. Not much I can do for now other then advise you turn off Patch-P, everything else will work fine you just won't get upscaled players/armours.

## Post 156365 by Inff — 2025-10-20T21:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156365#p156365 | page 2 | era: 1.18.1-announced-pre-release -->

I have black armors and crash even with all addons disabled. Idk if this is problem with my client and i need to reinstall or smth or my PC is too slow for this mod. Upscaled armors looks amazing, really want to use P patch.

## Post 156366 by Ellea — 2025-10-20T21:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156366#p156366 | page 2 | era: 1.18.1-announced-pre-release -->

> **Inff wrote: Mon Oct 20, 2025 9:25 pm**
> I have black armors and crash even with all addons disabled. Idk if this is problem with my client and i need to reinstall or smth or my PC is too slow for this mod. Upscaled armors looks amazing, really want to use P patch.

Can you try logging in on a level 1 character and let me know if it crashes after 5 minutes?

Are the armours broken on your character, can you post an image?

Also can you tell me what the crash error says?

## Post 156372 by Inff — 2025-10-20T21:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156372#p156372 | page 2 | era: 1.18.1-announced-pre-release -->

Looks like crashes happens immediately only in SW Trade district. Logged in Orgrimmar and there were no crashes in like 5 mins and no black armors.
In SW my character and many around me is black, besides shoulders, shield and weapon. I tried to reload a  few times and sometimes armor looks normal, but crashes anyway.
As for error text its "memory cannot be read" with bunch of zeros and different letters every time.
Also, strangely, i cant seem to change graphic settings with this mod - got another crash when hit apply.

## Post 156373 by Koilos33 — 2025-10-20T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156373#p156373 | page 2 | era: 1.18.1-announced-pre-release -->

Works flawlessly for me even on SW, but there's a few small visual bugs. The ship on the walls of Caverns of Time have weird windows. The abominations on the operating tables at the UC apothecary have black textures on their guts.
Great work btw, I was working on something similar 2 years ago and stopped because I'm lazy :D
Glad to see someone had the same idea and less lazyness

## Post 156376 by Ellea — 2025-10-20T22:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156376#p156376 | page 2 | era: 1.18.1-announced-pre-release -->

> **Inff wrote: Mon Oct 20, 2025 9:56 pm**
> Looks like crashes happens immediately only in SW Trade district. Logged in Orgrimmar and there were no crashes in like 5 mins and no black armors.
>  In SW my character and many around me is black, besides shoulders, shield and weapon. I tried to reload a  few times and sometimes armor looks normal, but crashes anyway.
>  As for error text its "memory cannot be read" with bunch of zeros and different letters every time.
>  Also, strangely, i cant seem to change graphic settings with this mod - got another crash when hit apply.

Not sure honestly - this could be a VRAM related issue if you have an old graphics card / one with not much vram. You could also try disabling other DLL (mods) that you have on in the launcher?

*Last edited by Ellea on Mon Oct 20, 2025 10:59 pm, edited 2 times in total.*

## Post 156377 by Ellea — 2025-10-20T22:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156377#p156377 | page 2 | era: 1.18.1-announced-pre-release -->

> **Koilos33 wrote: Mon Oct 20, 2025 10:09 pm**
> Works flawlessly for me even on SW, but there's a few small visual bugs. The ship on the walls of Caverns of Time have weird windows. The abominations on the operating tables at the UC apothecary have black textures on their guts.
>  Great work btw, I was working on something similar 2 years ago and stopped because I'm lazy :D
>  Glad to see someone had the same idea and less lazyness

Thanks I will take a look at those - it's always a case of waiting for things to be reported so I can fix them.

## Post 156379 by Koilos33 — 2025-10-20T23:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156379#p156379 | page 2 | era: 1.18.1-announced-pre-release -->

there's also a brown horde cat form that has all the textures misplaced, it's head is on its ass

## Post 156380 by Ellea — 2025-10-20T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156380#p156380 | page 2 | era: 1.18.1-announced-pre-release -->

Ahh yep, WOTLK textures downported.. which are different to vanilla.. will have to double check there arent any others

EDIT: Updated Patch-A with the fix for druid cat forms.. just popped in my 512px vanilla upscale for now since it's urgent.

## Post 156430 by Inff — 2025-10-21T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156430#p156430 | page 2 | era: 1.18.1-announced-pre-release -->

![Image](https://i.ibb.co/Q34tPpNV/20251021-140306.jpg)

It looks like this for me sometimes. And game crashes, if i trying to print screen.

## Post 156436 by Ellea — 2025-10-21T11:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156436#p156436 | page 2 | era: 1.18.1-announced-pre-release -->

> **Inff wrote: Tue Oct 21, 2025 11:13 am**
> It looks like this for me sometimes. And game crashes, if i trying to print screen.

Sadly like I said, not much advice I can offer as it works for myself and friends - if you're running on an older system it is maybe related to your graphics cards VRAM running out, you could also try enabling DXVK in the Mods -> Launcher section if you've not got it enabled, and/or disable other mods aside from VanillaHelpers

## Post 156496 by Inff — 2025-10-21T18:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156496#p156496 | page 2 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Tue Oct 21, 2025 11:52 am**
> > **Inff wrote: Tue Oct 21, 2025 11:13 am**
> > It looks like this for me sometimes. And game crashes, if i trying to print screen.
>
>   Sadly like I said, not much advice I can offer as it works for myself and friends - if you're running on an older system it is maybe related to your graphics cards VRAM running out, you could also try enabling DXVK in the Mods -> Launcher section if you've not got it enabled, and/or disable other mods aside from VanillaHelpers

So i was using Vanila fixes , but without DXVK. Installed it, now textures works fine and seems like no crashes.
Can you confirm , that this mod supposed to be used with DXVK?
I have a problem with DXVK because of bad anti aliasing, rather will use dx vanilla fixes.

## Post 156497 by Ankerdankerf — 2025-10-21T18:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156497#p156497 | page 2 | era: 1.18.1-announced-pre-release -->

> **Inff wrote: Tue Oct 21, 2025 11:13 am**
> It looks like this for me sometimes. And game crashes, if i trying to print screen.

Black matters :>

OT
I also dit not use DXVK because of missing AA.
But actually downloading your mod.

So, it awaits me also this problem?

Edit: OK, I log in(Stormwind), it start loading characters around me, Im in game and then some seconds later it crash "not enough memory for the command...."

## Post 156501 by Koilos33 — 2025-10-21T19:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156501#p156501 | page 2 | era: 1.18.1-announced-pre-release -->

I'd say DXVK really helps, I've been finicking with things because I play on a steamdeck desktop mode and need as much performance as I can get. That's the thing that has helped me the most

## Post 156503 by Rofos — 2025-10-21T19:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156503#p156503 | page 2 | era: 1.18.1-announced-pre-release -->

People who get crashes, did you also install the .dll file as it is instructed in the 1st post?

## Post 156505 by Ankerdankerf — 2025-10-21T19:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156505#p156505 | page 2 | era: 1.18.1-announced-pre-release -->

> **Rofos wrote: Tue Oct 21, 2025 7:25 pm**
> People who get crashes, did you also install the .dll file as it is instructed in the 1st post?

Yes

![Image](https://i.imgur.com/x8GUze0.jpeg)
![Image](https://i.imgur.com/FE1f4R5.jpeg)

## Post 156508 by Ellea — 2025-10-21T20:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156508#p156508 | page 2 | era: 1.18.1-announced-pre-release -->

This has only been tested with DXVK enabled, issues with AA I believe are related to the version of DXVK but you'd need to double check - I think the latest version (as of a month ago) AA did not work and you had to use the previous version.

I'll update my original post to state as such.

In relation to out of memory errors, as it says on the main post - Patch-P is a memory hog and there are still limits to what Vanilla can do - the default internal allocator limit was 2GB, VanillaHelpers should increase that to about 3GB~. You have a LOT of DLL's enabled, and each one of those will be using more RAM, so you'll need to do some testing and take a look at your addons if you want it to run more stable (or skip on using Patch-P). My hands are tied due to the memory limitations.

*Last edited by Ellea on Tue Oct 21, 2025 9:05 pm, edited 1 time in total.*

## Post 156510 by Inff — 2025-10-21T20:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156510#p156510 | page 2 | era: 1.18.1-announced-pre-release -->

I tried clean install, no addons, fresh config file, no other dlls, besides vanillahelpers.
Windowerd, fullscreen, gsync on and off, different characters, but have black textures (white if windowed) on all of them, when testing this mod in SW trade district, wich is most packed area in game i know. If there is few ppl around, it works fine.
Only disabling patch-P or using DXVK seem to solve the problem, but i like antialiasing more than sharper armor, so thats that for me.

*Last edited by Inff on Tue Oct 21, 2025 9:13 pm, edited 2 times in total.*

## Post 156513 by Rofos — 2025-10-21T20:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156513#p156513 | page 2 | era: 1.18.1-announced-pre-release -->

> **Ankerdankerf wrote: Tue Oct 21, 2025 7:32 pm**
> > **Rofos wrote: Tue Oct 21, 2025 7:25 pm**
> > People who get crashes, did you also install the .dll file as it is instructed in the 1st post?
>
>  Yes

Weird. Try disabling DXVK or changing its version.

I'm running the game on this [<bad boy>](https://www.meetgadget.com/gadget/43668/Acer+Aspire+Predator+G3600)

It was released in **2011**! Has a very ancient Nvidia GT 545 graphics card with only 1.5GB of memory and an entry level 2nd gen Intel 2300 Processor (The current gen is 14th fyi). The only upgrade I did was from 4GB of RAM to 16GB and it's still DDR3.

Therefore, there's absoultely no way my machine outperforms yours no matter how old it is. And Faithful isn't even the only mod I run, there are like 6 other ones as well.  So, your issue might be drivers, other mods conflicting, DXVK, etc...

## Post 156517 by Inff — 2025-10-21T21:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156517#p156517 | page 2 | era: 1.18.1-announced-pre-release -->

Btw, my RAM usage with vanilla fixes(non VK) + This mod, in SW district , where crashes and black textures appear, are 2.7-2.8 GB. I have 16gb of ram. With DXVK installed RAM usage is down to lile 2 GB in same place.

## Post 156518 by Koilos33 — 2025-10-21T21:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156518#p156518 | page 2 | era: 1.18.1-announced-pre-release -->

Just so people know, I'm running this on DXVK v2.6.1

## Post 156647 by Ankerdankerf — 2025-10-22T20:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156647#p156647 | page 2 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Tue Oct 21, 2025 8:14 pm**
> In relation to out of memory errors, as it says on the main post - Patch-P is a memory hog and there are still limits to what Vanilla can do - the default internal allocator limit was 2GB, VanillaHelpers should increase that to about 3GB~. You have a LOT of DLL's enabled, and each one of those will be using more RAM, so you'll need to do some testing and take a look at your addons if you want it to run more stable (or skip on using Patch-P). My hands are tied due to the memory limitations.

I testet it also without patch P
I testet it also without the world texture patches A-G, and only with patch P
Always this memory error(different line/path ect).

I clear the data folder complete(after backup it^^) and let the laucher install fresh and copied the mod again, -->same.

I disable the discord dll, no changes
I disable dxvk, no changes
I disable unitXP, no changes
I disable nampower, also no changes

the dsound dll is from creative labs to use surround sound with alchemy(for EAX, I won't play without)
no1600x1200 needed becaus of 4k and multi mon setup

My setup is:
Ryzen7 5800x3D
 32GB RAM
RTX4700

Its sad because what I've seen is really cool. I like it really, but it won't run on my system. :(

## Post 156661 by Mothius (Barrens Chat Casualty) — 2025-10-23T03:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156661#p156661 | page 2 | era: 1.18.1-announced-pre-release -->

> **Inff wrote: Tue Oct 21, 2025 9:14 pm**
> Btw, my RAM usage with vanilla fixes(non VK) + This mod, in SW district , where crashes and black textures appear, are 2.7-2.8 GB. I have 16gb of ram. With DXVK installed RAM usage is down to lile 2 GB in same place.

I'm running the game without DXVK (it drop the framerate badly when rainning) and i'm only using Vanilla Fixes, a few addons and this mod, and didn't have any problems so far, even in SW and the trade district, could be some add-on that conflict with the mod.

*Last edited by Mothius on Sat Oct 25, 2025 3:02 pm, edited 1 time in total.*

## Post 156802 by Mothius (Barrens Chat Casualty) — 2025-10-24T03:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156802#p156802 | page 2 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Mon Oct 20, 2025 10:09 am**
> This is correct, they just need upscaling x4 of what they are normally.
>
>  They will be required to use this mod if they do that though, not just the .dll, as it enforces all player textures to x4 including armours.

I'm not a programmer, so i don't understand very well, but, is possible to make an alternative version of the MPQ files where the scaling is 3X instead 4X?

In that way, in theory, the textures will consume a bit less of memory making harder to hit the 4GB cap, is this correct (and possible)?

## Post 156812 by Sydalia — 2025-10-24T06:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156812#p156812 | page 2 | era: 1.18.1-announced-pre-release -->

I noticed that something seems to have happened to the Warder's Shirt (A crop top shirt that high elf hunters start with). Its texture has gotten heavily distorted.

<https://database.turtlecraft.gg/?item=20901>

## Post 156857 by Ellea — 2025-10-24T10:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156857#p156857 | page 2 | era: 1.18.1-announced-pre-release -->

> **Mothius wrote: Fri Oct 24, 2025 3:09 am**
> is possible to make an alternative version of the MPQ files where the scaling is 3X instead 4X?

They can be scaled to either x2 or x4 - when I fix some further issues with the armours I will be releasing a x2 'performance' version

It's just more to manage / fix, hence why I want to get the x4 in to a good spot first

## Post 156859 by Ellea — 2025-10-24T10:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156859#p156859 | page 2 | era: 1.18.1-announced-pre-release -->

> **Sydalia wrote: Fri Oct 24, 2025 6:18 am**
> I noticed that something seems to have happened to the Warder's Shirt (A crop top shirt that high elf hunters start with). Its texture has gotten heavily distorted.

Thanks, looks like the wrong armour has been applied to the top part. Will look to fix.

## Post 156893 by Dark0 — 2025-10-24T14:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156893#p156893 | page 2 | era: 1.18.1-announced-pre-release -->

Love this! Works great for me, I wanted to keep vanilla feel with my mods, so this is nice bump in texture quality, very noticealbe in some parts of the world, and especially the Map! Also can report that it doesn't cause any performance issues, I'm playing through Steam Deck connected to 2k monitor and even on such lower end device it runs fine.

## Post 156910 by Rofos — 2025-10-24T17:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156910#p156910 | page 2 | era: 1.18.1-announced-pre-release -->

High Elven ships to the north of Alah'Thalas seem to have some minor texture issues ![Image](https://live.staticflickr.com/65535/54877283728_c884ee409f_b.jpg)

Also, the entire zone of Thalassian Highlands and the city of Alah'Thalas seem to be very unstable for me with common crashes every 10-15 min for no apparent reason. So far, they have been the only locations where I expirienced crashes. Northwind, Balor and Grim Reaches (All custom stuff) were smooth.

## Post 156927 by Ellea — 2025-10-24T20:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156927#p156927 | page 2 | era: 1.18.1-announced-pre-release -->

> **Rofos wrote: Fri Oct 24, 2025 5:42 pm**
> High Elven ships to the north of Alah'Thalas seem to have some minor texture issues ![Image](https://live.staticflickr.com/65535/54877283728_c884ee409f_b.jpg)
>
>
>   Also, the entire zone of Thalassian Highlands and the city of Alah'Thalas seem to be very unstable for me with common crashes every 10-15 min for no apparent reason. So far, they have been the only locations where I expirienced crashes. Northwind, Balor and Grim Reaches (All custom stuff) were smooth.

Have you updated to the latest version? The update was specifically to fix some issues in the elf areas

## Post 156950 by Mothius (Barrens Chat Casualty) — 2025-10-25T02:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156950#p156950 | page 2 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Fri Oct 24, 2025 10:33 am**
> > **Mothius wrote: Fri Oct 24, 2025 3:09 am**
> > is possible to make an alternative version of the MPQ files where the scaling is 3X instead 4X?
>
>   They can be scaled to either x2 or x4 - when I fix some further issues with the armours I will be releasing a x2 'performance' version
>
>  It's just more to manage / fix, hence why I want to get the x4 in to a good spot first

Oh i understand, maybe a 2X version only for patch-p.mpq would be interesting, since it is the most demanding and would require less work than make for all of them.

## Post 157000 by Ellea — 2025-10-25T11:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157000#p157000 | page 2 | era: 1.18.1-announced-pre-release -->

> **Sydalia wrote: Fri Oct 24, 2025 6:18 am**
> I noticed that something seems to have happened to the Warder's Shirt (A crop top shirt that high elf hunters start with). Its texture has gotten heavily distorted.

This is fixed as of today with the latest update, among a bunch of other armour issues. I did see a seam line on that specific top, but it looks like that on the original as well.

## Post 157001 by Ellea — 2025-10-25T11:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157001#p157001 | page 2 | era: 1.18.1-announced-pre-release -->

> **Mothius wrote: Sat Oct 25, 2025 2:48 am**
> Oh i understand, maybe a 2X version only for patch-p.mpq would be interesting

That is the plan, there will be a Performance or Quality option for both Patch-P and the new Patch-O.

## Post 157140 by Hawksley — 2025-10-26T10:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157140#p157140 | page 3 | era: 1.18.1-announced-pre-release -->

Great addon, thank you for this. If I'm using the launcher will it automatically notify if there is an update or should I keep an eye on this thread for any updates?

## Post 157143 by Ellea — 2025-10-26T10:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157143#p157143 | page 3 | era: 1.18.1-announced-pre-release -->

> **Hawksley wrote: Sun Oct 26, 2025 10:24 am**
> If I'm using the launcher will it automatically notify if there is an update or should I keep an eye on this thread for any updates?

Sadly there are no automatic updates so you'll need to keep an eye on the thread.

I'll be posting a new update either today or over the next few days as I have fixed a small handful of world textures with issues (and hopefully the last bugfix update to those patches).

There won't be many updates after that for a long while, only a 'performance' lower quality version for Patch O/P, and if those currently run fine for you there is nothing to worry about.

## Post 157581 by Treadstone — 2025-10-28T20:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157581#p157581 | page 3 | era: 1.18.1-announced-pre-release -->

Thanks so much for this add-on! It looks amazing!

I actually don't mind the WoD-era updated player models in the other big HD patches. What really bugs me is seeing trees and structures that I recognize as being from completely different continents or even planets from future expansions. It's immersion-breaking.

The only thing I wish this mod had was better water, but I understand if it's not going to be changed since it's supposed to be a faithful upscale. Is there a stand-alone water improvement mpq mod somewhere out there? Guess I can go look for it.

Thank you again!

## Post 157598 by Ellea — 2025-10-28T23:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157598#p157598 | page 3 | era: 1.18.1-announced-pre-release -->

> **Treadstone wrote: Tue Oct 28, 2025 8:51 pm**
> I actually don't mind the WoD-era updated player models in the other big HD patches. What really bugs me is seeing trees and structures that I recognize as being from completely different continents or even planets from future expansions. It's immersion-breaking.
>
>  The only thing I wish this mod had was better water, but I understand if it's not going to be changed since it's supposed to be a faithful upscale. Is there a stand-alone water improvement mpq mod somewhere out there? Guess I can go look for it.

I'm in the same boat and it's the only reason I bothered to start this project to begin with - I don't dislike the more retail art style, I just dislike the inconsistencies that porting across those textures/models bring with the rest of the environment when things aren't changed, and the questionable changes to things like tree models in Duskwood / Stranglethorn looking nothing like the original and out of place.

I will probably in a few weeks time create a version of the HD character models and upscale the associated NPC textures so myself and others can use that alongside this.

As for water - check out the main post in this, I have added an 'Extras' section with the Epoch water mod which is the best you'll get.

## Post 157796 by Bomboklaad — 2025-10-30T09:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157796#p157796 | page 3 | era: 1.18.1-announced-pre-release -->

Can I use this together with Stormhands "A new Era"- patches?

Afaik its partly integrated already, but not fully

## Post 157929 by Ellea — 2025-10-31T10:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157929#p157929 | page 3 | era: 1.18.1-announced-pre-release -->

> **Bomboklaad wrote: Thu Oct 30, 2025 9:26 am**
> Can I use this together with Stormhands "A new Era"- patches?
>
>  Afaik its partly integrated already, but not fully

No you cannot, it needs the HD models upscaling (for Patch O/P) and it has the lower res version of this integrated into it, so using that will force the lower res textures (or break things)

## Post 157958 by Sulpherstaer — 2025-10-31T16:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157958#p157958 | page 3 | era: 1.18.1-announced-pre-release -->

> **Bomboklaad wrote: Thu Oct 30, 2025 9:26 am**
> Can I use this together with Stormhands "A new Era"- patches?
>
>  Afaik its partly integrated already, but not fully

Despite the creator saying it's not possible, it is - in part. You can'-t use Patch A. That's right out. But patch B is possible, and Patch C as well. Rename the patch B to patch ! (yes, exclamation mark) - and rename patch C to any letter past G.)

## Post 157980 by Ellea — 2025-10-31T19:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157980#p157980 | page 3 | era: 1.18.1-announced-pre-release -->

> **Sulpherstaer wrote: Fri Oct 31, 2025 4:51 pm**
> Despite the creator saying it's not possible, it is - in part. You can'-t use Patch A. That's right out. But patch B is possible, and Patch C as well. Rename the patch B to patch ! (yes, exclamation mark) - and rename patch C to any letter past G.)

It's technically possible but the issue is Storm merged in the 512px versions of this into his mod so those will overwrite the 1024px upscales that this mod does, making them pointless, and if you load this after you will break things because it uses model edits that expect different textures to the vanilla ones

If you don't include the HD character models then you might be able to get away with using Patch-O/P from this, but then you might have issues with Storms patches depending on where he has put the armour textures since those also have model edits (depending on were they are)

So yeah, it's technically possible, but I would advise against it or you will see glitches / broken things

## Post 157989 by Sulpherstaer — 2025-10-31T22:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157989#p157989 | page 3 | era: 1.18.1-announced-pre-release -->

So far I have not seen any issues. Patch C adds HD models of mobs, and B when loaded first, changed some buildings and trees, but the ugly textures B introduces in places like Ironforge, are most certainly overwritten by your patches and present the lovely upscaled textures.

Should I find any issues, I'll note them down, not really for you to fix, but for people who do want to try these together, to be notified.

I genuinely LOVE these upscaled textures. It's just sad that P & O crash my Client each time, but on the few times I did try them, a2nd it didn't crash, they are also awesome.

## Post 158022 by Inff — 2025-11-01T08:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158022#p158022 | page 3 | era: 1.18.1-announced-pre-release -->

Any ETA on performance optimized patch P?
I loved it so much, but cant play with it, because of black character textures and crashes.
Checking updates few times a day.

## Post 158082 by Ellea — 2025-11-01T18:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158082#p158082 | page 3 | era: 1.18.1-announced-pre-release -->

> **Inff wrote: Sat Nov 01, 2025 8:45 am**
> Any ETA on performance optimized patch P?
>  I loved it so much, but cant play with it, because of black character textures and crashes.
>  Checking updates few times a day.

I have just added the performance patches under 'Extras', let me know if they work for you. Make sure you have the VanillaHelpers DLL enabled as well, or it will cause issues.

## Post 158092 by Inff — 2025-11-01T21:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158092#p158092 | page 3 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Sat Nov 01, 2025 6:40 pm**
> > **Inff wrote: Sat Nov 01, 2025 8:45 am**
> > Any ETA on performance optimized patch P?
> >  I loved it so much, but cant play with it, because of black character textures and crashes.
> >  Checking updates few times a day.
>
>   I have just added the performance patches under 'Extras', let me know if they work for you. Make sure you have the VanillaHelpers DLL enabled as well, or it will cause issues.

Thanks for the update. Played with it for an hour on few AVs and SW trade district. No crashes and black textures so far. Seems to be working fine with my setup.  turtle_in_love

## Post 158101 by Theoriginalto — 2025-11-02T02:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158101#p158101 | page 3 | era: 1.18.1-announced-pre-release -->

Hey! Appreciate the work! I just updated to the latest downloads of everything but I and O. I logged in now to play my Tauren to discover he is now naked. Seems like most Tauren in game were stripped of their armor etc.

## Post 158119 by Ellea — 2025-11-02T11:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158119#p158119 | page 3 | era: 1.18.1-announced-pre-release -->

> **Theoriginalto wrote: Sun Nov 02, 2025 2:47 am**
> I just updated to the latest downloads of everything but I and O. I logged in now to play my Tauren to discover he is now naked.

Both Patch-O and Patch-P must be used together otherwise armours / characters will have issues rendering, so I think that is likely the cause of the issue for you. I would redownload P & O.

If you're using the new performance patch under Extras, you need to use both the P & O from there, you cannot mix and match with P&O from the main mod.

## Post 158121 by Decrapifier — 2025-11-02T12:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158121#p158121 | page 3 | era: 1.18.1-announced-pre-release -->

Getting some weird stuff with the HD pack from storm.

![Image](https://i.imgur.com/12xy4bI.png)
![Image](https://i.imgur.com/YTGFqkh.jpeg)

Am I the only one?
Seem like the faithful is causing this. If i disable it than its just normal

Can someone help out?

## Post 158125 by Ellea — 2025-11-02T13:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158125#p158125 | page 3 | era: 1.18.1-announced-pre-release -->

> **Decrapifier wrote: Sun Nov 02, 2025 12:03 pm**
> Can someone help out?

Please read the original post, those patches wont be compatible, you are putting upscaled original character textures onto HD models - they will not work.

## Post 158126 by Theoriginalto — 2025-11-02T13:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158126#p158126 | page 3 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Sun Nov 02, 2025 11:21 am**
> > **Theoriginalto wrote: Sun Nov 02, 2025 2:47 am**
> > I just updated to the latest downloads of everything but I and O. I logged in now to play my Tauren to discover he is now naked.
>
>   Both Patch-O and Patch-P must be used together otherwise armours / characters will have issues rendering, so I think that is likely the cause of the issue for you. I would redownload P & O.
>
>  If you're using the new performance patch under Extras, you need to use both the P & O from there, you cannot mix and match with P&O from the main mod.

Sorry about that, thought I mimic'd the last files correctly, everything is running just fine now using all required files. Cheers!

## Post 158208 by Hawksley — 2025-11-03T13:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158208#p158208 | page 3 | era: 1.18.1-announced-pre-release -->

Faithful models is just amazing, I can't thank you enough for this. I've zapped several stupid mounts/costumes in Org and it's immensely satisfying.

## Post 158294 by Ellisd — 2025-11-03T23:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158294#p158294 | page 3 | era: 1.18.1-announced-pre-release -->

Sorry if this has already been addressed, but is it possible to use the Patch-O Twow Raid visuals patch with this? Do we just name it to a different letter or is there an alternative we have to use?

## Post 158320 by Ellea — 2025-11-04T11:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158320#p158320 | page 3 | era: 1.18.1-announced-pre-release -->

> **Ellisd wrote: Mon Nov 03, 2025 11:42 pm**
> Sorry if this has already been addressed, but is it possible to use the Patch-O Twow Raid visuals patch with this? Do we just name it to a different letter or is there an alternative we have to use?

I haven't tested it but it certainly should work, just make sure to name it a letter after P alphabetically.

## Post 158362 by The606 — 2025-11-04T18:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158362#p158362 | page 3 | era: 1.18.1-announced-pre-release -->

Reoccurring crash at launch. Fresh install of twow, no other mods/addons. I've tried each file one at a time (with the exception of P/O which I tried as a pair) and can't get past logging in.

It's the 'Access Violation' error. Any suggestions on how to solve it or what information about the crash I should examine?

## Post 158366 by Ellea — 2025-11-04T20:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158366#p158366 | page 3 | era: 1.18.1-announced-pre-release -->

> **The606 wrote: Tue Nov 04, 2025 6:37 pm**
> Reoccurring crash at launch. Fresh install of twow, no other mods/addons. I've tried each file one at a time (with the exception of P/O which I tried as a pair) and can't get past logging in.
>
>  It's the 'Access Violation' error. Any suggestions on how to solve it or what information about the crash I should examine?

To clarify, you cannot get to character select but you can see the login screen?

With all patches enabled does the login screen look broken? (Green textures)

My initial thoughts would be that VanillaHelpers is not enabled, double check that you can see it on the launchers 'MODS' menu (check the original post for an image reference).

## Post 158430 by Ankerdankerf — 2025-11-05T09:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158430#p158430 | page 3 | era: 1.18.1-announced-pre-release -->

Thanks for the P&O "light" patches, but, they look not so good^^

My Problem is, anyway, that I get always in some moments a crash if I use the original P&O patch.

Allready checked now with a clean install.
Dont know why.

I'm "only" interested on the Armor Textures, nothing else.

## Post 158434 by Ellea — 2025-11-05T10:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158434#p158434 | page 3 | era: 1.18.1-announced-pre-release -->

> **Ankerdankerf wrote: Wed Nov 05, 2025 9:24 am**
> Thanks for the P&O "light" patches, but, they look not so good^^

The performance Patch-P/O looks fine as long as you aren't zooming in, I am not sure what you expect but it's a reasonable improvement over the original. The performance patch is x2 the original resolution and the main mods version is x4.

[![Image](https://i.ibb.co/F478kZqm/patch-p-performance.png)](https://ibb.co/WvKBN8pG)

You need DXVK to use the main mods version, or the game will crash due to too much RAM allocation. DXVK has optimisations which reduce RAM overheard, and because this is an old 32bit game too much RAM usage will crash it which is what is causing the issue for you in Stormwind. It's not a system-specific issue.

## Post 158539 by Sulpherstaer — 2025-11-06T01:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158539#p158539 | page 3 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Wed Nov 05, 2025 10:39 am**
> > **Ankerdankerf wrote: Wed Nov 05, 2025 9:24 am**
> > Thanks for the P&O "light" patches, but, they look not so good^^
>
>   The performance Patch-P/O looks fine as long as you aren't zooming in, I am not sure what you expect but it's a reasonable improvement over the original. The performance patch is x2 the original resolution and the main mods version is x4.
>
>  [![Image](https://i.ibb.co/F478kZqm/patch-p-performance.png)](https://ibb.co/WvKBN8pG)
>
>  You need DXVK to use the main mods version, or the game will crash due to too much RAM allocation. DXVK has optimisations which reduce RAM overheard, and because this is an old 32bit game too much RAM usage will crash it which is what is causing the issue for you in Stormwind. It's not a system-specific issue.

THANK YOU SO MUCH FOR MAKING THE PERFORMANCE VARIANT! no longer does stormwind instantly crash my game, and indeed, it does look better!

## Post 158864 by Ellisd — 2025-11-08T08:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158864#p158864 | page 3 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Wed Nov 05, 2025 10:39 am**
> > **Ankerdankerf wrote: Wed Nov 05, 2025 9:24 am**
> > Thanks for the P&O "light" patches, but, they look not so good^^
>
>   The performance Patch-P/O looks fine as long as you aren't zooming in, I am not sure what you expect but it's a reasonable improvement over the original. The performance patch is x2 the original resolution and the main mods version is x4.
>
>  [![Image](https://i.ibb.co/F478kZqm/patch-p-performance.png)](https://ibb.co/WvKBN8pG)
>
>  You need DXVK to use the main mods version, or the game will crash due to too much RAM allocation. DXVK has optimisations which reduce RAM overheard, and because this is an old 32bit game too much RAM usage will crash it which is what is causing the issue for you in Stormwind. It's not a system-specific issue.

Agreed, I can barely tell the difference between the performance and the main. Performance looks great.

## Post 158888 by fa1l1l — 2025-11-08T11:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158888#p158888 | page 3 | era: 1.18.1-announced-pre-release -->

how to merge this mod with little extra mod?

## Post 158940 by Ellea — 2025-11-08T23:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158940#p158940 | page 3 | era: 1.18.1-announced-pre-release -->

> **fa1l1l wrote: Sat Nov 08, 2025 11:34 am**
> how to merge this mod with little extra mod?

I've not used it buut from a quick glance you need the HD models patch from the extra section of this, and you will need to rename the little extra patch to be alphabetically after it (rename it to Patch-V or something)

## Post 158948 by Mothius (Barrens Chat Casualty) — 2025-11-09T00:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158948#p158948 | page 3 | era: 1.18.1-announced-pre-release -->

One question, i tried to download the latest version of Vanilla Helpers and the Windows Defender is identifying the file as a virus, the file is safe? Can i put in the Windows Defender exception list without any problems?

## Post 158985 by Ellea — 2025-11-09T12:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158985#p158985 | page 3 | era: 1.18.1-announced-pre-release -->

> **Mothius wrote: Sun Nov 09, 2025 12:49 am**
> One question, i tried to download the latest version of Vanilla Helpers and the Windows Defender is identifying the file as a virus, the file is safe? Can i put in the Windows Defender exception list without any problems?

VanillaHelpers modifies certain parts of the game’s code to enable higher-quality textures and improve memory handling. This kind of behavior can look similar to what malware does.. for example, if a program overwrote parts of another application to change how it runs to do things without your knowledge. Antivirus software often flags it as suspicious even when it’s harmless as it does not understand the context and those things can be dangerous.

The code is fully open source and available to review on the download page, and the repository is open for contributions. That said, as with any third-party tool, you should use it at your own discretion.

## Post 159417 by Hawksley — 2025-11-12T21:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159417#p159417 | page 3 | era: 1.18.1-announced-pre-release -->

Any chance Faithful models might be expanded to includes skins from the donation store? I'm seeing a few fel orcs and it's kind of annoying.

## Post 159418 by Hawksley — 2025-11-12T21:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159418#p159418 | page 3 | era: 1.18.1-announced-pre-release -->

Any chance Faithful models might be expanded to includes skins from the donation store? I'm seeing a few fel orcs and it's kind of annoying.

## Post 159419 by Hawksley — 2025-11-12T21:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159419#p159419 | page 3 | era: 1.18.1-announced-pre-release -->

Any chance Faithful models might be expanded to includes skins from the donation store? I'm seeing a few fel orcs and it's kind of annoying.

## Post 159424 by Xavyrr — 2025-11-12T22:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159424#p159424 | page 3 | era: 1.18.1-announced-pre-release -->

> **Decrapifier wrote: Sun Nov 02, 2025 12:03 pm**
> Getting some weird stuff with the HD pack from storm.
>
>  ![Image](https://i.imgur.com/12xy4bI.png)
>  ![Image](https://i.imgur.com/YTGFqkh.jpeg)
>
>  Am I the only one?
>  Seem like the faithful is causing this. If i disable it than its just normal
>
>  Can someone help out?

I would guess you are using a shop skin? Those seem to be broken with the mod. They are also broken with the HD Patch: Reforged as well. My guess is that they ran into the same issue with updating to use VanillaHelpers. Additionally, some of the shop capes are having issues with transparency (HD Patch: Reforged also had this issue until very recently.) A lot of the trim is gone, and some holes in places.
![Image](https://i.imgur.com/XlkzSXh.png)

That aside, thank you for the great work on this mod. I greatly prefer this to the HD Patch: Reforged as I feel like it changes the colors and look of things too much.

## Post 159431 by Ellea — 2025-11-12T23:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159431#p159431 | page 3 | era: 1.18.1-announced-pre-release -->

Shop skins should work outside of the HD models that are part of the extras, I believe the HD models have a bug relating to cloaks with transparency layers (which I think is only the shop cloaks). I'll look to fix the cloaks at some point, but again, it only impacts the HD models.

For faithful models and store skins - it cannot be done as the model is still the original model, just with a texture placed on top of it. I can look to make a new patch to hide them, and will at least 'fix' the HD models having broken textures when using them (until Storm fixes it).

## Post 159611 by Stormhand81 (Patch Note Conspiracy Theorist) — 2025-11-14T18:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159611#p159611 | page 4 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Wed Nov 12, 2025 11:23 pm**
> Shop skins should work outside of the HD models that are part of the extras, I believe the HD models have a bug relating to cloaks with transparency layers (which I think is only the shop cloaks). I'll look to fix the cloaks at some point, but again, it only impacts the HD models.
>
>  For faithful models and store skins - it cannot be done as the model is still the original model, just with a texture placed on top of it. I can look to make a new patch to hide them, and will at least 'fix' the HD models having broken textures when using them (until Storm fixes it).

I have just fixed those face skin store textures on HD Patch Reforged. The cloaks transparency as well.

## Post 159682 by Xavyrr — 2025-11-15T15:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159682#p159682 | page 4 | era: 1.18.1-announced-pre-release -->

> **Stormhand81 wrote: Fri Nov 14, 2025 6:49 pm**
> > **Ellea wrote: Wed Nov 12, 2025 11:23 pm**
> > Shop skins should work outside of the HD models that are part of the extras, I believe the HD models have a bug relating to cloaks with transparency layers (which I think is only the shop cloaks). I'll look to fix the cloaks at some point, but again, it only impacts the HD models.
> >
> >  For faithful models and store skins - it cannot be done as the model is still the original model, just with a texture placed on top of it. I can look to make a new patch to hide them, and will at least 'fix' the HD models having broken textures when using them (until Storm fixes it).
>
>   I have just fixed those face skin store textures on HD Patch Reforged. The cloaks transparency as well.

Thanks for fixing these!

Regarding this mod, I only have one minor complaint - My druid is now perpetually pissed like someone stepped on her flower garden. I think the wrong face is being used for this variant, as some of them do have this face, just not this shop variant. The orange eyebrows make me think this was meant for the autumn variant.
Here's what it looks like without the mod:

[embed: https://s9e.github.io/iframe/2/imgur.min.html#ut4PlBC]

And here with the mod:

[embed: https://s9e.github.io/iframe/2/imgur.min.html#3stYJmP]

Very angry >:(

## Post 160248 by Ankerdankerf — 2025-11-21T16:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160248#p160248 | page 4 | era: 1.18.1-announced-pre-release -->

hum...

I have a backup of my old data folder, so, everything is "fine" but lose my control over all the patches in de data folder :D

So I decide to make all new. Clean install.
I wanted use some other patch for world envirement because I don't like the old vanilla tree models.

but for characters I use this mod here because I dont like the "new" WoW Models(they look to childish, kinda from a cartoon for pre school kids IMHO).

But now I see that cloak, shoulder and weapon textures are not touched with patch P and O.

It looks like that in my backuped data folder is a patch which make this looks mutch more details/higher res.
But I have no idea which one it is. I also changed the letters of the patches over the time(more that one time...)

Have someone an Idea which of this mods here in the Forum it is which change those things without change the char models?

Edit: I made now some screenshots. Look at the cloak, the shield, the helmet and the shoulders Actual:
![Image](https://i.ibb.co/whtNPNbw/neuer-data1.png)

Backup:
![Image](https://i.ibb.co/CKPfRRnY/alter-data1.png)

Actual:
![Image](https://i.ibb.co/S7v3jbP7/neuer-data2.png)

Backup
![Image](https://i.ibb.co/j9DgNc43/alter-data2.png)

Actual
![Image](https://i.ibb.co/B2YzvCHy/neuer-data3.png)

Backup
![Image](https://i.ibb.co/wZrDKB00/alter-data3.png)

## Post 160257 by Ellea — 2025-11-21T17:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160257#p160257 | page 4 | era: 1.18.1-announced-pre-release -->

Due to the size limits of patches on the Vanilla client, a lot of the base patches have various things in them - P & O are only for character models and the textures that apply to them (your robe / tabards), not for shoulders + helms + weapons + shields, as those are 'objects' and are part of the other files.

My advice would be:

 - Use every patch of Faithful
 - Then use your tree / other custom patches, but name them after the faithful patches alphabetically, i.e. `Patch-T.mpq`, `Patch-V.mpq`..
 - This will overwrite your trees etc, and anything 'untouched' will then get upscaled like your shoulders / weapons.

## Post 160813 by Duckwarrior — 2025-11-26T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160813#p160813 | page 4 | era: 1.18.1-announced-pre-release -->

Thank you for your work. This mod gives us another option! I want to ask: these World Textures, from A to G, do they add up to be too big? I didn't see instructions for each mod. Does that mean I have to use all from A to G? I'm afraid it will cause lag or crashes in dungeons. In another mod, the World Textures together are not that big. I also prefer being faithful to the vanilla building style. The changes to Northshire Abbey are too much for me.

## Post 160825 by Ellea — 2025-11-26T17:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160825#p160825 | page 4 | era: 1.18.1-announced-pre-release -->

A-G are all general upscaled textures, there are a significant amount of textures that are increased in quality and they can't all be put into a single patch due to the patch size limitations so you need them all.

There are no building / model edits as part of this, the focus is just to remove blur from the game so everything should look like the original game still just higher quality.

## Post 160846 by SvenS2 (Bug Report Enthusiast) — 2025-11-26T20:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160846#p160846 | page 4 | era: 1.18.1-announced-pre-release -->

> **Xavyrr wrote: Sat Nov 15, 2025 3:32 pm**
> > **Stormhand81 wrote: Fri Nov 14, 2025 6:49 pm**
> > > **Ellea wrote: Wed Nov 12, 2025 11:23 pm**
> > > Shop skins should work outside of the HD models that are part of the extras, I believe the HD models have a bug relating to cloaks with transparency layers (which I think is only the shop cloaks). I'll look to fix the cloaks at some point, but again, it only impacts the HD models.
> > >
> > >  For faithful models and store skins - it cannot be done as the model is still the original model, just with a texture placed on top of it. I can look to make a new patch to hide them, and will at least 'fix' the HD models having broken textures when using them (until Storm fixes it).
> >
> >   I have just fixed those face skin store textures on HD Patch Reforged. The cloaks transparency as well.
>
>   Thanks for fixing these!
>
>  Regarding this mod, I only have one minor complaint - My druid is now perpetually pissed like someone stepped on her flower garden. I think the wrong face is being used for this variant, as some of them do have this face, just not this shop variant. The orange eyebrows make me think this was meant for the autumn variant.
>  Here's what it looks like without the mod:
>
> [embed: https://s9e.github.io/iframe/2/imgur.min.html#ut4PlBC]
>
>
>  And here with the mod:
>
> [embed: https://s9e.github.io/iframe/2/imgur.min.html#3stYJmP]
>
>  Very angry >:(

> Dryad when Night Elves joined the Alliance
> Dryad when she finds out humans also cut down woods

## Post 160883 by Bananekh — 2025-11-27T08:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160883#p160883 | page 4 | era: 1.18.1-announced-pre-release -->

Can anyone help me with Vanillahelpers issue? It won't load. Other DLLs work fine. My dlls file contents:
no1600x1200.dll
UnitXP_SP3.dll
VfPatcher.dll
VanillaHelpers.dll
![Image](https://i.postimg.cc/HkLQPKWq/2025-11-26-17h37-38.png)

## Post 161059 by Manoni — 2025-11-29T16:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161059#p161059 | page 4 | era: 1.18.1-announced-pre-release -->

> **Bananekh wrote: Thu Nov 27, 2025 8:56 am**
> Can anyone help me with Vanillahelpers issue? It won't load. Other DLLs work fine. My dlls file contents:
>  no1600x1200.dll
>  UnitXP_SP3.dll
>  VfPatcher.dll
>  VanillaHelpers.dll
>  ![Image](https://i.postimg.cc/HkLQPKWq/2025-11-26-17h37-38.png)

try removing the 1600x1200.dll I've heard that it causes alot of errors

## Post 162799 by Wyrdo (Barrens Chat Casualty) — 2025-12-14T19:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162799#p162799 | page 4 | era: 1.18.1-announced-pre-release -->

[viewtopic.php?t=23271](https://forum.turtlecraft.gg/viewtopic.php?t=23271)

Anyone for this ?

## Post 165080 by Mehateboss — 2026-01-14T01:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165080#p165080 | page 4 | era: 1.18.1-announced-pre-release -->

Is there a working link for this?

## Post 165093 by Ankerdankerf — 2026-01-14T03:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165093#p165093 | page 4 | era: 1.18.1-announced-pre-release -->

> **Mehateboss wrote: Wed Jan 14, 2026 1:04 am**
> Is there a working link for this?

?
In the starting Post?

## Post 165098 by Mehateboss — 2026-01-14T04:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165098#p165098 | page 4 | era: 1.18.1-announced-pre-release -->

> **Ankerdankerf wrote: Wed Jan 14, 2026 3:36 am**
> > **Mehateboss wrote: Wed Jan 14, 2026 1:04 am**
> > Is there a working link for this?
>
>  ?
>  In the starting Post?

I clicked to expand the Download option, but the link to download says the website didn't send any data or some such. I can't get it to load.

## Post 166554 by Strikerflag — 2026-01-26T16:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166554#p166554 | page 4 | era: 1.18.1-announced-pre-release -->

+1 for trending of this great mod
Keeps the spirit of classic Turtle but with better textures   turtle_in_love   turtle_in_love_head

## Post 166802 by Hotcoldman2 — 2026-01-28T22:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166802#p166802 | page 4 | era: 1.18.1-announced-pre-release -->

I use DXVK and VanillaHelper and have it working for sure via the launcher and have like 24gb mem but I still crash in stormwind all the time. :/ Anything I can do?

## Post 166803 by Hotcoldman2 — 2026-01-28T22:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166803#p166803 | page 4 | era: 1.18.1-announced-pre-release -->

> **Inff wrote: Mon Oct 20, 2025 9:25 pm**
> I have black armors and crash even with all addons disabled. Idk if this is problem with my client and i need to reinstall or smth or my PC is too slow for this mod. Upscaled armors looks amazing, really want to use P patch.

> **Inff wrote: Mon Oct 20, 2025 9:56 pm**
> Looks like crashes happens immediately only in SW Trade district. Logged in Orgrimmar and there were no crashes in like 5 mins and no black armors.
>  In SW my character and many around me is black, besides shoulders, shield and weapon. I tried to reload a  few times and sometimes armor looks normal, but crashes anyway.
>  As for error text its "memory cannot be read" with bunch of zeros and different letters every time.
>  Also, strangely, i cant seem to change graphic settings with this mod - got another crash when hit apply.

Exactly tghe same for me, in the SW trade district not in Org, I get black people and a memory crash, even with all addons off. Sucks cus this mod is really really great.

## Post 166810 by Hotcoldman2 — 2026-01-29T02:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166810#p166810 | page 4 | era: 1.18.1-announced-pre-release -->

Also for the record I am on an RTX 4090 and a pretty new intel CPU

## Post 166814 by Hotcoldman2 — 2026-01-29T03:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166814#p166814 | page 4 | era: 1.18.1-announced-pre-release -->

The performance versions of armor upscales fixed the issue. Although I do have a beefy computer and DXVK + Vanillahelper enabled and no other mods in the game ATM, so it should have worked - but I have settled on performance version armor now! Great mod

## Post 167256 by Theoriginalto — 2026-02-02T23:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167256#p167256 | page 4 | era: 1.18.1-announced-pre-release -->

Hey, do you share .dll's with HD Reforged? I made a post in there comments about having right clicking issues when in closed spaces (buildings, caves, etc.) which are not present when deleting the mods. I'm re-downloading again now and will report back my findings.

## Post 167259 by Theoriginalto — 2026-02-02T23:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167259#p167259 | page 4 | era: 1.18.1-announced-pre-release -->

> **Theoriginalto wrote: Mon Feb 02, 2026 11:03 pm**
> Hey, do you share .dll's with HD Reforged? I made a post in there comments about having right clicking issues when in closed spaces (buildings, caves, etc.) which are not present when deleting the mods. I'm re-downloading again now and will report back my findings.

Just tested it again, only happens with O / P enabled. disabling them stops the issue. I tried narrowing it down to a piece of gear, but nothing fixed it in game.

## Post 167265 by Theoriginalto — 2026-02-03T00:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167265#p167265 | page 4 | era: 1.18.1-announced-pre-release -->

> **Theoriginalto wrote: Mon Feb 02, 2026 11:15 pm**
> > **Theoriginalto wrote: Mon Feb 02, 2026 11:03 pm**
> > Hey, do you share .dll's with HD Reforged? I made a post in there comments about having right clicking issues when in closed spaces (buildings, caves, etc.) which are not present when deleting the mods. I'm re-downloading again now and will report back my findings.
>
>   Just tested it again, only happens with O / P enabled. disabling them stops the issue. I tried narrowing it down to a piece of gear, but nothing fixed it in game.

Not an issue with the performance version. All set.

## Post 167622 by Theoriginalto — 2026-02-07T00:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167622#p167622 | page 4 | era: 1.18.1-announced-pre-release -->

> **Theoriginalto wrote: Tue Feb 03, 2026 12:02 am**
> > **Theoriginalto wrote: Mon Feb 02, 2026 11:15 pm**
> > > **Theoriginalto wrote: Mon Feb 02, 2026 11:03 pm**
> > > Hey, do you share .dll's with HD Reforged? I made a post in there comments about having right clicking issues when in closed spaces (buildings, caves, etc.) which are not present when deleting the mods. I'm re-downloading again now and will report back my findings.
> >
> >   Just tested it again, only happens with O / P enabled. disabling them stops the issue. I tried narrowing it down to a piece of gear, but nothing fixed it in game.
>
>   Not an issue with the performance version. All set.

/edit DXVK was the issue. Turning it off made it stop happening.

## Post 167673 by Huma — 2026-02-07T14:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167673#p167673 | page 4 | era: 1.18.1-announced-pre-release -->

Extra links like performance patches are down

## Post 168100 by Karum — 2026-02-13T03:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168100#p168100 | page 4 | era: 1.18.1-announced-pre-release -->

FYI, wandered into Elwynn and came across a few missing textures. Haven't had a chance to go into many other zones. Other than that, I *love* this mod.

![Image](https://cdn.imgchest.com/files/b7351ff2e092.png)

![Image](https://cdn.imgchest.com/files/cc8dfac819fa.png)

![Image](https://cdn.imgchest.com/files/9979d23d5fb1.png)

## Post 168161 by Eltarach — 2026-02-13T22:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168161#p168161 | page 4 | era: 1.18.1-announced-pre-release -->

This mod looks like it is exactly what I've been looking for! Amazing!

But... the download link seems like it has died? Can anybody help?

## Post 168166 by Szarszag (Barrens Chat Casualty) — 2026-02-14T05:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168166#p168166 | page 4 | era: 1.18.1-announced-pre-release -->

I approve this project

## Post 168187 by Nodraeneiissad — 2026-02-14T12:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168187#p168187 | page 4 | era: 1.18.1-announced-pre-release -->

dead link, fix pls

## Post 168253 by Hugich — 2026-02-15T09:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168253#p168253 | page 4 | era: 1.18.1-announced-pre-release -->

fix link pls

## Post 168373 by Hotcoldman2 — 2026-02-16T01:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168373#p168373 | page 4 | era: 1.18.1-announced-pre-release -->

> **Karum wrote: Fri Feb 13, 2026 3:45 am**
> FYI, wandered into Elwynn and came across a few missing textures. Haven't had a chance to go into many other zones. Other than that, I *love* this mod.
>
>  ![Image](https://cdn.imgchest.com/files/b7351ff2e092.png)
>
>  ![Image](https://cdn.imgchest.com/files/cc8dfac819fa.png)
>
>  ![Image](https://cdn.imgchest.com/files/9979d23d5fb1.png)

Those aren't missing for me.

^And YES, this is an AMAZING mod. But you need the performance version of armor if you don't want constant crashes in the trade center.

## Post 168401 by Eltarach — 2026-02-16T07:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168401#p168401 | page 4 | era: 1.18.1-announced-pre-release -->

Is the performance version included in the data files? If so it's just about waiting until the download link is fixed ![🙂](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f642.svg)

## Post 168565 by Ellea — 2026-02-17T11:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168565#p168565 | page 4 | era: 1.18.1-announced-pre-release -->

Apologies I am on a long break, I will be back at some point in the coming months - I have fixed the download links for now.

## Post 168566 by Eltarach — 2026-02-17T11:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168566#p168566 | page 4 | era: 1.18.1-announced-pre-release -->

> **Ellea wrote: Tue Feb 17, 2026 11:36 am**
> Apologies I am on a long break, I will be back at some point in the coming months - I have fixed the download links for now.

No need to apologize. It's a game after all. Thank you for updating the link and enjoy the break   turtle_in_love_head

## Post 171804 by Calibaar — 2026-03-22T16:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171804#p171804 | page 4 | era: post-1.18.1 -->

Just wanted to jump in here and say thank you for this. This is by far my favourite mod. I love the classic look and this makes it even better!

## Post 171946 by Koilos33 — 2026-03-23T13:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171946#p171946 | page 4 | era: post-1.18.1 -->

> **Hotcoldman2 wrote: Mon Feb 16, 2026 1:22 am**
> > **Karum wrote: Fri Feb 13, 2026 3:45 am**
> > FYI, wandered into Elwynn and came across a few missing textures. Haven't had a chance to go into many other zones. Other than that, I *love* this mod.
> >
> >  ![Image](https://cdn.imgchest.com/files/b7351ff2e092.png)
> >
> >  ![Image](https://cdn.imgchest.com/files/cc8dfac819fa.png)
> >
> >  ![Image](https://cdn.imgchest.com/files/9979d23d5fb1.png)
>
>   Those aren't missing for me.
>
>  ^And YES, this is an AMAZING mod. But you need the performance version of armor if you don't want constant crashes in the trade center.

If you patched your current client, you might not have this problem, but if you did a fresh install like I did (because I had other unrelated issues with new zones), you do. I have the same textures missing + all cacti and some palm trees, and I bet there's a bunch more.

I suspect that the paths for those textures have been changed in the client and need to be updated in the patch MPQs, since they're pointing to the old ones.

> **Ellea wrote: Tue Feb 17, 2026 11:36 am**
> Apologies I am on a long break, I will be back at some point in the coming months - I have fixed the download links for now.

As others have said, no need to apologise, enjoy the break. I'll be waiting with open arms, love this mod.

## Post 172317 by Ellea — 2026-03-25T10:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172317#p172317 | page 4 | era: post-1.18.1 -->

> **Koilos33 wrote: Mon Mar 23, 2026 1:36 pm**
> If you patched your current client, you might not have this problem, but if you did a fresh install like I did (because I had other unrelated issues with new zones), you do. I have the same textures missing + all cacti and some palm trees, and I bet there's a bunch more.
>
>  I suspect that the paths for those textures have been changed in the client and need to be updated in the patch MPQs, since they're pointing to the old ones.

Any chance that you changed a graphics setting since it's a fresh install?

In the notes section there is this:

• If you encounter white/black textures after changing graphics settings, simply relog to fix them.

It's a strange bug with the engine when overriding textures with MPQs - I wouldn't expect it to be caused by any turtle updates unless they've made model edits to base game models which is unlikely.

## Post 172542 by Icekronikforums — 2026-03-26T12:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172542#p172542 | page 5 | era: post-1.18.1 -->

Hey, any chance we can get some files updated for a new patch? For example maps are all messed up right now   unhappy_turtle

Thanks a lot for the upscale and hope ya break is going well!

## Post 172945 by Manoni — 2026-03-28T23:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172945#p172945 | page 5 | era: post-1.18.1 -->

Some gear textures of the new content seems to be bugged or missing, hopefully we can get an update at some point, ty always for your work

## Post 173062 by Koilos33 — 2026-03-29T18:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=173062#p173062 | page 5 | era: post-1.18.1 -->

> **Ellea wrote: Wed Mar 25, 2026 10:01 am**
> Any chance that you changed a graphics setting since it's a fresh install?
>
>  In the notes section there is this:
>
>  • If you encounter white/black textures after changing graphics settings, simply relog to fix them.
>
>  It's a strange bug with the engine when overriding textures with MPQs - I wouldn't expect it to be caused by any turtle updates unless they've made model edits to base game models which is unlikely.

Thank you very much for your answer, it really helped. Turns out that any time I had a resolution over 1280x800, the client kept doing "something" with the video options on each loading screen, causing the problem. It took like 3h to narrow it down to that, and I still don't know why it does that, but now I have pretty textures again :D

