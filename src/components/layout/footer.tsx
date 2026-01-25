import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/ahmedux" },
  { label: "GitHub", href: "https://github.com/JadeZaher" },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <Container>
        <div className="py-grid-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-grid-8">
            {/* Logo and tagline */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-grid-4">
                <Image
                  src="/LogoTransparentWhite.svg"
                  alt="Escherbridge"
                  width={32}
                  height={32}
                />
                <span className="font-display font-bold text-lg tracking-tight">
                  ESCHERBRIDGE
                </span>
              </Link>
              <p className="text-foreground-muted text-body-md max-w-sm">
                Building bridges between vision and code. Software consultancy
                specializing in architecture, development, and technical
                leadership.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-heading font-bold text-body-sm uppercase tracking-wider mb-grid-4">
                Navigation
              </h4>
              <ul className="space-y-grid-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground-muted hover:text-white transition-colors text-body-md"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-heading font-bold text-body-sm uppercase tracking-wider mb-grid-4">
                Connect
              </h4>
              <ul className="space-y-grid-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted hover:text-white transition-colors text-body-md"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-grid-12 pt-grid-6 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-grid-4">
              <p className="text-foreground-subtle text-body-sm">
                &copy; {new Date().getFullYear()} Escherbridge. All rights
                reserved.
              </p>
              <p className="text-foreground-subtle text-body-sm">
                Built with Next.js
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
