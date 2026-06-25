import os
import time
import subprocess
import re

with open("src/components/ui/CommandPalette.tsx", "r", encoding="utf-8") as f:
    raw_code = f.read()

prompt = f"""Refine this CommandPalette React component. 
Requirements:
1. Use fluid Framer Motion animations (`AnimatePresence` for the backdrop/modal mount/unmount, and `motion.div` for the pop-in effect).
2. Apply a dark, premium glassmorphism aesthetic using Tailwind CSS (e.g., `bg-black/40`, `backdrop-blur-xl`, `border border-white/10`).
3. Make it look like a highly professional Spotlight or Raycast command palette.
4. Keep the exact same `actions` array and routing logic using `next/navigation`.
5. Support pressing 'Escape' to close (by handling onKeyDown on the input or a global listener).
6. Provide the complete rewritten code in a single ```tsx code block. Do not use external libraries other than framer-motion, lucide-react, and Tailwind.

Here is the raw code:
```tsx
{raw_code}
```
"""

def run_applescript(script):
    res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
    if res.returncode != 0:
        print("AppleScript Error:", res.stderr)
    return res.stdout.strip()

# 1. Copy to clipboard
subprocess.run(['pbcopy'], input=prompt.encode('utf-8'))

# 2. Focus input and clear it
js_focus = """
let pm = document.querySelector('.ProseMirror');
if (pm) {
    // try to click it to ensure focus
    pm.focus();
}
"""
js_escaped = js_focus.replace('"', '\\"')
run_applescript(f'tell application "Google Chrome" to execute front window\'s active tab javascript "{js_escaped}"')

# 3. Paste and Enter
run_applescript("""
tell application "Google Chrome" to activate
delay 0.5
tell application "System Events"
    keystroke "a" using command down
    delay 0.2
    key code 51 -- delete key to clear previous stuff just in case
    delay 0.5
    keystroke "v" using command down
    delay 0.5
    keystroke return
end tell
""")

print("Prompt sent. Waiting for Jules to refine the code...")

# 4. Polling for response
def get_page_text():
    js = "document.body.innerText"
    js_escaped = js.replace('"', '\\"')
    return run_applescript(f'tell application "Google Chrome" to execute front window\'s active tab javascript "{js_escaped}"')

last_text = ""
stable_count = 0
time.sleep(15) # Wait for generation to start

for _ in range(60):
    text = get_page_text()
    # we want to wait until it stabilizes and contains the new tsx block
    if text == last_text and len(text) > 1000:
        stable_count += 1
    else:
        stable_count = 0
        last_text = text
    
    print(f"Polling... (Length: {len(text)}, Stable: {stable_count})")
    
    if stable_count >= 3: # stable for 15 seconds
        if "```tsx" in text:
            print("Generation complete and TSX block found!")
            break
    time.sleep(5)

# 5. Extract Code
match = re.search(r'```(?:tsx|typescript)?(.*?)```', last_text, re.DOTALL | re.IGNORECASE)
if match:
    refined_code = match.group(1).strip()
    with open("src/components/ui/CommandPalette.tsx", "w", encoding="utf-8") as f:
        f.write(refined_code)
    print("Successfully overwritten CommandPalette.tsx with Jules's refined code!")
else:
    print("Could not find the tsx code block in Jules's response.")
    # dump to debug
    with open("jules_debug.txt", "w", encoding="utf-8") as f:
        f.write(last_text)
