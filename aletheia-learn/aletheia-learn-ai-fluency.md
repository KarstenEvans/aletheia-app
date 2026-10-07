---
title: "Aletheia Learn – AI Fluency"
system_id: "aletheia-learn-ai-fluency"
version: "0.1.0"
artifact_type: "guided-learning-course"
parent_app: "Aletheia Learn"
status: "working course"
created: "2026-10-07"
sources_checked: "2026-10-07"
---

# Aletheia Learn – AI Fluency

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, provenance, uncertainty and correction.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional humour and positivity-first presentation; never an evidence layer.

**Purpose:** learn enough about modern AI to use it deliberately, test it, and know when not to trust or deploy it.

**Parent app:** [Aletheia Learn](aletheia-learn.md)

This is not a video directory and not a prompt-trick collection. The learner should repeatedly **do something**, inspect the result, improve it and show transfer.

## Source note

This course was created from an Aletheia Improve pass using:

- Harvard Kennedy School, *The Science and Implications of Generative AI*, archived Spring 2024 course:
  https://generative-ai-course.hks.harvard.edu/spring-2024
- HKS Class 4, Prompt engineering:
  https://generative-ai-course.hks.harvard.edu/2-using-genai/class-4
- HKS Class 5, Beyond chatbots:
  https://generative-ai-course.hks.harvard.edu/2-using-genai/class-5
- HKS Class 6, When and how to use generative AI:
  https://generative-ai-course.hks.harvard.edu/2-using-genai/class-6
- HKS Class 8, Risks of generative AI:
  https://generative-ai-course.hks.harvard.edu/society/class-8
- HKS Class 11, Mis/disinformation:
  https://generative-ai-course.hks.harvard.edu/society/class-11
- CS50x 2026, Artificial Intelligence lecture and notes:
  https://cs50.harvard.edu/x/weeks/ai/
  https://cs50.harvard.edu/x/notes/ai/

Harvard HKS describes its Spring 2024 material as an archived course and states that site content is CC BY 4.0 except where otherwise noted. This Aletheia course paraphrases and reorganises ideas rather than reproducing lecture text. CS50 material is linked as a current technical reference rather than copied.

---

## AI LOADER INSTRUCTIONS

```text
[ALETHEIA_AI_FLUENCY_INIT]
VERSION: 0.1.0
PARENT: ALETHEIA LEARN

1. Run this as an interactive Aletheia Learn course, not as a document summary.
2. Start with Module 0 unless the learner asks for another module.
3. Use one meaningful learner action at a time.
4. Use the Aletheia Learn H0-H5 Hint Ladder. Do not jump to the full answer unless the learner asks.
5. Distinguish ASSISTED performance from INDEPENDENT or TRANSFERRED evidence.
6. Ask for concise explanations, decisions, examples or checks. Do not ask the learner or model to reveal private chain-of-thought.
7. Keep the course provider-neutral. Product-specific examples are examples, not required dependencies.
8. If a provider capability is time-sensitive, verify it from a current primary source when tools are available; otherwise label it UNVERIFIED.
9. When a learner asks ANS / ANSWER NOW / JUST TELL ME, answer directly, then offer a transfer check.
10. Safety-critical or consequential questions get the useful answer first; do not withhold it for pedagogy.
11. At the end of each module, record one state: NEW, SUPPORTED, INDEPENDENT, TRANSFERRED or REVIEWED.
12. The course should remain useful with text chat alone.
[END_ALETHEIA_AI_FLUENCY_INIT]
```

## Course map

| Module | Skill | Typical time |
|---|---|---:|
| 0 | Baseline and goal | 5 min |
| 1 | What modern AI is doing | 15 min |
| 2 | TOCC: give AI a usable brief | 15 min |
| 3 | System context, user prompts and persistent instructions | 15 min |
| 4 | RAG, retrieval and fine-tuning | 15 min |
| 5 | FIT: should AI do this task? | 15 min |
| 6 | Hallucination, evidence and verification | 20 min |
| 7 | Misinformation, disinformation and provenance | 15 min |
| 8 | Risk, permissions and human control | 15 min |
| 9 | Capstone: build and test one real AI workflow | 25–40 min |

The learner may stop after any module. A completed course means demonstrated transfer, not merely reading all sections.

---

# Module 0 — Baseline: what do you want AI to help you do?

## Goal

Turn “learn AI” into one real capability.

Choose one real task such as:

