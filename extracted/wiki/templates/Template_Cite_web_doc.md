---
title: "Template:Cite web/doc"
url: "https://turtle-wow.fandom.com/wiki/Template:Cite_web/doc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-19T16:52:17Z"
fetched: "2026-09-10T07:40:22Z"
is_turtle_content: false
patch: null
categories: ["Template documentation"]
---
# Template:Cite web/doc

__NOTOC__
This template is used to [cite sources](Wikipedia:WP:CITE) in Wikipedia. It is specifically for web sites which are not news sources. This template replaces deprecated [template:web reference](Wikipedia:Template:Teb reference). It provides lower case parameters only.  

A general discussion of the use of templates for adding citation of open-source web content to Wikipedia articles is available at [citation templates](Wikipedia:Citation templates).

This page uses [Creative Commons Licensed](w:Wikia:Licensing) content from [Wookieepedia](w:c:Wookieepedia:Template:Cite web)

## Usage
**Common form for cases where little is known about authorship of the page (with current date)**
<tt><nowiki></nowiki></tt>

**Using last, first (with current date)**
<tt><nowiki></nowiki></tt>

**Using author (with current date)**
<tt><nowiki></nowiki></tt>

**Using non-linked retrieved date, last, first**
<tt><nowiki></nowiki></tt>

**Using non-linked retrieved date, author**
<tt><nowiki></nowiki></tt>

**All parameters, horizontal format (delete the ones you don't need)**
<tt><nowiki></nowiki></tt>

**All parameters, vertical format**
<pre></pre>

### Required parameters
- **url**: URL of online item.
- **title**: Title of online item.
*For producing a [wikilinked date](Wikipedia:WP:CONTEXT#Dates) of retrieval:*
  * **accessdate**: Full date when item was accessed, in [ISO 8601](Wikipedia:ISO 8601) YYYY-MM-DD format, for example "accessdate = --". *Must not be wikilinked*
*For producing a non-wikilinked date of retrieval:*
  * **accessmonthday** and **accessyear**: Month and day when item was accessed, for example "accessmonthday = May 10", <u>and</u> year when item was accessed, for example "accessyear = 2005". Produces: *Retrieved on May 10, 2006.*
  * **accessdaymonth** and **accessyear**: Month and day when item was accessed, for example "accessmonthday = 10 May", <u>and</u> year when item was accessed, for example "accessyear = 2005". Produces: *Retrieved on 10 May 2006.*

### Optional parameters
- **author**: Author
  - **last** works with **first** to produce <code>last, first</code>
  - **authorlink** works either with **author** or with **last** & **first** to link to the appropriate wikipedia article. Does not work with URLs.
  - **coauthors**: allows additional authors
- **date**: Full date of publication, preferably in [ISO 8601](Wikipedia:ISO 8601) YYYY-MM-DD format, e.g. *2006-02-17*. May be wikilinked.
  - OR:  **year**: Year of publication, and **month**: Name of the month of publication. If you also have the day, use *date* instead. Must not be wikilinked.
- **format**: Format, e.g. PDF.  HTML implied if not specified.
- **work**: If this item is part of a larger work, name of that work.
- **publisher**: Publisher, if any.
- **pages**: *pp. 5–7*: first page and optional last page. This is for listing the pages relevant to the citation, not the total number of pages in the book.  This is especially useful for PDF format, where the page can be linked to with the <code>#page=*number*</code> anchor tagged on the end of the URL: 
- : <code><nowiki>pages = [p. 123](http://www.example.org/file.pdf#page=123)</nowiki></code>
- **language**: language of publication (don't specify "English" as this is the default).
- **archiveurl**: URL of the archive location of the item (requires **archivedate**)
- **archivedate**: Date when the item was archived (requires **archiveurl**), in [ISO 8601](Wikipedia:ISO 8601) YYYY-MM-DD format, e.g. *2006-02-17*. Must not be wikilinked; it will be linked automatically.
- **quote**: Relevant quote from online item.

## Examples
**Some standard use cases**
- <nowiki></nowiki>
→ 

- <nowiki></nowiki>
→ 

- <nowiki></nowiki>
→ 

- <nowiki></nowiki>
→ 

- <nowiki></nowiki>
→ 

- <nowiki></nowiki>
→ 

**Non-linking date of retrieval (using accessmonthday and accessyear)**
- <nowiki></nowiki>
 → 

**Using format**
- <nowiki></nowiki>
 → 

**language**
- <nowiki></nowiki>
→ 

**coauthors**
- <nowiki></nowiki>
→ 

**No author**
- <nowiki></nowiki>
→ 

**No author, no publisher**
- <nowiki></nowiki></br>→ 

- <nowiki></nowiki>
→ 

- <nowiki></nowiki>
 → 

** Using archiveurl and archivedate to refer to items that went away but are available from an archive site**
- <nowiki></nowiki>
 → 

- <nowiki>
</nowiki>
 → 

** Using quote**
- <nowiki></nowiki>
→ 

**No parameters (error)**
- <nowiki></nowiki>
→ 

<includeonly></includeonly><noinclude></noinclude>
