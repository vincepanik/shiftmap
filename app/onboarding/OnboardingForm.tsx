"use client";

import { FormEvent, useState } from "react";
import {
  aiMaturityOptions,
  budgetOptions,
  companySizeOptions,
  priorityOptions,
  purchasedOfferOptions,
  type OnboardingPayload,
} from "@/lib/onboarding";

const initialFormState: OnboardingPayload = {
  companyName: "",
  industry: "",
  companySize: "20-50",
  revenue: "",
  currentTools: "",
  mainChallenges: "",
  aiMaturity: "non",
  priorities: ["commercial"],
  budget: "moins-500",
  contactEmail: "",
  purchasedOffer: "starter-report",
};

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function OnboardingForm() {
  const [formData, setFormData] = useState<OnboardingPayload>(initialFormState);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const updateField = <K extends keyof OnboardingPayload>(
    field: K,
    value: OnboardingPayload[K],
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const togglePriority = (priority: OnboardingPayload["priorities"][number]) => {
    setFormData((current) => {
      const priorities = current.priorities.includes(priority)
        ? current.priorities.filter((item) => item !== priority)
        : [...current.priorities, priority];

      return {
        ...current,
        priorities,
      };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.priorities.length === 0) {
      setSubmissionState("error");
      setErrorMessage("Sélectionnez au moins un département prioritaire.");
      return;
    }

    setSubmissionState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Une erreur est survenue.");
      }

      setSubmittedEmail(formData.contactEmail);
      setSubmissionState("success");
    } catch (error) {
      setSubmissionState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Réessayez dans quelques instants.",
      );
    }
  };

  if (submissionState === "success") {
    return (
      <section className="onboarding-form-panel onboarding-success-panel" aria-live="polite">
        <div className="onboarding-success-badge">Demande envoyée</div>
        <h2>Merci !</h2>
        <p>
          Merci ! Votre feuille de route IA personnalisée sera envoyée à{" "}
          <strong>{submittedEmail}</strong> dans les 24 heures.
        </p>
        <p className="onboarding-success-note">
          Notre équipe reviendra vers vous si un détail complémentaire est nécessaire pour affiner
          le rapport.
        </p>
        <div className="onboarding-success-actions">
          <a href="/" className="btn btn-outline">
            Retour à l&apos;accueil
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="onboarding-form-panel">
      <div className="onboarding-panel-header">
        <span className="section-label">Questionnaire</span>
        <h2 className="section-title">
          Donnez-nous le bon contexte. <em>On s&apos;occupe du reste.</em>
        </h2>
        <p className="section-body">
          Répondez avec votre niveau de détail habituel. Le formulaire est conçu pour être rempli
          en 10 à 15 minutes.
        </p>
      </div>

      <form className="onboarding-form" onSubmit={handleSubmit}>
        <div className="onboarding-section">
          <div className="onboarding-section-heading">
            <span>1</span>
            <div>
              <h3>Votre entreprise</h3>
              <p>Les éléments de base pour situer votre feuille de route.</p>
            </div>
          </div>
          <div className="onboarding-fields onboarding-fields-two">
            <label className="field">
              <span>Nom de l&apos;entreprise</span>
              <input
                required
                type="text"
                value={formData.companyName}
                onChange={(event) => updateField("companyName", event.target.value)}
                placeholder="Ex. Martin & Fils"
              />
            </label>
            <label className="field">
              <span>Secteur d&apos;activité</span>
              <input
                required
                type="text"
                value={formData.industry}
                onChange={(event) => updateField("industry", event.target.value)}
                placeholder="Ex. Industrie, services, négoce..."
              />
            </label>
            <div className="field">
              <span>Effectif</span>
              <div className="choice-grid choice-grid-compact">
                {companySizeOptions.map((option) => (
                  <label key={option.value} className="choice-card">
                    <input
                      type="radio"
                      name="companySize"
                      value={option.value}
                      checked={formData.companySize === option.value}
                      onChange={() => updateField("companySize", option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <label className="field">
              <span>Chiffre d&apos;affaires approximatif</span>
              <input
                required
                type="text"
                value={formData.revenue}
                onChange={(event) => updateField("revenue", event.target.value)}
                placeholder="Ex. 4 à 6 M€"
              />
            </label>
          </div>
        </div>

        <div className="onboarding-section">
          <div className="onboarding-section-heading">
            <span>2</span>
            <div>
              <h3>Vos opérations aujourd&apos;hui</h3>
              <p>Ce que vos équipes utilisent déjà et là où ça coince.</p>
            </div>
          </div>
          <div className="onboarding-fields">
            <label className="field">
              <span>Vos outils actuels</span>
              <textarea
                required
                value={formData.currentTools}
                onChange={(event) => updateField("currentTools", event.target.value)}
                placeholder="Ex. HubSpot, Sage, Pennylane, Lucca, Notion..."
                rows={4}
              />
            </label>
            <label className="field">
              <span>Vos 2 à 3 principaux défis opérationnels</span>
              <textarea
                required
                value={formData.mainChallenges}
                onChange={(event) => updateField("mainChallenges", event.target.value)}
                placeholder="Ex. prévisions commerciales imprécises, traitement des demandes clients, consolidation financière..."
                rows={5}
              />
            </label>
          </div>
        </div>

        <div className="onboarding-section">
          <div className="onboarding-section-heading">
            <span>3</span>
            <div>
              <h3>Votre maturité IA</h3>
              <p>Pour calibrer des recommandations réalistes dès le départ.</p>
            </div>
          </div>
          <div className="onboarding-fields">
            <div className="field">
              <span>Avez-vous déjà utilisé des outils IA ?</span>
              <div className="choice-grid">
                {aiMaturityOptions.map((option) => (
                  <label key={option.value} className="choice-card">
                    <input
                      type="radio"
                      name="aiMaturity"
                      value={option.value}
                      checked={formData.aiMaturity === option.value}
                      onChange={() => updateField("aiMaturity", option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="onboarding-section">
          <div className="onboarding-section-heading">
            <span>4</span>
            <div>
              <h3>Ce que vous voulez améliorer</h3>
              <p>Choisissez vos départements les plus prioritaires.</p>
            </div>
          </div>
          <div className="onboarding-fields">
            <div className="field">
              <span>Priorités de départ</span>
              <div className="choice-grid">
                {priorityOptions.map((option) => (
                  <label key={option.value} className="choice-card choice-card-checkbox">
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={formData.priorities.includes(option.value)}
                      onChange={() => togglePriority(option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="onboarding-section">
          <div className="onboarding-section-heading">
            <span>5</span>
            <div>
              <h3>Cadre du rapport</h3>
              <p>Le budget et l&apos;offre achetée influencent la profondeur des recommandations.</p>
            </div>
          </div>
          <div className="onboarding-fields onboarding-fields-two">
            <div className="field">
              <span>Budget indicatif IA</span>
              <div className="choice-grid">
                {budgetOptions.map((option) => (
                  <label key={option.value} className="choice-card">
                    <input
                      type="radio"
                      name="budget"
                      value={option.value}
                      checked={formData.budget === option.value}
                      onChange={() => updateField("budget", option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <span>Offre achetée</span>
              <div className="choice-grid">
                {purchasedOfferOptions.map((option) => (
                  <label key={option.value} className="choice-card">
                    <input
                      type="radio"
                      name="purchasedOffer"
                      value={option.value}
                      checked={formData.purchasedOffer === option.value}
                      onChange={() => updateField("purchasedOffer", option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="onboarding-section onboarding-section-last">
          <div className="onboarding-section-heading">
            <span>6</span>
            <div>
              <h3>Contact de réception</h3>
              <p>L&apos;adresse à laquelle nous envoyons le rapport final.</p>
            </div>
          </div>
          <div className="onboarding-fields">
            <label className="field">
              <span>Email de contact</span>
              <input
                required
                type="email"
                value={formData.contactEmail}
                onChange={(event) => updateField("contactEmail", event.target.value)}
                placeholder="vous@entreprise.fr"
              />
            </label>
          </div>
        </div>

        {submissionState === "error" ? (
          <div className="onboarding-error" aria-live="polite">
            {errorMessage}
          </div>
        ) : null}

        <div className="onboarding-submit">
          <button type="submit" className="btn btn-primary" disabled={submissionState === "submitting"}>
            {submissionState === "submitting"
              ? "Envoi en cours..."
              : "Envoyer ma demande de feuille de route"}
          </button>
          <p>
            En soumettant ce questionnaire, vous nous donnez les éléments nécessaires pour préparer
            votre rapport et vous répondre sous 24 heures ouvrées.
          </p>
        </div>
      </form>
    </section>
  );
}
