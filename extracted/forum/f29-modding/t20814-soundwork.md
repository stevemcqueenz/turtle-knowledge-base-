---
title: "Soundwork"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20814"
topic_id: 20814
forum_id: 29
forum: "Modding"
author: "Yeahcoolbrogame"
author_authority: "player"
posted: "2025-08-11T17:38:00Z"
last_post: "2025-08-23T17:16:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:39:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Soundwork

## Post 144597 by Yeahcoolbrogame — 2025-08-11T17:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144597#p144597 | page 1 | era: pre-1.18.1 -->

Im looking to change pretty much all sounds in classic WoW and ive been busy with this for a few years and it works for other private servers but for turtle ive been pretty stumped, simply throwing the sound files in or even throwing it into mpq files doesnt seem to work for half of the sounds and makes everything seemingly buggy.

Are there definitive answers on how to replace sounds? Which ones work which ones dont, ive heard nothing but a ton of conflicting information and afaik the guides out there for turtle are outdated.

If anybody knows anything id be extremely appreciative!

## Post 144869 by Jan125 (Barrens Chat Casualty) — 2025-08-12T16:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144869#p144869 | page 1 | era: pre-1.18.1 -->

TL;DR: As long as it is a separate sound event, you can replace it.

There are two methods of replacing sounds in vanilla WoW clients:
 1.) Replace the sound file. This will replace all instances where said sound is used, which may break spell sounds or ambience, but is usually good enough.
The .wav files have to be 16 bit PCM. Both stereo and mono are supported, sample rates of 44100Hz and 16000Hz work.
You can either put them in an MPQ, or have them as loose files.

 2.) SoundEntries.dbc. <https://wowdev.wiki/DB/SoundEntries> does a better explanation of this than I could. You will have to fiddle around with WDBX though, and stuff may break. Flags are not explained.
The SoundEntries.dbc file HAS to be in a compatible .mpq. I recommend just copying one of the MPQs from the client, and then modifying that, to get the correct MPQ version.

## Post 144969 by Yeahcoolbrogame — 2025-08-13T04:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144969#p144969 | page 1 | era: pre-1.18.1 -->

I seem to have figured it out by putting it in MONO 44100Hz 16bit they seem to work (in patch-S.MPQ)
I personally think its just the 1channel mono factor but im not sure i have not tested that yet, im currently trying to figure out why custom footstep sounds are extremely pitched down once loaded in. Anybody have any ideas?

## Post 144987 by Jan125 (Barrens Chat Casualty) — 2025-08-13T06:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144987#p144987 | page 1 | era: pre-1.18.1 -->

Try resampling the .wav files to a different sample rate and see if that works.

## Post 147685 by Yeahcoolbrogame — 2025-08-22T11:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147685#p147685 | page 1 | era: pre-1.18.1 -->

Yep changed sample rate worked! (32000Hz) u dont have to package sounds into an mpq either it seems so thats nice aswell.

## Post 147875 by Volcannuss — 2025-08-23T17:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147875#p147875 | page 1 | era: pre-1.18.1 -->

I also want this improvement of the SIM, teach me how to install it

