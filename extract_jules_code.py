import re

with open('jules_final_output.txt', 'r', encoding='utf-8') as f:
    txt = f.read()

start_idx = txt.find('"use client";')
if start_idx == -1:
    start_idx = txt.find("'use client';")

if start_idx != -1:
    code = txt[start_idx:]
    
    # Remove Jules UI artifacts that appear at the bottom
    artifacts = ["Copy code", "Hide", "Approve plan?", "Talk to Jules", "Jules can make mistakes", "Release to enter full screen", "Submit the change"]
    for art in artifacts:
        code = code.replace(art, "")
        
    last_brace = code.rfind('}')
    code = code[:last_brace+1].strip()
    
    # Fix any potential weird unicode spaces or zero-width spaces Jules UI might have added
    code = code.replace('\u200b', '')
    
    with open('src/components/ui/CommandPalette.tsx', 'w', encoding='utf-8') as out:
        out.write(code)
    print("Extracted and saved Jules's code successfully!")
else:
    print("Failed to find start of code.")
