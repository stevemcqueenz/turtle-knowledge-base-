---
title: "first person challenge"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24513"
topic_id: 24513
forum_id: 14
forum: "Suggestions"
author: "Tortusenjoyer"
author_authority: "player"
posted: "2026-03-26T09:32:00Z"
last_post: "2026-03-26T21:38:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T10:59:51Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# first person challenge

## Post 172512 by Tortusenjoyer — 2026-03-26T09:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172512#p172512 | page 1 | era: post-1.18.1 -->

challenge that locks your character into first person mode

## Post 172514 by Wsta (Bug Report Enthusiast) — 2026-03-26T09:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172514#p172514 | page 1 | era: post-1.18.1 -->

That's not a challenge, that's masochism

## Post 172521 by Cysthen (Patch Note Conspiracy Theorist) — 2026-03-26T10:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172521#p172521 | page 1 | era: post-1.18.1 -->

Recommend a VR Headset and putting a Rock on your track pad right click so your head turning is mouse turn. Been there tried that. It's pretty fun ngl. That said it's not ideal because you can't loot anything unless you can maybe set a toggle to right click instead as a seperate hotkey. Yes I've been fully immersed in Azeroth I've even run a Molten Core on a caster doing that one time lol.

## Post 172565 by Rfelleto (Barrens Chat Casualty) — 2026-03-26T14:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172565#p172565 | page 1 | era: post-1.18.1 -->

I do enjoy playing in first person and I have requested this in the past. There are some problems to my mind and I have "tried" to create addons to circumvent this.

 1. No way of knowing if your being attacked from behind. Im Skyrim for instance you get a red dot on your compass showing there is an enemy behind you and their distance based on the distance of the dot. In Wow the GetMobPosition() is protected in the API and (as far as I know) there is no way to display a visual representation that you are being attacked from behind

 2. Mobs tend to stack on top of you and you have to backstep a bit to be able to see them. This, it seems is slowly being fixed by the turtle team because I do see mobs backtracking and repositioning themselves when they stack on top of the player. Not every mob but some.

 3. The camera issue. When you zoom in to first person your character is basically stuck to the ground. If you are a druid cat form or a goblin/gnome you will only see ground in fron of you. Turtle team should add the ability to raise the camera a bit when in first person mode so we can control the height of the camera to our liking. The way it is, imo, is not very good for visualizing whats going on, a lot of your screen space is taken up by ground.

These are my two cents on making first person viable in wow. I would love to play in first person and have attempted many times but for me these are the major issues we have at the time. If these are worked on perhaps first person would be a more enjoyable experience.

## Post 172567 by Rfelleto (Barrens Chat Casualty) — 2026-03-26T14:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172567#p172567 | page 1 | era: post-1.18.1 -->

> **Cysthen wrote: Thu Mar 26, 2026 10:40 am**
> Recommend a VR Headset and putting a Rock on your track pad right click so your head turning is mouse turn. Been there tried that. It's pretty fun ngl. That said it's not ideal because you can't loot anything unless you can maybe set a toggle to right click instead as a seperate hotkey. Yes I've been fully immersed in Azeroth I've even run a Molten Core on a caster doing that one time lol.

I backported an addon for that - its called Mlooklock

## Post 172604 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2026-03-26T18:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172604#p172604 | page 1 | era: post-1.18.1 -->

> **Rfelleto wrote: Thu Mar 26, 2026 2:38 pm**
> 1. In Wow the GetMobPosition() is protected in the API and (as far as I know) there is no way to display a visual representation that you are being attacked from behind
>
>  3. The camera issue. When you zoom in to first person your character is basically stuck to the ground.

 1. There is no func called "GetMobPosition()" in Vanilla, and there surely wouldnt be a reason to protect it.
Blizzard only protects spellcasting, movement, keystrokes, and input reading, thats basically it.

 3. What about UnitXP SP3? It can move the camera's center point up or down. So you can move the camera's
field of view higher, as if you are playing a taller character.

## Post 172617 by Rfelleto (Barrens Chat Casualty) — 2026-03-26T19:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172617#p172617 | page 1 | era: post-1.18.1 -->

