---
name: "Yoga Kathi"
description: "A contemporary botanical field notebook for elemental Yoga and Breathwork in Vienna."
colors:
  ocean-ink: "#084A5E"
  ocean-hover: "#0B5A70"
  ocean-muted: "#416C78"
  placeholder-ink: "#496F79"
  cream-ground: "#F9FBF2"
  archival-paper: "#F9F7F3"
  warm-paper: "#FAF6F0"
  dusty-sky: "#7796CB"
  dark-mauve: "#6B4E71"
  warm-sand: "#C9A885"
  light-clay: "#E8D5C4"
  archival-rule: "rgba(8, 74, 94, 0.22)"
typography:
  display:
    fontFamily: "Cormorant, Georgia, serif"
    fontSize: "clamp(4.4rem, 7vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Cormorant, Georgia, serif"
    fontSize: "clamp(3rem, 5vw, 5.25rem)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Cormorant, Georgia, serif"
    fontSize: "clamp(2rem, 3vw, 3rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.16em"
  script:
    fontFamily: "Kalam, cursive"
    fontSize: "clamp(1.25rem, 2vw, 1.65rem)"
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  square: "0px"
  seal: "50%"
spacing:
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  section: "clamp(5.5rem, 9vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.ocean-ink}"
    textColor: "{colors.cream-ground}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.5rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ocean-hover}"
    textColor: "{colors.cream-ground}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.5rem"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ocean-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.5rem"
    height: "48px"
  schedule-filter-active:
    backgroundColor: "{colors.ocean-ink}"
    textColor: "{colors.cream-ground}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.6rem 1rem"
    height: "44px"
  text-field:
    backgroundColor: "transparent"
    textColor: "{colors.ocean-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0.75rem 0"
    height: "48px"
  element-plate:
    backgroundColor: "{colors.archival-paper}"
    textColor: "{colors.ocean-ink}"
    rounded: "{rounded.square}"
    width: "100%"
---

# Design System: Yoga Kathi

## Overview

**Creative North Star: "The Botanical Element Atlas"**

Yoga Kathi is presented as a quiet elemental field notebook at dusk: a continuous deep-ocean canvas, cream editorial paper islands, authentic photography, generous negative space, and materially distinct element studies. The system is cultivated rather than rustic, editorial rather than ornamental, and spacious enough for the visitor to understand Yoga, Breathwork, schedule, and booking without visual competition.

The material language carries the emotion. Paper grain, deckled photographic windows, archival rules, taped notes, slight print rotation, and five analog collage plates create tactility while semantic HTML and direct calls to action keep the experience functional. Ocean ink remains the single dominant interface voice; muted sand, clay, dusty blue, and mauve live mainly inside collage material or quiet supporting surfaces.

**Key Characteristics:**

- Deep Ocean page ground with restrained paper grain and slightly lighter blue chapter shifts.
- Cream typography, controls, one-pixel rules, and focus treatment on the blue canvas; Ocean ink returns inside cream paper islands.
- Elegant narrow serif display type paired with compact uppercase sans-serif UI labels.
- Authentic Kathi photography presented as irregular archival prints, never generic wellness stock.
- Five separately authored material plates for Erde, Wasser, Feuer, Luft, and Äther.
- Generous negative space, a clear reading path, and quiet purposeful motion.

## Colors

The palette behaves like ink and natural material on paper: ocean provides structure and action; creams provide atmosphere; the remaining brand hues are rare, tactile accents rather than competing interface colors.

### Primary

- **Deep Ocean Ink** (`ocean-ink`): the dominant canvas plus the text, rule, CTA, icon, selection, scrollbar, and focus color inside cream paper islands.
- **Living Ocean** (`ocean-hover`): the slightly brighter hover state reserved for filled ocean controls.
- **Weathered Ocean** (`ocean-muted`): secondary copy and the handwritten hero accent where full ocean would feel too formal.

### Secondary

