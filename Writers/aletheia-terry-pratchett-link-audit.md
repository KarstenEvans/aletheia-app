# Terry Pratchett link and affiliate destination audit

**Aletheia Protocol:** https://github.com/KarstenEvans/aletheia-protocol (evidence, provenance and uncertainty)
**Thalia Protocol:** https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md (optional humour with clear provenance)

**Reviewed:** 28 September 2026. **Scope:** full static `href` inventory for the public Terry Pratchett HTML and resources HTML, plus every data-derived retailer destination in the 64-row CSV after the on-page-commerce change. This is a source-level inventory, **not** a claim that every link was clicked in a real visitor browser or that a transaction tracked successfully.

## Commercial audit summary

- Own catalogue: 41 Discworld books and 23 selected other works (64 entries). Every entry has a title-specific **Bookshop UK search** URL, still untracked and not individually stock/ISBN verified.
- Audible: 5 individual product URLs in the CSV and on the listening section. The other 59 audiobook URL cells have been cleared. No generic Audible author-page CTA is offered as a book-specific link.
- Membership/referral: no verified authorised personal Audible signup URL; **no** active enrolment/referral CTA yet. An Awin Publisher MasterTag is not advertiser-specific approval.
- Merchandise: only named direct product URLs; all currently untracked. Greebo and the Death of Rats *plush* were shown out of stock at review. Figurine and Luggage pages opened in retrieval. Other prices/stock are not cached.
- Web retrieval recheck: **Mort, Wyrd Sisters, Guards! Guards!, Small Gods** Audible product URLs opened; **The Colour of Magic** returned 503 from the retrieval service, so its live status is **INCONCLUSIVE**, not proven unavailable. Audible author catalogue and the Audible affiliate programme information opened. A general Bookshop UK search fetch errored; don't equate this with a broken customer URL.
- Remaining source links and all 64 title-specific searches need separate live/browser verification; a valid HTTPS URL alone does not establish availability.
- Product URL does not prove affiliate identity. Status is **DIRECT / UNTRACKED** until approved publisher deep link is supplied and tracked-click testing is completed.

## Public HTML anchor inventory

All authored static anchor occurrences are listed below. Dynamic bookshelf links are listed in the separate CSV table. Internal anchors, downloads and research/protocol URLs are preserved as functional/attribution routes rather than converted to affiliate referrals.

