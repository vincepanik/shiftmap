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

- Static `index.html` at repo root (no Next.js yet)
- Git repo: nanocorp-hq/capia, main branch
- Vercel deployment target: https://capia.nanocorp.app (Next.js auto-detect pending setup)
