---
title: "ItemString"
url: "https://turtle-wow.fandom.com/wiki/ItemString"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T10:03:31Z"
fetched: "2026-09-10T07:39:02Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# ItemString

## itemString API TYPE (String)

Item strings are used in World of Warcrafts chat interface to pass item information in item hyperlinks between clients and to pass item information from the client to the user interface.  The main purpose of an item string appears to be to designate display information of item tooltips via item hyperlinks ([itemLink](itemLink)s).

## Item String Formatting

Item strings consist of 4 numerical values in a common format. The four numerical values define an item's name and base stats (ItemId), any enchants that are applied to the item (EnchantId), any extra item stats ("of" type items)(SuffixId), and finally a unique identifier for the item for created items or quest rewards (UniqueId).

 item:itemId:enchantId:suffixId:uniqueId

You can extract these identifiers from a given <b>itemString</b> with the following LUA-code:

 local found, _, itemId, enchantId, suffixId, uniqueId = string.find(<b>itemString</b>, "^item:(%d+):(%d+):(%d+):(%d+)")

### Enchant Ids and Suffix Ids

Adding of enchant and bonus stat information to the tooltip appear to be handled on the client side with out any kind of validation.  By altering the item string in an item hyperlink you can add any enchant or any bonus stats to any item and still pass it to clients via chat, or display a tooltip for it.

- Full list of [EnchantId](EnchantId)s.
- Full list of [SuffixId](SuffixId)s.

### Unique Ids

UniqueIds don't appear to hold any information in and of themselves, and are not consistant in any way across servers like enchantIds and secondaryIds.  This number appears to only be a link to data held on the server or client that returns information about who the item was created by or for.  In the case of items recieved from quests, these seem to be considered made for the player who receives them, and thus gets a uniqueId even though no extra tooltip information is displayed.  It also seems that uniqueIds are somewhat pointless to include in the item string passed to the client as uniqueId information can only be seen on items that are actually on a person where item strings aren't used to set the tooltip; for item hyperlinks, uniqueId information is ignored.

## Example Item Strings

**<tt>"item:6948:0:0:0"</tt>**
   The first number is the ItemID for a Hearthstone.  The other 3 values are 0, which tells the client it has no enchants, extra stats, and wasn't made by anyone.

**<tt>"item:18832:2564:0:0"</tt>**
   The first number is the ItemID for Brutality Blade.  The second number ([enchantId](enchantId)) in this case denotes that it is enchanted with +15 agility.

**<tt>"item:10242:0:614:0"</tt>**
   The first number is the ItemID for Heavy Lamellar Gauntlets.  The third number ([suffixId](suffixId)) adds to this item's name " of the Monkey" and adds +11 Agility and +11 Stamina.

**<tt>"item:4388:0:0:210677200"</tt>**
   The first number is the ItemID for Discombobulator Ray.  The fourth number adds the information that this particular item only has 4 uses left and was made by Kirov.

*Note:* The fourth number does not always stand for who made an item; it usually appears on quest items too, and sometimes on dropped items. It's possible that the value is a reference to a database entry which can hold extra data, such as who made an item, which quest it came from, when the quest was delivered, who sold the item on the Auction House, etc. etc. GMs would then be able to track an item should a petition about one be made.
