"use client";

import { motion } from "framer-motion";

export default function MinimalBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "#07080B",
      }}
    >
      {/* Precision Perspective Grid (Inspired by Squarespace Foundations by Resn) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      {/* Primary Luminous Cyan Aura (Spatial Light) */}
      <motion.div
        style={{
          position: "absolute",
          top: "-15%",
          left: "20%",
          width: "55vw",
          height: "55vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.18) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 70%)",
          filter: "blur(100px)",
          willChange: "transform",
        }}
        animate={{
          x: ["0%", "8%", "-6%", "0%"],
          y: ["0%", "5%", "-7%", "0%"],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary Deep Electric Violet Aura (Neural Core) */}
      <motion.div
        style={{
          position: "absolute",
          top: "35%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(138, 43, 226, 0.16) 0%, rgba(192, 38, 211, 0.06) 50%, transparent 70%)",
          filter: "blur(120px)",
          willChange: "transform",
        }}
        animate={{
          x: ["0%", "-8%", "6%", "0%"],
          y: ["0%", "-6%", "8%", "0%"],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tertiary Horizon Light (Edge Mesh) */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "30%",
          width: "60vw",
          height: "60vw",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)",
          filter: "blur(110px)",
          willChange: "transform",
        }}
        animate={{
          x: ["0%", "-5%", "7%", "0%"],
          y: ["0%", "8%", "-5%", "0%"],
          scale: [1, 1.04, 0.95, 1],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle Vignette for Spatial Depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 45%, transparent 50%, rgba(7, 8, 11, 0.75) 100%)",
        }}
      />
    </div>
  );
}
