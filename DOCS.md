# ShiftMap / CapIA — Project Documentation

## Blog Delivery Transfer to `vincepanik/shiftmap` (2026-04-16)

### Request checked

- Publish the first ShiftMap blog section and article to the GitHub export repo `vincepanik/shiftmap`.
- Ensure the landing page main navigation exposes a `Blog` link.
- Run `npm install` and `npm run build` with 0 errors before pushing.

### Findings

- Source content already existed in the internal repo under:
  - `/app/blog/page.tsx`
  - `/app/blog/articles.ts`
  - `/app/blog/5-cas-usage-ia-pme/page.tsx`
  - `/components/SiteHeader.tsx`
  - `/components/SiteFooter.tsx`
- The GitHub export checkout initially had:
  - no `/app/blog` directory
  - no `/components` directory
  - no blog-specific CSS in `/app/globals.css`
  - no `Blog` link in `/app/page.tsx`
- The export repo still has the global CSS rule that styles every `<nav>` as a fixed top navigation, so footer link groups must stay as `<div className="footer-links">` instead of `<nav>` to avoid recreating the old duplicate-nav bug.

### Action taken

- Added `/app/blog/page.tsx` with a one-card blog index linking to `/blog/5-cas-usage-ia-pme`.
- Added `/app/blog/articles.ts` to hold blog metadata for the first article.
- Added `/app/blog/5-cas-usage-ia-pme/page.tsx` with the French SEO article:
  - H1 on `IA pour PME`
  - 5 H2 sections
  - problem → solution → benefit → example structure in each section
  - CTA to `https://shiftmap.fr/#tarifs`
  - French metadata title, description, and Open Graph title
- Added shared blog-only UI helpers:
  - `/components/SiteHeader.tsx`
  - `/components/SiteFooter.tsx`
- Updated `/app/page.tsx` top navigation and footer links to include `Blog`.
- Updated `/app/globals.css` with `nav-solid` and the blog route styling.
- Ran `npm install`.
- Ran `npm run build` successfully with 0 errors on 2026-04-16.
- Build output confirmed static routes for:
  - `/blog`
  - `/blog/5-cas-usage-ia-pme`

## Secondary Nav Removal (2026-04-15)

### Request checked

- Remove the stray secondary navigation bar showing:
  - `Comment ça marche`
  - `Tarifs`
  - `FAQ`
  - `Mentions légales`
  - `Politique de confidentialité`
- Leave the primary navigation, CTA buttons, Stripe URLs, and footer links themselves unchanged.

### Findings

- Current checkout does **not** contain a root `/index.html`, so there was no second file to update for this task.
- In `/app/page.tsx`, the duplicate link group was the footer link container at approximately lines 526-532.
- The visible top-left "secondary nav" came from that footer link group being marked up as a `<nav>`, while `/app/globals.css` applies fixed top positioning to every `nav` element globally.

### Action taken

- Replaced the footer container in `/app/page.tsx` from `<nav className="footer-links" aria-label="Footer navigation">` to `<div className="footer-links">`.
- Kept all footer links intact and in the same order.
- This removes the secondary nav element from the page structure while preserving the footer content and styling hooks.
- Ran `npm install`.
- Ran `npm run build` successfully with 0 errors on 2026-04-15.

## Stripe Payment Link Verification (2026-04-14)

### Request checked

- Verify the 3 Stripe payment URLs currently used in `app/page.tsx`.
- Replace only links that return an inactive/error response.

### Findings

- `app/page.tsx` already references the expected three URLs:
  - Starter Report → `https://buy.stripe.com/eVq00k3HeaH536qcsXeOB35`
  - Pro Report → `https://buy.stripe.com/eVq7sM3He8yX6iC8cHeOB36`
  - AI Advisor → `https://buy.stripe.com/6oUdRa6Tq9D14au50veOB37`
- HTTP GET verification on 2026-04-14:
  - Starter Report URL returned `200`
  - Pro Report URL returned `200`
  - AI Advisor URL returned `200`
- Browser verification after installing local Chrome via `agent-browser install` reached a live `Stripe Checkout` payment form for all three URLs.
- None of the three URLs showed a Stripe inactive-link error or a `404`.
- No replacement Stripe payment links were needed or created.
- No `.env` file or Stripe secret key was present in the GitHub export checkout, so Stripe API link creation was not required.

### Action taken

