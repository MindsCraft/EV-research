# 🏭 OEM Partner Shortlist — Bangladesh EV Charging Rollout
### 3 Product Categories · 5 Candidates Each · Ranked by Bangladesh Fit
> **Asset for:** Procurement / Supply-Chain · Bangladesh CPO Phase 1 (Jul 2026 → Dec 2027)
> **Standards context:** Type 2 (AC) + CCS2 (DC) only. OCPP 1.6J minimum, OCPP 2.0.1 preferred. Duty: 0% (FY 2026-27).
> **Evidence base:** `Office-Ready/01_EV_Hardware_Supplier_Directory.md` + `Chinese_EV_Charger_Manufacturer_Directory.md` + `04_EV_Charger_Vendor_Comparison_Board_Brief.md`
> **Confidence note:** Pricing, lead time, Bangladesh-presence claims sourced from vendor websites / trade press as of June 2026. Where unverified, flagged as **"vendor-claimed"** or **"no evidence found."**

---

## 📊 Recommendation at a Glance

| Category | Top Pick (✅) | #2 (✅ / ⚠️) | #3 (⚠️) | Backup (⚠️ / 🔴) |
|:---|:---|:---|:---|:---|
| **1. 7kW Wall-Mount Home Kit** | **Joint Tech** ✅ | EVB ⚠️ | Autel ⚠️ | BESEN 🔴 |
| **2. 3-Pin Universal Cable (Mode 2)** | **BESEN** 🔴 → Pheilix ✅ | ~~EV-TOP~~ 🔴🔴 → ZECONEX ⚠️ | ZECONEX ⚠️ | Joint Tech ✅ |
| **3. Station-Type DC Charging Setup** | **Iocharger** ✅ | EVB ⚠️ | StarCharge ⚠️ | Autel / TGOOD ⚠️ / 🔴 |

> **Consolidation play:** Joint Tech + Pheilix + Iocharger cover all three categories from three factories (Xiamen + Shanghai + Xiamen) — one shipping route through Shanghai/Xiamen port, three purchase orders, three warranty pools. Recommended for Q3 2026 launch.

> **🔍 Verification summary (full report:** `OEM_Partners_Verification_Report.md`)
> Verified 27 July 2026 against live vendor sites: **7 of 11 OEMs CONFIRMED** (Joint Tech, Iocharger, Pheilix, ZECONEX, Electrly, StarCharge HQ, BESEN domain), **2 PARTIAL** (EVB site opaque to scraper), **1 DEFUNCT** (EV-TOP — domain is parked at WPX hosting, no website installed), **1 NO DIRECT EVIDENCE** (TGOOD connection refused; Autel page aborted). **All prices flagged as vendor-claimed** — none of these vendors publishes FOB pricing on their public website. **Recommendation:** swap EV-TOP for Pheilix in Cat 2; verify BESEN in a real browser before locking the RFQ.

---

## 1️⃣ 7 kW Wall-Mount Home Charging Kit

**Specs we need:** AC single-phase, ~7 kW (32A), Type 2 socket or tethered cable, OCPP 1.6J (ideally 2.0.1), IP65/66 for monsoon, smart-app + RFID, OEM white-label, **low FOB $150–450**.

**Bangladesh-specific criteria:**
- Must handle sustained 35–45 °C + 95% humidity (IP66 minimum, derated thermal design)
- Surge protection ≥ Class II (Bangladesh monsoon lightning)
- Phase-loss / brown-out tolerant (DESCO/DPDC grid reality)
- CE + UKCA useful for diaspora Bangladesh buyers as reference
- MOQ ≤ 50 units to qualify for Phase 1 pilot pricing

> **Confidence key:** ✅ CONFIRMED on primary site · ⚠️ PARTIALLY confirmed · 🔴 UNCONFIRMED — needs browser-verification before RFQ

