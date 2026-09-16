"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#FAFAFA] pointer-events-none">
      {/* High-end stark architectural grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Cursor tracking blur/flashlight */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] bg-black/5 mix-blend-multiply hidden md:block"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.8 }}
      />
      
      {/* A second smaller cursor follower for depth */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px] bg-zinc-300/30 mix-blend-multiply hidden md:block"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
      />

      {/* Fade out edges and top for clean content rendering */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-[#FAFAFA] opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-transparent to-[#FAFAFA] opacity-80" />

      {/* Extreme subtle noise to prevent banding and give it a 'raw' feel */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
