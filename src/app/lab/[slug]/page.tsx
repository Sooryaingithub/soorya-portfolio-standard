"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ExperiencePage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.labWriteup) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center min-h-[100dvh]">
        <h1 className="text-2xl font-medium">Experience not found</h1>
        <Link href="/lab" className="text-[#00F0FF] mt-4">Back to Experiences</Link>
      </main>
    );
  }

  return (
    <main className="flex-1 min-h-[100dvh] bg-background relative overflow-hidden px-4 pt-24 pb-32">
      <div className="max-w-3xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Link href="/lab" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Experiences
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#00F0FF] mb-6">
            <span>{project.year}</span>
            <span className="text-muted-foreground">•</span>
            <span className="uppercase tracking-widest text-xs text-muted-foreground">{project.status}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-8 leading-tight">
            Building {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-white/10">
            {project.category.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          {project.labWriteup.map((block, index) => {
            if (block.type === "heading") {
              return (
                <motion.h2 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-2xl md:text-3xl font-semibold tracking-tight mt-16 mb-6 text-emerald-400"
                >
                  {block.value}
                </motion.h2>
              );
            }
            if (block.type === "paragraph") {
              return (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-6"
                >
                  {block.value}
                </motion.p>
              );
            }
            if (block.type === "code") {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
                >
                  <div className="px-4 py-2 bg-white/5 text-xs font-mono text-muted-foreground border-b border-white/10 flex justify-between">
                    <span>{block.language}</span>
                  </div>
                  <pre className="p-6 overflow-x-auto text-sm font-mono text-cyan-400 leading-relaxed">
                    <code>{block.value}</code>
                  </pre>
                </motion.div>
              );
            }
            if (block.type === "image") {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="my-12 w-full aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden relative border border-white/10 bg-white/5 shadow-2xl"
                >
                  <Image src={block.value} alt={project.title} fill className="object-contain p-2" />
                </motion.div>
              );
            }
            return null;
          })}
        </div>

        {/* Call to action mapping back to the formal project page */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 pt-12 border-t border-white/10 text-center"
        >
          <p className="text-muted-foreground mb-6">Want the professional executive summary?</p>
          <Link href={`/project/${project.slug}`} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all">
            View Formal Project Page
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
