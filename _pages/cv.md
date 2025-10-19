---
# layout: cv
# layout: page
layout: default
permalink: /cv/
title: cv
nav: true
nav_order: 6
# cv_pdf: CV_JeonghoonPark.pdf  # /assets/pdf/안에 있어야함
cv_pdf: https://drive.google.com/file/d/1I9_mLarky-ie7kCpFxayDdNngEZmmGyG/view?usp=sharing  # you can also use external links here
description: 
# toc:
  # sidebar: left
---

<h1 class="post-title">
CV - 
<a
  {% if page.cv_pdf contains '://' %}
    href="{{ page.cv_pdf }}"
  {% else %}
    href="{{ page.cv_pdf | prepend: 'assets/pdf/' | relative_url }}"
  {% endif %}
  target="_blank"
  rel="noopener noreferrer"
>
  <i class="fa-solid fa-file-pdf"></i>
</a>
</h1>

<br>

<iframe 
    src="https://drive.google.com/file/d/1I9_mLarky-ie7kCpFxayDdNngEZmmGyG/preview"
    width="100%" 
    height="800px" 
    style="border: none;"
    frameborder="0"
>
</iframe>