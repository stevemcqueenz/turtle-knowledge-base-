# Priest playbooks (Turtle WoW, written 2026-09 from forum f44-priest + staff changelogs)

Follows `synthesis/CONVENTIONS.md`. Every claim is cited to a forum post (`viewtopic.php?p=<id>#p<id>`), a wiki page, or a staff changelog. Machine-readable twins live in `structured/classes/priest/`.

## Files written

| File | Content | Source quality |
|---|---|---|
| `holy-healer.md` / `structured/.../holy-healer.yaml` | Holy raid/dungeon healer: 1.18.1 change table, reconstructed 17/34/0 build, triage priority with downrank thresholds, PW:S/rage rule, gear list (pre-raid BiS), enchants, consumables | **strong** for rotation/gear/consumables (Langorn guide + 10 corroborating posts); **medium** for talents (pre-1.18.1 shape; per-talent split only in images; 1.18.1 capstone/row-5 unverified by players) |
| `shadow-ranged-dps.md` / `shadow-ranged-dps.yaml` | Shadow PvE: 1.18.1 table (Shadow Weaving self-buff, Imp Fade, Blackout/Imp MB rows), reconstructed 36/15/0 build + Holy variant, rotation, threat rules, hit cap, sets, consumables, caster-tank niche | **medium**: rotation/stats consensus across 2019-2025; talent allocation reconstructed (no decoded post-CC2 string); 2019 guide is vanilla-era |
| `discipline-ranged-dps.md` / `discipline-ranged-dps.yaml` | Smite PvE: full mechanics table (staff), Langorn's complete 31/13/7 build (the only enumerated Disc build), rotation, hit requirement, sets | **medium**: single enumerated build; rotation from staff mechanics + 4 players; viability contested |
| `shadow-pvp.md` / `shadow-pvp.yaml` | Shadow BG/duel: power timeline (pre-CC2 → CC2 → 1.18.0 → 1.18.1), reconstructed 40/11 build, sequence, stat rules (3% hit, stamina), race notes | **medium**: many posts but opinion-heavy; builds are opaque links |
| `discipline-pvp.md` / `discipline-pvp.yaml` | Smite PvP (Chastise → Holy Fire → instant Smite), ally-Chastise CC break, stamina gearing; healer-in-BG variant | **medium** for Smite; **weak** for the healer variant (2 posts) |
| `leveling.md` | Spec choice, wands/Spirit Tap consensus, Langorn's level-by-level Disc build (10-60), Shadow and HC orders, Aykhanchik's pre-CC2 hybrid, Night Elf Starshards build, kill rotations, training list, stats, professions/gold, hardcore, full racial table incl. Tauren (1.18.1) | **strong** for Disc order and wand rules; **medium** for Shadow order; **weak** for route/zones and skipped ranks |

## Spec × role coverage

| Spec | Healer | Ranged DPS | PvP | Tank | Melee DPS |
|---|---|---|---|---|---|
| Holy | strong (`holy-healer.md`) | n/a (Holy DPS = Discipline/Smite) | weak (healer variant inside `discipline-pvp.md`) | none | none |
| Discipline | covered as the healer's secondary tree; no "Disc healer" archetype exists post-CC2 ("useless for healing" — Sanwen 2024-11-07) | medium (`discipline-ranged-dps.md`) | medium (`discipline-pvp.md`) | none | **none** — "monk"/melee Disc is a suggestion thread only (t=4909, t=13309, t=6241); melee weaving documented as a leveling technique in `leveling.md` |
| Shadow | n/a (VE off-healing described in `shadow-ranged-dps.md`) | medium (`shadow-ranged-dps.md`) | medium (`shadow-pvp.md`) | **weak/niche** — Twin Emperors / "a lot of bosses" caster-tanking mentioned by two players (Drubarrymooer 2025-06-02, Mcpewpew 2024-05-09); no build, gear or rotation given → documented as a section, not a playbook | none |
| Night Elf "Starshards" | — | niche solo (in `leveling.md`) | mentioned (`discipline-pvp.md`) | — | — |

Authority notes: no staff post gives builds or rotations; staff sources are the class-change and itemization changelogs (Dragunovi 2024-10-12, Jamey 2024-10-21 / 2024-11-20 / 2024-12-20 / 2025-07-25 / 2026-01-23 with 2026-01-26 and 2026-03-19 revisions, Torta 2025-03-30 / 2025-10-03 / 2026-03-21 / 2026-03-24, Dragunovi 2024-10-30 / 2026-02-15). "Guide writer" is applied to Langorn (t=21979, only Turtle Holy guide), Aykhanchik (t=2484, 52 posts, repeatedly requested for updates) and Jcarrill0 (t=398, 2019). The `thanked_by` field in `structured/forum/posts/f44.jsonl` is empty for every post, so thanks counts could not be used.

