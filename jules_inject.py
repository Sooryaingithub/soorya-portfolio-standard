import subprocess
import time

def run_js(js_code):
    js_escaped = js_code.replace('\\', '\\\\').replace('"', '\\"')
    script = f'tell application "Google Chrome" to execute front window\'s active tab javascript "{js_escaped}"'
    res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
    return res.stdout.strip()

print("Attempting to inject text natively via JavaScript...")

js = """
(function() {
    let pm = document.querySelector('.ProseMirror');
    if (!pm) return "ProseMirror not found";
    
    pm.focus();
    let success = document.execCommand('insertText', false, 'Testing real-time injection...');
    
    // Check if send button appears
    setTimeout(() => {
        let sendBtn = document.querySelector('button[aria-label*="Send" i], button[title*="Send" i]');
        if (sendBtn) {
            sendBtn.style.border = "2px solid red"; // highlight for user
        }
    }, 500);
    
    return "Injection Executed: " + success;
})();
"""

print("Result:", run_js(js))
