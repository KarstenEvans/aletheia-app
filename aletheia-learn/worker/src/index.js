// Aletheia Learn shared AI backend
// Cloudflare Worker + Workers AI. Serves Aletheia Learn and Aletheia Language Learn.
const VERSION = "0.1.0";
const MODEL = "@cf/zai-org/glm-4.7-flash";
const ALLOWED_ORIGINS = new Set([
  "https://karstenevans.github.io",
  "http://localhost:8787",
  "http://127.0.0.1:8787"
]);

function cors(origin) {
  const allowed = ALLOWED_ORIGINS.has(origin) ? origin : "https://karstenevans.github.io";
  return {
    "access-control-allow-origin": allowed,
    "access-control-allow-methods": "GET, POST, OPTIONS",
    "access-control-allow-headers": "Authorization, Content-Type",
    "access-control-max-age": "3600",
    "vary": "Origin"
  };
}
function json(origin, value, status = 200) {
  return new Response(JSON.stringify(value), {
    status,
    headers: {
      ...cors(origin),
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
      "referrer-policy": "no-referrer"
    }
  });
}
function originAllowed(request) {
  const origin = request.headers.get("Origin") || "";
  return ALLOWED_ORIGINS.has(origin);
}
function tokenAllowed(request, env) {
  const required = String(env.LEARN_ACCESS_TOKEN || "");
  if (!required) return true;
  return request.headers.get("Authorization") === "Bearer " + required;
}
function cleanText(v, max) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}
function cleanHistory(v) {
  if (!Array.isArray(v)) return [];
  return v.slice(-10)
    .filter(x => x && (x.role === "user" || x.role === "assistant") && typeof x.content === "string")
    .map(x => ({ role: x.role, content: x.content.slice(0, 4500) }));
}
function baseRules(mode) {
  return `You are Aletheia Learn, an adaptive learning-by-doing tutor.

CORE BEHAVIOUR
- Help the learner become able to do the task, not merely obtain an answer.
- Distinguish TASK PERFORMANCE from LEARNING EVIDENCE.
- Default to the smallest useful support. Hint ladder: H0 invite attempt; H1 orient; H2 strategy; H3 partial scaffold; H4 worked analogue; H5 direct solution.
- Never become obstructive. If the learner selects ANSWER NOW or plainly asks for the answer, give it clearly and mark it as assisted, then optionally offer one small transfer check.
- Prefer one meaningful learner action per turn. Do not dump a chapter.
- After a successful supported attempt, use a changed example, teach-back, or transfer task before calling the skill independent.
- Accessibility support is not cheating. Simplify presentation, define words, chunk steps, translate, or allow another response form while preserving the actual learning goal.
- If the learner asks for VISUAL, use a compact text diagram, table, spatial layout, matching exercise, ordering exercise or labelled structure that works safely in plain text.
- When useful, ask the learner to draw, sort, match, predict, manipulate, type, calculate, explain, or choose and justify. Do not claim that more sensory channels automatically guarantee better learning.
- Use one metacognitive prompt at a useful moment: plan, monitor, or evaluate.
- Treat mistakes as diagnostic evidence, not failure.
- Never infer diagnoses or fixed ability labels.
- For urgent safety-critical situations, answer the essential information first rather than withholding it as a lesson.
- Current mode is: ${mode}.
- Keep replies concise and mobile-friendly. Use British English unless the learning task requires another language.
`;
}
function languageRules(targetLanguage) {
  return `
LANGUAGE LEARN SPECIALISATION
- Target language: ${targetLanguage || "chosen by learner"}.
- Teach natural contemporary language for the stated situation, not mechanical word-for-word translation.
- Always show native script where the language uses it. Transliteration is only a support.
- Ask the learner to produce or choose language, then adapt from the attempt.
- Distinguish direct audio understanding from transcription-only. Never claim pronunciation or tone was correct from text alone.
- For Thai: always show Thai script; give a careful learner-friendly pronunciation cue only when reliable; explicitly teach vowel length and lexical tone when relevant; distinguish aspirated/unaspirated consonants where useful; explain polite particles such as ครับ/ค่ะ without assuming identity; teach classifiers and register when they become useful; use short listening/reading contrasts and minimal-pair-style comparisons cautiously; do not pretend romanisation is sufficient; never judge tones unless actual audio is available.
`;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      if (!originAllowed(request)) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: cors(origin) });
    }
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/health") {
      if (!originAllowed(request)) return json(origin, { error: "Origin not allowed" }, 403);
      return json(origin, { ok: true, service: "aletheia-learn", version: VERSION, model: MODEL, protected: !!env.LEARN_ACCESS_TOKEN });
    }
    if (request.method !== "POST" || url.pathname !== "/chat") return json(origin, { error: "Not found" }, 404);
    if (!originAllowed(request)) return json(origin, { error: "Origin not allowed" }, 403);
    if (!tokenAllowed(request, env)) return json(origin, { error: "Not authorised" }, 401);
    if (!String(request.headers.get("content-type") || "").startsWith("application/json")) return json(origin, { error: "JSON required" }, 415);

    let body;
    try {
      const raw = await request.text();
      if (raw.length > 70000) throw new Error("too large");
      body = JSON.parse(raw);
    } catch {
      return json(origin, { error: "Invalid or oversized request" }, 400);
    }

    const application = body.application === "aletheia-language-learn" ? "aletheia-language-learn" : "aletheia-learn";
    const mode = cleanText(body.mode, 40) || "LEARN";
    const goal = cleanText(body.goal, 1800);
    const message = cleanText(body.message, 4500);
    const targetLanguage = cleanText(body.targetLanguage, 80);
    const history = cleanHistory(body.history);
    if (!goal && !message) return json(origin, { error: "A learning goal or message is required" }, 400);

    const system = baseRules(mode) + (application === "aletheia-language-learn" ? languageRules(targetLanguage) : "");
    const firstContext = goal ? `LEARNER GOAL: ${goal}` : "";
    const userContent = [firstContext, message ? `CURRENT LEARNER MESSAGE: ${message}` : "Start this learning session. Ask for the smallest useful first attempt."].filter(Boolean).join("\n\n");

    try {
      const result = await env.AI.run(MODEL, {
        messages: [
          { role: "system", content: system },
          ...history,
          { role: "user", content: userContent }
        ],
        max_completion_tokens: 700,
        temperature: 0.45
      });
      const reply =
        (result && typeof result.response === "string" && result.response.trim()) ||
        (result && Array.isArray(result.choices) && result.choices[0] && result.choices[0].message && result.choices[0].message.content) ||
        "";
      if (!reply) return json(origin, { error: "The AI returned no usable text" }, 502);
      return json(origin, {
        reply: String(reply).trim().slice(0, 9000),
        meta: { application, mode, model: MODEL, version: VERSION }
      });
    } catch (e) {
      return json(origin, { error: "AI request failed", detail: String(e && e.message || e).slice(0, 180) }, 502);
    }
  }
};
