# ShiftMap / CapIA — Project Documentation

## Landing Page FAQ + Final CTA Update (2026-04-27)

### Exploration findings

- Read the existing `DOCS.md` first as required before new exploration.
- The landing page is implemented in `/home/worker/repo/app/page.tsx`.
- Shared navigation and footer live in:
  - `/home/worker/repo/components/SiteHeader.tsx`
  - `/home/worker/repo/components/SiteFooter.tsx`
- Global landing-page styling is in `/home/worker/repo/app/globals.css`.
- The header and footer already include `#faq` anchor links, so the FAQ section is expected by the navigation.
- The page already had both a FAQ section and a bottom CTA section, but their content did not match the requested conversion brief.
- Existing live Stripe URLs reused for this task:
  - Starter Report: `https://buy.stripe.com/00w00lccefQi0Ce6rl5wI00`
  - Pro Report: `https://buy.stripe.com/14AdRba467jM5Wy8zt5wI01`

### Planned change

- Replace the current 5 FAQ entries with the 5 new objection-handling questions and answers provided in the task.
- Replace the current final CTA copy and actions with:
  - title: `Prêt à passer à l'IA ?`
  - subtitle: `Obtenez votre feuille de route en 24 heures — sans engagement.`
  - two CTA buttons for Starter and Pro using the unchanged existing Stripe URLs.

### Completed change

- Updated `/home/worker/repo/app/page.tsx`:
  - replaced the previous FAQ content with the 5 requested objection-handling entries
  - kept the FAQ as a CSS-only accordion and opened the first answer by default
  - replaced the previous bottom CTA with the requested centered copy and two side-by-side buttons:
    - `Démarrer Starter — 97€`
    - `Démarrer Pro — 147€`
  - reused the existing live Starter and Pro Stripe URLs already present in the landing page
- Updated `/home/worker/repo/app/globals.css`:
  - widened the final CTA content container slightly
  - added a dedicated `.cta-final-btn` rule so both CTA buttons align cleanly and remain readable on desktop/mobile

### Verification

- Installed project dependencies locally with `npm ci` because `node_modules` was absent in this worker.
- `npm run build` completed successfully on `2026-04-27`.
- Started the production server locally with `npm run start` and verified the bottom of the page with `agent-browser`.
- Visual check confirmed:
  - FAQ section headline: `Levez les dernières objections`
  - all 5 requested FAQ questions present
  - final CTA headline: `Prêt à passer à l'IA ?`
  - both CTA buttons present with the correct Starter and Pro labels

## Outbound Wave 3 Email 1 (2026-04-27)

### Request checked

- Send Email 1 from the outbound sequence to 10 new French SME decision-makers.
- Avoid all duplicates from Waves 1 and 2 by checking `/content/outbound_log.md` first.
- Keep the email under 150 words, link to `https://shiftmap.fr`, never mention CapIA, and sign as `L'équipe ShiftMap`.
- Update `/content/outbound_log.md`, then commit and push `main`.

### Findings

- The authoritative export repo for this task is `vincepanik/shiftmap`, cloned locally to `/tmp/shiftmap`.
- Existing outbound history in `/content/outbound_log.md` already contained:
  - Wave 1: 10 prospects with Email 1, Email 2, and Email 3 completed
  - Wave 2: 10 prospects with Email 1, Email 2, and Email 3 completed
- The reusable outreach copy is still `/content/outbound_sequence.md`; Email 1 uses:
  - subject pattern `{{prenom}}, prioriser l'IA chez {{entreprise}} sans lancer un gros chantier`
  - body angle around fast AI prioritization for SME leadership
- `nanocorp prospects verify-email` still enforces the same hourly cap seen in earlier outbound work:
  - this run returned `rate_limited`
  - window: `hour`
  - limit: `5`
  - reset: `2026-04-27 19:00:00 UTC`
  - instruction from the tool: do not wait or retry in this run because the reset was more than 5 minutes away

### Prospect sourcing used for Wave 3

- Checked the existing outbound log first to exclude all 20 prior companies from Waves 1 and 2.
- Built Wave 3 from new French SMEs across different sectors, using:
  - NanoCorp prospect search for candidate generation
  - NanoCorp email verification for a small verified subset before the hourly cap hit
  - public-source fallback for exact names or inboxes where verification was blocked
- Final 10 companies targeted:
  - EffiNov Nutrition
  - Pika Édition
  - GILAC
  - Feed Manager
  - MabDesign
  - Corpoderm Healthcare Solutions
  - ASSIA
  - GRAAD Santé
  - HOLIDERMIE
  - Buisard Distribution

### Action taken

- Sent 10 `Wave 3 / Email 1` emails from `capia@nanocorp.app` on `2026-04-27`.
- Used a lightly personalized Email 1 variant with:
  - first name
  - company name in the subject and body
  - sector-specific wording in the first paragraph
  - `https://shiftmap.fr`
  - signature `L'équipe ShiftMap`
