import Link from "next/link";
import { BreakableTitle } from "@/components/escher/breakable-title";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProjects } from "@/lib/projects";

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <>
      <Header />
      <main className="subpage">
        <section className="archive-hero">
          <p className="eyebrow">Archive / {projects.length} systems / current practice</p>
          <h1>Work</h1>
          <p>Products, research systems, and deployed worlds. Each entry is presented as a retrospective: the premise, the artifact, and what the work made clearer.</p>
        </section>
        <section className="archive-list">
          {projects.map((project, index) => (
            <Link key={project.slug} href={`/work/${project.slug}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <BreakableTitle as="h2" title={project.title} />
              <p>{project.tagline}</p>
              <b>{project.date} ↗</b>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
