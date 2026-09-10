---
title: "Macros and Addons help!!!"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7972"
topic_id: 7972
forum_id: 46
forum: "Warlock"
author: "Wexioo"
author_authority: "player"
posted: "2023-06-25T05:30:00Z"
last_post: "2023-07-02T00:33:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:17:39Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macros and Addons help!!!

## Post 51225 by Wexioo — 2023-06-25T05:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51225#p51225 | page 1 | era: pre-1.18.1 -->

Hi im searching for Important macros like send Petattack when casting dots or wand. Or stop petattack when sould drain pls help

## Post 52080 by Drogun — 2023-07-02T00:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52080#p52080 | page 1 | era: pre-1.18.1 -->

Pet will attack current target. If pressed again on the same target, it will stop attacking and run back to you.

/run if not UnitExists("target") then PetFollow(); return; end if not UnitIsUnit("target", "pettarget") then PetAttack(target); else PetFollow(); end