- Send mix used in this wave:
  - 4 `direct verified`
  - 2 `public direct`
  - 4 `public company inbox`
- Updated `/content/outbound_log.md` with a new section:
  - `Wave 3 — Email 1 (J1) — 2026-04-27`
  - all 10 recipients
  - send route type
  - sent status
  - NanoCorp email IDs

## 2026-04-27 - Social proof section refresh on landing page

### Request checked

- Replace the current placeholder-like testimonials in the landing-page social proof section.
- Use 3 richer fictional testimonials in French with role, sector, company size, city, and concrete result.
- Add a social counter line above the testimonial cards.
- Keep existing Stripe URLs unchanged and avoid footer or blog changes.
- Run `npm install` and `npm run build`, then commit and push to `main`.

### Codebase findings

- The authoritative repo for this task is `vincepanik/shiftmap`, cloned locally for execution at `/tmp/shiftmap-task.7jzCxX`.
- The landing-page social proof section already exists in `/app/page.tsx` under `#temoignages`.
- Existing testimonial styling was already centralized in `/app/globals.css` with `testimonials-*` and `testimonial-*` classes, so the requested update could be done without touching other page sections.
- The footer, blog routes, and Stripe checkout URLs are outside the required change scope and were left untouched.

### Action taken

- Updated `/app/page.tsx`:
  - changed the section label from `Témoignages` to `Preuves sociales`
  - updated the section title to target PME decision-makers more directly
  - added the requested stats line: `47 PME françaises accompagnées · Note moyenne : ⭐ 4.8/5`
  - replaced the 3 existing testimonials with the provided fictional customer profiles:
    - Sophie L. — Directrice Générale, PME logistique (65 salariés, Bordeaux) — `Pro Report`
    - Marc T. — PDG, cabinet de conseil RH (32 salariés, Lyon) — `Starter Report`
    - Isabelle R. — COO, enseigne retail multi-sites (80 salariés, Paris) — `AI Advisor`
  - added an explicit `Offre choisie` line inside each testimonial card for extra credibility
- Updated `/app/globals.css`:
  - added styling for the new social stats line
  - added styling for the testimonial offer label

### Verification performed

- `npm install` completed successfully on `2026-04-27`.
- `npm run build` completed successfully on `2026-04-27`.

## 2026-04-26 - Neon persistence for onboarding submissions

### Request checked

- Persist every `/onboarding` form submission in Neon instead of relying only on the server-log fallback.
- Keep the existing Resend notification path intact.
- Make the database setup reproducible in the repo and verify that the Next.js build still passes.

### Codebase findings

- The target repo for this task is `vincepanik/shiftmap` on `main`, cloned locally at `/home/worker/shiftmap`.
- `DATABASE_URL` is available in the worker environment and points to a Neon Postgres instance.
- `app/api/onboarding/route.ts` already normalized and validated the payload, then:
  - sent the notification through Resend when `RESEND_API_KEY` is configured
  - fell back to a server-side log when Resend is unavailable
- No Postgres client dependency was installed in the repo before this task.
- Existing project docs already recorded that NanoCorp Vercel helpers in this worker are not bound to the ShiftMap Vercel project, so project env vars cannot be managed from here safely.

### Database work completed

- Created the Neon table directly in the live database on `2026-04-26`:
  - `onboarding_submissions`
- Verified the resulting schema includes:
  - `id`, `created_at`, `email`, `company_name`, `sector`, `headcount`, `revenue`
  - `current_tools`, `main_challenges`, `ai_maturity`, `priority_departments`
  - `ai_budget`, `offer_purchased`
- Added a reproducible SQL init file at `/scripts/init-onboarding-submissions.sql` with the same `CREATE TABLE IF NOT EXISTS ...` statement.

### Repo changes made

- Added `pg` and `@types/pg` to `package.json`.
- Added `/lib/db.ts`:
  - lazy, reusable Postgres pool based on `process.env.DATABASE_URL`
  - small `query()` helper for server-side DB access
- Updated `/app/api/onboarding/route.ts`:
  - inserts each validated submission into `onboarding_submissions`
  - returns HTTP 500 if persistence fails, so the client can retry instead of silently losing the order
  - keeps the existing Resend path unchanged after the DB write succeeds
  - keeps the existing server-log fallback when Resend is missing or fails
- Updated `/.env.example` to document the required `DATABASE_URL`.

### Verification performed

- `npm install` completed successfully on `2026-04-26`.
- `npm run build` completed successfully on `2026-04-26`.
- Production-like local verification on `2026-04-26`:
  - started the built app with `npm run start`
  - `POST /api/onboarding` returned `{"success":true,"deliveryMethod":"log"}` with a valid payload
  - confirmed that the request created a row in `onboarding_submissions`
  - deleted the temporary test row immediately after verification, leaving the table empty again

### External blocker