| Page | Link label | Exact target | Source-level classification |
|---|---|---|---|
| main #1 | ← Writing Vibe app | ../aletheia-writing-vibe/aletheia-writing-vibe.htm | LOCAL / SITE ROUTE |
| main #2 | Research and book resources | aletheia-terry-pratchett-rsc.htm | LOCAL / SITE ROUTE |
| main #3 | Aletheia Protocol | https://github.com/KarstenEvans/aletheia-protocol | SOURCE / OTHER |
| main #4 | Thalia Protocol | https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md | SOURCE / OTHER |
| main #5 | Listen / preview on Audible ↗ | https://www.audible.co.uk/pd/The-Colour-of-Magic-Audiobook/B09LZ1X1RK | AUDIBLE PRODUCT · UNTRACKED |
| main #6 | Listen / preview on Audible ↗ | https://www.audible.co.uk/pd/Mort-Audiobook/B09LZ5JWV7 | AUDIBLE PRODUCT · UNTRACKED |
| main #7 | Listen / preview on Audible ↗ | https://www.audible.co.uk/pd/Wyrd-Sisters-Audiobook/B09LZ19TCV | AUDIBLE PRODUCT · UNTRACKED |
| main #8 | Listen / preview on Audible ↗ | https://www.audible.co.uk/pd/Guards-Guards-Audiobook/B09M8W9JY5 | AUDIBLE PRODUCT · UNTRACKED |
| main #9 | Listen / preview on Audible ↗ | https://www.audible.co.uk/pd/Small-Gods-Audiobook/B09LZ4LZ1X | AUDIBLE PRODUCT · UNTRACKED |
| main #10 | Browse all 64 books on this page ↓ | #allbooks | LOCAL / SITE ROUTE |
| main #11 | See Discworld-inspired gifts ↓ | #gifts | LOCAL / SITE ROUTE |
| main #12 | Download the full catalogue CSV | terry-pratchett.csv | LOCAL / SITE ROUTE |
| main #13 | Official Greebo details / stock alert ↗ | https://www.discworldemporium.com/product/greebo-plush/ | OFFICIAL GIFT PRODUCT · UNTRACKED |
| main #14 | Official Luggage product ↗ | https://www.discworldemporium.com/product/the-luggage-plush/ | OFFICIAL GIFT PRODUCT · UNTRACKED |
| main #15 | Official Death of Rats figurine ↗ | https://www.discworldemporium.com/product/discworld-icons-death-of-rats/ | OFFICIAL GIFT PRODUCT · UNTRACKED |
| main #16 | Official Librarian bookend ↗ | https://www.discworldemporium.com/product/discworld-bookends-the-librarian/ | OFFICIAL GIFT PRODUCT · UNTRACKED |
| main #17 | Inspect real ant habitat kit ↗ | https://antsuk.com/product/hexanest-ant-starter-set-2-0/ | UNOFFICIAL ANTS GIFT · UNTRACKED |
| main #18 | Gifts, provenance and further resources | aletheia-terry-pratchett-rsc.htm#gifts | LOCAL / SITE ROUTE |
| main #19 | Browse our book catalogue ↑ | #allbooks | LOCAL / SITE ROUTE |
| main #20 | Download the 64-title bibliography CSV | terry-pratchett.csv | LOCAL / SITE ROUTE |
| main #21 | Terry Pratchett's estate | https://terrypratchett.com/books/ | SOURCE / OTHER |
| main #22 | publisher's Discworld list | https://www.terrypratchettbooks.com/book-series/discworld/ | SOURCE / OTHER |
| main #23 | Audible affiliate programme information | https://www.audible.co.uk/ep/affiliates | AUDIBLE EVIDENCE / AFFILIATE INFO |
| main #24 | Download canonical Markdown ↓ | aletheia-terry-pratchett.md | LOCAL / SITE ROUTE |
| main #25 | Research and book resources ↗ | aletheia-terry-pratchett-rsc.htm | LOCAL / SITE ROUTE |
| main #26 | ★ Aletheia Apps | ../index.html | LOCAL / SITE ROUTE |
| main #27 | ★ Stories | ../stories/index.html | LOCAL / SITE ROUTE |
| main #28 | ★ Writers | index.html | LOCAL / SITE ROUTE |
| main #29 | ★ Knowledge | https://karstenevans.github.io/aletheia-knowledge/ | SOURCE / OTHER |
| main #30 | ★ Swindon UK | https://swindon.org.uk/ | SOURCE / OTHER |
| main #31 | Writing Vibe resources | ../aletheia-writing-vibe/aletheia-writing-vibe-rsc.htm | LOCAL / SITE ROUTE |
| main #32 | Writers library | index.html | LOCAL / SITE ROUTE |
| main #33 | Pratchett resources | aletheia-terry-pratchett-rsc.htm | LOCAL / SITE ROUTE |
| main #34 | '+label+' | '+url+' | LOCAL / SITE ROUTE |
| resources #1 | ← Back to Terry Pratchett | aletheia-terry-pratchett.htm | LOCAL / SITE ROUTE |
| resources #2 | own 64-book catalogue | aletheia-terry-pratchett.htm#allbooks | LOCAL / SITE ROUTE |
| resources #3 | Browse books on Aletheia ↗ | aletheia-terry-pratchett.htm#allbooks | LOCAL / SITE ROUTE |
| resources #4 | Choose a specific audiobook ↗ | aletheia-terry-pratchett.htm#listen | LOCAL / SITE ROUTE |
| resources #5 | Booklist CSV ↓ | terry-pratchett.csv | LOCAL / SITE ROUTE |
| resources #6 | The Colour of Magic | https://www.audible.co.uk/pd/The-Colour-of-Magic-Audiobook/B09LZ1X1RK | AUDIBLE PRODUCT · UNTRACKED |
| resources #7 | Mort | https://www.audible.co.uk/pd/Mort-Audiobook/B09LZ5JWV7 | AUDIBLE PRODUCT · UNTRACKED |
| resources #8 | Wyrd Sisters | https://www.audible.co.uk/pd/Wyrd-Sisters-Audiobook/B09LZ19TCV | AUDIBLE PRODUCT · UNTRACKED |
| resources #9 | Guards! Guards! | https://www.audible.co.uk/pd/Guards-Guards-Audiobook/B09M8W9JY5 | AUDIBLE PRODUCT · UNTRACKED |
| resources #10 | Small Gods | https://www.audible.co.uk/pd/Small-Gods-Audiobook/B09LZ4LZ1X | AUDIBLE PRODUCT · UNTRACKED |
| resources #11 | Official author/estate books collection | https://terrypratchett.com/books/ | SOURCE / OTHER |
| resources #12 | Publisher's complete book index | https://www.terrypratchettbooks.com/all-books/ | SOURCE / OTHER |
| resources #13 | The 41 Discworld novels in publication order | https://www.terrypratchettbooks.com/book-series/discworld/ | SOURCE / OTHER |
| resources #14 | The Colour of Magic on Bookshop.org UK | https://uk.bookshop.org/p/books/the-colour-of-magic-discworld-novel-1-terry-pratchett/142057?ean=9780552166591 | BOOKSHOP PRODUCT/SEARCH · UNTRACKED |
| resources #15 | canonical Writing Vibe profile | aletheia-terry-pratchett.md | LOCAL / SITE ROUTE |
| resources #16 | 2014 first-person interview about reading, fantasy, writing and journalism | https://www.theguardian.com/childrens-books-site/2014/jul/10/terry-pratchett-interview-dragons-at-crumbling-castle | SOURCE / OTHER |
| resources #17 | 1999 published interview | https://www.theguardian.com/books/1999/oct/24/fiction.terrypratchett | SOURCE / OTHER |
| resources #18 | Pratchett's own 2010 archived writing update | https://terrypratchett.com/archives/from-midnight-to-skip-diving/ | SOURCE / OTHER |
| resources #19 | A Slip of the Keyboard, collected nonfiction | https://terrypratchett.com/books/slip-of-the-keyboard/ | SOURCE / OTHER |
| resources #20 | Publisher's The Colour of Magic page and authorised sample | https://terrypratchett.com/books/the-colour-of-magic/ | SOURCE / OTHER |
| resources #21 | Neil Gaiman's perspective | https://www.theguardian.com/books/2014/sep/24/terry-pratchett-angry-not-jolly-neil-gaiman | SOURCE / OTHER |
| resources #22 | Scribd publication-order list | https://www.scribd.com/document/692174756/DW-Reading-List-V5-Publication-Order | SOURCE / OTHER |
| resources #23 | Discworld Emporium | https://www.discworldemporium.com/ | SOURCE / OTHER |
| resources #24 | product and stock-alert page ↗ | https://www.discworldemporium.com/product/greebo-plush/ | OFFICIAL GIFT PRODUCT · UNTRACKED |
| resources #25 | specific product page ↗ | https://www.discworldemporium.com/product/the-luggage-plush/ | OFFICIAL GIFT PRODUCT · UNTRACKED |
| resources #26 | figurine ↗ | https://www.discworldemporium.com/product/discworld-icons-death-of-rats/ | OFFICIAL GIFT PRODUCT · UNTRACKED |
| resources #27 | plush ↗ | https://www.discworldemporium.com/product/death-of-rats-plushy/ | OFFICIAL GIFT PRODUCT · UNTRACKED |
| resources #28 | specific product page ↗ | https://www.discworldemporium.com/product/discworld-bookends-the-librarian/ | OFFICIAL GIFT PRODUCT · UNTRACKED |
| resources #29 | specific collection set ↗ | https://www.discworldemporium.com/product/discworld-denizens-unseen-university-collection/ | OFFICIAL GIFT PRODUCT · UNTRACKED |
| resources #30 | educational ant habitat kit ↗ | https://antsuk.com/product/hexanest-ant-starter-set-2-0/ | UNOFFICIAL ANTS GIFT · UNTRACKED |
| resources #31 | Audible's affiliate information | https://www.audible.co.uk/ep/affiliates | AUDIBLE EVIDENCE / AFFILIATE INFO |
| resources #32 | Awin advertiser profile 8095 | https://ui.awin.com/merchant-profile/8095?setLocale=en_US | SOURCE / OTHER |
| resources #33 | Aletheia Protocol | https://github.com/KarstenEvans/aletheia-protocol | SOURCE / OTHER |
| resources #34 | Thalia Protocol | https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md | SOURCE / OTHER |
| resources #35 | canonical resource Markdown | aletheia-terry-pratchett-rsc.md | LOCAL / SITE ROUTE |
| resources #36 | ← Terry Pratchett main page | aletheia-terry-pratchett.htm | LOCAL / SITE ROUTE |
| resources #37 | Writing Vibe app | ../aletheia-writing-vibe/aletheia-writing-vibe.htm | LOCAL / SITE ROUTE |
| resources #38 | Writers index | index.html | LOCAL / SITE ROUTE |
| resources #39 | ★ Apps | ../index.html | LOCAL / SITE ROUTE |
| resources #40 | ★ Stories | ../stories/index.html | LOCAL / SITE ROUTE |
| resources #41 | ★ Writers | index.html | LOCAL / SITE ROUTE |
| resources #42 | ★ Knowledge | https://karstenevans.github.io/aletheia-knowledge/ | SOURCE / OTHER |
| resources #43 | ★ Swindon UK | https://swindon.org.uk/ | SOURCE / OTHER |