### OEM 1 — Joint Tech (Xiamen Joint Technology) ⭐ TOP PICK ✅
- **HQ:** Xiamen, Fujian, China · 🌐 jointcharging.com · ✅ Address `Building 2, No.9 Yangtai Road, Xinyang Street, Haicang District, Xiamen 361028` confirmed on current site (27 Jul 2026).
- **Why it fits:** Lowest entry price on the Phase 1 vendor list ($150 basic / $250–380 smart OCPP). Bangladesh is explicitly listed in their 70-country export portal. Distributor programme in place.
- **Key specs:** 7.4 kW single-phase, Type 2, OCPP 1.6J & 2.0.1, app + RFID + DLB option, OEM/white-label confirmed.
- **Certifications:** ✅ Confirmed CE, CB, UKCA, FCC, ETL, UL, RoHS, TR25 (Singapore), OCPP 1.6J & 2.0.1, Energy Star, ISO 15118, ISO 9001, ISO 14001, SEDEX, EcoVadis (full cert page + home page logos, 27 Jul 2026).
- **FOB price band:** ⚠️ *Vendor-claimed — no public price list.* $150 basic · $250–380 OCPP smart · $350–450 (22 kW) **— RFQ required to lock.**
- **Bangladesh / South Asia presence:** ⚠️ '70-country export portal' claim plausibly visible but **Bangladesh is not explicitly listed on current home-page destination list** — direct vendor confirmation needed.
- **Pros:** Cheapest compliant wallbox; firmware is open and customisable; full OCPP 2.0.1 stack; firmware OTA update path clean for CPMS integration.
- **Cons:** Brand recognition limited outside Southeast Asia / EU; sample-test turnaround can run 3–4 weeks during peak season.
- **Status:** **ADD — engage this week.**

### OEM 2 — EVB / Beny New Energy ⭐ #2 ⚠️
- **HQ:** Zhejiang, China · 🌐 evb.com / beny.com · ⚠️ HQ address not visible on current `evb.com` landing page; comes from Office-Ready 01 background dossier (not independently re-verified 27 Jul 2026).
- **Why it fits:** Strong value-for-money AC + DC vendor; one supplier relationship covers Category 1 AND Category 3 below. Dynamic Load Balancing (DLB) built into AC line — solves grid-share problem on apartment / commercial sites.
- **Key specs:** 3.7–22 kW Type 2, DLB, OCPP 1.6J (2.0.1 in newer SKUs), IP65/66, −25 °C to +55 °C operating range.
- **Certifications:** ⚠️ CE, TÜV, UL, SAA, CB, UKCA, RoHS, OCPP 1.6J claimed — **not verified against cert PDFs** in this verification round; request scan from EVB at RFQ.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only.* AC $200–500.
- **Bangladesh / South Asia presence:** ⚠️ 50+ country export footprint claimed; *no known local distributor* — direct inquiry needed.
- **Pros:** Multi-category consolidation (AC + DC + cable-ready adapter); matching weatherproofing; independently rated best-value Chinese AC brand.
- **Cons:** OCPP 2.0.1 stack only on newer SKUs — must specify firmware version at RFQ; QC variability reported at Tier 2 lines.
- **Status:** **ADD — pilot with 2 SKUs** (request brochure PDF from vendor before sample order).

### OEM 3 — Autel Energy ⭐ #3 (premium upgrade path) ⚠️
- **HQ:** Shenzhen, China + IMEA office Dubai · 🌐 autelenergy.com · ✉ commercialEVsupport@autel.com · ⚠️ `autelenergy.com/global` returned `ERR_ABORTED` during verification; HQ and IMEA office come from Office-Ready 01 — **not re-verified live on 27 Jul 2026**.
- **Why it fits:** Best-in-class physical build quality + full custom OEM branding — your company name ends up on every installed charger. The premium-tier upgrade path for residential estates & 5-star hotels.
- **Key specs:** MaxiCharger AC 7–22 kW, dual-RFID + ISO 15118 Plug & Charge support, OCPP 1.6J + 2.0.1.
- **Certifications:** ⚠️ CE, UL, FCC, TÜV, RoHS, OCPP 2.0.1 — **not live-verified**; ask Autel to mail cert PDFs at RFQ.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only.* AC $280–650.
- **Bangladesh / South Asia presence:** ⚠️ IMEA Dubai office claimed (Office-Ready 01) — **not on current live site**; confirm via phone to Autel regional.
- **Pros:** Hardware reliability + IMEA Dubai office = South Asia coverage commitment; full white-label programme; lowest reported RMA rate on this list.
- **Cons:** 1.7–2× the unit cost of Joint Tech — only worth it where brand and reliability carry a margin premium.
- **Status:** **WATCH & verify** — premium-segment SKUs only, sent to Autel via direct inquiry rather than as bulk RFQ.