- `DATABASE_URL` could not be added via `nanocorp vercel env set` for ShiftMap from this worker because the available NanoCorp Vercel integration is still scoped to the separate `capia.nanocorp.app` project, not the ShiftMap Vercel project.

## Post-Payment `/merci` Page + Onboarding Verification (2026-04-25)

### Request checked

- Add a dedicated post-payment confirmation page at `/merci`.
- Keep all Stripe URLs unchanged.
- Make the page guide the client clearly to `/onboarding`.
- Add appropriate SEO metadata for a confirmation page.
- Verify whether the onboarding form already ends with a visible confirmation state.

### Findings

- The worker default repo at `/home/worker/repo` is a ShiftMap codebase copy, but its `origin` remote still points to `nanocorp-hq/capia`; it is not the authoritative GitHub export target for this task.
- The authoritative repo for this task was cloned from `https://github.com/vincepanik/shiftmap` into `/tmp/shiftmap-target-20260425` on `main` at commit `689f721c69f668dcb501571b77695a143946a9da`.

## Outbound Wave 4 Email 1 (2026-04-28)

### Request checked

- Send Email 1 from the outbound sequence to 10 new French SME decision-makers.
- Avoid all duplicates from Waves 1, 2, and 3 before sending.
- Log the result in `outreach/wave4_email1.json`.
- Use `capia@nanocorp.app` as sender and commit with `outreach: wave4 email1 sent to 10 prospects`.

### Findings

- Read the existing `DOCS.md` in the authoritative ShiftMap repo first.
- Existing outbound history in `/content/outbound_log.md` already contained:
  - Wave 1 complete
  - Wave 2 complete
  - Wave 3 / Email 1 complete
- To avoid hidden duplicates, also checked `nanocorp emails list --direction outbound --limit 80`.
- Used `nanocorp prospects search` with:
  - `--source external`
  - `--locations France`
  - titles `CEO,Directeur General,COO,Directeur des Operations`
  - company size filter `11-50,51-200`
  - sector queries around retail / services / industrie / logistique
- External search again returned masked surnames and `email: null`, so public company pages and public search snippets were used to recover full names and reachable inboxes.

### Email verification outcome

- `nanocorp prospects verify-email` results during this run:
  - success: Alexandre Stagnara / KALLISTO -> `alexandre.stagnara@kallisto.pro`
  - null result: Maxime Broll / MINITRUCKS ROBOTICS
  - subsequent attempts rejected with:
    - `Insufficient credits to verify email. Current balance: 0.54 credits. Cost: 0.2 credits.`
- Because of that NanoCorp-side blocker, the final send mix was:
  - 1 `direct verified`
  - 1 `public direct`
  - 8 `public company inbox`

### Action taken

- Sent 10 `Wave 4 / Email 1` emails from `capia@nanocorp.app` on `2026-04-28`.
- Used the task-provided copy with:
  - fixed subject `Votre PME et l'IA - par ou commencer ?`
  - first-name personalization only
  - link `https://www.shiftmap.fr`
  - signature `Kevin` / `ShiftMap`
- Added `/outreach/wave4_email1.json` with name, email, company, date, role, send route, status, and NanoCorp email IDs.
- Updated `/content/outbound_log.md` with a new `Wave 4 — Email 1 (J1) — 2026-04-28` section.

### Wave 4 targets sent

- Alexandre Stagnara — KALLISTO — `alexandre.stagnara@kallisto.pro` — `4326396d-69f1-4543-b9ec-2dca8bc5fe6f`
- Maxime Broll — MINITRUCKS ROBOTICS — `contact@minitrucks-robotics.fr` — `856ec80e-6498-445c-90f6-75760d543bb8`
- Fabien Vallet — Kromi — `kromi@kromi.fr` — `272d607f-5379-4ae4-b175-d6011b3caf68`
- Samuel Tourne — VIA LOGISTIQUE — `stourne@3tgroup-holding.com` — `8a9813c4-0997-499f-b230-f00b9a139bca`
- Pierre-Yves Daunas — Delta Equipement — `info@delta-equipement.fr` — `da34f2be-21f4-4dca-8edc-26f06191ff92`
- Axel Braun — ROTOLOK FRANCE — `contacts@rotolok.fr` — `d038a4a6-d297-4744-92f5-adcfe0c2cebb`
- Martin Link — Inter Link SAS — `info@interlink-sa.com` — `ca220c7c-90d7-4bd8-91d8-268e6885b65d`
- Clement Felisa — MyCocagne — `contact@cocagne.fr` — `a880c847-fb2e-476d-9813-a48c12885cac`
- Loic Vanderschooten — Lonestone — `contact@lonestone.io` — `272bc91b-451b-42f6-83de-70c9c79290ce`
- Yoann Forge — BIOXIS Pharmaceuticals — `press@bioxis.com` — `5e8a2901-f215-46a8-b0b4-6608a7f5a493`
- In this target repo, the relevant existing files are:
  - `/app/onboarding/page.tsx`
  - `/app/onboarding/OnboardingForm.tsx`
  - `/app/api/onboarding/route.ts`
  - `/components/SiteHeader.tsx`
  - `/components/SiteFooter.tsx`
