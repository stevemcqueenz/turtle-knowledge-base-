---
title: "A Mage patch (Alliance) for Teleport and Portals spells (+install steps)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17580"
topic_id: 17580
forum_id: 29
forum: "Modding"
author: "Wowstein"
author_authority: "player"
posted: "2025-02-15T13:51:00Z"
last_post: "2025-05-12T13:07:00Z"
post_count: 13
pages: 1
fetched: "2026-09-10T10:41:16Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# A Mage patch (Alliance) for Teleport and Portals spells (+install steps)

## Post 120046 by Wowstein — 2025-02-15T13:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120046#p120046 | page 1 | era: pre-1.18.1 -->

Hi,

I play as an **Alliance Mage**, and I've always loved the fact that mages can TP to a lot of places. So I've made myself my own menu for teleportations and portals, displayable with only one click, while being quite Vanilla-looking.

 ****NOT SUITABLE FOR HORDE MAGES (DIFFERENT SPELLS) SORRY :(****
 *Might do another similar patch for Horde later if enough people wants it !*

To achieve this look, you'll need to install 2 addons (not mines) and my icon patch :

• The [patch-M](https://github.com/Kropfstein/patch-M/tree/main) I've made (spell icons patch)
• The [RingMenu](https://github.com/jsb/RingMenu/tree/vanilla) addon
• The [MacroTT-V](https://github.com/UndercityAddons-Vanilla/MacroTT-V) addon

 **Explanations below :)**

![Image](https://i.imgur.com/Ml0I8A1.png)
 *[(Imgur_link here)](https://imgur.com/Ml0I8A1)*

About the patch-M :

It's a simple icon-remplacement patch I've made myself. The new TP and Portals icons are simply remplacing the old ones, with the exception of ****[Portal/Teleport: Alah'Thalas]**** icons remplacing ****[Portal/Teleport: Silvermoon]**** icons, and ****[Teleport: Caverns of Time]**** icon replacing ****[Teleport: Stonard]****.

 *Why ? Because I was disappointed to see that there's no custom image for **[Teleport: Alah'Thalas]** and **[Portal: Alah'Thalas]**. As it uses the same Icons than **[Teleport: Stormwind]** and **[Portal: Stormwind]**, I've resolved to make custom images for each spell.*

Just download the patch-M and put it in your *TurtleWow ****Data**** folder*, with the other patches.

New spell icons preview :

![Image](https://i.imgur.com/SjvSm7h.png)
 *[(Imgur_link here)](https://imgur.com/SjvSm7h)*

How to setup the **RingMenu** addon :

For setting up a similar **RingMenu**, install the addon (in ***Interface > AddOns*** ). Then, in tchat type /ringmenu to open settings.
• At the "**First Button Slot**" line, type "**73**". It'll select an empty Cast-bar for you to drag all your TP spells.
• Go to "**Main Menu > Key Bindings > Open/Close RingMenu**" and add the keybinding of you choice. For me it's the middle-mouse click.

How to setup your Macros and use the **MacroTT-V** addon :

The **MacroTT-V** addon is here to view spell text in the botton right corner, and/or to add custom text to your macros.
First install the addon (in ***Interface > AddOns*** ). Then, just copy/paste the commands below in your new Macros.

 **CAREFULL, the addon works only if your macros have different names !! Mine are named "16 spacebar", "15 spacebar", "14 spacebar" etc ;)** *(so It doesn't show any names)*

Macro for : ***Portal: Alah'Thalas***
/cast Portal: Alah'Thalas
/mtts Portal: Alah'Thalas

Macro for : ***Teleport: Alah'Thalas***
/cast Teleport: Alah'Thalas
/mtts Teleport: Alah'Thalas

This last macro is a bit different, since it uses the **[Time-Worn Rune]** item. You'll need to change the first number to correspond the bag where the rune is, and the second number is the slot-number inside the bag (see img below).

Macro for : ***Teleport: Caverns of Time***
/run UseContainerItem (*BagNumber*, *SlotBagNumber*)
/mttc Teleport: Caverns of Time
/mtta Soulbound - Unique
/mtta Requires Wardens of Time - Friendly
/mtta
/mtta Use: Teleports the caster to the
/mtta Caverns of Time.

![Image](https://i.imgur.com/lbj01kX.png)
 *[(Imgur_link here)](https://imgur.com/lbj01kX)*

![Image](https://i.imgur.com/NrzOrdl.png)
 *[(Imgur_link here)](https://imgur.com/NrzOrdl)*

I think that's everything ! Enjoy fellow Teleport addicts !

## Post 121264 by Chiaki — 2025-03-01T06:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121264#p121264 | page 1 | era: pre-1.18.1 -->

That's awesome, feels really mage-y. Thank youu :)

## Post 121493 by Sylveria (Grandmaster of Forum PvP) — 2025-03-03T11:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121493#p121493 | page 1 | era: pre-1.18.1 -->

Mod doesn't seem to quite work. I even deleted WDB folder. Most icons have been replaced BUT for the Alah'thalas Teleport/Portal.
Only using the patch-file.

[embed: https://s9e.github.io/iframe/2/imgur.min.html#pkk1wgx]

## Post 121803 by Wowstein — 2025-03-05T21:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121803#p121803 | page 1 | era: pre-1.18.1 -->

Yep, thats normal. Sadly, the Alah'Thalas spell share the same icon than Stormwind ; so you need to create a macro, using the icon "silvermoon remnant" that have been replaced by the good Alah'thalas Icon.

If you want to have a seemingless spell, I advice you to combo the patch with the MacroTT-V addon like I did , and create macros with the right icon and those line of text :

/cast Portal: Alah'Thalas
/mtts Portal: Alah'Thalas

/cast Teleport: Alah'Thalas
/mtts Teleport: Alah'Thalas

That way you'll have the good icon.

Everything is explained in the second part about MacroTT-V addon. :)

## Post 121854 by Sylveria (Grandmaster of Forum PvP) — 2025-03-06T07:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121854#p121854 | page 1 | era: pre-1.18.1 -->

> **Wowstein wrote: Wed Mar 05, 2025 9:54 pm**
> Yep, thats normal. Sadly, the Alah'Thalas spell share the same icon than Stormwind ; so you need to create a macro, using the icon "silvermoon remnant" that have been replaced by the good Alah'thalas Icon.
>
>  If you want to have a seemingless spell, I advice you to combo the patch with the MacroTT-V addon like I did , and create macros with the right icon and those line of text :
>
>  /cast Portal: Alah'Thalas
>  /mtts Portal: Alah'Thalas
>
>  /cast Teleport: Alah'Thalas
>  /mtts Teleport: Alah'Thalas
>
>  That way you'll have the good icon.
>
>  Everything is explained in the second part about MacroTT-V addon. :)

Already tried with Macro-TTV and saw the Icons, nonetheless, It uses the spellicon instead of the selected Icon. So its still the the sw one.

Wish that the Turtle Team would add those new Icons theirselves, then we wouldnt need To have a workaround.

## Post 122149 by Wowstein — 2025-03-09T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122149#p122149 | page 1 | era: pre-1.18.1 -->

It might be because you named the Macro ? Each macro must have a unique name (or different space bar name if u don't want to name it).
If the icon doesn't show up in the macro menu instead of the "silvermoon teleport" one, you can choose any spell that you don't use and replace it's icon by the new one : go in the patch file using mpq editor and rename the icon with another name.

Otherwise, idk what to do, sadly this problem exists only because TWoW devs use the same icon as SW :(

## Post 122968 by Hamsbire — 2025-03-19T04:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122968#p122968 | page 1 | era: pre-1.18.1 -->

One-Click Access: Ensure the menu is easily accessible with a single click, enhancing gameplay efficiency.

*Last edited by Hamsbire on Wed Mar 19, 2025 4:07 am, edited 1 time in total.*

## Post 126205 by Makskluver — 2025-04-09T20:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126205#p126205 | page 1 | era: pre-1.18.1 -->

Found a more compact and convenient addon.
<https://github.com/kluverua/PortalFu>

![Image](https://github.com/user-attachments/assets/e826ea8e-7966-4607-9274-3229ebf4e9e7)

## Post 127112 by DarylJohnson — 2025-04-17T08:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127112#p127112 | page 1 | era: pre-1.18.1 -->

> **Makskluver wrote: Wed Apr 09, 2025 8:11 pm**
> Found a more compact and convenient addon.
>  <https://github.com/kluverua/PortalFu>
>
>  ![Image](https://github.com/user-attachments/assets/e826ea8e-7966-4607-9274-3229ebf4e9e7)

The information you shared is very useful, thanks.

## Post 130448 by moguman — 2025-05-10T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130448#p130448 | page 1 | era: pre-1.18.1 -->

> **Makskluver wrote: Wed Apr 09, 2025 8:11 pm**
> Found a more compact and convenient addon.
>  <https://github.com/kluverua/PortalFu>
>
>  ![Image](https://github.com/user-attachments/assets/e826ea8e-7966-4607-9274-3229ebf4e9e7)

uhm... I did install the addon but I cannot get it to work. I have pfUI and though I can see the mini map button, when I press it, it doesnt' show the teleports I have learned. Any ideas why this is happening?

## Post 130617 by Makskluver — 2025-05-11T16:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130617#p130617 | page 1 | era: pre-1.18.1 -->

I have pfUI and this addon and everything work fine - right button shows the list of teleports.
Try disable all addons except this two.
If you find addon with conflict you an create issue (<https://github.com/kluverua/PortalFu/issues>) and  write it name

## Post 130682 by moguman — 2025-05-12T09:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130682#p130682 | page 1 | era: pre-1.18.1 -->

uhm... It has come to my mind: maybe this doesn't work for me because of playing the Spanish version?  ASAP I'll try what you told me Makskluver and we'll find out :D

## Post 130706 by moguman — 2025-05-12T13:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130706#p130706 | page 1 | era: pre-1.18.1 -->

So yes I do confirm the issue with the language. I switched to English and voila, everything began to work flawlessly (even decursive!)

*Last edited by moguman on Mon May 12, 2025 1:32 pm, edited 1 time in total.*

