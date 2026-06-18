"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const skillCategories = [
  {
    name: "Artificial Intelligence",
    skills: ["LLM Engineering", "Agentic Systems", "Prompt Engineering", "Computer Vision", "NLP"]
  },
  {
    name: "Apple Ecosystem",
    skills: ["SwiftUI", "CoreML", "MLX", "ARKit", "Vision Framework"]
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["Azure", "Serverless", "Data Engineering", "Linux", "Networking", "Self Hosting", "VPN Infrastructure"]
  },
  {
    name: "Programming",
    skills: ["Python", "Swift", "TypeScript", "JavaScript", "C++"]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const timings = useMemo(() => {
    let cumulativeDelay = 0.3;
    return skillCategories.map((category) => {
      const categoryDelay = cumulativeDelay;
      cumulativeDelay += 0.2;
      const skillDelays = category.skills.map(() => {
        const delay = cumulativeDelay;
        cumulativeDelay += 0.05;
        return delay;
      });
      cumulativeDelay += 0.15;
      return { categoryDelay, skillDelays };
    });
  }, []);

  return (
    <main className="flex-1 flex flex-col min-h-[100dvh] px-4 pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
            Primary Skills
          </h1>
          <p className="text-lg text-muted-foreground">
            Ecosystems and tools used to engineer intelligence.
          </p>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto min-h-[500px] flex flex-col md:flex-row gap-8 items-start md:items-center justify-center">
          
          <div className="flex md:flex-col flex-wrap justify-center gap-4 w-full md:w-1/3">
            {skillCategories.map((category, idx) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: timings[idx].categoryDelay, duration: 0.4 }}
                onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                className={`text-left px-6 py-4 rounded-2xl border transition-all ${
                  activeCategory === category.name || activeCategory === null
                    ? "bg-foreground/10 border-foreground/20 shadow-lg text-foreground" 
                    : "bg-transparent border-transparent text-foreground/40 hover:text-foreground/60"
                }`}
              >
                <h2 className="font-medium tracking-tight">{category.name}</h2>
              </motion.button>
            ))}
          </div>

          <div className="flex-1 w-full min-h-[400px] relative">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={false}
                animate={{ 
                  opacity: activeCategory === null || activeCategory === category.name ? 1 : 0,
                  scale: activeCategory === null || activeCategory === category.name ? 1 : 0.9,
                  pointerEvents: activeCategory === null || activeCategory === category.name ? "auto" : "none"
                }}
                className={`absolute inset-0 flex flex-wrap content-start gap-3 p-6 ${activeCategory === null ? 'opacity-100' : ''}`}
                style={{ display: activeCategory !== null && activeCategory !== category.name ? 'none' : 'flex' }}
              >
                {activeCategory === category.name && (
                  <div className="w-full mb-4">
                    <h3 className="text-sm uppercase tracking-wider text-white/40 font-medium">Nodes in {category.name}</h3>
                  </div>
                )}
                
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: timings[idx].skillDelays[i], duration: 0.3 }}
                    className="glass-panel px-5 py-3 hover:bg-foreground/10 transition-colors cursor-default"
                  >
                    <span className="font-medium tracking-tight text-foreground/90">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
