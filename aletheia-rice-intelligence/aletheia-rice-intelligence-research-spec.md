# Aletheia Rice Intelligence

**Research-led product specification and source register**  
**Research cut-off:** 29 September 2026 (Europe/London)  
**Status:** Proposed product, not a functioning live-data service.  
**Primary design principle:** Alert-first, not dashboard-first; free-first, commercial feeds optional; no automated trading.

Aletheia Protocol: https://github.com/karstenevans/aletheia-protocol (source receipts, freshness, conflicts, uncertainty, auditability).  
Thalia Protocol: https://github.com/karstenevans/thalia-protocol/blob/main/THALIA_PROTOCOL.md (optional user-facing tone, not a trading authority).

## 1. Purpose and user journey

A physical rice broker handling Cambodia/Thailand/Vietnam and wider Asian business needs to know what materially changed, what can be bought or sold in the required variety/grade, and whether delivery and payment are viable. Begin with an emailed or app-delivered daily brief and exceptional event alerts. Offer drill-down only on request. The broker is the decision-maker.

**Home screen:** Today / Important Alerts / Rice Prices / Crop & Water / Offers & Deals / Routes & Regulations / Companies / Research / Settings.

**Daily brief:** 3-7 changes ranked by relevance, including source timestamp, last observed price date, and open questions. One explicit 'Nothing significant changed' message when justified. Never pretend a weekly rice assessment is a live quote.

**Relevant countries initially:** Thailand, Cambodia, Vietnam, India, Pakistan. Let users add locations, buyers, milling centres, provinces, transport corridors and rice varieties. Thailand/Cambodia is a use case, not a hard-coded limitation.

## 2. Lessons from the original Gemini specification

- Retain physical rice quotations, weather, seasonality, freight, FX, authorised messaging integrations and counterparty history.
- Do not make CME ZR rough-rice futures the principal price reference for Southeast Asian milled fragrant rice. CME's 2,000 cwt (~90.7-tonne) contract represents US long-grain *rough/paddy* rice. Basis/quality/country/processing are materially different.
- The original automatic 'hold/buy/sell' grid was too simplistic. Replace with scenario flags (supply concern, demand shift, price dislocation, delivery constraint) and explain uncertainty. Require human authorisation for all counterparties, communications and trades.
- Correct provider status: S&P Platts stopped 14 rice assessments from 1 May 2026, including Cambodia Phka Malis and Sen Kra Ob. Do not accidentally present obsolete symbol histories as current quotes. Source: https://www.spglobal.com/energy/en/pricing-benchmarks/our-methodology/subscriber-notes/050126-platts-discontinues-14-rice-price-assessments-effective-may-1-2026
- Do not presume Oryza, The Rice Trader, Platts or WhatsApp provide an unrestricted scrape/feed. Confirm licensing, access, display/storage and redistribution rights.
- Aletheia = evidence and provenance; Thalia is not an autonomous trading or negotiation authority.
- BGC Group, Inc., ticker NASDAQ:BGC, is separate from Thai Berli Jucker (SET:BJC). Neither corporate share price is a direct rice-price benchmark.

## 3. Current verified source snapshot (29 September 2026)

**TREA 23 September 2026** association quotations (USD/metric tonne, milled basis, FOB; not guaranteed executable supplier offers): Thai Hom Mali Premium 2024/25 crop 1,253; 2025/26 crop 1,190; Thai Jasmine (Thai Fragrant) 696; White Rice 100% B 485; White Rice 5% 479; White Rice 25% 460; Parboiled 100% Premium 494. TREA quotes include a single 50kg PP bag and state +$15/t when shipped by container. The two Hom Mali crop years must remain distinct. https://www.thairiceexporters.or.th/price.htm

**GEOGLAM AMIS 3 September 2026:** report 142, conditions through 28 August. Overall rice conditions generally favourable, but dry in parts of Thailand and India. https://www.cropmonitor.org/crop-monitor-for-amis

**AFSIS:** September 2026 Rice Growing Outlook exists; it covers nine ASEAN countries and provides the Asia-RiCE/GEOGLAM regional input. https://www.aptfsis.org/publication

**NOAA ENSO 10 September 2026:** El Niño Advisory, greater than 90% chance of a very strong event during NH autumn/winter 2026-27. This is a global climate alert, not proof of drought in a chosen growing district. https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.html

**MRC:** daily wet-season flood forecasts; dry-season drought/water monitoring. Published API documents hydromet station, forecast, drought and timeseries endpoints. Public endpoint accessibility/keys and terms must be tested. https://www.mrcmekong.org/flood-and-drought-forecasting/ and https://data-services.mrcmekong.org/

