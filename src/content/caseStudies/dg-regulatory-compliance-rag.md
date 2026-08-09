---
title: DG Compliance RAG & Verification
client: Nidral — dangerous-goods regulatory compliance
role: AI/ML Consultant — AutomateThis
category: consulting
order: 3
featured: true
heroMetric: "Automated DG firm's customer response system"
techStack:
  - RAG
  - LLM-as-judge
  - Retrieval
  - LLM hallucination
problem: >-
  Companies shipping dangerous goods need fast, accurate answers to
  regulatory questions spread across dense, jurisdiction-specific policy
  documents. Manual lookup doesn't scale, and getting an answer wrong
  isn't a cosmetic mistake — it's a compliance failure.
approach: >-
  We built Nidral a RAG framework that retrieves the specific regulations
  and policy documents relevant to a compliance question, then generates
  an answer grounded in that retrieved text. Every generated answer passes
  through an LLM-as-judge layer that checks it against the source
  documents before it's returned — the same verifiable-over-flashy
  approach as the confidence-threshold routing in the document extraction
  case study, applied to a domain where a confident-sounding wrong answer
  carries real regulatory risk.
outcome: >-
  Every answer is checked against its source material before a user sees
  it, rather than trusting the model's word for it — the verification
  layer that makes the system usable for a compliance decision, not just
  a plausible-sounding one.
---
