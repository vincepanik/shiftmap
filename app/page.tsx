'use client';

import { useEffect, useState } from 'react';

const faqItems = [
  {
    question: 'Combien de temps faut-il pour recevoir ma feuille de route ?',
    answer:
      'Votre feuille de route personnalisée vous est livrée en 24 heures après validation de votre questionnaire.',
  },
  {
    question: 'Qui génère la feuille de route — un humain ou une IA ?',
    answer:
      "Notre système combine l'IA et l'expertise sectorielle pour produire une feuille de route fiable, actionnelle et adaptée à votre PME.",
  },
  {
    question: 'Ma feuille de route sera-t-elle vraiment personnalisée ?',
    answer:
      'Oui. Elle est basée sur votre secteur, votre taille, vos outils existants et vos priorités business — pas un template générique.',
  },
  {
    question: 'Quelle est la différence entre Starter et Pro ?',
    answer:
      "Le Starter identifie vos 3 cas d'usage IA prioritaires. Le Pro ajoute une analyse concurrentielle, une roadmap sur 12 mois et une session de questions/réponses asynchrone.",
  },
  {
    question: 'Puis-je obtenir un remboursement ?',
    answer:
      "Si vous n'êtes pas satisfait de votre feuille de route, contactez-nous sous 7 jours et nous vous remboursons intégralement.",
  },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);
  const reportPreviewSections = [
    {
      icon: '🎯',
      title: "Vos 3 cas d'usage prioritaires",
      description: 'Identifiés selon votre secteur, vos outils actuels et vos défis spécifiques.',
    },
    {
      icon: '📋',
      title: "Plan d'action en 4 semaines",
      description: 'Quoi faire, dans quel ordre, avec quels outils — semaine par semaine.',
    },
    {
      icon: '🛠',
      title: 'Outils recommandés',
      description: "Une sélection d'outils IA adaptés à votre taille d'entreprise et à votre budget.",
    },
    {
      icon: '📈',
      title: "ROI estimé par cas d'usage",
      description: 'Gain de temps estimé, économies potentielles, et indicateurs de succès à suivre.',
    },
  ] as const;

  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById('main-nav');
    if (nav) {
      const handleScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 30);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Intersection Observer for fade-up
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }
  }, []);

  return (
    <>
      {/* NAV */}
      <nav id="main-nav">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">Shift<span>Map</span></a>
          <ul className="nav-links">
            <li><a href="#probleme">Problème</a></li>
            <li><a href="#solution">Comment ça marche</a></li>
            <li><a href="#exemple-rapport">Aperçu</a></li>
            <li><a href="#tarifs">Tarifs</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="https://buy.stripe.com/00w00lccefQi0Ce6rl5wI00" className="nav-cta" target="_blank" rel="noopener noreferrer">Démarrer maintenant</a></li>
          </ul>
          <ul
            id="nav-mobile-menu"
            className="nav-links"
            style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}
          >
            <li><a href="#probleme" onClick={handleMobileMenuClose}>Problème</a></li>
            <li><a href="#solution" onClick={handleMobileMenuClose}>Comment ça marche</a></li>
            <li><a href="#exemple-rapport" onClick={handleMobileMenuClose}>Aperçu</a></li>
            <li><a href="#tarifs" onClick={handleMobileMenuClose}>Tarifs</a></li>
            <li><a href="#faq" onClick={handleMobileMenuClose}>FAQ</a></li>
            <li><a href="https://buy.stripe.com/eVq00k3HeaH536qcsXeOB35" className="nav-cta" target="_blank" rel="noopener noreferrer" onClick={handleMobileMenuClose}>Démarrer maintenant</a></li>
          </ul>
          <button
            type="button"
            className={`nav-mobile-btn${isMobileMenuOpen ? ' open' : ''}`}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="nav-mobile-menu"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-dot"></div>
              Pour les PME françaises de 20 à 100 salariés
            </div>

            <h1 className="hero-title">
              Vous ne savez pas par où commencer avec l&apos;IA ?<br />
              <em>Recevez votre plan d&apos;action personnalisé.</em><span className="accent"></span>
            </h1>

            <p className="hero-tagline">Questionnaire en ligne. Rapport PDF livré en 24h. À partir de 97€.</p>

            <p className="hero-sub">
              ShiftMap analyse votre entreprise et vous remet un plan d&apos;action concret :
              quels outils adopter, dans quel ordre, et comment démarrer dès la semaine prochaine.
            </p>

            <div className="hero-actions">
              <a href="https://buy.stripe.com/00w00lccefQi0Ce6rl5wI00" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Démarrer maintenant
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
              <a href="#solution" className="btn btn-secondary">Voir comment ça marche</a>
            </div>

            <p className="hero-reassurance">Formulaire simple. Résultat en 24h ouvrées. Sans engagement technique.</p>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">24<span>h</span></div>
                <div className="hero-stat-label">Délai de livraison</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">3<span>–5</span></div>
                <div className="hero-stat-label">Priorités actionnables</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">97<span>€</span></div>
                <div className="hero-stat-label">À partir de</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLÈME */}
      <section id="probleme">
        <div className="container">
          <div className="problem-grid">
            <div className="problem-intro fade-up">
              <span className="section-label">Le problème</span>
              <h2 className="section-title">
                Beaucoup de PME veulent exploiter l&apos;IA.<br />
                <em>Très peu savent par où commencer.</em>
              </h2>
              <p>
                Le sujet est devenu prioritaire, mais sur le terrain la même situation
                revient : trop d&apos;idées, trop de discours, pas assez de décisions concrètes.
              </p>

              <div className="problem-cta-block">
                <p><strong>ShiftMap a été conçu pour cette situation précise :</strong> vous aider à passer de l&apos;intention à un plan d&apos;action simple en 24h.</p>
                <a href="#solution" className="btn btn-primary" style={{fontSize:'14px',padding:'11px 22px'}}>Voir la solution →</a>
              </div>
            </div>

            <div className="problem-cards">
              <div className="problem-card fade-up">
                <div className="problem-num">01</div>
                <div className="problem-card-body">
                  <h3>Trop de cas d&apos;usage, aucune boussole</h3>
                  <p>Vous entendez parler de dizaines d&apos;applications IA sans savoir lesquelles sont vraiment pertinentes pour votre activité. Les équipes tournent autour du sujet, mais rien de concret n&apos;avance.</p>
                </div>
              </div>

              <div className="problem-card fade-up">
                <div className="problem-num">02</div>
                <div className="problem-card-body">
                  <h3>Pas le temps ni les ressources pour un diagnostic interne</h3>
                  <p>Entre les opérations, les ventes, le service client et l&apos;administratif, personne n&apos;a plusieurs semaines à consacrer à un cadrage IA. Et faire appel à un grand cabinet coûte trop cher.</p>
                </div>
              </div>

              <div className="problem-card fade-up">
                <div className="problem-num">03</div>
                <div className="problem-card-body">
                  <h3>La peur de lancer un projet lourd sans résultat visible</h3>
                  <p>Ce que vous cherchez, ce n&apos;est pas &quot;faire de l&apos;IA pour faire de l&apos;IA&quot;. C&apos;est prendre une bonne première décision, rapidement, sans immobiliser vos équipes ni votre budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution">
        <div className="container">
          <div className="solution-header">
            <span className="section-label">Comment ça marche</span>
            <h2 className="section-title">Trois étapes. <em>Résultat en 24 heures.</em></h2>
            <p>Un processus simple et structuré pour passer d&apos;une intention vague à un plan d&apos;action clair et défendable.</p>
          </div>

          <div className="steps">
            <div className="step fade-up">
              <div className="step-num">01</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
              </div>
              <h3 className="step-title">Vous partagez votre contexte</h3>
              <p className="step-desc">
                Remplissez un court questionnaire de cadrage : vos objectifs, vos principaux irritants opérationnels, la taille de vos équipes et les outils déjà en place. Moins d&apos;une heure.
              </p>
              <div className="step-badge">~45 min de votre temps</div>
            </div>

            <div className="step fade-up">
              <div className="step-num">02</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              </div>
              <h3 className="step-title">Nous analysons vos priorités</h3>
              <p className="step-desc">
                Notre moteur IA identifie les usages les plus crédibles pour votre secteur et votre taille. Chaque opportunité est évaluée selon trois critères : impact, faisabilité et délai de mise en œuvre.
              </p>
              <div className="step-badge">Analyse automatisée + revue experte</div>
            </div>

            <div className="step fade-up">
              <div className="step-num">03</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 className="step-title">Vous recevez votre feuille de route</h3>
              <p className="step-desc">
                Une synthèse claire avec 3 à 5 opportunités prioritaires, les prérequis de chaque piste, et la première action à lancer sous 7 jours. Livré en 24 heures ouvrées.
              </p>
              <div className="step-badge">Livraison en 24h ouvrées</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLE DE RAPPORT */}
      <section id="exemple-rapport">
        <div className="container">
          <div className="report-preview-header">
            <span className="section-label">Exemple de rapport</span>
            <h2 className="section-title">Ce que vous recevez en 24 heures</h2>
            <p>Un rapport PDF clair et actionnable, structuré autour de votre entreprise.</p>
          </div>

          <div className="report-preview-shell fade-up">
            <div className="report-preview-topline">
              <div>
                <div className="report-preview-kicker">Aperçu du livrable</div>
                <p className="report-preview-intro">
                  Un document pensé pour être lu vite, partagé en comité de direction,
                  puis transformé en plan d&apos;action concret.
                </p>
              </div>
              <div className="report-preview-meta">
                <span>PDF livré par email</span>
                <span>Format décisionnel</span>
                <span>24h ouvrées</span>
              </div>
            </div>

            <div className="report-preview-grid">
              {reportPreviewSections.map((section, index) => (
                <article className="report-preview-card fade-up" key={section.title}>
                  <div className="report-preview-card-head">
                    <div className="report-preview-icon" aria-hidden="true">{section.icon}</div>
                    <div className="report-preview-index">Section {String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="report-preview-cta fade-up">
            <a href="https://buy.stripe.com/eVq00k3HeaH536qcsXeOB35" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Obtenir mon rapport maintenant
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs">
        <div className="container">
          <div className="pricing-header">
            <span className="section-label" style={{color: 'rgba(255,255,255,0.6)'}}>Offres &amp; Tarifs</span>
            <h2 className="section-title">Un investissement clair.<br /><em>Un résultat immédiat.</em></h2>
            <p>Choisissez le niveau d&apos;accompagnement adapté à vos besoins. Pas d&apos;abonnement caché, pas de frais supplémentaires.</p>
          </div>

          <div className="pricing-grid">

            {/* Starter */}
            <div className="pricing-card fade-up">
              <div className="pricing-badge">Starter Report</div>
              <div className="pricing-name">Starter Report</div>
              <div className="pricing-tagline">Pour cadrer rapidement votre première initiative IA.</div>

              <div className="pricing-price">
                <span className="pricing-amount">97</span>
                <span className="pricing-currency">€</span>
              </div>
              <div className="pricing-period">Paiement unique — HT</div>

              <div className="pricing-divider"></div>

              <ul className="pricing-features">
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Questionnaire de cadrage en ligne
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Analyse IA de votre contexte
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  3 cas d&apos;usage prioritaires identifiés
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Feuille de route livrée en 24h ouvrées
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Format PDF actionnable
                </li>
              </ul>

              <a href="https://buy.stripe.com/00w00lccefQi0Ce6rl5wI00" className="pricing-cta" target="_blank" rel="noopener noreferrer">
                Commencer avec Starter →
              </a>
            </div>

            {/* Pro (featured) */}
            <div className="pricing-card featured fade-up">
              <div className="pricing-badge">⭐ Le plus populaire</div>
              <div className="pricing-name">Pro Report</div>
              <div className="pricing-tagline">Pour une feuille de route complète avec accompagnement oral.</div>

              <div className="pricing-price">
                <span className="pricing-amount">147</span>
                <span className="pricing-currency">€</span>
              </div>
              <div className="pricing-period">Paiement unique — HT</div>

              <div className="pricing-divider"></div>

              <ul className="pricing-features">
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Tout le Starter Report
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  5 cas d&apos;usage prioritaires identifiés
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Prérequis détaillés pour chaque piste
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Première action recommandée sous 7 jours
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Restitution orale de 30 minutes incluse
                </li>
              </ul>

              <a href="https://buy.stripe.com/14AdRba467jM5Wy8zt5wI01" className="pricing-cta" target="_blank" rel="noopener noreferrer">
                Commencer avec Pro →
              </a>
            </div>

            {/* AI Advisor */}
            <div className="pricing-card fade-up">
              <div className="pricing-badge">AI Advisor</div>
              <div className="pricing-name">AI Advisor</div>
              <div className="pricing-tagline">Pour un suivi continu de votre transformation IA.</div>

              <div className="pricing-price">
                <span className="pricing-amount">99</span>
                <span className="pricing-currency">€</span>
              </div>
              <div className="pricing-period">Par mois — Abonnement — HT</div>

              <div className="pricing-divider"></div>

              <ul className="pricing-features">
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Pro Report inclus chaque trimestre
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Revue mensuelle des priorités
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Accès direct par email/slack
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Veille IA sectorielle mensuelle
                </li>
                <li>
                  <svg className="pricing-check" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8"/><path d="M5.5 9l2.5 2.5 5-5"/></svg>
                  Sans engagement — résiliable à tout moment
                </li>
              </ul>

              <a href="https://buy.stripe.com/cNi00ldgibA2dp08zt5wI04" className="pricing-cta" target="_blank" rel="noopener noreferrer">
                Souscrire à AI Advisor →
              </a>
            </div>

          </div>

          <p className="pricing-note">Tous les prix sont indiqués HT. TVA française applicable selon votre situation. Paiement sécurisé via Stripe.</p>
          <div className="pricing-followup fade-up">
            <p>Déjà payé ? Remplissez le questionnaire pour lancer la préparation de votre feuille de route.</p>
            <a href="/onboarding" className="btn btn-secondary">
              Remplir le questionnaire
            </a>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section id="temoignages">
        <div className="container">
          <div className="testimonials-header">
            <span className="section-label">Preuves sociales</span>
            <h2 className="section-title">Des retours concrets de dirigeants <em>déjà accompagnés</em></h2>
          </div>

          <div className="testimonials-stats fade-up">
            <span>47 PME françaises accompagnées</span>
            <span aria-hidden="true">·</span>
            <span>Note moyenne : ⭐ 4.8/5</span>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card fade-up">
              <div className="testimonial-stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-quote">
                En 2 heures de questionnaire et 24h d&apos;attente, j&apos;avais un plan clair pour automatiser nos relances clients et améliorer notre suivi stocks. On a économisé l&apos;équivalent d&apos;un mi-temps en 3 mois.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar av-1">SL</div>
                <div>
                  <div className="testimonial-name">Sophie L.</div>
                  <div className="testimonial-role">Directrice Générale, PME logistique (65 salariés, Bordeaux)</div>
                  <div className="testimonial-offer">Offre choisie : Pro Report</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card fade-up">
              <div className="testimonial-stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-quote">
                Je cherchais par où commencer avec l&apos;IA sans me tromper d&apos;outil. ShiftMap m&apos;a donné exactement ça : 3 cas d&apos;usage concrets, les bons outils, et un ordre de déploiement réaliste pour notre taille.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar av-2">MT</div>
                <div>
                  <div className="testimonial-name">Marc T.</div>
                  <div className="testimonial-role">PDG, cabinet de conseil RH (32 salariés, Lyon)</div>
                  <div className="testimonial-offer">Offre choisie : Starter Report</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card fade-up">
              <div className="testimonial-stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-quote">
                Le rapport est dense mais très lisible. Chaque recommandation est justifiée avec un ROI estimé. Ça m&apos;a évité 3 mois de consulting pour 15x moins cher.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar av-3">IR</div>
                <div>
                  <div className="testimonial-name">Isabelle R.</div>
                  <div className="testimonial-role">COO, enseigne retail multi-sites (80 salariés, Paris)</div>
                  <div className="testimonial-offer">Offre choisie : AI Advisor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-aside">
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Levez les <em>dernières objections</em></h2>
              <p>
                Tout est pensé pour vous aider à prendre une décision rapidement, avec une offre simple, un rendu rapide et un risque limité.
              </p>
              <a href="mailto:contact@shiftmap.fr" className="btn btn-outline" style={{marginTop:'24px'}}>
                Nous écrire →
              </a>
            </div>

            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div className="faq-item" key={item.question}>
                  <input type="checkbox" id={`faq${index + 1}`} defaultChecked={index === 0} />
                  <label className="faq-label" htmlFor={`faq${index + 1}`}>
                    {item.question}
                    <span className="faq-icon"></span>
                  </label>
                  <div className="faq-body">
                    <div className="faq-body-inner">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section id="cta-final">
        <div className="container">
          <div className="cta-final-content">
            <h2 className="cta-final-title">Prêt à passer à l&apos;IA ?</h2>
            <p className="cta-final-sub">Obtenez votre feuille de route en 24 heures — sans engagement.</p>
            <div className="cta-final-actions">
              <a href="https://buy.stripe.com/00w00lccefQi0Ce6rl5wI00" className="btn btn-primary cta-final-btn" target="_blank" rel="noopener noreferrer">
                Démarrer Starter — 97€
              </a>
              <a href="https://buy.stripe.com/14AdRba467jM5Wy8zt5wI01" className="btn btn-secondary cta-final-btn" target="_blank" rel="noopener noreferrer">
                Démarrer Pro — 147€
              </a>
            </div>
            <p className="cta-final-micro">Paiement unique. Questionnaire rapide. Livraison en 24h après validation.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-brand">Shift<span>Map</span></div>
              <p className="footer-desc">Votre feuille de route IA sur mesure — en 24 heures. Pour les PME françaises qui veulent avancer sans perdre de temps.</p>
            </div>
            <div className="footer-links">
              <a href="#solution">Comment ça marche</a>
              <a href="#tarifs">Tarifs</a>
              <a href="#faq">FAQ</a>
              <a href="/blog">Blog</a>
              <a href="https://www.linkedin.com/company/shiftmap/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2026 ShiftMap. Tous droits réservés.</p>
            <div className="footer-contact">
              <a href="mailto:contact@shiftmap.fr">contact@shiftmap.fr</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
