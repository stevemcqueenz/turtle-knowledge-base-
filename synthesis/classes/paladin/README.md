# Paladin playbooks — index

Written 2026-09-10 from the Paladin forum (f=41, 307 threads / 3,091 posts, extraction ends 2026-04-06), the staff class-change thread (t=15157), the 1.18.1 patch thread (t=22214), `synthesis/1.18.1-master-changelog.md`, `synthesis/turtle-vs-vanilla-timeline.md`, `structured/patches/1.18.1-changes.yaml`, and the community wiki (Paladin, Paladin Macros). **Discord enrichment pass (2026-09)**: the archived Turtle WoW Europe `#paladin` (and `#pvp-general` context) was folded in - decoded talent builds with `spell_id`s, the post-1.18.1 Prot/Ret/Holy re-evaluation, PvP coverage for all three specs, the leveling route, and the 2026-04-01 next-patch announcement (marked announced, not shipped). Every Discord claim cites `[[d:<channel>#<id>]]` and resolves in `structured/discord/evidence-<channel>.jsonl`. Conventions: `synthesis/CONVENTIONS.md`.

## Files

| File | Content | Source quality |
|---|---|---|
| `protection-tank.md` / `structured/classes/paladin/protection-tank.yaml` | sword-and-board tank for dungeons, raids and solo AoE farming | **strong** on rotation/pulling/mana, **strong post-1.18.1** (Discord threat re-evaluation, caps, gear, bosses), **medium** on current pre-raid BiS (still a gap) |
| `retribution-melee-dps.md` / `retribution-melee-dps.yaml` | AP Ret and spell/hybrid Ret for raids and dungeons | **strong** on the decoded builds, rotation and the SoC-vs-SoR numbers; gearing still contested (AP vs SP) |
| `holy-healer.md` / `holy-healer.yaml` | melee-weaving Holy healer (Blessed Strikes) and caster variant | **strong** on the melee healing method and boss lists, **strong** on coefficients/downranking/mana; post-1.18.1 bugs documented; next-patch rework announced |
| `holy-pvp.md` / `holy-pvp.yaml` | Holy "bubbladin" point defence / arena | **strong** post-1.18.1: decoded 35- and 38/0/13 builds, PvP gear tiers, arena rules |
| `retribution-pvp.md` / `retribution-pvp.yaml` | Ret burst-assist + support | **new**: two decoded 11/8/32 trees (AP/SoC and spell/SoR), matchups, arena |
| `protection-pvp.md` / `protection-pvp.yaml` | Prot anti-melee bruiser / flag carrier | **new**: decoded 11/33/7, Reckoning, gear, arena |
| `leveling.md` | spec choice, talent orders 10-60, pinned decoded codes, per-bracket play, AoE grinding, stats, route, hardcore | **strong**: pinned codes decode to the exact points per level; post-1.18.1 advice |

## Spec × role coverage

| Spec | Tank | Healer | Melee DPS | Ranged DPS | PvP | Leveling |
|---|---|---|---|---|---|---|
| Protection | **strong** (playbook) | — | weak (Prot "highest dps among tank specs" claim only) | — | **medium** (new playbook: bruiser/FC) | strong (AoE/dungeon path) |
| Holy | none (Holy/Prot hybrid links only) | **strong** (playbook) | none | none ("Shockadin" removed 1.17.2, Holy Shock damage restored weaker 1.18.0; a shockadin build is decoded in the PvP file) | **strong** (playbook + builds + arena) | weak (not recommended for solo post-CC2) |
| Retribution | weak (off-tank with Righteous Fury) | weak (off-heals in dungeon builds) | **strong** (playbook) | — | **medium** (new playbook: burst + support) | medium (questing path) |

## Official 1.18.1 Paladin changes used (Jamey p166071, 2026-01-23, revised 2026-03-19; hotfixes Torta p171608/p172139)

Consecration +8% base and front-loaded ticks (156% → 44%); Holy Shield threat 30% → 50%; Righteous Strikes → Holy Strike +5..25% damage/threat and Crusader Strike grants Zealous Defence (next blocked attack −6..30%); Holy Strike reworked to weapon damage + Holy (R8 40% WD + 129–146) with 71% SP; Repentance tick +8% AP; Seal of Command 7 → 9 PPM; Crusader Strike R5 100% WD; Daybreak 289 → 248 base, 43% → 32% scaling; Ret T3.5 5-set Crusade 4%/20 s non-stacking; Holy T3.5 5-set no extra Holy Strike targets; Prot T3.5 5-set moved to 3-set, new 5-set Holy Shield −4% damage taken; Ret/Prot T2.5 3-set +15% JoR/JoC. Hotfixes: strikes grant benefits on miss; Holy Strike heal target count fixed; Mending Light triggers/scales; Libram of Ardour faction fix. The 26 Jan 2026 revision block contains no Paladin entries.

