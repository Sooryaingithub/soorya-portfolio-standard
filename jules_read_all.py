import subprocess
import json

script = """
tell application "Google Chrome"
    set julesTabs to {}
    repeat with w in windows
        repeat with t in tabs of w
            if URL of t contains "jules.google.com" then
                set tabText to execute t javascript "(function() { let chat = document.querySelector('main') || document.body; return chat.innerText.slice(-2000); })()"
                set end of julesTabs to {title: title of t, text: tabText}
            end if
        end repeat
    end repeat
    
    -- convert to JSON format string manually since AppleScript doesn't do JSON easily
    set jsonStr to "["
    repeat with i from 1 to count of julesTabs
        set itemData to item i of julesTabs
        set theTitle to title of itemData
        set theText to text of itemData
        
        -- escape quotes and newlines
        set theTitle to do shell script "echo " & quoted form of theTitle & " | sed 's/\"/\\\\\"/g'"
        set theText to do shell script "echo " & quoted form of theText & " | sed 's/\"/\\\\\"/g' | awk '{printf \"%s\\\\n\", $0}'"
        
        set jsonStr to jsonStr & "{\\"title\\":\\"" & theTitle & "\\", \\"text\\":\\"" & theText & "\\"}"
        if i < count of julesTabs then
            set jsonStr to jsonStr & ","
        end if
    end repeat
    set jsonStr to jsonStr & "]"
    return jsonStr
end tell
"""

res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
if res.returncode != 0:
    print("Error:", res.stderr)
else:
    print(res.stdout)
