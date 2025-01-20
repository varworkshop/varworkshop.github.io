---
layout: about
title: Home
permalink: /
subtitle: Workshop @ CVPR 2025

news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---
![]({{ "/assets/img/profile.png" | relative_url }}){:style="margin:auto; display:block;width:100%"}

Humans interact with the world as they move through and engage with their surroundings. There is a vast potential to improve these interactions through research aimed at developing vision-based cooking-, voice-, fitness-, health-, driving-, embodied- assistants. Such assistants could help us by providing interactive and detailed instructions in real-time or by taking over daily life tasks. 

This workshop seeks to serve as a forum for discussing challenges of developing vision-based assistants for daily tasks. To this end, the VAR workshop features an exciting lineup of speakers and live demonstrations of vision-based assistants (see [Call for Demos and Papers](/al-folio/DemosandPapers/)).

Additionally, as there are limited datasets and benchmarks for real-world vision-based assistants, the VAR workshop will host two challenges designed to foster the development of real-world vision-based assistants (see [Challenges](/al-folio/Challenges/)).

<br/>

## News 

<div class="news">
  {% if site.news != blank %}
    {% assign news_size = site.news | size %}
    <div
      class="table-responsive"
      {% if include.limit and site.announcements.scrollable and news_size > 3 %}
        style="max-height: 60vw"
      {% endif %}
    >
      <table class="table table-sm table-borderless">
        {% assign news = site.news | reverse %}
        {% if include.limit and site.announcements.limit %}
          {% assign news_limit = site.announcements.limit %}
        {% else %}
          {% assign news_limit = news_size %}
        {% endif %}
        {% for item in news limit: news_limit %}
          <tr>
            <th scope="row" style="width: 20%">{{ item.date | date: '%b %d, %Y' }}</th>
            <td>
              {% if item.inline %}
                {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
              {% else %}
                <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
              {% endif %}
            </td>
          </tr>
        {% endfor %}
      </table>
    </div>
  {% else %}
    <p>No news so far...</p>
  {% endif %}
</div>

<br/>

## Confirmed Speakers

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <a id="{{ category }}" href=".#{{ category }}">
        <h2 class="category">{{ category }}</h2>
      </a>
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-4">  <!-- Modified to 4 columns -->
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-4"> <!-- Modified to 4 columns -->
          {% for project in sorted_projects %}
            {% include projects.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}

    <!-- Display projects without categories -->

    {% assign sorted_projects = site.projects | sort: "importance" %}

    <!-- Generate cards for each project -->

    {% if page.horizontal %}

      <div class="container">
        <div class="row row-cols-1 row-cols-md-4"> <!-- Modified to 4 columns -->
        {% for project in sorted_projects %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-4"> <!-- Modified to 4 columns -->
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>