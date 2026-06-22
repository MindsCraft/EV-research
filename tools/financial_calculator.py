#!/usr/bin/env python3
import sys

def print_header(title):
    print("\n" + "="*50)
    print(f" {title.center(48)} ")
    print("="*50)

def print_separator():
    print("-"*50)

def get_float_input(prompt, default_val=None):
    while True:
        default_str = f" [{default_val}]" if default_val is not None else ""
        val_str = input(f"{prompt}{default_str}: ").strip()
        if not val_str and default_val is not None:
            return default_val
        try:
            val = float(val_str)
            if val < 0:
                print("[Error] Please enter a positive number.")
                continue
            return val
        except ValueError:
            print("[Error] Invalid input. Please enter a valid number.")

def reseller_calculator():
    print_header("MODEL 1: HARDWARE RESELLER ECONOMICS")
    
    # Inputs
    fob_price_usd = get_float_input("Enter China FOB price per unit (USD)", 200.0)
    freight_clearance_usd = get_float_input("Enter Freight & Customs Clearance per unit (USD)", 40.0)
    exchange_rate = get_float_input("Enter USD to BDT Exchange Rate", 117.5)
    markup_pct = get_float_input("Enter Desired Markup Percentage (%)", 35.0)
    
    # Calculations
    landed_cost_usd = fob_price_usd + freight_clearance_usd
    landed_cost_bdt = landed_cost_usd * exchange_rate
    selling_price_bdt = landed_cost_bdt * (1 + (markup_pct / 100.0))
    selling_price_usd = selling_price_bdt / exchange_rate
    gross_profit_bdt = selling_price_bdt - landed_cost_bdt
    gross_profit_usd = selling_price_usd - landed_cost_usd
    margin_pct = (gross_profit_bdt / selling_price_bdt) * 100.0
    
    # Results
    print_header("RESELLER RESULTS")
    print(f"Landed Cost (USD):          ${landed_cost_usd:,.2f}")
    print(f"Landed Cost (BDT):          BDT {landed_cost_bdt:,.2f}")
    print_separator()
    print(f"Selling Price (BDT):        BDT {selling_price_bdt:,.2f}")
    print(f"Selling Price (USD equivalent): ${selling_price_usd:,.2f}")
    print_separator()
    print(f"Gross Profit per Unit (BDT):  BDT {gross_profit_bdt:,.2f}")
    print(f"Gross Profit per Unit (USD):  ${gross_profit_usd:,.2f}")
    print(f"Actual Profit Margin:        {margin_pct:.2f}%")
    print("="*50)

def cpo_calculator():
    print_header("MODEL 2: CHARGE POINT OPERATOR (CPO) ECONOMICS")
    
    # Inputs
    charger_cost_bdt = get_float_input("Enter Landed Charger Cost (BDT)", 30000.0)
    install_cost_bdt = get_float_input("Enter Installation & Site Setup Cost (BDT)", 45000.0)
    power_kw = get_float_input("Enter Charger Output Power (kW) (e.g. 7.4 for L2, 50.0 for DC)", 7.4)
    
    utilization_hours = get_float_input("Enter Average Charging Hours per Day (utilization)", 3.0)
    
    electricity_cost_kwh = get_float_input("Enter Grid Electricity Cost (BDT/kWh) (BERC Tariff)", 11.36)
    charging_price_kwh = get_float_input("Enter Charging Price to Driver (BDT/kWh)", 18.0)
    
    monthly_lease_bdt = get_float_input("Enter Monthly Site Lease / Rent (BDT)", 3000.0)
    monthly_saas_bdt = get_float_input("Enter Monthly Software Platform Fee per Charger (BDT)", 1500.0)
    monthly_maintenance_bdt = get_float_input("Enter Monthly Maintenance & Connectivity (BDT)", 1000.0)
    
    # Calculations
    total_capex = charger_cost_bdt + install_cost_bdt
    daily_energy_kwh = power_kw * utilization_hours
    monthly_energy_kwh = daily_energy_kwh * 30
    annual_energy_kwh = daily_energy_kwh * 365
    
    energy_margin_bdt = charging_price_kwh - electricity_cost_kwh
    
    # Revenue/Costs
    monthly_gross_revenue = monthly_energy_kwh * charging_price_kwh
    monthly_electricity_cost = monthly_energy_kwh * electricity_cost_kwh
    monthly_opex = monthly_lease_bdt + monthly_saas_bdt + monthly_maintenance_bdt
    
    monthly_net_margin = monthly_gross_revenue - monthly_electricity_cost
    monthly_net_profit = monthly_net_margin - monthly_opex
    
    annual_gross_revenue = annual_energy_kwh * charging_price_kwh
    annual_electricity_cost = annual_energy_kwh * electricity_cost_kwh
    annual_opex = monthly_opex * 12
    annual_net_profit = (annual_energy_kwh * energy_margin_bdt) - annual_opex
    
    payback_months = total_capex / monthly_net_profit if monthly_net_profit > 0 else float('inf')
    roi_annual_pct = (annual_net_profit / total_capex) * 100 if total_capex > 0 else 0
    
    # Results
    print_header("CPO RESULTS")
    print(f"Total Initial CAPEX:         BDT {total_capex:,.2f}")
    print(f"Monthly Recurring OPEX:      BDT {monthly_opex:,.2f}")
    print(f"Daily Energy Sold:           {daily_energy_kwh:.2f} kWh")
    print(f"Monthly Energy Sold:         {monthly_energy_kwh:,.2f} kWh")
    print_separator()
    print(f"Electricity Arbitrage Margin: BDT {energy_margin_bdt:.2f}/kWh")
    print(f"Monthly Gross Revenue:       BDT {monthly_gross_revenue:,.2f}")
    print(f"Monthly Electricity Cost:    BDT {monthly_electricity_cost:,.2f}")
    print(f"Monthly Net Profit:          BDT {monthly_net_profit:,.2f}")
    print_separator()
    print(f"Annual Net Profit:           BDT {annual_net_profit:,.2f}")
    print(f"Annual ROI:                  {roi_annual_pct:.2f}%")
    
    if payback_months == float('inf') or payback_months <= 0:
        print("Payback Period:              Never (Opex exceeds net margin). Increase utilization or price.")
    else:
        print(f"Payback Period:              {payback_months:.2f} Months ({payback_months/12:.2f} Years)")
    print("="*50)

def main():
    while True:
        print_header("EV CHARGER BUSINESS CALCULATOR (BANGLADESH)")
        print("1. Calculate Model 1: Hardware Reseller Economics")
        print("2. Calculate Model 2: Charge Point Operator (CPO) Economics")
        print("0. Exit")
        print("="*50)
        
        choice = input("Enter choice (0-2): ").strip()
        if choice == '1':
            reseller_calculator()
        elif choice == '2':
            cpo_calculator()
        elif choice == '0':
            print("Thank you for using the Antigravity EV Calculator!")
            break
        else:
            print("[Error] Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
