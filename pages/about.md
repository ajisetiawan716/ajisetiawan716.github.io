---
layout: page
title: About
permalink: /about/
weight: 4
---

<p align="center">
  <a href="{{ site.baseurl }}">
    <img src="{{ site.author.image }}" alt="{{ site.title }}" width="168px" height="168px" style="display:flex;">
  </a>
<br>

Hi I am <b>{{ site.author.name }}</b> :wave:,<br>
I am a student at <b>STIES Putera Bangsa Tegal</b> with a study focus in Islamic economics in the <b>Sharia Business Management</b> study program. I have interests and hobbies in the field of IT, graphic design and amateur programming.  I also accept freelance work.<br>Please contact me at the contact below if you need graphic design services or anything else.
</p>

<p class="text-center"> {% include social.html %} </p>
<p class="text-center">
<a class="m-1 btn btn-outline-primary btn-3 " href="#" id="buttonmodal">
  Donate Me
</a></p>
<br>
<br>
### **My Skills**

<div class="row">
{% include about/skills.html title="Native Languages" source=site.data.native-languages %}
{% include about/skills.html title="Programming Languages" source=site.data.programming-skills %}
</div>
<div class="row">
{% include about/skills.html title="Microsoft Skills" source=site.data.microsoft-skills %}
{% include about/skills.html title="Google Skills" source=site.data.google-skills %}
</div>
<div class="row">
{% include about/skills.html title="Adobe Skills" source=site.data.adobe-skills %}
</div>
<div class="row">
{% include about/skills.html title="Affinity Skills" source=site.data.affinity-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

{% include about/timeline.html %}

<br>
