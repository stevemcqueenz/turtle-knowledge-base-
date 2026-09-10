---
title: "Voice files."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8100"
topic_id: 8100
forum_id: 29
forum: "Modding"
author: "Aindoros1"
author_authority: "player"
posted: "2023-07-02T15:52:00Z"
last_post: "2023-09-27T22:04:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:42:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Voice files.

## Post 52120 by Aindoros1 — 2023-07-02T15:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52120#p52120 | page 1 | era: pre-1.18.1 -->

In which client file is the voice acting of the goblin character located?

## Post 66908 by Jaguare19 — 2023-09-25T23:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66908#p66908 | page 1 | era: pre-1.18.1 -->

> **Aindoros1 wrote: Sun Jul 02, 2023 3:52 pm**
> In which client file is the voice acting of the goblin character located?

It is inside the patch-3.mpq

## Post 66909 by Whalemilk (Patch Note Conspiracy Theorist) — 2023-09-25T23:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66909#p66909 | page 1 | era: pre-1.18.1 -->

Is there a way to replace emote audio?

## Post 67261 by Forthehorde — 2023-09-27T22:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67261#p67261 | page 1 | era: pre-1.18.1 -->

There are 2 ways to mod sound files, that I'm aware of.

Method 1:
Create a new folder called "Sound" and place it in your wow directory (in the same location where your wow.exe is located).  Any .wav files placed in the Sound folder will override the game files.  But there are rules.  The .wav files MUST be in the correct sub folder (depending on the sound file), and the .wav file MUST be a specific bitrate.  I don't remember the details exactly, you can find more info here:

<https://turtle-wow.fandom.com/wiki/Sound_Mods>

Method 2:  (this is the easier way)
Edit the .MPQ files in the Data folder.  MPQ files are basically .zip files that contain all the .wav files, but you'll need an MPQ edit to open it. Google mpqeditor_en_v3.6.0.868.  It's free.    For example, I got tired of the Warlock imp's voiceovers, so I simply opened the patch.mpq file, navigated to the imps voices, and delete the ones I didn't like, and saved.   Loaded up the game and voila, no more imp jokes.   Remember to make a backup of the .mpq before editing, just in case.

