---
title: "Sound issues"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5826"
topic_id: 5826
forum_id: 3
forum: "Help & Support"
author: "Karolisbarolis"
author_authority: "player"
posted: "2023-03-03T10:16:00Z"
last_post: "2025-10-23T18:04:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T08:38:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Sound issues

## Post 36699 by Karolisbarolis — 2023-03-03T10:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36699#p36699 | page 1 | era: pre-1.18.1 -->

For some reason it doesnt matter if I put tick on of off from "enable sound at character" in game sound options its always working as it is on. I heat sounds loud when zoomed in but barely hear anything (when fighting or casting spells) when zoomed out. Also when I cast some spells 1 out of 3 time it makes no sound (paladin). Whats the case? does enyone know how to fix it?

## Post 36703 by Karolisbarolis — 2023-03-03T10:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36703#p36703 | page 1 | era: pre-1.18.1 -->

Also i dont hear any proffesion sounds when making something (cooking, mining etc)

## Post 36704 by Majestik51 (Patch Note Conspiracy Theorist) — 2023-03-03T10:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36704#p36704 | page 1 | era: pre-1.18.1 -->

Hello!

the client i think got a max limit of sound effects.
thats why u cant hear some sounds.
for example: when im in party (warlock and rogue) u can hear cheap shot s.effect but not the conflagrate s.effect at the same time.

i think thats the case. but for the sound options might help if u delete wdb folder.
but still not 100% sure.

PEACE!!

## Post 36731 by Karolisbarolis — 2023-03-03T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36731#p36731 | page 1 | era: pre-1.18.1 -->

Thanks for advice. But I already tried it a few times. It did not help at all. Plus it does not explain why "enable sound at character" is not responsive if checked or not and it always louder when zoomed in and silent when zoomed out aswell.

## Post 47294 by Klameant — 2023-05-24T17:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47294#p47294 | page 1 | era: pre-1.18.1 -->

try increase the number of sound channels. Enter each of these commands in-game and then restart your client.

/console SoundMemoryCache 128

/console SoundMaxHardwareChannels 128

/console SoundSoftwareChannels 128

for me working

## Post 99726 by Rainmaker93 — 2024-07-17T07:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99726#p99726 | page 1 | era: pre-1.18.1 -->

> **Klameant wrote: Wed May 24, 2023 5:41 pm**
> try increase the number of sound channels. Enter each of these commands in-game and then restart your client.
>
>  /console SoundMemoryCache 128
>
>  /console SoundMaxHardwareChannels 128
>
>  /console SoundSoftwareChannels 128
>
>  for me working

This worked for me, thank you!

## Post 99727 by Thule (Barrens Chat Casualty) — 2024-07-17T07:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99727#p99727 | page 1 | era: pre-1.18.1 -->

> **Klameant wrote: Wed May 24, 2023 5:41 pm**
> try increase the number of sound channels. Enter each of these commands in-game and then restart your client.
>
>  /console SoundMemoryCache 128
>
>  /console SoundMaxHardwareChannels 128
>
>  /console SoundSoftwareChannels 128
>
>  for me working

Thank you! It worked for me also.

## Post 105267 by HerTiSo — 2024-10-29T22:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105267#p105267 | page 1 | era: pre-1.18.1 -->

> **Klameant wrote: Wed May 24, 2023 5:41 pm**
> try increase the number of sound channels. Enter each of these commands in-game and then restart your client.
>
>  /console SoundMemoryCache 128
>
>  /console SoundMaxHardwareChannels 128
>
>  /console SoundSoftwareChannels 128
>
>  for me working

Thank you - this worked for me as well.   happy_turtle_head

## Post 117188 by Dooxs — 2025-01-18T20:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117188#p117188 | page 1 | era: pre-1.18.1 -->

Thanks a lot! It worked for me as well, you are the best.

## Post 124317 by ArgonRend — 2025-03-29T08:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124317#p124317 | page 1 | era: pre-1.18.1 -->

> **Klameant wrote: Wed May 24, 2023 5:41 pm**
> try increase the number of sound channels. Enter each of these commands in-game and then restart your client.
>
>  /console SoundMemoryCache 128
>
>  /console SoundMaxHardwareChannels 128
>
>  /console SoundSoftwareChannels 128
>
>  for me working

I'm missing something surely, how can I run these commands? :X I'm asking because it's not working for me, I can still hear my first spell played and not the 2 after that.
Someone told me to run Vanilla Tweaks but I really don't know how.

*Last edited by ArgonRend on Sat Mar 29, 2025 9:01 am, edited 1 time in total.*

## Post 127537 by Klameant — 2025-04-19T17:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127537#p127537 | page 1 | era: pre-1.18.1 -->

> **ArgonRend wrote: Sat Mar 29, 2025 8:51 am**
> > **Klameant wrote: Wed May 24, 2023 5:41 pm**
> > try increase the number of sound channels. Enter each of these commands in-game and then restart your client.
> >
> >  /console SoundMemoryCache 128
> >
> >  /console SoundMaxHardwareChannels 128
> >
> >  /console SoundSoftwareChannels 128
> >
> >  for me working
>
>   I'm missing something surely, how can I run these commands? :X I'm asking because it's not working for me, I can still hear my first spell played and not the 2 after that.
>  Someone told me to run Vanilla Tweaks but I really don't know how.

you enter them in game chat, thats it, each one separately

## Post 156755 by Oldenwisp — 2025-10-23T18:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156755#p156755 | page 1 | era: 1.18.1-announced-pre-release -->

> **Klameant wrote: Wed May 24, 2023 5:41 pm**
> try increase the number of sound channels. Enter each of these commands in-game and then restart your client.
>
>  /console SoundMemoryCache 128
>
>  /console SoundMaxHardwareChannels 128
>
>  /console SoundSoftwareChannels 128
>
>  for me working

Do I need to do this every time I run the client?

 2. do you know why my sound keeps dying every 10 minutes and the only thing fixing it is relogging? It is normally enabled in game. and it's not ctrl+