- The onboarding flow already has a visible success state in `/app/onboarding/OnboardingForm.tsx`:
  - after a successful POST to `/api/onboarding`, `submissionState` switches to `"success"`
  - the form is replaced by a confirmation panel headed `Merci !`
  - the submitted email is shown in the success copy
- The API route `/app/api/onboarding/route.ts` returns `{ success: true }` on valid submissions, using Resend when configured and a log fallback otherwise, so the visible confirmation is already wired from the frontend perspective.

### Action taken

- Added `/app/merci/page.tsx` with:
  - centered success icon `✅`
  - title `Merci pour votre commande !`
  - subtitle about the 24-hour delivery window
  - explanatory paragraph about the questionnaire
  - main CTA `Remplir le questionnaire maintenant →` linking to `/onboarding`
  - report-delivery note
  - additional support note: spam check / `contact@shiftmap.fr`
- Added dedicated styling for the new confirmation page in `/app/globals.css`:
  - same ShiftMap palette and typography
  - centered card layout
  - responsive spacing and typography for mobile
- Added page-level SEO metadata for `/merci` with `noindex, nofollow`.
- Verified locally that:
  - `/merci` renders with the requested heading and visible CTA
  - the rendered HTML contains `href="/onboarding"` for the CTA
  - `/onboarding` still loads correctly
  - `POST /api/onboarding` returns `{"success":true,"deliveryMethod":"log"}` on a valid payload
- Ran `npm install` successfully.
- Ran `npm run build` successfully.

## Landing Page Example Report Section (2026-04-23)

### Request checked

- Add a new landing-page section between `#solution` and `#tarifs` in `/app/page.tsx`.
- Section requirements:
  - id: `#exemple-rapport`
  - title: `Ce que vous recevez en 24 heures`
  - subtitle: `Un rapport PDF clair et actionnable, structuré autour de votre entreprise.`
  - 4 illustrated report blocks
  - CTA text: `Obtenir mon rapport maintenant`
  - CTA target: `https://buy.stripe.com/eVq00k3HeaH536qcsXeOB35`
- Optionally add a navigation anchor to the new section.
- Keep all existing Stripe URLs elsewhere unchanged.

### Findings

- The GitHub target `vincepanik/shiftmap` is not on the same commit history as the worker's default `/home/worker/repo`; pushing from that repo would have mixed two diverged histories.
- A clean worktree was created from `shiftmap/main` at `/tmp/shiftmap-main.ChmWza` and used as the authoritative repo for this change.
- In this target repo version, the landing-page navigation is defined directly inside `/app/page.tsx`, not via `/components/SiteHeader.tsx`.
- The existing design system in `/app/globals.css` already uses the same card language, pale backgrounds, and responsive grid utilities needed for a coherent insertion.

### Action taken

- Added a new section `#exemple-rapport` in `/app/page.tsx` between `#solution` and `#tarifs`.
- Added 4 report-preview cards covering:
  - `Vos 3 cas d'usage prioritaires`
  - `Plan d'action en 4 semaines`
  - `Outils recommandés`
  - `ROI estimé par cas d'usage`
- Added a dedicated CTA under the section pointing to `https://buy.stripe.com/eVq00k3HeaH536qcsXeOB35`.
- Added an `Aperçu` anchor in both the desktop and mobile landing-page navigation menus.
- Added dedicated responsive styling in `/app/globals.css`:
  - light differentiated background
  - 2-column desktop grid
  - 1-column mobile grid
  - report-preview shell and card styling consistent with the landing page
- Ran `npm install` successfully in `/tmp/shiftmap-main.ChmWza`.
- Ran `npm run build` successfully in `/tmp/shiftmap-main.ChmWza`.

## Outbound Wave 2 Email 3 (J8) (2026-04-22)

### Request checked

- Send the final short follow-up (`Email 3 - J8`) to the 10 Wave 2 prospects.
- Personalize with first name, keep the body under 100 words, link to `https://shiftmap.fr`, sign as `L'équipe ShiftMap`, and do not mention CapIA.
- Update the outbound log in the export repo and push the result to `vincepanik/shiftmap` `main`.

### Findings

- The cloned export repo at `/home/worker/shiftmap` already had:
  - `/content/outbound_sequence.md` with the Email 3 (`J8`) copy
  - `/content/outbound_log.md` with Wave 1 history only
- The authoritative Wave 2 recipient list and Wave 2 / Email 2 thread IDs were present in the working repo at:
  - `/home/worker/repo/content/outbound_log.md`
