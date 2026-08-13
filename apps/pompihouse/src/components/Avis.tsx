import Image from "next/image";
import fiche from "@/assets/images/fiche-nuts.jpg";
import { CloverIcon, LeafIcon } from "@/components/Decorations";

export function Avis() {
  return (
    <section id="avis" className="bg-cream-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-olive-dark">
            Avis
          </span>
          <h2 className="mt-2 font-serif-display text-3xl text-brown sm:text-4xl">
            La confiance, ça se construit
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brown-soft">
            La PompiHouse démarre son activité en ligne : les premiers avis
            seront bientôt publiés ici. En attendant, chaque séjour donne
            lieu à des nouvelles et des photos comme celles reçues par les
            propriétaires de Nuts, l&apos;un de nos pensionnaires.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl shadow-lg ring-1 ring-brown/5">
            <Image
              src={fiche}
              alt="Fiche de séjour de Nuts, lapin nain bélier de 8 ans, envoyée après deux semaines de vacances à la PompiHouse"
              sizes="(max-width: 1024px) 90vw, 420px"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-3 rounded-2xl bg-cream p-5 ring-1 ring-brown/5">
              <LeafIcon className="mt-1 h-5 w-5 shrink-0 text-leaf" />
              <p className="text-sm leading-relaxed text-brown-soft">
                <span className="font-bold text-brown">
                  Exemple réel de fiche de séjour :
                </span>{" "}
                à la fin des vacances de Nuts, lapin nain bélier de 8 ans,
                Amélie a envoyé cette fiche à ses propriétaires — un aperçu
                concret des nouvelles partagées pendant chaque séjour.
              </p>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-cream p-5 ring-1 ring-brown/5">
              <CloverIcon className="mt-1 h-5 w-5 shrink-0 text-olive-dark" />
              <p className="text-sm leading-relaxed text-brown-soft">
                <span className="font-bold text-brown">
                  Envie d&apos;être parmi les premiers avis ?
                </span>{" "}
                Confiez votre compagnon à la PompiHouse et partagez votre
                expérience — elle aidera d&apos;autres propriétaires à
                choisir en toute confiance.
              </p>
            </div>

            <a
              href="tel:+33680619766"
              className="inline-flex items-center gap-2 rounded-full bg-olive px-6 py-3 text-sm font-bold text-cream shadow-sm transition hover:bg-olive-dark"
            >
              Contacter Amélie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
