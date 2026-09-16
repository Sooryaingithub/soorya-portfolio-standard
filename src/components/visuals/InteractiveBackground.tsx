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
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#FDFCF8] pointer-events-none">
      
      {/* English Pastel Gradient Blobs */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full blur-[140px] bg-[#E6DFD3]/40 mix-blend-multiply hidden md:block"
        animate={{
          x: mousePosition.x - 450,
          y: mousePosition.y - 450,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 1.2 }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] bg-[#D6C5C3]/30 mix-blend-multiply hidden md:block"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.8 }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] bg-[#B2BFAF]/25 mix-blend-multiply hidden md:block"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.4 }}
      />

      {/* Fade out edges and top for clean content rendering */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-transparent to-[#FDFCF8] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF8] via-transparent to-[#FDFCF8] opacity-60" />

      {/* Extreme subtle noise to give it a soft canvas feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
