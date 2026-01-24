# Escherbridge Agency Site

A Swiss/brutalist dark-mode agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Swiss Design + Brutalist Aesthetics**: Clean grid layouts with bold typography and stark visual elements
- **MC Escher-Inspired Flourishes**: Animated arch patterns and tessellations
- **Markdown-Based CMS**: Add portfolio projects via markdown files
- **Contact Form**: Email notifications via Resend API
- **Railway Deployment Ready**: Docker configuration included

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── actions/            # Server Actions (contact form)
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # Base UI components
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections
│   └── escher/             # Decorative elements
└── lib/                    # Utilities and configurations

content/
└── projects/               # Markdown portfolio projects
```

## Adding Projects

Create a new markdown file in `content/projects/`:

```markdown
---
title: Project Name
tagline: Short description
description: Longer description...
technologies:
  - Next.js
  - TypeScript
url: https://example.com
image: /images/portfolio/project-image.png
featured: true
date: 2024-01-15
highlights:
  - Key achievement 1
  - Key achievement 2
---

## Full project description in markdown...
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Email notifications (Resend)
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=hello@escherbridge.com
```

## Deployment

### Railway

1. Push to GitHub
2. Connect repository in Railway
3. Set environment variables
4. Deploy

The included `railway.json` and `Dockerfile` handle the build configuration.

## Design Tokens

### Colors

- Background: `#0a0a0a`, `#141414`, `#1a1a1a`
- Foreground: `#fafafa`, `#a1a1a1`, `#71717a`
- Borders: `#ffffff` (harsh), `#27272a` (subtle)

### Typography

- Display: Space Grotesk (bold)
- Headings: Geist
- Body: Roboto

### Spacing

Based on 8px grid system: `grid-1` (8px) through `grid-16` (128px)

## License

Private - Escherbridge
