# Yoga Kathi – Projekt-Instruktionen für Codex / Codex

## Projektübersicht
One-Page-Website für **Kathi K.**, Yoga-Lehrerin und Breathwork-Teacherin in Wien.
Tech-Stack: **HTML · Tailwind CSS CDN · Vanilla JavaScript** (kein Framework, kein Build-Tool).
Ziel: `index.html` im Projektstamm, alle Assets relativ verlinkt.

## Implementierungsstatus
- `index.html` **fertig implementiert** (Stand: Mai 2026)
- **Hero-Section wurde am 03.05.2026 von Antigravity redesigned:**
  - Altes Design (Querformat-Composite mit geblurrten Rändern) wurde verworfen.
  - Neues Design: **Split-Screen** (Desktop) / **Fullscreen-Video-Background** (Mobile).
  - Desktop: 50/50 Grid – Text links, Video rechts (edge-to-edge, bis zum Bildschirmrand).
  - Mobile: Hochformat-Video als Fullscreen-Hintergrund mit Text-Overlay.
  - Video wurde von 42 MB auf 4.9 MB komprimiert (`hero-1-720p-optimized.mp4`).
  - Separate HTML-Blöcke für Desktop und Mobile (`md:hidden` / `hidden md:grid`).
  - Entrance-Animationen für beide Varianten via JS (`DOMContentLoaded`).
- Git ist initialisiert, Branch: `main`
- Baseline-Commits:
  - `bdfb8ae` – `Initial website baseline`
  - `11e14c4` – `Ignore local browser diagnostics`
- Tailwind-Config mit Brand-Farben und -Fonts direkt im `<script>`-Block
- Alle Sektionen vorhanden: Header → Hero → About → Courses → Quote-Stripe → Contact → Footer
- Custom Cursor (Dot + elastischer Ring via `requestAnimationFrame`)
- Hero-Video Slow-Playback (`playbackRate = 0.75`)
- Scroll-Animation-System via `IntersectionObserver` (`data-anim` + `data-delay`)
- Grain-Texture-Overlay via inline SVG Data-URL
- Breathing-Animation auf Hero-Tagline (startet 2,8 s nach Seitenload)
- Verwendete Fotos wurden von großen PNG-Dateien auf optimierte JPEG-Dateien umgestellt (`assets/photos/kathi-1.jpg` bis `kathi-4.jpg`)

## Lokaler Start

Direktes Öffnen von `index.html` per Doppelklick kann in Chrome je nach Cache/`file://`-Kontext zu verwirrenden Asset-Problemen führen. Für Entwicklung und Prüfung die Seite über einen lokalen HTTP-Server öffnen:

```bash
python3 -m http.server 8000
```

Dann im Browser öffnen:

```text
http://127.0.0.1:8000/index.html
```

Bei der letzten Browser-Prüfung wurden die Logos und JPEG-Fotos über diesen lokalen Server mit HTTP `200` geladen. Playwright meldete nur `favicon.ico` als fehlend; das ist aktuell unkritisch.

> **Wichtig für weitere Arbeit:** Der Nutzer hat am 03.05.2026 ausdrücklich gesagt:
> **"Verwende bitte nicht mehr den Playwright CLI"**.
> Für visuelle Prüfung stattdessen echte Browseransicht manuell, `ffmpeg`-Frame-Exports,
> `ffprobe`, lokale Server-Requests oder andere vom Nutzer freigegebene Methoden verwenden.

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
│   ├── kathi-1.png … kathi-4.png  ← große Quell-PNGs, lokal behalten, nicht versionieren
│   └── originals-heic/      ← HEIC-Originale (nicht für Web verwenden)
├── icons/
│   └── icon-01.png … icon-22.png   ← Branding-Icons (noch nicht in index.html eingesetzt)
└── videos/
    ├── hero-1.mov                ← Primäres Rohvideo (QuickTime MOV, Hochformat)
    ├── hero-2.mov                ← Alternatives Rohvideo (QuickTime MOV, Hochformat)
    ├── hero-1.mp4                ← originalnahe MP4-Konvertierung von hero-1.mov (Hochformat, 42 MB)
    ├── hero-2.mp4                ← originalnahe MP4-Konvertierung von hero-2.mov (Hochformat)
    ├── hero-1-720p-optimized.mp4 ← **AKTUELL IN VERWENDUNG** – 720×1280, CRF 28, 15s Loop, faststart, 4.9 MB
    ├── hero-1-wide.mp4           ← veraltet; experimenteller Querformat-Composite (nicht mehr referenziert)
    ├── hero-1-wide-poster.jpg    ← veraltet; Poster zum alten Wide-Video
    └── hero-1-poster.jpg         ← Poster-Fallback für Mobile-Video
