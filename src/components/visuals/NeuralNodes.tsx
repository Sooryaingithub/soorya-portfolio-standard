"use client";

import { motion } from "framer-motion";

export default function NeuralNodes() {
  // We will create a constellation of floating glowing nodes
  const nodes = [
    { id: 1, x: "20%", y: "30%", size: 12, delay: 0 },
    { id: 2, x: "75%", y: "40%", size: 18, delay: 0.2 },
    { id: 3, x: "40%", y: "60%", size: 24, delay: 0.5 },
    { id: 4, x: "80%", y: "70%", size: 14, delay: 0.8 },
    { id: 5, x: "25%", y: "80%", size: 16, delay: 1.1 },
    { id: 6, x: "60%", y: "20%", size: 20, delay: 0.4 },
    { id: 7, x: "50%", y: "45%", size: 30, delay: 0.1 }, // Center primary node
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Violet and Cyan Glowing Orbs in background */}
      <motion.div 
        className="absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#8A2BE2]/20 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-[#00F0FF]/15 blur-[150px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Neural Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full bg-[#00F0FF] shadow-[0_0_20px_#00F0FF]"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
          }}
          animate={{
            y: ["-20px", "20px", "-20px"],
            x: ["-10px", "10px", "-10px"],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6 + (node.id % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.delay,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-white opacity-50 blur-[2px]" />
        </motion.div>
      ))}

      {/* Abstract connecting lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 20vw 30vh L 50vw 45vh L 75vw 40vh M 50vw 45vh L 40vw 60vh L 25vw 80vh M 50vw 45vh L 80vw 70vh M 60vw 20vh L 50vw 45vh"
          stroke="#00F0FF"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 10"
          animate={{
            strokeDashoffset: [0, 100],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );
}
