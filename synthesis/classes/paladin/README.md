# Paladin playbooks — index

Written 2026-09-10 from the Paladin forum (f=41, 307 threads / 3,091 posts, extraction ends 2026-04-06), the staff class-change thread (t=15157), the 1.18.1 patch thread (t=22214), `synthesis/1.18.1-master-changelog.md`, `synthesis/turtle-vs-vanilla-timeline.md`, `structured/patches/1.18.1-changes.yaml`, and the community wiki (Paladin, Paladin Macros). Conventions: `synthesis/CONVENTIONS.md`.

## Files

| File | Content | Source quality |
|---|---|---|
| `protection-tank.md` / `structured/classes/paladin/protection-tank.yaml` | sword-and-board tank for dungeons, raids and solo AoE farming | **strong** on rotation/pulling/mana (three write-ups + staff mechanics), **medium** on stats (one detailed post, Strength contested), **weak** on current gear lists |
| `retribution-melee-dps.md` / `retribution-melee-dps.yaml` | AP Ret and spell/hybrid Ret for raids and dungeons; PvP notes | **medium**: rotation is consensus (macro authors), gearing is contested (AP vs SP), viability contested; builds only as links |
| `holy-healer.md` / `holy-healer.yaml` | melee-weaving Holy healer (Blessed Strikes) and caster variant | **strong** on the 2026 melee-healing method and boss lists (Ellifta, Atreidon), **medium** on stats, **weak** on gear; talent build only as a link |
| `holy-pvp.md` / `holy-pvp.yaml` | Holy "bubbladin" point defence / arena | **weak–medium**: one expert source for the loop, several hostile/contested standing posts, no build |
| `leveling.md` | spec choice, talent orders 10–60 (Prot and Ret), training priority, brackets, AoE grinding, stats, route, hardcore | **medium**: the 2024-12 guide gives full talent orders (single source); playstyle consensus from 2025 threads; route is a gap |

## Spec × role coverage

| Spec | Tank | Healer | Melee DPS | Ranged DPS | PvP | Leveling |
|---|---|---|---|---|---|---|
| Protection | **strong** (playbook) | — | weak (Prot "highest dps among tank specs" claim only) | — | none | strong (AoE/dungeon path) |
| Holy | none (Holy/Prot hybrid links only) | **strong** (playbook) | none | none ("Shockadin" removed 1.17.2, Holy Shock damage restored weaker 1.18.0; no rotation source) | **medium** (playbook) | weak (not recommended post-CC2) |
| Retribution | weak (off-tank with Righteous Fury; Vengeance penalty removed under RF 2025-04-01) | weak (off-heals in dungeon builds) | **medium** (playbook) | — | weak (contested nerf/OP; folded into the Ret playbook) | medium (questing path) |

## Official 1.18.1 Paladin changes used (Jamey p166071, 2026-01-23, revised 2026-03-19; hotfixes Torta p171608/p172139)

Consecration +8% base and front-loaded ticks (156% → 44%); Holy Shield threat 30% → 50%; Righteous Strikes → Holy Strike +5..25% damage/threat and Crusader Strike grants Zealous Defence (next blocked attack −6..30%); Holy Strike reworked to weapon damage + Holy (R8 40% WD + 129–146) with 71% SP; Repentance tick +8% AP; Seal of Command 7 → 9 PPM; Crusader Strike R5 100% WD; Daybreak 289 → 248 base, 43% → 32% scaling; Ret T3.5 5-set Crusade 4%/20 s non-stacking; Holy T3.5 5-set no extra Holy Strike targets; Prot T3.5 5-set moved to 3-set, new 5-set Holy Shield −4% damage taken; Ret/Prot T2.5 3-set +15% JoR/JoC. Hotfixes: strikes grant benefits on miss; Holy Strike heal target count fixed; Mending Light triggers/scales; Libram of Ardour faction fix. The 26 Jan 2026 revision block contains no Paladin entries.

## Gaps (not covered by any source — do not guess)

1. **Post-1.18.1 numbers**: no forum post re-evaluates Prot threat/crush cap, Ret DPS, or Holy HPS after 2026-03-20 (the last Ret post asks "So how does the SoC work out?" and is unanswered).
2. **Full point-by-point 60 builds**: every endgame build is a talent-calculator link (`talents.turtlecraft.gg/paladin?points=...`) that cannot be decoded from the text; only leveling orders are enumerated. Holy 31/7/13's Prot/Ret points are unknown.
3. **Pre-raid BiS lists** for all three specs on current itemization (the 2019 tank list is declared outdated; askers in 2025 were sent to Discord).
4. **Consumables** for Prot and Holy beyond mana oil; flask/elixir choices; Ret enchant choice per slot (AP vs SP).
5. **Holy downranking / spell-rank usage and emergency thresholds** (when to Lay on Hands, Hand of Sacrifice, bubble).
6. **Shockadin / Holy ranged DPS** rotation after 1.18.0 restored Holy Shock damage.
7. **Ret PvP** build and rotation post-CC2; Prot PvP.
8. **Crit-immunity defense value on Turtle** (only a hedged vanilla number: 440 / 420 with Anticipation) and the exact block needed for crush immunity after Righteous Strikes lost its block chance.
9. **Zone-by-zone leveling route** and dungeon-per-bracket list (only fragments: RFC at 38 for Lavadrenched Chainmail, Gilneas City ~48, Hateforge 54–55, ZF for Jang'thraze).
10. **Whether Crusader/Holy Strike proc Seal of Righteousness** (contested in Oct 2025; consensus says no, one tester says yes).
11. **Improved Seal of Righteousness** actual value (a 2025-09 dummy test measured 4.6% instead of 10%; staff listed a fix 2024-12-20; unresolved).
12. **Buff cap behaviour** (do hidden buffs still apply?) — contested.
13. **Ret T3.5 / Prot T3.5 / Holy T3.5 full set bonuses** (only the 1.18.1 deltas are in the sources).
14. **Strength's value for Prot threat** (contested: block value → Holy Shield damage vs "no scaling").
15. Whether the guide's Hogger class quest is required for Crusader Strike (staff: trained at 8 / High Elf trainer).

## Top open questions for the orchestrator

- Fetch/decode the `talents.turtlecraft.gg` links (the calculator encodes points in the `points=` string) to turn the linked builds into point lists.
- Any post-1.18.1 raid logs or Discord class-channel guides for Paladin (the forum repeatedly defers to Discord).
- A Turtle database dump for Holy Strike/Crusader Strike/Consecration current values and spell IDs (all `spell_id` fields are null because no source gives them).
