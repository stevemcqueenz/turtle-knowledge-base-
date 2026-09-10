---
title: "PFUI Keybinds Breaking After Shapeshifting"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22470"
topic_id: 22470
forum_id: 42
forum: "Druid"
author: "Thaladar"
author_authority: "player"
posted: "2025-10-19T07:19:00Z"
last_post: "2026-02-18T04:31:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:01:02Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# PFUI Keybinds Breaking After Shapeshifting

## Post 156139 by Thaladar (Patch Note Conspiracy Theorist) — 2025-10-19T07:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156139#p156139 | page 1 | era: 1.18.1-announced-pre-release -->

Hey everyone!

I’ve been running into a really frustrating issue with PFUI keybinds that started recently.

Here’s what’s happening:
I have my caster bar (1–10) bound to spells like Wrath and Rejuvenation. Everything works fine until I shapeshift into a feral form and then back to caster. After that, my keybinds seem to get mixed up, for example, pressing 1 (which should cast Wrath) instead tries to use Feral Charge if I was previously in bear form, or Pounce if I was in cat form. Note, the action bars do properly change, like when back in casterform I can see my caster spells, but still it thinks I'm using the feral ones!

This only started happening yesterday after months of no issues. Has anyone else experienced this, or know how to fix it? It’s driving me crazy ![🙁](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f641.svg)

*Last edited by Thaladar on Sun Oct 19, 2025 7:34 am, edited 1 time in total.*

## Post 156141 by Thaladar (Patch Note Conspiracy Theorist) — 2025-10-19T07:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156141#p156141 | page 1 | era: 1.18.1-announced-pre-release -->

Edit: I removed PFUI to check if this bug also happens in the normal interface, but it didn't, so it's def a PFUI issue...

## Post 168700 by Nick1192 — 2026-02-18T04:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168700#p168700 | page 1 | era: 1.18.1-announced-pre-release -->

had this same issue, for me the fix was turning off "classic snowfall" addon. (pfui setting had trigger actions on key down enabled, and classic snowfall does the same thing so i guess these 2 together just brick shapeshifting).

