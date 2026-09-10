---
title: "pfUI bag bar help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6216"
topic_id: 6216
forum_id: 18
forum: "AddOns"
author: "Nickgreyden"
author_authority: "player"
posted: "2023-03-26T11:21:00Z"
last_post: "2023-07-10T06:36:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:31:30Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# pfUI bag bar help

## Post 39133 by Nickgreyden — 2023-03-26T11:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39133#p39133 | page 1 | era: pre-1.18.1 -->

So I've been trying to find a fix for this for months to no avail. pfUI comes with basically OneBag installed. I hate OneBag and want to see each individual bag and have a bar to open each bag individually without using shortcut keys. I can accomplish having each bag show up individually by going to Components>Modules>Disable Module Bags. However, I cannot find a way to get the bag bar back on screen. I've found no other Modules or Skins that fix the issue. I've found nothing under Componets>Bags and Bank and there appears to be nothing under ActionBars that fixes this issue either.

Anyone have a clue how to get back my bag bar?

## Post 44911 by Dhrazar (Barrens Chat Casualty) — 2023-05-08T13:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44911#p44911 | page 1 | era: pre-1.18.1 -->

> **Nickgreyden wrote: Sun Mar 26, 2023 11:21 am**
> So I've been trying to find a fix for this for months to no avail. pfUI comes with basically OneBag installed. I hate OneBag and want to see each individual bag and have a bar to open each bag individually without using shortcut keys. I can accomplish having each bag show up individually by going to Components>Modules>Disable Module Bags. However, I cannot find a way to get the bag bar back on screen. I've found no other Modules or Skins that fix the issue. I've found nothing under Componets>Bags and Bank and there appears to be nothing under ActionBars that fixes this issue either.
>
>  Anyone have a clue how to get back my bag bar?

Same issue for me man. I don't get it why shagu won't implement it, because there is no such an  option. Plus, the auto sort addon for bag doesn't work correctly, some items can't be moved nor using after sorting. So I must restart the whole game and delete WDB folder, to make it work again.

After hours of research i got it. That's how you do it.
Create 5 macros for each bag and put them on your preferred action bar slots.

/run ToggleBag(0)
/run ToggleBag(1)
/run ToggleBag(2)
/run ToggleBag(3)
/run ToggleBag(4)

edit: Okay, if someone is using the pfUI all-in-one-bag, you need this fixed version for auto sorting.
<https://github.com/refaim/SortBags>

## Post 52764 by Nickgreyden — 2023-07-10T06:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52764#p52764 | page 1 | era: pre-1.18.1 -->

> **Dhrazar wrote: Mon May 08, 2023 1:19 pm**
> Same issue for me man. I don't get it why shagu won't implement it, because there is no such an  option.
>
>  [...]
>
>  After hours of research i got it. That's how you do it.
>  Create 5 macros for each bag and put them on your preferred action bar slots.
>
>  /run ToggleBag(0)
>  /run ToggleBag(1)
>  /run ToggleBag(2)
>  /run ToggleBag(3)
>  /run ToggleBag(4)
>
>  edit: Okay, if someone is using the pfUI all-in-one-bag, you need this fixed version for auto sorting.
>  <https://github.com/refaim/SortBags>

Yeah, I should have come back to this with an update when I found the issue. The problem is the bag bar is tied into the action bars and Shagu said it is too difficult to separate them and, as such, has no plans to do so.

You can, however, rebind the bag slots as well as the keyring (which has no default keybind) from the default wow keybind menu if you are so inclined to do that with no need for a macro. It still does not allow for the swapping of bags so either turning off the action bar component or enabling one bag and using that menu will have to suffice.

