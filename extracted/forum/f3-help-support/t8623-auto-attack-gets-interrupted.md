---
title: "Auto-Attack gets Interrupted"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8623"
topic_id: 8623
forum_id: 3
forum: "Help & Support"
author: "Sylveria"
author_authority: "player"
posted: "2023-08-02T07:01:00Z"
last_post: "2023-08-03T06:28:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T09:09:45Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Auto-Attack gets Interrupted

## Post 55556 by Sylveria (Grandmaster of Forum PvP) — 2023-08-02T07:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55556#p55556 | page 1 | era: pre-1.18.1 -->

(hope this is the right section for this..)

Maybe someone can help me, idk if someone else had this problem:
When tanking dungeons with my paladin (UBRS, Scholo, Strath), sometimes my auto-attack "interrupts" and just.. stops. same goes if i wanna use Holy Strike, it gets "interrupted" and i have to spam the button in order to get the ability through. Same with auto-attack, i have to permanently SPAM right-click on the enemy to keep attacking.
I can't tell what is causing the problem, cause after a short time it works normally again.

does anyone have an idea if it's a paladin specific problem? or if its caused by an addon (though i tried by deactivating various ones)? or caused by some bugged ability?
Have this problem for a while now but i have absolutely no clue and it's getting annoying by now.

## Post 55557 by Ifool — 2023-08-02T07:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55557#p55557 | page 1 | era: pre-1.18.1 -->

It might be due to some old wow code interfering with some macros and sometimes abilities.

Try and put this line in your Holy Strike or Judgment macro:

/cleartarget
/targetlasttarget
/startattack

It should fix the issue. Let me know.

## Post 55558 by Geojak (Grandmaster of Forum PvP) — 2023-08-02T08:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55558#p55558 | page 1 | era: pre-1.18.1 -->

i ahve also notcied this issue. sometimes holy strike probably bugs out attack and suddenly you are standing their not attackign when you should. could alos be wf totem, i feel like it happnes more often in raids. i never had this issue on warrior on classic.

## Post 55560 by Drubarrymooer (Grandmaster of Forum PvP) — 2023-08-02T08:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55560#p55560 | page 1 | era: pre-1.18.1 -->

This is a bug.  Press ESC and right click on the target.   Sometimes you have to wiggle around.  Its weird.  It used to happen a lot but they fixed it quite some time ago.  It still rears its ugly head from time to time...usually at the worst possible time. Lol.

## Post 55566 by Monq2q — 2023-08-02T13:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55566#p55566 | page 1 | era: pre-1.18.1 -->

> **Ifool wrote: Wed Aug 02, 2023 7:37 am**
> It might be due to some old wow code interfering with some macros and sometimes abilities.
>
>  Try and put this line in your Holy Strike or Judgment macro:
>
>  /cleartarget
>  /targetlasttarget
>  /startattack
>
>  It should fix the issue. Let me know.

Have you been able to get '/startattack' working? I haven't, thinking it was "protected". ¯\_(ツ)_/¯

## Post 55582 by Geojak (Grandmaster of Forum PvP) — 2023-08-02T16:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55582#p55582 | page 1 | era: pre-1.18.1 -->

/startattack is introduced for example by, roid macro addon. It doesn't work without any addon

## Post 55605 by Monq2q — 2023-08-02T21:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55605#p55605 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Wed Aug 02, 2023 4:25 pm**
> /startattack is introduced for example by, roid macro addon. It doesn't work without any addon

Then that explains it, thank you.

## Post 55625 by Sylveria (Grandmaster of Forum PvP) — 2023-08-03T06:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55625#p55625 | page 1 | era: pre-1.18.1 -->

Thanks for the replies thus far. Next time i'm login in I'll try out those suggestions and see if the problem still appears. I'll let you know if the macro did help or not. (or the ESC-thingy)

