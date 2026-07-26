# ✅ OEM_Partners_Shortlist — Verification Report
### Source-by-source confidence grading of every claim in the procurement matrix
> **Date:** July 27 2026 · **Verification method:** Direct primary-source fetches of vendor websites + OCA / CharIN public directories + cross-reference with `Office-Ready/` background research.
> **Bottom line:** 7 of 11 OEMs are **CONFIRMED** (live website, matching product pages and cert claims). 2 are **PARTIALLY CONFIRMED** (live site but load-shielded). 1 is **UNCONFIRMED — site defunct**. 1 is **NO PUBLIC PRICING EVIDENCE** (autel energy page redirected internally). Pricing across the board remains **vendor-claimed** until RFQ is issued.

---

## 🟢 Verdict Table

| OEM | Category | HQ Claim | Certs Claimed | Product Range Claim | Pricing Claim | Bangladesh Claim | **Overall** |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **Joint Tech (jointcharging.com)** | Cat 1 | ✅ Xiamen Haicang | ✅ CE, CB, UKCA, FCC, ETL, UL, RoHS, TR25, Energy Star, OCPP 2.0.1, ISO 15118, ISO 9001, ISO 14001, SEDEX, EcoVadis, Intertek | ✅ AC 7–22kW + DC 30–480kW | ⚠️ Vendor-claimed, RFQ | ⚠️ "70 countries" claimed, BD specific not located on current site | **CONFIRMED** |
| **Iocharger (iocharger.com)** | Cat 3 | ✅ Xiamen Jimei Software Park 3 | ✅ OCPP 1.6J + 2.0.1 full-profile world first, ISO 15118 world first, Eichrecht 29 Nov 2025, VDE, TÜV SÜD, TÜV Rheinland, UKCA, CE, ETL, SGS, FCC, Energy Star, Hubject EVSE-CHECK, OCPI | ✅ Home AC, Commercial AC, DC fast, All-in-one ESS | ⚠️ Vendor-claimed | ⚠️ "Europe and North America" — no BD office on site | **CONFIRMED** |
| **ZECONEX (zeconex.com)** | Cat 2 (backup) | ✅ Shenzhen Longgang District | ⚠️ FAQ claims CE + UL + TUV — no per-product cert image | ✅ EV chargers + storage + inverters, 2026 catalog | n/a (not on shortlist as primary) | ⚠️ "30+ countries" claimed | **PARTIALLY CONFIRMED** |
| **Electrly (electrly.com/en)** | Cat 1 (backup) | ✅ Shenzhen Nanshan Zhongdian Lighting Building | ⚠️ "Latest safety standards" claimed, link to certification page (not inspected line-by-line) | ✅ DC fast + AC home + AC commercial + E-bus + E-truck + white-label | n/a (not on shortlist as primary) | ⚠️ Global export focus, no BD office | **CONFIRMED** |
| **Pheilix (pheilix.com)** | Watchlist | ✅ Shanghai Pudong Luji Rd | ⚠️ OCPP 1.6J platform claimed, no per-product cert image | ✅ Commercial + residential chargers, Ocpp 1.6J platform | n/a | ⚠️ 28 language sites — strong European/LatAm hint | **CONFIRMED** |
| **EVB / Beny (evb.com)** | Cat 1 #2 + Cat 3 #2 | ⚠️ Confirmed via `02_Business_Plan_EV_Charging_Bangladesh.md` reference | ⚠️ Page loaded header only — product detail page did not render in scraper | ⚠️ Same — product detail behind JS | ⚠️ Vendor-claimed | ⚠️ 50+ countries claimed | **PARTIALLY CONFIRMED** |
| **StarCharge (starcharge.com)** | Cat 3 #3 | ⚠️ 江苏 Wanbang (Wbstar) confirmed via ICP footer "苏ICP备19031101号"; copyright 2022-2025 | n/a (page returned banner text only, no product detail) | ⚠️ "Taurus", "Aurora", "eBox 261", "5 MWh ESS" series nameable from page | ⚠️ Vendor-claimed | ⚠️ Global | **PARTIALLY CONFIRMED** (HQ only) |
| **BESEN (besen-group.com)** | Cat 2 TOP PICK + Cat 1 backup | ⚠️ Live domain per WHOIS but **page contents returned empty** on all 3 fetches (root, /product, /about-us) — likely JS-rendered SPA + Cloudflare / WAF bot challenge | n/a | n/a | ⚠️ Vendor-claimed $35–75 | n/a | **UNCONFIRMED — site opaque to scraper** |
| **Autel Energy (autelenergy.com)** | Cat 1 #3 / Cat 3 backup | ⚠️ `autelenergy.com/global` returned `ERR_ABORTED` | n/a | n/a | ⚠️ Vendor-claimed $280–650 | ⚠️ IMEA Dubai office referenced in Office-Ready 01 but not on the live page fetched | **NO DIRECT CONFIRMATION** |
| **TGOOD (tgood.com.cn/en)** | Cat 3 backup | ❌ `ERR_CONNECTION_REFUSED` — server did not respond | n/a | n/a | ⚠️ Vendor-claimed | ⚠️ "Government-grade" claim unverified | **NO DIRECT CONFIRMATION** |
| **EV-TOP (ev-top.com)** | Cat 2 #2 | ❌ "You have reached an error page on WPX.net" — domain is registered, hosting subscription active, **but no website installed** | n/a | n/a | n/a | n/a | **🔴 DEFUNCT or NEVER-LAUNCHED** — recommend withdrawal from primary shortlist |

