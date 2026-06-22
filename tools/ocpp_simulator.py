#!/usr/bin/env python3
import asyncio
import json
import uuid
import sys
from datetime import datetime

# Check for websockets library
try:
    import websockets
except ImportError:
    print("Error: The 'websockets' library is required to run this simulator.")
    print("Please install it using: pip install websockets")
    sys.exit(1)

# Configuration
DEFAULT_URL = "ws://localhost:8180/steve/websocket/CentralSystemService/AG-CHARGE-01"

class OcppChargePoint:
    def __init__(self, ws_url):
        self.ws_url = ws_url
        self.ws = None
        self.transaction_id = None
        self.meter_value = 0
        self.charging_task = None
        self.is_charging = False

    async def connect(self):
        print(f"\nConnecting to OCPP Backend: {self.ws_url} ...")
        try:
            self.ws = await websockets.connect(
                self.ws_url,
                subprotocols=['ocpp1.6']
            )
            print("Connected successfully!")
            return True
        except Exception as e:
            print(f"[Error] Connection failed: {e}")
            return False

    async def send_call(self, action, payload):
        msg_id = str(uuid.uuid4())
        call = [2, msg_id, action, payload]
        raw_msg = json.dumps(call)
        
        print(f"\nSENDING [{action}]:")
        print(json.dumps(payload, indent=2))
        
        await self.ws.send(raw_msg)
        
        try:
            response = await asyncio.wait_for(self.ws.recv(), timeout=5.0)
            res_data = json.loads(response)
            
            # Message format: [3, messageId, payload]
            if len(res_data) >= 3 and res_data[0] == 3 and res_data[1] == msg_id:
                print(f"RECEIVED RESPONSE:")
                print(json.dumps(res_data[2], indent=2))
                return res_data[2]
            else:
                print(f"[Warning] Unexpected response: {res_data}")
                return None
        except asyncio.TimeoutError:
            print("[Timeout] No response from Central System within 5 seconds.")
            return None
        except Exception as e:
            print(f"[Error] Error receiving response: {e}")
            return None

    async def boot_notification(self):
        payload = {
            "chargePointVendor": "Antigravity",
            "chargePointModel": "AG-L2-7KW",
            "chargePointSerialNumber": "AG12345678",
            "firmwareVersion": "1.0.0"
        }
        return await self.send_call("BootNotification", payload)

    async def status_notification(self, status, error_code="NoError"):
        payload = {
            "connectorId": 1,
            "errorCode": error_code,
            "status": status
        }
        return await self.send_call("StatusNotification", payload)

    async def authorize(self, id_tag):
        payload = {
            "idTag": id_tag
        }
        return await self.send_call("Authorize", payload)

    async def start_transaction(self, id_tag):
        payload = {
            "connectorId": 1,
            "idTag": id_tag,
            "timestamp": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"),
            "meterStart": self.meter_value
        }
        res = await self.send_call("StartTransaction", payload)
        if res and "transactionId" in res:
            self.transaction_id = res["transactionId"]
            print(f"Transaction started! ID: {self.transaction_id}")
            return True
        else:
            print("[Error] Failed to start transaction (no transaction ID returned)")
            return False

    async def stop_transaction(self, id_tag, reason="EVDisconnected"):
        if not self.transaction_id:
            print("[Warning] No active transaction to stop.")
            return
            
        payload = {
            "transactionId": self.transaction_id,
            "idTag": id_tag,
            "timestamp": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"),
            "meterStop": self.meter_value,
            "reason": reason
        }
        await self.send_call("StopTransaction", payload)
        self.transaction_id = None
        self.is_charging = False

    async def send_meter_values(self, current_draw_w):
        if not self.transaction_id:
            return
            
        payload = {
            "connectorId": 1,
            "transactionId": self.transaction_id,
            "meterValue": [
                {
                    "timestamp": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"),
                    "sampledValue": [
                        {
                            "value": str(self.meter_value),
                            "context": "Sample.Periodic",
                            "format": "Raw",
                            "measurand": "Energy.Active.Import.Register",
                            "phase": "L1",
                            "unit": "Wh"
                        },
                        {
                            "value": str(current_draw_w),
                            "context": "Sample.Periodic",
                            "format": "Raw",
                            "measurand": "Power.Active.Import",
                            "phase": "L1",
                            "unit": "W"
                        }
                    ]
                }
            ]
        }
        await self.send_call("MeterValues", payload)

    async def charging_loop(self):
        try:
            while self.is_charging:
                # Add 50 Wh every 3 seconds (equivalent to 60 kW charging in speed simulation)
                self.meter_value += 50
                print(f"\nCharging... Current Meter Value: {self.meter_value} Wh")
                await self.send_meter_values(current_draw_w=7000)
                await asyncio.sleep(3)
        except asyncio.CancelledError:
            pass

    def start_charging(self):
        self.is_charging = True
        self.charging_task = asyncio.create_task(self.charging_loop())

    def stop_charging(self):
        self.is_charging = False
        if self.charging_task:
            self.charging_task.cancel()

