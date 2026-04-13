import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShiftMap — Votre feuille de route IA sur mesure en 24 heures",
  description: "ShiftMap identifie les meilleurs cas d'usage IA pour votre PME et vous remet une feuille de route actionnable en 24 heures. Transformation digitale, sans chantier inutile.",
  keywords: "feuille de route IA, PME, transformation digitale, intelligence artificielle PME, stratégie IA France, cas d'usage IA, diagnostic IA entreprise",
  openGraph: {
    title: "ShiftMap — Votre feuille de route IA sur mesure en 24 heures",
    description: "Pour les PME françaises qui veulent avancer sur l'IA sans lancer un grand chantier. Diagnostic, priorisation, plan d'action — livré en 24h.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
