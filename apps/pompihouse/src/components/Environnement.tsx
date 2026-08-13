import Image from "next/image";
import chalet from "@/assets/images/chalet-exterieur.jpg";
import interieur from "@/assets/images/interieur-cabanes.jpg";
import enclos from "@/assets/images/enclos-exterieur.jpg";
import { LeafIcon } from "@/components/Decorations";

const PHOTOS = [
  {
    src: chalet,
    alt: "Le chalet en bois de la PompiHouse sous un ciel bleu, à La Motte",
    caption: "Le chalet en bois, au cœur d'un jardin verdoyant à La Motte.",
  },
  {
    src: interieur,
    alt: "Espace intérieur en bois avec cabanes et cages aménagées pour les pensionnaires",
    caption:
      "À l'intérieur, des espaces propres et aménagés avec du matériel adapté.",
  },
  {
    src: enclos,
    alt: "Enclos extérieur sécurisé installé dans l'herbe pour les sorties",
    caption:
      "Un enclos extérieur sécurisé, en pleine herbe, pour les sorties et l'exploration.",
  },
];

export function Environnement() {
  return (
    <section id="environnement" className="bg-cream-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-olive-dark">
            Environnement
          </span>
          <h2 className="mt-2 font-serif-display text-3xl text-brown sm:text-4xl">
            Un cadre naturel, pensé pour leur confort
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brown-soft">
            Chalet en bois, espaces intérieurs aménagés et enclos extérieur
            verdoyant : voici, en photos réelles et non retouchées, où vivent
            vos compagnons pendant leur séjour à la PompiHouse.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((photo) => (
            <figure
              key={photo.caption}
              className="group overflow-hidden rounded-3xl bg-cream shadow-sm ring-1 ring-brown/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-start gap-2 p-4 text-sm leading-relaxed text-brown-soft">
                <LeafIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
