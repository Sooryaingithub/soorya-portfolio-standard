"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const allCategories = Array.from(new Set(projects.flatMap(p => p.category)));

function getTheme(year: number) {
  if (year === 2026) return { primary: "#8A2BE2", secondary: "#00F0FF" };
  if (year === 2025) return { primary: "#10B981", secondary: "#06B6D4" };
  if (year === 2024) return { primary: "#F59E0B", secondary: "#E11D48" };
  return { primary: "#8A2BE2", secondary: "#00F0FF" };
}

function ProjectCard({ project }: { project: Project }) {
  const { primary } = getTheme(project.year);
  
  return (
    <Link 
      href={`/project/${project.slug}`} 
      className="block group glass-panel p-6 h-full flex flex-col hover:bg-foreground/10 transition-colors duration-300 arcade-scanlines active:scale-95 hover:shadow-[var(--hover-shadow)]"
      style={{ '--hover-shadow': `inset 0 0 20px ${primary}40` } as React.CSSProperties}
    >
      <div className="flex justify-between items-start mb-4 relative z-20">
        <h3 className="text-xl font-semibold tracking-tight transition-all duration-300 group-hover:glitch-hover">{project.title}</h3>
        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-foreground" />
      </div>
      <p className="text-sm text-muted-foreground flex-1 mb-6">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        <span 
          className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded border"
          style={{ backgroundColor: `${primary}1A`, color: primary, borderColor: `${primary}33` }}
        >
          {project.status}
        </span>
        <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded bg-white/5 text-white/60 border border-white/10">
          {project.year}
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter 
    ? projects.filter(p => p.category.includes(activeFilter))
    : projects;

  return (
    <main className="flex-1 flex flex-col min-h-[100dvh] px-4 pt-32 pb-24 relative max-w-7xl mx-auto w-full overflow-x-clip">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#8A2BE2]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00F0FF]/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 relative z-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
            Projects Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            An interactive directory of systems, architectures, and platforms built across cloud, edge, and spatial ecosystems.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-4 scrollbar-hide relative z-20">
        <button 
          onClick={() => setActiveFilter(null)}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeFilter === null ? 'bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/40 shadow-[0_0_12px_rgba(0,240,255,0.3)]' : 'bg-foreground/5 text-foreground/60 border-foreground/10 hover:bg-foreground/10'}`}
        >
          All Domains
        </button>
        {allCategories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveFilter(cat === activeFilter ? null : cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeFilter === cat ? 'bg-[#8A2BE2]/10 text-[#8A2BE2] border-[#8A2BE2]/40 shadow-[0_0_12px_rgba(138,43,226,0.3)]' : 'bg-foreground/5 text-foreground/60 border-foreground/10 hover:bg-foreground/10'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* List Fallback / Alternative View */}
      <div className="mt-8 relative z-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium tracking-tight">Index View</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full border border-foreground/10">
            <Filter className="w-4 h-4" />
            <span>{filteredProjects.length} Projects</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
