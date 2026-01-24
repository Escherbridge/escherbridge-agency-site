import type { Metadata } from "next";
import { fontDisplay, fontHeading, fontBody, fontMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Escherbridge | Software Consultancy",
    template: "%s | Escherbridge",
  },
  description:
    "Software development, architecture, and fractional CTO services. Building bridges between vision and code.",
  keywords: [
    "software consultancy",
    "fractional CTO",
    "software architecture",
    "Next.js development",
    "AI development",
    "healthcare technology",
  ],
  authors: [{ name: "Ahmed Zaher" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Escherbridge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
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
