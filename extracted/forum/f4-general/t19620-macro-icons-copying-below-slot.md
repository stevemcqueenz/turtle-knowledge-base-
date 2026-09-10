---
title: "Macro icons copying 'below' slot"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19620"
topic_id: 19620
forum_id: 4
forum: "General"
author: "Allirial"
author_authority: "player"
posted: "2025-05-29T17:45:00Z"
last_post: "2025-05-31T16:05:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:44:23Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro icons copying 'below' slot

## Post 133536 by Allirial — 2025-05-29T17:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133536#p133536 | page 1 | era: pre-1.18.1 -->

Hi all,

I'm new to turtle wow and have been loving the experience but something is wrong with my macros. I'm using Roid Macros to make them similar to what I remember however I have a weird issue, where #showtooltip works fine if the equivalent slot on the base action bar is empty, otherwise the icon will be whatever ability is in that action bar.

![Image](https://imgur.com/a/9OFT1AJ)

For reference this is my macro -

/script if nil then CastSpellByName("Blessing of Might"); end
#showtooltip Blessing of Might
/cast [help @mouseover] Blessing of Might; [help @target] Blessing of Might; [@player] Blessing of Might

I've tried reloading my ui, deleting my WDB, taking everything except #showtooltip out of the macro, nothing seems to fix it.

Any help would be greatly appreciate,
Allirial

## Post 133792 by Hobbits — 2025-05-31T16:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133792#p133792 | page 1 | era: pre-1.18.1 -->

A few things you might try:
 - Manually set the icon when creating the macro. Sometimes, selecting an icon instead of leaving it blank can override the issue.
 - Check for conflicting addons—some UI mods, like pfUI or SuperMacros, use different methods to determine the spell in a macro.
 - Test a different macro structure—some players have had success tweaking the order of commands.

