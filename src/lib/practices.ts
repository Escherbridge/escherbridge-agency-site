export type Practice = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  premise: string;
  approach: string[];
  evidence: { title: string; detail: string; href?: string }[];
  closing: string;
};

export const practices: Practice[] = [
  {
    slug: "product-engineering", number: "01", title: "Product engineering",
    summary: "From ambiguous premise to a legible, working product - interaction design, architecture, and production code in one continuous loop.",
    premise: "The earliest version of a product is not merely a smaller version of the finished one. It is an instrument for discovering what the product must become. Escherbridge works across interface, behavior, and infrastructure so that each implementation decision sharpens the premise instead of obscuring it.",
    approach: ["Frame the consequential user and system questions before prescribing a stack.", "Build a thin but complete path through interface, application logic, and deployment.", "Use working software to expose assumptions, then iterate toward a durable product shape."],
    evidence: [
      { title: "Ardanova", detail: "A focused product system developed from interaction premise through production architecture.", href: "/work/ardanova" },
      { title: "PlantGeo", detail: "A spatial product that makes place-based information tangible and useful.", href: "/work/plantgeo" },
      { title: "SurrealForge", detail: "Creative tooling where expressive interaction and technical rigor share the same surface.", href: "/work/surrealforge" },
    ],
    closing: "Bring the difficult premise. We can turn it into a product people can inspect, use, and believe in.",
  },
  {
    slug: "ai-emerging-systems", number: "02", title: "AI + emerging systems",
    summary: "Local-first AI, spatial computing, distributed architecture, and practical interfaces that make complex behavior observable.",
    premise: "Emerging technology is most useful when the novelty recedes and the system becomes understandable. The work is less about adding an AI feature than designing the boundaries, context, feedback, and controls that make intelligent behavior trustworthy in practice.",
    approach: ["Model context, permissions, and failure states as first-class parts of the experience.", "Prototype uncertain technical behavior early and make it visible to the people evaluating it.", "Prefer composable, local-first, and inspectable systems where they create genuine leverage."],
    evidence: [
      { title: "Logseq AI Hub", detail: "An extensible bridge between personal knowledge and practical AI workflows.", href: "/work/logseq-ai-hub" },
      { title: "scrt-cli", detail: "Token-budgeted context retrieval designed for long-horizon agent work.", href: "/work/scrt-cli" },
      { title: "Fractal Engine", detail: "A distributed environment for composing and observing complex agent behavior.", href: "/work/fractalengine" },
    ],
    closing: "If the technology is promising but the product shape is still strange, that is the useful place to begin.",
  },
  {
    slug: "technical-consulting", number: "03", title: "Technical consulting",
    summary: "Focused architecture, modernization, and delivery guidance for teams navigating a difficult build or an inflection point.",
    premise: "A technical inflection point rarely needs a document that lives apart from the work. It needs an experienced practitioner who can read the system, identify the decisions that actually constrain it, and leave the team with a clearer path and better working software.",
    approach: ["Map product goals against the current architecture, delivery process, and operational constraints.", "Separate reversible experiments from structural decisions that deserve deeper care.", "Work alongside the team on critical paths so recommendations are tested against reality."],
    evidence: [
      { title: "Modernization", detail: "Incremental rewrites that protect delivery while replacing brittle foundations." },
      { title: "Architecture", detail: "System boundaries and technical decisions tied directly to product consequences." },
      { title: "Delivery", detail: "Hands-on debugging, implementation, and team enablement through difficult builds." },
    ],
    closing: "The aim is not dependence on a consultant. It is a system and team that can move with more confidence.",
  },
  {
    slug: "fractional-cto", number: "04", title: "Fractional CTO",
    summary: "Hands-on technical stewardship for startups and mission-driven organizations that need senior judgment without a full-time executive hire.",
    premise: "Ahmed is currently fractional CTO at Elevate Impact, working with cross-functional teams through rewrites, pivots, and changing product landscapes. The role stays close to the code and the product: clarifying tradeoffs, unblocking delivery, and helping the technical system change at the same pace as the organization around it.",
    approach: ["Translate product shifts into an executable technical sequence without freezing ongoing delivery.", "Pair with design, product, engineering, and domain specialists on the decisions between disciplines.", "Contribute architecture and production code where hands-on work creates the clearest path forward."],
    evidence: [
      { title: "Elevate Impact", detail: "Current fractional CTO practice across cross-functional delivery, platform rewrites, pivots, and an evolving product landscape." },
      { title: "Azoa", detail: "A living system for autonomous zones of action, developed across product and technical boundaries.", href: "/work/azoa" },
      { title: "NEOS", detail: "A platform shaped through distributed architecture, interface systems, and practical implementation.", href: "/work/neos" },
    ],
    closing: "This is senior technical judgment expressed through the work itself - practical, collaborative, and available at the moment it matters.",
  },
];

export function getPractice(slug: string) { return practices.find((practice) => practice.slug === slug); }
