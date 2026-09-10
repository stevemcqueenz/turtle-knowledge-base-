---
title: "[Release] IsMounted - Compatible Twow Mounts and ShaguTweaks"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22501"
topic_id: 22501
forum_id: 18
forum: "AddOns"
author: "Catyngla"
author_authority: "player"
posted: "2025-10-20T15:55:00Z"
last_post: "2025-10-25T13:13:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:23:18Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Release] IsMounted - Compatible Twow Mounts and ShaguTweaks

## Post 156315 by Catyngla (Barrens Chat Casualty) — 2025-10-20T15:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156315#p156315 | page 1 | era: 1.18.1-announced-pre-release -->

I found this very simple addon IsMounted, but it wasn't compatible with Twow mounts or the ShaguTweaks addon. So I fixed it with the help of AI.

What it does
- It checks if your target is mounted or not by scanning the buffs.
- You can dismount with the command Code: Select all

```
/dismount
```
- You can add as a condition to cast/not cast something for instance.
The example below checks if you are mounted. If yes, it doesn't cast the spell so that you remain mounted. This is not currently achievable with the TurtleTweaks or ShaguTweaks addons as they just work at autodismounting you when you are mounted. This example prevents being dismounted. For instance, you may not want to cast buff spells when mounted, but happy to cast if not.
Code: Select all

```
/run if not (UnitIsMounted("player")) then CastSpellByName("SPELL_NAME") end;
```

Installation
Sorry, I'm not using GitHub, so manual install it is.

1. You can download it from here: <https://drive.proton.me/urls/M0N9ERNR9G#LA0Ypu1nctzO>
2. Unzip the file
3. Add to your twow installation folder > Interface > Addons

What I did
I added more strings of buffs to include the Twow specific mounts e.g. "Slow and Steady...", etc.
Then I extended the current conditional with more "if ... end" to include these new strings. I could have worked with an array, looping through it, but I wanted a quick and dirty fix.
Last I used the AI to check the auto-dismount.lua mod and provide a fix on the IsMounted.lua. It worked within 2/3 prompts.

How to make it better
I've only updated the English strings (localization.lua).
If you want your language to be added, please provide the strings for it like this (replace the parts in green) and post it as a reply here:
> ISMOUNTED_SPEED_INCREASED_BY = "**Increases speed by** (%d+)%%.";
>  ISMOUNTED_SLOW_AND_STEADY = "**Slow and steady...**";
>  ISMOUNTED_RIDING = "**Riding**";
>  ISMOUNTED_SPEED_BASED_ON = "**speed based on**";

I'll likely have to change how to check the strings, using wild cards. To see that later.

## Post 157015 by Catyngla (Barrens Chat Casualty) — 2025-10-25T13:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157015#p157015 | page 1 | era: 1.18.1-announced-pre-release -->

Added commands:Code: Select all

```
/cifnm SPELLNAME
/cifnm !SPELLNAME
```

These commands replace:Code: Select all

```
/run if not (UnitIsMounted("player")) then CastSpellByName("SPELL_NAME") end;
```

They can be used in macros without running out of characters (much shorter)

Also, a condition has been added (!) whether the cast spell already exists in the player's buff. If it exists, the cast is skipped, otherwise it casts (if not mounted, of course).

