---
layout: base.njk
title: Notes
permalink: /notes/
---
{%- for post in collections.general %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}