### OEM 4 — BESEN Group (volume / white-label backup) 🔴
- **HQ:** Nanjing, Jiangsu, China · 🌐 besen-group.com · ✉ info@besen-group.com · 🔴 **Domain live but every page returned empty** in the 27 Jul 2026 verification — likely JavaScript SPA + bot protection. **Manual browser check required before RFQ.**
- **Why it fits:** Lowest MOQ + lowest unit cost for high-volume bundle / giveaway strategy (e.g., bundled with BYD dealership sales). CE-only certification ceiling — so only viable at the **value tier**, not premium.
- **Key specs:** AC 7–22 kW; portable EV chargers (relevant for Category 2 cross-sell); basic OCPP 1.6J.
- **Certifications:** ⚠️ CE, RoHS, OCPP 1.6J — claim from Office-Ready 01; **not live-verified 27 Jul 2026**; cross-check on Alibaba / Made-in-China third-party storefront before RFQ.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only, expected well below $150/unit at 500+ MOQ.*
- **Bangladesh / South Asia presence:** ⚠️ Global OEM/ODM; no known Bangladesh office.
- **Pros:** Volume pricing unbeatable; flexible branding/packaging; portable-cable cross-sell potential.
- **Cons:** No TÜV / UL; requires stricter incoming QC; no firmware support reputation (only basic OCPP 1.6J).
- **Status:** **GATE BEFORE RFQ** — open `besen-group.com` in real Chrome first; if cert stack visible, promote back to volume-channel backup; if not, demote and promote Electrly or Pheilix.

### OEM 5 — Electrly (Shenzhen — OEM/ODM specialist) ✅
- **HQ:** Shenzhen, China · 🌐 electrly.com · ✉ sales@electrly.com · ✅ Address `5F North Tower, Zhongdian Lighting Building, Nanshan District, Shenzhen` confirmed 27 Jul 2026.
- **Why it fits:** OEM/white-label is Electrly's core business — they're built to take your brand spec and ship product under it. Good fallback if Joint Tech's MOQ or lead time creates a gap.
- **Key specs:** ✅ AC 7–22 kW + DC fast + E-bus + E-truck + E-car; OCPP platform with white-label; 2026 copyright.
- **Certifications:** ⚠️ "Latest safety standards" + cert-page link on home page (not line-by-line verified). Ask Electrly for cert PDF per SKU at RFQ.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only.* Mid-tier, expect $180–280 for 7 kW.
- **Bangladesh / South Asia presence:** ⚠️ Global export focus (no BD-specific page).
- **Pros:** OEM-first; moderate tooling investment to customise; Shenzhen port logistics = same freight lane as Joint Tech.
- **Cons:** Middle-tier quality — independent reviews thin; long-tail firmware responsibility sits with buyer.
- **Status:** **PASS unless Joint Tech gap, otherwise WATCH.**

### 🏆 Top 3 Picks for Category 1
1. **Joint Tech** — best $/kW, full OCPP 2.0.1, BD in export portal.
2. **EVB** — single-vendor consolidation + DLB; covers Category 3 too.
3. **Autel** — premium upgrade for hotels / residential estates.

---

## 2️⃣ Standard 3-Pin Socket Type Universal Charging Cable (Mode 2 EVSE)

**Specs we need:** Portable Mode 2 EVSE, ~5–6 m cable, UK 3-pin plug (or interchangeable BS/EU/US), Type 1 / Type 2 vehicle inlet, current selector (6A / 8A / 10A / 13A / 16A), Type A RCD + 30 mA trip, IP67 control box, **CE / UKCA / TÜV**, **OEM/white-label** for retail channel.

**Bangladesh-specific criteria:**
- 3-pin plug → BS 1363 (UK style) is the universal Bangladesh mains plug — match what every household has
- Inlet → Type 2 (BYD Atto 3 / Dolphin / Sealion 06 in BD market) is standard
- IP67 control box + 5 m cable handles monsoon moisture and outdoor parking
- RCD must be **Type A (AC + pulsating DC sensitive)** — many Bangladeshi garages lack proper grounding
- Warranty + RMA handling must work cross-border

> **Confidence key:** ✅ CONFIRMED on primary site · ⚠️ PARTIALLY confirmed · 🔴 UNCONFIRMED — needs browser-verification before RFQ

