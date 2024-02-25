---
title: Bookmarks
layout: blog.njk
permalink: /bookmarks/
---
{%- for post in collections.bookmarks %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}
<a href="{{ post.data.link }}">{{ post.data.title }}</a>