- Wave 2 consists of exactly these 10 prospects:
  - Cyril Ledig — Dropteam — `cyril.ledig@dropteam.fr`
  - Christophe de Valroger — WYZ Group — `contact@wyzgroup.com`
  - Jerome Pechot — YourBO — `jerome.pechot@yourbo.fr`
  - Olivier Raes — Mipise — `olivier.raes@mipisepaymentservices.com`
  - Nicolas Helin — Option Way — `nicolas@optionway.com`
  - Frederic Doucene — Fitle — `frederic.doucene@fitle.com`
  - Stephane Dothee — Odonatech — `contact@odonatech.com`
  - Baptiste Collot — Trustpair — `contact@trustpair.com`
  - Frederic Bourzeix — Global SP — `commerce@globalsp.com`
  - Jerome Vergez — Digicall — `contact@digicall.fr`
- `nanocorp emails send --help` confirmed support for `--reply-to`, which was required to thread Email 3 to the logged Email 2 messages.

### Action taken

- Sent 10 Email 3 follow-ups from `capia@nanocorp.app` on `2026-04-22` as threaded replies to the logged Wave 2 / Email 2 messages.
- Used the subject pattern `{{prenom}}, je clôture le sujet ?` with first-name personalization for all 10 sends.
- Used a shortened French body under 100 words with:
  - `https://shiftmap.fr`
  - signature `L'équipe ShiftMap`
  - no mention of CapIA
- The local post-send parsing step failed after delivery because of an incorrect `jq split` expression; recovery was done safely from `nanocorp emails list --direction outbound --limit 30`, without re-sending.
- Synced `/content/outbound_log.md` in the export repo so it now contains:
  - Wave 2 / Email 1 history
  - Wave 2 / Email 2 history
  - Wave 2 / Email 3 entries with the final 10 message IDs

### Email 3 message IDs

- Cyril Ledig — `781b8e31-cb4e-48b8-8573-ce5ad845455d`
- Christophe de Valroger — `db0b1ea3-02d6-4fe5-9690-68aceb7f4adf`
- Jerome Pechot — `62b64756-387f-45fc-831c-18cab76cd79c`
- Olivier Raes — `c1d46d33-9f3d-4cb5-9e8e-59f77f7cb4a9`
- Nicolas Helin — `85b31b94-294e-4f19-b892-0d10209643a9`
- Frederic Doucene — `8f3ceadb-19d0-4fbb-b7be-e09a44f3b3fc`
- Stephane Dothee — `7be38916-18c6-4fb1-874b-77cd4344282e`
- Baptiste Collot — `e9518e59-9825-4a44-baeb-ee956b17c494`
- Frederic Bourzeix — `f49eec86-7e5f-4917-9411-24261d1e4b3e`
- Jerome Vergez — `f0816ae1-cd23-42a2-b27f-b9796fad8dc0`

## Hero Title Line 2 Update (2026-04-21)

### Request checked

- Update only line 2 of the hero title in `/app/page.tsx`.
- Keep line 1 exactly as `Vous ne savez pas par où commencer avec l'IA ?`.
- Preserve the existing italic hero-line element and do not change navigation, footer, Stripe URLs, or other styling.

### Findings

- The target repo is `/home/worker/shiftmap-target-20260421`, cloned from `vincepanik/shiftmap` on branch `main`.
- The current hero title in `/app/page.tsx` uses:
  - line 1: `Vous ne savez pas par où commencer avec l&apos;IA ?`
  - line 2 inside the existing `<em>` element: `On vous dit quoi faire — en 24 heures.`
- The repo currently pins `next` to `15.5.15` in `/package.json`; this task does not change framework versioning.

### Action taken

- Replaced only the line 2 hero text in `/app/page.tsx` with `Recevez votre plan d&apos;action personnalisé.` inside the same `<em>` element.
- Left all existing Stripe payment URLs unchanged.
- Left all other hero copy, navigation, footer content, and styling unchanged.

## Hero Copy + Mobile Menu Links (2026-04-20)

### Request checked

- Update the hero copy in `/app/page.tsx` without touching the existing CTA buttons or the stats row.
- Populate the mobile hamburger menu with the requested 5 links and ensure each tap closes the menu.
- Use the real in-page anchors already present in the file.

### Findings

- The page sections in `/app/page.tsx` use these existing IDs:
  - `#probleme`
  - `#solution`
  - `#tarifs`
  - `#faq`
- The mobile button in `/app/page.tsx` previously only toggled its own `open` class and did not control a rendered mobile link panel.
- The repo already had a working state-based mobile nav pattern in `/components/SiteHeader.tsx`, which confirmed the intended `nav-links` / `nav-mobile-btn` behavior.

### Action taken

- Updated the hero heading, tagline, and descriptive paragraph text in `/app/page.tsx` to the requested French copy.
- Left the hero stats row unchanged.
- Added local mobile-menu state in `/app/page.tsx`.
- Added a dedicated mobile menu panel in `/app/page.tsx` with exactly 5 links:
  - `Problème` → `#probleme`
  - `Comment ça marche` → `#solution`
  - `Tarifs` → `#tarifs`
  - `FAQ` → `#faq`
  - `Démarrer maintenant` → `https://buy.stripe.com/eVq00k3HeaH536qcsXeOB35`
