"use client";

import { useState } from "react";

type SiteHeaderProps = {
  absoluteLinks?: boolean;
  solid?: boolean;
};

export function SiteHeader({
  absoluteLinks = false,
  solid = false,
}: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const homePrefix = absoluteLinks ? "/" : "";
  const handleMobileLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <nav id="main-nav" className={solid ? "nav-solid" : undefined}>
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          Shift<span>Map</span>
        </a>
        <ul
          id="nav-mobile-menu"
          className={`nav-links${isMobileMenuOpen ? " nav-links-open" : ""}`}
        >
          <li><a href={`${homePrefix}#probleme`} onClick={handleMobileLinkClick}>Problème</a></li>
          <li><a href={`${homePrefix}#solution`} onClick={handleMobileLinkClick}>Comment ça marche</a></li>
          <li><a href={`${homePrefix}#tarifs`} onClick={handleMobileLinkClick}>Tarifs</a></li>
          <li><a href={`${homePrefix}#faq`} onClick={handleMobileLinkClick}>FAQ</a></li>
          <li><a href="/blog" onClick={handleMobileLinkClick}>Blog</a></li>
          <li><a href="https://buy.stripe.com/00w00lccefQi0Ce6rl5wI00" className="nav-cta" target="_blank" rel="noopener noreferrer" onClick={handleMobileLinkClick}>Démarrer maintenant</a></li>
        </ul>
        <button
          type="button"
          className={`nav-mobile-btn${isMobileMenuOpen ? " open" : ""}`}
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-mobile-menu"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
