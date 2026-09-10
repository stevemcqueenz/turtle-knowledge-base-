---
title: "PFUI Paging"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16371"
topic_id: 16371
forum_id: 18
forum: "AddOns"
author: "Vokar282"
author_authority: "player"
posted: "2024-12-07T03:21:00Z"
last_post: "2025-04-10T06:22:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:26:19Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# PFUI Paging

## Post 111656 by Vokar282 — 2024-12-07T03:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111656#p111656 | page 1 | era: pre-1.18.1 -->

Can someone help me understand why selecting "paging" on an action bar does not enable that bar to be switched when holding down modifiers (ctrl, alt, shift)? I thought that by checking that option, the bar would behave like the main bar and switch. Unless I am missing something...

If this is intended behaviour, then please explain what "paging" does as an option for the action bars!

Also, can the lua be modified to make multiple actions bars switch with the modifiers?

## Post 111663 by Imonobor (Bug Report Enthusiast) — 2024-12-07T06:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111663#p111663 | page 1 | era: pre-1.18.1 -->

I don't really remember my own struggles with PFUI's action bar paging, but eventually I gave up and went back to Discord Action Bars. If you disable PFUI's own action bar component, they can coexist quite well. And Discord Action Bars have SO MUCH customization, it can page like nothing else.

Here's how to set it up:
![Image](https://i.imgur.com/Qe44SFP.png)

Just repeat this for every bar you want to be page-able. Just remember you have 10 bars of 12 actions each, so it's possible to run out of actions. For example I have 4 bars that page on Shift, which actually takes up 8 bars total. So if I also wanted them to page on Ctrl, I'd only be able to do that for 2 of my bars, bringing it to the limit of 10.
It's even worse if you're a druid and want things to page on different forms - while possible to page them, it does interfere with this method, because when you press shift, it goes back to your original page 1. So what I do is hide the first bar when not in humanoid form, and show a separate bar in the same place for each form, then I apply bar 1's key mapping to it.

Here's the setup for that:
![Image](https://i.imgur.com/RqQUOyZ.png)![Image](https://i.imgur.com/yYxDewF.png)

Let me know if I can be of further assistance with DAB. Sorry I wasn't much help with PFUI though.
Maybe someone more savvy will show up to tell us how to achieve the same in PFUI.

## Post 111702 by Vokar282 — 2024-12-07T15:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111702#p111702 | page 1 | era: pre-1.18.1 -->

I don't mind trying to get both working together. Thanks for the insight.
I might have to go this route and see if it works for me, but I might still try to see if I can understand the lua to modify it.

Update: I think I got the bars to a pretty good place using dab and pfui combo. The only thing is now I can't get rid of the keyring button. Oh well, not a big deal.

Thanks for the suggestions.

## Post 125924 by Downwithopp — 2025-04-08T00:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125924#p125924 | page 1 | era: pre-1.18.1 -->

> **Imonobor wrote: Sat Dec 07, 2024 6:53 am**
> I don't really remember my own struggles with PFUI's action bar paging, but eventually I gave up and went back to Discord Action Bars. If you disable PFUI's own action bar component, they can coexist quite well. And Discord Action Bars have SO MUCH customization, it can page like nothing else.
>
>  Here's how to set it up:
>  ![Image](https://i.imgur.com/Qe44SFP.png)
>
>  Just repeat this for every bar you want to be page-able. Just remember you have 10 bars of 12 actions each, so it's possible to run out of actions. For example I have 4 bars that page on Shift, which actually takes up 8 bars total. So if I also wanted them to page on Ctrl, I'd only be able to do that for 2 of my bars, bringing it to the limit of 10.
>  It's even worse if you're a druid and want things to page on different forms - while possible to page them, it does interfere with this method, because when you press shift, it goes back to your original page 1. So what I do is hide the first bar when not in humanoid form, and show a separate bar in the same place for each form, then I apply bar 1's key mapping to it.
>
>  Here's the setup for that:
>  ![Image](https://i.imgur.com/RqQUOyZ.png)![Image](https://i.imgur.com/yYxDewF.png)
>
>  Let me know if I can be of further assistance with DAB. Sorry I wasn't much help with PFUI though.
>  Maybe someone more savvy will show up to tell us how to achieve the same in PFUI.

Hello,

Its not letting me remap pages after the first set.

![Image](https://i.imgur.com/yR7lKpA.jpeg)
![Image](https://i.imgur.com/3tpV4pZ.jpeg)

Basically just trying to page 2 actions bars to flip back and forth between shift/ctrl hold down...

## Post 125959 by Imonobor (Bug Report Enthusiast) — 2025-04-08T07:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125959#p125959 | page 1 | era: pre-1.18.1 -->

> **Downwithopp wrote: Tue Apr 08, 2025 12:44 am**
> Hello,
>
>  Its not letting me remap pages after the first set.
>  -snip-
>  Basically just trying to page 2 actions bars to flip back and forth between shift/ctrl hold down...

Hello!
Before you can use the conditionals to change pages, you have to set up how many pages each bar has from the "Button Layout" tab:
![Image](https://i.imgur.com/znt3Xm1.png)

You can also set up exactly which actions these bars show on each page from the "Set Action IDs", to fix any duplicate actions across your bars (for example if you don't want Bar1-Page2 to show the same spells as Bar2-Page1):
![Image](https://i.imgur.com/qRHc6AG.png)

Just remember that you have a limited amount of Action IDs, so you can't page for example 5 bars with 3 pages each - their spell buttons will start to repeat.

Hope this helps :)

## Post 126075 by Downwithopp — 2025-04-09T00:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126075#p126075 | page 1 | era: pre-1.18.1 -->

It did thank you :)

Next problem.

Is there anyway to condition for remaping while holding shift+control down as well?

Page 1 - No modifier
Page 2 - Shift
Page 3 - Control
Page 4 - Shift+Control <--- Any way to do that?

## Post 126239 by Imonobor (Bug Report Enthusiast) — 2025-04-10T06:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126239#p126239 | page 1 | era: pre-1.18.1 -->

> **Downwithopp wrote: Wed Apr 09, 2025 12:26 am**
> It did thank you :)
>
>  Next problem.
>
>  Is there anyway to condition for remaping while holding shift+control down as well?
>
>  Page 1 - No modifier
>  Page 2 - Shift
>  Page 3 - Control
>  Page 4 - Shift+Control <--- Any way to do that?

Well, this is more complicated, because of the way the conditions work - all they do is detect when you press or release a key, then page the bar, they don't actually have "conditionals" to check if something else is pressed or held down.
It's probably possible by using the conditions "Function Returned False/True" or "Variable is False/True", or writing your own code in the OnEvent Scripts to detect combined key presses.
Also the Response "Run Script" can probably help, but that's too complicated for me. You'd actually have to know how to write Lua code.

An alternative is to set your page 4 to Alt, or to another hotkey by setting it up in the "Keybindings" tab - scroll down to the empty rows, on the first dropdown set "Variable Keybinding", on the second dropdown select a number (for example "1") and in the red buttons bind a key (for example "Z").
Then from the conditions make a "Variable Keybinding Down", set its number to "1", Response -> Page to 4. And the same for "Variable Keybinding Up" - page to 1. So now the "Z" key will act as a modifier itself. Unfortunately you can't bind Shift+Ctrl as a variable keybinding :/

P.S. I just now noticed we're using "Remap Page", which basically re-arranges the pages of a bar instead of the simpler "Change Page", lol. I guess the effect is kinda the same for that use case though :P

