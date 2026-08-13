import type { Metadata } from "next";
import {
  getStaticGoogleFiveStarReviews,
  mergeTestimonials,
} from "@google-reviews";
import amelienergieReviews from "@google-reviews-data/amelienergie.json";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Témoignages",
  description: "Les témoignages des personnes accompagnées par Amélienergie.",
};

export default function Temoignages() {
  const googleReviews = getStaticGoogleFiveStarReviews(amelienergieReviews);
  const allTestimonials = mergeTestimonials(testimonials, googleReviews);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.14em] text-mauve">
        Les témoignages
      </p>
      <h1 className="mt-3 font-display text-4xl italic text-ink sm:text-5xl">
        Ce qu&apos;elles et ils en disent
      </h1>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {allTestimonials.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className="mb-6 break-inside-avoid rounded-2xl border border-ink/10 bg-paper-soft p-6"
          >
            <span className="font-display text-3xl italic text-ember">
              «
            </span>
            <blockquote className="mt-1 text-sm leading-relaxed text-ink/80">
              {t.quote}
            </blockquote>
            <figcaption className="mt-4 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-mauve">
              <span>{t.name}</span>
              {"rating" in t && (
                <span aria-label="5 étoiles sur Google" title="Avis Google">
                  ★★★★★
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
