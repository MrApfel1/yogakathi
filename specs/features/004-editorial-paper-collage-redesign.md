# 004 - Editorial Paper Collage Redesign

## Status

Freigegeben zur Umsetzung am 23.08.2026. Zusaetze des Nutzers bei Freigabe:

- Pflanzen- und Naturmotive als Hintergrund-Assets aufnehmen.
- Die fuenf Elemente Erde, Wasser, Feuer, Luft und Aether als eigenstaendige Bild-Assets und als wiederkehrenden roten Faden der gesamten Seite ausarbeiten.
- Vor der finalen Umsetzung drei vollstaendige Seitenvarianten zur visuellen Auswahl erstellen.

## Ziel

Die bestehende Yoga-Kathi-Onepage wird visuell in eine helle, editoriale Papier-Collage-Welt ueberfuehrt. Die bereitgestellte Referenz dient als Stil- und Kompositionsreferenz, wird jedoch nicht kopiert. Inhalte, Funktionen, Brand-Farben und bestehende Fotos bleiben erhalten. Neue Hintergrund-Assets verbinden die Seite mit organischen Papierkanten, handgemalten Formen und ruhiger Atelier-Anmutung.

## Fixierte Designrichtung

Arbeitstitel: **Ocean Paper Atelier**.

- Dominanter Hintergrund: Creme `#F9FBF2` und warmes Weiss `#FAF6F0`.
- Schrift, Linien, Primaeraktionen und grafische Akzente: Ocean `#084A5E`.
- Weitere vorhandene Brandfarben duerfen nur sehr sparsam und abgetoent eingesetzt werden.
- Bildwelt: echte Kathi-Fotografie plus abstrakte, handgemachte Papier- und Pinseltexturen.
- Formensprache: asymmetrisch, editorial und haptisch; keine Glassmorphism-Welt und keine gleichfoermige Card-Landschaft.
- Typografie bleibt Cormorant und Montserrat; die grossen Headlines erhalten mehr redaktionelle Ruhe und bewusst gesetzte Zeilenumbrueche.

## Anforderungen

### 1. Neues Menueband

- Das Logo sitzt auf Desktop exakt in der horizontalen Mitte des Menuebands.
- Die Navigation wird symmetrisch um das Logo verteilt:
  - links: `Über Kathi`, `Kurse`
  - rechts: `Stundenplan`, `Kontakt`, `Buchen`
- Das blaue Yoga-Kathi-Logo wird verwendet.
- Das Menueband ist hell, luftig und von einer feinen Ocean-Linie getrennt.
- Auf Mobile bleibt das Logo mittig; der Hamburger sitzt rechts, links bleibt ein gleich breiter Ausgleichsbereich, damit das Logo optisch wirklich zentriert ist.
- Touch-Ziele bleiben mindestens 44 px hoch, Fokuszustand und Mobile-Menue bleiben voll funktional.

### 2. Editorialer Hero

- Das bestehende Hero-Foto `assets/photos/Flow_Option1.JPG` bleibt das zentrale Medium.
- Desktop-Komposition:
  - Foto als bewusst gesetztes, hochformatiges Editorial-Fenster links der Mitte.
  - Headline, Tagline und Primaeraktion rechts davon.
  - Organische Collage-Formen greifen vom Seitenrand und ueber einzelne Bildkanten in die Komposition.
- Mobile-Komposition:
  - Foto bleibt gross und klar erkennbar.
  - Text und Aktionen werden nicht unruhig ueber das Gesicht oder den Koerper gelegt.
  - Collage-Elemente werden reduziert und neu positioniert, nicht nur verkleinert.
- Primaeraktion bleibt `Stunde buchen`, Sekundaeraktion bleibt `Kurse entdecken`.

### 3. Generierte Hintergrund-Assets

Mit der eingebauten Bildgenerierung werden mindestens neun projektspezifische Raster-Assets erzeugt und in `assets/textures/` gespeichert:

