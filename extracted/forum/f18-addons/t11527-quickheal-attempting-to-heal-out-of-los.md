---
title: "Quickheal attempting to heal out of LoS"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11527"
topic_id: 11527
forum_id: 18
forum: "AddOns"
author: "Bimbombo2"
author_authority: "player"
posted: "2023-11-07T14:52:00Z"
last_post: "2023-11-08T14:57:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T10:30:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Quickheal attempting to heal out of LoS

## Post 76297 by Bimbombo2 — 2023-11-07T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76297#p76297 | page 1 | era: pre-1.18.1 -->

I am using QuickHeal, and I’m finding it great

However when the player with the lowest HP is out of line of sight, but still in range, QuickHeal will only attempt to heal them, and it will fail every time. This means other members of my party who could also use with healing do not get healed at all. This makes QuickHeal totally unusable as if one member of the party or raid is out of line of sight, the addon is useless.

Is there a way to get QuickHeal to stop attempting to heal targets where several successive heal attempts have failed recently? Or is there a similar addon that does not have this issue?

## Post 76298 by Drubarrymooer (Grandmaster of Forum PvP) — 2023-11-07T15:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76298#p76298 | page 1 | era: pre-1.18.1 -->

This addon causes so many issues, I don't know why healers still use it.  Constantly overhealing, heal sniping, and not using appropriate healing on MT's.  I mean, you do you, but I know I personally prefer healers that know how to heal w/o quickheal/healbot.  I've died way too many times to being assigned healers that use it.

## Post 76299 by Bimbombo2 — 2023-11-07T15:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76299#p76299 | page 1 | era: pre-1.18.1 -->

> **Drubarrymooer wrote: Tue Nov 07, 2023 3:03 pm**
> This addon causes so many issues, I don't know why healers still use it.  Constantly overhealing, heal sniping, and not using appropriate healing on MT's.  I mean, you do you, but I know I personally prefer healers that know how to heal w/o quickheal/healbot.  I've died way too many times to being assigned healers that use it.

I’ve changed some of the settings and use macros to use QuickHeal with extra commands and I find it works perfectly other than the LoS issue

I would heal without it, but I became disabled a decade ago and I struggle with fast fine motor skills. I bind QuickHeal to the space bar and I mash it. I get told I’m a great healer…. Until someone goes out of LoS then I get called a fucking idiot because everyone dies.

I can’t tank, and I can’t dps, so the only thing left is healing

## Post 76300 by Drubarrymooer (Grandmaster of Forum PvP) — 2023-11-07T15:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76300#p76300 | page 1 | era: pre-1.18.1 -->

> **Bimbombo2 wrote: Tue Nov 07, 2023 3:08 pm**
> > **Drubarrymooer wrote: Tue Nov 07, 2023 3:03 pm**
> > This addon causes so many issues, I don't know why healers still use it.  Constantly overhealing, heal sniping, and not using appropriate healing on MT's.  I mean, you do you, but I know I personally prefer healers that know how to heal w/o quickheal/healbot.  I've died way too many times to being assigned healers that use it.
>
>   I’ve changed some of the settings and use macros to use QuickHeal with extra commands and I find it works perfectly other than the LoS issue
>
>  I would heal without it, but I became disabled a decade ago and I struggle with fast fine motor skills. I bind QuickHeal to the space bar and I mash it. I get told I’m a great healer…. Until someone goes out of LoS then I get called a fucking idiot because everyone dies.
>
>  I can’t tank, and I can’t dps, so the only thing left is healing

Aww, that stinks.  I'm sorry to hear that.  And ppl get way too bent out of shape over video games sometimes.  Unfortunately, I don't have any good advice on the LOS issue other than situational awareness, which can be difficult sometimes.  Also, if anyone's being a jerk to you, just tell em to get bent.  Hopefully, my comment didn't come across that way.

## Post 76303 by Queenoona (Barrens Chat Casualty) — 2023-11-07T15:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76303#p76303 | page 1 | era: pre-1.18.1 -->

Im surprised that it doesn't have a function similar to Decursives 'Blacklist' feature.
With the Decursive addon if you try to cleanse someone that is out of LoS it automatically throws them on a blacklist for a few seconds so the addon doesn't get stuck trying to cleanse them.

Never used quickheal myself so I'm not certain if it has anything that can be enabled like that, but if not maybe try asking in the #addons section of the Discord as well to see if anyone there has insight.

## Post 76311 by Bimbombo2 — 2023-11-07T16:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76311#p76311 | page 1 | era: pre-1.18.1 -->

> **Queenoona wrote: Tue Nov 07, 2023 3:42 pm**
> Im surprised that it doesn't have a function similar to Decursives 'Blacklist' feature.
>  With the Decursive addon if you try to cleanse someone that is out of LoS it automatically throws them on a blacklist for a few seconds so the addon doesn't get stuck trying to cleanse them.

Yeah that’s exactly what I was thinking it should have. QuickHeal is a well made addon and I can’t imagine it would be difficult to add a line of code that says “if two heals are attempted on the same target within 0.3 seconds, and other healing targets are available, ignore them as a healing target for 5 seconds or until no other healing targets are available”

## Post 76312 by Bimbombo2 — 2023-11-07T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76312#p76312 | page 1 | era: pre-1.18.1 -->

> **Drubarrymooer wrote: Tue Nov 07, 2023 3:14 pm**
> Aww, that stinks.  I'm sorry to hear that.  And ppl get way too bent out of shape over video games sometimes.  Unfortunately, I don't have any good advice on the LOS issue other than situational awareness, which can be difficult sometimes.  Also, if anyone's being a jerk to you, just tell em to get bent.

Lol it’s fine. Wow can be a pretty toxic game. I love the toxicity. I wouldn’t enjoy the game if people were not assholes to each other lol

## Post 76489 by Bimbombo2 — 2023-11-08T14:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76489#p76489 | page 1 | era: pre-1.18.1 -->

I have been playing around with it some more, and it turns out the issue is to do with HoTs.

Non-HoTs add players to a blacklist for two seconds if they are LoS. But HoTs don’t add a player to the blacklist, which means the addon can get stuck trying to spam HoTs on the same target

I have put in an issue on the addon’s page, but the guy hosting the addon only reuploaded it, and he’s just as clueless as I am <https://github.com/Zebouski/QuickHeal/issues/3>

I’ve had a look at the code myself, and it should be fairly straightforward to just add a target receiving a failed HoT attempt to the blacklist. I am thinking I can just copy and paste some code from the non-HoT blacklist function. I’ve tried it for a few hours so far and no luck yet. But I’m going to keep trying   happy_turtle_head

Edit: I can’t figure this out lol. I’m gonna give up on it for now. If anyone else manages to fix it, please let me know   satisfied_turtle_head

