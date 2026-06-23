"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/lab", label: "Experiences" },
  { href: "/skills", label: "Primary Skills" },
  { href: "/timeline", label: "Timeline" },
  { href: "/about", label: "About" },
  { href: "/hobbies", label: "Hobbies" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-6 inset-x-0 mx-auto z-50 flex flex-col items-center px-4"
    >
      <nav className="glass-panel flex items-center px-4 py-2 gap-2 max-w-2xl w-full justify-between">
        
        {/* Mobile Branding / Title */}
        <div className="md:hidden font-medium text-sm px-2 tracking-wide text-foreground/80">
          Navigation
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Command K */}
        <div className="hidden md:flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5">
            <Command className="w-3 h-3" />
            <span>CMD K</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors rounded-md active:bg-white/5"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden w-full max-w-2xl mt-2 glass-panel flex flex-col p-2 overflow-hidden shadow-2xl"
          >
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
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
