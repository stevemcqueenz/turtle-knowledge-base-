# Contradictions — Spells and mechanics (patch note vs observation)

Part of [`../contradictions.md`](../contradictions.md); machine-readable copy in [`../../structured/contradictions.yaml`](../../structured/contradictions.yaml). Conventions: [`../CONVENTIONS.md`](../CONVENTIONS.md). Dates UTC.

8 entries. Each gives both sides with author, authority and date, what evidence would settle it, and the current best assessment.

## CON-0068 — Master Strike (Mace) disorient: does damage break it?

- **Side A.** Hotfix line: "Master Strike (Mace) disorient effect is now cancelled by damage as intended". — [Torta (staff), 2025-10-14](https://forum.turtlecraft.gg/viewtopic.php?p=155594#p155594)
- **Side B.** "Still not canceled by damage, great"; and, testing it: "You can literally test it with your warrior... the disorient still doesnt break from damage. So the 'fix' didnt do anything". — [Purecek (player), 2025-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=156039#p156039), [Darkhann (player), 2025-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=156401#p156401)
- **Side C.** A third player reports the opposite — the fix works and is now too strong: "It does. And needs revert because it's useless now. Master strike immediately breaking by own warriors bleeds". — [Aristany (player), 2025-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=156399#p156399)
- **What would settle it.** Aura interrupt flags on the Master Strike (Mace) disorient in 1.18.1 spell data — one field decides it.
- **Assessment (`unresolved`).** Unresolved; the two player reports are directly incompatible, which usually means a rank/weapon-type-specific spell was missed by the fix.

## CON-0069 — Baited Shot and Coordinated Assault: fixed twice, still reported broken

- **Side A.** "Fixed issues when Baited Shot did not trigger from Coordinated Assault or spell crits" (2025-10-05) and "Critical damage from Coordinated Assault can now enable the ability Baited Shot" (2025-10-14). — [Torta (staff), 2025-10-05](https://forum.turtlecraft.gg/viewtopic.php?p=154470#p154470), [Torta (staff), 2025-10-14](https://forum.turtlecraft.gg/viewtopic.php?p=155594#p155594)
- **Side B.** "Still bugged. There is still 0 interaction between baited shot and coordinated assault"; "Kill Command / Coordinated Assault interaction is buggy since the rework from over 2 Months ago". — [Felixo1 (player), 2025-10-28](https://forum.turtlecraft.gg/viewtopic.php?p=157596#p157596), [Kerbees (player), 2025-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=157860#p157860)
- **What would settle it.** Proc chain: does Coordinated Assault's pet attack carry the crit flag that Baited Shot listens for, in 1.18.1 spell data?
- **Assessment (`unresolved`).** Unresolved; two staff fix lines and player denial after both. High-value regression test.

## CON-0070 — Paladin talent Ironclad: missing heal or missing display?

- **Side A.** "Paladin talent 'Ironclad' still not working. Missing 136+ Heal". — [Hardcorblade (player), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172199#p172199)
- **Side B.** "It's working, just not showing up on your advanced char sheet addon" — with a described unlearn/relearn test. — [Osmose85 (player), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172204#p172204)
- **What would settle it.** Ironclad's talent effect and whether it feeds the character-sheet healing field in 1.18.1.
- **Assessment (`unresolved`).** Unresolved (issue ISS-0029); most likely a UI/addon reporting gap, but untested in the corpus.

## CON-0071 — Warrior One-Handed Weapon Specialization: abilities or auto-attacks only?

- **Side A.** The talent only increases auto-attack damage, not ability damage — reported as "still not working as intended". — [Eyeburn (player), 2026-02-24](https://forum.turtlecraft.gg/viewtopic.php?p=169310#p169310)
- **Side B.** The tooltip only promises one-handed weapon damage, so the behaviour may match the text. — [Magicknight (player), 2026-02-24](https://forum.turtlecraft.gg/viewtopic.php?p=169327#p169327)
- **What would settle it.** The talent's spell modifier mask in 1.18.1: which spell families it applies to.
- **Assessment (`unresolved`).** Unresolved after a 36-post thread with no staff statement (ISS-0025).

## CON-0072 — Thunderfury: does the chain hit damage secondary targets?

- **Side A.** On Turtle the proc damages the main target only; the jumps apply the debuff. — [Atreidon (player), 2025-10-24](https://forum.turtlecraft.gg/viewtopic.php?p=156891#p156891)
- **Side B.** Contested in the same thread; no staff statement exists either way. — [Atreidon (player), 2025-10-24](https://forum.turtlecraft.gg/viewtopic.php?p=156891#p156891)
- **What would settle it.** Thunderfury's proc spell effects in 1.18.1 spell data.
- **Assessment (`player-consensus`).** Player consensus only (ISS-0114). Treat as intended Turtle behaviour until the spell data says otherwise.

## CON-0073 — Holy Strike healing behaviour after the March 2026 fixes

- **Side A.** It heals full-health targets and the party only. — [Andant (player), 2026-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=172826#p172826)
- **Side B.** It heals the closest four targets, not strictly the party. — [Eroh (player), 2026-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=174397#p174397)
- **What would settle it.** Holy Strike's heal effect target selection in 1.18.1; the hotfix says "no longer heals more targets than intended" without stating the intended count.
- **Assessment (`unresolved`).** Unresolved — the intended target count is undocumented (ISS-0027).

## CON-0074 — Shaman Tier 1 set bonus with Chain Heal: intended or broken?

- **Side A.** "That interaction is intended. As was said by a green name." — [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166084#p166084)
- **Side B.** A player still calls Chain Heal "broken" three weeks later in the itemization thread. — [Roninm (player), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168341#p168341)
- **What would settle it.** Shaman T1 set-bonus spell and its Chain Heal interaction in 1.18.1 data.
- **Assessment (`staff-intended`).** Staff intent outranks the player claim: reproduce the interaction, do not 'fix' it (ISS-0111).

## CON-0075 — Queued next-melee abilities cancelled by rage loss

- **Side A.** Change: queued next-melee abilities are interrupted if power drops below their cost after queueing. — [Torta (staff), 2025-11-25](https://forum.turtlecraft.gg/viewtopic.php?p=160700#p160700)
- **Side B.** "This is a pretty bad change that I don't see any upside to" — including the Clearcasting case where the queued ability would cost 0. — [Elesion (player), 2025-11-26](https://forum.turtlecraft.gg/viewtopic.php?p=160845#p160845)
- **What would settle it.** Whether the queue check re-evaluates cost modifiers (Clearcasting / Omen of Clarity) at release time.
- **Assessment (`staff-intended-with-open-edge-case`).** The design is staff-intended; the Clearcasting interaction is a plausible bug inside it and was never answered.

