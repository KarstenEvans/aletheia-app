---
title: "Aletheia Improve Stage 03 — AI 101 Cinematic KISS"
document_id: "aletheia-improve-ai-101-cinematic-2026-10-09"
version: "1.0"
status: "source committed; browser and AI host QA pending"
document_class: "improvement-receipt"
date: "2026-10-09"
---

# Aletheia Improve Stage 03 — AI 101 Cinematic KISS

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) · [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)

## What prompted this change

Human visual review of the actual first published AI 101 front-page screenshot found two oversized dialogue panels, small/dim animated universe, explanatory material that distracted from the job, and unnecessary separate narration controls.

**User instruction:** KISS. Put the actual Aletheia animation and an original narrated Star Wars-inspired perspective crawl at the centre. Have choosing an AI start the UK English male voice automatically at speech speed 1.0. Start Course copies the full original Markdown and opens the provider. Put all optional instructions, books/gifts and subscriptions behind a top-right burger. Preserve stars and return paths.

## Aletheia Improve decision

**EXTEND EXISTING**:
- Keep same HTML `aletheia-learn-ai-fluency.htm`, not another app.
- Keep `aletheia-learn-ai-fluency.md` as canonical course, fetched whole, not duplicated.
- Keep original animation in `aletheia-threejs-animation/aletheia-threejs-animation.htm?embed=1`.
- Keep central `shared/link-sprites.*` for seasonal Constellation.
- Add only one topic-specific resources page `aletheia-learn-ai-fluency-rsc.htm`.

## Actual implementation

1. **Animation-first full-height hero** with less dark overlay, no two-card front-page layout.
2. **AI selector as narration gesture**, 7 providers: ChatGPT, Gemini, Copilot, DeepSeek, Claude, Kimi, Grok.
3. **Original perspective crawl** advances as each browser speech utterance ends. Preferred installed Google UK English Male, then non-George en-GB male, then appropriate fallback. Rate and pitch exactly 1.0. No speech on page load; animation begins independently.
4. **One Start Course CTA** gated on complete validated source and choice, synchronous copy then exactly one external window. Manual copy and blocked-popup handling retained inside burger.
5. **Upper-right burger** provides HELP, source/parent/back links, replay, pause/continue, voice toggle and dedicated Books/Gifts, AI Subscriptions, Free Lessons routes.
6. **Separate resources HTML** linked to the publisher-confirmed *Co-Intelligence* book, Princeton article for *AI Snake Oil*, Bookshop UK (including its verified physical-book gift cards), Harvard HKS/CS50 and official provider plans. Prices not duplicated, no unverified affiliate IDs.
7. **Seasonal footer stars** retained with central JSON and five ordinary fallbacks; single production Awin MasterTag in each HTML page.
8. Aletheia GUI/dev updated with **scoped** course voice rule; no blanket change to other Aletheia Storyteller narration.

## Source research for resources

- Harvard HKS: https://generative-ai-course.hks.harvard.edu/spring-2024
- Harvard CS50: https://cs50.harvard.edu/x/weeks/ai/
- Co-Intelligence (UK publisher): https://www.penguin.co.uk/books/460207/co-intelligence-by-mollick-ethan/9780753560778
- AI Snake Oil (Princeton): https://www.princeton.edu/news/2024/12/18/ai-snake-oil-conversation-princeton-ai-experts-arvind-narayanan-and-sayash-kapoor
- Bookshop.org UK gift card: https://uk.bookshop.org/gift_cards
- ChatGPT: https://openai.com/chatgpt/pricing/
- Claude: https://support.claude.com/en/articles/11049762-choose-a-claude-plan
- Gemini UK: https://one.google.com/intl/en_uk/about/google-ai-plans/
- Microsoft 365 Copilot UK: https://www.microsoft.com/en-gb/microsoft-365-copilot/pricing/individuals
- DeepSeek chat: https://chat.deepseek.com/
- Kimi memberships: https://www.kimi.com/en/help/membership/membership-pricing
- Grok: https://x.ai/pricing

## Tests recorded

**Passed in inspected GitHub source:** final inline JavaScript compiles; complete course fetch markers; rate 1.0, preferred UK male voice path; AI selection handler; 7 providers; exactly one `window.open` call; copy-before-popup code path; no duplicate element IDs; exactly five static Constellation links and one Awin MasterTag per public page; resources include four topic sections and correct links.

**Simulated first layout test:** 12/12 mock handoff/voice tests before the final option expansion. Simulations are not browser/device validation.

**Still outstanding:** actual deployed GitHub Pages screenshot review after cache refresh, Windows Chrome/Edge and Android narration/animation, mobile perspective crawl readability, Safari/WebKit, microphone/voice capabilities, clipboard/popup permissions, real pasted first response in selected AIs, external links and seasonal date-window tests.

## User testing

1. Open `https://karstenevans.github.io/aletheia-app/aletheia-learn/aletheia-learn-ai-fluency.htm`.
2. Before choosing an AI, verify the animation moves but no voice plays.
3. Choose **ChatGPT** or another AI and check that original gold text scrolls as the UK male voice narrates.
4. Press **Start Course** and paste the clipboard into the new AI chat. It should welcome and explain the course before asking any exercise.
5. Check **☰ Menu** and **Books, Gifts & Subscriptions**.
6. Review mobile/desktop; report screenshot-specific issues rather than silently declaring it good.

**No new standalone Aletheia app. No paid API. No verified live browser claim.**
