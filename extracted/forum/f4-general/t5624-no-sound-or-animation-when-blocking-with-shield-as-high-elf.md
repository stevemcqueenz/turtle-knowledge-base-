---
title: "NO sound or animation when blocking with shield as high elf"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5624"
topic_id: 5624
forum_id: 4
forum: "General"
author: "Elenar"
author_authority: "player"
posted: "2023-02-15T22:00:00Z"
last_post: "2023-02-20T12:13:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:08:47Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# NO sound or animation when blocking with shield as high elf

## Post 34865 by Elenar (Patch Note Conspiracy Theorist) — 2023-02-15T22:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34865#p34865 | page 1 | era: pre-1.18.1 -->

Is it only high elf issue or other races get no animation/sounds too ?

## Post 34896 by Majestik51 (Patch Note Conspiracy Theorist) — 2023-02-16T08:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34896#p34896 | page 1 | era: pre-1.18.1 -->

Hello!

is a general issue i think.

also some kind of cheap shot, gouge and even conflagrate for warlock, these spell sound effects dont work for me too.

i think theres a command you can type, in order to increase sfx channels.
i can give it to you but i dunno if is legal in turtle yet.
i need to ask the devs first.

PEACE!!  maintenance_turtle

## Post 34909 by Ken92vold — 2023-02-16T11:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34909#p34909 | page 1 | era: pre-1.18.1 -->

Check out this post, it helped me

[viewtopic.php?t=2331](https://forum.turtlecraft.gg/viewtopic.php?t=2331)

## Post 35067 by Elenar (Patch Note Conspiracy Theorist) — 2023-02-17T15:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35067#p35067 | page 1 | era: pre-1.18.1 -->

So I investigated little bit, and it seems block sound and animation is played only when full block occurs. Partial block doesn't matter.
Considering game mechanics and fact that full block is something that rarely happen, I wonder if it is possible to tweak game or client to play sounds/animation on partial block as well.

I may be nerd. but those sounds are really cool. I dropped prot paladin tree just because I couldn't hear and see those block animations...lol.

## Post 35403 by Miggs — 2023-02-20T10:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35403#p35403 | page 1 | era: pre-1.18.1 -->

I get lots of random loss of sounds playing as Hunter, often when changing aspects etc.

## Post 35421 by Skumbanana (Barrens Chat Casualty) — 2023-02-20T12:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35421#p35421 | page 1 | era: pre-1.18.1 -->

In-game, type:
/console SoundMemoryCache 128
/console SoundMaxHardwareChannels 128
/console SoundSoftwareChannels 128
Restart game.
Worked for me.

