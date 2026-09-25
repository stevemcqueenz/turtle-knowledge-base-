# Addons and macros on Turtle WoW

Turtle runs the **1.12 client**, not a Classic client, so its addon and macro
landscape is a patched executable plus DLL mods, not a modern addon ecosystem. This
guide folds the archived **`#code-corner`** Discord channel (29,909 messages,
2022-06-21 → 2026-05-30) into the KB. Citations are `[[d:code-corner#<id>]]`;
every id resolves in `structured/discord/evidence-code-corner.jsonl`. Era tags:
`pre-1.18.1` (< 2025-10-03), `1.18.1-announced-pre-release` (2025-10-03 .. 2026-03-19),
`post-1.18.1` (≥ 2026-03-20).

Authority note: `#code-corner` has no green-name signal. The strongest voices are addon
authors posting under their project names — Shagu (pfUI/pfQuest), balake (SuperWoW),
Pepopo (Nampower/Cursive), allfoxwy (UnitXP_SP3/Threat), MarcelineVQ (TWThreat/
SP_SwingTimer), jrc13245 (SuperCleveRoidMacros), Pitohui (GMacro), Oldmana (HealersMate),
Kirchlive/Tetto (Cursive/WIM), Walter Bennet (Instance Journal), Belthazorg
(VanillaHelpers64) — plus staff Turt Reynolds. Single-source claims are marked.

## The client mod stack

Turtle players run a patched `wow.exe` plus DLL mods. Installation order heard
in-channel: **VanillaTweaks** once → **VanillaFixes** launcher with **Nampower** and
**SuperWoW** DLLs → run `VanillaFixes.exe` `[[d:code-corner#1064300156645818379]]`.

| Mod | What it does | Era | Agreement |
|---|---|---|---|
| **VanillaTweaks** | One-time `wow.exe` patch: Large Address Aware / 4 GB, FOV, farclip, sound channels `[[d:code-corner#1001207292718497882]]`, `[[d:code-corner#1086763506751258765]]` | pre-1.18.1 | consensus |
| **VanillaFixes** | Launcher run every session: stutter/lag fixes, DXVK compatibility, loads the DLLs, then runs whatever file is named `wow.exe` `[[d:code-corner#1088225716589568111]]`, `[[d:code-corner#1235184163745824849]]` | pre-1.18.1 → post-1.18.1 | consensus |
| **Nampower** | DLL mod: **spell queuing** (the fix for "one button, two spells"), `IsSpellInRange`, `IsSpellUsable`, queue-state icon, quickcast-at-cursor, channel fixes `[[d:code-corner#1289175514422055003]]`, `[[d:code-corner#1312194271306059857]]`. Pepopo's fork (`pepopo978/nampower`) is the one pushed in-channel; config exposes a per-cast buffer and a "take over and delay your cast" window `[[d:code-corner#1289276707693396071]]` | pre-1.18.1 → post-1.18.1 | consensus |
| **SuperWoW** | DLL injection: hidden/overflow buff visibility, autoloot (`/run SetAutoloot(1)`), clickthrough, `uncapSounds`, **511-char macros**, combat logging, companion `SuperAPI`, extra `UnitCastingInfo` `[[d:code-corner#1228455937757417473]]`, `[[d:code-corner#1235623116202577950]]`, `[[d:code-corner#1238364213143928842]]` | pre-1.18.1 → post-1.18.1 | consensus |
| **UnitXP_SP3** | Memory mod (no injection): line-of-sight and distance API, horizontal camera, Lua debug interface; soft dependency of HealersMate `[[d:code-corner#1283399432422817803]]`, `[[d:code-corner#1343576643293155482]]` | pre-1.18.1 → 1.18.1-announced-pre-release | single source |
| **DXVK / dxvk-async** | DX9 → Vulkan; reported FPS gains of ~60–200 `[[d:code-corner#1033859949123600404]]`, `[[d:code-corner#1034945417072357508]]`. Also mitigates the 32-bit OOM path `[[d:code-corner#1489973377665073253]]` | pre-1.18.1 → 1.18.1-announced-pre-release | consensus |
| **VanillaHelpers64** | 64-bit TextureServer to reduce 32-bit OutOfMemory with HD texture packs (beta) `[[d:code-corner#1489373149748531250]]`, `[[d:code-corner#1489634680419647508]]` | post-1.18.1 | single source |

Several addons **require** parts of this stack: SuperCleveRoidMacros needs
SuperWoW + Nampower + UnitXP `[[d:code-corner#1433579920730099894]]`,
`[[d:code-corner#1443619133198569602]]`; Cursive-based rotation addons need Cursive;
HealComm builds must match SuperWoW/Nampower. A community Linux installer bundles tDF,
pfQuest, pfQuest-turtle, SuperAPI and SuperWoW `[[d:code-corner#1283836457370517515]]`.

## Addons players actually run

### Quest, database and map

