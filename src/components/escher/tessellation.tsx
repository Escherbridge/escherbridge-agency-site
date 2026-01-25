"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TessellationProps {
  className?: string;
  opacity?: number;
}

// Bridge path from TileTeselationTransparentBlack.svg
const bridgePath = "M34.633,237.055l57.63,-0.148c2.138,-0.006 4.191,0.976 5.704,2.727c1.514,1.752 2.364,4.13 2.364,6.61l0,122.15c0,17.458 3.197,51.825 30.62,81.649c28.816,31.34 83.27,57.147 185.133,56.382c81.278,-0.609 128.929,-23.041 156.705,-50.341c39.655,-38.974 37.361,-87.097 37.361,-87.097c-0.01,-0.198 -0.016,-0.395 -0.016,-0.593l0,-44.142l-46.513,0.128c-2.851,0.008 -5.588,-1.3 -7.606,-3.635c-2.019,-2.336 -3.153,-5.507 -3.153,-8.814l0,-135.419c0,-19.088 -3.199,-56.689 -31.119,-89.297c-29.434,-34.375 -85.132,-62.469 -189.177,-61.631c-82.934,0.669 -131.609,25.11 -159.95,55.023c-40.337,42.573 -38.002,95.169 -38.002,95.169c0.012,0.245 0.019,0.49 0.019,0.736l-0,60.543Z";

export function Tessellation({ className, opacity = 0.03 }: TessellationProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Pattern dimensions - tiles are ~540x540 in SVG, we scale them down
  const tileWidth = 80;
  const tileHeight = 80;
  const scale = tileWidth / 540;

  return (
    <motion.div
      className={cn("absolute inset-0 overflow-hidden rotate-12 pointer-events-none", className)}
      style={{ y }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id="bridge-tessellation"
            width={tileWidth}
            height={tileHeight}
            patternUnits="userSpaceOnUse"
          >
            {/* Main tile */}
            <g transform={`scale(${scale})`}>
              <path
                d={bridgePath}
                fill="none"
                stroke="white"
                strokeWidth="16"
              />
            </g>
          </pattern>
        </defs>
        <rect fill="url(#bridge-tessellation)" width="100%" height="200%" />
      </svg>
    </motion.div>
  );
}

// Simpler grid pattern for sections
export function GridOverlay({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        "bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]",
        "bg-[size:4rem_4rem]",
        className
      )}
    />
  );
}
