import json
import re

with open("stories_patch.json", "r", encoding="utf-8") as f:
    stories = json.load(f)

with open("src/data/projects.ts", "r", encoding="utf-8") as f:
    ts_code = f.read()

for pid, labWriteup in stories.items():
    lab_str = json.dumps(labWriteup, indent=6)
    # Adjust indentation
    lab_str = lab_str.replace('\n', '\n    ')
    
    # Regex to find the id line and insert after it
    pattern = r'(id:\s*["\']' + re.escape(pid) + r'["\'],)'
    replacement = r'\1\n    labWriteup: ' + lab_str.replace('\\', '\\\\') + ','
    ts_code = re.sub(pattern, replacement, ts_code)

with open("src/data/projects.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)

print("Successfully applied 8 stories to projects.ts")