async def interactive_menu(ws_url):
    cp = OcppChargePoint(ws_url)
    connected = await cp.connect()
    if not connected:
        return

    id_tag = "RFID-TAG-1234"

    while True:
        print("\n" + "="*45)
        print("   ANTIGRAVITY OCPP 1.6J SIMULATOR MENU   ")
        print("="*45)
        print(f"Status: {'Charging' if cp.is_charging else 'Idle'}")
        print(f"Transaction ID: {cp.transaction_id or 'None'}")
        print(f"Meter Value: {cp.meter_value} Wh")
        print("-"*45)
        print("1. Send BootNotification")
        print("2. Send StatusNotification (Available)")
        print("3. Send StatusNotification (Preparing)")
        print("4. Scan RFID Card & Authorize")
        print("5. Start Transaction (Start Charging)")
        print("6. Stop Transaction (Stop Charging)")
        print("7. Reset Meter Value")
        print("0. Exit")
        print("="*45)
        
        choice = input("Enter choice (0-7): ").strip()
        
        if choice == '1':
            await cp.boot_notification()
        elif choice == '2':
            await cp.status_notification("Available")
        elif choice == '3':
            await cp.status_notification("Preparing")
        elif choice == '4':
            print(f"Scanning RFID Tag: {id_tag}")
            await cp.authorize(id_tag)
        elif choice == '5':
            if cp.transaction_id:
                print("[Warning] Charging already in progress.")
                continue
            await cp.status_notification("Preparing")
            success = await cp.start_transaction(id_tag)
            if success:
                await cp.status_notification("Charging")
                cp.start_charging()
        elif choice == '6':
            if not cp.transaction_id:
                print("[Warning] No transaction active.")
                continue
            cp.stop_charging()
            await cp.status_notification("Finishing")
            await cp.stop_transaction(id_tag)
            await cp.status_notification("Available")
            print("Charging stopped and session closed.")
        elif choice == '7':
            cp.meter_value = 0
            print("Meter reset to 0 Wh.")
        elif choice == '0':
            if cp.is_charging:
                cp.stop_charging()
                await cp.stop_transaction(id_tag)
            if cp.ws:
                await cp.ws.close()
            print("Exiting simulator. Goodbye!")
            break
        else:
            print("[Error] Invalid choice. Please select from 0 to 7.")

def main():
    print("="*55)
    print("Antigravity OCPP 1.6J Charge Point Simulator")
    print("="*55)
    
    ws_url = DEFAULT_URL
    if len(sys.argv) > 1:
        ws_url = sys.argv[1]
    else:
        user_url = input(f"Enter Central System WebSocket URL\n(Default: {DEFAULT_URL}): ").strip()
        if user_url:
            ws_url = user_url
            
    try:
        asyncio.run(interactive_menu(ws_url))
    except KeyboardInterrupt:
        print("\nExiting simulator.")

if __name__ == "__main__":
    main()
