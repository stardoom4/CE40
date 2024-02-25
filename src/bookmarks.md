---
title: Bookmarks
layout: blog.njk
permalink: /bookmarks/
---
{%- for post in collections.bookmarks %}
* [{{ post.data.title }}]({{ post.url }})({{ post.data.link }})
{%- endfor %}
