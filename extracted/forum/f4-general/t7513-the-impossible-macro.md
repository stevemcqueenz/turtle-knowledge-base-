---
title: "The impossible macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7513"
topic_id: 7513
forum_id: 4
forum: "General"
author: "Snkl"
author_authority: "player"
posted: "2023-05-29T21:31:00Z"
last_post: "2025-02-22T13:27:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T09:46:59Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# The impossible macro

## Post 48007 by Snkl — 2023-05-29T21:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48007#p48007 | page 1 | era: pre-1.18.1 -->

Hi!

On recent WoW clients I had this very neat macro bind to my Tab key :
Code: Select all

```
/cleartarget
/startattack
```

What it does is : selecting the target that is exclusively in front of me and then it attacks it and it never drops the auto-melee no matter how much I spam it. It is actually extremely effective for tanking multiple targets.

I tried to replicate the behavior in the 1.12.1 client
Code: Select all

```
/script ClearTarget(); AttackTarget();
```

The selecting part works, the auto-melee doesn't due the the fact that AttackTarget() is a toggle function (like pressing manually the Attack ability in the spellbook). Trying to put AttackTarget on its own line with a dedicated /script tag gives the same result.

From here I almost tried everything I could, including this kind of trick
Code: Select all

```
/script if not IsCurrentAction(61) then UseAction(61) end; // 61 being the action bar slot where the Attack spell is
```

It does work if used alone, it doesn't work when it follows a ClearTarget().

I downloaded various addons which were suppose to bring back the startattack behavior to the 1.12.1 client but what they all do is something similar to the Attack condition I previously posted but with extra code to avoid the need of putting it somewhere on the action bars. Which means it still doesn't work with ClearTarget().

I actually don't know in which way the ClearTarget() is blocking it. Looks like there's some kind of delay that prevent the whole thing to work.

If some WoW-API Gurus notices something that could unstuck my macro, some help would be very appreciated.

Thanks!

## Post 48013 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-29T23:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48013#p48013 | page 1 | era: pre-1.18.1 -->

I think this is what you're looking for, more or less: Code: Select all

```
/run ClearTarget(); if(not PlayerFrame.inCombat) then AttackTarget() end
```

Or… Code: Select all

```
/run ClearTarget(); if UnitAffectingCombat("player") then AttackTarget() end
```

The additional code after "ClearTarget()" and before "then AttackTarget()" checks to see if the player is in combat already.  If not, then it makes the player attack the nearest valid target.  Doing it this way prevents "AttackTarget()" from being a toggle and, in theory, *should* more or less replicate the Retail macro you mentioned.

The second version is allegedly more reliable, according to *Wowpedia*, but I have no idea.

Someone had [a similar issue](https://forum.turtlecraft.gg/viewtopic.php?t=7344) where they wanted to combine Charge and Attack.  It worked in that scenario so it should work here.

I sound so certain, *don't* I?

## Post 48017 by Snkl — 2023-05-29T23:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48017#p48017 | page 1 | era: pre-1.18.1 -->

Thank you for your reply.
I tried this macro, unfortunatelly it drops the target if I press it too many times. The target, if it attacks me, can somehow force my character to regain it and activate the melee hit but it doesn't work if I need to switch to a target that doesn't attack me directly or has a slow melee speed.

I guess my quest for the holy melee macro continues   sad_turtle_head

## Post 48025 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-30T02:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48025#p48025 | page 1 | era: pre-1.18.1 -->

*Post merged with one below.*

*Last edited by Jolikmc on Tue May 30, 2023 10:53 am, edited 1 time in total.*

## Post 48059 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-30T10:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48059#p48059 | page 1 | era: pre-1.18.1 -->

*Originally posted Tue May 30, 2023 2:05 am*
I'm… an absolute dunce.  Not only did I type the second one wrong the first time around, but I put the condition in the wrong spot in both.  I'm sorry, let me try that again.
Code: Select all

```
/run if(not PlayerFrame.inCombat) then ClearTarget(); AttackTarget() end
```

Or… Code: Select all

```
/run if not UnitAffectingCombat("player") then ClearTarget(); AttackTarget() end
```

 **Now**, if you're out of combat, this will clear your target and attack the nearest one.  But again, there's still the problem of "if you're out of combat" meaning that this can't be used in combat…  Still, it functions closer to the Retail equivilent.  I think?

 **Edit:**
Re-reading the original post, this macro is useless for your purposes of "spot-checking" multiple targets that happen to be in front of you with Attack.  Arf.  Double dunce cap on me.  ):
—

 **Lali-ho**~!  I freaking **worked it out**!  You have to sacrifice an ActionBar Button to make it work, but the macro **works as requested**!!
Code: Select all

```
/run if UnitAffectingCombat("player") then TargetNearestEnemy() end
/run if not IsCurrentAction(13) then AttackTarget() end
```

Notes
- The first line makes the player target **the nearest enemy** only while in combat.
"if UnitAffectingCombat("player") then" could be removed and the macro would work about the same.  I'm just being thorough.
- The second line checks to see if the current action is whatever ActionBar icon.  If it is **not**, then the player attacks the nearest target regardless of Combat status.
For testing, I used ActionBar 2, Box 1 (Action Slot 13), but you can change it to [anything](https://wowpedia.fandom.com/wiki/Action_slot).

## Post 48103 by Snkl — 2023-05-30T19:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48103#p48103 | page 1 | era: pre-1.18.1 -->

The ClearTarget() part is missing so it cycles through all the enemies around me instead of locking the target that my character is facing. If I try to add it back it just makes the auto-melee back to toggle mode.

I don't know what happens with the ClearTarget function, I don't think it has delay or some asynchronous behavior because the results, while not being what I need, are always consistent. It might probably still get worked out but it would rather require a whole addon, not a simple macro.

But thanks for the effort you have put in it ! It was really nice of you

## Post 48108 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-30T20:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48108#p48108 | page 1 | era: pre-1.18.1 -->

I mean… is ClearTarget() *integral* to what you're trying to do?  I don't really understand why it's necessary.  From what I can gather, you *are* trying to cycle through nearby enemies that are equal distance away from you while consistently forcing your character to auto-attack, right?  And… that's what my last attempt does.

Is there something you're not telling me?  Am I just not understanding what you're looking for?  I'm confused…

## Post 48117 by Snkl — 2023-05-30T21:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48117#p48117 | page 1 | era: pre-1.18.1 -->

The ClearTarget() actually "resets" the cycling of TargetNearestEnemy(), so spamming the macro ensure me that only the target that my character is directly facing can be selected. If I want to change I have to rotate my character to face the new target, that's the behavior I wanted to keep ^^ (this and the never-drop-auto-melee).

## Post 120651 by Inff — 2025-02-22T13:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120651#p120651 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Tue May 30, 2023 8:28 pm**
> I mean… is ClearTarget() *integral* to what you're trying to do?  I don't really understand why it's necessary.  From what I can gather, you *are* trying to cycle through nearby enemies that are equal distance away from you while consistently forcing your character to auto-attack, right?  And… that's what my last attempt does.
>
>  Is there something you're not telling me?  Am I just not understanding what you're looking for?  I'm confused…

Do you solved this somehow? Looking for macro like this, but facing the same problem with ClearTarget() stops auto attack.