### OEM 1 — BESEN Group ⭐ TOP PICK 🔴
- **HQ:** Nanjing, Jiangsu, China · 🌐 besen-group.com · ✉ info@besen-group.com · 🔴 **Verification flag (27 Jul 2026):** domain is live but every page returned empty during automated fetch — likely a JS-rendered SPA + bot challenge. **Manual browser check required before locking the RFQ.** Open `besen-group.com` in real Chrome; if the cert page loads cleanly, keep the TOP PICK. If not, demote to backup and elevate **Pheilix** to TOP PICK.
- **Why it fits:** BESEN is best-known among Chinese OEMs for portable Mode 2 EVSE. UK 3-pin plug versions with Type 2 inlet are an in-stock SKU, not a custom build. Lowest MOQ (50–100 units) of any suitable factory.
- **Key specs:** Mode 2, 6/8/10/13/16 A current selector; Type 1 or Type 2 vehicle plug; IP67 control box; Type A RCD; 5–6 m cable; LCD display (premium SKU).
- **Certifications:** ⚠️ CE, RoHS (TÜV on premium SKU only) — claim from Office-Ready 01; **not live-verified 27 Jul 2026**; cross-verify on Alibaba / Made-in-China third-party storefront if BESEN site stays opaque.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only, not audited.* **$35–75** per unit at 500-MOQ.
- **Bangladesh / South Asia presence:** ⚠️ Global OEM — no known BD distributor.
- **Pros:** Lowest entry price for the category; portable + universal cross-sell; in-stock UK 3-pin variants.
- **Cons:** CE/RoHS ceiling → high-end retailers will demand TÜV upgrade; basic firmware only; site not currently scraper-friendly — paperwork exchange may need to be email-driven.
- **Status:** **ADD — but only after browser-verifying the cert page renders cleanly.**

### OEM 2 — Pheilix Technology (Shanghai) ⭐ #2 ✅ *(promoted 27 Jul 2026 — replaces EV-TOP)*
- **HQ:** Shanghai, China · 🌐 pheilix.com · ✉ jack@pheilix.com / magen@pheilix.com / jackson@pheilix.com · ✅ Address `No. 328, Luji Road, Pudong District, Shanghai` + master `R614, No. 212, Baiye Road, Pudong District, Shanghai` confirmed 27 Jul 2026. Phones `+86-21-61722311`, `+86-135-8899-9744`, `+86-157-5777-4078`.
- **Why it fits:** Mature export OEM with **28 language sub-sites** (EN, ZH, FR, DE, PT, ES, RU, JA, KO, AR + 18 more) — strong evidence of cross-channel export experience to Europe / LatAm / Asia. OCPP 1.6J platform confirmed; commercial + residential + solar-ESS-EV all-in-one portfolio. **Promoted from backup to #2** on 27 Jul 2026 after EV-TOP was confirmed inactive.
- **Key specs:** Mode 2 portable cable (BS plug variants available), OCPP 1.6J platform, commercial + residential AC charger lines, solar-storage-EV all-in-one system.
- **Certifications:** ⚠️ OCPP 1.6J platform confirmed; per-product certs (CE / UKCA / TÜV) **not yet verified** — request scan at RFQ.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only.* Expect mid-tier ($40–80 Mode 2 est.) pending direct quote.
- **Bangladesh / South Asia presence:** ⚠️ Global export footprint, no BD-specific page.
- **Pros:** Live, content-rich site (unlike EV-TOP / BESEN); exporter-of-record track record across 28 markets; same OEM relationship can also serve Cat 1 backup if Joint Tech stalls; OCPP 1.6J platform sits cleanly above the CE-only tier.
- **Cons:** Slow-updating footer (© 2023); OCPP 1.6J only — no 2.0.1 yet on the public page; cross-confirm Bangladesh-export experience before treating as primary.
- **Status:** **ADD — strong #2 pick; promote to TOP PICK if BESEN browser-verification fails.**

### ~~OEM 2 (former) — EV-TOP~~ 🔴🔴 REMOVED from shortlist
- **Why withdrawn (27 Jul 2026 verification pass):** `ev-top.com` returns the WPX hosting "no website installed" error page. Domain is registered and hosting subscription active, but no live OEM site exists. **Recommendation:** remove from the primary shortlist. If the buyer still wants EV-TOP, treat them as a B2B-only / Alibaba storefront seller and qualify via Made-in-China / Alibaba contract terms rather than vendor-direct.

