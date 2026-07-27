# EscherBridge Business Cards

Three vertical (portrait, exactly **2in × 3.5in**) card variants. Each is a fully
self-contained HTML file: inline brand SVG, raw-WebGL animated shader background,
zero external dependencies.

## Variants

| File | Name | Concept |
|---|---|---|
| `card-01-tessellate.html` | Tessellate | Animated rhombille tiling (Escher "cube illusion") on ink; sparse acid/lime accent cubes; paper type, left-aligned brutalist stack |
| `card-02-engraving.html` | Engraving | Drifting tri-lattice linework with an acid thread + recursive fine sub-lattice on paper; ink logo, centered composition |
| `card-03-recursion.html` | Recursion | Orbit-fold IFS (impossible-geometry recursion) in acid→lime depth bands on ink; acid frame rule, contact panel |

`index.html` — contact sheet embedding all three via iframes for one-shot printing.

## Design rationale

- Brand tokens lifted from the site (`app/globals.css`): ink `#0a0a08`, paper
  `#eeeae0`, acid `#e34b2f`, lime `#c7ff35`; Arial Black 900 display type,
  monospace uppercase micro-labels — same stack the site's fallbacks use.
- Each shader riffs on one facet of the Escher ethos: interlocking tessellation
  (01), engraved impossible linework (02), infinite recursion (03).
- Logo geometry is inlined from `assets/LogoTransparent{White,Black}.svg`.

## Print correctness

- Every card declares `@page { size: 2in 3.5in; margin: 0 }` and a fixed
  `2in × 3.5in` body — one exact page per card, no scaling needed.
- `print-color-adjust: exact` everywhere so backgrounds survive the print dialog
  (still enable **"Background graphics"** in Chrome's print dialog).
- `@media print` swaps the live WebGL canvas for a hand-tuned static CSS
  "first frame" (per-variant tessellation pattern), so cards print identically
  even with WebGL disabled; a `no-webgl` JS fallback covers screen too.

## Printing

1. Single card: open `card-0N-*.html` in Chrome → Print → enable *Background
   graphics* → paper size will read 2×3.5in → print at 100%.
2. All three at once: open `index.html` → Print (or the *Print sheet* button) →
   letter, 100% scale, background graphics on → cut along the dashed guides.
3. For a print shop: print to PDF from the same dialogs; dimensions are exact.

## Before real use

Replace the placeholder identity (`Ada Crossing`, `ada@escherbridge.com`,
`+1 (415) 555-0117`) in all three variant files — markup is plain HTML, one
`.content` block per card.
