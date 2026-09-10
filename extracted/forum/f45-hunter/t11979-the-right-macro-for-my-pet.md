---
title: "the right macro for my pet"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11979"
topic_id: 11979
forum_id: 45
forum: "Hunter"
author: "Blackbook"
author_authority: "player"
posted: "2023-11-29T12:34:00Z"
last_post: "2023-12-23T04:24:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:13:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# the right macro for my pet

## Post 79262 by Blackbook — 2023-11-29T12:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79262#p79262 | page 1 | era: pre-1.18.1 -->

Hey im currently looking to find this macro again i was using a couple months ago.

I have the following wish i want a petattack petfollow macro with mouseover. So i can stay on my target but send my pet out to the next target. I had a working one but switching my pc i lost some files i thought i dont need anymore.

Thanks for any help on this!

I actually found what i was looking for to let it attack on mouseover but now i need to let my pet follow on the second press of the macro to call it back.

/script if UnitCanAttack("player","mouseover") then TargetUnit("mouseover");PetAttack();TargetUnit("playertarget"); else PetAttack(); end

## Post 82400 by Snigery (Barrens Chat Casualty) — 2023-12-23T04:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82400#p82400 | page 1 | era: pre-1.18.1 -->

> **Blackbook wrote: Wed Nov 29, 2023 12:34 pm**
> I actually found what i was looking for to let it attack on mouseover but now i need to let my pet follow on the second press of the macro to call it back.

You can use the following to check your pet distance from you.
Code: Select all

```
if CheckInteractDistance( "pet", 1 ) then PetFollow() end
```

Note it does not literally check distance, it checks if you can perform certain entity interactions that are limited by proximity, like inspecting inventory, or trading, etc. But just using 1 should work, basically melee range; I think it's trading or something.

