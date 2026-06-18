"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

// --- Theming Engine ---
function getTheme(project: Project) {
  const categoryStr = project.category.join(" ").toLowerCase();
  
  let primaryColor = "#8A2BE2"; // Default Violet
  let secondaryColor = "#00F0FF"; // Default Cyan
  
  if (categoryStr.includes("cloud") || categoryStr.includes("infrastructure") || categoryStr.includes("azure")) {
    primaryColor = "#10B981"; // Emerald
    secondaryColor = "#06B6D4"; // Teal
  } else if (categoryStr.includes("edge") || categoryStr.includes("hardware") || categoryStr.includes("iot")) {
    primaryColor = "#F59E0B"; // Amber
    secondaryColor = "#E11D48"; // Rose
  }

  const isBlueprint = project.status === "Research" || project.status === "Prototype";

  return { primaryColor, secondaryColor, isBlueprint };
}

// --- Blueprint Grid Background (for Research/Prototypes) ---
const BlueprintGrid = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
);

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [activeSection, setActiveSection] = useState<string>("hero");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Hack for hydration mismatch with useParams
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (!project) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center min-h-[100dvh]">
        <h1 className="text-2xl font-medium">Project not found</h1>
        <Link href="/projects" className="text-primary mt-4">Back to Projects</Link>
      </main>
    );
  }

  const { primaryColor, secondaryColor, isBlueprint } = getTheme(project);

  // Determine what image to show in the sticky panel based on activeSection
  let activeImage = null;
  if (activeSection === "architecture" && project.content?.images?.architecture) {
    activeImage = project.content.images.architecture;
  } else if (activeSection === "flowchart" && project.content?.images?.flowchart) {
    activeImage = project.content.images.flowchart;
  } else if (activeSection === "results" && project.content?.images?.results) {
    activeImage = project.content.images.results;
  } else if (activeSection === "ui" && project.content?.images?.ui) {
    activeImage = project.content.images.ui;
  } else if (activeSection === "icons" && project.content?.images?.icons) {
    activeImage = project.content.images.icons;
  }

  return (
    <main ref={containerRef} className="flex-1 bg-background relative selection:bg-white/20">
      
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-1000">
        <div 
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] blur-[150px] rounded-full opacity-20"
          style={{ backgroundColor: primaryColor }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full opacity-20"
          style={{ backgroundColor: secondaryColor }}
        />
        {isBlueprint && <BlueprintGrid />}
      </div>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden z-10">
        <motion.div style={{ y: y1, opacity: opacity1 }} className="z-10 text-center px-4 max-w-5xl w-full">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Projects Hub
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-balance drop-shadow-2xl">
              {project.title}
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <p className="text-xl md:text-3xl font-medium tracking-tight text-foreground/80 text-balance mx-auto max-w-3xl mb-8">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border" style={{ borderColor: `${primaryColor}40`, color: primaryColor, backgroundColor: `${primaryColor}10` }}>
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border bg-foreground/5 border-foreground/10 text-foreground/60">
                {project.year}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border bg-foreground/5 border-foreground/10 text-foreground/60">
                {project.complexity} Complexity
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: opacity1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </section>

      {/* Scrollytelling Split Screen */}
      <section className="relative z-20 bg-background/50 backdrop-blur-3xl border-t border-white/5">
        <div className="max-w-[100rem] mx-auto px-4 md:px-8 xl:px-16 flex flex-col lg:flex-row relative">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 py-32 space-y-[40vh] pb-[40vh]">
            
            {/* Executive Summary */}
            <motion.div 
              onViewportEnter={() => setActiveSection("summary")}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Executive Summary</h2>
              {project.content ? (
                <div className="space-y-8">
                  <div className="glass-panel p-8">
                    <p className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground/50">The Problem</p>
                    <p className="text-xl leading-relaxed text-foreground/80">{project.content.overview.problem}</p>
                  </div>
                  <div className="glass-panel p-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})` }} />
                    <p className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground/50 relative z-10">The Solution</p>
                    <p className="text-xl leading-relaxed text-foreground/90 relative z-10 font-medium">{project.content.overview.solution}</p>
                  </div>
                </div>
              ) : (
                <p className="text-xl leading-relaxed text-muted-foreground">
                  This project represents a critical junction in building scalable intelligence. By pushing the boundaries of {project.category[0].toLowerCase()} and integrating deeply with {project.category[1]?.toLowerCase() || "modern systems"}, it delivers a seamless, high-performance solution that operates entirely under strict privacy and efficiency constraints.
                </p>
              )}
            </motion.div>

            {/* Capabilities */}
            {project.content?.capabilities && (
              <motion.div 
                onViewportEnter={() => setActiveSection("capabilities")}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">System Capabilities</h2>
                <div className="space-y-4">
                  {project.content.capabilities.map((feature, idx) => {
                    const parts = feature.split(': ');
                    return (
                      <div key={idx} className="glass-panel p-6 flex gap-4 transition-transform hover:scale-[1.02]">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_currentColor]" style={{ color: secondaryColor, backgroundColor: secondaryColor }} />
                        <p className="text-lg text-muted-foreground">
                          {parts.length > 1 ? (
                            <>
                              <strong className="text-foreground">{parts[0]}:</strong> {parts.slice(1).join(': ')}
                            </>
                          ) : (
                            feature
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Dynamic Sections */}
            {project.content?.sections?.map((section, index) => {
              // Determine what image keyword to associate with this section for the sticky panel
              let sectionKey = `section-${index}`;
              if (section.title.toLowerCase().includes("architecture")) sectionKey = "architecture";
              else if (section.title.toLowerCase().includes("flowchart")) sectionKey = "flowchart";
              else if (section.title.toLowerCase().includes("validation") || section.title.toLowerCase().includes("results")) sectionKey = "results";
              else if (section.title.toLowerCase().includes("design") || section.title.toLowerCase().includes("ui")) sectionKey = "ui";
              else if (section.title.toLowerCase().includes("icons")) sectionKey = "icons";

              let activeImageUrl = null;
              if (sectionKey === "architecture" && project.content?.images?.architecture) activeImageUrl = project.content.images.architecture;
              else if (sectionKey === "flowchart" && project.content?.images?.flowchart) activeImageUrl = project.content.images.flowchart;
              else if (sectionKey === "results" && project.content?.images?.results) activeImageUrl = project.content.images.results;
              else if (sectionKey === "ui" && project.content?.images?.ui) activeImageUrl = project.content.images.ui;
              else if (sectionKey === "icons" && project.content?.images?.icons) activeImageUrl = project.content.images.icons;

              return (
                <motion.div 
                  key={index}
                  onViewportEnter={() => setActiveSection(sectionKey)}
                  className="space-y-8"
                >
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{section.title}</h2>
                  
                  {Array.isArray(section.body) ? (
                    <div className="space-y-4">
                      {section.body.map((item, idx) => (
                        <div key={idx} className="glass-panel p-6 flex gap-4 bg-foreground/5 border border-foreground/10">
                          <span className="text-foreground/40 mt-1 font-mono text-sm tracking-widest">0{idx + 1}</span>
                          <p className="text-lg text-foreground/80">{item}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xl leading-relaxed text-muted-foreground">
                      {section.body}
                    </p>
                  )}

                  {/* Inline Mobile Image */}
                  {activeImageUrl && (
                    <div className="lg:hidden w-full aspect-video rounded-2xl glass-panel overflow-hidden relative mt-8">
                      <Image 
                        src={activeImageUrl} 
                        alt={`${section.title} Visual`} 
                        fill 
                        className="object-contain p-4 drop-shadow-xl" 
                        unoptimized 
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}

          </div>

          {/* Right Column: Sticky Visual Panel */}
          <div className="hidden lg:block w-1/2 relative pointer-events-none">
            <div className="sticky top-0 h-screen flex items-center justify-center p-12 overflow-hidden">
              <AnimatePresence mode="wait">
                {activeImage ? (
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-square max-h-[80vh] glass-panel bg-black/20 rounded-3xl overflow-hidden flex items-center justify-center"
                  >
                    <Image 
                      src={activeImage} 
                      alt="Project Visual" 
                      fill 
                      className="object-contain p-8 drop-shadow-2xl" 
                      unoptimized 
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-square max-h-[80vh] flex items-center justify-center opacity-30"
                  >
                    {/* Abstract shape representing the project category */}
                    <div className="w-64 h-64 border border-white/20 rounded-full animate-[spin_60s_linear_infinite] flex items-center justify-center">
                      <div className="w-48 h-48 border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" style={{ borderColor: primaryColor }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
