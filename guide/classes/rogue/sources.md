# Rogue guide sources

## What informed these pages

| Source | Era | Used for |
|---|---|---|
| `#rogue` Discord, full read 2025-10-03 → 2026-05 (1.18.1 preliminary notes, the 2026-01-23 balance pass, the 2026-03-20 release with the Dissolvent/Corrosive creature-type restriction, and the weeks after) | 1.18.1 | Primary source for every page: builds, sim results, rotations, poisons, gear, tactics |
| `#rogue` Discord highlights 2024-11 → 2025-10 | Class Changes 2 (1.17.2) → 1.18.0 | Patch history (Blade Flurry toggle, Noxious Assault, Dissolvent, Ruthlessness 100%), older builds, leveling routes |
| `#pvp-general` Discord notes | 2025-10 → 2025-11 (mostly before 1.18.1) | Blind and DR mechanics, pre-patch PvP tier list |
| Forum KB (`synthesis/classes/rogue/`): the staff class-change thread (Jamey's 1.18.1 post of 2026-01-23 with its 2026-03-19 revision; Torta's 2026-03-24 hotfix) | 2024 → 2026 | Official 1.18.1 numbers (poison rank scaling, Blade Flurry penalty, Taste for Blood/Noxious/Opportunity) |
| Talent data (`structured/talents/rogue.yaml`, `builds-rogue.yaml`) and `talent_tool.py` | 1.18.1 tree | Every build and both leveling orders were validated against the 1.18.1 tree; post-1.18.1 calculator codes were decoded directly |
| Combat Gum (combatgum.app), GumGuzz's rogue simulator, released 2026-03-19 | 1.18.1 | Most post-patch spec and gear rankings on these pages are sim results posted by its users |

## Experts relied on (and why)

- **Nandieb:** the channel's most active sim user after the patch. He ran hundreds of Combat Gum comparisons, reported the #1 overall BWL parse with a 24/27/0 swords build, and is vouched for by others ("Nandieb knows his sims"). Combat Envenom build, "rogue law #1", gear rankings, trinkets.
- **Rheinwg:** keeps the pinned leveling/build guide (Google Doc) and wrote the per-raid poison-immunity guide the whole channel uses. Consistent, widely deferred to, corrects others. Poisons, Subtlety, leveling, mechanics.
- **GumGuzz:** author of Combat Gum; extensive in-game proc testing (Servo Arm, dodge/parry refund, Crusader, weapon skill crit). Mechanics, stat rules.
- **Epickalen:** detailed, formula-level answers (energy tick, hit/crit tables, stat weights); a go-to for new players.
- **Zaszz, Vegybird, two raccoons, Nuian, Yoridzen:** practicing Subtlety raiders; the support rotation and group placement.
- **Nettlefield, Scruff, Suade:** practicing rogue tanks (avoidance numbers, gear, the Agitating Poison campaign).
- **Rhaena, Nuian, Kananaios:** Ambershire raiders who posted cross-checking sims and logs.
- **Suade, Zaszz, riku, Ionnatra, Blindtongue:** PvP builds, sequences and matchups.
- **Premium (Retired), Heffey, Treehide/Verrik:** long-time Nordanaar raiders; late-game Combat dagger gear and pre-patch context.

## Gaps (what the sources do not settle)

1. **Combat Envenom vs Adrenaline Rush at Naxx/Kara40.** The sim favors Envenom everywhere; one experienced raider sees AR ahead on fast kills and cleave fights. No logs settle it.
2. **Instant vs Instant + Deadly for Envenom builds.** Rheinwg's rule says double Instant; a dummy test and later edits favor Deadly in the off hand. Deadly IV's shared-debuff bug makes it murkier.
3. **The deep-Assassination build.** Few full Noxious Assault builds were posted after 2026-03-20, because the channel moved to Combat Envenom. The 41/10/0 on the Assassination page is assembled from sourced rules (drop Taste for Blood, keep the Eviscerate package and poison talents), not copied from one post.
4. **Gothik's poison type:** Rheinwg's guide says "Dissolvent only", which clashes with Instant working on non-nature-immune Undead. Untested in the sources.
5. **Taste for Blood and Shadow of Death:** whether Taste for Blood still boosts Shadow of Death, and exactly how Shadow of Death scales, is unconfirmed.
6. **Deadly Poison IV** stacking bugs (between rogues, and IV with V) were reported as fixed and unfixed in the same weeks.
7. **Rogue class weapon** (Timbermaw questline, a matched pair of swords): the questline steps are known, the item stats are not.
8. **Spell-rank training:** no source says which ranks to skip while leveling.
9. **Fortune:** confirmed to multiply item proc chances; whether it touches T2 or Veiled Shadows poison-proc bonuses is disputed.
10. **Post-patch PvP numbers:** burst reports ("halved") and denials both exist; there are no controlled tests.
11. **Rogue tank:** the build is pre-release (2026-02-12) and valid on the 1.18.1 tree, but no post-release tank build or gear sheet was posted.
12. **Crusader vs Agility** for Combat Envenom off hands, and **AP vs Agility** enchants on short fights, rest on single sims or tests.