- Left `app/page.tsx` unchanged because all existing payment links are live.
- Ran `npm install` successfully.
- Ran `npm run build` successfully with 0 errors.

## Stripe CTA Link Update (2026-04-14)

### Task outcome

- Stripe API credentials were not available in the environment, so the task used the provided fallback Stripe URLs.
- `app/page.tsx` already mapped each product CTA to the correct dedicated Stripe link.
- The required code change was to add `target="_blank"` and `rel="noopener noreferrer"` to every external payment CTA in `app/page.tsx`.
- Verified product-to-link mapping in `app/page.tsx`:
  - Starter Report CTAs:
    - Nav CTA
    - Hero primary CTA
    - Starter pricing CTA
    - Final CTA
    - URL: `https://buy.stripe.com/eVq00k3HeaH536qcsXeOB35`
  - Pro Report pricing CTA:
    - URL: `https://buy.stripe.com/eVq7sM3He8yX6iC8cHeOB36`
  - AI Advisor pricing CTA:
    - URL: `https://buy.stripe.com/6oUdRa6Tq9D14au50veOB37`
- Confirmed no Pro or AI Advisor CTA shares a URL with another product. Starter uses one dedicated URL across all Starter-specific CTAs.

## Stripe CTA Verification (2026-04-14)

### Task outcome

- Verified that `app/page.tsx` and `index.html` already use the exact required Stripe payment links for all three offer CTAs:
  - Starter Report → `https://buy.stripe.com/eVq00k3HeaH536qcsXeOB35`
  - Pro Report → `https://buy.stripe.com/eVq7sM3He8yX6iC8cHeOB36`
  - AI Advisor → `https://buy.stripe.com/6oUdRa6Tq9D14au50veOB37`
- No source-code change was required in those two files because the checked-in URLs already matched the requested values exactly.
- Ran `npm install` and `npm run build` in the GitHub export repo checkout; build passed successfully on 2026-04-14.

### CTA locations verified

- `app/page.tsx`
  - Starter CTA links: lines 45, 80, 254, 508
  - Pro CTA link: line 296
  - AI Advisor CTA link: line 338
- `index.html`
  - Starter CTA links: lines 1233, 1264, 1438, 1692
  - Pro CTA link: line 1480
  - AI Advisor CTA link: line 1522

## Stripe Products & Pricing (configured 2026-04-13)

All products are live in NanoCorp's Stripe account with EUR currency.

### Products

| Product Name    | Price     | Type              | Product ID                              |
|-----------------|-----------|-------------------|-----------------------------------------|
| Starter Report  | 97€       | One-time payment  | d732c833-fe22-4689-a8d1-0603e8805c30   |
| Pro Report      | 147€      | One-time payment  | 453f2a80-e4d8-43d0-b303-bfc0ebc177ca   |
| AI Advisor      | 99€/month | Recurring (note)  | 36dae6a0-95d2-4aa0-b5b3-9e9fe8261f21   |

> **Note:** The `nanocorp products create` CLI does not expose a `--recurring` flag. AI Advisor
> was created as a 9900 EUR product. If true subscription/recurring billing is needed,
> it must be configured directly in the Stripe dashboard.

### Individual Payment Links (auto-generated per product)

| Product        | Payment Link URL                                      |
|----------------|-------------------------------------------------------|
| Starter Report | https://buy.stripe.com/eVq00k3HeaH536qcsXeOB35       |
| Pro Report     | https://buy.stripe.com/eVq7sM3He8yX6iC8cHeOB36       |
| AI Advisor     | https://buy.stripe.com/6oUdRa6Tq9D14au50veOB37       |

### Combined Payment Link (all active products)

```
https://buy.stripe.com/6oUdRa6Tq9D14au50veOB37
```

This is the link returned by `nanocorp payments link` — it lists all active products
with adjustable quantities. Use this for the ShiftMap landing page "Buy Now" button.

---

## Landing Page (index.html) — created 2026-04-13

Single-file static landing page at `/index.html`. No external frameworks; Google Fonts only.

