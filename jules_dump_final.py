import subprocess

script = """
tell application "Google Chrome"
    set targetTab to missing value
    repeat with w in windows
        repeat with t in tabs of w
            if URL of t contains "jules.google.com" then
                set tabText to execute t javascript "(function() { return document.body.innerText; })()"
                if tabText does not contain "This session is paused" then
                    set targetTab to t
                    exit repeat
                end if
            end if
        end repeat
        if targetTab is not missing value then exit repeat
    end repeat
    
    if targetTab is not missing value then
        return execute targetTab javascript "(function() { return document.body.innerText; })()"
    else
        return "NOT FOUND"
    end if
end tell
"""

res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
with open("jules_final_output.txt", "w", encoding="utf-8") as f:
    f.write(res.stdout)
print("Dumped to jules_final_output.txt")
