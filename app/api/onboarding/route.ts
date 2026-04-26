import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import {
  aiMaturityLabels,
  aiMaturityOptions,
  budgetLabels,
  budgetOptions,
  companySizeLabels,
  companySizeOptions,
  priorityLabels,
  priorityOptions,
  purchasedOfferLabels,
  purchasedOfferOptions,
  type OnboardingPayload,
} from "@/lib/onboarding";

const companySizeValues = new Set(companySizeOptions.map((option) => option.value));
const aiMaturityValues = new Set(aiMaturityOptions.map((option) => option.value));
const priorityValues = new Set(priorityOptions.map((option) => option.value));
const budgetValues = new Set(budgetOptions.map((option) => option.value));
const purchasedOfferValues = new Set(purchasedOfferOptions.map((option) => option.value));

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizePayload(payload: unknown): OnboardingPayload | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const raw = payload as Record<string, unknown>;

  if (
    !isNonEmptyString(raw.companyName) ||
    !isNonEmptyString(raw.industry) ||
    !isNonEmptyString(raw.revenue) ||
    !isNonEmptyString(raw.currentTools) ||
    !isNonEmptyString(raw.mainChallenges) ||
    !isNonEmptyString(raw.contactEmail)
  ) {
    return null;
  }

  if (
    !companySizeValues.has(raw.companySize as OnboardingPayload["companySize"]) ||
    !aiMaturityValues.has(raw.aiMaturity as OnboardingPayload["aiMaturity"]) ||
    !budgetValues.has(raw.budget as OnboardingPayload["budget"]) ||
    !purchasedOfferValues.has(raw.purchasedOffer as OnboardingPayload["purchasedOffer"])
  ) {
    return null;
  }

  const priorities = Array.isArray(raw.priorities)
    ? raw.priorities.filter(
        (value): value is OnboardingPayload["priorities"][number] =>
          typeof value === "string" && priorityValues.has(value as OnboardingPayload["priorities"][number]),
      )
    : [];

  const email = (raw.contactEmail as string).trim().toLowerCase();

  if (!isValidEmail(email) || priorities.length === 0) {
    return null;
  }

  return {
    companyName: (raw.companyName as string).trim(),
    industry: (raw.industry as string).trim(),
    companySize: raw.companySize as OnboardingPayload["companySize"],
    revenue: (raw.revenue as string).trim(),
    currentTools: (raw.currentTools as string).trim(),
    mainChallenges: (raw.mainChallenges as string).trim(),
    aiMaturity: raw.aiMaturity as OnboardingPayload["aiMaturity"],
    priorities,
    budget: raw.budget as OnboardingPayload["budget"],
    contactEmail: email,
    purchasedOffer: raw.purchasedOffer as OnboardingPayload["purchasedOffer"],
  };
}

function buildTextSummary(submission: OnboardingPayload, submittedAt: string) {
  return [
    "Nouvelle demande de feuille de route ShiftMap",
    "",
    `Soumis le : ${submittedAt}`,
    `Entreprise : ${submission.companyName}`,
    `Secteur : ${submission.industry}`,
    `Effectif : ${companySizeLabels[submission.companySize]}`,
    `Chiffre d'affaires approximatif : ${submission.revenue}`,
    `Outils actuels : ${submission.currentTools}`,
    `Défis principaux : ${submission.mainChallenges}`,
    `Maturité IA : ${aiMaturityLabels[submission.aiMaturity]}`,
    `Départements prioritaires : ${submission.priorities.map((item) => priorityLabels[item]).join(", ")}`,
    `Budget indicatif : ${budgetLabels[submission.budget]}`,
    `Email de contact : ${submission.contactEmail}`,
    `Offre achetée : ${purchasedOfferLabels[submission.purchasedOffer]}`,
  ].join("\n");
}

function buildHtmlSummary(submission: OnboardingPayload, submittedAt: string) {
  const rows = [
    ["Soumis le", submittedAt],
    ["Entreprise", submission.companyName],
    ["Secteur", submission.industry],
    ["Effectif", companySizeLabels[submission.companySize]],
    ["Chiffre d'affaires approximatif", submission.revenue],
    ["Outils actuels", submission.currentTools],
    ["Défis principaux", submission.mainChallenges],
    ["Maturité IA", aiMaturityLabels[submission.aiMaturity]],
    [
      "Départements prioritaires",
      submission.priorities.map((item) => priorityLabels[item]).join(", "),
    ],
    ["Budget indicatif", budgetLabels[submission.budget]],
    ["Email de contact", submission.contactEmail],
    ["Offre achetée", purchasedOfferLabels[submission.purchasedOffer]],
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1A2540">
      <h1 style="font-size:20px;margin-bottom:16px">Nouvelle demande de feuille de route ShiftMap</h1>
      <table style="width:100%;border-collapse:collapse">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding:10px 12px;border:1px solid #E8EBF2;background:#F5F6F9;font-weight:600;vertical-align:top;width:32%">
                    ${escapeHtml(label)}
                  </td>
                  <td style="padding:10px 12px;border:1px solid #E8EBF2;white-space:pre-wrap">
                    ${escapeHtml(value)}
                  </td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

async function persistSubmission(submission: OnboardingPayload) {
  await query(
    `
      INSERT INTO onboarding_submissions (
        email,
        company_name,
        sector,
        headcount,
        revenue,
        current_tools,
        main_challenges,
        ai_maturity,
        priority_departments,
        ai_budget,
        offer_purchased
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::text[], $10, $11)
    `,
    [
      submission.contactEmail,
      submission.companyName,
      submission.industry,
      submission.companySize,
      submission.revenue,
      submission.currentTools,
      submission.mainChallenges,
      submission.aiMaturity,
      submission.priorities,
      submission.budget,
      submission.purchasedOffer,
    ],
  );
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const submission = normalizePayload(payload);

  if (!submission) {
    return NextResponse.json(
      {
        error: "Le formulaire est incomplet ou contient des valeurs invalides.",
      },
      { status: 400 },
    );
  }

  const notificationEmail = process.env.ONBOARDING_NOTIFICATION_EMAIL ?? "capia@nanocorp.app";
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM_EMAIL ?? "ShiftMap <onboarding@resend.dev>";
  const subject = `Nouvelle demande ShiftMap — ${submission.companyName}`;
  const submittedAt = new Date().toISOString();
  const text = buildTextSummary(submission, submittedAt);
  const html = buildHtmlSummary(submission, submittedAt);

  try {
    await persistSubmission(submission);
  } catch (error) {
    console.error("Failed to persist onboarding submission", error);

    return NextResponse.json(
      {
        error: "Impossible d'enregistrer votre demande pour le moment. Réessayez dans quelques instants.",
      },
      { status: 500 },
    );
  }

  if (resendApiKey) {
    try {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [notificationEmail],
          reply_to: submission.contactEmail,
          subject,
          text,
          html,
        }),
      });

      if (resendResponse.ok) {
        return NextResponse.json({
          success: true,
          deliveryMethod: "resend",
        });
      }

      console.error("Resend onboarding delivery failed", {
        status: resendResponse.status,
        body: await resendResponse.text(),
      });
    } catch (error) {
      console.error("Resend onboarding delivery errored", error);
    }
  }

  console.log(
    "[shiftmap-onboarding]",
    JSON.stringify(
      {
        submittedAt,
        notificationEmail,
        subject,
        submission,
      },
      null,
      2,
    ),
  );

  return NextResponse.json({
    success: true,
    deliveryMethod: "log",
  });
}
