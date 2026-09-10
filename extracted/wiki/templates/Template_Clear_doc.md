---
title: "Template:Clear/doc"
url: "https://turtle-wow.fandom.com/wiki/Template:Clear/doc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-19T16:52:17Z"
fetched: "2026-09-10T07:40:22Z"
is_turtle_content: false
patch: null
categories: ["Template documentation"]
---
# Template:Clear/doc

**Description**
This template allows you to clear the left side, right side, or both sides of the page. Clearing means that the content following the template will not be displayed until the existing content on the specified sides (for example, "hanging" or floating images or blocks) is displayed completely. This template is often used so that the text does not flow around unrelated images.

The template adds the following code to the page: <code><nowiki></nowiki></code> (the value after <code>clear</code> depends on the parameters). This code affects elements with the CSS property <code>float</code>, including files floated to the side (for example, <code><nowiki></nowiki></code>).

**Syntax**
- To clear both sides of the page, add the code .
- To clear only the left side of the page, add the code .
- To clear only the right side of the page, add the code .

You can also use  instead of  as a shorthand call for this template.
__NOTOC__
**Example **
<pre style="display:table">

### Section 1
Section 1 text.

### Section 2
Section 2 text.

### Section 3
Section 3 text.
</pre>

This code produces the following result:

----

### Section 1
Section 1 text.

### Section 2
Section 2 text.

### Section 3
Section 3 text.

----

As you can see above, the example image added in section 1 is displayed to the right and extends down through section 2, while the  template is called at the end of the second section, resulting in the example image not being next to section 3. Thus, one use of the  template is to control which elements are displayed next to which other elements.

## See also
- [CSS property <code>clear</code> on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
- [CSS property <code>float</code> on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

<includeonly></includeonly><noinclude></noinclude>
