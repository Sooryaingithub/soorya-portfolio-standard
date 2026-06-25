import subprocess

def run_js(js_code):
    js_escaped = js_code.replace('\\', '\\\\').replace('"', '\\"')
    script = f'tell application "Google Chrome" to execute front window\'s active tab javascript "{js_escaped}"'
    res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
    return res.stdout.strip()

print("--- Reading Jules Chat ---")
# Get the innerText of the main application body, but try to avoid the sidebars if possible
# Usually chat apps have a main content area. If not, body.innerText works
js = """
(function() {
    // Try to find the chat container
    let chat = document.querySelector('main') || document.body;
    return chat.innerText.slice(-2000); // Get the last 2000 chars of the page to see the latest messages
})();
"""

text = run_js(js)
print(text)
