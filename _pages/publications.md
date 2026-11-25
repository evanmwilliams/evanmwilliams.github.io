---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
<!-- Entries are grouped by the custom `category` field in papers.bib
     (category = {conference}, {workshop}, or {review}).
     A section is only rendered if it has at least one matching entry. -->

{% capture conference_count %}{% bibliography_count --query @*[category=conference] %}{% endcapture %}
{% capture workshop_count %}{% bibliography_count --query @*[category=workshop] %}{% endcapture %}
{% capture review_count %}{% bibliography_count --query @*[category=review] %}{% endcapture %}

{% if conference_count != "0" %}

## Refereed Conference Proceedings

<div class="publications">

{% bibliography --query @*[category=conference] %}

</div>

{% endif %}

{% if workshop_count != "0" %}

## Refereed Workshop Publications

<div class="publications">

{% bibliography --query @*[category=workshop] %}

</div>

{% endif %}

{% if review_count != "0" %}

## Under Review

<div class="publications">

{% bibliography --query @*[category=review] %}

</div>

{% endif %}
