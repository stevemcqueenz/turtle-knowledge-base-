---
title: "Is it possible to reduce the cooldown for limited-quantity recipes?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11140"
topic_id: 11140
forum_id: 14
forum: "Suggestions"
author: "Aizawakai"
author_authority: "player"
posted: "2023-10-24T14:47:00Z"
last_post: "2023-11-23T19:19:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T12:02:44Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Is it possible to reduce the cooldown for limited-quantity recipes?

## Post 73394 by Aizawakai — 2023-10-24T14:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73394#p73394 | page 1 | era: pre-1.18.1 -->

Hello everyone,

Before I convey my perspective, let's first list the different prices for 3 Recipes at NPCs and on the AH.
European servers, October 24, 2023, at 1:54 PM.
Schematic: Thorium Widget      NPC: 01g20s00c      AH: 38g18s92c
Recipe: Undermine Clam Chowder      NPC: 00g30s00c      AH: 08g99s99c
Recipe: Gilneas Hot Stew      NPC: 00g25s00c      AH: 09g49s99c

I've listed these 3 recipes because I happen to need them recently.
However, these recipes have a long cooldown before they become available for purchase, and only one is available each time.
From a regular player's perspective, some recipes sold by NPCs might be necessary during the gameplay.
I don't want to discuss whether this monopolistic behavior complies with the game rules, but if GM could potentially reduce the cooldown on recipes sold by NPCs, would it increase the chances for regular players to purchase them?

## Post 73484 by Foobs (Barrens Chat Casualty) — 2023-10-24T20:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73484#p73484 | page 1 | era: pre-1.18.1 -->

I never understood the purpose of the cool downs to begin with.

## Post 73700 by Lilyvonpinktea — 2023-10-25T16:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73700#p73700 | page 1 | era: pre-1.18.1 -->

Even if they reduce the CD you still won’t get it because it’s being camped. I got it but I just happened to be passing by in the early hours when the campers had gone to bed and it’s just my luck that it had spawned. My advice is try in the middle of the night \о/

## Post 74412 by Aizawakai — 2023-10-27T21:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74412#p74412 | page 1 | era: pre-1.18.1 -->

> **Lilyvonpinktea wrote: Wed Oct 25, 2023 4:13 pm**
> Even if they reduce the CD you still won’t get it because it’s being camped. I got it but I just happened to be passing by in the early hours when the campers had gone to bed and it’s just my luck that it had spawned. My advice is try in the middle of the night \о/

Thank you for your reply and advice.
I've tried to purchase the "Schematic: Thorium Widget" at various times in the last two days, including midnight, early morning, noon, afternoon, and early evening.
Unfortunately, both NPCs selling this schematic were in a "sold out" state.
Perhaps reducing the cooldown time to 5 minutes could be a simple solution to end this kind of monopoly behavior.

## Post 78187 by Relevance1 — 2023-11-21T14:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78187#p78187 | page 1 | era: pre-1.18.1 -->

The limited quantity recipe  schematic: thorium widget and schematic: thorium tube are both critical for just leveling engineering. They are both being camped and sold on the AH from their 1g vendor price up to 20g or more. The more special items I could understand don't necessarily need any changes, but thorium widget and thorium tube should have their respawn times updated, or even changed to BoP items so they can't be gouged like this. I can't even level engineering because of these people camping the recipe.

> **Aizawakai wrote: Fri Oct 27, 2023 9:30 pm**
> > **Lilyvonpinktea wrote: Wed Oct 25, 2023 4:13 pm**
> > Even if they reduce the CD you still won’t get it because it’s being camped. I got it but I just happened to be passing by in the early hours when the campers had gone to bed and it’s just my luck that it had spawned. My advice is try in the middle of the night \о/
>
>   Thank you for your reply and advice.
>  I've tried to purchase the "Schematic: Thorium Widget" at various times in the last two days, including midnight, early morning, noon, afternoon, and early evening.
>  Unfortunately, both NPCs selling this schematic were in a "sold out" state.
>  Perhaps reducing the cooldown time to 5 minutes could be a simple solution to end this kind of monopoly behavior.

## Post 78478 by Aizawakai — 2023-11-23T19:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78478#p78478 | page 1 | era: pre-1.18.1 -->

It has been a month since I raised this question.
Should I assume that most people consider this gaming behavior acceptable?
If so, I am providing a macro format here that, with a single key and the right mouse button, allows low-level characters to automatically purchase the recipes you need from vendors. Please make purchases rationally and avoid monopolizing the industry.
Code: Select all

```
/script if UnitName("target") == "Bimock Sparkbrake" then BuyMerchantItem(17) end; CloseMerchant()
```