- research a subject;
- improve a document;
- learn a new skill;
- compare options;
- analyse data;
- write or debug code;
- organise a project;
- prepare for an interview;
- check a claim;
- create a repeatable workflow.

## First attempt

Before the tutor explains anything, answer:

1. What task do you want AI to help with?
2. What would a **good** result look like?
3. What could go wrong if the answer were confidently wrong?

Keep these three answers. The same task will be revisited in Module 9.

**Independent evidence:** learner names a real goal, a success condition and at least one failure mode.

---

# Module 1 — What modern AI is doing

## Learn

CS50x 2026 presents modern AI as a much wider field than chatbots, including decision trees, machine learning, deep learning, large language models and generative AI. Its LLM notes describe models trained on very large amounts of data, using learned relationships between words/tokens to generate plausible continuations, and explicitly warn that LLMs can hallucinate and provide incorrect information.

The useful mental model is:

> **An LLM is a powerful pattern-and-prediction system, not an oracle or database of guaranteed facts.**

Transformers and attention help models use relationships across context. Training creates a model that can generate, transform, classify and reason over language-like patterns. None of that means every generated statement has been looked up or verified.

## Try

Ask an AI two questions:

A. “Rewrite this sentence more clearly: The meeting was moved because the room was unavailable.”

B. “What was the exact attendance at an obscure local meeting that happened yesterday?”

Before sending them, predict which task is safer for a model to do **from supplied text alone**, and explain why in one sentence.

## Check

A strong answer notices that A is mainly transformation of supplied material, while B requires fresh external evidence. Fluency does not remove the evidence gap.

## Transfer

Name one task in your own work that is mostly:
- transformation of known material; and
- factual retrieval that needs sources.

Do not treat them as the same type of AI job.

---

# Module 2 — TOCC: give AI a usable brief

## Learn

Harvard HKS Class 4 teaches the prompt anatomy **TIC: Task, Instructions, Context**.

Aletheia extends this for evidence-aware work into **TOCC**:

> **TASK → OUTCOME → CONTEXT → CHECK**

This is an Aletheia teaching pattern, not Harvard terminology.

### TASK
What should the AI do?

### OUTCOME
What does a useful result look like?

### CONTEXT
What information, constraints, audience, examples or source material does it need?

### CHECK
How will the result be tested?

A weak prompt often hides the outcome and check inside the user's head. TOCC makes them visible.

## Try

Improve this prompt without making it bloated:

> “Tell me about solar panels.”

Use TOCC to make it useful for one actual decision.

## Hint ladder

- **H1:** Pick a user and a decision.
- **H2:** Add location/budget/constraints only if they matter.
- **H3:** State how current claims should be checked.
- **H4 analogue:** “Compare three options for X for a person who needs Y; use current primary sources for changing facts and show the trade-off that decides between them.”

## Check

A good TOCC prompt is not necessarily long. It makes the job, success condition, relevant context and verification route clear.

## Transfer

Rewrite one prompt you genuinely used this week using TOCC. Then compare the outputs.

---

# Module 3 — System context, user prompts and persistent instructions

## Learn

CS50 distinguishes a **system prompt** from a **user prompt**: one sets enduring interaction rules; the other carries the immediate request.

Harvard HKS Class 5 similarly treats system prompts as a way to give a chatbot context that applies across interactions.

This is why repeatedly pasting the same rules is often a sign that the useful instruction belongs in a persistent project, agent, Gem, repository instruction file or portable bootstrap.

Aletheia's provider-neutral pattern is:

```text
DURABLE RULES
  + CURRENT TASK
  + RELEVANT CONTEXT
  + CURRENT EVIDENCE
  -> RESULT
```

Durable context should still be inspectable and removable. “Persistent” must not mean “secret and impossible to correct.”

## Try

Take these five instructions and split them into **durable context** versus **current task**:

- Always distinguish verified fact from inference.
- Summarise this specific PDF.
- Use British English.
- Compare section 4 with section 7.
- Never claim a web check unless one actually happened.

## Check

The stable behavioural rules belong in durable context. The specific PDF/sections belong to the current task.

## Transfer

Look at one recurring AI task you do. Identify one instruction you should stop retyping and store as portable project context instead.

---

# Module 4 — RAG, retrieval and fine-tuning are different tools

## Learn

Harvard HKS Class 5 separates three ways of tailoring AI:

- **system instructions:** persistent behavioural/context rules;
- **retrieval-augmented generation (RAG):** provide relevant external information at query time;
- **fine-tuning:** change model behaviour using training/comparison data.

