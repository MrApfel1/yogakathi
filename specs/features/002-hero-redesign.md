# 002 – Hero Section Redesign

**Status:** ✅ Implementiert (03.05.2026)
**Agent:** Antigravity

## Ausgangslage

Die Hero-Sektion verwendete `hero-1-wide.mp4`, einen künstlich erzeugten
Querformat-Composite (1920×1080) aus dem Hochformat-Originalvideo. Das Ergebnis
hatte unschöne geblurrte Seitenränder und wirkte nicht wie ein echtes Querformat-
Video. Der Nutzer war ausdrücklich nicht zufrieden.

## Anforderungen

1. ❌ Kein Querformat-Fake mit Blur-Rändern
2. ✅ Das Hochformat-Video soll **natürlich** eingebunden werden
3. ✅ Desktop: Video soll die Hälfte des Hero-Bereichs einnehmen
4. ✅ Mobile: Muss gut aussehen – Text lesbar über dem Video
5. ✅ Video muss schnell laden (< 5 MB)
6. ✅ Kathis Kopf darf nicht abgeschnitten werden

## Lösung

### Desktop (≥ 768px): Split-Screen

```
┌─────────────────┬─────────────────┐
│                 │                 │
│   Logo          │                 │
│   Pill-Badge    │     VIDEO       │
│   Headline      │   (Hochformat)  │
│   Tagline       │   object-cover  │
│   CTAs          │   edge-to-edge  │
│                 │                 │
└─────────────────┴─────────────────┘
```

- CSS Grid: `md:grid-cols-2`, `min-h-[92vh]`
- Video: `absolute inset-0`, `object-position: center 15%`
- Gradient-Fade am linken Videorand: `from-ocean to-transparent`

### Mobile (< 768px): Fullscreen Video Background

```
┌─────────────────┐
│  ╔═══════════╗  │
│  ║   Logo    ║  │
│  ║   Pill    ║  │
│  ║ Headline  ║  │
│  ║  Tagline  ║  │
│  ║   CTAs    ║  │
│  ╚═══════════╝  │
│    ↓ scroll     │
└─────────────────┘
  (Video dahinter)
```

- Fullscreen-Video als Hintergrund (Hochformat passt perfekt auf Handy)
- Dunkleres Overlay: `from-ocean/70 via-ocean/45 to-ocean/80`
- Stärkere Text-Shadows und opaquerer Pill-Badge für Lesbarkeit

## Video-Optimierung

| Eigenschaft   | Original          | Optimiert                    |
|---------------|-------------------|------------------------------|
| Dateiname     | `hero-1.mp4`      | `hero-1-720p-optimized.mp4`  |
| Auflösung     | 1080×1920         | 720×1280                     |
| Dateigröße    | 42 MB             | 4.9 MB                       |
| Dauer         | 26.6 s            | 15 s (Loop)                  |
| Codec         | H.264 High        | H.264 Main                   |
| Audio         | ✅                 | ❌ (entfernt)                 |
| faststart     | ❌                 | ✅                            |

```bash
ffmpeg -i hero-1.mp4 -vf "scale=720:1280" -c:v libx264 -preset slow -crf 28 \
  -profile:v main -level 3.1 -pix_fmt yuv420p -an -movflags +faststart \
  -t 15 hero-1-720p-optimized.mp4
```

## Technische Implementierung

- Separate HTML-Blöcke für Desktop (`hidden md:grid`) und Mobile (`md:hidden`)
- Entrance-Animation via `DOMContentLoaded` statt `window.load`
- Desktop-Video ohne `poster`-Attribut (Ocean-BG bis Video startet)
- JS `play()` Fallback für Browser die Autoplay blocken
- `<link rel="preload">` im `<head>` für frühes Laden
- `playbackRate = 0.75` für Slow-Motion-Effekt

## Geänderte Dateien

- `index.html` – Hero-Sektion komplett neu strukturiert
- `assets/videos/hero-1-720p-optimized.mp4` – Neues optimiertes Video (NEU)
- `CLAUDE.md` – Dokumentation aktualisiert
