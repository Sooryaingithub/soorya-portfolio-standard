"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!project) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center min-h-[100dvh]">
        <h1 className="text-2xl font-medium">Project not found</h1>
        <Link href="/projects" className="text-primary mt-4">Back to Projects</Link>
      </main>
    );
  }

  return (
    <main ref={containerRef} className="flex-1 bg-background relative">
      {/* Hero Section */}
      <section className="relative h-[80dvh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background z-10" />
          <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#8A2BE2]/15 blur-[150px] rounded-full z-0" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F0FF]/15 blur-[150px] rounded-full z-0" />
        </motion.div>

        <div className="z-10 text-center px-4 max-w-4xl w-full">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Projects Hub
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-semibold tracking-tighter mb-6 text-balance"
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-3xl font-medium tracking-tight text-foreground/60 text-balance mx-auto max-w-2xl"
          >
            {project.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-20 bg-background pb-32">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Metadata Bar */}
          <div className="glass-panel p-6 md:p-8 flex flex-col md:flex-row gap-8 justify-between -mt-16 mb-24 relative z-30">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-foreground/40 mb-1">Status</p>
              <p className="font-medium">{project.status}</p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-foreground/40 mb-1">Timeline</p>
              <p className="font-medium">{project.year}</p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-foreground/40 mb-1">Complexity</p>
              <p className="font-medium">{project.complexity}</p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-foreground/40 mb-1">Domains</p>
              <div className="flex flex-wrap gap-2">
                {project.category.map(cat => (
                  <span key={cat} className="text-sm">{cat}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Storytelling Content */}
          <div className="space-y-32">
            
            {/* Executive Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Executive Summary</h2>
              {project.content ? (
                <div className="space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">The Problem:</strong> {project.content.overview.problem}
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">The Solution:</strong> {project.content.overview.solution}
                  </p>
                </div>
              ) : (
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                  This project represents a critical junction in building scalable intelligence. By pushing the boundaries of {project.category[0].toLowerCase()} and integrating deeply with {project.category[1]?.toLowerCase() || "modern systems"}, it delivers a seamless, high-performance solution that operates entirely under strict privacy and efficiency constraints.
                </p>
              )}
            </motion.div>

            {/* Features / Capabilities */}
            {project.content?.capabilities && (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">System Capabilities</h2>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  {project.content.capabilities.map((feature, idx) => {
                    const parts = feature.split(': ');
                    return (
                      <li key={idx} className="flex gap-4 p-4 glass-panel rounded-2xl">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>
                          {parts.length > 1 ? (
                            <>
                              <strong className="text-foreground">{parts[0]}:</strong> {parts.slice(1).join(': ')}
                            </>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}

            {/* Dynamic Sections */}
            {project.content?.sections?.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">{section.title}</h2>
                
                {Array.isArray(section.body) ? (
                  <ul className="space-y-4 text-lg text-muted-foreground">
                    {section.body.map((item, idx) => (
                      <li key={idx} className="flex gap-4 p-4 glass-panel rounded-2xl bg-foreground/5 border border-foreground/10">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                    {section.body}
                  </p>
                )}

                {/* Inject Architecture Diagram into the Architecture section */}
                {section.title.includes("Architecture") && (
                  <div className={`grid gap-8 mt-12 ${project.content?.images?.architecture && project.content?.images?.flowchart ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                    {project.content?.images?.architecture && (
                      <div className="w-full aspect-video rounded-3xl bg-foreground/5 border border-foreground/10 flex items-center justify-center overflow-hidden relative group">
                        <div className="relative w-full h-full">
                          <Image src={project.content.images.architecture} alt={`${project.title} Architecture`} fill className="object-contain p-4" unoptimized />
                        </div>
                      </div>
                    )}
                    {project.content?.images?.flowchart && (
                      <div className="w-full aspect-video rounded-3xl bg-foreground/5 border border-foreground/10 flex items-center justify-center overflow-hidden relative group bg-white/5">
                        <div className="relative w-full h-full">
                          <Image src={project.content.images.flowchart} alt={`${project.title} Flowchart`} fill className="object-contain p-4" unoptimized />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Inject Results/Output Images into Validation section */}
                {section.title.includes("Validation") && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {project.content?.images?.results && (
                      <div className="w-full aspect-square rounded-3xl bg-foreground/5 border border-foreground/10 overflow-hidden relative">
                        <Image src={project.content.images.results} alt="Performance Results" fill className="object-contain p-4" unoptimized />
                      </div>
                    )}
                    {project.content?.images?.output && (
                      <div className="w-full aspect-square rounded-3xl bg-foreground/5 border border-foreground/10 overflow-hidden relative">
                        <Image src={project.content.images.output} alt="Model Output" fill className="object-contain p-4" unoptimized />
                      </div>
                    )}
                  </div>
                )}

                {/* Inject Design/UI Images into Expected Designs section */}
                {section.title.includes("Design") && (
                  <div className="grid grid-cols-1 gap-8 mt-12">
                    {project.content?.images?.ui && (
                      <div className="w-full aspect-[16/10] rounded-3xl bg-foreground/5 border border-foreground/10 flex items-center justify-center overflow-hidden relative group">
                        <div className="relative w-full h-full">
                          <Image src={project.content.images.ui} alt={`${project.title} Expected UI`} fill className="object-contain p-4" unoptimized />
                        </div>
                      </div>
                    )}
                    {project.content?.images?.icons && (
                      <div className="w-full aspect-[21/9] rounded-3xl bg-foreground/5 border border-foreground/10 flex items-center justify-center overflow-hidden relative group bg-white/5">
                        <div className="relative w-full h-full">
                          <Image src={project.content.images.icons} alt={`${project.title} App Icons`} fill className="object-contain p-4" unoptimized />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
