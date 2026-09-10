---
title: "ScaledLifeTap"
url: "https://turtle-wow.fandom.com/wiki/ScaledLifeTap"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-06-28T15:32:29Z"
fetched: "2026-09-10T07:39:33Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# ScaledLifeTap

-ScaledLifeTap** (SLT) automatically scales your Life Tap spell to the appropriate rank based on your equipment and talent effects. It takes into account damage bonuses from gear and talents like Improved Life Tap.

## Installation
  -Manual Installation Only**

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and move the ScaledLifeTap and BonusScanner folder from ScaledLifeTap_v3 into your <code>Interface/AddOns</code> directory 
# Restart the game.

  -Note:**

- The addon requires **[BonusScanner](BonusScanner)** for gear bonus detection.

## Git Links
- [**(crazypoultry)**](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection)

## Commands
{| class="fandom-table"
!Description
!Macro Command
|-
|Cast scaled Life Tap
|/run ScaledLifetap_CastLifeTap()
|-
|Toggle SLT Config
|<code>/run if not ScaledLifeTapForm:IsShown() then ShowUIPanel(ScaledLifeTapForm) else HideUIPanel(ScaledLifeTapForm) end</code>
|-
|Toggle Debug
|<code>/run if not DEBUG_MODE then DEBUG_MODE = true print("Debug mode ON") else DEBUG_MODE = false print("Debug mode OFF") end</code>
|}

## Preview
## How it Works
# **Determines Talent Rank:** Checks your "Improved Life Tap" talent rank.
# **Finds Max Life Tap Rank:** Scans your spellbook to identify the highest available Life Tap rank.
# **Calculates Damage & Bonus:** Considers your gear's damage bonus for accurate scaling.
# **Casts the Appropriate Rank:** Casts the highest rank of Life Tap that you can afford mana-wise and health-wise, based on current conditions.

## Debugging
Enable debug messages to troubleshoot:<syntaxhighlight lang="lua">
/print ScaledLifeTap_Debug(1) -- Enable debug
/print ScaledLifeTap_Debug(0) -- Disable debug
</syntaxhighlight>