## CSV-derived retail destination inventory, every row

**Bookshop:** all 64 links are title-specific search destinations, **not** verified direct product/affiliate links. **Audio:** only a specifically identified Audible product receives a clickable URL; a blank cell means pending edition verification. Each URL below is the complete value stored in the CSV.

| # | Title | Bookshop UK destination · untracked search | Audible UK destination / status |
|---:|---|---|---|
| 1 | The Colour of Magic | https://uk.bookshop.org/beta-search?keywords=The%20Colour%20of%20Magic%20Terry%20Pratchett | https://www.audible.co.uk/pd/The-Colour-of-Magic-Audiobook/B09LZ1X1RK (individual edition, untracked; current HTTP recheck inconclusive) |
| 2 | The Light Fantastic | https://uk.bookshop.org/beta-search?keywords=The%20Light%20Fantastic%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 3 | Equal Rites | https://uk.bookshop.org/beta-search?keywords=Equal%20Rites%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 4 | Mort | https://uk.bookshop.org/beta-search?keywords=Mort%20Terry%20Pratchett | https://www.audible.co.uk/pd/Mort-Audiobook/B09LZ5JWV7 (individual edition, untracked) |
| 5 | Sourcery | https://uk.bookshop.org/beta-search?keywords=Sourcery%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 6 | Wyrd Sisters | https://uk.bookshop.org/beta-search?keywords=Wyrd%20Sisters%20Terry%20Pratchett | https://www.audible.co.uk/pd/Wyrd-Sisters-Audiobook/B09LZ19TCV (individual edition, untracked) |
| 7 | Pyramids | https://uk.bookshop.org/beta-search?keywords=Pyramids%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 8 | Guards! Guards! | https://uk.bookshop.org/beta-search?keywords=Guards!%20Guards!%20Terry%20Pratchett | https://www.audible.co.uk/pd/Guards-Guards-Audiobook/B09M8W9JY5 (individual edition, untracked) |
| 9 | Eric | https://uk.bookshop.org/beta-search?keywords=Eric%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 10 | Moving Pictures | https://uk.bookshop.org/beta-search?keywords=Moving%20Pictures%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 11 | Reaper Man | https://uk.bookshop.org/beta-search?keywords=Reaper%20Man%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 12 | Witches Abroad | https://uk.bookshop.org/beta-search?keywords=Witches%20Abroad%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 13 | Small Gods | https://uk.bookshop.org/beta-search?keywords=Small%20Gods%20Terry%20Pratchett | https://www.audible.co.uk/pd/Small-Gods-Audiobook/B09LZ4LZ1X (individual edition, untracked) |
| 14 | Lords and Ladies | https://uk.bookshop.org/beta-search?keywords=Lords%20and%20Ladies%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 15 | Men at Arms | https://uk.bookshop.org/beta-search?keywords=Men%20at%20Arms%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 16 | Soul Music | https://uk.bookshop.org/beta-search?keywords=Soul%20Music%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 17 | Interesting Times | https://uk.bookshop.org/beta-search?keywords=Interesting%20Times%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 18 | Maskerade | https://uk.bookshop.org/beta-search?keywords=Maskerade%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 19 | Feet of Clay | https://uk.bookshop.org/beta-search?keywords=Feet%20of%20Clay%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 20 | Hogfather | https://uk.bookshop.org/beta-search?keywords=Hogfather%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 21 | Jingo | https://uk.bookshop.org/beta-search?keywords=Jingo%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 22 | The Last Continent | https://uk.bookshop.org/beta-search?keywords=The%20Last%20Continent%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 23 | Carpe Jugulum | https://uk.bookshop.org/beta-search?keywords=Carpe%20Jugulum%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 24 | The Fifth Elephant | https://uk.bookshop.org/beta-search?keywords=The%20Fifth%20Elephant%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 25 | The Truth | https://uk.bookshop.org/beta-search?keywords=The%20Truth%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 26 | Thief of Time | https://uk.bookshop.org/beta-search?keywords=Thief%20of%20Time%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 27 | The Last Hero | https://uk.bookshop.org/beta-search?keywords=The%20Last%20Hero%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 28 | The Amazing Maurice and His Educated Rodents | https://uk.bookshop.org/beta-search?keywords=The%20Amazing%20Maurice%20and%20His%20Educated%20Rodents%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 29 | Night Watch | https://uk.bookshop.org/beta-search?keywords=Night%20Watch%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 30 | The Wee Free Men | https://uk.bookshop.org/beta-search?keywords=The%20Wee%20Free%20Men%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 31 | Monstrous Regiment | https://uk.bookshop.org/beta-search?keywords=Monstrous%20Regiment%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 32 | A Hat Full of Sky | https://uk.bookshop.org/beta-search?keywords=A%20Hat%20Full%20of%20Sky%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 33 | Going Postal | https://uk.bookshop.org/beta-search?keywords=Going%20Postal%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 34 | Thud! | https://uk.bookshop.org/beta-search?keywords=Thud!%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 35 | Wintersmith | https://uk.bookshop.org/beta-search?keywords=Wintersmith%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 36 | Making Money | https://uk.bookshop.org/beta-search?keywords=Making%20Money%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 37 | Unseen Academicals | https://uk.bookshop.org/beta-search?keywords=Unseen%20Academicals%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 38 | I Shall Wear Midnight | https://uk.bookshop.org/beta-search?keywords=I%20Shall%20Wear%20Midnight%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 39 | Snuff | https://uk.bookshop.org/beta-search?keywords=Snuff%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 40 | Raising Steam | https://uk.bookshop.org/beta-search?keywords=Raising%20Steam%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 41 | The Shepherd's Crown | https://uk.bookshop.org/beta-search?keywords=The%20Shepherd's%20Crown%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 42 | The Carpet People | https://uk.bookshop.org/beta-search?keywords=The%20Carpet%20People%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 43 | The Dark Side of the Sun | https://uk.bookshop.org/beta-search?keywords=The%20Dark%20Side%20of%20the%20Sun%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 44 | Strata | https://uk.bookshop.org/beta-search?keywords=Strata%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 45 | Good Omens | https://uk.bookshop.org/beta-search?keywords=Good%20Omens%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 46 | Truckers | https://uk.bookshop.org/beta-search?keywords=Truckers%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 47 | Diggers | https://uk.bookshop.org/beta-search?keywords=Diggers%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 48 | Wings | https://uk.bookshop.org/beta-search?keywords=Wings%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 49 | Only You Can Save Mankind | https://uk.bookshop.org/beta-search?keywords=Only%20You%20Can%20Save%20Mankind%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 50 | Johnny and the Dead | https://uk.bookshop.org/beta-search?keywords=Johnny%20and%20the%20Dead%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 51 | Johnny and the Bomb | https://uk.bookshop.org/beta-search?keywords=Johnny%20and%20the%20Bomb%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 52 | Nation | https://uk.bookshop.org/beta-search?keywords=Nation%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 53 | Dodger | https://uk.bookshop.org/beta-search?keywords=Dodger%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 54 | The Long Earth | https://uk.bookshop.org/beta-search?keywords=The%20Long%20Earth%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 55 | The Long War | https://uk.bookshop.org/beta-search?keywords=The%20Long%20War%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 56 | The Long Mars | https://uk.bookshop.org/beta-search?keywords=The%20Long%20Mars%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 57 | The Long Utopia | https://uk.bookshop.org/beta-search?keywords=The%20Long%20Utopia%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 58 | The Long Cosmos | https://uk.bookshop.org/beta-search?keywords=The%20Long%20Cosmos%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 59 | A Blink of the Screen | https://uk.bookshop.org/beta-search?keywords=A%20Blink%20of%20the%20Screen%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 60 | A Slip of the Keyboard | https://uk.bookshop.org/beta-search?keywords=A%20Slip%20of%20the%20Keyboard%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 61 | A Stroke of the Pen | https://uk.bookshop.org/beta-search?keywords=A%20Stroke%20of%20the%20Pen%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 62 | Dragons at Crumbling Castle | https://uk.bookshop.org/beta-search?keywords=Dragons%20at%20Crumbling%20Castle%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 63 | The Unadulterated Cat | https://uk.bookshop.org/beta-search?keywords=The%20Unadulterated%20Cat%20Terry%20Pratchett | PENDING: no outgoing audiobook link |
| 64 | The Folklore of Discworld | https://uk.bookshop.org/beta-search?keywords=The%20Folklore%20of%20Discworld%20Terry%20Pratchett | PENDING: no outgoing audiobook link |

