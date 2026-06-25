import subprocess
import time

def run_js(js_code):
    js_escaped = js_code.replace('\\', '\\\\').replace('"', '\\"')
    script = f'tell application "Google Chrome" to execute front window\'s active tab javascript "{js_escaped}"'
    res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
    return res.stdout.strip()

print("--- Diagnostics ---")
url = run_js("window.location.href")
print("Current URL:", url)

title = run_js("document.title")
print("Page Title:", title)

input_check = run_js("""
    (function() {
        let el = document.querySelector('textarea, [contenteditable=\"true\"]');
        if (!el) return 'Not Found';
        return el.tagName + ' | classes: ' + el.className;
    })()
""")
print("Input Box:", input_check)
