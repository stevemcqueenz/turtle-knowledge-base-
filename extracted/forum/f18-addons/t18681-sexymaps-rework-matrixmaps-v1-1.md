---
title: "⚡SexyMaps Rework⚡MatrixMaps (V1.1)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18681"
topic_id: 18681
forum_id: 18
forum: "AddOns"
author: "Foreverdelta33"
author_authority: "player"
posted: "2025-04-17T16:41:00Z"
last_post: "2025-12-11T18:55:00Z"
post_count: 22
pages: 1
fetched: "2026-09-10T10:22:40Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# ⚡SexyMaps Rework⚡MatrixMaps (V1.1)

## Post 127165 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-04-17T16:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127165#p127165 | page 1 | era: pre-1.18.1 -->

![Image](https://i.ibb.co/C5CVf6P8/Unbenannt-1.png)

Hey Turtles,

just a small little attempt at reworking SexyMaps.
The addon called "[CMaps](https://github.com/turinpt/CMap)" is corrupted and doesnt work at all.

 **FEATURES**

New from MatrixMaps:
- FPS Limiter (Pauses all animations when FPS fall below 30, good for old laptops like mine).
- Snowfall Effect: Add a snowflake effect around the minimap.
- New textures (will add more).
Features from SexyMaps:
- Rotating Border: Add a rotating texture effect around the minimap.
- Rotating Speed: Adjust the speed of the rotating border.
- Rotating Scale: Scale the rotating border texture.
- Texture Color: Change the color of the rotating border.
- Movable Minimap: Enable dragging and repositioning of the minimap.
- Zoom Control: Adjust minimap zoom with the mouse wheel.
- Auto Zoom Out: Automatically zoom out after 5 seconds.
- Minimap Alpha: Adjust transparency of the minimap. (***)
- Minimap Scale: Resize the minimap with adjustable scale.
- Minimap Shape: Customize the shape of the minimap (e.g., round, square, diamond).
- Minimap Border: Toggle additional border around the minimap.
- Extra Minimap Buttons: Show or hide extra buttons like the game time, zoom buttons, and toggle button.
- Auto-Profile loading for each character.
Known Bugs:
- Minimap Alpha Engine Bug
 *Reducing the minimap alpha below 0.8 causes it to turn gray inside buildings due to a Blizzard engine bug, unrelated to the addon. This can be tested by running /run Minimap:SetAlpha(0.7) and walking into a building.*

 **When you update or redownload, always delete MatrixMaps from your WTF, so you get a clean install.**
 **USAGE: SHIFT+RIGHTCLICK on your minimap or /mmaps.**
 **DOWNLOAD: <https://github.com/MtxGrower33/MatrixMaps>**

Take care.   dead_turtle_head

*Last edited by Foreverdelta33 on Mon Apr 28, 2025 12:29 am, edited 10 times in total.*

## Post 127528 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-04-19T16:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127528#p127528 | page 1 | era: pre-1.18.1 -->

- Added ability to change Minimap Alpha

 - Added a better profile manager (auto load for each character + button to copy from other character)
 - Added Reset to defaults button
 - Cleaned up the code

## Post 127557 by Gaz — 2025-04-19T19:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127557#p127557 | page 1 | era: pre-1.18.1 -->

Fantastic work! I'm glad this finally works I could never get CMap working thank you   happy_turtle_head

## Post 127558 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-04-19T19:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127558#p127558 | page 1 | era: pre-1.18.1 -->

> **Gaz wrote: Sat Apr 19, 2025 7:26 pm**
> Fantastic work! I'm glad this finally works I could never get CMap working thank you   happy_turtle_head

Thanks. Me neither, that thing is super bugged.

If you find any problems or improvements, please report it for the community, so we can get this going.
Im still testing it, but so far I couldnt find any bugs.   dead_turtle_head

## Post 127588 by Gaz — 2025-04-19T22:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127588#p127588 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Sat Apr 19, 2025 7:28 pm**
> > **Gaz wrote: Sat Apr 19, 2025 7:26 pm**
> > Fantastic work! I'm glad this finally works I could never get CMap working thank you   happy_turtle_head
>
>  Thanks. Me neither, that thing is super bugged.
>
>  If you find any problems or improvements, please report it for the community, so we can get this going.
>  Im still testing it, but so far I couldnt find any bugs.   dead_turtle_head

The only thing I can think of for now is instead of having to click through each button there are arrows or even better a drop down window for customization selections. For example being able to click a speed you want the aura to go at instead of continuously clicking to get back to the one you desire and same for the colour. I love the current effects though!

## Post 127596 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-04-19T23:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127596#p127596 | page 1 | era: pre-1.18.1 -->

> **Gaz wrote: Sat Apr 19, 2025 10:35 pm**
> The only thing I can think of for now is instead of having to click through each button there are arrows or even better a drop down window for customization selections. For example being able to click a speed you want the aura to go at instead of continuously clicking to get back to the one you desire and same for the colour. I love the current effects though!

Oh you thought Im going to leave you with this trash GUI?
No no. Im already working on a better interface.
That was just for the Alpha release, so we can start reporting bugs.

You like the snowfall effect too? I wasnt sure if people going to like it.
Im thinking about more effects like lightning or rain.

## Post 127607 by Gaz — 2025-04-20T01:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127607#p127607 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Sat Apr 19, 2025 11:34 pm**
> > **Gaz wrote: Sat Apr 19, 2025 10:35 pm**
> > The only thing I can think of for now is instead of having to click through each button there are arrows or even better a drop down window for customization selections. For example being able to click a speed you want the aura to go at instead of continuously clicking to get back to the one you desire and same for the colour. I love the current effects though!
>
>   Oh you thought Im going to leave you with this trash GUI?
>  No no. Im already working on a better interface.
>  That was just for the Alpha release, so we can start reporting bugs.
>
>  You like the snowfall effect too? I wasnt sure if people going to like it.
>  Im thinking about more effects like lightning or rain.

Haha well that's good to hear then. Personally I will only use snow fall sometimes but having other effects would be great too! I think they can be immersive when used with the weather in game so I'll probably use it when its raining or snowing. Maybe falling leaves would work?

## Post 127748 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-04-21T02:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127748#p127748 | page 1 | era: pre-1.18.1 -->

> **Gaz wrote: Sun Apr 20, 2025 1:00 am**
> Haha well that's good to hear then.

Ok Im done with V1.1.

 - Full GUI overhaul
 - Increased colors from 19 to 44
 - Added ability to increase Minimap Scale
 - Full codebase overhaul (removed 30% of code)

Make sure to download V1.1.
![Image](https://i.ibb.co/C5CVf6P8/Unbenannt-1.png)

## Post 127899 by Gaz — 2025-04-22T00:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127899#p127899 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Mon Apr 21, 2025 2:20 am**
> Ok Im done with V1.1.
>
>  - Full GUI overhaul
>  - Increased colors from 19 to 44
>  - Added ability to increase Minimap Scale
>  - Full codebase overhaul (removed 30% of code)
>
>  Make sure to download V1.1.
>  ![Image](https://i.ibb.co/C5CVf6P8/Unbenannt-1.png)

Fantastic job!! I love being able to scale the map and added colours

## Post 127903 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-04-22T00:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127903#p127903 | page 1 | era: pre-1.18.1 -->

Thanks, the mapscaling however needs a bit more work, since it also scales up the top-border texture but not the zonetext, thats obviously not so good. Will fix that in a few days and will detach the title from the minimap, so you can place it where you want and scale it seperatly.

## Post 128067 by Gaz — 2025-04-23T02:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128067#p128067 | page 1 | era: pre-1.18.1 -->

I now get a lua error 420 "MMapsSLider709:SetValue(value) its not letting me configure settings of my map anymore

## Post 128068 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-04-23T02:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128068#p128068 | page 1 | era: pre-1.18.1 -->

> **Gaz wrote: Wed Apr 23, 2025 2:04 am**
> I now get a lua error 420 "MMapsSLider709:SetValue(value) its not letting me configure settings of my map anymore

Can you describe that a bit more? Randomly? Ive played with it and I havent seen that.
Please try to tell me a bit more about it, how did it happen?
Is the entire UI blocked or only the slider ?

Ill fix it.

EDIT: The error refers to the scale slider, but im having no problems using it. I really need some more information.

## Post 128120 by Gaz — 2025-04-23T11:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128120#p128120 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Wed Apr 23, 2025 2:07 am**
> > **Gaz wrote: Wed Apr 23, 2025 2:04 am**
> > I now get a lua error 420 "MMapsSLider709:SetValue(value) its not letting me configure settings of my map anymore
>
>   Can you describe that a bit more? Randomly? Ive played with it and I havent seen that.
>  Please try to tell me a bit more about it, how did it happen?
>  Is the entire UI blocked or only the slider ?
>
>  Ill fix it.
>
>  EDIT: The error refers to the scale slider, but im having no problems using it. I really need some more information.

SO right when I login I get "Interface\addons\matrixmaps\gui.lua:420: Usage: MMapsSlider173: SetValue(value)

The map itself seems to be working to what I had it at but I just can go into the settings for the map to change anything. When I type the command to go to settings it just acts like it doesn't exist

Edit: I disabled all my addons and only enabled mmaps and its still giving the same lua error
Edit: I deleted my wtf settings and it somehow fixed the issue no clue why so all good now my apologies

## Post 128125 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-04-23T12:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128125#p128125 | page 1 | era: pre-1.18.1 -->

> **Gaz wrote: Wed Apr 23, 2025 11:44 am**
> Edit: I deleted my wtf settings and it somehow fixed the issue no clue why so all good now my apologies

Hm, alright but Im still going to look into it.
There is somethign wrong with the sliders, their naming is also off.
Thanks for reporting the bug, Im trying to reproduce it at the moment.

## Post 128224 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-04-23T23:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128224#p128224 | page 1 | era: pre-1.18.1 -->

> **Gaz wrote: Wed Apr 23, 2025 11:44 am**
> Edit: I deleted my wtf settings and it somehow fixed the issue no clue why so all good now my apologies

I looked over it agian and that was probably the problem;
Since V1.0 had such a massive change to V1.1, and you downloaded V1.0 and it created
a savedvariable file in your WTF, wich then messed with the V1.1.

That was my bad should have told the people to clear their WTF of previous installs.

## Post 128235 by Gaz — 2025-04-24T00:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128235#p128235 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Wed Apr 23, 2025 11:07 pm**
> > **Gaz wrote: Wed Apr 23, 2025 11:44 am**
> > Edit: I deleted my wtf settings and it somehow fixed the issue no clue why so all good now my apologies
>
>   I looked over it agian and that was probably the problem;
>  Since V1.0 had such a massive change to V1.1, and you downloaded V1.0 and it created
>  a savedvariable file in your WTF, wich then messed with the V1.1.
>
>  That was my bad should have told the people to clear their WTF of previous installs.

Ohhh wow I didn't even think about that being the issue glad you found it!  smiling_turtle_head

## Post 128237 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-04-24T00:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128237#p128237 | page 1 | era: pre-1.18.1 -->

> **Gaz wrote: Thu Apr 24, 2025 12:21 am**
> Ohhh wow I didn't even think about that being the issue glad you found it!  smiling_turtle_head

Yea Im sorry Im still a beginner coder :  sad_turtle_head
I wrote it into the starting post for all my addons now.

Thanks again for all your help, if you have any wishes for the addon, please dont
hold back, tell me if u need something more.

## Post 137009 by Wowstein — 2025-06-25T17:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137009#p137009 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Tue Apr 22, 2025 12:39 am**
> Thanks, the mapscaling however needs a bit more work, since it also scales up the top-border texture but not the zonetext, thats obviously not so good. Will fix that in a few days and will detach the title from the minimap, so you can place it where you want and scale it seperatly.

Hi mate ! Nice work on your addon. Did you had the time to detach the title from the minimap ? I don't seem to see the option yet.
Thanks and keep up the great work !  turtle_in_love_head

## Post 137148 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-06-26T19:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137148#p137148 | page 1 | era: pre-1.18.1 -->

> **Wowstein wrote: Wed Jun 25, 2025 5:09 pm**
> > **Foreverdelta33 wrote: Tue Apr 22, 2025 12:39 am**
> > Thanks, the mapscaling however needs a bit more work, since it also scales up the top-border texture but not the zonetext, thats obviously not so good. Will fix that in a few days and will detach the title from the minimap, so you can place it where you want and scale it seperatly.
>
>   Hi mate ! Nice work on your addon. Did you had the time to detach the title from the minimap ? I don't seem to see the option yet.
>  Thanks and keep up the great work !  turtle_in_love_head

Oh hey dude, I totaly forgot about this addon, I have to admit that Im not able to work on this anymore.
It was one of my first addons and it didnt got much attention so I moved on, and now Im very busy with
Dragonflight Reloaded. :(

I cant promise any updates at the moment.

If i find some time Ill detach the toppanel from the minimap, but as for now I can only ask you
to live with it - afaik its the only working animated map addon for vanilla so its at elast better then nothing. :/

## Post 137253 by Wowstein — 2025-06-27T15:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137253#p137253 | page 1 | era: pre-1.18.1 -->

Oh okay mate, thanks for replying :)

Gl for your next projects !

## Post 161756 by Cicovskij — 2025-12-05T21:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161756#p161756 | page 1 | era: 1.18.1-announced-pre-release -->

Why is this no longer available?
I have been trying to find the SexyMap addon for a long, long time. ![😥](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f625.svg)

## Post 162498 by Azurewizard — 2025-12-11T18:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162498#p162498 | page 1 | era: 1.18.1-announced-pre-release -->

Yeah unfortunately a lot of these little addons got lost amid the lawsuits and haven't resurfaced. Best we could ask for is for a previous downloader to host their last acquired versions.

