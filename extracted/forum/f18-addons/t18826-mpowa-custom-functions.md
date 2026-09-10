---
title: "Mpowa Custom Functions"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18826"
topic_id: 18826
forum_id: 18
forum: "AddOns"
author: "Ballabulk"
author_authority: "player"
posted: "2025-04-23T13:32:00Z"
last_post: "2025-09-07T11:17:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:24:00Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Mpowa Custom Functions

## Post 128129 by Ballabulk — 2025-04-23T13:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128129#p128129 | page 1 | era: pre-1.18.1 -->

Hey folks,

does anyone know how to use the custom functions tab in MPowa? I'm trying to create an aura for Arcane Surge:
Code: Select all

```
function()
local isUsable, notEnoughMana = IsUsableSpell("Arcane Surge")
local start, duration = GetSpellCooldown("Arcane Surge")
local onCD = start > 0 and duration > 1.5
return isUsable and not onCD
end
```

But the code won't execute.

Would be nice if someone with experience could look into this and maybe help get it working...

Update:

If I just want to simply track Mage Armor and show the aura when the buff is up:
Code: Select all

```
return AuraUtil.FindAuraByName("Mage Armor", "player", "HELPFUL") ~= nil
```

That code also doesn’t seem to work. Sure, I could just use the standard field and invert the tracking to get it working — but I still want to make it work with a custom function ![😄](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f604.svg)

## Post 150639 by 108 — 2025-09-07T11:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150639#p150639 | page 1 | era: pre-1.18.1 -->

The functions tab adds a condition to the conditions defined in the effect tab with logical relation "and".
You must make sure your function returns something properly.
For example the `GetSpellCooldown` in your code expects a spell id but not a spell name.

