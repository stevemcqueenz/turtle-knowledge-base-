---
title: "[Help] Spell textures for modding dbcs"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15913"
topic_id: 15913
forum_id: 29
forum: "Modding"
author: "Theexpell"
author_authority: "player"
posted: "2024-11-17T19:00:00Z"
last_post: "2024-11-17T20:25:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:41:57Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Help] Spell textures for modding dbcs

## Post 108354 by Theexpell — 2024-11-17T19:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108354#p108354 | page 1 | era: pre-1.18.1 -->

I am pulling my hair here..

What dbc file dictates what textures the spells uses?
I cannot for the life of me find it..

I have gone through it all, Spell.dbc => SpellVisual.dbc => SpellVisualEffectName => SpellVisualKit.dbc but none of them has any reference to textures used.

Can anyone help me understand where the textures are pulled from?

## Post 108362 by Watchers3d (Barrens Chat Casualty) — 2024-11-17T20:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108362#p108362 | page 1 | era: pre-1.18.1 -->

Find a corresponding model for the part of the spell you're interested in. SpellVisualEffectName gives you the path to the model that is used. There's a modding primer pinned in hd-patch Discord sub-channel for more info on the subject of what those dbc files are about.

Extract this m2 and open it with 010 editor. Look at struct M2Texture. Textures will be listed there.

