---
layout: page
title: About
permalink: /about/
weight: 3
---
#  **About Me**
<p align="center">

  <a href="{{ site.baseurl }}">
    <img src="{{ site.author.image_about }}" alt="{{ site.title }}" width="168px" height="168px" style="display:flex;">
  </a>
<br>
Hi I am <b>{{ site.author.name }}</b> :wave:,<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>

<div class="row">
{% include about/skills.html title="Microsoft Skills" source=site.data.microsoft-skills %}
{% include about/skills.html title="Google Skills" source=site.data.google-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>
