---
title: "Website Talent Calculator Tooltip Offset Issue"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24431"
topic_id: 24431
forum_id: 3
forum: "Help & Support"
author: "Scattyau"
author_authority: "player"
posted: "2026-03-23T05:59:00Z"
last_post: "2026-03-23T05:59:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T08:36:26Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Website Talent Calculator Tooltip Offset Issue

## Post 171869 by Scattyau — 2026-03-23T05:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171869#p171869 | page 1 | era: post-1.18.1 -->

Bug: Talent tooltips rendering off-screen

Root cause: The tooltip <div> elements are rendered as siblings to their talent buttons inside a <form> element. In CSS, any ancestor with certain properties (in this case the form acting as a containing block) causes position: fixed children to be positioned relative to that ancestor rather than the viewport. This offsets every tooltip by the form's left/top position (~340px right, ~100px down), sending them off-screen.
The broken behaviour: Tooltip has position: fixed with e.g. left: 423px set, but renders at left: 764px because the form's getBoundingClientRect().left of ~340px is being added on top.
Fix: Tooltip elements need to be rendered outside the form — either:

Move them to a portal anchored to document.body (the standard React pattern for this exact problem — ReactDOM.createPortal(<Tooltip />, document.body)), or
If the form's containing block behaviour can't be avoided, account for the offset when calculating left/top

Option 1 is the clean fix. The tooltip components should already be good candidates for portals given they're position: fixed overlays.

Until the Devs fix it, here's a drop-in for your console (F12, console normally at bottom, may need to allow pasting first)
Code: Select all

```
(function() {
const pad = 12;

// Reparent all talent tooltips to body so position:fixed anchors to viewport
// (they're currently inside a <form> which offsets fixed positioning)
const tooltips = [...document.querySelectorAll('div.fixed.z-10.pointer-events-none')];
tooltips.forEach(t => document.body.appendChild(t));

// Re-pair each tooltip with its button by DOM order and attach positioning
const rows = document.querySelectorAll('[class*="grid-cols-[repeat(4"]');
let idx = 0;
rows.forEach(row => {
[...row.children].forEach(child => {
if (child.tagName === 'BUTTON' && idx < tooltips.length) {
const tooltip = tooltips[idx++];
const position = e => {
let x = e.clientX + pad, y = e.clientY + pad;
if (x + tooltip.offsetWidth  > window.innerWidth)  x = e.clientX - tooltip.offsetWidth  - pad;
if (y + tooltip.offsetHeight > window.innerHeight) y = e.clientY - tooltip.offsetHeight - pad;
tooltip.style.left = Math.max(0, x) + 'px';
tooltip.style.top  = Math.max(0, y) + 'px';
};
child.addEventListener('mouseenter', position);
child.addEventListener('mousemove',  position);
}
});
});

console.log('Tooltip fix applied:', idx, 'talents,', tooltips.length, 'tooltips');
})();
```

