import {
  getStaticGoogleFiveStarReviews,
  mergeTestimonials,
} from "@google-reviews";
import pompihouseReviews from "@google-reviews-data/pompihouse.json";
import fiche from "@/assets/images/fiche-nuts.jpg";
import { CloverIcon, LeafIcon } from "@/components/Decorations";
import { ZoomableImage } from "@/components/ZoomableImage";

export function Avis() {
  const reviews = mergeTestimonials(
    [],
    getStaticGoogleFiveStarReviews(pompihouseReviews),
  );

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
            Découvrez les retours des familles qui nous confient leurs petits
            compagnons. Chaque séjour donne aussi lieu à des nouvelles et des
            photos comme celles reçues par les propriétaires de Nuts.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm space-y-5">
            <div className="flex items-start gap-3 rounded-2xl bg-cream p-5 ring-1 ring-brown/5">
              <LeafIcon className="mt-1 h-5 w-5 shrink-0 text-leaf" />
              <p className="text-sm leading-relaxed text-brown-soft">
                <span className="font-bold text-brown">
                  Un séjour tout en douceur :
                </span>{" "}
                des nouvelles régulières, beaucoup d’attention et un cadre
                pensé pour que votre compagnon se sente comme à la maison.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-brown/5">
              <ZoomableImage
                src={fiche}
                alt="Affiche de présentation de la PompiHouse et de ses attentions pour les animaux accueillis"
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-5">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="rounded-2xl bg-cream p-6 ring-1 ring-brown/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <figcaption className="text-sm font-bold text-brown">
                    {review.name}
                  </figcaption>
                  <span
                    aria-label="5 étoiles sur Google"
                    className="text-amber-500"
                    title="Avis Google"
                  >
                    ★★★★★
                  </span>
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-brown-soft">
                  « {review.quote} »
                </blockquote>
                <a
                  href={"googleMapsUrl" in review ? review.googleMapsUrl : "https://www.google.com/maps/place/La+PompiHouse"}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-olive-dark underline underline-offset-4"
                >
                  Voir sur Google Maps
                </a>
              </figure>
            ))}

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
