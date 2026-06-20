"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Command } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Primary Skills" },
  { href: "/timeline", label: "Timeline" },
  { href: "/about", label: "About" },
  { href: "/hobbies", label: "Hobbies" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 inset-x-0 mx-auto z-50 flex justify-center px-4"
    >
      <nav className="glass-panel flex items-center px-4 py-2 gap-2 max-w-2xl w-full justify-between">
        <div className="flex items-center gap-1 sm:gap-2">
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

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5">
            <Command className="w-3 h-3" />
            <span>CMD K</span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
