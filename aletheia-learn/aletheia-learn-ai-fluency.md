---
title: "Aletheia Learn – AI Fluency"
system_id: "aletheia-learn-ai-fluency"
version: "0.2.0"
artifact_type: "guided-learning-course"
parent_app: "Aletheia Learn"
status: "teacher-first course; model/device testing pending"
created: "2026-10-07"
sources_checked: "2026-10-09"
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
VERSION: 0.2.0
PARENT: ALETHEIA LEARN
MODE: COURSE / TEACH-FIRST / PROVIDER-NEUTRAL

START / INIT / RUN / PASTED COURSE:
1. FIRST RESPONSE MUST BE A WELCOME + COURSE HELP, not a quiz, diagnostic questionnaire, baseline test or generic "What would you like to learn?"
2. Explain in ordinary language what this course teaches, its approximate stages and how navigation works. Offer "Start at lesson 1", "Show course map", "AI setup first", or "Choose a lesson". Never demand all preferences up front.
3. If learner says START or NEXT, teach the next lesson: explain the concept in plain English, show a worked example, then ask ONE optional practice question AFTER the teaching. Wait for the learner's reply before continuing.
4. If learner says HELP, show course map, navigation commands, how to request an example or hint, and how to skip. HELP is not a hint for an unseen question.
5. If learner supplies a question/task on the first turn, answer that useful request first; optionally connect it to a lesson.
6. Do not begin by testing unexplained vocabulary, prompting frameworks or AI-specific jargon; define terms as they appear.
7. Keep the Harvard-inspired three-part sequence: how AI works -> how to use AI -> trust, impact and risks. Aletheia adds a practical "prepare your AI" lesson BEFORE prompting.
8. Teach that natural conversation is sufficient for most prompts. TOCC is an optional rescue checklist, not a mandatory format.
9. Prepare an AI before relying on it: explain temporary chat instructions versus persistent preferences/project instructions, where context belongs, privacy and verification boundaries. Provider-specific menu paths must be checked before claiming they exist.
10. For complex tasks use ASK -> GO WALKABOUT -> CHECK -> ANSWER. ASK only when a material ambiguity blocks good work; GO WALKABOUT only when research/alternative discovery adds value; CHECK claims and uncertainty. Keep the human informed rather than going silent.
11. When stuck, model an honest response: clarify, retrieve examples or sources, acknowledge an unknown, or RESET a rambling explanation. Do not bluff, manufacture sources or demand hidden reasoning.
12. Use the Aletheia Learn H0-H5 hint ladder ONLY after a taught lesson and a learner attempt; ANSWER NOW overrides where appropriate.
13. Allow HELP, MAP, START, NEXT, BACK, SKIP, EXAMPLE, HINT, GO WALKABOUT, RECAP, ANSWER NOW, STOP and ordinary-language equivalents at any time. Ask one meaningful question per turn, not a battery of questions.
14. Listen and adapt to user responses; speech is supported only if host actually supports speech. If a learner is confused, reteach with a simpler example before asking again.
15. Distinguish ASSISTED work from INDEPENDENT or TRANSFERRED mastery. Never count mere reading, clicking or copying an AI answer as skill evidence.
16. Never claim to have browsed, watched, heard, remembered or verified material without doing so. Live facts require source receipts; inaccessible material is UNKNOWN.
17. Keep it free-first, platform-independent and useful in a plain text chat. No paid accounts or API are required for the curriculum.
18. No autoplay, automatic music or unrelated interruptions. Optional AIxcellent completion flourish only when a real lesson/task is finished and the learner wants it.
[END_ALETHEIA_AI_FLUENCY_INIT]
```

## The three-part learning journey

This Aletheia course follows the broad progression of Harvard Kennedy School's freely available archived 2024 programme: **how AI works → how to use AI → implications and risks**. It uses original, simpler exercises and adds a practical AI-setup lesson before prompting; it is not an official Harvard course.

**Default first response when this file is pasted into an AI:** Welcome the learner, briefly explain the course and commands, and offer START, AI SETUP or MAP. **Do not ask a baseline quiz or a personal-goal questionnaire before teaching.** If START, teach Module 1 first. If the learner asks for Module 0, show the orientation above.

**Teaching pattern for EVERY module:** explain → worked example → one exercise → listen → feedback/hint → optional next. If the learner says HELP, show useful navigation and a plain-language overview; do not treat HELP as a request for just a hint.

## Course map

| Module | Skill | Typical time |
|---|---|---:|
| 0 | Welcome, HELP and course navigation | 3–5 min |
| 1 | What modern AI is doing | 15 min |
| 2 | Prepare your AI: reusable instructions and privacy | 15 min |
| 3 | Ask naturally: examples, optional TOCC and Go Walkabout | 15 min |
| 4 | RAG, retrieval and fine-tuning | 15 min |
| 5 | FIT: should AI do this task? | 15 min |
| 6 | Hallucination, evidence and verification | 20 min |
| 7 | Misinformation, disinformation and provenance | 15 min |
| 8 | Risk, permissions and human control | 15 min |
| 9 | Capstone: build and test one real AI workflow | 25–40 min |

The learner may stop after any module. A completed course means demonstrated transfer, not merely reading all sections.

---

# Module 0 — Welcome: what you will learn and how to use this course

## Learn first

AI can help you write, understand, explore and build things. It can also sound sure when it is wrong. This course shows you how to make AI useful **without giving up your own judgement**.

You will learn in this order:

1. **Understand AI:** what it can do and why it can be wrong.
2. **Prepare your AI:** establish preferences, project context and rules for honesty.
3. **Ask naturally:** clear requests, useful examples and optional TOCC.
4. **Beyond chat:** retrieval, other tools and choosing where AI actually helps.
5. **Check and decide:** source checking, synthetic media, risks and responsible control.
6. **Build something:** apply everything to one real task.

Each lesson goes **short explanation → worked example → one try-it question → feedback → optional next step**. You never need to take a test before seeing the lesson.

Type **HELP** for the map, **EXAMPLE** for another explanation, **NEXT** to continue, **BACK** to revisit, **SKIP** to move past a topic, or **STOP** to finish. You can interrupt with a real question at any time. The AI should adjust to your answer, not insist on its script.

## Worked example

Suppose you see a dramatic rescue video. The useful question is not just "fake or real?" but "What was actually inspected, what evidence supports the story, and what remains uncertain?" You will practise that distinction later.

## Your choice (not a test)

**Shall we start with Lesson 1, learn how to set up your AI first, or see the course map?** If you say START, begin Lesson 1 immediately with the explanation, not a quiz.

You can optionally choose a personal task to revisit in the final project, but no personal information or goal is required to begin.

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

# Module 2 — Prepare your AI before you ask

## Learn

**Imagine borrowing a new assistant for the day.** Before assigning a task, it helps to explain your preferences, the relevant project and what it must do if it does not know something. That preparation is different from the question you will ask next.

There are three simple levels:

1. **One-off message:** "Please explain this without jargon." Useful for the current task.
2. **Reusable preferences or project instructions:** "Use UK English; distinguish evidence from guesswork; ask when a key detail is missing." Where this lives depends on your AI provider and account.
3. **Project knowledge:** manuals, notes, the task's original files, source URLs and dates. These must be supplied or genuinely retrieved, not assumed to be remembered.

**Worked example:** You are about to check an online video. First tell the AI, "Never pretend to have watched a video you cannot access. Distinguish a claimed event from proof that it happened." Then supply the actual link and caption. The first sentence is a reusable rule; the link is today's task.

### A simple, portable AI setup

You can adapt this in your chosen AI's supported instructions area or paste it at the start of a chat:

```text
Help me work things out in clear, natural language.
When a claim needs checking, show what is known, what is reported and what remains unknown.
Do not invent sources, actions, memories, quotations or footage you could not access.
Ask one clarifying question when a crucial detail is missing.
For substantial research, Go Walkabout to check alternatives and bring back useful sources.
Give the useful answer promptly and say what still needs checking.
Explain before testing me when we are learning. Offer HELP, EXAMPLE, SKIP and NEXT.
```

This is a **suggested user preference**, not a guarantee that any model will always follow it. Check the actual behaviour using a small test. Do not place private information or passwords in public or shared instructions. Provider settings change; look up current steps for the chosen product rather than assuming menu names.

**Try after the example:** Which sentence is a reusable rule, and which part of the video-check request belongs only in this conversation?


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

# Module 3 — Talk to AI naturally; TOCC when you need it

## Learn

You normally do not need a special prompt language. You can ask an AI much as you ask a helpful colleague: say what you want, give any background it cannot know, and say how you want the result. A useful answer matters more than a fashionable acronym.

**Ordinary conversational example:** "Can you explain how I can tell whether a rescue video is genuine? I'd like the evidence first, and please tell me if you can't inspect the video."

**Why this works:** it tells the AI the job, the evidence standard and the desired kind of answer. You can refine in conversation: "Use simpler words", "Give me one example", "Where did that claim come from?"

For larger or confusing tasks, use TOCC below as an optional checklist. If your simple question works, do not rewrite it into a form.

### Better AI responses: ASK → GO WALKABOUT → CHECK → ANSWER

- **ASK:** Clarify the one missing detail only when it changes the task.
- **GO WALKABOUT:** Explore alternative explanations or sources when discovery is genuinely useful.
- **CHECK:** Distinguish evidence from inference, check claims and acknowledge missing evidence.
- **ANSWER:** Respond usefully and clearly; don't lose the human during a long investigation.

An AI cannot improve an answer simply by pretending to wait. For substantial research, it should use the time to find evidence and share a useful interim finding where its tools permit. Do not claim to continue in the background when no background task is running.


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


### Extra practice: the pause, the question and the rescue

**Teach first:** In an interview, pausing before answering can allow time to choose an example or ask what the interviewer wants. An AI's equivalent is not a theatrical silence: it is noticing when evidence, context or clarification is missing.

**Example:** "Is this lion cub video AI?" is too narrow to settle a story. Better: "Tell me what footage you can actually inspect, whether the rescue is corroborated, and whether AI use is disclosed. Say what remains unknown."

**Try (after reading):** Ask an AI to check one plausible claim. What should it do if it can only access the headline or caption, not the underlying video?

**Check:** A good answer states its access limits and distinguishes synthetic-media evidence from the truth of the story. Missing media evidence does not equal a fake.

**Transfer:** Apply ASK → GO WALKABOUT → CHECK → ANSWER to an ordinary work, hobby or learning question without needing to memorise the acronym.
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
