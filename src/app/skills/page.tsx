"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

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

        <div className="w-full max-w-5xl mx-auto flex flex-col gap-16">
          {skillCategories.map((category, idx) => (
            <div key={category.name} className="flex flex-col md:flex-row gap-8 items-start">
              
              {/* Primary Bubble (Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: timings[idx].categoryDelay, duration: 0.4 }}
                className="w-full md:w-1/3 shrink-0 px-6 py-4 rounded-2xl border bg-foreground/5 border-foreground/10 shadow-lg"
              >
                <h2 className="font-medium tracking-tight text-xl text-foreground/90">{category.name}</h2>
              </motion.div>

              {/* Nodes Parallel (Right) */}
              <div className="flex-1 flex flex-wrap content-start gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: timings[idx].skillDelays[i], duration: 0.3 }}
                    className="glass-panel px-5 py-3 hover:bg-foreground/10 transition-colors cursor-default border border-white/5"
                  >
                    <span className="font-medium tracking-tight text-foreground/80">{skill}</span>
                  </motion.div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