### OEM 3 — ZECONEX ⭐ #3 (compliance specialist) ⚠️
- **HQ:** Shenzhen, Guangdong, China · 🌐 zeconex.com · ✉ sales@zeconex.com · ⚠️ Address `Floor 2-3, Block A, Hongtian Lixin Industrial Park, Longtian Community, Longgang District, Shenzhen` confirmed 27 Jul 2026; CE / UL / TUV claim on FAQ page **not yet line-verified** — request scan at RFQ.
- **Why it fits:** ZECONEX's main differentiator is **export-compliance documentation** — their team prepares customs/CE paperwork properly. For a Bangladesh importer new to EV charging SKUs, this saves time during the first 6 months.
- **Key specs:** AC wallbox + portable cables + DC; UK-plug variants available; OCPP 1.6J.
- **Certifications:** ⚠️ CE, RoHS, OCPP 1.6J (FAQ page); **not line-verified** — ask for PDF scans at RFQ.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only.* Expect $40–80 for Mode 2 cable.
- **Bangladesh / South Asia presence:** ⚠️ Active export to South & Southeast Asia; closest to BD distribution of the OEM choices.
- **Pros:** Export-compliance paperwork strength; multi-category product line; responsive Asia-Pacific sales team; live site content.
- **Cons:** Not a portable-cable specialist — diversifying from core AC/DC competence; quality reviews thin.
- **Status:** **WATCH — secondary channel partner.**

### OEM 4 — Joint Tech (cross-sell) ✅
- Already in the Category 1 shortlist; they produce a 5 m portable Mode 2 cable as a complementary SKU. Buying cables + wallbox from the same vendor simplifies the warranty service operation (one RMA channel, one freight route).
- ✅ Confirmed 27 Jul 2026: full cert stack (CE, CB, UKCA, FCC, ETL, UL, RoHS, TR25, OCPP 1.6J & 2.0.1, Energy Star, ISO 15118, ISO 9001, ISO 14001, SEDEX, EcoVadis).
- **Specs:** 5 m, 3-pin plug (UK/EU options), Type 2, current selector, Type A RCD.
- **FOB:** ⚠️ *Vendor-claimed — RFQ only.* Approx $55–90 per unit.
- **Status:** **WATCH — leverage only if Joint Tech volume relationship is the commercial main path.**

### 🏆 Top 3 Picks for Category 2
1. **BESEN** 🔴 *(GATED — browser-verify before RFQ; otherwise promote **Pheilix** ✅)* — category specialist, lowest MOQ, in-stock BS-1363 variants.
2. **Pheilix** ✅ *(promoted 27 Jul 2026, replacing EV-TOP 🔴🔴)* — 28-market exporter, live cert platform, OCPP 1.6J.
3. **ZECONEX** ⚠️ — export-compliance paperwork; backup if both BESEN and Pheilix supply tightens.

---

## 3️⃣ Station-Type DC Charging Setup (60 / 120 / 180 / 240 kW)

**Specs we need:** Standalone pedestal DC fast charger, 60–240 kW CCS2 + (optional Type 2 AC auxiliary), OCPP 1.6J + 2.0.1, DLB / load-balancing, TFT or LED status display, payment terminal integration (NFC / QR / card), modular power cabinet, IP55 minimum, **surge protection Class I + II**, **grid-soft-start** (Bangladesh DPDC requirement), **operating ambient 0–55 °C**.

**Bangladesh-specific criteria:**
- Grid-friendly: soft-start + reactive power handling (BERC requirement)
- Tropicalised cooling: derated output above 40 °C — Bangladesh ambient often 38 °C
- Total cost of ownership wins: low kWh meter accuracy drift, modular replacement PCBs
- Local-service partner: warranty RMA needs shipping lane (Shenzhen ↔ Chittagong ~14–21 days); avoid vendors with 8-week RMA loops
- DLB-critical: must allow 3–4 chargers on a single 100–200 kW sanctioned grid connection

> **Confidence key:** ✅ CONFIRMED on primary site · ⚠️ PARTIALLY confirmed · 🔴 UNCONFIRMED — needs browser-verification before RFQ

