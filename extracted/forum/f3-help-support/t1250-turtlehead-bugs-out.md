---
title: "Turtlehead bugs out"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1250"
topic_id: 1250
forum_id: 3
forum: "Help & Support"
author: "Jordus"
author_authority: "player"
posted: "2020-08-26T15:40:00Z"
last_post: "2020-08-26T15:40:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:29:14Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Turtlehead bugs out

## Post 7355 by Jordus — 2020-08-26T15:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7355#p7355 | page 1 | era: pre-1.18.1 -->

When I search for Glyph of Hardcore on the DataBase it bugs out giving me a a list of issues.

 1 of those is:

Fatal error: Uncaught Error: Call to a member function fetch_assoc() on boolean in /home/twweb/www_db/includes/mysql.php:360 Stack trace: #0 /home/twweb/www_db/includes/mysql.php(590): MYSQL_Database->_performQuery(Array) #1 /home/twweb/www_db/includes/mysql.php(749): MYSQL_Database->_query(Array, false) #2 /home/twweb/www_db/item.php(377): MYSQL_Database->select('\n\t\t\tSELECT c.?#...', Array, -INF, -INF, NULL) #3 /home/twweb/www_db/index.php(105): include('/home/twweb/<www>...') #4 {main} thrown in /home/twweb/www_db/includes/mysql.php on line 360

