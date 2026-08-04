---
version: "ui2web-website-clone"
name: "Apple"
description: "Luminous, neutral-dominant palette anchored in off-white and black, with a single accent blue for interactive moments. Display-weight sans-serif drives massive headlines; generous whitespace and deliberate color rationing create hierarchy through restraint. Smooth transitions on color and opacity preserve fluidity across product-image grids and content bands."
colors:
  primary: "#0071E3"
  background: "#F5F5F7"
  surface: "#FFFFFF"
  text-primary: "#1D1D1F"
  text-secondary: "#F5F5F7"
  border: "#D2D2D7"
typography:
  display-lg:
    fontFamily: "SF Pro Text"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: "1.47"
    letterSpacing: "-0.4px"
  headline-md:
    fontFamily: "SF Pro Display"
    fontSize: "56px"
    fontWeight: 600
    lineHeight: "1.07"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "SF Pro Display"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: "1.14"
  label-md:
    fontFamily: "SF Pro Display"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "1.1"
spacing:
  base: "12px"; gap: "12px"; card-padding: "12px"; section-padding: "58px"
rounded:
  control: "980px"; card: "8px"; pill: "980px"
components:
  card: { background: "#FFFFFF", radius: "8px" }
  button: { background: "#0071E3", radius: "980px" }
---
# Apple

## Overview

