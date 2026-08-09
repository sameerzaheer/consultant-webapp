---
title: Geospatial Wind-Siting ML System
client: Power generator
role: Forward Deployed Engineer — Palantir
category: foundry
platform: Palantir Foundry
order: 1
featured: true
heroMetric: "Site screening cut from ~1 month to ~1 hour"
techStack:
  - PySpark
  - Random Forest
  - Spatial cross-validation
  - NREL & meteorological data
  - LLM rationale generation
problem: >-
  Screening candidate sites for wind energy projects meant pulling
  together meteorological, grid, and terrain data by hand and running it
  through manual analysis — roughly a month of analyst time per round of
  site selection, with the reasoning behind each recommendation living in
  someone's head or a slide deck rather than the system itself.
approach: >-
  Built PySpark pipelines over NREL, meteorological, and grid data to
  screen and rank candidate sites automatically, validated with spatial
  cross-validation to avoid the geographic leakage that makes standard
  cross-validation misleading for siting problems. Random Forest was
  chosen deliberately over a deep learning approach — the client needed to
  be able to interrogate why a site scored the way it did, not just trust
  a number, and a Random Forest's feature importances support that in a
  way a black-box model doesn't. An LLM-generated rationale layer then
  turns the model's output into a readable explanation for each
  recommendation. The approach is patented (US 20240394296).
outcome: >-
  Site screening dropped from roughly a month to about an hour, and the
  system has been used across 5-10 site selections since — with an
  interpretable model the client's engineers can actually question and
  trust.
---
