import type { Metadata } from "next";
import { candle, contact } from "@/lib/content";
import { FlameIcon } from "@/components/icons";
import ZoomableImage from "@/components/ZoomableImage";

export const metadata: Metadata = {
  title: "Bougie d'harmonisation énergétique artisanale",
  description:
    "Bougie d'harmonisation énergétique artisanale, faite main et personnalisable par Amélienergie.",
  keywords: ["bougie énergétique", "bougie artisanale", "bougie personnalisée", "harmonisation énergétique"],
};

export default function Bougie() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-mauve">
        <FlameIcon className="h-4 w-4 text-ember" />
        Artisanale &amp; personnalisable
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl italic text-ink sm:text-5xl">
        {candle.title}
      </h1>

      <div className="mt-12 grid gap-12 sm:grid-cols-[1.1fr_1fr] sm:items-start">
        <div className="aura relative aspect-[3/4] overflow-hidden rounded-2xl sm:sticky sm:top-28">
          <ZoomableImage
            src="/images/bougie.jpg"
            alt="Bougies d'harmonisation énergétique artisanales, faites main par Amélie"
            sizes="(min-width: 640px) 480px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-ink/80">
            {candle.intro}
          </p>

          <div className="space-y-5">
            {candle.features.map((feature) => (
              <div key={feature.title} className="flex gap-3">
                <FlameIcon className="mt-1 h-4 w-4 shrink-0 text-ember" />
                <div>
                  <p className="font-semibold text-ink">{feature.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-ember/25 bg-gradient-to-br from-ember-soft/20 via-paper to-paper p-6">
            <div className="flex items-baseline justify-between">
              <p className="font-display text-2xl italic text-ink">
                {candle.title}
              </p>
              <p className="font-display text-2xl italic text-ember">
                {candle.price}
              </p>
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.1em] text-ink/50">
              À personnaliser
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {candle.options.map((option) => (
                <li
                  key={option}
                  className="rounded-full border border-mauve/30 px-3 py-1 text-xs text-mauve"
                >
                  {option}
                </li>
              ))}
            </ul>
            <a
              href={contact.phoneHref}
              className="mt-6 inline-block rounded-full bg-ember px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-paper shadow-[0_10px_30px_-10px_var(--ember)] transition-all hover:-translate-y-0.5 hover:bg-dusk"
            >
              Commander ma bougie
            </a>
            <p className="mt-3 text-xs text-ink/50">
              Par téléphone au {contact.phone} ou par mail à{" "}
              <a href={`mailto:${contact.email}`} className="underline hover:text-ember">
                {contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
