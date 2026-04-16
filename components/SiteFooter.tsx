type SiteFooterProps = {
  absoluteLinks?: boolean;
};

export function SiteFooter({ absoluteLinks = false }: SiteFooterProps) {
  const homePrefix = absoluteLinks ? "/" : "";

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              Shift<span>Map</span>
            </div>
            <p className="footer-desc">
              Votre feuille de route IA sur mesure en 24 heures, pour les PME
              françaises qui veulent avancer sans perdre de temps.
            </p>
          </div>
          <div className="footer-links">
            <a href={`${homePrefix}#solution`}>Comment ça marche</a>
            <a href={`${homePrefix}#tarifs`}>Tarifs</a>
            <a href={`${homePrefix}#faq`}>FAQ</a>
            <a href="/blog">Blog</a>
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
  );
}
