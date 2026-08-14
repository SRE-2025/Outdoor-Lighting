# Research Turf Management — Website

Marketing website for **Research Turf Management** — landscape design, build &
turf care in Buda, TX and across Central Texas. _"Growing Green, Living Beauty."_

Built as a fast, SEO-first **static site** with [Eleventy (11ty)](https://www.11ty.dev/).
It generates plain HTML/CSS/JS with no runtime dependencies, so it hosts anywhere —
GitHub Pages today, AWS S3 + CloudFront when the domain is ready.

---

## Quick start

```bash
npm install        # one-time
npm start          # dev server with live reload → http://localhost:8080
npm run build      # production build into ./_site
```

You need [Node.js](https://nodejs.org/) 18+ (tested on 20 & 22).

---

## How to edit content (no coding needed for most changes)

Almost everything lives in **data files** under `src/_data/` — edit these and the
whole site updates:

| File | What it controls |
|------|------------------|
| `src/_data/site.json` | Business name, phone, email, address, hours, discount, trust badges, sister-company link |
| `src/_data/services.js` | The 6 services. Add/edit/remove one here and it updates the menu, home page, footer, sitemap, and generates its own page automatically |
| `src/_data/locations.js` | Service-area cities. `priority` cities get full landing pages; `additional` cities are listed only |
| `src/_data/reviews.js` | Customer reviews and the aggregate rating. **Only add real reviews.** |

Page layouts and wording live in `src/` (`.njk` files) and shared pieces in
`src/_includes/`.

### Add a new service
Add an object to the array in `src/_data/services.js` (copy an existing one). A new
page at `/services/<slug>/` is generated on the next build, and it's added to every
menu and the sitemap automatically.

### Add a full city page
Add an object to `locations.priority` in `src/_data/locations.js` with a unique
`intro` and `note`. Keep the copy genuinely different per city — thin duplicate
pages hurt SEO.

### Add photos
Drop images into `src/assets/img/`. Currently the design uses tasteful branded
placeholders (green gradient tiles) wherever a photo goes — search the templates for
`class="media"` to swap in real `<img>` tags. Real crew, truck, and before/after
photos are the single biggest visual upgrade available.

---

## Project structure

```
.eleventy.js              Eleventy config (collections, filters, pathPrefix)
src/
  _data/                  Site data — edit these to change content
  _includes/
    layouts/base.njk      HTML shell: <head>, SEO meta, JSON-LD schema
    partials/             header, footer, CTA band, SVG icons
  assets/                 css / js / img (copied as-is to the build)
  index.njk               Home
  about.njk               About / origin story / team
  services/               Services index + one generated page per service
  service-areas/          Service-area index + one page per priority city
  portfolio.njk           Project gallery (placeholders ready for photos)
  reviews.njk             Reviews
  contact.njk             Contact + estimate form
  sitemap.njk, robots.njk, 404.njk
.github/workflows/        CI + deploy pipelines
```

---

## SEO built in

- Unique `<title>` + meta description on every page
- Canonical URLs, Open Graph + Twitter card tags, social share image
- **JSON-LD structured data** — `LandscapingBusiness` site-wide (name, address,
  geo, hours, 5.0★ rating) plus per-page `Service` schema
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic, accessible, mobile-first HTML; fast (no JS frameworks)
- Data-driven service + city pages for local-search surface area

> **Note:** the canonical/OG URLs point to `https://researchturfmgmt.com`. Change
> `url` in `src/_data/site.json` if the production domain differs.

---

## Deployment

### Now — GitHub Pages preview (free, instant)
The `Deploy preview to GitHub Pages` workflow publishes a live preview at
`https://<org>.github.io/<repo>/` on every push to `main`.
**Enable once:** Repo → **Settings → Pages → Source: GitHub Actions**.

### Later — AWS S3 + CloudFront (production)
The `Deploy to AWS` workflow is included but **dormant** — it's skipped until you
switch it on, so it never fails while you're GitHub-only. When the domain is ready:

1. Create an S3 bucket (static hosting) + CloudFront distribution + ACM cert.
2. In Repo → Settings add:
   - **Secrets:** `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET`,
     `CLOUDFRONT_DISTRIBUTION_ID`
   - **Variables:** `AWS_REGION` (e.g. `us-east-1`), and `AWS_DEPLOY_ENABLED = true`
3. Push to `main`. The site builds, syncs to S3 (HTML no-cache, assets
   long-cache), and invalidates the CloudFront cache.

---

## Wiring up the contact form

The form on `/contact/` is ready for a no-server handler. Create a free form at
[Formspree](https://formspree.io) and replace `YOUR_FORM_ID` in `src/contact.njk`
with your endpoint. Until then, the phone and email links work immediately.

---

## Pre-launch checklist (from the discovery brief)

- [ ] **Fix NAP consistency** — pick ONE primary phone per brand and correct Google,
      Yelp, BBB, Facebook, etc. (multiple numbers are in circulation).
- [ ] Confirm domain + platform ownership before migrating off UENI.
- [ ] Resolve `reasonsystems.us` (an indexed duplicate site).
- [ ] Add real photos (crews, trucks, before/afters) and a project gallery.
- [ ] Connect the contact form (Formspree).
- [ ] Set up a review-request flow to grow beyond the current review count.
- [ ] Verify the production domain, then activate the AWS workflow.

---

_Family-owned in Buda since 1998 · 5.0★ · BBB A+_
