"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Check,
  Copy,
  Mail,
  Code2,
  Activity,
  Layers,
  Zap,
} from "lucide-react";
import { projects } from "@/data/projects";
import Magnetic from "@/components/ui/Magnetic";

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const skillClusters = [
  {
    number: "01",
    category: "AI & Autonomous Agents",
    icon: Sparkles,
    description: "Architecting autonomous systems, fine-tuned neural models, and real-time vision pipelines.",
    colSpan: "md:col-span-2",
    bgColor: "bg-[#E6DFD3]/60", // Warm Sand
  },
  {
    number: "02",
    category: "Spatial & MLX",
    icon: Cpu,
    description: "Zero-latency on-device intelligence taking full advantage of unified memory and neural engines.",
    colSpan: "md:col-span-1",
    bgColor: "bg-[#D6C5C3]/60", // Dusty Rose
  },
  {
    number: "03",
    category: "Cloud Infra",
    icon: Globe,
    description: "Resilient serverless compute, event streams, and edge clouds.",
    colSpan: "md:col-span-1",
    bgColor: "bg-[#B4C5D4]/60", // Powder Blue
  },
  {
    number: "04",
    category: "Core Systems",
    icon: Code2,
    description: "Production-grade systems programming from embedded IoT microcontrollers to full-stack web.",
    colSpan: "md:col-span-2",
    bgColor: "bg-[#B2BFAF]/60", // Sage Green
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const springReveal: Variants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const maskReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { type: "spring", stiffness: 300, damping: 28 },
  },
};

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sooryasendilnath@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <main className="flex-1 flex flex-col items-center w-full min-h-screen relative pt-32 sm:pt-40 pb-24 overflow-x-hidden selection:bg-[#B2BFAF] selection:text-[#2C2928]">
      
      {/* 1. HERO SECTION: Massive Typography & Magnetic Interactions */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-20 pt-4 pb-24">
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Magnetic>
            <motion.div
              variants={springReveal}
              className="w-16 h-16 rounded-full overflow-hidden bg-white border border-[#2C2928]/10 flex items-center justify-center p-1.5 shadow-sm"
            >
              <Image
                src="/images/calligraphy-logo.jpg"
                alt="Soorya Calligraphic Monogram"
                width={64}
                height={64}
                className="w-full h-full object-cover mix-blend-multiply"
                priority
              />
            </motion.div>
          </Magnetic>
          
          <Magnetic>
            <motion.div
              variants={springReveal}
              className="bg-white border border-[#2C2928]/10 shadow-sm px-5 py-2.5 rounded-full flex items-center gap-3 cursor-default"
            >
              <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B2BFAF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B2BFAF]"></span>
              </div>
              <span className="text-xs font-mono font-medium tracking-wide text-[#7A7571]">
                <span className="font-bold text-[#2C2928]">Status:</span> Open for Fall 2025
              </span>
            </motion.div>
          </Magnetic>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Masked text reveals */}
          <div className="overflow-hidden pb-2">
            <motion.h1 
              variants={maskReveal}
              className="text-5xl sm:text-7xl md:text-[5.5rem] font-serif text-[#2C2928] tracking-tight leading-[0.95] mb-2"
            >
              Building <span className="italic pr-2 text-[#7A7571]">Intelligent</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-6">
            <motion.h1 
              variants={maskReveal}
              className="text-5xl sm:text-7xl md:text-[5.5rem] font-serif text-[#2C2928] tracking-tight leading-[0.95]"
            >
              Systems & Interfaces.
            </motion.h1>
          </div>
          
          <motion.p 
            variants={springReveal}
            className="text-lg sm:text-xl text-[#7A7571] font-medium max-w-2xl leading-relaxed mb-10 mt-4"
          >
            Architecting high-performance <strong className="text-[#2C2928]">on-device AI</strong>, 
            immersive <strong className="text-[#2C2928]">spatial interfaces</strong>, 
            and resilient <strong className="text-[#2C2928]">distributed infrastructure</strong>.
          </motion.p>
          
          <motion.div variants={springReveal} className="flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link href="/projects" className="bg-[#2C2928] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#1A1817] transition-all flex items-center gap-2 shadow-xl shadow-[#2C2928]/10 active:scale-95">
                Explore Systems <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <button
                onClick={handleCopyEmail}
                className="bg-white border border-[#2C2928]/10 text-[#5A5755] px-8 py-4 rounded-full text-sm font-bold hover:bg-[#FDFCF8] hover:text-[#2C2928] transition-all flex items-center gap-2 shadow-sm active:scale-95 group"
              >
                {copied ? <Check className="w-4 h-4 text-[#B2BFAF]" /> : <Copy className="w-4 h-4 text-[#A39E99] group-hover:text-[#2C2928] transition-colors" />}
                {copied ? "Copied!" : "sooryasendilnath@gmail.com"}
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. TELEMETRY: Asymmetrical Bento Grid */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-32">
        <motion.div 
          style={{ y: yParallax }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { label: "Engineering XP", value: "3+ Yrs", icon: Activity, col: "col-span-2 md:col-span-1" },
            { label: "Systems Built", value: "12+", icon: Layers, col: "col-span-2 md:col-span-1" },
            { label: "Availability", value: "Fall '25", icon: Zap, col: "col-span-2 md:col-span-1" },
            { label: "Location", value: "Chennai", icon: Globe, col: "col-span-2 md:col-span-1" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={springReveal}
              custom={i}
              className={`bento-card bg-white border border-[#2C2928]/5 p-6 flex flex-col justify-between gap-4 ${stat.col} min-h-[160px]`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F5F3EC] flex items-center justify-center border border-[#2C2928]/5">
                <stat.icon className="w-5 h-5 text-[#2C2928]" />
              </div>
              <div>
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-[#A39E99] mb-1">{stat.label}</p>
                <p className="text-3xl font-serif text-[#2C2928]">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. CAPABILITIES: Bento Boxes */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 mb-12"
        >
          <span className="text-sm font-mono font-bold tracking-widest text-[#A39E99] uppercase">Architecture & Stack</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2928] tracking-tight">Core Competencies.</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {skillClusters.map((cluster, idx) => (
            <motion.div
              key={cluster.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={springReveal}
              custom={idx}
              className={`bento-card border border-[#2C2928]/5 p-8 md:p-10 flex flex-col h-full ${cluster.colSpan} ${cluster.bgColor} relative overflow-hidden group`}
            >
              <div className="absolute -right-10 -top-10 text-[#2C2928]/5 group-hover:text-[#2C2928]/10 transition-colors duration-500 transform rotate-12 group-hover:rotate-0 group-hover:scale-110">
                <cluster.icon className="w-64 h-64" />
              </div>

              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full bg-white/80 shadow-sm border border-[#2C2928]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <cluster.icon className="w-6 h-6 text-[#2C2928]" />
                </div>
                <span className="text-sm font-mono font-bold text-[#5A5755]/50">/{cluster.number}</span>
              </div>
              <h3 className="relative z-10 text-2xl md:text-3xl font-serif text-[#2C2928] tracking-tight mb-3">{cluster.category}</h3>
              <p className="relative z-10 text-base text-[#5A5755] font-medium leading-relaxed mb-8 max-w-md">{cluster.description}</p>
              
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SYSTEMS GALLERY: Interactive Hover Rows */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 mb-12"
        >
          <span className="text-sm font-mono font-bold tracking-widest text-[#A39E99] uppercase">Selected Works</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2928] tracking-tight">Engineered Systems.</h2>
        </motion.div>

        <div className="w-full flex flex-col border-t border-[#2C2928]/10">
          {projects.slice(0, 5).map((project, idx) => (
            <Link href={`/projects#${project.slug}`} key={project.title}>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={springReveal}
                custom={idx}
                whileHover="hover"
                className="group border-b border-[#2C2928]/10 py-10 md:py-16 px-6 relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between"
              >
                {/* Background color slide on hover (Deep Forest/Sage Black) */}
                <motion.div 
                  variants={{ hover: { top: 0 } }} 
                  initial={{ top: "100%" }} 
                  className="absolute inset-0 bg-[#2F3E3B] -z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                />
                
                {/* Marquee Text Background (visible on hover) */}
                <div className="absolute inset-0 flex items-center overflow-hidden opacity-0 group-hover:opacity-10 pointer-events-none z-0">
                   <motion.div 
                     animate={{ x: ["0%", "-50%"] }} 
                     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                     className="whitespace-nowrap text-[8rem] font-serif font-bold text-[#E6DFD3] uppercase tracking-tighter"
                   >
                     {project.category.join(" — ")} — {project.category.join(" — ")}
                   </motion.div>
                </div>
                
                <div className="flex flex-col z-10 max-w-3xl">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.category.slice(0, 3).map((cat) => (
                      <span key={cat} className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-widest uppercase rounded-full bg-white/50 group-hover:bg-white/10 text-[#5A5755] group-hover:text-[#E6DFD3] border border-[#2C2928]/5 transition-colors duration-500">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-serif text-[#2C2928] group-hover:text-white transition-colors duration-500 tracking-tight leading-none mb-4">{project.title}</h3>
                  <p className="text-lg text-[#7A7571] group-hover:text-[#B2BFAF] max-w-xl transition-colors duration-500">{project.shortDescription}</p>
                </div>
                
                <div className="z-10 flex items-center gap-4 mt-8 lg:mt-0 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-8 group-hover:translate-x-0">
                  <span className="text-white font-mono font-bold uppercase tracking-widest text-xs hidden md:block">View System</span>
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-2xl">
                    <ArrowRight className="w-6 h-6 text-[#2F3E3B]" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Magnetic>
            <Link href="/projects" className="bg-white border border-[#2C2928]/10 text-[#2C2928] px-10 py-5 rounded-full text-sm font-bold hover:bg-[#F5F3EC] transition-all flex items-center gap-3 shadow-sm active:scale-95 group">
              View All 12 Systems
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>
        </motion.div>
      </section>

      {/* 5. CONTACT & CALLIGRAPHY: Massive Bento Box */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 pb-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={springReveal}
          className="bento-card border border-[#2C2928]/5 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative bg-[#E6DFD3]/30"
        >
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[80px] pointer-events-none opacity-60" />
          
          <div className="flex flex-col gap-8 max-w-2xl relative z-10 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-serif text-[#2C2928] tracking-tight leading-[0.95]">
              Ready to architect the future?
            </h2>
            <p className="text-xl text-[#7A7571] font-medium">
              Available for full-time systems engineering, AI, and spatial computing roles starting Fall 2025.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
              <Magnetic>
                <a href="mailto:sooryasendilnath@gmail.com" className="bg-[#2C2928] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#1A1817] transition-all flex items-center gap-2 shadow-xl active:scale-95">
                  <Mail className="w-4 h-4" /> Start Transmission
                </a>
              </Magnetic>
              <Magnetic>
                <Link href="https://linkedin.com/in/soorya-sendilnath" target="_blank" className="w-14 h-14 rounded-full bg-white border border-[#2C2928]/10 shadow-sm flex items-center justify-center hover:scale-110 active:scale-95 text-[#2C2928] transition-all">
                  <LinkedinIcon className="w-5 h-5" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="https://github.com/Sooryaingithub" target="_blank" className="w-14 h-14 rounded-full bg-white border border-[#2C2928]/10 shadow-sm flex items-center justify-center hover:scale-110 active:scale-95 text-[#2C2928] transition-all">
                  <GithubIcon className="w-5 h-5" />
                </Link>
              </Magnetic>
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-6 shrink-0">
            <Magnetic>
              <div className="w-64 md:w-80 h-auto bg-white border border-[#2C2928]/10 p-4 rounded-3xl shadow-sm transform rotate-[-3deg] hover:rotate-1 transition-all duration-500">
                <Image
                  src="/images/calligraphy-signature.jpg"
                  alt="Soorya Calligraphic Signature"
                  width={400}
                  height={200}
                  className="w-full h-auto mix-blend-multiply opacity-90"
                />
              </div>
            </Magnetic>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#2C2928]/5 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#B2BFAF]" />
              <p className="text-[11px] font-mono font-bold tracking-widest text-[#7A7571] uppercase">Authentic Signature</p>
            </div>
          </div>
        </motion.div>
      </section>
      
    </main>
  );
}
