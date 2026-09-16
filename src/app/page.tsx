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
  Layers,
  Globe,
  Shield,
  Zap,
  Check,
  Copy,
  Download,
  Mail,
  GraduationCap,
  Award,
  Code2,
  Activity,
  ChevronRight,
} from "lucide-react";
import { projects, Project } from "@/data/projects";

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
    category: "Artificial Intelligence",
    icon: Sparkles,
    description: "Architecting autonomous agents, fine-tuned neural models, and real-time computer vision.",
    skills: ["LLM Engineering", "Agentic Systems", "Prompt Architecture", "Computer Vision", "NLP", "LSTM Time-Series"],
  },
  {
    number: "02",
    category: "Apple Silicon & Spatial",
    icon: Cpu,
    description: "Zero-latency on-device intelligence taking full advantage of unified memory and neural engines.",
    skills: ["SwiftUI", "CoreML", "MLX Silicon", "Vision Framework", "WhisperKit", "Spatial Computing"],
  },
  {
    number: "03",
    category: "Cloud & Distributed Infra",
    icon: Globe,
    description: "Resilient serverless compute, event streaming, data lakes, and self-hosted private clouds.",
    skills: ["Microsoft Azure", "Apache Spark", "Serverless Pipelines", "Linux Systems", "NAS Self-Hosting", "WireGuard Mesh"],
  },
  {
    number: "04",
    category: "Core Languages",
    icon: Code2,
    description: "Production-grade systems programming from embedded IoT microcontrollers to full-stack web.",
    skills: ["Python", "Swift", "TypeScript", "JavaScript", "C++"],
  },
];

