"use client";

import { Copy, Download, Mail } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[100dvh] px-4 pt-32 pb-24 relative w-full">
      <div className="max-w-2xl w-full text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">
          Let's Build Something
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-balance">
          Open to opportunities in AI Engineering, Spatial Computing, Machine Learning, Cloud Engineering, and Systems Engineering.
        </p>
      </div>

      <div className="w-full max-w-xl glass-panel p-8 md:p-12">
        <div className="flex flex-col items-center gap-8">
          
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary/20 to-white/5 border border-foreground/10 flex items-center justify-center shadow-xl mb-4">
            <span className="text-3xl font-medium">SS</span>
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Soorya Sendilnath</h2>
            <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
          </div>

          <div className="w-full h-px bg-foreground/5" />

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a href="mailto:sooryasendilnath@gmail.com" className="flex-1 flex items-center justify-center gap-3 glass-panel py-4 px-6 hover:bg-foreground/10 transition-colors group">
              <Mail className="w-5 h-5 text-foreground/50 group-hover:text-foreground" />
              <span className="font-medium">Email</span>
            </a>
            
            <a href="https://www.linkedin.com/in/soorya-sendilnath/" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 glass-panel py-4 px-6 hover:bg-foreground/10 transition-colors group">
              <LinkedinIcon className="w-5 h-5 text-foreground/50 group-hover:text-foreground" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a href="https://github.com/Sooryaingithub" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-3 glass-panel py-4 px-6 hover:bg-foreground/10 transition-colors group">
              <GithubIcon className="w-5 h-5 text-foreground/50 group-hover:text-foreground" />
              <span className="font-medium">GitHub</span>
            </a>
            
            <a href="/resume.pdf" target="_blank" className="flex-1 flex items-center justify-center gap-3 bg-foreground text-background rounded-2xl py-4 px-6 hover:scale-[1.02] active:scale-95 transition-transform group">
              <Download className="w-5 h-5" />
              <span className="font-medium">Resume</span>
            </a>
          </div>

          <div className="w-full flex items-center justify-center pt-8">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors" onClick={() => navigator.clipboard.writeText('sooryasendilnath@gmail.com')}>
              <Copy className="w-4 h-4" />
              Copy Email Address
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
