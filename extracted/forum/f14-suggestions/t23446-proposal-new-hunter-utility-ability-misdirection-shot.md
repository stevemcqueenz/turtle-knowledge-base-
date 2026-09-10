---
title: "Proposal: New Hunter Utility Ability – Misdirection Shot"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23446"
topic_id: 23446
forum_id: 14
forum: "Suggestions"
author: "Oletoker"
author_authority: "player"
posted: "2025-12-30T23:55:00Z"
last_post: "2026-01-03T22:57:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T11:06:36Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Proposal: New Hunter Utility Ability – Misdirection Shot

## Post 164077 by Oletoker — 2025-12-30T23:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164077#p164077 | page 1 | era: 1.18.1-announced-pre-release -->

Hello Turtle Team,

I wanted to share an idea that I believe fits naturally into Turtle WoW’s design philosophy of expanding class identity while staying true to the vanilla spirit.
With the introduction of new pet abilities such as Strider Presence, Roar of Fortitude, Death Roll, and others, Hunters have gained exciting new ways to support their group. One ability that would complement this direction beautifully is a Hunter threat‑redirection tool — something like a “Misdirection Shot.”
Why it fits Turtle WoW:
Strengthens group synergy: Hunters could help tanks establish threat on pulls, especially in dungeons and raids where early aggro is often chaotic.
Enhances pet‑centric gameplay: With so many new pet abilities, a threat‑redirect shot would make pet tanking more viable and tactical.
Supports Turtle’s philosophy: It adds depth without breaking vanilla balance, similar to the custom pet abilities already added.
Improves gameplay flow: Hunters could open with their full rotation without risking accidental aggro, making the class feel smoother and more cooperative.

Possible Vanilla‑Friendly Implementation:
A ranged shot that causes the Hunter’s next few seconds of threat to be transferred to a chosen target (tank or pet).
Moderate cooldown to prevent abuse.
No retail‑style automation — just a simple, tactical tool that rewards good timing.
This ability wouldn’t inflate DPS or power creep; it would simply give Hunters a meaningful utility option that enriches group play and complements the custom pet ecosystem you’ve already built.

Suggested Mechanics
Duration: 4–6 seconds
Threat Transfer: 80–100% of threat generated during the window
Cooldown: 1–2 minutes
Target: Friendly player or pet
Range: Standard shot range
This keeps the ability tactical rather than rotational.

Why It’s Balanced in a Vanilla‑Plus Environment
A. No DPS Increase
The ability does not increase damage; it only redistributes threat.
This avoids power creep and maintains vanilla’s DPS hierarchy.
B. Supports Turtle’s Pet‑Focused Design
With new pet abilities acting as mini‑cooldowns, a threat‑redirect shot:
Enables pet tanking in niche scenarios
Allows Hunters to open aggressively without losing control
Creates synergy with abilities like Death Roll and Bubble Barrier
C. Improves Dungeon Flow
Threat issues are most noticeable in 5‑mans.
This ability would:
Reduce accidental pulls
Help undergeared tanks
Make Hunters more desirable in groups
D. Fits the “Vanilla‑Plus” Philosophy
Turtle WoW has added abilities that feel like they should have existed in 1.12.
A simple threat‑redirect shot is thematically appropriate and mechanically modest.

Encounter Design Impact
Tanks
Stronger initial threat leads to smoother pulls
Less reliance on pre‑pull sunders or LoS tricks
Hunters
Can use full opener without throttling
Gain a meaningful utility button that rewards timing
Raid Leaders
More consistent pull control
Less risk of ranged DPS pulling early
Pets
Opens design space for pet‑tank encounters or challenges

Conclusion
A threat‑redirection shot would:
Add depth without adding raw power
Strengthen group synergy
Support the custom pet system
Improve dungeon and raid flow
Fit naturally into Turtle WoW’s vanilla‑plus design philosophy

Pseudocode‑style logic (safe, non‑copyrighted)
Code
OnThreatGenerated(hunter, amount):
if hunter.HasAura(MISDIRECTION_AURA):
target = hunter.GetStoredMisdirectionTarget()
if target is valid:
target.AddThreat(amount)
hunter.AddThreat(0)
else:
hunter.AddThreat(amount)
else:
hunter.AddThreat(amount)

Aura Expiration :
When the aura ends:

Clear the stored target reference.
Hunter returns to normal threat behavior.

Code L
OnAuraExpire(hunter, MISDIRECTION_AURA):
hunter.ClearStoredMisdirectionTarget()

Thank you for considering the idea, and for all the work you put into making Turtle WoW such a unique and enjoyable experience.

## Post 164086 by Oletoker — 2025-12-31T00:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164086#p164086 | page 1 | era: 1.18.1-announced-pre-release -->

Or you can use.

OnThreatEvent(hunter, threatAmount):
if hunter.HasAura(AURA_MISDIRECTION_ACTIVE):
target = hunter.misdirectTarget
if target is valid:
target.AddThreat(threatAmount * RedirectPercent)
hunter.AddThreat(0)
else:
hunter.AddThreat(threatAmount)
else:
hunter.AddThreat(threatAmount)

OnAuraExpire(hunter, AURA_MISDIRECTION_ACTIVE):
hunter.misdirectTarget = null

## Post 164375 by Baek (Patch Note Conspiracy Theorist) — 2026-01-03T21:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164375#p164375 | page 1 | era: 1.18.1-announced-pre-release -->

And where is the vanilla? A classic client is, first of all, to watch and not tear off the boss. And if you take pets, they have the opportunity to take on anyone (the only thing you can add an additional number of threat points to the spell) otherwise, redirecting the threat breaks the Pve, since everyone will give the dps to the fullest!

## Post 164379 by Atreidon (Grandmaster of Forum PvP) — 2026-01-03T22:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164379#p164379 | page 1 | era: 1.18.1-announced-pre-release -->

If i had a nickel for every time someone reinvents retail abilities...

Reducing skill expression for tanks and dps everywhrere by having hunters threatspike the tanks is making the game less interesting for everyone.

Hunter, specifically marksman meanwhile is gaining jack and squat out of this. Its not like a class with 30 seconds cd threatwipes does not need a way to offload his threat. Even moreso when it also includes the ridiculous threatspikes that are currently the onl halfway balancing aspect to survivals ridiculous aoe

