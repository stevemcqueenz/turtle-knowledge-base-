---
title: "[Request] Guides for Backporting Legion Player Models to Vanilla?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=9777"
topic_id: 9777
forum_id: 29
forum: "Modding"
author: "Bigchungus69"
author_authority: "player"
posted: "2023-09-14T04:25:00Z"
last_post: "2025-05-17T00:50:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:40:24Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Request] Guides for Backporting Legion Player Models to Vanilla?

## Post 63862 by Bigchungus69 — 2023-09-14T04:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63862#p63862 | page 1 | era: pre-1.18.1 -->

I know that the HD mod already exists, but I would like to understand how it was made. The only guides I can find are for backporting to WoTLK, and none of them pertain to player models specifically. Do any guides exist for porting them to Vanilla?

## Post 64394 by Zer0cool — 2023-09-15T13:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64394#p64394 | page 1 | era: pre-1.18.1 -->

The procedure is the one you refer, you downporting models back to WotLK, since its the most compatible game version from the old game engine, and then you have to use the tool that convert's them back to vanilla. Also before doing that you will have to edit the model via a 3D editing program in order to lower their “polygons” since the old game engine cant handle too much polygons.
Head to <https://model-changing.net/> where the community for WoW editing is and start checking the forums in the retro-porting section.
Also, as I saw now, another member here @Elkepwn made a guide for inserting custom models to vanilla, the tools that he post will help you.

## Post 64811 by Bigchungus69 — 2023-09-17T00:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64811#p64811 | page 1 | era: pre-1.18.1 -->

Okay, update:
I've shifted focus from trying to downport Legion models and I am now trying to downport Classic Era player models so that I can try to make edits to the "Vanilla" player model without having to use Blender 2.49.

I converted the M2 file using jm2converter and loaded it in game but I have 2 issues:
 1) Animations work for about 1 second before freezing. Here is a clip of it:

[embed: https://s9e.github.io/iframe/2/imgur.min.html#g7S3WQd]

 2) I crash in areas with lots of instances of the player model (so areas like Stormwind in this case). I don't know why this is. I don't think that it's the poly count. Maybe because of the broken animations?

Any ideas on how to fix this? Or is what I am trying to do not going to work? Also, sorry for shifting the focus of the thread. I figured I should ask here instead of making a new one.

## Post 65747 by Zer0cool — 2023-09-19T14:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=65747#p65747 | page 1 | era: pre-1.18.1 -->

Maybe you might not need to use the jm2converter since the pre-release models, specially the beta models, are closer to the vanilla version. You can only change the version of the model via hex edit and test to see how it responds into vanila. All things are test and again test. Dont forget to check on the forums of the model community.

## Post 73473 by Vidooo — 2023-10-24T19:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73473#p73473 | page 1 | era: pre-1.18.1 -->

> **Bigchungus69 wrote: Sun Sep 17, 2023 12:09 am**
> Okay, update:
>  I've shifted focus from trying to downport Legion models and I am now trying to downport Classic Era player models so that I can try to make edits to the "Vanilla" player model without having to use Blender 2.49.
>
>  I converted the M2 file using jm2converter and loaded it in game but I have 2 issues:
>  1) Animations work for about 1 second before freezing. Here is a clip of it:
>
> [embed: https://s9e.github.io/iframe/2/imgur.min.html#g7S3WQd]
>
>  2) I crash in areas with lots of instances of the player model (so areas like Stormwind in this case). I don't know why this is. I don't think that it's the poly count. Maybe because of the broken animations?
>
>  Any ideas on how to fix this? Or is what I am trying to do not going to work? Also, sorry for shifting the focus of the thread. I figured I should ask here instead of making a new one.

Hey :) in downporting a Void Elf model I ran into this issue too BUT I actually managed to find a post using the Wayback Machine that describes how to fix it.

"If you're retroporting to BC/CL and your model has animation looping issues: Go into the .M2 (LK version) in 010 Editor and find the "struct Bones" section then change any KeyBoneID above 26 to -1 and re-try porting the model to BC/CL. This worked for me"

I did this and it worked like a charm. Good luck!

## Post 131525 by genjuro128 — 2025-05-17T00:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131525#p131525 | page 1 | era: pre-1.18.1 -->

Hello, any guide from scratch to start with modifications? I've been looking, but most of the pages are dead, and I only find things like programs and how to use them, but I'm totally lost.

