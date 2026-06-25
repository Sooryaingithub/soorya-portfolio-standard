import os
import time
import subprocess
import json

prompt = """Generate a JSON object where the keys are the project IDs, and the values are the `labWriteup` arrays. Each array should follow this exact structure:
"project-id": [
  { "type": "heading", "value": "The Origin: [Catchy Subtitle]" },
  { "type": "paragraph", "value": "[First-person narrative...]" },
  { "type": "heading", "value": "The Blueprint: [Tech Stack Focus]" },
  { "type": "paragraph", "value": "[Deep dive into the architectural decisions...]" },
  { "type": "code", "language": "python/swift/bash/etc", "value": "[A realistic snippet of code...]" },
  { "type": "heading", "value": "The Struggle: [What went wrong]" },
  { "type": "paragraph", "value": "[A realistic engineering struggle...]" },
  { "type": "heading", "value": "The Result" },
  { "type": "paragraph", "value": "[The final outcome...]" }
]

The 8 Projects:
1. `local-macos-ai-agents`
2. `whisperkit-integration`
3. `document-intelligence`
4. `github-automation`
5. `nas-deployment`
6. `iot-data-pipeline`
7. `azure-helmet-detection`
8. `5g-edge`

Please output ONLY the valid JSON object without markdown wrapping.
"""

def run_applescript(script):
    res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
    if res.returncode != 0:
        print("AppleScript Error:", res.stderr)
    return res.stdout.strip()

# 1. Copy to clipboard
subprocess.run(['pbcopy'], input=prompt.encode('utf-8'))

# 2. Focus input
js_focus = """
let el = document.querySelector('textarea, [contenteditable=\"true\"]');
if (el) { el.focus(); }
"""
# properly escape quotes for applescript
js_escaped = js_focus.replace('"', '\\"')
run_applescript(f'tell application "Google Chrome" to execute front window\'s active tab javascript "{js_escaped}"')

# 3. Paste and Enter
run_applescript("""
tell application "Google Chrome" to activate
delay 0.5
tell application "System Events"
    keystroke "v" using command down
    delay 0.5
    keystroke return
end tell
""")

print("Prompt sent. Waiting for response...")

# 4. Polling for response
def get_page_text():
    # Grabs the text content of the entire document
    js = "document.body.innerText"
    js_escaped = js.replace('"', '\\"')
    return run_applescript(f'tell application "Google Chrome" to execute front window\'s active tab javascript "{js_escaped}"')

last_text = ""
stable_count = 0
time.sleep(10) # wait for generation to start

for _ in range(60):
    text = get_page_text()
    if text == last_text and len(text) > 500:
        stable_count += 1
    else:
        stable_count = 0
        last_text = text
    
    print(f"Polling... (Length: {len(text)}, Stable: {stable_count})")
    
    if stable_count >= 3: # stable for 15 seconds
        print("Generation seems complete.")
        break
    time.sleep(5)

with open("/Users/sooryasendilnath/.gemini/antigravity/scratch/soorya-portfolio-standard/jules_output.txt", "w", encoding="utf-8") as f:
    f.write(last_text)

print("Done. Saved output to jules_output.txt.")
