import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { secondArticle } from "../articles";

const introParagraphs = [
  `Entre les assistants conversationnels, les outils d'automatisation, les copilotes de vente, les solutions de support client et les plateformes "tout-en-un", un dirigeant de PME peut vite avoir l'impression qu'il existe des centaines d'options et aucune méthode claire pour choisir.`,
  `Le vrai sujet n'est pourtant pas de trouver l'outil le plus impressionnant. Pour une entreprise de 20 à 100 salariés, il s'agit surtout de sélectionner un premier outil IA PME capable de résoudre un problème concret, de s'intégrer sans friction et de produire un résultat visible en quelques semaines. Voici une méthode simple pour choisir un outil intelligence artificielle entreprise sans lancer un chantier disproportionné.`,
] as const;

const selectionSections = [
  {
    title: `Définir d'abord le besoin réel de l'entreprise`,
    paragraphs: [
      `Le mauvais point de départ consiste à choisir une catégorie d'outil parce qu'elle est à la mode. Le bon point de départ consiste à repérer une tension métier déjà connue : trop de temps passé à rédiger, trop de relances manquées, trop de tickets répétitifs, trop de reporting manuel ou trop d'informations dispersées.`,
      `Avant même de faire une shortlist, formulez le besoin de façon opérationnelle : "nous voulons réduire de 30 % le temps passé sur les comptes rendus", "nous voulons répondre plus vite aux demandes simples", ou "nous voulons fiabiliser les relances commerciales". Cette formulation vous évite de comparer des outils incomparables et transforme le choix en décision de pilotage, pas en gadget technologique.`,
    ],
  },
  {
    title: `Évaluer les critères qui comptent vraiment pour une PME`,
    paragraphs: [
      `Un bon outil IA PME n'est pas celui qui multiplie les fonctionnalités. C'est celui qui tient sur cinq critères simples : impact opérationnel, facilité d'adoption, intégration à l'existant, maîtrise des données et coût total réel. Si un outil promet beaucoup mais exige six mois de paramétrage, il n'est probablement pas adapté à une première étape.`,
      `Posez des questions concrètes pendant les démonstrations : qui l'utilisera chaque semaine ? quelle donnée faut-il connecter ? combien de temps faut-il pour obtenir une première valeur ? où sont hébergées les données ? que se passe-t-il si l'on veut arrêter après le pilote ? En pratique, les meilleurs outils pour une PME sont souvent ceux qui s'expliquent en dix minutes et se testent sur un périmètre limité, avec un sponsor métier clairement identifié.`,
    ],
  },
  {
    title: `Identifier les catégories d'outils les plus adaptées aux PME de 20 à 100 salariés`,
    paragraphs: [
      `Pour un premier déploiement, les solutions les plus pertinentes sont rarement les plus complexes. Les assistants de rédaction et de synthèse font gagner du temps aux équipes de direction, les outils de notes de réunion améliorent le suivi commercial et opérationnel, les assistants support réduisent les demandes répétitives, et les outils d'automatisation no-code fluidifient les tâches administratives entre email, CRM et tableurs.`,
      `À l'inverse, méfiez-vous des plateformes qui promettent de transformer toute l'entreprise d'un coup. Si vos processus sont encore mouvants, un outil très large risque de créer plus de dépendance que de valeur. Pour choisir un outil intelligence artificielle entreprise, commencez par une catégorie où le ROI se voit vite, où les utilisateurs sont déjà identifiés et où l'on peut mesurer un avant/après sans reconstruire le système d'information.`,
    ],
  },
  {
    title: `Tester sans risque avant de généraliser`,
    paragraphs: [
      `Le meilleur moyen de choisir son premier outil IA en PME reste le pilote court. Fixez un test de deux à quatre semaines, sur une équipe restreinte, avec un indicateur unique de succès : temps gagné, délai de réponse, nombre de relances effectuées, volume de tickets absorbés ou qualité du reporting. Tant que ce critère n'est pas clair, le test restera subjectif.`,
      `Cadrez aussi les règles du pilote. Définissez quelles données sont autorisées, qui valide les sorties, dans quels cas l'humain garde la main et ce qui doit être documenté pour décider ensuite. Cette approche rassure les équipes, limite le risque perçu et évite l'effet "démo brillante, usage faible". Un bon pilote n'a pas besoin d'être spectaculaire : il doit simplement prouver qu'un usage précis devient plus fluide ou plus fiable.`,
    ],
  },
  {
    title: `Éviter les pièges les plus fréquents`,
    paragraphs: [
      `Le premier piège consiste à acheter un outil avant d'avoir nommé un responsable métier. Sans propriétaire, même un bon logiciel finit sous-utilisé. Le deuxième piège consiste à regarder seulement le prix affiché. Il faut aussi intégrer le temps de prise en main, les éventuelles connexions, la supervision humaine et l'effort de conduite du changement.`,
      `Le troisième piège, très courant, est de choisir selon la popularité plutôt que selon l'usage. Un outil connu n'est pas forcément le bon pour votre contexte. Enfin, ne confondez pas vitesse de réponse et valeur créée. Si l'outil produit des textes plus vite mais ne réduit ni les erreurs, ni les délais, ni la charge réelle des équipes, il n'apporte pas encore un vrai gain. Pour une PME, la bonne décision est sobre, mesurable et réversible.`,
    ],
  },
] as const;