- Wired each mobile-menu link to close the menu on click.

## LinkedIn Footer + Outreach Update (2026-04-19)

### Request checked

- Add the live ShiftMap LinkedIn company page to the footer in `app/page.tsx`.
- Keep existing Stripe URLs untouched.
- Keep the footer legal links `Mentions légales` and `Politique de confidentialité` intact.
- Update any outreach-related documents to reference `https://www.linkedin.com/company/shiftmap/`.

### Findings

- The current GitHub export repo `vincepanik/shiftmap` already exposes the footer links in `/app/page.tsx` as a plain `<div className="footer-links">`, which avoids the old fixed-nav CSS bug tied to generic `<nav>` styling.
- The footer link group already contained `Comment ça marche`, `Tarifs`, `FAQ`, `Blog`, `Mentions légales`, and `Politique de confidentialité`; the legal links could be preserved exactly while inserting a new `LinkedIn` link beside the existing footer links.
- `nanocorp docs list` returned an empty document set for the company on `2026-04-19`, so there were no NanoCorp-stored outreach templates to update through the CLI.
- The reusable outreach copy present in the repo is `/content/outbound_sequence.md`, which contains the three outbound email templates used for prospecting.

### Action taken

- Added a footer `LinkedIn` link in `/app/page.tsx` pointing to `https://www.linkedin.com/company/shiftmap/` with the same anchor styling as the surrounding footer links and `target="_blank" rel="noopener noreferrer"`.
- Left both footer legal links unchanged and in place.
- Left all existing Stripe payment URLs unchanged.
- Updated `/content/outbound_sequence.md` so each outbound email now ends with a simple signature block containing:
  - `L'équipe ShiftMap`
  - the landing page URL variable
  - the live LinkedIn company page URL
- Ran `npm install` successfully on `2026-04-19`.
- Ran `npm run build` successfully on `2026-04-19` with 0 errors.

## Outbound Email 3 (J8) — Wave 1 (2026-04-18)

### Request checked

- Send the final short follow-up (`Email 3 - J8`) to the 10 Wave 1 French SME prospects.
- Use the outbound sequence copy, personalize with first name, link to `https://shiftmap.fr`, sign as `L'équipe ShiftMap`, and avoid mentioning CapIA.
- Update the outbound log and push the result to `vincepanik/shiftmap` `main`.

### Findings

- The cloned export repo `/home/worker/shiftmap` did not contain the expected `/content/outbound_log.md` or `/content/outbound_sequence.md` files.
- The authoritative outbound files were present in the working repo at:
  - `/home/worker/repo/content/outbound_log.md`
  - `/home/worker/repo/content/outbound_sequence.md`
- `nanocorp emails list` showed no inbound replies from any of the 10 Wave 1 contact addresses before the send.
- The NanoCorp mailbox history contained duplicate Email 2 sends from `2026-04-17`; the logged Email 2 IDs in the outbound log were used as the reply thread targets for Email 3.

### Action taken

- Added `/content/outbound_sequence.md` to the export repo so the outbound copy now exists in `vincepanik/shiftmap`.
- Added `/content/outbound_log.md` to the export repo and recorded all prior Wave 1 sends plus the new Email 3 entries.
- Sent 10 Email 3 follow-ups from `capia@nanocorp.app` as threaded replies to the logged Email 2 messages.
- Email 3 send window: `2026-04-18T17:23:24Z` through `2026-04-18T17:24:28Z`.
- Email 3 message IDs logged:
  - `b52427cc-7a98-4230-b64b-10a89b7ec070`
  - `5e37e1e8-2cc1-459f-99ad-1f1fbe526905`
  - `51d8ad88-6d16-4dc1-93dd-177191fa9251`
  - `28bec11d-220b-4c43-b81a-2d45b8fa1a6d`
  - `40a1f931-b608-41ed-8922-611428e71eda`
  - `ffcba9bb-4d91-423b-896b-20046b929df9`
  - `69546597-463c-45c1-9d7f-db025573880f`
  - `d86d2588-daa4-4308-973d-a12dacdedd94`
  - `f4ad0f1a-f366-49e1-8895-eae4457ab8a9`
  - `65cc7459-44f2-460c-8b29-6bdd9d6b60ec`

## Mobile Hamburger Menu Fix (2026-04-18)

### Request checked

- Fix the broken mobile hamburger menu interaction for the ShiftMap landing page.
- Ensure the menu button opens and closes the mobile nav instead of only changing the button itself.
- Keep Stripe URLs, footer content, and French landing-page copy unchanged.

### Findings

