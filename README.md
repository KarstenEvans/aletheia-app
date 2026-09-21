# Aletheia Apps

Portable Markdown and HTML applications using the [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) for evidence-aware AI tasks, with explicit provenance, honest capability limits and optional companion protocols.

Each app lives in its own lowercase folder. The portable Markdown file is the application; an HTML interface is added only when it provides a genuine benefit.

## Apps

### Aletheia Language Learn

Learn the language you actually need today from real subjects such as cooking, work, travel, repairs and family life.

- **Version:** 0.1.1
- **Status:** Working prototype
- **Primary protocol:** Aletheia
- **Optional companion:** [Thalia](https://github.com/KarstenEvans/thalia-protocol)
- **Languages:** Thai, Norwegian, German, French, English and other languages supported reliably by the host AI
- [Read the app](aletheia-language-learn/aletheia-language-learn.md)
- [Open the raw Markdown](https://raw.githubusercontent.com/KarstenEvans/aletheia-app/main/aletheia-language-learn/aletheia-language-learn.md)

To use it, download or attach the raw Markdown file to a capable conversational AI and type or say **START**. A specific request such as “Teach me Thai for cooking fish” starts the lesson directly.

The app remains useful without voice, persistent memory, Astra, Odysseus, Codex, an avatar or web access. Optional components must not be presented as required or officially integrated.


### Aletheia News

A direct-first, evidence-aware news reader that discovers current reporting, groups coverage, traces reporting lineage, surfaces primary sources and supports independent research passes without copying full publisher articles.

- **Version:** 0.2
- **Status:** Working prototype / design
- **Primary protocol:** Aletheia
- **Infrastructure:** Direct browser discovery by default; optional personal BBC RSS Worker
- [Read the app](aletheia-news/aletheia-news.md)
- [Open the browser interface](aletheia-news/aletheia-news.htm)
- [Open the resources page](aletheia-news/aletheia-news-rsc.htm)
- [View source register](aletheia-news/aletheia-news-sources.json)

## Repository structure

```text
aletheia-app/
├── aletheia-language-learn/
│   └── aletheia-language-learn.md
└── aletheia-news/
    ├── aletheia-news.md
    ├── aletheia-news.htm
    ├── aletheia-news-rsc.htm
    ├── aletheia-news-worker.js
    └── aletheia-news-sources.json
```

More Aletheia apps can be added as separate folders following the same portable, reconstructable and human-editable pattern.

## Licence

No licence has been selected yet. Public visibility alone does not grant permission to copy, modify or redistribute the contents.
