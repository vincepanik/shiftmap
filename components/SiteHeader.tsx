"use client";

type SiteHeaderProps = {
  absoluteLinks?: boolean;
  solid?: boolean;
};

export function SiteHeader({
  absoluteLinks = false,
  solid = false,
}: SiteHeaderProps) {
  const homePrefix = absoluteLinks ? "/" : "";

  return (
    <nav id="main-nav" className={solid ? "nav-solid" : undefined}>
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          Shift<span>Map</span>
        </a>
        <ul className="nav-links">
          <li><a href={`${homePrefix}#probleme`}>Problème</a></li>
          <li><a href={`${homePrefix}#solution`}>Comment ça marche</a></li>
          <li><a href={`${homePrefix}#tarifs`}>Tarifs</a></li>
          <li><a href={`${homePrefix}#faq`}>FAQ</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="https://buy.stripe.com/00w00lccefQi0Ce6rl5wI00" className="nav-cta" target="_blank" rel="noopener noreferrer">Démarrer maintenant</a></li>
        </ul>
        <button
          className="nav-mobile-btn"
          aria-label="Menu"
          onClick={(e) => (e.currentTarget as HTMLButtonElement).classList.toggle("open")}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
