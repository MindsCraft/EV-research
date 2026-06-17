# ⚡ Bangladesh EV Charging — Complete Market & Import Guide
### Tailored for a Tech-First Importer with Monta/OCPP Background

> **Your Unfair Advantage**: You have already built a charger portal on top of Monta's OCPP backend. You understand how charge points talk to CMS platforms. Most importers in Bangladesh do NOT have this. This is your moat.

---

## 🇧🇩 1. Bangladesh EV Market — The Current Reality (2025–2026)

### Market Snapshot
| Metric | Data |
|:---|:---|
| EV registrations (2023) | ~25 units |
| EV registrations (2025 est.) | Hundreds — rapid growth |
| Government EV adoption target | **30% by 2030** |
| Charging station target | **1,200 stations by 2026** |
| Current stations (mid-2025) | ~100+ across the country |
| EV charging electricity tariff | **BDT 11.36/kWh** (BERC, June 2026) |
| Import duty on EV chargers | **0% — all duties withdrawn** (FY 2026-27 budget) |

### Why Right Now Is the Perfect Entry Window
1. **Zero import duty** on EV chargers as of the 2026-27 budget — this is brand new and temporary incentive
2. **Chinese EVs flooding in** — BYD Atto 3, Deepal S07/L07 (by Changan), Chery models — all needing chargers
3. **Government 1,200-station target by 2026** = the infrastructure gap is massive
4. **Current players are few**: Ekhon Charge and Crack Platoon are the main operators — the market is wide open
5. **You have OCPP/CMS experience** that most local entrepreneurs completely lack

### Current Local Operators (Your Competition)
| Operator | Focus | Notes |
|:---|:---|:---|
| **Ekhon Charge** (by PMIL) | Public + Home charging | BYD's official charging partner, has DC fast charger on Dhaka-Chattogram highway (180kW), proprietary app |
| **Crack Platoon** | Public + Highway | Partners with Mercedes-Benz, MG, GAC brands |

> [!NOTE]
> Both players are essentially **hardware deployers with basic apps**. Neither has the depth of OCPP expertise or CMS sophistication that a Monta-experienced person brings. This is a clear gap.

---

## 🚗 2. Which Chinese EVs Are Coming to Bangladesh (And What They Use)

This is **critical** because it determines which connector standards you must support.

| Brand | Models in BD | Importer | Connector (AC) | Connector (DC) | Charging Level |
|:---|:---|:---|:---|:---|:---|
| **BYD** | Atto 3, Sealion 5/6 | CG-Runner Bangladesh | **Type 2** | **CCS2** | L2 + DCFC capable |
| **Changan / Deepal** | Deepal S07, L07 | DHS Autos | **Type 2** | **CCS2** | L2 + DCFC capable |
| **Chery** | Tiggo EV series | Asian MotorspeX | **Type 2** | **CCS2** | L2 |
| **GAC** | AION series | Local dealers | **Type 2** | **CCS2** | L2 + DCFC |
| **MG (SAIC)** | MG4, MG5 | Rangs Motors | **Type 2** | **CCS2** | L2 + DCFC |

> [!IMPORTANT]
> **Bangladesh's de facto standard is shaping up as Type 2 (AC) + CCS2 (DC).** This aligns with the global/export spec of all major Chinese EVs. **DO NOT import GB/T connector chargers** — those are China-domestic-only and will not work with vehicles sold in Bangladesh.

### Key Insight: GB/T vs International Spec
When importing Chinese EVs OR chargers, always confirm:
- **International Export Spec** = Type 2 (AC) + CCS2 (DC) ✅
- **China Domestic Spec** = GB/T (AC+DC) ❌ Won't work in Bangladesh

---

## 🔌 3. What to Import — Product Categories & Prioritization

### Category A: Level 2 AC Charger (Wall Box) — 🏆 START HERE
This is your best entry product for Bangladesh 2025-2026.

**Why:**
- Low cost per unit ($150–$500 from China)
- High demand: Every EV owner needs one at home or office
- Simple installation (any licensed electrician)
- Zero import duty now
- Most Chinese EVs in Bangladesh come with a slow "Mode 2" cable (glorified extension cord) and buyers want a proper wall box upgrade

**Specifications to source:**
```
Power Output:   7kW (single phase) or 11–22kW (3-phase)
Connector:      Type 2 (IEC 62196-2) — MUST
Voltage:        230V (single phase) or 400V (3-phase)
OCPP:           1.6J minimum, prefer 2.0.1
Connectivity:   Wi-Fi + 4G/LTE + RFID
IP Rating:      IP54+ (outdoor capable)
IK Rating:      IK08+ (vandal resistant for parking)
Certifications: CE Mark mandatory (for quality assurance)
Display:        LED status or small OLED screen
```

---

### Category B: DC Fast Charger (DCFC) — Medium-Term Play
Higher capital, but transformative for the market.

**Why:**
- 50–120kW units enable highway corridors and commercial hubs
- Ekhon Charge is already doing this on the Dhaka-CTG highway — room for Dhaka ring-road, Sylhet corridor, etc.
- Higher revenue per session
- Needed for fleet operators (ride-hailing, corporate fleets)

