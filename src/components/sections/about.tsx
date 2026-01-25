"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const highlights = [
  "7+ years in software engineering",
  "Full-stack: TypeScript, React, Svelte, .NET",
  "Cloud & DevOps: Azure, AWS, Docker",
  "Enterprise systems & API architecture",
];

export function About() {
  return (
    <section id="about" className="relative py-grid-16 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-8 lg:gap-grid-12 items-center">
          {/* Left column - Title and decorative element */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-start gap-grid-6 mb-grid-6">
              <Image
                src="/LogoTransparentWhite.svg"
                alt="Escherbridge"
                width={120}
                height={120}
                className="hidden md:block flex-shrink-0"
              />
              <div>
                <h2 className="font-display text-display-lg mb-grid-2">
                  Ahmed Zaher
                </h2>
                <p className="font-heading text-heading-md text-foreground-muted">
                  Founder & Principal Consultant
                </p>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-grid-3 mt-grid-8">
              {highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-grid-3"
                >
                  <span className="w-2 h-2 bg-white flex-shrink-0" />
                  <span className="text-foreground-muted">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="lg:border-l-3 lg:border-white lg:pl-grid-8 space-y-grid-6">
              <p className="text-body-lg text-foreground">
                I build enterprise web APIs, data-driven applications, and scalable
                systems serving hundreds of thousands of users. My expertise spans
                .NET Core, Azure, React, and modern cloud infrastructure with a
                focus on platform modernization and performance.
              </p>
              <p className="text-body-lg text-foreground-muted">
                My projects range from AI-powered agentic systems and VR health
                experiences to cross-platform applications built with Rust, Elixir,
                and TypeScript. I also deliver architecture and consulting services
                for startups and nonprofits seeking technical leadership.
              </p>
              <p className="text-body-lg text-foreground-muted">
                Escherbridge bridges the gap between vision and reality—whether
                modernizing legacy systems, architecting scalable APIs, or building
                innovative products that create real impact for organizations and
                their users.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Decorative background bridge */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 540 540" fill="none" stroke="white" strokeWidth="16">
          <path d="M34.633,237.055l57.63,-0.148c2.138,-0.006 4.191,0.976 5.704,2.727c1.514,1.752 2.364,4.13 2.364,6.61l0,122.15c0,17.458 3.197,51.825 30.62,81.649c28.816,31.34 83.27,57.147 185.133,56.382c81.278,-0.609 128.929,-23.041 156.705,-50.341c39.655,-38.974 37.361,-87.097 37.361,-87.097c-0.01,-0.198 -0.016,-0.395 -0.016,-0.593l0,-44.142l-46.513,0.128c-2.851,0.008 -5.588,-1.3 -7.606,-3.635c-2.019,-2.336 -3.153,-5.507 -3.153,-8.814l0,-135.419c0,-19.088 -3.199,-56.689 -31.119,-89.297c-29.434,-34.375 -85.132,-62.469 -189.177,-61.631c-82.934,0.669 -131.609,25.11 -159.95,55.023c-40.337,42.573 -38.002,95.169 -38.002,95.169c0.012,0.245 0.019,0.49 0.019,0.736l-0,60.543Z" />
        </svg>
      </div>
    </section>
  );
}
