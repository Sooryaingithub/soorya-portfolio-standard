"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineEvents = [
  {
    year: "2024",
    events: [
      { title: "Road Safety Monitoring", type: "Computer Vision", description: "Real-time vehicle detection and speed analytics using Edge AI." },
      { title: "IoT Pipeline", type: "Data Engineering", description: "Scalable data ingestion and processing for sensor networks." },
      { title: "Edge Computing Research", type: "Infrastructure", description: "Optimizing ML models for low-power edge devices." }
    ]
  },
  {
    year: "2025",
    events: [
      { title: "Weather Analytics Platform", type: "Cloud Engineering", description: "Distributed system for analyzing meteorological patterns." },
      { title: "Cloud Engineering Projects", type: "Infrastructure", description: "Infrastructure as Code and automated deployment pipelines." },
      { title: "Privacy-First Remote Access", type: "Security", description: "Secure VPN alternative using end-to-end encryption." }
    ]
  },
  {
    year: "2026",
    events: [
      { title: "JarvisGemma", type: "Spatial AI", description: "Spatial AI agent for desktop interaction and automation." },
      { title: "Local AI Infrastructure", type: "Local AI", description: "Self-hosted LLMs and vector databases on consumer hardware." },
      { title: "WhisperKit", type: "Speech Intelligence", description: "Optimized speech-to-text integration for macOS and iOS." },
      { title: "NAS Infrastructure", type: "Hardware", description: "Custom-built Network Attached Storage with high-speed caching." },
      { title: "SkillTree", type: "AI Systems", description: "Intelligent platform for tracking and visualizing skill progression." }
    ]
  }
];

function getTheme(year: string) {
  if (year === "2026") return { primary: "#8A2BE2", secondary: "#00F0FF" };
  if (year === "2025") return { primary: "#10B981", secondary: "#06B6D4" };
  if (year === "2024") return { primary: "#F59E0B", secondary: "#E11D48" };
  return { primary: "#8A2BE2", secondary: "#00F0FF" };
}

export default function Timeline() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <main className="bg-background">
      <div className="h-[600vh] relative" ref={targetRef}>
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          <div className="px-4 md:px-12 mb-12 max-w-7xl mx-auto w-full">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
              Engineering Journey
            </h1>
            <p className="text-lg text-muted-foreground">Scroll to explore the timeline.</p>
          </div>

          <motion.div style={{ x }} className="flex gap-12 px-4 md:px-12 pb-24 items-center w-max pr-[50vw]">
            {/* Start point */}
            <div className="flex-none w-24 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>

            {timelineEvents.map((yearBlock, idx) => {
              const { primary } = getTheme(yearBlock.year);
              return (
                <div key={yearBlock.year} className="flex-none flex items-center gap-12">
                  <motion.div 
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0.3, filter: "brightness(0.5) grayscale(50%)" }}
                    whileInView={{ opacity: 1, filter: "brightness(1.1) grayscale(0%)" }}
                    viewport={{ margin: "0px -30% 0px -30%" }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 
                      className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none select-none transition-all duration-500"
                      style={{ 
                        color: "transparent",
                        WebkitTextStroke: `2px ${primary}`,
                        textShadow: `0 0 30px ${primary}80`
                      }}
                    >
                      {yearBlock.year}
                    </h2>
                    <div className="flex gap-4 items-start pt-4">
                      {yearBlock.events.map((event, eIdx) => (
                        <div 
                          key={eIdx}
                          className="glass-panel p-6 w-64 md:w-80 shrink-0 hover:bg-foreground/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--hover-shadow)] group"
                          style={{ '--hover-shadow': `inset 0 0 20px ${primary}40` } as React.CSSProperties}
                        >
                          <p 
                            className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded border inline-block mb-4"
                            style={{ backgroundColor: `${primary}1A`, color: primary, borderColor: `${primary}33` }}
                          >
                            {event.type}
                          </p>
                          <h3 className="text-xl font-medium tracking-tight mb-2">
                            {event.title}
                          </h3>
                          {event.description && (
                            <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                              {event.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Connecting line segment */}
                  <div className="w-24 h-px bg-white/10" />
                </div>
              );
            })}
            
            {/* End point text */}
            <div className="flex-none flex items-center gap-6 ml-12">
              <motion.h2 
                initial={{ opacity: 0.3, filter: "blur(10px) brightness(0.5)", scale: 0.9 }}
                whileInView={{ opacity: 1, filter: "blur(0px) brightness(1.2)", scale: 1 }}
                viewport={{ margin: "0px -30% 0px -30%" }}
                transition={{ duration: 0.8 }}
                className="text-8xl md:text-[10rem] font-bold tracking-tighter leading-none select-none pr-12"
                style={{ 
                  color: "transparent",
                  WebkitTextStroke: `2px #00F0FF`,
                  textShadow: `0 0 40px rgba(0,240,255,0.5)`,
                }}
              >
                Great things are on its way
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
