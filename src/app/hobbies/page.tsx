"use client";

import { motion } from "framer-motion";
import { Camera, Flower2, AudioLines } from "lucide-react";
import Image from "next/image";

const hobbies = [
  {
    id: "photography",
    title: "Photography",
    description: "Capturing moments, mastering light, and exploring visual storytelling through the lens.",
    icon: Camera,
    color: "from-blue-500/20 to-blue-500/0",
    iconColor: "text-blue-400"
  },
  {
    id: "pranic-healing",
    title: "Pranic Healing",
    description: "Practicing the ancient art of energy medicine, balancing the chakras and aura for holistic wellness.",
    icon: Flower2,
    color: "from-green-500/20 to-green-500/0",
    iconColor: "text-green-400"
  },
  {
    id: "pro-audio",
    title: "Pro Audio",
    description: "Engineering sound, mastering acoustics, and building immersive auditory experiences.",
    icon: AudioLines,
    color: "from-purple-500/20 to-purple-500/0",
    iconColor: "text-purple-400"
  }
];

const photographyImages = [
  "photography/_DSC7693.jpg",
  "photography/_DSC1141.jpg",
  "photography/_DSC2127.jpg",
  "photography/IMG_4386.JPG",
  "photography/_DSC7843.jpg",
  "photography/IDG_20250923_140257_407.jpg",
  "photography/_DSC9741.ARW.jpg",
  "photography/IMG_4426.JPG",
  "photography/IMG_4963.jpg",
  "photography/_DSC7367.jpg",
  "photography/IMG_4441.heic"
];

export default function HobbiesPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
            Hobbies & Passions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-tight">
            Beyond the code and systems.
          </p>
        </motion.div>

        <div className="space-y-32">
          {hobbies.map((hobby, index) => (
            <motion.section
              key={hobby.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${hobby.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl -z-10`} />
              
              <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 ${hobby.iconColor}`}>
                    <hobby.icon className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                      {hobby.title}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                      {hobby.description}
                    </p>
                  </div>
                </div>
                
                {hobby.id === "photography" ? (
                  <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 w-full space-y-4">
                    {photographyImages.map((src, i) => (
                      <div key={i} className="relative break-inside-avoid w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                        {/* 
                          Use unoptimized for HEIC to prevent Next.js Image Optimization 
                          from throwing a 500 Sharp missing format error 
                        */}
                        <Image 
                          src={`/images/${src}`} 
                          alt="" 
                          width={800}
                          height={1200}
                          unoptimized={src.endsWith('.heic')}
                          className="object-cover w-full h-auto hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-12 h-64 md:h-96 w-full rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-background to-background" />
                      <span className="text-muted-foreground/50 font-mono text-sm relative z-10 uppercase tracking-widest">
                        [ Content Area ]
                      </span>
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </div>

      </div>
    </div>
  );
}