## Gaps (not covered by any source — do not guess)

Status after the Discord enrichment pass: items 1, 2, 8 and 14 are resolved; item 5 is partly resolved, item 12 broadly confirmed; the rest are annotated below.

1. ~~Post-1.18.1 numbers: no forum post re-evaluates Prot threat/crush cap, Ret DPS, or Holy HPS after 2026-03-20.~~ **Resolved by Discord** (Prot ~2085 TPS Patchwerk, avoidance cap 102.4%, crush = tier + Holy Shield; SoC + Libram of Ardour ~30-40 DPS ahead of SoR; Holy hit by Daybreak/T3.5 nerf and Mending Light bugs).
2. ~~Full point-by-point 60 builds: every endgame build is a talent-calculator link that cannot be decoded; Holy 31/7/13's Prot/Ret points are unknown.~~ **Resolved** - both codecs decode; all builds in the structured files carry `talent_id`/`spell_id`.
3. **Pre-raid BiS lists** for all three specs on current itemization - Discord has fragments (spelladin-style T0.5 + tank off-pieces; T1 PvP "super prebis"; Red Dragonscale), but no complete itemised list.
4. **Consumables** for Prot and Holy beyond mana oil - Discord adds Nordanaar Herbal Tea and floats Flask of Petrified Gold; no agreed prot flask/elixir set. Ret's consumable list is now complete (Jesse Potter).
5. ~~Holy downranking / spell-rank usage and emergency thresholds.~~ Partly resolved: the coefficient rule, rank-1 FoL ~630/945, and HL downrank to r6 are documented; exact Lay on Hands / Hand of Sacrifice thresholds remain open.
6. **Shockadin / Holy ranged DPS** rotation after 1.18.0 restored Holy Shock damage - a build and libram are documented; no full rotation.
7. ~~Ret PvP build and rotation post-CC2; Prot PvP.~~ **Resolved** - new PvP playbooks for Ret and Prot.
8. ~~Crit-immunity defense value on Turtle and the exact block needed for crush immunity.~~ **Resolved** - 102.4% avoidance cap with Holy Shield; crush from tier + Holy Shield.
9. **Zone-by-zone leveling route** and dungeon-per-bracket list - Discord adds the 20-29 farm spots, but no full route.
10. **Whether Crusader/Holy Strike proc Seal of Righteousness** - post-1.18.1 Discord says physical/on-hit procs and spellstrikes do **not** proc Seal of Command; the SoR question is still contested.
11. ~~**Improved Seal of Righteousness** actual value.~~ Still open - not in the Discord extract.
12. ~~**Buff cap behaviour** (do hidden buffs still apply?).~~ Partly resolved: Discord says track Zeal/Holy Might by timers, not buff icons.
13. **Ret T3.5 / Prot T3.5 / Holy T3.5 full set bonuses** - only the 1.18.1 deltas and patch-note-level text are available; the exact new Prot 5-set number was designed 4% but implemented 3% at one point.
14. ~~**Strength's value for Prot threat** (contested).~~ **Settled toward "low"** post-1.18.1 ("str/AP is still not a good stat for prot paladin").
15. ~~Whether the guide's Hogger class quest is required for Crusader Strike.~~ Open in Discord too; the forum staff post (trained at 8) still governs.

## Top open questions for the orchestrator

- ~~Fetch/decode the `talents.turtlecraft.gg` links.~~ **Done** - see `staging/talents/REPORT.md` and `structured/talents/builds-paladin.yaml`.
- The **next-patch rework** (announced 2026-04-01 by developer Lhian: Holy Strike becomes a next-attack ability, CS loses its cooldown and becomes a debuff stacker, spellstrikes stop proccing, Holy Strike healing removed, more tier stamina) has **no numbers** and is **not shipped**; a #theorycrafting follow-up was announced [[d:paladin#1495467664636772484]].
- **Mending Light bug status** and the **Ironclad ~100 healing loss** are issue-list candidates; Mending Light was hotfixed 2026-03-24, Ironclad remains display-vs-real-contested.
- **Divine Shield's exact post-1.18.1 penalty** (staff -60% vs player -70% vs -50% healing) and the FTT SP-scaling shaman-totem bug that inflates SoR rets are both unresolved.