- The broken handler was not in `/app/page.tsx` directly; the page imports `/components/SiteHeader.tsx`, which owns the navigation markup.
- The existing mobile button handler only ran `classList.toggle("open")` on the button element itself.
- On mobile, `/app/globals.css` sets `.nav-links { display: none; }` under `@media (max-width: 900px)`, but no shared React state or CSS class ever switched the menu back to visible.
- Result: tapping the hamburger animated nothing meaningful for the menu and left the mobile nav hidden at all times.

### Action taken

- Updated `/components/SiteHeader.tsx` to use `useState` with a single `isMobileMenuOpen` flag.
- Wired the hamburger `onClick` to `setIsMobileMenuOpen((open) => !open)`.
- Bound both the button class and the nav links class to the same state:
  - button gets `.open`
  - menu gets `.nav-links-open`
- Added `type="button"`, `aria-expanded`, and `aria-controls` on the mobile menu button.
- Added link-level close handlers so choosing a mobile nav item closes the menu.
- Updated `/app/globals.css` so the mobile breakpoint shows the menu when `.nav-links-open` is present and animates the hamburger icon into a close state.

## Second SEO Blog Article: `choisir-outil-ia-pme` (2026-04-17)

### Request checked

- Publish a second French SEO article on `vincepanik/shiftmap`.
- Topic: `Comment choisir son premier outil IA en PME : le guide pratique 2025`
- Target keywords:
  - `outil IA PME`
  - `choisir outil intelligence artificielle entreprise`
- Required changes:
  - add `app/blog/choisir-outil-ia-pme/page.tsx`
  - expose the article as the second card on `/blog`
  - include French SEO metadata
  - run `npm install` and `npm run build`

### Findings

- The exported ShiftMap repo already has a blog structure in place with:
  - `/app/blog/page.tsx`
  - `/app/blog/articles.ts`
  - `/app/blog/5-cas-usage-ia-pme/page.tsx`
  - shared layout via `/components/SiteHeader.tsx` and `/components/SiteFooter.tsx`
- The blog index renders cards from the `blogArticles` array, so adding a second card primarily required extending `/app/blog/articles.ts`.
- Existing blog styling in `/app/globals.css` was already sufficient for a second long-form article page without introducing new CSS.

### Action taken

- Added `/app/blog/choisir-outil-ia-pme/page.tsx` with an 878-word French article structured as:
  - H1
  - intro on the challenge of choosing among many AI tools
  - 5 H2 sections
  - closing CTA to `https://shiftmap.fr/#tarifs`
- Updated `/app/blog/articles.ts` with the new article metadata:
  - slug: `choisir-outil-ia-pme`
  - published label: `17 avril 2026`
  - reading time: `7 min`
  - word count: `878`
- Updated `/app/blog/page.tsx` metadata and hero copy so the blog index now better covers both use cases and tool-selection topics.
- Ran `npm install` successfully on 2026-04-17.
- Ran `npm run build` successfully on 2026-04-17.
- Local UI verification completed with `agent-browser` against:
  - `/blog` → confirms two article cards are visible
  - `/blog/choisir-outil-ia-pme` → confirms the new H1, all H2 sections, and the CTA link are rendered
- Committed changes as `feat: add blog article — choisir outil IA PME 2025` (`62e6163`) and pushed to `origin/main`.
- One production verification attempt against `https://shiftmap.fr/blog/choisir-outil-ia-pme` returned `net::ERR_CONNECTION_RESET`, so live publication status on the custom domain remains to be checked separately.


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

## Onboarding Questionnaire Implementation Notes (2026-04-23)

### Repo / architecture findings

- The local repo in `/home/worker/repo` is the ShiftMap Next.js app even though `git remote -v` still points to `git@github.com:nanocorp-hq/capia.git`.
- The site branding, metadata, and Stripe links in source all match ShiftMap:
  - `/app/layout.tsx` uses `https://shiftmap.fr`
  - `/package.json` is named `shiftmap`
  - `/components/SiteHeader.tsx` and `/components/SiteFooter.tsx` render the ShiftMap navigation and footer
- For this task, the remote should be switched to the requested GitHub repo before pushing:
  - `https://github.com/vincepanik/shiftmap`

### UI findings

- The homepage design system is defined centrally in `/app/globals.css` with:
  - color palette tokens around `--navy`, `--blue`, `--off-white`
  - typography pairing `Fraunces` + `DM Sans`
  - reusable CTA classes like `.btn`, `.btn-primary`, `.btn-outline`
- The header component already supports internal pages through:
  - `absoluteLinks`
  - `solid`
- This makes it suitable for a new `/onboarding` page without changing the homepage layout.

### Email / backend findings

- Runtime environment names available in the worker on `2026-04-23`:
  - `DATABASE_URL`
  - `NANOCORP_BACKEND_URL`
  - `VERCEL_PROJECT_URL`
- No obvious configured mail provider variables are present in the worker for:
  - Resend
  - SMTP
  - SendGrid
  - Mailgun
  - Postmark
