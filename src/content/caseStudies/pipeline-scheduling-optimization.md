---
title: Pipeline-Scheduling Optimization
client: Petroleum midstream provider
role: Forward Deployed Engineer — Palantir
category: foundry
platform: Palantir Foundry
order: 2
featured: true
heroMetric: "~3x cut in human time, ~2x energy savings"
techStack:
  - Digital Twin
  - Physics simulation
  - State estimation
  - OR-Tools
  - Optimization
problem: >-
  A petroleum midstream client needed to schedule pipeline operations
  against real physical and commercial constraints — tank sizes,
  commodity value, power use — a combinatorial problem that was being
  worked through manually, consuming significant operator time and
  leaving energy savings on the table.
approach: >-
  Built a full-system simulation of pipeline operations under the client's
  real constraints, rather than a combinatorial solver. The simulation
  approach was a deliberate tradeoff: a solver might find a marginally
  better schedule, but a simulation the operations team can inspect,
  adjust, and trust is more valuable — and more maintainable — for a
  system that has to keep running after the delivery team leaves.
outcome: >-
  Cut the human time required for scheduling by roughly 3x and reduced
  energy use by roughly 2x, while keeping the scheduling logic transparent
  enough for the client's own team to operate and adjust.
---