1. `ocean-paper-hero.png`
   - freigestellte, handgerissene Papier- und Pinsel-Collage fuer Hero-Raender und Bildueberlagerungen;
   - Ocean- und Cremefamilie, keine Schrift, keine Personen, keine Logos.
2. `ocean-paper-divider.png`
   - breites, freigestelltes Papierband mit unregelmaessiger Reisskante fuer Abschnittsuebergaenge;
   - horizontal komponiert und responsive beschneidbar.
3. `cream-paper-grain.webp`
   - sehr dezente gescannte Papieroberflaeche als wiederverwendbare Hintergrundtextur;
   - nahtarm, kontrastarm und ohne sichtbare Gegenstaende.
4. `botanical-paper-collage.png`
   - freigestellte botanische Collage aus echten beziehungsweise fotorealistischen Blaettern, feinen Zweigen und gepressten Pflanzenformen;
   - natuerlich, ruhig und haptisch, ohne tropische Ueberladung;
   - Ocean-getoente Schatten beziehungsweise Papierlagen duerfen die Pflanzen mit der Markenwelt verbinden;
   - keine Personen, keine Schrift, keine Logos und keine kuenstlichen Plastikpflanzen.
5. `element-earth.webp`
   - mineralische Erde, Stein, Wurzeln, Moos und gepresste Blaetter als haptische Editorial-Collage;
   - geerdet und ruhig, ohne generisches Landschaftsfoto oder Symbol-Icon.
6. `element-water.webp`
   - fliessende Tusche, Wasserreflexe, transparente Papierlagen und sanfte Wellenbewegung;
   - Ocean-Farbwelt, ohne plakative Wassertropfen-Icons.
7. `element-fire.webp`
   - Glut, waermendes Licht, expressive Pinselspuren und gerissenes Papier in sparsam eingesetzten warmen Brandfarben;
   - energetisch, aber nicht aggressiv und ohne generische Flammen-Illustration.
8. `element-air.webp`
   - feine Graeser, bewegte Papierkanten, durchscheinende Stofflichkeit und sichtbare Leichtigkeit;
   - viel Negativraum, ohne generisches Wind-Icon.
9. `element-ether.webp`
   - Licht, Raum, transparente Schichten und ein subtiler schwebender Fokus;
   - abstrakt und still, ohne futuristischen Neon-Orb oder esoterisches Clipart.

Die fuenf Element-Assets muessen wie eine zusammengehoerige Serie wirken: gleicher analoger Materialcharakter, vergleichbare Lichtstimmung und konsistente Ausschnittlogik. Trotzdem soll jedes Element bereits ohne Beschriftung visuell unterscheidbar sein.

Freigestellte Assets werden zunaechst auf einer flachen Chroma-Key-Flaeche generiert, lokal sauber freigestellt und auf Alpha-Kanal, Raender und Dateigroesse geprueft. Die finalen Generierungsprompts werden als Provenienz in den Assets beziehungsweise begleitend dokumentiert.

### 4. About als Editorial-Doppelseite

- Bild und Biografie werden wie eine ruhige Magazin-Doppelseite komponiert.
- Das Portrait darf rechteckiger und bewusster gerahmt werden; die bisherige organische Maskenform wird durch die Papier-Collage-Sprache ersetzt.
- Credentials werden als typografische Fakten mit Linien gesetzt, nicht als Karten.
- Ein dezentes rundes Siegel `Flow from the Heart · Yoga Kathi · Wien` darf als HTML/CSS-Element eingesetzt werden.

### 5. Kurse

- Die zwei Angebote bleiben erhalten.
- Statt gleichfoermiger Cards entsteht eine versetzte Editorial-Komposition aus grossen Bildflaechen, Textbloecken und feinen Linien.
- Kategorie, Titel, Beschreibung und Link bleiben klar lesbar.
- Keine Inhalte oder faktischen Claims werden hinzugefuegt.

### 5a. Die fuenf Elemente als Seitenmotiv

