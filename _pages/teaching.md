---
layout: page
permalink: /teaching/
title: teaching
description: Summaries and materials from my teaching and TA experiences.
nav: true
nav_order: 5
display_categories: [Project-Based Learning TA, Theory Education TA]  # 여기서 category 분류해서 보여줄거 지정하기
# horizontal: false
---

<!-- For now, this page is assumed to be a static description of your courses. You can convert it to a collection similar to `_projects/` so that you can have a dedicated page for each course.

Organize your courses by years, topics, or universities, however you like! -->


<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized teaching -->
  {% for category in page.display_categories %}
  <a id="{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_teaching = site.teaching | where: "category", category %}
  {% assign sorted_teaching = categorized_teaching | sort: "date" | reverse %}
  <!-- Generate cards for each teaching -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1">
    {% for teaching in sorted_teaching %}
      {% include teaching_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1">
    {% for teaching in sorted_teaching %}
      {% include teaching.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display teaching without categories -->

{% assign sorted_teaching = site.teaching | sort: "date" | reverse %}

  <!-- Generate cards for each teaching -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1">
    {% for teaching in sorted_teaching %}
      {% include teaching_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1">
    {% for teaching in sorted_teaching %}
      {% include teaching.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
