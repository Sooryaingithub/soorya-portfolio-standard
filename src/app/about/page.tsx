"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PixieDust = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 50 }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const colors = ['#ffffff', '#00f0ff', '#ff00ff', '#8b5cf6'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              boxShadow: `0 0 ${size * 4}px ${color}`
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0
            }}
            animate={{
              y: [null, Math.random() * -300 - 100],
              x: [null, Math.random() * 100 - 50],
              opacity: [0, Math.random() * 0.8 + 0.2, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        );
      })}
    </div>
  );
};

export default function About() {
  const certifications = [
    { title: "Prompt Engineering", issuer: "Vanderbilt University" },
    { title: "OCI Foundations", issuer: "Oracle University" },
    { title: "Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
    { title: "IBM Cloud Core", issuer: "IBM SkillsBuild" },
    { title: "IBM Data Science", issuer: "IBM SkillsBuild" },
  ];

  const strengths = [
    "Proficient in Agentic Software Development and AI Assisted Learning & Deployment.",
    "Quick learner with a strong interest in emerging technologies.",
    "Good understanding of the software development lifecycle.",
    "Strong problem-solving and analytical skills.",
    "Familiar with risk analysis theory.",
    "Deeply involved commitment towards work and technologies."
  ];

  return (
    <main className="flex-1 flex flex-col items-center min-h-[100dvh] px-4 pt-32 pb-24 relative overflow-hidden">
      <PixieDust />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 border-b border-white/10 pb-12"
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent">
            Soorya Sendilnath
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-medium tracking-tight">
            AI Engineer
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Chennai, Tamil Nadu
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="mailto:sooryasendilnath@gmail.com" className="hover:text-primary transition-colors">
              sooryasendilnath@gmail.com
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="https://linkedin.com/in/soorya-s" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8 space-y-6"
          >
            <h3 className="text-sm font-medium tracking-widest uppercase text-foreground/40">Experience</h3>
            <div className="glass-panel p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-3xl font-semibold tracking-tight">AI Engineer</h4>
              <p className="text-lg text-primary font-medium mt-1">IITM Pravartak Innovation Hub</p>
              
              <ul className="mt-8 space-y-4 text-muted-foreground/90 leading-relaxed relative z-10">
                <li className="flex gap-4">
                  <span className="text-primary/60 mt-1">▹</span>
                  <span>Develop, test, and train AI models based on OCR, optimizing for efficiency and performance tailored to current requirements.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary/60 mt-1">▹</span>
                  <span>Integrate company-specific functional requirements into models to enhance overall product experience and precision.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary/60 mt-1">▹</span>
                  <span>Engineer lighter, more efficient running systems for maximum hardware compatibility and faster inference times.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Sidebar: Education & Certs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-4 space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-sm font-medium tracking-widest uppercase text-foreground/40">Education</h3>
              <div className="glass-panel p-6 border-t-2 border-t-primary/50">
                <h4 className="text-xl font-semibold tracking-tight">B.Tech – Computer Science</h4>
                <p className="text-sm text-primary/80 font-medium mt-1">IoT Specialization</p>
                <div className="mt-4 pt-4 border-t border-white/5 space-y-1 text-sm text-muted-foreground">
                  <p>SRM University, Chennai</p>
                  <p className="text-foreground/80 font-medium">GPA: 8.5/10</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-medium tracking-widest uppercase text-foreground/40">Certifications</h3>
              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="glass-panel p-4 flex flex-col hover:bg-white/5 transition-colors">
                    <span className="font-medium text-sm text-foreground/90">{cert.title}</span>
                    <span className="text-xs text-muted-foreground mt-1">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-12 space-y-6 mt-8"
          >
            <h3 className="text-sm font-medium tracking-widest uppercase text-foreground/40">Strengths & Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {strengths.map((strength, i) => (
                <div key={i} className="glass-panel p-6 flex items-start gap-4 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">
                    {strength}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
