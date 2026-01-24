import { Space_Grotesk, Roboto, Geist, Geist_Mono } from "next/font/google";

export const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700"],
});

export const fontHeading = Geist({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "700", "900"],
});

export const fontBody = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
