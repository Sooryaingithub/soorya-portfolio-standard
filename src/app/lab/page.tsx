"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function LabPage() {
  const labProjects = projects.filter((p) => p.labWriteup && p.labWriteup.length > 0);

  return (
    <main className="flex-1 min-h-[100dvh] bg-background relative overflow-hidden px-4 pt-24 pb-32">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">Engineering Experiences</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            The authentic, humanized stories behind my technical architectures. No corporate speak—just the real struggles, blueprints, and breakthroughs.
          </p>
        </motion.div>

        <div className="space-y-12">
          {labProjects.map((project, index) => (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 md:p-8 rounded-3xl transition-all hover:bg-white/5 border border-transparent hover:border-white/10 group flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Thumbnail (if available) */}
              <div className="w-full md:w-1/3 aspect-video relative rounded-xl overflow-hidden bg-white/5 border border-white/10 flex-shrink-0">
                {project.content?.images?.architecture || project.content?.images?.ui ? (
                   <Image 
                     src={project.content.images.ui || project.content.images.architecture || ""} 
                     alt={project.title} 
                     fill 
                     className="object-cover"
                   />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    <span className="text-4xl font-bold opacity-20">{project.id.charAt(0).toUpperCase()}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <Link href={`/lab/${project.slug}`} className="block">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="text-[#00F0FF]">{project.year}</span>
                    <span>•</span>
                    <span className="uppercase tracking-widest text-xs">{project.status}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 group-hover:text-[#00F0FF] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.category.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
