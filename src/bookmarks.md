---
title: Bookmarks
layout: blog.njk
permalink: /bookmarks/
---
{%- for post in collections.bookmarks %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}
<hr>
<ul>
{% for post in collections.bookmarks %}
	<li>
		<a href="{{post.url}}">{{ post.data.title }}</a>
		<p>{{ post.templateContent | striptags(true) | truncatewords(440) | safe }}</p>
	</li>
{% endfor %}
</ul>