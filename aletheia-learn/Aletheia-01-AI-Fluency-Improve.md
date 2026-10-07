---
title: "Aletheia Improve – AI Fluency Course"
document_id: "aletheia-improve-ai-fluency-2026-10-07"
version: "1"
status: "completed"
document_class: "informative"
date: "2026-10-07"
---

# Aletheia Improve – AI Fluency Course

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, provenance and uncertainty.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional humour/positivity companion.

## Purpose

Apply the current Aletheia Improve workflow to the supplied Harvard/LinkedIn discovery material and current CS50x 2026 AI lecture, then create the smallest useful Aletheia implementation.

## Resolved target and ownership

**Decision: EXTEND EXISTING.**

- Learning experience belongs in `KarstenEvans/aletheia-app/aletheia-learn/`.
- Reusable factual concepts belong in `KarstenEvans/aletheia-knowledge/knowledge/aletheia-ai-knowledge.md`.
- No new Aletheia app, protocol or database is justified.
- No normative change to Aletheia Protocol is proposed.

Reason: Aletheia Learn already owns learning-by-doing, hint ladders, retry, transfer and independent evidence; Aletheia AI Knowledge already owns provider-neutral AI capability/workflow knowledge.

## Files read

- `aletheia-improve/aletheia-improve.md`
- `aletheia-learn/aletheia-learn.md`
- `aletheia-learn/aletheia-learn-page.md`
- `aletheia-learn/aletheia-learn-rsc.md`
- `aletheia-GUI.md`
- `aletheia-dev.md`
- Aletheia Apps `README.md`
- Aletheia Knowledge `README.md`
- `knowledge/aletheia-ai-knowledge.md`
- `knowledge/knowledge.json`
- Aletheia Protocol specification and README

## External research checked 7 October 2026

### Harvard Kennedy School

Archived Spring 2024 course:
https://generative-ai-course.hks.harvard.edu/spring-2024

Useful source concepts:

- Class 4: prompt anatomy as **Task, Instructions, Context (TIC)**.
- Class 5: system prompts, RAG and fine-tuning as distinct tailoring methods.
- Class 6: distinguish whether AI is useful from whether it should be deployed; consider task fit, privacy, alignment, cost of false information and alternatives.
- Class 8: broad risk categories and mitigation.
- Class 11: misinformation versus disinformation, with intent distinguishing the latter.

The current HKS site explicitly labels Spring 2024 as archived and states that its site content is CC BY 4.0 except where otherwise noted.

### CS50x 2026

Current Artificial Intelligence lecture:
https://cs50.harvard.edu/x/weeks/ai/
https://cs50.harvard.edu/x/notes/ai/

Useful source concepts:

- system prompt versus user prompt;
- generative AI as part of a wider AI/ML landscape;
- neural networks and LLMs;
- transformer/attention context;
- hallucinations / incorrect information.

## Evidence / inference / proposal separation

### SOURCE-BACKED

- HKS teaches TIC.
- HKS distinguishes system prompts, RAG and fine-tuning.
- HKS separates “can/fit” from “should/deploy”.
- CS50x 2026 covers prompt engineering, LLMs, transformers and hallucinations.
- HKS distinguishes misinformation from disinformation by intent.

### ALETHEIA SYNTHESIS

- **TOCC:** Task → Outcome → Context → Check.
- **FIT:** Fit → Impact → Testability.
- Use a provider-neutral knowledge layer with retrieval as an optional engine.
- Treat verification as part of the workflow rather than an optional afterthought.

These are Aletheia teaching constructs and must not be attributed to Harvard.

## Improvement applied

Created a complete provider-neutral course:

- `aletheia-learn-ai-fluency.md`

Course design:

1. baseline;
2. AI/LLM mental model;
3. TOCC;
4. persistent/system context;
5. RAG/retrieval/fine-tuning;
6. FIT;
7. hallucination and verification;
8. misinformation/disinformation;
9. risk/permissions;
10. real-work capstone and transfer.

The course follows Aletheia Learn rather than passive lecture consumption: attempt, smallest support, retry, check, transfer and independent evidence.

## Knowledge cards proposed/implemented

Five cross-provider cards:

- AI-511 — prompting is task design, not incantation;
- AI-512 — system context, RAG and fine-tuning solve different problems;
- AI-513 — “can AI do it?” and “should AI do it?” are separate decisions;
- AI-514 — fluent LLM output is not verified fact;
- AI-515 — misinformation and disinformation require different claims about intent.

## Not implemented in this pass

- no new HTML course reader;
- no new RAG/vector database;
- no provider-specific version of the course;
- no change to normative Aletheia Protocol;
- no automatic completion tracking backend.

These would add complexity before the Markdown course has been used and tested.

## Validation

- course includes both required protocol references;
- source dates and archived/current distinction are explicit;
- Harvard terminology is separated from Aletheia synthesis;
- no requirement for paid AI or a specific provider;
- no hidden-chain-of-thought requirement;
- course includes learning evidence and transfer rather than reading-only completion.

## Remaining test

Run the course in at least two different AI interfaces and record:

- whether Module 0 starts automatically;
- whether one learner action is requested at a time;
- whether H0-H5 hints are respected;
- whether ASSISTED vs INDEPENDENT is distinguished;
- whether the capstone produces a usable checkpoint.

## Resume point

If the Markdown course works in cross-provider testing, the next smallest improvement is a simple **AI Fluency** preset/button in the existing Aletheia Learn doorway. Do not build a separate course app.
