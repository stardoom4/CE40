---
layout: base.njk
title: Notes
permalink: /notes/
---
{%- for post in collections.general %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}

<details>
  <summary>Summary, caption, or legend for the content</summary>
  Content goes here.
</details>
