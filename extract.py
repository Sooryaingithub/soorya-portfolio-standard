import re
import json

with open("/Users/sooryasendilnath/.gemini/antigravity/scratch/soorya-portfolio-standard/jules_output.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Look for json code blocks first
match = re.search(r'```(?:json)?(.*?)```', text, re.DOTALL)
if match:
    json_str = match.group(1).strip()
else:
    # Try to find the largest outer braces
    # this is a bit crude but works if the response is raw json
    start = text.find('{')
    end = text.rfind('}')
    if start != -1 and end != -1:
        json_str = text[start:end+1]
    else:
        print("No JSON found!")
        exit(1)

try:
    data = json.loads(json_str)
    with open("jules_parsed.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    print("Successfully parsed JSON with keys:", list(data.keys()))
except Exception as e:
    print("JSON Decode Error:", e)
    # Write the raw string so we can inspect it
    with open("jules_parsed.json", "w", encoding="utf-8") as f:
        f.write(json_str)
