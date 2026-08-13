import chalet from "@/assets/images/chalet-exterieur.jpg";
import { ZoomableImage } from "@/components/ZoomableImage";
import { LeafIcon } from "@/components/Decorations";

const PROMISES = [
  "Environnement sécurisé et verdoyant",
  "Soins personnalisés au quotidien",
  "Nouvelles et photos régulières",
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-cream-deep"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-olive/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-olive-dark">
            <LeafIcon className="h-3.5 w-3.5" />
            Pension familiale · La Motte (83)
          </span>

          <h1 className="mt-6 font-serif-display text-4xl leading-tight text-brown sm:text-5xl lg:text-6xl">
            Des vacances sereines pour vos{" "}
            <span className="text-olive-dark">lapins &amp; rongeurs</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-brown-soft">
            Partez l&apos;esprit léger : à la PompiHouse, Amélie accueille
            votre compagnon dans un cadre nature, sécurisé et chaleureux,
            avec des nouvelles régulières tout au long de son séjour.
          </p>

          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {PROMISES.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-semibold text-brown shadow-sm ring-1 ring-brown/5"
              >
                <span className="text-olive-dark">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="tel:+33680619766"
              className="inline-flex items-center gap-2 rounded-full bg-olive px-6 py-3 text-sm font-bold text-cream shadow-md transition hover:bg-olive-dark"
            >
              Demander une disponibilité
            </a>
            <a
              href="#prestations"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-brown underline decoration-honey decoration-2 underline-offset-4 transition hover:text-olive-dark"
            >
              Découvrir la pension
            </a>
          </div>

        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-xl ring-8 ring-cream">
            <ZoomableImage
              src={chalet}
              alt="Le chalet en bois de la PompiHouse, sous un ciel bleu, à La Motte"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
              preload
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-cream px-5 py-3 shadow-lg ring-1 ring-brown/5 sm:-left-8">
            <p className="font-script text-2xl text-olive-dark">
              La PompiHouse
            </p>
            <p className="text-xs font-semibold text-brown-soft">
              Amélie · La Motte (Var)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
