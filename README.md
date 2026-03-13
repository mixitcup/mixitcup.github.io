# Mix it Cup 2026 – Website

Webseite des Mix it Cup 2026, dem Trampolinwettkampf des Hochschulsports Münster.

**Noch im Aufbau!!!**

## Entwicklung

```bash
npm install
npm start       # Dev-Server auf http://localhost:8080
npm run build   # Build nach _site/
```

## Deployment

Die Seite wird automatisch über GitHub Actions auf GitHub Pages deployed, sobald Änderungen auf `main` gepusht werden.

## Techstack

- **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
- **Templates:** Nunjucks (.njk) + Markdown
- **Hosting:** GitHub Pages
