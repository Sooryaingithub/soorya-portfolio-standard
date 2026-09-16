"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
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
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 inset-x-0 mx-auto z-50 flex flex-col items-center px-4 max-w-5xl w-full pointer-events-none"
    >
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto glass-pill px-3.5 py-2.5 rounded-full flex items-center justify-between gap-2 sm:gap-6 w-full max-w-4xl transition-all duration-500"
      >
        {/* Calligraphic Monogram Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 px-2 py-1 group transition-transform hover:scale-95 active:scale-90"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white border border-[#2C2928]/10 flex items-center justify-center p-0.5 shadow-sm group-hover:border-[#2C2928]/20 transition-colors shrink-0">
            <Image
              src="/images/calligraphy-logo.jpg"
              alt="Soorya Calligraphic Monogram"
              width={32}
              height={32}
              className="w-full h-full object-cover mix-blend-multiply"
              priority
            />
          </div>
          <span className="hidden sm:inline text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#2C2928] group-hover:text-[#7A7571] transition-colors">
            SOORYA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1.5">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-white"
                    : "text-[#7A7571] hover:text-[#2C2928]"
                }`}
              >
                {isActive ? (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-[#2C2928] -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                ) : (
                  <div className="absolute inset-0 rounded-full bg-[#2C2928]/5 opacity-0 hover:opacity-100 -z-10 transition-opacity duration-300" />
                )}
                <span className="relative z-10">{link.label}</span>
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
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono font-medium text-[#7A7571] hover:text-[#2C2928] bg-white/50 hover:bg-white rounded-full border border-[#2C2928]/5 hover:border-[#2C2928]/10 shadow-sm transition-all"
          >
            <Command className="w-3.5 h-3.5" />
            <span>K</span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#7A7571] hover:text-[#2C2928] rounded-full bg-white active:scale-95 transition-all border border-[#2C2928]/5 shadow-sm"
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
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="pointer-events-auto md:hidden w-full max-w-sm mt-3 p-4 rounded-3xl glass-panel flex flex-col gap-1 shadow-2xl"
          >
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-3 text-sm font-semibold rounded-2xl transition-all ${
                    isActive
                      ? "bg-[#2C2928] text-white shadow-md scale-[0.98]"
                      : "text-[#7A7571] hover:text-[#2C2928] hover:bg-[#2C2928]/5 active:scale-95"
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
