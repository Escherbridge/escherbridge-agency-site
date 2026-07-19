import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getPractice, practices } from "@/lib/practices";

export function generateStaticParams() { return practices.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const practice = getPractice((await params).slug);
  return practice ? { title: practice.title, description: practice.summary } : {};
}

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const practice = getPractice((await params).slug);
  if (!practice) notFound();
  return <><Header /><main className="subpage practice-page">
    <section className="practice-hero"><p className="eyebrow">Practice / {practice.number}</p><h1>{practice.title}</h1><p className="practice-deck">{practice.summary}</p></section>
    <section className="practice-story"><aside><span>{practice.number}</span><p>A field note on how the work moves from premise to practice.</p></aside><article>
      <p className="eyebrow">01 / The premise</p><h2>Begin with the shape of the problem.</h2><p className="practice-lede">{practice.premise}</p>
      <p className="eyebrow">02 / How the engagement works</p><ol>{practice.approach.map((item) => <li key={item}>{item}</li>)}</ol>
    </article></section>
    <section className="practice-evidence"><div className="section-heading light"><p className="section-index">(REPRESENTATIVE EVIDENCE / 03)</p><h2>Work as<br /><em>proof.</em></h2></div><div className="evidence-grid">
      {practice.evidence.map((item, index) => { const content = <><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.detail}</p>{item.href && <b>Read retrospective ↗</b>}</>; return item.href ? <Link href={item.href} key={item.title}>{content}</Link> : <article key={item.title}>{content}</article>; })}
    </div></section>
    <section className="practice-cta"><p className="eyebrow">04 / Start here</p><h2>{practice.closing}</h2><div><Link className="brutal-button" href="/#contact">Start a conversation <span>↗</span></Link><Link className="text-link" href="/work">Explore the archive →</Link></div></section>
  </main><Footer /></>;
}
