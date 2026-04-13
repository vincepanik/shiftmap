# ShiftMap / CapIA — Project Documentation

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
- Total commits pushed on `main`: `11`
- Commits added during export task:
  - `386175e` `feat: initial ShiftMap landing page — French, Stripe-connected`
  - `d2bffde` `docs: record ShiftMap GitHub export`
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
