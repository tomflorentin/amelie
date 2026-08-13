import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { CloverIcon, LeafIcon, PawIcon } from "@/components/Decorations";

const HIGHLIGHTS = [
  {
    icon: LeafIcon,
    title: "Un cadre nature",
    text: "Chalet en bois et jardin verdoyant à La Motte, loin du bruit et du stress.",
  },
  {
    icon: PawIcon,
    title: "Une attention quotidienne",
    text: "Amélie s'occupe de chaque pensionnaire avec des soins personnalisés, jour après jour.",
  },
  {
    icon: CloverIcon,
    title: "Des nouvelles régulières",
    text: "Photos et messages envoyés pendant le séjour, pour partir sans s'inquiéter.",
  },
];

export function Presentation() {
  return (
    <section id="presentation" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-olive/10" />
            <div className="relative rounded-[2rem] bg-cream-deep p-8 ring-1 ring-brown/5">
              <Image
                src={logo}
                alt="Logo La PompiHouse, un lapin et un cochon d'Inde"
                className="mx-auto h-auto w-full max-w-[260px] object-contain"
              />
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-olive-dark">
              Présentation
            </span>
            <h2 className="mt-2 font-serif-display text-3xl text-brown sm:text-4xl">
              Une pension à taille humaine, pensée pour eux
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brown-soft">
              La PompiHouse est une pension familiale pour lapins et
              rongeurs, installée à La Motte, dans le Var. Amélie y accueille
              vos compagnons avec attention, dans un cadre naturel et
              sécurisé, pour des séjours sans stress — pour eux comme pour
              vous.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brown-soft">
              Une attention sur mesure pour les petits compagnons : chaque
              séjour est l&apos;occasion de leur offrir des vacances comme à
              la maison, entourés de verdure et de douceur.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-cream-deep p-5 ring-1 ring-brown/5"
                >
                  <Icon className="h-6 w-6 text-olive-dark" />
                  <h3 className="mt-3 font-serif-display text-lg text-brown">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brown-soft">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
