# Yoga Kathi – Website

One-Page-Website für Kathi K., Yoga-Lehrerin und Breathwork-Teacherin in Wien.

## Tech-Stack

- **HTML + Tailwind CSS CDN + Vanilla JavaScript** – kein Build-Tool, kein Framework
- Fonts: Google Fonts (Cormorant, Montserrat, Kalam) + lokale Fallbacks in `assets/fonts/`
- Einstiegspunkt: `index.html` im Projektstamm

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

Einfach `index.html` im Browser öffnen – kein Build-Schritt nötig.
Alle Assets sind relativ verlinkt, funktioniert direkt vom Dateisystem.

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

- [ ] `hero-1.mov` → `.mp4` (H.264) konvertieren für Cross-Browser-Kompatibilität
- [ ] Eversports-Embed-Code in `<div id="eversports-widget">` einfügen
- [ ] Impressum & Datenschutz als eigene Seiten anlegen (Feature 002)
- [ ] Icons (`assets/icons/`) in Sektionen einbauen

## Für AI-Assistenten

Lies zuerst `CLAUDE.md` – dort sind Farbpalette, Typografie, CSS-Patterns, Asset-Pfade
und Fallstricke (macOS case-insensitive FS, MOV-Video, Tailwind-Klassen-Einschränkungen)
vollständig dokumentiert.

Die Feature-Spec `specs/features/001-landing-page.md` beschreibt alle Sektionen,
den aktuellen Implementierungsstand und bekannte offene Punkte.
