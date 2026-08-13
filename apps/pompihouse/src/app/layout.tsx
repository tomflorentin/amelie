import type { Metadata } from "next";
import { lora, nunito, caveat } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "La PompiHouse | Pension pour lapins et rongeurs à La Motte (83)",
  description:
    "Pension familiale pour lapins et rongeurs à La Motte (Var). Un environnement sécurisé et verdoyant, des soins personnalisés au quotidien, des nouvelles régulières pendant le séjour.",
  keywords: [
    "pension lapins La Motte",
    "pension rongeurs Var",
    "garde lapin vacances",
    "pension NAC La Motte",
    "garde cochons d'Inde",
    "garde hamsters",
    "La PompiHouse",
  ],
  authors: [{ name: "La PompiHouse" }],
  openGraph: {
    title: "La PompiHouse, pension pour lapins et rongeurs",
    description:
      "Une pension familiale à La Motte dans le Var pour les lapins, rongeurs et petits NAC.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${lora.variable} ${nunito.variable} ${caveat.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "La PompiHouse",
              description:
                "Pension familiale pour lapins, rongeurs et petits NAC à La Motte dans le Var.",
              telephone: "+33680619766",
              email: "pompihouse@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "La Motte",
                addressRegion: "Var",
                addressCountry: "FR",
              },
              areaServed: "La Motte et le Var",
              priceRange: "€€",
              sameAs: [
                "https://www.google.com/maps/place/La+PompiHouse",
                "https://www.facebook.com/profile.php?id=61586171836266",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
