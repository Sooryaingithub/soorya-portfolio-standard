"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";

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
    <main className="bg-[#fcfbf9] text-[#2a2724] min-h-screen selection:bg-[#d4af37]/30 font-serif">
      
      {/* Navigation Overlay */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 mix-blend-difference text-white flex justify-between items-center pointer-events-none">
        <Link href="/hobbies" className="flex items-center gap-3 hover:opacity-70 transition-opacity pointer-events-auto">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-sans">Return</span>
        </Link>
        <span className="text-xs uppercase tracking-[0.3em] font-sans opacity-70">Vol. 1</span>
      </nav>

      {/* Intro Header */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 z-10"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-[#a8a39a] font-sans block">A Visual Journal</span>
          <h1 className="text-6xl md:text-9xl italic font-light tracking-tight text-[#1a1816]">
            Through the Lens.
          </h1>
          <div className="h-[1px] w-24 bg-[#d4af37]/50 mx-auto mt-12" />
        </motion.div>
      </header>

      {/* Full Bleed Sections */}
      <div className="w-full">
        {photos.map((photo, i) => {
          const isEven = i % 2 === 0;
          return (
            <PhotoSection key={i} photo={photo} index={i} isEven={isEven} total={photos.length} />
          );
        })}
      </div>
      
      <footer className="h-screen flex items-center justify-center text-center px-4 bg-[#1a1816] text-[#fcfbf9]">
         <div className="space-y-8">
           <div className="w-12 h-12 border border-[#d4af37]/30 rounded-full mx-auto flex items-center justify-center">
             <span className="text-[#d4af37] text-xl font-serif italic">fin</span>
           </div>
           <p className="text-sm uppercase tracking-[0.3em] text-[#a8a39a] font-sans">End of Volume 1.</p>
         </div>
      </footer>

    </main>
  );
}

function PhotoSection({ photo, index, isEven, total }: { photo: any, index: number, isEven: boolean, total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effect for the text
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  // Subtle scale effect for the image
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={ref}
      className={`relative min-h-[100svh] w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} overflow-hidden`}
    >
      {/* Image Half */}
      <div className="w-full md:w-1/2 relative h-[60vh] md:h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            scale: scaleImg,
            // The gradient mask blends the image into the background color
            maskImage: `linear-gradient(to ${isEven ? 'right' : 'left'}, black 60%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to ${isEven ? 'right' : 'left'}, black 60%, transparent 100%)`
          }}
        >
          <Image 
            src={`/images/${photo.src}`}
            alt={photo.title}
            fill
            unoptimized={photo.src.endsWith('.heic')}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Text Half */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 relative z-10 bg-[#fcfbf9]">
        <motion.div 
          style={{ y: yText }}
          className="max-w-md space-y-8"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#a8a39a] font-sans">
              No. {String(index + 1).padStart(2, '0')}
            </span>
            <div className="h-[1px] w-12 bg-[#d4af37]/30" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light italic text-[#1a1816]">
            {photo.title}
          </h2>
          
          <p className="text-lg md:text-xl text-[#6b655f] leading-relaxed">
            {photo.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
