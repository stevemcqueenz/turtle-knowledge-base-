---
title: "Forum translator"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23690"
topic_id: 23690
forum_id: 14
forum: "Suggestions"
author: "Alexianon"
author_authority: "player"
posted: "2026-01-21T14:09:00Z"
last_post: "2026-01-21T14:09:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T11:05:24Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Forum translator

## Post 165849 by Alexianon — 2026-01-21T14:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165849#p165849 | page 1 | era: 1.18.1-announced-pre-release -->

Hello.

I spent two weeks in Azeroth, and that was about 20 years ago. So, I can say that this is my first time playing in this universe, and I'm enjoying it (even though I'm only level 21 :) ). Thanks to the team and the gaming community for that

I couldn't find where to write a technical proposal, so I'm writing it here, as well as the implementation method (once did this for phpbb)

I suggest adding Google Translate to the forums (translation without reloading the page, similar to Chrome, which will add functionality for users using other browsers)

It only requires a few steps:

 1. Include two scripts:

[https://translate.google.com/translate_ ... nslateInit](https://translate.google.com/translate_a/element.js?cb=TranslateInit)

and (starting language: English)
Code: Select all

```
const googleTranslateConfig = {
lang: "en",
};

function TranslateInit() {
let code = TranslateGetCode();
$('[data-google-lang="' + code + '"]').addClass('language__img_active');

if (code == googleTranslateConfig.lang) {
TranslateClearCookie();
}

new google.translate.TranslateElement({
pageLanguage: googleTranslateConfig.lang,
});

$('[data-google-lang]').click(function () {
TranslateSetCookie($(this).attr("data-google-lang"))
window.location.reload();
});
}

function TranslateGetCode() {
let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
return lang.substr(-2);
}

function TranslateClearCookie() {
$.cookie('googtrans', null);
$.cookie("googtrans", null, {
domain: "." + document.domain,
});
}

function TranslateSetCookie(code) {
$.cookie('googtrans', "/auto/" + code);
$.cookie("googtrans", "/auto/" + code, {
domain: "." + document.domain,
});
}
```

 2.  Add styles (this is just an example, but the main thing is located at the end: it hides highlighting and translator elements):
Code: Select all

```
.language__img {
margin: 2px;
cursor: pointer;
opacity: .5;
font-weight: bold;
}

.language__img:hover,
.language__img_active {
opacity: 1;
color: #0369CB;
font-weight: bold;
}

.skiptranslate {
display: none !important;
height: 0%;
}

.goog-text-highlight {
background-color: transparent !important;
border: none !important;
box-shadow: none !important;
}

.goog-te-banner-frame.skiptranslate {
display: none !important;
}
```

 3. Add to page: Code: Select all

```
<a data-google-lang="en" class="language__img"><span class="notranslate">EN</span></a>
<a data-google-lang="zh-CN" class="language__img"><span class="notranslate">CN</span></a>
<a data-google-lang="ru" class="language__img"><span class="notranslate">RU</span></a>
<a data-google-lang="de" class="language__img"><span class="notranslate">DE</span></a>
<a data-google-lang="es" class="language__img"><span class="notranslate">ES</span></a>
<a data-google-lang="uk" class="language__img"><span class="notranslate">UA</span></a>
```

Thx, WBR