```

> **Achtung macOS:** Das Dateisystem ist case-insensitiv. Im `assets/`-Ordner gibt es
> noch alte Groß-Verzeichnisse (`Colors/`, `Fotos/`, `Heic/`) und alte Exportdateien.
> Die produktiven Ordner wurden auf Kleinbuchstaben normalisiert:
> `assets/fonts/`, `assets/logos/`, `assets/icons/`, `assets/photos/`, `assets/videos/`.
> Die korrekt referenzierten Pfade in `index.html` zeigen auf diese Kleinbuchstaben-Pfade.

## Git- und Asset-Strategie

- Versioniert werden Website-Code, Specs, Design-Referenzen und webtaugliche Assets.
- Nicht versioniert werden Rohmedien, HEIC-Dateien, MOV-Videos, Handoff-Zips, `.DS_Store`, Playwright-Diagnoseartefakte und alte Exportduplikate.
- `.gitignore` erlaubt zukünftige optimierte Videos (`assets/videos/*.mp4`, `assets/videos/*.webm`), ignoriert aber bestehende MOV-Rohdateien.
- Die aktuell produktiv verwendeten Fotos sind `assets/photos/kathi-*.jpg`; die großen `assets/photos/kathi-*.png` bleiben lokal als Quellen erhalten und sind ignoriert.

> **Hero-Video:** `hero-1.mov` ist QuickTime-Format. Für Chrome/Windows sollte es zu
> `.mp4` (H.264) konvertiert werden. In `index.html` sind beide `<source>`-Tags bereits
> vorbereitet – einfach die MP4-Datei hinzufügen und den Pfad anpassen.

## Hero-Video – Redesign-Dokumentation (03.05.2026, Antigravity)

### Problem
Das ursprüngliche Hero-Design versuchte, ein Hochformat-Video (1080×1920) in einen
Fullscreen-Querformat-Hintergrund zu pressen. Das Ergebnis (`hero-1-wide.mp4`) hatte
unschöne geblurrte Ränder und wirkte wie ein Hochformat-Video in Querformat.

### Lösung: Split-Screen (Desktop) + Fullscreen-Overlay (Mobile)

**Desktop (≥ 768px):**
- Echtes 50/50 CSS-Grid (`md:grid-cols-2`), volle Viewport-Höhe (`min-h-[92vh]`)
- Links: Text mit Logo, Pill-Badge, Headline, Tagline, CTAs
- Rechts: Video füllt die gesamte rechte Spalte edge-to-edge (`absolute inset-0`)
- Weicher Gradient-Übergang am linken Videorand (`from-ocean to-transparent`)
- `object-position: center 15%` damit Kathis Kopf nicht abgeschnitten wird

**Mobile (< 768px):**
- Fullscreen-Video als Hintergrund (Hochformat = Handy-Hochformat, perfekt)
- Dunkleres Overlay (`from-ocean/70 via-ocean/45 to-ocean/80`) für Lesbarkeit
- Text zentriert mit stärkeren Text-Shadows und opaquerem Pill-Badge
- Scroll-Indikator am unteren Rand

### Video-Optimierung
```bash
ffmpeg -i hero-1.mp4 -vf "scale=720:1280" -c:v libx264 -preset slow -crf 28 \
  -profile:v main -level 3.1 -pix_fmt yuv420p -an -movflags +faststart \
  -t 15 hero-1-720p-optimized.mp4
```
- Eingabe: `hero-1.mp4` (1080×1920, 42 MB, 26.6 s)
- Ausgabe: `hero-1-720p-optimized.mp4` (720×1280, 4.9 MB, 15 s Loop)
- Audio entfernt (`-an`), `faststart` für sofortiges Streaming
- `<link rel="preload">` im `<head>` für frühes Laden

### Technische Details
- Zwei separate HTML-Blöcke: `md:hidden` (Mobile) und `hidden md:grid` (Desktop)
- Entrance-Animation via `DOMContentLoaded` (nicht `window.load`) für schnellere Anzeige
- Desktop-Video hat kein `poster`-Attribut (Ocean-BG zeigt sich bis Video startet)
- JS `play()` Fallback für Browser die Autoplay blocken
- Beide Videos nutzen `playbackRate = 0.75`

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
- **Lokales Prüfen:** bevorzugt über `python3 -m http.server 8000` und `http://127.0.0.1:8000/index.html`, nicht per `file://`.
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