- **pfQuest + pfQuest-turtle** — "the closest in game database we have"
  `[[d:code-corner#1344050509731991643]]`; adds Turtle's custom quests
  `[[d:code-corner#1086762502483890287]]`.
- **pfQuest-turtle (The-Kludge-Bureau fork)** — post-1.18.1 fork fixing markers not
  rendering in Turtle zones/dungeons and wrong-objective data; the Turtle quest data is
  acknowledged incomplete `[[d:code-corner#1481496088622928073]]`,
  `[[d:code-corner#1481027301461332130]]`.
- **Instance Journal** — rebuilt Encounter Journal (Shift+J) with custom Turtle bosses;
  most boss abilities still missing `[[d:code-corner#1484657806635171921]]`,
  `[[d:code-corner#1488927179453501470]]`.
- **GoggleMaps Turtle** `[[d:code-corner#1412195322330874100]]`, **Atlas/AtlasQuest**
  `[[d:code-corner#1279264263726301218]]`, **Modern Map Markers**
  `[[d:code-corner#1367853659320356875]]`, **Codex** `[[d:code-corner#1402368257465384980]]`,
  **GuidelimeVanilla** `[[d:code-corner#1468245189125738699]]`,
  **WhatsTraining_Turtle** `[[d:code-corner#1367223058535940226]]`.
- **AtlasLoot forks** (Lexiebean, Otari98, Kirchlive/AtlasLoot-GearFilter)
  `[[d:code-corner#1246103464514158713]]`, `[[d:code-corner#1487727805268492320]]`.

### UI, unit frames and raid frames

- **pfUI** — the default all-in-one UI ("it has everything you need")
  `[[d:code-corner#1007203707659755620]]`; provides `/pfcast` mouseover.
- **ShaguTweaks** (+ `GryllsAddons/ShaguTweaks-Mods`, `CrimsonHollow/ShaguTweaks-more-mods`)
  — the lightweight pfUI alternative `[[d:code-corner#1164289016271732758]]`,
  `[[d:code-corner#1252646730164604999]]`, `[[d:code-corner#1165793054964334682]]`.
- **tDF (Turtle DragonFlight UI)** `[[d:code-corner#1283836457370517515]]`,
  **LunaUnitFrames** (`/lunamo`), **NotGrid** (`/ngcast`), **CRAP**
  `[[d:code-corner#1278504904503201876]]`, `[[d:code-corner#1342798453931245588]]`,
  **HealersMate** `[[d:code-corner#1309000229223399526]]`,
  `[[d:code-corner#1382132661044379740]]`, **DragonflightReloaded**
  `[[d:code-corner#1437876955247542282]]`.
- The 1.12 client "is by far the worst client to heal on… no default raid frames, and its
  raid addons are bad performance + low information" `[[d:code-corner#1275559554066944052]]`.

### Macro addons

- **SuperMacro** (longer macros, script functions) `[[d:code-corner#1303332038988009604]]`.
- **Roid-Macros** — pre-Blizzard conditionals: `/startattack`, `/equip`,
  `[help @mouseover]`, target modifiers `[[d:code-corner#1237455282066554900]]`.
- **CleveRoidMacros / SuperCleveRoidMacros** — modern-like conditionals
  (`mybuff:`, `nodebuff:`, `mydebuff:`, `combo:`, `stimer:`, `channeltime:`, `reactive`,
  `behind`, `multiscan`, `firstaction`, `retarget`), `/castsequence`, `/equipoh`,
  dynamic `#showtooltip`; requires SuperWoW + Nampower + UnitXP
  `[[d:code-corner#1433579920730099894]]`.
- **GMacro** — alternative SuperWoW macro addon, Roid-like syntax,
  `/castsequence`, `/equipoh`, `/equipranged` `[[d:code-corner#1308104073157021719]]`,
  `[[d:code-corner#1311708831830769734]]`.
- **Cursive** — DoT/curse duration tracker used as a rotation dependency
  `[[d:code-corner#1244671767851831327]]`, `[[d:code-corner#1417392442206064712]]`.

### Raiding, threat and coordination

- **BigWigs** — the de-facto boss-timer addon; Turtle forks (`pepopo978/BigWigs` kara40,
  `balakethelock/BigWigs`); custom bars via `/bw extra custombar`
  `[[d:code-corner#1270484223933026496]]`, `[[d:code-corner#1366495884962955414]]`. Its
  `farclip` default was the cause of Maexxna's portal failing; disabling it fixed the
  portal `[[d:code-corner#1270523199691427911]]`.
- **TWThreat / Threat** (`allfoxwy/Threat`, MarcelineVQ fork) — threat meter built on an
  undocumented server threat API `[[d:code-corner#1277664684576608367]]`,
  `[[d:code-corner#1371792720468774975]]`.
- **ShaguDPS** (lightweight meter; no totem damage) `[[d:code-corner#1005846607805300787]]`,
  **DPSMate** (freezes at ~20 MB logfile) `[[d:code-corner#1134027762773012520]]`,
  **SW_Stats** `[[d:code-corner#1241359467912888331]]`,
  **SP_SwingTimer** `[[d:code-corner#1309977024907055197]]`.
