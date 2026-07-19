import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RecursiveField } from "@/components/escher/recursive-field";
import { getAllProjects } from "@/lib/projects";

const practices = [
  ["01", "Product systems", "From ambiguous premise to a legible, working product — interaction design, architecture, and production code in one continuous loop."],
  ["02", "AI infrastructure", "Local-first context, agent orchestration, persistent memory, and practical interfaces that make model behavior observable."],
  ["03", "Spatial + distributed", "Real-time graphics, peer-to-peer systems, graph models, and digital twins designed around difficult coordination problems."],
];

export default function Home() {
  const projects = getAllProjects().filter((project) => project.featured);

  return (
    <>
      <Header />
      <main>
        <section className="hero-plate">
          <div className="hero-copy">
            <p className="eyebrow">Independent software studio / Boise + distributed</p>
            <h1>Systems for<br /><em>strange loops.</em></h1>
            <p className="hero-deck">Escherbridge turns ambitious ideas into software with a point of view — across AI, spatial computing, decentralized systems, and the web.</p>
            <div className="hero-actions">
              <Link className="brutal-button" href="/work">Enter the archive <span>↗</span></Link>
              <Link className="text-link" href="#contact">Start a conversation →</Link>
            </div>
          </div>
          <RecursiveField />
          <p className="plate-caption">FIG. 01 / A BRIDGE THAT RETURNS TO ITSELF</p>
        </section>

        <section className="ticker" aria-label="Capabilities">
          <div>PRODUCT ENGINEERING ✳ AI SYSTEMS ✳ CREATIVE TECHNOLOGY ✳ DISTRIBUTED ARCHITECTURE ✳</div>
        </section>

        <section className="manifesto page-grid">
          <p className="section-index">(POSITION / 02)</p>
          <div>
            <h2>Neither agency<br />nor factory.</h2>
            <p>Escherbridge is Ahmed Zaher’s independent development practice: design-minded engineering for products whose shape is not obvious yet. The work moves between interface, infrastructure, and experimentation without losing the thread.</p>
          </div>
          <aside>Software can be precise without being sterile. Useful without being generic. Complex without becoming illegible.</aside>
        </section>

        <section id="services" className="practice-list">
          <div className="section-heading"><p className="section-index">(PRACTICE / 03)</p><h2>Ways of working</h2></div>
          {practices.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p><i aria-hidden="true">↘</i>
            </article>
          ))}
        </section>

        <section id="work" className="project-section">
          <div className="section-heading light"><p className="section-index">(SELECTED WORK / 04)</p><h2>Built things,<br /><em>reconsidered.</em></h2><Link href="/work">View full archive →</Link></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Link href={`/work/${project.slug}`} className={`project-card project-tone-${index % 3}`} key={project.slug}>
                <div className="project-geometry" aria-hidden="true"><span /><span /><span /></div>
                <div className="project-meta"><span>{String(index + 1).padStart(2, "0")} / {project.date}</span><span>{project.technologies.slice(0, 2).join(" + ")}</span></div>
                <h3>{project.title}</h3><p>{project.tagline}</p><b>Read retrospective ↗</b>
              </Link>
            ))}
          </div>
        </section>

        <figure className="signal-image">
          <Image src="/images/escherbridge-recursive-infrastructure.png" alt="A chartreuse recursive architectural world of bridges, stairs, and nested structures" width={1536} height={1024} sizes="100vw" />
          <figcaption>FIG. 05 / RECURSIVE INFRASTRUCTURE — A STUDY IN SYSTEMS THAT CONTAIN SYSTEMS</figcaption>
        </figure>

        <section id="about" className="about-band page-grid">
          <p className="section-index">(THE PRACTITIONER / 05)</p>
          <div><h2>Ahmed Zaher</h2><p>Full-stack engineer and AI solutions architect with eight years across enterprise systems, creative technology, healthcare, and independent product development.</p><Link className="brutal-button dark" href="/experience">Experience, in retrospect ↗</Link></div>
          <div className="portrait-type" aria-hidden="true">AZ<br /><span>∞</span></div>
        </section>

        <section id="contact" className="contact-plate">
          <p className="eyebrow">Have a difficult thing worth making?</p><h2>Let’s make the<br />impossible <em>legible.</em></h2>
          <a className="contact-email" href="mailto:contact@ahmedzaher.net">contact@ahmedzaher.net ↗</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
