---
title: "📬 Service Mail (Non-Tradable Item Services via Mail)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23331"
topic_id: 23331
forum_id: 14
forum: "Suggestions"
author: "Wilsonsds"
author_authority: "player"
posted: "2025-12-18T21:10:00Z"
last_post: "2026-02-27T15:35:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T11:02:37Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# 📬 Service Mail (Non-Tradable Item Services via Mail)

## Post 163113 by Wilsonsds (Patch Note Conspiracy Theorist) — 2025-12-18T21:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163113#p163113 | page 1 | era: 1.18.1-announced-pre-release -->

Hey devs / community,

I'd like to suggest a new mail option that behaves like **non-tradable trade**, but asynchronously: **Service Mail**.

 **Core idea**
You can mail an item to someone, but the receiver **cannot loot it, keep it, or put it in their bags**. The item is only usable as a **service target** (like non-tradable trade behavior). After doing the service, they click **Return** to send it back.

 **Scope note (to avoid soulbound drama)**
To keep this simple and avoid soulbound controversy, I'm suggesting the **first version** works with **tradable items only** (items that bind when equipped are fine). Items that bind when picked up would be excluded. The feature is still very useful without touching soulbound items.

 **Allowed actions (service-only)**
- Enchanting: apply enchants only (**no disenchant**)

- Use enchant consumables that target an item (if applicable)

- Lockpicking: only flips the state **Locked -> Unlocked** (no opening, no looting by the receiver)

- Other similar "service interactions" that don't transfer ownership
 **Important: no inventory access**
- The attachment **never goes into the receiver's inventory**

- No equip, no vendor, no trade, no auction house, no mail-forward

- Receiver only sees a "service-only" interaction + the option to return it
 **Payment / tips (simple + scam-resistant)**
To avoid adding a new "escrow" system, payment can be handled using the existing mail option where the return mail **requests payment before the sender can take the item**.

- Sender mails the item via **Service Mail**

- Receiver performs the service

- Receiver returns the item with a requested payment (service fee / tip), or with zero requested payment for friends/alts

- Sender pays only if they want to accept and retrieve the item
 **Failsafes (reduce "item stuck" support)**
- Pre-check: block sending if recipient mailbox is full (sender keeps the item and gets an error)

- Return safety: if sender mailbox is full, block the return action until there is space (item stays "in service")

- Auto-return: item returns automatically to the original sender in **72 hours** if not returned (no refresh/extension)

- Optional: cap max X active Service Mails per account/character (prevents storage abuse)
 **Crash / rollback / dupe concerns**
This can remain safe if item ownership never changes: the item stays owned by the original sender and only enters an **"in service"** state until it returns (or times out).
 **One true owner at all times** in the database, using a service-only state and logging, instead of ownership transfer.

 **Interface (keep it idiot-proof)**
- Checkbox in the mail window: **[Service Mail]**

- Tooltip example: "Receiver cannot take item. Service-only actions. Auto-returns in 72h."

- Attachment slot visually marked as "service-only" (so nobody thinks it's normal mail)
 **Socialization concern**
This doesn't replace in-person trading — it removes repetitive logistics.

- People will still do classic in-person trades in Stormwind for strangers, like always

- This mainly helps guildmates/friends/alts and mismatched schedules

- Negotiation and reputation still matter; you're just not forced into "meet me now" every time
 **About “this is like retail work orders”**
Some people might think this resembles retail crafting/work orders at a glance, but it’s actually **a completely different system**.

- Retail work orders are about placing a request for someone to **craft** something (often with provided materials and commissions)

- This suggestion is about **service-only handling of an existing item** (enchanting, lockpicking as a locked->unlocked state change, etc.)

- Most importantly: the item **never enters the receiver’s bags** and ownership never transfers — it’s just a “service target” until it returns
So even if the concept sounds similar on the surface (“remote services”), the mechanics and purpose are fundamentally different.

What do you all think? Any edge cases I'm missing?

## Post 167686 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-02-07T16:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167686#p167686 | page 1 | era: 1.18.1-announced-pre-release -->

bump.

## Post 167865 by Deeno (Barrens Chat Casualty) — 2026-02-10T08:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167865#p167865 | page 1 | era: 1.18.1-announced-pre-release -->

many colors...

mail option that behaves like non-tradable trade: **it would be a nice** QOL change but im not sure if its possible with this client, maybe in unreal engine...

an alternative that can work is the crafting/work orders system which turns this idea inside out by saying: lets see who is in town currently

## Post 169525 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-02-27T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169525#p169525 | page 1 | era: 1.18.1-announced-pre-release -->

> **Deeno wrote: Tue Feb 10, 2026 8:35 am**
> many colors...

Hello, well, i like colors, but you can always copy and paste in a .txt file to read.

> **Deeno wrote: Tue Feb 10, 2026 8:35 am**
> mail option that behaves like non-tradable trade: **it would be a nice** QOL change but im not sure if its possible with this client, maybe in unreal engine...
>
>  an alternative that can work is the crafting/work orders system which turns this idea inside out by saying: lets see who is in town currently

Your like of thinking is very good, could be something simple like LFT, but for enchants and whatnot, showing the ammount of tip you want to give, if you have mats or not.

But in service mail enchants would be more practical, and with service mail both parties do not need to be online at the same time.

## Post 169532 by basednoob (Patch Note Conspiracy Theorist) — 2026-02-27T15:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169532#p169532 | page 1 | era: 1.18.1-announced-pre-release -->

It would be much better to change enchanting so it was possible to buy them on the auction house

