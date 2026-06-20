"use client";

import { motion } from "framer-motion";
import { Camera, Flower2, AudioLines } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hobbies = [
  {
    id: "photography",
    title: "Photography",
    description: "Capturing moments, mastering light, and exploring visual storytelling through the lens.",
    icon: Camera,
  },
  {
    id: "pranic-healing",
    title: "Pranic Healing",
    description: "Practicing the ancient art of energy medicine, balancing the chakras and aura for holistic wellness.",
    icon: Flower2,
  },
  {
    id: "pro-audio",
    title: "Pro Audio",
    description: "Engineering sound, mastering acoustics, and building immersive auditory experiences.",
    icon: AudioLines,
  }
];

export default function HobbiesPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf9] text-[#2a2724] selection:bg-[#d4af37]/30">
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-24">
        
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-center md:text-left mb-32"
        >
          <h1 className="text-6xl md:text-8xl font-serif italic tracking-tight text-[#1a1816]">
            Passions & Pursuits.
          </h1>
          <p className="text-xl md:text-2xl text-[#6b655f] font-light tracking-wide max-w-2xl">
            A curated collection of interests outside the digital realm.
          </p>
        </motion.header>

        <div className="space-y-40">
          {hobbies.map((hobby, index) => (
            <motion.section
              key={hobby.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              
              <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                {/* Icon & Title */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex p-4 rounded-full border border-[#d4af37]/30 bg-white shadow-sm text-[#d4af37]">
                    <hobby.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#1a1816]">
                    {hobby.title}
                  </h2>
                  <p className="text-xl text-[#6b655f] leading-relaxed max-w-lg font-light">
                    {hobby.description}
                  </p>
                </div>

                {/* Specific Hobby Content */}
                <div className="flex-1 w-full">
                  {hobby.id === "photography" ? (
                    <div className="flex items-center justify-center md:justify-end">
                      <Link 
                        href="/hobbies/photography" 
                        className="group/btn relative px-10 py-5 bg-[#1a1816] hover:bg-[#2a2724] text-[#fcfbf9] rounded-none transition-all duration-500 flex items-center gap-4 overflow-hidden border border-transparent hover:border-[#d4af37]/50"
                      >
                        <span className="text-sm uppercase tracking-[0.2em] font-medium relative z-10">Step into the Gallery</span>
                        <motion.span 
                          className="relative z-10"
                          animate={{ x: [0, 6, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                          ➔
                        </motion.span>
                      </Link>
                    </div>
                  ) : (
                    <div className="h-64 md:h-80 w-full rounded-sm border border-[#e8e4db] bg-white flex items-center justify-center shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-[#fcfbf9]/50" />
                        <span className="text-[#a8a39a] font-serif italic text-lg relative z-10">
                          Awaiting content...
                        </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Elegant divider */}
              <div className="absolute -bottom-20 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
            </motion.section>
          ))}
        </div>

      </div>
    </main>
  );
}
