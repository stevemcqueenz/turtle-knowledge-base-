---
title: "Lancement impossible"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22696"
topic_id: 22696
forum_id: 3
forum: "Help & Support"
author: "Kmax86"
author_authority: "player"
posted: "2025-11-01T13:24:00Z"
last_post: "2025-11-01T15:17:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:38:39Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Lancement impossible

## Post 158047 by Kmax86 — 2025-11-01T13:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158047#p158047 | page 1 | era: 1.18.1-announced-pre-release -->

Bonjour,

J'ai un message d'erreur quand je lance mon perso et qui me dit :

This application has encountered a critical error :
ERROR #132 (0x85100084) Fatal Exception
Program:E:\\WOW-Turtle WOW\Wow.exe
Exception :    0wC000005 (ACCESS_VIOLATION) at 0023:5CD1B4B3

The instruction at "0x5CD1B4B3" referenced memory at "0x0000000
The memory could not be "written"

Merci de me dire comme empecher ce probleme et que mon jeu puisse se lancer.

## Post 158060 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-11-01T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158060#p158060 | page 1 | era: 1.18.1-announced-pre-release -->

> **Kmax86 wrote: Sat Nov 01, 2025 1:24 pm**
> Bonjour,
>
>  J'ai un message d'erreur quand je lance mon perso et qui me dit :
>
>  This application has encountered a critical error :
>  ERROR #132 (0x85100084) Fatal Exception
>  Program:E:\\WOW-Turtle WOW\Wow.exe
>  Exception :    0wC000005 (ACCESS_VIOLATION) at 0023:5CD1B4B3
>
>  The instruction at "0x5CD1B4B3" referenced memory at "0x0000000
>  The memory could not be "written"
>
>  Merci de me dire comme empecher ce probleme et que mon jeu puisse se lancer.

[If your game is crashing, go through the following steps]
∙ Remove all AddOns and first verify that crashes did not stop.
∙ Enable `Vertext Animation Shaders` in WoW Video settings.
∙ Remove all non-supported custom patches like Darker Nights or HD Models. We're not recommending the use of any unsupported additional modifications, they might interfere with your gameplay and cripple your client. If you want HD Patch compatible with Turtle WoW, type `.hd` and I'll recommend you one!
∙ If you got Vanillafixes enabled. try disabling DXVK your computer might not support Vulkan.
∙ Do not install any unverified binary modifications, such as sound channel count edit, some of them may cause the client to crash.
∙ Whitelist the game in your Antivirus or Windows Defender: <[https://jackboxgames.happyfox.com/kb/ar ... -firewalls](https://jackboxgames.happyfox.com/kb/article/28-how-to-whitelist-and-resolve-issues-in-antivirus-software-and-firewalls)>
∙ If nothing helps, download a fresh client from our website: <[viewtopic.php?t=7709](https://forum.turtlecraft.gg/viewtopic.php?t=7709)>

