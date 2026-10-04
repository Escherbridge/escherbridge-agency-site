import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Partners: OVERSEASGENAI, Elevate Impact, PrimusNeo",
  description:
    "Escherbridge's partners: OVERSEASGENAI, a venture shipyard; Elevate Impact, a rare-disease clinical research platform; and PrimusNeo, a technology platform connecting real-world operations with governance and funding tools.",
};

type Partner = {
  name: string;
  url: string;
  oneLiner: string;
  description: string;
  partnershipStatement?: string;
  relationship?: string;
};

/** Partner copy is sourced and verified; do not add claims beyond these fields. */
const partners: Partner[] = [
  {
    name: "OVERSEASGENAI",
    url: "https://overseasgenai-site-production.up.railway.app",
    oneLiner: "Venture shipyard turning tested ideas into real operating businesses.",
    description:
      "OVERSEASGENAI is a venture shipyard led by Ahmad Darwish that helps first-time founders and small-business owners turn an idea into a real, working business. It tests an idea against real market evidence before building anything, then builds and launches the actual software, billing, and day-to-day operations the business needs to run. It works with founders across the United States, Indonesia, and the Middle East.",
    partnershipStatement:
      "OVERSEASGENAI is built in partnership with Escherbridge: Escherbridge provides governance and engineering; OVERSEASGENAI runs the venture shipyard.",
    relationship:
      "Escherbridge is OVERSEASGENAI's named engineering and delivery-governance partner, supplying the engineering support and governance discipline behind its venture-building process.",
  },
  {
    name: "Elevate Impact",
    url: "https://elevateimpact.com",
    oneLiner: "Platform connecting patients, doctors, and researchers on rare-disease trials.",
    description:
      "Elevate Impact is an online platform that helps patients, doctors, researchers, and community groups work together on rare-disease healthcare and clinical research, starting with sickle cell disease. It lets these groups discuss, collaborate, and track clinical trials in one place, with the goal of making trials easier to join and more responsive to patients' needs. It is a certified minority-owned company based in Arlington, Massachusetts.",
  },
  {
    name: "PrimusNeo",
    url: "https://primusneo.com",
    oneLiner: "Technology platform connecting real-world operations with governance and funding tools.",
    description:
      "PrimusNeo builds a set of connected software tools for organizing and governing large, real-world projects and communities. Its stack includes tools for planning and mapping physical work, for group decision-making, and for managing identity, consent, and payments. The company describes itself as aiming to be one trustworthy source of information that many different tools can plug into, for situations that cannot afford mistakes.",
    relationship:
      "According to PrimusNeo's own website, Escherbridge is the developer of PrimusNeo's Fractal Engine component and acts as the technical steward connecting PrimusNeo's different platform layers together.",
  },
];

/** Page displaying partner organizations. */
export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <section className="experience-hero">
          <p className="eyebrow">Partners / {partners.length} organizations</p>
          <h1>In good<br /><em>company.</em></h1>
          <p>
            A venture shipyard, a rare-disease research platform, and a technology platform for governing
            real-world operations. Each appears here in its own terms, with Escherbridge&apos;s role named
            where it is on the record.
          </p>
        </section>
        {partners.map((partner, index) => (
          <section className="case-body" key={partner.name}>
            <aside>
              <p>Partner<br />{String(index + 1).padStart(2, "0")} / {String(partners.length).padStart(2, "0")}</p>
            </aside>
            <article>
              <h2>{partner.name}</h2>
              <p className="case-deck">{partner.oneLiner}</p>
              <p>{partner.description}</p>
              {partner.relationship && (
                <>
                  <p className="eyebrow">Escherbridge&apos;s role</p>
                  {partner.partnershipStatement && <p><strong>{partner.partnershipStatement}</strong></p>}
                  <p>{partner.relationship}</p>
                </>
              )}
              <div className="case-links">
                <a className="brutal-button" href={partner.url} target="_blank" rel="noopener">
                  Visit {partner.name} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </section>
        ))}
        <section className="practice-cta">
          <p className="eyebrow">Work with Escherbridge</p>
          <h2>Have a difficult thing worth <em>making?</em></h2>
          <div>
            <Link className="brutal-button" href="/#contact">Start a conversation →</Link>
            <Link className="text-link" href="/work">Explore the archive →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
