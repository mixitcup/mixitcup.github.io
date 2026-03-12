# Mix it Cup 2026 – Website

Offizielle Webseite des Mix it Cup 2026, dem Trampolinwettkampf des Hochschulsports Münster.

## Entwicklung

```bash
npm install
npm start       # Dev-Server auf http://localhost:8080
npm run build   # Build nach _site/
```

## Deployment

Die Seite wird automatisch über GitHub Actions auf GitHub Pages deployed, sobald Änderungen auf `main` gepusht werden.

### Einrichten (einmalig)

1. GitHub-Repository erstellen
2. Im Repository: **Settings → Pages → Source: GitHub Actions**
3. Pushen – fertig!

## Inhalt aktualisieren

- [src/index.njk](src/index.njk) – Startseite
- [src/ausschreibung.njk](src/ausschreibung.njk) – Ausschreibung mit Pflichtübungen & Kosten
- [src/anmeldung.njk](src/anmeldung.njk) – Anmeldung
- [src/anreise.njk](src/anreise.njk) – Anreiseinfos

## Techstack

- **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
- **Templates:** Nunjucks (.njk) + Markdown
- **Hosting:** GitHub Pages
