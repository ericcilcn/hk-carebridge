# Design QA

## Evidence

- Source visual truth:
  - `../moodboards/quiet-clinical-editorial/generated/55e1cb5227854cb30dbbb4f708484461.png`
  - `../moodboards/quiet-clinical-editorial/generated/35eae4df0ba8c3b1369a01d13a162e80.png`
  - `../moodboards/quiet-clinical-editorial/generated/ca2c6d04bbf3394d13e97b654f904231.png`
  - `../moodboards/quiet-clinical-editorial/generated/38a0afb8075b4dcf4e76bbbc4d71f434.png`
  - `../moodboards/quiet-clinical-editorial/generated/279255d1e43015ec958fc99e7544ab3e.png`
- Full-view comparison: `qa/source-vs-implementation.png`
- Implementation screenshot: `qa/home-desktop-final.png`
- Mobile screenshot: `qa/home-mobile-final.png`
- Desktop viewport: 1280 × 720, homepage, navigation closed.
- Mobile viewport: 390 × 844, homepage, navigation closed; `qa/home-mobile-menu.png` verifies open state.

## Full-view comparison evidence

The combined comparison places the five selected source images directly above the rendered homepage. The implementation carries the same warm ivory paper, quiet charcoal, restrained teal, translucent archive layers, scientific microtexture, caregiving context and precision-light motif. All five supplied raster assets are used directly; none were replaced by CSS art, placeholder imagery or custom SVG illustrations.

Focused region comparison was not required because the source is a five-image moodboard rather than an exact screen mockup. The 1280 × 720 homepage capture makes the key typography, image crop, header, CTAs, borders and hero spacing legible in one view; the mobile capture separately verifies responsive hierarchy.

## Required fidelity surfaces

- Fonts and typography: Songti/PingFang system stacks give the selected Chinese editorial tone without a remote font dependency. Display and body scales, line heights and tracking remain distinct and readable at both viewports; no clipping or unintended truncation was found.
- Spacing and layout rhythm: desktop uses a measured two-column editorial hero and large section spacing; mobile collapses to one column with 20 px edges. Browser measurement reports `scrollWidth === innerWidth` at 390 px, so no horizontal overflow remains.
- Colors and tokens: warm paper `#f7f3eb`, charcoal `#202a29`, muted teal `#4f8580`, and restrained coral `#c98e80` map to the selected images. Contrast is adequate for primary text, controls and focus indicators.
- Image quality and asset fidelity: selected 576 × 720 images are used at appropriate aspect ratios with `object-fit: cover` only where a full-bleed content card requires it. The hero keeps the original archive and microscopy subjects visible and sharp.
- Copy and content: copy is standalone, calm and service-oriented. The homepage presents one introduction followed by the four approved modules; medical context is carried by article sources and a single neutral footer note.
- Icons: Phosphor icons are used consistently for navigation, proof points, lists and actions; no text glyph or handcrafted SVG substitutes are present.
- States and interactions: category filter active state, mobile menu open/closed state and focus styling are included. The contact page uses the pending WeChat path without a demonstration form.
- Accessibility: semantic headings, landmarks, labels, alt text, skip link, focus outline, reduced-motion support and mobile tap targets are present.

## Comparison history

### Iteration 1

- [P2] Astro's development toolbar appeared over the bottom edge of the initial desktop and mobile captures.
- Fix: disabled the development toolbar in `astro.config.mjs`.
- Post-fix evidence: `qa/home-desktop-final.png` and `qa/home-mobile-final.png` show the clean interface with no development overlay.

## Findings

No actionable P0, P1 or P2 visual, responsive, interaction or accessibility differences remain relative to the selected moodboard direction.

## Follow-up polish

- [P3] Add the final WeChat name and QR code before public launch.
- [P3] Complete the final medical and editorial sign-off before public launch.

## Primary interactions tested

- Desktop navigation and route rendering.
- Drug category filter: selecting `免疫治疗` leaves only the matching card visible.
- Contact path: the pending WeChat state and privacy reminder remain visible.
- Mobile navigation: menu opens and all primary links remain reachable.
- Console: no errors or warnings in the final homepage and consultation checks.

final result: passed