## Next checks and approval evidence

1. Test all internal relative paths on deployed GitHub Pages and in mobile/Safari/keyboard browsers. Check the CSV actually loads, the dialogue works and footer stars open the proper collection indexes.
2. Individually verify the 59 missing UK Audible editions, title, narrator, format and direct product URL. Recheck the 503 result for *The Colour of Magic*.
3. Verify Bookshop UK product/ISBN editions and replace search URLs only with genuinely individual products. Obtain the owner's **personal** UK Bookshop affiliate URLs after acceptance.
4. Obtain advertiser-approved Audible membership and audiobook deep links from the connected Awin/Amazon Associates account after acceptance. Check the relevant membership promotion/eligibility and perform tracked referral testing without making artificial qualifying purchases.
5. Check whether official Discworld/gift merchants have an actual approved affiliate relationship with this publisher. Never copy another publisher's tracking URL or silently change factual/protocol sources.
6. Record each separate stage as SOURCE INSPECTED / HTTP VERIFIED / BROWSER VERIFIED / AFFILIATE TESTED; log status and date rather than claiming that one stage implies the next.

**Evidence links:** [Audible UK programme](https://www.audible.co.uk/ep/affiliates); [Bookshop UK affiliate programme](https://uk.bookshop.org/affiliates/profile/introduction); [Discworld Emporium](https://www.discworldemporium.com/); [public reader](aletheia-terry-pratchett.htm); [resource page](aletheia-terry-pratchett-rsc.htm).