Aletheia adds a crucial architectural distinction:

> **The durable knowledge is not the retrieval engine.**

Markdown, evidence records and source-traced cards can remain canonical. Search, embeddings, RAG or another retrieval service can be replaced.

A retrieval system answers: **“Which pieces should I give the model now?”**  
It does not automatically answer: **“Are those pieces true, current, complete or mutually consistent?”**

## Try

Match each problem to the simplest sensible tool:

1. “Always answer in plain English and cite source status.”
2. “Answer questions using our 400-page technical manual.”
3. “Make the model consistently imitate a specialised output format after many examples.”
4. “Find the exact policy paragraph that applies to this query.”

Possible tools: system context, retrieval/RAG, fine-tuning, anchor/exact retrieval.

## Check

Prefer the smallest mechanism that solves the problem. Do not fine-tune merely because the word sounds advanced.

## Transfer

Explain in two sentences why Aletheia Knowledge can use RAG without becoming “a RAG database.”

---

# Module 5 — FIT: can AI do this, and should it?

## Learn

Harvard HKS Class 6 explicitly separates whether generative AI **can** help from whether it **should** be deployed. It considers task characteristics such as personalisation, interaction, corpus size, creativity and demonstration data, then practical concerns including privacy, alignment clarity, the cost of false information and comparison with alternatives.

Aletheia compresses this into the **FIT Check**:

### F — FIT FOR THE TASK
Does generative AI add something useful here?

Consider:
- interaction;
- personalisation;
- large or messy text;
- creative variation;
- examples/demonstrations.

### I — IMPACT IF WRONG
What happens if the model is wrong, biased or leaks information?

Consider:
- privacy;
- false information;
- safety;
- financial/legal/reputational effect;
- effects on other people.

### T — TESTABILITY AND ALTERNATIVE
Can the output be checked before it matters, and is AI better than a simpler approach?

Consider:
- primary-source verification;
- deterministic tests;
- human review;
- a normal search/database/calculator;
- doing nothing.

FIT is an Aletheia synthesis inspired by the HKS criteria, not a Harvard acronym.

## Try

Run FIT on these three uses:

1. Brainstorm ten names for a garden club.
2. Automatically send medical advice to strangers without review.
3. Summarise a long internal policy for a staff member, with links back to the source sections.

Rank them from easiest to justify to hardest.

## Transfer

Run FIT on the real task from Module 0. Write one sentence for F, I and T.

---

# Module 6 — Hallucination means verification is part of the workflow

## Learn

CS50x 2026 explicitly warns that LLMs can hallucinate and produce incorrect information. Harvard's risk and misinformation sessions likewise treat inaccuracy as a real limitation, not a rare curiosity.

Aletheia's response is not “never use AI.” It is:

> **Match the check to the consequence.**

Examples:

- rewriting supplied prose: compare with the original;
- calculation: recalculate or use a calculator;
- code: run tests;
- current product feature: check primary documentation;
- historical claim: inspect reliable sources;
- legal/medical/high-impact decision: use authoritative material and qualified human review as appropriate.

A citation is not automatically verification. Check that the source really supports the precise claim.

## Try

Ask an AI for three factual claims about a subject you know moderately well.

For each claim mark:

- **SUPPORTED** — checked against a suitable source;
- **PROVISIONAL** — plausible but not yet checked;
- **REFUTED** — source contradicts it;
- **UNKNOWN** — you cannot establish it.

Do not use a fake numerical confidence score.

## Transfer

Take one answer you previously accepted because it “sounded right.” Describe the cheapest reliable test you could have applied.

---

# Module 7 — Misinformation, disinformation and provenance

## Learn

Harvard HKS Class 11 distinguishes:

- **misinformation:** incorrect, inaccurate or decontextualised information;
- **disinformation:** false information created/spread with intent to deceive or mislead.

That difference matters because **intent is an additional claim**.

Aletheia can often establish:

- the statement is unsupported;
- the statement conflicts with evidence;
- context was omitted;
- the source is misquoted;
- the claim is false or superseded.

It may **not** be able to establish that the speaker intentionally deceived.

This is exactly why Aletheia separates evidence, claims, hypotheses and conflicts.

## Try

Classify this carefully:

> A social post repeats an old statistic that is no longer current. You can verify that the number is outdated, but you have no evidence about why the person posted it.

What can you state? What must remain unknown?

## Check

