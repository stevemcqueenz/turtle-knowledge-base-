---
title: "Twow mailbox addon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21932"
topic_id: 21932
forum_id: 18
forum: "AddOns"
author: "Buttons"
author_authority: "player"
posted: "2025-09-16T14:21:00Z"
last_post: "2025-09-17T12:10:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T10:23:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Twow mailbox addon

## Post 151949 by Buttons — 2025-09-16T14:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151949#p151949 | page 1 | era: pre-1.18.1 -->

So, I am currently and have since patch 1.18, issues with my twow mailbox addon.

Right click does not send items to attachments, but to the first spot open in my bags.

Now on newly made characters, the mailbox addon works as intended. On my older characters. I deleted every file related to old characters, and the issue remains. WDB folded deleted, cache is empty, deleted interface folder and added twow mailbox only, and it still doesnt work for older characters.

Has anyone found a fix for this?

## Post 151954 by Membrane (Barrens Chat Casualty) — 2025-09-16T14:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151954#p151954 | page 1 | era: pre-1.18.1 -->

<https://github.com/sica42/TurtleMail>

## Post 151955 by Buttons — 2025-09-16T15:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151955#p151955 | page 1 | era: pre-1.18.1 -->

> **Membrane wrote: Tue Sep 16, 2025 2:58 pm**
> <https://github.com/sica42/TurtleMail>

Yes, this is what i am using.

<Right Click> or <Left Drag> to add inventory items to the attachments.

Right click only moves the object in my bag to the first available space. I have to manually drag items to the mailbox. VIA left click.

unless you are saying the fix is in that page, but i don't see it.

## Post 151963 by Membrane (Barrens Chat Casualty) — 2025-09-16T16:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151963#p151963 | page 1 | era: pre-1.18.1 -->

You must have another addon interfering, I can create a new mail and right click as many items in my backpack to attach them to the mail as I want. I can also left click and drag to any mail attachment slot. Do you use a bag addon, maybe it's that?

Are you 100% sure you have TurtleMail and not the old Mail or Postal addon?

If you are indeed using TurtleMail then you'll have to disable all other addons, verify functionality and enable your addons a few at a time until you find the one that is causing the behaviour you mention.

## Post 151964 by Buttons — 2025-09-16T16:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151964#p151964 | page 1 | era: pre-1.18.1 -->

> **Membrane wrote: Tue Sep 16, 2025 4:16 pm**
> You must have another addon interfering, I can create a new mail and right click as many items in my backpack to attach them to the mail as I want. I can also left click and drag to any mail attachment slot. Do you use a bag addon, maybe it's that?
>
>  Are you 100% sure you have TurtleMail and not the old Mail or Postal addon?
>
>  If you are indeed using TurtleMail then you'll have to disable all other addons, verify functionality and enable your addons a few at a time until you find the one that is causing the behaviour you mention.

As I stated before,  I deleted all addons and only installed turtle wow addon. It only works for new characters created after patch 1.18. Even with twow mail addon installed, it doesnt work right click. I have to manually drag items to the mailbox.

## Post 151978 by Membrane (Barrens Chat Casualty) — 2025-09-16T19:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151978#p151978 | page 1 | era: pre-1.18.1 -->

Then you have something in your characters saved variables from an old addon.
Game Dir\WTF\Account\ACCOUNT_NAME\Server\Char_Name\

## Post 152029 by armsgirl (Barrens Chat Casualty) — 2025-09-17T06:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152029#p152029 | page 1 | era: pre-1.18.1 -->

Same issue here. After 1.18 TurtleMail is broken
UPD. Looks like it was fixed [https://github.com/sica42/TurtleMail/co ... dd55a84ecc](https://github.com/sica42/TurtleMail/commit/a55a679bb1c15565387274be4a518add55a84ecc)
Not tracked by the launcher though

## Post 152070 by Membrane (Barrens Chat Casualty) — 2025-09-17T11:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152070#p152070 | page 1 | era: pre-1.18.1 -->

That's literally the link I published earlier on  and was told by the OP he's using it!  crying_turtle

## Post 152075 by armsgirl (Barrens Chat Casualty) — 2025-09-17T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152075#p152075 | page 1 | era: pre-1.18.1 -->

> **Membrane wrote: Wed Sep 17, 2025 11:42 am**
> That's literally the link I published earlier on  and was told by the OP he's using it!  crying_turtle

No, you gave the link to the root. I'm quite sure he didn't use it to find an update there. I expected it to be updateable via launcher as well, but obviously you have to do it manually.

