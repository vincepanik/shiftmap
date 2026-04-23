export const companySizeOptions = [
  { value: "20-50", label: "20 à 50 salariés" },
  { value: "50-100", label: "50 à 100 salariés" },
] as const;

export const aiMaturityOptions = [
  { value: "non", label: "Non" },
  { value: "un-peu", label: "Un peu" },
  { value: "regulierement", label: "Oui régulièrement" },
] as const;

export const priorityOptions = [
  { value: "commercial", label: "Commercial" },
  { value: "rh", label: "RH" },
  { value: "finance", label: "Finance" },
  { value: "production", label: "Production" },
  { value: "service-client", label: "Service client" },
  { value: "logistique", label: "Logistique" },
] as const;

export const budgetOptions = [
  { value: "moins-500", label: "Moins de 500€/mois" },
  { value: "500-2000", label: "500-2000€/mois" },
  { value: "plus-2000", label: "Plus de 2000€/mois" },
] as const;

export const purchasedOfferOptions = [
  { value: "starter-report", label: "Starter Report" },
  { value: "pro-report", label: "Pro Report" },
] as const;

export type OnboardingPayload = {
  companyName: string;
  industry: string;
  companySize: (typeof companySizeOptions)[number]["value"];
  revenue: string;
  currentTools: string;
  mainChallenges: string;
  aiMaturity: (typeof aiMaturityOptions)[number]["value"];
  priorities: Array<(typeof priorityOptions)[number]["value"]>;
  budget: (typeof budgetOptions)[number]["value"];
  contactEmail: string;
  purchasedOffer: (typeof purchasedOfferOptions)[number]["value"];
};

export const companySizeLabels = Object.fromEntries(
  companySizeOptions.map((option) => [option.value, option.label]),
) as Record<OnboardingPayload["companySize"], string>;

export const aiMaturityLabels = Object.fromEntries(
  aiMaturityOptions.map((option) => [option.value, option.label]),
) as Record<OnboardingPayload["aiMaturity"], string>;

export const priorityLabels = Object.fromEntries(
  priorityOptions.map((option) => [option.value, option.label]),
) as Record<OnboardingPayload["priorities"][number], string>;

export const budgetLabels = Object.fromEntries(
  budgetOptions.map((option) => [option.value, option.label]),
) as Record<OnboardingPayload["budget"], string>;

export const purchasedOfferLabels = Object.fromEntries(
  purchasedOfferOptions.map((option) => [option.value, option.label]),
) as Record<OnboardingPayload["purchasedOffer"], string>;
