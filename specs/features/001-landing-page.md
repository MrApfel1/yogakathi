# 001 – Landing Page (One-Pager)

## Status
**IMPLEMENTIERT** – `index.html` im Projektstamm fertig (Stand: Mai 2025).

---

## Ziel
Vollständige One-Page-Website für Yoga Kathi. Eine einzelne `index.html` im Projektstamm,
alle Assets relativ verlinkt, kein Build-Tool, kein Framework.

**Tech-Stack:** HTML + Tailwind CSS CDN + Vanilla JavaScript.
Tailwind-Config (Farben, Fonts) direkt im `<script>`-Block im `<head>`.

---

## Sektionen & Inhalt

### `<header>` – Navigation
- `position: fixed`, `z-index: 50`, Hintergrund `#084A5E` (Tailwind: `bg-ocean`)
- Links: Logo `assets/logos/logo-1-white.png` (Höhe `h-9 md:h-11`)
- Rechts: Nav-Links `Über Kathi · Kurse · Kontakt` + Outline-Button „Buchen" → `#contact`
- Hover: Farbe wechselt zu `#C9A885` (`text-sand`), `.nav-link::after` Unterstrich animiert sich ein
- Header shrink on scroll: `py-4` → `py-2` + `shadow-lg` ab 72 px Scroll-Position
- Mobile (≤ 768 px): Hamburger-Menü (3 Bars, `b1/b2/b3`), animiert zu ×; `#mobile-nav` klappt auf (`max-height: 320px`)

### `<section id="hero">` – Hero mit Video-Hintergrund
- Fullscreen (`h-screen`), `bg-black`, Klasse `.grain` (Rauschtextur)
- `<video id="hero-video" autoplay muted loop playsinline poster="assets/photos/kathi-1.jpg">`
  - Quelle: `assets/videos/hero-1.mov` (MOV + MP4 dual-source vorbereitet)
  - Slow-Playback: `playbackRate = 0.75` via JS (`loadedmetadata` + `canplay`)
- Overlays:
  - `bg-gradient-to-br from-ocean/50 via-black/25 to-mauve/40`
  - `bg-gradient-to-t from-black/55 via-transparent to-transparent`
  - Radialer Sand-Glow im oberen Drittel
- Inhalt (zentriert, weiß), Einfahrt via `.hero-enter` → `.show` (gestaffelt via `transition-delay`):
  - `h-logo`: Logo `assets/logos/logo-1-white.png` (h-20 → h-28)
  - `h-pill`: Standort-Pill „Elemental Yoga & Breathwork · Wien"
  - `h-headline`: H1 Cormorant 300, „Finde deine *innere Mitte*"
  - `h-sub`: Tagline (Kalam) „Flow from the Heart" – bekommt nach 2,8 s Klasse `.breath` (CSS @keyframes)
  - `h-cta`: 2 Buttons – „Kurse entdecken" (sand, → `#courses`) + „Über Kathi" (outline, → `#about`)
- Scroll-Indikator: „scroll" (Kalam) + Chevron-Icon, `.float-down` Animation

### SVG-Wellentrenner
Zwischen About und Courses: `<div class="relative h-20 bg-warm">` mit eingebettetem SVG-Path.
Dekoratives Leaf-Icon zentriert.

### `<section id="about">` – Über Kathi
- Hintergrund `bg-warm` (`#FAF6F0`)
- 2-Spalten-Grid `md:grid-cols-[420px_1fr]`, bei Mobile einspaltig
- Links (`data-anim="left"`):
  - Portrait `assets/photos/kathi-1.jpg`, Klasse `.organic` (bilobaler border-radius)
  - Float-Card unten rechts: „7+ Jahre Erfahrung"
  - Clay-Blur-Halo im Hintergrund
- Rechts (`data-anim="right"`):
  - Overline (Kalam, Mauve): „Über mich" mit `.overline`-Klasse (Linien links/rechts)
  - H2 (Cormorant 300): „Hallo, ich bin *Kathi*"
  - 2 Absätze Fließtext: Erwähnung Elemental Yoga Flows + Elemental Breathing
  - Credentials-Grid 2×2 (ohne eigenen `data-anim`, wird mit Parent animiert):
    `200h Yoga Ausbildung · ∞ Breathwork Zert. · seit 2018 Im Flow · Wien Österreich`
  - CTA-Link → `#contact`: „Schreib mir eine Nachricht →"

### `<section id="courses">` – Kursangebot & Stundenplan
- Hintergrund `bg-cream` (`#F9FBF2`)
- Section-Header (`data-anim="up"`): Overline + H2 „Was ich anbiete"

  | Card | Foto | Titel | Tag | Link |
  |------|------|-------|-----|------|
  | 1 | `kathi-2.jpg` | Elemental Yoga Flows | Yoga | Zum Stundenplan → `#stundenplan` |
  | 2 | `kathi-3.jpg` | Elemental Breathing | Breathwork | Mehr erfahren → `#stundenplan` |
  | 3 | `kathi-4.jpg` | Workshops & Retreats | Workshops | Termine anfragen → `#contact` |

  Karten: hover scale-105 auf Bild + `-translate-y-2` auf Card. `data-delay`: 0 / 150 / 300 ms.