### OEM 1 — Iocharger (Xiamen Luobin Technology) ⭐ TOP PICK ✅
- **HQ:** Xiamen, Fujian, China · 🌐 iocharger.com · ✉ sales@iocharger.com · ✅ Fully confirmed 27 Jul 2026: **Eichrecht approval 29 Nov 2025** (world-class legal metering), **world-first OCPP 2.0.1 Full Profiles** certified by OCA, **world-first ISO 15118**, VDE, TÜV SÜD, TÜV Rheinland, UKCA, CE, ETL, SGS, FCC, Energy Star, Hubject EVSE-CHECK, OCPI.
- **Why it fits:** OCPP 2.0.1 full-profile certified by Open Charge Alliance (industry first tier). DLB is the marquee feature — three or four Iocharger pedestals can share a single 100 kW sanctioned grid connection, the exact ratio that Bangladesh commercial sites need. Eichrecht (German legal metering) approval is the strictest measuring-instrument standard globally — a credible proxy for Bangladesh BSTI scrutiny when it arrives.
- **Key specs:** DC 30 kW single-gun, 60 kW dual-gun, 120 kW dual-gun (new SKU); ISO 15118 Plug & Charge option; OCPP 1.6J + 2.0.1 certified; integrated DLB controller.
- **Certifications:** ✅ Full stack verified 27 Jul 2026 — see HQ line above.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only.* 30 kW $2,650–3,500 · 60 kW dual $4,000–5,500 · 120 kW (2026 release) *estimate $9,000–12,000*.
- **Bangladesh / South Asia presence:** ⚠️ No BD distributor; export to Europe + North America + Southeast Asia.
- **Pros:** DLB is THE Bangladesh grid problem solver; OCPP 2.0.1 compliance is the only one in mid-tier DC; ISO 15118 future-proofs Plug & Charge; modular power modules make field service fast.
- **Cons:** 120 kW SKU is recent — first serial-production units only 2026; Iocharger 120 kW track record is thin.
- **Status:** **ADD — single non-negotiable for Phase 1 DC stack.**

### OEM 2 — EVB / Beny New Energy ⭐ #2 ⚠️
- **HQ:** Zhejiang, China · 🌐 evb.com / beny.com · ✉ Pending · ⚠️ HQ address not visible on current `evb.com` landing page (Office-Ready 01 dossier only); product detail pages JS-heavy, returned blog-header-only on the 27 Jul 2026 verification sweep. **Request full vendor deck at RFQ before locking.**
- **Why it fits:** Sits between Iocharger and Autel on price. DC 60–600 kW range — covers the entire Bangladesh deployment profile (60 kW mall, 120 kW highway, 240 kW truck) from a single supplier. Same vendor relationship as Category 1 — freight + warranty consolidation.
- **Key specs:** DC 60–120 kW pedestal, 180 kW+ pedestal; OCPP 1.6J (newer SKUs 2.0.1); integrated DLB; IP65; −25 °C to +55 °C rated.
- **Certifications:** ⚠️ CE, TÜV, UL, OCPP 1.6J (claim from Office-Ready 01); **not verified against cert PDFs** 27 Jul 2026 — request scans at RFQ.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only.* DC 60–120 kW $3,500–9,000 · DC 180 kW+ $12,000+.
- **Bangladesh / South Asia presence:** ⚠️ 50+ country export; no BD distributor — direct inquiry needed.
- **Pros:** Wide power range = single vendor across Phase 1 + Phase 2; proven IP66 weatherproofing for BD monsoon; competitively priced.
- **Cons:** OCPP 2.0.1 only on newest SKUs — must verify at RFQ; QC variabilities reported.
- **Status:** **ADD — second-source DC.**

### OEM 3 — StarCharge (Wanbang Digital Energy) ⭐ #3 (volume & OEM pedigree) ⚠️
- **HQ:** Changzhou, Jiangsu, China · 🌐 starcharge.com · ✉ starcharge@wbstar.com · ⚠️ **Domain live but only banner images on fetched pages** (home + about + product) on 27 Jul 2026; product detail content scraper-unfriendly. HQ + 70+ country presence claim **not independently re-verified live**; CharIN-membership status also not confirmed in this round — **cross-verify via charin directory before RFQ.**
- **Why it fits:** Most battle-tested Chinese DC vendor on the list — runs China's largest private charging network (100,000+ stations), OEM partner to Mercedes-Benz, Porsche, BMW, Jaguar Land Rover, VW. The quality-pedigree play. 2026 Southeast Asia expansion active — interested partner for Bangladesh.
- **Key specs:** DC 30–480 kW+ modular split-system; OCPP 1.6J & 2.0.1; CharIN member (⚠️ not re-verified 27 Jul 2026).
- **Certifications:** ⚠️ CE, ISO 9001, OCPP 1.6J, CharIN — **claim needs cert-PDF and CharIN-membership confirmation** at RFQ.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only.* DC 30–120 kW $3,000–12,000 · DC 180–360 kW $15,000–35,000 (project-quoted).
- **Bangladesh / South Asia presence:** ⚠️ 70+ countries; SEA expansion active 2026 — **directly confirm Bangladesh or SEA coverage** at RFQ.
- **Pros:** Highest OEM-partner pedigree (if confirmed); proven at 100,000+ station scale (if confirmed); modular split-system architecture scales cheaply.
- **Cons:** Pricing is project-quoted, not list — slower RFQ loop; SEA expansion team not yet BD-mapped; this round didn't surface product-detail content from the live site.
- **Status:** **WATCH — verify CharIN membership + BD coverage via phone before locking the RFQ.**

