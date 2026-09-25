# Mage guide sources

## What informed these pages

| Source | Era | Used for |
|---|---|---|
| `#mage` Discord, full read 2025-10-03 → 2026-05 (1.18.1 announcement, release on 2026-03-20, and the last weeks before the EU server closure) | 1.18.1 | Primary source for every page: builds, rotations, caps, gear, tactics |
| `#mage` Discord highlights 2021-10 → 2025-10 | CC2 rework (1.17.2) → 1.18.0 | Patch history, Ignite/Rupture/Blizzard changes, older talent codes, AoE spot list |
| `#pvp-general` Discord notes and the `staging/pvp-general-*` matchup dossiers | 2023 → 2025-10 (mostly before 1.18.1) | Matchups, tier lists, resilience bug |
| Forum and wiki KB (`synthesis/classes/mage/`): staff class-change posts (Dragunovi, Jamey, Torta), the community Mage FAQ wiki pages, player forum threads | 2023 → 2026 | Official talent/spell numbers, the 1.18.1 staff notes, wiki pre-raid lists and sims, forum leveling advice |
| Talent data (`structured/talents/mage.yaml`) and `talent_tool.py` | 1.18.1 tree | Every build and leveling order was validated against the 1.18.1 tree. Current short-form calculator links are now decodable, so posted post-1.18.0 builds were decoded directly |

## Experts relied on (and why)

- **Pepopo:** author of Nampower and of the community simulator (pepopo978/wowsim). He posts coefficient tables, server-tick and haste-cap measurements and relays dev comments, and he corrects himself when tests disagree. Arcane mechanics, Frost builds and the Fire opener.
- **Akanamu, Conqueror of Desolation:** Kara40 Arcane/Fire raider. Wrote HasteDisplay and a patched Quartz, posts logs, and gives detailed cooldown and threat advice. Arcane rotation, trinkets, Fire openers with 4 Fire mages.
- **Luden TA:** Arcane/Fire raider, a regular Twin Emperors mage tank, and author of the Frost raid build. Very active on Fire's post-1.18.1 cadence. Fire rotation, Frost build, mage tanking, leveling spec advice.
- **Aest:** top Fire parser on Nordanaar/Kara40 and widely deferred to. Fire gear, Fire vs Arcane balance, Ignite math.
- **Shared:** gear lists for Ambershire (fresh server) and the fresh-60 path; revises his own advice after tests. Pre-raid, trinkets, cloak progression.
- **Dontlookatme:** hit-table math and Arcane leveling talent order.
- **Ocra, biloen, Mondalv, Zatyg:** sim numbers (stat weights, trinket priority, T2 vs off-pieces).
- **Lightemgee, Izzo, Beta, Sellma:** frequent, mostly accurate answers on races, hit caps, haste stacking and consumables.
- **ZeroRanger, Anima:** the channel's practical mage tanks (dungeons, Naxx trash, Twin Emperors gear).
- **lowlifeopinions** (`#pvp-general`): measured PvP matchup reasoning, deferred to even by opponents.

## Gaps (what the sources do not settle)

1. **Arcane Surge haste cutoff:** 22% (sim), 25% or 30%; there is no agreed number.
2. **Arcane Rupture's GCD floor:** 58.3% (in-game test) vs ~66.6% (earlier sim).
3. **The Arcane Rupture/Surge damage drop** reported on 1.18.1 patch day was never explained.
4. **2-target AoE threshold** for Arcane and Fire: no clean number exists; 3+ targets = Arcane Explosion is convention.
5. **Frost's mana problems** were never addressed or explained. The binary Flash Freeze design has no dev response.
6. **Fire:** small haste costing DPS in the new 2-Fireball weave is sim-based and **contested**. The Fire T3.5 5-piece bug (report 18568) is unconfirmed either way. Blast Wave crit-per-target is single source.
7. **PvP:** 1.18.1 per-class dampening numbers were never published. There are no PvP-specific enchant or consumable lists, and no current matchup data for Priest. Most `#pvp-general` matchup material predates 1.18.1.
8. **Mage tanking:** no complete tank talent build or full guide was ever posted (one was promised). The tank spec exists only as "Arcane minus threat reduction and Arcane Power".
9. **Gear:** the source of the +9 Arcane "Crystallized Topaz" JC recipe is unknown. Several BiS lists are single-source screenshots. Whether Sigil of Ancient Accord's proc uses your hit against raid bosses is untested.
10. **Leveling:** the talent orders here are built from the wiki's tables plus cited Discord advice, not taken whole from one player's leveling log. There is no leveling BiS list. The AoE-spot bracket list is from before 1.18.1.
11. **Unanswered mechanics:** whether Winter's Chill crit stacks additively; whether multiple Scythe haste summons stack; whether Resonance Cascade duplicates trigger item procs (the dev comment says no, one player disputes it).
12. **Ignored:** late messages about an "Arcane Blast at level 64" rotation and "T8" refer to a different game context and were not used.
