import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Amélienergie | Médium et énergéticienne diplômée",
    template: "%s · Amélienergie",
  },
  description:
    "Amélienergie, médium et énergéticienne diplômée : guidances, soins énergétiques et consultations à distance ou en cabinet.",
  keywords: [
    "médium énergéticienne",
    "guidance spirituelle",
    "consultation médium",
    "soin énergétique",
    "bilan énergétique",
    "Reiki Usui",
    "soin énergétique animal",
    "bougie énergétique artisanale",
  ],
  authors: [{ name: "Amélienergie" }],
  openGraph: {
    title: "Amélienergie, médium et énergéticienne diplômée",
    description:
      "Guidances, soins énergétiques et bougies d'harmonisation personnalisées, à distance ou au cabinet.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Amélienergie",
              description:
                "Guidances, soins énergétiques et bougies d'harmonisation proposées par Amélie.",
              telephone: "+33680619766",
              email: "amelienergie@gmail.com",
              serviceType: [
                "Guidance spirituelle",
                "Soin énergétique",
                "Soin énergétique pour animal",
                "Bougie d'harmonisation énergétique",
              ],
              sameAs: [
                "https://www.facebook.com/amelienergie",
                "https://www.instagram.com/amelieenergie/?hl=fr",
                "https://www.tiktok.com/@amelienergie",
              ],
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
