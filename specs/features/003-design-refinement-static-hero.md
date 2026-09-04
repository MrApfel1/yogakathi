# 003 - Design-Polish mit statischem Hero-Bild

## Status

Freigegeben zur Umsetzung am 23.08.2026 (Nutzer: „zeig mal“).

Nachtrag am 23.08.2026: Der Nutzer hat die helle Farbvariante direkt beauftragt. `#F9FBF2` wird zur dominanten Seiten- und Sektionsflaeche; `#084A5E` uebernimmt Schrift, Linien, Interaktionszustaende und primaere Akzente. Tiefe Ocean-Flaechen werden bis auf gezielte CTA- und Badge-Elemente entfernt.

## Ziel

Die bestehende Yoga-Kathi-Onepage wird visuell verfeinert, ohne ihre Markenidentitaet oder Informationsarchitektur zu ersetzen. Die Seite soll ruhiger, hochwertiger und organischer wirken. Das Hero-Video wird in dieser Branch vollstaendig entfernt und durch das bereits vorhandene Bild `assets/photos/Flow_Option1.JPG` ersetzt.

## Designrichtung

- Bestehende Markenwelt beibehalten: Ocean, Sand, Clay, Mauve, Cormorant und Montserrat.
- Weniger verschachtelte Glassmorphism-Boxen und weniger gleichfoermige Rundungen.
- Staerkere visuelle Dramaturgie durch abgestufte Ocean-Toene und warme Akzentflaechen.
- Editoriale, organische Bildsprache statt Dashboard-Anmutung.
- Bestehende Inhalte und factual claims bleiben unveraendert.
- Es wird kein erfundenes Testimonial hinzugefuegt. Ein echter Kundenbeleg kann spaeter separat ergaenzt werden.

## Anforderungen

### 1. Hero ohne Video

- Beide `<video>`-Elemente und die zugehoerige Video-Preload-/Playback-Logik werden entfernt.
- Desktop bleibt Split-Screen:
  - Text links.
  - `assets/photos/Flow_Option1.JPG` rechts als vollflaechiges Bild.
  - Ein breiter Ocean-zu-transparent-Verlauf verbindet Text- und Bildhaelfte ohne harte Kante.
  - Der Bildausschnitt zeigt Kathi klar und laesst die Kunstwerke als Markenakzent wirken.
- Mobile nutzt dasselbe Bild als Fullscreen-Hintergrund mit abgestimmtem Ocean-Overlay.
- Der primaere Hero-CTA lautet `Stunde buchen` und fuehrt zu `#stundenplan`.
- `Kurse entdecken` bleibt als sekundaere Aktion erhalten.
- Das Bild erhaelt feste Dimensionen beziehungsweise ein reserviertes Seitenverhaeltnis, sinnvollen Alt-Text und responsive Darstellung ohne Layout Shift.

### 2. Kompakter Header

- Logo und Headerhoehe werden auf Desktop und Mobile reduziert.
- Zielwerte:
  - Mobile circa 80-92 px Gesamthoehe.
  - Desktop circa 96-112 px Gesamthoehe.
- Die Navigation bleibt klar lesbar; `Buchen` bleibt die visuell primaere Header-Aktion.
- Der Hero behaelt ausreichend Abstand unter dem fixierten Header.

### 3. Farbrhythmus und Abschnittsdramaturgie

- Die Ocean-Markenwelt bleibt ueber Typografie, Linien und Aktionen dominant; die grossen Flaechen werden jedoch cremefarben.
- Abschnitte erhalten unterscheidbare, aber verwandte Oberflaechen:
  - Hero: Creme plus Fotografie mit hellem Bildverlauf.
  - About: Creme-/Warm-Verlauf mit Ocean-Typografie.
  - Courses: warmes Weiss mit klaren Creme-Kartenflaechen.
  - Stundenplan: Creme mit einer einzigen hellen Hauptoberflaeche.
  - Quote: kompakte helle Pause mit Ocean-Typografie.
  - Contact/Footer: helle Cremeflaechen mit subtilen Ocean-Verlaeufen und -Linien.
- Keine neuen Farben ausserhalb der bestehenden Brand-Palette.

### 4. Organischere Formensprache

- Gleichfoermige `rounded-2xl`-Anwendung wird reduziert.
- Das About-Portrait erhaelt eine kontrollierte asymmetrische beziehungsweise organische Kontur.
- Organische Kurven oder subtile Divider duerfen Sektionen verbinden.
- Standard-UI wie Formular und Stundenplan bleibt ruhig und funktional; dekorative Formen werden gezielt und sparsam eingesetzt.

