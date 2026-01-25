"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GridOverlay } from "@/components/escher/tessellation";
import type { Project } from "@/lib/projects";

interface PortfolioProps {
  projects: Project[];
}

export function Portfolio({ projects }: PortfolioProps) {

  return (
    <section id="portfolio" className="relative py-grid-16 bg-background-secondary">
      <GridOverlay />

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-grid-12"
        >
          <h2 className="font-display text-display-lg mb-grid-4">Work</h2>
          <p className="text-foreground-muted text-body-lg max-w-xl">
            Selected projects showcasing architecture, development, and technical leadership.
          </p>
        </motion.div>

        

        {/* Other projects grid */}
        {projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-6"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-around">
                  
                  <h3 className="font-heading font-bold text-heading-md mb-grid-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground-muted text-body-md mb-grid-4">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-grid-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-body-sm text-foreground-subtle"
                      >
                        {tech}
                        {project.technologies.indexOf(tech) < 2 && " · "}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
