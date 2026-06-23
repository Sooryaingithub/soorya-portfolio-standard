"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { labArticles } from "@/data/lab-articles";

export default function LabPage() {
  return (
    <main className="flex-1 min-h-[100dvh] bg-background relative overflow-hidden px-4 pt-24 pb-32">
      <div className="max-w-3xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">Engineering Lab</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Deep technical explorations, architecture teardowns, and experiments in scaling intelligence.
          </p>
        </motion.div>

        <div className="space-y-8">
          {labArticles.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 md:p-8 rounded-3xl transition-all hover:bg-white/5 border border-transparent hover:border-white/10 group"
            >
              <Link href={`/lab/${article.slug}`} className="block">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span className="text-[#00F0FF]">{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 group-hover:text-[#00F0FF] transition-colors">
                  {article.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {article.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
