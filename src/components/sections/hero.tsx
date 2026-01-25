"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Application } from "@splinetool/runtime";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tessellation } from "@/components/escher/tessellation";

const MINIMUM_LOADING_TIME = 3000; // 3 seconds minimum to show the animation

export function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [splineReady, setSplineReady] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, MINIMUM_LOADING_TIME);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (splineReady && minTimeElapsed) {
      setIsLoading(false);
    }
  }, [splineReady, minTimeElapsed]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const app = new Application(canvasRef.current);
    app
      .load("https://prod.spline.design/5f4mZhX5Kg-Qpwk5/scene.splinecode")
      .then(() => {
        setSplineReady(true);
      });
    return () => {
      app.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen loading overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              clipPath: "inset(100% 0 0 0)",
            }}
            transition={{
              duration: 1.8,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {/* Animated Logo */}
            <motion.div
              className="flex flex-col items-center gap-6"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 541 541"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Inner bridge shape - draws first */}
                <motion.path
                  d="M408.752,281.982l-33.577,0.086c-1.246,0.004 -2.442,-0.568 -3.323,-1.589c-0.882,-1.02 -1.378,-2.406 -1.378,-3.851l0,-71.168c0,-10.172 -1.862,-30.195 -17.839,-47.571c-16.79,-18.259 -48.516,-33.295 -107.865,-32.85c-47.355,0.355 -75.117,13.425 -91.301,29.33c-23.104,22.708 -21.767,50.746 -21.767,50.746c0.006,0.115 0.009,0.23 0.009,0.345l0,25.719l27.1,-0.075c1.661,-0.005 3.255,0.757 4.431,2.118c1.177,1.361 1.837,3.209 1.837,5.135l0,78.899c0,11.121 1.864,33.029 18.131,52.027c17.149,20.028 49.601,36.397 110.221,35.908c48.319,-0.389 76.678,-14.629 93.191,-32.057c23.502,-24.805 22.141,-55.449 22.141,-55.449c-0.007,-0.143 -0.011,-0.286 -0.011,-0.429l0,-35.274Z"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* Outer frame - draws second */}
                <motion.path
                  d="M48.806,282.034l-12.313,0c-2.59,0 -4.69,-2.435 -4.69,-5.44l0,-213.55c0,-2.999 2.093,-5.432 4.678,-5.44l433.315,-1.332c1.246,-0.004 2.443,0.567 3.325,1.588c0.882,1.02 1.378,2.406 1.378,3.852l-0,169.357l27.909,0c3.454,0 6.254,3.248 6.254,7.254l-0,236.748c-0,3.998 -2.789,7.242 -6.236,7.253l-447.349,1.477c-1.661,0.006 -3.257,-0.756 -4.433,-2.117c-1.177,-1.361 -1.838,-3.209 -1.838,-5.136l-0,-194.514Zm10.658,-25.532c9.985,4.173 17.002,14.033 17.002,25.532l0,174.036l404.535,-1.336l0,-196.004l-6.502,0c-15.277,0 -27.661,-12.384 -27.661,-27.661l0,-147.066l-387.374,1.191l-0,171.308Z"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                />
                {/* Fill animation - appears after stroke */}
                <motion.path
                  d="M408.752,281.982l-33.577,0.086c-1.246,0.004 -2.442,-0.568 -3.323,-1.589c-0.882,-1.02 -1.378,-2.406 -1.378,-3.851l0,-71.168c0,-10.172 -1.862,-30.195 -17.839,-47.571c-16.79,-18.259 -48.516,-33.295 -107.865,-32.85c-47.355,0.355 -75.117,13.425 -91.301,29.33c-23.104,22.708 -21.767,50.746 -21.767,50.746c0.006,0.115 0.009,0.23 0.009,0.345l0,25.719l27.1,-0.075c1.661,-0.005 3.255,0.757 4.431,2.118c1.177,1.361 1.837,3.209 1.837,5.135l0,78.899c0,11.121 1.864,33.029 18.131,52.027c17.149,20.028 49.601,36.397 110.221,35.908c48.319,-0.389 76.678,-14.629 93.191,-32.057c23.502,-24.805 22.141,-55.449 22.141,-55.449c-0.007,-0.143 -0.011,-0.286 -0.011,-0.429l0,-35.274Z"
                  fill="white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                />
                <motion.path
                  d="M48.806,282.034l-12.313,0c-2.59,0 -4.69,-2.435 -4.69,-5.44l0,-213.55c0,-2.999 2.093,-5.432 4.678,-5.44l433.315,-1.332c1.246,-0.004 2.443,0.567 3.325,1.588c0.882,1.02 1.378,2.406 1.378,3.852l-0,169.357l27.909,0c3.454,0 6.254,3.248 6.254,7.254l-0,236.748c-0,3.998 -2.789,7.242 -6.236,7.253l-447.349,1.477c-1.661,0.006 -3.257,-0.756 -4.433,-2.117c-1.177,-1.361 -1.838,-3.209 -1.838,-5.136l-0,-194.514Zm10.658,-25.532c9.985,4.173 17.002,14.033 17.002,25.532l0,174.036l404.535,-1.336l0,-196.004l-6.502,0c-15.277,0 -27.661,-12.384 -27.661,-27.661l0,-147.066l-387.374,1.191l-0,171.308Z"
                  fill="white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                />
              </svg>
              <motion.span
                className="text-foreground-muted text-sm tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Loading
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background elements */}
      <Tessellation opacity={0.04} />

      <Container className="relative z-10 py-grid-16">
        <div className="grid md:grid-cols-2 md:items-center md:gap-8">
          {/* Spline 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.8 : 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-16 mb-8 md:mt-0 md:mb-0 md:order-2"
          >
            <div className="w-full max-w-[400px] aspect-square md:max-w-[500px] lg:max-w-[600px] overflow-visible">
              <canvas
                ref={canvasRef}
                className="w-full h-full touch-none"
                style={{ background: "transparent" }}
              />
            </div>
          </motion.div>

          {/* Text content */}
          <div className="text-center md:text-left md:order-1">
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-display-xl md:text-display-xl text-balance mb-grid-6"
            >
              Building Bridges Between{" "}
              <span className="relative inline-block">
                Vision
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isLoading ? 0 : 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                />
              </span>{" "}
              and Code
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-body-lg md:text-heading-md text-foreground-muted max-w-2xl mb-grid-8"
            >
              Software architecture and development consultancy transforming
              complex challenges into elegant, scalable solutions. Aiding enterprises, businesses, and startups in navigating complex digital landscapes with expertise, ease, and innovation.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-grid-4 justify-center md:justify-start"
            >
              <Button size="lg" asChild>
                <Link href="#contact">Start a Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#portfolio">View Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
