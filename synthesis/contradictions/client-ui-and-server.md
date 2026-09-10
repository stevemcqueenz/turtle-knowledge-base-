# Contradictions — Client, UI and server

Part of [`../contradictions.md`](../contradictions.md); machine-readable copy in [`../../structured/contradictions.yaml`](../../structured/contradictions.yaml). Conventions: [`../CONVENTIONS.md`](../CONVENTIONS.md). Dates UTC.

5 entries. Each gives both sides with author, authority and date, what evidence would settle it, and the current best assessment.

## CON-0097 — Server time: fixed on 2025-12-24 or still wrong?

- **Side A.** "Server time will now be consistent for all players (except on Kalimdor where it is offset by 12 hours) and won't change when you relog". — [Torta (staff), 2025-12-23](https://forum.turtlecraft.gg/viewtopic.php?p=163576#p163576)
- **Side B.** Two days later: "Even after the December 24 maintenance, which claimed that the server time had been fixed, it's still not working as intended. Even the cycles are out of whack". — [Lirithiel (player), 2025-12-25](https://forum.turtlecraft.gg/viewtopic.php?p=163713#p163713)
- **What would settle it.** Time source and the per-continent offset in the 1.18.1 server; check the day/night cycle driver separately from the clock.
- **Assessment (`unresolved`).** Unresolved; the deliberate 12-hour Kalimdor offset makes player reports hard to read, which is itself part of the problem.

## CON-0098 — In-game clock running at double speed: intended or a bug?

- **Side A.** A player relays that his tracker report was closed as an intentional change; only the per-player divergence was called a bug. — [Pizzayo (player), 2025-12-19](https://forum.turtlecraft.gg/viewtopic.php?p=163303#p163303)
- **Side B.** No staff forum post says so; players continued to report the doubled cycle as broken. — [Lirithiel (player), 2025-12-25](https://forum.turtlecraft.gg/viewtopic.php?p=163713#p163713)
- **What would settle it.** Game-time multiplier constant on the 1.18.1 server.
- **Assessment (`player-relayed`).** Player-relayed staff intent only (ISS-0109). Treat the double-speed clock as intended and the per-player divergence as the defect.

## CON-0099 — Gadgetzan / Slickwick Oil Rig flight path: fixed or still broken?

- **Side A.** Fix listed 2025-11-25; challenged a week later, staff answered "This was fixed two weeks ago, are you sure it's still broken?" — [Torta (staff), 2025-11-25](https://forum.turtlecraft.gg/viewtopic.php?p=160700#p160700), [Torta (staff), 2025-12-03](https://forum.turtlecraft.gg/viewtopic.php?p=161457#p161457)
- **Side B.** A player confirms that route is fixed but reports another one still clipping: Freewind Post to Camp Mojache "still bumps and clips into the new Night Elf buildings at Camp E'thok". — [Sagabal (player), 2025-12-06](https://forum.turtlecraft.gg/viewtopic.php?p=161776#p161776)
- **What would settle it.** Taxi path node heights for both routes in 1.18.1.
- **Assessment (`partly-resolved`).** Resolved for the reported route, open for a neighbouring one — a good example of a fix line that does not cover every case.

## CON-0100 — Missing or "DEPRECATED" talents and spells: server or client?

- **Side A.** Players report talents and spells appearing missing or marked DEPRECATED after the 1.18.1 client update. — [Evadeluxe (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=172007#p172007)
- **Side B.** "Talents and spells that appear missing or 'DEPRECATED' come from custom files in the client /data folder, not from the server". — [Pepesmite (staff), 2026-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=171762#p171762)
- **What would settle it.** Compare a clean 1.18.1 client (no custom /data, no addons) against a modified one; the server-side talent list is authoritative.
- **Assessment (`staff-explained`).** Staff explanation is the better-supported side (ISS-0116); retest client-side reports on a clean client before treating them as server defects.

## CON-0101 — Troll priest Shadowguard visible through walls

- **Side A.** "The Troll Priest Shadowguard effect is still visible through walls and terrain... This bug was reported over a year ago, but it's still not fixed" (tracker id 10302). — [Raroro (player), 2026-01-17](https://forum.turtlecraft.gg/viewtopic.php?p=165479#p165479)
- **Side B.** An older staff changelog shows Shadowguard being worked on ("Shadowguard can now proc when spell damage is absorbed"), but nothing addresses the visual; the referenced tracker content is not part of this corpus. — [Torta (staff), 2022-09-11](https://forum.turtlecraft.gg/viewtopic.php?p=24828#p24828)
- **What would settle it.** Visibility/attenuation flags on the Shadowguard visual in the client's spell visual data.
- **Assessment (`unresolved`).** Unresolved; client-side visual, and the bug tracker (the real status source) is outside this extraction.

