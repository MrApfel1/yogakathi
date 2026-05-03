# Yoga Kathi – Website

One-Page-Website für Kathi K., Yoga-Lehrerin und Breathwork-Teacherin in Wien.

## Tech-Stack

- **HTML + Tailwind CSS CDN + Vanilla JavaScript** – kein Build-Tool, kein Framework
- Fonts: Google Fonts (Cormorant, Montserrat, Kalam) + lokale Fallbacks in `assets/fonts/`
- Einstiegspunkt: `index.html` im Projektstamm
- Git-Repo ist initialisiert, Branch: `main`

## Projektstruktur

```
index.html                  ← Einzige HTML-Datei (One-Pager, vollständig implementiert)
CLAUDE.md                   ← Projektkontext für AI-Coding-Assistenten (lesen!)
assets/
├── fonts/                  ← Lokale Fonts (HarlowDuoSerif.otf, Montserrat)
├── logos/                  ← logo-1-white.png (Header/Hero), logo-1-blue.png (helle BGs)
├── photos/                 ← kathi-1…4.jpg (optimierte Web-Fotos)
├── icons/                  ← icon-01…22.png (Branding-Icons, noch nicht eingebaut)
└── videos/                 ← hero-1.mov (primär), hero-2.mov (alternativ)
design/
├── branding-kit.html       ← Vollständiges Branding-Kit (Farben, Type, Wireframes)
├── website-prototype.html  ← Original One-Pager-Prototype aus Claude Design
└── reference/              ← Referenzbilder (Farben, Branding, Hero)
specs/
└── features/
    └── 001-landing-page.md ← Feature-Spec inkl. Implementierungsstatus
```

## Wie man startet

Empfohlen ist ein lokaler HTTP-Server im Projektstamm:

```bash
python3 -m http.server 8000
```

Dann öffnen:

```text
http://127.0.0.1:8000/index.html
```

Kein Build-Schritt nötig. Die Assets sind relativ verlinkt. Direktes Öffnen per Doppelklick (`file://`) kann in Chrome durch Cache/Dateikontext verwirrend sein; für Entwicklung und QA immer den lokalen Server nutzen.

## Git & Assets

- Versioniert werden Website-Code, Specs, Design-Referenzen und optimierte Web-Assets.
- Ignoriert werden Rohmedien, HEICs, MOV-Videos, Handoff-Zips, `.DS_Store`, Playwright-Diagnoseartefakte und alte Exportduplikate.
- Die großen Foto-PNGs bleiben lokal als Quellen erhalten, werden aber nicht versioniert.
- Die produktiv verwendeten Fotos liegen als optimierte JPEGs unter `assets/photos/kathi-1.jpg` bis `kathi-4.jpg`.
- Optimierte Videos können später als `assets/videos/*.mp4` oder `assets/videos/*.webm` versioniert werden.

## Übergabe-Status Hero-Video

Stand 03.05.2026 ist der Hero-Video-Bereich **nicht final abgenommen**.

Aktuell referenziert `index.html`:

```text
assets/videos/hero-1-wide.mp4
```

Das ist ein aus Hochformatmaterial generiertes 1920×1080-Video mit geblurrten Seiten. Der Nutzer ist damit unzufrieden, weil es weiterhin nach Hochformatvideo wirkt und die Blur-Ränder stören. Für die nächste Runde sollte entweder echtes Querformatmaterial verwendet oder der Hero neu konzipiert werden. Details stehen in:

```text
design/reference/antigravity-handoff.md
CLAUDE.md
specs/features/001-landing-page.md
```

## Seitenaufbau

| Sektion | ID | Inhalt |
|---------|----|--------|
| Header | – | Fixierte Navigation, Ocean-Blau |
| Hero | `#hero` | Fullscreen-Video (slow, 0.75×), Tagline, 2 CTAs |
| Über Kathi | `#about` | Portrait, Bio, 2×2 Credentials |
| Kurse | `#courses` | 3 Kurs-Cards + Eversports-Stundenplan-Platzhalter |
| Zitat-Stripe | – | Ocean-Hintergrund, Blockzitat |
| Kontakt | `#contact` | Kontaktinfos + Glassmorphism-Formular |
| Footer | – | Links, Social, Copyright |

## Farbpalette

| Tailwind-Alias | Hex | Verwendung |
|----------------|-----|-----------|
| `ocean` | `#084A5E` | Header, Headlines, Buttons |
| `cream` | `#F9FBF2` | Helle Hintergründe |
| `mauve` | `#6B4E71` | Akzente, Overlines, Kontakt-Gradient |
| `sand` | `#C9A885` | Buttons, Cursor, Highlights |
| `clay` | `#E8D5C4` | Card-Borders, Halos |
| `taupe` | `#A8927D` | Body-Text |
| `warm` | `#FAF6F0` | About-BG, Widget-BG |
| `sky` | `#7796CB` | Breathwork-Akzente |

## Offene Punkte

- [x] `hero-1.mov` und `hero-2.mov` testweise zu `.mp4` konvertiert
- [ ] Hero-Video-Strategie neu entscheiden; aktueller Blur-Seiten-Composite ist nicht final
- [ ] Eversports-Embed-Code in `<div id="eversports-widget">` einfügen
- [ ] Impressum & Datenschutz als eigene Seiten anlegen (Feature 002)
- [ ] Icons (`assets/icons/`) in Sektionen einbauen
- [ ] Optional: `favicon.ico` oder SVG-Favicon ergänzen

## Für AI-Assistenten

Lies zuerst `CLAUDE.md` – dort sind Farbpalette, Typografie, CSS-Patterns, Asset-Pfade
und Fallstricke (macOS case-insensitive FS, MOV-Video, Tailwind-Klassen-Einschränkungen)
vollständig dokumentiert.

Die Feature-Spec `specs/features/001-landing-page.md` beschreibt alle Sektionen,
den aktuellen Implementierungsstand und bekannte offene Punkte.
