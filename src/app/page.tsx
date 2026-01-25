import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Contact } from "@/components/sections/contact";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <About />
        <Portfolio projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