**Specifications to source:**
```
Power Output:   50kW, 120kW, or 180kW
Connector:      CCS2 + Type 2 combo (dual-port)
Cooling:        Liquid cooling (for 120kW+)
OCPP:           2.0.1 (security + smart charging features)
Input:          3-phase 380–415V
Certifications: CE Mark
Display:        Large touchscreen (7"+)
Payment:        RFID + QR Code (for Bangladesh context)
```

---

### Category C: Portable EV Charger (Mode 2 / Mode 3 cable) — Opportunistic
- Lowest cost ($50–$150)
- Great as an upsell/bundle with EV purchases
- Can tie up with BYD/Deepal dealers as bundle item

---

## 🏭 4. Chinese Suppliers — Quality Tiers & Brands to Contact

### Tier 1 — Premium Quality (Best for Brand Building)
| Brand | Products | Why Consider | Website |
|:---|:---|:---|:---|
| **Autel Energy** | AC Wall Box + DC Fast | Top build quality, CE/UL/FCC certified, strong OCPP support, excellent firmware update track record | autelenergy.com |
| **StarCharge** | Full range | Massive scale, used in public networks globally, strong R&D | starcharge.com |
| **TGOOD** | DC Fast Chargers | Government-grade quality, large export programs | tgood.com |

### Tier 2 — Good Quality, Export-Focused (Best Price-Performance)
| Brand | Products | Why Consider | Website |
|:---|:---|:---|:---|
| **Iocharger** | AC + DC | OCPP 2.0.1 full-profile certified (rare!), ideal for smart network | iocharger.com |
| **ZECONEX** | AC Wall Box | Export-specialist, strong compliance documentation | zeconex.com |
| **SINO Energy** | AC Wall Box | Mid-price, reasonable quality, flexible MOQ | |

### Tier 3 — OEM/White-Label (Budget Sourcing)
| Brand | Products | Why Consider |
|:---|:---|:---|
| **BESEN Group** | AC Wall Box | High-volume OEM, you can white-label under your brand, CE-certified hardware |
| **EV-TOP** | AC + portable | Flexible MOQ, export experience |
| **Shenzhen EVCC** | Various | Budget sourcing, verify certs carefully |

> [!WARNING]
> **Tier 3 suppliers require extra due diligence.** Always request original CE test reports (not just a declaration). Insist on OCPP connection test before placing bulk orders. In Bangladesh's nascent market, a bad charger reputation will kill you — it's a small community.

---

## 📋 5. Regulatory & Compliance Checklist for Bangladesh

### What You Need
| Requirement | Details | Status |
|:---|:---|:---|
| **Import Duty** | 0% — all customs duties removed (FY2026-27) | ✅ Favorable |
| **HS Code** | Chapter 85 — typically 8504.40 (static converters) | Verify with NBR/customs broker |
| **Electricity Standard** | IEC 61851-1:2017 compliance required | Ask supplier for cert |
| **CE Mark** | Strong signal of quality, Bangladesh uses as reference | Require from supplier |
| **BERC Charging Tariff** | BDT 11.36/kWh (as of June 2026) — you sell energy at this regulated rate | Fixed by government |
| **Power Division Guidelines** | EV Charging Guidelines from Power Division | Consult before installing stations |
| **BRTA Registration** | For commercial charging stations — register as CPO | Work with BIDA |

### Practical Steps
1. **Get a customs broker** familiar with HS 8504.40 — confirm zero-duty status in writing
2. **Request CE Declaration of Conformity + original test reports** from every supplier
3. **Register as a business** with BIDA for investment facilitation support
4. **Check with BRTA's EV Cell** for CPO (Charge Point Operator) registration requirements

---

## 💡 6. Your Monta Experience — How It Translates to Bangladesh

This is your biggest strategic asset. Here's how to use it:

### What You Understand That Others Don't
| Monta Concept | Bangladesh Application |
|:---|:---|
| OCPP charger portal / pairing flow | You can set up and manage any OCPP 1.6J/2.0.1 charger without a vendor's proprietary app |
| Charge session monitoring | You can build dashboards showing real-time usage for B2B clients |
| User authorization (RFID/token) | You understand how to control access — essential for workplace/fleet charging |
| Smart charging / load management | You can explain and implement DLB to commercial clients |
| Partner API integration | You can integrate charging data into client ERP/accounting systems |

### Business Angle: Build a Bangladeshi CMS / White-Label Play
Instead of just importing hardware, you can:
1. **Import OCPP-certified chargers** (hardware business)
2. **Run your own OCPP backend** (or white-label one) → brand it as a local platform
3. **Offer charging-as-a-service** to businesses: hotels, parking lots, corporate campuses
4. **Charge a monthly management fee** per charger in addition to hardware