- Safest MVP implementation for `/api/onboarding`:
  - validate and normalize payload server-side
  - attempt provider-based send only if explicit env vars are present later
  - otherwise log the submission on the server and return success so sales flow is not blocked during implementation

### Implementation completed

- Added a new onboarding flow page at `/app/onboarding/page.tsx`.
- Added the interactive client form component at `/app/onboarding/OnboardingForm.tsx`.
- Added shared questionnaire options and labels at `/lib/onboarding.ts`.
- Added the submission endpoint at `/app/api/onboarding/route.ts`.
- Added homepage pricing-section follow-up CTA pointing to `/onboarding` in `/app/page.tsx`.
- Added dedicated onboarding styles in `/app/globals.css`.

### Submission behavior implemented

- The form collects:
  - company name
  - industry
  - company size
  - approximate revenue
  - current tools
  - main operational challenges
  - AI maturity
  - priority departments
  - indicative budget
  - contact email
  - purchased offer
- The form shows a post-submit confirmation state with the requested message including the submitted email address.
- Server route behavior:
  - validates the payload
  - if `RESEND_API_KEY` is present later, it will attempt an email to `capia@nanocorp.app` (or `ONBOARDING_NOTIFICATION_EMAIL` if configured)
  - if no email provider is configured, it logs the normalized submission on the server and still returns success

### Environment verification

- `nanocorp vercel env list` on `2026-04-23` returned only:
  - `_DOMAIN_HINT`
  - `DATABASE_URL`
- No email-provider env var is currently configured on Vercel for this project.
- As implemented today, production will use the server-log fallback until a mail provider env var is added.

### Local verification performed

- `npm install` completed successfully on `2026-04-23`.
- `npm run build` completed successfully on `2026-04-23`.
- `agent-browser install` was required in this worker because Chrome was missing again.
- Browser verification on local dev confirmed:
  - `/onboarding` renders with the ShiftMap header/footer and the full questionnaire
  - the homepage contains an `a[href="/onboarding"]` CTA with text `Remplir le questionnaire`
  - submitting the form transitions to the confirmation state with the `Merci !` message
- API verification on local dev:
  - `POST /api/onboarding` returned `{"success":true,"deliveryMethod":"log"}`
  - server console logged the full normalized submission payload as expected

### Git / deployment outcome

- Feature commit created with the requested message:
  - `feat: add client onboarding questionnaire page`
- Local worker history had diverged from `vincepanik/shiftmap`, so the feature commit was cherry-picked onto the fetched remote `main` before push.

## 2026-04-24 - Resend onboarding notification follow-up

### Codebase findings

- `app/api/onboarding/route.ts` already contained the Resend delivery path:
  - it posts to `https://api.resend.com/emails` when `RESEND_API_KEY` is present
  - it falls back to server logging when the key is absent or the send fails
- `app/onboarding/OnboardingForm.tsx` already posts directly to `/api/onboarding`, so no additional client-side wiring was missing.
- There was no `.env.example` file in the repo. Added one documenting:
  - `RESEND_API_KEY`
  - `RESEND_FROM_EMAIL`
  - `ONBOARDING_NOTIFICATION_EMAIL`

### External verification

- Live production check on `2026-04-24`:
  - `POST https://www.shiftmap.fr/api/onboarding` with a valid sample payload returned `{"success":true,"deliveryMethod":"log"}`
  - this confirms the live site is still running the fallback path and is not currently sending via Resend
- Browser automation against `https://vercel.com/dashboard` reached the unauthenticated Vercel login screen.
- The NanoCorp helper in this worker remains bound to `https://capia.nanocorp.app` via `VERCEL_PROJECT_URL`, so `nanocorp vercel env list/set` cannot be used here to manage ShiftMap's Vercel project.

### Repo changes made

- Added `.env.example` so the required Resend env contract is explicit in the repository.
- Updated `app/api/onboarding/route.ts` so notification emails/logs now include the submission timestamp and failed Resend responses log both HTTP status and response body for faster diagnosis.
- Local verification on `2026-04-24`:
  - `npm install` completed successfully
  - `npm run build` completed successfully

### Remaining external blockers

- No authenticated access to the ShiftMap Vercel project was available from this worker, so `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `ONBOARDING_NOTIFICATION_EMAIL` could not be set on the actual ShiftMap deployment.
- No authenticated Resend account session or existing API key was available in the repo/worker, so a production Resend key could not be generated from this session.
- Pushed successfully to `vincepanik/shiftmap` `main` on `2026-04-23`:
  - previous remote head: `d3320de`
  - new remote head: `ae240d0`
- Production verification after the Vercel wait window:
  - `https://www.shiftmap.fr/onboarding` loaded successfully in `agent-browser`
  - the full questionnaire fields and submit button were present in production
- Reminder:
  - `https://shiftmap.fr` apex host was previously documented as misconfigured for TLS
  - `https://www.shiftmap.fr` remains the reliable public URL for verification until that separate domain task is fixed

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
