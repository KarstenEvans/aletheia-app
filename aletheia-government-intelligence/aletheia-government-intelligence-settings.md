# Aletheia Government Intelligence - Settings (default)
Aletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol  
Thalia Protocol: https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md

JSON is authoritative for filters. Separate from Rice Intelligence settings. Explicit empty arrays mean none; do not repopulate. Never place supplier private correspondence or patient information here. Export custom settings locally. 

```json
{
  "schema": "aletheia-government-intelligence-settings/v1",
  "settings_version": "0.1",
  "exported_at": "DEFAULT",
  "user_notes": "",
  "provider": "chatgpt",
  "research_mode": "copy-open",
  "buyers": [
    "NHS",
    "schools",
    "local-government",
    "central-government",
    "defence"
  ],
  "sectors": [
    "food",
    "facilities",
    "textiles",
    "office",
    "medical",
    "equipment",
    "infrastructure",
    "digital"
  ],
  "source_groups": [
    "cross",
    "healthcare",
    "food",
    "facilities",
    "education",
    "defence",
    "trade"
  ],
  "selected_sources": [
    "fts",
    "fts-ocds",
    "cf",
    "gca",
    "nhs-categories",
    "nhs-food",
    "nhs-fresh",
    "nhs-catering",
    "nhs-consumables",
    "education",
    "eshopping",
    "ypo",
    "espo",
    "mod",
    "nhs-supplier",
    "trade-tariff",
    "fsa-agents",
    "mhra-devices",
    "mhra-medicines",
    "conflicts",
    "comtrade",
    "itc",
    "fao",
    "gca-framework",
    "trade-policy"
  ],
  "seller_regions": [
    "UK",
    "EU",
    "Thailand",
    "Cambodia",
    "Vietnam",
    "India",
    "Pakistan",
    "China"
  ],
  "extra_regions": [],
  "extra_sources": [],
  "extra_products": [],
  "include_pipeline": true,
  "include_open_tenders": true,
  "include_awards": true,
  "include_subcontracting": true,
  "scope": "UK demand; global permitted sources of supply",
  "max_commitment_gbp": 0,
  "auto_bid": false,
  "auto_contact": false,
  "auto_purchase": false,
  "store_private_quotes_publicly": false,
  "show_optional_humour": false
}
```
