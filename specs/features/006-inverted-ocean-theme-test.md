# 006 – Invertierter Ocean-Theme-Test

## Status

Am 04.09.2026 vom Nutzer als finale Farbrichtung bestaetigt. Der Ocean-Modus bleibt dominant, waehrend helle Papierinseln in About, Stundenplan, Zitat und Kontaktnotiz den erforderlichen Kontrast sichern.

## Ziel

Die bestehende Editorial-Paper-Komposition bleibt strukturell erhalten, ihre dominante Farbrollen werden jedoch bewusst invertiert: Deep Ocean wird zur durchgehenden atmosphaerischen Seitenflaeche, waehrend Cream die primaere Schrift-, Linien- und Aktionsfarbe uebernimmt. Der Test ist eine komponierte dunkle Variante und kein technischer Negativfilter.

## Farbrollen

- Canvas: Deep Ocean `#084A5E`.
- Erhoehte Papierflaechen: About-Notebook, Stundenplan-Ledger, Zitatkarte und Kontaktnotiz bleiben als cremefarbene redaktionelle Papierinseln mit Ocean-Schrift erhalten.
- Primaere Schrift und Headlines: Cream `#F9FBF2`.
- Sekundaere Schrift: aus Cream abgeleitetes, leicht gedämpftes Blauweiss.
- Primaere Buttons und aktive Filter: Cream-Flaeche mit Ocean-Schrift.
- Sekundaere Buttons: transparent mit Cream-Rahmen und Cream-Schrift.
- Regeln, Fokusrahmen und Formularlinien: Cream mit abgestufter Transparenz.
- Sand und die Materialfarben der Elementtafeln bleiben als seltene physische Akzente erhalten.

## Logo

- Header und Footer verwenden `assets/logos/logo-1-white-cropped.png`.
- Das Logo bleibt in Groesse, Semantik und Platzierung unveraendert.

## Element-Atlas

- Die fuenf Elementtafeln sitzen auf einer gemeinsamen Grundlinie.
- Alle alternierenden vertikalen Offsets werden entfernt.
- Die Karten erhalten konsistente Bild-, Titel- und Textabstaende; kein Element darf scheinbar frei zwischen den Reihen schweben.
- Responsive Raster: fuenf Spalten auf breiten Desktops, drei klar ausgerichtete Spalten auf mittleren Breiten, eine Spalte auf Mobile.

## Schutzregeln

- Inhalte, Navigation, Eversports-Logik, Formularverhalten, Fotografie und botanische/papierartige Komposition bleiben erhalten.
- Keine neuen Claims oder Inhalte.
- Keine Gradienten, kein Neon-Dark-Mode und keine glaenzenden Glassmorphism-Flaechen.
- Textkontrast mindestens WCAG AA; interaktive Konturen mindestens 3:1.
- Mobile Bedienung und Reduced Motion bleiben erhalten.

## Vierte visuelle Korrektur

- Pfingstrose und Lotus werden so gedreht und angeschnitten, dass der Stielansatz aus dem jeweiligen linken oder rechten Browserrand kommt und die Bluete in die Seite hineinweist.
- Dies gilt fuer beide Hero-Akzente, die Pfingstrose im About-Bereich, die Lotusbluete am Stundenplan und die Pfingstrose im Kontakt.
- Das Ocean-Papier des Zitats bleibt vollstaendig innerhalb der Quote-Sektion und trifft nicht auf die Kontaktkomposition.
- Der Kontakt erhaelt unten eine breite, ruhige Ocean-Papierkante statt eines seitlich abgehackten Fragments; ein zweites kleines Fragment bleibt mit Abstand im rechten oberen Bereich.

## Abnahme

- Der Branch ist `codex/inverted-theme-test`.
- Ocean dominiert sichtbar den Hintergrund in allen Hauptsektionen.
- Cream dominiert Text, Navigation, Buttons und aktive Controls.
- Header- und Footer-Logo sind weiss.
- Die Elementtafeln sind auf Desktop, Tablet und Mobile sauber ausgerichtet.
- Visuelle Pruefung erfolgt in echter Browseransicht ohne Playwright CLI.
