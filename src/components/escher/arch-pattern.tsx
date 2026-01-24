"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Bridge path from TileTeselationTransparentBlack.svg (viewBox 0 0 540 540)
const bridgePath = "M34.633,237.055l57.63,-0.148c2.138,-0.006 4.191,0.976 5.704,2.727c1.514,1.752 2.364,4.13 2.364,6.61l0,122.15c0,17.458 3.197,51.825 30.62,81.649c28.816,31.34 83.27,57.147 185.133,56.382c81.278,-0.609 128.929,-23.041 156.705,-50.341c39.655,-38.974 37.361,-87.097 37.361,-87.097c-0.01,-0.198 -0.016,-0.395 -0.016,-0.593l0,-44.142l-46.513,0.128c-2.851,0.008 -5.588,-1.3 -7.606,-3.635c-2.019,-2.336 -3.153,-5.507 -3.153,-8.814l0,-135.419c0,-19.088 -3.199,-56.689 -31.119,-89.297c-29.434,-34.375 -85.132,-62.469 -189.177,-61.631c-82.934,0.669 -131.609,25.11 -159.95,55.023c-40.337,42.573 -38.002,95.169 -38.002,95.169c0.012,0.245 0.019,0.49 0.019,0.736l-0,60.543Z";

interface ArchPatternProps {
  className?: string;
  animate?: boolean;
  size?: "sm" | "md" | "lg";
}

export function ArchPattern({
  className,
  animate = true,
  size = "md",
}: ArchPatternProps) {
  const sizes = {
    sm: { width: 80, height: 80 },
    md: { width: 120, height: 120 },
    lg: { width: 200, height: 200 },
  };

  const { width, height } = sizes[size];

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <svg
      viewBox="0 0 540 540"
      width={width}
      height={height}
      className={cn("text-white", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
    >
      <motion.path
        d={bridgePath}
        initial={animate ? "hidden" : "visible"}
        animate="visible"
        variants={pathVariants}
      />
    </svg>
  );
}

// Simplified bridge icon for logo/small usage
export function ArchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 540"
      className={cn("w-10 h-10 text-white", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
    >
      <path d={bridgePath} />
    </svg>
  );
}
