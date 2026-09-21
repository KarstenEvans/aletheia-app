/**
 * Aletheia News personal RSS helper
 * Optional Cloudflare Worker.
 *
 * Normal Aletheia News discovery is direct-first and does not require this Worker.
 * BBC RSS is enabled only when ALETHEIA_NEWS_MODE=personal.
 */

const BBC = {
  top: "https://feeds.bbci.co.uk/news/rss.xml",
  uk: "https://feeds.bbci.co.uk/news/uk/rss.xml",
  world: "https://feeds.bbci.co.uk/news/world/rss.xml",
  technology: "https://feeds.bbci.co.uk/news/technology/rss.xml",
  science: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
  business: "https://feeds.bbci.co.uk/news/business/rss.xml"
};

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "access-control-allow-origin": "*",
  "access-control-allow-headers": "content-type",
  "cache-control": "public, max-age=300"
};

function response(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), { status, headers: JSON_HEADERS });
}

function clean(s = "") {
  return String(s)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function tag(block, name) {
  const m = block.match(new RegExp("<" + name + "(?:\\s[^>]*)?>([\\s\\S]*?)<\\/" + name + ">", "i"));
  return m ? clean(m[1]) : "";
}

function parseRss(xml) {
  return [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)]
    .slice(0, 40)
    .map((m, i) => {
      const block = m[0];
      return {
        id: "bbc-" + i + "-" + (tag(block, "guid") || tag(block, "link")),
        title: tag(block, "title"),
        url: tag(block, "link"),
        summary: tag(block, "description"),
        published: tag(block, "pubDate"),
        source: "BBC News",
        kind: "personal-rss"
      };
    })
    .filter(x => x.title && x.url);
}

async function cachedBbc(request, topic) {
  const cache = caches.default;
  const cacheKey = new Request(new URL(request.url).origin + "/cache/bbc/" + topic);
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const upstream = await fetch(BBC[topic], { cf: { cacheTtl: 300 } });
  if (!upstream.ok) return response({ error: "BBC RSS returned " + upstream.status }, 502);

  const items = parseRss(await upstream.text());
  const out = response({
    app: "Aletheia News",
    mode: "personal",
    source: "BBC News",
    topic,
    generated_at: new Date().toISOString(),
    items
  });

  await cache.put(cacheKey, out.clone());
  return out;
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: JSON_HEADERS });

    const url = new URL(request.url);
    const mode = String(env.ALETHEIA_NEWS_MODE || "public").toLowerCase();

    if (url.pathname === "/" || url.pathname === "/health") {
      return response({
        ok: true,
        app: "Aletheia News personal RSS helper",
        mode,
        note: "Normal GDELT discovery is direct from the browser and does not use this Worker."
      });
    }

    if (url.pathname !== "/api/rss") return response({ error: "Not found" }, 404);
    if (mode !== "personal") {
      return response({
        error: "Personal RSS is disabled.",
        hint: "Set ALETHEIA_NEWS_MODE=personal only on an individual's own instance."
      }, 403);
    }

    const source = String(url.searchParams.get("source") || "").toLowerCase();
    const topic = String(url.searchParams.get("topic") || "top").toLowerCase();

    if (source !== "bbc") return response({ error: "Unsupported source" }, 400);
    if (!BBC[topic]) return response({ error: "Unsupported BBC topic" }, 400);

    return cachedBbc(request, topic);
  }
};