- **Dusty Sky** (`dusty-sky`): a supporting blue held mainly inside analog collage material.
- **Dark Mauve** (`dark-mauve`): a restrained organic accent held mainly inside tactile artwork.
- **Warm Sand** (`warm-sand`): tape, warm paper details, and sparse highlights.

### Tertiary

- **Light Clay** (`light-clay`): soft material backing and the torn quotation strip.

### Neutral

- **Cream Ground** (`cream-ground`): the normative text and control color on Ocean plus the surface color of editorial paper islands.
- **Archival Paper** (`archival-paper`): photo mats, ledger sheets, notebook pages, and pinned notes.
- **Warm Paper** (`warm-paper`): subtle chapter shifts behind the notebook and element atlas.
- **Readable Placeholder Ink** (`placeholder-ink`): form placeholder text chosen to stay legible on cream.
- **Archival Rule** (`archival-rule`): one-pixel dividers, borders, ledger rows, and form rules.

**The One-Ink Rule.** Cream communicates on the Ocean canvas and Ocean communicates inside cream paper; supporting hues may enrich materials but must not create a second CTA hierarchy.

**The Paper, Not White Rule.** Use cream and archival paper surfaces; stark white is foreign to this world.

## Typography

**Display Font:** Cormorant (with Georgia and serif fallbacks)
**Body Font:** Montserrat (local Regular and Bold files, with Arial and sans-serif fallbacks)
**Script Font:** Kalam (with cursive fallback)

**Character:** Cormorant supplies an elegant, narrow editorial voice with quiet contrast; Montserrat makes actions, labels, and body content precise and contemporary. Kalam appears only as a handwritten human trace, never as a general heading face.

### Hierarchy

- **Display** (300, fluid hero scale, 0.94 line-height): the first-view headline; keep it restrained to roughly nine characters per line where the composition allows.
- **Headline** (300, fluid section scale, 0.98 line-height): section openings and major chapter titles with balanced wrapping.
- **Title** (400, fluid supporting scale, 1 line-height): offer and atlas titles; uppercase is appropriate for collected-work labels.
- **Body** (400, base reading size, 1.7 line-height): explanatory copy, generally limited to 44–68 characters per line depending on context.
- **Label** (600, compact size, 0.16em tracking, uppercase): navigation, buttons, filters, form labels, stamps, and metadata.
- **Script** (300, fluid accent scale, 1.3 line-height): “Flow from the Heart” and similarly rare personal annotations only.

**The Three-Voice Rule.** Serif tells the story, sans-serif enables action, and script adds one personal note; never let the three compete in the same hierarchy.

**The Air Around Type Rule.** Large serif type earns presence through negative space, not heavy weight, outline effects, or decorative gradients.

## Layout

The desktop shell is capped at 1180px with 24px gutters; primary sections use a fluid vertical rhythm that grows from 5.5rem to 9rem. The fixed header begins at 96px and compacts to 78px after scrolling. Desktop navigation uses a three-column centered-logo composition, and the hero, notebook, offer, contact, and footer spreads use intentional asymmetry rather than repeated card grids.

At 1060px, navigation spacing tightens, the hero columns rebalance, and the five-element atlas becomes a three-column sequence with controlled vertical offsets. Below 768px, the header becomes 76px tall, the shell uses 16px gutters, and every editorial spread becomes a single-column field-notebook chapter. Hero actions become full-width up to 320px, element plates cap at 390px, the contact form stacks, and the centered logo remains the anchor of the compact mobile header.

Decorative depth comes first from torn Ocean paper, authentic photography, and the five element studies. Selected element plates may reappear only as very low-opacity, partially off-canvas background echoes. Two verified floral cutouts—an open/half-open white peony and an open cream lotus—may punctuate outer edges at modest scale; they never form clusters or carry the composition. The hero uses two diagonally related Ocean-paper corners plus one peony and one lotus. Photo crops are art-directed per asset and must not be normalized blindly: hero photography favors the center at roughly 50–52%, portrait photography favors Kathi's face, and offer crops preserve the gesture of each practice.

