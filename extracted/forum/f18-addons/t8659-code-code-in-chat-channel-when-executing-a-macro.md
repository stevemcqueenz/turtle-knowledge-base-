---
title: "<code> </code> in chat channel when executing a macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8659"
topic_id: 8659
forum_id: 18
forum: "AddOns"
author: "Gamemail"
author_authority: "player"
posted: "2023-08-04T13:21:00Z"
last_post: "2023-08-04T19:42:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:31:14Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# <code> </code> in chat channel when executing a macro

## Post 55773 by Gamemail — 2023-08-04T13:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55773#p55773 | page 1 | era: pre-1.18.1 -->

I have a functioning macro, but now that I'm level 5 and have chat privileges, upon execution of the macro it puts <code> and then </code> in the /say channel.

## Post 55774 by Ibux (Patch Note Conspiracy Theorist) — 2023-08-04T13:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55774#p55774 | page 1 | era: pre-1.18.1 -->

> **Gamemail wrote: Fri Aug 04, 2023 1:21 pm**
> I have a functioning macro, but now that I'm level 5 and have chat privileges, upon execution of the macro it puts <code> and then </code> in the /say channel.

how does the macro look like? could you link it here?

## Post 55777 by Gamemail — 2023-08-04T13:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55777#p55777 | page 1 | era: pre-1.18.1 -->

Apparently not, every time I try I get a "you've been blocked" page. Nice.

## Post 55778 by Gamemail — 2023-08-04T13:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55778#p55778 | page 1 | era: pre-1.18.1 -->

/ r u n   i f   ( " C o m b a t " )   t h e n   c a s t ( " E v i s c e r a t e " )   e l s e   c a s t ( " S t e a l t h " )
e n d

That's the macro, I had to put a space between every character to post it here, how strange.

## Post 55781 by Ibux (Patch Note Conspiracy Theorist) — 2023-08-04T13:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55781#p55781 | page 1 | era: pre-1.18.1 -->

> **Gamemail wrote: Fri Aug 04, 2023 1:45 pm**
> / r u n   i f   ( " C o m b a t " )   t h e n   c a s t ( " E v i s c e r a t e " )   e l s e   c a s t ( " S t e a l t h " )
>  e n d
>
>  That's the macro, I had to put a space between every character to post it here, how strange.

it should look like this Code: Select all

```
/run if UnitAffectingCombat("player") then CastSpellByName("Eviscerate") else CastSpellByName("Stealth") end
```

a bit simpler if you download the roid-macros addon. then you can use tbc macros. like this one: Code: Select all

```
/cast [nocombat] Stealth; Eviscerate
```

## Post 55818 by Gamemail — 2023-08-04T19:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55818#p55818 | page 1 | era: pre-1.18.1 -->

Oh wow, I didn't know TBC macros could be used. I was using super macro with those scripts. I'll get Roid. Thanks!

