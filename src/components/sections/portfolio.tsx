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
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => p.slug !== featuredProject?.slug);

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

        {/* Featured project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-grid-12"
          >
            <Card className="overflow-hidden" hover={false}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-grid-6">
                {/* Project image */}
                <div className="relative aspect-video lg:aspect-auto bg-background-elevated border-b lg:border-b-0 lg:border-r border-border-harsh">
                  {featuredProject.image ? (
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-foreground-subtle">
                        <svg
                          className="w-16 h-16 mx-auto mb-grid-4 opacity-30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21,15 L16,10 L5,21" />
                        </svg>
                        <p className="text-body-sm">Project Screenshot</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project details */}
                <div className="p-grid-6 lg:p-grid-8 flex flex-col">
                  <div className="mb-grid-2">
                    <span className="font-heading text-body-sm uppercase tracking-wider text-foreground-muted">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-heading-xl mb-grid-2">
                    {featuredProject.title}
                  </h3>

                  <p className="font-heading text-heading-md text-foreground-muted mb-grid-4">
                    {featuredProject.tagline}
                  </p>

                  <p className="text-foreground-muted text-body-md mb-grid-6 flex-grow">
                    {featuredProject.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-grid-2 mb-grid-6">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-grid-3 py-grid-1 border border-border-harsh text-body-sm font-heading uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  {featuredProject.highlights && (
                    <ul className="space-y-grid-2 mb-grid-6">
                      {featuredProject.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-grid-2 text-body-md">
                          <span className="w-1.5 h-1.5 bg-white mt-2 flex-shrink-0" />
                          <span className="text-foreground-muted">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  {featuredProject.url && (
                    <div>
                      <Button variant="outline" asChild>
                        <a
                          href={featuredProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Site →
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other projects grid */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-6"
          >
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <div className="relative aspect-video bg-background mb-grid-4 -mx-grid-4 -mt-grid-4 md:-mx-grid-6 md:-mt-grid-6 border-b border-border-harsh">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-foreground-subtle">
                        <svg
                          className="w-12 h-12 opacity-30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21,15 L16,10 L5,21" />
                        </svg>
                      </div>
                    )}
                  </div>
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
