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
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 inset-x-0 mx-auto z-50 flex flex-col items-center px-4 max-w-5xl w-full pointer-events-none"
    >
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto bg-white/85 backdrop-blur-md border border-zinc-200/90 px-3.5 py-2 rounded-full flex items-center justify-between gap-2 sm:gap-6 w-full max-w-4xl shadow-sm transition-all duration-300"
      >
        {/* Calligraphic Monogram Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 px-2 py-1 group transition-transform active:scale-95"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white border border-zinc-200/90 flex items-center justify-center p-0.5 shadow-2xs group-hover:border-zinc-400 transition-colors shrink-0">
            <Image
              src="/images/calligraphy-logo.jpg"
              alt="Soorya Calligraphic Monogram"
              width={32}
              height={32}
              className="w-full h-full object-cover mix-blend-multiply"
              priority
            />
          </div>
          <span className="hidden sm:inline text-xs font-mono font-medium tracking-wider uppercase text-zinc-900 group-hover:text-zinc-600 transition-colors">
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
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill-light"
                    className="absolute inset-0 rounded-full bg-zinc-900 -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
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
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-zinc-500 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200/70 rounded-full border border-zinc-200 transition-colors"
          >
            <Command className="w-3 h-3" />
            <span>K</span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 rounded-full bg-zinc-100 active:scale-95 transition-all"
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
            className="pointer-events-auto md:hidden w-full max-w-sm mt-2 p-3.5 rounded-3xl bg-white/95 backdrop-blur-lg border border-zinc-200 flex flex-col gap-1 shadow-xl"
          >
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-2xl transition-colors ${
                    isActive
                      ? "bg-zinc-900 text-white font-semibold"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
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