- **Decursive** `[[d:code-corner#1358515017548562513]]`, **Clique**
  `[[d:code-corner#1288983568801988618]]`, **RallyHelper**
  `[[d:code-corner#1483823462865961022]]`, **ItemRack**
  `[[d:code-corner#1472407948562006018]]`, **AutoLock**
  `[[d:code-corner#1487861776149254325]]`, **DoiteAuras**
  `[[d:code-corner#1463248355424600188]]`.

## Macro language rules

These are the recurring in-channel answers and the reason most retail/Classic-style
macros fail on Turtle.

- **Turtle is the 1.12 client, not Classic.** `#showtooltip`, `/startattack`,
  `/stopcasting`, `/castsequence`, `/equip`, `/use <name>` and `/petattack` as a slash
  command are **not native**; they are addon commands or `/run CastSpellByName(...)`
  `[[d:code-corner#1310741319546830890]]`, `[[d:code-corner#1354103471305134102]]`.
  `#showtooltip` without an addon prints the text into chat and raises a `/help` error
  `[[d:code-corner#1354096592390717584]]`, `[[d:code-corner#1412074266844987506]]`.
- **Length: 255 chars by default, 511 with SuperWoW.** A **single line over ~255 chars
  crashes the client** when placed on an action bar
  `[[d:code-corner#1238364213143928842]]`, `[[d:code-corner#1407692196882288641]]`,
  `[[d:code-corner#1443930190743994369]]`.
- **1 action = 1 input.** Luke (staff): "you can't automate gameplay like what you're
  trying to do… that's an endless loop, also `Wait` does not exist and neither does
  `ExecuteCommand`" `[[d:code-corner#1460046663375655056]]`.
- **Mouseover is not native** in 1.12; it needs pfUI `/pfcast`, Luna `/lunamo`, NotGrid
  `/ngcast`, or Roid/CleveRoid target modifiers. `@cursor` did not exist until Legion
  (vanilla baseline, not from Discord/Turtle), confirmed in-channel
  `[[d:code-corner#1278504904503201876]]`, `[[d:code-corner#1435297892922294474]]`.
- **Two spells per button is impossible without Nampower queuing**
  `[[d:code-corner#1428695809997672528]]`.
- **Weapon swapping in combat incurs a GCD per swap and resets the attack timer**
  `[[d:code-corner#1489027328683278418]]`.
- **`/run` is the portable escape hatch**: `CastSpellByName`, `UseAction(n)`,
  `SpellStopCasting`, `SpellTargetUnit`, `TargetNearestEnemy`, `CheckInteractDistance`,
  `UnitBuff`/`UnitDebuff`, `IsAttackAction`, `UnitAttackSpeed`. A large fraction of posted
  "macros" are single-line Lua. `TargetNearestEnemy()` must be keypress-triggered (cannot
  loop), cycles rather than picking the nearest, and can select unrelated out-of-combat
  enemies `[[d:code-corner#1340130403654045797]]`.
- **Do not call `GetSpellCooldown` with a nil id while Nampower is loaded** — CTD
  `[[d:code-corner#1469074192241524982]]`.

## Verbatim macros by class

Text is **verbatim** from the Discord message; it is not tested by the KB and several
snippets are known-broken (noted). See `structured/macros.yaml` for the machine-readable
copy.

### General

**Mouseover heal / cast (CleveRoidMacros)** — Druid example; generic form below.
`[[d:code-corner#1432192662886158346]]`
```
#showtooltip
/cast [@mouseover]Healing Touch(Rank 3);Healing Touch(Rank 3)
```
Generic: `/cast [@mouseover help alive]Spellname;[@player]Spellname` `[[d:code-corner#1433579920730099894]]`

**Heal with buff/debuff guard (SCRM)** — cast only if the target lacks the buff and does
not have the debuff. `nomybuff:X/Y` = neither up, `nomybuff:X&Y` = either not up.
`[[d:code-corner#1447211480314282026]]`
```
#showtooltip
/cast [nomybuff:"Power Word: Shield" nomydebuff:"Weakened Soul"]Power Word: Shield;Smite
```

**Stance priority (CleveRoid)** `[[d:code-corner#1436389943818850476]]`
```
/cast [known stance:3]Bloodthirst;[known stance:2]Shield Slam
```

**Trinket + spell with dynamic tooltip (SCRM)** `[[d:code-corner#1422262069885014016]]`,
`[[d:code-corner#1442118064656224450]]`
```
#showtooltip
/use 14
/cast Arcane Rupture
```

**Trinket only when off cooldown and equipped** `[[d:code-corner#1444331118399852657]]`
```
#showtooltip
/use [nocooldown equipped]Eye of Moam
/cast Starfire
```

