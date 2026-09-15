"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/lab", label: "Experiences" },
  { href: "/skills", label: "Craft & Stack" },
  { href: "/timeline", label: "Timeline" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 inset-x-0 mx-auto z-50 flex flex-col items-center px-4 max-w-5xl w-full pointer-events-none"
    >
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto glass-panel px-4 py-2.5 rounded-full flex items-center justify-between gap-2 sm:gap-6 w-full max-w-4xl shadow-2xl transition-all duration-300"
      >
        {/* Monogram Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 px-2 py-1 group transition-transform active:scale-95"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold tracking-tight shadow-lg shadow-cyan-500/20">
            S
          </div>
          <span className="hidden sm:inline text-xs font-mono font-medium tracking-wider uppercase text-zinc-300 group-hover:text-cyan-400 transition-colors">
            SOORYA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-400/30 -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Controls & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open command palette"
            onClick={() => {
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
              );
            }}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-zinc-400 hover:text-zinc-100 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
          >
            <Command className="w-3 h-3" />
            <span>K</span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-full bg-white/5 active:scale-95 transition-all"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden w-full max-w-sm mt-2 p-4 rounded-3xl glass-panel flex flex-col gap-1 shadow-2xl"
          >
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 text-sm font-medium rounded-2xl transition-colors ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 font-semibold"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
