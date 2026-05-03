# Yoga Kathi – Projekt-Instruktionen für Claude / Codex

## Projektübersicht
One-Page-Website für **Kathi K.**, Yoga-Lehrerin und Breathwork-Teacherin in Wien.
Tech-Stack: **HTML · Tailwind CSS CDN · Vanilla JavaScript** (kein Framework, kein Build-Tool).
Ziel: `index.html` im Projektstamm, alle Assets relativ verlinkt.

## Implementierungsstatus
- `index.html` **fertig implementiert** (Stand: Mai 2025)
- Tailwind-Config mit Brand-Farben und -Fonts direkt im `<script>`-Block
- Alle Sektionen vorhanden: Header → Hero → About → Courses → Quote-Stripe → Contact → Footer
- Custom Cursor (Dot + elastischer Ring via `requestAnimationFrame`)
- Hero-Video Slow-Playback (`playbackRate = 0.75`)
- Scroll-Animation-System via `IntersectionObserver` (`data-anim` + `data-delay`)
- Grain-Texture-Overlay via inline SVG Data-URL
- Breathing-Animation auf Hero-Tagline (startet 2,8 s nach Seitenload)

## Spec-Workflow
Specs kommen nach `specs/features/NNN-<name>.md`.
Vor jeder Implementierung gilt: Spec schreiben → User bestätigt → Plan schreiben → umsetzen.

## Farbpalette

| Name          | Hex       | Verwendung                       |
|---------------|-----------|----------------------------------|
| Tiefer Ozean  | `#084A5E` | Header, Headlines, CTAs          |
| Cremeweiß     | `#F9FBF2` | Hintergründe (hell)              |
| Himmelblau    | `#7796CB` | Links, sekundäre Elemente        |
| Dunkles Mauve | `#6B4E71` | Akzente, Hover                   |
| Warmer Sand   | `#C9A885` | Buttons (sekundär), Highlights   |
| Heller Lehm   | `#E8D5C4` | Card-Bilder, Placeholder-Flächen |
| Weiches Taupe | `#A8927D` | Placeholder-Text                 |
| Warmes Weiß   | `#FAF6F0` | Section-Hintergründe             |
| Sanftes Blau  | `#9DADCE` | Breathwork-Akzente               |
| Helles Mauve  | `#8D7A8F` | Hover-Zustände sekundär          |

## Typografie

| Rolle         | Font                   | Gewicht / Größe          |
|---------------|------------------------|--------------------------|
| Display / H1  | Cormorant              | 300 · 56–72px            |
| H2 / H3       | Cormorant              | 300–400 · 32–48px        |
| Body          | Montserrat             | 400 · 16–18px            |
| Buttons / UI  | Montserrat             | 600 · 14px uppercase     |
| Handschrift   | Kalam                  | 400 · Akzente, Labels    |
| Lokal         | HarlowDuoSerif, Montserrat (Bold/Regular) in `assets/fonts/` |

Google Fonts CDN:
```
Cormorant:wght@300;400;500;600
Montserrat:wght@300;400;500;600;700
Kalam:wght@300;400;700
```

## Seitenstruktur (One-Pager)

```
<header>            Logo · Navigation (fixiert, bg-ocean #084A5E)
<section #hero>     Fullscreen-Video + Overlay + Tagline + 2 CTAs + Scroll-Indikator
<section #about>    Portrait (organische Form) · Bio · 2×2 Credentials-Grid · Link → Kontakt
<svg divider>       Kurventrennlinie warm → cream
<section #courses>  Section-Header · 3 Kurs-Cards · Eversports-Widget (#stundenplan)
<section quote>     Dunkle Ocean-Stripe mit Blockzitat (kein ID-Anker)
<section #contact>  Split: Kontaktinfos links · Glassmorphism-Formular rechts
<footer>            3-Spalten: Logo+Tagline · Links · Social+Email · Copyright
```

## Tailwind-Farb-Aliasse (in `tailwind.config`)

```js
ocean:  '#084A5E'   // Header, Headlines, CTAs
cream:  '#F9FBF2'   // Hintergründe hell
sky:    '#7796CB'   // Links, sekundäre Elemente
mauve:  '#6B4E71'   // Akzente, Overlines
sand:   '#C9A885'   // Buttons, Cursor, Highlights
clay:   '#E8D5C4'   // Card-Borders, Credential-BG, Blur-Halos
taupe:  '#A8927D'   // Body-Text, Placeholder
warm:   '#FAF6F0'   // About-BG, Widget-BG
```

