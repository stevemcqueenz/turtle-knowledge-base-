---
title: "Warmup"
url: "https://turtle-wow.fandom.com/wiki/Warmup"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-17T12:42:59Z"
fetched: "2026-09-10T07:39:58Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Warmup

-Warmup** tracks load times, addon load events, garbage collection, and performance metrics during WoW startup and zoning.

## **Installation**
  -Manual Installation only**

# Download this zip: **[!!Warmup.zip](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/!!Warmup.zip)**
# Unpack the <code>.zip</code> into your <code>Interface/AddOns</code> directory and restart the game.

  -Info**: Read this for more info on how to [**Cut down loading**](https://web.archive.org/web/20070107095314/http://www.pooh.cz/aod/a.asp?a=2013422) (zoning) delay - work out your add-ons.

## Git Links
- **[(Laytya)](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/!!Warmup.zip)**

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/rlt</code>
|Print the total reload time if the addon has tracking enabled.
|-
|<code>/wu events</code>
|Turn on an overview of events fired when zoning.
|-
|<code>/wu</code> or <code>/warmup</code>
|Display the summary in the combat log; full details are accessible in the Warmup frame.
|}

## Preview
Output Frame:

Combatlog:

## Features
Features & How to Use

  -View Performance Logs:**

- The addon logs various events like addon load times, garbage collection, and zone changes. It helps diagnose startup performance.

  -Event Monitoring:**

- The addon automatically tracks many WoW events, including UI actions, combat, chat, and more, for performance analysis.

  -Performance Alerts:**

- When garbage collection or other performance thresholds are exceeded, messages are displayed in the output frame.

  -Colors for Performance Thresholds:**  

- Green: Good performance
- Yellow: Warning levels
- Orange/Red: Poor performance

  -Threshold Settings:**

- Adjust timethresh, timethresh2, timethresh3, memthresh, memthresh2, memthresh3 in the Lua file for sensitivity.

## How It Works
- Tracks time between load events and zone changes.
- Logs addon load durations and memory usage.
- Detects garbage collection and displays GC-related events.
- Outputs messages to the chat frame and a dedicated output window.

## Forcing Warmup to load first
Obviously, you want Warmup to load first. This is the reason the folder is named !!Warmup and not just Warmup. The problem is that the !! doesn't ensure it'll load first for everyone. If you're one of the few who's Warmup won't load first, here's what you do:

# Launch WoW, log in
# Open your warmup frame, /wu
# Scroll to the very top, you should have a whiney message that some addon loaded before Warmup (probably more than one)
# Open up <WoW Path>\Interface\Addons\<That first addon> on your hard drive
# Find the file <That first addon>.toc, open it in a text editor
# Add this line: **## OptionalDeps: !!Warmup** If an "OptionalDeps" line exists, just append **, !!Warmup** to it
# Exit the game completely and re-login, Warmup should load first

## Change Log
  -r14034 | ammo | 2006-10-15 16:51:47 -0400 (Sun, 15 Oct 2006)**

- Warmup: TBC compliance fixes

  -r13818 | ammo | 2006-10-13 16:25:54 -0400 (Fri, 13 Oct 2006)**

- Warmup: Use pairs for TBC

  -r10890 | tekkub | 2006-09-12 00:42:00 -0400 (Tue, 12 Sep 2006)**

- Warmup:
  - TOC tweaks for the wiki

  -r513 | tekkub | 2006-04-21 18:26:55 -0400 (Fri, 21 Apr 2006)**

- Warmup: Renaming SVN path to match \Interface\Addons path

  -r189 | tekkub | 2006-04-14 00:21:32 -0400 (Fri, 14 Apr 2006)**

- Warmup: Another tweak to try to fix hC's nil error

  -r187 | tekkub | 2006-04-13 23:56:40 -0400 (Thu, 13 Apr 2006)**

- Warmup:
  - Removed all user settings, reverting to the old style.
  - Summary is printed to the combat log.
  - Full details are available in the Warmup frame accessible via <code>/wu</code>.
  - GC notices are still available; uncomment line 4 in the Lua file to enable.

  -r154 | tekkub | 2006-04-10 18:10:11 -0400 (Mon, 10 Apr 2006)**

- Warmup: Latest tweaks (Added threshold coloring, better indication of GC)
