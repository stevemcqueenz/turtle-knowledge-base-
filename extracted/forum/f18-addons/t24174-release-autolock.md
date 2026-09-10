---
title: "[Release] AutoLock"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24174"
topic_id: 24174
forum_id: 18
forum: "AddOns"
author: "Spritzbube"
author_authority: "player"
posted: "2026-03-05T11:03:00Z"
last_post: "2026-03-29T17:26:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:21:11Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Release] AutoLock

## Post 170111 by Spritzbube — 2026-03-05T11:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170111#p170111 | page 1 | era: 1.18.1-announced-pre-release -->

**AutoLock v1.0.1 — Warlock Rotation Addon for TurtleWoW**

![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/main_window.png?raw=true)

Tired of manually tracking your dots, Shadow Trance procs and cooldowns mid-fight? AutoLock handles your Warlock rotation with configurable buttons.

<https://github.com/DavidBecht/AutoLock>

 **What it does:**
AutoLock extends Cursive with some features and an UI.

Press a configured button — AutoLock scans your spell priority list and fires the first spell that is ready to go. Shadow Trance active? Shadow Bolt fires first. Dots fallen off? They get refreshed. Mana too low? Life Tap is cast automatically.

 **Features:**

- Priority-based rotation — drag spells up/down to set the order

- Multiple named configs (e.g. AoE, Single Target, PvP)
![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/add_new_config.png?raw=true)
- Drag any config icon straight onto your action bar — the button is locked to that config

- Curse management via Cursive — refreshes only when a dot actually falls off

- Soul Shard auto-delete when Soul Bag is full

- Minimap button + SpellBook button
![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/map_button.png?raw=true)
- Add spells to your rotation
![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/add_new_spell.png?raw=true)

Not working right now but buttons already in there:
Per-spell conditions — Player HP%, Mana%, Target HP% with AND/OR logic[/list]

 **Requirements:**

- Cursive: <https://github.com/pepopo978/Cursive>

- SuperWoW: <https://github.com/balakethelock/SuperWoW>

- English client

- **Not tested with NamPower! Might not working.**
 **Support:**
Found a bug or want a new feature: <https://github.com/DavidBecht/AutoLock/issues>
If AutoLock saves you from manually tracking your dots, consider buying me a coffee!
<https://paypal.me/TWoWCoffee>

*Last edited by Spritzbube on Thu Mar 05, 2026 5:03 pm, edited 2 times in total.*

## Post 170120 by Ravenofseven72 (Barrens Chat Casualty) — 2026-03-05T12:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170120#p170120 | page 1 | era: 1.18.1-announced-pre-release -->

would be better when nampower instead of SuperWow .

some screens ?

Cursive Link broke , correct link <https://github.com/pepopo978/Cursive>

Cursive does require superwow to work: <https://github.com/balakethelock/SuperWoW>

## Post 170153 by Spritzbube — 2026-03-05T17:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170153#p170153 | page 1 | era: 1.18.1-announced-pre-release -->

Added some images and corrected the links. Since cursive require superwow I not thought of nampower. I am also unsure if it works with nampower

## Post 170162 by Ravenofseven72 (Barrens Chat Casualty) — 2026-03-05T19:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170162#p170162 | page 1 | era: 1.18.1-announced-pre-release -->

> **Spritzbube wrote: Thu Mar 05, 2026 5:06 pm**
> Added some images and corrected the links. Since cursive require superwow I not thought of nampower. I am also unsure if it works with nampower

thing the author of "**Cursive**" had to make it happend work with nampower.

## Post 170171 by Spritzbube — 2026-03-05T20:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170171#p170171 | page 1 | era: 1.18.1-announced-pre-release -->

Ah okay. Due to the queuing behavior of nampower I am not sure whether my addon since it behaves more like a spamming addon will work as expected. I would need to test it first and if necessary make some adjustments when nampower is detected.

## Post 173050 by Spritzbube — 2026-03-29T17:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=173050#p173050 | page 1 | era: post-1.18.1 -->

**AutoLock v1.0.4 — Warlock Rotation Addon for TurtleWoW**

![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/main_window.png?raw=true)

Priority-based Warlock rotation addon — press one button, AutoLock fires the highest-priority spell that's ready.
Manages dots via Cursive, handles Shadow Trance procs, Life Tap, Soul Shards, range checks, and more.

[**[ GitHub — Download & Source ]**](https://github.com/DavidBecht/AutoLock)

---
 **What's new since v1.0.1**

 **NamPower integration**
NamPower is now fully supported but **not required**. The rotation engine is aware of the spell queue — higher-priority spells can override what's queued, and the queue is respected so spells don't get dropped.
Previously: untested, likely broken with NamPower.

 **Drain Soul channel control (DS Cfg)**
A new **Cfg** popup next to Drain Soul lets you choose which dots are allowed to refresh while DS is actively
channeling. Unchecking a dot keeps the channel running uninterrupted.
![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/ds_config_window.png?raw=true)
![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/DS_configs.JPG?raw=true)

 **Dark Harvest: DH interrupts Drain Soul option (DH Cfg)**
The DH Cfg popup has a new checkbox: *DH interrupts Drain Soul*. Uncheck it and Dark Harvest will never fire
while a DS channel is running — useful if you want DS to always complete before DH fires.
![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/dh_config_window.png?raw=true)
![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/DH_configs.JPG?raw=true)

 **Config drag-and-drop with floating icon**
Shift-dragging a config icon onto your action bar now shows a proper floating drag icon following your cursor. The
resulting macro is correctly named and has a visible icon.

 **Bug fixes**
- Refreshtime values in the spell list now save correctly
- Spell enable/disable toggle was not persisting — fixed
- Config state now correctly restores on UI open
- Silent range-unknown handling (no more console spam when a spell has no action slot)

---
 **All features**

- **Priority-based rotation** — drag to reorder or type a priority number
- **Multiple named configs** — switch with one click or bind each config to its own action bar button
- **Curse management via Cursive** — dots refresh only when they actually fall off
- **DS Config** — per-dot control over what can interrupt a Drain Soul channel
- **DH Config** — required dots before Dark Harvest fires, Nightfall-during-channel toggle, DH-interrupts-DS
toggle
- **Life Tap automation** — casts Life Tap automatically when mana is too low
- **Soul Shard auto-delete** — clears overflow shards from normal bags when Soul Bag is full
- **Minimap button** (draggable) + **SpellBook button**
- Per-spell conditions UI (Player HP%, Mana%, Target HP%) — *not fully implemented yet*
![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/overall_settings.JPG?raw=true)

![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/add_new_config.png?raw=true)
![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/add_new_spell.png?raw=true)

![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/map_button.png?raw=true)
![Image](https://github.com/DavidBecht/AutoLock/blob/main/assets/spellbook.png?raw=true)

---
 **Requirements**

- **Cursive** — <https://github.com/pepopo978/Cursive>
- **SuperWoW** — <https://github.com/balakethelock/SuperWoW>
- **NamPower** — If u want queueing and better latency
- English client

---
Found a bug or want a feature? [**Open an issue on GitHub**](https://github.com/DavidBecht/AutoLock/issues)
If AutoLock saves you from manually tracking your dots, feel free to buy me a coffee!

## Post 173057 by Ravenofseven72 (Barrens Chat Casualty) — 2026-03-29T17:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=173057#p173057 | page 1 | era: post-1.18.1 -->

sieht gut aus, aber für mich opa :D , bisschen zu komplex. mach weiter so :)

