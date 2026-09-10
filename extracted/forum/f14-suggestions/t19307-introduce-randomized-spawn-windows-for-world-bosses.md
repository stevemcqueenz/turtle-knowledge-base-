---
title: "Introduce Randomized Spawn Windows for World Bosses"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19307"
topic_id: 19307
forum_id: 14
forum: "Suggestions"
author: "Wolfmanpaulx"
author_authority: "player"
posted: "2025-05-15T04:12:00Z"
last_post: "2025-05-15T20:50:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T11:30:17Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Introduce Randomized Spawn Windows for World Bosses

## Post 131158 by Wolfmanpaulx — 2025-05-15T04:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131158#p131158 | page 1 | era: pre-1.18.1 -->

Description:
Currently, world bosses respawn after a fixed, constant interval (e.g. exactly 24 h or 72 h). This predictability enables “camping” and gatekeeping by groups that track each kill and monopolize the exact respawn time. To reduce gatekeeping and distribute spawn opportunities more fairly, we propose adding a randomized spawn-window of –20% to +10% around the base timer.

Proposal:

 1. Keep existing constant timer in code (let’s call it `T_base`, in hours).
 2. Compute a random offset on boss death as follows:

Minimum = ⌊T\_base × 0.80⌋
Maximum = ⌈T\_base × 1.10⌉
 3. Roll an integer spawn delay from the inclusive range: [Minimum, Maximum].
 4. Schedule next spawn at (time of death) + (rolled delay in hours).

Example:

For a boss with `T_base = 24 h`:

Minimum = ⌊24 × 0.80⌋ = 19 h
Maximum = ⌈24 × 1.10⌉ = 27 h
Random spawn window = {19, 20, 21, 22, 23, 24, 25, 26, 27} hours after death.

Acceptance Criteria:

On boss death, code calculates `minDelay = floor(T_base * 0.8)` and `maxDelay = ceil(T_base * 1.1)`.
A random integer in `[minDelay, maxDelay]` is selected.
The boss respawn timer is set to the selected delay.
Clients and tooling display the spawn window (e.g. “Next spawn in 19–27 h”).
Existing fixed-timer behavior remains toggleable for testing (e.g. via a config flag).

Notes:

This change should be applied to all world-boss timers (daily, 3-day, etc.).
Verify that analytics and logging record both the chosen delay and the original base timer.
Ensure add-ons and UI elements can display both minimum and maximum times.

## Post 131182 by Elesion (Patch Note Conspiracy Theorist) — 2025-05-15T10:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131182#p131182 | page 1 | era: pre-1.18.1 -->

> **Wolfmanpaulx wrote: Thu May 15, 2025 4:12 am**
> Currently, world bosses respawn after a fixed, constant interval (e.g. exactly 24 h or 72 h). This predictability enables “camping” and gatekeeping by groups that track each kill and monopolize the exact respawn time.

This is unfortunately completely wrong. All world bosses have spawn windows already and the shortest spawn window of a world boss is 24 hours, with most having several days. Turtle custom-bosses are hard to figure out but for the standard Vanilla bosses you can just look at the server project how it's done. The Green Dragons for example have a respawn window of between 4 and 7 days after kill per [https://github.com/vmangos/core/blob/de ... s.cpp#L194](https://github.com/vmangos/core/blob/development/src/game/HardcodedEvents.cpp#L194)
So what's currently in the game is already way harsher than what you propose to do.

If you see world bosses go to the same people over and over it's because they actually sit there for days and days scouting them. Not because they know the kill time and can determine an exact respawn time from that.

## Post 131274 by Wolfmanpaulx — 2025-05-15T20:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131274#p131274 | page 1 | era: pre-1.18.1 -->

> **Elesion wrote: Thu May 15, 2025 10:37 am**
> > **Wolfmanpaulx wrote: Thu May 15, 2025 4:12 am**
> > Currently, world bosses respawn after a fixed, constant interval (e.g. exactly 24 h or 72 h). This predictability enables “camping” and gatekeeping by groups that track each kill and monopolize the exact respawn time.
>
>   This is unfortunately completely wrong. All world bosses have spawn windows already and the shortest spawn window of a world boss is 24 hours, with most having several days. Turtle custom-bosses are hard to figure out but for the standard Vanilla bosses you can just look at the server project how it's done. The Green Dragons for example have a respawn window of between 4 and 7 days after kill per [https://github.com/vmangos/core/blob/de ... s.cpp#L194](https://github.com/vmangos/core/blob/development/src/game/HardcodedEvents.cpp#L194)
>  So what's currently in the game is already way harsher than what you propose to do.
>
>  If you see world bosses go to the same people over and over it's because they actually sit there for days and days scouting them. Not because they know the kill time and can determine an exact respawn time from that.

So you wanna tell me, they are having shifted guards like from hour x to y player1, from w to z player2 etc?

Because it is like no other players or guilds can even touch it....

## Post 131275 by Wolfmanpaulx — 2025-05-15T20:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131275#p131275 | page 1 | era: pre-1.18.1 -->

So only chance to let other guilds touch it is instanced WB or or id lock driven loots for WB which was included in MoP.

