---
layout: page
title: About
permalink: /about/
weight: 4
background: "/assets/img/bg-about.jpg"
description: A blog about tutorials, graphic design, technology, stories and more
---

<p align="center">
    <img src="{{ site.author.image }}" alt="{{ site.title }}" width="168px" height="168px" class="circle-image-profile wow animated zoomIn" data-wow-delay=".1s" style="display:flex;">
<br>

Hi I am <b>{{ site.author.name }}</b> :wave:,<br>
a dedicated <b>Multimedia</b> graduate from <b>Ma'arif NU 03 Larangan Vocational School</b>. With a robust foundation in multimedia technologies and creative design, I bring a blend of technical expertise and artistic vision to every project. I have interests and hobbies in the field of IT, graphic design and amateur programming.  I also accept freelance work.<br>Please contact me at the contact below if you need graphic design services or anything else.
</p>

<p class="text-center"> {% include social.html %} </p>
<br>
<p class="text-center">{% include elements/button.html link="/resumes" text="View My CV" style="primary" size="lg" %} 
<br>
{% include elements/button.html link="/pay/donate" text="Donate Me" size="sm" %} </p>   
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