## 1.18.1 impact summary (Priest)

Released 2026-03-20; announced 2026-01-23 with revisions 2026-01-26 and 2026-03-19 (all [Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)): heal base values raised (Heal R4, Greater Heal R1-5, Flash Heal R3-7); Pain Spike 30 s CD; Fade −15% total threat; Prayer of Healing targets any party; Lightwell → passive one-rank 5-min "Splendor of Light" (20%/26.6-40% echo); Searing Light 60% mana reduction; Reservoir of Light reworked; Spirit of Redemption 10% Spirit; new Book of Prayer; Swift Recovery → Empowered Recovery (+3/3 s Renew after revision); Proclaim Champion & co removed → Ascendance capstone; Improved Fade reworked (+CD −3/6 s); Improved Mana Burn row 4; Shadow Reach 2 pts; Shadow Weaving self-buff; Blackout ↔ Improved Mind Blast swap then Blackout to row 2; Spirit Tap on Mind Blast crits; Holy Nova −~15% mana. Plus: Darkness fix (Torta 2025-10-03), Tauren Priest (Torta 2025-10-03 / 2025-10-23), Disc alternative tier sets + Shadow T2.5 + reworked Holy/Disc T2.5 bonuses ([Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272)), Lightwell Splendor targeting hotfix (Torta 2026-03-24), Tauren quest hotfixes (Torta 2026-03-21/25).

## Gaps (not covered by the sources — do not guess)

1. **No post-1.18.1 talent build for any spec.** All player builds predate 2026-03-20; the Holy capstone (Ascendance), Book of Prayer, Empowered Recovery, Improved Fade rework and the Blackout/Improved Mind Blast rows have no player evaluation. Per-talent splits of the popular 17/34/0 Holy build exist only as images.
2. **Talent-link strings** (talents.turtlecraft.gg / talent-builder.haaxor1689.dev / classicdb) could not be decoded offline; they are recorded verbatim.
3. **Tauren Priest racial spells**: Light of An'she (level 10) and Spiritwalk (level 20) — quest chain, NPCs and ids are known from the wiki, but the spells' effects, cooldowns and mana costs are not described anywhere in the extracted data (only that Light of An'she is Holy school and unusable in Shadowform — Itsbacon 2026-03-21). No Tauren-specific playstyle advice exists.
4. **1.18.1 Discipline tier sets and Shadow T2.5**: announced by staff; per-piece stats and the T1/T2/T3(.5) Disc set bonuses are not in the extracted sources. Same for T3.5 "Vestments of Pestilence" bonuses (only complaints/praise).
5. **Priest tank (caster tank)**: two anecdotes, no build/gear/threat rotation.
6. **Melee/"monk" Discipline**: suggestions only; Inner Fire no longer grants attack power (CC2), so melee-weaving guides from 2023 are partly obsolete.
7. **Leveling route** (zones/dungeons per bracket) and **which spell ranks to skip**: no priest-specific source; only "buy the listed spells".
8. **Exact spell coefficients post-1.18.1** for Smite/Holy Fire/Mind Flay are staff-stated only in relative terms (e.g. "+~5%"); no player sim or spreadsheet after 2024-12 besides Amyloriley's level-58 DPM table.
9. **PvP Dampening** values per spec (1.18.1) and arena meta after release: no data.
10. **Holy Nova / Prayer of Healing post-1.18.1 raid usage**: only one post (Ayesha) after release.
11. **Disc healer ("wotlk-style shield healer")**: requested by players (Tscosomaz), not a viable archetype per sources; not written.
12. **Benediction quest tactics**: only generic advice (consumables, Holy Nova, Disc respec); no step list.
13. Whether Mental Agility affects Starshards (Amyloriley says yes, 10%) and whether Power Word: Shield scales with healing vs spell power (players say healing) — unconfirmed by staff.
14. Hardcore forum and Help & Support forum are not in the extracted set; HC advice comes from three priest-forum posts only.

## Top open questions for a future pass
- A decoded post-1.18.1 Holy build (does anyone take Reservoir of Light / Book of Prayer?) and whether Ascendance changed tank-healing assignments.
- Real numbers for Light of An'she and Spiritwalk.
- Disc tier set bonuses (T1/T2/T3/T3.5) added in 1.18.1.
- Whether Improved Mind Blast in row 1 replaced Spirit Tap for raiding Shadow priests.
