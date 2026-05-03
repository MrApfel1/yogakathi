# Antigravity Handoff – Yoga Kathi Hero-Video

Datum: 2026-05-03  
Projekt: Yoga Kathi One-Pager  
Repo-Branch: `main`

## Kurzfassung

Die Website ist eine statische One-Page-Site (`index.html`, Tailwind CDN, Vanilla JS). Der aktuelle Streitpunkt ist ausschließlich der Hero-Video-Bereich.

Der Nutzer ist mit dem aktuellen Hero-Video-Ansatz nicht zufrieden. Das Ausgangsmaterial ist Hochformat-iPhone-Video. Mehrere Versuche, daraus einen Querformat-Hero zu machen, haben das Grundproblem nicht gelöst: Es wirkt weiter wie Hochformatmaterial, und geblurrte Seitenränder gefallen dem Nutzer nicht.

## Git-Stand

Bekannte Commits:

```text
11e14c4 Ignore local browser diagnostics
bdfb8ae Initial website baseline
```

Aktueller Worktree enthält uncommitted Änderungen:
- `index.html` verändert
- `CLAUDE.md`, `README.md`, `specs/features/001-landing-page.md` aktualisiert
- neue/untracked Logo-Crops
- neue/untracked Video-MP4s und Poster

Wahrscheinlicher Reset-/Vergleichspunkt:
- `11e14c4` ist der letzte Commit vor den aktuellen Hero-Experimenten.
- Nicht blind resetten, erst `git diff 11e14c4 -- index.html` prüfen.

## Nutzerwunsch

Der Nutzer möchte:
- kein statisches Bild im Vordergrund
- nicht zwei sichtbare Videoebenen im DOM
- kein Hochformatvideo mit geblurrten Seitenrändern
- einen echten Querformat-Hero, "so dass man das alles sieht"
- keine komischen Hautton-/Farbverfälschungen

Zusatzwunsch:
- **Nicht mehr Playwright CLI verwenden.**

## Aktuelle Hero-Implementierung

`index.html` verwendet aktuell ein einzelnes Video:

```html
<video id="hero-video"
  class="hero-video absolute inset-0 w-full h-full"
  autoplay muted loop playsinline
  poster="assets/videos/hero-1-wide-poster.jpg">
  <source src="assets/videos/hero-1-wide.mp4" type="video/mp4">
</video>
```

CSS:

```css
.hero-video {
  object-fit: cover;
  object-position: center center;
  filter: none;
}
```

`hero-1-wide.mp4` ist aber kein echtes Landscape-Original. Es wurde aus `hero-1.mp4` generiert:
- Canvas: 1920×1080
- Mitte: Hochformatvideo skaliert
- Seiten: derselbe Clip vergrößert, geblurrt und abgedunkelt

Dieser Ansatz ist **nicht final**.

## Video-Assets

Rohmaterial:

```text
assets/videos/hero-1.mov
assets/videos/hero-2.mov
assets/videos/IMG_4126.MOV
assets/videos/IMG_4452.MOV
```

Konvertierungen/Experimente:

```text
assets/videos/hero-1.mp4                  originalnahe H.264-Konvertierung, Hochformat
assets/videos/hero-2.mp4                  originalnahe H.264-Konvertierung, Hochformat
assets/videos/hero-1-poster.jpg           Poster aus hero-1.mp4
assets/videos/hero-1-wide.mp4             aktuell eingebunden, 1920×1080 mit Blur-Seiten, nicht final
assets/videos/hero-1-wide-poster.jpg      Poster aus hero-1-wide.mp4
assets/videos/hero-1-refined.mp4          experimentell, nicht final, vermutlich nicht mehr verwenden
assets/videos/hero-1-refined-poster.jpg   experimentell, nicht final
```

Die originalnahen MP4s behalten den Charakter des Ausgangsmaterials besser als die farbkorrigierten Render-Versuche. Frühere Farbkorrekturen führten zu unnatürlichem Hautton.

## Was schon versucht wurde

1. CSS-Crop mit `object-fit: cover`
   - Problem: Kopf/Körper werden je nach Viewport abgeschnitten.

