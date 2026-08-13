import { LeafIcon } from "@/components/Decorations";

const OFFERS = [
  {
    icon: LeafIcon,
    title: "Pension pour lapins et rongeurs",
    description:
      "La PompiHouse accueille les lapins, cochons d'Inde et autres petits rongeurs dans un environnement calme, verdoyant et adapté aux besoins de chaque espèce.",
    items: [
      "Espaces sécurisés en intérieur et en extérieur",
      "Soins quotidiens personnalisés selon chaque compagnon",
      "Nouvelles et photos envoyées régulièrement pendant le séjour",
      "Autres demandes de NAC étudiées au cas par cas",
    ],
  },
];

export function Prestations() {
  return (
    <section id="prestations" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-olive-dark">
            Prestations
          </span>
          <h2 className="mt-2 font-serif-display text-3xl text-brown sm:text-4xl">
            Des séjours pensés pour chaque compagnon
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brown-soft">
            Quelle que soit l&apos;espèce, chaque pensionnaire reçoit une
            attention personnalisée, dans un cadre sécurisé et rassurant.
          </p>
        </div>

        <div className="mt-10">
          {OFFERS.map(({ icon: Icon, title, description, items }) => (
            <div
              key={title}
              className="rounded-3xl bg-cream-deep p-7 ring-1 ring-brown/5 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive/15">
                <Icon className="h-6 w-6 text-olive-dark" />
              </div>
              <h3 className="mt-5 font-serif-display text-2xl text-brown">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brown-soft">
                {description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-brown"
                  >
                    <span className="mt-0.5 text-olive-dark">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-3xl bg-brown/5 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif-display text-xl text-brown">
              Tarifs, durée et disponibilités
            </h3>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-brown-soft">
              Chaque séjour est différent : contactez Amélie pour connaître
              les disponibilités, tarifs et modalités adaptés à votre
              compagnon.
            </p>
          </div>
          <a
            href="tel:+33680619766"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-olive px-6 py-3 text-sm font-bold text-cream shadow-sm transition hover:bg-olive-dark"
          >
            Demander une disponibilité
          </a>
        </div>
      </div>
    </section>
  );
}
