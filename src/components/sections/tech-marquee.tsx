"use client";

import { motion } from "framer-motion";

const technologies = [
  "TypeScript",
  "React",
  "Svelte",
  ".NET",
  "Python",
  "Node.js",
  "Azure",
  "AWS",
  "Docker",
  "Solana",
  "Algorand",
  "PostgreSQL",
  "MongoDB",
  "GCP",
  "Rust",
  "Elixir",
  "Clojure",
  "Next.js",
  "Tailwind CSS",
  "Power BI",
  "SQL Server",
  "Data Engineering",
  "ETL Pipelines",
  "Data Warehousing",
  "Azure Synapse",
];

export function TechMarquee() {
  return (
    <section className="py-grid-4 bg-background-secondary overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-secondary to-transparent z-10" />

        {/* Scrolling container */}
        <motion.div
          className="flex gap-grid-8 whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate the list for seamless loop */}
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <span
              key={index}
              className="text-foreground-muted text-body-lg font-medium px-grid-4"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