const categoryFilters = [
  "All Systems",
  "AI & Machine Learning",
  "Apple & Spatial",
  "Cloud & Infrastructure",
  "Edge & IoT",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All Systems");
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sooryasendilnath@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All Systems") return true;
    if (activeFilter === "AI & Machine Learning") {
      return project.category.some((c) =>
        ["Machine Learning", "AI Education Platform", "Computer Vision", "AI"].includes(c)
      );
    }
    if (activeFilter === "Apple & Spatial") {
      return project.category.some((c) =>
        ["Spatial Computing", "Apple Ecosystem", "Local AI"].includes(c)
      );
    }
    if (activeFilter === "Cloud & Infrastructure") {
      return project.category.some((c) =>
        ["Cloud Engineering", "Infrastructure", "Azure", "Networking"].includes(c)
      );
    }
    if (activeFilter === "Edge & IoT") {
      return project.category.some((c) =>
        ["IoT", "Edge Computing", "Hardware"].includes(c)
      );
    }
    return true;
  });

  return (
    <main className="flex-1 flex flex-col items-center w-full min-h-screen relative pt-28 sm:pt-36 pb-24 overflow-x-hidden">
      
      {/* 1. HERO SECTION: Apple Glassmorphism */}
      <section className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-20 pt-4 pb-20">
        
        {/* Calligraphic Seal & Availability Pill */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="w-16 h-16 rounded-full overflow-hidden glass-pill flex items-center justify-center p-1.5 shrink-0"
          >
            <Image
              src="/images/calligraphy-logo.jpg"
              alt="Soorya Calligraphic Monogram"
              width={64}
              height={64}
              className="w-full h-full object-cover mix-blend-screen invert opacity-90"
              priority
            />
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="glass-pill px-4 py-2 rounded-full flex items-center gap-2.5"
          >
            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[13px] font-mono tracking-wide text-zinc-300">
              <span className="font-semibold text-white">Status:</span> Open for Fall 2025 Opportunities
            </span>
          </motion.div>
        </motion.div>

        {/* Dynamic Text Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight leading-[1.05] mb-6 drop-shadow-2xl"
          >
            Building <span className="text-gradient">Intelligent</span> Systems.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-10"
          >
            I architect high-performance <strong className="text-white font-medium">on-device AI</strong>, 
            immersive <strong className="text-white font-medium">spatial interfaces</strong>, 
            and resilient <strong className="text-white font-medium">distributed cloud infrastructure</strong>.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/projects" className="glass-panel text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
              Explore Systems <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={handleCopyEmail}
              className="glass-pill text-zinc-300 px-7 py-3.5 rounded-full text-sm font-medium hover:text-white transition-all flex items-center gap-2 group"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />}
              {copied ? "Copied!" : "sooryasendilnath@gmail.com"}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. TELEMETRY BAR: 3D Tilt Glass Cards */}
      <section className="w-full max-w-5xl mx-auto px-6 md:px-12 relative z-20 mb-32">
        <motion.div 
          style={{ y: yParallax }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Engineering XP", value: "3+ Yrs", icon: Activity },
            { label: "Systems Built", value: "12+", icon: Layers },
            { label: "Availability", value: "Fall '25", icon: Zap },
            { label: "Location", value: "Chennai", icon: Globe },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-5 rounded-3xl flex flex-col gap-3 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                <stat.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-serif text-white">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. CAPABILITIES: Glass Clusters */}
      <section className="w-full max-w-5xl mx-auto px-6 md:px-12 relative z-20 mb-32">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Architecture & Stack</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Core Competencies</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {skillClusters.map((cluster, idx) => (
            <motion.div
              key={cluster.number}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-[2rem] flex flex-col h-full group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
                  <cluster.icon className="w-6 h-6 text-zinc-300 group-hover:text-white" />
                </div>
                <span className="text-sm font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">/{cluster.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">{cluster.category}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{cluster.description}</p>
              
              <div className="mt-auto flex flex-wrap gap-2">
                {cluster.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide bg-white/5 text-zinc-300 border border-white/5 group-hover:border-white/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SYSTEMS GALLERY: Frosted Project Cards */}
      <section className="w-full max-w-5xl mx-auto px-6 md:px-12 relative z-20 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Engineered Systems</h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-wider transition-all border ${
                  activeFilter === filter
                    ? "bg-white text-zinc-950 border-white shadow-lg"
                    : "glass-pill text-zinc-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.slice(0, 4).map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-[2rem] overflow-hidden glass-card"
            >
              <div className="relative w-full h-[280px] bg-black/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center relative">
                  <Terminal className="w-16 h-16 text-white/10 relative z-10 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              </div>
              
              <div className="relative p-7 flex-1 flex flex-col bg-black/40 backdrop-blur-md">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category.slice(0, 2).map((cat) => (
                    <span key={cat} className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase rounded-full border border-white/10 text-zinc-300 bg-white/5">
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-serif text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1 line-clamp-2">{project.shortDescription}</p>
                
                <Link href={`/projects#${project.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-emerald-400 transition-colors mt-auto w-fit">
                  Analyze System <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link href="/projects" className="glass-panel text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2 shadow-xl group">
            View All 12 Systems
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 5. CONTACT & CALLIGRAPHY DOCK */}
      <section className="w-full max-w-5xl mx-auto px-6 md:px-12 relative z-20 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col gap-6 max-w-lg relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              Ready to architect the future?
            </h2>
            <p className="text-lg text-zinc-400 font-light">
              Available for full-time systems engineering, AI, and spatial computing roles starting Fall 2025.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
              <a href="mailto:sooryasendilnath@gmail.com" className="glass-panel text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                <Mail className="w-4 h-4" /> Start Transmission
              </a>
              <Link href="https://linkedin.com/in/soorya-sendilnath" target="_blank" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/Sooryaingithub" target="_blank" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-48 h-auto glass-panel p-3 rounded-2xl transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/calligraphy-signature.jpg"
                alt="Soorya Calligraphic Signature"
                width={300}
                height={150}
                className="w-full h-auto mix-blend-screen invert opacity-90"
              />
            </div>
            <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Authentic Signature</p>
          </div>
        </motion.div>
      </section>
      
    </main>
  );
}
