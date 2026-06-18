# ⚡ EV Charger Deep Dive — How It Works, How It's Built & DIY Guide
### Technical Education for the Serious EV Charging Entrepreneur

---

## 📚 Table of Contents
1. [The Big Misconception — What a Charger Actually Is](#1-the-big-misconception)
2. [The Charging Handshake — How EV and Charger Talk](#2-the-charging-handshake)
3. [Internal Components — Every Part Explained](#3-internal-components)
4. [The Control Pilot Signal — Deep Technical Dive](#4-the-control-pilot-signal)
5. [How It's Manufactured](#5-how-its-manufactured)
6. [What Makes a Cheap vs Premium Charger](#6-cheap-vs-premium)
7. [DIY / Open Source EVSE — Can You Build One?](#7-diy--open-source-evse)
8. [Component Shopping List (DIY)](#8-component-shopping-list)
9. [Open Source Projects to Study](#9-open-source-projects-to-study)
10. [What You Should Learn Next](#10-what-to-learn-next)

---

## 1. The Big Misconception

> **A Level 2 "charger" does NOT actually charge your car.**

This is the most important thing to understand.

```
Common belief:   Wall Box → Converts power → Charges battery
Reality:         Wall Box → Manages safety → Car converts power → Charges battery
```

The **real charger** (AC-to-DC power converter) is **inside your car** — it's called the **On-Board Charger (OBC)**. The wall box is actually a sophisticated **safety gatekeeper and communication device**.

What the wall box actually does:
1. Monitors the connection
2. Negotiates with the car how much power is available
3. Checks for faults (leakage current, temperature, grounding)
4. Opens/closes a switch to allow grid power to flow
5. Reports session data to a cloud backend (if smart)

> [!NOTE]
> This is WHY Level 2 charging speed is limited by the car's onboard charger, not the wall box. A 22kW wall box can only deliver 7.4kW to a car with a 7.4kW onboard charger — the wall box is not the bottleneck.

**DC Fast Chargers are different** — they DO convert AC→DC themselves, bypassing the car's onboard charger entirely, which is why they're so much faster and more expensive.

---

## 2. The Charging Handshake

Before a single watt of power flows, the charger and car go through a multi-step handshake defined by **IEC 61851-1** (the international standard).

### Step-by-Step Connection Sequence

```
PLUG IN CABLE
     │
     ▼
State A → B  ──── Car detected. CP voltage drops 12V → 9V
     │              (Vehicle connects resistor to signal line)
     ▼
EVSE sends PWM ─── Tells car: "I can supply up to X amps"
     │              (Duty cycle of PWM = current limit)
     ▼
State B → C  ──── Car says "ready to charge". CP drops 9V → 6V
     │              (Vehicle adds second resistor to signal)
     ▼
CONTACTOR CLOSES ─ Only NOW does AC power flow to car
     │
     ▼
CHARGING IN PROGRESS ─ EVSE monitors: temperature, current leakage,
     │                   voltage, ground connection — continuously
     ▼
State C → B  ──── Car says "full" or session ends. CP rises 6V → 9V
     │
CONTACTOR OPENS ── Power cuts BEFORE cable unplugs (safe hot-unplug)
     │
     ▼
DONE
```

### The Two Pilot Signals

| Signal | Name | What It Does |
|:---|:---|:---|
| **CP** | Control Pilot | Active 1kHz PWM signal. EVSE → Car. Tells car the current limit and connection state |
| **PP** | Proximity Pilot | Passive resistor. Detects if cable is plugged in and what current capacity the cable can carry |

---

## 3. Internal Components

### Complete Anatomy of a Level 2 Wall Box

```
        ┌─────────────────────────────────────────────────┐
        │                 AC MAINS INPUT                   │
        │            (230V L + N + PE / Ground)            │
        └──────────────────────┬──────────────────────────┘
                               │
        ┌──────────────────────▼──────────────────────────┐
        │              SURGE PROTECTOR / SPD               │ ← Protects against grid spikes
        └──────────────────────┬──────────────────────────┘
                               │
        ┌──────────────────────▼──────────────────────────┐
        │          RCD / GFCI (Residual Current Device)    │ ← Life safety — cuts power on fault
        └──────────┬───────────────────────┬──────────────┘
                   │                       │
        ┌──────────▼──────────┐  ┌─────────▼───────────────┐
        │   SMPS Power Supply  │  │    AC Power Rail         │
        │  (converts 230V AC   │  │  (High voltage stays     │
        │  → 12V, 5V, 3.3V DC) │  │   here until contactor) │
        └──────────┬──────────┘  └─────────┬───────────────┘
                   │                       │
        ┌──────────▼──────────┐  ┌─────────▼───────────────┐
        │    MCU / Control     │  │   CONTACTOR / RELAY      │ ← The main power switch
        │    Board (ESP32 /    │  │  (Opens & closes AC      │
        │    STM32 / AVR)      │  │   circuit to cable)      │
        └──────────┬──────────┘  └─────────┬───────────────┘
                   │                       │
        ┌──────────▼──────────┐  ┌─────────▼───────────────┐
        │  CP/PP Pilot Circuit │  │   CHARGING CABLE         │
        │  (PWM generator +    │  │   (Type 2 connector      │
        │   voltage readers)   │  │    + cable assembly)     │
        └──────────┬──────────┘  └─────────────────────────┘
                   │
        ┌──────────▼──────────┐
        │  COMMUNICATION       │ ← Wi-Fi / 4G / Ethernet → OCPP backend
        │  MODULE              │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │  ENERGY METER        │ ← Measures kWh consumed (needed for billing)
        │  (kWh metering)      │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │  UI: LED / Display / │ ← Status lights, RFID reader, screen
        │  RFID Reader         │
        └─────────────────────┘
```

---

### Every Component Explained in Detail

#### 🔴 1. MCU / Control Board (The Brain)
- **What it is**: Microcontroller Unit — a small computer chip running the charger firmware
- **Common chips**: ESP32, STM32, AVR (ATmega)
- **What it does**:
  - Generates the Control Pilot (CP) PWM signal
  - Reads CP/PP voltage states to track charging stages
  - Controls relay/contactor (open/close)
  - Manages OCPP communication
  - Handles RFID authentication
  - Reads temperature sensors
  - Updates firmware over-the-air (OTA)
- **Bangladesh relevance**: This is the chip you'd program if building your own EVSE. ESP32 is preferred — cheap, has Wi-Fi built in, runs OCPP libraries

#### 🔴 2. Contactor / Relay (The Power Switch)
- **What it is**: An electrically controlled switch for high-current AC
- **Why it matters**: This is the critical safety component. When you press "Start Charge" on an app, this closes and lets power flow. When you end the session or a fault occurs, it opens instantly
- **Specs to know**:
  - Must be rated for the full current (32A for 7kW, 63A for 22kW)
  - Must have a mechanical life of 100,000+ switching cycles
  - Must handle AC (not just DC) switching without contact welding
- **Quality difference**: Cheap chargers use low-grade relays that can weld contacts shut = power stuck ON = fire hazard

#### 🔴 3. RCD / GFCI (Residual Current Device)
- **What it is**: A life-safety device that instantly cuts power if it detects electricity leaking outside the expected path (e.g., through a human body or into the ground)
- **Why it's critical**: An EV battery at 400V can kill instantly. If any insulation fails and current starts flowing through a person, the RCD cuts power in <30ms
- **Types**:
  - **Type AC** — detects AC leakage only (NOT sufficient for EV chargers)
  - **Type A** — detects AC + pulsating DC leakage (minimum for EV chargers)
  - **Type B** — detects AC + pulsating DC + smooth DC (gold standard for EV chargers)
- **Bangladesh note**: Many budget chargers use Type A or skip proper RCDs entirely. This is dangerous. Always confirm Type B or at minimum Type A RCD in any charger you import

#### 🔴 4. SMPS (Switched-Mode Power Supply)
- **What it is**: Internal power supply that converts 230V mains AC into the low voltages (12V, 5V, 3.3V) needed by the control board, display, connectivity module, etc.
- **Why it matters**: A failing SMPS means the "brain" dies. Good chargers use industrial-grade SMPS rated for 50,000+ hours MTBF

#### 🔴 5. CP/PP Pilot Circuit (The Communication Front-End)
- **What it is**: A small analog circuit board that generates and reads the Control Pilot and Proximity Pilot signals
- **The challenge**: The CP signal needs to be ±12V (required by IEC 61851), but the ESP32 MCU only works at 3.3V. The pilot circuit does this voltage translation
- **Components inside**: Op-amps (e.g., LM393), resistors, diodes, voltage dividers
- **This is the most technically interesting part** to learn as a DIY builder

#### 🔴 6. Energy Meter / Metering Circuit
- **What it is**: Electronic circuit that measures actual kWh delivered to the vehicle
- **Why it matters**: For billing! If you're running a public charger and charging per kWh, you legally need a certified energy meter
- **MID certification**: In the EU (and referenced in Bangladesh Power Division guidelines), the energy meter must be MID-certified for billing accuracy
- **Types**: CT-based (current transformer) or Rogowski coil

#### 🔴 7. Communication Module
- **What it is**: Wi-Fi chip, 4G/LTE modem, or Ethernet port that connects the charger to the cloud/OCPP backend
- **OCPP**: The charger connects to your CMS backend using the OCPP protocol over WebSocket (wss://)
- **You know this from Monta**: The charger connects to `wss://ocpp.yourbackend.com` — same principle

#### 🔴 8. Thermal Management
- **What it is**: Heat sinks, temperature sensors (NTC thermistors), and sometimes cooling fans
- **Why it matters**: Running 32A continuously generates significant heat. The MCU monitors temperature and throttles current or shuts down if it gets too hot

#### 🔴 9. Surge Protector (SPD)
- **What it is**: Surge Protection Device — absorbs voltage spikes from the grid
- **Why it's critical for Bangladesh**: Bangladesh's grid has frequent voltage fluctuations. An SPD protects the entire charger from grid spikes. **This is non-negotiable** when importing for Bangladesh

#### 🔴 10. Enclosure
- **Material**: Usually polycarbonate (PC) or ABS plastic for residential, sheet metal for commercial
- **IP Rating**: IP54 = dust protected + splash water resistant. Minimum for outdoor Bangladesh use
- **IK Rating**: IK08 = withstands 5 joule impact. Important for parking-exposed units

---

## 4. The Control Pilot Signal

This is the most technical part — but crucial to understand for DIY or quality evaluation.

### PWM Duty Cycle = Current Limit Table

| Duty Cycle | Max Current | Power (230V, 1-phase) |
|:---|:---|:---|
| 10% | 6A | 1.38 kW |
| 17% | 10A | 2.3 kW |
| 25% | 15A | 3.45 kW |
| 33% | 20A | 4.6 kW |
| 50% | 30A | 6.9 kW |
| 54% | 32A | 7.36 kW ← typical home charger |
| 67% | 40A | 9.2 kW |
| 83% | 50A | 11.5 kW |

**Formula**: `Current (A) = Duty Cycle (%) × 0.6`

### CP Voltage States

| State | CP Voltage | Meaning |
|:---|:---|:---|
| **A** | +12V (steady DC) | Nothing connected |
| **B** | +9V | Vehicle connected, not ready |
| **C** | +6V | Vehicle ready, charging active |
| **D** | +3V | Charging requires ventilation (rare) |
| **E** | 0V | Error / short circuit |
| **F** | -12V | EVSE not available |

---

## 5. How It's Manufactured

### Stage 1 — PCB Design & Fabrication
- Engineers design schematic in EDA tools (KiCad, Altium)
- Special attention to **creepage and clearance distances** — the physical gaps needed between high-voltage and low-voltage traces to prevent arcing
- PCBs use thick copper traces (2oz–4oz) for high-current paths
- Boards are fabricated (usually in Shenzhen)

### Stage 2 — PCB Assembly (PCBA)
- **SMT (Surface Mount Technology)**: Tiny components placed by robot pick-and-place machines
- **Solder paste printing**: Applied by stencil to exact pads
- **Reflow oven**: Melts solder to bond components
- **Through-hole insertion**: Larger components (transformers, capacitors) inserted manually
- **Automated Optical Inspection (AOI)**: Camera checks every solder joint

### Stage 3 — Firmware Flashing
- Control board is flashed with firmware via JTAG/SWD or USB
- Firmware includes: IEC 61851 state machine, OCPP stack, safety logic, OTA update client

### Stage 4 — Sub-Assembly
- RCD module mounted
- Contactor wired
- SMPS installed
- Cable glands and wiring harness assembled

### Stage 5 — Final Assembly
- All sub-assemblies go into enclosure
- Type 2 socket/cable attached
- Enclosure sealed and fastened

### Stage 6 — Testing
- **Hi-pot (Dielectric Strength) Test**: High voltage applied between circuits to verify insulation
- **Earth Continuity Test**: Confirms proper grounding
- **Functional Test**: Actual EV or EV simulator used to verify all States A–F work correctly
- **OCPP Test**: Connects to test server to verify cloud communication
- **Burn-in**: Runs at full load for 2–4 hours to catch early failures

---

## 6. Cheap vs Premium — What's Actually Different

| Component | Budget Charger | Premium Charger |
|:---|:---|:---|
| **Contactor** | Low-grade relay, <10k cycles, prone to welding | Industrial contactor, 100k+ cycles, silver alloy contacts |
| **RCD** | Type AC (inadequate) or missing | Type B or Type A RCD, properly sized |
| **SMPS** | No-brand, short lifespan | Industrial-grade, 50k+ hour MTBF |
| **CP Circuit** | Minimal, may misread states | Precise, temperature-compensated |
| **Cable** | Thin gauge, poor insulation | Proper gauge (2.5mm² min), silicone insulation |
| **Firmware** | Basic, no OTA updates | Regular OTA updates, bug fixes, security patches |
| **MCU** | Cheap AVR, limited RAM | ESP32 or STM32, full OCPP 2.0.1 stack |
| **Enclosure** | IP44 or lower, thin plastic | IP54+, UV-stabilised polycarbonate |
| **SPD** | Missing | Present, properly rated |
| **Energy meter** | Uncalibrated or missing | MID-certified, accurate to ±1% |
| **Thermal** | No thermal management | Temperature sensors, throttling logic |

> [!CAUTION]
> A charger with a welded contactor will not stop supplying power even when it should. This is a **fire and electrocution hazard**. This is the #1 failure mode in cheap chargers.

---

## 7. DIY / Open Source EVSE — Can You Build One?

**Short answer: Yes — but understand what you're doing first.**

### Reality Check

| Aspect | Reality |
|:---|:---|
| **Cost vs buying** | DIY is NOT cheaper than buying a budget charger. A good DIY build costs $200–$400+ in components |
| **Why DIY then?** | Learning, full local control, custom features, no cloud dependency, OCPP integration control |
| **Safety** | You are working with 230V AC. A mistake can kill you or burn your house. Take this seriously |
| **Best approach** | Start by studying open-source projects, then build a prototype on low voltage test rigs before connecting to mains |

### What You Need to Know Before Building

1. **Electronics fundamentals**: Ohm's Law, PWM signals, ADC reading, op-amp circuits
2. **Embedded programming**: ESP32 / Arduino C++ or MicroPython
3. **IEC 61851 state machine**: The exact CP/PP voltage levels and transitions
4. **OCPP protocol**: WebSocket + JSON messages (you already know this from Monta!)
5. **High-voltage safety**: Cable sizing, termination, insulation, grounding
6. **Local electrical codes**: In Bangladesh, any mains-connected device needs to comply with BERC/BSTI guidelines

---

## 8. Component Shopping List (DIY Level 2 EVSE)

### Electronics (Low Voltage — The "Brain")

| Component | Purpose | Approx Cost |
|:---|:---|:---|
| **ESP32 DevKit** | Main microcontroller | $5–$10 |
| **CP Pilot Circuit PCB** | ±12V signal generation + reading | $10–$20 (or design your own) |
| **LM393 Op-Amp IC** | Voltage comparator for CP state detection | <$1 |
| **1N4007 Diode** | Half-wave rectification of CP signal | <$0.10 |
| **2.74kΩ Resistor** | CP line termination (EVSE side) | <$0.10 |
| **NTC Thermistor** | Temperature monitoring | $1–$2 |
| **OLED Display (SSD1306)** | Status display (optional) | $3–$5 |
| **RFID Reader (RC522 or PN532)** | User authentication | $3–$8 |
| **SMPS 12V/2A** | Powers control board | $8–$15 |

### High Voltage Components (Handle with extreme care)

| Component | Purpose | Approx Cost |
|:---|:---|:---|
| **AC Contactor 40A** | Main power switch | $15–$30 |
| **Type B RCD 40A 30mA** | Ground fault protection | $30–$80 |
| **SPD (Type 2)** | Surge protection | $15–$25 |
| **Energy Meter (MID certified)** | kWh measurement | $20–$50 |
| **Type 2 Socket (IEC 62196-2)** | EV connector (tethered or untethered) | $20–$50 |
| **EV Cable (5m, 32A, Type 2)** | Charging cable | $40–$80 |
| **IP55 Enclosure** | Weather protection | $20–$40 |
| **Cable Glands** | Waterproof cable entry | $5–$10 |
| **DIN Rail + Terminals** | Wiring organisation inside box | $10–$20 |

### **Total DIY Estimate: $200–$400 USD**

---

## 9. Open Source Projects to Study

### 🥇 1. OpenEVSE — The Most Mature
- **Website**: [openevse.com](https://openevse.com)
- **GitHub**: [github.com/OpenEVSE/open_evse](https://github.com/OpenEVSE/open_evse)
- **What it is**: Full open-source EVSE hardware + firmware. ESP32-based, OCPP 1.6 support, web UI
- **Best for**: Learning the complete system. They sell pre-made controller boards you can buy and study
- **Community**: Very active, English-language, global

### 🥇 2. SmartEVSE v3 — Most Advanced (ESP32 Native)
- **GitHub**: [github.com/SmartEVSE/SmartEVSE-3](https://github.com/SmartEVSE/SmartEVSE-3)
- **What it is**: ESP32-based, supports 1-phase and 3-phase, dynamic load balancing, solar integration, Modbus
- **Best for**: Understanding a production-quality European-standard EVSE design
- **Hardware**: Open schematics available — you can study exactly how the CP circuit, contactor control, and RCD integration works

### 🥇 3. ArduinoOCPP — The OCPP Library You Know
- **GitHub**: [github.com/matth-x/ArduinoOcpp](https://github.com/matth-x/ArduinoOcpp)
- **What it is**: OCPP 1.6J + 2.0.1 client library for ESP32/ESP8266
- **Your advantage**: You know OCPP from the backend (Monta). This library is the charger side. You now understand BOTH ends.
- **Usage**: Add this to any ESP32 sketch and your DIY charger can connect to any OCPP backend

### 🥈 4. EVSE Charge Controller (Minimal DIY)
- **GitHub**: [github.com/gregszalay/evse-charge-controller](https://github.com/gregszalay/evse-charge-controller)
- **What it is**: Minimal ESP32 firmware implementing IEC 61851 state machine for Type 2 charging
- **Best for**: Understanding the core CP/PP logic without all the extras

### 🥈 5. evse-wifi (Home Assistant Integration)
- **GitHub**: [github.com/evse-wifi](https://github.com/SmartEVSE)
- **Best for**: Integrating charger with home automation and solar divert

---

## 10. What to Learn Next — Your Study Roadmap

### Level 1 — Conceptual (You're Here Now ✅)
- [x] What EVSE does vs. OBC
- [x] The CP/PP handshake states
- [x] Internal component functions
- [x] Cheap vs. premium quality differences

### Level 2 — Technical Understanding
- [ ] **Read the IEC 61851-1 standard** (or a good summary) — focus on Section 6 (control pilot circuit)
- [ ] **Study SmartEVSE schematic** — trace how CP signal is generated, read, and acted upon
- [ ] **Run OpenEVSE firmware** on an ESP32 in simulation mode (no mains needed)
- [ ] **Study ArduinoOCPP library** — understand the OCPP message flow from the charger side

### Level 3 — Hands-On Prototype
- [ ] Build a CP pilot circuit on a breadboard (low voltage, no mains — just simulate states A–F)
- [ ] Write ESP32 code to read CP states and control a relay (use 12V relay, not mains)
- [ ] Connect ArduinoOCPP to a local SteVe/CitrineOS OCPP server
- [ ] Observe messages: BootNotification, StatusNotification, StartTransaction, StopTransaction

### Level 4 — Full DIY Build (With Electrician)
- [ ] Design enclosure layout
- [ ] Wire mains components with qualified electrician supervision
- [ ] Integrate Type 2 socket
- [ ] Connect to your own OCPP backend
- [ ] Test with real vehicle

### Level 5 — Product Development
- [ ] PCB design in KiCad (custom control board)
- [ ] Firmware with OTA updates
- [ ] Certification path research (CE compliance for Bangladesh import reference)
- [ ] Small batch production with local PCB assembly

---

## ⚠️ Safety Non-Negotiables

> [!CAUTION]
> **Working with 230V AC can kill.** These rules are absolute:

1. **Never work on mains circuits alone** — always have a second person present
2. **Always isolate the circuit** (turn off breaker + test with a multimeter) before touching any wiring
3. **Use proper wire gauges** — 7kW at 32A requires minimum 6mm² copper cable
4. **Test with an EV simulator first** — before connecting a real car
5. **Install RCD protection** at the consumer unit (distribution board) level, not just inside the charger
6. **In Bangladesh**: Any new electrical installation must be inspected by a licensed electrician before commissioning

---

## 🔗 Key Resources

| Resource | Link | What to Learn |
|:---|:---|:---|
| OpenEVSE Docs | openevse.com | Complete EVSE system overview |
| SmartEVSE GitHub | github.com/SmartEVSE/SmartEVSE-3 | Production ESP32 schematic |
| ArduinoOCPP | github.com/matth-x/ArduinoOcpp | OCPP on ESP32 |
| TI EV Charger Reference | ti.com (search "EV charger reference design") | Chip-level circuit design |
| IEC 61851 Summary | feyree.com/iec-61851 | CP/PP protocol explained |
| OpenEnergyMonitor Community | community.openenergymonitor.org | DIY EVSE Q&A community |
