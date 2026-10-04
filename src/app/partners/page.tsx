import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Partners — Escherbridge",
  description: "Escherbridge is in partnership with OVERSEASGENAI: Escherbridge provides governance and engineering; OVERSEASGENAI runs the venture foundry. Hire Escherbridge on Upwork.",
};

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <section className="archive-hero">
          <p className="eyebrow">Partnership</p>
          <h1>OVERSEASGENAI</h1>
          <p>OVERSEASGENAI is built in partnership with Escherbridge: Escherbridge provides governance and engineering; OVERSEASGENAI runs the venture foundry.</p>
        </section>
        <section className="experience-grid">
          <article>
            <div>
              <h2>Escherbridge&apos;s role</h2>
              <h3>Governance &amp; engineering</h3>
            </div>
            <p>
              Ahmad Darwish leads OVERSEASGENAI and is principal at Escherbridge. Escherbridge
              provides the governance and engineering practice behind OVERSEASGENAI&apos;s
              ventures — architecture, delivery, and the operating discipline that keeps an
              agent-run foundry accountable. Visit{" "}
              <a href="https://overseasgenai.com" target="_blank" rel="noopener">
                overseasgenai.com ↗
              </a>{" "}
              to see the foundry itself.
            </p>
          </article>
        </section>
        <section className="contact-plate">
          <h2>Work with Escherbridge</h2>
          <a
            className="brutal-button dark"
            href="https://www.upwork.com/agencies/2012509889332821989/"
            target="_blank"
            rel="noopener"
          >
            Hire us on Upwork <span>↗</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
