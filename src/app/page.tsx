"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

// High-precision custom SVG brand icons (Zero dependency on external icon library changes)
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
    glow: "rgba(0, 240, 255, 0.15)",
    border: "border-cyan-500/30",
    description: "Architecting autonomous agents, fine-tuned neural models, and real-time computer vision.",
    skills: ["LLM Engineering", "Agentic Systems", "Prompt Architecture", "Computer Vision", "NLP", "LSTM Time-Series"],
  },
  {
    number: "02",
    category: "Apple Silicon & Spatial",
    icon: Cpu,
    glow: "rgba(138, 43, 226, 0.15)",
    border: "border-purple-500/30",
    description: "Zero-latency on-device intelligence taking full advantage of unified memory and neural engines.",
    skills: ["SwiftUI", "CoreML", "MLX Silicon", "Vision Framework", "WhisperKit", "Spatial Computing"],
  },
  {
    number: "03",
    category: "Cloud & Distributed Infra",
    icon: Globe,
    glow: "rgba(37, 99, 235, 0.15)",
    border: "border-blue-500/30",
    description: "Resilient serverless compute, event streaming, data lakes, and self-hosted private clouds.",
    skills: ["Microsoft Azure", "Apache Spark", "Serverless Pipelines", "Linux Systems", "NAS Self-Hosting", "WireGuard Mesh"],
  },
  {
    number: "04",
    category: "Core Languages",
    icon: Code2,
    glow: "rgba(16, 185, 129, 0.15)",
    border: "border-emerald-500/30",
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

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All Systems");
  const [copied, setCopied] = useState(false);

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
      
      {/* 1. HERO SECTION: Bézier Curve Layout + Apple Staging */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-20 pt-4 pb-20">
        
        {/* Availability Pill (Award-Winning Trust Indicator) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full award-pill text-[11px] font-mono tracking-widest text-zinc-300 mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-zinc-200">AVAILABLE FOR AI SYSTEMS &amp; SPATIAL COMPUTING</span>
        </motion.div>

        {/* Monumental Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white leading-[1.05] max-w-5xl text-balance mb-8"
        >
          Architecting{" "}
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300">
            Spatial Intelligence
          </span>{" "}
          &amp; Resilient Cloud Infrastructure.
        </motion.h1>

        {/* Rigorous Verified Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-400 max-w-3xl leading-relaxed font-light mb-10 text-balance"
        >
          I am <strong className="text-white font-medium">Soorya Sendilnath</strong>, an AI Systems Engineer from Chennai, India (B.Tech CSE with IoT Specialization from SRM IST). I build high-throughput on-device LLMs, spatial vision interfaces, and distributed edge pipelines designed for extreme data privacy and speed.
        </motion.p>

        {/* Action Suite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-lg"
        >
          <a
            href="#projects"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-100 transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-xl shadow-cyan-500/10"
          >
            <span>Explore 12 Systems</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full award-card text-zinc-200 font-medium text-sm hover:text-white transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Connect Directly</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-3.5 rounded-full award-card text-zinc-300 hover:text-white transition-all hover:scale-105 active:scale-95"
            title="Download Verified Resume (PDF)"
          >
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Cadence-Inspired Telemetry Bar (High Information Density) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-16 pt-10 border-t border-white/5"
        >
          <div className="p-5 rounded-2xl award-card text-left">
            <div className="text-3xl sm:text-4xl font-serif font-semibold text-cyan-400">12</div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1.5">
              Production &amp; Research Systems
            </div>
          </div>

          <div className="p-5 rounded-2xl award-card text-left">
            <div className="text-3xl sm:text-4xl font-serif font-semibold text-purple-400">86.6%</div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1.5">
              Azure Vision mAP Compliance
            </div>
          </div>

          <div className="p-5 rounded-2xl award-card text-left">
            <div className="text-3xl sm:text-4xl font-serif font-semibold text-sky-400">&lt;10ms</div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1.5">
              5G URLLC Edge Latency
            </div>
          </div>

          <div className="p-5 rounded-2xl award-card text-left">
            <div className="text-3xl sm:text-4xl font-serif font-semibold text-emerald-400">2x</div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1.5">
              Verified IBM Certifications
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. FLAGSHIP CASE STUDIES: Spotify Wrapped & LandEarly Interactive Storytelling */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2">
              Featured Breakthroughs
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Flagship Engineering Highlights
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light">
            Selected case studies exploring local Apple Silicon acceleration, autonomous agent pipelines, and real-time computer vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Flagship 1: JarvisGemma & WhisperKit (Spatial Computing) */}
          <div className="md:col-span-2 rounded-3xl award-card p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-cyan-500/20 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  ON-DEVICE SPATIAL AI
                </span>
                <span className="text-xs font-mono text-zinc-400">2026 Prototype</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-serif text-white mb-3">
                JarvisGemma &amp; WhisperKit Engine
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-light mb-6">
                Zero-latency spatial assistant taking full advantage of unified memory and neural engines on Apple Silicon. Integrates CoreML, SwiftUI, and Apple MLX to enable private, real-time sensory cognition and continuous voice intelligence without cloud dependence.
              </p>

              {/* Metrics Pill Grid */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mb-6">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-mono text-cyan-400 font-semibold">35 t/s</div>
                  <div className="text-[10px] text-zinc-500 font-mono">Generation Speed</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-mono text-purple-400 font-semibold">0ms</div>
                  <div className="text-[10px] text-zinc-500 font-mono">Cloud Overhead</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-mono text-emerald-400 font-semibold">100%</div>
                  <div className="text-[10px] text-zinc-500 font-mono">On-Device Privacy</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5">SwiftUI</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">CoreML</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">MLX</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">WhisperKit</span>
              </div>
              <Link
                href="/project/jarvisgemma"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Technical Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Flagship 2: SkillTree Autonomous EdTech Platform */}
          <div className="rounded-3xl award-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10 group-hover:bg-purple-500/20 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  AGENTIC AI PLATFORM
                </span>
                <span className="text-xs font-mono text-zinc-400">2026</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
                SkillTree Engine
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
                Adaptive learning ecosystem running autonomous agents that dynamically curate custom student pathways from real-time comprehension telemetry.
              </p>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-6 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-zinc-400">
                  <span>Vector Search:</span>
                  <span className="text-zinc-200">&lt;15ms</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Token Inference:</span>
                  <span className="text-zinc-200">Local Neural Engine</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">Autonomous Agent Suite</span>
              <Link
                href="/project/skilltree"
                className="inline-flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300"
              >
                <span>Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Flagship 3: Weather Analytics Distributed Engine */}
          <div className="rounded-3xl award-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-10 -mb-10 group-hover:bg-blue-500/20 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  DISTRIBUTED CLOUD ML
                </span>
                <span className="text-xs font-mono text-zinc-400">2025</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
                Weather Analytics
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
                Serverless parallel telemetry ingestion pipeline combining Apache Spark with LSTM recurrent neural networks to generate hyper-localized 7-day weather predictions.
              </p>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-6 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-zinc-400">
                  <span>Forecast Accuracy:</span>
                  <span className="text-emerald-400">+22% vs Regional Baseline</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Anomaly Window:</span>
                  <span className="text-zinc-200">Up to 72h Prior</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">Spark + Cloud Data Lake</span>
              <Link
                href="/project/weather-platform"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300"
              >
                <span>Inspect Pipeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Flagship 4: Azure Road Safety & 5G URLLC (Large) */}
          <div className="md:col-span-2 rounded-3xl award-card p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-emerald-500/20 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  AZURE COMPUTER VISION &amp; 5G
                </span>
                <span className="text-xs font-mono text-zinc-400">Production Research</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-serif text-white mb-3">
                Azure Helmet Compliance &amp; 5G URLLC
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-light mb-6">
                Automated 24/7 video monitoring leveraging Microsoft Azure Cognitive Services and OpenCV to record traffic safety compliance. Attained 86.6% mean Average Precision (mAP) with 80.0% recall, mapped alongside decentralized 5G edge computing studies keeping critical V2X telemetry under 10ms.
              </p>

              {/* Research Contributors */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 max-w-xl text-xs font-mono text-zinc-400 mb-6">
                <span className="text-zinc-200">Supervised by:</span> Ms. Kudiyarasudevi C (Asst. Professor, Dept. of CSE, SRM Institute of Science and Technology)
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5">Azure Custom Vision</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">Azure Video Analyzer</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">5G URLLC</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5">OpenCV</span>
              </div>
              <Link
                href="/project/road-safety-monitoring"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-transform"
              >
                <span>View Model Verification Data</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPLETE SYSTEMS DIRECTORY: Squarespace Foundations & Raven Health Bento */}
      <section id="projects" className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-28 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2">
              Systems Catalog
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              All 12 Engineered Architectures
            </h2>
          </div>

          {/* Interactive Filters */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full award-pill max-w-full">
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-white text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl award-card p-6 flex flex-col justify-between group hover:border-cyan-400/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                    {project.status}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{project.year}</span>
                </div>

                <h3 className="text-xl font-serif text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mb-6">
                  {project.shortDescription}
                </p>

                {/* Direct Key Metrics if available */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] font-mono">
                        <span className="text-zinc-400">{m.label}: </span>
                        <span className="text-cyan-300 font-medium">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/project/${project.slug}`}
                  className="inline-flex items-center justify-between w-full pt-3.5 border-t border-white/5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE CRAFT MATRIX: Process Academy Numbered Chapter Taxonomy */}
      <section id="craft" className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-28 scroll-mt-24">
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2">
            Engineering Rigor
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            The Craft &amp; Domain Taxonomy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillClusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <div
                key={cluster.category}
                className="rounded-3xl award-card p-8 relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="p-3 rounded-2xl border"
                      style={{
                        backgroundColor: cluster.glow,
                        borderColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                        SECTION {cluster.number}
                      </span>
                      <h3 className="text-xl font-serif text-white">{cluster.category}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {cluster.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/5 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. INSTITUTIONAL RIGOR & CREDENTIALS: Verdacert Trust Indicators */}
      <section className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-20 mb-28">
        <div className="rounded-3xl award-card p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Academic Pedigree */}
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Academic Pedigree
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white">
                    SRM Institute of Science &amp; Technology
                  </h3>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
                <div className="text-base font-medium text-white">
                  B.Tech in Computer Science and Engineering
                </div>
                <div className="text-xs font-mono text-cyan-400 font-medium">
                  Specialization in Internet of Things (IoT) · Ramapuram Campus
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pt-2 font-light">
                  Rigorous academic curriculum covering edge compute architecture, sensor integration, real-time operating systems, distributed telemetry processing, and embedded systems programming.
                </p>
              </div>
            </div>

            {/* Verified Certifications */}
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Industry Verification
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white">
                    IBM Professional Certifications
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">IBM Cloud Certification</div>
                    <div className="text-xs text-zinc-400 font-mono mt-0.5">
                      Cloud Native Architecture, Containerization &amp; DevOps
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Verified
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">IBM Data Science Certification</div>
                    <div className="text-xs text-zinc-400 font-mono mt-0.5">
                      Applied Machine Learning, Statistical Modeling &amp; Big Data Pipelines
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE CONTACT DOCK: Trevor Noah Style Tactile Micro-Interactions */}
      <section id="contact" className="w-full max-w-4xl mx-auto px-6 md:px-12 relative z-20 text-center mb-24 scroll-mt-24">
        <div className="rounded-3xl award-card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 mx-auto flex items-center justify-center text-white text-xl font-bold shadow-xl shadow-cyan-500/20 mb-6">
              SS
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">
              Let&apos;s Build Together.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed font-light mb-8">
              Actively open to high-impact opportunities in AI Systems Engineering, Spatial Computing, On-Device Intelligence, and Cloud-Edge Architecture.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href="mailto:sooryasendilnath@gmail.com"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
              >
                <Mail className="w-4 h-4" />
                <span>sooryasendilnath@gmail.com</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full award-card text-zinc-200 hover:text-white text-xs sm:text-sm transition-all hover:scale-105 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Email Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified External Profile Badges */}
            <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/5">
              <a
                href="https://github.com/Sooryaingithub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <span className="w-1 h-1 rounded-full bg-zinc-700" />

              <a
                href="https://www.linkedin.com/in/soorya-sendilnath/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>

              <span className="w-1 h-1 rounded-full bg-zinc-700" />

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CADENCE-INSPIRED TECHNICAL FOOTER */}
      <footer className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          © {new Date().getFullYear()} Soorya Sendilnath · Chennai, Tamil Nadu, India (IST UTC+5:30)
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>All Systems Operational · Built with Next.js 16 &amp; Turbopack</span>
        </div>
      </footer>
    </main>
  );
}