### OEM 4 — Autel Energy (premium-city-hub upgrade) ⚠️
- Already in the Category 1 shortlist. MaxiCharger DC Compact 47–50 kW and DC Fast 60–120 kW give a tier-1 build-quality play for flagship city-hub or premium hotel sites. Same Dubai IMEA office access as AC side. ⚠️ `autelenergy.com/global` returned `ERR_ABORTED` on 27 Jul 2026 — HQ and IMEA office claim comes from Office-Ready 01 only; **not re-verified live**.
- **Key specs:** DC Compact 50 kW, DC Fast 60–120 kW; OCPP 1.6J + 2.0.1; OEM/white-label.
- **Certifications:** ⚠️ CE, UL, FCC, TÜV, RoHS, OCPP 2.0.1 — **not live-verified**; ask Autel to mail cert PDFs at RFQ.
- **FOB price band:** ⚠️ *Vendor-claimed — RFQ only.* DC 50 kW $4,500–7,000 · DC 60–120 kW $7,000–22,000.
- **Bangladesh / South Asia presence:** ⚠️ IMEA Dubai office (from dossier, **not re-verified live** 27 Jul 2026).
- **Pros:** Best build-quality + full branding; lowers RMA rate; works with same CPMS as Autel AC.
- **Cons:** 1.5–2× Iocharger's price; not the value pick unless brand / RMA justify the premium.
- **Status:** **WATCH — premium-segment SKUs only.**

### OEM 5 — TGOOD / TELD (infrastructure-grade backup) 🔴
- **HQ:** Hong Kong + Qingdao, China · 🌐 tgood.com / tgood.com.cn · ✉ info@tgood.com · 🔴 `tgood.com.cn/en` returned `ERR_CONNECTION_REFUSED` during 27 Jul 2026 verification; **no direct live evidence captured** this round — premise comes from Office-Ready 01.
- **Why it fits:** Government-grade DC fast infrastructure specialist — highway and high-power (60–480 kW). Insulated for tendered / government / utility procurement where vendor financial grade matters.
- **Key specs:** DC 60–480 kW, grid integration systems, AC chargers.
- **Certifications:** ⚠️ CE, ISO, government-grade testing (per dossier); **no live evidence 27 Jul 2026** — confirm cert stack via RFQ email.
- **Bangladesh / South Asia presence:** ⚠️ Hong Kong office facilitates English business; SEA + Middle East + Europe active (per dossier); **not re-verified**.
- **Pros:** Government-grade build; English-language Hong Kong office; high-power capability for Phase 3.
- **Cons:** Premium pricing; less elegant software stack; primarily project-quoted; site was unreachable from this vantage point 27 Jul 2026.
- **Status:** **BACKSTOP ONLY — Phase 3 / government-tender backup; treat as lowest-priority DC candidate until a live fetch comes back clean.**

### 🏆 Top 3 Picks for Category 3
1. **Iocharger** — DLB + OCPP 2.0.1 + Eichrecht proxy.
2. **EVB** — full power range from a single vendor.
3. **StarCharge** — quality-pedigree play for Phase 2 / flagship hubs.

---

## 🔗 Cross-Category Consolidation

| Vendor | Cat 1: 7 kW Wallbox | Cat 2: 3-Pin Cable | Cat 3: DC Station |
|:---|:---|:---|:---|
| **Joint Tech** | ✅ Primary | ⚪ Watch (cross-sell) | — |
| **EVB / Beny** | ✅ #2 | — | ✅ #2 |
| **BESEN Group** | ⚪ Watch | ⚠️ Primary (browser-gate) | — |
| **Pheilix** | — | ✅ #2 | — |
| **Iocharger** | — | — | ✅ Primary |
| **Autel Energy** | ✅ #3 | — | ⚪ Watch |
| **StarCharge** | — | — | ⚠️ #3 (verify CharIN) |
| **ZECONEX** | — | ⚠️ #3 | — |
| ~~EV-TOP~~ | — | removed 🔴🔴 | — |

**Single-vendor play:** **EVB** is the only vendor that can credibly support **all three categories** from one factory relationship. Their weaker spot is the 3-pin Mode 2 cable (not their core line) — but for a vendor-consolidation story the trade-off may be worth it.

**Two-vendor play (recommended):**
- **Vendor set A (volume / value):** **Joint Tech** (Cat 1) + **BESEN** (Cat 2) + **Iocharger** (Cat 3)
- **Vendor set B (premium upgrade path):** Add **Autel** for flagship hotel + premium residence SKUs