- Erde, Wasser, Feuer, Luft und Aether bilden einen eigenen editorialen Abschnitt und zugleich ein wiederkehrendes Navigations- und Kompositionsmotiv in der gesamten Seite.
- Jedes Element erhaelt ein eigenstaendiges Bild-Asset, einen klaren deutschen Namen und eine kurze, vorhandene beziehungsweise rein atmosphaerische Einordnung ohne neue Gesundheitsversprechen.
- Die fuenf Motive werden nicht als gleichfoermiges Icon-Grid dargestellt. Sie erscheinen als rhythmische Bildfolge, Atlas, Leporello oder asymmetrische Magazin-Strecke.
- Auf Mobile bleibt die Reihenfolge eindeutig und jedes Element ist als abgeschlossene Einheit erfassbar.

### 6. Stundenplan

- Eversports-Integration, Kategorie-/Monatsfilter, interne Scrollhoehe sowie Empty-/Error-State bleiben unveraendert funktional.
- Der Stundenplan erscheint wie ein ruhiges Programmblatt auf Creme: feine Ocean-Linien, klare Typografie, wenige Flaechen.
- Filter und Buchungsaktionen bleiben mindestens 44 px hoch.
- Bei 375 px werden weder Filter noch Monatsauswahl abgeschnitten.

### 7. Quote, Kontakt und Footer

- Die Quote wird als breite, gerissene Papierbahn beziehungsweise typografische Pause inszeniert.
- Kontakt bleibt zweispaltig, wirkt aber weniger formular-kartenartig und staerker wie eine editoriale Schlussseite.
- Footer und Menueband sprechen dieselbe helle, symmetrische Gestaltungssprache.
- Impressum-/Datenschutz-Platzhalter und bestehende Kontaktdaten bleiben unveraendert.

### 8. Bewegung und Barrierefreiheit

- Eine einzige charakteristische Bewegung: Collage-Elemente gleiten beim ersten Hero-Aufbau minimal gegeneinander, wie lose Papierlagen.
- Keine dauerhafte Parallax-Dekoration und keine unruhigen Dauerschleifen.
- `prefers-reduced-motion` zeigt sofort den finalen Zustand.
- Semantik, Fokus, Kontrast und Tastaturbedienung bleiben erhalten oder werden verbessert.

## Nicht im Scope

- Keine Aenderung der Texte, Kontaktdaten oder Eversports-Datenquelle.
- Keine neue Logoentwicklung.
- Keine neue Farbpalette ausserhalb der bestehenden Yoga-Kathi-Farben.
- Kein Framework- oder Build-System-Wechsel.
- Keine Playwright-CLI-Pruefung.
- Keine Kopie der Referenzseite oder ihrer Markenidentitaet.

## Akzeptanzkriterien

- Das Logo ist auf Desktop und Mobile optisch mittig im Menueband.
- Die Seite wirkt klar erkennbar wie die Referenzwelt: editorial, handgemacht, papierartig und asymmetrisch, bleibt aber eindeutig Yoga Kathi.
- `#F9FBF2` bleibt die dominante Flaeche und `#084A5E` die dominante Schrift-/Akzentfarbe.
- Vor der finalen Umsetzung liegen drei vollstaendige High-Fidelity-Seitenentwuerfe vor, die Header, Hero, About, Angebote, die fuenf Elemente, Stundenplan, Kontakt und Footer zeigen.
- Mindestens neun neue, produktiv verwendete Hintergrund-Assets liegen in `assets/textures/`, darunter je ein separates Asset fuer Erde, Wasser, Feuer, Luft und Aether.
- Mindestens ein produktiv verwendetes Asset enthaelt dezente Pflanzen- oder Naturmotive.
- Die fuenf Element-Assets sind als zusammengehoerige Serie erkennbar und zugleich ohne Beschriftung visuell unterscheidbar.
- Die Hero-Fotografie bleibt auf Desktop und Mobile klar erkennbar.
- Es gibt keine horizontalen Ueberlaeufe bei 375 px, 768 px, 1024 px und 1440 px.
- Eversports-Filter und Kontaktformular funktionieren weiterhin.
- Bestehende Tests bestehen; visuelle Pruefung erfolgt in Desktop- und Mobile-Ansicht ohne Playwright CLI.
