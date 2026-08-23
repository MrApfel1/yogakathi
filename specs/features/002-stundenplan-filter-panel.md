# 002 - Stundenplan Filter-Panel

## Status
Geplant und freigegeben zur Umsetzung am 21.05.2026.

## Ziel
Der Bereich "Stundenplan & Buchung" soll nicht mehr als lange Seitenliste erscheinen, sondern als kompakter, scrollbarer Buchungsbereich mit Filter fuer Yoga, Breathwork und Monat.

## Anforderungen
- Der bestehende Anker `#stundenplan` bleibt erhalten.
- Die Eversports-Daten werden weiterhin per GraphQL geladen.
- Der Terminbereich bekommt eine eigene Scrollflaeche, damit die Seite nicht ueber viele Wochen in die Laenge gezogen wird.
- Kategorie-Filter:
  - `Alle`
  - `Yoga`
  - `Breathwork`
- Yoga-Termine werden ueber Namen wie `Yoga`, `Flow`, `Vinyasa`, `Elemental Yoga` erkannt.
- Breathwork-Termine werden ueber Namen wie `Breathwork`, `Breathing`, `Meditation`, `Atem` erkannt.
- Monatsfilter:
  - Default: alle kommenden Termine.
  - Optionen werden aus den geladenen Terminen generiert.
  - Filter wirkt gemeinsam mit dem Kategorie-Filter.
- Mobile:
  - Filter duerfen umbrechen.
  - Termin-Karten bleiben gut tappbar.
  - Das Panel nutzt eine begrenzte Hoehe mit internem Scrollen.
- Empty State:
  - Wenn keine Termine zum Filter passen, erscheint eine klare Meldung.
- Fehlerzustand:
  - API-Fehler werden im Panel angezeigt.

## Akzeptanzkriterien
- Die Seite selbst wird durch den Stundenplan nicht endlos lang.
- Kategorie- und Monatsfilter aktualisieren die angezeigten Termine ohne Reload.
- Der Buchen-Link bleibt pro Termin erhalten.
- Der Zustand ist auf Desktop und Mobile lesbar und passend zum Ocean/Glassmorphism-Design.
- Keine Playwright-CLI-Pruefung.
