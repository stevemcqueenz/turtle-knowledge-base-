---
title: "Launcher and mac"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15979"
topic_id: 15979
forum_id: 3
forum: "Help & Support"
author: "hervherve"
author_authority: "player"
posted: "2024-11-20T07:02:00Z"
last_post: "2024-11-20T07:48:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:49:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Launcher and mac

## Post 108872 by hervherve — 2024-11-20T07:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108872#p108872 | page 1 | era: pre-1.18.1 -->

Hi, not all people can run the game with dxvk so, to force it being downloaded automatically will just break them game..
Perhaps a toggle to let those people play?

 - People with very old GPU cannot run vulkan
 - People running the game inside a VM (so all mac users)

On mac for instance, vanillafixes is still required to have decent performance but you could include the windows build of wined3d or something like the dxvk verision of Proton-Sarek (Proton-For-Old-Vulkan)

Also, the update applied with the launcher does not seems to be up to date (.02 vs .05)

unhappy_turtle

EDIT: If applying a patch/update through the launcher, the game will bug and you will have to download the full client again. Do not use the launcher.
I would really want to know what the launcher does.

*Last edited by hervherve on Wed Nov 20, 2024 8:38 am, edited 2 times in total.*

## Post 108880 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-11-20T07:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108880#p108880 | page 1 | era: pre-1.18.1 -->

> **hervherve wrote: Wed Nov 20, 2024 7:02 am**
> Hi, not all people can run the game with dxvk so, to force it being downloaded automatically will just break them game..
>  Perhaps a toggle to let those people play?
>
>  - People with very old GPU cannot run vulkan
>  - People running the game inside a VM (so all mac users)
>
>  On mac for instance, vanillafixes is still required to have decent performance but you could include the windows build of wined3d or something like Proton-Sarek (Proton-For-Old-Vulkan)
>
>  Also, the update applied with the launcher does not seems to be up to date (.02 vs .05)
>
>   unhappy_turtle

Hi!
Using DXVK is optional, not mandatory.
Don't enable this option if you don't want to.

## Post 108882 by hervherve — 2024-11-20T07:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108882#p108882 | page 1 | era: pre-1.18.1 -->

Absolutely, my point is that there is no option on the launcher. No visibility at all, it just downloads it when clicking "UPDATE”.

At least, describe the thing on the launcher.

You can see what will be downloaded clicking "UPDATE INFO", but the dx9 dll makes no mention of dxvk (you can only see that a dxvk.conf will be downloaded, but it has nothing to do with the library execution).

Plus, it will confuse those users (I’m sure 99% of people never heard of dxvk and if they are a bit tech savvy, they will understand the dx9 dll, but won’t know that this is actually dxvk).
How could people know that the new dx9 dll being downloaded is in fact dxvk?

*Last edited by hervherve on Wed Nov 20, 2024 7:39 am, edited 3 times in total.*

## Post 108884 by hervherve — 2024-11-20T07:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108884#p108884 | page 1 | era: pre-1.18.1 -->

Even worse, I checked, the launcher forces you to download your DXVK; you can’t even switch it to a working one.

When you swap out the DLL and try to launch the game with the launcher, you can’t.
The launcher checks what DLL you are using, so there is only the "UPDATE" button; the "PLAY" one only appears if you update, which will make the game crash.

The only workaround is to either:
 - Swap the DLL while the launcher has updated everything and then click "PLAY"
 - Hope to get the "fail to reach the update server" error lol

EDIT: Even trying to swap while the launcher is open makes anything bugged out… I could not get those DLLs to work on VMware (Proton-Sarek's DXVK launches the client, but everything “3D" appears black, and Wind3D (so OpenGL) has such poor performance it’s not usable)

I haven’t tried much, but I, as far as I know, the launcher can’t work on Mac/vm
SOLUTION: If you want to use the launcher (indeed useful to patch wow.exe), you run it once, then remove d3d9.dll and the game will run just fine

EDIT2: Ok so after downloading the new zipped client, it appears that there is no dxvk at all, the launcher just Update it if it's inside your working folder.
My bad, do not take into account my main DXVK issue.
This is just so much simpler: don’t use the launcher, it will fuck up your install if inside a vm. I’m not so sure what the launcher actually does technically, but when patching the wow.exe for the custom settings, it may break something I don’t know: All 3D elements of the game will be black.

*Last edited by hervherve on Wed Nov 20, 2024 8:35 am, edited 2 times in total.*

