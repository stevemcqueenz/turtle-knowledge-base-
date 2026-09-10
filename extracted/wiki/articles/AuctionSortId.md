---
title: "AuctionSortId"
url: "https://turtle-wow.fandom.com/wiki/AuctionSortId"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T08:06:26Z"
fetched: "2026-09-10T07:38:22Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# AuctionSortId

The methods relating to sorting in the auction house can operate on many columns, this identifier is used to indicate which column is being referenced. Valid values are:

## Values
  - <code>"quality"</code>**
   Item quality (All types)

  - <code>"level"</code>**
   Item level (Only "list", "bidder")

  - <code>"duration"</code>**
   Auction duration (All types)

  - <code>"buyout"</code>**
   Current buyout price? (Only "bidder")

  - <code>"status"</code>**
   Status (High bidder or not??) (All types)

  - <code>"bid"</code>**
   Current bid (All types)

## Notes
Not all of these sorts are valid for all auction types, those which are seen in the WoW UI code are indicated.
