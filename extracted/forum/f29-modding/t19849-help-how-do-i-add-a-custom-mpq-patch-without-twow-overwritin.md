---
title: "[Help] How do I add a custom MPQ / patch without Twow overwriting or deleting it?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19849"
topic_id: 19849
forum_id: 29
forum: "Modding"
author: "Armorialfrost"
author_authority: "player"
posted: "2025-06-13T04:53:00Z"
last_post: "2025-06-15T16:30:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:40:04Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Help] How do I add a custom MPQ / patch without Twow overwriting or deleting it?

## Post 135548 by Armorialfrost — 2025-06-13T04:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135548#p135548 | page 1 | era: pre-1.18.1 -->

How do I add a custom MPQ / patch without Twow overwriting or deleting it?

I want to change the login screen music for example by changing the music file in the sound mpq. I know I can do this by creating a sound folder, but sounds dont always work so well when in the sound folder, and I plan on adding a lot.

## Post 135608 by Felixula — 2025-06-13T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135608#p135608 | page 1 | era: pre-1.18.1 -->

You should name your mpq correct way, "patch-U.MPQ" for example
You can use any letter that comes AFTER letter corresponding for sound effects on Turtle, so your mpq overwrites it. If Turtle stors sounds in patch-E.MPQ, you can use any letter after E that not taken by other existing patches.
But I don't know which patch is for sound, so you have to find it yourself.

## Post 135631 by Armorialfrost — 2025-06-13T19:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135631#p135631 | page 1 | era: pre-1.18.1 -->

> **Felixula wrote: Fri Jun 13, 2025 3:17 pm**
> You should name your mpq correct way, "patch-U.MPQ" for example
>  You can use any letter that comes AFTER letter corresponding for sound effects on Turtle, so your mpq overwrites it. If Turtle stors sounds in patch-E.MPQ, you can use any letter after E that not taken by other existing patches.
>  But I don't know which patch is for sound, so you have to find it yourself.

sound.MPQ and Patch-3.MPQ are the ones with the sound/music that we hear in game. To replace sound.MPQ would I have to name a mpq as sound something?

## Post 135647 by Felixula — 2025-06-13T22:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135647#p135647 | page 1 | era: pre-1.18.1 -->

> **Armorialfrost wrote: Fri Jun 13, 2025 7:38 pm**
> > **Felixula wrote: Fri Jun 13, 2025 3:17 pm**
> > You should name your mpq correct way, "patch-U.MPQ" for example
> >  You can use any letter that comes AFTER letter corresponding for sound effects on Turtle, so your mpq overwrites it. If Turtle stors sounds in patch-E.MPQ, you can use any letter after E that not taken by other existing patches.
> >  But I don't know which patch is for sound, so you have to find it yourself.
>
>   sound.MPQ and Patch-3.MPQ are the ones with the sound/music that we hear in game. To replace sound.MPQ would I have to name a mpq as sound something?

Try both variants, if none works then no idea how to do it

## Post 135685 by Mosttrustworthy — 2025-06-14T10:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135685#p135685 | page 1 | era: pre-1.18.1 -->

Using the installer automatically checks your Data folder for any .MPQs that aren't supposed to be there and wipes them out.
However, if you check your Turtle WoW folder after downloading an update, you can find an .MPQ with whatever other .MPQs the update consists of inside it (closing WoW may delete this .MPQ for some reason, I do not recall) and they can be extracted easily enough with Ladik's MPQ Editor. Just be sure to extract everything else into the right places as well. Particularly WoW.exe, you know?

It's simple enough, but not simpler than simply keeping a back-up folder with your mods in it somewhere else.

## Post 135725 by Boobatooba (Barrens Chat Casualty) — 2025-06-14T20:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135725#p135725 | page 1 | era: pre-1.18.1 -->

wow loads patches in order with newer ones overwriting files in previous mpqs. it loads base mpqs first then patch 1 2 3 etc then patch a b c etc. so drop the sound files in an mpq called patch-s.mpq and your files should always have priority over anything that loads before patch s as it is loading those files into memory last.

## Post 135823 by Armorialfrost — 2025-06-15T16:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135823#p135823 | page 1 | era: pre-1.18.1 -->

> **Boobatooba wrote: Sat Jun 14, 2025 8:30 pm**
> wow loads patches in order with newer ones overwriting files in previous mpqs. it loads base mpqs first then patch 1 2 3 etc then patch a b c etc. so drop the sound files in an mpq called patch-s.mpq and your files should always have priority over anything that loads before patch s as it is loading those files into memory last.

Thank you for confirming this!

