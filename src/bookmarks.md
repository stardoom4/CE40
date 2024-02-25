---
title: Bookmarks
layout: blog.njk
permalink: /bookmarks/
---
{%- for post in collections.bookmarks %}
<a href="{{ post.data.link }}">{{ post.data.title }}</a>
{%- endfor %}
