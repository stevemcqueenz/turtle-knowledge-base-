---
title: "Help with texture modding"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12917"
topic_id: 12917
forum_id: 29
forum: "Modding"
author: "Glarthir"
author_authority: "player"
posted: "2024-01-29T13:42:00Z"
last_post: "2024-01-30T16:14:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:42:29Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Help with texture modding

## Post 86259 by Glarthir (Barrens Chat Casualty) — 2024-01-29T13:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86259#p86259 | page 1 | era: pre-1.18.1 -->

Hey, I am trying to edit some textures just for fun, however when I convert my touched up texture from png back to blp, either using Blpc or BLPNG converter, the files seem to be corrupted or something like that and just appear as blank ingame. How do I go about doing this properly? Right now it's just armor textures I'm fiddling around with

## Post 86273 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-01-29T15:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86273#p86273 | page 1 | era: pre-1.18.1 -->

[https://www.wowinterface.com/downloads/ ... erter.html](https://www.wowinterface.com/downloads/info14110-BLPConverter.html)

Use this, is very usefull.

## Post 86290 by Glarthir (Barrens Chat Casualty) — 2024-01-29T18:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86290#p86290 | page 1 | era: pre-1.18.1 -->

Get the same result as I did with the other tools. The ingame armor part is just blank

## Post 86361 by Watchers3d (Barrens Chat Casualty) — 2024-01-30T10:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86361#p86361 | page 1 | era: pre-1.18.1 -->

> **Glarthir wrote: Mon Jan 29, 2024 1:42 pm**
> Hey, I am trying to edit some textures just for fun, however when I convert my touched up texture from png back to blp, either using Blpc or BLPNG converter, the files seem to be corrupted or something like that and just appear as blank ingame. How do I go about doing this properly? Right now it's just armor textures I'm fiddling around with

I think it's an alpha channel issue. Use BLPNG Converter. Before converting your PNG, first choose correct alpha depth. Default is 8-bit alpha. Choose None (Opaque) instead.

## Post 86394 by Glarthir (Barrens Chat Casualty) — 2024-01-30T14:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86394#p86394 | page 1 | era: pre-1.18.1 -->

hmm now it works ingame, however the transparent part is just black

## Post 86398 by Watchers3d (Barrens Chat Casualty) — 2024-01-30T16:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86398#p86398 | page 1 | era: pre-1.18.1 -->

> **Glarthir wrote: Tue Jan 30, 2024 2:43 pm**
> hmm now it works ingame, however the transparent part is just black

So there is an alpha channel in your textures, if some parts of it should appear transparent in-game. Try 1-bit depth and 4-bit depth alpha while converting.

