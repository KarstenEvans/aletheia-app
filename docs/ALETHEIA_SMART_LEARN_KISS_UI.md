# Aletheia Smart Learn — KISS Interface Decision
Date: 2026-10-14
Status: accepted user design direction; implementation pending
Reference pattern: Aletheia Rice Intelligence

## Main Learn page
- Keep a clean, simple page. Do not display the full catalogue of topics or long lists of courses.
- Primary control: **What would you like to learn?** free-text question and **Start Learning**.
- Top-right **Settings** icon/button.
- Bottom of main page: prominent **Surprise Me!** button.
- The Surprise Me button starts a random, short, beginner-friendly lesson from enabled topic interests; if none are enabled, use general-interest topics and say so.
- Avoid clutter, extra panels and compulsory sign-up.

## Settings
1. **Surprise Me** checkbox at the top (enable/disable inclusion of spontaneous suggestions).
2. Expandable major-topic subsections with checkboxes for subject interests. All controls can be turned on/off individually.
3. Suggested sections: Cooking (budget meals, baking, air fryer, preservation); DIY (woodwork, decorating, repairs, tools); Gardening (vegetables, flowers, compost, seasonal work); Household (maintenance, cleaning, energy saving); Technology (AI, digital basics, programming); Languages; History; Science; Health and wellbeing; Personal finance; Arts and creativity.
4. Provide **Select all**, **Clear all**, and **Save**. Keep defaults unobtrusive.
5. The selected checkboxes filter optional recommendations and Surprise Me, but must **never** block the learner from typing any subject into the main search box.
6. On mobile, present subsections as expandable accordions with large tap targets; keyboard-accessible on desktop.

## Teaching behaviour
- Use the existing Aletheia Smart Learn AI-independent Markdown lessons and knowledge sources.
- Ask one question at a time, teach in small steps, and offer longer explanations if requested.
- Minimise user cost. Do not require a specific paid AI.
- Treat cooking, DIY, gardening and practical life skills as first-class topics.
- Clearly flag dangerous DIY/maintenance activities and recommend appropriate professional assistance.
- Keep learner settings and progress user-controlled and portable, with offline-readable fallbacks.

## KISS acceptance test
The entire initial screen should make sense to a newcomer in under ten seconds: ask, start, settings, or surprise me. No long catalogue on the main page.

## Implementation note
This is a design decision record, not an assertion that the live Learn UI has been changed. Integrate into the existing Learn code when the actual application entrypoint is located and tested.
