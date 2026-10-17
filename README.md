# aleaon-web

Company website for **Aleaon Technologies** (aleaon.com), the maker of Padhaaii.
Angular 18, standalone components, no UI library. Every page is prerendered to static HTML at build time for SEO; there is no server-side code.

## Commands

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # static site in dist/aleaon-web/browser
```

## Where to change things

| What | File |
|---|---|
| Company name, app URL, contact email/phone, demo form endpoint | `src/app/site.config.ts` |
| Brand colours, font, buttons, spacing | `src/styles.scss` |
| Module text on Home and Product pages | `src/app/data/modules.ts` |
| Pricing plans and FAQ | `src/app/pages/pricing/pricing.component.ts` |
| Aleaon logo (working "Teal A's" version) | `src/app/shared/aleaon-logo.component.ts`, `public/favicon.svg` |
| Padhaaii logo files | `public/brand/padhaaii/` |
| Pages to prerender | `routes.txt` (also add to `app.routes.ts` and `public/sitemap.xml`) |

## Before launch

- [x] **Screenshots:** real portal and app screenshots are in `public/screens/` (WebP). They were captured from the shiksha-frontend and shiksha-mobile source renamed to Padhaaii, with sample data for a demo school, "Greenfield Public School". To replace one, overwrite the file with the same name.
- [ ] **Pricing:** replace the `[Standard plan feature …]` placeholders in `pricing.component.ts`.
- [ ] **Demo form:** set `demoFormEndpoint` (e.g. an AWS Lambda function URL that emails you). Until then the form validates and says bookings open soon. It POSTs JSON: name, school, role, city, students, phone, email, plan, message, consent, source, submittedAt.
- [ ] **Contact details:** set `contactEmail` / `contactPhone`; they appear in the footer, contact page and privacy policy automatically.
- [ ] **Legal:** have `/privacy` and `/terms` reviewed.
- [ ] **Company details:** once incorporated, add the legal name and CIN to the footer.

## Deploy to EC2 (Nginx)

```bash
npm run build
rsync -av --delete dist/aleaon-web/browser/ ubuntu@<EC2_IP>:/var/www/aleaon/
```

First time on the server: copy `deploy/nginx-aleaon.conf` to `/etc/nginx/sites-available/aleaon`, symlink it into `sites-enabled`, run `sudo nginx -t && sudo systemctl reload nginx`, then `sudo certbot --nginx -d aleaon.com -d www.aleaon.com`. Point aleaon.com and www.aleaon.com A records at the EC2 IP.

Fonts are self-hosted (`@fontsource/outfit`), so no requests go to Google.