**Use item by name via bag scan (vanilla)** `[[d:code-corner#1353358000990982185]]`
```
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Major Mana Potion"))then UseContainerItem(b,s)end end end
```

**Item cascade / healthstone fallback (CleveRoid)** `[[d:code-corner#1430694844074033336]]`
```
#showtooltip
/use 19013
/use 9421
/use 19011
/use 13446
```

**Equip an item from bags by name (vanilla loop)**
`[[d:code-corner#1353056462779318422]]`
```
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and strfind(n,"Whip of Encouragement")then PickupContainerItem(b,s)EquipCursorItem(13)break end end end
/cast Riding Turtle
```

**Mouseover + range check on a heal (vanilla `/run`)**
`[[d:code-corner#1351923108021407766]]`
```
/run i=(GetMouseFocus().unit) if i then CastSpellByName("Cure Disease"); SpellTargetUnit(i) else Dcr_Clean(); end
```

**Pet attack with spell (Roid-Macros)** `[[d:code-corner#1317018025752264724]]`
```
#showtooltip Immolate(Rank 3)
/cast Immolate(Rank 3)
/script PetAttack(target)
```

**Toggle Find Herbs ↔ Find Minerals (vanilla)** — reported to glitch out and get stuck.
`[[d:code-corner#1483228489313419466]]`
```
/run s={"Find Minerals","Find Herbs"} if q==nil then q=0 end q=q+1 if q>getn(s)then q=1 end CastSpellByName(s[q])
```

**Toggle minimap / meters (vanilla `/run`)**
`[[d:code-corner#1366794295385915504]]`, `[[d:code-corner#1366802072824975484]]`
```
/run local m = Minimap if m:IsShown() then m:Hide() else m:Show() end
/run local n = ShaguDPSWindow if n:IsShown() then n:Hide() else n:Show() end
```

**Target a Mind-Controlled unit (SCRM)** — `/target` selects the nearest matching unit.
`[[d:code-corner#1433151012725723176]]`, `[[d:code-corner#1433147723972087929]]`
```
/target [help debuff:Mind_Control]
```

**Cast if either of two debuffs is up (SCRM)** `[[d:code-corner#1432193321253470239]]`
```
/cast [debuff:Adebuff/Bdebuff]Wrath
```

### Warrior

**Stance + Shield Bash** — reported not to work ("another action is in progress").
`[[d:code-corner#1161011664037093486]]`
```
/cast [stance:1/3] Defensive Stance
/cast Shield Bash
/startattack
```

**Charge / stance-change shield swap** — only the stance part was reported to execute
after login. `[[d:code-corner#1385694714447270009]]`,
`[[d:code-corner#1385964518194286835]]`
```
#showtooltip
/cast Defensive Stance
/equip Dawnstone Bludgeon
/equip Hyperchromatic Deflector
/cast Shield bash
```

**Shield swap with `/equipoff`** — requires a modified ShaguTweaks-extras macro-tweaks.lua.
`[[d:code-corner#1400756774470025246]]`
```
#showtooltip
/cast Defensive Stance
/equip MainHandName
/equipoff OffHandName
```

**Slam on swing timer (vanilla `/run`)** — cast Slam only late enough not to clip.
`[[d:code-corner#1447667901816639643]]`
```
#showtooltip Slam
/run if false then CastSpellByName"Slam()" end
/run if not _a then for i=1,72 do if IsAttackAction(i) then _a=i end end end if not IsCurrentAction(_a)then UseAction(_a)end if (st_timer or 0)>(UnitAttackSpeed"player" or 0)*0.9 then CastSpellByName"Slam()" end
```
SCRM conditional form: `/cast [stimer:<10]Slam` `[[d:code-corner#1447668679612305519]]`

**Overpower when reactive (SCRM)** `[[d:code-corner#1445152969485058069]]`
```
/cast [reactive]Overpower
```

**Rage-gated Heroic Strike (vanilla `/run`)** — reportedly does not work.
`[[d:code-corner#1436967301973807274]]`
```
/cast Bloodthirst
/run if UnitMana("player") >=40 then CastSpellByName("Heroic Strike") end;
```

**Start attack + priority (SCRM)** — rogue form; warrior starter form is
`/startattack` + Bloodthirst + Heroic Strike. `[[d:code-corner#1475173471435886723]]`,
`[[d:code-corner#1469354151036063861]]`
```
#showtooltip
/startattack
/cast [combo:>0]Eviscerate
```

### Paladin

**Judgement + seal priority (SCRM)** `[[d:code-corner#1467987025633480913]]`,
`[[d:code-corner#1467985446335283255]]`
```
#showtooltip
/startattack
/cast [nomybuff] Seal of Righteousness
/cast Judgement
```

**Libram swap by target HP** `[[d:code-corner#1422679676937175070]]`
```
/script if UnitHealth("target") / UnitHealthMax("target") < 0.35 then UseItemByName("Libram of Final Judgement") end;
/script if UnitHealth("target") / UnitHealthMax("target") > 0.35 then UseItemByName("Libram of Radiance") end;
/cast Judgement
```

