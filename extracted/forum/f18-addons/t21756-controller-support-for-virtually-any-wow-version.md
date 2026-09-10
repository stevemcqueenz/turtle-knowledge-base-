---
title: "Controller Support for virtually any wow version"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21756"
topic_id: 21756
forum_id: 18
forum: "AddOns"
author: "Oxyd2"
author_authority: "player"
posted: "2025-09-07T20:52:00Z"
last_post: "2026-01-16T18:10:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T10:22:18Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Controller Support for virtually any wow version

## Post 150700 by Oxyd2 — 2025-09-07T20:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150700#p150700 | page 1 | era: pre-1.18.1 -->

Hello,
This weekend I began working on a project to enable playing World of Warcraft with a controller.
I am still in the early stages and would appreciate guidance on how to make it accessible to others who may be interested.

So far, I have created a small Python script using Pygame that maps controller button inputs to specific keyboard key presses and provides basic mouse control.
[![Image](https://i.ibb.co/yF4jcJts/Captura-de-pantalla-2025-09-07-221424.png)](https://ibb.co/yF4jcJts)

In addition, I developed a small optional WoW plugin that replaces the default action bar labels (1, 2, 3, 4) with the actual controller button assignments (see picture).
[![Image](https://i.ibb.co/FkXGs3P7/Wo-WScrn-Shot-090725-221350-tga.jpg)](https://ibb.co/FkXGs3P7)

As mentioned, I would appreciate advice on how to refine and properly structure this project, since I "vibecoded" most of it and may have overlooked important considerations, as i have no background in programming.

Thanks in advance

## Post 150701 by Faustorgo (Barrens Chat Casualty) — 2025-09-07T21:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150701#p150701 | page 1 | era: pre-1.18.1 -->

i wish i could know any of this stuff, but bro, keep doing it.

## Post 150706 by Terrydavis (Patch Note Conspiracy Theorist) — 2025-09-07T21:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150706#p150706 | page 1 | era: pre-1.18.1 -->

bro is programming his own version of JoyToKey

## Post 150707 by Ulukay (Patch Note Conspiracy Theorist) — 2025-09-07T21:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150707#p150707 | page 1 | era: pre-1.18.1 -->

[viewtopic.php?t=14086](https://forum.turtlecraft.gg/viewtopic.php?t=14086)

## Post 150783 by Volcannuss — 2025-09-08T12:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150783#p150783 | page 1 | era: pre-1.18.1 -->

Man, I really want to play with a controller, it's much more comfortable. Keep up the good work!

## Post 150938 by Oxyd2 — 2025-09-09T07:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150938#p150938 | page 1 | era: pre-1.18.1 -->

Been doing some tests, and for now it works quite well.

I also checked JoyToKey, which is 1 billion times better than the crappy tool i have.
But mine does a couple of things that i don't know if they are available on Joytokey:
 - L1 + Right Stick = Mouse control
 - R1 + Right Stick = Vertical Scroll
 - L1 + R3 (Stick press) = Centers the cursor on the screen with a slight Y axis offset so the cursor is placed slightly below character's head. It makes it super easy to loot and interact with other NPCS.
 - When you save your button layout, it creates a Lua file that can be placed inside the companion addon and the default labels of the action bars are replaced for actual icons of the controller buttons, so it is easier to identify the button combos.

This morning been playing with a hunter with almost no inconvenience.

## Post 151547 by Oxyd2 — 2025-09-13T09:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151547#p151547 | page 1 | era: pre-1.18.1 -->

Update!

Now i can use the touchpad to also control the mouse, for faster interactions!

## Post 154843 by Volcannuss — 2025-10-08T11:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154843#p154843 | page 1 | era: 1.18.1-announced-pre-release -->

Hello, when will you make it available to the community?

## Post 165356 by Zorewin88 — 2026-01-16T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165356#p165356 | page 1 | era: 1.18.1-announced-pre-release -->

I just launch Turtle wow through steam and use steam to bind anything you want to a controller, steam controller options are super rorbust

