"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NeuralNodes from "@/components/visuals/NeuralNodes";
import ArcadeBackground from "@/components/visuals/ArcadeBackground";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  // Animation for individual words to simulate reading highlight
  const highlightContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // slower reading pace
        delayChildren: 0.3,
      }
    }
  };

  const highlightWord = {
    hidden: { opacity: 0.2, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" as const } // slower fade
    }
  };

  const renderHighlightedText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <motion.span key={i} variants={highlightWord} className="inline-block mr-[0.25em]">
        {word}
      </motion.span>
    ));
  };

  return (
    <main className="flex-1 flex flex-col justify-center min-h-[100dvh] px-4 pt-24 pb-12 relative overflow-hidden">
      {/* Background glow effects */}
      <NeuralNodes />
      <ArcadeBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto w-full z-10"
      >
        <motion.div variants={itemVariants} className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-[#00F0FF]/30 text-xs font-medium text-[#00F0FF] backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
          </span>
          AI Systems Engineer
        </motion.div>

        {/* Highlighted Heading */}
        <motion.h1
          variants={highlightContainer}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-balance leading-tight text-foreground"
        >
          {renderHighlightedText("Think Local.")} <br className="hidden md:block" />
          <span className="text-foreground/40">{renderHighlightedText("Scale Global.")}</span>
        </motion.h1>

        {/* Highlighted Subtext */}
        <motion.div 
          variants={highlightContainer}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col gap-2"
        >
          <p className="text-xl md:text-3xl font-medium tracking-tight text-foreground/80">
            {renderHighlightedText("Beyond the Cloud.")} <span className="text-foreground/40">{renderHighlightedText("Intelligence. Anywhere.")}</span>
          </p>
        </motion.div>

        {/* Standard fade-in Body Text (Excluded from word-highlight) */}
        <motion.div variants={itemVariants} className="mt-12 max-w-2xl">
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Built where intelligence lives smarter, closer, and faster. Building on-device, 
            privacy-first artificial intelligence across cloud infrastructure, 
            local intelligence, and spatial computing ecosystems.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-4">
          
          {/* View Projects Button with Hover Gold Wave */}
          <div 
            className="relative" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* The expanding screen-filling gradient originating from the button */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] rounded-full pointer-events-none z-[-1]"
              style={{
                background: "radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(138,43,226,0.1) 40%, transparent 70%)"
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />

            <Link href="/projects" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-white px-8 font-medium text-black transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A2BE2] opacity-100"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8A2BE2]"></span>
              </span>
              <span className="mr-2">View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <Link href="/timeline" className="group inline-flex h-12 items-center justify-center rounded-xl bg-foreground/5 px-8 font-medium text-white backdrop-blur-md border border-foreground/10 transition-all hover:bg-foreground/10 hover:scale-[1.02] active:scale-95">
            <Terminal className="w-4 h-4 mr-2 opacity-70" />
            <span>Explore Journey</span>
          </Link>
          
          <a href="/resume.pdf" target="_blank" className="group inline-flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/5 text-white backdrop-blur-md border border-foreground/10 transition-all hover:bg-foreground/10 hover:scale-[1.02] active:scale-95" aria-label="Download Resume">
            <Download className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