**Holy Strike + auto-refresh Seal of Wisdom (vanilla `/run`)**
`[[d:code-corner#1441223342106611753]]`
```
/cast Holy Strike
/run cN=CastSpellByName;if not IsCurrentAction(36)then UseAction(36)end;local b;for i=0,31 do local t=GetPlayerBuffTexture(i)if t and strfind(t,"y_Righte")then b=1 break end end;if b then cN("Holy Strike")else cN("Seal of Wisdom")end
```

### Druid

**Travel / aquatic / mount all-in-one (retail port attempt)** — author notes he is a
first-time macro writer. `[[d:code-corner#1422739586345603153]]`
```
/unshift
/cast [swimming]Aquatic Form
/run if UnitAffectingCombat("player") then CastSpellByName("Travel Form") return end
/cast [nocombat] Striped Nightsaber
/run UIErrorsFrame:UnregisterEvent"UI_ERROR_MESSAGE" for i = 2, GetNumShapeshiftForms(), 2 do local _, _, active = GetShapeshiftFormInfo(i) if not active then CastShapeshiftForm(i) end if i == 2 then UIErrorsFrame:RegisterEvent"UI_ERROR_MESSAGE" end end
/run UIErrorsFrame:Hide()
```

**Retail-style modifier travel macro (does not work in 1.12)** — posted precisely
because Roid-Macros lacks these conditions. `[[d:code-corner#1291498110400467155]]`
```
#showtooltip Travel Form
/use [swimming] Aquatic Form; [indoors] Cat Form; [combat] Travel Form; [nocombat] Riding Turtle; Travel Form
/dismount [mounted]
```

