---
title: "Weakauras addon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19503"
topic_id: 19503
forum_id: 18
forum: "AddOns"
author: "Bomberb17"
author_authority: "player"
posted: "2025-05-23T20:05:00Z"
last_post: "2025-09-25T05:45:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:23:46Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Weakauras addon

## Post 132735 by Bomberb17 — 2025-05-23T20:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132735#p132735 | page 1 | era: pre-1.18.1 -->

Has anyone found a way to make weakauras addon work this turtlewow client?
I downloaded and added it in the addons folder, the addon is displayed on the character page as normal but when the game loads the command /wa is not recognized.

## Post 132739 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-23T20:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132739#p132739 | page 1 | era: pre-1.18.1 -->

Weakaura will not work on the current client, so don't bother.

You can use power aura addons instead, they are lacking a lot, but better than nothing, here's the one I'm using :

<https://github.com/MarcelineVQ/ModifiedPowerAuras>

## Post 153060 by Tukajo — 2025-09-24T22:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153060#p153060 | page 1 | era: pre-1.18.1 -->

Any rationale as to why it won't work with the current client? Is this just a function of "nobody can be bothered" or have the devs modified the client in such a way that WeakAuras is not viable?

## Post 153065 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-09-24T22:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153065#p153065 | page 1 | era: pre-1.18.1 -->

> **Tukajo wrote: Wed Sep 24, 2025 10:34 pm**
> Any rationale as to why it won't work with the current client? Is this just a function of "nobody can be bothered" or have the devs modified the client in such a way that WeakAuras is not viable?

I'm fairly certain the client was always incapable of running it just based on all the limitations/roadblocks 1.12 has.

## Post 153081 by Crake (Patch Note Conspiracy Theorist) — 2025-09-25T05:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153081#p153081 | page 1 | era: pre-1.18.1 -->

> **Tukajo wrote: Wed Sep 24, 2025 10:34 pm**
> Any rationale as to why it won't work with the current client? Is this just a function of "nobody can be bothered" or have the devs modified the client in such a way that WeakAuras is not viable?

It's very much a "nobody can be bothered" situation. There's nothing fundamentally stopping weak auras from working in the vanilla client other than it uses a different set of API hooks and calls, and nobody has been bothered to create something to fit it.

Keep in mind, weak auras is a BIG addon, with monetization behind it. Trying to create something similar for a private server, while avoiding monetization (so you don't get sued by blizzard like shagu did) is a BIG ask.

At it's core though, weak aura is basically just an addon framework that allows for run time modification and editing of addon and macro functionality. It is completely doable in the 1.12 client, just nobody has.

