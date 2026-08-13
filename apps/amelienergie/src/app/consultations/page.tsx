import type { Metadata } from "next";
import { contact, guidances, soins, type Service } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guidances et soins énergétiques",
  description:
    "Guidances et soins énergétiques d'Amélienergie : durées et tarifs. Réservation par téléphone ou message.",
  keywords: [
    "guidance à distance",
    "consultation médium",
    "soin énergétique à distance",
    "Reiki",
    "soin énergétique animal",
    "tarif guidance",
  ],
};

function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="flex flex-col gap-4 border-b border-ink/10 py-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-display text-xl italic text-ink">
          {service.title}
        </h3>
        <p className="mt-1 max-w-md text-sm text-ink/65">
          {service.description}
        </p>
      </div>
      <div className="flex items-center gap-6 sm:shrink-0">
        <div className="text-right">
          <p className="text-sm text-ink/50">{service.duration}</p>
          <p className="font-display text-lg italic text-ember">
            {service.price}
          </p>
        </div>
        <a
          href={contact.phoneHref}
          className="whitespace-nowrap rounded-full border border-mauve/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-mauve transition-colors hover:border-ember hover:text-ember"
        >
          Me contacter
        </a>
      </div>
    </div>
  );
}

export default function Consultations() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.14em] text-mauve">
        Les consultations
      </p>
      <h1 className="mt-3 font-display text-4xl italic text-ink sm:text-5xl">
        Guidances &amp; soins énergétiques
      </h1>

      <div className="mt-8 space-y-2 rounded-2xl border border-dusk/15 bg-gradient-to-br from-mauve/10 via-paper-soft to-paper-soft p-6 text-sm text-ink/75">
        <p>
          Les guidances se font à distance en appel vidéo via WhatsApp. Les
          soins se font à distance ou en présentiel à mon cabinet.
        </p>
        <p className="font-semibold text-dusk">
          Pas de questions santé ou grossesse, pas de mineurs sauf pour les
          soins.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-ember/30 bg-paper-soft p-6 text-sm text-ink/75">
        Cette page présente mes prestations à titre indicatif. Pour réserver
        une consultation, contactez-moi directement par téléphone au{" "}
        <a href={contact.phoneHref} className="font-semibold text-ember">
          {contact.phone}
        </a>{" "}
        ou par mail à{" "}
        <a href={`mailto:${contact.email}`} className="font-semibold text-ember">
          {contact.email}
        </a>
        .
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl italic text-ink">Guidances</h2>
        <div className="mt-4">
          {guidances.map((service) => (
            <ServiceRow key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl italic text-ink">
          Soins énergétiques
        </h2>
        <div className="mt-4">
          {soins.map((service) => (
            <ServiceRow key={service.title} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
