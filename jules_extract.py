import subprocess
import time
import re

def run_applescript(script):
    res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
    return res.stdout.strip()

script = f"""
tell application "Google Chrome"
    set targetTab to missing value
    repeat with w in windows
        repeat with t in tabs of w
            if URL of t contains "jules.google.com" then
                set tabText to execute t javascript "(function() {{ return document.body.innerText; }})()"
                if tabText does not contain "This session is paused" then
                    set targetTab to t
                    exit repeat
                end if
            end if
        end repeat
        if targetTab is not missing value then exit repeat
    end repeat
    
    if targetTab is not missing value then
        return execute targetTab javascript "(function() {{ return document.body.innerText; }})()"
    else
        return ""
    end if
end tell
"""

print("Polling for Jules's final code...")
last_text = ""
stable_count = 0

for _ in range(60):
    text = run_applescript(script)
    if not text:
        print("Tab not found yet...")
        time.sleep(5)
        continue
        
    if text == last_text and len(text) > 1000:
        stable_count += 1
    else:
        stable_count = 0
        last_text = text
        
    print(f"Length: {len(text)}, Stable: {stable_count}")
    
    if stable_count >= 3:
        if "```tsx" in text or "```typescript" in text:
            print("Done!")
            break
            
    time.sleep(5)

# Extract Code
match = re.search(r'```(?:tsx|typescript)?(.*?)```', last_text, re.DOTALL | re.IGNORECASE)
if match:
    refined_code = match.group(1).strip()
    with open("src/components/ui/CommandPalette.tsx", "w", encoding="utf-8") as f:
        f.write(refined_code)
    print("Successfully saved Jules's code to CommandPalette.tsx!")
else:
    print("Could not find code block.")
