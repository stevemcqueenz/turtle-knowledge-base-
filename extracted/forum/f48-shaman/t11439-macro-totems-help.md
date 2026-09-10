---
title: "macro totems help!"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11439"
topic_id: 11439
forum_id: 48
forum: "Shaman"
author: "Vandy"
author_authority: "player"
posted: "2023-11-03T17:05:00Z"
last_post: "2023-12-23T04:12:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:22:57Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# macro totems help!

## Post 75734 by Vandy — 2023-11-03T17:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75734#p75734 | page 1 | era: pre-1.18.1 -->

I'm looking for macros to put several totems in a row with one click:

example: /castsequence reset=3 Strength of Earth Totem, Mana Spring Totem

It doesn't work and I get the use /help message

Can you help me, do you know what's wrong or any addon? thank you

## Post 82378 by Domeng — 2023-12-23T01:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82378#p82378 | page 1 | era: pre-1.18.1 -->

yes,i need hlep too,need more macros for shaman

## Post 82397 by Snigery (Barrens Chat Casualty) — 2023-12-23T04:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82397#p82397 | page 1 | era: pre-1.18.1 -->

> **Vandy wrote: Fri Nov 03, 2023 5:05 pm**
> I'm looking for macros to put several totems in a row with one click:
>
>  example: /castsequence reset=3 Strength of Earth Totem, Mana Spring Totem
>
>  It doesn't work and I get the use /help message
>
>  Can you help me, do you know what's wrong or any addon? thank you

You can use the *RegisterCVar* function here to store a global variable within your game client, global meaning it can be used across macro calls. Register a *counter*.

You can make a separate macro and run this macro each time you start your game, or just type it into chat just as this.
Code: Select all

```
/run RegisterCVar( "c1", 1 )
```

If you want to see it working, you can use this in a macro file,
Code: Select all

```
/run local a = { "Totem A", "Totem B", "Totem C" } b = GetCVar( "c1" ) * 1 if b > 3 then b = 1 end SendChatMessage( "Counter: " .. b .. ", Totem: " .. a[ b ],'say') SetCVar( "c1", b + 1 )
```

Then just replace with the cast by name function.
Code: Select all

```
/run local a = { "Totem A", "Totem B", "Totem C" } b = GetCVar( "c1" ) * 1 if b > 3 then b = 1 end CastSpellByName( a[ b ] ) SetCVar( "c1", b + 1 )
```

Only problem is you have to press the button more than once which I see you wanted a single press. Oh well, but using this method you can do a lot of other cool stuff like swapping between gear sets instantly, assigning other skills to a single button to save action bar space, just toggle between them, and all other sorts of toggling actions. Make sure you don't spam the button faster than the GCD, or the counter will still increase and skip a totem.

