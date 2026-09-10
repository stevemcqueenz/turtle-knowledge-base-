---
title: "KLHPerformanceMonitor"
url: "https://turtle-wow.fandom.com/wiki/KLHPerformanceMonitor"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-09T12:24:08Z"
fetched: "2026-09-10T07:39:03Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# KLHPerformanceMonitor

-KLHPerformanceMonitor** tracks the memory creation and CPU usage of all the mods running. You can print out a list of the top 10 mods, for memory usage or CPU time, in total or in the last 30.

## **Installation**
  -Manual Installation only**

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Extract the .zip file, move the KLHPerformanceMonitor folder from inside the KLHPerformanceMonitor_v3.1 folder to your <code>Interface/AddOns</code> directory
# Restart the game.

## Git Links
- [**(crazypoultry)**](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/kpm load</code>
|Start the performance monitor
|-
|<code>/kpm time total</code>
|Display total CPU time since activation
|-
|<code>/kpm time recent</code>
|Display recent CPU time (last ~30 seconds)
|-
|<code>/kpm memory total</code>
|Show total memory used since start
|-
|<code>/kpm memory recent</code>
|Show memory used in last ~30 seconds
|}

## How to Use
  -Enabling and Starting the Monitor**
- To start monitoring, type: <code>/kpm load</code> *This activates data collection and takes a few seconds to gather initial stats.*
  -Viewing Performance Data**
- To see CPU time usage:  <code>/kpm time total</code> — Shows total CPU time since monitoring started.  <code>/kpm time recent</code> — Shows CPU time over the last ~30 seconds.
- To see memory usage:  <code>/kpm memory total</code> — Shows total memory used since monitoring started.  <code>/kpm memory recent</code> — Memory used in the last ~30 seconds.

## Preview
Memory Total:

Time Total:

## How It Works
- The addon hooks into all UI frames' <code>OnUpdate</code> and <code>OnEvent</code> handlers.
- It groups frames by their initial name segments (e.g., "KLHTM", "CT_RA", "DUF_") to categorize resource usage.
- It provides a list of the top 10 categories/mods consuming resources, showing:
  - The rank (1-10)
  - The category/mod name
  - An example frame name in that category
  - The current resource usage (time in ms or memory in KB)

## Important Notes
- **Performance Impact:** Because it hooks many frames (~3000), it may slow down your system slightly.
- **Default State:** Disabled for performance reasons; activate with <code>/kpm load</code>.
- **Data Grouping:** Frames are grouped based on the first few characters of their names, helping you identify resource-heavy addons or mods.