**Thailand/Cambodia route:** Reuters reported on 23 September 2026 that border crossings remained closed amid the dispute. It is essential to get route- and cargo-specific confirmation from relevant authorities and carriers before any deal. https://www.reuters.com/world/asia-pacific/cambodias-waiting-village-tattooist-mourns-trade-lost-war-2026-09-23/

## 4. Source registry and cadence

| Domain | Preferred source | Publication cadence | Indicative access | Role / caution |
|---|---|---|---|---|
| Thai FOB quotes | TREA | Weekly | Public webpage, terms check | Core Thai export benchmark; grade and crop-year explicit |
| International FOB | FAO Rice Price Update | Monthly | Public / email subscription | Comparable exporter prices; never call daily |
| Domestic wholesale/retail | FAO GIEWS FPMA | Monthly/periodic by series | Public tool | Different price basis from export prices |
| Global production/consumption/stocks | USDA FAS PSD / GAIN | Monthly/periodic | Public download and reports | Track revisions and marketing-year conventions |
| Rice growing conditions | AFSIS Rice Growing Outlook | Monthly | Public report | Nine ASEAN states; expert interpretation, lag |
| Crop surveillance | GEOGLAM AMIS and Early Warning | Monthly | Public reports | Compare field/remote-sensing information |
| Hydrology | Mekong River Commission | Daily/weekly/seasonal | Portal + documented API | Water levels, drought, flood; cannot infer flood extent from one gauge |
| ENSO | NOAA CPC | Monthly and special advisories | Public | Regional consequences must be independently checked |
| Weather/rainfall | National met offices, ECMWF open data | Daily/model-specific | Public, terms vary | Distinguish forecast from observation |
| Rainfall observation | NASA IMERG | Near real-time | Public, may require account | Pixel estimates, not farm-level fact |
| Weather prototype | Open-Meteo | Daily | Free tier non-commercial only | Obtain commercial licence if used operationally |
| Customs/SPS/TBT | WTO ePing and national authorities | Event-based | Public/notification | Verify legal effective date and specific HS code |
| Supplier offers | Permissioned broker entries/imports | As entered | Confidential private | Real executable offer vs indication; expiry mandatory |
| Freight | Specific forwarder/carrier quotation | As quoted | Private | Overland route and cargo not represented by a generic ocean container index |
| Daily commercial rice intelligence | Oryza / The Rice Trader / licensed Platts products | Daily/periodic | Paid/negotiated | Licence and redistribution required |
| Paper risk context | CME ZR rough rice | Exchange schedule | Market-data licence may apply | US paddy risk not an Asian jasmine conversion factor |
| Trade flows | UN Comtrade / ITC Trade Map / national customs | Monthly/annual, lagged | Terms vary | HS 1006 subcategories; not daily quote data |

Links: https://www.fao.org/markets-and-trade/commodities/rice/fao-rice-price-update ; https://www.fao.org/giews/food-prices/en/ ; https://apps.fas.usda.gov/psdonline/ ; https://www.cropmonitor.org/ ; https://www.aptfsis.org/publication ; https://www.mrcmekong.org/ ; https://www.ecmwf.int/en/forecasts/datasets/open-data ; https://gpm.nasa.gov/data/imerg ; https://eping.wto.org/ ; https://open-meteo.com/en/pricing ; https://oryza.com/membership-monthly ; https://world-rice.com/subscribe/

## 5. Alert engine

**Priority 1:** Official change blocking or constraining a configured active route; verified export/import restriction; active crop disaster warning for an actively monitored origin; failed required feed + no alternative if a decision is pending. Immediate alert only when new or materially revised.

**Priority 2:** Above-threshold 7/14/30-day rainfall anomaly supported by observations and crop-stage exposure; published crop outlook change; significant like-for-like benchmark move; FX/freight shift that causes an active offer's *landed cost* to breach its user-set threshold; a counterparty offer nearing expiry.

**Priority 3:** Scheduled USDA/FAO/AFSIS/GEOGLAM/NOAA releases, share-company reports, non-urgent broader news, and background context. Digest, no repeated push alerts.

**Alert record fields:** headline, trigger_rule, countries/provinces, rice varieties/grades affected, observed_at, source_published_at, source_url, last_rechecked_at, severity, confidence, supporting and conflicting sources, business relevance (user-controlled), action question (e.g., 'Verify land-border transit with carrier'), acknowledged, snooze_until, expires_at. Use de-duplication by event and revision.

**No fabricated precision:** a satellite vegetation anomaly is a screening signal, not a guaranteed yield forecast. Trade actions are never automated. AI-generated translations of contract terms get side-by-side original text and human review.

## 6. Rice taxonomy and quote record

