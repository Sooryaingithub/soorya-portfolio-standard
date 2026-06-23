"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { labArticles } from "@/data/lab-articles";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = labArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center min-h-[100dvh]">
        <h1 className="text-2xl font-medium">Article not found</h1>
        <Link href="/lab" className="text-[#00F0FF] mt-4">Back to Lab</Link>
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
            Back to Lab
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#00F0FF] mb-6">
            <span>{article.date}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{article.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-8 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-white/10">
            {article.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          {article.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <motion.h2 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-2xl md:text-3xl font-semibold tracking-tight mt-16 mb-6"
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
                  className="text-lg leading-relaxed text-foreground/80 mb-6"
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
                  className="my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
                >
                  <div className="px-4 py-2 bg-white/5 text-xs font-mono text-muted-foreground border-b border-white/10 flex justify-between">
                    <span>{block.language}</span>
                  </div>
                  <pre className="p-6 overflow-x-auto text-sm font-mono text-emerald-400 leading-relaxed">
                    <code>{block.value}</code>
                  </pre>
                </motion.div>
              );
            }
            return null;
          })}
        </div>

      </div>
    </main>
  );
}
