---
title: "[ADDON] LootMonitor - Loot Notifications with Item Icons"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19918"
topic_id: 19918
forum_id: 18
forum: "AddOns"
author: "Croome"
author_authority: "player"
posted: "2025-06-16T21:37:00Z"
last_post: "2025-08-07T10:05:00Z"
post_count: 17
pages: 1
fetched: "2026-09-10T10:24:50Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [ADDON] LootMonitor - Loot Notifications with Item Icons

## Post 135988 by Croome — 2025-06-16T21:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135988#p135988 | page 1 | era: pre-1.18.1 -->

**A simple addon that shows you what you just looted with actual item icons.**

 **What does it do?**

LootMonitor displays small notifications when you loot items or coins. Instead of just text, it shows the actual item icons by finding them in your bags. Pretty handy when you're farming or leveling and want to see what dropped without checking your bags or chat constantly. I assume more and more players are using auto-loot these days.

![Image](https://raw.githubusercontent.com/Wiggen94/lootmonitor/refs/heads/main/images/image.png)

 **Changelog**
 **Version 1.1**
- Quest Item Glow Effect Optional yellow pulsing glow around quest item notifications for easy identification
- Total Count Display Optional purple text showing total amount of looted item in your bags (e.g., "Copper Ore x2 (15)")
- Redesigned Settings Panel
- Enhanced Reset Functionality** - Reset button now provides immediate visual feedback by updating all controls in real-time
 **Features**

 **Loot Detection**
- Catches all loot (items and coins)
- Shows real item icons from your bags
- Displays coin amounts with proper copper/silver/gold icons
- Stacks identical items - shows "Linen Cloth x5" instead of 5 separate notifications
 **Visual Stuff**
- Smooth fade in/out animations
- Items show in their quality colors (green, blue, etc.)
- Compact design that doesn't get in the way
- You can move it anywhere on screen
 **Settings**
- Easy settings panel with sliders
- Adjust how long notifications stay up
- Change the size and timing
- Drag and drop positioning
- Quick on/off toggle
 **How to Use**

1. Install the addon (download link below)
2. Type /lm to open settings
3. Click "Move" to position where you want notifications
4. Adjust timing and size to your liking
5. Go loot stuff!
 **Commands:**
- /lm - Open settings panel
- /lm toggle - Turn on/off
- /lm test - See a sample notification
- /lm move - Reposition notifications
 **Download & Installation**

 **GitHub:** <https://github.com/Wiggen94/lootmonitor>

 **Installation:**
1. Download from GitHub
2. Extract to Interface/AddOns/LootMonitor/
3. Restart WoW or /reload
4. Type /lm to set it up
 **Technical Stuff**

- Works on Turtle WoW
- Lightweight, won't slow you down
- No other addons required
- Searches your bags efficiently to find icons
 **Why I Made This**

I was using the [LootDisplay WeakAura](https://wago.io/4omJVmrNs) on classic, but wanted something that worked on Turtle WoW. So I made this addon instead.

 **Bug Reports & Feedback**

Found a bug or want to suggest something?
- GitHub Issues: <https://github.com/Wiggen94/lootmonitor/issues>
- Reply here on the forums

---
Give it a try and let me know what you think! This is my first addon so any feedback is appreciated.

*Last edited by Croome on Tue Jun 17, 2025 7:54 pm, edited 5 times in total.*

## Post 135995 by Huangxiang — 2025-06-17T01:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135995#p135995 | page 1 | era: pre-1.18.1 -->

I debugged the plugin but it doesn't work for Smooth fade in/out animations
It is not applicable to Chinese servers?

## Post 136010 by Croome — 2025-06-17T06:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136010#p136010 | page 1 | era: pre-1.18.1 -->

> **Huangxiang wrote: Tue Jun 17, 2025 1:12 am**
> I debugged the plugin but it doesn't work for Smooth fade in/out animations
>  It is not applicable to Chinese servers?

I haven't tested on Chinese servers, and there's nothing specific in the addon that targets a specific server, however I must admit that I do not know if the Chinese client is different in other ways.

## Post 136012 by Huangxiang — 2025-06-17T07:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136012#p136012 | page 1 | era: pre-1.18.1 -->

![Image](https://i.postimg.cc/Rhy5Lh5D/QQ20250617-150212.png)
On Chinese servers, items are not displayed properly when collected.

## Post 136026 by Croome — 2025-06-17T09:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136026#p136026 | page 1 | era: pre-1.18.1 -->

> **Huangxiang wrote: Tue Jun 17, 2025 7:10 am**
> ![Image](https://i.postimg.cc/Rhy5Lh5D/QQ20250617-150212.png)
>  On Chinese servers, items are not displayed properly when collected.

Are you referring to the text not being in Chinese? I'm sure I can fix that if that is the case.

## Post 136028 by Huangxiang — 2025-06-17T09:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136028#p136028 | page 1 | era: pre-1.18.1 -->

> **Croome wrote: Tue Jun 17, 2025 9:38 am**
> > **Huangxiang wrote: Tue Jun 17, 2025 7:10 am**
> > ![Image](https://i.postimg.cc/Rhy5Lh5D/QQ20250617-150212.png)
> >  On Chinese servers, items are not displayed properly when collected.
>
>   Are you referring to the text not being in Chinese? I'm sure I can fix that if that is the case.

This is what I've tested on EU

## Post 136030 by Huangxiang — 2025-06-17T09:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136030#p136030 | page 1 | era: pre-1.18.1 -->

> **Croome wrote: Tue Jun 17, 2025 9:38 am**
> > **Huangxiang wrote: Tue Jun 17, 2025 7:10 am**
> > ![Image](https://i.postimg.cc/Rhy5Lh5D/QQ20250617-150212.png)
> >  On Chinese servers, items are not displayed properly when collected.
>
>   Are you referring to the text not being in Chinese? I'm sure I can fix that if that is the case.

On SEA servers, it does not automatically collect all loot (items and coins)

## Post 136037 by Croome — 2025-06-17T10:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136037#p136037 | page 1 | era: pre-1.18.1 -->

> **Huangxiang wrote: Tue Jun 17, 2025 9:53 am**
> > **Croome wrote: Tue Jun 17, 2025 9:38 am**
> > > **Huangxiang wrote: Tue Jun 17, 2025 7:10 am**
> > > ![Image](https://i.postimg.cc/Rhy5Lh5D/QQ20250617-150212.png)
> > >  On Chinese servers, items are not displayed properly when collected.
> >
> >   Are you referring to the text not being in Chinese? I'm sure I can fix that if that is the case.
>
>   On SEA servers, it does not automatically collect all loot (items and coins)

Okay so it basically doesn't work at all on SEA? I'll test it this evening if I get the chance.

## Post 136039 by SvenS2 (Bug Report Enthusiast) — 2025-06-17T10:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136039#p136039 | page 1 | era: pre-1.18.1 -->

Nifty addon. Thanks!

## Post 136043 by Huangxiang — 2025-06-17T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136043#p136043 | page 1 | era: pre-1.18.1 -->

> **Croome wrote: Tue Jun 17, 2025 10:41 am**
> > **Huangxiang wrote: Tue Jun 17, 2025 9:53 am**
> > > **Croome wrote: Tue Jun 17, 2025 9:38 am**
> > > Are you referring to the text not being in Chinese? I'm sure I can fix that if that is the case.
> >
> >   On SEA servers, it does not automatically collect all loot (items and coins)
>
>   Okay so it basically doesn't work at all on SEA? I'll test it this evening if I get the chance.

Really? That's awesome.

## Post 136080 by Croome — 2025-06-17T18:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136080#p136080 | page 1 | era: pre-1.18.1 -->

> **Huangxiang wrote: Tue Jun 17, 2025 11:13 am**
> > **Croome wrote: Tue Jun 17, 2025 10:41 am**
> > > **Huangxiang wrote: Tue Jun 17, 2025 9:53 am**
> > > On SEA servers, it does not automatically collect all loot (items and coins)
> >
> >   Okay so it basically doesn't work at all on SEA? I'll test it this evening if I get the chance.
>
>   Really? That's awesome.

I have updated the addon, does it work now or do I need to test on SEA?

## Post 136100 by Huangxiang — 2025-06-17T21:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136100#p136100 | page 1 | era: pre-1.18.1 -->

> **Croome wrote: Tue Jun 17, 2025 6:43 pm**
> > **Huangxiang wrote: Tue Jun 17, 2025 11:13 am**
> > > **Croome wrote: Tue Jun 17, 2025 10:41 am**
> > > Okay so it basically doesn't work at all on SEA? I'll test it this evening if I get the chance.
> >
> >   Really? That's awesome.
>
>   I have updated the addon, does it work now or do I need to test on SEA?

test it on sea

## Post 136106 by Croome — 2025-06-17T22:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136106#p136106 | page 1 | era: pre-1.18.1 -->

> **Huangxiang wrote: Tue Jun 17, 2025 9:34 pm**
> > **Croome wrote: Tue Jun 17, 2025 6:43 pm**
> > > **Huangxiang wrote: Tue Jun 17, 2025 11:13 am**
> > > Really? That's awesome.
> >
> >   I have updated the addon, does it work now or do I need to test on SEA?
>
>   test it on sea

I just tested on SEA and it worked completely fine. Try to disable other addons maybe.

## Post 136118 by Huangxiang — 2025-06-18T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136118#p136118 | page 1 | era: pre-1.18.1 -->

The problem persists. I tried turning off all addons.I sent you a video on discord

## Post 136313 by MadafakinRio — 2025-06-19T21:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136313#p136313 | page 1 | era: pre-1.18.1 -->

Looks nice. I sometimes have a problem where I'll shift-right click to loot everything but it somehow gets canceled idk? And I end up not looting anything, it stays behind. So I hope this will remind me when that bug happens.

## Post 143503 by 1776 — 2025-08-07T09:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143503#p143503 | page 1 | era: pre-1.18.1 -->

I would really like to try out this addon, however there doesn't seem to be any releases to download on the GitHub link you provided. Will this be fixed soon?

## Post 143511 by 1776 — 2025-08-07T10:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143511#p143511 | page 1 | era: pre-1.18.1 -->

Managed to do it manually, however the icons for looted silver and copper all show as gold. Besides that, addon is great, thanks!

