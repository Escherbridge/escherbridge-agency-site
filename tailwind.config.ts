import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0a0a",
          secondary: "#141414",
          elevated: "#1a1a1a",
        },
        foreground: {
          DEFAULT: "#fafafa",
          muted: "#a1a1a1",
          subtle: "#71717a",
        },
        accent: {
          DEFAULT: "#ffffff",
          muted: "#d4d4d8",
        },
        border: {
          DEFAULT: "#27272a",
          harsh: "#ffffff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-xl": ["2.5rem", { lineHeight: "1.2" }],
        "heading-lg": ["2rem", { lineHeight: "1.25" }],
        "heading-md": ["1.5rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "grid-1": "0.5rem",
        "grid-2": "1rem",
        "grid-3": "1.5rem",
        "grid-4": "2rem",
        "grid-6": "3rem",
        "grid-8": "4rem",
        "grid-12": "6rem",
        "grid-16": "8rem",
      },
      borderWidth: {
        "3": "3px",
        "4": "4px",
        "6": "6px",
      },
      boxShadow: {
        "brutal-sm": "2px 2px 0px 0px rgba(255,255,255,1)",
        brutal: "4px 4px 0px 0px rgba(255,255,255,1)",
        "brutal-lg": "6px 6px 0px 0px rgba(255,255,255,1)",
        "brutal-xl": "8px 8px 0px 0px rgba(255,255,255,1)",
      },
      animation: {
        "draw-path": "drawPath 2s ease-in-out forwards",
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        drawPath: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
