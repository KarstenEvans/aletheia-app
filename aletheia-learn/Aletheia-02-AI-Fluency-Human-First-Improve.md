---
title: "Aletheia Improve — AI Fluency Human-First Repair"
document_id: "aletheia-02-ai-fluency-human-first-2026-10-09"
version: "1.0"
status: "committed; live host teaching checks pending"
document_class: "improvement-receipt"
date: 2026-10-09
---

# Aletheia Improve — AI Fluency Human-First Repair

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) · [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)

## User observation

Pasting the AI Fluency course into an AI initiated a baseline or goal question without teaching first; HELP could return just a hint instead of course navigation. Setup/context instructions were placed after prompting, and TOCC sounded like compulsory jargon. The user wants a real course, with explanations and examples before questions, listener-responsive navigation, a choice to skip, and an AI that knows when to clarify, Go Walkabout, check and answer.

## Aletheia Improve routing

Decision: **EXTEND EXISTING**, not another app, protocol or mandatory prompt format.

Owners:
- `aletheia-learn/aletheia-learn-ai-fluency.md` — canonical provider-neutral course;
- `aletheia-learn/aletheia-learn.md` — parent tutor contract with a narrow course-specific teach-first exception.

Sources considered:
- HKS archived 2024 course three units and Classes 4–6: https://generative-ai-course.hks.harvard.edu/spring-2024
- HKS prompting lessons: https://generative-ai-course.hks.harvard.edu/2-using-genai/class-4
- HKS system instructions and retrieval: https://generative-ai-course.hks.harvard.edu/2-using-genai/class-5
- 2026 Aletheia Learn / Improve / AGENTS live repository instructions.

The course follows Harvard's broad **understand → use → implications** progression but remains an independent learning-by-doing adaptation, not an official Harvard reproduction.

## Implemented

1. Upgrade AI Fluency to v0.2.0.
2. On paste/START, show introductory HELP and short course orientation **before** questions. HELP explains commands; HINT assists an exercise.
3. Module 0 is a teach-first welcome, map and optional choice. No baseline examination required.
4. Module 2 is **Prepare your AI**, ahead of Module 3 prompting. Explain one-off instructions, persistent context and project evidence, show a reusable provider-neutral sample setup, explain privacy and limitations.
5. Module 3 teaches natural-language prompting before introducing TOCC as optional structure; includes ASK → GO WALKABOUT → CHECK → ANSWER, a source-backed video-check exercise and the "don't lose the human" rule.
6. Tutor dialogue: explain, demonstrate, then ask one optional practice question; listen to the reply and give feedback, hints or a simpler example.
7. Parent Learn loader gains a narrow course exception so its general quick-baseline rule cannot override the structured course's teach-first behaviour.
8. No new backend, provider-specific app, automatic music, or external profile data.

## Static inspection receipt (2026-10-09)

- Re-fetched latest GitHub course, News HTML and parent before writing with current SHA.
- Confirmed exactly ten ordered AI Fluency module headings, 0–9, including setup before prompting.
- Confirmed introduction and HELP-first loader, and distinction of HELP from HINT.
- Re-read updated course map and teaching patterns.

## Remaining human/device verification

- Paste full course into at least two AI interfaces and verify the FIRST answer welcomes and explains lessons without asking an unexplained quiz.
- In each host, test START, HELP, NEXT, BACK, SKIP, EXAMPLE, HINT, direct answer, and resumption after interruption.
- Verify the same lesson is properly taught before one practice question and responds to an actual learner answer.
- Check beginner usability with someone who has no AI jargon background.
- The interface may not obey all file instructions: this is an AI-host acceptance test, not a guaranteed effect of changing Markdown.

## Sample first response expected

"Welcome to Aletheia Learn — AI Fluency. We'll learn what AI can and cannot do; prepare your AI safely; talk to it naturally; explore useful tools; and verify what it tells us. Every lesson explains first, shows an example, and only then offers a practice question. Say START for Lesson 1, AI SETUP to jump to preparing your AI, MAP for all lessons, or HELP at any time. You can SKIP, BACK, EXAMPLE or STOP whenever you like."

## Resume

If the first-response test fails in a particular AI host, inspect the exact payload supplied by Aletheia Learn HTML or the user's paste and repair **only the host handoff/init wording**. Do not duplicate the course or assume the receiving AI actually fetched an external URL.