### Sections
1. **Hero** — tagline, sub-headline, CTA → Starter Stripe link, 3 stats (24h / 3-5 priorités / 97€)
2. **Problème** — 3 pain-point cards (trop de cas d'usage, pas de temps, peur du projet lourd)
3. **Solution** — 3-step flow (questionnaire → analyse IA → feuille de route en 24h)
4. **Tarifs** — 3 pricing cards with real Stripe per-product links (Starter 97€ / Pro 147€ / AI Advisor 99€/mois)
5. **Témoignages** — 3 placeholder testimonials (SME decision-makers)
6. **FAQ** — 5 questions, CSS-only accordion (no JS)
7. **CTA finale** — → Starter Stripe link
8. **Footer** — ShiftMap © 2025, mentions légales placeholder, contact@shiftmap.fr

### Design
- Palette: dark navy `#0B1D33` / white / electric blue `#1D6EFF`
- Fonts: Fraunces (display/serif) + DM Sans (body)
- Mobile responsive (breakpoints at 900px and 600px)
- Fade-up scroll animations via IntersectionObserver
- SEO meta tags: feuille de route IA, PME, transformation digitale

### Stripe links used
- Starter CTA → `https://buy.stripe.com/eVq00k3HeaH536qcsXeOB35`
- Pro CTA → `https://buy.stripe.com/eVq7sM3He8yX6iC8cHeOB36`
- AI Advisor CTA → `https://buy.stripe.com/6oUdRa6Tq9D14au50veOB37`

---

## Repository Structure

- Static `index.html` at repo root (original source, preserved)
- Next.js App Router at `app/` directory:
  - `app/layout.tsx` — metadata (SEO, OG tags), Google Fonts
  - `app/globals.css` — all landing page CSS
  - `app/page.tsx` — ShiftMap HTML converted to JSX with useEffect for JS
- Git repo: nanocorp-hq/capia, main branch
- Vercel deployment: **https://capia.nanocorp.app** (LIVE as of 2026-04-13)

## Deployment

- Platform: Vercel (auto-deploy on push to main)
- Live URL: **https://capia.nanocorp.app**
- Framework: Next.js 15.2.4 (App Router)
- Deployed: 2026-04-13 (commit 04752c0)

---

## Repo Export Findings (documented 2026-04-13)

- Current working repo path: `/home/worker/repo`
- Current branch: `main`
- Existing git remote: `origin -> git@github.com:nanocorp-hq/capia.git`
- Local/untracked directories present during export task: `.agents/`, `.claude/`
- ShiftMap codebase confirmed in this repo:
  - `package.json` name: `shiftmap`
  - Static landing page: `/index.html`
  - Next.js app: `/app/layout.tsx`, `/app/page.tsx`, `/app/globals.css`
  - Supporting docs: `/README.md`, `/docs/shiftmap-landing-copy-fr-v1.md`
- Existing commit history before export:
  - `f56db16` Update DOCS.md with Vercel deployment details
  - `04752c0` Deploy ShiftMap landing page as Next.js app on Vercel
  - `a8c1e8b` Update DOCS.md with landing page details
  - `a12798c` Add ShiftMap French landing page with correct pricing
  - `931b0e6` Add Stripe product IDs and payment links for ShiftMap
  - `a3c6e08` Add ShiftMap onboarding questionnaire MVP
  - `850fca8` Add ShiftMap French landing page copy v1
  - `3fb6754` Define ShiftMap MVP commercial offer
  - `8fb2b7f` Initial commit
- External GitHub export target created via GitHub API:
  - Repo: `vincepanik/shiftmap`
  - URL: `https://github.com/vincepanik/shiftmap`
  - Created at: `2026-04-13T19:58:05Z`
  - Export strategy: keep existing `origin` pointed at `nanocorp-hq/capia`; add a second remote for the GitHub export

### Export Completion (2026-04-13)

- Second remote added: `shiftmap -> https://github.com/vincepanik/shiftmap.git`
- Local-only artifacts excluded from export via `.gitignore`: `.agents/`, `.claude/`
- Branches pushed to GitHub export repo: `main`
- Tags pushed: none
- Commits added during export task:
  - `386175e` `feat: initial ShiftMap landing page — French, Stripe-connected`
  - `d2bffde` `docs: record ShiftMap GitHub export`
  - `d49c3de` `docs: correct ShiftMap export summary`
- Key files pushed:
  - `/index.html`
  - `/package.json`
  - `/next.config.ts`
  - `/tsconfig.json`
  - `/README.md`
  - `/app/layout.tsx`
  - `/app/page.tsx`
  - `/app/globals.css`
  - `/docs/shiftmap-landing-copy-fr-v1.md`
  - `/docs/shiftmap-questionnaire-onboarding-mvp-fr.md`
  - `/DOCS.md`
