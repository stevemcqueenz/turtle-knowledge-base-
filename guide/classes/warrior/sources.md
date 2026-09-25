# Warrior guide sources

## What informed these pages

| Source | Era | Used for |
|---|---|---|
| `#warrior` Discord, full read (about 414k messages, 2021-02 → 2026-05), read by topic with emphasis on 2025-10-03 → 2026-05 | CC2 (1.17.2) → 1.18.0 → 1.18.1 preliminary notes (2025-10-03) → January 2026 hotfixes → release (2026-03-20) → April 2026 fixes | Primary source for every page: builds, rotations, threat math, caps, gear, raid notes, PvP |
| `#pvp-general` Discord notes | 2023 → 2025-10 (mostly before 1.18.1) | Matchups (hunter, shaman, priest, paladin), battleground roles, tier lists |
| Forum staff posts: Jamey's 2026-01-23 class changelog, and Torta's 2026-03-21 Flurry/Slam and 2026-03-24 Shield Block hotfixes | 1.18.1 | Official numbers for Defiance, Shield Slam, Hamstring, Flurry and Slam |
| Forum and wiki KB (`synthesis/classes/warrior/`, `structured/classes/warrior/`) | 2023 → 2026 | Cross-checking older rotations and consumables; kept as the forum sources in the YAML |
| Talent data and `talent_tool.py` | 1.18.1 tree | Every build and leveling order was decoded or built and validated against the 1.18.1 tree. Calculator links use the xian55 viewer, because the `talents.turtlecraft.gg` links posted in the channel are offline |

Anything from before the 1.18.1 release is shown only as history or where nothing contradicts it. The 2026-01-15 "Bard spec" developer statement in `#warrior` is a joke and was ignored.

## Experts relied on (and why)

- **30:** runs his own warrior DPS/threat sim and posts rage-economy, hit-table and threat math that others defer to. Hit and weapon-skill caps, race sims, the 316-skill crit bug, Shieldrender, 2H vs DW.
- **Lipibidy:** detailed haste, weapon-speed and Deep Wounds theorycraft, and the "5 DPS builds" list. Consistently accurate on Fury and DefTac.
- **Velanir:** hit-table and itemization answers, a Troll/Human threat sim, and pre-release DeathTactics and DefTac analysis. Frequently deferred to.
- **Dodging, Black Hat, Weirdthing, Tole:** the tank core. They covered DefTac vs FuryProt, stance threat math, avoidance and defense trade-offs, and post-release MT specs (Weirdthing's "99.9%" DefTac verdict, Tole's Death Wish Prot).
- **Guts, Shardphoenix, Thirtyseven:** Arms/Fury raid-performance comparisons, the Guts Arms builds and race list, and Thirtyseven's PvP gear, cost and matchup numbers.
- **Kyrsie, Hayden, casey:** PvP builds and practice (Kara-geared solo PvP, Blood Drinker, Arms PvP build review).
- **VeganCourage, Virasan, Doite:** leveling advice. Virasan's pinned Arms leveling order is used verbatim.
- **Don't ping me, JohnGood:** macros and addons (SuperCleveRoidMacros, BattleStat), plus accurate patch-note transcriptions.
- **Spiff, dindunuffinz, Bipst** (`#pvp-general`): warrior matchup advice from both sides of the fight.

## Gaps (what the sources do not settle)

1. **2H vs DW Fury:** 2H leads on most fights by consensus, but DW holds server records. No sim set comparable gear and skill side by side after the release.
2. **Deathcute's real value:** its Execute numbers include large overkill. No one posted a log comparing it with MS Arms over a full raid.
3. **DefTac stat priority** (Strength vs Agility/crit) and whether 440 defense is necessary were argued for months without a numeric resolution.
4. **Glancing-blow penalty:** Turtle's exact glancing formula is not public. The 65% → 95% scaling comes from community tests with small samples.
5. **Rend:** whether the April 2026 change made it scale with AP is disputed within the channel.
6. **Tactical Mastery:** whether it was quietly nerfed to keep rage only on some stance swaps is reported but unconfirmed.
7. **Bloodthirst's flat damage** (100 vs 200 plus 35% AP) is disputed, and so is the value of **Blood Craze** in raids.
8. **AoE thresholds:** the target counts where Whirlwind/Cleave overtake the single-target priority, and where DefTac loses AoE threat, are rules of thumb, not measured numbers.
9. **PvP:** no complete 2H Fury PvP code was posted for 1.18.1, and per-class dampening numbers were never published. Most `#pvp-general` matchup material predates 1.18.1.
10. **Leveling:** the DW Fury leveling order is built from several players' advice and validated with the tool. It is not one player's log. The Arms order is Virasan's pinned order.
11. **Kara40/Naxx tanking:** boss-specific tank notes are scattered and often single-source. Treat them as tips, not strategies.
