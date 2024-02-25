---
title: Bookmarks
layout: blog.njk
permalink: /bookmarks/
---
{%- for post in collections.bookmarks %}
<li>
<a href="{{ post.data.link }}">{{ post.data.title }}</a>
</li>
{%- endfor %}
