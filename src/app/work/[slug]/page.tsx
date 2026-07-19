import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() { return getAllProjects().map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? { title: project.title, description: project.description } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const visualVariant = project.visualVariant ?? [...project.slug].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 6;

  return <>
    <Header />
    <main className="subpage">
      <section className="case-hero">
        <div className="case-hero-copy">
          <p className="eyebrow">Retrospective / {project.date}</p>
          <h1 className="project-title">{project.title}</h1>
          <p className="case-deck">{project.tagline}</p>
          <div className="case-meta"><span>{project.role}</span>{project.technologies.map((technology) => <span key={technology}>[{technology}]</span>)}</div>
        </div>
        <div className={`case-hero-art project-visual-${visualVariant}`} aria-hidden="true">
          <div className="project-art"><Image src={project.image} alt="" fill priority sizes="(max-width: 800px) 100vw, 42vw" /></div>
        </div>
      </section>
      <section className="case-body">
        <aside><p>Project<br />{project.title}</p><p>Role<br />{project.role}</p><p>Status<br />Completed / evolving</p></aside>
        <article>
          <p className="eyebrow">01 / The premise</p><h2>{project.question}</h2><p>{project.description}</p>
          <p className="eyebrow">02 / What took shape</p><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          <p className="eyebrow">03 / Looking back</p><h2>The useful residue.</h2><p>{project.reflection}</p>
          <div className="case-links">{project.url && <a className="brutal-button" href={project.url} target="_blank" rel="noreferrer">Visit project <span>↗</span></a>}<Link className="brutal-button" href="/work">Back to archive</Link></div>
        </article>
      </section>
    </main>
    <Footer />
  </>;
}
