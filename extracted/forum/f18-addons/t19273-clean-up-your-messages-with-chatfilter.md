---
title: "Clean up your messages with ChatFilter"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19273"
topic_id: 19273
forum_id: 18
forum: "AddOns"
author: "Zmarotrix"
author_authority: "player"
posted: "2025-05-13T17:32:00Z"
last_post: "2025-05-13T21:05:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T10:25:47Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Clean up your messages with ChatFilter

## Post 130870 by Zmarotrix — 2025-05-13T17:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130870#p130870 | page 1 | era: pre-1.18.1 -->

Hey everyone,

The world chat spam has been pretty intense lately, especially during peak hours. To help combat this, I've put together a straightforward addon called ChatFilter.

The goal is simple: to help you clean up your chat window. ChatFilter allows you to:
- Define custom filters to block messages containing specific words or phrases.
- Mute all messages from specific players.
- Optionally, apply these filters only to certain channels (like World or Trade) while leaving others untouched.
Hopefully, this can make the server environment a bit more usable and less cluttered.

 **Quick Examples of How It Works:**

 **To block any message containing "twitch.tv":** Code: Select all

```
/cf block twitch.tv
```

 **To block messages containing BOTH "your" AND "mom":** Code: Select all

```
/cf block your, mom
```

 **To block most guild spam by blocking messages with both brackets in it:** Code: Select all

```
/cf block <, >
```

 **To block all messages from a specific player:** Code: Select all

```
/cf mute Playername
```

 **For a full list of commands and how to use them:** Code: Select all

```
/cf help
```

ChatFilter includes a debug mode (**/cf debug**) which, when enabled, will print a message in your chat window explaining when a message is blocked and which filter caused it. If you use multiple addons that hook the default chat frame, this debug message will fire for each of them.

To show how the blocking mechanism works, ChatFilter comes with a few example phrases pre-loaded into the block list. These currently include terms like "twitch.tv", keywords related to "buy gold", and the name of a particularly spammy guild I've encountered. You can reset these with **/cf reset**.

You can find the addon and full instructions on GitHub:
 **GitHub Link:** <https://github.com/zmarotrix/ChatFilter>

Feedback is welcome!

## Post 130873 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-13T17:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130873#p130873 | page 1 | era: pre-1.18.1 -->

<https://github.com/refaim/SuperIgnore>

Better, ignore with filter and easier to configure.

## Post 130874 by Zmarotrix — 2025-05-13T18:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130874#p130874 | page 1 | era: pre-1.18.1 -->

> **Laysson wrote: Tue May 13, 2025 5:51 pm**
> <https://github.com/refaim/SuperIgnore>
>
>  Better, ignore with filter and easier to configure.

Interesting, I did research before making this and never found this addon.

The only advantage my addon has over this is the ability to create filters requiring multiple parts. I might just submit a PR to this addon to add that however.

EDIT: SuperIgnore also automatically adds anyone who sends a blocked message to your ignore list. That's a little heavy handed for my taste. I did get the multi-part filtering to work though.

*Last edited by Zmarotrix on Tue May 13, 2025 6:41 pm, edited 1 time in total.*

## Post 130877 by Elisleris (Bug Report Enthusiast) — 2025-05-13T18:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130877#p130877 | page 1 | era: pre-1.18.1 -->

<https://github.com/shagu/ShaguChat>
similar addon from a famous author
But also can highlight messages with defined words

## Post 130881 by Zmarotrix — 2025-05-13T18:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130881#p130881 | page 1 | era: pre-1.18.1 -->

> **Elisleris wrote: Tue May 13, 2025 6:23 pm**
> <https://github.com/shagu/ShaguChat>
>  similar addon from a famous author
>  But also can highlight messages with defined words

I do like that highlighting feature, I might implement that. This has the same basic functionality, but it does not support blocking messages from specific players, configuring which channels are filtered or multi-part filters like "<, >" which means you would have to block every individual guild one at a time.

## Post 130882 by Bigsmerf (Grandmaster of Forum PvP) — 2025-05-13T18:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130882#p130882 | page 1 | era: pre-1.18.1 -->

Absolute cinema

Now I can shitpost and post gnome hate propaganda completely undeterred!

## Post 130886 by basednoob (Patch Note Conspiracy Theorist) — 2025-05-13T19:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130886#p130886 | page 1 | era: pre-1.18.1 -->

groupfinder also removes most spam in world chat. and makes a list of the dungeon / raid spam in the addons window. <https://turtle-wow.fandom.com/wiki/GroupFinder>

## Post 130895 by SvenS2 (Bug Report Enthusiast) — 2025-05-13T21:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130895#p130895 | page 1 | era: pre-1.18.1 -->

Cool, thanks for sharing   smiling_turtle_head