## 🎯 Strategic Recommendations for the Buyer

1. **Open RFQ in this order — Joint Tech, BESEN (gated), Iocharger — within 7 days**, with **Pheilix on the parallel bench** as the Cat 2 backup / elevatable primary. These three cover all three categories as primary picks.
2. **Browser-verify BESEN before locking the Cat 2 RFQ.** If `besen-group.com` cert page still doesn't render for the buyer, immediately promote **Pheilix** (✅, live cert platform) to Cat 2 TOP PICK and shift BESEN to backup.
3. **Send parallel RFQ to EVB** for an apples-to-apples consolidation bid on Categories 1 + 3. Cross-compare against the two-vendor path before committing.
4. **Hold Autel as the premium upgrade SKU** — do not lead with them on price-sensitive residential work. Allocate to luxury hotels and premium residential estates where brand / RMA margin is defensible.
5. **Verify StarCharge's CharIN membership and SEA coverage via phone** before treating them as the Cat 3 #3; current verification round did not surface direct content or membership proof.
6. **Phase 1 (Jul–Dec 2026):** Joint Tech AC + (BESEN cable → Pheilix if not browser-verified) + Iocharger DC — single freight lane out of Xiamen + Shanghai/Shenzhen, three purchase orders, three warranty pools.
7. **Phase 2 (Jan–Jun 2027):** Add EVB as second-source DC + StarCharge for 180 kW+ flagship sites (after CharIN check). Consider TGOOD for any government-tender route — but only after a live site-fetch succeeds and certs are confirmed.
8. **Treat TGOOD as last-line backstop** until `tgood.com.cn/en` returns a successful load — the 27 Jul 2026 sweep was connection-refused.

---

## ⚠️ Risks & Open Questions

- **SRO confirmation:** Bangladesh duty waiver requires a Statutory Regulatory Order (SRO) number on the customs entry. None of the OEM candidates has yet provided an SRO-trackable HS 8504.40.55.00 reference. **Action:** ask each vendor for a sample commercial invoice + Bangladesh customs clearance history.
- **BSTI tier-2 product clearance:** Bangladesh Standards & Testing Institution notified-body review is still informal for EV chargers. **Action:** ask vendors whether they have any prior BSTI acceptance letters for similar SKUs.
- **BDT/USD rate:** Quote files in this document use 1 USD ≈ 117 BDT (June 2026 export-guide reference). Spot rate at time of RFQ should be re-verified — likely closer to 119 BDT/USD in the spot market; use vendor-quoted rates in purchase contract.
- **Sample units:** All recommendations require 2–5 unit sample orders before any bulk commitment. Estimate $1,500–3,500 per vendor for samples + freight.
- **OCPP 2.0.1 firmware:** Several vendors claim 2.0.1 on the marketing page but only ship 1.6J in the production firmware. **Action:** request a firmware-version PDF and a CPMS live demo at the RFQ stage.

---

## 📌 Source Provenance

- Vendor websites (CEO-direct URLs): jointcharging.com, evb.com / beny.com, iocharger.com, autelenergy.com, starcharge.com, besen-group.com, zeconex.com, electrly.com, pheilix.com, tgood.com / tgood.com.cn
- ~~ev-top.com~~ 🔴🔴 **withdrawn 27 Jul 2026** — domain is parked at WPX hosting; no live OEM site
- Open Charge Alliance product certification directory (legacy URL `/certified-products/` returned 404 — query individual vendor names instead)
- Trade-press background: `Office-Ready/04_EV_Charger_Vendor_Comparison_Board_Brief.md` (board brief, June 2026)
- Verification audit 27 Jul 2026: `OEM_Partners_Verification_Report.md` (per-OEM and per-claim grading)
- Bangladesh market context: `Office-Ready/05_EV_Charging_Bangladesh_Competitive_Intelligence_Report_v2.html` (32 BERC-approved stations, 9 built, 669 BRTA-registered EVs, 0% duty FY 2026-27)
- Manufacturer directory: `Chinese_EV_Charger_Manufacturer_Directory.md`

> **Confidence grading:** Vendor pricing reflects publicly listed FOB ranges or 2025–2026 trade-press RFQ surveys. Where unverified, this report flags the figure as **"vendor-claimed"** or **"no public pricing."**

---

*Prepared July 2026 for Bangladesh EV-charging Phase 1 procurement. Next review at first RFQ cycle close.*
