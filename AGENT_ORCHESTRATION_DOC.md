# Portfolio Architecture & Agent Orchestration Log

## Overview
This document serves as a historical log and architectural overview of the **Soorya Portfolio Standard** project. The primary goal of this repository is to serve as a highly premium, glassmorphic, and dynamic portfolio for an AI Systems Engineer, showcasing deep technical knowledge across cloud infrastructure, local intelligence, and spatial computing.

## The Dual-Agent Experiment
To optimize usage limits and experiment with autonomous multi-agent pipelines, we implemented a true **Human-Agent-Agent Interactive Loop** using Antigravity (Local Orchestrator) and Google Jules (Cloud Generation Engine).

Instead of manually prompting and copying code from a web interface, we built a suite of local Python scripts that hook directly into the macOS accessibility layer and the Chrome DOM via AppleScript to drive Jules autonomously.

### Key Scripts Built
- `jules_automator.py`: The initial script to inject prompts into Chrome and poll for stability.
- `jules_refiner.py`: An advanced orchestrator that brings Chrome to the foreground, perfectly targets the ProseMirror rich text editor, simulates native keystrokes, and polls the DOM specifically for ````tsx` React code blocks.
- `jules_read.py` / `jules_read_all.py`: Scrapers designed to read the active Jules chat transcript, allowing the local agent to intercept clarifying questions from Jules.
- `jules_reply.py`: A reply injector used to automatically answer Jules's clarifying questions on the user's behalf.
- `jules_extract.py` & `extract_jules_code.py`: Final extraction scripts that safely slice syntax-highlighted code blocks out of the DOM, strip away UI artifacts (like "Copy Code" buttons), and inject the raw code directly into local `.tsx` files.

## Features Built via Automation

### 1. "Experiences" Deep-Dives
We completely redesigned the `/lab` route into a detailed `Experiences` section. We generated 8 highly detailed, humanized, first-person narratives for projects including:
- Local macOS AI Agents
- WhisperKit Integration
- Azure Document Intelligence
- GitHub Triage Automation
- Edge IoT Data Pipelines
- 5G Edge Robotics

*Note: While the initial Jules UI automation failed for these stories due to DOM state issues, the stories were successfully generated natively by Antigravity and injected into `projects.ts` using an AST-aware Regex python script (`apply_stories.py`).*

### 2. Global Command Palette (Cmd+K)
We built a highly professional, Spotlight/Raycast-style global command palette. 
- **The Orchestration**: Antigravity wrote the core structural logic (event listeners, routing, state). We then fed this raw code into Jules via `jules_refiner.py` with instructions to apply `framer-motion` animations and premium glassmorphism styling.
- **The Agent Loop**: Jules paused generation to ask three clarifying questions about keyboard navigation and visual highlights. Antigravity automatically intercepted these questions, generated a tailored technical response, replied to Jules autonomously, extracted the final generated ````tsx` block, and overwrote `CommandPalette.tsx`. 
- **Result**: A flawless, fully functional, beautifully animated command palette deployed to production without the user ever writing a line of code manually.

## Persistent Knowledge
This project utilizes **Graphify** (`graphify update .`) to maintain a persistent, AST-aware structural knowledge graph of the codebase at all times, ensuring the AI orchestrator always understands file relationships and architectural context.
