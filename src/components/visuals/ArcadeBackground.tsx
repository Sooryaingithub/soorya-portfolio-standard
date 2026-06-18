"use client";

import { motion } from "framer-motion";

export default function ArcadeBackground() {
  // Tetris blocks styling
  const blockClass = "fill-current opacity-20";

  // Keyframes for the choreographed run and jump
  const xSequence = [
    "10vw",  // 0: Start Block 1
    "23vw",  // 1: Takeoff B1
    "31.5vw",// 2: Apex 1
    "40vw",  // 3: Land B2
    "48vw",  // 4: Takeoff B2
    "59vw",  // 5: Apex 2
    "70vw",  // 6: Land B3
    "83vw",  // 7: Takeoff B3
    "96.5vw",// 8: Apex 3
    "110vw", // 9: Fall off screen right
    "-10vw", // 10: Teleport off screen left
    "0vw",   // 11: Apex 4 (entering)
    "10vw"   // 12: Land B1 (loop)
  ];

  const ySequence = [
    "66vh",  // 0: Run B1
    "66vh",  // 1: Takeoff
    "40vh",  // 2: Apex 1 (high jump)
    "51vh",  // 3: Land B2
    "51vh",  // 4: Takeoff
    "35vh",  // 5: Apex 2 (high jump)
    "61vh",  // 6: Land B3
    "61vh",  // 7: Takeoff
    "45vh",  // 8: Apex 3
    "100vh", // 9: Fall down
    "100vh", // 10: Teleport low
    "40vh",  // 11: Apex 4
    "66vh"   // 12: Land
  ];

  // Easing array so runs are linear and jumps are bezier curves for gravity
  const easeSequence: any = [
    "linear", // 0->1 run
    "easeOut", // 1->2 jump up
    "easeIn",  // 2->3 fall down
    "linear", // 3->4 run
    "easeOut", // 4->5 jump up
    "easeIn",  // 5->6 fall down
    "linear", // 6->7 run
    "easeOut", // 7->8 jump up
    "easeIn",  // 8->9 fall down
    "linear", // 9->10 teleport (invisible)
    "easeOut", // 10->11 jump up
    "easeIn"   // 11->12 fall down
  ];

  // Frame timing percentages
  const timeSequence = [
    0,      // 0
    0.15,   // 1 (Run)
    0.20,   // 2 (Jump up)
    0.25,   // 3 (Land)
    0.35,   // 4 (Run)
    0.40,   // 5 (Jump up)
    0.45,   // 6 (Land)
    0.60,   // 7 (Run)
    0.65,   // 8 (Jump up)
    0.75,   // 9 (Fall)
    0.76,   // 10 (Teleport fast)
    0.90,   // 11 (Jump up)
    1.0     // 12 (Land)
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Background Grid Lines (Subtle Arcade Feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* TETRIS BLOCKS */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Block 1: L-Block at x:10vw, y:70vh */}
        <g className="text-[#00F0FF]" transform="translate(10vw, 70vh)">
          <path className={blockClass} d="M 0 0 h 15vw v 4vh h -11vw v 8vh h -4vw Z" />
          <path className="stroke-current stroke-2 fill-none opacity-50" d="M 0 0 h 15vw v 4vh h -11vw v 8vh h -4vw Z" />
        </g>

        {/* Block 2: Square at x:40vw, y:55vh */}
        <g className="text-[#8A2BE2]" transform="translate(40vw, 55vh)">
          <path className={blockClass} d="M 0 0 h 10vw v 10vw h -10vw Z" />
          <path className="stroke-current stroke-2 fill-none opacity-50" d="M 0 0 h 10vw v 10vw h -10vw Z" />
        </g>

        {/* Block 3: T-Block at x:70vw, y:65vh */}
        <g className="text-[#00F0FF]" transform="translate(70vw, 65vh)">
          <path className={blockClass} d="M 0 0 h 15vw v 4vh h -5vw v 6vh h -5vw v -6vh h -5vw Z" />
          <path className="stroke-current stroke-2 fill-none opacity-50" d="M 0 0 h 15vw v 4vh h -5vw v 6vh h -5vw v -6vh h -5vw Z" />
        </g>
      </svg>

      {/* ARCADE CHARACTER */}
      <motion.div
        className="absolute w-8 h-8 text-[#00F0FF] drop-shadow-[0_0_8px_#00F0FF]"
        animate={{
          left: xSequence,
          top: ySequence,
        }}
        transition={{
          duration: 12,
          ease: easeSequence,
          times: timeSequence,
          repeat: Infinity,
        }}
      >
        {/* 8-bit Space Invader/Mario style SVG Sprite */}
        <svg viewBox="0 0 11 8" className="w-full h-full fill-current" preserveAspectRatio="xMidYMid meet">
          <path d="M2,0 L3,0 L3,1 L2,1 L2,0 Z M8,0 L9,0 L9,1 L8,1 L8,0 Z M3,1 L4,1 L4,2 L3,2 L3,1 Z M7,1 L8,1 L8,2 L7,2 L7,1 Z M2,2 L9,2 L9,3 L2,3 L2,2 Z M0,3 L3,3 L3,4 L2,4 L2,5 L0,5 L0,3 Z M8,3 L11,3 L11,5 L9,5 L9,4 L8,4 L8,3 Z M3,4 L8,4 L8,5 L3,5 L3,4 Z M2,5 L4,5 L4,6 L2,6 L2,5 Z M7,5 L9,5 L9,6 L7,6 L7,5 Z M0,6 L2,6 L2,8 L0,8 L0,6 Z M9,6 L11,6 L11,8 L9,8 L9,6 Z M4,6 L7,6 L7,7 L4,7 L4,6 Z" />
        </svg>
      </motion.div>
    </div>
  );
}
