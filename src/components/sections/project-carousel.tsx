"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import type { Project } from "@/lib/projects";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const pointerStart = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const railRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const total = projects.length;

  const select = useCallback((next: number, focus = false) => {
    const wrapped = (next + total) % total;
    setDirection(next > active ? 1 : -1);
    setActive(wrapped);
    if (focus) requestAnimationFrame(() => railRefs.current[wrapped]?.focus());
  }, [active, total]);

  if (!total) return null;
  const project = projects[active];
  const previous = projects[(active - 1 + total) % total];
  const next = projects[(active + 1) % total];
  const transition = reducedMotion ? { duration: 0 } : { duration: .72, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="project-carousel" aria-roledescription="carousel" aria-label="Project archive" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowRight") { event.preventDefault(); select(active + 1); } if (event.key === "ArrowLeft") { event.preventDefault(); select(active - 1); } }}>
      <div className="project-stage" onClickCapture={(event) => { if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; } }} onPointerDown={(event) => { pointerStart.current = event.clientX; suppressClick.current = false; }} onPointerUp={(event) => { if (pointerStart.current === null) return; const distance = event.clientX - pointerStart.current; pointerStart.current = null; if (Math.abs(distance) > 48) { suppressClick.current = true; select(active + (distance < 0 ? 1 : -1)); } }} onPointerCancel={() => { pointerStart.current = null; }}>
        <button className="project-face project-face-prev" onClick={() => select(active - 1)} aria-label={`Previous project: ${previous.title}`}><Image src={previous.image} alt="" fill sizes="25vw" /><span>{previous.title}</span></button>
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.article className={`project-feature project-tone-${active % 3} project-visual-${project.visualVariant ?? active % 6}`} key={project.slug} custom={direction} initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * 64, rotateY: direction * -7 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * -64, rotateY: direction * 7 }} transition={transition}>
            <Link className="project-feature-link" href={`/work/${project.slug}`} aria-label={`Read the ${project.title} retrospective`}>
              <div className="project-feature-art" aria-hidden="true"><Image src={project.image} alt="" fill priority={active === 0} sizes="(max-width: 800px) 88vw, 52vw" /></div>
              <div className="project-feature-copy"><div className="project-meta"><span>{String(active + 1).padStart(2, "0")} / {project.date}</span><span>{project.technologies.slice(0, 2).join(" + ")}</span></div><h3>{project.title}</h3><p>{project.tagline}</p><b>Read retrospective ↗</b></div>
            </Link>
          </motion.article>
        </AnimatePresence>
        <button className="project-face project-face-next" onClick={() => select(active + 1)} aria-label={`Next project: ${next.title}`}><Image src={next.image} alt="" fill sizes="25vw" /><span>{next.title}</span></button>
      </div>
      <div className="project-controls"><button onClick={() => select(active - 1)} aria-label="Previous project">←</button><p aria-live="polite" aria-atomic="true"><span>{String(active + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")} — {project.title}</p><button onClick={() => select(active + 1)} aria-label="Next project">→</button></div>
      <div className="project-rail" aria-label="Choose a project">{projects.map((item, index) => <button key={item.slug} ref={(node) => { railRefs.current[index] = node; }} className={index === active ? "is-active" : ""} onClick={() => select(index)} aria-current={index === active ? "true" : undefined} aria-label={`Show project ${index + 1}: ${item.title}`}><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</button>)}</div>
    </div>
  );
}
