# Contradictions — Patch history, names and attribution (wiki vs forum, announcement vs release)

Part of [`../contradictions.md`](../contradictions.md); machine-readable copy in [`../../structured/contradictions.yaml`](../../structured/contradictions.yaml). Conventions: [`../CONVENTIONS.md`](../CONVENTIONS.md). Dates UTC.

9 entries. Each gives both sides with author, authority and date, what evidence would settle it, and the current best assessment.

## CON-0014 — Contents of patch 1.15.0: wiki vs forum

- **Side A.** Gnome Hunter, Orc Mage, Stormwind Vault, 2v2 arena and gambling are listed under patch 1.15.0. — community wiki, Patch 1.15.0 (community wiki) — `extracted/wiki/articles/Patch_1.15.0.md`
- **Side B.** The 1.15.0 forum announcement lists none of Gnome Hunter / Orc Mage; Blood Ring 2v2 and Stormwind Vault are announced with 1.16.0. — [Torta (staff), 2020-10-04](https://forum.turtlecraft.gg/viewtopic.php?p=7948#p7948), [Torta (staff), 2021-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=14049#p14049)
- **What would settle it.** Check when the race/class combination rows and the Stormwind Vault map entry first appear in the client DBCs / server map table.
- **Assessment (`wiki-vs-staff`).** Forum treated as authoritative in this knowledge base; the wiki entries are flagged. Unresolved as to why the wiki differs.

## CON-0015 — Stormwind Vault patch attribution (1.15.0 vs 1.16.0)

- **Side A.** The wiki elsewhere attributes Stormwind Vault to patch 1.15.0. — [Custom Turtle WoW content (community wiki)](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content)
- **Side B.** The staff changelog and the wiki's own patch-changes section both say 1.16.0. — [Torta (staff), 2021-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=14049#p14049)
- **What would settle it.** First appearance of the instance map id in client MPQ/DBC data by build.
- **Assessment (`wiki-vs-staff`).** 1.16.0 is the better-supported date (staff post plus the wiki's own patch section).

## CON-0016 — Paladin 31-point Protection capstone name

- **Side A.** The capstone is "Bulwark of the Righteous". — [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102969#p102969)
- **Side B.** The first balance update calls it "Shield of the Righteous". — [Jamey (staff), 2024-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=104207#p104207)
- **What would settle it.** Spell name for the 31-point Protection talent in 1.18.1 Spell.dbc / talent data.
- **Assessment (`superseded`).** Later name wins (rename), but the exact rename date is not stated in any source.

## CON-0017 — Rogue capstone: "Exploit Vulnerability" vs "Mark for Death"

- **Side A.** The class-changes post names the rogue capstone "Exploit Vulnerability". — [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102969#p102969)
- **Side B.** The 1.18.0 class update names "Mark for Death". — [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159)
- **What would settle it.** Talent tree data for Rogue in 1.18.1: is it one renamed talent or two different ones?
- **Assessment (`unresolved`).** Unresolved whether renamed or replaced.

## CON-0018 — Tower of Karazhan realm-first title

- **Side A.** The realm-first title is "Warden of the Ley Lines". — [Torta (staff), 2023-12-28](https://forum.turtlecraft.gg/viewtopic.php?p=82980#p82980)
- **Side B.** The later (edited) announcement gives "Conqueror of Desolation". — [Torta (staff), 2025-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=120590#p120590)
- **What would settle it.** Title entries in CharTitles.dbc for the 1.18.1 client.
- **Assessment (`superseded`).** Later post wins; the earlier title may never have shipped.

## CON-0019 — Patch 1.15.1 release date

- **Side A.** Staff post of 2021-03-11 announces the 1.15.1 client update for Monday, March 15 (10:00 server time). — [Torta (staff), 2021-03-11](https://forum.turtlecraft.gg/viewtopic.php?p=9734#p9734)
- **Side B.** The wiki dates 1.15.1 to 2021-03-11. — community wiki, Patch 1.15.1 (community wiki) — `extracted/wiki/articles/Patch_1.15.1.md`
- **What would settle it.** Client build number and its file dates.
- **Assessment (`reconciled`).** Treated as 2021-03-11..15 in the timeline: announcement date vs roll-out date.

## CON-0020 — Date of patch 1.17.2 ("November 1 2023")

- **Side A.** A 2025 staff post writes "November 1 2023 in patch 1.17.2". — [Torta (staff), 2025-12-04](https://forum.turtlecraft.gg/viewtopic.php?p=161485#p161485)
- **Side B.** 1.17.2 was announced for release on 2024-11-01. — [Torta (staff), 2024-10-27](https://forum.turtlecraft.gg/viewtopic.php?p=104997#p104997)
- **What would settle it.** Build dates on the local server files.
- **Assessment (`reconciled`).** Treated as a typo for 2024; the 2024 announcement wins.

## CON-0021 — Moon's 2021 class draft vs the 1.16.1 release changelog (Bloodlust values)

- **Side A.** Draft class post: "New Talent: Bloodlust (Row 7) ... Rank 1 (Talent): 10% Rank 2 (Level 60): 15%". The author is indexed as a player but writes as the team. — [Moon (player), 2021-11-06](https://forum.turtlecraft.gg/viewtopic.php?p=13458#p13458)
- **Side B.** The 1.16.1 release post carries the same paragraph with different numbers: "Rank 1 (Talent): 15% Rank 2 (Level 60): 20%". — [Torta (staff), 2022-07-24](https://forum.turtlecraft.gg/viewtopic.php?p=20251#p20251)
- **What would settle it.** Bloodlust rank values in the 1.18.1 spell data (only shows the end state, not the 2021 draft).
- **Assessment (`resolved-by-release`).** The release changelog is taken as truth; the draft is cited only where the release does not restate an item. A worked example of why player-written team drafts must not be quoted as official values.

## CON-0022 — Shaman Bloodlust: two incompatible talent descriptions across patches

- **Side A.** 1.16.1 wording: a party-member buff increasing melee, ranged and casting speed by 15/20% for 15 seconds. — [Torta (staff), 2022-07-24](https://forum.turtlecraft.gg/viewtopic.php?p=20251#p20251)
- **Side B.** 1.17.2-era wording: attack and casting speed granted to party members on critical strike raised from 5% to 8%, duration 5 to 6 seconds, caster bonus 15% to 20% — a different mechanic, not a rewording. — [Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504)
- **What would settle it.** Bloodlust spell/talent effects in 1.18.1 spell data; also note the 2025-04-01 hotfix "Fixed incorrect values for Shaman's Bloodlust".
- **Assessment (`superseded`).** Not a contradiction but a redesign: the later description supersedes. Listed because the older wording is still quoted in guides.