**OCPP Backend Options (White-Label)**
| Platform | Notes |
|:---|:---|
| **Ampeco** | Highly regarded white-label CMS, used by many CPOs |
| **Virta** | European, feature-rich, white-label available |
| **ChargePoint Cloud** | Enterprise-grade |
| **ev.energy** | Smart charging focused |
| **Open-source: OCPP Server (SteVe / CitrineOS)** | Self-host, zero license cost — but you maintain it |

> [!TIP]
> Given your dev background, **SteVe or CitrineOS (open-source OCPP server)** could be self-hosted cheaply. You build the front-end portal (you already know how!), connect your Chinese hardware via OCPP, and you have a fully branded Bangladeshi charging platform. This is exactly what Monta does — and you've built it before.

---

## 💰 7. Business Models for Bangladesh

### Model 1: Hardware Importer / Distributor
- Import Level 2 wall boxes from China
- Sell to: EV dealerships (BYD, Deepal, MG), corporates, hotels, apartment buildings
- Target margin: **25–40%** on hardware (market is new, premium is acceptable)
- Low complexity, fast to start

### Model 2: CPO (Charge Point Operator)
- Deploy your own chargers at high-dwell locations
- Revenue from energy resale at BDT 11.36/kWh + service charge
- Target: Dhaka parking lots, corporate campuses, highway rest stops
- Requires capital but builds recurring revenue

### Model 3: Hardware + Platform (Your Unique Play)
- Import and brand chargers under your own label
- Build/license a local CMS → brand as "your platform"
- Sell to businesses as a complete "charging solution":
  - Hardware installation
  - Monthly management SaaS fee per charger
  - Usage analytics dashboard
  - White-glove support
- This is what Monta does — you know it inside out

### Model 4: OEM Partner for Dealers
- Approach BYD Bangladesh (CG-Runner), Deepal (DHS Autos), MG (Rangs)
- Offer co-branded wall boxes bundled with vehicle purchase
- Dealers need a charging solution for their customers — you solve it
- Volume, brand association, and low cost of customer acquisition

---

## 📊 8. Bangladesh-Specific Economics

### Level 2 Wall Box (7kW) — Unit Economics
```
Import price (China FOB):    $150–$250
Freight + clearance (est.):  $30–$50
Total landed cost:           ~$180–$300
Local selling price:         BDT 45,000–75,000 ($400–$680)
Gross margin:                35–45%
```

### BERC Tariff Arbitrage (if operating as CPO)
```
Your cost (BERC rate):       BDT 11.36/kWh
Service charge you add:      BDT 3–8/kWh
Total charged to customer:   BDT 14–20/kWh
Margin on energy:            ~25–50%
```

> [!NOTE]
> Even at BDT 11.36/kWh regulated rate, EV charging is MUCH cheaper than petrol for drivers. BYD Atto 3 consumes ~15kWh/100km → BDT ~170 per 100km vs BDT 800–1,000 for petrol equivalent. Customers have strong incentive to use your chargers.

---

## ✅ 9. Your Action Plan — Where to Start

### Immediate (Next 30 Days)
- [ ] Identify 3–5 Chinese suppliers (Tier 1 & 2 above) → request samples + CE docs + OCPP connection test
- [ ] Contact a customs broker → confirm HS 8504.40 zero-duty status in writing
- [ ] Research BIDA investment facilitation for EV sector (free support available)
- [ ] Visit / contact Ekhon Charge and Crack Platoon — understand what they're missing

### Short-Term (30–90 Days)
- [ ] Import a small pilot batch (5–10 units) of Level 2 Type 2 wall boxes
- [ ] Test OCPP connectivity with an open-source backend (SteVe/CitrineOS)
- [ ] Approach 2–3 EV dealerships (BYD, Deepal) about bundled charger sales
- [ ] Identify 1–2 commercial locations for a pilot public charging station

### Medium-Term (3–6 Months)
- [ ] Launch under your own brand
- [ ] Build or white-label a CMS platform (leverage your Monta knowledge)
- [ ] Establish a CPO entity with BRTA/Power Division
- [ ] Target corporate clients (hotels, offices, parking operators)

---

## 📚 10. Key Terms for Bangladesh Context

| Term | Bangladesh Context |
|:---|:---|
| **BRTA** | Bangladesh Road Transport Authority — handles EV registration |
| **BIDA** | Bangladesh Investment Development Authority — facilitates investment in EV sector |
| **BERC** | Bangladesh Energy Regulatory Commission — sets electricity tariffs |
| **SREDA** | Sustainable and Renewable Energy Development Authority — renewable energy for EV charging |
| **NBR** | National Board of Revenue — customs and duty authority |
| **CPO** | Charge Point Operator — what Ekhon Charge and Crack Platoon are |
| **GB/T** | Chinese domestic connector standard — **NOT for Bangladesh** |
| **Type 2** | The correct AC connector for Bangladesh's EV market |
| **CCS2** | The correct DC fast charge connector for Bangladesh's EV market |
| **OCPP** | Open Charge Point Protocol — the language you already know from Monta |
| **CMS/CPMS** | Charge Point Management System — what Monta is; you can build/license one locally |
