import json
import os
from targets import TARGET_SOURCES

def export_to_json():
    # 1. Get the absolute path of the 'agent' folder
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # 2. Navigate to the frontend data directory relative to this script
    # This goes: agent/ -> ../ -> frontend/src/data
    target_dir = os.path.abspath(os.path.join(current_dir, "..", "frontend", "src", "data"))
    
    # 3. Create the directory if it doesn't exist
    if not os.path.exists(target_dir):
        print(f"[*] Creating directory: {target_dir}")
        os.makedirs(target_dir, exist_ok=True)
        
    output_path = os.path.join(target_dir, "targets.json")
    
    # 4. Write the file
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(TARGET_SOURCES, f, indent=4)
    
    print(f"[✓] Targets exported successfully to: {output_path}")

if __name__ == "__main__":
    export_to_json()