- Unter den Cards: Eversports-Container (`id="stundenplan"`)
  - Weißes Card, `rounded-2xl`, `p-8 md:p-12`
  - H3: „Stundenplan & Buchung" + Script-Subtitle
  - `<div id="eversports-widget">` als Platzhalter, `min-h-96`, zentrierter Placeholder-Text

### Quote Stripe (kein ID-Anker)
- Hintergrund `bg-ocean`, Klasse `.grain`
- Blur-Halos Mauve (links oben) + Sky (rechts unten)
- Blockzitat: „Atem ist Leben. Wenn wir lernen, bewusst zu atmen, lernen wir, bewusst zu leben."
- Attribution: „— Kathi K."

### `<section id="contact">` – Kontakt
- Hintergrund: `linear-gradient(140deg, #6B4E71 0%, #084A5E 100%)`, Klasse `.grain`
- Section-Header (`data-anim="up"`): Script-Overline „Lass uns verbinden" + H2 „Ich freue mich *von dir zu hören*"
- 2-Spalten-Grid, Mobile einspaltig:
  - **Links** (`data-anim="left"`) – Kontaktinfos mit Icon-Kreisen (`bg-white/10`):
    - Email: `hello@yogakathi.at`
    - Standort: Wien, Österreich
    - Instagram: `@yogakathi`
    - Zitatblock mit Script-Font
  - **Rechts** (`data-anim="right"`) – Formular (Glassmorphism: `bg-white/10 border-white/20 backdrop-blur-sm`):
    - Felder: Name, Email, Nachricht (Textarea)
    - Submit-Button: `bg-sand text-ocean`, bei Erfolg: „Gesendet ✓" für 3 s, dann Reset

### `<footer>` – Footer
- Hintergrund `bg-ocean`, Text `text-cream`
- 3-Spalten-Grid:
  - Logo + Tagline „Elemental Yoga & Breathwork · Wien, Österreich"
  - Links: Über Kathi · Kurse · Kontakt · Impressum (#) · Datenschutz (#)
  - Social: Instagram + Email als Rund-Icons (`hover:bg-mauve`)
- Copyright-Zeile unten: `border-t border-white/10`, `text-cream/30`

---

## Technische Anforderungen

| Thema | Entscheidung |
|-------|-------------|
| Styling | Tailwind CSS CDN (`cdn.tailwindcss.com`) mit `tailwind.config` im `<script>` |
| Fonts | Google Fonts CDN: Cormorant, Montserrat, Kalam |
| Lokale Fonts | `assets/fonts/` (HarlowDuoSerif.otf, Montserrat-Bold/Regular.ttf) – derzeit noch nicht per `@font-face` in `index.html` eingebunden |
| Scroll-Animation | `IntersectionObserver`, `[data-anim]` → `.visible`, `data-delay` in ms |
| Hero-Einfahrt | `.hero-enter` + Staggered `transition-delay` via Inline-Style |
| Smooth Scroll | JS-Handler `a[href^="#"]` mit 80 px Offset für fixed Header |
| Responsive | Breakpoint `md:` (768 px), Hamburger-Nav, einspaltige Layouts |
| Video | `playbackRate = 0.75`; MOV-Format, MP4-Slot vorbereitet |
| Custom Cursor | Dot + elastischer Ring (rAF, Lerp 0.12); `* { cursor: none }` |
| Eversports | Platzhalter-DIV `id="eversports-widget"` – echter Embed-Code folgt |
| Impressum/Datenschutz | Leere `#`-Links im Footer, keine eigenen Seiten |

---

## Asset-Mapping

```
assets/logos/logo-1-white.png   → Header + Hero
assets/photos/kathi-1.jpg       → About-Portrait + Hero-Video-Poster-Fallback
assets/photos/kathi-2.jpg       → Yoga-Card
assets/photos/kathi-3.jpg       → Breathwork-Card
assets/photos/kathi-4.jpg       → Workshops-Card
assets/videos/hero-1.mov        → Hero-Video (+ MP4-Slot vorbereitet)
```

---

## Bekannte offene Punkte

- [ ] Hero-Video `hero-1.mov` → `.mp4` konvertieren (H.264) für Chrome/Windows
- [ ] Eversports-Embed-Code einfügen (`#eversports-widget`)
- [ ] Impressum & Datenschutz als eigene Seiten (→ Feature 002)
- [ ] Lokale Fonts (`HarlowDuoSerif.otf`) via `@font-face` registrieren, falls gewünscht
- [ ] Icons (`icon-01.png … icon-22.png`) in Sektion einbauen, z. B. als Credentials-Symbole

---

## Abgrenzung (Out of Scope)

- Kein CMS, kein Backend
- Keine externe Animation-Library
- Keine Blog-Sektion
- Keine mehrsprachige Version
