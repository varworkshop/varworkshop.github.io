---
layout: about
title: Home
permalink: /
subtitle: Workshop @ CVPR 2025

news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---
![]({{ "/assets/img/cvpr2025_nashville_tn.jpeg" | relative_url }}){:style="margin:auto; display:block;width:100%"}

Computer vision has made immense progress in offline image and video understanding in recent years. In contrast, the ability of an AI system to truly comprehend and reason over a scene that is unfolding in real-time and in the real world is only starting to become reality. Progress in this area can have a huge impact by supporting daily tasks, such as cooking, health, fitness, driving, home improvement, and many others.

This workshop seeks to serve as a forum for discussing recent progress and open challenges towards vision-based assistance for daily tasks and the technology to enable it. The VAR workshop features an exciting lineup of speakers and live demonstrations of existing systems (see [Call for Demos and Papers](/al-folio/Calls/)).

Additionally, as there are limited datasets and benchmarks for real-world vision-based assistants, the VAR workshop will host two new challenges designed to foster the development of such systems (see [Challenges](/al-folio/Challenges/)).

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