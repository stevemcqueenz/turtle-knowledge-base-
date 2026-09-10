---
title: "Bongos keybinds not working"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20644"
topic_id: 20644
forum_id: 18
forum: "AddOns"
author: "3cb"
author_authority: "player"
posted: "2025-08-03T06:19:00Z"
last_post: "2025-08-18T15:52:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:24:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Bongos keybinds not working

## Post 142875 by 3cb — 2025-08-03T06:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142875#p142875 | page 1 | era: pre-1.18.1 -->

I'm not sure what's up with Bongos, but I'm able to set up keybinds on my action bar, but when I press the button it's as if it doesn't exist. I go into the keybinds setting, then scroll down to the area specifically for bongos. Letters are there on my action bar, but again, no input.

Going into the base action bar keybinds settings and finding the equivalent position button and assigning a kb to it does now let my new keybinding work, but unfortunately the drawback to this is that it now doesn't show the hotkey on my action bar.

## Post 142882 by Membrane (Barrens Chat Casualty) — 2025-08-03T07:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142882#p142882 | page 1 | era: pre-1.18.1 -->

In Bongos Options, there's a tick box that is something like "Reuse Blizzard Bars"

Turn that off.

## Post 142897 by 3cb — 2025-08-03T10:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142897#p142897 | page 1 | era: pre-1.18.1 -->

> **Membrane wrote: Sun Aug 03, 2025 7:54 am**
> In Bongos Options, there's a tick box that is something like "Reuse Blizzard Bars"
>
>  Turn that off.

I never had it enabled   scared_turtle_head   crying_turtle   crying_turtle

## Post 142901 by 3cb — 2025-08-03T10:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142901#p142901 | page 1 | era: pre-1.18.1 -->

> **Membrane wrote: Sun Aug 03, 2025 7:54 am**
> In Bongos Options, there's a tick box that is something like "Reuse Blizzard Bars"
>
>  Turn that off.

I found out what it was. I have the PizzaSlices addon, and it seems was conflicting with Bongos

Keeping this up in case some sorry sap has this same issue in the future

## Post 146191 by Hackerman76 — 2025-08-16T16:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146191#p146191 | page 1 | era: pre-1.18.1 -->

> **3cb wrote: Sun Aug 03, 2025 10:26 am**
> > **Membrane wrote: Sun Aug 03, 2025 7:54 am**
> > In Bongos Options, there's a tick box that is something like "Reuse Blizzard Bars"
> >
> >  Turn that off.
>
>   I found out what it was. I have the PizzaSlices addon, and it seems was conflicting with Bongos
>
>  Keeping this up in case some sorry sap has this same issue in the future

Thank you so much for sharing this! Was driving me nuts clicking my abilities   crying_turtle

## Post 146791 by Flegman — 2025-08-18T15:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146791#p146791 | page 1 | era: pre-1.18.1 -->

> **3cb wrote: Sun Aug 03, 2025 10:26 am**
> I found out what it was. I have the PizzaSlices addon, and it seems was conflicting with Bongos
>
>  Keeping this up in case some sorry sap has this same issue in the future

If somebody still wants to use both PizzaSlices and Bongos there is a solution.
First of all, you can try PizzaSlices 1.5.2, apparently it should fix this issue. I say "apparently", because for me it didn't fix anything.

Things to do to fix it yourself:
- Go to Interface\AddOns\PizzaSlices\src\snowfall.lua and open it with a text editor (Notepad++, SublimeText etc.)
- Locate line number 29. For me the script crashes at line 30: Code: Select all

```
if (button:GetButtonState() == "NORMAL" ) then
```

We need to go one line before that
- Paste this code at line 29 Code: Select all

```
if button = nil then
return
end
```
- Save changes and /reload in game. Staring from line 28 your code should look like this. Don't touch anything else. Code: Select all

```
button = getglobal("ActionButton"..id)
if button = nil then
return
end

if (button:GetButtonState() == "NORMAL" ) then
button:SetButtonState("PUSHED");
UseAction(ActionButton_GetPagedID(button), 0, 0);
end
```
That's it, this hack should at least allow you to to bind keys to your action bars and use your PizzaSlices rings.

This issue was [reported](https://github.com/Pizzahawaiii/PizzaSlices/issues/53) at PizzaSlices git, hopefully it will be fixed at some point.

