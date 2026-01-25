"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GridOverlay } from "@/components/escher/tessellation";

const services = [
  {
    id: "development",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
    title: "Software Development",
    description:
      "Full-stack development with TypeScript, React, Svelte, Python, .NET, and more -- I'm truly language agnostic. Enterprise APIs, web applications, and cross-platform solutions and integrations.",
  },
  {
    id: "architecture",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12,2 L2,7 L12,12 L22,7 Z" />
        <path d="M2,17 L12,22 L22,17" />
        <path d="M2,12 L12,17 L22,12" />
      </svg>
    ),
    title: "Architecture Design",
    description:
      "Cloud infrastructure, API gateways, microservices, and enterprise system design with CI/CD pipelines.",
  },
  {
    id: "consulting",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    title: "Technical Consulting",
    description:
      "Platform modernization, enterprise technology service transformation, Agile implementation, and performance optimization for enterprise teams.",
  },
  {
    id: "fractional-cto",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18,20 V10" />
        <path d="M12,20 V4" />
        <path d="M6,20 V14" />
      </svg>
    ),
    title: "Fractional CTO",
    description:
      "Strategic technical leadership for startups and nonprofits. Define architecture, build teams, and deliver products.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Services() {
  return (
    <section id="services" className="relative py-grid-16 bg-background-secondary">
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
          <h2 className="font-display text-display-lg mb-grid-4">Services</h2>
          <p className="text-foreground-muted text-body-lg max-w-xl">
            Comprehensive software consulting services tailored to your needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-grid-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <div className="text-white mb-grid-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
