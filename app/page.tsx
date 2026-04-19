'use client';

import { useEffect } from 'react';

export default function Home() {
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
            <li><a href="#tarifs">Tarifs</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="https://buy.stripe.com/00w00lccefQi0Ce6rl5wI00" className="nav-cta" target="_blank" rel="noopener noreferrer">Démarrer maintenant</a></li>
          </ul>
          <button
            className="nav-mobile-btn"
            aria-label="Menu"
            onClick={(e) => (e.currentTarget as HTMLButtonElement).classList.toggle('open')}
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
              Votre feuille de route IA<br />
              <em>sur mesure —</em> en <span className="accent">24 heures.</span>
            </h1>

            <p className="hero-tagline">Identifiez les bons cas d&apos;usage. Passez à l&apos;action.</p>

            <p className="hero-sub">
              ShiftMap analyse votre contexte et vous remet une feuille de route IA claire,
              priorisée et actionnable. Vous savez où commencer, quoi lancer en premier,
              et ce qu&apos;il faut laisser de côté.
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
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section id="temoignages">
        <div className="container">
          <div className="testimonials-header">
            <span className="section-label">Témoignages</span>
            <h2 className="section-title">Ce que disent nos <em>premiers clients</em></h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card fade-up">
              <div className="testimonial-stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-quote">
                En une heure de questionnaire, ShiftMap a identifié exactement ce qu&apos;on cherchait à cadrer depuis 6 mois. La feuille de route était claire, priorisée, et on a pu la présenter au CODIR le lendemain.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar av-1">SL</div>
                <div>
                  <div className="testimonial-name">Sophie L.</div>
                  <div className="testimonial-role">Directrice Générale, PME industrielle — 65 salariés</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card fade-up">
              <div className="testimonial-stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-quote">
                J&apos;attendais un audit de 40 pages incompréhensible. J&apos;ai reçu 5 priorités concrètes avec les prérequis et la première action à lancer. C&apos;est exactement ce dont on avait besoin pour démarrer.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar av-2">MR</div>
                <div>
                  <div className="testimonial-name">Marc R.</div>
                  <div className="testimonial-role">COO, Société de services — 38 salariés</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card fade-up">
              <div className="testimonial-stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-quote">
                Le rapport à 97€ nous a évité de partir sur un projet IA mal cadré qui nous aurait coûté 10 fois plus. La restitution orale du Pro Report a permis d&apos;aligner toute la direction en 30 minutes.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar av-3">CF</div>
                <div>
                  <div className="testimonial-name">Claire F.</div>
                  <div className="testimonial-role">Fondatrice, Entreprise de distribution — 52 salariés</div>
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
              <h2 className="section-title">Questions <em>fréquentes</em></h2>
              <p>
                Vous avez d&apos;autres questions ? Contactez-nous directement par email, nous répondons en moins de 24h.
              </p>
              <a href="mailto:contact@shiftmap.fr" className="btn btn-outline" style={{marginTop:'24px'}}>
                Nous écrire →
              </a>
            </div>

            <div className="faq-list">

              <div className="faq-item">
                <input type="checkbox" id="faq1" />
                <label className="faq-label" htmlFor="faq1">
                  À qui s&apos;adresse ShiftMap ?
                  <span className="faq-icon"></span>
                </label>
                <div className="faq-body">
                  <div className="faq-body-inner">
                    ShiftMap s&apos;adresse aux PME françaises de 20 à 100 salariés, en particulier aux dirigeants, DG, COO, responsables opérations ou bras droits de direction qui veulent cadrer un premier plan IA sans lancer une mission lourde. Aucune expertise technique n&apos;est requise.
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <input type="checkbox" id="faq2" />
                <label className="faq-label" htmlFor="faq2">
                  Combien de temps faut-il mobiliser de mon côté ?
                  <span className="faq-icon"></span>
                </label>
                <div className="faq-body">
                  <div className="faq-body-inner">
                    Le plus souvent, moins d&apos;une heure pour remplir le questionnaire de cadrage en ligne. C&apos;est tout. Une fois soumis, nous prenons le relais et vous livrons votre feuille de route en 24 heures ouvrées.
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <input type="checkbox" id="faq3" />
                <label className="faq-label" htmlFor="faq3">
                  Que signifie exactement &quot;en 24 heures&quot; ?
                  <span className="faq-icon"></span>
                </label>
                <div className="faq-body">
                  <div className="faq-body-inner">
                    Le délai de 24 heures commence à partir de la réception de votre questionnaire complet. Il s&apos;agit de 24 heures ouvrées (jours de semaine, hors jours fériés). Vous recevez votre feuille de route par email au format PDF.
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <input type="checkbox" id="faq4" />
                <label className="faq-label" htmlFor="faq4">
                  Est-ce que ShiftMap va déployer les outils pour nous ?
                  <span className="faq-icon"></span>
                </label>
                <div className="faq-body">
                  <div className="faq-body-inner">
                    Non. ShiftMap est une offre de cadrage décisionnel rapide. Elle vous aide à choisir quoi lancer en premier, mais n&apos;inclut ni intégration technique, ni développement, ni déploiement. Vous restez libre de passer à l&apos;action avec vos équipes, vos partenaires, ou dans un accompagnement séparé.
                  </div>
                </div>
              </div>

              <div className="faq-item">
                <input type="checkbox" id="faq5" />
                <label className="faq-label" htmlFor="faq5">
                  Et si notre contexte est très spécifique ou technique ?
                  <span className="faq-icon"></span>
                </label>
                <div className="faq-body">
                  <div className="faq-body-inner">
                    La recommandation est construite à partir de votre secteur, de vos objectifs, de vos contraintes et de vos outils existants. Ce n&apos;est pas une liste générique de cas d&apos;usage. Plus votre questionnaire est détaillé, plus la feuille de route sera pertinente pour votre situation.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section id="cta-final">
        <div className="container">
          <div className="cta-final-content">
            <h2 className="cta-final-title">
              Passez de &quot;il faudrait faire quelque chose avec l&apos;IA&quot;<br />
              <em>à un plan clair en 24 heures.</em>
            </h2>
            <p className="cta-final-sub">
              Une feuille de route sur mesure, priorisée, et adaptée à votre entreprise. Sans jargon, sans chantier inutile.
            </p>
            <div className="cta-final-actions">
              <a href="https://buy.stripe.com/00w00lccefQi0Ce6rl5wI00" className="btn btn-primary" style={{fontSize:'16px',padding:'16px 32px'}} target="_blank" rel="noopener noreferrer">
                Démarrer maintenant — 97 €
              </a>
              <a href="#tarifs" className="btn btn-secondary">Comparer les offres</a>
            </div>
            <p className="cta-final-micro">Paiement unique. Feuille de route sur mesure livrée en 24h ouvrées. Sans engagement.</p>
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
