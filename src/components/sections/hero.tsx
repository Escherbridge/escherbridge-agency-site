"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tessellation } from "@/components/escher/tessellation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <Tessellation opacity={0.04} />

      <Container className="relative z-10 py-grid-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-grid-8"
          >
            <Image
              src="/LogoTransparentWhite.svg"
              alt="Escherbridge"
              width={200}
              height={200}
            />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-display-xl md:text-display-2xl text-balance mb-grid-6"
          >
            Building Bridges Between{" "}
            <span className="relative">
              Vision
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              />
            </span>{" "}
            and Code
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-body-lg md:text-heading-md text-foreground-muted max-w-2xl mx-auto mb-grid-8"
          >
            Software architecture and development consultancy transforming
            complex challenges into elegant, scalable solutions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-grid-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="#contact">Start a Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#portfolio">View Work</Link>
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
