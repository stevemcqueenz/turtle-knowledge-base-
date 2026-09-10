---
title: "AsmoMOD"
url: "https://turtle-wow.fandom.com/wiki/AsmoMOD"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-13T15:30:51Z"
fetched: "2026-09-10T07:38:20Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# AsmoMOD

-AsmoMOD** is a comprehensive addon designed to automate and enhance gameplay. Features include automatic breaks for crowd control effects, swiftmend monitoring and automation, auto-repair, group management, battleground automation, and more.

## **Installation**
  -Manual Installation only**

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Extract the .zip file, move the AsmoMOD folder from inside the AsmoMOD_v1.931 folder to your <code>Interface/AddOns</code> directory
# Restart the game.

## Git Links
- [**(crazypoultry)**](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection)

## How to Use
  -Enabling Features**

- Open the options menu via <code>/asmo</code> or the minimap button.
- Toggle desired features (Auto Repair, Auto Group, Auto BG, Auto Resurrection, etc.).
- Adjust thresholds (percentages) for NS-Heal, Swiftmend, and Emergency Swiftmend.
- Enable or disable auto features individually for fine control.

  -Manual Activation**

- Use macros with the commands above for quick manual triggers.
- For auto-casting, just press any hotbar key or switch targets after enabling features.

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/asmo</code>
|Opens the addon options menu.
|-
|<code>/asmomap</code>
|Toggles the minimap button.
|-
|<code>/nsheal</code>
|Casts Nature’s Swiftness + Healing Touch/Wave.
|-
|<code>/nslight</code>
|Casts Nature’s Swiftness + Chain Lightning.
|-
|<code>/feigntrap</code>
|Uses Feign Death + Freezing Trap.
|}

-Note:* For automatic features like auto-break, Swiftmend, or mana conservation, you must press any key on your hotbar or switch targets for the spell to execute.

## Preview
## Key Features & Usage
  -Auto Break Effects**

- Automatically uses abilities like Berserker Rage, Will of the Forsaken, or PvP trinkets to break fear, stun, charm, sleep, roots, and other impairing effects.
- Priority order varies by class/race:
  - Gnomes: Use Escape Artist for roots/slows.
  - Dwarves: Use Stoneform for poisons.
- Works seamlessly in combat to free you from CC effects.

  -Swiftmend Monitoring & Automation**

- Tracks your last 5 HoTs (Healing Touch, Rejuvenation, Regrowth) with visual bars.
- Clicking on a bar casts Swiftmend on that target instantly.
- Auto-casts Swiftmend when:
  - **Conservation Threshold:** Target's health drops below a set percentage at the end of the HoT.
  - **Emergency Threshold:** Target's health drops below a set percentage regardless of HoT remaining.
- Emergency Swiftmend can be configured for player-only or any party member.

  -Mana Conservation**

- Cancels healing spells if your target’s health is above a set percentage, conserving mana for critical moments.

  -Automation & Lazy Features**

- Auto repairs gear upon talking to a vendor.
- Auto joins groups, battlegrounds, and releases in BGs.
- Auto accepts resurrection, summons, and resurrects.
- Auto-casts Find Herbs, Minerals, or Treasure.
- Reset your group with a button.
- Auto use Riposte, Execute, Overpower, Counterattack, NS-Heals, Feign Death + Trap.
- Emergency Swiftmend on yourself if health drops below a set threshold.