> **Foreverdelta33 wrote: Thu Mar 26, 2026 6:17 pm**
> > **Rfelleto wrote: Thu Mar 26, 2026 2:38 pm**
> > 1. In Wow the GetMobPosition() is protected in the API and (as far as I know) there is no way to display a visual representation that you are being attacked from behind
> >
> >  3. The camera issue. When you zoom in to first person your character is basically stuck to the ground.
>
>   1. There is no func called "GetMobPosition()" in Vanilla, and there surely wouldnt be a reason to protect it.
>  Blizzard only protects spellcasting, movement, keystrokes, and input reading, thats basically it.
>
>  3. What about UnitXP SP3? It can move the camera's center point up or down. So you can move the camera's
>  field of view higher, as if you are playing a taller character.

never tried it, problem is we want to get position of mobs aggroed to you. Any tips are greatly appreciated

I will check this UnitxpSP3

## Post 172623 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2026-03-26T20:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172623#p172623 | page 1 | era: post-1.18.1 -->

> **Rfelleto wrote: Thu Mar 26, 2026 7:38 pm**
> never tried it, problem is we want to get position of mobs aggroed to you. Any tips are greatly appreciated
>
>  I will check this UnitxpSP3

I would assume that's impossible.
The C-engine handles wich direction you are facing relative to the mobs position in the game world.

Therefore, the only way to check if a mob is behind you in vanilla, as far as my knowledge goes,
is to read the error messages when trying to cast a spell on a mob thats behind you.
In vanilla, when you try to cast a spell on a mob thats behind you, you get an error message:
"Target needs to be in front of you.", and you could read that and get the data.

However, that would require manual spellcasting, since, as mentioned, spellcasting is protected,
just like targeting unknown (mouse input), and that would make the whole idea impossible.

You would need to "auto-test-spellcast" in order to figure out where a mob is and then display it to you.
But thats not possible and I cant think of an alternative.
Mobs like SuperWoW or UnitXP also dont provide such a specific feature.

PS: Cant you just turn around as you play? Just asking out of curiousity, never tried first person.

## Post 172626 by Rfelleto (Barrens Chat Casualty) — 2026-03-26T20:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172626#p172626 | page 1 | era: post-1.18.1 -->

> **Foreverdelta33 wrote: Thu Mar 26, 2026 8:06 pm**
> > **Rfelleto wrote: Thu Mar 26, 2026 7:38 pm**
> > never tried it, problem is we want to get position of mobs aggroed to you. Any tips are greatly appreciated
> >
> >  I will check this UnitxpSP3
>
>   I would assume that's impossible.
>  The C-engine handles wich direction you are facing relative to the mobs position in the game world.
>
>  Therefore, the only way to check if a mob is behind you in vanilla, as far as my knowledge goes,
>  is to read the error messages when trying to cast a spell on a mob thats behind you.
>  In vanilla, when you try to cast a spell on a mob thats behind you, you get an error message:
>  "Target needs to be in front of you.", and you could read that and get the data.
>
>  However, that would require manual spellcasting, since, as mentioned, spellcasting is protected,
>  just like targeting unknown (mouse input), and that would make the whole idea impossible.
>
>  You would need to "auto-test-spellcast" in order to figure out where a mob is and then display it to you.
>  But thats not possible and I cant think of an alternative.
>  Mobs like SuperWoW or UnitXP also dont provide such a specific feature.
>
>  PS: Cant you just turn around as you play? Just asking out of curiousity, never tried first person.

You can and the sound prompts are actually very helpful (like I know I'm being attacked from the sound the mobs make. it would be nice to have like damage indicators like a first person shooter tho lol. I'm a noob at coding lua btw and you seem to be very experienced. I mostly ask CHATGPT for help lol.

## Post 172628 by Morkahja (Barrens Chat Casualty) — 2026-03-26T21:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172628#p172628 | page 1 | era: post-1.18.1 -->

Why not just turn around tho? Isn't it part of the challenge to not know what's behind you?

## Post 172631 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2026-03-26T21:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172631#p172631 | page 1 | era: post-1.18.1 -->

> **Rfelleto wrote: Thu Mar 26, 2026 8:35 pm**
> You can and the sound prompts are actually very helpful (like I know I'm being attacked from the sound the mobs make. it would be nice to have like damage indicators like a first person shooter tho lol. I'm a noob at coding lua btw and you seem to be very experienced. I mostly ask CHATGPT for help lol.

I see, like an indicator facing the direction of where damage is coming from.

But as mentioned, Im pretty sure this is not possible, since the C-engine does not expose
any functionality for this, and in fact, protects some of the ones we would need, like spellcasting, and anonymous targeting.

EDIT: Ive found a pfui fork wich has some kind of "Behind detection" so I guess it is possible with mods.

