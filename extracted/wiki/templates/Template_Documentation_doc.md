---
title: "Template:Documentation/doc"
url: "https://turtle-wow.fandom.com/wiki/Template:Documentation/doc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-19T16:52:17Z"
fetched: "2026-09-10T07:40:23Z"
is_turtle_content: false
patch: null
categories: ["Template documentation"]
---
# Template:Documentation/doc

## Description
This template is used to insert descriptions on template pages.

## Syntax
Add <code><nowiki><noinclude></nowiki><nowiki></noinclude></nowiki></code> at the end of the template page.

Add <code><nowiki><noinclude></nowiki><nowiki></noinclude></nowiki></code> to transclude an alternative page from the /doc subpage.

## Usage
### On the Template page
This is the normal format when used:

<pre>
TEMPLATE CODE
<includeonly>Any categories to be inserted into articles by the template</includeonly>
<noinclude></noinclude>
</pre>

*If your template is not a completed div or table, you may need to close the tags just before <code><nowiki></nowiki></code> is inserted (within the noinclude tags).*

*A line break right before <code><nowiki></nowiki></code> can also be useful as it helps prevent the documentation template "running into" previous code.*

### On the documentation page
The documentation page is usually located on the /doc subpage for a template, but a different page can be specified with the first parameter of the template (see [Syntax](#Syntax)).

Normally, you will want to write something like the following on the documentation page:

<pre>
## Description
This template is used to do something.

## Syntax
Type <code></code> somewhere.

## Samples
<code>&lt;nowiki>&lt;/nowiki></code> 

results in...

<includeonly>Any categories for the template itself</includeonly>
<noinclude></noinclude>
</pre>

Use any or all of the above description/syntax/sample output sections. You may also want to add "see also" or other sections.

Note that the above example also uses the [Template:T](Template:T) template.

<includeonly></includeonly><noinclude></noinclude>
