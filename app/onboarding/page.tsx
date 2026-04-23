import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { OnboardingForm } from "./OnboardingForm";

export const metadata: Metadata = {
  title: "Questionnaire client | ShiftMap",
  description:
    "Remplissez le questionnaire ShiftMap après votre paiement pour lancer la préparation de votre feuille de route IA personnalisée.",
};

export default function OnboardingPage() {
  return (
    <>
      <SiteHeader absoluteLinks solid />
      <main className="onboarding-page">
        <section className="onboarding-hero">
          <div className="container onboarding-hero-inner">
            <div className="onboarding-hero-copy">
              <span className="section-label onboarding-inverse-label">Après votre paiement</span>
              <h1 className="onboarding-title">
                Le questionnaire qui transforme votre commande en{" "}
                <em>feuille de route IA exploitable.</em>
              </h1>
              <p className="onboarding-lead">
                Vous avez déjà réservé votre rapport ShiftMap. Il nous reste à comprendre votre
                contexte pour produire une recommandation précise, priorisée et utile dès la
                réception.
              </p>
              <div className="onboarding-hero-points">
                <div>
                  <strong>10 à 15 min</strong>
                  <span>pour le remplir</span>
                </div>
                <div>
                  <strong>3 à 5 priorités</strong>
                  <span>dans votre rapport</span>
                </div>
                <div>
                  <strong>24 heures</strong>
                  <span>pour la livraison</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="onboarding-shell">
          <div className="container onboarding-layout">
            <aside className="onboarding-aside">
              <div className="onboarding-aside-card">
                <h2>Ce que nous allons vous demander</h2>
                <ul>
                  <li>Le contexte de votre entreprise et son périmètre.</li>
                  <li>Vos outils en place et vos irritants opérationnels.</li>
                  <li>Vos priorités métiers, votre budget et votre niveau de maturité IA.</li>
                </ul>
              </div>

              <div className="onboarding-aside-card onboarding-aside-card-accent">
                <h2>Ce que vous recevrez ensuite</h2>
                <ul>
                  <li>Un cadrage adapté à l&apos;offre achetée.</li>
                  <li>Des recommandations alignées avec vos contraintes réelles.</li>
                  <li>Un envoi du rapport sur l&apos;email renseigné dans les 24 heures.</li>
                </ul>
              </div>

              <div className="onboarding-aside-note">
                Vos réponses sont utilisées uniquement pour préparer votre feuille de route IA
                personnalisée.
              </div>
            </aside>

            <OnboardingForm />
          </div>
        </section>
      </main>
      <SiteFooter absoluteLinks />
    </>
  );
}
