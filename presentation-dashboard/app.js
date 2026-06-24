// Interactive Presentation Dashboard Application Logic
// Prepared: June 2026

document.addEventListener('DOMContentLoaded', () => {
    initPresentation();
    initSupplierFilter();
    initCalculator();
    initMapMonitor();
});

// ==========================================
// 1. Slide Navigation Controller
// ==========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const navItems = document.querySelectorAll('.nav-item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressFill = document.querySelector('.progress-bar-fill');
const counterCurrent = document.getElementById('counter-current');
const counterTotal = document.getElementById('counter-total');
const slideshowToggle = document.getElementById('slideshow-toggle');

let slideshowInterval = null;
const SLIDESHOW_DELAY = 10000; // 10 seconds per slide in slideshow mode

function initPresentation() {
    // Set total count
    if (counterTotal) counterTotal.textContent = slides.length;
    
    // Set initial active state
    updateSlideView();

    // Event Listeners
    if (prevBtn) prevBtn.addEventListener('click', navigatePrev);
    if (nextBtn) nextBtn.addEventListener('click', navigateNext);
    
    // Sidebar nav click listeners
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetIndex = parseInt(item.getAttribute('data-slide'));
            currentSlide = targetIndex;
            updateSlideView();
            stopSlideshow();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Space' && document.activeElement.tagName !== 'INPUT') {
            navigateNext();
            stopSlideshow();
        } else if (e.key === 'ArrowLeft') {
            navigatePrev();
            stopSlideshow();
        }
    });

    // Slideshow Auto-play
    if (slideshowToggle) {
        slideshowToggle.addEventListener('change', () => {
            if (slideshowToggle.checked) {
                startSlideshow();
            } else {
                stopSlideshow();
            }
        });
    }
}

function updateSlideView() {
    slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    navItems.forEach((item, idx) => {
        if (idx === currentSlide) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Button states
    if (prevBtn) prevBtn.disabled = (currentSlide === 0);
    if (nextBtn) nextBtn.disabled = (currentSlide === slides.length - 1);

    // Progress Bar
    const progressPct = ((currentSlide + 1) / slides.length) * 100;
    if (progressFill) progressFill.style.width = `${progressPct}%`;

    // Counter
    if (counterCurrent) counterCurrent.textContent = currentSlide + 1;

    // Trigger chart redraw if we go to financials slide
    if (currentSlide === 8) {
        calculateFinancials();
    }
}

function navigateNext() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlideView();
    } else {
        stopSlideshow();
    }
}

function navigatePrev() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlideView();
    }
}

function startSlideshow() {
    if (slideshowInterval) clearInterval(slideshowInterval);
    slideshowInterval = setInterval(() => {
        if (currentSlide < slides.length - 1) {
            navigateNext();
        } else {
            currentSlide = 0;
            updateSlideView();
        }
    }, SLIDESHOW_DELAY);
}

function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
    if (slideshowToggle) slideshowToggle.checked = false;
}


