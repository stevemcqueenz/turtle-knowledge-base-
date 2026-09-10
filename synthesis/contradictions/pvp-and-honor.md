# Contradictions — PvP and honor

Part of [`../contradictions.md`](../contradictions.md); machine-readable copy in [`../../structured/contradictions.yaml`](../../structured/contradictions.yaml). Conventions: [`../CONVENTIONS.md`](../CONVENTIONS.md). Dates UTC.

8 entries. Each gives both sides with author, authority and date, what evidence would settle it, and the current best assessment.

## CON-0076 — Honor cut to 10%: "purely a visual change" vs player compensation reports

- **Side A.** "As some Players were gaining hundreds of thousands of Honor a week the above change is simply to keep numbers in line and purely a visual change" — costs were rescaled to match. — [Jamey (staff), 2026-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=169701#p169701)
- **Side B.** Players report the one-time bonus as inadequate (R10 ~30k, R13 ~60k, R14 ~98k) against set prices of T1 ~5-6k and T2 ~22k per piece, and entry weapons raised by ~10k honor without a note. — [Gnomeoperative (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=171910#p171910), [amanagor (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=171915#p171915), [Saronsen (player), 2026-03-29](https://forum.turtlecraft.gg/viewtopic.php?p=172996#p172996)
- **What would settle it.** Vendor prices and honor award values in the 1.18.1 data, compared against the pre-patch values.
- **Assessment (`unresolved`).** Both can be true: the ratio may be preserved while the one-time conversion is not. Unresolved in the corpus; all player numbers are unconfirmed.

## CON-0077 — World PvP events and PvP vendors: did they go live?

- **Side A.** Gear vendors, Conquest Points, Redwall Keep and Southshore vs Tarren Mill events were "set to go live shortly after the release". — [Jamey (staff), 2026-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=169701#p169701)
- **Side B.** Players report the vendor missing on release day and are still asking for the world events on 2026-04-15. — [Bootwin (player), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171626#p171626), [amanagor (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173504#p173504), [Gramrock (player), 2026-04-15](https://forum.turtlecraft.gg/viewtopic.php?p=175348#p175348)
- **What would settle it.** Presence of the event scripts/NPCs and the PvP vendor inventories in the 1.18.1 world data.
- **Assessment (`unresolved`).** Unresolved: no staff post confirms a go-live date. The vendors appear to have arrived days after release; the world events may never have shipped.

## CON-0078 — Rank decay cannot drop a rank vs Rank 14 players dropped to rank 0

- **Side A.** Documented design: rating points decay weekly but cannot drop a player a rank. — [Akalix (staff), 2023-10-01](https://forum.turtlecraft.gg/viewtopic.php?p=67818#p67818), [Jamey (staff), 2026-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=169701#p169701)
- **Side B.** Post-1.18.1 players report losing the rank and title outright: rank shows 0 while "highest rank" is still listed; others report being de-ranked "for no reason". — [Darkconfidant (player), 2026-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=173113#p173113), [Xerony (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173497#p173497), [Leilar (player), 2026-04-18](https://forum.turtlecraft.gg/viewtopic.php?p=175607#p175607)
- **What would settle it.** The weekly flush routine: does it clamp to the rank minimum, and how are legacy ranks migrated to the new system?
- **Assessment (`unresolved`).** Contradicts the documented design (ISS-0084); most likely a migration bug at the old-to-new honor system switch. Unresolved.

## CON-0079 — Weekly honor decay: documented decay vs "the bar shrinks the more I play"

- **Side A.** A player reports the honor bar shrinking the more battlegrounds are played, over more than a week of heavy play. — [Debelijajcevod (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173655#p173655)
- **Side B.** Another player explains that ~30% of the bar is lost on Wednesdays, i.e. the documented weekly decay. — [Mdzielak (player), 2026-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=173116#p173116)
- **What would settle it.** Decay percentage and its trigger in the 1.18.1 honor code.
- **Assessment (`unresolved`).** Partly explained by the documented decay; the reporter insists it continues beyond it (ISS-0086). Unresolved.

## CON-0080 — Dishonorable Kills: removed, re-enabled, still disabled

- **Side A.** DHKs removed "pending a larger scale rework" (2023-12-10); two days later "Dishonorable kills will now be given for killing players that are grey to you". — [Akalix (staff), 2023-12-10](https://forum.turtlecraft.gg/viewtopic.php?p=80586#p80586), [Torta (staff), 2023-12-12](https://forum.turtlecraft.gg/viewtopic.php?p=80839#p80839)
- **Side B.** "The DHKs are still disabled" (2024-01-16). — [Akalix (staff), 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84944#p84944)
- **What would settle it.** Is dishonorable-kill handling enabled in the 1.18.1 PvP code, and does killing a grey-level player award one?
- **Assessment (`unresolved`).** Contested between three staff posts inside five weeks; the state as of 1.18.x is unknown from this corpus.

## CON-0081 — Are battleground terrain exploits fixed or tolerated?

- **Side A.** Players report the Warsong Gulch roof/graveyard jumps and an Alterac Valley backdoor as still abused: "Still abused, still not fixed... bump!" — [Zvyrhol (player), 2026-01-24](https://forum.turtlecraft.gg/viewtopic.php?p=166328#p166328)
- **Side B.** The same players doubt the patch notes: "Don't believe in everything devs say on forum. Some patch notes say that Sunnyglade Valley gives 3x or 1x marks after each game ends even though it's not true." — [Zvyrhol (player), 2025-12-10](https://forum.turtlecraft.gg/viewtopic.php?p=162323#p162323)
- **What would settle it.** Collision/terrain data at the named Warsong Gulch spots and the AV entrance, plus the Sunnyglade Valley mark reward values.
- **Assessment (`unresolved`).** Unresolved; no staff reply in the extraction. The mark-reward claim is a direct, checkable accusation that a patch note does not match the server.

## CON-0082 — PvP dampening: announced per class/spec but never published

- **Side A.** Class-dependent dampening is described as a design tool; numbers promised "at a later date". — [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), [Jamey (staff), 2026-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=169701#p169701)
- **Side B.** Players report effects they cannot verify — e.g. "BM pets aren't affected by dampening" — with no published values to check against. — [M0thra (player), 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171435#p171435)
- **What would settle it.** The dampening table itself in 1.18.1 server data, per class and spec, and whether pet damage is included.
- **Assessment (`unresolved`).** Unresolved by definition: the corpus contains no numbers. The single highest-value item to dump from local data.

## CON-0083 — New PvP sets: power level

- **Side A.** The itemization changelog presents the 1.18.1 PvP sets as the new rank reward tier. — [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272)
- **Side B.** Players call the sets "utter garbage compared to PVE gear sets" and report the warlock set losing 10% Soul Link and having low armor. — [Moomoobro (player), 2026-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=172842#p172842), [Brandwacht (player), 2026-04-02](https://forum.turtlecraft.gg/viewtopic.php?p=173737#p173737)
- **What would settle it.** Compare PvP set item levels/bonuses with the equivalent PvE tier pieces in 1.18.1 item data.
- **Assessment (`design-dispute`).** A value judgement over verifiable stats: the stats are checkable, the conclusion is not.

