import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProjects } from "@/lib/projects";

export default function WorkPage(){const projects=getAllProjects();return <><Header/><main className="subpage"><section className="archive-hero"><p className="eyebrow">Archive / {projects.length} systems / current practice</p><h1>Work</h1><p>Products, research systems, and deployed worlds. Each entry is presented as a retrospective: the premise, the artifact, and what the work made clearer.</p></section><section className="archive-list">{projects.map((p,i)=><Link key={p.slug} href={`/work/${p.slug}`}><span>{String(i+1).padStart(2,"0")}</span><h2>{p.title}</h2><p>{p.tagline}</p><b>{p.date} ↗</b></Link>)}</section></main><Footer/></>}
