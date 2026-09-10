---
title: "Need help changing emote sounds"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19879"
topic_id: 19879
forum_id: 29
forum: "Modding"
author: "Armorialfrost"
author_authority: "player"
posted: "2025-06-15T07:45:00Z"
last_post: "2025-06-15T16:39:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:40:03Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Need help changing emote sounds

## Post 135752 by Armorialfrost — 2025-06-15T07:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135752#p135752 | page 1 | era: pre-1.18.1 -->

Hi. I am trying to change the emote sound for the /roar. For example I tried changing the sound for human males. I noticed that there are 2 separate MPQs containing player roar emote sounds, sound.mpq and patch-3.mpq. I tried using both setups and neither changed the roar sound. Anyone know what I am doing wrong?

## Post 135773 by Mosttrustworthy — 2025-06-15T10:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135773#p135773 | page 1 | era: pre-1.18.1 -->

Is the replacement sound a 22050Hz mono .WAV file in Sound/Character/Human/HumanMale/emote under HumanMale_Roar01(or 02).wav within a separate .MPQ file with the name patch-[alphabetical-character-here].MPQ?

That method works for me, and if it fails for you, I would be quite confused.
You could try deleting your WDB folder, in case the original sound is cached in there and being used instead of your new one.
A new sound being loaded for the first time may fail to play until the game is reloaded, sometimes.

## Post 135822 by Armorialfrost — 2025-06-15T16:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135822#p135822 | page 1 | era: pre-1.18.1 -->

> **Mosttrustworthy wrote: Sun Jun 15, 2025 10:02 am**
> Is the replacement sound a 22050Hz mono .WAV file in Sound/Character/Human/HumanMale/emote under HumanMale_Roar01(or 02).wav within a separate .MPQ file with the name patch-[alphabetical-character-here].MPQ?
>
>  That method works for me, and if it fails for you, I would be quite confused.
>  You could try deleting your WDB folder, in case the original sound is cached in there and being used instead of your new one.
>  A new sound being loaded for the first time may fail to play until the game is reloaded, sometimes.

Yes, i've confirmed its all set up that way. I also deleted the WDB folder and reloaded the game. Still not working, im a bit clueless at this point.

## Post 135827 by Armorialfrost — 2025-06-15T16:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135827#p135827 | page 1 | era: pre-1.18.1 -->

> **Mosttrustworthy wrote: Sun Jun 15, 2025 10:02 am**
> Is the replacement sound a 22050Hz mono .WAV file in Sound/Character/Human/HumanMale/emote under HumanMale_Roar01(or 02).wav within a separate .MPQ file with the name patch-[alphabetical-character-here].MPQ?
>
>  That method works for me, and if it fails for you, I would be quite confused.
>  You could try deleting your WDB folder, in case the original sound is cached in there and being used instead of your new one.
>  A new sound being loaded for the first time may fail to play until the game is reloaded, sometimes.

Just got it working. I think I may have typed the file name wrong and never noticed. Thank you!

