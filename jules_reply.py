import subprocess
import time

reply = """Yes, please implement full keyboard navigation (up/down arrows and Enter to select). 
For visual enhancements, use a subtle white/10 fill with a very soft border (like border-white/5) for the selected state. Keep the #00F0FF accent for icons on hover/select. 
For typography, please inject specific colors and opacities to elevate the premium dark feel to the absolute maximum. Make it look incredibly polished.
Please go ahead and generate the full code in a single ```tsx block!"""

# We need to find the correct Jules tab! It's the one that DOES NOT have "This session is paused".
script = f"""
tell application "Google Chrome"
    set targetTab to missing value
    repeat with w in windows
        repeat with t in tabs of w
            if URL of t contains "jules.google.com" then
                set tabText to execute t javascript "(function() {{ return document.body.innerText; }})()"
                if tabText does not contain "This session is paused" then
                    set targetTab to t
                    set index of w to 1
                    set active tab index of w to (get index of targetTab)
                    exit repeat
                end if
            end if
        end repeat
        if targetTab is not missing value then exit repeat
    end repeat
    
    if targetTab is not missing value then
        tell application "Google Chrome" to activate
        delay 0.5
        execute targetTab javascript "
            let pm = document.querySelector('.ProseMirror');
            if(pm) {{ pm.focus(); pm.click(); }}
        "
        delay 0.5
        tell application "System Events"
            keystroke "v" using command down
            delay 1.0
            keystroke return
        end tell
        return "Reply sent successfully!"
    else
        return "Could not find active Jules tab!"
    end if
end tell
"""

subprocess.run(['pbcopy'], input=reply.encode('utf-8'))
res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
print(res.stdout.strip())
