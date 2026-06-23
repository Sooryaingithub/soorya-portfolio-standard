"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([
    {
      command: "sys_init",
      output: (
        <div className="text-emerald-400">
          Initializing secure terminal session...<br/>
          Welcome, fellow engineer. Type 'help' to see available commands.
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Listen for the backtick ` to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Hidden console message for devs inspecting the site
  useEffect(() => {
    console.log("%cAh, a fellow engineer!", "color: #00F0FF; font-size: 20px; font-weight: bold;");
    console.log("%cI see you're checking under the hood. Try pressing the backtick ` key anywhere on the site for a surprise.", "color: #8A2BE2; font-size: 14px;");
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const args = trimmed.split(" ");
    const baseCmd = args[0].toLowerCase();

    let output: React.ReactNode = "";

    switch (baseCmd) {
      case "help":
        output = (
          <div className="text-gray-300">
            Available commands:<br/>
            <span className="text-emerald-400">help</span>    - Show this message<br/>
            <span className="text-emerald-400">whoami</span>  - Print current user info<br/>
            <span className="text-emerald-400">ls</span>      - List directories<br/>
            <span className="text-emerald-400">cd</span>      - Navigate to a section (e.g. cd projects)<br/>
            <span className="text-emerald-400">cat</span>     - Read a file (e.g. cat resume.txt)<br/>
            <span className="text-emerald-400">clear</span>   - Clear terminal output<br/>
            <span className="text-emerald-400">exit</span>    - Close terminal
          </div>
        );
        break;
      case "whoami":
        output = <div className="text-emerald-400">guest_engineer</div>;
        break;
      case "ls":
        output = <div className="text-blue-400">projects/  skills/  timeline/  about/  hobbies/  resume.txt</div>;
        break;
      case "cd":
        const target = args[1]?.toLowerCase();
        if (["projects", "skills", "timeline", "about", "hobbies", "lab"].includes(target)) {
          output = <div className="text-emerald-400">Navigating to /{target}...</div>;
          setTimeout(() => {
            router.push(`/${target}`);
            setIsOpen(false);
          }, 800);
        } else if (!target) {
          output = <div className="text-gray-300">cd: missing operand</div>;
        } else {
          output = <div className="text-red-400">cd: no such file or directory: {target}</div>;
        }
        break;
      case "cat":
        if (args[1] === "resume.txt" || args[1] === "resume.pdf") {
          output = <div className="text-emerald-400">Opening resume...</div>;
          setTimeout(() => {
            window.open("/resume.pdf", "_blank");
          }, 500);
        } else {
          output = <div className="text-red-400">cat: {args[1]}: No such file</div>;
        }
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        setIsOpen(false);
        setInput("");
        return;
      default:
        output = <div className="text-red-400">command not found: {baseCmd}</div>;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInput("");
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-24 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-[100] md:w-[600px] h-[400px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono text-sm"
        >
          {/* Header */}
          <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between select-none">
            <div className="flex items-center gap-2 text-white/50">
              <Terminal className="w-4 h-4" />
              <span>guest@soorya-macbook:~</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div 
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, i) => (
              <div key={i} className="mb-4">
                <div className="flex gap-2 text-gray-300">
                  <span className="text-emerald-500 font-bold">➜</span>
                  <span className="text-cyan-400 font-bold">~</span>
                  <span>{entry.command}</span>
                </div>
                <div className="mt-1">{entry.output}</div>
              </div>
            ))}
            
            <form onSubmit={handleInputSubmit} className="flex gap-2 text-gray-300">
              <span className="text-emerald-500 font-bold">➜</span>
              <span className="text-cyan-400 font-bold">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none text-gray-300 caret-emerald-500"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