The visual system is built on extreme economy: a near-monochrome foundation of off-white (#F5F5F7, ~53% of interface area) and black text (#1D1D1F, ~41%) with a single, sparingly used accent blue (#0071E3, <1%). The design employs oversized, densely-weighted display typefaces to establish hierarchy through scale rather than color. Whitespace is generous and deliberate. Interactive elements—buttons, CTAs, navigation highlights—inherit the accent blue and are always fully rounded. Transitions are subtle (0.24–0.32s cubic-bezier ease) and apply primarily to color and opacity, never disrupting the perception of content as static and refined.

## Composition

The first screen presents a centered, vertical hierarchy: a tight navigation bar (dark text on light background) anchoring a superscript informational band (light gray, sans icon emphasis), then a hero section with a massive centered headline (56px, 600-weight), supporting paragraph text (28px, 400-weight), and a single full-rounded primary CTA button below. This is followed by a full-width hero image band. Below the fold, the layout shifts to a 2-column asymmetric grid: a large product image on the left (1/3 width, white surface) paired with a full-bleed dark feature band on the right (2/3 width, black background with white headings and blue CTAs side-by-side). The rationing choice is deliberate—the single dark band contrasts sharply with the predominantly light sections, forcing focal attention rather than distributing it evenly. This rejects a modular checkerboard rhythm in favor of a statement-via-absence approach.

## Colors

**Primary (#0071E3):** The accent appears exclusively in interactive moments—the primary CTA pill in the hero, secondary "Learn more" links paired with outlined secondary buttons, and any form of active state. It occupies ~0.2% of the visible interface, making every blue moment intentional and scannable. Contrast ratio against both light and dark backgrounds exceeds WCAG AAA.

**Background (#F5F5F7):** Covers ~53% of the layout (page ground, most section fills, card interiors). It is not pure white; the warm gray tone reduces contrast harshness and softens the black text, making lengthy reads comfortable.

**Surface (#FFFFFF):** Reserved for elevated cards, modals, and content containers that need to float above the background. Sparingly used (< 1% coverage).

**Text-primary (#1D1D1F):** Near-black; deployed on light backgrounds for headlines, body copy, and labels. Provides maximum legibility without pure #000 fatigue.

**Text-secondary (#F5F5F7):** The background color itself, used as text on dark sections (dark band scenarios), creating the inverse of the primary pattern.

**Border (#D2D2D7):** Light gray; used in minimalist dividers, secondary button outlines, and subtle separators between sections. Never dominates; always recessive.

The restraint is the point: by leaving ~99% of the interface colorless, the 0.2% of blue reads as a command, not a decoration. Dark bands are reserved for feature announcements, creating a visual "punctuation mark" that breaks the monotone and signals content importance.

## Typography

**SF Pro Display** is the display family: used at 56px (600-weight) for headlines, 40px (600-weight) for labels, and 28px (400-weight) for body copy. The 600-weight carries the visual load; the 400-weight body is surprisingly large, reducing the density that would come from traditional 16–18px bodies and making the layout feel expansive.

**SF Pro Text** appears in smaller contexts (34px, 600-weight for secondary displays), maintaining consistency while signaling a slight demotion in hierarchy. Tracking is tight (-0.3 to -0.4px), pulling letters closer and intensifying the impact of the oversized forms.

The pairing avoids any serif or decorative typeface; this enforces neutrality and allows the scale shifts alone to communicate structure.

## Layout

**Spacing rhythm:** The base unit is 12px, repeated consistently across gaps, card padding, and section margins. This tightness inside content containers (cards, pills) contrasts with the 58px section padding (nearly 5× the base unit), creating a macro/micro visual breathing that guides the eye both inward and outward.

**Grid direction:** Primarily vertical (full-width sections stacked), with occasional 2-column asymmetric product grids (left image ~33%, right text/feature ~67%). The asymmetry avoids visual monotony; neither side is equal, forcing a reading order (image first, then text).

**Max-width:** No fixed constraint visible; sections span edge-to-edge on desktop, with padding only at the edges of text/card containers. This maximizes the impact of photography and dark bands.

**Card density:** Low. Product cards sit in isolation with ample whitespace around them; no grid compression or masonry packing. This enforces the perception of each product as a singular focus, not a catalog item.

**Responsive stacking:** Not fully visible in the provided screenshots, but the structure implies that narrow viewports reflow the 2-column grids to single-column (image full-width, then text below), preserving the asymmetry principle at smaller scales.

## Components

**Card:** Off-white background (#F5F5F7), 8px radius (subtle, not ornate), no border unless it is a secondary state (light gray #D2D2D7). Drop shadow is minimal or absent, preserving flatness.

**Button (primary):** Solid #0071E3, 980px radius (fully rounded pill), 56–60px height (computed from 34px text + padding). On hover, color shifts to #0066CC (a 2-step darker blue, animated at 0.32s cubic-bezier). On dark backgrounds, the blue is reinforced; on light backgrounds, it stands alone.

**Button (secondary/outlined):** Transparent background, #0071E3 or #2997FF text and 2px border, 980px radius. Interior spacing matches primary for size consistency. Hover inverts to a light fill (#F4F8FB, observed in the context of secondary states) or deepens the stroke color.

**Input/control radius:** 8px (card-like, small and recessive).

All buttons and interactive elements use the 0.24s opacity transition and 0.32s color transition (cubic-bezier(0.4, 0, 0.6, 1)) for smooth state changes.

## Motion

**Transitions applied:**
- **Color:** 0.32s cubic-bezier(0.4, 0, 0.6, 1) — used for button hover states, text color changes on interactive elements.
- **Opacity:** 0.24s cubic-bezier(0.4, 0, 0.6, 1) with 0.08s delay — applied to visibility toggles (show/hide, fade in/out).
- **Width/height:** 0.25s linear for container expansion; 1s ease-in-out for more involved layout reflows (padding changes, card resizes).

The easing is consistent: never a sharp snap, always a gentle deceleration that mirrors the refinement of the visual language. Motion is functional, not decorative; it confirms state changes without drawing attention to itself.

## Effects

**Photography dominates.** Large, edge-to-edge product images sit on white or light-gray grounds with no overlays or filters. The hero image is full-bleed, extending to the viewport edges.

**Gradient/atmospheric layers:** Minimal. Dark feature bands (#000000) are flat black with white text; no gradients. The only observed atmospheric element is the subtle background color (#F5F5F7) which, while technically a canvas layer, reads as a neutral ground rather than a designed effect.

**Drop shadows:** Either absent or extremely subtle on cards/buttons. Elevation is implied through color (dark vs. light) and spatial positioning (isolation), not shadow depth.

## Guardrails

- **Never use color outside the primary accent (#0071E3, #0066CC, #2997FF) for interactive elements.** All buttons, links, and active states must inherit the blue palette; secondary states may shift to outlined or opacity-reduced, but never to a different hue.
- **Preserve the 53/41 light/dark ratio.** Keep the background (#F5F5F7) as the dominant canvas. If adding new sections, default to light ground unless it is a feature announcement (dark band), in which case invert to black (#000000) and white text.
- **Maintain 980px radius on all pill-shaped controls.** This is the defining gesture of the button language; any deviation breaks the visual contract.
- **Never reduce text size below 28px for body copy or 34px for secondary headlines.** The oversized type is core to the hierarchy; shrinking it collapses the visual impact.
- **Keep transitions under 0.4s.** Motion should feel effortless, not sluggish or snappy. Stick to the provided cubic-bezier curves and delays.