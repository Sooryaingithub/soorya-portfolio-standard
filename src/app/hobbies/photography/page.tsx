"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";

const photos = [
  { src: "photography/_DSC7693.jpg", title: "Morning Rounds", description: "A golfer practicing on the green, framed naturally by a grove of tropical palms in deep, muted tones." },
  { src: "photography/_DSC1141.jpg", title: "Curiosity", description: "A young kitten gripping tightly to a wooden post, its attention captured by something just out of frame." },
  { src: "photography/_DSC2127.jpg", title: "Hidden Gem", description: "A vibrant blue sports car partially obscured behind a slatted wooden gate and dense hanging foliage." },
  { src: "photography/IMG_4386.JPG", title: "The Estate", description: "A sprawling, geometric tea plantation stretching across the hills, with a single worker dwarfed by the landscape." },
  { src: "photography/_DSC7843.jpg", title: "After the Rain", description: "A heavily modified white sports car reflecting the moody atmosphere of a wet parking lot." },
  { src: "photography/IDG_20250923_140257_407.jpg", title: "Infrared Canopy", description: "An otherworldly view of a tree canopy, its leaves rendered in striking crimson against a vibrant cyan sky." },
  { src: "photography/_DSC9741.ARW.jpg", title: "Minimalist Geometry", description: "A sleek mint-green device resting on dark textured wood, intersected by sharp, dramatic shadows." },
  { src: "photography/IMG_4426.JPG", title: "Sunlit Perch", description: "A small black kitten curled up on a corrugated roof, perfectly illuminated by a warm ray of sunshine." },
  { src: "photography/IMG_4963.jpg", title: "Vastness", description: "Emphasizing scale. A reminder of how small we are amidst the sweeping landscapes of the world." },
  { src: "photography/_DSC7367.jpg", title: "In Motion", description: "A panning shot capturing a bright blue sports car slicing through the frame with dynamic speed." },
  { src: "photography/IMG_4441.jpg", title: "Microcosm", description: "A close-up study of delicate pink and yellow Lantana blossoms against a soft, creamy green background." },
  { src: "photography/butterfly.jpg", title: "Delicate Symmetry", description: "A macro study of a butterfly with wings spread wide, revealing intricate patterns and resilient beauty." },
  { src: "photography/kingfisher.jpg", title: "The Perch", description: "A colorful kingfisher resting on a wire fence, a vibrant burst of life against a muted, industrial backdrop." }
];

export default function PhotographyGallery() {
  return (
    <main className="bg-[#fdfbf7] text-[#2c2a29] min-h-screen selection:bg-[#d4af37]/30 font-serif">
      
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12 z-10 max-w-4xl"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-[#a8a39a] font-sans block">A Visual Journal</span>
          <h1 className="text-5xl sm:text-6xl md:text-[10rem] italic font-light tracking-tighter text-[#1a1816] leading-none">
            Through <br/> The Lens.
          </h1>
          <div className="h-[1px] w-32 bg-[#2c2a29]/20 mx-auto" />
        </motion.div>
      </header>

      {/* Asymmetrical Sections */}
      <div className="w-full pb-32">
        {photos.map((photo, i) => {
          const isEven = i % 2 === 0;
          // Every 3rd image will be inset like a polaroid, the rest full bleed
          const isInset = i % 3 === 0 && i !== 0; 
          
          return (
            <PhotoSection 
              key={i} 
              photo={photo} 
              index={i} 
              isEven={isEven} 
              isInset={isInset}
            />
          );
        })}
      </div>
      
      <footer className="h-[50vh] flex items-center justify-center text-center px-4 bg-[#1a1816] text-[#fdfbf7]">
         <div className="space-y-8">
           <div className="w-16 h-16 border border-[#d4af37]/30 rounded-full mx-auto flex items-center justify-center">
             <span className="text-[#d4af37] text-2xl font-serif italic">fin</span>
           </div>
           <p className="text-sm uppercase tracking-[0.3em] text-[#a8a39a] font-sans">End of Volume 1.</p>
         </div>
      </footer>

    </main>
  );
}

function PhotoSection({ photo, index, isEven, isInset }: { photo: any, index: number, isEven: boolean, isInset: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section 
      ref={ref}
      className={`relative min-h-screen w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center my-12 md:my-0`}
    >
      {/* Image Half */}
      <div className={`w-full md:w-1/2 relative flex items-center justify-center ${isInset ? 'p-4 sm:p-8 md:p-24' : 'h-[60vh] md:h-screen'}`}>
        <motion.div 
          className={`relative w-full overflow-hidden ${isInset ? 'aspect-[4/5] shadow-2xl p-4 bg-white' : 'h-full'}`}
          style={{ 
            scale: scaleImg
          }}
        >
          <div className="relative w-full h-full">
            <Image 
              src={`/images/${photo.src}`}
              alt={photo.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Text Half with editorial overlaps */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 relative z-10">
        <motion.div 
          style={{ y: yText }}
          className={`max-w-md space-y-6 sm:space-y-8 ${isEven ? 'md:-ml-24' : 'md:-mr-24'} bg-[#fdfbf7] p-6 sm:p-8 md:p-12 shadow-2xl border border-[#2c2a29]/5`}
        >
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#a8a39a] font-sans">
              No. {String(index + 1).padStart(2, '0')}
            </span>
            <div className="h-[1px] w-12 bg-[#2c2a29]/20" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light italic text-[#1a1816] leading-tight">
            {photo.title}
          </h2>
          
          {/* Magazine Drop Cap */}
          <div className="text-base sm:text-lg md:text-xl text-[#5c5855] leading-relaxed relative">
            <span className="float-left text-6xl md:text-7xl leading-[0.8] mr-3 font-serif text-[#d4af37] italic">
              {photo.description.charAt(0)}
            </span>
            {photo.description.slice(1)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
