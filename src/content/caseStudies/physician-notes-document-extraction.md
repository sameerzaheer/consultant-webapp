---
title: Physician Notes & Medical Forms Document Extraction
client: CPCG — US pharmacy & clinic services provider
clientUrl: https://www.cpcgr.com/
role: AI/ML Consultant — AutomateThis
category: consulting
order: 1
featured: true
heroMetric: "Replaced a department's manual workload"
techStack:
  - OCR
  - Browser automation
  - LLM extraction
  - Confidence-threshold routing
  - Human-in-the-loop review
problem: >-
  CPCG, a pharmacy and clinic services provider, had a department manually
  transcribing structured data out of physician notes and medical intake
  forms — handwritten and typed, inconsistent formats, no two clinics
  filling them out the same way. It was slow, it didn't scale with volume,
  and it was the kind of task nobody wanted to own long-term.
approach: >-
  Built a document extraction pipeline that combines OCR and LLM-based
  field extraction, but the core design decision was around trust, not
  accuracy on paper: every extracted field carries a confidence score, and
  anything below threshold routes to a human reviewer instead of silently
  shipping a wrong answer. That routing logic — not the extraction model
  itself — is what made the system safe to put in front of a real clinical
  workflow.
outcome: >-
  The system now handles the department's extraction workload end-to-end,
  with low-confidence cases surfaced for review rather than guessed at.
  What used to be a full-time manual transcription function is now a
  review queue that only sees the cases that actually need a human.
---
