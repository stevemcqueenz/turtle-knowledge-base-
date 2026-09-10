---
title: "API AttackTarget"
url: "https://turtle-wow.fandom.com/wiki/API_AttackTarget"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T17:59:36Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API AttackTarget

Toggles auto-attacking of the player's current target.
<syntaxhighlight lang="lua">
 AttackTarget();
</syntaxhighlight>
----
  -*Arguments***

  *none*

----
  -*Returns***

  ;nil

----
  -*Example***
<syntaxhighlight lang="lua">
 AttackTarget();
</syntaxhighlight>

  -*Result***
If you were swinging your melee weapon at your target, you'll stop. If you weren't, you'll start.

----
  -*Description***

   This is actually a toggle.  If not currently attacking, it will initiate attack.  If currently attacking, it will stop attacking.
   You can test your current attack "Action slot" using [IsCurrentAction(actionSlot)](API_IsCurrentAction) for status (you'll have to find the auto-attack slot, though).
   If you need a way to always engage auto-attack, rather than toggle it on or off, one workaround is [AssistUnit("player")](API_AssistUnit) this will always attack if you have "Attack on assist" checked in the Advanced tab of the Interface Options panel. Note that you cannot combine this with [TargetNearestEnemy()](API_TargetNearestEnemy) in the same function/macro: the "assist" target isn't updated fast enough.
----
  The [AssistUnit("player")](API_AssistUnit) method described in the previous paragraph doesn't always work, in particular if you are switching between targets a lot. The most reliable way to make sure your attack is always on, no matter how many times you hit the attack button, is to use the following macro:
<syntaxhighlight lang="lua">
 /script if not IsCurrentAction(61) then UseAction(61) end;
</syntaxhighlight>

  All that one-line script does is see whether your Attack button is not enabled, and if it isn't, it turns it on.
  To make this work for you:
  1. drag the default Attack icon (it is button #1 on the 1st skill bar by default) to an unused slot, preferably on a skill bar you don't use much. If you want to skip step #2, simply drag the default Attack icon to button #1 of the 6th skill bar (i.e. slot 61)
  2. replace the number 61 in the script with the number of that slot. The slots are numbered 1-12 for the 1st skill bar, 13-24 for the 2nd bar, and so on (25-36, 37-48, 49-60, 61-72).
  3. assign the macro to a button on a skill bar (e.g. button #1 on the 1st skill bar)

Slightly longer, but more complete method to just find attack anywhere on your bar.<syntaxhighlight lang="lua">
/script if not ma then for i = 1,72 do if IsAttackAction(i) then ma = i; end; end; end; if ma then if not IsCurrentAction(ma) then UseAction(ma); end; else AttackTarget("target");end;
</syntaxhighlight>

## Addon
Example from addon named TNE isAttacking<syntaxhighlight lang="lua">
-- active functions

function AttackOn()
  if (not IsAttacking()) then
    AttackTarget();
  end
end

function AttackOff()
  if (IsAttacking()) then
    AttackTarget();
  end
end
</syntaxhighlight>