**The Chapter Rule.** Desktop spreads may overlap and stagger, but mobile always resolves them into one clear reading column.

**The Protected Content Rule.** Botanical fragments never cover copy, faces, controls, schedule content, or focus indicators.

## Elevation & Depth

Depth is a hybrid of tonal paper layering and diffuse ocean-tinted shadows. Large paper objects may float softly, but interface controls remain flat and legible. Deckled silhouettes use `clip-path` plus low-opacity `drop-shadow`; notebook, print, atlas, and pinned-note surfaces use broad shadows between 6% and 13% ocean opacity. There are no glass panels, gradients, glossy highlights, or hard black shadows.

### Shadow Vocabulary

- **Header Lift** (`0 12px 32px rgba(8, 74, 94, 0.06)`): appears only when the fixed header compacts after scroll.
- **Archival Print** (`0 16px 42px rgba(8, 74, 94, 0.12)`): for small physical photo prints.
- **Atlas Plate** (`0 18px 44px rgba(8, 74, 94, 0.10)`): for the five element studies.
- **Pinned Note** (`0 22px 55px rgba(8, 74, 94, 0.10)`): for the contact note.
- **Open Notebook** (`0 30px 80px rgba(8, 74, 94, 0.10)`): the strongest depth level and reserved for the large About spread.

**The Paper-First Rule.** Establish separation through paper tone, rules, clipping, and spacing before adding shadow.

**The Ocean Shadow Rule.** All shadows inherit the ocean hue at low opacity; neutral black shadows break the material system.

## Shapes

Controls are square and archival: buttons, filter chips, selects, and form fields use zero corner radius. Organic form belongs to physical media instead—dense asymmetric polygon clips create hand-torn photo and quotation edges, while slight rotations suggest placed prints. The circular 124px seal is the one deliberate geometric exception and acts as a stamp, not a rounded-card precedent.

Rules are fine and quiet: one-pixel ocean lines at low opacity divide credentials, schedule rows, fields, navigation, and footer metadata. Photo and artwork aspect ratios remain predominantly 4:5 to reinforce the collected-plate rhythm.

**The Material Owns Irregularity Rule.** Tear, rotate, and clip paper or photography; keep controls geometrically exact.

**The No Rounded Cards Rule.** Do not introduce pill containers or repeated soft-radius cards. The circle belongs only to the seal and true circular indicators.

## Components

### Buttons

Actions are rectangular ocean paper labels: direct, compact, and tactile without looking like app chrome.

- **Shape:** square corners, a 1px ocean border, and a minimum 48px target height.
- **Primary:** cream label text on ocean ink with 0.85rem × 1.5rem padding.
- **Secondary:** transparent paper with ocean text and border; hover inverts to ocean.
- **Hover / Focus:** hover lifts by 2px; filled controls shift to Living Ocean; keyboard focus is a 2px ocean outline with 4px offset.
- **Disabled / Submitted:** reduce opacity, prevent repeat submission, show “Gesendet ✓”, then restore after the existing three-second confirmation.

### Chips

Schedule category filters are square 44px-high archival labels. Unselected filters are transparent with a quiet rule; the selected state uses ocean fill, cream text, and `aria-pressed="true"`. They must retain the global visible focus outline.

### Cards / Containers

The system avoids generic cards. Its container vocabulary is material-specific: an open-paper notebook, irregular photo prints, 4:5 atlas plates, a ruled schedule ledger, a torn quote strip, and a taped contact note. Preserve each object's distinct silhouette and shadow role instead of collapsing them into one component shell.

### Inputs / Fields

Fields are ruled lines on paper, not boxes: transparent background, no radius, no side border, a single archival bottom rule, and at least 48px height. Labels use the uppercase sans-serif label voice; placeholders use Readable Placeholder Ink. Focus removes the native inner outline only after changing the bottom rule to full ocean, while the global outer `:focus-visible` outline remains available.

Native `required`, email semantics, autocomplete, and vertical textarea resize are preserved. Future error and success copy should sit next to the field in readable ocean text and must not rely on color alone.

