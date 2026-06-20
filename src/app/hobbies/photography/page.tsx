"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const photos = [
  { src: "photography/_DSC7693.jpg", title: "The Golden Hour", description: "A fleeting moment captured as the sun dips below the horizon, painting the world in warm, transient hues." },
  { src: "photography/_DSC1141.jpg", title: "Urban Geometry", description: "Finding symmetry in the chaos. The stark lines of the city reflecting the structure of modern life." },
  { src: "photography/_DSC2127.jpg", title: "Stillness", description: "A quiet breath in a loud world. The composition invites the viewer to pause and reflect." },
  { src: "photography/IMG_4386.JPG", title: "Chasing Light", description: "Shadows dancing across the frame, highlighting the delicate interplay between illumination and darkness." },
  { src: "photography/_DSC7843.jpg", title: "Organic Textures", description: "A study of nature's imperfections, where every crack and line tells a story of time." },
  { src: "photography/IDG_20250923_140257_407.jpg", title: "The Observer", description: "Looking outward, a shift in perspective. A candid shot exploring human connection with the environment." },
  { src: "photography/_DSC9741.ARW.jpg", title: "Monochrome Study", description: "Stripping away color to reveal raw emotion. A high-contrast exploration of depth and form." },
  { src: "photography/IMG_4426.JPG", title: "Serendipity", description: "An unplanned capture. The spontaneous alignment of subject, background, and perfectly timed light." },
  { src: "photography/IMG_4963.jpg", title: "Vastness", description: "Emphasizing scale. A reminder of how small we are amidst the sweeping landscapes of the world." },
  { src: "photography/_DSC7367.jpg", title: "Motion Blur", description: "The sensation of speed and passage of time, frozen yet dynamically alive." },
  { src: "photography/IMG_4441.heic", title: "Epilogue", description: "The final frame. A lingering thought suspended in a quiet, moody atmosphere." }
];

export default function PhotographyGallery() {
  return (
    <main className="bg-[#faf9f6] text-stone-800 min-h-screen selection:bg-stone-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-24">
        
        <nav className="mb-24 flex items-center justify-between">
          <Link href="/hobbies" className="flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-widest">Back</span>
          </Link>
          <span className="text-sm font-medium uppercase tracking-widest text-stone-400">Vol. 1</span>
        </nav>

        <header className="mb-32 text-center md:text-left space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif italic font-medium tracking-tight text-stone-900"
          >
            A Study in Light.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-stone-500 max-w-2xl leading-relaxed"
          >
            An ongoing exploration of moments, shadows, and the quiet spaces in between.
          </motion.p>
        </header>

        <div className="space-y-48">
          {photos.map((photo, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.section 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
              >
                {/* Image Side */}
                <div className="w-full md:w-[55%]">
                  <div className="relative aspect-[4/5] w-full shadow-2xl bg-stone-200">
                    <Image 
                      src={`/images/${photo.src}`}
                      alt={photo.title}
                      fill
                      unoptimized={photo.src.endsWith('.heic')}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-[45%] space-y-6 flex flex-col justify-center">
                  <span className="text-stone-400 font-mono text-sm tracking-widest">
                    {String(i + 1).padStart(2, '0')} / {photos.length}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif text-stone-900">
                    {photo.title}
                  </h2>
                  <p className="text-lg text-stone-600 leading-relaxed font-serif italic">
                    {photo.description}
                  </p>
                </div>
              </motion.section>
            );
          })}
        </div>
        
        <footer className="mt-48 pt-12 border-t border-stone-200 text-center">
           <p className="font-serif italic text-stone-400">End of Volume 1.</p>
        </footer>

      </div>
    </main>
  );
}
