import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Presentation } from "@/components/Presentation";
import { Environnement } from "@/components/Environnement";
import { Prestations } from "@/components/Prestations";
import { Avis } from "@/components/Avis";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Presentation />
        <Environnement />
        <Prestations />
        <Avis />
      </main>
      <Footer />
    </>
  );
}
