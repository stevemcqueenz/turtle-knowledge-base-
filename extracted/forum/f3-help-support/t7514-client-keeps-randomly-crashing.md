---
title: "Client keeps randomly crashing"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7514"
topic_id: 7514
forum_id: 3
forum: "Help & Support"
author: "Getplucked"
author_authority: "player"
posted: "2023-05-29T22:35:00Z"
last_post: "2023-05-30T05:02:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:12:58Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Client keeps randomly crashing

## Post 48012 by Getplucked (Patch Note Conspiracy Theorist) — 2023-05-29T22:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48012#p48012 | page 1 | era: pre-1.18.1 -->

Played plenty of private servers from 2014-2019, never had any issues like this. Completely at random, the client will just crash with some error about memory access. It has happened:

 -in combat
 -out of combat
 -just hanging around in a city
 -on flight paths

And there seems to be no pattern to it. Sometimes I'll go 3+ hours without a crash, other times I'll get 3 crashes in 10 minutes.

Only got a few addons: Code: Select all

```
https://i.imgur.com/fup1vRE.png
```

Yes, I deleted WDB. Didn't change anything.

Any idea what's going wrong here?

## Post 48032 by Holyhorrorr (Barrens Chat Casualty) — 2023-05-30T05:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48032#p48032 | page 1 | era: pre-1.18.1 -->

Many people suggest using this - <https://github.com/hannesmann/vanillafixes>

> Added a custom DXVK config that reduces the chance of out of memory errors, especially on NVIDIA.