You can normally say the claim is outdated/misleading in current context. You cannot automatically infer deceptive intent.

## Transfer

Rewrite one accusatory sentence such as “They lied about X” into an evidence-bounded statement that says exactly what can be demonstrated.

---

# Module 8 — Risk, permissions and human control

## Learn

Harvard HKS Class 8 groups generative-AI risk into broad categories including known limitations, misuse, society-wide disruption and existential risk, and discusses mitigation approaches.

For everyday Aletheia work, use the practical loop:

```text
ERROR -> ABUSE -> CONSEQUENCE -> CONTROL
```

Ask:

1. What can fail accidentally?
2. How could the capability be misused?
3. Who or what is affected?
4. What prevents, detects, limits or reverses the problem?

For action-capable AI, add the Aletheia permission ladder:

1. **READ / OBSERVE**
2. **DRAFT / PREVIEW**
3. **LOCAL / REVERSIBLE WRITE**
4. **EXTERNAL / CONSEQUENTIAL ACTION**

The ability to act does not create authority to act.

## Try

You are designing an AI that reads support emails and proposes replies.

Define:
- what it may read;
- what it may draft;
- whether it may send;
- one condition that must escalate to a human;
- what receipt/log should remain.

## Transfer

Apply the same permission ladder to one AI workflow you currently use or want to build.

---

# Module 9 — Capstone: build one real AI workflow

Return to the real task from Module 0.

## Step 1 — FIT

Write:

- **F:** Why is AI a fit for this task?
- **I:** What is the impact if it is wrong?
- **T:** How will you test the result, and what is the alternative?

If FIT says AI is a poor choice, redesign or stop. Choosing not to automate can be a successful capstone.

## Step 2 — TOCC

Create the smallest useful brief:

- **Task**
- **Outcome**
- **Context**
- **Check**

## Step 3 — Context architecture

Decide what belongs in:

- durable rules;
- current task;
- retrieved evidence;
- optional user preferences.

Do not dump the entire project into every prompt.

## Step 4 — Run

Use the AI of your choice.

Keep the raw result.

## Step 5 — Verify

Use at least one real check appropriate to the task.

Examples:
- compare with source;
- test code;
- recalculate;
- inspect current primary documentation;
- ask a knowledgeable human;
- run a counterexample;
- compare two independent sources.

## Step 6 — Repair

If the result fails, diagnose whether the problem came from:

- model capability;
- missing context;
- wrong tool;
- bad source;
- weak task definition;
- inadequate verification;
- lack of authority/permission.

Change only what is needed and retry.

## Step 7 — Transfer check

Without copying the previous prompt, explain how you would apply **TOCC + FIT + verification** to a different task.

### Course completion evidence

Mark **TRANSFERRED** only when the learner can:

1. explain roughly what an LLM is and why fluency is not proof;
2. create a TOCC brief;
3. distinguish durable context from current task;
4. explain system context versus RAG;
5. run a FIT check;
6. choose an appropriate verification method;
7. distinguish false/decontextualised information from proven deceptive intent;
8. set a sensible permission boundary for an action-capable AI;
9. apply the method to a new task.

---

# Quick reference

## TOCC

```text
TASK     What should the AI do?
OUTCOME  What does useful look like?
CONTEXT  What does it need to know?
CHECK    How will we test the result?
```

## FIT

```text
FIT          Does generative AI add useful capability?
IMPACT       What happens if it is wrong or misused?
TESTABILITY  Can we verify it, and is there a better alternative?
```

## Evidence habit

```text
FLUENT != VERIFIED
SOURCE != SUPPORT
ACCESS != AUTHORITY
ASSISTED != LEARNED
```

## Suggested commands

- `LEA` — continue learning
- `HI` — next hint
- `PRA` — practice example
- `TES` — test me
- `ANS` — give the direct answer
- `REC` — recall/retrieval check
- `SAV` — produce a portable progress/checkpoint summary

---

# Instructor/source notes

- HKS Spring 2024 is an archived course. Do not present it as newly released in 2026.
- CS50x 2026 is the current CS50x Artificial Intelligence lecture page checked 7 October 2026.
- Provider-specific product features age quickly. Recheck before teaching them as current fact.
- The Aletheia **TOCC** and **FIT** patterns are original course synthesis built from the source concepts and Aletheia's evidence/verification model.
- Do not teach “chain of thought” as a requirement to expose private model reasoning. Ask for concise visible justification, checks, assumptions, sources or steps that are appropriate to the task.
