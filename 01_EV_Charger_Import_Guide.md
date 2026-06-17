# ⚡ EV Charger Import — Complete Training Guide

> Your comprehensive reference for understanding, sourcing, and importing EV charging point components.

---

## 📚 Table of Contents
1. [What is an EV Charger (EVSE)?](#1-what-is-an-ev-charger-evse)
2. [The 3 Charging Levels](#2-the-3-charging-levels)
3. [Core Hardware Components](#3-core-hardware-components)
4. [Global Connector Standards](#4-global-connector-standards)
5. [Certifications & Regulatory Requirements](#5-certifications--regulatory-requirements)
6. [Smart Charging Features to Look For](#6-smart-charging-features-to-look-for)
7. [Top Manufacturers & Suppliers](#7-top-manufacturers--suppliers)
8. [Business Models for Importers](#8-business-models-for-importers)
9. [Step-by-Step Import Checklist](#9-step-by-step-import-checklist)
10. [Key Terms Glossary](#10-key-terms-glossary)

---

## 1. What is an EV Charger (EVSE)?

An **EV Charger** — formally called **Electric Vehicle Supply Equipment (EVSE)** — is not a "charger" in the traditional sense. It is more accurately a **managed power delivery system** that:

- Safely connects the electrical grid to an EV battery
- Communicates with the vehicle to negotiate charging rates
- Monitors safety (temperature, current, ground faults) in real time
- Can communicate over a network for smart/remote management

> [!IMPORTANT]
> You are not just buying a cable and plug. You are buying a **safety-critical electronic system** with embedded software, communication protocols, and power electronics.

---

## 2. The 3 Charging Levels

| Feature | **Level 1** (Slow AC) | **Level 2** (Fast AC) | **Level 3 / DCFC** (DC Fast) |
|:---|:---|:---|:---|
| **Voltage** | 120V (US) / 230V (EU) | 208–240V AC | 400–900V+ DC |
| **Power Output** | 1.2 – 2.4 kW | 3 – 22 kW | 15 – 350+ kW |
| **Charging Speed** | 3–5 miles/hr | 20–40 miles/hr | 100–200+ miles in 20 min |
| **Who converts AC→DC** | Vehicle's onboard charger | Vehicle's onboard charger | **The station itself** |
| **Hardware Complexity** | Simple | Moderate | Complex & expensive |
| **Typical Use** | Home overnight | Home / Work / Public | Highway / Fleet / Public |
| **Cost Range** | $200–$700 | $400–$2,500 | $10,000–$150,000+ |
| **Best for Importing** | Easy entry point | 🏆 Best volume opportunity | High margin, high capital |

> [!TIP]
> **For most importers, Level 2 is the sweet spot.** High demand, manageable cost, widely compatible, and required certifications are achievable.

---

## 3. Core Hardware Components

### 3A. Components Common to ALL Charger Types

| Component | What It Does | What to Inspect When Sourcing |
|:---|:---|:---|
| **Charging Connector / Plug** | Physical interface with vehicle | Match connector type to target market (see Section 4) |
| **Charging Cable** | Carries current from unit to vehicle | Cable gauge rating (Amps), insulation class, IP rating |
| **Charge Controller / MCU** | The "brain" — manages comm between charger and car | Look for IEC 61851 compliance, ISO 15118 support |
| **Enclosure / Housing** | Protects electronics from weather | IP54+ for outdoor, IK08+ for vandal resistance |
| **Safety Systems** | Prevents electrocution and fire | Must include GFCI/RCD, over-current protection, fuses |
| **Status Indicator (LED/Display)** | Shows charging status to user | Must clearly signal: ready, charging, fault, complete |
| **Communication Interface** | Connects to network backend | OCPP 1.6J or 2.0.1 (via LAN, Wi-Fi, 4G/LTE) |

### 3B. Additional Components for Level 2 (AC) Chargers

| Component | Purpose |
|:---|:---|
| **Contactor / Relay** | Electrically opens/closes the power circuit under software control |
| **Residual Current Device (RCD)** | Cuts power instantly if a ground fault is detected (life-safety) |
| **Earth Loop Impedance** | Ensures proper grounding to prevent shock hazards |
| **Pilot Circuit (CP/PP lines)** | J1772/IEC 61851 signal wires that communicate state between charger & car |

### 3C. Additional Components for DC Fast Chargers (DCFC/Level 3)

| Component | Purpose | Notes |
|:---|:---|:---|
| **Power Conversion Unit (PCU)** | Converts AC grid power → DC for the battery | Uses IGBT or **SiC (Silicon Carbide)** modules — SiC = more efficient & compact |
| **AC Input Section** | Receives 3-phase 480V grid power | Requires utility-grade switchgear at install site |
| **DC Output Section** | Delivers regulated DC voltage to vehicle | Must dynamically adjust to vehicle's requested voltage |
| **Transformer / Isolation Stage** | Electrically isolates grid from vehicle | Critical for safety in high-power systems |
| **Thermal Management System** | Dissipates heat generated during high-power charging | Liquid cooling preferred for 100kW+ systems |
| **Surge Protectors / SPD** | Guards against voltage spikes from the grid | Essential in regions with unstable grid power |
| **CAN Bus / Communication Board** | Handles vehicle-to-charger protocol (e.g., CHAdeMO, CCS, ISO 15118) | Match to connector standard you're deploying |

---

## 4. Global Connector Standards

> [!IMPORTANT]
> This is the #1 thing to get right when importing. **The wrong connector type = unsellable product** in your target market.

| Connector | Standard | Region | AC / DC | Notes |
|:---|:---|:---|:---|:---|
| **Type 1** | SAE J1772 | North America, Japan | AC only | Older standard, being replaced by NACS |
| **Type 2** | IEC 62196 (Mennekes) | Europe, Global | AC (single & 3-phase) | **EU mandatory standard** |
| **NACS** | SAE J3400 | North America (2025+) | AC + DC | Tesla's connector, now dominant in US/Canada |
| **CCS1** | SAE J1772 + DC pins | North America | AC + DC | Combo plug for both AC and DC fast charging |
| **CCS2** | Type 2 + DC pins | Europe, Global | AC + DC | European DC fast charging standard |
| **CHAdeMO** | CHAdeMO Assoc. | Japan (legacy) | DC only | Declining; Nissan/Mitsubishi legacy vehicles |
| **GB/T** | Chinese National Std | China ONLY | AC + DC | Not compatible outside China |

### Quick Decision Framework:
```
Selling in Europe?        → Source Type 2 (AC) and/or CCS2 (DC)
Selling in North America? → Source CCS1 (AC+DC) or NACS (growing fast)
Selling in Japan?         → CCS2 + CHAdeMO adapters
Selling in Bangladesh?    → Type 2 (AC) + CCS2 (DC) — matches all Chinese EVs sold there
Selling in multiple regions? → Source modular units with swappable heads
```

---

## 5. Certifications & Regulatory Requirements

### 5A. European Union (CE Mark)

To legally sell in the EU/EEA, you **must** have the CE mark, which covers:

| Directive | What It Covers | Key Standard |
|:---|:---|:---|
| **Low Voltage Directive (LVD)** 2014/35/EU | Electrical safety | EN IEC 61851-1 |
| **EMC Directive** 2014/30/EU | No electromagnetic interference | EN 61851-21-2 |
| **Radio Equipment Directive (RED)** 2014/53/EU | Wi-Fi, 4G, Bluetooth | Applies if connected |
| **RoHS** 2011/65/EU | No hazardous substances (lead, mercury, etc.) | EN IEC 63000 |
| **MID** 2014/32/EU | Accurate metering for billing by kWh | EN 50470 |

> [!WARNING]
> If the charger bills customers per kWh, **MID certification is legally required** in the EU. Many cheap imports lack this — it is a serious compliance gap.

### 5B. United States

| Certification | Covers | Issuing Body |
|:---|:---|:---|
| **UL 2202** | EVSE safety | UL (Underwriters Laboratories) |
| **UL 2594** | Connectors & mechanical | UL |
| **UL 2231-1/-2** | Shock protection systems | UL |
| **UL 9741** | Bidirectional (V2G) charging | UL |
| **FCC Part 15** | Electromagnetic compatibility / radio | FCC |
| **NEC Article 625** | Installation compliance | NEC (enforced by local AHJ) |

### 5C. Other Markets

| Market | Certification |
|:---|:---|
| UK (post-Brexit) | **UKCA mark** (similar to CE) |
| Australia | **RCM mark** + AS 61851 |
| Canada | **cUL** or **CSA** certification |
| India | **BIS** certification (IS 17017) |
| Singapore | **TR25** local type approval |
| **Bangladesh** | **CE Mark** (used as reference standard) + IEC 61851-1:2017 compliance |

> [!CAUTION]
> **You are legally responsible as the importer.** Never rely solely on manufacturer claims. Always obtain third-party test reports from an accredited lab (TÜV, Bureau Veritas, Intertek, SGS).

---

## 6. Smart Charging Features to Look For

These features determine whether a charger is competitive in 2025 and beyond:

| Feature | What It Does | Priority |
|:---|:---|:---|
| **OCPP 1.6J** | Open protocol for charger↔backend communication | 🔴 Non-negotiable |
| **OCPP 2.0.1** | Newer version with better security & smart charging | 🟡 Strongly preferred |
| **ISO 15118** | "Plug & Charge" — car authenticates automatically, no app/RFID needed | 🟡 Premium feature |
| **Dynamic Load Balancing (DLB)** | Distributes available power across multiple chargers automatically | 🟡 Essential for multi-port sites |
| **RFID / App Access** | User authentication before charging begins | 🟢 Standard expectation |
| **4G/LTE Connectivity** | Remote management without on-site Wi-Fi | 🟢 Important for public sites |
| **Solar/Renewable Integration** | Can prioritize solar energy when available | 🟢 Growing demand |
| **V2G (Vehicle-to-Grid)** | EV battery can feed power back to grid | 🔵 Emerging, future-proof |
| **Remote Firmware Updates (OTA)** | Manufacturer can push bug fixes remotely | 🟡 Critical for long-term support |
| **Energy Monitoring Dashboard** | Real-time usage data per charger | 🟢 Required for B2B clients |

---

## 7. Top Manufacturers & Suppliers

### 7A. China-Based (Cost-Competitive, High Volume)

| Manufacturer | Speciality | Notes |
|:---|:---|:---|
| **Autel Energy** | AC + DC chargers | Strong CE, UL, FCC certifications. Great for global export. |
| **StarCharge** | Large-scale networks | Massive R&D, used in major public networks |
| **TGOOD** | Public infrastructure | Government-grade quality, large export programs |
| **Iocharger** | OCPP 2.0.1 pioneer | First full OCPP 2.0.1 certification. Great for CPO startups. |
| **BESEN** | OEM/ODM flexible | Good for white-labeling at mid-range prices |
| **ZECONEX** | Export-focused | Strong documentation for EU/US import compliance |
| **Sino Energy** | Cost-entry | Budget-tier, verify certifications carefully |

### 7B. European (Premium, Local Compliance)

| Manufacturer | Speciality | Notes |
|:---|:---|:---|
| **ABB** | Full range: home to ultra-fast | Global leader, premium pricing, excellent support |
| **EVBox** | Commercial & public | Deep EU market presence, strong software integration |
| **Wallbox** | Smart home/commercial | Award-winning design, powerful app ecosystem |
| **Efacec** | DC fast charging | Strong in fleet and highway deployments |

### 7C. Evaluation Checklist for Any Supplier

- [ ] Do they have **verified export records** to your target region?
- [ ] Can they provide **original test reports** (not just declarations)?
- [ ] Do they offer **OCPP 1.6J/2.0.1 firmware** and documentation?
- [ ] Is **OEM/white-label** customization available?
- [ ] What is their **minimum order quantity (MOQ)**?
- [ ] Do they offer a **warranty** and who handles RMA/returns?
- [ ] What **technical support** is available post-purchase?

---

## 8. Business Models for Importers

### 8A. Model Comparison

| Model | Description | Capital Needed | Risk | Revenue Type |
|:---|:---|:---|:---|:---|
| **Distributor/Reseller** | Buy certified chargers, sell to installers/businesses | Medium | Low | One-time hardware markup (10–25%) |
| **White-Label Brand** | Source hardware, rebrand as your own product | Medium | Medium | Hardware + brand premium |
| **Charge Point Operator (CPO)** | Own and operate chargers, sell electricity to EV drivers | High | Higher | Recurring energy revenue (20–50% margin) |
| **CPO + Software SaaS** | Operate chargers + offer branded management platform | High | Higher | Energy + monthly SaaS fees |

### 8B. The OCPP + White-Label Software Stack

```
[Your Brand]
     |
     ▼
[White-Label CMS Backend]  ← (Ampeco, ChargePoint, Virta, etc.)
     |
     ▼ (OCPP 1.6J / 2.0.1)
[Imported OCPP-Compliant Hardware]  ← (Your chargers)
     |
     ▼
[EV Vehicle Battery]
```

> [!TIP]
> By using an **OCPP-compliant backend**, you are never locked into one hardware supplier. You can switch charger brands without changing your software or customer-facing app.

### 8C. Profit Margin Overview

| Revenue Stream | Margin Range |
|:---|:---|
| Hardware resale markup | 10 – 25% |
| Energy resale (if CPO) | 20 – 50% |
| Monthly SaaS/management fee | 15 – 35% |
| **Net profit (operational network)** | **10 – 30%** |

---

## 9. Step-by-Step Import Checklist

### Phase 1: Research & Planning
- [ ] Define your **target market** (country/region)
- [ ] Identify which **charging level(s)** to import (L1/L2/DCFC)
- [ ] Determine the correct **connector standard** for your market
- [ ] Research local **grid infrastructure** (single-phase vs. 3-phase availability)

### Phase 2: Certification & Compliance
- [ ] Identify all mandatory **certifications** for your target market
- [ ] Require suppliers to provide **original test reports** from accredited labs
- [ ] Confirm **MID certification** if selling in EU with kWh billing
- [ ] Check if **local type approval** is required (e.g., TR25 in Singapore)
- [ ] Verify **RoHS/REACH** compliance for hazardous substances

### Phase 3: Supplier Qualification
- [ ] Request samples / pilot units for testing
- [ ] Verify **OCPP 1.6J or 2.0.1** compliance with live backend test
- [ ] Confirm **OTA firmware update** capability
- [ ] Check **IP rating** (IP54 minimum for outdoor), **IK rating** for vandal resistance
- [ ] Negotiate **warranty terms, MOQ, and lead times**

### Phase 4: Logistics & Customs
- [ ] Classify product under correct **HS tariff code** (typically 8504.40 — Static converters)
- [ ] Confirm **import duties** in your country for EV charging equipment
- [ ] Check if any **import exemptions or EV incentives** apply (many countries offer reduced duties)
- [ ] Arrange **freight forwarder** experienced in electronics
- [ ] Prepare: Commercial Invoice, Packing List, Certificate of Origin, CE Declaration of Conformity

### Phase 5: Post-Import
- [ ] Set up **OCPP backend** or partner with CMS provider
- [ ] Establish **local installation partner** (certified electrician required for L2/DCFC)
- [ ] Create **customer support and RMA process**
- [ ] Plan for **firmware update management** across your fleet

---

## 10. Key Terms Glossary

| Term | Definition |
|:---|:---|
| **EVSE** | Electric Vehicle Supply Equipment — the correct technical name for an EV charger |
| **OCPP** | Open Charge Point Protocol — the open standard protocol connecting chargers to management software |
| **CMS / CPMS** | Charge Point Management System — the backend software managing charger networks |
| **CPO** | Charge Point Operator — company that owns and operates public charging stations |
| **OEM/ODM** | Original Equipment/Design Manufacturer — supplier who builds hardware you can rebrand |
| **ISO 15118** | Standard enabling "Plug & Charge" — automatic authentication via encrypted vehicle ID |
| **RCD / GFCI** | Residual Current Device / Ground Fault Circuit Interrupter — shock protection safety device |
| **DLB** | Dynamic Load Balancing — intelligently distributing power across multiple chargers |
| **V2G** | Vehicle-to-Grid — technology allowing an EV battery to feed power back to the grid |
| **SiC** | Silicon Carbide — advanced semiconductor used in high-efficiency power converters |
| **IGBT** | Insulated Gate Bipolar Transistor — power switching component used in DC chargers |
| **IP Rating** | Ingress Protection rating (e.g., IP54) — defines resistance to dust and water |
| **IK Rating** | Impact protection rating — defines resistance to physical vandalism |
| **MID** | Measuring Instruments Directive — EU requirement for accurate energy metering for billing |
| **NEC** | National Electrical Code — US standard governing electrical installations |
| **AHJ** | Authority Having Jurisdiction — local official who approves electrical installations |
| **CaaS** | Charging as a Service — business model providing charging as a subscription service |