### Navigation

Desktop navigation balances two link groups around the real Yoga Kathi logo. Links have 44px targets and animate a one-pixel ocean underline from left to right; the booking link is a filled ocean label. Mobile uses a 44px menu button, `aria-expanded`, `aria-controls`, `aria-hidden`, and `inert`, then reveals 48px-tall ruled links in one column. The skip link is always first in focus order and becomes visible when focused.

### Schedule Ledger

The Eversports surface is a quiet program sheet with category filters, a ruled month select, a constrained scroll region, tabular times, and full-width mobile booking actions. Loading, loaded, empty-filter, and network-error states are real product states and must remain designed, legible, and announced through the existing polite live region. Never replace them with invented schedule data.

### Element Atlas and Generated Materials

The five 4:5 element plates are a signature set and must remain separately authored: Earth uses roots, soil, stones, moss, and pressed leaf; Water uses cyan ink, ripples, translucent layers, and wet paper; Fire uses ochre pigment, ember, sparse burnt edges, and kinetic brushwork; Air uses seed heads, grasses, lifted paper, and open space; Ether uses a luminous veil, concentric line, suspended fragment, and negative field.

The shipping generated inventory is the five `element-*.png` plates, `ocean-paper-wash.png`, `cream-paper-grain.png`, `botanical-peony-white-living-v2.png`, and `botanical-lotus-open-living-v2.png`. Earlier wildflower, eucalyptus, lotus-bud, large garden compositions, and all other botanical explorations remain provenance-only after the third 2026-09-03 visual review. `assets/textures/manifest.json` is the canonical provenance ledger: it records the OpenAI built-in image generator, generation date, dimensions, formats, transparency/post-processing, SHA-256 hashes, approved style reference, and exact prompt sidecars under `assets/textures/prompts/`. Every generated raster added later must receive the same manifest entry and prompt provenance before shipping.

Motion is quiet and reversible. Hero copy and photography enter with a 900ms blur/fade/rise sequence; navigation and button states resolve in roughly 180–350ms; atlas artwork scales only to 1.025 over 700ms. Under `prefers-reduced-motion: reduce`, entrance states are immediately visible, smooth scrolling becomes automatic, and animation/transition duration is effectively removed.

## Do's and Don'ts

### Do:

- **Do** use authentic Kathi photography and preserve subject identity, faces, and meaningful body gestures.
- **Do** keep Cream Ground and Deep Ocean Ink as the dominant visual pair.
- **Do** let negative space and cropped Ocean-paper fragments carry the framing; use only the three approved slender plants as secondary edge punctuation.
- **Do** treat the five element plates as one cohesive collection with materially distinct subjects.
- **Do** keep primary touch targets at least 44px high and booking buttons at least 48px high.
- **Do** preserve semantic structure, native form semantics, visible keyboard focus, the skip link, polite schedule announcements, and the complete reduced-motion state.
- **Do** keep the approved direction contract key `user-pinned-botanical-atlas-20260828` with the surface until a user explicitly replaces the world.
- **Do** update `assets/textures/manifest.json` and add an exact prompt sidecar whenever a generated shipping raster changes.

### Don't:

- **Don't** introduce gradients, glassmorphism, glossy UI, generic leaf-pattern wallpaper, or a repeated rounded-card stack.
- **Don't** use stark white or hard black as default paper, text, rule, or shadow colors.
- **Don't** let botanical decoration obscure text, Kathi's face, controls, schedule data, or focus rings.
- **Don't** introduce layered garden frames, bushy plant clusters, visible alpha checkerboards, or botanical overgrowth.
- **Don't** use script type for navigation, body copy, form labels, or multiple competing accents.
- **Don't** invent testimonials, prices, dates, partners, schedule entries, people, or performance claims.
- **Don't** replace the real logo, approved photography, Eversports integration, contact behavior, or verified Yoga/Breathwork naming without explicit approval.
- **Don't** treat legal placeholders as finished pages; Impressum and Datenschutz remain unresolved product constraints.
