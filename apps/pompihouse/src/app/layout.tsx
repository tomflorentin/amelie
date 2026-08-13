import type { Metadata } from "next";
import { lora, nunito, caveat } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "La PompiHouse — Pension pour lapins & rongeurs à La Motte (83)",
  description:
    "Pension familiale pour lapins et rongeurs à La Motte (Var). Un environnement sécurisé et verdoyant, des soins personnalisés au quotidien, des nouvelles régulières pendant le séjour.",
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
      <body>{children}</body>
    </html>
  );
}