## CSS-Patterns in `index.html`

| Pattern | Klasse / Selektor | Beschreibung |
|---------|-------------------|-------------|
| Scroll-Animation | `[data-anim="up|left|right|scale|fade"]` | IntersectionObserver → `.visible` |
| Verzögerung | `data-delay="150"` (ms) | setTimeout innerhalb des IO-Callbacks |
| Hero-Einfahrt | `.hero-enter` → `.show` | Beim `window load`-Event, gestaffelt |
| Atemanimation | `.breath` | CSS @keyframes, auf `#h-sub` nach 2,8 s |
| Overline | `.overline` | Flex mit `::before`/`::after` Linien |
| Grain-Textur | `.grain::after` | Inline SVG Data-URL, `opacity: 0.04` |
| Nav-Unterstrich | `.nav-link::after` | Width 0 → 100% on hover |
| Organische Form | `.organic` | Bilobaler `border-radius` für Portrait |

## Asset-Pfade

```
assets/
├── fonts/
│   ├── HarlowDuoSerif.otf
│   ├── Montserrat-Bold.ttf
│   └── Montserrat-Regular.ttf
├── logos/
│   ├── logo-1-blue.png      ← Für helle Hintergründe
│   ├── logo-1-white.png     ← Header + Hero (dunkle Hintergründe)
│   ├── logo-2-blue.png
│   └── logo-2-white.png
├── photos/
│   ├── kathi-1.jpg          ← Portrait (About + Hero-Poster-Fallback)
│   ├── kathi-2.jpg          ← Yoga-Card
│   ├── kathi-3.jpg          ← Breathwork-Card
│   ├── kathi-4.jpg          ← Workshops-Card
│   └── originals-heic/      ← HEIC-Originale (nicht für Web verwenden)
├── icons/
│   └── icon-01.png … icon-22.png   ← Branding-Icons (noch nicht in index.html eingesetzt)
└── videos/
    ├── hero-1.mov   ← Primäres Hero-Video (QuickTime MOV)
    └── hero-2.mov   ← Alternatives Hero-Video
```

> **Achtung macOS:** Das Dateisystem ist case-insensitiv. Im `assets/`-Ordner gibt es
> noch alte Groß-Verzeichnisse (`Colors/`, `Fonts/`, `Fotos/`, `Heic/`, `Logos/`, `Videos/`).
> Diese sind Überreste und können manuell gelöscht werden. Die korrekt referenzierten
> Pfade in `index.html` zeigen alle auf Kleinbuchstaben-Unterordner.

> **Hero-Video:** `hero-1.mov` ist QuickTime-Format. Für Chrome/Windows sollte es zu
> `.mp4` (H.264) konvertiert werden. In `index.html` sind beide `<source>`-Tags bereits
> vorbereitet – einfach die MP4-Datei hinzufügen und den Pfad anpassen.

## Design-Referenzen

```
design/
├── branding-kit.html       ← Vollständiges Branding-Kit (Farben, Type, Wireframes)
├── website-prototype.html  ← Fertiger One-Pager-Prototype
├── design-canvas.jsx       ← React-Komponente des Design-Canvas
└── reference/
    ├── branding-kit-colors.jpg  ← Original Farb-Referenzbild
    ├── branding-reference.jpg
    ├── reference-hero.png
    └── pasted-1.png
```

## Wichtige Hinweise

- **Eversports-Widget**: `<div id="eversports-widget">` ist Platzhalter – echten Embed-Code fügt Kathi später ein.
- **Wien**, nicht München – Kathi ist in Wien ansässig.
- Header: `position: fixed`, Smooth-Scroll-Offset = 80 px.
- Responsive Breakpoint: `max-width: 768px` (Tailwind `md:`).
- Form-Submit: Client-seitig, kein Backend. Button-Text wechselt zu „Gesendet ✓" für 3 s, dann Reset.
- Custom Cursor: `* { cursor: none; }` – bei Touch-Geräten stört das nicht (kein Hover-Event).
- Impressum/Datenschutz: Beide Links im Footer zeigen auf `#` – noch keine eigenen Seiten.
- Kurs-Titel in `index.html`: **Elemental Yoga Flows** und **Elemental Breathing** (nicht generische Namen).

## Specs

Feature-Specs liegen in `specs/features/NNN-<name>.md`.
Bei Feature-Arbeit: relevante Spec vollständig lesen, bevor du Code schreibst.
Bei neuem Feature: erst Spec erstellen, Freigabe abwarten, dann implementieren.
