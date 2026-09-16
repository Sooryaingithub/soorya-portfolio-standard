"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
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
    bgColor: "bg-[#FDFDFD]",
  },
  {
    number: "02",
    category: "Spatial & MLX",
    icon: Cpu,
    description: "Zero-latency on-device intelligence taking full advantage of unified memory and neural engines.",
    colSpan: "md:col-span-1",
    bgColor: "bg-[#F4F4F5]",
  },
  {
    number: "03",
    category: "Cloud Infra",
    icon: Globe,
    description: "Resilient serverless compute, event streams, and edge clouds.",
    colSpan: "md:col-span-1",
    bgColor: "bg-[#F4F4F5]",
  },
  {
    number: "04",
    category: "Core Systems",
    icon: Code2,
    description: "Production-grade systems programming from embedded IoT microcontrollers to full-stack web.",
    colSpan: "md:col-span-2",
    bgColor: "bg-[#FDFDFD]",
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
    <main className="flex-1 flex flex-col items-center w-full min-h-screen relative pt-32 sm:pt-40 pb-24 overflow-x-hidden selection:bg-zinc-900 selection:text-white">
      
      {/* 1. HERO SECTION: Massive Typography & Mask Reveals */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-20 pt-4 pb-24">
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={springReveal}
            whileHover={{ scale: 1.05, rotate: -5 }}
            className="w-16 h-16 rounded-full overflow-hidden bg-white border border-black/10 flex items-center justify-center p-1.5 shadow-md"
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
          
          <motion.div
            variants={springReveal}
            className="bg-white border border-black/5 shadow-sm px-5 py-2.5 rounded-full flex items-center gap-3"
          >
            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-xs font-mono font-medium tracking-wide text-zinc-600">
              <span className="font-bold text-zinc-950">Status:</span> Open for Fall 2025
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Masked text reveals for a high-end feel */}
          <div className="overflow-hidden pb-2">
            <motion.h1 
              variants={maskReveal}
              className="text-5xl sm:text-7xl md:text-[5.5rem] font-serif text-zinc-950 tracking-tight leading-[0.95] mb-2"
            >
              Building <span className="text-gradient italic pr-2">Intelligent</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-6">
            <motion.h1 
              variants={maskReveal}
              className="text-5xl sm:text-7xl md:text-[5.5rem] font-serif text-zinc-950 tracking-tight leading-[0.95]"
            >
              Systems & Interfaces.
            </motion.h1>
          </div>
          
          <motion.p 
            variants={springReveal}
            className="text-lg sm:text-xl text-zinc-500 font-medium max-w-2xl leading-relaxed mb-10 mt-4"
          >
            Architecting high-performance <strong className="text-zinc-900">on-device AI</strong>, 
            immersive <strong className="text-zinc-900">spatial interfaces</strong>, 
            and resilient <strong className="text-zinc-900">distributed infrastructure</strong>.
          </motion.p>
          
          <motion.div variants={springReveal} className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/projects" className="bg-zinc-950 text-white px-8 py-4 rounded-full text-sm font-bold hover:scale-105 hover:bg-zinc-900 transition-all flex items-center gap-2 shadow-xl shadow-zinc-900/20 active:scale-95">
              Explore Systems <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={handleCopyEmail}
              className="bg-white border border-black/5 text-zinc-700 px-8 py-4 rounded-full text-sm font-bold hover:bg-zinc-50 hover:text-zinc-950 hover:scale-105 transition-all flex items-center gap-2 shadow-sm active:scale-95 group"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />}
              {copied ? "Copied!" : "sooryasendilnath@gmail.com"}
            </button>
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
              className={`bento-card p-6 flex flex-col justify-between gap-4 ${stat.col} min-h-[160px]`}
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100">
                <stat.icon className="w-5 h-5 text-zinc-900" />
              </div>
              <div>
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-zinc-400 mb-1">{stat.label}</p>
                <p className="text-3xl font-serif text-zinc-950">{stat.value}</p>
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
          <span className="text-sm font-mono font-bold tracking-widest text-zinc-400 uppercase">Architecture & Stack</span>
          <h2 className="text-4xl md:text-6xl font-serif text-zinc-950 tracking-tight">Core Competencies.</h2>
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
              whileHover={{ y: -5 }}
              className={`bento-card p-8 md:p-10 flex flex-col h-full ${cluster.colSpan} ${cluster.bgColor} relative overflow-hidden group`}
            >
              <div className="absolute -right-10 -top-10 text-zinc-900/5 group-hover:text-zinc-900/10 transition-colors duration-500 transform rotate-12 group-hover:rotate-0 group-hover:scale-110">
                <cluster.icon className="w-64 h-64" />
              </div>

              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <cluster.icon className="w-6 h-6 text-zinc-950" />
                </div>
                <span className="text-sm font-mono font-bold text-zinc-300">/{cluster.number}</span>
              </div>
              <h3 className="relative z-10 text-2xl md:text-3xl font-serif text-zinc-950 tracking-tight mb-3">{cluster.category}</h3>
              <p className="relative z-10 text-base text-zinc-500 font-medium leading-relaxed mb-8 max-w-md">{cluster.description}</p>
              
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SYSTEMS GALLERY: Minimal Brutalist Showcase */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 mb-12"
        >
          <span className="text-sm font-mono font-bold tracking-widest text-zinc-400 uppercase">Selected Works</span>
          <h2 className="text-4xl md:text-6xl font-serif text-zinc-950 tracking-tight">Engineered Systems.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.slice(0, 4).map((project, idx) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={springReveal}
              custom={idx}
              className="group flex flex-col bento-card p-2"
            >
              <div className="relative w-full h-[320px] bg-zinc-100 rounded-[1.5rem] overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center relative">
                  <Terminal className="w-24 h-24 text-zinc-900/5 relative z-10 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 ease-out" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6 pt-2 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.category.slice(0, 2).map((cat) => (
                    <span key={cat} className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-widest uppercase rounded-full bg-zinc-100 text-zinc-600">
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-serif text-zinc-950 tracking-tight mb-3 group-hover:text-zinc-600 transition-colors">{project.title}</h3>
                <p className="text-base text-zinc-500 font-medium leading-relaxed mb-8 flex-1">{project.shortDescription}</p>
                
                <Link href={`/projects#${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-zinc-600 transition-colors mt-auto w-fit group/link">
                  <span className="group-hover/link:underline underline-offset-4 decoration-2">Analyze System</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link href="/projects" className="bg-white border border-black/5 text-zinc-950 px-10 py-5 rounded-full text-sm font-bold hover:scale-105 hover:bg-zinc-50 hover:shadow-lg transition-all flex items-center gap-3 shadow-sm active:scale-95 group">
            View All 12 Systems
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* 5. CONTACT & CALLIGRAPHY: Massive Bento Box */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 pb-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={springReveal}
          className="bento-card p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative bg-[#F7F7F9]"
        >
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[80px] pointer-events-none opacity-50" />
          
          <div className="flex flex-col gap-8 max-w-2xl relative z-10 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-serif text-zinc-950 tracking-tight leading-[0.95]">
              Ready to architect the future?
            </h2>
            <p className="text-xl text-zinc-500 font-medium">
              Available for full-time systems engineering, AI, and spatial computing roles starting Fall 2025.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
              <a href="mailto:sooryasendilnath@gmail.com" className="bg-zinc-950 text-white px-8 py-4 rounded-full text-sm font-bold hover:scale-105 hover:bg-zinc-900 transition-all flex items-center gap-2 shadow-xl active:scale-95">
                <Mail className="w-4 h-4" /> Start Transmission
              </a>
              <Link href="https://linkedin.com/in/soorya-sendilnath" target="_blank" className="w-14 h-14 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center hover:scale-110 active:scale-95 text-zinc-950 transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/Sooryaingithub" target="_blank" className="w-14 h-14 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center hover:scale-110 active:scale-95 text-zinc-950 transition-all">
                <GithubIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-6 shrink-0">
            <div className="w-64 md:w-80 h-auto bg-white border border-black/5 p-4 rounded-3xl shadow-sm transform rotate-[-3deg] hover:rotate-1 hover:scale-105 transition-all duration-500">
              <Image
                src="/images/calligraphy-signature.jpg"
                alt="Soorya Calligraphic Signature"
                width={400}
                height={200}
                className="w-full h-auto mix-blend-multiply opacity-90"
              />
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-zinc-950" />
              <p className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase">Authentic Signature</p>
            </div>
          </div>
        </motion.div>
      </section>
      
    </main>
  );
}
