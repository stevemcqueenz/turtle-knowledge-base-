---
title: "UITYPE AlphaMode"
url: "https://turtle-wow.fandom.com/wiki/UITYPE_AlphaMode"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T07:57:42Z"
fetched: "2026-09-10T07:39:54Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# UITYPE AlphaMode

AlphaMode is an attribute of textures.  Nearly all alphaModes used in the default UI are "ADD."

From a post by Slouken on 1/19/06, the alphaModes and their meaning:

- "DISABLE" - opaque texture
- "BLEND" - normal painting on top of the background, obeying alpha channels if set (?)
- "ALPHAKEY" - 1-bit alpha
- "ADD" - additive blend
- "MOD" - modulating blend

These values are also used by the [Texture:SetBlendMode](API Texture SetBlendMode)() API.
