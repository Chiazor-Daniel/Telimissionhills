# TelimissionHills & Co.

Website for TelimissionHills & Co., legal practitioners at No. 197 Odili Road, Trans-Amadi, Port Harcourt.
Live at https://telimissionhills.com

## Editing content

Every fact on the site (partners, cases, practice areas, phone numbers, address) lives in `lib/firm.js`.
Change it there and every page updates. Add a page's URL to `public/sitemap.xml` when you add a page.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Contact form

The form has no server. Submitting opens the visitor's email app with the message addressed to the firm,
so nothing is ever silently lost.
