# Contradictions — Items and itemization

Part of [`../contradictions.md`](../contradictions.md); machine-readable copy in [`../../structured/contradictions.yaml`](../../structured/contradictions.yaml). Conventions: [`../CONVENTIONS.md`](../CONVENTIONS.md). Dates UTC.

3 entries. Each gives both sides with author, authority and date, what evidence would settle it, and the current best assessment.

## CON-0088 — Rogue Tier 3.5 five-piece proc rate (15% measured vs 20% stated)

- **Side A.** The set bonus states 20%. — [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272)
- **Side B.** A player measures ~15% over a long sample and asks whether it is a stealth nerf or a bug; no staff reply. — [Hcyd (player), 2026-03-26](https://forum.turtlecraft.gg/viewtopic.php?p=172499#p172499)
- **What would settle it.** Proc chance field on the rogue T3.5 5-piece bonus spell in 1.18.1.
- **Assessment (`unresolved`).** Unresolved (ISS-0052); a single field settles it.

## CON-0089 — "Lionheart Helmet" in the 1.18.0 itemization post is not the warrior helm

- **Side A.** The 1.18.0 itemization changelog lists a Lionheart Helmet stamina change, read by players as the classic warrior craft. — [Dragunovi (staff), 2025-06-30](https://forum.turtlecraft.gg/viewtopic.php?p=137624#p137624)
- **Side B.** In context the entry belongs to the Paladin T3.5 set, not the vanilla warrior helm. — synthesis/classes/warrior/README.md (community wiki) — `synthesis/classes/warrior/README.md`
- **What would settle it.** Item ids: look up both names in the 1.18.1 item table.
- **Assessment (`naming-collision`).** A naming collision, not a source conflict, but it has already produced wrong guide advice. Check the id before quoting.

## CON-0090 — Steel belt buckle enchant not shown on the item

- **Side A.** A player reports the enchant is applied but appears neither on the item nor in the stat sheet. — [Zero37 (player), 2025-12-12](https://forum.turtlecraft.gg/viewtopic.php?p=162542#p162542)
- **Side B.** No staff reply; the reporter plays on the SEA realm with a Chinese client, so a localization/display cause is possible. — structured/issues.yaml ISS-0055 (community wiki) — `structured/issues.yaml`
- **What would settle it.** Whether the belt-buckle enchant writes a visible enchantment slot in 1.18.1, and whether the stat applies.
- **Assessment (`unresolved`).** Unresolved (ISS-0055); likely a display issue, untested.