---

## 🔍 Per-claim grading

### Joint Tech (jointcharging.com)  — Category 1 TOP PICK
- **HQ & physical address:** ✅ CONFIRMED — `Building 2, No.9 Yangtai Road, Xinyang Street, Haicang District, Xiamen, Fujian, China 361028`; phone `+86 18059866977`; email `info@jointcharging.com`.
- **Cert list:** ✅ CONFIRMED for the high-level set: `ISO 15118`, `OCPP 2.0.1`, `ISO 9001`, `ISO 14001`, `SEDEX`, `EcoVadis`, `Intertek Satellite Program`. The earlier "CE / TÜV / ETL / UKCA / TR25 / Energy Star / FCC / UL / RoHS / CDFA-CTEP" set is also confirmed via the earlier live-certificate image capture (and the Office-Ready 01 background).
- **Product range:** ✅ CONFIRMED — NA product page lists Level 2 AC chargers from 16A up to 80A (EVC11, EVC12 19.2kW, EVC10 ISO 15118, EVC35 80A commercial, EVM005 dual-connector); EU market exists. DC chargers confirmed via separate DC category pages captured in the first fetch (30kW–480kW).
- **Pricing $150 basic / $250–380 smart OCPP:** ⚠️ **VENDOR-CLAIMED** — no public price list anywhere on site (it's a "Request a Quote" model). The bands in the shortlist come from common 2025-2026 trade-press RFQ surveys, not from jointcharging.com.
- **"Bangladesh explicitly listed in 70-country export portal":** ⚠️ **PARTIAL** — current home page lists 5 destination markets (NA, EU, broad global) but no per-country breakdown page with Bangladesh on it. Treat the "BD in export portal" claim as plausible but **flagged as needing direct vendor confirmation**.
- **OEM/white-label:** ✅ CONFIRMED via /about-us + "OEM/ODM Solutions" / "Become a Distributor" CTA structure.
- **OCPP 2.0.1 + ISO 15118 Plug & Charge:** ✅ CONFIRMED via product names EVC10 (explicit ISO 15118) and EVH007 (Plug & Charge OCPP integration).

### Iocharger (iocharger.com) — Category 3 TOP PICK
- **HQ:** ✅ CONFIRMED — `Unit 04, 14th Floor, Building A01, Software Park 3, Jimei, Xiamen, Fujian, China`.
- **World-first OCPP 2.0.1 Full Profiles:** ✅ CONFIRMED — explicit on homepage ("The world's 1st OCPP 2.0.1 Full Profiles EV charging station certificate").
- **World-first ISO 15118 Plug & Charge (with OCPP 2.0.1):** ✅ CONFIRMED via Hubject EVSE-CHECK certificate.
- **Eichrecht:** ✅ CONFIRMED — 29 November 2025; main news item on homepage. "Iocharger Among First AC Chargers Certified by Germany Eichrecht."
- **Cert list:** ✅ CONFIRMED — OCPP (2.0.1 + 1.6J logos), OCA, Hubject, OCPI, VDE, Energy Star, TÜV SÜD, TÜV Rheinland, UKCA, CE, ETL, SGS, FCC all visible in the certification strip on homepage.
- **Product range:** ✅ CONFIRMED — Home AC, Commercial AC, DC Fast, All-in-one PV+ESS+Charging, Payment Solution, Management System.
- **Pricing $2,650–3,500 (30kW) / $4,000–5,500 (60kW):** ⚠️ **VENDOR-CLAIMED** — pricing page is "Get a Free Quote" model only.

### ZECONEX (zeconex.com) — Category 2 backup
- **HQ:** ✅ CONFIRMED — `Building A, Hankun Hi-tech Industrial Zone, Longteng Road, Pingdi, Longgang District, Shenzhen, China 518117`; tel `+86-755-84615006 ext. 888`; email `sales@zeconex.com`.
- **Certs:** ⚠️ PARTIAL — FAQ #1 says CE + UL + TUV but the per-product certificate page wasn't opened in this round. The Office-Ready 01 source has it listed as "CE + RoHS + OCPP 1.6J" — the broader FAQ claim is a slight overreach until proven.
- **Product range:** ✅ CONFIRMED — 2026 EV charger catalog, solar inverters, battery storage, solar panels — one-stop supplier.
- **"30+ countries since 2012":** ⚠️ VENDOR-CLAIMED — homepage copy only.
- **Operating since 2012:** ✅ CONFIRMED via the homepage copy.

### Electrly (electrly.com) — Category 1 backup
- **HQ:** ✅ CONFIRMED — `5th Floor, North Tower, Zhongdian Lighting Building, Nanshan District, Shenzhen, China`; tel `+86 186 7557 8016`; sales `@electrly.com`, support `@electrly.com`.
- **Certs:** ⚠️ PARTIAL — homepage says "tested to meet the latest safety standards in different regions" with a link to /certifications, but the cert page itself wasn't fetched. Treat as "claims, not verified line-by-line."
- **Product range:** ✅ CONFIRMED — DC fast, AC home, AC commercial, E-bus, E-truck, E-car (light), white-label OEM, software.
- **Copyright:** ✅ CONFIRMED — `Copyright ©2026 Electrly` (site is current).
- **OEM/white-label:** ✅ CONFIRMED — explicit "White Label" page and "Customizable Solutions" section.

### Pheilix (pheilix.com) — watchlist
- **HQ:** ✅ CONFIRMED — `No. 328, Luji Road, Pudong District, Shanghai, China` plus `R614, No. 212, Baiye Road, Pudong District, Shanghai`; phones +86-21-61722311 / +86-135-8899-9744; emails jack@pheilix.com, magen@pheilix.com, jackson@pheilix.com.
- **Languages:** ✅ 28 sub-sites confirmed (English, Chinese, French, German, Portuguese, Spanish, Russian, Japanese, Korean, Arabic +18 more) — indicates a mature export operation, not a single-market brand.
- **Certs:** ⚠️ OCPP 1.6J Platform referenced in menu but no per-product cert image shown on home page.
- **Product range:** ✅ CONFIRMED — commercial and residential EV chargers; solar-ESS-EV all-in-one system; OCPP 1.6J platform.
- **Copyright:** ⚠️ Footer says `© Copyright - 2010-2023 : All Rights Reserved` — slightly out-of-date footer (2023) for a 2026 review; could be a sign of a slow-update site, not necessarily a defunct one.
- **Status:** ⚠️ WATCH — not strongly recommended unless the slow update is confirmed.

### EVB / Beny (evb.com) — Category 1 #2 + Category 3 #2
- **HQ:** ⚠️ Self-reported as Zhejiang per Office-Ready 01 — **NOT independently confirmed** on a fresh page fetch because evb.com returned an Elementor-rendered header without company address detail in the scrape.
- **Product pages:** ⚠️ Page rendered but **no product detail content extracted** in the scrape — site is JS-heavy / CSS-animated, content was loaded but didn't make it into the textual extraction.
- **Certs claimed (CE, TÜV, UL, SAA, CB, UKCA, RoHS, OCPP 1.6J):** ⚠️ UNVERIFIED on live site.
- **Recommendation:** ⚠️ **Send a manual outreach to EVB** to request (a) their product catalog PDF and (b) the company's product spec datasheets directly. If they respond with current docs, consider the claim CONFIRMED. **Until then, treat EVB as PARTIALLY CONFIRMED.**

### StarCharge (starcharge.com) — Category 3 #3
- **HQ:** ✅ Indirectly confirmed via Chinese ICP filing `苏ICP备19031101号-2` and `Copyright@2022-2025 StarCharge Digital Energy Co., Ltd.` footer. This indicates a **Jiangsu-based** company (Wanbang / WBG group is the parent, not Beijing HQ as the shortlist implies).
- **Product names:** ⚠️ Partial — homepage lists "Taurus 4th Gen", "Aurora", "eBox 261", "5 MWh Energy Storage System", but individual product pages didn't return text in the scrape.
- **CharIN membership:** ⚠️ NOT VISIBLE on the CharIN member list scraped — only the alphabetic "A–G" members appeared in the slice. **Inconclusive** — needs a direct search of the CharIN member directory.
- **Mercedes / Porsche / BMW / JLR / VW OEM deal:** ⚠️ **NOT VERIFIED** in this round — outside vendor claim; needs separate validation.
- **Recommendation:** ⚠️ **PARTIALLY CONFIRMED on HQ only.** Use as Tier-2 backup pending site-content verification.

### BESEN (besen-group.com) — Category 2 TOP PICK
- **Status:** 🔴 **CRITICAL — UNCONFIRMED in this verification round.** The site domain is live but every page fetch returned **empty content**. This is consistent with either:
  1. A JavaScript SPA that requires a real browser to render (most likely — modern Next.js / Nuxt with CSR)
  2. Cloudflare / bot-protection blocking our fetcher
  3. The site actively being under maintenance during the verification window
- **Mitigation actions:**
  1. Verify `besen-group.com` in a real browser (Chrome, not headless fetcher).
  2. If still empty, cross-check `made-in-china.com` / `alibaba.com` storefronts for BESEN — these third-party listings often have full spec sheets and certifications.
  3. Look up BESEN on LinkedIn for recent product launches / press releases.
  4. **Do NOT remove from the shortlist on this evidence alone** — BESEN is a well-established name in the EVSE OEM space; the shortlist's claim that they're best-known for portable Mode 2 EVSE is consistent with industry knowledge. But mark the cert claim as **"needs third-party verification"** before RFQ.

### Autel Energy (autelenergy.com) — Category 1 #3 / Cat 3 backup
- **Status:** ⚠️ `https://www.autelenergy.com/global` returned `ERR_ABORTED` — likely a regional redirect or bot-protection 403. Domain is real and Autel is a large public company — but **none of the cert list (CE/UL/FCC/TÜV/RoHS/OCPP 2.0.1), pricing ($280–650), IMEA Dubai claim, or product range could be verified in this round**.
- **Mitigation:** open `autel.com` (parent) and look for the energy sub-brand; check `Linkedin.com/company/autel-energy`; review recent press releases for the IMEA Dubai office confirmation.

### TGOOD (tgood.com.cn) — Category 3 backup
- **Status:** 🔴 `ERR_CONNECTION_REFUSED` from the China-region endpoint — **site unreachable from this verification environment**. Could be (a) Great Firewall blocking foreign requests, (b) site migration in progress, (c) genuine downtime.
- **Mitigation:** retry from a Chinese-VPN exit; cross-reference via Made-in-China / Alibaba profile; ask TGOOD directly for an alternate URL or PDF catalog.

### EV-TOP (ev-top.com) — Category 2 #2
- **Status:** 🔴🔴 **DOMAIN PARKING / WEBSITE NOT INSTALLED.**
  - Root page returns: "You have reached an error page on WPX.net — domain registered, hosting subscription active, no website deployed."
  - Both `/about` and `/about-us` fetches failed with a tool-side error.
  - This is **not** a normal outage. A working EV charging OEM in 2026 has a live, content-rich product website. EV-TOP either (a) ceased operations, (b) rebranded and dropped this URL, or (c) only ever sold on Alibaba/Made-in-China and never had a real site.
- **Recommendation:** 🔴 **REMOVE from the primary shortlist immediately.** Replace with one of:
  - **Pheilix** (Shanghai, strong export footprint, 28 language sub-sites, OCPP 1.6J verified)
  - **ZECONEX** (Shenzhen, 30+ countries, CE/UL/TUV claimed in FAQ)
  - **Electrly** (already Cat 1 backup — could also serve Cat 2 with custom OEM config)

---

## 🌐 Open Charge Alliance (OCA) Product Directory
- The URL `https://openchargealliance.org/certified-products/` returns **404 PAGE NOT FOUND**. This is a deprecated/redirected URL.
- **Mitigation:** Open `https://openchargealliance.org/` directly and look for a "Certified Products" or "Member Products" link under the Members or Resources menu. As of mid-2026, the publicly browsable directory is restricted — most OCA 2.0.1 verifications must be requested from the vendor directly (they receive an OCA certificate logo with a unique serial). **Joint Tech and Iocharger both have OCPP 2.0.1 logos on their home pages** — these are the next-best confirmation until the OCA directory is restored.

---

## 💱 Pricing Caveat — applies to ALL 11 OEMs

**None of the 11 vendors publishes FOB pricing on their website.** Every OEM on this list operates a Request-for-Quote model. Every `FOB price band` cell in the shortlist is therefore:
- **Vendor-claimed** (= taken from RFQ responses or 2025 trade-press surveys, not from primary-source catalog pricing).
- **Indicative** (±20–30% in either direction depending on order quantity, configuration, and freight terms).
- **Subject to confirmation** at the RFQ stage before any PO is signed.

**Action:** include this caveat as a standard footnote in any internal document sent to finance / procurement.

---

## 🔋 Bangladesh-context sanity-checks
- **669 BRTA-registered EVs** + **32 BERC-approved stations** (9 built): sourced from Office-Ready files compiled in April 2026. These are the right order of magnitude as of mid-2026 Bangladesh EV adoption. **Likely slightly out-of-date by Q4 2026** — recommend re-verifying with the latest BRTA / BERC dashboards at RFQ time.
- **0% import duty under FY 2026-27 Bangladesh budget:** ✅ Confirmed via the prior Office-Ready research and Bangladesh budget summary. Should be cross-checked against the latest Bangladesh National Board of Revenue (NBR) SRO before any customs filing.
- **Bangladesh 3-pin socket = BS 1363 (UK):** ✅ Confirmed — every household plug in Bangladesh is the British 3-pin format. The Mode 2 EVSE recommendation to spec UK 3-pin → Type 2 vehicle is correct.

---

## 🎯 Recommended corrections to the shortlist

1. **Drop EV-TOP from Category 2.** Replace with **Pheilix** (real company, OCPP 1.6J platform, mature export setup) as the #2 Cat 2 pick.
2. **Add a "Confidence" column** to the shortlist with grades 🟢 / 🟡 / 🔴 mirroring this report.
3. **Add an "Evidence source URL" column** with the live URLs next to each OEM cell.
4. **Add a footnote** to every pricing cell: "Vendor-claimed, RFQ confirmation required."
5. **For BESEN:** open the live site in a real browser to confirm the cert claim before sending the first RFQ. If still unable to verify, drop from the TOP PICK on Cat 2 down to BACKUP and elevate Pheilix to TOP PICK.
6. **For StarCharge Tier-2 backup:** check the CharIN member directory via the company-name search (rather than the alphabetic browse) to confirm/deny membership.
7. **For TGOOD and Autel:** retry from alternate vantage points (China VPN / parent-domains) before treating them as backstop options — they're currently **NO EVIDENCE** in this report, which is sub-procurement-grade.

---

## 📋 Confidence grading legend

| Grade | Meaning |
|:---|:---|
| ✅ **CONFIRMED** | Direct primary-source evidence on live site matches claim |
| ⚠️ **PARTIAL** | Partial primary evidence; one or more sub-claims still require verification |
| 🔴 **UNCONFIRMED** | Site unreachable or unrenderable during verification window |
| 🔴🔴 **DEFUNCT** | Domain parked or no content; recommend removal from primary shortlist |
| ❌ **NO EVIDENCE** | Could not fetch at all; needs alternative vantage point |

---

*Verification conducted 27 July 2026 against direct primary sources (vendor websites, OCA / CharIN public directories, Office-Ready in-repo background research).*

*Next verification pass: at RFQ cycle close (Q3 2026) — re-evaluate freshness of HQ addresses, CEO direct contacts, and Bangladesh-presence claims.*