Separate: origin country, producing region, legal origin/label, botanical variety/trade name, harvest year and crop season, paddy vs cargo/brown vs milled, fragrance, moisture, broken percentage, head rice yield, purity, chalkiness, contamination/insects, lab/inspection certificate, organic/other certification, packaging, quantity, currency, measure, location, price and publication time, validity, delivery period, Incoterm 2020 and named location, payment terms, inspection/tolerance provisions.

Examples of distinct selectable product families: Thai Hom Mali KDML105/RD15 and other Thai fragrant; Cambodian Phka Malis/Phka Rumduol and Sen Kra Ob; Vietnamese Jasmine/ST25/OM5451 (verify actual offer classification); white long grain 5/25% broken; parboiled; glutinous; Indian/Pakistani basmati; broken rice. A Thai Hom Mali country-of-origin/certification claim cannot be automatically applied to a Cambodian jasmine offer. DFT standards: https://thaihommaliricecertificationmark.dft.go.th/ and https://www.dft.go.th/

**Quote status:** official assessed benchmark / public association benchmark / supplier indication / firm offer / executed trade / domestic retail / historic, each prominently labelled. A price is never silently carried over as today's price. Show quotation basis and quote age. Keep exact original currency/unit and a dated display-only conversion.

## 7. Broker's actual workflow and tools

1. Identify buyer's requirement (type/grade, origin acceptability, volume, pack size, intended use, delivery and payment).
2. Check expected crop/harvest timing, stock availability and seller indications from trusted counterparties.
3. Normalize *like-for-like* offers with all specs, crop age, currency, point of delivery and term.
4. Confirm border/customs rules, permits, certificates, route and freight with authorities and carriers.
5. Compute comparable destination landed cost and margin, including freight, loading/handling, duties if applicable, inspection, FX, financing, shrinkage and contingency.
6. Screen counterparty and payment risk, bank/LC documentation, credit limits and dispute history.
7. Negotiate; preserve versioned written offers, approvals and expiry times; issue trade tickets.
8. Monitor physical loading, inspection, docs, sailing/truck and payment. Record actual realised margins and post-trade notes.

A model that sees $700 FOB and $690 ex-mill cannot declare $690 cheaper without loading, milling and delivery differences. Standardise Incoterms properly: ICC notes FOB is for vessel loading and FCA is frequently more appropriate for container/multimodal handovers. https://library.iccwbo.org/content/tfb/BOOKS/BK_0049/BK_0049_05_RulesSea.htm and https://library.iccwbo.org/content/tfb/BOOKS/BK_0049/BK_0049_04_RulesAny.htm

## 8. Modular tools (one common interface)

- **Rice Brief:** automated alerts and morning digest. The only required default surface.
- **Rice Price Check:** by variety, origin, grade, year, Incoterm, benchmark/offer type; comparison chart with explicit dates.
- **Crop & Water Watch:** provincial location watchlist, crop calendar, satellite anomaly, observed/forecast rain, river/reservoir/saltwater indicators and confidence.
- **Border & Route Check:** exact checkpoints, carriers, port status and known restrictions, direct official-source links. Do not imply cross-border movement is available without verification.
- **Rice Deal Compare:** supplier quotes, private counterparties, FX/landed cost, scenario, expiry; human approval.
- **Rice News & Regulations:** multilingual source links, translation with original text, country/HS-code filters, effective dates.
- **Company Watch:** BGC (NASDAQ:BGC) if relevant, LT Foods (NSE:LTFOODS), KRBL (NSE:KRBL), Olam Group (SGX:VC2) as *candidate* exposure examples subject to the broker's selection and financial data licensing. Distinguish broker, retailer, grain trader, processor and pure rice exposure. Falling shares do not prove a firm is unprofitable or forecast rice prices. https://www.bgcg.com/investors-media/ ; https://ltfoods.com/investors ; https://www.olamgroup.com/investors.html
- **Rice Library:** explain terms, growing calendars, original sources and vetted textbooks.

## 9. Architecture compatible with GitHub + Cloudflare

Public, cacheable, responsive static shell: `index.html`, `prices.htm`, `crops.htm`, `deals.htm`, `routes.htm`, `companies.htm`, `research.htm`; deploy via GitHub/Cloudflare Pages. A scheduled Cloudflare Worker can poll *permitted* sources and write normalized timestamped observations to KV/D1/R2 as appropriate; serve a small JSON digest and event log. Use signed server-side feed keys, never commit tokens to GitHub. Alerts require opted-in push/email/approved messaging channel; a page merely opened once cannot independently deliver reliable future notices. Offer 'send test alert', quiet hours, source outages and unsubscribes.

