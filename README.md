# Preferred Plumbing Solutions — Next.js + Tailwind CSS

Complete editable source for the Preferred Plumbing redesign. Includes 53 pages, all 20 service pages, 15 location pages, resource pages, real gallery photographs, generated decorative assets, and the truck-style header/footer logo.

## Run locally

Install Node.js 20.9 or newer (Node 22 LTS recommended), then run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run typecheck
npm run check:links
```

Run `npm run check` to build the complete static export and verify every local link and asset reference in one command.

`next build` exports the site to `out/`. Upload the contents of `out/` to a static host. Use `npm run dev` for editing and your host’s static preview for the built output.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `22`
- Set `NEXT_PUBLIC_SITE_URL` to the production origin, without a trailing slash.
- No server adapter or Cloudflare Worker is needed for this static export.

The `_headers` file is included in `public/` and copied to `out/` for Cloudflare Pages.

## Edit the project

- `src/app/page.tsx`: homepage.
- `src/app/<route>/page.tsx`: a separate editable TSX page for each route.
- `src/components/Header.tsx`: responsive header, service menu and resource menu.
- `src/components/Footer.tsx`: shared footer and mobile call bar.
- `src/components/ServicesExplorer.tsx`: React service search and category filters.
- `src/components/ProjectGallery.tsx`: React project filters and accessible photo lightboxes.
- `src/components/EstimateForm.tsx`: contact form and service preselection.
- `src/components/ServiceCards.tsx`: shared service cards.
- `src/components/Icon.tsx` and `src/data/icons.ts`: local SVG icon system.
- `src/data/services.ts`: service names, descriptions, categories and icons.
- `src/data/gallery.ts`: project photographs and categories.
- `src/data/site.ts`: company contact information, domain and logo.
- `src/app/globals.css`: Tailwind v4 import, theme tokens and the custom design styles preserving the approved layout. Use Tailwind utilities directly in TSX; utilities override the component layer.
- `public/assets/` and `public/Preferred-Plumbing-Hero-Images/`: optimized local WebP graphics, logo and photographs.

This is native App Router/React source. It does not use iframes or inject HTML strings. Repeated interactive elements are reusable React components.

## Contact form

The form currently prepares an email in the visitor's email app. It does **not** submit to a server, store leads, or silently send messages. To receive submissions directly, connect `EstimateForm.tsx` to your chosen form endpoint. A static export does not provide Next.js API routes.

## Images and launch notes

The gallery images were copied from Preferred's existing live site. Truck, van, equipment, mountain artwork and owner portrait are supplied/generated design assets. Do not describe decorative generated scenes as completed project photographs. The site retains the source site's service descriptions and claims; have Preferred review them before production launch.

Fonts load from Google Fonts in `layout.tsx`; all image assets are local. Replace this with self-hosted fonts if desired. The ZIP includes source and the npm lockfile, not `node_modules`, build cache, or generated `out/` files.

## Expanded design and content

The header uses Locations in place of Learn. The resource pages remain linked in the footer. All 20 service pages include service-specific planning information and artwork. All 15 location pages use local copy and FAQs sourced from the live site, with a searchable Locations directory at `/locations/`. FAQs are searchable and grouped. About, Gallery, Contact and guides include additional editorial and planning sections.

Additional content and components:

- `src/data/service-depth.ts`: service-specific artwork, customer scenarios and planning checklists.
- `src/data/locations.ts`: local descriptions and FAQs.
- `src/data/faqs.ts`: searchable FAQ content.
- `src/components/ServiceDepth.tsx`: layouts for repairs, heating, water, construction and remodeling.
- `src/components/LocationPage.tsx`: detailed local service pages.
- `src/components/LocationsPage.tsx` and `LocationsDirectory.tsx`: Locations hub and search.
- `src/components/EditorialSections.tsx`: about, gallery, contact and guide design sections.

Seven new foreground assets are included in `public/assets/`, including the realistic tools used for Plumbing & Repairs.
