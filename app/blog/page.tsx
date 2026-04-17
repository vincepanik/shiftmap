import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { blogArticles } from "./articles";

export const metadata: Metadata = {
  title: "Blog ShiftMap — IA pour PME françaises",
  description:
    "Le blog ShiftMap aide les dirigeants de PME françaises à identifier des cas d'usage concrets de l'IA, choisir les bons outils et avancer rapidement.",
  openGraph: {
    title: "Blog ShiftMap — IA pour PME françaises",
    description:
      "Articles pratiques sur l'IA pour PME, le choix d'outils adaptés et la priorisation des cas d'usage en France.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <SiteHeader absoluteLinks solid />
      <main className="blog-page">
        <section className="blog-hero">
          <div className="container blog-hero-inner">
            <p className="blog-kicker">Blog ShiftMap</p>
            <h1 className="blog-title">Des cas d&apos;usage IA pensés pour les PME françaises.</h1>
            <p className="blog-lead">
              Des contenus courts, concrets et orientés décision pour les dirigeants qui
              veulent transformer l&apos;IA en gains opérationnels mesurables, choisir les
              bons outils et éviter les faux départs.
            </p>
          </div>
        </section>

        <section className="blog-listing">
          <div className="container">
            <div className="blog-grid">
              {blogArticles.map((article) => (
                <article className="blog-card" key={article.slug}>
                  <p className="blog-card-meta">
                    {article.publishedLabel} · {article.readingTime} · {article.wordCount} mots
                  </p>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <a className="blog-card-link" href={`/blog/${article.slug}`}>
                    Lire l&apos;article
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter absoluteLinks />
    </>
  );
}
