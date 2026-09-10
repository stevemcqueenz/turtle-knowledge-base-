---
title: "GearSet Protect - Prevents Accidental Selling or Destruction of Saved Sets"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23650"
topic_id: 23650
forum_id: 18
forum: "AddOns"
author: "Olzon"
author_authority: "player"
posted: "2026-01-18T07:20:00Z"
last_post: "2026-01-18T07:20:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:22:17Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# GearSet Protect - Prevents Accidental Selling or Destruction of Saved Sets

## Post 165502 by Olzon — 2026-01-18T07:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165502#p165502 | page 1 | era: 1.18.1-announced-pre-release -->

**GearSetProtect v1.2**
Protect your gear from accidental selling or deletion!

<https://github.com/totalllyswede/GearSetProtect.git>

---
 **What is GearSetProtect?**

A lightweight addon that prevents you from accidentally selling or destroying items that are saved in your **ItemRack** or **Outfitter** gear sets. Never lose that precious resistance gear or PvP set to a misclick again!

---
 **Features**

✓ **Vendor Protection** - Blocks selling protected items with error message
✓ **Delete Protection** - Prevents destroying items from bags or equipped slots
✓ **Dual Addon Support** - Works with ItemRack, Outfitter, or both!
✓ **Smart Tooltips** - Shows which sets contain each item (up to 3 sets)
✓ **Auto-Update** - Protection refreshes when you modify sets
✓ **Clean Interface** - Minimal chat spam, only notifies on changes
✓ **Error Handling** - Built-in safeguards prevent crashes

---
 **Installation**

 **1.** Download **GearSetProtect_v1.2_STABLE.zip**
 **2.** Extract to World of Warcraft/Interface/AddOns/
 **3.** Type /reload in game

 **Requirements:** ItemRack and/or Outfitter addon

---
 **How It Works**

Once installed, the addon automatically protects all items in your saved gear sets:

 **For ItemRack users:**
• Protection updates immediately when you save/delete sets

 **For Outfitter users:**
• Updates automatically after exiting combat or changing zones
• Use /gsp update for instant protection

 **Protection applies to:**
• Selling items to vendors → Blocked with error message
• Destroying items (Delete key) → Blocked with error message
• Works on both equipped items and items in bags

---
 **Commands**

Type /gsp or /gearsetprotect for help menu

 **Available commands:**
• /gsp update - Manually refresh protected items
• /gsp reset - Reset tooltips if issues occur
• /gsp count - Show how many items are protected
• /gsp list - Display all protected item IDs

---
 **Tooltip Display**

Hover over any item to see which gear sets contain it:
• Shows up to 3 set names in a separate tooltip
• Displays "+X more..." if item is in more than 3 sets
• Smart positioning (above/below based on screen space)
 *Example: Hovering over your Lionheart Helm shows "Set: PvP, Raid DPS, +1 more..."*

---
 **Changelog - v1.2**

 **FIXED**
• Comparison tooltip bug (floating tooltips after shift-compare)
• Shopping tooltips now auto-clear when shift is released

 **ADDED**
• /gsp reset command to refresh tooltips

 **CHANGED**
• Improved performance (removed BAG_UPDATE spam)
• Outfitter updates after combat/zone changes instead of constant bag checks

---
 **Download**

 **Latest Version:** v1.2 (January 17, 2026)
 **GitHub:** <https://github.com/totalllyswede/GearSetProtect>
 **Stop losing your gear to accidents - download now!**

---
 **Support & Feedback**

Found a bug? Have a suggestion? Reply to this thread or open an issue on GitHub!

 *Built with Ace2 library framework for World of Warcraft 1.12.1 (Vanilla)*

