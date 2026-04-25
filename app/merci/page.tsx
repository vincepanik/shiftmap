import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Merci pour votre commande | ShiftMap",
  description:
    "Confirmation de commande ShiftMap et prochaine étape pour lancer la préparation de votre feuille de route IA personnalisée.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function MerciPage() {
  return (
    <>
      <SiteHeader absoluteLinks solid />
      <main className="thankyou-page">
        <section className="thankyou-shell">
          <div className="container">
            <div className="thankyou-card">
              <div className="thankyou-icon" aria-hidden="true">
                ✅
              </div>
              <h1 className="thankyou-title">Merci pour votre commande !</h1>
              <p className="thankyou-subtitle">
                Votre feuille de route IA personnalisée sera prête dans 24 heures.
              </p>
              <p className="thankyou-body">
                Pour que nous puissions préparer votre rapport, veuillez maintenant remplir
                notre questionnaire rapide (10 minutes). Il nous permettra d&apos;adapter chaque
                recommandation à votre entreprise.
              </p>
              <div className="thankyou-actions">
                <Link href="/onboarding" className="btn btn-primary thankyou-cta">
                  Remplir le questionnaire maintenant <span aria-hidden="true">→</span>
                </Link>
              </div>
              <p className="thankyou-note">
                Vous recevrez votre rapport par email dans les 24 heures suivant votre
                questionnaire.
              </p>
              <div className="thankyou-support">
                Si vous n&apos;avez pas encore reçu de confirmation de paiement par email,
                vérifiez vos spams ou contactez{" "}
                <a href="mailto:contact@shiftmap.fr">contact@shiftmap.fr</a>.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
