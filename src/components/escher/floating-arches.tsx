"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Bridge path from TileTeselationTransparentBlack.svg (viewBox 0 0 540 540)
const bridgePath = "M34.633,237.055l57.63,-0.148c2.138,-0.006 4.191,0.976 5.704,2.727c1.514,1.752 2.364,4.13 2.364,6.61l0,122.15c0,17.458 3.197,51.825 30.62,81.649c28.816,31.34 83.27,57.147 185.133,56.382c81.278,-0.609 128.929,-23.041 156.705,-50.341c39.655,-38.974 37.361,-87.097 37.361,-87.097c-0.01,-0.198 -0.016,-0.395 -0.016,-0.593l0,-44.142l-46.513,0.128c-2.851,0.008 -5.588,-1.3 -7.606,-3.635c-2.019,-2.336 -3.153,-5.507 -3.153,-8.814l0,-135.419c0,-19.088 -3.199,-56.689 -31.119,-89.297c-29.434,-34.375 -85.132,-62.469 -189.177,-61.631c-82.934,0.669 -131.609,25.11 -159.95,55.023c-40.337,42.573 -38.002,95.169 -38.002,95.169c0.012,0.245 0.019,0.49 0.019,0.736l-0,60.543Z";

interface FloatingArchesProps {
  className?: string;
}

export function FloatingArches({ className }: FloatingArchesProps) {
  const arches = [
    { x: "10%", y: "20%", size: 60, delay: 0, duration: 8 },
    { x: "85%", y: "15%", size: 80, delay: 1, duration: 10 },
    { x: "75%", y: "70%", size: 50, delay: 2, duration: 7 },
    { x: "15%", y: "75%", size: 70, delay: 0.5, duration: 9 },
    { x: "50%", y: "85%", size: 40, delay: 1.5, duration: 6 },
  ];

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {arches.map((arch, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 540 540"
          width={arch.size}
          height={arch.size}
          className="absolute text-white opacity-5"
          style={{ left: arch.x, top: arch.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: arch.duration,
            delay: arch.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          fill="none"
          stroke="currentColor"
          strokeWidth="16"
        >
          <path d={bridgePath} />
        </motion.svg>
      ))}
    </div>
  );
}