2. `object-fit: contain` mit unscharfer Videoebene im Hintergrund
   - Problem: wirkte wie statisches Vordergrundbild plus laufender Hintergrund; Nutzer wollte das nicht.

3. 16:9-Render mit Crop/Pan und Farbkorrektur
   - Problem: Hautton wurde unnatürlich; Nutzer lehnte das ab.

4. 1920×1080 Composite mit eingebrannten Blur-Seiten (`hero-1-wide.mp4`)
   - Problem: Nutzer mag Blur-Ränder nicht; wirkt weiter wie Hochformat.

## Änderungsübersicht aus dieser Arbeitsrunde

Git-Historie ist sehr kurz:

```text
bdfb8ae  Initial website baseline
11e14c4  Ignore local browser diagnostics
```

Alles danach ist uncommitted Worktree-Arbeit.

Wichtige aktuelle Dateiänderungen:

```text
index.html
  - Header-/Hero-/Footer-Logo auf logo-1-white-cropped.png umgestellt
  - Hero-Höhe von h-screen auf .hero-frame geändert
  - Hero-Video von hero-1.mov auf hero-1-wide.mp4 umgestellt
  - aktuelle Implementierung hat nur noch ein <video>, aber dieses MP4 enthält intern Blur-Seiten
  - Contact-Gradient wurde nebenbei verändert; prüfen, ob diese Änderung behalten werden soll

assets/logos/logo-1-white-cropped.png
assets/logos/logo-1-blue-cropped.png
  - Crop der Original-Logos, weil Original-PNGs große transparente Ränder haben

assets/videos/hero-1.mp4
assets/videos/hero-2.mp4
  - originalnahe MP4-Konvertierungen der MOV-Rohvideos

assets/videos/hero-1-wide.mp4
assets/videos/hero-1-wide-poster.jpg
  - aktuell eingebunden
  - 1920×1080 Composite mit eingebrannten Blur-Seiten
  - nicht final, Nutzer ist unzufrieden

assets/videos/hero-1-refined.mp4
assets/videos/hero-1-refined-poster.jpg
  - experimentell, nicht final
  - nicht in index.html referenziert
```

Dateizeitpunkte der generierten Assets im aktuellen Workspace:

```text
2026-05-03 13:08  logo-1-blue-cropped.png / logo-1-white-cropped.png
2026-05-03 13:34  hero-1.mp4 / hero-2.mp4 / hero-1-poster.jpg
2026-05-03 13:42  hero-1-refined.mp4
2026-05-03 13:43  hero-1-refined-poster.jpg
2026-05-03 13:48  hero-1-wide.mp4 / hero-1-wide-poster.jpg
```

## Empfohlener nächster Schritt

Nicht weiter versuchen, aus Hochformatmaterial einen vollflächigen Landscape-Hero zu kaschieren. Es gibt technisch nur schlechte Kompromisse:
- `cover`: schneidet Kopf/Körper ab
- `contain`: zeigt Balken/Leerraum oder braucht Blur-Ränder
- Composite mit Blur: sieht nach Hochformat-Reparatur aus

Empfehlung:

1. Echtes Querformatmaterial anfordern oder neu aufnehmen.
2. Falls kein Querformatvideo verfügbar ist, Hero-Design ändern:
   - Video bewusst als gerahmtes Portrait-Video einsetzen, nicht als Full-Bleed-Hintergrund
   - oder statisches starkes Querformatfoto als Hero verwenden und Video tiefer in der Seite platzieren
   - oder mehrere Fotos/kurze Clips als editorialer Hero ohne Vollbild-Video
3. Falls zurücksetzen: `index.html` aus `11e14c4` als Vergleich nehmen, dann Logo-Crop/MP4-Konvertierung einzeln wieder übernehmen, falls gewünscht.

## Keine Playwright-CLI

Der Nutzer hat explizit darum gebeten, Playwright CLI nicht mehr zu verwenden.
Für Checks:
- `ffprobe` für Metadaten
- `ffmpeg` für Frame-Exports
- manueller Browsercheck über lokalen Server
- `curl -I` für Server-/Asset-Verfügbarkeit