Keep **private** counterparty records, conversations and deals in a segregated authenticated data store with role-based access and explicit retention rules, never in a public static repository or publicly readable GitHub Pages JSON. Provider credentials and vendor reports stay server-side. Manual import of CSV/authorised email is safer than promising access to personal WhatsApp chats; WhatsApp Business Platform permissions/onboarding are separate.

Core tables: `sources`, `observations`, `rice_products`, `market_quotes`, `crop_regions`, `weather_observations`, `weather_forecasts`, `watchlists`, `alerts`, `counterparties_private`, `offers_private`, `deal_events_private`, `translation_reviews`, `source_licences`.

Mandatory Aletheia receipt on every published claim: observation date, retrieved date, source URL, original language, source type, unit/grade, confidence and known conflicts. Use feed health indicator: OK / delayed / discontinued / licence-restricted / unavailable. Deduplicate mirrored articles and honour source terms.

## 10. Phased delivery and acceptance

**Phase 0: Broker interview (15 minutes).** Which job tasks matter: physical vs paper, importing into Thailand or global transactions; where he gets firm offers; target rice grades/units; key districts/routes; timing/delivery channel; which data subscriptions he already has; what can legally be integrated. Avoid accidentally publishing his sensitive counterparty details.

**Phase 1: useful free-first demonstrator.** Weekly TREA price history, current FAO monthly benchmark; AFSIS/GEOGLAM/NOAA/MRC release discovery; user location watchlist; manual supplier offers; timestamped daily digest. Every card opens source. All empty/outdated feeds say so.

**Phase 2: true watch service.** Permitted API adapters, region-specific alerts, source health, email/push, weekly change log, noise suppression, historical alert correctness tests. Check licensing and operating costs.

**Phase 3: private professional tools.** Quote normalization, landed-cost worksheets, authorised messaging/translation, counterparties, company watchlist, order lifecycle and audit receipts.

**Phase 4:** optional licensed daily price sources, backtesting and measured forecast usefulness. No sell/buy signals generated from a two-factor matrix or unsupervised AI execution.

**Acceptance test examples:** Weekly TREA quote on a Tuesday clearly says 23 Sep if that is last issue; Cambodian discontinued Platts symbols are flagged historical; crop signal for Thai province is not conflated with countrywide crop failure; land-border disruption prompts route verification; offer without grade/expiry cannot be called comparable; unauthorised message access is not attempted.

## 11. Reading and training library

1. **Free: Rice Almanac, 4th edition** (IRRI/GRiSP, 2013), rice varieties, production and trade context. ISBN 9789712203008. https://ageconsearch.umn.edu/record/164484 ; https://books.irri.org/9789712203008_content.pdf
2. **Physical Grain Trading: Core Concepts and Real-World Scenarios** (Chris DeLong, Andrew McKenzie, Thomas Meierotto, Springer, 2025): futures vs cash, basis, storage, logistics, processing margins and risk. https://link.springer.com/book/10.1007/978-3-031-83975-7
3. **Agricultural Marketing and Price Analysis, 2nd ed.** (Norwood, Lusk, Peel, Riley; Waveland, 2022): supply/demand, market price, forecasting, inventory, futures; publisher ISBN 9781478646907. https://www.waveland.com/browse.php?t=731
4. **The Handbook of International Trade and Finance, 3rd ed.** (Anders Grath, 2014): cross-border payment, currency risk, letters of credit, trade finance. https://books.google.com/books/about/The_Handbook_of_International_Trade_and.html?id=w6lUmgEACAAJ
5. **Commodity Trading Manual** (Chicago Board of Trade, 1998): older futures fundamentals, not a contemporary Southeast Asian physical-price service. ISBN 9780814404966. https://books.google.com/books/about/Commodity_Trading_Manual.html?id=V-SmwwEACAAJ
6. **ICC Incoterms 2020:** primary reference for costs/risk/delivery language. https://library.iccwbo.org/clp/clp-incoterms-qa-2020.htm

Add reading notes by topic and permissioned short summaries, never copy paid textbooks or subscription reports wholesale. Public and internal pages can contain source links, bibliographic entries, and original analysis.

## 12. Unresolved matters to validate with the actual broker

- The actual relation between his work and BGC Group; avoid assuming BGC itself is a rice merchant.
- Trade direction, legal importer, physical route, live crossing permissions, tariff/permit/food-safety conditions.
- Essential rice grades, crop years, quantities and incumbent seller/buyer quote sources.
- Whether employer-provided subscriptions and contracts prohibit exporting proprietary information.
- Which notifications he genuinely wants and at what local time; urgent vs digest thresholds.
- Whether he wants a personal public-data resource only, or an employer-authorised private workplace assistant.

**Product decision:** start with one HTML front door and several well-named tools behind it; alerts-first, deep research on demand. No bloated default desktop and no autonomous orders.