**Boomkin idol-swap priority (Donker's addon)** — requires SuperWoW + Nampower +
CleveRoidMacros + VanillaFixes + SuperMacro. `[[d:code-corner#1359852668146815018]]`
```
/retarget
/startattack
/cast [mybuff:"Nature Eclipse"] {WrathSwap}
/castsequence [mybuff:"Arcane Eclipse"] Starfire, {StarfireSwap}
/cast [mydebuff:"Arcane Solstice",nomydebuff:"Natural Solstice"] {WrathSwap}
/cast [mydebuff:"Natural Solstice",nomydebuff:"Arcane Solstice"] {StarfireSwap}
/cast [nomydebuff:"Natural Solstice",nomydebuff:"Arcane Solstice"] {WrathSwap}
```

**"Lazy cat" rotation with `behind`/combo/reshift (SCRM)**
`[[d:code-corner#1472281049802473586]]`
```
#showtooltip
/startattack
/firstaction
/cast [nomybuff:"Blood Frenzy"] Tiger's Fury
/firstaction
/cast [level:>62, nodebuff:"Rip", noimmune:bleed, combo:>=4] Rip; [level:<=62, nodebuff:"Rip", noimmune:bleed, combo:>=1] Rip; [level:>62, combo:=5] Ferocious Bite; [level:<+62, combo:>=3] Ferocious Bite
/firstaction
/cast [nodebuff:"Rake", noimmune:bleed] Rake; [behind, mybuff:"Clearcasting"] Shred; Claw
/firstaction
/cast [mypower:<32, druidmana:>=1350] Reshift
```

**Faerie Fire on a spammable Claw (SCRM)** `[[d:code-corner#1445032775513280675]]`
```
#showtooltip Claw
/startattack
/cast [nodebuff:"Faerie Fire (Feral)"/"Faerie Fire"]Faerie Fire (Feral)(Rank 4)
/cast [mybuff:Clearcasting] Shred; Claw
```

### Rogue

**Priority with finisher (SCRM)** `[[d:code-corner#1475173471435886723]]`
```
#showtooltip
/startattack
/cast [reactive]Surprise Attack
/cast [combo:>0]Eviscerate
/cast [combo:=0]Sinister Strike
```

**Cold Blood only before Eviscerate (SCRM)** `[[d:code-corner#1475581236536807535]]`
```
#showtooltip Noxious Assault
/retarget
/startattack
/cast [myhp:<80] Ghostly Strike
/cast [combo:>4 nomybuff] Cold Blood
/cast [combo:>4 mybuff:Cold_Blood] Eviscerate
/cast [mybuff:"Slice and Dice"<2] Slice and Dice
/cast [mybuff:"Envenom"<2] Envenom
/cast [cdgcd:"Envenom"<0]Noxious Assault
```

**Riposte / Backstab / Sinister Strike chain (vanilla)**
`[[d:code-corner#1358800287057580256]]`
```
/cast Riposte
/cast Backstab
/cast Sinister Strike
```

**Poison swap on off-hand (SCRM)** `[[d:code-corner#1407236335470907453]]`
```
#showtooltip Noxious Assault
/startattack
/equipoh [debuff:"Crippling Poison"] Perdition's Blade
/equipoh [nodebuff:"Crippling Poison"] Dragonfang Blade
/cast Noxious Assault
```

### Priest

**Power Word: Shield with Weakened Soul guard (SCRM)**
`[[d:code-corner#1447120507529859114]]`
```
#showtooltip
/stopcasting [@player,nomybuff:"Power Word: Shield",nomydebuff:"Weakened Soul"]
/cast [@player,nomybuff:"Power Word: Shield",nomydebuff:"Weakened Soul"] Power Word: Shield
/cast Smite
```

**Searing Light / Holy Fire / SW:P priority (SCRM)** — posted while asking for fixes.
`[[d:code-corner#1485314161893445813]]`
```
#showtooltip
/cast [mybuff:"Searing Light"] Smite
/cast [nobuff:"Searing Light", mybuff:"Purifying Flames"<2] Holy Fire
/cast [@target mydebuff:"Holy Fire"<1] Holy Fire
/cast [@target mydebuff:"Shadow Word: Pain"<1] Shadow Word: Pain
```

**Mind Flay-safe SW:P (problem report)** — without Nampower, casting SW:P interrupts
Mind Flay; Cursive's curse command and a `nochanneled` guard were discussed.
`[[d:code-corner#1350284900585967778]]`
```
/cursive curse Shadow Word: Pain|target
```

### Mage

**Conjure + eat/drink one button (SCRM)** `[[d:code-corner#1354467932079394928]]`
```
#showtooltip Conjure Water
/use [nomod] Conjured Fresh Water
/use [nomod] Conjured Bread
/cast [mod:ctrl]Conjure Food;[mod:shift]Conjure Water
```

**Conjure + eat/drink by item ID (SCRM)** `[[d:code-corner#1354442466325168198]]`
```
#showtooltip
/use [nomod] 2136
/use [nomod] 1114
/cast [mod:ctrl]Conjure Water;  [mod:alt]Conjure Food
```

**Arcane Missiles without clipping the channel (SCRM)**
`[[d:code-corner#1443858361257951294]]`, `[[d:code-corner#1445511239521407147]]`,
`[[d:code-corner#1448380302241304597]]`
```
#showtooltip
/cast [channeltime:<0.5] Arcane Missiles; [noselfcasting] Arcane Missiles
```
Three-condition form:
```
/cast [checkchanneled]Arcane Missiles
/cast [noselfcasting]Arcane Missiles
/cast [channeltime:<0.5]Arcane Missiles
```
Author notes haste (Arcane Power) can desync the `channeltime` check.

**One-button Arcane priority (SCRM)** — cast priority is top-down, left-to-right.
`[[d:code-corner#1448686517018034327]]`, `[[d:code-corner#1443744472537239755]]`
```
#showtooltip
/cast [reactive, nocooldown, nomybuff:"Mind Quickening"/"Arcane Power"] Arcane Surge; [cooldown:"Arcane Rupture"] Arcane Missiles; [@player casting:"Arcane Rupture"] Arcane Missiles; [mydebuff:"Arcane Rupture">=1] Arcane Missiles; Arcane Rupture
```

**Flamestrike at cursor / quickcast** — old implementation used
`CameraOrSelectOrMoveStart/Stop`; Nampower quickcast replaces it.
`[[d:code-corner#1379534710518055195]]`
```
/run CastSpellByName("Flamestrike", "Click")
```

### Hunter

**Pet attack on pull (vanilla `/run`)** `[[d:code-corner#1373031050967519332]]`
```
/run if not GetUnitName("pettarget") then PetAttack() end
/cast Serpent Sting
```

**Multi-Shot + Auto Shot without clipping** — no tooltip/castbar feedback.
`[[d:code-corner#1492552567580921907]]`
```
/cast multi-shot
/run if not IsAutoRepeatAction(1) then CastSpellByName("Auto Shot"); end
```

**Feign Death → Freezing Trap (Classic port, asked)** — posted as a question, not
confirmed working. `[[d:code-corner#1319325075329257534]]`
```
#showtooltip Freezing Trap
/cast Feign Death
/petpassive
/cast Freezing Trap
```

**Aspect by distance (vanilla `/run`)** `[[d:code-corner#1353818020954509426]]`
```
/run if UnitExists("target") then if CheckInteractDistance("target", 3) then CastSpellByName("Aspect of the Wolf") else CastSpellByName("Aspect of the Hawk") end else CastSpellByName("Aspect of the Cheetah") end
```

**Cast + start auto-shot without clipping (vanilla `/run`)**
`[[d:code-corner#1356569067242393700]]`
```
/cast Serpent Sting
/run if CheckInteractDistance("target", 3) and (not PlayerFrame.inCombat) then AttackTarget() elseif not IsAutoRepeatAction(2) then CastSpellByName("Auto Shot") end
```

### Warlock

**Pet Devour Magic on friend/self (asked; not confirmed)**
`[[d:code-corner#1446117200342552649]]`
```
#showtooltip Devour Magic(Rank 4)
/cast [help] Devour Magic; [target=player] Devour Magic
```

**Buff + create stone macro (vanilla `/run`)** `[[d:code-corner#1461898264134811740]]`
```
/run if not buffed("Demon Armor") then cast("Demon Armor") end
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Healthstone"))then return end end end
/cast Create Healthstone (Lesser)()
/run if not buffed("Firestone") then for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Firestone"))then UseContainerItem(b,s,1)end end end end
/cast Create Firestone
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Soulstone"))then UseContainerItem(b,s,1)end end end
/cast Create Soulstone (Lesser)
```

**Cast-sequence CC helper (SCRM)** `[[d:code-corner#1468674458548961292]]`
```
#showtooltip
/cast [mod:shift] Fear
/castsequence [nomod] reset=target/combat Curse of Agony, Fear, Shadow Bolt
```

**Curse if target lacks it (SCRM)** — Hunter example demonstrating that SCRM debuff
checks do not distinguish your debuff from someone else's.
`[[d:code-corner#1448856701934637159]]`
```
/cast [debuff:"Serpent Sting"]Arcane Shot;Serpent Sting
```

**Create Soulstone spelling quirk** — `/cast Create Soulstone (Minor)` fails; the extra
`()` works but breaks `#showtooltip`. `[[d:code-corner#1485233323084091492]]`
```
/cast Create Soulstone (Minor)()
```

### Shaman

**Totem priority one button (SCRM)** — case matters in spell names.
`[[d:code-corner#1447997557451264224]]`, `[[d:code-corner#1447993794514391160]]`
```
#showtooltip
/cast [nocooldown] Totemic Recall; [nocooldown] Windfury totem; [nocooldown] searing totem
```

**Fire totem / Lightning Shield conditionals** `[[d:code-corner#1437864791648501811]]`
```
/cast [mybuff:"Lightning Shield"] Lightning Strike;
/cast [nomybuff:"Lightning Shield"] Lightning Shield
```

**Totemic Slam vs Lightning Strike** `[[d:code-corner#1476294357312209017]]`
```
#showtooltip Lightning Strike
/cast [ready:Totemic Slam] Totemic Slam; Lightning Strike
```

## Mechanics tooling and caveats

- **Swing timers.** Dual-wield swing timers are **broken in 1.12**: "they eventually
  desync and confuse mainhand and offhand swings together"; two-hand timers work
  `[[d:code-corner#1000847305752191067]]`, `[[d:code-corner#1000847337914126496]]`.
  `SP_SwingTimer` carries the main/off-hand detection math and a warrior
  `HeroicStrikeQueued()` helper `[[d:code-corner#1309977024907055197]]`,
  `[[d:code-corner#1294525909235400765]]`; `ST SwingTimer` exposes the `st_timer` global
  `[[d:code-corner#1451838444929290394]]`.
- **Threat.** `UnitThreatSituation` does not work in 1.12; `TWThreat` uses an
  undocumented server threat API the server does not normally send
  `[[d:code-corner#1260349347955085373]]`, `[[d:code-corner#1263168205556547765]]`,
  `[[d:code-corner#1353918805293797386]]`. The meter **stops working when mobs share a
  name** `[[d:code-corner#1374701093157732415]]` and by default only tracked
  elite/worldboss targets with no solo play `[[d:code-corner#1367560226563424397]]`.
- **Range / line of sight.** No native `IsSpellInRange`; use Nampower's or
  `IsActionInRange`/`CheckInteractDistance` `[[d:code-corner#1312194271306059857]]`,
  `[[d:code-corner#1311110199104508004]]`. Spell range expands with the target's hitbox:
  a 40 yd spell can hit a huge enemy from ~60 yd, melee can reach ~20 yd, and
  `CheckInteractDistance(4)` approximates ~27 yd dispel range
  `[[d:code-corner#1228664837823791125]]`, `[[d:code-corner#1228671058085806140]]`.
  No line-of-sight/distance API without UnitXP_SP3
  `[[d:code-corner#1283399432422817803]]`.
- **Totem / pet damage attribution.** Searing/Fire Nova/Healing Stream totem damage is
  not attributed by ShaguDPS or SW_Stats without SuperWoW combat-logger owner data
  `[[d:code-corner#1241358757431345222]]`, `[[d:code-corner#1246485186799992843]]`; MC'd
  mob damage goes to the controlling player `[[d:code-corner#1240922252250316800]]`.
  balake: "your superwow combat log stuff is not compatible with my 2007 dps meter…
  just shagudps" `[[d:code-corner#1321529790876090411]]`.
- **DoT tracking (Cursive).** 1.18.x Turtle fixes: Dark Harvest tick-time, Warlock
  Rapid Deterioration dynamic durations, Eye of Dormant Corruption (+3 s Corruption/SW:P),
  Druid Rip combo-point scaling, bleed-immunity detection
  `[[d:code-corner#1454965235512246466]]`. It did **not** reliably register the 1.18.x
  Druid Carnage bleed refresh `[[d:code-corner#1407486842919714877]]`,
  `[[d:code-corner#1409294816315052132]]`.
- **Buff / debuff cap (contested, evolving).** 2024: "it's just 32 buffs and 16 debuffs"
  `[[d:code-corner#1299499345569255494]]`. 2025-11: "16 debuffs; 17-48 buffs visible;
  49-64 invisible" `[[d:code-corner#1441206387622543462]]`. 2026-01: "Players have a buff
  and debuff cap of 48 server side. Visually it's 32 because that's the limit of the
  client" `[[d:code-corner#1462243994078674955]]`,
  `[[d:code-corner#1462244087695540406]]`. Practical client-side limit: **32 visible
  buffs / 16 visible debuffs**. Addons cannot see invisible buffs, so `nomybuff` macros
  can loop and re-cast, and DoT trackers fall back to cast tracking
  `[[d:code-corner#1480552709412229253]]`, `[[d:code-corner#1452633690390790224]]`.
  At the cap only `SPELL_GO`/`UNIT_CASTEVENT` is emitted; `AURA_CAST_ON_SELF/OTHER`
  recovers some aura applications but not all `[[d:code-corner#1463248355424600188]]`.
- **Cooldown data across the raid.** SuperCleveRoidMacros scrapes BigWigs cooldown data
  to power a "who has this cooldown ready" frame
  `[[d:code-corner#1483298694974537852]]`.
- **Client bugs that bite macro authors.** A single macro line > ~255 chars crashes the
  client `[[d:code-corner#1443930190743994369]]`; `GetPoint()` crashes the client and is
  reproducible via `GetMouseFocus()` `[[d:code-corner#1336751627444551782]]`; Nampower can
  leave a stuck cast bar when a spell finishes faster than the bar animates
  `[[d:code-corner#1065484166822641684]]`; pfUI's **Macro Tweaks** module breaks
  `#showtooltip`/range for CleveRoid macros — disable it to fix
  `[[d:code-corner#1313304909709312100]]`, `[[d:code-corner#1354442466325168198]]`.
- **Performance.** Frames detached with `Hide()` + `SetParent(nil)` remain in memory
  forever; cache/reuse frames `[[d:code-corner#1341952297755742209]]`. O(n²)
  inventory/spellbook iteration causes frame drops `[[d:code-corner#1455916425796522183]]`.
  ShaguTweaks' vendor-value tooltip processing cost ~20 FPS in the AH
  `[[d:code-corner#1251980157313351751]]`; raid-lag sources named: pfQuest, DPSMate and
  raid frames doing high-frequency range/buff checks
  `[[d:code-corner#1359876469228306606]]`. There is no `/framestack` in the client, so
  identifying an arbitrary frame name is hard `[[d:code-corner#1437876955247542282]]`.

## Open questions and gaps

- **`/castsequence`, `/equip` and `reset=` support differ per macro addon and per
  version**; no single authoritative list exists in-channel. GMacro added `/equipoh` /
  `/equipranged` `[[d:code-corner#1311708831830769734]]`; CleveRoid users reported
  `/equip` and `/castsequence` working only sporadically
  `[[d:code-corner#1360136075024011395]]`, `[[d:code-corner#1407236335470907453]]`.
- **`#showtooltip` icon/cooldown desync** on stance-swapping macros was never resolved
  in-channel `[[d:code-corner#1373069431898378330]]`.
- **`nomybuff:X/Y` operator semantics changed** with the Dec-2025 SCRM update (OR → AND);
  the maintainer fixed it and documented `/` = OR, `&` = AND
  `[[d:code-corner#1447624406150025226]]`, `[[d:code-corner#1448341959746912440]]`.
- **pfQuest Turtle quest data** is acknowledged incomplete/incorrect and is being
  re-forked; not settled at archive end `[[d:code-corner#1483101677296029736]]`,
  `[[d:code-corner#1481027301461332130]]`.
- **Client crash causes** (`GetPoint`, dynamic CRT `concrt140.dll`, 32-bit OOM texture
  retention) were investigated but never root-caused; the OOM path was only mitigated
  (VanillaHelpers64, DXVK) `[[d:code-corner#1334999470806663221]]`,
  `[[d:code-corner#1489973377665073253]]`.
- **Addon-control staff stance:** staff looked at ways to combat Decursive-style
  automation but explicitly did not disable API functions or break addons
  `[[d:code-corner#1358515017548562513]]`, `[[d:code-corner#1358516273050423570]]`;
  players argued dispelling is uninteresting enough to warrant it
  `[[d:code-corner#1358544378150387923]]`.
- The archive ends 2026-05-30, after the announced server shutdown (2026-05-15), so
  several post-1.18.1 projects are frozen mid-development (e.g. lazyScript
  `[[d:code-corner#1503567637571960883]]`).
