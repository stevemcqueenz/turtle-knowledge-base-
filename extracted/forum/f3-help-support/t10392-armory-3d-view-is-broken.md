---
title: "Armory 3D view is broken"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10392"
topic_id: 10392
forum_id: 3
forum: "Help & Support"
author: "Lolopreal"
author_authority: "player"
posted: "2023-10-01T05:47:00Z"
last_post: "2023-10-01T05:47:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:03:17Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Armory 3D view is broken

## Post 67852 by Lolopreal — 2023-10-01T05:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67852#p67852 | page 1 | era: pre-1.18.1 -->

I noticed that there are multiple assets being fetched that 404.
Looks like JSON that drives the models for characters and items?
ex: [https://wow.zamimg.com/modelviewer/clas ... 14378.json](https://wow.zamimg.com/modelviewer/classic/meta/armor/3/14378.json)

Or as they are got from the local site: Code: Select all

```
wmmv.js:14855 api/index.php?url=assetdownloader/get/a/meta/armor/5/8701.json
wmmv.js:14855 api/index.php?url=assetdownloader/get/a/meta/armor/6/34506.json
wmmv.js:14855 api/index.php?url=assetdownloader/get/a/meta/armor/7/16561.json
wmmv.js:14855 api/index.php?url=assetdownloader/get/a/meta/armor/8/16854.json
wmmv.js:14855 api/index.php?url=assetdownloader/get/a/meta/armor/9/17002.json
wmmv.js:14855 api/index.php?url=assetdownloader/get/a/meta/armor/10/17068.json
wmmv.js:14855 api/index.php?url=assetdownloader/get/a/meta/item/20398.json
```

The resulting errors look like: Code: Select all

```
wmmv.js:16715 Uncaught TypeError: Cannot read properties of undefined (reading 'features')
at new ModelViewer.Wow.CustomFeatures (wmmv.js:16715:26)
at Object.success (wmmv.js:13389:35)
at i (jquery.min.js:2:28017)
at Object.fireWith [as resolveWith] (jquery.min.js:2:28783)
at A (jquery.min.js:4:14035)
at XMLHttpRequest.<anonymous> (jquery.min.js:4:16323)

wmmv.js:13551 Bad magic value

7wmmv.js:14863 Uncaught TypeError: Cannot read properties of undefined (reading 'Flags')
at ModelViewer.Wow.Item.loadMeta (wmmv.js:14863:41)
at Object.success (wmmv.js:14857:18)
at i (jquery.min.js:2:28017)
at Object.fireWith [as resolveWith] (jquery.min.js:2:28783)
at A (jquery.min.js:4:14035)
at XMLHttpRequest.<anonymous> (jquery.min.js:4:16323)
```

