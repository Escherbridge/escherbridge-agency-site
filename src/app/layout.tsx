import type { Metadata } from "next";
import { fontDisplay, fontHeading, fontBody, fontMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://escherbridge.com"),
  title: {
    default: "Escherbridge | Software Consultancy",
    template: "%s | Escherbridge",
  },
  description:
    "Ahmed Zaher's independent software studio for AI systems, spatial computing, distributed architecture, and distinctive digital products.",
  keywords: [
    "software consultancy",
    "fractional CTO",
    "software architecture",
    "Next.js development",
    "AI development",
    "healthcare technology",
  ],
  authors: [{ name: "Ahmed Zaher" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Escher",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Escherbridge",
    title: "Escherbridge — Systems for strange loops",
    description: "Independent product engineering by Ahmed Zaher.",
    images: [{ url: "/images/escherbridge-recursive-infrastructure.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/escherbridge-recursive-infrastructure.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontHeading.variable} ${fontBody.variable} ${fontMono.variable} dark`}
    >
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
}
