---
title: "addon to sell junk and more"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20237"
topic_id: 20237
forum_id: 18
forum: "AddOns"
author: "Rindexxx"
author_authority: "player"
posted: "2025-07-11T00:02:00Z"
last_post: "2025-08-22T11:29:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:24:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# addon to sell junk and more

## Post 138689 by Rindexxx (Barrens Chat Casualty) — 2025-07-11T00:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138689#p138689 | page 1 | era: pre-1.18.1 -->

need some addon to sell grey items and other items i put on the list. best if it also had character specific profiling

## Post 139968 by Marukmethai — 2025-07-16T19:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139968#p139968 | page 1 | era: pre-1.18.1 -->

You're probably looking for something like [this](https://shagu.org/ShaguJunk/).

Which, imho, isn't really what you want, because you have to put every grey item on that list.

I'm currently writing my own addon, which deletes all grey+listed items if they are below a certain vendorprice-threshold and sells all grey+listed items not deleted once you speak to a vendor. I do however struggle to account for stacksizes, so my addon is in alpha, not really well tested and full of debug messages.

I'll let you know as soon as I solved the stack-price issue (because let's be honest, we're only interested in how much gold per bag slot an item stack is, not how much a single item of that slot is worth).

Edit: resolved the stacksize-issue. I'll just have it running a few days and see if there's any problems, then remove the debug-stuff and straighten out whatever issues I see. So there might be an addon I'm ready to share next week.

## Post 142077 by Marukmethai — 2025-07-29T12:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142077#p142077 | page 1 | era: pre-1.18.1 -->

Here you go:
<https://github.com/Firnblut/LootFilterTurtle/tree/main>

You can't do character specific profiling though.

## Post 147683 by Catyngla (Barrens Chat Casualty) — 2025-08-22T10:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147683#p147683 | page 1 | era: pre-1.18.1 -->

Automaton can do that. All grey by default, plus any item that you manually add to the list.

<https://gitlab.com/Artur91425/Automaton>

You can create profiles, so somehow it can be character specific.

It will automate a lot more stuff, so you might want to disable it all at first if you only want selling the junk

## Post 147687 by Azcron (Patch Note Conspiracy Theorist) — 2025-08-22T11:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147687#p147687 | page 1 | era: pre-1.18.1 -->

You want Shagu tweaks. <https://shagu.org/ShaguTweaks/>
It adds a “Sell Junk” button to every merchant window, that sells all grey items.