const conclusionParagraphs = [
  `Choisir un premier outil IA n'est pas un concours de modernité. C'est une décision de management: quel irritant voulons-nous éliminer en premier, avec quel niveau de risque acceptable, et quel résultat attendons-nous dans les trente prochains jours ?`,
  `Quand ce cadre est clair, le marché paraît immédiatement moins confus. Vous ne cherchez plus "la meilleure IA", vous cherchez le meilleur levier pour votre entreprise, maintenant.`,
] as const;

export const metadata: Metadata = {
  title: secondArticle.title,
  description:
    "Comment choisir un premier outil IA en PME en 2025 : besoins, critères de sélection, catégories d'outils adaptées, pilote sans risque et erreurs à éviter.",
  keywords: [
    "outil IA PME",
    "choisir outil intelligence artificielle entreprise",
    "outil intelligence artificielle PME",
    "premier outil IA entreprise",
  ],
  openGraph: {
    title: "Comment choisir son premier outil IA en PME : le guide pratique 2025",
    description:
      "Un guide concret pour dirigeants de PME qui veulent sélectionner un premier outil IA utile, testable rapidement et aligné avec un besoin métier.",
    type: "article",
    url: `/blog/${secondArticle.slug}`,
  },
};

export default function BlogArticlePage() {
  return (
    <>
      <SiteHeader absoluteLinks solid />
      <main className="blog-page">
        <section className="blog-hero blog-article-hero">
          <div className="container blog-hero-inner">
            <p className="blog-kicker">Outil IA PME · Guide pratique</p>
            <h1 className="blog-title blog-article-title">{secondArticle.title}</h1>
            <p className="blog-lead blog-article-lead">
              Choisir son premier outil IA est devenu un vrai sujet de direction. Le
              marché bouge vite, les promesses sont nombreuses, et la plupart des PME
              n&apos;ont ni le temps ni l&apos;envie de tester dix solutions avant d&apos;agir.
              Une bonne décision commence par un cadre simple, orienté usage et ROI.
            </p>
            <div className="blog-meta-row">
              <span>{secondArticle.publishedLabel}</span>
              <span>{secondArticle.readingTime}</span>
              <span>{secondArticle.wordCount} mots</span>
            </div>
          </div>
        </section>

        <article className="blog-article-shell">
          <div className="container">
            <div className="blog-article-card">
              {introParagraphs.map((paragraph) => (
                <p className="blog-intro" key={paragraph}>
                  {paragraph}
                </p>
              ))}

              {selectionSections.map((section, index) => (
                <section className="blog-section" key={section.title}>
                  <div className="blog-section-index">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="blog-conclusion">
                <h2>Choisir vite, mais choisir juste</h2>
                {conclusionParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <a className="blog-cta-button" href="https://shiftmap.fr/#tarifs">
                  Besoin d&apos;aide pour choisir ? ShiftMap vous livre votre feuille de route IA
                  en 24h →
                </a>
              </section>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter absoluteLinks />
    </>
  );
}
