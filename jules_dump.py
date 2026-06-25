import subprocess

script = """
tell application "Google Chrome"
    set out to ""
    repeat with w in windows
        repeat with t in tabs of w
            if URL of t contains "jules.google.com" then
                set out to out & "\\n\\n--- TAB: " & (title of t) & " ---\\n"
                set tabText to execute t javascript "(function() { let chat = document.querySelector('main') || document.body; return chat.innerText.slice(-2000); })()"
                set out to out & tabText
            end if
        end repeat
    end repeat
    return out
end tell
"""

res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
print(res.stdout)
if res.stderr:
    print("ERR:", res.stderr)