### 5. Kurskarten

- Die zwei Angebotskarten bleiben bestehen.
- Bildausschnitte und Kartenhoehen werden optisch angeglichen.
- Weniger Glas-Layer, klarere Hierarchie zwischen Bild, Kategorie, Titel, Beschreibung und Link.
- Hover-Zustaende bleiben subtil und verschieben keine umliegenden Elemente.

### 6. Stundenplan visuell vereinfachen

- Die Funktionalitaet aus Spec 002 bleibt erhalten:
  - Eversports-GraphQL.
  - Kategorie- und Monatsfilter.
  - Begrenzte Panelhoehe mit internem Scrollen.
  - Empty- und Error-State.
- Verschachtelte Rahmen werden auf eine dominante Hauptoberflaeche reduziert.
- Mobile Innenabstaende werden so reduziert, dass mindestens circa 295 px nutzbare Breite bei 375 px Viewport verbleiben.
- Filter duerfen umbrechen und duerfen nicht abgeschnitten werden.
- Monatsauswahl bleibt voll lesbar.
- Terminzeilen verwenden leichtere Trennung statt mehrfacher Card-in-Card-Optik.
- Buchen-Aktionen und Filter erhalten mindestens 44 px hohe Touch-Ziele.

### 7. Quote-Stripe

- Die Quote wird wieder als kompakte visuelle Pause behandelt, nicht als nahezu leerer Fullscreen-Abschnitt.
- Zielhoehe circa 50-65 vh auf Desktop; auf Mobile ergibt sich die Hoehe aus Inhalt und komfortablem Padding.
- Typografie wird groesser und praegnander, die Dekoration bleibt minimal.

### 8. Typografie und Interaktionsdetails

- Cormorant und Montserrat bleiben unveraendert.
- Versalschrift mit weitem Tracking wird auf Navigation, Overlines und Hauptbuttons konzentriert.
- Funktionale Texte wie Filter und Metadaten werden groesser und ruhiger gesetzt.
- Kleine Texte auf Ocean erreichen ausreichenden Kontrast.
- Alle interaktiven Elemente erhalten einen sichtbaren, markengerechten `:focus-visible`-Zustand.
- Der Custom Cursor wird nur fuer praezise Zeigegeraete aktiviert.
- `prefers-reduced-motion` deaktiviert nicht nur Scroll-Snap, sondern auch Entrance-, Float- und Atemanimationen.

### 9. Responsive Verhalten

- Keine horizontale Ueberlaeufe bei 375 px, 768 px, 1024 px und 1440 px.
- Mobile Menue, CTA-Reihen, Kurskarten, Stundenplanfilter und Kontaktformular bleiben vollstaendig sichtbar.
- Der Hero-Crop wird fuer Mobile und Desktop separat abgestimmt.
- Bild und Text duerfen bei vergroesserter Schrift nicht kollidieren.

## Nicht im Scope

- Kein neues Kontaktformular-Backend.
- Keine erfundenen Testimonials oder neuen faktischen Claims.
- Keine neuen Seiten fuer Impressum oder Datenschutz.
- Keine Aenderung der Eversports-Schnittstelle oder der Filterlogik aus Spec 002.
- Kein Framework- oder Build-System-Wechsel.
- Keine Playwright-CLI-Pruefung.

## Akzeptanzkriterien

- Im Hero wird kein Video mehr geladen oder referenziert.
- `assets/photos/Flow_Option1.JPG` erscheint auf Desktop und Mobile als Hero-Medium mit sinnvollem Crop.
- Die Seite wirkt weiterhin eindeutig wie Yoga Kathi und nutzt nur die bestehende Brand-Palette und Typografie.
- Header und Logo nehmen sichtbar weniger Viewporthoehe ein.
- Der Desktop-Hero hat keinen harten vertikalen Uebergang zwischen Ocean und Bild.
- Abschnitte sind visuell unterscheidbar, ohne wie verschiedene Designsysteme zu wirken.
- Der mobile Stundenplan schneidet Filter und Monatsauswahl bei 375 px nicht ab.
- Touch-Ziele der zentralen Navigation, Filter und Buchungsaktionen sind mindestens 44 px hoch.
- Die Quote funktioniert wieder als kompakter Stripe.
- Tastaturfokus ist sichtbar und Reduced Motion wird umfassend respektiert.
- Bestehende Terminfilter- und Layout-Tests bestehen weiterhin beziehungsweise werden passend erweitert.
- Visuelle Pruefung erfolgt ohne Playwright CLI, bevorzugt ueber die echte Browseransicht und lokale HTTP-Requests.
