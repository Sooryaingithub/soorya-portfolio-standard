"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, ArrowRight, User, Briefcase, Zap, Calendar } from "lucide-react";

const actions = [
  { id: "home", title: "Home", href: "/", icon: <Terminal className="w-4 h-4" /> },
  { id: "projects", title: "All Projects", href: "/projects", icon: <Briefcase className="w-4 h-4" /> },
  { id: "experiences", title: "Engineering Experiences", href: "/lab", icon: <Zap className="w-4 h-4" /> },
  { id: "about", title: "About Me", href: "/about", icon: <User className="w-4 h-4" /> },
  { id: "skills", title: "Primary Skills", href: "/skills", icon: <Terminal className="w-4 h-4" /> },
  { id: "timeline", title: "Timeline", href: "/timeline", icon: <Calendar className="w-4 h-4" /> },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filtered = actions.filter((a) => a.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-[20vh] sm:p-6 sm:pt-[20vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl flex flex-col"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg"
              />
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 text-xs font-mono text-muted-foreground bg-white/5 rounded border border-white/10">ESC</kbd>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-none">
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  No results found for "{query}"
                </div>
              ) : (
                <ul className="space-y-1">
                  {filtered.map((action) => (
                    <li key={action.id}>
                      <button
                        onClick={() => {
                          router.push(action.href);
                          setOpen(false);
                          setQuery("");
                        }}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors group text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-muted-foreground group-hover:text-[#00F0FF] transition-colors">
                            {action.icon}
                          </div>
                          <span className="text-foreground/90 font-medium group-hover:text-white transition-colors">
                            {action.title}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-4 py-3 border-t border-white/10 bg-white/5 text-xs text-muted-foreground flex items-center justify-between">
              <span>Use <kbd className="px-1.5 py-0.5 mx-1 font-mono bg-black/40 rounded border border-white/10">↑</kbd><kbd className="px-1.5 py-0.5 mx-1 font-mono bg-black/40 rounded border border-white/10">↓</kbd> to navigate</span>
              <span><kbd className="px-1.5 py-0.5 mx-1 font-mono bg-black/40 rounded border border-white/10">↵</kbd> to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