// ==========================================
// 2. Hardware Supplier Filter
// ==========================================
function initSupplierFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const supplierCards = document.querySelectorAll('.supplier-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterType = btn.getAttribute('data-filter');

            supplierCards.forEach(card => {
                const type = card.getAttribute('data-type');
                if (filterType === 'all' || type === filterType) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}


// ==========================================
// 3. Interactive Financial Calculator
// ==========================================
const calcInputs = {
    acY1: document.getElementById('ac-y1'),
    acY2: document.getElementById('ac-y2'),
    acY3: document.getElementById('ac-y3'),
    dcY1: document.getElementById('dc-y1'),
    dcY2: document.getElementById('dc-y2'),
    dcY3: document.getElementById('dc-y3'),
    utilization: document.getElementById('utilization'),
    tariff: document.getElementById('tariff'),
    utilityCost: document.getElementById('utility-cost'),
    exchangeRate: document.getElementById('ex-rate')
};

function initCalculator() {
    // Add event listeners to all sliders
    Object.values(calcInputs).forEach(input => {
        if (input) {
            input.addEventListener('input', (e) => {
                // Update text badge
                const valSpan = document.getElementById(`${e.target.id}-val`);
                if (valSpan) {
                    if (e.target.id === 'utilization') {
                        valSpan.textContent = parseFloat(e.target.value).toFixed(1);
                    } else if (e.target.id === 'ex-rate') {
                        valSpan.textContent = parseFloat(e.target.value).toFixed(2);
                    } else {
                        valSpan.textContent = parseInt(e.target.value).toLocaleString();
                    }
                }
                calculateFinancials();
            });
        }
    });

    calculateFinancials();
}

function calculateFinancials() {
    // Get values from sliders (or fallbacks)
    const acY1 = calcInputs.acY1 ? parseInt(calcInputs.acY1.value) : 40;
    const acY2 = calcInputs.acY2 ? parseInt(calcInputs.acY2.value) : 150;
    const acY3 = calcInputs.acY3 ? parseInt(calcInputs.acY3.value) : 450;

    const dcY1 = calcInputs.dcY1 ? parseInt(calcInputs.dcY1.value) : 10;
    const dcY2 = calcInputs.dcY2 ? parseInt(calcInputs.dcY2.value) : 50;
    const dcY3 = calcInputs.dcY3 ? parseInt(calcInputs.dcY3.value) : 150;

    const utilization = calcInputs.utilization ? parseFloat(calcInputs.utilization.value) : 3.0;
    const tariff = calcInputs.tariff ? parseFloat(calcInputs.tariff.value) : 30.0;
    const utilityCost = calcInputs.utilityCost ? parseFloat(calcInputs.utilityCost.value) : 11.5;
    const exRate = calcInputs.exchangeRate ? parseFloat(calcInputs.exchangeRate.value) : 122.85;

    // Unit Economics Config (derived from Business Plan Section 3)
    const acLandedCostUSD = 350;
    const dcLandedCostUSD = 4500;
    const acHardwareMarginBDT = 25000;  // Sell markup profit per AC
    const dcHardwareMarginBDT = 250000; // Sell markup profit per DC
    
    const acInstallBDT = 15000;
    const dcInstallBDT = 100000;

    const acSaaSMonthlyBDT = 1200;
    const dcSaaSMonthlyBDT = 2500;

    // Fixed Overheads Y1, Y2, Y3
    const fixedOverheadY1 = 3000000; // Shipping, clearance, SREDA, server licensing, startup staff, marketing
    const fixedOverheadY2 = 5000000;
    const fixedOverheadY3 = 10000000;

    // --- CAPEX Calculation (Year 1) ---
    // Capex = Landed Hardware Costs + Installation
    const acCapexY1 = acY1 * (acLandedCostUSD * exRate + acInstallBDT);
    const dcCapexY1 = dcY1 * (dcLandedCostUSD * exRate + dcInstallBDT);
    const totalCapexY1 = acCapexY1 + dcCapexY1 + fixedOverheadY1;

    // --- Projections per Year ---
    
    // Year 1 Model
    const newAcY1 = acY1;
    const newDcY1 = dcY1;
    const hwProfitY1 = (newAcY1 * acHardwareMarginBDT) + (newDcY1 * dcHardwareMarginBDT);
    const saasRevY1 = ((acY1 * acSaaSMonthlyBDT) + (dcY1 * dcSaaSMonthlyBDT)) * 12;
    // Session revenue: 20% platform share. Average AC = 7.4kW, average DC = 50kW
    const sessionAcY1 = acY1 * 7.4 * utilization * 365 * tariff * 0.20;
    const sessionDcY1 = dcY1 * 50.0 * utilization * 365 * tariff * 0.20;
    const totalRevY1 = hwProfitY1 + saasRevY1 + sessionAcY1 + sessionDcY1;
    const opexY1 = 1200000 + (saasRevY1 * 0.15); // operational staff + 15% platform support overhead
    const netProfitY1 = totalRevY1 - opexY1;

    // Year 2 Model
    const newAcY2 = Math.max(0, acY2 - acY1);
    const newDcY2 = Math.max(0, dcY2 - dcY1);
    const hwProfitY2 = (newAcY2 * acHardwareMarginBDT) + (newDcY2 * dcHardwareMarginBDT);
    const saasRevY2 = ((acY2 * acSaaSMonthlyBDT) + (dcY2 * dcSaaSMonthlyBDT)) * 12;
    const sessionAcY2 = acY2 * 7.4 * utilization * 365 * tariff * 0.20;
    const sessionDcY2 = dcY2 * 50.0 * utilization * 365 * tariff * 0.20;
    const totalRevY2 = hwProfitY2 + saasRevY2 + sessionAcY2 + sessionDcY2;
    const opexY2 = 2400000 + (saasRevY2 * 0.15) + fixedOverheadY2 * 0.3;
    const netProfitY2 = totalRevY2 - opexY2;

    // Year 3 Model
    const newAcY3 = Math.max(0, acY3 - acY2);
    const newDcY3 = Math.max(0, dcY3 - dcY2);
    const hwProfitY3 = (newAcY3 * acHardwareMarginBDT) + (newDcY3 * dcHardwareMarginBDT);
    const saasRevY3 = ((acY3 * acSaaSMonthlyBDT) + (dcY3 * dcSaaSMonthlyBDT)) * 12;
    const sessionAcY3 = acY3 * 7.4 * utilization * 365 * tariff * 0.20;
    const sessionDcY3 = dcY3 * 50.0 * utilization * 365 * tariff * 0.20;
    const totalRevY3 = hwProfitY3 + saasRevY3 + sessionAcY3 + sessionDcY3;
    const opexY3 = 4500000 + (saasRevY3 * 0.15) + fixedOverheadY3 * 0.3;
    const netProfitY3 = totalRevY3 - opexY3;

    // Payback & ROI Calculations
    const annualAverageProfit = (netProfitY1 + netProfitY2 + netProfitY3) / 3;
    const roiAnnual = (annualAverageProfit / totalCapexY1) * 100;
    
    // Simple payback estimation based on monthly cashflow in Year 1/2
    const monthlyNetY1 = netProfitY1 / 12;
    const monthlyNetY2 = netProfitY2 / 12;
    let paybackMonths = 999;
    if (monthlyNetY1 > 0) {
        if (monthlyNetY1 * 12 >= totalCapexY1) {
            paybackMonths = totalCapexY1 / monthlyNetY1;
        } else if (monthlyNetY1 * 12 + monthlyNetY2 * 12 >= totalCapexY1) {
            paybackMonths = 12 + ((totalCapexY1 - (monthlyNetY1 * 12)) / monthlyNetY2);
        } else {
            const monthlyNetY3 = netProfitY3 / 12;
            if (monthlyNetY1 * 12 + monthlyNetY2 * 12 + monthlyNetY3 * 12 >= totalCapexY1) {
                paybackMonths = 24 + ((totalCapexY1 - (monthlyNetY1 * 12 + monthlyNetY2 * 12)) / monthlyNetY3);
            }
        }
    }

    // Display Results
    document.getElementById('res-capex').textContent = `BDT ${(totalCapexY1 / 100000).toFixed(1)} Lakh`;
    document.getElementById('res-roi').textContent = `${roiAnnual.toFixed(1)}%`;
    
    const paybackText = paybackMonths > 60 ? '5+ Years' : `${paybackMonths.toFixed(1)} Months`;
    document.getElementById('res-payback').textContent = paybackText;
    document.getElementById('res-y3profit').textContent = `BDT ${(netProfitY3 / 10000000).toFixed(2)} Cr`;

    // Redraw SVG Chart
    drawChart(totalRevY1, netProfitY1, totalRevY2, netProfitY2, totalRevY3, netProfitY3);
}

function drawChart(r1, p1, r2, p2, r3, p3) {
    const svg = document.getElementById('financial-chart');
    if (!svg) return;

    // Clear previous dynamic elements (lines/bars)
    const elementsToRemove = svg.querySelectorAll('.dynamic-draw');
    elementsToRemove.forEach(el => el.remove());

    const width = svg.clientWidth || 360;
    const height = svg.clientHeight || 200;
    const padding = { top: 30, right: 20, bottom: 30, left: 50 };

    const maxVal = Math.max(r1, r2, r3, p1, p2, p3, 1000000); // at least 1M BDT
    
    // Scale function
    const getX = (yearIdx, typeIdx) => {
        // yearIdx: 0, 1, 2. typeIdx: 0 (Revenue), 1 (Profit)
        const colWidth = (width - padding.left - padding.right) / 3;
        const startX = padding.left + yearIdx * colWidth;
        const gap = 6;
        const barWidth = (colWidth - gap * 3) / 2;
        return startX + gap + typeIdx * (barWidth + gap);
    };

    const getY = (val) => {
        const plotHeight = height - padding.top - padding.bottom;
        const pct = Math.max(0, val) / maxVal;
        return height - padding.bottom - (pct * plotHeight);
    };

    const getBarHeight = (val) => {
        const plotHeight = height - padding.top - padding.bottom;
        const pct = Math.max(0, val) / maxVal;
        return pct * plotHeight;
    };

    // Draw Grid Lines (3 lines)
    const gridCount = 4;
    for (let i = 0; i <= gridCount; i++) {
        const gridVal = (maxVal / gridCount) * i;
        const yPos = getY(gridVal);
        
        // Line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', padding.left);
        line.setAttribute('y1', yPos);
        line.setAttribute('x2', width - padding.right);
        line.setAttribute('y2', yPos);
        line.setAttribute('class', 'chart-grid dynamic-draw');
        svg.appendChild(line);

        // Label in BDT Lakhs
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', padding.left - 10);
        text.setAttribute('y', yPos + 3);
        text.setAttribute('class', 'chart-text dynamic-draw');
        text.setAttribute('text-anchor', 'end');
        text.textContent = `${(gridVal / 100000).toFixed(0)}L`;
        svg.appendChild(text);
    }

    // Years Labels
    const years = ['Year 1', 'Year 2', 'Year 3'];
    const colWidth = (width - padding.left - padding.right) / 3;
    years.forEach((yr, idx) => {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', padding.left + idx * colWidth + colWidth / 2);
        text.setAttribute('y', height - 10);
        text.setAttribute('class', 'chart-text dynamic-draw');
        text.setAttribute('text-anchor', 'middle');
        text.textContent = yr;
        svg.appendChild(text);
    });

    // Draw Bars
    const data = [
        { rev: r1, profit: p1 },
        { rev: r2, profit: p2 },
        { rev: r3, profit: p3 }
    ];

    const barWidth = (colWidth - 18) / 2;

    data.forEach((d, yearIdx) => {
        // Revenue Bar
        const rHeight = getBarHeight(d.rev);
        const ry = getY(d.rev);
        const rx = getX(yearIdx, 0);

        const revBar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        revBar.setAttribute('x', rx);
        revBar.setAttribute('y', ry);
        revBar.setAttribute('width', barWidth);
        revBar.setAttribute('height', rHeight);
        revBar.setAttribute('rx', '3');
        revBar.setAttribute('class', 'chart-bar-rev dynamic-draw');
        svg.appendChild(revBar);

        // Revenue text value
        const revText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        revText.setAttribute('x', rx + barWidth / 2);
        revText.setAttribute('y', ry - 5);
        revText.setAttribute('class', 'chart-text-value dynamic-draw');
        revText.textContent = `${(d.rev / 100000).toFixed(0)}L`;
        svg.appendChild(revText);

        // Profit Bar
        const pHeight = getBarHeight(d.profit);
        const py = getY(d.profit);
        const px = getX(yearIdx, 1);

        const profitBar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        profitBar.setAttribute('x', px);
        profitBar.setAttribute('y', py);
        profitBar.setAttribute('width', barWidth);
        profitBar.setAttribute('height', pHeight);
        profitBar.setAttribute('rx', '3');
        profitBar.setAttribute('class', 'chart-bar-profit dynamic-draw');
        svg.appendChild(profitBar);

        // Profit text value
        const profitText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        profitText.setAttribute('x', px + barWidth / 2);
        profitText.setAttribute('y', py - 5);
        profitText.setAttribute('class', 'chart-text-value dynamic-draw');
        profitText.textContent = `${(d.profit / 100000).toFixed(0)}L`;
        svg.appendChild(profitText);
    });
}


// ==========================================
// 4. Pilot Network Monitor & OCPP Feed
// ==========================================
const siteData = {
    gulshan: {
        name: "Gulshan-2 Multi-Hub",
        type: "DC Fast (High-Volume)",
        power: "120 kW (Autel)",
        status: "charging",
        connector: "CCS2 (Dual)",
        load: "84.2 kW active",
        sessions: 16,
        energy: "342.8 kWh",
        logPrefix: "GULSHAN-HUB"
    },
    banani: {
        name: "Banani Luxury Hotel",
        type: "AC Destination",
        power: "22 kW (Joint Tech)",
        status: "available",
        connector: "Type 2 Cable",
        load: "0.0 kW (Idle)",
        sessions: 4,
        energy: "62.4 kWh",
        logPrefix: "BANANI-HOTEL"
    },
    dhanmondi: {
        name: "Dhanmondi Shopping Mall",
        type: "DC Public Charger",
        power: "60 kW (Iocharger)",
        status: "charging",
        connector: "CCS2 (Dual DLB)",
        load: "28.5 kW active",
        sessions: 9,
        energy: "185.0 kWh",
        logPrefix: "DHANMONDI-MALL"
    },
    bashundhara: {
        name: "Bashundhara Corp Gate",
        type: "AC Office Charger",
        power: "11 kW (EVB Beny)",
        status: "offline",
        connector: "Type 2 Socket",
        load: "0.0 kW (Offline)",
        sessions: 2,
        energy: "22.0 kWh",
        logPrefix: "BASHUNDHARA-OFFICE"
    }
};

let activeSiteKey = "gulshan";
const consoleLinesMax = 12;
const consoleLogsQueue = [];

function initMapMonitor() {
    const pins = document.querySelectorAll('.map-pin');
    pins.forEach(pin => {
        pin.addEventListener('click', () => {
            const siteKey = pin.getAttribute('data-site');
            showSiteDetails(siteKey);
        });
    });

    // Start simulation loop for OCPP logs
    showSiteDetails("gulshan");
    setInterval(updateOcppSimulator, 2500);
}

function showSiteDetails(key) {
    activeSiteKey = key;
    const site = siteData[key];
    if (!site) return;

    // Highlight active pin on map
    const pins = document.querySelectorAll('.map-pin');
    pins.forEach(pin => {
        if (pin.getAttribute('data-site') === key) {
            pin.style.transform = "translate(-50%, -50%) scale(1.4)";
            pin.style.borderWidth = "3px";
        } else {
            pin.style.transform = "translate(-50%, -50%) scale(1.0)";
            pin.style.borderWidth = "2px";
        }
    });

    // Render detailed stats panel
    document.getElementById('site-name').textContent = site.name;
    document.getElementById('site-type').textContent = site.type;
    document.getElementById('site-power').textContent = site.power;
    document.getElementById('site-connector').textContent = site.connector;
    document.getElementById('site-load').textContent = site.load;
    document.getElementById('site-sessions').textContent = site.sessions;
    document.getElementById('site-energy').textContent = site.energy;

    const statusBadge = document.getElementById('site-status-badge');
    if (statusBadge) {
        statusBadge.textContent = site.status.toUpperCase();
        statusBadge.className = `pill-badge`;
        if (site.status === 'charging') {
            statusBadge.style.backgroundColor = 'rgba(0, 188, 255, 0.1)';
            statusBadge.style.color = 'var(--accent-blue)';
            statusBadge.style.borderColor = 'rgba(0, 188, 255, 0.2)';
        } else if (site.status === 'available') {
            statusBadge.style.backgroundColor = 'rgba(0, 255, 136, 0.1)';
            statusBadge.style.color = 'var(--accent-green)';
            statusBadge.style.borderColor = 'var(--border-accent)';
        } else {
            statusBadge.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            statusBadge.style.color = 'var(--text-muted)';
            statusBadge.style.borderColor = 'var(--border-color)';
        }
    }
}

// Simulated OCPP WebSocket messages logs
const ocppTemplates = [
    { type: 'info', msg: 'Central System (Steve CPMS) listening on port 8180...' },
    { type: 'send', action: 'BootNotification', msg: 'cpId={CP_ID} vendor=Antigravity model={MODEL}' },
    { type: 'recv', action: 'BootNotificationResponse', msg: 'status=Accepted currentTime={TIME}' },
    { type: 'send', action: 'StatusNotification', msg: 'connectorId=1 errorCode=NoError status={STATUS}' },
    { type: 'send', action: 'Authorize', msg: 'idTag={RFID}' },
    { type: 'recv', action: 'AuthorizeResponse', msg: 'idTagInfo.status=Accepted expiry={EXPIRY}' },
    { type: 'send', action: 'StartTransaction', msg: 'connectorId=1 idTag={RFID} meterStart={METER}' },
    { type: 'recv', action: 'StartTransactionResponse', msg: 'transactionId={TX_ID} status=Accepted' },
    { type: 'send', action: 'MeterValues', msg: 'transactionId={TX_ID} meterValue=[{METER_WH} Wh, {POWER} W]' },
    { type: 'send', action: 'StopTransaction', msg: 'transactionId={TX_ID} reason=EVDisconnected meterStop={METER}' },
    { type: 'recv', action: 'StopTransactionResponse', msg: 'status=Accepted' }
];

function updateOcppSimulator() {
    const consoleBox = document.getElementById('terminal-box');
    if (!consoleBox) return;

    // Pick a random site that is online (Gulshan, Banani, or Dhanmondi)
    const activeKeys = ['gulshan', 'banani', 'dhanmondi'];
    const randomKey = activeKeys[Math.floor(Math.random() * activeKeys.length)];
    const site = siteData[randomKey];
    
    // Generate simulated log line
    const date = new Date();
    const timeStr = date.toTimeString().split(' ')[0];
    
    // Pick an appropriate OCPP template
    let logLine = '';
    let logClass = 'info';

    const randVal = Math.random();

    if (randVal < 0.2) {
        // Meter Values log
        const powerW = site.status === 'charging' ? (parseFloat(site.load) * 1000) : 0;
        const currentWh = Math.round(parseFloat(site.energy) * 1000 + (Math.random() * 500));
        const txId = Math.floor(Math.random() * 10000 + 2000);
        logLine = `[${timeStr}] [${site.logPrefix}] SEND MeterValues: txId=${txId} meterValue=[${currentWh} Wh, ${powerW.toFixed(0)} W]`;
        logClass = 'send';
        
        // Update stats slightly in memory
        if (site.status === 'charging') {
            site.energy = (parseFloat(site.energy) + 0.15).toFixed(1) + " kWh";
        }
    } else if (randVal < 0.4) {
        // Status Notification log
        const status = site.status === 'charging' ? 'Charging' : 'Available';
        logLine = `[${timeStr}] [${site.logPrefix}] SEND StatusNotification: connectorId=1 status=${status}`;
        logClass = 'send';
    } else if (randVal < 0.6) {
        // RFID Authorize flow
        const rfids = ['RFID-TAG-4927', 'RFID-TAG-1084', 'RFID-TAG-3850'];
        const rfid = rfids[Math.floor(Math.random() * rfids.length)];
        logLine = `[${timeStr}] [${site.logPrefix}] SEND Authorize: idTag=${rfid}`;
        logClass = 'send';
        
        // Add follow up response instantly
        setTimeout(() => {
            const resLine = `[${new Date().toTimeString().split(' ')[0]}] [${site.logPrefix}] RECV AuthorizeResponse: idTagInfo.status=Accepted`;
            appendLogLine(resLine, 'recv');
        }, 600);
    } else if (randVal < 0.8) {
        // Boot Notification log
        logLine = `[${timeStr}] [${site.logPrefix}] SEND BootNotification: model=${site.power.split(' ')[2]} vendor=Antigravity`;
        logClass = 'send';
        
        setTimeout(() => {
            const resLine = `[${new Date().toTimeString().split(' ')[0]}] [${site.logPrefix}] RECV BootNotificationResponse: status=Accepted`;
            appendLogLine(resLine, 'recv');
        }, 600);
    } else {
        // Central System Info
        const infoMsgs = [
            `Active connected sockets: 3 chargepoints live.`,
            `OCPP Load balancer active. Available grid buffer: 450 kW.`,
            `Central Service Check: Database connections healthy.`
        ];
        logLine = `[${timeStr}] [SYSTEM] INFO: ${infoMsgs[Math.floor(Math.random() * infoMsgs.length)]}`;
        logClass = 'info';
    }

    appendLogLine(logLine, logClass);

    // If the active site was updated, refresh the displayed stats
    if (randomKey === activeSiteKey) {
        showSiteDetails(activeSiteKey);
    }
}

function appendLogLine(text, cssClass) {
    const consoleBox = document.getElementById('terminal-box');
    if (!consoleBox) return;

    const line = document.createElement('div');
    line.className = `terminal-line ${cssClass}`;
    line.textContent = text;
    
    consoleBox.appendChild(line);
    
    // Limit console buffer length
    while (consoleBox.childNodes.length > consoleLinesMax) {
        consoleBox.removeChild(consoleBox.firstChild);
    }
    
    // Auto Scroll to bottom
    consoleBox.scrollTop = consoleBox.scrollHeight;
}
